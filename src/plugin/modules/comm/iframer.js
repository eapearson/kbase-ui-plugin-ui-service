define([
    'bluebird',
    'kb_common/html',
    './windowMessages'
], function (
    Promise,
    html,
    WindowMessages
) {
    'use strict';

    var t = html.tag,
        div = t('div'),
        iframe = t('iframe');


    class Iframe {
        constructor(config) {
            // having the host be configurable means we can also host
            // this plugin somehwere else.
            this.origin = config.origin;
            this.pathRoot = config.pathRoot;


            // So we can deterministically find the iframe 
            this.id = 'frame_' +  html.genId();

            let params = Object.assign({
                frameId: this.id,
                parentHost: document.location.origin
            }, config.params);
            
            // All plugins need to follow this pattern for the index for now (but that
            // could be part of the constructor...)
            let indexPath = this.pathRoot + '/iframe_root/public/index.html';

            // Make an absolute url to this.
            this.url = this.origin + '/' + indexPath;

            // The iframe framework, designed to give a full height and width responsive
            // window with the content area of the ui.
            this.content = div({
                style: {
                    flex: '1 1 0px',
                    display: 'flex',
                    fiexDirection: 'column'
                }
            }, [
                iframe({
                    id: this.id,
                    dataParams: encodeURIComponent(JSON.stringify(params)),
                    style: {
                        width: '100%',
                        flex: '1 1 0px',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    frameborder: '0',
                    scrolling: 'no',
                    // src: url
                })
            ]);

            this.node = null;
        }

        attach(node) {
            this.node = node;
            this.node.innerHTML = this.content;
            this.iframe = document.getElementById(this.id);
            this.window = this.iframe.contentWindow;
        }

        start() {
            this.window.location = this.url;
            // inside the web app launched by this will send the 'ready' message
            // to the window when it is finished loading and is ready for communication 
            // with kbase-ui, e.g. to receive configuration, navigation events, etc.
        }

    }

    class Iframer {
        constructor(config) {
            this.container = config.node;
            this.pluginPath = config.pluginPath;
            this.runtime = config.runtime;

            this.id = 'host_' + html.genId();

            // this.hostOrigin = document.location.origin;
            // this.iframeOrigin = document.location.origin;

            this.channel = new WindowMessages.Channel({
                window: window,
                host: document.location.origin,
                // recieveFor: [this.id],
                // clientId: this.iframe.id,
                // hostId: this.id
            });

            // console.log('created new window channel with id', this.channel.id);

            this.iframe = new Iframe({
                origin: document.location.origin,
                pathRoot: this.pluginPath,
                params: {
                    channelId: this.channel.id,
                    hostId: this.id
                }
            });

            this.iframe.attach(this.container);

            // this.iframeMessages = new WindowMessages({
            //     // window: window,
            //     host: document.location.origin,
            //     clientId: this.iframe.id,
            //     hostId: this.id
            // });
        }

        // Lifecycle

        /*
        iframe messages lifecycle.

        create iframe, don't set source yet
        set up postmessage listener on the iframe content window
        listem for 'ready' message
        load content for iframe
        content will set up listening on window's postmessage too
        content sends 'ready' message
        host receives ready message and finishes setting up postmessage listener for the
          iframe client
        host sets up all listeners to support client
        life goes on
        when client is being removed e.g. for navigation it is sent the 'stop' message given 
          some interval in which to finish this work before it is just axed.
        */

        start() {
            return Promise.try(() => {

                this.channel.start();

                this.channel.on('get-auth-status', () => {
                    this.channel.send('auth-status', {
                        // id: message.enevelope.id,
                        token: this.runtime.service('session').getAuthToken(),
                        username: this.runtime.service('session').getUsername()
                    });
                });
    
                this.channel.on('get-config', () => {
                    this.channel.send('config', {
                        // id: message.id,
                        value: this.runtime.rawConfig()
                    });
                });

                this.iframe.start();

                // this.chn.send('hi');

                // return this.channel.when('ready', 1000)
                //     .then(() => {
                //         // console.log('got ready!');
                //         // The initial "ready" message is sent when the iframe has finished loading and is ready
                //         // to interact with the kbase-ui host.
                //         this.channel.on('rendered', (message) => {
                //             let height = message.height;
                //             let iframe = this.container.getElementById(this.iframe.id);
                //             iframe.style.height = height + 'px';
                //         });
            
                //         this.channel.on('get-auth-status', (message) => {
                //             this.channel.send('auth-status', {
                //                 id: message.id,
                //                 token: this.runtime.service('session').getAuthToken(),
                //                 username: this.runtime.service('session').getUsername()
                //             });
                //         });
            
                //         this.channel.on('get-config', (message) => {
                //             this.channel.send('config', {
                //                 id: message.id,
                //                 value: this.runtime.rawConfig()
                //             });
                //         });

                //         this.channel.send('start');
                //     })
                //     .catch((err) => {
                //         console.error('Error: ', err);
                //     }); 
            });
                  
        }

        stop() {
            this.container.innerHTML = '';
            return this.channel.stop();
        }


    }

    return Iframer;
});
