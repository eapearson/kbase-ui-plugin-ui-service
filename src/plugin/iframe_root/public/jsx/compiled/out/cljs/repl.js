// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43657){
var map__43658 = p__43657;
var map__43658__$1 = ((((!((map__43658 == null)))?((((map__43658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43658):map__43658);
var m = map__43658__$1;
var n = cljs.core.get.call(null,map__43658__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43660_43682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43661_43683 = null;
var count__43662_43684 = (0);
var i__43663_43685 = (0);
while(true){
if((i__43663_43685 < count__43662_43684)){
var f_43686 = cljs.core._nth.call(null,chunk__43661_43683,i__43663_43685);
cljs.core.println.call(null,"  ",f_43686);

var G__43687 = seq__43660_43682;
var G__43688 = chunk__43661_43683;
var G__43689 = count__43662_43684;
var G__43690 = (i__43663_43685 + (1));
seq__43660_43682 = G__43687;
chunk__43661_43683 = G__43688;
count__43662_43684 = G__43689;
i__43663_43685 = G__43690;
continue;
} else {
var temp__5457__auto___43691 = cljs.core.seq.call(null,seq__43660_43682);
if(temp__5457__auto___43691){
var seq__43660_43692__$1 = temp__5457__auto___43691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43660_43692__$1)){
var c__31126__auto___43693 = cljs.core.chunk_first.call(null,seq__43660_43692__$1);
var G__43694 = cljs.core.chunk_rest.call(null,seq__43660_43692__$1);
var G__43695 = c__31126__auto___43693;
var G__43696 = cljs.core.count.call(null,c__31126__auto___43693);
var G__43697 = (0);
seq__43660_43682 = G__43694;
chunk__43661_43683 = G__43695;
count__43662_43684 = G__43696;
i__43663_43685 = G__43697;
continue;
} else {
var f_43698 = cljs.core.first.call(null,seq__43660_43692__$1);
cljs.core.println.call(null,"  ",f_43698);

var G__43699 = cljs.core.next.call(null,seq__43660_43692__$1);
var G__43700 = null;
var G__43701 = (0);
var G__43702 = (0);
seq__43660_43682 = G__43699;
chunk__43661_43683 = G__43700;
count__43662_43684 = G__43701;
i__43663_43685 = G__43702;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43703 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30194__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43703);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43703)))?cljs.core.second.call(null,arglists_43703):arglists_43703));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43664_43704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43665_43705 = null;
var count__43666_43706 = (0);
var i__43667_43707 = (0);
while(true){
if((i__43667_43707 < count__43666_43706)){
var vec__43668_43708 = cljs.core._nth.call(null,chunk__43665_43705,i__43667_43707);
var name_43709 = cljs.core.nth.call(null,vec__43668_43708,(0),null);
var map__43671_43710 = cljs.core.nth.call(null,vec__43668_43708,(1),null);
var map__43671_43711__$1 = ((((!((map__43671_43710 == null)))?((((map__43671_43710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43671_43710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43671_43710):map__43671_43710);
var doc_43712 = cljs.core.get.call(null,map__43671_43711__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43713 = cljs.core.get.call(null,map__43671_43711__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43709);

cljs.core.println.call(null," ",arglists_43713);

if(cljs.core.truth_(doc_43712)){
cljs.core.println.call(null," ",doc_43712);
} else {
}

var G__43714 = seq__43664_43704;
var G__43715 = chunk__43665_43705;
var G__43716 = count__43666_43706;
var G__43717 = (i__43667_43707 + (1));
seq__43664_43704 = G__43714;
chunk__43665_43705 = G__43715;
count__43666_43706 = G__43716;
i__43667_43707 = G__43717;
continue;
} else {
var temp__5457__auto___43718 = cljs.core.seq.call(null,seq__43664_43704);
if(temp__5457__auto___43718){
var seq__43664_43719__$1 = temp__5457__auto___43718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43664_43719__$1)){
var c__31126__auto___43720 = cljs.core.chunk_first.call(null,seq__43664_43719__$1);
var G__43721 = cljs.core.chunk_rest.call(null,seq__43664_43719__$1);
var G__43722 = c__31126__auto___43720;
var G__43723 = cljs.core.count.call(null,c__31126__auto___43720);
var G__43724 = (0);
seq__43664_43704 = G__43721;
chunk__43665_43705 = G__43722;
count__43666_43706 = G__43723;
i__43667_43707 = G__43724;
continue;
} else {
var vec__43673_43725 = cljs.core.first.call(null,seq__43664_43719__$1);
var name_43726 = cljs.core.nth.call(null,vec__43673_43725,(0),null);
var map__43676_43727 = cljs.core.nth.call(null,vec__43673_43725,(1),null);
var map__43676_43728__$1 = ((((!((map__43676_43727 == null)))?((((map__43676_43727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43676_43727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43676_43727):map__43676_43727);
var doc_43729 = cljs.core.get.call(null,map__43676_43728__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43730 = cljs.core.get.call(null,map__43676_43728__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43726);

cljs.core.println.call(null," ",arglists_43730);

if(cljs.core.truth_(doc_43729)){
cljs.core.println.call(null," ",doc_43729);
} else {
}

var G__43731 = cljs.core.next.call(null,seq__43664_43719__$1);
var G__43732 = null;
var G__43733 = (0);
var G__43734 = (0);
seq__43664_43704 = G__43731;
chunk__43665_43705 = G__43732;
count__43666_43706 = G__43733;
i__43667_43707 = G__43734;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__43678 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43679 = null;
var count__43680 = (0);
var i__43681 = (0);
while(true){
if((i__43681 < count__43680)){
var role = cljs.core._nth.call(null,chunk__43679,i__43681);
var temp__5457__auto___43735__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43735__$1)){
var spec_43736 = temp__5457__auto___43735__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43736));
} else {
}

var G__43737 = seq__43678;
var G__43738 = chunk__43679;
var G__43739 = count__43680;
var G__43740 = (i__43681 + (1));
seq__43678 = G__43737;
chunk__43679 = G__43738;
count__43680 = G__43739;
i__43681 = G__43740;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43678);
if(temp__5457__auto____$1){
var seq__43678__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43678__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__43678__$1);
var G__43741 = cljs.core.chunk_rest.call(null,seq__43678__$1);
var G__43742 = c__31126__auto__;
var G__43743 = cljs.core.count.call(null,c__31126__auto__);
var G__43744 = (0);
seq__43678 = G__43741;
chunk__43679 = G__43742;
count__43680 = G__43743;
i__43681 = G__43744;
continue;
} else {
var role = cljs.core.first.call(null,seq__43678__$1);
var temp__5457__auto___43745__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43745__$2)){
var spec_43746 = temp__5457__auto___43745__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43746));
} else {
}

var G__43747 = cljs.core.next.call(null,seq__43678__$1);
var G__43748 = null;
var G__43749 = (0);
var G__43750 = (0);
seq__43678 = G__43747;
chunk__43679 = G__43748;
count__43680 = G__43749;
i__43681 = G__43750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521387317504
