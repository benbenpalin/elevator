(ns elevator.event-util-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [pjstadig.humane-test-output]
            [elevator.event-util :refer [get-next-stop in-motion-new-direction at-next-stop?
                                         direction-fn standing-still-new-direction]]))

(deftest test-home
  (is (= true true)))

(deftest get-next-stop-test
  (are [args ans] (= ans (apply get-next-stop args))
       [#{2} 1 :up] 2
       [#{3 6 5 4} 1 :up] 3
       [#{3 6 5} 4 :down] 3
       [#{} 1 :up] nil))

(deftest in-motion-new-direction-test
  (are [arg ans] (= ans (in-motion-new-direction arg))
       {:direction :up :current-floor 2 :selected-floors #{3 4}} :up
       {:direction :up :current-floor 2 :selected-floors #{1}} :down
       {:direction :down :current-floor 8 :selected-floors #{10 11 12 1}} :down
       {:direction :down :current-floor 2 :selected-floors #{10 11 12}} :up))

(deftest at-next-stop?-test
  (are [arg ans] (= ans (at-next-stop? arg))
       {:next-stop 3 :current-floor 3} true
       {:next-stop 12 :current-floor 11} false
       {:next-stop 4 :current-floor 20} false))

(deftest direction-fn
  (are [arg ans] (= ans (direction-fn arg))
       :up inc
       :down dec))

(deftest standing-still-new-direction-test
  (are [args ans] (= ans (apply standing-still-new-direction args))
       [1 4] :up
       [10 2] :down))
