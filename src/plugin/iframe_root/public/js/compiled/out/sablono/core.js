// Compiled by ClojureScript 1.9.946 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__34313__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__34310 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__34311 = cljs.core.seq.call(null,vec__34310);
var first__34312 = cljs.core.first.call(null,seq__34311);
var seq__34311__$1 = cljs.core.next.call(null,seq__34311);
var tag = first__34312;
var body = seq__34311__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__34313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34314__i = 0, G__34314__a = new Array(arguments.length -  0);
while (G__34314__i < G__34314__a.length) {G__34314__a[G__34314__i] = arguments[G__34314__i + 0]; ++G__34314__i;}
  args = new cljs.core.IndexedSeq(G__34314__a,0,null);
} 
return G__34313__delegate.call(this,args);};
G__34313.cljs$lang$maxFixedArity = 0;
G__34313.cljs$lang$applyTo = (function (arglist__34315){
var args = cljs.core.seq(arglist__34315);
return G__34313__delegate(args);
});
G__34313.cljs$core$IFn$_invoke$arity$variadic = G__34313__delegate;
return G__34313;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31076__auto__ = (function sablono$core$update_arglists_$_iter__34316(s__34317){
return (new cljs.core.LazySeq(null,(function (){
var s__34317__$1 = s__34317;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34317__$1);
if(temp__5457__auto__){
var s__34317__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34317__$2)){
var c__31074__auto__ = cljs.core.chunk_first.call(null,s__34317__$2);
var size__31075__auto__ = cljs.core.count.call(null,c__31074__auto__);
var b__34319 = cljs.core.chunk_buffer.call(null,size__31075__auto__);
if((function (){var i__34318 = (0);
while(true){
if((i__34318 < size__31075__auto__)){
var args = cljs.core._nth.call(null,c__31074__auto__,i__34318);
cljs.core.chunk_append.call(null,b__34319,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34320 = (i__34318 + (1));
i__34318 = G__34320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34319),sablono$core$update_arglists_$_iter__34316.call(null,cljs.core.chunk_rest.call(null,s__34317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34319),null);
}
} else {
var args = cljs.core.first.call(null,s__34317__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__34316.call(null,cljs.core.rest.call(null,s__34317__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31076__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31480__auto__ = [];
var len__31473__auto___34326 = arguments.length;
var i__31474__auto___34327 = (0);
while(true){
if((i__31474__auto___34327 < len__31473__auto___34326)){
args__31480__auto__.push((arguments[i__31474__auto___34327]));

var G__34328 = (i__31474__auto___34327 + (1));
i__31474__auto___34327 = G__34328;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31076__auto__ = (function sablono$core$iter__34322(s__34323){
return (new cljs.core.LazySeq(null,(function (){
var s__34323__$1 = s__34323;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34323__$1);
if(temp__5457__auto__){
var s__34323__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34323__$2)){
var c__31074__auto__ = cljs.core.chunk_first.call(null,s__34323__$2);
var size__31075__auto__ = cljs.core.count.call(null,c__31074__auto__);
var b__34325 = cljs.core.chunk_buffer.call(null,size__31075__auto__);
if((function (){var i__34324 = (0);
while(true){
if((i__34324 < size__31075__auto__)){
var style = cljs.core._nth.call(null,c__31074__auto__,i__34324);
cljs.core.chunk_append.call(null,b__34325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34329 = (i__34324 + (1));
i__34324 = G__34329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34325),sablono$core$iter__34322.call(null,cljs.core.chunk_rest.call(null,s__34323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34325),null);
}
} else {
var style = cljs.core.first.call(null,s__34323__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__34322.call(null,cljs.core.rest.call(null,s__34323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31076__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq34321){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34321));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to34330 = (function sablono$core$link_to34330(var_args){
var args__31480__auto__ = [];
var len__31473__auto___34333 = arguments.length;
var i__31474__auto___34334 = (0);
while(true){
if((i__31474__auto___34334 < len__31473__auto___34333)){
args__31480__auto__.push((arguments[i__31474__auto___34334]));

var G__34335 = (i__31474__auto___34334 + (1));
i__31474__auto___34334 = G__34335;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34330.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

sablono.core.link_to34330.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to34330.cljs$lang$maxFixedArity = (1);

sablono.core.link_to34330.cljs$lang$applyTo = (function (seq34331){
var G__34332 = cljs.core.first.call(null,seq34331);
var seq34331__$1 = cljs.core.next.call(null,seq34331);
return sablono.core.link_to34330.cljs$core$IFn$_invoke$arity$variadic(G__34332,seq34331__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34330);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to34336 = (function sablono$core$mail_to34336(var_args){
var args__31480__auto__ = [];
var len__31473__auto___34343 = arguments.length;
var i__31474__auto___34344 = (0);
while(true){
if((i__31474__auto___34344 < len__31473__auto___34343)){
args__31480__auto__.push((arguments[i__31474__auto___34344]));

var G__34345 = (i__31474__auto___34344 + (1));
i__31474__auto___34344 = G__34345;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to34336.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

sablono.core.mail_to34336.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__34339){
var vec__34340 = p__34339;
var content = cljs.core.nth.call(null,vec__34340,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30194__auto__ = content;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to34336.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to34336.cljs$lang$applyTo = (function (seq34337){
var G__34338 = cljs.core.first.call(null,seq34337);
var seq34337__$1 = cljs.core.next.call(null,seq34337);
return sablono.core.mail_to34336.cljs$core$IFn$_invoke$arity$variadic(G__34338,seq34337__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34336);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list34346 = (function sablono$core$unordered_list34346(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__31076__auto__ = (function sablono$core$unordered_list34346_$_iter__34347(s__34348){
return (new cljs.core.LazySeq(null,(function (){
var s__34348__$1 = s__34348;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34348__$1);
if(temp__5457__auto__){
var s__34348__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34348__$2)){
var c__31074__auto__ = cljs.core.chunk_first.call(null,s__34348__$2);
var size__31075__auto__ = cljs.core.count.call(null,c__31074__auto__);
var b__34350 = cljs.core.chunk_buffer.call(null,size__31075__auto__);
if((function (){var i__34349 = (0);
while(true){
if((i__34349 < size__31075__auto__)){
var x = cljs.core._nth.call(null,c__31074__auto__,i__34349);
cljs.core.chunk_append.call(null,b__34350,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34351 = (i__34349 + (1));
i__34349 = G__34351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34350),sablono$core$unordered_list34346_$_iter__34347.call(null,cljs.core.chunk_rest.call(null,s__34348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34350),null);
}
} else {
var x = cljs.core.first.call(null,s__34348__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list34346_$_iter__34347.call(null,cljs.core.rest.call(null,s__34348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31076__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34346);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list34352 = (function sablono$core$ordered_list34352(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__31076__auto__ = (function sablono$core$ordered_list34352_$_iter__34353(s__34354){
return (new cljs.core.LazySeq(null,(function (){
var s__34354__$1 = s__34354;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34354__$1);
if(temp__5457__auto__){
var s__34354__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34354__$2)){
var c__31074__auto__ = cljs.core.chunk_first.call(null,s__34354__$2);
var size__31075__auto__ = cljs.core.count.call(null,c__31074__auto__);
var b__34356 = cljs.core.chunk_buffer.call(null,size__31075__auto__);
if((function (){var i__34355 = (0);
while(true){
if((i__34355 < size__31075__auto__)){
var x = cljs.core._nth.call(null,c__31074__auto__,i__34355);
cljs.core.chunk_append.call(null,b__34356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34357 = (i__34355 + (1));
i__34355 = G__34357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34356),sablono$core$ordered_list34352_$_iter__34353.call(null,cljs.core.chunk_rest.call(null,s__34354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34356),null);
}
} else {
var x = cljs.core.first.call(null,s__34354__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list34352_$_iter__34353.call(null,cljs.core.rest.call(null,s__34354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31076__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34352);
/**
 * Create an image element.
 */
sablono.core.image34358 = (function sablono$core$image34358(var_args){
var G__34360 = arguments.length;
switch (G__34360) {
case 1:
return sablono.core.image34358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image34358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image34358.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image34358.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image34358.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34358);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__34362_SHARP_,p2__34363_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34362_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34363_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__34364_SHARP_,p2__34365_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34364_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34365_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__34367 = arguments.length;
switch (G__34367) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30194__auto__ = value;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field34369 = (function sablono$core$color_field34369(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 1:
return sablono.core.color_field34369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field34369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field34369.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34300__auto__);
});

sablono.core.color_field34369.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.color_field34369.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34369);

/**
 * Creates a date input field.
 */
sablono.core.date_field34372 = (function sablono$core$date_field34372(var_args){
var G__34374 = arguments.length;
switch (G__34374) {
case 1:
return sablono.core.date_field34372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field34372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field34372.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34300__auto__);
});

sablono.core.date_field34372.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.date_field34372.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34372);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field34375 = (function sablono$core$datetime_field34375(var_args){
var G__34377 = arguments.length;
switch (G__34377) {
case 1:
return sablono.core.datetime_field34375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field34375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field34375.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34300__auto__);
});

sablono.core.datetime_field34375.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.datetime_field34375.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34375);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field34378 = (function sablono$core$datetime_local_field34378(var_args){
var G__34380 = arguments.length;
switch (G__34380) {
case 1:
return sablono.core.datetime_local_field34378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field34378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field34378.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34300__auto__);
});

sablono.core.datetime_local_field34378.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.datetime_local_field34378.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34378);

/**
 * Creates a email input field.
 */
sablono.core.email_field34381 = (function sablono$core$email_field34381(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
case 1:
return sablono.core.email_field34381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field34381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field34381.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34300__auto__);
});

sablono.core.email_field34381.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.email_field34381.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34381);

/**
 * Creates a file input field.
 */
sablono.core.file_field34384 = (function sablono$core$file_field34384(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 1:
return sablono.core.file_field34384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field34384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field34384.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34300__auto__);
});

sablono.core.file_field34384.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.file_field34384.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34384);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field34387 = (function sablono$core$hidden_field34387(var_args){
var G__34389 = arguments.length;
switch (G__34389) {
case 1:
return sablono.core.hidden_field34387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field34387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field34387.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34300__auto__);
});

sablono.core.hidden_field34387.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.hidden_field34387.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34387);

/**
 * Creates a month input field.
 */
sablono.core.month_field34390 = (function sablono$core$month_field34390(var_args){
var G__34392 = arguments.length;
switch (G__34392) {
case 1:
return sablono.core.month_field34390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field34390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field34390.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34300__auto__);
});

sablono.core.month_field34390.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.month_field34390.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34390);

/**
 * Creates a number input field.
 */
sablono.core.number_field34393 = (function sablono$core$number_field34393(var_args){
var G__34395 = arguments.length;
switch (G__34395) {
case 1:
return sablono.core.number_field34393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field34393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field34393.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34300__auto__);
});

sablono.core.number_field34393.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.number_field34393.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34393);

/**
 * Creates a password input field.
 */
sablono.core.password_field34396 = (function sablono$core$password_field34396(var_args){
var G__34398 = arguments.length;
switch (G__34398) {
case 1:
return sablono.core.password_field34396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field34396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field34396.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34300__auto__);
});

sablono.core.password_field34396.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.password_field34396.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34396);

/**
 * Creates a range input field.
 */
sablono.core.range_field34399 = (function sablono$core$range_field34399(var_args){
var G__34401 = arguments.length;
switch (G__34401) {
case 1:
return sablono.core.range_field34399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field34399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field34399.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34300__auto__);
});

sablono.core.range_field34399.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.range_field34399.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34399);

/**
 * Creates a search input field.
 */
sablono.core.search_field34402 = (function sablono$core$search_field34402(var_args){
var G__34404 = arguments.length;
switch (G__34404) {
case 1:
return sablono.core.search_field34402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field34402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field34402.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34300__auto__);
});

sablono.core.search_field34402.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.search_field34402.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34402);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field34405 = (function sablono$core$tel_field34405(var_args){
var G__34407 = arguments.length;
switch (G__34407) {
case 1:
return sablono.core.tel_field34405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field34405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field34405.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34300__auto__);
});

sablono.core.tel_field34405.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.tel_field34405.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34405);

/**
 * Creates a text input field.
 */
sablono.core.text_field34408 = (function sablono$core$text_field34408(var_args){
var G__34410 = arguments.length;
switch (G__34410) {
case 1:
return sablono.core.text_field34408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field34408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field34408.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34300__auto__);
});

sablono.core.text_field34408.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.text_field34408.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34408);

/**
 * Creates a time input field.
 */
sablono.core.time_field34411 = (function sablono$core$time_field34411(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
case 1:
return sablono.core.time_field34411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field34411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field34411.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34300__auto__);
});

sablono.core.time_field34411.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.time_field34411.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34411);

/**
 * Creates a url input field.
 */
sablono.core.url_field34414 = (function sablono$core$url_field34414(var_args){
var G__34416 = arguments.length;
switch (G__34416) {
case 1:
return sablono.core.url_field34414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field34414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field34414.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34300__auto__);
});

sablono.core.url_field34414.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.url_field34414.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34414);

/**
 * Creates a week input field.
 */
sablono.core.week_field34417 = (function sablono$core$week_field34417(var_args){
var G__34419 = arguments.length;
switch (G__34419) {
case 1:
return sablono.core.week_field34417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field34417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field34417.cljs$core$IFn$_invoke$arity$1 = (function (name__34300__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34300__auto__);
});

sablono.core.week_field34417.cljs$core$IFn$_invoke$arity$2 = (function (name__34300__auto__,value__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34300__auto__,value__34301__auto__);
});

sablono.core.week_field34417.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34417);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34437 = (function sablono$core$check_box34437(var_args){
var G__34439 = arguments.length;
switch (G__34439) {
case 1:
return sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34437.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34437.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34437);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34441 = (function sablono$core$radio_button34441(var_args){
var G__34443 = arguments.length;
switch (G__34443) {
case 1:
return sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34441.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34441.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34441);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34445 = (function sablono$core$select_options34445(coll){
var iter__31076__auto__ = (function sablono$core$select_options34445_$_iter__34446(s__34447){
return (new cljs.core.LazySeq(null,(function (){
var s__34447__$1 = s__34447;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34447__$1);
if(temp__5457__auto__){
var s__34447__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34447__$2)){
var c__31074__auto__ = cljs.core.chunk_first.call(null,s__34447__$2);
var size__31075__auto__ = cljs.core.count.call(null,c__31074__auto__);
var b__34449 = cljs.core.chunk_buffer.call(null,size__31075__auto__);
if((function (){var i__34448 = (0);
while(true){
if((i__34448 < size__31075__auto__)){
var x = cljs.core._nth.call(null,c__31074__auto__,i__34448);
cljs.core.chunk_append.call(null,b__34449,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34450 = x;
var text = cljs.core.nth.call(null,vec__34450,(0),null);
var val = cljs.core.nth.call(null,vec__34450,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34450,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34445.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34456 = (i__34448 + (1));
i__34448 = G__34456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34449),sablono$core$select_options34445_$_iter__34446.call(null,cljs.core.chunk_rest.call(null,s__34447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34449),null);
}
} else {
var x = cljs.core.first.call(null,s__34447__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34453 = x;
var text = cljs.core.nth.call(null,vec__34453,(0),null);
var val = cljs.core.nth.call(null,vec__34453,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34453,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34445.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34445_$_iter__34446.call(null,cljs.core.rest.call(null,s__34447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31076__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34445);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34457 = (function sablono$core$drop_down34457(var_args){
var G__34459 = arguments.length;
switch (G__34459) {
case 2:
return sablono.core.drop_down34457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34457.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down34457.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34457.call(null,name,options,null);
});

sablono.core.drop_down34457.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down34457.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34457);
/**
 * Creates a text area element.
 */
sablono.core.text_area34461 = (function sablono$core$text_area34461(var_args){
var G__34463 = arguments.length;
switch (G__34463) {
case 1:
return sablono.core.text_area34461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area34461.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area34461.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30194__auto__ = value;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area34461.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34461);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34465 = (function sablono$core$label34465(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34465);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34466 = (function sablono$core$submit_button34466(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34466);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34467 = (function sablono$core$reset_button34467(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34467);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34468 = (function sablono$core$form_to34468(var_args){
var args__31480__auto__ = [];
var len__31473__auto___34475 = arguments.length;
var i__31474__auto___34476 = (0);
while(true){
if((i__31474__auto___34476 < len__31473__auto___34475)){
args__31480__auto__.push((arguments[i__31474__auto___34476]));

var G__34477 = (i__31474__auto___34476 + (1));
i__31474__auto___34476 = G__34477;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34468.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

sablono.core.form_to34468.cljs$core$IFn$_invoke$arity$variadic = (function (p__34471,body){
var vec__34472 = p__34471;
var method = cljs.core.nth.call(null,vec__34472,(0),null);
var action = cljs.core.nth.call(null,vec__34472,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to34468.cljs$lang$maxFixedArity = (1);

sablono.core.form_to34468.cljs$lang$applyTo = (function (seq34469){
var G__34470 = cljs.core.first.call(null,seq34469);
var seq34469__$1 = cljs.core.next.call(null,seq34469);
return sablono.core.form_to34468.cljs$core$IFn$_invoke$arity$variadic(G__34470,seq34469__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34468);

//# sourceMappingURL=core.js.map?rel=1523222477789