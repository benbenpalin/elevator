(ns elevator.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [elevator.core-test]
            [elevator.event-util-test]))

(doo-tests 'elevator.core-test)

(doo-tests 'elevator.event-util-test)

