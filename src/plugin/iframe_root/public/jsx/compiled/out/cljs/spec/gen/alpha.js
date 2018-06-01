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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__31481__auto__ = [];
var len__31474__auto___42600 = arguments.length;
var i__31475__auto___42601 = (0);
while(true){
if((i__31475__auto___42601 < len__31474__auto___42600)){
args__31481__auto__.push((arguments[i__31475__auto___42601]));

var G__42602 = (i__31475__auto___42601 + (1));
i__31475__auto___42601 = G__42602;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq42599){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42599));
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
var args__31481__auto__ = [];
var len__31474__auto___42604 = arguments.length;
var i__31475__auto___42605 = (0);
while(true){
if((i__31475__auto___42605 < len__31474__auto___42604)){
args__31481__auto__.push((arguments[i__31475__auto___42605]));

var G__42606 = (i__31475__auto___42605 + (1));
i__31475__auto___42605 = G__42606;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq42603){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42603));
});

var g_QMARK__42607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_42608 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42607){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__42607))
,null));
var mkg_42609 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42607,g_42608){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__42607,g_42608))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__42607,g_42608,mkg_42609){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42607).call(null,x);
});})(g_QMARK__42607,g_42608,mkg_42609))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__42607,g_42608,mkg_42609){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_42609).call(null,gfn);
});})(g_QMARK__42607,g_42608,mkg_42609))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__42607,g_42608,mkg_42609){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_42608).call(null,generator);
});})(g_QMARK__42607,g_42608,mkg_42609))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42571__auto___42629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42571__auto___42629){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42630 = arguments.length;
var i__31475__auto___42631 = (0);
while(true){
if((i__31475__auto___42631 < len__31474__auto___42630)){
args__31481__auto__.push((arguments[i__31475__auto___42631]));

var G__42632 = (i__31475__auto___42631 + (1));
i__31475__auto___42631 = G__42632;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42629))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42629){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42629),args);
});})(g__42571__auto___42629))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42571__auto___42629){
return (function (seq42610){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42610));
});})(g__42571__auto___42629))
;


var g__42571__auto___42633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42571__auto___42633){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42634 = arguments.length;
var i__31475__auto___42635 = (0);
while(true){
if((i__31475__auto___42635 < len__31474__auto___42634)){
args__31481__auto__.push((arguments[i__31475__auto___42635]));

var G__42636 = (i__31475__auto___42635 + (1));
i__31475__auto___42635 = G__42636;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42633))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42633){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42633),args);
});})(g__42571__auto___42633))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42571__auto___42633){
return (function (seq42611){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42611));
});})(g__42571__auto___42633))
;


var g__42571__auto___42637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42571__auto___42637){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42638 = arguments.length;
var i__31475__auto___42639 = (0);
while(true){
if((i__31475__auto___42639 < len__31474__auto___42638)){
args__31481__auto__.push((arguments[i__31475__auto___42639]));

var G__42640 = (i__31475__auto___42639 + (1));
i__31475__auto___42639 = G__42640;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42637))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42637),args);
});})(g__42571__auto___42637))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42571__auto___42637){
return (function (seq42612){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42612));
});})(g__42571__auto___42637))
;


var g__42571__auto___42641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42571__auto___42641){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42642 = arguments.length;
var i__31475__auto___42643 = (0);
while(true){
if((i__31475__auto___42643 < len__31474__auto___42642)){
args__31481__auto__.push((arguments[i__31475__auto___42643]));

var G__42644 = (i__31475__auto___42643 + (1));
i__31475__auto___42643 = G__42644;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42641))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42641){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42641),args);
});})(g__42571__auto___42641))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42571__auto___42641){
return (function (seq42613){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42613));
});})(g__42571__auto___42641))
;


var g__42571__auto___42645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42571__auto___42645){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42646 = arguments.length;
var i__31475__auto___42647 = (0);
while(true){
if((i__31475__auto___42647 < len__31474__auto___42646)){
args__31481__auto__.push((arguments[i__31475__auto___42647]));

var G__42648 = (i__31475__auto___42647 + (1));
i__31475__auto___42647 = G__42648;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42645))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42645){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42645),args);
});})(g__42571__auto___42645))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42571__auto___42645){
return (function (seq42614){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42614));
});})(g__42571__auto___42645))
;


