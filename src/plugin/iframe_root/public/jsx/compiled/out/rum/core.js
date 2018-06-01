// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__34882 = cljs.core.seq.call(null,props);
var chunk__34884 = null;
var count__34885 = (0);
var i__34886 = (0);
while(true){
if((i__34886 < count__34885)){
var vec__34888 = cljs.core._nth.call(null,chunk__34884,i__34886);
var k = cljs.core.nth.call(null,vec__34888,(0),null);
var v = cljs.core.nth.call(null,vec__34888,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34894 = seq__34882;
var G__34895 = chunk__34884;
var G__34896 = count__34885;
var G__34897 = (i__34886 + (1));
seq__34882 = G__34894;
chunk__34884 = G__34895;
count__34885 = G__34896;
i__34886 = G__34897;
continue;
} else {
var G__34898 = seq__34882;
var G__34899 = chunk__34884;
var G__34900 = count__34885;
var G__34901 = (i__34886 + (1));
seq__34882 = G__34898;
chunk__34884 = G__34899;
count__34885 = G__34900;
i__34886 = G__34901;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34882);
if(temp__5457__auto__){
var seq__34882__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34882__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__34882__$1);
var G__34902 = cljs.core.chunk_rest.call(null,seq__34882__$1);
var G__34903 = c__31126__auto__;
var G__34904 = cljs.core.count.call(null,c__31126__auto__);
var G__34905 = (0);
seq__34882 = G__34902;
chunk__34884 = G__34903;
count__34885 = G__34904;
i__34886 = G__34905;
continue;
} else {
var vec__34891 = cljs.core.first.call(null,seq__34882__$1);
var k = cljs.core.nth.call(null,vec__34891,(0),null);
var v = cljs.core.nth.call(null,vec__34891,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34906 = cljs.core.next.call(null,seq__34882__$1);
var G__34907 = null;
var G__34908 = (0);
var G__34909 = (0);
seq__34882 = G__34906;
chunk__34884 = G__34907;
count__34885 = G__34908;
i__34886 = G__34909;
continue;
} else {
var G__34910 = cljs.core.next.call(null,seq__34882__$1);
var G__34911 = null;
var G__34912 = (0);
var G__34913 = (0);
seq__34882 = G__34910;
chunk__34884 = G__34911;
count__34885 = G__34912;
i__34886 = G__34913;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__34915_SHARP_,p2__34914_SHARP_){
return p2__34914_SHARP_.call(null,p1__34915_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34917_SHARP_,p2__34916_SHARP_){
return p2__34916_SHARP_.call(null,old_state,p1__34917_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__30194__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34918_SHARP_){
return p1__34918_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__34920 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__34920,(0),null);
var next_state = cljs.core.nth.call(null,vec__34920,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34919_SHARP_){
return p1__34919_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__34923__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__34923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34924__i = 0, G__34924__a = new Array(arguments.length -  0);
while (G__34924__i < G__34924__a.length) {G__34924__a[G__34924__i] = arguments[G__34924__i + 0]; ++G__34924__i;}
  args = new cljs.core.IndexedSeq(G__34924__a,0,null);
} 
return G__34923__delegate.call(this,args);};
G__34923.cljs$lang$maxFixedArity = 0;
G__34923.cljs$lang$applyTo = (function (arglist__34925){
var args = cljs.core.seq(arglist__34925);
return G__34923__delegate(args);
});
G__34923.cljs$core$IFn$_invoke$arity$variadic = G__34923__delegate;
return G__34923;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__34926__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__34926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34927__i = 0, G__34927__a = new Array(arguments.length -  0);
while (G__34927__i < G__34927__a.length) {G__34927__a[G__34927__i] = arguments[G__34927__i + 0]; ++G__34927__i;}
  args = new cljs.core.IndexedSeq(G__34927__a,0,null);
} 
return G__34926__delegate.call(this,args);};
G__34926.cljs$lang$maxFixedArity = 0;
G__34926.cljs$lang$applyTo = (function (arglist__34928){
var args = cljs.core.seq(arglist__34928);
return G__34926__delegate(args);
});
G__34926.cljs$core$IFn$_invoke$arity$variadic = G__34926__delegate;
return G__34926;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__34929__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__34929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34930__i = 0, G__34930__a = new Array(arguments.length -  0);
while (G__34930__i < G__34930__a.length) {G__34930__a[G__34930__i] = arguments[G__34930__i + 0]; ++G__34930__i;}
  args = new cljs.core.IndexedSeq(G__34930__a,0,null);
} 
return G__34929__delegate.call(this,args);};
G__34929.cljs$lang$maxFixedArity = 0;
G__34929.cljs$lang$applyTo = (function (arglist__34931){
var args = cljs.core.seq(arglist__34931);
return G__34929__delegate(args);
});
G__34929.cljs$core$IFn$_invoke$arity$variadic = G__34929__delegate;
return G__34929;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__30194__auto__ = (function (){var and__30182__auto__ = typeof window !== 'undefined';
if(and__30182__auto__){
var or__30194__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
var or__30194__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__30194__auto____$1)){
return or__30194__auto____$1;
} else {
var or__30194__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__30194__auto____$2)){
return or__30194__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__30182__auto__;
}
})();
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return ((function (or__30194__auto__){
return (function (p1__34932_SHARP_){
return setTimeout(p1__34932_SHARP_,(16));
});
;})(or__30194__auto__))
}
})();
rum.core.batch = (function (){var or__30194__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
var or__30194__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__30194__auto____$1)){
return or__30194__auto____$1;
} else {
return ((function (or__30194__auto____$1,or__30194__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__30194__auto____$1,or__30194__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__34933 = cljs.core.seq.call(null,queue);
var chunk__34935 = null;
var count__34936 = (0);
var i__34937 = (0);
while(true){
if((i__34937 < count__34936)){
var comp = cljs.core._nth.call(null,chunk__34935,i__34937);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34939 = seq__34933;
var G__34940 = chunk__34935;
var G__34941 = count__34936;
var G__34942 = (i__34937 + (1));
seq__34933 = G__34939;
chunk__34935 = G__34940;
count__34936 = G__34941;
i__34937 = G__34942;
continue;
} else {
var G__34943 = seq__34933;
var G__34944 = chunk__34935;
var G__34945 = count__34936;
var G__34946 = (i__34937 + (1));
seq__34933 = G__34943;
chunk__34935 = G__34944;
count__34936 = G__34945;
i__34937 = G__34946;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34933);
if(temp__5457__auto__){
var seq__34933__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34933__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__34933__$1);
var G__34947 = cljs.core.chunk_rest.call(null,seq__34933__$1);
var G__34948 = c__31126__auto__;
var G__34949 = cljs.core.count.call(null,c__31126__auto__);
var G__34950 = (0);
seq__34933 = G__34947;
chunk__34935 = G__34948;
count__34936 = G__34949;
i__34937 = G__34950;
continue;
} else {
var comp = cljs.core.first.call(null,seq__34933__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34951 = cljs.core.next.call(null,seq__34933__$1);
var G__34952 = null;
var G__34953 = (0);
var G__34954 = (0);
seq__34933 = G__34951;
chunk__34935 = G__34952;
count__34936 = G__34953;
i__34937 = G__34954;
continue;
} else {
var G__34955 = cljs.core.next.call(null,seq__34933__$1);
var G__34956 = null;
var G__34957 = (0);
var G__34958 = (0);
seq__34933 = G__34955;
chunk__34935 = G__34956;
count__34936 = G__34957;
i__34937 = G__34958;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var G__34960 = arguments.length;
switch (G__34960) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_34962 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__34963 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__34963,(0),null);
var next_state = cljs.core.nth.call(null,vec__34963,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34966_34978 = cljs.core.seq.call(null,old_reactions);
var chunk__34967_34979 = null;
var count__34968_34980 = (0);
var i__34969_34981 = (0);
while(true){
if((i__34969_34981 < count__34968_34980)){
var ref_34982 = cljs.core._nth.call(null,chunk__34967_34979,i__34969_34981);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34982)){
} else {
cljs.core.remove_watch.call(null,ref_34982,key);
}

var G__34983 = seq__34966_34978;
var G__34984 = chunk__34967_34979;
var G__34985 = count__34968_34980;
var G__34986 = (i__34969_34981 + (1));
seq__34966_34978 = G__34983;
chunk__34967_34979 = G__34984;
count__34968_34980 = G__34985;
i__34969_34981 = G__34986;
continue;
} else {
var temp__5457__auto___34987 = cljs.core.seq.call(null,seq__34966_34978);
if(temp__5457__auto___34987){
var seq__34966_34988__$1 = temp__5457__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34966_34988__$1)){
var c__31126__auto___34989 = cljs.core.chunk_first.call(null,seq__34966_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34966_34988__$1);
var G__34991 = c__31126__auto___34989;
var G__34992 = cljs.core.count.call(null,c__31126__auto___34989);
var G__34993 = (0);
seq__34966_34978 = G__34990;
chunk__34967_34979 = G__34991;
count__34968_34980 = G__34992;
i__34969_34981 = G__34993;
continue;
} else {
var ref_34994 = cljs.core.first.call(null,seq__34966_34988__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34994)){
} else {
cljs.core.remove_watch.call(null,ref_34994,key);
}

var G__34995 = cljs.core.next.call(null,seq__34966_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34966_34978 = G__34995;
chunk__34967_34979 = G__34996;
count__34968_34980 = G__34997;
i__34969_34981 = G__34998;
continue;
}
} else {
}
}
break;
}

var seq__34970_34999 = cljs.core.seq.call(null,new_reactions);
var chunk__34971_35000 = null;
var count__34972_35001 = (0);
var i__34973_35002 = (0);
while(true){
if((i__34973_35002 < count__34972_35001)){
var ref_35003 = cljs.core._nth.call(null,chunk__34971_35000,i__34973_35002);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_35003)){
} else {
cljs.core.add_watch.call(null,ref_35003,key,((function (seq__34970_34999,chunk__34971_35000,count__34972_35001,i__34973_35002,ref_35003,comp,old_reactions,vec__34963,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34962){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34970_34999,chunk__34971_35000,count__34972_35001,i__34973_35002,ref_35003,comp,old_reactions,vec__34963,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34962))
);
}

var G__35004 = seq__34970_34999;
var G__35005 = chunk__34971_35000;
var G__35006 = count__34972_35001;
var G__35007 = (i__34973_35002 + (1));
seq__34970_34999 = G__35004;
chunk__34971_35000 = G__35005;
count__34972_35001 = G__35006;
i__34973_35002 = G__35007;
continue;
} else {
var temp__5457__auto___35008 = cljs.core.seq.call(null,seq__34970_34999);
if(temp__5457__auto___35008){
var seq__34970_35009__$1 = temp__5457__auto___35008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34970_35009__$1)){
var c__31126__auto___35010 = cljs.core.chunk_first.call(null,seq__34970_35009__$1);
var G__35011 = cljs.core.chunk_rest.call(null,seq__34970_35009__$1);
var G__35012 = c__31126__auto___35010;
var G__35013 = cljs.core.count.call(null,c__31126__auto___35010);
var G__35014 = (0);
seq__34970_34999 = G__35011;
chunk__34971_35000 = G__35012;
count__34972_35001 = G__35013;
i__34973_35002 = G__35014;
continue;
} else {
var ref_35015 = cljs.core.first.call(null,seq__34970_35009__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_35015)){
} else {
cljs.core.add_watch.call(null,ref_35015,key,((function (seq__34970_34999,chunk__34971_35000,count__34972_35001,i__34973_35002,ref_35015,seq__34970_35009__$1,temp__5457__auto___35008,comp,old_reactions,vec__34963,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34962){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34970_34999,chunk__34971_35000,count__34972_35001,i__34973_35002,ref_35015,seq__34970_35009__$1,temp__5457__auto___35008,comp,old_reactions,vec__34963,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34962))
);
}

var G__35016 = cljs.core.next.call(null,seq__34970_35009__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__34970_34999 = G__35016;
chunk__34971_35000 = G__35017;
count__34972_35001 = G__35018;
i__34973_35002 = G__35019;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_34962;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_35020 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34974_35021 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34975_35022 = null;
var count__34976_35023 = (0);
var i__34977_35024 = (0);
while(true){
if((i__34977_35024 < count__34976_35023)){
var ref_35025 = cljs.core._nth.call(null,chunk__34975_35022,i__34977_35024);
cljs.core.remove_watch.call(null,ref_35025,key_35020);

var G__35026 = seq__34974_35021;
var G__35027 = chunk__34975_35022;
var G__35028 = count__34976_35023;
var G__35029 = (i__34977_35024 + (1));
seq__34974_35021 = G__35026;
chunk__34975_35022 = G__35027;
count__34976_35023 = G__35028;
i__34977_35024 = G__35029;
continue;
} else {
var temp__5457__auto___35030 = cljs.core.seq.call(null,seq__34974_35021);
if(temp__5457__auto___35030){
var seq__34974_35031__$1 = temp__5457__auto___35030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34974_35031__$1)){
var c__31126__auto___35032 = cljs.core.chunk_first.call(null,seq__34974_35031__$1);
var G__35033 = cljs.core.chunk_rest.call(null,seq__34974_35031__$1);
var G__35034 = c__31126__auto___35032;
var G__35035 = cljs.core.count.call(null,c__31126__auto___35032);
var G__35036 = (0);
seq__34974_35021 = G__35033;
chunk__34975_35022 = G__35034;
count__34976_35023 = G__35035;
i__34977_35024 = G__35036;
continue;
} else {
var ref_35037 = cljs.core.first.call(null,seq__34974_35031__$1);
cljs.core.remove_watch.call(null,ref_35037,key_35020);

var G__35038 = cljs.core.next.call(null,seq__34974_35031__$1);
var G__35039 = null;
var G__35040 = (0);
var G__35041 = (0);
seq__34974_35021 = G__35038;
chunk__34975_35022 = G__35039;
count__34976_35023 = G__35040;
i__34977_35024 = G__35041;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35048 = arguments.length;
var i__31475__auto___35049 = (0);
while(true){
if((i__31475__auto___35049 < len__31474__auto___35048)){
args__31481__auto__.push((arguments[i__31475__auto___35049]));

var G__35050 = (i__31475__auto___35049 + (1));
i__31475__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((2) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__35045){
var map__35046 = p__35045;
var map__35046__$1 = ((((!((map__35046 == null)))?((((map__35046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35046):map__35046);
var options = map__35046__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq35042){
var G__35043 = cljs.core.first.call(null,seq35042);
var seq35042__$1 = cljs.core.next.call(null,seq35042);
var G__35044 = cljs.core.first.call(null,seq35042__$1);
var seq35042__$2 = cljs.core.next.call(null,seq35042__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__35043,G__35044,seq35042__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35054 = arguments.length;
var i__31475__auto___35055 = (0);
while(true){
if((i__31475__auto___35055 < len__31474__auto___35054)){
args__31481__auto__.push((arguments[i__31475__auto___35055]));

var G__35056 = (i__31475__auto___35055 + (1));
i__31475__auto___35055 = G__35056;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((2) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq35051){
var G__35052 = cljs.core.first.call(null,seq35051);
var seq35051__$1 = cljs.core.next.call(null,seq35051);
var G__35053 = cljs.core.first.call(null,seq35051__$1);
var seq35051__$2 = cljs.core.next.call(null,seq35051__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__35052,G__35053,seq35051__$2);
});


//# sourceMappingURL=core.js.map?rel=1521387308847
