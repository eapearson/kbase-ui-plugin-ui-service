(ns app.core
    (:require [rum.core :as rum]))

(enable-console-print!)

(println "This text is printed from src/app/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello KBase World!"}))


(rum/defc hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h2 "About this Plugin"]
   [:p "This is an app written in ClojureScript using the Rum libarary."]
   [:p "It is a standalone app, but integrates with kbase-ui via the iframer interface."]
   [:h2 "TODO"]
   [:ul 
    [:li "Add postMessage-based integration with kbase-ui"]
    [:li "finalize iframer interface!!!"]
    [:li "convert iframer stuff to es6"]
    [:li "implement the cljs side of the interface"]
    ]
   [:h2 "Advantages"]
   [:p "There are so many!"]])

;; do a quick iframe messaging thing here...


(println "get the data params...")
;; get the data-params

;; unpack the json

;; get the iframe id

;; send a postmessage...

(rum/mount (hello-world)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
