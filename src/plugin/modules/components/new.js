define([
    'knockout',
    'jquery',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_knockout/lib/viewModelBase',
    'kb_common/html',
    './editor',

    'bootstrap',
    'bootstrap-datetimepicker'
], function (
    ko,
    $,
    reg,
    gen,
    ViewModelBase,
    html,
    EditorComponent
) {
    'use strict';

    var t = html.tag,
        div = t('div');

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            
            this.alert = params.alert;
            this.actions = params.actions;

        }
    }

    function buildEditor() {
        return div({
            dataBind: {
                component: {
                    name: EditorComponent.quotedName(),
                    params: {
                        alert: 'alert',
                        actions: 'actions'
                    }
                }
            }
        });
    }


    function template() {
        return div({}, [
            buildEditor()
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