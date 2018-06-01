(ns app.views.browser
    (:require 
      [cljs.pprint :as pprint]   
      [rum.core :as rum]))

(rum/defc search-input 
    []
    [:div [:input]])

(rum/defc layout 
  [items]
  [:div
    (search-input)
    [:table {:class "table table-striped"}
        [:thead 
            [:tr
                [:th "Title"]
                [:th "Start"]
                [:th "End"]
                [:th "Status"]
                [:th ""]]]
        [:tbody (map (fn [item]
           [:tr
            {:key (:id item)}
            [:td (:title item)]
            [:td (:start-at item)]
            [:td (:end-at item)]
            [:td (:status item)]
            [:td [:button {:type "button"} 
                    [:span {:class "fa fa-times"}]]]
            [:td [:button {:type "button"} 
                    [:span {:class "fa fa-edit"}]]]
            ]) items)]]
    [:p "browser"]])