// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x37454_37455 = value;
x37454_37455.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x37457_37458 = value;
x37457_37458.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x37460_37461 = value;
x37460_37461.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__30182__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__30182__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__31480__auto__ = [];
var len__31473__auto___37468 = arguments.length;
var i__31474__auto___37469 = (0);
while(true){
if((i__31474__auto___37469 < len__31473__auto___37468)){
args__31480__auto__.push((arguments[i__31474__auto___37469]));

var G__37470 = (i__31474__auto___37469 + (1));
i__31474__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__37464_37471 = cljs.core.seq.call(null,items);
var chunk__37465_37472 = null;
var count__37466_37473 = (0);
var i__37467_37474 = (0);
while(true){
if((i__37467_37474 < count__37466_37473)){
var item_37475 = cljs.core._nth.call(null,chunk__37465_37472,i__37467_37474);
if(!((item_37475 == null))){
if(cljs.core.coll_QMARK_.call(null,item_37475)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37475)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37475));
}
} else {
}

var G__37476 = seq__37464_37471;
var G__37477 = chunk__37465_37472;
var G__37478 = count__37466_37473;
var G__37479 = (i__37467_37474 + (1));
seq__37464_37471 = G__37476;
chunk__37465_37472 = G__37477;
count__37466_37473 = G__37478;
i__37467_37474 = G__37479;
continue;
} else {
var temp__5457__auto___37480 = cljs.core.seq.call(null,seq__37464_37471);
if(temp__5457__auto___37480){
var seq__37464_37481__$1 = temp__5457__auto___37480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37464_37481__$1)){
var c__31125__auto___37482 = cljs.core.chunk_first.call(null,seq__37464_37481__$1);
var G__37483 = cljs.core.chunk_rest.call(null,seq__37464_37481__$1);
var G__37484 = c__31125__auto___37482;
var G__37485 = cljs.core.count.call(null,c__31125__auto___37482);
var G__37486 = (0);
seq__37464_37471 = G__37483;
chunk__37465_37472 = G__37484;
count__37466_37473 = G__37485;
i__37467_37474 = G__37486;
continue;
} else {
var item_37487 = cljs.core.first.call(null,seq__37464_37481__$1);
if(!((item_37487 == null))){
if(cljs.core.coll_QMARK_.call(null,item_37487)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_37487)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_37487));
}
} else {
}

var G__37488 = cljs.core.next.call(null,seq__37464_37481__$1);
var G__37489 = null;
var G__37490 = (0);
var G__37491 = (0);
seq__37464_37471 = G__37488;
chunk__37465_37472 = G__37489;
count__37466_37473 = G__37490;
i__37467_37474 = G__37491;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq37463){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37463));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__31480__auto__ = [];
var len__31473__auto___37499 = arguments.length;
var i__31474__auto___37500 = (0);
while(true){
if((i__31474__auto___37500 < len__31473__auto___37499)){
args__31480__auto__.push((arguments[i__31474__auto___37500]));

var G__37501 = (i__31474__auto___37500 + (1));
i__31474__auto___37500 = G__37501;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((2) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31481__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__37495_37502 = cljs.core.seq.call(null,children);
var chunk__37496_37503 = null;
var count__37497_37504 = (0);
var i__37498_37505 = (0);
while(true){
if((i__37498_37505 < count__37497_37504)){
var child_37506 = cljs.core._nth.call(null,chunk__37496_37503,i__37498_37505);
if(!((child_37506 == null))){
if(cljs.core.coll_QMARK_.call(null,child_37506)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37506))));
} else {
var temp__5455__auto___37507 = devtools.formatters.helpers.pref.call(null,child_37506);
if(cljs.core.truth_(temp__5455__auto___37507)){
var child_value_37508 = temp__5455__auto___37507;
template.push(child_value_37508);
} else {
}
}
} else {
}

var G__37509 = seq__37495_37502;
var G__37510 = chunk__37496_37503;
var G__37511 = count__37497_37504;
var G__37512 = (i__37498_37505 + (1));
seq__37495_37502 = G__37509;
chunk__37496_37503 = G__37510;
count__37497_37504 = G__37511;
i__37498_37505 = G__37512;
continue;
} else {
var temp__5457__auto___37513 = cljs.core.seq.call(null,seq__37495_37502);
if(temp__5457__auto___37513){
var seq__37495_37514__$1 = temp__5457__auto___37513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37495_37514__$1)){
var c__31125__auto___37515 = cljs.core.chunk_first.call(null,seq__37495_37514__$1);
var G__37516 = cljs.core.chunk_rest.call(null,seq__37495_37514__$1);
var G__37517 = c__31125__auto___37515;
var G__37518 = cljs.core.count.call(null,c__31125__auto___37515);
var G__37519 = (0);
seq__37495_37502 = G__37516;
chunk__37496_37503 = G__37517;
count__37497_37504 = G__37518;
i__37498_37505 = G__37519;
continue;
} else {
var child_37520 = cljs.core.first.call(null,seq__37495_37514__$1);
if(!((child_37520 == null))){
if(cljs.core.coll_QMARK_.call(null,child_37520)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_37520))));
} else {
var temp__5455__auto___37521 = devtools.formatters.helpers.pref.call(null,child_37520);
if(cljs.core.truth_(temp__5455__auto___37521)){
var child_value_37522 = temp__5455__auto___37521;
template.push(child_value_37522);
} else {
}
}
} else {
}

