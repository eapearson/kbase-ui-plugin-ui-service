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
var G__39834 = arguments.length;
switch (G__39834) {
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
if(typeof cljs.core.async.t_cljs$core$async39835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39835 = (function (f,blockable,meta39836){
this.f = f;
this.blockable = blockable;
this.meta39836 = meta39836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39837,meta39836__$1){
var self__ = this;
var _39837__$1 = this;
return (new cljs.core.async.t_cljs$core$async39835(self__.f,self__.blockable,meta39836__$1));
});

cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39837){
var self__ = this;
var _39837__$1 = this;
return self__.meta39836;
});

cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39836","meta39836",-1663945727,null)], null);
});

cljs.core.async.t_cljs$core$async39835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39835";

cljs.core.async.t_cljs$core$async39835.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async39835");
});

cljs.core.async.__GT_t_cljs$core$async39835 = (function cljs$core$async$__GT_t_cljs$core$async39835(f__$1,blockable__$1,meta39836){
return (new cljs.core.async.t_cljs$core$async39835(f__$1,blockable__$1,meta39836));
});

}

return (new cljs.core.async.t_cljs$core$async39835(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39841 = arguments.length;
switch (G__39841) {
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
var G__39844 = arguments.length;
switch (G__39844) {
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
var G__39847 = arguments.length;
switch (G__39847) {
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
var val_39849 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39849);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39849,ret){
return (function (){
return fn1.call(null,val_39849);
});})(val_39849,ret))
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
var G__39851 = arguments.length;
switch (G__39851) {
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
var n__31239__auto___39853 = n;
var x_39854 = (0);
while(true){
if((x_39854 < n__31239__auto___39853)){
(a[x_39854] = (0));

var G__39855 = (x_39854 + (1));
x_39854 = G__39855;
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

var G__39856 = (i + (1));
i = G__39856;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39857 = (function (flag,meta39858){
this.flag = flag;
this.meta39858 = meta39858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39859,meta39858__$1){
var self__ = this;
var _39859__$1 = this;
return (new cljs.core.async.t_cljs$core$async39857(self__.flag,meta39858__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39859){
var self__ = this;
var _39859__$1 = this;
return self__.meta39858;
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39858","meta39858",1932210946,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39857";

cljs.core.async.t_cljs$core$async39857.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async39857");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39857 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39857(flag__$1,meta39858){
return (new cljs.core.async.t_cljs$core$async39857(flag__$1,meta39858));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39857(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39860 = (function (flag,cb,meta39861){
this.flag = flag;
this.cb = cb;
this.meta39861 = meta39861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39862,meta39861__$1){
var self__ = this;
var _39862__$1 = this;
return (new cljs.core.async.t_cljs$core$async39860(self__.flag,self__.cb,meta39861__$1));
});

cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39862){
var self__ = this;
var _39862__$1 = this;
return self__.meta39861;
});

cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39860.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39861","meta39861",-360393540,null)], null);
});

cljs.core.async.t_cljs$core$async39860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39860";

cljs.core.async.t_cljs$core$async39860.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async39860");
});

cljs.core.async.__GT_t_cljs$core$async39860 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39860(flag__$1,cb__$1,meta39861){
return (new cljs.core.async.t_cljs$core$async39860(flag__$1,cb__$1,meta39861));
});

}

return (new cljs.core.async.t_cljs$core$async39860(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39863_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39863_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39864_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39864_SHARP_,port], null));
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
var G__39865 = (i + (1));
i = G__39865;
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
var args__31480__auto__ = [];
var len__31473__auto___39871 = arguments.length;
var i__31474__auto___39872 = (0);
while(true){
if((i__31474__auto___39872 < len__31473__auto___39871)){
args__31480__auto__.push((arguments[i__31474__auto___39872]));

var G__39873 = (i__31474__auto___39872 + (1));
i__31474__auto___39872 = G__39873;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((1) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31481__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39868){
var map__39869 = p__39868;
var map__39869__$1 = ((((!((map__39869 == null)))?((((map__39869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39869):map__39869);
var opts = map__39869__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39866){
var G__39867 = cljs.core.first.call(null,seq39866);
var seq39866__$1 = cljs.core.next.call(null,seq39866);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39867,seq39866__$1);
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
var G__39875 = arguments.length;
switch (G__39875) {
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
var c__39774__auto___39921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___39921){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___39921){
return (function (state_39899){
var state_val_39900 = (state_39899[(1)]);
if((state_val_39900 === (7))){
var inst_39895 = (state_39899[(2)]);
var state_39899__$1 = state_39899;
var statearr_39901_39922 = state_39899__$1;
(statearr_39901_39922[(2)] = inst_39895);

(statearr_39901_39922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (1))){
var state_39899__$1 = state_39899;
var statearr_39902_39923 = state_39899__$1;
(statearr_39902_39923[(2)] = null);

(statearr_39902_39923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (4))){
var inst_39878 = (state_39899[(7)]);
var inst_39878__$1 = (state_39899[(2)]);
var inst_39879 = (inst_39878__$1 == null);
var state_39899__$1 = (function (){var statearr_39903 = state_39899;
(statearr_39903[(7)] = inst_39878__$1);

return statearr_39903;
})();
if(cljs.core.truth_(inst_39879)){
var statearr_39904_39924 = state_39899__$1;
(statearr_39904_39924[(1)] = (5));

} else {
var statearr_39905_39925 = state_39899__$1;
(statearr_39905_39925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (13))){
var state_39899__$1 = state_39899;
var statearr_39906_39926 = state_39899__$1;
(statearr_39906_39926[(2)] = null);

(statearr_39906_39926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (6))){
var inst_39878 = (state_39899[(7)]);
var state_39899__$1 = state_39899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39899__$1,(11),to,inst_39878);
} else {
if((state_val_39900 === (3))){
var inst_39897 = (state_39899[(2)]);
var state_39899__$1 = state_39899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39899__$1,inst_39897);
} else {
if((state_val_39900 === (12))){
var state_39899__$1 = state_39899;
var statearr_39907_39927 = state_39899__$1;
(statearr_39907_39927[(2)] = null);

(statearr_39907_39927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (2))){
var state_39899__$1 = state_39899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39899__$1,(4),from);
} else {
if((state_val_39900 === (11))){
var inst_39888 = (state_39899[(2)]);
var state_39899__$1 = state_39899;
if(cljs.core.truth_(inst_39888)){
var statearr_39908_39928 = state_39899__$1;
(statearr_39908_39928[(1)] = (12));

} else {
var statearr_39909_39929 = state_39899__$1;
(statearr_39909_39929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (9))){
var state_39899__$1 = state_39899;
var statearr_39910_39930 = state_39899__$1;
(statearr_39910_39930[(2)] = null);

(statearr_39910_39930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (5))){
var state_39899__$1 = state_39899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39911_39931 = state_39899__$1;
(statearr_39911_39931[(1)] = (8));

} else {
var statearr_39912_39932 = state_39899__$1;
(statearr_39912_39932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (14))){
var inst_39893 = (state_39899[(2)]);
var state_39899__$1 = state_39899;
var statearr_39913_39933 = state_39899__$1;
(statearr_39913_39933[(2)] = inst_39893);

(statearr_39913_39933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (10))){
var inst_39885 = (state_39899[(2)]);
var state_39899__$1 = state_39899;
var statearr_39914_39934 = state_39899__$1;
(statearr_39914_39934[(2)] = inst_39885);

(statearr_39914_39934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39900 === (8))){
var inst_39882 = cljs.core.async.close_BANG_.call(null,to);
var state_39899__$1 = state_39899;
var statearr_39915_39935 = state_39899__$1;
(statearr_39915_39935[(2)] = inst_39882);

(statearr_39915_39935[(1)] = (10));


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
});})(c__39774__auto___39921))
;
return ((function (switch__39684__auto__,c__39774__auto___39921){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_39916 = [null,null,null,null,null,null,null,null];
(statearr_39916[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_39916[(1)] = (1));

return statearr_39916;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_39899){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_39899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e39917){if((e39917 instanceof Object)){
var ex__39688__auto__ = e39917;
var statearr_39918_39936 = state_39899;
(statearr_39918_39936[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39937 = state_39899;
state_39899 = G__39937;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_39899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_39899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___39921))
})();
var state__39776__auto__ = (function (){var statearr_39919 = f__39775__auto__.call(null);
(statearr_39919[(6)] = c__39774__auto___39921);

return statearr_39919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___39921))
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
return (function (p__39938){
var vec__39939 = p__39938;
var v = cljs.core.nth.call(null,vec__39939,(0),null);
var p = cljs.core.nth.call(null,vec__39939,(1),null);
var job = vec__39939;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39774__auto___40110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results){
return (function (state_39946){
var state_val_39947 = (state_39946[(1)]);
if((state_val_39947 === (1))){
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(2),res,v);
} else {
if((state_val_39947 === (2))){
var inst_39943 = (state_39946[(2)]);
var inst_39944 = cljs.core.async.close_BANG_.call(null,res);
var state_39946__$1 = (function (){var statearr_39948 = state_39946;
(statearr_39948[(7)] = inst_39943);

return statearr_39948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39946__$1,inst_39944);
} else {
return null;
}
}
});})(c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results))
;
return ((function (switch__39684__auto__,c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_39949 = [null,null,null,null,null,null,null,null];
(statearr_39949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__);

(statearr_39949[(1)] = (1));

return statearr_39949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1 = (function (state_39946){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_39946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e39950){if((e39950 instanceof Object)){
var ex__39688__auto__ = e39950;
var statearr_39951_40111 = state_39946;
(statearr_39951_40111[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40112 = state_39946;
state_39946 = G__40112;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = function(state_39946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1.call(this,state_39946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results))
})();
var state__39776__auto__ = (function (){var statearr_39952 = f__39775__auto__.call(null);
(statearr_39952[(6)] = c__39774__auto___40110);

return statearr_39952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___40110,res,vec__39939,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39953){
var vec__39954 = p__39953;
var v = cljs.core.nth.call(null,vec__39954,(0),null);
var p = cljs.core.nth.call(null,vec__39954,(1),null);
var job = vec__39954;
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
var n__31239__auto___40113 = n;
var __40114 = (0);
while(true){
if((__40114 < n__31239__auto___40113)){
var G__39957_40115 = type;
var G__39957_40116__$1 = (((G__39957_40115 instanceof cljs.core.Keyword))?G__39957_40115.fqn:null);
switch (G__39957_40116__$1) {
case "compute":
var c__39774__auto___40118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40114,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (__40114,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function (state_39970){
var state_val_39971 = (state_39970[(1)]);
if((state_val_39971 === (1))){
var state_39970__$1 = state_39970;
var statearr_39972_40119 = state_39970__$1;
(statearr_39972_40119[(2)] = null);

(statearr_39972_40119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39971 === (2))){
var state_39970__$1 = state_39970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39970__$1,(4),jobs);
} else {
if((state_val_39971 === (3))){
var inst_39968 = (state_39970[(2)]);
var state_39970__$1 = state_39970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39970__$1,inst_39968);
} else {
if((state_val_39971 === (4))){
var inst_39960 = (state_39970[(2)]);
var inst_39961 = process.call(null,inst_39960);
var state_39970__$1 = state_39970;
if(cljs.core.truth_(inst_39961)){
var statearr_39973_40120 = state_39970__$1;
(statearr_39973_40120[(1)] = (5));

} else {
var statearr_39974_40121 = state_39970__$1;
(statearr_39974_40121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39971 === (5))){
var state_39970__$1 = state_39970;
var statearr_39975_40122 = state_39970__$1;
(statearr_39975_40122[(2)] = null);

(statearr_39975_40122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39971 === (6))){
var state_39970__$1 = state_39970;
var statearr_39976_40123 = state_39970__$1;
(statearr_39976_40123[(2)] = null);

(statearr_39976_40123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39971 === (7))){
var inst_39966 = (state_39970[(2)]);
var state_39970__$1 = state_39970;
var statearr_39977_40124 = state_39970__$1;
(statearr_39977_40124[(2)] = inst_39966);

(statearr_39977_40124[(1)] = (3));


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
});})(__40114,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
;
return ((function (__40114,switch__39684__auto__,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_39978 = [null,null,null,null,null,null,null];
(statearr_39978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__);

(statearr_39978[(1)] = (1));

return statearr_39978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1 = (function (state_39970){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_39970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e39979){if((e39979 instanceof Object)){
var ex__39688__auto__ = e39979;
var statearr_39980_40125 = state_39970;
(statearr_39980_40125[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40126 = state_39970;
state_39970 = G__40126;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = function(state_39970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1.call(this,state_39970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__;
})()
;})(__40114,switch__39684__auto__,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
})();
var state__39776__auto__ = (function (){var statearr_39981 = f__39775__auto__.call(null);
(statearr_39981[(6)] = c__39774__auto___40118);

return statearr_39981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(__40114,c__39774__auto___40118,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
);


break;
case "async":
var c__39774__auto___40127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40114,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (__40114,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function (state_39994){
var state_val_39995 = (state_39994[(1)]);
if((state_val_39995 === (1))){
var state_39994__$1 = state_39994;
var statearr_39996_40128 = state_39994__$1;
(statearr_39996_40128[(2)] = null);

(statearr_39996_40128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39995 === (2))){
var state_39994__$1 = state_39994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39994__$1,(4),jobs);
} else {
if((state_val_39995 === (3))){
var inst_39992 = (state_39994[(2)]);
var state_39994__$1 = state_39994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39994__$1,inst_39992);
} else {
if((state_val_39995 === (4))){
var inst_39984 = (state_39994[(2)]);
var inst_39985 = async.call(null,inst_39984);
var state_39994__$1 = state_39994;
if(cljs.core.truth_(inst_39985)){
var statearr_39997_40129 = state_39994__$1;
(statearr_39997_40129[(1)] = (5));

} else {
var statearr_39998_40130 = state_39994__$1;
(statearr_39998_40130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39995 === (5))){
var state_39994__$1 = state_39994;
var statearr_39999_40131 = state_39994__$1;
(statearr_39999_40131[(2)] = null);

(statearr_39999_40131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39995 === (6))){
var state_39994__$1 = state_39994;
var statearr_40000_40132 = state_39994__$1;
(statearr_40000_40132[(2)] = null);

(statearr_40000_40132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39995 === (7))){
var inst_39990 = (state_39994[(2)]);
var state_39994__$1 = state_39994;
var statearr_40001_40133 = state_39994__$1;
(statearr_40001_40133[(2)] = inst_39990);

(statearr_40001_40133[(1)] = (3));


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
});})(__40114,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
;
return ((function (__40114,switch__39684__auto__,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_40002 = [null,null,null,null,null,null,null];
(statearr_40002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__);

(statearr_40002[(1)] = (1));

return statearr_40002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1 = (function (state_39994){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_39994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40003){if((e40003 instanceof Object)){
var ex__39688__auto__ = e40003;
var statearr_40004_40134 = state_39994;
(statearr_40004_40134[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40135 = state_39994;
state_39994 = G__40135;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = function(state_39994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1.call(this,state_39994);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__;
})()
;})(__40114,switch__39684__auto__,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
})();
var state__39776__auto__ = (function (){var statearr_40005 = f__39775__auto__.call(null);
(statearr_40005[(6)] = c__39774__auto___40127);

return statearr_40005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(__40114,c__39774__auto___40127,G__39957_40115,G__39957_40116__$1,n__31239__auto___40113,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39957_40116__$1)].join('')));

}

var G__40136 = (__40114 + (1));
__40114 = G__40136;
continue;
} else {
}
break;
}

var c__39774__auto___40137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___40137,jobs,results,process,async){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___40137,jobs,results,process,async){
return (function (state_40027){
var state_val_40028 = (state_40027[(1)]);
if((state_val_40028 === (1))){
var state_40027__$1 = state_40027;
var statearr_40029_40138 = state_40027__$1;
(statearr_40029_40138[(2)] = null);

(statearr_40029_40138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40028 === (2))){
var state_40027__$1 = state_40027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40027__$1,(4),from);
} else {
if((state_val_40028 === (3))){
var inst_40025 = (state_40027[(2)]);
var state_40027__$1 = state_40027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40027__$1,inst_40025);
} else {
if((state_val_40028 === (4))){
var inst_40008 = (state_40027[(7)]);
var inst_40008__$1 = (state_40027[(2)]);
var inst_40009 = (inst_40008__$1 == null);
var state_40027__$1 = (function (){var statearr_40030 = state_40027;
(statearr_40030[(7)] = inst_40008__$1);

return statearr_40030;
})();
if(cljs.core.truth_(inst_40009)){
var statearr_40031_40139 = state_40027__$1;
(statearr_40031_40139[(1)] = (5));

} else {
var statearr_40032_40140 = state_40027__$1;
(statearr_40032_40140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40028 === (5))){
var inst_40011 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40027__$1 = state_40027;
var statearr_40033_40141 = state_40027__$1;
(statearr_40033_40141[(2)] = inst_40011);

(statearr_40033_40141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40028 === (6))){
var inst_40013 = (state_40027[(8)]);
var inst_40008 = (state_40027[(7)]);
var inst_40013__$1 = cljs.core.async.chan.call(null,(1));
var inst_40014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40015 = [inst_40008,inst_40013__$1];
var inst_40016 = (new cljs.core.PersistentVector(null,2,(5),inst_40014,inst_40015,null));
var state_40027__$1 = (function (){var statearr_40034 = state_40027;
(statearr_40034[(8)] = inst_40013__$1);

return statearr_40034;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40027__$1,(8),jobs,inst_40016);
} else {
if((state_val_40028 === (7))){
var inst_40023 = (state_40027[(2)]);
var state_40027__$1 = state_40027;
var statearr_40035_40142 = state_40027__$1;
(statearr_40035_40142[(2)] = inst_40023);

(statearr_40035_40142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40028 === (8))){
var inst_40013 = (state_40027[(8)]);
var inst_40018 = (state_40027[(2)]);
var state_40027__$1 = (function (){var statearr_40036 = state_40027;
(statearr_40036[(9)] = inst_40018);

return statearr_40036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40027__$1,(9),results,inst_40013);
} else {
if((state_val_40028 === (9))){
var inst_40020 = (state_40027[(2)]);
var state_40027__$1 = (function (){var statearr_40037 = state_40027;
(statearr_40037[(10)] = inst_40020);

return statearr_40037;
})();
var statearr_40038_40143 = state_40027__$1;
(statearr_40038_40143[(2)] = null);

(statearr_40038_40143[(1)] = (2));


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
});})(c__39774__auto___40137,jobs,results,process,async))
;
return ((function (switch__39684__auto__,c__39774__auto___40137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_40039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__);

(statearr_40039[(1)] = (1));

return statearr_40039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1 = (function (state_40027){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40040){if((e40040 instanceof Object)){
var ex__39688__auto__ = e40040;
var statearr_40041_40144 = state_40027;
(statearr_40041_40144[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40145 = state_40027;
state_40027 = G__40145;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = function(state_40027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1.call(this,state_40027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___40137,jobs,results,process,async))
})();
var state__39776__auto__ = (function (){var statearr_40042 = f__39775__auto__.call(null);
(statearr_40042[(6)] = c__39774__auto___40137);

return statearr_40042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___40137,jobs,results,process,async))
);


var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__,jobs,results,process,async){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__,jobs,results,process,async){
return (function (state_40080){
var state_val_40081 = (state_40080[(1)]);
if((state_val_40081 === (7))){
var inst_40076 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
var statearr_40082_40146 = state_40080__$1;
(statearr_40082_40146[(2)] = inst_40076);

(statearr_40082_40146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (20))){
var state_40080__$1 = state_40080;
var statearr_40083_40147 = state_40080__$1;
(statearr_40083_40147[(2)] = null);

(statearr_40083_40147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (1))){
var state_40080__$1 = state_40080;
var statearr_40084_40148 = state_40080__$1;
(statearr_40084_40148[(2)] = null);

(statearr_40084_40148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (4))){
var inst_40045 = (state_40080[(7)]);
var inst_40045__$1 = (state_40080[(2)]);
var inst_40046 = (inst_40045__$1 == null);
var state_40080__$1 = (function (){var statearr_40085 = state_40080;
(statearr_40085[(7)] = inst_40045__$1);

return statearr_40085;
})();
if(cljs.core.truth_(inst_40046)){
var statearr_40086_40149 = state_40080__$1;
(statearr_40086_40149[(1)] = (5));

} else {
var statearr_40087_40150 = state_40080__$1;
(statearr_40087_40150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (15))){
var inst_40058 = (state_40080[(8)]);
var state_40080__$1 = state_40080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40080__$1,(18),to,inst_40058);
} else {
if((state_val_40081 === (21))){
var inst_40071 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
var statearr_40088_40151 = state_40080__$1;
(statearr_40088_40151[(2)] = inst_40071);

(statearr_40088_40151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (13))){
var inst_40073 = (state_40080[(2)]);
var state_40080__$1 = (function (){var statearr_40089 = state_40080;
(statearr_40089[(9)] = inst_40073);

return statearr_40089;
})();
var statearr_40090_40152 = state_40080__$1;
(statearr_40090_40152[(2)] = null);

(statearr_40090_40152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (6))){
var inst_40045 = (state_40080[(7)]);
var state_40080__$1 = state_40080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40080__$1,(11),inst_40045);
} else {
if((state_val_40081 === (17))){
var inst_40066 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
if(cljs.core.truth_(inst_40066)){
var statearr_40091_40153 = state_40080__$1;
(statearr_40091_40153[(1)] = (19));

} else {
var statearr_40092_40154 = state_40080__$1;
(statearr_40092_40154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (3))){
var inst_40078 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40080__$1,inst_40078);
} else {
if((state_val_40081 === (12))){
var inst_40055 = (state_40080[(10)]);
var state_40080__$1 = state_40080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40080__$1,(14),inst_40055);
} else {
if((state_val_40081 === (2))){
var state_40080__$1 = state_40080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40080__$1,(4),results);
} else {
if((state_val_40081 === (19))){
var state_40080__$1 = state_40080;
var statearr_40093_40155 = state_40080__$1;
(statearr_40093_40155[(2)] = null);

(statearr_40093_40155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (11))){
var inst_40055 = (state_40080[(2)]);
var state_40080__$1 = (function (){var statearr_40094 = state_40080;
(statearr_40094[(10)] = inst_40055);

return statearr_40094;
})();
var statearr_40095_40156 = state_40080__$1;
(statearr_40095_40156[(2)] = null);

(statearr_40095_40156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (9))){
var state_40080__$1 = state_40080;
var statearr_40096_40157 = state_40080__$1;
(statearr_40096_40157[(2)] = null);

(statearr_40096_40157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (5))){
var state_40080__$1 = state_40080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40097_40158 = state_40080__$1;
(statearr_40097_40158[(1)] = (8));

} else {
var statearr_40098_40159 = state_40080__$1;
(statearr_40098_40159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (14))){
var inst_40060 = (state_40080[(11)]);
var inst_40058 = (state_40080[(8)]);
var inst_40058__$1 = (state_40080[(2)]);
var inst_40059 = (inst_40058__$1 == null);
var inst_40060__$1 = cljs.core.not.call(null,inst_40059);
var state_40080__$1 = (function (){var statearr_40099 = state_40080;
(statearr_40099[(11)] = inst_40060__$1);

(statearr_40099[(8)] = inst_40058__$1);

return statearr_40099;
})();
if(inst_40060__$1){
var statearr_40100_40160 = state_40080__$1;
(statearr_40100_40160[(1)] = (15));

} else {
var statearr_40101_40161 = state_40080__$1;
(statearr_40101_40161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (16))){
var inst_40060 = (state_40080[(11)]);
var state_40080__$1 = state_40080;
var statearr_40102_40162 = state_40080__$1;
(statearr_40102_40162[(2)] = inst_40060);

(statearr_40102_40162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (10))){
var inst_40052 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
var statearr_40103_40163 = state_40080__$1;
(statearr_40103_40163[(2)] = inst_40052);

(statearr_40103_40163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (18))){
var inst_40063 = (state_40080[(2)]);
var state_40080__$1 = state_40080;
var statearr_40104_40164 = state_40080__$1;
(statearr_40104_40164[(2)] = inst_40063);

(statearr_40104_40164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40081 === (8))){
var inst_40049 = cljs.core.async.close_BANG_.call(null,to);
var state_40080__$1 = state_40080;
var statearr_40105_40165 = state_40080__$1;
(statearr_40105_40165[(2)] = inst_40049);

(statearr_40105_40165[(1)] = (10));


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
});})(c__39774__auto__,jobs,results,process,async))
;
return ((function (switch__39684__auto__,c__39774__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_40106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__);

(statearr_40106[(1)] = (1));

return statearr_40106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1 = (function (state_40080){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40107){if((e40107 instanceof Object)){
var ex__39688__auto__ = e40107;
var statearr_40108_40166 = state_40080;
(statearr_40108_40166[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40167 = state_40080;
state_40080 = G__40167;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__ = function(state_40080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1.call(this,state_40080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__,jobs,results,process,async))
})();
var state__39776__auto__ = (function (){var statearr_40109 = f__39775__auto__.call(null);
(statearr_40109[(6)] = c__39774__auto__);

return statearr_40109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__,jobs,results,process,async))
);

return c__39774__auto__;
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
var G__40169 = arguments.length;
switch (G__40169) {
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
var G__40172 = arguments.length;
switch (G__40172) {
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
var G__40175 = arguments.length;
switch (G__40175) {
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
var c__39774__auto___40224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___40224,tc,fc){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___40224,tc,fc){
return (function (state_40201){
var state_val_40202 = (state_40201[(1)]);
if((state_val_40202 === (7))){
var inst_40197 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40203_40225 = state_40201__$1;
(statearr_40203_40225[(2)] = inst_40197);

(statearr_40203_40225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (1))){
var state_40201__$1 = state_40201;
var statearr_40204_40226 = state_40201__$1;
(statearr_40204_40226[(2)] = null);

(statearr_40204_40226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (4))){
var inst_40178 = (state_40201[(7)]);
var inst_40178__$1 = (state_40201[(2)]);
var inst_40179 = (inst_40178__$1 == null);
var state_40201__$1 = (function (){var statearr_40205 = state_40201;
(statearr_40205[(7)] = inst_40178__$1);

return statearr_40205;
})();
if(cljs.core.truth_(inst_40179)){
var statearr_40206_40227 = state_40201__$1;
(statearr_40206_40227[(1)] = (5));

} else {
var statearr_40207_40228 = state_40201__$1;
(statearr_40207_40228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (13))){
var state_40201__$1 = state_40201;
var statearr_40208_40229 = state_40201__$1;
(statearr_40208_40229[(2)] = null);

(statearr_40208_40229[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (6))){
var inst_40178 = (state_40201[(7)]);
var inst_40184 = p.call(null,inst_40178);
var state_40201__$1 = state_40201;
if(cljs.core.truth_(inst_40184)){
var statearr_40209_40230 = state_40201__$1;
(statearr_40209_40230[(1)] = (9));

} else {
var statearr_40210_40231 = state_40201__$1;
(statearr_40210_40231[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (3))){
var inst_40199 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40201__$1,inst_40199);
} else {
if((state_val_40202 === (12))){
var state_40201__$1 = state_40201;
var statearr_40211_40232 = state_40201__$1;
(statearr_40211_40232[(2)] = null);

(statearr_40211_40232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (2))){
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40201__$1,(4),ch);
} else {
if((state_val_40202 === (11))){
var inst_40178 = (state_40201[(7)]);
var inst_40188 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40201__$1,(8),inst_40188,inst_40178);
} else {
if((state_val_40202 === (9))){
var state_40201__$1 = state_40201;
var statearr_40212_40233 = state_40201__$1;
(statearr_40212_40233[(2)] = tc);

(statearr_40212_40233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (5))){
var inst_40181 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40182 = cljs.core.async.close_BANG_.call(null,fc);
var state_40201__$1 = (function (){var statearr_40213 = state_40201;
(statearr_40213[(8)] = inst_40181);

return statearr_40213;
})();
var statearr_40214_40234 = state_40201__$1;
(statearr_40214_40234[(2)] = inst_40182);

(statearr_40214_40234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (14))){
var inst_40195 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40215_40235 = state_40201__$1;
(statearr_40215_40235[(2)] = inst_40195);

(statearr_40215_40235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (10))){
var state_40201__$1 = state_40201;
var statearr_40216_40236 = state_40201__$1;
(statearr_40216_40236[(2)] = fc);

(statearr_40216_40236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (8))){
var inst_40190 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
if(cljs.core.truth_(inst_40190)){
var statearr_40217_40237 = state_40201__$1;
(statearr_40217_40237[(1)] = (12));

} else {
var statearr_40218_40238 = state_40201__$1;
(statearr_40218_40238[(1)] = (13));

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
});})(c__39774__auto___40224,tc,fc))
;
return ((function (switch__39684__auto__,c__39774__auto___40224,tc,fc){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_40219 = [null,null,null,null,null,null,null,null,null];
(statearr_40219[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_40219[(1)] = (1));

return statearr_40219;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_40201){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40220){if((e40220 instanceof Object)){
var ex__39688__auto__ = e40220;
var statearr_40221_40239 = state_40201;
(statearr_40221_40239[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40240 = state_40201;
state_40201 = G__40240;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_40201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_40201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___40224,tc,fc))
})();
var state__39776__auto__ = (function (){var statearr_40222 = f__39775__auto__.call(null);
(statearr_40222[(6)] = c__39774__auto___40224);

return statearr_40222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___40224,tc,fc))
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
var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__){
return (function (state_40261){
var state_val_40262 = (state_40261[(1)]);
if((state_val_40262 === (7))){
var inst_40257 = (state_40261[(2)]);
var state_40261__$1 = state_40261;
var statearr_40263_40281 = state_40261__$1;
(statearr_40263_40281[(2)] = inst_40257);

(statearr_40263_40281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (1))){
var inst_40241 = init;
var state_40261__$1 = (function (){var statearr_40264 = state_40261;
(statearr_40264[(7)] = inst_40241);

return statearr_40264;
})();
var statearr_40265_40282 = state_40261__$1;
(statearr_40265_40282[(2)] = null);

(statearr_40265_40282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (4))){
var inst_40244 = (state_40261[(8)]);
var inst_40244__$1 = (state_40261[(2)]);
var inst_40245 = (inst_40244__$1 == null);
var state_40261__$1 = (function (){var statearr_40266 = state_40261;
(statearr_40266[(8)] = inst_40244__$1);

return statearr_40266;
})();
if(cljs.core.truth_(inst_40245)){
var statearr_40267_40283 = state_40261__$1;
(statearr_40267_40283[(1)] = (5));

} else {
var statearr_40268_40284 = state_40261__$1;
(statearr_40268_40284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (6))){
var inst_40248 = (state_40261[(9)]);
var inst_40244 = (state_40261[(8)]);
var inst_40241 = (state_40261[(7)]);
var inst_40248__$1 = f.call(null,inst_40241,inst_40244);
var inst_40249 = cljs.core.reduced_QMARK_.call(null,inst_40248__$1);
var state_40261__$1 = (function (){var statearr_40269 = state_40261;
(statearr_40269[(9)] = inst_40248__$1);

return statearr_40269;
})();
if(inst_40249){
var statearr_40270_40285 = state_40261__$1;
(statearr_40270_40285[(1)] = (8));

} else {
var statearr_40271_40286 = state_40261__$1;
(statearr_40271_40286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (3))){
var inst_40259 = (state_40261[(2)]);
var state_40261__$1 = state_40261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40261__$1,inst_40259);
} else {
if((state_val_40262 === (2))){
var state_40261__$1 = state_40261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40261__$1,(4),ch);
} else {
if((state_val_40262 === (9))){
var inst_40248 = (state_40261[(9)]);
var inst_40241 = inst_40248;
var state_40261__$1 = (function (){var statearr_40272 = state_40261;
(statearr_40272[(7)] = inst_40241);

return statearr_40272;
})();
var statearr_40273_40287 = state_40261__$1;
(statearr_40273_40287[(2)] = null);

(statearr_40273_40287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (5))){
var inst_40241 = (state_40261[(7)]);
var state_40261__$1 = state_40261;
var statearr_40274_40288 = state_40261__$1;
(statearr_40274_40288[(2)] = inst_40241);

(statearr_40274_40288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (10))){
var inst_40255 = (state_40261[(2)]);
var state_40261__$1 = state_40261;
var statearr_40275_40289 = state_40261__$1;
(statearr_40275_40289[(2)] = inst_40255);

(statearr_40275_40289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40262 === (8))){
var inst_40248 = (state_40261[(9)]);
var inst_40251 = cljs.core.deref.call(null,inst_40248);
var state_40261__$1 = state_40261;
var statearr_40276_40290 = state_40261__$1;
(statearr_40276_40290[(2)] = inst_40251);

(statearr_40276_40290[(1)] = (10));


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
});})(c__39774__auto__))
;
return ((function (switch__39684__auto__,c__39774__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39685__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39685__auto____0 = (function (){
var statearr_40277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40277[(0)] = cljs$core$async$reduce_$_state_machine__39685__auto__);

(statearr_40277[(1)] = (1));

return statearr_40277;
});
var cljs$core$async$reduce_$_state_machine__39685__auto____1 = (function (state_40261){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40278){if((e40278 instanceof Object)){
var ex__39688__auto__ = e40278;
var statearr_40279_40291 = state_40261;
(statearr_40279_40291[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40292 = state_40261;
state_40261 = G__40292;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39685__auto__ = function(state_40261){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39685__auto____1.call(this,state_40261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39685__auto____0;
cljs$core$async$reduce_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39685__auto____1;
return cljs$core$async$reduce_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__))
})();
var state__39776__auto__ = (function (){var statearr_40280 = f__39775__auto__.call(null);
(statearr_40280[(6)] = c__39774__auto__);

return statearr_40280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__))
);

return c__39774__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__,f__$1){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__,f__$1){
return (function (state_40298){
var state_val_40299 = (state_40298[(1)]);
if((state_val_40299 === (1))){
var inst_40293 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40298__$1 = state_40298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40298__$1,(2),inst_40293);
} else {
if((state_val_40299 === (2))){
var inst_40295 = (state_40298[(2)]);
var inst_40296 = f__$1.call(null,inst_40295);
var state_40298__$1 = state_40298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40298__$1,inst_40296);
} else {
return null;
}
}
});})(c__39774__auto__,f__$1))
;
return ((function (switch__39684__auto__,c__39774__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39685__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39685__auto____0 = (function (){
var statearr_40300 = [null,null,null,null,null,null,null];
(statearr_40300[(0)] = cljs$core$async$transduce_$_state_machine__39685__auto__);

(statearr_40300[(1)] = (1));

return statearr_40300;
});
var cljs$core$async$transduce_$_state_machine__39685__auto____1 = (function (state_40298){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40301){if((e40301 instanceof Object)){
var ex__39688__auto__ = e40301;
var statearr_40302_40304 = state_40298;
(statearr_40302_40304[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40305 = state_40298;
state_40298 = G__40305;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39685__auto__ = function(state_40298){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39685__auto____1.call(this,state_40298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39685__auto____0;
cljs$core$async$transduce_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39685__auto____1;
return cljs$core$async$transduce_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__,f__$1))
})();
var state__39776__auto__ = (function (){var statearr_40303 = f__39775__auto__.call(null);
(statearr_40303[(6)] = c__39774__auto__);

return statearr_40303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__,f__$1))
);

return c__39774__auto__;
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
var G__40307 = arguments.length;
switch (G__40307) {
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
var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__){
return (function (state_40332){
var state_val_40333 = (state_40332[(1)]);
if((state_val_40333 === (7))){
var inst_40314 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
var statearr_40334_40355 = state_40332__$1;
(statearr_40334_40355[(2)] = inst_40314);

(statearr_40334_40355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (1))){
var inst_40308 = cljs.core.seq.call(null,coll);
var inst_40309 = inst_40308;
var state_40332__$1 = (function (){var statearr_40335 = state_40332;
(statearr_40335[(7)] = inst_40309);

return statearr_40335;
})();
var statearr_40336_40356 = state_40332__$1;
(statearr_40336_40356[(2)] = null);

(statearr_40336_40356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (4))){
var inst_40309 = (state_40332[(7)]);
var inst_40312 = cljs.core.first.call(null,inst_40309);
var state_40332__$1 = state_40332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40332__$1,(7),ch,inst_40312);
} else {
if((state_val_40333 === (13))){
var inst_40326 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
var statearr_40337_40357 = state_40332__$1;
(statearr_40337_40357[(2)] = inst_40326);

(statearr_40337_40357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (6))){
var inst_40317 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
if(cljs.core.truth_(inst_40317)){
var statearr_40338_40358 = state_40332__$1;
(statearr_40338_40358[(1)] = (8));

} else {
var statearr_40339_40359 = state_40332__$1;
(statearr_40339_40359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (3))){
var inst_40330 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40332__$1,inst_40330);
} else {
if((state_val_40333 === (12))){
var state_40332__$1 = state_40332;
var statearr_40340_40360 = state_40332__$1;
(statearr_40340_40360[(2)] = null);

(statearr_40340_40360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (2))){
var inst_40309 = (state_40332[(7)]);
var state_40332__$1 = state_40332;
if(cljs.core.truth_(inst_40309)){
var statearr_40341_40361 = state_40332__$1;
(statearr_40341_40361[(1)] = (4));

} else {
var statearr_40342_40362 = state_40332__$1;
(statearr_40342_40362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (11))){
var inst_40323 = cljs.core.async.close_BANG_.call(null,ch);
var state_40332__$1 = state_40332;
var statearr_40343_40363 = state_40332__$1;
(statearr_40343_40363[(2)] = inst_40323);

(statearr_40343_40363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (9))){
var state_40332__$1 = state_40332;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40344_40364 = state_40332__$1;
(statearr_40344_40364[(1)] = (11));

} else {
var statearr_40345_40365 = state_40332__$1;
(statearr_40345_40365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (5))){
var inst_40309 = (state_40332[(7)]);
var state_40332__$1 = state_40332;
var statearr_40346_40366 = state_40332__$1;
(statearr_40346_40366[(2)] = inst_40309);

(statearr_40346_40366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (10))){
var inst_40328 = (state_40332[(2)]);
var state_40332__$1 = state_40332;
var statearr_40347_40367 = state_40332__$1;
(statearr_40347_40367[(2)] = inst_40328);

(statearr_40347_40367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40333 === (8))){
var inst_40309 = (state_40332[(7)]);
var inst_40319 = cljs.core.next.call(null,inst_40309);
var inst_40309__$1 = inst_40319;
var state_40332__$1 = (function (){var statearr_40348 = state_40332;
(statearr_40348[(7)] = inst_40309__$1);

return statearr_40348;
})();
var statearr_40349_40368 = state_40332__$1;
(statearr_40349_40368[(2)] = null);

(statearr_40349_40368[(1)] = (2));


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
});})(c__39774__auto__))
;
return ((function (switch__39684__auto__,c__39774__auto__){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_40350 = [null,null,null,null,null,null,null,null];
(statearr_40350[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_40350[(1)] = (1));

return statearr_40350;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_40332){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40351){if((e40351 instanceof Object)){
var ex__39688__auto__ = e40351;
var statearr_40352_40369 = state_40332;
(statearr_40352_40369[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40370 = state_40332;
state_40332 = G__40370;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_40332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_40332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__))
})();
var state__39776__auto__ = (function (){var statearr_40353 = f__39775__auto__.call(null);
(statearr_40353[(6)] = c__39774__auto__);

return statearr_40353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__))
);

return c__39774__auto__;
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
var x__30927__auto__ = (((_ == null))?null:_);
var m__30928__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,_);
} else {
var m__30928__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,_);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30928__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,ch);
} else {
var m__30928__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,ch);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m);
} else {
var m__30928__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async40371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40371 = (function (ch,cs,meta40372){
this.ch = ch;
this.cs = cs;
this.meta40372 = meta40372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40373,meta40372__$1){
var self__ = this;
var _40373__$1 = this;
return (new cljs.core.async.t_cljs$core$async40371(self__.ch,self__.cs,meta40372__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40373){
var self__ = this;
var _40373__$1 = this;
return self__.meta40372;
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40372","meta40372",-391547893,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40371";

cljs.core.async.t_cljs$core$async40371.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async40371");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40371 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40371(ch__$1,cs__$1,meta40372){
return (new cljs.core.async.t_cljs$core$async40371(ch__$1,cs__$1,meta40372));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40371(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39774__auto___40593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___40593,cs,m,dchan,dctr,done){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___40593,cs,m,dchan,dctr,done){
return (function (state_40508){
var state_val_40509 = (state_40508[(1)]);
if((state_val_40509 === (7))){
var inst_40504 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40510_40594 = state_40508__$1;
(statearr_40510_40594[(2)] = inst_40504);

(statearr_40510_40594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (20))){
var inst_40407 = (state_40508[(7)]);
var inst_40419 = cljs.core.first.call(null,inst_40407);
var inst_40420 = cljs.core.nth.call(null,inst_40419,(0),null);
var inst_40421 = cljs.core.nth.call(null,inst_40419,(1),null);
var state_40508__$1 = (function (){var statearr_40511 = state_40508;
(statearr_40511[(8)] = inst_40420);

return statearr_40511;
})();
if(cljs.core.truth_(inst_40421)){
var statearr_40512_40595 = state_40508__$1;
(statearr_40512_40595[(1)] = (22));

} else {
var statearr_40513_40596 = state_40508__$1;
(statearr_40513_40596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (27))){
var inst_40449 = (state_40508[(9)]);
var inst_40451 = (state_40508[(10)]);
var inst_40376 = (state_40508[(11)]);
var inst_40456 = (state_40508[(12)]);
var inst_40456__$1 = cljs.core._nth.call(null,inst_40449,inst_40451);
var inst_40457 = cljs.core.async.put_BANG_.call(null,inst_40456__$1,inst_40376,done);
var state_40508__$1 = (function (){var statearr_40514 = state_40508;
(statearr_40514[(12)] = inst_40456__$1);

return statearr_40514;
})();
if(cljs.core.truth_(inst_40457)){
var statearr_40515_40597 = state_40508__$1;
(statearr_40515_40597[(1)] = (30));

} else {
var statearr_40516_40598 = state_40508__$1;
(statearr_40516_40598[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (1))){
var state_40508__$1 = state_40508;
var statearr_40517_40599 = state_40508__$1;
(statearr_40517_40599[(2)] = null);

(statearr_40517_40599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (24))){
var inst_40407 = (state_40508[(7)]);
var inst_40426 = (state_40508[(2)]);
var inst_40427 = cljs.core.next.call(null,inst_40407);
var inst_40385 = inst_40427;
var inst_40386 = null;
var inst_40387 = (0);
var inst_40388 = (0);
var state_40508__$1 = (function (){var statearr_40518 = state_40508;
(statearr_40518[(13)] = inst_40387);

(statearr_40518[(14)] = inst_40426);

(statearr_40518[(15)] = inst_40385);

(statearr_40518[(16)] = inst_40386);

(statearr_40518[(17)] = inst_40388);

return statearr_40518;
})();
var statearr_40519_40600 = state_40508__$1;
(statearr_40519_40600[(2)] = null);

(statearr_40519_40600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (39))){
var state_40508__$1 = state_40508;
var statearr_40523_40601 = state_40508__$1;
(statearr_40523_40601[(2)] = null);

(statearr_40523_40601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (4))){
var inst_40376 = (state_40508[(11)]);
var inst_40376__$1 = (state_40508[(2)]);
var inst_40377 = (inst_40376__$1 == null);
var state_40508__$1 = (function (){var statearr_40524 = state_40508;
(statearr_40524[(11)] = inst_40376__$1);

return statearr_40524;
})();
if(cljs.core.truth_(inst_40377)){
var statearr_40525_40602 = state_40508__$1;
(statearr_40525_40602[(1)] = (5));

} else {
var statearr_40526_40603 = state_40508__$1;
(statearr_40526_40603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (15))){
var inst_40387 = (state_40508[(13)]);
var inst_40385 = (state_40508[(15)]);
var inst_40386 = (state_40508[(16)]);
var inst_40388 = (state_40508[(17)]);
var inst_40403 = (state_40508[(2)]);
var inst_40404 = (inst_40388 + (1));
var tmp40520 = inst_40387;
var tmp40521 = inst_40385;
var tmp40522 = inst_40386;
var inst_40385__$1 = tmp40521;
var inst_40386__$1 = tmp40522;
var inst_40387__$1 = tmp40520;
var inst_40388__$1 = inst_40404;
var state_40508__$1 = (function (){var statearr_40527 = state_40508;
(statearr_40527[(13)] = inst_40387__$1);

(statearr_40527[(15)] = inst_40385__$1);

(statearr_40527[(16)] = inst_40386__$1);

(statearr_40527[(17)] = inst_40388__$1);

(statearr_40527[(18)] = inst_40403);

return statearr_40527;
})();
var statearr_40528_40604 = state_40508__$1;
(statearr_40528_40604[(2)] = null);

(statearr_40528_40604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (21))){
var inst_40430 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40532_40605 = state_40508__$1;
(statearr_40532_40605[(2)] = inst_40430);

(statearr_40532_40605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (31))){
var inst_40456 = (state_40508[(12)]);
var inst_40460 = done.call(null,null);
var inst_40461 = cljs.core.async.untap_STAR_.call(null,m,inst_40456);
var state_40508__$1 = (function (){var statearr_40533 = state_40508;
(statearr_40533[(19)] = inst_40460);

return statearr_40533;
})();
var statearr_40534_40606 = state_40508__$1;
(statearr_40534_40606[(2)] = inst_40461);

(statearr_40534_40606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (32))){
var inst_40448 = (state_40508[(20)]);
var inst_40449 = (state_40508[(9)]);
var inst_40451 = (state_40508[(10)]);
var inst_40450 = (state_40508[(21)]);
var inst_40463 = (state_40508[(2)]);
var inst_40464 = (inst_40451 + (1));
var tmp40529 = inst_40448;
var tmp40530 = inst_40449;
var tmp40531 = inst_40450;
var inst_40448__$1 = tmp40529;
var inst_40449__$1 = tmp40530;
var inst_40450__$1 = tmp40531;
var inst_40451__$1 = inst_40464;
var state_40508__$1 = (function (){var statearr_40535 = state_40508;
(statearr_40535[(20)] = inst_40448__$1);

(statearr_40535[(9)] = inst_40449__$1);

(statearr_40535[(10)] = inst_40451__$1);

(statearr_40535[(22)] = inst_40463);

(statearr_40535[(21)] = inst_40450__$1);

return statearr_40535;
})();
var statearr_40536_40607 = state_40508__$1;
(statearr_40536_40607[(2)] = null);

(statearr_40536_40607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (40))){
var inst_40476 = (state_40508[(23)]);
var inst_40480 = done.call(null,null);
var inst_40481 = cljs.core.async.untap_STAR_.call(null,m,inst_40476);
var state_40508__$1 = (function (){var statearr_40537 = state_40508;
(statearr_40537[(24)] = inst_40480);

return statearr_40537;
})();
var statearr_40538_40608 = state_40508__$1;
(statearr_40538_40608[(2)] = inst_40481);

(statearr_40538_40608[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (33))){
var inst_40467 = (state_40508[(25)]);
var inst_40469 = cljs.core.chunked_seq_QMARK_.call(null,inst_40467);
var state_40508__$1 = state_40508;
if(inst_40469){
var statearr_40539_40609 = state_40508__$1;
(statearr_40539_40609[(1)] = (36));

} else {
var statearr_40540_40610 = state_40508__$1;
(statearr_40540_40610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (13))){
var inst_40397 = (state_40508[(26)]);
var inst_40400 = cljs.core.async.close_BANG_.call(null,inst_40397);
var state_40508__$1 = state_40508;
var statearr_40541_40611 = state_40508__$1;
(statearr_40541_40611[(2)] = inst_40400);

(statearr_40541_40611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (22))){
var inst_40420 = (state_40508[(8)]);
var inst_40423 = cljs.core.async.close_BANG_.call(null,inst_40420);
var state_40508__$1 = state_40508;
var statearr_40542_40612 = state_40508__$1;
(statearr_40542_40612[(2)] = inst_40423);

(statearr_40542_40612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (36))){
var inst_40467 = (state_40508[(25)]);
var inst_40471 = cljs.core.chunk_first.call(null,inst_40467);
var inst_40472 = cljs.core.chunk_rest.call(null,inst_40467);
var inst_40473 = cljs.core.count.call(null,inst_40471);
var inst_40448 = inst_40472;
var inst_40449 = inst_40471;
var inst_40450 = inst_40473;
var inst_40451 = (0);
var state_40508__$1 = (function (){var statearr_40543 = state_40508;
(statearr_40543[(20)] = inst_40448);

(statearr_40543[(9)] = inst_40449);

(statearr_40543[(10)] = inst_40451);

(statearr_40543[(21)] = inst_40450);

return statearr_40543;
})();
var statearr_40544_40613 = state_40508__$1;
(statearr_40544_40613[(2)] = null);

(statearr_40544_40613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (41))){
var inst_40467 = (state_40508[(25)]);
var inst_40483 = (state_40508[(2)]);
var inst_40484 = cljs.core.next.call(null,inst_40467);
var inst_40448 = inst_40484;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40508__$1 = (function (){var statearr_40545 = state_40508;
(statearr_40545[(20)] = inst_40448);

(statearr_40545[(9)] = inst_40449);

(statearr_40545[(10)] = inst_40451);

(statearr_40545[(27)] = inst_40483);

(statearr_40545[(21)] = inst_40450);

return statearr_40545;
})();
var statearr_40546_40614 = state_40508__$1;
(statearr_40546_40614[(2)] = null);

(statearr_40546_40614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (43))){
var state_40508__$1 = state_40508;
var statearr_40547_40615 = state_40508__$1;
(statearr_40547_40615[(2)] = null);

(statearr_40547_40615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (29))){
var inst_40492 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40548_40616 = state_40508__$1;
(statearr_40548_40616[(2)] = inst_40492);

(statearr_40548_40616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (44))){
var inst_40501 = (state_40508[(2)]);
var state_40508__$1 = (function (){var statearr_40549 = state_40508;
(statearr_40549[(28)] = inst_40501);

return statearr_40549;
})();
var statearr_40550_40617 = state_40508__$1;
(statearr_40550_40617[(2)] = null);

(statearr_40550_40617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (6))){
var inst_40440 = (state_40508[(29)]);
var inst_40439 = cljs.core.deref.call(null,cs);
var inst_40440__$1 = cljs.core.keys.call(null,inst_40439);
var inst_40441 = cljs.core.count.call(null,inst_40440__$1);
var inst_40442 = cljs.core.reset_BANG_.call(null,dctr,inst_40441);
var inst_40447 = cljs.core.seq.call(null,inst_40440__$1);
var inst_40448 = inst_40447;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40508__$1 = (function (){var statearr_40551 = state_40508;
(statearr_40551[(20)] = inst_40448);

(statearr_40551[(9)] = inst_40449);

(statearr_40551[(10)] = inst_40451);

(statearr_40551[(29)] = inst_40440__$1);

(statearr_40551[(30)] = inst_40442);

(statearr_40551[(21)] = inst_40450);

return statearr_40551;
})();
var statearr_40552_40618 = state_40508__$1;
(statearr_40552_40618[(2)] = null);

(statearr_40552_40618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (28))){
var inst_40467 = (state_40508[(25)]);
var inst_40448 = (state_40508[(20)]);
var inst_40467__$1 = cljs.core.seq.call(null,inst_40448);
var state_40508__$1 = (function (){var statearr_40553 = state_40508;
(statearr_40553[(25)] = inst_40467__$1);

return statearr_40553;
})();
if(inst_40467__$1){
var statearr_40554_40619 = state_40508__$1;
(statearr_40554_40619[(1)] = (33));

} else {
var statearr_40555_40620 = state_40508__$1;
(statearr_40555_40620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (25))){
var inst_40451 = (state_40508[(10)]);
var inst_40450 = (state_40508[(21)]);
var inst_40453 = (inst_40451 < inst_40450);
var inst_40454 = inst_40453;
var state_40508__$1 = state_40508;
if(cljs.core.truth_(inst_40454)){
var statearr_40556_40621 = state_40508__$1;
(statearr_40556_40621[(1)] = (27));

} else {
var statearr_40557_40622 = state_40508__$1;
(statearr_40557_40622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (34))){
var state_40508__$1 = state_40508;
var statearr_40558_40623 = state_40508__$1;
(statearr_40558_40623[(2)] = null);

(statearr_40558_40623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (17))){
var state_40508__$1 = state_40508;
var statearr_40559_40624 = state_40508__$1;
(statearr_40559_40624[(2)] = null);

(statearr_40559_40624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (3))){
var inst_40506 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40508__$1,inst_40506);
} else {
if((state_val_40509 === (12))){
var inst_40435 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40560_40625 = state_40508__$1;
(statearr_40560_40625[(2)] = inst_40435);

(statearr_40560_40625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (2))){
var state_40508__$1 = state_40508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40508__$1,(4),ch);
} else {
if((state_val_40509 === (23))){
var state_40508__$1 = state_40508;
var statearr_40561_40626 = state_40508__$1;
(statearr_40561_40626[(2)] = null);

(statearr_40561_40626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (35))){
var inst_40490 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40562_40627 = state_40508__$1;
(statearr_40562_40627[(2)] = inst_40490);

(statearr_40562_40627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (19))){
var inst_40407 = (state_40508[(7)]);
var inst_40411 = cljs.core.chunk_first.call(null,inst_40407);
var inst_40412 = cljs.core.chunk_rest.call(null,inst_40407);
var inst_40413 = cljs.core.count.call(null,inst_40411);
var inst_40385 = inst_40412;
var inst_40386 = inst_40411;
var inst_40387 = inst_40413;
var inst_40388 = (0);
var state_40508__$1 = (function (){var statearr_40563 = state_40508;
(statearr_40563[(13)] = inst_40387);

(statearr_40563[(15)] = inst_40385);

(statearr_40563[(16)] = inst_40386);

(statearr_40563[(17)] = inst_40388);

return statearr_40563;
})();
var statearr_40564_40628 = state_40508__$1;
(statearr_40564_40628[(2)] = null);

(statearr_40564_40628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (11))){
var inst_40385 = (state_40508[(15)]);
var inst_40407 = (state_40508[(7)]);
var inst_40407__$1 = cljs.core.seq.call(null,inst_40385);
var state_40508__$1 = (function (){var statearr_40565 = state_40508;
(statearr_40565[(7)] = inst_40407__$1);

return statearr_40565;
})();
if(inst_40407__$1){
var statearr_40566_40629 = state_40508__$1;
(statearr_40566_40629[(1)] = (16));

} else {
var statearr_40567_40630 = state_40508__$1;
(statearr_40567_40630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (9))){
var inst_40437 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40568_40631 = state_40508__$1;
(statearr_40568_40631[(2)] = inst_40437);

(statearr_40568_40631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (5))){
var inst_40383 = cljs.core.deref.call(null,cs);
var inst_40384 = cljs.core.seq.call(null,inst_40383);
var inst_40385 = inst_40384;
var inst_40386 = null;
var inst_40387 = (0);
var inst_40388 = (0);
var state_40508__$1 = (function (){var statearr_40569 = state_40508;
(statearr_40569[(13)] = inst_40387);

(statearr_40569[(15)] = inst_40385);

(statearr_40569[(16)] = inst_40386);

(statearr_40569[(17)] = inst_40388);

return statearr_40569;
})();
var statearr_40570_40632 = state_40508__$1;
(statearr_40570_40632[(2)] = null);

(statearr_40570_40632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (14))){
var state_40508__$1 = state_40508;
var statearr_40571_40633 = state_40508__$1;
(statearr_40571_40633[(2)] = null);

(statearr_40571_40633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (45))){
var inst_40498 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40572_40634 = state_40508__$1;
(statearr_40572_40634[(2)] = inst_40498);

(statearr_40572_40634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (26))){
var inst_40440 = (state_40508[(29)]);
var inst_40494 = (state_40508[(2)]);
var inst_40495 = cljs.core.seq.call(null,inst_40440);
var state_40508__$1 = (function (){var statearr_40573 = state_40508;
(statearr_40573[(31)] = inst_40494);

return statearr_40573;
})();
if(inst_40495){
var statearr_40574_40635 = state_40508__$1;
(statearr_40574_40635[(1)] = (42));

} else {
var statearr_40575_40636 = state_40508__$1;
(statearr_40575_40636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (16))){
var inst_40407 = (state_40508[(7)]);
var inst_40409 = cljs.core.chunked_seq_QMARK_.call(null,inst_40407);
var state_40508__$1 = state_40508;
if(inst_40409){
var statearr_40576_40637 = state_40508__$1;
(statearr_40576_40637[(1)] = (19));

} else {
var statearr_40577_40638 = state_40508__$1;
(statearr_40577_40638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (38))){
var inst_40487 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40578_40639 = state_40508__$1;
(statearr_40578_40639[(2)] = inst_40487);

(statearr_40578_40639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (30))){
var state_40508__$1 = state_40508;
var statearr_40579_40640 = state_40508__$1;
(statearr_40579_40640[(2)] = null);

(statearr_40579_40640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (10))){
var inst_40386 = (state_40508[(16)]);
var inst_40388 = (state_40508[(17)]);
var inst_40396 = cljs.core._nth.call(null,inst_40386,inst_40388);
var inst_40397 = cljs.core.nth.call(null,inst_40396,(0),null);
var inst_40398 = cljs.core.nth.call(null,inst_40396,(1),null);
var state_40508__$1 = (function (){var statearr_40580 = state_40508;
(statearr_40580[(26)] = inst_40397);

return statearr_40580;
})();
if(cljs.core.truth_(inst_40398)){
var statearr_40581_40641 = state_40508__$1;
(statearr_40581_40641[(1)] = (13));

} else {
var statearr_40582_40642 = state_40508__$1;
(statearr_40582_40642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (18))){
var inst_40433 = (state_40508[(2)]);
var state_40508__$1 = state_40508;
var statearr_40583_40643 = state_40508__$1;
(statearr_40583_40643[(2)] = inst_40433);

(statearr_40583_40643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (42))){
var state_40508__$1 = state_40508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40508__$1,(45),dchan);
} else {
if((state_val_40509 === (37))){
var inst_40476 = (state_40508[(23)]);
var inst_40467 = (state_40508[(25)]);
var inst_40376 = (state_40508[(11)]);
var inst_40476__$1 = cljs.core.first.call(null,inst_40467);
var inst_40477 = cljs.core.async.put_BANG_.call(null,inst_40476__$1,inst_40376,done);
var state_40508__$1 = (function (){var statearr_40584 = state_40508;
(statearr_40584[(23)] = inst_40476__$1);

return statearr_40584;
})();
if(cljs.core.truth_(inst_40477)){
var statearr_40585_40644 = state_40508__$1;
(statearr_40585_40644[(1)] = (39));

} else {
var statearr_40586_40645 = state_40508__$1;
(statearr_40586_40645[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40509 === (8))){
var inst_40387 = (state_40508[(13)]);
var inst_40388 = (state_40508[(17)]);
var inst_40390 = (inst_40388 < inst_40387);
var inst_40391 = inst_40390;
var state_40508__$1 = state_40508;
if(cljs.core.truth_(inst_40391)){
var statearr_40587_40646 = state_40508__$1;
(statearr_40587_40646[(1)] = (10));

} else {
var statearr_40588_40647 = state_40508__$1;
(statearr_40588_40647[(1)] = (11));

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
});})(c__39774__auto___40593,cs,m,dchan,dctr,done))
;
return ((function (switch__39684__auto__,c__39774__auto___40593,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39685__auto__ = null;
var cljs$core$async$mult_$_state_machine__39685__auto____0 = (function (){
var statearr_40589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40589[(0)] = cljs$core$async$mult_$_state_machine__39685__auto__);

(statearr_40589[(1)] = (1));

return statearr_40589;
});
var cljs$core$async$mult_$_state_machine__39685__auto____1 = (function (state_40508){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40590){if((e40590 instanceof Object)){
var ex__39688__auto__ = e40590;
var statearr_40591_40648 = state_40508;
(statearr_40591_40648[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40649 = state_40508;
state_40508 = G__40649;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39685__auto__ = function(state_40508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39685__auto____1.call(this,state_40508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39685__auto____0;
cljs$core$async$mult_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39685__auto____1;
return cljs$core$async$mult_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___40593,cs,m,dchan,dctr,done))
})();
var state__39776__auto__ = (function (){var statearr_40592 = f__39775__auto__.call(null);
(statearr_40592[(6)] = c__39774__auto___40593);

return statearr_40592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___40593,cs,m,dchan,dctr,done))
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
var G__40651 = arguments.length;
switch (G__40651) {
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,ch);
} else {
var m__30928__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,ch);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,ch);
} else {
var m__30928__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,ch);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m);
} else {
var m__30928__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,state_map);
} else {
var m__30928__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,state_map);
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
var x__30927__auto__ = (((m == null))?null:m);
var m__30928__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,m,mode);
} else {
var m__30928__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31480__auto__ = [];
var len__31473__auto___40663 = arguments.length;
var i__31474__auto___40664 = (0);
while(true){
if((i__31474__auto___40664 < len__31473__auto___40663)){
args__31480__auto__.push((arguments[i__31474__auto___40664]));

var G__40665 = (i__31474__auto___40664 + (1));
i__31474__auto___40664 = G__40665;
continue;
} else {
}
break;
}

var argseq__31481__auto__ = ((((3) < args__31480__auto__.length))?(new cljs.core.IndexedSeq(args__31480__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31481__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40657){
var map__40658 = p__40657;
var map__40658__$1 = ((((!((map__40658 == null)))?((((map__40658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40658):map__40658);
var opts = map__40658__$1;
var statearr_40660_40666 = state;
(statearr_40660_40666[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40658,map__40658__$1,opts){
return (function (val){
var statearr_40661_40667 = state;
(statearr_40661_40667[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40658,map__40658__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40662_40668 = state;
(statearr_40662_40668[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40653){
var G__40654 = cljs.core.first.call(null,seq40653);
var seq40653__$1 = cljs.core.next.call(null,seq40653);
var G__40655 = cljs.core.first.call(null,seq40653__$1);
var seq40653__$2 = cljs.core.next.call(null,seq40653__$1);
var G__40656 = cljs.core.first.call(null,seq40653__$2);
var seq40653__$3 = cljs.core.next.call(null,seq40653__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40654,G__40655,G__40656,seq40653__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40669 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40670){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40670 = meta40670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40671,meta40670__$1){
var self__ = this;
var _40671__$1 = this;
return (new cljs.core.async.t_cljs$core$async40669(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40671){
var self__ = this;
var _40671__$1 = this;
return self__.meta40670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40669.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40670","meta40670",1512178128,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40669.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40669.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40669";

cljs.core.async.t_cljs$core$async40669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async40669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40669(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40670){
return (new cljs.core.async.t_cljs$core$async40669(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40669(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39774__auto___40833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40773){
var state_val_40774 = (state_40773[(1)]);
if((state_val_40774 === (7))){
var inst_40688 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40775_40834 = state_40773__$1;
(statearr_40775_40834[(2)] = inst_40688);

(statearr_40775_40834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (20))){
var inst_40700 = (state_40773[(7)]);
var state_40773__$1 = state_40773;
var statearr_40776_40835 = state_40773__$1;
(statearr_40776_40835[(2)] = inst_40700);

(statearr_40776_40835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (27))){
var state_40773__$1 = state_40773;
var statearr_40777_40836 = state_40773__$1;
(statearr_40777_40836[(2)] = null);

(statearr_40777_40836[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (1))){
var inst_40675 = (state_40773[(8)]);
var inst_40675__$1 = calc_state.call(null);
var inst_40677 = (inst_40675__$1 == null);
var inst_40678 = cljs.core.not.call(null,inst_40677);
var state_40773__$1 = (function (){var statearr_40778 = state_40773;
(statearr_40778[(8)] = inst_40675__$1);

return statearr_40778;
})();
if(inst_40678){
var statearr_40779_40837 = state_40773__$1;
(statearr_40779_40837[(1)] = (2));

} else {
var statearr_40780_40838 = state_40773__$1;
(statearr_40780_40838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (24))){
var inst_40747 = (state_40773[(9)]);
var inst_40724 = (state_40773[(10)]);
var inst_40733 = (state_40773[(11)]);
var inst_40747__$1 = inst_40724.call(null,inst_40733);
var state_40773__$1 = (function (){var statearr_40781 = state_40773;
(statearr_40781[(9)] = inst_40747__$1);

return statearr_40781;
})();
if(cljs.core.truth_(inst_40747__$1)){
var statearr_40782_40839 = state_40773__$1;
(statearr_40782_40839[(1)] = (29));

} else {
var statearr_40783_40840 = state_40773__$1;
(statearr_40783_40840[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (4))){
var inst_40691 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40691)){
var statearr_40784_40841 = state_40773__$1;
(statearr_40784_40841[(1)] = (8));

} else {
var statearr_40785_40842 = state_40773__$1;
(statearr_40785_40842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (15))){
var inst_40718 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40718)){
var statearr_40786_40843 = state_40773__$1;
(statearr_40786_40843[(1)] = (19));

} else {
var statearr_40787_40844 = state_40773__$1;
(statearr_40787_40844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (21))){
var inst_40723 = (state_40773[(12)]);
var inst_40723__$1 = (state_40773[(2)]);
var inst_40724 = cljs.core.get.call(null,inst_40723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40725 = cljs.core.get.call(null,inst_40723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40726 = cljs.core.get.call(null,inst_40723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40773__$1 = (function (){var statearr_40788 = state_40773;
(statearr_40788[(10)] = inst_40724);

(statearr_40788[(13)] = inst_40725);

(statearr_40788[(12)] = inst_40723__$1);

return statearr_40788;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40773__$1,(22),inst_40726);
} else {
if((state_val_40774 === (31))){
var inst_40755 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40755)){
var statearr_40789_40845 = state_40773__$1;
(statearr_40789_40845[(1)] = (32));

} else {
var statearr_40790_40846 = state_40773__$1;
(statearr_40790_40846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (32))){
var inst_40732 = (state_40773[(14)]);
var state_40773__$1 = state_40773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40773__$1,(35),out,inst_40732);
} else {
if((state_val_40774 === (33))){
var inst_40723 = (state_40773[(12)]);
var inst_40700 = inst_40723;
var state_40773__$1 = (function (){var statearr_40791 = state_40773;
(statearr_40791[(7)] = inst_40700);

return statearr_40791;
})();
var statearr_40792_40847 = state_40773__$1;
(statearr_40792_40847[(2)] = null);

(statearr_40792_40847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (13))){
var inst_40700 = (state_40773[(7)]);
var inst_40707 = inst_40700.cljs$lang$protocol_mask$partition0$;
var inst_40708 = (inst_40707 & (64));
var inst_40709 = inst_40700.cljs$core$ISeq$;
var inst_40710 = (cljs.core.PROTOCOL_SENTINEL === inst_40709);
var inst_40711 = (inst_40708) || (inst_40710);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40711)){
var statearr_40793_40848 = state_40773__$1;
(statearr_40793_40848[(1)] = (16));

} else {
var statearr_40794_40849 = state_40773__$1;
(statearr_40794_40849[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (22))){
var inst_40732 = (state_40773[(14)]);
var inst_40733 = (state_40773[(11)]);
var inst_40731 = (state_40773[(2)]);
var inst_40732__$1 = cljs.core.nth.call(null,inst_40731,(0),null);
var inst_40733__$1 = cljs.core.nth.call(null,inst_40731,(1),null);
var inst_40734 = (inst_40732__$1 == null);
var inst_40735 = cljs.core._EQ_.call(null,inst_40733__$1,change);
var inst_40736 = (inst_40734) || (inst_40735);
var state_40773__$1 = (function (){var statearr_40795 = state_40773;
(statearr_40795[(14)] = inst_40732__$1);

(statearr_40795[(11)] = inst_40733__$1);

return statearr_40795;
})();
if(cljs.core.truth_(inst_40736)){
var statearr_40796_40850 = state_40773__$1;
(statearr_40796_40850[(1)] = (23));

} else {
var statearr_40797_40851 = state_40773__$1;
(statearr_40797_40851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (36))){
var inst_40723 = (state_40773[(12)]);
var inst_40700 = inst_40723;
var state_40773__$1 = (function (){var statearr_40798 = state_40773;
(statearr_40798[(7)] = inst_40700);

return statearr_40798;
})();
var statearr_40799_40852 = state_40773__$1;
(statearr_40799_40852[(2)] = null);

(statearr_40799_40852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (29))){
var inst_40747 = (state_40773[(9)]);
var state_40773__$1 = state_40773;
var statearr_40800_40853 = state_40773__$1;
(statearr_40800_40853[(2)] = inst_40747);

(statearr_40800_40853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (6))){
var state_40773__$1 = state_40773;
var statearr_40801_40854 = state_40773__$1;
(statearr_40801_40854[(2)] = false);

(statearr_40801_40854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (28))){
var inst_40743 = (state_40773[(2)]);
var inst_40744 = calc_state.call(null);
var inst_40700 = inst_40744;
var state_40773__$1 = (function (){var statearr_40802 = state_40773;
(statearr_40802[(15)] = inst_40743);

(statearr_40802[(7)] = inst_40700);

return statearr_40802;
})();
var statearr_40803_40855 = state_40773__$1;
(statearr_40803_40855[(2)] = null);

(statearr_40803_40855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (25))){
var inst_40769 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40804_40856 = state_40773__$1;
(statearr_40804_40856[(2)] = inst_40769);

(statearr_40804_40856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (34))){
var inst_40767 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40805_40857 = state_40773__$1;
(statearr_40805_40857[(2)] = inst_40767);

(statearr_40805_40857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (17))){
var state_40773__$1 = state_40773;
var statearr_40806_40858 = state_40773__$1;
(statearr_40806_40858[(2)] = false);

(statearr_40806_40858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (3))){
var state_40773__$1 = state_40773;
var statearr_40807_40859 = state_40773__$1;
(statearr_40807_40859[(2)] = false);

(statearr_40807_40859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (12))){
var inst_40771 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40773__$1,inst_40771);
} else {
if((state_val_40774 === (2))){
var inst_40675 = (state_40773[(8)]);
var inst_40680 = inst_40675.cljs$lang$protocol_mask$partition0$;
var inst_40681 = (inst_40680 & (64));
var inst_40682 = inst_40675.cljs$core$ISeq$;
var inst_40683 = (cljs.core.PROTOCOL_SENTINEL === inst_40682);
var inst_40684 = (inst_40681) || (inst_40683);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40684)){
var statearr_40808_40860 = state_40773__$1;
(statearr_40808_40860[(1)] = (5));

} else {
var statearr_40809_40861 = state_40773__$1;
(statearr_40809_40861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (23))){
var inst_40732 = (state_40773[(14)]);
var inst_40738 = (inst_40732 == null);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40738)){
var statearr_40810_40862 = state_40773__$1;
(statearr_40810_40862[(1)] = (26));

} else {
var statearr_40811_40863 = state_40773__$1;
(statearr_40811_40863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (35))){
var inst_40758 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
if(cljs.core.truth_(inst_40758)){
var statearr_40812_40864 = state_40773__$1;
(statearr_40812_40864[(1)] = (36));

} else {
var statearr_40813_40865 = state_40773__$1;
(statearr_40813_40865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (19))){
var inst_40700 = (state_40773[(7)]);
var inst_40720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40700);
var state_40773__$1 = state_40773;
var statearr_40814_40866 = state_40773__$1;
(statearr_40814_40866[(2)] = inst_40720);

(statearr_40814_40866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (11))){
var inst_40700 = (state_40773[(7)]);
var inst_40704 = (inst_40700 == null);
var inst_40705 = cljs.core.not.call(null,inst_40704);
var state_40773__$1 = state_40773;
if(inst_40705){
var statearr_40815_40867 = state_40773__$1;
(statearr_40815_40867[(1)] = (13));

} else {
var statearr_40816_40868 = state_40773__$1;
(statearr_40816_40868[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (9))){
var inst_40675 = (state_40773[(8)]);
var state_40773__$1 = state_40773;
var statearr_40817_40869 = state_40773__$1;
(statearr_40817_40869[(2)] = inst_40675);

(statearr_40817_40869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (5))){
var state_40773__$1 = state_40773;
var statearr_40818_40870 = state_40773__$1;
(statearr_40818_40870[(2)] = true);

(statearr_40818_40870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (14))){
var state_40773__$1 = state_40773;
var statearr_40819_40871 = state_40773__$1;
(statearr_40819_40871[(2)] = false);

(statearr_40819_40871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (26))){
var inst_40733 = (state_40773[(11)]);
var inst_40740 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40733);
var state_40773__$1 = state_40773;
var statearr_40820_40872 = state_40773__$1;
(statearr_40820_40872[(2)] = inst_40740);

(statearr_40820_40872[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (16))){
var state_40773__$1 = state_40773;
var statearr_40821_40873 = state_40773__$1;
(statearr_40821_40873[(2)] = true);

(statearr_40821_40873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (38))){
var inst_40763 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40822_40874 = state_40773__$1;
(statearr_40822_40874[(2)] = inst_40763);

(statearr_40822_40874[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (30))){
var inst_40724 = (state_40773[(10)]);
var inst_40733 = (state_40773[(11)]);
var inst_40725 = (state_40773[(13)]);
var inst_40750 = cljs.core.empty_QMARK_.call(null,inst_40724);
var inst_40751 = inst_40725.call(null,inst_40733);
var inst_40752 = cljs.core.not.call(null,inst_40751);
var inst_40753 = (inst_40750) && (inst_40752);
var state_40773__$1 = state_40773;
var statearr_40823_40875 = state_40773__$1;
(statearr_40823_40875[(2)] = inst_40753);

(statearr_40823_40875[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (10))){
var inst_40675 = (state_40773[(8)]);
var inst_40696 = (state_40773[(2)]);
var inst_40697 = cljs.core.get.call(null,inst_40696,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40698 = cljs.core.get.call(null,inst_40696,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40699 = cljs.core.get.call(null,inst_40696,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40700 = inst_40675;
var state_40773__$1 = (function (){var statearr_40824 = state_40773;
(statearr_40824[(16)] = inst_40699);

(statearr_40824[(17)] = inst_40697);

(statearr_40824[(18)] = inst_40698);

(statearr_40824[(7)] = inst_40700);

return statearr_40824;
})();
var statearr_40825_40876 = state_40773__$1;
(statearr_40825_40876[(2)] = null);

(statearr_40825_40876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (18))){
var inst_40715 = (state_40773[(2)]);
var state_40773__$1 = state_40773;
var statearr_40826_40877 = state_40773__$1;
(statearr_40826_40877[(2)] = inst_40715);

(statearr_40826_40877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (37))){
var state_40773__$1 = state_40773;
var statearr_40827_40878 = state_40773__$1;
(statearr_40827_40878[(2)] = null);

(statearr_40827_40878[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40774 === (8))){
var inst_40675 = (state_40773[(8)]);
var inst_40693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40675);
var state_40773__$1 = state_40773;
var statearr_40828_40879 = state_40773__$1;
(statearr_40828_40879[(2)] = inst_40693);

(statearr_40828_40879[(1)] = (10));


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
});})(c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39684__auto__,c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39685__auto__ = null;
var cljs$core$async$mix_$_state_machine__39685__auto____0 = (function (){
var statearr_40829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40829[(0)] = cljs$core$async$mix_$_state_machine__39685__auto__);

(statearr_40829[(1)] = (1));

return statearr_40829;
});
var cljs$core$async$mix_$_state_machine__39685__auto____1 = (function (state_40773){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e40830){if((e40830 instanceof Object)){
var ex__39688__auto__ = e40830;
var statearr_40831_40880 = state_40773;
(statearr_40831_40880[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40881 = state_40773;
state_40773 = G__40881;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39685__auto__ = function(state_40773){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39685__auto____1.call(this,state_40773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39685__auto____0;
cljs$core$async$mix_$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39685__auto____1;
return cljs$core$async$mix_$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39776__auto__ = (function (){var statearr_40832 = f__39775__auto__.call(null);
(statearr_40832[(6)] = c__39774__auto___40833);

return statearr_40832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___40833,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__30927__auto__ = (((p == null))?null:p);
var m__30928__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30928__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__30927__auto__ = (((p == null))?null:p);
var m__30928__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,p,v,ch);
} else {
var m__30928__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40883 = arguments.length;
switch (G__40883) {
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
var x__30927__auto__ = (((p == null))?null:p);
var m__30928__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,p);
} else {
var m__30928__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,p);
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
var x__30927__auto__ = (((p == null))?null:p);
var m__30928__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30927__auto__)]);
if(!((m__30928__auto__ == null))){
return m__30928__auto__.call(null,p,v);
} else {
var m__30928__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30928__auto____$1 == null))){
return m__30928__auto____$1.call(null,p,v);
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
var G__40887 = arguments.length;
switch (G__40887) {
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
return (function (p1__40885_SHARP_){
if(cljs.core.truth_(p1__40885_SHARP_.call(null,topic))){
return p1__40885_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40885_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30194__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40888 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40889){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40889 = meta40889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40890,meta40889__$1){
var self__ = this;
var _40890__$1 = this;
return (new cljs.core.async.t_cljs$core$async40888(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40889__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40890){
var self__ = this;
var _40890__$1 = this;
return self__.meta40889;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40889","meta40889",1215338404,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40888";

cljs.core.async.t_cljs$core$async40888.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async40888");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40888 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40889){
return (new cljs.core.async.t_cljs$core$async40888(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40889));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40888(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39774__auto___41008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41008,mults,ensure_mult,p){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41008,mults,ensure_mult,p){
return (function (state_40962){
var state_val_40963 = (state_40962[(1)]);
if((state_val_40963 === (7))){
var inst_40958 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40964_41009 = state_40962__$1;
(statearr_40964_41009[(2)] = inst_40958);

(statearr_40964_41009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (20))){
var state_40962__$1 = state_40962;
var statearr_40965_41010 = state_40962__$1;
(statearr_40965_41010[(2)] = null);

(statearr_40965_41010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (1))){
var state_40962__$1 = state_40962;
var statearr_40966_41011 = state_40962__$1;
(statearr_40966_41011[(2)] = null);

(statearr_40966_41011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (24))){
var inst_40941 = (state_40962[(7)]);
var inst_40950 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40941);
var state_40962__$1 = state_40962;
var statearr_40967_41012 = state_40962__$1;
(statearr_40967_41012[(2)] = inst_40950);

(statearr_40967_41012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (4))){
var inst_40893 = (state_40962[(8)]);
var inst_40893__$1 = (state_40962[(2)]);
var inst_40894 = (inst_40893__$1 == null);
var state_40962__$1 = (function (){var statearr_40968 = state_40962;
(statearr_40968[(8)] = inst_40893__$1);

return statearr_40968;
})();
if(cljs.core.truth_(inst_40894)){
var statearr_40969_41013 = state_40962__$1;
(statearr_40969_41013[(1)] = (5));

} else {
var statearr_40970_41014 = state_40962__$1;
(statearr_40970_41014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (15))){
var inst_40935 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40971_41015 = state_40962__$1;
(statearr_40971_41015[(2)] = inst_40935);

(statearr_40971_41015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (21))){
var inst_40955 = (state_40962[(2)]);
var state_40962__$1 = (function (){var statearr_40972 = state_40962;
(statearr_40972[(9)] = inst_40955);

return statearr_40972;
})();
var statearr_40973_41016 = state_40962__$1;
(statearr_40973_41016[(2)] = null);

(statearr_40973_41016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (13))){
var inst_40917 = (state_40962[(10)]);
var inst_40919 = cljs.core.chunked_seq_QMARK_.call(null,inst_40917);
var state_40962__$1 = state_40962;
if(inst_40919){
var statearr_40974_41017 = state_40962__$1;
(statearr_40974_41017[(1)] = (16));

} else {
var statearr_40975_41018 = state_40962__$1;
(statearr_40975_41018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (22))){
var inst_40947 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
if(cljs.core.truth_(inst_40947)){
var statearr_40976_41019 = state_40962__$1;
(statearr_40976_41019[(1)] = (23));

} else {
var statearr_40977_41020 = state_40962__$1;
(statearr_40977_41020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (6))){
var inst_40943 = (state_40962[(11)]);
var inst_40941 = (state_40962[(7)]);
var inst_40893 = (state_40962[(8)]);
var inst_40941__$1 = topic_fn.call(null,inst_40893);
var inst_40942 = cljs.core.deref.call(null,mults);
var inst_40943__$1 = cljs.core.get.call(null,inst_40942,inst_40941__$1);
var state_40962__$1 = (function (){var statearr_40978 = state_40962;
(statearr_40978[(11)] = inst_40943__$1);

(statearr_40978[(7)] = inst_40941__$1);

return statearr_40978;
})();
if(cljs.core.truth_(inst_40943__$1)){
var statearr_40979_41021 = state_40962__$1;
(statearr_40979_41021[(1)] = (19));

} else {
var statearr_40980_41022 = state_40962__$1;
(statearr_40980_41022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (25))){
var inst_40952 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40981_41023 = state_40962__$1;
(statearr_40981_41023[(2)] = inst_40952);

(statearr_40981_41023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (17))){
var inst_40917 = (state_40962[(10)]);
var inst_40926 = cljs.core.first.call(null,inst_40917);
var inst_40927 = cljs.core.async.muxch_STAR_.call(null,inst_40926);
var inst_40928 = cljs.core.async.close_BANG_.call(null,inst_40927);
var inst_40929 = cljs.core.next.call(null,inst_40917);
var inst_40903 = inst_40929;
var inst_40904 = null;
var inst_40905 = (0);
var inst_40906 = (0);
var state_40962__$1 = (function (){var statearr_40982 = state_40962;
(statearr_40982[(12)] = inst_40903);

(statearr_40982[(13)] = inst_40906);

(statearr_40982[(14)] = inst_40928);

(statearr_40982[(15)] = inst_40905);

(statearr_40982[(16)] = inst_40904);

return statearr_40982;
})();
var statearr_40983_41024 = state_40962__$1;
(statearr_40983_41024[(2)] = null);

(statearr_40983_41024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (3))){
var inst_40960 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40962__$1,inst_40960);
} else {
if((state_val_40963 === (12))){
var inst_40937 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40984_41025 = state_40962__$1;
(statearr_40984_41025[(2)] = inst_40937);

(statearr_40984_41025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (2))){
var state_40962__$1 = state_40962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40962__$1,(4),ch);
} else {
if((state_val_40963 === (23))){
var state_40962__$1 = state_40962;
var statearr_40985_41026 = state_40962__$1;
(statearr_40985_41026[(2)] = null);

(statearr_40985_41026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (19))){
var inst_40943 = (state_40962[(11)]);
var inst_40893 = (state_40962[(8)]);
var inst_40945 = cljs.core.async.muxch_STAR_.call(null,inst_40943);
var state_40962__$1 = state_40962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40962__$1,(22),inst_40945,inst_40893);
} else {
if((state_val_40963 === (11))){
var inst_40903 = (state_40962[(12)]);
var inst_40917 = (state_40962[(10)]);
var inst_40917__$1 = cljs.core.seq.call(null,inst_40903);
var state_40962__$1 = (function (){var statearr_40986 = state_40962;
(statearr_40986[(10)] = inst_40917__$1);

return statearr_40986;
})();
if(inst_40917__$1){
var statearr_40987_41027 = state_40962__$1;
(statearr_40987_41027[(1)] = (13));

} else {
var statearr_40988_41028 = state_40962__$1;
(statearr_40988_41028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (9))){
var inst_40939 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_40989_41029 = state_40962__$1;
(statearr_40989_41029[(2)] = inst_40939);

(statearr_40989_41029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (5))){
var inst_40900 = cljs.core.deref.call(null,mults);
var inst_40901 = cljs.core.vals.call(null,inst_40900);
var inst_40902 = cljs.core.seq.call(null,inst_40901);
var inst_40903 = inst_40902;
var inst_40904 = null;
var inst_40905 = (0);
var inst_40906 = (0);
var state_40962__$1 = (function (){var statearr_40990 = state_40962;
(statearr_40990[(12)] = inst_40903);

(statearr_40990[(13)] = inst_40906);

(statearr_40990[(15)] = inst_40905);

(statearr_40990[(16)] = inst_40904);

return statearr_40990;
})();
var statearr_40991_41030 = state_40962__$1;
(statearr_40991_41030[(2)] = null);

(statearr_40991_41030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (14))){
var state_40962__$1 = state_40962;
var statearr_40995_41031 = state_40962__$1;
(statearr_40995_41031[(2)] = null);

(statearr_40995_41031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (16))){
var inst_40917 = (state_40962[(10)]);
var inst_40921 = cljs.core.chunk_first.call(null,inst_40917);
var inst_40922 = cljs.core.chunk_rest.call(null,inst_40917);
var inst_40923 = cljs.core.count.call(null,inst_40921);
var inst_40903 = inst_40922;
var inst_40904 = inst_40921;
var inst_40905 = inst_40923;
var inst_40906 = (0);
var state_40962__$1 = (function (){var statearr_40996 = state_40962;
(statearr_40996[(12)] = inst_40903);

(statearr_40996[(13)] = inst_40906);

(statearr_40996[(15)] = inst_40905);

(statearr_40996[(16)] = inst_40904);

return statearr_40996;
})();
var statearr_40997_41032 = state_40962__$1;
(statearr_40997_41032[(2)] = null);

(statearr_40997_41032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (10))){
var inst_40903 = (state_40962[(12)]);
var inst_40906 = (state_40962[(13)]);
var inst_40905 = (state_40962[(15)]);
var inst_40904 = (state_40962[(16)]);
var inst_40911 = cljs.core._nth.call(null,inst_40904,inst_40906);
var inst_40912 = cljs.core.async.muxch_STAR_.call(null,inst_40911);
var inst_40913 = cljs.core.async.close_BANG_.call(null,inst_40912);
var inst_40914 = (inst_40906 + (1));
var tmp40992 = inst_40903;
var tmp40993 = inst_40905;
var tmp40994 = inst_40904;
var inst_40903__$1 = tmp40992;
var inst_40904__$1 = tmp40994;
var inst_40905__$1 = tmp40993;
var inst_40906__$1 = inst_40914;
var state_40962__$1 = (function (){var statearr_40998 = state_40962;
(statearr_40998[(12)] = inst_40903__$1);

(statearr_40998[(13)] = inst_40906__$1);

(statearr_40998[(17)] = inst_40913);

(statearr_40998[(15)] = inst_40905__$1);

(statearr_40998[(16)] = inst_40904__$1);

return statearr_40998;
})();
var statearr_40999_41033 = state_40962__$1;
(statearr_40999_41033[(2)] = null);

(statearr_40999_41033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (18))){
var inst_40932 = (state_40962[(2)]);
var state_40962__$1 = state_40962;
var statearr_41000_41034 = state_40962__$1;
(statearr_41000_41034[(2)] = inst_40932);

(statearr_41000_41034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40963 === (8))){
var inst_40906 = (state_40962[(13)]);
var inst_40905 = (state_40962[(15)]);
var inst_40908 = (inst_40906 < inst_40905);
var inst_40909 = inst_40908;
var state_40962__$1 = state_40962;
if(cljs.core.truth_(inst_40909)){
var statearr_41001_41035 = state_40962__$1;
(statearr_41001_41035[(1)] = (10));

} else {
var statearr_41002_41036 = state_40962__$1;
(statearr_41002_41036[(1)] = (11));

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
});})(c__39774__auto___41008,mults,ensure_mult,p))
;
return ((function (switch__39684__auto__,c__39774__auto___41008,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41003[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41003[(1)] = (1));

return statearr_41003;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_40962){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_40962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41004){if((e41004 instanceof Object)){
var ex__39688__auto__ = e41004;
var statearr_41005_41037 = state_40962;
(statearr_41005_41037[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41038 = state_40962;
state_40962 = G__41038;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_40962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_40962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41008,mults,ensure_mult,p))
})();
var state__39776__auto__ = (function (){var statearr_41006 = f__39775__auto__.call(null);
(statearr_41006[(6)] = c__39774__auto___41008);

return statearr_41006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41008,mults,ensure_mult,p))
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
var G__41040 = arguments.length;
switch (G__41040) {
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
var G__41043 = arguments.length;
switch (G__41043) {
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
var G__41046 = arguments.length;
switch (G__41046) {
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
var c__39774__auto___41113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41085){
var state_val_41086 = (state_41085[(1)]);
if((state_val_41086 === (7))){
var state_41085__$1 = state_41085;
var statearr_41087_41114 = state_41085__$1;
(statearr_41087_41114[(2)] = null);

(statearr_41087_41114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (1))){
var state_41085__$1 = state_41085;
var statearr_41088_41115 = state_41085__$1;
(statearr_41088_41115[(2)] = null);

(statearr_41088_41115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (4))){
var inst_41049 = (state_41085[(7)]);
var inst_41051 = (inst_41049 < cnt);
var state_41085__$1 = state_41085;
if(cljs.core.truth_(inst_41051)){
var statearr_41089_41116 = state_41085__$1;
(statearr_41089_41116[(1)] = (6));

} else {
var statearr_41090_41117 = state_41085__$1;
(statearr_41090_41117[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (15))){
var inst_41081 = (state_41085[(2)]);
var state_41085__$1 = state_41085;
var statearr_41091_41118 = state_41085__$1;
(statearr_41091_41118[(2)] = inst_41081);

(statearr_41091_41118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (13))){
var inst_41074 = cljs.core.async.close_BANG_.call(null,out);
var state_41085__$1 = state_41085;
var statearr_41092_41119 = state_41085__$1;
(statearr_41092_41119[(2)] = inst_41074);

(statearr_41092_41119[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (6))){
var state_41085__$1 = state_41085;
var statearr_41093_41120 = state_41085__$1;
(statearr_41093_41120[(2)] = null);

(statearr_41093_41120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (3))){
var inst_41083 = (state_41085[(2)]);
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41085__$1,inst_41083);
} else {
if((state_val_41086 === (12))){
var inst_41071 = (state_41085[(8)]);
var inst_41071__$1 = (state_41085[(2)]);
var inst_41072 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41071__$1);
var state_41085__$1 = (function (){var statearr_41094 = state_41085;
(statearr_41094[(8)] = inst_41071__$1);

return statearr_41094;
})();
if(cljs.core.truth_(inst_41072)){
var statearr_41095_41121 = state_41085__$1;
(statearr_41095_41121[(1)] = (13));

} else {
var statearr_41096_41122 = state_41085__$1;
(statearr_41096_41122[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (2))){
var inst_41048 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41049 = (0);
var state_41085__$1 = (function (){var statearr_41097 = state_41085;
(statearr_41097[(9)] = inst_41048);

(statearr_41097[(7)] = inst_41049);

return statearr_41097;
})();
var statearr_41098_41123 = state_41085__$1;
(statearr_41098_41123[(2)] = null);

(statearr_41098_41123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (11))){
var inst_41049 = (state_41085[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41085,(10),Object,null,(9));
var inst_41058 = chs__$1.call(null,inst_41049);
var inst_41059 = done.call(null,inst_41049);
var inst_41060 = cljs.core.async.take_BANG_.call(null,inst_41058,inst_41059);
var state_41085__$1 = state_41085;
var statearr_41099_41124 = state_41085__$1;
(statearr_41099_41124[(2)] = inst_41060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (9))){
var inst_41049 = (state_41085[(7)]);
var inst_41062 = (state_41085[(2)]);
var inst_41063 = (inst_41049 + (1));
var inst_41049__$1 = inst_41063;
var state_41085__$1 = (function (){var statearr_41100 = state_41085;
(statearr_41100[(10)] = inst_41062);

(statearr_41100[(7)] = inst_41049__$1);

return statearr_41100;
})();
var statearr_41101_41125 = state_41085__$1;
(statearr_41101_41125[(2)] = null);

(statearr_41101_41125[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (5))){
var inst_41069 = (state_41085[(2)]);
var state_41085__$1 = (function (){var statearr_41102 = state_41085;
(statearr_41102[(11)] = inst_41069);

return statearr_41102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41085__$1,(12),dchan);
} else {
if((state_val_41086 === (14))){
var inst_41071 = (state_41085[(8)]);
var inst_41076 = cljs.core.apply.call(null,f,inst_41071);
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41085__$1,(16),out,inst_41076);
} else {
if((state_val_41086 === (16))){
var inst_41078 = (state_41085[(2)]);
var state_41085__$1 = (function (){var statearr_41103 = state_41085;
(statearr_41103[(12)] = inst_41078);

return statearr_41103;
})();
var statearr_41104_41126 = state_41085__$1;
(statearr_41104_41126[(2)] = null);

(statearr_41104_41126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (10))){
var inst_41053 = (state_41085[(2)]);
var inst_41054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41085__$1 = (function (){var statearr_41105 = state_41085;
(statearr_41105[(13)] = inst_41053);

return statearr_41105;
})();
var statearr_41106_41127 = state_41085__$1;
(statearr_41106_41127[(2)] = inst_41054);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41086 === (8))){
var inst_41067 = (state_41085[(2)]);
var state_41085__$1 = state_41085;
var statearr_41107_41128 = state_41085__$1;
(statearr_41107_41128[(2)] = inst_41067);

(statearr_41107_41128[(1)] = (5));


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
});})(c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39684__auto__,c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41108[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41108[(1)] = (1));

return statearr_41108;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41085){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41109){if((e41109 instanceof Object)){
var ex__39688__auto__ = e41109;
var statearr_41110_41129 = state_41085;
(statearr_41110_41129[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41130 = state_41085;
state_41085 = G__41130;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39776__auto__ = (function (){var statearr_41111 = f__39775__auto__.call(null);
(statearr_41111[(6)] = c__39774__auto___41113);

return statearr_41111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41113,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__41133 = arguments.length;
switch (G__41133) {
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
var c__39774__auto___41187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41187,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41187,out){
return (function (state_41165){
var state_val_41166 = (state_41165[(1)]);
if((state_val_41166 === (7))){
var inst_41144 = (state_41165[(7)]);
var inst_41145 = (state_41165[(8)]);
var inst_41144__$1 = (state_41165[(2)]);
var inst_41145__$1 = cljs.core.nth.call(null,inst_41144__$1,(0),null);
var inst_41146 = cljs.core.nth.call(null,inst_41144__$1,(1),null);
var inst_41147 = (inst_41145__$1 == null);
var state_41165__$1 = (function (){var statearr_41167 = state_41165;
(statearr_41167[(9)] = inst_41146);

(statearr_41167[(7)] = inst_41144__$1);

(statearr_41167[(8)] = inst_41145__$1);

return statearr_41167;
})();
if(cljs.core.truth_(inst_41147)){
var statearr_41168_41188 = state_41165__$1;
(statearr_41168_41188[(1)] = (8));

} else {
var statearr_41169_41189 = state_41165__$1;
(statearr_41169_41189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (1))){
var inst_41134 = cljs.core.vec.call(null,chs);
var inst_41135 = inst_41134;
var state_41165__$1 = (function (){var statearr_41170 = state_41165;
(statearr_41170[(10)] = inst_41135);

return statearr_41170;
})();
var statearr_41171_41190 = state_41165__$1;
(statearr_41171_41190[(2)] = null);

(statearr_41171_41190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (4))){
var inst_41135 = (state_41165[(10)]);
var state_41165__$1 = state_41165;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41165__$1,(7),inst_41135);
} else {
if((state_val_41166 === (6))){
var inst_41161 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
var statearr_41172_41191 = state_41165__$1;
(statearr_41172_41191[(2)] = inst_41161);

(statearr_41172_41191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (3))){
var inst_41163 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41165__$1,inst_41163);
} else {
if((state_val_41166 === (2))){
var inst_41135 = (state_41165[(10)]);
var inst_41137 = cljs.core.count.call(null,inst_41135);
var inst_41138 = (inst_41137 > (0));
var state_41165__$1 = state_41165;
if(cljs.core.truth_(inst_41138)){
var statearr_41174_41192 = state_41165__$1;
(statearr_41174_41192[(1)] = (4));

} else {
var statearr_41175_41193 = state_41165__$1;
(statearr_41175_41193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (11))){
var inst_41135 = (state_41165[(10)]);
var inst_41154 = (state_41165[(2)]);
var tmp41173 = inst_41135;
var inst_41135__$1 = tmp41173;
var state_41165__$1 = (function (){var statearr_41176 = state_41165;
(statearr_41176[(11)] = inst_41154);

(statearr_41176[(10)] = inst_41135__$1);

return statearr_41176;
})();
var statearr_41177_41194 = state_41165__$1;
(statearr_41177_41194[(2)] = null);

(statearr_41177_41194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (9))){
var inst_41145 = (state_41165[(8)]);
var state_41165__$1 = state_41165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41165__$1,(11),out,inst_41145);
} else {
if((state_val_41166 === (5))){
var inst_41159 = cljs.core.async.close_BANG_.call(null,out);
var state_41165__$1 = state_41165;
var statearr_41178_41195 = state_41165__$1;
(statearr_41178_41195[(2)] = inst_41159);

(statearr_41178_41195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (10))){
var inst_41157 = (state_41165[(2)]);
var state_41165__$1 = state_41165;
var statearr_41179_41196 = state_41165__$1;
(statearr_41179_41196[(2)] = inst_41157);

(statearr_41179_41196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41166 === (8))){
var inst_41146 = (state_41165[(9)]);
var inst_41144 = (state_41165[(7)]);
var inst_41145 = (state_41165[(8)]);
var inst_41135 = (state_41165[(10)]);
var inst_41149 = (function (){var cs = inst_41135;
var vec__41140 = inst_41144;
var v = inst_41145;
var c = inst_41146;
return ((function (cs,vec__41140,v,c,inst_41146,inst_41144,inst_41145,inst_41135,state_val_41166,c__39774__auto___41187,out){
return (function (p1__41131_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41131_SHARP_);
});
;})(cs,vec__41140,v,c,inst_41146,inst_41144,inst_41145,inst_41135,state_val_41166,c__39774__auto___41187,out))
})();
var inst_41150 = cljs.core.filterv.call(null,inst_41149,inst_41135);
var inst_41135__$1 = inst_41150;
var state_41165__$1 = (function (){var statearr_41180 = state_41165;
(statearr_41180[(10)] = inst_41135__$1);

return statearr_41180;
})();
var statearr_41181_41197 = state_41165__$1;
(statearr_41181_41197[(2)] = null);

(statearr_41181_41197[(1)] = (2));


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
});})(c__39774__auto___41187,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41187,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41182[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41182[(1)] = (1));

return statearr_41182;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41165){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41183){if((e41183 instanceof Object)){
var ex__39688__auto__ = e41183;
var statearr_41184_41198 = state_41165;
(statearr_41184_41198[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41199 = state_41165;
state_41165 = G__41199;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41187,out))
})();
var state__39776__auto__ = (function (){var statearr_41185 = f__39775__auto__.call(null);
(statearr_41185[(6)] = c__39774__auto___41187);

return statearr_41185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41187,out))
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
var G__41201 = arguments.length;
switch (G__41201) {
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
var c__39774__auto___41246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41246,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41246,out){
return (function (state_41225){
var state_val_41226 = (state_41225[(1)]);
if((state_val_41226 === (7))){
var inst_41207 = (state_41225[(7)]);
var inst_41207__$1 = (state_41225[(2)]);
var inst_41208 = (inst_41207__$1 == null);
var inst_41209 = cljs.core.not.call(null,inst_41208);
var state_41225__$1 = (function (){var statearr_41227 = state_41225;
(statearr_41227[(7)] = inst_41207__$1);

return statearr_41227;
})();
if(inst_41209){
var statearr_41228_41247 = state_41225__$1;
(statearr_41228_41247[(1)] = (8));

} else {
var statearr_41229_41248 = state_41225__$1;
(statearr_41229_41248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (1))){
var inst_41202 = (0);
var state_41225__$1 = (function (){var statearr_41230 = state_41225;
(statearr_41230[(8)] = inst_41202);

return statearr_41230;
})();
var statearr_41231_41249 = state_41225__$1;
(statearr_41231_41249[(2)] = null);

(statearr_41231_41249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (4))){
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41225__$1,(7),ch);
} else {
if((state_val_41226 === (6))){
var inst_41220 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
var statearr_41232_41250 = state_41225__$1;
(statearr_41232_41250[(2)] = inst_41220);

(statearr_41232_41250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (3))){
var inst_41222 = (state_41225[(2)]);
var inst_41223 = cljs.core.async.close_BANG_.call(null,out);
var state_41225__$1 = (function (){var statearr_41233 = state_41225;
(statearr_41233[(9)] = inst_41222);

return statearr_41233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41225__$1,inst_41223);
} else {
if((state_val_41226 === (2))){
var inst_41202 = (state_41225[(8)]);
var inst_41204 = (inst_41202 < n);
var state_41225__$1 = state_41225;
if(cljs.core.truth_(inst_41204)){
var statearr_41234_41251 = state_41225__$1;
(statearr_41234_41251[(1)] = (4));

} else {
var statearr_41235_41252 = state_41225__$1;
(statearr_41235_41252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (11))){
var inst_41202 = (state_41225[(8)]);
var inst_41212 = (state_41225[(2)]);
var inst_41213 = (inst_41202 + (1));
var inst_41202__$1 = inst_41213;
var state_41225__$1 = (function (){var statearr_41236 = state_41225;
(statearr_41236[(10)] = inst_41212);

(statearr_41236[(8)] = inst_41202__$1);

return statearr_41236;
})();
var statearr_41237_41253 = state_41225__$1;
(statearr_41237_41253[(2)] = null);

(statearr_41237_41253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (9))){
var state_41225__$1 = state_41225;
var statearr_41238_41254 = state_41225__$1;
(statearr_41238_41254[(2)] = null);

(statearr_41238_41254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (5))){
var state_41225__$1 = state_41225;
var statearr_41239_41255 = state_41225__$1;
(statearr_41239_41255[(2)] = null);

(statearr_41239_41255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (10))){
var inst_41217 = (state_41225[(2)]);
var state_41225__$1 = state_41225;
var statearr_41240_41256 = state_41225__$1;
(statearr_41240_41256[(2)] = inst_41217);

(statearr_41240_41256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41226 === (8))){
var inst_41207 = (state_41225[(7)]);
var state_41225__$1 = state_41225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41225__$1,(11),out,inst_41207);
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
});})(c__39774__auto___41246,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41246,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41241 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41241[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41241[(1)] = (1));

return statearr_41241;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41225){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41242){if((e41242 instanceof Object)){
var ex__39688__auto__ = e41242;
var statearr_41243_41257 = state_41225;
(statearr_41243_41257[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41258 = state_41225;
state_41225 = G__41258;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41246,out))
})();
var state__39776__auto__ = (function (){var statearr_41244 = f__39775__auto__.call(null);
(statearr_41244[(6)] = c__39774__auto___41246);

return statearr_41244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41246,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41260 = (function (f,ch,meta41261){
this.f = f;
this.ch = ch;
this.meta41261 = meta41261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41262,meta41261__$1){
var self__ = this;
var _41262__$1 = this;
return (new cljs.core.async.t_cljs$core$async41260(self__.f,self__.ch,meta41261__$1));
});

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41262){
var self__ = this;
var _41262__$1 = this;
return self__.meta41261;
});

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41263 = (function (f,ch,meta41261,_,fn1,meta41264){
this.f = f;
this.ch = ch;
this.meta41261 = meta41261;
this._ = _;
this.fn1 = fn1;
this.meta41264 = meta41264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41265,meta41264__$1){
var self__ = this;
var _41265__$1 = this;
return (new cljs.core.async.t_cljs$core$async41263(self__.f,self__.ch,self__.meta41261,self__._,self__.fn1,meta41264__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41265){
var self__ = this;
var _41265__$1 = this;
return self__.meta41264;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41259_SHARP_){
return f1.call(null,(((p1__41259_SHARP_ == null))?null:self__.f.call(null,p1__41259_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41261","meta41261",-1511004185,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41260","cljs.core.async/t_cljs$core$async41260",2067632078,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41264","meta41264",-393524574,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41263";

cljs.core.async.t_cljs$core$async41263.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async41263");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41263 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41263(f__$1,ch__$1,meta41261__$1,___$2,fn1__$1,meta41264){
return (new cljs.core.async.t_cljs$core$async41263(f__$1,ch__$1,meta41261__$1,___$2,fn1__$1,meta41264));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41263(self__.f,self__.ch,self__.meta41261,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41261","meta41261",-1511004185,null)], null);
});

cljs.core.async.t_cljs$core$async41260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41260";

cljs.core.async.t_cljs$core$async41260.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async41260");
});

cljs.core.async.__GT_t_cljs$core$async41260 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41260(f__$1,ch__$1,meta41261){
return (new cljs.core.async.t_cljs$core$async41260(f__$1,ch__$1,meta41261));
});

}

return (new cljs.core.async.t_cljs$core$async41260(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41266 = (function (f,ch,meta41267){
this.f = f;
this.ch = ch;
this.meta41267 = meta41267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41268,meta41267__$1){
var self__ = this;
var _41268__$1 = this;
return (new cljs.core.async.t_cljs$core$async41266(self__.f,self__.ch,meta41267__$1));
});

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41268){
var self__ = this;
var _41268__$1 = this;
return self__.meta41267;
});

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41267","meta41267",1116952234,null)], null);
});

cljs.core.async.t_cljs$core$async41266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41266";

cljs.core.async.t_cljs$core$async41266.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async41266");
});

cljs.core.async.__GT_t_cljs$core$async41266 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41266(f__$1,ch__$1,meta41267){
return (new cljs.core.async.t_cljs$core$async41266(f__$1,ch__$1,meta41267));
});

}

return (new cljs.core.async.t_cljs$core$async41266(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41269 = (function (p,ch,meta41270){
this.p = p;
this.ch = ch;
this.meta41270 = meta41270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41271,meta41270__$1){
var self__ = this;
var _41271__$1 = this;
return (new cljs.core.async.t_cljs$core$async41269(self__.p,self__.ch,meta41270__$1));
});

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41271){
var self__ = this;
var _41271__$1 = this;
return self__.meta41270;
});

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41270","meta41270",624727440,null)], null);
});

cljs.core.async.t_cljs$core$async41269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41269";

cljs.core.async.t_cljs$core$async41269.cljs$lang$ctorPrWriter = (function (this__30865__auto__,writer__30866__auto__,opt__30867__auto__){
return cljs.core._write.call(null,writer__30866__auto__,"cljs.core.async/t_cljs$core$async41269");
});

cljs.core.async.__GT_t_cljs$core$async41269 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41269(p__$1,ch__$1,meta41270){
return (new cljs.core.async.t_cljs$core$async41269(p__$1,ch__$1,meta41270));
});

}

return (new cljs.core.async.t_cljs$core$async41269(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41273 = arguments.length;
switch (G__41273) {
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
var c__39774__auto___41313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41313,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41313,out){
return (function (state_41294){
var state_val_41295 = (state_41294[(1)]);
if((state_val_41295 === (7))){
var inst_41290 = (state_41294[(2)]);
var state_41294__$1 = state_41294;
var statearr_41296_41314 = state_41294__$1;
(statearr_41296_41314[(2)] = inst_41290);

(statearr_41296_41314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (1))){
var state_41294__$1 = state_41294;
var statearr_41297_41315 = state_41294__$1;
(statearr_41297_41315[(2)] = null);

(statearr_41297_41315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (4))){
var inst_41276 = (state_41294[(7)]);
var inst_41276__$1 = (state_41294[(2)]);
var inst_41277 = (inst_41276__$1 == null);
var state_41294__$1 = (function (){var statearr_41298 = state_41294;
(statearr_41298[(7)] = inst_41276__$1);

return statearr_41298;
})();
if(cljs.core.truth_(inst_41277)){
var statearr_41299_41316 = state_41294__$1;
(statearr_41299_41316[(1)] = (5));

} else {
var statearr_41300_41317 = state_41294__$1;
(statearr_41300_41317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (6))){
var inst_41276 = (state_41294[(7)]);
var inst_41281 = p.call(null,inst_41276);
var state_41294__$1 = state_41294;
if(cljs.core.truth_(inst_41281)){
var statearr_41301_41318 = state_41294__$1;
(statearr_41301_41318[(1)] = (8));

} else {
var statearr_41302_41319 = state_41294__$1;
(statearr_41302_41319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (3))){
var inst_41292 = (state_41294[(2)]);
var state_41294__$1 = state_41294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41294__$1,inst_41292);
} else {
if((state_val_41295 === (2))){
var state_41294__$1 = state_41294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41294__$1,(4),ch);
} else {
if((state_val_41295 === (11))){
var inst_41284 = (state_41294[(2)]);
var state_41294__$1 = state_41294;
var statearr_41303_41320 = state_41294__$1;
(statearr_41303_41320[(2)] = inst_41284);

(statearr_41303_41320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (9))){
var state_41294__$1 = state_41294;
var statearr_41304_41321 = state_41294__$1;
(statearr_41304_41321[(2)] = null);

(statearr_41304_41321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (5))){
var inst_41279 = cljs.core.async.close_BANG_.call(null,out);
var state_41294__$1 = state_41294;
var statearr_41305_41322 = state_41294__$1;
(statearr_41305_41322[(2)] = inst_41279);

(statearr_41305_41322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (10))){
var inst_41287 = (state_41294[(2)]);
var state_41294__$1 = (function (){var statearr_41306 = state_41294;
(statearr_41306[(8)] = inst_41287);

return statearr_41306;
})();
var statearr_41307_41323 = state_41294__$1;
(statearr_41307_41323[(2)] = null);

(statearr_41307_41323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41295 === (8))){
var inst_41276 = (state_41294[(7)]);
var state_41294__$1 = state_41294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41294__$1,(11),out,inst_41276);
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
});})(c__39774__auto___41313,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41313,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41308 = [null,null,null,null,null,null,null,null,null];
(statearr_41308[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41308[(1)] = (1));

return statearr_41308;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41294){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41309){if((e41309 instanceof Object)){
var ex__39688__auto__ = e41309;
var statearr_41310_41324 = state_41294;
(statearr_41310_41324[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41325 = state_41294;
state_41294 = G__41325;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41313,out))
})();
var state__39776__auto__ = (function (){var statearr_41311 = f__39775__auto__.call(null);
(statearr_41311[(6)] = c__39774__auto___41313);

return statearr_41311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41313,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41327 = arguments.length;
switch (G__41327) {
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
var c__39774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto__){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto__){
return (function (state_41390){
var state_val_41391 = (state_41390[(1)]);
if((state_val_41391 === (7))){
var inst_41386 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41392_41430 = state_41390__$1;
(statearr_41392_41430[(2)] = inst_41386);

(statearr_41392_41430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (20))){
var inst_41356 = (state_41390[(7)]);
var inst_41367 = (state_41390[(2)]);
var inst_41368 = cljs.core.next.call(null,inst_41356);
var inst_41342 = inst_41368;
var inst_41343 = null;
var inst_41344 = (0);
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41393 = state_41390;
(statearr_41393[(8)] = inst_41344);

(statearr_41393[(9)] = inst_41367);

(statearr_41393[(10)] = inst_41345);

(statearr_41393[(11)] = inst_41343);

(statearr_41393[(12)] = inst_41342);

return statearr_41393;
})();
var statearr_41394_41431 = state_41390__$1;
(statearr_41394_41431[(2)] = null);

(statearr_41394_41431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (1))){
var state_41390__$1 = state_41390;
var statearr_41395_41432 = state_41390__$1;
(statearr_41395_41432[(2)] = null);

(statearr_41395_41432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (4))){
var inst_41331 = (state_41390[(13)]);
var inst_41331__$1 = (state_41390[(2)]);
var inst_41332 = (inst_41331__$1 == null);
var state_41390__$1 = (function (){var statearr_41396 = state_41390;
(statearr_41396[(13)] = inst_41331__$1);

return statearr_41396;
})();
if(cljs.core.truth_(inst_41332)){
var statearr_41397_41433 = state_41390__$1;
(statearr_41397_41433[(1)] = (5));

} else {
var statearr_41398_41434 = state_41390__$1;
(statearr_41398_41434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (15))){
var state_41390__$1 = state_41390;
var statearr_41402_41435 = state_41390__$1;
(statearr_41402_41435[(2)] = null);

(statearr_41402_41435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (21))){
var state_41390__$1 = state_41390;
var statearr_41403_41436 = state_41390__$1;
(statearr_41403_41436[(2)] = null);

(statearr_41403_41436[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (13))){
var inst_41344 = (state_41390[(8)]);
var inst_41345 = (state_41390[(10)]);
var inst_41343 = (state_41390[(11)]);
var inst_41342 = (state_41390[(12)]);
var inst_41352 = (state_41390[(2)]);
var inst_41353 = (inst_41345 + (1));
var tmp41399 = inst_41344;
var tmp41400 = inst_41343;
var tmp41401 = inst_41342;
var inst_41342__$1 = tmp41401;
var inst_41343__$1 = tmp41400;
var inst_41344__$1 = tmp41399;
var inst_41345__$1 = inst_41353;
var state_41390__$1 = (function (){var statearr_41404 = state_41390;
(statearr_41404[(8)] = inst_41344__$1);

(statearr_41404[(14)] = inst_41352);

(statearr_41404[(10)] = inst_41345__$1);

(statearr_41404[(11)] = inst_41343__$1);

(statearr_41404[(12)] = inst_41342__$1);

return statearr_41404;
})();
var statearr_41405_41437 = state_41390__$1;
(statearr_41405_41437[(2)] = null);

(statearr_41405_41437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (22))){
var state_41390__$1 = state_41390;
var statearr_41406_41438 = state_41390__$1;
(statearr_41406_41438[(2)] = null);

(statearr_41406_41438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (6))){
var inst_41331 = (state_41390[(13)]);
var inst_41340 = f.call(null,inst_41331);
var inst_41341 = cljs.core.seq.call(null,inst_41340);
var inst_41342 = inst_41341;
var inst_41343 = null;
var inst_41344 = (0);
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41407 = state_41390;
(statearr_41407[(8)] = inst_41344);

(statearr_41407[(10)] = inst_41345);

(statearr_41407[(11)] = inst_41343);

(statearr_41407[(12)] = inst_41342);

return statearr_41407;
})();
var statearr_41408_41439 = state_41390__$1;
(statearr_41408_41439[(2)] = null);

(statearr_41408_41439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (17))){
var inst_41356 = (state_41390[(7)]);
var inst_41360 = cljs.core.chunk_first.call(null,inst_41356);
var inst_41361 = cljs.core.chunk_rest.call(null,inst_41356);
var inst_41362 = cljs.core.count.call(null,inst_41360);
var inst_41342 = inst_41361;
var inst_41343 = inst_41360;
var inst_41344 = inst_41362;
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41409 = state_41390;
(statearr_41409[(8)] = inst_41344);

(statearr_41409[(10)] = inst_41345);

(statearr_41409[(11)] = inst_41343);

(statearr_41409[(12)] = inst_41342);

return statearr_41409;
})();
var statearr_41410_41440 = state_41390__$1;
(statearr_41410_41440[(2)] = null);

(statearr_41410_41440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (3))){
var inst_41388 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41390__$1,inst_41388);
} else {
if((state_val_41391 === (12))){
var inst_41376 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41411_41441 = state_41390__$1;
(statearr_41411_41441[(2)] = inst_41376);

(statearr_41411_41441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (2))){
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41390__$1,(4),in$);
} else {
if((state_val_41391 === (23))){
var inst_41384 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41412_41442 = state_41390__$1;
(statearr_41412_41442[(2)] = inst_41384);

(statearr_41412_41442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (19))){
var inst_41371 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41413_41443 = state_41390__$1;
(statearr_41413_41443[(2)] = inst_41371);

(statearr_41413_41443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (11))){
var inst_41356 = (state_41390[(7)]);
var inst_41342 = (state_41390[(12)]);
var inst_41356__$1 = cljs.core.seq.call(null,inst_41342);
var state_41390__$1 = (function (){var statearr_41414 = state_41390;
(statearr_41414[(7)] = inst_41356__$1);

return statearr_41414;
})();
if(inst_41356__$1){
var statearr_41415_41444 = state_41390__$1;
(statearr_41415_41444[(1)] = (14));

} else {
var statearr_41416_41445 = state_41390__$1;
(statearr_41416_41445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (9))){
var inst_41378 = (state_41390[(2)]);
var inst_41379 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41390__$1 = (function (){var statearr_41417 = state_41390;
(statearr_41417[(15)] = inst_41378);

return statearr_41417;
})();
if(cljs.core.truth_(inst_41379)){
var statearr_41418_41446 = state_41390__$1;
(statearr_41418_41446[(1)] = (21));

} else {
var statearr_41419_41447 = state_41390__$1;
(statearr_41419_41447[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (5))){
var inst_41334 = cljs.core.async.close_BANG_.call(null,out);
var state_41390__$1 = state_41390;
var statearr_41420_41448 = state_41390__$1;
(statearr_41420_41448[(2)] = inst_41334);

(statearr_41420_41448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (14))){
var inst_41356 = (state_41390[(7)]);
var inst_41358 = cljs.core.chunked_seq_QMARK_.call(null,inst_41356);
var state_41390__$1 = state_41390;
if(inst_41358){
var statearr_41421_41449 = state_41390__$1;
(statearr_41421_41449[(1)] = (17));

} else {
var statearr_41422_41450 = state_41390__$1;
(statearr_41422_41450[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (16))){
var inst_41374 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41423_41451 = state_41390__$1;
(statearr_41423_41451[(2)] = inst_41374);

(statearr_41423_41451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (10))){
var inst_41345 = (state_41390[(10)]);
var inst_41343 = (state_41390[(11)]);
var inst_41350 = cljs.core._nth.call(null,inst_41343,inst_41345);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41390__$1,(13),out,inst_41350);
} else {
if((state_val_41391 === (18))){
var inst_41356 = (state_41390[(7)]);
var inst_41365 = cljs.core.first.call(null,inst_41356);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41390__$1,(20),out,inst_41365);
} else {
if((state_val_41391 === (8))){
var inst_41344 = (state_41390[(8)]);
var inst_41345 = (state_41390[(10)]);
var inst_41347 = (inst_41345 < inst_41344);
var inst_41348 = inst_41347;
var state_41390__$1 = state_41390;
if(cljs.core.truth_(inst_41348)){
var statearr_41424_41452 = state_41390__$1;
(statearr_41424_41452[(1)] = (10));

} else {
var statearr_41425_41453 = state_41390__$1;
(statearr_41425_41453[(1)] = (11));

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
});})(c__39774__auto__))
;
return ((function (switch__39684__auto__,c__39774__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____0 = (function (){
var statearr_41426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41426[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__);

(statearr_41426[(1)] = (1));

return statearr_41426;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____1 = (function (state_41390){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41427){if((e41427 instanceof Object)){
var ex__39688__auto__ = e41427;
var statearr_41428_41454 = state_41390;
(statearr_41428_41454[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41455 = state_41390;
state_41390 = G__41455;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__ = function(state_41390){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____1.call(this,state_41390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39685__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto__))
})();
var state__39776__auto__ = (function (){var statearr_41429 = f__39775__auto__.call(null);
(statearr_41429[(6)] = c__39774__auto__);

return statearr_41429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto__))
);

return c__39774__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41457 = arguments.length;
switch (G__41457) {
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
var G__41460 = arguments.length;
switch (G__41460) {
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
var G__41463 = arguments.length;
switch (G__41463) {
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
var c__39774__auto___41510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41510,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41510,out){
return (function (state_41487){
var state_val_41488 = (state_41487[(1)]);
if((state_val_41488 === (7))){
var inst_41482 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41489_41511 = state_41487__$1;
(statearr_41489_41511[(2)] = inst_41482);

(statearr_41489_41511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (1))){
var inst_41464 = null;
var state_41487__$1 = (function (){var statearr_41490 = state_41487;
(statearr_41490[(7)] = inst_41464);

return statearr_41490;
})();
var statearr_41491_41512 = state_41487__$1;
(statearr_41491_41512[(2)] = null);

(statearr_41491_41512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (4))){
var inst_41467 = (state_41487[(8)]);
var inst_41467__$1 = (state_41487[(2)]);
var inst_41468 = (inst_41467__$1 == null);
var inst_41469 = cljs.core.not.call(null,inst_41468);
var state_41487__$1 = (function (){var statearr_41492 = state_41487;
(statearr_41492[(8)] = inst_41467__$1);

return statearr_41492;
})();
if(inst_41469){
var statearr_41493_41513 = state_41487__$1;
(statearr_41493_41513[(1)] = (5));

} else {
var statearr_41494_41514 = state_41487__$1;
(statearr_41494_41514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (6))){
var state_41487__$1 = state_41487;
var statearr_41495_41515 = state_41487__$1;
(statearr_41495_41515[(2)] = null);

(statearr_41495_41515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (3))){
var inst_41484 = (state_41487[(2)]);
var inst_41485 = cljs.core.async.close_BANG_.call(null,out);
var state_41487__$1 = (function (){var statearr_41496 = state_41487;
(statearr_41496[(9)] = inst_41484);

return statearr_41496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41487__$1,inst_41485);
} else {
if((state_val_41488 === (2))){
var state_41487__$1 = state_41487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41487__$1,(4),ch);
} else {
if((state_val_41488 === (11))){
var inst_41467 = (state_41487[(8)]);
var inst_41476 = (state_41487[(2)]);
var inst_41464 = inst_41467;
var state_41487__$1 = (function (){var statearr_41497 = state_41487;
(statearr_41497[(10)] = inst_41476);

(statearr_41497[(7)] = inst_41464);

return statearr_41497;
})();
var statearr_41498_41516 = state_41487__$1;
(statearr_41498_41516[(2)] = null);

(statearr_41498_41516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (9))){
var inst_41467 = (state_41487[(8)]);
var state_41487__$1 = state_41487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41487__$1,(11),out,inst_41467);
} else {
if((state_val_41488 === (5))){
var inst_41464 = (state_41487[(7)]);
var inst_41467 = (state_41487[(8)]);
var inst_41471 = cljs.core._EQ_.call(null,inst_41467,inst_41464);
var state_41487__$1 = state_41487;
if(inst_41471){
var statearr_41500_41517 = state_41487__$1;
(statearr_41500_41517[(1)] = (8));

} else {
var statearr_41501_41518 = state_41487__$1;
(statearr_41501_41518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (10))){
var inst_41479 = (state_41487[(2)]);
var state_41487__$1 = state_41487;
var statearr_41502_41519 = state_41487__$1;
(statearr_41502_41519[(2)] = inst_41479);

(statearr_41502_41519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41488 === (8))){
var inst_41464 = (state_41487[(7)]);
var tmp41499 = inst_41464;
var inst_41464__$1 = tmp41499;
var state_41487__$1 = (function (){var statearr_41503 = state_41487;
(statearr_41503[(7)] = inst_41464__$1);

return statearr_41503;
})();
var statearr_41504_41520 = state_41487__$1;
(statearr_41504_41520[(2)] = null);

(statearr_41504_41520[(1)] = (2));


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
});})(c__39774__auto___41510,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41510,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41505[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41505[(1)] = (1));

return statearr_41505;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41487){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41506){if((e41506 instanceof Object)){
var ex__39688__auto__ = e41506;
var statearr_41507_41521 = state_41487;
(statearr_41507_41521[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41522 = state_41487;
state_41487 = G__41522;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41510,out))
})();
var state__39776__auto__ = (function (){var statearr_41508 = f__39775__auto__.call(null);
(statearr_41508[(6)] = c__39774__auto___41510);

return statearr_41508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41510,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41524 = arguments.length;
switch (G__41524) {
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
var c__39774__auto___41590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41590,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41590,out){
return (function (state_41562){
var state_val_41563 = (state_41562[(1)]);
if((state_val_41563 === (7))){
var inst_41558 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41564_41591 = state_41562__$1;
(statearr_41564_41591[(2)] = inst_41558);

(statearr_41564_41591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (1))){
var inst_41525 = (new Array(n));
var inst_41526 = inst_41525;
var inst_41527 = (0);
var state_41562__$1 = (function (){var statearr_41565 = state_41562;
(statearr_41565[(7)] = inst_41526);

(statearr_41565[(8)] = inst_41527);

return statearr_41565;
})();
var statearr_41566_41592 = state_41562__$1;
(statearr_41566_41592[(2)] = null);

(statearr_41566_41592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (4))){
var inst_41530 = (state_41562[(9)]);
var inst_41530__$1 = (state_41562[(2)]);
var inst_41531 = (inst_41530__$1 == null);
var inst_41532 = cljs.core.not.call(null,inst_41531);
var state_41562__$1 = (function (){var statearr_41567 = state_41562;
(statearr_41567[(9)] = inst_41530__$1);

return statearr_41567;
})();
if(inst_41532){
var statearr_41568_41593 = state_41562__$1;
(statearr_41568_41593[(1)] = (5));

} else {
var statearr_41569_41594 = state_41562__$1;
(statearr_41569_41594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (15))){
var inst_41552 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41570_41595 = state_41562__$1;
(statearr_41570_41595[(2)] = inst_41552);

(statearr_41570_41595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (13))){
var state_41562__$1 = state_41562;
var statearr_41571_41596 = state_41562__$1;
(statearr_41571_41596[(2)] = null);

(statearr_41571_41596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (6))){
var inst_41527 = (state_41562[(8)]);
var inst_41548 = (inst_41527 > (0));
var state_41562__$1 = state_41562;
if(cljs.core.truth_(inst_41548)){
var statearr_41572_41597 = state_41562__$1;
(statearr_41572_41597[(1)] = (12));

} else {
var statearr_41573_41598 = state_41562__$1;
(statearr_41573_41598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (3))){
var inst_41560 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41562__$1,inst_41560);
} else {
if((state_val_41563 === (12))){
var inst_41526 = (state_41562[(7)]);
var inst_41550 = cljs.core.vec.call(null,inst_41526);
var state_41562__$1 = state_41562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41562__$1,(15),out,inst_41550);
} else {
if((state_val_41563 === (2))){
var state_41562__$1 = state_41562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41562__$1,(4),ch);
} else {
if((state_val_41563 === (11))){
var inst_41542 = (state_41562[(2)]);
var inst_41543 = (new Array(n));
var inst_41526 = inst_41543;
var inst_41527 = (0);
var state_41562__$1 = (function (){var statearr_41574 = state_41562;
(statearr_41574[(10)] = inst_41542);

(statearr_41574[(7)] = inst_41526);

(statearr_41574[(8)] = inst_41527);

return statearr_41574;
})();
var statearr_41575_41599 = state_41562__$1;
(statearr_41575_41599[(2)] = null);

(statearr_41575_41599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (9))){
var inst_41526 = (state_41562[(7)]);
var inst_41540 = cljs.core.vec.call(null,inst_41526);
var state_41562__$1 = state_41562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41562__$1,(11),out,inst_41540);
} else {
if((state_val_41563 === (5))){
var inst_41535 = (state_41562[(11)]);
var inst_41526 = (state_41562[(7)]);
var inst_41530 = (state_41562[(9)]);
var inst_41527 = (state_41562[(8)]);
var inst_41534 = (inst_41526[inst_41527] = inst_41530);
var inst_41535__$1 = (inst_41527 + (1));
var inst_41536 = (inst_41535__$1 < n);
var state_41562__$1 = (function (){var statearr_41576 = state_41562;
(statearr_41576[(11)] = inst_41535__$1);

(statearr_41576[(12)] = inst_41534);

return statearr_41576;
})();
if(cljs.core.truth_(inst_41536)){
var statearr_41577_41600 = state_41562__$1;
(statearr_41577_41600[(1)] = (8));

} else {
var statearr_41578_41601 = state_41562__$1;
(statearr_41578_41601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (14))){
var inst_41555 = (state_41562[(2)]);
var inst_41556 = cljs.core.async.close_BANG_.call(null,out);
var state_41562__$1 = (function (){var statearr_41580 = state_41562;
(statearr_41580[(13)] = inst_41555);

return statearr_41580;
})();
var statearr_41581_41602 = state_41562__$1;
(statearr_41581_41602[(2)] = inst_41556);

(statearr_41581_41602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (10))){
var inst_41546 = (state_41562[(2)]);
var state_41562__$1 = state_41562;
var statearr_41582_41603 = state_41562__$1;
(statearr_41582_41603[(2)] = inst_41546);

(statearr_41582_41603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41563 === (8))){
var inst_41535 = (state_41562[(11)]);
var inst_41526 = (state_41562[(7)]);
var tmp41579 = inst_41526;
var inst_41526__$1 = tmp41579;
var inst_41527 = inst_41535;
var state_41562__$1 = (function (){var statearr_41583 = state_41562;
(statearr_41583[(7)] = inst_41526__$1);

(statearr_41583[(8)] = inst_41527);

return statearr_41583;
})();
var statearr_41584_41604 = state_41562__$1;
(statearr_41584_41604[(2)] = null);

(statearr_41584_41604[(1)] = (2));


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
});})(c__39774__auto___41590,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41590,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41585[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41585[(1)] = (1));

return statearr_41585;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41562){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41586){if((e41586 instanceof Object)){
var ex__39688__auto__ = e41586;
var statearr_41587_41605 = state_41562;
(statearr_41587_41605[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41606 = state_41562;
state_41562 = G__41606;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41590,out))
})();
var state__39776__auto__ = (function (){var statearr_41588 = f__39775__auto__.call(null);
(statearr_41588[(6)] = c__39774__auto___41590);

return statearr_41588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41608 = arguments.length;
switch (G__41608) {
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
var c__39774__auto___41678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39774__auto___41678,out){
return (function (){
var f__39775__auto__ = (function (){var switch__39684__auto__ = ((function (c__39774__auto___41678,out){
return (function (state_41650){
var state_val_41651 = (state_41650[(1)]);
if((state_val_41651 === (7))){
var inst_41646 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41652_41679 = state_41650__$1;
(statearr_41652_41679[(2)] = inst_41646);

(statearr_41652_41679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (1))){
var inst_41609 = [];
var inst_41610 = inst_41609;
var inst_41611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41650__$1 = (function (){var statearr_41653 = state_41650;
(statearr_41653[(7)] = inst_41610);

(statearr_41653[(8)] = inst_41611);

return statearr_41653;
})();
var statearr_41654_41680 = state_41650__$1;
(statearr_41654_41680[(2)] = null);

(statearr_41654_41680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (4))){
var inst_41614 = (state_41650[(9)]);
var inst_41614__$1 = (state_41650[(2)]);
var inst_41615 = (inst_41614__$1 == null);
var inst_41616 = cljs.core.not.call(null,inst_41615);
var state_41650__$1 = (function (){var statearr_41655 = state_41650;
(statearr_41655[(9)] = inst_41614__$1);

return statearr_41655;
})();
if(inst_41616){
var statearr_41656_41681 = state_41650__$1;
(statearr_41656_41681[(1)] = (5));

} else {
var statearr_41657_41682 = state_41650__$1;
(statearr_41657_41682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (15))){
var inst_41640 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41658_41683 = state_41650__$1;
(statearr_41658_41683[(2)] = inst_41640);

(statearr_41658_41683[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (13))){
var state_41650__$1 = state_41650;
var statearr_41659_41684 = state_41650__$1;
(statearr_41659_41684[(2)] = null);

(statearr_41659_41684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (6))){
var inst_41610 = (state_41650[(7)]);
var inst_41635 = inst_41610.length;
var inst_41636 = (inst_41635 > (0));
var state_41650__$1 = state_41650;
if(cljs.core.truth_(inst_41636)){
var statearr_41660_41685 = state_41650__$1;
(statearr_41660_41685[(1)] = (12));

} else {
var statearr_41661_41686 = state_41650__$1;
(statearr_41661_41686[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (3))){
var inst_41648 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41650__$1,inst_41648);
} else {
if((state_val_41651 === (12))){
var inst_41610 = (state_41650[(7)]);
var inst_41638 = cljs.core.vec.call(null,inst_41610);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41650__$1,(15),out,inst_41638);
} else {
if((state_val_41651 === (2))){
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41650__$1,(4),ch);
} else {
if((state_val_41651 === (11))){
var inst_41614 = (state_41650[(9)]);
var inst_41618 = (state_41650[(10)]);
var inst_41628 = (state_41650[(2)]);
var inst_41629 = [];
var inst_41630 = inst_41629.push(inst_41614);
var inst_41610 = inst_41629;
var inst_41611 = inst_41618;
var state_41650__$1 = (function (){var statearr_41662 = state_41650;
(statearr_41662[(11)] = inst_41628);

(statearr_41662[(12)] = inst_41630);

(statearr_41662[(7)] = inst_41610);

(statearr_41662[(8)] = inst_41611);

return statearr_41662;
})();
var statearr_41663_41687 = state_41650__$1;
(statearr_41663_41687[(2)] = null);

(statearr_41663_41687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (9))){
var inst_41610 = (state_41650[(7)]);
var inst_41626 = cljs.core.vec.call(null,inst_41610);
var state_41650__$1 = state_41650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41650__$1,(11),out,inst_41626);
} else {
if((state_val_41651 === (5))){
var inst_41614 = (state_41650[(9)]);
var inst_41611 = (state_41650[(8)]);
var inst_41618 = (state_41650[(10)]);
var inst_41618__$1 = f.call(null,inst_41614);
var inst_41619 = cljs.core._EQ_.call(null,inst_41618__$1,inst_41611);
var inst_41620 = cljs.core.keyword_identical_QMARK_.call(null,inst_41611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41621 = (inst_41619) || (inst_41620);
var state_41650__$1 = (function (){var statearr_41664 = state_41650;
(statearr_41664[(10)] = inst_41618__$1);

return statearr_41664;
})();
if(cljs.core.truth_(inst_41621)){
var statearr_41665_41688 = state_41650__$1;
(statearr_41665_41688[(1)] = (8));

} else {
var statearr_41666_41689 = state_41650__$1;
(statearr_41666_41689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (14))){
var inst_41643 = (state_41650[(2)]);
var inst_41644 = cljs.core.async.close_BANG_.call(null,out);
var state_41650__$1 = (function (){var statearr_41668 = state_41650;
(statearr_41668[(13)] = inst_41643);

return statearr_41668;
})();
var statearr_41669_41690 = state_41650__$1;
(statearr_41669_41690[(2)] = inst_41644);

(statearr_41669_41690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (10))){
var inst_41633 = (state_41650[(2)]);
var state_41650__$1 = state_41650;
var statearr_41670_41691 = state_41650__$1;
(statearr_41670_41691[(2)] = inst_41633);

(statearr_41670_41691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41651 === (8))){
var inst_41614 = (state_41650[(9)]);
var inst_41610 = (state_41650[(7)]);
var inst_41618 = (state_41650[(10)]);
var inst_41623 = inst_41610.push(inst_41614);
var tmp41667 = inst_41610;
var inst_41610__$1 = tmp41667;
var inst_41611 = inst_41618;
var state_41650__$1 = (function (){var statearr_41671 = state_41650;
(statearr_41671[(7)] = inst_41610__$1);

(statearr_41671[(8)] = inst_41611);

(statearr_41671[(14)] = inst_41623);

return statearr_41671;
})();
var statearr_41672_41692 = state_41650__$1;
(statearr_41672_41692[(2)] = null);

(statearr_41672_41692[(1)] = (2));


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
});})(c__39774__auto___41678,out))
;
return ((function (switch__39684__auto__,c__39774__auto___41678,out){
return (function() {
var cljs$core$async$state_machine__39685__auto__ = null;
var cljs$core$async$state_machine__39685__auto____0 = (function (){
var statearr_41673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41673[(0)] = cljs$core$async$state_machine__39685__auto__);

(statearr_41673[(1)] = (1));

return statearr_41673;
});
var cljs$core$async$state_machine__39685__auto____1 = (function (state_41650){
while(true){
var ret_value__39686__auto__ = (function (){try{while(true){
var result__39687__auto__ = switch__39684__auto__.call(null,state_41650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39687__auto__;
}
break;
}
}catch (e41674){if((e41674 instanceof Object)){
var ex__39688__auto__ = e41674;
var statearr_41675_41693 = state_41650;
(statearr_41675_41693[(5)] = ex__39688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41694 = state_41650;
state_41650 = G__41694;
continue;
} else {
return ret_value__39686__auto__;
}
break;
}
});
cljs$core$async$state_machine__39685__auto__ = function(state_41650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39685__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39685__auto____1.call(this,state_41650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39685__auto____0;
cljs$core$async$state_machine__39685__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39685__auto____1;
return cljs$core$async$state_machine__39685__auto__;
})()
;})(switch__39684__auto__,c__39774__auto___41678,out))
})();
var state__39776__auto__ = (function (){var statearr_41676 = f__39775__auto__.call(null);
(statearr_41676[(6)] = c__39774__auto___41678);

return statearr_41676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39776__auto__);
});})(c__39774__auto___41678,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523222484088
