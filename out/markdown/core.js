// Compiled by ClojureScript 1.10.520 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__43437){
var map__43438 = p__43437;
var map__43438__$1 = (((((!((map__43438 == null))))?(((((map__43438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43438):map__43438);
var replacement_transformers = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__43438__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__43438,map__43438__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__43440 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__43441 = inhibit_separator;
markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__43441;

try{var vec__43442 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR__orig_val__43440,_STAR_inhibit_separator_STAR__temp_val__43441,map__43438,map__43438__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__43445,transformer){
var vec__43446 = p__43445;
var text = cljs.core.nth.call(null,vec__43446,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__43446,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR__orig_val__43440,_STAR_inhibit_separator_STAR__temp_val__43441,map__43438,map__43438__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__43442,(0),null);
var new_state = cljs.core.nth.call(null,vec__43442,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__43440;
}});
;})(map__43438,map__43438__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43451 = arguments.length;
var i__4731__auto___43452 = (0);
while(true){
if((i__4731__auto___43452 < len__4730__auto___43451)){
args__4736__auto__.push((arguments[i__4731__auto___43452]));

var G__43453 = (i__4731__auto___43452 + (1));
i__4731__auto___43452 = G__43453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq43449){
var G__43450 = cljs.core.first.call(null,seq43449);
var seq43449__$1 = cljs.core.next.call(null,seq43449);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43450,seq43449__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__43454_43458 = cljs.core.seq.call(null,lines);
var chunk__43455_43459 = null;
var count__43456_43460 = (0);
var i__43457_43461 = (0);
while(true){
if((i__43457_43461 < count__43456_43460)){
var line_43462 = cljs.core._nth.call(null,chunk__43455_43459,i__43457_43461);
markdown.links.parse_reference_link.call(null,line_43462,references);


var G__43463 = seq__43454_43458;
var G__43464 = chunk__43455_43459;
var G__43465 = count__43456_43460;
var G__43466 = (i__43457_43461 + (1));
seq__43454_43458 = G__43463;
chunk__43455_43459 = G__43464;
count__43456_43460 = G__43465;
i__43457_43461 = G__43466;
continue;
} else {
var temp__5720__auto___43467 = cljs.core.seq.call(null,seq__43454_43458);
if(temp__5720__auto___43467){
var seq__43454_43468__$1 = temp__5720__auto___43467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43454_43468__$1)){
var c__4550__auto___43469 = cljs.core.chunk_first.call(null,seq__43454_43468__$1);
var G__43470 = cljs.core.chunk_rest.call(null,seq__43454_43468__$1);
var G__43471 = c__4550__auto___43469;
var G__43472 = cljs.core.count.call(null,c__4550__auto___43469);
var G__43473 = (0);
seq__43454_43458 = G__43470;
chunk__43455_43459 = G__43471;
count__43456_43460 = G__43472;
i__43457_43461 = G__43473;
continue;
} else {
var line_43474 = cljs.core.first.call(null,seq__43454_43468__$1);
markdown.links.parse_reference_link.call(null,line_43474,references);


var G__43475 = cljs.core.next.call(null,seq__43454_43468__$1);
var G__43476 = null;
var G__43477 = (0);
var G__43478 = (0);
seq__43454_43458 = G__43475;
chunk__43455_43459 = G__43476;
count__43456_43460 = G__43477;
i__43457_43461 = G__43478;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__43479_43483 = cljs.core.seq.call(null,lines);
var chunk__43480_43484 = null;
var count__43481_43485 = (0);
var i__43482_43486 = (0);
while(true){
if((i__43482_43486 < count__43481_43485)){
var line_43487 = cljs.core._nth.call(null,chunk__43480_43484,i__43482_43486);
markdown.links.parse_footnote_link.call(null,line_43487,footnotes);


var G__43488 = seq__43479_43483;
var G__43489 = chunk__43480_43484;
var G__43490 = count__43481_43485;
var G__43491 = (i__43482_43486 + (1));
seq__43479_43483 = G__43488;
chunk__43480_43484 = G__43489;
count__43481_43485 = G__43490;
i__43482_43486 = G__43491;
continue;
} else {
var temp__5720__auto___43492 = cljs.core.seq.call(null,seq__43479_43483);
if(temp__5720__auto___43492){
var seq__43479_43493__$1 = temp__5720__auto___43492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43479_43493__$1)){
var c__4550__auto___43494 = cljs.core.chunk_first.call(null,seq__43479_43493__$1);
var G__43495 = cljs.core.chunk_rest.call(null,seq__43479_43493__$1);
var G__43496 = c__4550__auto___43494;
var G__43497 = cljs.core.count.call(null,c__4550__auto___43494);
var G__43498 = (0);
seq__43479_43483 = G__43495;
chunk__43480_43484 = G__43496;
count__43481_43485 = G__43497;
i__43482_43486 = G__43498;
continue;
} else {
var line_43499 = cljs.core.first.call(null,seq__43479_43493__$1);
markdown.links.parse_footnote_link.call(null,line_43499,footnotes);


var G__43500 = cljs.core.next.call(null,seq__43479_43493__$1);
var G__43501 = null;
var G__43502 = (0);
var G__43503 = (0);
seq__43479_43483 = G__43500;
chunk__43480_43484 = G__43501;
count__43481_43485 = G__43502;
i__43482_43486 = G__43503;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__43505 = cljs.core.split_with.call(null,(function (p1__43504_SHARP_){
return cljs.core.not_empty.call(null,p1__43504_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__43505,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__43505,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__43508 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__43509 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__43510 = ((function (_STAR_substring_STAR__orig_val__43508,_STAR_formatter_STAR__orig_val__43509){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR__orig_val__43508,_STAR_formatter_STAR__orig_val__43509))
;
var _STAR_formatter_STAR__temp_val__43511 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__43510;

markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__43511;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__43512 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__43512,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__43512,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__43518_43528 = lines__$1;
var vec__43519_43529 = G__43518_43528;
var seq__43520_43530 = cljs.core.seq.call(null,vec__43519_43529);
var first__43521_43531 = cljs.core.first.call(null,seq__43520_43530);
var seq__43520_43532__$1 = cljs.core.next.call(null,seq__43520_43530);
var line_43533 = first__43521_43531;
var more_43534 = seq__43520_43532__$1;
var state_43535 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__43518_43536__$1 = G__43518_43528;
var state_43537__$1 = state_43535;
while(true){
var vec__43525_43538 = G__43518_43536__$1;
var seq__43526_43539 = cljs.core.seq.call(null,vec__43525_43538);
var first__43527_43540 = cljs.core.first.call(null,seq__43526_43539);
var seq__43526_43541__$1 = cljs.core.next.call(null,seq__43526_43539);
var line_43542__$1 = first__43527_43540;
var more_43543__$1 = seq__43526_43541__$1;
var state_43544__$2 = state_43537__$1;
var line_43545__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_43544__$2))?"":line_43542__$1);
var state_43546__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_43544__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_43544__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_43544__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_43544__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_43544__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_43543__$1))){
var G__43547 = more_43543__$1;
var G__43548 = cljs.core.assoc.call(null,transformer.call(null,html,line_43545__$2,cljs.core.first.call(null,more_43543__$1),cljs.core.dissoc.call(null,state_43546__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_43545__$2.trim()));
G__43518_43536__$1 = G__43547;
state_43537__$1 = G__43548;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_43546__$3))),line_43545__$2,"",cljs.core.assoc.call(null,state_43546__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__43509;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__43508;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43551 = arguments.length;
var i__4731__auto___43552 = (0);
while(true){
if((i__4731__auto___43552 < len__4730__auto___43551)){
args__4736__auto__.push((arguments[i__4731__auto___43552]));

var G__43553 = (i__4731__auto___43552 + (1));
i__4731__auto___43552 = G__43553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq43549){
var G__43550 = cljs.core.first.call(null,seq43549);
var seq43549__$1 = cljs.core.next.call(null,seq43549);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43550,seq43549__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43556 = arguments.length;
var i__4731__auto___43557 = (0);
while(true){
if((i__4731__auto___43557 < len__4730__auto___43556)){
args__4736__auto__.push((arguments[i__4731__auto___43557]));

var G__43558 = (i__4731__auto___43557 + (1));
i__4731__auto___43557 = G__43558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq43554){
var G__43555 = cljs.core.first.call(null,seq43554);
var seq43554__$1 = cljs.core.next.call(null,seq43554);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43555,seq43554__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43560 = arguments.length;
var i__4731__auto___43561 = (0);
while(true){
if((i__4731__auto___43561 < len__4730__auto___43560)){
args__4736__auto__.push((arguments[i__4731__auto___43561]));

var G__43562 = (i__4731__auto___43561 + (1));
i__4731__auto___43561 = G__43562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq43559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43559));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43564 = arguments.length;
var i__4731__auto___43565 = (0);
while(true){
if((i__4731__auto___43565 < len__4730__auto___43564)){
args__4736__auto__.push((arguments[i__4731__auto___43565]));

var G__43566 = (i__4731__auto___43565 + (1));
i__4731__auto___43565 = G__43566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq43563){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43563));
});

