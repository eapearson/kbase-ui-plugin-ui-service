// Compiled by ClojureScript 1.9.946 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/app/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof app.core.app_state !== 'undefined'){
} else {
app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello KBase World!"], null));
}
app.core.hello_world = rum.core.build_defc.call(null,(function (){
return React.createElement("div",null,(function (){var attrs39888 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs39888))?sablono.interpreter.attributes.call(null,attrs39888):null),((cljs.core.map_QMARK_.call(null,attrs39888))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs39888)], null)));
})(),React.createElement("h2",null,"About this Plugin"),React.createElement("p",null,"This is an app written in ClojureScript using the Rum libarary."),React.createElement("p",null,"It is a standalone app, but integrates with kbase-ui via the iframer interface."),React.createElement("h2",null,"TODO"),React.createElement("ul",null,React.createElement("li",null,"Add postMessage-based integration with kbase-ui"),React.createElement("li",null,"finalize iframer interface!!!"),React.createElement("li",null,"convert iframer stuff to es6"),React.createElement("li",null,"implement the cljs side of the interface")),React.createElement("h2",null,"Advantages"),React.createElement("p",null,"There are so many!"));
}),null,"hello-world");
cljs.core.println.call(null,"get the data params...");
rum.core.mount.call(null,app.core.hello_world.call(null),document.getElementById("app"));
app.core.on_js_reload = (function app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1523220387860
