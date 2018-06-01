// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39835 = arguments.length;
switch (G__39835) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39836 = (function (f,blockable,meta39837){
this.f = f;
this.blockable = blockable;
this.meta39837 = meta39837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39838,meta39837__$1){
var self__ = this;
var _39838__$1 = this;
return (new cljs.core.async.t_cljs$core$async39836(self__.f,self__.blockable,meta39837__$1));
});

cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39838){
var self__ = this;
var _39838__$1 = this;
return self__.meta39837;
});

cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39837","meta39837",-913589287,null)], null);
});

cljs.core.async.t_cljs$core$async39836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39836";

cljs.core.async.t_cljs$core$async39836.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async39836");
});

cljs.core.async.__GT_t_cljs$core$async39836 = (function cljs$core$async$__GT_t_cljs$core$async39836(f__$1,blockable__$1,meta39837){
return (new cljs.core.async.t_cljs$core$async39836(f__$1,blockable__$1,meta39837));
});

}

return (new cljs.core.async.t_cljs$core$async39836(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39842 = arguments.length;
switch (G__39842) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39845 = arguments.length;
switch (G__39845) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39848 = arguments.length;
switch (G__39848) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39850 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39850);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39850,ret){
return (function (){
return fn1.call(null,val_39850);
});})(val_39850,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39852 = arguments.length;
switch (G__39852) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31240__auto___39854 = n;
var x_39855 = (0);
while(true){
if((x_39855 < n__31240__auto___39854)){
(a[x_39855] = (0));

var G__39856 = (x_39855 + (1));
x_39855 = G__39856;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39857 = (i + (1));
i = G__39857;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39858 = (function (flag,meta39859){
this.flag = flag;
this.meta39859 = meta39859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39860,meta39859__$1){
var self__ = this;
var _39860__$1 = this;
return (new cljs.core.async.t_cljs$core$async39858(self__.flag,meta39859__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39860){
var self__ = this;
var _39860__$1 = this;
return self__.meta39859;
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39859","meta39859",-486860227,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39858";

cljs.core.async.t_cljs$core$async39858.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async39858");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39858 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39858(flag__$1,meta39859){
return (new cljs.core.async.t_cljs$core$async39858(flag__$1,meta39859));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39858(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39861 = (function (flag,cb,meta39862){
this.flag = flag;
this.cb = cb;
this.meta39862 = meta39862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39863,meta39862__$1){
var self__ = this;
var _39863__$1 = this;
return (new cljs.core.async.t_cljs$core$async39861(self__.flag,self__.cb,meta39862__$1));
});

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39863){
var self__ = this;
var _39863__$1 = this;
return self__.meta39862;
});

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39862","meta39862",-1920155902,null)], null);
});

cljs.core.async.t_cljs$core$async39861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39861";

cljs.core.async.t_cljs$core$async39861.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async39861");
});

cljs.core.async.__GT_t_cljs$core$async39861 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39861(flag__$1,cb__$1,meta39862){
return (new cljs.core.async.t_cljs$core$async39861(flag__$1,cb__$1,meta39862));
});

}

