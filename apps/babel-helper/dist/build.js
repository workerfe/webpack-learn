(() => {
  function n() {
    return n = Object.assign ? Object.assign.bind() : function (n) {
      for (var r = 1; r < arguments.length; r++) {
        var a = arguments[r];
        for (var t in a) ({}).hasOwnProperty.call(a, t) && (n[t] = a[t])
      }
      return n
    }, n.apply(null, arguments)
  }

  n({}, {a: 1}), console.log(new class {
    constructor() {
      this.a = "2"
    }
  })
})();