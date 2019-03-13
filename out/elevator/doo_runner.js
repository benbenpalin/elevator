// Compiled by ClojureScript 1.10.520 {}
goog.provide('elevator.doo_runner');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('elevator.core_test');
goog.require('elevator.event_util_test');
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__40282__auto__){
jx.reporter.karma.start.call(null,tc__40282__auto__,0);

return cljs.test.run_block.call(null,(function (){var env41316 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary41317 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41316,summary41317){
return (function (){
cljs.test.set_env_BANG_.call(null,env41316);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.core-test","elevator.core-test",1187667172,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__37629__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41316,summary41317){
return (function (){
if((env__37629__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__37629__auto__,env41316,summary41317))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41316,summary41317){
return (function (){
if((env__37629__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__37629__auto__,env41316,summary41317))
], null));
})());
});})(env41316,summary41317))
,((function (env41316,summary41317){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.core-test","elevator.core-test",1187667172,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41316,summary41317))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41316,summary41317){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41317,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41317),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41316,summary41317))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41316,summary41317){
return (function (){
cljs.test.set_env_BANG_.call(null,env41316);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41317));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41317),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41316,summary41317))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env41318 = cljs.test.empty_env.call(null);
var summary41319 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41318,summary41319){
return (function (){
cljs.test.set_env_BANG_.call(null,env41318);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.core-test","elevator.core-test",1187667172,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__37629__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41318,summary41319){
return (function (){
if((env__37629__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__37629__auto__,env41318,summary41319))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41318,summary41319){
return (function (){
if((env__37629__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__37629__auto__,env41318,summary41319))
], null));
})());
});})(env41318,summary41319))
,((function (env41318,summary41319){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.core-test","elevator.core-test",1187667172,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41318,summary41319))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41318,summary41319){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41319,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41319),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41318,summary41319))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41318,summary41319){
return (function (){
cljs.test.set_env_BANG_.call(null,env41318);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41319));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41319),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41318,summary41319))
], null));
})());
})));
doo.runner.set_entry_point_BANG_.call(null,((doo.runner.karma_QMARK_.call(null))?(function (tc__40282__auto__){
jx.reporter.karma.start.call(null,tc__40282__auto__,6);

return cljs.test.run_block.call(null,(function (){var env41320 = cljs.test.empty_env.call(null,new cljs.core.Keyword("jx.reporter.karma","karma","jx.reporter.karma/karma",404831826));
var summary41321 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41320,summary41321){
return (function (){
cljs.test.set_env_BANG_.call(null,env41320);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__37629__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41320,summary41321){
return (function (){
if((env__37629__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__37629__auto__,env41320,summary41321))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return elevator.event_util_test.test_home;},new cljs.core.Symbol("elevator.event-util-test","test-home","elevator.event-util-test/test-home",-1767462843,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"test-home","test-home",1948456799,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",19,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.test_home)?elevator.event_util_test.test_home.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.get_next_stop_test;},new cljs.core.Symbol("elevator.event-util-test","get-next-stop-test","elevator.event-util-test/get-next-stop-test",288901316,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"get-next-stop-test","get-next-stop-test",1921182670,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",28,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.get_next_stop_test)?elevator.event_util_test.get_next_stop_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.in_motion_new_direction_test;},new cljs.core.Symbol("elevator.event-util-test","in-motion-new-direction-test","elevator.event-util-test/in-motion-new-direction-test",-937479866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"in-motion-new-direction-test","in-motion-new-direction-test",-359489968,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",38,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.in_motion_new_direction_test)?elevator.event_util_test.in_motion_new_direction_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.at_next_stop_QMARK__test;},new cljs.core.Symbol("elevator.event-util-test","at-next-stop?-test","elevator.event-util-test/at-next-stop?-test",2034524640,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"at-next-stop?-test","at-next-stop?-test",450862826,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",28,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.at_next_stop_QMARK__test)?elevator.event_util_test.at_next_stop_QMARK__test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.direction_fn;},new cljs.core.Symbol("elevator.event-util-test","direction-fn","elevator.event-util-test/direction-fn",300812757,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"direction-fn","direction-fn",862566115,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",22,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.direction_fn)?elevator.event_util_test.direction_fn.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.standing_still_new_direction_test;},new cljs.core.Symbol("elevator.event-util-test","standing-still-new-direction-test","elevator.event-util-test/standing-still-new-direction-test",918861039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"standing-still-new-direction-test","standing-still-new-direction-test",356652497,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",43,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.standing_still_new_direction_test)?elevator.event_util_test.standing_still_new_direction_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41320,summary41321){
return (function (){
if((env__37629__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__37629__auto__,env41320,summary41321))
], null));
})());
});})(env41320,summary41321))
,((function (env41320,summary41321){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41320,summary41321))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41320,summary41321){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41321,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41321),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41320,summary41321))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41320,summary41321){
return (function (){
cljs.test.set_env_BANG_.call(null,env41320);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41321));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41321),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41320,summary41321))
], null));
})());
}):(function (){
return cljs.test.run_block.call(null,(function (){var env41322 = cljs.test.empty_env.call(null);
var summary41323 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41322,summary41323){
return (function (){
cljs.test.set_env_BANG_.call(null,env41322);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__37629__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41322,summary41323){
return (function (){
if((env__37629__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__37629__auto__,env41322,summary41323))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return elevator.event_util_test.test_home;},new cljs.core.Symbol("elevator.event-util-test","test-home","elevator.event-util-test/test-home",-1767462843,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"test-home","test-home",1948456799,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",19,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.test_home)?elevator.event_util_test.test_home.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.get_next_stop_test;},new cljs.core.Symbol("elevator.event-util-test","get-next-stop-test","elevator.event-util-test/get-next-stop-test",288901316,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"get-next-stop-test","get-next-stop-test",1921182670,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",28,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.get_next_stop_test)?elevator.event_util_test.get_next_stop_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.in_motion_new_direction_test;},new cljs.core.Symbol("elevator.event-util-test","in-motion-new-direction-test","elevator.event-util-test/in-motion-new-direction-test",-937479866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"in-motion-new-direction-test","in-motion-new-direction-test",-359489968,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",38,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.in_motion_new_direction_test)?elevator.event_util_test.in_motion_new_direction_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.at_next_stop_QMARK__test;},new cljs.core.Symbol("elevator.event-util-test","at-next-stop?-test","elevator.event-util-test/at-next-stop?-test",2034524640,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"at-next-stop?-test","at-next-stop?-test",450862826,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",28,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.at_next_stop_QMARK__test)?elevator.event_util_test.at_next_stop_QMARK__test.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.direction_fn;},new cljs.core.Symbol("elevator.event-util-test","direction-fn","elevator.event-util-test/direction-fn",300812757,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"direction-fn","direction-fn",862566115,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",22,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.direction_fn)?elevator.event_util_test.direction_fn.cljs$lang$test:null)])),new cljs.core.Var(function(){return elevator.event_util_test.standing_still_new_direction_test;},new cljs.core.Symbol("elevator.event-util-test","standing-still-new-direction-test","elevator.event-util-test/standing-still-new-direction-test",918861039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Symbol(null,"standing-still-new-direction-test","standing-still-new-direction-test",356652497,null),"/home/benpalin/job/elevator/test/cljs/elevator/event_util_test.cljs",43,1,35,35,cljs.core.List.EMPTY,null,(cljs.core.truth_(elevator.event_util_test.standing_still_new_direction_test)?elevator.event_util_test.standing_still_new_direction_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__37629__auto__,env41322,summary41323){
return (function (){
if((env__37629__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__37629__auto__,env41322,summary41323))
], null));
})());
});})(env41322,summary41323))
,((function (env41322,summary41323){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"elevator.event-util-test","elevator.event-util-test",704988781,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env41322,summary41323))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41322,summary41323){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary41323,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary41323),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env41322,summary41323))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env41322,summary41323){
return (function (){
cljs.test.set_env_BANG_.call(null,env41322);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary41323));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary41323),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env41322,summary41323))
], null));
})());
})));
