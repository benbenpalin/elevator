// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__39691__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39692__i = 0, G__39692__a = new Array(arguments.length -  0);
while (G__39692__i < G__39692__a.length) {G__39692__a[G__39692__i] = arguments[G__39692__i + 0]; ++G__39692__i;}
  args = new cljs.core.IndexedSeq(G__39692__a,0,null);
} 
return G__39691__delegate.call(this,args);};
G__39691.cljs$lang$maxFixedArity = 0;
G__39691.cljs$lang$applyTo = (function (arglist__39693){
var args = cljs.core.seq(arglist__39693);
return G__39691__delegate(args);
});
G__39691.cljs$core$IFn$_invoke$arity$variadic = G__39691__delegate;
return G__39691;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__39694__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39695__i = 0, G__39695__a = new Array(arguments.length -  0);
while (G__39695__i < G__39695__a.length) {G__39695__a[G__39695__i] = arguments[G__39695__i + 0]; ++G__39695__i;}
  args = new cljs.core.IndexedSeq(G__39695__a,0,null);
} 
return G__39694__delegate.call(this,args);};
G__39694.cljs$lang$maxFixedArity = 0;
G__39694.cljs$lang$applyTo = (function (arglist__39696){
var args = cljs.core.seq(arglist__39696);
return G__39694__delegate(args);
});
G__39694.cljs$core$IFn$_invoke$arity$variadic = G__39694__delegate;
return G__39694;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
