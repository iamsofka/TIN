(() => {
  var e = {
      309: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { calculate: () => r });
        const r = function (e, t, n) {
          return e === t
            ? n
            : "Miles" === e
            ? 1.609 * parseFloat(n)
            : "Kilometers" === e
            ? 0.621 * parseFloat(n)
            : void 0;
        };
      },
      556: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { calculate: () => r });
        const r = function (e, t, n) {
          if (e === t) return n;
          if ("Celsius" === e) {
            if ("Fahrenheit" === t) return 1.8 * parseFloat(n) + 32;
            if ("Kelvin" === t) return parseFloat(n) + 273.15;
          } else if ("Fahrenheit" === e) {
            if ("Celsius" === t) return (5 * (parseFloat(n) - 32)) / 9;
            if ("Kelvin" === t) return (5 * (parseFloat(n) - 32)) / 9 + 273.15;
          } else if ("Kelvin" === e) {
            if ("Celsius" === t) return parseFloat(n) - 273.15;
            if ("Fahrenheit" === t) return 1.8 * (parseFloat(n) - 273.15) + 32;
          }
        };
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      const e = n(556),
        t = n(309),
        r = document.getElementById("temperatureSelect1"),
        l = document.getElementById("temperatureSelect2"),
        u = document.getElementById("temperatureInput1"),
        a = document.getElementById("temperatureInput2"),
        o = document.getElementById("distanceSelect1"),
        i = document.getElementById("distanceSelect2"),
        c = document.getElementById("distanceInput1"),
        s = document.getElementById("distanceInput2");
      (window.onTemperatureButtonClicked = function () {
        "" !== u.value && (a.value = e.calculate(r.value, l.value, u.value));
      }),
        (window.onDistanceButtonClicked = function () {
          "" !== c.value && (s.value = t.calculate(o.value, i.value, c.value));
        });
    })();
})();
