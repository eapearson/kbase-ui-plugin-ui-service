define([
    'knockout',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_knockout/lib/viewModelBase',
    'kb_common/html'
], function (
    ko,
    reg,
    gen,
    ViewModelBase,
    html
) {
    'use strict';

    var t = html.tag,
        div = t('div');

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            
            this.alert = params.alert;
        }
    }

    function buildToolbar() {

    }

    function buildEditForm() {

    }

    function buildControls() {

    }

    function template() {
        return div({}, [
            buildToolbar(),
            buildEditForm(),
            buildControls()
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