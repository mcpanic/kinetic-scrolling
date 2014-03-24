PLOVR_MODULE_INFO={"misc-screens":["common-async"],"stats":["common-async"],"base":[],"common-async":["base"],"notes":["common-async"],"posters":["common-async"],"notes-mobile":["common-async"]};
PLOVR_MODULE_URIS={"misc-screens":"fingerprint:misc-screens","stats":"fingerprint:stats","base":"fingerprint:base","common-async":"fingerprint:common-async","notes":"fingerprint:notes","posters":"fingerprint:posters","notes-mobile":"fingerprint:notes-mobile"};
PLOVR_MODULE_USE_DEBUG_MODE=false;
_mdm={};(function(z){
var sa;
var qa;
z.n = function(a) {
  return function() {
    return z.ba[a].apply(this, arguments);
  };
};
var ca = function(a, b) {
  for (var c = a.split("."), d = b || z.da, e;e = c.shift();) {
    if (null != d[e]) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
z.ea = function() {
};
var fa = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
z.ga = function(a) {
  return void 0 !== a;
};
z.ha = function(a) {
  return "array" == fa(a);
};
z.ia = function(a) {
  var b = fa(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
z.ka = function(a) {
  return "string" == typeof a;
};
z.la = function(a) {
  return "number" == typeof a;
};
z.ma = function(a) {
  return "function" == fa(a);
};
z.na = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
z.pa = function(a) {
  return a[qa] || (a[qa] = ++sa);
};
var ta = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
var va = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
z.wa = function(a, b, c) {
  z.wa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : va;
  return z.wa.apply(null, arguments);
};
z.xa = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
z.p = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.t = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.YM = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
z.ya = function(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, z.ya) : this.stack = Error().stack || "";
  a && (this.message = String(a));
};
z.za = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
z.Aa = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
z.Ca = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
z.Da = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
z.Ea = function(a) {
  if (!Ga.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Ha, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Ia, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Ja, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ka, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(La, "\x26#39;"));
  return a;
};
z.Oa = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
var Pa = function(a, b) {
  for (var c = 0, d = (0,z.Da)(String(a)).split("."), e = (0,z.Da)(String(b)).split("."), f = Math.max(d.length, e.length), h = 0;0 == c && h < f;h++) {
    var k = d[h] || "", l = e[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = m.exec(k) || ["", "", ""], I = q.exec(l) || ["", "", ""];
      if (0 == s[0].length && 0 == I[0].length) {
        break;
      }
      c = Ra(0 == s[1].length ? 0 : (0,window.parseInt)(s[1], 10), 0 == I[1].length ? 0 : (0,window.parseInt)(I[1], 10)) || Ra(0 == s[2].length, 0 == I[2].length) || Ra(s[2], I[2]);
    } while (0 == c);
  }
  return c;
};
var Ra = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
z.Sa = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
var Ta = function(a) {
  var b = (0,z.ka)(void 0) ? (0,z.Oa)(void 0) : "\\s";
  return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
};
z.Ua = function(a) {
  return a[a.length - 1];
};
z.Va = function(a, b, c) {
  a: {
    for (var d = a.length, e = (0,z.ka)(a) ? a.split("") : a, f = 0;f < d;f++) {
      if (f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : (0,z.ka)(a) ? a.charAt(b) : a[b];
};
var Wa = function(a, b) {
  for (var c = a.length, d = (0,z.ka)(a) ? a.split("") : a, c = c - 1;0 <= c;c--) {
    if (c in d && b.call(void 0, d[c], c, a)) {
      return c;
    }
  }
  return-1;
};
z.Xa = function(a, b) {
  return 0 <= (0,z.Ya)(a, b);
};
z.Za = function(a, b) {
  var c = (0,z.Ya)(a, b), d;
  (d = 0 <= c) && z.$a.splice.call(a, c, 1);
  return d;
};
var ab = function(a) {
  return z.$a.concat.apply(z.$a, arguments);
};
var bb = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
};
z.cb = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if ((0,z.ha)(d) || (e = (0,z.ia)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d);
    } else {
      if (e) {
        for (var f = a.length, h = d.length, k = 0;k < h;k++) {
          a[f + k] = d[k];
        }
      } else {
        a.push(d);
      }
    }
  }
};
var db = function(a, b, c, d) {
  z.$a.splice.apply(a, (0,z.eb)(arguments, 1));
};
z.eb = function(a, b, c) {
  return 2 >= arguments.length ? z.$a.slice.call(a, b) : z.$a.slice.call(a, b, c);
};
z.gb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
z.hb = function(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
};
var ib = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
var kb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
z.lb = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return!0;
    }
  }
  return!1;
};
z.mb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
z.nb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
z.ob = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < pb.length;f++) {
      c = pb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
var ub = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ha)(arguments[0])) {
    return ub.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
z.vb = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ha)(arguments[0])) {
    return z.vb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var yb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.wa.apply(null, b);
};
var zb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Ya.apply(null, b);
};
var Ab = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Bb.apply(null, b);
};
var Cb = function(a) {
  Db[Db.length] = a;
  if (Eb) {
    for (var b = 0;b < Fb.length;b++) {
      a((0,z.wa)(Fb[b].ej, Fb[b]));
    }
  }
};
var Gb = function() {
  var a = Hb;
  Eb = !0;
  for (var b = (0,z.wa)(a.ej, a), c = 0;c < Db.length;c++) {
    Db[c](b);
  }
  Fb.push(a);
};
z.Ib = function(a) {
  return function() {
    return a;
  };
};
z.Jb = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments);
    }
    return a;
  };
};
var Kb = function(a, b) {
  function c() {
  }
  c.prototype = a.prototype;
  var d = new c;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
z.Lb = function(a) {
  a = Mb(a);
  (0,z.ma)(z.da.setImmediate) ? z.da.setImmediate(a) : (Nb || (Nb = Ob()), Nb(a));
};
var Ob = function() {
  var a = z.da.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = window.document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    window.document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = (0,z.wa)(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.Ta;
      var a = c.gA;
      c.gA = null;
      a();
    };
    return function(a) {
      d.Ta = {gA:a};
      d = d.Ta;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function(a) {
    var b = window.document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    window.document.documentElement.appendChild(b);
  } : function(a) {
    z.da.setTimeout(a, 0);
  };
};
var Mb = function(a) {
  return a;
};
var Pb = function(a) {
  (0,z.Lb)(function() {
    throw a;
  });
};
var Qb = function(a, b) {
  Rb || ((0,z.Lb)(Sb), Rb = !0);
  Tb.push(new Ub(a, b));
};
var Sb = function() {
  for (;Tb.length;) {
    var a = Tb;
    Tb = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.ek.call(c.scope);
      } catch (d) {
        Pb(d);
      }
    }
  }
  Rb = !1;
};
var Ub = function(a, b) {
  this.ek = a;
  this.scope = b;
};
var Vb = function(a) {
  a.prototype.then = a.prototype.Lf;
  a.prototype.$goog_labs_Thenable = !0;
};
var Wb = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_labs_Thenable;
  } catch (b) {
    return!1;
  }
};
var Xb = function(a, b) {
  this.Ge = $b;
  this.sg = void 0;
  this.te = this.Jb = null;
  this.xq = this.Wu = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      ac(c, bc, a);
    }, function(a) {
      ac(c, cc, a);
    });
  } catch (d) {
    ac(this, cc, d);
  }
};
var dc = function(a, b) {
  if (a.Ge == $b) {
    if (a.Jb) {
      var c = a.Jb;
      if (c.te) {
        for (var d = 0, e = -1, f = 0, h;h = c.te[f];f++) {
          if (h = h.bq) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.Ge == $b && 1 == d ? dc(c, b) : (d = c.te.splice(e, 1)[0], ec(c, d, cc, b)));
      }
    } else {
      ac(a, cc, b);
    }
  }
};
var fc = function(a, b) {
  a.te && a.te.length || a.Ge != bc && a.Ge != cc || gc(a);
  a.te || (a.te = []);
  a.te.push(b);
};
var hc = function(a, b, c, d) {
  var e = {bq:null, DB:null, GB:null};
  e.bq = new Xb(function(a, h) {
    e.DB = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        h(m);
      }
    } : a;
    e.GB = c ? function(b) {
      try {
        var e = c.call(d, b);
        !(0,z.ga)(e) && b instanceof ic ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.bq.Jb = a;
  fc(a, e);
  return e.bq;
};
var ac = function(a, b, c) {
  if (a.Ge == $b) {
    if (a == c) {
      b = cc, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (Wb(c)) {
        a.Ge = 1;
        c.Lf(a.DC, a.EC, a);
        return;
      }
      if ((0,z.na)(c)) {
        try {
          var d = c.then;
          if ((0,z.ma)(d)) {
            kc(a, c, d);
            return;
          }
        } catch (e) {
          b = cc, c = e;
        }
      }
    }
    a.sg = c;
    a.Ge = b;
    gc(a);
    b != cc || c instanceof ic || lc(a, c);
  }
};
var kc = function(a, b, c) {
  function d(b) {
    f || (f = !0, a.EC(b));
  }
  function e(b) {
    f || (f = !0, a.DC(b));
  }
  a.Ge = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
};
var gc = function(a) {
  a.Wu || (a.Wu = !0, Qb(a.eJ, a));
};
var ec = function(a, b, c, d) {
  if (c == bc) {
    b.DB(d);
  } else {
    for (;a && a.xq;a = a.Jb) {
      a.xq = !1;
    }
    b.GB(d);
  }
};
var lc = function(a, b) {
  a.xq = !0;
  Qb(function() {
    a.xq && mc.call(null, b);
  });
};
var ic = function(a) {
  z.ya.call(this, a);
};
z.nc = function(a, b) {
  this.Uq = [];
  this.BB = a;
  this.qA = b || null;
  this.Em = this.Xd = !1;
  this.sg = void 0;
  this.ow = this.JI = this.su = !1;
  this.er = 0;
  this.Jb = null;
  this.Yp = 0;
};
var oc = function(a, b, c) {
  a.Xd = !0;
  a.sg = c;
  a.Em = !b;
  pc(a);
};
var qc = function(a) {
  if (a.Xd) {
    if (!a.ow) {
      throw new rc(a);
    }
    a.ow = !1;
  }
};
z.r = function(a, b, c) {
  return sc(a, b, null, c);
};
z.t = function(a, b, c) {
  return sc(a, null, b, c);
};
z.tc = function(a, b, c) {
  return sc(a, b, b, c);
};
var sc = function(a, b, c, d) {
  a.Uq.push([b, c, d]);
  a.Xd && pc(a);
  return a;
};
z.vc = function(a, b) {
  return(0,z.r)(a, (0,z.wa)(b.Ad, b));
};
var wc = function(a) {
  return(0,z.xc)(a.Uq, function(a) {
    return(0,z.ma)(a[1]);
  });
};
var pc = function(a) {
  if (a.er && a.Xd && wc(a)) {
    var b = a.er, c = yc[b];
    c && (zc.call(z.da, c.eL), delete yc[b]);
    a.er = 0;
  }
  a.Jb && (a.Jb.Yp--, delete a.Jb);
  for (var b = a.sg, d = c = !1;a.Uq.length && !a.su;) {
    var e = a.Uq.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Em ? h : f) {
      try {
        var k = f.call(e || a.qA, b);
        (0,z.ga)(k) && (a.Em = a.Em && (k == b || k instanceof Error), a.sg = b = k);
        Wb(b) && (d = !0, a.su = !0);
      } catch (l) {
        b = l, a.Em = !0, wc(a) || (c = !0);
      }
    }
  }
  a.sg = b;
  d && (k = (0,z.wa)(a.kA, a, !0), d = (0,z.wa)(a.kA, a, !1), b instanceof z.nc ? (sc(b, k, d), b.JI = !0) : b.Lf(k, d));
  c && (c = ++Cc, yc[c] = new Dc(c, b), a.er = c);
};
z.Ec = function(a) {
  var b = new z.nc;
  b.Ba(a);
  return b;
};
z.Fc = function(a) {
  var b = new z.nc;
  b.Wd(a);
  return b;
};
var Gc = function() {
  var a = new z.nc;
  a.cancel();
  return a;
};
var rc = function(a) {
  z.ya.call(this);
  this.pc = a;
};
z.Hc = function(a) {
  z.ya.call(this);
  this.pc = a;
};
var Dc = function(a, b) {
  this.Ae = a;
  this.cJ = b;
  this.eL = Ic.call(z.da, (0,z.wa)(this.dL, this), 0);
};
z.Jc = function(a, b, c) {
  c ? (0,z.w)(a, b) : (0,z.x)(a, b);
};
z.Kc = function(a, b) {
  var c = !(0,z.Lc)(a, b);
  (0,z.Jc)(a, b, c);
};
z.Mc = function(a, b, c) {
  (0,z.x)(a, b);
  (0,z.w)(a, c);
};
z.Nc = function(a) {
  this.Lc = a;
};
var Oc = function(a) {
  a = (a.Lc.cookie || "").split(Pc);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return{keys:b, yn:c};
};
z.B = function() {
  0 != Qc && (Sc[(0,z.pa)(this)] = this);
};
z.C = function(a) {
  a && "function" == typeof a.Eb && a.Eb();
};
z.Tc = function(a) {
  for (var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    (0,z.ia)(d) ? z.Tc.apply(null, d) : (0,z.C)(d);
  }
};
var Uc = function() {
  return z.da.navigator ? z.da.navigator.userAgent : null;
};
var Vc = function() {
  return z.da.navigator;
};
var Wc = function() {
  var a = z.da.document;
  return a ? a.documentMode : void 0;
};
z.Xc = function(a) {
  return Yc[a] || (Yc[a] = 0 <= Pa(Zc, a));
};
var $c = function(a) {
  return z.D && ad >= a;
};
var bd = function(a) {
  a = a.className;
  return(0,z.ka)(a) && a.match(/\S+/g) || [];
};
var cd = function(a, b) {
  for (var c = bd(a), d = (0,z.eb)(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    (0,z.Xa)(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
};
var dd = function(a, b) {
  var c = bd(a), c = ed(c, (0,z.eb)(arguments, 1));
  a.className = c.join(" ");
};
var ed = function(a, b) {
  return(0,z.fd)(a, function(a) {
    return!(0,z.Xa)(b, a);
  });
};
z.gd = function(a, b) {
  this.x = (0,z.ga)(a) ? a : 0;
  this.y = (0,z.ga)(b) ? b : 0;
};
var hd = function(a, b) {
  this.width = a;
  this.height = b;
};
z.id = function(a) {
  return a ? new kd((0,z.ld)(a)) : md || (md = new kd);
};
z.nd = function(a, b) {
  (0,z.hb)(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in od ? a.setAttribute(od[d], b) : (0,z.za)(d, "aria-") || (0,z.za)(d, "data-") ? a.setAttribute(d, b) : a[d] = b;
  });
};
z.pd = function(a) {
  a = a.document;
  a = (0,z.qd)(a) ? a.documentElement : a.body;
  return new hd(a.clientWidth, a.clientHeight);
};
z.rd = function(a) {
  return a ? a.parentWindow || a.defaultView : window;
};
z.sd = function(a, b) {
  var c = b[0], d = b[1];
  if (!td && d && (d.name || d.type)) {
    c = ["\x3c", c];
    d.name && c.push(' name\x3d"', (0,z.Ea)(d.name), '"');
    if (d.type) {
      c.push(' type\x3d"', (0,z.Ea)(d.type), '"');
      var e = {};
      (0,z.ob)(e, d);
      delete e.type;
      d = e;
    }
    c.push("\x3e");
    c = c.join("");
  }
  c = a.createElement(c);
  d && ((0,z.ka)(d) ? c.className = d : (0,z.ha)(d) ? cd.apply(null, [c].concat(d)) : (0,z.nd)(c, d));
  2 < b.length && ud(a, c, b, 2);
  return c;
};
var ud = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild((0,z.ka)(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !(0,z.ia)(f) || (0,z.na)(f) && 0 < f.nodeType ? e(f) : (0,z.vd)(wd(f) ? bb(f) : f, e);
  }
};
z.xd = function(a) {
  return(0,z.yd)(a);
};
z.yd = function(a) {
  var b = window.document, c = b.createElement("div");
  z.D ? (c.innerHTML = "\x3cbr\x3e" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if (1 == c.childNodes.length) {
    return c.removeChild(c.firstChild);
  }
  for (a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild);
  }
  return a;
};
z.qd = function(a) {
  return "CSS1Compat" == a.compatMode;
};
z.zd = function(a) {
  if (1 != a.nodeType) {
    return!1;
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1;
  }
  return!0;
};
z.Ad = function(a, b) {
  ud((0,z.ld)(a), a, arguments, 1);
};
z.Bd = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
};
z.Cd = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null);
};
z.Dd = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
z.Ed = function(a) {
  var b, c = a.parentNode;
  if (c && 11 != c.nodeType) {
    if (a.removeNode) {
      return a.removeNode(!1);
    }
    for (;b = a.firstChild;) {
      c.insertBefore(b, a);
    }
    return(0,z.Dd)(a);
  }
};
z.Fd = function(a, b) {
  for (;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling;
  }
  return a;
};
z.Gd = function(a) {
  return(0,z.na)(a) && 1 == a.nodeType;
};
var Hd = function(a) {
  if (Id && !(z.D && (0,z.Xc)("9") && !(0,z.Xc)("10") && z.da.SVGElement && a instanceof z.da.SVGElement)) {
    return a.parentElement;
  }
  a = a.parentNode;
  return(0,z.Gd)(a) ? a : null;
};
z.Jd = function(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
var Kd = function(a, b) {
  if (a == b) {
    return 0;
  }
  if (a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  if (z.D && !$c(9)) {
    if (9 == a.nodeType) {
      return-1;
    }
    if (9 == b.nodeType) {
      return 1;
    }
  }
  if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if (c && d) {
      return a.sourceIndex - b.sourceIndex;
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? Ld(a, b) : !c && (0,z.Jd)(e, b) ? -1 * Md(a, b) : !d && (0,z.Jd)(f, a) ? Md(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex);
  }
  d = (0,z.ld)(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(z.da.Range.START_TO_END, d);
};
var Md = function(a, b) {
  var c = a.parentNode;
  if (c == b) {
    return-1;
  }
  for (var d = b;d.parentNode != c;) {
    d = d.parentNode;
  }
  return Ld(d, a);
};
var Ld = function(a, b) {
  for (var c = b;c = c.previousSibling;) {
    if (c == a) {
      return-1;
    }
  }
  return 1;
};
z.Nd = function(a) {
  var b, c = arguments.length;
  if (!c) {
    return null;
  }
  if (1 == c) {
    return arguments[0];
  }
  var d = [], e = window.Infinity;
  for (b = 0;b < c;b++) {
    for (var f = [], h = arguments[b];h;) {
      f.unshift(h), h = h.parentNode;
    }
    d.push(f);
    e = Math.min(e, f.length);
  }
  f = null;
  for (b = 0;b < e;b++) {
    for (var h = d[0][b], k = 1;k < c;k++) {
      if (h != d[k][b]) {
        return f;
      }
    }
    f = h;
  }
  return f;
};
z.ld = function(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
};
var wd = function(a) {
  if (a && "number" == typeof a.length) {
    if ((0,z.na)(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if ((0,z.ma)(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
};
z.Od = function(a, b, c) {
  if (!b && !c) {
    return null;
  }
  var d = b ? b.toUpperCase() : null;
  return(0,z.Qd)(a, function(a) {
    var b;
    if (b = !d || a.nodeName == d) {
      (b = !c) || (b = (0,z.Xa)(bd(a), c));
    }
    return b;
  });
};
z.Qd = function(a, b) {
  for (var c = 0;a;) {
    if (b(a)) {
      return a;
    }
    a = a.parentNode;
    c++;
  }
  return null;
};
var kd = function(a) {
  this.Lc = a || z.da.document || window.document;
};
var Rd = function(a, b) {
  var c;
  c = a.Lc;
  var d = b && "*" != b ? b.toUpperCase() : "";
  c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
  return c;
};
z.Sd = function(a) {
  var b = a.Lc;
  a = !z.Td && (0,z.qd)(b) ? b.documentElement : b.body || b.documentElement;
  b = b.parentWindow || b.defaultView;
  return z.D && (0,z.Xc)("10") && b.pageYOffset != a.scrollTop ? new z.gd(a.scrollLeft, a.scrollTop) : new z.gd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
};
z.Ud = function() {
};
z.Vd = function(a) {
  if (a instanceof z.Ud) {
    return a;
  }
  if ("function" == typeof a.Mh) {
    return a.Mh(!1);
  }
  if ((0,z.ia)(a)) {
    var b = 0, c = new z.Ud;
    c.Ta = function() {
      for (;;) {
        if (b >= a.length) {
          throw z.Wd;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
};
z.Xd = function(a) {
  try {
    return(0,z.Vd)(a).Ta();
  } catch (b) {
    if (b != z.Wd) {
      throw b;
    }
    return null;
  }
};
z.Yd = function(a, b, c, d, e) {
  this.td = !!b;
  a && Zd(this, a, d);
  this.depth = void 0 != e ? e : this.Ec || 0;
  this.td && (this.depth *= -1);
  this.eq = !c;
};
var Zd = function(a, b, c, d) {
  if (a.R = b) {
    a.Ec = (0,z.la)(c) ? c : 1 != a.R.nodeType ? 0 : a.td ? -1 : 1;
  }
  (0,z.la)(d) && (a.depth = d);
};
var $d = function(a) {
  if ("function" == typeof a.af) {
    return a.af();
  }
  if ((0,z.ka)(a)) {
    return a.split("");
  }
  if ((0,z.ia)(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return ib(a);
};
var ae = function(a) {
  if ("function" == typeof a.$e) {
    return a.$e();
  }
  if ("function" != typeof a.af) {
    if ((0,z.ia)(a) || (0,z.ka)(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return kb(a);
  }
};
var be = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if ((0,z.ia)(a) || (0,z.ka)(a)) {
      (0,z.vd)(a, b, c);
    } else {
      for (var d = ae(a), e = $d(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
z.ce = function(a, b) {
  this.ee = {};
  this.rb = [];
  this.zn = this.Bb = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Oe(a);
  }
};
var de = function(a, b) {
  return a === b;
};
var ee = function(a) {
  if (a.Bb != a.rb.length) {
    for (var b = 0, c = 0;b < a.rb.length;) {
      var d = a.rb[b];
      fe(a.ee, d) && (a.rb[c++] = d);
      b++;
    }
    a.rb.length = c;
  }
  if (a.Bb != a.rb.length) {
    for (var e = {}, c = b = 0;b < a.rb.length;) {
      d = a.rb[b], fe(e, d) || (a.rb[c++] = d, e[d] = 1), b++;
    }
    a.rb.length = c;
  }
};
var fe = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
z.ge = function() {
  z.B.call(this);
};
z.he = function() {
};
z.ie = function(a) {
  if (a.getSelection) {
    return a.getSelection();
  }
  a = a.document;
  var b = a.selection;
  if (b) {
    try {
      var c = b.createRange();
      if (c.parentElement) {
        if (c.parentElement().document != a) {
          return null;
        }
      } else {
        if (!c.length || c.item(0).document != a) {
          return null;
        }
      }
    } catch (d) {
      return null;
    }
    return b;
  }
  return null;
};
z.je = function(a) {
  for (var b = [], c = 0, d = a.kk();c < d;c++) {
    b.push(a.nh(c));
  }
  return b;
};
z.ke = function(a) {
  return a.ce() ? a.gb() : a.Fa();
};
z.le = function(a) {
  return a.ce() ? a.tc() : a.Gb();
};
z.me = function(a) {
  return a.ce() ? a.Fa() : a.gb();
};
z.ne = function(a) {
  return a.ce() ? a.Gb() : a.tc();
};
var oe = function(a, b) {
  z.Yd.call(this, a, b, !0);
};
z.pe = function() {
};
z.qe = function(a, b, c, d, e) {
  var f;
  a && (this.Ga = a, this.Za = b, this.Ea = c, this.Xa = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.Ga = b, this.Za = 0) : (a.length && (this.Ga = (0,z.Ua)(a)), f = !0)), 1 == c.nodeType && ((this.Ea = c.childNodes[d]) ? this.Xa = 0 : this.Ea = c));
  z.Yd.call(this, e ? this.Ea : this.Ga, e, !0);
  if (f) {
    try {
      this.Ta();
    } catch (h) {
      if (h != z.Wd) {
        throw h;
      }
    }
  }
};
z.re = function() {
};
z.se = function(a) {
  this.na = a;
};
var te = function(a) {
  var b = (0,z.ld)(a).createRange();
  if (a.nodeType == z.ue) {
    b.setStart(a, 0), b.setEnd(a, a.length);
  } else {
    if (ve(a)) {
      for (var c, d = a;(c = d.firstChild) && ve(c);) {
        d = c;
      }
      b.setStart(d, 0);
      for (d = a;(c = d.lastChild) && ve(c);) {
        d = c;
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
    } else {
      c = a.parentNode, a = (0,z.Ya)(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
    }
  }
  return b;
};
var we = function(a, b, c, d) {
  var e = (0,z.ld)(a).createRange();
  e.setStart(a, b);
  e.setEnd(c, d);
  return e;
};
var xe = function(a) {
  this.na = a;
};
z.ye = function(a, b) {
  this.na = a;
  this.ZI = b;
};
var ze = function(a) {
  var b = (0,z.ld)(a).body.createTextRange();
  if (1 == a.nodeType) {
    b.moveToElementText(a), ve(a) && !a.childNodes.length && b.collapse(!1);
  } else {
    for (var c = 0, d = a;d = d.previousSibling;) {
      var e = d.nodeType;
      if (e == z.ue) {
        c += d.length;
      } else {
        if (1 == e) {
          b.moveToElementText(d);
          break;
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length);
  }
  return b;
};
var Ae = function(a, b) {
  for (var c = b.childNodes, d = 0, e = c.length;d < e;d++) {
    var f = c[d];
    if (ve(f)) {
      var h = ze(f), k = h.htmlText != f.outerHTML;
      if (a.isCollapsed() && k ? 0 <= a.ve(h, 1, 1) && 0 >= a.ve(h, 1, 0) : a.na.inRange(h)) {
        return Ae(a, f);
      }
    }
  }
  return b;
};
var Be = function(a, b, c) {
  c = c || a.Zd();
  if (!c || !c.firstChild) {
    return c;
  }
  for (var d = 1 == b, e = 0, f = c.childNodes.length;e < f;e++) {
    var h = d ? e : f - e - 1, k = c.childNodes[h], l;
    try {
      l = (0,z.Ce)(k);
    } catch (m) {
      continue;
    }
    var q = l.na;
    if (a.isCollapsed()) {
      if (!ve(k)) {
        if (0 == a.ve(q, 1, 1)) {
          a.Za = a.Xa = h;
          break;
        }
      } else {
        if (l.eh(a)) {
          return Be(a, b, k);
        }
      }
    } else {
      if (a.eh(l)) {
        if (!ve(k)) {
          d ? a.Za = h : a.Xa = h + 1;
          break;
        }
        return Be(a, b, k);
      }
      if (0 > a.ve(q, 1, 0) && 0 < a.ve(q, 0, 1)) {
        return Be(a, b, k);
      }
    }
  }
  return c;
};
var De = function(a, b) {
  var c = 1 == b, d = c ? a.Fa() : a.gb();
  if (1 == d.nodeType) {
    for (var d = d.childNodes, e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1;0 <= h && h < e;h += f) {
      var k = d[h];
      if (!ve(k) && 0 == a.na.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), (0,z.Ce)(k).na)) {
        return c ? h : h + 1;
      }
    }
    return-1 == h ? 0 : h;
  }
  e = a.na.duplicate();
  f = ze(d);
  e.setEndPoint(c ? "EndToEnd" : "StartToStart", f);
  e = e.text.length;
  return c ? d.length - e : e;
};
var He = function(a) {
  return a.nodeType == z.ue ? a.nodeValue : a.innerText;
};
var Ie = function(a) {
  this.na = a;
};
var Je = function(a) {
  this.na = a;
};
z.Ke = function(a) {
  return z.D && !$c(9) ? new z.ye(a, (0,z.ld)(a.parentElement())) : z.Td ? new Je(a) : z.Le ? new xe(a) : z.Me ? new Ie(a) : new z.se(a);
};
z.Ce = function(a) {
  if (z.D && !$c(9)) {
    var b = new z.ye(ze(a), (0,z.ld)(a));
    if (ve(a)) {
      for (var c, d = a;(c = d.firstChild) && ve(c);) {
        d = c;
      }
      b.Ga = d;
      b.Za = 0;
      for (d = a;(c = d.lastChild) && ve(c);) {
        d = c;
      }
      b.Ea = d;
      b.Xa = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.Ef = a;
    } else {
      b.Ga = b.Ea = b.Ef = a.parentNode, b.Za = (0,z.Ya)(b.Ef.childNodes, a), b.Xa = b.Za + 1;
    }
    a = b;
  } else {
    a = z.Td ? new Je(te(a)) : z.Le ? new xe(te(a)) : z.Me ? new Ie(te(a)) : new z.se(te(a));
  }
  return a;
};
var ve = function(a) {
  return(0,z.zd)(a) || a.nodeType == z.ue;
};
z.Ne = function() {
};
z.Oe = function(a, b) {
  var c = new z.Ne;
  c.ti = a;
  c.ef = !!b;
  return c;
};
z.Pe = function(a, b, c, d) {
  var e = new z.Ne;
  e.ef = (0,z.Qe)(a, b, c, d);
  if ((0,z.Gd)(a) && !(0,z.zd)(a)) {
    var f = a.parentNode;
    b = (0,z.Ya)(f.childNodes, a);
    a = f;
  }
  (0,z.Gd)(c) && !(0,z.zd)(c) && (f = c.parentNode, d = (0,z.Ya)(f.childNodes, c), c = f);
  e.ef ? (e.Ga = c, e.Za = d, e.Ea = a, e.Xa = b) : (e.Ga = a, e.Za = b, e.Ea = c, e.Xa = d);
  return e;
};
z.Re = function(a) {
  var b;
  if (!(b = a.ti)) {
    b = a.Fa();
    var c = a.Gb(), d = a.gb(), e = a.tc();
    if (z.D && !$c(9)) {
      var f = b, h = c, k = d, l = e, m = !1;
      1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
      var q = ze(f);
      h && q.move("character", h);
      f == k && h == l ? q.collapse(!0) : (m && q.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = ze(k), f.collapse(!m), l && f.moveEnd("character", l), q.setEndPoint("EndToEnd", f));
      l = new z.ye(q, (0,z.ld)(b));
      l.Ga = b;
      l.Za = c;
      l.Ea = d;
      l.Xa = e;
      b = l;
    } else {
      b = z.Td ? new Je(we(b, c, d, e)) : z.Le ? new xe(we(b, c, d, e)) : z.Me ? new Ie(we(b, c, d, e)) : new z.se(we(b, c, d, e));
    }
    b = a.ti = b;
  }
  return b;
};
var Se = function(a) {
  this.Zz = (0,z.ke)(a);
  this.FI = (0,z.le)(a);
  this.HA = (0,z.me)(a);
  this.lJ = (0,z.ne)(a);
};
z.Te = function() {
};
z.Ue = function(a) {
  var b = new z.Te;
  b.na = a;
  return b;
};
var Ve = function(a) {
  for (var b = (0,z.ld)(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c]);
  }
  return(0,z.Ue)(b);
};
var We = function(a) {
  if (!a.rc && (a.rc = [], a.na)) {
    for (var b = 0;b < a.na.length;b++) {
      a.rc.push(a.na.item(b));
    }
  }
  return a.rc;
};
z.Xe = function(a) {
  a.tn || (a.tn = We(a).concat(), a.tn.sort(function(a, c) {
    return a.sourceIndex - c.sourceIndex;
  }));
  return a.tn;
};
var Ye = function(a) {
  this.rc = We(a);
};
z.Ze = function(a) {
  a && (this.rc = (0,z.Xe)(a), this.Ga = this.rc.shift(), this.Ea = (0,z.Ua)(this.rc) || this.Ga);
  z.Yd.call(this, this.Ga, !1, !0);
};
z.$e = function() {
  this.vf = [];
  this.Ek = [];
  this.fq = this.Rk = null;
};
var af = function(a) {
  var b = new z.$e;
  b.Ek = a;
  b.vf = (0,z.Bb)(a, function(a) {
    return a.Fi();
  });
  return b;
};
var bf = function(a) {
  a.Rk || (a.Rk = (0,z.je)(a), a.Rk.sort(function(a, c) {
    var d = a.Fa(), e = a.Gb(), f = c.Fa(), h = c.Gb();
    return d == f && e == h ? 0 : (0,z.Qe)(d, e, f, h) ? 1 : -1;
  }));
  return a.Rk;
};
var cf = function(a) {
  this.fw = (0,z.Bb)((0,z.je)(a), function(a) {
    return a.ew();
  });
};
z.df = function(a) {
  a && (this.Cf = (0,z.Bb)(bf(a), function(a) {
    return(0,z.Vd)(a);
  }));
  oe.call(this, a ? this.Fa() : null, !1);
};
z.Qe = function(a, b, c, d) {
  if (a == c) {
    return d < b;
  }
  var e;
  if (1 == a.nodeType && b) {
    if (e = a.childNodes[b]) {
      a = e, b = 0;
    } else {
      if ((0,z.Jd)(a, c)) {
        return!0;
      }
    }
  }
  if (1 == c.nodeType && d) {
    if (e = c.childNodes[d]) {
      c = e, d = 0;
    } else {
      if ((0,z.Jd)(c, a)) {
        return!1;
      }
    }
  }
  return 0 < (Kd(a, c) || b - d);
};
var ef = function(a) {
  return(a = a.exec(Uc())) ? a[1] : "";
};
var ff = function() {
  return z.Td ? "Webkit" : z.Le ? "Moz" : z.D ? "ms" : z.Me ? "O" : null;
};
z.gf = function() {
  return z.Td ? "-webkit" : z.Le ? "-moz" : z.D ? "-ms" : z.Me ? "-o" : null;
};
z.hf = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
};
z.jf = function(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
};
z.kf = function(a) {
  return new z.hf(a.top, a.left + a.width, a.top + a.height, a.left);
};
z.lf = function(a, b, c) {
  (0,z.ka)(b) ? mf(a, c, b) : (0,z.hb)(b, (0,z.xa)(mf, a));
};
var mf = function(a, b, c) {
  (c = nf(a, c)) && (a.style[c] = b);
};
var nf = function(a, b) {
  var c = (0,z.Sa)(b);
  if (void 0 === a.style[c]) {
    var d = ff() + Ta(b);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
};
z.of = function(a, b) {
  var c = a.style[(0,z.Sa)(b)];
  return "undefined" !== typeof c ? c : a.style[nf(a, b)] || "";
};
z.pf = function(a, b) {
  var c = (0,z.ld)(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
};
z.qf = function(a, b) {
  return(0,z.pf)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
};
z.rf = function(a) {
  var b;
  try {
    b = a.getBoundingClientRect();
  } catch (c) {
    return{left:0, top:0, right:0, bottom:0};
  }
  z.D && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
};
z.sf = function(a) {
  if (z.D && !$c(8)) {
    return a.offsetParent;
  }
  var b = (0,z.ld)(a), c = (0,z.qf)(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode;a && a != b;a = a.parentNode) {
    if (c = (0,z.qf)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
};
z.tf = function(a) {
  var b, c = (0,z.ld)(a), d = (0,z.qf)(a, "position"), e = z.Le && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new z.gd(0, 0), h;
  b = c ? (0,z.ld)(c) : window.document;
  (h = !z.D) || (h = $c(9)) || (h = (0,z.id)(b), h = (0,z.qd)(h.Lc));
  h = h ? b.documentElement : b.body;
  if (a == h) {
    return f;
  }
  if (a.getBoundingClientRect) {
    b = (0,z.rf)(a), a = (0,z.Sd)((0,z.id)(c)), f.x = b.left + a.x, f.y = b.top + a.y;
  } else {
    if (c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    } else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if (z.Td && "fixed" == (0,z.qf)(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break;
        }
        e = e.offsetParent;
      } while (e && e != a);
      if (z.Me || z.Td && "absolute" == d) {
        f.y -= c.body.offsetTop;
      }
      for (e = a;(e = (0,z.sf)(e)) && e != c.body && e != h;) {
        f.x -= e.scrollLeft, z.Me && "TR" == e.tagName || (f.y -= e.scrollTop);
      }
    }
  }
  return f;
};
var uf = function(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
};
z.vf = function(a, b) {
  var c = (0,z.id)(b), d = null, e = c.ig();
  z.D && e.createStyleSheet ? (d = e.createStyleSheet(), wf(d, a)) : (e = Rd(c, "head")[0], e || (d = Rd(c, "body")[0], e = c.oc("head"), d.parentNode.insertBefore(e, d)), d = c.oc("style"), wf(d, a), c.appendChild(e, d));
  return d;
};
var xf = function(a) {
  (0,z.Dd)(a.ownerNode || a.owningElement || a);
};
var wf = function(a, b) {
  z.D && (0,z.ga)(a.cssText) ? a.cssText = b : a.innerHTML = b;
};
var yf = function(a) {
  yf[" "](a);
  return a;
};
var zf = function(a) {
  this.ot = a;
  this.Wx = !1;
};
var Af = function(a) {
  if (!a.Wx) {
    for (var b = a.ot.split("/"), c = {}, d = 0;d < b.length;d++) {
      if (":" == b[d].charAt(0)) {
        var e = Bf.exec(b[d]);
        if (!e) {
          throw Error("Parse error " + a.ot);
        }
        c[e[1]] = new Cf(d, null == e[2] ? null : Number(e[2]));
        b[d] = ":" + e[1];
      }
    }
    a.pt = c;
    a.Vo = b;
    a.Wx = !0;
  }
};
var Cf = function(a, b) {
  this.index = a;
  this.padding = b;
};
var Df = function() {
};
var Ef = function() {
};
var Ff = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.Xk) {
    if (null == c) {
      return null;
    }
    if (c instanceof Object) {
      return a.zb(b, c, d);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
var Gf = function(a, b, c) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.Xk) {
    if (null == c) {
      return null;
    }
    if (c.Xk) {
      return a.Mc(c);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
var Hf = function() {
  this.data = {};
  this.Hz = !1;
  Object.preventExtensions && Object.preventExtensions(this);
};
z.If = function(a, b) {
  a.Hz = b;
  return a;
};
z.Jf = function(a, b) {
  a.ck(b);
  return b in a.data;
};
z.E = function(a, b, c) {
  var d = a.ck(b);
  if (a.Hz && d) {
    if (d.h()) {
      if (!Array.isArray(c)) {
        throw Error("Type mismatch. Expected Array. Actual: " + c);
      }
      for (var e = 0;e < c.length;e++) {
        Kf(b, d, c[e]);
      }
    } else {
      Kf(b, d, c);
    }
  }
  a.data[b] = c;
  return a;
};
var Kf = function(a, b, c) {
  b = b.g();
  var d = b.name || b, e = !1;
  if (b == Number) {
    e = "number" == typeof c;
  } else {
    if (b == String) {
      e = "string" == typeof c;
    } else {
      if (b == Boolean) {
        e = "boolean" == typeof c;
      } else {
        if (b == Object) {
          e = c && "object" == typeof c && !(c instanceof Hf);
        } else {
          if (b.prototype instanceof Hf) {
            e = c instanceof b;
          } else {
            if (b.$isProtoEnum) {
              e = "number" == typeof c && (0,z.lb)(b, c);
            } else {
              throw Error("I don't know how to type-check " + d + " on field " + a);
            }
          }
        }
      }
    }
  }
  if (!e) {
    throw Error("Type mismatch. Expected: " + d + " on field " + a + ", Value " + c);
  }
};
var Lf = function(a, b) {
  var c = a.ck(b);
  if (!c || c.h()) {
    return null;
  }
  var d = c.defaultValue();
  if (void 0 !== d) {
    return d;
  }
  c = c.g();
  switch(c) {
    case Number:
      return 0;
    case String:
      return "";
    case Boolean:
      return!1;
    case Object:
      return null;
    default:
      if (c.$isProtoEnum) {
        for (var e in c) {
          if (c.hasOwnProperty(e) && "number" == typeof c[e]) {
            return c[e];
          }
        }
      }
      return null;
  }
};
var Mf = function(a, b) {
  a.eM = b.name;
  a.HL = b.fields;
  a.prototype.xe = function() {
    return b;
  };
  var c = a.prototype, d = {}, e;
  for (e in b.fields) {
    b.fields[e] ? (d[b.fields[e].l()] = e, Nf(c, e)) : delete b.fields[e];
  }
  b.CR = d;
};
var Of = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Boolean || b == Number || b.$isProtoEnum) {
    return c === d;
  }
  if (b.prototype instanceof Hf) {
    return c === d || c && d && c.Fb(d);
  }
  if (b == Object) {
    return Pf(a, c, d);
  }
  throw Error("no equality metric");
};
var Pf = function(a, b, c) {
  if (!b || !c || "object" != typeof b || "object" != typeof c) {
    return!1;
  }
  for (var d in b) {
    if (null !== b[d] && "object" == typeof b[d]) {
      if (!Pf(a, b[d], c[d])) {
        return!1;
      }
    } else {
      if (b[d] != c[d]) {
        return!1;
      }
    }
  }
  return!0;
};
var Nf = function(a, b) {
  if (b in a) {
    throw Error('Can not define setters/getters for "' + b + '", property name already exists.');
  }
  Object.defineProperty(a, b, {get:function() {
    return this.w(b);
  }, set:function(a) {
    (0,z.E)(this, b, a);
  }});
};
var Qf = function() {
  Hf.call(this);
};
var Rf = function(a, b, c) {
  Mf(a, c);
  c.table = c.table;
  c.ab = c.ab;
  c.be = void 0 === c.be || c.be;
  c.xv = void 0 === c.xv ? !1 : c.xv;
  a.DL = c;
  a.zM = c.table;
  a.PL = c.ab;
  a.lM = c.lb.toString();
  a.ZL = c.be;
  a.$L = c.xv;
  a.xQ = function(a) {
    return c.lb.parse(a);
  };
  a.DO = function(a, b) {
    var f;
    if (a === c.ab) {
      f = c.fields[b].j();
    } else {
      for (var h = 0;h < c.ca.length;h++) {
        var k = c.ca[h];
        k.OO === a && k.PO === b && (f = "gsi-" + a + (b ? "-" + b : "") + "-index");
      }
    }
    if (void 0 === f) {
      throw Error("Index does not exist on hash key " + a + " and range key " + b);
    }
    return f;
  };
  a = a.prototype;
  b && a && (Object.defineProperty(a, "id", {get:Qf.prototype.JA, set:function() {
  }}), Nf(a, "column"), Object.defineProperty(a, "hashKey", {get:Qf.prototype.JA}), Object.defineProperty(a, "rangeKey", {get:Qf.prototype.qJ}));
};
z.Sf = function() {
  Hf.call(this);
};
var Tf = function() {
  Hf.call(this);
};
var Uf = function() {
  Hf.call(this);
};
var Vf = function(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a;
};
var Wf = function(a, b, c, d) {
  a = (d ? Math.ceil : Math.floor)(a / c) * c;
  return Math.max(Math.min(a, b.end), b.start);
};
z.G = function(a) {
  a = a.split(".");
  var b;
  b = a.shift();
  b = Xf[b] || b;
  for (var c = z.Yf[b];c && (b = a.shift());) {
    c = c[b];
  }
  return c;
};
z.H = function(a, b) {
  return a(b || {}, null, z.Yf);
};
z.Zf = function(a, b) {
  return(0,z.xd)((0,z.H)(a, b));
};
var $f = function() {
  var a = window.GLOBALS;
  z.Yf = {};
  for (var b in Xf) {
    z.Yf[Xf[b]] = a[b];
  }
  z.Yf.deviceWidth = ag(function() {
    return window.document.body.clientWidth;
  });
  z.Yf.deviceWidthImageBucket = ag(function() {
    return Wf(window.document.body.clientWidth || 1200, bg, 200, !0);
  });
  z.Yf.XI = ag(function() {
    return window.document.body.clientHeight;
  });
  z.Yf.YI = ag(function() {
    return Wf(window.document.body.clientHeight || 1200, bg, 200, !0);
  });
};
var ag = function(a) {
  return{valueOf:a, toString:function() {
    return String(Number(this));
  }};
};
var cg = function(a, b, c) {
  var d = (0,z.J)(a, b, function() {
    (0,z.dg)(d);
    c.apply(this, arguments);
  }, void 0, void 0);
};
z.J = function(a, b, c, d, e) {
  if (!a) {
    throw Error("Can not add listener, element is not defined");
  }
  return eg(a, b, c, d, e);
};
var eg = function(a, b, c, d, e) {
  function f(b) {
    b = fg(b);
    c.call(d || a, b);
  }
  if (!a) {
    return null;
  }
  b = gg ? b : "on" + b;
  e = e || !1;
  a[hg](b, f, e);
  return{J:a, type:b, nk:f, Vj:e};
};
z.dg = function(a) {
  if (a) {
    if ((0,z.ha)(a)) {
      for (var b = 0;b < a.length;b++) {
        (0,z.dg)(a[b]);
      }
    } else {
      a.J[ig](a.type, a.nk, a.Vj);
    }
  }
};
var fg = function(a) {
  var b = a || window.event;
  b.preventDefault || (b.preventDefault = function() {
    b.returnValue = !1;
  });
  b.stopPropagation || (b.stopPropagation = function() {
    b.cancelBubble = !0;
  });
  "mouseover" != b.type || b.relatedTarget || (b.relatedTarget = b.fromElement);
  "mouseout" != b.type || b.relatedTarget || (b.relatedTarget = b.toElement);
  return b;
};
z.jg = function(a) {
  return a.innerText || a.textContent;
};
z.kg = function(a, b, c, d) {
  for (var e = c || window.document.body;a && a != e && !b(a);) {
    a = a.parentNode;
  }
  return c && !d && e == a || a && e != a && !(0,z.Jd)(e, a) ? null : a;
};
var lg = function(a, b, c) {
  a == window.document.body && (a = window);
  "function" == typeof a.scrollTo ? a.scrollTo(b, c) : (a.scrollTop = c, a.scrollLeft = b);
};
var mg = function(a, b) {
  for (var c = {x:0, y:0}, d = b || window.document.body;a && a != d;) {
    c.y += a.offsetTop, c.x += a.offsetLeft, a = a.offsetParent;
  }
  return c;
};
z.ng = function(a) {
  return mg(a, (0,z.og)(a)).y;
};
z.og = function(a, b) {
  for (var c = b ? a : a.parentNode;(0,z.Gd)(c) && "auto" != (0,z.qf)(c, "overflowY");c = c.parentNode) {
  }
  return(0,z.Gd)(c) ? c : window.document.body;
};
var pg = function(a) {
  return a == window.document.body || a == window.document.documentElement ? (0,z.qg)() : new z.jf(a.scrollLeft, a.scrollTop, a.scrollWidth, a.scrollHeight);
};
z.qg = function() {
  return new z.jf(window.document.documentElement.scrollLeft || window.document.body.scrollLeft || 0, window.document.documentElement.scrollTop || window.document.body.scrollTop || 0, window.document.documentElement.scrollWidth || window.document.body.scrollWidth || 0, window.document.documentElement.scrollHeight || window.document.body.scrollHeight || 0);
};
z.rg = function(a) {
  return new z.jf(a.left, a.top, a.width, a.height);
};
z.sg = function(a) {
  var b = a.nodeType == z.ue || "BR" == a.tagName ? a.parentNode : a;
  a = (0,z.rg)(b.getBoundingClientRect());
  "mobile safari" == (0,z.G)("useragent.browser") && b == window.document.body && (b = (0,z.qg)(), a.top += b.top, a.left += b.left);
  return a;
};
z.tg = function(a) {
  yf(a.offsetHeight);
};
z.ug = function(a) {
  a = a.tagName;
  return "OL" == a || "UL" == a;
};
var vg = function(a, b) {
  (0,z.Gd)(b) ? a.appendChild(b) : (0,z.ha)(b) ? b.forEach(function(b) {
    vg(a, b);
  }) : a.appendChild(window.document.createTextNode(String(b)));
};
var wg = function(a) {
  var b = Array.prototype.splice.call(arguments, 0), c;
  "string" == typeof b[0] ? (c = window.document.createElement(b[0]), b.shift()) : c = window.document.createElement("div");
  if (null == b[0]) {
    b.shift();
  } else {
    if ("string" == typeof b[0]) {
      c.className = b[0], b.shift();
    } else {
      if (!(0,z.Gd)(b[0])) {
        for (var d in b[0]) {
          c.setAttribute(d, b[0][d]);
        }
        b.shift();
      }
    }
  }
  for (d = 0;d < b.length;d++) {
    vg(c, b[d]);
  }
  return c;
};
var xg = function(a) {
  this.id = a;
  this.eg = {};
};
var yg = function(a, b) {
  if ("undefined" == typeof b) {
    for (var c in a.eg) {
      return!0;
    }
    return!1;
  }
  return!!a.eg[b];
};
z.zg = function(a, b, c) {
  Ag();
  Bg.D(a, b, c);
  return Bg;
};
z.Cg = function(a) {
  Dg && Bg.clear(a);
};
z.Eg = function(a) {
  Ag();
  var b;
  "string" == typeof a ? b = a : (b = a.getAttribute("data-action-scope"), b || (b = "_actionscope_" + Fg++, a.setAttribute("data-action-scope", b)));
  Gg[b] || (Gg[b] = new xg(b));
  return Gg[b];
};
z.Hg = function(a) {
  a = "string" == typeof a ? a : a instanceof xg ? a.id : a.getAttribute("data-action-scope");
  Gg[a] && (Gg[a].clear(), delete Gg[a]);
};
var Ag = function() {
  Dg || (Dg = !0, (0,z.J)(window.document.body, "click", Ig), (0,z.J)(window.document.body, "mousedown", Jg), (0,z.J)(window.document, "keydown", Kg), Bg = (0,z.Eg)(window.document.body));
};
var Lg = function(a) {
  return z.D && !(0,z.Xc)(9) ? 1 == a.button : z.Td && z.Mg ? !a.button && !a.ctrlKey : !a.button;
};
var Ng = function(a) {
  return "true" == a.contentEditable || "INPUT" == a.tagName && "text" == a.type || "TEXTAREA" == a.tagName;
};
var Jg = function(a) {
  if (Lg(a)) {
    var b = Og(a), c = a.target;
    b && !(0,z.Qd)(c, Ng) && a.preventDefault();
  }
};
var Ig = function(a) {
  !Lg(a) || !Pg(a) || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (a.preventDefault(), a.stopPropagation());
};
var Kg = function(a) {
  13 == a.keyCode && Pg(a) && a.preventDefault();
};
var Og = function(a) {
  for (var b = a.target;b && b != window.document;) {
    var c = b.getAttribute("data-action");
    if (c) {
      return{ie:c, target:b, value:b.getAttribute("data-action-value"), event:a, Im:a.metaKey || a.shiftKey || a.altKey || a.ctrlKey};
    }
    b = b.parentNode;
  }
  return null;
};
var Pg = function(a) {
  return Dg ? (a = Og(a)) ? Qg(a) : !1 : !1;
};
var Qg = function(a) {
  if (a.target.disabled) {
    return!1;
  }
  for (var b = a.target, c = !1;b && b != window.document;) {
    var d = Gg[b.getAttribute("data-action-scope")];
    if (d) {
      if (d = d.Ue(a)) {
        return!0;
      }
      c = c || !1 === d;
    }
    b = b.parentNode;
  }
  return c;
};
var Rg = function() {
  "animation-name" in Sg || (Sg["animation-name"] = {});
  if (!("a" in Sg["animation-name"])) {
    var a = Sg["animation-name"], b;
    "CSS" in window && "supports" in window.CSS ? b = window.CSS.supports("animation-name", "a") ? "native" : window.CSS.supports((0,z.gf)() + "-animation-name", "a") ? "prefixed" : "unsupported" : (b = window.document.createElement("div"), b = (0,z.Sa)("animation-name") in b.style ? "native" : ff() + Ta("animation-name") in b.style ? "prefixed" : "unsupported");
    a.a = b;
  }
  return Sg["animation-name"].a;
};
z.Tg = function(a, b) {
  z.nc.call(this);
  this.ja = a;
  this.gp = (0,z.ha)(b) ? b : [b];
  this.Nn = {};
  this.tr = null;
  (0,z.t)(this, this.pause, this);
  (0,z.tc)(this, this.ED, this);
};
var Ug = function(a) {
  return "prefixed" == Rg() ? ff().toLowerCase() + "Animation" + a.charAt(0).toUpperCase() + a.substr(1) : "animation" + a;
};
z.Vg = function(a, b, c, d) {
  var e = c ? (0,z.vb)(c) : null;
  a.gp.forEach(function(a) {
    e && !(a.name in e) || d && !d.call(this, a.name) || (a.paused = b);
  }, a);
  ah(a);
  return a;
};
var ah = function(a) {
  var b = (0,z.Bb)(a.gp, function(a) {
    a.paused || (this.Nn[a.name] = !1);
    return a.paused ? "paused" : "running";
  }, a);
  (0,z.lf)(a.ja, "animationPlayState", b.join(","));
};
z.bh = function() {
  z.B.call(this);
  this.ge = [];
  this.gf = {};
};
var ch = function(a) {
  delete a.ge;
  delete a.gf;
  delete a.Zm;
};
var dh = function(a) {
  this.ep = a;
  this.kl = {};
};
var eh = function(a) {
  if (fh) {
    for (var b = {}, c = a.$e(), d = 0;d < c.length;d++) {
      b[c[d]] = a.get(c[d]);
    }
    return b;
  }
  return a.kl;
};
var gh = function(a, b) {
  this.py = a;
  this.hI = b;
  this.gl = (0,z.hh)() + ":" + String(Math.random()).substr(2);
  this.jb = new dh("MUTEX_" + a);
};
var ih = function(a) {
  var b = String(a.jb.get("Y") || "");
  return "" === b || Number(b.split("|")[1]) < (0,z.hh)() - a.hI;
};
var jh = function(a, b, c) {
  var d;
  try {
    d = b.call(c);
  } finally {
    d instanceof z.nc ? (0,z.tc)(d, a.ax, a) : a.ax();
  }
};
var kh = function(a, b, c, d) {
  this.ga = a.get("request");
  this.Ic = b;
  this.Rn = this.WH = c;
  this.kF = d;
  this.rF = new gh(b, 3E4);
  this.jb = new dh(b);
  this.Ep = null;
  this.vp = !1;
  this.oD = String(Math.random()).substr(2);
  this.Jr = 0;
  (0,z.J)(window, "beforeunload", this.ks, this);
  lh(this);
};
var mh = function(a, b) {
  if (!b) {
    throw Error("Client reports a null stat");
  }
  a.Jr = (a.Jr + 1) % a.kF;
  a.jb.put(a.oD + "|" + a.Jr, b);
  lh(a);
};
var nh = function(a, b) {
  var c = [], d = !1, e;
  for (e in b) {
    b[e] || (d = !0, a.jb.remove(e), delete b[e], /^\d+\|\d+$/.test(e) || c.push(e));
  }
  d && (0 < c.length && (d = Error("Reported stats are null from " + (fh ? "LocalStorage" : "InMemoryStorage")), oh(d, "unrecognizedKeys", c), (0,z.ph)(d)), fh = !1);
};
var lh = function(a) {
  a.vp || null != a.Ep || (a.Ep = window.setTimeout(a.dz.bind(a), a.Rn));
};
var qh = function() {
};
var rh = function() {
};
z.sh = function() {
  var a = th(uh);
  return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest;
};
var th = function(a) {
  if (!a.$A && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new window.ActiveXObject(d), a.$A = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.$A;
};
z.vh = function(a) {
  if (wh) {
    wh = !1;
    var b = z.da.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = (0,z.vh)(c)[3] || null) && (0,window.decodeURIComponent)(c)) && c != b.hostname) {
        throw wh = !0, Error();
      }
    }
  }
  return a.match(xh);
};
var yh = function(a, b, c, d) {
  var e = !1, f = new z.nc(function() {
    e = !0;
    h.abort();
    h.onreadystatechange = z.ea;
  }), h = zh(a, b, c, d, function(a) {
    e || (e = !0, f.Ba(a));
  }, function(a) {
    e || (e = !0, f.Wd(a));
  });
  return f;
};
var zh = function(a, b, c, d, e, f) {
  d = d || {};
  var h = e || z.ea, k = f || z.ea, l, m = (0,z.sh)();
  try {
    m.open(a, b, !0);
  } catch (q) {
    return k(new Ah("Error opening XHR: " + q.message, b, m)), m;
  }
  m.onreadystatechange = function() {
    if (4 == m.readyState) {
      window.clearTimeout(l);
      var a;
      a: {
        switch(m.status) {
          case 200:
          ;
          case 201:
          ;
          case 202:
          ;
          case 204:
          ;
          case 206:
          ;
          case 304:
          ;
          case 1223:
            a = !0;
            break a;
          default:
            a = !1;
        }
      }
      !a && (a = 0 === m.status) && (a = (0,z.vh)(b)[1] || null, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
      a ? h(m) : k(new Bh(m.status, b, m));
    }
  };
  e = !1;
  if (d.headers) {
    for (var s in d.headers) {
      m.setRequestHeader(s, d.headers[s]);
    }
    e = "Content-Type" in d.headers;
  }
  "POST" != a || e || m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  d.withCredentials && (m.withCredentials = d.withCredentials);
  d.Cv && m.overrideMimeType(d.Cv);
  0 < d.vw && (l = window.setTimeout(function() {
    m.onreadystatechange = z.ea;
    m.abort();
    k(new Ch(b, m));
  }, d.vw));
  try {
    m.send(c);
  } catch (I) {
    k(new Ah("Error sending XHR: " + I.message, b, m));
  }
  return m;
};
var Ah = function(a, b, c) {
  z.ya.call(this, a + ", url\x3d" + b);
  this.url = b;
  this.Wk = c;
};
var Bh = function(a, b, c) {
  Ah.call(this, "Request Failed, status\x3d" + a, b, c);
  this.status = a;
};
var Ch = function(a, b) {
  Ah.call(this, "Request timed out", a, b);
};
var Dh = function(a, b) {
  Eh[a] = b;
};
var oh = function(a, b, c) {
  a.Zk || (a.Zk = {});
  a.Zk[b] = c;
};
var Fh = function(a) {
  if (Gh) {
    throw Error("Guard reporter already configured");
  }
  Gh = a;
};
var Hh = function() {
  var a = window || window, b = a.onerror;
  a.onerror = function(a, d, e) {
    b && b(a, d, e);
    d = String(d).split(/[\/\\]/).pop();
    (0,z.ph)({message:a, fileName:d, nB:e});
    return!0;
  };
};
var Ih = function() {
  var a = zh;
  zh = function(b, c, d, e, f, h) {
    f = f ? Hb.ej(f) : null;
    h = h ? Hb.ej(h) : null;
    return a(b, c, d, e, f, h);
  };
  zh.__originalFn = a;
};
var Jh = function() {
  var a = z.J;
  z.J = function(b, c, d, e, f) {
    return a(b, c, Hb.ej(d), e, f);
  };
  z.J.__originalFn = a;
};
var Lh = function() {
  var a = window.setTimeout;
  window.setTimeout = function(b, c) {
    b = Hb.ej(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setTimeout.__originalFn = a;
};
var Mh = function() {
  var a = window.setInterval;
  window.setInterval = function(b, c) {
    b = Hb.ej(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setInterval.__originalFn = a;
};
z.K = function(a) {
  "string" == typeof a && (a = Error(a));
  Nh(a) || (0,z.ph)(a);
};
var Nh = function(a) {
  for (var b = a.message + a.stack, c = 0;c < Oh.length;c++) {
    var d = Oh[c];
    if ("string" == typeof d) {
      if (-1 != b.indexOf(d)) {
        return!0;
      }
    } else {
      if (a instanceof d) {
        return!0;
      }
    }
  }
  return!1;
};
z.ph = function(a) {
  if (!(Nh(a) || 50 < Ph)) {
    Ph++;
    var b = {}, c;
    for (c in Eh) {
      b[c] = String(Eh[c]);
    }
    if (a.Zk) {
      for (c in a.Zk) {
        b[c] = String(a.Zk[c]);
      }
    }
    a = {message:a.message, name:a.name, lineNumber:a.lineNumber || a.line || "Not available", fileName:a.fileName || a.filename || a.sourceURL || window.location.href, stack:a.stack || "Not available", timestamp:(new Date).getTime(), extra:b};
    Gh ? mh(Gh, a) : Qh.push(a);
  }
};
var Rh = function() {
};
z.Sh = function() {
  z.bh.call(this);
  this.Tl = [];
};
var Th = function(a, b) {
  for (var c = 0;c < a.Tl.length;c++) {
    if (a.Tl[c][0] == b) {
      return a.Tl[c][1];
    }
  }
  return null;
};
z.Uh = function() {
  z.Sh.call(this);
  this.Yf = !1;
  this.sa = [];
  this.hp = [];
};
z.Vh = function(a, b, c, d, e) {
  c = b.C(c, d, e || a);
  a.hp.push([b, c]);
};
var Wh = function(a, b) {
  z.Uh.call(this);
  b && this.H();
};
z.L = function(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for (e in b) {
    d[e] = b[e];
  }
  return d;
};
var Xh = function(a) {
  var b = [], c;
  for (c in a) {
    b.push(c);
  }
  return b;
};
var N = function(a, b, c) {
  var d = "key_" + a + ":" + b, e = Yh[d];
  if (void 0 === e || 0 > e) {
    Yh[d] = 0, Zh[d] = c;
  } else {
    if (0 == e) {
      throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
    }
  }
};
var $h = function(a, b) {
  var c = Zh["key_" + a + ":" + b];
  c || "" == b || (c = Zh["key_" + a + ":"]);
  return c ? c : ai;
  throw Error('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault\x3d"true").');
};
var ai = function() {
  return "";
};
z.O = function(a) {
  return a && a.fh && a.fh === bi ? a.content : String(a).replace(ci, di);
};
var ei = function(a) {
  return a && a.fh && a.fh === bi ? String(a.content).replace(fi, di) : String(a).replace(ci, di);
};
z.P = function(a) {
  a && a.fh && a.fh === bi ? (a = String(a.content).replace(gi, "").replace(hi, "\x26lt;"), a = String(a).replace(fi, di)) : a = String(a).replace(ci, di);
  return a;
};
var ii = function(a) {
  return "%" + a.charCodeAt(0).toString(16);
};
var ji = function(a) {
  if (a && a.fh === ki) {
    return String(a).replace(li, mi);
  }
  a = (0,window.encodeURIComponent)(String(String(a)));
  ni.lastIndex = 0;
  return ni.test(a) ? a.replace(ni, ii) : a;
};
z.Q = function(a) {
  return a && a.fh == ki ? String(a).replace(li, mi) : oi(a);
};
z.pi = function(a) {
  return a && a.fh === qi ? "zSoyz" : String(a);
};
var di = function(a) {
  return ri[a];
};
var mi = function(a) {
  return si[a];
};
var oi = function(a) {
  a = String(a);
  return ti.test(a) ? a.replace(li, mi) : "#zSoyz";
};
var ui = function() {
  return vi.test("iframe") ? "iframe" : "zSoyz";
};
var wi = function() {
  for (var a = '\x3cul class\x3d"image-washes"\x3e', b = "grey blue yellow teal purple red ".split(" "), c = b.length, d = 0;d < c;d++) {
    a += '\x3cli class\x3d"image-washes-item"\x3e\x3cbutton class\x3d"btn-image-wash" data-action\x3d"wash" data-action-value\x3d"' + (0,z.P)(b[d]) + '"\x3e\x3c/button\x3e\x3c/li\x3e';
  }
  return a + "\x3c/ul\x3e";
};
z.xi = function() {
  var a;
  a = {};
  return'\x3cdiv class\x3d"upload-feedback" data-action\x3d"dummy"\x3e\x3cdiv class\x3d"upload-feedback-preview"\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback-inner"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e' + (a.iR ? "" : '\x3cbutton data-action\x3d"cancel-upload" class\x3d"btn btn-chromeless btn-light btn-cancel"\x3e\x26#215;\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e";
};
z.yi = function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-chromeless btn-replace-image ' + (a.kb ? "btn-light" : "") + ' image-controls distraction-free-component" data-action\x3d"pick-image"' + (a.vC ? 'data-tooltip\x3d"' + (0,z.P)(a.vC) + '"' : "") + '\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"screen-reader-text"\x3eUpload an optional image.\x3c/span\x3e\x3c/button\x3e';
};
z.zi = function(a, b, c) {
  b = "";
  if (a.imageId) {
    var d = c.useragent && c.useragent.isMobile && a.oK ? a.oK : a.width ? a.width : c.deviceWidthImageBucket ? c.deviceWidthImageBucket : c.deviceWidth, e = c.useragent && c.useragent.isMobile && a.nK ? a.nK : a.height ? a.height : 0.8 * d, f = a.cropType ? a.cropType : "c", d = c.variants.use_retina_images ? d * c.devicePixelRatio : d, e = c.variants.use_retina_images ? e * c.devicePixelRatio : e;
    b += (0,z.O)(c.miroUrl) + "/";
    switch(a.strategy) {
      case "resample":
        b += "max/" + (0,z.O)(d);
        break;
      case "crop-fixed":
        b += "fit/" + (0,z.O)(f) + "/" + (0,z.O)(d) + "/" + (0,z.O)(e);
        break;
      case "crop-preserve":
        b += "fit/" + (0,z.O)(f) + "/" + (0,z.O)(d) + "/" + (0,z.O)(a.height * d);
        break;
      default:
        b += "proxy";
    }
    b += (a.filter ? "/desat/multiply/" + (0,z.O)(a.filter) + "/overlay/" + (0,z.O)(a.filter) : "") + (a.verticalGradient ? "/gradv/" + (0,z.O)(a.verticalGradient) : "") + (a.darken ? "/darken/" + (0,z.O)(a.darken) : "") + (a.blur ? "/blur/" + (0,z.O)(a.blur) : "") + "/" + (0,z.O)(a.imageId);
  }
  return b;
};
z.Ai = function(a, b) {
  var c = "", d = a.wv ? (0,z.Bi)(a, 0, b) : (0,z.Ci)(a, 0, b), e = a.wv ? (0,z.Bi)((0,z.L)(a, {oh:!0}), 0, b) : (0,z.Ci)((0,z.L)(a, {oh:!0}), 0, b);
  return c += '\x3cdiv class\x3d"image-' + (0,z.P)(a.size) + '-bleed" data-scroll\x3d"blur-cover"\x3e\x3cdiv class\x3d"image-src picker-target" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(d)) + '\')"\x3e\x3c/div\x3e\x3cdiv class\x3d"image-src image-blur picker-target-blur" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(e)) + "')\"\x3e\x3c/div\x3e\x3c/div\x3e";
};
z.Bi = function(a, b, c) {
  return(0,z.zi)((0,z.L)(a.image, {strategy:"crop-fixed", darken:a.oh ? 50 : 25, verticalGradient:a.oh ? "29/81/40" : "29/81/60", blur:a.oh ? 50 : null}), 0, c);
};
z.Ci = function(a, b, c) {
  return(0,z.zi)((0,z.L)(a.image, {strategy:"crop-fixed", darken:a.oh ? 25 : 0, verticalGradient:a.oh ? "29/81/40" : "29/81/30", blur:a.oh ? 50 : null}), 0, c);
};
var Di = function(a, b) {
  return Ei(a) + (!a.post.latestPublishedVersion && a.post.creatorId == b.currentUser.userId && b.supportsEdit ? "/edit" : "");
};
var Ei = function(a) {
  var b = a.post.id || a.post.postId;
  return a = "" + ("/" + (a.nc ? (0,z.O)(a.nc) : a.collection ? (0,z.O)(a.collection.slug) : a.post.homeCollection ? (0,z.O)(a.post.homeCollection.slug) : "p") + "/" + (0,z.O)(b));
};
z.Fi = function(a) {
  return a.user.userId ? "/@" + (0,z.O)(a.user.username) : "/m/errors/404";
};
var Gi = function(a, b, c) {
  b = "";
  var d = a.imageId ? (0,z.zi)({imageId:a.imageId, strategy:"crop-fixed", width:"150", height:"150", cropType:"t"}, 0, c) : "https:" + (0,z.O)(c.defaultPreviewImage);
  return b += "https://www.facebook.com/dialog/feed? app_id\x3d" + ji(c.facebookKey) + "\x26 link\x3d" + ji(a.url) + "\x26 name\x3d" + ji(a.title) + "\x26 display\x3dpopup\x26 picture\x3d" + ji(d) + "\x26 caption\x3d" + ji(a.caption) + "\x26 description\x3d" + ji(a.description) + "\x26 redirect_uri\x3d" + ji(a.FK);
};
var Hi = function(a) {
  this.da = a;
  this.ba = a.get("app");
  this.W = a.get("dialog");
  this.co = a.get("gestures");
  this.fa = a.get("datastore").wb[Ii];
  this.U = "";
  this.Yx = (0,z.J)(window.document.body, "keyup", this.Xs, this);
  this.co.C("flickleft", this.By, this);
  this.co.C("flickright", this.Cy, this);
  (0,window.setTimeout)(this.Xy.bind(this), 3E3);
};
var Ji = function(a) {
  (0,z.r)(a.ye(), function(a) {
    a ? (this.U = a.get("id"), a = (0,z.H)(Ei, {post:a.Pa()}), (0,z.r)(this.ba.navigate(a, {wn:this.oI.bind(this)}), this.Xy, this)) : this.W.open({title:"No more posts", bodyHtml:"You have come to the end of your PRL", type:z.Ki});
  }, a);
};
var Li = function(a, b) {
  var c;
  if (a instanceof Li) {
    this.Be = (0,z.ga)(b) ? b : a.Be, Mi(this, a.Xi), c = a.ir, Ni(this), this.ir = c, this.ln(a.hk()), Oi(this, a.Oq), c = a.Cm(), Ni(this), this.Rv = c, Pi(this, a.Eh.ia()), c = a.kq, Ni(this), this.kq = c;
  } else {
    if (a && (c = (0,z.vh)(String(a)))) {
      this.Be = !!b;
      Mi(this, c[1] || "", !0);
      var d = c[2] || "";
      Ni(this);
      this.ir = d ? (0,window.decodeURIComponent)(d) : "";
      this.ln(c[3] || "", !0);
      Oi(this, c[4]);
      d = c[5] || "";
      Ni(this);
      this.Rv = d ? (0,window.decodeURIComponent)(d) : "";
      Pi(this, c[6] || "", !0);
      c = c[7] || "";
      Ni(this);
      this.kq = c ? (0,window.decodeURIComponent)(c) : "";
    } else {
      this.Be = !!b, this.Eh = new Qi(null, 0, this.Be);
    }
  }
};
var Mi = function(a, b, c) {
  Ni(a);
  a.Xi = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
  a.Xi && (a.Xi = a.Xi.replace(/:$/, ""));
};
var Oi = function(a, b) {
  Ni(a);
  if (b) {
    b = Number(b);
    if ((0,window.isNaN)(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.Oq = b;
  } else {
    a.Oq = null;
  }
};
var Pi = function(a, b, c) {
  Ni(a);
  b instanceof Qi ? (a.Eh = b, a.Eh.lw(a.Be)) : (c || (b = Ri(b, Si)), a.Eh = new Qi(b, 0, a.Be));
};
var Ni = function(a) {
  if (a.TJ) {
    throw Error("Tried to modify a read-only Uri");
  }
};
var Ri = function(a, b) {
  return(0,z.ka)(a) ? (0,window.encodeURI)(a).replace(b, Ti) : null;
};
var Ti = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
var Qi = function(a, b, c) {
  this.Vd = a || null;
  this.Be = !!c;
};
var Ui = function(a) {
  if (!a.Qb && (a.Qb = new z.ce, a.Bb = 0, a.Vd)) {
    for (var b = a.Vd.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = (0,window.decodeURIComponent)(e.replace(/\+/g, " "));
      e = cj(a, e);
      a.add(e, f ? (0,window.decodeURIComponent)(f.replace(/\+/g, " ")) : "");
    }
  }
};
var dj = function(a, b, c) {
  a.remove(b);
  0 < c.length && (a.Vd = null, a.Qb.set(cj(a, b), (0,z.ej)(c)), a.Bb += c.length);
};
var cj = function(a, b) {
  var c = String(b);
  a.Be && (c = c.toLowerCase());
  return c;
};
z.fj = function(a) {
  z.Sh.call(this);
  this.jb = a || {};
  this.Ur = {};
};
z.gj = function(a, b) {
  var c = a.get(b);
  return null != c ? String(c) : "";
};
z.hj = function(a, b) {
  var c = a.get(b);
  return null != c ? Number(c) : 0;
};
z.ij = function(a) {
  a.Q("remove", a);
};
z.jj = function(a) {
  z.Sh.call(this);
  this.Ia = a || [];
  this.sB = {};
};
z.kj = function(a, b) {
  return a.Ia[b] || null;
};
z.lj = function(a, b, c) {
  return a.find(function(a) {
    return a.get(b) === c;
  });
};
var mj = function(a, b) {
  for (var c = 0;c < a.Ia.length;c++) {
    if (a.Ia[c].get("id") === b) {
      return c;
    }
  }
  return-1;
};
var nj = function(a, b) {
  b.C("change", a.Hy, a);
  b.C("remove", a.Jy, a);
};
var oj = function(a, b) {
  b.xa("change", a.Hy, a);
  b.xa("remove", a.Jy, a);
};
var pj = function(a) {
  z.jj.call(this);
  this.en = a.get("request");
  this.pc = (0,z.t)(new z.nc, z.ph);
  this.Xn = 0;
};
var qj = function(a, b) {
  var c = a.Gf(b);
  if (null != c && !Array.isArray(c)) {
    throw Error("Malformed processed response");
  }
  return c;
};
var rj = function(a) {
  return a.qk && !a.pc.Xd;
};
z.sj = function(a) {
  if (!a.qk) {
    var b = (0,z.tc)((0,z.t)((0,z.r)(a.en.send(a.io, tj(a, a.qs), a.qs, {ma:!0, background:!0}), a.tK, a), a.CB, a), a.YB, a);
    a.pc = a.wi(b);
    a.qk = !0;
  }
  return uj(a, a.pc);
};
var vj = function(a, b, c) {
  if (!a.Vh) {
    return uj(a, a.pc);
  }
  a.Xn = Math.max(a.Xn, b + a.count());
  rj(a) ? (0,z.tc)(a.pc, a.yx, a) : a.yx(!!c);
  return uj(a, a.pc);
};
var uj = function(a, b) {
  return(0,z.r)(b.Ad(), function() {
    return this;
  }, a);
};
z.wj = function(a, b) {
  pj.call(this, a);
  this.Ic = b;
  this.qs = null;
  this.zx = xj;
};
var xj = function(a) {
  return{count:a, ignore:(0,z.Bb)(this.Ia, function(a) {
    return a.get("id");
  })};
};
var tj = function(a, b) {
  var c = a.Ic;
  if ("GET" == a.io && b) {
    var c = c + (-1 == c.indexOf("?") ? "?" : "\x26"), d = ae(b);
    if ("undefined" == typeof d) {
      throw Error("Keys are undefined");
    }
    for (var e = new Qi(null, 0, void 0), f = $d(b), h = 0;h < d.length;h++) {
      var k = d[h], l = f[h];
      (0,z.ha)(l) ? dj(e, k, l) : e.add(k, l);
    }
    c += e;
  }
  return c;
};
z.yj = function(a, b) {
  var c = a.name;
  zj(["_trackEvent", "Event", c]);
  Aj(["record", c, (0,z.mb)(b)]);
  Bj(a, b);
};
var Cj = function(a, b) {
  Dj[a] = b;
};
var Bj = function(a, b) {
  var c = a.name, d;
  for (d in Dj) {
    var e = Dj[d];
    b[d] = "function" == typeof e ? e() : e;
  }
  Ej({type:"e", key:c, data:b});
};
z.Fj = function(a) {
  Ej({type:"i", key:"string" === typeof a ? a : a.name});
};
z.Gj = function(a, b) {
  b = Math.max(0, b);
  3E4 < b || Ej({type:"t", key:a, value:b});
};
var Ej = function(a) {
  a.timestamp = Date.now();
  a.eventId = Date.now().toString(36) + Math.round(1E16 * Math.random()).toString(36);
  mh(Hj, a);
};
var Ij = function(a) {
  Hj = a;
};
var zj = function(a) {
  (0,z.G)("variants.dont_track_user") || window._gaq && window._gaq.push(a);
};
var Aj = function(a) {
  if (!(0,z.G)("variants.dont_track_user") && window._kmq) {
    var b = Dj.userId;
    if (!(0,z.G)("variants.dont_track_user")) {
      var c = window.KM, d = window._kmq;
      c && d && (d = c.i(), b && d && d !== b && c.alias(d, b));
    }
    window._kmq.push(a);
  }
};
z.Jj = function(a, b, c) {
  var d;
  a: {
    switch(a) {
      case 1:
        d = "page-type";
        break a;
      case 2:
        d = "user";
        break a;
    }
    d = "unknown";
  }
  zj(["_setCustomVar", a, d, b, c || 3]);
};
var Kj = function(a) {
  this.da = a;
  this.jd = a.get("request");
  this.Hj = {};
  this.Of = {};
  this.wb = {};
  this.Fr = {};
  this.Or = null;
};
z.Lj = function(a, b) {
  if (!Mj(b)) {
    var c = Error("An unpopulated object was sent in to upsertPostMeta");
    oh(c, "post", b);
    (0,z.ph)(c);
  }
  c = b.id;
  if (!c) {
    throw Error("Upserted data without id");
  }
  var d = a.Hj[c];
  d ? d.Yi(b) : (d = new z.fj(b), a.Hj[c] = d);
  return d;
};
var Nj = function(a, b, c) {
  if (a.Fr[b]) {
    throw Error("Collection list already exists with id\x3d" + b);
  }
  c = new Oj(a.da, c);
  c.Gf = Pj;
  return a.Fr[b] = c;
};
z.Qj = function(a, b, c, d) {
  if (a.wb[b]) {
    throw Error("Post list already exists with id\x3d" + b);
  }
  c = new Rj(a.da, c);
  c.io = d.toUpperCase();
  c.Xq("id", b);
  c.Gf = Pj;
  return a.wb[b] = c;
};
var Sj = function(a, b, c) {
  c = c || "recommended";
  var d = b + ":" + c + ":" + (0,z.Tj)();
  a = (0,z.Qj)(a, d, "/" + b + "/load-more?sortBy\x3d" + c, "POST");
  a.Xq("preferredCollection", b);
  return a;
};
z.Uj = function(a, b) {
  if (!Mj(b)) {
    var c = Error("An unpopulated object was sent in to upsertCollectionMeta");
    oh(c, "collection", b);
    (0,z.ph)(c);
  }
  var c = b.slug, d = a.Of[c];
  d ? d.Yi(b) : (d = new z.fj(b), a.Of[c] = d);
  return d;
};
z.Tj = function() {
  var a = Math.round(1E3 * Math.random());
  return(0,z.hh)() - Vj + "." + a;
};
var Pj = function(a) {
  var b = a;
  a.value && (b = (0,z.Wj)(a.value, a.references));
  if (Array.isArray(b) || null == b) {
    return b;
  }
  (0,z.K)("Malformed server response " + JSON.stringify(b));
  return null;
};
var Rj = function(a, b) {
  z.wj.call(this, a, b);
  this.Z = a.get("datastore");
};
var Oj = function(a, b) {
  z.wj.call(this, a, b);
  this.Z = a.get("datastore");
};
z.Xj = function() {
  Hf.call(this);
};
z.Yj = function(a) {
  return a.w("paragraphs");
};
z.Zj = function(a, b) {
  return(0,z.E)(a, "paragraphs", b);
};
z.ak = function(a) {
  return a.w("sections");
};
z.bk = function(a, b) {
  return(0,z.E)(a, "sections", b);
};
var ck = function() {
  Hf.call(this);
};
z.dk = function() {
  Hf.call(this);
};
z.ek = function() {
  Hf.call(this);
};
z.fk = function() {
  Hf.call(this);
};
z.gk = function(a) {
  return a.w("start");
};
z.hk = function(a) {
  return a.w("end");
};
z.ik = function() {
  Hf.call(this);
};
z.jk = function(a) {
  return a.w("backgroundImage");
};
z.kk = function(a, b) {
  return(0,z.E)(a, "backgroundImage", b);
};
z.lk = function(a, b) {
  return(0,z.E)(a, "textLayout", b);
};
z.mk = function(a) {
  return a.w("imageLayout");
};
z.nk = function(a, b) {
  return(0,z.E)(a, "imageLayout", b);
};
z.ok = function() {
  Hf.call(this);
};
var pk = function() {
  Hf.call(this);
};
var qk = function() {
  Hf.call(this);
};
var rk = function() {
  Hf.call(this);
};
var sk = function() {
  Hf.call(this);
};
var tk = function() {
  Hf.call(this);
};
var uk = function() {
  Hf.call(this);
};
var vk = function() {
  Hf.call(this);
};
var wk = function() {
  Hf.call(this);
};
var xk = function() {
  Hf.call(this);
};
var yk = function() {
  Hf.call(this);
};
z.zk = function() {
  Hf.call(this);
};
var Ak = function() {
  Hf.call(this);
};
var Bk = function() {
  Hf.call(this);
};
var Ck = function(a) {
  this.delta = a;
  this.Kj = this.selection = this.ri = null;
  this.jB = !1;
};
var Dk = function(a, b, c) {
  z.Ek[a] = b;
  Fk[a] = c;
};
z.Gk = function(a) {
  return(new z.Ek[a]).Zb(a);
};
z.Hk = function(a) {
  return new (Fk[a.g()])(a);
};
var Ik = function(a) {
  var b = a.nq();
  if (b) {
    return b;
  }
  b = new z.Xj;
  a.kn(b);
  return b;
};
var Jk = function(a) {
  a = Ik(a);
  var b = (0,z.Yj)(a);
  if (b) {
    return b;
  }
  b = [];
  (0,z.Zj)(a, b);
  return b;
};
var Kk = function(a) {
  a = Ik(a);
  var b = (0,z.ak)(a);
  if (b) {
    return b;
  }
  b = [];
  (0,z.bk)(a, b);
  return b;
};
z.Lk = function(a, b) {
  var c = a.se(b);
  a.Kj || (a.Kj = c);
};
var Mk = function(a) {
  return this.delta.g() == a.delta.g() ? Nk(this, a) : null;
};
var Ok = function(a) {
  return this.delta.g() == a.delta.g() && this.delta.uc() == a.delta.uc() ? Nk(this, a) : null;
};
var Nk = function(a, b) {
  var c = (0,z.Hk)(z.Pk.ia(b.delta));
  c.Kj = a.Kj && z.Pk.ia(a.Kj);
  c.selection = b.selection;
  return c;
};
var Qk = function() {
  throw Error("Playback of this revision invalid");
};
z.Rk = function() {
  Hf.call(this);
};
z.Sk = function() {
  Hf.call(this);
};
z.Tk = function(a, b) {
  this.HH = z.Pk.ia(a);
  this.bc = [];
  this.Cl = b ? a : z.Pk.ia(a);
  this.Ct = [];
  this.Sh = null;
  this.Qs = -1;
};
z.Uk = function(a) {
  return a.Cl.nq();
};
z.Vk = function(a, b) {
  var c = (0,z.Hk)(z.Pk.ia(b)), d = (0,z.Ua)(a.bc);
  d && !d.selection && (d = d.og(c)) && (a.bc.pop(), c = d);
  (0,z.Lk)(c, a.Cl);
  c.ri = (0,z.hh)();
  a.bc.push(c);
  a.Ct.length = 0;
  a.Sh && a.Sh.call(null, z.Pk.ia(c.delta));
};
var Wk = function(a) {
  if (!a.length) {
    return!0;
  }
  for (var b = -1, c = 0;c < a.length;c++) {
    if (a[c]) {
      if (a[c].ua() <= b) {
        return!1;
      }
      b = a[c].ua();
    }
  }
  return!0;
};
z.Xk = function(a, b) {
  for (var c = -1, d = 0;d < a.length;d++) {
    if (b >= a[d].ua()) {
      c = d;
    } else {
      break;
    }
  }
  return c;
};
z.Yk = function(a, b) {
  var c = (0,z.Xk)(a, b);
  return-1 == c ? null : a[c];
};
z.Zk = function(a, b, c) {
  var d = a[b].ua();
  return b + 1 >= a.length ? c - d : a[b + 1].ua() - d;
};
var $k = function(a) {
  Ck.call(this, a);
};
var al = function(a) {
  Ck.call(this, a);
};
var bl = function(a) {
  Ck.call(this, a);
};
var cl = function(a) {
  Ck.call(this, a);
};
var dl = function(a) {
  Ck.call(this, a);
};
var el = function(a) {
  Ck.call(this, a);
};
var fl = function(a) {
  Ck.call(this, a);
};
var gl = function(a) {
  Ck.call(this, a);
};
var hl = function(a) {
  Ck.call(this, a);
};
var il = function(a) {
  Ck.call(this, a);
};
var jl = function(a) {
  Ck.call(this, a);
};
var kl = function(a) {
  Ck.call(this, a);
};
var ll = function(a, b, c) {
  b.g();
  var d = a.w(c);
  (0,z.E)(a, c, b.Nc());
  return(0,z.Gk)(b.g()).Ih(d);
};
z.ml = function(a) {
  if (!a.content) {
    throw Error("No body available for post " + a.postId);
  }
  return a.content.bodyModel ? z.Pk.zb(z.Xj, a.content.bodyModel) : null;
};
z.nl = function(a) {
  return(new z.ok).kn(a);
};
z.ol = function(a, b) {
  var c = (0,z.Uk)(a), d = (0,z.ak)(c) || [];
  d.length || (d = (new z.ik).Fe(0), b && (0,z.pl)(d, b), (0,z.Vk)(a, (0,z.Gk)(8).sb(0).wg(d)), d = (0,z.ak)(c));
  0 != d[0].ua() && ((0,z.Vk)(a, (0,z.Gk)(10).sb(0).wg(d[0].ia().Fe(0))), d = (0,z.ak)(c));
  for (var e = 1;e < d.length;e++) {
    var f = d[e - 1];
    d[e].ua() == f.ua() && ((0,z.Vk)(a, (0,z.Gk)(9).sb(e)), d = (0,z.ak)(c), e--);
  }
};
z.pl = function(a, b) {
  a.getName() ? b[a.getName()] = !0 : a.Yb((0,z.ql)(b));
};
z.ql = function(a) {
  var b;
  do {
    b = Math.round(65535 * Math.random()).toString(16), b = Array(4 - b.length + 1).join("0") + b;
  } while (a[b]);
  a[b] = !0;
  return b;
};
z.rl = function(a, b, c) {
  this.name = a || "";
  this.type = b;
  this.text = c;
  this.hasDropCap = !1;
  this.tb = [];
};
z.sl = function(a) {
  var b = null, b = 4 == a.g() ? new z.tl(a.getName(), a.Nc(), a.w("layout"), a.getMetadata()) : 11 == a.g() ? new ul(a.getName(), a.Nc(), a.w("iframe"), a.w("layout")) : new z.rl(a.getName(), a.g(), a.Nc());
  b.hasDropCap = a.w("hasDropCap");
  if (a = a.w("markups")) {
    for (var c = 0;c < a.length;c++) {
      (0,z.vl)(b, a[c]);
    }
  }
  return b;
};
z.wl = function(a, b) {
  a.tb = (0,z.fd)(a.tb, function(a) {
    return a.g() != b;
  });
};
z.xl = function(a, b) {
  for (var c = 0;c < a.tb.length;c++) {
    var d = a.tb[c];
    3 == d.g() && b(d);
  }
};
z.vl = function(a, b) {
  for (var c = a.tb, d = 0;d < c.length;d++) {
    var e = c[d], f, h = e;
    f = b;
    if (h.g() != f.g()) {
      f = null;
    } else {
      if (h.Fb(f)) {
        f = h;
      } else {
        if (3 == h.g()) {
          var k = h.zf() == f.zf() && h.Hb() == f.Hb() && h.w("rel") == f.w("rel");
          f = (0,z.yl)(h, (0,z.gk)(f), k) || (0,z.yl)(h, k ? (0,z.hk)(f) : (0,z.hk)(f) - 1, k) || (0,z.yl)(f, (0,z.gk)(h), k) ? k ? (0,z.zl)(Math.min((0,z.gk)(h), (0,z.gk)(f)), Math.max((0,z.hk)(h), (0,z.hk)(f)), h.zf(), h.Hb(), h.w("rel")) : f : null;
        } else {
          f = 4 == h.g() ? h.getName() == f.getName() ? (0,z.Al)(Math.min((0,z.gk)(h), (0,z.gk)(f)), Math.max((0,z.hk)(h), (0,z.hk)(f)), h.getName()) : null : (0,z.yl)(h, (0,z.gk)(f), !0) || (0,z.yl)(h, (0,z.hk)(f), !0) || (0,z.yl)(f, (0,z.gk)(h), !0) ? (0,z.Bl)(h.g(), Math.min((0,z.gk)(h), (0,z.gk)(f)), Math.max((0,z.hk)(h), (0,z.hk)(f))) : null;
        }
      }
    }
    if (f) {
      if (f == e || f.Fb(e)) {
        return!1;
      }
      z.$a.splice.call(c, d, 1);
      b = f;
      d = -1;
    }
  }
  var c = a.tb, d = b, l, e = Cl || z.gb;
  f = 0;
  for (h = c.length;f < h;) {
    var k = f + h >> 1, m;
    m = e(d, c[k]);
    0 < m ? f = k + 1 : (h = k, l = !m);
  }
  l = l ? f : ~f;
  0 > l && db(c, -(l + 1), 0, d);
  return!0;
};
z.Dl = function(a, b, c) {
  b = Math.min(b, a.text.length);
  c = Math.min(c, a.text.length);
  var d = c - b;
  a.text = a.text.substring(0, b) + a.text.substring(c);
  c = a.tb;
  for (var e = 0;e < c.length;e++) {
    var f = c[e];
    (0,z.gk)(f) >= b && f.setStart(Math.max((0,z.gk)(f) - d, b));
    (0,z.hk)(f) >= b && f.setEnd(Math.max((0,z.hk)(f) - d, b));
  }
  (0,z.Ql)(a);
};
z.Ql = function(a) {
  a.tb = (0,z.fd)(a.tb, function(a) {
    return(0,z.hk)(a) > (0,z.gk)(a);
  });
};
var Rl = function(a) {
  var b = {0:!0};
  b[a.text.length] = !0;
  a = a.tb;
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    b[(0,z.gk)(d)] = !0;
    b[(0,z.hk)(d)] = !0;
  }
  b = kb(b);
  b = (0,z.Bb)(b, Number);
  z.$a.sort.call(b, z.gb);
  return b;
};
var Sl = function(a, b) {
  for (var c = a.tb, d = [], e = 0;e < b.length;e++) {
    var f = b[e], h = [];
    d.push(h);
    for (var k = 0;k < c.length;k++) {
      var l = c[k];
      (0,z.yl)(l, f, !1) && h.push(l);
    }
  }
  return d;
};
z.tl = function(a, b, c, d) {
  z.rl.call(this, a, 4, b);
  this.layout = c;
  this.metadata = d || new z.dk;
};
var ul = function(a, b, c, d) {
  z.rl.call(this, a, 11, b);
  this.layout = d;
  this.metadata = c;
};
z.Bl = function(a, b, c) {
  return(new z.fk).Zb(a).setStart(b).setEnd(c);
};
z.yl = function(a, b, c) {
  return b >= (0,z.gk)(a) && (c ? b <= (0,z.hk)(a) : b < (0,z.hk)(a));
};
var Cl = function(a, b) {
  var c = Tl[a.g()] - Tl[b.g()];
  if (0 !== c) {
    return c;
  }
  c = (0,z.gk)(a) - (0,z.gk)(b);
  if (0 !== c) {
    return c;
  }
  c = (0,z.hk)(a) - (0,z.hk)(b);
  return 0 !== c ? c : (0,z.gb)(JSON.stringify(z.Pk.Mc(a)), JSON.stringify(z.Pk.Mc(b)));
};
z.zl = function(a, b, c, d, e) {
  a = (0,z.Bl)(3, a, b).nn(c).bd(d);
  return(0,z.E)(a, "rel", e);
};
z.Al = function(a, b, c) {
  return(0,z.Bl)(4, a, b).Yb(c);
};
z.Ul = function() {
  this.he = {};
};
var Vl = function(a, b) {
  var c = new z.Wl(a);
  c.wh = !1;
  b ? a.he[b] = c : a.Ou = c;
};
z.Xl = function(a) {
  var b = new z.Wl(a);
  b.de = !1;
  b.wh = !0;
  a.Ou = b;
};
z.Yl = function(a, b, c, d) {
  var e = new z.Wl(a);
  e.de = !0;
  c && ((0,z.ha)(c) ? e.attributes = (0,z.vb)(c) : e.attributes = c);
  if (d) {
    for (e.de = b, c = 0;c < d.length;c++) {
      a.he[d[c].toUpperCase()] = e;
    }
  }
  return a.he[b] = e;
};
z.Wl = function(a) {
  this.attributes = {};
  this.Yc = a;
  this.de = !1;
  this.wh = !0;
};
var Zl = function() {
  var a = new z.Ul;
  Vl(a, "SCRIPT");
  Vl(a, "STYLE");
  Vl(a, "HEAD");
  (0,z.Xl)(a);
  return a;
};
var $l = function() {
  var a = Zl();
  (0,z.Yl)(a, "P", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}, ["DIV"]).Yc = am;
  (0,z.Yl)(a, "FIGURE", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}).Yc = bm;
  (0,z.Yl)(a, "UL").Yc = cm;
  (0,z.Yl)(a, "OL").Yc = cm;
  (0,z.Yl)(a, "HR", ["name"]).Yc = dm;
  (0,z.Yl)(a, "H2", ["name"]).Yc = em;
  (0,z.Yl)(a, "H3", ["name"]).Yc = em;
  (0,z.Yl)(a, "BLOCKQUOTE", {name:!0, "class":["pullquote"]}).Yc = em;
  (0,z.Yl)(a, "PRE", ["name"]).Yc = em;
  return a;
};
z.fm = function(a, b) {
  var c;
  try {
    c = new Li(a);
  } catch (d) {
    return window.console.warn("Malformed URI: ", a, d.stack), "";
  }
  if ("javascript" == c.Xi) {
    return window.console.warn("Attempted to pass JavaScript URI"), "";
  }
  var e = gm(c), f = e && "/r/" == c.Cm();
  return!b && f ? String(c.Eh.get("url")) : !b || e || f ? a : "/r/?url\x3d" + (0,window.encodeURIComponent)(a);
};
var gm = function(a) {
  "string" == typeof a && (a = new Li(a));
  a = a.hk();
  return!a || hm[a] || "localhost" == a;
};
z.im = function(a) {
  return 2 == a ? Math.round(350) : 4 == a ? Math.round(525) : 3 == a ? 900 : 700;
};
var jm = function(a, b) {
  if (!(0,z.za)(b, a)) {
    return "";
  }
  var c = /\/([^\/]*)$/.exec(b);
  return c && (0,window.decodeURIComponent)(c[1]) || "";
};
z.km = function() {
  return'\x3cdiv class\x3d"section-inner layout-single-column"\x3e';
};
var lm = function(a, b) {
  var c = '\x3cdiv class\x3d"section-background' + (a.hasFocus ? " media-has-focus" : "") + '"' + ("section-image-full" == a.imageLayout ? ' data-scroll\x3d"post-section"' : "") + 'data-image-id\x3d"' + (0,z.P)(a.backgroundImage.id) + '"', d;
  d = a.backgroundImage;
  d = (d.originalWidth ? ' data-width\x3d"' + (0,z.P)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.P)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.P)(d.filter) + '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.P)(d.backgroundSize) + '"' : "");
  c = c + d + "\x3e";
  c = "section-image-full" == a.imageLayout ? c + ('\x3cdiv class\x3d"section-background-image" style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(b.miroUrl)) + "/max/" + (0,z.P)("700".replace(li, mi)) + "/gradv/29/81/40/" + (0,z.P)(String(a.backgroundImage.id).replace(li, mi)) + ');"\x3e\x3c/div\x3e\x3cbr\x3e') : "section-image-left" == a.imageLayout || "section-image-right" == a.imageLayout ? c + ('\x3cimg src\x3d"' + (0,z.P)((0,z.Q)(b.miroUrl)) + "/max/" + (0,z.P)(b.postColumnWidth) + "/multiply/grey/" + 
  (0,z.P)(a.backgroundImage.id) + '"\x3e') : c + "\x3cbr\x3e";
  return c + "\x3c/div\x3e";
};
var mm = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    (0,z.xl)(a[c], function(a) {
      a.zf() && a.nn((0,z.fm)(a.zf(), b));
    });
  }
};
z.nm = function(a, b, c) {
  var d = z.Yf;
  return b ? (0,z.om)(b, d, {Ve:!0, isPublished:a.isPublished, media:a.media, sections:!0, Fv:c}) : "";
};
z.om = function(a, b, c) {
  for (var d = c.isPublished, e = (0,z.Yj)(a) || [], f = [], h = 0;h < e.length;h++) {
    f[h] = (0,z.sl)(e[h]);
    var k = f[h];
    (0,z.wl)(k, 4);
    (0,z.wl)(k, 5);
  }
  mm(f, !d);
  a = (0,z.ak)(a);
  a = (0,z.nl)((0,z.bk)(new z.Xj, a));
  a = new z.Tk(a, !1);
  (0,z.ol)(a, null);
  a = (0,z.ak)((0,z.Uk)(a));
  d = [];
  for (e = 0;e < a.length;e++) {
    d.push(pm(e, f, a, b, c));
  }
  return d.join("");
};
var pm = function(a, b, c, d, e) {
  var f = c[a], h = b.length;
  a = c[a].ua() + (0,z.Zk)(c, a, h);
  if (f.ua() >= a) {
    return "";
  }
  c = [];
  e.sections && c.push((0,z.qm)(f, d));
  for (var h = null, k = f.ua();k < a;k++) {
    var l = b[k], m = 10 == l.type ? "ol" : 9 == l.type ? "ul" : null;
    m != h && (h && c.push("\x3c/", h, "\x3e"), m && c.push("\x3c", m, ' class\x3d"post-list"\x3e'));
    h = m;
    c.push(rm(l, d, e));
  }
  h && c.push("\x3c/", h, "\x3e");
  e.sections && c.push((0,z.sm)(f, d));
  return c.join("");
};
var rm = function(a, b, c) {
  return(0,z.tm)(a, !0, c) + (0,z.um)(a, b, c) + (0,z.vm)(a, !0);
};
z.um = function(a, b, c) {
  var d = c.Ve, e = Rl(a), f = Sl(a, e), h = 4 == a.type, k = 11 == a.type, l = "";
  if (h) {
    if (l = wm(a, b, c) + xm(a, d), d && (0,z.Ca)(a.text)) {
      return l;
    }
  } else {
    if (k && (l = ym(a, b) + xm(a, d), d && (0,z.Ca)(a.text))) {
      return l;
    }
  }
  b = a.text.replace(/ — /g, " — ");
  for (var m = [], q = 0;q < e.length;q++) {
    for (var s = 0 === q, I = q == e.length - 2, F = e[q], aa = f[q], wb = 0;wb < aa.length;wb++) {
      var uc = aa[wb];
      if (m[wb] != uc) {
        for (;m.length > wb;) {
          l += zm(m.pop());
        }
        var xb = Am(uc, a, c);
        xb && (l += xb, m.push(uc));
      }
    }
    for (;m.length > wb;) {
      l += zm(m.pop());
    }
    aa = b.substring(F, e[q + 1] || b.length);
    a.hasDropCap && aa && 0 === F && (l += Bm(aa[0], d), aa = aa.slice(1));
    var Kh = aa.split("\n"), l = l + (0,z.Bb)(Kh, function(b, c) {
      var d = (0,z.Ea)(b);
      8 != a.type && (Cm(d.charAt(0)) && (s || 0 !== c) && (d = " " + d.substring(1)), Cm(d.charAt(d.length - 1)) && (I || c != Kh.length - 1) && (d = d.substring(0, d.length - 1) + " "));
      return d;
    }).join("\x3cbr\x3e"), F = I && 1 < Kh.length && "" === (0,z.Ua)(Kh), aa = !b;
    5 != a.type && (F || aa) && (l += "\x3cbr\x3e");
  }
  if (h || k) {
    l += "\x3c/figcaption\x3e";
  }
  return l;
};
var Cm = function(a) {
  return " " === a || " " === a;
};
var wm = function(a, b, c) {
  var d = a.metadata, e = a.layout;
  a = Dm(b, d && d.originalWidth || 0, d && d.originalHeight || 0, a);
  b = d && d.id && (0,z.Em)(b, e, d.id);
  d = d ? z.Pk.Mc(d) : {};
  c = !c.Ve;
  return "\x3cimg" + ((d.originalWidth ? ' data-width\x3d"' + (0,z.P)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.P)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.P)(d.filter) + '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.P)(d.backgroundSize) + '"' : "") + (a.width && a.height ? ' width\x3d"' + (0,z.P)(a.width) + '" height\x3d"' + (0,z.P)(a.height) + '"' : "") + (!c && d.originalWidth > a.width ? ' data-action\x3d"zoom" data-action-value\x3d"' + 
  (0,z.P)(d.id) + '"' : "")) + (b ? ' src\x3d"' + (0,z.P)((0,z.Q)(b)) + '"' : "") + "\x3e";
};
z.Em = function(a, b, c) {
  b = (0,z.im)(b);
  a.variants.use_retina_images && (b *= a.devicePixelRatio);
  b = Wf(b || 1200, bg, 200, !0);
  return a.miroUrl + "/max/" + b + "/" + c;
};
var xm = function(a, b) {
  return b && (0,z.Ca)(a.text) ? "" : '\x3cfigcaption class\x3d"image-caption"\x3e';
};
var ym = function(a, b) {
  var c = a.metadata;
  if (!c || !c.qq()) {
    return "";
  }
  var d = c.cv() || Fm.width, e = c.KA() || Fm.height, d = Dm(b, d, e, a), c = z.Pk.Mc(c);
  return "\x3c" + ui() + (c.iframeWidth ? ' data-width\x3d"' + (0,z.P)(c.iframeWidth) + '"' : "") + (c.iframeHeight ? ' data-height\x3d"' + (0,z.P)(c.iframeHeight) + '"' : "") + (d.width && d.height ? ' width\x3d"' + (0,z.P)(d.width) + '" height\x3d"' + (0,z.P)(d.height) + '"' : "") + ' src\x3d"/media/' + (0,z.P)(c.mediaResourceId) + "?maxWidth\x3d" + ji(d.width) + '" data-media-id\x3d"' + (0,z.P)(c.mediaResourceId) + '" frameborder\x3d"0"\x3e\x3c/' + ui() + "\x3e";
};
var Bm = function(a, b) {
  return b ? '\x3cspan class\x3d"drop-cap"\x3e' + (0,z.Ea)(a) + "\x3c/span\x3e" : '\x3cspan class\x3d"drop-cap drop-cap-editable"\x3e\x3cbr\x3e\x3c/span\x3e\x3cspan class\x3d"drop-cap" contenteditable\x3d"false"\x3e' + (0,z.Ea)(a) + "\x3c/span\x3e";
};
var Dm = function(a, b, c, d) {
  var e = (0,z.im)(d.layout);
  11 === d.type && a.isAuthenticated && Number(a.deviceWidth) && (e = Math.min(e, Number(a.deviceWidth) - 65), e = Wf(e, Gm, 100, !1));
  b = new hd(b, c);
  return b.width > e ? new hd(e, Math.round(e * b.height / b.width)) : b;
};
var Hm = function(a) {
  var b = a.contentWindow || (0,z.rd)(a.contentDocument || a.contentWindow.document);
  if (b && b.document && b.document.body && "about:blank" !== b.location.toString()) {
    a = a.style;
    var c = (0,z.id)(b).pd(), b = c.document, d = 0;
    if (b) {
      var c = (0,z.pd)(c).height, d = b.body, e = b.documentElement;
      if ((0,z.qd)(b) && e.scrollHeight) {
        d = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight;
      } else {
        var b = e.scrollHeight, f = e.offsetHeight;
        e.clientHeight != f && (b = d.scrollHeight, f = d.offsetHeight);
        d = b > c ? b > f ? b : f : b < f ? b : f;
      }
    }
    a.height = d + "px";
  }
};
var Im = function(a) {
  if (2 == a) {
    return "image-inset-left";
  }
  if (1 == a) {
    return "";
  }
  if (4 == a) {
    return "image-outset-left";
  }
  if (3 == a) {
    return "image-outset-center";
  }
  throw Error("unknown layout " + a);
};
z.Jm = function(a) {
  a = a.match(/\S+/g) || [];
  for (var b in z.Km) {
    var c = z.Km[b], d = Im(c);
    if (d && (0,z.Xa)(a, d)) {
      return c;
    }
  }
  return 1;
};
z.tm = function(a, b, c) {
  var d = a.type, e = "";
  a.name && (e += ' name\x3d"' + (0,z.Ea)(a.name) + '"');
  a.hasDropCap && (e += " data-has-drop-cap");
  if (5 == d) {
    return "\x3chr" + e + "\x3e";
  }
  if (4 == d || 11 == d) {
    return b = a.layout && Im(a.layout), "\x3cfigure" + (c.Ve ? "" : ' tabindex\x3d"0"') + e + (b ? ' class\x3d"' + b + '"' : "") + "\x3e";
  }
  if (7 == d) {
    return'\x3cblockquote class\x3d"pullquote"' + e + "\x3e";
  }
  a = c = "";
  9 == d ? (c = "li", b || (a = '\x3cul class\x3d"post-list"\x3e')) : 10 == d ? (c = "li", b || (a = '\x3col class\x3d"post-list"\x3e')) : c = 6 == d ? "blockquote" : 10 == d ? "li" : 12 == d ? "h1" : 2 == d ? "h2" : 3 == d ? "h3" : 1 == d ? "p" : 8 == d ? "pre" : "p";
  return a + "\x3c" + c + e + "\x3e";
};
z.vm = function(a, b) {
  var c = a.type;
  return 5 == c ? "" : 4 == c || 11 == c ? "\x3c/figure\x3e" : 6 == c || 7 == c ? "\x3c/blockquote\x3e" : 9 == c ? "\x3c/li\x3e" + (b ? "" : "\x3c/ul\x3e") : 10 == c ? "\x3c/li\x3e" + (b ? "" : "\x3c/ol\x3e") : 12 == c ? "\x3c/h1\x3e" : 2 == c ? "\x3c/h2\x3e" : 3 == c ? "\x3c/h3\x3e" : 1 == c ? "\x3c/p\x3e" : 8 == c ? "\x3c/pre\x3e" : "\x3c/p\x3e";
};
z.qm = function(a, b) {
  var c = Lm(a), d = c.backgroundImage && c.backgroundImage.id;
  return c = "" + ("\x3csection" + (c.name ? ' name\x3d"' + (0,z.P)(c.name) + '"' : "") + (c.textLayout || c.imageLayout || c.Hd ? ' class\x3d"' + (c.Hd ? "active-section" : "") + (c.textLayout ? " " + (0,z.P)(c.textLayout) : "") + (c.imageLayout ? " " + (0,z.P)(c.imageLayout) : "") + '"' : "") + "\x3e" + (d && "section-image-right" != c.imageLayout ? lm(c, b) : "") + (d || c.jR ? "" : '\x3cdiv class\x3d"section-divider layout-single-column"\x3e\x3chr class\x3d"section-divider"\x3e\x3c/div\x3e') + 
  (0,z.km)());
};
z.sm = function(a, b) {
  var c = Lm(a);
  return "\x3c/div\x3e" + (c.backgroundImage && c.backgroundImage.id && "section-image-right" == c.imageLayout ? lm(c, b) : "") + "\x3c/section\x3e";
};
var Lm = function(a) {
  return{name:a.getName(), textLayout:Mm[a.w("textLayout")], imageLayout:Nm[(0,z.mk)(a)], backgroundImage:(0,z.jk)(a) && z.Pk.Mc((0,z.jk)(a))};
};
var Am = function(a, b, c) {
  var d = a.g();
  if (1 == d) {
    return "\x3cstrong\x3e";
  }
  if (2 == d) {
    return "\x3cem\x3e";
  }
  if (4 == d) {
    return'\x3cspan class\x3d"notes-highlight" ' + (a.getName() ? ' name\x3d"' + (0,z.Ea)(a.getName()) + '"' : "") + "\x3e";
  }
  if (5 == d) {
    return'\x3cspan class\x3d"warning"\x3e';
  }
  if (3 == d) {
    var d = a.zf(), e;
    try {
      e = "#zSoyz" !== oi(d);
    } catch (f) {
      e = !1;
    }
    if (!e) {
      return "";
    }
    e = {};
    var h = (0,z.Da)(a.w("rel"));
    h && (e[h] = !0);
    c.Fv && (gm(d) || (e.nofollow = !0));
    var h = a.Hb(), k = Object.keys(e).join(" "), l = gm(d);
    a = !e.token && !c.Ve && d && d != b.text.substring((0,z.gk)(a), (0,z.hk)(a));
    return "\x3ca" + (l ? "" : ' target\x3d"_blank"') + ' href\x3d"' + (0,z.P)((0,z.Q)(d)) + '"' + (h ? ' title\x3d"' + (0,z.P)(h) + '"' : "") + (k ? ' rel\x3d"' + (0,z.P)(k) + '"' : "") + (a ? ' data-tooltip\x3d"' + (0,z.P)(d) + '" data-tooltip-position\x3d"bottom" data-tooltip-type\x3d"link"' : "") + "\x3e";
  }
  throw Error("unknown type " + d);
};
var zm = function(a) {
  a = a.g();
  if (1 == a) {
    return "\x3c/strong\x3e";
  }
  if (2 == a) {
    return "\x3c/em\x3e";
  }
  if (3 == a) {
    return "\x3c/a\x3e";
  }
  if (4 == a || 5 == a) {
    return "\x3c/span\x3e";
  }
  throw Error("unknown type " + a);
};
z.Om = function(a, b, c) {
  function d() {
    var d = arguments, h = c || this;
    (0,window.clearTimeout)(e);
    e = (0,window.setTimeout)(function() {
      e = null;
      h instanceof z.B && h.wf || b.apply(h, d);
    }, a);
  }
  var e;
  d.cancel = function() {
    (0,window.clearTimeout)(e);
    e = null;
  };
  return d;
};
z.Pm = function(a, b, c) {
  var d = -window.Infinity;
  return function() {
    var e = c || this;
    if (!(e instanceof z.B && e.wf)) {
      var f = (0,z.hh)();
      f - d >= a && (b.apply(e, arguments), d = f);
    }
  };
};
z.Qm = function(a, b) {
  (0,window.setTimeout)(function() {
    a.call(b);
  }, 0);
};
var Rm = function(a) {
  var b = new z.nc;
  (0,window.setTimeout)(b.Ba.bind(b, !0), a);
  return b;
};
var Sm = function(a) {
  z.Sh.call(this);
  this.Rz = window.innerWidth;
  this.Qz = window.innerHeight;
  this.ba = a.get("app");
  this.Zl = this.Ka = null;
  this.ed = this.wo = !1;
  this.qx = (0,z.Om)(z.Tm, this.ez, this);
  this.Rr = (0,z.Om)(z.Tm, this.Pt, this);
  this.fI = (0,z.Pm)(z.Tm, this.gI, this);
  this.uH = (0,z.J)(window, "resize", this.Ly, this);
  window._onWebfontLoad = (0,z.wa)(this.So, this);
  window._onWebfontError = (0,z.wa)(this.TG, this);
  window._resizeIframe = (0,z.wa)(this.rE, this);
  this.ba.C(Um, this.fi, this);
};
var Vm = function(a) {
  var b = a.ba.ib;
  (b = b && (0,z.Wm)(b)) && a.Ka != b && (a.ed && (a.Rr.cancel(), a.Pt()), (0,z.dg)(a.hz), a.Ka = b, a.hz = (0,z.J)(b === window.document.body ? window : b, "scroll", a.xd, a));
};
var R = function(a) {
  this.name = a;
};
var Xm = function(a) {
  this.name = a;
};
var U = function(a, b) {
  this.name = a;
  this.$I = b;
};
var Ym = function(a, b) {
  for (var c = {}, d = 0;d < b.length;d++) {
    for (var e = b[d].$I, f = 0;f < e.length;f++) {
      c[e[f]] = !0;
    }
  }
  U.call(this, a, Object.keys(c));
};
var Zm = function(a) {
  z.Uh.call(this);
  this.ra = a.get("dom-monitor");
  this.Tc = a.get("screen");
  this.me = a.get("element-tracker");
  this.Yy = {};
};
var $m = function(a) {
  var b = a.me.yd.Fd();
  return bb(a.Tc.J.getElementsByClassName("post-item")).filter(function(a) {
    a = this.me.wa(a).Fd();
    return b.contains(a);
  }, a).map(function(a) {
    return a.getAttribute("data-post-id");
  }, a).filter(function(a) {
    return this.Yy[a] ? !1 : this.Yy[a] = !0;
  }, a);
};
z.an = function(a) {
  this.Ks = a;
  this.ni = {};
};
var bn = function(a) {
  z.an.call(this, a);
};
var cn = function(a) {
  this.ml = a;
  this.bl = !1;
};
z.dn = function() {
};
var en = function() {
};
z.fn = function(a, b, c) {
  this.title = a;
  this.image = null;
  this.description = b;
  this.type = c;
  this.name = this.username = this.Xv = this.Yv = this.author = null;
};
z.gn = function(a) {
  for (var b = window.document.getElementsByTagName("meta"), c = {}, d = {}, e = 0;e < b.length;e++) {
    c[b[e].getAttribute("property")] = b[e], d[b[e].getAttribute("name")] = b[e];
  }
  hn(c, "og:url", window.location.href, "property");
  a.title ? (window.document.title = a.title, hn(d, "title", a.title, "name"), hn(c, "og:title", a.title, "property")) : window.document.title = (0,z.G)("productName");
  a.image && hn(c, "og:image", a.image, "property");
  a.description && hn(c, "og:description", a.description, "property");
  hn(c, "og:type", a.type, "property");
  "article" == a.type && (a.author && hn(c, "article:author", a.author, "property"), a.Yv && hn(c, "article:publisher", a.Yv, "property"), a.Xv && hn(c, "article:published_time", a.Xv, "property"));
  "profile" == a.type && (a.username && hn(c, "profile:username", a.username, "property"), a.name && (b = a.name.split(" "), 1 == b.length ? hn(c, "profile:first_name", a.name, "property") : (d = b.slice(-1).join(" "), hn(c, "profile:first_name", b.slice(0, -1).join(" "), "property"), hn(c, "profile:last_name", d, "property"))));
  a = a.type;
  var f;
  if ("article" != a) {
    for (f in c) {
      f && "article" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
  if ("profile" != a) {
    for (f in c) {
      f && "profile" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
};
var hn = function(a, b, c, d) {
  a[b] ? a[b].content = c : (a = window.document.createElement("meta"), a.setAttribute(d, b), a.content = c, window.document.getElementsByTagName("head")[0].appendChild(a));
};
z.jn = function() {
  z.Uh.call(this);
  this.or = [];
};
var kn = function(a, b) {
  a.or.forEach(function(a) {
    try {
      b.call(this, a);
    } catch (d) {
      (0,z.K)(d);
    }
  });
};
var ln = function() {
  z.B.call(this);
};
var mn = function(a) {
  z.B.call(this);
  this.lo = a;
  this.ht = 1;
};
var nn = function(a, b) {
  a.ht = b;
  return a;
};
var on = function() {
  z.B.call(this);
  this.Cp = {};
};
var pn = function(a, b) {
  var c = (0,z.pa)(b);
  a.Cp[c] = b;
};
z.qn = function(a, b, c, d, e, f) {
  if (6 == arguments.length) {
    this.setTransform(a, b, c, d, e, f);
  } else {
    if (0 != arguments.length) {
      throw Error("Insufficient matrix parameters");
    }
    this.Vb = this.Wb = 1;
    this.hc = this.gc = this.Ib = this.cb = 0;
  }
};
z.rn = function(a, b) {
  var c = a.Vb, d = a.gc;
  a.Vb = b.Vb * c + b.hc * d;
  a.gc = b.gc * c + b.Wb * d;
  a.Ib += b.Ib * c + b.cb * d;
  c = a.hc;
  d = a.Wb;
  a.hc = b.Vb * c + b.hc * d;
  a.Wb = b.gc * c + b.Wb * d;
  a.cb += b.Ib * c + b.cb * d;
  return a;
};
var sn = function(a) {
  z.B.call(this);
  this.Nj = a;
};
var tn = function(a, b) {
  z.B.call(this);
  this.uf = a || 0;
  this.dd = b || 0;
  this.ys = !0;
  this.ld = new z.qn;
  this.hy = new ln;
};
var un = function(a, b) {
  a.ld.translate(b - a.ld.Ib, 0);
  return a;
};
var vn = function(a, b) {
  a.ld.translate(0, b - a.ld.cb);
  return a;
};
var wn = function(a, b) {
  vn(a, b.top);
  un(a, b.left);
  a.pn(b.width);
  a.mn(b.height);
  return a;
};
var xn = function(a, b) {
  a.hy = new sn(b);
  return a;
};
var yn = function(a, b, c, d, e, f) {
  z.nc.call(this, e, f);
  this.Bv = a;
  this.Pu = [];
  this.EA = !!b;
  this.jJ = !!c;
  this.SI = !!d;
  for (b = this.AB = 0;b < a.length;b++) {
    sc(a[b], (0,z.wa)(this.OA, this, b, !0), (0,z.wa)(this.OA, this, b, !1));
  }
  0 != a.length || this.EA || this.Ba(this.Pu);
};
var zn = function(a, b, c) {
  z.B.call(this);
  this.bB = a.get("image");
  this.hh = b;
  this.vm = c;
  this.Vy = 0;
};
var An = function(a, b, c, d, e) {
  d -= a.Ye();
  b = a.ld.cb - b;
  c *= d - b;
  e && (0,z.lf)(e, "transform", "translate3d(0, " + c + "px, 0)");
  vn(a, b + c);
  return c;
};
var Bn = function(a, b, c) {
  zn.call(this, a, b, c);
};
var Cn = function(a, b, c) {
  zn.call(this, a, b, c);
};
var Dn = function(a, b, c, d) {
  zn.call(this, a, b, c);
  this.xl = d;
  this.Vf = this.wr = this.Dr = this.mo = this.ps = null;
  this.lt = 0;
};
var En = function(a) {
  z.Uh.call(this);
  this.da = a;
  this.ra = a.get("dom-monitor");
  this.Tc = a.get("screen");
  this.Tc.wa(this);
  this.Wl = null;
  this.vx = new on;
  this.xl = new on;
  a = new tn;
  a.ys = !1;
  this.yd = a;
  this.ux = new z.qn;
  this.Uz = new z.qn;
  this.lf = {};
  this.Ug = {};
  this.vo = this.uo = !1;
  this.ki = null;
};
var Fn = function(a, b, c) {
  return Math.min(Math.max((a - b) / c, 0), 1);
};
var Gn = function(a) {
  (0,z.rn)(a.Uz.Pe(a.ux), a.yd.ld.ia());
};
var Hn = function(a, b) {
  var c = b.getAttribute("data-scroll"), d = (0,z.pa)(b);
  a.lf[d] || (a.lf[d] = new tn, pn(a.vx, a.lf[d]));
  var e = a.lf[d], f = In(a.Uz, (0,z.sg)(b));
  wn(e, f);
  (f = a.Ug[d]) && f.g() != c && ((0,z.C)(f), f = null);
  f || ("blur-cover" == c ? f = new Bn(a.da, a, e) : "post-cover" == c ? f = new Cn(a.da, a, e) : "post-section" == c && (f = new Dn(a.da, a, e, a.xl), f.rd(b)), f ? a.Ug[d] = f : delete a.Ug[d]);
};
var Jn = function(a, b) {
  for (var c = null, d = {}, e = 0;e < b.length;e++) {
    d[(0,z.pa)(b[e])] = !0;
  }
  for (c in a.Ug) {
    d[c] || ((0,z.C)(a.Ug[c]), delete a.Ug[c]);
  }
  for (c in a.lf) {
    if (!d[c]) {
      var e = a.vx, f = (0,z.pa)(a.lf[c]);
      delete e.Cp[f];
      (0,z.C)(a.lf[c]);
      delete a.lf[c];
    }
  }
};
var Kn = function(a) {
  return bb(a.Tc.J.querySelectorAll("[data-scroll]:not([data-scroll-disabled])"));
};
z.Ln = function(a) {
  z.jn.call(this);
  a = this.da = a;
  if (a.kc.mg(a.xb, "screen") && a.kc.uh("screen")) {
    a.tf.screen = this, Mn(a, "screen");
  } else {
    throw Error('The service "screen" was not declared as a manual servicefor scope "' + a.xb + '"');
  }
  this.da.rd();
};
z.Nn = function(a, b) {
  return a.da.get(b);
};
z.Wm = function(a) {
  return!a.J || (0,z.G)("useragent.requiresBodyScroll") ? window.document.body : a.J.querySelector(".scrolling-region") || a.J;
};
z.On = function(a, b) {
  var c = (0,z.Wm)(a);
  c === window.document.body && a.J && (c = a.J);
  c.appendChild(b);
};
z.Pn = function(a) {
  z.Ln.call(this, a);
};
z.Qn = function(a, b) {
  z.Ln.call(this, a);
  var c = b.path;
  if (0 === c.indexOf("http")) {
    throw Error("You cannot construct an html screen with an absolute path. Try removing the host.");
  }
  this.Ic = c;
};
var Rn = function(a, b) {
  z.Uh.call(this);
  this.ra = a.get("dom-monitor");
  this.X = b;
  this.ju = null;
  this.Bs = 0;
  this.Tc = a.get("screen");
};
var Sn = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.Z = a.get("datastore");
  this.fa = this.Z.wb[Ii];
  this.ii = null;
};
var Tn = function(a) {
  var b = a.L(".welcome-wrapper");
  b && (0,window.setTimeout)(function() {
    (0,z.w)(b, "hiding");
    cg(b, z.Un, function() {
      (0,z.w)(b, "hidden");
    });
  }.bind(a), 3E3);
};
var Vn = function(a) {
  return 1E6 <= a.Jd ? (1E7 <= a.Jd ? (0,z.O)(Math.floor(a.Jd / 1E6)) : (0,z.O)(Math.floor(a.Jd / 1E5) / 10)) + "M" : 1E3 <= a.Jd ? (1E4 <= a.Jd ? (0,z.O)(Math.floor(a.Jd / 1E3)) : (0,z.O)(Math.floor(a.Jd / 100) / 10)) + "K" : (0,z.O)(a.Jd);
};
var Wn = function(a) {
  return'data-action\x3d"sign-in-prompt"' + (a.Tq ? 'data-requires-token\x3d"true"' : "") + 'data-popover-type\x3d"sign-in" data-redirect\x3d"' + (0,z.O)(a.Fk) + '" data-popover\x3d"' + (0,z.O)(a.prompt) + '" data-popover-position\x3d"bottom" data-popover-signin-type\x3d"' + (a.sn ? (0,z.O)(a.sn) : "") + '"';
};
var Xn = function(a, b, c) {
  return'\x3cbutton class\x3d"btn ' + (a.Fq ? "btn-small" : "btn-large") + " btn-follow btn-toggle btn-suffix " + (a.kb ? "btn-light" : "btn-primary") + " no-user-select " + (a.collection.virtuals.isSubscribed ? "active" : "") + '"' + (c.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.P)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.P)(a.collection.id) + '"' : Wn({Fk:"/_/subscribe/" + (0,z.O)(a.collection.slug), prompt:"Sign in to follow this collection", 
  Tq:!0})) + '\x3e\x3cspan class\x3d"btn-label follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e' + (!a.YA && a.collection.metadata.followerCount ? '\x3cspan class\x3d"btn-label btn-count"\x3e' + Vn({Jd:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/button\x3e";
};
var Yn = function(a, b) {
  return "\x3cdiv class\x3d'align-block'\x3e\x3cdiv class\x3d\"collection-item-title\"\x3e" + (0,z.O)(a.collection.name) + "\x3c/div\x3e" + (a.bR ? '\x3cdiv class\x3d"collection-item-meta"\x3e' + (0,z.O)(a.collection.shortDescription) + "\x3c/div\x3e" : "") + (a.br ? '\x3cdiv class\x3d"follow-wrapper"\x3e' + Xn({collection:a.collection, Fq:!0, kb:!0}, 0, b) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var Zn = function() {
  return "We'll email you when the collection editor has reviewed your submission";
};
var $n = function(a) {
  return "Submissions are typically reviewed " + (0,z.O)(a.responseTimeFuzzy);
};
var ao = function(a) {
  return a.user && a.user.userId ? '\x3ca href\x3d"' + (0,z.Fi)(a) + '" data-id\x3d"' + (0,z.P)(a.user.userId) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.user.name) + '"' + (a.rel ? ' rel\x3d"' + (0,z.P)(a.rel) + '"' : "") + bo(a) + "\x3e" + (0,z.O)(a.user.name) + "\x3c/a\x3e" : "Unknown User";
};
var co = function(a) {
  var b = "", c = (a.baseUrl ? (0,z.O)(a.baseUrl) : "") + "/" + (0,z.O)(a.collection.slug);
  return b += '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c)) + '" title\x3d"Go to ' + (0,z.P)(a.collection.name) + '" data-collection-slug\x3d"' + (0,z.P)(a.collection.slug) + '" data-id\x3d"' + (0,z.P)(a.collection.id) + '"' + (a.VJ ? 'target\x3d"_blank"' : "") + bo(a) + "\x3e" + (0,z.O)(a.collection.name) + "\x3c/a\x3e";
};
var bo = function(a) {
  a = a || {};
  return(a.Rb ? ' class\x3d"' + (0,z.P)(a.Rb) + '"' : "") + (a.oi ? ' data-action\x3d"' + (0,z.P)(a.oi) + '"' : "") + (a.pi ? ' data-action-value\x3d"' + (0,z.P)(a.pi) + '"' : "");
};
z.eo = function(a, b) {
  return fo((0,z.L)(a, {width:64, height:64}), b);
};
var go = function(a, b) {
  return fo((0,z.L)(a, {width:64, height:64, HJ:!0}), b);
};
var ho = function(a, b) {
  return fo((0,z.L)(a, {width:100, height:100}), b);
};
z.io = function(a, b) {
  return fo((0,z.L)(a, {width:190, height:190}), b);
};
var fo = function(a, b) {
  var c = "", d = a.miroUrl ? a.miroUrl : b.miroUrl, e = !a.iq && a.user && a.user.name;
  if (e) {
    var f = "Go to the profile of " + a.user.name, c = c + ('\x3ca href\x3d"' + (0,z.Fi)(a) + '"' + (a.Rb ? ' class\x3d"' + (0,z.P)(a.Rb) + '"' : "") + (a.oi ? ' data-action\x3d"' + (0,z.P)(a.oi) + '"' : "") + (a.tabIndex ? '  tabindex\x3d"' + (0,z.P)(a.tabIndex) + '"' : "") + (a.pi ? ' data-action-value\x3d"' + (0,z.P)(a.pi) + '"' : "") + ' title\x3d"' + (0,z.P)(a.Sk ? a.Sk : f) + '" \x3e')
  } else {
    c += "\x3cspan" + (a.Rb ? ' class\x3d"' + (0,z.P)(a.Rb) + '"' : "") + "\x3e";
  }
  return c += '\x3cimg src\x3d"' + (a.user && a.user.imageId ? (0,z.P)((0,z.Q)(d)) + "/fit/c/" + (0,z.P)(a.width) + "/" + (0,z.P)(a.height) + "/" + (0,z.P)(a.user.imageId) : b.defaultUserImage ? (0,z.P)((0,z.Q)(b.defaultUserImage)) : "") + '"' + (a.vc ? ' class\x3d"' + (0,z.P)(a.vc) + '"' : "") + (a.Sk ? ' data-tooltip\x3d"' + (0,z.P)(a.Sk) + '"' : "") + (a.Sk || a.user ? ' title\x3d"' + (0,z.P)(a.Sk ? a.Sk : a.user.name) + '"' : "") + (e ? "" : (a.oi ? ' data-action\x3d"' + (0,z.P)(a.oi) + '"' : 
  "") + (a.pi ? ' data-action-value\x3d"' + (0,z.P)(a.pi) + '"' : "")) + "\x3e" + (a.user && a.user.name && a.HJ ? "\x3cspan " + (a.uB ? 'class\x3d"' + (0,z.P)(a.uB) + '"' : "") + "\x3e" + (0,z.O)(a.user.name) + "\x3c/span\x3e" : "") + (e ? "\x3c/a\x3e" : "\x3c/span\x3e");
};
var jo = function(a) {
  return'\x3cspan class\x3d"reading-time"\x3e' + (0,z.O)(Math.ceil(a.readingTime)) + " min read\x3c/span\x3e";
};
var ko = function(a, b, c) {
  b = "";
  c.variants.can_read_later && c.isAuthenticated ? a.isOnReadingList ? (b += '\x3cspan class\x3d"reading-list-status on-reading-list" data-post-id\x3d"' + (0,z.P)(a.postId) + '" data-reading-time\x3d"' + (0,z.P)(a.readingTime) + '" data-action\x3d"remove-from-reading-list" data-action-value\x3d"' + (0,z.P)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e', c = a.ZJ && 1E3 > c.deviceWidth, b += '\x3cspan class\x3d"reading-list-status-' + (0,z.P)(c ? "display" : 
  "message") + '"\x3eBookmarked\x3c/span\x3e' + (c ? "" : jo(a)) + "\x3c/span\x3e") : b += '\x3cspan class\x3d"reading-list-status" data-post-id\x3d"' + (0,z.P)(a.postId) + '" data-reading-time\x3d"' + (0,z.P)(a.readingTime) + '" data-action\x3d"add-to-reading-list" data-action-value\x3d"' + (0,z.P)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3cspan class\x3d"reading-list-status-message"\x3eBookmark\x3c/span\x3e' + jo(a) + "\x3c/span\x3e" : b += 
  jo(a);
  return b;
};
var lo = function(a, b) {
  var c, d = a.contextCollection ? a.contextCollection : a.post.homeCollection;
  c = "";
  var e = a.aj ? "" : mo(a, b), d = !a.Ki || a.post.displayAuthor || d && !a.lv ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (!a.Ki || a.post.displayAuthor ? a.post.displayAuthor ? (0,z.O)(a.post.displayAuthor) + " " : a.aj ? go({user:a.post.creator, vc:"avatar-icon post-item-meta-avatar", Rb:"post-item-author link link-secondary"}, b) : ao({user:a.post.creator, Rb:"post-item-author link link-secondary"}) : "") + (!d || a.lv || "collectionSubscriptionsByUserId" == a.post.providerName && a.Qk ? 
  "" : (a.Ki ? "" : " ") + "in " + co({collection:d, Rb:"post-item-collection link link-secondary"})) + "\x3c/li\x3e" : "";
  c += e + d + (a.aj ? mo(a, b) : "");
  return'\x3cul class\x3d"post-item-meta"\x3e' + c + (b.variants.enable_debug && !a.ZA ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Detected language (debug only)"\x3e' + (a.post.detectedLanguage ? (0,z.O)(a.post.detectedLanguage) : "n/a") + "\x3c/li\x3e" : "") + (b.variants.can_see_reading_time && !a.DJ ? '\x3cli class\x3d"post-item-meta-item"\x3e' + ko({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, b) + "\x3c/li\x3e" : 
  "") + (a.TK && b.variants.can_resume_from_last_read_location && a.post.virtuals.userPostRelation && a.post.virtuals.userPostRelation.lastReadParagraphName ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Resume reading"\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"resume" data-action-value\x3d"' + (0,z.P)(a.post.virtuals.userPostRelation.lastReadParagraphName) + '"\x3eResume\x3c/button\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var mo = function(a, b) {
  return a.Qk && a.post.providerName ? '\x3cli class\x3d"post-item-meta-item"\x3e' + $h("a", a.post.providerName)((0,z.L)(a, {reason:a.post.reasons[a.post.providerName], Ag:!0}), null, b) + "\x3c/li\x3e" : "";
};
var no = function(a, b, c) {
  return'\x3cdiv class\x3d"email-share-form"\x3e\x3cdiv class\x3d"email-address-container"\x3e\x3cinput type\x3d"text" class\x3d"input-text share-email-address" placeholder\x3d"name@example.com, name@example.com"\x3e\x3c/div\x3e\x3cdiv class\x3d"email-address-error-message"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-comment"\x3e\x3ctextarea class\x3d"textarea-seamless sender-comment overlay-form-text-input" placeholder\x3d"Write something..."\x3e\x3c/textarea\x3e\x3cdiv class\x3d"share-post-data"\x3e\x3cdiv class\x3d"post-author-image-container"\x3e' + 
  fo((0,z.L)({user:a.post.creator, Rb:"post-author-image", oi:"stat-link", pi:"post-discovery.author.image"}, {width:40, height:40}), c) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-text-container"\x3e\x3cdiv class\x3d"share-post-text"\x3e\x3cdiv class\x3d"share-post-title"\x3e' + (0,z.O)(a.post.title) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-subtitle"\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
};
var oo = function(a, b) {
  var c;
  return c = "" + (a.post.displayAuthor ? '\x3cspan class\x3d"' + (0,z.P)("post-meta post-meta-author link link-secondary") + '"\x3e' + (0,z.O)(a.post.displayAuthor) + "\x3c/span\x3e" : a.aj ? go({user:a.post.creator, vc:"avatar-icon post-meta-avatar post-meta-avatar-author", Rb:"post-meta post-meta-author link link-secondary"}, b) : ao({user:a.post.creator, Rb:"post-meta post-meta-author link link-secondary"}));
};
var po = function(a) {
  var b = a.contextCollection ? a.contextCollection : a.post.homeCollection;
  return a = "" + (!b || "collectionSubscriptionsByUserId" == a.post.providerName && a.Qk ? "" : '\x3cspan class\x3d"post-meta post-meta-collection"\x3e' + (a.separator ? (0,z.O)(a.separator) : "") + co({collection:b, Rb:"link link-secondary"}) + "\x3c/span\x3e");
};
var qo = function(a, b) {
  var c;
  if (a.post.providerName && b.variants.can_view_prl_homepage && b.variants.can_view_prl_debug) {
    c = (0,z.L)(a, {className:"post-meta post-meta-prl-debug"});
    for (var d = '\x3cul class\x3d"prl-debug ' + (c.className ? (0,z.P)(c.className) : "") + '"\x3e\x3cli class\x3d"prl-debug-item"\x3e\x3cspan class\x3d"prl-debug-weight"\x3e' + (0,z.O)(c.post.weight) + "\x3c/span\x3epost " + (0,z.O)(c.post.id) + "\x3c/li\x3e" + (c.post.magnitude ? '\x3cli class\x3d"prl-debug-item"\x3emagnitude: ' + (0,z.O)(c.post.magnitude) + "\x3c/li\x3e" : ""), e = Xh(c.post.reasons), f = e.length, h = 0;h < f;h++) {
      for (var k = e[h], l = c.post.reasons[k], d = d + ('\x3cli class\x3d"prl-debug-item-provider"\x3e' + (0,z.O)(k) + ": " + (0,z.O)(l.weight) + "\x3cul\x3e"), k = Xh(l.suggestionData), m = k.length, q = 0;q < m;q++) {
        var s = k[q], d = d + ('\x3cli class\x3d"prl-debug-item"\x3e' + (0,z.O)(s) + ": " + (0,z.O)(l.suggestionData[s]) + "\x3c/li\x3e")
      }
      d += "\x3c/ul\x3e\x3c/li\x3e";
    }
    c = d + "\x3c/ul\x3e";
  } else {
    c = "";
  }
  return c;
};
var ro = function(a, b) {
  var c;
  if (a.jC || b.variants.can_blacklist) {
    c = '\x3cdiv class\x3d"post-meta post-meta-actions btn-set"\x3e' + (a.jC ? '\x3cbutton class\x3d"btn btn-small' + (a.kb ? " btn-light" : "") + '" title\x3d"Accept this story into this collection" data-action\x3d"accept-story" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.kb ? " btn-light" : "") + '" title\x3d"Don\'t accept this story into this collection" data-action\x3d"reject-story" data-action-value\x3d"' + (0,z.P)(a.post.id) + 
    "\"\x3eDon't Accept\x3c/button\x3e" : "");
    var d;
    d = b.variants.can_blacklist ? '\x3cbutton class\x3d"btn btn-small' + (a.kb ? " btn-light" : "") + '" title\x3d"Blacklist this post" data-action\x3d"update-blacklist" data-action-type\x3d"post" data-action-name\x3d"' + (0,z.P)(a.post.title) + '" data-action-id\x3d"' + (0,z.P)(a.post.id) + '"\x3eBlacklist Post\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.kb ? " btn-light" : "") + '" title\x3d"Blacklist this user" data-action\x3d"update-blacklist" data-action-type\x3d"user" data-action-name\x3d"' + 
    (0,z.P)(a.post.creator.name) + '" data-action-id\x3d"' + (0,z.P)(a.post.creator.username) + '"\x3eBlacklist Author\x3c/button\x3e' : "";
    c = c + d + "\x3c/div\x3e";
  } else {
    c = "";
  }
  return c;
};
var so = function(a, b, c) {
  if (a.Qk && c.variants.can_view_prl_homepage && c.variants.can_view_prl_debug) {
    b = '\x3cdiv class\x3d"prl-debug-providers"\x3e\x3cspan class\x3d"prl-debug-provider-header"\x3eProviders\x3c/span\x3e\x3cul\x3e';
    for (var d = Xh(a.providerPerformance), e = d.length, f = 0;f < e;f++) {
      var h = d[f];
      b += '\x3cli\x3e\x3cspan class\x3d"prl-debug-provider-name"\x3e' + (0,z.O)(h) + "\x3c/span\x3e";
      for (var k = Xh(a.providerPerformance[h]), l = k.length, m = 0;m < l;m++) {
        var q = k[m];
        b += '\x3cspan class\x3d"prl-debug-dimension"\x3e\x3cstrong\x3e' + (0,z.O)(q) + "\x3c/strong\x3e: " + (0,z.O)(a.providerPerformance[h][q]) + "\x3c/span\x3e";
      }
      b += "\x3c/li\x3e";
    }
    b = '\x3cli class\x3d"bucket-item post-meta"\x3e' + (b + "\x3c/ul\x3e\x3c/div\x3e") + "\x3c/li\x3e";
  } else {
    b = "";
  }
  d = a.posts;
  e = d.length;
  for (f = 0;f < e;f++) {
    h = d[f], b += !a.wc || f < a.wc ? '\x3cli class\x3d"bucket-item"\x3e' + $h("b", a.QB)((0,z.L)(a, {post:h}), null, c) + "\x3c/li\x3e" : "";
  }
  return b;
};
z.to = function(a, b) {
  return uo((0,z.L)(a, {wu:'\x3cul class\x3d"bucket-posts"\x3e' + so(a, 0, b) + "\x3c/ul\x3e", yv:a.posts.length}));
};
z.vo = function(a, b, c) {
  var d = "";
  b = a.collections;
  for (var e = b.length, f = 0;f < e;f++) {
    var h = b[f];
    if (!a.wc || f < a.wc) {
      var h = (0,z.L)(a, {collection:h}), k = c, l = "", m = (0,z.zi)((0,z.L)(h.collection.image, {strategy:"resample", width:"450", verticalGradient:"29/81/60"}), 0, k), h = l += h.iq ? '\x3cdiv class\x3d"collection-item align-bottom ' + (h.collection.virtuals.isSubscribed ? "active" : "") + '" style\x3d"background-image:url(' + (0,z.P)((0,z.Q)(m)) + ')" data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.P)(h.collection.slug) + '" data-collection-id\x3d"' + (0,z.P)(h.collection.id) + 
      '" \x3e' + Yn(h, k) + "\x3c/div\x3e" : '\x3ca class\x3d"collection-item align-bottom" href\x3d"/' + (0,z.P)(h.collection.slug) + '" style\x3d"background-image:url(' + (0,z.P)((0,z.Q)(m)) + ')"\x3e' + Yn(h, k) + "\x3c/a\x3e"
    } else {
      h = "";
    }
    d += h;
  }
  return uo((0,z.L)(a, {wu:'\x3cdiv class\x3d"collection-bucket clearfix"\x3e' + d + "\x3c/div\x3e", yv:a.collectionCount}));
};
z.wo = function(a) {
  return uo((0,z.L)(a, {wu:xo(a)}));
};
var xo = function(a) {
  return'\x3cdiv class\x3d"bucket-empty ' + (a.kb ? "bucket-empty-light" : "") + " " + (a.Nm ? "bucket-empty-hidden" : "") + '"\x3e\x3cp class\x3d"bucket-empty-message"\x3e' + (0,z.pi)(a.zh) + "\x3c/p\x3e" + (a.Qj ? '\x3cp class\x3d"bucket-empty-action"\x3e' + (0,z.pi)(a.Qj) + "\x3c/p\x3e" : "") + "\x3c/div\x3e";
};
var uo = function(a) {
  return'\x3cdiv class\x3d"bucket layout-single-column ' + (a.JB ? "ordered-posts" : "") + '"\x3e' + (a.label ? '\x3ch2 class\x3d"bucket-label"\x3e' + (a.Ah ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.Ah)) + '"\x3e' : "") + (0,z.O)(a.label) + (a.Ah ? "\x3c/a\x3e" : "") + "\x3c/h2\x3e" : "") + (0,z.pi)(a.wu) + (a.Ah && a.wc && a.yv && a.wc < a.yv ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.Ah)) + '" class\x3d"btn btn-small"\x3eMore\x3cspan class\x3d"icons icons-arrow-right icons-pull-right"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") + (a.Wz ? xo(a) : "") + "\x3c/div\x3e";
};
var yo = function(a, b) {
  var c = '\x3cbutton class\x3d"overlay-close" data-action\x3d"overlay-close"\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d"overlay-dialog ' + (a.update ? "overlay-dialog-update" : "") + " " + (a.type ? "overlay-dialog-" + (0,z.P)(a.type) : "") + '" tabindex\x3d"-1"\x3e' + (a.title ? '\x3ch3 class\x3d"overlay-title"\x3e' + (0,z.O)(a.title) + "\x3c/h3\x3e" : "") + '\x3cdiv class\x3d"overlay-content"\x3e' + (0,z.pi)(a.bodyHtml) + "\x3c/div\x3e", d = a.type ? $h("c", a.type)(a, null, b) : "";
  return c += (d ? '\x3cdiv class\x3d"overlay-actions"\x3e' + (0,z.pi)(d) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var zo = function(a) {
  return'\x3cdiv class\x3d"popover-inner ' + (a.Dv ? (0,z.P)(a.Dv) : "") + '"\x3e' + (0,z.pi)(a.jA) + '\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var Ao = function(a, b, c) {
  return "\x3cul\x3e" + (c.variants.can_share_by_email ? '\x3cli\x3e\x3ca class\x3d"btn btn-chromeless share-by-email" title\x3d"Share this post by email" data-action\x3d"share-by-email" data-action-value\x3d"' + (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-email"\x3e\x3c/i\x3eShare via email\x3c/a\x3e\x3c/li\x3e' : "") + (c.variants.can_report_bad_posts ? '\x3cli\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Report this post as spam" data-action\x3d"report-spam" data-action-value\x3d"' + 
  (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-flag"\x3e\x3c/i\x3eReport as spam\x3c/a\x3e\x3c/li\x3e' : "") + (c.variants.enable_embed_ui ? '\x3cli\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Embed this story" data-action\x3d"embed-story" data-action-value\x3d"' + (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-embed"\x3e\x3c/i\x3eEmbed story\x3c/a\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var Bo = function() {
  return'\x3ch2\x3eStory submitted\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + Zn() + "\x3c/div\x3e";
};
z.Co = function(a) {
  return'\x3cheader class\x3d"hero hero-standalone layout-single-column ' + (a.RR ? "hero-standalone-underline" : "") + '"\x3e\x3ch1 class\x3d"hero-title"\x3e' + (0,z.O)(a.title) + "\x3c/h1\x3e" + (a.description ? '\x3cp class\x3d"hero-description"\x3e' + (0,z.O)(a.description) + "\x3c/p\x3e" : "") + (a.Qj ? '\x3cdiv class\x3d"hero-actions btn-set"\x3e' + (0,z.pi)(a.Qj) + "\x3c/div\x3e" : "") + "\x3c/header\x3e";
};
z.Do = function(a, b) {
  for (var c = '\x3cnav class\x3d"nav-tabs ' + (a.kb ? "nav-tabs-light" : "") + " " + (a.Nm ? "nav-tabs-hidden" : "") + ' layout-single-column"\x3e\x3cul class\x3d"nav-tabs-list"\x3e', d = a.sw, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + ('\x3cli class\x3d"nav-tabs-item ' + (h.zd ? "active" : "") + '"\x3e' + (h.IK && !b.currentUser.isAuthenticated ? '\x3cbutton class\x3d"btn btn-chromeless nav-tabs-anchor"' + Wn({Fk:h.href, prompt:"Sign in to continue"}) + "\x3e" + (0,z.O)(h.name) + "\x3c/button\x3e" : '\x3ca class\x3d"nav-tabs-anchor" href\x3d"' + (0,z.P)((0,z.Q)(h.href)) + '"\x3e' + (0,z.O)(h.name) + "\x3c/a\x3e") + "\x3c/a\x3e\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e\x3c/nav\x3e";
};
var Eo = function(a) {
  a = a || {};
  return'\x3cdiv class\x3d"metabar clearfix ' + (a.kb ? "metabar-light" : "") + " " + (a.WJ ? "metabar-top" : "") + " " + (a.Ov ? (0,z.P)(a.Ov) : "") + '"\x3e' + (a.gq ? '\x3cdiv class\x3d"metabar-block align-left"\x3e' + (0,z.pi)(a.gq) + "\x3c/div\x3e" : "") + (a.iA ? '\x3cdiv class\x3d"metabar-block metabar-center"\x3e' + (0,z.pi)(a.iA) + "\x3c/div\x3e" : "") + (a.gh ? '\x3cdiv class\x3d"metabar-block align-right"\x3e' + (0,z.pi)(a.gh) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
z.Fo = function(a) {
  return Eo((0,z.L)(a, {WJ:!0}));
};
var Go = function(a, b, c) {
  return(0,z.Fo)({gh:c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cdiv class\x3d"btn-set"\x3e\x3ca href\x3d"/new-collection" class\x3d"btn btn-primary"\x3eNew Collection\x3c/a\x3e\x3c/div\x3e' : ""}) + (0,z.Co)({title:"Collections", description:"Stories grouped by theme or topic", Qj:'\x3cdiv class\x3d"input-group"\x3e\x3cspan class\x3d"icons icons-search"\x3e\x3c/span\x3e\x3cinput id\x3d"collection-search-input" type\x3d"search" class\x3d"input-text input-text-rounded" placeholder\x3d"Search"\x3e\x3c/div\x3e'}) + 
  (0,z.vo)((0,z.L)(a, {collections:c.variants.enable_see_subscribed_collections ? a.collections : [], br:!0, label:0 < a.collections.length ? "Collections You Follow" : ""}), 0, c);
};
var Ho = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.ga = a.get("request");
  this.Z = a.get("datastore");
  this.Uc = this.ta = this.xr = null;
  this.St = 0;
  this.Da = "";
  this.zr = {};
  this.rl = [];
};
var Io = function(a) {
  for (var b = a.J.querySelectorAll(".follow-wrapper"), c = 0;c < b.length;c++) {
    var d = b[c].querySelector(".btn-follow").getAttribute("data-action-value"), e = a.Z.Of[d] || null;
    if (!e) {
      (0,z.K)(Error("CollectionsScreen: Trouble getting collectionMeta for " + d));
      break;
    }
    d = (0,z.Jo)(new z.Ko(b[c], e, Xn), {Fq:!0, kb:!0}, "collection").H();
    a.rl.push(d);
  }
};
var W = function() {
  this._isPopulated = !1;
  Hf.call(this);
};
var Lo = function(a) {
  this.aa = a;
  this.$o = this.Sl = null;
};
var Mo = function(a, b) {
  if (a.Sl) {
    throw Error("Called populate() before the previous populate() was complete");
  }
  a.Sl = b;
  return a;
};
var No = function(a, b) {
  if (!a.Sl) {
    throw Error("Cannot call as() before populate()");
  }
  if (a.$o) {
    throw Error("Cannot call as() twice");
  }
  a.$o = b;
  return a;
};
var Oo = function(a, b) {
  var c = a.aa, d;
  b = b || {};
  var e = a.Sl.split(".");
  if (c) {
    for (var f = Array.isArray(c) ? c : [c];e.length && f.length;) {
      for (var h = e.shift(), k = 0 < e.length, l = [], c = 0;c < f.length;c++) {
        var m = f[c];
        if (k) {
          if (m = m[h], Array.isArray(m)) {
            for (d = 0;d < m.length;d++) {
              l.push(m[d]);
            }
          } else {
            "object" === typeof m && m && l.push(m);
          }
        } else {
          var q = a.$o || h;
          if (Array.isArray(m[h])) {
            for (d = 0;d < m[h].length;d++) {
              b[m[h][d]] && (m[q][d] = b[m[h][d]]);
            }
          } else {
            "string" === typeof m[h] && b[m[h]] && (m[q] = b[m[h]]);
          }
        }
      }
      f = l;
    }
  }
  a.Sl = a.$o = null;
};
z.Wj = function(a, b) {
  if (!b || "object" !== typeof b) {
    throw Error("References are now a required argument for autoPopulate()");
  }
  if (!a) {
    return a;
  }
  var c = Array.isArray(a);
  if (c && 0 === a.length) {
    return a;
  }
  var d;
  d = new Lo(a);
  var e = c ? a[0].type : a.type, c = c ? a : [a];
  if (c[0] instanceof W) {
    var f = c[0];
    f.jh && (e = f.jh());
  }
  if ("Collection" == e) {
    Oo(No(Mo(d, "creatorId"), "user"), b.User);
  } else {
    if ("Post" == e) {
      if (Oo(No(Mo(d, "creatorId"), "creator"), b.User), Oo(No(Mo(d, "homeCollectionId"), "homeCollection"), b.Collection), Oo(No(Mo(d, "virtuals.postedIn.collectionId"), "collection"), b.Collection), f = ca("virtuals.notesBySocialRecommends", d.aa), e = ca("virtuals.usersBySocialRecommends", d.aa), f && f.length && e && e.length) {
        d = No(Mo(d, "virtuals.notesBySocialRecommends.author"), "authorUser");
        f = {};
        if (Array.isArray(e)) {
          for (var h = 0;h < e.length;h += 1) {
            Po(f, e[h]);
          }
        } else {
          Po(f, e);
        }
        Oo(d, f);
      }
    } else {
      if ("RecommendedPost" == e) {
        for (d = c.length - 1;0 <= d;d--) {
          (e = c[d].post) && "object" == typeof e ? (0,z.Wj)(e, b) : (window.console.warn("Missing post data in RecommendedPost for post ID: " + e), c.splice(d, 1));
        }
      } else {
        if ("RelatedCollectionReference" == e) {
          for (Oo(No(Mo(d, "collectionId"), "collection"), b.Collection), d = 0;d < c.length;d++) {
            (0,z.Wj)(c[d].collection, b);
          }
        } else {
          "FollowUp" == e ? (Oo(No(Mo(d, "mediaResourceId"), "mediaResource"), b.MediaResource), Oo(No(Mo(d, "creatorId"), "creator"), b.User), (0,z.Wj)(a.mediaResource, b)) : "MediaResource" == e && "MediaResourceMediumPost" == a.mediaResourceType && (Oo(No(Mo(d, "mediumPost.postId"), "post"), b.Post), (0,z.Wj)(a.mediumPost.post, b));
        }
      }
    }
  }
  for (d = 0;d < c.length;d++) {
    c[d]._isPopulated = !0;
  }
  return a;
};
var Mj = function(a) {
  a = Array.isArray(a) ? a : [a];
  for (var b = 0;b < a.length;b++) {
    if (!a[b]._isPopulated) {
      return!1;
    }
  }
  return!0;
};
var Po = function(a, b) {
  if ("object" === typeof b && b.userId) {
    a[b.userId] = b;
  } else {
    throw window.console.error("Unable to convert data to map", b), Error("Unable to convert data to map " + b);
  }
};
var Qo = function(a) {
  return'\x3ch4 class\x3d"cards-heading"\x3e' + (0,z.O)(a.heading) + '\x3c/h4\x3e\x3cul class\x3d"cards"\x3e' + (0,z.pi)(a.$p) + "\x3c/ul\x3e";
};
var Ro = function(a, b) {
  return'\x3cli class\x3d"card card-user"\x3e\x3cdiv class\x3d"card-image"\x3e' + (0,z.io)({user:a.user, vc:"card-avatar"}, b) + '\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + ao({user:a.user, Rb:"link link-primary", rel:"author"}) + "\x3c/h3\x3e" + (a.user.virtuals.bioHTML && "null" != a.user.virtuals.bioHTML ? '\x3cp class\x3d"card-description"\x3e' + (0,z.pi)(a.user.virtuals.bioHTML) + "\x3c/p\x3e" : "") + (a.Xz ? '\x3cdiv class\x3d"card-additional"\x3e' + (0,z.pi)(a.Xz) + 
  "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/li\x3e";
};
var So = function(a, b) {
  var c = '\x3cli class\x3d"card card-collection"\x3e\x3cdiv class\x3d"card-image"\x3e', d = (0,z.zi)((0,z.L)(a.collection.image, {strategy:"crop-fixed", width:"160", height:"160"}), 0, b), c = c + ('\x3ca href\x3d"/' + (0,z.P)(a.collection.slug) + '" title\x3d"Go to ' + (0,z.P)(a.collection.name) + '"\x3e\x3cimg class\x3d"card-collection-image" alt\x3d"Go to ' + (0,z.P)(a.collection.name) + '" src\x3d"' + (0,z.P)((0,z.Q)(d)) + '" /\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + 
  co({collection:a.collection, rel:"collection", Rb:"link link-primary"}) + "\x3c/h3\x3e" + (a.collection.description ? '\x3cp class\x3d"card-description"\x3e' + (0,z.O)(a.collection.description) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"btn-set"\x3e' + (a.dA ? (0,z.pi)(a.dA) : Xn({collection:a.collection, Fq:!0, YA:!0}, 0, b)));
  a.post && (d = a.post.virtuals.publishedInCount - 1, c += 0 < d ? '\x3cbutton class\x3d"btn btn-small btn-link" data-action\x3d"show-other-collections"\x3eAlso in ' + (0,z.O)(d) + " collection" + (1 != d ? "s" : "") + "\x3c/button\x3e" : "");
  return c + "\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e";
};
var To = function(a, b, c) {
  if (a.users.length || a.collections.length || a.posts.length) {
    if (a.users.length || a.collections.length) {
      if (a.users.length) {
        b = (0,z.L)(a, {wc:3});
        for (var d = "", e = b.users, f = e.length, h = 0;h < f;h++) {
          var k = e[h], d = d + (!b.wc || h < b.wc ? Ro({user:k}, c) : "")
        }
        b = Qo({heading:"People", $p:d}) + (a.posts.length ? "" : '\x3c/div\x3e\x3cdiv class\x3d"layout-multi-column-secondary"\x3e');
      } else {
        b = "";
      }
      b = '\x3cdiv class\x3d"layout-multi-column-secondary"\x3e' + b;
      if (a.collections.length) {
        d = (0,z.L)(a, {wc:3});
        e = "";
        f = d.collections;
        h = f.length;
        for (k = 0;k < h;k++) {
          var l = f[k], e = e + (!d.wc || k < d.wc ? So({collection:l}, c) : "")
        }
        d = Qo({heading:"Collections", $p:e});
      } else {
        d = "";
      }
      b = b + d + "\x3c/div\x3e";
    } else {
      b = "";
    }
    a = b + (a.posts.length ? '\x3cdiv class\x3d"layout-multi-column-primary"\x3e\x3ch3 class\x3d"cards-heading"\x3eStories\x3c/h3\x3e' + (0,z.to)(a, c) + "\x3c/div\x3e" : "");
  } else {
    a = xo({zh:"We couldn't find anything."});
  }
  return a;
};
var Uo = function(a) {
  return a.L ? xo({zh:"We couldn't find any collections about \x3cb\x3e" + (0,z.O)(a.L) + "\x3c/b\x3e"}) : "";
};
var Vo = function(a, b, c) {
  z.Uh.call(this);
  this.ba = a.get("app");
  this.ga = a.get("request");
  this.Jt = 0;
  this.mp = {};
  this.li = null;
  this.ta = b;
  this.Da = "";
  this.dx = c;
  this.Dp = To;
};
var Wo = function(a, b) {
  a.ba.update(a.ba.Ld.replace(/\?.*/, "") + "?q\x3d" + (0,window.encodeURIComponent)(b));
};
var Xo = function(a, b) {
  z.Qn.call(this, a, b);
  this.gz = this.vs = null;
};
z.Yo = function(a) {
  return!!a.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
};
var Zo = function(a) {
  for (var b = 0;b < a.length;b++) {
    if (!(0,z.Yo)(a[b])) {
      return!1;
    }
  }
  return!0;
};
var $o = function(a) {
  z.B.call(this);
  this.da = a;
  this.ga = a.get("request");
  this.Z = a.get("datastore");
  this.Qa = a.get("butter-bar");
  this.W = a.get("dialog");
};
var ap = function(a, b, c) {
  c && b && (0,z.t)((0,z.r)(bp(a, b, c, "PENDING"), function(a) {
    a = (0,z.Wj)(a.value, a.references);
    (0,z.Lj)(this.Z, a);
    this.W.open({title:"Story submitted", bodyHtml:Zn(), type:z.Ki});
  }, a), (0,z.cp)(a.W, "An error occurred. Please try submitting again."));
};
var dp = function(a, b, c, d, e) {
  return c && b ? (0,z.t)((0,z.r)(bp(a, b, c, "APPROVED"), function(a) {
    a = (0,z.Wj)(a.value, a.references);
    (0,z.Lj)(this.Z, a);
    e && e.bh(a, 0);
    (0,z.yj)(ep, {collectionSlug:c, postIds:[b]});
    this.Qa.H(fp({Wj:d, nc:c}), z.gp);
  }, a), (0,z.cp)(a.W, hp())) : null;
};
var ip = function(a, b, c) {
  var d = (0,z.gj)(c, "name"), e = (0,z.gj)(c, "slug");
  (0,z.r)(bp(a, b, e, "REJECTED"), function(a) {
    jp(this, b, a);
    (0,z.yj)(kp, {collectionSlug:e, postIds:[b]});
    this.Qa.H(lp({Wj:d, nc:e}), z.gp);
  }, a);
};
var mp = function(a, b, c, d) {
  var e = (0,z.gj)(c, "name"), f = (0,z.gj)(c, "slug");
  c = c.get("virtuals.canAdminister") ? "NOT_FOUND" : "REMOVED";
  (0,z.t)((0,z.r)(bp(a, b, f, c), function(a) {
    jp(this, b, a, d);
    (0,z.yj)(kp, {collectionSlug:f, postIds:[b]});
    this.Qa.H(lp({Wj:e, nc:f}), z.gp);
  }, a), (0,z.cp)(a.W, np()));
};
var op = function(a, b, c, d) {
  if ((0,z.G)("variants.can_add_post_rejection_reason")) {
    var e = a.W.open({title:"Decline this story", bodyHtml:(0,z.H)(pp, {nC:a.Z.Ob(b).get("creator").name}), yi:"OK", type:qp}), f = new z.nc;
    e.C(rp, function(a, b, c) {
      var e = b.L(".story-rejection-note"), e = e ? e.value : null, e = e.trim();
      Wp(this, a, c, e, d);
      b.close();
      f.Ba();
    }.bind(a, b, e, c));
    return f;
  }
  return Wp(a, b, c, "", d);
};
var Wp = function(a, b, c, d, e) {
  var f = (0,z.gj)(c, "name"), h = (0,z.gj)(c, "slug");
  return(0,z.r)(bp(a, b, h, "REJECTED", d), function(a) {
    jp(this, b, a, e);
    (0,z.yj)(Xp, {postId:b, collectionId:c.get("id")});
    this.Qa.H(Yp({Wj:f, nc:h}), z.gp);
  }, a);
};
var bp = function(a, b, c, d, e) {
  b = z.Zp.ea({postId:b, collectionSlug:c});
  return a.ga.put(b, {postStatus:d, editorComment:e}, {ma:!0});
};
var jp = function(a, b, c, d) {
  c = (0,z.Wj)(c.value, c.references);
  (0,z.Lj)(a.Z, c);
  d && d.Gk(b);
};
var $p = function(a) {
  z.Uh.call(this);
  this.da = a;
  this.U = null;
  this.Ar = {};
  this.ta = null;
  this.Da = "";
  this.jd = a.get("request");
  this.Uc = null;
  this.Rt = 0;
  this.up = {};
  this.Z = a.get("datastore");
  this.ko = {};
};
var aq = function(a) {
  if (z.bq) {
    throw Error("Tried to make two module managers. Whooops!");
  }
  z.bq = this;
  this.kc = a;
  this.my = {};
  this.ny = {};
  this.ro = {};
  this.Ua = {};
  this.Xr = {};
};
var cq = function(a, b) {
  var c = a.my[b], d = a.ny[b];
  if (!c || !d) {
    return(0,z.Fc)(Error("Module " + b + " cannot be found"));
  }
  if (a.ro[b]) {
    return(0,z.Ec)(!0);
  }
  if (a.Ua[b]) {
    return a.Ua[b].Ad();
  }
  for (var e = (0,z.Ec)(!0), f = 0;f < c.length;f++) {
    a.ro[c[f]] || (0,z.vc)(e, cq(a, c[f]));
  }
  c = new z.nc;
  a.Ua[b] = c;
  (0,z.t)((0,z.r)(e, function() {
    if ((0,z.ha)(d)) {
      for (var a = (0,z.Ec)(!0), c = 0;c < d.length;c++) {
        (0,z.r)(a, this.gy.bind(this, d[c]));
      }
      this.Xr[b] = a;
    } else {
      this.gy(d);
    }
  }, a), c.Wd, c);
  return c.Ad();
};
var dq = function(a, b) {
  this.kc = a;
  this.xb = b;
};
var eq = function() {
  z.Sh.call(this);
  this.bm = {};
  this.YG = !1;
  this.jj = function() {
    return this.YG;
  }.bind(this);
};
var fq = function(a, b) {
  a.bm[b] || (a.bm[b] = new gq(b, a.jj));
  return a.bm[b];
};
var gq = function(a, b) {
  this.Me = a;
  this.jj = b;
  this.Fl = this.Ul = this.xb = null;
  this.to = !1;
};
var hq = function(a, b) {
  if (!a.jj() && a.xb) {
    throw Error('Cannot assign multiple scopes to service "' + a.Me + '"');
  }
  a.xb = b;
};
var iq = function(a, b) {
  this.kc = a;
  this.xb = b;
  this.tf = {};
  this.Ql = null;
  this.Xf = !1;
  this.kc.C("add-provider", this.yF, this);
};
var jq = function(a) {
  var b = new iq(a.kc, "screen");
  b.Ql = a;
  return b;
};
var kq = function(a, b) {
  a.tf[b] = a.kc.create(a.xb, b, a);
  Mn(a, b);
};
var Mn = function(a, b) {
  var c = a.tf[b];
  a.Xf && c && "function" == typeof c.rd && c.rd();
};
var lq = function() {
  this.al = !1;
};
var mq = function(a, b, c, d, e) {
  z.Uh.call(this);
  this.da = a;
  this.ja = b;
  this.Z = a.get("datastore");
  this.Od = new $o(a);
  this.Fg = c;
  this.za = d;
  this.U = (0,z.gj)(this.za, "id");
  this.Qh = a.get("coreactions");
  this.ba = a.get("app");
  this.ji = a.get("publish-state");
  this.xo = e;
  this.bg = {};
  this.wt = [];
  this.il = null;
};
var nq = function(a) {
  var b = (0,z.G)("currentUser.userId"), c = a.Z.Ob(a.U).get("virtuals.postedIn");
  a.bg = {};
  a.wt = [];
  for (var d = 0;d < c.length;d++) {
    a.bg[c[d].collection.slug] = c[d], "APPROVED" == c[d].status && c[d].collection.creatorId !== b && a.wt.push(new z.fj(c[d].collection));
  }
};
var oq = function(a, b) {
  for (var c = 0, d = a.Z.Ob(a.U).get("virtuals.postedIn"), e = 0;e < b.length;e++) {
    for (var f = 0;f < d.length;f++) {
      d[f].collectionId == b[e].get("id") && "APPROVED" == d[f].status && c++;
    }
  }
  return c;
};
z.Ko = function(a, b, c) {
  z.Uh.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.J = a;
  this.aa = b;
  this.Dp = c;
};
z.Jo = function(a, b, c) {
  a.hm = b;
  a.Qr = c;
  a.Hd() && a.Jq();
  return a;
};
z.pq = function(a, b) {
  b instanceof z.fj && (b = a.Og.call(null, b));
  if (a.hm) {
    a.hm[a.Qr] = b;
    var c = (0,z.H)(a.Dp, a.hm);
    delete a.hm[a.Qr];
    return c;
  }
  return(0,z.H)(a.Dp, b);
};
z.qq = function(a, b, c, d, e) {
  z.nc.call(this);
  this.ja = a;
  this.Jj = b;
  this.cu = Math.round(d);
  this.hs = Math.round(e) || (/scroll/.test(this.Jj) ? this.ja[this.Jj] : this.ja.style[this.Jj]);
  this.HD = c;
  this.GD = this.cu - this.hs;
  this.mi = (0,z.hh)();
  this.eI = this.hs < this.cu ? "min" : "max";
  window.requestAnimationFrame(this.Gz.bind(this));
};
var rq = function() {
  z.B.call(this);
};
var In = function(a, b) {
  return b.ia().scale(a.Vb, a.Wb).translate(a.Ib, a.cb);
};
var sq = function(a, b) {
  var c = new z.qn, d = 1, e = 0, f = 0;
  a.width / a.height > b.width / b.height ? (d = b.height / a.height, e = d * a.width, e = Math.min(Math.max(b.width / 2 - 0.5 * e, b.width - e), 0)) : (d = b.width / a.width, f = d * a.height, f = Math.min(Math.max(b.height / 2 - 0.5 * f, b.height - f), 0));
  var h = d;
  c.Vb *= h;
  c.gc *= h;
  c.Ib *= h;
  c.hc *= d;
  c.Wb *= d;
  c.cb *= d;
  d = f + b.top - a.top;
  c.Ib += e + b.left - a.left;
  c.cb += d;
  return c;
};
var tq = function(a, b) {
  var c = {imageId:a.yb()}, d = a.Yd(), e = a.pq();
  if (d) {
    d = z.uq.image.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  }
  e && (c.filter = e);
  b && (0,z.ob)(c, b);
  return(0,z.H)(z.zi, c);
};
var vq = function(a) {
  z.B.call(this);
  this.lj = a;
  this.oj = this.lj.getContext("2d");
  this.lp = [];
};
var wq = function(a) {
  z.Uh.call(this);
  this.Sw = a;
  this.ex = a.querySelector(".cover-content");
  a.querySelector(".cover-image");
};
var xq = function(a, b, c) {
  var d = a.className.match(RegExp(b + "(\\S*)")), e = (d = d && d[1]) && c.indexOf(d);
  d && -1 != e && (a.className = a.className.replace(b + d, b + c[(e + 1) % c.length]));
};
var yq = function(a, b, c, d) {
  for (var e = [], f = d ? d.endIndex : 0, h = d ? d.mm : 0, k = 0, l = f;l < b.length;l++) {
    k && (k += 1);
    k += b[l].length;
    if (k > c) {
      break;
    }
    var m = c - k, q = d ? Math.abs(k - d.length) : 0;
    e.unshift({AK:d, startIndex:f, endIndex:l + 1, length:k, mm:h + m * m + q * q});
  }
  if (!e.length) {
    return d;
  }
  d = null;
  for (f = 0;f < e.length;f++) {
    (h = e[f], d && d.mm < h.mm || (h = yq(a, b, c, h), d && !(h.mm < d.mm))) || (d = h);
  }
  return d;
};
var zq = function(a) {
  return'\x3ctextarea class\x3d"post-css-editor-textarea" placeholder\x3d"Type your CSS here"\x3e' + ei(a.Gu) + '\x3c/textarea\x3e\x3cbutton class\x3d"btn" data-action\x3d"install-css"\x3ePreview CSS\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary" data-action\x3d"save-css"\x3eSave CSS\x3c/button\x3e';
};
var Aq = function(a) {
  return'\x3cspan class\x3d"post-css-editor-link" data-action\x3d"popover-css-editor"\x3eEdit CSS' + (a.Gu ? " (!)" : "") + "\x3c/span\x3e";
};
var Bq = function(a, b, c) {
  z.B.call(this);
  this.da = a;
  this.ap = b;
  this.Yh = null;
  this.Ja = a.get("popover");
  this.Xl = a.get("request");
  a = window.document.createElement("div");
  a.className = "post-css-editor";
  c.appendChild(a);
  this.X = a;
  this.lc();
};
var Cq = function(a, b) {
  z.B.call(this);
  this.Aj = a;
  this.hd = b;
};
z.Dq = function() {
  z.B.call(this);
  this.Ua = {};
};
var Eq = function(a, b, c) {
  this.da = a;
  this.Z = a.get("datastore");
  this.ba = a.get("app");
  this.U = b;
  this.Ak = c;
  this.Ua = new z.Dq;
};
var Fq = function(a) {
  var b = Ii;
  a.Ak = new Cq(a.Ak.Aj, b);
  return b;
};
var Gq = function(a) {
  var b = a.ye();
  return b ? (0,z.H)(Ei, {post:b.Pa(), nc:a.fa.Am("preferredCollection")}) : null;
};
var Hq = function(a) {
  return ".surfaces-transitioning {height: " + (0,z.O)(a.dC.height) + "px; width: " + (0,z.O)(a.dC.width) + "px;}.surfaces-transitioning .surface-container {min-height: " + (0,z.O)(a.oC.height) + "px; min-width: " + (0,z.O)(a.oC.width) + "px; top: " + (0,z.O)(a.lq.top) + "px; left: " + (0,z.O)(a.lq.left) + "px;}.surfaces-transitioning .surface-transitioning-in .surface-content, .surfaces-transitioning .surface-transitioning-out .surface-content {height: " + (0,z.O)(a.pC.height) + "px; width: " + 
  (0,z.O)(a.pC.width) + "px; position: relative;}.surfaces-transitioning .surface-transitioning-in .surface-content {margin-top: " + (0,z.O)(-1 * a.uC.top) + "px; margin-left: " + (0,z.O)(-1 * a.uC.left) + "px;}.surfaces-transitioning .surface-transitioning-out .surface-content {margin-top: " + (0,z.O)(-1 * a.lq.top) + "px; margin-left: " + (0,z.O)(-1 * a.lq.left) + "px;}";
};
var Iq = function(a, b) {
  this.X = a;
  (0,z.w)(this.X, "surface-container");
  this.Mw = null;
  this.Ka = b ? (0,z.og)(a) : null;
  if (this.Ka) {
    var c = window.document.createElement("div");
    c.className = "surface-scroll-overlay";
    this.Ka.appendChild(c);
  }
  this.Zt = null;
  this.tp = {};
};
var Jq = function(a) {
  a.style.display = "block";
  a.style.visibility = "visible";
};
var Kq = function(a) {
  a.style.visibility = "hidden";
  a.style.display = "none";
};
var Lq = function(a, b) {
  b && Jq(b);
  a && Kq(a);
  return null;
};
var Mq = function(a, b, c) {
  var d = new z.nc, e = Nq(a, c), f = b ? Nq(a, b) : {top:0, left:0};
  (0,z.w)(c, "surface-transitioning-in");
  b && (0,z.w)(b, "surface-transitioning-out");
  c = a.Ka == window.document.body ? new hd(window.innerWidth, window.innerHeight) : new hd(0, 0);
  b = new hd(a.Ka.offsetWidth, a.Ka.offsetHeight);
  c = new hd(Math.max(c.width, b.width), Math.max(c.height, b.height));
  var h = c.ia();
  h.width += Math.max(e.left, f.left);
  h.height += Math.max(e.top, f.top);
  f = (0,z.H)(Hq, {uC:e, lq:f, oC:c, dC:h, pC:b});
  a.Zt ? wf(a.Zt, f) : a.Zt = (0,z.vf)(f);
  (0,z.w)(a.Ka, "surfaces-transitioning");
  Oq(function() {
    (0,z.w)(this.X, "surface-container-fixed");
    Oq(function() {
      lg(this.Ka, e.left, e.top);
      d.Ba();
    }, this);
  }, a);
  return d;
};
var Nq = function(a, b) {
  var c = b.id;
  a.tp[c] || (a.tp[c] = {top:0, left:0});
  return a.tp[c];
};
var Oq = function(a, b) {
  (0,z.Qm)(a, b);
};
var Pq = function(a) {
  return "Story “" + (0,z.O)(a.title) + "” successfully reported as spam.";
};
var Qq = function(a) {
  return "There was a problem reporting “" + (0,z.O)(a.title) + "” as spam.";
};
var Rq = function(a) {
  return'\x3cp class\x3d"butter-bar-message"\x3e' + (0,z.pi)(a.tB) + (a.XJ ? '\x3cspan class\x3d"butter-bar-actions"\x3e・\x3cbutton class\x3d"btn btn-chromeless butter-bar-action link link-butter" data-action\x3d"undo"\x3eUndo\x3c/button\x3e\x3c/span\x3e' : "") + (a.bw ? ' \x3cbutton data-action\x3d"butter-bar-reload" class\x3d"butter-bar-action btn btn-chromeless link link-underline"\x3eSync editors.\x3c/button\x3e' : "") + (a.qv ? '\x3cbutton data-action\x3d"butter-bar-dismiss" class\x3d"butter-bar-dismiss btn-chromeless icons icons-remove link link-accent"\x3e\x3c/button\x3e' : 
  "") + "\x3c/p\x3e";
};
var Sq = function(a) {
  var b = "";
  a = a.eK;
  for (var c = a.length, d = 0;d < c;d++) {
    b += '\x3cspan class\x3d"cover-line"\x3e' + (0,z.O)(a[d]) + "\x3c/span\x3e";
  }
  return b;
};
z.Tq = function(a, b, c) {
  var d = a.post.content.image, e = "full" == d.backgroundSize, f = d.imageId ? d.backgroundSize : "inline", h = c.variants.covers_plus && "edit" != a.mode && "revert" != a.mode;
  b = "";
  var k = (c.useragent.supportsFullImageSections ? '\x3ccanvas class\x3d"canvas-renderer"\x3e\x3c/canvas\x3e' : "") + ("revert" == a.mode ? '\x3cdiv class\x3d"butter-bar active butter-bar-center"\x3e' + Rq({tB:'Viewing read-only revision ・\x3cbutton data-action\x3d"butter-bar-revert-cancel" class\x3d"butter-bar-action btn btn-chromeless link"\x3eCancel\x3c/button\x3e・\x3cbutton data-action\x3d"butter-bar-revert" class\x3d"butter-bar-action btn btn-chromeless link"\x3eRestore this revision\x3c/button\x3e'}) + 
  "\x3c/div\x3e" : "") + '\x3carticle class\x3d"post-article ' + ("edit" == a.mode ? " grid-breaking" : "") + (0 < a.post.vote ? " has-vote" : "") + (a.post.virtuals.languageTier ? " lang-tier-" + (0,z.P)(a.post.virtuals.languageTier) : "") + (c.useragent.supportsFullImageSections ? " supports-full-image-sections scrolling-region" : "") + (c.variants.covers_plus ? " has-covers-plus cover-layout-" + (0,z.P)(f) : "") + '" data-allow-notes\x3d"' + (0,z.P)(a.post.virtuals.allowNotes) + '"' + (c.useragent.supportsFullImageSections ? 
  ' tabIndex\x3d"-1"' : "") + "\x3e", l = (0,z.L)(a, {gL:h}), m = "", q = l.post.content.image, s = l.contextCollection && l.contextCollection.user && c.currentUser && l.contextCollection.virtuals.canAdminister && "PENDING" == l.postStatus, I, F = "revert" == l.mode ? "History" : "owner" != l.mode || c.variants.can_edit_post ? "edit" == l.mode || l.post.latestPublishedVersion ? "" : "Draft" : "Editing is currently unavailable.";
  I = "" + ("edit" == l.mode || F ? '\x3cdiv class\x3d"metabar-status"\x3e\x3cspan class\x3d"metabar-message' + (F ? " active" : "") + '"\x3e' + (0,z.pi)(F) + "\x3c/span\x3e\x3c/div\x3e" : l.gL && (l.contextCollection || l.post.homeCollection) ? '\x3cdiv class\x3d"metabar-text"\x3e' + po(l) + "\x3c/div\x3e" : "");
  F = '\x3cdiv data-scroll\x3d"post-cover"\x3e' + ("edit" != l.mode ? '\x3cdiv class\x3d"metabar-text"\x3e' + (0,z.O)(Math.ceil(l.post.virtuals.readingTime)) + " min read\x3c/div\x3e" : "") + '\x3cdiv class\x3d"btn-set ' + ("edit" == l.mode ? "distraction-free-component" : "") + '"\x3e' + (!s && c.isAuthenticated && "edit" != l.mode && "owner" != l.mode && "revert" != l.mode && l.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn btn-circle btn-toggle btn-bookmark ' + (l.post.virtuals.isOnReadingList ? 
  "active" : "") + '" data-post-id\x3d"' + (0,z.P)(l.post.id) + '" data-action\x3d"' + (l.post.virtuals.isOnReadingList ? "remove-from" : "add-to") + '-reading-list" data-action-value\x3d"' + (0,z.P)(l.post.id) + '" alt\x3d"Add to bookmarks"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3c/button\x3e' + (c.variants.show_open_in_app && "ios" == c.useragent.os && !c.useragent.isTablet ? '\x3ca href\x3d"medium:/p/' + (0,z.P)(l.post.id) + '" class\x3d"btn btn-circle" alt\x3d"Open in app"\x3e\x3cspan class\x3d"icons icons-share no-user-select"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") : "") + (!s && "edit" != l.mode && "revert" != l.mode && c.isAuthenticated && c.variants.can_cross_post && c.useragent.supportsDesktopEdit && l.post.latestPublishedVersion ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn hide show-cross-poster crosspost-to-collection"\x3eAdd/Remove from Collections\x3c/button\x3e' : "");
  switch(l.mode) {
    case "owner":
      var aa = "", wb = Ei({collection:l.contextCollection, post:l.post}), aa = aa + (c.variants.can_edit_post && c.supportsEdit ? "owner" == l.mode && l.post.isPublished && l.post.hasUnpublishedEdits ? '\x3ca class\x3d"btn" data-action\x3d"post-edit" data-tooltip\x3d"This post has unpublished edits" href\x3d"' + (0,z.P)((0,z.Q)(wb)) + '/edit"\x3e\x3cspan class\x3d"icons icons-info"\x3e\x3c/span\x3eEdit\x3c/a\x3e' : '\x3ca class\x3d"btn" data-action\x3d"post-edit" href\x3d"' + (0,z.P)((0,z.Q)(wb)) + 
      '/edit"\x3eEdit\x3c/a\x3e' : c.supportsEdit && !c.variants.can_edit_post ? '\x3cbutton class\x3d"btn" disabled\x3d"disabled" title\x3d"Edit mode not supported"\x3eEdit\x3c/button\x3e' : ""), F = F + aa;
      break;
    case "edit":
      F += '\x3cbutton class\x3d"btn btn-delete" title\x3d"Delete" data-action\x3d"delete-post" disabled\x3d"disabled"\x3eDelete\x3c/button\x3e' + (c.variants.revision_history ? '\x3cbutton class\x3d"btn js-btn-history" title\x3d"Choose an older version to revert to" data-action\x3d"history" disabled\x3d"disabled"\x3eHistory\x3c/button\x3e' : "") + (l.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn" title\x3d"Exit edit mode, discarding changes" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e' + 
      (c.variants.disable_publish ? '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publishing is currently disabled" disabled\x3d"disabled"\x3ePublish Changes\x3c/button\x3e' : '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish Changes\x3c/button\x3e') : '\x3cbutton class\x3d"btn btn-share-draft" title\x3d"Share Draft" data-action\x3d"share-draft" disabled\x3d"disabled"\x3eShare Draft\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary btn-publish" disabled\x3d"disabled"' + 
      (c.variants.disable_publish ? 'title\x3d"Publishing is currently disabled"' : (l.post.intendedCollectionId ? 'title\x3d"Publish and submit to collection"' : 'title\x3d"Publish"') + 'data-action\x3d"publish"') + "\x3e" + (l.post.intendedCollectionId ? "Submit to Collection" : "Publish") + "\x3c/button\x3e");
  }
  F += "\x3c/div\x3e\x3c/div\x3e";
  q = q.imageId && ("contain" != q.backgroundSize || c.useragent.isMobile);
  aa = s ? "metabar-submission" : "";
  s ? s = '\x3cdiv class\x3d"metabar-text"\x3eStory submitted to \x3ca class\x3d"metabar-link" href\x3d"/' + (0,z.P)(l.contextCollection.slug) + '"\x3e' + (0,z.O)(l.contextCollection.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"btn-set"\x3e\x3cbutton class\x3d"btn" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn" title\x3d"Don’t Accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e\x3c/div\x3e' : 
  (s = l.post.virtuals.notesBySocialRecommends, s = "" + (c.variants.enable_recommend_notes && s && s.length ? '\x3cdiv class\x3d"notes-recommendations post-content layout-single-column"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e\x3cspan class\x3d"link link-secondary align-left"\x3e' + (0,z.eo)({user:s[0].authorUser, vc:"avatar-icon post-item-meta-avatar"}, c) + '\x3c/span\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e\x3ccite\x3e\x3ca class\x3d"link" href\x3d"/@' + 
  (0,z.P)(s[0].authorUser.username) + '"\x3e' + (0,z.O)(s[0].authorUser.name) + "\x3c/a\x3e\x3c/cite\x3e“" + (0,z.O)(s[0].content) + "”\x3c/blockquote\x3e\x3c/div\x3e" : ""));
  m += (0,z.Fo)((0,z.L)(l, {kb:q, Ov:aa, gq:I, iA:s, gh:F}));
  k += m;
  h ? (f = (0,z.L)(a, {image:d, layout:f}), l = $h("f", f.layout)(f, null, c), s = '\x3cdiv class\x3d"cover-content cover-style-sans layout-single-column layout-foreground"\x3e\x3cheader class\x3d"post-header notes-header-source align-block"\x3e\x3ch1 itemprop\x3d"name" name\x3d"title" class\x3d"post-title"\x3e' + (0,z.O)(f.post.title) + "\x3c/h1\x3e", F = f.post.content && f.post.content.subtitle, s += ("edit" == f.mode || F ? '\x3ch2 name\x3d"subtitle" class\x3d"post-field subtitle post-subtitle"\x3e' + 
  (0,z.O)(F) + "\x3c/h2\x3e" : "") + "\x3c/header\x3e" + ("edit" != f.mode && "revert" != f.mode ? '\x3cdiv class\x3d"cover-author"\x3e\x3cdiv class\x3d"cover-author-avatar"\x3e' + ho({user:f.post.creator, vc:"avatar avatar-chromeless avatar-small", Rb:"cover-author-avatar-link"}, c) + "\x3c/div\x3e" + oo(f, c) + "\x3c/div\x3e" : "") + "\x3c/div\x3e", f = l + s) : f = e ? Uq((0,z.L)(a, {image:d}), c) : "";
  d = k + f + '\x3csection class\x3d"post-page-wrapper ' + (d.backgroundSize ? "post-page-wrapper-" + (0,z.P)(d.backgroundSize) : "") + '"\x3e\x3cdiv class\x3d"post-page-wrapper-inner"\x3e';
  e = e || h ? "" : ("edit" == a.mode || a.post.content.image.imageId ? Uq((0,z.L)(a, {image:a.post.content.image}), c) : "") + '\x3cdiv class\x3d"layout-single-column"\x3e' + Vq(a, c) + "\x3c/div\x3e";
  e = d + e;
  h = '\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"post-content-inner"\x3e\x3cdiv class\x3d"notes-source"\x3e\x3cdiv class\x3d"post-field body"' + (a.PK ? 'data-sections\x3d"' + (0,z.P)(a.PK) + '"' : "") + "\x3e" + (0,z.pi)(a.PB) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"post-follow-ups post-supplemental layout-single-column"\x3e\x3c/div\x3e';
  if ("edit" != a.mode && "revert" != a.mode) {
    d = "";
    a.post.latestPublishedVersion && (d += '\x3cbutton class\x3d"btn btn-large btn-toggle btn-primary btn-suffix recommend-button no-user-select ' + (0 < a.post.vote ? "active" : "") + '"', c.isAuthenticated ? (f = c.useragent.supportsInteract && c.variants.can_vote ? 0 < a.post.vote ? "unvote" : "upvote" : "disabled", d += 'data-action\x3d"' + (0,z.P)(f) + '" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"' + ("disabled" == f ? 'disabled\x3d"disabled"' : "")) : d += Wn({Fk:"/_/vote/" + (a.post.homeCollection ? 
    (0,z.O)(a.post.homeCollection.slug) : "p") + "/" + (0,z.O)(a.post.id), prompt:"Sign in to recommend", sn:"recommend", Tq:!0}), d += 'title\x3d"Recommend this post"\x3e\x3cspan class\x3d"icons icons-heart"\x3e\x3c/span\x3e\x3cspan class\x3d"btn-label recommend-button-label" data-suffix\x3d"ed"\x3eRecommend\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"vote-widget"\x3e\x3c/div\x3e');
    d = '\x3cdiv class\x3d"post-footer-actions post-supplemental layout-single-column"\x3e\x3cdiv class\x3d"btn-set"\x3e' + d + '\x3cdiv class\x3d"post-footer-secondary-actions"\x3e' + (a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Twitter" data-action\x3d"share-on-twitter" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-twitter"\x3e\x3c/i\x3e\x3c/a\x3e' + (c.variants.can_share_to_facebook ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Facebook" data-action\x3d"share-on-facebook" data-action-value\x3d"' + 
    (0,z.P)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-facebook"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + (c.isAuthenticated ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"More actions" data-action\x3d"more-actions" \x3e\x3ci class\x3d"icons icons-more"\x3e\x3c/i\x3e\x3c/a\x3e' : "") : "") + "\x3c/div\x3e\x3c/div\x3e";
    f = a.contextCollection ? a.contextCollection : a.post.homeCollection;
    k = a.contextCollection && a.contextCollection.user && c.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus;
    l = "";
    s = '\x3cdiv class\x3d"post-footer-cards"\x3e\x3cdiv ' + (f ? 'class\x3d"layout-multi-column-half"' : "") + "\x3e";
    F = a.post.displayAuthor ? "Published by" : "Written by";
    I = a.post.creator;
    m = '\x3cdiv class\x3d"card-description-additional card-published"\x3e' + ((a.post.latestPublishedAt ? a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.virtuals.latestPublishedAtEnglish != a.post.virtuals.firstPublishedAtEnglish ? '\x3cspan data-tooltip\x3d"Originally published ' + (0,z.P)(a.post.virtuals.firstPublishedAtEnglish) + '"\x3eUpdated\x3c/span\x3e' : "\x3cspan\x3ePublished\x3c/span\x3e" : "\x3cspan\x3eDraft\x3c/span\x3e") + ' \x3cspan\x3e\x3ctime class\x3d"post-date"\x3e' + 
    (a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.latestPublishedAt ? (0,z.O)(a.post.virtuals.latestPublishedAtEnglish) : a.post.firstPublishedAt ? (0,z.O)(a.post.virtuals.firstPublishedAtEnglish) : a.post.createdAt ? (0,z.O)(a.post.virtuals.createdAtEnglish) : "") + "\x3c/time\x3e\x3c/span\x3e") + "\x3c/div\x3e";
    q = "";
    if (a.collaborators && a.collaborators.length) {
      for (var q = q + ('\x3cdiv class\x3d"post-collaborators"\x3e\x3cspan class\x3d"post-collaborators-heading" data-tooltip\x3d"The following people helped ' + (0,z.P)(a.post.creator.name) + ' with this post by adding notes to provide feedback before the post was published."\x3eThanks to:\x3c/span\x3e '), aa = a.collaborators, wb = aa.length, uc = 0;uc < wb;uc++) {
        var xb = aa[uc], q = q + ('\x3cspan class\x3d"post-collaborator-item post-collaborator-' + (0,z.P)(xb.state) + '"\x3e\x3ca class\x3d"post-collaborator-link link ' + ("dnf" == xb.user.username ? "post-collaborator-throb" : "") + '" href\x3d"/@' + (0,z.P)(xb.user.username) + '"\x3e' + (0,z.O)(xb.user.name) + "\x3c/a\x3e" + (a.post.creator.userId == c.currentUser.userId ? "hidden-author" == xb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + 
        (0,z.P)(xb.user.userId) + '"\x3e(show)\x3c/button\x3e' : "visible" == xb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.P)(xb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : '\x3cspan class\x3d"post-collaborator-decline"\x3e(declined)\x3c/span\x3e' : xb.user.userId == c.currentUser.userId ? "hidden-collab" == xb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.P)(xb.user.userId) + 
        '"\x3e(show)\x3c/button\x3e' : "visible" == xb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.P)(xb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : "" : "") + "\x3c/span\x3e")
      }
      q += "\x3c/div\x3e";
    }
    c = l + (s + Qo({heading:F, $p:Ro({user:I, Xz:m + q + (a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-footer-cover-caption"\x3e\x3cspan class\x3d"post-footer-cover-caption-heading"\x3eCover photo:\x3c/span\x3e ' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : "")}, c)}) + "\x3c/div\x3e" + (f ? '\x3cdiv class\x3d"layout-multi-column-half"\x3e' + Qo({heading:k ? "Submitted to" : "Published in", $p:So({collection:f, post:a.post, dA:k ? '\x3cbutton class\x3d"btn btn-small" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Don’t Accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e' : 
    Xn({collection:f, Fq:!0, YA:!0}, 0, c)}, c)}) + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
    c = d + c;
  } else {
    c = "";
  }
  return a = b + (e + (h + c + "\x3c/div\x3e\x3c/div\x3e") + "\x3c/div\x3e\x3c/section\x3e" + ("edit" == a.mode ? '\x3cfooter class\x3d"post-footer-editor"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-new-section"\x3e\x3cspan data-tooltip\x3d"Add new section" class\x3d"icons icons-add-circled"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/footer\x3e' : "edit" != a.mode ? '\x3cfooter class\x3d"post-footer post-supplemental"\x3e\x3c/footer\x3e' : "") + "\x3c/article\x3e");
};
var Vq = function(a, b) {
  var c = '\x3cheader class\x3d"post-header notes-header-source"\x3e\x3ch1 itemprop\x3d"name" name\x3d"title" class\x3d"post-title"\x3e' + (0,z.O)(a.post.title) + "\x3c/h1\x3e", d = a.post.content && a.post.content.subtitle;
  return c += ("edit" == a.mode || d ? '\x3ch2 name\x3d"subtitle" class\x3d"post-field subtitle post-subtitle"\x3e' + (0,z.O)(d) + "\x3c/h2\x3e" : "") + ("edit" != a.mode && "revert" != a.mode ? lo((0,z.L)(a, {aj:!0, ZA:!0, DJ:!0, TK:!a.imageUrl}), b) : "") + "\x3c/header\x3e";
};
var Uq = function(a, b) {
  var c = "", d = "full" == a.image.backgroundSize, e = (0,z.zi)((0,z.L)(a.image, {cropType:"t", verticalGradient:d ? "29/81/55" : null}), 0, b), f = '\x3cdiv class\x3d"post-field image image-picker-wrap' + (a.image.backgroundSize ? " background-size-" + (0,z.P)(a.image.backgroundSize) : "") + (d ? e ? " picker-layout-fill" : " picker-layout-inline" : "") + ("contain" == a.image.backgroundSize ? " layout-single-column" : "") + '" data-url\x3d"' + (0,z.P)((0,z.Q)(e)) + '" data-image-id\x3d"' + (a.image.imageId ? 
  (0,z.P)(a.image.imageId) : "") + '"', h;
  h = a.image;
  h = (h.originalWidth ? ' data-width\x3d"' + (0,z.O)(h.originalWidth) + '"' : "") + (h.originalHeight ? ' data-height\x3d"' + (0,z.O)(h.originalHeight) + '"' : "") + (h.filter ? ' data-filter\x3d"' + (0,z.O)(h.filter) + '"' : "") + (h.backgroundSize ? ' data-image-style\x3d"' + (0,z.O)(h.backgroundSize) + '"' : "");
  f = f + h + "\x3e";
  d ? (d = (0,z.L)(a, {imageUrl:e}), d = ("edit" == d.mode ? wi() + '\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image" data-tooltip\x3d"Remove the cover photo."\x3e\x3c/button\x3e' : "") + Wq(d) + '\x3cdiv class\x3d"story-cover" data-load-img\x3d".post-header-image-cover"\x3e\x3cdiv class\x3d"picker-target-clone"\x3e\x3c/div\x3e\x3cdiv class\x3d"picker-target story-cover-image"' + (d.imageUrl ? ' style\x3d"background-image: url(' + 
  (0,z.P)((0,z.Q)(d.imageUrl)) + ');"' : "") + "\x3e\x3c/div\x3e" + Xq(d, b) + '\x3cdiv class\x3d"picker-content story-cover-content" data-scroll\x3d"post-cover" ' + (d.imageUrl ? "" : ' data-scroll-disabled\x3d"true"') + '\x3e\x3cdiv class\x3d"post-content layout-single-column"\x3e' + ("edit" == d.mode ? (0,z.yi)(null) + (0,z.xi)() : "") + Vq(d, b) + "\x3c/div\x3e" + (d.imageUrl ? b.variants.can_resume_from_last_read_location && d.post.virtuals.userPostRelation && d.post.virtuals.userPostRelation.lastReadParagraphName ? 
  '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"resume" data-action-value\x3d"' + (0,z.P)(d.post.virtuals.userPostRelation.lastReadParagraphName) + '" data-tooltip\x3d"Resume reading"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"scroll-to-post-start"\x3e\x3c/span\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e") : (d = (0,z.L)(a, {imageUrl:e}), e = '\x3cdiv class\x3d"post-header-image-wrap" data-load-img\x3d".post-header-image-cover"\x3e', "edit" == d.mode ? e += '\x3cdiv class\x3d"cover-edit"\x3e' + 
  Yq() + '\x3cimg class\x3d"picker-target post-header-image-cover" src\x3d"' + (0,z.P)((0,z.Q)(d.imageUrl)) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"contain-edit"\x3e\x3cimg class\x3d"picker-target post-header-image-contain" src\x3d"' + (0,z.P)((0,z.Q)(d.imageUrl)) + '" width\x3d"' + (0,z.P)(b.postColumnWidth) + '" ' + (d.image.imageId ? "" : 'style\x3d"display: none"') + "\x3e\x3c/div\x3e" : (e += Xq(d, b), "cover" == d.image.backgroundSize ? e += Yq() + '\x3cimg class\x3d"post-header-image-cover" src\x3d"' + 
  (0,z.P)((0,z.Q)(d.imageUrl)) + '"\x3e' : (e += '\x3cimg class\x3d"post-header-image-contain" src\x3d"' + (0,z.P)((0,z.Q)(d.imageUrl)) + '" alt\x3d"' + (d.post.content ? (0,z.P)(d.post.content.caption) : "") + '"  ', d.image.originalWidth && "contain" == d.image.backgroundSize && (h = b.postColumnWidth * d.image.originalHeight / d.image.originalWidth, e += 'width\x3d"' + (0,z.P)(b.postColumnWidth) + '" height\x3d"' + (0,z.P)(h) + '"'), e += "\x3e")), d = e += "\x3c/div\x3e" + Wq(d) + ("edit" == 
  d.mode ? (0,z.yi)({vC:"Add optional feature image"}) + '\x3cdiv class\x3d"replace-image-message distraction-free-component" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"message"\x3eDrag ‘n’ drop or click to replace image\x3c/span\x3e\x3c/div\x3e\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image"\x3e\x3c/button\x3e\x3cbutton class\x3d"resize-header-image btn-chromeless distraction-free-component" data-action\x3d"toggle-background-size"\x3e\x3cspan class\x3d"icons icons-enlarge enlarge-btn"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-shrink shrink-btn"\x3e\x3c/span\x3e\x3c/button\x3e' + 
  wi() + (0,z.xi)() : ""));
  return c + (f + d + "\x3c/div\x3e");
};
var Wq = function(a) {
  return "edit" == a.mode ? '\x3cdiv class\x3d"post-field caption" data-action\x3d"dummy"\x3e' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-field caption caption-truncated" title\x3d"' + (0,z.P)(a.post.content.caption) + '"\x3e' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : "";
};
var Zq = function(a, b, c) {
  b = "" + ('\x3cul class\x3d"upvoters ' + (a.users.length ? "fade" : "") + '"\x3e');
  for (var d = Math.min(a.users.length, 3), e = 0;e < d;e++) {
    b += '\x3cli class\x3d"upvoters-item ' + (c.currentUser.userId == a.users[e].userId ? "js-upvoters-item-current-user" : "") + '"\x3e' + (0,z.eo)({user:a.users[e], Rb:"avatar-chromeless avatar-icon"}, c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var Xq = function(a, b) {
  return "revert" != a.mode ? '\x3cdiv class\x3d"post-preview layout-foreground' + (a.image && a.image.imageId ? " post-preview-with-image" : "") + (a.image && a.image.filter ? " post-preview-filtered" : " post-preview-unfiltered") + '"\x3e\x3cdiv class\x3d"post-preview-content layout-single-column align-middle layout-fill-height"\x3e\x3cdiv class\x3d"align-block layout-fill-width"\x3e\x3cdiv class\x3d"post-preview-description"\x3e' + (b.isAuthenticated ? "Next in your reading list" : "Next in trending") + 
  '\x3c/div\x3e\x3ch3 class\x3d"post-preview-title"\x3e' + (0,z.O)(a.post.title) + '\x3c/h3\x3e\x3ch4 class\x3d"post-preview-subtitle"\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/h4\x3e" + lo((0,z.L)(a, {aj:!0, Qk:!0, ZA:!0}), b) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" : "";
};
var Yq = function() {
  return'\x3cimg class\x3d"post-header-image-aspect-ratio" src\x3d"data:image/gif;base64,R0lGODlhMgAVAPAAAP///wAAACH5BAEAAAAALAAAAAAyABUAAAIfhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8dTAQA7"\x3e';
};
var $q = function(a) {
  return'\x3cdiv class\x3d"post-to-post ' + (a.CJ ? "hide" : "") + '" data-action\x3d"next-post"\x3e\x3cspan class\x3d"icons icons-read-next post-to-post-icon"\x3e\x3c/span\x3e\x3cdiv class\x3d"post-to-post-preview"\x3e\x3cdiv class\x3d"post-content layout-single-column"\x3e\x3cdiv class\x3d"post-to-post-reason"\x3eRead next\x3c/div\x3e\x3cdiv class\x3d"post-to-post-title"\x3e' + (0,z.O)(a.post.title) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
};
var ar = function(a) {
  var b = "";
  a = Ei(a);
  return b += '\x3ca class\x3d"footer-post-preview post-preview-enabled" href\x3d"' + (0,z.P)((0,z.Q)(a)) + '" data-action\x3d"next-post"\x3e\x3c/a\x3e';
};
var br = function(a, b, c) {
  return a.SK ? Uq((0,z.L)(a, {image:a.post.virtuals.previewImage}), c) : Xq(a, c);
};
var cr = function(a, b, c, d, e) {
  Eq.call(this, a, c, d);
  this.ra = a.get("dom-monitor");
  this.$f = b;
  this.me = e;
  this.Yt = null;
  this.Hq = dr;
  this.source = "read-next";
};
var er = function(a) {
  a = a.ye();
  if (!a) {
    return!1;
  }
  a = a.get("virtuals.previewImage");
  return a.imageId && "contain" != a.backgroundSize;
};
var fr = function(a, b, c) {
  var d = new z.Tg(b, {name:"fade-back-out", duration:400});
  (0,z.r)(d, function() {
    b.style.visibility = "hidden";
    b.style.display = "none";
    (0,z.tg)(b);
    (0,z.gr)(c, ["post-preview-enabled", "transition-from-post-footer"]);
    (0,z.lf)(c, "transform", "");
  });
  a = (0,z.sg)(a.Ke);
  c.style.display = "block";
  c.style.visibility = "visible";
  (0,z.lf)(c, "transform", "translateY(" + a.top + "px)");
  (0,z.hr)(c, ["post-preview-enabled", "pre-transition-from-post-footer"]);
  (0,z.tg)(c);
  (0,z.Mc)(c, "pre-transition-from-post-footer", "transition-from-post-footer");
  (0,z.lf)(c, "transform", "translateY(0)");
  (a = c.querySelector(".picker-content.story-cover-content")) && (new z.Tg(a, {name:"fade-up-in", duration:600})).start();
  d.start();
  return d;
};
var ir = function(a, b) {
  var c = new z.Tg(a, {name:"fade-back-out", duration:500}), d = new z.Tg(b, {name:"slide-up-in", duration:500});
  (0,z.r)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.tg)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.tg)(b);
  d.start();
  c.start();
  return d;
};
var jr = function(a, b, c, d) {
  Eq.call(this, a, c, d);
  this.$f = b;
  this.Hq = kr;
  this.source = "skip-post";
};
z.lr = function(a) {
  return!!mr[a.tagName] && !nr(a) && !(0,z.or)(a) && !(0,z.pr)(a) && !(0,z.Lc)(a, "section-divider");
};
z.qr = function(a) {
  return "LI" == a.tagName ? !0 : (0,z.ug)(a) ? !1 : (0,z.lr)(a);
};
var nr = function(a) {
  return "DIV" === a.tagName && (0,z.Lc)(a, "section-inner");
};
z.rr = function(a) {
  return(0,z.Va)(a.childNodes, nr);
};
z.or = function(a) {
  return "DIV" === a.tagName && (0,z.Lc)(a, "section-background");
};
z.pr = function(a) {
  return!!a.parentNode && (0,z.or)(a.parentNode);
};
var sr = function(a) {
  return "SECTION" === a.tagName;
};
z.tr = function(a, b) {
  return(0,z.kg)(a, sr, b);
};
z.ur = function(a, b, c) {
  (0,z.vr)(a, z.qr, (0,z.Jb)(b, (0,z.Ib)(!0)), c);
};
z.wr = function(a) {
  var b = [];
  (0,z.ur)(a, b.push, b);
  return b;
};
z.xr = function(a) {
  var b = [];
  a = (0,z.ej)(a.childNodes);
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    "SECTION" === d.tagName && b.push(d);
  }
  return b;
};
z.vr = function(a, b, c, d) {
  if ("SECTION" === a.tagName) {
    var e = (0,z.rr)(a);
    if (e) {
      return(0,z.vr)(e, b, c, d);
    }
  }
  for (var e = 0, f = a.children.length;e < f;e++) {
    var h = a.children[e], k = h.tagName, l = "SECTION" == k;
    if ("OL" == k || "UL" == k || l) {
      if ((0,z.vr)(h, b, c, d)) {
        continue;
      } else {
        return!1;
      }
    }
    if (b(h) && !c.call(d, h)) {
      return!1;
    }
  }
  return!0;
};
z.yr = function(a) {
  var b = a.tagName;
  if ("BLOCKQUOTE" == b) {
    return(0,z.Lc)(a, "pullquote") ? 7 : 6;
  }
  if ("LI" == b) {
    var c = a.parentNode && a.parentNode.tagName;
    if ("UL" == c) {
      return 9;
    }
    if ("OL" == c) {
      return 10;
    }
  }
  if ("H1" == b) {
    return 12;
  }
  if ("H2" == b) {
    return 2;
  }
  if ("H3" == b) {
    return 3;
  }
  if ("PRE" == b) {
    return 8;
  }
  if ("HR" == b) {
    return 5;
  }
  if ("P" == b || "DIV" == b || "FIGURE" == b) {
    return 0 !== a.getElementsByTagName("IMG").length ? 4 : 0 !== a.getElementsByTagName("iframe").length ? 11 : 1;
  }
  throw Error("invalid node " + b);
};
var zr = function(a) {
  var b = a.tagName;
  if ("STRONG" == b || "B" == b) {
    return 1;
  }
  if ("EM" == b || "I" == b) {
    return 2;
  }
  if ("A" == b) {
    return 3;
  }
  if ("SPAN" == b) {
    if (a.getAttribute("name") && (0,z.Lc)(a, "notes-highlight")) {
      return 4;
    }
    if ((0,z.Lc)(a, "warning")) {
      return 5;
    }
  }
  return null;
};
z.Ar = function(a) {
  return a.hasAttribute("data-has-drop-cap");
};
z.Br = function(a) {
  for (var b = [], c = 0, d = 0;d < a.length;d++) {
    var e = a[d];
    b.push((0,z.Cr)(e, c));
    c += (0,z.wr)(e).length;
  }
  return b;
};
z.Cr = function(a, b) {
  for (var c = (new z.ik).Yb(a.getAttribute("name") || "").Fe(b), d = (0,z.Dr)(a), e = 0;e < d.length;e++) {
    var f = Er[d[e]];
    f && (0,z.lk)(c, Number(f));
    (f = Fr[d[e]]) && (0,z.nk)(c, Number(f));
  }
  if (d = (0,z.Va)(a.childNodes, z.or)) {
    d = (0,z.Gr)(d), d.yb() && (0,z.kk)(c, d);
  }
  return c;
};
z.Hr = function(a, b) {
  var c = (0,z.yr)(a), d = a.getAttribute("name");
  if (4 == c) {
    var e = a.getElementsByTagName("IMG")[0], f = (0,z.Jm)(a.className), c = a.querySelector("figcaption"), e = (0,z.Gr)(e), d = new z.tl(d, "", f, e);
    return c ? Ir(d, c) : d;
  }
  if (11 == c) {
    return e = a.getElementsByTagName("iframe")[0], f = (0,z.Jm)(a.className), c = a.querySelector("figcaption"), e = (new z.ek).Nk(e.getAttribute("data-media-id") || "").kw(Number(e.getAttribute("data-width") || e.width) || 0).jw(Number(e.getAttribute("data-height") || e.height) || 0), d = new ul(d, "", e, f), c ? Ir(d, c) : d;
  }
  d = new z.rl(d, c, "");
  return 5 == c ? d : Ir(d, a, b);
};
z.Gr = function(a) {
  var b = new z.dk, c = Jr(a);
  c && b.De(c);
  (c = Number(a.getAttribute("data-width"))) && b.Zq(c);
  (c = Number(a.getAttribute("data-height"))) && b.Yq(c);
  (c = a.getAttribute("data-image-style")) && b.Lk(c);
  (a = a.getAttribute("data-filter")) && b.vg(a);
  return b;
};
var Jr = function(a) {
  var b = String((0,z.G)("miroUrl")), c = a.getAttribute("data-image-id");
  return c ? c : a.src && (c = jm(b, a.src)) || a.style.backgroundImage && (c = /^url\((.*)\)$/.exec(a.style.backgroundImage)) && (c = jm(b, c[1])) ? c : a.getAttribute("data-delayed-src") && (c = jm(b, a.getAttribute("data-delayed-src"))) ? c : "";
};
var Kr = function(a, b) {
  this.gd = a;
  this.Lz = b;
  this.Bz = [];
  this.Eo = [];
  this.Ud = 0;
};
var Lr = function(a, b, c) {
  a.Bz.push(b);
  b = b.length;
  if (a.Lz) {
    c = (0,z.Gd)(c) ? c : c.parentNode;
    var d = (0,z.pf)(c, "fontWeight");
    (-1 != d.indexOf("bold") || Number(d) && 600 < Number(d)) && (0,z.vl)(a.gd, (0,z.Bl)(1, a.Ud, a.Ud + b));
    "italic" === (0,z.pf)(c, "fontStyle") && (0,z.vl)(a.gd, (0,z.Bl)(2, a.Ud, a.Ud + b));
  }
  a.Ud += b;
};
var Ir = function(a, b, c) {
  var d = new z.Yd(b), e = null;
  c = new Kr(a, !!c);
  for (var f = !1;e = (0,z.Xd)(d);) {
    if (e != b) {
      if (e.nodeType == z.ue) {
        if (!f) {
          var h = e.nodeValue, h = 8 == a.type ? h.replace(/\xA0/g, " ") : h.replace(/[\s\xA0]/g, " ");
          Lr(c, h, e);
        }
      } else {
        if (1 == e.nodeType) {
          if ((0,z.Lc)(e, "drop-cap-editable")) {
            f = !f;
          } else {
            if (!f) {
              var k;
              if (-1 == d.Ec) {
                k = zr(e);
                if (null != k) {
                  var h = c, l = h.Eo.pop();
                  l.end = h.Ud;
                  (!h.Lz || 1 !== k && 2 !== k) && (0,z.vl)(h.gd, l);
                }
                "BR" == e.tagName && Lr(c, "\n", e);
              } else {
                1 == d.Ec && (k = zr(e), 3 == k ? (h = (0,z.fm)(e.href, !1), e = (0,z.zl)(c.Ud, c.Ud, h, e.title, e.rel), c.Eo.push(e)) : 4 == k ? (e = (0,z.Al)(c.Ud, c.Ud, e.getAttribute("name")), c.Eo.push(e)) : k && (e = (0,z.Bl)(k, c.Ud, c.Ud), c.Eo.push(e)));
              }
            }
          }
        }
      }
    }
  }
  a.hasDropCap = (0,z.Ar)(b);
  return c.ea(b.getAttribute("data-default-value"));
};
z.Mr = function(a) {
  a = a.querySelectorAll("iframe");
  (0,z.vd)(a, function(a) {
    var c = (0,z.Hr)(a.parentNode);
    c && (c = ym(c, z.Yf), c = (0,z.yd)(c), c.getAttribute("src") != a.getAttribute("src") && (a.setAttribute("width", c.getAttribute("width")), a.setAttribute("height", c.getAttribute("height")), a.setAttribute("src", c.getAttribute("src"))));
  });
};
z.Nr = function(a) {
  a = (0,z.xr)(a);
  for (var b = (0,z.Br)(a), c = 0;c < a.length;c++) {
    var d = a[c];
    2 == (0,z.mk)(b[c]) && (0,z.tg)(d);
  }
};
var Or = function(a, b) {
  z.B.call(this);
  this.Yf = !1;
  this.xb = (0,z.Eg)(a);
  this.Dz = b;
};
var Pr = function(a) {
  this.Me = a;
};
var Qr = function(a) {
  this.CH = a;
};
var Rr = function(a, b, c) {
  z.Sh.call(this);
  this.vr = b;
  this.da = a;
  this.zD = c || window.document.title;
  this.pp = this.Wo = this.gj = this.Ld = this.ib = null;
  this.Ub = {};
  this.$t = new Iq(window.document.getElementById("container"), !0);
  this.iz = {};
  this.xt = [];
  this.sr = [];
  this.sa = [];
  this.bx = !0;
  this.rp = {};
  window.setInterval(this.zH.bind(this), Sr);
};
var Tr = function(a, b) {
  a.pp = b;
  return a;
};
var Ur = function(a, b) {
  a.xt.push(b);
  return a;
};
var Vr = function(a, b) {
  a.sr.push(b);
  return a;
};
z.Wr = function(a) {
  return a.ib;
};
z.Xr = function(a, b, c) {
  c = c || {};
  return!!a.Ub[b] && a.Ub[b].Bd.vh(b, c, a.Ub[b]);
};
z.Yr = function(a, b) {
  a.gj.hash != b && (a.gj.hash = b, Zr(a, a.ib.Hb(), a.Ld, a.gj, !0));
};
var $r = function(a, b) {
  return(0,z.t)(Gc(), a.ip.bind(a, Um, b, !1));
};
var as = function(a, b, c, d, e) {
  var f = b.path, h = a.pp.sq(f, z.Yf);
  if (h) {
    return as(a, {path:h, hash:b.hash}, c, d, e);
  }
  a.Q("startNav", f, c);
  if (!e && f == a.Ld) {
    return b.hash ? ((0,z.Yr)(a, b.hash), a.Q("historyUpdate"), (0,z.tc)((0,z.Ec)(a.ib), a.ip.bind(a, Um, f, !0))) : $r(a, f);
  }
  var k = c || {};
  k.hash = b.hash || k.hash || "";
  k.Vm = k.Vm || a.Ld;
  k.wn = k.wn || null;
  b = a.ib && a.ib.Xp();
  "string" == typeof b && (b = !(0,window.confirm)(b));
  if (b) {
    return $r(a, f);
  }
  b = bs(a, f, k);
  (0,z.t)(b, function(a) {
    this.Q(Um, f, !1, a);
  }, a);
  a.Wo && (a.Wo.cancel(), a.Wo = null);
  (c = a.ib) && cs(a, a.nx, c);
  var l = new z.nc;
  (0,z.r)(b, function(a) {
    var b = a.Wp(), c = !k.Om;
    b ? ((0,z.r)(b, this.Kz.bind(this, a, k.wn, c)), (0,z.t)(b, this.CE.bind(this, f, a))) : b = this.Kz(a, k.wn, c);
    this.Wo = b;
    (0,z.r)(b, function() {
      Zr(this, a.Hb(), f, k, !!d);
      a.getMetadata() && (0,z.gn)(a.getMetadata());
    }, this);
    (0,z.r)(b, this.wI.bind(this, k, a));
    (0,z.r)(b, this.YD.bind(this, f, k, a));
    (0,z.r)(b, this.ip.bind(this, Um, f, !0));
    (0,z.t)(b, this.ip.bind(this, Um, f, !1));
    b.wi(l);
  }, a);
  (0,z.t)(b, l.Wd, l);
  return l;
};
var cs = function(a, b, c) {
  b && (c = (0,z.Wm)(c)) && (a.iz[b] = {scrollX:c.scrollLeft, scrollY:c.scrollTop});
};
var Zr = function(a, b, c, d, e) {
  b = b || a.zD;
  d.sk || (d.sk = "h" + (0,z.hh)());
  var f = {path:c, isNavigate:!0, data:window.JSON.stringify(d)};
  c = (a.vr + c).replace("//", "/");
  var h;
  if (h = window.location.search) {
    "?" == h.charAt(0) && (h = h.substr(1));
    h = new Qi(h);
    for (var k = h.$e(), l = 0;l < k.length;l++) {
      for (var m = 0;m < a.xt.length;m++) {
        var q = k[l], s = a.xt[m];
        if ("string" == typeof s && q == s || s.test && s.test(q)) {
          h.remove(q);
          break;
        }
      }
    }
    h = h.Dq() ? "" : "?" + h.toString();
  } else {
    h = "";
  }
  c += h;
  d.hash && (c += "#" + d.hash);
  if (ds) {
    try {
      e ? window.history.replaceState(f, b, c) : window.history.pushState(f, b, c);
    } catch (I) {
      (0,z.K)(I);
    }
  }
  window.document.title = b;
  a.nx = d.sk;
};
var es = function(a, b, c) {
  try {
    c.Eb.call(c);
  } catch (d) {
    (0,z.K)(d);
  }
  delete a.Ub[b];
  a.$t.remove(c.qC);
};
var fs = function(a) {
  a = a.split("#");
  return{path:a[0], hash:a[1] || ""};
};
var gs = function(a, b) {
  var c;
  c = a.pp;
  var d = b.split("?")[0];
  (c = (d = hs(c.nt, d)) && d.object) && c.screen ? (d = d.matches, d.path = b, c = {screen:c.screen, Qv:d}) : c = null;
  if (!c) {
    return null;
  }
  d = c.screen;
  return{Qv:c.Qv, hJ:"string" === typeof d ? new Pr(d) : new Qr(d)};
};
var is = function(a, b, c) {
  var d = null;
  (0,z.Xr)(a, b, c) ? d = a.Ub[b] : a.Ub[b] && (c = a.Ub[b], c !== a.ib && es(a, b, c));
  return d;
};
var bs = function(a, b, c, d) {
  if (a.rp[b]) {
    return a.rp[b].Ad();
  }
  var e = is(a, b, c);
  if (e) {
    return(0,z.Ec)(e);
  }
  var f = gs(a, b);
  if (!f) {
    return(0,z.Fc)(new js(b));
  }
  var e = f.hJ, f = f.Qv, h = jq(a.da), e = e.create(h, f, c), e = e instanceof z.nc ? e.Ad() : (0,z.Ec)(e);
  a.rp[b] = e;
  (0,z.tc)(e, function() {
    delete this.rp[b];
  }, a);
  (0,z.r)(e, function(a) {
    this.Ub[b] = a;
    var e = !this.ib, f = a.NA();
    e && c.sk && cs(this, c.sk, a);
    var h = this.$t, s = "_obv.shell._surface_" + ks++, I = wg("div", {id:s, "class":"surface"});
    e ? Jq(I) : Kq(I);
    vg(I, f);
    (0,z.w)(void 0 != I.firstElementChild ? I.firstElementChild : (0,z.Fd)(I.firstChild, !0), "surface-content");
    vg(h.X, I);
    a.qC = s;
    d && (a.Bd = new cn(a.Bd));
  }, a);
  return e.Ad();
};
var ls = function(a, b, c) {
  var d = a.pp.sq(b, z.Yf);
  if (d) {
    return ls(a, d, c);
  }
  b = fs(b).path;
  return b == a.Ld ? (0,z.Ec)(a.ib) : bs(a, b, c || {}, !0);
};
var js = function(a) {
  z.ya.call(this, "No screen or factory for " + a);
  this.path = a;
};
var fp = function(a) {
  return'Story added to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.nc) + '"\x3e' + (0,z.O)(a.Wj) + "\x3c/a\x3e";
};
var lp = function(a) {
  return'Post removed from \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.nc) + '"\x3e' + (0,z.O)(a.Wj) + "\x3c/a\x3e";
};
var Yp = function(a) {
  return'Post was not accepted to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.nc) + '"\x3e' + (0,z.O)(a.Wj) + "\x3c/a\x3e";
};
var ms = function(a) {
  return(0,z.O)(a.name) + " was successfully blacklisted";
};
var ns = function(a) {
  return(0,z.O)(a.name) + " could not be blacklisted";
};
var os = function(a) {
  return "Verification email sent to " + (0,z.O)(a.email) + '. \x3cbutton class\x3d"btn btn-chromeless link-butter" title\x3d"Change email" data-action\x3d"butter-bar-action"\x3eChange email\x3c/button\x3e';
};
var hp = function() {
  return "Sorry, adding the story to the collection failed.";
};
var np = function() {
  return "Sorry, removing the story from the collection failed.";
};
var ps = function(a) {
  a = a || {};
  return a.hR ? "Oops! Please check the email address to make sure it’s formatted correctly." : "Oops! Please check the email addresses to make sure they’re formatted correctly.";
};
var qs = function(a) {
  this.da = a;
  this.Nh = null;
};
z.cp = function(a, b, c) {
  return function(a) {
    a && a instanceof z.Hc || (c || (0,z.K)(a), this.open({title:"Uh oh!", bodyHtml:b, type:z.Ki}));
  }.bind(a);
};
var rs = function(a, b, c, d) {
  z.Sh.call(this);
  this.da = a;
  this.pl = !!c;
  this.TD = !!d;
  a = window.document.createElement("div");
  a.innerHTML = '\x3cdiv class\x3d"overlay"\x3e' + yo(b, void 0) + "\x3c/div\x3e";
  this.cc = b.type || "";
  this.fx = [];
  this.X = a.children[0];
  this.W = this.X.getElementsByClassName("overlay-dialog")[0];
  this.TD || (0,z.J)(this.X, "click", function(a) {
    a.target === this.X && this.close();
  }, this);
  this.da.get("app").C(Um, this.close, this);
  (0,z.Eg)(this.X).D("overlay-close", this.close, this).D("overlay-confirm", this.vD, this).D("overlay-cancel", this.kj, this).D("overlay-refresh", this.jp, this).D("overlay-submit", this.bI, this).D("overlay-next", this.sy, this);
};
var ss = function(a) {
  this.Qa = a.get("butter-bar");
  this.W = a.get("dialog");
  this.ga = a.get("request");
};
var ts = function(a, b, c) {
  Or.call(this, a, "share-by-email");
  this.LD = b.get("email");
  this.za = c;
};
var us = function(a, b, c) {
  z.Uh.call(this);
  this.ga = a.get("request");
  this.ra = a.get("dom-monitor");
  this.ke = b;
  this.kt = (0,z.wr)(b.querySelector(".body"));
  this.za = c;
  this.zo = this.ay = 0;
  this.Xo = null;
  this.px = (0,z.Om)(vs, this.cz, this);
};
var ws = function(a) {
  return "\x3cdiv class\x3d'highlight-menu-inner'\x3e\x3cul class\x3d\"highlight-menu-buttons\"\x3e" + (a.mw ? '\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.UK ? '\x3cli class\x3d"highlight-menu-button highlight-menu-twitter"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"twitter"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + "\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d'highlight-menu-arrow-clip'\x3e\x3cspan class\x3d'highlight-menu-arrow'\x3e\x3c/span\x3e\x3c/div\x3e";
};
z.xs = function() {
  z.Uh.call(this);
  this.jD = !!(0,z.G)("variants.can_see_drop_caps");
  this.fr = (0,z.Om)(ys, this.tI, this);
};
var zs = function(a, b, c) {
  a.In = b;
  a.uz = c;
  a.X = window.document.createElement("div");
  a.X.className = "highlight-menu";
  a.X.innerHTML = (0,z.H)(ws, {UK:a.uz, mw:a.In});
  (0,z.As)(a);
};
z.As = function(a) {
  (0,z.Eg)(a.X).D("*", function(a) {
    this.Q(a.ie, a);
  }, a);
  (0,z.J)(a.X, "mousedown", a.qG, a);
};
var Bs = function() {
  this.zC = {};
};
var hs = function(a, b) {
  return Cs(a, b.replace(/(^\/|\/$)/g, "").split("/"), 0, a.zC, [], null);
};
var Cs = function(a, b, c, d, e, f) {
  if (c >= b.length) {
    if (d && d.object) {
      a = {};
      f && (a["*"] = f);
      for (b = 0;b < d.matches.length;b++) {
        a[d.matches[b]] = e[b];
      }
      return{object:d.object, matches:a};
    }
    return null;
  }
  f = b[c];
  var h = null;
  if (d[f] && (h = Cs(a, b, c + 1, d[f], e, null))) {
    return h;
  }
  for (var k in d["@"]) {
    if ("parent" != k) {
      var h = d["@"][k], l = {};
      h.yt in l || (l[h.yt] = h.EK.test(f));
      if (l[h.yt]) {
        e.push(f);
        if (h = Cs(a, b, c + 1, h, e, null)) {
          return h;
        }
        e.pop();
      }
    }
  }
  if (d[":"]) {
    e.push(f);
    if (h = Cs(a, b, c + 1, d[":"], e, null)) {
      return h;
    }
    e.pop();
  }
  return d["*"] ? Cs(a, b, b.length, d["*"], e, b.slice(c)) : null;
};
var Ds = function() {
  this.jF = {};
  this.yH = {};
  this.nt = new Bs;
};
var X = function(a) {
  this.path = a;
  this.lK = null;
  this.ea = Es(this);
  this.screen = null;
  this.GK = [];
};
var Es = function(a) {
  for (var b = a.path.replace(/(^\/|\/$)/g, "").split("/"), c = [], d = 0;d < b.length;d++) {
    c.push(Fs(a, b[d], d == b.length - 1));
  }
  return function(a, b) {
    for (var d = a || {}, k = [], l, m = 0;m < c.length;m++) {
      l = c[m], "function" === typeof l ? k.push(l(d)) : k.push(l);
    }
    d = "/" + k.join("/");
    b && (k = Object.keys(b).map(function(a) {
      return a + "\x3d" + (0,window.encodeURIComponent)(b[a]);
    }).join("\x26"), d = d + "?" + k);
    return d;
  };
};
var Fs = function(a, b, c) {
  var d;
  if ("*" == b) {
    if (c) {
      return function(a) {
        return(a["*"] || []).join("/");
      };
    }
    throw Error("Invalid path [" + a.path + "], * must only be at the end.");
  }
  return ":" == b[0] ? (d = b.substr(1, b.length - 1), function(a) {
    return a[d];
  }) : "@" == b[0] ? (a = b.indexOf(":"), d = b.substr(1, a - 1), function(a) {
    return a[d];
  }) : b;
};
var Gs = function(a, b) {
  a.screen = b;
  return a;
};
var Hs = function() {
  W.call(this);
};
var Is = function() {
  W.call(this);
};
var Js = function() {
  W.call(this);
};
var Ks = function() {
  W.call(this);
};
var Ls = function() {
  W.call(this);
};
var Ms = function() {
  W.call(this);
};
z.Ns = function() {
  W.call(this);
};
var Os = function() {
  W.call(this);
};
var Ps = function() {
  W.call(this);
};
var Qs = function() {
  W.call(this);
};
var Rs = function() {
  W.call(this);
};
var Ss = function() {
  W.call(this);
};
var Ts = function() {
  W.call(this);
};
var Us = function() {
  W.call(this);
};
var Vs = function() {
  W.call(this);
};
z.Ws = function() {
  W.call(this);
};
z.Xs = function() {
  W.call(this);
};
z.Ys = function() {
  W.call(this);
};
var Zs = function() {
  W.call(this);
};
z.$s = function() {
  W.call(this);
};
var at = function() {
  W.call(this);
};
var bt = function() {
  W.call(this);
};
z.ct = function() {
  W.call(this);
};
z.dt = function() {
  W.call(this);
};
z.et = function() {
  W.call(this);
};
z.ft = function() {
  W.call(this);
};
var gt = function() {
  W.call(this);
};
var ht = function() {
  W.call(this);
};
z.it = function() {
  W.call(this);
};
z.jt = function() {
  W.call(this);
};
z.kt = function() {
  W.call(this);
};
var lt = function() {
  W.call(this);
};
z.mt = function() {
  W.call(this);
};
z.nt = function() {
  W.call(this);
};
z.ot = function() {
  W.call(this);
};
var pt = function() {
  W.call(this);
};
z.qt = function() {
  W.call(this);
};
z.rt = function() {
  W.call(this);
};
z.st = function() {
  W.call(this);
};
var tt = function() {
  W.call(this);
};
var ut = function() {
  W.call(this);
};
var vt = function() {
  W.call(this);
};
var wt = function() {
  W.call(this);
};
var xt = function() {
  W.call(this);
};
z.yt = function() {
  W.call(this);
};
z.zt = function() {
  W.call(this);
};
var At = function() {
  W.call(this);
};
var Bt = function() {
  W.call(this);
};
var Ct = function() {
  W.call(this);
};
var Dt = function(a, b) {
  a = a || {};
  return'\x3cfooter class\x3d"footer ' + (a.uO ? "footer-fixed" : "") + ' footer-promotional btn-set layout-single-column"\x3e\x3ca class\x3d"btn btn-link" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/" title\x3d"Sign in to ' + (0,z.P)(b.productName) + '"\x3eSign in\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Learn about writing on ' + (0,z.P)(b.productName) + '" href\x3d"' + (0,z.P)((0,z.Q)(b.howToPostUrl)) + '"\x3eHow do I write?\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"About ' + 
  (0,z.P)(b.productName) + '" href\x3d"' + (0,z.P)((0,z.Q)(b.welcomeUrl)) + '"\x3eAbout ' + (0,z.O)(b.productName) + '\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Visit the top stories on ' + (0,z.P)(b.productName) + '" href\x3d"/top-100/' + (0,z.P)(b.bestOfLatestSlug) + '"\x3eFind something to read\x3c/a\x3e' + (a.IJ ? '\x3ca class\x3d"btn btn-small btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/"\x3eJoin ' + (0,z.O)(b.productName) + "\x3c/a\x3e" : 
  "") + "\x3c/footer\x3e";
};
var Et = function(a, b, c) {
  return $h("g", a.mJ)(null, null, c);
};
z.Ft = function(a, b) {
  for (var c = (a.label ? '\x3ch3 class\x3d"m-bucket-label"\x3e' + (0,z.O)(a.label) + "\x3c/h3\x3e" : "") + '\x3cul class\x3d"m-bucket-list' + (a.kb ? " m-bucket-list-light" : "") + (a.Nm ? " m-hide" : "") + '"\x3e', d = a.posts, e = d.length, f = 0;f < e;f++) {
    var h = (0,z.L)(a, {post:d[f]}), k = b, l = "", m = h.post.creator ? h.post.creator.name : "Deleted User", q = Ei(h), l = l + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(k.baseUrl)) + (0,z.P)(q) + '" title\x3d"' + (0,z.P)(h.post.title) + " by " + (0,z.P)(m) + '" target\x3d"_blank"\x3e\x3ch3 class\x3d"m-bucket-list-item-post-title"\x3e' + (h.post.title ? (0,z.O)(h.post.title) : "Untitled") + '\x3c/h3\x3e\x3cp class\x3d"m-bucket-list-item-post-snippet"\x3e' + (0,z.O)(h.post.virtuals.draftSnippet ? h.post.virtuals.draftSnippet : 
    h.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e"), c = c + ("\x3cli class\x3d'm-bucket-list-item m-bucket-list-item-post'\x3e" + l + "\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e";
};
z.Gt = function(a) {
  return'\x3ca class\x3d"m-logo" href\x3d"' + (0,z.P)((0,z.Q)(a.baseUrl)) + '" target\x3d"_blank"\x3e\x3cspan class\x3d"icons icons-logo-m"\x3e\x3cspan class\x3d"m-screen-reader-text"\x3eMedium site navigation\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e';
};
var Ht = function(a, b, c) {
  b = "";
  var d = Ei(a), d = '\x3ca class\x3d"m-story" data-collapsed\x3d"true" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + (0,z.P)(d) + '"\x3e' + (0,z.O)(a.post.title) + "\x3c/a\x3e", e = "", f = a.post.image ? (0,z.zi)((0,z.L)(a.post.image, {cropType:"t", verticalGradient:"29/81/55"}), 0, c) : "", h = a.collection || a.post.collection, e = e + ('\x3cdiv class\x3d"m-hero m-hero-story' + (f ? " m-image-cover m-hero-light" : "") + '" ' + (f ? 'style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(f)) + ')"' : 
  "") + "\x3e" + (0,z.Gt)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e'), f = Ei({post:a.post, collection:h}), e = e + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + (0,z.P)(f) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.post.title) + "\x3c/a\x3e\x3c/h1\x3e" + (a.post.subtitle ? '\x3cp class\x3d"m-hero-subtitle"\x3e' + (0,z.O)(a.post.subtitle) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"m-hero-meta-info"\x3e\x3ca class\x3d"m-avatar m-avatar-micro m-avatar-borderless" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + 
  "/@" + (0,z.P)(a.post.creator.username) + '" target\x3d"_blank"\x3e'), f = (0,z.zi)({imageId:a.post.creator.imageId || a.post.creator.image.imageId, width:"64", height:"64", strategy:"crop-fixed"}, 0, c), e = e + ('\x3cimg src\x3d"' + (0,z.P)((0,z.Q)(f)) + '" alt\x3d"@' + (0,z.P)(a.post.creator.username) + '\'s avatar"\x3e\x3c/a\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(a.post.creator.username) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.post.creator.name) + "\x3c/a\x3e" + 
  (h ? " in " + co({collection:h, VJ:!0, baseUrl:c.baseUrl}) : "") + "\x3c/div\x3e\x3c/div\x3e");
  return b += (0,z.It)({code:d, Vv:e}, c);
};
var Jt = function(a, b, c) {
  b = '\x3ca class\x3d"m-collection" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '"\x3e' + (0,z.O)(a.collection.name) + "\x3c/a\x3e";
  var d = "", e = (0,z.zi)((0,z.L)(a.collection.image, {strategy:"resample", verticalGradient:"29/81/60", darken:"25"}), 0, c), e = '\x3cdiv class\x3d"m-image-cover" style\x3d"background-image:url(' + (0,z.P)((0,z.Q)(e)) + ')"\x3e', f = '\x3cdiv class\x3d"m-hero m-hero-light m-hero-collection"\x3e' + (0,z.Gt)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.collection.name) + 
  '\x3c/a\x3e\x3c/h1\x3e\x3cp class\x3d"m-hero-description"\x3e' + (0,z.O)(a.collection.shortDescription) + "\x3c/p\x3e", h;
  h = '\x3ca class\x3d"m-btn m-btn-rounded m-btn-light" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '" target\x3d"_blank"\x3eFollow' + (a.collection.metadata.followerCount ? '\x3cspan class\x3d"m-btn-count"\x3e' + Vn({Jd:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/a\x3e";
  e += f + h + "\x3c/div\x3e";
  if (a.recommendedPosts && a.recommendedPosts.length && a.latestPosts && a.latestPosts.length) {
    f = '\x3cul class\x3d"m-bucket-nav"\x3e';
    h = ["Latest", "Trending"];
    for (var k = h.length, l = 0;l < k;l++) {
      var m = h[l], f = f + ('\x3cli class\x3d\'m-bucket-nav-item\'\x3e\x3cbutton data-action\x3d"toggle-bucket" data-action-value\x3d"' + (0,z.P)(l) + '" class\x3d"m-btn m-btn-chromeless' + (0 == l ? " m-btn-active" : "") + '"\x3e' + (0,z.O)(m) + "\x3c/button\x3e\x3c/li\x3e")
    }
    a = '\x3cdiv class\x3d"m-bucket"\x3e' + (f + "\x3c/ul\x3e") + '\x3cdiv class\x3d"m-bucket-group"\x3e' + (0,z.Ft)((0,z.L)(a, {label:!1, posts:a.latestPosts, kb:!0}), c) + (0,z.Ft)((0,z.L)(a, {label:!1, Nm:!0, kb:!0, posts:a.recommendedPosts}), c) + "\x3c/div\x3e\x3c/div\x3e";
  } else {
    a = "";
  }
  return(0,z.It)({code:b, Vv:d + (e + a + "\x3c/div\x3e")}, c);
};
z.It = function(a, b) {
  return'\x3cp\x3eYou can add this embed to your website by copying and pasting the HTML code below. \x3ca class\x3d"link link-underline" href\x3d"' + (0,z.P)((0,z.Q)(b.embedSupportUrl)) + '"\x3eLearn more.\x3c/a\x3e\x3c/p\x3e\x3ctextarea class\x3d"input-text input-textarea" wrap\x3d"off" data-action\x3d"select-target"\x3e\x3cscript async src\x3d"https://static.medium.com/embed.js"\x3e\x3c/script\x3e' + ei(a.code) + '\x3c/textarea\x3e\x3ch3 class\x3d"bucket-label"\x3ePreview\x3c/h3\x3e\x3cdiv class\x3d"embed"\x3e' + 
  (0,z.pi)(a.Vv) + "\x3c/div\x3e";
};
var Kt = function(a, b, c) {
  z.Ln.call(this, a);
  this.U = b.postId;
  this.ya = b.collectionSlug;
  this.ba = a.get("app");
  this.Qh = (0,z.Nn)(this, "coreactions");
  this.Z = a.get("datastore");
  this.ga = a.get("request");
  this.W = a.get("dialog");
  this.ra = a.get("dom-monitor");
  this.me = a.get("element-tracker");
  this.Jp = a.get("twitter");
  this.VD = a.get("facebook");
  this.Ja = a.get("popover");
  this.DH = a.get("scroll-tracker");
  this.Ua = null;
  this.Qa = (0,z.Nn)(this, "butter-bar");
  this.XG = c;
  this.fa = this.kx(c.Qc);
  this.Ns = new Cq(c.Vm || this.ya || "", this.fa ? String(this.fa.Am("id")) : "");
  this.xo = !!c.$J;
  this.Zh = c.intendedCollection;
  this.Nx = this.zs = !1;
  this.Od = this.Pn = null;
  Lt++;
};
var Mt = function(a) {
  return a.za.get("creator.userId") == (0,z.G)("currentUser.userId");
};
var Nt = function(a) {
  return!!a.za.get("latestPublishedVersion");
};
var Ot = function(a) {
  (0,z.w)(a.ke, "grid-breaking");
  var b = a.J.getElementsByClassName("post-author-side")[0] && a.J.getElementsByClassName("post-author-card")[0];
  if (b) {
    var c = (0,z.ng)(b) + b.offsetHeight;
    (0,z.ur)(a.$k, function(a) {
      var b = (0,z.ng)(a) < c;
      (0,z.Jc)(a, "grid-breaking-override", b);
    }, a);
  }
};
var Pt = function(a) {
  return!0 === (0,z.G)("variants.enable_notes") && "false" != a.ke.getAttribute("data-allow-notes");
};
var Qt = function(a) {
  var b = 500 >= window.innerWidth ? "notes-mobile" : "notes";
  Pt(a) ? (0,z.t)((0,z.r)((0,z.r)(a.Ua.wa(Rm(250)), function() {
    return this.da.load(b);
  }, a), function(a) {
    this.wd = a.Xj(this, this.za, this.ke, Mt(this), this.Va, !1);
  }, a), z.K) : (0,z.Ec)(!0);
};
var Rt = function(a) {
  if (!Nt(a) || a.L(".post-footer").firstChild) {
    return(0,z.Ec)(!0);
  }
  var b = String((0,z.G)("variants.logged_out_footer"));
  if ("landscape" == b || "covers" == b) {
    return a.bz(b);
  }
  if ((0,z.G)("variants.enable_next_post_in_footer")) {
    var c;
    a.Ps = new cr(a.La(), a.L(".post-footer"), a.U, a.Ns, a.me);
    a.Ps.rd();
    c = (0,z.Ec)(!0);
    "toolbar" == b && (0,z.r)(c, a.bz.bind(a, b));
    return c;
  }
  return(0,z.Ec)(!0);
};
var St = function(a) {
  return Nt(a) ? (0,z.t)((0,z.r)((0,z.r)(a.Ua.wa(Rm(500)), function() {
    var a = Tt.ea({postId:this.U});
    return this.ga.get(a, {ma:!0, background:!0});
  }, a), a.vz, a), z.K) : (0,z.Ec)(!0);
};
var Ut = function(a, b) {
  (0,z.K)(b);
  a.W.error(b);
};
var Vt = function(a) {
  return a.ya ? z.Zp.ea({postId:a.U, collectionSlug:a.ya}) : z.Wt.ea({postId:a.U});
};
var Xt = function(a) {
  a.$g.set("count", (0,z.hj)(a.$g, "count") + (a.za.get("vote") ? 1 : -1));
  a.$g.set("users", Yt(a, a.$g.get("users"), a.$g.get("usersBySocialRecommends")));
  a.vz();
};
var Yt = function(a, b, c) {
  var d = (0,z.G)("currentUser");
  b = (c || []).concat(b);
  c = [];
  for (var e = [], f = 0;f < b.length;f++) {
    -1 == c.indexOf(b[f].userId) && (e.push(b[f]), c.push(b[f].userId));
  }
  d && (e = e.filter(function(a) {
    return a.userId != d.userId;
  }), a.za.get("vote") && e.unshift(d));
  return e;
};
var Zt = function() {
  var a = window.document.getElementById("temp-experimental-css");
  a && (0,z.Dd)(a);
};
var $t = function(a) {
  this.Ks = a;
  this.Ub = {};
};
var au = function(a, b, c, d, e, f) {
  z.Uh.call(this);
  this.da = a;
  this.ja = b;
  this.Z = a.get("datastore");
  this.Od = new $o(a);
  this.Fg = c;
  this.Tb = d;
  this.hl = (0,z.gj)(d, "id");
  this.fa = e;
  this.Qh = a.get("coreactions");
  this.LH = f;
};
var bu = function(a, b) {
  return b.filter(function(a) {
    a = a.get("virtuals").postedIn;
    for (var b = 0;b < a.length;b++) {
      if (a[b].collectionId == this.hl && "APPROVED" == a[b].status) {
        return!0;
      }
    }
    return!1;
  }, a);
};
var cu = function(a, b) {
  for (var c in a.get("virtuals.postedIn")) {
    var d = a.get("virtuals.postedIn")[c];
    if (d.collectionId == b) {
      return d.status || "NOT_FOUND";
    }
  }
  return "NOT_FOUND";
};
var du = function(a, b, c) {
  var d = (0,z.Ai)({size:"full", wv:!0, image:a.collection.image}, c);
  b = [{name:"Latest", href:"/" + a.collection.slug, zd:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", zd:"recommended" == a.filterBy}];
  var e = [{name:"Latest", href:"/" + a.collection.slug, zd:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", zd:"recommended" == a.filterBy}, {name:"Submissions", href:"/" + a.collection.slug + "/submissions", zd:"submissions" == a.filterBy}], f = '\x3cdiv class\x3d"scrolling-region" tabIndex\x3d"-1"\x3e' + (0,z.Fo)((0,z.L)(a, {kb:!0, gq:'\x3cdiv class\x3d"metabar-text collection-editor" data-shorthand\x3d"Edited"\x3e' + (a.collection.user ? '\x3cspan class\x3d"collection-editor-label"\x3eCollection edited\x3c/span\x3e by ' + 
  ao({user:a.collection.user}) : "") + "\x3c/div\x3e", gh:'\x3cdiv class\x3d"btn-set"\x3e' + (c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn btn-light hide-on-mobile hide show-cross-poster"\x3e' + (c.isAuthenticated && a.collection.user && a.collection.virtuals.canAdminister ? "Add/Remove Your Story" : "Submit/Remove Your Story") + "\x3c/button\x3e" : "") + (c.isAuthenticated && a.collection.user && c.currentUser.userId == a.collection.user.userId ? 
  '\x3ca href\x3d"/' + (0,z.P)(a.collection.slug) + '/settings" title\x3d"Edit Collection" class\x3d"btn btn-light hide-on-mobile"\x3eEdit\x3c/a\x3e' : "") + (c.variants.enable_embed_ui ? '\x3cbutton class\x3d"btn btn-circle" title\x3d"Embed this collection" data-action\x3d"embed-collection"\x3e\x3cspan class\x3d"icons icons-embed"\x3e\x3c/span\x3e\x3c/button\x3e' : "") + "\x3c/div\x3e"})), h = '\x3cheader class\x3d"hero hero-collection"\x3e\x3cdiv class\x3d"align-middle layout-single-column layout-foreground layout-fill-height"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch1 class\x3d"hero-title"\x3e' + 
  (0,z.O)(a.collection.name) + '\x3c/h1\x3e\x3cp class\x3d"hero-description"\x3e' + (0,z.O)(a.collection.description) + '\x3c/p\x3e\x3cdiv class\x3d"hero-actions btn-set"\x3e' + Xn({collection:a.collection, kb:!0}, 0, c) + "\x3c/div\x3e", k;
  if (c.variants.show_collection_tags) {
    k = k = {tags:a.collection.tags, sC:"/search?q\x3d", className:"hero-collection-tags"};
    var l = '\x3cdiv class\x3d"tags' + (k.className ? " " + (0,z.P)(k.className) : "") + '"\x3e';
    if (k.tags) {
      for (var m = k.tags, q = m.length, s = 0;s < q;s++) {
        var I = (k.bL ? k.bL : "") + m[s], l = l + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(k.sC ? k.sC + I : "#")) + '" rel\x3d"token" data-action\x3d"focus-token" data-value\x3d"' + (0,z.P)(I) + '"\x3e' + (0,z.O)(I) + "\x3c/a\x3e")
      }
    }
    k = l += (k.oO ? '\x3cdiv class\x3d"tags-input"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e";
  } else {
    k = "";
  }
  return d += f + (h + k + "\x3c/div\x3e\x3c/div\x3e\x3c/header\x3e") + '\x3cdiv class\x3d"layout-foreground ' + (c.useragent.isMobile || c.useragent.isTablet ? "background-gradient" : "") + '"\x3e' + (0,z.Do)((0,z.L)(a, {kb:!0, sw:a.collection.virtuals.canAdminister && c.variants.enable_collection_pending_page ? e : b, Nm:!(a.posts.length || a.collection.metadata.postCount && "recommended" == a.filterBy || a.collection.virtuals.canAdminister)}), c) + (a.posts.length ? (0,z.to)((0,z.L)(a, {lv:!0, 
  kb:!0, Wz:!0, zh:(0,z.O)(a.collection.name) + " has no stories yet", Nm:!0, jC:a.collection.virtuals.canAdminister && "submissions" == a.filterBy}), c) : a.collection.metadata.postCount && "recommended" == a.filterBy ? (0,z.wo)({zh:"This collection is new, so there are no trending stories yet.\x3cbr\x3eWidely read and recommended stories will appear here.", kb:!0}) : "submissions" == a.filterBy ? (0,z.wo)({zh:"When a story is submitted to your collection, it will appear here for your review", kb:!0}) : 
  (0,z.to)((0,z.L)(a, {kb:!0, Wz:!0, zh:(0,z.O)(a.collection.name) + " has no stories yet"}), c)) + "\x3c/div\x3e\x3c/div\x3e";
};
var pp = function(a) {
  return'\x3cdiv class\x3d"overlay-form-container story-rejection-form"\x3e\x3cdiv class\x3d"story-rejection-caption"\x3eWe won\'t email ' + (0,z.O)(a.nC) + ' that their story hasn\'t been accepted unless you write an optional note.\x3c/div\x3e\x3ctextarea class\x3d"overlay-form-text-input textarea-seamless text-input-border story-rejection-note" placeholder\x3d"Add an optional note for ' + (0,z.P)(a.nC) + '..."\x3e\x3c/textarea\x3e\x3c/div\x3e';
};
var eu = function(a, b) {
  z.Ln.call(this, a);
  this.nc = b.collectionSlug;
  this.path = b.path;
  this.filterBy = this.mt(b.path);
  this.Tj = a.get("app");
  this.sm = a.get("datastore");
  this.en = a.get("request");
  this.Qa = (0,z.Nn)(this, "butter-bar");
  this.pm = this.qm = null;
};
var fu = function(a, b, c) {
  (0,z.Eg)(a).D("open-post", gu.bind(null, b, String(c.Am("id"))));
};
var gu = function(a, b, c) {
  if (!c.Im) {
    var d = c.value;
    0 === c.value.indexOf("/") && (d = d.substr(1));
    b = {Qc:b};
    if (c = c.target.getAttribute("data-source")) {
      b.source = c;
    }
    a.navigate(d, b);
  }
  return!1;
};
z.hu = function(a, b, c) {
  z.Uh.call(this);
  this.ra = a.get("dom-monitor");
  this.Qt = !1;
  this.$b = b;
  this.nD = c;
};
var iu = function(a) {
  a.H();
  (0,z.Vh)(a, a.ra, "scroll-throttled", a.Si, a);
  a.Si();
};
var ju = function(a) {
  rj(a.$b) || (0,z.t)((0,z.tc)(vj(a.$b, a.nD), function() {
    this.Qt && this.Si();
  }, a), z.K);
};
z.ku = function(a) {
  z.Sh.call(this);
  this.da = a;
  this.ba = a.get("app");
  this.Z = a.get("datastore");
};
z.lu = function(a, b) {
  if (a.fa) {
    throw Error("The post list should not be set twice.");
  }
  b && (a.fa = b, a.fa.C("add", a.Po, a), a.fa.C("remove", a.Qo, a));
  return a;
};
z.mu = function(a, b) {
  if (a.Hg) {
    throw Error("The container element should not be set twice.");
  }
  a.Hg = b;
  return a;
};
z.nu = function(a, b) {
  a.Ht = b;
  return a;
};
var ou = function(a, b, c) {
  eu.call(this, a, b);
  this.Qc = c.Qc || "";
  this.ji = a.get("publish-state");
  this.W = a.get("dialog");
};
var pu = function(a, b) {
  Or.call(this, a, "disabled");
  this.W = b.get("dialog");
};
var qu = function(a) {
  Or.call(this, a, "sign-in-with-twitter");
};
var ru = function(a, b) {
  Or.call(this, a, "sign-in-prompt");
  this.ga = b.get("request");
  this.Ja = b.get("popover");
};
var su = function(a, b) {
  Or.call(this, a, "toggle-subscribe-collection");
  this.ga = b.get("request");
  this.Z = b.get("datastore");
  this.Qa = b.get("butter-bar");
};
var tu = function() {
  (0,z.G)("currentUser") && Aj(["identify", (0,z.G)("currentUser.userId")]);
  var a = (0,z.G)("variants.is_super_user") ? "superuser" : (0,z.G)("variants.can_create_post") ? "creator" : (0,z.G)("isAuthenticated") ? "loggedin" : "anonymous";
  (0,z.Jj)(2, a, 1);
  Aj(["set", {userType:a}]);
  a = {};
  a.NH = !!(0,z.G)("variants.can_use_new_homepage");
  a.WF = !!(0,z.G)("variants.can_see_post_welcome_footer");
  a.YO = !!(0,z.G)("variants.can_see_onboarding");
  a.NO = !(0,z.G)("variants.can_see_onboarding");
  var b = (0,z.G)("variants.logged_out_footer");
  a.O2L = "landscape" == b;
  a.O2C = "covers" == b;
  a.O2T = "toolbar" == b;
  a.O2N = "landscape" != b && "covers" != b && "toolbar" != b;
  a.YPH = !!(0,z.G)("variants.show_promotional_homepage");
  a.NPH = !(0,z.G)("variants.show_promotional_homepage");
  for (var c in a) {
    var b = "testBucket-" + c, d;
    d = a[c];
    d = "string" == typeof d ? d : "number" == typeof d ? String(d) : d ? "true" : "false";
    Aj(["set", ub(b, d)]);
    Bj(uu, {testName:b, testBucket:d});
  }
};
z.vu = function(a) {
  z.jj.call(this);
  this.$b = a;
  this.$b.C("add", this.Gy, this);
  this.$b.C("remove", this.Ky, this);
  this.$b.C("change", this.Iy, this);
  (0,z.wu)(this);
};
z.wu = function(a) {
  a.Ia = (a.cs ? a.$b.filter(a.cs, a.Ax) : a.$b.Ia).slice(a.Pr, a.Pr + a.iy);
};
var xu = function(a) {
  var b = a.Ia;
  (0,z.wu)(a);
  for (var c = 0;c < b.length;c++) {
    yu(b[c], a.Ia) || a.Q("remove", b[c], a);
  }
  for (var c = [], d = 0;d < a.Ia.length;d++) {
    yu(a.Ia[d], b) || c.push(a.Ia[d]);
  }
  c.length && a.Q("add", c, a);
};
var yu = function(a, b) {
  return!!(0,z.Va)(b, function(b) {
    return b === a;
  });
};
z.zu = function(a, b, c) {
  return'\x3cdiv class\x3d"list-choice-hero"\x3e\x3ch2\x3e' + (0,z.O)(a.title) + "\x3c/h2\x3e" + (a.description ? "\x3cp\x3e" + (0,z.O)(a.description) + "\x3c/p\x3e" : "") + (a.pB && a.oB ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.oB)) + '" class\x3d"btn btn-primary btn-small"\x3e' + (0,z.O)(a.pB) + "\x3c/a\x3e" : "") + (a.BJ ? '\x3cdiv class\x3d"input-group"\x3e\x3cspan class\x3d"icons icons-search"\x3e\x3c/span\x3e\x3cinput type\x3d"search" class\x3d"input-text input-text-rounded input-text-collection-search" placeholder\x3d"Search"\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3cul class\x3d"list-choice-items"\x3e' + Au(a, 0, c) + (a.aJ && 0 == a.items.length ? '\x3cli class\x3d"list-choice-empty"\x3e' + (0,z.O)(a.aJ) + "\x3c/li\x3e" : "") + "\x3c/ul\x3e";
};
var Au = function(a, b, c) {
  b = "";
  for (var d = a.items, e = d.length, f = 0;f < e;f++) {
    var h = d[f];
    b += '\x3cli class\x3d"list-choice-item ' + (a.Wm ? "list-choice-item-no-image" : "") + '"\x3e' + ("Remove" == h.status ? '\x3cspan class\x3d"btn btn-link list-choice-item-with-status"\x3e' : '\x3cbutton class\x3d"btn btn-link ' + (h.status ? "list-choice-item-with-status" : "") + '"' + (h.disabled ? 'disabled\x3d"disabled"' : 'data-action\x3d"pick" data-action-value\x3d"' + (0,z.P)(h.id) + '"') + "\x3e");
    if (!a.Wm && h.imageId) {
      var k = (0,z.zi)({imageId:h.imageId, strategy:"crop-fixed", width:"190", height:"190", cropType:"c"}, 0, c);
      b += '\x3cdiv class\x3d"list-choice-image" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(k)) + "')\"\x3e\x3c/div\x3e";
    }
    b += (h.BC ? '\x3cdiv class\x3d"list-choice-text-left"\x3e' + (0,z.O)(h.cK) + '\x3c/div\x3e\x3cdiv class\x3d"list-choice-text-right"\x3e' + (0,z.O)(h.LK) + "\x3c/div\x3e" : '\x3cdiv class\x3d"list-choice-text align-middle-table' + (a.Wm ? "" : " list-choice-text-with-image") + (h.QO ? " list-choice-text-with-icon" : "") + '"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch5 class\x3d"list-choice-item-title"\x3e' + (0,z.O)(h.name) + (h.description ? "\x3csmall\x3e" + (0,z.O)(h.description) + "\x3c/small\x3e" : 
    "") + "\x3c/h5\x3e\x3c/div\x3e\x3c/div\x3e") + (h.BC || "Remove" != h.status ? "" : '\x3cspan class\x3d"actions action-remove" data-action\x3d"pick" data-action-value\x3d"' + (0,z.P)(h.id) + '"\x3eRemove\x3c/span\x3e') + ("Remove" == h.status ? "\x3c/span\x3e" : "\x3c/button\x3e") + "\x3c/li\x3e";
  }
  return b;
};
var Bu = function(a) {
  return'\x3cdiv class\x3d"list-choice-empty"\x3e\x3cp\x3eWe couldn\'t find any ' + (0,z.O)(a.zv) + " about \x3cstrong\x3e" + (0,z.O)(a.L) + "\x3c/strong\x3e\x3c/p\x3e\x3c/div\x3e";
};
var Cu = function(a, b) {
  z.jn.call(this);
  this.da = a;
  this.Ja = a.get("popover");
  this.ba = a.get("app");
  this.aa = b;
};
var Du = function(a) {
  a.pl = !0;
  return a;
};
var Eu = function(a) {
  this.da = a;
  this.ga = a.get("request");
  this.Z = a.get("datastore");
  this.ba = a.get("app");
  this.ba.C("startNav", this.at, this);
  this.Qa = a.get("butter-bar");
  this.W = null;
  this.zt = {};
  this.ci = null;
  this.ho = !1;
  (0,z.zg)("stat-link", this.$H, this).D("dismiss-interstitial", this.tx, this).D("add-to-reading-list", this.Cz, this).D("remove-from-reading-list", this.Cz, this).D("send-verify-email", this.GH, this).D("update-blacklist", this.RE, this).D("select-target", this.FH, this);
};
var Fu = function(a, b, c, d) {
  for (var e = [], f = 0;f < b.length;f++) {
    var h = b[f];
    h.collectionId != c && "APPROVED" === h.status && e.push(new z.fj(h.collection));
  }
  b = new z.vu(new z.jj(e));
  b = Du((new Cu(a.da, b)).bd("Also in these collections")).Mk(function(a) {
    return{id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  });
  d && (b.Dg = d);
  (0,z.r)(Gu(a, b), function(a) {
    this.ba.navigate(z.Hu.ea({collectionSlug:a}));
  }, a);
};
var Gu = function(a, b, c) {
  a.ci && a.ci.close();
  c = c || (0,z.Wm)(a.ba.ib);
  b.ff(c);
  a.ci = b;
  return(0,z.tc)(b.open(), function() {
    this.ci.close();
    this.ci = null;
  }, a);
};
var Iu = function(a, b, c) {
  (a = a.Z.Ob(b)) && a.set("virtuals.isOnReadingList", c);
  a = window.document.body.querySelectorAll('.btn-bookmark[data-post-id\x3d"' + b + '"]');
  for (var d = (c ? "remove-from" : "add-to") + "-reading-list", e = 0;e < a.length;e++) {
    var f = a[e];
    c ? cd(f, "active") : dd(f, "active");
    a[e].setAttribute("data-action", d);
  }
  a = window.document.body.querySelectorAll('.reading-list-status[data-post-id\x3d"' + b + '"]');
  if (a.length) {
    for (d = a[0].getAttribute("data-reading-time"), b = (0,z.H)(ko, {postId:b, isOnReadingList:c, readingTime:d, ZJ:!0}), c = 0;c < a.length;c++) {
      a[c] && (a[c].outerHTML = b);
    }
  }
};
z.Ju = function(a, b) {
  (0,z.t)((0,z.r)(a.ga.post("/me/send-verify", b ? {redirect:b} : {}, {ma:!0}), function() {
    this.W.open({title:"Thanks", bodyHtml:(0,z.Ku)(), type:z.Ki});
  }, a), function(a) {
    (0,z.K)(a);
    401 === a.status ? (a = this.W.error("We were unable to send your verification email because you are no longer signed in."), a.C("close", function() {
      window.location.reload();
    })) : 400 === a.status ? (a = this.W.open({title:"Thanks, but...", bodyHtml:"It looks like your account is already verified.", type:z.Ki}), b || a.C("close", function() {
      this.ba.navigate(b);
    }, this)) : a = this.W.error(Lu());
  }, a);
};
var Mu = function(a) {
  this.ga = a.get("request");
  this.ba = a.get("app");
  this.Ic = Nu.ea();
  this.Hn = new z.fj({newActivityCount:0});
  this.ba.C(Um, this.Zs, this);
};
var Ou = function(a) {
  (0,z.G)("isAuthenticated") && (0,z.G)("variants.can_view_activity") && (0,z.r)(a.ga.get(a.Ic, {ma:!0, background:!0}), function(a) {
    a.value.hasOwnProperty("newActivityCount") && this.Hn.set("newActivityCount", a.value.newActivityCount);
  }, a);
};
var Pu = function(a) {
  this.ba = a.get("app");
  this.nf = {};
  this.sa = {};
  this.Dj = {};
  this.cm = {};
  this.ba.C(Um, this.fi, this);
};
var Qu = function(a, b) {
  return(0,z.r)(a.load(b), function() {
    var a = new z.nc, d = new window.Image, e = [];
    e.push((0,z.J)(d, "load", a.Ba.bind(a, d)));
    e.push((0,z.J)(d, "abort", a.Wd, a));
    e.push((0,z.J)(d, "error", a.Wd, a));
    (0,z.tc)(a, function() {
      (0,z.dg)(e);
    });
    d.src = b;
    return a;
  }, a);
};
var Ru = function(a, b) {
  a.cm[b] || (a.cm[b] = (0,z.t)(Qu(a, b), function() {
    delete this.cm[b];
  }, a));
  return a.cm[b];
};
var Su = function(a) {
  return 0 === a.indexOf("//") ? window.location.protocol + a : a;
};
var Tu = function(a, b) {
  var c = new window.Image, d = [];
  d.push((0,z.J)(c, "load", a.Nl, a));
  d.push((0,z.J)(c, "abort", a.Qg, a));
  d.push((0,z.J)(c, "error", a.Qg, a));
  a.sa[b] = d;
  c.src = b;
};
var Uu = function(a, b) {
  a.sa[b] && ((0,z.dg)(a.sa[b]), delete a.sa[b]);
};
z.Vu = function(a, b, c) {
  z.Ko.call(this, a, b, c);
  this.jo = "_obv.data._list_" + Wu++;
  this.As = "";
};
var Xu = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = a.As;
  d.id = a.jo + (0,z.pa)(b);
  d.innerHTML = (0,z.pq)(a, b);
  (0,z.Cd)(a.J, d, "undefined" != typeof c ? c : a.J.children.length);
  return d;
};
var Yu = function(a, b) {
  this.Qa = b;
  this.ba = a.get("app");
  this.Ha = new z.Sh;
  this.C = this.Ha.C.bind(this.Ha);
  (0,z.Eg)(b).D("butter-bar-action", this.iH, this).D("butter-bar-dismiss", this.DD, this).D("butter-bar-reload", this.lH, this).D("undo", this.QG, this);
};
var Zu = function(a, b, c) {
  function d() {
    e.call(this);
    b.apply(c || this);
  }
  function e() {
    this.Ha.xa("action", d, this);
    this.Ha.xa("deactivate", e, this);
  }
  a.Ha.C("action", d, a);
  a.Ha.C("deactivate", e, a);
};
var $u = function(a) {
  return'\x3ch4 class\x3d"cards-heading follow-ups-title"\x3eFurther Reading\x3c/h4\x3e\x3cdiv class\x3d"follow-ups-list"\x3e\x3c/div\x3e\x3cdiv class\x3d"follow-up-new"\x3e\x3cbutton class\x3d"btn btn-chromeless follow-up-start follow-up-link-prompt"' + (a.OI ? 'data-action\x3d"start-new-follow-up"' : Wn({Fk:Ei(a) + '#follow-up-editor"', prompt:"Sign in to suggest further reading", sn:"followUp", Tq:!0})) + '\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-ups-prompt"\x3eSuggest a link\x3c/span\x3e\x3cspan class\x3d"follow-ups-empty-prompt"\x3eSuggest a link for further reading\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"follow-up follow-up-new-editor"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var av = function(a, b, c) {
  return(a.canAdminister ? '\x3cul class\x3d"follow-up-visibility follow-up-visibility-dropdown" data-follow-up-id\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3e' + (a.followUp.visibility == a.visibility.En ? '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + 
  (0,z.P)(a.visibility.Iw) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.P)(a.visibility.En) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') + 
  (a.followUp.creatorId != a.Pq ? '\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.P)(a.visibility.Aw) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : a.followUp.visibility != a.visibility.En ? '\x3cul class\x3d"follow-up-visibility" data-follow-up-id\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3e\x3cli class\x3d"follow-up-visibility-item" data-tooltip\x3d"This link is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : 
  "") + (0,z.bv)(a, c);
};
z.bv = function(a, b) {
  return $h("h", a.followUp.mediaResource.mediaResourceType)(a, null, b);
};
z.cv = function() {
  Hf.call(this);
};
z.dv = function() {
  Hf.call(this);
};
var Zv = function(a, b, c) {
  z.Sh.call(this);
  this.da = a;
  this.ga = a.get("request");
  this.xj = a.get("media-resource");
  this.U = b;
  this.hi = c;
  this.ll = !1;
  this.Hc = new z.jj;
  a = new z.vu(this.Hc);
  a.vg(this.bF, this);
  this.XD = a;
  this.Pj = {};
};
var $v = function(a, b) {
  return(0,z.lj)(a.Hc, "followUpId", b);
};
var aw = function(a, b) {
  var c = new z.cv;
  c.bd(b.title);
  c.Zi(b.description);
  c.Nk(b.mediaResourceId);
  var d = z.Pk.Mc(c);
  d.creator = (0,z.G)("currentUser");
  d.creatorId = d.creator.userId;
  d.visibility = a.hi == d.creator.userId ? 2 : 1;
  d.mediaResource = a.xj.ei[d.mediaResourceId].Pa();
  var e = new z.fj(d);
  a.Hc.add(e);
  return(0,z.t)((0,z.r)(a.ga.post("/p/" + a.U + "/follow-ups/new", c, {ma:!0, Eq:!0}), function(a) {
    bw(this, a.value, a.references, e);
  }, a), z.K);
};
var cw = function(a, b) {
  var c = $v(a, b), d = a.Hc.indexOf(c);
  a.Hc.remove(c);
  return(0,z.t)((0,z.r)(a.ga.Dd("/p/" + a.U + "/follow-ups/" + b), function() {
    (0,z.ij)(c);
  }), function(a) {
    (0,z.K)(a);
    this.Hc.bh(c, d);
  }, a);
};
var dw = function(a, b, c) {
  a.Pj[b] && a.Pj[b].cancel();
  var d = $v(a, b), e = d.get("visibility");
  d.set("visibility", c);
  return a.Pj[b] = (0,z.t)((0,z.tc)(a.ga.put("/p/" + a.U + "/follow-ups/" + b + "/visibility", {visibility:c}, {ma:!0}), function() {
    delete this.Pj[b];
  }, a), function(a) {
    a instanceof z.Hc || ((0,z.K)(a), d.set("visibility", e));
  });
};
var bw = function(a, b, c, d) {
  b = (0,z.Wj)(b, c);
  b.mediaResource ? (c = (0,z.ew)(a.xj, b.mediaResource), b.mediaResource = c.Pa()) : (0,z.K)("Missing mediaResource in FU " + b.followUpId + " at id " + b.mediaResourceId);
  (d = d || (0,z.lj)(a.Hc, "followUpId", b.followUpId)) ? d.Yi(b) : a.Hc.add(b);
};
var fw = function(a, b, c) {
  z.B.call(this);
  this.da = a;
  this.ba = a.get("app");
  this.W = a.get("dialog");
  this.vi = a.get("butter-bar");
  this.za = b;
  this.U = (0,z.gj)(b, "id");
  this.hi = (0,z.gj)(b, "creatorId");
  this.Zw = !!(0,z.G)("isAuthenticated");
  this.pD = c;
  this.Aa = this.jl();
  this.aa = new Zv(a, this.U, this.hi);
  this.Ua = new z.Dq;
  (0,z.Eg)(this.Aa).D("start-new-follow-up", this.Ry, this).D("delete-follow-up", this.QF, this).D("set-follow-up-visibility", this.GG, this);
  (0,z.J)(this.Aa, "click", this.KF, this);
};
z.gw = function(a) {
  if (0 !== window.document.location.hash.indexOf("#fr-")) {
    return "";
  }
  var b = window.document.location.hash.substr(4);
  (0,z.Yr)(a.ba, "");
  return b;
};
z.hw = function(a, b) {
  var c = a.Aa.querySelector('[data-follow-up-id\x3d"' + b + '"]');
  c && c.scrollIntoView(!0);
};
var iw = function(a, b, c) {
  c = c || {};
  c.postId = a.U;
  (0,z.yj)(b, c);
};
var jw = function(a, b, c) {
  var d = $v(a.aa, b).get("visibility");
  (0,z.t)((0,z.r)(a.Ua.wa(dw(a.aa, b, c)), a.aE.bind(a, b, d)), a.bE, a);
};
var kw = function(a) {
  z.B.call(this);
  this.da = a;
};
var lw = function() {
  z.Sh.call(this);
  window.performance.now();
};
var mw = function(a, b) {
  this.da = a;
  this.dE = b;
  this.ga = a.get("request");
  this.ei = {};
  this.El = {};
  this.Io = {};
};
z.ew = function(a, b) {
  var c = b.mediaResourceId;
  c in a.ei ? a.ei[c].Yi(b) : (a.ei[c] = new z.fj(b), a.El[b.href] = c);
  return a.ei[c];
};
var nw = function(a) {
  this.da = a;
};
var ow = function(a, b, c) {
  c = (b = a.username == (c.currentUser && c.currentUser.username)) ? "I just published " : "by @" + a.username + " ";
  var d = "";
  if (b && a.collaborators && a.collaborators.length) {
    for (var d = d + " Thanks to ", e = a.collaborators, f = e.length, h = 0;h < f;h++) {
      d += "@" + e[h].user.username + (h != f - 1 ? " " : "");
    }
  }
  return a = "" + ((b ? c : "") + "“" + a.content + "” " + (b ? "" : c) + a.url + d);
};
var pw = function(a) {
  this.da = a;
};
z.qw = function(a, b) {
  var c = (0,z.H)(a, b), d = c.length - 140;
  b.url && -1 != c.indexOf(b.url) && (d += 25 - b.url.length);
  0 < d && (c = b.content, d = b.content.length - d, c.length < d ? d = c : (d = c.substr(0, d), c = /\s/.test(d[d.length - 1]) ? 1 : (c = d.match(/\w+$/)) ? c.pop().length + 1 : 1, d = d.substr(0, d.length - c), !/[^a-zA-Z0-9]/.test(d[d.length - 1]) || (d = d.substr(0, d.length - 1)), d += "…"), b.content = d, c = (0,z.H)(a, b));
  return c;
};
var rw = function() {
  z.Sh.call(this);
  this.$a = sw;
  this.jG = (0,z.Om)(tw, this.Fy, this);
  this.sa = [];
  this.sa.push((0,z.J)(window.document, "mousedown", this.Pg, this), (0,z.J)(window.document, "mouseup", this.Pg, this), (0,z.J)(window.document, "mouseover", this.Pg, this), (0,z.J)(window.document, "click", this.Pg, this), (0,z.J)(window.document, "dblclick", this.Pg, this), (0,z.J)(window.document, "keydown", this.Pg, this), (0,z.J)(window.document, "keyup", this.Pg, this), (0,z.J)(window, "focus", this.Pg, this), (0,z.J)(window, "blur", this.Fy, this));
};
var uw = function(a, b) {
  a.$a != b && (a.$a = b, a.Q("statechange", a.$a));
};
var vw = function(a, b, c) {
  this.Nz = b;
  this.yr = c;
  this.Ha = new z.Sh;
  this.$a = ww;
  this.Yo = [];
  this.C = this.Ha.C.bind(this.Ha);
};
z.xw = function(a) {
  "])}while(1);\x3c/x\x3e" == a.substr(0, 16) && (a = a.substring(16));
  return a;
};
var yw = function(a) {
  for (var b = ww, c = 0;c < a.Yo.length;c++) {
    b = Math.max(b, a.Yo[c].state);
  }
  a.$a != b && (a.$a = b, a.Ha.Q("statechange", b));
};
var zw = function(a) {
  var b = [], c;
  for (c in a) {
    b.push((0,window.encodeURIComponent)(c) + "\x3d" + (0,window.encodeURIComponent)(a[c]));
  }
  return b.join("\x26");
};
var Aw = function(a, b, c) {
  return c.isAuthenticated ? "\x3cp\x3eYou are logged out.\x3c/p\x3e" : "\x3cp\x3eYou need to be logged in to continue.\x3c/p\x3e";
};
z.Bw = function(a, b) {
  z.B.call(this);
  this.da = a;
  this.yr = b;
  a.get("app").C("startNav", this.at, this);
  a.get("app").C(Um, this.cG, this);
  a.get("request").C("send", this.FG, this);
  a.get("request").C("httperror", this.$s, this);
  a.get("request").C("successresponse", this.yG, this);
  this.W = a.get("dialog");
  a.get("fps");
  this.ox = [];
  Cw(this);
  window.OB_loadErrors && (window.OB_loadErrors.forEach(this.Qg, this), window.OB_loadErrors.length = 0, window.OB_loadErrors.push = this.Qg.bind(this));
};
var Cw = function(a) {
  var b = (0,z.hh)();
  window.OB_startTime && window.setTimeout(function() {
    var a = b - window.OB_startTime;
    (0,z.Fj)("pageload");
    (0,z.Gj)("client.loadtime", a);
    3E4 < a && (0,z.Fj)("slowload");
  }.bind(a), 0);
  window.performance && window.performance.timing && window.addEventListener("load", function() {
    window.setTimeout(function() {
      var a = window.performance.timing, d = a.navigationStart;
      (0,z.Gj)("client.perf.dns", a.domainLookupEnd - a.domainLookupStart);
      (0,z.Gj)("client.perf.firstByte", a.responseStart - d);
      (0,z.Gj)("client.perf.lastByte", a.responseEnd - d);
      (0,z.Gj)("client.perf.appstart", b - d);
      (0,z.Gj)("client.perf.domComplete", a.domComplete - d);
      (0,z.Gj)("client.perf.loadEnd", a.loadEventEnd - d);
    }, 500);
  }, !0);
};
var Dw = function(a) {
  this.da = a;
  this.Dt = Ew;
  this.Xg = [];
  this.cy = null;
  a.get("app").C("startNav", this.XH, this);
  a.get("app").C(Um, this.RD, this);
};
var Fw = function(a) {
  this.ba = a.get("app");
  this.ga = a.get("request");
  this.so = 0;
  this.ba.C("startNav", this.dm, this);
  this.ba.C(Um, this.QD, this);
  this.ga.C("statechange", this.refresh, this);
};
z.Gw = function(a, b) {
  z.Uh.call(this);
  this.hD = a;
  this.yD = "mouseover" === a ? "mouseout" : Hw;
  this.ic = null;
  this.fz = (0,z.Om)(Iw, this.vH, this);
  this.KD = b;
};
z.Jw = function() {
  this.Ai = !1;
  this.Jh = this.J = null;
  this.Kr = "";
  this.hf = this.Yr = this.Zr = null;
  this.dq = "tooltip";
  this.Rj = "fade";
  this.aA = "tooltip-arrow";
  this.$z = 20;
  this.enable();
};
var Kw = function(a, b, c) {
  a = Math.min(Math.abs(c), b - a.$z);
  return 0 < c ? -a : a;
};
var Lw = function(a) {
  return "bottom" == a ? "top" : "top" == a ? "bottom" : "left" == a ? "right" : "left";
};
z.Mw = function(a, b, c) {
  var d = (0,z.sg)(c), e = d.width, f = d.height;
  a.J.style.visibility = "hidden";
  (0,z.hr)(a.J, [a.dq, a.Rj]);
  var h = d.top, k = d.left, l = k + e / 2, m = h + f / 2, q, s, I, F;
  if ("top" == b || "bottom" == b) {
    c = a.J.offsetWidth;
    q = a.J.offsetHeight;
    I = f / 2;
    F = q / 2;
    F = "bottom" == b ? window.innerHeight - h - I - F : h + I - F;
    I = f / 2 + q / 2;
    f = I > F ? -1 * I : I;
    "top" == b && (f *= -1);
    if ("top" == b && 0 < f || "bottom" == b && 0 > f) {
      b = Lw(b);
    }
    F = -1 * (k + e / 2);
    h = window.innerWidth - k - e / 2;
    I = c / 2;
    e = I > h ? h - I : -I < F ? I + F : 0;
    I = Kw(a, c / 2, e);
  } else {
    c = a.J.offsetWidth;
    q = a.J.offsetHeight;
    s = e / 2;
    F = c / 2;
    F = "right" == b ? window.innerWidth - k - s - F : k + s - F;
    s = e / 2 + c / 2;
    e = s > F ? -1 * s : s;
    "left" == b && (e *= -1);
    if ("left" == b && 0 < e || "right" == b && 0 > e) {
      b = Lw(b);
    }
    F = -1 * (h + f / 2);
    h = window.innerHeight - h - f / 2;
    s = q / 2;
    f = s > h ? h - s : -s < F ? s + F : 0;
    s = Kw(a, q / 2, f);
  }
  m = Math.ceil(m + f - q / 2);
  l = Math.ceil(l + e - c / 2);
  e = (0,z.tf)(a.Jh).y - d.top;
  d = a.J;
  m += e;
  e = (0,z.tf)(d);
  l instanceof z.gd && (m = l.y, l = l.x);
  l = d.offsetLeft + (l - e.x);
  f = d.offsetTop + (m - e.y);
  e = z.Le && (z.Mg || Nw) && (0,z.Xc)("1.9");
  l instanceof z.gd ? (m = l.x, l = l.y) : (m = l, l = f);
  d.style.left = uf(m, e);
  d.style.top = uf(l, e);
  d = a.J.getElementsByClassName(a.aA)[0];
  d.style.left = I ? I + Math.ceil(c / 2) + "px" : "";
  d.style.top = s ? s + Math.ceil(q / 2) + "px" : "";
  a.J.className = a.J.className.replace(RegExp(a.dq + "-[^\\s]+"), "");
  (0,z.w)(a.J, a.dq + "-" + b);
  a.J.style.visibility = "";
};
z.Ow = function(a) {
  z.Jw.call(this);
  this.Aa = this.Zn = this.Yn = this.ic = null;
  this.dq = "popover";
  this.Rj = "fade";
  this.aA = "popover-arrow";
  this.$z = 30;
  this.ra = a.get("dom-monitor");
};
z.Pw = function(a, b, c, d, e, f) {
  if (!b || !c) {
    return(0,z.Fc)(Error("Missing content"));
  }
  a.remove();
  f = f || b.getAttribute("data-popover-position") || "top";
  var h = b.getAttribute("data-popover-type") || "html-content";
  a.J || (a.J = window.document.createElement("div"));
  a.Jh = b;
  e = e || (0,z.og)(b);
  e != a.Aa && (a.Aa && a.Aa.removeChild(a.J), a.Aa = e, a.Aa.appendChild(a.J));
  "html-content" == h ? a.J.innerHTML = zo({jA:c, Dv:d || ""}) : "sign-in" == h && (d = a.J, e = b.getAttribute("data-redirect"), h = b.getAttribute("data-popover-signin-type"), c = '\x3cdiv class\x3d"popover-inner"\x3e\x3ch2\x3e' + (0,z.O)(c) + '\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + $h("d", h)(null, null, void 0) + '\x3c/div\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"' + (0,z.P)(e) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e', 
  d.innerHTML = c);
  (0,z.Mw)(a, f, b);
  (0,z.dg)(a.hf);
  a.Yn || (a.Yn = (0,z.J)(window.document, "click", a.iE, a, !0));
  a.Zn || (a.Zn = (0,z.J)(window.document, "touchend", a.QE, a, !0));
  a.ra.C("resize-end", a.Jx, a);
  a.ic = new z.nc;
  return a.ic;
};
var Qw = function(a, b) {
  (0,z.Pw)(a, b, b.getAttribute("data-popover"));
};
z.Rw = function(a, b) {
  var c = a.V(), d = (0,z.kf)((0,z.sg)(c)), e = (0,z.pd)(window), f = 0;
  20 > d.top ? (f = d.top - 20, c.style.top = c.offsetTop - f + "px") : 20 > e.height - d.bottom && (f = e.height - d.bottom - 20);
  f && b && (b.style.height = b.offsetHeight + f + "px");
};
z.Sw = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Ui = !1;
  this.aC = !0;
};
z.Tw = function(a, b) {
  z.Sw.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Te = this.state = null;
  a && this.Lm(a, b);
};
z.Uw = function(a) {
  try {
    return!(!a || !a[z.Vw]);
  } catch (b) {
    return!1;
  }
};
var Ww = function(a, b, c, d, e) {
  this.Pi = a;
  this.Rq = null;
  this.src = b;
  this.type = c;
  this.Vj = !!d;
  this.nk = e;
  this.key = ++Xw;
  this.Hk = this.Zp = !1;
};
z.Yw = function(a) {
  a.Hk = !0;
  a.Pi = null;
  a.Rq = null;
  a.src = null;
  a.nk = null;
};
z.Zw = function(a) {
  this.src = a;
  this.hb = {};
  this.xn = 0;
};
z.$w = function(a, b) {
  var c = b.type;
  if (!(c in a.hb)) {
    return!1;
  }
  var d = (0,z.Za)(a.hb[c], b);
  d && ((0,z.Yw)(b), 0 == a.hb[c].length && (delete a.hb[c], a.xn--));
  return d;
};
z.ax = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Hk && f.Pi == b && f.Vj == !!c && f.nk == d) {
      return e;
    }
  }
  return-1;
};
z.bx = function(a) {
  if ((0,z.la)(a) || !a || a.Hk) {
    return!1;
  }
  var b = a.src;
  if ((0,z.Uw)(b)) {
    return b.FC(a);
  }
  var c = a.type, d = a.Rq;
  b.removeEventListener ? b.removeEventListener(c, d, a.Vj) : b.detachEvent && b.detachEvent(c in z.cx ? z.cx[c] : z.cx[c] = "on" + c, d);
  z.dx--;
  (c = (0,z.ex)(b)) ? ((0,z.$w)(c, a), 0 == c.xn && (c.src = null, b[z.fx] = null)) : (0,z.Yw)(a);
  return!0;
};
var gx = function(a, b, c, d) {
  var e = 1;
  if (a = (0,z.ex)(a)) {
    if (b = a.hb[b]) {
      for (b = (0,z.ej)(b), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.Vj == c && !f.Hk && (e &= !1 !== hx(f, d));
      }
    }
  }
  return Boolean(e);
};
var hx = function(a, b) {
  var c = a.Pi, d = a.nk || a.src;
  a.Zp && (0,z.bx)(a);
  return c.call(d, b);
};
z.ix = function(a, b) {
  if (a.Hk) {
    return!0;
  }
  if (!z.jx) {
    var c = b || ca("window.event"), d = new z.Tw(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = d.currentTarget;f;f = f.parentNode) {
        c.push(f);
      }
      for (var f = a.type, k = c.length - 1;!d.Ui && 0 <= k;k--) {
        d.currentTarget = c[k], e &= gx(c[k], f, !0, d);
      }
      for (k = 0;!d.Ui && k < c.length;k++) {
        d.currentTarget = c[k], e &= gx(c[k], f, !1, d);
      }
    }
    return e;
  }
  return hx(a, new z.Tw(b, this));
};
z.ex = function(a) {
  a = a[z.fx];
  return a instanceof z.Zw ? a : null;
};
var kx = function(a, b) {
  pj.call(this, a);
  this.fy = b;
};
var lx = function(a, b) {
  this.da = b;
  this.aI = b.get("activity").Hn;
  this.ga = b.get("request");
  this.X = a;
  this.$b = this.Co = null;
  this.Qa = b.get("butter-bar");
  this.W = b.get("dialog");
  this.am = null;
  mx(this);
  this.hj();
};
var mx = function(a) {
  (0,z.t)((0,z.r)((0,z.r)(a.ga.get("/me/activity", {ma:!0, background:!0}), function(a) {
    var c = a.value;
    a = a.links.loadMore;
    0 < c.length && a && (this.$b = new kx(this.da, a), this.$b.Oe(c), this.$b.C("add", this.mH, this));
    this.am = new z.hu(this.da, this.$b, 3);
    this.am.Gh(this.X);
  }, a), a.lc, a), z.K);
};
var nx = function(a, b, c) {
  b = "";
  if (0 < a.activities.length) {
    b += '\x3cul class\x3d"notifications-list"\x3e\x3cli class\x3d"notifications-list-heading"\x3eNotifications\x3c/li\x3e';
    for (var d = a.activities, e = d.length, f = 0;f < e;f++) {
      b += ox({Oa:d[f], lastViewedActivityAt:a.lastViewedActivityAt}, 0, c);
    }
    b += '\x3cli class\x3d"navigable-list-item"\x3e\x3cbutton title\x3d"See older notifications" class\x3d"btn btn-chromeless notifications-more" data-action\x3d"notifications-more"\x3eSee older notifications\x26hellip;\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e';
  }
  return b;
};
var ox = function(a, b, c) {
  b = "";
  var d = a.Oa.metadata.actors && 1 == a.Oa.metadata.actors.length ? a.Oa.metadata.actors[0] : a.Oa.metadata.actor, e = a.Oa.metadata.post, f = a.Oa.metadata.collection, h = a.Oa.metadata.note, k = a.Oa.metadata.followUp;
  if (d) {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.Oa.createdAt > a.lastViewedActivityAt ? " notifications-list-item-new" : "") + ' navigable-list-item"\x3e\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.eo)({user:d, wC:d ? d.name : "", vc:"icons-avatar-user-img", tabIndex:-1}, c) + '\x3c/div\x3e\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + px({type:a.Oa.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + '" data-source\x3d"activity"\x3e' + 
    (0,z.O)(d.name) + " " + $h("j", a.Oa.metadata.activityType)({post:e, followUp:k, collection:f}, null, c) + "\x3c/a\x3e\x3c/li\x3e";
  } else {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.Oa.metadata.actors && 1 < a.Oa.metadata.actors.length ? "extra-notification-avatars" : "") + ' navigable-list-item"\x3e' + (a.Oa.metadata.actors && 1 < a.Oa.metadata.actors.length ? '\x3cspan class\x3d"icons icons-circle-check notifications-icons-recommendation"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.eo)({user:d, wC:d ? d.name : "", vc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/span\x3e") + 
    '\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + px({type:a.Oa.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + '"\x3e';
    d = a.Oa.metadata.count;
    switch(a.Oa.metadata.actors.length) {
      case 0:
        break;
      case 1:
        b += (0,z.O)(a.Oa.metadata.actors[0].name) + " ";
        break;
      case 2:
        b += (0,z.O)(a.Oa.metadata.actors[0].name) + " and " + (0,z.O)(a.Oa.metadata.actors[1].name) + " ";
        break;
      default:
        b += 3 >= d ? (0,z.O)(a.Oa.metadata.actors[0].name) + ", " + (0,z.O)(a.Oa.metadata.actors[1].name) + ", and " + (0,z.O)(a.Oa.metadata.actors[2].name) + " " : (0,z.O)(a.Oa.metadata.actors[0].name) + ", " + (0,z.O)(a.Oa.metadata.actors[1].name) + ", " + (0,z.O)(a.Oa.metadata.actors[2].name) + ", and " + (0,z.O)(d - 3) + " other" + (4 < d ? "s" : "") + " ";
    }
    b += $h("j", a.Oa.metadata.activityType)({post:e, followUp:k, collection:f}, null, c) + "\x3c/a\x3e";
    if (a.Oa.metadata.actors && 1 < a.Oa.metadata.actors.length) {
      b += '\x3cdiv class\x3d"notification-user-avatar-icon-wrapper"\x3e';
      f = a.Oa.metadata.actors;
      k = f.length;
      for (d = 0;d < k;d++) {
        h = f[d], b += 3 > d ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.eo)({user:h, wC:h ? h.name : "", vc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : "";
      }
      b += (3 < a.Oa.metadata.actors.length ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon icons-extra"\x3e\x3cbutton class\x3d"notification-item-more" data-action\x3d"view-actors" data-action-value\x3d"' + (0,z.P)(a.Oa.links.actors) + '" dialog-title\x3d"Recommended ' + (0,z.P)(e.title) + '"\x3e\x26hellip;\x3c/button\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e";
    }
    b += "\x3c/li\x3e";
  }
  return b;
};
var qx = function(a, b, c) {
  b = '\x3cul class\x3d"notification-actors-list"\x3e';
  for (var d = a.actors, e = d.length, f = 0;f < e;f++) {
    b += '\x3cli class\x3d"notification-actors-list-item"\x3e' + go((0,z.L)(a, {user:d[f], vc:"avatar-icon notification-actors-list-icon", Rb:"notification-actors-list-link", uB:"notification-actors-list-name"}), c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var px = function(a, b) {
  var c = "";
  switch(a.type) {
    case "follow_up_published":
    ;
    case "follow_up_created":
    ;
    case "post_added_as_follow_up":
      c += Di(a, b) + "#fr-" + (0,z.P)(a.followUp.followUpId);
      break;
    case "post_recommended":
    ;
    case "post_collaborated_published":
      c += Di(a, b);
      break;
    case "post_cross_posted":
    ;
    case "collection_cross_posted":
      c += Di(a, b);
      break;
    case "post_noted":
    ;
    case "note_replied":
    ;
    case "post_note_replied":
    ;
    case "note_published":
    ;
    case "mention_in_note":
    ;
    case "mention_in_note_reply":
      c += Di(a, b) + "#" + (0,z.P)(a.note.anchor) + "-" + (0,z.P)(a.note.noteId);
  }
  return c;
};
var rx = function(a, b) {
  this.da = a;
  this.ba = a.get("app");
  this.Hn = a.get("activity").Hn;
  this.jd = a.get("request");
  this.Qa = a.get("butter-bar");
  this.ra = a.get("dom-monitor");
  this.Vg = b;
  this.qo = !1;
  this.wz = window.document.body.getElementsByClassName("site-nav-overlay")[0];
  this.uj = !1;
  this.jf = 0;
  (0,z.G)("isAuthenticated") && (0,z.G)("variants.can_view_activity") && new lx(b.getElementsByClassName("site-nav-scrollable-container")[0], a);
  this.hj();
};
var sx = function(a) {
  var b = window.document.getElementsByClassName("site-nav-list-item-active")[0];
  b && (0,z.x)(b, "site-nav-list-item-active");
  a && ((0,z.w)(a, "site-nav-list-item-active"), a.querySelector("*:not(.avatar-icon) \x3e a, input, button").focus());
};
var tx = function(a) {
  a.qo && (a.ra.xa("scroll", a.sp, a), a.qo = !1);
};
var ux = function(a) {
  this.da = a;
  this.ut = this.tt = this.Ez = this.Rx = this.ss = this.Yk = null;
  this.sa = [];
  a.get("app").C(Um, this.sF, this);
  (0,z.zg)("zoom", this.CI, this);
};
var vx = function(a, b) {
  a.Yk && (a.Yk.close(!!b), (0,z.dg)(a.sa), a.Yk = null);
};
var wx = function(a, b) {
  this.qe = this.Ol = null;
  this.Ka = (0,z.Wm)((0,z.Wr)(b.get("app")));
  this.Lb = a;
  this.Dx = Number(a.getAttribute("data-width") || 0);
  a.getAttribute("data-height");
  this.Gs = this.ic = this.Cx = null;
  z.B.call(this);
};
var xx = function(a) {
  var b = {imageId:a.getAttribute("data-action-value")};
  if (a.getAttribute("data-width")) {
    b.width = a.getAttribute("data-width");
    b.height = a.getAttribute("data-height");
    var c = b.width, d = b.height, e = (0,z.pd)(window), f = Wf(e.width, new Vf(200, 2560), 200, !0), e = Wf(e.height, new Vf(200, 4096), 200, !0), f = Math.min(f / c, e / d);
    a.width && (f = Math.max(f, Number(a.width) / c));
    f = Math.min(f, 1);
    b.height = Math.round(d * f);
    b.width = Math.round(c * f);
  }
  b.strategy = b.width && b.width == b.height ? "crop-fixed" : "resample";
  return(0,z.H)(z.zi, b);
};
var yx = function(a) {
  var b = window.document.createElement("img");
  b.src = xx(a.Lb);
  (0,z.w)(b, "zoom-img");
  a.ic = new z.nc;
  a.Gs = (0,z.J)(b, z.zx, a.ic.Ba, a.ic);
  (0,z.yj)(Ax, {imageId:a.Lb.getAttribute("data-action-value"), source:window.location.pathname});
  a.Cx = b;
  a.Dx ? Bx(a) : (0,z.r)(a.ic, function() {
    this.Dx = Number(b.width);
    Bx(this);
  }, a);
};
var Bx = function(a) {
  a.qe = window.document.createElement("div");
  (0,z.w)(a.qe, "zoom-img-wrap");
  a.Lb.parentNode.insertBefore(a.qe, a.Lb);
  a.qe.appendChild(a.Lb);
  (0,z.w)(a.Lb, "zoom-img");
  a.Ol = window.document.createElement("div");
  (0,z.w)(a.Ol, "zoom-overlay");
  window.document.body.appendChild(a.Ol);
  (0,z.tg)(a.Lb);
  var b = a.Lb.getAttribute("data-width"), c = a.Lb.getAttribute("data-height");
  (0,z.Jd)(a.Ka, a.Lb);
  var d = b / a.Lb.width, e = window.innerHeight - Cx, f = window.innerWidth - Cx;
  a.$E = b < f && c < e ? d : b / c < f / e ? e / c * d : f / b * d;
  Dx(a);
};
var Dx = function(a) {
  (0,z.tg)(a.Lb);
  var b = mg(a.Lb), c = ((0,z.Jd)(a.Ka, a.Lb) ? a.Ka.scrollTop : 0) + window.innerHeight / 2, d = window.innerWidth / 2, e = b.x + a.Lb.width / 2;
  a.rI = c - (b.y + a.Lb.height / 2);
  a.qI = d - e;
  a.Ip = (0,z.J)(a.qe, z.Un, function() {
    (0,z.r)(this.ic, function() {
      this.Lb.src = this.Cx.src;
    }, this);
    (0,z.dg)(this.Ip);
  }, a);
  (0,z.lf)(a.Lb, "transform", "scale(" + a.$E + ")");
  (0,z.lf)(a.qe, "transform", "translate(" + a.qI + "px, " + a.rI + "px) translateZ(0)");
  (0,z.w)(window.document.body, "zoom-overlay-open");
};
var Ex = function(a) {
  z.Sh.call(this);
  this.Jl = this.Zg = this.Pz = this.Ka = null;
  this.ra = a.get("dom-monitor");
  this.ra.C("scroll", this.xd, this);
  this.ba = a.get("app");
  this.ba.C(Um, this.fi, this);
  Fx(this);
};
var Gx = function(a) {
  if (a.Ka) {
    var b = a.Ka.scrollTop, c = (0,z.sg)(a.Ka).height, c = b + c, d = a.Ka.scrollHeight, e = (0,z.hh)(), f = Math.abs(a.$x - e);
    500 < f && 1E4 < f && (a.Q(Hx, {viewStartedAt:a.Pz, scrollTop:b, scrollBottom:c, scrollableHeight:d, loggedAt:e}), a.dF = b, a.$x = e);
  }
};
var Fx = function(a, b) {
  a.Jl = !a.Jl || b ? 2E3 : 2 * a.Jl;
  18E5 >= a.Jl && (a.Zg = (0,window.setTimeout)(a.MG.bind(a), a.Jl));
};
var Ix = function() {
  var a = new eq, b = String((0,z.G)("buildLabel"));
  a.scope("app").add("activity-monitor", rw).add("request", vw, 3, b).add("datastore", Kj).add("fps", lw).add("app", Rr, "/", String((0,z.G)("productName"))).add("image", Pu).add("dom-monitor", Sm).add("butter-bar", Yu, window.document.querySelector(".butter-bar")).add("twitter", pw).add("facebook", nw).add("tooltip", z.Jw).add("popover", z.Ow).add("dialog", qs).add("email", ss).add("coreactions", Eu).add("zoom", ux).add("activity", Mu).add("sitenav", rx, window.document.querySelector(".site-nav")).add("referrer-tracker", 
  Dw).add("scroll-tracker", Ex).add("loading-indicator", Fw).add("gestures", Wh, !0).add("publish-state", lq).add("media-resource", mw, !1).add("media-resource-frames", mw, !0).add("follow-ups", kw).add("diagnostics", z.Bw, b).ec("notes", "notes").ec("notes-mobile", "notes-mobile").ec("CollectionSettingsScreen", "posters").ec("DraftsScreen", "posters").ec("PostEditScreen", "posters").ec("RevertCandidateScreen", "posters").ec("StatsScreen", "stats").ec("ReferrersScreen", "stats").ec("BestOfScreen", 
  "misc-screens").ec("EspnScreen", "misc-screens").ec("StartWritingScreen", "misc-screens").ec("ExportScreen", "misc-screens").ec("FollowUpEditor", "misc-screens").ec("OnboardScreen", "misc-screens").ec("ProfileScreen", "misc-screens").ec("ReadingListScreen", "misc-screens").ec("SettingsScreen", "misc-screens").ec("VerificationScreen", "misc-screens");
  a.scope("screen").lu("screen").add("element-tracker", En);
  return a;
};
var Jx = function(a) {
  a.get("app").C(Um, this.fi, this);
};
var Kx = function(a, b) {
  var c = window.document.createElement("img");
  cg(c, "load", function() {
    (0,z.w)(b, "img-loaded");
  });
  c.src = a;
};
var Lx = function(a) {
  z.B.call(this);
  this.ra = a.get("dom-monitor");
  this.ol = [];
  this.ra.C("scroll-start", this.Ny, this);
  this.ra.C("scroll-end", this.Fj, this);
};
var Mx = function(a) {
  for (var b = 0;b < a.ol.length;b++) {
    (0,z.x)(a.ol[b], "disable-pointer-events");
  }
  a.ol.length = 0;
};
var Lu = function() {
  return "An error occurred, and we were unable to send your verification email.";
};
z.Ku = function() {
  return "We sent you a verification email. Please check your inbox.";
};
z.ba = [];
z.da = this;
qa = "closure_uid_" + (1E9 * Math.random() >>> 0);
sa = 0;
z.hh = Date.now || function() {
  return+new Date;
};
(0,z.p)(z.ya, Error);
z.ya.prototype.name = "CustomError";
var md;
z.ue = 3;
var Ga;
var La;
var Ka;
var Ja;
var Ia;
var Ha;
Ha = /&/g;
Ia = /</g;
Ja = />/g;
Ka = /"/g;
La = /'/g;
Ga = /[&<>"']/;
z.Nx = 2147483648 * Math.random() | 0;
z.$a = Array.prototype;
z.Ya = z.$a.indexOf ? function(a, b, c) {
  return z.$a.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if ((0,z.ka)(a)) {
    return(0,z.ka)(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
z.vd = z.$a.forEach ? function(a, b, c) {
  z.$a.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ka)(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
z.fd = z.$a.filter ? function(a, b, c) {
  return z.$a.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = (0,z.ka)(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
z.Bb = z.$a.map ? function(a, b, c) {
  return z.$a.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = (0,z.ka)(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (e[h] = b.call(c, f[h], h, a));
  }
  return e;
};
z.xc = z.$a.some ? function(a, b, c) {
  return z.$a.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ka)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
z.Ox = z.$a.every ? function(a, b, c) {
  return z.$a.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ka)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
z.ej = bb;
var pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
Function.prototype.bind || (Function.prototype.bind = yb);
Array.prototype.indexOf || (Array.prototype.indexOf = zb);
Array.prototype.map || (Array.prototype.map = Ab);
Date.now || (Date.now = z.hh);
Array.isArray || (Array.isArray = z.ha);
Object.keys || (Object.keys = kb);
(function() {
  for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new Date).getTime(), f = Math.max(0, 16 - (c - a)), h = window.setTimeout(function() {
      b(window.NaN);
    }, f);
    a = c + f;
    return h;
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    (0,window.clearTimeout)(a);
  });
})();
(function() {
  "undefined" === typeof window.performance && (window.performance = {});
  if (!window.performance.now) {
    var a = Date.now();
    window.performance.timing && window.performance.timing.navigationStart && (a = window.performance.timing.navigationStart);
    window.performance.now = function() {
      return Date.now() - a;
    };
  }
})();
window.URL = window.URL || window.webkitURL || window;
var Db = [], Fb = [], Eb = !1;
var Rx;
z.Px = (0,z.Ib)(!1);
z.Qx = (0,z.Ib)(!0);
Rx = (0,z.Ib)(null);
var Nb;
Cb(function(a) {
  Mb = a;
});
var Rb = !1, Tb = [];
var $b = 0, bc = 2, cc = 3;
Xb.prototype.Lf = function(a, b, c) {
  return hc(this, (0,z.ma)(a) ? a : null, (0,z.ma)(b) ? b : null, c);
};
Vb(Xb);
Xb.prototype.cancel = function(a) {
  this.Ge == $b && Qb(function() {
    var b = new ic(a);
    dc(this, b);
  }, this);
};
Xb.prototype.DC = function(a) {
  this.Ge = $b;
  ac(this, bc, a);
};
Xb.prototype.EC = function(a) {
  this.Ge = $b;
  ac(this, cc, a);
};
Xb.prototype.eJ = function() {
  for (;this.te && this.te.length;) {
    var a = this.te;
    this.te = [];
    for (var b = 0;b < a.length;b++) {
      ec(this, a[b], this.Ge, this.sg);
    }
  }
  this.Wu = !1;
};
var mc = Pb;
(0,z.p)(ic, z.ya);
ic.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Ic = z.da.setTimeout, zc = z.da.clearTimeout;
z.g = z.nc.prototype;
z.g.cancel = function(a) {
  if (this.Xd) {
    this.sg instanceof z.nc && this.sg.cancel();
  } else {
    if (this.Jb) {
      var b = this.Jb;
      delete this.Jb;
      a ? b.cancel(a) : (b.Yp--, 0 >= b.Yp && b.cancel());
    }
    this.BB ? this.BB.call(this.qA, this) : this.ow = !0;
    this.Xd || this.Wd(new z.Hc(this));
  }
};
z.g.kA = function(a, b) {
  this.su = !1;
  oc(this, a, b);
};
z.g.Ba = function(a) {
  qc(this);
  oc(this, !0, a);
};
z.g.Wd = function(a) {
  qc(this);
  oc(this, !1, a);
};
z.g.Lf = function(a, b, c) {
  var d, e, f = new Xb(function(a, b) {
    d = a;
    e = b;
  });
  sc(this, d, function(a) {
    a instanceof z.Hc ? f.cancel() : e(a);
  });
  return f.Lf(a, b, c);
};
Vb(z.nc);
z.nc.prototype.wi = function(a) {
  sc(this, a.Ba, a.Wd, a);
  return this;
};
z.nc.prototype.Ad = function(a) {
  var b = new z.nc;
  this.wi(b);
  a && (b.Jb = this, this.Yp++);
  return b;
};
(0,z.p)(rc, z.ya);
rc.prototype.message = "Deferred has already fired";
rc.prototype.name = "AlreadyCalledError";
(0,z.p)(z.Hc, z.ya);
z.Hc.prototype.message = "Deferred was canceled";
z.Hc.prototype.name = "CanceledError";
Dc.prototype.dL = function() {
  delete yc[this.Ae];
  throw this.cJ;
};
var yc = {}, Cc = 0;
var Sx;
Sx = !!z.da.DOMTokenList;
z.Dr = Sx ? function(a) {
  return a.classList;
} : function(a) {
  a = a.className;
  return(0,z.ka)(a) && a.match(/\S+/g) || [];
};
z.Lc = Sx ? function(a, b) {
  return a.classList.contains(b);
} : function(a, b) {
  return(0,z.Xa)((0,z.Dr)(a), b);
};
z.w = Sx ? function(a, b) {
  a.classList.add(b);
} : function(a, b) {
  (0,z.Lc)(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
};
z.hr = Sx ? function(a, b) {
  (0,z.vd)(b, function(b) {
    (0,z.w)(a, b);
  });
} : function(a, b) {
  var c = {};
  (0,z.vd)((0,z.Dr)(a), function(a) {
    c[a] = !0;
  });
  (0,z.vd)(b, function(a) {
    c[a] = !0;
  });
  a.className = "";
  for (var d in c) {
    a.className += 0 < a.className.length ? " " + d : d;
  }
};
z.x = Sx ? function(a, b) {
  a.classList.remove(b);
} : function(a, b) {
  (0,z.Lc)(a, b) && (a.className = (0,z.fd)((0,z.Dr)(a), function(a) {
    return a != b;
  }).join(" "));
};
z.gr = Sx ? function(a, b) {
  (0,z.vd)(b, function(b) {
    (0,z.x)(a, b);
  });
} : function(a, b) {
  a.className = (0,z.fd)((0,z.Dr)(a), function(a) {
    return!(0,z.Xa)(b, a);
  }).join(" ");
};
var Pc = /\s*;\s*/;
z.g = z.Nc.prototype;
z.g.isEnabled = (0,z.n)(82);
z.g.set = function(a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  (0,z.ga)(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0,z.hh)() + 1E3 * c)).toUTCString();
  this.Lc.cookie = a + "\x3d" + b + e + d + c + f;
};
z.g.get = function(a, b) {
  for (var c = a + "\x3d", d = (this.Lc.cookie || "").split(Pc), e = 0, f;f = d[e];e++) {
    if (0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
z.g.remove = function(a, b, c) {
  var d = this.zi(a);
  this.set(a, "", 0, b, c);
  return d;
};
z.g.$e = function() {
  return Oc(this).keys;
};
z.g.af = function() {
  return Oc(this).yn;
};
z.g.Dq = function() {
  return!this.Lc.cookie;
};
z.g.sc = function() {
  return this.Lc.cookie ? (this.Lc.cookie || "").split(Pc).length : 0;
};
z.g.zi = function(a) {
  return(0,z.ga)(this.get(a));
};
z.g.clear = function() {
  for (var a = Oc(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
var Tx = new z.Nc(window.document);
Tx.cM = 3950;
var Qc = 0, Sc = {};
z.B.prototype.wf = !1;
z.B.prototype.Eb = function() {
  if (!this.wf && (this.wf = !0, this.F(), 0 != Qc)) {
    var a = (0,z.pa)(this);
    delete Sc[a];
  }
};
z.B.prototype.F = function() {
  if (this.Xm) {
    for (;this.Xm.length;) {
      this.Xm.shift()();
    }
  }
};
var dy;
var cy;
var $x;
var Zx;
var Nw;
var Xx;
var Wx;
var Vx;
var Ux;
Xx = Wx = Vx = Ux = !1;
var ay;
if (ay = Uc()) {
  var by = Vc();
  Ux = (0,z.za)(ay, "Opera");
  Vx = !Ux && (-1 != ay.indexOf("MSIE") || -1 != ay.indexOf("Trident"));
  (Wx = !Ux && -1 != ay.indexOf("WebKit")) && ay.indexOf("Mobile");
  Xx = !Ux && !Wx && !Vx && "Gecko" == by.product;
}
z.Me = Ux;
z.D = Vx;
z.Le = Xx;
z.Td = Wx;
dy = Vc();
cy = dy && dy.platform || "";
z.Mg = -1 != cy.indexOf("Mac");
z.Yx = -1 != cy.indexOf("Win");
cy.indexOf("Linux");
Nw = !!Vc() && -1 != (Vc().appVersion || "").indexOf("X11");
var ey = Uc();
ey && ey.indexOf("Android");
Zx = !!ey && -1 != ey.indexOf("iPhone");
$x = !!ey && -1 != ey.indexOf("iPad");
var Zc;
a: {
  var fy = "", gy;
  if (z.Me && z.da.opera) {
    var hy = z.da.opera.version, fy = "function" == typeof hy ? hy() : hy
  } else {
    if (z.Le ? gy = /rv\:([^\);]+)(\)|;)/ : z.D ? gy = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z.Td && (gy = /WebKit\/(\S+)/), gy) {
      var iy = gy.exec(Uc()), fy = iy ? iy[1] : ""
    }
  }
  if (z.D) {
    var jy = Wc();
    if (jy > (0,window.parseFloat)(fy)) {
      Zc = String(jy);
      break a;
    }
  }
  Zc = fy;
}
var Yc = {}, ky = z.da.document, ad = ky && z.D ? Wc() || ("CSS1Compat" == ky.compatMode ? (0,window.parseInt)(Zc, 10) : 5) : void 0;
var Id;
var td = !z.D || $c(9);
!z.Le && !z.D || z.D && $c(9) || z.Le && (0,z.Xc)("1.9.1");
z.ly = z.D && !(0,z.Xc)("9");
Id = z.D || z.Me || z.Td;
z.g = z.gd.prototype;
z.g.ia = function() {
  return new z.gd(this.x, this.y);
};
z.g.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
z.g.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
z.g.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.gd ? (this.x += a.x, this.y += a.y) : (this.x += a, (0,z.la)(b) && (this.y += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.la)(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this;
};
z.g = hd.prototype;
z.g.ia = function() {
  return new hd(this.width, this.height);
};
z.g.fb = function() {
  return this.width * this.height;
};
z.g.Dq = function() {
  return!this.fb();
};
z.g.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.la)(b) ? b : a;
  this.width *= a;
  this.height *= c;
  return this;
};
var od = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
z.g = kd.prototype;
z.g.ig = function() {
  return this.Lc;
};
z.g.V = function(a) {
  return(0,z.ka)(a) ? this.Lc.getElementById(a) : a;
};
z.g.zw = kd.prototype.V;
z.g.oc = function(a, b, c) {
  return(0,z.sd)(this.Lc, arguments);
};
z.g.createElement = function(a) {
  return this.Lc.createElement(a);
};
z.g.createTextNode = function(a) {
  return this.Lc.createTextNode(String(a));
};
z.g.pd = function() {
  var a = this.Lc;
  return a.parentWindow || a.defaultView;
};
z.g.appendChild = function(a, b) {
  a.appendChild(b);
};
z.g.append = z.Ad;
z.g.removeNode = z.Dd;
z.g.kJ = z.Ed;
z.g.contains = z.Jd;
z.Wd = "StopIteration" in z.da ? z.da.StopIteration : Error("StopIteration");
z.Ud.prototype.Ta = function() {
  throw z.Wd;
};
z.Ud.prototype.Mh = function() {
  return this;
};
(0,z.p)(z.Yd, z.Ud);
z.g = z.Yd.prototype;
z.g.R = null;
z.g.Ec = 0;
z.g.rw = !1;
z.g.Pe = function(a) {
  this.R = a.R;
  this.Ec = a.Ec;
  this.depth = a.depth;
  this.td = a.td;
  this.eq = a.eq;
};
z.g.ia = function() {
  return new z.Yd(this.R, this.td, !this.eq, this.Ec, this.depth);
};
z.g.Ta = function() {
  var a;
  if (this.rw) {
    if (!this.R || this.eq && 0 == this.depth) {
      throw z.Wd;
    }
    a = this.R;
    var b = this.td ? -1 : 1;
    if (this.Ec == b) {
      var c = this.td ? a.lastChild : a.firstChild;
      c ? Zd(this, c) : Zd(this, a, -1 * b);
    } else {
      (c = this.td ? a.previousSibling : a.nextSibling) ? Zd(this, c) : Zd(this, a.parentNode, -1 * b);
    }
    this.depth += this.Ec * (this.td ? -1 : 1);
  } else {
    this.rw = !0;
  }
  a = this.R;
  if (!this.R) {
    throw z.Wd;
  }
  return a;
};
z.g.Fb = function(a) {
  return a.R == this.R && (!this.R || a.Ec == this.Ec);
};
z.g.splice = function(a) {
  var b = this.R, c = this.td ? 1 : -1;
  this.Ec == c && (this.Ec = -1 * c, this.depth += this.Ec * (this.td ? -1 : 1));
  this.td = !this.td;
  z.Yd.prototype.Ta.call(this);
  this.td = !this.td;
  for (var c = (0,z.ia)(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    (0,z.Bd)(c[d], b);
  }
  (0,z.Dd)(b);
};
z.g = z.ce.prototype;
z.g.sc = function() {
  return this.Bb;
};
z.g.af = function() {
  ee(this);
  for (var a = [], b = 0;b < this.rb.length;b++) {
    a.push(this.ee[this.rb[b]]);
  }
  return a;
};
z.g.$e = function() {
  ee(this);
  return this.rb.concat();
};
z.g.zi = function(a) {
  return fe(this.ee, a);
};
z.g.Fb = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.Bb != a.sc()) {
    return!1;
  }
  var c = b || de;
  ee(this);
  for (var d, e = 0;d = this.rb[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
z.g.Dq = function() {
  return 0 == this.Bb;
};
z.g.clear = function() {
  this.ee = {};
  this.zn = this.Bb = this.rb.length = 0;
};
z.g.remove = function(a) {
  return fe(this.ee, a) ? (delete this.ee[a], this.Bb--, this.zn++, this.rb.length > 2 * this.Bb && ee(this), !0) : !1;
};
z.g.get = function(a, b) {
  return fe(this.ee, a) ? this.ee[a] : b;
};
z.g.set = function(a, b) {
  fe(this.ee, a) || (this.Bb++, this.rb.push(a), this.zn++);
  this.ee[a] = b;
};
z.g.Oe = function(a) {
  var b;
  a instanceof z.ce ? (b = a.$e(), a = a.af()) : (b = kb(a), a = ib(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
z.g.ia = function() {
  return new z.ce(this);
};
z.g.yC = (0,z.n)(61);
z.g.dr = function() {
  ee(this);
  for (var a = {}, b = 0;b < this.rb.length;b++) {
    var c = this.rb[b];
    a[c] = this.ee[c];
  }
  return a;
};
z.g.Mh = function(a) {
  ee(this);
  var b = 0, c = this.rb, d = this.ee, e = this.zn, f = this, h = new z.Ud;
  h.Ta = function() {
    for (;;) {
      if (e != f.zn) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw z.Wd;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
(0,z.p)(z.ge, z.B);
z.ge.prototype.restore = function(a) {
  var b = this.fn();
  a || this.Eb();
  return b;
};
z.he.prototype.ce = function() {
  return!1;
};
z.he.prototype.ig = function() {
  return(0,z.ld)(z.D ? this.Zd() : this.Fa());
};
z.he.prototype.pd = function() {
  return(0,z.rd)(this.ig());
};
z.he.prototype.containsNode = function(a, b) {
  return this.eh((0,z.Oe)((0,z.Ce)(a), void 0), b);
};
(0,z.p)(oe, z.Yd);
(0,z.p)(z.pe, z.he);
z.pe.prototype.eh = function(a, b) {
  var c = (0,z.je)(this), d = (0,z.je)(a);
  return(b ? z.xc : z.Ox)(d, function(a) {
    return(0,z.xc)(c, function(c) {
      return c.eh(a, b);
    });
  });
};
z.pe.prototype.insertNode = (0,z.n)(111);
z.pe.prototype.zg = (0,z.n)(18);
(0,z.p)(z.qe, oe);
z.g = z.qe.prototype;
z.g.Ga = null;
z.g.Ea = null;
z.g.Za = 0;
z.g.Xa = 0;
z.g.Ii = (0,z.n)(102);
z.g.Gi = (0,z.n)(81);
z.g.Fa = function() {
  return this.Ga;
};
z.g.gb = function() {
  return this.Ea;
};
z.g.Pm = function() {
  return this.rw && this.R == this.Ea && (!this.Xa || 1 != this.Ec);
};
z.g.Ta = function() {
  if (this.Pm()) {
    throw z.Wd;
  }
  return z.qe.t.Ta.call(this);
};
z.g.Pe = function(a) {
  this.Ga = a.Ga;
  this.Ea = a.Ea;
  this.Za = a.Za;
  this.Xa = a.Xa;
  this.ef = a.ef;
  z.qe.t.Pe.call(this, a);
};
z.g.ia = function() {
  var a = new z.qe(this.Ga, this.Za, this.Ea, this.Xa, this.ef);
  a.Pe(this);
  return a;
};
z.g = z.re.prototype;
z.g.lh = (0,z.n)(94);
z.g.zm = (0,z.n)(63);
z.g.eh = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.na;
  try {
    return c ? 0 <= this.ve(d, 0, 1) && 0 >= this.ve(d, 1, 0) : 0 <= this.ve(d, 0, 0) && 0 >= this.ve(d, 1, 1);
  } catch (e) {
    if (!z.D) {
      throw e;
    }
    return!1;
  }
};
z.g.containsNode = function(a, b) {
  return this.eh((0,z.Ce)(a), b);
};
z.g.jg = (0,z.n)(69);
z.g.Mh = function() {
  return new z.qe(this.Fa(), this.Gb(), this.gb(), this.tc());
};
(0,z.p)(z.se, z.re);
z.g = z.se.prototype;
z.g.ia = function() {
  return new this.constructor(this.na.cloneRange());
};
z.g.Zd = function() {
  return this.na.commonAncestorContainer;
};
z.g.Fa = function() {
  return this.na.startContainer;
};
z.g.Gb = function() {
  return this.na.startOffset;
};
z.g.gb = function() {
  return this.na.endContainer;
};
z.g.tc = function() {
  return this.na.endOffset;
};
z.g.ve = function(a, b, c) {
  return this.na.compareBoundaryPoints(1 == c ? 1 == b ? z.da.Range.START_TO_START : z.da.Range.START_TO_END : 1 == b ? z.da.Range.END_TO_START : z.da.Range.END_TO_END, a);
};
z.g.isCollapsed = function() {
  return this.na.collapsed;
};
z.g.Nc = function() {
  return this.na.toString();
};
z.g.$d = (0,z.n)(87);
z.g.select = function(a) {
  var b = (0,z.rd)((0,z.ld)(this.Fa()));
  this.hn(b.getSelection(), a);
};
z.g.hn = function(a) {
  a.removeAllRanges();
  a.addRange(this.na);
};
z.g.insertNode = (0,z.n)(110);
z.g.zg = (0,z.n)(17);
z.g.collapse = function(a) {
  this.na.collapse(a);
};
(0,z.p)(xe, z.se);
xe.prototype.hn = function(a, b) {
  !b || this.isCollapsed() ? xe.t.hn.call(this, a, b) : (a.collapse(this.gb(), this.tc()), a.extend(this.Fa(), this.Gb()));
};
(0,z.p)(z.ye, z.re);
z.g = z.ye.prototype;
z.g.Ef = null;
z.g.Ga = null;
z.g.Ea = null;
z.g.Za = -1;
z.g.Xa = -1;
z.g.ia = function() {
  var a = new z.ye(this.na.duplicate(), this.ZI);
  a.Ef = this.Ef;
  a.Ga = this.Ga;
  a.Ea = this.Ea;
  return a;
};
z.g.hg = function() {
  this.Ef = this.Ga = this.Ea = null;
  this.Za = this.Xa = -1;
};
z.g.Zd = function() {
  if (!this.Ef) {
    var a = this.na.text, b = this.na.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if (this.isCollapsed() && 0 < b) {
      return this.Ef = c;
    }
    for (;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode;
    }
    for (;1 == c.childNodes.length && c.innerText == He(c.firstChild) && ve(c.firstChild);) {
      c = c.firstChild;
    }
    0 == a.length && (c = Ae(this, c));
    this.Ef = c;
  }
  return this.Ef;
};
z.g.Fa = function() {
  this.Ga || (this.Ga = Be(this, 1), this.isCollapsed() && (this.Ea = this.Ga));
  return this.Ga;
};
z.g.Gb = function() {
  0 > this.Za && (this.Za = De(this, 1), this.isCollapsed() && (this.Xa = this.Za));
  return this.Za;
};
z.g.gb = function() {
  if (this.isCollapsed()) {
    return this.Fa();
  }
  this.Ea || (this.Ea = Be(this, 0));
  return this.Ea;
};
z.g.tc = function() {
  if (this.isCollapsed()) {
    return this.Gb();
  }
  0 > this.Xa && (this.Xa = De(this, 0), this.isCollapsed() && (this.Za = this.Xa));
  return this.Xa;
};
z.g.ve = function(a, b, c) {
  return this.na.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a);
};
z.g.isCollapsed = function() {
  return 0 == this.na.compareEndPoints("StartToEnd", this.na);
};
z.g.Nc = function() {
  return this.na.text;
};
z.g.$d = (0,z.n)(86);
z.g.select = function() {
  this.na.select();
};
z.g.insertNode = (0,z.n)(109);
z.g.zg = (0,z.n)(16);
z.g.collapse = function(a) {
  this.na.collapse(a);
  a ? (this.Ea = this.Ga, this.Xa = this.Za) : (this.Ga = this.Ea, this.Za = this.Xa);
};
(0,z.p)(Ie, z.se);
Ie.prototype.hn = function(a) {
  a.collapse(this.Fa(), this.Gb());
  this.gb() == this.Fa() && this.tc() == this.Gb() || a.extend(this.gb(), this.tc());
  0 == a.rangeCount && a.addRange(this.na);
};
(0,z.p)(Je, z.se);
Je.prototype.ve = function(a, b, c) {
  return(0,z.Xc)("528") ? Je.t.ve.call(this, a, b, c) : this.na.compareBoundaryPoints(1 == c ? 1 == b ? z.da.Range.START_TO_START : z.da.Range.END_TO_START : 1 == b ? z.da.Range.START_TO_END : z.da.Range.END_TO_END, a);
};
Je.prototype.hn = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.gb(), this.tc(), this.Fa(), this.Gb()) : a.setBaseAndExtent(this.Fa(), this.Gb(), this.gb(), this.tc());
};
(0,z.p)(z.Ne, z.he);
z.g = z.Ne.prototype;
z.g.ti = null;
z.g.Ga = null;
z.g.Za = null;
z.g.Ea = null;
z.g.Xa = null;
z.g.ef = !1;
z.g.ia = function() {
  var a = new z.Ne;
  a.ti = this.ti;
  a.Ga = this.Ga;
  a.Za = this.Za;
  a.Ea = this.Ea;
  a.Xa = this.Xa;
  a.ef = this.ef;
  return a;
};
z.g.g = function() {
  return "text";
};
z.g.Fi = function() {
  return(0,z.Re)(this).na;
};
z.g.hg = function() {
  this.Ga = this.Za = this.Ea = this.Xa = null;
};
z.g.kk = function() {
  return 1;
};
z.g.nh = function() {
  return this;
};
z.g.Zd = function() {
  return(0,z.Re)(this).Zd();
};
z.g.Fa = function() {
  return this.Ga || (this.Ga = (0,z.Re)(this).Fa());
};
z.g.Gb = function() {
  return null != this.Za ? this.Za : this.Za = (0,z.Re)(this).Gb();
};
z.g.lh = (0,z.n)(93);
z.g.gb = function() {
  return this.Ea || (this.Ea = (0,z.Re)(this).gb());
};
z.g.tc = function() {
  return null != this.Xa ? this.Xa : this.Xa = (0,z.Re)(this).tc();
};
z.g.zm = (0,z.n)(62);
z.g.ce = function() {
  return this.ef;
};
z.g.eh = function(a, b) {
  var c = a.g();
  return "text" == c ? (0,z.Re)(this).eh((0,z.Re)(a), b) : "control" == c ? (c = We(a), (b ? z.xc : z.Ox)(c, function(a) {
    return this.containsNode(a, b);
  }, this)) : !1;
};
z.g.isCollapsed = function() {
  return(0,z.Re)(this).isCollapsed();
};
z.g.Nc = function() {
  return(0,z.Re)(this).Nc();
};
z.g.jg = (0,z.n)(68);
z.g.$d = (0,z.n)(85);
z.g.Mh = function() {
  return new z.qe(this.Fa(), this.Gb(), this.gb(), this.tc());
};
z.g.select = function() {
  (0,z.Re)(this).select(this.ef);
};
z.g.insertNode = (0,z.n)(108);
z.g.zg = (0,z.n)(15);
z.g.ew = function() {
  return new Se(this);
};
z.g.collapse = function(a) {
  a = this.ce() ? !a : a;
  this.ti && this.ti.collapse(a);
  a ? (this.Ea = this.Ga, this.Xa = this.Za) : (this.Ga = this.Ea, this.Za = this.Xa);
  this.ef = !1;
};
(0,z.p)(Se, z.ge);
Se.prototype.fn = function() {
  return(0,z.Pe)(this.Zz, this.FI, this.HA, this.lJ);
};
Se.prototype.F = function() {
  Se.t.F.call(this);
  this.HA = this.Zz = null;
};
(0,z.p)(z.Te, z.pe);
z.g = z.Te.prototype;
z.g.na = null;
z.g.rc = null;
z.g.tn = null;
z.g.hg = function() {
  this.tn = this.rc = null;
};
z.g.ia = function() {
  return Ve.apply(this, We(this));
};
z.g.g = function() {
  return "control";
};
z.g.Fi = function() {
  return this.na || window.document.body.createControlRange();
};
z.g.kk = function() {
  return this.na ? this.na.length : 0;
};
z.g.nh = function(a) {
  a = this.na.item(a);
  return(0,z.Oe)((0,z.Ce)(a), void 0);
};
z.g.Zd = function() {
  return z.Nd.apply(null, We(this));
};
z.g.Fa = function() {
  return(0,z.Xe)(this)[0];
};
z.g.Gb = function() {
  return 0;
};
z.g.gb = function() {
  var a = (0,z.Xe)(this), b = (0,z.Ua)(a);
  return(0,z.Va)(a, function(a) {
    return(0,z.Jd)(a, b);
  });
};
z.g.tc = function() {
  return this.gb().childNodes.length;
};
z.g.isCollapsed = function() {
  return!this.na || !this.na.length;
};
z.g.Nc = function() {
  return "";
};
z.g.jg = (0,z.n)(67);
z.g.$d = (0,z.n)(84);
z.g.Mh = function() {
  return new z.Ze(this);
};
z.g.select = function() {
  this.na && this.na.select();
};
z.g.ew = function() {
  return new Ye(this);
};
z.g.collapse = function() {
  this.na = null;
  this.hg();
};
(0,z.p)(Ye, z.ge);
Ye.prototype.fn = function() {
  for (var a = (this.rc.length ? (0,z.ld)(this.rc[0]) : window.document).body.createControlRange(), b = 0, c = this.rc.length;b < c;b++) {
    a.addElement(this.rc[b]);
  }
  return(0,z.Ue)(a);
};
Ye.prototype.F = function() {
  Ye.t.F.call(this);
  delete this.rc;
};
(0,z.p)(z.Ze, oe);
z.g = z.Ze.prototype;
z.g.Ga = null;
z.g.Ea = null;
z.g.rc = null;
z.g.Ii = (0,z.n)(101);
z.g.Gi = (0,z.n)(80);
z.g.Fa = function() {
  return this.Ga;
};
z.g.gb = function() {
  return this.Ea;
};
z.g.Pm = function() {
  return!this.depth && !this.rc.length;
};
z.g.Ta = function() {
  if (this.Pm()) {
    throw z.Wd;
  }
  if (!this.depth) {
    var a = this.rc.shift();
    Zd(this, a, 1, 1);
    return a;
  }
  return z.Ze.t.Ta.call(this);
};
z.g.Pe = function(a) {
  this.rc = a.rc;
  this.Ga = a.Ga;
  this.Ea = a.Ea;
  z.Ze.t.Pe.call(this, a);
};
z.g.ia = function() {
  var a = new z.Ze(null);
  a.Pe(this);
  return a;
};
(0,z.p)(z.$e, z.pe);
z.g = z.$e.prototype;
z.g.hg = function() {
  this.Ek = [];
  this.fq = this.Rk = null;
};
z.g.ia = function() {
  var a = new z.$e;
  a.vf = (0,z.ej)(this.vf);
  return a;
};
z.g.g = function() {
  return "mutli";
};
z.g.Fi = function() {
  return this.vf[0];
};
z.g.kk = function() {
  return this.vf.length;
};
z.g.nh = function(a) {
  this.Ek[a] || (this.Ek[a] = (0,z.Oe)((0,z.Ke)(this.vf[a]), void 0));
  return this.Ek[a];
};
z.g.Zd = function() {
  if (!this.fq) {
    for (var a = [], b = 0, c = this.kk();b < c;b++) {
      a.push(this.nh(b).Zd());
    }
    this.fq = z.Nd.apply(null, a);
  }
  return this.fq;
};
z.g.Fa = function() {
  return bf(this)[0].Fa();
};
z.g.Gb = function() {
  return bf(this)[0].Gb();
};
z.g.gb = function() {
  return(0,z.Ua)(bf(this)).gb();
};
z.g.tc = function() {
  return(0,z.Ua)(bf(this)).tc();
};
z.g.isCollapsed = function() {
  return 0 == this.vf.length || 1 == this.vf.length && this.nh(0).isCollapsed();
};
z.g.Nc = function() {
  return(0,z.Bb)((0,z.je)(this), function(a) {
    return a.Nc();
  }).join("");
};
z.g.jg = (0,z.n)(66);
z.g.$d = (0,z.n)(83);
z.g.Mh = function() {
  return new z.df(this);
};
z.g.select = function() {
  var a = (0,z.ie)(this.pd());
  a.removeAllRanges();
  for (var b = 0, c = this.kk();b < c;b++) {
    a.addRange(this.nh(b).Fi());
  }
};
z.g.ew = function() {
  return new cf(this);
};
z.g.collapse = function(a) {
  if (!this.isCollapsed()) {
    var b = a ? this.nh(0) : this.nh(this.kk() - 1);
    this.hg();
    b.collapse(a);
    this.Ek = [b];
    this.Rk = [b];
    this.vf = [b.Fi()];
  }
};
(0,z.p)(cf, z.ge);
cf.prototype.fn = function() {
  var a = (0,z.Bb)(this.fw, function(a) {
    return a.restore();
  });
  return af(a);
};
cf.prototype.F = function() {
  cf.t.F.call(this);
  (0,z.vd)(this.fw, function(a) {
    a.Eb();
  });
  delete this.fw;
};
(0,z.p)(z.df, oe);
z.g = z.df.prototype;
z.g.Cf = null;
z.g.Yj = 0;
z.g.Ii = (0,z.n)(100);
z.g.Gi = (0,z.n)(79);
z.g.Fa = function() {
  return this.Cf[0].Fa();
};
z.g.gb = function() {
  return(0,z.Ua)(this.Cf).gb();
};
z.g.Pm = function() {
  return this.Cf[this.Yj].Pm();
};
z.g.Ta = function() {
  try {
    var a = this.Cf[this.Yj], b = a.Ta();
    Zd(this, a.R, a.Ec, a.depth);
    return b;
  } catch (c) {
    if (c !== z.Wd || this.Cf.length - 1 == this.Yj) {
      throw c;
    }
    this.Yj++;
    return this.Ta();
  }
};
z.g.Pe = function(a) {
  this.Cf = (0,z.ej)(a.Cf);
  z.df.t.Pe.call(this, a);
};
z.g.ia = function() {
  var a = new z.df(null);
  a.Pe(this);
  return a;
};
(0,z.vb)("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL");
(0,z.vb)("IMG", "IFRAME", "EMBED");
var Cy;
var By;
var yy;
var vy;
var uy;
var my, ny, oy, py, qy, ry, sy;
sy = ry = qy = py = oy = ny = my = !1;
var ty = Uc();
ty && (-1 != ty.indexOf("Firefox") ? my = !0 : -1 != ty.indexOf("Camino") ? ny = !0 : -1 != ty.indexOf("iPhone") || -1 != ty.indexOf("iPod") ? oy = !0 : -1 != ty.indexOf("iPad") ? py = !0 : -1 != ty.indexOf("Chrome") ? ry = !0 : -1 != ty.indexOf("Android") ? qy = !0 : -1 != ty.indexOf("Safari") && (sy = !0));
uy = my;
vy = ny;
z.wy = oy;
z.xy = py;
yy = qy;
By = ry;
Cy = sy;
var Dy = function() {
  if (uy) {
    return ef(/Firefox\/([0-9.]+)/);
  }
  if (z.D || z.Me) {
    return Zc;
  }
  if (By) {
    return ef(/Chrome\/([0-9.]+)/);
  }
  if (Cy) {
    return ef(/Version\/([0-9.]+)/);
  }
  if (z.wy || z.xy) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Uc())) {
      return a[1] + "." + a[2];
    }
  } else {
    if (yy) {
      return(a = ef(/Android\s+([0-9.]+)/)) ? a : ef(/Version\/([0-9.]+)/);
    }
    if (vy) {
      return ef(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
z.Ey = z.D || z.Td || z.Me || !1;
z.Fy = z.Td || !1;
z.Gy = z.D || z.Td || z.Me;
z.Td && (0,z.Xc)("534.16");
z.Hy = z.Le && !0;
z.D && (0,z.Xc)("7.0");
z.Iy = z.Le && (0,z.Xc)("1.8") || z.Td || z.Me;
z.Jy = z.Td || z.D && (0,z.Xc)("9");
z.D || z.Me || z.Le && (0,z.Xc)("1.9");
z.Le || z.Td && (0,z.Xc)("527");
z.Ky = z.D || z.Me;
z.Ly = z.D || z.Td && (0,z.Xc)("525");
z.Td && (0,z.Xc)("531");
z.My = z.Td && !(0,z.Xc)("528");
z.Le && (0,z.Xc)("1.9") || z.D || z.Me || z.Td && (0,z.Xc)("531");
z.Le || z.Td && (0,z.Xc)("526");
By && 0 <= Pa(Dy, "4") || Cy && (0,z.Xc)("533") || z.Le && (0,z.Xc)("2.0") || z.D && (0,z.Xc)("10");
z.Me && (0,z.Xc)("11.10");
By && Pa(Dy, "12");
var Hw;
z.Ny = z.D ? "focusin" : "DOMFocusIn";
Hw = z.D ? "focusout" : "DOMFocusOut";
z.zx = "load";
z.Un = z.Td ? "webkitTransitionEnd" : z.Me ? "otransitionend" : "transitionend";
z.g = z.hf.prototype;
z.g.ia = function() {
  return new z.hf(this.top, this.right, this.bottom, this.left);
};
z.g.contains = function(a) {
  return this && a ? a instanceof z.hf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
z.g.expand = (0,z.n)(116);
z.g.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
z.g.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
z.g.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.gd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0,z.la)(b) && (this.top += b, this.bottom += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.la)(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
z.g = z.jf.prototype;
z.g.ia = function() {
  return new z.jf(this.left, this.top, this.width, this.height);
};
z.g.Cq = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if (b <= c) {
    var d = Math.max(this.top, a.top);
    a = Math.min(this.top + this.height, a.top + a.height);
    if (d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0;
    }
  }
  return!1;
};
z.g.contains = function(a) {
  return a instanceof z.jf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height;
};
z.g.Ed = (0,z.n)(73);
z.g.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.gd ? (this.left += a.x, this.top += a.y) : (this.left += a, (0,z.la)(b) && (this.top += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.la)(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= c;
  this.height *= c;
  return this;
};
(0,z.vb)("text", "file", "url");
yf[" "] = z.ea;
z.g = zf.prototype;
z.g.Vo = null;
z.g.pt = null;
z.g.toString = function() {
  return this.ot;
};
z.g.ea = function(a) {
  Af(this);
  var b = this.Vo.concat(), c;
  for (c in this.pt) {
    var d = this.pt[c];
    b[d.index] = d.Na(a[c]);
  }
  return b.join("/");
};
z.g.parse = function(a) {
  Af(this);
  a = a.split("/").map(window.decodeURIComponent);
  for (var b = {}, c = 0;c < a.length;c++) {
    ":" == this.Vo[c].charAt(0) && (b[this.Vo[c].substr(1)] = a[c]);
  }
  return b;
};
var Bf = /^:([^\[]*)(?:\[pad=([0-9]+)\])?$/;
Cf.prototype.Na = function(a) {
  a = String(a);
  if (null != this.padding) {
    var b = Math.max(0, this.padding - a.length);
    a = Array(b + 1).join("0") + a;
  } else {
    if ("number" === typeof a) {
      throw Error("All numeric range keys must be padded: " + a);
    }
  }
  return(0,window.encodeURIComponent)(a);
};
Df.prototype.Mc = function() {
  throw Error();
};
Df.prototype.zb = function() {
  throw Error();
};
Df.prototype.ia = function(a) {
  return this.zb(a.constructor, this.Mc(a));
};
(0,z.p)(Ef, Df);
z.Pk = new Ef;
Ef.prototype.Mc = function(a) {
  var b = {}, c = a.xe().fields, d;
  for (d in c) {
    var e = a.w(d);
    if ((0,z.Jf)(a, d)) {
      var f = b, h = d, k;
      k = c[d];
      if (k.h()) {
        if (null == e) {
          k = null;
        } else {
          if (!Array.isArray(e)) {
            throw Error("malformed message " + e);
          }
          for (var l = [], m = 0;m < e.length;m++) {
            l[m] = Gf(this, k, e[m]);
          }
          k = l;
        }
      } else {
        k = Gf(this, k, e);
      }
      f[h] = k;
    }
  }
  return b;
};
Ef.prototype.zb = function(a, b, c) {
  if (b.Xk) {
    throw Error("Already a PB message");
  }
  c = !!c;
  a = new a;
  (0,z.If)(a, c);
  var d = a.xe().fields, e;
  for (e in b) {
    if (d.hasOwnProperty(e)) {
      var f = a, h = e, k;
      k = d[e];
      var l = b[e], m = c;
      if (k.h()) {
        if (null == l) {
          k = null;
        } else {
          if (!Array.isArray(l)) {
            throw Error("Expected array, found " + l);
          }
          for (var q = [], s = 0;s < l.length;s++) {
            q[s] = Ff(this, k, l[s], m);
          }
          k = q;
        }
      } else {
        k = Ff(this, k, l, m);
      }
      (0,z.E)(f, h, k);
    } else {
      f = 'Trying to set field "' + e + '" not in schema "' + a.xe().name + '"';
      if (c) {
        throw Error(f);
      }
      z.da.console && z.da.console.warn && window.console.warn(f);
    }
  }
  return a;
};
z.g = Hf.prototype;
z.g.Xk = !0;
z.g.ck = function(a) {
  var b = this.xe().fields[a];
  if (!b) {
    throw Error("Unrecognized field " + a);
  }
  return b;
};
z.g.w = function(a) {
  this.ck(a);
  return a in this.data ? this.data[a] : Lf(this, a);
};
z.g.Yi = function(a) {
  for (var b in a) {
    b in this.xe().fields ? (0,z.E)(this, b, a[b]) : (z.da.console && window.console.warn("Trying to set field not in ProtoModel:", b, this.xe().name), this.data[b] = a[b]);
  }
  return this;
};
z.g.Pa = function() {
  return z.Pk.Mc(this);
};
z.g.ia = function() {
  return z.Pk.ia(this);
};
z.g.Fb = function(a) {
  if (this.constructor != a.constructor) {
    return!1;
  }
  var b = this.xe().fields, c;
  for (c in b) {
    var d = b[c], e = this.data[c], f = a.data[c], h = !1, h = d.h() ? e && f ? e.length == f.length && e.every(function(a, b) {
      return Of(this, d, a, f[b]);
    }, this) : e === f : Of(this, d, e, f);
    if (!h) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(Qf, Hf);
var Oy = {id:!0, column:!0, hashKey:!0, rangeKey:!0};
Qf.prototype.ck = function(a) {
  var b = this.xe().fields[a];
  if (!b) {
    if (Oy[a]) {
      return null;
    }
    throw Error("Unrecognized field " + a);
  }
  return b;
};
Qf.prototype.JA = function() {
  return this.w(this.xe().ab);
};
Qf.prototype.qJ = function() {
  return this.data.column || this.xe().lb.ea(this.data);
};
Qf.prototype.be = function() {
  var a = this.xe();
  return void 0 === a.be || a.be;
};
var Py = {TC:1, MC:2, WC:3, XC:4, KC:5, RC:6, $isProtoEnum:!0};
(0,z.p)(z.Sf, Qf);
Rf(z.Sf, !1, {name:"InternalReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return Py;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.Sf.prototype.g = function() {
  return this.w("type");
};
z.Sf.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.Sf.prototype.oa = (0,z.n)(55);
z.Sf.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
(0,z.p)(Tf, Qf);
Rf(Tf, !1, {name:"SearchReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
Tf.prototype.hk = function() {
  return this.w("domain");
};
Tf.prototype.ln = function(a) {
  return(0,z.E)(this, "domain", a);
};
(0,z.p)(Uf, Qf);
Rf(Uf, !1, {name:"SiteReferrer", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
Uf.prototype.zf = function() {
  return this.w("href");
};
Uf.prototype.nn = function(a) {
  return(0,z.E)(this, "href", a);
};
Uf.prototype.Hb = function() {
  return this.w("title");
};
Uf.prototype.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
var Fm = new hd(500, 250), Xf = (0,z.nb)({addImageAnimationImg:"addImageAnimationImg", baseUrl:"baseUrl", bestOfFirstSlug:"bestOfFirstSlug", bestOfLatestSlug:"bestOfLatestSlug", buildLabel:"buildLabel", contributeSoonUrl:"contributeSoonUrl", currentUser:"currentUser", promoStartWritingBackgroundImage:"promoStartWritingBackgroundImage", promoStartWritingHomeImage:"promoStartWritingHomeImage", defaultPreviewImage:"defaultPreviewImage", defaultUserImage:"defaultUserImage", XI:"deviceHeight", YI:"deviceHeightImageBucket", 
deviceWidth:"deviceWidth", deviceWidthImageBucket:"deviceWidthImageBucket", devicePixelRatio:"devicePixelRatio", embedded:"embedded", embedSupportUrl:"embedSupportUrl", facebookKey:"facebookKey", helpUrl:"helpUrl", homeImageId:"homeImageId", howToPostUrl:"howToPostUrl", isAuthenticated:"isAuthenticated", isCurrentUserVerified:"isCurrentUserVerified", jobsUrl:"jobsUrl", language:"language", miroUrl:"miroUrl", moduleUrls:"moduleUrls", policyUrl:"policyUrl", postColumnWidth:"postColumnWidth", privacyUrl:"privacyUrl", 
productName:"productName", supportsEdit:"supportsEdit", useragent:"useragent", variants:"variants", toolbarAnimationImg:"toolbarAnimationImg", welcomeUrl:"welcomeUrl", onboardingLandscapeFooterImage:"onboardingLandscapeFooterImage"});
Object.keys(Xf);
z.Qy = RegExp("(^|[^a-z0-9_!#$%^\x26*@＠/])(?:[@＠])([a-z0-9_]{1,15})", "gi");
Vf.prototype.ia = function() {
  return new Vf(this.start, this.end);
};
var Ry = "sz", Sy = "pr", bg = new Vf(600, 2E3), Gm = new Vf(200, 2E3);
z.Yf = {};
var gg = !!window.addEventListener, hg = gg ? "addEventListener" : "attachEvent", ig = gg ? "removeEventListener" : "detachEvent";
xg.prototype.D = function(a, b, c) {
  this.eg[a] || (this.eg[a] = []);
  this.eg[a].push({ek:b, hq:c});
  return this;
};
xg.prototype.clear = function(a) {
  return "undefined" == typeof a ? (this.eg = {}, !0) : yg(this, a) ? (delete this.eg[a], !0) : !1;
};
xg.prototype.Ue = function(a) {
  var b, c = [];
  yg(this, a.ie || "") && (0,z.cb)(c, this.eg[a.ie]);
  yg(this, "*") && (0,z.cb)(c, this.eg["*"]);
  for (var d = 0;d < c.length;d++) {
    b = b || !!c[d].ek.call(c[d].hq, a);
  }
  return b;
};
var Bg = null, Dg = !1, Gg = {}, Fg = 0;
var Sg = {};
(0,z.p)(z.Tg, z.nc);
Ug("start");
Ug("iteration");
var Ty = Ug("end");
z.g = z.Tg.prototype;
z.g.ED = function() {
  (0,z.dg)(this.tr);
  this.tr = null;
  (0,z.lf)(this.ja, "animation", "");
};
z.g.start = function() {
  if ("unsupported" == Rg()) {
    return this.Ba(), this;
  }
  (0,z.of)(this.ja, "animation");
  var a = (0,z.Bb)(this.gp, function(a) {
    var c = [a.name, a.duration + "ms"];
    a.timing && c.push(a.timing);
    a.Xc && c.push(a.Xc + "ms");
    a.fill && c.push(a.fill);
    a.direction && c.push(a.direction);
    a.YJ && c.push(a.YJ);
    return c.join(" ");
  });
  this.tr = (0,z.J)(this.ja, Ty, this.CF, this);
  (0,z.lf)(this.ja, "animation", a.join(","));
  ah(this);
  return this;
};
z.g.pause = function(a) {
  return(0,z.Vg)(this, !0, a);
};
z.g.gn = (0,z.n)(92);
z.g.CF = function(a) {
  var b = this.Nn[a.animationName] = !0;
  this.gp.forEach(function(c) {
    b = b && !!this.Nn[c.name];
    c.name == a.animationName && (c.paused = !0);
  }, this);
  b && this.Ba();
};
(0,z.p)(z.bh, z.B);
z.g = z.bh.prototype;
z.g.kB = 1;
z.g.$m = 0;
z.g.C = function(a, b, c) {
  var d = this.gf[a];
  d || (d = this.gf[a] = []);
  var e = this.kB;
  this.ge[e] = a;
  this.ge[e + 1] = b;
  this.ge[e + 2] = c;
  this.kB = e + 3;
  d.push(e);
  return e;
};
z.g.xa = function(a, b, c) {
  if (a = this.gf[a]) {
    var d = this.ge;
    if (a = (0,z.Va)(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.Uk(a);
    }
  }
  return!1;
};
z.g.Uk = function(a) {
  if (0 != this.$m) {
    return this.Zm || (this.Zm = []), this.Zm.push(a), !1;
  }
  var b = this.ge[a];
  if (b) {
    var c = this.gf[b];
    c && (0,z.Za)(c, a);
    delete this.ge[a];
    delete this.ge[a + 1];
    delete this.ge[a + 2];
  }
  return!!b;
};
z.g.Q = function(a, b) {
  var c = this.gf[a];
  if (c) {
    this.$m++;
    for (var d = (0,z.eb)(arguments, 1), e = 0, f = c.length;e < f;e++) {
      var h = c[e];
      this.ge[h + 1].apply(this.ge[h + 2], d);
    }
    this.$m--;
    if (this.Zm && 0 == this.$m) {
      for (;c = this.Zm.pop();) {
        this.Uk(c);
      }
      this.wf && ch(this);
    }
    return 0 != e;
  }
  return!1;
};
z.g.clear = function(a) {
  if (a) {
    var b = this.gf[a];
    b && ((0,z.vd)(b, this.Uk, this), delete this.gf[a]);
  } else {
    this.ge.length = 0, this.gf = {};
  }
};
z.g.sc = function(a) {
  if (a) {
    var b = this.gf[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.gf) {
    a += this.sc(b);
  }
  return a;
};
z.g.F = function() {
  z.bh.t.F.call(this);
  if (0 != this.$m) {
    for (var a = 1;a < this.ge.length;a += 3) {
      this.Uk(a);
    }
  } else {
    ch(this);
  }
};
var fh = function() {
  try {
    if (!window.localStorage) {
      return!1;
    }
    window.localStorage.setItem("storage-test", "1");
    return!!window.localStorage.getItem("storage-test");
  } catch (a) {
    return!1;
  }
}();
z.g = dh.prototype;
z.g.put = function(a, b) {
  var c = this.ep + "|" + a;
  fh ? window.localStorage.setItem(c, JSON.stringify(b)) : this.kl[c] = b;
};
z.g.get = function(a) {
  a = this.ep + "|" + a;
  if (fh) {
    if (a = window.localStorage.getItem(a)) {
      try {
        return JSON.parse(a);
      } catch (b) {
      }
    }
  } else {
    return this.kl[a];
  }
};
z.g.remove = function(a) {
  a = this.ep + "|" + a;
  fh ? window.localStorage.removeItem(a) : delete this.kl[a];
};
z.g.$e = function() {
  if (fh) {
    var a = [], b = this.ep + "|", c;
    for (c in window.localStorage) {
      (0,z.za)(c, b) && a.push(c.substr(b.length));
    }
    a.sort();
    return a;
  }
  return kb(this.kl);
};
z.g.af = function() {
  return ib(eh(this));
};
z.g.sc = function() {
  return this.$e().length;
};
gh.prototype.dw = function(a, b) {
  this.jb.put("X", this.gl);
  ih(this) ? (this.jb.put("Y", this.gl + "|" + (0,z.hh)()), String(this.jb.get("X") || "") != this.gl ? window.setTimeout(function() {
    String(this.jb.get("Y") || "").split("|")[0] == this.gl ? jh(this, a, b) : window.setTimeout(this.dw.bind(this, a, b), 500);
  }.bind(this), Math.round(100 * Math.random())) : jh(this, a, b)) : window.setTimeout(this.dw.bind(this, a, b), 500);
};
gh.prototype.ax = function() {
  String(this.jb.get("Y") || "").split("|")[0] == this.gl && this.jb.remove("Y");
};
kh.prototype.dz = function() {
  this.vp || this.rF.dw(function() {
    var a = eh(this.jb);
    nh(this, a);
    var b = ib(a);
    if (0 === b.length) {
      return null;
    }
    this.vp = !0;
    window.clearTimeout(this.Ep);
    this.Ep = null;
    return(0,z.tc)((0,z.r)(this.ga.post(this.Ic, b, {ma:!0, Ce:3, background:!0}), function() {
      for (var b in a) {
        this.jb.remove(b);
      }
    }, this), function() {
      this.vp = !1;
      this.jb.sc() ? (this.Rn = Math.min(3E5, 2 * this.Rn), lh(this)) : this.Rn = this.WH;
    }, this);
  }, this);
};
kh.prototype.ks = function() {
  this.dz();
};
qh.prototype.eA = null;
qh.prototype.LA = function() {
  var a;
  (a = this.eA) || (a = {}, th(this) && (a[0] = !0, a[1] = !0), a = this.eA = a);
  return a;
};
var uh;
(0,z.p)(rh, qh);
uh = new rh;
var xh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), wh = z.Td;
(0,z.p)(Ah, z.ya);
Ah.prototype.name = "XhrError";
(0,z.p)(Bh, Ah);
Bh.prototype.name = "XhrHttpError";
(0,z.p)(Ch, Ah);
Ch.prototype.name = "XhrTimeoutError";
var Gh, Ph = 0, Hb = null, Qh = [], Eh = {}, Oh = [];
Rh.prototype.ej = function(a) {
  if (!a || !(0,z.ma)(a)) {
    return a;
  }
  a.__guard_originalFn = a;
  return function() {
    try {
      a.apply(this, arguments);
    } catch (b) {
      var c;
      c = b;
      c.stack ? (c = c.stack.split("\n"), c = /[^@]+@.*\/_\/fp\/js\//.test(c[0]) || /\/_\/fp\/js\//.test(c[1])) : c = c.fileName ? /\/_\/fp\/js\//.test(c.fileName) : !0;
      c && (0,z.ph)(b);
      throw b;
    }
  };
};
(0,z.p)(z.Sh, z.bh);
z.Sh.prototype.Q = function(a, b) {
  return this.wf ? !1 : z.bh.prototype.Q.apply(this, arguments);
};
z.Sh.prototype.C = function(a, b, c) {
  var d = Th(this, b);
  d || (d = function() {
    try {
      b.apply(this, arguments);
    } catch (a) {
      (0,z.K)(a);
    }
  }, this.Tl.push([b, d]));
  return z.Sh.t.C.call(this, a, d, c);
};
z.Sh.prototype.xa = function(a, b, c) {
  return(b = Th(this, b)) ? z.Sh.t.xa.call(this, a, b, c) : !1;
};
z.Sh.prototype.F = function() {
  this.Tl.length = 0;
  z.Sh.t.F.call(this);
};
(0,z.p)(z.Uh, z.Sh);
z.g = z.Uh.prototype;
z.g.H = function() {
  this.Yf = !0;
};
z.g.ha = function() {
  this.Yf = !1;
  for (var a = 0;a < this.hp.length;a++) {
    var b = this.hp[a];
    b[0].wf || b[0].Uk(b[1]);
  }
  this.hp.length = 0;
  (0,z.dg)(this.sa);
  this.sa.length = 0;
};
z.g.Hd = function() {
  return this.Yf;
};
z.g.qa = function(a, b, c, d, e) {
  this.sa.push((0,z.J)(a, b, c, d || this, e));
  return this;
};
z.g.F = function() {
  this.Yf && this.ha();
  z.Uh.t.F.call(this);
};
var ds;
var Vy;
z.Uy = "ontouchstart" in window.document.documentElement;
Vy = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
ds = "pushState" in window.history && "replaceState" in window.history;
z.Wy = "FileReader" in window;
(0,z.p)(Wh, z.Uh);
var Xy = Math.PI / 12;
z.g = Wh.prototype;
z.g.em = null;
z.g.Ao = 0;
z.g.Bo = 0;
z.g.H = function() {
  Wh.t.H.call(this);
  Vy ? (this.qa(window.document, "pointerdown", this.Qy.bind(this, "pointer")), this.qa(window.document, "pointerup", this.Oo.bind(this, "pointer")), this.qa(window.document, "pointercancel", this.Oo.bind(this, "pointer"))) : (this.qa(window.document, "touchstart", this.Qy.bind(this, "touch")), this.qa(window.document, "touchmove", this.bt), this.qa(window.document, "touchend", this.Oo.bind(this, "touch")), this.qa(window.document, "touchcancel", this.Oo.bind(this, "touch")));
};
z.g.C = function(a, b, c) {
  if (0 !== this.sc(a)) {
    throw Error('GestureHandler already has a subscriber for "' + a + '"');
  }
  return Wh.t.C.call(this, a, b, c);
};
z.g.Qy = function(a, b) {
  b.touches && 1 != b.touches.length || (this.em = {type:a, left:b.touches ? b.touches[0].clientX : b.clientX, top:b.touches ? b.touches[0].clientY : b.clientY, timestamp:(0,z.hh)()}, "touch" == a && (this.Ao = b.touches[0].clientX, this.Bo = b.touches[0].clientY));
};
z.g.bt = function(a) {
  a.touches && 1 != a.touches.length || (this.Ao = a.touches[0].clientX, this.Bo = a.touches[0].clientY);
};
z.g.Oo = function(a, b) {
  if (this.em && a == this.em.type) {
    var c = this.em, d = "touch" == a ? this.Ao : b.clientX, e = "touch" == a ? this.Bo : b.clientY, f = (0,z.hh)() - c.timestamp, h = Math.abs(d - c.left), e = Math.abs(e - c.top), k = Math.atan(e / h), c = d < c.left;
    this.em = null;
    this.Bo = this.Ao = 0;
    15 > f || 450 < f || 10 > h || k > Xy || window.getSelection().isCollapsed && this.Q(c ? "flickleft" : "flickright", {fO:f, gO:h, hO:e, jO:k});
  }
};
z.Yy = {"":1, n:Math.pow(1024, -3), u:Math.pow(1024, -2), m:1 / 1024, k:1024, K:1024, M:Math.pow(1024, 2), G:Math.pow(1024, 3), T:Math.pow(1024, 4), P:Math.pow(1024, 5)};
z.D && (0,z.Xc)(8);
var bi = {}, ki = {}, qi = {};
var Yh = {}, Zh = {}, ni = /['()]/g, ri = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "":"\x26#133;", " ":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"}, si = {"\x00":"%00", "":"%01", "":"%02", "":"%03", "":"%04", "":"%05", "":"%06", "":"%07", "\b":"%08", 
"\t":"%09", "\n":"%0A", "\x0B":"%0B", "\f":"%0C", "\r":"%0D", "":"%0E", "":"%0F", "":"%10", "":"%11", "":"%12", "":"%13", "":"%14", "":"%15", "":"%16", "":"%17", "":"%18", "":"%19", "":"%1A", "":"%1B", "":"%1C", "":"%1D", "":"%1E", "":"%1F", " ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "\x3c":"%3C", "\x3e":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "":"%7F", "":"%C2%85", " ":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "！":"%EF%BC%81", "＃":"%EF%BC%83", "＄":"%EF%BC%84", 
"＆":"%EF%BC%86", "＇":"%EF%BC%87", "（":"%EF%BC%88", "）":"%EF%BC%89", "＊":"%EF%BC%8A", "＋":"%EF%BC%8B", "，":"%EF%BC%8C", "／":"%EF%BC%8F", "：":"%EF%BC%9A", "；":"%EF%BC%9B", "＝":"%EF%BC%9D", "？":"%EF%BC%9F", "＠":"%EF%BC%A0", "［":"%EF%BC%BB", "］":"%EF%BC%BD"}, ci = /[\x00\x22\x26\x27\x3c\x3e]/g, fi = /[\x00\x22\x27\x3c\x3e]/g, li = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, ti = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, 
vi = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, gi = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, hi = /</g;
(0,z.p)(Hi, z.B);
z.g = Hi.prototype;
z.g.F = function() {
  (0,z.dg)(this.Yx);
  delete this.Yx;
  this.co.xa("flickleft", this.By, this);
  this.co.xa("flickright", this.Cy, this);
  Hi.t.F.call(this);
};
z.g.ye = function() {
  var a = this.U ? mj(this.fa, this.U) + 1 : 0, b = (0,z.kj)(this.fa, a);
  return b ? (0,z.Ec)(b) : (0,z.r)(vj(this.fa, 5), function() {
    return(0,z.kj)(this.fa, a);
  }, this);
};
z.g.Xs = function(a) {
  (0,z.Qd)(a.target, Ng) || "INPUT" == a.target.tagName || (39 == a.keyCode ? Ji(this) : 37 == a.keyCode && window.history.back());
};
z.g.By = function() {
  Ji(this);
};
z.g.Cy = function() {
  window.history.back();
};
z.g.Xy = function() {
  (0,z.r)(this.ye(), function(a) {
    a && (a = (0,z.H)(Ei, {post:a.Pa()}), ls(this.ba, a));
  }, this);
};
z.g.oI = function(a, b) {
  var c = new z.Tg(a, {name:"fade-back-out", duration:500}), d = new z.Tg(b, {name:"slide-left-in", duration:500});
  (0,z.r)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.tg)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.tg)(b);
  d.start();
  c.start();
  return d;
};
z.g = Li.prototype;
z.g.Xi = "";
z.g.ir = "";
z.g.Su = "";
z.g.Oq = null;
z.g.Rv = "";
z.g.kq = "";
z.g.TJ = !1;
z.g.Be = !1;
z.g.toString = function() {
  var a = [], b = this.Xi;
  b && a.push(Ri(b, Zy), ":");
  if (b = this.hk()) {
    a.push("//");
    var c = this.ir;
    c && a.push(Ri(c, Zy), "@");
    a.push((0,window.encodeURIComponent)(String(b)));
    b = this.Oq;
    null != b && a.push(":", String(b));
  }
  if (b = this.Cm()) {
    this.Su && "/" != b.charAt(0) && a.push("/"), a.push(Ri(b, "/" == b.charAt(0) ? $y : az));
  }
  (b = this.Eh.toString()) && a.push("?", b);
  (b = this.kq) && a.push("#", Ri(b, bz));
  return a.join("");
};
z.g.ia = function() {
  return new Li(this);
};
z.g.hk = function() {
  return this.Su;
};
z.g.ln = function(a, b) {
  Ni(this);
  this.Su = b ? a ? (0,window.decodeURIComponent)(a) : "" : a;
  return this;
};
z.g.Cm = function() {
  return this.Rv;
};
z.g.lw = function(a) {
  this.Be = a;
  this.Eh && this.Eh.lw(a);
  return this;
};
var Zy = /[#\/\?@]/g, az = /[\#\?:]/g, $y = /[\#\?]/g, Si = /[\#\?@]/g, bz = /#/g;
z.g = Qi.prototype;
z.g.Qb = null;
z.g.Bb = null;
z.g.sc = function() {
  Ui(this);
  return this.Bb;
};
z.g.add = function(a, b) {
  Ui(this);
  this.Vd = null;
  a = cj(this, a);
  var c = this.Qb.get(a);
  c || this.Qb.set(a, c = []);
  c.push(b);
  this.Bb++;
  return this;
};
z.g.remove = function(a) {
  Ui(this);
  a = cj(this, a);
  return this.Qb.zi(a) ? (this.Vd = null, this.Bb -= this.Qb.get(a).length, this.Qb.remove(a)) : !1;
};
z.g.clear = function() {
  this.Qb = this.Vd = null;
  this.Bb = 0;
};
z.g.Dq = function() {
  Ui(this);
  return 0 == this.Bb;
};
z.g.zi = function(a) {
  Ui(this);
  a = cj(this, a);
  return this.Qb.zi(a);
};
z.g.$e = function() {
  Ui(this);
  for (var a = this.Qb.af(), b = this.Qb.$e(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
z.g.af = function(a) {
  Ui(this);
  var b = [];
  if ((0,z.ka)(a)) {
    this.zi(a) && (b = ab(b, this.Qb.get(cj(this, a))));
  } else {
    a = this.Qb.af();
    for (var c = 0;c < a.length;c++) {
      b = ab(b, a[c]);
    }
  }
  return b;
};
z.g.set = function(a, b) {
  Ui(this);
  this.Vd = null;
  a = cj(this, a);
  this.zi(a) && (this.Bb -= this.Qb.get(a).length);
  this.Qb.set(a, [b]);
  this.Bb++;
  return this;
};
z.g.get = function(a, b) {
  var c = a ? this.af(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
z.g.toString = function() {
  if (this.Vd) {
    return this.Vd;
  }
  if (!this.Qb) {
    return "";
  }
  for (var a = [], b = this.Qb.$e(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = (0,window.encodeURIComponent)(String(d)), d = this.af(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + (0,window.encodeURIComponent)(String(d[f])));
      a.push(h);
    }
  }
  return this.Vd = a.join("\x26");
};
z.g.ia = function() {
  var a = new Qi;
  a.Vd = this.Vd;
  this.Qb && (a.Qb = this.Qb.ia(), a.Bb = this.Bb);
  return a;
};
z.g.lw = function(a) {
  a && !this.Be && (Ui(this), this.Vd = null, be(this.Qb, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), dj(this, d, a));
  }, this));
  this.Be = a;
};
z.g.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    be(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
(0,z.p)(z.fj, z.Sh);
z.g = z.fj.prototype;
z.g.Yi = function(a) {
  for (var b in a) {
    this.set(b, a[b]);
  }
  return this;
};
z.g.set = function(a, b) {
  for (var c = a.split("."), d = c[0], e = this.jb;1 < c.length;) {
    if (e = this.jb[c.shift()], !e || "object" != typeof e) {
      throw Error("Unable to call set() on non-object for key\x3d" + a);
    }
  }
  c = c[0];
  e[c] != b && (e[c] = b, this.Ur[d] = 1, this.Q(d, this.jb[d], this), this.Q("change", d, this));
  return this;
};
z.g.add = function(a, b, c) {
  if (!this.jb[a]) {
    this.jb[a] = [];
  } else {
    if (!(0,z.ha)(this.jb[a])) {
      throw Error("add() called on non array, key\x3d" + a);
    }
  }
  "undefined" == typeof c ? this.jb[a].push(b) : this.jb[a][c] = b;
  this.Ur[a] = 1;
  this.Q(a, b, this);
  this.Q("change", a, this);
  return this;
};
z.g.removeItem = function(a, b) {
  if (!(0,z.ha)(this.jb[a])) {
    throw Error("removeItem() called on non array, key\x3d" + a);
  }
  this.jb[a].splice(b, 1);
  this.Ur[a] = 1;
  this.Q(a, this.jb[a], this);
  this.Q("change", a, this);
  return this;
};
z.g.get = function(a) {
  a = a.split(".");
  for (var b, c = this.jb;(b = a.shift()) && (c = c[b]);) {
  }
  return c;
};
z.g.Pa = function() {
  return this.jb;
};
(0,z.p)(z.jj, z.Sh);
z.g = z.jj.prototype;
z.g.add = function(a) {
  this.bh(a, this.Ia.length);
};
z.g.bh = function(a, b) {
  a && (a = a instanceof z.fj ? a : this.om(a), nj(this, a), db(this.Ia, b, 0, a), this.Q("add", [a], this));
};
z.g.Oe = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d;
    d = a[c];
    d = d instanceof z.fj ? d : this.om(d);
    nj(this, d);
    this.Ia.push(d);
    b.push(d);
  }
  this.Q("add", b, this);
};
z.g.remove = function(a) {
  var b = (0,z.Za)(this.Ia, a);
  b && (oj(this, a), this.Q("remove", a, this));
  return b;
};
z.g.Gk = function(a) {
  return(a = (0,z.lj)(this, "id", a)) ? this.remove(a) : !1;
};
z.g.update = function(a) {
  if (0 === this.count()) {
    this.Oe(a);
  } else {
    for (var b = {}, c = {}, d = 0;d < this.Ia.length;d++) {
      var e = this.Ia[d].get("id");
      b[e] = this.Ia[d];
      c[e] = d;
    }
    d = [];
    for (e = this.Ia.length = 0;e < a.length;e++) {
      var f = a[e].get("id"), h = b[f];
      h ? (c[f] != e && (this.Q("remove", h, this), d.push(h)), this.Ia.push(h), h !== a[e] && h.Yi(a[e].Pa())) : (d.push(a[e]), this.Ia.push(a[e]), nj(this, a[e]));
      delete b[f];
    }
    for (var k in b) {
      oj(this, b[k]), this.Q("remove", b[k], this);
    }
    this.Q("add", d, this);
  }
  return this;
};
z.g.sc = function() {
  return this.Ia.length;
};
z.g.count = function() {
  return this.sc();
};
z.g.qc = (0,z.n)(30);
z.g.filter = function(a, b) {
  return(0,z.fd)(this.Ia, a, b);
};
z.g.find = function(a, b) {
  return(0,z.Va)(this.Ia, a, b);
};
z.g.indexOf = function(a) {
  for (var b = 0;b < this.Ia.length;b++) {
    if (this.Ia[b] === a) {
      return b;
    }
  }
  return-1;
};
z.g.Pa = function(a, b) {
  var c = a ? this.filter(a, b) : this.Ia;
  return(0,z.Bb)(c, function(a) {
    return a.Pa();
  });
};
z.g.Xq = function(a, b) {
  this.sB[a] = String(b);
  return this;
};
z.g.Am = function(a) {
  return this.sB[a] || null;
};
z.g.om = function(a) {
  return new z.fj(a);
};
z.g.Hy = function(a, b) {
  this.Q("change", [{Tm:b, tN:[a]}]);
};
z.g.Jy = function(a) {
  this.remove(a);
};
(0,z.p)(pj, z.jj);
z.g = pj.prototype;
z.g.qk = !1;
z.g.Vh = !0;
z.g.yx = function(a) {
  var b = this.count();
  if (b >= this.Xn || !this.Vh) {
    return(0,z.Ec)(this);
  }
  a = this.fC(this.Xn - b, a);
  this.qk || a.wi(this.pc);
  this.qk = !0;
  this.pc = a;
  (0,z.t)((0,z.r)((0,z.tc)(a, this.YB, this), this.fH, this), this.CB, this);
  return uj(this, this.pc);
};
z.g.fH = function(a) {
  var b = qj(this, a);
  (this.Vh = this.ZB(a, b)) && b && this.Oe(b);
};
z.g.wi = function(a) {
  this.qk || this.pc.Xd ? rj(this) && (0,z.vc)(a, this.pc) : a.wi(this.pc);
  return a;
};
z.g.CB = function(a) {
  a instanceof Ah || (0,z.K)(a);
};
z.g.YB = function() {
  this.pc = (0,z.Ec)(this);
};
(0,z.p)(z.wj, pj);
z.g = z.wj.prototype;
z.g.io = "GET";
z.g.ZB = function(a, b) {
  return 0 !== b.length;
};
z.g.Gf = function(a) {
  return a;
};
z.g.fC = function(a, b) {
  var c = this.zx(a);
  return this.Vh ? this.en.send(this.io, tj(this, c), c, {ma:!0, background:!!b}) : (0,z.Ec)({});
};
z.g.tK = function(a) {
  a = qj(this, a);
  a = (0,z.Bb)(a, this.om, this);
  this.update(a);
  return this;
};
var Hj = null, Dj = {};
var Vj = (0,z.hh)(), Ii = "home";
Kj.prototype.rd = function() {
  var a = (0,z.Qj)(this, "myposts", "/me/posts", "GET");
  (0,z.Qj)(this, Ii, "/home/load-more", "POST");
  var b = Nj(this, "my-collections", "/me/collections"), c = Nj(this, "recommended", "/collections/recommended"), d = Nj(this, "recently-viewed", "/me/collections/viewed");
  (0,z.G)("isAuthenticated") && ((0,z.G)("variants.can_cross_post") || (0,z.G)("variants.can_create_post")) && window.setTimeout(function() {
    (0,z.sj)(a);
    (0,z.sj)(b);
    (0,z.sj)(c);
    (0,z.sj)(d);
  }.bind(this), 5E3);
};
Kj.prototype.Ob = function(a) {
  if (!a) {
    throw Error("Missing id");
  }
  return this.Hj[a];
};
Kj.prototype.fk = function() {
  return this.Fr["my-collections"];
};
Kj.prototype.rq = function() {
  return this.wb.myposts;
};
(0,z.p)(Rj, z.wj);
Rj.prototype.om = function(a) {
  return(0,z.Lj)(this.Z, a);
};
(0,z.p)(Oj, z.wj);
Oj.prototype.om = function(a) {
  return(0,z.Uj)(this.Z, a);
};
var ez;
var dz;
var cz;
cz = {SC:1, fM:10, SL:11, ML:12, PC:2, QC:3, VL:4, RL:5, LC:6, UC:7, VC:8, EM:9, $isProtoEnum:!0};
z.Km = {Bw:1, Cw:2, Gw:3, Hw:4, $isProtoEnum:!0};
dz = {YC:1, NC:2, A:3, QL:4, OM:5, $isProtoEnum:!0};
ez = {IL:1, wL:2, dM:3, AM:4, $isProtoEnum:!0};
z.fz = {NONE:1, OC:2, aM:3, tM:4, $isProtoEnum:!0};
(0,z.p)(z.Xj, Qf);
Rf(z.Xj, !1, {name:"RichTextModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{paragraphs:{g:function() {
  return ck;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, sections:{g:function() {
  return z.ik;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(ck, Qf);
Rf(ck, !1, {name:"ParagraphPb", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, type:{g:function() {
  return cz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, markups:{g:function() {
  return z.fk;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, dataId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, layout:{g:function() {
  return z.Km;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, metadata:{g:function() {
  return z.dk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, iframe:{g:function() {
  return z.ek;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, hasDropCap:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = ck.prototype;
z.g.getName = function() {
  return this.w("name");
};
z.g.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.Nc = function() {
  return this.w("text");
};
z.g.Ih = function(a) {
  return(0,z.E)(this, "text", a);
};
z.g.getMetadata = function() {
  return this.w("metadata");
};
z.g.vd = function(a) {
  return(0,z.E)(this, "metadata", a);
};
(0,z.p)(z.dk, Qf);
Rf(z.dk, !1, {name:"ImageMetadata", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "contain";
}, j:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.dk.prototype;
z.g.yb = function() {
  return this.w("id");
};
z.g.De = function(a) {
  return(0,z.E)(this, "id", a);
};
z.g.Hi = (0,z.n)(14);
z.g.Zq = function(a) {
  return(0,z.E)(this, "originalWidth", a);
};
z.g.Bm = (0,z.n)(28);
z.g.Yq = function(a) {
  return(0,z.E)(this, "originalHeight", a);
};
z.g.Yd = function() {
  return this.w("backgroundSize");
};
z.g.Lk = function(a) {
  return(0,z.E)(this, "backgroundSize", a);
};
z.g.pq = function() {
  return this.w("filter");
};
z.g.vg = function(a) {
  return(0,z.E)(this, "filter", a);
};
(0,z.p)(z.ek, Qf);
Rf(z.ek, !1, {name:"IframeMetadata", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, iframeSrc:null}});
z.g = z.ek.prototype;
z.g.qq = function() {
  return this.w("mediaResourceId");
};
z.g.Nk = function(a) {
  return(0,z.E)(this, "mediaResourceId", a);
};
z.g.cv = function() {
  return this.w("iframeWidth");
};
z.g.kw = function(a) {
  return(0,z.E)(this, "iframeWidth", a);
};
z.g.KA = function() {
  return this.w("iframeHeight");
};
z.g.jw = function(a) {
  return(0,z.E)(this, "iframeHeight", a);
};
(0,z.p)(z.fk, Qf);
Rf(z.fk, !1, {name:"MarkupModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return dz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, start:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, end:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, rel:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.fk.prototype;
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.setStart = function(a) {
  return(0,z.E)(this, "start", a);
};
z.g.setEnd = function(a) {
  return(0,z.E)(this, "end", a);
};
z.g.zf = function() {
  return this.w("href");
};
z.g.nn = function(a) {
  return(0,z.E)(this, "href", a);
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.getName = function() {
  return this.w("name");
};
z.g.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
(0,z.p)(z.ik, Qf);
Rf(z.ik, !1, {name:"SectionModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, backgroundImage:{g:function() {
  return z.dk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, textLayout:{g:function() {
  return ez;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "1";
}, j:function() {
}}, imageLayout:{g:function() {
  return z.fz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return "1";
}, j:function() {
}}}});
z.ik.prototype.getName = function() {
  return this.w("name");
};
z.ik.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
z.ik.prototype.ua = function() {
  return this.w("startIndex");
};
z.ik.prototype.Fe = function(a) {
  return(0,z.E)(this, "startIndex", a);
};
(0,z.p)(z.ok, Qf);
Rf(z.ok, !1, {name:"PlaybackModel", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.dk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, bodyModel:{g:function() {
  return z.Xj;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.ok.prototype;
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.mh = (0,z.n)(78);
z.g.Hh = (0,z.n)(3);
z.g.oq = (0,z.n)(104);
z.g.Vq = (0,z.n)(99);
z.g.Ze = function() {
  return this.w("image");
};
z.g.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
z.g.nq = function() {
  return this.w("bodyModel");
};
z.g.kn = function(a) {
  return(0,z.E)(this, "bodyModel", a);
};
var gz = {WL:1, JM:10, sM:11, jM:12, qM:2, IM:3, MM:4, LM:5, HM:6, GM:7, XL:8, rM:9, GL:99, $isProtoEnum:!0};
(0,z.p)(pk, Qf);
Rf(pk, !1, {name:"InsertParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, paragraph:{g:function() {
  return ck;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = pk.prototype;
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.uc = function() {
  return this.w("index");
};
z.g.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
z.g.kg = function() {
  return this.w("paragraph");
};
z.g.$i = function(a) {
  return(0,z.E)(this, "paragraph", a);
};
(0,z.p)(qk, Qf);
Rf(qk, !1, {name:"RemoveParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
qk.prototype.g = function() {
  return this.w("type");
};
qk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
qk.prototype.uc = function() {
  return this.w("index");
};
qk.prototype.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
(0,z.p)(rk, Qf);
Rf(rk, !1, {name:"UpdateParagraphAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, paragraph:{g:function() {
  return ck;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = rk.prototype;
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.uc = function() {
  return this.w("index");
};
z.g.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
z.g.kg = function() {
  return this.w("paragraph");
};
z.g.$i = function(a) {
  return(0,z.E)(this, "paragraph", a);
};
(0,z.p)(sk, Qf);
Rf(sk, !1, {name:"UpdateTitle", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
sk.prototype.g = function() {
  return this.w("type");
};
sk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
sk.prototype.Nc = function() {
  return this.w("text");
};
sk.prototype.Ih = function(a) {
  return(0,z.E)(this, "text", a);
};
(0,z.p)(tk, Qf);
Rf(tk, !1, {name:"UpdateSubtitle", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
tk.prototype.g = function() {
  return this.w("type");
};
tk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
tk.prototype.Nc = function() {
  return this.w("text");
};
tk.prototype.Ih = function(a) {
  return(0,z.E)(this, "text", a);
};
(0,z.p)(uk, Qf);
Rf(uk, !1, {name:"UpdateCaption", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
uk.prototype.g = function() {
  return this.w("type");
};
uk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
uk.prototype.Nc = function() {
  return this.w("text");
};
uk.prototype.Ih = function(a) {
  return(0,z.E)(this, "text", a);
};
(0,z.p)(vk, Qf);
Rf(vk, !1, {name:"UpdateImage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.dk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
vk.prototype.g = function() {
  return this.w("type");
};
vk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
vk.prototype.Ze = function() {
  return this.w("image");
};
vk.prototype.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(wk, Qf);
Rf(wk, !1, {name:"InsertSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, section:{g:function() {
  return z.ik;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = wk.prototype;
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.uc = function() {
  return this.w("index");
};
z.g.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
z.g.lg = function() {
  return this.w("section");
};
z.g.wg = function(a) {
  return(0,z.E)(this, "section", a);
};
(0,z.p)(xk, Qf);
Rf(xk, !1, {name:"RemoveSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
xk.prototype.g = function() {
  return this.w("type");
};
xk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
xk.prototype.uc = function() {
  return this.w("index");
};
xk.prototype.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
(0,z.p)(yk, Qf);
Rf(yk, !1, {name:"UpdateSectionAt", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, section:{g:function() {
  return z.ik;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = yk.prototype;
z.g.g = function() {
  return this.w("type");
};
z.g.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.g.uc = function() {
  return this.w("index");
};
z.g.sb = function(a) {
  return(0,z.E)(this, "index", a);
};
z.g.lg = function() {
  return this.w("section");
};
z.g.wg = function(a) {
  return(0,z.E)(this, "section", a);
};
(0,z.p)(z.zk, Qf);
Rf(z.zk, !1, {name:"Revert", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, rev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.zk.prototype.g = function() {
  return this.w("type");
};
z.zk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.zk.prototype.kh = (0,z.n)(71);
z.zk.prototype.ar = (0,z.n)(24);
(0,z.p)(Ak, Qf);
Rf(Ak, !1, {name:"Publish", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
Ak.prototype.g = function() {
  return this.w("type");
};
Ak.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
(0,z.p)(Bk, Qf);
Rf(Bk, !1, {name:"Failure", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{type:{g:function() {
  return gz;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
Bk.prototype.g = function() {
  return this.w("type");
};
Bk.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
var Fk;
Fk = {};
z.Ek = {};
Ck.prototype.og = Rx;
(0,z.p)(z.Rk, Qf);
Rf(z.Rk, !1, {name:"PostPayload", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, content:{g:function() {
  return z.Sk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, postTypeName:null, collectionSlug:null, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, deltas:{g:function() {
  return Object;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, baseRev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return-1;
}, j:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Rk.prototype;
z.g.yb = function() {
  return this.w("id");
};
z.g.De = function(a) {
  return(0,z.E)(this, "id", a);
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.va = (0,z.n)(35);
z.g.ud = (0,z.n)(40);
z.g.Wq = (0,z.n)(106);
z.g.ym = (0,z.n)(60);
z.g.jn = (0,z.n)(97);
(0,z.p)(z.Sk, Qf);
Rf(z.Sk, !1, {name:"PostContent", table:"MISSING_TABLE_IN_PROTO_DEFINITION", ab:"", lb:new zf("undefined"), ca:[], fields:{body:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.dk;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, bodyModel:{g:function() {
  return z.Xj;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Sk.prototype;
z.g.mh = (0,z.n)(77);
z.g.Hh = (0,z.n)(2);
z.g.oq = (0,z.n)(103);
z.g.Vq = (0,z.n)(98);
z.g.Ze = function() {
  return this.w("image");
};
z.g.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
z.g.nq = function() {
  return this.w("bodyModel");
};
z.g.kn = function(a) {
  return(0,z.E)(this, "bodyModel", a);
};
z.g = z.Tk.prototype;
z.g.gk = (0,z.n)(12);
z.g.pk = (0,z.n)(20);
z.g.qi = (0,z.n)(10);
z.g.bk = (0,z.n)(115);
z.g.Tk = function() {
  if (!this.bc.length) {
    return null;
  }
  for (var a = [], b = [], c = (0,z.Ua)(this.bc).ri, d = 0, e = Math.max(0, this.Qs), f = this.bc.length - 1;f >= e;f--) {
    var h = this.bc[f];
    h.selection && a.length && (b[a.length - 1] = h.selection);
    if (h.jB) {
      if (a.length) {
        break;
      }
      d++;
    } else {
      if (d) {
        d--;
        if (0 === f) {
          return null;
        }
        c = this.bc[f - 1].ri;
      } else {
        if (1E3 <= c - h.ri && h.selection) {
          break;
        }
        a.push(h);
      }
    }
  }
  if (!a.length) {
    return null;
  }
  c = [];
  for (f = 0;f < a.length;f++) {
    d = a[f], e = (0,z.Hk)(d.Kj), (0,z.Lk)(e, this.Cl), e.jB = !0, e.ri = (0,z.hh)(), e.selection = b[f] || null, this.bc.push(e), c.push(d), this.Sh && this.Sh.call(null, z.Pk.ia(e.delta));
  }
  this.Ct.push(c);
  return(0,z.Ua)(this.bc).selection;
};
z.g.Sq = (0,z.n)(26);
(0,z.p)($k, Ck);
Dk(1, pk, $k);
$k.prototype.se = function(a) {
  var b = Jk(a), c = this.delta.uc();
  if (b.length < c) {
    throw Error("Paragraph cannot be inserted at invalid index " + c);
  }
  a = Kk(a);
  b.splice(c, 0, z.Pk.ia(this.delta.kg()));
  for (b = 0;b < a.length;b++) {
    var d = a[b];
    d.ua() && d.ua() >= c && d.Fe(d.ua() + 1);
  }
  return(0,z.Gk)(2).sb(c);
};
(0,z.p)(al, Ck);
Dk(2, qk, al);
al.prototype.se = function(a) {
  var b = Jk(a), c = this.delta.uc();
  if (b.length <= c) {
    throw Error("Paragraph does not exist at index " + c);
  }
  a = Kk(a);
  var d = b.splice(c, 1), b = b.length, e = (0,z.Yk)(a, c);
  if (e) {
    for (var e = (0,z.Ya)(a, e), f = 0;f < a.length;f++) {
      var h = a[f];
      h.ua() > c && h.Fe(h.ua() - 1);
    }
    !(0,z.Zk)(a, e, b) && 1 < a.length && (a.splice(e, 1), a[0].Fe(0));
  }
  return(0,z.Gk)(1).sb(c).$i(d[0]);
};
(0,z.p)(bl, Ck);
Dk(3, rk, bl);
bl.prototype.se = function(a) {
  var b = this.delta.uc();
  a = Jk(a);
  if (a.length <= b) {
    throw Error("Paragraph does not exist at index " + b);
  }
  var c = a[b];
  a[b] = z.Pk.ia(this.delta.kg());
  return(0,z.Gk)(3).sb(b).$i(c);
};
bl.prototype.og = Ok;
(0,z.p)(cl, Ck);
Dk(4, sk, cl);
cl.prototype.se = function(a) {
  return ll(a, this.delta, "title");
};
cl.prototype.og = Mk;
(0,z.p)(dl, Ck);
Dk(5, tk, dl);
dl.prototype.se = function(a) {
  return ll(a, this.delta, "subtitle");
};
dl.prototype.og = Mk;
(0,z.p)(el, Ck);
Dk(6, vk, el);
el.prototype.se = function(a) {
  var b = a.Ze();
  a.Ee(this.delta.Ze());
  a = (0,z.Gk)(6);
  b && a.Ee(b);
  return a;
};
el.prototype.og = Mk;
(0,z.p)(fl, Ck);
Dk(7, uk, fl);
fl.prototype.se = function(a) {
  return ll(a, this.delta, "caption");
};
fl.prototype.og = Mk;
(0,z.p)(gl, Ck);
Dk(8, wk, gl);
gl.prototype.se = function(a) {
  var b = this.delta.uc(), c = z.Pk.ia(this.delta.lg()), d = Kk(a);
  if (d.length < b) {
    throw Error("Section cannot be inserted at invalid index " + b);
  }
  var e = c.ua();
  if (0 === b && 0 !== e || Jk(a).length <= e && 0 !== e || !Wk([d[b - 1], c, d[b]])) {
    throw Error("Section has invalid start index " + c.ua());
  }
  d.splice(b, 0, c);
  return(0,z.Gk)(9).sb(b);
};
(0,z.p)(hl, Ck);
Dk(9, xk, hl);
hl.prototype.se = function(a) {
  a = Kk(a);
  var b = this.delta.uc();
  if (a.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  if (0 === b && 1 == a.length) {
    throw Error("The only section cannot be removed");
  }
  var c = a.splice(b, 1);
  a[0].Fe(0);
  return(0,z.Gk)(8).sb(b).wg(c[0]);
};
(0,z.p)(il, Ck);
Dk(10, yk, il);
il.prototype.se = function(a) {
  var b = this.delta.uc(), c = z.Pk.ia(this.delta.lg()), d = Kk(a);
  if (d.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  var e = c.ua();
  if (0 === b && 0 !== e || Jk(a).length <= e || !Wk([d[b - 1], c, d[b + 1]])) {
    throw Error("Section has invalid start index " + c.ua());
  }
  a = d[b];
  d[b] = c;
  return(0,z.Gk)(10).sb(b).wg(a);
};
il.prototype.og = Ok;
(0,z.p)(jl, Ck);
Dk(11, z.zk, jl);
jl.prototype.se = Qk;
(0,z.p)(kl, Ck);
Dk(12, Ak, kl);
kl.prototype.se = Qk;
z.g = z.rl.prototype;
z.g.ia = function() {
  return(0,z.sl)(this.zb());
};
z.g.zb = function() {
  var a;
  a = (0,z.If)(new ck, !0).Zb(this.type).Ih(this.text);
  a = (0,z.E)(a, "markups", this.tb);
  this.hasDropCap && (0,z.E)(a, "hasDropCap", this.hasDropCap);
  4 == this.type && (this.layout && (0,z.E)(a, "layout", this.layout), this.metadata && a.vd(this.metadata));
  11 == this.type && (this.layout && (0,z.E)(a, "layout", this.layout), this.metadata && (0,z.E)(a, "iframe", this.metadata));
  this.name && a.Yb(this.name);
  return z.Pk.ia(a);
};
z.g.append = (0,z.n)(117);
z.g.split = function(a) {
  for (var b = new z.rl(null, this.type, this.text.substring(a)), c = 0;c < this.tb.length;c++) {
    var d = this.tb[c];
    if ((0,z.hk)(d) > a) {
      var e = z.Pk.zb(z.fk, z.Pk.Mc(d));
      e.setStart(Math.max(0, (0,z.gk)(d) - a));
      e.setEnd((0,z.hk)(d) - a);
      (0,z.vl)(b, e);
    }
  }
  (0,z.Dl)(this, a, this.text.length);
  return b;
};
z.g.Fb = function(a) {
  if (this.name != a.name || this.type != a.type || this.text != a.text || this.tb.length != a.tb.length) {
    return!1;
  }
  for (var b = 0;b < this.tb.length;b++) {
    if (!this.tb[b].Fb(a.tb[b])) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(z.tl, z.rl);
z.tl.prototype.Fb = function(a) {
  return z.tl.t.Fb.call(this, a) && this.layout == a.layout && (this.metadata && a.metadata ? this.metadata.Fb(a.metadata) : this.metadata == a.metadata);
};
(0,z.p)(ul, z.rl);
ul.prototype.Fb = function(a) {
  return ul.t.Fb.call(this, a) && (this.metadata && a.metadata ? this.metadata.Fb(a.metadata) : this.metadata == a.metadata);
};
var Tl = {4:1, 3:2, 1:3, 2:4, 5:5};
z.hz = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*|$)", "g");
var mz;
var kz;
var dm = new z.Ul;
Vl(dm, null);
z.iz = Zl();
z.jz = Zl();
(0,z.Yl)(z.jz, "BR");
var em = Zl();
(0,z.Yl)(em, "A", ["href", "title", "rel"]);
(0,z.Yl)(em, "BR");
(0,z.Yl)(em, "STRONG", ["id"], ["B"]);
(0,z.Yl)(em, "EM", [], ["I"]);
var am = Zl();
am.he = (0,z.mb)(em.he);
(0,z.Yl)(am, "IMG", ["data-image-id", "src", "width", "height"]).Yc = dm;
var bm = Zl();
(0,z.Yl)(bm, "IMG", ["data-image-id", "src", "width", "height"]).Yc = dm;
(0,z.Yl)(bm, "FIGCAPTION", {"class":["content-caption", "image-caption"], "data-image-id":!0}).Yc = em;
var cm = Zl();
(0,z.Yl)(cm, "LI", ["name"]).Yc = em;
kz = $l();
mz = $l();
(0,z.Yl)(mz, "SECTION", {name:!0, "class":!0}).Yc = kz;
z.lz = mz;
var hm = (0,z.vb)(["cupstep.com", "hatch.dm", "medium.com", "localhost"]);
z.uq = {image:{type:"image", defaultValue:null, englishName:"image", iB:!0, RQ:["caption"], strategy:{cover:{type:"crop-preserve", height:0.42}, contain:{type:"resample", width:700}, full:{type:"crop-fixed"}}}, caption:{type:"oneliner", defaultValue:"Add a photo credit", englishName:"image caption", iB:!0, iK:!0}, body:{type:"html", defaultValue:"Write your story", englishName:"article text", qO:!0}, subtitle:{type:"oneliner", defaultValue:"Subtitle", englishName:"subtitle", iB:!0}};
z.da.window && (z.da.window._resizeIframe = Hm);
var Er = {"section-bottom-center":2, "section-middle-center":3, "section-top-center":4}, Mm = (0,z.nb)(Er), Fr = {"section-image-full":2, "section-image-left":3, "section-image-right":4}, Nm = (0,z.nb)(Fr);
(0,z.p)(Sm, z.Sh);
z.Tm = 200;
z.g = Sm.prototype;
z.g.F = function() {
  this.wo && (this.qx.cancel(), this.ez());
  this.ed && (this.Rr.cancel(), this.Pt());
  (0,z.dg)(this.uH);
  (0,z.dg)(this.hz);
  window._resizeIframe = Hm;
  Sm.t.F.call(this);
};
z.g.fi = function() {
  Vm(this);
};
z.g.xd = function() {
  this.Zl = pg(this.Ka);
  this.ed || (this.ed = !0, (0,z.w)(this.Ka, "scrolling"), this.Q("scroll-start", this.Ka, this.Zl));
  this.Q("scroll", this.Ka, this.Zl);
  this.fI();
  this.Rr();
};
z.g.Pt = function() {
  this.ed = !1;
  this.Q("scroll-end", this.Ka, this.Zl);
  (0,z.x)(this.Ka, "scrolling");
};
z.g.gI = function() {
  this.Q("scroll-throttled", this.Ka, this.Zl);
};
z.g.Ly = function() {
  if ($x || Zx) {
    var a = window.innerWidth, b = window.innerHeight;
    if (a === this.Rz && 2 > Math.abs(b - this.Qz)) {
      return;
    }
    this.Rz = a;
    this.Qz = b;
  }
  this.wo || (this.wo = !0, (0,z.w)(window.document.body, "resizing"), this.Q("resize-start"));
  this.Q("resize");
  this.qx();
};
z.g.ez = function() {
  this.wo = !1;
  Vm(this);
  this.Q("resize-end");
  (0,z.x)(window.document.body, "resizing");
};
z.g.rE = function(a) {
  Hm(a);
  this.Ly();
};
z.g.So = function() {
  this.Q("webfont-load");
};
z.g.TG = function() {
  this.Q("webfont-error");
};
var eB;
var dB;
var cB;
var bB;
var aB;
var $A;
var ZA;
var YA;
var XA;
var WA;
var VA;
var nA;
var mA;
var Xp;
var lA;
var Yz;
var Ax;
var Wz;
var Vz;
var Uz;
var Tz;
var Sz;
var dr;
var kr;
var Ez;
var Dz;
var Cz;
var Az;
var zz;
var yz;
var kp;
var ep;
var vz;
var uz;
var tz;
var sz;
var rz;
var oz;
var nz;
(0,z.p)(Xm, R);
(0,z.p)(U, R);
(0,z.p)(Ym, U);
nz = new R("homepage.viewed");
oz = new R("homepage.prlPostClicked");
z.pz = new R("onboarding.started");
z.qz = new R("onboarding.finished");
rz = new R("collection.loaded");
sz = new R("collection.followed");
tz = new R("collection.unfollowed");
uz = new R("post.started");
vz = new R("post.recommendClicked");
new R("post.crosspostClicked");
ep = new R("post.crosspostSuccess");
kp = new R("post.crosspostRemoved");
z.wz = new R("post.shareDraftClicked");
z.xz = new R("post.postEditorLocked");
yz = new R("post.clientUpvote");
zz = new R("post.clientUnvote");
Az = new U("post.clientRead", "?postId ?postIds ?collectionSlug userId createdAt isAuthenticated referrer".split(" "));
z.Bz = new R("post.share");
Cz = new R("post.shareOpen");
Dz = new R("post.addedBookmark");
Ez = new R("post.removedBookmark");
new R("post.readNext");
kr = new R("post.skipPost");
dr = new R("post.nextPost");
z.Fz = new R("profile.viewed");
z.Gz = new R("profile.enterEdit");
z.Hz = new R("profile.cancelEdit");
z.Iz = new R("profile.saved");
new R("notes.ui.showToolbar");
z.Jz = new R("notes.ui.showNotes");
z.Kz = new R("notes.ui.noteCreated");
z.Lz = new R("notes.ui.noteEdited");
z.Mz = new R("notes.ui.noteDeleted");
z.Nz = new R("notes.ui.noteStateChanged");
z.Oz = new R("notes.ui.replyCreated");
z.Pz = new R("notes.ui.replyEdited");
z.Qz = new R("notes.ui.replyDeleted");
z.Rz = new R("notes.ui.replyHidden");
Sz = new R("followUp.ui.started");
Tz = new R("followUp.ui.created");
Uz = new R("followUp.ui.deleted");
Vz = new R("followUp.ui.visibilityChanged");
Wz = new R("followUp.ui.clicked");
new R("activity.viewed");
Ax = new R("ui.imageZoom");
z.Xz = new R("ui.imageInsert");
Yz = new R("post.scrolled");
new R("search.opened");
var Zz = new R("search.queried"), $z = new R("search.returnedResults");
new R("search.resultClicked");
var aA = new R("site.loginClicked"), bA = new Xm("client.error.imageLoad"), cA = new Xm("client.error.requestHttpError"), dA = new Xm("client.error.requestError"), eA = new Xm("client.error.requestTimeout"), uu = new R("user.testBucketSet");
new R("user.testBucketSet");
var fA = new R("user.sendVerificationEmailButterShown"), gA = new R("user.sendVerificationEmailButterClicked");
new R("user.writeAccessPromptShown");
new R("user.writeAccessPromptDismissed");
new R("user.writeAccessPromptClicked");
var hA = new U("collection.viewed", ["collectionId", "createdAt", "isAuthenticated"]);
new U("post.viewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]);
var iA = new U("post.clientViewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]), jA = new R("post.draftViewed"), kA = new U("posts.presented", ["postIds", "userId", "createdAt", "isAuthenticated", "weight"]);
new U("posts.prlFiltered", ["postIds", "userId", "createdAt", "isAuthenticated"]);
lA = new R("collection.ui.postApproved");
Xp = new R("collection.ui.postRejected");
mA = new R("post.embedClicked");
nA = new R("collection.embedClicked");
z.oA = new R("profile.embedClicked");
new R("embed.viewed");
new R("server.prl.displayed");
new R("server.prl.lowVolume");
new U("post.read.unique", ["postId", "userId", "createdAt", "isAuthenticated"]);
new U("post.read.total", ["postId", "userId", "createdAt", "isAuthenticated"]);
var pA = new U("post.detectLanguage", ["postId"]), qA = new U("post.upvote.statUpdate", ["postId", "userId"]), rA = new U("post.unvote.statUpdate", ["postId", "userId"]);
new R("email.queued");
new R("email.send");
new R("email.send.success");
new R("email.send.failure");
new U("email.send.regular", ["userId", "email", "emailType"]);
new U("email.send.required", ["userId", "email", "emailType"]);
new U("email.sendVerify", ["userId"]);
new R("embedly.success");
new R("embedly.failure");
new R("post.saved");
var sA = new U("post.notifyCollaboratorsByActivity", ["postId", "occurredAt"]), tA = new U("pubsubhubbub.notifyPost", ["postId"]), uA = new U("facebook.postChanged", ["postId"]);
new U("post.flaggedSpam", ["postId", "userId"]);
new U("post.unflaggedSpam", ["postId", "userId"]);
new R("collaborator.added");
new R("user.writeAccessGranted");
new U("user.created", ["userId", "createdAt"]);
new R("user.login");
new U("user.storeSocialData", ["userId"]);
new U("user.importTwitterGraph", ["userId"]);
var vA = new U("pubsubhubbub.notifyCollection", ["collectionId"]), wA = new U("collection.postApprovedNotifyAuthorEmail", ["postId", "collectionId"]), xA = new U("collection.postSubmittedNotifyCollectionOwnerEmail", ["postId", "collectionId"]), yA = new U("collection.postRejectedNotifyAuthorEmail", ["postId", "collectionId", "userId", "editorComment"]), zA = new U("collection.editorAddedNotifyEmail", ["collectionId", "userId", "fromUserId"]), AA = new U("collection.postRemovedNotifyCollectionOwnerEmail", 
["postId", "collectionId"]), BA = new U("stat.collection.subscribed", ["collectionId", "createdAt"]), CA = new U("stat.collection.unsubscribed", ["collectionId", "createdAt"]), DA = new U("collection.checkSubscriberMilestone", ["collectionId"]), EA = new U("collection.subscriberMilestoneNotifyOwnerEmail", ["collectionId", "count"]), FA = new U("collection.responseTimeRecalculation", ["collectionId"]);
new U("post.checkAndSchedule", ["timestampMs", "collectionId"]);
var GA = new U("notes.createdIncrementStat", ["postId", "noteId"]), HA = new U("notes.notifyMentionsUsersActivity", ["postId", "noteId"]), IA = new U("notes.replyNotifyMentionedUsersActivity", ["postId", "noteId", "replyId"]), JA = new U("post.upvotedNotifyPostAuthorEmail", ["postId", "userId", "voteCount", "revoted"]);
new R("notes.db.noteRemoved");
new R("notes.db.noteUpdateWhitelist");
new R("notes.db.noteHidden");
new R("notes.db.noteUnapproved");
new R("notes.db.replyRemoved");
new R("notes.db.replyHidden");
new Xm("server.requests.count");
new U("followUps.db.followUpCreated", ["postId", "userId", "createdAt"]);
new R("followUps.db.followUpDismissed");
new R("followUps.db.followUpApproved");
new R("followUps.db.followUpUnapproved");
new R("followUps.db.followUpRemoved");
new R("followUps.db.followUpUpdated");
new R("highlight.created");
new Xm("feed.cacheMiss");
new Xm("feed.cacheHit");
new Xm("feed.cacheByPass");
new Xm("zcache.connected");
new Xm("zcache.disconnected");
new Xm("zcache.hit");
new Xm("zcache.miss");
new Xm("zcache.put");
new Xm("sharedCache.hitRatio");
new Xm("sharedCache.access");
new Xm("sharedCache.get.time");
new Xm("sharedCache.mget.time");
new Xm("sharedCache.set.time");
new Xm("sharedCache.mset.time");
new Xm("sharedCache.del.time");
new Xm("sharedCache.pendingRequestCount");
new Xm("inMemoryCache.keys");
new Xm("sharedCache.get.time.99p");
new Xm("sharedCache.mget.time.99p");
new Xm("sharedCache.set.time.99p");
new Xm("sharedCache.mset.time.99p");
new Xm("sharedCache.del.time.99p");
new Xm("sharedCache.get.count");
new Xm("sharedCache.mget.count");
new Xm("sharedCache.set.count");
new Xm("sharedCache.mset.count");
new Xm("sharedCache.del.count");
new Xm("sharedCache.get.timeout.count");
new Xm("sharedCache.mget.timeout.count");
new Xm("sharedCache.set.timeout.count");
new Xm("sharedCache.mset.timeout.count");
new Xm("sharedCache.del.timeout.count");
new Xm("sharedCache.mget.partial.result.count");
new Xm("sharedCache.mset.partial.result.count");
new R("upload.stored");
new R("upload.failed");
new R("upload.reused");
new Xm("bloomd.connected");
new Xm("bloomd.disconnected");
new Xm("bloomd.unavailable");
new Xm("bloomd.check");
new Xm("bloomd.multiCheck");
new Xm("bloomd.set");
new Xm("bloomd.bulkSet");
new Xm("bloomd.create");
new Xm("bloomd.timeout");
new U("user.readPostFilterBackfill", ["userId"]);
new U("post.magnitudeForTimespan", ["postId", "startIndex", "timespan", "overrideTimestamp"]);
new U("post.magnitudeForTimespanPostMetrics", ["postId", "startIndex", "overrideTimestamp"]);
new U("homepage.generateFromTimespanMagnitude", ["timespan", "count"]);
new U("collection.recommendedPostAggregation", ["collectionId"]);
var KA = new U("user.recommendedPostAggregation", ["postId"]);
new U("post.fixCollectionsPostCounts", ["postId"]);
var LA = new U("collection.fixPostCount", ["collectionId"]);
new U("collection.badCollectionFound", ["collectionId"]);
var MA = new U("user.generateCollectionSubPostSuggestions", ["userId"]);
new Xm("jubilee.messageWaitTime");
new U("collection.fixSubscriberCounts", ["collectionId"]);
new U("post.fixPostFirstPublishedTime", ["postId"]);
new U("post.fillPostPublishedAt", ["postId"]);
new U("collection.addAcceptedAtToAll", ["collectionId"]);
new U("user.fixUsernameEntry", ["userId"]);
new U("user.fixTwitterName", ["userId"]);
new U("post.addAcceptedAt", ["postId", "collectionId", "acceptedAt"]);
var NA = new U("activity.postRecommended", ["userId", "postId", "collectionId", "occurredAt"]), OA = new U("activity.postCrossPosted", ["crossPosterId", "postId", "collectionId", "occurredAt"]);
new U("activity.postCollaboratedPublished", ["postId", "occurredAt", "collaboratorId"]);
new U("activity.followUpCreated", ["postId", "followUpId"]);
new U("activity.followUpPublished", ["postId", "followUpId"]);
new U("activity.postAddedAsFollowUp", ["postId", "followUpId"]);
var PA = new U("activity.note", ["postId", "noteId"]), QA = new U("activity.reply", ["postId", "noteId", "replyId"]), RA = new U("activity.notePublished", ["postId", "noteId"]);
new U("activity.mentionInNote", ["noteId", "postId", "mentionedUserId"]);
new U("activity.mentionInNoteUpdate", ["noteId", "postId", "mentionedUserId"]);
new U("activity.mentionInNoteReply", ["postId", "noteId", "replyId", "mentionedUserId"]);
new U("activity.mentionInNoteReplyUpdate", ["postId", "noteId", "replyId", "mentionedUserId"]);
new U("collection.fixUserCollectionLinks", ["collectionId"]);
new U("user.fixUserCollectionLinks", ["userId"]);
new U("posts.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new U("collections.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new U("users.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new U("posts.forEachByUser", ["userId", "emitEvent", "data"]);
new U("votes.forEachByUser", ["userId", "emitEvent", "data"]);
new U("countHealing.userReadCounts", ["userId"]);
new U("countHealing.userStats", ["userId", "?startTime", "?endTime"]);
new U("countHealing.userTotals", ["userId"]);
new U("countHealing.zeroPostTimeSeries", ["postId", "collectedAt", "statAttributes", "?referrer"]);
new U("user.fillUserCreatedAt", ["userId"]);
new U("countHealing.postTotals", ["postId"]);
new U("collection.backfillCollectionAdmin", ["collectionId"]);
new U("user.subscribeToCollection", ["userId", "collectionId"]);
new U("collection.fillCollectionActiveAt", ["collectionId"]);
new U("post.migratePostStats", ["postId"]);
new U("bestOf.postsForMonth", ["month", "year", "postIds"]);
var SA = new U("collections.updateCrossPostedCollection", ["postId", "collectionId"]);
new U("collections.backPopulateCrossPostsList", ["collectionId"]);
var TA = new U("search.postIndexRequest", ["postId"]);
new U("search.userIndexRequest", ["userId"]);
var UA = new U("search.collectionIndexRequest", ["collectionId"]);
new U("personalizedReadingList.sendEmail", ["username", "subjectLine", "postUrlSuffix", "?additionalFooterMessage"]);
new U("personalizedReadingList.sendEmails", ["usernames", "subjectLine", "postUrlSuffix", "?additionalFooterMessage"]);
new R("personalizedReadingList.sendEmailFailed");
new U("social.userFollowedUsers", ["userId", "followedUserIds"]);
new U("social.userUnfollowedUsers", ["userId", "unfollowedUserIds"]);
VA = new U("social.userCreatedPost", ["userId", "postId"]);
WA = new U("social.userPublishedPost", ["userId", "postId"]);
XA = new U("social.userRecommendedPost", ["userId", "postId"]);
YA = new U("social.userUnvotedPost", ["userId", "postId"]);
ZA = new U("social.userFollowedCollection", ["userId", "collectionId"]);
$A = new U("social.userUnfollowedCollection", ["userId", "collectionId"]);
aB = new U("social.userCreatedCollection", ["userId", "collectionId"]);
bB = new U("social.userMadeEditorOfCollection", ["userId", "collectionId"]);
cB = new U("social.userRemovedAsEditorOfCollection", ["userId", "collectionId"]);
dB = new U("social.postAcceptedToCollection", ["postId", "collectionId"]);
eB = new U("social.postRemovedFromCollection", ["postId", "collectionId"]);
z.fB = new R("espn.landingPageViewed");
new R("espn.welcomeEmailSent");
z.gB = new R("promo.startWritingPageViewed");
new U("post.backfillCreatorPostRelation", ["postId"]);
new U("post.fixCreatorPostIndex", ["postId"]);
new U("user.migrateUserCollectionLinks", ["userId"]);
new U("user.migrateUserStats", ["userId"]);
new U("post.migratePostCollectionRelation", ["postId"]);
new U("collection.migrationCollectionStats", ["collectionId"]);
new R("ios.app.launch");
new R("ios.app.start");
new R("ios.app.login");
new R("ios.app.logout");
new R("ios.app.error");
new R("ios.app.crash");
new R("ios.app.memoryWarning");
new Ym("post.published", [sA, tA, uA, pA, TA, WA]);
new Ym("post.created", [VA]);
new Ym("post.republished", [tA, uA]);
new Ym("post.upvoted", [NA, XA, KA, JA, qA]);
new Ym("post.unvoted", [YA, rA]);
new Ym("notes.db.noteCreated", [GA, HA, PA]);
new Ym("notes.db.noteUpdated", [HA]);
new Ym("notes.db.noteApproved", [RA]);
new Ym("notes.db.replyCreated", [IA, QA]);
new Ym("notes.db.replyUpdated", [IA]);
new Ym("collection.postSubmitted", [xA, LA]);
new Ym("collection.postApproved", [UA, vA, FA, wA, LA, dB]);
new Ym("collection.postCrossPosted", [SA, UA, vA, OA, LA, dB]);
new Ym("collection.postRejected", [yA, FA, LA, eB]);
new Ym("collection.postRemoved", [AA, LA, eB]);
new Ym("collection.subscribed", [BA, DA, MA, ZA]);
new Ym("collection.unsubscribed", [CA, MA, $A]);
new Ym("collection.subscriberMilestone", [EA]);
new Ym("collection.editorAdded", [zA, bB]);
new Ym("collection.editorRemoved", [cB]);
new Ym("collection.created", [UA, aB]);
new Ym("collection.updated", [UA]);
new Ym("collection.deleted", []);
(0,z.p)(Zm, z.Uh);
Zm.prototype.H = function() {
  Zm.t.H.call(this);
  (0,z.Vh)(this, this.ra, "scroll-end", this.Jz, this);
  this.Jz();
};
Zm.prototype.Jz = function() {
  var a = $m(this);
  a.length && (0,z.yj)(kA, {postIds:a, weight:1});
};
z.g = z.an.prototype;
z.g.be = function() {
  return!0;
};
z.g.wk = function(a, b) {
  var c = this.Ni(b);
  c && delete this.ni[(0,z.pa)(b)];
  return c;
};
z.g.vh = function(a, b, c) {
  (a = !this.Ni(c)) || delete this.ni[(0,z.pa)(c)];
  return a;
};
z.g.Vk = function(a) {
  a = (0,z.pa)(a);
  this.ni[a] || (this.ni[a] = this.now());
};
z.g.Ni = function(a) {
  a = (0,z.pa)(a);
  return!(a in this.ni) || this.now() - this.ni[a] >= this.Ks;
};
z.g.now = function() {
  return(new Date).getTime();
};
(0,z.p)(bn, z.an);
bn.prototype.vh = function(a, b, c) {
  return b.Om ? bn.t.vh.call(this, a, b, c) : (delete this.ni[(0,z.pa)(c)], !1);
};
z.g = cn.prototype;
z.g.be = function(a, b) {
  return this.bl ? this.ml.be(a, b) : !0;
};
z.g.wk = function(a, b) {
  return this.bl ? this.ml.wk(a, b) : !1;
};
z.g.vh = function(a, b, c) {
  return this.bl ? this.ml.vh(a, b, c) : !0;
};
z.g.Vk = function(a) {
  this.ml.Vk(a);
  this.bl = !0;
};
z.g.Ni = function(a) {
  return this.bl ? this.ml.Ni(a) : !1;
};
z.dn.prototype.be = function() {
  return!1;
};
z.dn.prototype.wk = function() {
  return!1;
};
z.dn.prototype.vh = function() {
  return!1;
};
z.dn.prototype.Vk = z.ea;
z.hB = new z.dn;
en.prototype.be = function() {
  return!0;
};
en.prototype.wk = function() {
  return!1;
};
en.prototype.vh = function() {
  return!0;
};
en.prototype.Vk = z.ea;
z.iB = new en;
(0,z.p)(z.jn, z.Uh);
z.jn.prototype.wa = function(a) {
  this.or.push(a);
  if (this.Hd()) {
    try {
      a.H();
    } catch (b) {
      (0,z.K)(b);
    }
  }
  return this;
};
z.jn.prototype.H = function() {
  z.jn.t.H.call(this);
  kn(this, function(a) {
    a.H();
  });
};
z.jn.prototype.ha = function() {
  kn(this, function(a) {
    a.ha();
  });
  z.jn.t.ha.call(this);
};
z.jn.prototype.F = function() {
  kn(this, function(a) {
    (0,z.C)(a);
  });
  this.or.length = 0;
  z.jn.t.F.call(this);
};
(0,z.p)(ln, z.B);
ln.prototype.Oi = function() {
  return!0;
};
ln.prototype.dv = function() {
  return this.Oi() ? [this] : [];
};
(0,z.p)(mn, ln);
mn.prototype.F = function() {
  this.lo = null;
  mn.t.F.call(this);
};
mn.prototype.Oi = function() {
  return!!this.ht;
};
mn.prototype.Fd = function() {
  return new z.jf(0, 0, this.lo.width, this.lo.height);
};
(0,z.p)(on, z.B);
on.prototype.F = function() {
  on.t.F.call(this);
};
z.g = z.qn.prototype;
z.g.ia = function() {
  return new z.qn(this.Vb, this.hc, this.gc, this.Wb, this.Ib, this.cb);
};
z.g.setTransform = function(a, b, c, d, e, f) {
  if (!((0,z.la)(a) && (0,z.la)(b) && (0,z.la)(c) && (0,z.la)(d) && (0,z.la)(e) && (0,z.la)(f))) {
    throw Error("Invalid transform parameters");
  }
  this.Vb = a;
  this.hc = b;
  this.gc = c;
  this.Wb = d;
  this.Ib = e;
  this.cb = f;
  return this;
};
z.g.Pe = function(a) {
  this.Vb = a.Vb;
  this.hc = a.hc;
  this.gc = a.gc;
  this.Wb = a.Wb;
  this.Ib = a.Ib;
  this.cb = a.cb;
  return this;
};
z.g.scale = function(a, b) {
  this.Vb *= a;
  this.hc *= a;
  this.gc *= b;
  this.Wb *= b;
  return this;
};
z.g.translate = function(a, b) {
  this.Ib += a * this.Vb + b * this.gc;
  this.cb += a * this.hc + b * this.Wb;
  return this;
};
z.g.rotate = (0,z.n)(88);
z.g.toString = function() {
  return "matrix(" + [this.Vb, this.hc, this.gc, this.Wb, this.Ib, this.cb].join() + ")";
};
z.g.transform = (0,z.n)(4);
z.g.Fb = function(a) {
  return this == a ? !0 : a ? this.Vb == a.Vb && this.gc == a.gc && this.Ib == a.Ib && this.hc == a.hc && this.Wb == a.Wb && this.cb == a.cb : !1;
};
(0,z.p)(sn, ln);
sn.prototype.F = function() {
  (0,z.Tc)(this.Nj);
  this.Nj.length = 0;
  sn.t.F.call(this);
};
sn.prototype.Oi = function() {
  for (var a = 0;a < this.Nj.length;a++) {
    if (this.Nj[a].Oi()) {
      return!0;
    }
  }
  return!1;
};
sn.prototype.dv = function() {
  if (!this.Oi()) {
    return[];
  }
  for (var a = [], b = 0;b < this.Nj.length;b++) {
    var c = this.Nj[b];
    c.Oi() && (a = a.concat(c.dv()));
  }
  return a;
};
(0,z.p)(tn, z.B);
z.g = tn.prototype;
z.g.F = function() {
  this.ys = !1;
  tn.t.F.call(this);
};
z.g.Dm = function() {
  return this.uf;
};
z.g.Ye = function() {
  return this.dd;
};
z.g.Fd = function() {
  return new z.jf(this.ld.Ib, this.ld.cb, this.Dm(), this.Ye());
};
z.g.pn = function(a) {
  this.uf = a;
  return this;
};
z.g.mn = function(a) {
  this.dd = a;
  return this;
};
(0,z.p)(yn, z.nc);
yn.prototype.OA = function(a, b, c) {
  this.AB++;
  this.Pu[a] = [b, c];
  this.Xd || (this.EA && b ? this.Ba([a, c]) : this.jJ && !b ? this.Wd(c) : this.AB == this.Bv.length && this.Ba(this.Pu));
  this.SI && !b && (c = null);
  return c;
};
yn.prototype.Wd = function(a) {
  yn.t.Wd.call(this, a);
  for (a = 0;a < this.Bv.length;a++) {
    this.Bv[a].cancel();
  }
};
(0,z.p)(zn, z.B);
zn.prototype.F = function() {
  this.vm = null;
  zn.t.F.call(this);
};
zn.prototype.g = function() {
  return "native";
};
zn.prototype.refresh = function() {
};
(0,z.p)(Bn, zn);
Bn.prototype.g = function() {
  return "blur-cover";
};
Bn.prototype.refresh = function(a) {
  var b = Hd(a);
  this.hh.wa(b);
  b = this.hh.yd.Fd();
  b = Fn(b.top, 0, b.height / 5);
  (0,z.lf)(a.lastChild, "opacity", b);
};
(0,z.p)(Cn, zn);
Cn.prototype.g = function() {
  return "post-cover";
};
Cn.prototype.refresh = function(a) {
  if (!(0,z.G)("useragent.isMobile") && !(0,z.G)("useragent.isTablet")) {
    var b = Hd(a), c;
    c = this.hh;
    var d = c.wa(b);
    c = Fn(c.yd.ld.cb, d.ld.cb, d.Ye());
    b = this.hh.wa(b);
    b = b.ld.cb + b.Ye();
    this.Vy = An(this.vm, this.Vy, c, b, a);
    (0,z.lf)(a, "opacity", 1 - c);
  }
};
(0,z.p)(Dn, zn);
Dn.prototype.F = function() {
  this.mo.cancel();
  this.mo = null;
  if (this.Vf) {
    var a = this.xl, b = (0,z.pa)(this.Vf);
    delete a.Cp[b];
  }
  (0,z.C)(this.Vf);
  this.Vf = null;
  Dn.t.F.call(this);
};
Dn.prototype.g = function() {
  return "post-section";
};
Dn.prototype.refresh = function(a) {
  if (this.Vf) {
    var b = this.vm.Fd();
    vn(this.Vf.pn(b.width).mn(b.height), b.top + this.lt);
    b = Hd(a);
    a = this.hh;
    var c = a.wa(b), d = c.Ye() - a.yd.Ye();
    a = 0 >= d ? 0 : Fn(a.yd.ld.cb, c.ld.cb, d);
    c = this.hh.wa(b);
    b = c.ld.cb;
    c = b + c.Ye();
    d = this.hh.yd.Fd();
    b = Fn(d.top, b + 0.15 * d.height, 0.4 * d.height);
    b = 1 - Math.pow(1 - b, 2);
    this.lt = An(this.Vf, this.lt, a, c);
    nn(this.Dr, 1 === b ? 0 : 1);
    nn(this.wr, b);
  }
};
Dn.prototype.rd = function(a) {
  this.ps = (0,z.Gr)(a);
  var b = this.vm.Dm(), c = tq(this.ps, {width:b}), b = tq(this.ps, {width:b, blur:20, darken:45, verticalGradient:"29/81/40"});
  this.mo = new yn([Ru(this.bB, c), Ru(this.bB, b)], !1, !0);
  (0,z.r)(this.mo, function(b) {
    var c = b[1][1];
    this.Dr = new mn(b[0][1]);
    this.wr = nn(new mn(c), 0);
    this.Vf = xn(un(wn(new tn, this.vm.Fd()), 0), [this.Dr, this.wr]);
    pn(this.xl, this.Vf);
    (0,z.r)(this.hh.refresh(), function() {
      (0,z.w)(Hd(a), "section-using-canvas");
    });
  }, this);
};
(0,z.p)(En, z.Uh);
z.g = En.prototype;
z.g.F = function() {
  Jn(this, []);
  En.t.F.call(this);
};
z.g.H = function() {
  En.t.H.call(this);
  var a = this.Tc.J.querySelector(".canvas-renderer");
  a && (this.Wl = new vq(a));
  this.ra.C("scroll", this.xd, this);
  this.ra.C("resize-end", this.yh, this);
  this.ra.C("webfont-load", this.So, this);
  this.yh();
};
z.g.ha = function() {
  En.t.ha.call(this);
  this.ra.xa("scroll", this.xd, this);
  this.ra.xa("resize-end", this.yh, this);
  this.ra.xa("webfont-load", this.So, this);
};
z.g.wa = function(a, b) {
  var c = b || !((0,z.pa)(a) in this.lf);
  b || a.hasAttribute("data-scroll") || (b = "native");
  b && a.setAttribute("data-scroll", b);
  c && (Gn(this), Hn(this, a));
  c = (0,z.pa)(a);
  return this.lf[c];
};
z.g.yh = function() {
  if (this.uo) {
    return this.ki;
  }
  this.uo = !0;
  return this.refresh();
};
z.g.refresh = function() {
  if (this.vo) {
    return this.ki;
  }
  this.vo = !0;
  this.ki = new z.nc;
  window.requestAnimationFrame(this.jp.bind(this));
  return this.ki;
};
z.g.jp = function() {
  var a;
  if (this.uo) {
    if (this.uo = !1, this.Hd()) {
      a = (0,z.Wm)(this.Tc);
      var b = this.Tc.J, c = b.offsetHeight;
      un(vn(this.yd.pn(b.offsetWidth).mn(c), a.scrollTop), a.scrollLeft);
      if (this.Wl) {
        var b = this.Wl, c = this.yd.Dm(), d = this.yd.Ye();
        b.lj.width = c;
        b.lj.height = d;
      }
      a = mg(a);
      this.ux.setTransform(1, 0, 0, 1, -a.x, -a.y);
      Gn(this);
      a = Kn(this);
      for (b = 0;b < a.length;b++) {
        Hn(this, a[b]);
      }
      Jn(this, a);
    } else {
      a = [];
    }
  } else {
    a = null;
  }
  this.vo = !1;
  if (this.Hd()) {
    a || (a = Kn(this));
    for (b = 0;b < a.length;b++) {
      c = a[b], d = (0,z.pa)(c), d in this.Ug && this.Ug[d].refresh(c);
    }
    this.Wl && this.Wl.ff(this.xl, this.yd);
    this.ki && (this.ki.Ba(), this.ki = null);
  }
};
z.g.xd = function(a, b) {
  (0,z.Wm)(this.Tc) == a && (un(vn(this.yd, b.top), b.left), this.vo = !0, this.jp());
};
z.g.So = function() {
  this.yh();
  (0,window.setTimeout)(this.yh.bind(this), 2E3);
};
(0,z.p)(z.Ln, z.jn);
z.g = z.Ln.prototype;
z.g.J = null;
z.g.Bd = new bn(3E5);
z.g.Fp = null;
z.g.qf = null;
z.g.L = function(a) {
  return this.J ? this.J.querySelector(a) : null;
};
z.g.bn = function(a) {
  return this.J ? bb(this.J.querySelectorAll(a)) : [];
};
z.g.find = function(a) {
  return this.L(a);
};
z.g.La = function() {
  return this.da;
};
z.g.Hb = function() {
  return this.Fp;
};
z.g.vd = function(a) {
  this.qf = a;
};
z.g.getMetadata = function() {
  return this.qf;
};
z.g.NA = function() {
  return null;
};
z.g.Wp = function() {
  return null;
};
z.g.Xp = function() {
};
z.g.F = function() {
  this.J && (0,z.Hg)(this.J);
  z.Ln.t.F.call(this);
};
(0,z.p)(z.Pn, z.Ln);
z.g = z.Pn.prototype;
z.g.Ig = null;
z.g.oc = function() {
};
z.g.vb = function() {
};
z.g.Ff = function() {
};
z.g.NA = function() {
  if (!this.J) {
    var a = (0,z.G)("embedded");
    if ("undefined" != typeof a) {
      var b = ["embedded"], c;
      c = b.shift();
      c = Xf[c] || c;
      for (var d = z.Yf;null != d[c];) {
        if (0 === b.length) {
          d[c] = null;
          break;
        }
        d = d[c];
        c = b.shift();
      }
    }
    a && this.Ff(a);
    (a = window.document.getElementById("prerendered")) ? (a.id = null, this.J = a, this.vb()) : (this.J = window.document.createElement("div"), (this.Ig = this.oc()) ? (0,z.r)(this.Ig, this.vb, this) : this.vb());
    (0,z.w)(this.J, "screen-content");
  }
  return this.J;
};
z.g.Wp = function() {
  return this.Ig;
};
z.g.F = function() {
  this.Ig && !this.Ig.Xd && this.Ig.cancel();
  this.Ig = null;
  z.Pn.t.F.call(this);
};
(0,z.p)(z.Qn, z.Pn);
z.Qn.prototype.ic = null;
z.Qn.prototype.Cm = function() {
  return this.Ic;
};
z.Qn.prototype.oc = function() {
  var a = this.Ic + (-1 == this.Ic.indexOf("?") ? "?" : "\x26") + "format\x3dfragment";
  return(0,z.r)((0,z.Nn)(this, "request").get(a, {headers:{"X-Response-Type":"html-body"}}), this.lc, this);
};
z.Qn.prototype.lc = function(a) {
  this.J.innerHTML = a;
};
(0,z.p)(Rn, z.Uh);
Rn.prototype.H = function() {
  Rn.t.H.call(this);
  var a = (0,z.G)("useragent");
  "chrome" === a.family && "android" === a.os && ((0,z.Vh)(this, this.ra, "resize-end", this.Ej), this.ju = (0,z.pd)(window), a = this.X.offsetHeight, this.X.style.height = a + "px", this.Bs = a);
};
Rn.prototype.Ej = function() {
  var a = (0,z.pd)(window), b = this.ju;
  if (!(a.width === b.width && 80 > Math.abs(a.height - b.height))) {
    this.ju = a;
    var a = (0,z.Wm)(this.Tc), b = a.scrollTop, c = this.Bs;
    this.X.style.height = "";
    var d = this.X.offsetHeight;
    this.X.style.height = d + "px";
    this.Bs = d;
    b >= c && (a.scrollTop = b + (d - c));
  }
};
(0,z.p)(Sn, z.Qn);
z.g = Sn.prototype;
z.g.Bd = new z.an(36E5);
z.g.F = function() {
  this.ii && (0,z.Eg)(this.ii).clear("open-post");
  this.ii = null;
  Sn.t.F.call(this);
};
z.g.Ff = function(a) {
  a.posts && this.fa.update(a.posts);
};
z.g.vb = function() {
  var a = (0,z.G)("productName");
  this.vd(new z.fn(a, a, "website"));
  this.ii = this.L(".bucket-posts");
  (a = this.L(".layout-fill-height")) && this.wa(new Rn(this.La(), a));
  this.ii && (fu(this.ii, this.ba, this.fa), (0,z.G)("isAuthenticated") && (0,z.G)("variants.can_view_prl_homepage") && ((0,z.Eg)(this.ii).D("open-post", this.uG, this), this.wa(new Zm(this.La()))));
};
z.g.H = function() {
  Sn.t.H.call(this);
  var a = {};
  (0,z.G)("variants.can_view_prl_homepage") && (a.count = this.fa.count());
  (0,z.yj)(nz, a);
  (0,z.Jj)(1, "home");
  Tn(this);
};
z.g.kx = function() {
  var a = Ii;
  if (this.Z.wb[a]) {
    return this.Z.wb[a];
  }
  var b = jB.ea();
  return(0,z.Qj)(this.Z, a, b, "POST");
};
z.g.uG = function(a) {
  var b = (a = (a = (0,z.Od)(a.target, null, "post-item")) && a.getAttribute("data-post-id")) && this.Z.Ob(a), c = b && b.get("providerName");
  if (c) {
    var d = b.get("reasons"), e = {};
    if (d) {
      for (var f in d) {
        var h = d[f];
        e[f] = {weight:h.weight, suggestionData:h.suggestionData};
      }
    }
    (0,z.yj)(oz, {postId:a, providerName:c, ranking:b.get("ranking"), reasons:e});
  }
};
N("a", "", function() {
  return "";
});
N("a", "recommendedAuthorRecommendations", function(a) {
  return "Recommended by " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "socialRecommendations", function(a) {
  return "Recommended by " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "socialPublishedPosts", function(a) {
  return "Written by " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "collectionSubscriptionsByUserId", function(a) {
  return "Best of " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "collectionLatest", function(a) {
  return "Latest from " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "followUpsByUserId", function(a) {
  return "Further reading to " + (a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "mostPopular", function() {
  return "Trending";
});
N("a", "bestOf", function(a) {
  return a.Ag ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to Top 100"\x3eTop 100\x3c/a\x3e' : "Top 100";
});
N("a", "readLater", function() {
  return "Bookmarked";
});
N("a", "latest", function() {
  return "Recent";
});
N("b", "", function(a, b, c) {
  return c.variants.can_see_connections ? $h("b", "connections")(a, null, c) : $h("b", "standard")(a, null, c);
});
N("b", "standard", function(a, b, c) {
  b = "";
  var d = Ei(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item' + (a.kb ? " post-item-light" : "") + (a.Dh ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += (!a.ph && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.P)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.post.creator.name) + '"\x3e' + ho((0,z.L)(a, {user:a.post.creator, vc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + 
  (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Dh ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e") + lo(a, c) + 
  ro(a, c) + qo(a, c) + "\x3c/div\x3e";
});
N("b", "drafts", function(a, b, c) {
  b = "";
  var d = Di(a, c), e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += '\x3carticle data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-status-draft"\x3e' + (!a.ph && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.P)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.post.creator.name) + '"\x3e' + ho((0,z.L)(a, {user:a.post.creator, vc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + 
  '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"\x3e' + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + '\x3c/a\x3e\x3c/h3\x3e\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"\x3e\x3cp\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/article\x3e";
});
N("b", "rich", function(a, b, c) {
  b = "";
  var d = Ei(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-item-rich' + (a.kb ? " post-item-light" : "") + (a.Dh ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User", f = (0,z.zi)((0,z.L)(a.post.virtuals.previewImage, {height:200, width:640, strategy:"crop-fixed"}), 0, c);
  return b += (f ? '\x3ca class\x3d"post-item-image-wrapper" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + '\x3e\x3cimg class\x3d"post-item-image" src\x3d"' + (0,z.P)((0,z.Q)(f)) + '" height\x3d"200" width\x3d"640"\x3e\x3c/a\x3e' : "") + '\x3cspan class\x3d"post-item-meta-rich-reason"\x3e' + (a.post.providerName ? 
  $h("a", a.post.providerName)((0,z.L)(a, {reason:a.post.reasons[a.post.providerName], Ag:!0}), null, c) : "") + '\x3c/span\x3e\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Dh ? 
  "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e") + lo((0,z.L)(a, {aj:!0, Qk:!1}), c) + ro(a, c) + "\x3c/div\x3e";
});
N("b", "connections", function(a, b, c) {
  b = "";
  var d = Ei(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-item-connections' + (a.kb ? " post-item-light" : "") + (a.Dh ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '"\x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User", f = '\x3cspan class\x3d"post-meta post-meta-bookmark"\x3e' + ko({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, c) + "\x3c/span\x3e", h;
  h = a.Qk ? a.post.providerName ? '\x3cspan class\x3d"post-meta post-meta-provider"\x3e' + $h("a", a.post.providerName)((0,z.L)(a, {reason:a.post.reasons[a.post.providerName], Ag:!0}), null, c) + "\x3c/span\x3e" : "" : "";
  d = f + h + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Dh ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + 
  (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e");
  e = "";
  f = (0,z.L)(a, {cA:'\x3cspan class\x3d"icons icons-heart post-meta-recommends-icon"\x3e\x3cspan class\x3d"screen-reader-text"\x3ePeople who recommended “' + (0,z.O)(a.post.title) + "”\x3c/span\x3e\x3c/span\x3e", users:a.post.virtuals.usersBySocialRecommends, qB:"post-meta post-meta-recommends", vc:"avatar-icon post-meta-avatar post-meta-avatar-recommend", wc:a.wc || 3});
  h = "";
  var k = f.wc ? Math.min(f.users.length, f.wc) : f.users.length;
  if (k) {
    h += '\x3cul class\x3d"avatar-list' + (f.qB ? " " + (0,z.P)(f.qB) : "") + '"\x3e' + (f.cA ? '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.pi)(f.cA) + "\x3c/li\x3e" : "");
    for (var l = 0;l < k;l++) {
      h += '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.eo)((0,z.L)(f, {user:f.users[l]}), c) + "\x3c/li\x3e";
    }
    h += "\x3c/ul\x3e";
  }
  d += e + h;
  e = (0,z.L)(a, {aj:!a.ph});
  e = '\x3cspan class\x3d"post-meta post-meta-author-collection"\x3e' + oo(e, c) + po((0,z.L)(e, {separator:" in "})) + "\x3c/span\x3e";
  return b += d + e + ro(a, c) + qo(a, c) + "\x3c/div\x3e";
});
N("c", "confirm", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-confirm"\x3e' + (a.yi ? (0,z.O)(a.yi) : "Confirm") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e';
});
N("c", "alert", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e';
});
N("c", "refresh", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-refresh"\x3eRefresh\x3c/button\x3e';
});
N("c", "next", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-next"\x3eNext\x3c/button\x3e';
});
N("c", "signin", function(a) {
  return'\x3ca href\x3d"/m/account/authenticate-twitter?redirect\x3d' + ji(a.redirectUrl) + '" class\x3d"btn btn-primary"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e';
});
N("c", "form", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-submit"\x3e' + (a.yi ? (0,z.O)(a.yi) : "Submit") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e';
});
N("d", "recommend", function() {
  return "Give this writer the props they deserve.";
});
N("d", "followUp", function() {
  return "Continue the conversation with related\x26nbsp;links.";
});
N("d", "noteAdd", function() {
  return "Speak up, spark a conversation.";
});
N("d", "noteReply", function() {
  return "The strong, silent type is overrated—keep the conversation going.";
});
N("d", "readingList", function() {
  return "Don’t let great posts slip into the Internet ether.";
});
N("d", "espn", function() {
  return "Share your story.";
});
N("e", "", function() {
  return'\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e';
});
N("e", "article", function(a, b, c) {
  return(a.googleProfileId ? '\x3clink rel\x3d"author" href\x3d"https://plus.google.com/' + (0,z.P)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"author" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"article"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e\x3cmeta property\x3d"article:publisher" content\x3d"https://www.facebook.com/medium"\x3e\x3cmeta property\x3d"article:author" content\x3d"' + 
  (0,z.P)(c.baseUrl) + "/@" + (0,z.P)(a.username) + '"\x3e' + (a.BK ? '\x3cmeta property\x3d"article:published_time" content\x3d"' + (0,z.P)(a.BK) + '"\x3e' : "") + '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.P)(a.username) + '"\x3e';
});
N("e", "profile", function(a) {
  return(a.googleProfileId ? '\x3clink rel\x3d"me" href\x3d"https://plus.google.com/' + (0,z.P)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"me" href\x3d"http://twitter.com/' + (0,z.P)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"profile"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e\x3cmeta property\x3d"profile:first_name" content\x3d"' + (0,z.P)(a.firstName) + '"\x3e\x3cmeta property\x3d"profile:last_name" content\x3d"' + (0,z.P)(a.lastName) + '"\x3e\x3cmeta property\x3d"profile:username" content\x3d"' + 
  (0,z.P)(a.username) + '"\x3e';
});
N("e", "collection", function(a) {
  return'\x3cmeta property\x3d"og:type" content\x3d"medium:collection"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e' + (a.username ? '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.P)(a.username) + '"\x3e' : "");
});
(0,z.p)(Ho, z.Qn);
z.g = Ho.prototype;
z.g.F = function() {
  (0,z.Tc)(this.rl);
  this.rl = [];
  Ho.t.F.call(this);
};
z.g.Ff = function(a) {
  this.Rc(a);
};
z.g.oc = function() {
  return(0,z.r)((0,z.r)(this.ga.get(kB.ea(), {ma:!0, Ce:0}), this.Rc, this), function(a) {
    this.J.innerHTML = (0,z.H)(Go, {collections:a});
  }, this);
};
z.g.ha = function() {
  this.Uc && (this.Uc.cancel(), this.Uc = null);
  (0,window.clearTimeout)(this.St);
  Ho.t.ha.call(this);
};
z.g.vb = function() {
  Ho.t.vb.call(this);
  this.ta = this.L("#collection-search-input");
  this.xr = this.L(".bucket");
  Io(this);
};
z.g.H = function() {
  Ho.t.H.call(this);
  this.ta.focus();
  this.qa(this.ta, "keyup", this.kE, this);
};
z.g.Rc = function(a) {
  a = (0,z.Wj)(a.value, a.references);
  for (var b = 0;b < a.length;b++) {
    (0,z.Uj)(this.Z, a[b]);
  }
  return a;
};
z.g.kE = function(a) {
  a.preventDefault();
  this.Da != this.ta.value && (this.Da = this.ta.value, (0,window.clearTimeout)(this.St), this.Uc && (this.Uc.cancel(), this.Uc = null), this.ta.value ? this.zr[this.Da] ? this.Ft(this.zr[this.Da]) : this.St = (0,window.setTimeout)(function() {
    var a = lB.ea({}, {q:this.Da});
    this.Uc = (0,z.t)((0,z.r)((0,z.r)((0,z.r)(this.ga.get(a, {ma:!0, Ce:0}), this.Rc, this), function(a) {
      this.zr[this.Da] = a;
    }, this), this.Ft, this), z.K);
  }.bind(this), 200) : this.Uc = (0,z.r)((0,z.r)(this.ga.get(kB.ea(), {ma:!0, Ce:0}), this.Rc, this), function(a) {
    this.Ft(a, "Collections You Follow");
  }, this));
};
z.g.Ft = function(a, b) {
  if (a && a.length) {
    var c = {collections:a, br:!0};
    b && (c.label = b);
    this.xr.innerHTML = (0,z.H)(z.vo, c);
  } else {
    this.xr.innerHTML = (0,z.H)(Uo, {L:this.Da});
  }
  (0,z.G)("currentUser.isAuthenticated") && ((0,z.Tc)(this.rl), this.rl = [], Io(this));
};
(0,z.p)(W, Hf);
W.prototype.w = function(a) {
  this.ck(a);
  return a in this.data ? this.data[a] : null;
};
(0,z.p)(Vo, z.Uh);
z.g = Vo.prototype;
z.g.H = function() {
  Vo.t.H.call(this);
  this.qa(this.ta, "keyup", this.pG, this);
};
z.g.ha = function() {
  this.li && (this.li.cancel(), this.li = null);
  this.mp = null;
  this.Jt = 0;
  this.Da = "";
  Vo.t.ha.call(this);
};
z.g.pG = function(a) {
  27 == a.keyCode && (this.ta.value = "");
  if ((0,z.G)("useragent.isMobile")) {
    if (13 != a.keyCode) {
      return;
    }
    this.ta.blur();
    return this.search(this.ta.value);
  }
  this.search(this.ta.value, 200);
};
z.g.search = function(a, b) {
  if (this.Da != a) {
    (0,window.clearTimeout)(this.Jt);
    if (!a) {
      return this.Da = this.dx.innerHTML = "";
    }
    this.li && this.li.cancel();
    this.Da = this.ta.value = a;
    if (this.mp[a]) {
      return Wo(this, a), this.lc(this.mp[a]);
    }
    this.Jt = (0,window.setTimeout)(function() {
      (0,z.yj)(Zz, {query:a});
      this.li = (0,z.tc)((0,z.t)((0,z.r)(this.ga.get("/search/all?q\x3d" + (0,window.encodeURIComponent)(a), {ma:!0}), function(b) {
        this.mp[a] = b;
        this.lc(b);
      }, this), z.K), function() {
        Wo(this, a);
        this.li = null;
      }, this);
    }.bind(this), b || 0);
  }
};
z.g.lc = function(a) {
  this.dx.innerHTML = (0,z.H)(this.Dp, {users:a.value.users, collections:a.value.collections, posts:a.value.posts && (0,z.Wj)(a.value.posts, a.references)});
  (0,z.yj)($z, {query:this.ta.value, numResults:a.value.posts.length + a.value.users.length + a.value.collections.length});
};
(0,z.p)(Xo, z.Qn);
Xo.prototype.Bd = z.hB;
Xo.prototype.H = function() {
  Xo.t.H.call(this);
  this.vs = this.L(".js-search-input");
  this.gz = this.L(".js-search-results");
  var a = new Vo(this.La(), this.vs, this.gz);
  this.wa(a);
  var b = (new Qi(window.location.search.replace(/^\?/, ""))).get("q");
  b && a.search(b);
  this.vs.focus();
};
var mB = ["PENDING", "APPROVED", "NOT_FOUND", "REMOVED", "REJECTED"];
(0,z.p)($o, z.B);
(0,z.p)($p, z.Uh);
z.g = $p.prototype;
z.g.ad = function(a) {
  this.U = a;
  this.ko = {};
  if (this.U) {
    a = this.Z.Ob(this.U).get("virtuals.postedIn");
    for (var b = 0;b < a.length;b++) {
      if ("APPROVED" == a[b].status || "REJECTED" == a[b].status || "PENDING" == a[b].status) {
        this.ko[a[b].collection.slug] = !0;
      }
    }
    a = this.Z.fk();
    for (b = 0;b < a.sc();b++) {
      this.ko[(0,z.gj)((0,z.kj)(a, b), "slug")] = !0;
    }
  }
};
z.g.H = function() {
  $p.t.H.call(this);
  this.qa(this.ta, "keyup", this.xE, this);
};
z.g.ha = function() {
  this.Uc && (this.Uc.cancel(), this.Uc = null);
  this.up = null;
  this.Rt = 0;
  this.Da = "";
  $p.t.ha.call(this);
};
z.g.av = function(a) {
  return this.Ar[a];
};
z.g.xE = function(a) {
  a.preventDefault();
  this.Da != this.ta.value && (this.Da = this.ta.value, (0,window.clearTimeout)(this.Rt), this.Uc && (this.Uc.cancel(), this.Uc = null), this.ta.value ? this.up[this.Da] ? this.lc(this.up[this.Da]) : this.Rt = (0,window.setTimeout)(function() {
    this.Uc = (0,z.t)((0,z.r)(this.jd.get("/search/collections?q\x3d" + (0,window.encodeURIComponent)(this.Da), {ma:!0, Ce:0}), function(a) {
      this.up[this.Da] = a;
      this.lc(a);
    }, this), z.K);
  }.bind(this), 200) : this.lc({value:[]}));
};
z.g.lc = function(a) {
  a.value = a.value.filter(function(a) {
    this.Ar[a.slug] || (this.Ar[a.slug] = a);
    return this.ko[a.slug] ? !1 : !0;
  }, this);
  a.value = a.value.map(function(a) {
    a.imageId = a.image.imageId;
    a.id = a.slug;
    return a;
  });
  var b = this.Da || "", b = b.trim();
  a.zv = "collections";
  a.L = b;
  this.Q("onSearch", a);
};
aq.prototype.La = function() {
  return this.kc;
};
aq.prototype.gy = function(a) {
  var b = new z.nc, c = window.document.createElement("script");
  c.setAttribute("charset", "UTF-8");
  c.onload = function() {
    b.Ba(!0);
  };
  c.src = a;
  window.document.body.appendChild(c);
  return b;
};
dq.prototype.add = function(a, b, c) {
  var d = Array.prototype.slice.call(arguments, 2);
  return this.Sp(a, function(a) {
    return Kb.apply(null, [b, a].concat(d));
  });
};
dq.prototype.Sp = function(a, b) {
  this.kc.Sp(this.xb, a, b);
  return this;
};
dq.prototype.ec = function(a, b) {
  this.kc.ec(this.xb, a, b);
  return this;
};
dq.prototype.lu = function(a) {
  this.kc.lu(this.xb, a);
  return this;
};
(0,z.p)(eq, z.Sh);
z.g = eq.prototype;
z.g.scope = function(a) {
  return new dq(this, a);
};
z.g.Vu = function(a, b) {
  return fq(this, b).Vu(a);
};
z.g.create = function(a, b, c) {
  return fq(this, b).create(a, c);
};
z.g.Af = function(a) {
  return fq(this, a).Af();
};
z.g.rk = function(a) {
  return fq(this, a).rk();
};
z.g.uh = function(a) {
  return fq(this, a).uh();
};
z.g.mg = function(a, b) {
  return fq(this, b).mg(a);
};
z.g.Sp = function(a, b, c) {
  var d = fq(this, b);
  d.hC(c);
  d.mg(a) || hq(d, a);
  this.Q("add-provider", a, b);
  return this;
};
z.g.ec = function(a, b, c) {
  b = fq(this, b);
  if (!b.jj() && (b.Af() || b.rk() || b.uh())) {
    throw Error('Service already registered with id "' + b.Me + '"');
  }
  b.Ul = null;
  b.Fl = c;
  b.to = !1;
  hq(b, a);
  return this;
};
z.g.lu = function(a, b) {
  var c = fq(this, b);
  if (!c.jj() && (c.Af() || c.rk() || c.uh())) {
    throw Error('Service already registered with id "' + c.Me + '"');
  }
  c.Ul = null;
  c.Fl = null;
  c.to = !0;
  hq(c, a);
  return this;
};
z.g = gq.prototype;
z.g.Af = function() {
  return!!this.Ul;
};
z.g.rk = function() {
  return!!this.Fl;
};
z.g.uh = function() {
  return this.to;
};
z.g.mg = function(a) {
  return this.xb == a;
};
z.g.hC = function(a) {
  if (!this.jj()) {
    if (this.Af()) {
      throw Error('Cannot add multiple providers to service "' + this.Me + '"');
    }
    if (this.uh()) {
      throw Error('Cannot add a provider to manual service "' + this.Me + '"');
    }
  }
  this.Ul = a;
  this.Fl = null;
  this.to = !1;
  return this;
};
z.g.create = function(a, b) {
  if (!this.Af()) {
    throw Error('Expected a provider to be registered for "' + this.Me + '"');
  }
  if (!this.mg(a)) {
    throw Error('Expected service "' + this.Me + '" to be assigned scope "' + a + '"');
  }
  return this.Ul.call(null, b);
};
z.g.Vu = function(a) {
  if (this.mg(a)) {
    if (this.Af()) {
      return(0,z.Ec)();
    }
    if (this.rk()) {
      var b = this.Fl;
      return(0,z.r)(cq(z.bq, b), function() {
        if (!this.Af()) {
          throw Error('Expected module "' + b + '" to register provider for service "' + this.Me + '".');
        }
      }, this);
    }
  }
  return(0,z.Fc)(Error('Expected a provider or module to be registered for "' + this.Me + '" in scope "' + a + '".'));
};
iq.prototype.rd = function() {
  var a = this.kc, b = this.xb, c = [], d;
  for (d in a.bm) {
    var e = a.bm[d];
    e.mg(b) && e.Af() && c.push(d);
  }
  for (a = 0;a < c.length;a++) {
    b = c[a], this.tf[b] || kq(this, b);
  }
  this.Xf = !0;
  for (var f in this.tf) {
    Mn(this, f);
  }
};
iq.prototype.get = function(a) {
  if (this.tf[a]) {
    return this.tf[a];
  }
  if (this.kc.mg(this.xb, a)) {
    if (this.kc.Af(a)) {
      return kq(this, a), this.tf[a];
    }
    if (this.kc.rk(a)) {
      throw Error('Cannot synchronously load "' + a + '" for scope "' + this.xb + '"');
    }
    if (this.kc.uh(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.xb + '"');
    }
    throw Error('Cannot load "' + a + '" for scope "' + this.xb + '"');
  }
  if (this.Ql) {
    return this.Ql.get(a);
  }
  throw Error('No service found for "' + a + '"');
};
iq.prototype.load = function(a) {
  if (this.tf[a]) {
    return(0,z.Ec)(this.get(a));
  }
  if (this.kc.mg(this.xb, a)) {
    if (this.kc.uh(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.xb + '"');
    }
    return(0,z.r)(this.kc.Vu(this.xb, a), function() {
      this.tf[a] || kq(this, a);
      return this.get(a);
    }, this);
  }
  return this.Ql ? this.Ql.load(a) : (0,z.Fc)(Error('No service found for "' + a + '"'));
};
iq.prototype.yF = function(a, b) {
  this.Xf && a === this.xb && kq(this, b);
};
(0,z.p)(mq, z.Uh);
z.g = mq.prototype;
z.g.Wf = null;
z.g.H = function() {
  mq.t.H.call(this);
  var a = this.Z.fk();
  this.Wf = (0,z.r)((0,z.sj)(a), function() {
    if (0 < a.sc() || this.za.get("creator.userId") == (0,z.G)("currentUser.userId")) {
      oq(this, a.Ia.concat()) ? this.Fg.innerHTML = "Add/Remove from Collections" : this.Fg.innerHTML = "Add to Collections", (0,z.x)(this.Fg, "hide");
    }
  }, this);
  (0,z.Eg)(this.ja).D("show-cross-poster", this.Ut, this);
};
z.g.ha = function() {
  mq.t.ha.call(this);
  (0,z.Hg)(this.ja);
  this.Wf && (this.Wf.cancel(), this.Wf = null);
};
z.g.Ut = function(a) {
  this.rn(a.target);
};
z.g.rn = function(a) {
  var b = String((0,z.G)("currentUser.userId")), c = this.Z.Ob(this.U).get("creatorId") == b;
  nq(this);
  var d = this.Z.fk();
  return(0,z.r)((0,z.r)((0,z.sj)(d), function() {
    var b, f = d.Ia.concat().sort(this.Fu.bind(this));
    b = c ? ab(this.wt, f) : f;
    f = new z.vu(new z.jj(b));
    b = this.is(c, oq(this, b));
    f = Du((new Cu(this.da, f)).bd(b)).Mk(this.Eu.bind(this));
    f.tz = !1;
    c && (this.il = new $p(this.da), this.il.ad(this.U), f.Zi("Increase your story's exposure by submitting it to relevant collections").Mj = this.il);
    a && (f.Dg = a);
    return Gu(this.Qh, f, this.ja);
  }, this), function(a) {
    if (this.il && this.il.av(a)) {
      this.ji.al = !0, this.ba.navigate(a);
    } else {
      var b, d = this.bg[a], k = this.Z.Of[a] || null;
      d && (k = new z.fj(d.collection));
      b = (0,z.gj)(k, "name");
      d && d.status && "APPROVED" === d.status ? c ? mp(this.Od, this.U, k, null) : ip(this.Od, this.U, k) : dp(this.Od, this.U, a, b, null);
      return k;
    }
  }, this);
};
z.g.Fu = function(a, b) {
  var c = "NOT_FOUND", d = "NOT_FOUND";
  this.bg[a.get("slug")] && (c = this.bg[a.get("slug")].status);
  this.bg[b.get("slug")] && (d = this.bg[b.get("slug")].status);
  return mB.indexOf(c) - mB.indexOf(d);
};
z.g.Eu = function(a) {
  var b = {id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  if (this.bg[a.get("slug")]) {
    switch(this.bg[a.get("slug")].status) {
      case "APPROVED":
        b.description = "Already in this collection";
        b.status = "Remove";
        b.hasIcon = !0;
        break;
      case "REMOVED":
        b.description = "Removed by author", b.disabled = !0;
    }
  }
  return b;
};
z.g.is = function(a, b) {
  return a ? this.xo ? "Story published!" : "Submit your story to a collection" : b ? "Add or remove this story from your collections" : "Add this story to your collections";
};
(0,z.p)(z.Ko, z.Uh);
z.g = z.Ko.prototype;
z.g.iy = window.Infinity;
z.g.Og = function(a) {
  return a.Pa();
};
z.g.hm = null;
z.g.Qr = null;
z.g.Zx = null;
z.g.V = function() {
  return this.J;
};
z.g.H = function() {
  z.Ko.t.H.call(this);
  this.aa.C("change", this.Ck, this);
  this.aa instanceof z.jj && (this.aa.C("add", this.Iv, this), this.aa.C("remove", this.Jv, this));
  this.Jq(!0);
};
z.g.ha = function() {
  this.aa.xa("change", this.Ck, this);
  this.aa instanceof z.jj && (this.aa.xa("add", this.Iv, this), this.aa.xa("remove", this.Jv, this));
  this.J.innerHTML = "";
  delete this.J;
  z.Ko.t.ha.call(this);
};
z.g.getData = (0,z.n)(113);
z.g.Mk = function(a, b) {
  this.Og = a.bind(b);
  this.Jq();
  return this;
};
z.g.Jq = function() {
  this.Ck(null);
};
z.g.Iv = function() {
  this.Ck(null);
};
z.g.Jv = function() {
  this.Ck(null);
};
z.g.Ck = function() {
  if (this.Hd()) {
    var a;
    a = this.aa instanceof z.jj ? (0,z.Bb)(this.aa.Ia.concat(), this.Og) : this.Og.call(null, this.aa);
    a = (0,z.pq)(this, a);
    a != this.Zx && (this.Zx = this.J.innerHTML = a);
  }
};
(0,z.p)(z.qq, z.nc);
z.qq.prototype.Gz = function() {
  if (!this.Xd) {
    var a = ((0,z.hh)() - this.mi) / this.HD, b = this.hs + (3 * a * a - 2 * a * a * a) * this.GD, b = Math[this.eI](b, this.cu);
    /scroll/.test(this.Jj) ? this.ja[this.Jj] = b : this.ja.style[this.Jj] = b;
    1 <= a ? this.Ba() : window.requestAnimationFrame(this.Gz.bind(this));
  }
};
(0,z.p)(rq, z.B);
(0,z.p)(vq, rq);
vq.prototype.F = function() {
  this.clear();
  this.oj = this.lj = null;
  vq.t.F.call(this);
};
vq.prototype.ff = function(a, b) {
  for (var c = b.Fd(), d = this.Fd(), d = sq(c, d), e = ib(a.Cp), f = [], h = 0;h < e.length;h++) {
    var k = e[h];
    if (k.ys) {
      var l = k.Fd(), m;
      a: {
        var q = c, s = l;
        m = Math.max(q.left, s.left);
        var I = Math.min(q.left + q.width, s.left + s.width);
        if (m <= I) {
          var F = Math.max(q.top, s.top), q = Math.min(q.top + q.height, s.top + s.height);
          if (F <= q) {
            m = new z.jf(m, F, I - m, q - F);
            break a;
          }
        }
        m = null;
      }
      m && f.push({$K:k, aL:l, Cq:m});
    }
  }
  this.clear();
  for (c = 0;c < f.length;c++) {
    e = f[c];
    k = e.$K;
    h = In(d, e.Cq).round();
    k = k.hy.dv();
    for (l = 0;l < k.length;l++) {
      if (m = k[l], m instanceof mn) {
        var I = h, s = e.aL, q = e.Cq, F = m.Fd(), s = sq(F, s), aa = s.Vb * s.Wb - s.gc * s.hc, s = new z.qn(s.Wb / aa, -s.hc / aa, -s.gc / aa, s.Vb / aa, (s.gc * s.cb - s.Wb * s.Ib) / aa, (s.hc * s.Ib - s.Vb * s.cb) / aa), q = In(s, q).ceil();
        q.Cq(F) && (F = m.lo, m = m.ht, m = "number" == typeof m ? m : 1, !I.width || !I.height || 0 > q.left || 0 > q.top || 0 >= q.width || 0 >= q.height || q.width > F.width || q.height > F.height || (this.oj.save(), this.oj.globalAlpha = m, this.oj.drawImage(F, q.left, q.top, q.width, q.height, I.left, I.top, I.width, I.height), this.oj.restore()));
      }
    }
    k.length && this.lp.push(h);
  }
};
vq.prototype.Fd = function() {
  return new z.jf(0, 0, this.lj.width, this.lj.height);
};
vq.prototype.clear = function() {
  for (var a = 0;a < this.lp.length;a++) {
    var b = this.lp[a];
    this.oj.clearRect(b.left - 1, b.top - 1, b.width + 2, b.height + 2);
  }
  this.lp.length = 0;
};
(0,z.p)(wq, z.Uh);
wq.prototype.H = function() {
  wq.t.H.call(this);
  for (var a = this.ex.querySelector(".post-title"), b = (0,z.jg)(a).split(" "), c = yq(this, b, 30, null), d = [];c;) {
    d.unshift(b.slice(c.startIndex, c.endIndex).join(" ")), c = c.AK;
  }
  d.length && (a.innerHTML = (0,z.H)(Sq, {eK:d}));
  this.qa(this.Sw, "keydown", this.Ys, this);
};
wq.prototype.Ys = function(a) {
  13 == a.keyCode ? xq(this.Sw, "cover-layout-", ["inline", "cover", "full"]) : 84 == a.keyCode && xq(this.ex, "cover-style-", ["sans", "serif"]);
};
(0,z.p)(Bq, z.B);
z.g = Bq.prototype;
z.g.lc = function() {
  this.X.innerHTML = (0,z.H)(Aq, {Gu:this.ap.get("experimentalCss")});
  (0,z.Eg)(this.X).D("popover-css-editor", this.oH, this);
  (0,z.zg)("install-css", this.Sx, this);
  (0,z.zg)("save-css", this.BH, this);
};
z.g.oH = function(a) {
  (0,z.Pw)(this.Ja, a.target, (0,z.H)(zq, {Gu:this.ap.get("experimentalCss")}), "post-css-editor-popover");
};
z.g.Sx = function() {
  this.Yh && (xf(this.Yh), this.Yh = null);
  var a = window.document.querySelector(".post-css-editor-textarea").value;
  a && (this.Yh = (0,z.vf)(a));
};
z.g.BH = function() {
  this.Sx();
  var a = window.document.querySelector(".post-css-editor-textarea").value || "";
  (0,z.r)(this.Xl.post("/p/" + (0,z.gj)(this.ap, "id") + "/updateCss", {postCss:a}, {ma:!0}), function() {
    this.ap.set("experimentalCss", a);
    this.Ja.remove();
  }, this);
};
z.g.F = function() {
  (0,z.Hg)(this.X);
  (0,z.Cg)("install-css");
  (0,z.Cg)("save-css");
  this.Yh && (xf(this.Yh), this.Yh = null);
  Bq.t.F.call(this);
};
(0,z.p)(Cq, z.B);
Cq.prototype.F = function() {
  Cq.t.F.call(this);
};
Cq.prototype.dr = function(a) {
  var b = {Vm:this.Aj, Qc:this.hd};
  a && (0,z.ob)(b, a);
  return b;
};
(0,z.p)(z.Dq, z.B);
z.Dq.prototype.F = function() {
  for (var a in this.Ua) {
    this.Ua[a].cancel();
  }
  z.Dq.t.F.call(this);
};
z.Dq.prototype.wa = function(a) {
  var b = (0,z.pa)(a);
  b in this.Ua || (this.Ua[b] = a, (0,z.tc)(a, function() {
    delete this.Ua[b];
  }, this));
  return a;
};
(0,z.p)(Eq, z.B);
z.g = Eq.prototype;
z.g.source = null;
z.g.Hq = null;
z.g.fa = null;
z.g.vt = null;
z.g.Ms = null;
z.g.F = function() {
  this.Ms = this.vt = this.fa = null;
  (0,z.C)(this.Ua);
  Eq.t.F.call(this);
};
z.g.rd = function() {
  var a;
  (0,z.G)("variants.use_prl_for_post_to_post_navigation") || (a = this.Ak.hd);
  a && this.Z.wb[a] || (a = Fq(this));
  this.fa = this.Z.wb[a];
  (0,z.G)("variants.enable_post_to_post_navigation") && (this.ye() ? this.lc() : (0,z.r)(this.Ua.wa(vj(this.fa, 5, !0)), this.lc, this));
};
z.g.lc = function() {
  this.ye() ? this.ff() : this.Ak.hd != Ii && (Fq(this), this.rd());
};
z.g.ye = function() {
  return(0,z.kj)(this.fa, mj(this.fa, this.U) + 1);
};
z.g.RB = function() {
  if (!this.vt) {
    var a = Gq(this);
    a && (this.vt = this.Ua.wa(ls(this.ba, a, this.Ak.dr())));
  }
};
z.g.vB = function() {
  var a = Gq(this), b = this.ye();
  a && !this.Ms && (this.Hq && (0,z.yj)(this.Hq, {toPostId:b.get("id"), fromPostId:this.U}), b = this.Ak.dr({wn:this.wB.bind(this)}), this.source && (b.source = this.source), this.Ms = this.ba.navigate(a, b));
};
var ks = Date.now();
Iq.prototype.show = function(a, b, c) {
  var d = this.Mw, e = window.document.getElementById(a), f = b || Lq;
  a = (0,z.Ec)();
  if (this.Ka) {
    if (d) {
      b = Nq(this, d);
      var h = pg(this.Ka);
      b.top = h.top;
      b.left = h.left;
    }
    c && (c = Nq(this, e), c.top = 0, c.left = 0);
    (0,z.r)(a, function() {
      return Mq(this, d, e);
    }, this);
  }
  (0,z.r)(a, function() {
    return f(d, e);
  });
  (0,z.tc)(a, function() {
    (0,z.x)(this.Ka, "surfaces-transitioning");
    (0,z.x)(this.X, "surface-container-fixed");
    (0,z.x)(e, "surface-transitioning-in");
    d && (0,z.x)(d, "surface-transitioning-out");
  }, this);
  this.Mw = e;
  return a;
};
Iq.prototype.remove = function(a) {
  (0,z.Dd)(window.document.getElementById(a));
  delete this.tp[a];
};
N("f", "", function(a, b, c) {
  b = "";
  a = (0,z.zi)((0,z.L)(a.image, {cropType:"t", verticalGradient:"10/0/40"}), 0, c);
  return b += '\x3cdiv class\x3d"cover-image" style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(a)) + ');"\x3e\x3c/div\x3e';
});
N("f", "contain", function(a, b, c) {
  b = "";
  var d = (0,z.zi)((0,z.L)(a.image, {cropType:"t"}), 0, c);
  b += '\x3cdiv class\x3d"cover-image"\x3e\x3cimg class\x3d"cover-image-contain" src\x3d"' + (0,z.P)((0,z.Q)(d)) + '" alt\x3d"' + (a.post.content ? (0,z.P)(a.post.content.caption) : "") + '" ';
  a.image.originalWidth && (a = c.postColumnWidth * a.image.originalHeight / a.image.originalWidth, b += 'width\x3d"' + (0,z.P)(c.postColumnWidth) + '" height\x3d"' + (0,z.P)(a) + '"');
  return b + "\x3e\x3c/div\x3e";
});
(0,z.p)(cr, Eq);
z.g = cr.prototype;
z.g.Ke = null;
z.g.F = function() {
  this.ra.xa("resize-end", this.Mt, this);
  this.Ke && ((0,z.Hg)(this.Ke), (0,z.Dd)(this.Ke));
  this.Ke = null;
  cr.t.F.call(this);
};
z.g.ff = function() {
  this.Ke = (0,z.Zf)(ar, {post:this.ye().Pa()});
  this.Ke.appendChild((0,z.Zf)(br, {post:this.ye().Pa(), SK:er(this)}));
  if (this.Yt = this.Ke.querySelector(".picker-target.story-cover-image")) {
    this.ra.C("resize-end", this.Mt, this), (0,z.r)(this.me.yh(), this.Mt, this);
  }
  (0,z.Eg)(this.Ke).D("next-post", function(a) {
    a.Im || this.vB();
  }, this);
  z.Uy || (0,z.J)(this.Ke, "mouseover", this.RB, this);
  this.$f.appendChild(this.Ke);
};
z.g.wB = function(a, b) {
  return!this.ye() || (0,z.G)("useragent.requiresBodyScroll") ? Lq(a, b) : er(this) ? fr(this, a, b) : ir(a, b);
};
z.g.Mt = function() {
  this.Yt.style.height = this.me.yd.Fd().height + "px";
};
(0,z.p)(jr, Eq);
jr.prototype.Wg = null;
jr.prototype.F = function() {
  this.Wg && ((0,z.Hg)(this.Wg), (0,z.Dd)(this.Wg));
  this.Wg = null;
  jr.t.F.call(this);
};
jr.prototype.ff = function() {
  this.Wg = (0,z.Zf)($q, {post:this.ye().Pa(), CJ:!!this.$f.querySelector(".picker-layout-fill")});
  (0,z.Eg)(this.Wg).D("next-post", this.vB, this);
  (0,z.J)(this.Wg, "mouseover", this.RB, this);
  this.$f.appendChild(this.Wg);
};
jr.prototype.wB = function(a, b) {
  var c = new z.Tg(a, {name:"fade-back-out", duration:350}), d = new z.Tg(b, {name:"slide-up-in", duration:350});
  (0,z.r)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.tg)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.tg)(b);
  d.start();
  c.start();
  return d;
};
var mr = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, HR:!0, DIV:!0, FIGURE:!0, UL:!0, OL:!0};
Kr.prototype.ea = function(a) {
  this.gd.text = this.Bz.join("");
  (0,z.Aa)(this.gd.text, "\n") && (0,z.Dl)(this.gd, this.gd.text.length - 1, this.gd.text.length);
  a && this.gd.text.toLowerCase() == a.toLowerCase() && (0,z.Dl)(this.gd, 0, this.gd.text.length);
  return this.gd;
};
(0,z.p)(Or, z.B);
Or.prototype.H = function() {
  this.Yf = !0;
  this.xb.D(this.Dz, this.Ue, this);
};
Or.prototype.ha = function() {
  this.Yf = !1;
  this.xb.clear(this.Dz);
};
Or.prototype.Hd = function() {
  return this.Yf;
};
Or.prototype.F = function() {
  this.Yf && this.ha();
  yg(this.xb) || (0,z.Hg)(this.xb);
  Or.t.F.call(this);
};
Pr.prototype.create = function(a, b, c) {
  return(0,z.r)(a.load(this.Me), function(d) {
    return new d(a, b, c);
  }, this);
};
Qr.prototype.create = function(a, b, c) {
  return new this.CH(a, b, c);
};
(0,z.p)(Rr, z.Sh);
var Um = "endNav", Sr = 6E4, nB = !1;
z.g = Rr.prototype;
z.g.nx = "";
z.g.Lm = function(a) {
  var b = this.sa;
  b.push((0,z.J)(window.document, "click", this.pE, this));
  b.push((0,z.J)(window, "popstate", this.EE, this));
  z.Le && b.push((0,z.J)(window.document.documentElement, "keydown", this.UH, this));
  window.onbeforeunload = this.ks.bind(this);
  return this.replace(a, {sk:"h" + (0,z.hh)(), Om:!0});
};
z.g.UH = function(a) {
  if (32 == a.keyCode) {
    for (var b = !!a.shiftKey, c = a.target;c;c = c.parentNode) {
      if ("true" === c.contentEditable || "INPUT" === c.tagName || "TEXTAREA" === c.tagName) {
        return;
      }
    }
    c = (0,z.og)(a.target, !0);
    c !== window.document.body && c === window.document.activeElement && (c.scrollTop = Math.max(0, c.scrollTop + (b ? -1 : 1) * c.offsetHeight), a.preventDefault());
  }
};
z.g.navigate = function(a, b) {
  if (!(0,z.ka)(a)) {
    return(0,z.K)("Bad path " + a), Gc();
  }
  a = (0,z.Da)(a);
  "/" !== a[0] && (a = "/" + a);
  if (ds && this.bx) {
    return as(this, fs(a), b, !1);
  }
  window.location = a;
  return Gc();
};
z.g.reload = function(a) {
  if (null != this.Ld) {
    var b = fs(this.Ld);
    as(this, b, a, !0, !0);
  } else {
    throw Error("Invalid use of reload. No active path.");
  }
};
z.g.replace = function(a, b) {
  return as(this, fs(a), b, !0);
};
z.g.update = function(a, b) {
  var c = fs(a), d = b || this.gj;
  d.hash = c.hash;
  delete this.Ub[this.Ld];
  this.Ub[c.path] = this.ib;
  Zr(this, this.ib.Hb(), c.path, d, !0);
  this.Ld = c.path;
  this.gj = d;
};
z.g.Kz = function(a, b, c) {
  return(0,z.r)(this.$t.show(a.qC, b, c), function() {
    this.ib && this.ib.ha();
    return a;
  }, this);
};
z.g.wI = function(a, b) {
  var c = (0,z.Wm)(b);
  c && (c.tabIndex = -1);
  c.focus();
  var d = (0,z.Ec)(b);
  if (a.Om) {
    var e = this.iz[a.sk] || {scrollX:0, scrollY:0};
    (0,z.vc)(d, this.$l(c, e.scrollX, e.scrollY));
  } else {
    (0,z.vc)(d, this.$l(c, 0, 0));
  }
  return d;
};
z.g.$l = function(a, b, c) {
  var d = new z.nc;
  a == window.document.body ? d.Ba(null) : Cy ? (0,z.Qm)(function() {
    lg(a, b, c);
    d.Ba(null);
  }) : (lg(a, b, c), d.Ba(null));
  return d;
};
z.g.YD = function(a, b, c) {
  try {
    c.H.call(c);
  } catch (d) {
    (0,z.K)(d);
  }
  c.Bd.Vk(c);
  null == this.Ld || this.ib.Bd.be(this.Ld, this.ib) || es(this, this.Ld, this.ib);
  this.ib = c;
  this.Ld = a;
  this.gj = b;
  return c;
};
z.g.CE = function(a, b, c) {
  b !== this.ib && es(this, a, b);
  return c;
};
z.g.EE = function(a) {
  if (a.state && a.state.isNavigate) {
    var b = a.state.path, c = {};
    if (a.state.data) {
      try {
        c = window.JSON.parse(a.state.data);
      } catch (d) {
      }
    }
    c.Om = !0;
    this.replace(b, c);
    a.preventDefault();
  }
};
z.g.ks = function(a) {
  if (!nB) {
    nB = !0;
    (0,window.setTimeout)(function() {
      nB = !1;
    }, 500);
    var b = this.ib && this.ib.Xp();
    if ("string" == typeof b) {
      return z.D && (a.returnValue = b), b;
    }
    if (b) {
      return z.D && (a.returnValue = "Are you sure you want to leave?  Unsaved changes may be lost."), "Are you sure you want to leave?  Unsaved changes may be lost.";
    }
    z.D && (a.returnValue = void 0);
  }
};
z.g.pE = function(a) {
  if (!(a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || z.D && 1 != a.button || !z.D && a.button)) {
    for (var b = a.target;"A" != b.tagName;) {
      if (b = b.parentNode, !b) {
        return;
      }
    }
    if (b.hostname == window.location.hostname) {
      var c = b.pathname;
      if ((0,z.za)(c, this.vr) && !c.match(/\.\w+$/)) {
        for (var d = 0;d < this.sr.length;d++) {
          if (c.match(this.sr[d])) {
            return;
          }
        }
        var c = c.substr(this.vr.length), c = c + (b.search + b.hash), e = !1, d = {};
        if (b = b.getAttribute("data-source")) {
          d.source = b;
        }
        (0,z.t)(this.navigate(c, d), function(a) {
          e = !(a instanceof z.Hc);
        });
        e || a.preventDefault();
      }
    }
  }
};
z.g.ip = function(a, b) {
  this.Q.apply(this, arguments);
};
z.g.zH = function() {
  for (var a in this.Ub) {
    var b = this.Ub[a];
    b.Bd.wk(a, b) && b !== this.ib && es(this, a, b);
  }
};
z.g.F = function() {
  (0,z.dg)(this.sa);
  Rr.t.F.call(this);
};
(0,z.p)(js, z.ya);
var qp;
var rp;
var oB;
qs.prototype.TF = function() {
  this.Nh = null;
};
qs.prototype.open = function(a, b) {
  if (this.Nh) {
    return null;
  }
  this.Nh = (new rs(this.da, a, !0, b)).open();
  this.Nh.C(oB, this.TF, this);
  return this.Nh;
};
qs.prototype.error = function(a) {
  return this.open({title:"Uh oh!", bodyHtml:a, type:z.Ki});
};
qs.prototype.confirm = function(a, b, c, d) {
  return this.open({title:b || "Confirm", bodyHtml:a, type:z.pB, yi:c}, d);
};
(0,z.p)(rs, z.Sh);
z.qB = "confirm";
z.rB = "cancel";
oB = "dispose";
rp = "submit";
z.Ki = "alert";
z.pB = "confirm";
qp = "form";
z.g = rs.prototype;
z.g.Al = !1;
z.g.open = function() {
  this.xx = (0,z.J)(window, "keydown", this.SD, this);
  window.document.body.appendChild(this.X);
  (0,z.w)(window.document.body, "overlay-dialog-open");
  this.W.focus();
  this.Al = !0;
  this.X.scrollTop = 0;
  this.Q("open", this);
  return this;
};
z.g.close = function() {
  if (this.Al) {
    if ("next" == this.cc) {
      return this.sy();
    }
    this.xx && (0,z.dg)(this.xx);
    this.X.parentNode && (0,z.Dd)(this.X);
    this.Al = !1;
    (0,z.x)(window.document.body, "overlay-dialog-open");
    this.Q("close", this);
    this.pl && this.F();
    return this;
  }
};
z.g.Ta = function(a) {
  this.fx.push(a);
  return this;
};
z.g.update = function(a) {
  this.Al && (a.update = !0, this.X.innerHTML = yo(a), this.cc = a.type || "");
  return this;
};
z.g.L = function(a) {
  return this.X ? this.X.querySelector(a) : null;
};
z.g.vD = function() {
  this.Q(z.qB, this);
  this.close();
};
z.g.sy = function() {
  this.Q("next", this);
  var a = this.fx.shift();
  a ? this.update(a) : this.close();
};
z.g.kj = function() {
  this.Q(z.rB, this);
  this.close();
};
z.g.jp = function() {
  this.da.get("app").reload();
};
z.g.bI = function() {
  this.Q(rp, this);
};
z.g.SD = function(a) {
  27 === a.keyCode && this.close();
};
z.g.F = function() {
  (0,z.Hg)(this.X);
  this.Al && (this.pl = !1, this.close());
  this.da.get("app").xa(Um, this.close, this);
  this.Q(oB, this);
  rs.t.F.call(this);
};
ss.prototype.qn = function(a, b) {
  (0,z.yj)(Cz, {postId:a.id, type:b, dest:"email"});
  this.W.open({title:"Share via Email", bodyHtml:(0,z.H)(no, {post:a}), yi:"Send", type:qp}).C(rp, this.yI.bind(this, a.id));
};
ss.prototype.yI = function(a) {
  var b = this.W.Nh, c = b.L(".share-email-address"), d = c.value.split(",").map(function(a) {
    return a.trim();
  }), e = b.L(".sender-comment"), e = e ? e.value : null, c = new z.Tg(c, {name:"shimmy-shake", duration:400}), f = b.L(".email-address-error-message");
  10 < d.length ? (f.innerHTML = "Oops! You can only email 10 people at a time.", cd(f, "visible"), c.start()) : Zo(d) ? ((0,z.t)((0,z.r)(this.ga.post("/_/share/email", {postId:a, recipients:d, comment:e}, {ma:!0}), this.bG.bind(this, a)), this.aG, this), b.close()) : (f.innerHTML = ps({single:1 == d.length}), cd(f, "visible"), c.start());
};
ss.prototype.bG = function(a) {
  this.Qa.H("Your email was successfully sent.", "success");
  (0,z.yj)(z.Bz, {postId:a, type:"post", dest:"email"});
};
ss.prototype.aG = function(a) {
  this.Qa.H("Sorry, we couldn't send your email. Please try again later.", "failure");
  (0,z.K)(a);
};
(0,z.p)(ts, Or);
ts.prototype.Ue = function(a) {
  this.LD.qn(this.za.Pa(), a.target.getAttribute("data-action-type") || "post");
};
(0,z.p)(us, z.Uh);
var vs = 2E3;
us.prototype.H = function() {
  us.t.H.call(this);
  this.ra.C("scroll-throttled", this.xd, this);
};
us.prototype.ha = function() {
  this.ra.xa("scroll-throttled", this.xd, this);
  this.px.cancel();
  this.cz();
  us.t.ha.call(this);
};
us.prototype.xd = function(a, b) {
  for (var c = b.top > this.ay, d = this.zo, e = d;0 <= e && e < this.kt.length;e += c ? 1 : -1) {
    var f = mg(this.kt[e], a).y;
    if (c) {
      if (f < b.top) {
        d = e;
      } else {
        break;
      }
    } else {
      if (f < b.top) {
        d = e;
        break;
      }
    }
  }
  this.ay = b.top;
  this.zo != d && (this.zo = d, this.px());
};
us.prototype.cz = function() {
  this.Xo && this.Xo.cancel();
  var a = this.kt[this.zo], b = (0,z.tr)(a, this.ke), a = a.getAttribute("name"), c = b.getAttribute("name");
  a && c && (b = "/p/" + this.za.get("id") + "/state/location", a = {versionId:this.za.get("latestVersion"), sectionName:c, paragraphName:a}, this.Xo = (0,z.t)((0,z.tc)((0,z.r)(this.ga.put(b, a, {ma:!0, background:!0}), function(a) {
    this.za.set("userPostRelation", a.value);
  }, this), function() {
    this.Xo = null;
  }, this), z.K));
};
(0,z.p)(z.xs, z.Uh);
var ys = 20;
z.g = z.xs.prototype;
z.g.Mp = !1;
z.g.X = null;
z.g.In = !0;
z.g.uz = !1;
z.g.Oi = function() {
  return this.Mp;
};
z.g.H = function() {
  z.xs.t.H.call(this);
  this.qa(window.document.body, "keyup", this.zy);
  this.qa(window.document.body, "mouseup", this.zy);
};
z.g.V = function() {
  return this.X;
};
z.g.F = function() {
  (0,z.Hg)(this.X);
  (0,z.Dd)(this.X);
  z.xs.t.F.call(this);
};
z.g.qG = function(a) {
  "INPUT" != a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.zy = function(a) {
  (0,z.Jd)(this.X, a.target) || this.fr();
};
z.g.tI = function() {
  this.Q("update");
};
Bs.prototype.add = function(a, b) {
  for (var c = a.replace(/(^\/|\/$)/g, "").split("/"), d = [], e = this.zC, f = [], h = 0;h < c.length;h++) {
    var k, l;
    k = l = c[h];
    if ("*" == l && h != c.length - 1) {
      throw Error("Invalid path [" + a + "], * must only be at the end.");
    }
    if (":" == l[0]) {
      k = ":", d.push(l.substr(1)), f.push(null);
    } else {
      if ("@" == l[0]) {
        k = l.indexOf(":");
        var m = l.substr(1, k - 1);
        l = l.substr(k + 1);
        k = "@";
        e["@"] || (e["@"] = {parent:e});
        e["@"][m] || (e["@"][m] = {EK:RegExp(l), parent:e["@"], yt:l});
        d.push(m);
        e = e["@"][m];
        f.push(null);
        continue;
      } else {
        f.push(k);
      }
    }
    e[k] || (e[k] = {parent:e});
    e = e[k];
  }
  if (e.object) {
    throw Error("Can not register [" + a + "], path is ambiguous. [" + e.fullPath + "] previously registered.");
  }
  e.matches = d;
  e.fullPath = a;
  e.object = b;
  return function(a) {
    for (var b = [], c = 0, d = 0;d < f.length;d++) {
      null == f[d] ? b.push(arguments[c++]) : "*" == f[d] ? b.push(Array.prototype.slice.call(arguments, c).join("/")) : b.push(f[d]);
    }
    return "/" + b.join("/");
  };
};
Ds.prototype.add = function(a) {
  var b = a.path;
  this.nt.add(b, a);
  this.yH[b] = a;
  this.jF[b] = a.lK;
  return this;
};
Ds.prototype.sq = function(a, b) {
  var c = hs(this.nt, a);
  return(c = c && c.object) && c.sq(a, b);
};
X.prototype.sq = function(a, b) {
  var c = this.GK;
  if (!c) {
    return null;
  }
  for (var d = 0;d < c.length;d++) {
    var e = (0,c[d])(a, b);
    if (e) {
      return e;
    }
  }
  return null;
};
(0,z.p)(Hs, W);
Mf(Hs, {name:"TestPublicModel1", ca:[], fields:{modelId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
Hs.prototype.jh = function() {
  return "Model";
};
(0,z.p)(Is, W);
Mf(Is, {name:"TransitionalActivity", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, uniqueId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, links:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, relativeAge:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}}});
Is.prototype.jh = function() {
  return "UserActivity";
};
Is.prototype.getMetadata = function() {
  return this.w("metadata");
};
Is.prototype.vd = function(a) {
  return(0,z.E)(this, "metadata", a);
};
(0,z.p)(Js, W);
Mf(Js, {name:"TransitionalActivityLinks", ca:[], fields:{loadMore:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ks, W);
Mf(Ks, {name:"TransitionalActivityStatus", ca:[], fields:{newActivityCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ls, W);
Mf(Ls, {name:"TransitionalAuthInfo", xC:!0, ca:[], fields:{uid:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, authIssued:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, authSign:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ms, W);
Mf(Ms, {name:"TransitionalCollaborator", ca:[], fields:{user:{g:function() {
  return z.ft;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
Ms.prototype.uq = function() {
  return this.w("state");
};
var sB = {hM:1, pL:2, oM:3, pM:4, $isProtoEnum:!0};
(0,z.p)(z.Ns, W);
Mf(z.Ns, {name:"TransitionalCollection", ca:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, tags:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, responseTimeFuzzy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, shortDescription:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, user:{g:function() {
  return z.ft;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 123;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Ns.prototype;
z.g.jh = function() {
  return "Collection";
};
z.g.yb = function() {
  return this.w("id");
};
z.g.De = function(a) {
  return(0,z.E)(this, "id", a);
};
z.g.getName = function() {
  return this.w("name");
};
z.g.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
z.g.vq = (0,z.n)(107);
z.g.Zi = function(a) {
  return(0,z.E)(this, "description", a);
};
z.g.Ze = function() {
  return this.w("image");
};
z.g.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
z.g.getMetadata = function() {
  return this.w("metadata");
};
z.g.vd = function(a) {
  return(0,z.E)(this, "metadata", a);
};
(0,z.p)(Os, W);
Mf(Os, {name:"CollectionItem", ca:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
Os.prototype.getName = function() {
  return this.w("name");
};
Os.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
Os.prototype.Ze = function() {
  return this.w("image");
};
Os.prototype.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(Ps, W);
Mf(Ps, {name:"CollectionPostManagementItem", ca:[], fields:{status:{g:function() {
  return sB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, item:{g:function() {
  return Os;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
Ps.prototype.getItem = function() {
  return this.w("item");
};
Ps.prototype.setItem = function(a) {
  return(0,z.E)(this, "item", a);
};
(0,z.p)(Qs, W);
Mf(Qs, {name:"CollectionPostManagementItemList", ca:[], fields:{collectionPostManagementItems:{g:function() {
  return Ps;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Rs, W);
Mf(Rs, {name:"TransitionalRelatedCollectionReference", ca:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, source:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ss, W);
Mf(Ss, {name:"TransitionalCollectionNameVerification", ca:[], fields:{isAllowed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, reason:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ts, W);
Mf(Ts, {name:"TransitionalPostedIn", ca:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, collection:{g:function() {
  return z.Ns;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
Ts.prototype.av = function() {
  return this.w("collection");
};
(0,z.p)(Us, W);
Mf(Us, {name:"TransitionalSiteConfig", xC:!0, ca:[], fields:{coverMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, coverImgUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Vs, W);
Mf(Vs, {name:"TransitionalUserAgentCapabilities", ca:[], fields:{browser:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, family:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, os:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, version:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, supportsDesktopEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, supportsMobileEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, supportsInteract:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, supportsView:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, isMobile:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, isTablet:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, isNative:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, supportsFileAPI:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, supportsFullImageSections:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}, requiresBodyScroll:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}}, isTier1:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}}}});
var tB = {Iw:1, En:2, Aw:3, $isProtoEnum:!0};
(0,z.p)(z.Ws, W);
Mf(z.Ws, {name:"TransitionalFollowUp", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, visibility:{g:function() {
  return tB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Ws.prototype;
z.g.jh = function() {
  return "FollowUp";
};
z.g.oa = (0,z.n)(54);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.qq = function() {
  return this.w("mediaResourceId");
};
z.g.Nk = function(a) {
  return(0,z.E)(this, "mediaResourceId", a);
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.Zi = function(a) {
  return(0,z.E)(this, "description", a);
};
(0,z.p)(z.Xs, W);
Mf(z.Xs, {name:"Image", ca:[], fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, verticalGradient:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, cropType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, darken:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, blur:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Xs.prototype;
z.g.Jf = (0,z.n)(58);
z.g.Ye = function() {
  return this.w("height");
};
z.g.mn = function(a) {
  return(0,z.E)(this, "height", a);
};
z.g.Dm = function() {
  return this.w("width");
};
z.g.pn = function(a) {
  return(0,z.E)(this, "width", a);
};
z.g.Ok = (0,z.n)(7);
z.g.pq = function() {
  return this.w("filter");
};
z.g.vg = function(a) {
  return(0,z.E)(this, "filter", a);
};
(0,z.p)(z.Ys, W);
Mf(z.Ys, {name:"TransitionalImageInfo", ca:[], fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.Ys.prototype;
z.g.Jf = (0,z.n)(57);
z.g.pq = function() {
  return this.w("filter");
};
z.g.vg = function(a) {
  return(0,z.E)(this, "filter", a);
};
z.g.Yd = function() {
  return this.w("backgroundSize");
};
z.g.Lk = function(a) {
  return(0,z.E)(this, "backgroundSize", a);
};
z.g.Hi = (0,z.n)(13);
z.g.Zq = function(a) {
  return(0,z.E)(this, "originalWidth", a);
};
z.g.Bm = (0,z.n)(27);
z.g.Yq = function(a) {
  return(0,z.E)(this, "originalHeight", a);
};
z.g.Ok = (0,z.n)(6);
z.g.Ye = function() {
  return this.w("height");
};
z.g.mn = function(a) {
  return(0,z.E)(this, "height", a);
};
z.g.Dm = function() {
  return this.w("width");
};
z.g.pn = function(a) {
  return(0,z.E)(this, "width", a);
};
(0,z.p)(Zs, W);
Mf(Zs, {name:"TransitionalMediaResource", ca:[], fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, mediaResourceType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, iframeSrc:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, mediumPost:{g:function() {
  return z.$s;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}}, externalLink:{g:function() {
  return at;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}}, tweet:{g:function() {
  return bt;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = Zs.prototype;
z.g.jh = function() {
  return "MediaResource";
};
z.g.qq = function() {
  return this.w("mediaResourceId");
};
z.g.Nk = function(a) {
  return(0,z.E)(this, "mediaResourceId", a);
};
z.g.zf = function() {
  return this.w("href");
};
z.g.nn = function(a) {
  return(0,z.E)(this, "href", a);
};
z.g.hk = function() {
  return this.w("domain");
};
z.g.ln = function(a) {
  return(0,z.E)(this, "domain", a);
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.Zi = function(a) {
  return(0,z.E)(this, "description", a);
};
z.g.cv = function() {
  return this.w("iframeWidth");
};
z.g.kw = function(a) {
  return(0,z.E)(this, "iframeWidth", a);
};
z.g.KA = function() {
  return this.w("iframeHeight");
};
z.g.jw = function(a) {
  return(0,z.E)(this, "iframeHeight", a);
};
(0,z.p)(z.$s, W);
Mf(z.$s, {name:"TransitionalMediaResourceMediumPost", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
z.$s.prototype.oa = (0,z.n)(53);
z.$s.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
(0,z.p)(at, W);
Mf(at, {name:"TransitionalMediaResourceExternalLink", ca:[], fields:{quotes:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(bt, W);
Mf(bt, {name:"TransitionalMediaResourceTweet", ca:[], fields:{tweetId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, tweet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, twitterName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(z.ct, W);
Mf(z.ct, {name:"TransitionalNote", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, anchorContent:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, highlightId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}, whitelistIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}}, replies:{g:function() {
  return z.dt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}}, authorUser:{g:function() {
  return z.ft;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.ct.prototype;
z.g.oa = (0,z.n)(52);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.ze = (0,z.n)(9);
z.g.va = (0,z.n)(34);
z.g.ud = (0,z.n)(39);
z.g.uq = function() {
  return this.w("state");
};
z.g.od = (0,z.n)(90);
(0,z.p)(z.dt, W);
Mf(z.dt, {name:"TransitionalNoteReply", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.dt.prototype;
z.g.oa = (0,z.n)(51);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.ze = (0,z.n)(8);
z.g.va = (0,z.n)(33);
z.g.ud = (0,z.n)(38);
z.g.uq = function() {
  return this.w("state");
};
(0,z.p)(z.et, W);
Mf(z.et, {name:"TransitionalHighlight", ca:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, endIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.et.prototype;
z.g.yb = function() {
  return this.w("id");
};
z.g.De = function(a) {
  return(0,z.E)(this, "id", a);
};
z.g.od = (0,z.n)(89);
z.g.ua = function() {
  return this.w("startIndex");
};
z.g.Fe = function(a) {
  return(0,z.E)(this, "startIndex", a);
};
z.g.va = (0,z.n)(32);
z.g.ud = (0,z.n)(37);
(0,z.p)(z.ft, W);
Mf(z.ft, {name:"TransitionalUser", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, lastPostCreatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, backgroundImageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, bio:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}}});
z.ft.prototype.jh = function() {
  return "User";
};
z.ft.prototype.getName = function() {
  return this.w("name");
};
z.ft.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
z.ft.prototype.Jf = (0,z.n)(56);
(0,z.p)(gt, W);
Mf(gt, {name:"UserItem", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
gt.prototype.getName = function() {
  return this.w("name");
};
gt.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
gt.prototype.Ze = function() {
  return this.w("image");
};
gt.prototype.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(ht, W);
Mf(ht, {name:"UserItemList", ca:[], fields:{userItems:{g:function() {
  return gt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(z.it, W);
Mf(z.it, {name:"TransitionalUserPostRelation", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}}});
z.it.prototype.oa = (0,z.n)(50);
z.it.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
(0,z.p)(z.jt, W);
Mf(z.jt, {name:"TransitionalPost", ca:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, creator:{g:function() {
  return z.ft;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, homeCollection:{g:function() {
  return z.Ns;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, homeCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, detectedLanguage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, latestVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, isPublished:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, hasUnpublishedEdits:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}, latestRev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}}, createdAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}}, updatedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}}, acceptedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}}, firstPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}}, latestPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}}, isRead:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}}, vote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}}, experimentalCss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}}, displayAuthor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}}, media:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}}, virtuals:{g:function() {
  return z.kt;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}}, providerName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}}, reasons:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}}, ranking:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}}, weight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 30;
}, defaultValue:function() {
}, j:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.jt.prototype;
z.g.jh = function() {
  return "Post";
};
z.g.yb = function() {
  return this.w("id");
};
z.g.De = function(a) {
  return(0,z.E)(this, "id", a);
};
z.g.Wq = (0,z.n)(105);
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.ik = (0,z.n)(29);
z.g.va = (0,z.n)(31);
z.g.ud = (0,z.n)(36);
(0,z.p)(z.kt, W);
Mf(z.kt, {name:"TransitionalPostVirtuals", ca:[], fields:{currentCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, statusForCollection:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, createdAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, updatedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, acceptedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, createdAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, updatedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, acceptedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, firstPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, latestPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, allowNotes:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, languageTier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}, previewImage:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}}, wordCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}}, imageCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}}, draftSnippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}}, userPostRelation:{g:function() {
  return z.it;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}}, isOnReadingList:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}}, postedIn:{g:function() {
  return Ts;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}}, publishedInCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.ft;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.ct;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}}}});
z.kt.prototype.mh = (0,z.n)(76);
z.kt.prototype.Hh = (0,z.n)(1);
(0,z.p)(lt, W);
Mf(lt, {name:"TransitionalRecommendedPost", ca:[], fields:{post:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, source:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(z.mt, W);
Mf(z.mt, {name:"PostEmbeddable", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, creator:{g:function() {
  return gt;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, collection:{g:function() {
  return Os;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, miroUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, baseUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.mt.prototype;
z.g.oa = (0,z.n)(49);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.av = function() {
  return this.w("collection");
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.mh = (0,z.n)(75);
z.g.Hh = (0,z.n)(0);
z.g.Ze = function() {
  return this.w("image");
};
z.g.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(z.nt, W);
Mf(z.nt, {name:"PostDelta", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, savedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, delta:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.nt.prototype;
z.g.oa = (0,z.n)(48);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.kh = (0,z.n)(70);
z.g.ar = (0,z.n)(23);
z.g.ym = (0,z.n)(59);
z.g.jn = (0,z.n)(96);
(0,z.p)(z.ot, W);
Mf(z.ot, {name:"PostDeltaList", ca:[], fields:{postDeltas:{g:function() {
  return z.nt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
var uB = {YL:1, uM:2, wM:3, iM:4, EL:5, gM:6, $isProtoEnum:!0}, vB = {TC:1, MC:2, WC:3, XC:4, KC:5, RC:6, $isProtoEnum:!0}, wB = {CM:1, FL:2, LL:3, NL:4, $isProtoEnum:!0};
(0,z.p)(pt, W);
Mf(pt, {name:"TransitionalHourlyUserStat", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(z.qt, W);
Mf(z.qt, {name:"TransitionalHourlyPostStat", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}}}});
z.qt.prototype.oa = (0,z.n)(47);
z.qt.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
(0,z.p)(z.rt, W);
Mf(z.rt, {name:"TransitionalReferrer", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, totalCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, type:{g:function() {
  return uB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, internal:{g:function() {
  return z.st;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}, search:{g:function() {
  return tt;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, site:{g:function() {
  return ut;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, platform:{g:function() {
  return wB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}}}});
z.rt.prototype.oa = (0,z.n)(46);
z.rt.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.rt.prototype.g = function() {
  return this.w("type");
};
z.rt.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
(0,z.p)(z.st, W);
Mf(z.st, {name:"TransitionalInternalReferrer", ca:[], fields:{type:{g:function() {
  return vB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}}}});
z.st.prototype.g = function() {
  return this.w("type");
};
z.st.prototype.Zb = function(a) {
  return(0,z.E)(this, "type", a);
};
z.st.prototype.oa = (0,z.n)(45);
z.st.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
(0,z.p)(tt, W);
Mf(tt, {name:"TransitionalSearchReferrer", ca:[], fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
tt.prototype.hk = function() {
  return this.w("domain");
};
tt.prototype.ln = function(a) {
  return(0,z.E)(this, "domain", a);
};
(0,z.p)(ut, W);
Mf(ut, {name:"TransitionalSiteReferrer", ca:[], fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
ut.prototype.zf = function() {
  return this.w("href");
};
ut.prototype.nn = function(a) {
  return(0,z.E)(this, "href", a);
};
ut.prototype.Hb = function() {
  return this.w("title");
};
ut.prototype.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
var xB = {zL:1, tL:10, KL:2, mM:3, vL:4, BM:5, nM:6, yM:7, xM:8, AL:9, $isProtoEnum:!0};
(0,z.p)(vt, W);
Mf(vt, {name:"TransitionalPostIdSuggestions", xC:!0, ca:[], fields:{postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(wt, W);
Mf(wt, {name:"SuggestionReasonUser", ca:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
wt.prototype.getName = function() {
  return this.w("name");
};
wt.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
wt.prototype.Ze = function() {
  return this.w("image");
};
wt.prototype.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(xt, W);
Mf(xt, {name:"SuggestionReasonCollection", ca:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, image:{g:function() {
  return z.Xs;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
xt.prototype.getName = function() {
  return this.w("name");
};
xt.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
xt.prototype.Ze = function() {
  return this.w("image");
};
xt.prototype.Ee = function(a) {
  return(0,z.E)(this, "image", a);
};
(0,z.p)(z.yt, W);
Mf(z.yt, {name:"SuggestionReasonPost", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}}});
z.yt.prototype.oa = (0,z.n)(44);
z.yt.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.yt.prototype.getName = function() {
  return this.w("name");
};
z.yt.prototype.Yb = function(a) {
  return(0,z.E)(this, "name", a);
};
(0,z.p)(z.zt, W);
Mf(z.zt, {name:"PostIdSuggestion", ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, provider:{g:function() {
  return xB;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, collections:{g:function() {
  return xt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, posts:{g:function() {
  return z.yt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, users:{g:function() {
  return wt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.zt.prototype;
z.g.oa = (0,z.n)(43);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.hC = function(a) {
  return(0,z.E)(this, "provider", a);
};
z.g.fk = function() {
  return this.w("collections");
};
z.g.rq = function() {
  return this.w("posts");
};
(0,z.p)(At, W);
Mf(At, {name:"PostIdSuggestionList", ca:[], fields:{suggestions:{g:function() {
  return z.zt;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Bt, W);
Mf(Bt, {name:"TransitionalUploadInfo", ca:[], fields:{fileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}}});
(0,z.p)(Ct, W);
Mf(Ct, {name:"TransitionalUpvotes", ca:[], fields:{users:{g:function() {
  return z.ft;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.ft;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.ct;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}}});
Ct.prototype.sc = function() {
  return this.w("count");
};
var HC;
var CC;
var pC;
var jC;
var iC;
var eC;
var cC;
var $B;
var ZB;
var YB;
var kB;
var WB;
var VB;
var TB;
var RB;
var QB;
var PB;
var OB;
var NB;
var MB;
var LB;
var KB;
var IB;
var HB;
var GB;
var FB;
var AB;
var zB;
var jB;
z.yB = new X("/");
jB = new X("/home/load-more");
zB = new X("/latest");
new X("/me/suggestions/post-ids");
new X("/top-100");
AB = new X("/top-100/:monthYearSlug");
z.BB = new X("/p/new-post");
z.Wt = new X("/p/:postId");
z.CB = new X("/p/:postId/edit");
z.DB = new X("/_/p/blank");
z.EB = new X("/p/:postId/deltas");
FB = new X("/m/error/:errorCode");
GB = new X("/m/tos");
HB = new X("/m/signin");
IB = new X("/m/welcome");
z.JB = new X("/@twitterName:@.*");
KB = new X("/@twitterName:@.*/latest");
LB = new X("/@twitterName:@.*/recommended");
MB = new X("/@twitterName:@.*/has-recommended");
NB = new X("/@twitterName:@.*/collections");
OB = new X("/me/drafts");
PB = new X("/@twitterName:@.*/drafts");
QB = new X("/me/drafts/shared");
RB = new X("/@twitterName:@.*/drafts/shared");
z.SB = new X("/me/export");
TB = new X("/me/bookmarks");
new X("/me/reading-list");
z.UB = new X("/me/settings");
VB = new X("/me/stats");
WB = new X("/@twitterName:@.*/stats");
kB = new X("/collections");
z.XB = new X("/new-collection");
z.Hu = new X("/:collectionSlug");
YB = new X("/:collectionSlug/settings");
new X("/:collectionSlug/latest");
ZB = new X("/:collectionSlug/trending");
$B = new X("/:collectionSlug/submissions");
z.aC = new X("/:collectionSlug/new-post");
z.Zp = new X("/:collectionSlug/:postId");
z.bC = new X("/:collectionSlug/:postId/edit");
cC = new X("/m/espn");
z.dC = new X("/m/espn/welcome");
eC = new X("/m/start-writing");
new X("/_/ios/:appVersion/app");
new X("/_/ios/latest/app");
new X("/_/ios/user-config");
new X("/_/ios/appInfo");
new X("/_/ios/:appVersion/manifest");
new X("/_/ios/ipa/:ipaMD5");
new X("/_/ios/device/:deviceToken");
new X("/_/ios/test/post-ids");
var fC = new X("/m/app");
new X("/recommended");
new X("/collections/recommended");
new X("/r");
new X("/help");
new X("/js/plovr/proxy/*");
new X("/js/main-base.bundle.js");
new X("/_/status");
new X("/_/oh-noes");
new X("/_/stat");
new X("/_/debug/user-agent");
var Nu = new X("/_/activity-status");
new X("/_/upload/");
new X("/_/iframe-upload/");
z.gC = new X("/_/c/verify-name");
z.hC = new X("/_/c/verify-count");
iC = new X("/_/vote/p/:postId");
jC = new X("/_/vote/:collectionSlug/:postId");
new X("/_/subscribe/:collectionSlug");
new X("/_/share/email");
new X("/_/make-public/:collectionSlugOrP/:postId/:noteId");
new X("/_/variants");
new X("/_/homepage/generateHomepageMagnitudes");
new X("/_/homepage/generateHomepage");
new X("/_/generate/postMetricsMagnitudes");
new X("/_/generate/collectionPostAggregations");
new X("/_/admin");
new X("/_/admin/users");
new X("/_/admin/users/:name");
new X("/_/admin/users/:name/invite");
new X("/_/admin/users/:name/email");
new X("/_/admin/users/:name/refresh-avatar");
new X("/_/admin/users/:name/email/verified");
new X("/_/admin/users/:twitterId/import-twitter-graph");
new X("/_/admin/users/:name/errors");
new X("/_/admin/invite");
new X("/_/admin/events");
new X("/_/admin/post/change-author");
new X("/_/admin/collection/change-owner");
new X("/_/admin/collection/add-admin");
new X("/_/admin/collection/change-slug");
new X("/_/admin/postDebugger");
new X("/_/admin/post/undelete/:postId");
new X("/_/admin/collectionDebugger");
new X("/_/admin/scheduled-posts");
new X("/_/admin/scheduled-posts/:collectionId/:timestampMs");
new X("/_/admin/scheduled-posts/process-now");
new X("/_/admin/scheduled-posts/edit/:collectionId/:timestampMs/:editedTimestampMs");
new X("/_/admin/routes");
new X("/_/admin/configs");
new X("/_/admin/push-notifications");
new X("/_/admin/prl/clearSubBuilders");
new X("/_/admin/payments/transaction/test");
new X("/_/admin/payments/subscription/create-test");
new X("/_/admin/payments/subscription/cancel-test");
new X("/_/admin/cacheDebugger");
new X("/_/admin/cacheDebugger/:cacheKey/delete");
new X("/_/admin/images");
new X("/_/admin/images/:appImageId");
new X("/_/admin/images/:appImageKey/:appImageId");
new X("/_/email/preview/:template");
new X("/_/admin/invites");
new X("/_/admin/invites/bulk");
new X("/_/admin/invites/:inviteCode");
new X("/_/admin/invites/:inviteCode/total-count");
new X("/_/admin/invites/:inviteCode/expires");
new X("/m/invite/:inviteCode");
new X("/_/admin/checkAndSchedulePost");
new X("/_/admin/tags");
new X("/_/admin/tags/repopulated");
new X("/_/admin/blacklist");
new X("/_/admin/blacklist/clear-data");
new X("/_/api/schemas");
new X("/_/api/site-config");
new X("/_/perf/routes");
new X("/_/perf/route");
new X("/_/perf/graph");
new X("/_/perf/graphNodes");
new X("/_/intents/further-reading/make-public/:postId/:followUpId/:token");
z.kC = new X("/_/copyedits/:postId");
z.lC = new X("/_/media-resources/*");
new X("/media/:mediaResourceId");
new X("/_/api/users/:userId");
new X("/_/api/posts/:postId/collection-management");
new X("/_/api/posts/:postId/recommenders");
new X("/m/facebook/close");
z.mC = new X("/top-100/:monthYearSlug/load-more");
new X("/p/:postId/version");
z.nC = new X("/p/:postId/publish");
new X("/p/:postId/revert");
z.oC = new X("/p/:postId/revert/:versionId/:baseRev");
pC = new X("/p/:postId/state/read");
new X("/p/:postId/state/viewed");
new X("/p/:postId/state/location");
new X("/p/:postId/state");
new X("/p/:postId/meta");
var qC = new X("/p/:postId/vote"), rC = new X("/p/:postId/spam");
new X("/p/:postId/bookmarks");
var Tt = new X("/p/:postId/upvotes"), sC = new X("/p/:postId/referrers");
new X("/p/:postId/follow-ups/new");
new X("/p/:postId/follow-ups/order");
new X("/p/:postId/follow-ups");
new X("/p/:postId/follow-ups/:followUpId");
new X("/p/:postId/follow-ups/:followUpId/visibility");
new X("/p/:postId/collaborators");
var tC = new X("/p/:postId/collaborators/:collaboratorId");
new X("/p/:postId/notes/new");
new X("/p/:postId/notes");
new X("/p/:postId/notes/:noteId");
new X("/p/:postId/notes/:noteId/state");
new X("/p/:postId/notes/:noteId/new-reply");
new X("/p/:postId/notes/:noteId/:replyId");
new X("/p/:postId/notes/:noteId/:replyId/state");
new X("/p/:postId/updateCss");
new X("/p/:postId/display-author");
new X("/m/account/authenticate-twitter");
new X("/m/account/verify-twitter");
new X("/m/account/confirm/:key");
new X("/m/account/create");
z.uC = new X("/m/account/deactivate");
new X("/m/token");
z.vC = new X("/m/goodbye");
new X("/m/signin/refresh");
new X("/m/signout/:xsrf");
new X("/me/activity");
new X("/@twitterName:@.*/activity");
new X("/@twitterName:@.*/latest/load-more");
new X("/@twitterName:@.*/recommended/load-more");
new X("/@twitterName:@.*/has-recommended/load-more");
new X("/me/collections");
new X("/me/collections/viewed");
new X("/me/posts");
z.wC = new X("/me/drafts/shared/load-more");
z.xC = new X("/@twitterName:@.*/drafts/shared/load-more");
z.yC = new X("/me/drafts/load-more");
z.zC = new X("/@twitterName:@.*/drafts/load-more");
new X("/me/export/:exportId");
new X("/me/subscriptions/collection/:collectionSlug");
new X("/me/unsubscribe/:userId/:hash");
z.AC = new X("/me/settings/:setting");
z.BC = new X("/me/update-email");
CC = new X("/me/send-verify");
new X("/me/activity/last-viewed");
new X("/@twitterName:@.*/activity/load-more/:olderThan");
new X("/@twitterName:@.*/activity/:occurredAt/:randomId/actors");
z.DC = new X("/me/stats/total/:startTimeMs/:endTimeMs");
z.EC = new X("/me/stats/:postId/:startTimeMs/:endTimeMs");
z.FC = new X("/@twitterName:@.*/stats/total/:startTimeMs/:endTimeMs");
z.GC = new X("/@twitterName:@.*/stats/:postId/:startTimeMs/:endTimeMs");
new X("/feed/recent");
new X("/feed/newest");
new X("/feed/latest");
HC = new X("/feed/:collectionSlug");
z.IC = new X("/feed/@twitterName:@.*");
new X("/embed");
new X("/_/embed/@twitterName:@.*");
new X("/_/embed/:collectionSlug");
new X("/_/embed/p/:postId");
new X("/_/embed/:collectionSlug/:postId");
new X("/c/:collectionId");
new X("/:collectionSlug/load-more");
new X("/:collectionSlug/subscribers");
new X("/:collectionSlug/related");
new X("/:collectionSlug/paywall");
var JC = new X("/:collectionSlug/:postId/vote"), KC = new X("/search");
new X("/search/users");
var lB = new X("/search/collections");
new X("/search/tags");
new X("/search/posts");
new X("/search/all");
new X("/_/webhooks/braintree");
new X("/*");
N("g", "landscape", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(c.onboardingLandscapeFooterImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch2 class\x3d"logged-out-branding-title"\x3e\x3cspan class\x3d"logged-out-branding-name"\x3e' + (0,z.O)(c.productName) + '\x3c/span\x3e\x3c/h2\x3e\x3cp class\x3d"logged-out-tagline"\x3eThe stories that matter to you, written and recommended by the people you know.\x3c/p\x3e\x3cdiv class\x3d"btn-set"\x3e\x3ca class\x3d"btn btn-large btn-primary btn-light" title\x3d"Create an account" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/" tabindex\x3d"-1"\x3eJoin Medium\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e' + 
  Dt(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
N("g", "covers", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer logged-out-post-footer-cover" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(c.promoStartWritingBackgroundImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch1 class\x3d"promo-title"\x3e' + (c.supportsEdit ? "Your audience awaits. Tell a story on " + (0,z.O)(c.productName) + " today." : "The stories that matter to you, written and recommended by the people you know.") + '\x3c/h1\x3e\x3cdiv class\x3d"promo-actions btn-set"\x3e' + 
  (c.supportsEdit ? '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/p/new-post"\x3eStart writing\x3c/a\x3e' : '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/"\x3eJoin ' + (0,z.O)(c.productName) + "\x3c/a\x3e") + "\x3c/div\x3e" + (c.supportsEdit ? '\x3cdiv class\x3d"align-center"\x3e\x3cimg class\x3d"promo-image" src\x3d"' + (0,z.P)((0,z.Q)(c.promoStartWritingHomeImage)) + 
  '"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e" + Dt(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
N("g", "toolbar", function(a, b, c) {
  a = {Ov:"onboarding-toolbar", gq:'\x3cspan class\x3d"btn-set onboarding-toolbar-branding"\x3e\x3cspan class\x3d"logged-out-toolbar-icon icons icons-logo-m"\x3e\x3c/span\x3e\x3cspan class\x3d"logged-out-toolbar-title"\x3ePublished on ' + (0,z.O)(c.productName) + '\x3c/span\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.welcomeUrl)) + '" class\x3d"logged-out-toolbar-about" title\x3d"' + (0,z.P)(c.productName) + ' — The stories that matter to you, written and recommended by the people you know."\x3eAbout ' + 
  (0,z.O)(c.productName) + "\x3c/span\x3e\x3c/span\x3e", gh:Dt({IJ:!0}, c)};
  return Eo(a);
});
(0,z.p)(Kt, z.Pn);
var Lt = 0;
z.g = Kt.prototype;
z.g.mx = null;
z.g.rt = null;
z.g.ke = null;
z.g.$k = null;
z.g.hx = null;
z.g.ix = null;
z.g.Nd = null;
z.g.yo = null;
z.g.On = 0;
z.g.za = null;
z.g.$g = null;
z.g.Tb = null;
z.g.ey = null;
z.g.Gc = null;
z.g.Wt = null;
z.g.Ps = null;
z.g.Va = null;
z.g.Th = null;
z.g.Hb = function() {
  var a = [this.za.get("title")];
  this.Tb && a.push(this.Tb.get("name"));
  a.push((0,z.G)("productName"));
  return a.join(" — ");
};
z.g.Ff = function(a) {
  if (!a.value || !a.references) {
    var b = Error("trying to process bad embedded data in post/ShowScreen");
    oh(b, "badData", JSON.stringify(a));
    throw b;
  }
  b = (0,z.Wj)(a.value, a.references);
  b = this.za = (0,z.Lj)(this.Z, b);
  this.fa && -1 == this.fa.indexOf(b) && this.fa.add(b);
  if (a.contextCollection) {
    var c = (0,z.Wj)(a.contextCollection, a.references);
    this.Tb = (0,z.Uj)(this.Z, c);
  }
  this.tD = a.collaborators;
  if ((0,z.G)("supportsEdit") && !Nt(this) && b.get("creator.userId") == (0,z.G)("currentUser.userId")) {
    throw a = this.ya ? z.bC.ea({postId:this.U, collectionSlug:this.ya}) : z.CB.ea({postId:this.U}), this.ba.navigate(a, this.XG), new z.Hc(this.ey);
  }
};
z.g.oc = function() {
  return this.ey = (0,z.r)((0,z.r)(this.ga.get(Vt(this), {ma:!0}), this.Ff, this), this.cg, this);
};
z.g.vb = function() {
  var a = new z.fn(this.Hb(), (0,z.gj)(this.za, "virtuals.snippet"), "article");
  a.author = (0,z.gj)(this.za, "creator.name");
  a.Yv = "https://www.facebook.com/medium";
  a.Xv = (0,z.gj)(this.za, "firstPublishedAt");
  this.vd(a);
  this.ke = this.L(".post-article");
  this.$k = this.ke.getElementsByClassName("body")[0];
  if (this.hx = this.L(".background-size-cover")) {
    this.ix = this.L(".post-header-image-cover");
  }
  (a = this.L(".background-size-full")) && this.wa(new Rn(this.La(), a));
  (0,z.Eg)(this.J).D("sign-in", this.TH, this).D("approve-crosspost", this.gE, this).D("reject-crosspost", this.IE, this).D("upvote", this.Tz, this).D("unvote", this.Tz, this).D("post-edit", this.ID, this).D("show-collaborator", this.Iz, this).D("hide-collaborator", this.Iz, this).D("share-on-twitter", this.KH, this).D("share-on-facebook", this.JH, this).D("more-actions", this.pF, this).D("report-spam", this.qH, this).D("embed-story", this.OD, this).D("scroll-to-post-start", this.jz, this).D("resume", 
  this.wH, this).D("show-other-collections", this.PH, this);
  this.wa(new ts(this.J, this.La(), this.za));
  (0,z.G)("variants.experimental_css_editing") && (0,z.G)("variants.is_super_user") && (this.mx = new Bq(this.La(), this.za, this.ke.querySelector(".post-author-card")));
  (0,z.G)("currentUser.isAuthenticated") && this.wa(new us(this.La(), this.ke, this.za));
  (0,z.G)("variants.covers_plus") && this.wa(new wq(this.ke));
  if (a = this.L(".show-cross-poster")) {
    this.Pn = new mq(this.La(), (0,z.Wm)(this), a, this.za, this.xo), this.wa(this.Pn);
  }
  this.Od = new $o(this.La());
  this.Ua = new z.Dq;
};
z.g.H = function() {
  Kt.t.H.call(this);
  (0,z.Jj)(1, "post");
  this.Nx = !!this.L(".picker-layout-fill");
  !Mt(this) && this.za && Nt(this) && (0,z.yj)(iA, {postId:this.U, collectionSlug:this.ya});
  Nt(this) || (0,z.yj)(jA, {postId:this.U});
  (0,z.w)(window.document.body, "template-flex-article");
  500 >= window.innerWidth || (this.Va = new z.xs, zs(this.Va, Pt(this), Nt(this)), (0,z.On)(this, this.Va.V()), this.wa(this.Va));
  Qt(this);
  "toolbar" !== (0,z.G)("variants.logged_out_footer") && (0,z.G)("variants.enable_skip_post") && Nt(this) && (this.Wt = new jr(this.La(), this.J, this.U, this.Ns), this.Wt.rd());
  var a = this.Gt(), b = St(this), c = Rt(this);
  (0,z.tc)((0,z.tc)((0,z.tc)(a, function() {
    return c;
  }), function() {
    return b;
  }), function() {
    (0,z.w)(this.J, "post-supplemental-loaded");
  }, this);
  (0,z.Vh)(this, this.ra, "scroll-end", this.Fj, this);
  (0,z.Vh)(this, this.ra, "resize-end", this.ul, this);
  z.Uy || (0,z.Vh)(this, this.ra, "scroll", this.xd, this);
  this.Fj();
  this.ul();
  if ((0,z.G)("variants.use_experimental_css")) {
    if (a = (0,z.gj)(this.za, "experimentalCss")) {
      this.rt = (0,z.vf)(a);
    }
    Zt();
  }
  (0,z.Vh)(this, this.DH, Hx, this.bH, this);
  if (this.xo) {
    var d = this.Z.fk();
    this.yo = (0,z.r)((0,z.sj)(d), function() {
      var a = this.L(".show-cross-poster");
      if (0 < d.sc() || Mt(this)) {
        if (this.Zh) {
          return(0,z.Pw)(this.Ja, a, (0,z.H)(Bo)), !1;
        }
        this.Pn && (0,z.r)(this.Pn.rn(a), function(a) {
          this.Tb = a;
          this.ya = a.get("slug");
          this.ba.update(Vt(this));
        }, this);
      }
    }, this);
  }
};
z.g.ha = function() {
  this.rt && xf(this.rt);
  Zt();
  this.Nd && (this.Nd.cancel(), this.Nd = null);
  this.yo && (this.yo.cancel(), this.yo = null);
  (0,z.x)(this.J, "post-supplemental-loaded");
  (0,z.x)(window.document.body, "template-flex-article");
  (0,z.C)(this.Ua);
  (0,z.C)(this.wd);
  (0,z.C)(this.Gc);
  (0,z.C)(this.Wt);
  (0,z.C)(this.Ps);
  (0,z.C)(this.mx);
  Kt.t.ha.call(this);
};
z.g.kx = function(a) {
  return a && this.Z.wb[a] ? this.Z.wb[a] : this.ya ? Sj(this.Z, this.ya) : null;
};
z.g.KH = function(a) {
  this.Jp.qn((0,z.gj)(this.za, "title"), (0,z.gj)(this.za, "creator.username"), this.U, a.target.getAttribute("data-action-type") || "post", this.tD);
};
z.g.qH = function() {
  this.W.confirm("Are you sure you want to report this post as spam?").C(z.qB, this.rH, this);
};
z.g.OD = function() {
  (0,z.yj)(mA, {collectionSlug:this.ya, postId:this.U});
  this.W.open({title:"Embed this Story", bodyHtml:(0,z.H)(Ht, {post:this.za.Pa(), collection:this.Tb ? this.Tb.Pa() : void 0}), type:z.Ki}).L("textarea").select();
};
z.g.rH = function() {
  var a = (0,z.gj)(this.za, "title"), b = rC.ea({postId:this.U});
  (0,z.tc)(this.ga.put(b, {ma:!0, background:!0}), function(b) {
    b instanceof Error || !1 === b ? this.Qa.H(Qq({title:a}), "error") : this.Qa.H(Pq({title:a}), "success");
  }, this);
};
z.g.pF = function(a) {
  (0,z.Pw)(this.Ja, a.target, (0,z.H)(Ao, {postId:this.U}), "post-more-actions-popover", this.J);
};
z.g.wH = function(a) {
  (a = this.L('[name\x3d"' + a.value + '"]')) ? this.$l(a) : this.jz();
};
z.g.jz = function() {
  var a = this.J.querySelector(".post-page-wrapper-inner");
  this.$l(a);
};
z.g.$l = function(a) {
  a = (0,z.ng)(a);
  this.Nd && this.Nd.cancel();
  this.Nd = new z.qq((0,z.Wm)(this), "scrollTop", 600, Math.max(a, 0));
};
z.g.bH = function(a) {
  a = (0,z.mb)(a);
  a.postId = this.U;
  Bj(Yz, a);
};
z.g.JH = function(a) {
  this.VD.qn((0,z.gj)(this.za, "title"), (0,z.gj)(this.za, "creator.name"), (0,z.gj)(this.za, "virtuals.snippet"), (0,z.gj)(this.za, "content.image.imageId"), this.U, a.target.getAttribute("data-action-type") || "post");
};
z.g.ul = function() {
  (0,z.Nr)(this.$k);
  (0,z.Mr)(this.$k);
  Ot(this);
};
z.g.F = function() {
  (0,z.C)(this.Th);
  this.fa = this.Th = null;
  Kt.t.F.call(this);
};
z.g.cg = function(a) {
  var b = this.za.Pa(), c = (0,z.ml)(b), d = this.Tb ? this.Tb.Pa() : void 0, e = a.postStatus;
  if (!e && d) {
    for (var f = this.Tb.get("slug"), h = this.za.get("virtuals.postedIn"), k = 0;k < h.length;k++) {
      if (h[k].collection.slug == f) {
        e = h[k].status;
        break;
      }
    }
  }
  this.J.innerHTML = (0,z.H)(z.Tq, {post:b, contextCollection:d, mode:a.mode, collaborators:a.collaborators, postStatus:e, isCrossPoster:a.isCrossPoster, PB:(0,z.nm)(b, c, !0)});
};
z.g.Gt = function() {
  return(0,z.t)((0,z.r)(this.Ua.wa(Rm(500)), function() {
    this.Gc = (0,z.Nn)(this, "follow-ups").Xj(this.za, Mt(this));
    return(0,z.r)((0,z.r)(this.Gc.rd(this.L(".post-follow-ups")), this.Gc.kK, this.Gc), function() {
      var a = (0,z.gw)(this.Gc);
      a && (0,z.hw)(this.Gc, a);
    }, this);
  }, this), z.K);
};
z.g.bz = function(a) {
  return(0,z.r)(this.Ua.wa(Rm(500)), function() {
    (0,z.Bd)((0,z.Zf)(Et, {mJ:a}), this.L(".post-footer"));
  }, this);
};
z.g.TH = function(a) {
  var b = HB.ea();
  (0,z.Lc)(a.target, "recommend-button") ? ((0,z.yj)(vz, {collectionSlug:this.ya, postIds:[this.U]}), a = this.ya ? jC.ea({postId:this.U, collectionSlug:this.ya}) : iC.ea({postId:this.U}), b += "?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(a)) : b += "?redirect\x3d" + (0,window.encodeURIComponent)(Vt(this));
  window.location = b;
};
z.g.xd = function() {
  var a = (0,z.Wm)(this).scrollTop;
  this.hx && (this.On = this.On || this.L(".background-size-cover").offsetHeight) && (this.ix.style.visibility = a > this.On ? "hidden" : "");
  if (this.Nx) {
    var b = this.L(".post-to-post");
    b && (0,z.Jc)(b, "hide", 60 >= a);
  }
};
z.g.Fj = function() {
  if (this.za && Nt(this)) {
    var a = this.me.wa(this.$k), a = a.ld.cb + a.Ye(), b = this.me.yd.Fd();
    b.top + b.height >= a - 100 && (a = pC.ea({postId:this.U}), (0,z.t)(this.ga.put(a, null, {background:!0, Td:!0}), z.K), (0,z.yj)(Az, {collectionSlug:this.ya, postIds:[this.U], postId:this.U}), this.ra.xa("scroll-end", this.Fj, this));
  }
};
z.g.IE = function() {
  this.U && this.Od ? (0,z.r)(op(this.Od, this.U, this.Tb), function() {
    var a = $B.ea({collectionSlug:this.ya});
    this.ba.navigate(a);
  }, this) : Ut(this, np());
};
z.g.gE = function() {
  this.U && this.ya && this.Od ? (0,z.r)(dp(this.Od, this.U, this.ya, (0,z.gj)(this.Tb, "name"), this.fa), function() {
    var a = $B.ea({collectionSlug:this.ya});
    this.ba.navigate(a);
  }, this) : Ut(this, hp());
};
z.g.Tz = function(a) {
  if (!this.zs) {
    this.zs = !0;
    var b = "unvote" == a.ie, c = a.target, d = this.ya ? JC.ea({postId:a.value, collectionSlug:this.ya}) : qC.ea({postId:a.value});
    this.za.set("vote", !b);
    Xt(this);
    b ? ((0,z.yj)(zz, {collectionSlug:this.ya, postIds:[this.U]}), (0,z.x)(this.L(".post-article"), "has-vote"), (0,z.x)(c, "active"), c.setAttribute("data-action", "upvote"), d = this.ga.Dd(d, {Td:!0})) : ((0,z.yj)(yz, {collectionSlug:this.ya, postIds:[this.U]}), (0,z.x)(this.L(".post-article"), "has-vote"), (0,z.w)(c, "active"), c.setAttribute("data-action", "unvote"), d = this.ga.put(d, null, {Td:!0}));
    (0,z.tc)(d, function() {
      this.zs = !1;
    }, this);
    (0,z.t)(d, function() {
      (0,z.Kc)(c, "active");
      (0,z.Kc)(this.L(".post-article"), "has-vote");
      c.setAttribute("data-action", a.ie);
      this.za.set("vote", b);
      Xt(this);
    }, this);
    (0,z.t)(d, (0,z.cp)(this.W, "We were unable to save your recommendation.  Please try again later."));
  }
};
z.g.vz = function(a) {
  var b = this.L(".vote-widget");
  !this.$g && a && (a.value.users = Yt(this, a.value.users, a.value.usersBySocialRecommends), this.$g = new z.fj(a.value));
  b.innerHTML = (0,z.H)(Zq, this.$g.Pa());
};
z.g.ID = function(a) {
  this.ba.navigate(a.target.pathname.substr(1), this.Ns.dr({scrollTop:(0,z.Wm)(this).scrollTop}));
};
z.g.Iz = function(a) {
  function b(b) {
    (0,z.Jc)(c, "post-collaborator-visible", !b);
    a.target.setAttribute("data-action", b ? "show-collaborator" : "hide-collaborator");
    a.target.innerHTML = b ? "(show)" : "(hide)";
  }
  var c = (0,z.Od)(a.target, "SPAN"), d = "hide-collaborator" == a.ie, e = {state:d ? "hidden" : "visible"};
  b(d);
  var f = tC.ea({postId:this.U, collaboratorId:a.value});
  (0,z.tc)(this.ga.post(f, e, {ma:!0}), function(a) {
    a instanceof Error || !1 === a ? (this.Qa.H("Failed to " + (d ? "hide" : "show") + " collaborator", "error"), b(!d)) : this.Qa.H("Collaborator " + (d ? "Hidden" : "Shown"), "success");
  }, this);
};
z.g.PH = function(a) {
  var b = this.Tb ? this.Tb.get("id") : this.za.get("homeCollection").id;
  Fu(this.Qh, this.za.get("virtuals.postedIn"), b, a.target);
};
z.g = $t.prototype;
z.g.be = function(a, b) {
  var c = (0,z.pa)(b);
  this.Ub[c] || (this.Ub[c] = {time:this.now(), Qc:b.Qc});
  return!0;
};
z.g.wk = function(a, b) {
  var c = this.Ni(b);
  c && delete this.Ub[(0,z.pa)(b)];
  return c;
};
z.g.vh = function(a, b, c) {
  a = (0,z.pa)(c);
  return this.Ub[a] ? ((b = !this.Ni(c) && (!!b.Om || b.Qc == this.Ub[a].Qc)) || delete this.Ub[a], b) : !1;
};
z.g.Vk = z.ea;
z.g.now = function() {
  return(new Date).getTime();
};
z.g.Ni = function(a) {
  a = (0,z.pa)(a);
  return!(a in this.Ub) || this.now() - this.Ub[a].time >= this.Ks;
};
(0,z.p)(au, z.Uh);
z.g = au.prototype;
z.g.Wf = null;
z.g.H = function() {
  au.t.H.call(this);
  var a = this.Z.rq();
  this.Wf = (0,z.r)((0,z.sj)(a), function() {
    var b = bu(this, a).length;
    0 < a.sc() && (this.Tb.get("virtuals.canAdminister") ? this.Fg.innerHTML = b ? "Add/Remove Your Story" : "Add Your Story" : this.Fg.innerHTML = b ? "Submit/Remove Your Story" : "Submit Your Story", (0,z.x)(this.Fg, "hide"), this.LH && this.rn(this.Fg));
  }, this);
  (0,z.Eg)(this.ja).D("show-cross-poster", this.Ut, this);
};
z.g.ha = function() {
  au.t.ha.call(this);
  (0,z.Hg)(this.ja);
  this.Wf && (this.Wf.cancel(), this.Wf = null);
};
z.g.Ut = function(a) {
  this.rn(a.target);
};
z.g.rn = function(a) {
  var b = (0,z.gj)(this.Tb, "slug"), c = (0,z.gj)(this.Tb, "name"), d = !!this.Tb.get("virtuals.canAdminister"), e = this.Z.rq();
  return(0,z.r)((0,z.r)((0,z.sj)(e), function() {
    var b = bu(this, e).length, c = new z.vu(new z.jj(e.Ia.concat().sort(this.Fu.bind(this)))), b = this.is(d, !!b), k;
    k = d ? "" : (k = (0,z.gj)(this.Tb, "responseTimeFuzzy")) ? $n({responseTimeFuzzy:k}) : $n({responseTimeFuzzy:"within a day"});
    c = Du((new Cu(this.da, c)).bd(b).Zi(k)).Mk(this.Eu.bind(this));
    c.ty = !0;
    a && (c.Dg = a);
    return Gu(this.Qh, c);
  }, this), function(a) {
    a && ("APPROVED" == cu(this.Z.Ob(a), this.hl) ? mp(this.Od, a, this.Tb, this.fa) : d ? dp(this.Od, a, b, c, this.fa) : ap(this.Od, a, b));
  }, this);
};
z.g.Fu = function(a, b) {
  var c = cu(a, this.hl).toUpperCase(), d = cu(b, this.hl).toUpperCase();
  return(c = mB.indexOf(c) - mB.indexOf(d)) ? c : (0,z.hj)(b, "latestPublishedAt") - (0,z.hj)(a, "latestPublishedAt");
};
z.g.Eu = function(a) {
  var b = !!this.Tb.get("virtuals.canAdminister"), c = {id:a.get("id"), name:a.get("title"), description:""};
  switch(cu(a, this.hl)) {
    case "PENDING":
      c.description = "Pending";
      c.disabled = !0;
      break;
    case "APPROVED":
      c.status = "Remove";
      c.description = "Already in this collection";
      c.hasIcon = !0;
      break;
    case "REJECTED":
      if (b) {
        c.status = "Add";
        break;
      }
      c.description = "Not Accepted";
      c.disabled = !0;
      break;
    default:
      c.status = b ? "Add" : "Submit";
  }
  return c;
};
z.g.is = function(a, b) {
  return a ? b ? "Add or Remove your story" : "Add your story" : b ? "Submit or Remove your story" : "Submit your story";
};
(0,z.p)(eu, z.Pn);
z.g = eu.prototype;
z.g.Bd = new $t(3E5);
z.g.Vc = null;
z.g.bp = null;
z.g.Ra = null;
z.g.vb = function() {
  var a = this.Vc.get("name") + " — " + (0,z.G)("productName"), b = (0,z.gj)(this.Vc, "description");
  this.vd(new z.fn(a, b, "website"));
  this.bp && (this.Ra = new z.ku(this.La()), (0,z.nu)((0,z.mu)((0,z.lu)(this.Ra, this.bp), this.J).Gh((0,z.Wm)(this)), {collection:this.Vc.Pa(), lv:!0, kb:!0}), this.Ra.C(LC, this.Po, this), this.Ra.C(MC, this.Qo, this));
  (a = this.L(".layout-fill-height")) && this.wa(new Rn(this.La(), a));
  this.Fz();
  this.pm = new $o(this.La());
};
z.g.Fz = function() {
  var a = this.L(".show-cross-poster");
  a && (this.qm = new au(this.La(), this.J, a, this.Vc, this.bp, !1), this.wa(this.qm));
};
z.g.H = function() {
  eu.t.H.call(this);
  (0,z.yj)(hA, {collectionId:this.Vc.get("id"), collectionSlug:this.nc});
  (0,z.Jj)(1, "collection");
  this.Ra && this.Ra.H();
  (0,z.Eg)(this.J).D("new-post", this.Os, this).D("embed-collection", this.MD, this);
};
z.g.F = function() {
  this.Ra && ((0,z.C)(this.Ra), this.Ra = null);
  eu.t.F.call(this);
};
z.g.ha = function() {
  this.Ra && this.Ra.ha();
  eu.t.ha.call(this);
};
z.g.Os = function() {
  (0,z.yj)(uz, {source:"collection"});
  var a = z.aC.ea({collectionSlug:this.nc});
  this.Tj.navigate(a);
  return!1;
};
z.g.MD = function() {
  (0,z.yj)(nA, {collectionSlug:this.nc});
  this.W.open({title:"Embed this Collection", bodyHtml:(0,z.H)(Jt, {collection:this.Vc.Pa(), recommendedPosts:this.fa.Pa().slice(0, 3), latestPosts:this.fa.Pa().slice(0, 3)}), type:z.Ki}).L("textarea").select();
};
z.g.mt = function(a) {
  a = a.split("/");
  return "trending" == a[2] ? "recommended" : "submissions" == a[2] ? "submissions" : "latest";
};
z.g.Po = function(a) {
  a = (0,z.Bb)(a, function(a) {
    return a.get("id");
  });
  (0,z.yj)(rz, {collectionSlug:this.nc, postIds:a});
  a = this.J.querySelector(".bucket-empty");
  var b = this.J.querySelector(".nav-tabs");
  b && a && ((0,z.Xa)(bd(b), "nav-tabs-hidden") && dd(b, "nav-tabs-hidden"), (0,z.Xa)(bd(a), "bucket-empty-hidden") || cd(a, "bucket-empty-hidden"));
};
z.g.Qo = function() {
  var a = this.J.querySelector(".bucket-empty"), b = this.J.querySelector(".bucket-posts"), c = this.J.querySelector(".nav-tabs");
  c && a && b && 0 === b.childElementCount && (this.Vc.get("virtuals.canAdminister") || cd(c, "nav-tabs-hidden"), dd(a, "bucket-empty-hidden"));
};
(0,z.p)(z.hu, z.Uh);
z.hu.prototype.Gh = function(a) {
  this.Lj = a;
};
z.hu.prototype.Si = function() {
  if (rj(this.$b)) {
    this.Qt = !0;
  } else {
    this.Qt = !1;
    var a = this.Lj.scrollTop, b = this.Lj.scrollHeight, c = Math.min(this.Lj.offsetHeight, (0,z.pd)(window).height);
    a + 3 * c > b && ju(this);
  }
};
(0,z.p)(z.ku, z.Sh);
z.ku.prototype.fa = null;
z.ku.prototype.Hg = null;
z.ku.prototype.Lj = null;
z.ku.prototype.Ht = null;
var LC = "add", MC = "remove";
z.g = z.ku.prototype;
z.g.Gh = function(a) {
  this.Lj = a;
  return this;
};
z.g.H = function() {
  this.Hg && fu(this.Hg, this.ba, this.fa);
  this.ne = new z.hu(this.da, this.fa, 10);
  this.ne.Gh(this.Lj);
  (0,window.setTimeout)(function() {
    this.ne && iu(this.ne);
  }.bind(this), 250);
};
z.g.ha = function() {
  (0,z.C)(this.ne);
  this.ne = null;
  this.Hg && (0,z.Eg)(this.Hg).clear("open-post");
};
z.g.F = function() {
  this.fa && (this.fa.xa("add", this.Po, this), this.fa.xa("remove", this.Qo, this), this.fa = null);
};
z.g.Po = function(a) {
  var b = this.Hg.querySelector(".bucket-posts");
  if (b) {
    for (var c = 0;c < a.length;c++) {
      var d = a[c], e = {posts:[d.Pa()]}, f;
      for (f in this.Ht) {
        e[f] = this.Ht[f];
      }
      d = this.fa.indexOf(d);
      e = (0,z.xd)((0,z.H)(so, e));
      (0,z.Cd)(b, e, d);
    }
  } else {
    (0,z.K)(Error("PostListHandler could not find a bucket element"));
  }
  this.ne && this.ne.Si();
  this.Q(LC, a, this);
};
z.g.Qo = function(a) {
  var b = this.Hg.querySelector('.post-item[data-post-id\x3d"' + a.get("id") + '"]');
  b && b.parentNode && (0,z.Dd)(b.parentNode);
  this.Q(MC, a, this);
};
(0,z.p)(ou, eu);
z.g = ou.prototype;
z.g.Th = null;
z.g.fa = null;
z.g.oc = function() {
  var a = this.sm.Of[this.nc] || null, b = this.Qc && !!this.sm.wb[this.Qc];
  return a && b ? (this.Vc = a, this.fa = this.sm.wb[this.Qc], this.lx(), null) : (0,z.r)((0,z.r)(this.en.get(this.path + "?posts\x3dtrue", {ma:!0}), this.Rc, this), this.lx, this);
};
z.g.vb = function() {
  var a = this.J.querySelector(".hero-actions");
  a && (this.Th = (0,z.Jo)(new z.Ko(a, this.Vc, Xn), {kb:!0}, "collection"), this.Th.H());
  ou.t.vb.call(this);
};
z.g.Ff = function(a) {
  this.Rc({value:a.collection, posts:a.posts, references:{User:{}}});
};
z.g.H = function() {
  ou.t.H.call(this);
  var a = {collectionSlug:this.nc, postIds:this.fa.Ia.concat().map(function(a) {
    return a.get("id");
  })};
  (0,z.yj)(rz, a);
  (0,z.Eg)(this.J).D("accept-story", this.eE, this).D("reject-story", this.JE, this);
};
z.g.ha = function() {
  (0,z.Hg)(this.J);
  ou.t.ha.call(this);
};
z.g.Fz = function() {
  var a = this.L(".show-cross-poster");
  a && (this.qm = new au(this.La(), this.J, a, this.Vc, this.fa, this.ji.al), this.ji.al ? (this.ji.al = !1, (0,z.Qm)(function() {
    this.wa(this.qm);
  }, this)) : this.wa(this.qm));
};
z.g.F = function() {
  (0,z.C)(this.Th);
  this.Th = null;
  ou.t.F.call(this);
};
z.g.Rc = function(a) {
  var b = (0,z.Wj)(a.value, a.references);
  this.Vc = (0,z.Uj)(this.sm, b);
  a = (0,z.Wj)(a.posts, a.references);
  this.fa = Sj(this.sm, this.nc, this.filterBy);
  this.fa.Oe(a);
  this.bp = this.fa;
};
z.g.lx = function() {
  var a = HC.ea({collectionSlug:this.nc}), a = {title:this.Vc.get("name"), collection:this.Vc.Pa(), feedPath:a, posts:this.fa.Pa(), filterBy:this.filterBy};
  this.J.innerHTML = (0,z.H)(du, a);
};
z.g.eE = function(a) {
  var b = a.value;
  b && this.pm ? (0,z.r)(dp(this.pm, b, this.nc, (0,z.gj)(this.Vc, "name"), null), function() {
    (0,z.yj)(lA, {postId:b, collectionId:this.Vc.get("id")});
    this.fa.Gk(b);
  }, this) : (a = hp(), (0,z.K)(a), this.W.error(a));
};
z.g.JE = function(a) {
  (a = a.value) && this.pm ? op(this.pm, a, this.Vc, this.fa) : (a = np(), (0,z.K)(a), this.W.error(a));
};
(0,z.p)(pu, Or);
pu.prototype.Ue = function() {
  this.W.error("This featured is currently disabled.");
};
(0,z.p)(qu, Or);
qu.prototype.Ue = function(a) {
  var b = {location:window.location.href}, c = a.target.getAttribute("data-login-source");
  c && (b.source = c);
  (0,z.yj)(aA, b);
  a = (0,window.encodeURIComponent)(a.value || window.location.pathname + window.location.search + window.location.hash);
  if ((0,z.G)("variants.auth_in_popup")) {
    var b = (window.location.origin || "http://" + window.location.host) + "/m/account/authenticate-twitter?refresh\x3d1\x26redirect\x3d" + a, c = Math.max(window.screenX + Math.round(window.outerWidth / 2 - 335), 0), d = Math.max(window.screenY + Math.round(window.outerHeight / 2 - 345), 0);
    if (b = window.open(b, "login", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d670,height\x3d690", "left\x3d" + c, "top\x3d" + d].join())) {
      b.focus();
      return;
    }
  }
  window.location = "/m/account/authenticate-twitter?redirect\x3d" + a;
};
(0,z.p)(ru, Or);
ru.prototype.Ue = function(a) {
  var b = window.location.pathname + window.location.search + window.location.hash, c = a.target.getAttribute("data-redirect") || b, d = this.Ja;
  null != a.target.getAttribute("data-requires-token") ? (0,z.t)((0,z.r)(this.ga.get("/m/token", {Td:!0, background:!0}), function(b) {
    a.target.setAttribute("data-redirect", c + "?token\x3d" + b.value);
    a.target.removeAttribute("data-requires-token");
    Qw(d, a.target);
  }), function(a) {
    (0,z.K)(a);
    window.location = "/m/signin?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(c);
  }) : Qw(d, a.target);
};
(0,z.p)(su, Or);
su.prototype.Ue = function(a) {
  var b = a.value, c = a.target.getAttribute("data-collection-id"), d = this.Z.Of[b] || null, b = "/me/subscriptions/collection/" + b, e, f, h, k = (0,z.Lc)(a.target, "active");
  k ? (f = "delete", h = tz, e = "An error occurred. Please try unfollowing the collection again.") : (f = "put", h = sz, e = "An error occurred. Please try following the collection again.");
  if (d) {
    d.set("virtuals.isSubscribed", !k);
    var l = d.get("metadata.followerCount");
    d.set("metadata.followerCount", l + (k ? -1 : 1));
  }
  (0,z.Jc)(a.target, "active", !k);
  (0,z.t)((0,z.r)(this.ga.send(f, b, {}, {ma:!0}), function() {
    (0,z.yj)(h, {collectionId:c});
  }, this), function(b) {
    d && d.set("virtuals.isSubscribed", k);
    (0,z.Jc)(a.target, "active", k);
    this.Qa.H(e, "error");
    (0,z.K)(b);
  }, this);
};
(0,z.p)(z.vu, z.jj);
z.g = z.vu.prototype;
z.g.cs = null;
z.g.Ax = null;
z.g.Pr = 0;
z.g.iy = window.Infinity;
z.g.vg = function(a, b) {
  this.cs = a;
  this.Ax = b || null;
  (0,z.wu)(this);
  return this;
};
z.g.If = (0,z.n)(74);
z.g.add = function() {
  throw Error("Not implemented");
};
z.g.bh = function() {
  throw Error("Not implemented");
};
z.g.Oe = function() {
  throw Error("Not implemented");
};
z.g.remove = function() {
  throw Error("Not implemented");
};
z.g.Gk = function() {
  throw Error("Not implemented");
};
z.g.update = function() {
  throw Error("Not implemented");
};
z.g.F = function() {
  this.$b.xa("add", this.Gy, this);
  this.$b.xa("remove", this.Ky, this);
  this.$b.xa("change", this.Iy, this);
  this.Ia = this.$b = null;
  z.vu.t.F.call(this);
};
z.g.Xq = function(a, b) {
  this.$b.Xq(a, b);
  return this;
};
z.g.Am = function(a) {
  return this.$b.Am(a);
};
z.g.Gy = function() {
  xu(this);
};
z.g.Ky = function() {
  xu(this);
};
z.g.Iy = function(a) {
  var b = this.Ia;
  xu(this);
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d].Tm;
    yu(e, this.Ia) && yu(e, b) && c.push(a[d]);
  }
  c.length && this.Q("change", c);
};
(0,z.p)(Cu, z.jn);
z.g = Cu.prototype;
z.g.pl = !1;
z.g.Dg = null;
z.g.Tg = null;
z.g.X = null;
z.g.Lp = null;
z.g.Mj = null;
z.g.Fp = "";
z.g.rx = "";
z.g.fF = "";
z.g.eF = "";
z.g.tz = !1;
z.g.Og = null;
z.g.ty = !1;
z.g.bd = function(a) {
  this.Fp = a;
  return this;
};
z.g.Zi = function(a) {
  this.rx = a;
  return this;
};
z.g.Mk = function(a) {
  this.Og = a;
  return this;
};
z.g.ff = function(a) {
  this.X = window.document.createElement("div");
  this.X.className = "list-choice";
  var b = {title:this.Fp, description:this.rx, pB:this.fF, oB:this.eF, cR:this.tz, BJ:!!this.Mj, Wm:this.ty};
  this.Lp = (0,z.Jo)(new z.Ko(this.X, this.aa, z.zu), b, "items");
  this.Og && this.Lp.Mk(this.Og);
  this.Lp.H();
  a = a || this.Dg.parentNode;
  b = "uid" + (0,z.pa)(this.Dg);
  (0,z.tc)((0,z.Pw)(this.Ja, this.Dg, '\x3cdiv id\x3d"' + b + '"\x3e\x3c/div\x3e', "list-choice-popover", a), this.close, this);
  window.document.getElementById(b).appendChild(this.X);
  a = (0,z.pd)(window).height / 2 < (0,z.sg)(this.Dg).top ? "bottom" : "top";
  (0,z.Mw)(this.Ja, a, this.Dg);
  a = this.X.querySelector(".list-choice-items");
  (0,z.Rw)(this.Ja, a);
  this.Mj && (a = this.X.querySelector(".input-text-collection-search"), this.Mj.ta = a, this.Mj.C("onSearch", this.pH, this), this.wa(this.Mj));
  (0,z.Eg)(this.X).D("pick", this.aH, this);
  (0,z.w)((0,z.Wm)(this.ba.ib), "list-choice-open");
  this.H();
};
z.g.open = function() {
  var a = this.X;
  window.setTimeout(function() {
    var b = a.querySelector(".list-choice-items");
    b && b.focus();
  }.bind(this), 10);
  return this.Tg = new z.nc;
};
z.g.close = function() {
  (0,z.x)((0,z.Wm)(this.ba.ib), "list-choice-open");
  this.Ja.remove();
  this.Tg && !this.Tg.Xd && this.Tg.cancel();
  this.Tg = null;
  this.pl && window.setTimeout(this.Eb.bind(this), 1E3);
};
z.g.F = function() {
  this.Tg && this.close();
  (0,z.C)(this.Lp);
  (0,z.C)(this.aa);
  (0,z.Hg)(this.X);
  (0,z.Dd)(this.X);
  Cu.t.F.call(this);
};
z.g.aH = function(a) {
  this.Tg.Ba(a.value);
};
z.g.pH = function(a) {
  this.X.querySelector(".list-choice-items").innerHTML = a.value.length || "" === a.L ? (0,z.H)(Au, {items:a.value, Wm:!1}) : (0,z.H)(Bu, {zv:a.zv, L:a.L});
  a = this.Ja.V().querySelector(".list-choice-items");
  a.style.height = "auto";
  (0,z.Rw)(this.Ja, a);
};
z.g = Eu.prototype;
z.g.rd = function() {
  this.W = this.da.get("dialog");
};
z.g.at = function() {
  this.ci && this.ci.close();
  this.ho && this.tx();
  this.ho = !0;
};
z.g.FH = function(a) {
  a.target.select();
};
z.g.$H = function(a) {
  a.value && (0,z.Fj)(a.value);
  if (!a.Im) {
    var b = a.target;
    if (b.href) {
      if (b.hostname == window.location.hostname) {
        var c = b.pathname;
        "/" === b.pathname.charAt(0) && (c = c.substr(1));
        b = {};
        if (a = a.target.getAttribute("data-source")) {
          b.source = a;
        }
        this.ba.navigate(c, b);
      } else {
        window.location = b.href;
      }
    }
  }
};
z.g.tx = function() {
  (0,z.Dd)(window.document.querySelector(".overlay-interstitial"));
};
z.g.Cz = function(a) {
  var b = a.value;
  if (!this.zt[b]) {
    var c = "add-to-reading-list" == a.ie;
    a = "/p/" + a.value + "/bookmarks";
    Iu(this, b, c);
    a = c ? this.ga.put(a, null, {Td:!0}) : this.ga.Dd(a, {Td:!0});
    this.zt[b] = a;
    (0,z.tc)(a, function() {
      delete this.zt[b];
    }, this);
    (0,z.r)(a, function() {
      var a = c ? Dz : Ez, e = this.Z.Ob(b), f = {postId:b};
      e && (f.readingTime = e.get("virtuals.readingTime"));
      (0,z.yj)(a, f);
    }, this);
    (0,z.t)(a, function() {
      this.Qa.H("Sorry, we’re having trouble updating your bookmarks. Please try again.", "error");
      Iu(this, b, !c);
    }, this);
  }
};
z.g.GH = function(a) {
  (0,z.Ju)(this, a.value || "");
};
z.g.RE = function(a) {
  var b = a.target.getAttribute("data-action-type"), c = a.target.getAttribute("data-action-id"), d = a.target.getAttribute("data-action-name");
  (0,z.t)((0,z.r)(this.ga.post("/_/admin/blacklist", {isBlacklisted:"true", type:b, id:c}, {ma:!0, Ce:0}), function() {
    this.Qa.H(ms({name:d}), "success");
  }, this), function() {
    this.Qa.H(ns({name:d}), "error");
  });
};
Mu.prototype.Zs = function() {
  Ou(this);
};
z.g = Pu.prototype;
z.g.load = function(a) {
  a = Su(a);
  if (this.df(a)) {
    return(0,z.Ec)(this.nf[a]);
  }
  this.nf[a] || (this.nf[a] = new z.nc, this.Dj[a] = 0, Tu(this, a));
  return this.nf[a].Ad();
};
z.g.df = function(a) {
  a = Su(a);
  a = this.nf[a];
  return!!a && !!a.url;
};
z.g.Qm = function(a) {
  a = Su(a);
  a = this.nf[a];
  return!!a && !a.url;
};
z.g.Nl = function(a) {
  var b = a.target || a.currentTarget;
  a = b.src;
  Uu(this, a);
  if (this.Qm(a)) {
    var c = this.nf[a], b = {url:a, width:b.width, height:b.height};
    this.nf[a] = b;
    delete this.Dj[a];
    c.Ba(b);
  } else {
    (0,z.K)("finished loading an image, but we could not find the deferred. DOh!");
  }
};
z.g.Qg = function(a) {
  a = (a.target || a.currentTarget).src;
  Uu(this, a);
  if (2 > this.Dj[a]) {
    (0,z.K)("Failed loading image " + a + ", retrying."), this.Dj[a] += 1, Tu(this, a);
  } else {
    if (this.Qm(a)) {
      var b = this.nf[a];
      delete this.nf[a];
      delete this.Dj[a];
      b.Wd(a);
    } else {
      (0,z.K)("error encountered while loading an image, but we could not find the deferred. DOh!");
    }
  }
};
z.g.fi = function(a, b) {
  b && (this.cm = {});
};
(0,z.p)(z.Vu, z.Ko);
var Wu = (0,z.hh)();
z.g = z.Vu.prototype;
z.g.getData = (0,z.n)(112);
z.g.Jq = function(a) {
  if (this.Hd() && a) {
    a = this.aa.Ia.concat();
    for (var b = 0;b < a.length;b++) {
      var c = Xu(this, a[b]);
      this.Q("after-draw", a[b], c);
    }
  }
};
z.g.Iv = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    var d = b.indexOf(a[c]), d = Xu(this, a[c], d);
    this.Q("after-draw", a[c], d);
  }
};
z.g.Jv = function(a) {
  var b = window.document.getElementById(this.jo + (0,z.pa)(a));
  this.Q("before-clear", a, b);
  this.Q("destroy", a, b);
  (0,z.Dd)(b);
};
z.g.Ck = function(a) {
  for (var b = 0;b < a.length;b++) {
    var c = a[b].Tm, d = window.document.getElementById(this.jo + (0,z.pa)(c));
    this.Q("before-clear", c, d);
    d.innerHTML = (0,z.pq)(this, c);
    this.Q("after-draw", c, d);
  }
};
Yu.prototype.Zg = null;
z.gp = "success";
z.g = Yu.prototype;
z.g.H = function(a, b) {
  var c = "string" == typeof b ? {type:b} : b || {}, d = this.ba.ib.L(".cover"), e = "butter-bar active ";
  c.type && (e += c.type + " ");
  d || (e += "butter-bar-center ");
  this.Qa.className = e;
  this.Qa.innerHTML = Rq({tB:a, XJ:c.Tk, qv:c.qv, bw:!!c.bw});
  this.Zg && (0,window.clearTimeout)(this.Zg);
  c.qv ? this.ba.C(Um, this.ha, this) : -1 != c.uw && (this.Zg = (0,window.setTimeout)(this.ha.bind(this), c.uw || 5E3));
  this.Ha.Q("activate", this);
  return this.$G = new z.nc;
};
z.g.ha = function() {
  (0,z.x)(this.Qa, "active");
  this.ba.xa(Um, this.ha, this);
  this.Ha.Q("deactivate", this);
  this.Ha.clear();
  this.Zg = null;
};
z.g.DD = function() {
  this.Ha.Q("dismiss", this);
  this.ha();
};
z.g.lH = function() {
  this.ba.reload();
  this.ha();
};
z.g.QG = function() {
  this.$G.Ba(null);
};
z.g.iH = function() {
  this.Ha.Q("action", this);
};
var NC = {Iw:1, En:2, Aw:3, $isProtoEnum:!0};
N("h", "", function(a, b, c) {
  b = a.followUp.creatorId == c.currentUser.userId && !a.tk;
  c = "";
  var d = '\x3cdiv class\x3d"follow-up-content"\x3e' + (a.tk ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '" rel\x3d"nofollow"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.O)(a.followUp.title) : (0,z.O)(a.followUp.mediaResource.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e', e;
  if (a.followUp && a.followUp.description) {
    e = (0,z.O)(a.followUp.description);
  } else {
    e = a.followUp.mediaResource.description;
    var f = 140, h = !0;
    e = String(e);
    if (!(e.length <= f)) {
      h && (3 < f ? f -= 3 : h = !1);
      var k = e.charAt(f - 1);
      if (k = 55296 <= k && 56319 >= k) {
        k = e.charAt(f), k = 56320 <= k && 57343 >= k;
      }
      k && (f -= 1);
      e = e.substring(0, f);
      h && (e += "...");
    }
    e = (0,z.O)(e);
  }
  return a = c + (d + e + "\x3c/p\x3e" + (a.tk ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e\x3cspan class\x3d"follow-up-footer-item"\x3e' + (a.followUp.creatorId != a.Pq ? "via " + ao({user:a.followUp.creator, Rb:"follow-up-footer-link"}) + " " : "") + 'on \x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '" class\x3d"follow-up-footer-link" rel\x3d"nofollow"\x3e' + (0,z.O)(a.followUp.mediaResource.domain) + (b ? "" : " \x26rarr;") + "\x3c/a\x3e\x3c/span\x3e" + 
  (b ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link follow-up-delete" data-action\x3d"delete-follow-up" data-action-value\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e");
});
N("h", "MediaResourceMediumPost", function(a, b, c) {
  b = a.followUp.mediaResource.mediumPost.post;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content follow-up-type-medium-post"\x3e' + (a.tk ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.O)(a.followUp.title) : (0,z.O)(b.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? 
  (0,z.O)(a.followUp.description) : (0,z.O)(b.virtuals.draftSnippet)) + "\x3c/p\x3e" + (a.tk ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e' + (a.followUp.creatorId != a.Pq ? '\x3cspan class\x3d"follow-up-footer-item follow-up-author"\x3evia ' + ao({user:a.followUp.creator, Rb:"follow-up-footer-link"}) + "\x3c/span\x3e" : "") + (a.followUp.creatorId != c.currentUser.userId || a.tk ? "" : '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link" data-action\x3d"delete-follow-up" data-action-value\x3d"' + 
  (0,z.P)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e");
});
(0,z.p)(z.cv, Qf);
Rf(z.cv, !0, {name:"FollowUp", table:"followUp", ab:"postId", lb:new zf("/item/:followUpId"), NI:864E5, ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "creatorId-index";
}}, visibility:{g:function() {
  return NC;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
  return "mediaResourceId-index";
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}}}});
z.g = z.cv.prototype;
z.g.oa = (0,z.n)(42);
z.g.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.g.qq = function() {
  return this.w("mediaResourceId");
};
z.g.Nk = function(a) {
  return(0,z.E)(this, "mediaResourceId", a);
};
z.g.Hb = function() {
  return this.w("title");
};
z.g.bd = function(a) {
  return(0,z.E)(this, "title", a);
};
z.g.Zi = function(a) {
  return(0,z.E)(this, "description", a);
};
(0,z.p)(z.dv, Qf);
Rf(z.dv, !0, {name:"FollowUpOrder", table:"followUpOrder", ab:"postId", lb:new zf("/order"), NI:864E5, ca:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}}, followUps:{g:function() {
  return String;
}, h:function() {
  return!0;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}}, version:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, o:function() {
  return!1;
}, s:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}}}});
z.dv.prototype.oa = (0,z.n)(41);
z.dv.prototype.ad = function(a) {
  return(0,z.E)(this, "postId", a);
};
z.dv.prototype.IA = function() {
  return this.w("followUps");
};
(0,z.p)(Zv, z.Sh);
z.g = Zv.prototype;
z.g.F = function() {
  for (var a in this.Pj) {
    this.Pj[a].cancel();
  }
  Zv.t.F.call(this);
};
z.g.load = function() {
  return(0,z.t)((0,z.r)((0,z.r)(this.ga.get("/p/" + this.U + "/follow-ups", {ma:!0, background:!0}), this.gH, this), function() {
    this.ll = !0;
  }, this), z.K);
};
z.g.df = function() {
  return this.ll;
};
z.g.IA = function() {
  return this.XD;
};
z.g.bF = function(a) {
  return 3 !== a.get("visibility");
};
z.g.gH = function(a) {
  for (var b = a.value, c = 0;c < b.length;c++) {
    bw(this, b[c], a.references);
  }
};
(0,z.p)(fw, z.B);
z.g = fw.prototype;
z.g.$f = null;
z.g.ql = null;
z.g.Hc = null;
z.g.tl = null;
z.g.Xf = !1;
z.g.F = function() {
  this.Zw && this.Xf && this.Wr();
  this.Hc && (this.Hc.xa("add", this.fl, this), this.Hc.xa("remove", this.fl, this));
  (0,z.C)(this.Ua);
  (0,z.Hg)(this.Aa);
  (0,z.Dd)(this.Aa);
  this.Aa = null;
  (0,z.C)(this.tl);
  this.tl = null;
  fw.t.F.call(this);
};
z.g.rd = function(a) {
  this.$f = a;
  return(0,z.r)(this.Ua.wa(this.aa.load()), this.aF, this);
};
z.g.jl = function() {
  var a = window.document.createElement("div");
  a.className = "follow-ups-container";
  return a;
};
z.g.kK = function() {
  "#follow-up-editor" == window.document.location.hash && (this.Ry(), (0,z.Yr)(this.ba, ""), this.Da(".follow-up-new").scrollIntoView(!0));
};
z.g.aF = function() {
  this.Aa.innerHTML = (0,z.H)($u, {OI:this.Zw, post:this.za.Pa()});
  this.Hc = this.aa.IA();
  this.Hc.C("add", this.fl, this);
  this.Hc.C("remove", this.fl, this);
  this.fl();
  var a = this.Da(".follow-ups-list"), a = new z.Vu(a, this.Hc, av);
  a.As = "follow-up";
  this.tl = (0,z.Jo)(a, {canAdminister:this.pD, Pq:this.hi, visibility:NC}, "followUp");
  this.tl.C("after-draw", this.zF, this);
  this.tl.H();
  this.$f.appendChild(this.Aa);
  this.Xf = !0;
};
z.g.zF = function(a, b) {
  b.setAttribute("data-follow-up-id", (0,z.gj)(a, "followUpId"));
};
z.g.fl = function() {
  (0,z.Jc)(this.Aa, "follow-ups-empty", !this.Hc.count());
};
z.g.Da = function(a) {
  return this.Aa.querySelector(a);
};
z.g.KF = function(a) {
  if ((a = (0,z.Od)(a.target, null, "follow-up-link")) && a.href) {
    a = (0,z.Od)(a, null, "follow-up").getAttribute("data-follow-up-id");
    var b = $v(this.aa, a);
    iw(this, Wz, {followUpId:a, visibility:b.get("visibility"), mediaResourceType:b.get("mediaResource").mediaResourceType});
  }
};
z.g.Ry = function() {
  (0,z.r)(this.Ua.wa(this.da.load("FollowUpEditor")), function(a) {
    (0,z.w)(this.Aa, "follow-ups-container-active");
    (0,z.w)(this.Da(".follow-up-new"), "follow-up-editor-active");
    var b = this.Da(".follow-up-new-editor");
    this.ql = (new a(this.da, this.hi, b)).ff();
    this.ql.C("save", this.wD, this);
    this.ql.C("cancel", this.Wr, this);
    iw(this, Sz);
  }, this);
};
z.g.QF = function(a) {
  this.W.confirm("Are you sure you want to delete this link?").C(z.qB, this.BD.bind(this, a.value));
};
z.g.BD = function(a) {
  (0,z.t)((0,z.r)(this.Ua.wa(cw(this.aa, a)), function() {
    iw(this, Uz, {followUpId:a});
  }, this), (0,z.cp)(this.W, "An error occurred, and we were unable to delete your link.", !0));
};
z.g.GG = function(a) {
  var b = a.target.parentNode.getAttribute("data-follow-up-id");
  a = (0,window.parseInt)(a.value, 10);
  var c = null, d;
  for (d in NC) {
    if (a == NC[d]) {
      c = NC[d];
      break;
    }
  }
  jw(this, b, c);
};
z.g.aE = function(a, b) {
  var c = $v(this.aa, a).get("visibility"), d = null;
  2 == c ? d = "The link is now public" : 1 == c ? d = "The link is now private" : 3 == c && (d = "The link is dismissed");
  (0,z.r)(this.vi.H(d, {type:z.gp, Tk:!0}), function() {
    jw(this, a, b);
  }, this);
  iw(this, Vz, {followUpId:a, visibility:c});
};
z.g.bE = function(a) {
  a instanceof z.Hc || this.vi.H("An error occurred, and we could not change the link’s visibility.", "error");
};
z.g.wD = function(a, b, c) {
  this.Wr();
  (0,z.t)((0,z.r)(this.Ua.wa(aw(this.aa, {title:a, description:b, mediaResourceId:c})), function(a) {
    iw(this, Tz, {followUpId:a.value.followUpId});
  }, this), (0,z.cp)(this.W, "An error occurred, and we were unable to create your link.", !0));
};
z.g.Wr = function() {
  (0,z.C)(this.ql);
  this.ql = null;
  (0,z.x)(this.Aa, "follow-ups-container-active");
  (0,z.x)(this.Da(".follow-up-new"), "follow-up-editor-active");
};
(0,z.p)(kw, z.B);
kw.prototype.Xj = function(a, b) {
  return new fw(this.da, a, b);
};
(0,z.p)(lw, z.Sh);
var OC = "https://" + window.document.location.hostname + "/m/facebook/close";
nw.prototype.qn = function(a, b, c, d, e, f) {
  (0,z.G)("variants.can_share_to_facebook") && (a = (0,z.Ea)(a), c = (0,z.Ea)(c), a = (0,z.H)(Gi, {url:window.location.href, title:a, caption:"by " + b, description:c, imageId:d, FK:OC}), this.To(a), (0,z.yj)(z.Bz, {postId:e, type:f, dest:"facebook"}));
};
nw.prototype.To = function(a) {
  var b = window.screen.height, c = Math.round(window.screen.width / 2 - 275), b = 320 < b ? Math.round(b / 2 - 160) : 0;
  (a = window.open(a, "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d320", "left\x3d" + c, "top\x3d" + b].join())) && a.focus();
};
pw.prototype.qn = function(a, b, c, d, e) {
  e = e || [];
  a = {content:a, username:b, url:window.location.href, collaborators:e};
  a = e.length ? (0,z.H)(ow, a) : (0,z.qw)(ow, a);
  this.To(a);
  (0,z.yj)(z.Bz, {postId:c, type:d, dest:"twitter"});
};
pw.prototype.To = function(a) {
  var b = window.screen.height, c = Math.round(window.screen.width / 2 - 275), b = 420 < b ? Math.round(b / 2 - 210) : 0;
  (a = window.open("https://twitter.com/intent/tweet?text\x3d" + (0,window.encodeURIComponent)(a), "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d420", "left\x3d" + c, "top\x3d" + b].join())) && a.focus();
};
(0,z.p)(rw, z.Sh);
var tw = 6E4, sw = "active";
rw.prototype.F = function() {
  (0,z.dg)(this.sa);
  this.sa.length = 0;
  rw.t.F.call(this);
};
rw.prototype.Pg = function() {
  uw(this, sw);
  this.jG();
};
rw.prototype.Fy = function() {
  uw(this, "idle");
};
var ww = 0, PC = {};
z.g = vw.prototype;
z.g.get = function(a, b) {
  return this.send("get", a, null, b);
};
z.g.Dd = function(a, b) {
  return this.send("delete", a, null, b);
};
z.g.put = function(a, b, c) {
  return this.send("put", a, b, c);
};
z.g.post = function(a, b, c) {
  return this.send("post", a, b, c);
};
z.g.send = function(a, b, c, d) {
  function e() {
    l && (l.state = 2, yw(this));
    this.Ha.Q("send", !!l);
    return(0,z.r)((0,z.t)(yh(a, b, String(k), f), function(a) {
      if (h < f.Ce && a instanceof Ah && a.status && 500 <= a.status) {
        return h++, PC;
      }
    }, this), function(a) {
      if (a === PC) {
        a = h;
        a = 1 == a ? 200 * Math.round(Math.random()) : 2 == a ? 200 * Math.round(3 * Math.random()) : Math.round(Math.random() * (Math.pow(2, a) - 1) * 200);
        l && (l.state = 1, l.time = a, yw(this));
        var b = (0,z.Ec)(null), c = new z.nc;
        window.setTimeout(c.Ba.bind(c), a);
        return(0,z.r)((0,z.vc)(b, c), e, this);
      }
    }, this);
  }
  a = a.toUpperCase();
  var f = this.LA(d || null), h = 0, k = c;
  k && "object" == typeof k && (f.Eq && (k = z.Pk.Mc(k)), k = f.uv ? window.JSON.stringify(k) : zw(k));
  c = e.call(this);
  if (!f.background) {
    var l = {pc:c, state:2, time:0};
    this.Yo.push(l);
    yw(this);
    (0,z.tc)(c, function() {
      (0,z.Za)(this.Yo, l);
      yw(this);
    }, this);
  }
  (0,z.tc)(c, function(a) {
    if (a instanceof Error) {
      this.Ha.Q("httperror", a.status || 0, f, a);
    } else {
      if (a) {
        var b = a.getResponseHeader("X-Obvious-DbInfo") || "";
        this.Ha.Q("successresponse", a.responseText, f, b);
      } else {
        throw a = Error("Unexpected error : 511"), this.Ha.Q("httperror", 511, f, a), a;
      }
    }
  }, this);
  f.Td ? ((0,z.t)(c, this.vE.bind(this, b)), (0,z.r)(c, this.Hx.bind(this, b))) : f.WB || (0,z.r)(c, function(a) {
    return a.responseText;
  });
  return(0,z.t)(c, function(a) {
    (0,z.na)(a) && oh(a, "requestUrl", b);
    throw a;
  });
};
z.g.uq = function() {
  return this.$a;
};
z.g.LA = function(a) {
  a = a || {};
  var b = a.headers || {};
  b["X-XSRF-Token"] = "1";
  if (a.uv || a.ma) {
    b["Content-Type"] = "application/json";
  }
  if (a.Td || a.ma) {
    b.Accept = "application/json";
  }
  return{headers:b, vw:a.vw || 3E4, Cv:a.Cv, Eq:a.Eq, uv:a.uv || a.ma, Td:a.Td || a.ma, WB:!!a.WB, Ce:"undefined" == typeof a.Ce ? 10 : a.Ce, background:!!a.background};
};
z.g.Hx = function(a, b) {
  var c = (0,z.xw)(b.responseText), d;
  try {
    d = window.JSON.parse(c);
  } catch (e) {
    throw d = Error("Invalid JSON response from " + a + ' : "' + e.message + '"'), 100 < c.length && (c = c.substring(0, 97) + "..."), oh(d, "responseText", c), d;
  }
  if ("success" in d && ("payload" in d || "error" in d)) {
    var f = d.v, c = d.b, f = !!(this.Nz && f && f > this.Nz), c = !(!this.yr || !c || this.yr == c);
    if (f || c) {
      c && this.Ha.Q("buildchange"), f && this.Ha.Q("versionupdate");
    }
    if (d.success && d.payload) {
      return d.payload;
    }
    if (!d.success && d.error) {
      throw c = new Bh(b.status, a, b), (0,z.na)(d.error) ? (0,z.ob)(c, d.error) : c.message += ": " + d.error, d.errorInfo && (c.errorInfo = d.errorInfo), c;
    }
  }
  return d;
};
z.g.vE = function(a, b) {
  b instanceof Bh && b.Wk && b.Wk.responseText && this.Hx(a, b.Wk);
  throw b;
};
N("i", "", function(a) {
  a = a || {};
  var b = '\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons ' + (a.fQ ? "icons-logo" : "icons-error") + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3e';
  if (a.message) {
    b += (0,z.pi)(a.message);
  } else {
    switch(a.errorCode) {
      case 400:
        b += "We didn’t understand your request.";
        break;
      case 401:
        b += "This page requires authentication.";
        break;
      case 403:
        b += "You do not have access to this page.";
        break;
      case 404:
        b += "Sorry, but nothing exists here.";
        break;
      case 410:
        b += "Sorry, this item has been removed.";
        break;
      default:
        b += "Yikes! Something happened. We’ll fix it as soon as we can.";
    }
  }
  return b + '\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eFind something \x3ca href\x3d"/"\x3einteresting to read\x3c/a\x3e.\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
N("i", "Blacklisted", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThis page was in violation of the  \x3ca href\x3d"https://medium.com/help-center/30e5502c4eb4"\x3eMedium Rules\x3c/a\x3e\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
N("i", "RemovedByUser", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThe author deleted this Medium post\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
(0,z.p)(z.Bw, z.B);
z.g = z.Bw.prototype;
z.g.ho = !1;
z.g.mi = window.performance && window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : window.OB_startTime || (0,z.hh)();
z.g.X = null;
z.g.at = function() {
  this.ox.length = 0;
  this.mi = (0,z.hh)();
};
z.g.cG = function(a, b, c) {
  var d = (0,z.hh)() - this.mi;
  c instanceof z.Hc || c instanceof js || ((0,z.Fj)("nav." + (b ? "success" : "failure")), (0,z.Gj)("client.nav.duration", d), b || (c ? ((0,z.ph)(c), 401 == c.status ? this.W.open({title:"Uh oh!", bodyHtml:(0,z.H)(Aw), type:"signin", redirectUrl:a}) : 404 == c.status ? this.W.error("Ooops, that page does not exist anymore.  Sorry.") : this.W.error("Something went wrong. Try refreshing the page and trying again.")) : (this.W.error("Something went wrong. Try refreshing the page and trying again."), 
  (0,z.ph)(Error("Unknown navigation error")))), this.ho = !0);
};
z.g.Qg = function(a) {
  if ("IMG" == a.target.tagName) {
    var b = a.target.GI || 0;
    (0,z.yj)(bA, {src:a.target.src, className:a.target.className, attempts:b});
    3 > b && (a.target.src = a.target.src, a.target.GI = b + 1);
  }
};
z.g.FG = function() {
};
z.g.yG = function(a, b, c) {
  this.ox.push(c);
};
z.g.$s = function(a, b, c) {
  c instanceof Ch ? (0,z.Fj)(eA) : c instanceof Bh ? (0,z.Fj)(cA) : (0,z.Fj)(dA);
};
z.g.Oj = (0,z.n)(91);
z.g.F = function() {
  (0,z.Dd)(this.X);
  z.Bw.t.F.call(this);
};
var Ew = window.document.referrer;
Dw.prototype.Tn = null;
Dw.prototype.xs = !1;
Dw.prototype.XH = function(a, b) {
  this.xs = !0;
  var c = "";
  b && b.source && (c = b.source);
  this.Xg.push(ub(a, c));
};
Dw.prototype.RD = function(a, b) {
  this.xs = !1;
  var c = Wa(this.Xg, function(b) {
    return a in b;
  }), c = this.Xg.splice(c, 1)[0];
  if (b) {
    var d = this.Xg.indexOf(this.cy);
    -1 !== d && this.Xg.splice(d, 1);
    this.cy = c;
    this.Xg.push(c);
    this.Tn && (this.Dt = this.Tn);
    this.Tn = a;
  }
};
z.g = Fw.prototype;
z.g.refresh = function() {
  var a = this.so || 2 == this.ga.uq();
  (0,z.Jc)(window.document.body, "app-loading", !!a);
};
z.g.wa = function(a) {
  this.dm();
  (0,z.tc)(a, this.bs, this);
};
z.g.dm = function() {
  this.so++;
  this.refresh();
};
z.g.bs = function() {
  this.so--;
  this.refresh();
};
z.g.QD = function() {
  this.so = 0;
  this.refresh();
};
(0,z.p)(z.Gw, z.Uh);
var Iw = 1E3;
z.Gw.prototype.H = function() {
  z.Gw.t.H.call(this);
  this.ic = new z.nc;
  (0,z.r)(this.ic, this.Eb, this);
  this.KD.forEach(function(a) {
    this.qa(a, this.yD, this.lE);
    this.qa(a, this.hD, this.fE);
  }, this);
};
z.Gw.prototype.fE = function() {
  this.fz.cancel();
};
z.Gw.prototype.vH = function() {
  this.ic.Ba(!0);
};
z.Gw.prototype.lE = function(a) {
  var b = a.currentTarget;
  (a = a.relatedTarget) && (0,z.Jd)(b, a) || this.fz();
};
z.g = z.Jw.prototype;
z.g.enable = function() {
  this.Ai || z.Uy || (this.Zr = (0,z.J)(window.document, "mouseover", this.Fx, this), this.Yr = (0,z.J)(window.document, z.Ny, this.Fx, this), this.J = window.document.createElement("div"), window.document.body.appendChild(this.J), this.Ai = !0);
};
z.g.disable = (0,z.n)(65);
z.g.L = function(a) {
  return this.J.querySelector(a);
};
z.g.bn = function(a) {
  return this.J ? bb(this.J.querySelectorAll(a)) : [];
};
z.g.ff = function(a) {
  return'\x3cdiv class\x3d"tooltip-inner"\x3e' + (a.RJ ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.Du)) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.Du) + "\x3c/a\x3e" : (0,z.O)(a.Du)) + '\x3c/div\x3e\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e';
};
z.g.Fx = function(a) {
  var b;
  a: {
    for (b = a.target;b && b !== this.Jh;b = b.parentNode) {
      if (b.getAttribute && b.getAttribute("data-tooltip")) {
        break a;
      }
    }
    b = null;
  }
  if (b) {
    a.preventDefault();
    var c = b.getAttribute("data-tooltip-position") || "top", d = b.getAttribute("data-tooltip"), e = "link" === b.getAttribute("data-tooltip-type");
    d != this.Kr && (this.J.innerHTML = this.ff({Du:d, RJ:e}), this.Kr = d);
    this.Jh = b;
    (0,z.Mw)(this, c, b);
    (0,z.Jc)(this.J, "tooltip-link", e);
    (0,z.dg)(this.hf);
    (0,z.C)(this.He);
    this.He = new z.Gw(a.type, [this.J, this.Jh]);
    this.He.H();
    (0,z.r)(this.He.ic.Ad(), this.remove, this);
  }
};
z.g.remove = function() {
  var a = this.J;
  (0,z.Lc)(a, this.Rj) && ((0,z.C)(this.He), this.He = null, (0,z.x)(a, this.Rj), (0,z.dg)(this.hf), this.hf = (0,z.J)(a, z.Un, function() {
    a.style.visibility = "hidden";
    (0,z.dg)(this.hf);
  }, this), this.Jh = null);
};
(0,z.p)(z.Ow, z.Jw);
z.g = z.Ow.prototype;
z.g.V = function() {
  return this.J;
};
z.g.enable = function() {
  this.Ai || (this.Ai = !0);
};
z.g.disable = (0,z.n)(64);
z.g.iE = function(a) {
  (0,z.Jd)(this.J, a.target) || this.remove();
};
z.g.QE = function(a) {
  (0,z.Jd)(this.J, a.target) || this.remove();
};
z.g.Jx = function() {
  var a = this.Jh;
  this.remove();
  Qw(this, a);
};
z.g.remove = function() {
  var a = this.J;
  a && (0,z.Lc)(a, this.Rj) && ((0,z.x)(a, this.Rj), (0,z.dg)(this.hf), this.hf = (0,z.J)(a, z.Un, function() {
    a.style.visibility = "hidden";
    (0,z.dg)(this.hf);
  }, this), (0,z.dg)(this.Yn), (0,z.dg)(this.Zn), this.Zn = this.Yn = this.Jh = null, this.ra.xa("resize-end", this.Jx, this), this.ic.Ba(!0), this.ic = null);
};
z.g.createElement = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = "popover popover-" + a;
  d.innerHTML = zo({jA:b, Dv:c || ""});
  return d;
};
var QC;
z.jx = !z.D || $c(9);
QC = z.D && !(0,z.Xc)("9");
!z.Td || (0,z.Xc)("528");
z.Le && (0,z.Xc)("1.9b") || z.D && (0,z.Xc)("8") || z.Me && (0,z.Xc)("9.5") || z.Td && (0,z.Xc)("528");
z.Le && !(0,z.Xc)("8") || z.D && (0,z.Xc)("9");
z.Sw.prototype.F = function() {
};
z.Sw.prototype.Eb = function() {
};
z.Sw.prototype.stopPropagation = function() {
  this.Ui = !0;
};
z.Sw.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.aC = !1;
};
(0,z.p)(z.Tw, z.Sw);
z.g = z.Tw.prototype;
z.g.Lm = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (z.Le) {
      var e;
      a: {
        try {
          yf(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = z.Td || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = z.Td || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.Te = a;
  a.defaultPrevented && this.preventDefault();
};
z.g.stopPropagation = function() {
  z.Tw.t.stopPropagation.call(this);
  this.Te.stopPropagation ? this.Te.stopPropagation() : this.Te.cancelBubble = !0;
};
z.g.preventDefault = function() {
  z.Tw.t.preventDefault.call(this);
  var a = this.Te;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, QC) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
z.g.$u = (0,z.n)(22);
z.g.F = function() {
};
var Xw;
z.Vw = "closure_listenable_" + (1E6 * Math.random() | 0);
Xw = 0;
z.Zw.prototype.add = function(a, b, c, d, e) {
  var f = this.hb[a];
  f || (f = this.hb[a] = [], this.xn++);
  var h = (0,z.ax)(f, b, d, e);
  -1 < h ? (a = f[h], c || (a.Zp = !1)) : (a = new Ww(b, this.src, a, !!d, e), a.Zp = c, f.push(a));
  return a;
};
z.Zw.prototype.remove = function(a, b, c, d) {
  if (!(a in this.hb)) {
    return!1;
  }
  var e = this.hb[a];
  b = (0,z.ax)(e, b, c, d);
  return-1 < b ? ((0,z.Yw)(e[b]), z.$a.splice.call(e, b, 1), 0 == e.length && (delete this.hb[a], this.xn--), !0) : !1;
};
z.Zw.prototype.Vi = (0,z.n)(21);
z.Zw.prototype.jk = (0,z.n)(25);
z.fx = "closure_lm_" + (1E6 * Math.random() | 0);
z.cx = {};
z.dx = 0;
z.RC = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
Cb(function(a) {
  z.ix = a(z.ix);
});
(0,z.p)(kx, pj);
kx.prototype.ZB = function(a) {
  return!!a.links.loadMore;
};
kx.prototype.fC = function(a, b) {
  return this.en.get(this.fy, {ma:!0, background:b});
};
kx.prototype.Gf = function(a) {
  a.links.loadMore && (this.fy = a.links.loadMore);
  return a.value;
};
z.g = lx.prototype;
z.g.hj = function() {
  this.aI.C("change", this.KG, this);
  (0,z.Eg)(this.X).D("view-actors", this.Oz, this);
  (0,z.zg)("notifications-more", this.PD, this).D("view-actors", this.Oz, this);
};
z.g.lc = function(a) {
  a = (0,z.Zf)(nx, {activities:a.value, activityUser:a.activityUser, lastViewedActivityAt:a.lastViewedActivityAt});
  this.X.appendChild(a);
  this.Co = this.X.getElementsByClassName("notifications-list")[0];
};
z.g.PD = function() {
  iu(this.am);
  var a = window.document.getElementsByClassName("notifications-more")[0];
  a.parentNode.removeChild(a);
};
z.g.mH = function(a) {
  for (var b = "", c = 0;c < a.length;c++) {
    b += (0,z.H)(ox, {Oa:a[c].Pa()});
  }
  a = (0,z.yd)(b);
  this.Co.appendChild(a);
  this.am && this.am.Si();
};
z.g.Oz = function(a) {
  (0,z.t)((0,z.r)(this.ga.get(String(a.value), {ma:!0}), function(b) {
    this.W.open({title:a.target.getAttribute("dialog-title"), bodyHtml:(0,z.H)(qx, {actors:b.value}), type:"scroller"});
  }, this), z.K);
};
z.g.KG = function(a, b) {
  if ((0,z.G)("variants.can_view_activity")) {
    var c = (0,z.hj)(b, "newActivityCount");
    this.Co && ((0,z.Dd)(this.Co), mx(this));
    (0,z.Jc)(window.document.body, "site-nav-new-activity", 0 < c);
  }
};
N("j", "post_recommended", function(a) {
  return "recommended " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "post_cross_posted", function(a) {
  return "added " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + " to " + (0,z.O)(a.collection.name);
});
N("j", "collection_cross_posted", function(a) {
  return "added " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + " to " + (0,z.O)(a.collection.name);
});
N("j", "post_collaborated_published", function(a) {
  return "published " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + ", which you collaborated on";
});
N("j", "follow_up_created", function(a) {
  return "suggested further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "follow_up_published", function(a) {
  return "published your suggested further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "post_added_as_follow_up", function(a) {
  return "added " + (a.followUp.title ? (0,z.O)(a.followUp.title) : "Untitled") + " as further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "post_noted", function(a) {
  return "left a new note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "note_replied", function(a) {
  return "replied to your note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "post_note_replied", function(a) {
  return "replied to a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "note_published", function(a) {
  return "published your note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "mention_in_note", function(a) {
  return "mentioned you in a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "mention_in_note_update", function(a) {
  return "updated a note mentioning you on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "mention_in_note_reply", function(a) {
  return "mentioned you in a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("j", "mention_in_note_reply_update", function(a) {
  return "updated a reply mentioning you on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
rx.prototype.Ko = !1;
var SC = "site-nav-transition";
z.g = rx.prototype;
z.g.hj = function() {
  var a = z.Uy ? "touchend" : "click", a = Vy ? "MSPointerDown" : a;
  (0,z.J)(this.Vg, "keydown", this.wE, this);
  (0,z.J)(this.Vg, a, this.jE, this);
  (0,z.J)(this.Vg, "mouseover", this.np, this);
  (0,z.J)(this.wz, a, this.Er, this);
  this.ra.C("resize-end", this.jy, this);
  this.ba.C(Um, this.Zs, this);
  this.jd.C("httperror", this.$s, this);
  (0,z.zg)("open-new-post", this.Os, this).D("open-nav", this.VG, this);
};
z.g.jE = function(a) {
  a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (this.uj = !!(0,z.Od)(a.target, null, "site-nav-list-item-btn"));
};
z.g.Os = function(a) {
  (0,z.yj)(uz, {source:(0,z.Od)(a.target, null, "site-nav") ? "site-nav" : (0,z.Od)(a.target, null, "cover-home") ? "home-cover" : null});
  this.ba.navigate("p/new-post");
};
z.g.wE = function(a) {
  var b = this.Vg.getElementsByClassName("navigable-list-item");
  40 == a.keyCode ? (this.jf = Math.min(++this.jf, b.length - 1), sx(b[this.jf])) : 38 == a.keyCode ? (this.jf = Math.max(--this.jf, 0), sx(b[this.jf])) : this.jf && 13 == a.keyCode ? (b = b[this.jf].querySelector("[data-action]")) ? (a = b.getAttribute("data-action"), this.uj = !0, Math.max(--this.jf, 0), Dg && Qg({ie:a, value:void 0, target:window.document.body, event:{}, Im:!1})) : (a = a.target.querySelector("[href]")) && this.ba.navigate(a.pathname.substr(1)) : 9 == a.keyCode ? (this.np(), this.uj = 
  !1) : 27 == a.keyCode && (this.np(), this.uj = !1, this.Er());
};
z.g.np = function() {
  this.Vg.blur();
  this.jf = 0;
};
z.g.VG = function(a) {
  a.preventDefault && (a.preventDefault(), a.stopPropagation());
  this.np();
  this.Ko = !0;
  (0,z.w)(window.document.body, SC);
  (0,z.x)(window.document.body, "site-nav-new-activity");
  (0,z.G)("isAuthenticated") && (0,z.G)("variants.can_view_activity") && this.jd.post("/me/activity/last-viewed", null, {background:!0});
  (0,z.w)(window.document.body, "site-nav-drawer-open");
  this.Vg.focus();
};
z.g.Er = function(a) {
  function b(a) {
    if (!a || a.target === c) {
      e && (0,window.clearTimeout)(e);
      (0,z.dg)(d);
      this.Ko || (0,z.x)(window.document.body, SC);
      a = (0,z.ej)(window.document.getElementsByClassName("notifications-list-item-new"));
      for (var b = 0;b < a.length;b++) {
        a[b].className = "notifications-list-item";
      }
    }
  }
  if (!this.uj && this.Ko) {
    var c = window.document.getElementById("container"), d = (0,z.J)(c, z.Un, b, this), e = (0,window.setTimeout)(b.bind(this), 500);
    (0,z.x)(window.document.body, "site-nav-drawer-open");
    this.Ko = !1;
    a && a.preventDefault();
  }
};
z.g.Zs = function(a, b) {
  this.uj = !1;
  this.Er();
  window.document.body.removeChild(this.Vg);
  window.document.body.insertBefore(this.Vg, this.wz);
  b && this.ba.ib && (tx(this), this.jy());
};
z.g.jy = function() {
  if (1E3 >= window.innerWidth) {
    if (!this.qo) {
      var a = this.ba.ib;
      a && a.J ? (this.qo = !0, this.ra.C("scroll", this.sp, this)) : (0,z.K)("sitenav: activeScreen not ready for scroll listener");
    }
  } else {
    (0,z.x)(window.document.body, "site-nav-hidden"), tx(this);
  }
};
z.g.sp = function(a) {
  5 > a.scrollTop ? (0,z.x)(window.document.body, "site-nav-hidden") : (0,z.w)(window.document.body, "site-nav-hidden");
};
z.g.$s = function(a, b) {
  b.background && 401 == a && this.Qa.H("You've been logged out. Please log in.", "error");
};
z.g = ux.prototype;
z.g.CI = function(a) {
  !(a = a.event.target) || "IMG" != a.tagName || a.width >= window.innerWidth - Cx || (vx(this, !0), this.Yk = new wx(a, this.da), yx(this.Yk), this.Ka = (0,z.Wm)((0,z.Wr)(this.da.get("app"))), this.sa.push((0,z.J)(this.Ka, "scroll", (0,z.Pm)(100, this.sp, this), this)), this.sa.push((0,z.J)(window.document, "click", this.rD, this, !0)), this.sa.push((0,z.J)(window.document, "keyup", this.cF, this)), this.sa.push((0,z.J)(window.document, "touchstart", this.mI, this)));
};
z.g.sF = function(a, b) {
  function c(a) {
    var b = window.document.createElement("img");
    b.src = xx(a);
    this.ut = (0,z.J)(b, z.zx, function() {
      if (a.width === a.height && !a.getAttribute("data-width")) {
        var c = Math.min(b.width, b.height);
        a.setAttribute("data-width", c);
        a.setAttribute("data-height", c);
        return b.src = xx(a);
      }
      a.src = b.src;
      a.getAttribute("data-width") || (a.setAttribute("data-width", b.width), a.setAttribute("data-height", b.height));
      d.call(this);
    }, this);
  }
  function d() {
    if (this.tt.length) {
      var a = this.tt.shift();
      c.call(this, a);
    }
  }
  b && (vx(this, !0), this.ut && (0,z.dg)(this.ut), this.tt = Array.prototype.slice.call((0,z.Wr)(this.da.get("app")).bn('[data-action\x3d"zoom"]')), d.call(this));
};
z.g.sp = function() {
  null === this.ss && (this.ss = this.Ka.scrollTop);
  40 <= Math.abs(this.ss - this.Ka.scrollTop) && vx(this);
};
z.g.cF = function(a) {
  27 == a.keyCode && vx(this);
};
z.g.rD = function(a) {
  a.stopPropagation();
  a.preventDefault();
  vx(this);
};
z.g.mI = function(a) {
  this.Rx = a.touches[0].pageY;
  this.Ez = (0,z.J)(a.target, "touchmove", this.lI, this);
};
z.g.lI = function(a) {
  10 < Math.abs(a.touches[0].pageY - this.Rx) && (vx(this), (0,z.dg)(this.Ez));
};
(0,z.p)(wx, z.B);
var Cx = 80;
wx.prototype.close = function(a) {
  (0,z.x)(window.document.body, "zoom-overlay-open");
  (0,z.w)(window.document.body, "zoom-overlay-transitioning");
  (0,z.lf)(this.Lb, "transform", "");
  this.qe && (0,z.lf)(this.qe, "transform", "");
  z.D && !(0,z.Xc)(10) || a ? this.Eb() : this.Ip = (0,z.J)(this.Lb, z.Un, this.Eb, this);
};
wx.prototype.F = function() {
  this.ic.Xd || this.ic.cancel();
  this.Gs && (0,z.dg)(this.Gs);
  this.Ip && (0,z.dg)(this.Ip);
  this.qe && this.qe.parentNode && ((0,z.x)(this.Lb, "zoom-img"), this.qe.parentNode.replaceChild(this.Lb, this.qe), this.Ol.parentNode.removeChild(this.Ol), (0,z.x)(window.document.body, "zoom-overlay-transitioning"));
  wx.t.F.call(this);
};
(0,z.p)(Ex, z.Sh);
var Hx = "track";
z.g = Ex.prototype;
z.g.dF = null;
z.g.$x = null;
z.g.F = function() {
  (0,window.clearTimeout)(this.Zg);
  this.ra.xa("scroll", this.xd, this);
  Ex.t.F.call(this);
};
z.g.fi = function() {
  var a = this.ba.ib;
  if (this.Ka = a && (0,z.Wm)(a)) {
    this.Pz = (0,z.hh)();
  }
};
z.g.xd = function() {
  (0,window.clearTimeout)(this.Zg);
  Gx(this);
  Fx(this, !0);
};
z.g.MG = function() {
  Gx(this);
  Fx(this);
};
Jx.prototype.fi = function(a, b, c) {
  if (b) {
    for (a = c.bn("[data-load-img]"), b = 0;b < a.length;b++) {
      (c = a[b].getAttribute("data-load-img")) && (c = a[b].querySelector(c)) && (c = "IMG" != c.tagName ? c.style.backgroundImage && c.style.backgroundImage.match(/url\(['"]?([^\)'"]*)/)[1] : c.src) && Kx(c, a[b]);
    }
  }
};
(0,z.p)(Lx, z.B);
Lx.prototype.F = function() {
  this.ra.xa("scroll-start", this.Ny, this);
  this.ra.xa("scroll-end", this.Fj, this);
  Mx(this);
  Lx.t.F.call(this);
};
Lx.prototype.Ny = function(a) {
  a = a === window.document.body ? [window.document.body] : (0,z.ej)(a.children);
  for (var b = 0;b < a.length;b++) {
    (0,z.w)(a[b], "disable-pointer-events");
  }
  this.ol = this.ol.concat(a);
};
Lx.prototype.Fj = function() {
  Mx(this);
};
(function() {
  function a() {
    var a = Tr(Vr(Vr(Ur(Ur(Ur(Ur(Ur(Ur(Ur(Ur(k.get("app"), /^utm_/), /^km_/), "q"), "kme"), "kmi"), "interstitial"), /^fb_/), /^action_/), /^\/r\/?$/), /^\/feed\/.*/), b());
    a.C(Um, function(a, b) {
      c && (0,z.Mc)(window.document.body, "js-loading", "js-loaded");
      b && (c || zj(["_trackPageview", a]), Aj(["record", "pageview", {path:a}]));
    });
    new Jx(k);
    new Lx(k);
    (0,z.G)("variants.enable_cover_flow") && new Hi(k);
    var c = !0;
    (0,z.t)((0,z.r)((0,z.tc)(a.Lm(window.location.pathname + window.location.hash), function() {
      c = !1;
    }), function() {
      e();
    }), function() {
    });
  }
  function b() {
    var a = [Gs(z.yB, Sn), Gs(zB, Sn), Gs(kB, Ho), Gs(AB, "BestOfScreen"), Gs(KC, Xo), Gs(FB, z.Qn), Gs(GB, z.Qn), Gs(HB, z.Qn), Gs(IB, "OnboardScreen"), Gs(z.JB, "ProfileScreen"), Gs(KB, "ProfileScreen"), Gs(LB, "ProfileScreen"), Gs(MB, "ProfileScreen"), Gs(NB, "ProfileScreen"), Gs(OB, "DraftsScreen"), Gs(QB, "DraftsScreen"), Gs(PB, "DraftsScreen"), Gs(RB, "DraftsScreen"), Gs(z.SB, "ExportScreen"), Gs(TB, "ReadingListScreen"), Gs(z.UB, "SettingsScreen"), Gs(VB, "StatsScreen"), Gs(WB, "StatsScreen"), 
    Gs(cC, "EspnScreen"), Gs(eC, "StartWritingScreen"), Gs(CC, "VerificationScreen"), Gs(z.oC, "RevertCandidateScreen"), Gs(fC, z.Qn)];
    ((0,z.G)("variants.can_view_own_referrers") || (0,z.G)("variants.can_view_all_referrers")) && a.push(Gs(sC, "ReferrersScreen"));
    a.push(Gs(z.XB, "CollectionSettingsScreen"));
    a.push(Gs(YB, "CollectionSettingsScreen"));
    a.push(Gs(z.Hu, ou));
    a.push(Gs(ZB, ou));
    a.push(Gs($B, ou));
    a.push(Gs(z.Wt, Kt), Gs(z.Zp, Kt));
    a.push(Gs(z.BB, "PostEditScreen"), Gs(z.CB, "PostEditScreen"), Gs(z.aC, "PostEditScreen"), Gs(z.bC, "PostEditScreen"));
    var b = new Ds;
    a.forEach(function(a) {
      b.add(a);
    });
    return b;
  }
  function c(a) {
    k.get("app").navigate(a.value);
  }
  function d() {
    var a = window.devicePixelRatio || 1;
    Tx.set(Ry, String(window.document.body.clientWidth), 604800, "/");
    Tx.set(Sy, String(a), 604800, "/");
  }
  function e() {
    var a = window.location.pathname;
    if ((0,z.G)("currentUser.isAuthenticated") && !(0,z.G)("useragent.isMobile") && !(0,z.G)("isCurrentUserVerified") && (0,z.G)("currentUser.unverifiedEmail") && a != IB.path && a != CC.path && a != cC.path && a != z.dC.path && a != eC.path) {
      (0,z.yj)(fA, {});
      var b = k.get("butter-bar");
      b.H('Complete your account registration. \x3cbutton class\x3d"btn btn-chromeless link link-butter" title\x3d"Send verification email" data-action\x3d"butter-bar-action"\x3eSend verification email.\x3c/button\x3e', {type:"success", uw:-1});
      Zu(b, function() {
        (0,z.yj)(gA, {});
        (0,z.t)((0,z.r)(k.get("request").post("/me/send-verify", {}, {ma:!0}), function(a) {
          b.ha();
          b.H(os({email:a.value}), "success");
          Zu(b, function() {
            k.get("app").navigate("me/settings");
          });
        }), (0,z.cp)(k.get("dialog"), Lu()));
      }, this);
    }
  }
  $f();
  var f = String((0,z.G)("buildLabel"));
  (function() {
    z.D ? Hh() : (Hb = new Rh, Ih(), Jh(), Lh(), Mh(), Gb());
    Oh.push(z.Hc);
    Oh.push(Ah);
    Oh.push("domIsDirty");
    Dh("user", (0,z.G)("currentUser.userId"));
    Eh.build = f;
    Eh.userAgent = window.navigator.userAgent;
    Dh("location", {toString:function() {
      return window.document.location.href;
    }});
  })();
  var h = Ix(), k = new iq(h, "app");
  window.__obv = k;
  for (Fh(new kh(k, "/_/oh-noes", 5E3, 10));Qh.length;) {
    mh(Gh, Qh.shift());
  }
  Ij(new kh(k, "/_/stat", 5E3, window.Infinity));
  tu();
  (function(a) {
    var b = a.get("request");
    b.C("versionupdate", function() {
      window.location.reload(!0);
    });
    b.C("buildchange", function() {
      a.get("app").bx = !1;
    });
    return b;
  })(k);
  (function(a) {
    a = new aq(a);
    var b = window.PLOVR_MODULE_URIS, c = window.PLOVR_MODULE_INFO;
    a.my = c;
    for (var d in c) {
      0 === c[d].length && (a.ro[d] = !0);
    }
    0 === b.base.indexOf("fingerprint:") && (b = (0,z.G)("moduleUrls"));
    a.ny = b;
  })(h);
  (function() {
    Cj("userId", (0,z.G)("currentUser.userId"));
    Cj("referrer", function() {
      var a = k.get("referrer-tracker"), b = a.Dt;
      a.xs && (b = a.Tn || a.Dt);
      0 !== a.Xg.length && (a = a.Xg.slice(-1)[0], a = a[Object.keys(a)[0]], b = 0 === a.length ? b : b + (-1 == b.indexOf("?") ? "?" : "\x26") + "source\x3d" + a);
      return b;
    });
    Cj("location", function() {
      return window.document.location.href;
    });
  })();
  k.rd();
  z.da._PLOVR_TEST || (a(), (new qu(window.document.body)).H(), (new ru(window.document.body, k)).H(), (new pu(window.document.body, k)).H(), (new su(window.document.body, k)).H(), (0,z.zg)("navigate", c), d(), k.get("dom-monitor").C("resize-end", d), Tx.set("tz", String((new Date).getTimezoneOffset()), 604800, "/"));
})();
})(_mdm);
