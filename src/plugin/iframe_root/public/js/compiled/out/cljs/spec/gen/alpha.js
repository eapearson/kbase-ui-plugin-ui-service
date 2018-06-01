// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42599 = arguments.length;
var i__31474__auto___42600 = (0);
while(true){
if((i__31474__auto___42600 < len__31473__auto___42599)){
args__31480__auto__.push((arguments[i__31474__auto___42600]));

var G__42601 = (i__31474__auto___42600 + (1));
i__31474__auto___42600 = G__42601;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq42598){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42598));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42603 = arguments.length;
var i__31474__auto___42604 = (0);
while(true){
if((i__31474__auto___42604 < len__31473__auto___42603)){
args__31480__auto__.push((arguments[i__31474__auto___42604]));

var G__42605 = (i__31474__auto___42604 + (1));
i__31474__auto___42604 = G__42605;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq42602){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42602));
});

var g_QMARK__42606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_42607 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42606){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__42606))
,null));
var mkg_42608 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42606,g_42607){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__42606,g_42607))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__42606,g_42607,mkg_42608){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42606).call(null,x);
});})(g_QMARK__42606,g_42607,mkg_42608))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__42606,g_42607,mkg_42608){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_42608).call(null,gfn);
});})(g_QMARK__42606,g_42607,mkg_42608))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__42606,g_42607,mkg_42608){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_42607).call(null,generator);
});})(g_QMARK__42606,g_42607,mkg_42608))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42570__auto___42628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42570__auto___42628){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42629 = arguments.length;
var i__31474__auto___42630 = (0);
while(true){
if((i__31474__auto___42630 < len__31473__auto___42629)){
args__31480__auto__.push((arguments[i__31474__auto___42630]));

var G__42631 = (i__31474__auto___42630 + (1));
i__31474__auto___42630 = G__42631;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42628))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42628),args);
});})(g__42570__auto___42628))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42570__auto___42628){
return (function (seq42609){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42609));
});})(g__42570__auto___42628))
;


var g__42570__auto___42632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42570__auto___42632){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42633 = arguments.length;
var i__31474__auto___42634 = (0);
while(true){
if((i__31474__auto___42634 < len__31473__auto___42633)){
args__31480__auto__.push((arguments[i__31474__auto___42634]));

var G__42635 = (i__31474__auto___42634 + (1));
i__31474__auto___42634 = G__42635;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42632))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42632),args);
});})(g__42570__auto___42632))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42570__auto___42632){
return (function (seq42610){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42610));
});})(g__42570__auto___42632))
;


var g__42570__auto___42636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42570__auto___42636){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42637 = arguments.length;
var i__31474__auto___42638 = (0);
while(true){
if((i__31474__auto___42638 < len__31473__auto___42637)){
args__31480__auto__.push((arguments[i__31474__auto___42638]));

var G__42639 = (i__31474__auto___42638 + (1));
i__31474__auto___42638 = G__42639;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42636))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42636),args);
});})(g__42570__auto___42636))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42570__auto___42636){
return (function (seq42611){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42611));
});})(g__42570__auto___42636))
;


var g__42570__auto___42640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42570__auto___42640){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42641 = arguments.length;
var i__31474__auto___42642 = (0);
while(true){
if((i__31474__auto___42642 < len__31473__auto___42641)){
args__31480__auto__.push((arguments[i__31474__auto___42642]));

var G__42643 = (i__31474__auto___42642 + (1));
i__31474__auto___42642 = G__42643;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42640))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42640),args);
});})(g__42570__auto___42640))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42570__auto___42640){
return (function (seq42612){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42612));
});})(g__42570__auto___42640))
;


var g__42570__auto___42644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42570__auto___42644){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42645 = arguments.length;
var i__31474__auto___42646 = (0);
while(true){
if((i__31474__auto___42646 < len__31473__auto___42645)){
args__31480__auto__.push((arguments[i__31474__auto___42646]));

var G__42647 = (i__31474__auto___42646 + (1));
i__31474__auto___42646 = G__42647;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42644))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42644),args);
});})(g__42570__auto___42644))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42570__auto___42644){
return (function (seq42613){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42613));
});})(g__42570__auto___42644))
;


