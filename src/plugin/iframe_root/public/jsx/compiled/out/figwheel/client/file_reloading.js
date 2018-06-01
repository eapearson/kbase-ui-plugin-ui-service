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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41879_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41879_SHARP_));
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
var seq__41880 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41881 = null;
var count__41882 = (0);
var i__41883 = (0);
while(true){
if((i__41883 < count__41882)){
var n = cljs.core._nth.call(null,chunk__41881,i__41883);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41884 = seq__41880;
var G__41885 = chunk__41881;
var G__41886 = count__41882;
var G__41887 = (i__41883 + (1));
seq__41880 = G__41884;
chunk__41881 = G__41885;
count__41882 = G__41886;
i__41883 = G__41887;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41880);
if(temp__5457__auto__){
var seq__41880__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41880__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__41880__$1);
var G__41888 = cljs.core.chunk_rest.call(null,seq__41880__$1);
var G__41889 = c__31126__auto__;
var G__41890 = cljs.core.count.call(null,c__31126__auto__);
var G__41891 = (0);
seq__41880 = G__41888;
chunk__41881 = G__41889;
count__41882 = G__41890;
i__41883 = G__41891;
continue;
} else {
var n = cljs.core.first.call(null,seq__41880__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41892 = cljs.core.next.call(null,seq__41880__$1);
var G__41893 = null;
var G__41894 = (0);
var G__41895 = (0);
seq__41880 = G__41892;
chunk__41881 = G__41893;
count__41882 = G__41894;
i__41883 = G__41895;
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
return cljs.core.some.call(null,(function (p__41896){
var vec__41897 = p__41896;
var _ = cljs.core.nth.call(null,vec__41897,(0),null);
var v = cljs.core.nth.call(null,vec__41897,(1),null);
var and__30182__auto__ = v;
if(cljs.core.truth_(and__30182__auto__)){
return v.call(null,dep);
} else {
return and__30182__auto__;
}
}),cljs.core.filter.call(null,(function (p__41900){
var vec__41901 = p__41900;
var k = cljs.core.nth.call(null,vec__41901,(0),null);
var v = cljs.core.nth.call(null,vec__41901,(1),null);
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

var seq__41913_41921 = cljs.core.seq.call(null,deps);
var chunk__41914_41922 = null;
var count__41915_41923 = (0);
var i__41916_41924 = (0);
while(true){
if((i__41916_41924 < count__41915_41923)){
var dep_41925 = cljs.core._nth.call(null,chunk__41914_41922,i__41916_41924);
if(cljs.core.truth_((function (){var and__30182__auto__ = dep_41925;
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41925));
} else {
return and__30182__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41925,(depth + (1)),state);
} else {
}

var G__41926 = seq__41913_41921;
var G__41927 = chunk__41914_41922;
var G__41928 = count__41915_41923;
var G__41929 = (i__41916_41924 + (1));
seq__41913_41921 = G__41926;
chunk__41914_41922 = G__41927;
count__41915_41923 = G__41928;
i__41916_41924 = G__41929;
continue;
} else {
var temp__5457__auto___41930 = cljs.core.seq.call(null,seq__41913_41921);
if(temp__5457__auto___41930){
var seq__41913_41931__$1 = temp__5457__auto___41930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41913_41931__$1)){
var c__31126__auto___41932 = cljs.core.chunk_first.call(null,seq__41913_41931__$1);
var G__41933 = cljs.core.chunk_rest.call(null,seq__41913_41931__$1);
var G__41934 = c__31126__auto___41932;
var G__41935 = cljs.core.count.call(null,c__31126__auto___41932);
var G__41936 = (0);
seq__41913_41921 = G__41933;
chunk__41914_41922 = G__41934;
count__41915_41923 = G__41935;
i__41916_41924 = G__41936;
continue;
} else {
var dep_41937 = cljs.core.first.call(null,seq__41913_41931__$1);
if(cljs.core.truth_((function (){var and__30182__auto__ = dep_41937;
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41937));
} else {
return and__30182__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41937,(depth + (1)),state);
} else {
}

var G__41938 = cljs.core.next.call(null,seq__41913_41931__$1);
var G__41939 = null;
var G__41940 = (0);
var G__41941 = (0);
seq__41913_41921 = G__41938;
chunk__41914_41922 = G__41939;
count__41915_41923 = G__41940;
i__41916_41924 = G__41941;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41917){
var vec__41918 = p__41917;
var seq__41919 = cljs.core.seq.call(null,vec__41918);
var first__41920 = cljs.core.first.call(null,seq__41919);
var seq__41919__$1 = cljs.core.next.call(null,seq__41919);
var x = first__41920;
var xs = seq__41919__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41918,seq__41919,first__41920,seq__41919__$1,x,xs,get_deps__$1){
return (function (p1__41904_SHARP_){
return clojure.set.difference.call(null,p1__41904_SHARP_,x);
});})(vec__41918,seq__41919,first__41920,seq__41919__$1,x,xs,get_deps__$1))
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
var seq__41942 = cljs.core.seq.call(null,provides);
var chunk__41943 = null;
var count__41944 = (0);
var i__41945 = (0);
while(true){
if((i__41945 < count__41944)){
var prov = cljs.core._nth.call(null,chunk__41943,i__41945);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41946_41954 = cljs.core.seq.call(null,requires);
var chunk__41947_41955 = null;
var count__41948_41956 = (0);
var i__41949_41957 = (0);
while(true){
if((i__41949_41957 < count__41948_41956)){
var req_41958 = cljs.core._nth.call(null,chunk__41947_41955,i__41949_41957);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41958,prov);

var G__41959 = seq__41946_41954;
var G__41960 = chunk__41947_41955;
var G__41961 = count__41948_41956;
var G__41962 = (i__41949_41957 + (1));
seq__41946_41954 = G__41959;
chunk__41947_41955 = G__41960;
count__41948_41956 = G__41961;
i__41949_41957 = G__41962;
continue;
} else {
var temp__5457__auto___41963 = cljs.core.seq.call(null,seq__41946_41954);
if(temp__5457__auto___41963){
var seq__41946_41964__$1 = temp__5457__auto___41963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41946_41964__$1)){
var c__31126__auto___41965 = cljs.core.chunk_first.call(null,seq__41946_41964__$1);
var G__41966 = cljs.core.chunk_rest.call(null,seq__41946_41964__$1);
var G__41967 = c__31126__auto___41965;
var G__41968 = cljs.core.count.call(null,c__31126__auto___41965);
var G__41969 = (0);
seq__41946_41954 = G__41966;
chunk__41947_41955 = G__41967;
count__41948_41956 = G__41968;
i__41949_41957 = G__41969;
continue;
} else {
var req_41970 = cljs.core.first.call(null,seq__41946_41964__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41970,prov);

var G__41971 = cljs.core.next.call(null,seq__41946_41964__$1);
var G__41972 = null;
var G__41973 = (0);
var G__41974 = (0);
seq__41946_41954 = G__41971;
chunk__41947_41955 = G__41972;
count__41948_41956 = G__41973;
i__41949_41957 = G__41974;
continue;
}
} else {
}
}
break;
}

var G__41975 = seq__41942;
var G__41976 = chunk__41943;
var G__41977 = count__41944;
var G__41978 = (i__41945 + (1));
seq__41942 = G__41975;
chunk__41943 = G__41976;
count__41944 = G__41977;
i__41945 = G__41978;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41942);
if(temp__5457__auto__){
var seq__41942__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41942__$1)){
var c__31126__auto__ = cljs.core.chunk_first.call(null,seq__41942__$1);
var G__41979 = cljs.core.chunk_rest.call(null,seq__41942__$1);
var G__41980 = c__31126__auto__;
var G__41981 = cljs.core.count.call(null,c__31126__auto__);
var G__41982 = (0);
seq__41942 = G__41979;
chunk__41943 = G__41980;
count__41944 = G__41981;
i__41945 = G__41982;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41942__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41950_41983 = cljs.core.seq.call(null,requires);
var chunk__41951_41984 = null;
var count__41952_41985 = (0);
var i__41953_41986 = (0);
while(true){
if((i__41953_41986 < count__41952_41985)){
var req_41987 = cljs.core._nth.call(null,chunk__41951_41984,i__41953_41986);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41987,prov);

var G__41988 = seq__41950_41983;
var G__41989 = chunk__41951_41984;
var G__41990 = count__41952_41985;
var G__41991 = (i__41953_41986 + (1));
seq__41950_41983 = G__41988;
chunk__41951_41984 = G__41989;
count__41952_41985 = G__41990;
i__41953_41986 = G__41991;
continue;
} else {
var temp__5457__auto___41992__$1 = cljs.core.seq.call(null,seq__41950_41983);
if(temp__5457__auto___41992__$1){
var seq__41950_41993__$1 = temp__5457__auto___41992__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41950_41993__$1)){
var c__31126__auto___41994 = cljs.core.chunk_first.call(null,seq__41950_41993__$1);
var G__41995 = cljs.core.chunk_rest.call(null,seq__41950_41993__$1);
var G__41996 = c__31126__auto___41994;
var G__41997 = cljs.core.count.call(null,c__31126__auto___41994);
var G__41998 = (0);
seq__41950_41983 = G__41995;
chunk__41951_41984 = G__41996;
count__41952_41985 = G__41997;
i__41953_41986 = G__41998;
continue;
} else {
var req_41999 = cljs.core.first.call(null,seq__41950_41993__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41999,prov);

var G__42000 = cljs.core.next.call(null,seq__41950_41993__$1);
var G__42001 = null;
var G__42002 = (0);
var G__42003 = (0);
seq__41950_41983 = G__42000;
chunk__41951_41984 = G__42001;
count__41952_41985 = G__42002;
i__41953_41986 = G__42003;
continue;
}
} else {
}
}
break;
}