var g__42571__auto___42649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42571__auto___42649){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42650 = arguments.length;
var i__31475__auto___42651 = (0);
while(true){
if((i__31475__auto___42651 < len__31474__auto___42650)){
args__31481__auto__.push((arguments[i__31475__auto___42651]));

var G__42652 = (i__31475__auto___42651 + (1));
i__31475__auto___42651 = G__42652;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42649))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42649){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42649),args);
});})(g__42571__auto___42649))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42571__auto___42649){
return (function (seq42615){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42615));
});})(g__42571__auto___42649))
;


var g__42571__auto___42653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42571__auto___42653){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42654 = arguments.length;
var i__31475__auto___42655 = (0);
while(true){
if((i__31475__auto___42655 < len__31474__auto___42654)){
args__31481__auto__.push((arguments[i__31475__auto___42655]));

var G__42656 = (i__31475__auto___42655 + (1));
i__31475__auto___42655 = G__42656;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42653))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42653){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42653),args);
});})(g__42571__auto___42653))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42571__auto___42653){
return (function (seq42616){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42616));
});})(g__42571__auto___42653))
;


var g__42571__auto___42657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42571__auto___42657){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42658 = arguments.length;
var i__31475__auto___42659 = (0);
while(true){
if((i__31475__auto___42659 < len__31474__auto___42658)){
args__31481__auto__.push((arguments[i__31475__auto___42659]));

var G__42660 = (i__31475__auto___42659 + (1));
i__31475__auto___42659 = G__42660;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42657))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42657){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42657),args);
});})(g__42571__auto___42657))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42571__auto___42657){
return (function (seq42617){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42617));
});})(g__42571__auto___42657))
;


var g__42571__auto___42661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42571__auto___42661){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42662 = arguments.length;
var i__31475__auto___42663 = (0);
while(true){
if((i__31475__auto___42663 < len__31474__auto___42662)){
args__31481__auto__.push((arguments[i__31475__auto___42663]));

var G__42664 = (i__31475__auto___42663 + (1));
i__31475__auto___42663 = G__42664;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42661))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42661),args);
});})(g__42571__auto___42661))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42571__auto___42661){
return (function (seq42618){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42618));
});})(g__42571__auto___42661))
;


var g__42571__auto___42665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42571__auto___42665){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42666 = arguments.length;
var i__31475__auto___42667 = (0);
while(true){
if((i__31475__auto___42667 < len__31474__auto___42666)){
args__31481__auto__.push((arguments[i__31475__auto___42667]));

var G__42668 = (i__31475__auto___42667 + (1));
i__31475__auto___42667 = G__42668;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42665))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42665){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42665),args);
});})(g__42571__auto___42665))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42571__auto___42665){
return (function (seq42619){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42619));
});})(g__42571__auto___42665))
;


var g__42571__auto___42669 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42571__auto___42669){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42670 = arguments.length;
var i__31475__auto___42671 = (0);
while(true){
if((i__31475__auto___42671 < len__31474__auto___42670)){
args__31481__auto__.push((arguments[i__31475__auto___42671]));

var G__42672 = (i__31475__auto___42671 + (1));
i__31475__auto___42671 = G__42672;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42669))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42669){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42669),args);
});})(g__42571__auto___42669))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42571__auto___42669){
return (function (seq42620){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42620));
});})(g__42571__auto___42669))
;


var g__42571__auto___42673 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42571__auto___42673){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42674 = arguments.length;
var i__31475__auto___42675 = (0);
while(true){
if((i__31475__auto___42675 < len__31474__auto___42674)){
args__31481__auto__.push((arguments[i__31475__auto___42675]));

var G__42676 = (i__31475__auto___42675 + (1));
i__31475__auto___42675 = G__42676;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42673))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42673){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42673),args);
});})(g__42571__auto___42673))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42571__auto___42673){
return (function (seq42621){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42621));
});})(g__42571__auto___42673))
;


