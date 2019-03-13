(ns elevator.event-util)

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

(defn standing-still-new-direction
  "Takes the current-floor and the newly-selected floor and returns the direction
  the elevator should move. Only to be used when the elevator is standing still."
  [current-floor new-floor]
  (if (> new-floor current-floor)
    :up
    :down))
