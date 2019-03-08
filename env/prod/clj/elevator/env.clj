(ns elevator.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[elevator started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[elevator has shut down successfully]=-"))
   :middleware identity})
