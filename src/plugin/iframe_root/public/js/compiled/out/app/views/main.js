// Compiled by ClojureScript 1.9.946 {}
goog.provide('app.views.main');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('rum.core');
goog.require('app.views.browser');
app.views.main.layout = rum.core.build_defc.call(null,(function (app_state){
return React.createElement("div",null,React.createElement("h1",null,"Views Layout"),React.createElement("p",null,"MENU "),React.createElement("p",null,"hi, this is the views layout"),React.createElement("p",null,"on this page, you will be able to browser, edit, delete or add notifications"),sablono.interpreter.interpret.call(null,app.views.browser.layout.call(null,new cljs.core.Keyword(null,"alerts","alerts",-2121664427).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,app_state)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"layout");

//# sourceMappingURL=main.js.map?rel=1526861293217
