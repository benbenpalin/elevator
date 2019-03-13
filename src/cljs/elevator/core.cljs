(ns elevator.core
  (:require [baking-soda.core :as b]
            [day8.re-frame.http-fx]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [elevator.ajax :as ajax]
            [elevator.events]
            [secretary.core :as secretary])
  (:import goog.History))

; the navbar components are implemented via baking-soda [1]
; library that provides a ClojureScript interface for Reactstrap [2]
; Bootstrap 4 components.
; [1] https://github.com/gadfly361/baking-soda
; [2] http://reactstrap.github.io/

(defn about-page []
  [:div.container
   "About"])

(defn floor-button [floor-number]
  [:span {:on-click #(rf/dispatch [:select-new-floor floor-number]) :style {:padding-right "100px" :cursor "pointer"}}
   floor-number])

(defn button-panel []
  (let [selected-floors @(rf/subscribe [:selected-floors])
        in-motion?      @(rf/subscribe [:in-motion?])
        current-floor   @(rf/subscribe [:current-floor])
        next-stop       @(rf/subscribe [:next-stop])
        direction       @(rf/subscribe [:direction])
        door-status     @(rf/subscribe [:door-status])
        at-stop?     @(rf/subscribe [:at-stop?])]
    [:div
     [:div
      [floor-button 1]
      [floor-button 2]]
     [:div
      [floor-button 3]
      [floor-button 4]]
     [:div (str "floor selected is " selected-floors)]
     [:div (str "Is the elevator in motion? " in-motion?)]
     [:div (str "what is the current floor " current-floor)]
     [:div (str "next stop: " next-stop)]
     [:div (str "Elevator is going " direction)]
     [:div (str "door is " door-status)]
     [:div (str "at a stop? " at-stop?)]]))

(defn home-page []
  [:div.container
   "Elevator"
   [button-panel]])

(def pages
  {:home #'home-page})

(defn page []
  [:div
   [(pages @(rf/subscribe [:page]))]])

;; -------------------------
;; Routes

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:navigate :home]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn mount-components []
  (rf/clear-subscription-cache!)
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [:navigate :home])
  (ajax/load-interceptors!)
  (rf/dispatch [:set-init])
  (hook-browser-navigation!)
  (mount-components))