var G__42004 = cljs.core.next.call(null,seq__41942__$1);
var G__42005 = null;
var G__42006 = (0);
var G__42007 = (0);
seq__41942 = G__42004;
chunk__41943 = G__42005;
count__41944 = G__42006;
i__41945 = G__42007;
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
var seq__42008_42012 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42009_42013 = null;
var count__42010_42014 = (0);
var i__42011_42015 = (0);
while(true){
if((i__42011_42015 < count__42010_42014)){
var ns_42016 = cljs.core._nth.call(null,chunk__42009_42013,i__42011_42015);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42016);

var G__42017 = seq__42008_42012;
var G__42018 = chunk__42009_42013;
var G__42019 = count__42010_42014;
var G__42020 = (i__42011_42015 + (1));
seq__42008_42012 = G__42017;
chunk__42009_42013 = G__42018;
count__42010_42014 = G__42019;
i__42011_42015 = G__42020;
continue;
} else {
var temp__5457__auto___42021 = cljs.core.seq.call(null,seq__42008_42012);
if(temp__5457__auto___42021){
var seq__42008_42022__$1 = temp__5457__auto___42021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42008_42022__$1)){
var c__31126__auto___42023 = cljs.core.chunk_first.call(null,seq__42008_42022__$1);
var G__42024 = cljs.core.chunk_rest.call(null,seq__42008_42022__$1);
var G__42025 = c__31126__auto___42023;
var G__42026 = cljs.core.count.call(null,c__31126__auto___42023);
var G__42027 = (0);
seq__42008_42012 = G__42024;
chunk__42009_42013 = G__42025;
count__42010_42014 = G__42026;
i__42011_42015 = G__42027;
continue;
} else {
var ns_42028 = cljs.core.first.call(null,seq__42008_42022__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42028);

var G__42029 = cljs.core.next.call(null,seq__42008_42022__$1);
var G__42030 = null;
var G__42031 = (0);
var G__42032 = (0);
seq__42008_42012 = G__42029;
chunk__42009_42013 = G__42030;
count__42010_42014 = G__42031;
i__42011_42015 = G__42032;
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
var G__42033__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42034__i = 0, G__42034__a = new Array(arguments.length -  0);
while (G__42034__i < G__42034__a.length) {G__42034__a[G__42034__i] = arguments[G__42034__i + 0]; ++G__42034__i;}
  args = new cljs.core.IndexedSeq(G__42034__a,0,null);
} 
return G__42033__delegate.call(this,args);};
G__42033.cljs$lang$maxFixedArity = 0;
G__42033.cljs$lang$applyTo = (function (arglist__42035){
var args = cljs.core.seq(arglist__42035);
return G__42033__delegate(args);
});
G__42033.cljs$core$IFn$_invoke$arity$variadic = G__42033__delegate;
return G__42033;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__42036_SHARP_,p2__42037_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42036_SHARP_)].join('')),p2__42037_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__42038_SHARP_,p2__42039_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42038_SHARP_)].join(''),p2__42039_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42040 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42040.addCallback(((function (G__42040){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42040))
);

G__42040.addErrback(((function (G__42040){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42040))
);

return G__42040;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42041){if((e42041 instanceof Error)){
var e = e42041;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42041;

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
}catch (e42042){if((e42042 instanceof Error)){
var e = e42042;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42042;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42043 = cljs.core._EQ_;
var expr__42044 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42043.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42044))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42043.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42044))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42043.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42044))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42043,expr__42044){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42043,expr__42044))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42046,callback){
var map__42047 = p__42046;
var map__42047__$1 = ((((!((map__42047 == null)))?((((map__42047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42047):map__42047);
var file_msg = map__42047__$1;
var request_url = cljs.core.get.call(null,map__42047__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30194__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42047,map__42047__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42047,map__42047__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__){
return (function (state_42085){
var state_val_42086 = (state_42085[(1)]);
if((state_val_42086 === (7))){
var inst_42081 = (state_42085[(2)]);
var state_42085__$1 = state_42085;
var statearr_42087_42113 = state_42085__$1;
(statearr_42087_42113[(2)] = inst_42081);

(statearr_42087_42113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (1))){
var state_42085__$1 = state_42085;
var statearr_42088_42114 = state_42085__$1;
(statearr_42088_42114[(2)] = null);

(statearr_42088_42114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (4))){
var inst_42051 = (state_42085[(7)]);
var inst_42051__$1 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42089 = state_42085;
(statearr_42089[(7)] = inst_42051__$1);

return statearr_42089;
})();
if(cljs.core.truth_(inst_42051__$1)){
var statearr_42090_42115 = state_42085__$1;
(statearr_42090_42115[(1)] = (5));

} else {
var statearr_42091_42116 = state_42085__$1;
(statearr_42091_42116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (15))){
var inst_42064 = (state_42085[(8)]);
var inst_42066 = (state_42085[(9)]);
var inst_42068 = inst_42066.call(null,inst_42064);
var state_42085__$1 = state_42085;
var statearr_42092_42117 = state_42085__$1;
(statearr_42092_42117[(2)] = inst_42068);

(statearr_42092_42117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (13))){
var inst_42075 = (state_42085[(2)]);
var state_42085__$1 = state_42085;
var statearr_42093_42118 = state_42085__$1;
(statearr_42093_42118[(2)] = inst_42075);

(statearr_42093_42118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (6))){
var state_42085__$1 = state_42085;
var statearr_42094_42119 = state_42085__$1;
(statearr_42094_42119[(2)] = null);

(statearr_42094_42119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (17))){
var inst_42072 = (state_42085[(2)]);
var state_42085__$1 = state_42085;
var statearr_42095_42120 = state_42085__$1;
(statearr_42095_42120[(2)] = inst_42072);

(statearr_42095_42120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (3))){
var inst_42083 = (state_42085[(2)]);
var state_42085__$1 = state_42085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42085__$1,inst_42083);
} else {
if((state_val_42086 === (12))){
var state_42085__$1 = state_42085;
var statearr_42096_42121 = state_42085__$1;
(statearr_42096_42121[(2)] = null);

(statearr_42096_42121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (2))){
var state_42085__$1 = state_42085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42086 === (11))){
var inst_42056 = (state_42085[(10)]);
var inst_42062 = figwheel.client.file_reloading.blocking_load.call(null,inst_42056);
var state_42085__$1 = state_42085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(14),inst_42062);
} else {
if((state_val_42086 === (9))){
var inst_42056 = (state_42085[(10)]);
var state_42085__$1 = state_42085;
if(cljs.core.truth_(inst_42056)){
var statearr_42097_42122 = state_42085__$1;
(statearr_42097_42122[(1)] = (11));

} else {
var statearr_42098_42123 = state_42085__$1;
(statearr_42098_42123[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (5))){
var inst_42057 = (state_42085[(11)]);
var inst_42051 = (state_42085[(7)]);
var inst_42056 = cljs.core.nth.call(null,inst_42051,(0),null);
var inst_42057__$1 = cljs.core.nth.call(null,inst_42051,(1),null);
var state_42085__$1 = (function (){var statearr_42099 = state_42085;
(statearr_42099[(11)] = inst_42057__$1);

(statearr_42099[(10)] = inst_42056);

return statearr_42099;
})();
if(cljs.core.truth_(inst_42057__$1)){
var statearr_42100_42124 = state_42085__$1;
(statearr_42100_42124[(1)] = (8));

} else {
var statearr_42101_42125 = state_42085__$1;
(statearr_42101_42125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (14))){
var inst_42056 = (state_42085[(10)]);
var inst_42066 = (state_42085[(9)]);
var inst_42064 = (state_42085[(2)]);
var inst_42065 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42066__$1 = cljs.core.get.call(null,inst_42065,inst_42056);
var state_42085__$1 = (function (){var statearr_42102 = state_42085;
(statearr_42102[(8)] = inst_42064);

(statearr_42102[(9)] = inst_42066__$1);

return statearr_42102;
})();
if(cljs.core.truth_(inst_42066__$1)){
var statearr_42103_42126 = state_42085__$1;
(statearr_42103_42126[(1)] = (15));

} else {
var statearr_42104_42127 = state_42085__$1;
(statearr_42104_42127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (16))){
var inst_42064 = (state_42085[(8)]);
var inst_42070 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42064);
var state_42085__$1 = state_42085;
var statearr_42105_42128 = state_42085__$1;
(statearr_42105_42128[(2)] = inst_42070);

(statearr_42105_42128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (10))){
var inst_42077 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42106 = state_42085;
(statearr_42106[(12)] = inst_42077);

return statearr_42106;
})();
var statearr_42107_42129 = state_42085__$1;
(statearr_42107_42129[(2)] = null);

(statearr_42107_42129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (8))){
var inst_42057 = (state_42085[(11)]);
var inst_42059 = eval(inst_42057);
var state_42085__$1 = state_42085;
var statearr_42108_42130 = state_42085__$1;
(statearr_42108_42130[(2)] = inst_42059);

(statearr_42108_42130[(1)] = (10));


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
});})(c__39775__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39686__auto__ = null;
var figwheel$client$file_reloading$state_machine__39686__auto____0 = (function (){
var statearr_42109 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42109[(0)] = figwheel$client$file_reloading$state_machine__39686__auto__);

(statearr_42109[(1)] = (1));

return statearr_42109;
});
var figwheel$client$file_reloading$state_machine__39686__auto____1 = (function (state_42085){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_42085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e42110){if((e42110 instanceof Object)){
var ex__39689__auto__ = e42110;
var statearr_42111_42131 = state_42085;
(statearr_42111_42131[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42132 = state_42085;
state_42085 = G__42132;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39686__auto__ = function(state_42085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39686__auto____1.call(this,state_42085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39686__auto____0;
figwheel$client$file_reloading$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39686__auto____1;
return figwheel$client$file_reloading$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__))
})();
var state__39777__auto__ = (function (){var statearr_42112 = f__39776__auto__.call(null);
(statearr_42112[(6)] = c__39775__auto__);

return statearr_42112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__))
);

return c__39775__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42134 = arguments.length;
switch (G__42134) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42136,callback){
var map__42137 = p__42136;
var map__42137__$1 = ((((!((map__42137 == null)))?((((map__42137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42137):map__42137);
var file_msg = map__42137__$1;
var namespace = cljs.core.get.call(null,map__42137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42137,map__42137__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42137,map__42137__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42139){
var map__42140 = p__42139;
var map__42140__$1 = ((((!((map__42140 == null)))?((((map__42140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42140):map__42140);
var file_msg = map__42140__$1;
var namespace = cljs.core.get.call(null,map__42140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42142){
var map__42143 = p__42142;
var map__42143__$1 = ((((!((map__42143 == null)))?((((map__42143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42143):map__42143);
var file_msg = map__42143__$1;
var namespace = cljs.core.get.call(null,map__42143__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42145,callback){
var map__42146 = p__42145;
var map__42146__$1 = ((((!((map__42146 == null)))?((((map__42146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42146):map__42146);
var file_msg = map__42146__$1;
var request_url = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42146__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__39775__auto___42196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___42196,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___42196,out){
return (function (state_42181){
var state_val_42182 = (state_42181[(1)]);
if((state_val_42182 === (1))){
var inst_42155 = cljs.core.seq.call(null,files);
var inst_42156 = cljs.core.first.call(null,inst_42155);
var inst_42157 = cljs.core.next.call(null,inst_42155);
var inst_42158 = files;
var state_42181__$1 = (function (){var statearr_42183 = state_42181;
(statearr_42183[(7)] = inst_42157);

(statearr_42183[(8)] = inst_42158);

(statearr_42183[(9)] = inst_42156);

return statearr_42183;
})();
var statearr_42184_42197 = state_42181__$1;
(statearr_42184_42197[(2)] = null);

(statearr_42184_42197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42182 === (2))){
var inst_42158 = (state_42181[(8)]);
var inst_42164 = (state_42181[(10)]);
var inst_42163 = cljs.core.seq.call(null,inst_42158);
var inst_42164__$1 = cljs.core.first.call(null,inst_42163);
var inst_42165 = cljs.core.next.call(null,inst_42163);
var inst_42166 = (inst_42164__$1 == null);
var inst_42167 = cljs.core.not.call(null,inst_42166);
var state_42181__$1 = (function (){var statearr_42185 = state_42181;
(statearr_42185[(11)] = inst_42165);

(statearr_42185[(10)] = inst_42164__$1);

return statearr_42185;
})();
if(inst_42167){
var statearr_42186_42198 = state_42181__$1;
(statearr_42186_42198[(1)] = (4));

} else {
var statearr_42187_42199 = state_42181__$1;
(statearr_42187_42199[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42182 === (3))){
var inst_42179 = (state_42181[(2)]);
var state_42181__$1 = state_42181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42181__$1,inst_42179);
} else {
if((state_val_42182 === (4))){
var inst_42164 = (state_42181[(10)]);
var inst_42169 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42164);
var state_42181__$1 = state_42181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42181__$1,(7),inst_42169);
} else {
if((state_val_42182 === (5))){
var inst_42175 = cljs.core.async.close_BANG_.call(null,out);
var state_42181__$1 = state_42181;
var statearr_42188_42200 = state_42181__$1;
(statearr_42188_42200[(2)] = inst_42175);

(statearr_42188_42200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42182 === (6))){
var inst_42177 = (state_42181[(2)]);
var state_42181__$1 = state_42181;
var statearr_42189_42201 = state_42181__$1;
(statearr_42189_42201[(2)] = inst_42177);

(statearr_42189_42201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42182 === (7))){
var inst_42165 = (state_42181[(11)]);
var inst_42171 = (state_42181[(2)]);
var inst_42172 = cljs.core.async.put_BANG_.call(null,out,inst_42171);
var inst_42158 = inst_42165;
var state_42181__$1 = (function (){var statearr_42190 = state_42181;
(statearr_42190[(12)] = inst_42172);

(statearr_42190[(8)] = inst_42158);

return statearr_42190;
})();
var statearr_42191_42202 = state_42181__$1;
(statearr_42191_42202[(2)] = null);

(statearr_42191_42202[(1)] = (2));


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
});})(c__39775__auto___42196,out))
;
return ((function (switch__39685__auto__,c__39775__auto___42196,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____0 = (function (){
var statearr_42192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42192[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__);

(statearr_42192[(1)] = (1));

return statearr_42192;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____1 = (function (state_42181){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_42181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e42193){if((e42193 instanceof Object)){
var ex__39689__auto__ = e42193;
var statearr_42194_42203 = state_42181;
(statearr_42194_42203[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42204 = state_42181;
state_42181 = G__42204;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__ = function(state_42181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____1.call(this,state_42181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___42196,out))
})();
var state__39777__auto__ = (function (){var statearr_42195 = f__39776__auto__.call(null);
(statearr_42195[(6)] = c__39775__auto___42196);

return statearr_42195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___42196,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42205,opts){
var map__42206 = p__42205;
var map__42206__$1 = ((((!((map__42206 == null)))?((((map__42206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42206):map__42206);
var eval_body = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42208){var e = e42208;
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
return (function (p1__42209_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42209_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42210){
var vec__42211 = p__42210;
var k = cljs.core.nth.call(null,vec__42211,(0),null);
var v = cljs.core.nth.call(null,vec__42211,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42214){
var vec__42215 = p__42214;
var k = cljs.core.nth.call(null,vec__42215,(0),null);
var v = cljs.core.nth.call(null,vec__42215,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42221,p__42222){
var map__42223 = p__42221;
var map__42223__$1 = ((((!((map__42223 == null)))?((((map__42223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42223):map__42223);
var opts = map__42223__$1;
var before_jsload = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42223__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42224 = p__42222;
var map__42224__$1 = ((((!((map__42224 == null)))?((((map__42224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42224):map__42224);
var msg = map__42224__$1;
var files = cljs.core.get.call(null,map__42224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42224__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42224__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42378){
var state_val_42379 = (state_42378[(1)]);
if((state_val_42379 === (7))){
var inst_42239 = (state_42378[(7)]);
var inst_42240 = (state_42378[(8)]);
var inst_42241 = (state_42378[(9)]);
var inst_42238 = (state_42378[(10)]);
var inst_42246 = cljs.core._nth.call(null,inst_42239,inst_42241);
var inst_42247 = figwheel.client.file_reloading.eval_body.call(null,inst_42246,opts);
var inst_42248 = (inst_42241 + (1));
var tmp42380 = inst_42239;
var tmp42381 = inst_42240;
var tmp42382 = inst_42238;
var inst_42238__$1 = tmp42382;
var inst_42239__$1 = tmp42380;
var inst_42240__$1 = tmp42381;
var inst_42241__$1 = inst_42248;
var state_42378__$1 = (function (){var statearr_42383 = state_42378;
(statearr_42383[(11)] = inst_42247);

(statearr_42383[(7)] = inst_42239__$1);

(statearr_42383[(8)] = inst_42240__$1);

(statearr_42383[(9)] = inst_42241__$1);

(statearr_42383[(10)] = inst_42238__$1);

return statearr_42383;
})();
var statearr_42384_42467 = state_42378__$1;
(statearr_42384_42467[(2)] = null);

(statearr_42384_42467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (20))){
var inst_42281 = (state_42378[(12)]);
var inst_42289 = figwheel.client.file_reloading.sort_files.call(null,inst_42281);
var state_42378__$1 = state_42378;
var statearr_42385_42468 = state_42378__$1;
(statearr_42385_42468[(2)] = inst_42289);

(statearr_42385_42468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (27))){
var state_42378__$1 = state_42378;
var statearr_42386_42469 = state_42378__$1;
(statearr_42386_42469[(2)] = null);

(statearr_42386_42469[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (1))){
var inst_42230 = (state_42378[(13)]);
var inst_42227 = before_jsload.call(null,files);
var inst_42228 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42229 = (function (){return ((function (inst_42230,inst_42227,inst_42228,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42218_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42218_SHARP_);
});
;})(inst_42230,inst_42227,inst_42228,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42230__$1 = cljs.core.filter.call(null,inst_42229,files);
var inst_42231 = cljs.core.not_empty.call(null,inst_42230__$1);
var state_42378__$1 = (function (){var statearr_42387 = state_42378;
(statearr_42387[(14)] = inst_42227);

(statearr_42387[(15)] = inst_42228);

(statearr_42387[(13)] = inst_42230__$1);

return statearr_42387;
})();
if(cljs.core.truth_(inst_42231)){
var statearr_42388_42470 = state_42378__$1;
(statearr_42388_42470[(1)] = (2));

} else {
var statearr_42389_42471 = state_42378__$1;
(statearr_42389_42471[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (24))){
var state_42378__$1 = state_42378;
var statearr_42390_42472 = state_42378__$1;
(statearr_42390_42472[(2)] = null);

(statearr_42390_42472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (39))){
var inst_42331 = (state_42378[(16)]);
var state_42378__$1 = state_42378;
var statearr_42391_42473 = state_42378__$1;
(statearr_42391_42473[(2)] = inst_42331);

(statearr_42391_42473[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (46))){
var inst_42373 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42392_42474 = state_42378__$1;
(statearr_42392_42474[(2)] = inst_42373);

(statearr_42392_42474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (4))){
var inst_42275 = (state_42378[(2)]);
var inst_42276 = cljs.core.List.EMPTY;
var inst_42277 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42276);
var inst_42278 = (function (){return ((function (inst_42275,inst_42276,inst_42277,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42219_SHARP_){
var and__30182__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42219_SHARP_);
if(cljs.core.truth_(and__30182__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42219_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42219_SHARP_)));
} else {
return and__30182__auto__;
}
});
;})(inst_42275,inst_42276,inst_42277,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42279 = cljs.core.filter.call(null,inst_42278,files);
var inst_42280 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42281 = cljs.core.concat.call(null,inst_42279,inst_42280);
var state_42378__$1 = (function (){var statearr_42393 = state_42378;
(statearr_42393[(12)] = inst_42281);

(statearr_42393[(17)] = inst_42277);

(statearr_42393[(18)] = inst_42275);

return statearr_42393;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42394_42475 = state_42378__$1;
(statearr_42394_42475[(1)] = (16));

} else {
var statearr_42395_42476 = state_42378__$1;
(statearr_42395_42476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (15))){
var inst_42265 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42396_42477 = state_42378__$1;
(statearr_42396_42477[(2)] = inst_42265);

(statearr_42396_42477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (21))){
var inst_42291 = (state_42378[(19)]);
var inst_42291__$1 = (state_42378[(2)]);
var inst_42292 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42291__$1);
var state_42378__$1 = (function (){var statearr_42397 = state_42378;
(statearr_42397[(19)] = inst_42291__$1);

return statearr_42397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42378__$1,(22),inst_42292);
} else {
if((state_val_42379 === (31))){
var inst_42376 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42378__$1,inst_42376);
} else {
if((state_val_42379 === (32))){
var inst_42331 = (state_42378[(16)]);
var inst_42336 = inst_42331.cljs$lang$protocol_mask$partition0$;
var inst_42337 = (inst_42336 & (64));
var inst_42338 = inst_42331.cljs$core$ISeq$;
var inst_42339 = (cljs.core.PROTOCOL_SENTINEL === inst_42338);
var inst_42340 = (inst_42337) || (inst_42339);
var state_42378__$1 = state_42378;
if(cljs.core.truth_(inst_42340)){
var statearr_42398_42478 = state_42378__$1;
(statearr_42398_42478[(1)] = (35));

} else {
var statearr_42399_42479 = state_42378__$1;
(statearr_42399_42479[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (40))){
var inst_42353 = (state_42378[(20)]);
var inst_42352 = (state_42378[(2)]);
var inst_42353__$1 = cljs.core.get.call(null,inst_42352,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42354 = cljs.core.get.call(null,inst_42352,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42355 = cljs.core.not_empty.call(null,inst_42353__$1);
var state_42378__$1 = (function (){var statearr_42400 = state_42378;
(statearr_42400[(21)] = inst_42354);

(statearr_42400[(20)] = inst_42353__$1);

return statearr_42400;
})();
if(cljs.core.truth_(inst_42355)){
var statearr_42401_42480 = state_42378__$1;
(statearr_42401_42480[(1)] = (41));

} else {
var statearr_42402_42481 = state_42378__$1;
(statearr_42402_42481[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (33))){
var state_42378__$1 = state_42378;
var statearr_42403_42482 = state_42378__$1;
(statearr_42403_42482[(2)] = false);

(statearr_42403_42482[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (13))){
var inst_42251 = (state_42378[(22)]);
var inst_42255 = cljs.core.chunk_first.call(null,inst_42251);
var inst_42256 = cljs.core.chunk_rest.call(null,inst_42251);
var inst_42257 = cljs.core.count.call(null,inst_42255);
var inst_42238 = inst_42256;
var inst_42239 = inst_42255;
var inst_42240 = inst_42257;
var inst_42241 = (0);
var state_42378__$1 = (function (){var statearr_42404 = state_42378;
(statearr_42404[(7)] = inst_42239);

(statearr_42404[(8)] = inst_42240);

(statearr_42404[(9)] = inst_42241);

(statearr_42404[(10)] = inst_42238);

return statearr_42404;
})();
var statearr_42405_42483 = state_42378__$1;
(statearr_42405_42483[(2)] = null);

(statearr_42405_42483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (22))){
var inst_42299 = (state_42378[(23)]);
var inst_42291 = (state_42378[(19)]);
var inst_42294 = (state_42378[(24)]);
var inst_42295 = (state_42378[(25)]);
var inst_42294__$1 = (state_42378[(2)]);
var inst_42295__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42294__$1);
var inst_42296 = (function (){var all_files = inst_42291;
var res_SINGLEQUOTE_ = inst_42294__$1;
var res = inst_42295__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42299,inst_42291,inst_42294,inst_42295,inst_42294__$1,inst_42295__$1,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42220_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42220_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42299,inst_42291,inst_42294,inst_42295,inst_42294__$1,inst_42295__$1,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42297 = cljs.core.filter.call(null,inst_42296,inst_42294__$1);
var inst_42298 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42299__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42298);
var inst_42300 = cljs.core.not_empty.call(null,inst_42299__$1);
var state_42378__$1 = (function (){var statearr_42406 = state_42378;
(statearr_42406[(23)] = inst_42299__$1);

(statearr_42406[(26)] = inst_42297);

(statearr_42406[(24)] = inst_42294__$1);

(statearr_42406[(25)] = inst_42295__$1);

return statearr_42406;
})();
if(cljs.core.truth_(inst_42300)){
var statearr_42407_42484 = state_42378__$1;
(statearr_42407_42484[(1)] = (23));

} else {
var statearr_42408_42485 = state_42378__$1;
(statearr_42408_42485[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (36))){
var state_42378__$1 = state_42378;
var statearr_42409_42486 = state_42378__$1;
(statearr_42409_42486[(2)] = false);

(statearr_42409_42486[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (41))){
var inst_42353 = (state_42378[(20)]);
var inst_42357 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42358 = cljs.core.map.call(null,inst_42357,inst_42353);
var inst_42359 = cljs.core.pr_str.call(null,inst_42358);
var inst_42360 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42359)].join('');
var inst_42361 = figwheel.client.utils.log.call(null,inst_42360);
var state_42378__$1 = state_42378;
var statearr_42410_42487 = state_42378__$1;
(statearr_42410_42487[(2)] = inst_42361);

(statearr_42410_42487[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (43))){
var inst_42354 = (state_42378[(21)]);
var inst_42364 = (state_42378[(2)]);
var inst_42365 = cljs.core.not_empty.call(null,inst_42354);
var state_42378__$1 = (function (){var statearr_42411 = state_42378;
(statearr_42411[(27)] = inst_42364);

return statearr_42411;
})();
if(cljs.core.truth_(inst_42365)){
var statearr_42412_42488 = state_42378__$1;
(statearr_42412_42488[(1)] = (44));

} else {
var statearr_42413_42489 = state_42378__$1;
(statearr_42413_42489[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (29))){
var inst_42331 = (state_42378[(16)]);
var inst_42299 = (state_42378[(23)]);
var inst_42297 = (state_42378[(26)]);
var inst_42291 = (state_42378[(19)]);
var inst_42294 = (state_42378[(24)]);
var inst_42295 = (state_42378[(25)]);
var inst_42327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42330 = (function (){var all_files = inst_42291;
var res_SINGLEQUOTE_ = inst_42294;
var res = inst_42295;
var files_not_loaded = inst_42297;
var dependencies_that_loaded = inst_42299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42331,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42327,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42329){
var map__42414 = p__42329;
var map__42414__$1 = ((((!((map__42414 == null)))?((((map__42414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42414):map__42414);
var namespace = cljs.core.get.call(null,map__42414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42331,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42327,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42331__$1 = cljs.core.group_by.call(null,inst_42330,inst_42297);
var inst_42333 = (inst_42331__$1 == null);
var inst_42334 = cljs.core.not.call(null,inst_42333);
var state_42378__$1 = (function (){var statearr_42416 = state_42378;
(statearr_42416[(16)] = inst_42331__$1);

(statearr_42416[(28)] = inst_42327);

return statearr_42416;
})();
if(inst_42334){
var statearr_42417_42490 = state_42378__$1;
(statearr_42417_42490[(1)] = (32));

} else {
var statearr_42418_42491 = state_42378__$1;
(statearr_42418_42491[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (44))){
var inst_42354 = (state_42378[(21)]);
var inst_42367 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42354);
var inst_42368 = cljs.core.pr_str.call(null,inst_42367);
var inst_42369 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42368)].join('');
var inst_42370 = figwheel.client.utils.log.call(null,inst_42369);
var state_42378__$1 = state_42378;
var statearr_42419_42492 = state_42378__$1;
(statearr_42419_42492[(2)] = inst_42370);

(statearr_42419_42492[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (6))){
var inst_42272 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42420_42493 = state_42378__$1;
(statearr_42420_42493[(2)] = inst_42272);

(statearr_42420_42493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (28))){
var inst_42297 = (state_42378[(26)]);
var inst_42324 = (state_42378[(2)]);
var inst_42325 = cljs.core.not_empty.call(null,inst_42297);
var state_42378__$1 = (function (){var statearr_42421 = state_42378;
(statearr_42421[(29)] = inst_42324);

return statearr_42421;
})();
if(cljs.core.truth_(inst_42325)){
var statearr_42422_42494 = state_42378__$1;
(statearr_42422_42494[(1)] = (29));

} else {
var statearr_42423_42495 = state_42378__$1;
(statearr_42423_42495[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (25))){
var inst_42295 = (state_42378[(25)]);
var inst_42311 = (state_42378[(2)]);
var inst_42312 = cljs.core.not_empty.call(null,inst_42295);
var state_42378__$1 = (function (){var statearr_42424 = state_42378;
(statearr_42424[(30)] = inst_42311);

return statearr_42424;
})();
if(cljs.core.truth_(inst_42312)){
var statearr_42425_42496 = state_42378__$1;
(statearr_42425_42496[(1)] = (26));

} else {
var statearr_42426_42497 = state_42378__$1;
(statearr_42426_42497[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (34))){
var inst_42347 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
if(cljs.core.truth_(inst_42347)){
var statearr_42427_42498 = state_42378__$1;
(statearr_42427_42498[(1)] = (38));

} else {
var statearr_42428_42499 = state_42378__$1;
(statearr_42428_42499[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (17))){
var state_42378__$1 = state_42378;
var statearr_42429_42500 = state_42378__$1;
(statearr_42429_42500[(2)] = recompile_dependents);

(statearr_42429_42500[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (3))){
var state_42378__$1 = state_42378;
var statearr_42430_42501 = state_42378__$1;
(statearr_42430_42501[(2)] = null);

(statearr_42430_42501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (12))){
var inst_42268 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42431_42502 = state_42378__$1;
(statearr_42431_42502[(2)] = inst_42268);

(statearr_42431_42502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (2))){
var inst_42230 = (state_42378[(13)]);
var inst_42237 = cljs.core.seq.call(null,inst_42230);
var inst_42238 = inst_42237;
var inst_42239 = null;
var inst_42240 = (0);
var inst_42241 = (0);
var state_42378__$1 = (function (){var statearr_42432 = state_42378;
(statearr_42432[(7)] = inst_42239);

(statearr_42432[(8)] = inst_42240);

(statearr_42432[(9)] = inst_42241);

(statearr_42432[(10)] = inst_42238);

return statearr_42432;
})();
var statearr_42433_42503 = state_42378__$1;
(statearr_42433_42503[(2)] = null);

(statearr_42433_42503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (23))){
var inst_42299 = (state_42378[(23)]);
var inst_42297 = (state_42378[(26)]);
var inst_42291 = (state_42378[(19)]);
var inst_42294 = (state_42378[(24)]);
var inst_42295 = (state_42378[(25)]);
var inst_42302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42304 = (function (){var all_files = inst_42291;
var res_SINGLEQUOTE_ = inst_42294;
var res = inst_42295;
var files_not_loaded = inst_42297;
var dependencies_that_loaded = inst_42299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42302,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42303){
var map__42434 = p__42303;
var map__42434__$1 = ((((!((map__42434 == null)))?((((map__42434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42434):map__42434);
var request_url = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42302,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42305 = cljs.core.reverse.call(null,inst_42299);
var inst_42306 = cljs.core.map.call(null,inst_42304,inst_42305);
var inst_42307 = cljs.core.pr_str.call(null,inst_42306);
var inst_42308 = figwheel.client.utils.log.call(null,inst_42307);
var state_42378__$1 = (function (){var statearr_42436 = state_42378;
(statearr_42436[(31)] = inst_42302);

return statearr_42436;
})();
var statearr_42437_42504 = state_42378__$1;
(statearr_42437_42504[(2)] = inst_42308);

(statearr_42437_42504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (35))){
var state_42378__$1 = state_42378;
var statearr_42438_42505 = state_42378__$1;
(statearr_42438_42505[(2)] = true);

(statearr_42438_42505[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (19))){
var inst_42281 = (state_42378[(12)]);
var inst_42287 = figwheel.client.file_reloading.expand_files.call(null,inst_42281);
var state_42378__$1 = state_42378;
var statearr_42439_42506 = state_42378__$1;
(statearr_42439_42506[(2)] = inst_42287);

(statearr_42439_42506[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (11))){
var state_42378__$1 = state_42378;
var statearr_42440_42507 = state_42378__$1;
(statearr_42440_42507[(2)] = null);

(statearr_42440_42507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (9))){
var inst_42270 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42441_42508 = state_42378__$1;
(statearr_42441_42508[(2)] = inst_42270);

(statearr_42441_42508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (5))){
var inst_42240 = (state_42378[(8)]);
var inst_42241 = (state_42378[(9)]);
var inst_42243 = (inst_42241 < inst_42240);
var inst_42244 = inst_42243;
var state_42378__$1 = state_42378;
if(cljs.core.truth_(inst_42244)){
var statearr_42442_42509 = state_42378__$1;
(statearr_42442_42509[(1)] = (7));

} else {
var statearr_42443_42510 = state_42378__$1;
(statearr_42443_42510[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (14))){
var inst_42251 = (state_42378[(22)]);
var inst_42260 = cljs.core.first.call(null,inst_42251);
var inst_42261 = figwheel.client.file_reloading.eval_body.call(null,inst_42260,opts);
var inst_42262 = cljs.core.next.call(null,inst_42251);
var inst_42238 = inst_42262;
var inst_42239 = null;
var inst_42240 = (0);
var inst_42241 = (0);
var state_42378__$1 = (function (){var statearr_42444 = state_42378;
(statearr_42444[(7)] = inst_42239);

(statearr_42444[(32)] = inst_42261);

(statearr_42444[(8)] = inst_42240);

(statearr_42444[(9)] = inst_42241);

(statearr_42444[(10)] = inst_42238);

return statearr_42444;
})();
var statearr_42445_42511 = state_42378__$1;
(statearr_42445_42511[(2)] = null);

(statearr_42445_42511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (45))){
var state_42378__$1 = state_42378;
var statearr_42446_42512 = state_42378__$1;
(statearr_42446_42512[(2)] = null);

(statearr_42446_42512[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (26))){
var inst_42299 = (state_42378[(23)]);
var inst_42297 = (state_42378[(26)]);
var inst_42291 = (state_42378[(19)]);
var inst_42294 = (state_42378[(24)]);
var inst_42295 = (state_42378[(25)]);
var inst_42314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42316 = (function (){var all_files = inst_42291;
var res_SINGLEQUOTE_ = inst_42294;
var res = inst_42295;
var files_not_loaded = inst_42297;
var dependencies_that_loaded = inst_42299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42314,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42315){
var map__42447 = p__42315;
var map__42447__$1 = ((((!((map__42447 == null)))?((((map__42447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42447):map__42447);
var namespace = cljs.core.get.call(null,map__42447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42314,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42317 = cljs.core.map.call(null,inst_42316,inst_42295);
var inst_42318 = cljs.core.pr_str.call(null,inst_42317);
var inst_42319 = figwheel.client.utils.log.call(null,inst_42318);
var inst_42320 = (function (){var all_files = inst_42291;
var res_SINGLEQUOTE_ = inst_42294;
var res = inst_42295;
var files_not_loaded = inst_42297;
var dependencies_that_loaded = inst_42299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42314,inst_42316,inst_42317,inst_42318,inst_42319,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42299,inst_42297,inst_42291,inst_42294,inst_42295,inst_42314,inst_42316,inst_42317,inst_42318,inst_42319,state_val_42379,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42321 = setTimeout(inst_42320,(10));
var state_42378__$1 = (function (){var statearr_42449 = state_42378;
(statearr_42449[(33)] = inst_42319);

(statearr_42449[(34)] = inst_42314);

return statearr_42449;
})();
var statearr_42450_42513 = state_42378__$1;
(statearr_42450_42513[(2)] = inst_42321);

(statearr_42450_42513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (16))){
var state_42378__$1 = state_42378;
var statearr_42451_42514 = state_42378__$1;
(statearr_42451_42514[(2)] = reload_dependents);

(statearr_42451_42514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (38))){
var inst_42331 = (state_42378[(16)]);
var inst_42349 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42331);
var state_42378__$1 = state_42378;
var statearr_42452_42515 = state_42378__$1;
(statearr_42452_42515[(2)] = inst_42349);

(statearr_42452_42515[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (30))){
var state_42378__$1 = state_42378;
var statearr_42453_42516 = state_42378__$1;
(statearr_42453_42516[(2)] = null);

(statearr_42453_42516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (10))){
var inst_42251 = (state_42378[(22)]);
var inst_42253 = cljs.core.chunked_seq_QMARK_.call(null,inst_42251);
var state_42378__$1 = state_42378;
if(inst_42253){
var statearr_42454_42517 = state_42378__$1;
(statearr_42454_42517[(1)] = (13));

} else {
var statearr_42455_42518 = state_42378__$1;
(statearr_42455_42518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (18))){
var inst_42285 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
if(cljs.core.truth_(inst_42285)){
var statearr_42456_42519 = state_42378__$1;
(statearr_42456_42519[(1)] = (19));

} else {
var statearr_42457_42520 = state_42378__$1;
(statearr_42457_42520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (42))){
var state_42378__$1 = state_42378;
var statearr_42458_42521 = state_42378__$1;
(statearr_42458_42521[(2)] = null);

(statearr_42458_42521[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (37))){
var inst_42344 = (state_42378[(2)]);
var state_42378__$1 = state_42378;
var statearr_42459_42522 = state_42378__$1;
(statearr_42459_42522[(2)] = inst_42344);

(statearr_42459_42522[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42379 === (8))){
var inst_42251 = (state_42378[(22)]);
var inst_42238 = (state_42378[(10)]);
var inst_42251__$1 = cljs.core.seq.call(null,inst_42238);
var state_42378__$1 = (function (){var statearr_42460 = state_42378;
(statearr_42460[(22)] = inst_42251__$1);

return statearr_42460;
})();
if(inst_42251__$1){
var statearr_42461_42523 = state_42378__$1;
(statearr_42461_42523[(1)] = (10));

} else {
var statearr_42462_42524 = state_42378__$1;
(statearr_42462_42524[(1)] = (11));

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
});})(c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39685__auto__,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____0 = (function (){
var statearr_42463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42463[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__);

(statearr_42463[(1)] = (1));

return statearr_42463;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____1 = (function (state_42378){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_42378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e42464){if((e42464 instanceof Object)){
var ex__39689__auto__ = e42464;
var statearr_42465_42525 = state_42378;
(statearr_42465_42525[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42526 = state_42378;
state_42378 = G__42526;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__ = function(state_42378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____1.call(this,state_42378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39777__auto__ = (function (){var statearr_42466 = f__39776__auto__.call(null);
(statearr_42466[(6)] = c__39775__auto__);

return statearr_42466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__,map__42223,map__42223__$1,opts,before_jsload,on_jsload,reload_dependents,map__42224,map__42224__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39775__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42529,link){
var map__42530 = p__42529;
var map__42530__$1 = ((((!((map__42530 == null)))?((((map__42530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42530):map__42530);
var file = cljs.core.get.call(null,map__42530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42530,map__42530__$1,file){
return (function (p1__42527_SHARP_,p2__42528_SHARP_){
if(cljs.core._EQ_.call(null,p1__42527_SHARP_,p2__42528_SHARP_)){
return p1__42527_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42530,map__42530__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42533){
var map__42534 = p__42533;
var map__42534__$1 = ((((!((map__42534 == null)))?((((map__42534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42534):map__42534);
var match_length = cljs.core.get.call(null,map__42534__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42534__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42532_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42532_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42536_SHARP_,p2__42537_SHARP_){
return cljs.core.assoc.call(null,p1__42536_SHARP_,cljs.core.get.call(null,p2__42537_SHARP_,key),p2__42537_SHARP_);
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
var loaded_f_datas_42538 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42538);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42538);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42539,p__42540){
var map__42541 = p__42539;
var map__42541__$1 = ((((!((map__42541 == null)))?((((map__42541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42541):map__42541);
var on_cssload = cljs.core.get.call(null,map__42541__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42542 = p__42540;
var map__42542__$1 = ((((!((map__42542 == null)))?((((map__42542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42542):map__42542);
var files_msg = map__42542__$1;
var files = cljs.core.get.call(null,map__42542__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1521387316011