var g__42570__auto___42648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42570__auto___42648){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42649 = arguments.length;
var i__31474__auto___42650 = (0);
while(true){
if((i__31474__auto___42650 < len__31473__auto___42649)){
args__31480__auto__.push((arguments[i__31474__auto___42650]));

var G__42651 = (i__31474__auto___42650 + (1));
i__31474__auto___42650 = G__42651;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42648))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42648),args);
});})(g__42570__auto___42648))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42570__auto___42648){
return (function (seq42614){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42614));
});})(g__42570__auto___42648))
;


var g__42570__auto___42652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42570__auto___42652){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42653 = arguments.length;
var i__31474__auto___42654 = (0);
while(true){
if((i__31474__auto___42654 < len__31473__auto___42653)){
args__31480__auto__.push((arguments[i__31474__auto___42654]));

var G__42655 = (i__31474__auto___42654 + (1));
i__31474__auto___42654 = G__42655;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42652))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42652),args);
});})(g__42570__auto___42652))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42570__auto___42652){
return (function (seq42615){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42615));
});})(g__42570__auto___42652))
;


var g__42570__auto___42656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42570__auto___42656){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42657 = arguments.length;
var i__31474__auto___42658 = (0);
while(true){
if((i__31474__auto___42658 < len__31473__auto___42657)){
args__31480__auto__.push((arguments[i__31474__auto___42658]));

var G__42659 = (i__31474__auto___42658 + (1));
i__31474__auto___42658 = G__42659;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42656))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42656),args);
});})(g__42570__auto___42656))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42570__auto___42656){
return (function (seq42616){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42616));
});})(g__42570__auto___42656))
;


var g__42570__auto___42660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42570__auto___42660){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42661 = arguments.length;
var i__31474__auto___42662 = (0);
while(true){
if((i__31474__auto___42662 < len__31473__auto___42661)){
args__31480__auto__.push((arguments[i__31474__auto___42662]));

var G__42663 = (i__31474__auto___42662 + (1));
i__31474__auto___42662 = G__42663;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42660))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42660),args);
});})(g__42570__auto___42660))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42570__auto___42660){
return (function (seq42617){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42617));
});})(g__42570__auto___42660))
;


var g__42570__auto___42664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42570__auto___42664){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42665 = arguments.length;
var i__31474__auto___42666 = (0);
while(true){
if((i__31474__auto___42666 < len__31473__auto___42665)){
args__31480__auto__.push((arguments[i__31474__auto___42666]));

var G__42667 = (i__31474__auto___42666 + (1));
i__31474__auto___42666 = G__42667;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42664))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42664),args);
});})(g__42570__auto___42664))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42570__auto___42664){
return (function (seq42618){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42618));
});})(g__42570__auto___42664))
;


var g__42570__auto___42668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42570__auto___42668){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42669 = arguments.length;
var i__31474__auto___42670 = (0);
while(true){
if((i__31474__auto___42670 < len__31473__auto___42669)){
args__31480__auto__.push((arguments[i__31474__auto___42670]));

var G__42671 = (i__31474__auto___42670 + (1));
i__31474__auto___42670 = G__42671;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42668))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42668),args);
});})(g__42570__auto___42668))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42570__auto___42668){
return (function (seq42619){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42619));
});})(g__42570__auto___42668))
;


var g__42570__auto___42672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42570__auto___42672){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42673 = arguments.length;
var i__31474__auto___42674 = (0);
while(true){
if((i__31474__auto___42674 < len__31473__auto___42673)){
args__31480__auto__.push((arguments[i__31474__auto___42674]));

var G__42675 = (i__31474__auto___42674 + (1));
i__31474__auto___42674 = G__42675;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42672))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42672),args);
});})(g__42570__auto___42672))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42570__auto___42672){
return (function (seq42620){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42620));
});})(g__42570__auto___42672))
;


