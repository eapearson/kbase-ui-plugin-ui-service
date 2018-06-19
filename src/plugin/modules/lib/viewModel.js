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
                this.startAt = ko.observable(new Date(params.startAt));
                this.endAt = ko.observable(params.endAt ? new Date(params.endAt) : null);
                this.status = ko.observable(params.status);
            } else {
                this.id = ko.observable(null);
                this.title = ko.observable();
                this.message = ko.observable();
                this.startAt = ko.observable();
                this.endAt = ko.observable();
                this.status = ko.observable();
            }
        }
    }

    return {Alert};
});