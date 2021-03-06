define([
    'knockout',
    'kb_common/html',
    './lib/model',
    './components/main'
], function(
    ko,
    html,
    model,
    MainComponent
) {
    'use strict';

    var t = html.tag,
        div = t('div');


    // The module url includes the initial / and, so we start after that,
    // and we aslo remove this file and the modules directory.
    // let pluginPath = module.uri.split('/').slice(1, -2).join('/');

    class Panel {
        constructor(config) {
            this.runtime = config.runtime;
            this.iframer = null;
            this.container = null;
            this.model = new model.Model({
                runtime: this.runtime
            });
        }

        attach(node) {
            this.hostNode = node;
            this.container = node.appendChild(document.createElement('div'));
        }

        start() {
            this.runtime.send('ui', 'setTitle', 'System Alerts - Admin');
            var vm = {
                model: this.model,
                doNavigate: function (path) {
                    this.runtime.send('app', 'navigate', {
                        path: path
                    });
                }
            };
            this.container.innerHTML = div({
                dataBind: {
                    component: {
                        name: MainComponent.quotedName(),
                        params: {
                            model: 'model',
                            doNavigate: 'doNavigate'
                        }
                    }
                }
            });
            ko.applyBindings(vm, this.container);

        }

        stop() {
            if (this.container && this.hostNode) {
                this.hostNode.removeChild(this.container);
            }
            // if (this.iframer) {
            //     return this.iframer.stop();
            // }
        }
    }
    return Panel;
});
