// Compiled by ClojureScript 1.10.520 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__42847,handler){
var map__42848 = p__42847;
var map__42848__$1 = (((((!((map__42848 == null))))?(((((map__42848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42848):map__42848);
var uri = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__42848,map__42848__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__42846_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__42846_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__42848,map__42848__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___42866 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___42866)){
var response_type_42867 = temp__5720__auto___42866;
this$__$1.responseType = cljs.core.name.call(null,response_type_42867);
} else {
}

var seq__42850_42868 = cljs.core.seq.call(null,headers);
var chunk__42851_42869 = null;
var count__42852_42870 = (0);
var i__42853_42871 = (0);
while(true){
if((i__42853_42871 < count__42852_42870)){
var vec__42860_42872 = cljs.core._nth.call(null,chunk__42851_42869,i__42853_42871);
var k_42873 = cljs.core.nth.call(null,vec__42860_42872,(0),null);
var v_42874 = cljs.core.nth.call(null,vec__42860_42872,(1),null);
this$__$1.setRequestHeader(k_42873,v_42874);


var G__42875 = seq__42850_42868;
var G__42876 = chunk__42851_42869;
var G__42877 = count__42852_42870;
var G__42878 = (i__42853_42871 + (1));
seq__42850_42868 = G__42875;
chunk__42851_42869 = G__42876;
count__42852_42870 = G__42877;
i__42853_42871 = G__42878;
continue;
} else {
var temp__5720__auto___42879 = cljs.core.seq.call(null,seq__42850_42868);
if(temp__5720__auto___42879){
var seq__42850_42880__$1 = temp__5720__auto___42879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42850_42880__$1)){
var c__4550__auto___42881 = cljs.core.chunk_first.call(null,seq__42850_42880__$1);
var G__42882 = cljs.core.chunk_rest.call(null,seq__42850_42880__$1);
var G__42883 = c__4550__auto___42881;
var G__42884 = cljs.core.count.call(null,c__4550__auto___42881);
var G__42885 = (0);
seq__42850_42868 = G__42882;
chunk__42851_42869 = G__42883;
count__42852_42870 = G__42884;
i__42853_42871 = G__42885;
continue;
} else {
var vec__42863_42886 = cljs.core.first.call(null,seq__42850_42880__$1);
var k_42887 = cljs.core.nth.call(null,vec__42863_42886,(0),null);
var v_42888 = cljs.core.nth.call(null,vec__42863_42886,(1),null);
this$__$1.setRequestHeader(k_42887,v_42888);


var G__42889 = cljs.core.next.call(null,seq__42850_42880__$1);
var G__42890 = null;
var G__42891 = (0);
var G__42892 = (0);
seq__42850_42868 = G__42889;
chunk__42851_42869 = G__42890;
count__42852_42870 = G__42891;
i__42853_42871 = G__42892;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
