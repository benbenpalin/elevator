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
    (assoc db :selected-floors #{}
              :current-floor 1
              :in-motion? false
              :direction :up
              :door-status :closed
              :at-stop? false)))

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
  "Takes the set of selected floors, the current floor the elevator is at,
  and the direction the elevator is going, and returns the next floor the
  elevator will stop at"
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

(defn in-motion-new-direction
  "Takes the state db, and returns the direction the elevator should now be going.
  This should only be used when the elevator is currently in motion"
  [{:keys [direction current-floor selected-floors]}]
  (if (= :up direction)
    (if (seq (filter #(> % current-floor) selected-floors))
      :up
      :down)
    (if (seq (filter #(< % current-floor) selected-floors))
      :down
      :up)))

(rf/reg-event-fx
  :open-doors
  (fn [{:keys [db]}]
    {:db (assoc db :door-status :open)
     :dispatch-later [{:ms 2000 :dispatch [:close-doors]}]}))

(rf/reg-event-fx
  :close-doors
  (fn [{:keys [db]}]
    (let [{:keys [selected-floors direction current-floor]} db]
      (if (seq selected-floors)
        (let [new-direction (in-motion-new-direction db)
              next-stop (get-next-stop selected-floors current-floor new-direction)]
          {:db (assoc db :door-status :closed :direction new-direction :next-stop next-stop)
           :dispatch [:move-floor new-direction]})
        {:db (assoc db :door-status :closed :in-motion? false :next-stop nil)}))))

(rf/reg-event-fx
  :move-floor
  (fn [{:keys [db]} [_ direction]]
    {:dispatch-later [{:ms 1000 :dispatch [:increase-floor direction]}]}))

(defn at-next-stop?
  "Takes the state db and returns true if the elevator has arrived at the next
  stop, false if it has not"
  [db]
 (= (:next-stop db) (:current-floor db)))

(defn direction-fn
  "Takes a direction the elevator is moving and returns the correct function needed to change the current
  floor as it moves."
  [direction]
  (if (= :up direction) inc dec))

(rf/reg-event-fx
  :increase-floor
  (fn [{:keys [db]} [_ direction]]
    (let [direction-fn (direction-fn direction)]
      (if (not (at-next-stop? db))
        {:db (update db :current-floor direction-fn)
         :dispatch [:move-floor direction]}
        {:db (update db :selected-floors #(disj % (:current-floor db)))
         :dispatch [:open-doors]}))))

(defn standing-still-new-direction
  "Takes the current-floor and the newly-selected floor and returns the direction
  the elevator should move. Only to be used when the elevator is standing still."
  [current-floor new-floor]
  (if (> new-floor current-floor)
    :up
    :down))

(rf/reg-event-fx
  :select-new-floor
  (fn [{:keys [db]} [_ floor]]
    (let [{:keys [selected-floors current-floor in-motion?]} db
          selected-floors (conj selected-floors floor)
          new-direction (standing-still-new-direction current-floor floor)]
      (if-not in-motion?
        {:db (assoc db :selected-floors selected-floors
                       :in-motion? true
                       :next-stop (get-next-stop selected-floors current-floor new-direction)
                       :direction new-direction)
         :dispatch [:move-floor new-direction]}
        {:db (assoc db :selected-floors selected-floors)}))))



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
  :door-status
  (fn [db _]
    (:door-status db)))

(rf/reg-sub
  :at-stop?
  (fn [db _]
    (:at-stop? db)))

(rf/reg-sub
  :common/error
  (fn [db _]
    (:common/error db)))
