(() => {
  var r = {
    567: r => {
      r.exports = function (r, t) {
        return r + t
      }
    }
  }, t = {};
  (function e(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var p = t[o] = {exports: {}};
    return r[o](p, p.exports, e), p.exports
  })(567)(1, 2)
})();