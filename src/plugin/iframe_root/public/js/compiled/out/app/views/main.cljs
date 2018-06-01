(ns app.views.main
    (:require 
      [cljs.pprint :as pprint]   
      [rum.core :as rum]
      [app.views.browser :as browser]))

(rum/defc layout < rum/reactive
  [app-state]
  [:div
   [:h1 "Views Layout"]
   [:p "MENU "]
   [:p "hi, this is the views layout"]
   [:p "on this page, you will be able to browser, edit, delete or add notifications"]
   (browser/layout (:alerts (rum/react app-state)))])