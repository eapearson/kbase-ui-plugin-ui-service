// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30194__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30194__auto__){
return or__30194__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30194__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
var or__30194__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30194__auto____$1)){
return or__30194__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41878_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41878_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41879 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41880 = null;
var count__41881 = (0);
var i__41882 = (0);
while(true){
if((i__41882 < count__41881)){
var n = cljs.core._nth.call(null,chunk__41880,i__41882);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41883 = seq__41879;
var G__41884 = chunk__41880;
var G__41885 = count__41881;
var G__41886 = (i__41882 + (1));
seq__41879 = G__41883;
chunk__41880 = G__41884;
count__41881 = G__41885;
i__41882 = G__41886;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41879);
if(temp__5457__auto__){
var seq__41879__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41879__$1)){
var c__31125__auto__ = cljs.core.chunk_first.call(null,seq__41879__$1);
var G__41887 = cljs.core.chunk_rest.call(null,seq__41879__$1);
var G__41888 = c__31125__auto__;
var G__41889 = cljs.core.count.call(null,c__31125__auto__);
var G__41890 = (0);
seq__41879 = G__41887;
chunk__41880 = G__41888;
count__41881 = G__41889;
i__41882 = G__41890;
continue;
} else {
var n = cljs.core.first.call(null,seq__41879__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41891 = cljs.core.next.call(null,seq__41879__$1);
var G__41892 = null;
var G__41893 = (0);
var G__41894 = (0);
seq__41879 = G__41891;
chunk__41880 = G__41892;
count__41881 = G__41893;
i__41882 = G__41894;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__41895){
var vec__41896 = p__41895;
var _ = cljs.core.nth.call(null,vec__41896,(0),null);
var v = cljs.core.nth.call(null,vec__41896,(1),null);
var and__30182__auto__ = v;
if(cljs.core.truth_(and__30182__auto__)){
return v.call(null,dep);
} else {
return and__30182__auto__;
}
}),cljs.core.filter.call(null,(function (p__41899){
var vec__41900 = p__41899;
var k = cljs.core.nth.call(null,vec__41900,(0),null);
var v = cljs.core.nth.call(null,vec__41900,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41912_41920 = cljs.core.seq.call(null,deps);
var chunk__41913_41921 = null;
var count__41914_41922 = (0);
var i__41915_41923 = (0);
while(true){
if((i__41915_41923 < count__41914_41922)){
var dep_41924 = cljs.core._nth.call(null,chunk__41913_41921,i__41915_41923);
if(cljs.core.truth_((function (){var and__30182__auto__ = dep_41924;
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41924));
} else {
return and__30182__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41924,(depth + (1)),state);
} else {
}

var G__41925 = seq__41912_41920;
var G__41926 = chunk__41913_41921;
var G__41927 = count__41914_41922;
var G__41928 = (i__41915_41923 + (1));
seq__41912_41920 = G__41925;
chunk__41913_41921 = G__41926;
count__41914_41922 = G__41927;
i__41915_41923 = G__41928;
continue;
} else {
var temp__5457__auto___41929 = cljs.core.seq.call(null,seq__41912_41920);
if(temp__5457__auto___41929){
var seq__41912_41930__$1 = temp__5457__auto___41929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41912_41930__$1)){
var c__31125__auto___41931 = cljs.core.chunk_first.call(null,seq__41912_41930__$1);
var G__41932 = cljs.core.chunk_rest.call(null,seq__41912_41930__$1);
var G__41933 = c__31125__auto___41931;
var G__41934 = cljs.core.count.call(null,c__31125__auto___41931);
var G__41935 = (0);
seq__41912_41920 = G__41932;
chunk__41913_41921 = G__41933;
count__41914_41922 = G__41934;
i__41915_41923 = G__41935;
continue;
} else {
var dep_41936 = cljs.core.first.call(null,seq__41912_41930__$1);
if(cljs.core.truth_((function (){var and__30182__auto__ = dep_41936;
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41936));
} else {
return and__30182__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41936,(depth + (1)),state);
} else {
}

var G__41937 = cljs.core.next.call(null,seq__41912_41930__$1);
var G__41938 = null;
var G__41939 = (0);
var G__41940 = (0);
seq__41912_41920 = G__41937;
chunk__41913_41921 = G__41938;
count__41914_41922 = G__41939;
i__41915_41923 = G__41940;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41916){
var vec__41917 = p__41916;
var seq__41918 = cljs.core.seq.call(null,vec__41917);
var first__41919 = cljs.core.first.call(null,seq__41918);
var seq__41918__$1 = cljs.core.next.call(null,seq__41918);
var x = first__41919;
var xs = seq__41918__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41917,seq__41918,first__41919,seq__41918__$1,x,xs,get_deps__$1){
return (function (p1__41903_SHARP_){
return clojure.set.difference.call(null,p1__41903_SHARP_,x);
});})(vec__41917,seq__41918,first__41919,seq__41918__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41941 = cljs.core.seq.call(null,provides);
var chunk__41942 = null;
var count__41943 = (0);
var i__41944 = (0);
while(true){
if((i__41944 < count__41943)){
var prov = cljs.core._nth.call(null,chunk__41942,i__41944);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41945_41953 = cljs.core.seq.call(null,requires);
var chunk__41946_41954 = null;
var count__41947_41955 = (0);
var i__41948_41956 = (0);
while(true){
if((i__41948_41956 < count__41947_41955)){
var req_41957 = cljs.core._nth.call(null,chunk__41946_41954,i__41948_41956);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41957,prov);

var G__41958 = seq__41945_41953;
var G__41959 = chunk__41946_41954;
var G__41960 = count__41947_41955;
var G__41961 = (i__41948_41956 + (1));
seq__41945_41953 = G__41958;
chunk__41946_41954 = G__41959;
count__41947_41955 = G__41960;
i__41948_41956 = G__41961;
continue;
} else {
var temp__5457__auto___41962 = cljs.core.seq.call(null,seq__41945_41953);
if(temp__5457__auto___41962){
var seq__41945_41963__$1 = temp__5457__auto___41962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41945_41963__$1)){
var c__31125__auto___41964 = cljs.core.chunk_first.call(null,seq__41945_41963__$1);
var G__41965 = cljs.core.chunk_rest.call(null,seq__41945_41963__$1);
var G__41966 = c__31125__auto___41964;
var G__41967 = cljs.core.count.call(null,c__31125__auto___41964);
var G__41968 = (0);
seq__41945_41953 = G__41965;
chunk__41946_41954 = G__41966;
count__41947_41955 = G__41967;
i__41948_41956 = G__41968;
continue;
} else {
var req_41969 = cljs.core.first.call(null,seq__41945_41963__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41969,prov);

var G__41970 = cljs.core.next.call(null,seq__41945_41963__$1);
var G__41971 = null;
var G__41972 = (0);
var G__41973 = (0);
seq__41945_41953 = G__41970;
chunk__41946_41954 = G__41971;
count__41947_41955 = G__41972;
i__41948_41956 = G__41973;
continue;
}
} else {
}
}
break;
}

var G__41974 = seq__41941;
var G__41975 = chunk__41942;
var G__41976 = count__41943;
var G__41977 = (i__41944 + (1));
seq__41941 = G__41974;
chunk__41942 = G__41975;
count__41943 = G__41976;
i__41944 = G__41977;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41941);
if(temp__5457__auto__){
var seq__41941__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41941__$1)){
var c__31125__auto__ = cljs.core.chunk_first.call(null,seq__41941__$1);
var G__41978 = cljs.core.chunk_rest.call(null,seq__41941__$1);
var G__41979 = c__31125__auto__;
var G__41980 = cljs.core.count.call(null,c__31125__auto__);
var G__41981 = (0);
seq__41941 = G__41978;
chunk__41942 = G__41979;
count__41943 = G__41980;
i__41944 = G__41981;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41941__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41949_41982 = cljs.core.seq.call(null,requires);
var chunk__41950_41983 = null;
var count__41951_41984 = (0);
var i__41952_41985 = (0);
while(true){
if((i__41952_41985 < count__41951_41984)){
var req_41986 = cljs.core._nth.call(null,chunk__41950_41983,i__41952_41985);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41986,prov);

var G__41987 = seq__41949_41982;
var G__41988 = chunk__41950_41983;
var G__41989 = count__41951_41984;
var G__41990 = (i__41952_41985 + (1));
seq__41949_41982 = G__41987;
chunk__41950_41983 = G__41988;
count__41951_41984 = G__41989;
i__41952_41985 = G__41990;
continue;
} else {
var temp__5457__auto___41991__$1 = cljs.core.seq.call(null,seq__41949_41982);
if(temp__5457__auto___41991__$1){
var seq__41949_41992__$1 = temp__5457__auto___41991__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41949_41992__$1)){
var c__31125__auto___41993 = cljs.core.chunk_first.call(null,seq__41949_41992__$1);
var G__41994 = cljs.core.chunk_rest.call(null,seq__41949_41992__$1);
var G__41995 = c__31125__auto___41993;
var G__41996 = cljs.core.count.call(null,c__31125__auto___41993);
var G__41997 = (0);
seq__41949_41982 = G__41994;
chunk__41950_41983 = G__41995;
count__41951_41984 = G__41996;
i__41952_41985 = G__41997;
continue;
} else {
var req_41998 = cljs.core.first.call(null,seq__41949_41992__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41998,prov);

var G__41999 = cljs.core.next.call(null,seq__41949_41992__$1);
var G__42000 = null;
var G__42001 = (0);
var G__42002 = (0);
seq__41949_41982 = G__41999;
chunk__41950_41983 = G__42000;
count__41951_41984 = G__42001;
i__41952_41985 = G__42002;
continue;
}
} else {
}
}
break;
}

var G__42003 = cljs.core.next.call(null,seq__41941__$1);
var G__42004 = null;
var G__42005 = (0);
var G__42006 = (0);
seq__41941 = G__42003;
chunk__41942 = G__42004;
count__41943 = G__42005;
i__41944 = G__42006;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42007_42011 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42008_42012 = null;
var count__42009_42013 = (0);
var i__42010_42014 = (0);
while(true){
if((i__42010_42014 < count__42009_42013)){
var ns_42015 = cljs.core._nth.call(null,chunk__42008_42012,i__42010_42014);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42015);

var G__42016 = seq__42007_42011;
var G__42017 = chunk__42008_42012;
var G__42018 = count__42009_42013;
var G__42019 = (i__42010_42014 + (1));
seq__42007_42011 = G__42016;
chunk__42008_42012 = G__42017;
count__42009_42013 = G__42018;
i__42010_42014 = G__42019;
continue;
} else {
var temp__5457__auto___42020 = cljs.core.seq.call(null,seq__42007_42011);
if(temp__5457__auto___42020){
var seq__42007_42021__$1 = temp__5457__auto___42020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42007_42021__$1)){
var c__31125__auto___42022 = cljs.core.chunk_first.call(null,seq__42007_42021__$1);
var G__42023 = cljs.core.chunk_rest.call(null,seq__42007_42021__$1);
var G__42024 = c__31125__auto___42022;
var G__42025 = cljs.core.count.call(null,c__31125__auto___42022);
var G__42026 = (0);
seq__42007_42011 = G__42023;
chunk__42008_42012 = G__42024;
count__42009_42013 = G__42025;
i__42010_42014 = G__42026;
continue;
} else {
var ns_42027 = cljs.core.first.call(null,seq__42007_42021__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42027);

var G__42028 = cljs.core.next.call(null,seq__42007_42021__$1);
var G__42029 = null;
var G__42030 = (0);
var G__42031 = (0);
seq__42007_42011 = G__42028;
chunk__42008_42012 = G__42029;
count__42009_42013 = G__42030;
i__42010_42014 = G__42031;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30194__auto__ = goog.require__;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42032__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42033__i = 0, G__42033__a = new Array(arguments.length -  0);
while (G__42033__i < G__42033__a.length) {G__42033__a[G__42033__i] = arguments[G__42033__i + 0]; ++G__42033__i;}
  args = new cljs.core.IndexedSeq(G__42033__a,0,null);
} 
return G__42032__delegate.call(this,args);};
G__42032.cljs$lang$maxFixedArity = 0;
G__42032.cljs$lang$applyTo = (function (arglist__42034){
var args = cljs.core.seq(arglist__42034);
return G__42032__delegate(args);
});
G__42032.cljs$core$IFn$_invoke$arity$variadic = G__42032__delegate;
return G__42032;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__42035_SHARP_,p2__42036_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42035_SHARP_)].join('')),p2__42036_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__42037_SHARP_,p2__42038_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42037_SHARP_)].join(''),p2__42038_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42039 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42039.addCallback(((function (G__42039){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42039))
);

G__42039.addErrback(((function (G__42039){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42039))
);

return G__42039;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42040){if((e42040 instanceof Error)){
var e = e42040;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42040;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42041){if((e42041 instanceof Error)){
var e = e42041;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42041;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42042 = cljs.core._EQ_;
var expr__42043 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42042.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42043))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42042.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42043))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42042.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42043))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42042,expr__42043){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42042,expr__42043))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42045,callback){
var map__42046 = p__42045;
var map__42046__$1 = ((((!((map__42046 == null)))?((((map__42046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42046):map__42046);
var file_msg = map__42046__$1;
var request_url = cljs.core.get.call(null,map__42046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30194__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42046,map__42046__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42046,map__42046__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__){
return (function (state_42084){
var state_val_42085 = (state_42084[(1)]);
if((state_val_42085 === (7))){
var inst_42080 = (state_42084[(2)]);
var state_42084__$1 = state_42084;
var statearr_42086_42112 = state_42084__$1;
(statearr_42086_42112[(2)] = inst_42080);

(statearr_42086_42112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (1))){
var state_42084__$1 = state_42084;
var statearr_42087_42113 = state_42084__$1;
(statearr_42087_42113[(2)] = null);

(statearr_42087_42113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (4))){
var inst_42050 = (state_42084[(7)]);
var inst_42050__$1 = (state_42084[(2)]);
var state_42084__$1 = (function (){var statearr_42088 = state_42084;
(statearr_42088[(7)] = inst_42050__$1);

return statearr_42088;
})();
if(cljs.core.truth_(inst_42050__$1)){
var statearr_42089_42114 = state_42084__$1;
(statearr_42089_42114[(1)] = (5));

} else {
var statearr_42090_42115 = state_42084__$1;
(statearr_42090_42115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (15))){
var inst_42063 = (state_42084[(8)]);
var inst_42065 = (state_42084[(9)]);
var inst_42067 = inst_42065.call(null,inst_42063);
var state_42084__$1 = state_42084;
var statearr_42091_42116 = state_42084__$1;
(statearr_42091_42116[(2)] = inst_42067);

(statearr_42091_42116[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (13))){
var inst_42074 = (state_42084[(2)]);
var state_42084__$1 = state_42084;
var statearr_42092_42117 = state_42084__$1;
(statearr_42092_42117[(2)] = inst_42074);

(statearr_42092_42117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (6))){
var state_42084__$1 = state_42084;
var statearr_42093_42118 = state_42084__$1;
(statearr_42093_42118[(2)] = null);

(statearr_42093_42118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (17))){
var inst_42071 = (state_42084[(2)]);
var state_42084__$1 = state_42084;
var statearr_42094_42119 = state_42084__$1;
(statearr_42094_42119[(2)] = inst_42071);

(statearr_42094_42119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (3))){
var inst_42082 = (state_42084[(2)]);
var state_42084__$1 = state_42084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42084__$1,inst_42082);
} else {
if((state_val_42085 === (12))){
var state_42084__$1 = state_42084;
var statearr_42095_42120 = state_42084__$1;
(statearr_42095_42120[(2)] = null);

(statearr_42095_42120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (2))){
var state_42084__$1 = state_42084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42084__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42085 === (11))){
var inst_42055 = (state_42084[(10)]);
var inst_42061 = figwheel.client.file_reloading.blocking_load.call(null,inst_42055);
var state_42084__$1 = state_42084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42084__$1,(14),inst_42061);
} else {
if((state_val_42085 === (9))){
var inst_42055 = (state_42084[(10)]);
var state_42084__$1 = state_42084;
if(cljs.core.truth_(inst_42055)){
var statearr_42096_42121 = state_42084__$1;
(statearr_42096_42121[(1)] = (11));

} else {
var statearr_42097_42122 = state_42084__$1;
(statearr_42097_42122[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (5))){
var inst_42050 = (state_42084[(7)]);
var inst_42056 = (state_42084[(11)]);
var inst_42055 = cljs.core.nth.call(null,inst_42050,(0),null);
var inst_42056__$1 = cljs.core.nth.call(null,inst_42050,(1),null);
var state_42084__$1 = (function (){var statearr_42098 = state_42084;
(statearr_42098[(11)] = inst_42056__$1);

(statearr_42098[(10)] = inst_42055);

return statearr_42098;
})();
if(cljs.core.truth_(inst_42056__$1)){
var statearr_42099_42123 = state_42084__$1;
(statearr_42099_42123[(1)] = (8));

} else {
var statearr_42100_42124 = state_42084__$1;
(statearr_42100_42124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (14))){
var inst_42065 = (state_42084[(9)]);
var inst_42055 = (state_42084[(10)]);
var inst_42063 = (state_42084[(2)]);
var inst_42064 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42065__$1 = cljs.core.get.call(null,inst_42064,inst_42055);
var state_42084__$1 = (function (){var statearr_42101 = state_42084;
(statearr_42101[(8)] = inst_42063);

(statearr_42101[(9)] = inst_42065__$1);

return statearr_42101;
})();
if(cljs.core.truth_(inst_42065__$1)){
var statearr_42102_42125 = state_42084__$1;
(statearr_42102_42125[(1)] = (15));

} else {
var statearr_42103_42126 = state_42084__$1;
(statearr_42103_42126[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (16))){
var inst_42063 = (state_42084[(8)]);
var inst_42069 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42063);
var state_42084__$1 = state_42084;
var statearr_42104_42127 = state_42084__$1;
(statearr_42104_42127[(2)] = inst_42069);

(statearr_42104_42127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (10))){
var inst_42076 = (state_42084[(2)]);
var state_42084__$1 = (function (){var statearr_42105 = state_42084;
(statearr_42105[(12)] = inst_42076);

return statearr_42105;
})();
var statearr_42106_42128 = state_42084__$1;
(statearr_42106_42128[(2)] = null);

(statearr_42106_42128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42085 === (8))){
var inst_42056 = (state_42084[(11)]);
var inst_42058 = eval(inst_42056);
var state_42084__$1 = state_42084;
var statearr_42107_42129 = state_42084__$1;
(statearr_42107_42129[(2)] = inst_42058);

(statearr_42107_42129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39774__auto__))
;
return ((function (switch__39684__auto__,c__39774__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39685__auto__ = null;
var figwheel$client$file_reloading$state_machine__39685__auto____0 = (function (){
var statearr_42108 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42108[(0)] = figwheel$client$file_reloading$state_machine__39685__auto__);

(statearr_42108[(1)] = (1));

return statearr_42108;
});
var figwheel$client$file_reloading$state_machine__39685__auto____1 = (function (state_42084){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_42084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e42109){if((e42109 instanceof Object)){
var ex__39688__auto__ = e42109;
var statearr_42110_42130 = state_42084;
(statearr_42110_42130[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42131 = state_42084;
state_42084 = G__42131;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39685__auto__ = function(state_42084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39685__auto____1.call(this,state_42084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39685__auto____0;
figwheel$client$file_reloading$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39685__auto____1;
return figwheel$client$file_reloading$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__))
})();
var state__39776__auto__ = (function (){var statearr_42111 = f__39775__auto__.call(null);
(statearr_42111[(6)] = c__39774__auto__);

return statearr_42111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__))
);

return c__39774__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42133 = arguments.length;
switch (G__42133) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42135,callback){
var map__42136 = p__42135;
var map__42136__$1 = ((((!((map__42136 == null)))?((((map__42136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42136):map__42136);
var file_msg = map__42136__$1;
var namespace = cljs.core.get.call(null,map__42136__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42136,map__42136__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42136,map__42136__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42138){
var map__42139 = p__42138;
var map__42139__$1 = ((((!((map__42139 == null)))?((((map__42139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42139):map__42139);
var file_msg = map__42139__$1;
var namespace = cljs.core.get.call(null,map__42139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42141){
var map__42142 = p__42141;
var map__42142__$1 = ((((!((map__42142 == null)))?((((map__42142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42142):map__42142);
var file_msg = map__42142__$1;
var namespace = cljs.core.get.call(null,map__42142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30182__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30182__auto__){
var or__30194__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
var or__30194__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30194__auto____$1)){
return or__30194__auto____$1;
} else {
var or__30194__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__30194__auto____$2)){
return or__30194__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__30182__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42144,callback){
var map__42145 = p__42144;
var map__42145__$1 = ((((!((map__42145 == null)))?((((map__42145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42145):map__42145);
var file_msg = map__42145__$1;
var request_url = cljs.core.get.call(null,map__42145__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__39774__auto___42195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___42195,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___42195,out){
return (function (state_42180){
var state_val_42181 = (state_42180[(1)]);
if((state_val_42181 === (1))){
var inst_42154 = cljs.core.seq.call(null,files);
var inst_42155 = cljs.core.first.call(null,inst_42154);
var inst_42156 = cljs.core.next.call(null,inst_42154);
var inst_42157 = files;
var state_42180__$1 = (function (){var statearr_42182 = state_42180;
(statearr_42182[(7)] = inst_42157);

(statearr_42182[(8)] = inst_42155);

(statearr_42182[(9)] = inst_42156);

return statearr_42182;
})();
var statearr_42183_42196 = state_42180__$1;
(statearr_42183_42196[(2)] = null);

(statearr_42183_42196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42181 === (2))){
var inst_42157 = (state_42180[(7)]);
var inst_42163 = (state_42180[(10)]);
var inst_42162 = cljs.core.seq.call(null,inst_42157);
var inst_42163__$1 = cljs.core.first.call(null,inst_42162);
var inst_42164 = cljs.core.next.call(null,inst_42162);
var inst_42165 = (inst_42163__$1 == null);
var inst_42166 = cljs.core.not.call(null,inst_42165);
var state_42180__$1 = (function (){var statearr_42184 = state_42180;
(statearr_42184[(10)] = inst_42163__$1);

(statearr_42184[(11)] = inst_42164);

return statearr_42184;
})();
if(inst_42166){
var statearr_42185_42197 = state_42180__$1;
(statearr_42185_42197[(1)] = (4));

} else {
var statearr_42186_42198 = state_42180__$1;
(statearr_42186_42198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42181 === (3))){
var inst_42178 = (state_42180[(2)]);
var state_42180__$1 = state_42180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42180__$1,inst_42178);
} else {
if((state_val_42181 === (4))){
var inst_42163 = (state_42180[(10)]);
var inst_42168 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42163);
var state_42180__$1 = state_42180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42180__$1,(7),inst_42168);
} else {
if((state_val_42181 === (5))){
var inst_42174 = cljs.core.async.close_BANG_.call(null,out);
var state_42180__$1 = state_42180;
var statearr_42187_42199 = state_42180__$1;
(statearr_42187_42199[(2)] = inst_42174);

(statearr_42187_42199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42181 === (6))){
var inst_42176 = (state_42180[(2)]);
var state_42180__$1 = state_42180;
var statearr_42188_42200 = state_42180__$1;
(statearr_42188_42200[(2)] = inst_42176);

(statearr_42188_42200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42181 === (7))){
var inst_42164 = (state_42180[(11)]);
var inst_42170 = (state_42180[(2)]);
var inst_42171 = cljs.core.async.put_BANG_.call(null,out,inst_42170);
var inst_42157 = inst_42164;
var state_42180__$1 = (function (){var statearr_42189 = state_42180;
(statearr_42189[(12)] = inst_42171);

(statearr_42189[(7)] = inst_42157);

return statearr_42189;
})();
var statearr_42190_42201 = state_42180__$1;
(statearr_42190_42201[(2)] = null);

(statearr_42190_42201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__39774__auto___42195,out))
;
return ((function (switch__39684__auto__,c__39774__auto___42195,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____0 = (function (){
var statearr_42191 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42191[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__);

(statearr_42191[(1)] = (1));

return statearr_42191;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____1 = (function (state_42180){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_42180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e42192){if((e42192 instanceof Object)){
var ex__39688__auto__ = e42192;
var statearr_42193_42202 = state_42180;
(statearr_42193_42202[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42203 = state_42180;
state_42180 = G__42203;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__ = function(state_42180){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____1.call(this,state_42180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___42195,out))
})();
var state__39776__auto__ = (function (){var statearr_42194 = f__39775__auto__.call(null);
(statearr_42194[(6)] = c__39774__auto___42195);

return statearr_42194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___42195,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42204,opts){
var map__42205 = p__42204;
var map__42205__$1 = ((((!((map__42205 == null)))?((((map__42205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42205):map__42205);
var eval_body = cljs.core.get.call(null,map__42205__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42205__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30182__auto__ = eval_body;
if(cljs.core.truth_(and__30182__auto__)){
return typeof eval_body === 'string';
} else {
return and__30182__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42207){var e = e42207;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42208_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42208_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42209){
var vec__42210 = p__42209;
var k = cljs.core.nth.call(null,vec__42210,(0),null);
var v = cljs.core.nth.call(null,vec__42210,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42213){
var vec__42214 = p__42213;
var k = cljs.core.nth.call(null,vec__42214,(0),null);
var v = cljs.core.nth.call(null,vec__42214,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42220,p__42221){
var map__42222 = p__42220;
var map__42222__$1 = ((((!((map__42222 == null)))?((((map__42222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42222.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42222):map__42222);
var opts = map__42222__$1;
var before_jsload = cljs.core.get.call(null,map__42222__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42222__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42222__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42223 = p__42221;
var map__42223__$1 = ((((!((map__42223 == null)))?((((map__42223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42223):map__42223);
var msg = map__42223__$1;
var files = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42377){
var state_val_42378 = (state_42377[(1)]);
if((state_val_42378 === (7))){
var inst_42239 = (state_42377[(7)]);
var inst_42240 = (state_42377[(8)]);
var inst_42238 = (state_42377[(9)]);
var inst_42237 = (state_42377[(10)]);
var inst_42245 = cljs.core._nth.call(null,inst_42238,inst_42240);
var inst_42246 = figwheel.client.file_reloading.eval_body.call(null,inst_42245,opts);
var inst_42247 = (inst_42240 + (1));
var tmp42379 = inst_42239;
var tmp42380 = inst_42238;
var tmp42381 = inst_42237;
var inst_42237__$1 = tmp42381;
var inst_42238__$1 = tmp42380;
var inst_42239__$1 = tmp42379;
var inst_42240__$1 = inst_42247;
var state_42377__$1 = (function (){var statearr_42382 = state_42377;
(statearr_42382[(7)] = inst_42239__$1);

(statearr_42382[(11)] = inst_42246);

(statearr_42382[(8)] = inst_42240__$1);

(statearr_42382[(9)] = inst_42238__$1);

(statearr_42382[(10)] = inst_42237__$1);

return statearr_42382;
})();
var statearr_42383_42466 = state_42377__$1;
(statearr_42383_42466[(2)] = null);

(statearr_42383_42466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (20))){
var inst_42280 = (state_42377[(12)]);
var inst_42288 = figwheel.client.file_reloading.sort_files.call(null,inst_42280);
var state_42377__$1 = state_42377;
var statearr_42384_42467 = state_42377__$1;
(statearr_42384_42467[(2)] = inst_42288);

(statearr_42384_42467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (27))){
var state_42377__$1 = state_42377;
var statearr_42385_42468 = state_42377__$1;
(statearr_42385_42468[(2)] = null);

(statearr_42385_42468[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (1))){
var inst_42229 = (state_42377[(13)]);
var inst_42226 = before_jsload.call(null,files);
var inst_42227 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42228 = (function (){return ((function (inst_42229,inst_42226,inst_42227,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42217_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42217_SHARP_);
});
;})(inst_42229,inst_42226,inst_42227,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42229__$1 = cljs.core.filter.call(null,inst_42228,files);
var inst_42230 = cljs.core.not_empty.call(null,inst_42229__$1);
var state_42377__$1 = (function (){var statearr_42386 = state_42377;
(statearr_42386[(14)] = inst_42227);

(statearr_42386[(15)] = inst_42226);

(statearr_42386[(13)] = inst_42229__$1);

return statearr_42386;
})();
if(cljs.core.truth_(inst_42230)){
var statearr_42387_42469 = state_42377__$1;
(statearr_42387_42469[(1)] = (2));

} else {
var statearr_42388_42470 = state_42377__$1;
(statearr_42388_42470[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (24))){
var state_42377__$1 = state_42377;
var statearr_42389_42471 = state_42377__$1;
(statearr_42389_42471[(2)] = null);

(statearr_42389_42471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (39))){
var inst_42330 = (state_42377[(16)]);
var state_42377__$1 = state_42377;
var statearr_42390_42472 = state_42377__$1;
(statearr_42390_42472[(2)] = inst_42330);

(statearr_42390_42472[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (46))){
var inst_42372 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42391_42473 = state_42377__$1;
(statearr_42391_42473[(2)] = inst_42372);

(statearr_42391_42473[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (4))){
var inst_42274 = (state_42377[(2)]);
var inst_42275 = cljs.core.List.EMPTY;
var inst_42276 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42275);
var inst_42277 = (function (){return ((function (inst_42274,inst_42275,inst_42276,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42218_SHARP_){
var and__30182__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42218_SHARP_);
if(cljs.core.truth_(and__30182__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42218_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42218_SHARP_)));
} else {
return and__30182__auto__;
}
});
;})(inst_42274,inst_42275,inst_42276,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42278 = cljs.core.filter.call(null,inst_42277,files);
var inst_42279 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42280 = cljs.core.concat.call(null,inst_42278,inst_42279);
var state_42377__$1 = (function (){var statearr_42392 = state_42377;
(statearr_42392[(17)] = inst_42276);

(statearr_42392[(18)] = inst_42274);

(statearr_42392[(12)] = inst_42280);

return statearr_42392;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42393_42474 = state_42377__$1;
(statearr_42393_42474[(1)] = (16));

} else {
var statearr_42394_42475 = state_42377__$1;
(statearr_42394_42475[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (15))){
var inst_42264 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42395_42476 = state_42377__$1;
(statearr_42395_42476[(2)] = inst_42264);

(statearr_42395_42476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (21))){
var inst_42290 = (state_42377[(19)]);
var inst_42290__$1 = (state_42377[(2)]);
var inst_42291 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42290__$1);
var state_42377__$1 = (function (){var statearr_42396 = state_42377;
(statearr_42396[(19)] = inst_42290__$1);

return statearr_42396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42377__$1,(22),inst_42291);
} else {
if((state_val_42378 === (31))){
var inst_42375 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42377__$1,inst_42375);
} else {
if((state_val_42378 === (32))){
var inst_42330 = (state_42377[(16)]);
var inst_42335 = inst_42330.cljs$lang$protocol_mask$partition0$;
var inst_42336 = (inst_42335 & (64));
var inst_42337 = inst_42330.cljs$core$ISeq$;
var inst_42338 = (cljs.core.PROTOCOL_SENTINEL === inst_42337);
var inst_42339 = (inst_42336) || (inst_42338);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42339)){
var statearr_42397_42477 = state_42377__$1;
(statearr_42397_42477[(1)] = (35));

} else {
var statearr_42398_42478 = state_42377__$1;
(statearr_42398_42478[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (40))){
var inst_42352 = (state_42377[(20)]);
var inst_42351 = (state_42377[(2)]);
var inst_42352__$1 = cljs.core.get.call(null,inst_42351,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42353 = cljs.core.get.call(null,inst_42351,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42354 = cljs.core.not_empty.call(null,inst_42352__$1);
var state_42377__$1 = (function (){var statearr_42399 = state_42377;
(statearr_42399[(20)] = inst_42352__$1);

(statearr_42399[(21)] = inst_42353);

return statearr_42399;
})();
if(cljs.core.truth_(inst_42354)){
var statearr_42400_42479 = state_42377__$1;
(statearr_42400_42479[(1)] = (41));

} else {
var statearr_42401_42480 = state_42377__$1;
(statearr_42401_42480[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (33))){
var state_42377__$1 = state_42377;
var statearr_42402_42481 = state_42377__$1;
(statearr_42402_42481[(2)] = false);

(statearr_42402_42481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (13))){
var inst_42250 = (state_42377[(22)]);
var inst_42254 = cljs.core.chunk_first.call(null,inst_42250);
var inst_42255 = cljs.core.chunk_rest.call(null,inst_42250);
var inst_42256 = cljs.core.count.call(null,inst_42254);
var inst_42237 = inst_42255;
var inst_42238 = inst_42254;
var inst_42239 = inst_42256;
var inst_42240 = (0);
var state_42377__$1 = (function (){var statearr_42403 = state_42377;
(statearr_42403[(7)] = inst_42239);

(statearr_42403[(8)] = inst_42240);

(statearr_42403[(9)] = inst_42238);

(statearr_42403[(10)] = inst_42237);

return statearr_42403;
})();
var statearr_42404_42482 = state_42377__$1;
(statearr_42404_42482[(2)] = null);

(statearr_42404_42482[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (22))){
var inst_42298 = (state_42377[(23)]);
var inst_42294 = (state_42377[(24)]);
var inst_42290 = (state_42377[(19)]);
var inst_42293 = (state_42377[(25)]);
var inst_42293__$1 = (state_42377[(2)]);
var inst_42294__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42293__$1);
var inst_42295 = (function (){var all_files = inst_42290;
var res_SINGLEQUOTE_ = inst_42293__$1;
var res = inst_42294__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42298,inst_42294,inst_42290,inst_42293,inst_42293__$1,inst_42294__$1,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42219_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42219_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42298,inst_42294,inst_42290,inst_42293,inst_42293__$1,inst_42294__$1,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42296 = cljs.core.filter.call(null,inst_42295,inst_42293__$1);
var inst_42297 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42298__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42297);
var inst_42299 = cljs.core.not_empty.call(null,inst_42298__$1);
var state_42377__$1 = (function (){var statearr_42405 = state_42377;
(statearr_42405[(26)] = inst_42296);

(statearr_42405[(23)] = inst_42298__$1);

(statearr_42405[(24)] = inst_42294__$1);

(statearr_42405[(25)] = inst_42293__$1);

return statearr_42405;
})();
if(cljs.core.truth_(inst_42299)){
var statearr_42406_42483 = state_42377__$1;
(statearr_42406_42483[(1)] = (23));

} else {
var statearr_42407_42484 = state_42377__$1;
(statearr_42407_42484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (36))){
var state_42377__$1 = state_42377;
var statearr_42408_42485 = state_42377__$1;
(statearr_42408_42485[(2)] = false);

(statearr_42408_42485[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (41))){
var inst_42352 = (state_42377[(20)]);
var inst_42356 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42357 = cljs.core.map.call(null,inst_42356,inst_42352);
var inst_42358 = cljs.core.pr_str.call(null,inst_42357);
var inst_42359 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42358)].join('');
var inst_42360 = figwheel.client.utils.log.call(null,inst_42359);
var state_42377__$1 = state_42377;
var statearr_42409_42486 = state_42377__$1;
(statearr_42409_42486[(2)] = inst_42360);

(statearr_42409_42486[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (43))){
var inst_42353 = (state_42377[(21)]);
var inst_42363 = (state_42377[(2)]);
var inst_42364 = cljs.core.not_empty.call(null,inst_42353);
var state_42377__$1 = (function (){var statearr_42410 = state_42377;
(statearr_42410[(27)] = inst_42363);

return statearr_42410;
})();
if(cljs.core.truth_(inst_42364)){
var statearr_42411_42487 = state_42377__$1;
(statearr_42411_42487[(1)] = (44));

} else {
var statearr_42412_42488 = state_42377__$1;
(statearr_42412_42488[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (29))){
var inst_42296 = (state_42377[(26)]);
var inst_42298 = (state_42377[(23)]);
var inst_42330 = (state_42377[(16)]);
var inst_42294 = (state_42377[(24)]);
var inst_42290 = (state_42377[(19)]);
var inst_42293 = (state_42377[(25)]);
var inst_42326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42329 = (function (){var all_files = inst_42290;
var res_SINGLEQUOTE_ = inst_42293;
var res = inst_42294;
var files_not_loaded = inst_42296;
var dependencies_that_loaded = inst_42298;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42330,inst_42294,inst_42290,inst_42293,inst_42326,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42328){
var map__42413 = p__42328;
var map__42413__$1 = ((((!((map__42413 == null)))?((((map__42413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42413):map__42413);
var namespace = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42330,inst_42294,inst_42290,inst_42293,inst_42326,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42330__$1 = cljs.core.group_by.call(null,inst_42329,inst_42296);
var inst_42332 = (inst_42330__$1 == null);
var inst_42333 = cljs.core.not.call(null,inst_42332);
var state_42377__$1 = (function (){var statearr_42415 = state_42377;
(statearr_42415[(28)] = inst_42326);

(statearr_42415[(16)] = inst_42330__$1);

return statearr_42415;
})();
if(inst_42333){
var statearr_42416_42489 = state_42377__$1;
(statearr_42416_42489[(1)] = (32));

} else {
var statearr_42417_42490 = state_42377__$1;
(statearr_42417_42490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (44))){
var inst_42353 = (state_42377[(21)]);
var inst_42366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42353);
var inst_42367 = cljs.core.pr_str.call(null,inst_42366);
var inst_42368 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42367)].join('');
var inst_42369 = figwheel.client.utils.log.call(null,inst_42368);
var state_42377__$1 = state_42377;
var statearr_42418_42491 = state_42377__$1;
(statearr_42418_42491[(2)] = inst_42369);

(statearr_42418_42491[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (6))){
var inst_42271 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42419_42492 = state_42377__$1;
(statearr_42419_42492[(2)] = inst_42271);

(statearr_42419_42492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (28))){
var inst_42296 = (state_42377[(26)]);
var inst_42323 = (state_42377[(2)]);
var inst_42324 = cljs.core.not_empty.call(null,inst_42296);
var state_42377__$1 = (function (){var statearr_42420 = state_42377;
(statearr_42420[(29)] = inst_42323);

return statearr_42420;
})();
if(cljs.core.truth_(inst_42324)){
var statearr_42421_42493 = state_42377__$1;
(statearr_42421_42493[(1)] = (29));

} else {
var statearr_42422_42494 = state_42377__$1;
(statearr_42422_42494[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (25))){
var inst_42294 = (state_42377[(24)]);
var inst_42310 = (state_42377[(2)]);
var inst_42311 = cljs.core.not_empty.call(null,inst_42294);
var state_42377__$1 = (function (){var statearr_42423 = state_42377;
(statearr_42423[(30)] = inst_42310);

return statearr_42423;
})();
if(cljs.core.truth_(inst_42311)){
var statearr_42424_42495 = state_42377__$1;
(statearr_42424_42495[(1)] = (26));

} else {
var statearr_42425_42496 = state_42377__$1;
(statearr_42425_42496[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (34))){
var inst_42346 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42346)){
var statearr_42426_42497 = state_42377__$1;
(statearr_42426_42497[(1)] = (38));

} else {
var statearr_42427_42498 = state_42377__$1;
(statearr_42427_42498[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (17))){
var state_42377__$1 = state_42377;
var statearr_42428_42499 = state_42377__$1;
(statearr_42428_42499[(2)] = recompile_dependents);

(statearr_42428_42499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (3))){
var state_42377__$1 = state_42377;
var statearr_42429_42500 = state_42377__$1;
(statearr_42429_42500[(2)] = null);

(statearr_42429_42500[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (12))){
var inst_42267 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42430_42501 = state_42377__$1;
(statearr_42430_42501[(2)] = inst_42267);

(statearr_42430_42501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (2))){
var inst_42229 = (state_42377[(13)]);
var inst_42236 = cljs.core.seq.call(null,inst_42229);
var inst_42237 = inst_42236;
var inst_42238 = null;
var inst_42239 = (0);
var inst_42240 = (0);
var state_42377__$1 = (function (){var statearr_42431 = state_42377;
(statearr_42431[(7)] = inst_42239);

(statearr_42431[(8)] = inst_42240);

(statearr_42431[(9)] = inst_42238);

(statearr_42431[(10)] = inst_42237);

return statearr_42431;
})();
var statearr_42432_42502 = state_42377__$1;
(statearr_42432_42502[(2)] = null);

(statearr_42432_42502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (23))){
var inst_42296 = (state_42377[(26)]);
var inst_42298 = (state_42377[(23)]);
var inst_42294 = (state_42377[(24)]);
var inst_42290 = (state_42377[(19)]);
var inst_42293 = (state_42377[(25)]);
var inst_42301 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42303 = (function (){var all_files = inst_42290;
var res_SINGLEQUOTE_ = inst_42293;
var res = inst_42294;
var files_not_loaded = inst_42296;
var dependencies_that_loaded = inst_42298;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42301,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42302){
var map__42433 = p__42302;
var map__42433__$1 = ((((!((map__42433 == null)))?((((map__42433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42433):map__42433);
var request_url = cljs.core.get.call(null,map__42433__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42301,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42304 = cljs.core.reverse.call(null,inst_42298);
var inst_42305 = cljs.core.map.call(null,inst_42303,inst_42304);
var inst_42306 = cljs.core.pr_str.call(null,inst_42305);
var inst_42307 = figwheel.client.utils.log.call(null,inst_42306);
var state_42377__$1 = (function (){var statearr_42435 = state_42377;
(statearr_42435[(31)] = inst_42301);

return statearr_42435;
})();
var statearr_42436_42503 = state_42377__$1;
(statearr_42436_42503[(2)] = inst_42307);

(statearr_42436_42503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (35))){
var state_42377__$1 = state_42377;
var statearr_42437_42504 = state_42377__$1;
(statearr_42437_42504[(2)] = true);

(statearr_42437_42504[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (19))){
var inst_42280 = (state_42377[(12)]);
var inst_42286 = figwheel.client.file_reloading.expand_files.call(null,inst_42280);
var state_42377__$1 = state_42377;
var statearr_42438_42505 = state_42377__$1;
(statearr_42438_42505[(2)] = inst_42286);

(statearr_42438_42505[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (11))){
var state_42377__$1 = state_42377;
var statearr_42439_42506 = state_42377__$1;
(statearr_42439_42506[(2)] = null);

(statearr_42439_42506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (9))){
var inst_42269 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42440_42507 = state_42377__$1;
(statearr_42440_42507[(2)] = inst_42269);

(statearr_42440_42507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (5))){
var inst_42239 = (state_42377[(7)]);
var inst_42240 = (state_42377[(8)]);
var inst_42242 = (inst_42240 < inst_42239);
var inst_42243 = inst_42242;
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42243)){
var statearr_42441_42508 = state_42377__$1;
(statearr_42441_42508[(1)] = (7));

} else {
var statearr_42442_42509 = state_42377__$1;
(statearr_42442_42509[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (14))){
var inst_42250 = (state_42377[(22)]);
var inst_42259 = cljs.core.first.call(null,inst_42250);
var inst_42260 = figwheel.client.file_reloading.eval_body.call(null,inst_42259,opts);
var inst_42261 = cljs.core.next.call(null,inst_42250);
var inst_42237 = inst_42261;
var inst_42238 = null;
var inst_42239 = (0);
var inst_42240 = (0);
var state_42377__$1 = (function (){var statearr_42443 = state_42377;
(statearr_42443[(7)] = inst_42239);

(statearr_42443[(32)] = inst_42260);

(statearr_42443[(8)] = inst_42240);

(statearr_42443[(9)] = inst_42238);

(statearr_42443[(10)] = inst_42237);

return statearr_42443;
})();
var statearr_42444_42510 = state_42377__$1;
(statearr_42444_42510[(2)] = null);

(statearr_42444_42510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (45))){
var state_42377__$1 = state_42377;
var statearr_42445_42511 = state_42377__$1;
(statearr_42445_42511[(2)] = null);

(statearr_42445_42511[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (26))){
var inst_42296 = (state_42377[(26)]);
var inst_42298 = (state_42377[(23)]);
var inst_42294 = (state_42377[(24)]);
var inst_42290 = (state_42377[(19)]);
var inst_42293 = (state_42377[(25)]);
var inst_42313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42315 = (function (){var all_files = inst_42290;
var res_SINGLEQUOTE_ = inst_42293;
var res = inst_42294;
var files_not_loaded = inst_42296;
var dependencies_that_loaded = inst_42298;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42313,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42314){
var map__42446 = p__42314;
var map__42446__$1 = ((((!((map__42446 == null)))?((((map__42446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42446):map__42446);
var namespace = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42313,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42316 = cljs.core.map.call(null,inst_42315,inst_42294);
var inst_42317 = cljs.core.pr_str.call(null,inst_42316);
var inst_42318 = figwheel.client.utils.log.call(null,inst_42317);
var inst_42319 = (function (){var all_files = inst_42290;
var res_SINGLEQUOTE_ = inst_42293;
var res = inst_42294;
var files_not_loaded = inst_42296;
var dependencies_that_loaded = inst_42298;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42313,inst_42315,inst_42316,inst_42317,inst_42318,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42296,inst_42298,inst_42294,inst_42290,inst_42293,inst_42313,inst_42315,inst_42316,inst_42317,inst_42318,state_val_42378,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42320 = setTimeout(inst_42319,(10));
var state_42377__$1 = (function (){var statearr_42448 = state_42377;
(statearr_42448[(33)] = inst_42318);

(statearr_42448[(34)] = inst_42313);

return statearr_42448;
})();
var statearr_42449_42512 = state_42377__$1;
(statearr_42449_42512[(2)] = inst_42320);

(statearr_42449_42512[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (16))){
var state_42377__$1 = state_42377;
var statearr_42450_42513 = state_42377__$1;
(statearr_42450_42513[(2)] = reload_dependents);

(statearr_42450_42513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (38))){
var inst_42330 = (state_42377[(16)]);
var inst_42348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42330);
var state_42377__$1 = state_42377;
var statearr_42451_42514 = state_42377__$1;
(statearr_42451_42514[(2)] = inst_42348);

(statearr_42451_42514[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (30))){
var state_42377__$1 = state_42377;
var statearr_42452_42515 = state_42377__$1;
(statearr_42452_42515[(2)] = null);

(statearr_42452_42515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (10))){
var inst_42250 = (state_42377[(22)]);
var inst_42252 = cljs.core.chunked_seq_QMARK_.call(null,inst_42250);
var state_42377__$1 = state_42377;
if(inst_42252){
var statearr_42453_42516 = state_42377__$1;
(statearr_42453_42516[(1)] = (13));

} else {
var statearr_42454_42517 = state_42377__$1;
(statearr_42454_42517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (18))){
var inst_42284 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
if(cljs.core.truth_(inst_42284)){
var statearr_42455_42518 = state_42377__$1;
(statearr_42455_42518[(1)] = (19));

} else {
var statearr_42456_42519 = state_42377__$1;
(statearr_42456_42519[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (42))){
var state_42377__$1 = state_42377;
var statearr_42457_42520 = state_42377__$1;
(statearr_42457_42520[(2)] = null);

(statearr_42457_42520[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (37))){
var inst_42343 = (state_42377[(2)]);
var state_42377__$1 = state_42377;
var statearr_42458_42521 = state_42377__$1;
(statearr_42458_42521[(2)] = inst_42343);

(statearr_42458_42521[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42378 === (8))){
var inst_42250 = (state_42377[(22)]);
var inst_42237 = (state_42377[(10)]);
var inst_42250__$1 = cljs.core.seq.call(null,inst_42237);
var state_42377__$1 = (function (){var statearr_42459 = state_42377;
(statearr_42459[(22)] = inst_42250__$1);

return statearr_42459;
})();
if(inst_42250__$1){
var statearr_42460_42522 = state_42377__$1;
(statearr_42460_42522[(1)] = (10));

} else {
var statearr_42461_42523 = state_42377__$1;
(statearr_42461_42523[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39684__auto__,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____0 = (function (){
var statearr_42462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42462[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__);

(statearr_42462[(1)] = (1));

return statearr_42462;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____1 = (function (state_42377){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_42377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e42463){if((e42463 instanceof Object)){
var ex__39688__auto__ = e42463;
var statearr_42464_42524 = state_42377;
(statearr_42464_42524[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42525 = state_42377;
state_42377 = G__42525;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__ = function(state_42377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____1.call(this,state_42377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39776__auto__ = (function (){var statearr_42465 = f__39775__auto__.call(null);
(statearr_42465[(6)] = c__39774__auto__);

return statearr_42465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__,map__42222,map__42222__$1,opts,before_jsload,on_jsload,reload_dependents,map__42223,map__42223__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39774__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42528,link){
var map__42529 = p__42528;
var map__42529__$1 = ((((!((map__42529 == null)))?((((map__42529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42529):map__42529);
var file = cljs.core.get.call(null,map__42529__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42529,map__42529__$1,file){
return (function (p1__42526_SHARP_,p2__42527_SHARP_){
if(cljs.core._EQ_.call(null,p1__42526_SHARP_,p2__42527_SHARP_)){
return p1__42526_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42529,map__42529__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42532){
var map__42533 = p__42532;
var map__42533__$1 = ((((!((map__42533 == null)))?((((map__42533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42533):map__42533);
var match_length = cljs.core.get.call(null,map__42533__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42533__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42531_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42531_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42535_SHARP_,p2__42536_SHARP_){
return cljs.core.assoc.call(null,p1__42535_SHARP_,cljs.core.get.call(null,p2__42536_SHARP_,key),p2__42536_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42537 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42537);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42537);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42538,p__42539){
var map__42540 = p__42538;
var map__42540__$1 = ((((!((map__42540 == null)))?((((map__42540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42540):map__42540);
var on_cssload = cljs.core.get.call(null,map__42540__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42541 = p__42539;
var map__42541__$1 = ((((!((map__42541 == null)))?((((map__42541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42541):map__42541);
var files_msg = map__42541__$1;
var files = cljs.core.get.call(null,map__42541__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1523222484691
