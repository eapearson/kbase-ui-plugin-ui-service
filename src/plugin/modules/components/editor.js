define([
    'knockout',
    'jquery',
    'kb_knockout/registry',
    'kb_knockout/lib/generators',
    'kb_knockout/lib/viewModelBase',
    'kb_common/html',

    'bootstrap',
    'bootstrap-datetimepicker'
], function (
    ko,
    $,
    reg,
    gen,
    ViewModelBase,
    html
) {
    'use strict';

    var t = html.tag,
        div = t('div'),
        label = t('label'),
        textarea = t('textarea'),
        button = t('button'),
        select = t('select'),
        input = t('input');
    
    ko.bindingHandlers.dateTimePicker = {
        init: function (element, valueAccessor, allBindings, data, context) {
            let value = valueAccessor();
            // TODO: ensure bound to input.
            element.value = ko.unwrap(value.value);
            $(element).datetimepicker({
                showClose: true
            });
            // $(element).on('change', function () {
            //     valueAccessor.value(this.value);
            //     console.log('changed!', this.value);
            // });

            //when a user changes the date, update the view model
            ko.utils.registerEventHandler(element, 'dp.change', function (event) {
                if (ko.isObservable(value.value)) {
                    if (event.date != null && !(event.date instanceof Date)) {
                        // momentjs?
                        value.value(event.date.toDate());
                    } else {
                        value.value(event.date);
                    }
                }
            });

            ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                var picker = $(element).data('DateTimePicker');
                if (picker) {
                    picker.destroy();
                }
            });
        },
        update: function (element, valueAccessor) {
            let value = valueAccessor();
            var picker = $(element).data('DateTimePicker');
            //when the view model is updated, update the widget
            if (!picker) {
                return;
            }
            let koDate = ko.utils.unwrapObservable(value.value);

            if (typeof koDate !== 'object') {
                koDate = new Date(koDate);
            }

            picker.date(koDate);
        }
    };

    class ViewModel extends ViewModelBase {
        constructor(params) {
            super(params);
            
            this.alert = ko.unwrap(params.alert);
            this.actions = params.actions;

            this.statuses = [
                {
                    value: 'pending',
                    label: 'Pending'
                },
                {
                    value: 'published',
                    label: 'Published'
                },
                {
                    value: 'canceled',
                    label: 'Canceled'
                },
            ];

            this.isSavable = ko.pureComputed(() => {
                let title = this.alert.title();
                if (!title) {
                    return false;
                }

                let message = this.alert.message();
                if (!message) {
                    return false;
                }

                let startsAt = this.alert.startAt();
                if (!startsAt) {
                    return false;
                }

                let endAt = this.alert.endAt();
                if (!endAt) {
                    return false;
                }

                let status = this.alert.status();
                if (!status) {
                    return false;
                }

                return true;
            });
        }

        doSave() {
            if (this.alert.id()) {
                this.actions.updateAlert(this.alert);
            } else {
                this.actions.addAlert(this.alert);
            }
        }

        doCancel() {
            this.actions.navigate('browse');
        }
    }

    function buildEditForm() {
        return div({
            style: {
                border: '1px blue solid'
            },
            dataBind: {
                with: 'alert'
            }
        }, div({
            class: 'form-horizontal'
        }, [
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'ID'),
                div({
                    class: 'col-sm-10'
                }, input({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'ID',
                    dataBind: {
                        textInput: 'id'
                    },
                    readonly: true
                }))
            ]),
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'Title'),
                div({
                    class: 'col-sm-10'
                }, input({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'Title',
                    dataBind: {
                        textInput: 'title'
                    }
                }))
            ]),
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'Message'),
                div({
                    class: 'col-sm-10'
                }, textarea({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'Message',
                    dataBind: {
                        textInput: 'message'
                    }
                }))
            ]),
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'Starts at'),
                div({
                    class: 'col-sm-10'
                }, input({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'Starts at',
                    dataBind: {
                        dateTimePicker: {
                            value: 'startAt'
                        }
                    }
                }))
            ]),
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'Ends at'),
                div({
                    class: 'col-sm-10'
                }, input({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'Ends at',
                    dataBind: {
                        dateTimePicker: {
                            value: 'endAt'
                        }
                    }
                }))
            ]),
            div({
                class: 'form-group'
            }, [
                label({
                    class: 'col-sm-2 control-label'
                }, 'Status'),
                div({
                    class: 'col-sm-10'
                }, select({
                    type: 'text',
                    class: 'form-control',
                    placeholder: 'Status',
                    dataBind: {
                        value: 'status',
                        options: '$component.statuses',
                        optionsText: '"label"',
                        optionsValue: '"value"'
                    }
                }))
            ])
        ]));
    }

    function buildControls() {
        return div({
            style: {
                border: '1px red solid'
            },
            class: 'btn-toolbar'
        }, div({
            class: 'btn-group'
        }, [
            button({
                class: 'btn btn-primary',
                dataBind: {
                    click: 'function(d,e){$component.doSave.call($component,"browse");}',
                    enable: 'isSavable'
                }
            }, 'Save'),
            button({
                class: 'btn btn-default',
                dataBind: {
                    click: 'function(d,e){$component.doCancel.call($component,"new");}'
                }
            }, 'Cancel')
        ]));
    }

    function template() {
        return div({}, [
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