var g__42570__auto___42676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42570__auto___42676){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42677 = arguments.length;
var i__31474__auto___42678 = (0);
while(true){
if((i__31474__auto___42678 < len__31473__auto___42677)){
args__31480__auto__.push((arguments[i__31474__auto___42678]));

var G__42679 = (i__31474__auto___42678 + (1));
i__31474__auto___42678 = G__42679;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42676))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42676),args);
});})(g__42570__auto___42676))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42570__auto___42676){
return (function (seq42621){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42621));
});})(g__42570__auto___42676))
;


var g__42570__auto___42680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42570__auto___42680){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42681 = arguments.length;
var i__31474__auto___42682 = (0);
while(true){
if((i__31474__auto___42682 < len__31473__auto___42681)){
args__31480__auto__.push((arguments[i__31474__auto___42682]));

var G__42683 = (i__31474__auto___42682 + (1));
i__31474__auto___42682 = G__42683;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42680))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42680){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42680),args);
});})(g__42570__auto___42680))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42570__auto___42680){
return (function (seq42622){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42622));
});})(g__42570__auto___42680))
;


var g__42570__auto___42684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42570__auto___42684){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42685 = arguments.length;
var i__31474__auto___42686 = (0);
while(true){
if((i__31474__auto___42686 < len__31473__auto___42685)){
args__31480__auto__.push((arguments[i__31474__auto___42686]));

var G__42687 = (i__31474__auto___42686 + (1));
i__31474__auto___42686 = G__42687;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42684))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42684){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42684),args);
});})(g__42570__auto___42684))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42570__auto___42684){
return (function (seq42623){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42623));
});})(g__42570__auto___42684))
;


var g__42570__auto___42688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42570__auto___42688){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42689 = arguments.length;
var i__31474__auto___42690 = (0);
while(true){
if((i__31474__auto___42690 < len__31473__auto___42689)){
args__31480__auto__.push((arguments[i__31474__auto___42690]));

var G__42691 = (i__31474__auto___42690 + (1));
i__31474__auto___42690 = G__42691;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42688))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42688){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42688),args);
});})(g__42570__auto___42688))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42570__auto___42688){
return (function (seq42624){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42624));
});})(g__42570__auto___42688))
;


var g__42570__auto___42692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42570__auto___42692){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42693 = arguments.length;
var i__31474__auto___42694 = (0);
while(true){
if((i__31474__auto___42694 < len__31473__auto___42693)){
args__31480__auto__.push((arguments[i__31474__auto___42694]));

var G__42695 = (i__31474__auto___42694 + (1));
i__31474__auto___42694 = G__42695;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42692))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42692){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42692),args);
});})(g__42570__auto___42692))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42570__auto___42692){
return (function (seq42625){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42625));
});})(g__42570__auto___42692))
;


var g__42570__auto___42696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42570__auto___42696){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42697 = arguments.length;
var i__31474__auto___42698 = (0);
while(true){
if((i__31474__auto___42698 < len__31473__auto___42697)){
args__31480__auto__.push((arguments[i__31474__auto___42698]));

var G__42699 = (i__31474__auto___42698 + (1));
i__31474__auto___42698 = G__42699;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42696))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42696){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42696),args);
});})(g__42570__auto___42696))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42570__auto___42696){
return (function (seq42626){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42626));
});})(g__42570__auto___42696))
;


var g__42570__auto___42700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42570__auto___42700){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42701 = arguments.length;
var i__31474__auto___42702 = (0);
while(true){
if((i__31474__auto___42702 < len__31473__auto___42701)){
args__31480__auto__.push((arguments[i__31474__auto___42702]));

var G__42703 = (i__31474__auto___42702 + (1));
i__31474__auto___42702 = G__42703;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42570__auto___42700))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42570__auto___42700){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42570__auto___42700),args);
});})(g__42570__auto___42700))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42570__auto___42700){
return (function (seq42627){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42627));
});})(g__42570__auto___42700))
;

