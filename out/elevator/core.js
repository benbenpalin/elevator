// Compiled by ClojureScript 1.10.520 {}
goog.provide('elevator.core');
goog.require('cljs.core');
goog.require('baking_soda.core');
goog.require('day8.re_frame.http_fx');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('elevator.ajax');
goog.require('elevator.events');
goog.require('secretary.core');
goog.require('goog.History');
elevator.core.nav_link = (function elevator$core$nav_link(uri,title,page){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.NavItem,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.NavLink,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"active","active",1895962068),((cljs.core._EQ_.call(null,page,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null)))))?"active":null)], null),title], null)], null);
});
elevator.core.navbar = (function elevator$core$navbar(){
var with_let40723 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let40723","with-let40723",-1292826687));
var temp__5724__auto___40725 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___40725 == null)){
} else {
var c__37990__auto___40726 = temp__5724__auto___40725;
if((with_let40723.generation === c__37990__auto___40726.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let40723.generation = c__37990__auto___40726.ratomGeneration;
}


var init40724 = (with_let40723.length === (0));
var expanded_QMARK_ = ((init40724)?(with_let40723[(0)] = reagent.core.atom.call(null,true)):(with_let40723[(0)]));
var res__37991__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.Navbar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"light","light",1918998747),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),"navbar-dark bg-primary",new cljs.core.Keyword(null,"expand","expand",595248157),"md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.NavbarBrand,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"elevator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.NavbarToggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init40724,expanded_QMARK_,with_let40723){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(init40724,expanded_QMARK_,with_let40723))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.Collapse,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),cljs.core.deref.call(null,expanded_QMARK_),new cljs.core.Keyword(null,"navbar","navbar",1584396041),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [baking_soda.core.Nav,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"mr-auto",new cljs.core.Keyword(null,"navbar","navbar",1584396041),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null)], null)], null);

return res__37991__auto__;
});
elevator.core.about_page = (function elevator$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),"About"], null);
});
elevator.core.floor_button = (function elevator$core$floor_button(floor_number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-new-floor","select-new-floor",-94721729),floor_number], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"100px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),floor_number], null);
});
elevator.core.button_panel = (function elevator$core$button_panel(){
var selected_floors = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-floors","selected-floors",-689531988)], null)));
var in_motion_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in-motion?","in-motion?",1308585318)], null)));
var current_floor = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-floor","current-floor",-1134604880)], null)));
var next_stop = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-stop","next-stop",591775296)], null)));
var direction = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395)], null)));
var door_status = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"door-status","door-status",1890716792)], null)));
var at_stop_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"at-stop?","at-stop?",-75826094)], null)));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.floor_button,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.floor_button,(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.floor_button,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.floor_button,(4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["floor selected is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_floors)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Is the elevator in motion? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_motion_QMARK_)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["what is the current floor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_floor)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["next stop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_stop)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Elevator is going ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(direction)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["door is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(door_status)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["at a stop? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(at_stop_QMARK_)].join('')], null)], null);
});
elevator.core.home_page = (function elevator$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),"Elevator",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.button_panel], null)], null);
});
elevator.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return elevator.core.home_page;},new cljs.core.Symbol("elevator.core","home-page","elevator.core/home-page",-1868605816,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.core","elevator.core",-59167682,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/benpalin/job/elevator/src/cljs/elevator/core.cljs",16,1,70,70,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elevator.core.home_page)?elevator.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return elevator.core.about_page;},new cljs.core.Symbol("elevator.core","about-page","elevator.core/about-page",-999683192,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.core","elevator.core",-59167682,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/home/benpalin/job/elevator/src/cljs/elevator/core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elevator.core.about_page)?elevator.core.about_page.cljs$lang$test:null)]))], null);
elevator.core.page = (function elevator$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elevator.core.pages.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null))))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__39733__auto___40732 = (function (params__39734__auto__){
if(cljs.core.map_QMARK_.call(null,params__39734__auto__)){
var map__40727 = params__39734__auto__;
var map__40727__$1 = (((((!((map__40727 == null))))?(((((map__40727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40727):map__40727);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__39734__auto__)){
var vec__40729 = params__39734__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__39733__auto___40732);

var action__39733__auto___40738 = (function (params__39734__auto__){
if(cljs.core.map_QMARK_.call(null,params__39734__auto__)){
var map__40733 = params__39734__auto__;
var map__40733__$1 = (((((!((map__40733 == null))))?(((((map__40733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40733):map__40733);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__39734__auto__)){
var vec__40735 = params__39734__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__39733__auto___40738);

elevator.core.hook_browser_navigation_BANG_ = (function elevator$core$hook_browser_navigation_BANG_(){
var G__40739 = (new goog.History());
goog.events.listen(G__40739,goog.history.EventType.NAVIGATE,((function (G__40739){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__40739))
);

G__40739.setEnabled(true);

return G__40739;
});
elevator.core.mount_components = (function elevator$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return elevator.core.page;},new cljs.core.Symbol("elevator.core","page","elevator.core/page",-232334795,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"elevator.core","elevator.core",-59167682,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"/home/benpalin/job/elevator/src/cljs/elevator/core.cljs",11,1,79,79,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(elevator.core.page)?elevator.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
elevator.core.init_BANG_ = (function elevator$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"home","home",-74557309)], null));

elevator.ajax.load_interceptors_BANG_.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-init","set-init",1460385843)], null));

elevator.core.hook_browser_navigation_BANG_.call(null);

return elevator.core.mount_components.call(null);
});
