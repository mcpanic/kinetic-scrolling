(function(z){
var ZP = function(a, b, c) {
  var d = "", e = c.currentUser.userId == a.user.userId;
  b = (0,z.Fi)(a);
  var e = '\x3cdiv class\x3d"cover-picker cover-picker-header-bleed ' + (a.user.backgroundImageId ? "" : "no-image") + '" data-image-id\x3d"' + (a.user.backgroundImageId ? (0,z.P)(a.user.backgroundImageId) : "") + '" data-url\x3d"' + (0,z.Ci)({image:{imageId:a.user.backgroundImageId}}, 0, c) + '" data-washable\x3d"false"\x3e' + (0,z.Ai)({size:"header", image:{imageId:a.user.backgroundImageId}}, c) + '\x3cdiv class\x3d"cover-picker-controls"\x3e' + (0,z.xi)() + (0,z.yi)({kb:!0}) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"scrolling-region"\x3e' + 
  (e || c.variants.enable_embed_ui ? (0,z.Fo)((0,z.L)(a, {kb:a.user.backgroundImageId, gh:'\x3cdiv class\x3d"btn-set btn-set-profile"\x3e' + (e ? '\x3cbutton class\x3d"btn btn-edit" title\x3d"Edit Profile" data-action\x3d"edit-profile"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" title\x3d"Cancel Edits" data-action\x3d"cancel-edit"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary btn-save" title\x3d"Save Profile" data-action\x3d"save-profile"\x3eSave\x3c/button\x3e' : "") + 
  (c.variants.enable_embed_ui ? '\x3cbutton class\x3d"btn btn-circle" title\x3d"Embed profile" data-action\x3d"embed-profile"\x3e\x3cspan class\x3d"icons icons-embed"\x3e\x3c/span\x3e\x3c/button\x3e' : "") + "\x3c/div\x3e"})) : "") + '\x3cdiv class\x3d"background-white layout-foreground"\x3e', f;
  f = "" + ('\x3cheader class\x3d"hero hero-profile layout-single-column"\x3e\x3cdiv class\x3d"hero-avatar"\x3e' + (0,z.io)({user:a.user, iq:!0, oi:"zoom", pi:a.user.imageId, vc:"hero-avatar-image"}, c) + '\x3c/div\x3e\x3ch1 class\x3d"hero-title"\x3e\x3ca href\x3d"/@' + (0,z.P)(a.user.username) + '"\x3e' + (0,z.O)(a.user.name) + '\x3c/a\x3e\x3c/h1\x3e\x3cp class\x3d"hero-description"\x3e' + (a.user.virtuals.bioHTML && "null" != a.user.virtuals.bioHTML ? (0,z.pi)(a.user.virtuals.bioHTML) : "") + "\x3c/p\x3e\x3c/header\x3e");
  d += e + f;
  if (a.latestPosts) {
    d += (a.recommendedPosts.length && 1 < a.latestPosts.length ? (0,z.to)((0,z.L)(a, {label:"Most Recommended", posts:a.recommendedPosts, Ki:!0, ph:!0, Ah:3 < a.latestPosts.length ? b + "/recommended" : null, wc:1}), c) : "") + (a.latestPosts.length ? (0,z.to)((0,z.L)(a, {label:"Latest", posts:a.latestPosts, Ki:!0, ph:!0, Ah:b + "/latest", wc:3}), c) : "") + (a.collections.length ? (0,z.vo)((0,z.L)(a, {label:"Collections edited by " + a.user.name, br:!0, Ah:b + "/collections", wc:3, collectionCount:a.collectionCount}), 
    0, c) : "") + (a.postsRecommendedByUser.length ? (0,z.to)((0,z.L)(a, {label:"Recommended by " + a.user.name, posts:a.postsRecommendedByUser, Ah:b + "/has-recommended", Dh:!0, wc:3}), c) : "") + (a.collections.length || a.latestPosts.length || a.postsRecommendedByUser.length ? "" : (0,z.wo)({zh:(0,z.O)(a.user.name) + " just joined " + (0,z.O)(c.productName), Qj:'See what stories are trending on your \x3ca class\x3d"link link-accent" href\x3d"/" title\x3d"Go to your reading list"\x3eReading List\x3c/a\x3e'}))
    ;
  } else {
    if (a.posts) {
      b = "";
      switch(a.filterBy) {
        case "has-recommended":
          b += "Recommended by " + (0,z.O)(a.user.name);
          break;
        case "recommended":
          b += "Most Recommended";
          break;
        default:
          b += "Latest";
      }
      d += (0,z.to)((0,z.L)(a, {label:b, posts:a.posts, Ki:"has-recommended" != a.filterBy, ph:"has-recommended" != a.filterBy}), c);
    } else {
      a.collections && (d += (0,z.vo)((0,z.L)(a, {label:"Collections edited by " + a.user.name, br:!0}), 0, c));
    }
  }
  return d + "\x3c/div\x3e\x3c/div\x3e";
};
var $P = function() {
  return "Sorry, we had a problem while trying to save your settings. Please try again later.";
};
var aQ = function(a, b, c) {
  return'\x3cspan class\x3d"icons icons-add-further-reading follow-up-side-icon"\x3e\x3c/span\x3e' + (0,z.bv)(a, c) + '\x3cdiv class\x3d"btn-set follow-up-editor-footer"\x3e\x3cbutton class\x3d"btn btn-primary btn-link follow-up-save" data-action\x3d"save-follow-up"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-link" data-action\x3d"cancel-follow-up"\x3eCancel\x3c/button\x3e\x3c/div\x3e';
};
var bQ = function() {
  return'\x3cdiv class\x3d"follow-up-link-prompt"\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cdiv class\x3d"follow-up-link-editor"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"btn-set follow-up-editor-footer"\x3e\x3cbutton class\x3d"btn btn-primary btn-link follow-up-load" data-action\x3d"load-follow-up"\x3eContinue\x3c/button\x3e\x3cbutton class\x3d"btn btn-link" data-action\x3d"cancel-follow-up"\x3eCancel\x3c/button\x3e\x3c/div\x3e';
};
var cQ = function(a, b, c) {
  b = '\x3ca class\x3d"m-profile" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(a.user.username) + '"\x3e' + (0,z.O)(a.user.name) + "\x3c/a\x3e";
  var d = a = a || {}, e = '\x3cdiv class\x3d"m-hero m-hero-profile ' + (d.user.backgroundImageId ? "m-hero-with-image" : "") + '"\x3e' + (0,z.Gt)(c);
  if (d.user.backgroundImageId) {
    var f = (0,z.zi)({imageId:d.user.backgroundImageId, strategy:"crop-fixed", darken:25, verticalGradient:"29/81/60"}, 0, c), e = e + ('\x3cdiv class\x3d"m-hero-image m-image-cover" style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(f)) + ')"\x3e\x3c/div\x3e')
  }
  d.user && d.user.imageId && (e += '\x3ca class\x3d"m-avatar" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(d.user.username) + '" target\x3d"_blank"\x3e', f = (0,z.zi)({imageId:d.user.imageId, width:"190", height:"190", strategy:"crop-fixed"}, 0, c), e += '\x3cimg src\x3d"' + (0,z.P)((0,z.Q)(f)) + '" alt\x3d"@' + (0,z.P)(d.user.username) + "'s avatar\"\x3e\x3c/a\x3e");
  e += '\x3ch1 class\x3d"m-hero-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(d.user.username) + '" target\x3d"_blank"\x3e' + (0,z.O)(d.user.name) + '\x3c/a\x3e\x3c/h1\x3e\x3cp class\x3d"m-hero-description"\x3e' + (d.user.virtuals.bioHTML && "null" != d.user.virtuals.bioHTML ? (0,z.pi)(d.user.virtuals.bioHTML) : "") + "\x3c/p\x3e\x3c/div\x3e";
  a = e + (a.recommendedPosts && a.recommendedPosts.length || a.latestPosts && a.latestPosts.length ? '\x3cdiv class\x3d"m-bucket"\x3e' + (a.recommendedPosts && a.recommendedPosts.length ? (0,z.Ft)((0,z.L)(a, {label:"Recommended", posts:a.recommendedPosts}), c) : "") + (a.latestPosts && a.latestPosts.length ? (0,z.Ft)((0,z.L)(a, {label:"Latest", posts:a.latestPosts}), c) : "") + "\x3c/div\x3e" : "");
  return(0,z.It)({code:b, Vv:a}, c);
};
var dQ = function(a) {
  return!!a.trim().match(/^((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))$/i);
};
var eQ = function(a, b, c) {
  b = (0,z.Ai)({size:"home-header", image:{imageId:a.appImageId}, wv:!0}, c) + '\x3cdiv class\x3d"layout-foreground scrolling-region"\x3e';
  var d;
  c.supportsEdit ? (c.currentUser.isAuthenticated ? d = 'href\x3d"/p/new-post"' : (d = {Fk:"/p/new-post", prompt:"Sign in to write a story"}, d = 'data-action\x3d"sign-in-prompt"' + (d.Tq ? 'data-requires-token\x3d"true"' : "") + 'data-popover-type\x3d"sign-in" data-redirect\x3d"' + (0,z.P)(d.Fk) + '" data-popover\x3d"' + (0,z.P)(d.prompt) + '" data-popover-position\x3d"bottom" data-popover-signin-type\x3d"' + (d.sn ? (0,z.P)(d.sn) : "") + '"'), d = (0,z.Fo)({gh:'\x3cdiv class\x3d"btn-set"\x3e' + 
  ('\x3ca class\x3d"btn btn-light"' + d + "\x3eNew Story\x3c/a\x3e") + "\x3c/div\x3e"})) : d = "";
  b += d;
  d = '\x3cheader class\x3d"hero hero-home layout-single-column"\x3e\x3cdiv class\x3d"align-middle layout-single-column layout-foreground layout-fill-height"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch1 class\x3d"hero-title"\x3e' + (0,z.O)(c.productName) + '\x3c/h1\x3e\x3cp class\x3d"hero-description hero-description-tagline"\x3eEveryone’s stories and ideas\x3c/p\x3e' + (c.isAuthenticated ? "" : '\x3cdiv class\x3d"hero-actions btn-set"\x3e\x3ca class\x3d"btn btn-light btn-small" href\x3d"' + (0,z.P)((0,z.Q)(c.welcomeUrl)) + 
  '" title\x3d"Learn more about ' + (0,z.P)(c.productName) + '"\x3eLearn more\x3c/a\x3e\x3c/div\x3e') + "\x3c/div\x3e\x3c/div\x3e\x3c/header\x3e";
  a = b + d + (0,z.Do)((0,z.L)(a, {kb:!0, sw:[{href:"/", name:"Reading List", zd:!1}, {href:"/me/bookmarks", name:"Bookmarks", zd:!1, IK:!0}, {href:"/top-100/" + c.bestOfLatestSlug, name:"Top 100", zd:!0}]}), c) + '\x3cdiv class\x3d"background-white bestof-page"\x3e\x3cdiv class\x3d"bestof-actions layout-single-column"\x3e' + (a.prevSlug ? '\x3ca href\x3d"/top-100/' + (0,z.P)(a.prevSlug) + '" class\x3d"align-left"\x3e\x3cspan class\x3d"icons icons-arrow-left"\x3e\x3c/span\x3e\x3c/a\x3e' : "") + (a.nextSlug ? 
  '\x3ca href\x3d"/top-100/' + (0,z.P)(a.nextSlug) + '" class\x3d"align-right"\x3e\x3cspan class\x3d"icons icons-arrow-right"\x3e\x3c/span\x3e\x3c/a\x3e' : "") + 'The most read stories of \x3cspan class\x3d"text-capitalize"\x3e' + (0,z.O)(a.month) + " " + (0,z.O)(a.year) + "\x3c/span\x3e\x3c/div\x3e" + (0,z.to)((0,z.L)(a, {posts:a.posts, Dh:!0, JB:!0}), c);
  c = '\x3cfooter class\x3d"footer btn-set layout-single-column"\x3e\x3ca class\x3d"btn btn-link" title\x3d"View open job positions at ' + (0,z.P)(c.productName) + '" href\x3d"' + (0,z.P)((0,z.Q)(c.jobsUrl)) + '"\x3eWork at ' + (0,z.O)(c.productName) + '\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Read ' + (0,z.P)(c.productName) + '’s policies" href\x3d"' + (0,z.P)((0,z.Q)(c.policyUrl)) + '"\x3ePolicies\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Visit ' + (0,z.P)(c.productName) + '’s help center" href\x3d"' + 
  (0,z.P)((0,z.Q)(c.helpUrl)) + '"\x3eHelp\x3c/a\x3e\x3c/footer\x3e';
  return a + c + "\x3c/div\x3e\x3c/div\x3e";
};
var fQ = function(a) {
  a = a || {};
  return'\x3ca class\x3d"site-nav-list-item-btn" title\x3d"' + (a.hK ? (0,z.P)(a.hK) : "Go home") + '" href\x3d"' + (a.gK ? (0,z.P)((0,z.Q)(a.gK)) : "/") + '" tabindex\x3d"-1" \x3e\x3cspan class\x3d"icons icons-logo-m"\x3e\x3c/span\x3eHome\x3c/a\x3e';
};
var gQ = function(a, b) {
  z.Qn.call(this, a, b);
  this.ga = a.get("request");
  this.W = a.get("dialog");
};
var hQ = function(a, b, c, d) {
  z.vK.call(this, a);
  this.ka(new z.xK);
  this.ka(new z.yK(b));
  this.ka(new z.KJ);
  this.ka(new z.DI(!1));
  this.ka(new z.CK(d || z.iz));
  c && this.ka(new z.II(!1));
  this.Gj = !0;
  this.H();
};
var iQ = function(a, b, c) {
  z.Sh.call(this);
  this.da = a;
  this.W = a.get("dialog");
  this.hi = b;
  this.$f = c;
  b = (0,z.G)("currentUser");
  this.sl = {creator:b, creatorId:b.userId};
  this.Aa = this.jl();
  this.xj = a.get("media-resource");
  (0,z.Eg)(this.Aa).D("load-follow-up", this.Hs, this).D("save-follow-up", this.sf, this).D("cancel-follow-up", this.kj, this);
};
var jQ = function(a) {
  (0,z.C)(a.bi);
  (0,z.C)(a.fm);
  (0,z.C)(a.le);
  (0,z.dg)(a.Fs);
  a.Fs = null;
};
var kQ = function(a) {
  jQ(a);
  if (a.sl.mediaResource) {
    a.Aa.innerHTML = (0,z.H)(aQ, {followUp:a.sl, Pq:a.hi, tk:!0});
    var b = a.Da(".follow-up-title");
    a.fm = new hQ(b, "Edit title", !0);
    a.fm.C("save", a.sf, a);
    a.fm.C("cancel", a.kj, a);
    b = a.Da(".follow-up-description");
    a.le = new hQ(b, "Edit description", !0);
    a.le.C("save", a.sf, a);
    a.le.C("cancel", a.kj, a);
    a.le.focus();
    a.le.select();
  } else {
    a.Aa.innerHTML = (0,z.H)(bQ), b = a.Da(".follow-up-link-editor"), a.bi = new hQ(b, "Paste a link to content related to this post", !1), a.Fs = (0,z.J)(b, "paste", a.Hs, a), a.bi.C("save", a.Hs, a), a.bi.C("cancel", a.kj, a), a.bi.focus();
  }
};
var lQ = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.W = a.get("dialog");
  this.Z = a.get("datastore");
  this.Mr = "";
};
var mQ = function(a) {
  (0,z.w)(a.Xw, "hide");
  (0,z.w)(a.Uw, "hide");
  (0,z.x)(a.Kn, "hide");
  a.Xh.disabled = !0;
  a.Xh.blur();
};
var nQ = function(a) {
  (0,z.w)(a.Ww, "hide");
  (0,z.w)(a.Tw, "hide");
  (0,z.x)(a.Vw, "hide");
  a.Lg.disabled = !0;
  a.Lg.blur();
};
var oQ = function(a, b) {
  z.Ln.call(this, a);
  this.Ic = b.path;
  this.gg = b.twitterName;
  this.qj = this.mt(this.Ic);
  this.Vx = "overview" === this.qj;
  this.sz = "collections" != this.qj;
  z.JB.ea({twitterName:this.gg});
  this.Qn = this.Rh = "";
  this.ls = !1;
  this.Z = a.get("datastore");
  this.W = a.get("dialog");
  this.Cs = [];
  this.Bt = [];
};
var pQ = function(a) {
  (0,z.x)(window.document.body, "editing");
  var b = a.L(".hero-title");
  (0,z.EE)(b);
  b.appendChild(window.document.createTextNode(a.Rh));
  a.md.virtuals.bioHTML = (0,z.TE)(a.Qn, {TI:!1});
  a.L(".hero-description").innerHTML = a.md.virtuals.bioHTML;
  a.Qd.ha();
  a.fd.ha();
  a.Nf.ha();
  (0,z.C)(a.Qd);
  (0,z.C)(a.fd);
  (0,z.C)(a.Nf);
  a.Qd = null;
  a.fd = null;
  a.Nf = null;
};
var qQ = function(a) {
  var b = a.La();
  (0,z.w)(window.document.body, "editing");
  a.fd || (a.fd = new z.CL(a.L(".hero-title"), "Enter your name"), a.fd.H(), a.fd.ka(new z.HJ(25, !1)), a.fd.ka(new z.wJ(25)));
  a.Nf || (a.Nf = new z.CL(a.L(".hero-description"), "Enter a short bio"), a.Nf.H(), a.Nf.ka(new z.HJ(160, !1)), a.Nf.ka(new z.wJ(160)));
  a.Qd || (a.Qd = new z.nM(b, a.L(".cover-picker")), a.Qd.H(), a.Qd.C(z.BM, a.CD, a), a.Qd.C(z.CM, a.as, a), a.Qd.C(z.DM, a.as, a), a.Qd.C(z.AM, function() {
    this.as();
    this.ls = !0;
  }, a));
  a.fd.focus();
};
var rQ = function(a, b) {
  z.Qn.call(this, a, b);
};
var sQ = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.Z = a.get("datastore");
  this.ga = a.get("request");
  this.Sz = [];
};
var dS = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.jd = a.get("request");
};
var eS = function(a, b) {
  z.Qn.call(this, a, b);
  this.ba = a.get("app");
  this.jd = a.get("request");
};
var fS = function(a, b, c) {
  return "Start writing on " + (0,z.O)(c.productName) + " today.";
};
var gS = function(a, b, c) {
  return "Your audience awaits. Tell a story on " + (0,z.O)(c.productName) + " today.";
};
var hS = function(a, b) {
  z.Qn.call(this, a, b);
};
var iS = function(a, b) {
  z.Ln.call(this, a);
  this.ga = a.get("request");
  this.Ic = b.path;
  this.Jo = b.monthYearSlug;
  this.yj = this.Jo.split("-")[0];
  this.Op = this.Jo.split("-")[1];
  this.Z = a.get("datastore");
  this.hd = "bestof:" + this.Op + ":" + this.yj;
};
var jS = function(a) {
  return a.yj.charAt(0).toUpperCase() + a.yj.slice(1) + " " + a.Op;
};
(0,z.p)(gQ, z.Qn);
gQ.prototype.vb = function() {
  (0,z.Eg)(this.J).D("request-export", this.sH, this);
};
gQ.prototype.sH = function(a) {
  a.target.disabled = !0;
  a = z.SB.ea();
  (0,z.t)((0,z.r)(this.ga.post(a, null, {Td:!0}), this.LG, this), (0,z.cp)(this.W, "Sorry, we’re having trouble exporting right now. Please try later."));
};
gQ.prototype.LG = function() {
  this.L(".export-success").style.display = "block";
};
(0,z.p)(hQ, z.vK);
z.g = hQ.prototype;
z.g.Ot = !1;
z.g.Wh = "";
z.g.Yl = 0;
z.g.ok = function() {
  return this.Wh.trim() != this.va().trim();
};
z.g.clear = function() {
  this.ud("");
};
z.g.save = function() {
  this.isEnabled() && this.Q("save", this.va().trim());
};
z.g.cancel = function() {
  this.isEnabled() && this.Q("cancel");
};
z.g.F = function() {
  (0,window.clearTimeout)(this.Yl);
  hQ.t.F.call(this);
};
z.g.H = function() {
  function a(a) {
    a.stopPropagation();
  }
  hQ.t.H.call(this);
  this.Wh = this.va();
  this.Sj(13, this.Vs, this);
  this.Sj(27, this.Ws, this);
  this.la.qa("blur", this.Us, !1, this);
  var b = this.la.V();
  (0,z.J)(b, "keydown", a);
  (0,z.J)(b, "keyup", a);
  (0,z.J)(b, "keypress", a);
};
z.g.Vs = function(a) {
  return a.shiftKey ? !1 : (a.preventDefault(), this.save(), !0);
};
z.g.Ws = function(a) {
  a.preventDefault();
  this.cancel();
  return!0;
};
z.g.Us = function() {
  this.Ot && (this.Yl = (0,window.setTimeout)(this.save.bind(this), 100));
};
(0,z.p)(iQ, z.Sh);
z.g = iQ.prototype;
z.g.bi = null;
z.g.fm = null;
z.g.le = null;
z.g.Ho = null;
z.g.Sn = null;
z.g.Fs = null;
z.g.F = function() {
  jQ(this);
  (0,z.Hg)(this.Aa);
  (0,z.Dd)(this.Aa);
  this.Ho && this.Ho.cancel();
  iQ.t.F.call(this);
};
z.g.ff = function() {
  this.$f.appendChild(this.Aa);
  kQ(this);
  return this;
};
z.g.jl = function() {
  var a = window.document.createElement("div");
  a.className = "follow-up-editor";
  return a;
};
z.g.Da = function(a) {
  return this.Aa.querySelector(a);
};
z.g.sf = function() {
  var a = this.fm.va(), b = this.le.va(), c = this.sl.mediaResourceId;
  a && b && c ? this.Q("save", a, b, c) : this.W.error("Further reading links require both a title and a description.");
};
z.g.kj = function() {
  this.Q("cancel");
};
z.g.Hs = function() {
  var a = this.bi.va();
  if (!dQ(a)) {
    if (a = "http://" + a, dQ(a)) {
      this.bi.ud(a);
    } else {
      return;
    }
  }
  this.Sn = a;
  this.Ho = (0,z.t)((0,z.r)((0,z.dD)(this.xj, a), this.vI, this), (0,z.cp)(this.W, "An error occurred, and we were unable to load this link."));
};
z.g.vI = function(a) {
  this.Sn && (0,z.VC)(this.xj, this.Sn) && a === (0,z.UC)(this.xj, this.Sn) && (this.sl.mediaResource = a.Pa(), this.sl.mediaResourceId = a.get("mediaResourceId"), this.Ho = null, kQ(this));
};
(0,z.p)(lQ, z.Qn);
z.g = lQ.prototype;
z.g.vb = function() {
  var a = "Settings — " + (0,z.G)("productName");
  this.vd(new z.fn(a, "Settings", "website"));
  this.Xh = this.L(".setting-item-email-input");
  this.Kn = this.L(".btn-edit-email");
  this.Xw = this.L(".btn-save-email");
  this.Uw = this.L(".btn-cancel-email");
  (0,z.G)("variants.enable_authorship") && (this.Lg = this.L(".setting-item-authorship-input"), this.Vw = this.L(".btn-edit-authorship"), this.Ww = this.L(".btn-save-authorship"), this.Tw = this.L(".btn-cancel-authorship"), (0,z.Eg)(this.J).D("edit-authorship", this.dD, this).D("save-authorship", this.fD, this).D("cancel-authorship", this.aD, this));
  (0,z.Eg)(this.J).D("toggle-setting-on", this.kI, this).D("toggle-setting-off", this.jI, this).D("delete-account", this.cD, this).D("edit-email", this.eD, this).D("save-email", this.gD, this).D("cancel-email", this.bD, this);
};
z.g.kI = function(a) {
  var b = a.value, c = this.bn('button[data-action-value\x3d"' + b + '"]');
  c[0].disabled = !0;
  c[1].disabled = !1;
  a = z.AC.ea({setting:b});
  (0,z.t)((0,z.r)((0,z.Nn)(this, "request").put(a, {value:1}, {ma:!0}), function() {
    var a = (0,z.Sa)(b);
    (0,z.tD)(this.Z).set(a, !0);
  }, this), function(a) {
    c[0].disabled = !1;
    c[1].disabled = !0;
    (0,z.ph)(a);
    this.W.error($P());
  }, this);
};
z.g.jI = function(a) {
  var b = a.value, c = this.bn('button[data-action-value\x3d"' + b + '"]');
  c[0].disabled = !1;
  c[1].disabled = !0;
  a = z.AC.ea({setting:b});
  (0,z.t)((0,z.r)((0,z.Nn)(this, "request").put(a, {value:0}, {ma:!0}), function() {
    var a = (0,z.Sa)(b);
    (0,z.tD)(this.Z).set(a, !1);
  }, this), function(a) {
    c[0].disabled = !0;
    c[1].disabled = !1;
    (0,z.ph)(a);
    this.W.error($P());
  }, this);
};
z.g.cD = function() {
  var a = this.W.confirm("Are you sure you want to delete your account?");
  a && a.C(z.qB, function() {
    (0,z.t)((0,z.r)((0,z.Nn)(this, "request").post(z.uC.ea(), {}, {ma:!0}), this.PF, this), (0,z.cp)(this.W, "Sorry, we had a problem while trying to delete your user account. Please try again later."));
  }, this);
};
z.g.PF = function() {
  window.location = z.vC.ea();
};
z.g.eD = function() {
  this.Mr = this.Xh.value;
  (0,z.x)(this.Xw, "hide");
  (0,z.x)(this.Uw, "hide");
  (0,z.w)(this.Kn, "hide");
  this.Xh.disabled = !1;
  this.Xh.focus();
};
z.g.bD = function() {
  this.Xh.value = this.Mr;
  mQ(this);
};
z.g.gD = function() {
  var a = this.Xh.value;
  a === this.Mr ? mQ(this) : (0,z.Yo)(a) ? (mQ(this), a = {email:a}, (0,z.t)((0,z.r)((0,z.Nn)(this, "request").post(z.BC.ea(), a, {ma:!0}), function() {
    this.W.open({title:"Thanks", bodyHtml:(0,z.Ku)(), type:z.Ki});
    (0,z.w)(this.L(".setting-item-email .setting-item-error"), "hide");
    this.Kn.innerHTML = "Edit";
    (0,z.x)(this.Kn, "btn-primary");
  }, this), (0,z.cp)(this.W, "An error occurred, and we were unable to update your email."))) : this.W.error("Please enter a valid email address.");
};
z.g.dD = function() {
  this.Ir = this.Lg.value;
  (0,z.x)(this.Ww, "hide");
  (0,z.x)(this.Tw, "hide");
  (0,z.w)(this.Vw, "hide");
  this.Lg.disabled = !1;
  this.Lg.focus();
};
z.g.aD = function() {
  this.Lg.value = this.Ir;
  nQ(this);
};
z.g.fD = function() {
  var a = this.Lg.value.match(/([0-9]{6,}|\+[^\/]+)/), a = a ? a[0] : "";
  if (a != this.Ir) {
    var b = z.AC.ea({setting:"google-profile-id"});
    (0,z.t)((0,z.Nn)(this, "request").put(b, {value:a}, {ma:!0}), function(a) {
      (0,z.ph)(a);
      this.W.error($P());
    }, this);
  }
  this.Lg.value = this.Ir = a;
  nQ(this);
};
(0,z.p)(oQ, z.Pn);
z.g = oQ.prototype;
z.g.Ra = null;
z.g.fa = null;
z.g.md = null;
z.g.oc = function() {
  return(0,z.r)((0,z.r)((0,z.r)((0,z.Nn)(this, "request").get(this.Ic, {ma:!0}), this.nz, this), this.Rc, this), this.Vx ? this.nH : this.cg, this);
};
z.g.vb = function() {
  var a = this.md.name + " — " + (0,z.G)("productName"), a = new z.fn(a, "The profile of " + this.md.name, "profile");
  a.username = this.md.username;
  a.name = this.md.name;
  this.vd(a);
  (0,z.Eg)(this.J).D("edit-profile", this.JD, this).D("cancel-edit", this.qD, this).D("save-profile", this.AH, this).D("embed-profile", this.ND, this);
  a = this.L(".hero-title");
  this.Rh = (0,z.jg)(a);
  this.fa && (this.Ra = (0,z.nu)((0,z.mu)((0,z.lu)(new z.ku(this.La()), this.fa), this.J).Gh((0,z.Wm)(this)), {Ki:"has-recommended" != this.qj, ph:"has-recommended" != this.qj}));
};
z.g.Ff = function(a) {
  a.references = {User:{}, Collection:{}};
  a.value = a.user;
  this.nz(a);
  this.Rc({value:a.user, posts:a.posts, collections:a.collections, references:a.references});
};
z.g.H = function() {
  oQ.t.H.call(this);
  this.Ra && this.Ra.H();
  (0,z.yj)(z.Fz, {profileId:this.md.userId});
  (0,z.Jj)(1, "profile");
};
z.g.F = function() {
  (0,z.C)(this.Ra);
  this.Ra = null;
  oQ.t.F.call(this);
};
z.g.ha = function() {
  this.Ra && this.Ra.ha();
  (0,z.x)(window.document.body, "editing");
  oQ.t.ha.call(this);
};
z.g.nz = function(a) {
  this.md = (0,z.Wj)(a.value, a.references);
  this.Cs = (0,z.Wj)(a.latestPosts, a.references) || [];
  this.Bt = (0,z.Wj)(a.recommendedPosts, a.references) || [];
};
z.g.Rc = function(a) {
  if (!this.Vx) {
    if (this.sz) {
      a = (0,z.Wj)(a.posts, a.references);
      var b = this.Z, c = this.gg, d = this.qj || "latest", e = c + ":" + d + ":" + (0,z.Tj)();
      this.fa = (0,z.Qj)(b, e, "/@" + c + "/" + d + "/load-more", "POST");
      this.fa.Oe(a);
    } else {
      this.uD = (0,z.Wj)(a.collections, a.references);
    }
  }
};
z.g.nH = function(a) {
  var b = z.IC.ea({twitterName:this.gg});
  this.J.innerHTML = (0,z.H)(ZP, {feedPath:b, collections:(0,z.Wj)(a.collections, a.references), collectionCount:(0,z.Wj)(a.collectionCount, a.references), postsRecommendedByUser:(0,z.Wj)(a.postsRecommendedByUser, a.references), latestPosts:this.Cs, recommendedPosts:this.Bt, user:this.md, filterBy:a.filterBy});
};
z.g.cg = function() {
  var a = {user:this.md, filterBy:this.qj};
  this.sz ? a.posts = this.fa.Pa() : a.collections = this.uD;
  this.J.innerHTML = (0,z.H)(ZP, a);
};
z.g.JD = function() {
  qQ(this);
  this.Rh = this.fd.va() || this.Rh;
  this.Qn = this.Nf.va();
  (0,z.yj)(z.Gz, {profileId:this.md.userId});
};
z.g.qD = function() {
  this.Qd.reset();
  pQ(this);
  (0,z.yj)(z.Hz, {profileId:this.md.userId});
};
z.g.CD = function() {
  this.L(".btn-save").setAttribute("disabled", "disabled");
};
z.g.as = function() {
  this.L(".btn-save").removeAttribute("disabled");
};
z.g.ND = function() {
  (0,z.yj)(z.oA, {profileId:this.md.userId});
  this.W.open({title:"Embed this Profile", bodyHtml:(0,z.H)(cQ, {user:this.md, recommendedPosts:this.Bt.slice(0, 1), latestPosts:this.Cs.slice(0, 3)}), type:z.Ki}).L("textarea").select();
};
z.g.AH = function() {
  var a = this.fd.va() || this.Rh, b = this.Nf.va(), c = {name:a, bio:b};
  if (!this.Qd.Id()) {
    if (a === this.Rh && b === this.Qn && !this.ls) {
      return pQ(this);
    }
    this.Rh = a;
    this.Qn = b;
    this.ls && this.Qd && (a = (a = this.Qd.va()) && a.yb()) && (c.backgroundImageId = a);
    (0,z.yj)(z.Iz, {profileId:this.md.userId});
    a = z.JB.ea({twitterName:this.gg});
    (0,z.t)((0,z.Nn)(this, "request").put(a, c, {ma:!0}), function() {
      this.W.error("An error occurred, and we were unable to update your profile.");
      qQ(this);
    }, this);
    pQ(this);
  }
};
z.g.mt = function(a) {
  return a.split("/")[2] || "overview";
};
(0,z.p)(rQ, z.Qn);
rQ.prototype.Bd = new z.an(36E5);
(0,z.p)(sQ, z.Qn);
sQ.prototype.F = function() {
  (0,z.Tc)(this.Sz);
  this.Sz = null;
  sQ.t.F.call(this);
};
sQ.prototype.vb = function() {
  (0,z.Eg)(this.J).D("finish-onboard", this.ZD, this);
};
sQ.prototype.H = function() {
  sQ.t.H.call(this);
  (0,z.yj)(z.pz, {});
};
sQ.prototype.ZD = function() {
  var a = z.AC.ea({setting:"flag-seen-collection-follow-onboarding"});
  (0,z.t)((0,z.r)(this.ga.put(a, {value:1}, {ma:!0}), function() {
    var a = window.document.querySelector(".site-nav-list-item-btn");
    if (a) {
      var c = (0,z.H)(fQ);
      a.outerHTML = c;
    }
    (0,z.yj)(z.qz, {});
    this.ba.navigate("");
  }, this), z.K);
};
(0,z.p)(dS, z.Qn);
dS.prototype.vb = function() {
  var a = "ESPN FC World Cup — " + (0,z.G)("productName"), b = "Stories about the World Cup, presented by ESPN — " + (0,z.G)("productName");
  this.vd(new z.fn(a, b, "website"));
  (0,z.Eg)(this.J).D("start-writing", this.ZH, this);
};
dS.prototype.H = function() {
  dS.t.H.call(this);
  (0,z.Jj)(1, "espn");
  (0,z.yj)(z.fB, {});
};
dS.prototype.ZH = function() {
  (0,z.t)((0,z.r)(this.jd.get(z.dC.ea(), {ma:!0}), function(a) {
    this.ba.navigate(a.value.substr(1));
  }, this), function(a) {
    (0,z.ph)(a);
  }, this);
};
(0,z.p)(eS, z.Qn);
eS.prototype.vb = function() {
  var a = "Verify Your Account — " + (0,z.G)("productName");
  this.vd(new z.fn(a, "Please verify your account to continue", "website"));
};
(0,z.p)(hS, z.Qn);
hS.prototype.vb = function() {
  var a = (0,z.H)(fS), b = (0,z.H)(gS);
  this.vd(new z.fn(a, b, "website"));
};
hS.prototype.H = function() {
  hS.t.H.call(this);
  (0,z.Jj)(1, "startWritingPromo");
  (0,z.yj)(z.gB, {});
};
var kS = "january february march april may june july august september october november december".split(" ");
(0,z.p)(iS, z.Pn);
z.g = iS.prototype;
z.g.Bd = z.iB;
z.g.Ra = null;
z.g.fa = null;
z.g.jx = "";
z.g.oc = function() {
  return(0,z.r)(this.Is(), this.cg, this);
};
z.g.vb = function() {
  var a = (0,z.G)("productName") + " Top 100 - " + jS(this) + " - " + (0,z.G)("productName");
  this.vd(new z.fn(a, "The most read posts of " + jS(this) + ".", "website"));
  this.Ra = (0,z.nu)((0,z.mu)((0,z.lu)(new z.ku(this.La()), this.fa), this.J).Gh((0,z.Wm)(this)), {Dh:!0, JB:!0, dR:!0});
};
z.g.Ff = function(a) {
  this.Rc({value:a.posts, coverImgUrl:a.coverImgUrl, references:{User:{}, Collection:{}}});
};
z.g.H = function() {
  iS.t.H.call(this);
  this.Ra && this.Ra.H();
};
z.g.ha = function() {
  this.Ra && this.Ra.ha();
  iS.t.ha.call(this);
};
z.g.Is = function() {
  return this.Z.wb[this.hd] ? (this.fa = this.Z.wb[this.hd], (0,z.Ec)(!0)) : (0,z.r)(this.ga.get(this.Ic, {ma:!0}), this.Rc, this);
};
z.g.Rc = function(a) {
  var b = (0,z.Wj)(a.value, a.references), c = z.mC.ea({monthYearSlug:this.yj + "-" + this.Op});
  this.Z.wb[this.hd] ? this.fa = this.Z.wb[this.hd] : (this.fa = (0,z.Qj)(this.Z, this.hd, c, "POST"), this.fa.Oe(b), this.jx = a.coverImgUrl);
};
z.g.cg = function() {
  var a = this.fa.Pa(), b = this.yj.charAt(0).toUpperCase() + this.yj.slice(1), c = (0,z.G)("bestOfFirstSlug").toString(), d = (0,z.G)("bestOfLatestSlug").toString(), e = this.J, f = this.jx, h = this.Op, k;
  k = this.Jo;
  k == d ? k = null : (d = k.split("-")[0], d = (kS.indexOf(d) + 1) % kS.length, k = (0,window.parseInt)(k.split("-")[1], 10), k = kS[d] + "-" + (d ? k : k + 1).toString());
  d = this.Jo;
  d == c ? c = null : (c = d.split("-")[0], c = kS.indexOf(c) - 1, d = (0,window.parseInt)(d.split("-")[1], 10), 0 > c && (c = kS.length + c, d--), c = kS[c] + "-" + d.toString());
  e.innerHTML = (0,z.H)(eQ, {posts:a, coverImgUrl:f, month:b, year:h, nextSlug:k, prevSlug:c});
};
var lS = z.bq;
(0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)((0,z.hD)(lS.La().scope("app"), "ExportScreen", gQ), "FollowUpEditor", iQ), "SettingsScreen", lQ), "ProfileScreen", oQ), "ReadingListScreen", rQ), "OnboardScreen", sQ), "EspnScreen", dS), "StartWritingScreen", hS), "VerificationScreen", eS), "BestOfScreen", iS);
(0,z.iD)(lS, "misc-screens");
})(_mdm);
