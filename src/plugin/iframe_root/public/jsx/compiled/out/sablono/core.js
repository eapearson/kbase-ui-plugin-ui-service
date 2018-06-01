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
var G__34314__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__34311 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__34312 = cljs.core.seq.call(null,vec__34311);
var first__34313 = cljs.core.first.call(null,seq__34312);
var seq__34312__$1 = cljs.core.next.call(null,seq__34312);
var tag = first__34313;
var body = seq__34312__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__34314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34315__i = 0, G__34315__a = new Array(arguments.length -  0);
while (G__34315__i < G__34315__a.length) {G__34315__a[G__34315__i] = arguments[G__34315__i + 0]; ++G__34315__i;}
  args = new cljs.core.IndexedSeq(G__34315__a,0,null);
} 
return G__34314__delegate.call(this,args);};
G__34314.cljs$lang$maxFixedArity = 0;
G__34314.cljs$lang$applyTo = (function (arglist__34316){
var args = cljs.core.seq(arglist__34316);
return G__34314__delegate(args);
});
G__34314.cljs$core$IFn$_invoke$arity$variadic = G__34314__delegate;
return G__34314;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__31077__auto__ = (function sablono$core$update_arglists_$_iter__34317(s__34318){
return (new cljs.core.LazySeq(null,(function (){
var s__34318__$1 = s__34318;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34318__$1);
if(temp__5457__auto__){
var s__34318__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34318__$2)){
var c__31075__auto__ = cljs.core.chunk_first.call(null,s__34318__$2);
var size__31076__auto__ = cljs.core.count.call(null,c__31075__auto__);
var b__34320 = cljs.core.chunk_buffer.call(null,size__31076__auto__);
if((function (){var i__34319 = (0);
while(true){
if((i__34319 < size__31076__auto__)){
var args = cljs.core._nth.call(null,c__31075__auto__,i__34319);
cljs.core.chunk_append.call(null,b__34320,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__34321 = (i__34319 + (1));
i__34319 = G__34321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34320),sablono$core$update_arglists_$_iter__34317.call(null,cljs.core.chunk_rest.call(null,s__34318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34320),null);
}
} else {
var args = cljs.core.first.call(null,s__34318__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__34317.call(null,cljs.core.rest.call(null,s__34318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31077__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31481__auto__ = [];
var len__31474__auto___34327 = arguments.length;
var i__31475__auto___34328 = (0);
while(true){
if((i__31475__auto___34328 < len__31474__auto___34327)){
args__31481__auto__.push((arguments[i__31475__auto___34328]));

var G__34329 = (i__31475__auto___34328 + (1));
i__31475__auto___34328 = G__34329;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__31077__auto__ = (function sablono$core$iter__34323(s__34324){
return (new cljs.core.LazySeq(null,(function (){
var s__34324__$1 = s__34324;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34324__$1);
if(temp__5457__auto__){
var s__34324__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34324__$2)){
var c__31075__auto__ = cljs.core.chunk_first.call(null,s__34324__$2);
var size__31076__auto__ = cljs.core.count.call(null,c__31075__auto__);
var b__34326 = cljs.core.chunk_buffer.call(null,size__31076__auto__);
if((function (){var i__34325 = (0);
while(true){
if((i__34325 < size__31076__auto__)){
var style = cljs.core._nth.call(null,c__31075__auto__,i__34325);
cljs.core.chunk_append.call(null,b__34326,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__34330 = (i__34325 + (1));
i__34325 = G__34330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34326),sablono$core$iter__34323.call(null,cljs.core.chunk_rest.call(null,s__34324__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34326),null);
}
} else {
var style = cljs.core.first.call(null,s__34324__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__34323.call(null,cljs.core.rest.call(null,s__34324__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31077__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq34322){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34322));
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
sablono.core.link_to34331 = (function sablono$core$link_to34331(var_args){
var args__31481__auto__ = [];
var len__31474__auto___34334 = arguments.length;
var i__31475__auto___34335 = (0);
while(true){
if((i__31475__auto___34335 < len__31474__auto___34334)){
args__31481__auto__.push((arguments[i__31475__auto___34335]));

var G__34336 = (i__31475__auto___34335 + (1));
i__31475__auto___34335 = G__34336;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to34331.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

sablono.core.link_to34331.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to34331.cljs$lang$maxFixedArity = (1);

sablono.core.link_to34331.cljs$lang$applyTo = (function (seq34332){
var G__34333 = cljs.core.first.call(null,seq34332);
var seq34332__$1 = cljs.core.next.call(null,seq34332);
return sablono.core.link_to34331.cljs$core$IFn$_invoke$arity$variadic(G__34333,seq34332__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34331);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to34337 = (function sablono$core$mail_to34337(var_args){
var args__31481__auto__ = [];
var len__31474__auto___34344 = arguments.length;
var i__31475__auto___34345 = (0);
while(true){
if((i__31475__auto___34345 < len__31474__auto___34344)){
args__31481__auto__.push((arguments[i__31475__auto___34345]));

var G__34346 = (i__31475__auto___34345 + (1));
i__31475__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to34337.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

sablono.core.mail_to34337.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__34340){
var vec__34341 = p__34340;
var content = cljs.core.nth.call(null,vec__34341,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30194__auto__ = content;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to34337.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to34337.cljs$lang$applyTo = (function (seq34338){
var G__34339 = cljs.core.first.call(null,seq34338);
var seq34338__$1 = cljs.core.next.call(null,seq34338);
return sablono.core.mail_to34337.cljs$core$IFn$_invoke$arity$variadic(G__34339,seq34338__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34337);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list34347 = (function sablono$core$unordered_list34347(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__31077__auto__ = (function sablono$core$unordered_list34347_$_iter__34348(s__34349){
return (new cljs.core.LazySeq(null,(function (){
var s__34349__$1 = s__34349;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34349__$1);
if(temp__5457__auto__){
var s__34349__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34349__$2)){
var c__31075__auto__ = cljs.core.chunk_first.call(null,s__34349__$2);
var size__31076__auto__ = cljs.core.count.call(null,c__31075__auto__);
var b__34351 = cljs.core.chunk_buffer.call(null,size__31076__auto__);
if((function (){var i__34350 = (0);
while(true){
if((i__34350 < size__31076__auto__)){
var x = cljs.core._nth.call(null,c__31075__auto__,i__34350);
cljs.core.chunk_append.call(null,b__34351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34352 = (i__34350 + (1));
i__34350 = G__34352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34351),sablono$core$unordered_list34347_$_iter__34348.call(null,cljs.core.chunk_rest.call(null,s__34349__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34351),null);
}
} else {
var x = cljs.core.first.call(null,s__34349__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list34347_$_iter__34348.call(null,cljs.core.rest.call(null,s__34349__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31077__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34347);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list34353 = (function sablono$core$ordered_list34353(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__31077__auto__ = (function sablono$core$ordered_list34353_$_iter__34354(s__34355){
return (new cljs.core.LazySeq(null,(function (){
var s__34355__$1 = s__34355;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34355__$1);
if(temp__5457__auto__){
var s__34355__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34355__$2)){
var c__31075__auto__ = cljs.core.chunk_first.call(null,s__34355__$2);
var size__31076__auto__ = cljs.core.count.call(null,c__31075__auto__);
var b__34357 = cljs.core.chunk_buffer.call(null,size__31076__auto__);
if((function (){var i__34356 = (0);
while(true){
if((i__34356 < size__31076__auto__)){
var x = cljs.core._nth.call(null,c__31075__auto__,i__34356);
cljs.core.chunk_append.call(null,b__34357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__34358 = (i__34356 + (1));
i__34356 = G__34358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34357),sablono$core$ordered_list34353_$_iter__34354.call(null,cljs.core.chunk_rest.call(null,s__34355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34357),null);
}
} else {
var x = cljs.core.first.call(null,s__34355__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list34353_$_iter__34354.call(null,cljs.core.rest.call(null,s__34355__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31077__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34353);
/**
 * Create an image element.
 */
sablono.core.image34359 = (function sablono$core$image34359(var_args){
var G__34361 = arguments.length;
switch (G__34361) {
case 1:
return sablono.core.image34359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image34359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image34359.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image34359.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image34359.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34359);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__34363_SHARP_,p2__34364_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34363_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34364_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__34365_SHARP_,p2__34366_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34365_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34366_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__34368 = arguments.length;
switch (G__34368) {
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
sablono.core.color_field34370 = (function sablono$core$color_field34370(var_args){
var G__34372 = arguments.length;
switch (G__34372) {
case 1:
return sablono.core.color_field34370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field34370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field34370.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34301__auto__);
});

sablono.core.color_field34370.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.color_field34370.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34370);

/**
 * Creates a date input field.
 */
sablono.core.date_field34373 = (function sablono$core$date_field34373(var_args){
var G__34375 = arguments.length;
switch (G__34375) {
case 1:
return sablono.core.date_field34373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field34373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field34373.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34301__auto__);
});

sablono.core.date_field34373.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.date_field34373.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34373);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field34376 = (function sablono$core$datetime_field34376(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 1:
return sablono.core.datetime_field34376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field34376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field34376.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34301__auto__);
});

sablono.core.datetime_field34376.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.datetime_field34376.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34376);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field34379 = (function sablono$core$datetime_local_field34379(var_args){
var G__34381 = arguments.length;
switch (G__34381) {
case 1:
return sablono.core.datetime_local_field34379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field34379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field34379.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34301__auto__);
});

sablono.core.datetime_local_field34379.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.datetime_local_field34379.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34379);

/**
 * Creates a email input field.
 */
sablono.core.email_field34382 = (function sablono$core$email_field34382(var_args){
var G__34384 = arguments.length;
switch (G__34384) {
case 1:
return sablono.core.email_field34382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field34382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field34382.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34301__auto__);
});

sablono.core.email_field34382.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.email_field34382.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34382);

/**
 * Creates a file input field.
 */
sablono.core.file_field34385 = (function sablono$core$file_field34385(var_args){
var G__34387 = arguments.length;
switch (G__34387) {
case 1:
return sablono.core.file_field34385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field34385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field34385.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34301__auto__);
});

sablono.core.file_field34385.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.file_field34385.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34385);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field34388 = (function sablono$core$hidden_field34388(var_args){
var G__34390 = arguments.length;
switch (G__34390) {
case 1:
return sablono.core.hidden_field34388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field34388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field34388.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34301__auto__);
});

sablono.core.hidden_field34388.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.hidden_field34388.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34388);

/**
 * Creates a month input field.
 */
sablono.core.month_field34391 = (function sablono$core$month_field34391(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
case 1:
return sablono.core.month_field34391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field34391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field34391.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34301__auto__);
});

sablono.core.month_field34391.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.month_field34391.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34391);

/**
 * Creates a number input field.
 */
sablono.core.number_field34394 = (function sablono$core$number_field34394(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 1:
return sablono.core.number_field34394.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field34394.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field34394.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34301__auto__);
});

sablono.core.number_field34394.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.number_field34394.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34394);

/**
 * Creates a password input field.
 */
sablono.core.password_field34397 = (function sablono$core$password_field34397(var_args){
var G__34399 = arguments.length;
switch (G__34399) {
case 1:
return sablono.core.password_field34397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field34397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field34397.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34301__auto__);
});

sablono.core.password_field34397.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.password_field34397.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34397);

/**
 * Creates a range input field.
 */
sablono.core.range_field34400 = (function sablono$core$range_field34400(var_args){
var G__34402 = arguments.length;
switch (G__34402) {
case 1:
return sablono.core.range_field34400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field34400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field34400.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34301__auto__);
});

sablono.core.range_field34400.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.range_field34400.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34400);

/**
 * Creates a search input field.
 */
sablono.core.search_field34403 = (function sablono$core$search_field34403(var_args){
var G__34405 = arguments.length;
switch (G__34405) {
case 1:
return sablono.core.search_field34403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field34403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field34403.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34301__auto__);
});

sablono.core.search_field34403.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.search_field34403.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34403);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field34406 = (function sablono$core$tel_field34406(var_args){
var G__34408 = arguments.length;
switch (G__34408) {
case 1:
return sablono.core.tel_field34406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field34406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field34406.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34301__auto__);
});

sablono.core.tel_field34406.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.tel_field34406.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34406);

/**
 * Creates a text input field.
 */
sablono.core.text_field34409 = (function sablono$core$text_field34409(var_args){
var G__34411 = arguments.length;
switch (G__34411) {
case 1:
return sablono.core.text_field34409.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field34409.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field34409.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34301__auto__);
});

sablono.core.text_field34409.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.text_field34409.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34409);

/**
 * Creates a time input field.
 */
sablono.core.time_field34412 = (function sablono$core$time_field34412(var_args){
var G__34414 = arguments.length;
switch (G__34414) {
case 1:
return sablono.core.time_field34412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field34412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field34412.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34301__auto__);
});

sablono.core.time_field34412.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.time_field34412.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34412);

/**
 * Creates a url input field.
 */
sablono.core.url_field34415 = (function sablono$core$url_field34415(var_args){
var G__34417 = arguments.length;
switch (G__34417) {
case 1:
return sablono.core.url_field34415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field34415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field34415.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34301__auto__);
});

sablono.core.url_field34415.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.url_field34415.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34415);

/**
 * Creates a week input field.
 */
sablono.core.week_field34418 = (function sablono$core$week_field34418(var_args){
var G__34420 = arguments.length;
switch (G__34420) {
case 1:
return sablono.core.week_field34418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field34418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field34418.cljs$core$IFn$_invoke$arity$1 = (function (name__34301__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34301__auto__);
});

sablono.core.week_field34418.cljs$core$IFn$_invoke$arity$2 = (function (name__34301__auto__,value__34302__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__34301__auto__,value__34302__auto__);
});

sablono.core.week_field34418.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34418);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34438 = (function sablono$core$check_box34438(var_args){
var G__34440 = arguments.length;
switch (G__34440) {
case 1:
return sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34438.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34438.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34438);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34442 = (function sablono$core$radio_button34442(var_args){
var G__34444 = arguments.length;
switch (G__34444) {
case 1:
return sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34442.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34442.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34442);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34446 = (function sablono$core$select_options34446(coll){
var iter__31077__auto__ = (function sablono$core$select_options34446_$_iter__34447(s__34448){
return (new cljs.core.LazySeq(null,(function (){
var s__34448__$1 = s__34448;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__34448__$1);
if(temp__5457__auto__){
var s__34448__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34448__$2)){
var c__31075__auto__ = cljs.core.chunk_first.call(null,s__34448__$2);
var size__31076__auto__ = cljs.core.count.call(null,c__31075__auto__);
var b__34450 = cljs.core.chunk_buffer.call(null,size__31076__auto__);
if((function (){var i__34449 = (0);
while(true){
if((i__34449 < size__31076__auto__)){
var x = cljs.core._nth.call(null,c__31075__auto__,i__34449);
cljs.core.chunk_append.call(null,b__34450,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34451 = x;
var text = cljs.core.nth.call(null,vec__34451,(0),null);
var val = cljs.core.nth.call(null,vec__34451,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34451,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34446.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34457 = (i__34449 + (1));
i__34449 = G__34457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34450),sablono$core$select_options34446_$_iter__34447.call(null,cljs.core.chunk_rest.call(null,s__34448__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34450),null);
}
} else {
var x = cljs.core.first.call(null,s__34448__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34454 = x;
var text = cljs.core.nth.call(null,vec__34454,(0),null);
var val = cljs.core.nth.call(null,vec__34454,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34454,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34446.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34446_$_iter__34447.call(null,cljs.core.rest.call(null,s__34448__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31077__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34446);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34458 = (function sablono$core$drop_down34458(var_args){
var G__34460 = arguments.length;
switch (G__34460) {
case 2:
return sablono.core.drop_down34458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34458.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down34458.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34458.call(null,name,options,null);
});

sablono.core.drop_down34458.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down34458.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34458);
/**
 * Creates a text area element.
 */
sablono.core.text_area34462 = (function sablono$core$text_area34462(var_args){
var G__34464 = arguments.length;
switch (G__34464) {
case 1:
return sablono.core.text_area34462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area34462.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area34462.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30194__auto__ = value;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area34462.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34462);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34466 = (function sablono$core$label34466(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34466);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34467 = (function sablono$core$submit_button34467(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34467);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34468 = (function sablono$core$reset_button34468(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34468);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34469 = (function sablono$core$form_to34469(var_args){
var args__31481__auto__ = [];
var len__31474__auto___34476 = arguments.length;
var i__31475__auto___34477 = (0);
while(true){
if((i__31475__auto___34477 < len__31474__auto___34476)){
args__31481__auto__.push((arguments[i__31475__auto___34477]));

var G__34478 = (i__31475__auto___34477 + (1));
i__31475__auto___34477 = G__34478;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34469.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

sablono.core.form_to34469.cljs$core$IFn$_invoke$arity$variadic = (function (p__34472,body){
var vec__34473 = p__34472;
var method = cljs.core.nth.call(null,vec__34473,(0),null);
var action = cljs.core.nth.call(null,vec__34473,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to34469.cljs$lang$maxFixedArity = (1);

sablono.core.form_to34469.cljs$lang$applyTo = (function (seq34470){
var G__34471 = cljs.core.first.call(null,seq34470);
var seq34470__$1 = cljs.core.next.call(null,seq34470);
return sablono.core.form_to34469.cljs$core$IFn$_invoke$arity$variadic(G__34471,seq34470__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34469);

//# sourceMappingURL=core.js.map?rel=1521387308545
