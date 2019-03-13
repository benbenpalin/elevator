// Compiled by ClojureScript 1.10.520 {}
goog.provide('elevator.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('elevator.event_util');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (db,p__40681){
var vec__40682 = p__40681;
var _ = cljs.core.nth.call(null,vec__40682,(0),null);
var page = cljs.core.nth.call(null,vec__40682,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-init","set-init",1460385843),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880),(1),new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),false,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"at-stop?","at-stop?",-75826094),false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("common","set-error","common/set-error",-1337739361),(function (db,p__40685){
var vec__40686 = p__40685;
var _ = cljs.core.nth.call(null,vec__40686,(0),null);
var error = cljs.core.nth.call(null,vec__40686,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("common","error","common/error",-1805182973),error);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"open-doors","open-doors",2067058056),(function (p__40689){
var map__40690 = p__40689;
var map__40690__$1 = (((((!((map__40690 == null))))?(((((map__40690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40690):map__40690);
var db = cljs.core.get.call(null,map__40690__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"open","open",-1763596448)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(2000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-doors","close-doors",34155625)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"close-doors","close-doors",34155625),(function (p__40692){
var map__40693 = p__40692;
var map__40693__$1 = (((((!((map__40693 == null))))?(((((map__40693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40693):map__40693);
var db = cljs.core.get.call(null,map__40693__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__40695 = db;
var map__40695__$1 = (((((!((map__40695 == null))))?(((((map__40695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40695):map__40695);
var selected_floors = cljs.core.get.call(null,map__40695__$1,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988));
var direction = cljs.core.get.call(null,map__40695__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var current_floor = cljs.core.get.call(null,map__40695__$1,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880));
if(cljs.core.seq.call(null,selected_floors)){
var new_direction = elevator.event_util.in_motion_new_direction.call(null,db);
var next_stop = elevator.event_util.get_next_stop.call(null,selected_floors,current_floor,new_direction);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),next_stop),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),new_direction], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"door-status","door-status",1890716792),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318),false,new cljs.core.Keyword(null,"next-stop","next-stop",591775296),null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),(function (p__40697,p__40698){
var map__40699 = p__40697;
var map__40699__$1 = (((((!((map__40699 == null))))?(((((map__40699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40699):map__40699);
var db = cljs.core.get.call(null,map__40699__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40700 = p__40698;
var _ = cljs.core.nth.call(null,vec__40700,(0),null);
var direction = cljs.core.nth.call(null,vec__40700,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-floor","change-floor",-401589990),direction], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"change-floor","change-floor",-401589990),(function (p__40705,p__40706){
var map__40707 = p__40705;
var map__40707__$1 = (((((!((map__40707 == null))))?(((((map__40707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40707):map__40707);
var db = cljs.core.get.call(null,map__40707__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40708 = p__40706;
var _ = cljs.core.nth.call(null,vec__40708,(0),null);
var direction = cljs.core.nth.call(null,vec__40708,(1),null);
var direction_fn = elevator.event_util.direction_fn.call(null,direction);
if((!(elevator.event_util.at_next_stop_QMARK_.call(null,db)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880),direction_fn),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-floor","move-floor",1295961096),direction], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.call(null,db,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988),((function (direction_fn,map__40707,map__40707__$1,db,vec__40708,_,direction){
return (function (p1__40704_SHARP_){
return cljs.core.disj.call(null,p1__40704_SHARP_,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880).cljs$core$IFn$_invoke$arity$1(db));
});})(direction_fn,map__40707,map__40707__$1,db,vec__40708,_,direction))
),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open-doors","open-doors",2067058056)], null)], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"select-new-floor","select-new-floor",-94721729),(function (p__40712,p__40713){
var map__40714 = p__40712;
var map__40714__$1 = (((((!((map__40714 == null))))?(((((map__40714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40714):map__40714);
var db = cljs.core.get.call(null,map__40714__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40715 = p__40713;
var _ = cljs.core.nth.call(null,vec__40715,(0),null);
var floor = cljs.core.nth.call(null,vec__40715,(1),null);
var map__40719 = db;
var map__40719__$1 = (((((!((map__40719 == null))))?(((((map__40719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40719):map__40719);
var selected_floors = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988));
var current_floor = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880));
var in_motion_QMARK_ = cljs.core.get.call(null,map__40719__$1,new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318));
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
