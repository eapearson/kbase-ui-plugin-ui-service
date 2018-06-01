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

    // console.log('plugin path: ', pluginPath);
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
            this.container = node;
        }

        start() {
            this.runtime.send('ui', 'setTitle', 'UI Service Admin');
            var vm = {
                model: this.model
            };
            this.container.innerHTML = div({
                dataBind: {
                    component: {
                        name: MainComponent.quotedName(),
                        params: {
                            model: 'model'
                        }
                    }
                }
            });
            ko.applyBindings(vm, this.container);

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
