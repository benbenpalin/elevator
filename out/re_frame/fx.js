// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__44000 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44001 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44001;

try{try{var seq__44002 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44003 = null;
var count__44004 = (0);
var i__44005 = (0);
while(true){
if((i__44005 < count__44004)){
var vec__44012 = cljs.core._nth.call(null,chunk__44003,i__44005);
var effect_key = cljs.core.nth.call(null,vec__44012,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44012,(1),null);
var temp__5718__auto___44034 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___44034)){
var effect_fn_44035 = temp__5718__auto___44034;
effect_fn_44035.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__44036 = seq__44002;
var G__44037 = chunk__44003;
var G__44038 = count__44004;
var G__44039 = (i__44005 + (1));
seq__44002 = G__44036;
chunk__44003 = G__44037;
count__44004 = G__44038;
i__44005 = G__44039;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44002);
if(temp__5720__auto__){
var seq__44002__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44002__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44002__$1);
var G__44040 = cljs.core.chunk_rest.call(null,seq__44002__$1);
var G__44041 = c__4550__auto__;
var G__44042 = cljs.core.count.call(null,c__4550__auto__);
var G__44043 = (0);
seq__44002 = G__44040;
chunk__44003 = G__44041;
count__44004 = G__44042;
i__44005 = G__44043;
continue;
} else {
var vec__44015 = cljs.core.first.call(null,seq__44002__$1);
var effect_key = cljs.core.nth.call(null,vec__44015,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44015,(1),null);
var temp__5718__auto___44044 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___44044)){
var effect_fn_44045 = temp__5718__auto___44044;
effect_fn_44045.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__44046 = cljs.core.next.call(null,seq__44002__$1);
var G__44047 = null;
var G__44048 = (0);
var G__44049 = (0);
seq__44002 = G__44046;
chunk__44003 = G__44047;
count__44004 = G__44048;
i__44005 = G__44049;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__43728__auto___44050 = re_frame.interop.now.call(null);
var duration__43729__auto___44051 = (end__43728__auto___44050 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43729__auto___44051,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__43728__auto___44050);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44000;
}} else {
var seq__44018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44019 = null;
var count__44020 = (0);
var i__44021 = (0);
while(true){
if((i__44021 < count__44020)){
var vec__44028 = cljs.core._nth.call(null,chunk__44019,i__44021);
var effect_key = cljs.core.nth.call(null,vec__44028,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44028,(1),null);
var temp__5718__auto___44052 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___44052)){
var effect_fn_44053 = temp__5718__auto___44052;
effect_fn_44053.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__44054 = seq__44018;
var G__44055 = chunk__44019;
var G__44056 = count__44020;
var G__44057 = (i__44021 + (1));
seq__44018 = G__44054;
chunk__44019 = G__44055;
count__44020 = G__44056;
i__44021 = G__44057;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44018);
if(temp__5720__auto__){
var seq__44018__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44018__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44018__$1);
var G__44058 = cljs.core.chunk_rest.call(null,seq__44018__$1);
var G__44059 = c__4550__auto__;
var G__44060 = cljs.core.count.call(null,c__4550__auto__);
var G__44061 = (0);
seq__44018 = G__44058;
chunk__44019 = G__44059;
count__44020 = G__44060;
i__44021 = G__44061;
continue;
} else {
var vec__44031 = cljs.core.first.call(null,seq__44018__$1);
var effect_key = cljs.core.nth.call(null,vec__44031,(0),null);
var effect_value = cljs.core.nth.call(null,vec__44031,(1),null);
var temp__5718__auto___44062 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___44062)){
var effect_fn_44063 = temp__5718__auto___44062;
effect_fn_44063.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__44064 = cljs.core.next.call(null,seq__44018__$1);
var G__44065 = null;
var G__44066 = (0);
var G__44067 = (0);
seq__44018 = G__44064;
chunk__44019 = G__44065;
count__44020 = G__44066;
i__44021 = G__44067;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__44068 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44069 = null;
var count__44070 = (0);
var i__44071 = (0);
while(true){
if((i__44071 < count__44070)){
var map__44076 = cljs.core._nth.call(null,chunk__44069,i__44071);
var map__44076__$1 = (((((!((map__44076 == null))))?(((((map__44076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44076):map__44076);
var effect = map__44076__$1;
var ms = cljs.core.get.call(null,map__44076__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44076__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44068,chunk__44069,count__44070,i__44071,map__44076,map__44076__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44068,chunk__44069,count__44070,i__44071,map__44076,map__44076__$1,effect,ms,dispatch))
,ms);
}


var G__44080 = seq__44068;
var G__44081 = chunk__44069;
var G__44082 = count__44070;
var G__44083 = (i__44071 + (1));
seq__44068 = G__44080;
chunk__44069 = G__44081;
count__44070 = G__44082;
i__44071 = G__44083;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44068);
if(temp__5720__auto__){
var seq__44068__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44068__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44068__$1);
var G__44084 = cljs.core.chunk_rest.call(null,seq__44068__$1);
var G__44085 = c__4550__auto__;
var G__44086 = cljs.core.count.call(null,c__4550__auto__);
var G__44087 = (0);
seq__44068 = G__44084;
chunk__44069 = G__44085;
count__44070 = G__44086;
i__44071 = G__44087;
continue;
} else {
var map__44078 = cljs.core.first.call(null,seq__44068__$1);
var map__44078__$1 = (((((!((map__44078 == null))))?(((((map__44078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44078):map__44078);
var effect = map__44078__$1;
var ms = cljs.core.get.call(null,map__44078__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__44078__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__44068,chunk__44069,count__44070,i__44071,map__44078,map__44078__$1,effect,ms,dispatch,seq__44068__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__44068,chunk__44069,count__44070,i__44071,map__44078,map__44078__$1,effect,ms,dispatch,seq__44068__$1,temp__5720__auto__))
,ms);
}


var G__44088 = cljs.core.next.call(null,seq__44068__$1);
var G__44089 = null;
var G__44090 = (0);
var G__44091 = (0);
seq__44068 = G__44088;
chunk__44069 = G__44089;
count__44070 = G__44090;
i__44071 = G__44091;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__44092 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__44093 = null;
var count__44094 = (0);
var i__44095 = (0);
while(true){
if((i__44095 < count__44094)){
var event = cljs.core._nth.call(null,chunk__44093,i__44095);
re_frame.router.dispatch.call(null,event);


var G__44096 = seq__44092;
var G__44097 = chunk__44093;
var G__44098 = count__44094;
var G__44099 = (i__44095 + (1));
seq__44092 = G__44096;
chunk__44093 = G__44097;
count__44094 = G__44098;
i__44095 = G__44099;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44092);
if(temp__5720__auto__){
var seq__44092__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44092__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44092__$1);
var G__44100 = cljs.core.chunk_rest.call(null,seq__44092__$1);
var G__44101 = c__4550__auto__;
var G__44102 = cljs.core.count.call(null,c__4550__auto__);
var G__44103 = (0);
seq__44092 = G__44100;
chunk__44093 = G__44101;
count__44094 = G__44102;
i__44095 = G__44103;
continue;
} else {
var event = cljs.core.first.call(null,seq__44092__$1);
re_frame.router.dispatch.call(null,event);


var G__44104 = cljs.core.next.call(null,seq__44092__$1);
var G__44105 = null;
var G__44106 = (0);
var G__44107 = (0);
seq__44092 = G__44104;
chunk__44093 = G__44105;
count__44094 = G__44106;
i__44095 = G__44107;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__44108 = cljs.core.seq.call(null,value);
var chunk__44109 = null;
var count__44110 = (0);
var i__44111 = (0);
while(true){
if((i__44111 < count__44110)){
var event = cljs.core._nth.call(null,chunk__44109,i__44111);
clear_event.call(null,event);


var G__44112 = seq__44108;
var G__44113 = chunk__44109;
var G__44114 = count__44110;
var G__44115 = (i__44111 + (1));
seq__44108 = G__44112;
chunk__44109 = G__44113;
count__44110 = G__44114;
i__44111 = G__44115;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__44108);
if(temp__5720__auto__){
var seq__44108__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44108__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44108__$1);
var G__44116 = cljs.core.chunk_rest.call(null,seq__44108__$1);
var G__44117 = c__4550__auto__;
var G__44118 = cljs.core.count.call(null,c__4550__auto__);
var G__44119 = (0);
seq__44108 = G__44116;
chunk__44109 = G__44117;
count__44110 = G__44118;
i__44111 = G__44119;
continue;
} else {
var event = cljs.core.first.call(null,seq__44108__$1);
clear_event.call(null,event);


var G__44120 = cljs.core.next.call(null,seq__44108__$1);
var G__44121 = null;
var G__44122 = (0);
var G__44123 = (0);
seq__44108 = G__44120;
chunk__44109 = G__44121;
count__44110 = G__44122;
i__44111 = G__44123;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