return (new cljs.core.async.t_cljs$core$async39861(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39864_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39865_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39865_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30194__auto__ = wport;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39866 = (i + (1));
i = G__39866;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30194__auto__ = ret;
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30182__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30182__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30182__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31481__auto__ = [];
var len__31474__auto___39872 = arguments.length;
var i__31475__auto___39873 = (0);
while(true){
if((i__31475__auto___39873 < len__31474__auto___39872)){
args__31481__auto__.push((arguments[i__31475__auto___39873]));

var G__39874 = (i__31475__auto___39873 + (1));
i__31475__auto___39873 = G__39874;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((1) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39869){
var map__39870 = p__39869;
var map__39870__$1 = ((((!((map__39870 == null)))?((((map__39870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39870):map__39870);
var opts = map__39870__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39867){
var G__39868 = cljs.core.first.call(null,seq39867);
var seq39867__$1 = cljs.core.next.call(null,seq39867);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39868,seq39867__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39876 = arguments.length;
switch (G__39876) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39775__auto___39922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___39922){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___39922){
return (function (state_39900){
var state_val_39901 = (state_39900[(1)]);
if((state_val_39901 === (7))){
var inst_39896 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39902_39923 = state_39900__$1;
(statearr_39902_39923[(2)] = inst_39896);

(statearr_39902_39923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (1))){
var state_39900__$1 = state_39900;
var statearr_39903_39924 = state_39900__$1;
(statearr_39903_39924[(2)] = null);

(statearr_39903_39924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (4))){
var inst_39879 = (state_39900[(7)]);
var inst_39879__$1 = (state_39900[(2)]);
var inst_39880 = (inst_39879__$1 == null);
var state_39900__$1 = (function (){var statearr_39904 = state_39900;
(statearr_39904[(7)] = inst_39879__$1);

return statearr_39904;
})();
if(cljs.core.truth_(inst_39880)){
var statearr_39905_39925 = state_39900__$1;
(statearr_39905_39925[(1)] = (5));

} else {
var statearr_39906_39926 = state_39900__$1;
(statearr_39906_39926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (13))){
var state_39900__$1 = state_39900;
var statearr_39907_39927 = state_39900__$1;
(statearr_39907_39927[(2)] = null);

(statearr_39907_39927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (6))){
var inst_39879 = (state_39900[(7)]);
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39900__$1,(11),to,inst_39879);
} else {
if((state_val_39901 === (3))){
var inst_39898 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39900__$1,inst_39898);
} else {
if((state_val_39901 === (12))){
var state_39900__$1 = state_39900;
var statearr_39908_39928 = state_39900__$1;
(statearr_39908_39928[(2)] = null);

(statearr_39908_39928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (2))){
var state_39900__$1 = state_39900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39900__$1,(4),from);
} else {
if((state_val_39901 === (11))){
var inst_39889 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
if(cljs.core.truth_(inst_39889)){
var statearr_39909_39929 = state_39900__$1;
(statearr_39909_39929[(1)] = (12));

} else {
var statearr_39910_39930 = state_39900__$1;
(statearr_39910_39930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (9))){
var state_39900__$1 = state_39900;
var statearr_39911_39931 = state_39900__$1;
(statearr_39911_39931[(2)] = null);

(statearr_39911_39931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (5))){
var state_39900__$1 = state_39900;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39912_39932 = state_39900__$1;
(statearr_39912_39932[(1)] = (8));

} else {
var statearr_39913_39933 = state_39900__$1;
(statearr_39913_39933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (14))){
var inst_39894 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39914_39934 = state_39900__$1;
(statearr_39914_39934[(2)] = inst_39894);

(statearr_39914_39934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (10))){
var inst_39886 = (state_39900[(2)]);
var state_39900__$1 = state_39900;
var statearr_39915_39935 = state_39900__$1;
(statearr_39915_39935[(2)] = inst_39886);

(statearr_39915_39935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39901 === (8))){
var inst_39883 = cljs.core.async.close_BANG_.call(null,to);
var state_39900__$1 = state_39900;
var statearr_39916_39936 = state_39900__$1;
(statearr_39916_39936[(2)] = inst_39883);

(statearr_39916_39936[(1)] = (10));


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
});})(c__39775__auto___39922))
;
return ((function (switch__39685__auto__,c__39775__auto___39922){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_39917 = [null,null,null,null,null,null,null,null];
(statearr_39917[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_39917[(1)] = (1));

return statearr_39917;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_39900){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_39900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e39918){if((e39918 instanceof Object)){
var ex__39689__auto__ = e39918;
var statearr_39919_39937 = state_39900;
(statearr_39919_39937[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39938 = state_39900;
state_39900 = G__39938;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_39900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_39900);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___39922))
})();
var state__39777__auto__ = (function (){var statearr_39920 = f__39776__auto__.call(null);
(statearr_39920[(6)] = c__39775__auto___39922);

return statearr_39920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___39922))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__39939){
var vec__39940 = p__39939;
var v = cljs.core.nth.call(null,vec__39940,(0),null);
var p = cljs.core.nth.call(null,vec__39940,(1),null);
var job = vec__39940;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39775__auto___40111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results){
return (function (state_39947){
var state_val_39948 = (state_39947[(1)]);
if((state_val_39948 === (1))){
var state_39947__$1 = state_39947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39947__$1,(2),res,v);
} else {
if((state_val_39948 === (2))){
var inst_39944 = (state_39947[(2)]);
var inst_39945 = cljs.core.async.close_BANG_.call(null,res);
var state_39947__$1 = (function (){var statearr_39949 = state_39947;
(statearr_39949[(7)] = inst_39944);

return statearr_39949;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39947__$1,inst_39945);
} else {
return null;
}
}
});})(c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results))
;
return ((function (switch__39685__auto__,c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_39950 = [null,null,null,null,null,null,null,null];
(statearr_39950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__);

(statearr_39950[(1)] = (1));

return statearr_39950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1 = (function (state_39947){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_39947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e39951){if((e39951 instanceof Object)){
var ex__39689__auto__ = e39951;
var statearr_39952_40112 = state_39947;
(statearr_39952_40112[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40113 = state_39947;
state_39947 = G__40113;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = function(state_39947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1.call(this,state_39947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results))
})();
var state__39777__auto__ = (function (){var statearr_39953 = f__39776__auto__.call(null);
(statearr_39953[(6)] = c__39775__auto___40111);

return statearr_39953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___40111,res,vec__39940,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39954){
var vec__39955 = p__39954;
var v = cljs.core.nth.call(null,vec__39955,(0),null);
var p = cljs.core.nth.call(null,vec__39955,(1),null);
var job = vec__39955;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31240__auto___40114 = n;
var __40115 = (0);
while(true){
if((__40115 < n__31240__auto___40114)){
var G__39958_40116 = type;
var G__39958_40117__$1 = (((G__39958_40116 instanceof cljs.core.Keyword))?G__39958_40116.fqn:null);
switch (G__39958_40117__$1) {
case "compute":
var c__39775__auto___40119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40115,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (__40115,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function (state_39971){
var state_val_39972 = (state_39971[(1)]);
if((state_val_39972 === (1))){
var state_39971__$1 = state_39971;
var statearr_39973_40120 = state_39971__$1;
(statearr_39973_40120[(2)] = null);

(statearr_39973_40120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39972 === (2))){
var state_39971__$1 = state_39971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39971__$1,(4),jobs);
} else {
if((state_val_39972 === (3))){
var inst_39969 = (state_39971[(2)]);
var state_39971__$1 = state_39971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39971__$1,inst_39969);
} else {
if((state_val_39972 === (4))){
var inst_39961 = (state_39971[(2)]);
var inst_39962 = process.call(null,inst_39961);
var state_39971__$1 = state_39971;
if(cljs.core.truth_(inst_39962)){
var statearr_39974_40121 = state_39971__$1;
(statearr_39974_40121[(1)] = (5));

} else {
var statearr_39975_40122 = state_39971__$1;
(statearr_39975_40122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39972 === (5))){
var state_39971__$1 = state_39971;
var statearr_39976_40123 = state_39971__$1;
(statearr_39976_40123[(2)] = null);

(statearr_39976_40123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39972 === (6))){
var state_39971__$1 = state_39971;
var statearr_39977_40124 = state_39971__$1;
(statearr_39977_40124[(2)] = null);

(statearr_39977_40124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39972 === (7))){
var inst_39967 = (state_39971[(2)]);
var state_39971__$1 = state_39971;
var statearr_39978_40125 = state_39971__$1;
(statearr_39978_40125[(2)] = inst_39967);

(statearr_39978_40125[(1)] = (3));


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
});})(__40115,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
;
return ((function (__40115,switch__39685__auto__,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_39979 = [null,null,null,null,null,null,null];
(statearr_39979[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__);

(statearr_39979[(1)] = (1));

return statearr_39979;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1 = (function (state_39971){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_39971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e39980){if((e39980 instanceof Object)){
var ex__39689__auto__ = e39980;
var statearr_39981_40126 = state_39971;
(statearr_39981_40126[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40127 = state_39971;
state_39971 = G__40127;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = function(state_39971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1.call(this,state_39971);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__;
})()
;})(__40115,switch__39685__auto__,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
})();
var state__39777__auto__ = (function (){var statearr_39982 = f__39776__auto__.call(null);
(statearr_39982[(6)] = c__39775__auto___40119);

return statearr_39982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(__40115,c__39775__auto___40119,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
);


break;
case "async":
var c__39775__auto___40128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40115,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (__40115,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function (state_39995){
var state_val_39996 = (state_39995[(1)]);
if((state_val_39996 === (1))){
var state_39995__$1 = state_39995;
var statearr_39997_40129 = state_39995__$1;
(statearr_39997_40129[(2)] = null);

(statearr_39997_40129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (2))){
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39995__$1,(4),jobs);
} else {
if((state_val_39996 === (3))){
var inst_39993 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39995__$1,inst_39993);
} else {
if((state_val_39996 === (4))){
var inst_39985 = (state_39995[(2)]);
var inst_39986 = async.call(null,inst_39985);
var state_39995__$1 = state_39995;
if(cljs.core.truth_(inst_39986)){
var statearr_39998_40130 = state_39995__$1;
(statearr_39998_40130[(1)] = (5));

} else {
var statearr_39999_40131 = state_39995__$1;
(statearr_39999_40131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (5))){
var state_39995__$1 = state_39995;
var statearr_40000_40132 = state_39995__$1;
(statearr_40000_40132[(2)] = null);

(statearr_40000_40132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (6))){
var state_39995__$1 = state_39995;
var statearr_40001_40133 = state_39995__$1;
(statearr_40001_40133[(2)] = null);

(statearr_40001_40133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39996 === (7))){
var inst_39991 = (state_39995[(2)]);
var state_39995__$1 = state_39995;
var statearr_40002_40134 = state_39995__$1;
(statearr_40002_40134[(2)] = inst_39991);

(statearr_40002_40134[(1)] = (3));


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
});})(__40115,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
;
return ((function (__40115,switch__39685__auto__,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_40003 = [null,null,null,null,null,null,null];
(statearr_40003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__);

(statearr_40003[(1)] = (1));

return statearr_40003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1 = (function (state_39995){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_39995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40004){if((e40004 instanceof Object)){
var ex__39689__auto__ = e40004;
var statearr_40005_40135 = state_39995;
(statearr_40005_40135[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40136 = state_39995;
state_39995 = G__40136;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = function(state_39995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1.call(this,state_39995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__;
})()
;})(__40115,switch__39685__auto__,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
})();
var state__39777__auto__ = (function (){var statearr_40006 = f__39776__auto__.call(null);
(statearr_40006[(6)] = c__39775__auto___40128);

return statearr_40006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(__40115,c__39775__auto___40128,G__39958_40116,G__39958_40117__$1,n__31240__auto___40114,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39958_40117__$1)].join('')));

}

var G__40137 = (__40115 + (1));
__40115 = G__40137;
continue;
} else {
}
break;
}

var c__39775__auto___40138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___40138,jobs,results,process,async){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___40138,jobs,results,process,async){
return (function (state_40028){
var state_val_40029 = (state_40028[(1)]);
if((state_val_40029 === (1))){
var state_40028__$1 = state_40028;
var statearr_40030_40139 = state_40028__$1;
(statearr_40030_40139[(2)] = null);

(statearr_40030_40139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (2))){
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40028__$1,(4),from);
} else {
if((state_val_40029 === (3))){
var inst_40026 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40028__$1,inst_40026);
} else {
if((state_val_40029 === (4))){
var inst_40009 = (state_40028[(7)]);
var inst_40009__$1 = (state_40028[(2)]);
var inst_40010 = (inst_40009__$1 == null);
var state_40028__$1 = (function (){var statearr_40031 = state_40028;
(statearr_40031[(7)] = inst_40009__$1);

return statearr_40031;
})();
if(cljs.core.truth_(inst_40010)){
var statearr_40032_40140 = state_40028__$1;
(statearr_40032_40140[(1)] = (5));

} else {
var statearr_40033_40141 = state_40028__$1;
(statearr_40033_40141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (5))){
var inst_40012 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40028__$1 = state_40028;
var statearr_40034_40142 = state_40028__$1;
(statearr_40034_40142[(2)] = inst_40012);

(statearr_40034_40142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (6))){
var inst_40009 = (state_40028[(7)]);
var inst_40014 = (state_40028[(8)]);
var inst_40014__$1 = cljs.core.async.chan.call(null,(1));
var inst_40015 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40016 = [inst_40009,inst_40014__$1];
var inst_40017 = (new cljs.core.PersistentVector(null,2,(5),inst_40015,inst_40016,null));
var state_40028__$1 = (function (){var statearr_40035 = state_40028;
(statearr_40035[(8)] = inst_40014__$1);

return statearr_40035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40028__$1,(8),jobs,inst_40017);
} else {
if((state_val_40029 === (7))){
var inst_40024 = (state_40028[(2)]);
var state_40028__$1 = state_40028;
var statearr_40036_40143 = state_40028__$1;
(statearr_40036_40143[(2)] = inst_40024);

(statearr_40036_40143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40029 === (8))){
var inst_40014 = (state_40028[(8)]);
var inst_40019 = (state_40028[(2)]);
var state_40028__$1 = (function (){var statearr_40037 = state_40028;
(statearr_40037[(9)] = inst_40019);

return statearr_40037;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40028__$1,(9),results,inst_40014);
} else {
if((state_val_40029 === (9))){
var inst_40021 = (state_40028[(2)]);
var state_40028__$1 = (function (){var statearr_40038 = state_40028;
(statearr_40038[(10)] = inst_40021);

return statearr_40038;
})();
var statearr_40039_40144 = state_40028__$1;
(statearr_40039_40144[(2)] = null);

(statearr_40039_40144[(1)] = (2));


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
});})(c__39775__auto___40138,jobs,results,process,async))
;
return ((function (switch__39685__auto__,c__39775__auto___40138,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_40040 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__);

(statearr_40040[(1)] = (1));

return statearr_40040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1 = (function (state_40028){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40041){if((e40041 instanceof Object)){
var ex__39689__auto__ = e40041;
var statearr_40042_40145 = state_40028;
(statearr_40042_40145[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40146 = state_40028;
state_40028 = G__40146;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = function(state_40028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1.call(this,state_40028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___40138,jobs,results,process,async))
})();
var state__39777__auto__ = (function (){var statearr_40043 = f__39776__auto__.call(null);
(statearr_40043[(6)] = c__39775__auto___40138);

return statearr_40043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___40138,jobs,results,process,async))
);


var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__,jobs,results,process,async){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__,jobs,results,process,async){
return (function (state_40081){
var state_val_40082 = (state_40081[(1)]);
if((state_val_40082 === (7))){
var inst_40077 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40083_40147 = state_40081__$1;
(statearr_40083_40147[(2)] = inst_40077);

(statearr_40083_40147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (20))){
var state_40081__$1 = state_40081;
var statearr_40084_40148 = state_40081__$1;
(statearr_40084_40148[(2)] = null);

(statearr_40084_40148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (1))){
var state_40081__$1 = state_40081;
var statearr_40085_40149 = state_40081__$1;
(statearr_40085_40149[(2)] = null);

(statearr_40085_40149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (4))){
var inst_40046 = (state_40081[(7)]);
var inst_40046__$1 = (state_40081[(2)]);
var inst_40047 = (inst_40046__$1 == null);
var state_40081__$1 = (function (){var statearr_40086 = state_40081;
(statearr_40086[(7)] = inst_40046__$1);

return statearr_40086;
})();
if(cljs.core.truth_(inst_40047)){
var statearr_40087_40150 = state_40081__$1;
(statearr_40087_40150[(1)] = (5));

} else {
var statearr_40088_40151 = state_40081__$1;
(statearr_40088_40151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (15))){
var inst_40059 = (state_40081[(8)]);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40081__$1,(18),to,inst_40059);
} else {
if((state_val_40082 === (21))){
var inst_40072 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40089_40152 = state_40081__$1;
(statearr_40089_40152[(2)] = inst_40072);

(statearr_40089_40152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (13))){
var inst_40074 = (state_40081[(2)]);
var state_40081__$1 = (function (){var statearr_40090 = state_40081;
(statearr_40090[(9)] = inst_40074);

return statearr_40090;
})();
var statearr_40091_40153 = state_40081__$1;
(statearr_40091_40153[(2)] = null);

(statearr_40091_40153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (6))){
var inst_40046 = (state_40081[(7)]);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40081__$1,(11),inst_40046);
} else {
if((state_val_40082 === (17))){
var inst_40067 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
if(cljs.core.truth_(inst_40067)){
var statearr_40092_40154 = state_40081__$1;
(statearr_40092_40154[(1)] = (19));

} else {
var statearr_40093_40155 = state_40081__$1;
(statearr_40093_40155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (3))){
var inst_40079 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40081__$1,inst_40079);
} else {
if((state_val_40082 === (12))){
var inst_40056 = (state_40081[(10)]);
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40081__$1,(14),inst_40056);
} else {
if((state_val_40082 === (2))){
var state_40081__$1 = state_40081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40081__$1,(4),results);
} else {
if((state_val_40082 === (19))){
var state_40081__$1 = state_40081;
var statearr_40094_40156 = state_40081__$1;
(statearr_40094_40156[(2)] = null);

(statearr_40094_40156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (11))){
var inst_40056 = (state_40081[(2)]);
var state_40081__$1 = (function (){var statearr_40095 = state_40081;
(statearr_40095[(10)] = inst_40056);

return statearr_40095;
})();
var statearr_40096_40157 = state_40081__$1;
(statearr_40096_40157[(2)] = null);

(statearr_40096_40157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (9))){
var state_40081__$1 = state_40081;
var statearr_40097_40158 = state_40081__$1;
(statearr_40097_40158[(2)] = null);

(statearr_40097_40158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (5))){
var state_40081__$1 = state_40081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40098_40159 = state_40081__$1;
(statearr_40098_40159[(1)] = (8));

} else {
var statearr_40099_40160 = state_40081__$1;
(statearr_40099_40160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (14))){
var inst_40061 = (state_40081[(11)]);
var inst_40059 = (state_40081[(8)]);
var inst_40059__$1 = (state_40081[(2)]);
var inst_40060 = (inst_40059__$1 == null);
var inst_40061__$1 = cljs.core.not.call(null,inst_40060);
var state_40081__$1 = (function (){var statearr_40100 = state_40081;
(statearr_40100[(11)] = inst_40061__$1);

(statearr_40100[(8)] = inst_40059__$1);

return statearr_40100;
})();
if(inst_40061__$1){
var statearr_40101_40161 = state_40081__$1;
(statearr_40101_40161[(1)] = (15));

} else {
var statearr_40102_40162 = state_40081__$1;
(statearr_40102_40162[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (16))){
var inst_40061 = (state_40081[(11)]);
var state_40081__$1 = state_40081;
var statearr_40103_40163 = state_40081__$1;
(statearr_40103_40163[(2)] = inst_40061);

(statearr_40103_40163[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (10))){
var inst_40053 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40104_40164 = state_40081__$1;
(statearr_40104_40164[(2)] = inst_40053);

(statearr_40104_40164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (18))){
var inst_40064 = (state_40081[(2)]);
var state_40081__$1 = state_40081;
var statearr_40105_40165 = state_40081__$1;
(statearr_40105_40165[(2)] = inst_40064);

(statearr_40105_40165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40082 === (8))){
var inst_40050 = cljs.core.async.close_BANG_.call(null,to);
var state_40081__$1 = state_40081;
var statearr_40106_40166 = state_40081__$1;
(statearr_40106_40166[(2)] = inst_40050);

(statearr_40106_40166[(1)] = (10));


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
});})(c__39775__auto__,jobs,results,process,async))
;
return ((function (switch__39685__auto__,c__39775__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_40107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__);

(statearr_40107[(1)] = (1));

return statearr_40107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1 = (function (state_40081){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40108){if((e40108 instanceof Object)){
var ex__39689__auto__ = e40108;
var statearr_40109_40167 = state_40081;
(statearr_40109_40167[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40168 = state_40081;
state_40081 = G__40168;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__ = function(state_40081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1.call(this,state_40081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__,jobs,results,process,async))
})();
var state__39777__auto__ = (function (){var statearr_40110 = f__39776__auto__.call(null);
(statearr_40110[(6)] = c__39775__auto__);

return statearr_40110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__,jobs,results,process,async))
);

return c__39775__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40170 = arguments.length;
switch (G__40170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40173 = arguments.length;
switch (G__40173) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40176 = arguments.length;
switch (G__40176) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39775__auto___40225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___40225,tc,fc){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___40225,tc,fc){
return (function (state_40202){
var state_val_40203 = (state_40202[(1)]);
if((state_val_40203 === (7))){
var inst_40198 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40204_40226 = state_40202__$1;
(statearr_40204_40226[(2)] = inst_40198);

(statearr_40204_40226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (1))){
var state_40202__$1 = state_40202;
var statearr_40205_40227 = state_40202__$1;
(statearr_40205_40227[(2)] = null);

(statearr_40205_40227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (4))){
var inst_40179 = (state_40202[(7)]);
var inst_40179__$1 = (state_40202[(2)]);
var inst_40180 = (inst_40179__$1 == null);
var state_40202__$1 = (function (){var statearr_40206 = state_40202;
(statearr_40206[(7)] = inst_40179__$1);

return statearr_40206;
})();
if(cljs.core.truth_(inst_40180)){
var statearr_40207_40228 = state_40202__$1;
(statearr_40207_40228[(1)] = (5));

} else {
var statearr_40208_40229 = state_40202__$1;
(statearr_40208_40229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (13))){
var state_40202__$1 = state_40202;
var statearr_40209_40230 = state_40202__$1;
(statearr_40209_40230[(2)] = null);

(statearr_40209_40230[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (6))){
var inst_40179 = (state_40202[(7)]);
var inst_40185 = p.call(null,inst_40179);
var state_40202__$1 = state_40202;
if(cljs.core.truth_(inst_40185)){
var statearr_40210_40231 = state_40202__$1;
(statearr_40210_40231[(1)] = (9));

} else {
var statearr_40211_40232 = state_40202__$1;
(statearr_40211_40232[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (3))){
var inst_40200 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40202__$1,inst_40200);
} else {
if((state_val_40203 === (12))){
var state_40202__$1 = state_40202;
var statearr_40212_40233 = state_40202__$1;
(statearr_40212_40233[(2)] = null);

(statearr_40212_40233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (2))){
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40202__$1,(4),ch);
} else {
if((state_val_40203 === (11))){
var inst_40179 = (state_40202[(7)]);
var inst_40189 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40202__$1,(8),inst_40189,inst_40179);
} else {
if((state_val_40203 === (9))){
var state_40202__$1 = state_40202;
var statearr_40213_40234 = state_40202__$1;
(statearr_40213_40234[(2)] = tc);

(statearr_40213_40234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (5))){
var inst_40182 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40183 = cljs.core.async.close_BANG_.call(null,fc);
var state_40202__$1 = (function (){var statearr_40214 = state_40202;
(statearr_40214[(8)] = inst_40182);

return statearr_40214;
})();
var statearr_40215_40235 = state_40202__$1;
(statearr_40215_40235[(2)] = inst_40183);

(statearr_40215_40235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (14))){
var inst_40196 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
var statearr_40216_40236 = state_40202__$1;
(statearr_40216_40236[(2)] = inst_40196);

(statearr_40216_40236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (10))){
var state_40202__$1 = state_40202;
var statearr_40217_40237 = state_40202__$1;
(statearr_40217_40237[(2)] = fc);

(statearr_40217_40237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40203 === (8))){
var inst_40191 = (state_40202[(2)]);
var state_40202__$1 = state_40202;
if(cljs.core.truth_(inst_40191)){
var statearr_40218_40238 = state_40202__$1;
(statearr_40218_40238[(1)] = (12));

} else {
var statearr_40219_40239 = state_40202__$1;
(statearr_40219_40239[(1)] = (13));

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
});})(c__39775__auto___40225,tc,fc))
;
return ((function (switch__39685__auto__,c__39775__auto___40225,tc,fc){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_40220 = [null,null,null,null,null,null,null,null,null];
(statearr_40220[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_40220[(1)] = (1));

return statearr_40220;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_40202){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40221){if((e40221 instanceof Object)){
var ex__39689__auto__ = e40221;
var statearr_40222_40240 = state_40202;
(statearr_40222_40240[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40241 = state_40202;
state_40202 = G__40241;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_40202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_40202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___40225,tc,fc))
})();
var state__39777__auto__ = (function (){var statearr_40223 = f__39776__auto__.call(null);
(statearr_40223[(6)] = c__39775__auto___40225);

return statearr_40223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___40225,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__){
return (function (state_40262){
var state_val_40263 = (state_40262[(1)]);
if((state_val_40263 === (7))){
var inst_40258 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40264_40282 = state_40262__$1;
(statearr_40264_40282[(2)] = inst_40258);

(statearr_40264_40282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (1))){
var inst_40242 = init;
var state_40262__$1 = (function (){var statearr_40265 = state_40262;
(statearr_40265[(7)] = inst_40242);

return statearr_40265;
})();
var statearr_40266_40283 = state_40262__$1;
(statearr_40266_40283[(2)] = null);

(statearr_40266_40283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (4))){
var inst_40245 = (state_40262[(8)]);
var inst_40245__$1 = (state_40262[(2)]);
var inst_40246 = (inst_40245__$1 == null);
var state_40262__$1 = (function (){var statearr_40267 = state_40262;
(statearr_40267[(8)] = inst_40245__$1);

return statearr_40267;
})();
if(cljs.core.truth_(inst_40246)){
var statearr_40268_40284 = state_40262__$1;
(statearr_40268_40284[(1)] = (5));

} else {
var statearr_40269_40285 = state_40262__$1;
(statearr_40269_40285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (6))){
var inst_40245 = (state_40262[(8)]);
var inst_40249 = (state_40262[(9)]);
var inst_40242 = (state_40262[(7)]);
var inst_40249__$1 = f.call(null,inst_40242,inst_40245);
var inst_40250 = cljs.core.reduced_QMARK_.call(null,inst_40249__$1);
var state_40262__$1 = (function (){var statearr_40270 = state_40262;
(statearr_40270[(9)] = inst_40249__$1);

return statearr_40270;
})();
if(inst_40250){
var statearr_40271_40286 = state_40262__$1;
(statearr_40271_40286[(1)] = (8));

} else {
var statearr_40272_40287 = state_40262__$1;
(statearr_40272_40287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (3))){
var inst_40260 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40262__$1,inst_40260);
} else {
if((state_val_40263 === (2))){
var state_40262__$1 = state_40262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40262__$1,(4),ch);
} else {
if((state_val_40263 === (9))){
var inst_40249 = (state_40262[(9)]);
var inst_40242 = inst_40249;
var state_40262__$1 = (function (){var statearr_40273 = state_40262;
(statearr_40273[(7)] = inst_40242);

return statearr_40273;
})();
var statearr_40274_40288 = state_40262__$1;
(statearr_40274_40288[(2)] = null);

(statearr_40274_40288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (5))){
var inst_40242 = (state_40262[(7)]);
var state_40262__$1 = state_40262;
var statearr_40275_40289 = state_40262__$1;
(statearr_40275_40289[(2)] = inst_40242);

(statearr_40275_40289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (10))){
var inst_40256 = (state_40262[(2)]);
var state_40262__$1 = state_40262;
var statearr_40276_40290 = state_40262__$1;
(statearr_40276_40290[(2)] = inst_40256);

(statearr_40276_40290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40263 === (8))){
var inst_40249 = (state_40262[(9)]);
var inst_40252 = cljs.core.deref.call(null,inst_40249);
var state_40262__$1 = state_40262;
var statearr_40277_40291 = state_40262__$1;
(statearr_40277_40291[(2)] = inst_40252);

(statearr_40277_40291[(1)] = (10));


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
});})(c__39775__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39686__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39686__auto____0 = (function (){
var statearr_40278 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40278[(0)] = cljs$core$async$reduce_$_state_machine__39686__auto__);

(statearr_40278[(1)] = (1));

return statearr_40278;
});
var cljs$core$async$reduce_$_state_machine__39686__auto____1 = (function (state_40262){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40279){if((e40279 instanceof Object)){
var ex__39689__auto__ = e40279;
var statearr_40280_40292 = state_40262;
(statearr_40280_40292[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40293 = state_40262;
state_40262 = G__40293;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39686__auto__ = function(state_40262){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39686__auto____1.call(this,state_40262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39686__auto____0;
cljs$core$async$reduce_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39686__auto____1;
return cljs$core$async$reduce_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__))
})();
var state__39777__auto__ = (function (){var statearr_40281 = f__39776__auto__.call(null);
(statearr_40281[(6)] = c__39775__auto__);

return statearr_40281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__))
);

return c__39775__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__,f__$1){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__,f__$1){
return (function (state_40299){
var state_val_40300 = (state_40299[(1)]);
if((state_val_40300 === (1))){
var inst_40294 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40299__$1,(2),inst_40294);
} else {
if((state_val_40300 === (2))){
var inst_40296 = (state_40299[(2)]);
var inst_40297 = f__$1.call(null,inst_40296);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40299__$1,inst_40297);
} else {
return null;
}
}
});})(c__39775__auto__,f__$1))
;
return ((function (switch__39685__auto__,c__39775__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39686__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39686__auto____0 = (function (){
var statearr_40301 = [null,null,null,null,null,null,null];
(statearr_40301[(0)] = cljs$core$async$transduce_$_state_machine__39686__auto__);

(statearr_40301[(1)] = (1));

return statearr_40301;
});
var cljs$core$async$transduce_$_state_machine__39686__auto____1 = (function (state_40299){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40302){if((e40302 instanceof Object)){
var ex__39689__auto__ = e40302;
var statearr_40303_40305 = state_40299;
(statearr_40303_40305[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40306 = state_40299;
state_40299 = G__40306;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39686__auto__ = function(state_40299){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39686__auto____1.call(this,state_40299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39686__auto____0;
cljs$core$async$transduce_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39686__auto____1;
return cljs$core$async$transduce_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__,f__$1))
})();
var state__39777__auto__ = (function (){var statearr_40304 = f__39776__auto__.call(null);
(statearr_40304[(6)] = c__39775__auto__);

return statearr_40304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__,f__$1))
);

return c__39775__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40308 = arguments.length;
switch (G__40308) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__){
return (function (state_40333){
var state_val_40334 = (state_40333[(1)]);
if((state_val_40334 === (7))){
var inst_40315 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
var statearr_40335_40356 = state_40333__$1;
(statearr_40335_40356[(2)] = inst_40315);

(statearr_40335_40356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (1))){
var inst_40309 = cljs.core.seq.call(null,coll);
var inst_40310 = inst_40309;
var state_40333__$1 = (function (){var statearr_40336 = state_40333;
(statearr_40336[(7)] = inst_40310);

return statearr_40336;
})();
var statearr_40337_40357 = state_40333__$1;
(statearr_40337_40357[(2)] = null);

(statearr_40337_40357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (4))){
var inst_40310 = (state_40333[(7)]);
var inst_40313 = cljs.core.first.call(null,inst_40310);
var state_40333__$1 = state_40333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40333__$1,(7),ch,inst_40313);
} else {
if((state_val_40334 === (13))){
var inst_40327 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
var statearr_40338_40358 = state_40333__$1;
(statearr_40338_40358[(2)] = inst_40327);

(statearr_40338_40358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (6))){
var inst_40318 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
if(cljs.core.truth_(inst_40318)){
var statearr_40339_40359 = state_40333__$1;
(statearr_40339_40359[(1)] = (8));

} else {
var statearr_40340_40360 = state_40333__$1;
(statearr_40340_40360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (3))){
var inst_40331 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40333__$1,inst_40331);
} else {
if((state_val_40334 === (12))){
var state_40333__$1 = state_40333;
var statearr_40341_40361 = state_40333__$1;
(statearr_40341_40361[(2)] = null);

(statearr_40341_40361[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (2))){
var inst_40310 = (state_40333[(7)]);
var state_40333__$1 = state_40333;
if(cljs.core.truth_(inst_40310)){
var statearr_40342_40362 = state_40333__$1;
(statearr_40342_40362[(1)] = (4));

} else {
var statearr_40343_40363 = state_40333__$1;
(statearr_40343_40363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (11))){
var inst_40324 = cljs.core.async.close_BANG_.call(null,ch);
var state_40333__$1 = state_40333;
var statearr_40344_40364 = state_40333__$1;
(statearr_40344_40364[(2)] = inst_40324);

(statearr_40344_40364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (9))){
var state_40333__$1 = state_40333;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40345_40365 = state_40333__$1;
(statearr_40345_40365[(1)] = (11));

} else {
var statearr_40346_40366 = state_40333__$1;
(statearr_40346_40366[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (5))){
var inst_40310 = (state_40333[(7)]);
var state_40333__$1 = state_40333;
var statearr_40347_40367 = state_40333__$1;
(statearr_40347_40367[(2)] = inst_40310);

(statearr_40347_40367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (10))){
var inst_40329 = (state_40333[(2)]);
var state_40333__$1 = state_40333;
var statearr_40348_40368 = state_40333__$1;
(statearr_40348_40368[(2)] = inst_40329);

(statearr_40348_40368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40334 === (8))){
var inst_40310 = (state_40333[(7)]);
var inst_40320 = cljs.core.next.call(null,inst_40310);
var inst_40310__$1 = inst_40320;
var state_40333__$1 = (function (){var statearr_40349 = state_40333;
(statearr_40349[(7)] = inst_40310__$1);

return statearr_40349;
})();
var statearr_40350_40369 = state_40333__$1;
(statearr_40350_40369[(2)] = null);

(statearr_40350_40369[(1)] = (2));


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
});})(c__39775__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_40351 = [null,null,null,null,null,null,null,null];
(statearr_40351[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_40351[(1)] = (1));

return statearr_40351;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_40333){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40352){if((e40352 instanceof Object)){
var ex__39689__auto__ = e40352;
var statearr_40353_40370 = state_40333;
(statearr_40353_40370[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40371 = state_40333;
state_40333 = G__40371;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_40333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_40333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__))
})();
var state__39777__auto__ = (function (){var statearr_40354 = f__39776__auto__.call(null);
(statearr_40354[(6)] = c__39775__auto__);

return statearr_40354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__))
);

return c__39775__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30928__auto__ = (((_ == null))?null:_);
var m__30929__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,_);
} else {
var m__30929__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30929__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,ch);
} else {
var m__30929__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m);
} else {
var m__30929__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40372 = (function (ch,cs,meta40373){
this.ch = ch;
this.cs = cs;
this.meta40373 = meta40373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40374,meta40373__$1){
var self__ = this;
var _40374__$1 = this;
return (new cljs.core.async.t_cljs$core$async40372(self__.ch,self__.cs,meta40373__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40374){
var self__ = this;
var _40374__$1 = this;
return self__.meta40373;
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40373","meta40373",1447231597,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40372";

cljs.core.async.t_cljs$core$async40372.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async40372");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40372 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40372(ch__$1,cs__$1,meta40373){
return (new cljs.core.async.t_cljs$core$async40372(ch__$1,cs__$1,meta40373));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40372(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39775__auto___40594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___40594,cs,m,dchan,dctr,done){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___40594,cs,m,dchan,dctr,done){
return (function (state_40509){
var state_val_40510 = (state_40509[(1)]);
if((state_val_40510 === (7))){
var inst_40505 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40511_40595 = state_40509__$1;
(statearr_40511_40595[(2)] = inst_40505);

(statearr_40511_40595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (20))){
var inst_40408 = (state_40509[(7)]);
var inst_40420 = cljs.core.first.call(null,inst_40408);
var inst_40421 = cljs.core.nth.call(null,inst_40420,(0),null);
var inst_40422 = cljs.core.nth.call(null,inst_40420,(1),null);
var state_40509__$1 = (function (){var statearr_40512 = state_40509;
(statearr_40512[(8)] = inst_40421);

return statearr_40512;
})();
if(cljs.core.truth_(inst_40422)){
var statearr_40513_40596 = state_40509__$1;
(statearr_40513_40596[(1)] = (22));

} else {
var statearr_40514_40597 = state_40509__$1;
(statearr_40514_40597[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (27))){
var inst_40377 = (state_40509[(9)]);
var inst_40457 = (state_40509[(10)]);
var inst_40452 = (state_40509[(11)]);
var inst_40450 = (state_40509[(12)]);
var inst_40457__$1 = cljs.core._nth.call(null,inst_40450,inst_40452);
var inst_40458 = cljs.core.async.put_BANG_.call(null,inst_40457__$1,inst_40377,done);
var state_40509__$1 = (function (){var statearr_40515 = state_40509;
(statearr_40515[(10)] = inst_40457__$1);

return statearr_40515;
})();
if(cljs.core.truth_(inst_40458)){
var statearr_40516_40598 = state_40509__$1;
(statearr_40516_40598[(1)] = (30));

} else {
var statearr_40517_40599 = state_40509__$1;
(statearr_40517_40599[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (1))){
var state_40509__$1 = state_40509;
var statearr_40518_40600 = state_40509__$1;
(statearr_40518_40600[(2)] = null);

(statearr_40518_40600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (24))){
var inst_40408 = (state_40509[(7)]);
var inst_40427 = (state_40509[(2)]);
var inst_40428 = cljs.core.next.call(null,inst_40408);
var inst_40386 = inst_40428;
var inst_40387 = null;
var inst_40388 = (0);
var inst_40389 = (0);
var state_40509__$1 = (function (){var statearr_40519 = state_40509;
(statearr_40519[(13)] = inst_40427);

(statearr_40519[(14)] = inst_40387);

(statearr_40519[(15)] = inst_40386);

(statearr_40519[(16)] = inst_40389);

(statearr_40519[(17)] = inst_40388);

return statearr_40519;
})();
var statearr_40520_40601 = state_40509__$1;
(statearr_40520_40601[(2)] = null);

(statearr_40520_40601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (39))){
var state_40509__$1 = state_40509;
var statearr_40524_40602 = state_40509__$1;
(statearr_40524_40602[(2)] = null);

(statearr_40524_40602[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (4))){
var inst_40377 = (state_40509[(9)]);
var inst_40377__$1 = (state_40509[(2)]);
var inst_40378 = (inst_40377__$1 == null);
var state_40509__$1 = (function (){var statearr_40525 = state_40509;
(statearr_40525[(9)] = inst_40377__$1);

return statearr_40525;
})();
if(cljs.core.truth_(inst_40378)){
var statearr_40526_40603 = state_40509__$1;
(statearr_40526_40603[(1)] = (5));

} else {
var statearr_40527_40604 = state_40509__$1;
(statearr_40527_40604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (15))){
var inst_40387 = (state_40509[(14)]);
var inst_40386 = (state_40509[(15)]);
var inst_40389 = (state_40509[(16)]);
var inst_40388 = (state_40509[(17)]);
var inst_40404 = (state_40509[(2)]);
var inst_40405 = (inst_40389 + (1));
var tmp40521 = inst_40387;
var tmp40522 = inst_40386;
var tmp40523 = inst_40388;
var inst_40386__$1 = tmp40522;
var inst_40387__$1 = tmp40521;
var inst_40388__$1 = tmp40523;
var inst_40389__$1 = inst_40405;
var state_40509__$1 = (function (){var statearr_40528 = state_40509;
(statearr_40528[(14)] = inst_40387__$1);

(statearr_40528[(15)] = inst_40386__$1);

(statearr_40528[(18)] = inst_40404);

(statearr_40528[(16)] = inst_40389__$1);

(statearr_40528[(17)] = inst_40388__$1);

return statearr_40528;
})();
var statearr_40529_40605 = state_40509__$1;
(statearr_40529_40605[(2)] = null);

(statearr_40529_40605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (21))){
var inst_40431 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40533_40606 = state_40509__$1;
(statearr_40533_40606[(2)] = inst_40431);

(statearr_40533_40606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (31))){
var inst_40457 = (state_40509[(10)]);
var inst_40461 = done.call(null,null);
var inst_40462 = cljs.core.async.untap_STAR_.call(null,m,inst_40457);
var state_40509__$1 = (function (){var statearr_40534 = state_40509;
(statearr_40534[(19)] = inst_40461);

return statearr_40534;
})();
var statearr_40535_40607 = state_40509__$1;
(statearr_40535_40607[(2)] = inst_40462);

(statearr_40535_40607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (32))){
var inst_40449 = (state_40509[(20)]);
var inst_40451 = (state_40509[(21)]);
var inst_40452 = (state_40509[(11)]);
var inst_40450 = (state_40509[(12)]);
var inst_40464 = (state_40509[(2)]);
var inst_40465 = (inst_40452 + (1));
var tmp40530 = inst_40449;
var tmp40531 = inst_40451;
var tmp40532 = inst_40450;
var inst_40449__$1 = tmp40530;
var inst_40450__$1 = tmp40532;
var inst_40451__$1 = tmp40531;
var inst_40452__$1 = inst_40465;
var state_40509__$1 = (function (){var statearr_40536 = state_40509;
(statearr_40536[(22)] = inst_40464);

(statearr_40536[(20)] = inst_40449__$1);

(statearr_40536[(21)] = inst_40451__$1);

(statearr_40536[(11)] = inst_40452__$1);

(statearr_40536[(12)] = inst_40450__$1);

return statearr_40536;
})();
var statearr_40537_40608 = state_40509__$1;
(statearr_40537_40608[(2)] = null);

(statearr_40537_40608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (40))){
var inst_40477 = (state_40509[(23)]);
var inst_40481 = done.call(null,null);
var inst_40482 = cljs.core.async.untap_STAR_.call(null,m,inst_40477);
var state_40509__$1 = (function (){var statearr_40538 = state_40509;
(statearr_40538[(24)] = inst_40481);

return statearr_40538;
})();
var statearr_40539_40609 = state_40509__$1;
(statearr_40539_40609[(2)] = inst_40482);

(statearr_40539_40609[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (33))){
var inst_40468 = (state_40509[(25)]);
var inst_40470 = cljs.core.chunked_seq_QMARK_.call(null,inst_40468);
var state_40509__$1 = state_40509;
if(inst_40470){
var statearr_40540_40610 = state_40509__$1;
(statearr_40540_40610[(1)] = (36));

} else {
var statearr_40541_40611 = state_40509__$1;
(statearr_40541_40611[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (13))){
var inst_40398 = (state_40509[(26)]);
var inst_40401 = cljs.core.async.close_BANG_.call(null,inst_40398);
var state_40509__$1 = state_40509;
var statearr_40542_40612 = state_40509__$1;
(statearr_40542_40612[(2)] = inst_40401);

(statearr_40542_40612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (22))){
var inst_40421 = (state_40509[(8)]);
var inst_40424 = cljs.core.async.close_BANG_.call(null,inst_40421);
var state_40509__$1 = state_40509;
var statearr_40543_40613 = state_40509__$1;
(statearr_40543_40613[(2)] = inst_40424);

(statearr_40543_40613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (36))){
var inst_40468 = (state_40509[(25)]);
var inst_40472 = cljs.core.chunk_first.call(null,inst_40468);
var inst_40473 = cljs.core.chunk_rest.call(null,inst_40468);
var inst_40474 = cljs.core.count.call(null,inst_40472);
var inst_40449 = inst_40473;
var inst_40450 = inst_40472;
var inst_40451 = inst_40474;
var inst_40452 = (0);
var state_40509__$1 = (function (){var statearr_40544 = state_40509;
(statearr_40544[(20)] = inst_40449);

(statearr_40544[(21)] = inst_40451);

(statearr_40544[(11)] = inst_40452);

(statearr_40544[(12)] = inst_40450);

return statearr_40544;
})();
var statearr_40545_40614 = state_40509__$1;
(statearr_40545_40614[(2)] = null);

(statearr_40545_40614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (41))){
var inst_40468 = (state_40509[(25)]);
var inst_40484 = (state_40509[(2)]);
var inst_40485 = cljs.core.next.call(null,inst_40468);
var inst_40449 = inst_40485;
var inst_40450 = null;
var inst_40451 = (0);
var inst_40452 = (0);
var state_40509__$1 = (function (){var statearr_40546 = state_40509;
(statearr_40546[(20)] = inst_40449);

(statearr_40546[(21)] = inst_40451);

(statearr_40546[(27)] = inst_40484);

(statearr_40546[(11)] = inst_40452);

(statearr_40546[(12)] = inst_40450);

return statearr_40546;
})();
var statearr_40547_40615 = state_40509__$1;
(statearr_40547_40615[(2)] = null);

(statearr_40547_40615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (43))){
var state_40509__$1 = state_40509;
var statearr_40548_40616 = state_40509__$1;
(statearr_40548_40616[(2)] = null);

(statearr_40548_40616[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (29))){
var inst_40493 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40549_40617 = state_40509__$1;
(statearr_40549_40617[(2)] = inst_40493);

(statearr_40549_40617[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (44))){
var inst_40502 = (state_40509[(2)]);
var state_40509__$1 = (function (){var statearr_40550 = state_40509;
(statearr_40550[(28)] = inst_40502);

return statearr_40550;
})();
var statearr_40551_40618 = state_40509__$1;
(statearr_40551_40618[(2)] = null);

(statearr_40551_40618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (6))){
var inst_40441 = (state_40509[(29)]);
var inst_40440 = cljs.core.deref.call(null,cs);
var inst_40441__$1 = cljs.core.keys.call(null,inst_40440);
var inst_40442 = cljs.core.count.call(null,inst_40441__$1);
var inst_40443 = cljs.core.reset_BANG_.call(null,dctr,inst_40442);
var inst_40448 = cljs.core.seq.call(null,inst_40441__$1);
var inst_40449 = inst_40448;
var inst_40450 = null;
var inst_40451 = (0);
var inst_40452 = (0);
var state_40509__$1 = (function (){var statearr_40552 = state_40509;
(statearr_40552[(20)] = inst_40449);

(statearr_40552[(30)] = inst_40443);

(statearr_40552[(21)] = inst_40451);

(statearr_40552[(11)] = inst_40452);

(statearr_40552[(29)] = inst_40441__$1);

(statearr_40552[(12)] = inst_40450);

return statearr_40552;
})();
var statearr_40553_40619 = state_40509__$1;
(statearr_40553_40619[(2)] = null);

(statearr_40553_40619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (28))){
var inst_40449 = (state_40509[(20)]);
var inst_40468 = (state_40509[(25)]);
var inst_40468__$1 = cljs.core.seq.call(null,inst_40449);
var state_40509__$1 = (function (){var statearr_40554 = state_40509;
(statearr_40554[(25)] = inst_40468__$1);

return statearr_40554;
})();
if(inst_40468__$1){
var statearr_40555_40620 = state_40509__$1;
(statearr_40555_40620[(1)] = (33));

} else {
var statearr_40556_40621 = state_40509__$1;
(statearr_40556_40621[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (25))){
var inst_40451 = (state_40509[(21)]);
var inst_40452 = (state_40509[(11)]);
var inst_40454 = (inst_40452 < inst_40451);
var inst_40455 = inst_40454;
var state_40509__$1 = state_40509;
if(cljs.core.truth_(inst_40455)){
var statearr_40557_40622 = state_40509__$1;
(statearr_40557_40622[(1)] = (27));

} else {
var statearr_40558_40623 = state_40509__$1;
(statearr_40558_40623[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (34))){
var state_40509__$1 = state_40509;
var statearr_40559_40624 = state_40509__$1;
(statearr_40559_40624[(2)] = null);

(statearr_40559_40624[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (17))){
var state_40509__$1 = state_40509;
var statearr_40560_40625 = state_40509__$1;
(statearr_40560_40625[(2)] = null);

(statearr_40560_40625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (3))){
var inst_40507 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40509__$1,inst_40507);
} else {
if((state_val_40510 === (12))){
var inst_40436 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40561_40626 = state_40509__$1;
(statearr_40561_40626[(2)] = inst_40436);

(statearr_40561_40626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (2))){
var state_40509__$1 = state_40509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40509__$1,(4),ch);
} else {
if((state_val_40510 === (23))){
var state_40509__$1 = state_40509;
var statearr_40562_40627 = state_40509__$1;
(statearr_40562_40627[(2)] = null);

(statearr_40562_40627[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (35))){
var inst_40491 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40563_40628 = state_40509__$1;
(statearr_40563_40628[(2)] = inst_40491);

(statearr_40563_40628[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (19))){
var inst_40408 = (state_40509[(7)]);
var inst_40412 = cljs.core.chunk_first.call(null,inst_40408);
var inst_40413 = cljs.core.chunk_rest.call(null,inst_40408);
var inst_40414 = cljs.core.count.call(null,inst_40412);
var inst_40386 = inst_40413;
var inst_40387 = inst_40412;
var inst_40388 = inst_40414;
var inst_40389 = (0);
var state_40509__$1 = (function (){var statearr_40564 = state_40509;
(statearr_40564[(14)] = inst_40387);

(statearr_40564[(15)] = inst_40386);

(statearr_40564[(16)] = inst_40389);

(statearr_40564[(17)] = inst_40388);

return statearr_40564;
})();
var statearr_40565_40629 = state_40509__$1;
(statearr_40565_40629[(2)] = null);

(statearr_40565_40629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (11))){
var inst_40386 = (state_40509[(15)]);
var inst_40408 = (state_40509[(7)]);
var inst_40408__$1 = cljs.core.seq.call(null,inst_40386);
var state_40509__$1 = (function (){var statearr_40566 = state_40509;
(statearr_40566[(7)] = inst_40408__$1);

return statearr_40566;
})();
if(inst_40408__$1){
var statearr_40567_40630 = state_40509__$1;
(statearr_40567_40630[(1)] = (16));

} else {
var statearr_40568_40631 = state_40509__$1;
(statearr_40568_40631[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (9))){
var inst_40438 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40569_40632 = state_40509__$1;
(statearr_40569_40632[(2)] = inst_40438);

(statearr_40569_40632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (5))){
var inst_40384 = cljs.core.deref.call(null,cs);
var inst_40385 = cljs.core.seq.call(null,inst_40384);
var inst_40386 = inst_40385;
var inst_40387 = null;
var inst_40388 = (0);
var inst_40389 = (0);
var state_40509__$1 = (function (){var statearr_40570 = state_40509;
(statearr_40570[(14)] = inst_40387);

(statearr_40570[(15)] = inst_40386);

(statearr_40570[(16)] = inst_40389);

(statearr_40570[(17)] = inst_40388);

return statearr_40570;
})();
var statearr_40571_40633 = state_40509__$1;
(statearr_40571_40633[(2)] = null);

(statearr_40571_40633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (14))){
var state_40509__$1 = state_40509;
var statearr_40572_40634 = state_40509__$1;
(statearr_40572_40634[(2)] = null);

(statearr_40572_40634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (45))){
var inst_40499 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40573_40635 = state_40509__$1;
(statearr_40573_40635[(2)] = inst_40499);

(statearr_40573_40635[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (26))){
var inst_40441 = (state_40509[(29)]);
var inst_40495 = (state_40509[(2)]);
var inst_40496 = cljs.core.seq.call(null,inst_40441);
var state_40509__$1 = (function (){var statearr_40574 = state_40509;
(statearr_40574[(31)] = inst_40495);

return statearr_40574;
})();
if(inst_40496){
var statearr_40575_40636 = state_40509__$1;
(statearr_40575_40636[(1)] = (42));

} else {
var statearr_40576_40637 = state_40509__$1;
(statearr_40576_40637[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (16))){
var inst_40408 = (state_40509[(7)]);
var inst_40410 = cljs.core.chunked_seq_QMARK_.call(null,inst_40408);
var state_40509__$1 = state_40509;
if(inst_40410){
var statearr_40577_40638 = state_40509__$1;
(statearr_40577_40638[(1)] = (19));

} else {
var statearr_40578_40639 = state_40509__$1;
(statearr_40578_40639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (38))){
var inst_40488 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40579_40640 = state_40509__$1;
(statearr_40579_40640[(2)] = inst_40488);

(statearr_40579_40640[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (30))){
var state_40509__$1 = state_40509;
var statearr_40580_40641 = state_40509__$1;
(statearr_40580_40641[(2)] = null);

(statearr_40580_40641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (10))){
var inst_40387 = (state_40509[(14)]);
var inst_40389 = (state_40509[(16)]);
var inst_40397 = cljs.core._nth.call(null,inst_40387,inst_40389);
var inst_40398 = cljs.core.nth.call(null,inst_40397,(0),null);
var inst_40399 = cljs.core.nth.call(null,inst_40397,(1),null);
var state_40509__$1 = (function (){var statearr_40581 = state_40509;
(statearr_40581[(26)] = inst_40398);

return statearr_40581;
})();
if(cljs.core.truth_(inst_40399)){
var statearr_40582_40642 = state_40509__$1;
(statearr_40582_40642[(1)] = (13));

} else {
var statearr_40583_40643 = state_40509__$1;
(statearr_40583_40643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (18))){
var inst_40434 = (state_40509[(2)]);
var state_40509__$1 = state_40509;
var statearr_40584_40644 = state_40509__$1;
(statearr_40584_40644[(2)] = inst_40434);

(statearr_40584_40644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (42))){
var state_40509__$1 = state_40509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40509__$1,(45),dchan);
} else {
if((state_val_40510 === (37))){
var inst_40377 = (state_40509[(9)]);
var inst_40477 = (state_40509[(23)]);
var inst_40468 = (state_40509[(25)]);
var inst_40477__$1 = cljs.core.first.call(null,inst_40468);
var inst_40478 = cljs.core.async.put_BANG_.call(null,inst_40477__$1,inst_40377,done);
var state_40509__$1 = (function (){var statearr_40585 = state_40509;
(statearr_40585[(23)] = inst_40477__$1);

return statearr_40585;
})();
if(cljs.core.truth_(inst_40478)){
var statearr_40586_40645 = state_40509__$1;
(statearr_40586_40645[(1)] = (39));

} else {
var statearr_40587_40646 = state_40509__$1;
(statearr_40587_40646[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40510 === (8))){
var inst_40389 = (state_40509[(16)]);
var inst_40388 = (state_40509[(17)]);
var inst_40391 = (inst_40389 < inst_40388);
var inst_40392 = inst_40391;
var state_40509__$1 = state_40509;
if(cljs.core.truth_(inst_40392)){
var statearr_40588_40647 = state_40509__$1;
(statearr_40588_40647[(1)] = (10));

} else {
var statearr_40589_40648 = state_40509__$1;
(statearr_40589_40648[(1)] = (11));

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
});})(c__39775__auto___40594,cs,m,dchan,dctr,done))
;
return ((function (switch__39685__auto__,c__39775__auto___40594,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39686__auto__ = null;
var cljs$core$async$mult_$_state_machine__39686__auto____0 = (function (){
var statearr_40590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40590[(0)] = cljs$core$async$mult_$_state_machine__39686__auto__);

(statearr_40590[(1)] = (1));

return statearr_40590;
});
var cljs$core$async$mult_$_state_machine__39686__auto____1 = (function (state_40509){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40591){if((e40591 instanceof Object)){
var ex__39689__auto__ = e40591;
var statearr_40592_40649 = state_40509;
(statearr_40592_40649[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40650 = state_40509;
state_40509 = G__40650;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39686__auto__ = function(state_40509){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39686__auto____1.call(this,state_40509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39686__auto____0;
cljs$core$async$mult_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39686__auto____1;
return cljs$core$async$mult_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___40594,cs,m,dchan,dctr,done))
})();
var state__39777__auto__ = (function (){var statearr_40593 = f__39776__auto__.call(null);
(statearr_40593[(6)] = c__39775__auto___40594);

return statearr_40593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___40594,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40652 = arguments.length;
switch (G__40652) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,ch);
} else {
var m__30929__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,ch);
} else {
var m__30929__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m);
} else {
var m__30929__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,state_map);
} else {
var m__30929__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30928__auto__ = (((m == null))?null:m);
var m__30929__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,m,mode);
} else {
var m__30929__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31481__auto__ = [];
var len__31474__auto___40664 = arguments.length;
var i__31475__auto___40665 = (0);
while(true){
if((i__31475__auto___40665 < len__31474__auto___40664)){
args__31481__auto__.push((arguments[i__31475__auto___40665]));

var G__40666 = (i__31475__auto___40665 + (1));
i__31475__auto___40665 = G__40666;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = ((((3) < args__31481__auto__.length))?(new cljs.core.IndexedSeq(args__31481__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31482__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40658){
var map__40659 = p__40658;
var map__40659__$1 = ((((!((map__40659 == null)))?((((map__40659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40659):map__40659);
var opts = map__40659__$1;
var statearr_40661_40667 = state;
(statearr_40661_40667[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40659,map__40659__$1,opts){
return (function (val){
var statearr_40662_40668 = state;
(statearr_40662_40668[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40659,map__40659__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40663_40669 = state;
(statearr_40663_40669[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40654){
var G__40655 = cljs.core.first.call(null,seq40654);
var seq40654__$1 = cljs.core.next.call(null,seq40654);
var G__40656 = cljs.core.first.call(null,seq40654__$1);
var seq40654__$2 = cljs.core.next.call(null,seq40654__$1);
var G__40657 = cljs.core.first.call(null,seq40654__$2);
var seq40654__$3 = cljs.core.next.call(null,seq40654__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40655,G__40656,G__40657,seq40654__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40670 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40671){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40671 = meta40671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40672,meta40671__$1){
var self__ = this;
var _40672__$1 = this;
return (new cljs.core.async.t_cljs$core$async40670(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40672){
var self__ = this;
var _40672__$1 = this;
return self__.meta40671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40671","meta40671",1568762596,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40670";

cljs.core.async.t_cljs$core$async40670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async40670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40670(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40671){
return (new cljs.core.async.t_cljs$core$async40670(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40670(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39775__auto___40834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40774){
var state_val_40775 = (state_40774[(1)]);
if((state_val_40775 === (7))){
var inst_40689 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
var statearr_40776_40835 = state_40774__$1;
(statearr_40776_40835[(2)] = inst_40689);

(statearr_40776_40835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (20))){
var inst_40701 = (state_40774[(7)]);
var state_40774__$1 = state_40774;
var statearr_40777_40836 = state_40774__$1;
(statearr_40777_40836[(2)] = inst_40701);

(statearr_40777_40836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (27))){
var state_40774__$1 = state_40774;
var statearr_40778_40837 = state_40774__$1;
(statearr_40778_40837[(2)] = null);

(statearr_40778_40837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (1))){
var inst_40676 = (state_40774[(8)]);
var inst_40676__$1 = calc_state.call(null);
var inst_40678 = (inst_40676__$1 == null);
var inst_40679 = cljs.core.not.call(null,inst_40678);
var state_40774__$1 = (function (){var statearr_40779 = state_40774;
(statearr_40779[(8)] = inst_40676__$1);

return statearr_40779;
})();
if(inst_40679){
var statearr_40780_40838 = state_40774__$1;
(statearr_40780_40838[(1)] = (2));

} else {
var statearr_40781_40839 = state_40774__$1;
(statearr_40781_40839[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (24))){
var inst_40734 = (state_40774[(9)]);
var inst_40748 = (state_40774[(10)]);
var inst_40725 = (state_40774[(11)]);
var inst_40748__$1 = inst_40725.call(null,inst_40734);
var state_40774__$1 = (function (){var statearr_40782 = state_40774;
(statearr_40782[(10)] = inst_40748__$1);

return statearr_40782;
})();
if(cljs.core.truth_(inst_40748__$1)){
var statearr_40783_40840 = state_40774__$1;
(statearr_40783_40840[(1)] = (29));

} else {
var statearr_40784_40841 = state_40774__$1;
(statearr_40784_40841[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (4))){
var inst_40692 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40692)){
var statearr_40785_40842 = state_40774__$1;
(statearr_40785_40842[(1)] = (8));

} else {
var statearr_40786_40843 = state_40774__$1;
(statearr_40786_40843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (15))){
var inst_40719 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40719)){
var statearr_40787_40844 = state_40774__$1;
(statearr_40787_40844[(1)] = (19));

} else {
var statearr_40788_40845 = state_40774__$1;
(statearr_40788_40845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (21))){
var inst_40724 = (state_40774[(12)]);
var inst_40724__$1 = (state_40774[(2)]);
var inst_40725 = cljs.core.get.call(null,inst_40724__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40726 = cljs.core.get.call(null,inst_40724__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40727 = cljs.core.get.call(null,inst_40724__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40774__$1 = (function (){var statearr_40789 = state_40774;
(statearr_40789[(12)] = inst_40724__$1);

(statearr_40789[(13)] = inst_40726);

(statearr_40789[(11)] = inst_40725);

return statearr_40789;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40774__$1,(22),inst_40727);
} else {
if((state_val_40775 === (31))){
var inst_40756 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40756)){
var statearr_40790_40846 = state_40774__$1;
(statearr_40790_40846[(1)] = (32));

} else {
var statearr_40791_40847 = state_40774__$1;
(statearr_40791_40847[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (32))){
var inst_40733 = (state_40774[(14)]);
var state_40774__$1 = state_40774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40774__$1,(35),out,inst_40733);
} else {
if((state_val_40775 === (33))){
var inst_40724 = (state_40774[(12)]);
var inst_40701 = inst_40724;
var state_40774__$1 = (function (){var statearr_40792 = state_40774;
(statearr_40792[(7)] = inst_40701);

return statearr_40792;
})();
var statearr_40793_40848 = state_40774__$1;
(statearr_40793_40848[(2)] = null);

(statearr_40793_40848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (13))){
var inst_40701 = (state_40774[(7)]);
var inst_40708 = inst_40701.cljs$lang$protocol_mask$partition0$;
var inst_40709 = (inst_40708 & (64));
var inst_40710 = inst_40701.cljs$core$ISeq$;
var inst_40711 = (cljs.core.PROTOCOL_SENTINEL === inst_40710);
var inst_40712 = (inst_40709) || (inst_40711);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40712)){
var statearr_40794_40849 = state_40774__$1;
(statearr_40794_40849[(1)] = (16));

} else {
var statearr_40795_40850 = state_40774__$1;
(statearr_40795_40850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (22))){
var inst_40734 = (state_40774[(9)]);
var inst_40733 = (state_40774[(14)]);
var inst_40732 = (state_40774[(2)]);
var inst_40733__$1 = cljs.core.nth.call(null,inst_40732,(0),null);
var inst_40734__$1 = cljs.core.nth.call(null,inst_40732,(1),null);
var inst_40735 = (inst_40733__$1 == null);
var inst_40736 = cljs.core._EQ_.call(null,inst_40734__$1,change);
var inst_40737 = (inst_40735) || (inst_40736);
var state_40774__$1 = (function (){var statearr_40796 = state_40774;
(statearr_40796[(9)] = inst_40734__$1);

(statearr_40796[(14)] = inst_40733__$1);

return statearr_40796;
})();
if(cljs.core.truth_(inst_40737)){
var statearr_40797_40851 = state_40774__$1;
(statearr_40797_40851[(1)] = (23));

} else {
var statearr_40798_40852 = state_40774__$1;
(statearr_40798_40852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (36))){
var inst_40724 = (state_40774[(12)]);
var inst_40701 = inst_40724;
var state_40774__$1 = (function (){var statearr_40799 = state_40774;
(statearr_40799[(7)] = inst_40701);

return statearr_40799;
})();
var statearr_40800_40853 = state_40774__$1;
(statearr_40800_40853[(2)] = null);

(statearr_40800_40853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (29))){
var inst_40748 = (state_40774[(10)]);
var state_40774__$1 = state_40774;
var statearr_40801_40854 = state_40774__$1;
(statearr_40801_40854[(2)] = inst_40748);

(statearr_40801_40854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (6))){
var state_40774__$1 = state_40774;
var statearr_40802_40855 = state_40774__$1;
(statearr_40802_40855[(2)] = false);

(statearr_40802_40855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (28))){
var inst_40744 = (state_40774[(2)]);
var inst_40745 = calc_state.call(null);
var inst_40701 = inst_40745;
var state_40774__$1 = (function (){var statearr_40803 = state_40774;
(statearr_40803[(15)] = inst_40744);

(statearr_40803[(7)] = inst_40701);

return statearr_40803;
})();
var statearr_40804_40856 = state_40774__$1;
(statearr_40804_40856[(2)] = null);

(statearr_40804_40856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (25))){
var inst_40770 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
var statearr_40805_40857 = state_40774__$1;
(statearr_40805_40857[(2)] = inst_40770);

(statearr_40805_40857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (34))){
var inst_40768 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
var statearr_40806_40858 = state_40774__$1;
(statearr_40806_40858[(2)] = inst_40768);

(statearr_40806_40858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (17))){
var state_40774__$1 = state_40774;
var statearr_40807_40859 = state_40774__$1;
(statearr_40807_40859[(2)] = false);

(statearr_40807_40859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (3))){
var state_40774__$1 = state_40774;
var statearr_40808_40860 = state_40774__$1;
(statearr_40808_40860[(2)] = false);

(statearr_40808_40860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (12))){
var inst_40772 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40774__$1,inst_40772);
} else {
if((state_val_40775 === (2))){
var inst_40676 = (state_40774[(8)]);
var inst_40681 = inst_40676.cljs$lang$protocol_mask$partition0$;
var inst_40682 = (inst_40681 & (64));
var inst_40683 = inst_40676.cljs$core$ISeq$;
var inst_40684 = (cljs.core.PROTOCOL_SENTINEL === inst_40683);
var inst_40685 = (inst_40682) || (inst_40684);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40685)){
var statearr_40809_40861 = state_40774__$1;
(statearr_40809_40861[(1)] = (5));

} else {
var statearr_40810_40862 = state_40774__$1;
(statearr_40810_40862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (23))){
var inst_40733 = (state_40774[(14)]);
var inst_40739 = (inst_40733 == null);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40739)){
var statearr_40811_40863 = state_40774__$1;
(statearr_40811_40863[(1)] = (26));

} else {
var statearr_40812_40864 = state_40774__$1;
(statearr_40812_40864[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (35))){
var inst_40759 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
if(cljs.core.truth_(inst_40759)){
var statearr_40813_40865 = state_40774__$1;
(statearr_40813_40865[(1)] = (36));

} else {
var statearr_40814_40866 = state_40774__$1;
(statearr_40814_40866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (19))){
var inst_40701 = (state_40774[(7)]);
var inst_40721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40701);
var state_40774__$1 = state_40774;
var statearr_40815_40867 = state_40774__$1;
(statearr_40815_40867[(2)] = inst_40721);

(statearr_40815_40867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (11))){
var inst_40701 = (state_40774[(7)]);
var inst_40705 = (inst_40701 == null);
var inst_40706 = cljs.core.not.call(null,inst_40705);
var state_40774__$1 = state_40774;
if(inst_40706){
var statearr_40816_40868 = state_40774__$1;
(statearr_40816_40868[(1)] = (13));

} else {
var statearr_40817_40869 = state_40774__$1;
(statearr_40817_40869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (9))){
var inst_40676 = (state_40774[(8)]);
var state_40774__$1 = state_40774;
var statearr_40818_40870 = state_40774__$1;
(statearr_40818_40870[(2)] = inst_40676);

(statearr_40818_40870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (5))){
var state_40774__$1 = state_40774;
var statearr_40819_40871 = state_40774__$1;
(statearr_40819_40871[(2)] = true);

(statearr_40819_40871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (14))){
var state_40774__$1 = state_40774;
var statearr_40820_40872 = state_40774__$1;
(statearr_40820_40872[(2)] = false);

(statearr_40820_40872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (26))){
var inst_40734 = (state_40774[(9)]);
var inst_40741 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40734);
var state_40774__$1 = state_40774;
var statearr_40821_40873 = state_40774__$1;
(statearr_40821_40873[(2)] = inst_40741);

(statearr_40821_40873[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (16))){
var state_40774__$1 = state_40774;
var statearr_40822_40874 = state_40774__$1;
(statearr_40822_40874[(2)] = true);

(statearr_40822_40874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (38))){
var inst_40764 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
var statearr_40823_40875 = state_40774__$1;
(statearr_40823_40875[(2)] = inst_40764);

(statearr_40823_40875[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (30))){
var inst_40734 = (state_40774[(9)]);
var inst_40726 = (state_40774[(13)]);
var inst_40725 = (state_40774[(11)]);
var inst_40751 = cljs.core.empty_QMARK_.call(null,inst_40725);
var inst_40752 = inst_40726.call(null,inst_40734);
var inst_40753 = cljs.core.not.call(null,inst_40752);
var inst_40754 = (inst_40751) && (inst_40753);
var state_40774__$1 = state_40774;
var statearr_40824_40876 = state_40774__$1;
(statearr_40824_40876[(2)] = inst_40754);

(statearr_40824_40876[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (10))){
var inst_40676 = (state_40774[(8)]);
var inst_40697 = (state_40774[(2)]);
var inst_40698 = cljs.core.get.call(null,inst_40697,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40699 = cljs.core.get.call(null,inst_40697,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40700 = cljs.core.get.call(null,inst_40697,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40701 = inst_40676;
var state_40774__$1 = (function (){var statearr_40825 = state_40774;
(statearr_40825[(16)] = inst_40699);

(statearr_40825[(7)] = inst_40701);

(statearr_40825[(17)] = inst_40698);

(statearr_40825[(18)] = inst_40700);

return statearr_40825;
})();
var statearr_40826_40877 = state_40774__$1;
(statearr_40826_40877[(2)] = null);

(statearr_40826_40877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (18))){
var inst_40716 = (state_40774[(2)]);
var state_40774__$1 = state_40774;
var statearr_40827_40878 = state_40774__$1;
(statearr_40827_40878[(2)] = inst_40716);

(statearr_40827_40878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (37))){
var state_40774__$1 = state_40774;
var statearr_40828_40879 = state_40774__$1;
(statearr_40828_40879[(2)] = null);

(statearr_40828_40879[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40775 === (8))){
var inst_40676 = (state_40774[(8)]);
var inst_40694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40676);
var state_40774__$1 = state_40774;
var statearr_40829_40880 = state_40774__$1;
(statearr_40829_40880[(2)] = inst_40694);

(statearr_40829_40880[(1)] = (10));


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
});})(c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39685__auto__,c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39686__auto__ = null;
var cljs$core$async$mix_$_state_machine__39686__auto____0 = (function (){
var statearr_40830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40830[(0)] = cljs$core$async$mix_$_state_machine__39686__auto__);

(statearr_40830[(1)] = (1));

return statearr_40830;
});
var cljs$core$async$mix_$_state_machine__39686__auto____1 = (function (state_40774){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e40831){if((e40831 instanceof Object)){
var ex__39689__auto__ = e40831;
var statearr_40832_40881 = state_40774;
(statearr_40832_40881[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40882 = state_40774;
state_40774 = G__40882;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39686__auto__ = function(state_40774){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39686__auto____1.call(this,state_40774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39686__auto____0;
cljs$core$async$mix_$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39686__auto____1;
return cljs$core$async$mix_$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39777__auto__ = (function (){var statearr_40833 = f__39776__auto__.call(null);
(statearr_40833[(6)] = c__39775__auto___40834);

return statearr_40833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___40834,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30928__auto__ = (((p == null))?null:p);
var m__30929__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30929__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30928__auto__ = (((p == null))?null:p);
var m__30929__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,p,v,ch);
} else {
var m__30929__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40884 = arguments.length;
switch (G__40884) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30928__auto__ = (((p == null))?null:p);
var m__30929__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,p);
} else {
var m__30929__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30928__auto__ = (((p == null))?null:p);
var m__30929__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30928__auto__)]);
if(!((m__30929__auto__ == null))){
return m__30929__auto__.call(null,p,v);
} else {
var m__30929__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30929__auto____$1 == null))){
return m__30929__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40888 = arguments.length;
switch (G__40888) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30194__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30194__auto__)){
return or__30194__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30194__auto__,mults){
return (function (p1__40886_SHARP_){
if(cljs.core.truth_(p1__40886_SHARP_.call(null,topic))){
return p1__40886_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40886_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30194__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40889 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40890){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40890 = meta40890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40891,meta40890__$1){
var self__ = this;
var _40891__$1 = this;
return (new cljs.core.async.t_cljs$core$async40889(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40890__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40891){
var self__ = this;
var _40891__$1 = this;
return self__.meta40890;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40890","meta40890",-590099119,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40889";

cljs.core.async.t_cljs$core$async40889.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async40889");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40889 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40889(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40890){
return (new cljs.core.async.t_cljs$core$async40889(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40890));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40889(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39775__auto___41009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41009,mults,ensure_mult,p){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41009,mults,ensure_mult,p){
return (function (state_40963){
var state_val_40964 = (state_40963[(1)]);
if((state_val_40964 === (7))){
var inst_40959 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40965_41010 = state_40963__$1;
(statearr_40965_41010[(2)] = inst_40959);

(statearr_40965_41010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (20))){
var state_40963__$1 = state_40963;
var statearr_40966_41011 = state_40963__$1;
(statearr_40966_41011[(2)] = null);

(statearr_40966_41011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (1))){
var state_40963__$1 = state_40963;
var statearr_40967_41012 = state_40963__$1;
(statearr_40967_41012[(2)] = null);

(statearr_40967_41012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (24))){
var inst_40942 = (state_40963[(7)]);
var inst_40951 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40942);
var state_40963__$1 = state_40963;
var statearr_40968_41013 = state_40963__$1;
(statearr_40968_41013[(2)] = inst_40951);

(statearr_40968_41013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (4))){
var inst_40894 = (state_40963[(8)]);
var inst_40894__$1 = (state_40963[(2)]);
var inst_40895 = (inst_40894__$1 == null);
var state_40963__$1 = (function (){var statearr_40969 = state_40963;
(statearr_40969[(8)] = inst_40894__$1);

return statearr_40969;
})();
if(cljs.core.truth_(inst_40895)){
var statearr_40970_41014 = state_40963__$1;
(statearr_40970_41014[(1)] = (5));

} else {
var statearr_40971_41015 = state_40963__$1;
(statearr_40971_41015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (15))){
var inst_40936 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40972_41016 = state_40963__$1;
(statearr_40972_41016[(2)] = inst_40936);

(statearr_40972_41016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (21))){
var inst_40956 = (state_40963[(2)]);
var state_40963__$1 = (function (){var statearr_40973 = state_40963;
(statearr_40973[(9)] = inst_40956);

return statearr_40973;
})();
var statearr_40974_41017 = state_40963__$1;
(statearr_40974_41017[(2)] = null);

(statearr_40974_41017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (13))){
var inst_40918 = (state_40963[(10)]);
var inst_40920 = cljs.core.chunked_seq_QMARK_.call(null,inst_40918);
var state_40963__$1 = state_40963;
if(inst_40920){
var statearr_40975_41018 = state_40963__$1;
(statearr_40975_41018[(1)] = (16));

} else {
var statearr_40976_41019 = state_40963__$1;
(statearr_40976_41019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (22))){
var inst_40948 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
if(cljs.core.truth_(inst_40948)){
var statearr_40977_41020 = state_40963__$1;
(statearr_40977_41020[(1)] = (23));

} else {
var statearr_40978_41021 = state_40963__$1;
(statearr_40978_41021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (6))){
var inst_40944 = (state_40963[(11)]);
var inst_40942 = (state_40963[(7)]);
var inst_40894 = (state_40963[(8)]);
var inst_40942__$1 = topic_fn.call(null,inst_40894);
var inst_40943 = cljs.core.deref.call(null,mults);
var inst_40944__$1 = cljs.core.get.call(null,inst_40943,inst_40942__$1);
var state_40963__$1 = (function (){var statearr_40979 = state_40963;
(statearr_40979[(11)] = inst_40944__$1);

(statearr_40979[(7)] = inst_40942__$1);

return statearr_40979;
})();
if(cljs.core.truth_(inst_40944__$1)){
var statearr_40980_41022 = state_40963__$1;
(statearr_40980_41022[(1)] = (19));

} else {
var statearr_40981_41023 = state_40963__$1;
(statearr_40981_41023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (25))){
var inst_40953 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40982_41024 = state_40963__$1;
(statearr_40982_41024[(2)] = inst_40953);

(statearr_40982_41024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (17))){
var inst_40918 = (state_40963[(10)]);
var inst_40927 = cljs.core.first.call(null,inst_40918);
var inst_40928 = cljs.core.async.muxch_STAR_.call(null,inst_40927);
var inst_40929 = cljs.core.async.close_BANG_.call(null,inst_40928);
var inst_40930 = cljs.core.next.call(null,inst_40918);
var inst_40904 = inst_40930;
var inst_40905 = null;
var inst_40906 = (0);
var inst_40907 = (0);
var state_40963__$1 = (function (){var statearr_40983 = state_40963;
(statearr_40983[(12)] = inst_40907);

(statearr_40983[(13)] = inst_40929);

(statearr_40983[(14)] = inst_40906);

(statearr_40983[(15)] = inst_40905);

(statearr_40983[(16)] = inst_40904);

return statearr_40983;
})();
var statearr_40984_41025 = state_40963__$1;
(statearr_40984_41025[(2)] = null);

(statearr_40984_41025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (3))){
var inst_40961 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40963__$1,inst_40961);
} else {
if((state_val_40964 === (12))){
var inst_40938 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40985_41026 = state_40963__$1;
(statearr_40985_41026[(2)] = inst_40938);

(statearr_40985_41026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (2))){
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40963__$1,(4),ch);
} else {
if((state_val_40964 === (23))){
var state_40963__$1 = state_40963;
var statearr_40986_41027 = state_40963__$1;
(statearr_40986_41027[(2)] = null);

(statearr_40986_41027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (19))){
var inst_40944 = (state_40963[(11)]);
var inst_40894 = (state_40963[(8)]);
var inst_40946 = cljs.core.async.muxch_STAR_.call(null,inst_40944);
var state_40963__$1 = state_40963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40963__$1,(22),inst_40946,inst_40894);
} else {
if((state_val_40964 === (11))){
var inst_40918 = (state_40963[(10)]);
var inst_40904 = (state_40963[(16)]);
var inst_40918__$1 = cljs.core.seq.call(null,inst_40904);
var state_40963__$1 = (function (){var statearr_40987 = state_40963;
(statearr_40987[(10)] = inst_40918__$1);

return statearr_40987;
})();
if(inst_40918__$1){
var statearr_40988_41028 = state_40963__$1;
(statearr_40988_41028[(1)] = (13));

} else {
var statearr_40989_41029 = state_40963__$1;
(statearr_40989_41029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (9))){
var inst_40940 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_40990_41030 = state_40963__$1;
(statearr_40990_41030[(2)] = inst_40940);

(statearr_40990_41030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (5))){
var inst_40901 = cljs.core.deref.call(null,mults);
var inst_40902 = cljs.core.vals.call(null,inst_40901);
var inst_40903 = cljs.core.seq.call(null,inst_40902);
var inst_40904 = inst_40903;
var inst_40905 = null;
var inst_40906 = (0);
var inst_40907 = (0);
var state_40963__$1 = (function (){var statearr_40991 = state_40963;
(statearr_40991[(12)] = inst_40907);

(statearr_40991[(14)] = inst_40906);

(statearr_40991[(15)] = inst_40905);

(statearr_40991[(16)] = inst_40904);

return statearr_40991;
})();
var statearr_40992_41031 = state_40963__$1;
(statearr_40992_41031[(2)] = null);

(statearr_40992_41031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (14))){
var state_40963__$1 = state_40963;
var statearr_40996_41032 = state_40963__$1;
(statearr_40996_41032[(2)] = null);

(statearr_40996_41032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (16))){
var inst_40918 = (state_40963[(10)]);
var inst_40922 = cljs.core.chunk_first.call(null,inst_40918);
var inst_40923 = cljs.core.chunk_rest.call(null,inst_40918);
var inst_40924 = cljs.core.count.call(null,inst_40922);
var inst_40904 = inst_40923;
var inst_40905 = inst_40922;
var inst_40906 = inst_40924;
var inst_40907 = (0);
var state_40963__$1 = (function (){var statearr_40997 = state_40963;
(statearr_40997[(12)] = inst_40907);

(statearr_40997[(14)] = inst_40906);

(statearr_40997[(15)] = inst_40905);

(statearr_40997[(16)] = inst_40904);

return statearr_40997;
})();
var statearr_40998_41033 = state_40963__$1;
(statearr_40998_41033[(2)] = null);

(statearr_40998_41033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (10))){
var inst_40907 = (state_40963[(12)]);
var inst_40906 = (state_40963[(14)]);
var inst_40905 = (state_40963[(15)]);
var inst_40904 = (state_40963[(16)]);
var inst_40912 = cljs.core._nth.call(null,inst_40905,inst_40907);
var inst_40913 = cljs.core.async.muxch_STAR_.call(null,inst_40912);
var inst_40914 = cljs.core.async.close_BANG_.call(null,inst_40913);
var inst_40915 = (inst_40907 + (1));
var tmp40993 = inst_40906;
var tmp40994 = inst_40905;
var tmp40995 = inst_40904;
var inst_40904__$1 = tmp40995;
var inst_40905__$1 = tmp40994;
var inst_40906__$1 = tmp40993;
var inst_40907__$1 = inst_40915;
var state_40963__$1 = (function (){var statearr_40999 = state_40963;
(statearr_40999[(12)] = inst_40907__$1);

(statearr_40999[(14)] = inst_40906__$1);

(statearr_40999[(17)] = inst_40914);

(statearr_40999[(15)] = inst_40905__$1);

(statearr_40999[(16)] = inst_40904__$1);

return statearr_40999;
})();
var statearr_41000_41034 = state_40963__$1;
(statearr_41000_41034[(2)] = null);

(statearr_41000_41034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (18))){
var inst_40933 = (state_40963[(2)]);
var state_40963__$1 = state_40963;
var statearr_41001_41035 = state_40963__$1;
(statearr_41001_41035[(2)] = inst_40933);

(statearr_41001_41035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40964 === (8))){
var inst_40907 = (state_40963[(12)]);
var inst_40906 = (state_40963[(14)]);
var inst_40909 = (inst_40907 < inst_40906);
var inst_40910 = inst_40909;
var state_40963__$1 = state_40963;
if(cljs.core.truth_(inst_40910)){
var statearr_41002_41036 = state_40963__$1;
(statearr_41002_41036[(1)] = (10));

} else {
var statearr_41003_41037 = state_40963__$1;
(statearr_41003_41037[(1)] = (11));

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
});})(c__39775__auto___41009,mults,ensure_mult,p))
;
return ((function (switch__39685__auto__,c__39775__auto___41009,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41004[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41004[(1)] = (1));

return statearr_41004;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_40963){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_40963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41005){if((e41005 instanceof Object)){
var ex__39689__auto__ = e41005;
var statearr_41006_41038 = state_40963;
(statearr_41006_41038[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41039 = state_40963;
state_40963 = G__41039;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_40963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_40963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41009,mults,ensure_mult,p))
})();
var state__39777__auto__ = (function (){var statearr_41007 = f__39776__auto__.call(null);
(statearr_41007[(6)] = c__39775__auto___41009);

return statearr_41007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41009,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41041 = arguments.length;
switch (G__41041) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41044 = arguments.length;
switch (G__41044) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41047 = arguments.length;
switch (G__41047) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__39775__auto___41114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41086){
var state_val_41087 = (state_41086[(1)]);
if((state_val_41087 === (7))){
var state_41086__$1 = state_41086;
var statearr_41088_41115 = state_41086__$1;
(statearr_41088_41115[(2)] = null);

(statearr_41088_41115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (1))){
var state_41086__$1 = state_41086;
var statearr_41089_41116 = state_41086__$1;
(statearr_41089_41116[(2)] = null);

(statearr_41089_41116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (4))){
var inst_41050 = (state_41086[(7)]);
var inst_41052 = (inst_41050 < cnt);
var state_41086__$1 = state_41086;
if(cljs.core.truth_(inst_41052)){
var statearr_41090_41117 = state_41086__$1;
(statearr_41090_41117[(1)] = (6));

} else {
var statearr_41091_41118 = state_41086__$1;
(statearr_41091_41118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (15))){
var inst_41082 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
var statearr_41092_41119 = state_41086__$1;
(statearr_41092_41119[(2)] = inst_41082);

(statearr_41092_41119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (13))){
var inst_41075 = cljs.core.async.close_BANG_.call(null,out);
var state_41086__$1 = state_41086;
var statearr_41093_41120 = state_41086__$1;
(statearr_41093_41120[(2)] = inst_41075);

(statearr_41093_41120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (6))){
var state_41086__$1 = state_41086;
var statearr_41094_41121 = state_41086__$1;
(statearr_41094_41121[(2)] = null);

(statearr_41094_41121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (3))){
var inst_41084 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41086__$1,inst_41084);
} else {
if((state_val_41087 === (12))){
var inst_41072 = (state_41086[(8)]);
var inst_41072__$1 = (state_41086[(2)]);
var inst_41073 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41072__$1);
var state_41086__$1 = (function (){var statearr_41095 = state_41086;
(statearr_41095[(8)] = inst_41072__$1);

return statearr_41095;
})();
if(cljs.core.truth_(inst_41073)){
var statearr_41096_41122 = state_41086__$1;
(statearr_41096_41122[(1)] = (13));

} else {
var statearr_41097_41123 = state_41086__$1;
(statearr_41097_41123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (2))){
var inst_41049 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41050 = (0);
var state_41086__$1 = (function (){var statearr_41098 = state_41086;
(statearr_41098[(7)] = inst_41050);

(statearr_41098[(9)] = inst_41049);

return statearr_41098;
})();
var statearr_41099_41124 = state_41086__$1;
(statearr_41099_41124[(2)] = null);

(statearr_41099_41124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (11))){
var inst_41050 = (state_41086[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41086,(10),Object,null,(9));
var inst_41059 = chs__$1.call(null,inst_41050);
var inst_41060 = done.call(null,inst_41050);
var inst_41061 = cljs.core.async.take_BANG_.call(null,inst_41059,inst_41060);
var state_41086__$1 = state_41086;
var statearr_41100_41125 = state_41086__$1;
(statearr_41100_41125[(2)] = inst_41061);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (9))){
var inst_41050 = (state_41086[(7)]);
var inst_41063 = (state_41086[(2)]);
var inst_41064 = (inst_41050 + (1));
var inst_41050__$1 = inst_41064;
var state_41086__$1 = (function (){var statearr_41101 = state_41086;
(statearr_41101[(10)] = inst_41063);

(statearr_41101[(7)] = inst_41050__$1);

return statearr_41101;
})();
var statearr_41102_41126 = state_41086__$1;
(statearr_41102_41126[(2)] = null);

(statearr_41102_41126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (5))){
var inst_41070 = (state_41086[(2)]);
var state_41086__$1 = (function (){var statearr_41103 = state_41086;
(statearr_41103[(11)] = inst_41070);

return statearr_41103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41086__$1,(12),dchan);
} else {
if((state_val_41087 === (14))){
var inst_41072 = (state_41086[(8)]);
var inst_41077 = cljs.core.apply.call(null,f,inst_41072);
var state_41086__$1 = state_41086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41086__$1,(16),out,inst_41077);
} else {
if((state_val_41087 === (16))){
var inst_41079 = (state_41086[(2)]);
var state_41086__$1 = (function (){var statearr_41104 = state_41086;
(statearr_41104[(12)] = inst_41079);

return statearr_41104;
})();
var statearr_41105_41127 = state_41086__$1;
(statearr_41105_41127[(2)] = null);

(statearr_41105_41127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (10))){
var inst_41054 = (state_41086[(2)]);
var inst_41055 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41086__$1 = (function (){var statearr_41106 = state_41086;
(statearr_41106[(13)] = inst_41054);

return statearr_41106;
})();
var statearr_41107_41128 = state_41086__$1;
(statearr_41107_41128[(2)] = inst_41055);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41087 === (8))){
var inst_41068 = (state_41086[(2)]);
var state_41086__$1 = state_41086;
var statearr_41108_41129 = state_41086__$1;
(statearr_41108_41129[(2)] = inst_41068);

(statearr_41108_41129[(1)] = (5));


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
});})(c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39685__auto__,c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41109[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41109[(1)] = (1));

return statearr_41109;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41086){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41110){if((e41110 instanceof Object)){
var ex__39689__auto__ = e41110;
var statearr_41111_41130 = state_41086;
(statearr_41111_41130[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41131 = state_41086;
state_41086 = G__41131;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41086);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39777__auto__ = (function (){var statearr_41112 = f__39776__auto__.call(null);
(statearr_41112[(6)] = c__39775__auto___41114);

return statearr_41112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41114,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41134 = arguments.length;
switch (G__41134) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41188,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41188,out){
return (function (state_41166){
var state_val_41167 = (state_41166[(1)]);
if((state_val_41167 === (7))){
var inst_41146 = (state_41166[(7)]);
var inst_41145 = (state_41166[(8)]);
var inst_41145__$1 = (state_41166[(2)]);
var inst_41146__$1 = cljs.core.nth.call(null,inst_41145__$1,(0),null);
var inst_41147 = cljs.core.nth.call(null,inst_41145__$1,(1),null);
var inst_41148 = (inst_41146__$1 == null);
var state_41166__$1 = (function (){var statearr_41168 = state_41166;
(statearr_41168[(9)] = inst_41147);

(statearr_41168[(7)] = inst_41146__$1);

(statearr_41168[(8)] = inst_41145__$1);

return statearr_41168;
})();
if(cljs.core.truth_(inst_41148)){
var statearr_41169_41189 = state_41166__$1;
(statearr_41169_41189[(1)] = (8));

} else {
var statearr_41170_41190 = state_41166__$1;
(statearr_41170_41190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (1))){
var inst_41135 = cljs.core.vec.call(null,chs);
var inst_41136 = inst_41135;
var state_41166__$1 = (function (){var statearr_41171 = state_41166;
(statearr_41171[(10)] = inst_41136);

return statearr_41171;
})();
var statearr_41172_41191 = state_41166__$1;
(statearr_41172_41191[(2)] = null);

(statearr_41172_41191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (4))){
var inst_41136 = (state_41166[(10)]);
var state_41166__$1 = state_41166;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41166__$1,(7),inst_41136);
} else {
if((state_val_41167 === (6))){
var inst_41162 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
var statearr_41173_41192 = state_41166__$1;
(statearr_41173_41192[(2)] = inst_41162);

(statearr_41173_41192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (3))){
var inst_41164 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41166__$1,inst_41164);
} else {
if((state_val_41167 === (2))){
var inst_41136 = (state_41166[(10)]);
var inst_41138 = cljs.core.count.call(null,inst_41136);
var inst_41139 = (inst_41138 > (0));
var state_41166__$1 = state_41166;
if(cljs.core.truth_(inst_41139)){
var statearr_41175_41193 = state_41166__$1;
(statearr_41175_41193[(1)] = (4));

} else {
var statearr_41176_41194 = state_41166__$1;
(statearr_41176_41194[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (11))){
var inst_41136 = (state_41166[(10)]);
var inst_41155 = (state_41166[(2)]);
var tmp41174 = inst_41136;
var inst_41136__$1 = tmp41174;
var state_41166__$1 = (function (){var statearr_41177 = state_41166;
(statearr_41177[(11)] = inst_41155);

(statearr_41177[(10)] = inst_41136__$1);

return statearr_41177;
})();
var statearr_41178_41195 = state_41166__$1;
(statearr_41178_41195[(2)] = null);

(statearr_41178_41195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (9))){
var inst_41146 = (state_41166[(7)]);
var state_41166__$1 = state_41166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41166__$1,(11),out,inst_41146);
} else {
if((state_val_41167 === (5))){
var inst_41160 = cljs.core.async.close_BANG_.call(null,out);
var state_41166__$1 = state_41166;
var statearr_41179_41196 = state_41166__$1;
(statearr_41179_41196[(2)] = inst_41160);

(statearr_41179_41196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (10))){
var inst_41158 = (state_41166[(2)]);
var state_41166__$1 = state_41166;
var statearr_41180_41197 = state_41166__$1;
(statearr_41180_41197[(2)] = inst_41158);

(statearr_41180_41197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41167 === (8))){
var inst_41147 = (state_41166[(9)]);
var inst_41136 = (state_41166[(10)]);
var inst_41146 = (state_41166[(7)]);
var inst_41145 = (state_41166[(8)]);
var inst_41150 = (function (){var cs = inst_41136;
var vec__41141 = inst_41145;
var v = inst_41146;
var c = inst_41147;
return ((function (cs,vec__41141,v,c,inst_41147,inst_41136,inst_41146,inst_41145,state_val_41167,c__39775__auto___41188,out){
return (function (p1__41132_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41132_SHARP_);
});
;})(cs,vec__41141,v,c,inst_41147,inst_41136,inst_41146,inst_41145,state_val_41167,c__39775__auto___41188,out))
})();
var inst_41151 = cljs.core.filterv.call(null,inst_41150,inst_41136);
var inst_41136__$1 = inst_41151;
var state_41166__$1 = (function (){var statearr_41181 = state_41166;
(statearr_41181[(10)] = inst_41136__$1);

return statearr_41181;
})();
var statearr_41182_41198 = state_41166__$1;
(statearr_41182_41198[(2)] = null);

(statearr_41182_41198[(1)] = (2));


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
});})(c__39775__auto___41188,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41188,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41183[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41183[(1)] = (1));

return statearr_41183;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41166){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41184){if((e41184 instanceof Object)){
var ex__39689__auto__ = e41184;
var statearr_41185_41199 = state_41166;
(statearr_41185_41199[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41200 = state_41166;
state_41166 = G__41200;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41166);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41188,out))
})();
var state__39777__auto__ = (function (){var statearr_41186 = f__39776__auto__.call(null);
(statearr_41186[(6)] = c__39775__auto___41188);

return statearr_41186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41188,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41202 = arguments.length;
switch (G__41202) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41247,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41247,out){
return (function (state_41226){
var state_val_41227 = (state_41226[(1)]);
if((state_val_41227 === (7))){
var inst_41208 = (state_41226[(7)]);
var inst_41208__$1 = (state_41226[(2)]);
var inst_41209 = (inst_41208__$1 == null);
var inst_41210 = cljs.core.not.call(null,inst_41209);
var state_41226__$1 = (function (){var statearr_41228 = state_41226;
(statearr_41228[(7)] = inst_41208__$1);

return statearr_41228;
})();
if(inst_41210){
var statearr_41229_41248 = state_41226__$1;
(statearr_41229_41248[(1)] = (8));

} else {
var statearr_41230_41249 = state_41226__$1;
(statearr_41230_41249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (1))){
var inst_41203 = (0);
var state_41226__$1 = (function (){var statearr_41231 = state_41226;
(statearr_41231[(8)] = inst_41203);

return statearr_41231;
})();
var statearr_41232_41250 = state_41226__$1;
(statearr_41232_41250[(2)] = null);

(statearr_41232_41250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (4))){
var state_41226__$1 = state_41226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41226__$1,(7),ch);
} else {
if((state_val_41227 === (6))){
var inst_41221 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41233_41251 = state_41226__$1;
(statearr_41233_41251[(2)] = inst_41221);

(statearr_41233_41251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (3))){
var inst_41223 = (state_41226[(2)]);
var inst_41224 = cljs.core.async.close_BANG_.call(null,out);
var state_41226__$1 = (function (){var statearr_41234 = state_41226;
(statearr_41234[(9)] = inst_41223);

return statearr_41234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41226__$1,inst_41224);
} else {
if((state_val_41227 === (2))){
var inst_41203 = (state_41226[(8)]);
var inst_41205 = (inst_41203 < n);
var state_41226__$1 = state_41226;
if(cljs.core.truth_(inst_41205)){
var statearr_41235_41252 = state_41226__$1;
(statearr_41235_41252[(1)] = (4));

} else {
var statearr_41236_41253 = state_41226__$1;
(statearr_41236_41253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (11))){
var inst_41203 = (state_41226[(8)]);
var inst_41213 = (state_41226[(2)]);
var inst_41214 = (inst_41203 + (1));
var inst_41203__$1 = inst_41214;
var state_41226__$1 = (function (){var statearr_41237 = state_41226;
(statearr_41237[(10)] = inst_41213);

(statearr_41237[(8)] = inst_41203__$1);

return statearr_41237;
})();
var statearr_41238_41254 = state_41226__$1;
(statearr_41238_41254[(2)] = null);

(statearr_41238_41254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (9))){
var state_41226__$1 = state_41226;
var statearr_41239_41255 = state_41226__$1;
(statearr_41239_41255[(2)] = null);

(statearr_41239_41255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (5))){
var state_41226__$1 = state_41226;
var statearr_41240_41256 = state_41226__$1;
(statearr_41240_41256[(2)] = null);

(statearr_41240_41256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (10))){
var inst_41218 = (state_41226[(2)]);
var state_41226__$1 = state_41226;
var statearr_41241_41257 = state_41226__$1;
(statearr_41241_41257[(2)] = inst_41218);

(statearr_41241_41257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41227 === (8))){
var inst_41208 = (state_41226[(7)]);
var state_41226__$1 = state_41226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41226__$1,(11),out,inst_41208);
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
});})(c__39775__auto___41247,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41247,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41242[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41242[(1)] = (1));

return statearr_41242;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41226){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41243){if((e41243 instanceof Object)){
var ex__39689__auto__ = e41243;
var statearr_41244_41258 = state_41226;
(statearr_41244_41258[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41259 = state_41226;
state_41226 = G__41259;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41226);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41247,out))
})();
var state__39777__auto__ = (function (){var statearr_41245 = f__39776__auto__.call(null);
(statearr_41245[(6)] = c__39775__auto___41247);

return statearr_41245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41247,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41261 = (function (f,ch,meta41262){
this.f = f;
this.ch = ch;
this.meta41262 = meta41262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41263,meta41262__$1){
var self__ = this;
var _41263__$1 = this;
return (new cljs.core.async.t_cljs$core$async41261(self__.f,self__.ch,meta41262__$1));
});

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41263){
var self__ = this;
var _41263__$1 = this;
return self__.meta41262;
});

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41264 = (function (f,ch,meta41262,_,fn1,meta41265){
this.f = f;
this.ch = ch;
this.meta41262 = meta41262;
this._ = _;
this.fn1 = fn1;
this.meta41265 = meta41265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41266,meta41265__$1){
var self__ = this;
var _41266__$1 = this;
return (new cljs.core.async.t_cljs$core$async41264(self__.f,self__.ch,self__.meta41262,self__._,self__.fn1,meta41265__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41266){
var self__ = this;
var _41266__$1 = this;
return self__.meta41265;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41260_SHARP_){
return f1.call(null,(((p1__41260_SHARP_ == null))?null:self__.f.call(null,p1__41260_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41262","meta41262",1734589814,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41261","cljs.core.async/t_cljs$core$async41261",986663880,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41265","meta41265",672858483,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41264";

cljs.core.async.t_cljs$core$async41264.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async41264");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41264 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41264(f__$1,ch__$1,meta41262__$1,___$2,fn1__$1,meta41265){
return (new cljs.core.async.t_cljs$core$async41264(f__$1,ch__$1,meta41262__$1,___$2,fn1__$1,meta41265));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41264(self__.f,self__.ch,self__.meta41262,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30182__auto__ = ret;
if(cljs.core.truth_(and__30182__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30182__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41262","meta41262",1734589814,null)], null);
});

cljs.core.async.t_cljs$core$async41261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41261";

cljs.core.async.t_cljs$core$async41261.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async41261");
});

cljs.core.async.__GT_t_cljs$core$async41261 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41261(f__$1,ch__$1,meta41262){
return (new cljs.core.async.t_cljs$core$async41261(f__$1,ch__$1,meta41262));
});

}

return (new cljs.core.async.t_cljs$core$async41261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41267 = (function (f,ch,meta41268){
this.f = f;
this.ch = ch;
this.meta41268 = meta41268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41269,meta41268__$1){
var self__ = this;
var _41269__$1 = this;
return (new cljs.core.async.t_cljs$core$async41267(self__.f,self__.ch,meta41268__$1));
});

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41269){
var self__ = this;
var _41269__$1 = this;
return self__.meta41268;
});

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41268","meta41268",1665828966,null)], null);
});

cljs.core.async.t_cljs$core$async41267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41267";

cljs.core.async.t_cljs$core$async41267.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async41267");
});

cljs.core.async.__GT_t_cljs$core$async41267 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41267(f__$1,ch__$1,meta41268){
return (new cljs.core.async.t_cljs$core$async41267(f__$1,ch__$1,meta41268));
});

}

return (new cljs.core.async.t_cljs$core$async41267(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41270 = (function (p,ch,meta41271){
this.p = p;
this.ch = ch;
this.meta41271 = meta41271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41272,meta41271__$1){
var self__ = this;
var _41272__$1 = this;
return (new cljs.core.async.t_cljs$core$async41270(self__.p,self__.ch,meta41271__$1));
});

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41272){
var self__ = this;
var _41272__$1 = this;
return self__.meta41271;
});

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41271","meta41271",-2045191063,null)], null);
});

cljs.core.async.t_cljs$core$async41270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41270";

cljs.core.async.t_cljs$core$async41270.cljs$lang$ctorPrWriter = (function (this__30866__auto__,writer__30867__auto__,opt__30868__auto__){
return cljs.core._write.call(null,writer__30867__auto__,"cljs.core.async/t_cljs$core$async41270");
});

cljs.core.async.__GT_t_cljs$core$async41270 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41270(p__$1,ch__$1,meta41271){
return (new cljs.core.async.t_cljs$core$async41270(p__$1,ch__$1,meta41271));
});

}

return (new cljs.core.async.t_cljs$core$async41270(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41274 = arguments.length;
switch (G__41274) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41314,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41314,out){
return (function (state_41295){
var state_val_41296 = (state_41295[(1)]);
if((state_val_41296 === (7))){
var inst_41291 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41297_41315 = state_41295__$1;
(statearr_41297_41315[(2)] = inst_41291);

(statearr_41297_41315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (1))){
var state_41295__$1 = state_41295;
var statearr_41298_41316 = state_41295__$1;
(statearr_41298_41316[(2)] = null);

(statearr_41298_41316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (4))){
var inst_41277 = (state_41295[(7)]);
var inst_41277__$1 = (state_41295[(2)]);
var inst_41278 = (inst_41277__$1 == null);
var state_41295__$1 = (function (){var statearr_41299 = state_41295;
(statearr_41299[(7)] = inst_41277__$1);

return statearr_41299;
})();
if(cljs.core.truth_(inst_41278)){
var statearr_41300_41317 = state_41295__$1;
(statearr_41300_41317[(1)] = (5));

} else {
var statearr_41301_41318 = state_41295__$1;
(statearr_41301_41318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (6))){
var inst_41277 = (state_41295[(7)]);
var inst_41282 = p.call(null,inst_41277);
var state_41295__$1 = state_41295;
if(cljs.core.truth_(inst_41282)){
var statearr_41302_41319 = state_41295__$1;
(statearr_41302_41319[(1)] = (8));

} else {
var statearr_41303_41320 = state_41295__$1;
(statearr_41303_41320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (3))){
var inst_41293 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41295__$1,inst_41293);
} else {
if((state_val_41296 === (2))){
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41295__$1,(4),ch);
} else {
if((state_val_41296 === (11))){
var inst_41285 = (state_41295[(2)]);
var state_41295__$1 = state_41295;
var statearr_41304_41321 = state_41295__$1;
(statearr_41304_41321[(2)] = inst_41285);

(statearr_41304_41321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (9))){
var state_41295__$1 = state_41295;
var statearr_41305_41322 = state_41295__$1;
(statearr_41305_41322[(2)] = null);

(statearr_41305_41322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (5))){
var inst_41280 = cljs.core.async.close_BANG_.call(null,out);
var state_41295__$1 = state_41295;
var statearr_41306_41323 = state_41295__$1;
(statearr_41306_41323[(2)] = inst_41280);

(statearr_41306_41323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (10))){
var inst_41288 = (state_41295[(2)]);
var state_41295__$1 = (function (){var statearr_41307 = state_41295;
(statearr_41307[(8)] = inst_41288);

return statearr_41307;
})();
var statearr_41308_41324 = state_41295__$1;
(statearr_41308_41324[(2)] = null);

(statearr_41308_41324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41296 === (8))){
var inst_41277 = (state_41295[(7)]);
var state_41295__$1 = state_41295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41295__$1,(11),out,inst_41277);
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
});})(c__39775__auto___41314,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41314,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41309 = [null,null,null,null,null,null,null,null,null];
(statearr_41309[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41309[(1)] = (1));

return statearr_41309;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41295){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41310){if((e41310 instanceof Object)){
var ex__39689__auto__ = e41310;
var statearr_41311_41325 = state_41295;
(statearr_41311_41325[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41326 = state_41295;
state_41295 = G__41326;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41314,out))
})();
var state__39777__auto__ = (function (){var statearr_41312 = f__39776__auto__.call(null);
(statearr_41312[(6)] = c__39775__auto___41314);

return statearr_41312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41314,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41328 = arguments.length;
switch (G__41328) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto__){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto__){
return (function (state_41391){
var state_val_41392 = (state_41391[(1)]);
if((state_val_41392 === (7))){
var inst_41387 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
var statearr_41393_41431 = state_41391__$1;
(statearr_41393_41431[(2)] = inst_41387);

(statearr_41393_41431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (20))){
var inst_41357 = (state_41391[(7)]);
var inst_41368 = (state_41391[(2)]);
var inst_41369 = cljs.core.next.call(null,inst_41357);
var inst_41343 = inst_41369;
var inst_41344 = null;
var inst_41345 = (0);
var inst_41346 = (0);
var state_41391__$1 = (function (){var statearr_41394 = state_41391;
(statearr_41394[(8)] = inst_41344);

(statearr_41394[(9)] = inst_41368);

(statearr_41394[(10)] = inst_41346);

(statearr_41394[(11)] = inst_41345);

(statearr_41394[(12)] = inst_41343);

return statearr_41394;
})();
var statearr_41395_41432 = state_41391__$1;
(statearr_41395_41432[(2)] = null);

(statearr_41395_41432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (1))){
var state_41391__$1 = state_41391;
var statearr_41396_41433 = state_41391__$1;
(statearr_41396_41433[(2)] = null);

(statearr_41396_41433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (4))){
var inst_41332 = (state_41391[(13)]);
var inst_41332__$1 = (state_41391[(2)]);
var inst_41333 = (inst_41332__$1 == null);
var state_41391__$1 = (function (){var statearr_41397 = state_41391;
(statearr_41397[(13)] = inst_41332__$1);

return statearr_41397;
})();
if(cljs.core.truth_(inst_41333)){
var statearr_41398_41434 = state_41391__$1;
(statearr_41398_41434[(1)] = (5));

} else {
var statearr_41399_41435 = state_41391__$1;
(statearr_41399_41435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (15))){
var state_41391__$1 = state_41391;
var statearr_41403_41436 = state_41391__$1;
(statearr_41403_41436[(2)] = null);

(statearr_41403_41436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (21))){
var state_41391__$1 = state_41391;
var statearr_41404_41437 = state_41391__$1;
(statearr_41404_41437[(2)] = null);

(statearr_41404_41437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (13))){
var inst_41344 = (state_41391[(8)]);
var inst_41346 = (state_41391[(10)]);
var inst_41345 = (state_41391[(11)]);
var inst_41343 = (state_41391[(12)]);
var inst_41353 = (state_41391[(2)]);
var inst_41354 = (inst_41346 + (1));
var tmp41400 = inst_41344;
var tmp41401 = inst_41345;
var tmp41402 = inst_41343;
var inst_41343__$1 = tmp41402;
var inst_41344__$1 = tmp41400;
var inst_41345__$1 = tmp41401;
var inst_41346__$1 = inst_41354;
var state_41391__$1 = (function (){var statearr_41405 = state_41391;
(statearr_41405[(8)] = inst_41344__$1);

(statearr_41405[(14)] = inst_41353);

(statearr_41405[(10)] = inst_41346__$1);

(statearr_41405[(11)] = inst_41345__$1);

(statearr_41405[(12)] = inst_41343__$1);

return statearr_41405;
})();
var statearr_41406_41438 = state_41391__$1;
(statearr_41406_41438[(2)] = null);

(statearr_41406_41438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (22))){
var state_41391__$1 = state_41391;
var statearr_41407_41439 = state_41391__$1;
(statearr_41407_41439[(2)] = null);

(statearr_41407_41439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (6))){
var inst_41332 = (state_41391[(13)]);
var inst_41341 = f.call(null,inst_41332);
var inst_41342 = cljs.core.seq.call(null,inst_41341);
var inst_41343 = inst_41342;
var inst_41344 = null;
var inst_41345 = (0);
var inst_41346 = (0);
var state_41391__$1 = (function (){var statearr_41408 = state_41391;
(statearr_41408[(8)] = inst_41344);

(statearr_41408[(10)] = inst_41346);

(statearr_41408[(11)] = inst_41345);

(statearr_41408[(12)] = inst_41343);

return statearr_41408;
})();
var statearr_41409_41440 = state_41391__$1;
(statearr_41409_41440[(2)] = null);

(statearr_41409_41440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (17))){
var inst_41357 = (state_41391[(7)]);
var inst_41361 = cljs.core.chunk_first.call(null,inst_41357);
var inst_41362 = cljs.core.chunk_rest.call(null,inst_41357);
var inst_41363 = cljs.core.count.call(null,inst_41361);
var inst_41343 = inst_41362;
var inst_41344 = inst_41361;
var inst_41345 = inst_41363;
var inst_41346 = (0);
var state_41391__$1 = (function (){var statearr_41410 = state_41391;
(statearr_41410[(8)] = inst_41344);

(statearr_41410[(10)] = inst_41346);

(statearr_41410[(11)] = inst_41345);

(statearr_41410[(12)] = inst_41343);

return statearr_41410;
})();
var statearr_41411_41441 = state_41391__$1;
(statearr_41411_41441[(2)] = null);

(statearr_41411_41441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (3))){
var inst_41389 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41391__$1,inst_41389);
} else {
if((state_val_41392 === (12))){
var inst_41377 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
var statearr_41412_41442 = state_41391__$1;
(statearr_41412_41442[(2)] = inst_41377);

(statearr_41412_41442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (2))){
var state_41391__$1 = state_41391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41391__$1,(4),in$);
} else {
if((state_val_41392 === (23))){
var inst_41385 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
var statearr_41413_41443 = state_41391__$1;
(statearr_41413_41443[(2)] = inst_41385);

(statearr_41413_41443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (19))){
var inst_41372 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
var statearr_41414_41444 = state_41391__$1;
(statearr_41414_41444[(2)] = inst_41372);

(statearr_41414_41444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (11))){
var inst_41357 = (state_41391[(7)]);
var inst_41343 = (state_41391[(12)]);
var inst_41357__$1 = cljs.core.seq.call(null,inst_41343);
var state_41391__$1 = (function (){var statearr_41415 = state_41391;
(statearr_41415[(7)] = inst_41357__$1);

return statearr_41415;
})();
if(inst_41357__$1){
var statearr_41416_41445 = state_41391__$1;
(statearr_41416_41445[(1)] = (14));

} else {
var statearr_41417_41446 = state_41391__$1;
(statearr_41417_41446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (9))){
var inst_41379 = (state_41391[(2)]);
var inst_41380 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41391__$1 = (function (){var statearr_41418 = state_41391;
(statearr_41418[(15)] = inst_41379);

return statearr_41418;
})();
if(cljs.core.truth_(inst_41380)){
var statearr_41419_41447 = state_41391__$1;
(statearr_41419_41447[(1)] = (21));

} else {
var statearr_41420_41448 = state_41391__$1;
(statearr_41420_41448[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (5))){
var inst_41335 = cljs.core.async.close_BANG_.call(null,out);
var state_41391__$1 = state_41391;
var statearr_41421_41449 = state_41391__$1;
(statearr_41421_41449[(2)] = inst_41335);

(statearr_41421_41449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (14))){
var inst_41357 = (state_41391[(7)]);
var inst_41359 = cljs.core.chunked_seq_QMARK_.call(null,inst_41357);
var state_41391__$1 = state_41391;
if(inst_41359){
var statearr_41422_41450 = state_41391__$1;
(statearr_41422_41450[(1)] = (17));

} else {
var statearr_41423_41451 = state_41391__$1;
(statearr_41423_41451[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (16))){
var inst_41375 = (state_41391[(2)]);
var state_41391__$1 = state_41391;
var statearr_41424_41452 = state_41391__$1;
(statearr_41424_41452[(2)] = inst_41375);

(statearr_41424_41452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41392 === (10))){
var inst_41344 = (state_41391[(8)]);
var inst_41346 = (state_41391[(10)]);
var inst_41351 = cljs.core._nth.call(null,inst_41344,inst_41346);
var state_41391__$1 = state_41391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41391__$1,(13),out,inst_41351);
} else {
if((state_val_41392 === (18))){
var inst_41357 = (state_41391[(7)]);
var inst_41366 = cljs.core.first.call(null,inst_41357);
var state_41391__$1 = state_41391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41391__$1,(20),out,inst_41366);
} else {
if((state_val_41392 === (8))){
var inst_41346 = (state_41391[(10)]);
var inst_41345 = (state_41391[(11)]);
var inst_41348 = (inst_41346 < inst_41345);
var inst_41349 = inst_41348;
var state_41391__$1 = state_41391;
if(cljs.core.truth_(inst_41349)){
var statearr_41425_41453 = state_41391__$1;
(statearr_41425_41453[(1)] = (10));

} else {
var statearr_41426_41454 = state_41391__$1;
(statearr_41426_41454[(1)] = (11));

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
});})(c__39775__auto__))
;
return ((function (switch__39685__auto__,c__39775__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____0 = (function (){
var statearr_41427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__);

(statearr_41427[(1)] = (1));

return statearr_41427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____1 = (function (state_41391){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41428){if((e41428 instanceof Object)){
var ex__39689__auto__ = e41428;
var statearr_41429_41455 = state_41391;
(statearr_41429_41455[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41456 = state_41391;
state_41391 = G__41456;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__ = function(state_41391){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____1.call(this,state_41391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39686__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto__))
})();
var state__39777__auto__ = (function (){var statearr_41430 = f__39776__auto__.call(null);
(statearr_41430[(6)] = c__39775__auto__);

return statearr_41430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto__))
);

return c__39775__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41458 = arguments.length;
switch (G__41458) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41461 = arguments.length;
switch (G__41461) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41464 = arguments.length;
switch (G__41464) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41511,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41511,out){
return (function (state_41488){
var state_val_41489 = (state_41488[(1)]);
if((state_val_41489 === (7))){
var inst_41483 = (state_41488[(2)]);
var state_41488__$1 = state_41488;
var statearr_41490_41512 = state_41488__$1;
(statearr_41490_41512[(2)] = inst_41483);

(statearr_41490_41512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (1))){
var inst_41465 = null;
var state_41488__$1 = (function (){var statearr_41491 = state_41488;
(statearr_41491[(7)] = inst_41465);

return statearr_41491;
})();
var statearr_41492_41513 = state_41488__$1;
(statearr_41492_41513[(2)] = null);

(statearr_41492_41513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (4))){
var inst_41468 = (state_41488[(8)]);
var inst_41468__$1 = (state_41488[(2)]);
var inst_41469 = (inst_41468__$1 == null);
var inst_41470 = cljs.core.not.call(null,inst_41469);
var state_41488__$1 = (function (){var statearr_41493 = state_41488;
(statearr_41493[(8)] = inst_41468__$1);

return statearr_41493;
})();
if(inst_41470){
var statearr_41494_41514 = state_41488__$1;
(statearr_41494_41514[(1)] = (5));

} else {
var statearr_41495_41515 = state_41488__$1;
(statearr_41495_41515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (6))){
var state_41488__$1 = state_41488;
var statearr_41496_41516 = state_41488__$1;
(statearr_41496_41516[(2)] = null);

(statearr_41496_41516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (3))){
var inst_41485 = (state_41488[(2)]);
var inst_41486 = cljs.core.async.close_BANG_.call(null,out);
var state_41488__$1 = (function (){var statearr_41497 = state_41488;
(statearr_41497[(9)] = inst_41485);

return statearr_41497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41488__$1,inst_41486);
} else {
if((state_val_41489 === (2))){
var state_41488__$1 = state_41488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41488__$1,(4),ch);
} else {
if((state_val_41489 === (11))){
var inst_41468 = (state_41488[(8)]);
var inst_41477 = (state_41488[(2)]);
var inst_41465 = inst_41468;
var state_41488__$1 = (function (){var statearr_41498 = state_41488;
(statearr_41498[(7)] = inst_41465);

(statearr_41498[(10)] = inst_41477);

return statearr_41498;
})();
var statearr_41499_41517 = state_41488__$1;
(statearr_41499_41517[(2)] = null);

(statearr_41499_41517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (9))){
var inst_41468 = (state_41488[(8)]);
var state_41488__$1 = state_41488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41488__$1,(11),out,inst_41468);
} else {
if((state_val_41489 === (5))){
var inst_41468 = (state_41488[(8)]);
var inst_41465 = (state_41488[(7)]);
var inst_41472 = cljs.core._EQ_.call(null,inst_41468,inst_41465);
var state_41488__$1 = state_41488;
if(inst_41472){
var statearr_41501_41518 = state_41488__$1;
(statearr_41501_41518[(1)] = (8));

} else {
var statearr_41502_41519 = state_41488__$1;
(statearr_41502_41519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (10))){
var inst_41480 = (state_41488[(2)]);
var state_41488__$1 = state_41488;
var statearr_41503_41520 = state_41488__$1;
(statearr_41503_41520[(2)] = inst_41480);

(statearr_41503_41520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41489 === (8))){
var inst_41465 = (state_41488[(7)]);
var tmp41500 = inst_41465;
var inst_41465__$1 = tmp41500;
var state_41488__$1 = (function (){var statearr_41504 = state_41488;
(statearr_41504[(7)] = inst_41465__$1);

return statearr_41504;
})();
var statearr_41505_41521 = state_41488__$1;
(statearr_41505_41521[(2)] = null);

(statearr_41505_41521[(1)] = (2));


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
});})(c__39775__auto___41511,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41511,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41506[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41506[(1)] = (1));

return statearr_41506;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41488){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41507){if((e41507 instanceof Object)){
var ex__39689__auto__ = e41507;
var statearr_41508_41522 = state_41488;
(statearr_41508_41522[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41523 = state_41488;
state_41488 = G__41523;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41511,out))
})();
var state__39777__auto__ = (function (){var statearr_41509 = f__39776__auto__.call(null);
(statearr_41509[(6)] = c__39775__auto___41511);

return statearr_41509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41511,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41525 = arguments.length;
switch (G__41525) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41591,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41591,out){
return (function (state_41563){
var state_val_41564 = (state_41563[(1)]);
if((state_val_41564 === (7))){
var inst_41559 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41565_41592 = state_41563__$1;
(statearr_41565_41592[(2)] = inst_41559);

(statearr_41565_41592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (1))){
var inst_41526 = (new Array(n));
var inst_41527 = inst_41526;
var inst_41528 = (0);
var state_41563__$1 = (function (){var statearr_41566 = state_41563;
(statearr_41566[(7)] = inst_41528);

(statearr_41566[(8)] = inst_41527);

return statearr_41566;
})();
var statearr_41567_41593 = state_41563__$1;
(statearr_41567_41593[(2)] = null);

(statearr_41567_41593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (4))){
var inst_41531 = (state_41563[(9)]);
var inst_41531__$1 = (state_41563[(2)]);
var inst_41532 = (inst_41531__$1 == null);
var inst_41533 = cljs.core.not.call(null,inst_41532);
var state_41563__$1 = (function (){var statearr_41568 = state_41563;
(statearr_41568[(9)] = inst_41531__$1);

return statearr_41568;
})();
if(inst_41533){
var statearr_41569_41594 = state_41563__$1;
(statearr_41569_41594[(1)] = (5));

} else {
var statearr_41570_41595 = state_41563__$1;
(statearr_41570_41595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (15))){
var inst_41553 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41571_41596 = state_41563__$1;
(statearr_41571_41596[(2)] = inst_41553);

(statearr_41571_41596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (13))){
var state_41563__$1 = state_41563;
var statearr_41572_41597 = state_41563__$1;
(statearr_41572_41597[(2)] = null);

(statearr_41572_41597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (6))){
var inst_41528 = (state_41563[(7)]);
var inst_41549 = (inst_41528 > (0));
var state_41563__$1 = state_41563;
if(cljs.core.truth_(inst_41549)){
var statearr_41573_41598 = state_41563__$1;
(statearr_41573_41598[(1)] = (12));

} else {
var statearr_41574_41599 = state_41563__$1;
(statearr_41574_41599[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (3))){
var inst_41561 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41563__$1,inst_41561);
} else {
if((state_val_41564 === (12))){
var inst_41527 = (state_41563[(8)]);
var inst_41551 = cljs.core.vec.call(null,inst_41527);
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41563__$1,(15),out,inst_41551);
} else {
if((state_val_41564 === (2))){
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41563__$1,(4),ch);
} else {
if((state_val_41564 === (11))){
var inst_41543 = (state_41563[(2)]);
var inst_41544 = (new Array(n));
var inst_41527 = inst_41544;
var inst_41528 = (0);
var state_41563__$1 = (function (){var statearr_41575 = state_41563;
(statearr_41575[(10)] = inst_41543);

(statearr_41575[(7)] = inst_41528);

(statearr_41575[(8)] = inst_41527);

return statearr_41575;
})();
var statearr_41576_41600 = state_41563__$1;
(statearr_41576_41600[(2)] = null);

(statearr_41576_41600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (9))){
var inst_41527 = (state_41563[(8)]);
var inst_41541 = cljs.core.vec.call(null,inst_41527);
var state_41563__$1 = state_41563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41563__$1,(11),out,inst_41541);
} else {
if((state_val_41564 === (5))){
var inst_41528 = (state_41563[(7)]);
var inst_41527 = (state_41563[(8)]);
var inst_41536 = (state_41563[(11)]);
var inst_41531 = (state_41563[(9)]);
var inst_41535 = (inst_41527[inst_41528] = inst_41531);
var inst_41536__$1 = (inst_41528 + (1));
var inst_41537 = (inst_41536__$1 < n);
var state_41563__$1 = (function (){var statearr_41577 = state_41563;
(statearr_41577[(12)] = inst_41535);

(statearr_41577[(11)] = inst_41536__$1);

return statearr_41577;
})();
if(cljs.core.truth_(inst_41537)){
var statearr_41578_41601 = state_41563__$1;
(statearr_41578_41601[(1)] = (8));

} else {
var statearr_41579_41602 = state_41563__$1;
(statearr_41579_41602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (14))){
var inst_41556 = (state_41563[(2)]);
var inst_41557 = cljs.core.async.close_BANG_.call(null,out);
var state_41563__$1 = (function (){var statearr_41581 = state_41563;
(statearr_41581[(13)] = inst_41556);

return statearr_41581;
})();
var statearr_41582_41603 = state_41563__$1;
(statearr_41582_41603[(2)] = inst_41557);

(statearr_41582_41603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (10))){
var inst_41547 = (state_41563[(2)]);
var state_41563__$1 = state_41563;
var statearr_41583_41604 = state_41563__$1;
(statearr_41583_41604[(2)] = inst_41547);

(statearr_41583_41604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41564 === (8))){
var inst_41527 = (state_41563[(8)]);
var inst_41536 = (state_41563[(11)]);
var tmp41580 = inst_41527;
var inst_41527__$1 = tmp41580;
var inst_41528 = inst_41536;
var state_41563__$1 = (function (){var statearr_41584 = state_41563;
(statearr_41584[(7)] = inst_41528);

(statearr_41584[(8)] = inst_41527__$1);

return statearr_41584;
})();
var statearr_41585_41605 = state_41563__$1;
(statearr_41585_41605[(2)] = null);

(statearr_41585_41605[(1)] = (2));


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
});})(c__39775__auto___41591,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41591,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41586[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41586[(1)] = (1));

return statearr_41586;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41563){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41587){if((e41587 instanceof Object)){
var ex__39689__auto__ = e41587;
var statearr_41588_41606 = state_41563;
(statearr_41588_41606[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41607 = state_41563;
state_41563 = G__41607;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41591,out))
})();
var state__39777__auto__ = (function (){var statearr_41589 = f__39776__auto__.call(null);
(statearr_41589[(6)] = c__39775__auto___41591);

return statearr_41589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41591,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41609 = arguments.length;
switch (G__41609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39775__auto___41679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39775__auto___41679,out){
return (function (){
var f__39776__auto__ = (function (){var switch__39685__auto__ = ((function (c__39775__auto___41679,out){
return (function (state_41651){
var state_val_41652 = (state_41651[(1)]);
if((state_val_41652 === (7))){
var inst_41647 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41653_41680 = state_41651__$1;
(statearr_41653_41680[(2)] = inst_41647);

(statearr_41653_41680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (1))){
var inst_41610 = [];
var inst_41611 = inst_41610;
var inst_41612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41651__$1 = (function (){var statearr_41654 = state_41651;
(statearr_41654[(7)] = inst_41612);

(statearr_41654[(8)] = inst_41611);

return statearr_41654;
})();
var statearr_41655_41681 = state_41651__$1;
(statearr_41655_41681[(2)] = null);

(statearr_41655_41681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (4))){
var inst_41615 = (state_41651[(9)]);
var inst_41615__$1 = (state_41651[(2)]);
var inst_41616 = (inst_41615__$1 == null);
var inst_41617 = cljs.core.not.call(null,inst_41616);
var state_41651__$1 = (function (){var statearr_41656 = state_41651;
(statearr_41656[(9)] = inst_41615__$1);

return statearr_41656;
})();
if(inst_41617){
var statearr_41657_41682 = state_41651__$1;
(statearr_41657_41682[(1)] = (5));

} else {
var statearr_41658_41683 = state_41651__$1;
(statearr_41658_41683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (15))){
var inst_41641 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41659_41684 = state_41651__$1;
(statearr_41659_41684[(2)] = inst_41641);

(statearr_41659_41684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (13))){
var state_41651__$1 = state_41651;
var statearr_41660_41685 = state_41651__$1;
(statearr_41660_41685[(2)] = null);

(statearr_41660_41685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (6))){
var inst_41611 = (state_41651[(8)]);
var inst_41636 = inst_41611.length;
var inst_41637 = (inst_41636 > (0));
var state_41651__$1 = state_41651;
if(cljs.core.truth_(inst_41637)){
var statearr_41661_41686 = state_41651__$1;
(statearr_41661_41686[(1)] = (12));

} else {
var statearr_41662_41687 = state_41651__$1;
(statearr_41662_41687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (3))){
var inst_41649 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41651__$1,inst_41649);
} else {
if((state_val_41652 === (12))){
var inst_41611 = (state_41651[(8)]);
var inst_41639 = cljs.core.vec.call(null,inst_41611);
var state_41651__$1 = state_41651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41651__$1,(15),out,inst_41639);
} else {
if((state_val_41652 === (2))){
var state_41651__$1 = state_41651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41651__$1,(4),ch);
} else {
if((state_val_41652 === (11))){
var inst_41615 = (state_41651[(9)]);
var inst_41619 = (state_41651[(10)]);
var inst_41629 = (state_41651[(2)]);
var inst_41630 = [];
var inst_41631 = inst_41630.push(inst_41615);
var inst_41611 = inst_41630;
var inst_41612 = inst_41619;
var state_41651__$1 = (function (){var statearr_41663 = state_41651;
(statearr_41663[(7)] = inst_41612);

(statearr_41663[(11)] = inst_41629);

(statearr_41663[(12)] = inst_41631);

(statearr_41663[(8)] = inst_41611);

return statearr_41663;
})();
var statearr_41664_41688 = state_41651__$1;
(statearr_41664_41688[(2)] = null);

(statearr_41664_41688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (9))){
var inst_41611 = (state_41651[(8)]);
var inst_41627 = cljs.core.vec.call(null,inst_41611);
var state_41651__$1 = state_41651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41651__$1,(11),out,inst_41627);
} else {
if((state_val_41652 === (5))){
var inst_41615 = (state_41651[(9)]);
var inst_41612 = (state_41651[(7)]);
var inst_41619 = (state_41651[(10)]);
var inst_41619__$1 = f.call(null,inst_41615);
var inst_41620 = cljs.core._EQ_.call(null,inst_41619__$1,inst_41612);
var inst_41621 = cljs.core.keyword_identical_QMARK_.call(null,inst_41612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41622 = (inst_41620) || (inst_41621);
var state_41651__$1 = (function (){var statearr_41665 = state_41651;
(statearr_41665[(10)] = inst_41619__$1);

return statearr_41665;
})();
if(cljs.core.truth_(inst_41622)){
var statearr_41666_41689 = state_41651__$1;
(statearr_41666_41689[(1)] = (8));

} else {
var statearr_41667_41690 = state_41651__$1;
(statearr_41667_41690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (14))){
var inst_41644 = (state_41651[(2)]);
var inst_41645 = cljs.core.async.close_BANG_.call(null,out);
var state_41651__$1 = (function (){var statearr_41669 = state_41651;
(statearr_41669[(13)] = inst_41644);

return statearr_41669;
})();
var statearr_41670_41691 = state_41651__$1;
(statearr_41670_41691[(2)] = inst_41645);

(statearr_41670_41691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (10))){
var inst_41634 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41671_41692 = state_41651__$1;
(statearr_41671_41692[(2)] = inst_41634);

(statearr_41671_41692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (8))){
var inst_41615 = (state_41651[(9)]);
var inst_41619 = (state_41651[(10)]);
var inst_41611 = (state_41651[(8)]);
var inst_41624 = inst_41611.push(inst_41615);
var tmp41668 = inst_41611;
var inst_41611__$1 = tmp41668;
var inst_41612 = inst_41619;
var state_41651__$1 = (function (){var statearr_41672 = state_41651;
(statearr_41672[(7)] = inst_41612);

(statearr_41672[(8)] = inst_41611__$1);

(statearr_41672[(14)] = inst_41624);

return statearr_41672;
})();
var statearr_41673_41693 = state_41651__$1;
(statearr_41673_41693[(2)] = null);

(statearr_41673_41693[(1)] = (2));


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
});})(c__39775__auto___41679,out))
;
return ((function (switch__39685__auto__,c__39775__auto___41679,out){
return (function() {
var cljs$core$async$state_machine__39686__auto__ = null;
var cljs$core$async$state_machine__39686__auto____0 = (function (){
var statearr_41674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41674[(0)] = cljs$core$async$state_machine__39686__auto__);

(statearr_41674[(1)] = (1));

return statearr_41674;
});
var cljs$core$async$state_machine__39686__auto____1 = (function (state_41651){
while(true){
var ret_value__39687__auto__ = (function (){try{while(true){
var result__39688__auto__ = switch__39685__auto__.call(null,state_41651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39688__auto__;
}
break;
}
}catch (e41675){if((e41675 instanceof Object)){
var ex__39689__auto__ = e41675;
var statearr_41676_41694 = state_41651;
(statearr_41676_41694[(5)] = ex__39689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41695 = state_41651;
state_41651 = G__41695;
continue;
} else {
return ret_value__39687__auto__;
}
break;
}
});
cljs$core$async$state_machine__39686__auto__ = function(state_41651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39686__auto____1.call(this,state_41651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39686__auto____0;
cljs$core$async$state_machine__39686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39686__auto____1;
return cljs$core$async$state_machine__39686__auto__;
})()
;})(switch__39685__auto__,c__39775__auto___41679,out))
})();
var state__39777__auto__ = (function (){var statearr_41677 = f__39776__auto__.call(null);
(statearr_41677[(6)] = c__39775__auto___41679);

return statearr_41677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39777__auto__);
});})(c__39775__auto___41679,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521387315382
