define([
    'knockout'
], function (
    ko
) {
    'use strict';

    class Alert {
        constructor({alert, model}) {
            if (!model) {
                throw new TypeError('"model" argument required');
            }

            this.model = model;

            if (alert) {
                this.id = ko.observable(alert.id);
                this.title = ko.observable(alert.title);
                this.message = ko.observable(alert.message);
                this.startAt = ko.observable(new Date(alert.start_at));
                this.endAt = ko.observable(alert.end_at ? new Date(alert.end_at) : null);
                this.status = ko.observable(alert.status);
                this.createdAt = ko.observable(new Date(alert.created_at));
                this.createdBy = ko.observable(alert.created_by);
                this.updatedAt = ko.observable(alert.updated_at ? new Date(alert.updated_at) : null);
                this.updatedBy = ko.observable(alert.updated_by);
            } else {
                this.id = ko.observable(null);
                this.title = ko.observable();
                this.message = ko.observable();
                this.startAt = ko.observable();
                this.endAt = ko.observable();
                this.status = ko.observable();
                this.createdAt = ko.observable();
                this.createdBy = ko.observable();
                this.updatedAt = ko.observable();
                this.updatedBy = ko.observable();
            }
        }

        updateFromModel(modelAlert) {
            this.title(modelAlert.title);
            this.message(modelAlert.message);
            this.startAt(new Date(modelAlert.start_at));
            this.endAt(modelAlert.end_at ? new Date(modelAlert.end_at) : null);
            this.status(modelAlert.status);
            this.createdAt(new Date(modelAlert.created_at));
            this.createdBy(modelAlert.created_by);
            this.updatedAt(modelAlert.updated_at ? new Date(modelAlert.updated_at) : null);
            this.updatedBy(modelAlert.updated_by);
        }

        addToModel() {
            // NB: alert is already a viewmodel alert as defined above.

            // Here we need to translate the alert to what the model
            // understands (or at least the addAlert method)
            this.model.addAlert({
                title: this.title(),
                message: this.message(),
                startAt: this.startAt().toISOString(),
                endAt: this.endAt().toISOString(),
                status: this.status()
            })
                .then((alertId) => {
                    this.id(alertId);
                    return this.model.getAlert(alertId)
                        .then((newAlert) => {
                            // now update the viewmodel alert.
                            this.updateFromModel(newAlert);
                        });
                });
        }
    }

    return {Alert};
});