var G__37523 = cljs.core.next.call(null,seq__37495_37514__$1);
var G__37524 = null;
var G__37525 = (0);
var G__37526 = (0);
seq__37495_37502 = G__37523;
chunk__37496_37503 = G__37524;
count__37497_37504 = G__37525;
i__37498_37505 = G__37526;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq37492){
var G__37493 = cljs.core.first.call(null,seq37492);
var seq37492__$1 = cljs.core.next.call(null,seq37492);
var G__37494 = cljs.core.first.call(null,seq37492__$1);
var seq37492__$2 = cljs.core.next.call(null,seq37492__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__37493,G__37494,seq37492__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___37529 = arguments.length;
var i__31474__auto___37530 = (0);
while(true){
if((i__31474__auto___37530 < len__31473__auto___37529)){
args__31480__auto__.push((arguments[i__31474__auto___37530]));

var G__37531 = (i__31474__auto___37530 + (1));
i__31474__auto___37530 = G__37531;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq37527){
var G__37528 = cljs.core.first.call(null,seq37527);
var seq37527__$1 = cljs.core.next.call(null,seq37527);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37528,seq37527__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___37534 = arguments.length;
var i__31474__auto___37535 = (0);
while(true){
if((i__31474__auto___37535 < len__31473__auto___37534)){
args__31480__auto__.push((arguments[i__31474__auto___37535]));

var G__37536 = (i__31474__auto___37535 + (1));
i__31474__auto___37535 = G__37536;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq37532){
var G__37533 = cljs.core.first.call(null,seq37532);
var seq37532__$1 = cljs.core.next.call(null,seq37532);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37533,seq37532__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__37538 = arguments.length;
switch (G__37538) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj37540 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__30194__auto__ = start_index;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return (0);
}
})()};
return obj37540;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__31480__auto__ = [];
var len__31473__auto___37548 = arguments.length;
var i__31474__auto___37549 = (0);
while(true){
if((i__31474__auto___37549 < len__31473__auto___37548)){
args__31480__auto__.push((arguments[i__31474__auto___37549]));

var G__37550 = (i__31474__auto___37549 + (1));
i__31474__auto___37549 = G__37550;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37544){
var vec__37545 = p__37544;
var state_override_fn = cljs.core.nth.call(null,vec__37545,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq37542){
var G__37543 = cljs.core.first.call(null,seq37542);
var seq37542__$1 = cljs.core.next.call(null,seq37542);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__37543,seq37542__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_37551 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_37551;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__37552 = name;
switch (G__37552) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__37554 = tag;
var html_tag = cljs.core.nth.call(null,vec__37554,(0),null);
var style = cljs.core.nth.call(null,vec__37554,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_37557 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_37557;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_37558 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_37559 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_37559;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_37558;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__37560 = initial_value;
var G__37561 = value.call(null);
initial_value = G__37560;
value = G__37561;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__37562 = initial_value;
var G__37563 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__37562;
value = G__37563;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__37564 = initial_value;
var G__37565 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__37564;
value = G__37565;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1523222480998
