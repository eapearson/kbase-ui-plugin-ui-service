// Compiled by ClojureScript 1.9.946 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('rum.core');
goog.require('app.views.main');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/app/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof app.core.app_state !== 'undefined'){
} else {
app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello KBase World!",new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"username","username",1605666410),"dunno",new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"abc",new cljs.core.Keyword(null,"title","title",636505583),"My notification 1",new cljs.core.Keyword(null,"start-at","start-at",-103334680),"5/20/18T16:00-07:00",new cljs.core.Keyword(null,"end-at","end-at",1331226740),"5/20/18T18:00-07:00",new cljs.core.Keyword(null,"status","status",-1997798413),"active"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"def",new cljs.core.Keyword(null,"title","title",636505583),"My notification 1",new cljs.core.Keyword(null,"start-at","start-at",-103334680),"5/20/18T16:00-07:00",new cljs.core.Keyword(null,"end-at","end-at",1331226740),"5/20/18T18:00-07:00",new cljs.core.Keyword(null,"status","status",-1997798413),"active"], null)], null)], null));
}
app.core.layout = rum.core.build_defc.call(null,(function (app_state){
var attrs40605 = app.views.main.layout.call(null,app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40605))?sablono.interpreter.attributes.call(null,attrs40605):null),((cljs.core.map_QMARK_.call(null,attrs40605))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40605)], null)));
}),null,"layout");
cljs.core.println.call(null,"get the data params as edn...");
app.core.channel = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),null], null));
app.core.channel_handle_message = (function app$core$channel_handle_message(msg_event){
var msg = cljs.core.js__GT_clj.call(null,JSON.parse(JSON.stringify(msg_event.data)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.println.call(null,"$ received");

var channel_id = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"envelope","envelope",-236796318).cljs$core$IFn$_invoke$arity$1(msg));
if(!(cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.channel))))){
return cljs.core.println.call(null,"! sorry, wrong channel",channel_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.channel)));
} else {
var G__40606 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(msg);
switch (G__40606) {
case "auth-status":
cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg)));

return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg)));

break;
default:
return cljs.core.println.call(null,"~ ignored: ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(msg));

}
}
});
app.core.channel_listen = (function app$core$channel_listen(){
return window.parent.addEventListener("message",app.core.channel_handle_message,false);
});
app.core.channel_send = (function app$core$channel_send(host,message){
return window.parent.postMessage(cljs.core.clj__GT_js.call(null,message),host);
});
var data_params_40608 = cljs.core.js__GT_clj.call(null,JSON.parse(decodeURIComponent(window.frameElement.getAttribute("data-params"))));
var host_40609 = document.location.origin;
var id_40610 = cljs.core.get.call(null,data_params_40608,"frameId");
var channel_id_40611 = cljs.core.get.call(null,data_params_40608,"channelId");
var host_id_40612 = cljs.core.get.call(null,data_params_40608,"hostId");
var now_40613 = (new Date()).getTime();
cljs.core.swap_BANG_.call(null,app.core.channel,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),channel_id_40611);

app.core.channel_listen.call(null);

app.core.channel_send.call(null,host_40609,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),channel_id_40611,new cljs.core.Keyword(null,"created","created",-704993748),now_40613], null),new cljs.core.Keyword(null,"name","name",1843675177),"get-auth-status"], null));
rum.core.mount.call(null,app.core.layout.call(null,app.core.app_state),document.getElementById("app"));
app.core.on_js_reload = (function app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1526861293240
