define([], function() {
    'use strict';

    class IframeMessages {
        constructor(config) {
            this.root = config.root;
            this.name = config.name;

            this.awaitingResponse = {};
            this.listeners = {};
            this.partners = {};

            this.lastId = 0;
            this.sentCount = 0;
            this.receivedCount = 0;
        }

        genId() {
            this.lastId += 1;
            return 'msg_' + String(this.lastId);
        }

        addPartner(partner) {
            this.partners[partner.name] = partner;
        }

        listen(listener) {
            if (!this.listeners[listener.name]) {
                this.listeners[listener.name] = [];
            }
            this.listeners[listener.name].push(listener);
        }

        receiveMessage(event) {
            // let origin = event.origin || event.originalEvent.origin;
            let message = event.data;
            // let listener, response;

            if (typeof message === 'string') {
                message = JSON.parse(message);
            }

            // A message sent as a request will have registered a response handler
            // in the awaitingResonse hash, using a generated id as the key.
            if (message._awaitingId && this.awaitingResponse[message._awaitingId]) {
                try {
                    let response = this.awaitingResponse[message._awaitingId];
                    delete this.awaitingResponse[message._awaitingId];
                    response.handler(message, event);
                } catch (ex) {
                    console.error('Error handling response for message ', message, ex);
                }
            }

            // Otherwise, permanently registered handlers are found in the listeners for the
            // message name.
            if (this.listeners[message.name]) {
                this.listeners[message.name].forEach((listener) => {
                    try {
                        listener.handler(message, event);
                    } catch (ex) {
                        console.error('Error handling listener for message', message, ex);
                    }
                });
            }
        }

        getPartner(name) {
            let partner =this.partners[name];
            if (!partner) {
                throw new Error('Partner ' + name + ' not registered');
            }
            return partner;
        }

        sendMessage(partnerName, message) {
            let partner = this.getPartner(partnerName);
            message.from = name;
            partner.window.postMessage(message, partner.host);
        }

        sendRequest(partnerName, message, handler) {
            let id = this.genId();
            message._awaitingId = id;
            this.awaitingResponse[id] = {
                started: new Date(),
                handler: handler
            };
            this.sendMessage(partnerName, message);
        }

        request(partnerName, message) {
            return new Promise(function(resolve, reject) {
                try {
                    this.sendRequest(partnerName, message, (response) => {
                        resolve(response);
                    });
                } catch (ex) {
                    reject(ex);
                }
            });
        }

        setName(newName) {
            if (this.name !== undefined) {
                throw new Error('Name is already set');
            }
            this.name = newName;
        }

        stats() {
            return {
                sent: this.sentCount,
                received: this.receivedCount,
                name: this.name
            };
        }

        start() {
            this.root.addEventListener('message', this.receiveMessage, false);
        }

        stop() {
            this.root.removeEventListener('message', this.receiveMessage);
        }
    }

    return IframeMessages;
});
