// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__30928__auto__ = (((value == null))?null:value);
var m__30929__auto__ = (devtools.format._header[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,value);
} else {
var m__30929__auto____$1 = (devtools.format._header["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__30928__auto__ = (((value == null))?null:value);
var m__30929__auto__ = (devtools.format._has_body[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,value);
} else {
var m__30929__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__30928__auto__ = (((value == null))?null:value);
var m__30929__auto__ = (devtools.format._body[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,value);
} else {
var m__30929__auto____$1 = (devtools.format._body["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35141 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35141["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35142 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35142["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35143 = temp__5455__auto____$2;
return (o35143["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35144 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35144["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35145 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35145["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35146 = temp__5455__auto____$2;
return (o35146["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35147 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35147["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35148 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35148["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35149 = temp__5455__auto____$2;
return (o35149["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35150 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35150["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35151 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35151["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35152 = temp__5455__auto____$2;
return (o35152["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35153 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35153["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35154 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35154["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35155 = temp__5455__auto____$2;
return (o35155["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35156 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35156["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35157 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35157["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35158 = temp__5455__auto____$2;
return (o35158["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o35159 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35159["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35160 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35160["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35161 = temp__5455__auto____$2;
return (o35161["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35163 = arguments.length;
var i__31475__auto___35164 = (0);
while(true){
if((i__31475__auto___35164 < len__31474__auto___35163)){
args__31481__auto__.push((arguments[i__31475__auto___35164]));

var G__35165 = (i__31475__auto___35164 + (1));
i__31475__auto___35164 = G__35165;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35162){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35162));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35167 = arguments.length;
var i__31475__auto___35168 = (0);
while(true){
if((i__31475__auto___35168 < len__31474__auto___35167)){
args__31481__auto__.push((arguments[i__31475__auto___35168]));

var G__35169 = (i__31475__auto___35168 + (1));
i__31475__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35166){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35166));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35171 = arguments.length;
var i__31475__auto___35172 = (0);
while(true){
if((i__31475__auto___35172 < len__31474__auto___35171)){
args__31481__auto__.push((arguments[i__31475__auto___35172]));

var G__35173 = (i__31475__auto___35172 + (1));
i__31475__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35170){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35170));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35175 = arguments.length;
var i__31475__auto___35176 = (0);
while(true){
if((i__31475__auto___35176 < len__31474__auto___35175)){
args__31481__auto__.push((arguments[i__31475__auto___35176]));

var G__35177 = (i__31475__auto___35176 + (1));
i__31475__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35174){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35174));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35179 = arguments.length;
var i__31475__auto___35180 = (0);
while(true){
if((i__31475__auto___35180 < len__31474__auto___35179)){
args__31481__auto__.push((arguments[i__31475__auto___35180]));

var G__35181 = (i__31475__auto___35180 + (1));
i__31475__auto___35180 = G__35181;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35178){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35178));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35183 = arguments.length;
var i__31475__auto___35184 = (0);
while(true){
if((i__31475__auto___35184 < len__31474__auto___35183)){
args__31481__auto__.push((arguments[i__31475__auto___35184]));

var G__35185 = (i__31475__auto___35184 + (1));
i__31475__auto___35184 = G__35185;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35182){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35182));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35187 = arguments.length;
var i__31475__auto___35188 = (0);
while(true){
if((i__31475__auto___35188 < len__31474__auto___35187)){
args__31481__auto__.push((arguments[i__31475__auto___35188]));

var G__35189 = (i__31475__auto___35188 + (1));
i__31475__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35186){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35186));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35197 = arguments.length;
var i__31475__auto___35198 = (0);
while(true){
if((i__31475__auto___35198 < len__31474__auto___35197)){
args__31481__auto__.push((arguments[i__31475__auto___35198]));

var G__35199 = (i__31475__auto___35198 + (1));
i__31475__auto___35198 = G__35199;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35193){
var vec__35194 = p__35193;
var state_override = cljs.core.nth.call(null,vec__35194,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35194,state_override){
return (function (p1__35190_SHARP_){
return cljs.core.merge.call(null,p1__35190_SHARP_,state_override);
});})(vec__35194,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35191){
var G__35192 = cljs.core.first.call(null,seq35191);
var seq35191__$1 = cljs.core.next.call(null,seq35191);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35192,seq35191__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35201 = arguments.length;
var i__31475__auto___35202 = (0);
while(true){
if((i__31475__auto___35202 < len__31474__auto___35201)){
args__31481__auto__.push((arguments[i__31475__auto___35202]));

var G__35203 = (i__31475__auto___35202 + (1));
i__31475__auto___35202 = G__35203;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((0) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31482__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35200){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35200));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31481__auto__ = [];
var len__31474__auto___35206 = arguments.length;
var i__31475__auto___35207 = (0);
while(true){
if((i__31475__auto___35207 < len__31474__auto___35206)){
args__31481__auto__.push((arguments[i__31475__auto___35207]));

var G__35208 = (i__31475__auto___35207 + (1));
i__31475__auto___35207 = G__35208;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35204){
var G__35205 = cljs.core.first.call(null,seq35204);
var seq35204__$1 = cljs.core.next.call(null,seq35204);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35205,seq35204__$1);
});


//# sourceMappingURL=format.js.map?rel=1521387309133
