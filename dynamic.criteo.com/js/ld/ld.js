window.Criteo = window.Criteo || {};
window.Criteo.oneTagConfig = {
    partnerId: 50945,
    visitEventEnabled: true,
    fpIdentifier: undefined,
    waitForGum: true,
    dynamic: !0,
    gumDomain: "gum.criteo.com"
};
! function() {
    "use strict";

    function s(e, t) {
        var n, i, o = null === (n = window.Criteo) || void 0 === n ? void 0 : n.oneTagConfig;
        return null !== (i = o && o[e]) && void 0 !== i ? i : t
    }
    var u = "5.12.3";

    function o(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return
        }
    }
    var a = (e.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__cmpLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, e.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__cmp
    }, e.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, e.prototype.pingWithTimeout = function(i, e, t, n) {
        function o(e, t) {
            r.logger(t), clearTimeout(e), n()
        }
        var r = this;
        return window.setTimeout(function() {
            var n = window.setTimeout(function() {
                o(i, "Timeout: Unable to get ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", null, function(e, t) {
                clearTimeout(n), t ? (r.logger("GDPR CMP ping returned"), !0 !== e.cmpLoaded && o(i, "GDPR ping returned cmpLoaded which is not true"), r.logger("GDPR ping returned cmpLoaded which is true")) : o(i, "Error sending ping to GDPR CMP")
            })
        }, t)
    }, e.prototype.retrieveConsent = function(e) {
        this.executeRetrieveConsent("getConsentData", null, e)
    }, e.prototype.retrieveConsentForPassback = function(e) {
        this.executeRetrieveConsent("getVendorConsents", [91], e)
    }, e.prototype.executeRetrieveConsent = function(e, t, n) {
        var i = this,
            o = !1,
            r = window.setTimeout(function() {
                o = !0, i.logger("Timeout: Unable to resolve GDPR consent after " + i.timeout + "ms"), n(void 0)
            }, this.timeout),
            a = this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function() {
                o = !0, i.logger("Timeout: Unable to ping GDPR API after " + i.pingTimeout + "ms"), n(void 0)
            });
        this.executeCommand(e, t, function(e, t) {
            clearTimeout(a), o || (clearTimeout(r), t ? (i.logger("GDPR consent retrieved"), i.processConsentData(e, n)) : (i.logger("Error retrieving GDPR consent data from CMP"), n(void 0)))
        })
    }, e.prototype.processConsentData = function(e, t) {
        if (e) {
            var n = {};
            void 0 !== e.consentData && (n.consentData = e.consentData), void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies), t(n)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, e.prototype.executeCommand = function(e, t, n) {
        var r = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No GDPR CMP defined on current frame");
            var a = this.getCMPFrame();
            this.currentWindow.__cmp = function(e, t, n) {
                if (!a) return r.logger("GDPR CMP not found in any frame"), void n({
                    msg: "GDPR CMP not found in any frame"
                }, !1);
                var i = Math.random().toString(10),
                    o = {
                        __cmpCall: {
                            command: e,
                            parameter: t,
                            callId: i
                        }
                    };
                r.cmpCallbacks[i] = n, a.postMessage(o, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? o(e.data) : e.data;
                if (t && t.__cmpReturn && t.__cmpReturn.callId && t.__cmpReturn.returnValue) {
                    var n = t.__cmpReturn;
                    r.cmpCallbacks && r.cmpCallbacks[n.callId] && (r.cmpCallbacks[n.callId](n.returnValue, n.success), delete r.cmpCallbacks[n.callId])
                }
            }, !1)
        }
        this.currentWindow.__cmp(e, t, n)
    }, e);

    function e(e, t, n) {
        void 0 === n && (n = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.logger = n
    }
    var c = (t.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__tcfapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, t.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__tcfapi
    }, t.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, t.prototype.pingWithTimeout = function(n, e, t, i) {
        function o(e, t) {
            r.logger(t), clearTimeout(e), i()
        }
        var r = this;
        return window.setTimeout(function() {
            var t = window.setTimeout(function() {
                o(n, "Timeout: Unable to get TCFv2 ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", 2, function(e) {
                clearTimeout(t), r.logger("TCFv2 CMP ping returned in ms"), "error" === e.cmpStatus ? o(n, "Error status on ping to TCFv2 CMP") : !0 !== e.cmpLoaded ? o(n, "TCFv2 ping returned cmpLoaded = false") : r.logger("TCFv2 ping returned cmpLoaded = true")
            })
        }, t)
    }, t.prototype.retrieveConsent = function(n) {
        var i = this,
            o = !1,
            r = window.setTimeout(function() {
                o = !0, i.logger("Timeout: Unable to resolve TCFv2 consent after " + i.timeout + "ms"), n(void 0)
            }, this.timeout),
            a = this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function() {
                o = !0, i.logger("Timeout: Unable to ping TCFv2 API after " + i.pingTimeout + "ms"), n(void 0)
            });
        this.executeCommand("getTCData", 2, function(e, t) {
            clearTimeout(a), o || (clearTimeout(r), t ? (i.logger("TCFv2 consent retrieved in ms"), i.processResponseData(e, n)) : (i.logger("Error retrieving TCFv2 consent data from CMP"), n(void 0)))
        }, [91])
    }, t.prototype.processResponseData = function(e, t) {
        var n;
        if (e) {
            var i = {};
            void 0 !== e.tcString && (i.consentData = e.tcString), void 0 !== e.gdprApplies && (i.gdprApplies = !!e.gdprApplies), i.version = e.tcfPolicyVersion ? e.tcfPolicyVersion : 2, i.purposes = null === (n = null == e ? void 0 : e.purpose) || void 0 === n ? void 0 : n.consents, t(i)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, t.prototype.executeCommand = function(e, t, n, i) {
        var a = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No TCFv2 CMP defined on current frame");
            var s = this.getCMPFrame();
            this.currentWindow.__tcfapi = function(e, t, n, i) {
                if (!s) return a.logger("TCFv2 CMP not found in any frame"), void n({
                    msg: "TCFv2 CMP not found in any frame"
                }, !1);
                var o = Math.random().toString(10),
                    r = {
                        __tcfapiCall: {
                            command: e,
                            version: t,
                            parameter: i,
                            callId: o
                        }
                    };
                a.cmpCallbacks[o] = n, s.postMessage(r, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? o(e.data) : e.data;
                if (t && t.__tcfapiReturn && t.__tcfapiReturn.callId && t.__tcfapiReturn.returnValue) {
                    var n = t.__tcfapiReturn;
                    a.cmpCallbacks && a.cmpCallbacks[n.callId] && "function" == typeof a.cmpCallbacks[n.callId] && (a.cmpCallbacks[n.callId](n.returnValue, n.success), delete a.cmpCallbacks[n.callId])
                }
            }, !1)
        }
        this.currentWindow.__tcfapi(e, t, n, i)
    }, t);

    function t(e, t, n) {
        void 0 === n && (n = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.logger = n
    }
    var l = (n.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__uspapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, n.prototype.hasCallerFunctionInWindow = function() {
        return "function" == typeof this.currentWindow.__uspapi
    }, n.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
    }, n.prototype.retrieveConsent = function(n) {
        var i = this,
            o = !1,
            r = window.setTimeout(function() {
                o = !0, i.logger("Timeout: Unable to resolve CCPA consent after " + i.timeout + "ms"), n(void 0)
            }, this.timeout);
        this.executeCommand("getUSPData", 1, function(e, t) {
            o || (clearTimeout(r), t ? (i.logger("CCPA consent retrieved"), i.processResponseData(e, n)) : (i.logger("Error retrieving CCPA consent data from CMP"), n(void 0)))
        })
    }, n.prototype.processResponseData = function(e, t) {
        e ? t(e) : (this.logger("Unable to read CCPA consent data from CMP"), t(void 0))
    }, n.prototype.executeCommand = function(e, t, n) {
        var r = this;
        if (!this.hasCallerFunctionInWindow()) {
            this.logger("No CCPA CMP defined on current frame");
            var a = this.getCMPFrame();
            this.currentWindow.__uspapi = function(e, t, n) {
                if (!a) return r.logger("CCPA CMP not found in any frame"), void n({
                    msg: "CCPA CMP not found in any frame"
                }, !1);
                var i = Math.random().toString(10),
                    o = {
                        __uspapiCall: {
                            command: e,
                            parameter: t,
                            callId: i
                        }
                    };
                r.uspapiCallbacks[i] = n, a.postMessage(o, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? o(e.data) : e.data;
                if (t && t.__uspapiReturn && t.__uspapiReturn.callId && t.__uspapiReturn.returnValue) {
                    var n = t.__uspapiReturn;
                    r.uspapiCallbacks && r.uspapiCallbacks[n.callId] && (r.uspapiCallbacks[n.callId](n.returnValue, n.success), delete r.uspapiCallbacks[n.callId])
                }
            }, !1)
        }
        this.currentWindow.__uspapi(e, t, n)
    }, n.prototype.hasUserOptOut = function(e) {
        return !(!e || !e.uspString || "1YNY" === e.uspString.toUpperCase() || "1YNN" === e.uspString.toUpperCase() || "1YN-" === e.uspString.toUpperCase() || "1-N-" === e.uspString.toUpperCase() || "1---" === e.uspString)
    }, n);

    function n(e, t, n) {
        void 0 === n && (n = function(e) {}), this.uspapiCallbacks = {}, this.currentWindow = e, this.timeout = t.uspApiTimeout, this.logger = n
    }
    var d, i, r = "OneTag",
        p = ["color: #fff;", "background: #ff4f00;", "display: inline-block;", "padding: 1px 4px;", "border-radius: 3px;"].join(" ");
    (i = d = d || {})[i.Off = 0] = "Off", i[i.Error = 1] = "Error", i[i.Warning = 2] = "Warning", i[i.Info = 3] = "Info", i[i.Debug = 4] = "Debug";
    var D = (h.setLogLevel = function(e) {
        h.level = e, this.debug("Log level set to " + d[e])
    }, h.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        h.log(console.log, d.Debug, e)
    }, h.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        h.log(console.log, d.Info, e)
    }, h.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        h.log(console.warn, d.Warning, e)
    }, h.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        h.log(console.error, d.Error, e)
    }, h.log = function(e, t, n) {
        if (t <= h.level) {
            var i = window.navigator.userAgent,
                o = 0 < i.indexOf("MSIE ") || 0 < i.indexOf("Trident/") ? ["[" + r + "]"] : ["%c" + r, p];
            e.apply(console, o.concat(n))
        }
    }, h.level = d.Warning, h);

    function h() {}
    var f = (m.prototype.getProvider = function() {
        return this.tcfv2ConsentProvider.readyToRetrieve() ? this.tcfv2ConsentProvider : this.ccpaConsentProvider.readyToRetrieve() ? this.ccpaConsentProvider : this.tcfv1ConsentProvider.readyToRetrieve() ? this.tcfv1ConsentProvider : void 0
    }, m.prototype.retrieveConsent = function(e) {
        var t = this.getProvider();
        t ? t.retrieveConsent(e) : e(void 0)
    }, m);

    function m(e, t, n, i) {
        void 0 === t && (t = 1e4), void 0 === n && (n = 50), void 0 === i && (i = 1e3);
        var o = {
                tcfTimeout: t,
                tcfPingTimeout: n,
                tcfPingDelay: i
            },
            r = {
                uspApiTimeout: t
            };
        this.tcfv1ConsentProvider = new a(e, o, D.info), this.tcfv2ConsentProvider = new c(e, o, D.info), this.ccpaConsentProvider = new l(e, r, D.info)
    }

    function F(e) {
        return "gdprApplies" in e || "consentData" in e
    }

    function E(e) {
        return "uspString" in e
    }
    var g = (v.prototype.catchAndStoreException = function(e, t) {
        try {
            return void 0 === t ? e() : e.apply(this, t)
        } catch (e) {
            e instanceof Error ? this.exceptions.push(e) : this.exceptions.push(new Error(e))
        }
    }, v.prototype.setProtectedTimeout = function(e, t) {
        var n = this;
        if ("undefined" != typeof window && "function" == typeof window.setTimeout) return window.setTimeout(function() {
            return n.catchAndStoreException(e)
        }, t)
    }, v.prototype.addProtectedEventListener = function(e, t, n, i) {
        var o = this;
        if (void 0 !== e && "function" == typeof e.addEventListener) return e.addEventListener(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return o.catchAndStoreException(n, e)
        }, i)
    }, v.prototype.attachProtectedEvent = function(e, t, n) {
        var i = this;
        if (void 0 !== e && "function" == typeof e.attachEvent) return e.attachEvent(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return i.catchAndStoreException(n, e)
        })
    }, v);

    function v() {
        this.exceptions = []
    }

    function x(e, t) {
        if (e instanceof Array)
            for (var n = 0, i = e; n < i.length; n++) {
                x(i[n], t)
            } else O(t, e) || t.push(e)
    }

    function O(e, t) {
        for (var n = JSON.stringify || encodeURIComponent || escape, i = n(t), o = 0, r = e; o < r.length; o++) {
            var a = r[o];
            if (a === t || n(a) === i) return !0
        }
        return !1
    }

    function y(e, t) {
        var n = [];
        if (void 0 === e) return void 0 === t ? n : t.slice();
        if (void 0 === t) return e.slice();
        for (var i = 0, o = t; i < o.length; i++) {
            var r = o[i];
            O(e, r) || n.push(r)
        }
        return e.concat(n)
    }

    function M(e) {
        for (var t = [], n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            null != o && t.push(o)
        }
        return t
    }

    function W(e, t) {
        if (void 0 === e && void 0 === t) return !0;
        if (void 0 === e || void 0 === t) return !1;
        if (!(e instanceof Array)) return W([e], t);
        if (!(t instanceof Array)) return W(e, [t]);
        if (e.length !== t.length) return !1;
        for (var n = 0, i = e; n < i.length; n++) {
            if (!O(t, i[n])) return !1
        }
        return !0
    }
    var w, C, N = (k.extractHostname = function(e) {
        var t = document.createElement("a");
        return t.href = e, t.hostname
    }, k.getAnchorWithReferrer = function(e) {
        if (e && e.referrer) {
            var t = e.createElement("a");
            return t.href = e.referrer, t
        }
        return null
    }, k.getQueryString = function(t) {
        var n;
        try {
            n = t.top.location.search
        } catch (e) {
            var i = t;
            try {
                for (; i.parent.document !== i.document && i.parent.document;) i = i.parent
            } catch (e) {}
            if (i) {
                var o = k.getAnchorWithReferrer(i.document);
                o && (n = o.search)
            }
        }
        return n
    }, k.getHighestAccessibleUrl = function(e) {
        var t, n = k.getHighestAccessibleWindow(e),
            i = n.topFrame;
        if (n.err) try {
            try {
                t = i.top.location.href
            } catch (e) {
                var o = i.location.ancestorOrigins;
                t = o[o.length - 1]
            }
        } catch (e) {
            t = i.document.referrer
        } else t = i.location.href;
        return t
    }, k.getPreviousUrl = function(e) {
        var t, n, i = k.getHighestAccessibleWindow(e),
            o = i.topFrame,
            r = "";
        if (i.err || (r = o.document.referrer || (null === (t = o.top) || void 0 === t ? void 0 : t.document.referrer) || ""), !r) {
            var a = null === (n = o.location) || void 0 === n ? void 0 : n.ancestorOrigins;
            a && 0 < a.length && (r = a[a.length - 1])
        }
        return r
    }, k.onBodyReady = function(t, n) {
        ! function e() {
            document.body ? t.setProtectedTimeout(n, 0) : t.setProtectedTimeout(e, 10)
        }()
    }, k.onDocumentReady = function(n, i) {
        if ("complete" === document.readyState) i();
        else if (document.addEventListener) n.addProtectedEventListener(document, "DOMContentLoaded", i, !1), n.addProtectedEventListener(window, "load", i, !1);
        else {
            n.attachProtectedEvent(document, "onreadystatechange", i), n.attachProtectedEvent(window, "onload", i);
            var e = !1;
            try {
                e = null === window.frameElement && document.documentElement
            } catch (e) {}
            if (e && e.doScroll) ! function t() {
                if (e) {
                    try {
                        e.doScroll("left")
                    } catch (e) {
                        return void n.setProtectedTimeout(t, 50)
                    }
                    i()
                }
            }();
            else {
                var t = !1,
                    o = null === document.onload ? null : function(e, t) {
                        return e.onload(t)
                    },
                    r = null === document.onreadystatechange ? null : function(e, t) {
                        return e.onreadystatechange(t)
                    };
                document.onload = document.onreadystatechange = function(e) {
                    r instanceof Function && r(document, e), t || document.readyState && "complete" !== document.readyState || (o instanceof Function && o(document, e), t = !0, i())
                }
            }
        }
    }, k.removeLater = function(e, t) {
        e.setProtectedTimeout(function() {
            null !== t && null !== t.parentElement && t.parentElement.removeChild(t)
        }, 3e4)
    }, k.appendCriteoContainer = function(e) {
        if (!e) return null;
        var t = document.createElement("div");
        return t.setAttribute("id", "criteo-tags-div"), t.style.display = "none", e.appendChild(t), t
    }, k.getHighestAccessibleWindow = function(e) {
        var t = e,
            n = !1;
        try {
            for (; t.parent.document !== t.document;) {
                if (!t.parent.document) {
                    n = !0;
                    break
                }
                t = t.parent
            }
        } catch (e) {
            n = !0
        }
        return {
            topFrame: t,
            err: n
        }
    }, k);

    function k() {}

    function V(e) {
        var t = e;
        if (e instanceof Function) return (t = e()) instanceof Function ? t : V(t);
        if (e instanceof Array) {
            t = [];
            for (var n = 0; n < e.length; ++n) t[n] = V(e[n])
        } else if (e && "[object Object]" === e.toString()) {
            t = {};
            for (var i = 0, o = Object.getOwnPropertyNames(e); i < o.length; i++) {
                var r = o[i];
                t[r] = V(e[r])
            }
        }
        return t
    }

    function L(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && W(t.account, o.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (o[r] = t[r]);
                return
            }
        }
        e.push(t)
    }

    function U(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && W(t.account, o.account) && o.hash_method === t.hash_method) return void(void 0 !== t.email && (o.email = y(o.email instanceof Array || void 0 === o.email ? o.email : [o.email], t.email instanceof Array ? t.email : [t.email])))
        }
        e.push(t)
    }

    function B(e, t, n) {
        var i = V(n);
        return G(e, i), L(t, V(i)), 1
    }

    function G(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && void 0 === t.account && void 0 === o.account || W(t.account, o.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (o[r] = t[r]);
                return
            }
        }
        e.push(t)
    }

    function j(e) {
        if (void 0 !== e.identity && JSON.stringify) {
            var t = e.identity instanceof Array ? e.identity : [e.identity];
            e.raw_identity = JSON.stringify(t), delete e.identity
        }
    }(C = w = w || {})[C.None = 0] = "None", C[C.Cookie = 1] = "Cookie", C[C.LocalStorage = 2] = "LocalStorage";
    var b = (P.checkLocalStorageIsWritable = function() {
        try {
            if (!window.localStorage) return !1;
            var e = "criteo_localstorage_check";
            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    }, P.checkCookiesAreWritable = function() {
        var e = new P("criteo_write_test", 1e4);
        e.setValueWithNoDomain("1");
        var t = "1" === e.cookieValue;
        return e.removeWithNoDomain(), t
    }, P.prototype.setCookieRead = function() {
        this.isCookieRead = !0
    }, P.prototype.setValue = function(e, t) {
        void 0 === t && (t = !0), this.cookieValue = e, this.isCookieValueExternallySet = !0, t && this.writeOnAllStorages(e)
    }, P.prototype.setValueFromExistingCookie = function() {
        var e = this.getValue();
        void 0 !== e && (this.cookieValue = e, this.cookieOrigin |= w.Cookie)
    }, P.prototype.setValueFromAllStorages = function() {
        var e = this.getFromAllStorages();
        this.cookieValue = e.value, this.cookieOrigin = e.origin
    }, P.prototype.getValue = function() {
        for (var e = 0, t = document.cookie.split(";"); e < t.length; e++) {
            var n = t[e];
            if (n.substr(0, n.indexOf("=")).replace(/^\s+|\s+$/g, "") === this.cookieName) {
                var i = n.substr(n.indexOf("=") + 1);
                return (decodeURIComponent || unescape)(i)
            }
        }
    }, P.prototype.removeWithNoDomain = function() {
        this.setValueWithNoDomainWithExpiration("", 0)
    }, P.prototype.removeOnMainDomain = function() {
        this.setOnMainDomainWithExpiration("", 0)
    }, P.prototype.setOnMainDomain = function(e) {
        return this.setOnMainDomainWithExpiration(e, this.cookieRetentionTimeInMs)
    }, P.prototype.writeOnAllStorages = function(e) {
        this.setOnMainDomain(e), this.useLocalStorage && window.localStorage.setItem(this.cookieName, e)
    }, P.prototype.getFromAllStorages = function() {
        var e = null;
        this.useLocalStorage && (e = window.localStorage.getItem(this.cookieName));
        var t = this.getValue() || null;
        return {
            value: t || e,
            origin: this.computeStorageOrigin(t, e)
        }
    }, P.prototype.removeFromAllStorages = function() {
        this.removeOnMainDomain(), this.useLocalStorage && window.localStorage.removeItem(this.cookieName)
    }, P.prototype.setValueWithNoDomainWithExpiration = function(e, t) {
        var n = new Date;
        n.setTime(n.getTime() + t);
        var i = "expires=" + n.toUTCString(),
            o = encodeURIComponent || escape;
        document.cookie = this.cookieName + "=" + o(e) + ";" + i + ";path=/";
        var r = this.getValue();
        void 0 !== r && (this.cookieValue = r)
    }, P.prototype.setValueWithNoDomain = function(e) {
        this.setValueWithNoDomainWithExpiration(e, this.cookieRetentionTimeInMs)
    }, P.prototype.toFragmentData = function() {
        return {
            origin: this.cookieOrigin,
            value: this.cookieValue
        }
    }, P.prototype.setOnMainDomainWithExpiration = function(e, t) {
        var n = new Date;
        n.setTime(n.getTime() + t);
        for (var i = "expires=" + n.toUTCString(), o = null === document.location ? [] : document.location.hostname.split("."), r = null, a = 0; a < o.length; ++a) {
            var s = "domain=." + (r = o.slice(o.length - a - 1, o.length).join(".")),
                c = encodeURIComponent || escape;
            document.cookie = this.cookieName + "=" + c(e) + ";" + i + ";" + s + ";path=/";
            var u = this.getValue();
            if (u && u === e) break
        }
        return r || document.location
    }, P.prototype.computeStorageOrigin = function(e, t) {
        var n = w.None;
        return e && (n |= w.Cookie), t && (n |= w.LocalStorage), n
    }, P);

    function P(e, t) {
        this.cookieValue = null, this.isCookieValueExternallySet = !1, this.isCookieRead = !1, this.cookieName = e, this.cookieRetentionTimeInMs = t, this.cookieOrigin = w.None, this.useLocalStorage = P.checkLocalStorageIsWritable()
    }
    var q = (T.prototype.fillQueryStringParams = function(e) {
        var t = this.config.trackingCallData.firstPartyIdentifier;
        t && e.push("fpid=" + t), this.gaid && e.push("ai=" + this.gaid), this.idfa && e.push("idfa=" + this.idfa), null !== this.axidCookie.cookieValue && e.push("axid=" + this.axidCookie.cookieValue), null !== this.pxsigCookie.cookieValue && e.push("pxsig=" + this.pxsigCookie.cookieValue), this.canWriteCookie && e.push("adce=1"), null !== this.clickOriginPayload && e.push("cop=" + this.clickOriginPayload), null !== this.optoutCookie.cookieValue && e.push("optout=1"), null != this.bundleCookie.cookieValue && e.push("bundle=" + this.bundleCookie.cookieValue), null !== this.secureIdCookie.cookieValue && (e.push("sid=" + this.secureIdCookie.cookieValue), e.push("sid_read=" + (this.secureIdCookie.isCookieValueExternallySet ? "1" : "0"))), null !== this.tld && e.push("tld=" + this.tld), null !== this.privateMode && 0 !== this.privateMode && e.push("pm=" + this.privateMode), void 0 !== new b("cto_clc", this.readonlyCookieRetentionTime).getValue() && e.push("clc=1")
    }, T.prototype.checkAcid = function() {
        void 0 !== this.optoutCookie.getValue() ? this.axidCookie.setValue("optout") : this.axidCookie.setValueFromExistingCookie(), this.pxsigCookie.setValueFromExistingCookie(), this.setCanWriteCookie(), this.setCanWriteLocalStorage()
    }, T.prototype.setCop = function(e) {
        var t = N.getQueryString(e);
        if (void 0 !== t && (this.clickOriginPayload = this.getParameterValueByName(t, "cto_pld")), null === this.clickOriginPayload) try {
            var n = N.getAnchorWithReferrer(e.top.document);
            n && n.search && (this.clickOriginPayload = this.getParameterValueByName(n.search, "cto_pld"))
        } catch (e) {}
    }, T.prototype.checkClientSideIdentityStatus = function() {
        this.optoutCookie.getFromAllStorages(), this.secureIdCookie.setValueFromAllStorages(), this.bundleCookie.setValueFromAllStorages(), this.ifaCookie.setValueFromAllStorages()
    }, T.prototype.checkCookies = function(e) {
        var t = !0;
        if (e.callbacks) {
            for (var n = 0, i = "string" == typeof e.callbacks ? [e.callbacks] : e.callbacks; n < i.length; n++) {
                var o = i[n],
                    r = document.createElement("img");
                r.setAttribute("style", "display:none;"), r.setAttribute("width", "1"), r.setAttribute("height", "1"), r.setAttribute("data-owner", "criteo-tag"), r.setAttribute("src", o);
                var a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(r, a), N.removeLater(this.exceptionHandler, r)
            }
            t = !1
        }
        e.optout ? (this.optoutCookie.setValue("1", t), this.secureIdCookie.removeFromAllStorages(), this.bundleCookie.removeFromAllStorages()) : (e.bundle && this.bundleCookie.setValue(e.bundle, t), e.removeSid ? this.secureIdCookie.removeFromAllStorages() : e.sid && this.secureIdCookie.setValue(e.sid, t))
    }, T.prototype.getParameterValueByName = function(e, t) {
        if (e && 1 < e.length) {
            "?" === e[0] && (e = "&" + e.substr(1));
            var n = "&" + t + "=",
                i = e.indexOf(n);
            if (-1 !== i) {
                var o = e.indexOf("&", i + n.length);
                return e.slice(i + n.length, o < 0 ? void 0 : o)
            }
        }
        return null
    }, T.prototype.setCanWriteCookie = function() {
        null === this.axidCookie.cookieValue && null === this.pxsigCookie.cookieValue ? this.canWriteCookie = b.checkCookiesAreWritable() : this.canWriteCookie = !0
    }, T.prototype.setCanWriteLocalStorage = function() {
        this.canWriteLocalStorage = b.checkLocalStorageIsWritable()
    }, T.prototype.getTld = function() {
        var e = new b("cto_tld_test", 36e5),
            t = e.setOnMainDomain("woot");
        return e.removeOnMainDomain(), t
    }, T.prototype.getPrivateMode = function(e, t) {
        if (e.isSafari) try {
            if ("function" == typeof t.openDatabase) return t.openDatabase(null, null, null, null), 1
        } catch (e) {
            return 2
        }
        return 0
    }, T);

    function T(e, t, n, i) {
        this.readonlyCookieRetentionTime = 0, this.optoutCookieRetentionTime = 15768e7, this.identificationCookieRetentionTime = 34164e6, this.axidCookie = new b("cto_axid", this.readonlyCookieRetentionTime), this.optoutCookie = new b("cto_optout", this.optoutCookieRetentionTime), this.pxsigCookie = new b("cto_pxsig", this.readonlyCookieRetentionTime), this.secureIdCookie = new b("cto_sid", this.identificationCookieRetentionTime), this.bundleCookie = new b("cto_bundle", this.identificationCookieRetentionTime), this.ifaCookie = new b("id_controller_ifa", this.identificationCookieRetentionTime), this.canWriteCookie = !1, this.canWriteLocalStorage = !1, this.clickOriginPayload = null, this.tld = this.getTld(), this.privateMode = this.getPrivateMode(t, n), this.exceptionHandler = e, this.config = i
    }
    var H = (_.prototype.createIframe = function(e, t, n, i) {
        var o = document.createElement("iframe"),
            r = encodeURIComponent || escape,
            a = N.getHighestAccessibleUrl(window),
            s = r(N.extractHostname(a)),
            c = window.SYNCFRAME_ORIGIN || "onetag",
            u = {
                bundle: e.bundleCookie.toFragmentData(),
                cw: e.canWriteCookie,
                optout: e.optoutCookie.toFragmentData(),
                origin: c,
                pm: e.privateMode,
                sid: e.secureIdCookie.toFragmentData(),
                tld: e.tld,
                topUrl: s,
                version: t.replace(/\./g, "_"),
                ifa: e.ifaCookie.toFragmentData(),
                lsw: e.canWriteLocalStorage
            },
            l = this.gumSyncFrameEndPoint;
        return "#gum-debug-mode" === window.location.hash ? l += "?debug=1&topUrl=" + s : l += "?topUrl=" + s, c && (l += "&origin=" + c), n && (F(n) ? (void 0 !== n.gdprApplies && (l += "&gdpr=" + (n.gdprApplies ? 1 : 0)), void 0 !== n.consentData && (l += "&gdpr_consent=" + n.consentData)) : E(n) && void 0 !== n.uspString && (l += "&us_privacy=" + n.uspString)), l += "#" + JSON.stringify(u), o.src = l, o.id = this.gumSyncFrameId, o.width = "0", o.height = "0", o.frameBorder = "0", o.setAttribute("style", "border-width:0px; margin:0px; display:none"), o.title = "Criteo GUM iframe", N.removeLater(i, o), o
    }, _.prototype.setWaitingFlag = function(e) {
        this.waitingForSyncframe = this.waitingForSyncframe && null === e.bundleCookie.cookieValue && null === e.optoutCookie.cookieValue
    }, _.prototype.shouldInjectSyncframe = function() {
        return void 0 !== window.addEventListener || this.forceSyncFrame
    }, _);

    function _(e) {
        this.forceSyncFrame = !1, this.gumSyncFrameOrigin = "https://" + s("gumDomain", "gum.criteo.com"), this.gumSyncFrameEndPoint = window.CriteoSyncFrameUrlOverride || this.gumSyncFrameOrigin + "/syncframe", this.gumSyncFrameId = "criteo-syncframe-onetag", this.waitingForSyncframe = e.hasItp || s("waitForGum", !0)
    }
    var z = new RegExp(/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
        Y = (I.prototype.canRetrieveMetrics = function() {
            return this.hasPerformanceApi
        }, I.prototype.startRecordingInit = function() {
            this.canRetrieveMetrics() && (this.beginInit = performance.now())
        }, I.prototype.stopRecordingInit = function() {
            if (this.canRetrieveMetrics() && null === this.timings.initTime && null !== this.beginInit) {
                var e = performance.now();
                this.timings.initTime = e - this.beginInit
            }
        }, I.prototype.startRecordingPush = function() {
            this.canRetrieveMetrics() && (this.beginPush = performance.now())
        }, I.prototype.stopRecordingPush = function() {
            if (this.canRetrieveMetrics() && null === this.timings.pushTime && null !== this.beginPush && null !== this.timings.initTime) {
                var e = performance.now();
                this.timings.pushTime = e - this.beginPush
            }
        }, I.prototype.getPerformanceOrDegradedNow = function() {
            return this.canRetrieveMetrics() ? performance.now() : (new Date).getTime()
        }, I);

    function I() {
        this.timings = {
            initTime: null,
            pushTime: null
        }, this.beginInit = null, this.beginPush = null, this.hasPerformanceApi = void 0 !== window.performance && "function" == typeof window.performance.now
    }
    var J = (S.prototype.trySetPageId = function(e, t) {
        this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (e.page_id = t)
    }, S.prototype.tryForceViewListPageId = function(e) {
        this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (this.checkNotExistOrEmpty(e.category) ? this.checkNotExistOrEmpty(e.keywords) ? e.page_id = "viewList" : e.page_id = "viewSearchResult" : e.page_id = "viewCategory")
    }, S.prototype.tryRunActionAfterAdBlockDetectionOrImmediate = function(t, e) {
        var n = this,
            i = window.criteo_q;
        if (null != i) {
            var o = i.adBlockDetector;
            this.isCbsEnabled && void 0 !== o ? (o(function(e) {
                n.abe = e, t()
            }), e(t)) : t()
        } else t()
    }, S.prototype.tryAppendAdBlockerParameter = function(e) {
        void 0 !== this.abe && e.push("abe=" + (this.abe ? 1 : 0))
    }, S.prototype.tryAppendUatParameter = function(e) {
        if (this.isCbsEnabled && void 0 !== this.uat) {
            var t = encodeURIComponent || escape;
            e.push("uat=" + t(this.uat))
        }
    }, S.prototype.clean = function() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0
    }, S.prototype.enable = function() {
        this.isCbsEnabled = !0
    }, S.prototype.setUat = function(e) {
        this.uat = e
    }, S.prototype.checkNotExistOrEmpty = function(e) {
        return void 0 === e || "" === e
    }, S);

    function S() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0
    }
    var R = /^#(enable|disable)-criteo-tag-debug-mode(=(\d+))?$/;

    function Q(e, t, n, i, o) {
        if (function() {
                if (!document || !window.location.hash) return;
                var e = R.exec(window.location.hash);
                if (!e || 4 !== e.length) return;
                var t = "enable" === e[1],
                    n = Number(e[3]);
                new b("criteoTagDebugMode", t ? 864e5 : 0).setValueWithNoDomain(t && n && !isNaN(n) ? String(n) : "0"), window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"))
            }(), !document || "function" != typeof Array.prototype.indexOf || -1 === document.cookie.indexOf("criteoTagDebugMode=")) return e;
        var r = function(e, t, n, i, o) {
            var a = {
                exceptions: e.exceptions,
                m_config: n,
                m_state: i,
                originalPush: e.push,
                performances: e.performances,
                push: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    0 < e.length && this.stagedPushes.push(e), o.stopRecordingInit()
                },
                pushError: function(e) {
                    this.stagedPushes.push(e)
                },
                removeLater: e.removeLater,
                setProtectedTimeout: t.setProtectedTimeout,
                stagedErrors: [],
                stagedPushes: []
            };
            return window.onerror = function(r) {
                return function(e, t, n, i) {
                    var o = {
                        column: i,
                        lineNumber: n,
                        message: e,
                        url: t
                    };
                    return a.pushError(o), !(!r || "function" != typeof r) && r.apply(window, [e, t, n, i])
                }
            }(window.onerror), a
        }(e, t, n, i, o);
        return function() {
            if (!document) return;
            var e = "ld-tag-debug." + u + ".js",
                t = document.createElement("script");
            t.setAttribute("type", "text/javascript"), t.setAttribute("src", document.location.protocol + "//static.criteo.net/js/ld/" + e);
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n)
        }(), r
    }
    var A, X = (Z.prototype.isChrome = function() {
        return !!window.chrome
    }, Z.prototype.addTrialToken = function(e) {
        var t = document.createElement("meta");
        t.httpEquiv = "origin-trial", t.content = e, document.head.appendChild(t)
    }, Z.prototype.registerTrigger = function(e) {
        if (this.isFeatureAllowed("attribution-reporting")) {
            var t = document.createElement("img");
            t.setAttribute("style", "display:none;"), t.setAttribute("width", "1"), t.setAttribute("height", "1"), t.setAttribute("attributionsrc", Z.ATTRIBUTION_TRIGGER_URL_PREFIX + "?" + e);
            var n = document.getElementsByTagName("script")[0];
            t.setAttribute("data-owner", "criteo-tag"), n.parentNode.insertBefore(t, n), N.removeLater(this.exceptionHandler, t)
        }
    }, Z.prototype.isFeatureAllowed = function(t) {
        return !(!document.featurePolicy || !document.featurePolicy.features()) && document.featurePolicy.features().some(function(e) {
            return e === t
        })
    }, Z.CRITEO_NET_TOKEN = "A9+ldib+sKhGj2FcIjq5GnvBZFuIiXID0+NkE6k7cEk71MhaHFGqo3wUlUFmZ6d9w0KPwx9UxGiCTYWtRnTGDQkAAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5uZXQ6NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", Z.CRITEO_COM_TOKEN = "AzLNuh8GFzfIOcwvhEg7Ymr7YCzlYVTKeD7i2iETABbRf+sL2FAx+r+HlTtxSi1zgUFxBlJVoxgLjuhqiwTjAw4AAACAeyJvcmlnaW4iOiJodHRwczovL2NyaXRlby5jb206NDQzIiwiZmVhdHVyZSI6IlByaXZhY3lTYW5kYm94QWRzQVBJcyIsImV4cGlyeSI6MTY4MDY1Mjc5OSwiaXNTdWJkb21haW4iOnRydWUsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", Z.ATTRIBUTION_TRIGGER_URL_PREFIX = "https://measurement-api.criteo.com/conversiontracking", Z);

    function Z(e, t) {
        this.document = e, this.exceptionHandler = t, this.isChrome() && (this.addTrialToken(Z.CRITEO_NET_TOKEN), this.addTrialToken(Z.CRITEO_COM_TOKEN))
    }

    function K(e, t, n, i, o) {
        if (e && 0 !== (e = e.trim()).length) {
            var r = encodeURIComponent || escape,
                a = r(e);
            n < a.length && (t.push(o + "=" + a.length), a = a.substr(0, n));
            var s = r(a);
            t.push(i + "=" + s)
        }
    }
    if (!window.criteo_q || window.criteo_q instanceof Array) {
        var $ = window.criteo_q || [];
        window.criteo_q = function() {
            var e;
            void 0 !== (null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.hash) && -1 !== window.location.hash.indexOf("onetag-debug") && D.setLogLevel(d.Debug);
            var P = new g,
                o = new Y;
            o.startRecordingInit();
            var v = {
                    app: {
                        accounts: [],
                        actions: [],
                        bodyReady: !1,
                        disingScheduled: [],
                        domReady: !1,
                        eventSent: !1,
                        queue: []
                    },
                    cbs: new J
                },
                y = {
                    hooks: {},
                    shortNameMap: {
                        events: {
                            applaunched: "al",
                            viewitem: "vp",
                            viewhome: "vh",
                            viewlist: "vl",
                            viewbasket: "vb",
                            viewsearch: "vs",
                            viewpage: "vpg",
                            tracktransaction: "vc",
                            addtocart: "ac",
                            calldising: "dis",
                            setdata: "exd",
                            setemail: "ce",
                            setidentity: "id"
                        },
                        properties: {
                            event: "e",
                            account: "a",
                            first_party_identifier: "fpid",
                            currency: "c",
                            product: "p",
                            item: "p",
                            "item.id": "i",
                            "item.price": "pr",
                            "item.quantity": "q",
                            "product.id": "i",
                            "product.price": "pr",
                            "product.quantity": "q",
                            data: "d",
                            keywords: "kw",
                            checkin_date: "din",
                            checkout_date: "dout",
                            deduplication: "dd",
                            delivery: "dl",
                            attribution: "at",
                            "attribution.channel": "ac",
                            "attribution.value": "v",
                            user_segment: "si",
                            new_customer: "nc",
                            customer_id: "ci",
                            email: "m",
                            hash_method: "h",
                            identity: "id",
                            raw_identity: "rid",
                            transaction_value: "tv",
                            client_revenue: "cr",
                            responseType: "rt",
                            page_name: "pn",
                            page_id: "pi",
                            page_number: "pnb",
                            category: "ca",
                            filters: "f",
                            "filters.name": "fn",
                            "filters.operator": "fo",
                            "filters.value": "fv",
                            retailer_visitor_id: "rvi",
                            price: "pr",
                            availability: "av",
                            sub_event_type: "se",
                            store_id: "s",
                            item_group_id: "sp",
                            sku_parent: "sp",
                            zipcode: "z"
                        }
                    },
                    trackingCallData: {
                        account: s("partnerId") || null,
                        firstPartyIdentifier: s("fpIdentifier") || null,
                        customerInfo: [],
                        extraData: [],
                        handlerParams: {
                            v: u
                        },
                        handlerResponseType: "single",
                        handlerUrlPrefix: "https://sslwidget.criteo.com/event",
                        partnerPayload: null,
                        requestType: "pixel",
                        responseType: "js",
                        tagVersion: u,
                        dynamic: s("dynamic") || null,
                        fullUrlMaxLength: s("fullUrlMaxLength", 400)
                    },
                    workflow: {
                        container: null,
                        disOnce: !1,
                        manualDising: !1,
                        manualFlush: !1,
                        noPartialFlush: !1,
                        partialDis: !1
                    }
                },
                t = function(e) {
                    var t = e.match(z),
                        n = null !== t;
                    return {
                        hasItp: null !== t && 11 <= parseFloat(t[1]),
                        isSafari: n
                    }
                }(window.navigator.userAgent),
                w = new q(P, t, window, y),
                C = new H(t),
                n = new f(window),
                T = new X(document, P),
                _ = function(t) {
                    var i = !1,
                        o = void 0,
                        r = [];
                    return function(e) {
                        i ? e(o) : (r.push(e), 1 === r.length && t(function(e) {
                            i = !0, o = e;
                            for (var t = 0, n = r; t < n.length; t++) {
                                (0, n[t])(o)
                            }
                        }))
                    }
                }(n.retrieveConsent.bind(n));

            function l(e, t, n, i, o, r, a, s) {
                e.waitingForSyncframe && (e.waitingForSyncframe = !1, c(e, t, n, i, o, r, a, s))
            }

            function i(t, n, i, o, r, a, s, c, e) {
                if (t.shouldInjectSyncframe()) {
                    var u = t.createIframe(o, a.tagVersion, e, P);
                    window.addEventListener && (P.addProtectedEventListener(window, "message", function(e) {
                        ! function(e, t, n, i, o, r, a, s, c) {
                            var u = c.data;
                            if (!(u && c.origin == e.gumSyncFrameOrigin || window.BypassSyncframeMessageSanityCheck)) return;
                            c.stopPropagation(), i.checkCookies(u), e.waitingForSyncframe && l(e, t, n, i, o, r, a, s)
                        }(t, n, i, o, r, a, s, c, e)
                    }, !0), S(n, c, s, {
                        event: "appendtag",
                        element: u
                    }))
                }
            }

            function r(e, t) {
                ! function(e) {
                    var t = !1;
                    if (200 < e.length) t = !0;
                    else
                        for (var n = 0, i = e; n < i.length; n++) {
                            var o = i[n],
                                r = 0;
                            if (Object.keys) r = Object.keys(o).length;
                            else
                                for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r += 1);
                            if (200 < r) {
                                t = !0;
                                break
                            }
                        }
                    t && (e.length = 0)
                }(e.extraData), e.customerInfo = [], t.clean()
            }

            function a() {
                for (var i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
                P.catchAndStoreException(function() {
                    o.startRecordingPush();
                    for (var e = 0, t = i; e < t.length; e++) {
                        var n = t[e];
                        v.app.queue.push(n)
                    }
                    c(C, v.app, v.cbs, w, y.shortNameMap, y.trackingCallData, y.hooks, y.workflow), r(y.trackingCallData, v.cbs), o.stopRecordingPush()
                }, i), o.stopRecordingInit()
            }

            function c(e, t, n, i, o, r, a, s) {
                for (var c = [], u = t.queue, l = 0; l < u.length; ++l) {
                    var d = u[l];
                    if (d instanceof Array) {
                        var p = [l + 1, 0];
                        u.splice.apply(u, p.concat(d))
                    }
                    if (d instanceof Function) u.splice(l + 1, 0, d());
                    else if (d && "[object Object]" === d.toString()) switch (h(t, n, i, o, r, a, s, d, l, u, c)) {
                        case 0:
                            c.push(d);
                            break;
                        case -1:
                            c = c.concat(u.slice(l)), l = u.length
                    }
                }
                a.afterEval instanceof Function && a.afterEval(), t.queue = c || [], s.manualFlush || s.noPartialFlush && 0 !== t.queue.length || e.waitingForSyncframe || b(t, n, i, o, r, a, s, 0 !== t.queue.length)
            }

            function I(e, t, n) {
                n.hasOwnProperty("account") || (n.account = t.accounts);
                var i = e.handlerResponseType;
                n.hasOwnProperty("type") && (i = n.type, delete n.type), x(n.account, t.disingScheduled), "sequential" === i && (n.dc = !0)
            }

            function S(e, t, n, i) {
                var o = R(e, i);
                return null !== o ? o : k(e, t, n, i)
            }

            function k(e, t, n, i) {
                if (!e.bodyReady || t.container && document.body.contains(t.container) || (t.container = N.appendCriteoContainer(document.body)), i.url) {
                    var o = void 0;
                    i.isImgUrl ? ((o = document.createElement("img")).setAttribute("style", "display:none;"), o.setAttribute("width", "1"), o.setAttribute("height", "1")) : ((o = document.createElement("script")).setAttribute("async", "true"), o.setAttribute("type", "text/javascript")), o.setAttribute("src", i.url), i.element = o
                }
                if (n.beforeAppend instanceof Function && (i.element = n.beforeAppend(i.element)), V(i), i.element && (i.element.tagName || i.isImgUrl))
                    if (t.container || "script" !== i.element.tagName.toLowerCase() && !i.isImgUrl) {
                        if (!t.container) return 0;
                        t.container.appendChild(i.element), N.removeLater(P, i.element)
                    } else {
                        var r = document.getElementsByTagName("script")[0];
                        i.element.setAttribute("data-owner", "criteo-tag"), r.parentNode.insertBefore(i.element, r), N.removeLater(P, i.element)
                    }
                return 1
            }

            function R(e, t) {
                return !e.domReady && t.requiresDOM && "no" !== t.requiresDOM ? "blocking" === t.requiresDOM ? -1 : 0 : (delete t.requiresDOM, t.event ? (t.account && x(t.account, e.accounts), t.event = t.event.toLowerCase(), null) : (V(t), 1))
            }

            function h(e, t, n, i, o, r, a, s, c, u, l) {
                var d = s.event,
                    p = R(e, s);
                if (null !== p) return p;
                switch (s.event) {
                    case "setdata":
                        return B(o.extraData, e.actions, s);
                    case "setparameter":
                        for (var h in s) "event" !== h.toLowerCase() && s.hasOwnProperty(h) && (o.handlerParams[h] = s[h]);
                        return 1;
                    case "calldising":
                        I(o, e, s);
                        break;
                    case "setzipcode":
                    case "setstore":
                        return s.event = "setdata", B(o.extraData, e.actions, s);
                    case "setcustomerid":
                        return s.event = "setdata", s.customer_id = s.id, delete s.id, B(o.extraData, e.actions, s);
                    case "setretailervisitorid":
                        return t.enable(), s.event = "setdata", s.retailer_visitor_id = s.id, delete s.id, B(o.extraData, e.actions, s);
                    case "setgoogleadvertisingid":
                        return n.gaid = s.gaid, B(o.extraData, e.actions, {
                            event: "setdata",
                            site_type: "aa"
                        });
                    case "setappleadvertisingid":
                        return n.idfa = s.idfa, B(o.extraData, e.actions, {
                            event: "setdata",
                            site_type: "aios"
                        });
                    case "setemail":
                    case "sethashedemail":
                    case "ceh":
                        s.event = "setemail", s.hasOwnProperty("email") && (s.email instanceof Array || (s.email = [s.email]), s.email = M(s.email));
                        var f = V(s);
                        return o.customerInfo.push(f), U(e.actions, V(s)), 1;
                    case "setidentity":
                        if (s.hasOwnProperty("identity")) {
                            var m = s.identity instanceof Array ? s.identity : [s.identity];
                            if (0 < (m = M(m)).length) return s.identity = m, e.actions.push(V(s)), 1
                        }
                        return 0;
                    case "setsitetype":
                        var g = "d";
                        return "mobile" !== s.type && "m" !== s.type || (g = "m"), "tablet" !== s.type && "t" !== s.type || (g = "t"), s.event = "setdata", delete s.type, s.site_type = g, B(o.extraData, e.actions, s);
                    case "appendtag":
                        return k(e, a, r, s);
                    case "gettagstate":
                        return s.callback instanceof Function ? s.callback(v, y, w, C) : 1;
                    case "setuat":
                        return t.setUat(s.uat), 1;
                    case "viewsearchresult":
                    case "viewcategory":
                        t.trySetPageId(s, d), s.event = "viewlist";
                        break;
                    case "viewlist":
                        t.tryForceViewListPageId(s);
                        break;
                    case "viewitem":
                    case "viewhome":
                    case "viewbasket":
                    case "tracktransaction":
                    case "addtocart":
                        t.trySetPageId(s, d);
                        break;
                    case "viewstore":
                        t.trySetPageId(s, d), s.event = "viewHome", s.sub_event_type = "s";
                        break;
                    case "checkavailability":
                        t.trySetPageId(s, d), s.event = "viewBasket", s.sub_event_type = "a";
                        break;
                    case "reserveinstore":
                        t.trySetPageId(s, d), s.event = "viewBasket", s.sub_event_type = "r";
                        break;
                    case "flush":
                    case "flushevents":
                        return b(e, t, n, i, o, r, a, c !== u.length - 1 || 0 !== l.length), 1;
                    case "setaccount":
                        return o.account = s.account, 1;
                    case "seturl":
                        return o.handlerUrlPrefix = s.url, 1;
                    case "setcalltype":
                        return o.handlerResponseType = s.type, 1;
                    case "setresponsetype":
                        return o.responseType = s.type, 1;
                    case "setrequesttype":
                        return o.requestType = s.type, 1;
                    case "setpartnerpayload":
                        return o.partnerPayload = s.payload, 1;
                    case "oninitialized":
                        return r.onInitialized = s.callback, 1;
                    case "ondomready":
                        return r.onDOMReady = s.callback, 1;
                    case "beforeappend":
                        return r.beforeAppend = s.callback, 1;
                    case "aftereval":
                        return r.afterEval = s.callback, 1;
                    case "onflush":
                        return r.onFlush = s.callback, 1;
                    case "onurlgenerated":
                        return r.onUrlGenerated = s.callback, 1;
                    case "disonce":
                        return a.disOnce = !0, 1;
                    case "manualdising":
                        return a.manualDising = !0, 1;
                    case "manualflush":
                        return a.manualFlush = !0, 1;
                    case "nopartialflush":
                        return a.noPartialFlush = !0, 1;
                    case "disonpartialflush":
                        return a.partialDis = !0, 1
                }
                return e.actions.push(V(s)), 1
            }

            function b(n, i, e, t, o, r, a, s) {
                if (r.onFlush instanceof Function && (r.onFlush(), D.warn("on flush hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")), 0 !== n.actions.length) {
                    for (var c = 0, u = o.extraData; c < u.length; c++) {
                        var l = u[c];
                        L(n.actions, l)
                    }
                    for (var d = 0, p = o.customerInfo; d < p.length; d++) {
                        var h = p[d];
                        U(n.actions, h)
                    }
                    for (var f = 0, m = n.actions; f < m.length; f++) {
                        j(m[f])
                    }
                    if (!a.manualDising && (!s || a.partialDis)) {
                        for (var g = [], v = 0, y = n.accounts; v < y.length; v++) {
                            var w = y[v];
                            O(n.disingScheduled, w) || g.push(w)
                        }
                        0 < g.length && function(e, t, n) {
                            var i = R(t, n);
                            null !== i || (I(e, t, n), t.actions.push(V(n)))
                        }(o, n, {
                            event: "callDising",
                            account: g
                        })
                    }
                    var C = !1,
                        k = function(e, t, n, i, o) {
                            var r = e.actions,
                                a = [];
                            1 === e.accounts.length && (o.account = e.accounts[0]);
                            null !== o.account && a.push("a=" + A(i, o.account, []));
                            "js" !== o.responseType && a.push("rt=" + A(i, o.responseType, []));
                            if (o.handlerParams) {
                                var s = decodeURIComponent(A(i, o.handlerParams, []));
                                s && a.push(s)
                            }
                            t.tryAppendUatParameter(a);
                            for (var c = 0; c < r.length; ++c) {
                                var u = r[c];
                                u.account && W(null === o.account ? void 0 : o.account, null === u.account ? void 0 : u.account) && delete u.account, a.push("p" + c + "=" + A(i, u, []))
                            }
                            n.fillQueryStringParams(a), null !== o.partnerPayload && a.push("pp=" + A(i, o.partnerPayload, []));
                            o.dynamic && a.push("dy=1");
                            return K(N.getHighestAccessibleUrl(window), a, o.fullUrlMaxLength, "fu", "ful"), K(N.getPreviousUrl(window), a, o.fullUrlMaxLength, "pu", "pul"), a.push("dtycbr=" + function() {
                                return Math.floor(1e5 * Math.random())
                            }()), a
                        }(n, i, e, t, o);
                    n.actions = [];
                    var b = function() {
                        if (!C) {
                            C = !0, i.tryAppendAdBlockerParameter(k);
                            var e = function(e) {
                                    return e.join("&")
                                }(k),
                                t = function(e, t) {
                                    return {
                                        event: "appendTag",
                                        isImgUrl: "gif" === e.responseType,
                                        url: e.handlerUrlPrefix + "?" + t
                                    }
                                }(o, e);
                            "function" == typeof r.onUrlGenerated ? r.onUrlGenerated(t.url) : "beacon" === o.requestType && navigator.sendBeacon ? navigator.sendBeacon(t.url) : S(n, a, r, t), D.info("DIS call triggered", t.url, k), n.eventSent = !0, T.registerTrigger(e), a.disOnce || (n.disingScheduled = [])
                        }
                    };
                    _(function(e) {
                        e && k.push.apply(k, function(e) {
                            var t = [];
                            return F(e) ? (void 0 !== e.gdprApplies && t.push("gra=" + (e.gdprApplies ? 1 : 0)), void 0 !== e.consentData && t.push("grs=" + e.consentData), void 0 !== e.version && t.push("grv=" + e.version)) : E(e) && (void 0 !== e.uspString && t.push("cs=" + e.uspString), void 0 !== e.version && t.push("cv=" + e.version)), t
                        }(e)), i.tryRunActionAfterAdBlockDetectionOrImmediate(b, function(e) {
                            return P.setProtectedTimeout(e, 500)
                        })
                    })
                }
            }

            function A(e, t, n) {
                var i, o, r, a = "";
                if (t instanceof Function) a = A(e, t(), n);
                else if (t instanceof Array) {
                    for (var s = [], c = 0; c < t.length; ++c) s[c] = A(e, t[c], n);
                    a += "[" + s.join(",") + "]"
                } else if (t && "[object Object]" === t.toString()) {
                    var u = [];
                    for (var l in t)
                        if (t.hasOwnProperty(l)) {
                            var d = n.concat([l]);
                            u.push((i = e, o = l, void 0, r = d.join("."), (i.properties[r] ? i.properties[r] : o) + "=" + A(e, t[l], d)))
                        }
                    a += u.join("&")
                } else 1 === n.length && "event" === n[0] ? a += e.events[t.toLowerCase()] ? e.events[t.toLowerCase()] : t : a += t;
                return (encodeURIComponent || escape)(a)
            }
            return P.catchAndStoreException(function() {
                return w.checkAcid(), w.checkClientSideIdentityStatus(), w.setCop(window),
                    function(e, t, n, i, o, r, a, s) {
                        e.setWaitingFlag(i), e.waitingForSyncframe && P.setProtectedTimeout(function() {
                            l(e, t, n, i, o, r, a, s)
                        }, 1e4)
                    }(C, v.app, v.cbs, w, y.shortNameMap, y.trackingCallData, y.hooks, y.workflow), N.onBodyReady(P, function() {
                        y.hooks.onInitialized instanceof Function ? (v.app.bodyReady = y.hooks.onInitialized(), D.warn("onInitialized hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : v.app.bodyReady = !0, _(function(e) {
                            i(C, v.app, v.cbs, w, y.shortNameMap, y.trackingCallData, y.hooks, y.workflow, e)
                        }), c(C, v.app, v.cbs, w, y.shortNameMap, y.trackingCallData, y.hooks, y.workflow)
                    }), N.onDocumentReady(P, function() {
                        y.hooks.onDOMReady instanceof Function ? (v.app.domReady = y.hooks.onDOMReady(), D.warn("on DOM ready hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : v.app.domReady = !0, c(C, v.app, v.cbs, w, y.shortNameMap, y.trackingCallData, y.hooks, y.workflow)
                    }),
                    function(e) {
                        try {
                            var t = N.getAnchorWithReferrer(document);
                            if (t)
                                if (t.hostname !== document.location.hostname) G(e, {
                                    event: "setData",
                                    ref: t.protocol + "//" + t.hostname
                                })
                        } catch (e) {}
                    }(y.trackingCallData.extraData), s("visitEventEnabled", !1) && function(e, t) {
                        function n() {
                            t.eventSent || (e({
                                event: "setRequestType",
                                type: "beacon"
                            }), e({
                                event: "viewPage"
                            }))
                        }
                        window.addEventListener && window.addEventListener("beforeunload", n);
                        var i = s("visitEventDelay", 3e4);
                        0 <= i && setTimeout(n, i)
                    }(a, v.app), Q({
                        exceptions: P.exceptions,
                        performances: o.timings,
                        push: a,
                        removeLater: function(e) {
                            return N.removeLater(P, e)
                        }
                    }, P, y, v, o)
            })
        }(), $.adBlockDetector, window.criteo_q.adBlockDetector = $.adBlockDetector, (A = window.criteo_q).push.apply(A, $)
    }
}();