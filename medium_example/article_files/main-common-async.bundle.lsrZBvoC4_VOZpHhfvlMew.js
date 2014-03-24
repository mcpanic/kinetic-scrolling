(function(z){
var TC = function(a) {
  var b, c = !1;
  if (a.createRange) {
    try {
      b = a.createRange();
    } catch (d) {
      return null;
    }
  } else {
    if (a.rangeCount) {
      if (1 < a.rangeCount) {
        c = new z.$e;
        b = 0;
        for (var e = a.rangeCount;b < e;b++) {
          c.vf.push(a.getRangeAt(b));
        }
        return c;
      }
      b = a.getRangeAt(0);
      c = (0,z.Qe)(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
    } else {
      return null;
    }
  }
  return(a = b) && a.addElement ? (0,z.Ue)(a) : (0,z.Oe)((0,z.Ke)(a), c);
};
z.UC = function(a, b) {
  return a.ei[a.El[b]];
};
z.VC = function(a, b) {
  return b in a.El && a.El[b] in a.ei;
};
var WC = function(a, b, c) {
  var d = (0,z.pa)(c);
  if (!b[d]) {
    b[d] = !0;
    for (var e in c.he) {
      var d = c.he[e], f = a.he[e];
      f || (f = a.he[e] = new z.Wl(a), f.wh = !1, f.de = !1);
      f.wh = f.wh || d.wh;
      f.de = f.de || d.de;
      for (var h in d.attributes) {
        var k = d.attributes[h];
        if (!0 === k || !0 === f.attributes[h]) {
          f.attributes[h] = !0;
        } else {
          if ((0,z.ha)(k)) {
            var l = f.attributes[h];
            (0,z.ha)(l) || (l = f.attributes[h] = []);
            (0,z.cb)(l, k);
          }
        }
      }
      WC(a, b, d.Yc);
    }
  }
};
var XC = function(a) {
  return 5 == a || 4 == a || 11 == a;
};
z.YC = function(a) {
  return(a = (0,z.ie)(a || window)) && TC(a);
};
var ZC = function(a, b, c) {
  var d;
  d = d || (0,z.id)(a.parentElement());
  var e;
  1 != b.nodeType && (e = !0, b = d.oc("DIV", null, b));
  a.collapse(c);
  c = d || (0,z.id)(a.parentElement());
  var f, h = f = b.id;
  f || (f = b.id = "goog_" + z.Nx++);
  a.pasteHTML(b.outerHTML);
  (b = c.V(f)) && (h || b.removeAttribute("id"));
  e && (a = b.firstChild, d.kJ(b), b = a);
  return b;
};
z.$C = function(a, b, c) {
  if ((0,z.ia)(a)) {
    try {
      (0,z.vd)(a, b, c);
    } catch (d) {
      if (d !== z.Wd) {
        throw d;
      }
    }
  } else {
    a = (0,z.Vd)(a);
    try {
      for (;;) {
        b.call(c, a.Ta(), void 0, a);
      }
    } catch (e) {
      if (e !== z.Wd) {
        throw e;
      }
    }
  }
};
var aD = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return'"';
      default:
        if ("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if (!(0,window.isNaN)(d)) {
            return String.fromCharCode(d);
          }
        }
        return a;
    }
  });
};
var bD = function(a) {
  var b = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, c;
  c = window.document.createElement("div");
  return a.replace(cD, function(a, e) {
    var f = b[a];
    if (f) {
      return f;
    }
    if ("#" == e.charAt(0)) {
      var h = Number("0" + e.substr(1));
      (0,window.isNaN)(h) || (f = String.fromCharCode(h));
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f;
  });
};
z.Y = function(a, b) {
  return z.ba[a] = b;
};
z.dD = function(a, b) {
  if ((0,z.VC)(a, b)) {
    return(0,z.Ec)((0,z.UC)(a, b));
  }
  if (!a.Io[b]) {
    var c = z.lC.ea({"*":[(0,window.encodeURIComponent)(b)]}, a.dE ? {frame:"true"} : void 0);
    a.Io[b] = (0,z.r)((0,z.tc)(a.ga.get(c, {ma:!0}), function() {
      delete this.Io[b];
    }, a), function(a) {
      a = (0,z.Wj)(a.value, a.references);
      a = (0,z.ew)(this, a);
      this.El[b] = (0,z.gj)(a, "mediaResourceId");
      return a;
    }, a);
  }
  return a.Io[b].Ad();
};
var eD = function(a, b) {
  var c = window.document.getElementById(a.jo + (0,z.pa)(b));
  a.Q("before-clear", b, c);
  c.innerHTML = (0,z.pq)(a, b);
  a.Q("after-draw", b, c);
};
z.fD = function(a, b) {
  a.fr.cancel();
  var c = a.X;
  (0,z.w)(c, "highlight-menu-measure");
  var d = c.offsetWidth, e = c.offsetHeight, f = (0,z.sg)(c.parentNode), h = b.left + b.width / 2 - d / 2, e = b.top + -6 - e;
  h + d > window.document.body.clientWidth ? (h -= d / 2, (0,z.Mc)(c, "far-left", "far-right")) : 0 >= h ? (h += d / 2, (0,z.Mc)(c, "far-right", "far-left")) : (0,z.gr)(c, ["far-left", "far-right"]);
  var d = 0, k = (0,z.og)(c);
  k && (d = k.scrollTop);
  c.style.left = Math.round(h - f.left) + "px";
  c.style.top = Math.round(e + d - f.top) + "px";
  (0,z.tg)(c);
  (0,z.Mc)(c, "highlight-menu-measure", "highlight-menu-active");
  a.Mp = !0;
  a.Q("show");
};
z.gD = function(a) {
  a.Mp && ((0,z.gr)(a.X, ["highlight-menu-active", "highlight-menu-linkmode"]), a.Mp = !1, a.Q("hide"));
};
z.hD = function(a, b, c) {
  return a.Sp(b, function() {
    return c;
  });
};
z.iD = function(a, b) {
  var c = a.Ua[b];
  if (!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  (0,z.r)(a.Xr[b] || (0,z.Ec)(!0), function() {
    delete this.Ua[b];
    delete this.Xr[b];
    this.ro[b] = !0;
    c.Ba(!0);
  }, a);
};
var jD = function(a, b, c) {
  a = a.attributes[b];
  if (!0 === a) {
    return c;
  }
  if ((0,z.ha)(a)) {
    return "class" == b ? (c.match(/\S+/g) || []).filter((0,z.xa)(z.Xa, a)).join(" ") : (0,z.Xa)(a, c) ? c : null;
  }
  if (a instanceof RegExp) {
    for (var d = "";b = a.exec(c);) {
      d += b[0];
    }
    return d || null;
  }
  return null;
};
var kD = function() {
  var a = z.lz, b = new z.Ul;
  (0,z.Xl)(b);
  WC(b, {}, a);
  return b;
};
z.lD = function(a, b, c) {
  c = Math.min(c, a.text.length);
  a.text = a.text.substring(0, c) + b + a.text.substring(c);
  a = a.tb;
  for (var d = 0;d < a.length;d++) {
    var e = a[d];
    (3 != e.g() ? (0,z.hk)(e) >= c : (0,z.hk)(e) > c) && e.setEnd((0,z.hk)(e) + b.length);
    0 !== (0,z.gk)(e) && (0,z.gk)(e) >= c && e.setStart((0,z.gk)(e) + b.length);
  }
};
z.mD = function(a, b) {
  for (var c = a.tb, d = 0;d < c.length;d++) {
    var e = c[d];
    if (e.g() == b.g() && ((0,z.yl)(b, (0,z.gk)(e), !1) && e.setStart((0,z.hk)(b)), (0,z.yl)(b, (0,z.hk)(e), !0) && e.setEnd((0,z.gk)(b)), (0,z.yl)(e, (0,z.gk)(b), !1) && (0,z.yl)(e, (0,z.hk)(b), !0))) {
      c = z.Pk.zb(z.fk, z.Pk.Mc(e));
      c.setStart((0,z.hk)(b));
      e.setEnd((0,z.gk)(b));
      (0,z.vl)(a, c);
      break;
    }
  }
  (0,z.Ql)(a);
};
var nD = function(a, b, c, d) {
  a = a.tb;
  for (var e = 0;e < a.length;e++) {
    var f = a[e];
    if (f.g() == b && (0,z.gk)(f) < d && (0,z.hk)(f) > c) {
      return!0;
    }
  }
  return!1;
};
z.oD = function(a) {
  return XC(a.type);
};
z.pD = function(a, b) {
  a.name ? b[a.name] = !0 : a.name = (0,z.ql)(b);
};
z.qD = function(a, b) {
  return 4 == a && !b;
};
var rD = function(a, b) {
  return 5 != a && 4 != a && 11 != a && (0,z.Ca)(b);
};
var sD = function(a, b) {
  a.Sh = b;
};
z.tD = function(a) {
  a.Or || (a.Or = new z.fj((0,z.G)("currentUser")));
  return a.Or;
};
var uD = function(a, b, c, d) {
  return(0,z.Pe)(a, b, c, d);
};
z.vD = function(a) {
  a = a.Zd();
  return 1 == a.nodeType ? a : a.parentNode;
};
var wD = function(a) {
  return-1 != a.indexOf("\x26") ? "document" in z.da ? bD(a) : aD(a) : a;
};
var xD = function(a) {
  return 1 == a.nodeType && !(0,z.zd)(a);
};
var yD = function(a, b) {
  this.R = a;
  this.offset = b;
};
var zD = function(a) {
  var b = a.R.parentNode;
  return new yD(b, (0,z.Ya)(b.childNodes, a.R));
};
var AD = function(a) {
  return a.length || a.childNodes.length;
};
var BD = function(a, b, c, d) {
  for (;1 == a.nodeType;) {
    var e = a.childNodes[b];
    if (e || a.lastChild) {
      if (e) {
        var f = e.previousSibling;
        if (c && f) {
          if (d && xD(f)) {
            break;
          }
          a = f;
          b = AD(a);
        } else {
          if (d && xD(e)) {
            break;
          }
          a = e;
          b = 0;
        }
      } else {
        if (d && xD(a.lastChild)) {
          break;
        }
        a = a.lastChild;
        b = AD(a);
      }
    } else {
      break;
    }
  }
  return new yD(a, b);
};
var CD = function(a, b) {
  for (var c = null, d;a != b && (d = a.parentNode);) {
    for (var e = a, f = d.cloneNode(!1);e.nextSibling;) {
      f.appendChild(e.nextSibling);
    }
    c && f.insertBefore(c, f.firstChild);
    c = f;
    a = d;
  }
  return c;
};
var DD = function(a) {
  for (;a.firstChild;) {
    a.parentNode && a.parentNode.insertBefore(a.firstChild, a);
  }
  (0,z.Dd)(a);
};
var ED = function(a, b) {
  function c(a) {
    return a.nodeType == z.ue ? b ? (0,z.Ca)(a.nodeValue) : 0 === a.nodeValue.length : (0,z.Lc)(a, "section-divider") ? !0 : "HR" == a.tagName || "IMG" == a.tagName || "IFRAME" == a.tagName || "PHANTOM-IFRAME" == a.tagName ? !1 : (0,z.Ox)(a.childNodes, c);
  }
  return c(a);
};
var FD = function(a) {
  var b;
  if (a.R.nodeType == z.ue) {
    for (b = a.R.previousSibling;b && b.nodeType == z.ue;b = b.previousSibling) {
      a.offset += AD(b);
    }
  } else {
    b = a.R.previousSibling;
  }
  var c = a.R.parentNode;
  a.R = b ? b.nextSibling : c.firstChild;
  return a;
};
var GD = function(a, b) {
  return b ? BD(a.Fa(), a.Gb()) : BD(a.gb(), a.tc());
};
var HD = function(a) {
  for (var b = null, c = a.firstChild;c;) {
    var d = c.nextSibling;
    c.nodeType == z.ue ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (HD(c), b = null);
    c = d;
  }
};
var ID = function(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? null : z.D ? a.currentStyle ? a.currentStyle.display : null : (0,z.pf)(a, "display")) && "td" != b && "table" != b && "li" != b);
};
var JD = function(a, b, c) {
  this.yB = a;
  this.KK = !!c;
  a && !b && this.Ta();
};
var KD = function(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || KD(a, b, c, d)) {
        return!0;
      }
      a = a.nextSibling;
    }
  }
  return!1;
};
var LD = function(a, b) {
  var c = CD(b, a);
  (0,z.Bd)(c, a);
  for (var c = null, d = b;d != a && !c;d = d.parentNode) {
    c = d.previousSibling;
  }
  c = c ? CD(c, a) : a;
  d = c == a && (0,z.lr)(a) && !b.nextSibling && b.parentNode == a;
  DD(b);
  if (!d || "P" == a.tagName && "P" != b.tagName) {
    (0,z.Bd)(b, a), b.appendChild(c);
  }
};
var MD = function(a) {
  for (a = a.firstChild;a;a = a.nextSibling) {
    if ("FIGCAPTION" != a.tagName && (a.nodeType == z.ue && 0 !== a.nodeValue.length || 1 == a.nodeType && !MD(a))) {
      return!1;
    }
  }
  return!0;
};
var ND = function(a) {
  var b = a.ce(), c = FD(GD(a, !b)), d = zD(c), e = c.R.previousSibling;
  c.R.nodeType == z.ue && (c.R = null);
  var f = FD(GD(a, b)), h = zD(f), k = f.R.previousSibling;
  f.R.nodeType == z.ue && (f.R = null);
  return function() {
    !c.R && e && (c.R = e.nextSibling, c.R || (c = new yD(e, AD(e))));
    !f.R && k && (f.R = k.nextSibling, f.R || (f = new yD(k, AD(k))));
    return(0,z.Pe)(c.R || d.R.firstChild || d.R, c.offset, f.R || h.R.firstChild || h.R, f.offset);
  };
};
var OD = function(a) {
  return 1 == a.nodeType || a.nodeType == z.ue && !!/[^\t\n\r ]/.test(a.nodeValue);
};
var PD = function(a, b, c) {
  (0,z.ga)(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  JD.call(this, a.childNodes[c], !0, b);
};
var QD = function(a) {
  var b = (0,z.Vd)(a);
  a = new z.Ud;
  a.Ta = function() {
    for (;;) {
      var a = b.Ta();
      if (OD.call(void 0, a)) {
        return a;
      }
    }
  };
  return a;
};
var RD = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b);
};
var SD = function(a, b) {
  if (b) {
    var c = ND(b), d;
    d = (0,z.vD)(b);
    d = (0,z.Qd)(d, ID);
  }
  d ? (d = (0,z.Nd)(d, a), z.D ? HD(d) : d.normalize()) : a && (z.D ? HD(a) : a.normalize());
  return c ? c() : null;
};
var TD = function(a, b) {
  var c;
  if (a && 1 == a.nodeType) {
    var d = QD(new PD(a, b));
    try {
      c = d.Ta();
    } catch (e) {
      c = null;
    }
  } else {
    c = null;
  }
  return c;
};
var UD = function(a) {
  return(0,z.Gd)(a) && ("IMG" == a.tagName || 0 !== a.getElementsByTagName("IMG").length);
};
var VD = function(a) {
  this.Nt = a;
  (0,z.fd)(this.Nt.getElementsByTagName("*"), z.lr);
};
var WD = function(a) {
  ED(a, !1) && 0 === a.getElementsByTagName("BR").length && a.appendChild(window.document.createElement("br"));
};
var XD = function(a) {
  z.B.call(this);
  this.lC = "goog_" + z.Nx++;
  this.AA = "goog_" + z.Nx++;
  this.tg = a.ce();
  this.xf = (0,z.id)(a.ig());
  a.zg(this.xf.oc("SPAN", {id:this.lC}), this.xf.oc("SPAN", {id:this.AA}));
};
var YD = function(a, b) {
  return a.xf.V(b ? a.lC : a.AA);
};
var ZD = function(a) {
  var b = !1, c = 1E4;
  do {
    for (var b = !1, d = a.firstChild;d;d = d.nextSibling) {
      var e;
      e = d;
      var f;
      f = [];
      if (f = KD(e, z.lr, f, !0) ? f[0] : void 0) {
        ED(f, !1) ? (0,z.Dd)(f) : LD(e, f), e = !0;
      } else {
        if (f = 1 == e.nodeType && e.querySelectorAll("img"), !f || !f.length || 1 === f.length && MD(e)) {
          e = !1;
        } else {
          f = f[0];
          var h = window.document.createElement("FIGURE");
          RD(h, f);
          h.appendChild(f);
          LD(e, h);
          e = !0;
        }
      }
      if (e) {
        b = !0;
        c--;
        break;
      }
    }
    if (0 > c) {
      throw Error("infinite loop");
    }
  } while (b);
  b = [];
  f = !1;
  c = (0,z.ej)(a.childNodes);
  for (d = 0;d < c.length;d++) {
    e = c[d], (0,z.lr)(e) ? (b.push(new VD(e)), f = !1) : f && !UD(e) || b.length && "SPAN" == e.tagName && !e.childNodes.length && e.id && (0,z.za)(e.id, "goog_") ? (h = (0,z.Ua)(b), h.Nt.appendChild(e), (0,z.fd)(h.Nt.getElementsByTagName("*"), z.lr)) : (f = window.document.createElement("p"), f.appendChild(e), b.push(new VD(f)), c[d + 1] ? a.insertBefore(f, c[d + 1]) : a.appendChild(f), f = !UD(e));
  }
};
var $D = function(a) {
  a = (0,z.ej)(a.childNodes);
  (0,z.vd)(a, function(a) {
    (0,z.lr)(a) && "FIGURE" != a.tagName || !ED(a, !0) || (0,z.Dd)(a);
  });
};
var aE = function(a) {
  for (a = a.lastChild;a;a = a.previousSibling) {
    var b = a.nextSibling, c = a.tagName;
    !b || c != b.tagName || "UL" != c && "OL" != c || ((0,z.Ad)(a, b.childNodes), (0,z.Dd)(b));
  }
};
z.bE = function(a) {
  return 2 === (0,z.mk)(a) || 3 === (0,z.mk)(a) || 4 === (0,z.mk)(a);
};
var cE = function(a) {
  XD.call(this, a);
};
z.dE = function(a) {
  for (var b;b = TD(a, !1);) {
    a = b;
  }
  return a;
};
var eE = function(a) {
  for (var b;b = TD(a, !0);) {
    a = b;
  }
  return a;
};
var fE = function() {
  var a = z.ix, b = z.jx ? function(c) {
    return a.call(b.src, b.Pi, c);
  } : function(c) {
    c = a.call(b.src, b.Pi, c);
    if (!c) {
      return c;
    }
  };
  return b;
};
var gE = function(a, b) {
  for (var c, d = [], e = a.text;c = b.exec(e);) {
    var f = c.index;
    d.push([f, f + c[0].length]);
  }
  for (c = d.length - 1;0 <= c;c--) {
    (0,z.Dl)(a, d[c][0], d[c][1]);
  }
};
var hE = function(a, b) {
  var c = a.Fa(), d = a.gb();
  if (c && d) {
    var e = function(a) {
      return a == b;
    }, c = (0,z.Qd)(c, e), d = (0,z.Qd)(d, e);
    if (c && d) {
      return a.ia();
    }
    if (c) {
      return d = eE(b), uD(a.Fa(), a.Gb(), d, AD(d));
    }
    if (d) {
      return uD((0,z.dE)(b), 0, a.gb(), a.tc());
    }
  }
  return null;
};
var iE = function(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null, d;
  if (c) {
    if (/^\d+px?$/.test(c)) {
      d = (0,window.parseInt)(c, 10);
    } else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c;
    }
  } else {
    d = 0;
  }
  return d;
};
var jE = function(a, b, c, d) {
  z.Yd.call(this, a, b, c, null, d);
};
var kE = function(a, b, c) {
  return(0,z.sd)(window.document, arguments);
};
var lE = function(a) {
  return(0,z.ma)(a) ? a : a[z.RC] || (a[z.RC] = function(b) {
    return a.handleEvent(b);
  });
};
z.mE = function(a, b) {
  var c, d = (c = (c = (0,z.YC)(window)) && hE(c, a)) && new cE(c), e = (0,z.ej)(a.childNodes), f = b.sections;
  if (!f) {
    for (c = 0;c < e.length;c++) {
      if ("SECTION" === e[c].tagName) {
        f = !0;
        break;
      }
    }
  }
  if (f) {
    var h = null, f = null;
    for (c = 0;c < e.length;c++) {
      f = e[c], "SECTION" === f.tagName ? h = null : (h || (h = kE("section"), (0,z.Bd)(h, f)), h.appendChild(f));
    }
    e = (0,z.ej)(a.childNodes);
    for (c = 0;c < e.length;c++) {
      f = e[c], h = (0,z.rr)(f), h || (h = (0,z.yd)((0,z.km)() + "\x3c/div\x3e"), (0,z.Ad)(h, f.childNodes), f.appendChild(h)), f = h, ZD(f), $D(f), (0,z.ur)(f, WD), aE(f);
    }
  } else {
    ZD(a), $D(a), (0,z.ur)(a, WD), aE(a);
  }
  d && d.restore();
};
z.nE = function(a) {
  return!!oE[a.tagName] && !!a.getAttribute("name");
};
var pE = function(a) {
  a = a.replace(/&nbsp;/g, " ");
  return a = a.replace(/ +/g, " ");
};
var qE = function(a) {
  a = a.replace(/<div>\s*(<br>)*\s*<\/div>/ig, "\x3cp\x3e");
  a = a.replace(/\s*(<br>)+\s*<\/p>/ig, "\x3c/p\x3e");
  return a = a.replace(/<(\/?)p>\s*<\1p>/ig, "\x3c$1p\x3e");
};
var rE = function(a, b) {
  if (-1 == a.indexOf("@") && -1 == a.indexOf("://") && -1 == a.indexOf("www.")) {
    return(0,z.Ea)(a);
  }
  var c = b || {};
  "rel" in c || (c.rel = "nofollow");
  "target" in c || (c.target = "_blank");
  var d = [], e;
  for (e in c) {
    c.hasOwnProperty(e) && c[e] && d.push((0,z.Ea)(e), '\x3d"', (0,z.Ea)(c[e]), '" ');
  }
  var f = d.join("");
  return a.replace(z.hz, function(a, b, c, d, e) {
    a = [(0,z.Ea)(b)];
    if (!c) {
      return a[0];
    }
    a.push("\x3ca ", f, 'href\x3d"');
    d ? (a.push("mailto:"), c = d, d = "") : (e || a.push("http://"), (d = c.match(sE)) ? (c = d[1], d = d[2]) : d = "");
    c = (0,z.Ea)(c);
    d = (0,z.Ea)(d);
    a.push(c, '"\x3e', c, "\x3c/a\x3e", d);
    return a.join("");
  });
};
var tE = function(a) {
  for (var b = {}, c = 0, c = 0;c < a.length;c++) {
    var d = a[c].getName();
    d in b ? a[c].Yb("") : b[d] = !0;
  }
  for (c = 0;c < a.length;c++) {
    (0,z.pl)(a[c], b);
  }
};
var uE = function(a, b) {
  a.R.firstChild && (a = BD(a.R, a.offset));
  for (var c = new jE(b), d, e = 0;d = (0,z.Xd)(c);) {
    if (a.R == d) {
      return e + a.offset;
    }
    d.nodeType == z.ue ? e += d.nodeValue.length : "BR" == d.tagName && (e += 1);
  }
  return-1;
};
z.vE = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]');
};
z.wE = function(a, b) {
  var c = (0,z.kf)((0,z.sg)(a)), d = (0,z.pd)(window), d = new z.hf(Math.max(0, c.top), Math.min(d.width, c.right), Math.min(d.height, c.bottom), Math.max(0, c.left));
  b.top <= d.top && b.bottom >= d.bottom || b.top >= d.top && b.bottom <= d.bottom || (c = Math.round(b.top - d.top), d = Math.round(b.bottom - d.bottom), a.scrollTop += 1 === (0 == c ? 0 : 0 > c ? -1 : 1) ? Math.min(c, d) : Math.max(c, d));
};
var xE = function(a, b) {
  if (z.D) {
    var c = iE(a, b + "Left"), d = iE(a, b + "Right"), e = iE(a, b + "Top"), f = iE(a, b + "Bottom");
    return new z.hf(e, d, f, c);
  }
  c = (0,z.pf)(a, b + "Left");
  d = (0,z.pf)(a, b + "Right");
  e = (0,z.pf)(a, b + "Top");
  f = (0,z.pf)(a, b + "Bottom");
  return new z.hf((0,window.parseFloat)(e), (0,window.parseFloat)(d), (0,window.parseFloat)(f), (0,window.parseFloat)(c));
};
var yE = function(a) {
  if (1 == a.nodeType) {
    var b;
    if (a.getBoundingClientRect) {
      b = (0,z.rf)(a), b = new z.gd(b.left, b.top);
    } else {
      b = (0,z.Sd)((0,z.id)(a));
      var c = (0,z.tf)(a);
      b = new z.gd(c.x - b.x, c.y - b.y);
    }
    if (z.Le && !(0,z.Xc)(12)) {
      var d;
      z.D ? d = "-ms-transform" : z.Td ? d = "-webkit-transform" : z.Me ? d = "-o-transform" : z.Le && (d = "-moz-transform");
      var e;
      d && (e = (0,z.qf)(a, d));
      e || (e = (0,z.qf)(a, "transform"));
      a = e ? (a = e.match(zE)) ? new z.gd((0,window.parseFloat)(a[1]), (0,window.parseFloat)(a[2])) : new z.gd(0, 0) : new z.gd(0, 0);
      a = new z.gd(b.x + a.x, b.y + a.y);
    } else {
      a = b;
    }
    return a;
  }
  d = (0,z.ma)(a.$u);
  e = a;
  a.targetTouches ? e = a.targetTouches[0] : d && a.Te.targetTouches && (e = a.Te.targetTouches[0]);
  return new z.gd(e.clientX, e.clientY);
};
var AE = function(a, b) {
  return(0,z.Pe)(a, b, a, b);
};
var BE = function(a, b, c) {
  if (!(a.nodeName in CE)) {
    if (a.nodeType == z.ue) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in DE) {
        b.push(DE[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          BE(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
};
z.EE = function(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
};
z.FE = function(a, b, c, d, e) {
  if ((0,z.ha)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.FE)(a, b[f], c, d, e);
    }
  } else {
    c = lE(c), (0,z.Uw)(a) ? a.Mf(b, c, d, e) : a && (a = (0,z.ex)(a)) && (b = a.jk(b, c, !!d, e)) && (0,z.bx)(b);
  }
};
z.GE = function(a, b, c, d, e) {
  if ((0,z.ha)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.GE)(a, b[f], c, d, e);
    }
    return null;
  }
  c = lE(c);
  if ((0,z.Uw)(a)) {
    a = a.qa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, h = (0,z.ex)(a);
    h || (a[z.fx] = h = new z.Zw(a));
    c = h.add(b, c, !1, d, e);
    c.Rq || (d = fE(), c.Rq = d, d.src = a, d.Pi = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in z.cx ? z.cx[b] : z.cx[b] = "on" + b, d), z.dx++);
    a = c;
  }
  return a;
};
var HE = function(a) {
  var b = z.Yf;
  return(0,z.xd)((0,z.qm)(a, b) + (0,z.sm)(a, b));
};
var IE = function(a, b) {
  a = a.cloneNode(!0);
  (0,z.mE)(a, {Ve:!1, isPublished:!1, media:null, sections:b});
  var c = (0,z.wr)(a).map(function(a) {
    return(0,z.Hr)(a);
  }), d = (0,z.xr)(a), d = b ? (0,z.Br)(d) : [], c = c.map(function(a) {
    return a.zb();
  }), c = (0,z.Zj)(new z.Xj, c);
  b && (0,z.bk)(c, d);
  return c;
};
var JE = function(a, b) {
  var c = (0,z.vE)(a, "title");
  c && b.call(void 0, c);
  (c = (0,z.vE)(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".body") && (0,z.vr)(a.querySelector(".body"), z.nE, (0,z.Jb)(b, (0,z.Ib)(!0)), void 0);
};
z.KE = function(a, b) {
  return(0,z.kg)(a, z.qr, b);
};
z.LE = function(a, b, c) {
  b = '\x3cdiv class\x3d"popover-inner"\x3e\x3cul\x3e';
  a = a.items;
  for (var d = a.length, e = 0;e < d;e++) {
    var f = a[e];
    b += '\x3cli class\x3d"typeahead-item" data-action-value\x3d"@' + (0,z.P)(f.username) + '" data-action\x3d"typeahead-populate"\x3e' + (0,z.eo)({user:f, vc:"avatar-micro", iq:!0}, c) + '\x3cstrong class\x3d"typeahead-name"\x3e' + (0,z.O)(f.name) + '\x3c/strong\x3e \x3cem class\x3d"typeahead-username"\x3e@' + (0,z.O)(f.username) + "\x3c/em\x3e\x3c/li\x3e";
  }
  return b + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var ME = function(a) {
  var b = NE;
  if (!b) {
    b = NE = kD();
    (0,z.Yl)(b, "SPAN");
    for (var c in b.he) {
      var d = b.he[c];
      d.wh || OE.push(RegExp("\x3c" + c + "[^\x3e]*\x3e[\\s\\S]*?\x3c\\/" + c + "\x3e", "gi"));
      d.attributes.style = /(font-weight|font-style) *: *[\w]*;/g;
    }
  }
  a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
  OE.forEach(function(b) {
    a = a.replace(b, "");
  });
  a = a.replace(PE, function(a, c, d) {
    a = b.he[d.toUpperCase()] || b.Ou;
    if (!a.de) {
      return "";
    }
    (0,z.ka)(a.de) && (d = a.de);
    if (QE.test(c)) {
      c = "\x3c/" + d.toLowerCase() + "\x3e";
    } else {
      d = "\x3c" + d.toLowerCase();
      for (var k in a.attributes) {
        var l = c.match(RegExp(k + "\\s*\x3d\\s*(['\"])(.+?)\\1"));
        if (l = l && l[2] && jD(a, k, l[2])) {
          "href" == k && (l = (0,z.Ea)((0,z.fm)(wD(l), !0))), d += " " + k + '\x3d"' + l + '"';
        }
      }
      c = d + "\x3e";
    }
    return c;
  });
  a = qE(a);
  return a = pE(a);
};
z.RE = function(a) {
  a = a.replace(/<\/h\d\b[^>]*>/gi, " ").replace(/<\/p\b[^>]*>/gi, "\n\n").replace(/<\/pre\b[^>]*>/gi, "\n\n").replace(/<\/div\b[^>]*>/gi, "\n\n").replace(/<\/li\b[^>]*>/gi, "\n").replace(/<\/ul\b[^>]*>/gi, "\n").replace(/<\/ol\b[^>]*>/gi, "\n").replace(/<br\b[^>]*>/gi, "\n").replace(/<\/blockquote\b[^>]*>/gi, "\n\n").replace(/<[^>]*>/gim, "");
  return wD(a.replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&quot;/g, '"').replace(/&lsquo;/g, "‘").replace(/&rsquo;/g, "’").replace(/&apos;/g, "'")).trim();
};
var SE = function(a) {
  return a.replace(z.Qy, '$1\x3ca href\x3d"/@$2" title\x3d"Medium profile for @$2"\x3e@$2\x3c/a\x3e');
};
z.TE = function(a, b) {
  a || (a = "");
  a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  b && !1 === b.iK ? a = (0,z.Ea)(a) : (a = rE(a), a = a.replace(/((?:^|[^a-zA-Z0-9_!#$%&*@＠/]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g, '$1\x3ca href\x3d"http://twitter.com/$3$4" target\x3d"_blank" title\x3d"Twitter profile for @$3$4"\x3e@$3$4\x3c/a\x3e'));
  b && !1 === b.BN || (a = a.replace(/\n/g, "\x3cbr\x3e"));
  b && !1 === b.TI || (a = "\x3cp\x3e" + a.replace(/<br><br>/g, "\x3c/p\x3e\x3cp\x3e").replace(/\n\n/g, "\x3c/p\x3e\x3cp\x3e") + "\x3c/p\x3e");
  return a;
};
var UE = function(a) {
  a = a.match("(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*");
  return null != a ? a[0] : "";
};
var VE = function(a) {
  return'\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + (0,z.P)(a.oJ) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinner-overlay"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var WE = function(a, b) {
  if (0 > a) {
    return null;
  }
  for (var c = new jE(b), d;d = (0,z.Xd)(c);) {
    var e = 0;
    d.nodeType == z.ue ? e = d.nodeValue.length : "BR" == d.tagName && (e = 1);
    a -= e;
    if (0 > a) {
      return new yD(d, e + a);
    }
  }
  return 0 === a ? (c = BD(b, b.childNodes.length, !0)) && "IMG" == c.R.tagName && c.R.previousSibling ? (c = c.R.previousSibling, BD(c, c.childNodes.length, !0)) : c : null;
};
z.XE = function(a, b, c) {
  return uE(GD(a, c), b);
};
z.YE = function(a) {
  var b = a instanceof z.he, c = b ? a.gb() : a, c = (0,z.og)(c.nodeType == z.ue || "BR" == c.tagName ? c.parentNode : c);
  b ? (a = a.ia(), a.collapse(!1), (a = (a = a.Fi()) && a.getClientRects && a.getClientRects()[0]) ? (a = (0,z.rg)(a), "mobile safari" == (0,z.G)("useragent.browser") && (b = (0,z.qg)(), a.top -= b.top, a.left -= b.left)) : a = null) : a = (0,z.sg)(a);
  a && (0,z.wE)(c, (0,z.kf)(a));
};
z.ZE = function(a) {
  a = a.Fi().getBoundingClientRect();
  a = (0,z.rg)(a);
  if ("mobile safari" == (0,z.G)("useragent.browser")) {
    var b = (0,z.qg)();
    a.top -= b.top;
    a.left -= b.left;
  }
  return a;
};
var $E = function(a) {
  var b = a.nodeType;
  b == z.ue ? $E(a.parentNode) : 1 == b && a.focus();
};
var aF = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    c = d.nextSibling, aF(d, b);
  }
  b(a) && DD(a);
};
z.bF = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1;
  };
};
var cF = function(a, b) {
  var c = a.parentNode, d = (0,z.Ya)(c.childNodes, a) + (b ? 0 : 1), c = BD(c, d, b, !0);
  AE(c.R, c.offset).select();
};
z.dF = function(a, b) {
  var c = yE(a), d = yE(b);
  return new z.gd(c.x - d.x, c.y - d.y);
};
z.eF = function(a) {
  if (a = (0,z.ie)(a || window)) {
    if (a.empty) {
      try {
        a.empty();
      } catch (b) {
      }
    } else {
      try {
        a.removeAllRanges();
      } catch (c) {
      }
    }
  }
};
z.fF = function(a) {
  var b = [];
  BE(a, b, !1);
  return b.join("");
};
z.gF = function(a) {
  if (z.ly && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    BE(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  z.ly || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
};
z.hF = function(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (a.nodeType == z.ue) {
      a.data = b;
    } else {
      if (a.firstChild && a.firstChild.nodeType == z.ue) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        (0,z.EE)(a), a.appendChild((0,z.ld)(a).createTextNode(String(b)));
      }
    }
  }
};
var iF = function(a) {
  if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return!1;
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return!1;
    case 0:
      return!z.Le;
    default:
      return 166 > a.keyCode || 183 < a.keyCode;
  }
};
var jF = function(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
  };
};
z.kF = function(a, b, c) {
  this.start = a;
  this.end = b;
  this.op = c;
  this.Tx = !1;
};
var lF = function() {
  var a = (0,z.mF)(0, 0);
  a.Tx = !0;
  return a;
};
z.mF = function(a, b) {
  return new z.kF(nF(a, b), nF(a, b), !1);
};
z.oF = function(a) {
  return a.op ? a.start : a.end;
};
var pF = function(a) {
  return a.start.cc === qF && a.end.cc === qF;
};
z.rF = function(a) {
  return a.isCollapsed() && a.start.cc === z.sF;
};
z.tF = function(a) {
  return a.isCollapsed() && a.start.cc === uF;
};
z.vF = function(a, b, c) {
  this.cc = a;
  this.S = b;
  this.offset = c;
};
var nF = function(a, b) {
  return new z.vF(qF, a, b);
};
var wF = function(a) {
  return new z.vF(uF, a, 0);
};
z.xF = function(a, b, c) {
  this.Kp = c.hr;
  this.Mz = c.gr;
  this.X = a;
  this.mb = (0,z.wr)(this.X);
  this.Ab = this.nb() ? (0,z.xr)(a) : null;
  this.ac = yF(this);
  this.Ie = [];
  this.Ie.length = this.mb.length;
  this.Gg = null;
  this.jt = !1;
  this.mc = zF(this, b);
  a = this.mb;
  this.Ab && (a = a.concat(this.Ab));
  b = {};
  for (c = 0;c < a.length;c++) {
    var d = a[c].getAttribute("name");
    d && (b[d] = !0);
  }
  this.Md = b;
  this.Vt = !1;
};
var yF = function(a) {
  var b = new z.Xj;
  (0,z.Zj)(b, a.mb.map(function(a) {
    return(0,z.Hr)(a).zb();
  }));
  a.nb() && (0,z.bk)(b, (0,z.Br)(a.Ab));
  b = new z.Tk((new z.ok).kn(b));
  sD(b, a.oE.bind(a));
  return b;
};
var AF = function(a, b) {
  (0,z.BF)(a);
  a.qi();
  var c = b ? a.ac.Tk() : a.ac.Sq();
  c && (a.mc = c, (0,z.CF)(a));
};
z.BF = function(a) {
  if (!a.jt) {
    var b = a.mb.map(function(a) {
      return(0,z.Hr)(a).zb();
    });
    if ((0,z.Yj)((0,z.Uk)(a.ac)).length != b.length) {
      throw new DF("paragraph count mismatch");
    }
    for (var c = 0;c < b.length;c++) {
      EF(a, b[c], c, !0);
    }
    a.jt = !0;
  }
};
var EF = function(a, b, c, d) {
  var e = (0,z.Yj)((0,z.Uk)(a.ac))[c];
  if (d && b.getName() != e.getName()) {
    throw new DF("unexpected name change");
  }
  if (!b.Fb(e)) {
    try {
      a.Vt = d, (0,z.Vk)(a.ac, (0,z.Gk)(3).sb(c).$i(b));
    } finally {
      a.Vt = !1;
    }
    return!0;
  }
  return!1;
};
var FF = function(a, b) {
  (0,z.mE)(a, {Ve:!1, isPublished:!1, media:null, sections:b.hr});
  var c = b.gr && !(0,z.Jd)(window.document.body, a), d = a.style.visibility;
  c && (a.style.visibility = "hidden", window.document.body.appendChild(a));
  var e = new z.xF(a, null, b);
  GF(e);
  c && (window.document.body.removeChild(a), a.style.visibility = d);
  return e;
};
var GF = function(a) {
  HF(a);
  for (var b = [], c = 0, d = (0,z.IF)(a), c = 0;c < d;c++) {
    b.push((0,z.Z)(a, c).zb());
  }
  c = b;
  a.nb() && (c = c.concat((0,z.tH)(a)));
  tE(c);
  for (c = 0;c < d;c++) {
    (0,z.Z)(a, c).name = b[c].getName(), (0,z.uH)(a, c);
  }
  if (a.nb()) {
    for (b = (0,z.tH)(a), c = 0;c < a.Ab.length;c++) {
      (0,z.vH)(a, b[c].ua());
    }
  }
  b = a.ac;
  a = a.getSelection();
  b.Qs = b.bc.length;
  b.qi(a);
};
var HF = function(a) {
  var b = a.mb[0], c = a.mb[(0,z.IF)(a) - 1];
  b && !XC((0,z.yr)(b)) || (0,z.wH)(a, 0, new z.rl("", 1, ""));
  c && XC((0,z.yr)(c)) && (0,z.wH)(a, (0,z.IF)(a), new z.rl("", 1, ""));
};
z.xH = function(a) {
  var b = (0,z.Yj)((0,z.Uk)(a.ac)), c = (0,z.wr)(a.X), d = (0,z.IF)(a);
  if (d != c.length || d != b.length) {
    throw new DF("paragraph count");
  }
  var e;
  for (e = 0;e < d;e++) {
    var f = c[e];
    if (f != a.mb[e]) {
      throw new DF("paragraph element");
    }
    f = (0,z.Hr)(f).zb();
    if (!b[e].Fb(f)) {
      throw new DF("paragraph model");
    }
  }
  if (a.nb()) {
    e = a.Ab.length;
    b = (0,z.xr)(a.X);
    c = (0,z.Br)(b);
    d = (0,z.ak)((0,z.Uk)(a.ac));
    if (e != c.length || e != d.length) {
      throw new DF("section count");
    }
    for (e = 0;e < c.length;e++) {
      if (b[e] != a.Ab[e]) {
        throw new DF("section element");
      }
      if (!d[e].Fb(c[e])) {
        throw new DF("section model");
      }
    }
  }
};
var yH = function(a, b, c, d, e, f) {
  a.mc = new z.kF(nF(b, c), nF(d, e), f);
  (0,z.CF)(a);
};
z.zH = function(a, b) {
  var c = (0,z.AH)(a, b).ua();
  a.mc = new z.kF(wF(c), wF(c), !1);
  (0,z.CF)(a);
};
z.BH = function(a, b) {
  var c = a.mc.start, d = a.mc.end;
  if (!a.mc.isCollapsed()) {
    var e = (0,z.Z)(a, c.S), f = (0,z.Z)(a, d.S);
    CH(a, function(a, b, c) {
      b < c && (0,z.Dl)(a, b, c);
    }, a, !1);
    if (e != f) {
      b && e.append(f);
      var h = d.S - c.S - 1;
      b && h++;
      for (var k = 0;k < h;k++) {
        (0,z.DH)(a, c.S + 1);
      }
    }
    (0,z.uH)(a, c.S);
    e == f || b || (0,z.uH)(a, c.S + 1);
    d.S = c.S;
    d.offset = c.offset;
  }
};
var CH = function(a, b, c, d) {
  var e = a.mc.ia(), f = e.end, h = e.start;
  0 === f.offset && f.S > h.S && (f.S--, f.offset = (0,z.Z)(a, f.S).text.length);
  for (var f = e.start.S, h = e.end.S, k = f;k <= h;k++) {
    var l = (0,z.Z)(a, k);
    b.call(c, l, k == f ? e.start.offset : 0, k == h ? e.end.offset : l.text.length);
    d && (0,z.uH)(a, k);
  }
};
z.EH = function(a, b) {
  return(0,z.Ya)(a.mb, b);
};
z.Z = function(a, b) {
  var c = a.Ie[b];
  if (!c) {
    var d = a.mb[b];
    d && (c = a.Ie[b] = (0,z.Hr)(d, a.Mz), EF(a, c.zb(), b, !0));
  }
  return c;
};
z.IF = function(a) {
  return a.mb.length;
};
z.FH = function(a, b) {
  var c = (0,z.KE)(b, a.X);
  return c ? (0,z.EH)(a, c) : -1;
};
var zF = function(a, b) {
  if (!b) {
    return lF();
  }
  var c = GH(a, GD(b, !0)), d = GH(a, GD(b, !1));
  return c && d ? new z.kF(c, d, b.ce()) : lF();
};
var GH = function(a, b) {
  var c = (0,z.FH)(a, b.R);
  if (-1 == c) {
    return c = null, a.nb() && ((0,z.or)(b.R) ? c = b.R : (0,z.pr)(b.R) && (c = b.R.parentNode), c) ? (c = (0,z.AH)(a, (0,z.Ya)(a.Ab, c.parentNode)), wF(c.ua())) : null;
  }
  var d = b.R.tagName;
  return "IMG" === d || "IFRAME" === d ? new z.vF(z.sF, c, 0) : nF(c, uE(b, a.mb[c]));
};
z.HH = function(a, b) {
  var c = IH(a, b.od()), d = IH(a, (0,z.oF)(b));
  return c && d ? (0,z.Pe)(c.R, c.offset, d.R, d.offset) : null;
};
var IH = function(a, b) {
  var c = a.mb[b.S];
  if (!c) {
    return null;
  }
  if (b.g() === uF) {
    var d = (0,z.JH)(a, b.S);
    if (d && 2 == (0,z.mk)(d) && (d = (0,z.KH)(a, d), d = a.Ab[d] && (0,z.Va)(a.Ab[d].childNodes, z.or))) {
      return new yD(d, 0);
    }
  }
  return b.g() === z.sF && (d = c.querySelector("phantom-iframe, iframe, img")) ? new yD(d, 0) : WE(b.offset, c);
};
z.uH = function(a, b, c) {
  c = c || (0,z.Z)(a, b);
  (0,z.pD)(c, a.Md);
  EF(a, c.zb(), b, !1) || a.Kx((0,z.Gk)(3).sb(b).$i(c.zb()));
};
var LH = function(a) {
  var b = void 0 != a.previousElementSibling ? a.previousElementSibling : (0,z.Fd)(a.previousSibling, !1), c = void 0 != a.nextElementSibling ? a.nextElementSibling : (0,z.Fd)(a.nextSibling, !0);
  if (b && b.tagName === a.tagName) {
    for (;a.firstChild;) {
      b.appendChild(a.firstChild);
    }
    (0,z.Dd)(a);
    a = b;
  }
  if (c && c.tagName === a.tagName) {
    for (;c.firstChild;) {
      a.appendChild(c.firstChild);
    }
    (0,z.Dd)(c);
  }
};
z.CF = function(a) {
  var b = (0,z.HH)(a, a.mc);
  b && (pF(a.mc) ? $E(b.gb()) : $E(a.X), b.select(), (0,z.YE)(b));
};
z.DH = function(a, b) {
  (0,z.BF)(a);
  (0,z.Vk)(a.ac, (0,z.Gk)(2).sb(b));
};
z.wH = function(a, b, c, d) {
  (0,z.BF)(a);
  (0,z.pD)(c, a.Md);
  (0,z.Vk)(a.ac, (0,z.Gk)(1).sb(b).$i(c.zb()));
  d && a.nb() && 0 < b && (c = (0,z.JH)(a, b + 1), c.ua() === b + 1 && ((0,z.MH)(a, b + 1), (0,z.NH)(a, b, c)));
};
var OH = function(a, b) {
  var c = window.document.createElement(a.tagName);
  c.className = "post-list";
  for ((0,z.Bd)(c, a);a.lastChild != b;) {
    (0,z.Cd)(c, a.lastChild, 0);
  }
  return c;
};
var PH = function(a, b, c, d) {
  1 === b.type && a.nb() ? (d = (0,z.JH)(a, d), (0,z.tH)(a), (0,z.bE)(d) && (0,z.QH)(a, d) === d.ua() + 1 && (a = "Continue writing", c.setAttribute("data-default-value", a), b.text || ((0,z.w)(c, "default-value"), c.innerHTML = a))) : (0,z.oD)(b) && (c.contentEditable = !1, c = c.querySelector("figcaption")) && (a = 4 == b.type ? "Type caption for image (optional)" : 11 == b.type ? "Type caption for embed (optional)" : "") && (c.contentEditable = !0, c.setAttribute("data-default-value", a), b.text || 
  ((0,z.w)(c, "default-value"), c.innerHTML = a));
};
z.QH = function(a, b) {
  var c = (0,z.tH)(a), d = c.indexOf(b);
  return b.ua() + (0,z.Zk)(c, d, (0,z.IF)(a));
};
z.NH = function(a, b, c) {
  (0,z.pl)(c, a.Md);
  var d = (0,z.JH)(a, b);
  if (d && d.ua() === b) {
    throw Error("Tried to overwrite a section");
  }
  c.Fe(b);
  b = (0,z.tH)(a);
  d = d ? (0,z.Ya)(b, d) : -1;
  (0,z.Vk)(a.ac, (0,z.Gk)(8).sb(d + 1).wg(c));
};
z.MH = function(a, b) {
  var c = (0,z.tH)(a), d = (0,z.JH)(a, b);
  if (1 === c.length) {
    throw Error("Cannot remove last section");
  }
  if (d.ua() !== b) {
    throw Error("Section not found at " + b);
  }
  c = (0,z.Ya)(c, d);
  (0,z.Vk)(a.ac, (0,z.Gk)(9).sb(c));
};
z.vH = function(a, b, c) {
  var d = (0,z.tH)(a), e = (0,z.JH)(a, b), d = d.indexOf(e);
  if (e.ua() !== b) {
    throw Error("Section not found at " + b);
  }
  c && (c.Fe(e.ua()), e = c);
  (0,z.pl)(e, a.Md);
  b = (0,z.ak)((0,z.Uk)(a.ac))[d];
  !c && b && b.Fb(e) ? a.Lx((0,z.Gk)(10).sb(d).wg(e)) : (0,z.Vk)(a.ac, (0,z.Gk)(10).sb(d).wg(e));
};
z.JH = function(a, b) {
  return(0,z.Yk)((0,z.tH)(a), b);
};
z.AH = function(a, b) {
  return(0,z.tH)(a)[b];
};
z.KH = function(a, b) {
  var c = (0,z.tH)(a);
  return(0,z.Ya)(c, b);
};
var RH = function(a, b) {
  return a.Ab[b] && (0,z.rr)(a.Ab[b]);
};
z.tH = function(a) {
  a.Gg || (a.Gg = (0,z.Br)(a.Ab));
  return a.Gg;
};
var DF = function(a) {
  z.ya.call(this, "Inconsistent model: " + a);
};
z.SH = function() {
};
z.TH = function(a, b) {
  var c = window.iosDispatchEvent;
  c && (0,z.G)("variants.can_use_mobile_editors") ? c("mutate", function() {
    UH(this, b);
    c("mutated");
  }.bind(a)) : UH(a, b);
};
var UH = function(a, b) {
  b.um();
  var c = (0,z.VH)(b), d = a.qF.bind(a, b, c);
  WH(b, !0);
  try {
    d.call(void 0);
  } finally {
    b.df() && b.$j();
  }
  c.qi();
  (0,z.XH)(b);
  b.dispatchEvent("measure");
};
z.YH = function(a, b) {
  this.Qf = a;
  this.cc = b;
};
var ZH = function(a, b, c) {
  var d = a.Qf ? 1 : -1, e = a.Qf ? b.length : -1;
  c = a.Qf ? c : c - 1;
  if (1 == a.cc) {
    return d;
  }
  var f = -1;
  if (3 == a.cc) {
    f = a.Qf ? b.indexOf("\n", c) : b.lastIndexOf("\n", c);
  } else {
    a = !1;
    for (var h = c;0 <= h && h < b.length && -1 == f;h += d) {
      var k = b.charAt(h);
      " " == k || "\n" == k ? a && (f = h) : a = !0;
    }
  }
  return-1 == f ? e - c : f == c ? d : f - c;
};
var $H = function(a, b, c) {
  var d = a.Qf ? 1 : -1, e = c + d, f = (0,z.Z)(b, c), h = (0,z.Z)(b, e);
  if (h) {
    var k = b.nb(), l = k ? (0,z.JH)(b, c) : null, k = k ? (0,z.JH)(b, e) : null, m = l == k;
    if (!m) {
      var q = (0,z.bE)(l);
      if (!q && !(0,z.bE)(k)) {
        (0,z.MH)(b, (a.Qf ? k : l).ua());
        return;
      }
      if (q && (0,z.QH)(b, l) == c + 1) {
        a.Qf || (0,z.zH)(b, (0,z.KH)(b, l));
        return;
      }
    }
    m && ((0,z.oD)(h) || rD(h.type, h.text)) ? (0,z.DH)(b, e) : rD(f.type, f.text) ? (b.If(e, a.Qf ? 0 : h.text.length), (0,z.DH)(b, c)) : m && !(0,z.oD)(f) && (a = b.getSelection(), 0 < d ? (a.start.offset = a.end.offset = f.text.length, f.append(h), (0,z.DH)(b, e), (0,z.uH)(b, c)) : (a.start.offset = a.end.offset = h.text.length, h.append(f), (0,z.DH)(b, c), (0,z.uH)(b, e)));
  }
};
var aI = function(a) {
  this.ZE = a;
};
var bI = function(a, b) {
  if (a in b) {
    return "";
  }
  b[a] = !0;
  return a;
};
z.cI = function() {
  z.B.call(this);
  this.Ci = new z.Zw(this);
  this.DI = this;
};
var dI = function(a, b, c, d) {
  b = a.Ci.hb[String(b)];
  if (!b) {
    return!0;
  }
  b = (0,z.ej)(b);
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.Hk && h.Vj == c) {
      var k = h.Pi, l = h.nk || h.src;
      h.Zp && a.FC(h);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !1 != d.aC;
};
var eI = function() {
  z.cI.call(this);
  this.Tu = this.Rp();
};
z.$ = function() {
  eI.call(this);
  this.fc == z.Px && delete this.QA;
  this.zq == z.Px && delete this.RA;
  this.Gm == z.Px && delete this.UA;
};
var fI = function() {
};
z.gI = function(a, b) {
  var c = new z.SH;
  c.Pc = function(c) {
    var e = (0,z.EH)(c, a);
    -1 != e && (b((0,z.Z)(c, e)), (0,z.uH)(c, e), (0,z.CF)(c));
  };
  return c;
};
var hI = function(a) {
  var b = new fI;
  (0,z.ma)(a) ? b.dB = a : b.dB = function(b, d) {
    for (var e = 0, f = 0;f < a.length;f++) {
      e += a[f](b, d), d += e;
    }
    return e;
  };
  return b;
};
var iI = function(a, b) {
  if (".." == a.text.substring(Math.max(0, b - 2), b)) {
    return(0,z.lD)(a, "…", b), (0,z.Dl)(a, b - 2, b), -1;
  }
  (0,z.lD)(a, ".", b);
  return 1;
};
var jI = function(a, b) {
  return kI("-", a, b);
};
var lI = function(a, b) {
  return kI("–", a, b);
};
var kI = function(a, b, c) {
  var d = b.text.charAt(c - 1), e = b.text, e = e.substring(e.lastIndexOf(" ", c) + 1, c);
  (d = d != a) || (d = UE(e) === e);
  if (d) {
    return(0,z.lD)(b, a, c), 1;
  }
  d = b.text.charAt(c - 2);
  if ("\x3c" == d) {
    return(0,z.lD)(b, "←", c), (0,z.Dl)(b, c - 2, c), -1;
  }
  (0,z.lD)(b, "—", c);
  (0,z.Dl)(b, c - 1, c);
  return 0;
};
var mI = function(a, b) {
  if ("—" == a.text.charAt(b - 1)) {
    return(0,z.lD)(a, "→", b), (0,z.Dl)(a, b - 1, b), 0;
  }
  (0,z.lD)(a, "\x3e", b);
  return 1;
};
var nI = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.lD)(a, "☺", b), (0,z.Dl)(a, b - 1, b), 0;
  }
  (0,z.lD)(a, ")", b);
  return 1;
};
var oI = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.lD)(a, "☹", b), (0,z.Dl)(a, b - 1, b), 0;
  }
  (0,z.lD)(a, "(", b);
  return 1;
};
var pI = function(a, b) {
  if ("\x3c" == a.text.charAt(b - 1)) {
    return(0,z.lD)(a, "❤", b), (0,z.Dl)(a, b - 1, b), 0;
  }
  (0,z.lD)(a, "3", b);
  return 1;
};
z.qI = function(a, b) {
  var c = a.text, d = c.lastIndexOf(" ", b - 1);
  (c = c.substring(d + 1, b)) && UE(c) == c && !nD(a, 3, d + 1, b) && (0,z.vl)(a, (0,z.zl)(d + 1, b, c, "", ""));
  return 0;
};
z.rI = function(a, b) {
  for (var c = a.text, d = b;" " == c[d];) {
    d--;
  }
  var d = c.lastIndexOf(" ", d) + 1, e = c.indexOf(" ", d);
  -1 == e && (e = c.length);
  return{start:d, end:e, text:c.substring(d, e)};
};
var sI = function(a, b) {
  var c = (0,z.rI)(a, b);
  (0,z.xl)(a, function(b) {
    (0,z.gk)(b) <= c.start && (0,z.hk)(b) >= c.end && "token" == b.w("rel") && (0,z.mD)(a, (0,z.Bl)(3, c.start, c.end));
  });
  c.text && tI.test(c.text) && (0,z.vl)(a, (0,z.zl)(c.start, c.end, "/" + c.text, "", "token"));
  return 0;
};
var uI = function(a) {
  return function(b, c) {
    var d = (0,z.rI)(b, c);
    return d.text && tI.test(d.text) ? ((0,z.Dl)(b, d.start, d.end), (0,z.lD)(b, a, d.start), d.start + a.length - c) : 0;
  };
};
var vI = function(a, b) {
  var c = a.text, d = c.charAt(b - 1);
  if (" " == d || " " == d) {
    if ((0,z.G)("useragent.isMobile") && !/[\.!?]/.test(c.charAt(b - 2))) {
      return(0,z.lD)(a, ". ", b), (0,z.Dl)(a, b - 1, b), 1;
    }
    if (8 != a.type) {
      return 0;
    }
  }
  if ("-" == d || "–" == d) {
    if (c = c.charAt(b - 2), " " == c || " " == c) {
      (0,z.lD)(a, "—", b), (0,z.Dl)(a, b - 1, b);
    }
  }
  (0,z.lD)(a, " ", b);
  return 1;
};
var wI = function(a, b) {
  return xI(!1, a, b);
};
var yI = function(a, b) {
  return xI(!0, a, b);
};
var xI = function(a, b, c) {
  var d = b.text.charAt(c - 1);
  (0,z.lD)(b, zI[d] ? a ? "“" : "‘" : (0,window.isNaN)(d) ? a ? "”" : "’" : a ? '"' : "'", c);
  return 1;
};
var AI = function() {
};
var BI = function(a) {
  this.Tm = a;
  this.xB = -1;
};
z.CI = function(a, b, c, d) {
  a = WE(b, a);
  c = WE(d, c);
  return a && c && (0,z.Pe)(a.R, a.offset, c.R, c.offset);
};
z.DI = function(a) {
  z.$.call(this);
  this.pr = a;
  this.hu = !1;
  this.zc = window.document.createElement("div");
  this.zc.setAttribute("contenteditable", "true");
  this.zc.style.position = "absolute";
  this.zc.style.top = "0px";
  this.zc.style.left = "-9999px";
  this.zc.style.width = "100px";
  this.zc.style.height = "100px";
  this.zc.tabIndex = -1;
  this.zc.style.overflow = "hidden";
  window.document.body.appendChild(this.zc);
  this.sa = [];
};
var EI = function(a, b) {
  a.pr && (b = ME(b));
  (0,z.TH)(new aI(b), a.O);
  (0,z.TH)(new AI, a.O);
  var c = (0,z.YC)();
  c && (c.collapse(!1), c.select());
};
var FI = function(a, b) {
  var c = b.clipboardData;
  if (!c || !c.types || !(0,z.ia)(c.types)) {
    return null;
  }
  if (a.pr && !a.hu) {
    if (-1 !== (0,z.Ya)(c.types, "text/html")) {
      return c.getData("text/html");
    }
    if (!(0,z.Ox)(c.types, function(a) {
      return-1 !== a.indexOf("plain");
    })) {
      return null;
    }
  }
  return-1 !== (0,z.Ya)(c.types, "text/plain") ? (c = b.clipboardData.getData("text/plain"), a.O.vk() && (c = c.replace(/\n/g, " ")), (0,z.TE)(c)) : null;
};
var GI = function(a, b) {
  this.UG = a;
  this.sD = b;
};
var HI = function(a) {
  var b = (0,z.YC)();
  return!b.isCollapsed() && !!(0,z.KE)(b.Zd(), a.V());
};
z.II = function(a) {
  z.$.call(this);
  this.mD = a;
};
var JI = function(a, b) {
  var c = 34 == b, d = 39 == b, e = 45 == b, f = 8211 == b, h = 46 == b, k = 62 == b, l = 40 == b, m = 41 == b, q = 51 == b, s = a.O, I = (0,z.VH)(s), F = I.getSelection().start.S;
  if (8 == (0,z.Z)(I, F).type) {
    if (HI(s)) {
      if (d) {
        return(0,z.TH)(new GI("'", "'"), s), !0;
      }
      if (c) {
        return(0,z.TH)(new GI('"', '"'), s), !0;
      }
      if (l) {
        return(0,z.TH)(new GI("(", ")"), s), !0;
      }
    }
    return!1;
  }
  return c ? (HI(s) ? (0,z.TH)(new GI("“", "”"), s) : (0,z.TH)(hI(yI), s), !0) : d ? (HI(s) ? (0,z.TH)(new GI("‘", "’"), s) : (0,z.TH)(hI(wI), s), !0) : e ? ((0,z.TH)(hI(jI), s), !0) : f ? ((0,z.TH)(hI(lI), s), !0) : k ? ((0,z.TH)(hI(mI), s), !0) : h ? ((0,z.TH)(hI(iI), s), !0) : l && HI(s) ? ((0,z.TH)(new GI("(", ")"), s), !0) : l ? ((0,z.TH)(hI(oI), s), !0) : m ? ((0,z.TH)(hI(nI), s), !0) : q ? ((0,z.TH)(hI(pI), s), !0) : !1;
};
z.KI = function(a, b) {
  if (!(0,z.ma)(a)) {
    if (a && "function" == typeof a.handleEvent) {
      a = (0,z.wa)(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : z.da.setTimeout(a, b || 0);
};
var LI = function(a, b, c) {
  z.B.call(this);
  this.Sm = a;
  this.pv = b || 0;
  this.bf = c;
  this.xu = (0,z.wa)(this.ak, this);
};
var MI = function(a) {
  a.Hd() && a.Ue();
};
var NI = function(a, b, c) {
  this.DA = a;
  this.qw = b;
  this.FA = this.ru = !1;
  this.Yu = c || {};
};
var OI = function(a) {
  this.nA = a;
};
z.PI = function(a) {
  z.B.call(this);
  this.bf = a;
  this.rb = {};
};
var QI = function(a, b, c, d, e, f) {
  (0,z.ha)(c) || (RI[0] = c, c = RI);
  for (var h = 0;h < c.length;h++) {
    var k = (0,z.GE)(b, c[h], d || a.handleEvent, e || !1, f || a.bf || a);
    if (!k) {
      break;
    }
    a.rb[k.key] = k;
  }
  return a;
};
var SI = function(a, b) {
  z.cI.call(this);
  this.id = a;
  this.nd = null;
  this.Ch = {};
  this.Mi = {};
  for (var c in TI) {
    this.Mi[c] = [];
  }
  this.Hu = "";
  this.yg = {};
  this.yg[UI] = 1;
  this.yg[z.VI] = 1;
  this.sv = this.uk = !1;
  this.tm = new LI(this.wA, WI, this);
  this.Nu = {};
  for (var d in XI) {
    this.Nu[XI[d]] = 0;
  }
  z.Le && (this.Cd = new LI(this.iv, YI, this));
  this.Se = new z.PI(this);
  this.lL = [];
  this.Qi = ZI;
  this.Dk = (0,z.id)(b || window.document);
  this.Xb = this.Dk.V(this.id);
  this.pu = this.Dk.pd();
};
var $I = function(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in aJ;
  return(a.ctrlKey || a.metaKey) && a.keyCode in bJ || b;
};
var cJ = function(a, b) {
  a.Qi = 2;
  a.la = b;
  a.nd = (0,z.id)(b);
  a.uk = !1;
  a.sv = !1;
  b.setAttribute("g_editable", "true");
  b.setAttribute("role", "textbox");
};
var dJ = function(a) {
  a.Qi = ZI;
  for (var b in a.Ch) {
    var c = a.Ch[b];
    c.Rp() || c.disable(a);
  }
  a.la = null;
  a.nd = null;
};
var eJ = function(a) {
  a.Se && a.Se.Vi();
  if ((z.wy || z.xy) && a.je() && a.iC()) {
    try {
      var b = a.nd.pd();
      b.removeEventListener("keydown", a.km, !1);
      b.removeEventListener("touchend", a.km, !1);
    } catch (c) {
    }
    delete a.km;
  }
  if (z.Me && a.je()) {
    try {
      b = a.nd.pd(), b.removeEventListener("focus", a.uu, !1), b.removeEventListener("blur", a.tu, !1);
    } catch (d) {
    }
    delete a.uu;
    delete a.tu;
  }
  a.Cd && a.Cd.stop();
  a.tm.stop();
};
var gJ = function(a, b) {
  if (9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || z.Le && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), !1;
  }
  var c;
  (c = b.charCode) || (c = $I(b) ? !0 : !(!z.Le || b.ctrlKey || b.metaKey || z.Le && !b.charCode));
  a.hv = c;
  a.hv && a.um();
  return!0;
};
var hJ = function(a, b, c) {
  var d = {};
  a = a.aw(8, b || "", d);
  (0,z.lf)(c, d);
  z.D && (0,z.EE)(c);
  c.innerHTML = a;
};
var iJ = function(a, b) {
  if (!b.altKey) {
    var c = z.Mg ? b.metaKey : b.ctrlKey;
    if (c || jJ[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.Mm(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault();
    }
  }
};
var kJ = function(a, b, c) {
  for (var d = a.Mi[7], e = 0;e < d.length;++e) {
    var f = d[e];
    if (f.isEnabled(a) && f.Bf(b) && (c || f.Rp())) {
      return f.queryCommandValue(b);
    }
  }
  return c ? null : !1;
};
z.lJ = function(a) {
  return(a = a.nd && a.nd.pd()) && (0,z.YC)(a);
};
z.XH = function(a, b, c) {
  if (!mJ(a, "selectionchange")) {
    var d = (0,z.lJ)(a), d = d && (0,z.vD)(d);
    a.vv = !!d && (0,z.Jd)(a.V(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", pQ:b && b.type});
    a.Mm(4, b, c);
  }
};
var WH = function(a, b) {
  b && (a.Cd && MI(a.Cd), a.yg[UI] = 1);
  a.Cd && MI(a.Cd);
  MI(a.tm);
  a.yg[z.VI] = 1;
};
var nJ = function(a, b, c) {
  !b && a.Cd && MI(a.Cd);
  a.yg[UI] = 0;
  a.yg[z.VI] = 0;
  b && a.iv();
  c && a.wA();
};
var mJ = function(a, b) {
  return!!a.yg[b] || a.Nu[b] && 500 >= (0,z.hh)() - a.Nu[b];
};
var oJ = function(a) {
  (0,z.Od)(a.target, "A") && a.preventDefault();
};
z.pJ = function(a) {
  if (a.queryCommandValue("usinglorem")) {
    return " ";
  }
  if (!a.df()) {
    return a.Xb.innerHTML;
  }
  var b = a.V(), c = b.cloneNode(!1), b = b.innerHTML;
  z.D && b.match(/^\s*<script/i) && (b = " " + b);
  c.innerHTML = b;
  a.PJ(11, c);
  return a.aw(10, c.innerHTML);
};
var qJ = function(a) {
  z.D && (0,z.eF)(a.nd.pd());
  rJ != a.id && a.execCommand("updatelorem");
  if ((z.wy || z.xy) && a.je() && a.iC()) {
    var b = a.nd.pd();
    a.km = (0,z.wa)(b.focus, b);
    b.addEventListener("keydown", a.km, !1);
    b.addEventListener("touchend", a.km, !1);
  }
  z.Me && a.je() ? (a.uu = (0,z.wa)(a.Ru, a), a.tu = (0,z.wa)(a.vA, a), b = a.nd.pd(), b.addEventListener("focus", a.uu, !1), b.addEventListener("blur", a.tu, !1)) : (z.Ky ? (a.addListener("focus", a.xA), a.addListener(z.Ny, a.uA)) : a.addListener("focus", a.Ru), a.addListener("blur", a.vA, z.Le));
  z.Le ? z.Fy || !a.je() ? a.Se.qa(a.V(), "DOMSubtreeModified", a.kv) : (b = a.nd.ig(), a.Se.qa(b, sJ, a.kv, !0), a.Se.qa(b, "DOMAttrModified", (0,z.wa)(a.vJ, a, a.kv), !0)) : (a.addListener(["beforecut", "beforepaste", "drop", "dragend"], a.um), a.addListener(["cut", "paste"], jF(a.$j)), a.addListener("drop", a.PA));
  a.addListener(z.Td ? "dragend" : "dragdrop", a.PA);
  a.addListener("keydown", a.yq);
  a.addListener("keypress", a.SA);
  a.addListener("keyup", a.TA);
  a.hw = new LI(a.zJ, 250, a);
  z.Jy && a.addListener("click", oJ);
  a.addListener("mousedown", a.yJ);
  a.xw ? (a.Se.qa(a.nd.ig(), "mouseup", a.VA), a.addListener("dragstart", a.wJ)) : a.addListener("mouseup", a.VA);
  a.fB();
  nJ(a);
  a.dispatchEvent("load");
  for (var c in a.Ch) {
    a.Ch[c].enable(a);
  }
};
var tJ = function(a) {
  if (!(0,z.ga)(a.tv) && (a.tv = !1, z.D && a.je())) {
    for (var b = a.Dk.pd();b != b.parent;) {
      try {
        b = b.parent;
      } catch (c) {
        break;
      }
    }
    b = b.location;
    a.tv = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps");
  }
  return a.tv;
};
var uJ = function(a) {
  a.Zu && ((0,z.bx)(a.Zu), a.Zu = null);
};
var vJ = function(a) {
  a = "padding:0;" + a.Xb.style.cssText;
  (0,z.Aa)(a, ";") || (a += ";");
  a += "background-color:white;";
  z.D && (a += "overflow:visible;");
  return{frameBorder:0, style:a};
};
z.wJ = function(a) {
  z.$.call(this);
  this.oe = a;
};
var xJ = function(a) {
  var b = a.O.V(), c = a.oe - (0,z.jg)(b).length;
  b.setAttribute("data-chars-remaining", String(c));
  (0,z.Jc)(b, "display-char-count", c <= 0.25 * a.oe);
};
z.yJ = function(a) {
  this.id = a.id;
  this.anchor = a.anchor;
  this.startIndex = Number(a.startIndex);
  this.endIndex = Number(a.endIndex);
  this.content = a.content;
};
var zJ = function(a, b) {
  this.Ll = a;
  this.Tf = b;
};
z.AJ = function(a, b) {
  return b ? a.Tf && (0,z.vE)(a.Tf, b) || (0,z.vE)(a.Ll, b) : null;
};
var BJ = function(a, b, c) {
  function d(a) {
    var d = a.getAttribute("name");
    d && b.call(c, a, d);
  }
  a.Tf && JE(a.Tf, d);
  JE(a.Ll, d);
};
z.CJ = function(a, b) {
  return a.Tf && (0,z.Jd)(a.Tf, b) ? a.Tf : (0,z.Jd)(a.Ll, b) ? a.Ll : null;
};
z.DJ = function(a) {
  var b = [];
  a.Tf && b.push(a.Tf);
  b.push(a.Ll);
  return b;
};
z.EJ = function(a, b) {
  var c;
  c = (0,z.CJ)(a, b);
  return(c = (0,z.kg)(b, z.nE, c)) && c.getAttribute("name") || null;
};
z.FJ = function(a, b) {
  return(0,z.dF)(a, b).y + xE(a, "padding").top;
};
z.GJ = function(a, b, c) {
  var d = (0,z.tr)(c, (0,z.CJ)(a, c));
  if (d) {
    a = null;
    c = {};
    var e = (0,z.Dr)(b), f;
    for (f = 0;f < e.length;f++) {
      a = e[f], (0,z.za)(a, "section-") && (c[a] = !1);
    }
    d = (0,z.Dr)(d);
    for (f = 0;f < d.length;f++) {
      a = d[f], (0,z.za)(a, "section-") && (c[a + "-notes"] = !0);
    }
    for (var h in c) {
      (0,z.Jc)(b, h, c[h]);
    }
  }
};
z.HJ = function(a, b) {
  z.$.call(this);
  this.oe = a;
  this.Ow = b;
};
var IJ = function(a) {
  a = (0,z.VH)(a.O);
  for (var b = 0, c = 0;c < (0,z.IF)(a);c++) {
    b += (0,z.Z)(a, c).text.length;
  }
  return b;
};
z.JJ = function() {
  z.$.call(this);
};
z.KJ = function() {
  z.$.call(this);
};
var LJ = function() {
  var a = (0,z.G)("useragent");
  return "chrome" === a.family && "android" === a.os;
};
var MJ = function(a, b) {
  return(0,z.kg)(b, function(a) {
    return a.getAttribute && a.getAttribute("data-default-value");
  }, a.O.V(), !0);
};
var NJ = function(a) {
  var b = OJ(a);
  b && cF(a.firstChild, !0);
  return b;
};
var OJ = function(a) {
  var b = a.getAttribute("data-default-value");
  return b ? a.getAttribute && "true" == a.getAttribute("g_editable") ? (a = (0,z.wr)(a), 1 === a.length && (0,z.jg)(a[0]).trim().toLowerCase() == b.toLowerCase()) : (0,z.jg)(a).trim().toLowerCase() == b.toLowerCase() : !1;
};
var PJ = function() {
  z.$.call(this);
};
var QJ = function(a, b) {
  SI.call(this, a, b);
};
var RJ = function(a) {
  SI.call(this, a, void 0);
  this.Ty = this.Kp = !1;
  this.Gl = null;
};
z.VH = function(a) {
  if (a.Gl) {
    var b = a.Gl, c = (0,z.lJ)(a);
    b.Ie = [];
    b.Ie.length = b.mb.length;
    b.Gg = null;
    b.mc = zF(b, c);
    b.jt = !1;
  } else {
    for (var b = a.V(), c = (0,z.wr)(b), d = 0;d < c.length;d++) {
      (0,z.fd)(c[d].getElementsByTagName("*"), z.qr);
    }
    a.Gl = new z.xF(b, (0,z.lJ)(a), {hr:a.nb(), gr:!1});
  }
  a = a.Gl;
  a.mb[0] || ((0,z.wH)(a, 0, new z.rl("", 1, "")), a.If(0, 0));
  return a;
};
var SJ = function(a) {
  this.ou = a;
  this.CA = [];
};
z.TJ = function(a) {
  if (!a.Iu) {
    var b = a.od(), b = (0,z.dE)(b);
    a.Iu = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : (0,z.fF)(a.od());
  }
  return a.Iu;
};
z.UJ = function(a) {
  a = a.od();
  if (z.My) {
    var b;
    b = a.nextSibling;
    b && b.nodeType == z.ue && ((0,z.za)(b.data, " ") || (0,z.za)(b.data, " ")) || (b = (0,z.id)(a).createTextNode(" "), (0,z.Bd)(b, a));
    AE(b, 1).select();
  } else {
    cF(a, !1);
  }
};
var VJ = function(a) {
  a = new SJ(a);
  a.od().href = "/";
  return a;
};
var WJ = function(a) {
  if (/\s/.test(a) || XJ.test(a)) {
    return!1;
  }
  var b = !1;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = !0);
  a = (0,z.vh)(a);
  if (-1 != (0,z.Ya)(["mailto", "aim"], a[1])) {
    return!0;
  }
  var c = a[3];
  if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c)) {
    return!1;
  }
  b = a[5];
  return!b || 0 == b.indexOf("/");
};
var YJ = function(a) {
  this.XE = a;
};
var ZJ = function(a, b) {
  this.cc = a;
  this.Gp = b;
};
var $J = function(a, b) {
  this.cc = a;
  this.Gp = b;
};
z.aK = function() {
  z.$.call(this);
  this.Ng = {};
  this.dy = null;
  this.At = !1;
};
var bK = function(a) {
  for (var b in a.Ng) {
    delete a.Ng[b];
  }
};
var cK = function(a) {
  if (!a.At) {
    return!0;
  }
  var b = a.dy, c = (0,z.lJ)(a.O);
  if (!c || !c.isCollapsed()) {
    return!0;
  }
  c = dK(a, c);
  if (!b || !c) {
    return!0;
  }
  var d;
  d = b.R;
  var e = c.R;
  if ((d = d == e || d.getAttribute("name") && d.getAttribute("name") == e.getAttribute("name")) && c.offset === b.offset) {
    return!1;
  }
  if (!(d && c.offset > b.offset)) {
    return!0;
  }
  b = (0,z.CI)(c.R, b.offset, c.R, c.offset);
  if (!b) {
    return!0;
  }
  b.select();
  for (var f in a.Ng) {
    a.Ng[f] && a.execCommand(f);
  }
  a = (0,z.YC)();
  if (!a) {
    return!0;
  }
  a.collapse(!1);
  a.select();
  return!0;
};
var dK = function(a, b) {
  var c = a.O.V(), d = GD(b, !1);
  return(c = (0,z.KE)(d.R, c)) ? new yD(c, uE(d, c)) : null;
};
var eK = function(a) {
  var b = a.O;
  if (a.queryCommandValue("M_3")) {
    (0,z.TH)(new $J(3, !1), b);
  } else {
    var c = String((0,z.pa)({}));
    a = new z.SH;
    var d = !1;
    a.Um = function(a, b, h) {
      h === b || d || ((0,z.vl)(a, (0,z.zl)(b, h, "/", c, "")), d = !0);
    };
    (0,z.TH)(a, b);
    a = b.V().querySelector('a[title\x3d"' + c + '"]');
    a.removeAttribute("title");
    a = VJ(a);
    b.execCommand("link", a);
  }
};
var fK = function() {
  z.$.call(this);
};
var gK = function(a) {
  z.cI.call(this);
  this.zA = a;
  this.Av = new z.PI(this);
  this.bf = new z.PI(this);
  hK && this.bf.qa(a, "compositionstart", this.uJ).qa(a, "compositionend", this.tJ).qa(a, "compositionupdate", this.WA);
  this.bf.qa(a, "textInput", this.AJ).qa(a, "text", this.WA).qa(a, "keydown", this.yq);
};
var iK = function(a, b) {
  z.Sw.call(this, a);
  this.reason = b;
};
var jK = function(a, b) {
  a.qh || (z.Td && !hK && a.Av.qa(a.zA, "keyup", a.xJ), a.qh = !0, a.dispatchEvent(new iK("startIme", b)));
};
var kK = function(a, b) {
  a.qh = !1;
  a.Av.Vi();
  a.dispatchEvent(new iK("endIme", b));
};
var lK = function(a) {
  switch(a.keyCode) {
    case 16:
    ;
    case 17:
      return!1;
    default:
      return!0;
  }
};
var mK = function() {
  z.$.call(this);
  this.no = null;
};
var nK = function() {
  z.$.call(this);
  this.Tt = {};
  this.fo = {};
};
var oK = function() {
  z.$.call(this);
  this.sa = [];
};
var pK = function(a) {
  return a.nodeType == z.ue ? !1 : (0,z.Lc)(a, "drop-cap");
};
var qK = function(a) {
  var b = a.target;
  return z.Td && "LI" == b.tagName && a.clientX < (0,z.sg)(b).left;
};
var rK = function(a, b, c, d) {
  var e = (0,z.lJ)(a.O);
  if (d && !e.lh() && "LI" === e.Fa().tagName) {
    return!0;
  }
  var f = GD(e, d), e = f.R, h = b.getSelection();
  d = d ? h.start : h.end;
  return null == GH(b, f) ? (f = sK(a, e, c), f || (c = !c, f = sK(a, e, c)), f && (a = (0,z.EH)(b, f), -1 != a && (d.S = a, d.offset = c ? 0 : (0,z.Z)(b, a).text.length)), !0) : (b = (0,z.KE)(e, a.O.V())) && 1 === d.offset && (0,z.Ar)(b) && (0,z.kg)(e, pK, b) ? (d.offset = c ? 2 : 0, !0) : !1;
};
var sK = function(a, b, c) {
  var d = a.O.V(), e = null;
  (0,z.$C)(new z.Yd(b, !c, !0), function(a) {
    if (a === d) {
      throw z.Wd;
    }
    if ((0,z.qr)(a)) {
      throw e = a, z.Wd;
    }
  }, a);
  return e;
};
var tK = function() {
  z.$.call(this);
};
var uK = function() {
  z.$.call(this);
};
z.vK = function(a) {
  z.Uh.call(this);
  var b = a.id;
  b || (b = a.id = "editor_" + (0,z.pa)(a));
  this.Qx = b;
  this.Rl = [];
  this.pz = new nK;
  this.ka(new fK);
  this.ka(new PJ);
  this.ka(new mK);
  this.ka(new oK);
  this.Mx = new z.PI(this);
  a = (0,z.xa)(z.C, this.Mx);
  this.Xm || (this.Xm = []);
  this.Xm.push((0,z.wa)(a, void 0));
  this.Gj = !1;
};
var wK = function(a) {
  return{Ve:!0, isPublished:!0, media:null, sections:a.nb()};
};
z.xK = function() {
  z.$.call(this);
};
z.yK = function(a) {
  z.$.call(this);
  this.Sr = (0,z.zK)(a);
};
z.zK = function(a) {
  var b = window.document.createElement("div");
  b.innerHTML = a;
  return b.textContent;
};
var AK = function(a) {
  var b = a.O, c = (0,z.VH)(b);
  a = new z.rl((0,z.Z)(c, 0).name, 1, a.Sr);
  (0,z.uH)(c, 0, a);
  (0,z.w)(b.V(), "default-value");
};
var BK = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    if (c = d.nextSibling, d.nodeType != z.ue) {
      if (1 != d.nodeType) {
        (0,z.Dd)(d);
      } else {
        var e = b.he[d.tagName] || b.Ou;
        if (!e) {
          throw Error("Missing default tag policy");
        }
        if (e.wh) {
          if (e.de) {
            for (var f = (0,z.ka)(e.de) ? e.de : "", f = f && f != d.tagName ? window.document.createElement(f) : null, h = d.attributes.length - 1;0 <= h;h--) {
              var k = d.attributes[h].nodeName, l = d.getAttribute(k);
              (l = jD(e, k, l)) ? (f || d).setAttribute(k, l) : f || d.removeAttribute(k);
            }
            f && ((0,z.Ad)(f, d.childNodes), (0,z.Bd)(f, d), (0,z.Dd)(d), d = f);
            BK(d, e.Yc);
          } else {
            for (;d.lastChild;) {
              (0,z.Bd)(d.lastChild, d);
            }
            c = d.nextSibling;
            (0,z.Dd)(d);
          }
        } else {
          (0,z.Dd)(d);
        }
      }
    }
  }
};
z.CK = function(a) {
  z.$.call(this);
  this.qt = a;
};
z.DK = function(a, b) {
  z.$.call(this);
  this.yz = this.Ne = this.Ls = this.ds = !1;
  this.sa = [];
  this.ky = [];
  this.L = "";
  this.Gq = sI;
  this.ww = uI;
  this.view = z.LE;
  this.ga = b;
  this.cn = null;
  this.gw = a;
  this.Ha = new z.Sh;
  this.C = this.Ha.C.bind(this.Ha);
  this.xa = this.Ha.xa.bind(this.Ha);
  this.Kt = this.Sb = null;
};
var EK = function(a) {
  var b = a.Sb.querySelector(".active");
  b && (a.Kt && a.Kt.cancel(), b = b.getAttribute("data-action-value"), (0,z.TH)(hI([a.ww(b), a.Gq]), a.O), a.Ha.Q("select"));
  FK(a);
};
var GK = function(a, b) {
  if (a.Ne) {
    switch(b.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        b.preventDefault();
        break;
      case 38:
        b.preventDefault();
        var c = a.Sb.querySelector(".active");
        c && (0,z.x)(c, "active");
        (c = c && c.previousSibling) || (c = a.Sb.querySelector(".typeahead-item:last-child"));
        (0,z.w)(c, "active");
        break;
      case 40:
        b.preventDefault(), HK(a);
    }
    b.stopPropagation();
  }
};
var HK = function(a) {
  var b = a.Sb.querySelector(".active");
  b && (0,z.x)(b, "active");
  (b = b && b.nextSibling) || (b = a.Sb.querySelector(".typeahead-item"));
  (0,z.w)(b, "active");
};
var FK = function(a) {
  a.Ne && (0,z.Dd)(a.Sb);
  a.Ne = !1;
};
var IK = function(a, b, c, d, e) {
  z.vK.call(this, b);
  this.da = a;
  this.ka(new z.yK(c));
  this.ka(new z.KJ);
  this.ka(new z.DI(!1));
  this.ka(new z.CK(z.jz));
  1E3 <= window.innerWidth && (this.gm = new z.DK((0,z.Wm)((0,z.Wr)(a.get("app"))), a.get("request")), this.ka(this.gm));
  this.ka(new z.xK);
  this.ka(new z.II(!1));
  this.ka(new z.HJ(d, !0));
  this.Gj = !0;
  this.oe = d;
  this.jd = a.get("request");
  this.W = a.get("dialog");
  this.uF = e;
  this.H();
};
var JK = function(a) {
  a.ud(a.Wh);
  a.Q("cancel");
};
var KK = function(a, b, c, d) {
  IK.call(this, a, b, "Leave a note", 400, d || null);
  this.U = c;
};
var LK = function(a, b, c) {
  a.rr = b;
  a.Pw = c;
};
z.MK = function(a, b, c, d) {
  a.ns = b;
  a.ms = c;
  a.Ox = d;
};
var NK = function(a) {
  return'\x3cdiv class\x3d"notes-marker no-user-select" data-action\x3d"select-anchor" data-action-value\x3d"' + (0,z.P)(a.Up) + '"\x3e' + OK(a) + "\x3c/div\x3e";
};
var OK = function(a) {
  return'\x3cspan class\x3d"notes-marker-icon icons icons-notes"\x3e\x3c/span\x3e' + ("remove" == a.count ? '\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"notes-marker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"notes-marker-count"\x3e' + (0,z.O)(a.count) + "\x3c/span\x3e");
};
var PK = function(a, b, c) {
  return'\x3cdiv class\x3d"notes-list-fade"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-list-fade-bottom"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-container-scroller"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-dismiss" data-action\x3d"dismiss-note"\x3e' + OK({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notes-list"\x3e\x3cdiv class\x3d"notes-items"\x3e\x3c/div\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-new-note" tabIndex\x3d"-1"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-add" data-action\x3d"start-note"\x3e\x3cspan class\x3d"notes-add-icon icons icons-add-circled"\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-text"\x3eLeave a note for \x3cspan class\x3d"notes-post-creator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-creator-text"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"notes-edit notes-edit-mode"\x3e' + 
  (0,z.eo)({iq:!0, vc:"notes-avatar notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (0,z.O)(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notes-note-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-disclaimer"\x3eThis note is only visible to you and the author, unless the author chooses to make it public.\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : 
  QK({CC:"note"})) + '\x3c/div\x3e\x3cdiv class\x3d"notes-spacer"\x3e\x26nbsp;\x3c/div\x3e\x3c/div\x3e';
};
var RK = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notes-note-inner"\x3e\x3cdiv class\x3d"notes-note-main"\x3e' + ('\x3cspan class\x3d"notes-state-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notes-controls"\x3e' + (a.canAdminister ? '\x3cul class\x3d"notes-state notes-state-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.Uv.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notes-state"\x3e\x3cli data-tooltip\x3d"This note is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + 
  (0,z.P)(a.note.anchor) + "-" + (0,z.P)(a.note.noteId) + '" class\x3d"notes-link icons icons-link" data-tooltip\x3d"Click to update the address bar with this note’s shareable URL"\x3e' : "") + "\x3c/div\x3e" + (0,z.eo)({Rb:"notes-avatar", vc:"notes-author-icon", user:a.note.author}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (d ? '\x3ca href\x3d"/@' + (0,z.P)(a.note.author.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.note.author.name) + '"\x3e' + (0,z.O)(a.note.author.name) + "\x3c/a\x3e" : 
  "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.pi)(String(a.note.Di).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, f = Math.max(a.note.replies.length - a.xh, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notes-replies ' + (0 < f ? "notes-replies-hidden" : "") + '"\x3e\x3cdiv class\x3d"notes-replies-inner"\x3e';
    if (0 < f) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"btn btn-chromeless notes-replies-hidden-btn"\x3eView ' + (0,z.O)(f) + " " + (a.xh ? "more" : "") + " " + (1 < f ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notes-replies-hidden-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var m = h[l];
        b += l < f ? SK((0,z.L)(a, {sd:m}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      m = h[l], b += l >= f ? SK((0,z.L)(a, {sd:m}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  return b += '\x3cdiv class\x3d"notes-replies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-reply notes-reply-edit notes-edit-mode"\x3e' + (0,z.eo)({Rb:"notes-avatar", vc:"notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e\x3ca href\x3d"/@' + (0,z.P)(c.currentUser.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(c.currentUser.name) + '"\x3e' + (0,z.O)(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-reply-editor notes-editor"\x3eLeave a reply\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-link-reply" data-action\x3d"start-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3e' + (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + 
  (0,z.O)(a.note.author.name)) + "\x3c/button\x3e" : QK({CC:"reply"})) + "\x3c/div\x3e\x3c/div\x3e";
};
var SK = function(a, b) {
  return'\x3cdiv class\x3d"notes-reply"\x3e' + (a.canAdminister && a.sd.author.userId != b.currentUser.userId ? '\x3cdiv class\x3d"notes-hide-reply" data-action\x3d"hide-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + "," + (0,z.P)(a.sd.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + (0,z.eo)({Rb:"notes-avatar", vc:"notes-author-icon", user:a.sd.author}, b) + '\x3cdiv class\x3d"notes-author"\x3e' + (a.sd.author ? 
  '\x3ca href\x3d"/@' + (0,z.P)(a.sd.author.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.sd.author.name) + '"\x3e' + (0,z.O)(a.sd.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.pi)(String(a.sd.Di).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (b.isAuthenticated ? a.sd.author && a.sd.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + "," + (0,z.P)(a.sd.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + (0,z.P)(a.sd.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.P)(a.sd.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  (0,z.P)(a.sd.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e";
};
z.TK = function() {
  return'\x3cdiv class\x3d"notes-vote-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator" data-action\x3d"save-notes-vote"\x3eShare\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"cancel-notes-vote"\x3eNo thanks\x3c/button\x3e\x3c/div\x3e';
};
var QK = function(a) {
  return'\x3ca class\x3d"btn btn-chromeless notes-add notes-add-sign-in" title\x3d"Sign in with Twitter to leave a note" data-action\x3d"sign-in-with-twitter" href\x3d"/m/account/authenticate-twitter"\x3e\x3cspan class\x3d"icons icons-twitter notes-add-icon"\x3e\x3c/span\x3eSign in with Twitter to leave a ' + (0,z.O)(a.CC) + "\x3c/a\x3e";
};
var UK = function(a, b, c) {
  z.Uh.call(this);
  this.SH = a;
  this.aa = b;
  this.Md = c;
  a = window.document.createElement("div");
  a.className = "notes-markers";
  (0,z.Bd)(a, this.SH);
  this.di = a;
  this.Sc = {};
  this.He = this.sj = null;
};
z.VK = function(a, b, c) {
  var d = a.Md.get(b);
  if (d) {
    (0,z.Jc)(d, "notes-source-active", c);
    var e = a.Sc[b];
    e && ((0,z.Jc)(e, "notes-active", c), c = (0,z.pf)(d, "float"), e.style.left = "left" == c ? "0" : -1 * xE(d, "margin").right + "px", a = (0,z.AJ)(a.Md, b)) && (a = (0,z.Jm)(a.className), (0,z.Jc)(e, "notes-source-floated", 2 == a || 4 == a));
  }
};
var WK = function(a) {
  var b = {};
  BJ(a.Md, function(a, d) {
    d in b || (b[d] = (0,z.FJ)(a, this.di));
  }, a);
  return b;
};
var XK = function(a) {
  var b = WK(a), c = {};
  BJ(a.Md, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.Sc[d]) {
        h = this.Sc[d];
      } else {
        h = (h = (0,z.YK)(this.aa, d)) ? h.count() : 0;
        var k = (0,z.xd)((0,z.H)(NK, {count:h, Up:d}));
        this.di.appendChild(k);
        0 < h && ((0,z.w)(a, "notes-source-hasnotes"), (0,z.w)(k, "notes-hasnotes"));
        h = this.Sc[d] = k;
      }
      h.style.top = b[d] + "px";
      (0,z.VK)(this, d, d == this.aa.pa);
      c[d] = !0;
      (0,z.GJ)(this.Md, h, a);
    }
  }, a);
  for (var d in a.Sc) {
    c[d] || ((0,z.Dd)(a.Sc[d]), delete a.Sc[d]);
  }
};
z.ZK = function(a, b) {
  if (a.aa.df()) {
    var c = b || a.aa.pa, d = a.Sc[c], c = (0,z.YK)(a.aa, c).sc();
    d.innerHTML = (0,z.H)(OK, {count:c});
    (0,z.Jc)(d, "notes-hasnotes", 0 < c);
  }
};
var $K = function(a, b, c) {
  z.Sh.call(this);
  this.wy = {};
  this.vl = {};
  this.Uy = {};
  this.ag = null;
  this.da = a;
  this.jd = a.get("request");
  this.U = b;
  this.po = c;
  this.ll = !1;
  this.pa = "";
};
z.aL = function(a, b, c) {
  a = (0,z.YK)(a, c);
  return(0,z.lj)(a, "id", b);
};
z.YK = function(a, b) {
  var c = a.wy[b];
  c || (c = a.wy[b] = new z.jj, a.Q("new_note_list", c, a));
  return c;
};
var bL = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.text;
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = RegExp((0,z.Oa)(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var cL = function(a, b, c) {
  var d = (0,z.gj)(b, "id"), e = (0,z.YK)(a, (0,z.gj)(b, "anchor")), f = e ? e.indexOf(b) : -1;
  b.get("state");
  b.set("state", c);
  c == z.dL && (0,z.ij)(b);
  var h = e ? e.indexOf(b) : -1;
  return{pc:a.jd.put("/p/" + a.U + "/notes/" + d + "/state", {state:c}, {ma:!0}), bC:function() {
    -1 == h && (-1 == f ? e.add(b) : e.bh(b, f));
  }};
};
z.eL = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.Up = b.getAttribute("name");
  this.qd = c;
};
var fL = function(a, b, c, d, e) {
  IK.call(this, a, b, "Leave a reply", 200, d);
  this.U = c;
  this.It = e || null;
};
var gL = function(a) {
  z.B.call(this);
  var b = (0,z.YC)();
  this.dm = b && new hL(GD(b, !0), a);
  this.bs = b && new hL(GD(b, !1), a);
};
var hL = function(a, b) {
  this.gd = a;
  this.WD = b;
  var c = (0,z.KE)(a.R, b);
  this.Rw = (this.qr = c) && c.getAttribute("name");
  this.yy = c ? uE(a, c) : -1;
};
var iL = function(a) {
  var b = window.document.body;
  return(0,z.Jd)(b, a.gd.R) ? a.gd : a.qr && (0,z.Jd)(b, a.qr) ? WE(a.yy, a.qr) : a.Rw && (b = (0,z.vE)(a.WD, a.Rw)) ? WE(a.yy, b) : null;
};
var jL = function() {
  return "Are you sure you want to delete this note?";
};
var kL = function() {
  return "Your note is too long, do you want to abandon your changes?";
};
z.lL = function(a, b, c, d) {
  z.B.call(this);
  this.Kk = a;
  this.screen = a.get("screen");
  this.Tj = a.get("app");
  this.Qq = b;
  this.Qq.C("change", this.Ix, this);
  this.Mb = {};
  this.hb = [];
  this.vi = a.get("butter-bar");
  this.Zj = a.get("dialog");
  this.ke = c;
  this.Zc = null;
  var e = c.querySelector(".notes-source");
  this.anchors = new zJ(e, null);
  var f = kE("div", "layout-single-column notes-position-container");
  (0,z.Cd)(this.ke, f, 0);
  this.Tv = f;
  this.Db = this.jl();
  this.si = c.querySelector(".body");
  this.ob = this.Db.querySelector(".notes-list");
  this.zB = this.Db.querySelector(".notes-spacer");
  this.Hf = (0,z.og)(e);
  this.isAuthenticated = !!(0,z.G)("isAuthenticated");
  this.currentUser = (0,z.G)("currentUser");
  this.postId = (0,z.gj)(b, "id");
  this.canAdminister = d;
  this.rv = "true" == this.si.contentEditable;
  this.data = new $K(a, this.postId, this.rv);
  this.data.C("new_note_list", this.rG, this);
  this.xc = new UK(this.Db, this.data, this.anchors);
  this.xc.H();
  this.rm = (0,z.r)(this.data.load(), this.Hv, this);
  (0,z.Eg)(this.xc.di).D("select-anchor", this.Mv, this);
  (0,z.Eg)(this.Db).D("show-hidden-note-replies", this.HB, this).D("start-reply", this.JG, this).D("save-reply", this.DG, this).D("edit-reply", this.$F, this).D("cancel-reply", this.IF, this).D("delete-reply", this.SF, this).D("approve-note", this.DF, this).D("unapprove-note", this.PG, this).D("edit-note", this.ZF, this).D("save-note", this.BG, this).D("cancel-note", this.HF, this).D("delete-note", this.RF, this).D("hide-note", this.fG, this);
  (0,z.zg)("cancel-notes-vote", this.Gv, this).D("save-notes-vote", this.CG, this);
  this.Tj.C("historyUpdate", this.iG, this);
};
var mL = function(a) {
  if (a.Sa && a.Sa.ok()) {
    return!0;
  }
  for (var b in a.Mb) {
    if (a.Mb[b].ok()) {
      return!0;
    }
  }
  return!1;
};
var nL = function(a) {
  var b = new z.nc, c = a.Zj.open({title:"Uh oh!", bodyHtml:"You have unsaved notes. Are you sure you want to abandon them?", type:z.pB});
  c ? (c.C(z.qB, b.Ba.bind(b, !0)), c.C(z.rB, function() {
    this.GA();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var oL = function(a) {
  (0,z.C)(a.Sa);
  a.Sa = null;
  for (var b in a.Mb) {
    (0,z.C)(a.Mb[b]), delete a.Mb[b];
  }
};
var pL = function(a, b, c) {
  var d = b.get("state"), e = "PUBLIC" == c ? "Note was made public" : c == z.dL ? "Note was dismissed" : "NEW" == c ? "Note was made private" : "", f = cL(a.data, b, c);
  (0,z.t)((0,z.r)(f.pc, function() {
    (0,z.r)(this.vi.H(e, {type:z.gp, Tk:!0}), function() {
      f.bC();
      pL(this, b, d);
    }, this);
    (0,z.qL)(this, z.Nz, b, {noteState:c, previousNoteState:d});
  }, a), function() {
    this.vi.H("Could not change note state", "error");
    f.bC();
    pL(this, b, d);
  }, a);
  return f.pc;
};
var rL = function(a, b) {
  var c = b.value;
  return c ? a.Mb[c] : a.Sa;
};
var sL = function(a, b) {
  var c = a.data.kg(a.anchors.get(b));
  return c ? c.text : "";
};
z.tL = function(a) {
  return a.data.pa ? !!(0,z.YK)(a.data, a.data.pa).count() : !1;
};
z.uL = function(a, b) {
  var c = b || a.re, d = (0,z.aL)(a.data, c, a.data.pa), e = a.ob.querySelector('[data-note-id\x3d"' + c + '"]');
  (0,z.w)(e, "notes-show-reply-editor");
  var f = a.Mb["reply_" + c];
  f || (e = e.querySelector(".notes-reply-editor"), f = new fL(a.Kk, e, a.postId, c), f.C("change", a.ih, a), f.C("cancel", function() {
    f.clear();
  }, a), f.C("save", function(a) {
    f.clear();
    d.add("replies", a);
    (0,z.qL)(this, z.Oz, d, {replyId:a.id});
  }, a), a.Mb["reply_" + c] = f);
  f.focus();
};
z.qL = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = (0,z.gj)(c, "id");
  d.noteType = c.get("highlightId") ? "highlight" : "paragraph";
  (0,z.yj)(b, d);
};
z.vL = function(a, b, c) {
  var d = (0,z.YC)(), d = d && (0,z.CJ)(a.anchors, (0,z.vD)(d)), e = c && d && new gL(d);
  (0,z.r)((0,z.wL)(a, b && b.anchor || a.data.pa), function() {
    if (b != this.Sd) {
      var a = this.Sd;
      a && (0,z.xL)(this, a, !1);
      b && (0,z.xL)(this, b, !0);
      this.Sd = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
z.xL = function(a, b, c) {
  var d = b.anchor, e = (0,z.AJ)(a.anchors, d);
  if (e = a.data.kg(e)) {
    (0,z.wl)(e, 4);
    if (c) {
      if (!bL(b, e)) {
        return;
      }
      (0,z.vl)(e, (0,z.Al)(b.startIndex, b.endIndex, b.id));
    }
    a.anchors.get(d).innerHTML = (0,z.um)(e, z.Yf, {Ve:!a.rv, isPublished:!a.Qq.get("latestPublishedVersion"), media:null, sections:!0});
  }
};
z.yL = function(a, b, c) {
  if (b != a.re) {
    c || (0,z.Yr)(a.Tj, "");
    (c = a.ob.querySelector(".notes-active-note")) && (0,z.x)(c, "notes-active-note");
    c = a.re = null;
    if (b && a.data.pa) {
      var d = (0,z.aL)(a.data, b, a.data.pa);
      d && (c = a.ob.querySelector('[data-note-id\x3d"' + b + '"]')) && ((0,z.w)(c, "notes-active-note"), a.re = b, b = (0,z.gj)(d, "highlightId"), (0,z.vL)(a, (b ? a.data.vl[b] || null : null) || null));
    }
    (0,z.Jc)(a.ob, "notes-note-selected", !!c);
  }
};
z.wL = function(a, b) {
  var c = b != a.data.pa;
  if (c && mL(a)) {
    return(0,z.r)(nL(a), function() {
      oL(this);
      return(0,z.wL)(this, b);
    }, a);
  }
  a.Sd && ((0,z.xL)(a, a.Sd, !1), a.Sd = null);
  if (!c) {
    return(0,z.Ec)();
  }
  (0,z.yL)(a, null);
  a.data.pa && (0,z.VK)(a.xc, a.data.pa, !1);
  oL(a);
  (0,z.C)(a.Df);
  a.Df = null;
  (0,z.w)(a.ob, "notes-hide-editor");
  a.data.pa = b && a.xc.Sc[b] ? b : "";
  a.data.pa ? a.im() : a.Mu();
  a.ih();
  return(0,z.Ec)();
};
z.zL = function() {
  var a = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), b = a[1] || null;
  return{hA:a[2] || null, anchor:a[0], qd:b && {startIndex:Number(a[3]), endIndex:Number(a[4]), id:b}};
};
z.AL = function(a, b) {
  if (a.isAuthenticated) {
    (0,z.C)(a.Sa);
    var c = a.L(".notes-note-editor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof z.eL) {
        e = b.qd, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.Sa = new KK(a.Kk, c, a.postId);
    LK(a.Sa, d, sL(a, d));
    e && (0,z.MK)(a.Sa, e.startIndex, e.endIndex, e.content);
    a.Sa.C("change", a.ih, a);
    a.Sa.C("save", a.Kv, a);
    a.Sa.C("cancel", function() {
      (0,z.YK)(this.data, d).count() ? (0,z.w)(this.ob, "notes-hide-editor") : (0,z.wL)(this, null);
      (0,z.yL)(this, null);
    }, a);
    (0,z.x)(a.ob, "notes-hide-editor");
  }
};
z.BL = function(a, b, c, d) {
  IK.call(this, a, b, "Tell your followers why you’re recommending this story", 100, d || null);
  this.U = c;
};
z.CL = function(a, b) {
  z.vK.call(this, a);
  this.ka(new z.xK);
  this.ka(new z.yK(b));
  this.ka(new z.KJ);
  this.ka(new z.DI(!1));
  this.ka(new z.CK(z.iz));
  this.ka(new z.II(!1));
  this.Gj = !0;
};
z.DL = function(a, b) {
  this.Nr = b;
  this.cf = a;
  this.WG = z.Pk.ia(this.cf);
  this.strategy = "resample";
};
var EL = function(a, b) {
  var c = {imageId:b.yb()}, d = b.Yd(), e = b.pq();
  if ("object" == typeof a.strategy) {
    d = a.strategy["*"] || a.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  } else {
    c.strategy = a.strategy;
  }
  e && (c.filter = e);
  return c;
};
var FL = function(a, b) {
  return a.wq(a.cf, b);
};
var GL = function(a, b, c) {
  a.cf.Zq(b).Yq(c);
};
z.HL = function(a, b, c, d, e) {
  this.of = a.get("image");
  this.gF = a.get("loading-indicator");
  this.Ha = b;
  this.element = c;
  this.aa = d;
  this.$a = e;
  this.Un = this.element.querySelector("[data-scroll]");
};
var IL = function(a) {
  for (var b = "full" == a.aa.Yd() ? ["full"] : ["contain", "cover"], c = 0;c < b.length;c++) {
    var d = a.aa.wq(a.aa.va().Lk(b[c]));
    a.of.load(d);
  }
};
var JL = function(a) {
  var b = a.aa.WG;
  b.yb() ? (a.Jf(b.yb()), KL(a, b.Yd()), GL(a.aa, b.Hi(), b.Bm()), LL(a, FL(a.aa))) : a.Jf("");
};
var KL = function(a, b) {
  if (a.aa.yb()) {
    var c = a.aa.Yd();
    a.aa.Lk(b);
    var d = FL(a.aa);
    (0,z.tc)(a.of.load(d), function() {
      this.aa.Yd() == b && ((0,z.Jc)(this.element, "layout-single-column", "contain" == b), (0,z.x)(this.element, "background-size-" + c), (0,z.w)(this.element, "background-size-" + b), LL(this, d));
    }, a);
  }
};
var ML = function(a) {
  if (a.aa.yb()) {
    var b = FL(a.aa);
    a.gF.wa((0,z.tc)(a.of.load(b), function() {
      LL(this, b);
    }, a));
  }
};
var LL = function(a, b) {
  if (b != a.aa.Nr) {
    var c = a.MA();
    a.aa.Nr = b || "";
    b ? (a.cr(c, b), (c = c.nextElementSibling) && (0,z.Lc)(c, "picker-target-blur") && a.cr(c, FL(a.aa, !0))) : (a.mv(c), GL(a.aa, 0, 0));
    a.Ha.Q(z.NL);
  }
};
var OL = function(a, b) {
  z.Uh.call(this);
  this.ja = a;
  this.ub = b;
};
var PL = function(a, b) {
  z.B.call(this);
  this.mj = a;
  this.Hp = b;
  this.au = a;
  this.dp = "";
  this.fu = this.fg = null;
};
var QL = function(a, b) {
  a.au = b;
  return a;
};
var RL = function(a) {
  a.dp = "pre-transition-picker-image";
  return a;
};
var SL = function(a, b) {
  z.Sh.call(this);
  this.ja = b;
  this.aa = a;
  this.$a = TL;
  this.Cr = (0,z.Ec)();
};
var UL = function(a, b, c, d, e) {
  z.Uh.call(this);
  this.Ha = a;
  this.ja = b;
  this.aa = c;
  this.$a = d;
  this.yc = e;
};
var VL = function(a, b) {
  var c = a.ja.querySelector(".picker-content").offsetHeight, d = new PL(a.ja, "transition-picker-layout");
  a.ja.style.height = a.ja.offsetHeight;
  (0,z.tg)(a.ja);
  d = d.start();
  a.ja.style.height = c + "px";
  (0,z.Mc)(a.ja, "picker-layout-fill", "picker-layout-inline");
  (0,z.tc)(d, function() {
    this.ja.style.height = "";
  }, a);
  (0,z.vc)(b, d);
};
var WL = function(a, b) {
  var c = a.ja.querySelector(".picker-content").offsetHeight, d = new PL(a.ja, "transition-picker-layout");
  (0,z.Mc)(a.ja, "picker-layout-inline", "picker-layout-fill");
  var e = (0,z.pf)(a.ja, "height");
  (0,z.Mc)(a.ja, "picker-layout-fill", "picker-layout-inline");
  a.ja.style.height = c + "px";
  (0,z.tg)(a.ja);
  c = d.start();
  (0,z.Mc)(a.ja, "picker-layout-inline", "picker-layout-fill");
  a.ja.style.height = e;
  (0,z.tc)(c, function() {
    this.ja.style.height = "";
  }, a);
  (0,z.vc)(b, c);
};
var XL = function(a, b, c) {
  for (var d = [], e = 0;e < c;e++) {
    d.push(a[b + e]);
  }
  return d;
};
var YL = function(a, b) {
  return XL(a, b, 2).map(function(a) {
    return a.toString(16);
  }).join("");
};
var ZL = function(a, b, c) {
  return(a[b + (c ? 1 : 0)] << 8) + a[b + (c ? 0 : 1)];
};
var $L = function(a, b, c) {
  a = (((a[b + (c ? 3 : 0)] << 8) + a[b + (c ? 2 : 1)] << 8) + a[b + (c ? 1 : 2)] << 8) + a[b + (c ? 0 : 3)];
  0 > a && (a += 4294967296);
  return a;
};
var aM = function(a) {
  var b = new z.nc, c = new window.FileReader;
  c.onload = function(c) {
    var e = bM(new window.Uint8Array(c.target.result)), f = window.URL.createObjectURL(a);
    if (1 == e) {
      b.Ba(f);
    } else {
      var h = new window.Image;
      h.onload = function() {
        var a, c;
        1E3 < h.width ? (a = 1E3, c = 1E3 * h.height / h.width) : (a = h.width, c = h.height);
        var d = window.document.createElement("canvas"), q = d.getContext("2d");
        6 == e || 8 == e ? (d.width = c, d.height = a) : (d.width = a, d.height = c);
        var s = Math.max(a, c);
        q.translate(s / 2, s / 2);
        switch(e) {
          case 3:
            q.rotate(Math.PI);
            break;
          case 6:
            q.rotate(Math.PI / 2);
            break;
          case 8:
            q.rotate(1.5 * Math.PI);
        }
        var I = -a / 2, F = -c / 2;
        s == a ? F -= (c - s) / 2 : I -= (a - s) / 2;
        q.drawImage(h, I, F, a, c);
        a = d.toDataURL();
        b.Ba(a);
        window.URL.revokeObjectURL(f);
      };
      h.src = f;
    }
  };
  c.readAsArrayBuffer(a);
  return b;
};
var bM = function(a) {
  var b;
  b: {
    b = [];
    for (var c = 0;6 > c;c++) {
      b.push("Exif\x00\x00".charCodeAt(c));
    }
    for (var d = c = 0;c < a.length && 2E4 > c;) {
      if (d == b.length) {
        b = c - d;
        break b;
      }
      a[c] == b[d] ? d++ : d = 0;
      c++;
    }
    b = -1;
  }
  if (0 > b) {
    a = {};
  } else {
    b += 6;
    c = "4949" == YL(a, b);
    b = b + 2 + 2;
    b += $L(a, b, c) - 4;
    d = ZL(a, b, c);
    b += 2;
    for (var e = {}, f = 0;f < d;f++) {
      var h = ZL(a, b, c);
      e[h] = {tag:h, type:ZL(a, b + 2, c), count:$L(a, b + 4, c), data:XL(a, b + 8, 4)};
      b += 12;
    }
    e.bJ = c;
    a = e;
  }
  return a[274] ? ZL(a[274].data, 0, a.bJ) : 1;
};
var cM = function(a) {
  this.ja = a;
};
var dM = function() {
  return "This operation was canceled by the user.";
};
z.eM = function() {
  return "The image you are trying to upload is too big. Please resize it so that it is under 5MB.";
};
z.fM = function() {
  return "The file you tried to upload is a type we don’t understand.  Supported formats are JPEG, PNG, and GIF.";
};
var gM = function() {
  z.bh.call(this);
};
var hM = function(a) {
  z.bh.call(this);
  this.da = a;
  this.W = a.get("dialog");
};
z.iM = function(a, b) {
  z.bh.call(this);
  this.nF = b;
  this.of = a.get("image");
  this.fp = this.rf = this.qf = this.wj = null;
  this.pf = z.Wy ? new gM : new hM(a);
  this.pf.C("start", this.gt, this);
  this.pf.C("progress", this.ft, this);
  this.pf.C("success", this.SG, this);
  this.pf.C("error", this.Ro, this);
  this.pf.C("abort", this.dt, this);
  this.pf.C("preview", this.et, this);
};
var jM = function(a, b) {
  var c = new z.nc, d = a.qf, e = window.document.createElement("img");
  e.onload = function() {
    d.Zq(e.width);
    d.Yq(e.height);
    c.Ba(!0);
  };
  e.onerror = function() {
    c.Wd("cannot calc img size");
  };
  e.src = b;
  return c;
};
var kM = function(a, b, c, d, e, f) {
  this.of = a.get("image");
  this.W = a.get("dialog");
  this.Ha = b;
  this.Ij = c.querySelector(".progress-bar");
  this.rf = new cM(c.querySelector(".upload-feedback-preview"));
  this.aa = d;
  this.yc = f;
  this.$a = e;
  this.ub = new z.iM(a, function(a) {
    return this.aa.wq(z.Pk.ia(this.aa.cf).De(a));
  }.bind(this));
  this.ub.C("start", this.gt, this);
  this.ub.C("progress", this.ft, this);
  this.ub.C("success", this.RG, this);
  this.ub.C("error", this.Ro, this);
  this.ub.C("abort", this.dt, this);
  this.ub.C("preview", this.et, this);
};
var lM = function(a, b, c, d) {
  z.Uh.call(this);
  this.da = a;
  this.aa = c;
  this.yc = d;
  this.ja = b;
};
z.mM = function(a, b) {
  z.jn.call(this);
  this.ja = b;
  var c = (0,z.Gr)(b);
  this.aa = this.lA(c || new z.dk, b.getAttribute("data-url"));
  this.$a = new SL(this.aa, b);
  this.yc = this.mA(a, this, b, this.aa, this.$a);
  this.ub = new kM(a, this, b, this.aa, this.$a, this.yc);
  this.wa(new OL(b, this.ub));
  this.wa(new lM(a, b, this.aa, this.yc));
  ((0,z.Lc)(b, "picker-layout-fill") || (0,z.Lc)(b, "picker-layout-inline")) && this.wa(new UL(this, b, this.aa, this.$a, this.yc));
  this.$a.reset();
};
z.nM = function(a, b, c) {
  this.bu = !!c;
  z.mM.call(this, a, b);
};
var oM = function(a, b, c) {
  z.DL.call(this, a, b);
  this.bu = c;
};
var pM = function(a, b, c, d, e) {
  z.HL.call(this, a, b, c, d, e);
};
var cD = /&([^;\s<&]+);?/g;
z.rl.prototype.append = (0,z.Y)(117, function(a) {
  var b = this.text.length;
  this.text += a.text;
  for (var c = 0;c < a.tb.length;c++) {
    var d = z.Pk.zb(z.fk, z.Pk.Mc(a.tb[c]));
    d.setStart((0,z.gk)(d) + b);
    d.setEnd((0,z.hk)(d) + b);
    (0,z.vl)(this, d);
  }
});
z.Ko.prototype.getData = (0,z.Y)(113, function() {
  return this.aa;
});
z.Vu.prototype.getData = (0,z.Y)(112, function() {
  return z.Vu.t.getData.call(this);
});
z.pe.prototype.insertNode = (0,z.Y)(111, function(a, b) {
  if (b) {
    var c = this.Fa();
    c.parentNode && c.parentNode.insertBefore(a, c);
  } else {
    (0,z.Bd)(a, this.gb());
  }
  return a;
});
z.se.prototype.insertNode = (0,z.Y)(110, function(a, b) {
  var c = this.na.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a;
});
z.ye.prototype.insertNode = (0,z.Y)(109, function(a, b) {
  var c = ZC(this.na.duplicate(), a, b);
  this.hg();
  return c;
});
z.Ne.prototype.insertNode = (0,z.Y)(108, function(a, b) {
  var c = (0,z.Re)(this).insertNode(a, b);
  this.hg();
  return c;
});
z.re.prototype.lh = (0,z.Y)(94, function() {
  var a = this.na.getClientRects();
  return a.length ? new z.gd(a[0].left, a[0].top) : null;
});
z.Ne.prototype.lh = (0,z.Y)(93, function() {
  return this.ce() ? (0,z.Re)(this).zm() : (0,z.Re)(this).lh();
});
z.ct.prototype.od = (0,z.Y)(90, function() {
  return this.w("anchor");
});
z.et.prototype.od = (0,z.Y)(89, function() {
  return this.w("anchor");
});
z.qn.prototype.rotate = (0,z.Y)(88, function(a, b, c) {
  var d = new z.qn, e = Math.cos(a);
  a = Math.sin(a);
  b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
  return(0,z.rn)(this, b);
});
z.Nc.prototype.isEnabled = (0,z.Y)(82, function() {
  return window.navigator.cookieEnabled;
});
z.vu.prototype.If = (0,z.Y)(74, function(a) {
  this.Pr = a;
  (0,z.wu)(this);
  return this;
});
z.Jw.prototype.disable = (0,z.Y)(65, function() {
  this.Ai && (this.Zr && (0,z.dg)(this.Zr), this.Yr && (0,z.dg)(this.Yr), this.hf && (0,z.dg)(this.hf), this.remove(), window.document.body.removeChild(this.J), this.Kr = "", this.Ai = !1);
});
z.Ow.prototype.disable = (0,z.Y)(64, function() {
  this.Ai && (this.remove(), this.Aa.removeChild(this.J), this.Aa = this.J = null, (0,z.dg)(this.hf));
});
z.re.prototype.zm = (0,z.Y)(63, function() {
  var a = this.na.getClientRects();
  return a.length ? (a = (0,z.Ua)(a), new z.gd(a.right, a.bottom)) : null;
});
z.Ne.prototype.zm = (0,z.Y)(62, function() {
  return this.ce() ? (0,z.Re)(this).lh() : (0,z.Re)(this).zm();
});
z.Xs.prototype.Jf = (0,z.Y)(58, function(a) {
  return(0,z.E)(this, "imageId", a);
});
z.Ys.prototype.Jf = (0,z.Y)(57, function(a) {
  return(0,z.E)(this, "imageId", a);
});
z.ft.prototype.Jf = (0,z.Y)(56, function(a) {
  return(0,z.E)(this, "imageId", a);
});
z.Rk.prototype.ud = (0,z.Y)(40, function(a) {
  return(0,z.E)(this, "content", a);
});
z.ct.prototype.ud = (0,z.Y)(39, function(a) {
  return(0,z.E)(this, "content", a);
});
z.dt.prototype.ud = (0,z.Y)(38, function(a) {
  return(0,z.E)(this, "content", a);
});
z.et.prototype.ud = (0,z.Y)(37, function(a) {
  return(0,z.E)(this, "content", a);
});
z.jt.prototype.ud = (0,z.Y)(36, function(a) {
  return(0,z.E)(this, "content", a);
});
z.Rk.prototype.va = (0,z.Y)(35, function() {
  return this.w("content");
});
z.ct.prototype.va = (0,z.Y)(34, function() {
  return this.w("content");
});
z.dt.prototype.va = (0,z.Y)(33, function() {
  return this.w("content");
});
z.et.prototype.va = (0,z.Y)(32, function() {
  return this.w("content");
});
z.jt.prototype.va = (0,z.Y)(31, function() {
  return this.w("content");
});
z.dk.prototype.Bm = (0,z.Y)(28, function() {
  return this.w("originalHeight");
});
z.Ys.prototype.Bm = (0,z.Y)(27, function() {
  return this.w("originalHeight");
});
z.Tk.prototype.Sq = (0,z.Y)(26, function() {
  var a = this.Ct.pop();
  if (!a) {
    return null;
  }
  for (var b = null;a.length;) {
    var c = a.pop(), d = (0,z.Hk)(c.delta);
    (0,z.Lk)(d, this.Cl);
    d.ri = c.ri;
    d.selection = c.selection;
    d.selection && (b = d.selection);
    this.bc.push(d);
    this.Sh && this.Sh.call(null, z.Pk.ia(d.delta));
  }
  return b;
});
z.Zw.prototype.jk = (0,z.Y)(25, function(a, b, c, d) {
  a = this.hb[a];
  var e = -1;
  a && (e = (0,z.ax)(a, b, c, d));
  return-1 < e ? a[e] : null;
});
z.Tw.prototype.$u = (0,z.Y)(22, function() {
  return this.Te;
});
z.Zw.prototype.Vi = (0,z.Y)(21, function(a) {
  var b = 0, c;
  for (c in this.hb) {
    if (!a || c == a) {
      for (var d = this.hb[c], e = 0;e < d.length;e++) {
        ++b, (0,z.Yw)(d[e]);
      }
      delete this.hb[c];
      this.xn--;
    }
  }
  return b;
});
z.pe.prototype.zg = (0,z.Y)(18, function(a, b) {
  this.insertNode(a, !0);
  this.insertNode(b, !1);
});
z.se.prototype.zg = (0,z.Y)(17, function(a, b) {
  var c = (0,z.rd)((0,z.ld)(this.Fa()));
  if (c = (0,z.YC)(c)) {
    var d = c.Fa(), e = c.gb(), f = c.Gb(), h = c.tc()
  }
  var k = this.na.cloneRange(), l = this.na.cloneRange();
  k.collapse(!1);
  l.collapse(!0);
  k.insertNode(b);
  l.insertNode(a);
  k.detach();
  l.detach();
  if (c) {
    if (d.nodeType == z.ue) {
      for (;f > d.length;) {
        f -= d.length;
        do {
          d = d.nextSibling;
        } while (d == a || d == b);
      }
    }
    if (e.nodeType == z.ue) {
      for (;h > e.length;) {
        h -= e.length;
        do {
          e = e.nextSibling;
        } while (e == a || e == b);
      }
    }
    (0,z.Pe)(d, f, e, h).select();
  }
});
z.ye.prototype.zg = (0,z.Y)(16, function(a, b) {
  var c = this.na.duplicate(), d = this.na.duplicate();
  ZC(c, a, !0);
  ZC(d, b, !1);
  this.hg();
});
z.Ne.prototype.zg = (0,z.Y)(15, function(a, b) {
  (0,z.Re)(this).zg(a, b);
  this.hg();
});
z.dk.prototype.Hi = (0,z.Y)(14, function() {
  return this.w("originalWidth");
});
z.Ys.prototype.Hi = (0,z.Y)(13, function() {
  return this.w("originalWidth");
});
z.Tk.prototype.qi = (0,z.Y)(10, function(a) {
  var b = (0,z.Ua)(this.bc);
  b && (b.selection = a.ia());
});
z.ct.prototype.ze = (0,z.Y)(9, function() {
  return this.w("noteId");
});
z.dt.prototype.ze = (0,z.Y)(8, function() {
  return this.w("noteId");
});
(0,z.p)(JD, z.Ud);
JD.prototype.Ta = function() {
  var a = this.yB;
  if (!a) {
    throw z.Wd;
  }
  this.yB = this.KK ? a.previousSibling : a.nextSibling;
  return a;
};
(0,z.p)(PD, JD);
var zE = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
(0,z.p)(XD, z.ge);
XD.prototype.dn = function(a) {
  (0,z.Dd)(YD(this, !0));
  (0,z.Dd)(YD(this, !1));
  return a;
};
XD.prototype.fn = function() {
  var a = null, b = YD(this, !this.tg), c = YD(this, this.tg);
  if (b && c) {
    var a = b.parentNode, b = (0,z.Ya)(a.childNodes, b), d = c.parentNode, c = (0,z.Ya)(d.childNodes, c);
    d == a && (this.tg ? b-- : c--);
    a = (0,z.Pe)(a, b, d, c);
    a = this.dn(a);
    a.select();
  } else {
    this.dn();
  }
  return a;
};
XD.prototype.F = function() {
  this.dn();
  this.xf = null;
};
(0,z.p)(cE, XD);
cE.prototype.dn = function(a) {
  var b = YD(this, !0), c = YD(this, !1), b = b && c ? (0,z.Nd)(b, c) : b || c;
  cE.t.dn.call(this);
  if (a) {
    return SD(b, a);
  }
  b && (a = (0,z.YC)((0,z.rd)((0,z.ld)(b))), (a = SD(b, a)) && a.select());
};
var oE = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, FIGURE:!0, LI:!0}, sE = /^(.*?)([:;,\.?>\]\)!]+)$/;
(0,z.p)(jE, z.Yd);
jE.prototype.Ta = function() {
  do {
    jE.t.Ta.call(this);
  } while (-1 == this.Ec);
  return this.R;
};
var DE = {IMG:" ", BR:"\n"}, CE = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, OE = [], NE = null, QE = /^<\//, PE = /(<\/?(\w*)([^>]*)>)/gi, qM = {Ve:!1, isPublished:!1, media:null, sections:!0, Fv:!1}, tI = /^[@＠][a-z0-9_]{1,15}$/i;
(0,z.iD)(z.bq, "common-async");
var uF;
var qF;
z.g = z.kF.prototype;
z.g.od = function() {
  return this.op ? this.end : this.start;
};
z.g.ce = function() {
  return this.op;
};
z.g.collapse = function(a) {
  var b = a ? this.start : this.end;
  a = a ? this.end : this.start;
  a.S = b.S;
  a.offset = b.offset;
};
z.g.isCollapsed = function() {
  return this.start.S == this.end.S && this.start.offset == this.end.offset;
};
z.g.ia = function() {
  return new z.kF(this.start.ia(), this.end.ia(), this.op);
};
qF = 1;
z.sF = 2;
uF = 3;
z.vF.prototype.g = function() {
  return this.cc;
};
z.vF.prototype.ia = function() {
  return new z.vF(this.cc, this.S, this.offset);
};
z.g = z.xF.prototype;
z.g.qi = function() {
  this.ac.qi(this.getSelection());
};
z.g.bk = (0,z.n)(114);
z.g.pk = (0,z.n)(19);
z.g.gk = (0,z.n)(11);
z.g.Tk = function() {
  AF(this, !0);
};
z.g.Sq = function() {
  AF(this, !1);
};
z.g.V = function() {
  return this.X;
};
z.g.getSelection = function() {
  return this.mc;
};
z.g.If = function(a, b) {
  yH(this, a, b, a, b, !1);
};
z.g.Kx = function(a) {
  var b = a.uc(), c = (0,z.sl)(a.kg());
  (a = this.Ie[b]) && a.Fb(c) ? c = a : this.Ie[b] = c;
  a = this.mb[b];
  var d;
  d = c;
  d = (0,z.xd)((0,z.tm)(d, !1, qM) + (0,z.um)(d, z.Yf, qM) + (0,z.vm)(d, !1));
  (0,z.qr)(d) || (d = d.firstChild);
  PH(this, c, d, b);
  var e;
  a: {
    e = c;
    if ((4 == e.type || 11 == e.type) && (0,z.yr)(a) == e.type && a.outerHTML.replace(rM, "") === d.outerHTML.replace(rM, "")) {
      e = a.querySelector("figcaption");
      var f = d.querySelector("figcaption");
      if (e && f) {
        RD(f, e);
        e = !0;
        break a;
      }
    }
    e = !1;
  }
  if (!e) {
    if (4 == c.type && 4 == (0,z.Hr)(a, this.Mz).type) {
      e = a.getElementsByTagName("img")[0].src;
      var f = d.getElementsByTagName("img")[0], h = f.src;
      e && h != e && (h && f.setAttribute("data-delayed-src", h), f.src = e);
    }
    d.tagName == a.tagName || "LI" != d.tagName && "LI" != a.tagName ? RD(d, a) : "LI" == d.tagName ? (c = window.document.createElement(10 == c.type ? "OL" : "UL"), c.appendChild(d), RD(c, a), LH(c)) : (c = a.parentNode, e = OH(c, a), (0,z.Bd)(d, c), (0,z.Dd)(a), c.childNodes.length || (0,z.Dd)(c), e.childNodes.length || (0,z.Dd)(e));
    "LI" === d.tagName && (d.parentNode.className = "post-list");
    this.mb[b] = d;
  }
};
z.g.oE = function(a) {
  var b = sM[a.g()];
  this.Vt || b.call(this, a);
};
z.g.KE = function(a) {
  a = a.uc();
  var b = this.mb[a];
  if (this.nb()) {
    var c = (0,z.tr)(b, this.X);
    c && 1 === (0,z.wr)(c).length && 1 < this.Ab.length && ((0,z.Dd)(c), c = this.Ab.indexOf(c), this.Ab.splice(c, 1));
    this.Gg = null;
  }
  (0,z.Dd)(b);
  this.mb.splice(a, 1);
  this.Ie.splice(a, 1);
  (b = this.mb[a]) && "LI" === b.tagName && LH(b.parentNode);
  b = this.mc.start;
  b.S >= a && (b.S = Math.max(b.S - 1, 0));
  b = this.mc.end;
  b.S >= a && (b.S = Math.max(b.S - 1, 0));
};
z.g.tE = function(a) {
  var b = a.uc();
  a = (0,z.sl)(a.kg());
  var c = 0 === b ? null : this.mb[b - 1];
  c && "LI" == c.tagName && (null != (void 0 != c.nextElementSibling ? c.nextElementSibling : (0,z.Fd)(c.nextSibling, !0)) && OH(c.parentNode, c), c = c.parentNode);
  var d;
  d = (0,z.xd)((0,z.tm)(a, !1, qM) + (0,z.um)(a, z.Yf, qM) + (0,z.vm)(a, !1));
  this.nb() && 0 === (0,z.tH)(this).length && (0,z.NH)(this, 0, new z.ik);
  c ? (0,z.Bd)(d, c) : this.nb() ? (0,z.Cd)(RH(this, 0), d, 0) : (0,z.Cd)(this.X, d, 0);
  c = d;
  (0,z.ug)(d) && (c = d.firstChild, LH(d));
  this.mb.splice(b, 0, c);
  this.Ie.splice(b, 0, a);
  this.Gg = null;
  PH(this, a, d, b);
  a = this.mc.start;
  a.S >= b && a.S++;
  a = this.mc.end;
  a.S >= b && a.S++;
};
var rM = /<figcaption.*?<\/figcaption>/;
z.xF.prototype.nb = function() {
  return this.Kp;
};
z.xF.prototype.uE = function(a) {
  var b = a.uc();
  a = a.lg();
  var c = a.ua();
  this.Gg = null;
  var d = HE(a);
  a = (0,z.rr)(d);
  this.Ab.splice(b, 0, d);
  var e = this.Ab[b - 1], b = RH(this, b - 1);
  this.X.insertBefore(d, e && e.nextSibling);
  if (d = this.mb[c]) {
    for (var c = (e = "LI" === d.tagName) ? d.parentNode : d, f = (0,z.Ya)(b.childNodes, c);b.childNodes[f];) {
      a.appendChild(b.childNodes[f]);
    }
    e && d.previousSibling && (a = OH(c, d.previousSibling), (0,z.Bd)(a, c), b.appendChild(c));
  }
};
z.xF.prototype.LE = function(a) {
  a = a.uc();
  this.Gg = null;
  var b = this.Ab[a], c = RH(this, a);
  this.Ab.splice(a, 1);
  var c = (0,z.ej)(c.childNodes), d = RH(this, Math.max(0, a - 1));
  if (0 === a) {
    for (;c.length;) {
      (0,z.Cd)(d, c.pop(), 0);
    }
  } else {
    (0,z.Ad)(d, c);
  }
  (0,z.Dd)(b);
};
z.xF.prototype.Lx = function(a) {
  var b = a.uc();
  a = a.lg();
  var c = (0,z.tH)(this), d = c[b];
  d && d.Fb(a) ? a = d : c[b] = a;
  a = HE(a);
  var c = (0,z.rr)(a), d = this.Ab[b], e = (0,z.rr)(d);
  (0,z.Ad)(c, e.childNodes);
  RD(a, d);
  this.Ab[b] = a;
};
var sM = {1:z.xF.prototype.tE, 2:z.xF.prototype.KE, 3:z.xF.prototype.Kx, 8:z.xF.prototype.uE, 9:z.xF.prototype.LE, 10:z.xF.prototype.Lx};
(0,z.p)(DF, z.ya);
z.SH.prototype.qF = function(a, b) {
  this.Pc(b);
  HF(b);
};
z.SH.prototype.Um = z.ea;
z.SH.prototype.Pc = function(a) {
  CH(a, function(a, c, d) {
    this.Um(a, c, d);
  }, this, !0);
  (0,z.CF)(a);
};
(0,z.p)(z.YH, z.SH);
z.YH.prototype.Pc = function(a) {
  var b = a.getSelection();
  if ((0,z.tF)(b)) {
    var c = (0,z.JH)(a, b.start.S);
    (0,z.vH)(a, b.start.S, (new z.ik).Yb(c.getName()));
  } else {
    if ((0,z.rF)(b)) {
      (0,z.DH)(a, b.start.S);
    } else {
      if (b.isCollapsed()) {
        var d = b.start, c = d.offset, d = d.S, e = (0,z.Z)(a, d);
        if (this.Qf) {
          c < e.text.length ? ((0,z.Dl)(e, c, c + ZH(this, e.text, c)), (0,z.uH)(a, d)) : $H(this, a, d);
        } else {
          if (0 < c) {
            var f = ZH(this, e.text, c);
            (0,z.Dl)(e, c + f, c);
            b.start.offset = b.end.offset = c + f;
            (0,z.uH)(a, d);
          } else {
            10 == e.type || 9 == e.type ? (e.type = 1, (0,z.uH)(a, d)) : $H(this, a, d);
          }
        }
      } else {
        (0,z.BH)(a, !0);
      }
    }
  }
  c = a.getSelection();
  pF(c) && c.isCollapsed() && (b = c.start.S, c = c.start.offset, d = (0,z.Z)(a, b), e = d.text.charAt(c - 1), e == d.text.charAt(c) && " " == e && ((0,z.Dl)(d, c, c + 1), (0,z.uH)(a, b)));
  (0,z.CF)(a);
};
(0,z.p)(aI, z.SH);
aI.prototype.QJ = function(a) {
  return a.id ? (0,z.za)(a.id, "internal-source-marker_") || (0,z.za)(a.id, "docs-internal-guid") : !1;
};
aI.prototype.Pc = function(a) {
  var b = a.nb(), c = window.document.createElement("div");
  c.innerHTML = this.ZE;
  aF(c, this.QJ.bind(this));
  var d = FF(c, {hr:b, gr:!0});
  if ((0,z.IF)(d)) {
    c = (0,z.Z)(a, a.getSelection().end.S).name;
    (0,z.BH)(a, !0);
    for (var e = a.getSelection().start, f = (0,z.Z)(a, e.S), h = f.split(e.offset), k = d.nb(), l = 0, m = null, q = !1;m = (0,z.Z)(d, l);) {
      var s = 5 == m.type;
      (0,z.qD)(m.type, m.metadata && m.metadata.yb()) && (m.type = 1, (0,z.uH)(d, l));
      rD(m.type, m.text) || k && s ? ((0,z.DH)(d, l), q = q || s) : (k && q && (m = (0,z.JH)(d, l), l != m.ua() && (0,z.NH)(d, l, new z.ik)), q = !1, l++);
    }
    k = a.nb();
    l = {};
    m = 0;
    q = (0,z.IF)(a);
    for (m = 0;m < q;m++) {
      l[(0,z.Z)(a, m).name] = !0, k && (l[(0,z.JH)(a, m).getName()] = !0);
    }
    q = (0,z.IF)(d);
    for (m = 0;m < q;m++) {
      s = (0,z.Z)(d, m), s.name = bI(s.name, l), k && (s = (0,z.JH)(d, m), s.ua() == m && s.Yb(bI(s.getName(), l)));
    }
    for (m = 0;m < q;m++) {
      (0,z.pD)((0,z.Z)(d, m), l), (0,z.uH)(d, m), k && (s = (0,z.JH)(d, m), s.ua() == m && ((0,z.pl)(s, l), (0,z.vH)(d, m)));
    }
    l = (0,z.oD)((0,z.Z)(d, 0)) ? null : (0,z.Z)(d, 0);
    k = b && (0,z.JH)(d, 0).getName();
    l && (f.append(l.ia()), (0,z.DH)(d, 0));
    (0,z.uH)(a, e.S);
    l = (0,z.IF)(d);
    for (m = 0;m < l;m++) {
      q = e.S + m + 1, (0,z.wH)(a, q, (0,z.Z)(d, m).ia()), b && (s = (0,z.JH)(d, m), m == s.ua() && q != (0,z.JH)(a, q).ua() && s.getName() != k && (0,z.NH)(a, q, z.Pk.ia(s)));
    }
    b = e.S + l;
    d = (0,z.Z)(a, e.S + l);
    d.append(h);
    f != d && c != f.name && (d.name = c);
    (0,z.uH)(a, b);
    yH(a, e.S, e.offset, b, d.text.length - h.text.length, !1);
  }
};
(0,z.p)(z.cI, z.B);
z.cI.prototype[z.Vw] = !0;
z.g = z.cI.prototype;
z.g.Mq = null;
z.g.$q = (0,z.n)(95);
z.g.addEventListener = function(a, b, c, d) {
  (0,z.GE)(this, a, b, c, d);
};
z.g.removeEventListener = function(a, b, c, d) {
  (0,z.FE)(this, a, b, c, d);
};
z.g.dispatchEvent = function(a) {
  var b, c = this.Mq;
  if (c) {
    for (b = [];c;c = c.Mq) {
      b.push(c);
    }
  }
  var c = this.DI, d = a.type || a;
  if ((0,z.ka)(a)) {
    a = new z.Sw(a, c);
  } else {
    if (a instanceof z.Sw) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new z.Sw(d, c);
      (0,z.ob)(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.Ui && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = dI(f, d, !0, a) && e;
    }
  }
  a.Ui || (f = a.currentTarget = c, e = dI(f, d, !0, a) && e, a.Ui || (e = dI(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.Ui && h < b.length;h++) {
      f = a.currentTarget = b[h], e = dI(f, d, !1, a) && e;
    }
  }
  return e;
};
z.g.F = function() {
  z.cI.t.F.call(this);
  this.Ci && this.Ci.Vi(void 0);
  this.Mq = null;
};
z.g.qa = function(a, b, c, d) {
  return this.Ci.add(String(a), b, !1, c, d);
};
z.g.Mf = function(a, b, c, d) {
  return this.Ci.remove(String(a), b, c, d);
};
z.g.FC = function(a) {
  return(0,z.$w)(this.Ci, a);
};
z.g.jk = function(a, b, c, d) {
  return this.Ci.jk(String(a), b, c, d);
};
(0,z.p)(eI, z.cI);
z.g = eI.prototype;
z.g.O = null;
z.g.HI = !0;
z.g.enable = function(a) {
  this.O == a && (this.Tu = !0);
};
z.g.disable = function(a) {
  this.O == a && (this.Tu = !1);
};
z.g.isEnabled = function(a) {
  return this.O == a ? this.Tu : !1;
};
z.g.Rp = z.Px;
z.g.UJ = z.Px;
z.g.F = function() {
  this.O && this.O && (this.disable(this.O), this.O = null);
  eI.t.F.call(this);
};
var TI = (0,z.nb)({QA:1, RA:2, jv:3, mk:4, UA:5, execCommand:6, queryCommandValue:7, SB:8, yN:10, Cu:11}), tM = (0,z.vb)(8, 10, 11);
eI.prototype.execCommand = function(a, b) {
  var c = this.UJ(a);
  c || (z.Le && WH(this.O, !0), this.O.um());
  try {
    var d = this.dJ.apply(this, arguments);
  } finally {
    c || (this.O.$j(), (0,z.XH)(this.O));
  }
  return d;
};
eI.prototype.Bf = function() {
  return!1;
};
(0,z.p)(z.$, eI);
z.g = z.$.prototype;
z.g.QA = function(a) {
  try {
    return this.fc(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.fc = z.Px;
z.g.RA = function(a) {
  try {
    return this.zq(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.zq = z.Px;
z.g.UA = function(a, b, c) {
  try {
    return this.Gm(a, b, c);
  } catch (d) {
    throw a.preventDefault(), d.message = (d.message || "") + " key " + b, d;
  }
};
z.g.Gm = z.Px;
(0,z.p)(fI, z.SH);
fI.prototype.Pc = function(a) {
  (0,z.BH)(a, !0);
  var b = a.getSelection(), c = this.dB((0,z.Z)(a, b.start.S), b.start.offset);
  b.start.offset += c;
  b.end.offset += c;
  (0,z.uH)(a, b.start.S);
  (0,z.CF)(a);
};
var zI = (0,z.vb)("", "(", "[", "{", " ", " ", "\n");
(0,z.p)(AI, z.SH);
AI.prototype.Pc = function(a) {
  var b = a.getSelection(), c = b.start.S, d = b.end.S;
  if (8 != (0,z.Z)(a, c).type) {
    var e = b.start.offset, f = (0,z.IF)(a) - b.end.S, b = (0,z.Z)(a, d).text.length - b.end.offset;
    CH(a, this.qK, this, !0);
    d = (0,z.IF)(a) - f;
    yH(a, c, e, d, (0,z.Z)(a, d).text.length - b, !1);
    for (var d = a.getSelection(), h = d.start.S, k = d.end.S, l = d.end.offset, m = (0,z.IF)(a) - k, q = (0,z.Z)(a, k).text.length - l, s = h;s <= k;s++) {
      for (var I = (0,z.Z)(a, s), F = s == k ? l : I.text.length, aa = s == h ? d.start.offset : 0;aa < F;aa++) {
        "\n" == I.text.charAt(aa) && "\n" == I.text.charAt(aa + 1) && ((0,z.Dl)(I, aa, aa + 2), (0,z.uH)(a, s), (new z.uM(!1)).eB(a, (0,z.mF)(s, aa)), I = (0,z.Z)(a, s), k = (0,z.IF)(a) - m, l = (0,z.Z)(a, k).text.length - q, F = s == k ? l : I.text.length, aa--);
      }
    }
    d = (0,z.IF)(a) - f;
    yH(a, c, e, d, (0,z.Z)(a, d).text.length - b, !1);
  }
};
BI.prototype.search = function(a, b) {
  var c = this.Tm.text.substring(a, b), d = UE(c);
  this.xB = d ? a + c.indexOf(d) : -1;
};
AI.prototype.qK = function(a, b, c) {
  var d = new BI(a);
  d.search(b, c);
  for (var e = b;e < c;e++) {
    var f = a.text.charAt(e), h = 0;
    if (e == d.xB) {
      for (;e < c && " " != a.text.charAt(e) && "\n" != a.text.charAt(e);) {
        e++;
      }
      (0,z.qI)(a, e);
      d.search(e, c);
    } else {
      " " == f ? ((0,z.Dl)(a, e, e + 1), h = vI(a, e) - 1) : "-" == f && 1 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = jI(a, e) - 1) : "–" == f && 1 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = lI(a, e) - 1) : "\x3e" == f && 1 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = mI(a, e) - 1) : "." == f && 2 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = iI(a, e) - 1) : "'" == f ? ((0,z.Dl)(a, e, e + 1), h = wI(a, e) - 1) : '"' == f ? ((0,z.Dl)(a, e, e + 1), h = yI(a, e) - 1) : "(" == f && 1 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = 
      oI(a, e) - 1) : ")" == f && 1 <= e - b ? ((0,z.Dl)(a, e, e + 1), h = nI(a, e) - 1) : "3" == f && 1 <= e - b && ((0,z.Dl)(a, e, e + 1), h = pI(a, e) - 1), e += h, c += h;
    }
  }
  (0,z.qI)(a, c);
};
(0,z.p)(z.DI, z.$);
z.g = z.DI.prototype;
z.g.Ya = (0,z.Ib)("PastePlugin");
z.g.enable = function(a) {
  z.DI.t.enable.call(this, a);
  a = a.V();
  this.sa.push((0,z.J)(a, "paste", this.DE, this), (0,z.J)(a, "copy", this.Gx, this), (0,z.J)(a, "cut", this.Gx, this));
};
z.g.disable = function(a) {
  z.DI.t.disable.call(this, a);
  (0,z.dg)(this.sa);
  this.sa.length = 0;
};
z.g.F = function() {
  window.document.body.removeChild(this.zc);
  this.zc = null;
  z.DI.t.F.call(this);
};
z.g.fc = function(a) {
  if (86 == a.keyCode && a.shiftKey && (a.metaKey || a.ctrlKey)) {
    this.hu = !0;
    var b = this;
    (0,window.setTimeout)(function() {
      b.hu = !1;
    }, 0);
  }
  return!1;
};
z.g.Gx = function(a) {
  var b = this.O;
  if ((0,z.lJ)(b) && a.clipboardData && a.clipboardData.setData) {
    var c;
    a: {
      c = (0,z.VH)(b);
      var d = c.mc, e = null;
      if ((0,z.tF)(d)) {
        c = "";
      } else {
        if ((0,z.rF)(d)) {
          e = [(0,z.Z)(c, d.start.S).zb()], e = (0,z.bk)((0,z.Zj)(new z.Xj, e), []);
        } else {
          if (d.isCollapsed()) {
            c = "";
            break a;
          }
          for (var e = (0,z.bk)((0,z.Zj)(new z.Xj, []), []), f = d.start.S;f <= d.end.S;f++) {
            var h = (0,z.Z)(c, f).ia();
            f === d.end.S && d.end.offset < h.text.length && h.split(d.end.offset);
            f === d.start.S && 0 < d.start.offset && (h = h.split(d.start.offset));
            (0,z.oD)(h) && (h.type = 1);
            (0,z.Yj)(e).push(h.zb());
            c.nb() && (h = (0,z.JH)(c, f), h.ua() === f && f !== d.start.S && (h = (new z.ik).Yb(h.getName()), (0,z.ak)(e).push((new z.ik).Yb(h.getName()).Fe((0,z.Yj)(e).length - 1))));
          }
        }
        d = !1;
        c.nb() && 0 < (0,z.ak)(e).length && (d = !0);
        c = (0,z.om)(e, z.Yf, {Ve:!0, isPublished:!0, media:{}, sections:d, Fv:!1});
      }
    }
    c && (a.clipboardData.setData("text/html", c), (c = (0,z.RE)(c)) && a.clipboardData.setData("text/plain", c), "cut" === a.type && (0,z.TH)(new z.YH(!0, 1), b), a.preventDefault());
  }
};
z.g.DE = function(a) {
  var b = FI(this, a);
  if (null !== b) {
    a.preventDefault(), EI(this, b);
  } else {
    var c = (0,z.VH)(this.O), d = c.getSelection();
    this.zc.style.top = (0,z.qg)().top + 50 + "px";
    this.zc.style.display = "block";
    this.zc.innerHTML = "";
    this.zc.focus();
    (0,window.setTimeout)(function() {
      var a = this.pr ? this.zc.innerHTML : (0,z.Ea)(this.zc.textContent);
      this.zc.style.display = "none";
      this.O.V().focus();
      c.mc = d;
      (0,z.CF)(c);
      EI(this, a);
    }.bind(this), 0);
  }
};
(0,z.p)(GI, z.SH);
GI.prototype.Pc = function(a) {
  var b = a.getSelection(), c = b.start.offset, d = b.end.offset, e = (0,z.Z)(a, b.start.S);
  (0,z.lD)(e, this.sD, d);
  (0,z.lD)(e, this.UG, c);
  b.start.offset++;
  b.end.offset++;
  (0,z.uH)(a, b.start.S);
  (0,z.CF)(a);
};
(0,z.p)(z.II, z.$);
z.II.prototype.Ya = (0,z.Ib)("SmartTextPlugin");
z.II.prototype.fc = function(a) {
  return 32 == a.keyCode ? ((0,z.TH)(hI(this.mD ? [z.qI, vI] : vI), this.O), a.preventDefault(), !0) : !1;
};
z.II.prototype.zq = function(a) {
  return JI(this, a.Te.charCode) ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(LI, z.B);
z.g = LI.prototype;
z.g.Ae = 0;
z.g.F = function() {
  LI.t.F.call(this);
  this.stop();
  delete this.Sm;
  delete this.bf;
};
z.g.start = function(a) {
  this.stop();
  this.Ae = (0,z.KI)(this.xu, (0,z.ga)(a) ? a : this.pv);
};
z.g.stop = function() {
  this.Hd() && z.da.clearTimeout(this.Ae);
  this.Ae = 0;
};
z.g.Ue = function() {
  this.stop();
  this.ak();
};
z.g.Hd = function() {
  return 0 != this.Ae;
};
z.g.ak = function() {
  this.Ae = 0;
  this.Sm && this.Sm.call(this.bf);
};
(0,z.p)(z.PI, z.B);
var RI = [];
z.g = z.PI.prototype;
z.g.qa = function(a, b, c, d) {
  return QI(this, a, b, c, d);
};
z.g.Mf = function(a, b, c, d, e) {
  if ((0,z.ha)(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Mf(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.bf || this, c = lE(c), d = !!d, b = (0,z.Uw)(a) ? a.jk(b, c, d, e) : a ? (a = (0,z.ex)(a)) ? a.jk(b, c, d, e) : null : null, b && ((0,z.bx)(b), delete this.rb[b.key]);
  }
  return this;
};
z.g.Vi = function() {
  (0,z.hb)(this.rb, z.bx);
  this.rb = {};
};
z.g.F = function() {
  z.PI.t.F.call(this);
  this.Vi();
};
z.g.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var rJ;
var ZI;
var XI;
var UI;
(0,z.p)(SI, z.cI);
SI.prototype.la = null;
SI.prototype.Xb = null;
UI = "change";
z.VI = "delayedchange";
XI = {BL:"cvc", bM:"load", FM:"unload", qL:"beforechange", yL:UI, CL:z.VI, rL:"beforefocus", JL:"focus", uL:"blur", sL:"beforetab", TL:"ifrsz", vM:"selectionchange"};
ZI = 0;
rJ = null;
z.g = SI.prototype;
z.g.xw = !1;
z.g.kr = !1;
z.g.V = function() {
  return this.la;
};
z.g.addListener = function(a, b, c, d) {
  var e = this.V();
  z.Hy && e && this.je() && (e = e.ownerDocument);
  d ? QI(this.Se, e, a, b, c, d) : this.Se.qa(e, a, b, c);
};
z.g.ka = function(a) {
  var b = a.Ya();
  this.Ch[b] = a;
  for (var c in TI) {
    a[TI[c]] && this.Mi[c].push(a);
  }
  a.O = this;
  this.df() && a.enable(this);
};
var YI = 15, WI = 250;
SI.prototype.je = z.Qx;
SI.prototype.iC = z.Px;
var aJ = {46:!0, 8:!0};
z.D || (aJ[9] = !0);
var bJ = {86:!0, 88:!0};
z.Yx && !z.Le && (aJ[229] = !0);
SI.prototype.F = function() {
  this.Qm() || this.df();
  this.Xb && this.execCommand("clearlorem");
  dJ(this);
  eJ(this);
  uJ(this);
  this.Dk = null;
  this.Se && (this.Se.Eb(), this.Se = null);
  for (var a;a = this.lL.pop();) {
    a.Eb();
  }
  rJ == this.id && (rJ = null);
  for (var b in this.Ch) {
    a = this.Ch[b], a.HI && a.Eb();
  }
  delete this.Ch;
  SI.t.F.call(this);
};
var sJ = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"], vM = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, wM = {65:!0, 86:!0, 88:!0}, jJ = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
z.g = SI.prototype;
z.g.Mm = function(a, b) {
  for (var c = this.Mi[a], d = (0,z.eb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    if ((f.isEnabled(this) || tM[a]) && f[TI[a]].apply(f, d)) {
      return!0;
    }
  }
  return!1;
};
z.g.PJ = function(a, b) {
  for (var c = this.Mi[a], d = (0,z.eb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    (f.isEnabled(this) || tM[a]) && f[TI[a]].apply(f, d);
  }
};
z.g.aw = function(a, b, c) {
  for (var d = this.Mi[a], e = (0,z.eb)(arguments, 1), f = 0;f < d.length;++f) {
    var h = d[f];
    if (h.isEnabled(this) || tM[a]) {
      e[0] = h[TI[a]].apply(h, e);
    }
  }
  return e[0];
};
z.g.yq = function(a) {
  (z.Le || gJ(this, a)) && !this.Mm(1, a) && z.Ly && iJ(this, a);
};
z.g.SA = function(a) {
  if (z.Le) {
    if (!gJ(this, a)) {
      return;
    }
  } else {
    this.hv = !0, this.um();
  }
  this.Mm(2, a) || z.Ly || iJ(this, a);
};
z.g.TA = function(a) {
  z.Le || !this.hv && !$I(a) || this.iv();
  this.Mm(3, a);
  mJ(this, "selectionchange") || (vM[a.keyCode] || (a.ctrlKey || a.metaKey) && wM[a.keyCode]) && this.hw.start();
};
z.g.execCommand = function(a, b) {
  for (var c = arguments, d, e = this.Mi[6], f = 0;f < e.length;++f) {
    var h = e[f];
    if (h.isEnabled(this) && h.Bf(a)) {
      d = h.execCommand.apply(h, c);
      break;
    }
  }
  return d;
};
z.g.queryCommandValue = function(a) {
  var b = this.df() && this.vv;
  if ((0,z.ka)(a)) {
    return kJ(this, a, b);
  }
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = kJ(this, a[d], b);
  }
  return c;
};
z.g.vJ = function(a, b) {
  if (!mJ(this, UI)) {
    var c = b.Te;
    try {
      if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) {
        return;
      }
    } catch (d) {
      return;
    }
    c.prevValue != c.newValue && a.call(this, c);
  }
};
z.g.kv = function(a) {
  mJ(this, UI) || (a = a.$u ? a.Te : a, a.target.firebugIgnore || (this.sv = this.uk = !0, this.Cd.start()));
};
z.g.PA = function() {
  z.D && this.execCommand("clearlorem", !0);
  z.Le && this.Ru();
  this.$j();
};
z.g.zJ = function() {
  var a = this.eC;
  this.eC = null;
  (0,z.XH)(this, void 0, a);
};
z.g.um = function() {
  mJ(this, "beforechange") || this.dispatchEvent("beforechange");
};
z.g.$j = function(a) {
  nJ(this, !0, a);
};
z.g.iv = function() {
  mJ(this, UI) || (this.Cd && this.Cd.stop(), this.sv = this.uk = !0, mJ(this, z.VI) || this.tm.start());
};
z.g.wA = function() {
  mJ(this, z.VI) || (this.tm.stop(), this.uk = !1, this.dispatchEvent(z.VI));
};
z.g.Ru = function() {
  this.uA();
  this.xA();
};
z.g.uA = function() {
  mJ(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"));
};
z.g.xA = function() {
  if (!mJ(this, "focus")) {
    rJ = this.id;
    this.vv = !0;
    this.dispatchEvent("focus");
    if (z.Le) {
      var a = this.V(), b = (0,z.lJ)(this);
      if (b) {
        var c = (0,z.me)(b);
        0 != (0,z.ne)(b) || c && c != a && "BODY" != c.tagName || AE((0,z.dE)(a), 0).select();
      }
    }
    !z.Gy && this.je() && this.nd.pd().parent.getSelection().removeAllRanges();
  }
};
z.g.vA = function() {
  mJ(this, "blur") || (rJ == this.id && (rJ = null), this.vv = !1, this.dispatchEvent("blur"));
};
z.g.yJ = function(a) {
  rJ = this.id;
  if (z.D) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.Dk.pd().open(b.href);
  }
  this.kr = !0;
};
z.g.wJ = function() {
  this.kr = !1;
};
z.g.VA = function(a) {
  if (!this.xw || this.kr) {
    this.kr = !1, (0,z.XH)(this, a), z.D && (this.eC = a.target, this.hw.start());
  }
};
z.g.iw = function(a, b, c, d) {
  if (!this.Qm()) {
    d && this.execCommand("clearlorem");
    b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
    c && WH(this, !1);
    a = b;
    if (b = this.V()) {
      if (this.je() && z.Td) {
        for (var e = b.ownerDocument.getElementsByTagName("HEAD"), f = e.length - 1;1 <= f;--f) {
          e[f].parentNode.removeChild(e[f]);
        }
      }
    } else {
      b = this.Xb;
    }
    b && hJ(this, a, b);
    d && this.execCommand("updatelorem");
    this.df() && (c ? (z.Le && MI(this.Cd), nJ(this)) : this.$j());
  }
};
z.g.AC = function() {
  var a = this.nd.ig();
  a.designMode = "on";
  z.Iy && a.execCommand("styleWithCSS", !1, !1);
};
z.g.fB = function() {
  this.Hu && tJ(this) && (0,z.vf)(this.Hu, this.V());
};
z.g.df = function() {
  return 2 == this.Qi;
};
z.g.Qm = function() {
  return 1 == this.Qi;
};
z.g.focus = function() {
  if (!z.Ey && this.je()) {
    this.nd.pd().focus();
  } else {
    if (z.Me) {
      var a = this.pu.pageXOffset, b = this.pu.pageYOffset
    }
    this.V().focus();
    z.Me && this.pu.scrollTo(a, b);
  }
};
z.g.rB = function(a) {
  var b = this.Xb;
  if (b) {
    var b = b.innerHTML, c = {}, b = this.aw(8, b, c), d = this.Dk.oc("IFRAME", vJ(this));
    if (tJ(this)) {
      var e = (0,z.wa)(this.aB, this, d, b, c);
      this.Zu = (0,z.GE)(d, z.zx, e, !0);
      a && (d.src = a);
    }
    a = this.Xb;
    d.className = a.className;
    d.id = a.id;
    RD(d, a);
    tJ(this) || this.aB(d, b, c);
  }
};
z.g.$B = function() {
  var a = this.Xb;
  if (a) {
    var b;
    b = this.je() && (b = this.nd) ? (b = b.pd()) && b.frameElement : null;
    b && RD(a, b);
  }
};
z.g.aB = function(a, b, c) {
  uJ(this);
  a.allowTransparency = "true";
  var d = (0,z.id)(this.Xb);
  c = new NI(this.id, (0,z.qd)(d.Lc), c);
  if (tJ(this)) {
    var e = (a.contentDocument || a.contentWindow.document).body;
    z.Ey && (e.contentEditable = !0);
    e.className = "editable";
    e.setAttribute("g_editable", !0);
    e.hideFocus = !0;
    e.id = c.DA;
    (0,z.lf)(e, c.Yu);
    e.innerHTML = b;
  } else {
    var d = new OI(this.Hu), f = [];
    c.ru && c.qw && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    c.ru && f.push("height:", c.FA ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    d && d.nA && f.push(d.nA);
    z.Le && c.qw && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.Ey && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"', c.DA, '" style\x3d"min-width:0;');
    z.Le && c.ru && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.qw ? "100%" : "auto"), c.FA ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.Me && f.push(";outline:hidden");
    for (e in c.Yu) {
      f.push(";" + e + ":" + c.Yu[e]);
    }
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    b = f.join("");
    e = a.contentDocument || a.contentWindow.document;
    e.open();
    e.write(b);
    e.close();
  }
  cJ(this, (a.contentDocument || a.contentWindow.document).body);
  !z.Ey && this.je() && this.AC();
  qJ(this);
};
(0,z.p)(z.wJ, z.$);
z.g = z.wJ.prototype;
z.g.Ya = (0,z.Ib)("CharCounterPlugin");
z.g.enable = function(a) {
  z.wJ.t.enable.call(this, a);
  a.qa(z.VI, this.Sf, !1, this);
};
z.g.disable = function(a) {
  z.wJ.t.disable.call(this, a);
  a.Mf(z.VI, this.Sf, !1, this);
};
z.g.fc = function(a) {
  iF(a) && window.getSelection().isCollapsed && xJ(this);
  return!1;
};
z.g.Sf = function() {
  xJ(this);
};
zJ.prototype.get = function(a) {
  return(0,z.AJ)(this, a);
};
(0,z.p)(z.HJ, z.$);
z.g = z.HJ.prototype;
z.g.Ya = (0,z.Ib)("MaxLengthPlugin");
z.g.enable = function(a) {
  z.HJ.t.enable.call(this, a);
  a.qa(z.VI, this.Sf, !1, this);
  a = a.Xb;
  a.setAttribute("data-length", IJ(this));
  a.setAttribute("data-max-length", this.oe);
};
z.g.disable = function(a) {
  a.Mf(z.VI, this.Sf, !1, this);
  (0,z.gr)(a.Xb, ["max-length", "close-to-max-length"]);
  z.HJ.t.disable.call(this, a);
};
z.g.fc = function(a) {
  return!this.Ow && iF(a) && 8 != a.keyCode && this.O.V().textContent.length >= this.oe && window.getSelection().isCollapsed ? (a.preventDefault(), !0) : !1;
};
z.g.jv = function() {
  this.O.V().setAttribute("data-length", IJ(this));
  return!1;
};
z.g.Sf = function() {
  var a = this.O, b = a.V(), c = IJ(this);
  b.setAttribute("data-length", c);
  (0,z.Jc)(b, "max-length", c > this.oe);
  (0,z.Jc)(b, "close-to-max-length", c > 0.66 * this.oe);
  !this.Ow && c > this.oe && (b = (0,z.VH)(a), (0,z.TH)((0,z.gI)(b.mb[0], function(a) {
    (0,z.Dl)(a, this.oe, a.text.length);
  }.bind(this)), a));
};
(0,z.p)(z.JJ, z.$);
z.g = z.JJ.prototype;
z.g.Ya = (0,z.Ib)("FocusHandlingPlugin");
z.g.enable = function(a) {
  z.JJ.t.enable.call(this, a);
  a.qa("focus", this.lk, !1, this);
  a.qa("blur", this.Fm, !1, this);
};
z.g.disable = function(a) {
  z.JJ.t.disable.call(this, a);
  a.Mf("focus", this.lk, !1, this);
  a.Mf("blur", this.Fm, !1, this);
};
z.g.lk = function() {
};
z.g.Fm = function() {
};
(0,z.p)(z.KJ, z.JJ);
z.g = z.KJ.prototype;
z.g.Ya = (0,z.Ib)("DefaultTextPlugin");
z.g.enable = function(a) {
  z.KJ.t.enable.call(this, a);
  (0,z.GE)(a.V(), "mousedown", this.rj, !1, this);
  (0,z.GE)(a, "beforechange", this.Uh, !1, this);
};
z.g.lk = function(a) {
  z.KJ.t.lk.call(this, a);
  LJ() && this.Uh();
};
z.g.disable = function(a) {
  (0,z.FE)(a, "beforechange", this.Uh, !1, this);
  (0,z.FE)(a.Xb, "mousedown", this.rj, !1, this);
  z.KJ.t.disable.call(this, a);
};
z.g.Cu = function(a) {
  OJ(a) && (0,z.EE)(a);
  a = a.querySelectorAll("[data-default-value]");
  for (var b = a.length, c = 0;c < b;c++) {
    var d = a[c];
    OJ(d) && (0,z.EE)(d);
  }
};
z.g.fc = function(a) {
  if (9 == a.keyCode) {
    return!1;
  }
  var b = (0,z.lJ)(this.O);
  if ((b = b && MJ(this, b.Fa())) && NJ(b)) {
    if (iF(a) || 86 == a.keyCode) {
      this.Uh();
    } else {
      return a.preventDefault(), !0;
    }
  }
  return!1;
};
z.g.rj = function(a) {
  if (!LJ()) {
    var b = MJ(this, a.target);
    b && NJ(b) && (b.focus(), a.preventDefault());
  }
};
z.g.Uh = function() {
  var a = this.O, b = (0,z.lJ)(a);
  if ((b = b && MJ(this, b.Fa()) || a.V()) && OJ(b)) {
    if (b === a.V()) {
      var a = (0,z.VH)(a), c = new z.rl((0,z.Z)(a, 0).name, 1, "");
      (0,z.uH)(a, 0, c);
      a.If(0, 0);
    } else {
      (0,z.EE)(b), WD(b), cF(b.firstChild, !0);
    }
    (0,z.x)(b, "default-value");
  }
};
(0,z.p)(PJ, z.$);
PJ.prototype.Ya = (0,z.Ib)("DeletePlugin");
PJ.prototype.fc = function(a) {
  var b = 46 === a.keyCode || 68 === a.keyCode && a.ctrlKey, c = 8 === a.keyCode;
  return b || c ? (c = 1, a.altKey && !a.metaKey ? c = 2 : a.metaKey && !a.altKey && (c = 3), (0,z.TH)(new z.YH(b, c), this.O), a.preventDefault(), !0) : !1;
};
(0,z.p)(QJ, SI);
z.g = QJ.prototype;
z.g.je = function() {
  return!1;
};
z.g.AC = z.ea;
z.g.fB = function() {
};
z.g.rB = function() {
  var a = this.Xb;
  a && (cJ(this, a), a.contentEditable = !0, hJ(this, a.innerHTML, a), qJ(this));
};
z.g.$B = z.ea;
(0,z.p)(RJ, QJ);
RJ.prototype.nb = function() {
  return this.Kp;
};
RJ.prototype.vk = function() {
  return this.Ty;
};
RJ.prototype.iw = function(a, b) {
  this.yg.selectionchange = 1;
  this.execCommand("clearlorem");
  this.Gl = null;
  RJ.t.iw.call(this, !1, b, !1, !1);
  GF((0,z.VH)(this));
  (0,z.CF)((0,z.VH)(this));
  this.execCommand("updatelorem");
  this.yg.selectionchange = 0;
};
SJ.prototype.od = function() {
  return this.ou;
};
var XJ = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
(0,z.p)(YJ, z.SH);
YJ.prototype.Um = function(a) {
  (0,z.oD)(a) || (a.hasDropCap = this.XE);
};
(0,z.p)(ZJ, z.SH);
ZJ.prototype.Um = function(a) {
  (0,z.oD)(a) || (this.Gp && a.type != this.cc && (a.type = this.cc), this.Gp || a.type != this.cc || (a.type = 1));
};
(0,z.p)($J, z.SH);
$J.prototype.Um = function(a, b, c) {
  a.text && (b = (0,z.Bl)(this.cc, b, c), this.Gp ? (0,z.vl)(a, b) : (0,z.mD)(a, b));
};
(0,z.p)(z.aK, z.$);
z.aK.prototype.Ya = (0,z.Ib)("FormattingPlugin");
var xM = (0,z.nb)({SC:"P_1", PC:"P_2", QC:"P_3", LC:"P_6", UC:"P_7", VC:"P_8", YC:"M_1", NC:"M_2", oL:"M_3", xL:"SET_HAS_DROP_CAP", kM:"CYCLE_BLOCKQUOTE"});
z.g = z.aK.prototype;
z.g.Bf = function(a) {
  return a in xM;
};
z.g.fc = function(a) {
  iF(a) ? (this.At = !0, (0,window.setTimeout)(function() {
    (0,z.lb)(this.Ng, !0) && cK(this) && bK(this);
    this.At = !1;
  }.bind(this), 0)) : 40 != a.keyCode && 38 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode || bK(this);
  return!1;
};
z.g.mk = function() {
  (0,window.setTimeout)(function() {
    (0,z.lb)(this.Ng, !0) && cK(this) && bK(this);
  }.bind(this), 0);
  return!1;
};
z.g.execCommand = function(a) {
  var b = this.O;
  if ("M_3" == a) {
    eK(this);
  } else {
    if ("SET_HAS_DROP_CAP" == a) {
      (0,z.TH)(new YJ(!this.queryCommandValue(a)), b);
    } else {
      if ("CYCLE_BLOCKQUOTE" == a) {
        a = this.O, b = a.queryCommandValue("CYCLE_BLOCKQUOTE"), 6 == b ? a.execCommand("P_7") : 7 == b ? a.execCommand("P_7") : a.execCommand("P_6");
      } else {
        if (0 === a.indexOf("P_")) {
          (0,z.TH)(new ZJ(Number(a.substring(2)), !this.queryCommandValue(a)), b);
        } else {
          if (0 === a.indexOf("M_")) {
            var c = Number(a.substring(2)), d = (0,z.lJ)(b);
            if (d && d.isCollapsed()) {
              if (this.Ng[a] = !this.Ng[a], a = dK(this, d)) {
                this.dy = a;
              }
            } else {
              (0,z.TH)(new $J(c, !this.queryCommandValue(a)), b);
            }
          }
        }
      }
    }
  }
};
z.g.queryCommandValue = function(a) {
  var b = this.O, c = this.O.V(), d = (0,z.lJ)(this.O), e;
  if ("SET_HAS_DROP_CAP" == a) {
    return(a = d && (0,z.KE)(d.Fa(), c)) && (0,z.Ar)(a);
  }
  if ("CYCLE_BLOCKQUOTE" == a) {
    return a = b.queryCommandValue(["P_6", "P_7"]), a.P_6 ? 6 : a.P_7 ? 7 : null;
  }
  if (0 === a.indexOf("P_")) {
    var f = Number(a.substring(2)), b = (0,z.VH)(b);
    e = !0;
    CH(b, function(a) {
      e && a.type != f && (e = !1);
    }, this, !1);
    return e;
  }
  if (0 === a.indexOf("M_")) {
    var h = Number(a.substring(2)), b = (0,z.VH)(b);
    if ("M_3" === a) {
      var k = !1;
      CH(b, function(a, b, c) {
        k = k || nD(a, h, b, c);
      }, this, !1);
      return k;
    }
    e = !0;
    CH(b, function(a, b, c) {
      e && (0,z.vl)(a.ia(), (0,z.Bl)(h, b, c)) && (e = !1);
    }, this, !1);
    return e;
  }
  throw Error("No handler for command " + a);
};
(0,z.p)(fK, z.$);
fK.prototype.Ya = (0,z.Ib)("FormattingShortcutsPlugin");
var yM = {u:"DO NOTHING", k:"M_3", b:"M_1", i:"M_2", 0:"P_1", 1:"P_2", 2:"P_3", 5:"CYCLE_BLOCKQUOTE", 6:"P_8", 7:"P_7"};
fK.prototype.fc = function(a) {
  return 73 == a.keyCode && a.ctrlKey && z.Mg ? (a.preventDefault(), !0) : !1;
};
fK.prototype.Gm = function(a, b, c) {
  if (!c) {
    return!1;
  }
  if ("k" == b && !a.shiftKey) {
    if (a = this.O.execCommand("M_3")) {
      b = this.O, c = (0,z.TJ)(a), (c = WJ(c) ? 0 > c.search(/:/) ? "http://" + c.replace(/^[\s\xa0]+/, "") : c : XJ.test(c) ? "mailto:" + c : null) ? (a.od().href = c, (0,z.UJ)(a), b.execCommand("updateLinkBubble")) : b.execCommand("link", a);
    }
    return!0;
  }
  return(b = yM[b]) ? (this.O.execCommand(b), z.Le && a.stopPropagation(), !0) : !1;
};
(0,z.p)(gK, z.cI);
(0,z.p)(iK, z.Sw);
var hK = z.Le || z.Td && (0,z.Xc)(532);
z.g = gK.prototype;
z.g.qh = !1;
z.g.mB = 0;
z.g.uJ = function(a) {
  jK(this, a);
};
z.g.tJ = function(a) {
  kK(this, a);
};
z.g.WA = function(a) {
  this.qh && this.dispatchEvent(new iK("updateIme", a));
};
z.g.yq = function(a) {
  if (!hK) {
    var b = this.qh;
    b || 229 != a.keyCode ? b && 229 != a.keyCode ? lK(a) && kK(this, a) : b && this.dispatchEvent(new iK("updateIme", a)) : jK(this, a);
  }
  lK(a) && (this.mB = a.keyCode);
};
z.g.AJ = function(a) {
  !hK && z.Td && 229 == this.mB && this.qh && kK(this, a);
};
z.g.xJ = function(a) {
  if (this.qh) {
    switch(a.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        kK(this, a);
    }
  }
};
z.g.F = function() {
  this.bf.Eb();
  this.Av.Eb();
  this.zA = null;
  gK.t.F.call(this);
};
(0,z.p)(mK, z.$);
z.g = mK.prototype;
z.g.Ya = (0,z.Ib)("ImePlugin");
z.g.Bf = function(a) {
  return "active-ime" === a;
};
z.g.enable = function(a) {
  mK.t.enable.call(this, a);
  this.no = new gK(a.V());
  this.no.qa("endIme", this.sE, !1, this);
};
z.g.disable = function(a) {
  (0,z.C)(this.no);
  mK.t.disable.call(this, a);
};
z.g.queryCommandValue = function() {
  return this.no.qh;
};
z.g.sE = function() {
  this.O.$j();
};
(0,z.p)(nK, z.$);
nK.prototype.Ya = (0,z.Ib)("KeyboardShortcutPlugin");
nK.prototype.Gm = function(a, b, c) {
  return c && b in this.Tt ? (this.Tt[b].ek.call(this.Tt[b].hq), !0) : !1;
};
nK.prototype.Sj = function(a, b, c) {
  this.fo[a] = {ek:b, hq:c};
};
nK.prototype.fc = function(a) {
  return a.keyCode in this.fo ? !!this.fo[a.keyCode].ek.call(this.fo[a.keyCode].hq, a) : !1;
};
(0,z.p)(oK, z.$);
z.g = oK.prototype;
z.g.Ya = (0,z.Ib)("SelectionNormalizingPlugin");
z.g.enable = function(a) {
  oK.t.enable.call(this, a);
  var b = a.V();
  this.sa.push((0,z.J)(b, "mouseup", this.BE, this));
  this.sa.push((0,z.J)(b, "mousedown", this.rj, this));
  (0,z.G)("variants.can_see_drop_caps") && a.qa("beforechange", this.Uh, !1, this);
};
z.g.disable = function(a) {
  oK.t.disable.call(this, a);
  (0,z.dg)(this.sa);
  this.sa.length = 0;
  a.Mf("beforechange", this.Uh, !1, this);
};
z.g.BE = function(a) {
  if (qK(a)) {
    var b = WE(0, a.target), c = (0,z.YC)(window);
    c && (uD((0,z.ke)(c), (0,z.le)(c), b.R, b.offset).select(), a.preventDefault());
  } else {
    (0,z.Lb)(this.uy.bind(this, 40));
  }
};
z.g.rj = function(a) {
  if (qK(a)) {
    var b = WE(0, a.target);
    (0,z.Qm)(function() {
      AE(b.R, b.offset).select();
    });
  }
};
z.g.fc = function(a) {
  var b;
  switch(a.keyCode) {
    case 39:
    ;
    case 37:
    ;
    case 40:
    ;
    case 38:
      (0,z.Lb)(this.uy.bind(this, a.keyCode));
      break;
    case 65:
      if (z.Mg ? a.metaKey : a.ctrlKey) {
        a.preventDefault();
        var c = this.O;
        a = (0,z.VH)(c);
        b = a.getSelection();
        if (b.start.S == b.end.S && pF(b)) {
          b = b.start.S;
          var d = (0,z.Z)(a, b);
          if ((0,z.oD)(d)) {
            return yH(a, b, 0, b, d.text.length, !1), (0,z.XH)(c), !0;
          }
        }
        b = (0,z.IF)(a) - 1;
        yH(a, 0, 0, b, (0,z.Z)(a, b).text.length, !1);
        (0,z.XH)(c);
        return!0;
      }
    ;
  }
  iF(a) && (a = (0,z.VH)(this.O), b = a.getSelection(), pF(b) || yH(a, b.start.S, b.start.offset, b.end.S, b.end.offset, b.ce()));
  return!1;
};
z.g.uy = function(a) {
  var b = this.O;
  if ((0,z.lJ)(b)) {
    var b = (0,z.VH)(b), c = 39 === a || 40 === a;
    a = rK(this, b, c, !0);
    c = rK(this, b, c, !1);
    (a || c) && (0,z.CF)(b);
  }
};
z.g.Uh = function() {
  var a = this.O, b = (0,z.lJ)(a);
  if (b) {
    var c = (0,z.KE)(b.Zd(), a.V()), d;
    if (d = c) {
      d = b.Fa(), d = (0,z.Ar)(c) ? (0,z.kg)(d, pK, c) : null;
    }
    d && b.isCollapsed() && (a = (0,z.EH)((0,z.VH)(a), c), -1 != a && (0,z.Lb)(this.sI.bind(this, a)));
  }
};
z.g.sI = function(a) {
  var b = (0,z.VH)(this.O), c = b.mb[a], c = (c = c && c.querySelector(".drop-cap-editable")) ? (0,z.jg)(c) : "";
  if (!(0,z.Ca)(c)) {
    var d = (0,z.Z)(b, a);
    d.text = c + d.text;
    (0,z.uH)(b, a);
    (0,z.CF)(b);
  }
};
(0,z.p)(tK, z.$);
tK.prototype.Ya = (0,z.Ib)("TypeOverPlugin");
tK.prototype.fc = function(a) {
  var b = this.O, c = (0,z.lJ)(b);
  iF(a) && !a.ctrlKey && c && !c.isCollapsed() && (a = (0,z.VH)(b).getSelection(), pF(a) && a.start.S === a.end.S || (0,z.TH)(new z.YH(!0, 1), b));
  return!1;
};
(0,z.p)(uK, z.$);
uK.prototype.Ya = (0,z.Ib)("UndoRedoPlugin");
uK.prototype.Bf = function(a) {
  return "+undo" == a || "+redo" == a;
};
uK.prototype.execCommand = function(a) {
  "+undo" == a ? (0,z.VH)(this.O).Tk() : "+redo" == a && (0,z.VH)(this.O).Sq();
  return!0;
};
uK.prototype.Gm = function(a, b, c) {
  if (!c) {
    return!1;
  }
  c = this.O;
  var d = null;
  "y" == b || "z" == b && a.shiftKey ? d = "+redo" : "z" == b && (d = "+undo");
  return d ? (c.execCommand(d), a.preventDefault(), !0) : !1;
};
(0,z.p)(z.vK, z.Uh);
z.g = z.vK.prototype;
z.g.la = null;
z.g.cl = null;
z.g.ij = null;
z.g.Xx = !0;
z.g.$h = !0;
z.g.isEnabled = function() {
  return this.$h;
};
z.g.gC = function(a) {
  a != this.$h && this.la && (this.la.Xb.contentEditable = a);
  this.$h = a;
};
z.g.Sj = function(a, b, c) {
  this.pz.Sj(a, b, c);
};
z.g.ka = function(a, b) {
  if (this.la) {
    if (b) {
      throw Error("Can only prepend plugins before editor is activated");
    }
    this.la.ka(a);
  } else {
    b ? this.Rl.unshift(a) : this.Rl.push(a);
  }
};
z.g.select = function() {
  (0,z.Oe)((0,z.Ce)(this.la.V()), void 0).select();
};
z.g.execCommand = function(a, b) {
  this.la.execCommand.apply(this.la, arguments);
};
z.g.queryCommandValue = function(a, b) {
  return this.la.queryCommandValue.apply(this.la, arguments);
};
z.g.va = function() {
  if (!this.cl || this.la.uk) {
    var a;
    if (!this.ij || this.la.uk) {
      var b = this.la.V();
      if (OJ(b)) {
        this.ij = (0,z.bk)((0,z.Zj)(new z.Xj, []), []);
      } else {
        a = (0,z.VH)(this.la);
        (0,z.BF)(a);
        (0,z.xH)(a);
        a = z.Pk.ia((0,z.Uk)(a.ac));
        b = IE(b, wK(this).sections);
        if (!a.Fb(b)) {
          throw new DF("richText model");
        }
        for (var b = (0,z.Yj)(a), c = 0;c < b.length;c++) {
          var d = (0,z.sl)(b[c]), e = d;
          8 != e.type && (gE(e, /\s+(?=\s)/g), gE(e, /^\s|\s$/g));
          e = d;
          (0,z.wl)(e, 4);
          (0,z.wl)(e, 5);
          b[c] = d.zb();
        }
        tE(b.concat((0,z.ak)(a) || []));
        b = (0,z.Yj)(a) || [];
        c = (0,z.nl)(a);
        for (d = 0;d < b.length;d++) {
          e = b[d];
          if (!(e = (0,z.qD)(e.g(), e.getMetadata() && e.getMetadata().yb()))) {
            var f = d, h = a, e = (0,z.Yj)(h), k = (0,z.Yj)(h)[f];
            e = rD(k.g(), k.Nc()) ? (h = (0,z.ak)(h)) ? (f = (0,z.Yk)(h, f)) && (0,z.bE)(f) ? 1 < (0,z.Zk)(h, h.indexOf(f), e.length) : !0 : !0 : !1;
          }
          e && (e = c, f = (0,z.Gk)(2).sb(d), (0,z.Lk)((0,z.Hk)(f), e), d--);
        }
        for (;b.length && 5 == (0,z.Ua)(b).g();) {
          d = c, e = (0,z.Gk)(2).sb(b.length - 1), (0,z.Lk)((0,z.Hk)(e), d);
        }
        this.ij = a;
      }
    }
    a = this.ij;
    if (this.Gj) {
      a = (0,z.pJ)(this.la).replace(/<br>/g, "\n");
      if (-1 != a.indexOf("\x3c")) {
        throw Error("Sanitization plugin failure");
      }
      a = wD(a);
    } else {
      a = (0,z.om)(a, z.Yf, wK(this));
    }
    this.cl = a;
  }
  return this.cl;
};
z.g.F = function() {
  if (this.la) {
    if (this.la.Qi != ZI) {
      var a = this.la;
      if (a.Qi == ZI) {
        throw Error("makeUneditable: Field is already uneditable");
      }
      a.Cd && MI(a.Cd);
      MI(a.tm);
      MI(a.hw);
      a.execCommand("clearlorem");
      uJ(a);
      var b = a.Xb;
      rJ == b.id && (rJ = null);
      eJ(a);
      if ((0,z.ka)(null)) {
        z.D && (0,z.EE)(b);
        b.innerHTML = null;
        var c = a.Xb;
        c.removeAttribute("contentEditable");
        c.removeAttribute("g_editable");
        c.removeAttribute("role");
        a.id ? c.id = a.id : c.removeAttribute("id");
        c.className = a.NK || "";
        var d = a.cssText;
        d ? (0,z.nd)(c, {style:d}) : c.removeAttribute("style");
        (0,z.ka)(a.LB) && ((0,z.lf)(c, "lineHeight", a.LB), a.LB = null);
      }
      a.$B();
      dJ(a);
      z.Td && b.blur();
      a.execCommand("updatelorem");
      a.dispatchEvent("unload");
      this.la.Xb.contentEditable = !1;
    }
    this.la.Eb();
    this.la = null;
  }
  z.vK.t.F.call(this);
};
z.g.Id = function() {
  return!1;
};
z.g.focus = function(a) {
  if (a) {
    try {
      cF(this.la.V().lastChild, !1);
    } catch (b) {
      this.la.focus();
    }
  } else {
    this.la.focus();
  }
};
z.g.on = function(a) {
  this.la && this.la.V() && (this.la.V().style.visibility = a ? "" : "hidden");
  this.Xx = a;
};
z.g.nb = z.Px;
z.g.vk = z.Px;
z.g.H = function() {
  z.vK.t.H.call(this);
  if (!this.la) {
    if (!window.document.getElementById(this.Qx)) {
      throw Error("Element must be in DOM before editor is activated");
    }
    this.la = new RJ(this.Qx);
    var a = this.nb();
    this.la.Kp = a;
    a = this.vk();
    this.la.Ty = a;
    this.la.xw = !0;
    this.la.ka(new uK);
    this.la.ka(this.pz);
    for (a = 0;a < this.Rl.length;a++) {
      this.la.ka(this.Rl[a]);
    }
    this.la.ka(new tK);
    this.la.qa(z.VI, this.Ts, !1, this);
    if (this.$h) {
      a = this.la;
      a.Qi = 1;
      var b = a.Xb;
      a.nodeName = b.nodeName;
      a.NK = b.className;
      a.cssText = b.style.cssText;
      b.className += " editable";
      a.rB(void 0);
      GF((0,z.VH)(this.la));
    }
    this.Rl.length = 0;
    a = (0,z.og)(this.la.V());
    a != window.document.body && z.Td && this.Mx.qa(a, ["keydown", "keypress", "keyup"], this.xH);
  }
  this.on(this.Xx);
};
z.g.xH = function(a) {
  if (a.target === a.currentTarget) {
    var b = (0,z.lJ)(this.la);
    (b = b && (0,z.vD)(b)) && (0,z.Jd)(this.la.V(), b) && ("keydown" === a.type ? this.la.yq(a) : "keypress" === a.type ? this.la.SA(a) : "keyup" === a.type && this.la.TA(a));
  }
};
z.g.ud = function(a) {
  this.Gj && (a = (0,z.Ea)(a).replace(/\n/g, "\x3cbr\x3e"));
  this.la.iw(!1, a, !1, !1);
  this.ij = this.cl = null;
};
z.g.Ts = function() {
  this.ij = this.cl = null;
  this.Q("change");
};
z.g.mu = z.Qx;
z.g.Iq = (0,z.n)(72);
(0,z.p)(z.xK, z.$);
z.xK.prototype.Ya = (0,z.Ib)("CancelEnterPlugin");
z.xK.prototype.fc = function(a) {
  return 13 === a.keyCode || 77 === a.keyCode && a.ctrlKey ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(z.yK, z.JJ);
z.g = z.yK.prototype;
z.g.Ya = (0,z.Ib)("DefaultFieldTextPlugin");
z.g.enable = function(a) {
  z.yK.t.enable.call(this, a);
  a.V().setAttribute("data-default-value", this.Sr);
  (ED(this.O.V(), !1) || OJ(this.O.V())) && AK(this);
};
z.g.disable = function(a) {
  a.Xb.removeAttribute("data-default-value");
  z.yK.t.disable.call(this, a);
};
z.g.Bf = function(a) {
  return "updatelorem" == a;
};
z.g.execCommand = function() {
  (ED(this.O.V(), !1) || OJ(this.O.V())) && AK(this);
};
z.g.lk = function() {
  NJ(this.O.V());
};
z.g.Fm = function() {
  ED(this.O.V(), !1) && AK(this);
};
(0,z.p)(z.CK, z.$);
z.CK.prototype.Ya = (0,z.Ib)("SanitizationPlugin");
z.CK.prototype.SB = function(a) {
  if (this.qt == z.iz) {
    var b = window.document.createElement("div");
    b.innerHTML = a;
    BK(b, this.qt);
    a = b.innerHTML;
  }
  var b = {hr:this.O.nb(), gr:!1}, c = window.document.createElement("div");
  c.innerHTML = a;
  return FF(c, b).V().innerHTML;
};
z.CK.prototype.Cu = function(a) {
  BK(a, this.qt);
};
(0,z.p)(z.DK, z.JJ);
z.g = z.DK.prototype;
z.g.Ya = (0,z.Ib)("TypeaheadPlugin");
z.g.enable = function(a) {
  z.DK.t.enable.call(this, a);
  this.sa = [(0,z.J)(a.V(), "click", this.eo, this)];
  this.Sb = window.document.createElement("div");
  this.Sb.className = "typeahead popover popover-bottom";
  this.ky = [(0,z.J)(this.Sb, "click", this.yE, this), (0,z.J)(this.Sb, "mouseover", this.AE, this), (0,z.J)(this.Sb, "mouseout", this.zE, this)];
};
z.g.disable = function(a) {
  (0,z.Dd)(this.Sb);
  (0,z.dg)(this.sa);
  (0,z.dg)(this.ky);
  this.Sb = null;
  this.L = "";
  this.cn = null;
  z.DK.t.disable.call(this, a);
};
z.g.fc = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  this.yz = !!~[40, 38, 9, 13, 27].indexOf(a.keyCode);
  GK(this, a);
  return!1;
};
z.g.zq = function(a) {
  if (this.yz || this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  GK(this, a);
  return!1;
};
z.g.jv = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      break;
    case 9:
    ;
    case 13:
      if (!this.Ne) {
        break;
      }
      EK(this);
      break;
    case 27:
      if (!this.Ne) {
        break;
      }
      FK(this);
      break;
    default:
      a = this.O, (0,z.lJ)(a).isCollapsed() && (0,z.TH)(hI(this.Gq), a), a = (0,z.vD)((0,z.lJ)(a)), "token" != a.getAttribute("rel") ? FK(this) : this.cn != a && (this.cn = a, this.L = (0,z.gF)(a), !this.L || 2 > this.L.length ? FK(this) : this.Kt = (0,z.r)(this.cw(), this.dH, this));
  }
  return!1;
};
z.g.lk = function() {
  this.ds = !0;
};
z.g.Fm = function() {
  this.ds = !1;
  !this.Ls && this.Ne && FK(this);
};
z.g.Sv = "left";
z.g.cw = function() {
  return this.ga.get("/search/users?q\x3d" + (0,window.encodeURIComponent)(this.L.substring(1)), {ma:!0});
};
z.g.eo = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.yE = function(a) {
  a.stopPropagation();
  a.preventDefault();
  EK(this);
  return!1;
};
z.g.AE = function(a) {
  this.Ls = !0;
  var b = this.Sb.querySelector(".active");
  b && (0,z.x)(b, "active");
  a.target != this.Sb && (a = (0,z.Od)(a.target, null, "typeahead-item")) && (0,z.w)(a, "active");
};
z.g.zE = function(a) {
  (0,z.Jd)(this.Sb, a.relatedTarget) || (this.Ls = !1, !this.ds && this.Ne && FK(this));
};
z.g.dH = function(a) {
  a = a.value;
  if (!a.length) {
    return FK(this);
  }
  this.lc(a.slice(0, 8));
};
z.g.lc = function(a) {
  this.Sb.innerHTML = (0,z.H)(this.view, {items:a});
  this.Sb.parentNode || this.gw.appendChild(this.Sb);
  a = (0,z.sg)(this.cn);
  var b = "left" == this.Sv ? 6 : this.cn.offsetWidth / 2;
  this.Sb.style.top = a.top + this.gw.scrollTop + a.height - 5 + "px";
  this.Sb.style.left = a.left - this.Sb.offsetWidth / 2 + b - (0,z.sg)(this.gw).left + "px";
  HK(this);
  this.Ne = !0;
};
(0,z.p)(IK, z.vK);
z.g = IK.prototype;
z.g.Ot = !1;
z.g.Wh = "";
z.g.Yl = 0;
z.g.vk = z.Qx;
z.g.ok = function() {
  return this.Wh.trim() != this.va().trim();
};
z.g.ze = function() {
  return this.uF;
};
z.g.clear = function() {
  this.ud("");
};
z.g.save = function() {
  this.va().length < this.oe && this.sf();
};
z.g.Qu = function() {
  this.Au() && (0,window.confirm)(this.bv()) ? ((0,z.t)(this.jd.Dd(this.tq()), (0,z.cp)(this.W, "Sorry, your attempt to delete failed. Please try again.")), this.Q("delete")) : JK(this);
};
z.g.F = function() {
  (0,window.clearTimeout)(this.Yl);
  IK.t.F.call(this);
};
z.g.H = function() {
  function a(a) {
    a.stopPropagation();
  }
  IK.t.H.call(this);
  this.Wh = this.va();
  this.ud(this.Wh);
  this.Sj(13, this.Vs, this);
  this.Sj(27, this.Ws, this);
  this.la.qa("blur", this.Us, !1, this);
  var b = this.la.V();
  (0,z.J)(b, "keydown", a);
  (0,z.J)(b, "keyup", a);
  (0,z.J)(b, "keypress", a);
};
z.g.Gf = function(a) {
  return a;
};
z.g.sf = function() {
  if (this.isEnabled()) {
    var a = this.va().trim();
    if (a) {
      this.gC(!1);
      var b = this.tq(), c = this.ev();
      (0,z.tc)((0,z.t)((0,z.r)(this.jd.send(c, b, this.fv(a), {ma:!0}), this.tG, this), (0,z.cp)(this.W, "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again.")), this.gC.bind(this, !0));
    } else {
      (0,z.Qm)(this.Qu, this);
    }
  }
};
z.g.tG = function(a) {
  a = (0,z.Wj)(a.value, a.references);
  this.Q("save", this.Gf(a));
};
z.g.Vs = function(a) {
  if (this.gm && this.gm.Ne) {
    return!1;
  }
  a.shiftKey || (a.preventDefault(), this.save());
  return!0;
};
z.g.Ws = function(a) {
  if (this.gm && this.gm.Ne) {
    return!1;
  }
  a.preventDefault();
  JK(this);
  return!1;
};
z.g.Us = function() {
  this.Ot && (this.va().length >= this.oe ? (0,window.confirm)(this.gv()) ? JK(this) : this.focus() : this.Yl = (0,window.setTimeout)(this.sf.bind(this), 100));
};
(0,z.p)(KK, IK);
z.g = KK.prototype;
z.g.rr = null;
z.g.Pw = null;
z.g.ns = null;
z.g.ms = null;
z.g.Ox = null;
z.g.bv = function() {
  return jL();
};
z.g.gv = function() {
  return kL();
};
z.g.Au = function() {
  return!!this.ze();
};
z.g.Gf = function(a) {
  return{id:a.noteId, author:(0,z.G)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], Yz:"just now", newHighlight:a.newHighlight || null, highlightId:a.highlightId || null};
};
z.g.ev = function() {
  return this.ze() ? "put" : "post";
};
z.g.tq = function() {
  return "/p/" + this.U + "/notes/" + (this.ze() || "new");
};
z.g.fv = function(a) {
  a = {content:a};
  this.rr && (a.anchor = this.rr, a.anchorContent = this.Pw);
  null != this.ns && null != this.ms && (a.highlightStart = this.ns, a.highlightEnd = this.ms, a.highlightContent = this.Ox);
  return a;
};
(0,z.p)(UK, z.Uh);
UK.prototype.BF = function(a) {
  if (a = (0,z.EJ)(this.Md, a.target)) {
    var b = (0,z.AJ)(this.Md, a), c = this.Sc[a];
    c && c !== this.sj && b && !ED(b, !1) && (this.sj && (0,z.x)(this.sj, "notes-marker-highlighted"), (0,z.w)(c, "notes-marker-highlighted"), this.sj = c, (0,z.C)(this.He), this.He = new z.Gw("mouseover", [b, c]), this.He.H(), (0,z.tc)(this.He.ic.Ad(), function() {
      (0,z.x)(c, "notes-marker-highlighted");
      this.sj === c && (this.sj = null);
    }, this));
  }
};
UK.prototype.H = function() {
  UK.t.H.call(this);
  z.Uy || (0,z.DJ)(this.Md).forEach(function(a) {
    this.qa(a, "mouseover", this.BF);
  }, this);
};
UK.prototype.F = function() {
  (0,z.C)(this.He);
  (0,z.Dd)(this.di);
  this.Sc = this.di = null;
  UK.t.F.call(this);
};
(0,z.p)($K, z.Sh);
$K.prototype.load = function() {
  return(0,z.t)((0,z.r)(this.jd.get("/p/" + this.U + "/notes", {ma:!0, background:!0}), this.eH, this), z.K);
};
$K.prototype.df = function() {
  return this.ll;
};
$K.prototype.kg = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.Uy[b];
  return c && !this.po ? c : this.Uy[b] = (0,z.Hr)(a);
};
$K.prototype.eH = function(a) {
  var b = a.references.User;
  this.ag = b[a.post.creatorId];
  var c = a.value;
  if (c) {
    for (var d = 0;d < c.length;d++) {
      var e = c[d];
      if (e.state != z.dL) {
        var f = e.replies, h = b;
        if (f) {
          for (var k = 0;k < f.length;k++) {
            var l = f[k];
            l.author = h[l.author];
          }
        }
        f = e;
        h = b;
        (0,z.YK)(this, e.anchor).add({id:f.noteId, author:h[f.author], postId:this.U, highlightId:f.highlightId, anchor:f.anchor, noteId:f.noteId, content:f.content, state:f.state, createdAt:f.createdAt, replies:f.replies || []});
      }
    }
  }
  if (a = a.highlights) {
    for (b = 0;b < a.length;b++) {
      this.vl[a[b].id] = new z.yJ(new z.yJ(a[b]));
    }
  }
  this.ll = !0;
};
(0,z.p)(fL, IK);
z.g = fL.prototype;
z.g.bv = function() {
  return "Are you sure you want to delete this reply?";
};
z.g.gv = function() {
  return "Your reply is too long, do you want to abandon your changes?";
};
z.g.Au = function() {
  return!!this.It;
};
z.g.Gf = function(a) {
  return{id:a.replyId, author:(0,z.G)("currentUser"), postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt, Yz:"just now"};
};
z.g.ev = function() {
  return this.It ? "put" : "post";
};
z.g.tq = function() {
  return "/p/" + this.U + "/notes/" + this.ze() + "/" + (this.It || "new-reply");
};
z.g.fv = function(a) {
  return{content:a};
};
(0,z.p)(gL, z.ge);
gL.prototype.fn = function() {
  if (!this.dm) {
    return null;
  }
  var a = iL(this.dm);
  if (!a) {
    return null;
  }
  var b = iL(this.bs);
  return b ? (0,z.Pe)(a.R, a.offset, b.R, b.offset) : null;
};
z.dL = "HIDDEN";
(0,z.p)(z.lL, z.B);
z.g = z.lL.prototype;
z.g.Sa = null;
z.g.re = null;
z.g.Sd = null;
z.g.Df = null;
z.g.xh = 0;
z.g.F = function() {
  oL(this);
  (0,z.wL)(this, null);
  this.Qq.xa("change", this.Ix, this);
  this.ry && (0,z.dg)(this.ry);
  (0,z.dg)(this.hb);
  this.hb.length = 0;
  (0,z.Hg)(this.xc.di);
  (0,z.Hg)(this.Db);
  (0,z.Cg)("cancel-notes-vote");
  (0,z.Cg)("save-notes-vote");
  (0,z.Dd)(this.Db);
  this.data.Eb();
  this.rm && this.rm.cancel();
  (0,z.C)(this.xc);
  this.ry = this.rm = this.data = this.Db = this.anchors = this.xc = null;
  (0,z.w)(window.document.documentElement, "mobile-notes-variant");
  z.lL.t.F.call(this);
};
z.g.Ix = function(a) {
  "vote" == a && (0,z.G)("variants.enable_recommend_notes") && (this.Qq.get("vote") ? this.Nv() : this.Li());
};
z.g.FB = function() {
  this.Li();
  this.vi.H("Note saved.", {type:z.gp});
};
z.g.Gv = function() {
  if (!this.Zc.ok()) {
    return this.Li();
  }
  this.Zj.confirm("Are you sure you want to abandon this note?").C(z.qB, this.Li, this);
};
z.g.CG = function() {
  this.Zc && this.Zc.save();
};
z.g.Li = function() {
};
z.g.Nv = function() {
};
z.g.Hv = function() {
};
z.g.Lv = function() {
};
z.g.Kv = function() {
};
z.g.Mv = function() {
};
z.g.EB = function() {
};
z.g.ih = function() {
};
z.g.GA = function() {
};
z.g.cE = function(a) {
  a = a.Pa();
  a.Di = rE(a.content, {rel:"nofollow", target:""});
  a.Di = SE(a.Di);
  for (var b = 0;b < a.replies.length;++b) {
    a.replies[b].Di = rE(a.replies[b].content, {rel:"nofollow", target:""}), a.replies[b].Di = SE(a.replies[b].Di);
  }
  return a;
};
z.g.JG = function(a) {
  (0,z.uL)(this, a.value);
};
z.g.DG = function(a) {
  (a = this.Mb["reply_" + a.value]) && a.save();
};
z.g.IF = function(a) {
  var b = this.Mb["reply_" + a.value];
  b && JK(b);
  (a = (0,z.Od)(a.target, null, "notes-note")) && (0,z.x)(a, "notes-show-reply-editor");
};
z.g.$F = function(a) {
  function b() {
    (0,z.x)(h, "notes-edit-mode");
    (0,z.x)(f, "notes-reply-edit-mode");
    (0,z.C)(k);
    delete this.Mb["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], f = (0,z.Od)(a.target, null, "notes-note"), h = (0,z.Od)(a.target, null, "notes-reply");
  (0,z.w)(h, "notes-edit-mode");
  (0,z.x)(f, "notes-show-reply-editor");
  (0,z.w)(f, "notes-reply-edit-mode");
  a = h.querySelector(".notes-content");
  var k = new fL(this.Kk, a, this.postId, d, e);
  k.C("save", function(a) {
    for (var c = (0,z.aL)(this.data, d, this.data.pa), f = c.get("replies"), h = 0;h < f.length;h++) {
      if (f[h].replyId == e) {
        c.add("replies", a, h);
        break;
      }
    }
    (0,z.qL)(this, z.Pz, c, {replyId:e});
    b.call(this);
  }, this);
  k.C("delete", function() {
    for (var a = (0,z.aL)(this.data, d, this.data.pa), c = a.get("replies"), f = 0;f < c.length;f++) {
      if (c[f].replyId == e) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.qL)(this, z.Qz, a, {replyId:e});
    b.call(this);
  }, this);
  k.C("cancel", function() {
    var a = (0,z.aL)(this.data, d, this.data.pa);
    eD(this.Df, a);
    b.call(this);
  }, this);
  k.C("change", this.ih, this);
  k.focus(!0);
  this.Mb["reply_" + e] = k;
};
z.g.SF = function(a) {
  (a = this.Mb["reply_" + a.value]) && a.Qu();
};
z.g.EF = function(a) {
  a = a.get("id");
  this.Mb[a] && ((0,z.C)(this.Mb[a]), delete this.Mb[a]);
  this.Mb["reply_" + a] && ((0,z.C)(this.Mb["reply_" + a]), delete this.Mb["reply_" + a]);
};
z.g.AF = function(a, b) {
  (0,z.x)(b, "notes-show-reply-editor");
  b.setAttribute("data-note-id", (0,z.gj)(a, "id"));
};
z.g.DF = function(a) {
  (0,z.t)(pL(this, (0,z.aL)(this.data, a.value, this.data.pa), "PUBLIC"), (0,z.cp)(this.Zj, "Sorry, we couldn't approve the note. Please try again later and make sure you are logged in."));
};
z.g.PG = function(a) {
  (0,z.t)(pL(this, (0,z.aL)(this.data, a.value, this.data.pa), "NEW"), (0,z.cp)(this.Zj, "Sorry, we couldn't unapprove the note. Please try again later and make sure you are logged in."));
};
z.g.ZF = function(a) {
  function b() {
    (0,z.x)(d, "notes-edit-mode");
    (0,z.C)(f);
    delete this.Mb[c];
  }
  var c = a.value, d = (0,z.Od)(a.target, null, "notes-note");
  (0,z.w)(d, "notes-edit-mode");
  (0,z.x)(d, "notes-show-reply-editor");
  var e = d.querySelector(".notes-content"), f = new KK(this.Kk, e, this.postId, a.value);
  f.C("save", function(a) {
    var d = (0,z.aL)(this.data, c, this.data.pa);
    a.replies = d.get("replies");
    d.Yi(a);
    (0,z.qL)(this, z.Lz, d);
    b.call(this);
  }, this);
  f.C("delete", function() {
    var a = (0,z.aL)(this.data, c, this.data.pa);
    (0,z.qL)(this, z.Mz, a);
    (0,z.ij)(a);
    b.call(this);
  }, this);
  f.C("cancel", function() {
    var a = (0,z.aL)(this.data, c, this.data.pa);
    eD(this.Df, a);
    b.call(this);
  }, this);
  f.C("change", this.ih, this);
  f.focus(!0);
  this.Mb[c] = f;
};
z.g.BG = function(a) {
  (a = rL(this, a)) && a.save();
};
z.g.HF = function(a) {
  (a = rL(this, a)) && JK(a);
};
z.g.RF = function(a) {
  (a = rL(this, a)) && a.Qu();
};
z.g.sG = function(a) {
  for (var b = 0;b < a.length;b++) {
    (0,z.ZK)(this.xc, (0,z.gj)(a[b], "anchor"));
  }
};
z.g.fG = function(a) {
  a = a.value;
  this.re == a && (this.re = null);
  (0,z.t)(pL(this, (0,z.aL)(this.data, a, this.data.pa), z.dL), (0,z.cp)(this.Zj, "Sorry, we couldn't hide the note. Please try again later and make sure you are logged in."));
};
z.g.rG = function(a) {
  a.C("add", this.sG, this);
  a.C("change", this.EB, this);
  a.C("remove", this.Lv, this);
};
z.g.jl = function() {
  var a = window.document.createElement("div");
  a.className = "notes-container";
  a.innerHTML = (0,z.H)(PK);
  this.Tv.appendChild(a);
  return a;
};
z.g.L = function(a) {
  return this.Db.querySelector(a);
};
z.g.dj = function() {
  XK(this.xc);
  this.xc.Sc[this.data.pa] || (0,z.wL)(this, null);
};
z.g.HB = function(a) {
  this.nw(a);
};
z.g.nw = function(a) {
  (a = (0,z.Od)(a.target, null, "notes-replies")) && (0,z.x)(a, "notes-replies-hidden");
};
z.g.im = function() {
  var a = this.data.pa, b = this.L(".notes-items"), a = (0,z.YK)(this.data, a), b = new z.Vu(b, a, RK);
  b.As = "notes-note";
  this.Df = (0,z.Jo)(b.Mk(this.cE), {canAdminister:this.canAdminister, Uv:this.data.ag, xh:this.xh}, "note");
  this.Df.C("before-clear", this.EF, this);
  this.Df.C("after-draw", this.AF, this);
  this.Df.H();
  (0,z.VK)(this.xc, this.data.pa, !0);
  (0,z.w)(this.screen.J, "notes-list-visible");
  (0,z.Fj)(z.Jz);
};
z.g.Mu = function() {
  (0,z.Yr)(this.Tj, "");
  (0,z.x)(this.screen.J, "notes-list-visible");
  (0,z.ur)(this.si, function(a) {
    (0,z.x)(a, "grid-breaking-slide");
  });
};
z.g.getSelection = function() {
  var a = (0,z.YC)();
  if (!a || a.isCollapsed()) {
    return null;
  }
  var b = (0,z.vD)(a), c = (0,z.CJ)(this.anchors, b);
  if (!c) {
    return null;
  }
  c = (b = (0,z.kg)(b, z.nE, c)) && this.data.kg(b);
  if (!b) {
    return null;
  }
  var d = (0,z.XE)(a, b, !0), e = (0,z.XE)(a, b, !1);
  return-1 == d || -1 == e ? null : new z.eL(a, b, new z.yJ({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.text.substring(d, e)}));
};
z.g.iG = function() {
  this.Vp((0,z.zL)());
};
(0,z.p)(z.BL, IK);
z.g = z.BL.prototype;
z.g.bv = function() {
  return jL();
};
z.g.gv = function() {
  return kL();
};
z.g.Au = function() {
  return!!this.ze();
};
z.g.Gf = function(a) {
  return{id:a.noteId, author:(0,z.G)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, Yz:"just now"};
};
z.g.ev = function() {
  return this.ze() ? "put" : "post";
};
z.g.tq = function() {
  return "/p/" + this.U + "/notes/" + (this.ze() || "new");
};
z.g.fv = function(a) {
  return{content:a, anchor:"vote"};
};
(0,z.p)(z.CL, z.vK);
z.CL.prototype.vk = z.Qx;
z.g = z.DL.prototype;
z.g.va = function() {
  return this.yb() ? z.Pk.ia(this.cf) : null;
};
z.g.yb = function() {
  return this.cf.yb();
};
z.g.Yd = function() {
  return this.cf.Yd();
};
z.g.wq = function(a) {
  return(0,z.H)(z.zi, EL(this, a));
};
z.g.De = function(a) {
  this.cf.De(a);
};
z.g.Lk = function(a) {
  this.cf.Lk(a);
};
z.g.vg = function(a) {
  this.cf.vg(a);
};
z.g.Ok = (0,z.n)(5);
z.g = z.HL.prototype;
z.g.Jf = function(a) {
  a = a || "";
  this.aa.De(a);
  a ? (IL(this), this.element.setAttribute("data-image-id", a), this.Un && this.Un.removeAttribute("data-scroll-disabled")) : (this.element.removeAttribute("data-image-id"), this.Un && this.Un.setAttribute("data-scroll-disabled", !0));
  var b = FL(this.aa);
  return(0,z.r)(this.$a.reset(), function() {
    LL(this, b);
  }, this);
};
z.g.on = function(a) {
  this.element.style.display = a ? "" : "none";
};
z.g.fL = function() {
  KL(this, "cover" == this.aa.Yd() ? "contain" : "cover");
};
z.g.MA = function() {
  var a = "." + this.aa.Yd() + "-edit .picker-target";
  return this.element.querySelector(a);
};
z.g.cr = function(a, b) {
  a.src = b;
  a.style.display = "";
};
z.g.mv = function(a) {
  a.style.display = "none";
};
(0,z.p)(OL, z.Uh);
z.g = OL.prototype;
z.g.H = function() {
  OL.t.H.call(this);
  this.qa(this.ja, "dragstart", (0,z.bF)(this.XF));
  this.qa(this.ja, "dragenter", (0,z.bF)(this.UF));
  this.qa(this.ja, "dragleave", (0,z.bF)(this.VF));
  this.qa(this.ja, "dragexit", (0,z.bF)(z.ea));
  this.qa(this.ja, "dragover", (0,z.bF)(z.ea));
  this.qa(this.ja, "drop", (0,z.bF)(this.YF));
};
z.g.XF = function(a) {
  a.RM = "copy";
};
z.g.UF = function(a) {
  (0,z.w)(a.currentTarget, "image-picker-dragover");
};
z.g.VF = function(a) {
  var b = (0,z.kf)((0,z.sg)(a.currentTarget));
  (a.x < b.left || a.clientX > b.right || a.y > b.bottom || a.clientY < b.top) && (0,z.x)(a.currentTarget, "image-picker-dragover");
};
z.g.YF = function(a) {
  (0,z.x)(a.currentTarget, "image-picker-dragover");
  a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files[0] && this.ub.start(a.dataTransfer.files[0]);
};
var zM;
(0,z.p)(PL, z.B);
PL.prototype.F = function() {
  this.fg && (this.fg.cancel(), (0,z.x)(this.mj, this.Hp));
  this.fg = null;
};
PL.prototype.FD = function() {
  (0,z.dg)(this.fu);
  this.fg = this.fu = null;
};
PL.prototype.start = function() {
  this.fg = (0,z.tc)(new z.nc, this.FD, this);
  if (!(0,z.ga)(zM)) {
    if (z.D) {
      zM = (0,z.Xc)("10.0");
    } else {
      var a = window.document.createElement("div"), b = (0,z.gf)();
      a.innerHTML = '\x3cdiv style\x3d"' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;"\x3e';
      zM = "" != (0,z.of)(a.firstChild, "transition");
    }
  }
  if (!zM) {
    return this.fg.Ba(), this.fg;
  }
  this.fu = (0,z.J)(this.au, z.Un, this.ct, this);
  this.dp ? ((0,z.w)(this.mj, this.dp), (0,z.tg)(this.mj), (0,z.Mc)(this.mj, this.dp, this.Hp)) : (0,z.w)(this.mj, this.Hp);
  return this.fg;
};
PL.prototype.ct = function(a) {
  a.target == this.au && ((0,z.x)(this.mj, this.Hp), this.fg.Ba());
};
(0,z.p)(SL, z.Sh);
var TL = "pending-image";
SL.prototype.reset = function() {
  return this.aa.yb() ? this.set("has-image") : this.set("no-image", !0);
};
SL.prototype.set = function(a, b) {
  (0,z.tc)(this.Cr, function() {
    if (this.$a != a) {
      var b = (0,z.Ec)();
      this.Q("change", a, this.$a, b);
      return b;
    }
  }, this);
  b ? ((0,z.Mc)(this.ja, this.$a, a), this.$a = a) : (0,z.r)(this.Cr, function() {
    (0,z.Mc)(this.ja, this.$a, a);
    this.$a = a;
  }, this);
  return this.Cr.Ad();
};
SL.prototype.get = function() {
  return this.$a;
};
SL.prototype.Id = function() {
  return this.$a === TL || "uploading-image" === this.$a;
};
(0,z.p)(UL, z.Uh);
UL.prototype.H = function() {
  UL.t.H.call(this);
  this.$a.C("change", this.xz, this);
  this.Ha.C(z.AM, this.cx, this);
};
UL.prototype.ha = function() {
  UL.t.ha.call(this);
  this.$a.xa("change", this.xz, this);
  this.Ha.xa(z.AM, this.cx, this);
};
UL.prototype.xz = function(a, b, c) {
  var d = z.Pk.ia(this.aa.cf);
  d && "full" == d.Yd() && ("no-image" == a ? VL(this, c) : "no-image" == b ? WL(this, c) : "has-image" == b && "uploading-image" == a && (a = this.ja.querySelector(".picker-target-clone")) && this.yc.cr(a, this.aa.Nr));
};
UL.prototype.cx = function() {
  (0,z.tc)(QL(RL(new PL(this.ja, "transition-picker-image")), this.ja.querySelector(".picker-target")).start(), function() {
    var a = this.ja.querySelector(".picker-target-clone");
    a && this.yc.mv(a);
  }, this);
};
cM.prototype.reset = function() {
  this.ja && (this.ja.style.backgroundImage = "");
};
cM.prototype.show = function(a) {
  this.ja && (this.ja.style.backgroundImage = 'url("' + a + '")', this.ja.style.display = "block");
};
(0,z.p)(gM, z.bh);
z.g = gM.prototype;
z.g.ta = null;
z.g.Jc = null;
z.g.Ti = function() {
  this.ta && window.document.body.removeChild(this.ta);
  this.ta = window.document.createElement("input");
  this.ta.type = "file";
  this.ta.name = "uploadedFile";
  this.ta.value = "";
  this.ta.style.position = "absolute";
  this.ta.style.left = "-9999px";
  this.ta.style.top = "-9999px";
  window.document.body.appendChild(this.ta);
  (0,z.J)(this.ta, "change", this.oG, this);
  this.ta.click();
};
z.g.start = function(a) {
  this.abort();
  if (5242880 < a.size) {
    a = Error("File is too big"), a.ov = 413, this.Q("error", a);
  } else {
    var b = new window.FormData;
    b.append("uploadedFile", a);
    this.Jc = (0,z.sh)();
    (0,z.J)(this.Jc.upload, "progress", this.wG, this);
    (0,z.J)(this.Jc, "load", this.Nl, this);
    (0,z.J)(this.Jc, "error", this.Qg, this);
    (0,z.J)(this.Jc, "timeout", this.Qg, this);
    (0,z.J)(this.Jc, "abort", this.xF, this);
    this.Jc.open("POST", "/_/upload");
    this.Jc.setRequestHeader("X-XSRF-Token", "1");
    this.Jc.send(b);
    this.Q("start");
    this.Q("preview", a);
  }
};
z.g.abort = function() {
  this.Jc && (this.Jc.abort(), this.Jc = null);
};
z.g.F = function() {
  this.abort();
  this.Ph();
  gM.t.F.call(this);
};
z.g.oG = function() {
  this.ta && this.ta.files[0] && this.start(this.ta.files[0]);
};
z.g.wG = function(a) {
  var b = a.lengthComputable ? a.total : 0;
  this.Q("progress", b ? a.loaded / b : 0);
};
z.g.Nl = function() {
  if (4 == this.Jc.readyState) {
    if (200 == this.Jc.status) {
      var a = (0,z.xw)(this.Jc.responseText);
      try {
        var b = window.JSON.parse(a);
        this.Q("success", b.payload.value.fileId);
      } catch (c) {
        this.Q("error", c);
      }
    } else {
      a = Error("Upload error"), a.ov = this.Jc.status, this.Q("error", a);
    }
    this.Ph();
  }
};
z.g.Qg = function(a) {
  this.Q("error", a || Error("Unknown upload error"));
  this.Ph();
};
z.g.xF = function() {
  this.Q("abort", dM());
  this.Ph();
};
z.g.Ph = function() {
  this.Jc = null;
  this.ta && (window.document.body.removeChild(this.ta), this.ta = null);
};
(0,z.p)(hM, z.bh);
z.g = hM.prototype;
z.g.bo = "";
z.g.mf = null;
z.g.Uf = null;
z.g.us = !1;
z.g.Ti = function() {
  this.abort();
  this.us = !0;
  this.bo = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if (this.Uf = this.W.open({title:"Please choose an image", bodyHtml:VE({oJ:this.bo})})) {
    this.Uf.C("close", this.MF, this);
    var a = this.Uf.L('input[type\x3d"file"]');
    (0,z.J)(a, "change", this.Ts, this);
  }
  this.Q("start");
};
z.g.abort = function() {
  this.us && (this.Q("abort", dM()), this.Ph());
};
z.g.start = function(a) {
  if (a) {
    throw Error("Direct file uploads not supported");
  }
};
z.g.F = function() {
  this.abort();
  hM.t.F.call(this);
};
z.g.Ts = function(a) {
  this.mf = window.document.createElement("iframe");
  this.mf.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.mf.setAttribute("id", this.bo);
  this.mf.setAttribute("name", this.bo);
  window.document.body.appendChild(this.mf);
  (0,z.J)(this.mf, "load", this.Nl, this);
  this.Uf && (this.Uf.L("form").submit(), (0,z.w)(this.Uf.L(".overlay-dialog"), "uploading-image"));
  a.preventDefault();
};
z.g.MF = function() {
  this.abort();
};
z.g.Nl = function() {
  var a = (0,z.jg)(this.mf.contentWindow.document.body);
  a && (this.Q("success", a), this.Ph());
};
z.g.Ph = function() {
  this.us = !1;
  this.mf && (0,z.Dd)(this.mf);
  this.Uf.close();
  this.mf = this.Uf = null;
};
(0,z.p)(z.iM, z.bh);
z.g = z.iM.prototype;
z.g.Ti = function() {
  this.pf.Ti();
};
z.g.start = function(a) {
  this.pf.start(a);
};
z.g.abort = function() {
  this.pf.abort();
};
z.g.F = function() {
  this.Vl();
  (0,z.C)(this.pf);
  z.iM.t.F.call(this);
};
z.g.Vl = function() {
  this.qf = null;
  this.fp && ((0,window.clearInterval)(this.fp), this.fp = null);
  this.rf && (window.URL.revokeObjectURL(this.rf), this.rf = null);
  this.wj && (this.wj.cancel(), this.wj = null);
};
z.g.gt = function() {
  this.Vl();
  this.qf = new z.dk;
  this.Q("start");
};
z.g.ft = function(a) {
  this.Q("progress", 0.9 * a);
};
z.g.SG = function(a) {
  this.qf.De(a);
  var b = 0.9;
  this.fp = window.setInterval(function() {
    this.Q("progress", b);
    b = Math.pow(b, 0.9);
  }.bind(this), 100);
  a = this.nF(a);
  a = this.of.load(a);
  this.wj && (a = (0,z.vc)(a, this.wj));
  (0,z.tc)((0,z.t)((0,z.r)(a, function() {
    this.Q("success", this.qf);
  }, this), this.Ro, this), this.Vl, this);
};
z.g.Ro = function(a) {
  this.Q("error", a);
  this.Vl();
};
z.g.dt = function(a) {
  this.Q("abort", a);
  this.Vl();
};
z.g.et = function(a) {
  this.wj = (0,z.r)(aM(a), function(a) {
    this.rf = a;
    this.Q("preview", a);
    return jM(this, a);
  }, this);
};
z.g = kM.prototype;
z.g.Ti = function() {
  this.ub.Ti();
};
z.g.start = function(a) {
  this.ub.start(a);
};
z.g.abort = function() {
  this.ub.abort();
};
z.g.gt = function() {
  this.$a.set("uploading-image");
  this.Ij && (this.Ij.style.width = "0");
  this.rf.reset();
  this.Ha.Q(z.BM);
};
z.g.ft = function(a) {
  this.Ij && (this.Ij.style.width = Math.floor(100 * a) + "%");
};
z.g.RG = function(a) {
  this.aa.vg("");
  GL(this.aa, a.Hi(), a.Bm());
  var b = a.yb();
  this.Ij && (this.Ij.style.width = "100%");
  (0,z.r)(this.yc.Jf(b), function() {
    this.Ha.Q(z.AM, b);
  }, this);
};
z.g.Ro = function(a) {
  var b = a.ov;
  this.W.error(413 == b ? (0,z.eM)() : 415 == b ? (0,z.fM)() : "An error occured while uploading an image. Please try again, if the problem persists, try converting to a different image format (for example JPEG).");
  this.rf.reset();
  JL(this.yc);
  this.Ha.Q(z.CM, a);
};
z.g.dt = function(a) {
  this.rf.reset();
  JL(this.yc);
  this.Ha.Q(z.DM, a);
};
z.g.et = function(a) {
  this.rf.show(a);
};
(0,z.p)(lM, z.Uh);
lM.prototype.H = function() {
  lM.t.H.call(this);
  (0,z.Eg)(this.ja).D("wash", this.WE, this);
};
lM.prototype.ha = function() {
  lM.t.ha.call(this);
  (0,z.Eg)(this.ja).clear("wash");
};
lM.prototype.WE = function(a) {
  this.aa.vg(a.value);
  ML(this.yc);
};
z.BM = "start";
z.AM = "complete";
z.CM = "error";
z.DM = "abort";
z.NL = "change";
(0,z.p)(z.mM, z.jn);
z.g = z.mM.prototype;
z.g.focus = function() {
};
z.g.on = function(a) {
  this.yc.on(a);
};
z.g.va = function() {
  return this.aa.va();
};
z.g.Id = function() {
  return this.$a.Id();
};
z.g.H = function() {
  z.mM.t.H.call(this);
  (0,z.Eg)(this.ja).D("pick-image", this.ub.Ti, this.ub).D("cancel-upload", this.abort, this).D("remove-image", function() {
    this.yc.Jf("");
  }, this).D("toggle-background-size", this.yc.fL, this.yc);
  this.aa.yb() && IL(this.yc);
};
z.g.ha = function() {
  (0,z.Hg)(this.ja);
  this.abort();
  z.mM.t.ha.call(this);
};
z.g.reset = function() {
  return(0,z.r)(this.abort(), function() {
    JL(this.yc);
    this.ub.rf.reset();
  }, this);
};
z.g.abort = function() {
  this.ub && this.ub.abort();
  return this.$a.reset();
};
z.g.lA = function(a, b) {
  return new z.DL(a, b);
};
z.g.mu = z.Qx;
z.g.Iq = z.ea;
(0,z.p)(z.nM, z.mM);
z.nM.prototype.mA = function(a, b, c, d, e) {
  return new pM(a, b, c, d, e);
};
z.nM.prototype.lA = function(a, b) {
  return new oM(a, b, this.bu);
};
(0,z.p)(oM, z.DL);
oM.prototype.wq = function(a, b) {
  return(0,z.H)(this.bu ? z.Bi : z.Ci, {image:EL(this, a), oh:b});
};
(0,z.p)(pM, z.HL);
pM.prototype.MA = function() {
  return this.element.querySelector(".picker-target") || this.element;
};
pM.prototype.cr = function(a, b) {
  a.style.backgroundImage = "url(" + b + ")";
};
pM.prototype.mv = function(a) {
  a.style.backgroundImage = "";
};
})(_mdm);
