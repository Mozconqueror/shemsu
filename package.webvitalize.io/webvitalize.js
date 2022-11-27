! function() {
    var e, n, t, i, r = -1,
        a = function(e) {
            addEventListener("pageshow", (function(n) {
                n.persisted && (r = n.timeStamp, e(n))
            }), !0)
        },
        o = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        c = function() {
            var e = o();
            return e && e.activationStart || 0
        },
        u = function(e, n) {
            var t = o(),
                i = "navigate";
            return r >= 0 ? i = "back-forward-cache" : t && (i = document.prerendering || c() > 0 ? "prerender" : t.type.replace(/_/g, "-")), {
                name: e,
                value: void 0 === n ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: i
            }
        },
        f = function(e, n, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var i = new PerformanceObserver((function(e) {
                        n(e.getEntries())
                    }));
                    return i.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, t || {})), i
                }
            } catch (e) {}
        },
        s = function(e, n) {
            var t = function t(i) {
                "pagehide" !== i.type && "hidden" !== document.visibilityState || (e(i), n && (removeEventListener("visibilitychange", t, !0), removeEventListener("pagehide", t, !0)))
            };
            addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
        },
        p = function(e, n, t, i) {
            var r, a;
            return function(o) {
                n.value >= 0 && (o || i) && ((a = n.value - (r || 0)) || void 0 === r) && (r = n.value, n.delta = a, n.rating = function(e, n) {
                    return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
                }(n.value, t), e(n))
            }
        },
        d = -1,
        l = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        v = function() {
            s((function(e) {
                var n = e.timeStamp;
                d = n
            }), !0)
        },
        m = function() {
            return d < 0 && (d = l(), v(), a((function() {
                setTimeout((function() {
                    d = l(), v()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return d
                }
            }
        },
        g = function(e, n) {
            n = n || {};
            var t, i = [1800, 3e3],
                r = m(),
                o = u("FCP"),
                s = function(e) {
                    e.forEach((function(e) {
                        "first-contentful-paint" === e.name && (l && l.disconnect(), e.startTime < r.firstHiddenTime && (o.value = Math.max(e.startTime - c(), 0), o.entries.push(e), t(!0)))
                    }))
                },
                d = window.performance && window.performance.getEntriesByName && window.performance.getEntriesByName("first-contentful-paint")[0],
                l = d ? null : f("paint", s);
            (d || l) && (t = p(e, o, i, n.reportAllChanges), d && s([d]), a((function(r) {
                o = u("FCP"), t = p(e, o, i, n.reportAllChanges), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        o.value = performance.now() - r.timeStamp, t(!0)
                    }))
                }))
            })))
        },
        h = !1,
        w = -1,
        y = {
            passive: !0,
            capture: !0
        },
        T = new Date,
        E = function(i, r) {
            e || (e = r, n = i, t = new Date, L(removeEventListener), b())
        },
        b = function() {
            if (n >= 0 && n < t - T) {
                var r = {
                    entryType: "first-input",
                    name: e.type,
                    target: e.target,
                    cancelable: e.cancelable,
                    startTime: e.timeStamp,
                    processingStart: e.timeStamp + n
                };
                i.forEach((function(e) {
                    e(r)
                })), i = []
            }
        },
        S = function(e) {
            if (e.cancelable) {
                var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, n) {
                    var t = function() {
                            E(e, n), r()
                        },
                        i = function() {
                            r()
                        },
                        r = function() {
                            removeEventListener("pointerup", t, y), removeEventListener("pointercancel", i, y)
                        };
                    addEventListener("pointerup", t, y), addEventListener("pointercancel", i, y)
                }(n, e) : E(n, e)
            }
        },
        L = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(n) {
                return e(n, S, y)
            }))
        },
        C = {},
        A = function e(n) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e(n)
            }), !0) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(n)
            }), !0) : setTimeout(n, 0)
        };
    window.WebVitalize = window.WebVitalize || {};
    const F = window.WebVitalize.endpoint || "https://ingest.webvitalize.io/api/log",
        k = window.WebVitalize.pageType || null,
        B = function(e) {
            var n = {
                href: window.location.href
            };
            n[e.name] = e.value, "string" == typeof k && k.length && (n.pageType = k);
            var t = JSON.stringify(n);
            navigator.sendBeacon && navigator.sendBeacon(F, t) || fetch(F, {
                body: t,
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                keepalive: !0
            })
        };
    ! function(e, n) {
        n = n || {};
        var t = [.1, .25];
        h || (g((function(e) {
            w = e.value
        })), h = !0);
        var i, r = function(n) {
                w > -1 && e(n)
            },
            o = u("CLS", 0),
            c = 0,
            d = [],
            l = function(e) {
                e.forEach((function(e) {
                    if (!e.hadRecentInput) {
                        var n = d[0],
                            t = d[d.length - 1];
                        c && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (c += e.value, d.push(e)) : (c = e.value, d = [e]), c > o.value && (o.value = c, o.entries = d, i())
                    }
                }))
            },
            v = f("layout-shift", l);
        v && (i = p(r, o, t, n.reportAllChanges), s((function() {
            l(v.takeRecords()), i(!0)
        })), a((function() {
            c = 0, w = -1, o = u("CLS", 0), i = p(r, o, t, n.reportAllChanges)
        })))
    }(B), g(B),
        function(t, r) {
            r = r || {};
            var o, c = [100, 300],
                d = m(),
                l = u("FID"),
                v = function(e) {
                    e.startTime < d.firstHiddenTime && (l.value = e.processingStart - e.startTime, l.entries.push(e), o(!0))
                },
                g = function(e) {
                    e.forEach(v)
                },
                h = f("first-input", g);
            o = p(t, l, c, r.reportAllChanges), h && s((function() {
                g(h.takeRecords()), h.disconnect()
            }), !0), h && a((function() {
                var a;
                l = u("FID"), o = p(t, l, c, r.reportAllChanges), i = [], n = -1, e = null, L(addEventListener), a = v, i.push(a), b()
            }))
        }(B),
        function(e, n) {
            n = n || {};
            var t, i = [2500, 4e3],
                r = m(),
                o = u("LCP"),
                d = function(e) {
                    var n = e[e.length - 1];
                    if (n) {
                        var i = Math.max(n.startTime - c(), 0);
                        i < r.firstHiddenTime && (o.value = i, o.entries = [n], t())
                    }
                },
                l = f("largest-contentful-paint", d);
            if (l) {
                t = p(e, o, i, n.reportAllChanges);
                var v = function() {
                    C[o.id] || (d(l.takeRecords()), l.disconnect(), C[o.id] = !0, t(!0))
                };
                ["keydown", "click"].forEach((function(e) {
                    addEventListener(e, v, {
                        once: !0,
                        capture: !0
                    })
                })), s(v, !0), a((function(r) {
                    o = u("LCP"), t = p(e, o, i, n.reportAllChanges), requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            o.value = performance.now() - r.timeStamp, C[o.id] = !0, t(!0)
                        }))
                    }))
                }))
            }
        }(B),
        function(e, n) {
            n = n || {};
            var t = [800, 1800],
                i = u("TTFB"),
                r = p(e, i, t, n.reportAllChanges);
            A((function() {
                var f = o();
                if (f) {
                    if (i.value = Math.max(f.responseStart - c(), 0), i.value < 0 || i.value > performance.now()) return;
                    i.entries = [f], r(!0), a((function() {
                        i = u("TTFB", 0), (r = p(e, i, t, n.reportAllChanges))(!0)
                    }))
                }
            }))
        }(B)
}();
//# sourceMappingURL=webvitalize.js.map