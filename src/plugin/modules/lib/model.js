define([
    'bluebird'
], function (
    Promise
) {
    'use strict';

    class Model {
        constructor(params) {
            this.runtime = params.runtime;
            this.alerts = [];
            this.alertsIndex = {};
        }

        fetchAlerts() {
            return Promise.try(() => {
                return [
                    {
                        id: '123',
                        title: 'test alert',
                        description: 'This is a test alert',
                        startAt: new Date('6/1/2018'),
                        endAt: new Date('6/2/2018')
                    },
                    {
                        id: '345',
                        title: 'test alert 2',
                        description: 'This is a second test alert',
                        startAt: new Date('7/1/2018'),
                        endAt: new Date('7/2/2018')
                    }
                ];
            })
                .then((alerts) => {                    
                    alerts.forEach((alert) => {
                        this.alerts.push(alert);
                        this.alertsIndex[alert.id] = alert;
                    });
                    return this.alerts;
                });
        }

        getAlerts() {
            return this.alerts;
        }

        deleteAlert(alertId) {
            delete this.alertsIndex[alertId];
            this.alerts = this.alerts.filter((alert) => {
                return (alert.id !== alertId);
            });
        }
    }

    return {Model};
});