// Compiled by ClojureScript 1.10.520 {}
goog.provide('pjstadig.macro');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.data');
pjstadig.macro.diff = (function pjstadig$macro$diff(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43866 = arguments.length;
var i__4731__auto___43867 = (0);
while(true){
if((i__4731__auto___43867 < len__4730__auto___43866)){
args__4736__auto__.push((arguments[i__4731__auto___43867]));

var G__43868 = (i__4731__auto___43867 + (1));
i__4731__auto___43867 = G__43868;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

pjstadig.macro.diff.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,clojure.data.diff,args);
});

pjstadig.macro.diff.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
pjstadig.macro.diff.cljs$lang$applyTo = (function (seq43865){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43865));
});

