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
        span = t('span'),
        table = t('table'),
        thead = t('thead'),
        tbody = t('tbody'),
        tr = t('tr'),
        th = t('th'),
        td = t('td');


    class Option {
        constructor(value, label) {
            this.value = value;
            this.label = label;
        }
    }

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            this.alerts = params.alerts;
            this.delete = params.actions.deleteAlert;
            this.doEdit = params.actions.editAlert;
            this.navigate = params.actions.navigate;

            this.timeRange = params.selectedTimeRange;
            this.timeRangeOptions = ko.observableArray([
                new Option('past', 'Past'),
                new Option('current', 'Current & Upcoming'),
                // new Option('all', 'All')
            ]);

            this.status = params.selectedStatus;
            this.statusOptions = ko.observableArray([
                new Option('pending', 'Pending'),
                new Option('published', 'Published'),
                new Option('canceled', 'Canceled'),
                // new Option('all', 'All')
            ]);
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
                
                div({
                    class: 'form-inline'
                }, [
                    span({
                        style: {
                            color: 'gray',
                            fontVariant: 'small-caps',
                            marginRight: '8px'
                        }
                    }, 'filters: '),
                    div({
                        class: 'form-group'
                    }, [
                        label({
                            style: {
                                marginRight: '4px'
                            }
                        }, 'Time Range'),
                        select({
                            class: 'form-control',
                            dataBind: {
                                value: 'timeRange',
                                options: 'timeRangeOptions',
                                optionsValue: '"value"',
                                optionsText: '"label"',
                                optionsCaption: '"All"'
                            }
                        })
                    ]),
                    div({
                        class: 'form-group',
                        style: {
                            marginLeft: '12px'
                        }
                    }, [
                        label({
                            style: {
                                marginRight: '4px'
                            }
                        }, 'Status'),
                        select({
                            class: 'form-control',
                            dataBind: {
                                value: 'status',
                                options: 'statusOptions',
                                optionsValue: '"value"',
                                optionsText: '"label"',
                                optionsCaption: '"All"'
                            }
                        })
                    ])
                ])
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
                        // th('ID'),
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
                    // td({
                    //     dataBind: {
                    //         text: 'id'
                    //     }
                    // }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
                        dataBind: {
                            text: 'title',
                            attr: {
                                title: 'id'
                            }
                        }
                    }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
                        dataBind: {
                            text: 'message'
                        }
                    }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
                        dataBind: {
                            typedText: {
                                value: 'startAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
                        dataBind: {
                            typedText: {
                                value: 'endAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
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
            buildMenu(),
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