var g__42571__auto___42677 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42571__auto___42677){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42678 = arguments.length;
var i__31475__auto___42679 = (0);
while(true){
if((i__31475__auto___42679 < len__31474__auto___42678)){
args__31481__auto__.push((arguments[i__31475__auto___42679]));

var G__42680 = (i__31475__auto___42679 + (1));
i__31475__auto___42679 = G__42680;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42677))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42677),args);
});})(g__42571__auto___42677))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42571__auto___42677){
return (function (seq42622){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42622));
});})(g__42571__auto___42677))
;


var g__42571__auto___42681 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42571__auto___42681){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42682 = arguments.length;
var i__31475__auto___42683 = (0);
while(true){
if((i__31475__auto___42683 < len__31474__auto___42682)){
args__31481__auto__.push((arguments[i__31475__auto___42683]));

var G__42684 = (i__31475__auto___42683 + (1));
i__31475__auto___42683 = G__42684;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42681))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42681),args);
});})(g__42571__auto___42681))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42571__auto___42681){
return (function (seq42623){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42623));
});})(g__42571__auto___42681))
;


var g__42571__auto___42685 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42571__auto___42685){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42686 = arguments.length;
var i__31475__auto___42687 = (0);
while(true){
if((i__31475__auto___42687 < len__31474__auto___42686)){
args__31481__auto__.push((arguments[i__31475__auto___42687]));

var G__42688 = (i__31475__auto___42687 + (1));
i__31475__auto___42687 = G__42688;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42685))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42685){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42685),args);
});})(g__42571__auto___42685))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42571__auto___42685){
return (function (seq42624){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42624));
});})(g__42571__auto___42685))
;


var g__42571__auto___42689 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42571__auto___42689){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42690 = arguments.length;
var i__31475__auto___42691 = (0);
while(true){
if((i__31475__auto___42691 < len__31474__auto___42690)){
args__31481__auto__.push((arguments[i__31475__auto___42691]));

var G__42692 = (i__31475__auto___42691 + (1));
i__31475__auto___42691 = G__42692;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42689))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42689){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42689),args);
});})(g__42571__auto___42689))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42571__auto___42689){
return (function (seq42625){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42625));
});})(g__42571__auto___42689))
;


var g__42571__auto___42693 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42571__auto___42693){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42694 = arguments.length;
var i__31475__auto___42695 = (0);
while(true){
if((i__31475__auto___42695 < len__31474__auto___42694)){
args__31481__auto__.push((arguments[i__31475__auto___42695]));

var G__42696 = (i__31475__auto___42695 + (1));
i__31475__auto___42695 = G__42696;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42693))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42693){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42693),args);
});})(g__42571__auto___42693))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42571__auto___42693){
return (function (seq42626){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42626));
});})(g__42571__auto___42693))
;


var g__42571__auto___42697 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42571__auto___42697){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42698 = arguments.length;
var i__31475__auto___42699 = (0);
while(true){
if((i__31475__auto___42699 < len__31474__auto___42698)){
args__31481__auto__.push((arguments[i__31475__auto___42699]));

var G__42700 = (i__31475__auto___42699 + (1));
i__31475__auto___42699 = G__42700;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42697))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42697){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42697),args);
});})(g__42571__auto___42697))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42571__auto___42697){
return (function (seq42627){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42627));
});})(g__42571__auto___42697))
;


var g__42571__auto___42701 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42571__auto___42701){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42702 = arguments.length;
var i__31475__auto___42703 = (0);
while(true){
if((i__31475__auto___42703 < len__31474__auto___42702)){
args__31481__auto__.push((arguments[i__31475__auto___42703]));

var G__42704 = (i__31475__auto___42703 + (1));
i__31475__auto___42703 = G__42704;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42571__auto___42701))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42571__auto___42701){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42571__auto___42701),args);
});})(g__42571__auto___42701))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42571__auto___42701){
return (function (seq42628){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42628));
});})(g__42571__auto___42701))
;