var g__42583__auto___42725 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42583__auto___42725){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42726 = arguments.length;
var i__31474__auto___42727 = (0);
while(true){
if((i__31474__auto___42727 < len__31473__auto___42726)){
args__31480__auto__.push((arguments[i__31474__auto___42727]));

var G__42728 = (i__31474__auto___42727 + (1));
i__31474__auto___42727 = G__42728;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42725))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42725){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42725);
});})(g__42583__auto___42725))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42583__auto___42725){
return (function (seq42704){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42704));
});})(g__42583__auto___42725))
;


var g__42583__auto___42729 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42583__auto___42729){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42730 = arguments.length;
var i__31474__auto___42731 = (0);
while(true){
if((i__31474__auto___42731 < len__31473__auto___42730)){
args__31480__auto__.push((arguments[i__31474__auto___42731]));

var G__42732 = (i__31474__auto___42731 + (1));
i__31474__auto___42731 = G__42732;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42729))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42729){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42729);
});})(g__42583__auto___42729))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42583__auto___42729){
return (function (seq42705){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42705));
});})(g__42583__auto___42729))
;


var g__42583__auto___42733 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42583__auto___42733){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42734 = arguments.length;
var i__31474__auto___42735 = (0);
while(true){
if((i__31474__auto___42735 < len__31473__auto___42734)){
args__31480__auto__.push((arguments[i__31474__auto___42735]));

var G__42736 = (i__31474__auto___42735 + (1));
i__31474__auto___42735 = G__42736;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42733))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42733){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42733);
});})(g__42583__auto___42733))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42583__auto___42733){
return (function (seq42706){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42706));
});})(g__42583__auto___42733))
;


var g__42583__auto___42737 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42583__auto___42737){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42738 = arguments.length;
var i__31474__auto___42739 = (0);
while(true){
if((i__31474__auto___42739 < len__31473__auto___42738)){
args__31480__auto__.push((arguments[i__31474__auto___42739]));

var G__42740 = (i__31474__auto___42739 + (1));
i__31474__auto___42739 = G__42740;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42737))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42737){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42737);
});})(g__42583__auto___42737))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42583__auto___42737){
return (function (seq42707){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42707));
});})(g__42583__auto___42737))
;


var g__42583__auto___42741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42583__auto___42741){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42742 = arguments.length;
var i__31474__auto___42743 = (0);
while(true){
if((i__31474__auto___42743 < len__31473__auto___42742)){
args__31480__auto__.push((arguments[i__31474__auto___42743]));

var G__42744 = (i__31474__auto___42743 + (1));
i__31474__auto___42743 = G__42744;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42741))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42741){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42741);
});})(g__42583__auto___42741))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42583__auto___42741){
return (function (seq42708){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42708));
});})(g__42583__auto___42741))
;


var g__42583__auto___42745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42583__auto___42745){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42746 = arguments.length;
var i__31474__auto___42747 = (0);
while(true){
if((i__31474__auto___42747 < len__31473__auto___42746)){
args__31480__auto__.push((arguments[i__31474__auto___42747]));

var G__42748 = (i__31474__auto___42747 + (1));
i__31474__auto___42747 = G__42748;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42745))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42745){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42745);
});})(g__42583__auto___42745))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42583__auto___42745){
return (function (seq42709){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42709));
});})(g__42583__auto___42745))
;


var g__42583__auto___42749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42583__auto___42749){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42750 = arguments.length;
var i__31474__auto___42751 = (0);
while(true){
if((i__31474__auto___42751 < len__31473__auto___42750)){
args__31480__auto__.push((arguments[i__31474__auto___42751]));

var G__42752 = (i__31474__auto___42751 + (1));
i__31474__auto___42751 = G__42752;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42749))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42749){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42749);
});})(g__42583__auto___42749))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42583__auto___42749){
return (function (seq42710){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42710));
});})(g__42583__auto___42749))
;


var g__42583__auto___42753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42583__auto___42753){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42754 = arguments.length;
var i__31474__auto___42755 = (0);
while(true){
if((i__31474__auto___42755 < len__31473__auto___42754)){
args__31480__auto__.push((arguments[i__31474__auto___42755]));

var G__42756 = (i__31474__auto___42755 + (1));
i__31474__auto___42755 = G__42756;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42753))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42753){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42753);
});})(g__42583__auto___42753))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42583__auto___42753){
return (function (seq42711){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42711));
});})(g__42583__auto___42753))
;


