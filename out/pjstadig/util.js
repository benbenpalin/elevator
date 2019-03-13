// Compiled by ClojureScript 1.10.520 {}
goog.provide('pjstadig.util');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('pjstadig.print');
goog.require('cljs.test');
goog.require('goog.string.StringBuffer');
pjstadig.util.print_seq = (function pjstadig$util$print_seq(aseq){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__43881_43885 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__43882_43886 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__43883_43887 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__43884_43888 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__43883_43887;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__43884_43888;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq));

pjstadig.print.rprint.call(null," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__43882_43886;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__43881_43885;
}}

return null;
});
pjstadig.util.pprint_record = (function pjstadig$util$pprint_record(arec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__43889_43898 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__43890_43899 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__43891_43900 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__43892_43901 = (0);
cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__43891_43900;

cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__43892_43901;

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,cljs.core.re_find.call(null,/.*?\{/,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43893_43902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43894_43903 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43895_43904 = true;
var _STAR_print_fn_STAR__temp_val__43896_43905 = ((function (_STAR_print_newline_STAR__orig_val__43893_43902,_STAR_print_fn_STAR__orig_val__43894_43903,_STAR_print_newline_STAR__temp_val__43895_43904,sb__4661__auto__,_STAR_current_level_STAR__orig_val__43889_43898,_STAR_current_length_STAR__orig_val__43890_43899,_STAR_current_level_STAR__temp_val__43891_43900,_STAR_current_length_STAR__temp_val__43892_43901){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__43893_43902,_STAR_print_fn_STAR__orig_val__43894_43903,_STAR_print_newline_STAR__temp_val__43895_43904,sb__4661__auto__,_STAR_current_level_STAR__orig_val__43889_43898,_STAR_current_length_STAR__orig_val__43890_43899,_STAR_current_level_STAR__temp_val__43891_43900,_STAR_current_length_STAR__temp_val__43892_43901))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43895_43904;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43896_43905;

try{cljs.core.print.call(null,arec);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43894_43903;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43893_43902;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()),null,"}");

var length_count43897_43906 = (0);
var aseq_43907 = cljs.core.seq.call(null,arec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count43897_43906 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_43907){
pjstadig.util.print_seq.call(null,aseq_43907);

if(cljs.core.next.call(null,aseq_43907)){
cljs.core.print.call(null,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__43908 = (length_count43897_43906 + (1));
var G__43909 = cljs.core.next.call(null,aseq_43907);
length_count43897_43906 = G__43908;
aseq_43907 = G__43909;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__43890_43899;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__43889_43898;
}}

return null;
});
pjstadig.util.report_ = (function pjstadig$util$report_(p__43910){
var map__43911 = p__43910;
var map__43911__$1 = (((((!((map__43911 == null))))?(((((map__43911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43911):map__43911);
var event = map__43911__$1;
var type = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var expected = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var diffs = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var message = cljs.core.get.call(null,map__43911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,event));

if(cljs.core.truth_(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

if(cljs.core.truth_(message)){
cljs.core.println.call(null,message);
} else {
}

return pjstadig.print.with_pretty_writer.call(null,((function (map__43911,map__43911__$1,event,type,expected,actual,diffs,message){
return (function (){
var print_expected = ((function (map__43911,map__43911__$1,event,type,expected,actual,diffs,message){
return (function (actual__$1){
pjstadig.print.rprint.call(null,"expected: ");

cljs.pprint.pprint.call(null,expected,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"  actual: ");

cljs.pprint.pprint.call(null,actual__$1,cljs.core._STAR_out_STAR_);

return pjstadig.print.clear.call(null);
});})(map__43911,map__43911__$1,event,type,expected,actual,diffs,message))
;
if(cljs.core.seq.call(null,diffs)){
var seq__43913 = cljs.core.seq.call(null,diffs);
var chunk__43914 = null;
var count__43915 = (0);
var i__43916 = (0);
while(true){
if((i__43916 < count__43915)){
var vec__43929 = cljs.core._nth.call(null,chunk__43914,i__43916);
var actual__$1 = cljs.core.nth.call(null,vec__43929,(0),null);
var vec__43932 = cljs.core.nth.call(null,vec__43929,(1),null);
var a = cljs.core.nth.call(null,vec__43932,(0),null);
var b = cljs.core.nth.call(null,vec__43932,(1),null);
print_expected.call(null,actual__$1);

pjstadig.print.rprint.call(null,"    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint.call(null," - ");

cljs.pprint.pprint.call(null,a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"          + ");
} else {
pjstadig.print.rprint.call(null," + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.call(null,b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear.call(null);


var G__43941 = seq__43913;
var G__43942 = chunk__43914;
var G__43943 = count__43915;
var G__43944 = (i__43916 + (1));
seq__43913 = G__43941;
chunk__43914 = G__43942;
count__43915 = G__43943;
i__43916 = G__43944;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__43913);
if(temp__5720__auto__){
var seq__43913__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43913__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__43913__$1);
var G__43945 = cljs.core.chunk_rest.call(null,seq__43913__$1);
var G__43946 = c__4550__auto__;
var G__43947 = cljs.core.count.call(null,c__4550__auto__);
var G__43948 = (0);
seq__43913 = G__43945;
chunk__43914 = G__43946;
count__43915 = G__43947;
i__43916 = G__43948;
continue;
} else {
var vec__43935 = cljs.core.first.call(null,seq__43913__$1);
var actual__$1 = cljs.core.nth.call(null,vec__43935,(0),null);
var vec__43938 = cljs.core.nth.call(null,vec__43935,(1),null);
var a = cljs.core.nth.call(null,vec__43938,(0),null);
var b = cljs.core.nth.call(null,vec__43938,(1),null);
print_expected.call(null,actual__$1);

pjstadig.print.rprint.call(null,"    diff:");

if(cljs.core.truth_(a)){
pjstadig.print.rprint.call(null," - ");

cljs.pprint.pprint.call(null,a,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"          + ");
} else {
pjstadig.print.rprint.call(null," + ");
}

if(cljs.core.truth_(b)){
cljs.pprint.pprint.call(null,b,cljs.core._STAR_out_STAR_);
} else {
}

pjstadig.print.clear.call(null);


var G__43949 = cljs.core.next.call(null,seq__43913__$1);
var G__43950 = null;
var G__43951 = (0);
var G__43952 = (0);
seq__43913 = G__43949;
chunk__43914 = G__43950;
count__43915 = G__43951;
i__43916 = G__43952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return print_expected.call(null,actual);
}
});})(map__43911,map__43911__$1,event,type,expected,actual,diffs,message))
);
});
pjstadig.util.define_fail_report = (function pjstadig$util$define_fail_report(){
return cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (event){
return pjstadig.util.report_.call(null,pjstadig.print.convert_event.call(null,event));
}));
});
