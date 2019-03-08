(ns elevator.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [elevator.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[elevator started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[elevator has shut down successfully]=-"))
   :middleware wrap-dev})
