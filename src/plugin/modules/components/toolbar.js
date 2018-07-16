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
        div = t('div'),
        label = t('label'),
        select = t('select'),
        option = t('option');

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
                border: '1px silver solid',
                padding: '4px',
                marginBottom: '4px'
            },
            class: 'btn-toolbar'
        }, [
            div({
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
            ]),
            div({
                class: 'btn-group',
                style: {
                    marginLeft: '12px'
                }
            }, div({
                class: 'form-inline'
            }, [
                label('Show'),
                select({
                    class: 'form-control'
                }, [
                    option('Active'),
                    option('Upcoming'),
                    option('Expired'),
                    option('Canceled'),
                    option('All')
                ])
            ]))
        ]);
    }

    function component() {
        return {
            viewModel: ViewModel,
            template: template()
        };
    }

    return reg.registerComponent(component);
});