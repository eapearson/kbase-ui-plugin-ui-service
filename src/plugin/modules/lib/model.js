define([
    'bluebird',
    'uuid',
    'kb_common/jsonRpc/dynamicServiceClient'
], function (
    Promise,
    Uuid,
    DynamicServiceClient
) {
    'use strict';

    class Alert {
        constructor({id, title, message, startAt, endAt, status}) {
            this.id = id;
            this.title = title; 
            this.message = message;
            this.startAt = startAt;
            this.endAt = endAt;
            this.status = status;
        }

        genId() {
            this.id = new Uuid(4).format();
        }

        toJSON() {
            return {
                id: this.id,
                title: this.title,
                message: this.message,
                start_at: this.startAt,
                end_at: this.endAt,
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

        searchAlerts() {
            // return this.alerts;
            let client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            // let client = new DynamicServiceClient({
            //     module: 'UIService',
            //     url: this.runtime.config('services.ServiceWizard.url'),
            //     token: this.runtime.service('session').getAuthToken()
            // });
            return client.callFunc('search_alerts', [{}])
                .spread((result) => {
                    console.log('result?', result);
                    return result.alerts;
                });
        }

        getAlerts() {
            // return this.alerts;
            let client = new DynamicServiceClient({
                module: 'UIService',
                url: this.runtime.config('services.ServiceWizard.url'),
                token: this.runtime.service('session').getAuthToken()
            });
            return client.callFunc('search_alerts', [{}])
                .spread((result) => {
                    return result.alerts;
                });
        }

        deleteAlert(alertId) {
            let client = this.runtime.service('rpc').makeClient({
                module: 'UIService'
            });
            return client.callFunc('delete_alert', [
                alertId
            ]);
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