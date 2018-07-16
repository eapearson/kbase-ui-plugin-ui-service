define([
    'knockout',
    'kb_knockout/lib/viewModelBase',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_common/html'
], function (
    ko,
    ViewModelBase,
    reg,
    gen,
    html
) {
    'use strict';

    let t = html.tag,
        div = t('div'),
        label = t('label'),
        select = t('select'),
        option = t('option'),
        span = t('span'),
        table = t('table'),
        thead = t('thead'),
        tbody = t('tbody'),
        tr = t('tr'),
        th = t('th'),
        td = t('td');

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            this.alerts = params.alerts;
            this.delete = params.actions.deleteAlert;
            this.doEdit = params.actions.editAlert;
            this.navigate = params.actions.navigate;
        }
    }

    function buildMenu() {
        return div([
            div({
                class:'btn-toolbar',
                style: {
                    display: 'inline-block'
                }
            }, [
                // div({
                //     class: 'btn-group'
                // }, [
                //     span({
                //         class: 'btn'
                //     }, 'Browsing Alerts'),

                // ]),
    
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
            ])
        ]);
    }

    function buildBrowseTable() {
        return div([
            table({
                class: 'table table-striped'
            }, [
                thead([
                    tr([
                        th('ID'),
                        th('Title'),
                        th('Message'),
                        th('Start at'),
                        th('End at'),
                        th('Status'),
                        th()
                    ])
                ]),
                tbody({
                    dataBind: {
                        foreach: 'alerts'
                    }
                }, tr([
                    td({
                        dataBind: {
                            text: 'id'
                        }
                    }),
                    td({
                        dataBind: {
                            text: 'title'
                        }
                    }),
                    td({
                        dataBind: {
                            text: 'message'
                        }
                    }),
                    td({
                        dataBind: {
                            typedText: {
                                value: 'startAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    }),
                    td({
                        dataBind: {
                            typedText: {
                                value: 'endAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    }),
                    td({
                        dataBind: {
                            text: 'status'
                        }
                    }),
                    td([
                        div({
                            class: 'btn-group pull-right'
                        }, [
                            div({
                                class: 'btn btn-default btn-sm',
                                dataBind: {
                                    click: '$component.doEdit'
                                }
                            }, span({
                                class: 'fa fa-edit'
                            })),
                            div({
                                class: 'btn btn-danger btn-sm',
                                dataBind: {
                                    click: 'function(d,e){return $component.delete.call($component,d,e);}'
                                }
                            }, span({
                                class: 'fa fa-trash'
                            }))
                        ])
                    ])
                ]))
            ])
        ]);
    }

    function template() {
        return div([
            // buildMenu(),
            buildBrowseTable()
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