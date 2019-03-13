// Compiled by ClojureScript 1.10.520 {}
goog.provide('elevator.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('elevator.event_util');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (db,p__44328){
var vec__44329 = p__44328;
var _ = cljs.core.nth.call(null,vec__44329,(0),null);
var page = cljs.core.nth.call(null,vec__44329,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-init","set-init",1460385843),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880),(1),new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),false,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"at-stop?","at-stop?",-75826094),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("common","set-error","common/set-error",-1337739361),(function (db,p__44332){
var vec__44333 = p__44332;
var _ = cljs.core.nth.call(null,vec__44333,(0),null);
var error = cljs.core.nth.call(null,vec__44333,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("common","error","common/error",-1805182973),error);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"open-doors","open-doors",2067058056),(function (p__44336){
var map__44337 = p__44336;
var map__44337__$1 = (((((!((map__44337 == null))))?(((((map__44337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44337):map__44337);
var db = cljs.core.get.call(null,map__44337__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"open","open",-1763596448)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(2000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-doors","close-doors",34155625)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"close-doors","close-doors",34155625),(function (p__44339){
var map__44340 = p__44339;
var map__44340__$1 = (((((!((map__44340 == null))))?(((((map__44340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44340):map__44340);
var db = cljs.core.get.call(null,map__44340__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__44342 = db;
var map__44342__$1 = (((((!((map__44342 == null))))?(((((map__44342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44342):map__44342);
var selected_floors = cljs.core.get.call(null,map__44342__$1,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988));
var direction = cljs.core.get.call(null,map__44342__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var current_floor = cljs.core.get.call(null,map__44342__$1,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880));
if(cljs.core.seq.call(null,selected_floors)){
var new_direction = elevator.event_util.in_motion_new_direction.call(null,db);
var next_stop = elevator.event_util.get_next_stop.call(null,selected_floors,current_floor,new_direction);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),next_stop),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),new_direction], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),false,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),(function (p__44344,p__44345){
var map__44346 = p__44344;
var map__44346__$1 = (((((!((map__44346 == null))))?(((((map__44346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44346):map__44346);
var db = cljs.core.get.call(null,map__44346__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44347 = p__44345;
var _ = cljs.core.nth.call(null,vec__44347,(0),null);
var direction = cljs.core.nth.call(null,vec__44347,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-floor","change-floor",-401589990),direction], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"change-floor","change-floor",-401589990),(function (p__44352,p__44353){
var map__44354 = p__44352;
var map__44354__$1 = (((((!((map__44354 == null))))?(((((map__44354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44354):map__44354);
var db = cljs.core.get.call(null,map__44354__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44355 = p__44353;
var _ = cljs.core.nth.call(null,vec__44355,(0),null);
var direction = cljs.core.nth.call(null,vec__44355,(1),null);
var direction_fn = elevator.event_util.direction_fn.call(null,direction);
if((!(elevator.event_util.at_next_stop_QMARK_.call(null,db)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880),direction_fn),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),direction], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),((function (direction_fn,map__44354,map__44354__$1,db,vec__44355,_,direction){
return (function (p1__44351_SHARP_){
return cljs.core.disj.call(null,p1__44351_SHARP_,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880).cljs$core$IFn$_invoke$arity$1(db));
});})(direction_fn,map__44354,map__44354__$1,db,vec__44355,_,direction))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-doors","open-doors",2067058056)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"select-new-floor","select-new-floor",-94721729),(function (p__44359,p__44360){
var map__44361 = p__44359;
var map__44361__$1 = (((((!((map__44361 == null))))?(((((map__44361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44361):map__44361);
var db = cljs.core.get.call(null,map__44361__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44362 = p__44360;
var _ = cljs.core.nth.call(null,vec__44362,(0),null);
var floor = cljs.core.nth.call(null,vec__44362,(1),null);
var map__44366 = db;
var map__44366__$1 = (((((!((map__44366 == null))))?(((((map__44366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44366):map__44366);
var selected_floors = cljs.core.get.call(null,map__44366__$1,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988));
var current_floor = cljs.core.get.call(null,map__44366__$1,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880));
var in_motion_QMARK_ = cljs.core.get.call(null,map__44366__$1,new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318));
var selected_floors__$1 = cljs.core.conj.call(null,selected_floors,floor);
var new_direction = elevator.event_util.standing_still_new_direction.call(null,current_floor,floor);
if(cljs.core.not.call(null,in_motion_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),selected_floors__$1,new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),true,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),elevator.event_util.get_next_stop.call(null,selected_floors__$1,current_floor,new_direction),new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),new_direction], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),selected_floors__$1)], null);
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"page","page",849072397),(function (db,_){
return new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),(function (db,_){
return new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880),(function (db,_){
return new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),(function (db,_){
return new cljs.core.Keyword(null,"next-stop","next-stop",591775296).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),(function (db,_){
return new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395),(function (db,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"door-status","door-status",1890716792),(function (db,_){
return new cljs.core.Keyword(null,"door-status","door-status",1890716792).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"at-stop?","at-stop?",-75826094),(function (db,_){
return new cljs.core.Keyword(null,"at-stop?","at-stop?",-75826094).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("common","error","common/error",-1805182973),(function (db,_){
return new cljs.core.Keyword("common","error","common/error",-1805182973).cljs$core$IFn$_invoke$arity$1(db);
}));
