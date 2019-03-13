// Compiled by ClojureScript 1.10.520 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42338 = arguments.length;
var i__4731__auto___42339 = (0);
while(true){
if((i__4731__auto___42339 < len__4730__auto___42338)){
args__4736__auto__.push((arguments[i__4731__auto___42339]));

var G__42340 = (i__4731__auto___42339 + (1));
i__4731__auto___42339 = G__42340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq42337){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42337));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__42341){
var vec__42342 = p__42341;
var test = cljs.core.nth.call(null,vec__42342,(0),null);
var result = cljs.core.nth.call(null,vec__42342,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__42346){
var vec__42347 = p__42346;
var seq__42348 = cljs.core.seq.call(null,vec__42347);
var first__42349 = cljs.core.first.call(null,seq__42348);
var seq__42348__$1 = cljs.core.next.call(null,seq__42348);
var head = first__42349;
var first__42349__$1 = cljs.core.first.call(null,seq__42348__$1);
var seq__42348__$2 = cljs.core.next.call(null,seq__42348__$1);
var expr = first__42349__$1;
var more = seq__42348__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__42347,seq__42348,first__42349,seq__42348__$1,head,first__42349__$1,seq__42348__$2,expr,more){
return (function (p1__42345_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__42345_SHARP_);
});})(clauses,default$,vec__42347,seq__42348,first__42349,seq__42348__$1,head,first__42349__$1,seq__42348__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__42351){
var vec__42352 = p__42351;
var seq__42353 = cljs.core.seq.call(null,vec__42352);
var first__42354 = cljs.core.first.call(null,seq__42353);
var seq__42353__$1 = cljs.core.next.call(null,seq__42353);
var head = first__42354;
var more = seq__42353__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__42352,seq__42353,first__42354,seq__42353__$1,head,more){
return (function (p1__42350_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__42350_SHARP_);
});})(clauses,vec__42352,seq__42353,first__42354,seq__42353__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__42356){
var vec__42357 = p__42356;
var seq__42358 = cljs.core.seq.call(null,vec__42357);
var first__42359 = cljs.core.first.call(null,seq__42358);
var seq__42358__$1 = cljs.core.next.call(null,seq__42358);
var head = first__42359;
var first__42359__$1 = cljs.core.first.call(null,seq__42358__$1);
var seq__42358__$2 = cljs.core.next.call(null,seq__42358__$1);
var pred = first__42359__$1;
var first__42359__$2 = cljs.core.first.call(null,seq__42358__$2);
var seq__42358__$3 = cljs.core.next.call(null,seq__42358__$2);
var expr = first__42359__$2;
var more = seq__42358__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__42357,seq__42358,first__42359,seq__42358__$1,head,first__42359__$1,seq__42358__$2,pred,first__42359__$2,seq__42358__$3,expr,more){
return (function (p1__42355_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__42355_SHARP_);
});})(clauses,default$,vec__42357,seq__42358,first__42359,seq__42358__$1,head,first__42359__$1,seq__42358__$2,pred,first__42359__$2,seq__42358__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__42361){
var vec__42362 = p__42361;
var seq__42363 = cljs.core.seq.call(null,vec__42362);
var first__42364 = cljs.core.first.call(null,seq__42363);
var seq__42363__$1 = cljs.core.next.call(null,seq__42363);
var head = first__42364;
var stmts = seq__42363__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__42362,seq__42363,first__42364,seq__42363__$1,head,stmts){
return (function (p1__42360_SHARP_){
return fipp.visit.visit.call(null,p,p1__42360_SHARP_);
});})(vec__42362,seq__42363,first__42364,seq__42363__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__42366){
var vec__42367 = p__42366;
var seq__42368 = cljs.core.seq.call(null,vec__42367);
var first__42369 = cljs.core.first.call(null,seq__42368);
var seq__42368__$1 = cljs.core.next.call(null,seq__42368);
var head = first__42369;
var first__42369__$1 = cljs.core.first.call(null,seq__42368__$1);
var seq__42368__$2 = cljs.core.next.call(null,seq__42368__$1);
var test = first__42369__$1;
var more = seq__42368__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__42367,seq__42368,first__42369,seq__42368__$1,head,first__42369__$1,seq__42368__$2,test,more){
return (function (p1__42365_SHARP_){
return fipp.visit.visit.call(null,p,p1__42365_SHARP_);
});})(vec__42367,seq__42368,first__42369,seq__42368__$1,head,first__42369__$1,seq__42368__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__42371){
var vec__42372 = p__42371;
var seq__42373 = cljs.core.seq.call(null,vec__42372);
var first__42374 = cljs.core.first.call(null,seq__42373);
var seq__42373__$1 = cljs.core.next.call(null,seq__42373);
var params = first__42374;
var body = seq__42373__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__42372,seq__42373,first__42374,seq__42373__$1,params,body){
return (function (p1__42370_SHARP_){
return fipp.visit.visit.call(null,p,p1__42370_SHARP_);
});})(vec__42372,seq__42373,first__42374,seq__42373__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__42377){
var vec__42378 = p__42377;
var seq__42379 = cljs.core.seq.call(null,vec__42378);
var first__42380 = cljs.core.first.call(null,seq__42379);
var seq__42379__$1 = cljs.core.next.call(null,seq__42379);
var head = first__42380;
var first__42380__$1 = cljs.core.first.call(null,seq__42379__$1);
var seq__42379__$2 = cljs.core.next.call(null,seq__42379__$1);
var fn_name = first__42380__$1;
var more = seq__42379__$2;
var vec__42381 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__42381,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__42381,(1),null);
var vec__42384 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__42384,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__42384,(1),null);
var vec__42387 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__42387,(0),null);
var body = cljs.core.nth.call(null,vec__42387,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__4120__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__4120__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__42381,docstring,more__$1,vec__42384,attr_map,more__$2,vec__42387,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__42378,seq__42379,first__42380,seq__42379__$1,head,first__42380__$1,seq__42379__$2,fn_name,more){
return (function (p1__42375_SHARP_){
return fipp.visit.visit.call(null,p,p1__42375_SHARP_);
});})(vec__42381,docstring,more__$1,vec__42384,attr_map,more__$2,vec__42387,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__42378,seq__42379,first__42380,seq__42379__$1,head,first__42380__$1,seq__42379__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__42381,docstring,more__$1,vec__42384,attr_map,more__$2,vec__42387,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__42378,seq__42379,first__42380,seq__42379__$1,head,first__42380__$1,seq__42379__$2,fn_name,more){
return (function (p1__42376_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__42376_SHARP_);
});})(vec__42381,docstring,more__$1,vec__42384,attr_map,more__$2,vec__42387,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__42378,seq__42379,first__42380,seq__42379__$1,head,first__42380__$1,seq__42379__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__42392){
var vec__42393 = p__42392;
var seq__42394 = cljs.core.seq.call(null,vec__42393);
var first__42395 = cljs.core.first.call(null,seq__42394);
var seq__42394__$1 = cljs.core.next.call(null,seq__42394);
var head = first__42395;
var more = seq__42394__$1;
var vec__42396 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__42396,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__42396,(1),null);
var vec__42399 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__42399,(0),null);
var body = cljs.core.nth.call(null,vec__42399,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__42396,fn_name,more__$1,vec__42399,params,body,vec__42393,seq__42394,first__42395,seq__42394__$1,head,more){
return (function (p1__42390_SHARP_){
return fipp.visit.visit.call(null,p,p1__42390_SHARP_);
});})(vec__42396,fn_name,more__$1,vec__42399,params,body,vec__42393,seq__42394,first__42395,seq__42394__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__42396,fn_name,more__$1,vec__42399,params,body,vec__42393,seq__42394,first__42395,seq__42394__$1,head,more){
return (function (p1__42391_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__42391_SHARP_);
});})(vec__42396,fn_name,more__$1,vec__42399,params,body,vec__42393,seq__42394,first__42395,seq__42394__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__42405){
var vec__42406 = p__42405;
var _ = cljs.core.nth.call(null,vec__42406,(0),null);
var params = cljs.core.nth.call(null,vec__42406,(1),null);
var body = cljs.core.nth.call(null,vec__42406,(2),null);
var form = vec__42406;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__42409 = cljs.core.split_with.call(null,((function (vec__42406,_,params,body,form){
return (function (p1__42402_SHARP_){
return cljs.core.not_EQ_.call(null,p1__42402_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__42406,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__42409,(0),null);
var rests = cljs.core.nth.call(null,vec__42409,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__42409,inits,rests,vec__42406,_,params,body,form){
return (function (p1__42403_SHARP_){
return cljs.core.symbol.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__42403_SHARP_ + (1)))].join(''));
});})(vec__42409,inits,rests,vec__42406,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__42409,inits,rests,params_STAR_,body_STAR_,vec__42406,_,params,body,form){
return (function (p1__42404_SHARP_){
return fipp.visit.visit.call(null,p,p1__42404_SHARP_);
});})(vec__42409,inits,rests,params_STAR_,body_STAR_,vec__42406,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__42413){
var vec__42414 = p__42413;
var seq__42415 = cljs.core.seq.call(null,vec__42414);
var first__42416 = cljs.core.first.call(null,seq__42415);
var seq__42415__$1 = cljs.core.next.call(null,seq__42415);
var head = first__42416;
var clauses = seq__42415__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__42414,seq__42415,first__42416,seq__42415__$1,head,clauses){
return (function (p1__42412_SHARP_){
return fipp.visit.visit.call(null,p,p1__42412_SHARP_);
});})(vec__42414,seq__42415,first__42416,seq__42415__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__42418){
var vec__42419 = p__42418;
var seq__42420 = cljs.core.seq.call(null,vec__42419);
var first__42421 = cljs.core.first.call(null,seq__42420);
var seq__42420__$1 = cljs.core.next.call(null,seq__42420);
var head = first__42421;
var first__42421__$1 = cljs.core.first.call(null,seq__42420__$1);
var seq__42420__$2 = cljs.core.next.call(null,seq__42420__$1);
var ns_sym = first__42421__$1;
var more = seq__42420__$2;
var vec__42422 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__42422,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__42422,(1),null);
var vec__42425 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__42425,(0),null);
var specs = cljs.core.nth.call(null,vec__42425,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__42422,docstring,more__$1,vec__42425,attr_map,specs,vec__42419,seq__42420,first__42421,seq__42420__$1,head,first__42421__$1,seq__42420__$2,ns_sym,more){
return (function (p1__42417_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__42417_SHARP_);
});})(vec__42422,docstring,more__$1,vec__42425,attr_map,specs,vec__42419,seq__42420,first__42421,seq__42420__$1,head,first__42421__$1,seq__42420__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__42428){
var vec__42429 = p__42428;
var macro = cljs.core.nth.call(null,vec__42429,(0),null);
var arg = cljs.core.nth.call(null,vec__42429,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__42432 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__42432__$1 = (((G__42432 instanceof cljs.core.Keyword))?G__42432.fqn:null);
switch (G__42432__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42432__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4523__auto__ = (function fipp$clojure$pretty_bindings_$_iter__42434(s__42435){
return (new cljs.core.LazySeq(null,(function (){
var s__42435__$1 = s__42435;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__42435__$1);
if(temp__5720__auto__){
var s__42435__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42435__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__42435__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__42437 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__42436 = (0);
while(true){
if((i__42436 < size__4522__auto__)){
var vec__42438 = cljs.core._nth.call(null,c__4521__auto__,i__42436);
var k = cljs.core.nth.call(null,vec__42438,(0),null);
var v = cljs.core.nth.call(null,vec__42438,(1),null);
cljs.core.chunk_append.call(null,b__42437,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__42444 = (i__42436 + (1));
i__42436 = G__42444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42437),fipp$clojure$pretty_bindings_$_iter__42434.call(null,cljs.core.chunk_rest.call(null,s__42435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42437),null);
}
} else {
var vec__42441 = cljs.core.first.call(null,s__42435__$2);
var k = cljs.core.nth.call(null,vec__42441,(0),null);
var v = cljs.core.nth.call(null,vec__42441,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__42434.call(null,cljs.core.rest.call(null,s__42435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__42446){
var vec__42447 = p__42446;
var seq__42448 = cljs.core.seq.call(null,vec__42447);
var first__42449 = cljs.core.first.call(null,seq__42448);
var seq__42448__$1 = cljs.core.next.call(null,seq__42448);
var head = first__42449;
var first__42449__$1 = cljs.core.first.call(null,seq__42448__$1);
var seq__42448__$2 = cljs.core.next.call(null,seq__42448__$1);
var bvec = first__42449__$1;
var body = seq__42448__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__42447,seq__42448,first__42449,seq__42448__$1,head,first__42449__$1,seq__42448__$2,bvec,body){
return (function (p1__42445_SHARP_){
return fipp.visit.visit.call(null,p,p1__42445_SHARP_);
});})(vec__42447,seq__42448,first__42449,seq__42448__$1,head,first__42449__$1,seq__42448__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__42450_SHARP_){
return fipp.visit.visit.call(null,p,p1__42450_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__42451){
var vec__42452 = p__42451;
var seq__42453 = cljs.core.seq.call(null,vec__42452);
var first__42454 = cljs.core.first.call(null,seq__42453);
var seq__42453__$1 = cljs.core.next.call(null,seq__42453);
var head = first__42454;
var first__42454__$1 = cljs.core.first.call(null,seq__42453__$1);
var seq__42453__$2 = cljs.core.next.call(null,seq__42453__$1);
var fields = first__42454__$1;
var opts_PLUS_specs = seq__42453__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__42455){
var vec__42456 = p__42455;
var seq__42457 = cljs.core.seq.call(null,vec__42456);
var first__42458 = cljs.core.first.call(null,seq__42457);
var seq__42457__$1 = cljs.core.next.call(null,seq__42457);
var head = first__42458;
var opts_PLUS_specs = seq__42457__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fipp$clojure$build_symbol_map_$_iter__42459(s__42460){
return (new cljs.core.LazySeq(null,(function (){
var s__42460__$1 = s__42460;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__42460__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42467 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__42467,(0),null);
var syms = cljs.core.nth.call(null,vec__42467,(1),null);
var iterys__4519__auto__ = ((function (s__42460__$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__42459_$_iter__42461(s__42462){
return (new cljs.core.LazySeq(null,((function (s__42460__$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__42462__$1 = s__42462;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__42462__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__42462__$1,s__42460__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__42459_$_iter__42461_$_iter__42463(s__42464){
return (new cljs.core.LazySeq(null,((function (s__42462__$1,s__42460__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__42464__$1 = s__42464;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__42464__$1);
if(temp__5720__auto____$2){
var s__42464__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42464__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__42464__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__42466 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__42465 = (0);
while(true){
if((i__42465 < size__4522__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4521__auto__,i__42465);
cljs.core.chunk_append.call(null,b__42466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__42470 = (i__42465 + (1));
i__42465 = G__42470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42466),fipp$clojure$build_symbol_map_$_iter__42459_$_iter__42461_$_iter__42463.call(null,cljs.core.chunk_rest.call(null,s__42464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42466),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__42464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__42459_$_iter__42461_$_iter__42463.call(null,cljs.core.rest.call(null,s__42464__$2)));
}
} else {
return null;
}
break;
}
});})(s__42462__$1,s__42460__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__42462__$1,s__42460__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__42459_$_iter__42461.call(null,cljs.core.rest.call(null,s__42462__$1)));
} else {
var G__42471 = cljs.core.rest.call(null,s__42462__$1);
s__42462__$1 = G__42471;
continue;
}
} else {
return null;
}
break;
}
});})(s__42460__$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__42460__$1,vec__42467,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,syms));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fipp$clojure$build_symbol_map_$_iter__42459.call(null,cljs.core.rest.call(null,s__42460__$1)));
} else {
var G__42472 = cljs.core.rest.call(null,s__42460__$1);
s__42460__$1 = G__42472;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__42474 = arguments.length;
switch (G__42474) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;

