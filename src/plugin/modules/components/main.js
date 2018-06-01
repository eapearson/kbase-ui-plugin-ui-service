define([
    'knockout',
    'kb_knockout/lib/viewModelBase',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_common/html',
    './browse',
    './edit'
], function (
    ko,
    ViewModelBase,
    reg,
    gen,
    html,
    BrowseComponent,
    EditComponent
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

            this.selectedAlert = ko.observable(null);

            this.view = ko.observable('browse');

            this.model.fetchAlerts()
                .then((alerts) => {
                    alerts.forEach((alert) => {
                        this.alerts.push({
                            id: alert.id,
                            title: alert.title,
                            description: alert.description,
                            startAt: new Date(alert.startAt),
                            endAt: (alert.endAt ? new Date(alert.endAt) : null)
                        });
                    });
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
                navigate: (newView) =>{
                    this.changeView(newView);
                }
            };
        }

        editAlert(data) {
            // console.log('editing:', data);
            this.selectedAlert(data);
            this.view('edit');
        }

        deleteAlert(data) {
            this.alerts.remove(data);
            this.model.deleteAlert(alert.id);
        }

        changeView(newView) {
            this.view(newView);
        }
    }

    function template() {
        return div({
            style: {
                display: 'flex',
                flexDirection: 'column',
                margin: '10px'
            }
        }, [
            div({
                style: {
                    flex: '0 0 2em'
                }
            }, 'Browse'),
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
                                    actions: 'actions'
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