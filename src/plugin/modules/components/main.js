define([
    'knockout',
    'moment',
    'kb_knockout/lib/viewModelBase',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_common/html',
    '../lib/model',
    '../lib/viewModel',
    './browse',
    './edit',
    './new',
    './toolbar'
], function (
    ko,
    moment,
    ViewModelBase,
    reg,
    gen,
    html,
    model,
    viewModel,
    BrowseComponent,
    EditComponent,
    NewComponent,
    ToolbarComponent
) {
    'use strict';

    let t = html.tag,
        div = t('div');

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            this.model = params.model;

            this.ready = ko.observable(false);
            this.alerts = ko.observableArray();
            this.alertsIndex = {};

            this.selectedAlert = ko.observable(null);

            this.view = ko.observable('browse');

            this.selectedTimeRange = ko.observable('current');
            this.selectedStatus = ko.observable('published');

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

            // NB: we need to do this because it is a lot of bother to invoke methods in this
            //     viewmodel from sub-components.
            // Here we are essentially packing up action functions for usage anywhere.
            this.actions = {
                deleteAlert: (data) => {
                    this.deleteAlert(data);
                },
                editAlert: (data) => {
                    this.editAlert(data);
                },
                newAlert: () => {
                    this.createNewAlert();
                },
                addAlert: (data) => {
                    this.addAlert(data);
                },
                updateAlert: (data) => {
                    this.updateAlert(data);
                },
                navigate: (newView) => {
                    this.changeView(newView);
                }                
            };

            this.on('navigate-to-browse', () => {
                this.changeView('browse');
            });

            this.on('navigate-to-new', () => {
                let alert = new viewModel.Alert();
                this.selectedAlert(alert);
                this.changeView('new');
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
                        let newAlert = new viewModel.Alert(alert);                        
                        this.alerts.push(newAlert);
                        
                        this.alertsIndex[alert.id] = newAlert;
                    });
                });
        }

        editAlert(data) {
            this.selectedAlert(data);
            this.view('edit');
        }

        createNewAlert() {
            let alert = new viewModel.Alert();
            this.selectedAlert(alert);
            this.view('new');
        }

        deleteAlert(alert) {
            this.alerts.remove(alert);
            this.model.deleteAlert(alert.id())
                .catch((err) => {
                    console.error('ERROR deleting alert', err);
                });
        }

        addAlert(alert) {
            // NB: alert is already a viewmodel alert as defined above.

            // Here we need to translate the alert to what the model
            // understands (or at least the addAlert method)
            this.model.addAlert({
                title: alert.title(),
                message: alert.message(),
                startAt: alert.startAt().toISOString(),
                endAt: alert.endAt().toISOString(),
                status: alert.status()
            })
                .then((alertId) => {
                    alert.id(alertId);
                    this.alerts.push(alert);
                    return this.model.getAlert(alertId)
                        .then((newAlert) => {
                            // now update the viewmodel alert.
                            alert.updateFromModel(newAlert);
                        });
                });
        }

        updateAlert(alert) {
            let updatedAlert = {
                id: alert.id(),
                title: alert.title(),
                message: alert.message(),
                startAt: alert.startAt().toISOString(),
                endAt: alert.endAt().toISOString(),
                status: alert.status()
            };
            this.model.updateAlert(updatedAlert)
                .then(() => {
                    return this.model.getAlert(alert.id())
                        .then((updatedAlert) => {
                            // now update the viewmodel alert.
                            alert.updateFromModel(updatedAlert);
                        });                 
                });
        }

        changeView(newView) {
            this.view(newView);
        }
    }

    function buildToolbar() {
        return div({
            dataBind: {
                component: {
                    name: ToolbarComponent.quotedName(),
                    params: {
                        actions: 'actions',
                        bus: 'bus'
                    }
                }
            }
        });
    }

    function template() {
        return div({
            style: {
                display: 'flex',
                flexDirection: 'column',
                margin: '10px'
            }
        }, [
            buildToolbar(),
            div({
                style: {
                    flex: '1 1 0px'
                }
            }, gen.switch('view', [
                [
                    '"browse"',
                    div({
                        dataBind: {
                            component: {
                                name: BrowseComponent.quotedName(),
                                params: {
                                    alerts: 'alerts',
                                    actions: 'actions',
                                    selectedTimeRange: 'selectedTimeRange',
                                    selectedStatus: 'selectedStatus'
                                }
                            }
                        }
                    })
                ],
                [
                    '"edit"',
                    div({
                        dataBind: {
                            component: {
                                name: EditComponent.quotedName(),
                                params: {
                                    actions: 'actions',
                                    alert: 'selectedAlert'
                                }
                            }
                        }
                    })
                ],
                [
                    '"new"',
                    div({
                        dataBind: {
                            component: {
                                name: NewComponent.quotedName(),
                                params: {
                                    actions: 'actions',
                                    alert: 'selectedAlert'
                                }
                            }
                        }
                    })
                ]
            ])
            )
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
