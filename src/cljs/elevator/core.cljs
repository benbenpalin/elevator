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

(defn nav-link [uri title page]
  [b/NavItem
   [b/NavLink
    {:href   uri
     :active (when (= page @(rf/subscribe [:page])) "active")}
    title]])

(defn navbar []
  (r/with-let [expanded? (r/atom true)]
    [b/Navbar {:light true
               :class-name "navbar-dark bg-primary"
               :expand "md"}
     [b/NavbarBrand {:href "/"} "elevator"]
     [b/NavbarToggler {:on-click #(swap! expanded? not)}]
     [b/Collapse {:is-open @expanded? :navbar true}
      [b/Nav {:class-name "mr-auto" :navbar true}
       [nav-link "#/" "Home" :home]
       [nav-link "#/about" "About" :about]]]]))



(defn about-page []
  [:div.container
   "About"])

(defn floor-button [floor-number]
  [:span {:on-click #(rf/dispatch [:select-new-floor floor-number]) :style {:padding-right "100px" :cursor "pointer"}}
   floor-number])

(defn button-panel []
  (let [selected-floors @(rf/subscribe [:selected-floors])]
    [:div
     [:div
      [floor-button 1]
      [floor-button 2]]
     [:div
      [floor-button 3]
      [floor-button 4]]
     [:div (str "floor selected is " selected-floors)]]))

(defn home-page []
  [:div.container
   "Elevator"
   [button-panel]])

(def pages
  {:home #'home-page
   :about #'about-page})

(defn page []
  [:div
   [navbar]
   [(pages @(rf/subscribe [:page]))]])

;; -------------------------
;; Routes

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (rf/dispatch [:navigate :home]))

(secretary/defroute "/about" []
  (rf/dispatch [:navigate :about]))

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
  (rf/dispatch [:fetch-docs])
  (hook-browser-navigation!)
  (mount-components))