var g__42583__auto___42757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42583__auto___42757){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42758 = arguments.length;
var i__31474__auto___42759 = (0);
while(true){
if((i__31474__auto___42759 < len__31473__auto___42758)){
args__31480__auto__.push((arguments[i__31474__auto___42759]));

var G__42760 = (i__31474__auto___42759 + (1));
i__31474__auto___42759 = G__42760;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42757))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42757){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42757);
});})(g__42583__auto___42757))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42583__auto___42757){
return (function (seq42712){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42712));
});})(g__42583__auto___42757))
;


var g__42583__auto___42761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42583__auto___42761){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42762 = arguments.length;
var i__31474__auto___42763 = (0);
while(true){
if((i__31474__auto___42763 < len__31473__auto___42762)){
args__31480__auto__.push((arguments[i__31474__auto___42763]));

var G__42764 = (i__31474__auto___42763 + (1));
i__31474__auto___42763 = G__42764;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42761))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42761){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42761);
});})(g__42583__auto___42761))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42583__auto___42761){
return (function (seq42713){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42713));
});})(g__42583__auto___42761))
;


var g__42583__auto___42765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42583__auto___42765){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42766 = arguments.length;
var i__31474__auto___42767 = (0);
while(true){
if((i__31474__auto___42767 < len__31473__auto___42766)){
args__31480__auto__.push((arguments[i__31474__auto___42767]));

var G__42768 = (i__31474__auto___42767 + (1));
i__31474__auto___42767 = G__42768;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42765))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42765){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42765);
});})(g__42583__auto___42765))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42583__auto___42765){
return (function (seq42714){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42714));
});})(g__42583__auto___42765))
;


var g__42583__auto___42769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42583__auto___42769){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42770 = arguments.length;
var i__31474__auto___42771 = (0);
while(true){
if((i__31474__auto___42771 < len__31473__auto___42770)){
args__31480__auto__.push((arguments[i__31474__auto___42771]));

var G__42772 = (i__31474__auto___42771 + (1));
i__31474__auto___42771 = G__42772;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42769))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42769){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42769);
});})(g__42583__auto___42769))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42583__auto___42769){
return (function (seq42715){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42715));
});})(g__42583__auto___42769))
;


var g__42583__auto___42773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42583__auto___42773){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42774 = arguments.length;
var i__31474__auto___42775 = (0);
while(true){
if((i__31474__auto___42775 < len__31473__auto___42774)){
args__31480__auto__.push((arguments[i__31474__auto___42775]));

var G__42776 = (i__31474__auto___42775 + (1));
i__31474__auto___42775 = G__42776;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42773))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42773){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42773);
});})(g__42583__auto___42773))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42583__auto___42773){
return (function (seq42716){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42716));
});})(g__42583__auto___42773))
;


var g__42583__auto___42777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42583__auto___42777){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42778 = arguments.length;
var i__31474__auto___42779 = (0);
while(true){
if((i__31474__auto___42779 < len__31473__auto___42778)){
args__31480__auto__.push((arguments[i__31474__auto___42779]));

var G__42780 = (i__31474__auto___42779 + (1));
i__31474__auto___42779 = G__42780;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42777))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42777){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42777);
});})(g__42583__auto___42777))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42583__auto___42777){
return (function (seq42717){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42717));
});})(g__42583__auto___42777))
;


var g__42583__auto___42781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42583__auto___42781){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42782 = arguments.length;
var i__31474__auto___42783 = (0);
while(true){
if((i__31474__auto___42783 < len__31473__auto___42782)){
args__31480__auto__.push((arguments[i__31474__auto___42783]));

var G__42784 = (i__31474__auto___42783 + (1));
i__31474__auto___42783 = G__42784;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42781))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42781){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42781);
});})(g__42583__auto___42781))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42583__auto___42781){
return (function (seq42718){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42718));
});})(g__42583__auto___42781))
;