var g__42584__auto___42726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42584__auto___42726){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42727 = arguments.length;
var i__31475__auto___42728 = (0);
while(true){
if((i__31475__auto___42728 < len__31474__auto___42727)){
args__31481__auto__.push((arguments[i__31475__auto___42728]));

var G__42729 = (i__31475__auto___42728 + (1));
i__31475__auto___42728 = G__42729;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42726))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42726){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42726);
});})(g__42584__auto___42726))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42584__auto___42726){
return (function (seq42705){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42705));
});})(g__42584__auto___42726))
;


var g__42584__auto___42730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42584__auto___42730){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42731 = arguments.length;
var i__31475__auto___42732 = (0);
while(true){
if((i__31475__auto___42732 < len__31474__auto___42731)){
args__31481__auto__.push((arguments[i__31475__auto___42732]));

var G__42733 = (i__31475__auto___42732 + (1));
i__31475__auto___42732 = G__42733;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42730))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42730){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42730);
});})(g__42584__auto___42730))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42584__auto___42730){
return (function (seq42706){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42706));
});})(g__42584__auto___42730))
;


var g__42584__auto___42734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42584__auto___42734){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42735 = arguments.length;
var i__31475__auto___42736 = (0);
while(true){
if((i__31475__auto___42736 < len__31474__auto___42735)){
args__31481__auto__.push((arguments[i__31475__auto___42736]));

var G__42737 = (i__31475__auto___42736 + (1));
i__31475__auto___42736 = G__42737;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42734))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42734){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42734);
});})(g__42584__auto___42734))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42584__auto___42734){
return (function (seq42707){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42707));
});})(g__42584__auto___42734))
;


var g__42584__auto___42738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42584__auto___42738){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42739 = arguments.length;
var i__31475__auto___42740 = (0);
while(true){
if((i__31475__auto___42740 < len__31474__auto___42739)){
args__31481__auto__.push((arguments[i__31475__auto___42740]));

var G__42741 = (i__31475__auto___42740 + (1));
i__31475__auto___42740 = G__42741;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42738))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42738){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42738);
});})(g__42584__auto___42738))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42584__auto___42738){
return (function (seq42708){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42708));
});})(g__42584__auto___42738))
;


var g__42584__auto___42742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42584__auto___42742){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42743 = arguments.length;
var i__31475__auto___42744 = (0);
while(true){
if((i__31475__auto___42744 < len__31474__auto___42743)){
args__31481__auto__.push((arguments[i__31475__auto___42744]));

var G__42745 = (i__31475__auto___42744 + (1));
i__31475__auto___42744 = G__42745;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42742))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42742){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42742);
});})(g__42584__auto___42742))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42584__auto___42742){
return (function (seq42709){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42709));
});})(g__42584__auto___42742))
;


var g__42584__auto___42746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42584__auto___42746){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42747 = arguments.length;
var i__31475__auto___42748 = (0);
while(true){
if((i__31475__auto___42748 < len__31474__auto___42747)){
args__31481__auto__.push((arguments[i__31475__auto___42748]));

var G__42749 = (i__31475__auto___42748 + (1));
i__31475__auto___42748 = G__42749;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42746))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42746){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42746);
});})(g__42584__auto___42746))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42584__auto___42746){
return (function (seq42710){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42710));
});})(g__42584__auto___42746))
;


var g__42584__auto___42750 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42584__auto___42750){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42751 = arguments.length;
var i__31475__auto___42752 = (0);
while(true){
if((i__31475__auto___42752 < len__31474__auto___42751)){
args__31481__auto__.push((arguments[i__31475__auto___42752]));

var G__42753 = (i__31475__auto___42752 + (1));
i__31475__auto___42752 = G__42753;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42750))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42750){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42750);
});})(g__42584__auto___42750))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42584__auto___42750){
return (function (seq42711){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42711));
});})(g__42584__auto___42750))
;


