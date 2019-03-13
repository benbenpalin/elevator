// Compiled by ClojureScript 1.10.520 {}
goog.provide('elevator.event_util');
goog.require('cljs.core');
/**
 * Takes the set of selected floors, the current floor the elevator is at,
 *   and the direction the elevator is going, and returns the next floor the
 *   elevator will stop at
 */
elevator.event_util.get_next_stop = (function elevator$event_util$get_next_stop(floor_set,current_floor,direction){
if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"up","up",-269712113))){
return cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core.filter.call(null,(function (p1__43957_SHARP_){
return (p1__43957_SHARP_ > current_floor);
}),floor_set)));
} else {
return cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.filter.call(null,(function (p1__43958_SHARP_){
return (p1__43958_SHARP_ < current_floor);
}),floor_set)));
}
});
/**
 * Takes the state db, and returns the direction the elevator should now be going.
 *   This should only be used when the elevator is currently in motion
 */
elevator.event_util.in_motion_new_direction = (function elevator$event_util$in_motion_new_direction(p__43961){
var map__43962 = p__43961;
var map__43962__$1 = (((((!((map__43962 == null))))?(((((map__43962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43962):map__43962);
var direction = cljs.core.get.call(null,map__43962__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var current_floor = cljs.core.get.call(null,map__43962__$1,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880));
var selected_floors = cljs.core.get.call(null,map__43962__$1,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction)){
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__43962,map__43962__$1,direction,current_floor,selected_floors){
return (function (p1__43959_SHARP_){
return (p1__43959_SHARP_ > current_floor);
});})(map__43962,map__43962__$1,direction,current_floor,selected_floors))
,selected_floors))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
} else {
if(cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__43962,map__43962__$1,direction,current_floor,selected_floors){
return (function (p1__43960_SHARP_){
return (p1__43960_SHARP_ < current_floor);
});})(map__43962,map__43962__$1,direction,current_floor,selected_floors))
,selected_floors))){
return new cljs.core.Keyword(null,"down","down",1565245570);
} else {
return new cljs.core.Keyword(null,"up","up",-269712113);
}
}
});
/**
 * Takes the state db and returns true if the elevator has arrived at the next
 *   stop, false if it has not
 */
elevator.event_util.at_next_stop_QMARK_ = (function elevator$event_util$at_next_stop_QMARK_(db){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"next-stop","next-stop",591775296).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880).cljs$core$IFn$_invoke$arity$1(db));
});
/**
 * Takes a direction the elevator is moving and returns the correct function needed to change the current
 *   floor as it moves.
 */
elevator.event_util.direction_fn = (function elevator$event_util$direction_fn(direction){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",-269712113),direction)){
return cljs.core.inc;
} else {
return cljs.core.dec;
}
});
/**
 * Takes the current-floor and the newly-selected floor and returns the direction
 *   the elevator should move. Only to be used when the elevator is standing still.
 */
elevator.event_util.standing_still_new_direction = (function elevator$event_util$standing_still_new_direction(current_floor,new_floor){
if((new_floor > current_floor)){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
});
