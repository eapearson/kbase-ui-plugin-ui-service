(ns app.core
    (:require 
      [cljs.pprint :as pprint]   
      [rum.core :as rum]
      [app.views.main :as main]))

(enable-console-print!)

(println "This text is printed from src/app/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello KBase World!"
                          :token nil
                          :username "dunno"
                          :search nil
                          :alerts [
                            {
                              :id "abc"
                              :title "My notification 1"
                              :start-at "5/20/18T16:00-07:00"
                              :end-at "5/20/18T18:00-07:00"
                              :status "active"
                            }
                            {
                              :id "def"
                              :title "My notification 1"
                              :start-at "5/20/18T16:00-07:00"
                              :end-at "5/20/18T18:00-07:00"
                              :status "active"
                            }
                          ]}))

; (rum/defc hello-world < rum/reactive
;   []
;   [:div
;    [:h1 (:text (rum/react app-state))]
;    [:p "hello " "human " (:username (rum/react app-state))]
;    [:h2 "UI Service Plugin"]
;    [:p "This is an app written in ClojureScript using the Rum libarary."]
;    [:p "It is a standalone app, but integrates with kbase-ui via the iframer interface."]
;    [:h2 "TODO"]
;    [:p "First, finalize the kbase-ui integration pieces:"]
;    [:ul 
;     [:li "Add postMessage-based integration with kbase-ui"]
;     [:li "finalize iframer interface!!!"]
;     [:li "convert iframer stuff to es6"]
;     [:li "implement the cljs side of the interface"]
;     ]
;    [:p "Then, we want to the the basic ui-service functionality up and running:"]
;    [:ul
;     [:li "list alerts"]
;     [:li "add alert"]
;     [:li "modify alert"]
;     [:li "remove alert"]
;    ]
;    [:p "CRUD!"]
;    [:h2 "Advantages"]
;    [:p "There are so many!"]])

(rum/defc layout 
  [app-state]
  [:div (main/layout app-state)]
)

;; do a quick iframe messaging thing here...


(println "get the data params as edn...")

(def channel (atom {:id nil}))

(defn channel-handle-message [msg-event]
  (let [msg (js->clj (js/JSON.parse (js/JSON.stringify (.-data msg-event)))
                     :keywordize-keys true)]
    (println "$ received")
    (let [channel-id (:channel (:envelope msg))]
      (if (not (= channel-id (:id @channel)))
        (println "! sorry, wrong channel" channel-id (:id @channel))
        (case (:name msg)
          "auth-status" (do (swap! app-state assoc :username (:username (:payload msg)))
                            (swap! app-state assoc :token (:token (:payload msg))))
          (println "~ ignored: " (:name msg)))))))

(defn channel-listen []
  (.addEventListener (.-parent js/window) "message" channel-handle-message false))

(defn channel-send [host message]

  (.postMessage (.-parent js/window) (clj->js message) host))

;; get the data-params
(let* [data-params (-> (.getAttribute (.-frameElement js/window) "data-params")
                      js/decodeURIComponent
                      js/JSON.parse
                      js->clj)
      ;  host (get data-params "parentHost")
      ;  host (-> js/window
      ;           .-location
      ;           .-origin)
       host (.-origin (.-location js/document))
       id (get data-params "frameId")
       channel-id (get data-params "channelId")       
       host-id (get data-params "hostId")
       now (.getTime (js/Date.))]
  (swap! channel assoc :id channel-id)
  (channel-listen)
  (channel-send host {:envelope {:channel channel-id :created now} 
                      :name "get-auth-status"})
)
  ; (println id)
  ; ; (.addEventListener js/window "message" handle-message false)
  ; (let [message (clj->js {"envelope" {"to" host-id "from" id "channel" channel-id "created" now} "name" "ready"})]
  ;   (println "Sending")
  ;   (println message)
  ;   (println host)
  ;   (println js/window)
  ;   (.postMessage (.-parent js/window) message host)))

;; unpack the json

;; get the iframe id

;; send a postmessage...

(rum/mount (layout app-state)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
