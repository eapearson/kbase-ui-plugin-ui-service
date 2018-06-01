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
var x__30927__auto__ = (((value == null))?null:value);
var m__30928__auto__ = (devtools.format._header[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,value);
} else {
var m__30928__auto____$1 = (devtools.format._header["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,value);
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
var x__30927__auto__ = (((value == null))?null:value);
var m__30928__auto__ = (devtools.format._has_body[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,value);
} else {
var m__30928__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,value);
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
var x__30927__auto__ = (((value == null))?null:value);
var m__30928__auto__ = (devtools.format._body[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,value);
} else {
var m__30928__auto____$1 = (devtools.format._body["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,value);
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
var o35140 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35140["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35141 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35141["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35142 = temp__5455__auto____$2;
return (o35142["make_template"]);
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
var o35143 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35143["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35144 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35144["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35145 = temp__5455__auto____$2;
return (o35145["make_group"]);
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
var o35146 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35146["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35147 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35147["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35148 = temp__5455__auto____$2;
return (o35148["make_reference"]);
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
var o35149 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35149["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35150 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35150["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35151 = temp__5455__auto____$2;
return (o35151["make_surrogate"]);
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
var o35152 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35152["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35153 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35153["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35154 = temp__5455__auto____$2;
return (o35154["render_markup"]);
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
var o35155 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35155["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35156 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35156["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35157 = temp__5455__auto____$2;
return (o35157["_LT_header_GT_"]);
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
var o35158 = temp__5455__auto__;
var temp__5455__auto____$1 = (o35158["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o35159 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o35159["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o35160 = temp__5455__auto____$2;
return (o35160["_LT_standard_body_GT_"]);
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
var args__31480__auto__ = [];
var len__31473__auto___35162 = arguments.length;
var i__31474__auto___35163 = (0);
while(true){
if((i__31474__auto___35163 < len__31473__auto___35162)){
args__31480__auto__.push((arguments[i__31474__auto___35163]));

var G__35164 = (i__31474__auto___35163 + (1));
i__31474__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35161){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35161));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35166 = arguments.length;
var i__31474__auto___35167 = (0);
while(true){
if((i__31474__auto___35167 < len__31473__auto___35166)){
args__31480__auto__.push((arguments[i__31474__auto___35167]));

var G__35168 = (i__31474__auto___35167 + (1));
i__31474__auto___35167 = G__35168;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35165){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35165));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35170 = arguments.length;
var i__31474__auto___35171 = (0);
while(true){
if((i__31474__auto___35171 < len__31473__auto___35170)){
args__31480__auto__.push((arguments[i__31474__auto___35171]));

var G__35172 = (i__31474__auto___35171 + (1));
i__31474__auto___35171 = G__35172;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35169){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35169));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35174 = arguments.length;
var i__31474__auto___35175 = (0);
while(true){
if((i__31474__auto___35175 < len__31473__auto___35174)){
args__31480__auto__.push((arguments[i__31474__auto___35175]));

var G__35176 = (i__31474__auto___35175 + (1));
i__31474__auto___35175 = G__35176;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35173){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35173));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35178 = arguments.length;
var i__31474__auto___35179 = (0);
while(true){
if((i__31474__auto___35179 < len__31473__auto___35178)){
args__31480__auto__.push((arguments[i__31474__auto___35179]));

var G__35180 = (i__31474__auto___35179 + (1));
i__31474__auto___35179 = G__35180;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35177){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35177));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35182 = arguments.length;
var i__31474__auto___35183 = (0);
while(true){
if((i__31474__auto___35183 < len__31473__auto___35182)){
args__31480__auto__.push((arguments[i__31474__auto___35183]));

var G__35184 = (i__31474__auto___35183 + (1));
i__31474__auto___35183 = G__35184;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35181){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35181));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35186 = arguments.length;
var i__31474__auto___35187 = (0);
while(true){
if((i__31474__auto___35187 < len__31473__auto___35186)){
args__31480__auto__.push((arguments[i__31474__auto___35187]));

var G__35188 = (i__31474__auto___35187 + (1));
i__31474__auto___35187 = G__35188;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35185){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35185));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35196 = arguments.length;
var i__31474__auto___35197 = (0);
while(true){
if((i__31474__auto___35197 < len__31473__auto___35196)){
args__31480__auto__.push((arguments[i__31474__auto___35197]));

var G__35198 = (i__31474__auto___35197 + (1));
i__31474__auto___35197 = G__35198;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35192){
var vec__35193 = p__35192;
var state_override = cljs.core.nth.call(null,vec__35193,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35193,state_override){
return (function (p1__35189_SHARP_){
return cljs.core.merge.call(null,p1__35189_SHARP_,state_override);
});})(vec__35193,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35190){
var G__35191 = cljs.core.first.call(null,seq35190);
var seq35190__$1 = cljs.core.next.call(null,seq35190);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35191,seq35190__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35200 = arguments.length;
var i__31474__auto___35201 = (0);
while(true){
if((i__31474__auto___35201 < len__31473__auto___35200)){
args__31480__auto__.push((arguments[i__31474__auto___35201]));

var G__35202 = (i__31474__auto___35201 + (1));
i__31474__auto___35201 = G__35202;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((0) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__31481__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35199){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35199));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__31480__auto__ = [];
var len__31473__auto___35205 = arguments.length;
var i__31474__auto___35206 = (0);
while(true){
if((i__31474__auto___35206 < len__31473__auto___35205)){
args__31480__auto__.push((arguments[i__31474__auto___35206]));

var G__35207 = (i__31474__auto___35206 + (1));
i__31474__auto___35206 = G__35207;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35203){
var G__35204 = cljs.core.first.call(null,seq35203);
var seq35203__$1 = cljs.core.next.call(null,seq35203);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35204,seq35203__$1);
});


//# sourceMappingURL=format.js.map?rel=1523222478369
