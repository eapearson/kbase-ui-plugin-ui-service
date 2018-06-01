// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__31480__auto__ = [];
var len__31473__auto___34483 = arguments.length;
var i__31474__auto___34484 = (0);
while(true){
if((i__31474__auto___34484 < len__31473__auto___34483)){
args__31480__auto__.push((arguments[i__31474__auto___34484]));

var G__34485 = (i__31474__auto___34484 + (1));
i__31474__auto___34484 = G__34485;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((2) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31481__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq34480){
var G__34481 = cljs.core.first.call(null,seq34480);
var seq34480__$1 = cljs.core.next.call(null,seq34480);
var G__34482 = cljs.core.first.call(null,seq34480__$1);
var seq34480__$2 = cljs.core.next.call(null,seq34480__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__34481,G__34482,seq34480__$2);
});


//# sourceMappingURL=util.js.map?rel=1523222477849
