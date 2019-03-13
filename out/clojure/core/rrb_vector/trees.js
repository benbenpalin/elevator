// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.rrb_vector.trees');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.trees.tail_offset = (function clojure$core$rrb_vector$trees$tail_offset(cnt,tail){
return (cnt - tail.length);
});
clojure.core.rrb_vector.trees.array_for = (function clojure$core$rrb_vector$trees$array_for(cnt,shift,root,tail,i){
if(((((0) <= i)) && ((i < cnt)))){
if((i >= clojure.core.rrb_vector.trees.tail_offset.call(null,cnt,tail))){
return tail;
} else {
var i__$1 = i;
var node = root;
var shift__$1 = shift;
while(true){
if((shift__$1 === (0))){
return node.arr;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)){
var node__$1 = (node.arr[((i__$1 >> shift__$1) & (31))]);
var shift__$2 = (shift__$1 - (5));
while(true){
if((shift__$2 === (0))){
return node__$1.arr;
} else {
var G__40392 = (node__$1.arr[((i__$1 >> shift__$2) & (31))]);
var G__40393 = (shift__$2 - (5));
node__$1 = G__40392;
shift__$2 = G__40393;
continue;
}
break;
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var j = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__40394 = (j + (1));
j = G__40394;
continue;
}
break;
}
})();
var i__$2 = (((j > (0)))?(i__$1 - (rngs[(j - (1))])):i__$1);
var G__40395 = i__$2;
var G__40396 = (node.arr[j]);
var G__40397 = (shift__$1 - (5));
i__$1 = G__40395;
node = G__40396;
shift__$1 = G__40397;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds.call(null,i,cnt);
}
});
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

var G__40398 = (s + (5));
var G__40399 = ret;
s = G__40398;
n = G__40399;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode.call(null,edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__40400 = (s + (5));
var G__40401 = ret;
s = G__40400;
n = G__40401;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node)){
var arr = cljs.core.aclone.call(null,current_node.arr);
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var n_40402 = ret;
var shift_40403__$1 = shift;
while(true){
var arr_40404__$1 = n_40402.arr;
var subidx_40405 = (((cnt - (1)) >> shift_40403__$1) & (31));
if((shift_40403__$1 === (5))){
(arr_40404__$1[subidx_40405] = tail_node);
} else {
var temp__5718__auto___40406 = (arr_40404__$1[subidx_40405]);
if(cljs.core.truth_(temp__5718__auto___40406)){
var child_40407 = temp__5718__auto___40406;
var new_carr_40408 = cljs.core.aclone.call(null,child_40407.arr);
var new_child_40409 = cljs.core.__GT_VectorNode.call(null,root_edit,new_carr_40408);
(arr_40404__$1[subidx_40405] = new_child_40409);

var G__40410 = new_child_40409;
var G__40411 = (shift_40403__$1 - (5));
n_40402 = G__40410;
shift_40403__$1 = G__40411;
continue;
} else {
(arr_40404__$1[subidx_40405] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift_40403__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if((!((ccnt === ((1) << shift))))){
return clojure.core.rrb_vector.trees.push_tail.call(null,(shift - (5)),(ccnt + (1)),root_edit,child,tail_node);
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path.call(null,tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node)){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var new_child = clojure.core.rrb_vector.trees.pop_tail.call(null,(shift - (5)),cnt,root_edit,(current_node.arr[subidx]));
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31))))){
return subidx__$1;
} else {
var G__40412 = (subidx__$1 + (1));
subidx__$1 = G__40412;
continue;
}
break;
}
})();
var new_rngs = cljs.core.aclone.call(null,rngs);
if((shift > (5))){
var child = (current_node.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = clojure.core.rrb_vector.trees.pop_tail.call(null,(shift - (5)),child_cnt,root_edit,child);
if((((new_child == null)) && ((subidx__$1 === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child)){
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range.call(null,child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range.call(null,new_child):(0)));
var arr = cljs.core.aclone.call(null,current_node.arr);
(new_rngs[subidx__$1] = ((new_rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var child = (arr[subidx__$1]);
var new_rngs__$1 = cljs.core.aclone.call(null,rngs);
(arr[subidx__$1] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx__$1] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode.call(null,root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,current_node)){
var node = clojure.core.rrb_vector.nodes.clone.call(null,shift,current_node);
var shift_40413__$1 = shift;
var node_40414__$1 = node;
while(true){
if((shift_40413__$1 === (0))){
var arr_40415 = node_40414__$1.arr;
(arr_40415[(i & (31))] = val);
} else {
var arr_40416 = node_40414__$1.arr;
var subidx_40417 = ((i >> shift_40413__$1) & (31));
var child_40418 = clojure.core.rrb_vector.nodes.clone.call(null,shift_40413__$1,(arr_40416[subidx_40417]));
(arr_40416[subidx_40417] = child_40418);

var G__40419 = (shift_40413__$1 - (5));
var G__40420 = child_40418;
shift_40413__$1 = G__40419;
node_40414__$1 = G__40420;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone.call(null,current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__40421 = (subidx__$1 + (1));
subidx__$1 = G__40421;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = clojure.core.rrb_vector.trees.do_assoc.call(null,(shift - (5)),(arr[subidx__$1]),i__$1,val));

return cljs.core.__GT_VectorNode.call(null,current_node.edit,arr);
}
});
