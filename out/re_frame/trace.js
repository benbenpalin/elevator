// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43750){
var map__43751 = p__43750;
var map__43751__$1 = (((((!((map__43751 == null))))?(((((map__43751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43751):map__43751);
var operation = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__43753_43773 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__43754_43774 = null;
var count__43755_43775 = (0);
var i__43756_43776 = (0);
while(true){
if((i__43756_43776 < count__43755_43775)){
var vec__43765_43777 = cljs.core._nth.call(null,chunk__43754_43774,i__43756_43776);
var k_43778 = cljs.core.nth.call(null,vec__43765_43777,(0),null);
var cb_43779 = cljs.core.nth.call(null,vec__43765_43777,(1),null);
try{cb_43779.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e43768){var e_43780 = e43768;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_43778,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_43780);
}

var G__43781 = seq__43753_43773;
var G__43782 = chunk__43754_43774;
var G__43783 = count__43755_43775;
var G__43784 = (i__43756_43776 + (1));
seq__43753_43773 = G__43781;
chunk__43754_43774 = G__43782;
count__43755_43775 = G__43783;
i__43756_43776 = G__43784;
continue;
} else {
var temp__5720__auto___43785 = cljs.core.seq.call(null,seq__43753_43773);
if(temp__5720__auto___43785){
var seq__43753_43786__$1 = temp__5720__auto___43785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43753_43786__$1)){
var c__4550__auto___43787 = cljs.core.chunk_first.call(null,seq__43753_43786__$1);
var G__43788 = cljs.core.chunk_rest.call(null,seq__43753_43786__$1);
var G__43789 = c__4550__auto___43787;
var G__43790 = cljs.core.count.call(null,c__4550__auto___43787);
var G__43791 = (0);
seq__43753_43773 = G__43788;
chunk__43754_43774 = G__43789;
count__43755_43775 = G__43790;
i__43756_43776 = G__43791;
continue;
} else {
var vec__43769_43792 = cljs.core.first.call(null,seq__43753_43786__$1);
var k_43793 = cljs.core.nth.call(null,vec__43769_43792,(0),null);
var cb_43794 = cljs.core.nth.call(null,vec__43769_43792,(1),null);
try{cb_43794.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e43772){var e_43795 = e43772;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_43793,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_43795);
}

var G__43796 = cljs.core.next.call(null,seq__43753_43786__$1);
var G__43797 = null;
var G__43798 = (0);
var G__43799 = (0);
seq__43753_43773 = G__43796;
chunk__43754_43774 = G__43797;
count__43755_43775 = G__43798;
i__43756_43776 = G__43799;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
