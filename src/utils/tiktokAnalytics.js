// src/utils/tiktokAnalytics.js
export const initializeTikTok = () => {
  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    (ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
      "holdConsent",
      "revokeConsent",
      "grantConsent",
    ]),
      (ttq.setAndDefer = function (t, e) {
        t[e] = function () {
          t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      });
    for (var i = 0; i < ttq.methods.length; i++)
      ttq.setAndDefer(ttq, ttq.methods[i]);
    (ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    }),
      (ttq.load = function (e, n) {
        var r = "https://analytics.tiktok.com/i18n/pixel/events.js",
          o = n && n.partner;
        (ttq._i = ttq._i || {}),
          (ttq._i[e] = []),
          (ttq._i[e]._u = r),
          (ttq._t = ttq._t || {}),
          (ttq._t[e] = +new Date()),
          (ttq._o = ttq._o || {}),
          (ttq._o[e] = n || {});
        n = document.createElement("script");
        (n.type = "text/javascript"),
          (n.async = !0),
          (n.src = r + "?sdkid=" + e + "&lib=" + t);
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(n, e);
      });

    ttq.load("CTIN20JC77U8UG3M3V9G");
    ttq.page();
  })(window, document, "ttq");

  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = (w[t] = w[t] || []);
    ttq.methods = [
      "page",
      "track",
      "identify",
      "instances",
      "debug",
      "on",
      "off",
      "once",
      "ready",
      "alias",
      "group",
      "enableCookie",
      "disableCookie",
    ];
    ttq.setAndDefer = function (t, e) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (var i = 0; i < ttq.methods.length; i++)
      ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) {
      for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++)
        ttq.setAndDefer(e, ttq.methods[n]);
      return e;
    };
    ttq.load = function (e, n) {
      var r = "https://analytics.tiktok.com/i18n/pixel/events.js";
      var o = n && n.partner;
      (ttq._i = ttq._i || {}),
        (ttq._i[e] = []),
        (ttq._i[e]._u = r),
        (ttq._t = ttq._t || {}),
        (ttq._t[e] = +new Date()),
        (ttq._o = ttq._o || {}),
        (ttq._o[e] = n || {});
      var m = document.createElement("script");
      (m.type = "text/javascript"),
        (m.async = !0),
        (m.src = r + "?sdkid=" + e + "&lib=" + t);
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(m, s);
    };

    ttq.load("CTIN20JC77U8UG3M3V9G");
    ttq.page();
  })(window, document, "ttq");
};

export const trackTikTokEvent = (eventName, data = {}) => {
  if (window.ttq) {
    window.ttq.track(eventName, data);
  }
};
