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

(def elevator-numbers (range 1 10))

(defn floor-button [floor-number]
  [:span.button {:style {:padding-right "20px" :cursor "pointer" :text-align "center"}}
   floor-number])

(defn make-panel-row [buttons]
  [:div
   (for [b buttons]
     [floor-button b])])

(defn make-panel [buttons]
  [:div
   (->> buttons
        (partition 3)
        (map make-panel-row))])

(defn button-panel [numbers]
  [:div {:style {:margin-top "15vh" :text-align "center"}}
   (make-panel numbers)])

(defn display []
  (let [selected-floors @(rf/subscribe [:selected-floors])
        in-motion?      @(rf/subscribe [:in-motion?])
        current-floor   @(rf/subscribe [:current-floor])
        next-stop       @(rf/subscribe [:next-stop])
        direction       @(rf/subscribe [:direction])
        door-status     @(rf/subscribe [:door-status])
        at-stop?     @(rf/subscribe [:at-stop?])]
    [:div
     [:div (str selected-floors)]
     [:div (str current-floor)]
     [:div door-status]]))

(defn empty-left []
  [:div.empty-left {:style {:width "25%" :display "inline-block" :border "1px solid black" :height "100%"}}])

(defn doors []
  [:div.doors {:style {:width "50%" :display "inline-block" :border "1px solid black" :height "100%"}}])

(defn panel-right []
  [:div {:style {:width "25%" :display "inline-block" :border "1px solid black" :height "100%"}}
   [button-panel elevator-numbers]])

(defn home-page []
  [:div.container {:style {:margin "40px auto 0 auto" :display "block"}}
   [:div.elevator {:style {:text-align "center" :border "1px solid black" :height "90vh" :width "90vh"}}
    [display]
    [:div {:style {:height "100%" :width "100%"}}
     [empty-left]
     [doors]
     [panel-right]]]])

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
