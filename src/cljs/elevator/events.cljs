(ns elevator.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

;;dispatchers

(rf/reg-event-db
  :navigate
  (fn [db [_ page]]
    (assoc db :page page)))

(rf/reg-event-db
  :set-init
  (fn [db [_ docs]]
    (assoc db :docs docs
              :selected-floors #{}
              :current-floor 1
              :in-motion? false
              :direction :up)))

(rf/reg-event-fx
  :fetch-docs
  (fn [_ _]
    {:http-xhrio {:method          :get
                  :uri             "/docs"
                  :response-format (ajax/raw-response-format)
                  :on-success       [:set-init]}}))

(rf/reg-event-db
  :common/set-error
  (fn [db [_ error]]
    (assoc db :common/error error)))

(defn get-next-stop
  "Takes the set of selected floors, the current floor the elevator is at, and the direction the elevator is going, and returns the next floor the elevator will stop at"
  [floor-set current-floor direction]
  (if (= direction :up)
    (->> floor-set
         (filter #(> % current-floor))
         (sort)
         (first))
    (->> floor-set
         (filter #(< % current-floor))
         (sort)
         (last))))

(rf/reg-event-fx
  :hit-button
  (fn [{:keys [db]}]
    {:dispatch-later [{:ms 1000 :dispatch [:increase-floor]}]}))

(rf/reg-event-fx
  :increase-floor
  (fn [{:keys [db]}]
    (if (not= (:next-stop db) (:current-floor db))
      {:db (update db :current-floor inc)
       :dispatch [:hit-button]})))

(rf/reg-event-db
  :select-new-floor
  (fn [db [_ floor]]
    (let [{:keys [selected-floors in-motion? direction current-floor]} db
          selected-floors (conj selected-floors floor)
          new-direction (if in-motion?
                          direction
                          (if (> floor current-floor)
                            :up
                            :down))]


      (assoc db
             :selected-floors selected-floors
             :in-motion? true
             :next-stop (get-next-stop selected-floors current-floor new-direction)
             :direction new-direction))))

;;subscriptions

(rf/reg-sub
  :page
  (fn [db _]
    (:page db)))

(rf/reg-sub
  :docs
  (fn [db _]
    (:docs db)))

(rf/reg-sub
  :selected-floors
  (fn [db _]
    (:selected-floors db)))

(rf/reg-sub
  :current-floor
  (fn [db _]
    (:current-floor db)))

(rf/reg-sub
  :next-stop
  (fn [db _]
    (:next-stop db)))

(rf/reg-sub
  :in-motion?
  (fn [db _]
    (:in-motion? db)))

(rf/reg-sub
  :direction
  (fn [db _]
    (:direction db)))

(rf/reg-sub
  :common/error
  (fn [db _]
    (:common/error db)))
