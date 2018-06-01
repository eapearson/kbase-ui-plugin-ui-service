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
}catch (e43945){if((e43945 instanceof Error)){
var e = e43945;
return "Error: Unable to stringify";
} else {
throw e43945;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43948 = arguments.length;
switch (G__43948) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43946_SHARP_){
if(typeof p1__43946_SHARP_ === 'string'){
return p1__43946_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43946_SHARP_);
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
var args__31481__auto__ = [];
var len__31474__auto___43951 = arguments.length;
var i__31475__auto___43952 = (0);
while(true){
if((i__31475__auto___43952 < len__31474__auto___43951)){
args__31481__auto__.push((arguments[i__31475__auto___43952]));

var G__43953 = (i__31475__auto___43952 + (1));
i__31475__auto___43952 = G__43953;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43950){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43950));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31481__auto__ = [];
var len__31474__auto___43955 = arguments.length;
var i__31475__auto___43956 = (0);
while(true){
if((i__31475__auto___43956 < len__31474__auto___43955)){
args__31481__auto__.push((arguments[i__31475__auto___43956]));

var G__43957 = (i__31475__auto___43956 + (1));
i__31475__auto___43956 = G__43957;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43954){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43954));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43958){
var map__43959 = p__43958;
var map__43959__$1 = ((((!((map__43959 == null)))?((((map__43959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43959):map__43959);
var message = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43959__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__39775__auto___44038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___44038,ch){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___44038,ch){
return (function (state_44010){
var state_val_44011 = (state_44010[(1)]);
if((state_val_44011 === (7))){
var inst_44006 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44012_44039 = state_44010__$1;
(statearr_44012_44039[(2)] = inst_44006);

(statearr_44012_44039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (1))){
var state_44010__$1 = state_44010;
var statearr_44013_44040 = state_44010__$1;
(statearr_44013_44040[(2)] = null);

(statearr_44013_44040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (4))){
var inst_43963 = (state_44010[(7)]);
var inst_43963__$1 = (state_44010[(2)]);
var state_44010__$1 = (function (){var statearr_44014 = state_44010;
(statearr_44014[(7)] = inst_43963__$1);

return statearr_44014;
})();
if(cljs.core.truth_(inst_43963__$1)){
var statearr_44015_44041 = state_44010__$1;
(statearr_44015_44041[(1)] = (5));

} else {
var statearr_44016_44042 = state_44010__$1;
(statearr_44016_44042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (15))){
var inst_43970 = (state_44010[(8)]);
var inst_43985 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43970);
var inst_43986 = cljs.core.first.call(null,inst_43985);
var inst_43987 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43986);
var inst_43988 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43987)].join('');
var inst_43989 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43988);
var state_44010__$1 = state_44010;
var statearr_44017_44043 = state_44010__$1;
(statearr_44017_44043[(2)] = inst_43989);

(statearr_44017_44043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (13))){
var inst_43994 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44018_44044 = state_44010__$1;
(statearr_44018_44044[(2)] = inst_43994);

(statearr_44018_44044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (6))){
var state_44010__$1 = state_44010;
var statearr_44019_44045 = state_44010__$1;
(statearr_44019_44045[(2)] = null);

(statearr_44019_44045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (17))){
var inst_43992 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44020_44046 = state_44010__$1;
(statearr_44020_44046[(2)] = inst_43992);

(statearr_44020_44046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (3))){
var inst_44008 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44010__$1,inst_44008);
} else {
if((state_val_44011 === (12))){
var inst_43969 = (state_44010[(9)]);
var inst_43983 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43969,opts);
var state_44010__$1 = state_44010;
if(cljs.core.truth_(inst_43983)){
var statearr_44021_44047 = state_44010__$1;
(statearr_44021_44047[(1)] = (15));

} else {
var statearr_44022_44048 = state_44010__$1;
(statearr_44022_44048[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (2))){
var state_44010__$1 = state_44010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44010__$1,(4),ch);
} else {
if((state_val_44011 === (11))){
var inst_43970 = (state_44010[(8)]);
var inst_43975 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43976 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43970);
var inst_43977 = cljs.core.async.timeout.call(null,(1000));
var inst_43978 = [inst_43976,inst_43977];
var inst_43979 = (new cljs.core.PersistentVector(null,2,(5),inst_43975,inst_43978,null));
var state_44010__$1 = state_44010;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44010__$1,(14),inst_43979);
} else {
if((state_val_44011 === (9))){
var inst_43970 = (state_44010[(8)]);
var inst_43996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43997 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43970);
var inst_43998 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43997);
var inst_43999 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43998)].join('');
var inst_44000 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43999);
var state_44010__$1 = (function (){var statearr_44023 = state_44010;
(statearr_44023[(10)] = inst_43996);

return statearr_44023;
})();
var statearr_44024_44049 = state_44010__$1;
(statearr_44024_44049[(2)] = inst_44000);

(statearr_44024_44049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (5))){
var inst_43963 = (state_44010[(7)]);
var inst_43965 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43966 = (new cljs.core.PersistentArrayMap(null,2,inst_43965,null));
var inst_43967 = (new cljs.core.PersistentHashSet(null,inst_43966,null));
var inst_43968 = figwheel.client.focus_msgs.call(null,inst_43967,inst_43963);
var inst_43969 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43968);
var inst_43970 = cljs.core.first.call(null,inst_43968);
var inst_43971 = figwheel.client.autoload_QMARK_.call(null);
var state_44010__$1 = (function (){var statearr_44025 = state_44010;
(statearr_44025[(9)] = inst_43969);

(statearr_44025[(8)] = inst_43970);

return statearr_44025;
})();
if(cljs.core.truth_(inst_43971)){
var statearr_44026_44050 = state_44010__$1;
(statearr_44026_44050[(1)] = (8));

} else {
var statearr_44027_44051 = state_44010__$1;
(statearr_44027_44051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (14))){
var inst_43981 = (state_44010[(2)]);
var state_44010__$1 = state_44010;
var statearr_44028_44052 = state_44010__$1;
(statearr_44028_44052[(2)] = inst_43981);

(statearr_44028_44052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (16))){
var state_44010__$1 = state_44010;
var statearr_44029_44053 = state_44010__$1;
(statearr_44029_44053[(2)] = null);

(statearr_44029_44053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (10))){
var inst_44002 = (state_44010[(2)]);
var state_44010__$1 = (function (){var statearr_44030 = state_44010;
(statearr_44030[(11)] = inst_44002);

return statearr_44030;
})();
var statearr_44031_44054 = state_44010__$1;
(statearr_44031_44054[(2)] = null);

(statearr_44031_44054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44011 === (8))){
var inst_43969 = (state_44010[(9)]);
var inst_43973 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43969,opts);
var state_44010__$1 = state_44010;
if(cljs.core.truth_(inst_43973)){
var statearr_44032_44055 = state_44010__$1;
(statearr_44032_44055[(1)] = (11));

} else {
var statearr_44033_44056 = state_44010__$1;
(statearr_44033_44056[(1)] = (12));

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
});})(c__39775__auto___44038,ch))
;
return ((function (switch__39685__auto__,c__39775__auto___44038,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____0 = (function (){
var statearr_44034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44034[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__);

(statearr_44034[(1)] = (1));

return statearr_44034;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____1 = (function (state_44010){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_44010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e44035){if((e44035 instanceof Object)){
var ex__39689__auto__ = e44035;
var statearr_44036_44057 = state_44010;
(statearr_44036_44057[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44058 = state_44010;
state_44010 = G__44058;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__ = function(state_44010){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____1.call(this,state_44010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39686__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___44038,ch))
})();
var state__39777__auto__ = (function (){var statearr_44037 = f__39776__auto__.call(null);
(statearr_44037[(6)] = c__39775__auto___44038);

return statearr_44037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___44038,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44059_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44059_SHARP_));
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
var base_path_44063 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44063){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_44061 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_44062 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_44061,_STAR_print_fn_STAR_44062,sb,base_path_44063){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_44061,_STAR_print_fn_STAR_44062,sb,base_path_44063))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44062;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44061;
}}catch (e44060){if((e44060 instanceof Error)){
var e = e44060;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44063], null));
} else {
var e = e44060;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_44063))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44064){
var map__44065 = p__44064;
var map__44065__$1 = ((((!((map__44065 == null)))?((((map__44065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44065):map__44065);
var opts = map__44065__$1;
var build_id = cljs.core.get.call(null,map__44065__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44065,map__44065__$1,opts,build_id){
return (function (p__44067){
var vec__44068 = p__44067;
var seq__44069 = cljs.core.seq.call(null,vec__44068);
var first__44070 = cljs.core.first.call(null,seq__44069);
var seq__44069__$1 = cljs.core.next.call(null,seq__44069);
var map__44071 = first__44070;
var map__44071__$1 = ((((!((map__44071 == null)))?((((map__44071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44071):map__44071);
var msg = map__44071__$1;
var msg_name = cljs.core.get.call(null,map__44071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44069__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44068,seq__44069,first__44070,seq__44069__$1,map__44071,map__44071__$1,msg,msg_name,_,map__44065,map__44065__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44068,seq__44069,first__44070,seq__44069__$1,map__44071,map__44071__$1,msg,msg_name,_,map__44065,map__44065__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44065,map__44065__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44073){
var vec__44074 = p__44073;
var seq__44075 = cljs.core.seq.call(null,vec__44074);
var first__44076 = cljs.core.first.call(null,seq__44075);
var seq__44075__$1 = cljs.core.next.call(null,seq__44075);
var map__44077 = first__44076;
var map__44077__$1 = ((((!((map__44077 == null)))?((((map__44077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44077):map__44077);
var msg = map__44077__$1;
var msg_name = cljs.core.get.call(null,map__44077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44075__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44079){
var map__44080 = p__44079;
var map__44080__$1 = ((((!((map__44080 == null)))?((((map__44080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44080):map__44080);
var on_compile_warning = cljs.core.get.call(null,map__44080__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44080__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44080,map__44080__$1,on_compile_warning,on_compile_fail){
return (function (p__44082){
var vec__44083 = p__44082;
var seq__44084 = cljs.core.seq.call(null,vec__44083);
var first__44085 = cljs.core.first.call(null,seq__44084);
var seq__44084__$1 = cljs.core.next.call(null,seq__44084);
var map__44086 = first__44085;
var map__44086__$1 = ((((!((map__44086 == null)))?((((map__44086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44086):map__44086);
var msg = map__44086__$1;
var msg_name = cljs.core.get.call(null,map__44086__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44084__$1;
var pred__44088 = cljs.core._EQ_;
var expr__44089 = msg_name;
if(cljs.core.truth_(pred__44088.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44089))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44088.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44089))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44080,map__44080__$1,on_compile_warning,on_compile_fail))
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
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__,msg_hist,msg_names,msg){
return (function (state_44178){
var state_val_44179 = (state_44178[(1)]);
if((state_val_44179 === (7))){
var inst_44098 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44098)){
var statearr_44180_44227 = state_44178__$1;
(statearr_44180_44227[(1)] = (8));

} else {
var statearr_44181_44228 = state_44178__$1;
(statearr_44181_44228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (20))){
var inst_44172 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44182_44229 = state_44178__$1;
(statearr_44182_44229[(2)] = inst_44172);

(statearr_44182_44229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (27))){
var inst_44168 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44183_44230 = state_44178__$1;
(statearr_44183_44230[(2)] = inst_44168);

(statearr_44183_44230[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (1))){
var inst_44091 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44091)){
var statearr_44184_44231 = state_44178__$1;
(statearr_44184_44231[(1)] = (2));

} else {
var statearr_44185_44232 = state_44178__$1;
(statearr_44185_44232[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (24))){
var inst_44170 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44186_44233 = state_44178__$1;
(statearr_44186_44233[(2)] = inst_44170);

(statearr_44186_44233[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (4))){
var inst_44176 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44178__$1,inst_44176);
} else {
if((state_val_44179 === (15))){
var inst_44174 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44187_44234 = state_44178__$1;
(statearr_44187_44234[(2)] = inst_44174);

(statearr_44187_44234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (21))){
var inst_44127 = (state_44178[(2)]);
var inst_44128 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44129 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44128);
var state_44178__$1 = (function (){var statearr_44188 = state_44178;
(statearr_44188[(7)] = inst_44127);

return statearr_44188;
})();
var statearr_44189_44235 = state_44178__$1;
(statearr_44189_44235[(2)] = inst_44129);

(statearr_44189_44235[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (31))){
var inst_44157 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44157)){
var statearr_44190_44236 = state_44178__$1;
(statearr_44190_44236[(1)] = (34));

} else {
var statearr_44191_44237 = state_44178__$1;
(statearr_44191_44237[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (32))){
var inst_44166 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44192_44238 = state_44178__$1;
(statearr_44192_44238[(2)] = inst_44166);

(statearr_44192_44238[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (33))){
var inst_44153 = (state_44178[(2)]);
var inst_44154 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44155 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44154);
var state_44178__$1 = (function (){var statearr_44193 = state_44178;
(statearr_44193[(8)] = inst_44153);

return statearr_44193;
})();
var statearr_44194_44239 = state_44178__$1;
(statearr_44194_44239[(2)] = inst_44155);

(statearr_44194_44239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (13))){
var inst_44112 = figwheel.client.heads_up.clear.call(null);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(16),inst_44112);
} else {
if((state_val_44179 === (22))){
var inst_44133 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44134 = figwheel.client.heads_up.append_warning_message.call(null,inst_44133);
var state_44178__$1 = state_44178;
var statearr_44195_44240 = state_44178__$1;
(statearr_44195_44240[(2)] = inst_44134);

(statearr_44195_44240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (36))){
var inst_44164 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44196_44241 = state_44178__$1;
(statearr_44196_44241[(2)] = inst_44164);

(statearr_44196_44241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (29))){
var inst_44144 = (state_44178[(2)]);
var inst_44145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44146 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44145);
var state_44178__$1 = (function (){var statearr_44197 = state_44178;
(statearr_44197[(9)] = inst_44144);

return statearr_44197;
})();
var statearr_44198_44242 = state_44178__$1;
(statearr_44198_44242[(2)] = inst_44146);

(statearr_44198_44242[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (6))){
var inst_44093 = (state_44178[(10)]);
var state_44178__$1 = state_44178;
var statearr_44199_44243 = state_44178__$1;
(statearr_44199_44243[(2)] = inst_44093);

(statearr_44199_44243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (28))){
var inst_44140 = (state_44178[(2)]);
var inst_44141 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44142 = figwheel.client.heads_up.display_warning.call(null,inst_44141);
var state_44178__$1 = (function (){var statearr_44200 = state_44178;
(statearr_44200[(11)] = inst_44140);

return statearr_44200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(29),inst_44142);
} else {
if((state_val_44179 === (25))){
var inst_44138 = figwheel.client.heads_up.clear.call(null);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(28),inst_44138);
} else {
if((state_val_44179 === (34))){
var inst_44159 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(37),inst_44159);
} else {
if((state_val_44179 === (17))){
var inst_44118 = (state_44178[(2)]);
var inst_44119 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44120 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44119);
var state_44178__$1 = (function (){var statearr_44201 = state_44178;
(statearr_44201[(12)] = inst_44118);

return statearr_44201;
})();
var statearr_44202_44244 = state_44178__$1;
(statearr_44202_44244[(2)] = inst_44120);

(statearr_44202_44244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (3))){
var inst_44110 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44110)){
var statearr_44203_44245 = state_44178__$1;
(statearr_44203_44245[(1)] = (13));

} else {
var statearr_44204_44246 = state_44178__$1;
(statearr_44204_44246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (12))){
var inst_44106 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44205_44247 = state_44178__$1;
(statearr_44205_44247[(2)] = inst_44106);

(statearr_44205_44247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (2))){
var inst_44093 = (state_44178[(10)]);
var inst_44093__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44178__$1 = (function (){var statearr_44206 = state_44178;
(statearr_44206[(10)] = inst_44093__$1);

return statearr_44206;
})();
if(cljs.core.truth_(inst_44093__$1)){
var statearr_44207_44248 = state_44178__$1;
(statearr_44207_44248[(1)] = (5));

} else {
var statearr_44208_44249 = state_44178__$1;
(statearr_44208_44249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (23))){
var inst_44136 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44136)){
var statearr_44209_44250 = state_44178__$1;
(statearr_44209_44250[(1)] = (25));

} else {
var statearr_44210_44251 = state_44178__$1;
(statearr_44210_44251[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (35))){
var state_44178__$1 = state_44178;
var statearr_44211_44252 = state_44178__$1;
(statearr_44211_44252[(2)] = null);

(statearr_44211_44252[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (19))){
var inst_44131 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44131)){
var statearr_44212_44253 = state_44178__$1;
(statearr_44212_44253[(1)] = (22));

} else {
var statearr_44213_44254 = state_44178__$1;
(statearr_44213_44254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (11))){
var inst_44102 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44214_44255 = state_44178__$1;
(statearr_44214_44255[(2)] = inst_44102);

(statearr_44214_44255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (9))){
var inst_44104 = figwheel.client.heads_up.clear.call(null);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(12),inst_44104);
} else {
if((state_val_44179 === (5))){
var inst_44095 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44178__$1 = state_44178;
var statearr_44215_44256 = state_44178__$1;
(statearr_44215_44256[(2)] = inst_44095);

(statearr_44215_44256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (14))){
var inst_44122 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44122)){
var statearr_44216_44257 = state_44178__$1;
(statearr_44216_44257[(1)] = (18));

} else {
var statearr_44217_44258 = state_44178__$1;
(statearr_44217_44258[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (26))){
var inst_44148 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44178__$1 = state_44178;
if(cljs.core.truth_(inst_44148)){
var statearr_44218_44259 = state_44178__$1;
(statearr_44218_44259[(1)] = (30));

} else {
var statearr_44219_44260 = state_44178__$1;
(statearr_44219_44260[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (16))){
var inst_44114 = (state_44178[(2)]);
var inst_44115 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44116 = figwheel.client.heads_up.display_exception.call(null,inst_44115);
var state_44178__$1 = (function (){var statearr_44220 = state_44178;
(statearr_44220[(13)] = inst_44114);

return statearr_44220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(17),inst_44116);
} else {
if((state_val_44179 === (30))){
var inst_44150 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44151 = figwheel.client.heads_up.display_warning.call(null,inst_44150);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(33),inst_44151);
} else {
if((state_val_44179 === (10))){
var inst_44108 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44221_44261 = state_44178__$1;
(statearr_44221_44261[(2)] = inst_44108);

(statearr_44221_44261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (18))){
var inst_44124 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44125 = figwheel.client.heads_up.display_exception.call(null,inst_44124);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(21),inst_44125);
} else {
if((state_val_44179 === (37))){
var inst_44161 = (state_44178[(2)]);
var state_44178__$1 = state_44178;
var statearr_44222_44262 = state_44178__$1;
(statearr_44222_44262[(2)] = inst_44161);

(statearr_44222_44262[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44179 === (8))){
var inst_44100 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44178__$1 = state_44178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44178__$1,(11),inst_44100);
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
});})(c__39775__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39685__auto__,c__39775__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____0 = (function (){
var statearr_44223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44223[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__);

(statearr_44223[(1)] = (1));

return statearr_44223;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____1 = (function (state_44178){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_44178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e44224){if((e44224 instanceof Object)){
var ex__39689__auto__ = e44224;
var statearr_44225_44263 = state_44178;
(statearr_44225_44263[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44264 = state_44178;
state_44178 = G__44264;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__ = function(state_44178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____1.call(this,state_44178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__,msg_hist,msg_names,msg))
})();
var state__39777__auto__ = (function (){var statearr_44226 = f__39776__auto__.call(null);
(statearr_44226[(6)] = c__39775__auto__);

return statearr_44226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__,msg_hist,msg_names,msg))
);

return c__39775__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39775__auto___44293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___44293,ch){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___44293,ch){
return (function (state_44279){
var state_val_44280 = (state_44279[(1)]);
if((state_val_44280 === (1))){
var state_44279__$1 = state_44279;
var statearr_44281_44294 = state_44279__$1;
(statearr_44281_44294[(2)] = null);

(statearr_44281_44294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (2))){
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44279__$1,(4),ch);
} else {
if((state_val_44280 === (3))){
var inst_44277 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44279__$1,inst_44277);
} else {
if((state_val_44280 === (4))){
var inst_44267 = (state_44279[(7)]);
var inst_44267__$1 = (state_44279[(2)]);
var state_44279__$1 = (function (){var statearr_44282 = state_44279;
(statearr_44282[(7)] = inst_44267__$1);

return statearr_44282;
})();
if(cljs.core.truth_(inst_44267__$1)){
var statearr_44283_44295 = state_44279__$1;
(statearr_44283_44295[(1)] = (5));

} else {
var statearr_44284_44296 = state_44279__$1;
(statearr_44284_44296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (5))){
var inst_44267 = (state_44279[(7)]);
var inst_44269 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44267);
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44279__$1,(8),inst_44269);
} else {
if((state_val_44280 === (6))){
var state_44279__$1 = state_44279;
var statearr_44285_44297 = state_44279__$1;
(statearr_44285_44297[(2)] = null);

(statearr_44285_44297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (7))){
var inst_44275 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
var statearr_44286_44298 = state_44279__$1;
(statearr_44286_44298[(2)] = inst_44275);

(statearr_44286_44298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (8))){
var inst_44271 = (state_44279[(2)]);
var state_44279__$1 = (function (){var statearr_44287 = state_44279;
(statearr_44287[(8)] = inst_44271);

return statearr_44287;
})();
var statearr_44288_44299 = state_44279__$1;
(statearr_44288_44299[(2)] = null);

(statearr_44288_44299[(1)] = (2));


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
});})(c__39775__auto___44293,ch))
;
return ((function (switch__39685__auto__,c__39775__auto___44293,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39686__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39686__auto____0 = (function (){
var statearr_44289 = [null,null,null,null,null,null,null,null,null];
(statearr_44289[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39686__auto__);

(statearr_44289[(1)] = (1));

return statearr_44289;
});
var figwheel$client$heads_up_plugin_$_state_machine__39686__auto____1 = (function (state_44279){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_44279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e44290){if((e44290 instanceof Object)){
var ex__39689__auto__ = e44290;
var statearr_44291_44300 = state_44279;
(statearr_44291_44300[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44301 = state_44279;
state_44279 = G__44301;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39686__auto__ = function(state_44279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39686__auto____1.call(this,state_44279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39686__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39686__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___44293,ch))
})();
var state__39777__auto__ = (function (){var statearr_44292 = f__39776__auto__.call(null);
(statearr_44292[(6)] = c__39775__auto___44293);

return statearr_44292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___44293,ch))
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
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__){
return (function (state_44307){
var state_val_44308 = (state_44307[(1)]);
if((state_val_44308 === (1))){
var inst_44302 = cljs.core.async.timeout.call(null,(3000));
var state_44307__$1 = state_44307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44307__$1,(2),inst_44302);
} else {
if((state_val_44308 === (2))){
var inst_44304 = (state_44307[(2)]);
var inst_44305 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44307__$1 = (function (){var statearr_44309 = state_44307;
(statearr_44309[(7)] = inst_44304);

return statearr_44309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44307__$1,inst_44305);
} else {
return null;
}
}
});})(c__39775__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____0 = (function (){
var statearr_44310 = [null,null,null,null,null,null,null,null];
(statearr_44310[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__);

(statearr_44310[(1)] = (1));

return statearr_44310;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____1 = (function (state_44307){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_44307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e44311){if((e44311 instanceof Object)){
var ex__39689__auto__ = e44311;
var statearr_44312_44314 = state_44307;
(statearr_44312_44314[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44315 = state_44307;
state_44307 = G__44315;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__ = function(state_44307){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____1.call(this,state_44307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39686__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__))
})();
var state__39777__auto__ = (function (){var statearr_44313 = f__39776__auto__.call(null);
(statearr_44313[(6)] = c__39775__auto__);

return statearr_44313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__))
);

return c__39775__auto__;
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
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__,figwheel_version,temp__5457__auto__){
return (function (state_44322){
var state_val_44323 = (state_44322[(1)]);
if((state_val_44323 === (1))){
var inst_44316 = cljs.core.async.timeout.call(null,(2000));
var state_44322__$1 = state_44322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44322__$1,(2),inst_44316);
} else {
if((state_val_44323 === (2))){
var inst_44318 = (state_44322[(2)]);
var inst_44319 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44320 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44319);
var state_44322__$1 = (function (){var statearr_44324 = state_44322;
(statearr_44324[(7)] = inst_44318);

return statearr_44324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44322__$1,inst_44320);
} else {
return null;
}
}
});})(c__39775__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____0 = (function (){
var statearr_44325 = [null,null,null,null,null,null,null,null];
(statearr_44325[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__);

(statearr_44325[(1)] = (1));

return statearr_44325;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____1 = (function (state_44322){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_44322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e44326){if((e44326 instanceof Object)){
var ex__39689__auto__ = e44326;
var statearr_44327_44329 = state_44322;
(statearr_44327_44329[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44330 = state_44322;
state_44322 = G__44330;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__ = function(state_44322){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____1.call(this,state_44322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__,figwheel_version,temp__5457__auto__))
})();
var state__39777__auto__ = (function (){var statearr_44328 = f__39776__auto__.call(null);
(statearr_44328[(6)] = c__39775__auto__);

return statearr_44328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__,figwheel_version,temp__5457__auto__))
);

return c__39775__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44331){
var map__44332 = p__44331;
var map__44332__$1 = ((((!((map__44332 == null)))?((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44332):map__44332);
var file = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44332__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44334 = "";
var G__44334__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44334),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44334);
var G__44334__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44334__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44334__$1);
if(cljs.core.truth_((function (){var and__30182__auto__ = line;
if(cljs.core.truth_(and__30182__auto__)){
return column;
} else {
return and__30182__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44334__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44334__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44335){
var map__44336 = p__44335;
var map__44336__$1 = ((((!((map__44336 == null)))?((((map__44336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44336):map__44336);
var ed = map__44336__$1;
var formatted_exception = cljs.core.get.call(null,map__44336__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44336__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44336__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44338_44342 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44339_44343 = null;
var count__44340_44344 = (0);
var i__44341_44345 = (0);
while(true){
if((i__44341_44345 < count__44340_44344)){
var msg_44346 = cljs.core._nth.call(null,chunk__44339_44343,i__44341_44345);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44346);

var G__44347 = seq__44338_44342;
var G__44348 = chunk__44339_44343;
var G__44349 = count__44340_44344;
var G__44350 = (i__44341_44345 + (1));
seq__44338_44342 = G__44347;
chunk__44339_44343 = G__44348;
count__44340_44344 = G__44349;
i__44341_44345 = G__44350;
continue;
} else {
var temp__5457__auto___44351 = cljs.core.seq.call(null,seq__44338_44342);
if(temp__5457__auto___44351){
var seq__44338_44352__$1 = temp__5457__auto___44351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44338_44352__$1)){
var c__31126__auto___44353 = cljs.core.chunk_first.call(null,seq__44338_44352__$1);
var G__44354 = cljs.core.chunk_rest.call(null,seq__44338_44352__$1);
var G__44355 = c__31126__auto___44353;
var G__44356 = cljs.core.count.call(null,c__31126__auto___44353);
var G__44357 = (0);
seq__44338_44342 = G__44354;
chunk__44339_44343 = G__44355;
count__44340_44344 = G__44356;
i__44341_44345 = G__44357;
continue;
} else {
var msg_44358 = cljs.core.first.call(null,seq__44338_44352__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44358);

var G__44359 = cljs.core.next.call(null,seq__44338_44352__$1);
var G__44360 = null;
var G__44361 = (0);
var G__44362 = (0);
seq__44338_44342 = G__44359;
chunk__44339_44343 = G__44360;
count__44340_44344 = G__44361;
i__44341_44345 = G__44362;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44363){
var map__44364 = p__44363;
var map__44364__$1 = ((((!((map__44364 == null)))?((((map__44364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44364):map__44364);
var w = map__44364__$1;
var message = cljs.core.get.call(null,map__44364__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__44366 = cljs.core.seq.call(null,plugins);
var chunk__44367 = null;
var count__44368 = (0);
var i__44369 = (0);
while(true){
if((i__44369 < count__44368)){
var vec__44370 = cljs.core._nth.call(null,chunk__44367,i__44369);
var k = cljs.core.nth.call(null,vec__44370,(0),null);
var plugin = cljs.core.nth.call(null,vec__44370,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44376 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44366,chunk__44367,count__44368,i__44369,pl_44376,vec__44370,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44376.call(null,msg_hist);
});})(seq__44366,chunk__44367,count__44368,i__44369,pl_44376,vec__44370,k,plugin))
);
} else {
}

var G__44377 = seq__44366;
var G__44378 = chunk__44367;
var G__44379 = count__44368;
var G__44380 = (i__44369 + (1));
seq__44366 = G__44377;
chunk__44367 = G__44378;
count__44368 = G__44379;
i__44369 = G__44380;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44366);
if(temp__5457__auto__){
var seq__44366__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44366__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__44366__$1);
var G__44381 = cljs.core.chunk_rest.call(null,seq__44366__$1);
var G__44382 = c__31126__auto__;
var G__44383 = cljs.core.count.call(null,c__31126__auto__);
var G__44384 = (0);
seq__44366 = G__44381;
chunk__44367 = G__44382;
count__44368 = G__44383;
i__44369 = G__44384;
continue;
} else {
var vec__44373 = cljs.core.first.call(null,seq__44366__$1);
var k = cljs.core.nth.call(null,vec__44373,(0),null);
var plugin = cljs.core.nth.call(null,vec__44373,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44385 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44366,chunk__44367,count__44368,i__44369,pl_44385,vec__44373,k,plugin,seq__44366__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44385.call(null,msg_hist);
});})(seq__44366,chunk__44367,count__44368,i__44369,pl_44385,vec__44373,k,plugin,seq__44366__$1,temp__5457__auto__))
);
} else {
}

var G__44386 = cljs.core.next.call(null,seq__44366__$1);
var G__44387 = null;
var G__44388 = (0);
var G__44389 = (0);
seq__44366 = G__44386;
chunk__44367 = G__44387;
count__44368 = G__44388;
i__44369 = G__44389;
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
var G__44391 = arguments.length;
switch (G__44391) {
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

var seq__44392_44397 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44393_44398 = null;
var count__44394_44399 = (0);
var i__44395_44400 = (0);
while(true){
if((i__44395_44400 < count__44394_44399)){
var msg_44401 = cljs.core._nth.call(null,chunk__44393_44398,i__44395_44400);
figwheel.client.socket.handle_incoming_message.call(null,msg_44401);

var G__44402 = seq__44392_44397;
var G__44403 = chunk__44393_44398;
var G__44404 = count__44394_44399;
var G__44405 = (i__44395_44400 + (1));
seq__44392_44397 = G__44402;
chunk__44393_44398 = G__44403;
count__44394_44399 = G__44404;
i__44395_44400 = G__44405;
continue;
} else {
var temp__5457__auto___44406 = cljs.core.seq.call(null,seq__44392_44397);
if(temp__5457__auto___44406){
var seq__44392_44407__$1 = temp__5457__auto___44406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44392_44407__$1)){
var c__31126__auto___44408 = cljs.core.chunk_first.call(null,seq__44392_44407__$1);
var G__44409 = cljs.core.chunk_rest.call(null,seq__44392_44407__$1);
var G__44410 = c__31126__auto___44408;
var G__44411 = cljs.core.count.call(null,c__31126__auto___44408);
var G__44412 = (0);
seq__44392_44397 = G__44409;
chunk__44393_44398 = G__44410;
count__44394_44399 = G__44411;
i__44395_44400 = G__44412;
continue;
} else {
var msg_44413 = cljs.core.first.call(null,seq__44392_44407__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44413);

var G__44414 = cljs.core.next.call(null,seq__44392_44407__$1);
var G__44415 = null;
var G__44416 = (0);
var G__44417 = (0);
seq__44392_44397 = G__44414;
chunk__44393_44398 = G__44415;
count__44394_44399 = G__44416;
i__44395_44400 = G__44417;
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
var args__31481__auto__ = [];
var len__31474__auto___44422 = arguments.length;
var i__31475__auto___44423 = (0);
while(true){
if((i__31475__auto___44423 < len__31474__auto___44422)){
args__31481__auto__.push((arguments[i__31475__auto___44423]));

var G__44424 = (i__31475__auto___44423 + (1));
i__31475__auto___44423 = G__44424;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44419){
var map__44420 = p__44419;
var map__44420__$1 = ((((!((map__44420 == null)))?((((map__44420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44420):map__44420);
var opts = map__44420__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44418){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44418));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44425){if((e44425 instanceof Error)){
var e = e44425;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44425;

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
return (function (p__44426){
var map__44427 = p__44426;
var map__44427__$1 = ((((!((map__44427 == null)))?((((map__44427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44427):map__44427);
var msg_name = cljs.core.get.call(null,map__44427__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521387317975
