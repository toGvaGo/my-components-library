var Gl = Object.defineProperty;
var Ul = (e, t, n) => t in e ? Gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Oe = (e, t, n) => Ul(e, typeof t != "symbol" ? t + "" : t, n);
import { warn as Yl, defineComponent as Y, openBlock as I, createElementBlock as q, createElementVNode as ne, unref as O, ref as x, watch as k, getCurrentScope as Xl, onScopeDispose as Zl, readonly as ti, computed as T, getCurrentInstance as ue, onMounted as xe, inject as G, onBeforeMount as zo, shallowRef as Jl, onBeforeUnmount as ze, provide as Ge, renderSlot as re, useSlots as Nr, Text as ni, createBlock as we, resolveDynamicComponent as Nn, mergeProps as _r, withCtx as le, Fragment as At, createCommentVNode as Ce, normalizeClass as D, toRef as xt, onUnmounted as Mr, reactive as Ho, toRefs as Ir, onUpdated as ko, createVNode as pe, nextTick as Be, normalizeStyle as _e, createTextVNode as _n, toDisplayString as gt, TransitionGroup as Ql, toRaw as Ma, withDirectives as Ke, isRef as wn, withModifiers as yr, vModelCheckbox as br, shallowReactive as eu, Transition as Vo, vShow as Cn, isVNode as ri, render as wr, cloneVNode as tu, Comment as oi, onActivated as nu, Teleport as ru, onDeactivated as ou, resolveComponent as Ve, resolveDirective as ai, renderList as Ia, h as U, watchEffect as vn } from "vue";
var si = typeof global == "object" && global && global.Object === Object && global, au = typeof self == "object" && self && self.Object === Object && self, rt = si || au || Function("return this")(), Ue = rt.Symbol, ii = Object.prototype, su = ii.hasOwnProperty, iu = ii.toString, cn = Ue ? Ue.toStringTag : void 0;
function lu(e) {
  var t = su.call(e, cn), n = e[cn];
  try {
    e[cn] = void 0;
    var r = !0;
  } catch {
  }
  var o = iu.call(e);
  return r && (t ? e[cn] = n : delete e[cn]), o;
}
var uu = Object.prototype, cu = uu.toString;
function fu(e) {
  return cu.call(e);
}
var du = "[object Null]", pu = "[object Undefined]", Ba = Ue ? Ue.toStringTag : void 0;
function Ht(e) {
  return e == null ? e === void 0 ? pu : du : Ba && Ba in Object(e) ? lu(e) : fu(e);
}
function it(e) {
  return e != null && typeof e == "object";
}
var vu = "[object Symbol]";
function Br(e) {
  return typeof e == "symbol" || it(e) && Ht(e) == vu;
}
function li(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Le = Array.isArray, hu = 1 / 0, ja = Ue ? Ue.prototype : void 0, Wa = ja ? ja.toString : void 0;
function ui(e) {
  if (typeof e == "string")
    return e;
  if (Le(e))
    return li(e, ui) + "";
  if (Br(e))
    return Wa ? Wa.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -hu ? "-0" : t;
}
var gu = /\s/;
function mu(e) {
  for (var t = e.length; t-- && gu.test(e.charAt(t)); )
    ;
  return t;
}
var yu = /^\s+/;
function bu(e) {
  return e && e.slice(0, mu(e) + 1).replace(yu, "");
}
function je(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Da = NaN, wu = /^[-+]0x[0-9a-f]+$/i, Cu = /^0b[01]+$/i, Su = /^0o[0-7]+$/i, Eu = parseInt;
function za(e) {
  if (typeof e == "number")
    return e;
  if (Br(e))
    return Da;
  if (je(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = je(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bu(e);
  var n = Cu.test(e);
  return n || Su.test(e) ? Eu(e.slice(2), n ? 2 : 8) : wu.test(e) ? Da : +e;
}
function Ko(e) {
  return e;
}
var Ou = "[object AsyncFunction]", Tu = "[object Function]", xu = "[object GeneratorFunction]", Au = "[object Proxy]";
function qo(e) {
  if (!je(e))
    return !1;
  var t = Ht(e);
  return t == Tu || t == xu || t == Ou || t == Au;
}
var Qr = rt["__core-js_shared__"], Ha = function() {
  var e = /[^.]+$/.exec(Qr && Qr.keys && Qr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $u(e) {
  return !!Ha && Ha in e;
}
var Pu = Function.prototype, Ru = Pu.toString;
function kt(e) {
  if (e != null) {
    try {
      return Ru.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fu = /[\\^$.*+?()[\]{}|]/g, Lu = /^\[object .+?Constructor\]$/, Nu = Function.prototype, _u = Object.prototype, Mu = Nu.toString, Iu = _u.hasOwnProperty, Bu = RegExp(
  "^" + Mu.call(Iu).replace(Fu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ju(e) {
  if (!je(e) || $u(e))
    return !1;
  var t = qo(e) ? Bu : Lu;
  return t.test(kt(e));
}
function Wu(e, t) {
  return e == null ? void 0 : e[t];
}
function Vt(e, t) {
  var n = Wu(e, t);
  return ju(n) ? n : void 0;
}
var fo = Vt(rt, "WeakMap"), ka = Object.create, Du = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!je(t))
      return {};
    if (ka)
      return ka(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function zu(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function ci(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Hu = 800, ku = 16, Vu = Date.now;
function Ku(e) {
  var t = 0, n = 0;
  return function() {
    var r = Vu(), o = ku - (r - n);
    if (n = r, o > 0) {
      if (++t >= Hu)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qu(e) {
  return function() {
    return e;
  };
}
var Cr = function() {
  try {
    var e = Vt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Gu = Cr ? function(e, t) {
  return Cr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qu(t),
    writable: !0
  });
} : Ko, fi = Ku(Gu);
function Uu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Yu = 9007199254740991, Xu = /^(?:0|[1-9]\d*)$/;
function jr(e, t) {
  var n = typeof e;
  return t = t ?? Yu, !!t && (n == "number" || n != "symbol" && Xu.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Go(e, t, n) {
  t == "__proto__" && Cr ? Cr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Mn(e, t) {
  return e === t || e !== e && t !== t;
}
var Zu = Object.prototype, Ju = Zu.hasOwnProperty;
function Uo(e, t, n) {
  var r = e[t];
  (!(Ju.call(e, t) && Mn(r, n)) || n === void 0 && !(t in e)) && Go(e, t, n);
}
function In(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = void 0;
    l === void 0 && (l = e[i]), o ? Go(n, i, l) : Uo(n, i, l);
  }
  return n;
}
var Va = Math.max;
function di(e, t, n) {
  return t = Va(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Va(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), zu(e, this, i);
  };
}
function Qu(e, t) {
  return fi(di(e, t, Ko), e + "");
}
var ec = 9007199254740991;
function Yo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ec;
}
function an(e) {
  return e != null && Yo(e.length) && !qo(e);
}
function tc(e, t, n) {
  if (!je(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? an(n) && jr(t, n.length) : r == "string" && t in n) ? Mn(n[t], e) : !1;
}
function nc(e) {
  return Qu(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && tc(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var rc = Object.prototype;
function Xo(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || rc;
  return e === n;
}
function oc(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ac = "[object Arguments]";
function Ka(e) {
  return it(e) && Ht(e) == ac;
}
var pi = Object.prototype, sc = pi.hasOwnProperty, ic = pi.propertyIsEnumerable, Sn = Ka(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ka : function(e) {
  return it(e) && sc.call(e, "callee") && !ic.call(e, "callee");
};
function lc() {
  return !1;
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, qa = vi && typeof module == "object" && module && !module.nodeType && module, uc = qa && qa.exports === vi, Ga = uc ? rt.Buffer : void 0, cc = Ga ? Ga.isBuffer : void 0, En = cc || lc, fc = "[object Arguments]", dc = "[object Array]", pc = "[object Boolean]", vc = "[object Date]", hc = "[object Error]", gc = "[object Function]", mc = "[object Map]", yc = "[object Number]", bc = "[object Object]", wc = "[object RegExp]", Cc = "[object Set]", Sc = "[object String]", Ec = "[object WeakMap]", Oc = "[object ArrayBuffer]", Tc = "[object DataView]", xc = "[object Float32Array]", Ac = "[object Float64Array]", $c = "[object Int8Array]", Pc = "[object Int16Array]", Rc = "[object Int32Array]", Fc = "[object Uint8Array]", Lc = "[object Uint8ClampedArray]", Nc = "[object Uint16Array]", _c = "[object Uint32Array]", ie = {};
ie[xc] = ie[Ac] = ie[$c] = ie[Pc] = ie[Rc] = ie[Fc] = ie[Lc] = ie[Nc] = ie[_c] = !0;
ie[fc] = ie[dc] = ie[Oc] = ie[pc] = ie[Tc] = ie[vc] = ie[hc] = ie[gc] = ie[mc] = ie[yc] = ie[bc] = ie[wc] = ie[Cc] = ie[Sc] = ie[Ec] = !1;
function Mc(e) {
  return it(e) && Yo(e.length) && !!ie[Ht(e)];
}
function Zo(e) {
  return function(t) {
    return e(t);
  };
}
var hi = typeof exports == "object" && exports && !exports.nodeType && exports, hn = hi && typeof module == "object" && module && !module.nodeType && module, Ic = hn && hn.exports === hi, eo = Ic && si.process, Zt = function() {
  try {
    var e = hn && hn.require && hn.require("util").types;
    return e || eo && eo.binding && eo.binding("util");
  } catch {
  }
}(), Ua = Zt && Zt.isTypedArray, Jo = Ua ? Zo(Ua) : Mc, Bc = Object.prototype, jc = Bc.hasOwnProperty;
function gi(e, t) {
  var n = Le(e), r = !n && Sn(e), o = !n && !r && En(e), a = !n && !r && !o && Jo(e), s = n || r || o || a, i = s ? oc(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || jc.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    jr(u, l))) && i.push(u);
  return i;
}
function mi(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Wc = mi(Object.keys, Object), Dc = Object.prototype, zc = Dc.hasOwnProperty;
function Hc(e) {
  if (!Xo(e))
    return Wc(e);
  var t = [];
  for (var n in Object(e))
    zc.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Bn(e) {
  return an(e) ? gi(e) : Hc(e);
}
function kc(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Vc = Object.prototype, Kc = Vc.hasOwnProperty;
function qc(e) {
  if (!je(e))
    return kc(e);
  var t = Xo(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Kc.call(e, r)) || n.push(r);
  return n;
}
function jn(e) {
  return an(e) ? gi(e, !0) : qc(e);
}
var Gc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uc = /^\w*$/;
function Qo(e, t) {
  if (Le(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Br(e) ? !0 : Uc.test(e) || !Gc.test(e) || t != null && e in Object(t);
}
var On = Vt(Object, "create");
function Yc() {
  this.__data__ = On ? On(null) : {}, this.size = 0;
}
function Xc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Zc = "__lodash_hash_undefined__", Jc = Object.prototype, Qc = Jc.hasOwnProperty;
function ef(e) {
  var t = this.__data__;
  if (On) {
    var n = t[e];
    return n === Zc ? void 0 : n;
  }
  return Qc.call(t, e) ? t[e] : void 0;
}
var tf = Object.prototype, nf = tf.hasOwnProperty;
function rf(e) {
  var t = this.__data__;
  return On ? t[e] !== void 0 : nf.call(t, e);
}
var of = "__lodash_hash_undefined__";
function af(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = On && t === void 0 ? of : t, this;
}
function It(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
It.prototype.clear = Yc;
It.prototype.delete = Xc;
It.prototype.get = ef;
It.prototype.has = rf;
It.prototype.set = af;
function sf() {
  this.__data__ = [], this.size = 0;
}
function Wr(e, t) {
  for (var n = e.length; n--; )
    if (Mn(e[n][0], t))
      return n;
  return -1;
}
var lf = Array.prototype, uf = lf.splice;
function cf(e) {
  var t = this.__data__, n = Wr(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : uf.call(t, n, 1), --this.size, !0;
}
function ff(e) {
  var t = this.__data__, n = Wr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function df(e) {
  return Wr(this.__data__, e) > -1;
}
function pf(e, t) {
  var n = this.__data__, r = Wr(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = sf;
Ct.prototype.delete = cf;
Ct.prototype.get = ff;
Ct.prototype.has = df;
Ct.prototype.set = pf;
var Tn = Vt(rt, "Map");
function vf() {
  this.size = 0, this.__data__ = {
    hash: new It(),
    map: new (Tn || Ct)(),
    string: new It()
  };
}
function hf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Dr(e, t) {
  var n = e.__data__;
  return hf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function gf(e) {
  var t = Dr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function mf(e) {
  return Dr(this, e).get(e);
}
function yf(e) {
  return Dr(this, e).has(e);
}
function bf(e, t) {
  var n = Dr(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function St(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
St.prototype.clear = vf;
St.prototype.delete = gf;
St.prototype.get = mf;
St.prototype.has = yf;
St.prototype.set = bf;
var wf = "Expected a function";
function ea(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(wf);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (ea.Cache || St)(), n;
}
ea.Cache = St;
var Cf = 500;
function Sf(e) {
  var t = ea(e, function(r) {
    return n.size === Cf && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Ef = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Of = /\\(\\)?/g, Tf = Sf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ef, function(n, r, o, a) {
    t.push(o ? a.replace(Of, "$1") : r || n);
  }), t;
});
function xf(e) {
  return e == null ? "" : ui(e);
}
function zr(e, t) {
  return Le(e) ? e : Qo(e, t) ? [e] : Tf(xf(e));
}
var Af = 1 / 0;
function Wn(e) {
  if (typeof e == "string" || Br(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Af ? "-0" : t;
}
function ta(e, t) {
  t = zr(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Wn(t[n++])];
  return n && n == r ? e : void 0;
}
function Sr(e, t, n) {
  var r = e == null ? void 0 : ta(e, t);
  return r === void 0 ? n : r;
}
function na(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Ya = Ue ? Ue.isConcatSpreadable : void 0;
function $f(e) {
  return Le(e) || Sn(e) || !!(Ya && e && e[Ya]);
}
function yi(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = $f), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? na(o, i) : o[o.length] = i;
  }
  return o;
}
function Pf(e) {
  var t = e == null ? 0 : e.length;
  return t ? yi(e) : [];
}
function Rf(e) {
  return fi(di(e, void 0, Pf), e + "");
}
var ra = mi(Object.getPrototypeOf, Object), Ff = "[object Object]", Lf = Function.prototype, Nf = Object.prototype, bi = Lf.toString, _f = Nf.hasOwnProperty, Mf = bi.call(Object);
function If(e) {
  if (!it(e) || Ht(e) != Ff)
    return !1;
  var t = ra(e);
  if (t === null)
    return !0;
  var n = _f.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && bi.call(n) == Mf;
}
function po() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Le(e) ? e : [e];
}
function Bf() {
  this.__data__ = new Ct(), this.size = 0;
}
function jf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Wf(e) {
  return this.__data__.get(e);
}
function Df(e) {
  return this.__data__.has(e);
}
var zf = 200;
function Hf(e, t) {
  var n = this.__data__;
  if (n instanceof Ct) {
    var r = n.__data__;
    if (!Tn || r.length < zf - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new St(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function nt(e) {
  var t = this.__data__ = new Ct(e);
  this.size = t.size;
}
nt.prototype.clear = Bf;
nt.prototype.delete = jf;
nt.prototype.get = Wf;
nt.prototype.has = Df;
nt.prototype.set = Hf;
function kf(e, t) {
  return e && In(t, Bn(t), e);
}
function Vf(e, t) {
  return e && In(t, jn(t), e);
}
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, Xa = wi && typeof module == "object" && module && !module.nodeType && module, Kf = Xa && Xa.exports === wi, Za = Kf ? rt.Buffer : void 0, Ja = Za ? Za.allocUnsafe : void 0;
function Ci(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = Ja ? Ja(n) : new e.constructor(n);
  return e.copy(r), r;
}
function qf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Si() {
  return [];
}
var Gf = Object.prototype, Uf = Gf.propertyIsEnumerable, Qa = Object.getOwnPropertySymbols, oa = Qa ? function(e) {
  return e == null ? [] : (e = Object(e), qf(Qa(e), function(t) {
    return Uf.call(e, t);
  }));
} : Si;
function Yf(e, t) {
  return In(e, oa(e), t);
}
var Xf = Object.getOwnPropertySymbols, Ei = Xf ? function(e) {
  for (var t = []; e; )
    na(t, oa(e)), e = ra(e);
  return t;
} : Si;
function Zf(e, t) {
  return In(e, Ei(e), t);
}
function Oi(e, t, n) {
  var r = t(e);
  return Le(e) ? r : na(r, n(e));
}
function vo(e) {
  return Oi(e, Bn, oa);
}
function Jf(e) {
  return Oi(e, jn, Ei);
}
var ho = Vt(rt, "DataView"), go = Vt(rt, "Promise"), mo = Vt(rt, "Set"), es = "[object Map]", Qf = "[object Object]", ts = "[object Promise]", ns = "[object Set]", rs = "[object WeakMap]", os = "[object DataView]", ed = kt(ho), td = kt(Tn), nd = kt(go), rd = kt(mo), od = kt(fo), et = Ht;
(ho && et(new ho(new ArrayBuffer(1))) != os || Tn && et(new Tn()) != es || go && et(go.resolve()) != ts || mo && et(new mo()) != ns || fo && et(new fo()) != rs) && (et = function(e) {
  var t = Ht(e), n = t == Qf ? e.constructor : void 0, r = n ? kt(n) : "";
  if (r)
    switch (r) {
      case ed:
        return os;
      case td:
        return es;
      case nd:
        return ts;
      case rd:
        return ns;
      case od:
        return rs;
    }
  return t;
});
var ad = Object.prototype, sd = ad.hasOwnProperty;
function id(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && sd.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Er = rt.Uint8Array;
function aa(e) {
  var t = new e.constructor(e.byteLength);
  return new Er(t).set(new Er(e)), t;
}
function ld(e, t) {
  var n = t ? aa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var ud = /\w*$/;
function cd(e) {
  var t = new e.constructor(e.source, ud.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var as = Ue ? Ue.prototype : void 0, ss = as ? as.valueOf : void 0;
function fd(e) {
  return ss ? Object(ss.call(e)) : {};
}
function Ti(e, t) {
  var n = t ? aa(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var dd = "[object Boolean]", pd = "[object Date]", vd = "[object Map]", hd = "[object Number]", gd = "[object RegExp]", md = "[object Set]", yd = "[object String]", bd = "[object Symbol]", wd = "[object ArrayBuffer]", Cd = "[object DataView]", Sd = "[object Float32Array]", Ed = "[object Float64Array]", Od = "[object Int8Array]", Td = "[object Int16Array]", xd = "[object Int32Array]", Ad = "[object Uint8Array]", $d = "[object Uint8ClampedArray]", Pd = "[object Uint16Array]", Rd = "[object Uint32Array]";
function Fd(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case wd:
      return aa(e);
    case dd:
    case pd:
      return new r(+e);
    case Cd:
      return ld(e, n);
    case Sd:
    case Ed:
    case Od:
    case Td:
    case xd:
    case Ad:
    case $d:
    case Pd:
    case Rd:
      return Ti(e, n);
    case vd:
      return new r();
    case hd:
    case yd:
      return new r(e);
    case gd:
      return cd(e);
    case md:
      return new r();
    case bd:
      return fd(e);
  }
}
function xi(e) {
  return typeof e.constructor == "function" && !Xo(e) ? Du(ra(e)) : {};
}
var Ld = "[object Map]";
function Nd(e) {
  return it(e) && et(e) == Ld;
}
var is = Zt && Zt.isMap, _d = is ? Zo(is) : Nd, Md = "[object Set]";
function Id(e) {
  return it(e) && et(e) == Md;
}
var ls = Zt && Zt.isSet, Bd = ls ? Zo(ls) : Id, jd = 1, Wd = 2, Dd = 4, Ai = "[object Arguments]", zd = "[object Array]", Hd = "[object Boolean]", kd = "[object Date]", Vd = "[object Error]", $i = "[object Function]", Kd = "[object GeneratorFunction]", qd = "[object Map]", Gd = "[object Number]", Pi = "[object Object]", Ud = "[object RegExp]", Yd = "[object Set]", Xd = "[object String]", Zd = "[object Symbol]", Jd = "[object WeakMap]", Qd = "[object ArrayBuffer]", ep = "[object DataView]", tp = "[object Float32Array]", np = "[object Float64Array]", rp = "[object Int8Array]", op = "[object Int16Array]", ap = "[object Int32Array]", sp = "[object Uint8Array]", ip = "[object Uint8ClampedArray]", lp = "[object Uint16Array]", up = "[object Uint32Array]", ae = {};
ae[Ai] = ae[zd] = ae[Qd] = ae[ep] = ae[Hd] = ae[kd] = ae[tp] = ae[np] = ae[rp] = ae[op] = ae[ap] = ae[qd] = ae[Gd] = ae[Pi] = ae[Ud] = ae[Yd] = ae[Xd] = ae[Zd] = ae[sp] = ae[ip] = ae[lp] = ae[up] = !0;
ae[Vd] = ae[$i] = ae[Jd] = !1;
function ur(e, t, n, r, o, a) {
  var s, i = t & jd, l = t & Wd, u = t & Dd;
  if (s !== void 0)
    return s;
  if (!je(e))
    return e;
  var c = Le(e);
  if (c) {
    if (s = id(e), !i)
      return ci(e, s);
  } else {
    var f = et(e), v = f == $i || f == Kd;
    if (En(e))
      return Ci(e, i);
    if (f == Pi || f == Ai || v && !o) {
      if (s = l || v ? {} : xi(e), !i)
        return l ? Zf(e, Vf(s, e)) : Yf(e, kf(s, e));
    } else {
      if (!ae[f])
        return o ? e : {};
      s = Fd(e, f, i);
    }
  }
  a || (a = new nt());
  var m = a.get(e);
  if (m)
    return m;
  a.set(e, s), Bd(e) ? e.forEach(function(y) {
    s.add(ur(y, t, n, y, e, a));
  }) : _d(e) && e.forEach(function(y, g) {
    s.set(g, ur(y, t, n, g, e, a));
  });
  var d = u ? l ? Jf : vo : l ? jn : Bn, p = c ? void 0 : d(e);
  return Uu(p || e, function(y, g) {
    p && (g = y, y = e[g]), Uo(s, g, ur(y, t, n, g, e, a));
  }), s;
}
var cp = 4;
function us(e) {
  return ur(e, cp);
}
var fp = "__lodash_hash_undefined__";
function dp(e) {
  return this.__data__.set(e, fp), this;
}
function pp(e) {
  return this.__data__.has(e);
}
function Or(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new St(); ++t < n; )
    this.add(e[t]);
}
Or.prototype.add = Or.prototype.push = dp;
Or.prototype.has = pp;
function vp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function hp(e, t) {
  return e.has(t);
}
var gp = 1, mp = 2;
function Ri(e, t, n, r, o, a) {
  var s = n & gp, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var f = -1, v = !0, m = n & mp ? new Or() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < i; ) {
    var d = e[f], p = t[f];
    if (r)
      var y = s ? r(p, d, f, t, e, a) : r(d, p, f, e, t, a);
    if (y !== void 0) {
      if (y)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!vp(t, function(g, b) {
        if (!hp(m, b) && (d === g || o(d, g, n, r, a)))
          return m.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(d === p || o(d, p, n, r, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
function yp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function bp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var wp = 1, Cp = 2, Sp = "[object Boolean]", Ep = "[object Date]", Op = "[object Error]", Tp = "[object Map]", xp = "[object Number]", Ap = "[object RegExp]", $p = "[object Set]", Pp = "[object String]", Rp = "[object Symbol]", Fp = "[object ArrayBuffer]", Lp = "[object DataView]", cs = Ue ? Ue.prototype : void 0, to = cs ? cs.valueOf : void 0;
function Np(e, t, n, r, o, a, s) {
  switch (n) {
    case Lp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Fp:
      return !(e.byteLength != t.byteLength || !a(new Er(e), new Er(t)));
    case Sp:
    case Ep:
    case xp:
      return Mn(+e, +t);
    case Op:
      return e.name == t.name && e.message == t.message;
    case Ap:
    case Pp:
      return e == t + "";
    case Tp:
      var i = yp;
    case $p:
      var l = r & wp;
      if (i || (i = bp), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= Cp, s.set(e, t);
      var c = Ri(i(e), i(t), r, o, a, s);
      return s.delete(e), c;
    case Rp:
      if (to)
        return to.call(e) == to.call(t);
  }
  return !1;
}
var _p = 1, Mp = Object.prototype, Ip = Mp.hasOwnProperty;
function Bp(e, t, n, r, o, a) {
  var s = n & _p, i = vo(e), l = i.length, u = vo(t), c = u.length;
  if (l != c && !s)
    return !1;
  for (var f = l; f--; ) {
    var v = i[f];
    if (!(s ? v in t : Ip.call(t, v)))
      return !1;
  }
  var m = a.get(e), d = a.get(t);
  if (m && d)
    return m == t && d == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var y = s; ++f < l; ) {
    v = i[f];
    var g = e[v], b = t[v];
    if (r)
      var w = s ? r(b, g, v, t, e, a) : r(g, b, v, e, t, a);
    if (!(w === void 0 ? g === b || o(g, b, n, r, a) : w)) {
      p = !1;
      break;
    }
    y || (y = v == "constructor");
  }
  if (p && !y) {
    var h = e.constructor, E = t.constructor;
    h != E && "constructor" in e && "constructor" in t && !(typeof h == "function" && h instanceof h && typeof E == "function" && E instanceof E) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var jp = 1, fs = "[object Arguments]", ds = "[object Array]", er = "[object Object]", Wp = Object.prototype, ps = Wp.hasOwnProperty;
function Dp(e, t, n, r, o, a) {
  var s = Le(e), i = Le(t), l = s ? ds : et(e), u = i ? ds : et(t);
  l = l == fs ? er : l, u = u == fs ? er : u;
  var c = l == er, f = u == er, v = l == u;
  if (v && En(e)) {
    if (!En(t))
      return !1;
    s = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new nt()), s || Jo(e) ? Ri(e, t, n, r, o, a) : Np(e, t, l, n, r, o, a);
  if (!(n & jp)) {
    var m = c && ps.call(e, "__wrapped__"), d = f && ps.call(t, "__wrapped__");
    if (m || d) {
      var p = m ? e.value() : e, y = d ? t.value() : t;
      return a || (a = new nt()), o(p, y, n, r, a);
    }
  }
  return v ? (a || (a = new nt()), Bp(e, t, n, r, o, a)) : !1;
}
function Hr(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !it(e) && !it(t) ? e !== e && t !== t : Dp(e, t, n, r, Hr, o);
}
var zp = 1, Hp = 2;
function kp(e, t, n, r) {
  var o = n.length, a = o;
  if (e == null)
    return !a;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++o < a; ) {
    s = n[o];
    var i = s[0], l = e[i], u = s[1];
    if (s[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var c = new nt(), f;
      if (!(f === void 0 ? Hr(u, l, zp | Hp, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Fi(e) {
  return e === e && !je(e);
}
function Vp(e) {
  for (var t = Bn(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Fi(o)];
  }
  return t;
}
function Li(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Kp(e) {
  var t = Vp(e);
  return t.length == 1 && t[0][2] ? Li(t[0][0], t[0][1]) : function(n) {
    return n === e || kp(n, e, t);
  };
}
function qp(e, t) {
  return e != null && t in Object(e);
}
function Gp(e, t, n) {
  t = zr(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Wn(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Yo(o) && jr(s, o) && (Le(e) || Sn(e)));
}
function Ni(e, t) {
  return e != null && Gp(e, t, qp);
}
var Up = 1, Yp = 2;
function Xp(e, t) {
  return Qo(e) && Fi(t) ? Li(Wn(e), t) : function(n) {
    var r = Sr(n, e);
    return r === void 0 && r === t ? Ni(n, e) : Hr(t, r, Up | Yp);
  };
}
function Zp(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Jp(e) {
  return function(t) {
    return ta(t, e);
  };
}
function Qp(e) {
  return Qo(e) ? Zp(Wn(e)) : Jp(e);
}
function ev(e) {
  return typeof e == "function" ? e : e == null ? Ko : typeof e == "object" ? Le(e) ? Xp(e[0], e[1]) : Kp(e) : Qp(e);
}
function tv(e) {
  return function(t, n, r) {
    for (var o = -1, a = Object(t), s = r(t), i = s.length; i--; ) {
      var l = s[++o];
      if (n(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var _i = tv();
function nv(e, t) {
  return e && _i(e, t, Bn);
}
function rv(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!an(n))
      return e(n, r);
    for (var o = n.length, a = -1, s = Object(n); ++a < o && r(s[a], a, s) !== !1; )
      ;
    return n;
  };
}
var ov = rv(nv), no = function() {
  return rt.Date.now();
}, av = "Expected a function", sv = Math.max, iv = Math.min;
function Tr(e, t, n) {
  var r, o, a, s, i, l, u = 0, c = !1, f = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(av);
  t = za(t) || 0, je(n) && (c = !!n.leading, f = "maxWait" in n, a = f ? sv(za(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v);
  function m(C) {
    var S = r, A = o;
    return r = o = void 0, u = C, s = e.apply(A, S), s;
  }
  function d(C) {
    return u = C, i = setTimeout(g, t), c ? m(C) : s;
  }
  function p(C) {
    var S = C - l, A = C - u, $ = t - S;
    return f ? iv($, a - A) : $;
  }
  function y(C) {
    var S = C - l, A = C - u;
    return l === void 0 || S >= t || S < 0 || f && A >= a;
  }
  function g() {
    var C = no();
    if (y(C))
      return b(C);
    i = setTimeout(g, p(C));
  }
  function b(C) {
    return i = void 0, v && r ? m(C) : (r = o = void 0, s);
  }
  function w() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function h() {
    return i === void 0 ? s : b(no());
  }
  function E() {
    var C = no(), S = y(C);
    if (r = arguments, o = this, l = C, S) {
      if (i === void 0)
        return d(l);
      if (f)
        return clearTimeout(i), i = setTimeout(g, t), m(l);
    }
    return i === void 0 && (i = setTimeout(g, t)), s;
  }
  return E.cancel = w, E.flush = h, E;
}
function yo(e, t, n) {
  (n !== void 0 && !Mn(e[t], n) || n === void 0 && !(t in e)) && Go(e, t, n);
}
function lv(e) {
  return it(e) && an(e);
}
function bo(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function uv(e) {
  return In(e, jn(e));
}
function cv(e, t, n, r, o, a, s) {
  var i = bo(e, n), l = bo(t, n), u = s.get(l);
  if (u) {
    yo(e, n, u);
    return;
  }
  var c = a ? a(i, l, n + "", e, t, s) : void 0, f = c === void 0;
  if (f) {
    var v = Le(l), m = !v && En(l), d = !v && !m && Jo(l);
    c = l, v || m || d ? Le(i) ? c = i : lv(i) ? c = ci(i) : m ? (f = !1, c = Ci(l, !0)) : d ? (f = !1, c = Ti(l, !0)) : c = [] : If(l) || Sn(l) ? (c = i, Sn(i) ? c = uv(i) : (!je(i) || qo(i)) && (c = xi(l))) : f = !1;
  }
  f && (s.set(l, c), o(c, l, r, a, s), s.delete(l)), yo(e, n, c);
}
function Mi(e, t, n, r, o) {
  e !== t && _i(t, function(a, s) {
    if (o || (o = new nt()), je(a))
      cv(e, t, s, n, Mi, r, o);
    else {
      var i = r ? r(bo(e, s), a, s + "", e, t, o) : void 0;
      i === void 0 && (i = a), yo(e, s, i);
    }
  }, jn);
}
function fv(e, t) {
  var n = -1, r = an(e) ? Array(e.length) : [];
  return ov(e, function(o, a, s) {
    r[++n] = t(o, a, s);
  }), r;
}
function dv(e, t) {
  var n = Le(e) ? li : fv;
  return n(e, ev(t));
}
function pv(e, t) {
  return yi(dv(e, t));
}
function wo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ii(e, t) {
  return Hr(e, t);
}
function kr(e) {
  return e == null;
}
function vv(e) {
  return e === void 0;
}
var hv = nc(function(e, t, n) {
  Mi(e, t, n);
});
function Bi(e, t, n, r) {
  if (!je(e))
    return e;
  t = zr(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Wn(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var c = i[l];
      u = void 0, u === void 0 && (u = je(c) ? c : jr(t[o + 1]) ? [] : {});
    }
    Uo(i, l, u), i = i[l];
  }
  return e;
}
function gv(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = ta(e, s);
    n(i, s) && Bi(a, zr(s, e), i);
  }
  return a;
}
function mv(e, t) {
  return gv(e, t, function(n, r) {
    return Ni(e, r);
  });
}
var ji = Rf(function(e, t) {
  return e == null ? {} : mv(e, t);
});
function yv(e, t, n) {
  return e == null ? e : Bi(e, t, n);
}
/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const xr = () => {
}, bv = Object.prototype.hasOwnProperty, Bt = (e, t) => bv.call(e, t), bt = Array.isArray, vt = (e) => typeof e == "function", Ye = (e) => typeof e == "string", jt = (e) => e !== null && typeof e == "object", xn = (e) => e === void 0, lt = (e) => typeof e == "boolean", Fe = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Co = (e) => kr(e), wv = (e) => Ye(e) ? !Number.isNaN(Number(e)) : !1, vs = (e) => Object.keys(e), cr = (e, t, n) => ({
  get value() {
    return Sr(e, t, n);
  },
  set value(r) {
    yv(e, t, r);
  }
}), Wi = "__gpPropKey", Z = (e) => e, Cv = (e) => jt(e) && !!e[Wi], Vr = (e, t) => {
  if (!jt(e) || Cv(e)) return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let c = !1, f = [];
      if (n && (f = Array.from(n), Bt(e, "default") && f.push(o), c || (c = f.includes(u))), s && (c || (c = s(u))), !c && f.length > 0) {
        const v = [...new Set(f)].map((m) => JSON.stringify(m)).join(", ");
        Yl(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(u)}`);
      }
      return c;
    } : void 0,
    [Wi]: !0
  };
  return Bt(e, "default") && (l.default = o), l;
}, me = (e) => wo(
  Object.entries(e).map(([t, n]) => [
    t,
    Vr(n, t)
  ])
);
/*! Element Plus Icons Vue v2.3.1 */
var Sv = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ev = Sv, Ov = /* @__PURE__ */ Y({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), Di = Ov, Tv = /* @__PURE__ */ Y({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), xv = Tv, Av = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), $v = Av, Pv = /* @__PURE__ */ Y({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Rv = Pv, Fv = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Lv = Fv, Nv = /* @__PURE__ */ Y({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), _v = Nv, Mv = /* @__PURE__ */ Y({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (I(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ne("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Iv = Mv;
const So = Z([
  String,
  Object,
  Function
]), hs = {
  success: _v,
  warning: Iv,
  error: $v,
  info: Rv
}, Et = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Bv = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Kr = (e) => (e.install = xr, e), jv = (e) => e;
class zi extends Error {
  constructor(t) {
    super(t), this.name = "GoParadoxError";
  }
}
function sa(e, t) {
  throw new zi(`[${e}] ${t}`);
}
function Te(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Ye(e) ? new zi(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
function qr(e) {
  return Xl() ? (Zl(e), !0) : !1;
}
function Wt(e) {
  return typeof e == "function" ? e() : O(e);
}
const ge = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Wv = Object.prototype.toString, Dv = (e) => Wv.call(e) === "[object Object]", Xt = () => {
}, zv = /* @__PURE__ */ Hv();
function Hv() {
  var e, t;
  return ge && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function kv(e, t) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
function Vv(e, t = {}) {
  let n, r, o = Xt;
  const a = (i) => {
    clearTimeout(i), o(), o = Xt;
  };
  return (i) => {
    const l = Wt(e), u = Wt(t.maxWait);
    return n && a(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(i())) : new Promise((c, f) => {
      o = t.rejectOnCancel ? f : c, u && !r && (r = setTimeout(() => {
        n && a(n), r = null, c(i());
      }, u)), n = setTimeout(() => {
        r && a(r), r = null, c(i());
      }, l);
    });
  };
}
function Kv(e, t = 200, n = {}) {
  return kv(
    Vv(t, n),
    e
  );
}
function qv(e, t = 200, n = {}) {
  const r = x(e.value), o = Kv(() => {
    r.value = e.value;
  }, t, n);
  return k(e, () => o()), r;
}
function Gv(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = x(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    o.value = !1, s();
  }
  function l(...u) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, Wt(t));
  }
  return r && (o.value = !0, ge && l()), qr(i), {
    isPending: ti(o),
    start: l,
    stop: i
  };
}
const ia = ge ? window : void 0;
function ht(e) {
  var t;
  const n = Wt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function yt(...e) {
  let t, n, r, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = ia) : [t, n, r, o] = e, !t)
    return Xt;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((c) => c()), a.length = 0;
  }, i = (c, f, v, m) => (c.addEventListener(f, v, m), () => c.removeEventListener(f, v, m)), l = k(
    () => [ht(t), Wt(o)],
    ([c, f]) => {
      if (s(), !c)
        return;
      const v = Dv(f) ? { ...f } : f;
      a.push(
        ...n.flatMap((m) => r.map((d) => i(c, m, d, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), s();
  };
  return qr(u), u;
}
let gs = !1;
function Uv(e, t, n = {}) {
  const { window: r = ia, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return Xt;
  zv && !gs && (gs = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Xt)), r.document.documentElement.addEventListener("click", Xt));
  let i = !0;
  const l = (m) => Wt(o).some((d) => {
    if (typeof d == "string")
      return Array.from(r.document.querySelectorAll(d)).some((p) => p === m.target || m.composedPath().includes(p));
    {
      const p = ht(d);
      return p && (m.target === p || m.composedPath().includes(p));
    }
  }), u = (m) => {
    const d = ht(e);
    if (!(!d || d === m.target || m.composedPath().includes(d))) {
      if (m.detail === 0 && (i = !l(m)), !i) {
        i = !0;
        return;
      }
      t(m);
    }
  };
  let c = !1;
  const f = [
    yt(r, "click", (m) => {
      c || (c = !0, setTimeout(() => {
        c = !1;
      }, 0), u(m));
    }, { passive: !0, capture: a }),
    yt(r, "pointerdown", (m) => {
      const d = ht(e);
      i = !l(m) && !!(d && !m.composedPath().includes(d));
    }, { passive: !0 }),
    s && yt(r, "blur", (m) => {
      setTimeout(() => {
        var d;
        const p = ht(e);
        ((d = r.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(p != null && p.contains(r.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Yv() {
  const e = x(!1), t = ue();
  return t && xe(() => {
    e.value = !0;
  }, t), e;
}
function Xv(e) {
  const t = Yv();
  return T(() => (t.value, !!e()));
}
function An(e, t, n = {}) {
  const { window: r = ia, ...o } = n;
  let a;
  const s = Xv(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, l = T(() => {
    const f = Wt(e);
    return Array.isArray(f) ? f.map((v) => ht(v)) : [ht(f)];
  }), u = k(
    l,
    (f) => {
      if (i(), s.value && r) {
        a = new ResizeObserver(t);
        for (const v of f)
          v && a.observe(v, o);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), u();
  };
  return qr(c), {
    isSupported: s,
    stop: c
  };
}
const Zv = "utils/dom/style", Hi = (e = "") => e.split(" ").filter((t) => !!t.trim()), dn = (e, t) => {
  if (!e || !t) return !1;
  if (t.includes(" ")) throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Ar = (e, t) => {
  !e || !t.trim() || e.classList.add(...Hi(t));
}, $n = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Hi(t));
};
function $r(e, t = "px") {
  if (!e) return "";
  if (Fe(e) || wv(e))
    return `${e}${t}`;
  if (Ye(e))
    return e;
  Te(Zv, `invalid value: ${e}`);
}
const pt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
}, Jv = (e) => ge ? window.requestAnimationFrame(e) : setTimeout(e, 16), la = ["", "default", "small", "large"], Pn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Gr = "update:modelValue", Dn = Vr({
  type: String,
  values: la,
  required: !1
}), ki = Symbol("size"), Qv = () => {
  const e = G(ki, {});
  return T(() => O(e.size) || "");
}, fr = "gp", eh = "is-", Rt = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Vi = Symbol("namespaceContextKey"), ua = (e) => {
  const t = e || (ue() ? G(Vi, x(fr)) : x(fr));
  return T(() => O(t) || fr);
}, oe = (e, t) => {
  const n = ua(t);
  return {
    namespace: n,
    b: (p = "") => Rt(n.value, e, p, "", ""),
    e: (p) => p ? Rt(n.value, e, "", p, "") : "",
    m: (p) => p ? Rt(n.value, e, "", "", p) : "",
    be: (p, y) => p && y ? Rt(n.value, e, p, y, "") : "",
    em: (p, y) => p && y ? Rt(n.value, e, "", p, y) : "",
    bm: (p, y) => p && y ? Rt(n.value, e, p, "", y) : "",
    bem: (p, y, g) => p && y && g ? Rt(n.value, e, p, y, g) : "",
    is: (p, ...y) => {
      const g = y.length >= 1 ? y[0] : !0;
      return p && g ? `${eh}${p}` : "";
    },
    cssVar: (p) => {
      const y = {};
      for (const g in p)
        p[g] && (y[`--${n.value}-${g}`] = p[g]);
      return y;
    },
    cssVarName: (p) => `--${n.value}-${p}`,
    cssVarBlock: (p) => {
      const y = {};
      for (const g in p)
        p[g] && (y[`--${n.value}-${e}-${g}`] = p[g]);
      return y;
    },
    cssVarBlockName: (p) => `--${n.value}-${e}-${p}`
  };
}, ro = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, s) => {
  k(
    () => O(s),
    (i) => {
      i && Te(
        n,
        `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead. For more detail, please visit: ${o}`
      );
    },
    {
      immediate: !0
    }
  );
}, th = Symbol("emptyValuesContextKey"), nh = me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    defualt: void 0,
    validator: (e) => vt(e) ? !e() : !e
  }
}), ms = {
  current: 0
}, ys = x(0), Ki = 2e3, bs = Symbol("gpZIndexContextKey"), qi = Symbol("zIndexContextKey"), Gi = (e) => {
  const t = ue() ? G(bs, ms) : ms, n = e || (ue() ? G(qi, void 0) : void 0), r = T(() => {
    const s = O(n);
    return Fe(s) ? s : Ki;
  }), o = T(() => r.value + ys.value), a = () => (t.current++, ys.value = t.current, o.value);
  return !ge && !G(bs) && Te("ZIndexInjection", "Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed"), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, Eo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, rh = Symbol("gpIdInjection"), Ui = () => ue() ? G(rh, Eo) : Eo, ca = (e) => {
  const t = Ui();
  !ge && t === Eo && Te("useId", "Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed");
  const n = ua();
  return T(
    () => O(e) || `${n.value}-id-${t.prefix}-${t.current++}`
  );
}, Yi = (e) => {
  const t = ue();
  return T(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, oh = me({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), zn = (e) => ji(oh, e), ah = Vr({
  type: Z(Boolean),
  default: null
}), sh = Vr({
  type: Z(Function)
}), ih = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: ah,
    [n]: sh
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: c,
      onHide: f
    }) => {
      const v = ue(), { emit: m } = v, d = v.props, p = T(
        () => vt(d[n])
      ), y = T(() => d[e] === null), g = (S) => {
        s.value !== !0 && (s.value = !0, i && (i.value = S), vt(c) && c(S));
      }, b = (S) => {
        s.value !== !1 && (s.value = !1, i && (i.value = S), vt(f) && f(S));
      }, w = (S) => {
        if (d.disabled === !0 || vt(u) && !u())
          return;
        const A = p.value && ge;
        A && m(t, !0), (y.value || !A) && g(S);
      }, h = (S) => {
        if (d.disabled === !0 || !ge) return;
        const A = p.value && ge;
        A && m(t, !1), (y.value || !A) && b(S);
      }, E = (S) => {
        lt(S) && (d.disabled && S ? p.value && m(t, !1) : s.value !== S && (S ? g() : b()));
      }, C = () => {
        s.value ? h() : w();
      };
      return k(() => d[e], E), l && v.appContext.config.globalProperties.$route !== void 0 && k(
        () => ({
          ...v.proxy.$route
        }),
        () => {
          l.value && s.value && h();
        }
      ), xe(() => {
        E(d[e]);
      }), {
        hide: h,
        show: w,
        toggle: C,
        hasUpdateHandler: p
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, Xi = () => {
  const e = ua(), t = Ui(), n = T(() => `${e.value}-popper-container-${t.prefix}`), r = T(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, lh = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, uh = () => {
  const { id: e, selector: t } = Xi();
  return zo(() => {
    ge && (process.env.NODE_ENV === "test" || !document.body.querySelector(t.value)) && lh(e.value);
  }), {
    id: e,
    selector: t
  };
};
function ws() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return qr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const ch = me({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), fh = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = ws(), {
    registerTimeout: s,
    cancelTimeout: i
  } = ws();
  return {
    onOpen: (c) => {
      a(() => {
        r(c);
        const f = O(n);
        Fe(f) && f > 0 && s(() => {
          o(c);
        }, f);
      }, O(e));
    },
    onClose: (c) => {
      i(), a(() => {
        o(c);
      }, O(t));
    }
  };
};
var Me = "top", Xe = "bottom", Ze = "right", Ie = "left", fa = "auto", Hn = [Me, Xe, Ze, Ie], Jt = "start", Rn = "end", dh = "clippingParents", Zi = "viewport", fn = "popper", ph = "reference", Cs = /* @__PURE__ */ Hn.reduce(function(e, t) {
  return e.concat([t + "-" + Jt, t + "-" + Rn]);
}, []), da = /* @__PURE__ */ [].concat(Hn, [fa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Jt, t + "-" + Rn]);
}, []), vh = "beforeRead", hh = "read", gh = "afterRead", mh = "beforeMain", yh = "main", bh = "afterMain", wh = "beforeWrite", Ch = "write", Sh = "afterWrite", Eh = [vh, hh, gh, mh, yh, bh, wh, Ch, Sh];
function ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function De(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Dt(e) {
  var t = De(e).Element;
  return e instanceof t || e instanceof Element;
}
function qe(e) {
  var t = De(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function pa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = De(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Oh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !qe(a) || !ut(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Th(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !qe(o) || !ut(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const xh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Oh,
  effect: Th,
  requires: ["computeStyles"]
};
function st(e) {
  return e.split("-")[0];
}
var Mt = Math.max, Pr = Math.min, Qt = Math.round;
function Oo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ji() {
  return !/^((?!chrome|android).)*safari/i.test(Oo());
}
function en(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && qe(e) && (o = e.offsetWidth > 0 && Qt(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Qt(r.height) / e.offsetHeight || 1);
  var s = Dt(e) ? De(e) : window, i = s.visualViewport, l = !Ji() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, c = (r.top + (l && i ? i.offsetTop : 0)) / a, f = r.width / o, v = r.height / a;
  return {
    width: f,
    height: v,
    top: c,
    right: u + f,
    bottom: c + v,
    left: u,
    x: u,
    y: c
  };
}
function va(e) {
  var t = en(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Qi(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && pa(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function wt(e) {
  return De(e).getComputedStyle(e);
}
function Ah(e) {
  return ["table", "td", "th"].indexOf(ut(e)) >= 0;
}
function $t(e) {
  return ((Dt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ur(e) {
  return ut(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (pa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $t(e)
  );
}
function Ss(e) {
  return !qe(e) || // https://github.com/popperjs/popper-core/issues/837
  wt(e).position === "fixed" ? null : e.offsetParent;
}
function $h(e) {
  var t = /firefox/i.test(Oo()), n = /Trident/i.test(Oo());
  if (n && qe(e)) {
    var r = wt(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Ur(e);
  for (pa(o) && (o = o.host); qe(o) && ["html", "body"].indexOf(ut(o)) < 0; ) {
    var a = wt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kn(e) {
  for (var t = De(e), n = Ss(e); n && Ah(n) && wt(n).position === "static"; )
    n = Ss(n);
  return n && (ut(n) === "html" || ut(n) === "body" && wt(n).position === "static") ? t : n || $h(e) || t;
}
function ha(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gn(e, t, n) {
  return Mt(e, Pr(t, n));
}
function Ph(e, t, n) {
  var r = gn(e, t, n);
  return r > n ? n : r;
}
function el() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tl(e) {
  return Object.assign({}, el(), e);
}
function nl(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Rh = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, tl(typeof t != "number" ? t : nl(t, Hn));
};
function Fh(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = st(n.placement), l = ha(i), u = [Ie, Ze].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !s)) {
    var f = Rh(o.padding, n), v = va(a), m = l === "y" ? Me : Ie, d = l === "y" ? Xe : Ze, p = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], y = s[l] - n.rects.reference[l], g = kn(a), b = g ? l === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, w = p / 2 - y / 2, h = f[m], E = b - v[c] - f[d], C = b / 2 - v[c] / 2 + w, S = gn(h, C, E), A = l;
    n.modifiersData[r] = (t = {}, t[A] = S, t.centerOffset = S - C, t);
  }
}
function Lh(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Qi(t.elements.popper, o) && (t.elements.arrow = o));
}
const Nh = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Fh,
  effect: Lh,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function tn(e) {
  return e.split("-")[1];
}
var _h = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Mh(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Qt(n * o) / o || 0,
    y: Qt(r * o) / o || 0
  };
}
function Es(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, f = e.isFixed, v = s.x, m = v === void 0 ? 0 : v, d = s.y, p = d === void 0 ? 0 : d, y = typeof c == "function" ? c({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = y.x, p = y.y;
  var g = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), w = Ie, h = Me, E = window;
  if (u) {
    var C = kn(n), S = "clientHeight", A = "clientWidth";
    if (C === De(n) && (C = $t(n), wt(C).position !== "static" && i === "absolute" && (S = "scrollHeight", A = "scrollWidth")), C = C, o === Me || (o === Ie || o === Ze) && a === Rn) {
      h = Xe;
      var $ = f && C === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[S]
      );
      p -= $ - r.height, p *= l ? 1 : -1;
    }
    if (o === Ie || (o === Me || o === Xe) && a === Rn) {
      w = Ze;
      var F = f && C === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[A]
      );
      m -= F - r.width, m *= l ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: i
  }, u && _h), N = c === !0 ? Mh({
    x: m,
    y: p
  }, De(n)) : {
    x: m,
    y: p
  };
  if (m = N.x, p = N.y, l) {
    var W;
    return Object.assign({}, _, (W = {}, W[h] = b ? "0" : "", W[w] = g ? "0" : "", W.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", W));
  }
  return Object.assign({}, _, (t = {}, t[h] = b ? p + "px" : "", t[w] = g ? m + "px" : "", t.transform = "", t));
}
function Ih(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = {
    placement: st(t.placement),
    variation: tn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Es(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Es(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Bh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ih,
  data: {}
};
var tr = {
  passive: !0
};
function jh(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = De(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, tr);
  }), i && l.addEventListener("resize", n.update, tr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, tr);
    }), i && l.removeEventListener("resize", n.update, tr);
  };
}
const Wh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jh,
  data: {}
};
var Dh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function dr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dh[t];
  });
}
var zh = {
  start: "end",
  end: "start"
};
function Os(e) {
  return e.replace(/start|end/g, function(t) {
    return zh[t];
  });
}
function ga(e) {
  var t = De(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ma(e) {
  return en($t(e)).left + ga(e).scrollLeft;
}
function Hh(e, t) {
  var n = De(e), r = $t(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Ji();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + ma(e),
    y: l
  };
}
function kh(e) {
  var t, n = $t(e), r = ga(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Mt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Mt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + ma(e), l = -r.scrollTop;
  return wt(o || n).direction === "rtl" && (i += Mt(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function ya(e) {
  var t = wt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function rl(e) {
  return ["html", "body", "#document"].indexOf(ut(e)) >= 0 ? e.ownerDocument.body : qe(e) && ya(e) ? e : rl(Ur(e));
}
function mn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = rl(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = De(r), s = o ? [a].concat(a.visualViewport || [], ya(r) ? r : []) : r, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(mn(Ur(s)))
  );
}
function To(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Vh(e, t) {
  var n = en(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ts(e, t, n) {
  return t === Zi ? To(Hh(e, n)) : Dt(t) ? Vh(t, n) : To(kh($t(e)));
}
function Kh(e) {
  var t = mn(Ur(e)), n = ["absolute", "fixed"].indexOf(wt(e).position) >= 0, r = n && qe(e) ? kn(e) : e;
  return Dt(r) ? t.filter(function(o) {
    return Dt(o) && Qi(o, r) && ut(o) !== "body";
  }) : [];
}
function qh(e, t, n, r) {
  var o = t === "clippingParents" ? Kh(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var c = Ts(e, u, r);
    return l.top = Mt(c.top, l.top), l.right = Pr(c.right, l.right), l.bottom = Pr(c.bottom, l.bottom), l.left = Mt(c.left, l.left), l;
  }, Ts(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ol(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? st(r) : null, a = r ? tn(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Me:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Xe:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ze:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Ie:
      l = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? ha(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Jt:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Rn:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Fn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? dh : i, u = n.rootBoundary, c = u === void 0 ? Zi : u, f = n.elementContext, v = f === void 0 ? fn : f, m = n.altBoundary, d = m === void 0 ? !1 : m, p = n.padding, y = p === void 0 ? 0 : p, g = tl(typeof y != "number" ? y : nl(y, Hn)), b = v === fn ? ph : fn, w = e.rects.popper, h = e.elements[d ? b : v], E = qh(Dt(h) ? h : h.contextElement || $t(e.elements.popper), l, c, s), C = en(e.elements.reference), S = ol({
    reference: C,
    element: w,
    strategy: "absolute",
    placement: o
  }), A = To(Object.assign({}, w, S)), $ = v === fn ? A : C, F = {
    top: E.top - $.top + g.top,
    bottom: $.bottom - E.bottom + g.bottom,
    left: E.left - $.left + g.left,
    right: $.right - E.right + g.right
  }, _ = e.modifiersData.offset;
  if (v === fn && _) {
    var N = _[o];
    Object.keys(F).forEach(function(W) {
      var K = [Ze, Xe].indexOf(W) >= 0 ? 1 : -1, R = [Me, Xe].indexOf(W) >= 0 ? "y" : "x";
      F[W] += N[R] * K;
    });
  }
  return F;
}
function Gh(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? da : l, c = tn(r), f = c ? i ? Cs : Cs.filter(function(d) {
    return tn(d) === c;
  }) : Hn, v = f.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  v.length === 0 && (v = f);
  var m = v.reduce(function(d, p) {
    return d[p] = Fn(e, {
      placement: p,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[st(p)], d;
  }, {});
  return Object.keys(m).sort(function(d, p) {
    return m[d] - m[p];
  });
}
function Uh(e) {
  if (st(e) === fa)
    return [];
  var t = dr(e);
  return [Os(e), t, Os(t)];
}
function Yh(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, d = m === void 0 ? !0 : m, p = n.allowedAutoPlacements, y = t.options.placement, g = st(y), b = g === y, w = l || (b || !d ? [dr(y)] : Uh(y)), h = [y].concat(w).reduce(function(ce, de) {
      return ce.concat(st(de) === fa ? Gh(t, {
        placement: de,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: d,
        allowedAutoPlacements: p
      }) : de);
    }, []), E = t.rects.reference, C = t.rects.popper, S = /* @__PURE__ */ new Map(), A = !0, $ = h[0], F = 0; F < h.length; F++) {
      var _ = h[F], N = st(_), W = tn(_) === Jt, K = [Me, Xe].indexOf(N) >= 0, R = K ? "width" : "height", P = Fn(t, {
        placement: _,
        boundary: c,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), j = K ? W ? Ze : Ie : W ? Xe : Me;
      E[R] > C[R] && (j = dr(j));
      var V = dr(j), L = [];
      if (a && L.push(P[N] <= 0), i && L.push(P[j] <= 0, P[V] <= 0), L.every(function(ce) {
        return ce;
      })) {
        $ = _, A = !1;
        break;
      }
      S.set(_, L);
    }
    if (A)
      for (var X = d ? 3 : 1, be = function(de) {
        var ve = h.find(function($e) {
          var M = S.get($e);
          if (M)
            return M.slice(0, de).every(function(z) {
              return z;
            });
        });
        if (ve)
          return $ = ve, "break";
      }, Q = X; Q > 0; Q--) {
        var fe = be(Q);
        if (fe === "break") break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const Xh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Yh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function xs(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function As(e) {
  return [Me, Ze, Xe, Ie].some(function(t) {
    return e[t] >= 0;
  });
}
function Zh(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Fn(t, {
    elementContext: "reference"
  }), i = Fn(t, {
    altBoundary: !0
  }), l = xs(s, r), u = xs(i, o, a), c = As(l), f = As(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const Jh = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Zh
};
function Qh(e, t, n) {
  var r = st(e), o = [Ie, Me].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Ie, Ze].indexOf(r) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function eg(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = da.reduce(function(c, f) {
    return c[f] = Qh(f, t.rects, a), c;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const tg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: eg
};
function ng(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ol({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const rg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ng,
  data: {}
};
function og(e) {
  return e === "x" ? "y" : "x";
}
function ag(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, f = n.padding, v = n.tether, m = v === void 0 ? !0 : v, d = n.tetherOffset, p = d === void 0 ? 0 : d, y = Fn(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), g = st(t.placement), b = tn(t.placement), w = !b, h = ha(g), E = og(h), C = t.modifiersData.popperOffsets, S = t.rects.reference, A = t.rects.popper, $ = typeof p == "function" ? p(Object.assign({}, t.rects, {
    placement: t.placement
  })) : p, F = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (C) {
    if (a) {
      var W, K = h === "y" ? Me : Ie, R = h === "y" ? Xe : Ze, P = h === "y" ? "height" : "width", j = C[h], V = j + y[K], L = j - y[R], X = m ? -A[P] / 2 : 0, be = b === Jt ? S[P] : A[P], Q = b === Jt ? -A[P] : -S[P], fe = t.elements.arrow, ce = m && fe ? va(fe) : {
        width: 0,
        height: 0
      }, de = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : el(), ve = de[K], $e = de[R], M = gn(0, S[P], ce[P]), z = w ? S[P] / 2 - X - M - ve - F.mainAxis : be - M - ve - F.mainAxis, ye = w ? -S[P] / 2 + X + M + $e + F.mainAxis : Q + M + $e + F.mainAxis, he = t.elements.arrow && kn(t.elements.arrow), He = he ? h === "y" ? he.clientTop || 0 : he.clientLeft || 0 : 0, Je = (W = _ == null ? void 0 : _[h]) != null ? W : 0, Xr = j + z - Je - He, Kn = j + ye - Je, qn = gn(m ? Pr(V, Xr) : V, j, m ? Mt(L, Kn) : L);
      C[h] = qn, N[h] = qn - j;
    }
    if (i) {
      var Gn, Zr = h === "x" ? Me : Ie, Jr = h === "x" ? Xe : Ze, ft = C[E], Kt = E === "y" ? "height" : "width", Un = ft + y[Zr], Yn = ft - y[Jr], un = [Me, Ie].indexOf(g) !== -1, Xn = (Gn = _ == null ? void 0 : _[E]) != null ? Gn : 0, Zn = un ? Un : ft - S[Kt] - A[Kt] - Xn + F.altAxis, Jn = un ? ft + S[Kt] + A[Kt] - Xn - F.altAxis : Yn, Qn = m && un ? Ph(Zn, ft, Jn) : gn(m ? Zn : Un, ft, m ? Jn : Yn);
      C[E] = Qn, N[E] = Qn - ft;
    }
    t.modifiersData[r] = N;
  }
}
const sg = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ag,
  requiresIfExists: ["offset"]
};
function ig(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function lg(e) {
  return e === De(e) || !qe(e) ? ga(e) : ig(e);
}
function ug(e) {
  var t = e.getBoundingClientRect(), n = Qt(t.width) / e.offsetWidth || 1, r = Qt(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function cg(e, t, n) {
  n === void 0 && (n = !1);
  var r = qe(t), o = qe(t) && ug(t), a = $t(t), s = en(e, o, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ut(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ya(a)) && (i = lg(t)), qe(t) ? (l = en(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = ma(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function fg(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function dg(e) {
  var t = fg(e);
  return Eh.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function pg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vg(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var $s = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ps() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function hg(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? $s : o;
  return function(i, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $s, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], v = !1, m = {
      state: c,
      setOptions: function(g) {
        var b = typeof g == "function" ? g(c.options) : g;
        p(), c.options = Object.assign({}, a, c.options, b), c.scrollParents = {
          reference: Dt(i) ? mn(i) : i.contextElement ? mn(i.contextElement) : [],
          popper: mn(l)
        };
        var w = dg(vg([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(h) {
          return h.enabled;
        }), d(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var g = c.elements, b = g.reference, w = g.popper;
          if (Ps(b, w)) {
            c.rects = {
              reference: cg(b, kn(w), c.options.strategy === "fixed"),
              popper: va(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(F) {
              return c.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var h = 0; h < c.orderedModifiers.length; h++) {
              if (c.reset === !0) {
                c.reset = !1, h = -1;
                continue;
              }
              var E = c.orderedModifiers[h], C = E.fn, S = E.options, A = S === void 0 ? {} : S, $ = E.name;
              typeof C == "function" && (c = C({
                state: c,
                options: A,
                name: $,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: pg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(c);
        });
      }),
      destroy: function() {
        p(), v = !0;
      }
    };
    if (!Ps(i, l))
      return m;
    m.setOptions(u).then(function(y) {
      !v && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function d() {
      c.orderedModifiers.forEach(function(y) {
        var g = y.name, b = y.options, w = b === void 0 ? {} : b, h = y.effect;
        if (typeof h == "function") {
          var E = h({
            state: c,
            name: g,
            instance: m,
            options: w
          }), C = function() {
          };
          f.push(E || C);
        }
      });
    }
    function p() {
      f.forEach(function(y) {
        return y();
      }), f = [];
    }
    return m;
  };
}
var gg = [Wh, rg, Bh, xh, tg, Xh, sg, Nh, Jh], mg = /* @__PURE__ */ hg({
  defaultModifiers: gg
});
const yg = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = l(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = T(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: v } = O(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...v || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Jl(), s = x({
    styles: {
      popper: {
        position: O(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return k(
    o,
    (u) => {
      const c = O(a);
      c && c.setOptions(u);
    },
    {
      deep: !0
    }
  ), k(
    [e, t],
    ([u, c]) => {
      i(), !(!u || !c) && (a.value = mg(
        u,
        c,
        O(o)
      ));
    }
  ), ze(() => {
    i();
  }), {
    state: T(() => {
      var u;
      return { ...((u = O(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: T(() => O(s).styles),
    attributes: T(() => O(s).attributes),
    update: () => {
      var u;
      return (u = O(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = O(a)) == null ? void 0 : u.forceUpdate();
    },
    // Preventing end users from modifying the instance.
    instanceRef: T(() => O(a))
  };
  function l(u) {
    const c = Object.keys(u.elements), f = wo(
      c.map(
        (m) => [m, u.styles[m] || {}]
      )
    ), v = wo(
      c.map(
        (m) => [m, u.attributes[m]]
      )
    );
    return {
      styles: f,
      attributes: v
    };
  }
}, al = Symbol("elForwardRef"), bg = (e) => {
  Ge(al, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, wg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
});
let Yt = [];
const Rs = (e) => {
  const t = e;
  t.key === Pn.esc && Yt.forEach(
    (n) => n(t)
  );
}, Cg = (e) => {
  xe(() => {
    Yt.length === 0 && document.addEventListener("keydown", Rs), ge && Yt.push(e);
  }), ze(() => {
    Yt = Yt.filter(
      (t) => t !== e
    ), Yt.length === 0 && ge && document.removeEventListener("keydown", Rs);
  });
}, sl = Symbol(), Rr = x();
function ba(e, t = void 0) {
  const n = ue() ? G(sl, Rr) : Rr;
  return e ? T(() => {
    var r;
    return ((r = n.value) == null ? void 0 : r[e]) ?? t;
  }) : n;
}
function Sg(e, t) {
  const n = ba(), r = oe(
    e,
    T(() => {
      var s;
      return ((s = n.value) == null ? void 0 : s.namespace) || fr;
    })
  ), o = Gi(
    T(() => {
      var s;
      return ((s = n.value) == null ? void 0 : s.zIndex) || Ki;
    })
  ), a = T(() => {
    var s;
    return O(t) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return il(T(() => O(n) || {})), {
    ns: r,
    // locale,
    zIndex: o,
    size: a
  };
}
const il = (e, t, n = !1) => {
  const r = !!ue(), o = r ? ba() : void 0, a = (t == null ? void 0 : t.provide) ?? (r ? Ge : void 0);
  if (!a) {
    Te(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()"
    );
    return;
  }
  const s = T(() => {
    const i = O(e);
    return o != null && o.value ? Eg(o.value, i) : i;
  });
  return a(sl, s), a(
    Vi,
    T(() => s.value.namespace)
  ), a(
    qi,
    T(() => s.value.zIndex)
  ), a(
    ki,
    {
      size: T(() => s.value.size || "")
    }
  ), a(
    th,
    T(() => ({
      emptyValues: s.value.emptyValues,
      valueOnClear: s.value.valueOnClear
    }))
  ), (n || !Rr.value) && (Rr.value = s.value), s;
}, Eg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...vs(e), ...vs(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Og = me({
  locale: {
    // type: definePropType<Language>(Object),
    type: String
  },
  size: Dn,
  button: {
    type: Z(Object)
  },
  experimentalFeatures: {
    type: Z(Object)
  },
  keybordNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: Z(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "gp"
  },
  ...nh
}), Qe = {}, Tg = Y({
  name: "ElConfigProvider",
  props: Og,
  setup(e, { slots: t }) {
    k(
      () => e.message,
      (r) => {
        Object.assign(Qe, r ?? {});
      },
      { immediate: !0, deep: !0 }
    );
    const n = il(e);
    return () => re(t, "default", { config: n == null ? void 0 : n.value });
  }
}), nw = Et(Tg), xg = Symbol("buttonGroupContextKey"), Ag = (e, t) => {
  const n = G(xg, void 0), r = ba("button"), o = x(!1), a = x(), s = Nr(), i = T(() => e.type || (n == null ? void 0 : n.type) || ""), l = T(
    () => {
      var v;
      return e.autoInsertSpace ?? ((v = r.value) == null ? void 0 : v.autoInsertSpace) ?? !1;
    }
  ), u = T(() => e.tag === "button" ? {
    ariaDisabled: o.value || e.loading,
    disabled: o.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), c = T(() => {
    var m;
    const v = (m = s.default) == null ? void 0 : m.call(s);
    if (l.value && (v == null ? void 0 : v.length) === 1) {
      const d = v[0];
      if ((d == null ? void 0 : d.type) === ni) {
        const p = d.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(p.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    // _size,
    _type: i,
    _ref: a,
    _props: u,
    shouldAddSpace: c,
    handleClick: (v) => {
      if (o.value || e.loading) {
        v.stopPropagation();
        return;
      }
      t("click", v);
    }
  };
}, $g = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  ""
], Pg = ["button", "submit", "reset"], Rg = me({
  size: Dn,
  disabled: Boolean,
  type: {
    type: String,
    values: $g,
    default: ""
  },
  icon: {
    type: So
  },
  nativeType: {
    type: String,
    values: Pg,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: So,
    default: () => "Loading"
  },
  palin: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Z([String, Object]),
    default: "button"
  }
}), Fg = {
  click: (e) => e instanceof MouseEvent
};
function Lg(e) {
  return oe("button"), T(() => {
    let t = {}, n = e.color;
    if (n) {
      const r = n.match(/var\((.*?)\)/);
      r && (n = window.getComputedStyle(document.documentElement).getPropertyValue(r[1]));
    }
    return t;
  });
}
const Ng = /* @__PURE__ */ Y({
  name: "GpButton",
  __name: "button",
  props: Rg,
  emits: Fg,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = Lg(r), s = oe("button"), { _ref: i, _type: l, _disabled: u, _props: c, shouldAddSpace: f, handleClick: v } = Ag(r, o), m = T(() => [
      s.b(),
      s.m(l.value),
      s.is("disabled", u.value),
      s.is("loading", r.loading),
      s.is("palin", r.palin),
      s.is("round", r.round),
      s.is("circle", r.circle),
      s.is("text", r.text),
      s.is("link", r.link),
      s.is("has-tag", r.bg)
    ]);
    return t({
      ref: i,
      type: l,
      disabled: u,
      // size: _size,
      shouldAddSpace: f
    }), (d, p) => (I(), we(Nn(d.tag), _r({
      ref_key: "_ref",
      ref: i
    }, O(c), {
      class: m.value,
      style: O(a),
      onClick: O(v)
    }), {
      default: le(() => [
        d.loading ? (I(), q(At, { key: 0 }, [
          d.$slots.loading ? re(d.$slots, "loading", { key: 0 }) : Ce("", !0)
        ], 64)) : Ce("", !0),
        d.$slots.default ? (I(), q("span", {
          key: 1,
          class: D({ [O(s).em("text", "expand")]: O(f) })
        }, [
          re(d.$slots, "default")
        ], 2)) : Ce("", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
}), rw = Et(Ng), ll = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: Dn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...zn(["ariaControls"])
}, ul = {
  [Gr]: (e) => Ye(e) || Fe(e) || lt(e),
  change: (e) => Ye(e) || Fe(e) || lt(e)
}, sn = Symbol("formContextKey"), zt = Symbol("formItemContextKey"), nn = (e, t = {}) => {
  const n = x(void 0), r = t.prop ? n : Yi("size"), o = t.global ? n : Qv(), a = t.form ? { size: void 0 } : G(sn, void 0), s = t.formItem ? { size: void 0 } : G(zt, void 0);
  return T(
    () => r.value || O(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || o.value || ""
  );
}, cl = (e) => {
  const t = Yi("disabled"), n = G(sn, void 0);
  return T(() => t.value || O(e) || (n == null ? void 0 : n.disabled) || !1);
}, ow = nn, aw = cl, wa = () => {
  const e = G(sn, void 0), t = G(zt, void 0);
  return {
    form: e,
    formItem: t
  };
}, fl = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = x(!1)), r || (r = x(!1));
  const o = x();
  let a;
  const s = T(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return xe(() => {
    a = k(
      [xt(e, "id"), n],
      ([i, l]) => {
        const u = i ?? (l ? void 0 : ca().value);
        u !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !l && u && t.addInputId(u)), o.value = u);
      },
      { immediate: !0 }
    );
  }), Mr(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, _g = me({
  size: {
    type: String,
    values: la
  },
  disabled: Boolean
}), Mg = me({
  ..._g,
  model: Object,
  rules: {
    type: Z(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    vlaues: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  validateOnRuleChage: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
}), Ig = {
  validate: (e, t, n) => (bt(e) || Ye(e)) && lt(t) && Ye(n)
}, Bg = "GpForm";
function jg() {
  const e = x([]), t = T(() => {
    if (!e.value.length) return "0";
    const a = Math.max(...e.value);
    return a ? `${a}px` : "";
  });
  function n(a) {
    const s = e.value.indexOf(a);
    return s === -1 && t.value === "0" && Te(Bg, `unexpected width ${a}`), s;
  }
  function r(a, s) {
    if (a && s) {
      const i = n(s);
      e.value.splice(i, 1, a);
    } else a && e.value.push(a);
  }
  function o(a) {
    const s = n(a);
    s !== -1 && e.value.splice(s, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: r,
    deregisterLabelWidth: o
  };
}
const nr = (e, t) => {
  const n = po(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, rr = "GpForm", Wg = /* @__PURE__ */ Y({
  name: rr,
  __name: "form",
  props: Mg,
  emits: Ig,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = [], s = nn(), i = oe("form"), l = T(() => {
      const { labelPosition: h, inline: E } = r;
      return [
        i.b(),
        i.m(s.value || "default"),
        {
          [i.m(`label-${h}`)]: h,
          [i.m("inline")]: E
        }
      ];
    }), u = (h) => a.find((E) => E.prop === h), c = (h) => {
      a.push(h);
    }, f = (h) => {
      h.prop && a.splice(a.indexOf(h), 1);
    }, v = (h = []) => {
      if (!r.model) {
        Te(rr, "model is required for resetFields to work.");
        return;
      }
      nr(a, h).forEach((E) => E.resetField());
    }, m = (h = []) => {
      nr(a, h).forEach((E) => E.clearValidate());
    }, d = T(() => {
      const h = !!r.model;
      return h || Te(rr, "model is required for resetFields to work."), h;
    }), p = (h) => {
      if (a.length === 0) return [];
      const E = nr(a, h);
      return E.length ? E : (Te(rr, "please pass correct props"), []);
    }, y = async (h) => b(void 0, h), g = async (h = []) => {
      if (!d.value) return !1;
      const E = p(h);
      if (E.length === 0) return !0;
      let C = {};
      for (const S of E)
        try {
          await S.validate("");
        } catch (A) {
          C = {
            ...C,
            ...A
          };
        }
      return Object.keys(C).length === 0 ? !0 : Promise.reject(C);
    }, b = async (h = [], E) => {
      const C = !vt(E);
      try {
        const S = await g(h);
        return S === !0 && await (E == null ? void 0 : E(S)), S;
      } catch (S) {
        if (S instanceof Error) throw S;
        const A = S;
        return r.scrollToError && w(Object.keys(A)[0]), await (E == null ? void 0 : E(!1, A)), C && Promise.reject(A);
      }
    }, w = (h) => {
      var C;
      const E = nr(a, h)[0];
      E && ((C = E.$el) == null || C.scrollIntoView(r.scrollIntoViewOptions));
    };
    return k(
      () => r.rules,
      () => {
        r.validateOnRuleChage && y().catch((h) => Te(h));
      },
      { deep: !0 }
    ), Ge(
      sn,
      Ho({
        ...Ir(r),
        emit: o,
        resetFields: v,
        clearValidate: m,
        validateField: b,
        getField: u,
        addField: c,
        removeField: f,
        ...jg()
      })
    ), t({
      validate: y,
      validateField: b,
      resetFields: v,
      clearValidate: m,
      scrollToField: w,
      fields: a
    }), (h, E) => (I(), q("form", {
      class: D(l.value)
    }, [
      re(h.$slots, "default")
    ], 2));
  }
});
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
function Dg(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ln(e, t);
}
function xo(e) {
  return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xo(e);
}
function Ln(e, t) {
  return Ln = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Ln(e, t);
}
function zg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function pr(e, t, n) {
  return zg() ? pr = Reflect.construct.bind() : pr = function(o, a, s) {
    var i = [null];
    i.push.apply(i, a);
    var l = Function.bind.apply(o, i), u = new l();
    return s && Ln(u, s.prototype), u;
  }, pr.apply(null, arguments);
}
function Hg(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ao(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ao = function(r) {
    if (r === null || !Hg(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return pr(r, arguments, xo(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ln(o, r);
  }, Ao(e);
}
var kg = /%[sdj%]/g, dl = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (dl = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function $o(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function We(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var s = e.replace(kg, function(i) {
      if (i === "%%")
        return "%";
      if (o >= a)
        return i;
      switch (i) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return i;
      }
    });
    return s;
  }
  return e;
}
function Vg(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Se(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Vg(t) && typeof e == "string" && !e);
}
function Kg(e, t, n) {
  var r = [], o = 0, a = e.length;
  function s(i) {
    r.push.apply(r, i || []), o++, o === a && n(r);
  }
  e.forEach(function(i) {
    t(i, s);
  });
}
function Fs(e, t, n) {
  var r = 0, o = e.length;
  function a(s) {
    if (s && s.length) {
      n(s);
      return;
    }
    var i = r;
    r = r + 1, i < o ? t(e[i], a) : n([]);
  }
  a([]);
}
function qg(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Ls = /* @__PURE__ */ function(e) {
  Dg(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(/* @__PURE__ */ Ao(Error));
function Gg(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(v, m) {
      var d = function(g) {
        return r(g), g.length ? m(new Ls(g, $o(g))) : v(o);
      }, p = qg(e);
      Fs(p, n, d);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var s = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], i = Object.keys(e), l = i.length, u = 0, c = [], f = new Promise(function(v, m) {
    var d = function(y) {
      if (c.push.apply(c, y), u++, u === l)
        return r(c), c.length ? m(new Ls(c, $o(c))) : v(o);
    };
    i.length || (r(c), v(o)), i.forEach(function(p) {
      var y = e[p];
      s.indexOf(p) !== -1 ? Fs(y, n, d) : Kg(y, n, d);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function Ug(e) {
  return !!(e && e.message !== void 0);
}
function Yg(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Ns(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Yg(t, e.fullFields) : r = t[n.field || e.fullField], Ug(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function _s(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = Nt({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var pl = function(t, n, r, o, a, s) {
  t.required && (!r.hasOwnProperty(t.field) || Se(n, s || t.type)) && o.push(We(a.messages.required, t.fullField));
}, Xg = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(We(a.messages.whitespace, t.fullField));
}, or, Zg = function() {
  if (or)
    return or;
  var e = "[a-fA-F\\d:]", t = function(h) {
    return h && h.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), s = new RegExp("^" + n + "$"), i = new RegExp("^" + o + "$"), l = function(h) {
    return h && h.exact ? a : new RegExp("(?:" + t(h) + n + t(h) + ")|(?:" + t(h) + o + t(h) + ")", "g");
  };
  l.v4 = function(w) {
    return w && w.exact ? s : new RegExp("" + t(w) + n + t(w), "g");
  }, l.v6 = function(w) {
    return w && w.exact ? i : new RegExp("" + t(w) + o + t(w), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = l.v4().source, v = l.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", d = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", g = '(?:[/?#][^\\s"]*)?', b = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + f + "|" + v + "|" + m + d + p + ")" + y + g;
  return or = new RegExp("(?:^" + b + "$)", "i"), or;
}, Ms = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, pn = {
  integer: function(t) {
    return pn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return pn.number(t) && !pn.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !pn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ms.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Zg());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ms.hex);
  }
}, Jg = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    pl(t, n, r, o, a);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], i = t.type;
  s.indexOf(i) > -1 ? pn[i](n) || o.push(We(a.messages.types[i], t.fullField, t.type)) : i && typeof n !== t.type && o.push(We(a.messages.types[i], t.fullField, t.type));
}, Qg = function(t, n, r, o, a) {
  var s = typeof t.len == "number", i = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, f = null, v = typeof n == "number", m = typeof n == "string", d = Array.isArray(n);
  if (v ? f = "number" : m ? f = "string" : d && (f = "array"), !f)
    return !1;
  d && (c = n.length), m && (c = n.replace(u, "_").length), s ? c !== t.len && o.push(We(a.messages[f].len, t.fullField, t.len)) : i && !l && c < t.min ? o.push(We(a.messages[f].min, t.fullField, t.min)) : l && !i && c > t.max ? o.push(We(a.messages[f].max, t.fullField, t.max)) : i && l && (c < t.min || c > t.max) && o.push(We(a.messages[f].range, t.fullField, t.min, t.max));
}, qt = "enum", em = function(t, n, r, o, a) {
  t[qt] = Array.isArray(t[qt]) ? t[qt] : [], t[qt].indexOf(n) === -1 && o.push(We(a.messages[qt], t.fullField, t[qt].join(", ")));
}, tm = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(We(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var s = new RegExp(t.pattern);
      s.test(n) || o.push(We(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, J = {
  required: pl,
  whitespace: Xg,
  type: Jg,
  range: Qg,
  enum: em,
  pattern: tm
}, nm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n, "string") && !t.required)
      return r();
    J.required(t, n, o, s, a, "string"), Se(n, "string") || (J.type(t, n, o, s, a), J.range(t, n, o, s, a), J.pattern(t, n, o, s, a), t.whitespace === !0 && J.whitespace(t, n, o, s, a));
  }
  r(s);
}, rm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && J.type(t, n, o, s, a);
  }
  r(s);
}, om = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (n === "" && (n = void 0), Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && (J.type(t, n, o, s, a), J.range(t, n, o, s, a));
  }
  r(s);
}, am = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && J.type(t, n, o, s, a);
  }
  r(s);
}, sm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), Se(n) || J.type(t, n, o, s, a);
  }
  r(s);
}, im = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && (J.type(t, n, o, s, a), J.range(t, n, o, s, a));
  }
  r(s);
}, lm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && (J.type(t, n, o, s, a), J.range(t, n, o, s, a));
  }
  r(s);
}, um = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (n == null && !t.required)
      return r();
    J.required(t, n, o, s, a, "array"), n != null && (J.type(t, n, o, s, a), J.range(t, n, o, s, a));
  }
  r(s);
}, cm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && J.type(t, n, o, s, a);
  }
  r(s);
}, fm = "enum", dm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a), n !== void 0 && J[fm](t, n, o, s, a);
  }
  r(s);
}, pm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n, "string") && !t.required)
      return r();
    J.required(t, n, o, s, a), Se(n, "string") || J.pattern(t, n, o, s, a);
  }
  r(s);
}, vm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n, "date") && !t.required)
      return r();
    if (J.required(t, n, o, s, a), !Se(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), J.type(t, l, o, s, a), l && J.range(t, l.getTime(), o, s, a);
    }
  }
  r(s);
}, hm = function(t, n, r, o, a) {
  var s = [], i = Array.isArray(n) ? "array" : typeof n;
  J.required(t, n, o, s, a, i), r(s);
}, oo = function(t, n, r, o, a) {
  var s = t.type, i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Se(n, s) && !t.required)
      return r();
    J.required(t, n, o, i, a, s), Se(n, s) || J.type(t, n, o, i, a);
  }
  r(i);
}, gm = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (Se(n) && !t.required)
      return r();
    J.required(t, n, o, s, a);
  }
  r(s);
}, yn = {
  string: nm,
  method: rm,
  number: om,
  boolean: am,
  regexp: sm,
  integer: im,
  float: lm,
  array: um,
  object: cm,
  enum: dm,
  pattern: pm,
  date: vm,
  url: oo,
  hex: oo,
  email: oo,
  required: hm,
  any: gm
};
function Po() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Ro = Po(), Vn = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Ro, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var s = r[a];
      o.rules[a] = Array.isArray(s) ? s : [s];
    });
  }, t.messages = function(r) {
    return r && (this._messages = _s(Po(), r)), this._messages;
  }, t.validate = function(r, o, a) {
    var s = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var i = r, l = o, u = a;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, i), Promise.resolve(i);
    function c(p) {
      var y = [], g = {};
      function b(h) {
        if (Array.isArray(h)) {
          var E;
          y = (E = y).concat.apply(E, h);
        } else
          y.push(h);
      }
      for (var w = 0; w < p.length; w++)
        b(p[w]);
      y.length ? (g = $o(y), u(y, g)) : u(null, i);
    }
    if (l.messages) {
      var f = this.messages();
      f === Ro && (f = Po()), _s(f, l.messages), l.messages = f;
    } else
      l.messages = this.messages();
    var v = {}, m = l.keys || Object.keys(this.rules);
    m.forEach(function(p) {
      var y = s.rules[p], g = i[p];
      y.forEach(function(b) {
        var w = b;
        typeof w.transform == "function" && (i === r && (i = Nt({}, i)), g = i[p] = w.transform(g)), typeof w == "function" ? w = {
          validator: w
        } : w = Nt({}, w), w.validator = s.getValidationMethod(w), w.validator && (w.field = p, w.fullField = w.fullField || p, w.type = s.getType(w), v[p] = v[p] || [], v[p].push({
          rule: w,
          value: g,
          source: i,
          field: p
        }));
      });
    });
    var d = {};
    return Gg(v, l, function(p, y) {
      var g = p.rule, b = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
      b = b && (g.required || !g.required && p.value), g.field = p.field;
      function w(C, S) {
        return Nt({}, S, {
          fullField: g.fullField + "." + C,
          fullFields: g.fullFields ? [].concat(g.fullFields, [C]) : [C]
        });
      }
      function h(C) {
        C === void 0 && (C = []);
        var S = Array.isArray(C) ? C : [C];
        !l.suppressWarning && S.length && e.warning("async-validator:", S), S.length && g.message !== void 0 && (S = [].concat(g.message));
        var A = S.map(Ns(g, i));
        if (l.first && A.length)
          return d[g.field] = 1, y(A);
        if (!b)
          y(A);
        else {
          if (g.required && !p.value)
            return g.message !== void 0 ? A = [].concat(g.message).map(Ns(g, i)) : l.error && (A = [l.error(g, We(l.messages.required, g.field))]), y(A);
          var $ = {};
          g.defaultField && Object.keys(p.value).map(function(N) {
            $[N] = g.defaultField;
          }), $ = Nt({}, $, p.rule.fields);
          var F = {};
          Object.keys($).forEach(function(N) {
            var W = $[N], K = Array.isArray(W) ? W : [W];
            F[N] = K.map(w.bind(null, N));
          });
          var _ = new e(F);
          _.messages(l.messages), p.rule.options && (p.rule.options.messages = l.messages, p.rule.options.error = l.error), _.validate(p.value, p.rule.options || l, function(N) {
            var W = [];
            A && A.length && W.push.apply(W, A), N && N.length && W.push.apply(W, N), y(W.length ? W : null);
          });
        }
      }
      var E;
      if (g.asyncValidator)
        E = g.asyncValidator(g, p.value, h, p.source, l);
      else if (g.validator) {
        try {
          E = g.validator(g, p.value, h, p.source, l);
        } catch (C) {
          console.error == null || console.error(C), l.suppressValidatorError || setTimeout(function() {
            throw C;
          }, 0), h(C.message);
        }
        E === !0 ? h() : E === !1 ? h(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : E instanceof Array ? h(E) : E instanceof Error && h(E.message);
      }
      E && E.then && E.then(function() {
        return h();
      }, function(C) {
        return h(C);
      });
    }, function(p) {
      c(p);
    }, i);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !yn.hasOwnProperty(r.type))
      throw new Error(We("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? yn.required : yn[this.getType(r)] || void 0;
  }, e;
}();
Vn.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  yn[t] = n;
};
Vn.warning = dl;
Vn.messages = Ro;
Vn.validators = yn;
const mm = [
  "",
  "error",
  "validating",
  "success"
], ym = me({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top", ""],
    default: ""
  },
  prop: {
    type: Z([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: Z([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: mm
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: la
  }
}), Is = "GpLabelWrap", bm = /* @__PURE__ */ Y({
  name: Is,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = G(sn, void 0), r = G(zt);
    r || sa(Is, "usage: <GpFormItem><GLabelWrap></GLabelWrap></GpFormItem>");
    const o = oe("form"), a = x(), s = x(0), i = () => {
      var c;
      if ((c = a.value) != null && c.firstElementChild) {
        const f = window.getComputedStyle(a.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(f));
      } else
        return 0;
    }, l = (c = "update") => {
      Be(() => {
        t.default && e.isAutoWidth && (c === "update" ? s.value = i() : c === "remove" && (n == null || n.deregisterLabelWidth(s.value)));
      });
    }, u = () => l("update");
    return xe(() => {
      u();
    }), ze(() => {
      l("remove");
    }), ko(() => u()), k(s, (c, f) => {
      e.updateAll && (n == null || n.registerLabelWidth(c, f));
    }), An(T(() => {
      var c;
      return ((c = a.value) == null ? void 0 : c.firstElementChild) ?? null;
    }), u), () => {
      var f, v;
      if (!t) return null;
      const {
        isAutoWidth: c
      } = e;
      if (c) {
        const m = n == null ? void 0 : n.autoLabelWidth, d = r == null ? void 0 : r.hasLabel, p = {};
        if (d && m && m !== "auto") {
          const y = Math.max(0, Number.parseInt(m, 10) - s.value), b = (r.labelPosition || n.labelPosition) === "left" ? "marginRight" : "marginLeft";
          y && (p[b] = `${y}px`);
        }
        return pe("div", {
          ref: a,
          class: [o.be("item", "label-wrap")],
          style: p
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
      }
      if (!c) return pe(At, {
        ref: a
      }, [(v = t.default) == null ? void 0 : v.call(t)]);
    };
  }
}), wm = ["role", "aria-labelledby"], vl = /* @__PURE__ */ Y({
  name: "GpFormItem",
  __name: "form-item",
  props: ym,
  setup(e, { expose: t }) {
    const n = e, r = Nr(), o = G(sn, void 0), a = G(zt, void 0), s = nn(void 0, { formItem: !1 }), i = oe("form-item"), l = ca().value, u = x([]), c = x(""), f = qv(c, 100), v = x(""), m = x();
    let d, p = !1;
    const y = T(
      () => n.labelPosition || (o == null ? void 0 : o.labelPosition)
    ), g = T(() => {
      if (y.value === "top")
        return {};
      const M = $r(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return M ? { width: M } : {};
    }), b = T(() => {
      if (y.value === "top" || o != null && o.inline)
        return {};
      if (!n.label && !n.labelWidth && F)
        return {};
      const M = $r(n.labelWidth || (o == null ? void 0 : o.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: M } : {};
    }), w = T(() => [
      i.b(),
      i.m(s.value),
      i.is("error", c.value === "error"),
      i.is("validating", c.value === "validating"),
      i.is("success", c.value === "success"),
      i.is("required", R.value || n.required),
      i.is("no-asterisk", o == null ? void 0 : o.hideRequiredAsterisk),
      (o == null ? void 0 : o.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      {
        [i.m("feedback")]: o == null ? void 0 : o.statusIcon,
        [i.m(`label-${y.value}`)]: y.value
      }
    ]), h = T(() => {
      lt(n.inlineMessage) ? n.inlineMessage : o != null && o.inlineMessage;
    }), E = T(() => [
      i.e("error"),
      { [i.em("error", "inline")]: h.value }
    ]), C = T(() => n.prop ? Ye(n.prop) ? n.prop : n.prop.join(".") : ""), S = T(() => !!(n.label || r.label)), A = T(() => n.for || (u.value.length === 1 ? u.value[0] : void 0)), $ = T(() => !A.value && S.value), F = !!a, _ = T(() => {
      const M = o == null ? void 0 : o.model;
      if (!(!M || !n.prop))
        return cr(M, n.prop).value;
    }), N = T(() => {
      const { required: M } = n, z = [];
      n.rules && z.push(...po(n.rules));
      const ye = o == null ? void 0 : o.rules;
      if (ye && n.prop) {
        const he = cr(
          ye,
          n.prop
        ).value;
        he && z.push(...po(he));
      }
      if (M !== void 0) {
        const he = z.map((He, Je) => [He, Je]).filter(([He]) => Object.keys(He).includes("required"));
        if (he.length > 0)
          for (const [He, Je] of he)
            He.required !== M && (z[Je] = { ...He, required: M });
        else
          z.push({ required: M });
      }
      return z;
    }), W = T(() => N.value.length > 0), K = (M) => N.value.filter((ye) => !ye.trigger || !M ? !0 : Array.isArray(ye.trigger) ? ye.trigger.includes(M) : ye.trigger === M).map(({ trigger: ye, ...he }) => he), R = T(
      () => N.value.some((M) => M.required)
    ), P = T(
      () => f.value === "error" && n.showMessage && ((o == null ? void 0 : o.showMessage) ?? !0)
    ), j = T(() => {
    }), V = (M) => {
      c.value = M;
    }, L = (M) => {
      var he;
      const { errors: z, fields: ye } = M;
      (!z || !ye) && console.error(M), V("error"), v.value = z ? ((he = z == null ? void 0 : z[0]) == null ? void 0 : he.message) ?? `${n.prop} is required` : "", o == null || o.emit("validate", n.prop, !1, v.value);
    }, X = () => {
      V("success"), o == null || o.emit("validate", n.prop, !0, "");
    }, be = async (M) => {
      const z = C.value;
      return new Vn({
        [z]: M
      }).validate({ [z]: _.value }, { firstFields: !0 }).then(() => (X(), !0)).catch((he) => (L(he), Promise.reject(he)));
    }, Q = async (M, z) => {
      if (p || !n.prop)
        return !1;
      const ye = vt(z);
      if (!W.value)
        return z == null || z(!1), !0;
      const he = K(M);
      return he.length === 0 ? (z == null || z(!0), !0) : (V("validating"), be(he).then(() => (z == null || z(!0), !0)).catch((He) => {
        const { fields: Je } = He;
        return z == null || z(!1, Je), ye ? !1 : Promise.reject(Je);
      }));
    }, fe = () => {
      V(""), v.value = "", p = !1;
    }, ce = async () => {
      const M = o == null ? void 0 : o.model;
      if (!M || !n.prop)
        return;
      const z = cr(M, n.prop);
      p = !0, z.value = us(d), await Be(), fe(), p = !1;
    }, de = (M) => {
      u.value.includes(M) || u.value.push(M);
    }, ve = (M) => {
      u.value = u.value.filter((z) => z !== M);
    };
    k(
      () => n.error,
      (M) => {
        v.value = M || "", V(M ? "error" : "");
      },
      { immediate: !0 }
    ), k(
      () => n.validateStatus,
      (M) => V(M || "")
    );
    const $e = Ho({
      ...Ir(n),
      $el: m,
      size: s,
      validateState: c,
      labelId: l,
      inputIds: u,
      isGroup: $,
      hasLabel: S,
      fieldValue: _,
      addInputId: de,
      removeInputId: ve,
      validate: Q,
      resetField: ce,
      clearValidate: fe
    });
    return Ge(zt, $e), xe(() => {
      n.prop && (o == null || o.addField($e), d = us(_.value));
    }), ze(() => {
      o == null || o.removeField($e);
    }), t({
      size: s,
      validateMessage: v,
      validateState: c,
      validate: Q,
      clearValidate: fe,
      resetField: ce
    }), (M, z) => {
      var ye;
      return I(), q("div", {
        ref_key: "formItemRef",
        ref: m,
        class: D(w.value),
        role: $.value ? "group" : void 0,
        "aria-labelledby": $.value ? O(l) : void 0
      }, [
        pe(O(bm), {
          "is-auto-width": g.value.width === "auto",
          "update-all": ((ye = O(o)) == null ? void 0 : ye.labelWidth) === "auto"
        }, {
          default: le(() => [
            S.value ? (I(), we(Nn(A.value ? "label" : "div"), {
              key: 0,
              id: O(l),
              for: A.value,
              class: D(O(i).e("label")),
              style: _e(g.value)
            }, {
              default: le(() => [
                re(M.$slots, "label", { label: j.value }, () => [
                  _n(gt(j.value), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : Ce("", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        ne("div", {
          class: D(O(i).e("content")),
          style: _e(b.value)
        }, [
          re(M.$slots, "default"),
          pe(Ql, {
            name: `${O(i).namespace.value}-zoom-in-top`
          }, {
            default: le(() => [
              P.value ? re(M.$slots, "error", {
                key: 0,
                error: v.value
              }, () => [
                ne("div", {
                  class: D(E.value)
                }, gt(v.value), 3)
              ]) : Ce("", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, wm);
    };
  }
}), sw = Et(Wg, {
  FormItem: vl
}), iw = Kr(vl), ln = Symbol("checkboxGroupContextKey"), Cm = ({
  model: e,
  isChecked: t
}) => {
  const n = G(ln, void 0), r = T(() => {
    var i, l;
    const a = (i = n == null ? void 0 : n.max) == null ? void 0 : i.value, s = (l = n == null ? void 0 : n.min) == null ? void 0 : l.value;
    return !xn(a) && e.value.length >= a && !t.value || !xn(s) && e.value.length <= s && t.value;
  });
  return {
    isDisabled: cl(
      T(() => (n == null ? void 0 : n.disabled.value) || r.value)
    ),
    isLimitDisabled: r
  };
}, Sm = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: o,
  isLabeledByFormItem: a
}) => {
  const s = G(ln, void 0), { formItem: i } = wa(), { emit: l } = ue();
  function u(d) {
    return [!0, e.trueValue, e.trueLabel].includes(d) ? e.trueValue ?? e.trueLabel ?? !0 : e.falseValue ?? e.falseLabel ?? !1;
  }
  function c(d, p) {
    l("change", u(d), p);
  }
  function f(d) {
    if (n.value) return;
    const p = d.target;
    l("change", u(p.checked), d);
  }
  async function v(d) {
    n.value || !r.value && !o.value && a.value && (d.composedPath().some(
      (g) => g.tagName === "LABEL"
    ) || (t.value = u(
      [!1, e.falseValue, e.falseLabel].includes(t.value)
    ), await Be(), c(t.value, d)));
  }
  const m = T(
    () => (s == null ? void 0 : s.validateEvent) || e.validateEvent
  );
  return k(
    () => e.modelValue,
    () => {
      m.value && (i == null || i.validate("change").catch((d) => Te(d)));
    }
  ), {
    handleChange: f,
    onClickRoot: v
  };
}, Em = (e) => {
  const t = x(!1), { emit: n } = ue(), r = G(ln, void 0), o = T(() => xn(r) === !1), a = x(!1), s = T({
    get() {
      var i;
      return o.value ? (i = r == null ? void 0 : r.modelValue) == null ? void 0 : i.value : e.modelValue ?? t.value;
    },
    set(i) {
      var l, u;
      o.value && bt(i) ? (a.value = ((l = r == null ? void 0 : r.max) == null ? void 0 : l.value) !== void 0 && i.length > (r == null ? void 0 : r.max.value) && i.length > s.value.length, a.value === !1 && ((u = r == null ? void 0 : r.changeEvent) == null || u.call(r, i))) : (n(Gr, i), t.value = i);
    }
  });
  return {
    model: s,
    isGroup: o,
    isLimitExceeded: a
  };
}, Om = (e, t, { model: n }) => {
  const r = G(ln, void 0), o = x(!1), a = T(() => Co(e.value) ? e.label : e.value), s = T(() => {
    const c = n.value;
    return lt(c) ? c : bt(c) ? jt(a.value) ? c.map(Ma).some((f) => Ii(f, a.value)) : c.map(Ma).includes(a.value) : c != null ? c === e.trueValue || c === e.trueLabel : !!c;
  }), i = nn(
    T(() => {
      var c;
      return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
    }),
    {
      prop: !0
    }
  ), l = nn(T(() => {
    var c;
    return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
  })), u = T(() => !!t.default || !Co(a.value));
  return {
    checkboxButtonSize: i,
    isChecked: s,
    isFocused: o,
    checkboxSize: l,
    hasOwnLabel: u,
    actualValue: a
  };
}, hl = (e, t) => {
  const { formItem: n } = wa(), { model: r, isGroup: o, isLimitExceeded: a } = Em(e), {
    isFocused: s,
    isChecked: i,
    checkboxButtonSize: l,
    checkboxSize: u,
    hasOwnLabel: c,
    actualValue: f
  } = Om(e, t, { model: r }), { isDisabled: v } = Cm({ model: r, isChecked: i }), { inputId: m, isLabeledByFormItem: d } = fl(e, {
    formItemContext: n,
    disableIdGeneration: c,
    disableIdManagement: o
  }), { handleChange: p, onClickRoot: y } = Sm(e, {
    model: r,
    isLimitExceeded: a,
    hasOwnLabel: c,
    isDisabled: v,
    isLabeledByFormItem: d
  });
  return (() => {
    function b() {
      bt(r.value) && !r.value.includes(f.value) ? r.value.push(f.value) : r.value = e.trueValue ?? e.trueLabel ?? !0;
    }
    e.checked && b();
  })(), ro(
    {
      from: "label act as value",
      replacement: "value",
      version: "1.0.0",
      scope: "gp-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => o.value && Co(e.value))
  ), ro(
    {
      from: "true-label",
      replacement: "true-value",
      version: "1.0.0",
      scope: "gp-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => !!e.trueLabel)
  ), ro(
    {
      from: "false-label",
      replacement: "false-value",
      version: "3.0.0",
      scope: "gp-checkbox",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    },
    T(() => !!e.falseLabel)
  ), {
    inputId: m,
    isLabeledByFormItem: d,
    isChecked: i,
    isDisabled: v,
    isFocused: s,
    checkboxButtonSize: l,
    checkboxSize: u,
    hasOwnLabel: c,
    model: r,
    actualValue: f,
    handleChange: p,
    onClickRoot: y
  };
}, Tm = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"], xm = ["id", "indeterminate", "disabled", "value", "name", "tabindex"], Am = /* @__PURE__ */ Y({
  name: "GpCheckbox",
  __name: "checkbox",
  props: ll,
  emits: ul,
  setup(e) {
    const t = e, n = Nr(), {
      inputId: r,
      isLabeledByFormItem: o,
      isChecked: a,
      isDisabled: s,
      isFocused: i,
      checkboxSize: l,
      hasOwnLabel: u,
      model: c,
      actualValue: f,
      handleChange: v,
      onClickRoot: m
    } = hl(t, n), d = oe("checkbox"), p = T(() => [
      d.b(),
      d.m(l.value),
      d.is("disabled", s.value),
      d.is("bordered", t.border),
      d.is("checked", a.value)
    ]), y = T(() => [
      d.e("input"),
      d.is("disabled", s.value),
      d.is("checked", a.value),
      d.is("indeterminate", t.indeterminate),
      d.is("focus", i.value)
    ]);
    return (g, b) => (I(), we(Nn(!O(u) && O(o) ? "span" : "label"), {
      class: D(p.value),
      "aria-controls": g.indeterminate ? g.ariaControls : null,
      onClick: O(m)
    }, {
      default: le(() => [
        ne("span", {
          class: D(y.value)
        }, [
          g.trueValue || g.falseValue || g.trueLabel || g.falseLabel ? Ke((I(), q("input", {
            key: 0,
            id: O(r),
            "onUpdate:modelValue": b[0] || (b[0] = (w) => wn(c) ? c.value = w : null),
            class: D(O(d).e("original")),
            type: "checkbox",
            indeterminate: g.indeterminate,
            name: g.name,
            tabindex: g.tabindex,
            disabled: O(s),
            "true-value": g.trueValue ?? g.trueLabel ?? !0,
            "false-value": g.falseValue ?? g.falseLabel ?? !1,
            onChange: b[1] || (b[1] = //@ts-ignore
            (...w) => O(v) && O(v)(...w)),
            onFocus: b[2] || (b[2] = (w) => i.value = !0),
            onBlur: b[3] || (b[3] = (w) => i.value = !1),
            onClick: b[4] || (b[4] = yr(() => {
            }, ["stop"]))
          }, null, 42, Tm)), [
            [br, O(c)]
          ]) : Ke((I(), q("input", {
            key: 1,
            id: O(r),
            "onUpdate:modelValue": b[5] || (b[5] = (w) => wn(c) ? c.value = w : null),
            class: D(O(d).e("original")),
            type: "checkbox",
            indeterminate: g.indeterminate,
            disabled: O(s),
            value: O(f),
            name: g.name,
            tabindex: g.tabindex,
            onChange: b[6] || (b[6] = //@ts-ignore
            (...w) => O(v) && O(v)(...w)),
            onFocus: b[7] || (b[7] = (w) => i.value = !0),
            onBlur: b[8] || (b[8] = (w) => i.value = !1),
            onClick: b[9] || (b[9] = yr(() => {
            }, ["stop"]))
          }, null, 42, xm)), [
            [br, O(c)]
          ]),
          ne("span", {
            class: D(O(d).e("inner"))
          }, null, 2)
        ], 2),
        O(u) ? (I(), q("span", {
          key: 0,
          class: D(O(d).e("label"))
        }, [
          re(g.$slots, "default"),
          g.$slots.default ? Ce("", !0) : (I(), q(At, { key: 0 }, [
            _n(gt(g.label), 1)
          ], 64))
        ], 2)) : Ce("", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
}), $m = ["name", "tabindex", "disabled", "true-value", "false-value"], Pm = ["name", "tabindex", "disabled", "value"], gl = /* @__PURE__ */ Y({
  __name: "checkbox-button",
  props: ll,
  emits: ul,
  setup(e) {
    const t = e, n = Nr(), {
      isFocused: r,
      isChecked: o,
      isDisabled: a,
      checkboxButtonSize: s,
      model: i,
      actualValue: l,
      handleChange: u
    } = hl(t, n), c = G(ln, void 0), f = oe("checkbox"), v = T(() => {
      var p, y;
      const d = ((p = c == null ? void 0 : c.fill) == null ? void 0 : p.value) ?? "";
      return {
        backgroundColor: d,
        borderColor: d,
        color: ((y = c == null ? void 0 : c.textColor) == null ? void 0 : y.value) ?? "",
        boxShadow: d ? `-1px 0 0 0 ${d}` : void 0
      };
    }), m = T(() => [
      f.b("button"),
      f.bm("button", s.value),
      f.is("disabled", a.value),
      f.is("checked", o.value),
      f.is("focus", r.value)
    ]);
    return (d, p) => (I(), q("label", {
      class: D(m.value)
    }, [
      d.trueValue || d.falseValue || d.trueLabel || d.falseLabel ? Ke((I(), q("input", {
        key: 0,
        "onUpdate:modelValue": p[0] || (p[0] = (y) => wn(i) ? i.value = y : null),
        class: D(O(f).be("button", "original")),
        type: "checkbox",
        name: d.name,
        tabindex: d.tabindex,
        disabled: O(a),
        "true-value": d.trueValue ?? d.trueLabel ?? !0,
        "false-value": d.falseValue ?? d.falseLabel ?? !1,
        onChange: p[1] || (p[1] = //@ts-ignore
        (...y) => O(u) && O(u)(...y)),
        onFocus: p[2] || (p[2] = (y) => r.value = !0),
        onBlur: p[3] || (p[3] = (y) => r.value = !1),
        onClick: p[4] || (p[4] = yr(() => {
        }, ["stop"]))
      }, null, 42, $m)), [
        [br, O(i)]
      ]) : Ke((I(), q("input", {
        key: 1,
        "onUpdate:modelValue": p[5] || (p[5] = (y) => wn(i) ? i.value = y : null),
        class: D(O(f).be("button", "original")),
        type: "checkbox",
        name: d.name,
        tabindex: d.tabindex,
        disabled: O(a),
        value: O(l),
        onChange: p[6] || (p[6] = //@ts-ignore
        (...y) => O(u) && O(u)(...y)),
        onFocus: p[7] || (p[7] = (y) => r.value = !0),
        onBlur: p[8] || (p[8] = (y) => r.value = !1),
        onClick: p[9] || (p[9] = yr(() => {
        }, ["stop"]))
      }, null, 42, Pm)), [
        [br, O(i)]
      ]),
      d.$slots.default || d.label ? (I(), q("span", {
        key: 2,
        class: D(O(f).be("button", "inner")),
        style: _e(O(o) ? v.value : void 0)
      }, [
        re(d.$slots, "default", {}, () => [
          _n(gt(d.label), 1)
        ])
      ], 6)) : Ce("", !0)
    ], 2));
  }
}), Rm = me({
  modelValue: {
    type: Z(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: Dn,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  ...zn(["ariaLabel"])
}), Fm = {
  [Gr]: (e) => bt(e),
  change: (e) => bt(e)
}, ml = /* @__PURE__ */ Y({
  name: "GpCheckboxGroup",
  __name: "checkbox-group",
  props: Rm,
  emits: Fm,
  setup(e, { emit: t }) {
    const n = e, r = t, o = oe("checkbox"), { formItem: a } = wa(), { inputId: s, isLabeledByFormItem: i } = fl(n, {
      formItemContext: a
    }), l = async (c) => {
      r(Gr, c), await Be(), r("change", c);
    }, u = T({
      get() {
        return n.modelValue;
      },
      set(c) {
        l(c);
      }
    });
    return Ge(ln, {
      ...ji(Ir(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: u,
      changeEvent: l
    }), k(
      () => n.modelValue,
      () => {
        n.validateEvent && (a == null || a.validate("change").catch((c) => Te(c)));
      }
    ), (c, f) => {
      var v;
      return I(), we(Nn(c.tag), {
        id: O(s),
        class: D(O(o).b("group")),
        role: "group",
        "aria-label": O(i) ? void 0 : c.ariaLabel || "checkbox-group",
        "aria-labelledby": O(i) ? (v = O(a)) == null ? void 0 : v.labelId : void 0
      }, {
        default: le(() => [
          re(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
}), Fr = Et(Am, {
  CheckboxButton: gl,
  CheckboxGroup: ml
}), lw = Kr(gl), uw = Kr(ml), ao = "focus-trap.focus-after-trapped", so = "focus-trap.focus-after-released", Lm = "focus-trap.focusout-prevented", Bs = {
  cancelable: !0,
  bubbles: !1
}, Nm = {
  cancelable: !0,
  bubbles: !1
}, js = "focusAfterTrapped", Ws = "focusAfterReleased", _m = Symbol("GpFocusTrap"), Ca = x(), Yr = x(0), Sa = x(0);
let ar = 0;
const yl = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}, Ds = (e, t) => {
  for (const n of e)
    if (!Mm(n, t)) return n;
}, Mm = (e, t) => {
  if (process.env.NODE_ENV === "test") return !1;
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}, Im = (e) => {
  const t = yl(e), n = Ds(t, e), r = Ds(t.reverse(), e);
  return [n, r];
}, Bm = (e) => e instanceof HTMLInputElement && "select" in e, Ot = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Sa.value = window.performance.now(), e !== n && Bm(e) && t && e.select();
  }
};
function zs(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const jm = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = zs(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = zs(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Wm = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ot(r, t), document.activeElement !== n) return;
}, Hs = jm(), Dm = () => Yr.value > Sa.value, sr = () => {
  Ca.value = "pointer", Yr.value = window.performance.now();
}, ks = () => {
  Ca.value = "keyboard", Yr.value = window.performance.now();
}, zm = () => (xe(() => {
  ar === 0 && (document.addEventListener("mousedown", sr), document.addEventListener("touchstart", sr), document.addEventListener("keydown", ks)), ar++;
}), ze(() => {
  ar--, ar <= 0 && (document.removeEventListener("mousedown", sr), document.removeEventListener("touchstart", sr), document.removeEventListener("keydown", ks));
}), {
  focusReason: Ca,
  lastUserFocusTimestamp: Yr,
  lastAutomatedFocusTimestamp: Sa
}), ir = (e) => new CustomEvent(Lm, {
  ...Nm,
  detail: e
}), Hm = Y({
  name: "GpFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    js,
    Ws,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, o;
    const { focusReason: a } = zm();
    Cg((d) => {
      e.trapped && !s.paused && t("release-requested", d);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (d) => {
      if (!e.loop && !e.trapped || s.paused) return;
      const { key: p, altKey: y, ctrlKey: g, metaKey: b, currentTarget: w, shiftKey: h } = d, { loop: E } = e, C = p === Pn.tab && !y && !g && !b, S = document.activeElement;
      if (C && S) {
        const A = w, [$, F] = Im(A);
        if ($ && F) {
          if (!h && S === F) {
            const N = ir({
              focusReason: a.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (d.preventDefault(), E && Ot($, !0));
          } else if (h && [$, A].includes(S)) {
            const N = ir({
              focusReason: a.value
            });
            t("focusout-prevented", N), N.defaultPrevented || (d.preventDefault(), E && Ot(F, !0));
          }
        } else if (S === A) {
          const N = ir({
            focusReason: a.value
          });
          t("focusout-prevented", N), N.defaultPrevented || d.preventDefault();
        }
      }
    };
    Ge(_m, {
      focusTrapRef: n,
      onKeydown: i
    }), k(
      () => e.focusTrapEl,
      (d) => {
        d && (n.value = d);
      },
      { immediate: !0 }
    ), k([n], ([d], [p]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", c), d.addEventListener("focusout", f)), p && (p.removeEventListener("keydown", i), p.removeEventListener("focusin", c), p.removeEventListener("focusout", f));
    });
    const l = (d) => {
      t(js, d);
    }, u = (d) => t(Ws, d), c = (d) => {
      const p = O(n);
      if (!p) return;
      const y = d.target, g = d.relatedTarget, b = y && p.contains(y);
      e.trapped || g && p.contains(g) || (r = g), b && t("focusin", d), !s.paused && e.trapped && (b ? o = y : Ot(o, !0));
    }, f = (d) => {
      const p = O(n);
      if (!(s.paused || !p))
        if (e.trapped) {
          const y = d.relatedTarget;
          !kr(y) && !p.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = ir({
                focusReason: a.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Ot(o, !0);
            }
          }, 0);
        } else {
          const y = d.target;
          y && p.contains(y) || t("focusout", d);
        }
    };
    async function v() {
      await Be();
      const d = O(n);
      if (d) {
        Hs.push(s);
        const p = d.contains(
          document.activeElement
        ) ? r : document.activeElement;
        if (r = p, !d.contains(p)) {
          const g = new Event(
            ao,
            Bs
          );
          d.addEventListener(ao, l), d.dispatchEvent(g), g.defaultPrevented || Be(() => {
            let b = e.focusStartEl;
            Ye(b) || (Ot(b), document.activeElement !== b && (b = "first")), b === "first" && Wm(
              yl(d),
              !0
            ), (document.activeElement === p || b === "container") && Ot(d);
          });
        }
      }
    }
    function m() {
      const d = O(n);
      if (d) {
        d.removeEventListener(ao, l);
        const p = new CustomEvent(so, {
          ...Bs,
          detail: {
            focusReason: a.value
          }
        });
        d.addEventListener(so, u), d.dispatchEvent(p), !p.defaultPrevented && (a.value == "keyboard" || !Dm() || d.contains(document.activeElement)) && Ot(r ?? document.body), d.removeEventListener(so, u), Hs.remove(s);
      }
    }
    return xe(() => {
      e.trapped && v(), k(
        () => e.trapped,
        (d) => {
          d ? v() : m();
        }
      );
    }), ze(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", c), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
}), Ea = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function km(e, t, n, r, o, a) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
const Vm = /* @__PURE__ */ Ea(Hm, [["render", km]]), bl = ["success", "warning", "info", "error"], Pe = jv({
  zIndex: 0,
  id: "",
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  grouping: !1,
  repeatNum: 1,
  appendTo: ge ? document.body : void 0
}), Km = me({
  id: {
    type: String,
    default: Pe.id
  },
  customClass: {
    type: String,
    default: Pe.customClass
  },
  center: {
    type: Boolean,
    default: Pe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Pe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Pe.duration
  },
  icon: {
    type: So,
    default: Pe.icon
  },
  message: {
    type: Z([
      String,
      Object,
      Function
    ]),
    default: Pe.message
  },
  onClose: {
    type: Z(Function),
    default: Pe.onClose
  },
  showClose: {
    type: Boolean,
    default: Pe.showClose
  },
  type: {
    type: String,
    values: bl,
    default: Pe.type
  },
  plain: {
    type: Boolean,
    default: Pe.plain
  },
  offset: {
    type: Number,
    default: Pe.offset
  },
  zIndex: {
    type: Number,
    default: Pe.zIndex
  },
  grouping: {
    type: Boolean,
    default: Pe.grouping
  },
  repeatNum: {
    type: Number,
    default: Pe.repeatNum
  }
}), qm = {
  destroy: () => !0
}, tt = eu([]), Gm = (e) => {
  const t = tt.findIndex((o) => o.id === e), n = tt[t];
  let r;
  return t > 0 && (r = tt[t - 1]), { current: n, prev: r };
}, Um = (e) => {
  const { prev: t } = Gm(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Ym = (e, t) => tt.findIndex((r) => r.id === e) > 0 ? 16 : t, Xm = ["id"], Zm = ["innerHTML"], Jm = /* @__PURE__ */ Y({
  name: "GpMessage",
  __name: "message",
  props: Km,
  emits: qm,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Sg("message"), { currentZIndex: a, nextZIndex: s } = o, i = x(), l = x(!1), u = x(0);
    let c;
    T(() => {
      const w = n.type;
      return { [r.bem("icon", w)]: w && hs[w] };
    }), T(
      () => n.icon || hs[n.type] || ""
    );
    const f = T(() => Um(n.id)), v = T(
      () => Ym(n.id, f.value) + f.value
    ), m = T(() => u.value + v.value), d = T(() => ({
      top: `${v.value}px`,
      zIndex: a.value
    }));
    function p() {
      n.duration !== 0 && ({ stop: c } = Gv(() => {
        g();
      }, n.duration));
    }
    function y() {
      c == null || c();
    }
    function g() {
      l.value = !1;
    }
    function b({ code: w }) {
      w === Pn.esc && g();
    }
    return xe(() => {
      p(), s(), l.value = !0;
    }), k(
      () => n.repeatNum,
      () => {
        y(), p();
      }
    ), yt(document, "keydown", b), An(i, () => {
      u.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: l,
      bottom: m,
      close: g
    }), (w, h) => (I(), we(Vo, {
      name: O(r).b("fade"),
      onBeforeLeave: w.onClose,
      onAfterLeave: h[0] || (h[0] = (E) => w.$emit("destroy"))
    }, {
      default: le(() => [
        Ke(ne("div", {
          id: w.id,
          ref_key: "messageRef",
          ref: i,
          class: D([
            O(r).b(),
            { [O(r).m(w.type)]: w.type },
            O(r).is("center", w.center),
            O(r).is("closable", w.showClose),
            O(r).is("plain", w.plain),
            w.customClass
          ]),
          style: _e(d.value),
          role: "alert",
          onMouseenter: y,
          onMouseleave: p
        }, [
          re(w.$slots, "default", {}, () => [
            w.dangerouslyUseHTMLString ? (I(), q("p", {
              key: 1,
              class: D(O(r).e("content")),
              innerHTML: w.message
            }, null, 10, Zm)) : (I(), q("p", {
              key: 0,
              class: D(O(r).e("content"))
            }, null, 2))
          ])
        ], 46, Xm), [
          [Cn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
let Qm = 1;
const wl = (e) => {
  const t = !e || Ye(e) || ri(e) || mt(e) ? { message: e } : e, n = {
    ...Pe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ye(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    mt(r) || (Te("GpMessage", "The appendTo option is not an HTMLElement."), r = document.body), n.appendTo = r;
  }
  return lt(Qe.grouping) && !n.grouping && (n.grouping = Qe.grouping), Fe(Qe.duration) && n.duration === 3e3 && (n.duration = Qe.duration), Fe(Qe.offset) && n.offset === 16 && (n.offset = Qe.offset), lt(Qe.showClose) && !n.showClose && (n.showClose = Qe.showClose), n;
}, ey = (e) => {
  const t = tt.indexOf(e);
  if (t === -1) return;
  tt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, ty = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Qm++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o == null || o(), ey(c);
    },
    onDestroy: () => {
      wr(null, a);
    }
  }, i = pe(
    Jm,
    s,
    vt(s.message) || ri(s.message) ? {
      default: vt(s.message) ? s.message : () => s.message
    } : null
  );
  i.appContext = n || rn._context, wr(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, c = {
    id: r,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return c;
}, rn = (e = {}, t) => {
  if (!ge) return { close: () => {
  } };
  const n = wl(e);
  if (n.grouping && tt.length) {
    const o = tt.find(
      ({ vnode: a }) => {
        var s;
        return ((s = a.props) == null ? void 0 : s.message) === n.message;
      }
    );
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Fe(Qe.max) && tt.length >= Qe.max)
    return { close: () => {
    } };
  const r = ty(n, t);
  return tt.push(r), r.handler;
};
bl.forEach((e) => {
  rn[e] = (t = {}, n) => {
    const r = wl(t);
    return rn({ ...r, type: e }, n);
  };
});
function ny(e) {
  for (const t of tt)
    (!e || e === t.props.type) && t.handler.close();
}
rn.closeAll = ny;
rn._context = null;
const cw = Bv(rn, "$message"), Oa = Symbol("popper"), Cl = Symbol("popperContent"), fw = {
  LIGHT: "light",
  DARK: "dark"
}, ry = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ta = me({
  role: {
    type: String,
    values: ry,
    default: "tooltip"
  }
}), dw = Ta, oy = /* @__PURE__ */ Y({
  name: "GpPopper",
  inheritAttrs: !1,
  __name: "popper",
  props: Ta,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), s = x(), i = T(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Ge(Oa, l), (u, c) => re(u.$slots, "default");
  }
}), xa = me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), pw = xa, vw = /* @__PURE__ */ Y({
  name: "ElPopperArrow",
  inheritAttrs: !1,
  __name: "arrow",
  props: xa,
  setup(e, { expose: t }) {
    const n = e, r = oe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = G(
      Cl,
      void 0
    );
    return k(
      () => n.arrowOffset,
      (i) => {
        o.value = i;
      }
    ), ze(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (I(), q("span", {
      ref_key: "arrowRef",
      ref: a,
      class: D(O(r).e("arrow")),
      style: _e(O(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
}), io = "GpOnlyChild", ay = /* @__PURE__ */ Y({
  name: io,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const r = G(al), o = wg((r == null ? void 0 : r.setForwardRef) ?? xr);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a) return null;
      if (a.length > 1)
        return Te(io, "requires exactly one child element"), null;
      const s = Sl(a);
      return s ? Ke(tu(s, n), [[o]]) : (Te(io, "no valid child node found"), null);
    };
  }
});
function Sl(e) {
  if (!e) return null;
  const t = e;
  for (const n of t) {
    if (jt(n))
      switch (n.type) {
        case oi:
          continue;
        case ni:
        case "svg":
          return Vs(n);
        case At:
          return Sl(n.children);
        default:
          return n;
      }
    return Vs(n);
  }
  return null;
}
function Vs(e) {
  const t = oe("only-child");
  return pe("span", {
    class: t.e("content")
  }, [e]);
}
const Aa = me({
  virtualRef: {
    type: Z(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Z(Function)
  },
  onMouseleave: {
    type: Z(Function)
  },
  onClick: {
    type: Z(Function)
  },
  onKeydown: {
    type: Z(Function)
  },
  onFocus: {
    type: Z(Function)
  },
  onBlur: {
    type: Z(Function)
  },
  onContextmenu: {
    type: Z(Function)
  },
  id: String,
  open: Boolean
}), hw = Aa, sy = /* @__PURE__ */ Y({
  name: "GpPopperTrigger",
  inheritAttrs: !1,
  __name: "trigger",
  props: Aa,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = G(Oa, void 0);
    bg(o);
    const a = T(() => i.value ? n.id : void 0), s = T(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = T(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = T(() => i.value ? `${n.open}` : void 0);
    let u;
    const c = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return xe(() => {
      k(
        () => n.virtualRef,
        (f) => {
          f && (o.value = ht(f));
        },
        {
          immediate: !0
        }
      ), k(
        o,
        (f, v) => {
          u == null || u(), u = void 0, mt(f) && (c.forEach((m) => {
            var p;
            const d = n[m];
            d && (f.addEventListener(
              m.slice(2).toLowerCase(),
              d
            ), (p = v == null ? void 0 : v.removeEventListener) == null || p.call(
              v,
              m.slice(2).toLowerCase(),
              d
            ));
          }), u = k(
            [a, s, i, l],
            (m) => {
              [
                "aria-controls",
                "aria-describedby",
                "aria-haspopup",
                "aria-expanded"
              ].forEach((d, p) => {
                kr(m[p]) ? f.removeAttribute(d) : f.setAttribute(d, m[p]);
              });
            },
            { immediate: !0 }
          )), mt(v) && [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m) => v.removeAttribute(m));
        },
        {
          immediate: !0
        }
      ), ze(() => {
        if (u == null || u(), u = void 0, o.value && mt(o.value)) {
          const f = o.value;
          c.forEach((v) => {
            const m = n[v];
            m && f.removeEventListener(v.slice(2).toLowerCase(), m);
          }), o.value = void 0;
        }
      });
    }), t({
      triggerRef: o
    }), (f, v) => f.virtualTriggering ? Ce("", !0) : (I(), we(O(ay), _r({ key: 0 }, f.$attrs, {
      "aria-controls": a.value,
      "aria-describedby": s.value,
      "aria-expanded": l.value,
      "aria-haspopup": i.value
    }), {
      default: le(() => [
        re(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
}), iy = ["fixed", "absolute"], El = me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Z(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: da,
    default: "bottom"
  },
  popperOptions: {
    type: Z(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: iy,
    default: "absolute"
  }
}), $a = me({
  ...El,
  id: String,
  style: {
    type: Z([String, Array, Object])
  },
  className: {
    type: Z([String, Array, Object])
  },
  effect: {
    type: Z(String),
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Z([String, Array, Object])
  },
  popperStyle: {
    type: Z([String, Array, Object])
  },
  referenceEl: {
    type: Z(Object)
  },
  triggerTargetEl: {
    type: Z(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...zn(["ariaLabel"])
}), Ol = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, gw = El, mw = $a, yw = Ol, ly = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...cy(e), ...t]
  };
  return fy(a, o == null ? void 0 : o.modifiers), a;
}, uy = (e) => {
  if (ge)
    return ht(e);
};
function cy(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function fy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const dy = 0, py = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = G(
    Oa,
    void 0
  ), a = x(), s = x(), i = T(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = T(() => {
    const g = O(a), b = O(s) ?? dy;
    return {
      name: "arrow",
      enabled: !vv(g),
      options: {
        element: g,
        padding: b
      }
    };
  }), u = T(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...ly(e, [
      O(l),
      O(i)
    ])
  })), c = T(
    () => uy(e.referenceEl) || O(r)
  ), { attributes: f, state: v, styles: m, update: d, forceUpdate: p, instanceRef: y } = yg(c, n, u);
  return k(y, (g) => t.value = g), xe(() => {
    k(
      () => {
        var g;
        return (g = O(c)) == null ? void 0 : g.getBoundingClientRect();
      },
      () => {
        d();
      }
    );
  }), {
    attributes: f,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: v,
    styles: m,
    role: o,
    forceUpdate: p,
    update: d
  };
}, vy = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Gi(), a = oe("popper"), s = T(() => O(t).popper), i = x(
    Fe(e.zIndex) ? e.zIndex : o()
  ), l = T(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = T(() => [
    { zIndex: O(i) },
    O(n).popper,
    e.popperStyle || {}
  ]), c = T(
    () => r.value === "dialog" ? "false" : void 0
  ), f = T(
    () => O(n).arrow || {}
  );
  return {
    ariaModal: c,
    arrowStyle: f,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Fe(e.zIndex) ? e.zIndex : o();
    }
  };
}, hy = (e, t) => {
  const n = x(!1), r = x();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, gy = /* @__PURE__ */ Y({
  name: "GpPopperContent",
  __name: "content",
  props: $a,
  emits: Ol,
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e, {
      focusStartRef: a,
      trapped: s,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: l,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = hy(o, r), { attributes: v, arrowRef: m, contentRef: d, styles: p, instanceRef: y, role: g, update: b } = py(o), {
      ariaModal: w,
      arrowStyle: h,
      contentAttrs: E,
      contentClass: C,
      contentStyle: S,
      updateZIndex: A
    } = vy(o, {
      styles: p,
      attributes: v,
      role: g
    }), $ = G(zt, void 0), F = x();
    Ge(Cl, {
      arrowStyle: h,
      arrowRef: m,
      arrowOffset: F
    }), $ && Ge(zt, {
      ...$,
      addInputId: xr,
      removeInputId: xr
    });
    let _;
    const N = (K = !0) => {
      b(), K && A();
    }, W = () => {
      N(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return xe(() => {
      k(
        () => o.triggerTargetEl,
        (K, R) => {
          _ == null || _(), _ = void 0;
          const P = O(K || d.value), j = O(R || d.value);
          mt(P) && (_ = k(
            [g, () => o.ariaLabel, w, () => o.id],
            (V) => {
              ["role", "aria-label", "aria-modal", "id"].forEach((L, X) => {
                kr(V[X]) ? P.removeAttribute(L) : P.setAttribute(L, V[X]);
              });
            },
            { immediate: !0 }
          )), j !== P && mt(j) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
            j.removeAttribute(V);
          });
        },
        { immediate: !0 }
      ), k(() => o.visible, W, { immediate: !0 });
    }), ze(() => {
      _ == null || _(), _ = void 0;
    }), t({
      popperContentRef: d,
      popperInstanceRef: y,
      updatePopper: N,
      contentStyle: S
    }), (K, R) => (I(), q("div", _r({
      ref_key: "contentRef",
      ref: d
    }, O(E), {
      style: O(S),
      class: O(C),
      tabindex: "-1",
      onMouseenter: R[0] || (R[0] = (P) => K.$emit("mouseenter", P)),
      onMouseleave: R[1] || (R[1] = (P) => K.$emit("mouseleave", P))
    }), [
      pe(O(Vm), {
        trapped: O(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": O(d),
        "focus-start-el": O(a),
        onFocusAfterTrapped: O(l),
        onFocusAfterReleased: O(i),
        onFocusin: O(u),
        onFocusoutPrevented: O(c),
        onReleaseRequested: O(f)
      }, {
        default: le(() => [
          re(K.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
}), my = Et(oy), Gt = 4, yy = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, by = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Pa = Symbol(
  "scrollbarContextKey"
), wy = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Cy = "Thumb", Ks = /* @__PURE__ */ Y({
  __name: "thumb",
  props: wy,
  setup(e) {
    const t = e, n = G(Pa), r = oe("scrollbar");
    n || sa(Cy, "scrollbar is required");
    const o = x(), a = x(), s = x({}), i = x(!1);
    let l = !1, u = !1, c = ge ? document.onselectstart : null;
    const f = T(() => yy[t.vertical ? "vertical" : "horizontal"]), v = T(
      () => by({
        size: t.size,
        move: t.move,
        bar: f.value
      })
    ), m = T(
      () => o.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / a.value[f.value.offset]
    ), d = (C) => {
      var A;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button)) return;
      (A = window.getSelection()) == null || A.removeAllRanges(), y(C);
      const S = C.currentTarget;
      S && (s.value[f.value.axis] = S[f.value.offset] - (C[f.value.client] - S.getBoundingClientRect()[f.value.direction]));
    }, p = (C) => {
      if (!a.value || !o.value || !n.wrapElement) return;
      const S = Math.abs(
        C.target.getBoundingClientRect()[f.value.direction] - C[f.value.client]
      ), A = a.value[f.value.offset] / 2, $ = (S - A) * 100 * m.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = $ * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", b), c = document.onselectstart, document.onselectstart = () => !1;
    }, g = (C) => {
      if (!o.value || !a.value || l === !1) return;
      const S = s.value[f.value.axis];
      if (!S) return;
      const A = (o.value.getBoundingClientRect()[f.value.direction] - C[f.value.client]) * -1, $ = a.value[f.value.offset] - S, F = (A - $) * 100 * m.value / o.value[f.value.offset];
      n.wrapElement[f.value.scroll] = F * n.wrapElement[f.value.scrollSize] / 100;
    }, b = () => {
      l = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", b), E(), u && (i.value = !1);
    }, w = () => {
      u = !1, i.value = !!t.size;
    }, h = () => {
      u = !0, i.value = l;
    };
    ze(() => {
      E(), document.removeEventListener("mouseup", b);
    });
    const E = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return yt(
      xt(n, "scrollbarElement"),
      "mousemove",
      w
    ), yt(
      xt(n, "scrollbarElement"),
      "mouseleave",
      h
    ), (C, S) => (I(), we(Vo, {
      name: O(r).b("fade")
    }, {
      default: le(() => [
        Ke(ne("div", {
          ref_key: "instance",
          ref: o,
          class: D([O(r).e("bar"), O(r).is(f.value.key)]),
          onMousedown: p
        }, [
          ne("div", {
            ref_key: "thumb",
            ref: a,
            class: D(O(r).e("thumb")),
            style: _e(v.value),
            onMousedown: d
          }, null, 38)
        ], 34), [
          [Cn, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), Sy = me({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ey = /* @__PURE__ */ Y({
  __name: "bar",
  props: Sy,
  setup(e, { expose: t }) {
    const n = e, r = G(Pa), o = x(0), a = x(0), s = x(""), i = x(""), l = x(1), u = x(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const m = v.offsetHeight - Gt, d = v.offsetWidth - Gt;
          a.value = v.scrollTop * 100 / m * l.value, o.value = v.scrollLeft * 100 / d * u.value;
        }
      },
      update: () => {
        const v = r == null ? void 0 : r.wrapElement;
        if (!v) return;
        const m = v.offsetHeight - Gt, d = v.offsetWidth - Gt, p = m ** 2 / v.scrollHeight, y = d ** 2 / v.scrollWidth, g = Math.max(p, n.minSize), b = Math.max(y, n.minSize);
        l.value = p / (m - p) / (g / (m - g)), u.value = y / (d - y) / (b / (d - b)), i.value = g + Gt < m ? `${g}px` : "", s.value = b + Gt < d ? `${b}px` : "";
      }
    }), (v, m) => (I(), q(At, null, [
      pe(Ks, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      pe(Ks, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
}), Oy = me({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Z([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  tabindex: {
    type: [String, Number],
    default: void 0
  },
  id: String,
  role: String,
  ...zn(["ariaLabel", "ariaOrientation"])
}), Ty = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Fe)
}, xy = ["tabindex"], lo = "GpScrollbar", Ay = /* @__PURE__ */ Y({
  name: lo,
  __name: "scrollbar",
  props: Oy,
  emits: Ty,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = oe("scrollbar");
    let s, i, l = 0, u = 0;
    const c = x(), f = x(), v = x(), m = x(), d = T(() => {
      const C = {};
      return r.height && (C.height = $r(r.height)), r.maxHeight && (C.maxHeight = $r(r.maxHeight)), [r.wrapStyle, C];
    }), p = T(() => [
      r.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !r.native }
    ]), y = T(() => [a.e("view"), r.viewClass]), g = () => {
      var C;
      f.value && ((C = m.value) == null || C.handleScroll(f.value), l = f.value.scrollTop, u = f.value.scrollLeft, o("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function b(C, S) {
      jt(C) ? f.value.scrollTo(C) : Fe(C) && Fe(S) && f.value.scrollTo(C, S);
    }
    const w = (C) => {
      if (!Fe(C)) {
        Te(lo, "value must be number");
        return;
      }
      f.value.scrollTop = C;
    }, h = (C) => {
      if (!Fe(C)) {
        Te(lo, "value must be number");
        return;
      }
      f.value.scrollLeft = C;
    }, E = () => {
      var C;
      (C = m.value) == null || C.update();
    };
    return k(
      () => r.noresize,
      (C) => {
        C ? (s == null || s(), i == null || i()) : ({ stop: s } = An(v, E), i = yt("resize", E));
      },
      { immediate: !0 }
    ), k(
      () => [r.maxHeight, r.height],
      () => {
        r.native || Be(() => {
          var C;
          E(), f.value && ((C = m.value) == null || C.handleScroll(f.value));
        });
      }
    ), Ge(
      Pa,
      Ho({
        scrollbarElement: c,
        wrapElement: f
      })
    ), nu(() => {
      f.value && (f.value.scrollTop = l, f.value.scrollLeft = u);
    }), xe(() => {
      r.native || Be(() => {
        E();
      });
    }), ko(() => E()), t({
      wrapRef: f,
      update: E,
      scrollTo: b,
      setScrollTop: w,
      setScrollLeft: h,
      handleScroll: g
    }), (C, S) => (I(), q("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: D(O(a).b())
    }, [
      ne("div", {
        ref_key: "wrapRef",
        ref: f,
        class: D(p.value),
        style: _e(d.value),
        tabindex: C.tabindex,
        onScroll: g
      }, [
        (I(), we(Nn(C.tag), {
          id: C.id,
          ref_key: "resizeRef",
          ref: v,
          class: D(y.value),
          style: _e(C.viewStyle),
          role: C.role,
          "aria-label": C.ariaLabel,
          "aria-orientation": C.ariaOrientation
        }, {
          default: le(() => [
            re(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, xy),
      C.native ? Ce("", !0) : (I(), we(Ey, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: C.always,
        "min-size": C.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
}), Tl = Et(Ay), Tt = /* @__PURE__ */ new Map();
if (ge) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Tt.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function qs(e, t) {
  let n = [];
  return Array.isArray(t.value) ? n = t.arg : mt(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o == null ? void 0 : o.target, l = !t || !t.instance, u = !s || !i, c = e.contains(s) || e.contains(i), f = e === s, v = n.length && n.some((d) => d == null ? void 0 : d.contains(s)) || n.length && n.includes(i), m = a && (a.contains(s) || a.contains(i));
    l || u || c || f || v || m || t.value(r, o);
  };
}
const $y = {
  beforeMount(e, t) {
    Tt.has(e) || Tt.set(e, []), Tt.get(e).push({
      documentHandler: qs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Tt.has(e) || Tt.set(e, []);
    const n = Tt.get(e), r = n.findIndex(
      (a) => a.bindingFn === t.oldValue
    ), o = {
      documentHandler: qs(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    Tt.delete(e);
  }
};
var Gs = !1, Lt, Fo, Lo, vr, hr, xl, gr, No, _o, Mo, Al, Io, Bo, $l, Pl;
function Ne() {
  if (!Gs) {
    Gs = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Io = /\b(iPhone|iP[ao]d)/.exec(e), Bo = /\b(iP[ao]d)/.exec(e), Mo = /Android/i.exec(e), $l = /FBAN\/\w+;/i.exec(e), Pl = /Mobile/i.exec(e), Al = !!/Win64/.exec(e), t) {
      Lt = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Lt && document && document.documentMode && (Lt = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      xl = r ? parseFloat(r[1]) + 4 : Lt, Fo = t[2] ? parseFloat(t[2]) : NaN, Lo = t[3] ? parseFloat(t[3]) : NaN, vr = t[4] ? parseFloat(t[4]) : NaN, vr ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), hr = t && t[1] ? parseFloat(t[1]) : NaN) : hr = NaN;
    } else Lt = Fo = Lo = hr = vr = NaN;
    if (n) {
      if (n[1]) {
        var o = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        gr = o ? parseFloat(o[1].replace("_", ".")) : !0;
      } else gr = !1;
      No = !!n[2], _o = !!n[3];
    } else gr = No = _o = !1;
  }
}
var jo = { ie: function() {
  return Ne() || Lt;
}, ieCompatibilityMode: function() {
  return Ne() || xl > Lt;
}, ie64: function() {
  return jo.ie() && Al;
}, firefox: function() {
  return Ne() || Fo;
}, opera: function() {
  return Ne() || Lo;
}, webkit: function() {
  return Ne() || vr;
}, safari: function() {
  return jo.webkit();
}, chrome: function() {
  return Ne() || hr;
}, windows: function() {
  return Ne() || No;
}, osx: function() {
  return Ne() || gr;
}, linux: function() {
  return Ne() || _o;
}, iphone: function() {
  return Ne() || Io;
}, mobile: function() {
  return Ne() || Io || Bo || Mo || Pl;
}, nativeApp: function() {
  return Ne() || $l;
}, android: function() {
  return Ne() || Mo;
}, ipad: function() {
  return Ne() || Bo;
} }, Py = jo, lr = !!(typeof window < "u" && window.document && window.document.createElement), Ry = { canUseDOM: lr, canUseWorkers: typeof Worker < "u", canUseEventListeners: lr && !!(window.addEventListener || window.attachEvent), canUseViewport: lr && !!window.screen, isInWorker: !lr }, Rl = Ry, Fl;
Rl.canUseDOM && (Fl = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function Fy(e, t) {
  if (!Rl.canUseDOM || t && !("addEventListener" in document)) return !1;
  var n = "on" + e, r = n in document;
  if (!r) {
    var o = document.createElement("div");
    o.setAttribute(n, "return;"), r = typeof o[n] == "function";
  }
  return !r && Fl && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var Ly = Fy, Us = 10, Ys = 40, Xs = 800;
function Ll(e) {
  var t = 0, n = 0, r = 0, o = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * Us, o = n * Us, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || o) && e.deltaMode && (e.deltaMode == 1 ? (r *= Ys, o *= Ys) : (r *= Xs, o *= Xs)), r && !t && (t = r < 1 ? -1 : 1), o && !n && (n = o < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: r, pixelY: o };
}
Ll.getEventType = function() {
  return Py.firefox() ? "DOMMouseScroll" : Ly("wheel") ? "wheel" : "mousewheel";
};
var Ny = Ll;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const _y = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(r) {
      const o = Ny(r);
      t && Reflect.apply(t, this, [r, o]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, My = {
  beforeMount(e, t) {
    _y(e, t.value);
  }
}, uo = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, Iy = function(e, t, n, r, o) {
  if (!t && !r && (!o || Array.isArray(o) && !o.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const a = r ? null : function(i, l) {
    return o ? (Array.isArray(o) || (o = [o]), o.map((u) => typeof u == "string" ? Sr(i, u) : u(i, l, e))) : (t !== "$key" && jt(i) && "$value" in i && (i = i.$value), [jt(i) ? Sr(i, t) : i]);
  }, s = function(i, l) {
    if (r)
      return r(i.value, l.value);
    for (let u = 0, c = i.key.length; u < c; u++) {
      if (i.key[u] < l.key[u])
        return -1;
      if (i.key[u] > l.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((i, l) => ({
    value: i,
    index: l,
    key: a ? a(i, l) : null
  })).sort((i, l) => {
    let u = s(i, l);
    return u || (u = i.index - l.index), u * +n;
  }).map((i) => i.value);
}, Nl = function(e, t) {
  let n = null;
  return e.columns.forEach((r) => {
    r.id === t && (n = r);
  }), n;
}, By = function(e, t) {
  let n = null;
  for (let r = 0; r < e.columns.length; r++) {
    const o = e.columns[r];
    if (o.columnKey === t) {
      n = o;
      break;
    }
  }
  return n || sa(`No column matching with column-key: ${t}`), n;
}, Zs = function(e, t, n) {
  const r = (t.className || "").match(
    new RegExp(`${n}-table_[^\\s]+`, "gm")
  );
  return r ? Nl(e, r[0]) : null;
}, Re = (e, t) => {
  if (!e) throw new Error("row is required");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let r = e;
    for (const o of n)
      r = r[o];
    return `${r}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, _t = function(e, t) {
  const n = {};
  return (e || []).forEach((r, o) => {
    n[Re(r, t)] = { row: r, index: o };
  }), n;
};
function jy(e, t) {
  const n = {};
  let r;
  for (r in e)
    n[r] = e[r];
  for (r in t)
    if (Bt(t, r)) {
      const o = t[r];
      typeof o < "u" && (n[r] = o);
    }
  return n;
}
function Ra(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function _l(e) {
  return e === "" || e !== void 0 && (e = Ra(e), Number.isNaN(e) && (e = 80)), e;
}
function Wy(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function Dy(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce(
    (t, n) => (...r) => t(n(...r))
  );
}
function Lr(e, t, n, r, o, a) {
  let s = a ?? 0, i = !1;
  const l = e.indexOf(t), u = l !== -1, c = o == null ? void 0 : o.call(null, t, a), f = (m) => {
    m === "add" ? e.push(t) : e.splice(l, 1), i = !0;
  }, v = (m) => {
    let d = 0;
    const p = (r == null ? void 0 : r.children) && m[r.children];
    return p && bt(p) && (d += p.length, p.forEach((y) => {
      d += v(y);
    })), d;
  };
  return (!o || c) && (lt(n) ? n && !u ? f("add") : !n && u && f("remove") : f(u ? "remove" : "add")), !(r != null && r.checkStrictly) && (r != null && r.children) && bt(t[r.children]) && t[r.children].forEach((m) => {
    Lr(
      e,
      m,
      n ?? !u,
      r,
      o,
      s + 1
    ), s += v(m) + 1;
  }), i;
}
function zy(e, t, n = "children", r = "hasChildren") {
  const o = (s) => !(Array.isArray(s) && s.length);
  function a(s, i, l) {
    t(s, i, l), i.forEach((u) => {
      if (u[r]) {
        t(u, null, l + 1);
        return;
      }
      const c = u[n];
      o(c) || a(u, c, l + 1);
    });
  }
  e.forEach((s) => {
    if (s[r]) {
      t(s, null, 0);
      return;
    }
    const i = s[n];
    o(i) || a(s, i, 0);
  });
}
let Ae = null;
function Hy(e, t, n, r) {
  if ((Ae == null ? void 0 : Ae.trigger) === n)
    return;
  Ae == null || Ae();
  const o = r == null ? void 0 : r.refs.tableWrapper, a = o == null ? void 0 : o.dataset.prefix, s = {
    strategy: "fixed",
    ...e.popperOptions
  }, i = pe(ElTooltip, {
    content: t,
    virtualTriggering: !0,
    virtualRef: n,
    appendTo: o,
    placement: "top",
    transition: "none",
    // Default does not require transition
    offset: 0,
    hideAfter: 0,
    ...e,
    popperOptions: s,
    onHide: () => {
      Ae == null || Ae();
    }
  });
  i.appContext = { ...r.appContext, ...r };
  const l = document.createElement("div");
  wr(i, l), i.component.exposed.onOpen();
  const u = o == null ? void 0 : o.querySelector(`.${a}-scrollbar__wrap`);
  Ae = () => {
    wr(null, l), u == null || u.removeEventListener("scroll", Ae), Ae = null;
  }, Ae.trigger = n, u == null || u.addEventListener("scroll", Ae);
}
function Ml(e) {
  return e.children ? pv(e.children, Ml) : [e];
}
function Js(e, t) {
  return e + t.colSpan;
}
const Il = (e, t, n, r) => {
  let o = 0, a = e;
  const s = n.states.columns.value;
  if (r) {
    const l = Ml(r[e]);
    o = s.slice(0, s.indexOf(l[0])).reduce(Js, 0), a = o + l.reduce(Js, 0) - 1;
  } else
    o = e;
  let i;
  switch (t) {
    case "left":
      a < n.states.fixedLeafColumnsLength.value && (i = "left");
      break;
    case "right":
      o >= s.length - n.states.rightFixedLeafColumnsLength.value && (i = "right");
      break;
    default:
      a < n.states.fixedLeafColumnsLength.value ? i = "left" : o >= s.length - n.states.rightFixedLeafColumnsLength.value && (i = "right");
  }
  return i ? {
    direction: i,
    start: o,
    after: a
  } : {};
}, Fa = (e, t, n, r, o, a = 0) => {
  const s = [], { direction: i, start: l, after: u } = Il(
    t,
    n,
    r,
    o
  );
  if (i) {
    const c = i === "left";
    s.push(`${e}-fixed-column--${i}`), c && u + a === r.states.fixedLeafColumnsLength.value - 1 ? s.push("is-last-column") : !c && l - a === r.states.columns.value.length - r.states.rightFixedLeafColumnsLength.value && s.push("is-first-column");
  }
  return s;
};
function Qs(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const La = (e, t, n, r) => {
  const {
    direction: o,
    start: a = 0,
    after: s = 0
  } = Il(e, t, n, r);
  if (!o)
    return;
  const i = {}, l = o === "left", u = n.states.columns.value;
  return l ? i.left = u.slice(0, a).reduce(Qs, 0) : i.right = u.slice(s + 1).reverse().reduce(Qs, 0), i;
}, on = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function ky(e) {
  const t = ue(), n = x(!1), r = x([]);
  return {
    updateExpandRows: () => {
      const l = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        r.value = l.slice();
      else if (u) {
        const c = _t(r.value, u);
        r.value = l.reduce((f, v) => {
          const m = Re(v, u);
          return c[m] && f.push(v), f;
        }, []);
      } else
        r.value = [];
    },
    toggleRowExpansion: (l, u) => {
      Lr(r.value, l, u) && t.emit("expand-change", l, r.value.slice());
    },
    setExpandRowKeys: (l) => {
      t.store.assertRowKey();
      const u = e.data.value || [], c = e.rowKey.value, f = _t(u, c);
      r.value = l.reduce((v, m) => {
        const d = f[m];
        return d && v.push(d.row), v;
      }, []);
    },
    isRowExpanded: (l) => {
      const u = e.rowKey.value;
      return u ? !!_t(r.value, u)[Re(l, u)] : r.value.includes(l);
    },
    states: {
      expandRows: r,
      defaultExpandAll: n
    }
  };
}
function Vy(e) {
  const t = ue(), n = x(null), r = x(null), o = (u) => {
    t.store.assertRowKey(), n.value = u, s(u);
  }, a = () => {
    n.value = null;
  }, s = (u) => {
    const { data: c, rowKey: f } = e;
    let v = null;
    f.value && (v = (O(c) || []).find(
      (m) => Re(m, f.value) === u
    )), r.value = v, t.emit("current-change", r.value, null);
  };
  return {
    setCurrentRowKey: o,
    restoreCurrentRowKey: a,
    setCurrentRowByKey: s,
    updateCurrentRow: (u) => {
      const c = r.value;
      if (u && u !== c) {
        r.value = u, t.emit("current-change", r.value, c);
        return;
      }
      !u && c && (r.value = null, t.emit("current-change", null, c));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, c = e.data.value || [], f = r.value;
      if (!c.includes(f) && f) {
        if (u) {
          const v = Re(f, u);
          s(v);
        } else
          r.value = null;
        r.value === null && t.emit("current-change", null, f);
      } else n.value && (s(n.value), a());
    },
    states: {
      _currentRowKey: n,
      currentRow: r
    }
  };
}
function Ky(e) {
  const t = x([]), n = x({}), r = x(16), o = x(!1), a = x({}), s = x("hasChildren"), i = x("children"), l = x(!1), u = ue(), c = T(() => {
    if (!e.rowKey.value) return {};
    const w = e.data.value || [];
    return v(w);
  }), f = T(() => {
    const w = e.rowKey.value, h = Object.keys(a.value), E = {};
    return h.length && h.forEach((C) => {
      if (a.value[C].length) {
        const S = { children: [] };
        a.value[C].forEach((A) => {
          const $ = Re(A, w);
          S.children.push($), A[s.value] && !E[$] && (E[$] = { children: [] });
        }), E[C] = S;
      }
    }), E;
  }), v = (w) => {
    const h = e.rowKey.value, E = {};
    return zy(
      w,
      (C, S, A) => {
        const $ = Re(C, h);
        Array.isArray(S) ? E[$] = {
          children: S.map((F) => Re(F, h)),
          level: A
        } : o.value && (E[$] = {
          children: [],
          lazy: !0,
          level: A
        });
      },
      i.value,
      s.value
    ), E;
  }, m = (w = !1, h = ((E) => (E = u.store) == null ? void 0 : E.states.defaultExpandAll.value)()) => {
    var F;
    const C = c.value, S = f.value, A = Object.keys(C), $ = {};
    if (A.length) {
      const _ = O(n), N = [], W = (R, P) => {
        if (w)
          return t.value ? h || t.value.includes(P) : !!(h || R != null && R.expanded);
        {
          const j = h || t.value && t.value.includes(P);
          return !!(R != null && R.expanded || j);
        }
      };
      A.forEach((R) => {
        const P = _[R], j = { ...C[R] };
        if (j.expanded = W(P, R), j.lazy) {
          const { loaded: V = !1, loading: L = !1 } = P || {};
          j.loaded = !!V, j.loading = !!L, N.push(R);
        }
        $[R] = j;
      });
      const K = Object.keys(S);
      o.value && K.length && N.length && K.forEach((R) => {
        const P = _[R], j = S[R].children;
        if (N.includes(R)) {
          if ($[R].children.length !== 0)
            throw new Error("children of lazy node must be empty");
          $[R].children = j;
        } else {
          const { loaded: V = !1, loading: L = !1 } = P || {};
          $[R] = {
            lazy: !0,
            loaded: !!V,
            loading: !!L,
            expanded: W(P, R),
            children: j,
            level: ""
          };
        }
      });
    }
    n.value = $, (F = u.store) == null || F.updateTableScrollY();
  };
  k(
    () => t.value,
    () => {
      m(!0);
    }
  ), k(
    () => c.value,
    () => {
      m();
    }
  ), k(
    () => f.value,
    () => {
      m();
    }
  );
  const d = (w) => {
    t.value = w, m();
  }, p = (w, h) => {
    u.store.assertRowKey();
    const E = e.rowKey.value, C = Re(w, E), S = C && n.value[C];
    if (C && S && "expanded" in S) {
      const A = S.expanded;
      h = typeof h > "u" ? !S.expanded : h, n.value[C].expanded = h, A !== h && u.emit("expand-change", w, h), u.store.updateTableScrollY();
    }
  }, y = (w) => {
    u.store.assertRowKey();
    const h = e.rowKey.value, E = Re(w, h), C = n.value[E];
    o.value && C && "loaded" in C && !C.loaded ? g(w, E, C) : p(w, void 0);
  }, g = (w, h, E) => {
    const { load: C } = u.props;
    C && !n.value[h].loaded && (n.value[h].loading = !0, C(w, E, (S) => {
      if (!Array.isArray(S))
        throw new Error("load must return an array");
      n.value[h].loading = !1, n.value[h].loaded = !0, n.value[h].expanded = !0, S.length && (a.value[h] = S), u.emit("expand-change", w, !0);
    }));
  };
  return {
    loadData: g,
    loadOrToggle: y,
    toggleTreeExpansion: p,
    updateTreeExpandKeys: d,
    updateTreeData: m,
    updateKeyChildren: (w, h) => {
      const { lazy: E, rowKey: C } = u.props;
      if (E) {
        if (!C) throw new Error("rowKey is required when lazy is true");
        a.value[w] && (a.value[w] = h);
      }
    },
    normalize: v,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: r,
      lazy: o,
      lazyTreeNodeMap: a,
      lazyColumnIdentifier: s,
      childrenColumnName: i,
      checkStrictly: l
    }
  };
}
const qy = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : Iy(
    e,
    t.sortProp,
    t.sortOrder,
    n.sortMethod,
    n.sortBy
  );
}, mr = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, mr(n.children)) : t.push(n);
  }), t;
};
function Gy() {
  var _a;
  const e = ue(), { size: t } = Ir((_a = e.proxy) == null ? void 0 : _a.$props), n = x(null), r = x([]), o = x([]), a = x(!1), s = x([]), i = x([]), l = x([]), u = x([]), c = x([]), f = x([]), v = x([]), m = x([]), d = [], p = x(0), y = x(0), g = x(0), b = x(!1), w = x([]), h = x(!1), E = x(!1), C = x(null), S = x({}), A = x(null), $ = x(null), F = x(null), _ = x(null), N = x(null);
  k(r, () => e.state && j(!1), {
    deep: !0
  });
  const W = () => {
    if (!n.value) throw new Error("row-key is required");
  }, K = (B) => {
    var H;
    (H = B.children) == null || H.forEach((ee) => {
      ee.fixed = B.fixed, K(ee);
    });
  };
  let R;
  const P = () => {
    s.value.forEach((se) => {
      K(se);
    }), u.value = s.value.filter(
      (se) => se.fixed === !0 || se.fixed === "left"
    ), c.value = s.value.filter(
      (se) => se.fixed === "right"
    ), xn(R) && s.value[0] && s.value[0].type === "selection" && (R = !!s.value[0].fixed), u.value.length > 0 && s.value[0] && s.value[0].type === "selection" && (s.value[0].fixed ? u.value.some(
      (Ee) => Ee.type !== "selection"
    ) ? R = void 0 : (s.value[0].fixed = R, R || u.value.shift()) : (s.value[0].fixed = !0, u.value.unshift(s.value[0])));
    const B = s.value.filter((se) => !se.fixed);
    i.value = [].concat(u.value).concat(B).concat(c.value);
    const H = mr(B), ee = mr(u.value), te = mr(c.value);
    p.value = H.length, y.value = ee.length, g.value = te.length, l.value = [].concat(ee).concat(H).concat(te), a.value = u.value.length > 0 || c.value.length > 0;
  }, j = (B, H = !1) => {
    B && P(), H ? e.state.doLayout() : e.state.debouncedUpdateLayout();
  }, V = (B) => w.value.some((H) => Ii(H, B)), L = () => {
    b.value = !1;
    const B = w.value;
    w.value = [], B.length && e.emit("selection-change", []);
  }, X = () => {
    let B;
    if (n.value) {
      B = [];
      const H = _t(w.value, n.value), ee = _t(r.value, n.value);
      for (const te in H)
        Bt(H, te) && !ee[te] && B.push(H[te].row);
    } else
      B = w.value.filter((H) => !r.value.includes(H));
    if (B.length) {
      const H = w.value.filter(
        (ee) => !B.includes(ee)
      );
      w.value = H, e.emit("selection-change", H.slice());
    }
  }, be = () => (w.value || []).slice(), Q = (B, H, ee = !0, te = !1) => {
    var ke, ot, at, Pt;
    const se = {
      children: (ot = (ke = e == null ? void 0 : e.store) == null ? void 0 : ke.states) == null ? void 0 : ot.childrenColumnName.value,
      checkStrictly: (Pt = (at = e == null ? void 0 : e.store) == null ? void 0 : at.states) == null ? void 0 : Pt.checkStrictly.value
    };
    if (Lr(
      w.value,
      B,
      H,
      se,
      te ? void 0 : C.value
    )) {
      const dt = (w.value || []).slice();
      ee && e.emit("select", dt, B), e.emit("selection-change", dt);
    }
  }, fe = () => {
    var ke, ot;
    const B = E.value ? !b.value : !(b.value || w.value.length);
    b.value = B;
    let H = !1, ee = 0;
    const te = (ot = (ke = e == null ? void 0 : e.store) == null ? void 0 : ke.states) == null ? void 0 : ot.rowKey.value, { childrenColumnName: se } = e.store.states, Ee = {
      children: se.value,
      checkStrictly: !1
    };
    r.value.forEach((at, Pt) => {
      const dt = Pt + ee;
      Lr(
        w.value,
        at,
        B,
        Ee,
        C.value,
        dt
      ) && (H = !0), ee += ve(Re(at, te));
    }), H && e.emit(
      "selection-change",
      w.value ? w.value.slice() : []
    ), e.emit("select-all", (w.value || []).slice());
  }, ce = () => {
    const B = _t(w.value, n.value);
    r.value.forEach((H) => {
      const ee = Re(H, n.value), te = B[ee];
      te && (w.value[te.index] = H);
    });
  }, de = () => {
    var ot;
    if (((ot = r.value) == null ? void 0 : ot.length) === 0) {
      b.value = !1;
      return;
    }
    const { childrenColumnName: B } = e.store.states, H = n.value ? _t(w.value, n.value) : void 0;
    let ee = 0, te = 0;
    const se = (at) => H ? !!H[Re(at, n.value)] : w.value.includes(at), Ee = (at) => {
      var Pt;
      for (const dt of at) {
        const ql = C.value && C.value.call(null, dt, ee);
        if (se(dt))
          te++;
        else if (!C.value || ql)
          return !1;
        if (ee++, (Pt = dt[B.value]) != null && Pt.length && !Ee(dt[B.value]))
          return !1;
      }
      return !0;
    }, ke = Ee(r.value || []);
    b.value = te === 0 ? !1 : ke;
  }, ve = (B) => {
    var se;
    if (!e || !e.store) return 0;
    const { treeData: H } = e.store.states;
    let ee = 0;
    const te = (se = H.value[B]) == null ? void 0 : se.children;
    return te && (ee += te.length, te.forEach((Ee) => {
      ee += ve(Ee);
    })), ee;
  }, $e = (B, H) => {
    Array.isArray(B) || (B = [B]);
    const ee = {};
    return B.forEach((te) => {
      S.value[te.id] = H, ee[te.columnKey || te.id] = H;
    }), ee;
  }, M = (B, H, ee) => {
    $.value && $.value !== B && ($.value.order = null), $.value = B, F.value = H, _.value = ee;
  }, z = () => {
    let B = O(o);
    Object.keys(S.value).forEach((H) => {
      const ee = S.value[H];
      if (!ee || ee.length === 0) return;
      const te = Nl(
        {
          columns: l.value
        },
        H
      );
      te && te.filterMethod && (B = B.filter((se) => ee.some(
        (Ee) => te.filterMethod.call(null, Ee, se, te)
      )));
    }), A.value = B;
  }, ye = () => {
    r.value = qy(A.value, {
      sortingColumn: $.value,
      sortProp: F.value,
      sortOrder: _.value
    });
  }, he = (B = void 0) => {
    B && B.filter || z(), ye();
  }, He = (B) => {
    const { tableHeaderRef: H } = e.refs;
    if (!H) return;
    const ee = Object.assign({}, H.filterPanels), te = Object.keys(ee);
    if (te.length)
      if (typeof B == "string" && (B = [B]), Array.isArray(B)) {
        const se = B.map(
          (Ee) => By(
            {
              columns: l.value
            },
            Ee
          )
        );
        te.forEach((Ee) => {
          const ke = se.find((ot) => ot.id === Ee);
          ke && (ke.filteredValue = []);
        }), e.store.commit("filterChange", {
          column: se,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        te.forEach((se) => {
          const Ee = l.value.find((ke) => ke.id === se);
          Ee && (Ee.filteredValue = []);
        }), S.value = {}, e.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Je = () => {
    $.value && (M(null, null, null), e.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Xr,
    toggleRowExpansion: Kn,
    updateExpandRows: qn,
    states: Gn,
    isRowExpanded: Zr
  } = ky({
    data: r,
    rowKey: n
  }), {
    updateTreeExpandKeys: Jr,
    toggleTreeExpansion: ft,
    updateTreeData: Kt,
    updateKeyChildren: Un,
    loadOrToggle: Yn,
    states: un
  } = Ky({
    data: r,
    rowKey: n
  }), {
    updateCurrentRowData: Xn,
    updateCurrentRow: Zn,
    setCurrentRowKey: Jn,
    states: Qn
  } = Vy({
    data: r,
    rowKey: n
  });
  return {
    assertRowKey: W,
    updateColumns: P,
    scheduleLayout: j,
    isSelected: V,
    clearSelection: L,
    cleanSelection: X,
    getSelectionRows: be,
    toggleRowSelection: Q,
    _toggleAllSelection: fe,
    toggleAllSelection: null,
    updateSelectionByRowKey: ce,
    updateAllSelected: de,
    updateFilters: $e,
    updateCurrentRow: Zn,
    updateSort: M,
    execFilter: z,
    execSort: ye,
    execQuery: he,
    clearFilter: He,
    clearSort: Je,
    toggleRowExpansion: Kn,
    setExpandRowKeysAdapter: (B) => {
      Xr(B), Jr(B);
    },
    setCurrentRowKey: Jn,
    toggleRowExpansionAdapter: (B, H) => {
      l.value.some(({ type: te }) => te === "expand") ? Kn(B, H) : ft(B, H);
    },
    isRowExpanded: Zr,
    updateExpandRows: qn,
    updateCurrentRowData: Xn,
    loadOrToggle: Yn,
    updateTreeData: Kt,
    updateKeyChildren: Un,
    states: {
      tableSize: t,
      rowKey: n,
      data: r,
      _data: o,
      isComplex: a,
      _columns: s,
      originColumns: i,
      columns: l,
      fixedColumns: u,
      rightFixedColumns: c,
      leafColumns: f,
      fixedLeafColumns: v,
      rightFixedLeafColumns: m,
      updateOrderFns: d,
      leafColumnsLength: p,
      fixedLeafColumnsLength: y,
      rightFixedLeafColumnsLength: g,
      isAllSelected: b,
      selection: w,
      reserveSelection: h,
      selectOnIndeterminate: E,
      selectable: C,
      filters: S,
      filteredData: A,
      sortingColumn: $,
      sortProp: F,
      sortOrder: _,
      hoverRow: N,
      ...Gn,
      ...un,
      ...Qn
    }
  };
}
function Wo(e, t) {
  return e.map((n) => {
    var r;
    return n.id === t.id ? t : ((r = n.children) != null && r.length && (n.children = Wo(n.children, t)), n);
  });
}
function Do(e) {
  e.forEach((t) => {
    var n, r;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (r = t.children) != null && r.length && Do(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function Uy() {
  const e = ue(), t = Gy();
  return {
    ns: oe("table"),
    ...t,
    mutations: {
      setData(s, i) {
        const l = O(s._data) !== i;
        s.data.value = i, s._data.value = i, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(
          e.store.states.defaultExpandAll.value
        ), O(s.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : l ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(s, i, l, u) {
        const c = O(s._columns);
        let f = [];
        l ? (l && !l.children && (l.children = []), l.children.push(i), f = Wo(c, l)) : (c.push(i), f = c), Do(f), s._columns.value = f, s.updateOrderFns.push(u), i.type === "selection" && (s.selectable.value = i.selectable, s.reserveSelection.value = i.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(s, i) {
        var u;
        ((u = i.getColumnIndex) == null ? void 0 : u.call(i)) !== i.no && (Do(s._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(s, i, l, u) {
        const c = O(s._columns) || [];
        if (l)
          l.children.splice(
            l.children.findIndex((v) => v.id === i.id),
            1
          ), Be(() => {
            var v;
            ((v = l.children) == null ? void 0 : v.length) === 0 && delete l.children;
          }), s._columns.value = Wo(c, l);
        else {
          const v = c.indexOf(i);
          v > -1 && (c.splice(v, 1), s._columns.value = c);
        }
        const f = s.updateOrderFns.indexOf(u);
        f > -1 && s.updateOrderFns.splice(f, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(s, i) {
        const { prop: l, order: u, init: c } = i;
        if (l) {
          const f = O(s.columns).find(
            (v) => v.property === l
          );
          f && (f.order = u, e.store.updateSort(f, l, u), e.store.commit("changeSortCondition", { init: c }));
        }
      },
      changeSortCondition(s, i) {
        const { sortingColumn: l, sortProp: u, sortOrder: c } = s, f = O(l), v = O(u), m = O(c);
        m === null && (s.sortingColumn.value = null, s.sortProp.value = null);
        const d = { filter: !0 };
        e.store.execQuery(d), (!i || !(i.silent || i.init)) && e.emit("sort-change", {
          column: f,
          prop: v,
          order: m
        }), e.store.updateTableScrollY();
      },
      filterChange(s, i) {
        const { column: l, values: u, silent: c } = i, f = e.store.updateFilters(l, u);
        e.store.execQuery(), c || e.emit("filter-change", f), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(s, i) {
        e.store.toggleRowSelection(i), e.store.updateAllSelected();
      },
      setHoverRow(s, i) {
        s.hoverRow.value = i;
      },
      setCurrentRow(s, i) {
        e.store.updateCurrentRow(i);
      }
    },
    commit: function(s, ...i) {
      const l = e.store.mutations;
      if (l[s])
        l[s].apply(e, [e.store.states].concat(i));
      else
        throw new Error(`[GpTable] unknown mutation: ${s}`);
    },
    updateTableScrollY: function() {
      Be(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const bn = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  "treeProps.hasChildren": {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  "treeProps.children": {
    key: "childrenColumnName",
    default: "children"
  },
  "treeProps.checkStrictly": {
    key: "checkStrictly",
    default: !1
  }
};
function Yy(e, t) {
  if (!e)
    throw new Error("table is required");
  const n = Uy();
  return n.toggleAllSelection = Tr(n._toggleAllSelection, 10), Object.keys(bn).forEach((r) => {
    Bl(jl(t, r), r, n);
  }), Xy(n, t), n;
}
function Xy(e, t) {
  Object.keys(bn).forEach((n) => {
    k(
      () => jl(t, n),
      (r) => {
        Bl(r, n, e);
      }
    );
  });
}
function Bl(e, t, n) {
  let r = e, o = bn[propsKey];
  typeof bn[propsKey] == "object" && (o = o.key, r = r || bn[propsKey].default), n.states[o].value = r;
}
function jl(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let r = e;
    return n.forEach((o) => {
      r = r[o];
    }), r;
  } else
    return e[t];
}
const Ft = 80;
class Zy {
  constructor(t) {
    Oe(this, "observers");
    Oe(this, "table");
    Oe(this, "store");
    Oe(this, "columns");
    Oe(this, "fit");
    Oe(this, "showHeader");
    Oe(this, "height");
    Oe(this, "scrollX");
    Oe(this, "scrollY");
    Oe(this, "bodyWidth");
    Oe(this, "fixedWidth");
    Oe(this, "rightFixedWidth");
    Oe(this, "tableHeight");
    Oe(this, "headerHeight");
    Oe(this, "appendHeight");
    Oe(this, "footerHeight");
    Oe(this, "gutterWidth");
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = x(null), this.scrollX = x(!1), this.scrollY = x(!1), this.bodyWidth = x(null), this.fixedWidth = x(null), this.rightFixedWidth = x(null), this.gutterWidth = 0;
    for (const n in t)
      Bt(t, n) && (wn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("table is required for table layout");
    if (!this.store)
      throw new Error("store is required for table layout");
  }
  updateScrollY() {
    if (this.height.value === null) return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let r = !0;
      const o = this.scrollY.value;
      return r = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = r, o !== r;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!ge) return;
    const r = this.table.vnode.el;
    if (t = Wy(t), this.height.value = Number(t), !r && (t || t === 0))
      return Be(() => this.setHeight(t, n));
    typeof t == "number" ? (r.style[n] = `${t}px`, this.updateElstHeight()) : typeof t == "string" && (r.style[n] = t, this.updateElstHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "maxHeight");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((r) => {
      r.isColumnGroup ? t.push.apply(t, r.columns) : t.push(r);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t) return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!ge) return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let r = 0;
    const o = this.getFlattenColumns(), a = o.filter((l) => typeof l.width != "number");
    if (o.forEach((l) => {
      typeof l.width == "number" && l.realWidth && (l.realWidth = null);
    }), a.length > 0 && t) {
      if (o.forEach((l) => {
        r += Number(l.width || l.minWidth || Ft);
      }), r <= n) {
        this.scrollX.value = !1;
        const l = n - r;
        if (a.length === 1)
          a[0].realWidth = Number(a[0].minWidth || Ft) + l;
        else {
          const u = a.reduce(
            (v, m) => v + Number(m.minWidth || Ft),
            0
          ), c = l / u;
          let f = 0;
          a.forEach((v, m) => {
            if (m === 0) return;
            const d = Math.floor(
              Number(v.minWidth || Ft) * c
            );
            f += d, v.realWidth = Number(v.minWidth || Ft) + d;
          }), a[0].realWidth = Number(a[0].minWidth || Ft) + l - f;
        }
      } else
        this.scrollX.value = !0, a.forEach((l) => {
          l.realWidth = Number(l.minWidth);
        });
      this.bodyWidth.value = Math.max(r, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      o.forEach((l) => {
        !l.width && !l.minWidth ? l.realWidth = Ft : l.realWidth = Number(l.width || l.minWidth), r += l.realWidth;
      }), this.scrollX.value = r > n, this.bodyWidth.value = r;
    const s = this.store.states.fixedColumns.value;
    if (s.length > 0) {
      let l = 0;
      s.forEach((u) => {
        l += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = l;
    }
    const i = this.store.states.rightFixedColumns.value;
    if (i.length > 0) {
      let l = 0;
      i.forEach((u) => {
        l += Number(u.realWidth || u.width);
      });
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((r) => {
      var o, a;
      switch (t) {
        case "columns":
          (o = r.state) == null || o.onColumnChange(this);
          break;
        case "scrollable":
          (a = r.state) == null || a.onScrollableChange(this);
          break;
        default:
          throw new Error(`event ${t} is not supported`);
      }
    });
  }
}
const Na = Symbol("elTooltip"), Wl = me({
  ...ch,
  ...$a,
  appendTo: {
    type: Z([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: Z(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...zn(["ariaLabel"])
}), Dl = me({
  ...Aa,
  disabled: Boolean,
  trigger: {
    type: Z([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Z(Array),
    default: () => [Pn.enter, Pn.space]
  }
}), {
  useModelToggleProps: Jy,
  useModelToggleEmits: Qy,
  useModelToggle: eb
} = ih("visible"), tb = me({
  ...Ta,
  ...Jy,
  ...Wl,
  ...Dl,
  ...xa,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), nb = [
  ...Qy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], rb = (e, t) => bt(e) ? e.includes(t) : e === t, Ut = (e, t, n) => (r) => {
  rb(O(e), t) && n(r);
}, ob = /* @__PURE__ */ Y({
  name: "GpTooltipTrigger",
  __name: "trigger",
  props: Dl,
  setup(e, { expose: t }) {
    const n = e, r = oe("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = G(
      Na,
      void 0
    ), c = x(null), f = () => {
      if (O(o) || n.disabled)
        return !0;
    }, v = xt(n, "trigger"), m = pt(
      f,
      Ut(v, "hover", i)
    ), d = pt(
      f,
      Ut(v, "hover", l)
    ), p = pt(
      f,
      Ut(v, "click", (h) => {
        h.button === 0 && u(h);
      })
    ), y = pt(
      f,
      Ut(v, "focus", i)
    ), g = pt(
      f,
      Ut(v, "focus", l)
    ), b = pt(
      f,
      Ut(v, "contextmenu", (h) => {
        h.preventDefault(), u(h);
      })
    ), w = pt(
      f,
      (h) => {
        const { code: E } = h;
        n.triggerKeys.includes(E) && (h.preventDefault(), u(h));
      }
    );
    return t({
      triggerRef: c
    }), (h, E) => (I(), we(O(sy), {
      id: O(a),
      "virtual-ref": h.virtualRef,
      open: O(s),
      "virtual-triggering": h.virtualTriggering,
      class: D(O(r).e("trigger")),
      onBlur: O(g),
      onClick: O(p),
      onContextmenu: O(b),
      onFocus: O(y),
      onMouseenter: O(m),
      onMouseleave: O(d),
      onKeydown: O(w)
    }, {
      default: le(() => [
        re(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
}), ab = me({
  to: {
    type: Z([String, Object]),
    required: !0
  },
  disabled: Boolean
}), sb = /* @__PURE__ */ Y({
  __name: "teleport",
  props: ab,
  setup(e) {
    return (t, n) => t.disabled ? re(t.$slots, "default", { key: 0 }) : (I(), we(ru, {
      key: 1,
      to: t.to
    }, [
      re(t.$slots, "default")
    ], 8, ["to"]));
  }
}), ib = Et(sb), lb = /* @__PURE__ */ Y({
  name: "GpTooltipContent",
  inheritAttrs: !1,
  __name: "content",
  props: Wl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Xi(), o = oe("tooltip"), a = x(null);
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: c,
      onClose: f,
      onOpen: v,
      onShow: m,
      onHide: d,
      onBeforeShow: p,
      onBeforeHide: y
    } = G(Na, void 0), g = T(() => n.transition || `${o.namespace.value}-fade-in-linear`), b = T(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    ze(() => {
      s == null || s();
    });
    const w = T(() => O(b) ? !0 : O(u)), h = T(() => n.disabled ? !1 : O(u)), E = T(() => n.appendTo || r.value), C = T(() => n.style ?? {}), S = x(!0), A = () => {
      d(), S.value = !0;
    }, $ = () => {
      if (O(i)) return !0;
    }, F = pt($, () => {
      n.enterable && O(c) === "hover" && v();
    }), _ = pt($, () => {
      O(c) === "hover" && f();
    }), N = () => {
      var P, j;
      (j = (P = a.value) == null ? void 0 : P.updatePopper) == null || j.call(P), p == null || p();
    }, W = () => {
      y == null || y();
    }, K = () => {
      m(), s = Uv(
        T(() => {
          var P;
          return (P = a.value) == null ? void 0 : P.popperContentRef;
        }),
        () => {
          if (O(i)) return;
          O(c) !== "hover" && f();
        }
      );
    }, R = () => {
      n.virtualTriggering || f();
    };
    return k(
      () => O(u),
      (P) => {
        P ? S.value = !1 : s == null || s();
      },
      {
        flush: "post"
      }
    ), k(
      () => n.content,
      () => {
        var P, j;
        (j = (P = a.value) == null ? void 0 : P.updatePopper) == null || j.call(P);
      }
    ), t({
      contentRef: a
    }), (P, j) => (I(), we(O(ib), {
      disabled: !P.teleported,
      to: E.value
    }, {
      default: le(() => [
        pe(Vo, {
          name: g.value,
          onAfterLeave: A,
          onBeforeEnter: N,
          onAfterEnter: K,
          onBeforeLeave: W
        }, {
          default: le(() => [
            w.value ? Ke((I(), we(O(gy), _r({
              key: 0,
              id: O(l),
              ref_key: "contentRef",
              ref: a
            }, P.$attrs, {
              "aria-label": P.ariaLabel,
              "aria-hidden": S.value,
              "boundaries-padding": P.boundariesPadding,
              "fallback-placements": P.fallbackPlacements,
              "gpu-acceleration": P.gpuAcceleration,
              offset: P.offset,
              placement: P.placement,
              "popper-options": P.popperOptions,
              strategy: P.strategy,
              effect: P.effect,
              enterable: P.enterable,
              pure: P.pure,
              "popper-class": P.popperClass,
              "popper-style": [P.popperStyle, C.value],
              "reference-el": P.referenceEl,
              "trigger-target-el": P.triggerTargetEl,
              visible: h.value,
              "z-index": P.zIndex,
              onMouseenter: O(F),
              onMouseleave: O(_),
              onBlur: R,
              onClose: O(f)
            }), {
              default: le(() => [
                re(P.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Cn, h.value]
            ]) : Ce("", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
}), ub = ["innerHTML"], cb = { key: 1 }, fb = /* @__PURE__ */ Y({
  name: "GpTooltip",
  __name: "tooltip",
  props: tb,
  emits: nb,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    uh();
    const a = ca(), s = x(), i = x(), l = () => {
      var w;
      const b = O(s);
      b && ((w = b.popperInstanceRef) == null || w.update());
    }, u = x(!1), c = x(), { show: f, hide: v, hasUpdateHandler: m } = eb({
      indicator: u,
      toggleReason: c
    }), { onOpen: d, onClose: p } = fh({
      showAfter: xt(r, "showAfter"),
      hideAfter: xt(r, "hideAfter"),
      autoClose: xt(r, "autoClose"),
      open: f,
      close: v
    }), y = T(
      () => lt(r.visible) && !m.value
    );
    Ge(Na, {
      controlled: y,
      id: a,
      open: ti(u),
      trigger: xt(r, "trigger"),
      onOpen: (b) => {
        d(b);
      },
      onClose: (b) => {
        p(b);
      },
      onToggle: (b) => {
        O(u) ? p(b) : d(b);
      },
      onShow: () => {
        o("show", c.value);
      },
      onHide: () => {
        o("hide", c.value);
      },
      onBeforeShow: () => {
        o("before-show", c.value);
      },
      onBeforeHide: () => {
        o("before-hide", c.value);
      },
      updatePopper: l
    }), k(
      () => r.disabled,
      (b) => {
        b && u.value && (u.value = !1);
      }
    );
    const g = (b) => {
      var E, C;
      const w = (C = (E = i.value) == null ? void 0 : E.contentRef) == null ? void 0 : C.popperContentRef, h = (b == null ? void 0 : b.relatedTarget) || document.activeElement;
      return w && w.contains(h);
    };
    return ou(() => u.value && v()), t({
      popperRef: s,
      contentRef: i,
      isFocusInsideContent: g,
      updatePopper: l,
      onOpen: d,
      onClose: p,
      hide: v
    }), (b, w) => (I(), we(O(my), {
      ref_key: "popperRef",
      ref: s,
      role: b.role
    }, {
      default: le(() => [
        pe(ob, {
          disabled: b.disabled,
          trigger: b.trigger,
          "trigger-keys": b.triggerKeys,
          "virtual-ref": b.virtualRef,
          "virtual-triggering": b.virtualTriggering
        }, {
          default: le(() => [
            b.$slots.default ? re(b.$slots, "default", { key: 0 }) : Ce("", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        pe(lb, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": b.ariaLabel,
          "boundaries-padding": b.boundariesPadding,
          content: b.content,
          disabled: b.disabled,
          effect: b.effect,
          enterable: b.enterable,
          "fallback-placements": b.fallbackPlacements,
          "hide-after": b.hideAfter,
          "gpu-acceleration": b.gpuAcceleration,
          offset: b.offset,
          persistent: b.persistent,
          "popper-class": b.popperClass,
          "popper-style": b.popperStyle,
          placement: b.placement,
          "popper-options": b.popperOptions,
          pure: b.pure,
          "raw-content": b.rawContent,
          "reference-el": b.referenceEl,
          "trigger-target-el": b.triggerTargetEl,
          "show-after": b.showAfter,
          strategy: b.strategy,
          teleported: b.teleported,
          transition: b.transition,
          "virtual-triggering": b.virtualTriggering,
          "z-index": b.zIndex,
          "append-to": b.appendTo
        }, {
          default: le(() => [
            re(b.$slots, "content", {}, () => [
              b.rawContent ? (I(), q("span", {
                key: 0,
                innerHTML: b.content
              }, null, 8, ub)) : (I(), q("span", cb, gt(b.content), 1))
            ])
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
}), db = Et(fb), { CheckboxGroup: pb } = Fr, vb = Y({
  name: "GpTableFilterPanel",
  components: {
    GpCheckbox: Fr,
    GpCheckboxGroup: pb,
    GpScrollbar: Tl,
    GpTooltip: db,
    // GpIcon,
    ArrowDown: Ev,
    ArrowUp: xv
  },
  directives: { ClickOutside: $y },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    },
    appendTo: {
      type: String
    }
  },
  setup(e) {
    const t = ue(), n = oe("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const o = x(!1), a = x(null), s = T(() => e.column && e.column.filters), i = T(() => e.column.filterClassName ? `${n.b()} ${e.column.filterClassName}` : n.b()), l = T({
      get: () => {
        var h;
        return (((h = e.column) == null ? void 0 : h.filteredValue) || [])[0];
      },
      set: (h) => {
        u.value && (typeof h < "u" && h !== null ? u.value.splice(0, 1, h) : u.value.splice(0, 1));
      }
    }), u = T({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(h) {
        e.column && e.upDataColumn("filteredValue", h);
      }
    }), c = T(() => e.column ? e.column.filterMultiple : !0), f = (h) => h.value === l.value, v = () => {
      o.value = !1;
    }, m = (h) => {
      h.stopPropagation(), o.value = !o.value;
    }, d = () => {
      o.value = !1;
    }, p = () => {
      b(u.value), v();
    }, y = () => {
      u.value = [], b(u.value), v();
    }, g = (h) => {
      l.value = h, b(typeof h < "u" && h !== null ? u.value : []), v();
    }, b = (h) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: h
      }), e.store.updateAllSelected();
    };
    k(
      o,
      (h) => {
        e.column && e.upDataColumn("filterOpened", h);
      },
      {
        immediate: !0
      }
    );
    const w = T(() => {
      var h, E;
      return (E = (h = a.value) == null ? void 0 : h.popperRef) == null ? void 0 : E.contentRef;
    });
    return {
      tooltipVisible: o,
      multiple: c,
      filterClassName: i,
      filteredValue: u,
      filterValue: l,
      filters: s,
      handleConfirm: p,
      handleReset: y,
      handleSelect: g,
      isActive: f,
      // t,
      ns: n,
      showFilterPanel: m,
      hideFilterPanel: d,
      popperPaneRef: w,
      tooltip: a
    };
  }
}), hb = { key: 0 }, gb = ["disabled"], mb = ["label", "onClick"];
function yb(e, t, n, r, o, a) {
  const s = Ve("gp-checkbox"), i = Ve("gp-checkbox-group"), l = Ve("gp-scrollbar"), u = Ve("arrow-up"), c = Ve("arrow-down"), f = Ve("gp-icon"), v = Ve("gp-tootilp"), m = ai("click-outside");
  return I(), we(v, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.filterClassName,
    persistent: "",
    "append-to": e.appendTo
  }, {
    content: le(() => [
      e.multiple ? (I(), q("div", hb, [
        ne("div", {
          class: D(e.ns.e("content"))
        }, [
          pe(l, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: le(() => [
              pe(i, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (d) => e.filteredValue = d),
                class: D(e.ns.e("checkbox-group"))
              }, {
                default: le(() => [
                  (I(!0), q(At, null, Ia(e.filters, (d) => (I(), we(s, {
                    key: d.value,
                    value: d.value
                  }, {
                    default: le(() => [
                      _n(gt(d.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        ne("div", {
          class: D(e.ns.e("bottom"))
        }, [
          ne("button", {
            class: D({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...d) => e.handleConfirm && e.handleConfirm(...d))
          }, " 确定 ", 10, gb),
          ne("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...d) => e.handleReset && e.handleReset(...d))
          }, " 取消 ")
        ], 2)
      ])) : (I(), q("ul", {
        key: 1,
        class: D(e.ns.e("list"))
      }, [
        ne("li", {
          class: D([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (d) => e.handleSelect(null))
        }, gt("gp.table.clearFilter"), 2),
        (I(!0), q(At, null, Ia(e.filters, (d) => (I(), q("li", {
          key: d.value,
          class: D([e.ns.e("list-item"), e.ns.is("active", e.isActive(d))]),
          label: d.value,
          onClick: (p) => e.handleSelect(d.value)
        }, gt(d.text), 11, mb))), 128))
      ], 2))
    ]),
    default: le(() => [
      Ke((I(), q("span", {
        class: D([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...d) => e.showFilterPanel && e.showFilterPanel(...d))
      }, [
        pe(f, null, {
          default: le(() => [
            re(e.$slots, "filter-icon", {}, () => [
              e.column.filterOpened ? (I(), we(u, { key: 0 })) : (I(), we(c, { key: 1 }))
            ])
          ]),
          _: 3
        })
      ], 2)), [
        [m, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 3
  }, 8, ["visible", "placement", "popper-class", "append-to"]);
}
const bb = /* @__PURE__ */ Ea(vb, [["render", yb]]);
function zl(e) {
  const t = ue();
  zo(() => {
    n.value.addObserver(t);
  }), xe(() => {
    r(n.value), o(n.value);
  }), ko(() => {
    r(n.value), o(n.value);
  }), Mr(() => {
    n.value.removeObserver(t);
  });
  const n = T(() => {
    const a = e.layout;
    if (!a)
      throw new Error("layout is required for layout observer");
    return a;
  }), r = (a) => {
    var u;
    const s = ((u = e.vnode.el) == null ? void 0 : u.querySelectorAll("colgroup > col")) || [];
    if (!s.length) return;
    const i = a.getFlattenColumns(), l = {};
    i.forEach((c) => {
      l[c.id] = c;
    });
    for (let c = 0, f = s.length; c < f; c++) {
      const v = s[c], m = v.getAttribute("name"), d = l[m];
      d && v.setAttribute("width", d.realWidth || d.width);
    }
  }, o = (a) => {
    var l, u;
    const s = ((l = e.vnode.el) == null ? void 0 : l.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, f = s.length; c < f; c++)
      s[c].setAttribute("width", a.scrollY.value ? a.gutterWidth : "0");
    const i = ((u = e.vnode.el) == null ? void 0 : u.querySelectorAll("th.gutter")) || [];
    for (let c = 0, f = i.length; c < f; c++) {
      const v = i[c];
      v.style.width = a.scrollY.value ? `${a.gutterWidth}px` : "0", v.style.display = a.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: r,
    onScrollableChange: o
  };
}
const ct = Symbol("GpTable");
function wb(e, t) {
  const n = ue(), r = G(ct), o = (p) => {
    p.stopPropagation();
  }, a = (p, y) => {
    !y.filter && y.sortable ? d(p, y, !1) : y.filterable && !y.sortable && o(p), r == null || r.emit("header-click", y, p);
  }, s = (p, y) => {
    r == null || r.emit("header-contextmenu", y, p);
  }, i = x(null), l = x(!1), u = x({}), c = (p, y) => {
    if (ge && !(y.children && y.children.length > 0) && i.value && e.border) {
      l.value = !0;
      const g = r;
      t("set-drag-visible", !0);
      const w = (g == null ? void 0 : g.vnode.el).getBoundingClientRect().left, h = n.vnode.el.querySelector(`th.${y.id}`), E = h.getBoundingClientRect(), C = E.left - w + 30;
      Ar(h, "noclick"), u.value = {
        startMouseLeft: p.clientX,
        startLeft: E.right - w,
        startColumnLeft: E.left - w,
        tableLeft: w
      };
      const S = g == null ? void 0 : g.refs.resizeProxy;
      S.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const A = (F) => {
        const _ = F.clientX - u.value.startMouseLeft, N = u.value.startLeft + _;
        S.style.left = `${Math.max(C, N)}px`;
      }, $ = () => {
        if (l.value) {
          const { startColumnLeft: F, startLeft: _ } = u.value, W = Number.parseInt(S.style.left, 10) - F;
          y.width = y.realWidth = W, g == null || g.emit(
            "header-dragend",
            y.width,
            _ - F,
            y,
            p
          ), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", l.value = !1, i.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", $), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          $n(h, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", A), document.addEventListener("mouseup", $);
    }
  }, f = (p, y) => {
    var w;
    if (y.children && y.children.length > 0) return;
    const g = p.target;
    if (!mt(g)) return;
    const b = g == null ? void 0 : g.closest("th");
    if (!(!y || !y.resizable || !b) && !l.value && e.border) {
      const h = b.getBoundingClientRect(), E = document.body.style, C = ((w = b.parentNode) == null ? void 0 : w.lastElementChild) === b;
      h.width > 12 && h.right - p.pageX < 8 && !C ? (E.cursor = "col-resize", dn(b, "is-sortable") && (b.style.cursor = "col-resize"), i.value = y) : l.value || (E.cursor = "", dn(b, "is-sortable") && (b.style.cursor = "pointer"), i.value = null);
    }
  }, v = () => {
    ge && (document.body.style.cursor = "");
  }, m = ({ order: p, sortOrders: y }) => {
    if (p === "") return y[0];
    const g = y.indexOf(p || null);
    return y[g > y.length - 2 ? 0 : g + 1];
  }, d = (p, y, g) => {
    var $;
    p.stopPropagation();
    const b = y.order === g ? null : g || m(y), w = ($ = p.target) == null ? void 0 : $.closest("th");
    if (w && dn(w, "onclick")) {
      $n(w, "onclick");
      return;
    }
    if (!y.sortable) return;
    const h = p.currentTarget;
    if (["ascending", "descending"].some(
      (F) => dn(h, F) && !y.sortOrders.includes(F)
    ))
      return;
    const E = e.store.states;
    let C = E.sortProp.value, S;
    const A = E.sortingColumn.value;
    (A !== y || A === y && A.order === null) && (A && (A.order = null), E.sortingColumn.value = y, C = y.property), b ? S = y.order = b : S = y.order = null, E.sortProp.value = C, E.sortOrder.value = S, r == null || r.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: a,
    handleHeaderContextMenu: s,
    handleMouseDown: c,
    handleMouseMove: f,
    handleMouseOut: v,
    handleSortClick: d,
    handleFilterClick: o
  };
}
function Cb(e) {
  const t = G(ct), n = oe("table");
  return {
    getHeaderRowStyle: (i) => {
      const l = t == null ? void 0 : t.props.headerRowStyle;
      return typeof l == "function" ? l.call(null, { rowIndex: i }) : l;
    },
    getHeaderRowClass: (i) => {
      const l = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? l.push(u) : typeof u == "function" && l.push(u.call(null, { rowIndex: i })), l.join(" ");
    },
    getHeaderCellStyle: (i, l, u, c) => {
      let f = (t == null ? void 0 : t.props.headerCellStyle) ?? {};
      typeof f == "function" && (f = f.call(null, {
        rowIndex: i,
        columnIndex: l,
        row: u,
        column: c
      }));
      const v = La(
        l,
        c.fixed,
        e.store,
        u
      );
      return on(v, "left"), on(v, "right"), Object.assign({}, f, v);
    },
    getHeaderCellClass: (i, l, u, c) => {
      const f = Fa(
        n.b(),
        l,
        c.fixed,
        e.store,
        u
      ), v = [
        c.id,
        c.order,
        c.headerAlign,
        c.className,
        c.labelClassName,
        ...f
      ];
      c.children || v.push("is-leaf"), c.sortable && v.push("is-sortable");
      const m = t == null ? void 0 : t.props.headerCellClassName;
      return typeof m == "string" ? v.push(m) : typeof m == "function" && v.push(
        m.call(null, {
          rowIndex: i,
          columnIndex: l,
          row: u,
          column: c
        })
      ), v.push(n.e("cell")), v.filter((d) => !!d).join(" ");
    }
  };
}
const Hl = (e) => {
  const t = [];
  return e.forEach(() => {
    e.children ? (t.push(column), t.push.apply(t, Hl(column.children))) : t.push(column);
  }), t;
}, kl = (e) => {
  let t = 1;
  const n = (a, s) => {
    if (s && (a.level = s.level + 1, t = Math.max(t, a.level)), a.children) {
      let i = 0;
      a.children.forEach((l) => {
        n(l, a), i += l.colSpan;
      }), a.colSpan = i;
    } else
      a.colSpan = 1;
  };
  e.forEach((a) => {
    a.level = 1, n(a, void 0);
  });
  const r = [];
  for (let a = 0; a < t; a++)
    r.push([]);
  return Hl(e).forEach((a) => {
    a.children ? (a.rowSpan = 1, a.children.forEach((s) => s.isSubColumn = !0)) : a.rowSpan = t - a.level + 1, r[a.level - 1].push(a);
  }), r;
};
function Sb(e) {
  const t = G(ct), n = T(() => kl(e.store.states.originColumns.value));
  return {
    isGroup: T(() => {
      const a = n.value.length > 1;
      return a && t && (t.state.isGroup.value = !0), a;
    }),
    toggleAllSelection: (a) => {
      a.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
const Eb = Y({
  name: "GpTableHeader",
  components: {
    // GpCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    },
    border: Boolean,
    appendFilterPanelTo: {
      type: String
    }
  },
  setup(e, { emit: t }) {
    const n = ue(), r = G(ct), o = oe("table"), a = x({}), { onColumnsChange: s, onScrollableChange: i } = zl(r);
    xe(async () => {
      await Be(), await Be();
      const { prop: C, order: S } = e.defaultSort;
      r == null || r.store.commit("sort", { prop: C, order: S, init: !0 });
    });
    const {
      handleHeaderClick: l,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: f,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: d
    } = wb(e, t), {
      getHeaderRowStyle: p,
      getHeaderRowClass: y,
      getHeaderCellStyle: g,
      getHeaderCellClass: b
    } = Cb(e), { isGroup: w, toggleAllSelection: h, columnRows: E } = Sb(
      e
    );
    return n.state = {
      onColumnsChange: s,
      onScrollableChange: i
    }, n.filterPanels = a, {
      ns: o,
      filterPanels: a,
      onColumnsChange: s,
      onScrollableChange: i,
      columnRows: E,
      getHeaderRowClass: y,
      getHeaderRowStyle: p,
      getHeaderCellClass: b,
      getHeaderCellStyle: g,
      handleHeaderClick: l,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: f,
      handleMouseOut: v,
      handleSortClick: m,
      handleFilterClick: d,
      isGroup: w,
      toggleAllSelection: h
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: r,
      getHeaderCellClass: o,
      getHeaderRowClass: a,
      getHeaderRowStyle: s,
      handleHeaderClick: i,
      handleHeaderContextMenu: l,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: f,
      handleMouseOut: v,
      store: m,
      $parent: d
    } = this;
    let p = 1;
    return U(
      "thead",
      {
        class: { [e.is("group")]: t }
      },
      n.map(
        (y, g) => U(
          "tr",
          {
            class: a(g),
            key: g,
            style: s(g)
          },
          y.map((b, w) => (b.rowSpan > p && (p = b.rowSpan), U(
            "th",
            {
              class: o(
                g,
                w,
                y,
                b
              ),
              colspan: b.colSpan,
              key: `${b.id}-thead`,
              rowspan: b.rowSpan,
              style: r(
                g,
                w,
                y,
                b
              ),
              onClick: (h) => {
                h.currentTarget.classList.contains("noclick") || i(h, b);
              },
              onContextmenu: (h) => l(h, b),
              onMousedown: (h) => u(h, b),
              onMousemove: (h) => c(h, b),
              onMouseout: v
            },
            [
              U(
                "div",
                {
                  class: [
                    "cell",
                    b.filteredValue && b.filteredValue.length > 0 ? "highlight" : ""
                  ]
                },
                [
                  b.renderHeader ? b.renderHeader({
                    column: b,
                    $index: w,
                    store: m,
                    _self: d
                  }) : b.label,
                  b.sortable && U(
                    "span",
                    {
                      onClick: (h) => f(h, b),
                      class: "caret-wrapper"
                    },
                    [
                      U("i", {
                        onClick: (h) => f(h, b, "ascending"),
                        class: "sort-caret ascending"
                      }),
                      U("i", {
                        onClick: (h) => f(h, b, "descending"),
                        class: "sort-caret descending"
                      })
                    ]
                  ),
                  b.filterable && U(
                    bb,
                    {
                      store: m,
                      placement: b.filterPlacement || "bottom-start",
                      appendTo: d.appendFilterPanelTo,
                      column: b,
                      upDataColumn: (h, E) => {
                        b[h] = E;
                      }
                    },
                    {
                      "filter-icon": () => b.renderFilterIcon ? b.renderFilterIcon({
                        filterOpened: b.filterOpened
                      }) : null
                    }
                  )
                ]
              )
            ]
          )))
        )
      )
    );
  }
});
function co(e, t, n = 0.03) {
  return e - t > n;
}
function Ob(e) {
  const t = G(ct), n = x(""), r = x(U("div")), o = (d, p, y) => {
    var E;
    const g = t, b = uo(d);
    let w;
    const h = (E = g == null ? void 0 : g.vnode.el) == null ? void 0 : E.dataset.prefix;
    b && (w = Zs(
      {
        columns: e.store.states.columns.value
      },
      b,
      h
    ), w && (g == null || g.emit(`cell-${y}`, p, w, b, d))), g == null || g.emit(`row-${y}`, p, w, d);
  }, a = (d, p) => {
    o(d, p, "dblclick");
  }, s = (d, p) => {
    e.store.commit("setCurrentRow", p), o(d, p, "click");
  }, i = (d, p) => {
    o(d, p, "contextmenu");
  }, l = Tr((d) => {
    e.store.commit("setHoverRow", d);
  }, 30), u = Tr(() => {
    e.store.commit("setHoverRow", null);
  }, 30), c = (d) => {
    const p = window.getComputedStyle(d, null), y = Number.parseInt(p.paddingLeft, 10) || 0, g = Number.parseInt(p.paddingRight, 10) || 0, b = Number.parseInt(p.paddingTop, 10) || 0, w = Number.parseInt(p.paddingBottom, 10) || 0;
    return {
      left: y,
      right: g,
      top: b,
      bottom: w
    };
  }, f = (d, p, y) => {
    let g = p.target.parentNode;
    for (; d > 1 && (g = g == null ? void 0 : g.nextSibling, !(!g || g.nodeName !== "TR")); )
      y(g, "hover-row hover-fixed-row"), d--;
  };
  return {
    handleDoubleClick: a,
    handleClick: s,
    handleContextMenu: i,
    handleMouseEnter: l,
    handleMouseLeave: u,
    handleCellMouseEnter: (d, p, y) => {
      var P;
      const g = t, b = uo(d), w = (P = g == null ? void 0 : g.vnode.el) == null ? void 0 : P.dataset.prefix;
      if (b) {
        const j = Zs(
          {
            columns: e.store.states.columns.value
          },
          b,
          w
        );
        b.rowSpan > 1 && f(b.rowSpan, d, Ar);
        const V = g.hoverState = { cell: b, column: j, row: p };
        g == null || g.emit(
          "cell-mouse-enter",
          V.row,
          V.column,
          V.cell,
          d
        );
      }
      if (!y)
        return;
      const h = d.target.querySelector(
        ".cell"
      );
      if (!(dn(h, `${w}-tooltip`) && h.childNodes.length))
        return;
      const E = document.createRange();
      E.setStart(h, 0), E.setEnd(h, h.childNodes.length);
      const { width: C, height: S } = E.getBoundingClientRect(), { width: A, height: $ } = h.getBoundingClientRect(), { top: F, left: _, right: N, bottom: W } = c(h), K = _ + N, R = F + W;
      (co(C + K, A) || co(S + R, $) || co(h.scrollWidth, A)) && Hy(
        y,
        b.innerText || b.textContent,
        b,
        g
      );
    },
    handleCellMouseLeave: (d) => {
      const p = uo(d);
      if (!p) return;
      p.rowSpan > 1 && f(p.rowSpan, d, $n);
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit(
        "cell-mouse-leave",
        y == null ? void 0 : y.row,
        y == null ? void 0 : y.column,
        y == null ? void 0 : y.cell,
        d
      );
    },
    tooltipContent: n,
    tooltipTrigger: r
  };
}
function Tb(e) {
  const t = G(ct), n = oe("table");
  return {
    getRowStyle: (u, c) => {
      const f = t == null ? void 0 : t.props.rowStyle;
      return typeof f == "function" ? f.call(null, {
        row: u,
        rowIndex: c
      }) : f || null;
    },
    getRowClass: (u, c) => {
      const f = [n.e("row")];
      t != null && t.props.highlightCurrentRow && u === e.store.states.currentRow.value && f.push("current-row"), e.stripe && c % 2 === 1 && f.push(n.em("row", "striped"));
      const v = t == null ? void 0 : t.props.rowClassName;
      return typeof v == "string" ? f.push(v) : typeof v == "function" && f.push(
        v.call(null, {
          row: u,
          rowIndex: c
        })
      ), f;
    },
    getCellStyle: (u, c, f, v) => {
      const m = t == null ? void 0 : t.props.cellStyle;
      typeof m == "function" && m.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: f,
        column: v
      });
      const d = La(
        c,
        e == null ? void 0 : e.fixed,
        e.store
      );
      return on(d, "left"), on(d, "right"), Object.assign({}, m, d);
    },
    getCellClass: (u, c, f, v, m) => {
      const d = Fa(
        n.b(),
        c,
        e == null ? void 0 : e.fixed,
        e.store,
        void 0,
        m
      ), p = [v.id, v.align, v.className, ...d], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? p.push(y) : typeof y == "function" && p.push(
        y.call(null, {
          rowIndex: u,
          columnIndex: c,
          row: f,
          column: v
        })
      ), p.push(n.e("cell")), p.filter((g) => !!g).join(" ");
    },
    getSpan: (u, c, f, v) => {
      let m = 1, d = 1;
      const p = t == null ? void 0 : t.props.spanMethod;
      if (typeof p == "function") {
        const y = p({
          row: u,
          column: c,
          rowIndex: f,
          columnIndex: v
        });
        Array.isArray(y) ? (m = y[0], d = y[1]) : typeof y == "object" && (m = y.rowspan, d = y.colspan);
      }
      return { rowspan: m, colspan: d };
    },
    getColspanRealWidth: (u, c, f) => {
      if (c < 1)
        return u[f].realWidth;
      const v = u.map(({ realWidth: m, width: d }) => m || d).slice(f, f + c);
      return Number(
        v.reduce((m, d) => Number(m) + Number(v), -1)
      );
    }
  };
}
const xb = ["colspan", "rowspan"], Ab = /* @__PURE__ */ Y({
  name: "TableTdWrapper",
  __name: "td-wrapper",
  props: {
    colspan: {
      type: Number,
      default: 1
    },
    rowspan: {
      type: Number,
      default: 1
    }
  },
  setup(e) {
    return (t, n) => (I(), q("td", {
      colspan: e.colspan,
      rowspan: e.rowspan
    }, [
      re(t.$slots, "default")
    ], 8, xb));
  }
});
function $b(e) {
  const t = G(ct), n = oe("table"), {
    handleDoubleClick: r,
    handleClick: o,
    handleContextMenu: a,
    handleMouseEnter: s,
    handleMouseLeave: i,
    handleCellMouseEnter: l,
    handleCellMouseLeave: u,
    tooltipContent: c,
    tooltipTrigger: f
  } = Ob(e), {
    getRowStyle: v,
    getRowClass: m,
    getCellStyle: d,
    getCellClass: p,
    getSpan: y,
    getColspanRealWidth: g
  } = Tb(e), b = T(() => e.store.states.columns.value.findIndex(
    ({ type: S }) => S === "default"
  )), w = (S, A) => {
    const $ = t.props.rowKey;
    return $ ? Re(S, $) : A;
  }, h = (S, A, $, F = !1) => {
    const { tooltipEffect: _, tooltipOptions: N, store: W } = e, { indent: K, columns: R } = W.states, P = m(S, A);
    let j = !0;
    return $ && (P.push(n.em("row", `level-${$.level}`)), j = $.display), U(
      "tr",
      {
        style: [j ? null : { display: "none" }, v(S, A)],
        class: P,
        key: w(S, A),
        onDblclick: (L) => r(L, S),
        onClick: (L) => o(L, S),
        onContextmenu: (L) => a(L, S),
        onMouseenter: () => s(A),
        onMouseleave: i
      },
      R.value.map((L, X) => {
        const { rowspan: be, colspan: Q } = y(S, L, A, X);
        if (!be || !Q)
          return null;
        const fe = Object.assign({}, L);
        fe.realWidth = g(
          R.value,
          Q,
          X
        );
        const ce = {
          store: e.store,
          _self: e.context || t,
          column: fe,
          row: S,
          $index: A,
          cellIndex: X,
          expanded: F
        };
        X === b.value && $ && (ce.treeNode = {
          indent: $.level * K.value,
          level: $.level
        }, typeof $.expanded == "boolean" && (ce.treeNode.expanded = $.expanded, "loading" in $ && (ce.treeNode.loading = $.loading), "noLazyChildren" in $ && (ce.treeNode.noLazyChildren = $.noLazyChildren)));
        const de = `${w(S, A)},${X}`, ve = fe.columnKey || fe.rawColumnKey || "", $e = L.showOverflowTooltip && hv(
          {
            effect: _
          },
          N,
          L.showOverflowTooltip
        );
        return U(
          Ab,
          {
            style: d(A, X, S, L),
            class: p(A, X, S, L, Q - 1),
            key: `${ve}${de}`,
            rowspan: be,
            colspan: Q,
            onMouseenter: (M) => l(M, S, $e),
            onMouseleave: u
          },
          {
            default: () => E(X, L, ce)
          }
        );
      })
    );
  }, E = (S, A, $) => A.renderCell($);
  return {
    wrappedRowRender: (S, A) => {
      const $ = e.store, { isRowExpanded: F, assertRowKey: _ } = $, { treeData: N, lazyTreeNodeMap: W, childrenColumnName: K, rowKey: R } = $.states, P = $.states.columns.value;
      if (P.some(({ type: V }) => V === "expand")) {
        const V = F(S), L = h(S, A, void 0, V), X = t.renderExpanded;
        return V ? X ? [
          [
            L,
            U(
              "tr",
              {
                key: `expanded-row__${L.key}`
              },
              [
                U(
                  "td",
                  {
                    colspan: P.length,
                    class: `${n.e("cell")} ${n.e("expanded-cell")}`
                  },
                  [X({ row: S, $index: A, store: $, expanded: V })]
                )
              ]
            )
          ]
        ] : (console.error("renderExpanded is not defined"), L) : [[L]];
      } else if (Object.keys(N.value).length) {
        _();
        const V = Re(S, R.value);
        let L = N.value[V], X = null;
        L && (X = {
          expanded: L.expanded,
          level: L.level,
          display: !0
        }, typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (X.noLazyChildren = !(L.children && L.children.length)), X.loading = L.loading));
        const be = [h(S, A, X)];
        if (L) {
          let Q = 0;
          const fe = (de, ve) => {
            de && de.length && ve && de.forEach(($e) => {
              const M = {
                display: ve.display && ve.expanded,
                level: ve.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, z = Re($e, R.value);
              if (z == null)
                throw new Error("row key is required for neseted tree node");
              L = { ...N.value[z] }, L && (M.expanded = L.expanded, L.level = L.level || M.level, L.display = !!(L.expanded && M.display), typeof L.lazy == "boolean" && (typeof L.loaded == "boolean" && L.loaded && (M.noLazyChildren = !(L.children && L.children.length)), M.loading = L.loading)), Q++, be.push(h($e, A + Q, M)), L && (W.value[z] || $e[K.value]);
            });
          };
          L.display = !0;
          const ce = W.value[V] || S[K.value];
          fe(ce, L);
        }
        return be;
      } else
        return h(S, A, void 0);
    },
    tooltipContent: c,
    tooltipTrigger: f
  };
}
const Pb = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
}, Rb = Y({
  name: "GpTableBody",
  props: Pb,
  setup(e) {
    const t = ue(), n = G(ct), r = oe("table"), { wrappedRowRender: o, tooltipContent: a, tooltipTrigger: s } = $b(e), { onColumnsChange: i, onScrollableChange: l } = zl(n), u = [];
    return k(e.store.states.hoverRow, (c, f) => {
      var y;
      const v = t == null ? void 0 : t.vnode.el, m = Array.from((v == null ? void 0 : v.children) || []).filter(
        (g) => g == null ? void 0 : g.classList.contains(`${r.e("row")}`)
      );
      let d = c;
      const p = (y = m[d]) == null ? void 0 : y.childNodes;
      if (p != null && p.length) {
        let g = 0;
        Array.from(p).reduce((w, h, E) => {
          var C, S;
          return ((C = p[E]) == null ? void 0 : C.colSpan) > 1 && (g = (S = p[E]) == null ? void 0 : S.colSpan), h.nodeName !== "TD" && g === 0 && w.push(E), g > 0 && g--, w;
        }, []).forEach((w) => {
          var h;
          for (d = c; d > 0; ) {
            const E = (h = m[d - 1]) == null ? void 0 : h.childNodes;
            if (E[w] && E[w].nodeName === "TD" && E[w].rowSpan > 1) {
              Ar(E[w], "hover-cell"), u.push(E[w]);
              break;
            }
            d--;
          }
        });
      } else
        u.forEach((g) => $n(g, "hover-cell")), u.length = 0;
      !e.store.states.isComplex.value || !ge || Jv(() => {
        const g = m[f], b = m[c];
        g && !g.classList.contains("hover-fixed-row") && $n(g, "hover-row"), b && Ar(b, "hover-row");
      });
    }), Mr(() => {
      Ae == null || Ae();
    }), {
      ns: r,
      onColumnsChange: i,
      onScrollableChange: l,
      wrappedRowRender: o,
      tooltipContent: a,
      tooltipTrigger: s
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return U("tbody", { tabIndex: -1 }, [
      n.reduce((r, o) => r.concat(e(o, r.length)), [])
    ]);
  }
});
function Fb() {
  const e = G(ct), t = e == null ? void 0 : e.store, n = T(() => t.states.fixedLeafColumnsLength.value), r = T(() => t.states.rightFixedColumns.value.length), o = T(() => t.states.columns.value.length), a = T(() => t.states.fixedColumns.value.length), s = T(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: r,
    columnsCount: o,
    leftFixedCount: a,
    rightFixedCount: s,
    columns: t.states.columns
  };
}
function Lb(e) {
  const { columns: t } = Fb(), n = oe("table");
  return {
    getCellClasses: (a, s) => {
      const i = a[s], l = [
        n.e("cell"),
        i.id,
        i.align,
        i.labelClassName,
        ...Fa(n.b(), s, i.fixed, e.store)
      ];
      return i.className && l.push(i.className), i.children || l.push(n.is("leaf")), l;
    },
    getCellStyles: (a, s) => {
      const i = La(
        s,
        a.fixed,
        e.store
      );
      return on(i, "left"), on(i, "right"), i;
    },
    columns: t
  };
}
const Nb = Y({
  name: "GpTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: r } = Lb(
      e
    );
    return {
      ns: oe("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: r
    };
  },
  render() {
    const { columns: e, getCellStyles: t, getCellClasses: n, summaryMethod: r, sumText: o } = this, a = this.store.states.data.value;
    let s = [];
    return r ? s = r({
      columns: e,
      data: a
    }) : e.forEach((i, l) => {
      if (l === 0) {
        s[l] = o;
        return;
      }
      const u = a.map((m) => Number(m[i.property])), c = [];
      let f = !0;
      u.forEach((m) => {
        if (!Number.isNaN(+m)) {
          f = !1;
          const d = `${m}`.split(".")[1];
          c.push(d ? d.length : 0);
        }
      });
      const v = Math.max.apply(null, c);
      f ? s[l] = "" : s[l] = u.reduce((m, d) => {
        const p = Number(d);
        return Number.isNaN(p) ? m : Number.parseFloat(
          (m + d).toFixed(Math.min(v, 20))
        );
      }, 0);
    }), U(
      U("tfoot", [
        U("tr", {}, [
          ...e.map(
            (i, l) => U(
              "td",
              {
                key: l,
                colspan: i.colSpan,
                rowspan: i.rowSpan,
                class: n(e, l),
                style: t(i, l)
              },
              [
                U(
                  "div",
                  {
                    class: ["cell", i.labelClassName]
                  },
                  [s[l]]
                )
              ]
            )
          )
        ])
      ])
    );
  }
});
function _b(e) {
  return {
    setCurrentRow: (f) => {
      e.commit("setCurrentRow", f);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (f, v, m = !0) => {
      e.toggleRowSelection(f, v, !1, m), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (f) => {
      e.clearFilter(f);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (f, v) => {
      e.toggleRowExpansionAdapter(f, v);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (f, v) => {
      e.commit("sort", { prop: f, order: v });
    },
    updateKeyChildren: (f, v) => {
      e.updateKeyChildren(f, v);
    }
  };
}
function Mb(e, t, n, r) {
  const o = x(!1), a = x(null), s = x(!1), i = (S) => {
    s.value = S;
  }, l = x({
    width: null,
    height: null,
    headerHeight: null
  }), u = x(!1), c = {
    display: "inline-block",
    verticalAlign: "middle"
  }, f = x(), v = x(0), m = x(0), d = x(0), p = x(0), y = x(0);
  vn(() => {
    t.setHeight(e.height);
  }), vn(() => {
    t.setMaxHeight(e.maxHeight);
  }), k(
    () => [e.currentRowKey, n.states.rowKey],
    ([S, A]) => {
      !O(A) || !O(S) || n.setCurrentRowKey(`${S}`);
    },
    {
      immediate: !0
    }
  ), k(
    () => e.data,
    (S) => {
      r.store.commit("setData", S);
    },
    {
      immediate: !0,
      deep: !0
    }
  ), vn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const g = () => {
    r.store.commit("setHoverRow", null), r.hoverState && (r.hoverState = null);
  }, b = (S, A) => {
    const { pixelX: $, pixelY: F } = A;
    Math.abs($) >= Math.abs(F) && (r.refs.bodyWrapper.scrollLeft += A.pixelX / 5);
  }, w = T(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), h = T(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), E = () => {
    w.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(syncPosition);
  };
  xe(async () => {
    await Be(), n.updateColumns(), W(), requestAnimationFrame(E);
    const S = r.vnode.el, A = r.refs.headerWrapper;
    e.flexible && S && S.parentElement && (S.parentElement.style.minWidth = "0"), resizeSteate.value = {
      width: f.value = S.offsetWidth,
      height: S.offsetHeight,
      headerHeight: e.showHeader && A ? A.offsetHeight : null
    }, n.states.columns.value.forEach((R) => {
      R.filteredValue && R.filteredValue.length && r.store.commit("filterChange", {
        column: R,
        values: R.filteredValue,
        silent: !0
      });
    }), r.$ready = !0;
    const $ = (R, P) => {
      if (!R) return;
      const j = Array.from(R.classList).filter(
        (V) => !V.startsWith("is-scrolling-")
      );
      j.push(t.scrollX.value ? P : "is-scrolling-none"), R.className = j.join(" ");
    }, F = (R) => {
      const { tableWrapper: P } = r.refs;
      $(P, R);
    }, _ = (R) => {
      const { tableWrapper: P } = r.refs;
      return !!(P && P.classList.contains(R));
    }, N = function() {
      if (!r.refs.scrollBarRef) return;
      if (!t.scrollX.value) {
        const Q = "is-scrolling-none";
        _(Q) || F(Q);
        return;
      }
      const R = r.refs.scrollBarRef.wrapRef;
      if (!R) return;
      const { scrollLeft: P, offsetWidth: j, scrollWidth: V } = R, { headerWrapper: L, footerWrapper: X } = r.refs;
      L && (L.scrollLeft = P), X && (X.scrollLeft = P);
      const be = V - j - 1;
      P >= be ? F("is-scrolling-right") : F(P === 0 ? "is-scrolling-left" : "is-scrolling-middle");
    }, W = () => {
      r.refs.scrollBarRef && (r.refs.scrollBarRef.wrapRef && yt(
        r.refs.scrollBarRef.wrapRef,
        "scroll",
        N,
        {
          passive: !0
        }
      ), e.fit ? An(r.vnode.el, K) : yt(window, "resize", K), An(r.refs.bodyWrapper, () => {
        var R, P;
        K(), (P = (R = r.refs) == null ? void 0 : R.scrollBarRef) == null || P.update();
      }));
    }, K = () => {
      var fe, ce, de, ve;
      const R = r.vnode.el;
      if (!r.$ready || !R) return;
      let P = !1;
      const {
        width: j,
        height: V,
        headerHeight: L
      } = l.value, X = f.value = R.offsetWidth;
      j !== X && (P = !0);
      const be = R.offsetHeight;
      (e.height || w.value) && V !== be && (P = !0);
      const Q = e.tableLayout === "fixed" ? r.refs.headerWrapper : (fe = r.refs.tableHeaderRef) == null ? void 0 : fe.$el;
      e.showHeader && (Q == null ? void 0 : Q.offsetHeight) !== L && (P = !0), v.value = ((ce = r.refs.tableWrapper) == null ? void 0 : ce.scrollHeight) || 0, d.value = (Q == null ? void 0 : Q.scrollHeight) || 0, p.value = ((de = r.refs.footerWrapper) == null ? void 0 : de.offsetHeight) || 0, y.value = ((ve = r.refs.appendWrapper) == null ? void 0 : ve.offsetHeight) || 0, m.value = v.value - d.value - p.value - y.value, P && (l.value = {
        width: X,
        height: be,
        headerHeight: e.showHeader && (Q == null ? void 0 : Q.offsetHeight) || 0
      }, E());
    };
    nn(), T(() => {
      const { bodyWidth: R, scrollY: P, gutterWidth: j } = t;
      return R.value ? `${R.value - (P.value ? j : 0)}px` : "";
    }), T(() => e.maxHeight ? "fixed" : e.tableLayout), T(() => {
      if (e.data && e.data.length) return null;
      let R = "100%";
      e.height && m.value && (R = `${m.value}px`);
      const P = f.value;
      return {
        width: P ? `${P}px` : "",
        height: R
      };
    }), T(() => e.height ? {
      height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
    } : e.maxHeight ? {
      maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
    } : {}), T(() => e.height ? {
      height: "100%"
    } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
      maxHeight: `calc(${e.maxHeight} - ${d.value + p.value}px)`
    } : {
      maxHeight: `${e.maxHeight - d.value - p.value}px`
    } : {});
  });
  const C = (S, A) => {
    const $ = r.refs.bodyWrapper;
    if (Math.abs(A.spinY) > 0) {
      const F = $.scrollTop;
      A.pixelY < 0 && F !== 0 && S.preventDefault(), A.pixelY > 0 && $.scrollHeight - $.clientHeight > F && S.preventDefault(), $.scrollTop += Math.ceil(A.pixelY / 5);
    } else
      $.scrollLeft += Math.ceil(A.pixelX / 5);
  };
  return {
    isHidden: o,
    renderExpanded: a,
    setDragVisible: i,
    isGroup: u,
    handleMouseLeave: g,
    handleHeaderFooterMousewheel: b,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel: C,
    resizeProxyVisible: s,
    bodyWidth,
    resizeState: l,
    doLayout: E,
    tableBodyStyles: h,
    tableLayout,
    scrollbarViewStyle: c,
    tableInnerStyle,
    scrollbarStyle
  };
}
function Ib(e) {
  const t = x(), n = () => {
    const o = e.vnode.el.querySelector(".hidden-columns"), a = { childList: !0, subtree: !0 }, s = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      s.forEach((i) => i());
    }), t.value.observe(o, a);
  };
  xe(() => {
    n();
  }), Mr(() => {
    var r;
    (r = t.value) == null || r.disconnect();
  });
}
const Bb = {
  data: {
    type: Array,
    default: () => []
  },
  size: Dn,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children",
      checkStrictly: !1
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
  appendFilterPanelTo: String,
  scrollbarTabindex: {
    type: [Number, String],
    default: void 0
  }
};
function Vl(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((o) => o.width === void 0) && (n = []);
  const r = (o) => {
    const a = {
      key: `${e.tableLayout}_${o.id}`,
      style: {},
      name: void 0
    };
    return t ? a.style = {
      width: `${o.width}px`
    } : a.name = o.id, a;
  };
  return U(
    "colgroup",
    {},
    n.map((o) => U("col", r(o)))
  );
}
Vl.props = ["columns", "tableLayout"];
const jb = () => {
  const e = x(), t = (a, s) => {
    const i = e.value;
    i && i.scrollTo(a, s);
  }, n = (a, s) => {
    const i = e.value;
    i && Fe(s) && ["Top", "Left"].includes(a) && i[`setScroll${a}`](s);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (a) => n("Top", a),
    setScrollLeft: (a) => n("Left", a)
  };
};
let Wb = 1;
const Db = Y({
  name: "GpTable",
  directives: {
    Mousewheel: My
  },
  components: {
    TableHeader: Eb,
    TableBody: Rb,
    TableFooter: Nb,
    GpScrollbar: Tl,
    hColgroup: Vl
  },
  props: Bb,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const t = oe("table"), n = ue();
    Ge(ct, n);
    const r = Yy(n, e);
    n.store = r;
    const o = new Zy({
      store: n.store,
      table: n,
      fit: e.fit,
      showHeader: e.showHeader
    });
    n.layout = o;
    const a = T(
      () => (r.states.data.value || []).length === 0
    ), {
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: l,
      clearSelection: u,
      clearFilter: c,
      toggleAllSelection: f,
      toggleRowExpansion: v,
      clearSort: m,
      sort: d,
      updateKeyChildren: p
    } = _b(r), {
      isHidden: y,
      renderExpanded: g,
      setDragVisible: b,
      isGroup: w,
      handleMouseLeave: h,
      handleHeaderFooterMousewheel: E,
      tableSize: C,
      emptyBlockStyle: S,
      handleFixedMousewheel: A,
      resizeProxyVisible: $,
      bodyWidth: F,
      resizeState: _,
      doLayout: N,
      tableBodyStyles: W,
      tableLayout: K,
      scrollbarViewStyle: R,
      tableInnerStyle: P,
      scrollbarStyle: j
    } = Mb(e, o, r, n), { scrollBarRef: V, scrollTo: L, setScrollLeft: X, setScrollTop: be } = jb(), Q = Tr(N, 50), fe = `${t.namespace.value}-table_${Wb++}`;
    n.tableId = fe, n.state = {
      isGroup: w,
      resizeState: _,
      doLayout: N,
      debouncedUpdateLayout: Q
    };
    const ce = T(
      //   () => props.sumText ?? t('gp.table.sumText')
      () => e.sumText ?? "Sum"
    ), de = T(() => e.emptyText ?? "No Data"), ve = T(() => kl(r.states.originColumns.value)[0]);
    return Ib(n), ze(() => {
      Q.cancel();
    }), {
      ns: t,
      layout: o,
      store: r,
      columns: ve,
      handleHeaderFooterMousewheel: E,
      handleMouseLeave: h,
      tableId: fe,
      tableSize: C,
      isHidden: y,
      isEmpty: a,
      renderExpanded: g,
      resizeProxyVisible: $,
      resizeState: _,
      isGroup: w,
      bodyWidth: F,
      tableBodyStyles: W,
      emptyBlockStyle: S,
      debouncedUpdateLayout: Q,
      handleFixedMousewheel: A,
      setCurrentRow: s,
      getSelectionRows: i,
      toggleRowSelection: l,
      clearSelection: u,
      clearFilter: c,
      toggleAllSelection: f,
      toggleRowExpansion: v,
      clearSort: m,
      doLayout: N,
      sort: d,
      updateKeyChildren: p,
      //   t,
      setDragVisible: b,
      context: n,
      computedSumText: ce,
      computedEmptyText: de,
      tableLayout: K,
      scrollbarViewStyle: R,
      tableInnerStyle: P,
      scrollbarStyle: j,
      scrollBarRef: V,
      scrollTo: L,
      setScrollLeft: X,
      setScrollTop: be
    };
  }
}), zb = ["calss", "data-prefix"];
function Hb(e, t, n, r, o, a) {
  const s = Ve("hColgroup"), i = Ve("table-header"), l = Ve("table-body"), u = Ve("table-footer"), c = Ve("gp-scrollbar"), f = ai("mousewheel");
  return I(), q("div", {
    ref: "tableWrapper",
    calss: [
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ],
    style: _e(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...v) => e.handleMouseLeave && e.handleMouseLeave(...v))
  }, [
    ne("div", {
      class: D(e.ns.e("inner-wrapper")),
      style: _e(e.tableInnerStyle)
    }, [
      ne("div", {
        ref: "hiddenColumns",
        class: D(e.ns.e("hidden-columns"))
      }, [
        re(e.$slots, "default")
      ], 2),
      e.showHeader && e.tableLayout === "fixed" ? Ke((I(), q("div", {
        key: 0,
        ref: "headerWrapper",
        class: D(e.ns.e("header-wrapper"))
      }, [
        ne("table", {
          ref: "tableHeader",
          class: D(e.ns.e("header")),
          style: _e(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          pe(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          pe(i, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "append-filter-panel-to": e.appendFilterPanelTo,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [f, e.handleHeaderFooterMousewheel]
      ]) : Ce("", !0),
      ne("div", {
        ref: "bodyWrapper",
        class: D(e.ns.e("body-wrapper"))
      }, [
        pe(c, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn,
          tabindex: e.scrollbarTabindex
        }, {
          default: le(() => [
            ne("table", {
              ref: "tableBody",
              class: D(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: _e({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              pe(s, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (I(), we(i, {
                key: 0,
                ref: "tableHeaderRef",
                class: D(e.ns.e("body-header")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "append-filter-panel-to": e.appendFilterPanelTo,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : Ce("", !0),
              pe(l, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              e.showSummary && e.tableLayout === "auto" ? (I(), we(u, {
                key: 1,
                class: D(e.ns.e("body-footer")),
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                "sum-text": e.computedSumText,
                "summary-method": e.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : Ce("", !0)
            ], 6),
            e.isEmpty ? (I(), q("div", {
              key: 0,
              ref: "emptyBlock",
              style: _e(e.emptyBlockStyle),
              class: D(e.ns.e("empty-block"))
            }, [
              ne("span", {
                class: D(e.ns.e("empty-text"))
              }, [
                re(e.$slots, "empty", {}, () => [
                  _n(gt(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : Ce("", !0),
            e.$slots.append ? (I(), q("div", {
              key: 1,
              ref: "appendWrapper",
              class: D(e.ns.e("append-wrapper"))
            }, [
              re(e.$slots, "append")
            ], 2)) : Ce("", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always", "tabindex"])
      ], 2),
      e.showSummary && e.tableLayout === "fixed" ? Ke((I(), q("div", {
        key: 1,
        ref: "footerWrapper",
        class: D(e.ns.e("footer-wrapper"))
      }, [
        ne("table", {
          class: D(e.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: _e(e.tableBodyStyles)
        }, [
          pe(s, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          pe(u, {
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            "sum-text": e.computedSumText,
            "summary-method": e.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [Cn, !e.isEmpty],
        [f, e.handleHeaderFooterMousewheel]
      ]) : Ce("", !0),
      e.border || e.isGroup ? (I(), q("div", {
        key: 2,
        class: D(e.ns.e("border-left-patch"))
      }, null, 2)) : Ce("", !0)
    ], 6),
    Ke(ne("div", {
      ref: "resizeProxy",
      class: D(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Cn, e.resizeProxyVisible]
    ])
  ], 44, zb);
}
const kb = /* @__PURE__ */ Ea(Db, [["render", Hb]]), Vb = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, Kb = {
  selection: {
    renderHeader({ store: e, column: t }) {
      function n() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return U(Fr, {
        disabled: n(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value,
        ariaLabel: t.label
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: r
    }) {
      return U(Fr, {
        disabled: t.selectable ? !t.selectable.call(null, e, r) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (o) => o.stopPropagation(),
        modelValue: n.isSelected(e),
        ariaLabel: t.label
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const r = e.index;
      return typeof r == "number" ? n = t + r : typeof r == "function" && (n = r(t)), U("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: r } = t, o = [r.e("expand-icon")];
      return n && o.push(r.em("expand-icon", "expanded")), U(
        "div",
        {
          class: o,
          onClick: function(s) {
            s.stopPropagation(), t.toggleRowExpansion(e);
          }
        },
        {
          default: () => [
            U("GpIcon", null, {
              default: () => [U(Di)]
            })
          ]
        }
      );
    },
    sortable: !1,
    resizable: !1
  }
};
function qb({
  row: e,
  column: t,
  $index: n
}) {
  var a;
  const r = t.property, o = r && cr(e, r).value;
  return t && t.formatter ? t.formatter(e, t, o, n) : ((a = o == null ? void 0 : o.toString) == null ? void 0 : a.call(o)) || "";
}
function Gb({
  row: e,
  treeNode: t,
  store: n
}, r = !1) {
  const { ns: o } = n;
  if (!t)
    return r ? [
      U("span", {
        class: o.e("placeholder")
      })
    ] : null;
  const a = [], s = function(i) {
    i.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && a.push(
    U("span", {
      class: o.e("indent"),
      style: { "padding-left": `${t.indent}px` }
    })
  ), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const i = [
      o.e("expand-icon"),
      t.expanded ? o.em("expand-icon", "expanded") : ""
    ];
    let l = Di;
    t.loading && (l = Lv), a.push(
      U(
        "div",
        {
          class: i,
          onClick: s
        },
        {
          default: () => [
            U(
              "GpIcon",
              { class: { [o.is("loading")]: t.loading } },
              {
                default: () => [U(l)]
              }
            )
          ]
        }
      )
    );
  } else
    a.push(
      U("span", {
        class: o.e("placeholder")
      })
    );
  return a;
}
function ei(e, t) {
  return e.reduce((n, r) => (n[r] = r, n), t);
}
function Ub(e, t) {
  const n = ue();
  return {
    registerNormalWatchers: () => {
      const a = [
        "label",
        "filters",
        "filterMultiple",
        "filteredValue",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "filterClassName",
        "showOverflowTooltip"
      ], s = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, i = ei(a, s);
      Object.keys(i).forEach((l) => {
        const u = s[l];
        Bt(t, u) && k(
          () => t[u],
          (c) => {
            n.columnConfig.value[l] = c;
          }
        );
      });
    },
    registerComplexWatchers: () => {
      const a = ["fixed"], s = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, i = ei(a, s);
      Object.keys(i).forEach((l) => {
        const u = s[l];
        Bt(t, u) && k(
          () => t[u],
          (c) => {
            let f = c;
            u === "width" && l === "realWidth" && (f = Ra(c)), u === "minWidth" && l === "realMinWidth" && (f = _l(c)), n.columnConfig.value[u] = f, n.columnConfig.value[l] = f;
            const v = u === "fixed";
            e.value.store.scheduleLayout(v);
          }
        );
      });
    }
  };
}
function Yb(e, t, n) {
  const r = ue(), o = x(""), a = x(!1), s = x(), i = x(), l = oe("table");
  vn(() => {
    s.value = e.align ? `is-${e.align}` : null, s.value;
  }), vn(() => {
    i.value = e.headerAlign ? `is-${e.headerAlign}` : s.value, i.value;
  });
  const u = T(() => {
    let h = r.vnode.vParent || r.parent;
    for (; h && !h.tableId && !h.columnId; )
      h = h.vnode.vParent || h.parent;
    return h;
  }), c = T(() => {
    const { store: h } = r.parent;
    if (!h) return !1;
    const { treeData: E } = h.states, C = E.value;
    return C && Object.keys(C).length > 0;
  }), f = x(Ra(e.width)), v = x(_l(e.minWidth)), m = (h) => (f.value && (h.width = f.value), v.value && (h.minWidth = v.value), !f.value && v.value && (h.width = void 0), h.minWidth || (h.minWidth = 80), h.realWidth = Number(
    h.width === void 0 ? h.minWidth : h.width
  ), h), d = (h) => {
    const E = h.type, C = Kb[E] || {};
    if (Object.keys(C).forEach((S) => {
      const A = C[S];
      S !== "className" && A !== void 0 && (h[S] = A);
    }), className) {
      const S = `${O(l.namespace)}-${className}`;
      h.className = h.className ? `${h.className} ${S}` : S;
    }
    return h;
  }, p = (h) => {
    Array.isArray(h) ? h.forEach((C) => E(C)) : E(h);
    function E(C) {
      var S;
      ((S = C == null ? void 0 : C.type) == null ? void 0 : S.name) === "GpTableColumn" && (C.vParent = r);
    }
  };
  return {
    columnId: o,
    realAlign: s,
    isSubColumn: a,
    realHeaderAlign: i,
    columnOrTableParent: u,
    setColumnWidth: m,
    setColumnForcedProps: d,
    setColumnRenders: (h) => {
      e.renderHeader ? Te(
        "table-column",
        "scoped-slot header is easier to use, please use scoped-slot header instead."
      ) : h.type !== "selection" && (h.renderHeader = (C) => (r.columnConfig.value.label, re(t, "header", C, () => [h.label]))), t["filter-icon"] && (h.renderFilterIcon = (C) => re(t, "filter-icon", C));
      let E = h.renderCell;
      return h.type === "expand" ? (h.renderCell = (C) => U(
        "div",
        {
          class: "cell"
        },
        [E(C)]
      ), n.value.renderExpanded = (C) => t.default ? t.default(C) : t.default) : (E = E || qb, h.renderCell = (C) => {
        let S = null;
        if (t.default) {
          const W = t.default(C);
          S = W.some((K) => K.type !== oi) ? W : E(C);
        } else
          S = E(C);
        const { columns: A } = n.value.store.states, $ = A.value.findIndex(
          (W) => W.type === "default"
        ), F = c.value && C.cellIndex === $, _ = Gb(C, F), N = {
          class: "cell",
          style: {}
        };
        return h.showOverflowTooltip && (N.class = `${N.class} ${O(l.namespace)}-tooltip`, N.style = {
          width: `${(C.column.realWidth || Number(C.column.width)) - 1}px`
        }), p(S), U("div", N, [_, S]);
      }), h;
    },
    getPropsData: (...h) => h.reduce((E, C) => (Array.isArray(C) && C.forEach((S) => {
      E[S] = e[S];
    }), E), {}),
    getColumnGpIndex: () => Array.prototype.indexOf.call(children, child),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", r.columnConfig.value);
    }
  };
}
const Xb = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  filterClassName: String,
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every(
      (t) => ["ascending", "descending", null].includes(t)
    )
  }
};
let Zb = 1;
const Kl = Y({
  name: "GpTableColumn",
  components: {
    // GpCheckbox,
  },
  props: Xb,
  setup(e, { slots: t }) {
    const n = ue(), r = x({}), o = T(() => {
      let w = n.parent;
      for (; w && !w.tableId; )
        w = w.parent;
      return w;
    }), { registerNormalWatchers: a, registerComplexWatchers: s } = Ub(
      o,
      e
    ), {
      columnId: i,
      isSubColumn: l,
      realHeaderAlign: u,
      columnOrTableParent: c,
      setColumnWidth: f,
      setColumnForcedProps: v,
      setColumnRenders: m,
      getPropsData: d,
      getColumnElIndex: p,
      realAlign: y,
      updateColumnOrder: g
    } = Yb(e, t, o), b = c.value;
    i.value = `${b.tableId || b.columnId}_column_${Zb++}`, zo(() => {
      l.value = o.value !== b;
      const w = e.type || "default", h = e.sortable === "" ? !0 : e.sortable, E = xn(e.showOverflowTooltip) ? b.props.showOverflowTooltip : e.showOverflowTooltip, C = {
        ...Vb[w],
        id: i.value,
        type: w,
        property: e.prop || e.property,
        align: y,
        headerAlign: u,
        showOverflowTooltip: E,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        filterClassName: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: h,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let _ = d([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement",
        "filterClassName"
      ]);
      _ = jy(C, _), _ = Dy(
        m,
        f,
        v
      )(_), r.value = _, a(), s();
    }), xe(() => {
      var S;
      const w = c.value, h = l.value ? w.vnode.el.children : (S = w.refs.hiddenColumns) == null ? void 0 : S.children, E = () => p(h || [], n.vnode.el);
      r.value.getColumnIndex = E, E() > -1 && o.value.store.commit(
        "insertColumn",
        r.value,
        l.value ? w.columnConfig.value : null,
        g
      );
    }), ze(() => {
      const w = r.value.getColumnIndex;
      (w ? w() : -1) > -1 && o.value.store.commit(
        "removeColumn",
        r.value,
        l.value ? b.columnConfig.value : null,
        g
      );
    }), n.columnId = i.value, n.columnConfig = r;
  },
  render() {
    var e, t, n;
    try {
      const r = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), o = [];
      if (Array.isArray(r))
        for (const s of r)
          ((n = s.type) == null ? void 0 : n.name) === "GpTableColumn" || s.shapeFlag & 2 ? o.push(s) : s.type === At && Array.isArray(s.children) && s.children.forEach((i) => {
            (i == null ? void 0 : i.patchFlag) !== 1024 && !Ye(i == null ? void 0 : i.children) && o.push(i);
          });
      return U("div", o);
    } catch {
      return U("div", []);
    }
  }
}), bw = Et(kb, {
  TableColumn: Kl
}), ww = Kr(Kl);
export {
  yy as BAR_MAP,
  fw as Effect,
  rw as ElButton,
  nw as ElConfigProvider,
  Lm as FOCUSOUT_PREVENTED,
  Nm as FOCUSOUT_PREVENTED_OPTS,
  so as FOCUS_AFTER_RELEASED,
  ao as FOCUS_AFTER_TRAPPED,
  Bs as FOCUS_AFTER_TRAPPED_OPTS,
  _m as FOCUS_TRAP_INJECTION_KEY,
  Gt as GAP,
  Fr as GpCheckbox,
  lw as GpCheckboxButton,
  uw as GpCheckboxGroup,
  Vm as GpFocusTrap,
  sw as GpForm,
  iw as GpFormItem,
  cw as GpMessage,
  ay as GpOnlyChild,
  my as GpPopper,
  vw as GpPopperArrow,
  gy as GpPopperContent,
  sy as GpPopperTrigger,
  Tl as GpScrollbar,
  bw as GpTable,
  ww as GpTableColumn,
  ib as GpTeleport,
  db as GpTooltip,
  Ws as ON_RELEASE_FOCUS_EVT,
  js as ON_TRAP_FOCUS_EVT,
  ay as OnlyChild,
  Cl as POPPER_CONTENT_INJECTION_KEY,
  Oa as POPPER_INJECTION_KEY,
  Na as TOOLTIP_INJECTION_KEY,
  Fg as buttonEmits,
  Pg as buttonNativeTypes,
  Rg as buttonProps,
  $g as buttonTypes,
  ul as checkboxEmits,
  ln as checkboxGroupContextKey,
  Fm as checkboxGroupEmits,
  Rm as checkboxGroupProps,
  ll as checkboxProps,
  sl as configProviderContextKey,
  Og as configProviderProps,
  ir as createFocusOutPreventedEvent,
  Wm as focusFirstDescendant,
  Hs as focusableStack,
  sn as formContextKey,
  Ig as formEmits,
  zt as formItemContextKey,
  ym as formItemProps,
  mm as formItemValidateStates,
  _g as formMetaProps,
  Mg as formProps,
  Im as getEdges,
  Ds as getVisibleElement,
  Dm as isFocusCausedByUserEvent,
  Mm as isHidden,
  Qe as messageConfig,
  Pe as messageDefaults,
  qm as messageEmits,
  Km as messageProps,
  bl as messageTypes,
  yl as obtainAllFocusableElements,
  xa as popperArrowProps,
  Ol as popperContentEmits,
  $a as popperContentProps,
  El as popperCoreConfigProps,
  Ta as popperProps,
  Aa as popperTriggerProps,
  il as provideGlobalConfig,
  by as renderThumbStyle,
  ry as roleTypes,
  Pa as scrollbarContextKey,
  Ty as scrollbarEmits,
  Oy as scrollbarProps,
  ab as teleportProps,
  wy as thumbProps,
  nb as tooltipEmits,
  Ot as tryFocus,
  aw as useDisabled,
  zm as useFocusReason,
  cl as useFormDisabled,
  wa as useFormItem,
  fl as useFormItemInputId,
  nn as useFormSize,
  Sg as useGlobalComponentSettings,
  ba as useGlobalConfig,
  pw as usePopperArrowProps,
  yw as usePopperContentEmits,
  mw as usePopperContentProps,
  gw as usePopperCoreConfigProps,
  dw as usePopperProps,
  hw as usePopperTriggerProps,
  ow as useSize,
  Wl as useTooltipContentProps,
  eb as useTooltipModelToggle,
  Qy as useTooltipModelToggleEmits,
  Jy as useTooltipModelToggleProps,
  tb as useTooltipProps,
  Dl as useTooltipTriggerProps
};
