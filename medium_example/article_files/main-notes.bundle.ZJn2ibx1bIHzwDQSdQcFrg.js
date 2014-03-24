(function(z){
var kP = function(a) {
  return a.Db.querySelector(".notes-container-scroller");
};
var lP = function(a, b, c) {
  return a.jd.put("/p/" + a.U + "/notes/" + c + "/" + b + "/state", {state:z.dL}, {ma:!0});
};
var mP = function(a) {
  return "“" + (0,z.O)(a.content) + "” —@" + (0,z.O)(a.username) + " " + (0,z.O)(a.url);
};
var nP = function(a, b, c, d, e, f) {
  z.lL.call(this, a, b, c, d);
  this.po = f;
  this.Jp = a.get("twitter");
  this.ra = a.get("dom-monitor");
  this.ra.C("resize-end", this.Ej, this);
  this.ra.C("inner-resize-end", this.Ej, this);
  b.get("isPublished");
  this.Ja = a.get("popover");
  this.Ss = this.vy = null;
  (0,z.Eg)(this.Db).D("hide-reply", this.gG, this).D("start-note", this.IG, this).D("show-note-permalink", this.HG, this);
  e.C("update", this.Sy, this);
  e.C("highlight", this.Ey, this);
  e.C("twitter", this.Dy, this);
  this.Va = e;
  (0,z.DJ)(this.anchors).forEach(function(a) {
    this.hb.push((0,z.J)(a, "click", this.EG, this));
  }, this);
  this.hb.push((0,z.J)(window.document.body, "click", this.JF, this, !0));
};
var oP = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, f = (0,z.Ya)(d, a), h = (0,z.bE)((0,z.Cr)(a, 0)), f = f + c;0 <= f && f < e;f += c) {
    var k = d[f];
    if ("SECTION" === k.tagName) {
      var l = (0,z.bE)((0,z.Cr)(k, 0));
      if (h || l) {
        return k;
      }
    }
  }
  return null;
};
var pP = function(a) {
  var b = a.data.pa;
  if (b = b ? a.anchors.get(b) : null) {
    var c = (0,z.tr)(b, (0,z.CJ)(a.anchors, b)), d = null, e = null, b = (0,z.sg)(a.si).top - (0,z.sg)(a.Tv).top, f = c && (0,z.bE)((0,z.Cr)(c, 0));
    c && (f ? (d = b + c.offsetTop - 40, e = c.offsetHeight + 80) : (d = b + -40 - 20, (f = oP(c, !1)) && (d = b + f.offsetTop + f.offsetHeight), f = b + c.offsetParent.offsetTop + c.offsetParent.offsetHeight + 40, (c = oP(c, !0)) && (f = b + c.offsetTop), e = f - d));
    a.Db.style.top = d + "px";
    a.Db.style.height = e + "px";
    (0,z.ur)(a.si, function(a) {
      var b = (0,z.FJ)(a, this.Tv), c = b + a.offsetHeight;
      (0,z.Jc)(a, "grid-breaking-slide", b < d + e && c > d);
    }, a);
  }
};
var qP = function(a, b) {
  (0,z.vL)(a, b.qd);
  rP(a);
  (0,z.AL)(a, b);
  a.Sa && a.Sa.focus();
};
var sP = function(a, b) {
  (0,z.r)((0,z.wL)(a, b), function() {
    (0,z.tL)(this) || ((0,z.AL)(this, b), this.Sa && this.Sa.focus());
    tP(this);
    this.Hf.scrollTop = (0,z.ng)(this.xc.Sc[b]) - 100;
  }, a);
};
var uP = function(a, b, c) {
  var d = a.anchors.get(a.data.pa);
  if (!a.isAuthenticated) {
    var e = a.data.pa;
    a.Sd && (e += "--highlight-" + a.Sd.startIndex + "-" + a.Sd.endIndex);
    a.ob.querySelector(".notes-add-sign-in").setAttribute("data-action-value", window.location.pathname + "#" + e);
  }
  if (d) {
    e = d.querySelector(".notes-highlight");
    c = !c && e ? e : d;
    if (a.data.pa) {
      var e = (0,z.sg)(c).top, d = kP(a), f = (0,z.sg)(d).top, e = Math.round(e - f - 20);
      b && (e -= b.offsetTop - ((0,window.parseInt)(a.ob.style.marginTop, 10) || 0));
      40 > e ? (a.ob.style.top = "40px", a.zB.style.height = Math.round(Math.max(a.ob.offsetHeight, kP(a).offsetHeight) + 80 - e) + "px", d.scrollTop = Math.round(-e + 40)) : (a.ob.style.top = Math.round(e) + "px", a.zB.style.height = Math.round(e + a.ob.offsetHeight + 40) + "px", d.scrollTop = 0);
    }
    1E3 >= window.innerWidth ? b.scrollIntoView(!0) : (0,z.YE)(c);
  }
};
var rP = function(a) {
  var b = a.ob.querySelector(".notes-new-note, .notes-add-sign-in");
  b && uP(a, b);
};
var vP = function(a, b, c) {
  b = a.ob.querySelector('[data-note-id\x3d"' + b + '"]');
  uP(a, b, c);
};
var tP = function(a) {
  if (a.data.pa) {
    var b = (0,z.YK)(a.data, a.data.pa), c = b.count();
    (b = c ? (0,z.gj)((0,z.kj)(b, 0), "id") : null) ? (1 == c && (0,z.yL)(a, b), vP(a, b, !0)) : rP(a);
  }
};
var wP = function(a, b) {
  return b == a.data.pa ? (0,z.r)((0,z.wL)(a, null), z.Px) : (0,z.r)((0,z.wL)(a, b), (0,z.Ib)(!!b));
};
var xP = function(a, b, c) {
  var d = (0,z.Od)(b.target, null, "notes-note");
  !d || b.relatedTarget && (0,z.Jd)(d, b.relatedTarget) || !(b = (0,z.aL)(a.data, d.getAttribute("data-note-id"), a.data.pa)) || (d = null, c ? d = (0,z.gj)(b, "highlightId") : a.re && (d = (0,z.gj)((0,z.aL)(a.data, a.re, a.data.pa), "highlightId")), (0,z.vL)(a, d ? a.data.vl[d] || null : null, a.rv));
};
var yP = function(a) {
  z.B.call(this);
  this.da = a;
};
(0,z.p)(nP, z.lL);
z.g = nP.prototype;
z.g.xh = 3;
z.g.Xf = !1;
z.g.Va = null;
z.g.Hv = function() {
  var a = (0,z.hh)();
  this.rm = null;
  this.Xf = !0;
  var b = (0,z.zL)();
  this.dj();
  this.isAuthenticated && ((0,z.Jc)(this.ob, "notes-is-creator", this.data.ag.userId === this.currentUser.userId), (0,z.hF)(this.L(".notes-post-creator"), this.data.ag.name));
  this.Vp(b);
  this.hb.push((0,z.J)(this.Db, "mouseover", this.OF, this));
  this.hb.push((0,z.J)(this.Db, "mouseout", this.NF, this));
  this.hb.push((0,z.J)(this.ob, "click", this.LF, this));
  this.hb.push((0,z.J)(this.si, z.Un, this.ct, this));
  (0,z.Gj)("notes.renderMarkers", (0,z.hh)() - a);
};
z.g.Vp = function(a) {
  if (a.anchor && this.xc.Sc[a.anchor]) {
    if (sP(this, a.anchor), a.qd) {
      (0,z.yL)(this, a.qd.id, !0), vP(this, a.qd.id), "reply" == a.hA && (0,z.uL)(this);
    } else {
      if ("highlight" == a.hA) {
        var b = this.anchors.get(a.anchor), c = a.qd.startIndex, d = a.qd.endIndex, e = (0,z.CI)(b, c, b, d);
        e && (a = new z.eL(e, b, new z.yJ({anchor:a.anchor, startIndex:c, endIndex:d, content:e.Nc()})), qP(this, a));
      }
    }
  }
};
z.g.Kv = function(a) {
  var b = (0,z.YK)(this.data, this.data.pa);
  a.newHighlight && (this.data.vl[a.highlightId] = new z.yJ(new z.yJ(a.newHighlight)), delete a.newHighlight);
  b.add(a);
  this.Sa.clear();
  (0,z.yL)(this, a.id);
  (0,z.w)(this.ob, "notes-hide-editor");
  (0,z.qL)(this, z.Kz, (0,z.lj)(b, "id", a.id));
};
z.g.Nv = function() {
  var a = this.screen.J;
  (0,z.Qm)(function() {
    var b = a.querySelector(".js-upvoters-item-current-user");
    if (b) {
      var c = (0,z.sf)(b), d = this.Ja.createElement("top", (0,z.H)(z.TK), "popover-notes-vote");
      c.appendChild(d);
      var e = a.querySelector(".notes-vote-editor");
      this.Zc = new z.BL(this.Kk, e, this.postId);
      this.Zc.C("save", this.FB, this);
      this.Zc.C("cancel", this.Gv, this);
      this.Zc.C("change", function() {
        var a = d.querySelector('button[data-action\x3d"cancel-notes-vote"]');
        a && (a.innerHTML = this.Zc.ok() ? "Cancel" : "No thanks");
      }, this);
      c = c.getBoundingClientRect();
      e = b.getBoundingClientRect();
      d.style.left = -(d.offsetWidth / 2) + b.offsetLeft + e.width / 2 + "px";
      d.style.bottom = c.height - b.offsetTop + "px";
      (0,z.tg)(d);
      (0,z.w)(d, "fade");
      this.vy = d;
      this.Ss = (0,z.J)(window.document.body, "click", function(a) {
        (0,z.Jd)(d, a.target) || this.Zc.ok() || this.Li();
      }, this);
    }
  }, this);
};
z.g.Li = function() {
  (0,z.Dd)(this.vy);
  this.Ss && (0,z.dg)(this.Ss);
  this.Zc && this.Zc.Eb();
};
z.g.GA = function() {
  if (this.Sa) {
    rP(this), this.Sa.focus();
  } else {
    var a;
    a: {
      a = this.Mb;
      for (var b in a) {
        a = a[b];
        break a;
      }
      a = void 0;
    }
    if (b = a && a.ze()) {
      (0,z.yL)(this, b), vP(this, b), a.focus();
    }
  }
};
z.g.im = function() {
  pP(this);
  (0,z.GJ)(this.anchors, this.Db, this.anchors.get(this.data.pa));
  nP.t.im.call(this);
  pP(this);
};
z.g.ih = function() {
  pP(this);
};
z.g.Mv = function(a) {
  (0,z.r)(wP(this, a.value), function(a) {
    a && ((0,z.tL)(this) || ((a = this.getSelection()) && a.qd.anchor == this.data.pa ? ((0,z.vL)(this, a.qd), (0,z.AL)(this, a)) : (0,z.AL)(this, this.data.pa), this.Sa && this.Sa.focus()), tP(this));
  }, this);
};
z.g.Lv = function(a) {
  (0,z.ZK)(this.xc, (0,z.gj)(a, "anchor"));
  (0,z.gj)(a, "id") == this.re && (0,z.vL)(this, null);
};
z.g.nw = function(a) {
  (0,z.x)((0,z.Od)(a.target, null, "notes-replies"), "notes-replies-hidden");
  this.ih();
};
z.g.EG = function(a) {
  if (!this.po && "A" != a.target.tagName && (z.Uy || this.data.pa)) {
    var b = this.getSelection();
    if (!b || b.Up != this.data.pa) {
      if (this.data.pa && 1E3 >= window.innerWidth) {
        return(0,z.wL)(this, null);
      }
      a = (0,z.EJ)(this.anchors, a.target);
      (0,z.r)(wP(this, a), function(a) {
        a && ((0,z.tL)(this) || ((0,z.AL)(this, this.data.pa), this.Sa && this.Sa.focus()), tP(this));
      }, this);
    }
  }
};
z.g.Ej = function() {
  this.dj();
};
z.g.JF = function(a) {
  if (this.data.pa) {
    var b = a.target, b = (0,z.kg)(b, function(a) {
      return a == this.ob || a == this.xc.di || a == this.Va.V() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
    }.bind(this));
    window.document.body === b && (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), (0,z.wL)(this, null));
  }
};
z.g.HG = function(a) {
  (0,z.Yr)(this.Tj, a.value);
};
z.g.OF = function(a) {
  xP(this, a, !0);
};
z.g.NF = function(a) {
  xP(this, a, !1);
};
z.g.Sy = function() {
  if (!this.po) {
    var a = (0,z.YC)();
    if (!a || a.isCollapsed()) {
      (0,z.gD)(this.Va);
    } else {
      var b = (0,z.CJ)(this.anchors, (0,z.vD)(a)), c;
      if (c = b) {
        c = (0,z.vD)(a), c = (0,z.kg)(c, z.nE, b);
      }
      c ? (0,z.fD)(this.Va, (0,z.ZE)(a)) : (0,z.gD)(this.Va);
    }
  }
};
z.g.Ey = function() {
  (0,z.gD)(this.Va);
  var a = this.getSelection();
  a && qP(this, a);
  return!1;
};
z.g.Dy = function() {
  (0,z.gD)(this.Va);
  var a = (0,z.YC)();
  if (!a || a.isCollapsed()) {
    return!1;
  }
  var b = this.Jp, c = a.Nc(), a = this.postId, c = (0,z.qw)(mP, {content:c, username:this.data.ag.username, url:window.location.href});
  b.To(c);
  (0,z.yj)(z.Bz, {postId:a, type:"highlight", dest:"twitter"});
  return!1;
};
z.g.gG = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  (0,z.t)((0,z.r)(lP(this.data, c, b), function() {
    for (var a = (0,z.aL)(this.data, b, this.data.pa), e = a.get("replies"), f = 0;f < e.length;f++) {
      if (e[f].replyId == c) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.qL)(this, z.Rz, (0,z.aL)(this.data, b, this.data.pa), {replyId:c});
    this.vi.H("The reply has been dismissed", "success");
  }, this), (0,z.cp)(this.Zj, "Sorry, we couldn't hide the reply. Please try again later and make sure you are logged in."));
};
z.g.LF = function(a) {
  a = a.target;
  var b = (0,z.Od)(a, null, "notes-note");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.re ? (0,z.kg)(a, function(a) {
      return!!a.getAttribute("data-action") || (0,z.Lc)(a, "editable");
    }, b, !0) == b && (0,z.yL)(this, null) : ((0,z.yL)(this, c), vP(this, c));
  }
};
z.g.IG = function() {
  var a = this.getSelection();
  (0,z.yL)(this, null);
  a && (0,z.vL)(this, a.qd);
  (0,z.AL)(this, a || this.data.pa);
  this.Sa && (a && rP(this), this.Sa.focus());
};
z.g.ct = function(a) {
  (a = a.target.getAttribute("name")) && (0,z.AJ)(this.anchors, a) && (0,z.VK)(this.xc, a, a == this.data.pa);
};
z.g.dj = function() {
  if (this.Xf) {
    if (this.wf) {
      return(0,z.ph)(Error("UpdatePositions called after dispose"));
    }
    nP.t.dj.call(this);
    this.ih();
    this.re ? vP(this, this.re) : tP(this);
  }
};
z.g.jK = function() {
  if (this.data.pa) {
    var a = (0,z.YC)();
    if (a) {
      var a = (0,z.vD)(a), b = this.anchors.get(this.data.pa);
      b && (0,z.Jd)(b, a) || (0,z.wL)(this, null);
    }
  }
};
z.g.F = function() {
  this.ra.xa("resize-end", this.Ej, this);
  this.ra.xa("inner-resize-end", this.Ej, this);
  this.Va.xa("update", this.Sy, this);
  this.Va.xa("highlight", this.Ey, this);
  this.Va.xa("twitter", this.Dy, this);
  nP.t.F.call(this);
};
(0,z.p)(yP, z.B);
yP.prototype.Xj = function(a, b, c, d, e, f) {
  return new nP(a.La(), b, c, d, e, f);
};
var zP = z.bq;
zP.La().scope("app").add("notes", yP);
(0,z.iD)(zP, "notes");
})(_mdm);
