// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__41762__delegate = function (x__41746__auto__){
if(cljs.core.truth_(app.core.on_js_reload)){
return cljs.core.apply.call(null,app.core.on_js_reload,x__41746__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("app.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__41762 = function (var_args){
var x__41746__auto__ = null;
if (arguments.length > 0) {
var G__41763__i = 0, G__41763__a = new Array(arguments.length -  0);
while (G__41763__i < G__41763__a.length) {G__41763__a[G__41763__i] = arguments[G__41763__i + 0]; ++G__41763__i;}
  x__41746__auto__ = new cljs.core.IndexedSeq(G__41763__a,0,null);
} 
return G__41762__delegate.call(this,x__41746__auto__);};
G__41762.cljs$lang$maxFixedArity = 0;
G__41762.cljs$lang$applyTo = (function (arglist__41764){
var x__41746__auto__ = cljs.core.seq(arglist__41764);
return G__41762__delegate(x__41746__auto__);
});
G__41762.cljs$core$IFn$_invoke$arity$variadic = G__41762__delegate;
return G__41762;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"wss://localhost:34490/figwheel-ws",new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1523223303571
