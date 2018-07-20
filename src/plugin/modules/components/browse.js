define([
    'knockout',
    'moment',
    'kb_knockout/lib/viewModelBase',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_common/html',
    '../lib/viewModel'
], function (
    ko,
    moment,
    ViewModelBase,
    reg,
    gen,
    html,
    viewModel
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
        constructor(params, context) {
            super(params);
            // this.alerts = params.alerts;
            this.model = context['$root'].model;

            // this.delete = params.actions.deleteAlert;
            this.doEdit = params.actions.editAlert;
            this.navigate = params.actions.navigate;

            this.selectedTimeRange = ko.observable('current');
            this.timeRangeOptions = ko.observableArray([
                new Option('past', 'Past'),
                new Option('current', 'Current & Upcoming'),
                // new Option('all', 'All')
            ]);

            this.selectedStatus = ko.observable('published');
            this.statusOptions = ko.observableArray([
                new Option('pending', 'Pending'),
                new Option('published', 'Published'),
                new Option('canceled', 'Canceled'),
                // new Option('all', 'All')
            ]);

            this.alerts = ko.observableArray();
            this.alertsIndex = {};

            // Initially we fetch active alerts...??
            this.searchQuery = ko.pureComputed(() => {
                return {
                    timeRange: this.selectedTimeRange(),
                    status: this.selectedStatus()
                };
            });

            this.subscribe(this.searchQuery, () => {
                this.searchAlerts();
            });

            // MAIN
            this.searchAlerts();
        }

        searchAlerts() {
            const userQuery = this.searchQuery();
            const query = {
                op: 'and',
                args: []
            };
            if (userQuery.status) {
                query.args.push({
                    path: 'status',
                    op: 'eq',
                    value: userQuery.status
                });
            }
            if (userQuery.timeRange) {
                switch (userQuery.timeRange) {
                case 'past':
                    query.args.push({
                        path: 'end_at',
                        op: 'lt',
                        value: moment().utc().format()
                    });
                    break;
                case 'current':
                    // query.args.push({
                    //     path: 'start_at',
                    //     op: 'lte',
                    //     value: moment().utc().format()
                    // });
                    query.args.push({
                        path: 'end_at',
                        op: 'gte',
                        value: moment().utc().format()
                    });
                    break;
                }
            }
            this.model.searchAlerts({
                query: query
            })
                .then((alerts) => {
                    this.alerts.removeAll();
                    alerts.forEach((alert) => {
                        let newAlert = new viewModel.Alert({
                            alert: alert,
                            model: this.model
                        });
                        this.alerts.push(newAlert);
                        
                        this.alertsIndex[alert.id] = newAlert;
                    });
                });
        }

        // editAlert(data) {
        //     this.selectedAlert(data);
        //     this.view('edit');
        // }

        deleteAlert(alert) {
            this.alerts.remove(alert);
            this.model.deleteAlert(alert.id())
                .catch((err) => {
                    console.error('ERROR deleting alert', err);
                });
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
                                value: 'selectedTimeRange',
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
                                value: 'selectedStatus',
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
                        }
                    }, div({
                        style: {
                            maxWidth: '30em'
                        },
                        dataBind: {
                            text: 'message'
                        }
                    })),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        }
                    }, div({
                        style: {
                            whiteSpace: 'nowrap'
                        },
                        dataBind: {
                            typedText: {
                                value: 'startAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    })),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        }
                    }, div({
                        style: {
                            whiteSpace: 'nowrap'
                        },
                        dataBind: {
                            typedText: {
                                value: 'endAt',
                                type: '"date"',
                                format: '"YYYY-MM-DD @ h:mm a"'
                            }
                        }
                    })),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        },
                        dataBind: {
                            text: 'status'
                        }
                    }),
                    td({
                        style: {
                            verticalAlign: 'middle'
                        }
                    }, [
                        div({
                            class: 'btn-group pull-right',
                            style: {
                                display: 'flex'
                            },
                        }, [
                            div({
                                class: 'btn btn-primary btn-sm',
                                dataBind: {
                                    click: '$component.doEdit'
                                }
                            }, span({
                                class: 'fa fa-edit'
                            })),
                            div({
                                class: 'btn btn-sm btn-danger',
                                dataBind: {
                                    click: 'function(d,e){return $component.deleteAlert.call($component,d,e);}'
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
            viewModelWithContext: ViewModel,
            template: template()
        };
    }

    return reg.registerComponent(component);
});