// Compiled by ClojureScript 1.9.946 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__32563 = arguments.length;
switch (G__32563) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__32564 = opts;
var map__32564__$1 = ((((!((map__32564 == null)))?((((map__32564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32564):map__32564);
var ref = cljs.core.get.call(null,map__32564__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__32564__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__32566 = cljs.core.count.call(null,refs);
switch (G__32566) {
case (1):
var vec__32567 = refs;
var a = cljs.core.nth.call(null,vec__32567,(0),null);
return ((function (vec__32567,a,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__32567,a,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__32570 = refs;
var a = cljs.core.nth.call(null,vec__32570,(0),null);
var b = cljs.core.nth.call(null,vec__32570,(1),null);
return ((function (vec__32570,a,b,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__32570,a,b,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__32573 = refs;
var a = cljs.core.nth.call(null,vec__32573,(0),null);
var b = cljs.core.nth.call(null,vec__32573,(1),null);
var c = cljs.core.nth.call(null,vec__32573,(2),null);
return ((function (vec__32573,a,b,c,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__32573,a,b,c,G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__32566,map__32564,map__32564__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__32576 = ref;
cljs.core.reset_BANG_.call(null,G__32576,recalc.call(null));

return G__32576;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__32564,map__32564__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__32564,map__32564__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__32564,map__32564__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__32564,map__32564__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__32577_32583 = cljs.core.seq.call(null,refs);
var chunk__32578_32584 = null;
var count__32579_32585 = (0);
var i__32580_32586 = (0);
while(true){
if((i__32580_32586 < count__32579_32585)){
var ref_32587__$1 = cljs.core._nth.call(null,chunk__32578_32584,i__32580_32586);
cljs.core.add_watch.call(null,ref_32587__$1,key,watch);

var G__32588 = seq__32577_32583;
var G__32589 = chunk__32578_32584;
var G__32590 = count__32579_32585;
var G__32591 = (i__32580_32586 + (1));
seq__32577_32583 = G__32588;
chunk__32578_32584 = G__32589;
count__32579_32585 = G__32590;
i__32580_32586 = G__32591;
continue;
} else {
var temp__5457__auto___32592 = cljs.core.seq.call(null,seq__32577_32583);
if(temp__5457__auto___32592){
var seq__32577_32593__$1 = temp__5457__auto___32592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32577_32593__$1)){
var c__31125__auto___32594 = cljs.core.chunk_first.call(null,seq__32577_32593__$1);
var G__32595 = cljs.core.chunk_rest.call(null,seq__32577_32593__$1);
var G__32596 = c__31125__auto___32594;
var G__32597 = cljs.core.count.call(null,c__31125__auto___32594);
var G__32598 = (0);
seq__32577_32583 = G__32595;
chunk__32578_32584 = G__32596;
count__32579_32585 = G__32597;
i__32580_32586 = G__32598;
continue;
} else {
var ref_32599__$1 = cljs.core.first.call(null,seq__32577_32593__$1);
cljs.core.add_watch.call(null,ref_32599__$1,key,watch);

var G__32600 = cljs.core.next.call(null,seq__32577_32593__$1);
var G__32601 = null;
var G__32602 = (0);
var G__32603 = (0);
seq__32577_32583 = G__32600;
chunk__32578_32584 = G__32601;
count__32579_32585 = G__32602;
i__32580_32586 = G__32603;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1523222476854
