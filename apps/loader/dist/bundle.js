(() => {
  "use strict";
  var t = {
    946: (t, o, n) => {
      var r = n(986), e = n.n(r), a = n(603);
      n.n(a)()(e()).push([t.id, "body {\n    background-color: lightblue;\n}", ""])
    }, 603: t => {
      t.exports = function (t) {
        var o = [];
        return o.toString = function () {
          return this.map((function (o) {
            var n = "", r = void 0 !== o[5];
            return o[4] && (n += "@supports (".concat(o[4], ") {")), o[2] && (n += "@media ".concat(o[2], " {")), r && (n += "@layer".concat(o[5].length > 0 ? " ".concat(o[5]) : "", " {")), n += t(o), r && (n += "}"), o[2] && (n += "}"), o[4] && (n += "}"), n
          })).join("")
        }, o.i = function (t, n, r, e, a) {
          "string" == typeof t && (t = [[null, t, void 0]]);
          var c = {};
          if (r) for (var i = 0; i < this.length; i++) {
            var u = this[i][0];
            null != u && (c[u] = !0)
          }
          for (var l = 0; l < t.length; l++) {
            var s = [].concat(t[l]);
            r && c[s[0]] || (void 0 !== a && (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")), s[5] = a), n && (s[2] ? (s[1] = "@media ".concat(s[2], " {").concat(s[1], "}"), s[2] = n) : s[2] = n), e && (s[4] ? (s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}"), s[4] = e) : s[4] = "".concat(e)), o.push(s))
          }
        }, o
      }
    }, 986: t => {
      t.exports = function (t) {
        return t[1]
      }
    }
  }, o = {};

  function n(r) {
    var e = o[r];
    if (void 0 !== e) return e.exports;
    var a = o[r] = {id: r, exports: {}};
    return t[r](a, a.exports, n), a.exports
  }

  n.n = t => {
    var o = t && t.__esModule ? () => t.default : () => t;
    return n.d(o, {a: o}), o
  }, n.d = (t, o) => {
    for (var r in o) n.o(o, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: o[r]})
  }, n.o = (t, o) => Object.prototype.hasOwnProperty.call(t, o), n(946), console.log("Webpack Loader example!")
})();