(ns elevator.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [elevator.core-test]))

(doo-tests 'elevator.core-test)

