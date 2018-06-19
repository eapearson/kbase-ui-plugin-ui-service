define([
    'knockout',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_knockout/lib/viewModelBase',
    'kb_common/html',

    'bootstrap'
], function (
    ko,
    reg,
    gen,
    ViewModelBase,
    html
) {
    'use strict';

    var t = html.tag,
        button = t('button'),
        div = t('div');

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            
            this.alert = params.alert;

            this.navigate = params.actions.navigate;


        }

        doNavigate(to) {
            this.navigate(to);
        }

        doShowBrowse() {
            this.sendToParent('navigate-to-browse');
        }

        doShowNewAlert() {
            this.sendToParent('navigate-to-new');
        }
    }

    function template() {
        return div({
            style: {
                border: '1px red solid'
            },
            class: 'btn-toolbar'
        }, div({
            class: 'btn-group'
        }, [
            button({
                class: 'btn btn-default',
                dataBind: {
                    click: 'function(d,e){$component.doShowBrowse.call($component);}'
                }
            }, 'Browse'),
            button({
                class: 'btn btn-default',
                dataBind: {
                    click: 'function(d,e){$component.doShowNewAlert.call($component);}'
                }
            }, 'New')
        ]));
    }

    function component() {
        return {
            viewModel: ViewModel,
            template: template()
        };
    }

    return reg.registerComponent(component);
});