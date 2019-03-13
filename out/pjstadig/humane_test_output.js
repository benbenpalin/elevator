// Compiled by ClojureScript 1.10.520 {}
goog.provide('pjstadig.humane_test_output');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs.pprint');
goog.require('pjstadig.util');
pjstadig.humane_test_output.pprint_map = cljs.core.get_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461));
cljs.core._add_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),(function (amap){
if(cljs.core.record_QMARK_.call(null,amap)){
return pjstadig.util.pprint_record.call(null,amap);
} else {
return pjstadig.humane_test_output.pprint_map.call(null,amap);
}
}));
pjstadig.util.define_fail_report.call(null);