var g__42584__auto___42754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42584__auto___42754){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42755 = arguments.length;
var i__31475__auto___42756 = (0);
while(true){
if((i__31475__auto___42756 < len__31474__auto___42755)){
args__31481__auto__.push((arguments[i__31475__auto___42756]));

var G__42757 = (i__31475__auto___42756 + (1));
i__31475__auto___42756 = G__42757;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42754))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42754){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42754);
});})(g__42584__auto___42754))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42584__auto___42754){
return (function (seq42712){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42712));
});})(g__42584__auto___42754))
;


var g__42584__auto___42758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42584__auto___42758){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42759 = arguments.length;
var i__31475__auto___42760 = (0);
while(true){
if((i__31475__auto___42760 < len__31474__auto___42759)){
args__31481__auto__.push((arguments[i__31475__auto___42760]));

var G__42761 = (i__31475__auto___42760 + (1));
i__31475__auto___42760 = G__42761;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42758))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42758){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42758);
});})(g__42584__auto___42758))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42584__auto___42758){
return (function (seq42713){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42713));
});})(g__42584__auto___42758))
;


var g__42584__auto___42762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42584__auto___42762){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42763 = arguments.length;
var i__31475__auto___42764 = (0);
while(true){
if((i__31475__auto___42764 < len__31474__auto___42763)){
args__31481__auto__.push((arguments[i__31475__auto___42764]));

var G__42765 = (i__31475__auto___42764 + (1));
i__31475__auto___42764 = G__42765;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42762))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42762){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42762);
});})(g__42584__auto___42762))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42584__auto___42762){
return (function (seq42714){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42714));
});})(g__42584__auto___42762))
;


var g__42584__auto___42766 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42584__auto___42766){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42767 = arguments.length;
var i__31475__auto___42768 = (0);
while(true){
if((i__31475__auto___42768 < len__31474__auto___42767)){
args__31481__auto__.push((arguments[i__31475__auto___42768]));

var G__42769 = (i__31475__auto___42768 + (1));
i__31475__auto___42768 = G__42769;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42766))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42766){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42766);
});})(g__42584__auto___42766))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42584__auto___42766){
return (function (seq42715){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42715));
});})(g__42584__auto___42766))
;


var g__42584__auto___42770 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42584__auto___42770){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42771 = arguments.length;
var i__31475__auto___42772 = (0);
while(true){
if((i__31475__auto___42772 < len__31474__auto___42771)){
args__31481__auto__.push((arguments[i__31475__auto___42772]));

var G__42773 = (i__31475__auto___42772 + (1));
i__31475__auto___42772 = G__42773;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42770))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42770){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42770);
});})(g__42584__auto___42770))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42584__auto___42770){
return (function (seq42716){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42716));
});})(g__42584__auto___42770))
;


var g__42584__auto___42774 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42584__auto___42774){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42775 = arguments.length;
var i__31475__auto___42776 = (0);
while(true){
if((i__31475__auto___42776 < len__31474__auto___42775)){
args__31481__auto__.push((arguments[i__31475__auto___42776]));

var G__42777 = (i__31475__auto___42776 + (1));
i__31475__auto___42776 = G__42777;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42774))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42774){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42774);
});})(g__42584__auto___42774))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42584__auto___42774){
return (function (seq42717){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42717));
});})(g__42584__auto___42774))
;


var g__42584__auto___42778 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42584__auto___42778){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42779 = arguments.length;
var i__31475__auto___42780 = (0);
while(true){
if((i__31475__auto___42780 < len__31474__auto___42779)){
args__31481__auto__.push((arguments[i__31475__auto___42780]));

var G__42781 = (i__31475__auto___42780 + (1));
i__31475__auto___42780 = G__42781;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42778))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42778){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42778);
});})(g__42584__auto___42778))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42584__auto___42778){
return (function (seq42718){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42718));
});})(g__42584__auto___42778))
;


var g__42584__auto___42782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42584__auto___42782){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42783 = arguments.length;
var i__31475__auto___42784 = (0);
while(true){
if((i__31475__auto___42784 < len__31474__auto___42783)){
args__31481__auto__.push((arguments[i__31475__auto___42784]));

var G__42785 = (i__31475__auto___42784 + (1));
i__31475__auto___42784 = G__42785;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42782))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42782){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42782);
});})(g__42584__auto___42782))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42584__auto___42782){
return (function (seq42719){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42719));
});})(g__42584__auto___42782))
;


