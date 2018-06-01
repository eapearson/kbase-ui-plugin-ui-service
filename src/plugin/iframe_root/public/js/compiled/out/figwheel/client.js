// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e41249){if((e41249 instanceof Error)){
var e = e41249;
return "Error: Unable to stringify";
} else {
throw e41249;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41250_SHARP_){
if(typeof p1__41250_SHARP_ === 'string'){
return p1__41250_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41250_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31480__auto__ = [];
var len__31473__auto___41255 = arguments.length;
var i__31474__auto___41256 = (0);
while(true){
if((i__31474__auto___41256 < len__31473__auto___41255)){
args__31480__auto__.push((arguments[i__31474__auto___41256]));

var G__41257 = (i__31474__auto___41256 + (1));
i__31474__auto___41256 = G__41257;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41254){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41254));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31480__auto__ = [];
var len__31473__auto___41259 = arguments.length;
var i__31474__auto___41260 = (0);
while(true){
if((i__31474__auto___41260 < len__31473__auto___41259)){
args__31480__auto__.push((arguments[i__31474__auto___41260]));

var G__41261 = (i__31474__auto___41260 + (1));
i__31474__auto___41260 = G__41261;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41258){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41258));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41262){
var map__41263 = p__41262;
var map__41263__$1 = ((((!((map__41263 == null)))?((((map__41263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41263):map__41263);
var message = cljs.core.get.call(null,map__41263__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41263__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30194__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30182__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30182__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30182__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__41139__auto___41342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41139__auto___41342,ch){
return (function (){
var f__41140__auto__ = (function (){var switch__41116__auto__ = ((function (c__41139__auto___41342,ch){
return (function (state_41314){
var state_val_41315 = (state_41314[(1)]);
if((state_val_41315 === (7))){
var inst_41310 = (state_41314[(2)]);
var state_41314__$1 = state_41314;
var statearr_41316_41343 = state_41314__$1;
(statearr_41316_41343[(2)] = inst_41310);

(statearr_41316_41343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (1))){
var state_41314__$1 = state_41314;
var statearr_41317_41344 = state_41314__$1;
(statearr_41317_41344[(2)] = null);

(statearr_41317_41344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (4))){
var inst_41267 = (state_41314[(7)]);
var inst_41267__$1 = (state_41314[(2)]);
var state_41314__$1 = (function (){var statearr_41318 = state_41314;
(statearr_41318[(7)] = inst_41267__$1);

return statearr_41318;
})();
if(cljs.core.truth_(inst_41267__$1)){
var statearr_41319_41345 = state_41314__$1;
(statearr_41319_41345[(1)] = (5));

} else {
var statearr_41320_41346 = state_41314__$1;
(statearr_41320_41346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (15))){
var inst_41274 = (state_41314[(8)]);
var inst_41289 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41274);
var inst_41290 = cljs.core.first.call(null,inst_41289);
var inst_41291 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41290);
var inst_41292 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41291)].join('');
var inst_41293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41292);
var state_41314__$1 = state_41314;
var statearr_41321_41347 = state_41314__$1;
(statearr_41321_41347[(2)] = inst_41293);

(statearr_41321_41347[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (13))){
var inst_41298 = (state_41314[(2)]);
var state_41314__$1 = state_41314;
var statearr_41322_41348 = state_41314__$1;
(statearr_41322_41348[(2)] = inst_41298);

(statearr_41322_41348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (6))){
var state_41314__$1 = state_41314;
var statearr_41323_41349 = state_41314__$1;
(statearr_41323_41349[(2)] = null);

(statearr_41323_41349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (17))){
var inst_41296 = (state_41314[(2)]);
var state_41314__$1 = state_41314;
var statearr_41324_41350 = state_41314__$1;
(statearr_41324_41350[(2)] = inst_41296);

(statearr_41324_41350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (3))){
var inst_41312 = (state_41314[(2)]);
var state_41314__$1 = state_41314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41314__$1,inst_41312);
} else {
if((state_val_41315 === (12))){
var inst_41273 = (state_41314[(9)]);
var inst_41287 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41273,opts);
var state_41314__$1 = state_41314;
if(cljs.core.truth_(inst_41287)){
var statearr_41325_41351 = state_41314__$1;
(statearr_41325_41351[(1)] = (15));

} else {
var statearr_41326_41352 = state_41314__$1;
(statearr_41326_41352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (2))){
var state_41314__$1 = state_41314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41314__$1,(4),ch);
} else {
if((state_val_41315 === (11))){
var inst_41274 = (state_41314[(8)]);
var inst_41279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41280 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41274);
var inst_41281 = cljs.core.async.timeout.call(null,(1000));
var inst_41282 = [inst_41280,inst_41281];
var inst_41283 = (new cljs.core.PersistentVector(null,2,(5),inst_41279,inst_41282,null));
var state_41314__$1 = state_41314;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41314__$1,(14),inst_41283);
} else {
if((state_val_41315 === (9))){
var inst_41274 = (state_41314[(8)]);
var inst_41300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41301 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41274);
var inst_41302 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41301);
var inst_41303 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41302)].join('');
var inst_41304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41303);
var state_41314__$1 = (function (){var statearr_41327 = state_41314;
(statearr_41327[(10)] = inst_41300);

return statearr_41327;
})();
var statearr_41328_41353 = state_41314__$1;
(statearr_41328_41353[(2)] = inst_41304);

(statearr_41328_41353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (5))){
var inst_41267 = (state_41314[(7)]);
var inst_41269 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41270 = (new cljs.core.PersistentArrayMap(null,2,inst_41269,null));
var inst_41271 = (new cljs.core.PersistentHashSet(null,inst_41270,null));
var inst_41272 = figwheel.client.focus_msgs.call(null,inst_41271,inst_41267);
var inst_41273 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41272);
var inst_41274 = cljs.core.first.call(null,inst_41272);
var inst_41275 = figwheel.client.autoload_QMARK_.call(null);
var state_41314__$1 = (function (){var statearr_41329 = state_41314;
(statearr_41329[(8)] = inst_41274);

(statearr_41329[(9)] = inst_41273);

return statearr_41329;
})();
if(cljs.core.truth_(inst_41275)){
var statearr_41330_41354 = state_41314__$1;
(statearr_41330_41354[(1)] = (8));

} else {
var statearr_41331_41355 = state_41314__$1;
(statearr_41331_41355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (14))){
var inst_41285 = (state_41314[(2)]);
var state_41314__$1 = state_41314;
var statearr_41332_41356 = state_41314__$1;
(statearr_41332_41356[(2)] = inst_41285);

(statearr_41332_41356[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (16))){
var state_41314__$1 = state_41314;
var statearr_41333_41357 = state_41314__$1;
(statearr_41333_41357[(2)] = null);

(statearr_41333_41357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (10))){
var inst_41306 = (state_41314[(2)]);
var state_41314__$1 = (function (){var statearr_41334 = state_41314;
(statearr_41334[(11)] = inst_41306);

return statearr_41334;
})();
var statearr_41335_41358 = state_41314__$1;
(statearr_41335_41358[(2)] = null);

(statearr_41335_41358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41315 === (8))){
var inst_41273 = (state_41314[(9)]);
var inst_41277 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41273,opts);
var state_41314__$1 = state_41314;
if(cljs.core.truth_(inst_41277)){
var statearr_41336_41359 = state_41314__$1;
(statearr_41336_41359[(1)] = (11));

} else {
var statearr_41337_41360 = state_41314__$1;
(statearr_41337_41360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41139__auto___41342,ch))
;
return ((function (switch__41116__auto__,c__41139__auto___41342,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____0 = (function (){
var statearr_41338 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41338[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__);

(statearr_41338[(1)] = (1));

return statearr_41338;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____1 = (function (state_41314){
while(true){
var ret_value__41118__auto__ = (function (){try{while(true){
var result__41119__auto__ = switch__41116__auto__.call(null,state_41314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41119__auto__;
}
break;
}
}catch (e41339){if((e41339 instanceof Object)){
var ex__41120__auto__ = e41339;
var statearr_41340_41361 = state_41314;
(statearr_41340_41361[(5)] = ex__41120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41362 = state_41314;
state_41314 = G__41362;
continue;
} else {
return ret_value__41118__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__ = function(state_41314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____1.call(this,state_41314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41117__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41117__auto__;
})()
;})(switch__41116__auto__,c__41139__auto___41342,ch))
})();
var state__41141__auto__ = (function (){var statearr_41341 = f__41140__auto__.call(null);
(statearr_41341[(6)] = c__41139__auto___41342);

return statearr_41341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41141__auto__);
});})(c__41139__auto___41342,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41363_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41363_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41367 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41367){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41366 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41365,_STAR_print_fn_STAR_41366,sb,base_path_41367){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_41365,_STAR_print_fn_STAR_41366,sb,base_path_41367))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41366;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41365;
}}catch (e41364){if((e41364 instanceof Error)){
var e = e41364;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41367], null));
} else {
var e = e41364;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41367))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41368){
var map__41369 = p__41368;
var map__41369__$1 = ((((!((map__41369 == null)))?((((map__41369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41369):map__41369);
var opts = map__41369__$1;
var build_id = cljs.core.get.call(null,map__41369__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41369,map__41369__$1,opts,build_id){
return (function (p__41371){
var vec__41372 = p__41371;
var seq__41373 = cljs.core.seq.call(null,vec__41372);
var first__41374 = cljs.core.first.call(null,seq__41373);
var seq__41373__$1 = cljs.core.next.call(null,seq__41373);
var map__41375 = first__41374;
var map__41375__$1 = ((((!((map__41375 == null)))?((((map__41375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41375):map__41375);
var msg = map__41375__$1;
var msg_name = cljs.core.get.call(null,map__41375__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41373__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41372,seq__41373,first__41374,seq__41373__$1,map__41375,map__41375__$1,msg,msg_name,_,map__41369,map__41369__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41372,seq__41373,first__41374,seq__41373__$1,map__41375,map__41375__$1,msg,msg_name,_,map__41369,map__41369__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41369,map__41369__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41377){
var vec__41378 = p__41377;
var seq__41379 = cljs.core.seq.call(null,vec__41378);
var first__41380 = cljs.core.first.call(null,seq__41379);
var seq__41379__$1 = cljs.core.next.call(null,seq__41379);
var map__41381 = first__41380;
var map__41381__$1 = ((((!((map__41381 == null)))?((((map__41381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41381):map__41381);
var msg = map__41381__$1;
var msg_name = cljs.core.get.call(null,map__41381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41379__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41383){
var map__41384 = p__41383;
var map__41384__$1 = ((((!((map__41384 == null)))?((((map__41384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41384):map__41384);
var on_compile_warning = cljs.core.get.call(null,map__41384__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41384__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41384,map__41384__$1,on_compile_warning,on_compile_fail){
return (function (p__41386){
var vec__41387 = p__41386;
var seq__41388 = cljs.core.seq.call(null,vec__41387);
var first__41389 = cljs.core.first.call(null,seq__41388);
var seq__41388__$1 = cljs.core.next.call(null,seq__41388);
var map__41390 = first__41389;
var map__41390__$1 = ((((!((map__41390 == null)))?((((map__41390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41390):map__41390);
var msg = map__41390__$1;
var msg_name = cljs.core.get.call(null,map__41390__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41388__$1;
var pred__41392 = cljs.core._EQ_;
var expr__41393 = msg_name;
if(cljs.core.truth_(pred__41392.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41393))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41392.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41393))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41384,map__41384__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41139__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41139__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41140__auto__ = (function (){var switch__41116__auto__ = ((function (c__41139__auto__,msg_hist,msg_names,msg){
return (function (state_41482){
var state_val_41483 = (state_41482[(1)]);
if((state_val_41483 === (7))){
var inst_41402 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41402)){
var statearr_41484_41531 = state_41482__$1;
(statearr_41484_41531[(1)] = (8));

} else {
var statearr_41485_41532 = state_41482__$1;
(statearr_41485_41532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (20))){
var inst_41476 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41486_41533 = state_41482__$1;
(statearr_41486_41533[(2)] = inst_41476);

(statearr_41486_41533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (27))){
var inst_41472 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41487_41534 = state_41482__$1;
(statearr_41487_41534[(2)] = inst_41472);

(statearr_41487_41534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (1))){
var inst_41395 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41395)){
var statearr_41488_41535 = state_41482__$1;
(statearr_41488_41535[(1)] = (2));

} else {
var statearr_41489_41536 = state_41482__$1;
(statearr_41489_41536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (24))){
var inst_41474 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41490_41537 = state_41482__$1;
(statearr_41490_41537[(2)] = inst_41474);

(statearr_41490_41537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (4))){
var inst_41480 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41482__$1,inst_41480);
} else {
if((state_val_41483 === (15))){
var inst_41478 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41491_41538 = state_41482__$1;
(statearr_41491_41538[(2)] = inst_41478);

(statearr_41491_41538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (21))){
var inst_41431 = (state_41482[(2)]);
var inst_41432 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41433 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41432);
var state_41482__$1 = (function (){var statearr_41492 = state_41482;
(statearr_41492[(7)] = inst_41431);

return statearr_41492;
})();
var statearr_41493_41539 = state_41482__$1;
(statearr_41493_41539[(2)] = inst_41433);

(statearr_41493_41539[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (31))){
var inst_41461 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41461)){
var statearr_41494_41540 = state_41482__$1;
(statearr_41494_41540[(1)] = (34));

} else {
var statearr_41495_41541 = state_41482__$1;
(statearr_41495_41541[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (32))){
var inst_41470 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41496_41542 = state_41482__$1;
(statearr_41496_41542[(2)] = inst_41470);

(statearr_41496_41542[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (33))){
var inst_41457 = (state_41482[(2)]);
var inst_41458 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41459 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41458);
var state_41482__$1 = (function (){var statearr_41497 = state_41482;
(statearr_41497[(8)] = inst_41457);

return statearr_41497;
})();
var statearr_41498_41543 = state_41482__$1;
(statearr_41498_41543[(2)] = inst_41459);

(statearr_41498_41543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (13))){
var inst_41416 = figwheel.client.heads_up.clear.call(null);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(16),inst_41416);
} else {
if((state_val_41483 === (22))){
var inst_41437 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41438 = figwheel.client.heads_up.append_warning_message.call(null,inst_41437);
var state_41482__$1 = state_41482;
var statearr_41499_41544 = state_41482__$1;
(statearr_41499_41544[(2)] = inst_41438);

(statearr_41499_41544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (36))){
var inst_41468 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41500_41545 = state_41482__$1;
(statearr_41500_41545[(2)] = inst_41468);

(statearr_41500_41545[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (29))){
var inst_41448 = (state_41482[(2)]);
var inst_41449 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41450 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41449);
var state_41482__$1 = (function (){var statearr_41501 = state_41482;
(statearr_41501[(9)] = inst_41448);

return statearr_41501;
})();
var statearr_41502_41546 = state_41482__$1;
(statearr_41502_41546[(2)] = inst_41450);

(statearr_41502_41546[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (6))){
var inst_41397 = (state_41482[(10)]);
var state_41482__$1 = state_41482;
var statearr_41503_41547 = state_41482__$1;
(statearr_41503_41547[(2)] = inst_41397);

(statearr_41503_41547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (28))){
var inst_41444 = (state_41482[(2)]);
var inst_41445 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41446 = figwheel.client.heads_up.display_warning.call(null,inst_41445);
var state_41482__$1 = (function (){var statearr_41504 = state_41482;
(statearr_41504[(11)] = inst_41444);

return statearr_41504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(29),inst_41446);
} else {
if((state_val_41483 === (25))){
var inst_41442 = figwheel.client.heads_up.clear.call(null);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(28),inst_41442);
} else {
if((state_val_41483 === (34))){
var inst_41463 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(37),inst_41463);
} else {
if((state_val_41483 === (17))){
var inst_41422 = (state_41482[(2)]);
var inst_41423 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41424 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41423);
var state_41482__$1 = (function (){var statearr_41505 = state_41482;
(statearr_41505[(12)] = inst_41422);

return statearr_41505;
})();
var statearr_41506_41548 = state_41482__$1;
(statearr_41506_41548[(2)] = inst_41424);

(statearr_41506_41548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (3))){
var inst_41414 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41414)){
var statearr_41507_41549 = state_41482__$1;
(statearr_41507_41549[(1)] = (13));

} else {
var statearr_41508_41550 = state_41482__$1;
(statearr_41508_41550[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (12))){
var inst_41410 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41509_41551 = state_41482__$1;
(statearr_41509_41551[(2)] = inst_41410);

(statearr_41509_41551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (2))){
var inst_41397 = (state_41482[(10)]);
var inst_41397__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41482__$1 = (function (){var statearr_41510 = state_41482;
(statearr_41510[(10)] = inst_41397__$1);

return statearr_41510;
})();
if(cljs.core.truth_(inst_41397__$1)){
var statearr_41511_41552 = state_41482__$1;
(statearr_41511_41552[(1)] = (5));

} else {
var statearr_41512_41553 = state_41482__$1;
(statearr_41512_41553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (23))){
var inst_41440 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41440)){
var statearr_41513_41554 = state_41482__$1;
(statearr_41513_41554[(1)] = (25));

} else {
var statearr_41514_41555 = state_41482__$1;
(statearr_41514_41555[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (35))){
var state_41482__$1 = state_41482;
var statearr_41515_41556 = state_41482__$1;
(statearr_41515_41556[(2)] = null);

(statearr_41515_41556[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (19))){
var inst_41435 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41435)){
var statearr_41516_41557 = state_41482__$1;
(statearr_41516_41557[(1)] = (22));

} else {
var statearr_41517_41558 = state_41482__$1;
(statearr_41517_41558[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (11))){
var inst_41406 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41518_41559 = state_41482__$1;
(statearr_41518_41559[(2)] = inst_41406);

(statearr_41518_41559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (9))){
var inst_41408 = figwheel.client.heads_up.clear.call(null);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(12),inst_41408);
} else {
if((state_val_41483 === (5))){
var inst_41399 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41482__$1 = state_41482;
var statearr_41519_41560 = state_41482__$1;
(statearr_41519_41560[(2)] = inst_41399);

(statearr_41519_41560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (14))){
var inst_41426 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41426)){
var statearr_41520_41561 = state_41482__$1;
(statearr_41520_41561[(1)] = (18));

} else {
var statearr_41521_41562 = state_41482__$1;
(statearr_41521_41562[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (26))){
var inst_41452 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41482__$1 = state_41482;
if(cljs.core.truth_(inst_41452)){
var statearr_41522_41563 = state_41482__$1;
(statearr_41522_41563[(1)] = (30));

} else {
var statearr_41523_41564 = state_41482__$1;
(statearr_41523_41564[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (16))){
var inst_41418 = (state_41482[(2)]);
var inst_41419 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41420 = figwheel.client.heads_up.display_exception.call(null,inst_41419);
var state_41482__$1 = (function (){var statearr_41524 = state_41482;
(statearr_41524[(13)] = inst_41418);

return statearr_41524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(17),inst_41420);
} else {
if((state_val_41483 === (30))){
var inst_41454 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41455 = figwheel.client.heads_up.display_warning.call(null,inst_41454);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(33),inst_41455);
} else {
if((state_val_41483 === (10))){
var inst_41412 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41525_41565 = state_41482__$1;
(statearr_41525_41565[(2)] = inst_41412);

(statearr_41525_41565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (18))){
var inst_41428 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41429 = figwheel.client.heads_up.display_exception.call(null,inst_41428);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(21),inst_41429);
} else {
if((state_val_41483 === (37))){
var inst_41465 = (state_41482[(2)]);
var state_41482__$1 = state_41482;
var statearr_41526_41566 = state_41482__$1;
(statearr_41526_41566[(2)] = inst_41465);

(statearr_41526_41566[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41483 === (8))){
var inst_41404 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41482__$1 = state_41482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41482__$1,(11),inst_41404);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__41139__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41116__auto__,c__41139__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____0 = (function (){
var statearr_41527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41527[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__);

(statearr_41527[(1)] = (1));

return statearr_41527;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____1 = (function (state_41482){
while(true){
var ret_value__41118__auto__ = (function (){try{while(true){
var result__41119__auto__ = switch__41116__auto__.call(null,state_41482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41119__auto__;
}
break;
}
}catch (e41528){if((e41528 instanceof Object)){
var ex__41120__auto__ = e41528;
var statearr_41529_41567 = state_41482;
(statearr_41529_41567[(5)] = ex__41120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41568 = state_41482;
state_41482 = G__41568;
continue;
} else {
return ret_value__41118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__ = function(state_41482){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____1.call(this,state_41482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41117__auto__;
})()
;})(switch__41116__auto__,c__41139__auto__,msg_hist,msg_names,msg))
})();
var state__41141__auto__ = (function (){var statearr_41530 = f__41140__auto__.call(null);
(statearr_41530[(6)] = c__41139__auto__);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41141__auto__);
});})(c__41139__auto__,msg_hist,msg_names,msg))
);

return c__41139__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41139__auto___41597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41139__auto___41597,ch){
return (function (){
var f__41140__auto__ = (function (){var switch__41116__auto__ = ((function (c__41139__auto___41597,ch){
return (function (state_41583){
var state_val_41584 = (state_41583[(1)]);
if((state_val_41584 === (1))){
var state_41583__$1 = state_41583;
var statearr_41585_41598 = state_41583__$1;
(statearr_41585_41598[(2)] = null);

(statearr_41585_41598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (2))){
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41583__$1,(4),ch);
} else {
if((state_val_41584 === (3))){
var inst_41581 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41583__$1,inst_41581);
} else {
if((state_val_41584 === (4))){
var inst_41571 = (state_41583[(7)]);
var inst_41571__$1 = (state_41583[(2)]);
var state_41583__$1 = (function (){var statearr_41586 = state_41583;
(statearr_41586[(7)] = inst_41571__$1);

return statearr_41586;
})();
if(cljs.core.truth_(inst_41571__$1)){
var statearr_41587_41599 = state_41583__$1;
(statearr_41587_41599[(1)] = (5));

} else {
var statearr_41588_41600 = state_41583__$1;
(statearr_41588_41600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (5))){
var inst_41571 = (state_41583[(7)]);
var inst_41573 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41571);
var state_41583__$1 = state_41583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41583__$1,(8),inst_41573);
} else {
if((state_val_41584 === (6))){
var state_41583__$1 = state_41583;
var statearr_41589_41601 = state_41583__$1;
(statearr_41589_41601[(2)] = null);

(statearr_41589_41601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (7))){
var inst_41579 = (state_41583[(2)]);
var state_41583__$1 = state_41583;
var statearr_41590_41602 = state_41583__$1;
(statearr_41590_41602[(2)] = inst_41579);

(statearr_41590_41602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41584 === (8))){
var inst_41575 = (state_41583[(2)]);
var state_41583__$1 = (function (){var statearr_41591 = state_41583;
(statearr_41591[(8)] = inst_41575);

return statearr_41591;
})();
var statearr_41592_41603 = state_41583__$1;
(statearr_41592_41603[(2)] = null);

(statearr_41592_41603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__41139__auto___41597,ch))
;
return ((function (switch__41116__auto__,c__41139__auto___41597,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41117__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41117__auto____0 = (function (){
var statearr_41593 = [null,null,null,null,null,null,null,null,null];
(statearr_41593[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41117__auto__);

(statearr_41593[(1)] = (1));

return statearr_41593;
});
var figwheel$client$heads_up_plugin_$_state_machine__41117__auto____1 = (function (state_41583){
while(true){
var ret_value__41118__auto__ = (function (){try{while(true){
var result__41119__auto__ = switch__41116__auto__.call(null,state_41583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41119__auto__;
}
break;
}
}catch (e41594){if((e41594 instanceof Object)){
var ex__41120__auto__ = e41594;
var statearr_41595_41604 = state_41583;
(statearr_41595_41604[(5)] = ex__41120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41605 = state_41583;
state_41583 = G__41605;
continue;
} else {
return ret_value__41118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41117__auto__ = function(state_41583){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41117__auto____1.call(this,state_41583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41117__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41117__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41117__auto__;
})()
;})(switch__41116__auto__,c__41139__auto___41597,ch))
})();
var state__41141__auto__ = (function (){var statearr_41596 = f__41140__auto__.call(null);
(statearr_41596[(6)] = c__41139__auto___41597);

return statearr_41596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41141__auto__);
});})(c__41139__auto___41597,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41139__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41139__auto__){
return (function (){
var f__41140__auto__ = (function (){var switch__41116__auto__ = ((function (c__41139__auto__){
return (function (state_41611){
var state_val_41612 = (state_41611[(1)]);
if((state_val_41612 === (1))){
var inst_41606 = cljs.core.async.timeout.call(null,(3000));
var state_41611__$1 = state_41611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41611__$1,(2),inst_41606);
} else {
if((state_val_41612 === (2))){
var inst_41608 = (state_41611[(2)]);
var inst_41609 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41611__$1 = (function (){var statearr_41613 = state_41611;
(statearr_41613[(7)] = inst_41608);

return statearr_41613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41611__$1,inst_41609);
} else {
return null;
}
}
});})(c__41139__auto__))
;
return ((function (switch__41116__auto__,c__41139__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____0 = (function (){
var statearr_41614 = [null,null,null,null,null,null,null,null];
(statearr_41614[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__);

(statearr_41614[(1)] = (1));

return statearr_41614;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____1 = (function (state_41611){
while(true){
var ret_value__41118__auto__ = (function (){try{while(true){
var result__41119__auto__ = switch__41116__auto__.call(null,state_41611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41119__auto__;
}
break;
}
}catch (e41615){if((e41615 instanceof Object)){
var ex__41120__auto__ = e41615;
var statearr_41616_41618 = state_41611;
(statearr_41616_41618[(5)] = ex__41120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41619 = state_41611;
state_41611 = G__41619;
continue;
} else {
return ret_value__41118__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__ = function(state_41611){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____1.call(this,state_41611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41117__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41117__auto__;
})()
;})(switch__41116__auto__,c__41139__auto__))
})();
var state__41141__auto__ = (function (){var statearr_41617 = f__41140__auto__.call(null);
(statearr_41617[(6)] = c__41139__auto__);

return statearr_41617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41141__auto__);
});})(c__41139__auto__))
);

return c__41139__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__41139__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41139__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__41140__auto__ = (function (){var switch__41116__auto__ = ((function (c__41139__auto__,figwheel_version,temp__5457__auto__){
return (function (state_41626){
var state_val_41627 = (state_41626[(1)]);
if((state_val_41627 === (1))){
var inst_41620 = cljs.core.async.timeout.call(null,(2000));
var state_41626__$1 = state_41626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41626__$1,(2),inst_41620);
} else {
if((state_val_41627 === (2))){
var inst_41622 = (state_41626[(2)]);
var inst_41623 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41624 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41623);
var state_41626__$1 = (function (){var statearr_41628 = state_41626;
(statearr_41628[(7)] = inst_41622);

return statearr_41628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41626__$1,inst_41624);
} else {
return null;
}
}
});})(c__41139__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__41116__auto__,c__41139__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____0 = (function (){
var statearr_41629 = [null,null,null,null,null,null,null,null];
(statearr_41629[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__);

(statearr_41629[(1)] = (1));

return statearr_41629;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____1 = (function (state_41626){
while(true){
var ret_value__41118__auto__ = (function (){try{while(true){
var result__41119__auto__ = switch__41116__auto__.call(null,state_41626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41119__auto__;
}
break;
}
}catch (e41630){if((e41630 instanceof Object)){
var ex__41120__auto__ = e41630;
var statearr_41631_41633 = state_41626;
(statearr_41631_41633[(5)] = ex__41120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41634 = state_41626;
state_41626 = G__41634;
continue;
} else {
return ret_value__41118__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__ = function(state_41626){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____1.call(this,state_41626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__41117__auto__;
})()
;})(switch__41116__auto__,c__41139__auto__,figwheel_version,temp__5457__auto__))
})();
var state__41141__auto__ = (function (){var statearr_41632 = f__41140__auto__.call(null);
(statearr_41632[(6)] = c__41139__auto__);

return statearr_41632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41141__auto__);
});})(c__41139__auto__,figwheel_version,temp__5457__auto__))
);

return c__41139__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41635){
var map__41636 = p__41635;
var map__41636__$1 = ((((!((map__41636 == null)))?((((map__41636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41636):map__41636);
var file = cljs.core.get.call(null,map__41636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41638 = "";
var G__41638__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41638),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41638);
var G__41638__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41638__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41638__$1);
if(cljs.core.truth_((function (){var and__30182__auto__ = line;
if(cljs.core.truth_(and__30182__auto__)){
return column;
} else {
return and__30182__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41638__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41638__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41639){
var map__41640 = p__41639;
var map__41640__$1 = ((((!((map__41640 == null)))?((((map__41640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41640):map__41640);
var ed = map__41640__$1;
var formatted_exception = cljs.core.get.call(null,map__41640__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41640__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41640__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41642_41646 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41643_41647 = null;
var count__41644_41648 = (0);
var i__41645_41649 = (0);
while(true){
if((i__41645_41649 < count__41644_41648)){
var msg_41650 = cljs.core._nth.call(null,chunk__41643_41647,i__41645_41649);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41650);

var G__41651 = seq__41642_41646;
var G__41652 = chunk__41643_41647;
var G__41653 = count__41644_41648;
var G__41654 = (i__41645_41649 + (1));
seq__41642_41646 = G__41651;
chunk__41643_41647 = G__41652;
count__41644_41648 = G__41653;
i__41645_41649 = G__41654;
continue;
} else {
var temp__5457__auto___41655 = cljs.core.seq.call(null,seq__41642_41646);
if(temp__5457__auto___41655){
var seq__41642_41656__$1 = temp__5457__auto___41655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41642_41656__$1)){
var c__31125__auto___41657 = cljs.core.chunk_first.call(null,seq__41642_41656__$1);
var G__41658 = cljs.core.chunk_rest.call(null,seq__41642_41656__$1);
var G__41659 = c__31125__auto___41657;
var G__41660 = cljs.core.count.call(null,c__31125__auto___41657);
var G__41661 = (0);
seq__41642_41646 = G__41658;
chunk__41643_41647 = G__41659;
count__41644_41648 = G__41660;
i__41645_41649 = G__41661;
continue;
} else {
var msg_41662 = cljs.core.first.call(null,seq__41642_41656__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41662);

var G__41663 = cljs.core.next.call(null,seq__41642_41656__$1);
var G__41664 = null;
var G__41665 = (0);
var G__41666 = (0);
seq__41642_41646 = G__41663;
chunk__41643_41647 = G__41664;
count__41644_41648 = G__41665;
i__41645_41649 = G__41666;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41667){
var map__41668 = p__41667;
var map__41668__$1 = ((((!((map__41668 == null)))?((((map__41668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41668):map__41668);
var w = map__41668__$1;
var message = cljs.core.get.call(null,map__41668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"../../plugin/iframe_root/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"../../plugin/iframe_root/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30182__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30182__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30182__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41670 = cljs.core.seq.call(null,plugins);
var chunk__41671 = null;
var count__41672 = (0);
var i__41673 = (0);
while(true){
if((i__41673 < count__41672)){
var vec__41674 = cljs.core._nth.call(null,chunk__41671,i__41673);
var k = cljs.core.nth.call(null,vec__41674,(0),null);
var plugin = cljs.core.nth.call(null,vec__41674,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41680 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41670,chunk__41671,count__41672,i__41673,pl_41680,vec__41674,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41680.call(null,msg_hist);
});})(seq__41670,chunk__41671,count__41672,i__41673,pl_41680,vec__41674,k,plugin))
);
} else {
}

var G__41681 = seq__41670;
var G__41682 = chunk__41671;
var G__41683 = count__41672;
var G__41684 = (i__41673 + (1));
seq__41670 = G__41681;
chunk__41671 = G__41682;
count__41672 = G__41683;
i__41673 = G__41684;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41670);
if(temp__5457__auto__){
var seq__41670__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41670__$1)){
var c__31125__auto__ = cljs.core.chunk_first.call(null,seq__41670__$1);
var G__41685 = cljs.core.chunk_rest.call(null,seq__41670__$1);
var G__41686 = c__31125__auto__;
var G__41687 = cljs.core.count.call(null,c__31125__auto__);
var G__41688 = (0);
seq__41670 = G__41685;
chunk__41671 = G__41686;
count__41672 = G__41687;
i__41673 = G__41688;
continue;
} else {
var vec__41677 = cljs.core.first.call(null,seq__41670__$1);
var k = cljs.core.nth.call(null,vec__41677,(0),null);
var plugin = cljs.core.nth.call(null,vec__41677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41689 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41670,chunk__41671,count__41672,i__41673,pl_41689,vec__41677,k,plugin,seq__41670__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41689.call(null,msg_hist);
});})(seq__41670,chunk__41671,count__41672,i__41673,pl_41689,vec__41677,k,plugin,seq__41670__$1,temp__5457__auto__))
);
} else {
}

var G__41690 = cljs.core.next.call(null,seq__41670__$1);
var G__41691 = null;
var G__41692 = (0);
var G__41693 = (0);
seq__41670 = G__41690;
chunk__41671 = G__41691;
count__41672 = G__41692;
i__41673 = G__41693;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41695 = arguments.length;
switch (G__41695) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41696_41701 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41697_41702 = null;
var count__41698_41703 = (0);
var i__41699_41704 = (0);
while(true){
if((i__41699_41704 < count__41698_41703)){
var msg_41705 = cljs.core._nth.call(null,chunk__41697_41702,i__41699_41704);
figwheel.client.socket.handle_incoming_message.call(null,msg_41705);

var G__41706 = seq__41696_41701;
var G__41707 = chunk__41697_41702;
var G__41708 = count__41698_41703;
var G__41709 = (i__41699_41704 + (1));
seq__41696_41701 = G__41706;
chunk__41697_41702 = G__41707;
count__41698_41703 = G__41708;
i__41699_41704 = G__41709;
continue;
} else {
var temp__5457__auto___41710 = cljs.core.seq.call(null,seq__41696_41701);
if(temp__5457__auto___41710){
var seq__41696_41711__$1 = temp__5457__auto___41710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41696_41711__$1)){
var c__31125__auto___41712 = cljs.core.chunk_first.call(null,seq__41696_41711__$1);
var G__41713 = cljs.core.chunk_rest.call(null,seq__41696_41711__$1);
var G__41714 = c__31125__auto___41712;
var G__41715 = cljs.core.count.call(null,c__31125__auto___41712);
var G__41716 = (0);
seq__41696_41701 = G__41713;
chunk__41697_41702 = G__41714;
count__41698_41703 = G__41715;
i__41699_41704 = G__41716;
continue;
} else {
var msg_41717 = cljs.core.first.call(null,seq__41696_41711__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41717);

var G__41718 = cljs.core.next.call(null,seq__41696_41711__$1);
var G__41719 = null;
var G__41720 = (0);
var G__41721 = (0);
seq__41696_41701 = G__41718;
chunk__41697_41702 = G__41719;
count__41698_41703 = G__41720;
i__41699_41704 = G__41721;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31480__auto__ = [];
var len__31473__auto___41726 = arguments.length;
var i__31474__auto___41727 = (0);
while(true){
if((i__31474__auto___41727 < len__31473__auto___41726)){
args__31480__auto__.push((arguments[i__31474__auto___41727]));

var G__41728 = (i__31474__auto___41727 + (1));
i__31474__auto___41727 = G__41728;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41723){
var map__41724 = p__41723;
var map__41724__$1 = ((((!((map__41724 == null)))?((((map__41724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41724):map__41724);
var opts = map__41724__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41722){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41722));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41729){if((e41729 instanceof Error)){
var e = e41729;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41729;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41730){
var map__41731 = p__41730;
var map__41731__$1 = ((((!((map__41731 == null)))?((((map__41731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41731):map__41731);
var msg_name = cljs.core.get.call(null,map__41731__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523223303485
