(ns user
  (:require [elevator.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [elevator.figwheel :refer [start-fw stop-fw cljs]]
            [elevator.core :refer [start-app]]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'elevator.core/repl-server))

(defn stop []
  (mount/stop-except #'elevator.core/repl-server))

(defn restart []
  (stop)
  (start))