var g__42583__auto___42785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42583__auto___42785){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42786 = arguments.length;
var i__31474__auto___42787 = (0);
while(true){
if((i__31474__auto___42787 < len__31473__auto___42786)){
args__31480__auto__.push((arguments[i__31474__auto___42787]));

var G__42788 = (i__31474__auto___42787 + (1));
i__31474__auto___42787 = G__42788;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42785))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42785){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42785);
});})(g__42583__auto___42785))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42583__auto___42785){
return (function (seq42719){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42719));
});})(g__42583__auto___42785))
;


var g__42583__auto___42789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42583__auto___42789){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42790 = arguments.length;
var i__31474__auto___42791 = (0);
while(true){
if((i__31474__auto___42791 < len__31473__auto___42790)){
args__31480__auto__.push((arguments[i__31474__auto___42791]));

var G__42792 = (i__31474__auto___42791 + (1));
i__31474__auto___42791 = G__42792;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42789))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42789){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42789);
});})(g__42583__auto___42789))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42583__auto___42789){
return (function (seq42720){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42720));
});})(g__42583__auto___42789))
;


var g__42583__auto___42793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42583__auto___42793){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42794 = arguments.length;
var i__31474__auto___42795 = (0);
while(true){
if((i__31474__auto___42795 < len__31473__auto___42794)){
args__31480__auto__.push((arguments[i__31474__auto___42795]));

var G__42796 = (i__31474__auto___42795 + (1));
i__31474__auto___42795 = G__42796;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42793))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42793){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42793);
});})(g__42583__auto___42793))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42583__auto___42793){
return (function (seq42721){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42721));
});})(g__42583__auto___42793))
;


var g__42583__auto___42797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42583__auto___42797){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42798 = arguments.length;
var i__31474__auto___42799 = (0);
while(true){
if((i__31474__auto___42799 < len__31473__auto___42798)){
args__31480__auto__.push((arguments[i__31474__auto___42799]));

var G__42800 = (i__31474__auto___42799 + (1));
i__31474__auto___42799 = G__42800;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42797))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42797){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42797);
});})(g__42583__auto___42797))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42583__auto___42797){
return (function (seq42722){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42722));
});})(g__42583__auto___42797))
;


var g__42583__auto___42801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42583__auto___42801){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42802 = arguments.length;
var i__31474__auto___42803 = (0);
while(true){
if((i__31474__auto___42803 < len__31473__auto___42802)){
args__31480__auto__.push((arguments[i__31474__auto___42803]));

var G__42804 = (i__31474__auto___42803 + (1));
i__31474__auto___42803 = G__42804;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42801))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42801){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42801);
});})(g__42583__auto___42801))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42583__auto___42801){
return (function (seq42723){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42723));
});})(g__42583__auto___42801))
;


var g__42583__auto___42805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42583__auto___42805){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42806 = arguments.length;
var i__31474__auto___42807 = (0);
while(true){
if((i__31474__auto___42807 < len__31473__auto___42806)){
args__31480__auto__.push((arguments[i__31474__auto___42807]));

var G__42808 = (i__31474__auto___42807 + (1));
i__31474__auto___42807 = G__42808;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});})(g__42583__auto___42805))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42583__auto___42805){
return (function (args){
return cljs.core.deref.call(null,g__42583__auto___42805);
});})(g__42583__auto___42805))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42583__auto___42805){
return (function (seq42724){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42724));
});})(g__42583__auto___42805))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31480__auto__ = [];
var len__31473__auto___42811 = arguments.length;
var i__31474__auto___42812 = (0);
while(true){
if((i__31474__auto___42812 < len__31473__auto___42811)){
args__31480__auto__.push((arguments[i__31474__auto___42812]));

var G__42813 = (i__31474__auto___42812 + (1));
i__31474__auto___42812 = G__42813;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__42809_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42809_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq42810){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42810));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__42814_SHARP_){
return (new Date(p1__42814_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1523222484998
