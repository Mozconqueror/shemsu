(function(E) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        m = {},
        ha = {},
        p = function(a, b) {
            var c = ha[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        },
        q = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in m ? f = m : f = ea;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(m, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    q("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.h
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    q("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, m.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");
    var ia = function(a) {
            a = {
                next: a
            };
            a[p(m.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ja = function(a) {
            return a.raw = a
        },
        r = function(a) {
            var b = "undefined" != typeof m.Symbol && p(m.Symbol, "iterator") && a[p(m.Symbol, "iterator")];
            return b ? b.call(a) : {
                next: ba(a)
            }
        },
        ka = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        t = function(a) {
            return a instanceof Array ? a : ka(r(a))
        },
        la = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        na = fa && "function" == typeof p(Object, "assign") ? p(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) la(d, e) && (a[e] = d[e])
            }
            return a
        };
    q("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa,
        v = function(a, b) {
            a.prototype = oa(b.prototype);
            a.prototype.constructor = a;
            if (ta) ta(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ra = b.prototype
        },
        ua = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    q("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.h = (e += Math.random() + 1).toString();
                if (g) {
                    g = r(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!la(g, d)) {
                var k = new b;
                ca(g, d, {
                    value: k
                })
            }
            if (!la(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.h] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && la(g, d) ? g[d][this.h] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && la(g, d) && la(g[d], this.h)
        };
        f.prototype.delete = function(g) {
            return c(g) && la(g, d) && la(g[d], this.h) ? delete g[d][this.h] : !1
        };
        return f
    }, "es6");
    q("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(r([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (u) {
                    return !1
                }
            }()) return a;
        var b = new m.WeakMap,
            c = function(h) {
                this.i = {};
                this.h = f();
                this.size = 0;
                if (h) {
                    h = r(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.s ? l.s.value = k : (l.s = {
                next: this.h,
                C: this.h.C,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.s), this.h.C.next = l.s, this.h.C = l.s, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.s && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.s.C.next = h.s.next, h.s.next.C = h.s.C, h.s.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.i = {};
            this.h = this.h.C = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).s
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).s) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[p(m.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.i[l];
                if (n && la(h.i, l))
                    for (h = 0; h < n.length; h++) {
                        var u = n[h];
                        if (k !== k && u.key !== u.key || k === u.key) return {
                            id: l,
                            list: n,
                            index: h,
                            s: u
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    s: void 0
                }
            },
            e = function(h, k) {
                var l = h.h;
                return ia(function() {
                    if (l) {
                        for (; l.head != h.h;) l = l.C;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.C = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var va = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[p(m.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    q("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(r([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.h = new m.Map;
            if (c) {
                c = r(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return p(this.h, "values").call(this.h)
        };
        b.prototype.keys = p(b.prototype, "values");
        b.prototype[p(m.Symbol, "iterator")] = p(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var wa = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = wa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    q("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? p(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || p(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== wa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var w = this || self,
        xa = function(a) {
            a = a.split(".");
            for (var b = w, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Aa = function(a) {
            return Object.prototype.hasOwnProperty.call(a, ya) && a[ya] || (a[ya] = ++za)
        },
        ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        za = 0,
        Ba = function(a, b) {
            a = a.split(".");
            var c = w;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var Ca = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ka = function(a) {
            if (!Da.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ia, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ja, "&#0;"));
            return a
        },
        Ea = /&/g,
        Fa = /</g,
        Ga = />/g,
        Ha = /"/g,
        Ia = /'/g,
        Ja = /\x00/g,
        Da = /[\x00&<>"']/,
        Ma = function(a, b) {
            var c = 0;
            a = Ca(String(a)).split(".");
            b = Ca(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        La = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };

    function Na() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Oa(a) {
        return -1 != Na().indexOf(a)
    };
    var Pa = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Qa = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Ra = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Sa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ua(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Va(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Wa = function(a) {
        Wa[" "](a);
        return a
    };
    Wa[" "] = function() {};
    var Xa = {},
        Ya = null,
        $a = function(a) {
            var b;
            void 0 === b && (b = 0);
            Za();
            b = Xa[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        bb = function(a) {
            var b = [];
            ab(a, function(c) {
                b.push(c)
            });
            return b
        },
        ab = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Ya[l];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Za();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Za = function() {
            if (!Ya) {
                Ya = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Xa[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Ya[f] && (Ya[f] = e)
                    }
                }
            }
        };
    var cb = "undefined" !== typeof Uint8Array,
        db = {};
    var eb, fb = function(a) {
        if (db !== db) throw Error("illegal external caller");
        this.T = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    };
    fb.prototype.isEmpty = function() {
        return null == this.T
    };
    var y = "function" === typeof m.Symbol && "symbol" === typeof(0, m.Symbol)() ? (0, m.Symbol)() : void 0;

    function z(a, b) {
        if (y) return a[y] |= b;
        if (void 0 !== a.A) return a.A |= b;
        Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function gb(a, b) {
        y ? a[y] && (a[y] &= ~b) : void 0 !== a.A && (a.A &= ~b)
    }

    function A(a) {
        var b;
        y ? b = a[y] : b = a.A;
        return null == b ? 0 : b
    }

    function hb(a, b) {
        y ? a[y] = b : void 0 !== a.A ? a.A = b : Object.defineProperties(a, {
            A: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function ib(a) {
        z(a, 1);
        return a
    }

    function B(a) {
        return !!(A(a) & 2)
    }

    function jb(a) {
        z(a, 16);
        return a
    }

    function kb(a, b) {
        hb(b, (a | 0) & -51)
    }

    function lb(a, b) {
        hb(b, (a | 18) & -41)
    }

    function mb(a, b) {
        var c = A(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), hb(a, c | b));
        return a
    };
    var nb = {};

    function ob(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var pb, qb, rb = [];
    hb(rb, 23);
    qb = Object.freeze(rb);
    var sb = function(a) {
        if (B(a.l)) throw Error("Cannot mutate an immutable Message");
    };

    function tb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && ob(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    var ub;

    function vb(a, b) {
        ub = b;
        a = new a(b);
        ub = void 0;
        return a
    };

    function wb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (A(a) & 128)) return a = Array.prototype.slice.call(a), tb(a), a
                    } else {
                        if (cb && null != a && a instanceof Uint8Array) return $a(a);
                        if (a instanceof fb) {
                            var b = a.T;
                            return null == b ? "" : "string" === typeof b ? b : a.T = $a(b)
                        }
                    }
        }
        return a
    };

    function xb(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = yb(a, b, c, void 0 !== d);
            else if (ob(a)) {
                var e = {},
                    f;
                for (f in a) Object.prototype.hasOwnProperty.call(a, f) && (e[f] = xb(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function yb(a, b, c, d) {
        var e = A(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = xb(a[f], b, c, d);
        c(e, a);
        return a
    }

    function zb(a) {
        return a.R === nb ? a.toJSON() : wb(a)
    }

    function Cb(a, b) {
        a & 128 && tb(b)
    };
    var Db = function(a) {
            return a.h || (a.h = a.l[a.i + a.F] = {})
        },
        C = function(a, b, c) {
            return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.l[b + a.F]
        },
        F = function(a, b, c, d) {
            sb(a);
            return D(a, b, c, d)
        };

    function D(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return Db(a)[b] = c, a;
        a.l[b + a.F] = c;
        (c = a.h) && b in c && delete c[b];
        return a
    }

    function Eb(a, b, c, d, e) {
        var f = C(a, b, d);
        Array.isArray(f) || (f = qb);
        var g = A(f);
        g & 1 || ib(f);
        if (e) g & 2 || z(f, 2), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && gb(f, 16) : (f = ib(Array.prototype.slice.call(f)), D(a, b, f, d))
        }
        return f
    }

    function Fb(a, b) {
        var c = B(a.l),
            d = Eb(a, b, 1, !1, c),
            e = A(d);
        if (!(e & 4)) {
            Object.isFrozen(d) && (d = ib(d.slice()), D(a, b, d, !1));
            for (var f = 0, g = 0; f < d.length; f++) {
                var h = d[f];
                null != h && (d[g++] = h)
            }
            g < f && (d.length = g);
            z(d, 5);
            c && (z(d, 2), Object.freeze(d))
        }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), z(d, 5), Gb(a, b, d, !1));
        return d
    }
    var G = function(a, b) {
            a = C(a, b);
            return null == a ? 0 : a
        },
        Gb = function(a, b, c, d) {
            c = null == c ? qb : mb(c, 1);
            return F(a, b, c, d)
        },
        Hb = function(a, b, c) {
            if (null == c) c = qb;
            else {
                for (var d = 0; d < c.length; d++);
                c = mb(c, 5)
            }
            F(a, b, c)
        };

    function H(a, b, c, d) {
        sb(a);
        c !== d ? D(a, b, c) : D(a, b, void 0, !1);
        return a
    }
    var Jb = function(a, b, c, d) {
            sb(a);
            (c = Ib(a, c)) && c !== b && null != d && D(a, c, void 0, !1);
            return D(a, b, d)
        },
        J = function(a, b, c) {
            return Ib(a, b) === c ? c : -1
        },
        Ib = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != C(a, e) && (0 !== c && D(a, c, void 0, !1), c = e)
            }
            return c
        },
        Kb = function(a, b, c, d) {
            var e = C(a, c, d);
            var f = !1;
            var g = null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.R !== nb ? f ? new b(e) : void 0 : e;
            g !== e && null != g && (D(a, c, g, d), z(g.l, A(a.l) & -33));
            return g
        },
        K = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Kb(a, b, c, d);
            if (null == b) return b;
            if (!B(a.l)) {
                var e = Lb(b);
                e !== b && (b = e, D(a, c, b, d))
            }
            return b
        },
        L = function(a, b, c) {
            var d = B(a.l);
            a.u || (a.u = {});
            var e = a.u[c];
            var f = Eb(a, c, 3, void 0, d);
            if (e) d || (Object.isFrozen(e) ? d || (e = Array.prototype.slice.call(e), a.u[c] = e) : d && Object.freeze(e));
            else {
                e = [];
                var g = !!(A(a.l) & 16),
                    h = B(f);
                !d && h && (f = ib(Array.prototype.slice.call(f)), D(a, c, f));
                for (var k = h, l = 0; l < f.length; l++) {
                    var n = f[l];
                    var u = b;
                    var x = g,
                        I = !1;
                    I = void 0 === I ? !1 : I;
                    x = void 0 === x ? !1 : x;
                    u = Array.isArray(n) ? new u(x ? jb(n) : n) : I ? new u : void 0;
                    void 0 !== u && (k = k || B(n), e.push(u), h && z(u.l, 2))
                }
                a.u[c] = e;
                Object.isFrozen(f) || (b = A(f) | 33, hb(f, k ? b & -9 : b | 8));
                (d || d && h) && z(e, 2);
                (d || d) && Object.freeze(e)
            }
            a = Eb(a, c, 3, void 0, d);
            if (!d && a && !(A(a) & 8)) {
                for (d = 0; d < e.length; d++) c = e[d], f = Lb(c), c !== f && (e[d] = f, a[d] = e[d].l);
                z(a, 8)
            }
            return e
        },
        Mb = function(a, b, c) {
            sb(a);
            null == c && (c = void 0);
            return D(a, b, c)
        },
        Nb = function(a, b, c, d) {
            sb(a);
            null == d && (d = void 0);
            return Jb(a, b, c, d)
        },
        Ob = function(a, b, c, d) {
            sb(a);
            if (null != c) {
                var e = ib([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].l, f = f || B(e[g]);
                a.u || (a.u = {});
                a.u[b] = c;
                c = e;
                f ? gb(c, 8) : z(c, 8)
            } else a.u && (a.u[b] = void 0), e = qb;
            return D(a, b, e, d)
        };

    function M(a, b) {
        return null == a ? b : a
    }
    var Pb = function(a, b) {
            return M(C(a, b), "")
        },
        Qb = function(a, b) {
            a = C(a, b);
            return M(null == a ? a : !!a, !1)
        },
        Rb = function(a, b) {
            a = C(a, b);
            return M(null == a ? a : +a, 0)
        };

    function Sb(a) {
        var b = A(a);
        if (b & 2) return a;
        a = Ra(a, Tb);
        lb(b, a);
        Object.freeze(a);
        return a
    }

    function Ub(a, b, c) {
        c = void 0 === c ? lb : c;
        if (null != a) {
            if (cb && a instanceof Uint8Array) return a.length ? new fb(new Uint8Array(a)) : eb || (eb = new fb(null));
            if (Array.isArray(a)) {
                var d = A(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return hb(a, d | 2), a;
                a = yb(a, Ub, c, !0);
                b = A(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.R === nb ? Tb(a) : a
        }
    }

    function Tb(a) {
        if (B(a.l)) return a;
        a = Vb(a, !0);
        z(a.l, 2);
        return a
    }

    function Vb(a, b) {
        var c = a.l,
            d = jb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (A(c) & 128) && tb(d);
        b = b || B(a.l) ? lb : kb;
        d = vb(a.constructor, d);
        a.ja && (d.ja = a.ja.slice());
        e = !!(A(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && ob(g))
                for (var h in g) {
                    var k = +h;
                    if (p(Number, "isNaN").call(Number, k)) Db(d)[k] = g[k];
                    else {
                        var l = g[h],
                            n = a.u && a.u[k];
                        n ? Ob(d, k, Sb(n), !0) : F(d, k, Ub(l, e, b), !0)
                    }
                } else k = f - a.F, (l = a.u && a.u[k]) ? Ob(d, k, Sb(l), !1) : F(d, k, Ub(g, e, b), !1)
        }
        return d
    }

    function Lb(a) {
        if (!B(a.l)) return a;
        var b = Vb(a, !1);
        b.j = a;
        return b
    };
    var N = function(a, b, c) {
        null == a && (a = ub);
        ub = void 0;
        var d = this.constructor.h || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            hb(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = z(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var n = a[a.length - 1];
                        if (ob(n) && "g" in n) {
                            d = 0;
                            l |= 128;
                            delete n.g;
                            var u = !0,
                                x;
                            for (x in n) {
                                u = !1;
                                break
                            }
                            u && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && hb(a, l)
        }
        this.F = (f ? 0 : -1) - d;
        this.u = void 0;
        this.l = a;
        a: {
            f = this.l.length;d = f - 1;
            if (f && (f = this.l[d], ob(f))) {
                this.h = f;
                this.i = d - this.F;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.F), this.h = void 0) : this.i = Number.MAX_VALUE
        }
        if (!e && this.h && "g" in this.h) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.i;
            var I;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.F, (d = a[g]) ? Wb(d, b) : a[g] = qb) : (I || (I = Db(this)), (d = I[g]) ? Wb(d, b) : I[g] = qb)
        }
    };
    N.prototype.toJSON = function() {
        var a = this.l;
        return pb ? a : yb(a, zb, Cb)
    };

    function Wb(a, b) {
        if (Array.isArray(a)) {
            var c = A(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && hb(a, c | d)
        }
    }
    N.prototype.R = nb;

    function Xb(a, b) {
        return wb(b)
    };
    var Yb = void 0;

    function Zb() {
        var a = !O($b).h,
            b = Yb;
        Yb = void 0;
        if (!a) {
            if (b) throw Error(b());
            throw Error(String(a));
        }
    };
    var cc = function(a, b) {
        this.i = a === ac && b || "";
        this.j = bc
    };
    cc.prototype.H = !0;
    cc.prototype.h = function() {
        return this.i
    };
    var dc = function(a) {
            return a instanceof cc && a.constructor === cc && a.j === bc ? a.i : "type_error:Const"
        },
        P = function(a) {
            return new cc(ac, a)
        },
        bc = {},
        ac = {};
    var ec = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var fc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function gc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var hc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Q = function(a, b) {
        this.i = b === ic ? a : ""
    };
    Q.prototype.toString = function() {
        return this.i + ""
    };
    Q.prototype.H = !0;
    Q.prototype.h = function() {
        return this.i.toString()
    };
    var mc = function(a, b) {
            a = jc.exec(kc(a).toString());
            var c = a[3] || "";
            return new Q(a[1] + lc("?", a[2] || "", b) + lc("#", c), ic)
        },
        kc = function(a) {
            return a instanceof Q && a.constructor === Q ? a.i : "type_error:TrustedResourceUrl"
        },
        jc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        nc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += dc(a[c]);
            return new Q(b, ic)
        },
        ic = {},
        lc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var R = function(a, b) {
        this.i = b === oc ? a : ""
    };
    R.prototype.toString = function() {
        return this.i.toString()
    };
    R.prototype.H = !0;
    R.prototype.h = function() {
        return this.i.toString()
    };
    var pc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        qc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        oc = {},
        rc = new R("about:invalid#zClosurez", oc);
    var sc = {},
        tc = function(a, b) {
            this.i = b === sc ? a : "";
            this.H = !0
        };
    tc.prototype.h = function() {
        return this.i.toString()
    };
    tc.prototype.toString = function() {
        return this.i.toString()
    };
    var uc = function(a) {
            return a instanceof tc && a.constructor === tc ? a.i : "type_error:SafeHtml"
        },
        vc = function(a) {
            return a instanceof tc ? a : new tc(Ka("object" == typeof a && a.H ? a.h() : String(a)), sc)
        },
        zc = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!wc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof cc) c = dc(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in xc)
                                    if (c instanceof Q) c = kc(c).toString();
                                    else if (c instanceof R) c = c instanceof R && c.constructor === R ? c.i : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof R || (c = "object" == typeof c && c.H ? c.h() : String(c), qc.test(c) ? c = new R(c, oc) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(pc) ? new R(c, oc) : null)), c = (c || rc).h();
                                else throw Error("");
                            }
                            c.H && (c = c.h());
                            g = g + '="' + Ka(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === hc.script ? k += ">" : (h = yc(h), k += ">" + uc(h).toString() + "\x3c/script>");
            return new tc(k, sc)
        },
        Bc = function(a) {
            var b = vc(Ac),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = vc(e), c.push(uc(e).toString()))
                };
            a.forEach(d);
            return new tc(c.join(uc(b).toString()), sc)
        },
        yc = function(a) {
            return Bc(Array.prototype.slice.call(arguments))
        },
        wc = /^[a-zA-Z0-9-]+$/,
        xc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Ac = new tc(w.trustedTypes && w.trustedTypes.emptyHTML || "", sc);
    var Dc = function() {
            a: {
                var a = w.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Cc.test(a)) break a;a = ""
            }
            return a
        },
        Cc = /^[\w+/_-]+[=]{0,2}$/;
    var Ec = function() {
        return Oa("iPad") || Oa("Android") && !Oa("Mobile") || Oa("Silk")
    };
    var Fc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Gc = function(a) {
            return a ? decodeURI(a) : a
        },
        Hc = /#|$/,
        Ic = function(a, b) {
            var c = a.search(Hc);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function Jc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Kc(a, b) {
        a.write(uc(b))
    };
    var Lc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Wa(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Mc = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? w : c;
            for (var d = 0; c && 40 > d++ && (!b && !Lc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Nc = function(a) {
            var b = a;
            Mc(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Rc = function(a, b) {
            if (!Oc() && !Pc()) {
                var c = Math.random();
                if (c < b) return c = Qc(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Qc = function() {
            if (!m.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                m.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Sc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Tc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Pc = ec(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Uc, void 0) || 1E-4 > Math.random()
        }),
        Oc = ec(function() {
            return Uc("MSIE")
        }),
        Uc = function(a) {
            return -1 != Na().indexOf(a)
        },
        Vc = /^(-?[0-9.]{1,30})$/;

    function Wc(a) {
        if (!Vc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Xc = ec(function() {
            return !Ec() && (Oa("iPod") || Oa("iPhone") || Oa("Android") || Oa("IEMobile")) ? 2 : Ec() ? 1 : 0
        }),
        Yc = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52)),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Zc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function $c(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return new Q(a[0], ic);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new Q(c.join(""), ic)
    };
    var ad = {
        Ha: 0,
        Ga: 1,
        Da: 2,
        ya: 3,
        Ea: 4,
        za: 5,
        Fa: 6,
        Ba: 7,
        Ca: 8,
        xa: 9,
        Aa: 10
    };
    var bd = {
        Ja: 0,
        Ka: 1,
        Ia: 2
    };
    var cd = "a".charCodeAt(),
        dd = gc(ad),
        ed = gc(bd);
    var fd = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.i = a;
            this.h = 0
        },
        id = function(a) {
            var b = S(a, 16);
            return !0 === !!S(a, 1) ? (a = gd(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : hd(a, b)
        },
        gd = function(a) {
            for (var b = S(a, 12), c = []; b--;) {
                var d = !0 === !!S(a, 1),
                    e = S(a, 16);
                if (d)
                    for (d = S(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        hd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (S(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        S = function(a, b) {
            if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.i.substring(a.h, a.h + b);
            a.h += b;
            return parseInt(c, 2)
        };
    var kd = function(a, b) {
            try {
                var c = bb(a.split(".")[0]).map(function(e) {
                        return (aa = e.toString(2), p(aa, "padStart")).call(aa, 8, "0")
                    }).join(""),
                    d = new fd(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.h += 78;
                c.cmpId = S(d, 12);
                c.cmpVersion = S(d, 12);
                d.h += 30;
                c.tcfPolicyVersion = S(d, 6);
                c.isServiceSpecific = !!S(d, 1);
                c.useNonStandardStacks = !!S(d, 1);
                c.specialFeatureOptins = jd(hd(d, 12, ed), ed);
                c.purpose = {
                    consents: jd(hd(d, 24, dd), dd),
                    legitimateInterests: jd(hd(d, 24, dd), dd)
                };
                c.purposeOneTreatment = !!S(d, 1);
                c.publisherCC = String.fromCharCode(cd + S(d, 6)) + String.fromCharCode(cd + S(d, 6));
                c.vendor = {
                    consents: jd(id(d), b),
                    legitimateInterests: jd(id(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        jd = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = r(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function ld(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ma] = b.message.toJSON(), c)]
        })])
    };
    var md = function(a, b) {
        if (m.globalThis.fetch) m.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var od = function(a) {
        N.call(this, a, -1, nd)
    };
    v(od, N);
    var pd = function(a, b) {
            return Mb(a, 1, b)
        },
        qd = function(a, b) {
            return Ob(a, 2, b)
        },
        rd = function(a, b) {
            return Gb(a, 4, b)
        },
        sd = function(a, b) {
            return Ob(a, 5, b)
        },
        td = function(a, b) {
            return H(a, 6, b, 0)
        },
        ud = function(a) {
            N.call(this, a)
        };
    v(ud, N);
    ud.prototype.G = function() {
        return G(this, 1)
    };
    var vd = function(a, b) {
            return H(a, 1, b, 0)
        },
        wd = function(a, b) {
            return H(a, 2, b, 0)
        },
        xd = function(a) {
            N.call(this, a)
        };
    v(xd, N);
    var nd = [2, 4, 5],
        yd = [1, 2];
    var Ad = function(a) {
        N.call(this, a, -1, zd)
    };
    v(Ad, N);
    var Cd = function(a) {
        N.call(this, a, -1, Bd)
    };
    v(Cd, N);
    var zd = [2, 3],
        Bd = [5],
        Dd = [1, 2, 3, 4];
    var Ed = function(a) {
        N.call(this, a)
    };
    v(Ed, N);
    Ed.prototype.getTagSessionCorrelator = function() {
        return M(C(this, 2), 0)
    };
    var Gd = function(a) {
            var b = new Ed;
            return Nb(b, 4, Fd, a)
        },
        Fd = [4, 5, 7];
    var Id = function(a) {
        N.call(this, a, -1, Hd)
    };
    v(Id, N);
    var Hd = [3];
    var Kd = function(a) {
        N.call(this, a, -1, Jd)
    };
    v(Kd, N);
    var Jd = [4];
    var Md = function(a) {
        N.call(this, a, -1, Ld)
    };
    v(Md, N);
    Md.prototype.getTagSessionCorrelator = function() {
        return M(C(this, 1), 0)
    };
    var Ld = [2];
    var Nd = function(a) {
        N.call(this, a)
    };
    v(Nd, N);
    var Od = [4];

    function Pd(a) {
        a.la.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                ma: 2,
                message: b
            }
        })))
    }

    function Qd(a) {
        a.la.apply(a, t(ua.apply(1, arguments).map(function(b) {
            return {
                ma: 4,
                message: b
            }
        })))
    };
    var Rd = function(a, b, c, d, e) {
            this.B = a;
            this.o = b;
            this.D = c;
            this.j = d;
            this.m = e;
            this.h = [];
            this.i = null
        },
        Sd = function(a) {
            null !== a.i && (clearTimeout(a.i), a.i = null);
            if (a.h.length) {
                var b = ld(a.h);
                a.o(a.B + "?e=1", b);
                a.h = []
            }
        };
    Rd.prototype.la = function() {
        var a = ua.apply(0, arguments),
            b = this;
        this.m && 65536 <= ld(this.h.concat(a)).length && Sd(this);
        this.h.push.apply(this.h, t(a));
        this.h.length >= this.j && Sd(this);
        this.h.length && null === this.i && (this.i = setTimeout(function() {
            Sd(b)
        }, this.D))
    };
    var Td = function(a, b, c) {
        Rd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", md, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!m.globalThis.fetch)
    };
    v(Td, Rd);
    var Ud = function(a) {
            this.h = a;
            this.defaultValue = !1
        },
        Vd = function(a) {
            this.h = a;
            this.defaultValue = 0
        };
    var Wd = new Ud(427549339),
        Xd = new Vd(428094087),
        Yd = new Vd(24),
        Zd = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.h = a;
            this.defaultValue = b
        }(1934, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]),
        $d = new Ud(203);
    var ae = function(a) {
        this.key = a;
        this.defaultValue = !1;
        this.valueType = "boolean"
    };
    var be = function() {
            this.h = {}
        },
        ee = function(a) {
            ce || (ce = new de);
            var b = ce.h[a.key];
            if ("proto" === a.valueType) {
                try {
                    var c = JSON.parse(b);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return a.defaultValue
            }
            return typeof b === typeof a.defaultValue ? b : a.defaultValue
        };
    var fe = function(a) {
        N.call(this, a)
    };
    v(fe, N);
    var ge = function(a) {
        N.call(this, a)
    };
    v(ge, N);
    var he = function(a) {
        N.call(this, a)
    };
    v(he, N);
    var ie = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25, 26];
    var je = function() {
        this.j = this.j;
        this.m = this.m
    };
    je.prototype.j = !1;
    je.prototype.I = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };
    var ke = function() {};
    var me = function(a) {
        N.call(this, a, -1, le)
    };
    v(me, N);
    var ne = function(a) {
        N.call(this, a)
    };
    v(ne, N);
    var oe = function(a) {
        N.call(this, a)
    };
    v(oe, N);
    var le = [7];
    var pe = function(a) {
        this.h = a || {
            cookie: ""
        }
    };
    pe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Oa;
            d = c.Pa || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ta
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    pe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ca(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    pe.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    pe.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            ta: 0,
            path: void 0,
            domain: void 0
        })
    };
    var qe = new ae("45368529"),
        re = new ae("45369554");
    var de = function() {
            this.h = {};
            var a = w.__fcexpdef || "";
            try {
                var b = JSON.parse(a)[0];
                a = "";
                for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                this.h = JSON.parse(a)
            } catch (d) {}
        },
        ce;
    v(de, be);

    function se(a) {
        return (a = te(a)) ? K(a, ne, 4) : null
    }

    function te(a) {
        if (a = (new pe(a)).get("FCCDCF", ""))
            if (ee(qe))
                if (p(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (e) {
                    ue(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            if (b)
                if (null == b || "" == b) var c = new me;
                else {
                    var d = JSON.parse(b);
                    if (!Array.isArray(d)) throw Error(void 0);
                    c = vb(me, jb(d))
                }
            else c = null;
            return c
        } catch (e) {
            return ue(2), null
        }
    }

    function ue(a) {
        new ke;
        var b = new ge;
        a = F(b, 7, a);
        b = new fe;
        a = Mb(b, 1, a);
        b = new he;
        Nb(b, 22, ie, a);
        ee(re)
    };
    gc(ad).map(function(a) {
        return Number(a)
    });
    gc(bd).map(function(a) {
        return Number(a)
    });
    var ve = function(a) {
            this.h = a;
            this.i = null
        },
        xe = function(a) {
            a.__tcfapiPostMessageReady || we(new ve(a))
        },
        we = function(a) {
            a.i = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.h.addEventListener("message", a.i);
            a.h.__tcfapiPostMessageReady = !0
        };
    var ye = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = Zc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var ze = function(a) {
            this.h = a;
            this.i = a.document;
            this.o = (a = (a = te(this.i)) ? K(a, oe, 5) || null : null) ? C(a, 2) : null;
            this.j = (a = se(this.i)) && null != C(a, 1) ? C(a, 1) : null;
            this.m = (a = se(this.i)) && null != C(a, 2) ? C(a, 2) : null
        },
        Ce = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new ze(a), Ae(a), Be(a))
        },
        Ae = function(a) {
            !a.o || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", ye(a.h, "__uspapiLocator"), Ba("__uspapi", function() {
                return a.D.apply(a, t(ua.apply(0, arguments)))
            }))
        };
    ze.prototype.D = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.o
        }, !0)
    };
    var Be = function(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", ye(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ba("__tcfapi", function() {
            return a.B.apply(a, t(ua.apply(0, arguments)))
        }), xe(a.h))
    };
    ze.prototype.B = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(De(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(De(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var De = function(a, b, c) {
        if (!a.j) return null;
        b = kd(a.j, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var Ee = function(a) {
        return "string" === typeof a
    };
    var Fe = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Ge = null,
        He = function() {
            if (null === Ge) {
                Ge = "";
                try {
                    var a = "";
                    try {
                        a = w.top.location.hash
                    } catch (c) {
                        a = w.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Ge = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Ge
        };
    var Je = function(a) {
        N.call(this, a, -1, Ie)
    };
    v(Je, N);
    var Ie = [2, 8],
        Ke = [3, 4, 5],
        Le = [6, 7];
    var Me;
    Me = {
        La: 0,
        na: 3,
        oa: 4,
        pa: 5
    };
    var Ne = Me.na,
        T = Me.oa,
        Oe = Me.pa,
        Pe = function(a) {
            return null != a ? !a : a
        },
        Qe = function(a, b) {
            for (var c = !1, d = 0; d < a.length; d++) {
                var e = a[d]();
                if (e === b) return e;
                null == e && (c = !0)
            }
            if (!c) return !b
        },
        Se = function(a, b) {
            var c = L(a, Je, 2);
            if (!c.length) return Re(a, b);
            a = G(a, 1);
            if (1 === a) return Pe(Se(c[0], b));
            c = Ra(c, function(d) {
                return function() {
                    return Se(d, b)
                }
            });
            switch (a) {
                case 2:
                    return Qe(c, !1);
                case 3:
                    return Qe(c, !0)
            }
        },
        Re = function(a, b) {
            var c = Ib(a, Ke);
            a: {
                switch (c) {
                    case Ne:
                        var d = G(a, J(a, Ke, 3));
                        break a;
                    case T:
                        d = G(a, J(a, Ke, 4));
                        break a;
                    case Oe:
                        d = G(a, J(a, Ke, 5));
                        break a
                }
                d = void 0
            }
            if (d && (b = (b = b[c]) && b[d])) {
                try {
                    var e = b.apply(null, t(Fb(a, 8)))
                } catch (f) {
                    return
                }
                b = G(a, 1);
                if (4 === b) return !!e;
                d = null != e;
                if (5 === b) return d;
                if (12 === b) a = Pb(a, J(a, Le, 7));
                else a: {
                    switch (c) {
                        case T:
                            a = Rb(a, J(a, Le, 6));
                            break a;
                        case Oe:
                            a = Pb(a, J(a, Le, 7));
                            break a
                    }
                    a = void 0
                }
                if (null != a) {
                    if (6 === b) return e === a;
                    if (9 === b) return null != e && 0 === Ma(String(e), a);
                    if (d) switch (b) {
                        case 7:
                            return e < a;
                        case 8:
                            return e > a;
                        case 12:
                            return Ee(a) && Ee(e) && (new RegExp(a)).test(e);
                        case 10:
                            return null != e && -1 === Ma(String(e), a);
                        case 11:
                            return null != e && 1 === Ma(String(e), a)
                    }
                }
            }
        },
        Te = function(a, b) {
            return !a || !(!b || !Se(a, b))
        };
    var Ve = function(a) {
        N.call(this, a, -1, Ue)
    };
    v(Ve, N);
    var Ue = [4];
    var We = function(a) {
        N.call(this, a)
    };
    v(We, N);
    var Ye = function(a) {
        N.call(this, a, -1, Xe)
    };
    v(Ye, N);
    var Xe = [5],
        Ze = [1, 2, 3, 6, 7];
    var $e = function(a, b, c) {
            var d = void 0 === d ? new Td(b) : d;
            this.i = a;
            this.o = c;
            this.j = d;
            this.h = [];
            this.m = 0 < this.i && Qc() < 1 / this.i
        },
        bf = function(a, b, c, d, e, f) {
            var g = wd(vd(new ud, b), c);
            b = td(qd(pd(sd(rd(new od, d), e), g), a.h), f);
            b = Gd(b);
            a.m && Qd(a.j, af(a, b));
            if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                    return h.G() === g.G() && G(h, 2) === c
                })) a.h.push(g), 100 < a.h.length && a.h.shift()
        },
        cf = function(a, b, c, d) {
            if (a.o) {
                var e = new Ad;
                b = Ob(e, 2, b);
                c = Ob(b, 3, c);
                d && H(c, 1, d, 0);
                d = new Ed;
                d = Nb(d, 7, Fd, c);
                a.m && Qd(a.j, af(a, d))
            }
        },
        af = function(a, b) {
            b = H(b, 1, Date.now(), 0);
            var c = Yc(window);
            b = H(b, 2, c, 0);
            return H(b, 6, a.i, 0)
        };
    var O = function(a) {
        var b = "O";
        if (a.O && a.hasOwnProperty(b)) return a.O;
        b = new a;
        return a.O = b
    };
    var df = function() {
        var a = {};
        this.h = (a[Ne] = {}, a[T] = {}, a[Oe] = {}, a)
    };
    var ef = /^true$/.test("false"),
        ff = function(a, b) {
            switch (b) {
                case 1:
                    return G(a, J(a, Ze, 1));
                case 2:
                    return G(a, J(a, Ze, 2));
                case 3:
                    return G(a, J(a, Ze, 3));
                case 6:
                    return G(a, J(a, Ze, 6));
                default:
                    return null
            }
        },
        gf = function(a, b) {
            if (!a) return null;
            switch (b) {
                case 1:
                    return Qb(a, 1);
                case 7:
                    return Pb(a, 3);
                case 2:
                    return Rb(a, 2);
                case 3:
                    return Pb(a, 3);
                case 6:
                    return Fb(a, 4);
                default:
                    return null
            }
        },
        hf = ec(function() {
            if (!ef) return {};
            try {
                var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
                if (a) return JSON.parse(a)
            } catch (b) {}
            return {}
        }),
        lf = function(a, b, c, d) {
            var e = d = void 0 === d ? 0 : d,
                f, g;
            O(U).j[e] = null != (g = null == (f = O(U).j[e]) ? void 0 : f.add(b)) ? g : (new m.Set).add(b);
            e = hf();
            if (null != e[b]) return e[b];
            b = jf(d)[b];
            if (!b) return c;
            b = new Ye(b);
            b = kf(b);
            a = gf(b, a);
            return null != a ? a : c
        },
        kf = function(a) {
            var b = O(df).h;
            if (b) {
                var c = Ua(L(a, We, 5), function(d) {
                    return Te(K(d, Je, 1), b)
                });
                if (c) return K(c, Ve, 2)
            }
            return K(a, Ve, 4)
        },
        U = function() {
            this.i = {};
            this.m = [];
            this.j = {};
            this.h = new m.Map
        },
        mf = function(a, b, c) {
            return !!lf(1, a, void 0 === b ? !1 : b, c)
        },
        nf = function(a, b, c) {
            b = void 0 === b ? 0 : b;
            a = Number(lf(2, a, b, c));
            return isNaN(a) ? b : a
        },
        of = function(a, b, c) {
            return lf(3, a, void 0 === b ? "" : b, c)
        },
        pf = function(a, b, c) {
            b = void 0 === b ? [] : b;
            return lf(6, a, b, c)
        },
        jf = function(a) {
            return O(U).i[a] || (O(U).i[a] = {})
        },
        qf = function(a, b) {
            var c = jf(b);
            Sc(a, function(d, e) {
                return c[e] = d
            })
        },
        rf = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            var f = [],
                g = [];
            Pa(b, function(h) {
                var k = jf(h);
                Pa(a, function(l) {
                    var n = Ib(l, Ze),
                        u = ff(l, n);
                    if (u) {
                        var x, I, Ab;
                        var Bb = null != (Ab = null == (x = O(U).h.get(h)) ? void 0 : null == (I = x.get(u)) ? void 0 : I.slice(0)) ? Ab : [];
                        a: {
                            x = new Cd;
                            switch (n) {
                                case 1:
                                    Jb(x, 1, Dd, u);
                                    break;
                                case 2:
                                    Jb(x, 2, Dd, u);
                                    break;
                                case 3:
                                    Jb(x, 3, Dd, u);
                                    break;
                                case 6:
                                    Jb(x, 4, Dd, u);
                                    break;
                                default:
                                    n = void 0;
                                    break a
                            }
                            Gb(x, 5, Bb);n = x
                        }
                        if (Bb = n) {
                            var Ta;
                            Bb = !(null == (Ta = O(U).j[h]) || !Ta.has(u))
                        }
                        Bb && f.push(n);
                        if (Ta = n) {
                            var ma;
                            Ta = !(null == (ma = O(U).h.get(h)) || !ma.has(u))
                        }
                        Ta && g.push(n);
                        e || (ma = O(U), ma.h.has(h) || ma.h.set(h, new m.Map), ma.h.get(h).has(u) || ma.h.get(h).set(u, []), d && ma.h.get(h).get(u).push(d));
                        k[u] = l.toJSON()
                    }
                })
            });
            (f.length || g.length) && cf(c, f, g, null != d ? d : void 0)
        },
        sf = function(a, b) {
            var c = jf(b);
            Pa(a, function(d) {
                var e = new Ye(d),
                    f = Ib(e, Ze);
                (e = ff(e, f)) && (c[e] || (c[e] = d))
            })
        },
        tf = function() {
            return Ra(p(Object, "keys").call(Object, O(U).i), function(a) {
                return Number(a)
            })
        },
        uf = function(a) {
            Va(O(U).m, a) || qf(jf(4), a)
        };
    var V = function(a) {
            this.methodName = a
        },
        vf = new V(1),
        wf = new V(16),
        xf = new V(15),
        yf = new V(2),
        zf = new V(3),
        Af = new V(4),
        Bf = new V(5),
        Cf = new V(6),
        Df = new V(7),
        Ef = new V(8),
        Ff = new V(9),
        Gf = new V(10),
        Hf = new V(11),
        If = new V(12),
        Jf = new V(13),
        Kf = new V(14),
        W = function(a, b, c) {
            c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
                value: b
            })
        },
        X = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        },
        Lf = function(a) {
            W(Bf, mf, a);
            W(Cf, nf, a);
            W(Df, of , a);
            W(Ef, pf, a);
            W(Jf, sf, a);
            W(xf, uf, a)
        },
        Mf = function(a) {
            W(Af, function(b) {
                O(df).h = b
            }, a);
            W(Ff, function(b, c) {
                var d = O(df);
                d.h[Ne][b] || (d.h[Ne][b] = c)
            }, a);
            W(Gf, function(b, c) {
                var d = O(df);
                d.h[T][b] || (d.h[T][b] = c)
            }, a);
            W(Hf, function(b, c) {
                var d = O(df);
                d.h[Oe][b] || (d.h[Oe][b] = c)
            }, a);
            W(Kf, function(b) {
                for (var c = O(df), d = r([Ne, T, Oe]), e = d.next(); !e.done; e = d.next()) e = e.value, p(Object, "assign").call(Object, c.h[e], b[e])
            }, a)
        },
        Nf = function(a) {
            a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
                value: !0
            })
        };
    var Of = function() {
            this.i = function() {};
            this.h = function() {
                return []
            }
        },
        Pf = function(a, b, c) {
            a.i = function(d) {
                X(yf, b, function() {
                    return []
                })(d, c)
            };
            a.h = function() {
                return X(zf, b, function() {
                    return []
                })(c)
            }
        };

    function Qf(a, b) {
        b = void 0 === b ? window.document : b;
        if (a.length && b.head) {
            a = r(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = Zc("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    var Rf = function(a, b) {
            try {
                var c = a.split(".");
                a = w;
                for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
                var f = a;
                if (typeof f === b) return f
            } catch (g) {}
        },
        Sf = function() {
            var a = {};
            this[Ne] = (a[8] = function(b) {
                try {
                    return null != xa(b)
                } catch (c) {}
            }, a[9] = function(b) {
                try {
                    var c = xa(b)
                } catch (d) {
                    return
                }
                if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
                return b
            }, a[10] = function() {
                return window == window.top
            }, a[6] = function(b) {
                return Va(O(Of).h(), parseInt(b, 10))
            }, a[27] = function(b) {
                b = Rf(b, "boolean");
                return void 0 !== b ? b : void 0
            }, a[60] = function(b) {
                try {
                    return !!w.document.querySelector(b)
                } catch (c) {}
            }, a[69] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.features(), p(aa, "includes")).call(aa, b))
            }, a[70] = function(b) {
                var c = w.document;
                c = void 0 === c ? document : c;
                var d;
                return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), p(aa, "includes")).call(aa, b))
            }, a);
            a = {};
            this[T] = (a[3] = function() {
                return Xc()
            }, a[6] = function(b) {
                b = Rf(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = Gc(w.location.href.match(Fc)[3] || null);
                b = c ? Tc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
            a = {};
            this[Oe] = (a[2] = function() {
                return window.location.href
            }, a[3] = function() {
                try {
                    return window.top.location.hash
                } catch (b) {
                    return ""
                }
            }, a[4] = function(b) {
                b = Rf(b, "string");
                return void 0 !== b ? b : void 0
            }, a[10] = function() {
                try {
                    var b = w.document;
                    return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
                } catch (c) {
                    return ""
                }
            }, a[11] = function() {
                try {
                    var b, c, d, e, f;
                    return null != (f = null == (d = null == (b = xa("google_tag_data")) ? void 0 : null == (c = b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = p(d, "find").call(d, function(g) {
                        return "Google Chrome" === g.brand
                    })) ? void 0 : e.version) ? f : ""
                } catch (g) {
                    return ""
                }
            }, a)
        };
    var Tf = function() {
        var a = void 0 === a ? w : a;
        return a.ggeac || (a.ggeac = {})
    };
    var Vf = function(a) {
        N.call(this, a, -1, Uf)
    };
    v(Vf, N);
    Vf.prototype.getId = function() {
        return M(C(this, 1), 0)
    };
    Vf.prototype.G = function() {
        return G(this, 7)
    };
    var Uf = [2];
    var Xf = function(a) {
        N.call(this, a, -1, Wf)
    };
    v(Xf, N);
    Xf.prototype.G = function() {
        return G(this, 5)
    };
    var Wf = [2];
    var Zf = function(a) {
        N.call(this, a, -1, Yf)
    };
    v(Zf, N);
    var ag = function(a) {
        N.call(this, a, -1, $f)
    };
    v(ag, N);
    ag.prototype.G = function() {
        return G(this, 1)
    };
    var bg = function(a) {
        N.call(this, a)
    };
    v(bg, N);
    var Yf = [1, 4, 2, 3],
        $f = [2];
    var cg = [12, 13, 20],
        dg = function() {},
        eg = function(a, b, c, d, e) {
            e = void 0 === e ? {} : e;
            var f = void 0 === e.ga ? !1 : e.ga,
                g = void 0 === e.ua ? {} : e.ua;
            e = void 0 === e.ka ? [] : e.ka;
            a.m = b;
            a.B = {};
            a.D = f;
            a.o = g;
            b = {};
            a.i = (b[c] = [], b[4] = [], b);
            a.j = {};
            (c = He()) && Pa(c.split(",") || [], function(h) {
                (h = parseInt(h, 10)) && (a.j[h] = !0)
            });
            Pa(e, function(h) {
                a.j[h] = !0
            });
            a.h = d;
            return a
        },
        ig = function(a, b, c) {
            var d = [],
                e = fg(a.m, b),
                f;
            if (f = 9 !== b) a.B[b] ? f = !0 : (a.B[b] = !0, f = !1);
            if (f) return bf(a.h, b, c, d, [], 4), d;
            if (!e.length) return bf(a.h, b, c, d, [], 3), d;
            var g = Va(cg, b),
                h = [];
            Pa(e, function(k) {
                var l = new xd;
                if (k = gg(a, k, c, l)) 0 !== Ib(l, yd) && h.push(l), l = k.getId(), d.push(l), hg(a, l, g ? 4 : c), (k = L(k, Ye, 2)) && (g ? rf(k, tf(), a.h, l) : rf(k, [c], a.h, l))
            });
            bf(a.h, b, c, d, h, 1);
            return d
        },
        hg = function(a, b, c) {
            a.i[c] || (a.i[c] = []);
            a = a.i[c];
            Va(a, b) || a.push(b)
        },
        jg = function(a, b) {
            a.m.push.apply(a.m, t(Qa(Ra(b, function(c) {
                return new ag(c)
            }), function(c) {
                return !Va(cg, c.G())
            })))
        },
        gg = function(a, b, c, d) {
            var e = O(df).h;
            if (!Te(K(b, Je, 3), e)) return null;
            var f = L(b, Vf, 2),
                g = G(b, 6);
            if (g) {
                Jb(d, 1, yd, g);
                f = e[T];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), H(d, 3, c, 0)
                } catch (k) {}
                return (b = kg(b, c)) ? lg(a, [b], 1) : null
            }
            if (g = G(b, 10)) {
                Jb(d, 2, yd, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[T][9];
                        break;
                    case 2:
                        h = e[T][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === G(b, 11)) return null;
                void 0 !== c && H(d, 3, c, 0);
                return (b = kg(b, c)) ? lg(a, [b], 1) : null
            }
            d = e ? Qa(f, function(k) {
                return Te(K(k, Je, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * M(C(b, 1), 0);
            return (b = G(b, 4)) ? mg(a, b, c, d) : lg(a, d, c / 1E3)
        },
        mg = function(a, b, c, d) {
            var e = null != a.o[b] ? a.o[b] : 1E3;
            if (0 >= e) return null;
            d = lg(a, d, c / e);
            a.o[b] = d ? 0 : e - c;
            return d
        },
        lg = function(a, b, c) {
            var d = a.j,
                e = Sa(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.D ? null : Rc(b, c)
        },
        ng = function(a, b) {
            W(vf, function(c) {
                a.j[c] = !0
            }, b);
            W(yf, function(c, d) {
                return ig(a, c, d)
            }, b);
            W(zf, function(c) {
                return (a.i[c] || []).concat(a.i[4])
            }, b);
            W(If, function(c) {
                return void jg(a, c)
            }, b);
            W(wf, function(c, d) {
                return void hg(a, c, d)
            }, b)
        },
        fg = function(a, b) {
            return (a = Sa(a, function(c) {
                return c.G() == b
            })) && L(a, Xf, 2) || []
        },
        kg = function(a, b) {
            var c = L(a, Vf, 2),
                d = c.length,
                e = M(C(a, 8), 0);
            a = d * M(C(a, 1), 0) - 1;
            b = void 0 !== b ? b : Math.floor(1E3 * Qc());
            d = (b - e) % d;
            if (b < e || b - e - d >= a) return null;
            c = c[d];
            e = O(df).h;
            return !c || e && !Te(K(c, Je, 3), e) ? null : c
        };
    var og = function() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.o = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    };
    var pg = function() {
            this.h = function() {}
        },
        qg = function(a) {
            O(pg).h(a)
        };
    var rg, sg, tg, ug, vg, wg, zg = function(a, b) {
            var c = {
                    ga: xg(211),
                    ka: xg(226)
                },
                d = void 0,
                e = 2;
            d = void 0 === d ? Tf() : d;
            e = void 0 === e ? 0 : e;
            var f = void 0 === f ? new $e(null != (ug = null == (rg = K(a, bg, 5)) ? void 0 : M(C(rg, 2), 0)) ? ug : 0, null != (vg = null == (sg = K(a, bg, 5)) ? void 0 : M(C(sg, 4), 0)) ? vg : 0, null != (wg = null == (tg = K(a, bg, 5)) ? void 0 : Qb(tg, 3)) ? wg : !1) : f;
            d.hasOwnProperty("init-done") ? (X(If, d)(Ra(L(a, ag, 2), function(g) {
                return g.toJSON()
            })), X(Jf, d)(Ra(L(a, Ye, 1), function(g) {
                return g.toJSON()
            }), e), b && X(Kf, d)(b), yg(e, d)) : (ng(eg(O(dg), L(a, ag, 2), e, f, c), d), Lf(d), Mf(d), Nf(d), yg(e, d), rf(L(a, Ye, 1), [e], f, void 0, !0), ef = ef || !(!c || !c.Ma), qg(O(Sf)), b && qg(b))
        },
        yg = function(a, b) {
            var c = b = void 0 === b ? Tf() : b;
            Pf(O(Of), c, a);
            Ag(b, a);
            a = b;
            O(pg).h = X(Kf, a);
            O(og).m()
        },
        Ag = function(a, b) {
            var c = O(og);
            c.h = function(d, e) {
                return X(Bf, a, function() {
                    return !1
                })(d, e, b)
            };
            c.i = function(d, e) {
                return X(Cf, a, function() {
                    return 0
                })(d, e, b)
            };
            c.o = function(d, e) {
                return X(Df, a, function() {
                    return ""
                })(d, e, b)
            };
            c.j = function(d, e) {
                return X(Ef, a, function() {
                    return []
                })(d, e, b)
            };
            c.m = function() {
                X(xf, a)(b)
            }
        };
    var Bg = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        Cg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? $c(Bg) : c;
            this.j = a;
            this.i = b;
            this.h = c
        };

    function Dg(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Zc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Array.prototype.indexOf.call(f, d, void 0);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1)
            };
            fc(d, "load", e);
            fc(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Fg = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
            Sc(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Eg(c, b)
        },
        Eg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Dg(c, a, void 0 === b ? !1 : b)
        };
    var Gg = P("gpt/pubads_impl_"),
        Hg = P("pagead/managed/js/gpt/");

    function Ig(a) {
        a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Jg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        Kg = function(a, b) {
            var c = Ig(b);
            c && Jg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        Lg = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = Ig(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && Jg(p(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (Ig() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        Mg = function(a, b) {
            return Lg(a, b, function(c, d) {
                var e = new Cg;
                var f = void 0 === f ? e.i : f;
                var g = void 0 === g ? e.j : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new Fe(d, {
                    context: c,
                    id: g
                })), w.google_js_errors = w.google_js_errors || [], w.google_js_errors.push(d), w.error_rep_loaded || (f = w.document, c = Zc("SCRIPT", f), c.src = kc(e.h), Jc(c), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), w.error_rep_loaded = !0))
            })
        };

    function Y(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Ng(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Og() {
        var a = new m.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = r(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Pg(a) {
        a = a.id;
        return null != a && (Og().has(a) || p(a, "startsWith").call(a, "google_ads_iframe_") || p(a, "startsWith").call(a, "aswift"))
    }

    function Qg(a, b, c) {
        if (!a.sources) return !1;
        switch (Rg(a)) {
            case 2:
                var d = Sg(a);
                if (d) return c.some(function(f) {
                    return Tg(d, f)
                });
            case 1:
                var e = Ug(a);
                if (e) return b.some(function(f) {
                    return Tg(e, f)
                })
        }
        return !1
    }

    function Rg(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Ug(a) {
        return Vg(a, function(b) {
            return b.currentRect
        })
    }

    function Sg(a) {
        return Vg(a, function(b) {
            return b.previousRect
        })
    }

    function Vg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }
    var Wg = function() {
        je.call(this);
        this.i = this.h = this.L = this.K = this.S = 0;
        this.ca = this.Z = Number.NEGATIVE_INFINITY;
        this.V = this.X = this.Y = this.aa = this.fa = this.B = this.ea = this.N = 0;
        this.W = !1;
        this.M = this.J = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.da = a ? a.getAttribute("data-google-query-id") : null;
        this.o = null;
        this.ba = !1;
        this.U = function() {}
    };
    v(Wg, je);
    var Zg = function() {
            var a = new Wg;
            if (O(og).h($d.h, $d.defaultValue)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = r(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, Xg(a).observe({
                        type: c,
                        buffered: !0
                    });
                    Yg(a)
                }
            }
        },
        Xg = function(a) {
            a.o || (a.o = new PerformanceObserver(Mg(640, function(b) {
                var c = $g !== window.scrollX || ah !== window.scrollY ? [] : bh,
                    d = ch();
                b = r(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.S += Number(e.value);
                            Number(e.value) > f.K && (f.K = Number(e.value));
                            f.L += 1;
                            var g = Qg(e, c, d);
                            g && (f.B += e.value, f.aa++);
                            if (5E3 < e.startTime - f.Z || 1E3 < e.startTime - f.ca) f.Z = e.startTime, f.h = 0, f.i = 0;
                            f.ca = e.startTime;
                            f.h += e.value;
                            g && (f.i += e.value);
                            f.h > f.N && (f.N = f.h, f.fa = f.i, f.ea = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Y = Math.floor(e.renderTime || e.loadTime);
                        a.X = e.size;
                        break;
                    case "first-input":
                        a.V = Number((e.processingStart - e.startTime).toFixed(3));
                        a.W = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.D += e, a.J = Math.max(a.J, e), a.M += 1
                }
            })));
            return a.o
        },
        Yg = function(a) {
            var b = Mg(641, function() {
                    var d = document;
                    2 == (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && dh(a)
                }),
                c = Mg(641, function() {
                    return void dh(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("unload", c);
            a.U = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("unload", c);
                Xg(a).disconnect()
            }
        };
    Wg.prototype.I = function() {
        je.prototype.I.call(this);
        this.U()
    };
    var dh = function(a) {
            if (!a.ba) {
                a.ba = !0;
                Xg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += Ng("cls", a.S), b += Ng("mls", a.K), b += Y("nls", a.L), window.LayoutShiftAttribution && (b += Ng("cas", a.B), b += Y("nas", a.aa)), b += Ng("wls", a.N), b += Ng("tls", a.ea), window.LayoutShiftAttribution && (b += Ng("was", a.fa)));
                window.LargestContentfulPaint && (b += Y("lcp", a.Y), b += Y("lcps", a.X));
                window.PerformanceEventTiming && a.W && (b += Y("fid", a.V));
                window.PerformanceLongTaskTiming && (b += Y("cbt", a.D), b += Y("mbt", a.J), b += Y("nlt", a.M));
                for (var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Pg(e.value) && c++;
                b += Y("nif", c);
                c = window.google_unique_id;
                b += Y("ifi", "number" === typeof c ? c : 0);
                c = O(Of).h();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (w === w.top ? 1 : 0);
                b += a.da ? "&qqid=" + encodeURIComponent(a.da) : Y("pvsid", Yc(w));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.j || (a.j = !0, a.I())
            }
        },
        Tg = function(a, b) {
            var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
            a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
            return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
        },
        ch = function() {
            var a = [].concat(t(document.getElementsByTagName("iframe"))).filter(Pg),
                b = [].concat(t(Og())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            $g = window.scrollX;
            ah = window.scrollY;
            return bh = [].concat(t(a), t(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        $g = void 0,
        ah = void 0,
        bh = [];
    var fh = function(a) {
        N.call(this, a, -1, eh)
    };
    v(fh, N);
    var gh = function(a, b) {
            return F(a, 2, b)
        },
        hh = function(a, b) {
            return F(a, 3, b)
        },
        ih = function(a, b) {
            return F(a, 4, b)
        },
        jh = function(a, b) {
            return F(a, 5, b)
        },
        kh = function(a, b) {
            return F(a, 9, b)
        },
        lh = function(a, b) {
            return Ob(a, 10, b)
        },
        mh = function(a, b) {
            return F(a, 11, b)
        },
        nh = function(a, b) {
            return F(a, 1, b)
        },
        oh = function(a, b) {
            return F(a, 7, b)
        },
        ph = function(a) {
            N.call(this, a)
        };
    v(ph, N);
    ph.prototype.getVersion = function() {
        return Pb(this, 2)
    };
    var eh = [10, 6];
    var qh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function rh(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function sh(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function th(a) {
        if (!sh(a)) return null;
        var b = rh(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(qh).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function uh(a) {
        var b;
        return mh(lh(jh(gh(nh(ih(oh(kh(hh(new fh, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new ph;
            d = F(d, 1, c.brand);
            return F(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function vh(a) {
        var b, c;
        return null != (c = null == (b = th(a)) ? void 0 : b.then(function(d) {
            return uh(d)
        })) ? c : null
    };
    var Z = {},
        wh = (Z[23] = .001, Z[211] = !1, Z[253] = !1, Z[246] = [], Z[226] = [], Z[150] = ".google.com.et", Z[221] = /^true$/.test(""), Z[36] = /^true$/.test("false"), Z[172] = null, Z[260] = void 0, Z[251] = null, Z),
        $b = function() {
            this.h = !1
        };

    function xg(a) {
        O($b).h = !0;
        return wh[a]
    }

    function xh(a, b) {
        O($b).h = !0;
        wh[a] = b
    };
    var yh = new m.WeakMap,
        zh = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var Ah = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/,
        Bh = function(a, b) {
            b = void 0 === b ? zh : b;
            var c = Aa(a),
                d = function(e) {
                    e = r(e);
                    e.next();
                    e = ka(e);
                    return b(c, e)
                };
            return function() {
                var e = ua.apply(0, arguments),
                    f = this || w,
                    g = yh.get(f);
                g || (g = {}, yh.set(f, g));
                f = g;
                g = [this].concat(t(e));
                e = d ? d(g) : g;
                if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
                else {
                    var h = r(g);
                    g = h.next().value;
                    h = ka(h);
                    g = a.apply(g, h);
                    f = f[e] = g
                }
                return f
            }
        }(function(a) {
            return (null == a ? 0 : a.src) ? Ah.test(a.src) ? 0 : 1 : 2
        }, function(a, b) {
            var c;
            return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
        });

    function Ch() {
        return 0 === Bh(xg(172))
    };

    function Dh(a, b) {
        var c = {},
            d = {},
            e = {};
        return e[Ne] = (c[3] = Ch, c[59] = function() {
            var f = ua.apply(0, arguments),
                g = p(f, "includes"),
                h = String,
                k;
            var l = void 0 === l ? window : l;
            var n;
            l = null != (n = null == (k = Gc(l.location.href.match(Fc)[3] || null)) ? void 0 : k.split(".")) ? n : [];
            k = 2 > l.length ? null : "uk" === l[l.length - 1] ? 3 > l.length ? null : Tc(l.splice(l.length - 3).join(".")) : Tc(l.splice(l.length - 2).join("."));
            return g.call(f, h(k))
        }, c[61] = function() {
            return xg(221)
        }, c[63] = function() {
            return xg(221) || ".google.ch" === xg(150)
        }, c[50] = function() {
            return 1 === Math.floor((new Date).getTime() / 24 / 60 / 60 / 1E3) % 2
        }, c), e[T] = (d[1] = function() {
            var f;
            return null != (f = Wc("{{MOD}}")) ? f : -1
        }, d[4] = function() {
            return Wc("1") || 0
        }, d[12] = function() {
            if (a) {
                var f = RegExp("[?&]gmeid=([^&]*)").exec(a.src);
                var g;
                f = f ? null != (g = Wc(f[1])) ? g : -1 : -1
            } else f = -1;
            return f
        }, d[13] = function() {
            return b
        }, d), e
    };

    function Eh(a, b, c) {
        var d = new Zf(xg(246));
        if (!L(d, Ye, 1).length && L(a, Ye, 1).length) {
            var e = L(a, Ye, 1);
            Ob(d, 1, e)
        }!L(d, ag, 2).length && L(a, ag, 2).length && (e = L(a, ag, 2), Ob(d, 2, e));
        void 0 === Kb(d, bg, 5, !1) && void 0 !== Kb(a, bg, 5, !1) && (a = K(a, bg, 5), Mb(d, 5, a));
        zg(d, Dh(b, c))
    };
    var Fh = function(a) {
        N.call(this, a)
    };
    v(Fh, N);
    var Hh = function() {
            return [].concat(t(p(Gh, "values").call(Gh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        Gh = new m.Map;

    function Ih() {
        var a;
        return null != (a = w.googletag) ? a : w.googletag = {
            cmd: []
        }
    }

    function Jh(a, b) {
        var c = Ih();
        c.hasOwnProperty(a) || (c[a] = b)
    };

    function Kh() {
        var a = Lh,
            b = Ih(),
            c, d = null != (c = b.fifWin) ? c : window,
            e = d.document;
        c = b.fifWin ? window : d;
        var f = Mh(),
            g = new Fh;
        Zb();
        p(Object, "assign").call(Object, wh, b._vars_);
        b._vars_ = wh;
        g && (Qb(g, 3) && xh(36, !0), Qb(g, 5) && xh(221, !0), Pb(g, 6) && xh(150, Pb(g, 6)));
        xg(221);
        xg(150);
        Jh("_loaded_", !0);
        var h = Nh(f, g);
        Jh("getVersion", function() {
            return String(h.ra || h.ha)
        });
        Jh("cmd", []);
        var k = Oh(e),
            l;
        f = null != (l = Ph(e)) ? l : Qh(e);
        Rh(void 0 !== Kb(g, Zf, 1, !1) ? K(g, Zf, 1) : new Zf(a), d, f, M(C(g, 2), 0));
        try {
            Zg()
        } catch (Ab) {}
        Kg("1", d);
        a = Sh(h, f);
        if (!k) {
            d = "gpt-impl-" + Math.random();
            try {
                Kc(e, zc(a, {
                    id: d,
                    nonce: Dc()
                }))
            } catch (Ab) {}
            e.getElementById(d) && (b._loadStarted_ = !0)
        }
        if (!b._loadStarted_) {
            var n = Zc("SCRIPT");
            n.src = kc(a);
            Jc(n);
            n.async = !0;
            e = b.fifWin ? c.document : e;
            a = e.body;
            d = e.documentElement;
            var u, x, I = null != (x = null != (u = e.head) ? u : a) ? x : d;
            "complete" !== c.document.readyState && b.fifWin ? fc(c, "load", function() {
                return void I.appendChild(n)
            }) : I.appendChild(n);
            b._loadStarted_ = !0
        }
        c === c.top && Ce(c);
        Nc(c) === (Lc(c.top) ? c.top : null) && Th(c.top, f)
    }

    function Mh() {
        var a = Number("2022111501");
        1 > a || Math.floor(a) !== a ? (Fg({
            v: "2022111501"
        }), a = "1") : a = "2022111501";
        return {
            ha: a,
            P: "",
            va: new Td,
            wa: .01 > Qc(),
            qa: 100
        }
    }

    function Nh(a, b) {
        var c = P("2022111501");
        var d = a.P;
        /m\d+/.test(d) ? d = Number(d.substring(1)) : (d && Fg({
            mjsv: d
        }), d = void 0);
        return p(Object, "assign").call(Object, {}, a, {
            ia: c,
            ra: d,
            sa: P(""),
            Na: Yc(window),
            Qa: b
        })
    }

    function Ph(a) {
        return (a = a.currentScript) ? a : null
    }

    function Qh(a) {
        var b;
        a = r(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, p(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function Sh(a, b) {
        b = Uh(b) ? P("https://pagead2.googlesyndication.com/") : P("https://securepubads.g.doubleclick.net/");
        a = a.P ? nc([b, Hg, a.sa, P("/pubads_impl.js")]) : O(og).h(Wd.h, Wd.defaultValue) ? nc([b, Hg, P("m"), a.ia, P("/pubads_impl.js")]) : nc([b, Gg, a.ia, P(".js")]);
        b = {};
        var c = O(og).i(Yd.h, Yd.defaultValue),
            d = O(og).i(Xd.h, Xd.defaultValue);
        c && (b.cb = c);
        d && (b.mcb = d);
        return p(Object, "keys").call(Object, b).length ? mc(a, b) : a
    }

    function Rh(a, b, c, d) {
        xh(172, c);
        Eh(a, c, d);
        O(Of).i(12);
        O(Of).i(5);
        (a = vh(b)) && a.then(function(e) {
            a: {
                pb = !0;
                try {
                    var f = JSON.stringify(e.toJSON(), Xb);
                    break a
                } finally {
                    pb = !1
                }
                f = void 0
            }
            return void xh(251, f)
        });
        Qf(O(og).j(Zd.h, Zd.defaultValue), b.document)
    }

    function Oh(a) {
        var b = Ph(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }
    var Vh = function() {
        this.h = []
    };
    Vh.prototype.addListener = function(a) {
        void 0 !== this.i || this.error ? a(this.i, this.error) : this.h.push(a)
    };
    var Wh = function(a, b, c) {
        a.i = b;
        a.error = c;
        for (var d = r(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
        a.h.length = 0
    };

    function Th(a, b) {
        var c = new Vh;
        xh(260, function(e) {
            return void c.addListener(e)
        });
        if (a = Xh(a, b)) {
            var d = new m.globalThis.XMLHttpRequest;
            d.open("GET", a.toString(), !0);
            d.withCredentials = !1;
            d.onload = function() {
                300 > d.status ? (Kg("13", window), Wh(c, 204 === d.status ? "" : d.responseText)) : Wh(c, void 0, new m.globalThis.Error("resp:" + d.status))
            };
            d.onerror = function() {
                return void Wh(c, void 0, new m.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
            };
            d.send()
        } else Wh(c, void 0, new m.globalThis.Error("no provided or inferred data"))
    }

    function Xh(a, b) {
        if (!b) return null;
        a = a.location.host;
        var c = Ic(b.src, "domain"),
            d = Ic(b.src, "network-code");
        if (!a && !c && !d) return null;
        b = Uh(b) ? P("https://pagead2.googlesyndication.com") : P("https://securepubads.g.doubleclick.net");
        return mc(nc([b, P("/pagead/ppub_config")]), {
            ippd: a,
            pppd: c,
            pppnc: d
        })
    }

    function Uh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Gc(a.src.match(Fc)[3] || null)
    };
    var Lh;
    a: {
        try {
            if (Array.isArray(E)) {
                Lh = E;
                break a
            }
        } catch (a) {}
        Lh = []
    }
    try {
        Kh()
    } catch (a) {
        try {
            var Yh = Mh();
            if (Yh.wa) {
                var Zh, $h = a.error && a.meta && a.id ? a.error : a,
                    ai, bi = new Nd,
                    ci = new Md;
                try {
                    var di = Yc(window);
                    H(ci, 1, di, 0)
                } catch (b) {}
                try {
                    var ei = O(Of).h();
                    Gb(ci, 2, ei)
                } catch (b) {}
                try {
                    H(ci, 3, window.document.URL, "")
                } catch (b) {}
                ai = Mb(bi, 2, ci);
                var fi, gi = new Kd;
                fi = H(gi, 1, 420, 0);
                try {
                    var hi = Ee(null == $h ? void 0 : $h.name) ? $h.name : "Unknown error";
                    H(fi, 2, hi, "")
                } catch (b) {}
                try {
                    var ii = Ee(null == $h ? void 0 : $h.message) ? $h.message : "Caught " + $h;
                    H(fi, 3, ii, "")
                } catch (b) {}
                try {
                    var ji = Ee(null == $h ? void 0 : $h.stack) ? $h.stack : Error().stack;
                    ji && Hb(fi, 4, ji.split(/\n\s*/))
                } catch (b) {}
                Zh = Mb(ai, 1, fi);
                var ki = new Id;
                try {
                    H(ki, 1, Yh.P || Yh.ha, "")
                } catch (b) {}
                try {
                    var li = Hh();
                    H(ki, 2, li, 0)
                } catch (b) {}
                try {
                    var mi = [].concat(t(p(Gh, "keys").call(Gh)));
                    Hb(ki, 3, mi)
                } catch (b) {}
                Nb(Zh, 4, Od, ki);
                H(Zh, 5, Yh.qa, 0);
                Pd(Yh.va, Zh)
            }
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
    [
        [null, 472785970, null, [null, 500]],
        [447540098, null, null, [1]],
        [447540095, null, null, [1]],
        [447540096, null, null, [1]],
        [null, 7, null, [null, 0.1]],
        [null, 448338836, null, [null, 0.01]],
        [null, 408380992, null, [null, 0.01]],
        [null, 377289019, null, [null, 10000]],
        [null, 529, null, [null, 20]],
        [null, 447000223, null, [null, 0.01]],
        [360245597, null, null, [1]],
        [null, 494, null, [null, 10000]],
        [null, 471890184, null, [null, 0.01]],
        [null, 517, null, [null, 0.01]],
        [484638336, null, null, [1]],
        [484569411, null, null, [1]],
        [null, 492, null, [null, 0.01]],
        [464128744, null, null, [1]],
        [null, 45374287, null, [null, 1000]],
        [null, 398776877, null, [null, 60000]],
        [null, 374201269, null, [null, 60000]],
        [null, 371364213, null, [null, 60000]],
        [null, 376149757, null, [null, 0.0025]],
        [476447134, null, null, [1]],
        [377936516, null, null, [1]],
        [null, null, 2, [null, null, "1-0-40"]],
        [null, null, null, [], null, 489],
        [392065905, null, null, null, [
            [
                [4, null, 68],
                [1]
            ]
        ]],
        [null, 360245595, null, [null, 500]],
        [45383380, null, null, [1]],
        [467673112, null, null, [1]],
        [null, 397316938, null, [null, 1000]],
        [444587044, null, null, [1]],
        [440148284, null, null, [1]],
        [440148282, null, null, [1]],
        [480068022, null, null, null, [
            [
                [2, [
                    [12, null, null, null, 4, null, "Chrome\\/((?!10[0-6])\\d{3,})", ["navigator.userAgent"]],
                    [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]]
                ]],
                [1]
            ]
        ]],
        [null, 1921, null, [null, 72]],
        [null, 1920, null, [null, 12]],
        [null, 426169222, null, [null, 1000]],
        [null, 1917, null, [null, 300]],
        [null, 1916, null, [null, 0.001]],
        [null, null, null, [null, null, null, ["Az6AfRvI8mo7yiW5fLfj04W21t0ig6aMsGYpIqMTaX60H+b0DkO1uDr+7BrzMcimWzv/X7SXR8jI+uvbV0IJlwYAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A+USTya+tNvDPaxUgJooz+LaVk5hPoAxpLvSxjogX4Mk8awCTQ9iop6zJ9d5ldgU7WmHqBlnQB41LHHRFxoaBwoAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A7FovoGr67TUBYbnY+Z0IKoJbbmRmB8fCyirUGHavNDtD91CiGyHHSA2hDG9r9T3NjUKFi6egL3RbgTwhhcVDwUAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="]], null, 1934],
        [1947, null, null, [1]],
        [null, 1972, null, []],
        [null, 1142, null, [null, 8]],
        [null, 1195, null, [null, 1]],
        [null, 1119, null, [null, 300]],
        [null, 1193, null, [null, 100]],
        [null, 1114, null, [null, 1]],
        [null, 1116, null, [null, 300]],
        [null, 1117, null, [null, 100]],
        [null, 1110, null, [null, 5]],
        [null, 1111, null, [null, 5]],
        [null, 1112, null, [null, 5]],
        [null, 1113, null, [null, 5]],
        [null, 1115, null, [null, -1]],
        [null, 1194, null, [null, 1]],
        [null, 469675170, null, [null, 30000]],
        [479047366, null, null, [1]],
        [392736476, null, null, []],
        [null, null, null, [], null, 1932],
        [432938498, null, null, []],
        [485990406, null, null, []]
    ],
    [
        [2, [
            [10, [
                [44778408],
                [44778409, [
                    [null, null, null, [null, null, null, ["5"]], null, 466086960]
                ]]
            ], null, null, null, null, null, null, null, 102],
            [30, [
                [44778642],
                [44778643, [
                    [1122, null, null, [1]]
                ]]
            ], null, null, null, null, null, 601, null, 102],
            [10, [
                [31061165],
                [31061166, [
                    [null, 363650251, null, [null, 2]]
                ]],
                [31061167, [
                    [null, 363650251, null, [null, 1]]
                ]]
            ], null, null, null, null, null, 1, null, 102],
            [10, [
                [31069101]
            ]],
            [10, [
                [31069102],
                [31069103]
            ], null, null, null, null, null, null, null, 104],
            [10, [
                    [31070838],
                    [31070839, [
                        [501, null, null, [1]]
                    ]],
                    [31070840, [
                        [501, null, null, [1]]
                    ]],
                    [31070841, [
                        [501, null, null, [1]],
                        [484598396, null, null, [1]]
                    ]]
                ],
                [2, [
                    [4, null, 66],
                    [12, null, null, null, 4, null, "Chrome\\/((?!100|101|102|103|104|105)\\d{3,})", ["navigator.userAgent"]],
                    [1, [
                        [4, null, 8, null, null, null, null, ["navigator.serviceWorker.controller"]]
                    ]],
                    [4, null, 9, null, null, null, null, ["document.head.appendChild"]]
                ]], null, null, null, null, null, null, 114
            ],
            [1000, [
                    [31070991, null, [2, [
                        [2, [
                            [8, null, null, 1, null, 9],
                            [7, null, null, 1, null, 20]
                        ]],
                        [4, null, 3]
                    ]]],
                    [31070992, [
                            [null, null, null, [null, null, null, ["[\"424397508\",[[\"pubcid.org\",null,true]]]", "[\"23202586\",[[\"pubcid.org\",null,true]]]", "[\"170737076\",[[\"pubcid.org\",null,true]]]", "[\"24132379\",[[\"pubcid.org\",null,true]]]"]], null, 471270390]
                        ],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 19],
                                [7, null, null, 1, null, 30]
                            ]],
                            [4, null, 3]
                        ]]
                    ]
                ],
                [4, null, 15, null, null, null, null, ["424397508", "23202586", "170737076", "24132379"]]
            ],
            [10, [
                [44752585],
                [44752586, [
                    [392065905, null, null, [1]]
                ]]
            ], null, 41],
            [50, [
                    [44777628],
                    [44777629, [
                        [392065905, null, null, []]
                    ]]
                ],
                [4, null, 68], 41
            ]
        ]],
        [4, [
            [null, [
                [44714449, [
                    [null, 7, null, [null, 1]]
                ]],
                [676982961, [
                    [null, 7, null, [null, 0.4]],
                    [212, null, null, [1]]
                ]],
                [676982996, [
                    [null, 7, null, [null, 1]]
                ]]
            ]]
        ]],
        [3, [
            [null, [
                [676982960],
                [676982998]
            ]],
            [null, [
                [1337, [
                    [77, null, null, [1]],
                    [78, null, null, [1]],
                    [85, null, null, [1]],
                    [80, null, null, [1]],
                    [76, null, null, [1]],
                    [84, null, null, [1]],
                    [188, null, null, [1]]
                ]]
            ]],
            [10, [
                [21068766],
                [21068767, [
                    [null, 488, null, [null, 0.1]]
                ]]
            ], null, 42],
            [1000, [
                [31069125, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, -1],
                                [7, null, null, 1, null, 5]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 29],
                                [7, null, null, 1, null, 35]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 39],
                                [7, null, null, 1, null, 45]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ],
                [31069126, [
                        [null, 1921, null, [null, 24]],
                        [null, 1920, null, [null, 8]],
                        [437292966, null, null, [1]]
                    ],
                    [3, [
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 4],
                                [7, null, null, 1, null, 10]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 34],
                                [7, null, null, 1, null, 40]
                            ]],
                            [4, null, 3]
                        ]],
                        [2, [
                            [2, [
                                [8, null, null, 1, null, 44],
                                [7, null, null, 1, null, 50]
                            ]],
                            [4, null, 3]
                        ]]
                    ]]
                ]
            ], null, 67],
            [10, [
                [31069595],
                [31069596, [
                    [472976668, null, null, [1]]
                ]]
            ]],
            [10, [
                [31070116],
                [31070117]
            ]],
            [50, [
                    [31070230],
                    [31070231, [
                        [477812799, null, null, [1]]
                    ]]
                ],
                [4, null, 8, null, null, null, null, ["sharedStorage"]]
            ]
        ]],
        [5, [
            [50, [
                    [21062785, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]],
                    [21062786, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [900, [
                    [21062812, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["_gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 43
            ],
            [50, [
                    [21063916, null, [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]],
                    [21063917, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [900, [
                    [21064113, [
                            [23, null, null, [1]]
                        ],
                        [4, null, 8, null, null, null, null, ["webkit.messageHandlers._gmptnl"]]
                    ]
                ],
                [12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"], 44
            ],
            [10, [
                [31060437],
                [31060438, [
                    [200, null, null, [1]]
                ]],
                [31060439, [
                    [220, null, null, [1]]
                ]]
            ], null, 24],
            [50, [
                    [31067420],
                    [31067421, [
                        [360245597, null, null, []]
                    ]],
                    [31070553, [
                        [null, 434620574, null, [null, 300]]
                    ]],
                    [31070554, [
                        [null, 434620574, null, [null, 180]]
                    ]],
                    [31070555, [
                        [null, 434620574, null, [null, 300]],
                        [null, 461613513, null, [null, 0.25]]
                    ]],
                    [31070556, [
                        [null, 434620574, null, [null, 300]],
                        [474159377, null, null, [1]]
                    ]],
                    [44776073],
                    [44777420],
                    [44779108]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ],
            [10, [
                [31070872],
                [31070873, [
                    [485860314, null, null, [1]]
                ]]
            ]],
            [10, [
                [31070880],
                [31070881, [
                    [422917270, null, null, [1]]
                ]]
            ]],
            [1000, [
                [31070894, null, [6, null, null, 12, null, 31070894]],
                [31070895, null, [6, null, null, 12, null, 31070895]]
            ]],
            [10, [
                [31070919],
                [31070920, [
                    [478009624, null, null, [1]]
                ]]
            ]],
            [1, [
                [31070945],
                [31070946, [
                    [471855283, null, null, [1]]
                ]]
            ]],
            [10, [
                [31070983],
                [31070984, [
                    [486663050, null, null, [1]]
                ]]
            ]],
            [50, [
                [44761477],
                [44761478, [
                    [null, 427198696, null, [null, 1]]
                ]]
            ]],
            [10, [
                    [44776366],
                    [44776367],
                    [44779256]
                ],
                [3, [
                    [4, null, 8, null, null, null, null, ["gmaSdk.getQueryInfo"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],
                    [4, null, 8, null, null, null, null, ["webkit.messageHandlers.getGmaSig.postMessage"]]
                ]], 69
            ]
        ]],
        [25, [
            [10, [
                    [31064132],
                    [31064133, [
                        [null, 438663674, null, [null, 1]]
                    ]]
                ],
                [2, [
                    [4, null, 68],
                    [3, [
                        [6, null, null, null, 4, null, "2g", ["navigator.connection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.mozConnection.effectiveType"]],
                        [6, null, null, null, 4, null, "2g", ["navigator.webkitConnection.effectiveType"]]
                    ]]
                ]], 40
            ],
            [50, [
                [31068366],
                [31068367, [
                    [null, 455645877, null, [null, 0.1]]
                ]]
            ]],
            [10, [
                [31068825],
                [31068826, [
                    [null, 462420536, null, [null, 0.1]]
                ]]
            ]],
            [50, [
                [31070232],
                [31070233, [
                    [476475256, null, null, [1]]
                ]]
            ]],
            [1, [
                [44777085, null, [4, null, 68]],
                [44777086, [
                        [null, 438663674, null, [null, 1]]
                    ],
                    [4, null, 68]
                ],
                [44777087, [
                        [null, 438663674, null, [null, 500]]
                    ],
                    [4, null, 68]
                ],
                [44777088, [
                        [null, 438663674, null, [null, 1000]]
                    ],
                    [4, null, 68]
                ],
                [44777089, [
                        [null, 438663674, null, [null, 1500]]
                    ],
                    [4, null, 68]
                ],
                [44777090, [
                        [null, 438663674, null, [null, 2000]]
                    ],
                    [4, null, 68]
                ],
                [44777091, [
                        [null, 438663674, null, [null, 2500]]
                    ],
                    [4, null, 68]
                ],
                [44777092, [
                        [null, 438663674, null, [null, 3000]]
                    ],
                    [4, null, 68]
                ]
            ], null, 40]
        ]],
        [13, [
            [10, [
                [31065824],
                [31065825, [
                    [424117738, null, null, [1]]
                ]]
            ]],
            [500, [
                    [31061692],
                    [31061693, [
                        [77, null, null, [1]],
                        [78, null, null, [1]],
                        [85, null, null, [1]],
                        [80, null, null, [1]],
                        [76, null, null, [1]]
                    ]]
                ],
                [4, null, 6, null, null, null, null, ["31061691"]]
            ],
            [1000, [
                    [31067146, null, [4, null, 9, null, null, null, null, ["document.browsingTopics"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067147, null, [2, [
                        [4, null, 9, null, null, null, null, ["navigator.runAdAuction"]],
                        [4, null, 9, null, null, null, null, ["navigator.joinAdInterestGroup"]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067148, null, [4, null, 69, null, null, null, null, ["attribution-reporting"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067672, null, [2, [
                        [4, null, 69, null, null, null, null, ["browsing-topics"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["browsing-topics"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067673, null, [2, [
                        [4, null, 69, null, null, null, null, ["join-ad-interest-group"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["join-ad-interest-group"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067674, null, [2, [
                        [4, null, 69, null, null, null, null, ["run-ad-auction"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["run-ad-auction"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31067675, null, [2, [
                        [4, null, 69, null, null, null, null, ["attribution-reporting"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["attribution-reporting"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068556, null, [4, null, 8, null, null, null, null, ["sharedStorage"]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [1000, [
                    [31068557, null, [2, [
                        [4, null, 69, null, null, null, null, ["shared-storage"]],
                        [1, [
                            [4, null, 70, null, null, null, null, ["shared-storage"]]
                        ]]
                    ]]]
                ],
                [12, null, null, null, 4, null, "Chrome/((?!100)\\d{3,})", ["navigator.userAgent"]]
            ],
            [10, [
                    [31070380],
                    [31070381, [
                        [477209535, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["document.browsingTopics"]]
            ],
            [100, [
                    [31070383, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]],
                    [31070384, [
                            [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                            [439828594, null, null, [1]]
                        ],
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]
                    ]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [1, [
                    [31070594],
                    [31070595, [
                        [null, null, null, [null, null, null, ["A/6fvn8/Gtanoa1JImBxbvhuYBg6saTOvUwnxxrjfqYKVr6FhYuq735gNAS9yiA9eZCfxy6DNpj7b5RvVydt3AAAAACKeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+U9qN2zW5GTLxw8s2+dVNTkJno6E+N/ccDejxXyQWvhjPxM7ZW2kkup3QdRQA3PNcdJmf7fmSYjbhYI9IfoTwwAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A/nrjb/iPi/6otfK9jaRrKeitC60ZEvSBV2LdZ9fK9wYY6avQ4BArkhirmauwsEv8oXTREo3giK6JoHNOyETTwsAAACQeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQW5vbnltb3VzSWZyYW1lT3JpZ2luVHJpYWwiLCJleHBpcnkiOjE2NzU4MTQzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"]], null, 472572701],
                        [439828594, null, null, [1]],
                        [483962503, null, null, [1]]
                    ]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]], 70
            ],
            [null, [
                [44768158, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44768159, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776500, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776501, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]],
            [50, [
                [44776502, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]],
                [44776503, null, [4, null, 70, null, null, null, null, ["attribution-reporting"]]]
            ]]
        ]],
        [12, [
            [20, [
                    [21065724],
                    [21065725, [
                        [203, null, null, [1]]
                    ]]
                ],
                [4, null, 9, null, null, null, null, ["LayoutShift"]]
            ],
            [10, [
                [31061690],
                [31061691, [
                    [83, null, null, [1]],
                    [84, null, null, [1]]
                ]]
            ], null, 61],
            [50, [
                [31070949],
                [31070950, [
                    [1971, null, null, [1]]
                ]]
            ]],
            [10, [
                [44769661],
                [44769662, [
                    [1973, null, null, [1]]
                ]]
            ]]
        ]],
        [20, [
            [1000, [
                    [31070530, null, [4, null, 27, null, null, null, null, ["crossOriginIsolated"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070531, null, [2, [
                        [4, null, 27, null, null, null, null, ["crossOriginIsolated"]],
                        [4, null, 8, null, null, null, null, ["anonymouslyFramed"]]
                    ]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ],
            [1000, [
                    [31070532, null, [4, null, 9, null, null, null, null, ["SharedArrayBuffer"]]]
                ],
                [2, [
                    [6, null, null, 3, null, 0],
                    [12, null, null, null, 4, null, "Chrome/((?!10[012345])\\d{3,})", ["navigator.userAgent"]]
                ]]
            ]
        ]]
    ], null, null, [0.001, 1000, 1, 1000]
])