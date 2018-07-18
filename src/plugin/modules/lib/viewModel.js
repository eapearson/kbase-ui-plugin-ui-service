define([
    'knockout',
    'uuid',
    'kb_knockout/lib/viewModelBase'
], function (
    ko,
    Uuid,
    ViewModelBase
) {
    'use strict';

    class Alert {
        constructor(params) {
            if (params) {
                this.id = ko.observable(params.id);
                this.title = ko.observable(params.title);
                this.message = ko.observable(params.message);
                this.startAt = ko.observable(new Date(params.start_at));
                this.endAt = ko.observable(params.end_at ? new Date(params.end_at) : null);
                this.status = ko.observable(params.status);
                this.createdAt = ko.observable(new Date(params.created_at));
                this.createdBy = ko.observable(params.created_by);
                this.updatedAt = ko.observable(params.updated_at ? new Date(params.updated_at) : null);
                this.updatedBy = ko.observable(params.updated_by);
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
    }

    return {Alert};
});