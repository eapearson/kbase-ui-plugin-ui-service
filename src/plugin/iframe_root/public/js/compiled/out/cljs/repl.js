// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43656){
var map__43657 = p__43656;
var map__43657__$1 = ((((!((map__43657 == null)))?((((map__43657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43657):map__43657);
var m = map__43657__$1;
var n = cljs.core.get.call(null,map__43657__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43657__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43659_43681 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43660_43682 = null;
var count__43661_43683 = (0);
var i__43662_43684 = (0);
while(true){
if((i__43662_43684 < count__43661_43683)){
var f_43685 = cljs.core._nth.call(null,chunk__43660_43682,i__43662_43684);
cljs.core.println.call(null,"  ",f_43685);

var G__43686 = seq__43659_43681;
var G__43687 = chunk__43660_43682;
var G__43688 = count__43661_43683;
var G__43689 = (i__43662_43684 + (1));
seq__43659_43681 = G__43686;
chunk__43660_43682 = G__43687;
count__43661_43683 = G__43688;
i__43662_43684 = G__43689;
continue;
} else {
var temp__5457__auto___43690 = cljs.core.seq.call(null,seq__43659_43681);
if(temp__5457__auto___43690){
var seq__43659_43691__$1 = temp__5457__auto___43690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43659_43691__$1)){
var c__31125__auto___43692 = cljs.core.chunk_first.call(null,seq__43659_43691__$1);
var G__43693 = cljs.core.chunk_rest.call(null,seq__43659_43691__$1);
var G__43694 = c__31125__auto___43692;
var G__43695 = cljs.core.count.call(null,c__31125__auto___43692);
var G__43696 = (0);
seq__43659_43681 = G__43693;
chunk__43660_43682 = G__43694;
count__43661_43683 = G__43695;
i__43662_43684 = G__43696;
continue;
} else {
var f_43697 = cljs.core.first.call(null,seq__43659_43691__$1);
cljs.core.println.call(null,"  ",f_43697);

var G__43698 = cljs.core.next.call(null,seq__43659_43691__$1);
var G__43699 = null;
var G__43700 = (0);
var G__43701 = (0);
seq__43659_43681 = G__43698;
chunk__43660_43682 = G__43699;
count__43661_43683 = G__43700;
i__43662_43684 = G__43701;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43702 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30194__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43702);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43702)))?cljs.core.second.call(null,arglists_43702):arglists_43702));
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
var seq__43663_43703 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43664_43704 = null;
var count__43665_43705 = (0);
var i__43666_43706 = (0);
while(true){
if((i__43666_43706 < count__43665_43705)){
var vec__43667_43707 = cljs.core._nth.call(null,chunk__43664_43704,i__43666_43706);
var name_43708 = cljs.core.nth.call(null,vec__43667_43707,(0),null);
var map__43670_43709 = cljs.core.nth.call(null,vec__43667_43707,(1),null);
var map__43670_43710__$1 = ((((!((map__43670_43709 == null)))?((((map__43670_43709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43670_43709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43670_43709):map__43670_43709);
var doc_43711 = cljs.core.get.call(null,map__43670_43710__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43712 = cljs.core.get.call(null,map__43670_43710__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43708);

cljs.core.println.call(null," ",arglists_43712);

if(cljs.core.truth_(doc_43711)){
cljs.core.println.call(null," ",doc_43711);
} else {
}

var G__43713 = seq__43663_43703;
var G__43714 = chunk__43664_43704;
var G__43715 = count__43665_43705;
var G__43716 = (i__43666_43706 + (1));
seq__43663_43703 = G__43713;
chunk__43664_43704 = G__43714;
count__43665_43705 = G__43715;
i__43666_43706 = G__43716;
continue;
} else {
var temp__5457__auto___43717 = cljs.core.seq.call(null,seq__43663_43703);
if(temp__5457__auto___43717){
var seq__43663_43718__$1 = temp__5457__auto___43717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43663_43718__$1)){
var c__31125__auto___43719 = cljs.core.chunk_first.call(null,seq__43663_43718__$1);
var G__43720 = cljs.core.chunk_rest.call(null,seq__43663_43718__$1);
var G__43721 = c__31125__auto___43719;
var G__43722 = cljs.core.count.call(null,c__31125__auto___43719);
var G__43723 = (0);
seq__43663_43703 = G__43720;
chunk__43664_43704 = G__43721;
count__43665_43705 = G__43722;
i__43666_43706 = G__43723;
continue;
} else {
var vec__43672_43724 = cljs.core.first.call(null,seq__43663_43718__$1);
var name_43725 = cljs.core.nth.call(null,vec__43672_43724,(0),null);
var map__43675_43726 = cljs.core.nth.call(null,vec__43672_43724,(1),null);
var map__43675_43727__$1 = ((((!((map__43675_43726 == null)))?((((map__43675_43726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43675_43726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43675_43726):map__43675_43726);
var doc_43728 = cljs.core.get.call(null,map__43675_43727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43729 = cljs.core.get.call(null,map__43675_43727__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43725);

cljs.core.println.call(null," ",arglists_43729);

if(cljs.core.truth_(doc_43728)){
cljs.core.println.call(null," ",doc_43728);
} else {
}

var G__43730 = cljs.core.next.call(null,seq__43663_43718__$1);
var G__43731 = null;
var G__43732 = (0);
var G__43733 = (0);
seq__43663_43703 = G__43730;
chunk__43664_43704 = G__43731;
count__43665_43705 = G__43732;
i__43666_43706 = G__43733;
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

var seq__43677 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43678 = null;
var count__43679 = (0);
var i__43680 = (0);
while(true){
if((i__43680 < count__43679)){
var role = cljs.core._nth.call(null,chunk__43678,i__43680);
var temp__5457__auto___43734__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43734__$1)){
var spec_43735 = temp__5457__auto___43734__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43735));
} else {
}

var G__43736 = seq__43677;
var G__43737 = chunk__43678;
var G__43738 = count__43679;
var G__43739 = (i__43680 + (1));
seq__43677 = G__43736;
chunk__43678 = G__43737;
count__43679 = G__43738;
i__43680 = G__43739;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43677);
if(temp__5457__auto____$1){
var seq__43677__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43677__$1)){
var c__31125__auto__ = cljs.core.chunk_first.call(null,seq__43677__$1);
var G__43740 = cljs.core.chunk_rest.call(null,seq__43677__$1);
var G__43741 = c__31125__auto__;
var G__43742 = cljs.core.count.call(null,c__31125__auto__);
var G__43743 = (0);
seq__43677 = G__43740;
chunk__43678 = G__43741;
count__43679 = G__43742;
i__43680 = G__43743;
continue;
} else {
var role = cljs.core.first.call(null,seq__43677__$1);
var temp__5457__auto___43744__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43744__$2)){
var spec_43745 = temp__5457__auto___43744__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43745));
} else {
}

var G__43746 = cljs.core.next.call(null,seq__43677__$1);
var G__43747 = null;
var G__43748 = (0);
var G__43749 = (0);
seq__43677 = G__43746;
chunk__43678 = G__43747;
count__43679 = G__43748;
i__43680 = G__43749;
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

//# sourceMappingURL=repl.js.map?rel=1523222486163