var g__42584__auto___42786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42584__auto___42786){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42787 = arguments.length;
var i__31475__auto___42788 = (0);
while(true){
if((i__31475__auto___42788 < len__31474__auto___42787)){
args__31481__auto__.push((arguments[i__31475__auto___42788]));

var G__42789 = (i__31475__auto___42788 + (1));
i__31475__auto___42788 = G__42789;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42786))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42786){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42786);
});})(g__42584__auto___42786))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42584__auto___42786){
return (function (seq42720){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42720));
});})(g__42584__auto___42786))
;


var g__42584__auto___42790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42584__auto___42790){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42791 = arguments.length;
var i__31475__auto___42792 = (0);
while(true){
if((i__31475__auto___42792 < len__31474__auto___42791)){
args__31481__auto__.push((arguments[i__31475__auto___42792]));

var G__42793 = (i__31475__auto___42792 + (1));
i__31475__auto___42792 = G__42793;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42790))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42790){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42790);
});})(g__42584__auto___42790))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42584__auto___42790){
return (function (seq42721){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42721));
});})(g__42584__auto___42790))
;


var g__42584__auto___42794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42584__auto___42794){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42795 = arguments.length;
var i__31475__auto___42796 = (0);
while(true){
if((i__31475__auto___42796 < len__31474__auto___42795)){
args__31481__auto__.push((arguments[i__31475__auto___42796]));

var G__42797 = (i__31475__auto___42796 + (1));
i__31475__auto___42796 = G__42797;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42794))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42794){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42794);
});})(g__42584__auto___42794))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42584__auto___42794){
return (function (seq42722){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42722));
});})(g__42584__auto___42794))
;


var g__42584__auto___42798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42584__auto___42798){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42799 = arguments.length;
var i__31475__auto___42800 = (0);
while(true){
if((i__31475__auto___42800 < len__31474__auto___42799)){
args__31481__auto__.push((arguments[i__31475__auto___42800]));

var G__42801 = (i__31475__auto___42800 + (1));
i__31475__auto___42800 = G__42801;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42798))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42798){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42798);
});})(g__42584__auto___42798))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42584__auto___42798){
return (function (seq42723){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42723));
});})(g__42584__auto___42798))
;


var g__42584__auto___42802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42584__auto___42802){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42803 = arguments.length;
var i__31475__auto___42804 = (0);
while(true){
if((i__31475__auto___42804 < len__31474__auto___42803)){
args__31481__auto__.push((arguments[i__31475__auto___42804]));

var G__42805 = (i__31475__auto___42804 + (1));
i__31475__auto___42804 = G__42805;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42802))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42802){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42802);
});})(g__42584__auto___42802))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42584__auto___42802){
return (function (seq42724){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42724));
});})(g__42584__auto___42802))
;


var g__42584__auto___42806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42584__auto___42806){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42807 = arguments.length;
var i__31475__auto___42808 = (0);
while(true){
if((i__31475__auto___42808 < len__31474__auto___42807)){
args__31481__auto__.push((arguments[i__31475__auto___42808]));

var G__42809 = (i__31475__auto___42808 + (1));
i__31475__auto___42808 = G__42809;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});})(g__42584__auto___42806))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42584__auto___42806){
return (function (args){
return cljs.core.deref.call(null,g__42584__auto___42806);
});})(g__42584__auto___42806))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42584__auto___42806){
return (function (seq42725){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42725));
});})(g__42584__auto___42806))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31481__auto__ = [];
var len__31474__auto___42812 = arguments.length;
var i__31475__auto___42813 = (0);
while(true){
if((i__31475__auto___42813 < len__31474__auto___42812)){
args__31481__auto__.push((arguments[i__31475__auto___42813]));

var G__42814 = (i__31475__auto___42813 + (1));
i__31475__auto___42813 = G__42814;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__42810_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42810_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq42811){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42811));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__42815_SHARP_){
return (new Date(p1__42815_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1521387316333
