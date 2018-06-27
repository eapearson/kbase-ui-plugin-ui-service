define([
    'module',
    'bluebird',
    './comm/iframer'
], function(
    module,
    Promise,
    Iframer
) {
    'use strict';


    // The module url includes the initial / and, so we start after that,
    // and we aslo remove this file and the modules directory.
    let pluginPath = module.uri.split('/').slice(1, -2).join('/');

    class Panel {
        constructor(config) {
            this.runtime = config.runtime;
            this.iframer = null;
            this.container = null;
        }

        attach(node) {
            this.container = node;
        }

        start() {
            this.iframer = new Iframer({
                runtime: this.runtime,
                node: this.container,
                pluginPath: pluginPath
            });

            this.runtime.send('ui', 'setTitle', 'The ClojureScript Experiment');

            return this.iframer.start();
        }

        stop() {
            this.container.innerHTML = '';
            if (this.iframer) {
                return this.iframer.stop();
            }
        }
    }
    return Panel;
});
