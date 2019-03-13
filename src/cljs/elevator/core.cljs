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
  (let [selected-floors @(rf/subscribe [:selected-floors])]
    [:span {:on-click #(rf/dispatch [:select-new-floor floor-number]) :style {:padding "0 20px" :cursor "pointer" :color (if (get selected-floors floor-number)
                                                                                                                           "red"
                                                                                                                           "black")}}
     floor-number]))

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
  [:div {:style {:text-align "center"}}
   (make-panel numbers)])

(defn display []
  (let [current-floor   @(rf/subscribe [:current-floor])]
    [:div {:style {:margin-top "40px" :font-size "28px"}}
     [:div (str current-floor)]]))

(defn doors []
  (let [door-status     @(rf/subscribe [:door-status])]
    [:div.doors {:style {:width "50%" :display "inline-block"
                         :border "1px solid black" :height "80%"
                         :background-color (if (= :open door-status)
                                             "black"
                                             "white")
                         :position "absolute" :bottom "0" :left "0"
                         :margin-left "100px"}}]))


(defn panel-right []
  [:div {:style {:margin "0 50px 300px 0" :display "inline-block" :border "1px solid black" :position "absolute" :bottom "0" :right "0"}}
   [button-panel elevator-numbers]])

(defn home-page []
  [:div.container {:style {:margin "40px auto 0 auto" :display "block"}}
   [:div.elevator {:style {:text-align "center" :border "1px solid black" :height "90vh" :width "90vh"  :position "relative"}}
    [display]
    [:div {:style {:height "100%" :width "100%"}}
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
