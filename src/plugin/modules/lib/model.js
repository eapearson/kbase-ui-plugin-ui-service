define([
    'moment'
], function (
    moment
) {
    'use strict';

    /* Alert is the model's view of an alert. */
    class Alert {
        constructor({id, title, message, startAt, endAt, status}) {
            this.id = id;
            this.title = title; 
            this.message = message;
            this.startAt = startAt;
            this.endAt = endAt;
            this.status = status;
        }

        toJSON() {
            return {
                id: this.id,
                title: this.title,
                message: this.message,
                start_at: moment(this.startAt).utc().format(),
                end_at: moment(this.endAt).utc().format(),
                status: this.status
            };
        }
    }

    class Model {
        constructor(params) {
            this.runtime = params.runtime;
            this.alerts = [];
            this.alertsIndex = {};
        }

        searchAlerts({query}) {
            // return this.alerts;
           
            const client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('search_alerts', [{
                query: query
            }])
                .spread((result) => {
                    return result.alerts;
                });
        }

        getAlerts() {
            const client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('search_alerts', [{}])
                .spread((result) => {
                    return result.alerts;
                });
        }

        getAlert(alertId) {
            const client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('get_alert', [alertId])
                .spread((alert) => {
                    return alert;
                });
        }

        deleteAlert(alertId) {
            let client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('delete_alert', [alertId])
                .spread((result) => {
                    return result;
                });
        }

        updateAlert(alert) {
            let alertToUpdate = new Alert(alert);
            let client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('update_alert', [{
                alert: alertToUpdate.toJSON()
            }]);
        }

        addAlert(alert) {
            let newAlert = new Alert(alert);
            // newAlert.genId();
            let client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('add_alert', [{
                alert: newAlert.toJSON()
            }])
                .spread((result) => {
                    return result.id;
                });
            // this.alerts.push(alert);
            // this.alertsIndex[alert.id] = alert;
        }
    }

    return {Model, Alert};
});