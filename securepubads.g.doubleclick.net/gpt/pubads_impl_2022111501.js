(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var q, ba, ea, fa, ha, ka, na, pa, sa, ma, ra, ta, ua, va, wa, xa, za, Aa, Ca, Da, Ea, Ia, Ha, Ja, Ka, Pa, Qa, Ta, Va, Xa, Za, bb, db, kb, nb, rb, ub, sb, xb, zb, Ab, Cb, Db, Eb, Fb, Gb, Hb, Jb, Kb, Lb, Mb, Nb, Qb, Rb, Sb, Tb, Vb, Wb, Yb, Zb, $b, ac, cc, dc, fc, hc, bc, ec, kc, oc, qc, pc, tc, rc, vc, uc, sc, zc, Bc, Dc, Ec, Gc, Jc, Kc, Nc, Oc, Mc, Pc, Rc, Sc, Uc, Zc, ad, Wc, ed, hd, bd, cd, ld, md, nd, od, jd, kd, pd, td, ud, wd, xd, yd, zd, Bd, Gd, Hd, C, Jd, Kd, Md, Nd, Od, Qd, Rd, Td, Vd, ie, be, ke, ne, pe, te, ue, Ae, He, De, Me, Ne, We, Se, Re, Qe, Xe, hf, jf, kf, Af, Gf, Ef, Ff, Lf, Pf, Qf, Rf, gg, lg, og, qg, rg, vg, wg, xg, tg, ug, yg, zg, Bg, Cg, Ag, Gg, Ig, Jg, Kg, Sg, Wg, K, bh, ph, th, vh, yh, Ah, Bh, Ch, Eh, Hh, Kh, Mh, Oh, Nh, Vh, Wh, Xh, Yh, Ph, Zh, Qh, ai, ci, di, fi, ei, ki, ii, li, ui, zi, pi, qi, Ai, Bi, Ci, Ei, Fi, Gi, Hi, Li, Ri, Ni, Ji, $i, Yi, Zi, aj, cj, fj, hj, N, jj, kj, lj, nj, pj, qj, rj, tj, zj, vj, uj, wj, xj, yj, Qj, Rj, Tj, Uj, Yj, bk, fk, lk, nk, pk, qk, rk, uk, xk, zk, Bk, Ck, Ek, Gk, Hk, Jk, Fk, oa, Lk, Nk, Ok, Qk, Vk, cl, dl, fl, Wk, pl, ql, sl, ul, Bl, Hl, Il, Pl, Ql, Rl, Sl, Tl, Vl, Wl, Xl, Yl, $l, Zl, am, bm, cm, dm, em, fm, im, km, mm, nm, om, pm, qm, rm, sm, Tm, Zm, dn, gn, en, fn, on, tn, vn, yn, Cn, zn, En, Fn, Gn, Hn, Kn, Mn, Tn, Nn, On, Jn, Wn, Yn, Zn, bo, ho, uo, vo, xo, Ho, Ko, Lo, Mo, So, To, Wo, Xo, bp, cp, hp, jp, kp, lp, sp, xp, zp, oq, rq, sq, tq, Bq, Dq, Gq, Jq, F, Kq, Lq, Mq, Nq, Oq, x, Pq, Qq, Rq, Q, Sq, Tq, Uq, ar, br, cr, fb, ib, jb, er, hr, fr, gr, ir, jr, $a, Vc, qa, ja, nr, or, pr, qr, qe;
    ba = function(a) {
        return a ? a.passive && aa() ? a : a.capture || !1 : !1
    };
    ea = function(a, b) {
        b = _.da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    fa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ha = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ka = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ia(e) ? "o" + ja(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    na = function(a, b) {
        a.sort(b || ma)
    };
    pa = function(a) {
        for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ma;
        na(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    sa = function(a, b) {
        if (!qa(a) || !qa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ra, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ma = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    ra = function(a, b) {
        return a === b
    };
    ta = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    ua = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = ua.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    va = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    wa = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    xa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    za = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < ya.length; f++) c = ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Aa = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Ca = function(a) {
        return -1 != Aa().indexOf(a)
    };
    Da = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ea = function() {
        return Ca("Firefox") || Ca("FxiOS")
    };
    Ia = function() {
        return Ca("Safari") && !(Ha() || Ca("Coast") || Ca("Opera") || Ca("Edge") || Ca("Edg/") || Ca("OPR") || Ea() || Ca("Silk") || Ca("Android"))
    };
    Ha = function() {
        return (Ca("Chrome") || Ca("CriOS")) && !Ca("Edge") || Ca("Silk")
    };
    Ja = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.u(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    Ka = function() {
        var a = Aa();
        if (Ca("Trident") || Ca("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Da(a);
        b = Ja(a);
        return Ca("Opera") ? b(["Version", "Opera"]) : Ca("Edge") ? b(["Edge"]) : Ca("Edg/") ? b(["Edg"]) : Ca("Silk") ? b(["Silk"]) : Ha() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Oa = function(a) {
        if (a instanceof La) a = Ma(a);
        else {
            b: if (Na) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    Pa = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Qa = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ta = function(a, b) {
        a.textContent = b instanceof Ra && b.constructor === Ra ? b.j : "type_error:SafeScript";
        Qa(a)
    };
    Va = function(a, b) {
        a.src = Ua(b);
        Qa(a)
    };
    Xa = function(a, b) {
        a.write(Wa(b))
    };
    Za = function(a) {
        return new _.Ya(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    bb = function(a) {
        for (var b = $a.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.ab(c.join(""))
    };
    db = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new x.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Va(g, a);
            c && "complete" !== b.document.readyState ? _.cb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    kb = function(a) {
        var b, c, d, e, f, g;
        return _.eb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.Cb, c = void 0, h.D = 2, fb(h, hb(b), 4);
                case 4:
                    c = h.m;
                    ib(h, 3);
                    break;
                case 2:
                    jb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Ub || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.I,
                        te: c.bg_hash_basename,
                        se: c.bg_binary,
                        cf: a.j + "_" + a.m,
                        Ub: d,
                        Cb: a.Cb,
                        Bc: e,
                        Nc: f,
                        Ac: g
                    }) : h.return(void 0)
            }
        })
    };
    nb = function(a) {
        var b;
        return _.eb(function(c) {
            if (1 == c.j) return fb(c, kb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.te, g._bgp_ = b.se, g._li_ = b.cf, g._jk_ = b.Ub, g._st_ = b.Cb, g._rc_ = b.Bc, g._dl_ = b.Nc, g._g2_ = b.Ac, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = lb(mb, {
                    basename: d
                });
                db(d)
            }
            return c.return(b)
        })
    };
    rb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (ob) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (pb || (pb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    ub = function(a) {
        return null == a || sb(a) ? a : "string" === typeof a ? tb(a) : null
    };
    sb = function(a) {
        return vb && null != a && a instanceof Uint8Array
    };
    xb = function(a) {
        if (a !== wb) throw Error("illegal external caller");
    };
    zb = function(a, b) {
        if (yb) return a[yb] |= b;
        if (void 0 !== a.Oa) return a.Oa |= b;
        Object.defineProperties(a, {
            Oa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    };
    Ab = function(a, b) {
        yb ? a[yb] && (a[yb] &= ~b) : void 0 !== a.Oa && (a.Oa &= ~b)
    };
    Cb = function(a) {
        var b;
        yb ? b = a[yb] : b = a.Oa;
        return null == b ? 0 : b
    };
    Db = function(a, b) {
        yb ? a[yb] = b : void 0 !== a.Oa ? a.Oa = b : Object.defineProperties(a, {
            Oa: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    Eb = function(a) {
        zb(a, 1);
        return a
    };
    Fb = function(a) {
        return !!(Cb(a) & 2)
    };
    Gb = function(a) {
        zb(a, 2);
        return a
    };
    Hb = function(a) {
        zb(a, 16);
        return a
    };
    Jb = function(a, b) {
        Db(b, (a | 0) & -51)
    };
    Kb = function(a, b) {
        Db(b, (a | 18) & -41)
    };
    Lb = function(a, b) {
        var c = Cb(a);
        (c & b) !== b && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), Db(a, c | b));
        return a
    };
    Mb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Nb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Qb = function(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Ob(a, wb) : Pb();
            else if (a.constructor !== Ob)
            if (sb(a)) a = a.length ? new Ob(new Uint8Array(a), wb) : Pb();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    Rb = function(a) {
        a instanceof Ob && (xb(wb), a = a.Eb || "");
        return a
    };
    Sb = function(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Mb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    Tb = function(a) {
        return a
    };
    Vb = function(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Ec === Ub) return a;
        if (d) return new b(a);
        if (c) return new b
    };
    Wb = function(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    };
    Yb = function(a, b, c, d) {
        a = Vb(a, b, !0);
        c ? Gb(a.aa) : d && (a = Xb(a));
        return a
    };
    Zb = function(a) {
        return a
    };
    $b = function(a) {
        return a
    };
    ac = function(a) {
        return a
    };
    cc = function(a, b) {
        a = a || {};
        b = b || {};
        var c = {},
            d;
        for (d in a) Nb(a, d) && (c[d] = 0);
        for (var e in b) Nb(b, e) && (c[e] = 0);
        for (var f in c)
            if (Nb(c, f) && !bc(a, f, a[f], b, f, b[f])) return !1;
        return !0
    };
    dc = function(a) {
        return a && "object" === typeof a ? a.aa || a : a
    };
    fc = function(a, b) {
        if (null == b) return !1;
        a = a.j;
        b = b.j;
        if (a.size != b.size) return !1;
        a = _.u(a, "entries").call(a);
        for (var c; !(c = a.next()).done;)
            if (c = c.value, !ec(c[1], b.get(c[0]))) return !1;
        return !0
    };
    hc = function(a, b, c, d) {
        if (null == d) d = [];
        else if (!Array.isArray(d)) return null;
        return b[c] = gc(a, d)
    };
    bc = function(a, b, c, d, e, f) {
        c = Rb(c);
        f = Rb(f);
        c = dc(c);
        f = dc(f);
        if (c == f) return !0;
        if (vb) {
            var g = sb(c),
                h = sb(f);
            if (g || h) {
                if (g) a = c;
                else if ("string" === typeof c) a = ub(c);
                else return !1;
                if (!h)
                    if ("string" === typeof f) f = ub(f);
                    else return !1;
                if (a.length !== f.length) return !1;
                for (h = 0; h < a.length; h++)
                    if (a[h] !== f[h]) return !1;
                return !0
            }
        }
        if (c instanceof ic) return fc(c, f instanceof ic ? f : hc(c, d, e, f));
        if (f instanceof ic) return fc(f, hc(f, a, b, c));
        if (null == c && Array.isArray(f) && Cb(f) & 1 && !f.length || null == f && Array.isArray(c) && Cb(c) & 1 && !c.length) return !0;
        if (!_.ia(c) || !_.ia(f)) return "number" === typeof c && isNaN(c) || "number" === typeof f && isNaN(f) ? String(c) == String(f) : !1;
        if (c.constructor != f.constructor) return !1;
        if (c.constructor === Array) {
            h = c;
            b = a = void 0;
            c = Math.max(h.length, f.length);
            for (d = 0; d < c; d++)
                if (e = h[d], g = f[d], e && e.constructor == Object && (a = e, e = void 0), g && g.constructor == Object && (b = g, g = void 0), !bc(h, d, e, f, d, g)) return !1;
            return a || b ? (a = a || {}, b = b || {}, cc(a, b)) : !0
        }
        if (c.constructor === Object) return cc(c, f);
        throw Error("Invalid type in JSPB array");
    };
    ec = function(a, b) {
        return bc(void 0, void 0, a, void 0, void 0, b)
    };
    kc = function(a, b) {
        jc = b;
        a = new a(b);
        jc = void 0;
        return a
    };
    oc = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (Cb(a) & 128)) return a = Array.prototype.slice.call(a), Sb(a), a
                    } else {
                        if (sb(a)) return lc(a);
                        if (a instanceof Ob) return mc(a);
                        if (a instanceof ic) return nc(a)
                    }
        }
        return a
    };
    qc = function(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = pc(a, b, c, void 0 !== d);
            else if (Mb(a)) {
                var e = {},
                    f;
                for (f in a) Nb(a, f) && (e[f] = qc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    };
    pc = function(a, b, c, d) {
        var e = Cb(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = qc(a[f], b, c, d);
        c(e, a);
        return a
    };
    tc = function(a) {
        return qc(a, rc, sc)
    };
    rc = function(a) {
        return a.Ec === Ub ? a.toJSON() : a instanceof ic ? nc(a, tc) : oc(a)
    };
    vc = function(a) {
        return qc(a, uc, sc)
    };
    uc = function(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (sb(a)) return new Uint8Array(a);
            if (a instanceof ic) return a.size ? gc(a, Hb(wc(a, vc))) : [];
            if (a.Ec === Ub) return xc(a)
        }
        return a
    };
    sc = function(a, b) {
        a & 128 && Sb(b)
    };
    zc = function(a, b, c, d) {
        a.D && (a.D = void 0);
        if (b >= a.m || d) return yc(a)[b] = c, a;
        a.aa[b + a.eb] = c;
        (c = a.j) && b in c && delete c[b];
        return a
    };
    Bc = function(a, b, c, d, e) {
        var f = y(a, b, d);
        Array.isArray(f) || (f = Ac);
        var g = Cb(f);
        g & 1 || Eb(f);
        if (e) g & 2 || Gb(f), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Ab(f, 16) : (f = Eb(Array.prototype.slice.call(f)), zc(a, b, f, d))
        }
        return f
    };
    Dc = function(a, b, c, d) {
        var e = Fb(a.aa),
            f = Bc(a, b, 1, d, e),
            g = Cb(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Eb(f.slice()), zc(a, b, f, d));
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            zb(f, 5);
            e && (Gb(f), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), zb(f, 5), Cc(a, b, f, d));
        return f
    };
    Ec = function(a) {
        return Qb(a, !0)
    };
    Gc = function(a, b, c) {
        var d = !1;
        if (null == b) {
            if (c) return Fc || (Fc = new ic(Gb([])));
            b = []
        } else if (b.constructor === ic) {
            if (0 == (b.m & 2) || c) return b;
            b = wc(b)
        } else Array.isArray(b) ? d = Fb(b) : b = [];
        if (c) {
            if (!b.length) return Fc || (Fc = new ic(Gb([])));
            d || (d = !0, Gb(b))
        } else if (d)
            for (d = !1, b = Array.prototype.slice.call(b), c = 0; c < b.length; c++) {
                var e = b[c] = Array.prototype.slice.call(b[c]);
                Array.isArray(e[1]) && (e[1] = Gb(e[1]))
            }
        d || (Cb(b) & 32 ? Ab(b, 16) : Cb(a.aa) & 16 && Hb(b));
        d = new ic(b, void 0);
        zc(a, 26, d, !1);
        return d
    };
    _.Ic = function(a, b, c, d) {
        Hc(a);
        c !== d ? zc(a, b, c) : zc(a, b, void 0, !1);
        return a
    };
    Jc = function(a, b, c, d, e, f) {
        a.Ba || (a.Ba = {});
        var g = a.Ba[c],
            h = Bc(a, c, 3, d, f);
        if (g) f || (Object.isFrozen(g) ? e || (g = Array.prototype.slice.call(g), a.Ba[c] = g) : e && Object.freeze(g));
        else {
            g = [];
            var k = !!(Cb(a.aa) & 16),
                l = Fb(h);
            !f && l && (h = Eb(Array.prototype.slice.call(h)), zc(a, c, h, d));
            d = l;
            for (var m = 0; m < h.length; m++) {
                var n = h[m];
                var p = b;
                var r = k,
                    v = !1;
                v = void 0 === v ? !1 : v;
                r = void 0 === r ? !1 : r;
                p = Array.isArray(n) ? new p(r ? Hb(n) : n) : v ? new p : void 0;
                void 0 !== p && (d = d || Fb(n), g.push(p), l && Gb(p.aa))
            }
            a.Ba[c] = g;
            a = h;
            Object.isFrozen(a) || (b = Cb(a) | 33, Db(a, d ? b & -9 : b | 8));
            (f || e && l) && Gb(g);
            (f || e) && Object.freeze(g)
        }
        return g
    };
    Kc = function(a, b) {
        return null == a ? b : a
    };
    Nc = function(a) {
        var b = Cb(a);
        if (b & 2) return a;
        a = Lc(a, Mc);
        Kb(b, a);
        Object.freeze(a);
        return a
    };
    Oc = function(a, b, c) {
        c = void 0 === c ? Kb : c;
        if (null != a) {
            if (vb && a instanceof Uint8Array) return a.length ? new Ob(new Uint8Array(a), wb) : Pb();
            if (Array.isArray(a)) {
                var d = Cb(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Db(a, d | 2), a;
                a = pc(a, Oc, c, !0);
                b = Cb(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Ec === Ub ? Mc(a) : a instanceof ic ? gc(a, Gb(wc(a, Oc))) : a
        }
    };
    Mc = function(a) {
        if (Fb(a.aa)) return a;
        a = Pc(a, !0);
        Gb(a.aa);
        return a
    };
    Pc = function(a, b) {
        var c = a.aa,
            d = Hb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (Cb(c) & 128) && Sb(d);
        b = b || Fb(a.aa) ? Kb : Jb;
        d = kc(a.constructor, d);
        a.zb && (d.zb = a.zb.slice());
        e = !!(Cb(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && Mb(g))
                for (var h in g) {
                    var k = +h;
                    if (_.u(Number, "isNaN").call(Number, k)) yc(d)[k] = g[k];
                    else {
                        var l = g[h],
                            m = a.Ba && a.Ba[k];
                        m ? Qc(d, k, Nc(m), !0) : _.z(d, k, Oc(l, e, b), !0)
                    }
                } else k = f - a.eb, (l = a.Ba && a.Ba[k]) ? Qc(d, k, Nc(l), !1) : _.z(d, k, Oc(g, e, b), !1)
        }
        return d
    };
    Rc = function(a, b) {
        if (Array.isArray(a)) {
            var c = Cb(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Db(a, c | d)
        }
    };
    Sc = function(a, b) {
        return oc(b)
    };
    Uc = function(a, b) {
        b.zb && (a.zb = b.zb.slice());
        var c = b.Ba;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Nb(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = Tc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Uc(f[g], e[g])
                        } else throw Error("unexpected object: type: " + Vc(e) + ": " + e);
                    }
                }
        }
    };
    Zc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.A(Wc(c, a)), b = c.next().value, a = c.next().value, c = b);
        Xc = c >>> 0;
        Yc = a >>> 0
    };
    ad = function(a) {
        if (16 > a.length) Zc(Number(a));
        else if ($c) a = BigInt(a), Xc = Number(a & BigInt(4294967295)) >>> 0, Yc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            Yc = Xc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Yc *= 1E6, Xc = 1E6 * Xc + d, 4294967296 <= Xc && (Yc += Xc / 4294967296 | 0, Xc %= 4294967296);
            b && (b = _.A(Wc(Xc, Yc)), a = b.next().value, b = b.next().value, Xc = a, Yc = b)
        }
    };
    Wc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    ed = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Nb(c, e)) {
                    var f = c[e],
                        g = f.Qf;
                    g || (d.Ib = f.oh || f.xh.Qc, f.re ? (d.Vc = bd(f.re), g = function(h) {
                        return function(k, l, m) {
                            return h.Ib(k, l, m, h.Vc)
                        }
                    }(d)) : f.df ? (d.Uc = cd(f.Ee.Hd, f.df), g = function(h) {
                        return function(k, l, m) {
                            return h.Ib(k, l, m, h.Uc)
                        }
                    }(d)) : g = d.Ib, f.Qf = g);
                    g(b, a, f.Ee)
                }
                d = {
                    Ib: d.Ib,
                    Vc: d.Vc,
                    Uc: d.Uc
                }
            }
        }
        dd(b, a)
    };
    hd = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (fd in c || gd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    bd = function(a) {
        var b = a[id];
        if (!b) {
            var c = jd(a);
            b = function(d, e) {
                return kd(d, e, c)
            };
            a[id] = b
        }
        return b
    };
    cd = function(a, b) {
        var c = a[id];
        c || (c = function(d, e) {
            return ed(d, e, b)
        }, a[id] = c);
        return c
    };
    ld = function(a, b) {
        a.push(b)
    };
    md = function(a, b, c) {
        a.push(b, c.Qc)
    };
    nd = function(a, b, c, d) {
        var e = bd(d),
            f = jd(d).Hd,
            g = c.Qc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    od = function(a, b, c, d, e, f) {
        var g = cd(d, f),
            h = c.Qc;
        a.push(b, function(k, l, m) {
            return h(k, l, m, d, g)
        })
    };
    jd = function(a) {
        var b = a[gd];
        if (b) return b;
        b = a[gd] = [];
        var c = ld,
            d = md,
            e = nd,
            f = od;
        b.Hd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = hd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = hd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        fd in a && gd in a && (a.length = 0);
        return b
    };
    kd = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        ed(a, b, e ? c[0] : void 0)
    };
    pd = function(a, b) {
        return {
            wh: a,
            Qc: b
        }
    };
    td = function(a, b, c) {
        b = y(b, c);
        null != b && ("string" === typeof b && qd(b), null != b && (rd(a.j, 8 * c), "number" === typeof b ? (a = a.j, Zc(b), sd(a, Xc, Yc)) : (c = qd(b), sd(a.j, c.m, c.j))))
    };
    ud = function(a) {
        return a
    };
    wd = function(a, b) {
        var c = vd;
        vd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    xd = function(a, b, c) {
        wd(a, b, c);
        return a
    };
    yd = function(a, b, c) {
        b = vd;
        vd = void 0;
        if (!a) {
            if (b) throw Error(b());
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    zd = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Bd = function(a) {
        var b = document;
        if (a.length && b.head) {
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = _.Ad("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    Gd = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.A(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.A(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Cd(h, b))) {
                        f = _.A(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Dd(function(f) {
            if (!f.parent || !Ed(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Fd(g[h]) == f) {
                    Gd(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    Hd = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    C = function(a) {
        var b = $a.apply(1, arguments);
        if (0 === b.length) return Id(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Id(c.join(""))
    };
    Jd = function(a, b) {
        var c = Ua(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Id(c)
    };
    Kd = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.zd] = b.message.toJSON(), c)]
        })])
    };
    Md = function(a) {
        a.vd.apply(a, _.Ld($a.apply(1, arguments).map(function(b) {
            return {
                zd: 2,
                message: b
            }
        })))
    };
    Nd = function(a) {
        a.vd.apply(a, _.Ld($a.apply(1, arguments).map(function(b) {
            return {
                zd: 5,
                message: b
            }
        })))
    };
    Od = function(a) {
        a.vd.apply(a, _.Ld($a.apply(1, arguments).map(function(b) {
            return {
                zd: 8,
                message: b
            }
        })))
    };
    Qd = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.Ad("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && ea(a.google_image_requests, e);
                _.Pd(e, "load", f);
                _.Pd(e, "error", f)
            };
            _.cb(e, "load", f);
            _.cb(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    Rd = function(a) {
        a && "function" == typeof a.La && a.La()
    };
    Td = function() {
        var a = Sd;
        return (0, E.jd)(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }, function() {
            return "unknown enum"
        })
    };
    Vd = function() {
        var a = Ud;
        return (0, E.jd)(function(b) {
            return b instanceof a
        }, function() {
            return (0, E.functionName)(a)
        })
    };
    ie = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Wd(Xd, d);
            if (d) {
                var f = Wd(Xd, d);
                Yd(f, Zd($d(1), -1));
                ae(f)
            }
        } catch (g) {
            be(d), e = new Xd
        }
        if (c = (F = Tc(e, ce, 1), _.u(F, "find")).call(F, function(g) {
                return de(g, 1, 0) === b
            }))
            if (f = ee(c, 2), null === f || isNaN(f)) be(d);
            else return f;
        d = fe() ? null : Math.floor(1E3 * ge());
        if (null === d) return null;
        c ? Zd(c, d) : Yd(e, Zd($d(b), d));
        return he(a, ae(e)) ? d : null
    };
    be = function(a) {
        .01 > Math.random() && je({
            data: a
        }, "ls_tamp")
    };
    ke = function(a, b) {
        b = void 0 === b ? window : b;
        if (G(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ne = function(a) {
        return "null" !== a.origin
    };
    pe = function(a, b, c) {
        b = G(b, 5) && ne(c) ? c.document.cookie : null;
        return null === b ? null : (new oe({
            cookie: b
        })).get(a) || ""
    };
    _.re = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : qe()
    };
    _.se = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    te = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ue = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(te("domLoading", a) || Infinity, te("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(te("responseEnd", a), te("navigationStart", a)) : b
    };
    Ae = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = ve.j();
        0 === e.j && (e.j = Math.random() < _.we(xe) ? 2 : 1);
        2 === e.j && (e = {}, je(_.u(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(ye(window)), e.em = c, e.lid = b, e.eids = ze().join(), e), d), "esp"))
    };
    He = function(a, b, c, d) {
        Ae(18, a);
        try {
            var e = _.re();
            _.we(Be) && (_.z(b, 8, Number(((0, E.K)(Ce(b, 8)) - 1).toFixed(3))), _.z(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Ae(29, a, null, {
                    delta: String(_.re() - e)
                });
                if (null == f) return Ae(41, a), De(b, 111, d), b;
                null != f && ("string" !== typeof f ? Ae(21, a) : f.length || Ae(20, a));
                Ee(_.z(b, 2, f), 10);
                Fe().set(b, d) && Ae(27, a);
                return b
            }).catch(function(f) {
                De(b, 106, d);
                Ae(28, a, Ge(f));
                return b
            })
        } catch (f) {
            return De(b, 107, d), Ae(1, a, Ge(f)), x.Promise.resolve(b)
        }
    };
    De = function(a, b, c) {
        var d;
        Ie(a, Je(null != (d = Ke(a, Le, 10)) ? d : new Le, b));
        Fe().set(a, c)
    };
    Me = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new x.Promise(function(c) {
            var d = function() {
                c(b());
                _.Pd(a, "load", d)
            };
            _.cb(a, "load", d)
        })
    };
    Ne = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    We = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        var d = _.we(Oe),
            e = new Pe,
            f = Qe(c, b),
            g = (F = f.map(function(h) {
                return h.Pb()
            }), _.u(F, "flatMap")).call(F, function(h) {
                return h
            }).map(function(h) {
                return h.na()
            });
        Re(e, a, b, d, g);
        Se(e, f, c, b, d);
        return Tc(e, Te, 2).length ? lc(Ue(e, Ve), 3) : null
    };
    Se = function(a, b, c, d, e) {
        if (d && c && "function" === typeof c.getUserIdsAsEidBySource) {
            b = _.A(b);
            for (var f = b.next(); !f.done; f = b.next())
                if (f = f.value, String(f.Ya()) === d) {
                    f = _.A(f.Pb());
                    for (var g = f.next(); !g.done; g = f.next())
                        if (g = g.value.na(), !Xe(a, g)) {
                            var h = null;
                            try {
                                var k = void 0,
                                    l = void 0,
                                    m = void 0;
                                h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (m = l[0]) ? void 0 : m.id
                            } catch (n) {
                                k = void 0, Ae(45, g, null == (k = n) ? void 0 : k.message)
                            }
                            h && (h.length > e ? (k = {}, Ae(12, g, null, (k.sl = String(h.length), k.fp = "1", k))) : (k = Ye(g), h = _.z(k, 2, h), h = _.z(h, 11, !0), Ze(a, 2, Te, h), h = {}, Ae(19, g, null, (h.fp = "1", h))))
                        }
                }
        }
    };
    Re = function(a, b, c, d, e) {
        if (b)
            for (var f = _.we($e), g = _.A(Ne(b)), h = g.next(); !h.done; h = g.next())
                if (h = h.value, !_.u(e, "includes").call(e, h)) {
                    var k = Fe().get(h, b).sb;
                    if (k) {
                        var l = cf(k);
                        if (2 !== l && 3 !== l) {
                            var m = !1;
                            if (c && (l = /^(\d+)$/.exec(h)) && !(m = _.u(c.split(","), "includes").call(c.split(","), l[1]))) continue;
                            _.z(k, 9, m);
                            l = y(k, 2);
                            m = m ? f : d;
                            0 <= m && l && l.length > m && (m = {}, Ae(12, h, null, (m.sl = String(l.length), m)), De(k, 108, b), Ee(k, 2));
                            Ze(a, 2, Te, k);
                            Ae(19, h)
                        }
                    }
                }
    };
    Qe = function(a, b) {
        if (!b || "function" !== typeof(null == a ? void 0 : a.getUserIdsAsEidBySource)) return [];
        a = [];
        b = _.A(df(ef));
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = null;
            try {
                d = Wd(ff, c)
            } catch (e) {
                c = void 0;
                Ae(44, "UNKNOWN_ID", null == (c = e) ? void 0 : c.message);
                continue
            }
            a.push(d)
        }
        return a
    };
    Xe = function(a, b) {
        return Tc(a, Te, 2).some(function(c) {
            return c.na() === b && gf(c, 2)
        })
    };
    hf = function(a, b) {
        var c, d, e;
        return _.eb(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.ic
            }) : a, fb(f, x.Promise.all(c.map(function(g) {
                return g.xb.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.ic
                });
                e = _.re();
                return fb(f, x.Promise.race([x.Promise.all(d.map(function(g) {
                    return g.xb.promise
                })), new x.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.re() - e)
        })
    };
    jf = function(a) {
        var b = function(c) {
            var d = {};
            Ae(c, (0, E.K)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, E.K)(y(a, 3))) / 6E4)), d))
        };
        switch (cf(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                break;
            case 2:
                b(26);
                break;
            case 3:
                Ae(9, (0, E.K)(a.na()));
                break;
            case 4:
                b(23)
        }
    };
    kf = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Af = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n, p, r, v, w, D, B, I;
        return _.eb(function(S) {
            e = new lf;
            f = _.we(Be);
            g = new mf(a, c, d);
            h = new nf(g.o, c, d);
            k = new of (g.l, f, d);
            l = new pf(k.l, f, d);
            m = new qf(l.o, f, d);
            n = new nf(m.o, c, d);
            r = p = null;
            _.H(rf) ? (v = new sf(m.l, d), J(e, v), p = v.o, w = new tf(v.l, f, d), J(e, w), D = new uf(b, w.l, d), J(e, D), J(e, new nf(D.l, c, d)), J(e, new vf(D.l, _.we(Oe), _.we($e), d)), r = function() {
                var M, U, Y;
                return _.eb(function(la) {
                    return 1 == la.j ? (Y = a, fb(la, D.l.promise, 2)) : la.return({
                        id: Y,
                        collectorGeneratedData: null != (U = null == (M = la.m) ? void 0 : y(M, 2)) ? U : null
                    })
                })
            }) : (B = new wf(b, m.l, c, d), J(e, B), p = B.F, r = function() {
                var M;
                return _.eb(function(U) {
                    return 1 == U.j ? fb(U, B.l.promise, 2) : U.return(null != (M = U.m) ? M : {
                        id: a,
                        collectorGeneratedData: null
                    })
                })
            });
            I = new xf(b, p, c, d);
            yf(e, [g, h, k, l, m, n, I]);
            zf(e);
            return S.return(r())
        })
    };
    Gf = function(a, b, c) {
        b ? Bf() === Cf(window) || _.H(Df) ? Ef(a, "encryptedSignalProviders", c) && Ef(a, "secureSignalProviders", c) || (Ae(38, ""), Ff(a, "encryptedSignalProviders", b, c), Ff(a, "secureSignalProviders", b, c)) : Ae(16, "") : Ae(15, "")
    };
    Ef = function(a, b, c) {
        return a[b] instanceof Hf ? (a[b].addErrorHandler(c), !0) : !1
    };
    Ff = function(a, b, c, d) {
        var e, f = new If(null != (e = a[b]) ? e : [], c);
        a[b] = new Hf(f);
        f.addErrorHandler(d)
    };
    Lf = function(a, b) {
        var c = new lf,
            d = new Jf(b);
        a = new Kf(d.A, a, b);
        yf(c, [d, a]);
        zf(c)
    };
    Pf = function(a, b, c, d) {
        if (!c) return null;
        var e = b.toString();
        if (Mf.has(e)) return null;
        Mf.add(e);
        var f = _.we(Be);
        e = new lf;
        a = new mf(a, c, d);
        var g = new nf(a.o, c, d),
            h = new Nf(a.l, d),
            k = new of (h.l, f, d);
        f = new qf(k.l, f, d);
        var l = new nf(f.o, c, d);
        b = new Of(f.l, b, d);
        c = new nf(b.l, c, d);
        yf(e, [a, g, h, k, f, l, b, c]);
        zf(e);
        return e
    };
    Qf = function(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    Rf = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(F = c.allowedFeatures(), _.u(F, "includes")).call(F, a))
    };
    gg = function(a) {
        var b = void 0 === b ? Sf : b;
        var c = _.u(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.u(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.u(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? e : void 0
        };
        if (a)
            for (e = _.A(_.u(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.A(a.value), a = c.next().value, c = c.next().value, (0, E.Xd)(Tf.test(a)), d[a] = c;
        if (!Uf.test("div")) throw Error("");
        if ("DIV" in Vf) throw Error("");
        e = "";
        if (d)
            for (f in d)
                if (Object.prototype.hasOwnProperty.call(d, f)) {
                    if (!Uf.test(f)) throw Error("");
                    c = d[f];
                    if (null != c) {
                        a = f;
                        if (c instanceof Wf) c = Xf(c);
                        else {
                            if ("style" == a.toLowerCase()) throw Error("");
                            if (/^on/i.test(a)) throw Error("");
                            if (a.toLowerCase() in Yf)
                                if (c instanceof Zf) c = Ua(c).toString();
                                else if (c instanceof La) c = Ma(c);
                            else if ("string" === typeof c) c instanceof La || (c = "object" == typeof c && c.Ra ? c.Na() : String(c), $f.test(c) ? c = _.ab(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(ag) ? _.ab(c) : null)), c = (c || _.bg).Na();
                            else throw Error("");
                        }
                        c.Ra && (c = c.Na());
                        a = a + '="' + cg(String(c)) + '"';
                        e += " " + a
                    }
                }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === dg.div ? f += ">" : (d = eg(b), f += ">" + Wa(d).toString() + "</div>");
        return fg(f)
    };
    lg = function(a) {
        hg();
        var b = ig.googleToken[5] || 0;
        a && (0 != b || jg[3] >= qe() ? kg.Cd(a) : (kg.wc().push(a), kg.Zd()));
        jg[3] >= qe() && jg[2] >= qe() || kg.Zd()
    };
    og = function(a) {
        a = Lc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    qg = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.pg(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        ka(a);
        na(a, function(b, c) {
            return b - c
        });
        return a
    };
    rg = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    vg = function(a, b, c, d) {
        var e = new _.sg,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Pd(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (m) {}
            },
            h = tg(a);
        return h ? (_.cb(a, "message", g), f = c(h), e.promise) : (c = ug(a)) ? (f = String(Math.floor(2147483647 * ge())), _.cb(a, "message", g), b(c, f), e.promise) : null
    };
    wg = function(a) {
        return vg(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    xg = function(a) {
        return !!tg(a) || !!ug(a)
    };
    tg = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    ug = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    yg = function(a) {
        var b, c;
        return null != (c = (F = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.u(F, "find")).call(F, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    zg = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Bg = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.A(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Ag(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
                        if (k = Ag(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Cg = function(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    m = e - 1;
                k.push.call(k, {
                    x: (0 === l ? 0 : h / l) * a,
                    y: c + (0 === m ? 0 : g / m) * (d - c)
                })
            }
        return f
    };
    Ag = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Dg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.Eg(_.Fg, a).width && 1 >= _.Eg(_.Fg, a).height ? !0 : !1;
        if (d) {
            var f, g;
            d.j("ach_evt", {
                url: b.location.href,
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    };
    Gg = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.pg(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Ig = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Hg(d, function(e) {
                    return !_.u(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Gg(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Jg = function(a, b) {
        .001 > ge() && je({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    Kg = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.Og = function(a) {
        _.Lg(Mg).j = !0;
        return Ng[a]
    };
    Sg = function(a) {
        var b = new Pg;
        b = _.Ic(b, 1, Date.now(), 0);
        b = _.Ic(b, 2, a.pvsid, 0);
        b = _.Ic(b, 3, a.Ha, "");
        var c = ze();
        b = Cc(b, 4, c);
        b = _.Ic(b, 5, a.bf, 0);
        a = _.Ic(b, 12, a.Ae, "");
        var d;
        if (b = null == (d = x.globalThis.performance) ? void 0 : d.memory) {
            d = new Qg;
            try {
                _.Ic(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                _.Ic(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                _.Ic(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && _.Rg(a, 10, d);
        return a
    };
    Wg = function(a) {
        var b = ue();
        if (a.Xb) {
            var c = a.bb;
            a = Sg(a);
            var d = new Tg;
            b = _.Ic(d, 2, b, 0);
            b = Ug(a, 6, Vg, b);
            Nd(c, b)
        }
    };
    K = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = $a.apply(0, arguments),
                f = _.Xg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Xb && a.zf) {
                    var h = a.bb,
                        k = Sg(a);
                    var l = _.Ic(k, 5, a.af, 0);
                    var m = new Yg;
                    var n = _.Zg(m, 1, b);
                    var p = _.Ic(n, 2, g, 0);
                    var r = Ug(l, 9, Vg, p);
                    Nd(h, r)
                }
            } catch (v) {}
            return f
        }
    };
    _.Xg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = $a.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.Lg($g);
            try {
                var l = _.H(ah);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (m) {
                try {
                    if (g) bh.call(this, a, 110, m);
                    else if (bh.call(this, a, b, m), !d) throw m;
                } catch (n) {
                    if ((e = h) && ch && dh() && (ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw m;
                }
            }
            return f
        }
    };
    _.eh = function(a, b, c, d) {
        return _.Xg(a, b, c, void 0 === d ? !1 : d)()
    };
    bh = function(a, b, c) {
        if (a.ee) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new fh,
                e = new gh;
            try {
                var f = ye(window);
                _.Ic(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = ze();
                Cc(e, 2, g)
            } catch (p) {}
            try {
                _.Ic(e, 3, window.document.URL, "")
            } catch (p) {}
            f = _.Rg(d, 2, e);
            g = new hh;
            b = _.Zg(g, 1, b);
            try {
                var h = ih(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Ic(b, 2, h, "")
            } catch (p) {}
            try {
                var k = ih(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Ic(b, 3, k, "")
            } catch (p) {}
            try {
                var l = ih(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.jh(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = _.Rg(f, 1, b);
            k = new kh;
            try {
                _.Ic(k, 1, a.Za || a.Ha, "")
            } catch (p) {}
            try {
                var m = lh();
                _.Ic(k, 2, m, 0)
            } catch (p) {}
            try {
                var n = [].concat(_.Ld(_.u(mh, "keys").call(mh)));
                _.jh(k, 3, n)
            } catch (p) {}
            Ug(h, 4, nh, k);
            _.Ic(h, 5, a.Jd, 0);
            Md(a.bb, h)
        }
    };
    ph = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.u(a, "find").call(a, function(e) {
            e = (0, E.K)(Ke(e, oh, 1));
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : Tc(c, oh, 2)) ? d : null
    };
    th = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Tc(a, qh, 6).length ? ph(Tc(a, qh, 6), rh(sh(new oh, b), c)) : Tc(a, oh, 5)
    };
    vh = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = uh(!1, b), c = th(a, b.width, b.height));
        null != c || (c = th(a));
        return null == c ? [] : c.map(function(d) {
            return G(d, 3) ? "fluid" : [(0, E.sa)(d.getWidth()), (0, E.sa)(d.getHeight())]
        })
    };
    yh = function(a) {
        if (!vh(a).length && wh(a, xh, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.A(vh(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Ah = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(yh(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? zh(c.join(":")).toString() : "0"
    };
    Bh = function(a) {
        return 0 !== a && 1 !== a
    };
    Ch = function(a, b) {
        var c;
        return !(null != (c = G(b, 22)) ? !c : !G(a, 15))
    };
    Eh = function(a) {
        var b = a.document;
        return Dh(a) ? b.URL : b.referrer
    };
    Hh = function(a) {
        try {
            return Fh(a, window.top)
        } catch (b) {
            return new _.Gh(-12245933, -12245933)
        }
    };
    Kh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Eg(Ih, a), a = new _.Jh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Mh = function(a, b) {
        for (var c = {}, d = _.A(_.u(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = xc(b[e]),
                g = _.Lg(Lh),
                h = g.j.get(e);
            null == h ? h = ++_.Lg($g).D : g.j.delete(e);
            _.z(f, 20, h);
            c[e] = f
        }
        return {
            V: xc(a),
            R: c
        }
    };
    Oh = function() {
        for (var a = "", b = _.A(Nh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Nh = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Vh = function(a, b, c, d) {
        var e = Ph(b, a) || Qh(b, a);
        if (!e) return null;
        var f = Hh(e),
            g = e === Qh(b, a),
            h = Rh(function() {
                var p = g ? Qh(b, a) : e;
                return p && Sh(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = vh(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var m;
            f.y += Math.round(Math.min(null != (m = Th(k("padding-top"))) ? m : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var n;
                f.x += Math.round(Math.min(null != (n = Th(k("padding-left"))) ? n : 0, d))
            }
        }
        return f && Uh(e) ? f : new _.Gh(-12245933, -12245933)
    };
    Wh = function(a, b, c, d) {
        var e = Qh(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Vh(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Xh = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Yh = function(a) {
        return Xh(a) + "__container__"
    };
    Ph = function(a, b) {
        var c;
        return (null == (c = Qh(a, b)) ? void 0 : c.querySelector('[id="' + Yh(a) + '"]')) || null
    };
    Zh = function(a, b) {
        var c, d;
        return null != (d = null == (c = Ph(a, b)) ? void 0 : c.querySelector('iframe[id="' + Xh(a) + '"]')) ? d : null
    };
    Qh = function(a, b) {
        b = void 0 === b ? document : b;
        return $h().D.get(a) || b.getElementById(a.getDomId())
    };
    ai = function(a) {
        return Math.round(Number(Th(a)))
    };
    ci = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.bi(a, c), a = a.parentElement
    };
    di = function(a, b, c, d, e) {
        _.bi(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.bi(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.bi(a, f)), !0) : !1
    };
    fi = function(a, b, c, d, e, f, g, h, k) {
        var l = yh(d);
        _.t.setTimeout(_.Xg(a, 459, function() {
            return void ei(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    ei = function(a, b, c, d, e, f, g, h, k) {
        if (_.t.IntersectionObserver) {
            var l = null,
                m, n = null != (m = Zh(c, b)) ? m : Qh(c, b);
            m = _.Xg(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        v = window.innerWidth,
                        w = Math.round(r.left),
                        D = Math.round(r.right),
                        B = 0 > w + 2,
                        I = 0 < D - (v + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || B || I) gi(h, function(S) {
                        if (B || I) {
                            var M = new hi;
                            M.set(8);
                            ii(n) && M.set(10);
                            M = ji(M)
                        } else M = ki(b, c);
                        var U = li(c, n, f),
                            Y = U.Ue;
                        U = U.Ve;
                        mi(S, a);
                        L(S, "qid", k);
                        L(S, "iu", c.getAdUnitPath());
                        L(S, "e", String(M));
                        B && L(S, "ofl", String(w));
                        I && L(S, "ofr", String(D - v));
                        L(S, "ret", e + "x" + f);
                        L(S, "req", g);
                        L(S, "bm", String(d));
                        L(S, "efh", Number(Y));
                        L(S, "stk", Number(U));
                        L(S, "ifi", ni(window))
                    }, _.we(oi)), l && l.unobserve((0, E.K)(n))
                }
            });
            n && (l = new _.t.IntersectionObserver(m, {
                threshold: [1]
            }), (0, E.K)(l).observe(n))
        }
    };
    ki = function(a, b) {
        var c = Zh(b, a) || Qh(b, a),
            d = new hi;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Qh(b, a),
                m = (0, E.K)(Sh(l, window));
            if ("hidden" === m.visibility || "none" === m.display) return ji(d);
            var n = ai(m.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + n + 2, g + n);
            var r = a.elementsFromPoint(b - n - 2, g + n);
            var v = a.elementsFromPoint(b - n - 2, k - n);
            var w = a.elementsFromPoint(f + n + 2, k - n);
            var D = a.elementsFromPoint(b / 2, k - n)
        } catch (I) {
            return d.set(1), ji(d)
        }
        if (!(p && p.length && r && r.length && v && v.length && w && w.length && D && D.length)) return d.set(7), ji(d);
        a = function(I, S) {
            for (var M = !1, U = 0; U < I.length; U++) {
                var Y = I[U];
                if (M) {
                    var la = Sh(Y, window);
                    if ("hidden" !== la.visibility && !pi(Y) && !B(c, Y)) {
                        d.set(S);
                        "absolute" === la.position && d.set(11);
                        break
                    }
                } else c === Y && (M = !0)
            }
        };
        qi(c) && d.set(9);
        var B = function(I, S) {
            return ri(I, S) || ri(S, I)
        };
        f = p[0];
        c === f || B(c, f) || pi(f) || d.set(2);
        f = r[0];
        c === f || B(c, f) || pi(f) || d.set(3);
        f = v[0];
        c === f || B(c, f) || pi(f) || d.set(4);
        f = w[0];
        c === f || B(c, f) || pi(f) || d.set(5);
        if (pi(c)) return ji(d);
        a(p, 12);
        a(r, 13);
        a(v, 14);
        a(w, 15);
        a(D, 6);
        return ji(d)
    };
    ii = function(a) {
        var b = !1,
            c = !1;
        return si(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    li = function(a, b, c) {
        var d = (a = Qh(a)) && Sh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        ti(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = ui(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var m = (l && _.u(l, "endsWith").call(l, "px") ? ai(l) : 0) >= c;
                    !l || m || "string" === typeof l && _.u(vi, "includes").call(vi, l) || (e = !1)
                }
            f || (k = Sh(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Ue: e,
            Ve: f
        }
    };
    ui = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.u(vi, "includes").call(vi, e.height) || (null == e ? 0 : e.maxHeight) && !_.u(yi, "includes").call(yi, e.maxHeight) || zi(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.u(vi, "includes").call(vi, g) || !!f && !_.u(yi, "includes").call(yi, f)
        }, c, d) ? !1 : !0
    };
    zi = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (S) {
                    if (15 == S.code) throw S.styleSheet = k, S;
                }
                h = l
            } catch (S) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var m = h[l],
                        n, p = c;
                    if (!(n = f.call(a, m.selectorText) && p(m))) a: {
                        var r = void 0;p = a;
                        var v = c,
                            w = e,
                            D = null != (r = m.cssRules) ? r : [];
                        for (r = 0; r < Math.min(D.length, w); r++) {
                            var B = D[r],
                                I = v;
                            if (f.call(p, B.selectorText) && I(B)) {
                                n = !0;
                                break a
                            }
                        }
                        n = !1
                    }
                    if (n) return !0
                } catch (S) {}
        }
        return !1
    };
    pi = function(a) {
        return si(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    qi = function(a) {
        return si(a, function(b) {
            var c;
            return (F = ["left", "right"], _.u(F, "includes")).call(F, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Ai = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Bi = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Id(b), a.src = Ua(b).toString())
    };
    Ci = function(a) {
        if (!/^[0-9a-fA-F-]*$/.test(a)) throw Error("Expected a UUID in the RFC4122 v4 format but received " + a + " instead.");
        return Id("uuid-in-package:" + a)
    };
    Ei = function(a, b, c) {
        c = void 0 === c ? Di : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.cb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Fi = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Gi = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Hi = function(a) {
        if (a === a.top || Ed(a.top)) return x.Promise.resolve({
            status: 4
        });
        var b = Fi(a);
        if (!b) return x.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Gi(a.document.referrer)) return x.Promise.resolve({
            status: 3
        });
        var c = new _.sg;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                oc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Li = function(a) {
        var b = void 0 === b ? Ii : b;
        var c = Ji(a);
        return c.messageChannelSendRequestFn ? x.Promise.resolve(c.messageChannelSendRequestFn) : new x.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Ad("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Ua(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Ki({
                    destination: a,
                    zc: f,
                    origin: g,
                    Ja: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Ri = function(a, b, c, d, e, f) {
        function g(p, r) {
            h && je({
                timeMs: String((b.performance.now() - p).toFixed(2)),
                useCache: r ? "1" : "0"
            }, "topics_stats")
        }
        var h = _.H(Mi),
            k = (h = void 0 === h ? !1 : h) ? b.performance.now() : 0,
            l = Ni(f),
            m = l.lc,
            n = l.kc;
        l = Ji(b);
        l.getTopicsPromise || (c = {
            message: "goog:topics:frame:get:topics",
            callApi: c,
            sendGen204: d
        }, d && (c.pvsid = ye(window)), a = a(c).then(function(p) {
            var r = n;
            if (p instanceof Uint8Array) r || (r = !(m instanceof Uint8Array && sa(p, m)));
            else if (Td()(p)) r || (r = p !== m);
            else return p = Error(JSON.stringify(p)), bh(e.context, 989, p), 7;
            if (r && f) try {
                var v = new Oi;
                var w = _.z(v, 2, _.re());
                p instanceof Uint8Array ? Pi(w, 1, Qi, Qb(p, !1)) : Pi(w, 3, Qi, p);
                f.setItem("goog:cached:topics", ae(w))
            } catch (D) {}
            return p
        }), l.getTopicsPromise = (0, E.sa)(a));
        return m && !n ? (g(k, !0), x.Promise.resolve(m)) : l.getTopicsPromise.then(function(p) {
            g(k, !1);
            return p
        })
    };
    Ni = function(a) {
        if (!a) return {
            lc: null,
            kc: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                lc: null,
                kc: !0
            };
            var c = Wd(Oi, b),
                d = Si(c, Qi);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = Ti(c, Qi, 1),
                        g = Ui(c, f);
                    var h = null == g ? Pb() : g;
                    var k = Vi(h);
                    e = k ? new Uint8Array(k) : Wi || (Wi = new Uint8Array(0));
                    break;
                case 3:
                    e = de(c, Ti(c, Qi, 3), 0);
                    break;
                default:
                    Pa(d)
            }
            return {
                lc: e,
                kc: Xi(c, 2) + 6048E5 < _.re()
            }
        } catch (l) {
            return {
                lc: null,
                kc: !0
            }
        }
    };
    Ji = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    $i = function(a) {
        if (Ha()) {
            var b = a.document.documentElement.lang;
            Yi(a) ? Zi(ye(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Yi(a) && (Zi(ye(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Yi = function(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    };
    Zi = function(a, b, c, d) {
        je({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    aj = function(a) {
        var b = "";
        Dd(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    cj = function(a) {
        a = (Ed(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!bj(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    fj = function(a, b) {
        var c = dj.get(a);
        c || (b = c = b(), ej.set(b, a), dj.set(a, b));
        return c
    };
    hj = function(a, b) {
        return (0, E.sa)(fj(b, function() {
            return new gj(a, b)
        }))
    };
    N = function(a) {
        return function() {
            return new ij(a, [].concat(_.Ld($a.apply(0, arguments))))
        }
    };
    jj = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? jj(b) : String(b)
        }).join(", ") + "]"
    };
    kj = function(a, b) {
        b = jj(b);
        b = b.substring(1, b.length - 1);
        return new ij(96, [a, b])
    };
    lj = function(a) {
        return (F = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.u(F, "includes")).call(F, a) ? a : null
    };
    nj = function(a, b, c) {
        return fj(c, function() {
            return new mj(a, b, c)
        })
    };
    pj = function(a, b, c) {
        return fj(c, function() {
            return new oj(a, b, c)
        })
    };
    qj = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    rj = function(a, b) {
        var c = qj();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    tj = function(a) {
        if (a = sj[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = qj())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    zj = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? _.eh(a, 94, function() {
            qj()._pubconsole_disable_ || null !== uj(b) && vj(a, b)
        }) : _.cb(_.t, "load", _.Xg(a, 94, function() {
            qj()._pubconsole_disable_ || null !== uj(b) && vj(a, b)
        }));
        rj("disablePublisherConsole", K(a, 93, wj));
        rj("onPubConsoleJsLoad", K(a, 731, xj));
        rj("openConsole", K(a, 732, function(c) {
            yj(a, void 0 === c ? "" : c)
        }))
    };
    vj = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!Aj) {
            var c = new Bj("gpt_pubconsole_loaded");
            mi(c, a);
            L(c, "param", String(uj(b)));
            L(c, "api", String(Cj));
            Dj(c, 1);
            Ej(b.document, Fj);
            Aj = !0
        }
    };
    uj = function(a) {
        var b = Eh(a),
            c;
        return null != (c = (F = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.u(F, "find")).call(F, function(d) {
            return null !== Gj(b, d)
        })) ? c : null
    };
    wj = function() {
        qj()._pubconsole_disable_ = !0
    };
    xj = function() {
        Hj && ((0, E.K)(qj().console).openConsole(Ij), Ij = void 0, Hj = !1)
    };
    yj = function(a, b) {
        b = void 0 === b ? "" : b;
        Cj = !0;
        var c;
        (null == (c = qj()) ? 0 : c.console) ? (0, E.K)(qj().console).openConsole(b): (b && (Ij = b), Hj = !0, vj(a))
    };
    Qj = function(a, b, c, d, e) {
        if ("string" !== typeof c || Jj(c)) O(e, kj("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : qa(d) ? f = _.u(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (F = Kj(b), _.u(F, "find")).call(F, function(g) {
                return Lj(g) === c
            })) ? Mj(d, f): (d = Mj(Nj(new Oj, c), f), Ze(b, 9, Oj, d));
            e.info(Pj(c, f.join(), (0, E.K)(b.getAdUnitPath())), a)
        }
    };
    Rj = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.A(_.u(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Qj(a, b, f, c[f], d);
        else d.error(kj("Slot.updateTargetingFromMap", [c]), a)
    };
    Tj = function(a, b, c) {
        return fj(c, function() {
            return new Sj(a, b, c, c.j)
        })
    };
    Uj = function(a) {
        return _.u(Object, "assign").call(Object, {}, a, _.u(Object, "fromEntries").call(Object, _.u(Object, "entries").call(Object, a).map(function(b) {
            b = _.A(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    Yj = function() {
        var a = {},
            b = Uj(Vj);
        a.OutOfPageFormat = b;
        b = Uj(Wj);
        a.TrafficSource = b;
        b = Uj(Xj);
        a.Taxonomy = b;
        return a
    };
    bk = function() {
        for (var a = Zj(ak) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    fk = function() {
        if (ck) return ck;
        for (var a = df(dk), b = [], c = 0; c < a.length; c += 2) ek(a[c], a[c + 1], b);
        return ck = b.join("&")
    };
    lk = function(a, b) {
        if (!b || !_.ia(b)) return null;
        var c = !1,
            d = new gk;
        _.hk(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.z(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.z(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.z(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    ik();
                    return;
                default:
                    g = !0
            }
            g && a.error(jk("setSafeFrameConfig", kk(b), f, kk(e)))
        });
        return c ? null : d
    };
    nk = function(a) {
        var b = new gk;
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) mk(c, 1) && _.z(b, 1, G(c, 1)), mk(c, 2) && _.z(b, 2, G(c, 2)), mk(c, 3) && _.z(b, 3, G(c, 3)), mk(c, 4) && _.z(b, 4, G(c, 4));
        return b
    };
    pk = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = ok.exec(null != (b = null == (a = _.Og(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    qk = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    rk = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.u(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Vd())
    };
    uk = function(a) {
        var b = _.Lg(sk),
            c = [];
        a = _.A(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.C = d;
            var e = tk(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    xk = function(a, b, c, d, e, f) {
        var g = vk(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Va;
        if (!f || !g) return O(b, kj("PubAdsService.definePassback", [d, e])), null;
        _.z(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Wd: Tj(a, b, new wk(a, f, c)),
            Va: g
        }
    };
    zk = function(a, b, c, d) {
        return fj(c, function() {
            return new yk(a, b, c, d)
        })
    };
    Bk = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ak) : "fluid" === a
    };
    Ck = function(a) {
        return Array.isArray(a) && 2 === a.length && Ak(a[0]) && Ak(a[1])
    };
    Ek = function(a) {
        return Array.isArray(a) ? rh(sh(new oh, (0, E.sa)(a[0])), (0, E.sa)(a[1])) : Dk()
    };
    Gk = function(a) {
        var b = [];
        if (Fk(a)) b.push(Ek((0, E.K)(a)));
        else if (Array.isArray(a)) {
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Fk(c) ? b.push(Ek((0, E.K)(c))) : sa(c, ["fluid"]) && b.push(Dk())
        }
        return b
    };
    Hk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return rh(sh(new oh, b), a)
    };
    Jk = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            vc: [],
            Ia: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = Gk(a.fixed);
            if (_.H(Ik)) return {
                vc: c,
                Ia: null
            };
            var d;
            if (d = Hk(a.max)) {
                var e = a.min ? Hk(a.min) : new oh;
                null != (null == e ? void 0 : e.getWidth()) || null != e && sh(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && rh(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                b = (0, E.K)(d);
                if (0 === b.getWidth() || 0 === b.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    f = (0, E.K)(e);
                    var g = f.getWidth(),
                        h = b.getWidth();
                    if (null != g && null != h && g > h) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    f = f.getHeight();
                    b = b.getHeight();
                    if (null != f && null != b && f > b) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a));
            !_.H(Ik) && d && e ? (a = new xh, a = _.Rg(a, 1, d), a = _.Rg(a, 2, e)) : a = null;
            return {
                vc: c,
                Ia: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            vc: Gk(a),
            Ia: null
        }
    };
    Fk = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    oa = function(a, b) {
        a: {
            b = (0, E.sa)(b[0]);a = (0, E.sa)(a[0]);
            for (var c = ma, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ma(b.length, a.length)
        }
        return b
    };
    Lk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Kk("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Ck(b)) throw new Kk("Size must be an array of two non-negative integers");
        b = rh(sh(new oh, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Gk(a[1]), 0 === a.length) throw new Kk("At least one slot size must be present");
        var c = new qh;
        b = _.Rg(c, 1, b);
        return Qc(b, 2, a)
    };
    Nk = function(a, b, c) {
        return fj(c, function() {
            return new Mk(a, b, c)
        })
    };
    Ok = function(a, b) {
        return null == a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    Qk = function(a, b) {
        var c, d;
        if (null == b) var e = void 0;
        else {
            e = b.get;
            if (_.H(Pk)) {
                var f = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                f = 3 !== (null == f ? void 0 : f.length) ? a : "/" + f[1] + f[2]
            } else f = a;
            e = e.call(b, f)
        }
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(zh(a))) ? d : 0
    };
    Vk = function(a, b, c, d, e, f) {
        if (null != c && c.size) {
            var g, h;
            f = null != (h = null != (g = null == f ? void 0 : f.adUnits) ? g : null == b ? void 0 : b.adUnits) ? h : [];
            b = {};
            g = _.A(f);
            for (h = g.next(); !h.done; b = {
                    ec: b.ec
                }, h = g.next()) {
                f = h.value;
                h = f.code;
                var k = f.bids;
                f = void 0;
                if (h && null != (f = k) && f.length && (h = Qk(h, c), b.ec = h / 1E6, !(0 >= h))) {
                    var l = void 0;
                    f = {};
                    k = _.A(null != (l = k) ? l : []);
                    for (l = k.next(); !l.done; f = {
                            Pa: f.Pa,
                            Sc: f.Sc
                        }, l = k.next()) {
                        l = l.value;
                        f.Sc = "function" === typeof l.getFloor ? l.getFloor : void 0;
                        f.Pa = Rk(Sk(Tk(new Uk, 4), h), d);
                        l.getFloor = function(n, p) {
                            return function(r) {
                                4 === de(n.Pa, 1, 0) && Tk(n.Pa, 1);
                                var v, w = null == (v = n.Sc) ? void 0 : v.apply(a, [r]);
                                r = d ? w || {} : {
                                    currency: "USD",
                                    floor: p.ec
                                };
                                return null != w && w.floor ? (null == w ? 0 : w.currency) && "USD" !== w.currency ? (1 === de(n.Pa, 1, 0) && (r = Sk(Tk(n.Pa, 6), 1E6 * w.floor), _.z(r, 3, w.currency)), w) : (w.floor || 0) > p.ec ? (1 === de(n.Pa, 1, 0) && Sk(Tk(n.Pa, 5), 1E6 * w.floor), w) : r : r
                            }
                        }(f, b);
                        var m = void 0;
                        null == (m = e) || m.set(l.getFloor, f.Pa)
                    }
                }
            }
        }
    };
    cl = function(a, b, c, d, e, f) {
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var m;
            k = (null == (m = (0, E.K)(f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : m.bids) || []
        }
        g = k.filter(function(n) {
            return n.auctionId !== c && d.some(function(p) {
                return (F = p.xa(), _.u(F, "includes")).call(F, n.adId)
            })
        });
        g = _.A(g);
        for (h = g.next(); !h.done; h = g.next()) h = h.value, l = k = void 0, m = Wk(h, e, d, null == (k = f.adUnits) ? void 0 : null == (l = _.u(k, "find").call(k, function(n) {
            n = n.code;
            return n === b.getAdUnitPath() || n === b.getDomId()
        })) ? void 0 : l.mediaTypes), k = Xk(a, Yk(_.z(Zk($k(new al, h.bidder), 1), 6, !0), m)), "number" === typeof h.timeToRespond && bl(k, h.timeToRespond)
    };
    dl = function(a, b, c) {
        mk(a, 3) || (c === b.getAdUnitPath() ? _.z(a, 3, 1) : c === b.getDomId() && _.z(a, 3, 2))
    };
    fl = function(a, b, c, d, e, f, g) {
        f = null == f ? void 0 : f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : de(f, 1, 0)) && _.Rg(b, 5, f);
        wh(a, Uk, 5) || (f ? 1 === de(f, 1, 0) ? el(a, f) : el(a, Sk(Tk(Rk(new Uk, e), 1), Qk(c, d))) : el(a, Tk(Rk(new Uk, e), Qk(c, d) ? 2 : 3)))
    };
    Wk = function(a, b, c, d) {
        var e = a.cpm,
            f = a.originalCpm,
            g = a.currency,
            h = a.originalCurrency,
            k = a.dealId,
            l = a.adserverTargeting,
            m = a.bidder,
            n = a.adUnitCode,
            p = a.adId,
            r = a.mediaType,
            v = a.height,
            w = a.width,
            D = a.adUrl;
        a = a.ad;
        var B = new gl;
        "number" === typeof e && (_.z(B, 2, Math.round(1E6 * e)), h && h !== g || (e = Math.round(1E6 * Number(f)), isNaN(e) || e === Xi(B, 2) || _.z(B, 8, e)));
        "string" === typeof g && _.z(B, 3, g);
        "string" === typeof k && hl(B, il(k));
        if ("object" === typeof l)
            for (c = _.u(Object, "fromEntries").call(Object, c.map(function(M) {
                    return [y(M, 1), M.xa()]
                })), g = _.A(["", "_" + m]), k = g.next(); !k.done; k = g.next()) {
                k = k.value;
                e = [];
                f = _.A(_.u(Object, "entries").call(Object, l));
                for (h = f.next(); !h.done; h = f.next()) {
                    h = _.A(h.value);
                    var I = h.next().value;
                    h = h.next().value;
                    I = (I + k).slice(0, 20);
                    var S = void 0;
                    if (null != (S = c[I]) && S.length)
                        if (c[I][0] === String(h)) e.push(I);
                        else {
                            e = [];
                            break
                        }
                }
                jl(B, kl(B, 4).concat(e))
            }
        switch (r || "banner") {
            case "banner":
                _.z(B, 5, 1);
                break;
            case "native":
                _.z(B, 5, 2);
                gi("hbyg_nat", function(M) {
                    L(M, "pub_url", document.URL);
                    L(M, "b", m);
                    L(M, "auc", null != n ? n : "");
                    L(M, "hmt", Number(!!d));
                    var U;
                    L(M, "hat", Number(!!(null == d ? 0 : null == (U = d.native) ? 0 : U.adTemplate)))
                }, _.we(ll));
                break;
            case "video":
                _.z(B, 5, 3)
        }
        "number" === typeof v && "number" === typeof w && ml(B, nl(ol(w), v));
        "string" === typeof p && (_.z(B, 1, p), b.set(p, {
            height: v,
            width: w,
            adUrl: "string" === typeof D ? D : void 0,
            me: "string" === typeof a ? a : void 0,
            format: de(B, 5, 0),
            cpm: mk(B, 2) ? Xi(B, 2) : void 0
        }));
        return B
    };
    pl = function(a, b) {
        var c = new x.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.A(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Ld(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.A(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).tf = f)
            }
        }
        d = new x.Map;
        a = _.A(_.u(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.A(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.tf, g && h && d.set(f, {
            latency: h - g,
            Pd: !1
        });
        e = _.A(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Pd = !0;
        return d
    };
    ql = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return qj().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    sl = function(a, b) {
        return (0, E.sa)(fj(b, function() {
            return new rl(a, b)
        }))
    };
    ul = function(a, b, c, d) {
        for (var e = _.A(_.u(Object, "entries").call(Object, tl)), f = e.next(); !f.done; f = e.next()) {
            var g = _.A(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(c, d))
        }
    };
    Bl = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && G(c, 5)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? ke(c) : null;
            var e = 0;
            try {
                e |= vl(a, 2500);
                if (_.H(wl)) {
                    var f = _.xl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= yl(a);
                0 < b && !_.zl(_.Al(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    Hl = function(a, b, c, d, e, f) {
        d = El(d);
        if (5 !== d) return !1;
        var g = Bl(e, !Fl(c), f);
        if (g &= -134217729) gi("gpt_int_ns", function(h) {
            L(h, "nsr", g);
            mi(h, a)
        }, _.we(Gl)), ul(b, g, d, c.getAdUnitPath());
        return !!g
    };
    Il = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    Pl = function(a, b) {
        a = Il(a);
        if (!a) return null;
        var c = 0;
        if (11 !== a) {
            c |= _.t != _.t.top ? 512 : 0;
            var d = _.Jl(_.t);
            d = 26 !== a && 27 !== a && 40 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        if (2 === a || 1 === a) {
            d = {
                Fa: _.t,
                Rd: Kl,
                ve: b ? a : void 0
            };
            0 === (0, _.Ll)() && (d.Rd = 3E3, d.ef = 650);
            b = d.Fa;
            var e = d.ef,
                f = d.Rd,
                g = d.ve,
                h = d.Ta,
                k = d.ah;
            d = 0;
            try {
                d |= b != b.top ? 512 : 0;
                var l = Math.min(b.screen.width || 0, b.screen.height || 0);
                d |= l ? 320 > l ? 8192 : 0 : 2048;
                var m;
                if (m = b.navigator) {
                    var n = b.navigator.userAgent;
                    m = /Android 2/.test(n) || /iPhone OS [34]_/.test(n) || /Windows Phone (?:OS )?[67]/.test(n) || /MSIE.*Windows NT/.test(n) || /Windows NT.*Trident/.test(n)
                }
                d |= m ? 1048576 : 0;
                d = e ? d | (b.innerHeight >= e ? 0 : 1024) : d | (_.Ml(b) ? 0 : 8);
                d |= vl(b, f);
                d |= yl(b)
            } catch (p) {
                d |= 32
            }
            switch (g) {
                case 2:
                    l = h;
                    l = void 0 === l ? null : l;
                    m = Cg(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), Nl) + 15, 3);
                    null != Bg(b, m, void 0 === l ? null : l) && (d |= 16777216);
                    break;
                case 1:
                    l = h, l = void 0 === l ? null : l, m = b.innerWidth, n = b.innerHeight, e = Math.min(Math.round(b.innerWidth / 320 * 50), Nl) + 15, f = Cg(m, 3, n - e, n, 3), 25 < e && f.push({
                        x: m - 25,
                        y: n - 25
                    }), null != Bg(b, f, void 0 === l ? null : l) && (d |= 16777216)
            }
            k && (h = void 0 === h ? null : h, h = void 0 === h ? null : h, k = b.innerWidth, l = b.innerHeight, m = _.we(Ol), k = Cg(k, 10, l - m, l, 10), k = null != Bg(b, k, h));
            k && (d |= 16777216);
            c |= d
        } else 8 === a ? c |= Bl(_.t) : 11 !== a && (c |= 32);
        c || (b = _.Jl(_.t), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    Ql = function(a, b) {
        for (var c = new hi, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return ji(c)
    };
    Rl = function(a, b, c) {
        var d = void 0 === c.Ob ? "" : c.Ob;
        c = void 0 === c.oa ? "," : c.oa;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Sl = function(a, b, c, d) {
        var e = _.Ad("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Tl = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Vl = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Ul(b, c, d))) {
                    a: {
                        do {
                            var g = Sh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Wl = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Dd: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Dd: a.length - b.length + 8
        }
    };
    Xl = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Yl = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Xl(a, b)
    };
    $l = function(a, b) {
        var c = b.R;
        return Rl(a, function(d) {
            return Zl(c[d.getDomId()]).join("&")
        }, {
            oa: "|"
        })
    };
    Zl = function(a) {
        a = am(a);
        var b = [];
        _.hk(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    am = function(a) {
        for (var b = {}, c = _.A(Kj(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[(0, E.K)(Lj(d))] = d.xa();
        a = kl(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    bm = function(a) {
        var b = !1,
            c = Tc(a, Oj, 2).map(function(d) {
                var e = (0, E.K)(Lj(d));
                b = "excl_cat" === e;
                d = d.xa();
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = kl(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    cm = function(a) {
        var b, c;
        return null != (c = null == (b = _.u(a, "find").call(a, function(d) {
            return "page_url" === y(d, 1)
        })) ? void 0 : b.xa()[0]) ? c : null
    };
    dm = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    em = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Dd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    fm = function(a, b) {
        var c = b.R;
        return !!cm(b.V.ta()) || a.some(function(d) {
            return null !== cm(c[d.getDomId()].ta())
        })
    };
    im = function(a, b, c) {
        var d = null;
        try {
            var e = gm(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.V,
                    h = c.R[f.getDomId()],
                    k;
                f = null == (k = Wh(f, h, b.document, Ch(g, h))) ? void 0 : k.y;
                k = uh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++hm
            })
        } catch (f) {}
        return d
    };
    km = function(a, b, c, d) {
        return a.map(function(e) {
            if (c) {
                var f = d.R[e.getDomId()];
                f = Ah(f);
                if (e = b.j.get(e)) e.ub = f;
                return f
            }
            f = d.V;
            var g = d.R[e.getDomId()],
                h;
            if (!(h = jm(b, e))) {
                f = Ah(g, G(f, 6) || G(g, 17) ? null : Qh(e));
                if (e = b.j.get(e)) e.ub = f;
                h = f
            }
            return h
        }).join()
    };
    mm = function() {
        var a = void 0 === a ? window : a;
        lm = _.re(a)
    };
    nm = function(a, b) {
        return a && (a = Ke(a, oh, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    om = function(a, b) {
        return a && (a = Ke(a, oh, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    pm = function(a) {
        return a && (a = Ke(a, oh, 2)) ? a.getWidth() || 0 : 0
    };
    qm = function(a) {
        return a && (a = Ke(a, oh, 2)) ? a.getHeight() || 0 : 0
    };
    rm = function(a, b) {
        var c;
        return !(null != (c = G(a, 11)) ? !c : !G(b, 10))
    };
    sm = function(a, b, c, d) {
        if (a = Qh(a, b)) {
            var e;
            if (c = null != (e = G(c, 24)) ? e : G(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Tm = function(a, b, c, d, e, f, g, h, k) {
        if (a.yf) {
            var l = tm(um(new vm, wm(xm(new ym, b), c)), wm(xm(new ym, b), c));
            d = zm(new Am, Bm(Cm(Dm(Em(Fm(new Gm, f), g), Math.round(g / e * 100)), h), Math.round(h / (e * d) * 100)));
            b = Hm(new Im, Bm(Cm(Dm(Em(Fm(new Gm, f), g), Math.round(g / e * 100)), h), Math.round(h / (c * b) * 100)));
            k = Jm(Km(new Lm, [].concat(_.Ld(_.u(mh, "keys").call(mh))).map(function(m) {
                return Number(m)
            })), k);
            l = Mm(Nm(Om(Pm(Qm(Rm(Sm(l), d), b)), k), a.ne), 5, document.URL);
            Od(a.bb, l)
        }
    };
    Zm = function(a, b, c, d, e, f, g) {
        var h = new lf,
            k = new Um(a, d);
        J(h, k);
        f = new Vm(a, e, f);
        J(h, f);
        f = new Wm(a, b, e, g, k.Wa);
        J(h, f);
        b = new Xm(a, b, c, e, d, g, k.Wa);
        J(h, b);
        a = new Ym(a, k.Wa, b.l, f.l);
        J(h, a);
        zf(h);
        return {
            Wa: a.A,
            ua: h
        }
    };
    dn = function(a, b) {
        var c = window,
            d = new lf;
        c = new $m(c);
        _.an(d, c);
        b = new bn(a, c, b);
        J(d, b);
        a = new cn(a, c, b.Ab);
        J(d, a);
        zf(d);
        return {
            Ab: b.Ab,
            Md: a.l,
            ua: d
        }
    };
    gn = function(a, b, c, d) {
        var e = d.Id,
            f = d.adUnitPath;
        d = void 0 === d.kb ? !1 : d.kb;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && en(e)) ? fn(a, b, f, c, {
            Xa: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            kb: d
        }) : (b.error(kj("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    en = function(a) {
        return !!bj(Vj, function(b) {
            return b === a
        })
    };
    fn = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Xa: e.Xa,
            format: f,
            kb: e.kb
        });
        a = b.slotId;
        b = b.Va;
        a && b && (_.z(b, 15, f), _.hn(a, function() {
            var g = window,
                h = Il((0, E.K)(f));
            if (null != h) {
                g = _.Jl(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    on = function(a, b, c, d, e, f, g) {
        var h = document,
            k = c.getAdUnitPath();
        c = jn.get(de(c, 2, 0));
        if (k && c) {
            var l, m = null == (l = gn(a, g, f, {
                Id: c,
                adUnitPath: k,
                kb: _.H(kn)
            })) ? void 0 : l.j;
            m && (a = ln($h(), m.getSlotElementId()), d && null != a && Ze(a, 27, mn, d), b.cmd.push(function() {
                m.addService(b.pubads())
            }), nn(h, function() {
                b.display(m);
                G(e, 4) && b.pubads().refresh([m])
            }))
        }
    };
    tn = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = zh(c),
            e;
        return null == (e = Tc(a, pn, 1)) ? void 0 : e.some(function(f) {
            switch (Si(f, qn)) {
                case 1:
                    f = (0, E.K)(rn(f, sn, 1, qn));
                    if (mk(f, 1) && mk(f, 2)) {
                        var g = (0, E.K)(ee(f, 1));
                        f = 0 >= g || g > c.length ? !1 : (0, E.K)(ee(f, 2)) === zh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return (0, E.K)(ee(f, Ti(f, qn, 2))) === d;
                default:
                    return !1
            }
        })
    };
    vn = function(a) {
        var b;
        return null == (b = un(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.Ll)();
                case 4:
                    return 2 === (0, _.Ll)();
                case 3:
                    return 1 === (0, _.Ll)();
                default:
                    return !1
            }
        })
    };
    yn = function(a, b, c, d) {
        for (var e = document, f = [], g = [], h = _.A(Tc(b, wn, 3)), k = h.next(); !k.done; k = h.next())
            if (k = k.value, gf(k, 1) && gf(k, 2) && mk(k, 3) && mk(k, 4)) {
                var l = (0, E.K)(k.getAdUnitPath()),
                    m = e.querySelector(xn(k, 1));
                if (m && m.parentElement && (l = "gpt_opp_" + l, !e.getElementById(l))) {
                    var n = e.createElement("div");
                    n.id = l;
                    m.insertAdjacentElement("beforebegin", n);
                    if (k = a.defineSlot((0, E.K)(k.getAdUnitPath()), [k.getWidth(), k.getHeight()], l)) k.addService(a.pubads()), m = ln($h(), k.getSlotElementId()), c && (l = void 0, null != (l = m) && Ze(l, 27, mn, c)), g.push(k)
                }
            }
        mk(b, 1) && f.push((0, E.K)(ee(b, 1)));
        0 < g.length && nn(e, function() {
            for (var p = _.A(g), r = p.next(); !r.done; r = p.next()) a.display(r.value);
            G(d, 4) && a.pubads().refresh(g)
        });
        return f
    };
    Cn = function(a, b, c) {
        var d = zn(b, c);
        c = d.slotId;
        var e = d.ye;
        d = d.ze;
        if (c) {
            if (d = $h(), (b = ln(d, c.getDomId())) && !G(b, 19))
                if (e && d.D.set(c, e), Qh(c) || Bh(El(b)))
                    for (_.z(b, 19, !0), a = Mh(d.j, d.m), e = _.A(kl(b, 4)), b = e.next(); !b.done; b = e.next()) b = tj(b.value), b = (0, E.K)(ej.get((0, E.K)(b))), b.m && b.U(a, c);
                else O(a, An(String(b.getAdUnitPath()), String(b.getDomId())), c)
        } else d ? a.error(Bn(d)) : a.error(kj("googletag.display", [String(b)]))
    };
    zn = function(a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = Dn(b, c);
        else if (_.ia(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = Dn(b, c)
        } else b = (F = [].concat(_.Ld(b.W)), _.u(F, "find")).call(F, function(e) {
            return e.j === a
        });
        return {
            slotId: b,
            ye: d,
            ze: c
        }
    };
    En = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    Fn = function(a, b, c, d) {
        O(a, jk("googletag.setConfig.commerce", kk(b), c, kk(d)))
    };
    Gn = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    Hn = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    Kn = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.u(Object, "keys").call(Object, (0, E.K)(a)).some(function(d) {
                return (F = _.u(Object, "values").call(Object, In), _.u(F, "includes")).call(F, Number(d))
            })) return !0;
        Jn("taxonomies", a, b, c);
        return !1
    };
    Mn = function(a, b) {
        var c = Tc(b, Ln, 1).filter(function(d) {
            return de(d, 1, 0) !== a
        });
        Qc(b, 1, c)
    };
    Tn = function(a, b, c, d) {
        if (void 0 !== _.u(b, "values"))
            if (null === _.u(b, "values")) Mn(a, c);
            else if (Nn(_.u(b, "values"), d, b) && (b = On(a, _.u(b, "values"), d, b), b.length)) {
            var e = (F = Tc(c, Ln, 1), _.u(F, "find")).call(F, function(f) {
                return de(f, 1, 0) === a
            });
            e ? Pn(e, b) : Qn(c, Pn(Rn(new Ln, a), b));
            d.info(Sn(kk(b), kk(a)))
        }
    };
    Nn = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        Jn("taxonomyData.values", a, b, c);
        return !1
    };
    On = function(a, b, c, d) {
        var e = [],
            f = [],
            g = !1;
        b = _.A(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && Jn("taxonomyData.values", f, c, d);
        g && O(c, Un(kk(a), kk(5)));
        return e
    };
    Jn = function(a, b, c, d) {
        O(c, jk("googletag.setConfig.pps", kk(d), a, kk(b)))
    };
    Wn = function(a) {
        Vn = a
    };
    Yn = function() {
        for (var a = _.A(_.u(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), Ta(c, new Ra(b.textContent, Xn)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    Zn = function(a, b) {
        b = _.A(_.u(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.A(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    bo = function(a, b, c) {
        var d = [];
        c = [].concat(_.Ld(c.W)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, kj("googletag.destroySlots", [b])), !1;
            ka(b);
            d = c.filter(function(e) {
                return _.u(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        $n(d);
        ao(d);
        return !0
    };
    ho = function(a, b, c) {
        var d;
        if (Yl("google_content_service_disabled", c)) gi("gpt_scdvqp", function(e) {
            mi(e, a)
        }, 1);
        else if (!_.H(co)) return K(a, 817, function() {
            _.H(eo) && b.error(fo(), null, !0);
            null != d || (d = new go(a, b));
            return pj(a, b, d)
        })
    };
    uo = function(a, b, c, d, e, f) {
        var g = qj(),
            h;
        d = ho(a, b, d);
        var k = K(a, 74, function(m, n, p) {
                return f.defineSlot(a, b, m, n, p)
            }),
            l = {};
        k = (l._loaded_ = !0, l.cmd = [], l._vars_ = g._vars_, l.evalScripts = g.evalScripts, l.display = K(a, 95, function(m) {
            void Cn(b, m, f)
        }), l.defineOutOfPageSlot = K(a, 73, function(m, n) {
            return (m = gn(a, b, f, {
                Id: n,
                adUnitPath: m
            })) ? m.j : null
        }), l.getVersion = K(a, 946, function() {
            return a.mb ? String(a.mb) : a.Ha
        }), l.pubads = K(a, 947, function() {
            return zk(a, b, c, f)
        }), l.companionAds = K(a, 816, function() {
            null != h || (h = new io(a, b, c));
            return nj(a, b, h)
        }), l.setAdIframeTitle = K(a, 729, Wn), l.getEventLog = K(a, 945, function() {
            return new jo(a, b)
        }), l.sizeMapping = K(a, 90, function() {
            return new ko(a, b)
        }), l.enableServices = K(a, 91, function() {
            for (var m = _.A(lo), n = m.next(); !n.done; n = m.next()) n = n.value, n.m && b.info(mo()), n.enable()
        }), l.destroySlots = K(a, 75, function(m) {
            return bo(b, m, f)
        }), l.enums = Yj(), l.defineSlot = k, l.defineUnit = k, l.getWindowsThatCanCommunicateWithHostpageLibrary = K(a, 955, function(m) {
            return no(m)
        }), l.disablePublisherConsole = K(a, 93, wj), l.onPubConsoleJsLoad = K(a, 731, xj), l.openConsole = K(a, 732, function(m) {
            yj(a, void 0 === m ? "" : m)
        }), l.setConfig = K(a, 1034, function(m) {
            if (_.ia(m)) {
                var n = m.commerce,
                    p = m.pps;
                if (null === n) Ee(oo(e, po, 33), 1);
                else if (void 0 !== n)
                    if (m = oo(e, po, 33), _.ia(n)) {
                        var r = n.query,
                            v = n.categories,
                            w = n.productIds,
                            D = n.filter,
                            B = xc(qo(m, ro, 1));
                        null === r ? Ee(B, 1) : Gn(r) ? _.z(B, 1, r) : void 0 !== r && Fn(b, n, "query", r);
                        null === v ? _.z(B, 2, Ac) : Hn(v) ? _.jh(B, 2, v) : void 0 !== v && Fn(b, n, "categories", v);
                        null === w ? _.z(B, 3, Ac) : Hn(w) ? _.jh(B, 3, w) : void 0 !== w && Fn(b, n, "productIds", w);
                        null === D ? Ee(B, 4) : Gn(D) ? _.z(B, 4, D) : void 0 !== D && Fn(b, n, "filter", D);
                        gf(B, 1) || kl(B, 2).length ? _.Rg(m, 1, B) : O(b, so())
                    } else O(b, kj("googletag.setConfig.commerce", [n]));
                if (null === p) Ee(oo(e, po, 33), 2);
                else if (void 0 !== p && (n = oo(oo(e, po, 33), to, 2), "object" === typeof p && (0, E.K)(p).hasOwnProperty("taxonomies") ? m = !0 : (O(b, kj("googletag.setConfig.pps", [p])), m = !1), m))
                    if (m = p.taxonomies, void 0 === m) Jn("taxonomies", m, b, p);
                    else if (null === m) Qc(n, 1);
                else if (Kn(m, b, p))
                    for (p = _.A(_.u(Object, "entries").call(Object, m)), r = p.next(); !r.done; r = p.next()) {
                        r = _.A(r.value);
                        var I = r.next().value;
                        r = r.next().value;
                        v = n;
                        w = b;
                        B = m;
                        if (void 0 === I || null === I) Jn("taxonomy", I, w, B);
                        else {
                            D = Number(I);
                            var S = D,
                                M = w,
                                U = B;
                            (F = _.u(Object, "values").call(Object, Xj), _.u(F, "includes")).call(F, Number(S)) ? I = !0 : (Jn("taxonomy", I, M, U), I = !1);
                            I && void 0 !== r && (null === r ? Mn(D, v) : (I = w, "object" === typeof r && (0, E.K)(r).hasOwnProperty("values") ? B = !0 : (Jn("taxonomyData", r, I, B), B = !1), B && Tn(D, r, v, w)))
                        }
                    }
            } else O(b, kj("googletag.setConfig", [m]))
        }), l.apiReady = !0, l);
        d && (k.content = d);
        Zn(g, k)
    };
    vo = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.u(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    xo = function(a, b) {
        var c = _.we(wo);
        Math.random() <= c && je(b, a)
    };
    Ho = function(a, b, c) {
        var d = {};
        if (!c) return b.error(yo("missing data-rendering attribute")), d;
        try {
            var e = Wd(zo, Ao(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : wh(f, Bo, 1)) ? d.Bf = Co(Do(Eo(Fo(_.Zg(new Go, 4, 1), 7), a.Za || a.Ha), Ke(e, Bo, 1)), !0): b.error(yo("invalid data-rendering attribute"));
        var g;
        d.sf = null == (g = e) ? void 0 : xn(g, 2);
        var h;
        d.bd = null == (h = e) ? void 0 : xn(h, 3);
        return d
    };
    Ko = function(a, b) {
        var c, d, e, f, g, h, k, l, m, n;
        return _.eb(function(p) {
            c = Gj(b, "ai");
            if (!c || 0 === c.length) return p.return(x.Promise.resolve(b));
            d = Io();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(x.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.sg, m = l.resolve, n = l.promise, Jo(d.webkit.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(r) {
                m(b.replace("?", "?" + r + "&"))
            }, function() {
                m(b)
            }, function(r, v) {
                return _.Xg(a, r, v)
            }), p.return(n);
            return p.return(x.Promise.resolve(b))
        })
    };
    Lo = function(a, b, c, d) {
        var e, f, g;
        return _.eb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var m = [];
            for (n in l) ek(n, l[n], m);
            l = m.join("&");
            if (l) {
                m = -1;
                0 > m && (m = 0);
                var n = -1;
                if (0 > n || n > m) {
                    n = m;
                    var p = ""
                } else p = "".substring(n + 1, m);
                m = ["".slice(0, n), p, "".slice(m)];
                n = m[1];
                m[1] = l ? n ? n + "&" + l : l : n;
                l = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(Ko(a, g))
        })
    };
    Mo = function(a, b, c) {
        var d, e, f, g, h, k, l, m, n, p;
        return _.eb(function(r) {
            if (null == (d = c) ? 0 : null == (e = d.gmaSdk) ? 0 : e.getViewSignals) {
                if (f = c.gmaSdk.getViewSignals()) return g = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + f + "$2"), r.return(x.Promise.resolve(g))
            } else if (null == (h = c) ? 0 : null == (k = h.webkit) ? 0 : null == (l = k.messageHandlers) ? 0 : l.getGmaViewSignals) return m = new _.sg, n = m.resolve, p = m.promise, Jo(c.webkit.messageHandlers.getGmaViewSignals, {}, function(v) {
                n(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + v + "$2"))
            }, function() {
                n(b)
            }, function(v, w) {
                return _.Xg(a, v, w)
            }), r.return(p);
            return r.return(x.Promise.resolve(b))
        })
    };
    So = function(a, b) {
        var c = window;
        var d = void 0 === d ? nb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = Io(),
                g;
            null == (g = f ? new No(function(k, l) {
                return _.Xg(a, k, l)
            }, function() {}) : void 0) || Oo(g);
            var h = vo(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.P(e, h);
            e.prototype.connectedCallback = function() {
                var k = Ho(a, b, this.dataset.rendering),
                    l = k.Bf,
                    m = k.sf;
                k = k.bd;
                l && d(Po(window, l));
                m && Mo(a, m, f).then(function(n) {
                    return void Qo(n)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.bd = k, this.addEventListener("click", this.j)) : O(b, Ro(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && Lo(a, this, k, this.bd).then(function(m) {
                    return void Qo(m)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    To = function(a) {
        var b = {};
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[y(c, 1)] = y(c, 2);
        return b
    };
    Wo = function(a, b, c) {
        return new Uo(c, a, Vo, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                return "rewarded" === e.type && e.message === b ? e : null
            } catch (f) {
                return null
            }
        })
    };
    Xo = function(a) {
        .001 > ge() && je({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    bp = function(a, b, c, d) {
        d = d.Hf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? Yo : Zo)(a, b, c);
            case 1:
                return new $o(a, b, c);
            case 2:
                return new ap(a, b, c);
            default:
                Pa(e)
        }
    };
    cp = function(a) {
        if (!Ed(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    hp = function(a, b, c, d) {
        var e = Qh(a, document);
        e && zg(e, window, d, !0);
        dp(_.Lg($g), "5", (0, E.K)(y(c.R[a.getDomId()], 20)));
        a.dispatchEvent(ep, 801, {
            Fd: null,
            isBackfill: !1
        });
        if (_.fp(b, a) && !Zh(a, document)) {
            b = c.V;
            c = c.R[a.getDomId()];
            var f;
            (null != (f = G(c, 10)) ? f : G(b, 11)) && sm(a, document, c, b)
        }
        a.dispatchEvent(gp, 825, {
            isEmpty: !0
        })
    };
    jp = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new ip(a, b)
    };
    kp = function(a) {
        return mk(a, 1) ? mk(a, 3) && 0 !== (0, _.Ll)() ? (0, E.sa)(y(a, 1)) * (0, E.sa)(Ce(a, 3)) : y(a, 1) : null
    };
    lp = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new ip(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    sp = function(a, b) {
        for (var c = {}, d = _.A(Tc(a, mp, 7)), e = d.next(); !e.done; e = d.next()) e = e.value, c[xn(e, 1)] = JSON.parse(xn(e, 2));
        if (d = Ke(a, np, 6)) c["https://googleads.g.doubleclick.net"] = d.toJSON(), c["https://td.doubleclick.net"] = d.toJSON();
        d = {};
        e = _.A(Tc(a, op, 11));
        for (var f = e.next(); !f.done; f = e.next()) f = f.value, d[xn(f, 1)] = ee(f, 2);
        f = {};
        pp(a, 18) && (f["https://googleads.g.doubleclick.net"] = pp(a, 18), f["https://td.doubleclick.net"] = pp(a, 18));
        var g;
        e = {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: xn(a, 1),
            trustedScoringSignalsUrl: xn(a, 2),
            interestGroupBuyers: kl(a, 3),
            sellerExperimentGroupId: pp(a, 17),
            auctionSignals: JSON.parse(xn(a, 4) || "{}"),
            sellerSignals: (null == (g = Ke(a, qp, 5)) ? void 0 : g.toJSON()) || [],
            sellerTimeout: ee(a, 15) || 50,
            perBuyerExperimentGroupIds: f,
            perBuyerSignals: c,
            perBuyerTimeouts: d
        };
        c = new qp;
        "0" !== Kc(y(qo(qo(a, qp, 5), rp, 5), 2), "0") && (g = new rp, d = Kc(y(qo(qo(a, qp, 5), rp, 5), 2), "0"), Hc(g), null != d && 0 !== +d ? zc(g, 2, d) : zc(g, 2, void 0, !1), _.Rg(c, 5, g));
        return {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: xn(a, 1),
            sellerExperimentGroupId: pp(a, 17),
            sellerSignals: c.toJSON(),
            sellerTimeout: ee(a, 15) || 50,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [e].concat(_.Ld(null != b ? b : []))
        }
    };
    xp = function(a, b) {
        var c, d, e, f, g, h, k, l;
        return _.eb(function(m) {
            if (1 == m.j) return _.u(a, "startsWith").call(a, "urn:") && tp.deprecatedURNToURL && tp.deprecatedReplaceInURN ? fb(m, tp.deprecatedURNToURL(a), 2) : m.return();
            c = m.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(up)) ? f : []).forEach(function(n) {
                d[n] = e
            });
            g = b.Ke || "";
            (null != (h = c.match(vp)) ? h : []).forEach(function(n) {
                d[n] = g
            });
            k = b.oe || "";
            (null != (l = c.match(wp)) ? l : []).forEach(function(n) {
                d[n] = k
            });
            return fb(m, tp.deprecatedReplaceInURN(a, d), 0)
        })
    };
    zp = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = yp(c, 18),
            f = yp(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = xn(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        yp(c, 4) && (d += "&is_plog=1");
        (e = xn(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : yp(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Qo(d)
    };
    oq = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D) {
        var B = new lf,
            I = uh(!0, window),
            S = h.V,
            M = h.R[d.getDomId()],
            U = new Ap(a, window);
        J(B, U);
        var Y = k.Qb,
            la = k.ac,
            ca = k.Ie,
            Sa = k.Kd,
            gb = k.qe,
            Ga = k.Re,
            Fa = k.If,
            Ba = k.Je,
            qb = k.Fe,
            Bb = k.jc,
            le = k.Jf,
            af = k.Qe,
            bf = k.Ze,
            Bt = k.Ef,
            mg = k.Mf,
            wi = k.Nf,
            Cl = k.Ne,
            xi = k.qc,
            me = k.wa,
            Dl = k.fe,
            ng = k.Pf;
        k = k.mf;
        if (.01 > Math.random()) {
            v = new Bp(a, ng, v.M, Fa, Sa);
            J(B, v);
            var PC = v.A
        }
        la = new Cp(a, Y, la, me, ng, w, PC);
        J(B, la);
        Y = new Dp;
        Y.j(n);
        w = new Ep(a, window.top, Y);
        J(B, w);
        l = new Fp(a, console, l, w.A);
        J(B, l);
        me = new Gp(a, El(M), I.height, qb, la.Qb);
        J(B, me);
        l = new Hp(a, d, Qh(d, m), d.getDomId(), Yh(d), m, El(M), g);
        J(B, l);
        ng = new Ip(a, la.wa, gb, Ga, Fa);
        J(B, ng);
        Fa = new Jp(a, S, M, window, gb, Fa);
        J(B, Fa);
        mg = new Kp(a, Ke(S, Lp, 5), mg);
        J(B, mg);
        Bb = new Mp(a, d.getAdUnitPath(), M, I.width, window, Bb, la.ac, me.A, ng.A, l.A);
        J(B, Bb);
        me = new Np(a, M, Dl);
        J(B, me);
        e = new Op(a, g, n, e, Dl, me.A, Bb.wa, Bb.o);
        J(B, e);
        if (f) {
            var Ib = new Pp(a, d, h, g, Sa, e.F);
            J(B, Ib);
            D = new Qp(a, D, e.F);
            J(B, D);
            Ib = new Rp(a, Ib.l, D.A);
            J(B, Ib);
            Ib = Ib.A
        }
        D = new Sp(a, d, S, M, El(M), m, g, l.A, Fa.A, _.H(Tp) ? e.B : Bb.o, ca, Ib);
        J(B, D);
        f = new Up(a, D.A);
        J(B, f);
        n = new Vp(a, d, I, g, f.A, mg.l, Ib);
        J(B, n);
        f = new Wp(a, window, l.A);
        J(B, f);
        wi = new Xp(a, n.A, D.A, wi, mg.l, void 0, Ib);
        J(B, wi);
        I = new Yp(a, m, d, M, I, ca, l.A, D.A, _.H(Tp) ? e.B : Bb.o, Bb.jc, f.A, Sa, Ib);
        J(B, I);
        le = new Zp(a, S, M, e.wa, Fa.A, gb, le);
        J(B, le);
        xi = new $p(a, window, xi, U.A, Ib);
        J(B, xi);
        f = new aq(a, El(M), m);
        J(B, f);
        n = new bq(a, window);
        J(B, n);
        r = new cq(a, r, El(M), qb, Ba, Ib);
        J(B, r);
        bf = new dq(a, bf, Ib);
        J(B, bf);
        Ga = new eq(a, d, g, h, p, window, e.wa, Fa.A, wi.A, l.A, D.A, e.B, Sa, ca, le.A, Ga, af, Bt, I.A, xi.A, f.A, r.A, la.l, Dl, n.A, Ib);
        J(B, Ga);
        af = new fq(a, window, d, Ga.o, Y);
        J(B, af);
        qb = new gq(a, g, El(M), d, window, qb, Ga.l, l.A, r.A);
        J(B, qb);
        h = new hq(a, d, El(M), (0, E.K)(h.Hb), Ba, Ga.l, l.A, w.A, r.A, Sa);
        J(B, h);
        M = new iq(a, d, El(M), p, window, Ga.l, l.A);
        J(B, M);
        m = new jq(a, d, Ga.l, m, p);
        J(B, m);
        g = new kq(a, jm(g, d), window.top, Ga.l, U.A);
        J(B, g);
        d = new lq(a, d, ca, gb, Bt, Ga.l, D.A, Ga.B);
        J(B, d);
        Cl = new mq(a, window, Cl, Ga.l, D.A, l.A);
        J(B, Cl);
        J(B, new nq(a, qj(), S, b, c, k));
        return B
    };
    rq = function() {
        if (Ia()) {
            var a = Ka();
            var b = 0;
            a = pq(String(a)).split(".");
            for (var c = pq("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
                var f = a[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = qq(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || qq(0 == f[2].length, 0 == g[2].length) || qq(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            b = 0 <= b
        } else b = Da(Aa()), Ja(b), b = Ea() ? (b = b[2]) && b[1] || "" : "", "" === b ? b = NaN : (b = b.split("."), b = 0 === b.length ? NaN : Number(b[0])), b = 65 <= b;
        return b
    };
    sq = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new ip(a, {
            rootMargin: b
        })
    };
    tq = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = $a.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Ld(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.eb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.sg, g = b(f.resolve), h = ++e, fb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.hn(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Bq = function() {
        var a = new uq;
        var b = (new vq).setCorrelator(ye(_.t));
        var c = ze().join();
        b = _.Ic(b, 5, c, "");
        b = _.Zg(b, 2, 1);
        a = _.Rg(a, 1, b);
        b = new wq;
        c = _.H(xq);
        b = _.Ic(b, 7, c, !1);
        c = _.H(yq);
        b = _.Ic(b, 8, c, !1);
        c = _.H(zq);
        b = _.Ic(b, 9, c, !1);
        b = _.Ic(b, 10, !0, !1);
        c = _.H(Aq);
        b = _.Ic(b, 13, c, !1);
        b = _.Ic(b, 16, !0, !1);
        a = _.Rg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Dq = function() {
        var a = Cq,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (je({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    Gq = function() {
        var a = Eq() || fe() ? 1 : ge(),
            b = .001 > a,
            c = .001 > a;
        b ? (_.Lg(sk).H = !0, Fq(31067358)) : .002 > a && Fq(31067357);
        tk(23);
        return {
            Xb: b,
            bf: 1E3,
            zf: 1E-4 > a,
            af: 1E4,
            ee: b,
            Jd: 1E3,
            yf: c,
            ne: 1E3
        }
    };
    Jq = function(a) {
        var b = Dq();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = ye(window),
            e = window.document.URL,
            f = _.we(Hq);
        return _.u(Object, "assign").call(Object, {}, a, {
            Ha: b,
            Za: "",
            mb: c,
            pvsid: d,
            bb: new Iq(f),
            Ae: e
        })
    };
    Kq = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Lq = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Mq = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    Nq = Mq(this);
    Oq = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    x = {};
    Pq = {};
    _.u = function(a, b) {
        var c = Pq[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    Qq = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in x ? f = x : f = Nq;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Oq && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? Lq(x, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Pq[d] && (a = 1E9 * Math.random() >>> 0, Pq[d] = Oq ? Nq.Symbol(d) : "$jscp$" + a + "$" + d), Lq(f, Pq[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Qq("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            Lq(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    Qq("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, x.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = Nq[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Lq(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Rq(Kq(this))
                }
            })
        }
        return a
    }, "es6");
    Rq = function(a) {
        a = {
            next: a
        };
        a[_.u(x.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    Q = function(a) {
        return a.raw = a
    };
    _.A = function(a) {
        var b = "undefined" != typeof x.Symbol && _.u(x.Symbol, "iterator") && a[_.u(x.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: Kq(a)
        }
    };
    Sq = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.Ld = function(a) {
        return a instanceof Array ? a : Sq(_.A(a))
    };
    Tq = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Uq = Oq && "function" == typeof _.u(Object, "assign") ? _.u(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Tq(d, e) && (a[e] = d[e])
        }
        return a
    };
    Qq("Object.assign", function(a) {
        return a || Uq
    }, "es6");
    var Vq = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        Wq = function() {
            function a() {
                function c() {}
                new c;
                _.u(x.Reflect, "construct").call(x.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (Oq && "undefined" != typeof x.Reflect && _.u(x.Reflect, "construct")) {
                if (a()) return _.u(x.Reflect, "construct");
                var b = _.u(x.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.u(x.Reflect, "setPrototypeOf").call(x.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = Vq(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        Xq;
    if (Oq && "function" == typeof _.u(Object, "setPrototypeOf")) Xq = _.u(Object, "setPrototypeOf");
    else {
        var Yq;
        a: {
            var Zq = {
                    a: !0
                },
                $q = {};
            try {
                $q.__proto__ = Zq;
                Yq = $q.a;
                break a
            } catch (a) {}
            Yq = !1
        }
        Xq = Yq ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ar = Xq;
    _.P = function(a, b) {
        a.prototype = Vq(b.prototype);
        a.prototype.constructor = a;
        if (ar) ar(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Bh = b.prototype
    };
    br = function() {
        this.l = !1;
        this.I = null;
        this.m = void 0;
        this.j = 1;
        this.o = this.D = 0;
        this.C = null
    };
    cr = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    br.prototype.H = function(a) {
        this.m = a
    };
    var dr = function(a, b) {
        a.C = {
            Ld: b,
            Te: !0
        };
        a.j = a.D || a.o
    };
    br.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.o
    };
    fb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    ib = function(a, b) {
        a.j = b;
        a.D = 0
    };
    jb = function(a) {
        a.D = 0;
        var b = a.C.Ld;
        a.C = null;
        return b
    };
    er = function(a) {
        this.j = new br;
        this.m = a
    };
    hr = function(a, b) {
        cr(a.j);
        var c = a.j.I;
        if (c) return fr(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return gr(a)
    };
    fr = function(a, b, c, d) {
        try {
            var e = b.call(a.j.I, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.I = null, dr(a.j, g), gr(a)
        }
        a.j.I = null;
        d.call(a.j, f);
        return gr(a)
    };
    gr = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, dr(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.Te) throw b.Ld;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    ir = function(a) {
        this.next = function(b) {
            cr(a.j);
            a.j.I ? b = fr(a, a.j.I.next, b, a.j.H) : (a.j.H(b), b = gr(a));
            return b
        };
        this.throw = function(b) {
            cr(a.j);
            a.j.I ? b = fr(a, a.j.I["throw"], b, a.j.H) : (dr(a.j, b), b = gr(a));
            return b
        };
        this.return = function(b) {
            return hr(a, b)
        };
        this[_.u(x.Symbol, "iterator")] = function() {
            return this
        }
    };
    jr = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new x.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : x.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.eb = function(a) {
        return jr(new ir(new er(a)))
    };
    $a = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Qq("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Qq("Reflect.construct", function() {
        return Wq
    }, "es6");
    Qq("Reflect.setPrototypeOf", function(a) {
        return a ? a : ar ? function(b, c) {
            try {
                return ar(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Qq("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = Nq.setTimeout;
        b.prototype.D = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.I(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.I = function(g) {
            this.D(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.H = !1;
            var h = this.I();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.I = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.F),
                reject: g(this.C)
            }
        };
        e.prototype.F = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.J(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.va(g) : this.l(g)
            }
        };
        e.prototype.va = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.U();
            this.B()
        };
        e.prototype.U = function() {
            var g = this;
            d(function() {
                if (g.O()) {
                    var h = Nq.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.O = function() {
            if (this.H) return !1;
            var g = Nq.CustomEvent,
                h = Nq.Event,
                k = Nq.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = Nq.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.B = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.J = function(g) {
            var h = this.I();
            g.mc(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.I();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(v) {
                    try {
                        l(p(v))
                    } catch (w) {
                        m(w)
                    }
                } : r
            }
            var l, m, n = new e(function(p, r) {
                l = p;
                m = r
            });
            this.mc(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.mc = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.A(g), m = l.next(); !m.done; m = l.next()) c(m.value).mc(h, k)
            })
        };
        e.all = function(g) {
            var h = _.A(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(v) {
                    return function(w) {
                        p[v] = w;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).mc(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Qq("Object.setPrototypeOf", function(a) {
        return a || ar
    }, "es6");
    Qq("WeakMap", function(a) {
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
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.A(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Tq(g, d)) {
                var k = new b;
                Lq(g, d, {
                    value: k
                })
            }
            if (!Tq(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Tq(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Tq(g, d) && Tq(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && Tq(g, d) && Tq(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Qq("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.A([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.u(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new x.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.A(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.qa ? l.qa.value = k : (l.qa = {
                next: this.j,
                Ua: this.j.Ua,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.qa), this.j.Ua.next = l.qa, this.j.Ua = l.qa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.qa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.qa.Ua.next = h.qa.next, h.qa.next.Ua = h.qa.Ua, h.qa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Ua = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).qa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).qa) && h.value
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
            for (var l = _.u(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.u(x.Symbol, "iterator")] = _.u(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.m[l];
                if (m && Tq(h.m, l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            qa: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    qa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return Rq(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Ua;
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
                return h.Ua = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var kr = function(a, b) {
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
        e[_.u(x.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Qq("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return kr(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Qq("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return kr(this, function(b) {
                return b
            })
        }
    }, "es6");
    var lr = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Qq("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = lr(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var mr = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                ge: f
            }
        }
        return {
            i: -1,
            ge: void 0
        }
    };
    Qq("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return mr(this, b, c).ge
        }
    }, "es6");
    Qq("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Qq("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Qq("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof x.Symbol && _.u(x.Symbol, "iterator") && b[_.u(x.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Qq("Array.prototype.values", function(a) {
        return a ? a : function() {
            return kr(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Qq("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    Qq("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.A([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.u(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new x.Map;
            if (c) {
                c = _.A(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.u(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.u(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.u(b.prototype, "values");
        b.prototype[_.u(x.Symbol, "iterator")] = _.u(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Qq("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Tq(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Qq("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = lr(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Qq("globalThis", function(a) {
        return a || Nq
    }, "es_2020");
    Qq("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            for (var d = [], e = 0; e < this.length; e++) {
                var f = b.call(c, this[e], e, this);
                Array.isArray(f) ? d.push.apply(d, f) : d.push(f)
            }
            return d
        }
    }, "es9");
    Qq("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Qq("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.u(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Qq("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== lr(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Qq("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.P(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Qq("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.u(Array, "from").call(Array, b);
            return x.Promise.all(b.map(function(c) {
                return x.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new x.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Qq("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Tq(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Qq("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.u(x.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.u(x.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Qq("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return mr(this, b, c).i
        }
    }, "es6");
    Qq("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return x.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return x.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    _.t = this || self;
    Vc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    qa = function(a) {
        var b = Vc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ia = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ja = function(a) {
        return Object.prototype.hasOwnProperty.call(a, nr) && a[nr] || (a[nr] = ++or)
    };
    nr = "closure_uid_" + (1E9 * Math.random() >>> 0);
    or = 0;
    pr = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    qr = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.rr = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.rr = pr : _.rr = qr;
        return _.rr.apply(null, arguments)
    };
    _.sr = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    qe = function() {
        return Date.now()
    };
    var tr;
    var Wf = function(a, b) {
        this.j = a === ur && b || "";
        this.m = vr
    };
    Wf.prototype.Ra = !0;
    Wf.prototype.Na = function() {
        return this.j
    };
    var Xf = function(a) {
            return a instanceof Wf && a.constructor === Wf && a.m === vr ? a.j : "type_error:Const"
        },
        wr = function(a) {
            return new Wf(ur, a)
        },
        vr = {},
        ur = {};
    var mb = wr("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var xr, yr, Rh, Ar;
    xr = function() {
        return !0
    };
    yr = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Rh = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.zr = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Ar = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.t.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var Br, aa;
    Br = {
        passive: !0
    };
    aa = Rh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.cb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ba(d)), !0) : !1
    };
    _.Pd = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ba(d)), !0) : !1
    };
    var Lc, Dr;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Cr = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.pg = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    Lc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    Dr = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Hg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var dg = {
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
    var Xn = {},
        Ra = function(a, b) {
            this.j = b === Xn ? a : "";
            this.Ra = !0
        };
    Ra.prototype.toString = function() {
        return this.j.toString()
    };
    Ra.prototype.Na = function() {
        return this.j.toString()
    };
    var Zf = function(a, b) {
        this.j = b === Er ? a : ""
    };
    Zf.prototype.toString = function() {
        return this.j + ""
    };
    Zf.prototype.Ra = !0;
    Zf.prototype.Na = function() {
        return this.j.toString()
    };
    var Ua = function(a) {
            return a instanceof Zf && a.constructor === Zf ? a.j : "type_error:TrustedResourceUrl"
        },
        lb = function(a, b) {
            var c = Xf(a);
            if (!Fr.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Gr, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Wf ? Xf(d) : encodeURIComponent(String(d))
            });
            return Id(a)
        },
        Gr = /%{(\w+)}/g,
        Fr = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Hr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Er = {},
        Id = function(a) {
            return new Zf(a, Er)
        },
        Ir = function(a, b, c) {
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
    var Jr = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Jj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        pq = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        cg = function(a) {
            if (!Kr.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Lr, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Mr, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Nr, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Or, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Pr, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Qr, "&#0;"));
            return a
        },
        Lr = /&/g,
        Mr = /</g,
        Nr = />/g,
        Or = /"/g,
        Pr = /'/g,
        Qr = /\x00/g,
        Kr = /[\x00&<>"']/,
        qq = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var La = function(a, b) {
            this.j = b === Rr ? a : ""
        },
        Ma, ag, $f, Rr;
    La.prototype.toString = function() {
        return this.j.toString()
    };
    La.prototype.Ra = !0;
    La.prototype.Na = function() {
        return this.j.toString()
    };
    Ma = function(a) {
        return a instanceof La && a.constructor === La ? a.j : "type_error:SafeUrl"
    };
    ag = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    $f = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    Rr = {};
    _.ab = function(a) {
        return new La(a, Rr)
    };
    _.bg = _.ab("about:invalid#zClosurez");
    var Sr = {},
        Tr = function(a, b) {
            this.j = b === Sr ? a : "";
            this.Ra = !0
        };
    Tr.prototype.Na = function() {
        return this.j.toString()
    };
    Tr.prototype.toString = function() {
        return this.j.toString()
    };
    var Wa = function(a) {
            return a instanceof Tr && a.constructor === Tr ? a.j : "type_error:SafeHtml"
        },
        Ur = function(a) {
            return a instanceof Tr ? a : fg(cg("object" == typeof a && a.Ra ? a.Na() : String(a)))
        },
        Vr = function(a) {
            var b = Ur(Sf),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = Ur(e), c.push(Wa(e).toString()))
                };
            a.forEach(d);
            return fg(c.join(Wa(b).toString()))
        },
        eg = function(a) {
            return Vr(Array.prototype.slice.call(arguments))
        },
        fg = function(a) {
            return new Tr(a, Sr)
        },
        Uf = /^[a-zA-Z0-9-]+$/,
        Yf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Vf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Sf = new Tr(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", Sr);
    var Wr;
    try {
        new URL("s://g"), Wr = !0
    } catch (a) {
        Wr = !1
    }
    var Na = Wr;
    var Xr = {
            rg: 0,
            mg: 1,
            ng: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        Yr = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + Xr[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.P(Yr, Error);
    _.Ya = function(a) {
        this.We = a
    };
    _.Zr = [Za("data"), Za("http"), Za("https"), Za("mailto"), Za("ftp"), new _.Ya(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var hb = function(a) {
        return new x.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var $r = {};
    var pb, ob = "undefined" !== typeof TextEncoder;
    var as = function(a) {
        as[" "](a);
        return a
    };
    as[" "] = function() {};
    var bs = function(a, b) {
        try {
            return as(a[b]), !0
        } catch (c) {}
        return !1
    };
    var cs, es, fs, gs, hs, is;
    cs = Ca("Opera");
    _.ds = Ca("Trident") || Ca("MSIE");
    es = Ca("Edge");
    fs = Ca("Gecko") && !(-1 != Aa().toLowerCase().indexOf("webkit") && !Ca("Edge")) && !(Ca("Trident") || Ca("MSIE")) && !Ca("Edge");
    gs = -1 != Aa().toLowerCase().indexOf("webkit") && !Ca("Edge");
    hs = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var js = "",
            ks = function() {
                var a = Aa();
                if (fs) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (es) return /Edge\/([\d\.]+)/.exec(a);
                if (_.ds) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (gs) return /WebKit\/(\S+)/.exec(a);
                if (cs) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ks && (js = ks ? ks[1] : "");
        if (_.ds) {
            var ls = hs();
            if (null != ls && ls > parseFloat(js)) {
                is = String(ls);
                break a
            }
        }
        is = js
    }
    var ms = is,
        ns;
    if (_.t.document && _.ds) {
        var os = hs();
        ns = os ? os : parseInt(ms, 10) || void 0
    } else ns = void 0;
    var ps = ns;
    !Ca("Android") || Ha();
    Ha();
    Ia();
    var qs = {},
        rs = null,
        ss = fs || gs || "function" == typeof _.t.btoa,
        lc = function(a, b) {
            void 0 === b && (b = 0);
            ts();
            b = qs[b];
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
        us = function(a, b) {
            if (ss && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = lc(c, b)
            }
            return a
        },
        Ao = function(a) {
            var b = "";
            vs(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        tb = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            vs(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        vs = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = rs[l];
                    if (null != m) return m;
                    if (!Jj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            ts();
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
        ts = function() {
            if (!rs) {
                rs = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    qs[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === rs[f] && (rs[f] = e)
                    }
                }
            }
        };
    var vb = "undefined" !== typeof Uint8Array,
        Wi, wb = {};
    var ws, Ob = function(a, b) {
            xb(b);
            this.Eb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Pb = function() {
            return ws || (ws = new Ob(null, wb))
        },
        mc = function(a) {
            var b = a.Eb;
            return null == b ? "" : "string" === typeof b ? b : a.Eb = lc(b)
        };
    Ob.prototype.isEmpty = function() {
        return null == this.Eb
    };
    var Vi = function(a) {
        xb(wb);
        var b = ub(a.Eb);
        return null == b ? b : a.Eb = b
    };
    var yb = "function" === typeof x.Symbol && "symbol" === typeof(0, x.Symbol)() ? (0, x.Symbol)() : void 0;
    var Ub = {},
        xs, Ac, ys = [];
    Db(ys, 23);
    Ac = Object.freeze(ys);
    var Hc = function(a) {
            if (Fb(a.aa)) throw Error("Cannot mutate an immutable Message");
        },
        zs = function(a) {
            this.m = 0;
            this.j = a
        };
    zs.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    zs.prototype[_.u(x.Symbol, "iterator")] = function() {
        return this
    };
    var ic = function(a, b, c, d) {
            d = void 0 === d ? $b : d;
            c = Cb(a);
            c |= 32;
            Db(a, c);
            this.m = c;
            this.D = (this.I = b) ? Yb : Zb;
            this.l = d;
            this.j = b = new x.Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        },
        As = function(a) {
            if (a.m & 2) throw Error("Cannot mutate an immutable Map");
        },
        gc = function(a, b) {
            return new ic(b, a.I, a.D, a.l)
        },
        nc = function(a, b) {
            b = void 0 === b ? ac : b;
            for (var c = Bs(a), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = a.j.get(c[d]);
                c[d] = [b(e), b(f)]
            }
            return c
        },
        wc = function(a, b) {
            b = void 0 === b ? ac : b;
            var c = [];
            a = _.u(a.j, "entries").call(a.j);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    q = ic.prototype;
    q.clear = function() {
        As(this);
        this.j.clear();
        this.size = 0
    };
    q.delete = function(a) {
        As(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    q.entries = function() {
        for (var a = Bs(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new zs(a)
    };
    q.keys = function() {
        var a = Bs(this);
        return new zs(a)
    };
    q.values = function() {
        for (var a = Bs(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new zs(a)
    };
    q.forEach = function(a, b) {
        for (var c = Bs(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    q.set = function(a, b) {
        As(this);
        var c = this.j;
        if (null == b) return c.delete(a), this;
        c.set(a, this.D(b, this.I, !1, this.C));
        this.size = c.size;
        return this
    };
    q.get = function(a) {
        var b = this.j;
        if (b.has(a)) {
            var c = b.get(a),
                d = this.m,
                e = this.I;
            e && Array.isArray(c) && d & 16 && Hb(c);
            d = this.D(c, e, !!(d & 2), this.C);
            d !== c && b.set(a, d);
            return d
        }
    };
    q.has = function(a) {
        return this.j.has(a)
    };
    var Bs = function(a) {
        return _.u(Array, "from").call(Array, _.u(a.j, "keys").call(a.j)).sort(Wb)
    };
    ic.prototype[_.u(x.Symbol, "iterator")] = function() {
        return _.u(this, "entries").call(this)
    };
    var jc;
    var yc, y, mk, wh, un, Ce, G, Ui, de, Fc, Cc, Ee, Ds, Pi, Ti, Si, oo, Es, Cs, qo, Ke, Tc, Ug, Qc, Fs, Ze, kl, Mm, xn, yp, ee, pp, Xi, Gs, Is, rn, Js, Ks, Ls, gf;
    yc = function(a) {
        return a.j || (a.j = a.aa[a.m + a.eb] = {})
    };
    y = function(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : c && a.j && (c = a.j[b], null != c) ? c : a.aa[b + a.eb]
    };
    _.z = function(a, b, c, d) {
        Hc(a);
        return zc(a, b, c, d)
    };
    mk = function(a, b) {
        return null != y(a, b, !1)
    };
    wh = function(a, b, c) {
        return void 0 !== Cs(a, b, c, !1)
    };
    un = function(a, b) {
        return Bc(a, b, 0, !1, Fb(a.aa))
    };
    Ce = function(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    };
    G = function(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    };
    Ui = function(a, b) {
        var c = y(a, b),
            d = Qb(c, !0);
        null != d && d !== c && zc(a, b, d);
        return d
    };
    de = function(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    };
    Cc = function(a, b, c, d) {
        c = null == c ? Ac : Lb(c, 1);
        return _.z(a, b, c, d)
    };
    _.jh = function(a, b, c) {
        if (null == c) c = Ac;
        else {
            for (var d = 0; d < c.length; d++);
            c = Lb(c, 5)
        }
        return _.z(a, b, c)
    };
    Ee = function(a, b) {
        return _.z(a, b, void 0, !1)
    };
    Ds = function(a, b, c) {
        Hc(a);
        Bc(a, b, 2, !1, !1).push(c)
    };
    Pi = function(a, b, c, d) {
        Hc(a);
        (c = Si(a, c)) && c !== b && null != d && zc(a, c, void 0, !1);
        return zc(a, b, d)
    };
    Ti = function(a, b, c) {
        return Si(a, b) === c ? c : -1
    };
    Si = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != y(a, e) && (0 !== c && zc(a, c, void 0, !1), c = e)
        }
        return c
    };
    oo = function(a, b, c) {
        Hc(a);
        var d = y(a, c);
        b = Xb(Vb(d, b, !0));
        d !== b && zc(a, c, b);
        return b
    };
    Es = (0, x.Symbol)(void 0);
    Cs = function(a, b, c, d) {
        var e = y(a, c, d);
        b = Vb(e, b);
        b !== e && null != b && (zc(a, c, b, d), zb(b.aa, Cb(a.aa) & -33));
        return b
    };
    qo = function(a, b, c) {
        if (a = Cs(a, b, c, !1)) b = a;
        else if (a = b[Es]) b = a;
        else {
            a = new b;
            if ($r !== $r) throw Error("requires a valid immutable API token");
            Fb(a.aa) || ((c = a.D) && ec(c.aa, a.aa) ? a = c : (c = Pc(a, !0), Gb(c.aa), a = a.D = c));
            b = b[Es] = a
        }
        return b
    };
    Ke = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = Cs(a, b, c, d);
        if (null == b) return b;
        if (!Fb(a.aa)) {
            var e = Xb(b);
            e !== b && (b = e, zc(a, c, b, d))
        }
        return b
    };
    Tc = function(a, b, c, d) {
        var e = Fb(a.aa);
        b = Jc(a, b, c, d, e, e);
        a = Bc(a, c, 3, d, e);
        if (!e && a && !(Cb(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = Xb(c), c !== d && (b[e] = d, a[e] = b[e].aa);
            zb(a, 8)
        }
        return b
    };
    _.Rg = function(a, b, c) {
        Hc(a);
        null == c && (c = void 0);
        return zc(a, b, c)
    };
    Ug = function(a, b, c, d) {
        Hc(a);
        null == d && (d = void 0);
        return Pi(a, b, c, d)
    };
    Qc = function(a, b, c, d) {
        Hc(a);
        if (null != c) {
            var e = Eb([]);
            for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].aa, f = f || Fb(e[g]);
            a.Ba || (a.Ba = {});
            a.Ba[b] = c;
            c = e;
            f ? Ab(c, 8) : zb(c, 8)
        } else a.Ba && (a.Ba[b] = void 0), e = Ac;
        return zc(a, b, e, d)
    };
    Fs = function(a, b, c, d) {
        Hc(a);
        var e = Jc(a, c, b, void 0, !1, !1);
        c = null != d ? d : new c;
        a = Bc(a, b, 2, void 0, !1);
        e.push(c);
        a.push(c.aa);
        Fb(c.aa) && Ab(a, 8);
        return c
    };
    Ze = function(a, b, c, d) {
        Fs(a, b, c, d);
        return a
    };
    kl = function(a, b) {
        return Dc(a, b, Tb, !1)
    };
    Mm = function(a, b, c) {
        return _.z(a, b, c)
    };
    xn = function(a, b) {
        return Kc(y(a, b), "")
    };
    yp = function(a, b, c) {
        return Kc(G(a, b), void 0 === c ? !1 : c)
    };
    ee = function(a, b) {
        return Kc(y(a, b), 0)
    };
    pp = function(a, b) {
        return Kc(y(a, b), 0)
    };
    Xi = function(a, b) {
        return Kc(y(a, b), 0)
    };
    Gs = function(a, b) {
        return xn(a, Ti(a, b, 2))
    };
    Is = function(a) {
        return Xi(a, Ti(a, Hs, 3))
    };
    rn = function(a, b, c, d) {
        return Ke(a, b, Ti(a, d, c))
    };
    Js = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    Ks = function(a, b) {
        a = G(a, b);
        return null == a ? void 0 : a
    };
    Ls = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    _.Zg = function(a, b, c) {
        return _.Ic(a, b, c, 0)
    };
    gf = function(a, b) {
        return null != y(a, b)
    };
    _.R = function(a, b, c) {
        null == a && (a = jc);
        jc = void 0;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            Db(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = zb(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var m = a[a.length - 1];
                        if (Mb(m) && "g" in m) {
                            d = 0;
                            l |= 128;
                            delete m.g;
                            var n = !0,
                                p;
                            for (p in m) {
                                n = !1;
                                break
                            }
                            n && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && Db(a, l)
        }
        this.eb = (f ? 0 : -1) - d;
        this.Ba = void 0;
        this.aa = a;
        a: {
            f = this.aa.length;d = f - 1;
            if (f && (f = this.aa[d], Mb(f))) {
                this.j = f;
                this.m = d - this.eb;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.eb), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.m;
            var r;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.eb, (d = a[g]) ? Rc(d, b) : a[g] = Ac) : (r || (r = yc(this)), (d = r[g]) ? Rc(d, b) : r[g] = Ac)
        }
    };
    _.R.prototype.toJSON = function() {
        var a = this.aa;
        return xs ? a : pc(a, rc, sc)
    };
    var ae = function(a) {
            xs = !0;
            try {
                return JSON.stringify(a.toJSON(), Sc)
            } finally {
                xs = !1
            }
        },
        Wd = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            return kc(a, Hb(b))
        },
        xc = function(a) {
            var b = pc(a.aa, uc, Jb);
            Hb(b);
            jc = b;
            b = new a.constructor(b);
            jc = void 0;
            Uc(b, a);
            return b
        },
        Xb = function(a) {
            if (Fb(a.aa)) {
                var b = Pc(a, !1);
                b.D = a;
                a = b
            }
            return a
        };
    _.R.prototype.Ec = Ub;
    var Xc = 0,
        Yc = 0,
        $c = "function" === typeof BigInt;
    var Ms = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        Os = function(a) {
            if (!a) return Ns || (Ns = new Ms(0, 0));
            if (!/^\d+$/.test(a)) return null;
            ad(a);
            return new Ms(Xc, Yc)
        },
        Ns, Ps = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        qd = function(a) {
            if (!a) return Qs || (Qs = new Ps(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            ad(a);
            return new Ps(Xc, Yc)
        },
        Qs;
    var Rs = function() {
        this.j = []
    };
    Rs.prototype.length = function() {
        return this.j.length
    };
    Rs.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var sd = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        rd = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        Ss = function(a, b) {
            if (0 <= b) rd(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var Ts = function() {
            this.D = [];
            this.m = 0;
            this.j = new Rs
        },
        Us = function(a, b) {
            0 !== b.length && (a.D.push(b), a.m += b.length)
        },
        Vs = function(a, b) {
            rd(a.j, 8 * b + 2);
            b = a.j.end();
            Us(a, b);
            b.push(a.m);
            return b
        },
        Ws = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        dd = function(a, b) {
            if (b = b.zb) {
                Us(a, a.j.end());
                for (var c = 0; c < b.length; c++) Us(a, Vi(b[c]) || Wi || (Wi = new Uint8Array(0)))
            }
        },
        Xs = function(a, b, c) {
            rd(a.j, 8 * b + 2);
            rd(a.j, c.length);
            Us(a, a.j.end());
            Us(a, c)
        };
    var id = (0, x.Symbol)(),
        gd = (0, x.Symbol)(),
        fd = (0, x.Symbol)(),
        Ue = function(a, b) {
            var c = new Ts;
            kd(a, c, jd(b));
            Us(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.D;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.D = [a];
            return a
        },
        Ys = pd(function(a, b, c) {
            if (5 !== a.j()) return !1;
            _.z(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = Ce(b, c);
            if (null != b) {
                rd(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? Xc = Yc = 0 : (Yc = 0, Xc = 2147483648) : isNaN(d) ? (Yc = 0, Xc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (Yc = 0, Xc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), Yc = 0, Xc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, Yc = 0, Xc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = Xc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        Zs = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.B());
            return !0
        }, td),
        $s = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.o());
            return !0
        }, td),
        at = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.O());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && ("string" === typeof b && Os(b), null != b && (rd(a.j, 8 * c), "number" === typeof b ? (a = a.j, Zc(b), sd(a, Xc, Yc)) : (c = Os(b), sd(a.j, c.m, c.j))))
        }),
        bt = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && null != b && (rd(a.j, 8 * c), Ss(a.j, b))
        }),
        ct = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = G(b, c);
            null != b && (rd(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        dt = pd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            _.z(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && Xs(a, c, rb(b))
        }),
        et = pd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            Ds(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = kl(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && Xs(a, c, rb(e))
                }
        }),
        ft = pd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(oo(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Ke(b, d, c);
            null != b && (c = Vs(a, c), e(b, a), Ws(a, c))
        }),
        gt = pd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Fs(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Tc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = Vs(a, c);
                    e(b[d], a);
                    Ws(a, f)
                }
        }),
        ht = pd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && (b = parseInt(b, 10), rd(a.j, 8 * c), Ss(a.j, b))
        });
    var E = {
        qg: function() {},
        eh: function() {
            return ""
        },
        kg: function() {}
    };
    E.jd = ud;
    var it = ud(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    E.assert = function() {};
    E.sa = function(a) {
        return a
    };
    var vd = void 0;
    E.rh = wd;
    E.th = xd;
    E.Yg = function() {};
    E.Zg = function(a) {
        return a
    };
    E.Xd = yd;
    E.vh = function(a, b) {
        yd(a, b);
        return a
    };
    E.Xg = function() {};
    E.K = function(a) {
        return a
    };
    E.sh = function(a, b) {
        wd(a, it, b)
    };
    E.uh = function(a, b) {
        return xd(a, it, b)
    };
    E.bh = function(a, b) {
        return a(b)
    };
    E.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    E.mh = function(a) {
        yd(!vd);
        vd = function() {
            var b = "function" === typeof a ? a() : a;
            vd = void 0;
            return b
        }
    };
    var Go = function(a) {
        _.R.call(this, a)
    };
    _.P(Go, _.R);
    var Do = function(a, b) {
            return _.Rg(a, 5, b)
        },
        Fo = function(a, b) {
            return _.Zg(a, 2, b)
        },
        Eo = function(a, b) {
            return _.Ic(a, 3, b, "")
        },
        Co = function(a, b) {
            return _.Ic(a, 6, b, !1)
        },
        Bo = function(a) {
            _.R.call(this, a)
        };
    _.P(Bo, _.R);
    var jt = function(a, b) {
        return _.Ic(a, 1, b, "")
    };
    var kt = function(a) {
            this.j = a.m;
            this.m = a.D;
            this.I = a.I;
            this.Ub = a.Ub;
            this.G = a.G;
            this.Cb = a.Cb;
            this.Bc = a.Bc;
            this.Nc = a.Nc;
            this.Ac = a.Ac;
            this.D = a.j
        },
        lt = function(a, b, c) {
            this.m = a;
            this.D = b;
            this.I = c;
            this.G = window;
            this.Cb = "env";
            this.Bc = "n";
            this.Nc = "0";
            this.Ac = "1";
            this.j = !0
        };
    lt.prototype.build = function() {
        return new kt(this)
    };
    var Po = function(a, b) {
        var c = void 0 === yp(b, 6) ? !0 : yp(b, 6),
            d, e;
        a: switch (de(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new lt(zd(de(b, 2, 0)), xn(b, 3), f);
        b = null != (e = null == (d = Ke(b, Bo, 5)) ? void 0 : xn(d, 1)) ? e : "";
        f.Ub = b;
        f.j = c;
        f.G = a;
        return f.build()
    };
    var Uk = function(a) {
        _.R.call(this, a)
    };
    _.P(Uk, _.R);
    var Tk = function(a, b) {
            return _.z(a, 1, b)
        },
        Rk = function(a, b) {
            return _.z(a, 4, b)
        },
        Sk = function(a, b) {
            return _.z(a, 2, b)
        },
        mt = [Uk, 1, ht, 4, ct, 2, bt, 3, dt];
    var al = function(a) {
        _.R.call(this, a, -1, nt)
    };
    _.P(al, _.R);
    var $k = function(a, b) {
            return _.z(a, 1, b)
        },
        bl = function(a, b) {
            _.z(a, 2, b)
        },
        Yk = function(a, b) {
            return Ze(a, 3, gl, b)
        },
        Zk = function(a, b) {
            return _.z(a, 4, b)
        };
    al.prototype.Nd = function() {
        return de(this, 7, 0)
    };
    var gl = function(a) {
        _.R.call(this, a, -1, ot)
    };
    _.P(gl, _.R);
    var jl = function(a, b) {
            _.jh(a, 4, b)
        },
        hl = function(a, b) {
            _.Rg(a, 6, b)
        },
        ml = function(a, b) {
            _.Rg(a, 7, b)
        },
        pt = function(a) {
            _.R.call(this, a)
        };
    _.P(pt, _.R);
    pt.prototype.getId = function() {
        return xn(this, 1)
    };
    var il = function(a) {
            var b = new pt;
            return _.z(b, 1, a)
        },
        qt = function(a) {
            _.R.call(this, a)
        };
    _.P(qt, _.R);
    qt.prototype.getWidth = function() {
        return ee(this, 1)
    };
    var ol = function(a) {
        var b = new qt;
        return _.z(b, 1, a)
    };
    qt.prototype.getHeight = function() {
        return ee(this, 2)
    };
    var nl = function(a, b) {
            return _.z(a, 2, b)
        },
        rt = function(a) {
            _.R.call(this, a)
        };
    _.P(rt, _.R);
    var nt = [3],
        ot = [4],
        st = [al, 1, dt, 2, $s, 3, gt, [gl, 1, dt, 2, $s, 8, $s, 3, dt, 4, et, 5, ht, 6, ft, [pt, 1, dt], 7, ft, [qt, 1, bt, 2, bt], 9, ft, [rt, 1, $s, 2, ct]], 4, ht, 5, ft, mt, 6, ct, 7, ht];
    var tt = function(a) {
        _.R.call(this, a)
    };
    _.P(tt, _.R);
    var ut = [tt, 1, ht, 2, ct];
    var wt = function(a) {
        _.R.call(this, a, -1, vt)
    };
    _.P(wt, _.R);
    var Xk = function(a, b) {
            return Fs(a, 2, al, b)
        },
        el = function(a, b) {
            _.Rg(a, 5, b)
        },
        vt = [2],
        xt = [wt, 1, ht, 6, dt, 2, gt, st, 3, ht, 4, dt, 5, ft, mt, 9, ft, ut, 7, ct, 8, bt];
    var zt = function(a) {
        _.R.call(this, a, -1, yt)
    };
    _.P(zt, _.R);
    var At = function(a) {
            var b = new wt;
            b = _.z(b, 1, 1);
            return Fs(a, 1, wt, b)
        },
        yt = [1],
        Ct = [zt, 1, gt, xt];
    var Et = function(a) {
        _.R.call(this, a, -1, Dt)
    };
    _.P(Et, _.R);
    var Gt = function(a) {
        _.R.call(this, a, -1, Ft)
    };
    _.P(Gt, _.R);
    var Ht = function(a) {
        _.R.call(this, a)
    };
    _.P(Ht, _.R);
    var Dt = [1],
        Ft = [1],
        Hs = [2, 3];
    var It = function(a) {
        _.R.call(this, a)
    };
    _.P(It, _.R);
    It.prototype.na = function() {
        return xn(this, 1)
    };
    It.prototype.I = function() {
        return Gs(this, Jt)
    };
    var Jt = [2, 3];
    var ff = function(a) {
        _.R.call(this, a, -1, Kt)
    };
    _.P(ff, _.R);
    ff.prototype.Ya = function() {
        return xn(this, 1)
    };
    ff.prototype.yc = function() {
        return gf(this, 1)
    };
    ff.prototype.Pb = function() {
        return Tc(this, It, 2)
    };
    var Kt = [2];
    var Mt = function(a) {
        _.R.call(this, a, -1, Lt)
    };
    _.P(Mt, _.R);
    Mt.prototype.Ya = function() {
        return xn(this, 1)
    };
    Mt.prototype.yc = function() {
        return gf(this, 1)
    };
    var Lt = [4];
    var Nt = function(a) {
        _.R.call(this, a)
    };
    _.P(Nt, _.R);
    var Pt = function(a) {
        _.R.call(this, a, -1, Ot)
    };
    _.P(Pt, _.R);
    Pt.prototype.xc = function() {
        return qo(this, Nt, 2)
    };
    var Ot = [1];
    var Rt = function(a) {
        _.R.call(this, a, -1, Qt)
    };
    _.P(Rt, _.R);
    var St = function(a) {
        _.R.call(this, a)
    };
    _.P(St, _.R);
    St.prototype.Ya = function() {
        return xn(this, 1)
    };
    St.prototype.yc = function() {
        return gf(this, 1)
    };
    var Qt = [1];
    var Tt = function(a) {
        _.R.call(this, a)
    };
    _.P(Tt, _.R);
    Tt.prototype.getAdUnitPath = function() {
        return xn(this, 1)
    };
    var Ut = function(a) {
        _.R.call(this, a)
    };
    _.P(Ut, _.R);
    var Vt = [Ut, 1, Zs];
    var mn = function(a) {
        _.R.call(this, a)
    };
    _.P(mn, _.R);
    mn.prototype.getEscapedQemQueryId = function() {
        return xn(this, 1)
    };
    var Wt = function(a) {
        _.R.call(this, a)
    };
    _.P(Wt, _.R);
    var Xt = [mn, 1, dt, 2, ft, Vt, 3, ft, [Wt, 1, ht, 2, $s]];
    var Zt = function(a) {
        _.R.call(this, a, -1, Yt)
    };
    _.P(Zt, _.R);
    var pn = function(a) {
        _.R.call(this, a)
    };
    _.P(pn, _.R);
    var sn = function(a) {
        _.R.call(this, a)
    };
    _.P(sn, _.R);
    var Yt = [1, 2],
        qn = [1, 2];
    var wn = function(a) {
        _.R.call(this, a)
    };
    _.P(wn, _.R);
    wn.prototype.getAdUnitPath = function() {
        return xn(this, 2)
    };
    wn.prototype.getWidth = function() {
        return ee(this, 3)
    };
    wn.prototype.getHeight = function() {
        return ee(this, 4)
    };
    var au = function(a) {
        _.R.call(this, a, -1, $t)
    };
    _.P(au, _.R);
    var $t = [3];
    var bu = function(a) {
        _.R.call(this, a)
    };
    _.P(bu, _.R);
    var cu = [5, 6, 7, 8];
    var eu = function(a) {
        _.R.call(this, a, -1, du)
    };
    _.P(eu, _.R);
    var du = [4, 5, 6];
    var fu = function(a) {
        _.R.call(this, a)
    };
    _.P(fu, _.R);
    fu.prototype.yb = function() {
        return gf(this, 2)
    };
    var hu = function(a) {
        _.R.call(this, a, -1, gu)
    };
    _.P(hu, _.R);
    var gu = [13];
    var ju = function(a) {
        _.R.call(this, a, -1, iu)
    };
    _.P(ju, _.R);
    var iu = [13];
    var Pe = function(a) {
        _.R.call(this, a, -1, ku)
    };
    _.P(Pe, _.R);
    var lu = function(a) {
        _.R.call(this, a)
    };
    _.P(lu, _.R);
    var mu = function(a) {
        _.R.call(this, a)
    };
    _.P(mu, _.R);
    var nu = function(a) {
        _.R.call(this, a)
    };
    _.P(nu, _.R);
    var Te = function(a) {
        _.R.call(this, a)
    };
    _.P(Te, _.R);
    Te.prototype.na = function() {
        return y(this, 1)
    };
    var Ye = function(a) {
            var b = new Te;
            return _.z(b, 1, a)
        },
        Ie = function(a, b) {
            return _.Rg(a, 10, b)
        },
        Le = function(a) {
            _.R.call(this, a)
        };
    _.P(Le, _.R);
    var Je = function(a, b) {
            return _.z(a, 1, b)
        },
        ku = [1, 2],
        ou = [mu, 1, at, 2, at, 3, at],
        Ve = [Pe, 1, gt, [lu, 5, dt, 4, dt, 2, ft, ou, 3, ft, ou, 6, ct, 7, ft, [nu, 4, ht, 5, dt], 8, $s], 2, gt, [Te, 1, dt, 2, dt, 3, $s, 7, $s, 8, Ys, 4, bt, 5, bt, 6, bt, 9, ct, 11, ct, 10, ft, [Le, 1, ht]]];
    var pu = function(a) {
        _.R.call(this, a)
    };
    _.P(pu, _.R);
    pu.prototype.na = function() {
        return xn(this, 1)
    };
    pu.prototype.I = function() {
        return Gs(this, qu)
    };
    var qu = [2, 3];
    var su = function(a) {
        _.R.call(this, a, -1, ru)
    };
    _.P(su, _.R);
    su.prototype.Pb = function() {
        return Tc(this, pu, 1)
    };
    var ru = [1];
    var tu = function(a) {
        _.R.call(this, a)
    };
    _.P(tu, _.R);
    var uu = function(a) {
        _.R.call(this, a)
    };
    _.P(uu, _.R);
    uu.prototype.yb = function() {
        return gf(this, 1)
    };
    uu.prototype.getVersion = function() {
        return y(this, 5)
    };
    var vu = function(a) {
        _.R.call(this, a)
    };
    _.P(vu, _.R);
    var wu = function(a) {
        _.R.call(this, a)
    };
    _.P(wu, _.R);
    var np = function(a) {
        _.R.call(this, a, -1, xu)
    };
    _.P(np, _.R);
    np.prototype.getEscapedQemQueryId = function() {
        return xn(this, 4)
    };
    var xu = [2];
    var mp = function(a) {
        _.R.call(this, a)
    };
    _.P(mp, _.R);
    var op = function(a) {
        _.R.call(this, a)
    };
    _.P(op, _.R);
    var qp = function(a) {
        _.R.call(this, a)
    };
    _.P(qp, _.R);
    qp.prototype.getEscapedQemQueryId = function() {
        return xn(this, 2)
    };
    var rp = function(a) {
        _.R.call(this, a)
    };
    _.P(rp, _.R);
    var zu = function(a) {
        _.R.call(this, a, -1, yu)
    };
    _.P(zu, _.R);
    zu.prototype.getWidth = function() {
        return ee(this, 9)
    };
    zu.prototype.getHeight = function() {
        return ee(this, 10)
    };
    var yu = [3, 7, 11];
    var Bu = function(a) {
        _.R.call(this, a, -1, Au)
    };
    _.P(Bu, _.R);
    Bu.prototype.getHeight = function() {
        return y(this, 6)
    };
    Bu.prototype.getWidth = function() {
        return y(this, 7)
    };
    Bu.prototype.getEscapedQemQueryId = function() {
        return y(this, 34)
    };
    var Cu = function(a) {
        _.R.call(this, a)
    };
    _.P(Cu, _.R);
    Cu.prototype.getHtml = function() {
        return Ui(this, 1)
    };
    var Au = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        Du = [4, 41],
        Eu = [39, 48];
    var zo = function(a) {
        _.R.call(this, a)
    };
    _.P(zo, _.R);
    var Gu = function(a) {
        _.R.call(this, a, -1, Fu)
    };
    _.P(Gu, _.R);
    var Fu = [1, 2];
    var Hu = window;
    var wq = function(a) {
        _.R.call(this, a, -1, Iu)
    };
    _.P(wq, _.R);
    var Iu = [15];
    var vq = function(a) {
        _.R.call(this, a)
    };
    _.P(vq, _.R);
    vq.prototype.getCorrelator = function() {
        return Xi(this, 1)
    };
    vq.prototype.setCorrelator = function(a) {
        return _.Ic(this, 1, a, 0)
    };
    var uq = function(a) {
        _.R.call(this, a)
    };
    _.P(uq, _.R);
    var Ju = _.ds || gs;
    var Ku = /^[\w+/_-]+[=]{0,2}$/,
        Lu = function() {
            var a = _.t.document;
            return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ku.test(a) ? a : "" : ""
        };
    _.Gh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Gh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Gh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Gh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Jh = function(a, b) {
        this.width = a;
        this.height = b
    };
    q = _.Jh.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Mu, Nu, Ou, Qu;
    Mu = function(a) {
        return a = cg(a)
    };
    Nu = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qe()).toString(36)
    };
    Ou = 2147483648 * Math.random() | 0;
    _.Pu = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Qu = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Tu, Vu, Uu, Yu, $u, Cd, Fd, Ru;
    Tu = function(a) {
        return a ? new Ru(_.Su(a)) : tr || (tr = new Ru)
    };
    Vu = function(a, b) {
        va(b, function(c, d) {
            c && "object" == typeof c && c.Ra && (c = c.Na());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Uu.hasOwnProperty(d) ? a.setAttribute(Uu[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    Uu = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Xu = function(a) {
        a = a.document;
        a = _.Wu(a) ? a.documentElement : a.body;
        return new _.Jh(a.clientWidth, a.clientHeight)
    };
    Yu = function(a) {
        return a.scrollingElement ? a.scrollingElement : !gs && _.Wu(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Zu = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    $u = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!qa(f) || _.ia(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ia(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.Cr(g ? fa(f) : f, d)
            }
        }
    };
    _.Wu = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.av = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.bv = function(a) {
        var b;
        if (Ju && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ia(b) && 1 == b.nodeType ? b : null
    };
    _.cv = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    Cd = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.Su = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Fd = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Zu(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    Ru = function(a) {
        this.j = a || _.t.document || document
    };
    q = Ru.prototype;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    q.append = function(a, b) {
        $u(_.Su(a), a, arguments)
    };
    q.je = _.av;
    q.contains = _.cv;
    var dv = function() {
        return Ca("iPad") || Ca("Android") && !Ca("Mobile") || Ca("Silk")
    };
    var fv, ek, gv, Gj;
    _.ev = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    fv = function(a) {
        return a ? decodeURI(a) : a
    };
    ek = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) ek(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    gv = /#|$/;
    Gj = function(a, b) {
        var c = a.search(gv);
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
    var Ed, Dd, Bf, hv, Cf, Ej, Sh, ge, bj, zh, fe, he, Eq, jv, kv, Th, lv, mv, nv, ov, pv, qv, rv, sv, tv, ri, ti, si, uv, vv, xv, yv, zv, Av, Bv, ye, Cv, nn, Ak, Dv, Ev, kk, Fv;
    Ed = function(a) {
        try {
            return !!a && null != a.location.href && bs(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Dd = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? hv(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Ed(c) || !a(c));) c = hv(c)
    };
    Bf = function() {
        var a = window;
        Dd(function(b) {
            a = b;
            return !1
        });
        return a
    };
    hv = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Cf = function(a) {
        return Ed(a.top) ? a.top : null
    };
    Ej = function(a, b) {
        var c = _.Ad("SCRIPT", a);
        Va(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Sh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    ge = function() {
        if (!x.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            x.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.hk = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.iv = function(a) {
        var b = [];
        _.hk(a, function(c) {
            b.push(c)
        });
        return b
    };
    bj = function(a, b) {
        return xa(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    zh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    fe = Rh(function() {
        return _.Hg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], jv) || 1E-4 > Math.random()
    });
    he = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    Eq = Rh(function() {
        return jv("MSIE")
    });
    jv = function(a) {
        return -1 != Aa().indexOf(a)
    };
    kv = /^([0-9.]+)px$/;
    Th = function(a) {
        return (a = kv.exec(a)) ? +a[1] : null
    };
    lv = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    mv = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    nv = {
        Wf: "allow-forms",
        Xf: "allow-modals",
        Yf: "allow-orientation-lock",
        Zf: "allow-pointer-lock",
        bg: "allow-popups",
        cg: "allow-popups-to-escape-sandbox",
        dg: "allow-presentation",
        eg: "allow-same-origin",
        fg: "allow-scripts",
        gg: "allow-top-navigation",
        hg: "allow-top-navigation-by-user-activation"
    };
    ov = Rh(function() {
        return _.iv(nv)
    });
    pv = function(a) {
        var b = ov();
        return a.length ? _.pg(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    qv = function() {
        var a = _.Ad("IFRAME"),
            b = {};
        _.Cr(ov(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    rv = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    sv = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = hv(a))) break
        }
        return null
    };
    tv = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Ad("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Ll = Rh(function() {
        return !dv() && (Ca("iPod") || Ca("iPhone") || Ca("Android") || Ca("IEMobile")) ? 2 : dv() ? 1 : 0
    });
    ri = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.bi = function(a, b) {
        _.hk(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    ti = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    si = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Sh(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    uv = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : Lc(a, parseFloat)
    };
    vv = {};
    _.wv = (vv["http://googleads.g.doubleclick.net"] = !0, vv["http://pagead2.googlesyndication.com"] = !0, vv["https://googleads.g.doubleclick.net"] = !0, vv["https://pagead2.googlesyndication.com"] = !0, vv);
    xv = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    yv = [];
    zv = function() {
        var a = yv;
        yv = [];
        a = _.A(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Av = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Bv = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    ye = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Bv(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Cv = function(a, b) {
        Gd(_.Zu(_.Su(a)), a, b)
    };
    nn = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (yv.push(b), 1 == yv.length && (x.Promise ? x.Promise.resolve().then(zv) : window.setImmediate ? setImmediate(zv) : setTimeout(zv, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ak = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Dv = function(a, b) {
        var c = _.Ad("DIV");
        c.id = a;
        c.textContent = b;
        _.bi(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Ev = function(a) {
        return new x.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    kk = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Ad = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Fv = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Ed(a) && (b = a);
        return b
    };
    _.Gv = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Gv.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.Gv.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.Hv = function(a) {
        return new _.Gv(a.top, a.right, a.bottom, a.left)
    };
    _.Gv.prototype.contains = function(a) {
        return this && a ? a instanceof _.Gv ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.Gv.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Gv.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Gv.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Iv = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Jv = function(a) {
            return new _.Gv(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Kv = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Iv(c, e, d - c, a - e)
            }
            return null
        };
    Iv.prototype.contains = function(a) {
        return a instanceof _.Gh ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Iv.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Iv.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Iv.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Lv = function(a) {
        return (a = void 0 === a ? Hd() : a) ? Ed(a.master) ? a.master : null : null
    };
    var Ov, Dg, Ih, Qv, Rv, Fh;
    _.Nv = function(a, b, c) {
        if ("string" === typeof b)(b = _.Mv(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Mv(c, d);
                f && (c.style[f] = e)
            }
    };
    Ov = {};
    _.Mv = function(a, b) {
        var c = Ov[b];
        if (!c) {
            var d = _.Pu(b);
            c = d;
            void 0 === a.style[d] && (d = (gs ? "Webkit" : fs ? "Moz" : _.ds ? "ms" : null) + Qu(d), void 0 !== a.style[d] && (c = d));
            Ov[b] = c
        }
        return c
    };
    _.Pv = function(a, b) {
        var c = _.Su(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Dg = function(a, b) {
        return _.Pv(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Ih = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    Qv = function(a) {
        if (_.ds && !(8 <= Number(ps))) return a.offsetParent;
        var b = _.Su(a),
            c = Dg(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Dg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Rv = function(a) {
        var b = _.Su(a),
            c = new _.Gh(0, 0);
        var d = b ? _.Su(b) : document;
        d = !_.ds || 9 <= Number(ps) || _.Wu(Tu(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ih(a);
        d = Tu(b).j;
        b = Yu(d);
        d = d.parentWindow || d.defaultView;
        b = _.ds && d.pageYOffset != b.scrollTop ? new _.Gh(b.scrollLeft, b.scrollTop) : new _.Gh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Fh = function(a, b) {
        var c = new _.Gh(0, 0),
            d = _.Zu(_.Su(a));
        if (!bs(d, "parent")) return c;
        do {
            var e = d == b ? Rv(a) : _.Sv(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Sv = function(a) {
        a = Ih(a);
        return new _.Gh(a.left, a.top)
    };
    _.Tv = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Eg = function(a, b) {
        if ("none" != Dg(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Fg = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = gs && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ih(a), new _.Jh(a.right - a.left, a.bottom - a.top)) : new _.Jh(b, c)
    };
    var ni = function(a) {
        a = Lv(Hd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Uv = function(a, b) {
        if (x.globalThis.fetch) x.globalThis.fetch(a, {
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
    var Lm = function(a) {
        _.R.call(this, a, -1, Vv)
    };
    _.P(Lm, _.R);
    var Km = function(a, b) {
            return Cc(a, 1, b)
        },
        Jm = function(a, b) {
            return _.z(a, 2, b)
        },
        Vv = [1];
    var Gm = function(a) {
        _.R.call(this, a)
    };
    _.P(Gm, _.R);
    var Fm = function(a, b) {
            return _.z(a, 1, b)
        },
        Em = function(a, b) {
            return _.z(a, 2, b)
        },
        Dm = function(a, b) {
            return _.z(a, 3, b)
        },
        Cm = function(a, b) {
            return _.z(a, 5, b)
        },
        Bm = function(a, b) {
            return _.z(a, 6, b)
        };
    var Am = function(a) {
        _.R.call(this, a)
    };
    _.P(Am, _.R);
    var zm = function(a, b) {
        return _.Rg(a, 1, b)
    };
    var vm = function(a) {
        _.R.call(this, a)
    };
    _.P(vm, _.R);
    var um = function(a, b) {
            return _.Rg(a, 1, b)
        },
        tm = function(a, b) {
            return _.Rg(a, 2, b)
        },
        ym = function(a) {
            _.R.call(this, a)
        };
    _.P(ym, _.R);
    ym.prototype.getWidth = function() {
        return Xi(this, 1)
    };
    var xm = function(a, b) {
        return _.z(a, 1, b)
    };
    ym.prototype.getHeight = function() {
        return Xi(this, 2)
    };
    var wm = function(a, b) {
        return _.z(a, 2, b)
    };
    var Im = function(a) {
        _.R.call(this, a)
    };
    _.P(Im, _.R);
    var Hm = function(a, b) {
        return _.Rg(a, 1, b)
    };
    var Xv = function(a) {
        _.R.call(this, a, -1, Wv)
    };
    _.P(Xv, _.R);
    var Sm = function(a) {
            var b = new Xv;
            return _.Rg(b, 1, a)
        },
        Rm = function(a, b) {
            return _.Rg(a, 2, b)
        },
        Qm = function(a, b) {
            return _.Rg(a, 3, b)
        },
        Pm = function(a) {
            var b = ze();
            return Cc(a, 4, b)
        },
        Om = function(a, b) {
            return _.Rg(a, 6, b)
        },
        Nm = function(a, b) {
            return _.Ic(a, 7, b, 0)
        },
        Wv = [4];
    var Yv = function(a) {
        _.R.call(this, a)
    };
    _.P(Yv, _.R);
    var Zv = function(a) {
        _.R.call(this, a)
    };
    _.P(Zv, _.R);
    var Yg = function(a) {
        _.R.call(this, a)
    };
    _.P(Yg, _.R);
    var Tg = function(a) {
        _.R.call(this, a)
    };
    _.P(Tg, _.R);
    var Qg = function(a) {
        _.R.call(this, a)
    };
    _.P(Qg, _.R);
    var $v = function(a) {
        _.R.call(this, a)
    };
    _.P($v, _.R);
    var Pg = function(a) {
        _.R.call(this, a, -1, aw)
    };
    _.P(Pg, _.R);
    Pg.prototype.getTagSessionCorrelator = function() {
        return Xi(this, 2)
    };
    var aw = [4],
        Vg = [6, 7, 8, 9, 11];
    var kh = function(a) {
        _.R.call(this, a, -1, bw)
    };
    _.P(kh, _.R);
    var bw = [3];
    var hh = function(a) {
        _.R.call(this, a, -1, cw)
    };
    _.P(hh, _.R);
    var cw = [4];
    var gh = function(a) {
        _.R.call(this, a, -1, dw)
    };
    _.P(gh, _.R);
    gh.prototype.getTagSessionCorrelator = function() {
        return Xi(this, 1)
    };
    var dw = [2];
    var fh = function(a) {
        _.R.call(this, a)
    };
    _.P(fh, _.R);
    var nh = [4];
    var ew = function(a, b, c, d, e) {
            this.l = a;
            this.C = b;
            this.H = c;
            this.D = d;
            this.I = e;
            this.j = [];
            this.m = null
        },
        fw = function(a) {
            null !== a.m && (clearTimeout(a.m), a.m = null);
            if (a.j.length) {
                var b = Kd(a.j);
                a.C(a.l + "?e=1", b);
                a.j = []
            }
        };
    ew.prototype.vd = function() {
        var a = $a.apply(0, arguments),
            b = this;
        this.I && 65536 <= Kd(this.j.concat(a)).length && fw(this);
        this.j.push.apply(this.j, _.Ld(a));
        this.j.length >= this.D && fw(this);
        this.j.length && null === this.m && (this.m = setTimeout(function() {
            fw(b)
        }, this.H))
    };
    var Iq = function(a, b, c) {
        ew.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Uv, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!x.globalThis.fetch)
    };
    _.P(Iq, ew);
    var T = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        gw = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        hw = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        iw = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var jw, kw, lw, oi, mw, ll, nw, ow, Pk, pw, qw, rw, sw, tw, uw, Ik, vw, ww, xw, yw, zw, Aw, Bw, wo, Cw, Dw, Ew, Fw, Gw, Hw, Iw, Jw, Tp, Kw, Lw, Mw, Gl, Nw, Ow, Pw, ah, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw, Yw, kn, Zw, $w, ax, dk, ak, co, eo, bx, cx, dx, ex, fx, gx, hx, ix, Hq, jx, kx, lx, mx, nx, ox, px, qx, rx, sx, tx, ux, vx, wx, Df, xx, yx, Be, zx, Ax, $e, Oe, xe, ef, Bx, rf, yq, zq, Cx, wl, Aq, xq, Ex, Fx, Gx, Hx, Ix, Ol, Kx, Mi, Lx;
    jw = new T(1122, !0);
    kw = new hw(3);
    lw = new iw(481);
    oi = new gw(7, .1);
    mw = new T(212);
    ll = new gw(474069761);
    nw = new gw(455645877);
    ow = new gw(462420536);
    Pk = new T(476475256);
    pw = new T(359351145);
    qw = new gw(448338836, .01);
    rw = new gw(427198696);
    sw = new gw(438663674);
    tw = new T(23);
    uw = new T(369430);
    Ik = new T(485860314);
    vw = new T(477812799);
    ww = new gw(408380992, .01);
    xw = new gw(377289019, 1E4);
    yw = new gw(488);
    zw = new gw(529, 20);
    Aw = new hw(10);
    Bw = new gw(428094087);
    wo = new gw(447000223, .01);
    Cw = new gw(434620574);
    Dw = new T(474159377);
    Ew = new T(360245597, !0);
    Fw = new T(462165369);
    Gw = new gw(461613513);
    Hw = new gw(494, 1E4);
    Iw = new gw(471890184, .01);
    Jw = new gw(517, .01);
    Tp = new T(484638336);
    Kw = new T(471855283);
    Lw = new T(220);
    Mw = new T(200);
    Gl = new gw(492, .01);
    Nw = new gw(363650251);
    Ow = new gw(474872234);
    Pw = new T(83);
    ah = new T(85);
    Qw = new T(437061931);
    Rw = new iw(466086960);
    Sw = new T(45374286);
    Tw = new gw(398776877, 6E4);
    Uw = new T(437292966);
    Vw = new gw(374201269, 6E4);
    Ww = new gw(371364213, 6E4);
    Xw = new gw(376149757, .0025);
    Yw = new T(453275889);
    kn = new T(476447134, !0);
    Zw = new T(422917270);
    $w = new T(377936516, !0);
    ax = new gw(24);
    dk = new iw(1);
    ak = new hw(2, "1-0-40");
    co = new T(427203966);
    eo = new T(442109935);
    bx = new T(441529989);
    cx = new T(428624799);
    dx = new T(437308144);
    ex = new iw(489);
    fx = new T(392065905);
    gx = new gw(360245595, 500);
    hx = new gw(432023148);
    ix = new T(424117738);
    Hq = new gw(397316938, 1E3);
    jx = new T(444587044, !0);
    kx = new T(440148284, !0);
    lx = new T(444587045);
    mx = new T(440148282, !0);
    nx = new T(487608180);
    ox = new T(399705355);
    px = new T(480068022);
    qx = new T(472976668);
    rx = new T(486663050);
    sx = new T(501);
    tx = new T(484598396);
    ux = new iw(472572701);
    vx = new T(439828594);
    wx = new T(483962503);
    Df = new T(1930);
    xx = new T(453);
    yx = new T(454);
    Be = new gw(360261971);
    zx = new gw(1921, 72);
    Ax = new gw(1920, 12);
    $e = new gw(426169222, 1E3);
    Oe = new gw(1917, 300);
    xe = new gw(1916, .001);
    ef = new iw(471270390);
    Bx = new T(476437529);
    rf = new T(478009624);
    yq = new T(77);
    zq = new T(78);
    Cx = new T(1961);
    wl = new T(309);
    Aq = new T(80);
    xq = new T(76);
    _.Dx = new T(1947, !0);
    Ex = new T(84);
    Fx = new T(1958);
    Gx = new T(1973);
    Hx = new T(188);
    Ix = new T(1971);
    _.Jx = new gw(1972);
    Ol = new gw(1158);
    Kx = new T(471682731);
    Mi = new T(477209535);
    Lx = new T(485990406);
    var Mx = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Ad("SCRIPT", g);
                h.async = !0;
                Va(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? Mx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        Nx = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            Mx(Tu(a), b, 0, !1, c, d)
        };
    wa({
        Cg: 0,
        Bg: 1,
        yg: 2,
        tg: 3,
        zg: 4,
        ug: 5,
        Ag: 6,
        wg: 7,
        xg: 8,
        sg: 9,
        vg: 10
    }).map(function(a) {
        return Number(a)
    });
    wa({
        Eg: 0,
        Fg: 1,
        Dg: 2
    }).map(function(a) {
        return Number(a)
    });
    var Ox = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Ad("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var je, Qo;
    _.Px = function(a, b, c, d) {
        Qd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    je = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.hk(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Qo(d, c)
    };
    Qo = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.Px(c, a, void 0, b)
    };
    _.Qx = function() {
        this.D = this.D;
        this.va = this.va
    };
    _.Qx.prototype.D = !1;
    _.Qx.prototype.La = function() {
        this.D || (this.D = !0, this.I())
    };
    _.an = function(a, b) {
        _.hn(a, _.sr(Rd, b))
    };
    _.hn = function(a, b) {
        a.D ? b() : (a.va || (a.va = []), a.va.push(b))
    };
    _.Qx.prototype.I = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };
    var Rx = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Sx = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.Qx.call(this);
            this.j = a;
            this.m = null;
            this.l = {};
            this.B = 0;
            this.o = b;
            this.H = c;
            this.C = null
        };
    _.P(Sx, _.Qx);
    Sx.prototype.I = function() {
        this.l = {};
        this.C && (_.Pd(this.j, "message", this.C), delete this.C);
        delete this.l;
        delete this.j;
        delete this.m;
        _.Qx.prototype.I.call(this)
    };
    var Ux = function(a) {
        return "function" === typeof a.j.__tcfapi || null != Tx(a)
    };
    Sx.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = _.zr(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Rx(c), c.internalBlockOnErrors = b.H, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Vx(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Sx.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vx(this, "removeEventListener", null, a.listenerId)
    };
    var Wx = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        Vx = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (Tx(a)) {
                Xx(a);
                var e = ++a.B;
                a.l[e] = c;
                a.m && (c = {}, a.m.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Tx = function(a) {
            if (a.m) return a.m;
            a.m = sv(a.j, "__tcfapiLocator");
            return a.m
        },
        Xx = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.l[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.cb(a.j, "message", a.C))
        },
        Yx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Rx(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (je({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        Zx = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return Wx(a, c)
            })
        };
    var $x = function(a, b, c) {
            this.j = a;
            this.D = b;
            this.m = void 0 === c ? function() {} : c
        },
        ay = function(a, b, c) {
            return new $x(a, b, c)
        };
    $x.prototype.start = function() {
        if (this.j === this.j.top) try {
            Ox(this.j), by(this)
        } catch (a) {}
    };
    var by = function(a) {
        var b = lb(wr("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.D,
            ers: 3
        });
        Nx(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var cy = x.Promise;
    var dy = function(a) {
        this.D = a
    };
    dy.prototype.m = function(a, b, c) {
        this.D.then(function(d) {
            d.m(a, b, c)
        })
    };
    dy.prototype.j = function(a, b) {
        return this.D.then(function(c) {
            return c.j(a, b)
        })
    };
    var ey = function(a) {
        this.data = a
    };
    var fy = function(a) {
        this.D = a
    };
    fy.prototype.m = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        gy(d.port1, b);
        this.D.postMessage(a, [d.port2].concat(c))
    };
    fy.prototype.j = function(a, b) {
        var c = this;
        return new cy(function(d) {
            c.m(a, d, b)
        })
    };
    var hy = function(a, b) {
            gy(a, b);
            return new fy(a)
        },
        gy = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new ey(c.data, hy(c.ports[0])))
            })
        };
    var Ki = function(a) {
            var b = a.zc,
                c = void 0 === a.Ja ? "ZNWN1d" : a.Ja,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Ic ? void 0 : a.Ic;
            return iy({
                destination: a.destination,
                Nd: function() {
                    return b.contentWindow
                },
                hf: jy(a.origin),
                Ja: c,
                onMessage: d,
                Ic: e
            })
        },
        iy = function(a) {
            var b = a.destination,
                c = a.Nd,
                d = a.hf,
                e = void 0 === a.yd ? void 0 : a.yd,
                f = a.Ja,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Ic ? void 0 : a.Ic,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new dy(new cy(function(l, m) {
                var n = function(p) {
                    if (p.source && p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", n, !1);
                            var r = d.join(", ");
                            m(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(hy(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        },
        jy = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var ih = (0, E.jd)(function(a) {
        return "string" === typeof a
    }, "string");
    var ky = navigator,
        ly = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        my = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return ly(a.toLowerCase())
        },
        ny = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        oy = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        py = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Dh = function(a) {
            return !!a && a.top == a
        },
        qy = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Dh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var ry = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var hi = function() {
        this.j = [];
        this.m = -1
    };
    hi.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.u(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    hi.prototype.get = function(a) {
        return !!this.j[a]
    };
    var ji = function(a) {
        -1 === a.m && (a.m = Dr(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Xd = function(a) {
        _.R.call(this, a, -1, sy)
    };
    _.P(Xd, _.R);
    var Yd = function(a, b) {
            Ze(a, 1, ce, b)
        },
        ce = function(a) {
            _.R.call(this, a)
        };
    _.P(ce, _.R);
    var $d = function(a) {
            var b = new ce;
            return _.Zg(b, 1, a)
        },
        Zd = function(a, b) {
            return _.Ic(a, 2, b, 0)
        },
        sy = [1];
    var oe = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        vy = function() {
            var a = ty;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                md: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            uy(a, "TESTCOOKIESENABLED");
            return !0
        };
    oe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.yh;
            d = c.wf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.md
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    oe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = pq(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var uy = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            md: 0,
            path: c,
            domain: d
        })
    };
    oe.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    oe.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = pq(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) uy(this, b[a])
    };
    var ty = new oe("undefined" == typeof document ? null : document);
    var wy = null,
        xy = function() {
            if (null === wy) {
                wy = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        wy = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return wy
        };
    var yy = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var ch = _.t.performance,
        zy = !!(ch && ch.mark && ch.measure && ch.clearMarks),
        dh = Rh(function() {
            var a;
            if (a = zy) a = xy(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Ay = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = dh() || (null != c ? c : Math.random() < a)
        },
        By = function(a, b, c, d, e, f) {
            a.j && (b = new yy(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    Ay.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new yy(a, b, _.se() || _.re());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ch && dh() && ch.mark(b);
        return a
    };
    Ay.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.se() || _.re()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ch && dh() && ch.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var dp = function(a, b, c) {
        var d = _.se();
        d && By(a, b, 9, d, 0, c)
    };
    var Kk = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Kk.prototype)
    };
    _.P(Kk, Error);
    Kk.prototype.name = "PublisherInputError";
    var Cy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Cy.prototype)
    };
    _.P(Cy, Error);
    Cy.prototype.name = "ServerError";
    var Dy = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, Dy.prototype)
    };
    _.P(Dy, Error);
    Dy.prototype.name = "NetworkError";
    var Ey;
    Ey = {
        Ig: 0,
        ie: 3,
        ke: 4,
        Jg: 5
    };
    var Fy = Ey.ie,
        Gy = Ey.ke;
    _.Lg = function(a) {
        var b = "jb";
        if (a.jb && a.hasOwnProperty(b)) return a.jb;
        b = new a;
        return a.jb = b
    };
    var Hy = function(a) {
            this.methodName = a
        },
        Iy = new Hy(1),
        Jy = new Hy(16),
        Ky = new Hy(15),
        Ly = new Hy(2),
        My = new Hy(3),
        Ny = new Hy(5),
        Oy = new Hy(6),
        Py = new Hy(7),
        Qy = new Hy(8),
        Ry = new Hy(14),
        Sy = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Ty = function() {
            this.j = function() {};
            this.D = function() {};
            this.m = function() {
                return []
            };
            this.I = function() {
                return []
            }
        },
        Uy = function(a, b) {
            a.j = Sy(Iy, b, function() {});
            a.m = function(c) {
                return Sy(Ly, b, function() {
                    return []
                })(c, 2)
            };
            a.I = function() {
                return Sy(My, b, function() {
                    return []
                })(2)
            };
            a.D = function(c) {
                Sy(Jy, b, function() {})(c, 2)
            }
        },
        Fq = function(a) {
            _.Lg(Ty).D(a)
        },
        tk = function(a) {
            return _.Lg(Ty).m(a)
        },
        ze = function() {
            return _.Lg(Ty).I()
        };
    var Vy, Zj, df;
    Vy = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.I = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.H = function(a) {
        return _.Lg(Vy).m(a.j, a.defaultValue)
    };
    _.we = function(a) {
        return _.Lg(Vy).D(a.j, a.defaultValue)
    };
    Zj = function(a) {
        return _.Lg(Vy).I(a.j, a.defaultValue)
    };
    df = function(a) {
        return _.Lg(Vy).C(a.j, a.defaultValue)
    };
    var Wy = function() {};
    Wy.j = function() {
        throw Error("Must be overridden");
    };
    var ve = function() {
        this.j = 0
    };
    _.P(ve, Wy);
    ve.jb = void 0;
    ve.j = function() {
        return ve.jb ? ve.jb : ve.jb = new ve
    };
    var Xy = function() {
            this.cache = {}
        },
        Fe = function() {
            Yy || (Zy = _.we(Ax), $y = _.we(zx), Yy = new Xy);
            return Yy
        },
        cf = function(a) {
            var b = y(a, 3);
            if (!b) return 3;
            if (void 0 === y(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * $y ? 2 : a > b + 36E5 * Zy ? 1 : 0
        };
    Xy.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            sb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Ae(6, a, null == (d = g) ? void 0 : d.message);
            return {
                sb: null,
                success: !1
            }
        }
        if (!c) return {
            sb: null,
            success: !0
        };
        try {
            var e = Wd(Te, c);
            this.cache[a] = e;
            return {
                sb: e,
                success: !0
            }
        } catch (g) {
            var f;
            Ae(5, a, null == (f = g) ? void 0 : f.message);
            return {
                sb: null,
                success: !1
            }
        }
    };
    Xy.prototype.set = function(a, b) {
        var c = (0, E.K)(a.na()),
            d = "_GESPSK-" + c;
        _.z(a, 3, Date.now());
        try {
            b.setItem(d, ae(a))
        } catch (f) {
            var e;
            Ae(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var Yy = null,
        Zy = 24,
        $y = 72;
    var Ge = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var az = function(a) {
        _.Qx.call(this);
        this.l = a;
        this.j = [];
        this.m = [];
        this.C = []
    };
    _.P(az, _.Qx);
    var cz = function(a, b, c) {
        a.m.push({
            ic: void 0 === c ? !1 : c,
            xb: b
        });
        _.H(Kw) && bz(b, a.l)
    };
    az.prototype.I = function() {
        this.j.length = 0;
        this.C.length = 0;
        this.m.length = 0;
        _.Qx.prototype.I.call(this)
    };
    _.sg = function() {
        var a = this;
        this.promise = new x.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var dz = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.u(Object, "setPrototypeOf").call(Object, this, dz.prototype);
        this.name = "InputError"
    };
    _.P(dz, Error);
    var ez = function() {
            var a = this;
            this.B = this.Sa = null;
            this.C = -1;
            this.D = new _.sg;
            this.m = !1;
            this.D.promise.then(function() {
                -1 !== a.C && (a.B = _.re() - a.C)
            }, function() {})
        },
        fz = function() {
            ez.apply(this, arguments);
            this.I = []
        };
    _.P(fz, ez);
    var hz = function(a, b) {
            a.m || (a.m = !0, a.Sa = b, a.D.resolve(b), _.H(Kw) && gz(a))
        },
        iz = function(a, b) {
            a.m = !0;
            a.l = b;
            a.D.reject(b);
            _.H(Kw) && gz(a)
        },
        gz = function(a) {
            for (var b = _.A(a.I), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Sa);
            a.I = []
        },
        bz = function(a, b) {
            _.H(Kw) && a.I.push(b)
        };
    Nq.Object.defineProperties(fz.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.promise
            }
        },
        rb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        H: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });
    var Dp = function() {
        fz.apply(this, arguments)
    };
    _.P(Dp, fz);
    Dp.prototype.j = function(a) {
        hz(this, a)
    };
    var jz = function(a, b) {
            hz(a, null != b ? b : null)
        },
        kz = function(a) {
            hz(a, null)
        },
        lz = function(a, b) {
            b.then(function(c) {
                a.j(c)
            })
        },
        mz = function(a, b) {
            a.m || (a.m = !0, a.Sa = null, a.l = b, a.D.reject(b), _.H(Kw) && gz(a))
        },
        nz = function(a) {
            ez.call(this);
            this.ob = a
        };
    _.P(nz, ez);
    nz.prototype.rb = function() {
        return this.ob.m
    };
    nz.prototype.yb = function() {
        return null !== this.ob.Sa
    };
    Nq.Object.defineProperties(nz.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.l
            }
        }
    });
    var oz = function(a) {
        nz.call(this, a);
        this.ob = a
    };
    _.P(oz, nz);
    Nq.Object.defineProperties(oz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Sa
            }
        }
    });
    var pz = function() {
        nz.apply(this, arguments)
    };
    _.P(pz, nz);
    Nq.Object.defineProperties(pz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Sa
            }
        }
    });
    var qz = function() {
        nz.apply(this, arguments)
    };
    _.P(qz, nz);
    Nq.Object.defineProperties(qz.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob.Sa
            }
        }
    });
    var rz = function() {
        fz.apply(this, arguments)
    };
    _.P(rz, fz);
    rz.prototype.notify = function() {
        hz(this, null)
    };
    var sz = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        tz = function(a, b) {
            b = void 0 === b ? !1 : b;
            fz.call(this);
            var c = this;
            this.o = a;
            this.j = 0;
            if (_.H(Kw)) {
                a = {};
                for (var d = _.A(this.o), e = d.next(); !e.done; a = {
                        Lb: a.Lb
                    }, e = d.next()) a.Lb = e.value, bz(a.Lb, function(f) {
                    return function(g) {
                        c.j += 1;
                        f.Lb.error ? iz(c, f.Lb.error) : b || null !== g ? hz(c, null != g ? g : null) : c.j === c.o.length && hz(c, null)
                    }
                }(a))
            } else _.u(x.Promise, "any").call(x.Promise, a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                })
            })).then(function(f) {
                c.m = !0;
                c.Sa = f;
                c.D.resolve(f)
            }, function() {
                c.m = !0;
                c.Sa = null;
                c.D.resolve(null)
            })
        };
    _.P(tz, fz);
    var vz = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.Qx.call(this);
        var c = this;
        this.id = a;
        this.fa = b;
        this.ka = this.ja = this.ha = this.O = !1;
        this.ca = -1;
        this.C = new az(function() {
            uz(c)
        });
        _.an(this, this.C)
    };
    _.P(vz, _.Qx);
    vz.prototype.start = function() {
        var a = this,
            b, c, d, e, f;
        return _.eb(function(g) {
            switch (g.j) {
                case 1:
                    if (a.O) return g.return();
                    a.O = !0;
                    g.D = 2;
                    b = a;
                    return fb(g, hf(a.C.m, a.fa), 4);
                case 4:
                    b.ca = g.m;
                    if (a.D) {
                        g.j = 5;
                        break
                    }
                    for (var h = 0, k = _.A(a.C.C), l = k.next(); !l.done; l = k.next()) {
                        if (!l.value.yb()) throw Error("missing input: " + a.id + "/" + h);
                        ++h
                    }
                    c = _.A(a.C.j);
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, e.C = _.re();
                    return fb(g, a.j(), 5);
                case 5:
                    ib(g, 0);
                    break;
                case 2:
                    f = jb(g);
                    if (a.D) return g.return();
                    f instanceof dz ? a.H(f) : f instanceof Error && (a.U(f), a.m(f));
                    g.j = 0
            }
        })
    };
    var uz = function(a) {
            if (!a.O && a.ha) try {
                var b = a.C.m,
                    c = 0 < a.fa ? b.filter(function(g) {
                        return !g.ic
                    }) : b,
                    d = b.filter(function(g) {
                        return g.ic
                    }),
                    e, f = null == (e = _.u(b, "find").call(b, function(g) {
                        return void 0 !== g.xb.error
                    })) ? void 0 : e.xb.error;
                if (f) throw a.O = !0, f;
                if (!c.some(function(g) {
                        return !g.xb.rb
                    })) {
                    if (d.length && (a.ja || (a.ja = !0, setTimeout(function() {
                            a.ka = !0;
                            uz(a)
                        }, a.fa)), d.some(function(g) {
                            return !g.xb.rb
                        }) && !a.ka)) return;
                    a.O = !0;
                    a.j()
                }
            } catch (g) {
                a.D || (g instanceof dz ? a.H(g) : g instanceof Error && (a.U(g), a.m(g)))
            }
        },
        V = function(a) {
            var b = new Dp;
            a.C.j.push(b);
            return b
        },
        wz = function(a) {
            var b = new rz;
            a.C.j.push(b);
            return b
        },
        W = function(a, b) {
            cz(a.C, b);
            b = new pz(b);
            a.C.C.push(b);
            return b
        },
        X = function(a, b) {
            cz(a.C, b);
            return new oz(b)
        },
        xz = function(a, b) {
            cz(a.C, b, !0);
            return new oz(b)
        },
        yz = function(a, b) {
            cz(a.C, b)
        },
        zz = function(a, b) {
            b = new tz(b);
            cz(a.C, b);
            b = new pz(b);
            a.C.C.push(b);
            return b
        };
    vz.prototype.H = function() {};
    vz.prototype.m = function(a) {
        if (this.C.j.length) {
            a = new dz(a.message);
            for (var b = _.A(this.C.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.rb || iz(c, a)
        }
    };
    var Az = function(a, b) {
        vz.call(this, a);
        this.id = a;
        this.B = b
    };
    _.P(Az, vz);
    Az.prototype.U = function(a) {
        this.B(this.id, a)
    };
    var nf = function(a, b, c) {
        Az.call(this, 1041, c);
        this.l = b;
        this.o = W(this, a)
    };
    _.P(nf, Az);
    nf.prototype.j = function() {
        var a = this.o.value;
        Fe().set(a, this.l) && gf(a, 2) && Ae(27, (0, E.K)(a.na()))
    };
    var sf = function(a, b) {
        Az.call(this, 1048, b);
        this.l = V(this);
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(sf, Az);
    sf.prototype.j = function() {
        var a = (0, E.K)(this.F.value),
            b = function(c) {
                var d = {};
                Ae(c, (0, E.K)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, E.K)(y(a, 3))) / 6E4)), d))
            };
        switch (cf(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.j(a);
                break;
            case 2:
                b(26);
                this.l.j(a);
                break;
            case 3:
                Ae(9, (0, E.K)(a.na()));
                this.l.j(a);
                break;
            case 4:
                b(23), this.l.j(a)
        }
    };
    var Kf = function(a, b, c) {
        Az.call(this, 1049, c);
        this.l = b;
        yz(this, a)
    };
    _.P(Kf, Az);
    Kf.prototype.j = function() {
        for (var a = _.A(Ne(this.l)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Fe().get(b, this.l).sb;
            if (c) {
                var d = cf(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = Fe();
                    c = (0, E.K)(c.na());
                    try {
                        this.l.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Ae(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Ae(40, b)
                }
            }
        }
    };
    var wf = function(a, b, c, d) {
        Az.call(this, 658, d);
        this.collectorFunction = a;
        this.J = c;
        this.l = V(this);
        this.F = V(this);
        this.o = X(this, b)
    };
    _.P(wf, Az);
    wf.prototype.j = function() {
        var a = this;
        if (this.o.value) {
            var b = function(f) {
                    a.l.j({
                        id: (0, E.K)(f.na()),
                        collectorGeneratedData: y(f, 2)
                    })
                },
                c = this.o.value,
                d = (0, E.K)(c.na()),
                e = cf(c);
            jf(c);
            switch (e) {
                case 0:
                    b(c);
                    break;
                case 1:
                    b(c);
                    this.F.j(c);
                    break;
                case 3:
                case 2:
                case 4:
                    _.z(c, 2, null), He(d, c, this.collectorFunction, this.J).then(b)
            }
        } else kz(this.l)
    };
    var mf = function(a, b, c) {
        Az.call(this, 1027, c);
        this.nc = a;
        this.F = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.P(mf, Az);
    mf.prototype.j = function() {
        var a = Fe().get(this.nc, this.F).sb;
        if (!a) {
            a = Ye(this.nc);
            var b = _.we(Be) || null;
            a = _.z(a, 8, b);
            a = _.z(a, 3, Date.now());
            this.o.j(Ie(a, Je(new Le, 100)))
        }
        this.l.j(a)
    };
    var tf = function(a, b, c) {
        Az.call(this, 1043, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(tf, Az);
    tf.prototype.j = function() {
        var a = this.F.value;
        this.o && _.z(a, 8, (0, E.K)(Ce(a, 8)) - 1);
        this.l.j(a)
    };
    var pf = function(a, b, c) {
        Az.call(this, 1029, c);
        this.l = b;
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(pf, Az);
    pf.prototype.j = function() {
        var a = this.F.value,
            b = Date.now();
        if (this.l) {
            var c = (0, E.K)(Ce(a, 8)),
                d, e = null != (d = y(a, 7)) ? d : b;
            c < this.l && _.z(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
        }
        this.o.j(a)
    };
    var uf = function(a, b, c) {
        Az.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = V(this);
        this.o = W(this, b)
    };
    _.P(uf, Az);
    uf.prototype.j = function() {
        var a = this,
            b = this.o.value,
            c = (0, E.K)(b.na());
        Ae(18, c);
        try {
            var d = _.re();
            this.collectorFunction().then(function(e) {
                Ae(29, c, null, {
                    delta: String(_.re() - d)
                });
                a.l.j(_.z(b, 2, e))
            }).catch(function(e) {
                Ae(28, c, kf(e));
                a.l.j(Ie(b, Je(new Le, 106)))
            })
        } catch (e) {
            Ae(1, c, kf(e)), this.l.j(Ie(b, Je(new Le, 107)))
        }
    };
    var qf = function(a, b, c) {
        Az.call(this, 1030, c);
        this.F = b;
        this.l = V(this);
        this.o = V(this);
        this.J = W(this, a)
    };
    _.P(qf, Az);
    qf.prototype.j = function() {
        var a = this.J.value,
            b, c = null != (b = Ce(a, 8)) ? b : 0,
            d;
        b = null != (d = y(a, 7)) ? d : Date.now();
        1 > c && this.F ? (d = {}, Ae(22, (0, E.K)(a.na()), null, (d.t = String(b), d.cr = String(c), d.cs = String(cf(a)), d)), this.o.j(Ie(a, Je(new Le, 104)))) : this.l.j(a)
    };
    var xf = function(a, b, c, d) {
        Az.call(this, 662, d);
        this.o = a;
        this.l = c;
        this.F = W(this, b)
    };
    _.P(xf, Az);
    xf.prototype.j = function() {
        var a = this;
        Me().then(function() {
            var b = (0, E.K)(a.F.value);
            He((0, E.K)(b.na()), b, a.o, a.l)
        })
    };
    var of = function(a, b, c) {
        Az.call(this, 1028, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P( of , Az); of .prototype.j = function() {
        var a = this.F.value,
            b = (0, E.K)(a.na());
        this.o && (mk(a, 8) || (Ae(33, b), _.z(a, 8, this.o)), mk(a, 7) || (Ae(34, b), _.z(a, 7, Math.round(Date.now() / 1E3 / 60))));
        mk(a, 3) || Ae(35, b);
        this.l.j(a)
    };
    var vf = function(a, b, c, d) {
        Az.call(this, 1050, d);
        this.J = b;
        this.F = c;
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(vf, Az);
    vf.prototype.j = function() {
        var a = this.o.value,
            b = (0, E.K)(a.na()),
            c = y(a, 2);
        if (null == c) Ae(41, b), Ie(a, Je(new Le, 111));
        else if ("string" === typeof c)
            if (!c.length) Ae(20, b);
            else {
                if (c.length > (/^(\d+)$/.test(b) ? this.F : this.J)) {
                    var d = {};
                    Ae(12, b, null, (d.sl = String(c.length), d));
                    b = Ie(a, Je(new Le, 108));
                    Ee(b, 2)
                }
            }
        else Ae(21, b);
        this.l.j(a)
    };
    var lf = function() {
        _.Qx.apply(this, arguments);
        this.j = []
    };
    _.P(lf, _.Qx);
    var J = function(a, b) {
            _.an(a, b);
            a.j.push(b)
        },
        yf = function(a, b) {
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        },
        zf = function(a) {
            a = _.A(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, _.H(Kw) ? (b.ha = !0, uz(b)) : b.start()
        };
    lf.prototype.I = function() {
        _.Qx.prototype.I.call(this);
        this.j.length = 0
    };
    var Bz = function(a, b, c, d) {
        Az.call(this, 1059, d);
        this.F = b;
        this.o = c;
        this.l = V(this);
        this.J = W(this, a)
    };
    _.P(Bz, Az);
    Bz.prototype.j = function() {
        var a = this.J.value,
            b = a.id,
            c = a.collectorFunction,
            d;
        a = (0, E.K)(null != (d = a.networkCode) ? d : b);
        b = {};
        Ae(42, a, null, (b.ea = String(Number(this.F)), b));
        lz(this.l, Af(a, c, this.o, this.B))
    };
    var Cz = function(a, b) {
        Az.call(this, 1057, b);
        this.l = a;
        this.o = V(this);
        this.F = V(this)
    };
    _.P(Cz, Az);
    Cz.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) Ae(46, "UNKNOWN_COLLECTOR_ID"), Dz(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, Ae(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Ae(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), Dz(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (Ae(14, a), Dz(this, a, 105)) : this.F.j(this.l)
            }
        else Ae(39, "UNKNOWN_COLLECTOR_ID"), Dz(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var Dz = function(a, b, c) {
        a.o.j(Ie(Ye(b), Je(new Le, c)))
    };
    var If = function(a, b) {
        this.j = b;
        this.I = [];
        this.D = [];
        this.m = [];
        a = _.A(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    q = If.prototype;
    q.push = function(a) {
        a = new Cz(a, this.Wc);
        var b = new nf(a.o, this.j, this.Wc),
            c = new Bz(a.F, !1, this.j, this.Wc),
            d = new lf;
        yf(d, [a, b, c]);
        zf(d);
        a = c.l.promise;
        this.I.push(a);
        b = _.A(this.D);
        for (c = b.next(); !c.done; c = b.next()) a.then(c.value)
    };
    q.addOnSignalResolveCallback = function(a) {
        this.D.push(a);
        for (var b = _.A(this.I), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    q.addErrorHandler = function(a) {
        this.m.push(a)
    };
    q.clearAllCache = function() {
        var a = this.j;
        if (void 0 !== a)
            for (var b = _.A(_.u(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value, _.u(c, "startsWith").call(c, "_GESPSK")) try {
                    a.removeItem(c)
                } catch (d) {}
        Yy = new Xy;
        Ae(43, "")
    };
    q.Wc = function(a, b) {
        for (var c = _.A(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Hf = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var Nf = function(a, b) {
        Az.call(this, 1036, b);
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(Nf, Az);
    Nf.prototype.j = function() {
        var a = this.o.value;
        0 !== cf(a) && this.l.j(a)
    };
    var Of = function(a, b, c) {
        Az.call(this, 1035, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(Of, Az);
    Of.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = (0, E.K)(b.na()),
            d = this.o.toString(),
            e = {};
        Ae(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        Va(f, this.o);
        var g = function() {
            var h = {};
            Ae(31, (0, E.K)(c), null, (h.url = d, h));
            a.l.j(Ie(b, Je(new Le, 109)));
            _.Pd(f, "error", g)
        };
        document.head.appendChild(f);
        _.cb(f, "error", g)
    };
    var Jf = function(a) {
        Az.call(this, 1046, a);
        this.A = wz(this)
    };
    _.P(Jf, Az);
    Jf.prototype.j = function() {
        var a = this;
        Me().then(function() {
            return a.A.notify()
        })
    };
    var Mf = new x.Set;
    var Hz, Ez, Gz;
    Hz = function(a) {
        var b = {
                Me: !1
            },
            c = Ez(a, ".google-auto-placed"),
            d = Ez(a, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
            e = Ez(a, "ins.adsbygoogle[data-ad-format=autorelaxed]");
        var f = (_.Fz(a) || Ez(a, "div[id^=div-gpt-ad]")).concat(Ez(a, "iframe[id^=google_ads_iframe]"));
        var g = Ez(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
            h = Ez(a, "ins.adsbygoogle-ablated-ad-slot"),
            k = Ez(a, "div.googlepublisherpluginad"),
            l = Ez(a, "html > ins.adsbygoogle"),
            m = [].concat(Ez(a, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Ez(a, "body ins.adsbygoogle"));
        a = [];
        b = _.A([
            [b.gh, c],
            [b.Me, d],
            [b.jh, e],
            [b.hh, f],
            [b.kh, g],
            [b.fh, h],
            [b.ih, k],
            [b.lh, l]
        ]);
        for (c = b.next(); !c.done; c = b.next()) d = _.A(c.value), c = d.next().value, d = d.next().value, !1 === c ? a = a.concat(d) : m = m.concat(d);
        m = Gz(m);
        b = Gz(a);
        a = m.slice(0);
        m = _.A(b);
        for (b = m.next(); !b.done; b = m.next())
            for (b = b.value, c = 0; c < a.length; c++)(b.contains(a[c]) || a[c].contains(b)) && a.splice(c, 1);
        return a
    };
    _.Fz = function(a) {
        var b = Qf(a);
        return b ? _.pg(Lc(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    };
    Ez = function(a, b) {
        return fa(a.document.querySelectorAll(b))
    };
    Gz = function(a) {
        var b = [];
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };
    var Iz = 0,
        Jz = Id(Xf(wr("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Kz = function() {
            this.j = function() {}
        },
        Lz = function() {
            var a = _.Lg(sk).o;
            _.Lg(Kz).j(a)
        };
    var Nz = function() {
            if (void 0 === b) {
                var a = void 0 === a ? _.t : a;
                var b = a.ggeac || (a.ggeac = {})
            }
            a = b;
            Uy(_.Lg(Ty), a);
            Mz(b);
            _.Lg(Kz).j = Sy(Ry, b);
            _.Lg(Vy).j()
        },
        Mz = function(a) {
            var b = _.Lg(Vy);
            b.m = function(c, d) {
                return Sy(Ny, a, function() {
                    return !1
                })(c, d, 2)
            };
            b.D = function(c, d) {
                return Sy(Oy, a, function() {
                    return 0
                })(c, d, 2)
            };
            b.I = function(c, d) {
                return Sy(Py, a, function() {
                    return ""
                })(c, d, 2)
            };
            b.C = function(c, d) {
                return Sy(Qy, a, function() {
                    return []
                })(c, d, 2)
            };
            b.j = function() {
                Sy(Ky, a)(2)
            }
        };
    var uh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Jh(b.innerWidth, b.innerHeight)).round() : _.Xu(b || window).round()
            } catch (d) {
                return new _.Jh(-12245933, -12245933)
            }
        },
        Oz = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        gm = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || Oz(a);
            return new _.Gh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Uh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var Pz = function(a) {
        _.R.call(this, a)
    };
    _.P(Pz, _.R);
    var Qz = function(a) {
            this.j = a;
            this.m = 0
        },
        Sz = function(a, b) {
            if (0 === a.m) {
                if (Rz(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    G(b, 5) && ne(c) && (new oe(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === pe("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        G(b, 5) && ne(d) && uy(new oe(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        Rz = function(a, b, c) {
            return c ? pe(b, c, a.j) : null
        },
        Tz = function(a, b, c, d) {
            if (d) {
                var e = {
                    md: y(c, 2) - Date.now() / 1E3,
                    path: y(c, 3),
                    domain: y(c, 4),
                    wf: !1
                };
                a = a.j;
                G(d, 5) && ne(a) && (new oe(a.document)).set(b, y(c, 1), e)
            }
        },
        Uz = function(a, b, c) {
            if (c && pe(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.A(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, G(c, 5) && ne(f) && uy(new oe(f.document), b, "/", e.value)
            }
        };
    var Vz = {},
        Wz = (Vz[3] = Id(Xf(wr("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), Vz);
    ({})[3] = Id(Xf(wr("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var Xz = function(a) {
            this.j = a;
            this.m = Nu()
        },
        Yz = function(a) {
            var b = {};
            _.Cr(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var Zz = Q(["https://adservice.google.com/adsid/integrator.", ""]),
        $z = Q(["https://adservice.google.ad/adsid/integrator.", ""]),
        aA = Q(["https://adservice.google.ae/adsid/integrator.", ""]),
        bA = Q(["https://adservice.google.com.af/adsid/integrator.", ""]),
        cA = Q(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        dA = Q(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        eA = Q(["https://adservice.google.al/adsid/integrator.", ""]),
        fA = Q(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        gA = Q(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        hA = Q(["https://adservice.google.as/adsid/integrator.", ""]),
        iA = Q(["https://adservice.google.at/adsid/integrator.", ""]),
        jA = Q(["https://adservice.google.com.au/adsid/integrator.", ""]),
        kA = Q(["https://adservice.google.az/adsid/integrator.", ""]),
        lA = Q(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        mA = Q(["https://adservice.google.be/adsid/integrator.", ""]),
        nA = Q(["https://adservice.google.bf/adsid/integrator.", ""]),
        oA = Q(["https://adservice.google.bg/adsid/integrator.", ""]),
        pA = Q(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        qA = Q(["https://adservice.google.bi/adsid/integrator.", ""]),
        rA = Q(["https://adservice.google.bj/adsid/integrator.", ""]),
        sA = Q(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        tA = Q(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        uA = Q(["https://adservice.google.com.br/adsid/integrator.", ""]),
        vA = Q(["https://adservice.google.bs/adsid/integrator.", ""]),
        wA = Q(["https://adservice.google.bt/adsid/integrator.", ""]),
        xA = Q(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        yA = Q(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        zA = Q(["https://adservice.google.ca/adsid/integrator.", ""]),
        AA = Q(["https://adservice.google.cd/adsid/integrator.", ""]),
        BA = Q(["https://adservice.google.cf/adsid/integrator.", ""]),
        CA = Q(["https://adservice.google.cg/adsid/integrator.", ""]),
        DA = Q(["https://adservice.google.ch/adsid/integrator.", ""]),
        EA = Q(["https://adservice.google.ci/adsid/integrator.", ""]),
        FA = Q(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        GA = Q(["https://adservice.google.cl/adsid/integrator.", ""]),
        HA = Q(["https://adservice.google.cm/adsid/integrator.", ""]),
        IA = Q(["https://adservice.google.com.co/adsid/integrator.", ""]),
        JA = Q(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        KA = Q(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        LA = Q(["https://adservice.google.cv/adsid/integrator.", ""]),
        MA = Q(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        NA = Q(["https://adservice.google.cz/adsid/integrator.", ""]),
        OA = Q(["https://adservice.google.de/adsid/integrator.", ""]),
        PA = Q(["https://adservice.google.dj/adsid/integrator.", ""]),
        QA = Q(["https://adservice.google.dk/adsid/integrator.", ""]),
        RA = Q(["https://adservice.google.dm/adsid/integrator.", ""]),
        SA = Q(["https://adservice.google.dz/adsid/integrator.", ""]),
        TA = Q(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        UA = Q(["https://adservice.google.ee/adsid/integrator.", ""]),
        VA = Q(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        WA = Q(["https://adservice.google.es/adsid/integrator.", ""]),
        XA = Q(["https://adservice.google.com.et/adsid/integrator.", ""]),
        YA = Q(["https://adservice.google.fi/adsid/integrator.", ""]),
        ZA = Q(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        $A = Q(["https://adservice.google.fm/adsid/integrator.", ""]),
        aB = Q(["https://adservice.google.fr/adsid/integrator.", ""]),
        bB = Q(["https://adservice.google.ga/adsid/integrator.", ""]),
        cB = Q(["https://adservice.google.ge/adsid/integrator.", ""]),
        dB = Q(["https://adservice.google.gg/adsid/integrator.", ""]),
        eB = Q(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        fB = Q(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        gB = Q(["https://adservice.google.gl/adsid/integrator.", ""]),
        hB = Q(["https://adservice.google.gm/adsid/integrator.", ""]),
        iB = Q(["https://adservice.google.gr/adsid/integrator.", ""]),
        jB = Q(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        kB = Q(["https://adservice.google.gy/adsid/integrator.", ""]),
        lB = Q(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        mB = Q(["https://adservice.google.hn/adsid/integrator.", ""]),
        nB = Q(["https://adservice.google.hr/adsid/integrator.", ""]),
        oB = Q(["https://adservice.google.ht/adsid/integrator.", ""]),
        pB = Q(["https://adservice.google.hu/adsid/integrator.", ""]),
        qB = Q(["https://adservice.google.co.id/adsid/integrator.", ""]),
        rB = Q(["https://adservice.google.ie/adsid/integrator.", ""]),
        sB = Q(["https://adservice.google.co.il/adsid/integrator.", ""]),
        tB = Q(["https://adservice.google.im/adsid/integrator.", ""]),
        uB = Q(["https://adservice.google.co.in/adsid/integrator.", ""]),
        vB = Q(["https://adservice.google.iq/adsid/integrator.", ""]),
        wB = Q(["https://adservice.google.is/adsid/integrator.", ""]),
        xB = Q(["https://adservice.google.it/adsid/integrator.", ""]),
        yB = Q(["https://adservice.google.je/adsid/integrator.", ""]),
        zB = Q(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        AB = Q(["https://adservice.google.jo/adsid/integrator.", ""]),
        BB = Q(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        CB = Q(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        DB = Q(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        EB = Q(["https://adservice.google.ki/adsid/integrator.", ""]),
        FB = Q(["https://adservice.google.kg/adsid/integrator.", ""]),
        GB = Q(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        HB = Q(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        IB = Q(["https://adservice.google.kz/adsid/integrator.", ""]),
        JB = Q(["https://adservice.google.la/adsid/integrator.", ""]),
        KB = Q(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        LB = Q(["https://adservice.google.li/adsid/integrator.", ""]),
        MB = Q(["https://adservice.google.lk/adsid/integrator.", ""]),
        NB = Q(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        OB = Q(["https://adservice.google.lt/adsid/integrator.", ""]),
        PB = Q(["https://adservice.google.lu/adsid/integrator.", ""]),
        QB = Q(["https://adservice.google.lv/adsid/integrator.", ""]),
        RB = Q(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        SB = Q(["https://adservice.google.md/adsid/integrator.", ""]),
        TB = Q(["https://adservice.google.me/adsid/integrator.", ""]),
        UB = Q(["https://adservice.google.mg/adsid/integrator.", ""]),
        VB = Q(["https://adservice.google.mk/adsid/integrator.", ""]),
        WB = Q(["https://adservice.google.ml/adsid/integrator.", ""]),
        XB = Q(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        YB = Q(["https://adservice.google.mn/adsid/integrator.", ""]),
        ZB = Q(["https://adservice.google.ms/adsid/integrator.", ""]),
        $B = Q(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        aC = Q(["https://adservice.google.mu/adsid/integrator.", ""]),
        bC = Q(["https://adservice.google.mv/adsid/integrator.", ""]),
        cC = Q(["https://adservice.google.mw/adsid/integrator.", ""]),
        dC = Q(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        eC = Q(["https://adservice.google.com.my/adsid/integrator.", ""]),
        fC = Q(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        gC = Q(["https://adservice.google.com.na/adsid/integrator.", ""]),
        hC = Q(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        iC = Q(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        jC = Q(["https://adservice.google.ne/adsid/integrator.", ""]),
        kC = Q(["https://adservice.google.nl/adsid/integrator.", ""]),
        lC = Q(["https://adservice.google.no/adsid/integrator.", ""]),
        mC = Q(["https://adservice.google.com.np/adsid/integrator.", ""]),
        nC = Q(["https://adservice.google.nr/adsid/integrator.", ""]),
        oC = Q(["https://adservice.google.nu/adsid/integrator.", ""]),
        pC = Q(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        qC = Q(["https://adservice.google.com.om/adsid/integrator.", ""]),
        rC = Q(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        sC = Q(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        tC = Q(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        uC = Q(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        vC = Q(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        wC = Q(["https://adservice.google.pl/adsid/integrator.", ""]),
        xC = Q(["https://adservice.google.pn/adsid/integrator.", ""]),
        yC = Q(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        zC = Q(["https://adservice.google.ps/adsid/integrator.", ""]),
        AC = Q(["https://adservice.google.pt/adsid/integrator.", ""]),
        BC = Q(["https://adservice.google.com.py/adsid/integrator.", ""]),
        CC = Q(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        DC = Q(["https://adservice.google.ro/adsid/integrator.", ""]),
        EC = Q(["https://adservice.google.rw/adsid/integrator.", ""]),
        FC = Q(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        GC = Q(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        HC = Q(["https://adservice.google.sc/adsid/integrator.", ""]),
        IC = Q(["https://adservice.google.se/adsid/integrator.", ""]),
        JC = Q(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        KC = Q(["https://adservice.google.sh/adsid/integrator.", ""]),
        LC = Q(["https://adservice.google.si/adsid/integrator.", ""]),
        MC = Q(["https://adservice.google.sk/adsid/integrator.", ""]),
        NC = Q(["https://adservice.google.sn/adsid/integrator.", ""]),
        OC = Q(["https://adservice.google.so/adsid/integrator.", ""]),
        QC = Q(["https://adservice.google.sm/adsid/integrator.", ""]),
        RC = Q(["https://adservice.google.sr/adsid/integrator.", ""]),
        SC = Q(["https://adservice.google.st/adsid/integrator.", ""]),
        TC = Q(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        UC = Q(["https://adservice.google.td/adsid/integrator.", ""]),
        VC = Q(["https://adservice.google.tg/adsid/integrator.", ""]),
        WC = Q(["https://adservice.google.co.th/adsid/integrator.", ""]),
        XC = Q(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        YC = Q(["https://adservice.google.tl/adsid/integrator.", ""]),
        ZC = Q(["https://adservice.google.tm/adsid/integrator.", ""]),
        $C = Q(["https://adservice.google.tn/adsid/integrator.", ""]),
        aD = Q(["https://adservice.google.to/adsid/integrator.", ""]),
        bD = Q(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        cD = Q(["https://adservice.google.tt/adsid/integrator.", ""]),
        dD = Q(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        eD = Q(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        fD = Q(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        gD = Q(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        hD = Q(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        iD = Q(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        jD = Q(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        kD = Q(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        lD = Q(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        mD = Q(["https://adservice.google.vg/adsid/integrator.", ""]),
        nD = Q(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        oD = Q(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        pD = Q(["https://adservice.google.vu/adsid/integrator.", ""]),
        qD = Q(["https://adservice.google.ws/adsid/integrator.", ""]),
        rD = Q(["https://adservice.google.rs/adsid/integrator.", ""]),
        sD = Q(["https://adservice.google.co.za/adsid/integrator.", ""]),
        tD = Q(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        uD = Q(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        vD = Q(["https://adservice.google.cat/adsid/integrator.", ""]),
        wD = new x.Map([
            [".google.com", function(a) {
                return C(Zz, a)
            }],
            [".google.ad", function(a) {
                return C($z, a)
            }],
            [".google.ae", function(a) {
                return C(aA, a)
            }],
            [".google.com.af", function(a) {
                return C(bA, a)
            }],
            [".google.com.ag", function(a) {
                return C(cA, a)
            }],
            [".google.com.ai", function(a) {
                return C(dA, a)
            }],
            [".google.al", function(a) {
                return C(eA, a)
            }],
            [".google.co.ao", function(a) {
                return C(fA, a)
            }],
            [".google.com.ar", function(a) {
                return C(gA, a)
            }],
            [".google.as", function(a) {
                return C(hA, a)
            }],
            [".google.at", function(a) {
                return C(iA, a)
            }],
            [".google.com.au", function(a) {
                return C(jA, a)
            }],
            [".google.az", function(a) {
                return C(kA, a)
            }],
            [".google.com.bd", function(a) {
                return C(lA, a)
            }],
            [".google.be", function(a) {
                return C(mA, a)
            }],
            [".google.bf", function(a) {
                return C(nA, a)
            }],
            [".google.bg", function(a) {
                return C(oA, a)
            }],
            [".google.com.bh", function(a) {
                return C(pA, a)
            }],
            [".google.bi", function(a) {
                return C(qA, a)
            }],
            [".google.bj", function(a) {
                return C(rA, a)
            }],
            [".google.com.bn", function(a) {
                return C(sA, a)
            }],
            [".google.com.bo", function(a) {
                return C(tA, a)
            }],
            [".google.com.br", function(a) {
                return C(uA, a)
            }],
            [".google.bs", function(a) {
                return C(vA, a)
            }],
            [".google.bt", function(a) {
                return C(wA, a)
            }],
            [".google.co.bw", function(a) {
                return C(xA, a)
            }],
            [".google.com.bz", function(a) {
                return C(yA, a)
            }],
            [".google.ca", function(a) {
                return C(zA, a)
            }],
            [".google.cd", function(a) {
                return C(AA, a)
            }],
            [".google.cf", function(a) {
                return C(BA, a)
            }],
            [".google.cg", function(a) {
                return C(CA, a)
            }],
            [".google.ch", function(a) {
                return C(DA, a)
            }],
            [".google.ci", function(a) {
                return C(EA, a)
            }],
            [".google.co.ck", function(a) {
                return C(FA, a)
            }],
            [".google.cl", function(a) {
                return C(GA, a)
            }],
            [".google.cm", function(a) {
                return C(HA, a)
            }],
            [".google.com.co", function(a) {
                return C(IA, a)
            }],
            [".google.co.cr", function(a) {
                return C(JA, a)
            }],
            [".google.com.cu", function(a) {
                return C(KA, a)
            }],
            [".google.cv", function(a) {
                return C(LA, a)
            }],
            [".google.com.cy", function(a) {
                return C(MA, a)
            }],
            [".google.cz", function(a) {
                return C(NA, a)
            }],
            [".google.de", function(a) {
                return C(OA, a)
            }],
            [".google.dj", function(a) {
                return C(PA, a)
            }],
            [".google.dk", function(a) {
                return C(QA, a)
            }],
            [".google.dm", function(a) {
                return C(RA, a)
            }],
            [".google.dz", function(a) {
                return C(SA, a)
            }],
            [".google.com.ec", function(a) {
                return C(TA, a)
            }],
            [".google.ee", function(a) {
                return C(UA, a)
            }],
            [".google.com.eg", function(a) {
                return C(VA, a)
            }],
            [".google.es", function(a) {
                return C(WA, a)
            }],
            [".google.com.et", function(a) {
                return C(XA, a)
            }],
            [".google.fi", function(a) {
                return C(YA, a)
            }],
            [".google.com.fj", function(a) {
                return C(ZA, a)
            }],
            [".google.fm", function(a) {
                return C($A, a)
            }],
            [".google.fr", function(a) {
                return C(aB, a)
            }],
            [".google.ga", function(a) {
                return C(bB, a)
            }],
            [".google.ge", function(a) {
                return C(cB, a)
            }],
            [".google.gg", function(a) {
                return C(dB, a)
            }],
            [".google.com.gh", function(a) {
                return C(eB, a)
            }],
            [".google.com.gi", function(a) {
                return C(fB, a)
            }],
            [".google.gl", function(a) {
                return C(gB, a)
            }],
            [".google.gm", function(a) {
                return C(hB, a)
            }],
            [".google.gr", function(a) {
                return C(iB, a)
            }],
            [".google.com.gt", function(a) {
                return C(jB, a)
            }],
            [".google.gy", function(a) {
                return C(kB, a)
            }],
            [".google.com.hk", function(a) {
                return C(lB, a)
            }],
            [".google.hn", function(a) {
                return C(mB, a)
            }],
            [".google.hr", function(a) {
                return C(nB, a)
            }],
            [".google.ht", function(a) {
                return C(oB, a)
            }],
            [".google.hu", function(a) {
                return C(pB, a)
            }],
            [".google.co.id", function(a) {
                return C(qB, a)
            }],
            [".google.ie", function(a) {
                return C(rB, a)
            }],
            [".google.co.il", function(a) {
                return C(sB, a)
            }],
            [".google.im", function(a) {
                return C(tB, a)
            }],
            [".google.co.in", function(a) {
                return C(uB, a)
            }],
            [".google.iq", function(a) {
                return C(vB, a)
            }],
            [".google.is", function(a) {
                return C(wB, a)
            }],
            [".google.it", function(a) {
                return C(xB, a)
            }],
            [".google.je", function(a) {
                return C(yB, a)
            }],
            [".google.com.jm", function(a) {
                return C(zB, a)
            }],
            [".google.jo", function(a) {
                return C(AB, a)
            }],
            [".google.co.jp", function(a) {
                return C(BB, a)
            }],
            [".google.co.ke", function(a) {
                return C(CB, a)
            }],
            [".google.com.kh", function(a) {
                return C(DB, a)
            }],
            [".google.ki", function(a) {
                return C(EB, a)
            }],
            [".google.kg", function(a) {
                return C(FB, a)
            }],
            [".google.co.kr", function(a) {
                return C(GB, a)
            }],
            [".google.com.kw", function(a) {
                return C(HB, a)
            }],
            [".google.kz", function(a) {
                return C(IB, a)
            }],
            [".google.la", function(a) {
                return C(JB, a)
            }],
            [".google.com.lb", function(a) {
                return C(KB, a)
            }],
            [".google.li", function(a) {
                return C(LB, a)
            }],
            [".google.lk", function(a) {
                return C(MB, a)
            }],
            [".google.co.ls", function(a) {
                return C(NB, a)
            }],
            [".google.lt", function(a) {
                return C(OB, a)
            }],
            [".google.lu", function(a) {
                return C(PB, a)
            }],
            [".google.lv", function(a) {
                return C(QB, a)
            }],
            [".google.com.ly", function(a) {
                return C(RB, a)
            }],
            [".google.md", function(a) {
                return C(SB, a)
            }],
            [".google.me", function(a) {
                return C(TB, a)
            }],
            [".google.mg", function(a) {
                return C(UB, a)
            }],
            [".google.mk", function(a) {
                return C(VB, a)
            }],
            [".google.ml", function(a) {
                return C(WB, a)
            }],
            [".google.com.mm", function(a) {
                return C(XB, a)
            }],
            [".google.mn", function(a) {
                return C(YB, a)
            }],
            [".google.ms", function(a) {
                return C(ZB, a)
            }],
            [".google.com.mt", function(a) {
                return C($B, a)
            }],
            [".google.mu", function(a) {
                return C(aC, a)
            }],
            [".google.mv", function(a) {
                return C(bC, a)
            }],
            [".google.mw", function(a) {
                return C(cC, a)
            }],
            [".google.com.mx", function(a) {
                return C(dC, a)
            }],
            [".google.com.my", function(a) {
                return C(eC, a)
            }],
            [".google.co.mz", function(a) {
                return C(fC, a)
            }],
            [".google.com.na", function(a) {
                return C(gC, a)
            }],
            [".google.com.ng", function(a) {
                return C(hC, a)
            }],
            [".google.com.ni", function(a) {
                return C(iC, a)
            }],
            [".google.ne", function(a) {
                return C(jC, a)
            }],
            [".google.nl", function(a) {
                return C(kC, a)
            }],
            [".google.no", function(a) {
                return C(lC, a)
            }],
            [".google.com.np", function(a) {
                return C(mC, a)
            }],
            [".google.nr", function(a) {
                return C(nC, a)
            }],
            [".google.nu", function(a) {
                return C(oC, a)
            }],
            [".google.co.nz", function(a) {
                return C(pC, a)
            }],
            [".google.com.om", function(a) {
                return C(qC, a)
            }],
            [".google.com.pa", function(a) {
                return C(rC, a)
            }],
            [".google.com.pe", function(a) {
                return C(sC, a)
            }],
            [".google.com.pg", function(a) {
                return C(tC, a)
            }],
            [".google.com.ph", function(a) {
                return C(uC, a)
            }],
            [".google.com.pk", function(a) {
                return C(vC, a)
            }],
            [".google.pl", function(a) {
                return C(wC, a)
            }],
            [".google.pn", function(a) {
                return C(xC, a)
            }],
            [".google.com.pr", function(a) {
                return C(yC, a)
            }],
            [".google.ps", function(a) {
                return C(zC, a)
            }],
            [".google.pt", function(a) {
                return C(AC, a)
            }],
            [".google.com.py", function(a) {
                return C(BC, a)
            }],
            [".google.com.qa", function(a) {
                return C(CC, a)
            }],
            [".google.ro", function(a) {
                return C(DC, a)
            }],
            [".google.rw", function(a) {
                return C(EC, a)
            }],
            [".google.com.sa", function(a) {
                return C(FC, a)
            }],
            [".google.com.sb", function(a) {
                return C(GC, a)
            }],
            [".google.sc", function(a) {
                return C(HC, a)
            }],
            [".google.se", function(a) {
                return C(IC, a)
            }],
            [".google.com.sg", function(a) {
                return C(JC, a)
            }],
            [".google.sh", function(a) {
                return C(KC, a)
            }],
            [".google.si", function(a) {
                return C(LC, a)
            }],
            [".google.sk", function(a) {
                return C(MC, a)
            }],
            [".google.sn", function(a) {
                return C(NC, a)
            }],
            [".google.so", function(a) {
                return C(OC, a)
            }],
            [".google.sm", function(a) {
                return C(QC, a)
            }],
            [".google.sr", function(a) {
                return C(RC, a)
            }],
            [".google.st", function(a) {
                return C(SC, a)
            }],
            [".google.com.sv", function(a) {
                return C(TC, a)
            }],
            [".google.td", function(a) {
                return C(UC, a)
            }],
            [".google.tg", function(a) {
                return C(VC, a)
            }],
            [".google.co.th", function(a) {
                return C(WC, a)
            }],
            [".google.com.tj", function(a) {
                return C(XC, a)
            }],
            [".google.tl", function(a) {
                return C(YC, a)
            }],
            [".google.tm", function(a) {
                return C(ZC, a)
            }],
            [".google.tn", function(a) {
                return C($C, a)
            }],
            [".google.to", function(a) {
                return C(aD, a)
            }],
            [".google.com.tr", function(a) {
                return C(bD, a)
            }],
            [".google.tt", function(a) {
                return C(cD, a)
            }],
            [".google.com.tw", function(a) {
                return C(dD, a)
            }],
            [".google.co.tz", function(a) {
                return C(eD, a)
            }],
            [".google.com.ua", function(a) {
                return C(fD, a)
            }],
            [".google.co.ug", function(a) {
                return C(gD, a)
            }],
            [".google.co.uk", function(a) {
                return C(hD, a)
            }],
            [".google.com.uy", function(a) {
                return C(iD, a)
            }],
            [".google.co.uz", function(a) {
                return C(jD, a)
            }],
            [".google.com.vc", function(a) {
                return C(kD, a)
            }],
            [".google.co.ve", function(a) {
                return C(lD, a)
            }],
            [".google.vg", function(a) {
                return C(mD, a)
            }],
            [".google.co.vi", function(a) {
                return C(nD, a)
            }],
            [".google.com.vn", function(a) {
                return C(oD, a)
            }],
            [".google.vu", function(a) {
                return C(pD, a)
            }],
            [".google.ws", function(a) {
                return C(qD, a)
            }],
            [".google.rs", function(a) {
                return C(rD, a)
            }],
            [".google.co.za", function(a) {
                return C(sD, a)
            }],
            [".google.co.zm", function(a) {
                return C(tD, a)
            }],
            [".google.co.zw", function(a) {
                return C(uD, a)
            }],
            [".google.cat", function(a) {
                return C(vD, a)
            }]
        ].map(function(a) {
            var b = _.A(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var xD = function(a, b, c) {
        var d = _.Ad("LINK", a);
        try {
            d.rel = "preload";
            if (b instanceof Zf) var e = Ua(b).toString();
            else {
                if (b instanceof La) var f = Ma(b);
                else {
                    if (b instanceof La) var g = b;
                    else b = "object" == typeof b && b.Ra ? b.Na() : String(b), $f.test(b) || (b = "about:invalid#zClosurez"), g = _.ab(b);
                    f = Ma(g)
                }
                e = f
            }
            d.href = e
        } catch (h) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (h) {}
    };
    var Tf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var ig = _.t,
        yD = function(a) {
            var b = new x.Map([
                ["domain", _.t.location.hostname]
            ]);
            jg[3] >= qe() && b.set("adsid", jg[1]);
            return Jd(wD.get(a).js, b)
        },
        jg, zD, hg = function() {
            ig = _.t;
            jg = ig.googleToken = ig.googleToken || {};
            var a = qe();
            jg[1] && jg[3] > a && 0 < jg[2] || (jg[1] = "", jg[2] = -1, jg[3] = -1, jg[4] = "", jg[6] = "");
            zD = ig.googleIMState = ig.googleIMState || {};
            wD.has(zD[1]) || (zD[1] = ".google.com");
            Array.isArray(zD[5]) || (zD[5] = []);
            "boolean" !== typeof zD[6] && (zD[6] = !1);
            Array.isArray(zD[7]) || (zD[7] = []);
            "number" !== typeof zD[8] && (zD[8] = 0)
        },
        AD = function(a) {
            hg();
            wD.has(a) && (zD[1] = a)
        },
        kg = {
            hd: function() {
                return 0 < zD[8]
            },
            pf: function() {
                zD[8]++
            },
            qf: function() {
                0 < zD[8] && zD[8]--
            },
            rf: function() {
                zD[8] = 0
            },
            Ah: function() {
                return !1
            },
            wc: function() {
                return zD[5]
            },
            Cd: function(a) {
                try {
                    a()
                } catch (b) {
                    _.t.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Zd: function() {
                if (!kg.hd()) {
                    var a = _.t.document,
                        b = function(e) {
                            e = yD(e);
                            a: {
                                try {
                                    var f = Lu();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            xD(a, e.toString(), f);
                            f = _.Ad("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.t.processGoogleToken({}, 2)
                            };
                            Va(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), kg.pf()
                            } catch (g) {}
                        },
                        c = zD[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.t.setTimeout(function() {
                        return _.t.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        BD = function(a) {
            _.t.processGoogleToken = _.t.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                hg();
                1 == c ? kg.rf() : kg.qf();
                var k = ig.googleToken = ig.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !kg.hd() && (!(jg[3] >= qe()) || "NT" == jg[1]);
                var m = !(jg[3] >= qe()) && 0 != c;
                if (l || e || m) e = qe(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.Px(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, hg();
                if (l || !kg.hd()) {
                    c = kg.wc();
                    for (b = 0; b < c.length; b++) kg.Cd(c[b]);
                    c.length = 0
                }
            };
            lg(a)
        };
    var ip = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.H = b.rootMargin ? og(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = Lc(this.H, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.B = qg(b.threshold);
            this.o = a;
            this.j = [];
            this.I = [];
            this.C = !1;
            this.m = null;
            this.D = Ar(this.l, 100, this)
        },
        CD = function(a) {
            if (a.root) var b = rg(a.root);
            else {
                var c = _.Xu(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = Lc(a.H, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        DD = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Hg(a.B, function(f) {
                return f < d != f < e
            })
        };
    ip.prototype.l = function() {
        var a = this,
            b = CD(this);
        _.Cr(this.j, function(c) {
            var d = c.target,
                e = rg(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            DD(a, c.qa, d) && a.I.push(d);
            c.qa = d
        });
        this.I.length && this.o(ED(this), this)
    };
    ip.prototype.observe = function(a) {
        _.Hg(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            qa: null
        }), this.l(), this.C || (this.C = !0, _.cb(_.t, "scroll", this.D), _.cb(_.t, "resize", this.D), _.t.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    ip.prototype.unobserve = function(a) {
        this.j = _.pg(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    ip.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.Pd(_.t, "scroll", this.D);
        _.Pd(_.t, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var ED = function(a) {
        var b = [].concat(_.Ld(a.I));
        a.I.length = 0;
        return b
    };
    var FD = function(a, b, c, d, e, f) {
        _.Qx.call(this);
        this.Ja = a;
        this.status = 1;
        this.C = b;
        this.m = c;
        this.U = d;
        this.Tb = !!e;
        this.l = Math.random();
        this.H = {};
        this.j = null;
        this.B = (0, _.rr)(this.F, this);
        this.o = f
    };
    _.P(FD, _.Qx);
    FD.prototype.F = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Tb && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ia(b) && (a = b.i, b.c === this.Ja && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, GD(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ia(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var GD = function(a) {
        var b = {};
        b.c = a.Ja;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.C.postMessage(JSON.stringify(b), a.m)
    };
    FD.prototype.O = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && GD(this)
            } catch (a) {}
            window.setTimeout((0, _.rr)(this.O, this), 50)
        }
    };
    FD.prototype.connect = function(a) {
        a && (this.j = a);
        _.cb(window, "message", this.B);
        this.U && this.O()
    };
    var HD = function(a, b, c) {
            a.H[b] = c
        },
        ID = function(a, b, c) {
            var d = {};
            d.c = a.Ja;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    FD.prototype.I = function() {
        this.status = 3;
        _.Pd(window, "message", this.B);
        _.Qx.prototype.I.call(this)
    };
    var JD = new x.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        KD = new x.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var LD = function(a) {
        _.R.call(this, a)
    };
    _.P(LD, _.R);
    var MD = function(a) {
        _.R.call(this, a)
    };
    _.P(MD, _.R);
    var ND = function(a) {
        _.R.call(this, a)
    };
    _.P(ND, _.R);
    var OD = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        PD = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        QD = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        RD = function(a, b) {
            if (3 == OD(b)) return !1;
            a();
            return !0
        },
        SD = function(a, b) {
            if (!RD(a, b)) {
                var c = !1,
                    d = PD(b),
                    e = function() {
                        !c && RD(a, b) && (c = !0, _.Pd(b, d, e))
                    };
                d && _.cb(b, d, e)
            }
        };
    var No = function(a, b) {
            this.j = a;
            this.D = b;
            this.m = {}
        },
        Oo = function(a) {
            Io() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, Br), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = Io(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.u(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, m;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (m = l.reportGmaTouchEvent) || m.postMessage(h)
                        }
                    } catch (n) {
                        a.D("paw_sigs", {
                            msg: "reportTouchError",
                            err: n instanceof Error ? n.message : "nonError"
                        })
                    }
                })()
            }, Br))
        },
        Jo = function(a, b, c, d, e) {
            var f = 200,
                g = xo;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * ge())),
                k = 0,
                l = function(m) {
                    try {
                        var n = "object" === typeof m.data ? m.data : JSON.parse(m.data);
                        h === n.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), n.signal ? c(n.signal) : n.error && d(n.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == m.data ? "null" : 500 < m.data.length ? m.data.substring(0, 500) : m.data
                        })
                    }
                };
            window.addEventListener("message", function(m) {
                e(903, function() {
                    l(m)
                })()
            });
            a.postMessage(_.u(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        Io = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var UD, TD;
    UD = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new TD;
        this.sideRailProcessedFixedElements = new x.Set;
        this.sideRailAvailableSpace = new x.Map
    };
    _.Jl = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new x.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new x.Map)) : a.google_reactive_ads_global_state = new UD;
        return a.google_reactive_ads_global_state
    };
    TD = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var XD;
    _.VD = function(a) {
        this.j = _.Jl(a).floatingAdsStacking
    };
    _.WD = function(a) {
        a = _.iv(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    XD = function(a) {
        var b = _.WD(a);
        _.Cr(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.YD = function(a) {
        this.m = a;
        this.j = null
    };
    _.ZD = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            XD(b);
            a.j = c
        }
    };
    _.$D = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            XD(b);
            a.j = null
        }
    };
    var Kl, vl, yl;
    Kl = 728 * 1.38;
    _.Ml = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.aE = function(a) {
        var b = _.xl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    vl = function(a, b) {
        return (a = _.xl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    yl = function(a) {
        return (a = _.aE(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.xl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.bE = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Nl = 90 * 1.38;
    var cE;
    _.dE = function(a, b) {
        if (!a.body) return null;
        var c = new cE;
        c.apply(a, b);
        return function() {
            _.Nv(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.D,
                position: c.I,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    cE = function() {
        this.j = this.C = this.I = this.D = null;
        this.m = 0
    };
    cE.prototype.apply = function(a, b) {
        this.D = a.body.style.overflow;
        this.I = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.bE(b);
        _.Nv(a.body, "top", -this.m + "px")
    };
    _.Al = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Ig(a, b)
    };
    _.zl = function(a) {
        return !!a && 1 > a.length
    };
    var eE = function(a) {
        _.Qx.call(this);
        this.m = a;
        this.j = null;
        this.l = {};
        this.H = 0;
        this.C = null
    };
    _.P(eE, _.Qx);
    eE.prototype.I = function() {
        this.C && _.Pd(this.m, "message", this.C);
        _.Qx.prototype.I.call(this)
    };
    var gE = function(a) {
            var b;
            return "function" === typeof(null == (b = a.m) ? void 0 : b.__uspapi) || null != fE(a)
        },
        iE = function(a, b) {
            var c = {};
            if (gE(a)) {
                var d = _.zr(function() {
                    return b(c)
                });
                hE(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, 500)
            } else b(c)
        },
        hE = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.m) ? void 0 : c.__uspapi) ? (a = a.m.__uspapi, a("getUSPData", 1, b)) : fE(a) && (jE(a), c = ++a.H, a.l[c] = b, a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        fE = function(a) {
            if (a.j) return a.j;
            a.j = sv(a.m, "__uspapiLocator");
            return a.j
        },
        jE = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.l) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.cb(a.m, "message", a.C))
        };
    var lE = function(a) {
        _.R.call(this, a, -1, kE)
    };
    _.P(lE, _.R);
    var kE = [1, 2];
    var mE = function(a) {
        _.R.call(this, a)
    };
    _.P(mE, _.R);
    var $m = function(a) {
        _.Qx.call(this);
        this.C = a;
        this.m = this.j = null;
        this.l = {};
        this.o = 0;
        this.H = !1
    };
    _.P($m, _.Qx);
    var nE = function(a) {
            a.H || (a.j || (a.j = sv(a.C, "googlefcPresent")), a.H = !0);
            return !!a.j
        },
        pE = function(a) {
            return new x.Promise(function(b) {
                if (nE(a))
                    if (a.j === a.C) {
                        var c = a.j.googlefc || (a.j.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push("loaded", function(e) {
                            b(Wd(mE, e))
                        })
                    } else {
                        oE(a);
                        c = a.o++;
                        a.l[c] = b;
                        var d = {};
                        a.j.postMessage((d.__fciCall = {
                            command: "loaded",
                            callId: c
                        }, d), "*")
                    }
            })
        },
        oE = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Wd(mE, b.data.__fciReturn);
                    (0, a.l[y(c, 1)])(c)
                } catch (d) {}
            }, _.cb(a.C, "message", a.m))
        };
    var qE = {},
        Ng = (qE[23] = .001, qE[211] = !1, qE[253] = !1, qE[246] = [], qE[226] = [], qE[150] = "", qE[221] = /^true$/.test("false"), qE[36] = /^true$/.test("false"), qE[172] = null, qE[260] = void 0, qE[251] = null, qE),
        Mg = function() {
            this.j = !1
        };
    var Bj = function(a) {
            var b = void 0 === b ? ye(_.t) : b;
            this.id = a;
            this.m = Math.random() < _.Og(23);
            this.j = {
                pvsid: String(b)
            }
        },
        rE = function(a) {
            a = Kg(a);
            var b;
            mh.set(a, (null != (b = mh.get(a)) ? b : 0) + 1)
        },
        lh = function() {
            return [].concat(_.Ld(_.u(mh, "values").call(mh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        L = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        Dj = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (sE()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.Px(window, tE(a) || "", void 0, _.H(Qw))
        },
        tE = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.hk(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        uE = function(a) {
            var b = [].concat(_.Ld(_.u(mh, "keys").call(mh)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), L(a, "nw_id", b.join()))
        },
        mi = function(a, b) {
            L(a, "vrg", String(b.mb || b.Ha));
            uE(a);
            L(a, "nslots", lh().toString());
            b = ze();
            b.length && L(a, "eid", b.join());
            L(a, "pub_url", document.URL)
        },
        gi = function(a, b, c) {
            c = void 0 === c ? _.Og(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.Og(23);
            Math.random() < c && (a = new Bj(a), b(a), Dj(a, 1))
        },
        mh = new x.Map,
        sE = Rh(function() {
            return !!mv(_.t.location.href)
        });
    var $g = function() {
        Ay.call(this, _.H(ah) || _.H(Ex) ? 1 : 0, _.t);
        this.D = 0;
        var a = _.H(ah) || _.H(Ex);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.P($g, Ay);
    _.vE = function(a) {
        this.context = a
    };
    var wE = {},
        sj = (wE.companion_ads = "companionAds", wE.content = "content", wE.publisher_ads = "pubads", wE);
    var oh = function(a) {
        _.R.call(this, a)
    };
    _.P(oh, _.R);
    oh.prototype.getWidth = function() {
        return y(this, 1)
    };
    var sh = function(a, b) {
        return _.z(a, 1, b)
    };
    oh.prototype.getHeight = function() {
        return y(this, 2)
    };
    var rh = function(a, b) {
            return _.z(a, 2, b)
        },
        Dk = function() {
            var a = new oh;
            return _.z(a, 3, !0)
        };
    var Oj = function(a) {
        _.R.call(this, a, -1, xE)
    };
    _.P(Oj, _.R);
    var Lj = function(a) {
            return y(a, 1)
        },
        Nj = function(a, b) {
            return _.z(a, 1, b)
        };
    Oj.prototype.xa = function() {
        return kl(this, 2)
    };
    var Mj = function(a, b) {
            return _.jh(a, 2, b)
        },
        xE = [2];
    var Lp = function(a) {
        _.R.call(this, a)
    };
    _.P(Lp, _.R);
    var Ln = function(a) {
        _.R.call(this, a, -1, yE)
    };
    _.P(Ln, _.R);
    var Rn = function(a, b) {
        return _.z(a, 1, b)
    };
    Ln.prototype.xa = function() {
        return kl(this, 2)
    };
    var Pn = function(a, b) {
            return _.jh(a, 2, b)
        },
        yE = [2];
    var to = function(a) {
        _.R.call(this, a, -1, zE)
    };
    _.P(to, _.R);
    var Qn = function(a, b) {
            Ze(a, 1, Ln, b)
        },
        zE = [1];
    var ro = function(a) {
        _.R.call(this, a, -1, AE)
    };
    _.P(ro, _.R);
    var AE = [2, 3];
    var po = function(a) {
        _.R.call(this, a)
    };
    _.P(po, _.R);
    var BE = function(a) {
        _.R.call(this, a)
    };
    _.P(BE, _.R);
    BE.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.z(this, 5, a)
    };
    BE.prototype.clearTagForChildDirectedTreatment = function() {
        return Ee(this, 5)
    };
    BE.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.z(this, 6, a)
    };
    var gk = function(a) {
        _.R.call(this, a)
    };
    _.P(gk, _.R);
    var DE = function(a) {
        _.R.call(this, a, -1, CE)
    };
    _.P(DE, _.R);
    DE.prototype.ta = function() {
        return Tc(this, Oj, 14)
    };
    DE.prototype.Qa = function() {
        return Ke(this, gk, 18)
    };
    var EE = function(a) {
        return Ke(a, BE, 25)
    };
    DE.prototype.getCorrelator = function() {
        return y(this, 26)
    };
    DE.prototype.setCorrelator = function(a) {
        return _.z(this, 26, a)
    };
    DE.prototype.xc = function() {
        return qo(this, po, 33)
    };
    var CE = [2, 3, 14];
    var Lh = function() {
        this.j = new x.Map
    };
    var FE = function() {
            this.m = {};
            this.j = new DE;
            this.D = new x.Map;
            this.j.setCorrelator(Bv());
            _.Og(36) && _.z(this.j, 15, !0)
        },
        GE = function(a) {
            var b = $h(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.Lg(Lh),
                    e = ++_.Lg($g).D;
                d.j.set(c, e);
                _.z(a, 20, e);
                b.m[c] = a
            }
        },
        ln = function(a, b) {
            var c;
            return null != (c = a.m[b]) ? c : null
        },
        $h = function() {
            return _.Lg(FE)
        };
    var HE = Rh(Oh);
    var vi = ["auto", "inherit", "100%"],
        yi = vi.concat(["none"]);
    var Ul = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        ti(a, function(e) {
            return d = ui(e, b, 10, 10)
        }, c);
        return d
    };
    var IE = function(a, b, c, d, e, f) {
            this.D = _.Hv(a);
            this.m = _.Hv(b);
            this.I = c;
            this.j = _.Hv(d);
            this.C = e;
            this.l = f
        },
        JE = function(a) {
            return JSON.stringify({
                windowCoords_t: a.D.top,
                windowCoords_r: a.D.right,
                windowCoords_b: a.D.bottom,
                windowCoords_l: a.D.left,
                frameCoords_t: a.m.top,
                frameCoords_r: a.m.right,
                frameCoords_b: a.m.bottom,
                frameCoords_l: a.m.left,
                styleZIndex: a.I,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.C,
                yInView: a.l
            })
        },
        KE = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.Gv(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = Rv(a);
            d = _.Eg(_.Fg, a);
            var e = new Iv(c.x, c.y, d.width, d.height);
            c = Jv(e);
            d = String(Dg(a, "zIndex"));
            var f = new _.Gv(0, Infinity, Infinity, 0);
            for (var g = Tu(a), h = g.j.body, k = g.j.documentElement, l = Yu(g.j); a = Qv(a);)
                if (!(_.ds && 0 == a.clientWidth || gs && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Dg(a, "overflow")) {
                    var m = Rv(a),
                        n = new _.Gh(a.clientLeft, a.clientTop);
                    m.x += n.x;
                    m.y += n.y;
                    f.top = Math.max(f.top, m.y);
                    f.right = Math.min(f.right, m.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, m.y + a.clientHeight);
                    f.left = Math.max(f.left, m.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.Xu(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Iv(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Kv(e, f) : null;
            g = a = 0;
            l && !(new _.Jh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.Gv(0, 0, 0, 0);
            if (h = f)(e = Kv(e, f)) ? (k = Jv(f), m = Jv(e), h = m.right != k.left && k.right != m.left, k = m.bottom != k.top && k.bottom != m.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.Gv(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new IE(b, c, d, l, a, g)
        };
    var LE = function(a) {
        this.I = a;
        this.C = null;
        this.O = this.status = 0;
        this.m = null;
        this.Ja = "sfchannel" + a
    };
    var ME = function(a) {
        this.j = a
    };
    var NE = function(a, b) {
        this.rc = a;
        this.tc = b;
        this.m = this.j = !1
    };
    var OE = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.I = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Tb = g;
        this.hostpageLibraryTokens = h;
        this.j = "";
        this.Bb = void 0 === k ? "" : k
    };
    var PE = function(a, b) {
        this.m = a;
        this.I = b
    };
    PE.prototype.j = function(a) {
        this.I && a && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var QE = function(a, b, c) {
        PE.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.P(QE, PE);
    QE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m,
            version: this.version
        })
    };
    var RE = function(a, b, c, d) {
        PE.call(this, a, void 0 === d ? "" : d);
        this.C = b;
        this.D = c
    };
    _.P(RE, PE);
    RE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m,
            initialWidth: this.C,
            initialHeight: this.D
        })
    };
    var SE = function(a, b, c) {
        PE.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.P(SE, PE);
    SE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m,
            description: this.description
        })
    };
    var TE = function(a, b, c, d) {
        PE.call(this, a, void 0 === d ? "" : d);
        this.D = b;
        this.push = c
    };
    _.P(TE, PE);
    TE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m,
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        })
    };
    var UE = function(a, b) {
        PE.call(this, a, void 0 === b ? "" : b)
    };
    _.P(UE, PE);
    UE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m
        })
    };
    var VE = function(a, b, c) {
        PE.call(this, a, void 0 === c ? "" : c);
        this.C = b
    };
    _.P(VE, PE);
    VE.prototype.j = function() {
        var a = {
            uid: this.m,
            newGeometry: JE(this.C)
        };
        return PE.prototype.j.call(this, a)
    };
    var WE = function(a, b, c, d, e, f) {
        VE.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.D = d;
        this.push = e
    };
    _.P(WE, VE);
    WE.prototype.j = function() {
        var a = {
            uid: this.m,
            success: this.success,
            newGeometry: JE(this.C),
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        };
        this.I && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var XE = function(a, b, c, d) {
        PE.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.P(XE, PE);
    XE.prototype.j = function() {
        return PE.prototype.j.call(this, {
            uid: this.m,
            width: this.width,
            height: this.height
        })
    };
    var YE = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Dd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var ZE = function() {
            this.j = []
        },
        aF = function(a, b, c, d, e) {
            a.j.push(new $E(b, c, d, e))
        },
        bF = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.I), c.C)) : c.D.style[c.j] = c.I
            }
            a.j.length = 0
        },
        $E = function(a, b, c, d) {
            this.D = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.I = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var cF = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        dF = function() {
            var a = window,
                b = _.se(a);
            b && cF({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        eF = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.se(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && cF(_.u(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.se() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var jF = function(a) {
        LE.call(this, a.uniqueId);
        var b = this;
        this.H = a.nh;
        this.B = 1 === a.size;
        this.ca = new NE(a.permissions.rc && !this.B, a.permissions.tc && !this.B);
        this.l = a.rd;
        var c;
        this.da = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.Y = "file:" == c ? "*" : c + "//" + d;
        this.ia = !!a.Tb;
        c = "//" + a.be + (_.H(dx) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.J = a.be ? c : "//tpc.googlesyndication.com";
        this.ka = a.zc ? "*" : "https:" + this.J;
        this.fa = !!a.Be;
        this.ha = fF(a);
        this.D = new ZE;
        gF(this, a.rd, a.size);
        this.C = this.T = KE(a.rd);
        this.U = a.vf || "1-0-40";
        var e;
        this.ja = null != (e = a.ue) ? e : "";
        this.la = a.Bb;
        hF(this, a);
        this.va = eF(412, function() {
            return iF(b)
        }, a.Ga);
        this.F = -1;
        this.o = 0;
        var f = eF(415, function() {
            b.j && (b.j.name = "", a.Td && a.Td(), _.Pd(b.j, "load", f))
        }, a.Ga);
        _.cb(this.j, "load", f);
        this.kd = eF(413, this.kd, a.Ga);
        this.td = eF(417, this.td, a.Ga);
        this.ud = eF(419, this.ud, a.Ga);
        this.ed = eF(411, this.ed, a.Ga);
        this.cd = eF(409, this.cd, a.Ga);
        this.M = eF(410, this.M, a.Ga);
        this.nd = eF(416, this.nd, a.Ga);
        this.m = new FD(this.Ja, this.j.contentWindow, this.ka, !1);
        HD(this.m, "init_done", (0, _.rr)(this.kd, this));
        HD(this.m, "register_done", (0, _.rr)(this.td, this));
        HD(this.m, "report_error", (0, _.rr)(this.ud, this));
        HD(this.m, "expand_request", (0, _.rr)(this.ed, this));
        HD(this.m, "collapse_request", (0, _.rr)(this.cd, this));
        HD(this.m, "creative_geometry_update", (0, _.rr)(this.M, this));
        this.m.connect((0, _.rr)(this.nd, this))
    };
    _.P(jF, LE);
    var gF = function(a, b, c) {
            a.B ? (b.style.width = _.Tv("100%", !0), b.style.height = _.Tv("auto", !0)) : (b.style.width = _.Tv(c.width, !0), b.style.height = _.Tv(c.height, !0))
        },
        hF = function(a, b) {
            var c = b.zc,
                d = b.content,
                e = b.Rb,
                f = b.size,
                g = void 0 === b.Sb ? "3rd party ad content" : b.Sb,
                h = b.uc;
            b = b.Xc;
            var k = {
                shared: {
                    sf_ver: a.U,
                    ck_on: vy() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.U + ";" + d.length + ";" + d;
            k = new OE(a.I, a.Y, a.T, a.ca, new ME(k), a.B, a.ia, a.da, a.la);
            var l = {};
            l.uid = k.m;
            l.hostPeerName = k.D;
            l.initialGeometry = JE(k.I);
            var m = k.permissions;
            m = JSON.stringify({
                expandByOverlay: m.rc,
                expandByPush: m.tc,
                readCookie: m.j,
                writeCookie: m.m
            });
            l = (l.permissions = m, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.C, l.isDifferentSourceWindow = k.Tb, l.goog_safeframe_hlt = Yz(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k.Bb && (l.pbjsAdConfig = k.Bb);
            k = JSON.stringify(l);
            d += k;
            a.fa && f instanceof _.Jh && (k = _.Zu(_.Su(a.l)), l = _.Zu(_.Su(a.l)).location.protocol + a.J, Iz || Ej(k.document, Jz), Iz++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + Iz,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.B && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.Zu(_.Su(a.l)), f = a.ja, d = a.J, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.U + "/html/container.html" + k), (k = YE(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.fa && (k = mv(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.I, "&p=", encodeURIComponent(_.t.document.location.protocol), "//", encodeURIComponent(_.t.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.ha && (e.sandbox = a.ha);
            h && (e.allow = h);
            b && (e.anonymous = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, Vu(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && za(c, e), h = _.Ad("IFRAME"), Vu(h, c), a.j = h);
            a.B && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    q = jF.prototype;
    q.nd = function() {
        _.cb(window, "resize", this.va);
        _.cb(window, "scroll", this.va)
    };
    q.kd = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new QE(b.uid, b.version, b.sentinel);
            if (this.I !== c.m || this.U !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    q.td = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.I !== (new RE(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    q.ud = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new SE(b.uid, b.description, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d;
            null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    q.ed = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.O) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new TE(b.uid, new _.Gv(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.ca.tc || !c.push && this.ca.rc) {
                var e = c.D,
                    f = c.push,
                    g = this.C = KE(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) aF(this.D, h, "overflowX", "visible", "important"), aF(this.D, h, "overflowY", "visible", "important");
                    var k = Jv(new Iv(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.ia(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    aF(this.D, this.l, "position", "relative");
                    aF(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        aF(this.D, this.l, "width", l + "px");
                        var m = k.getHeight();
                        aF(this.D, this.l, "height", m + "px")
                    } else aF(this.D, this.j, "zIndex", "10000");
                    var n = k.getWidth();
                    aF(this.D, this.j, "width", n + "px");
                    var p = k.getHeight();
                    aF(this.D, this.j, "height", p + "px");
                    aF(this.D, this.j, "left", k.left + "px");
                    aF(this.D, this.j, "top", k.top + "px");
                    this.O = 2;
                    this.C = KE(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            ID(this.m, "expand_response", (new WE(this.I, a, this.C, c.D, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (v) {
            var r;
            null == (r = this.H) || r.error("Invalid EXPAND_REQUEST message. Reason: " + v.message)
        }
    };
    q.cd = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.O) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid)) throw Error("Cannot parse JSON message");
            if (this.I !== (new UE(b.uid, b.sentinel)).m) throw Error("Wrong source container");
            bF(this.D);
            this.O = 0;
            this.j && (this.C = KE(this.j));
            ID(this.m, "collapse_response", (new VE(this.I, this.C)).j())
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var iF = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                kF(a);
                a.F = window.setTimeout((0, _.rr)(a.P, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    jF.prototype.M = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !Ai(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new XE(b.uid, b.width, b.height, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.B) d !== this.j.height && (this.j.height = d, iF(this));
            else {
                var e;
                null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    jF.prototype.P = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                kF(this), this.F = window.setTimeout((0, _.rr)(this.P, this), 1E3), this.o = 1
        }
    };
    var kF = function(a) {
            a.C = KE(a.j);
            ID(a.m, "geometry_update", (new VE(a.I, a.C)).j())
        },
        fF = function(a) {
            var b = null;
            a.de && (b = a.de);
            return null == b ? null : b.join(" ")
        },
        lF = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        mF = ["allow-top-navigation"],
        nF = ["allow-same-origin"],
        oF = pv([].concat(_.Ld(lF), _.Ld(mF)));
    pv([].concat(_.Ld(lF), _.Ld(nF)));
    pv([].concat(_.Ld(lF), _.Ld(mF), _.Ld(nF)));
    var pF = Q(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        qF = {
            Xe: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Yb) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Yb)) throw new RangeError("Invalid subdomain: " + a.Yb);
                return a.Gf ? Id("https://" + a.Yb + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Id("https://" + a.Yb + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            zh: function(a) {
                return C(pF, a)
            }
        };
    var Di = function(a, b) {
        try {
            nb(Po(a, b))
        } catch (c) {}
    };
    var rF = function(a) {
        _.R.call(this, a)
    };
    _.P(rF, _.R);
    var sF = [rF, 4, $s, 2, $s, 1, $s, 3, $s, 5, ct];
    var tF = [.05, .1, .2, .5],
        uF = [0, .5, 1],
        vF = function(a) {
            a = Cf(a);
            if (!a) return -1;
            try {
                var b = Oz(a.document);
                var c = new _.Jh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Jh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        wF = function(a, b) {
            return 0 >= a || 0 >= b ? [] : Lc(tF, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        yF = function(a) {
            this.C = a.G;
            this.D = a.Xa;
            this.H = a.tb;
            this.m = null;
            this.I = a.Ga;
            this.j = xF(this);
            this.l = a.Af || !1
        };
    yF.prototype.getSlotId = function() {
        return this.m
    };
    var AF = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        zF(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.I && a.I(c)
                    }
                    a.j && a.j.unobserve(a.D)
                }
                a.m = b;
                a.j.observe(a.D)
            }
        },
        xF = function(a) {
            var b = a.D.offsetWidth * a.D.offsetHeight,
                c = vF(a.C);
            b = [].concat(_.Ld(uF), _.Ld(wF(c, b)));
            ka(b);
            return _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(d) {
                return BF(a, d)
            }, {
                threshold: b
            }) : new ip(function(d) {
                return BF(a, d)
            }, {
                threshold: b
            })
        },
        BF = function(a, b) {
            try {
                var c = vF(a.C);
                _.Cr(b, function(d) {
                    a.l && zF(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.I && a.I(d)
            }
        },
        zF = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new rF;
            c = _.z(g, 1, c);
            d = _.z(c, 2, d);
            e = _.z(d, 3, e);
            b = _.z(e, 4, b);
            f = _.z(b, 5, f);
            f = lc(Ue(f, sF), 4);
            By(a.H, "1", 10, f, void 0, a.m)
        };
    var CF = function(a, b) {
            this.j = a;
            this.m = b
        },
        DF = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = tv(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Oi = function(a) {
        _.R.call(this, a)
    };
    _.P(Oi, _.R);
    var Qi = [1, 3];
    var Sd = {
        Ug: 0,
        Qg: 1,
        Og: 2,
        Pg: 3,
        Sg: 5,
        Tg: 6,
        Rg: 7
    };
    var EF = Q(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Ii = C(EF);
    var FF = function() {
            this.id = "goog_" + Ou++
        },
        GF = function(a) {
            _.Qx.call(this);
            this.context = a;
            this.H = new x.Map
        };
    _.P(GF, _.Qx);
    GF.prototype.I = function() {
        _.Qx.prototype.I.call(this);
        this.H.clear()
    };
    var IF = function(a, b, c) {
            if (a.D) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.H.get(d)) ? void 0 : e.add(c)) ? f : new x.Set([c]);
            a.H.set(d, g);
            return function() {
                return void HF(a, b, c)
            }
        },
        JF = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new x.Promise(function(d) {
                var e = IF(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        HF = function(a, b, c) {
            var d;
            return !(null == (d = a.H.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    GF.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, m;
        return _.eb(function(n) {
            if (1 == n.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.H.get(e);
                if (null == (g = f) || !g.size) return n.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.A(f);
                m = l.next()
            }
            if (5 != n.j) {
                if (m.done) {
                    n.j = 0;
                    return
                }
                k.bc = m.value;
                return fb(n, 0, 5)
            }
            _.eh(d.context, b, function(p) {
                return function() {
                    d.H.has(e) && f.has(p.bc) && p.bc(h)
                }
            }(k), !0);
            k = {
                bc: k.bc
            };
            m = l.next();
            n.j = 2
        })
    };
    var KF = new FF,
        LF = new FF,
        ep = new FF,
        MF = new FF,
        gp = new FF,
        NF = new FF,
        OF = new FF,
        Vo = new FF,
        PF = new FF,
        QF = new FF;
    var RF = function() {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    RF.prototype.wc = function() {
        return this.j
    };
    var SF, WF, ZF, jm, $F, VF, UF, TF, aG;
    SF = function() {
        this.j = new x.Map;
        this.l = 0;
        this.m = new x.Map;
        this.oc = null;
        this.C = this.I = this.o = this.D = 0;
        this.H = new RF
    };
    WF = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            qb: !0,
            qd: "",
            ub: "",
            ae: 0,
            Qd: 0,
            od: [],
            pd: [],
            hb: !1
        }), _.hn(b, function() {
            a.j.delete(b);
            TF(a, b)
        }), IF(b, LF, function(c) {
            c = c.detail;
            var d = (0, E.K)(a.j.get(b));
            d.qd = y(c, 33) || "";
            d.hb = !0;
            UF(a, b, function() {
                return void(d.qd = "")
            });
            VF(a, b, function() {
                return void(d.hb = !1)
            })
        }))
    };
    _.fp = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.qb) ? d : !1
    };
    _.XF = function(a, b) {
        if (a = a.j.get(b)) a.qb = !1
    };
    _.YF = function(a, b) {
        if (a = a.j.get(b)) a.qb = !0
    };
    ZF = function(a, b) {
        if (!b.length) return [];
        var c = Kg(b[0].getAdUnitPath());
        b.every(function(g) {
            return Kg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.A(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.A(e.value);
            e = f.next().value;
            (f = f.next().value.qd) && Kg(e.getAdUnitPath()) === c && !_.u(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    jm = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.ub) ? d : ""
    };
    $F = function(a, b) {
        return (a = a.j.get(b)) ? a.ae - 1 : 0
    };
    VF = function(a, b, c) {
        (a = a.j.get(b)) && a.od.push(c)
    };
    UF = function(a, b, c) {
        (a = a.j.get(b)) && a.pd.push(c)
    };
    TF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.pd.slice(), a.pd.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    aG = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.od.slice(), a.od.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    SF.prototype.hb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.hb) ? c : !1
    };
    var bG = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        vz.call(this, b, c);
        this.context = a
    };
    _.P(Z, vz);
    Z.prototype.U = function(a) {
        bh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var cG = function(a, b, c, d, e) {
        var f = null,
            g = _.Xg(a.context, b, e);
        _.cb(c, d, g) && (f = function() {
            return _.Pd(c, d, g)
        }, _.hn(a, f));
        return f
    };
    var dG = /(<head(\s+[^>]*)?>)/i,
        Ip = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.A = V(this);
            this.l = W(this, b);
            this.B = X(this, c);
            this.F = W(this, d);
            this.o = W(this, e)
        };
    _.P(Ip, Z);
    Ip.prototype.j = function() {
        var a;
        0 === this.l.value.kind && null != (a = this.B.value) && y(a, 1) ? (a = this.l.value.Aa, this.o.value || Ea() || (a = a.replace(dG, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && !this.o.value && (a = a.replace(dG, '$1<meta name="referrer" content="origin">')), this.A.j({
            kind: 0,
            Aa: a
        })) : this.A.j(this.l.value)
    };
    var lq = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.B = X(this, c);
        this.l = X(this, d);
        yz(this, e);
        this.F = W(this, f);
        this.o = W(this, g);
        this.M = W(this, h);
        this.J = JF(b, PF)
    };
    _.P(lq, Z);
    lq.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.eb(function(e) {
            if (1 == e.j) {
                var f = !a.M.value;
                if (null == a.l.value || "height" !== a.B.value || f) return e.return();
                b = a.F.value;
                c = a.o.value;
                eG(c, !1);
                _.Nv(c, "min-width", "100%");
                _.Nv(b, "min-width", "100%");
                return fb(e, a.J, 2)
            }
            if (a.D) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            eG(c, !0);
            e.j = 0
        })
    };
    var eG = function(a, b) {
        _.Nv(a, "visibility", b ? "visible" : "hidden")
    };
    var ej = new x.Map,
        dj = new x.Map;
    var gj = function(a, b) {
        this.push = K(a, 76, b.push.bind(b))
    };
    var ij = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    ij.prototype.getMessageId = function() {
        return this.messageId
    };
    ij.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var fG = N(2),
        gG = N(3),
        hG = N(4),
        iG = N(5),
        jG = N(6),
        kG = N(12),
        lG = N(14),
        mG = N(16),
        nG = N(19),
        oG = N(20),
        An = N(23),
        Bn = N(26),
        pG = N(28),
        qG = N(30),
        rG = N(31),
        sG = N(34),
        tG = N(35),
        uG = N(36),
        mo = N(38),
        vG = N(40),
        wG = N(48),
        xG = N(50),
        yG = N(60),
        zG = N(63),
        AG = N(64),
        BG = N(66),
        CG = N(68),
        DG = N(69),
        EG = N(70),
        FG = N(71),
        GG = N(78),
        HG = N(80),
        IG = N(82),
        JG = N(84),
        KG = N(85),
        LG = N(87),
        Pj = N(88),
        MG = N(92),
        NG = N(93),
        OG = N(99),
        PG = N(103),
        QG = N(104),
        RG = N(105),
        SG = N(106),
        TG = N(107),
        UG = N(108),
        VG = N(113),
        WG = N(114),
        XG = N(115),
        YG = N(117),
        ZG = N(118),
        $G = N(119),
        jk = N(121),
        aH = N(122),
        bH = N(123),
        yo = N(125),
        cH = N(126),
        dH = N(127),
        fo = N(144),
        Sn = N(129),
        Un = N(132),
        eH = N(134),
        fH = N(135),
        gH = N(136),
        hH = N(137),
        iH = N(138),
        jH = N(139),
        kH = N(140),
        Ro = N(142),
        lH = N(143),
        mH = N(145),
        nH = N(147),
        so = N(148);
    var oH = function(a, b, c) {
        var d = this;
        this.addEventListener = K(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, kj("Service.addEventListener", [e, f])), d;
            var g = lj(e);
            if (!g) return O(b, NG(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = K(a, 904, function(e, f) {
            var g = lj(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, kj("Service.removeEventListener", [e, f]))
        });
        this.getSlots = K(a, 573, function() {
            return c.j.map(function(e) {
                return (0, E.K)(e.j)
            })
        });
        this.getSlotIdMap = K(a, 574, function() {
            for (var e = {}, f = _.A(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = K(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = K(a, 575, function() {
            return c.getName()
        })
    };
    var mj = function(a, b, c) {
        oH.call(this, a, b, c);
        this.notifyUnfilledSlots = K(a, 69, function(d) {
            c.qb && pH(c, qH(c, d))
        });
        this.refreshAllSlots = K(a, 60, function() {
            c.qb && pH(c)
        });
        this.setVideoSession = K(a, 61, function(d, e, f) {
            c.J = e;
            c.M = f;
            "number" === typeof d && (e = $h().j, _.z(e, 29, d))
        });
        this.getDisplayAdsCorrelator = K(a, 62, function(d) {
            return rH(c, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = K(a, 63, function() {
            var d = $h().j;
            d = y(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = K(a, 64, function(d) {
            var e = _.u(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && sH(c, e)
        });
        this.onImplementationLoaded = K(a, 65, function() {
            c.C.info(wG("GPT CompanionAds"))
        });
        this.slotRenderEnded = K(a, 67, function(d, e, f) {
            var g = _.u(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && tH(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = K(a, 59, function(d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.P(mj, oH);
    var oj = function(a, b, c) {
        oH.call(this, a, b, c);
        this.setContent = K(a, 72, function(d) {
            var e = _.u(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            O(b, fo(), e)
        })
    };
    _.P(oj, oH);
    var uH = Q(["https://console.googletagservices.com/pubconsole/loader.js"]),
        Fj = C(uH),
        Ij, Hj = !1,
        Aj = !1,
        Cj = !1;
    var jo = function(a, b) {
        this.getAllEvents = K(a, 563, function() {
            return Aj ? vH(b).slice() : []
        });
        this.getEventsBySlot = K(a, 565, function(c) {
            return Aj ? wH(b, c).slice() : []
        });
        this.getEventsByLevel = K(a, 566, function(c) {
            return Aj ? xH(b, c).slice() : []
        })
    };
    var Sj = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = $h().j,
            h = (0, E.K)(ln($h(), f.getDomId()));
        this.set = K(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Mj(Nj(new Oj, k), [String(l)])], Qc(h, 3, k));
            return e
        });
        this.get = K(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, m;
            return null != (m = null == (l = (F = (0, E.K)(h.ta()), _.u(F, "find")).call(F, function(n) {
                return Lj(n) === k
            })) ? void 0 : l.xa()[0]) ? m : null
        });
        this.setClickUrl = K(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : O(b, kj("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = K(a, 81, function(k, l) {
            Qj(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = K(a, 85, function(k) {
            Rj(f, h, k, b);
            return e
        });
        this.display = K(a, 78, function() {
            yH(d, f, Mh(g, $h().m))
        });
        this.setTagForChildDirectedTreatment = K(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = EE(g) || new BE;
                l.setTagForChildDirectedTreatment(k);
                _.Rg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = K(a, 567, function(k) {
            "boolean" === typeof k ? _.z(h, 12, k) : O(b, kj("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = K(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = EE(g) || new BE;
                l.setTagForUnderAgeOfConsent(k);
                _.Rg(g, 25, l)
            }
            return e
        })
    };
    var rl = function(a, b) {
        this.push = K(a, 932, function(c) {
            b.push(c)
        })
    };
    var In = {
        Ng: 0,
        Kg: 1,
        Lg: 2,
        Mg: 3
    };
    var Vj = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Xj = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        Wj = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var sk = function(a) {
            var b = this;
            a = void 0 === a ? $h().j : a;
            this.C = "";
            this.j = this.m = null;
            this.l = this.H = this.I = !1;
            this.D = function() {
                return !1
            };
            var c = {},
                d = {},
                e = {};
            this.o = (e[Fy] = (c[13] = function() {
                return $a.apply(0, arguments).some(function(f) {
                    return 0 == b.C.lastIndexOf(f, 0)
                })
            }, c[12] = function() {
                return !!G(a, 6)
            }, c[15] = function(f) {
                return b.D(f)
            }, c[48] = function() {
                return !!b.m
            }, c[51] = function() {
                return b.I
            }, c[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, c[67] = function() {
                return b.H
            }, c[68] = function() {
                return b.l
            }, c), e[Gy] = (d[8] = function(f) {
                var g;
                return null != (g = ie(b.m, Number(f))) ? g : void 0
            }, d[10] = function(f) {
                return b.j ? zh(f + b.j) % 1E3 : void 0
            }, d), e)
        },
        zH = function(a, b) {
            b && !a.j && (a.j = _.u(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var wk = function(a, b, c) {
        GF.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.P(wk, GF);
    wk.prototype.getSlotId = function() {
        return this.slotId
    };
    var AH = "",
        ck = null,
        ik = _.zr(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Ud = function(a, b, c, d) {
        GF.call(this, a);
        this.adUnitPath = b;
        this.Xa = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.P(Ud, GF);
    q = Ud.prototype;
    q.getId = function() {
        return this.id
    };
    q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    q.getName = function() {
        return this.adUnitPath
    };
    q.toString = function() {
        return this.getId()
    };
    q.getDomId = function() {
        return this.Xa
    };
    var BH = function(a, b) {
        a.j = b
    };
    var CH = new x.WeakMap,
        DH = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var ok = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/;
    (function(a, b) {
        b = void 0 === b ? DH : b;
        var c = ja(a),
            d = function(e) {
                e = _.A(e);
                e.next();
                e = Sq(e);
                return b(c, e)
            };
        return function() {
            var e = $a.apply(0, arguments),
                f = this || _.t,
                g = CH.get(f);
            g || (g = {}, CH.set(f, g));
            f = g;
            g = [this].concat(_.Ld(e));
            e = d ? d(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = _.A(g);
                g = h.next().value;
                h = Sq(h);
                g = a.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    })(function(a) {
        return (null == a ? 0 : a.src) ? ok.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
    });
    var EH = _.zr(function() {
            return void xv("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        FH = _.zr(function() {
            return void xv("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        GH = _.zr(function() {
            return void xv("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        HH = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    EH();
                    return !0
                },
                set: function() {
                    EH()
                },
                configurable: !0
            })
        },
        yk = function(a, b, c, d) {
            oH.call(this, a, b, c);
            var e = this,
                f = $h().j,
                g = $h().m,
                h = !1;
            this.setTargeting = K(a, 1, function(k, l) {
                var m = null;
                "string" === typeof l ? m = [l] : Array.isArray(l) ? m = l : qa(l) && (m = _.u(Array, "from").call(Array, l));
                var n = "string" === typeof k && !Jj(k);
                m = m && ua(m);
                var p, r = null != (p = null == m ? void 0 : m.every(function(v) {
                    return "string" === typeof v
                })) ? p : !1;
                if (!n || !r) return O(b, kj("PubAdsService.setTargeting", [k, l])), e;
                l = m;
                n = (F = Tc(f, Oj, 2), _.u(F, "find")).call(F, function(v) {
                    return Lj(v) === k
                });
                if ("gpt-beta" === k) {
                    if (c.m) return O(b, SG(l.join())), e;
                    if (n) return O(b, TG(l.join())), e;
                    l = uk(l)
                }
                n ? Mj(n, l) : (n = Mj(Nj(new Oj, k), l), Ze(f, 2, Oj, n));
                b.info(Pj(k, l.join(), c.getName()));
                return e
            });
            this.clearTargeting = K(a, 2, function(k) {
                if (void 0 === k) return Qc(f, 2), b.info(QG(c.getName())), e;
                if ("gpt-beta" === k) return O(b, UG(k)), e;
                var l = Tc(f, Oj, 2),
                    m = _.u(l, "findIndex").call(l, function(n) {
                        return Lj(n) === k
                    });
                if (0 > m) return O(b, JG(k, c.getName())), e;
                l.splice(m, 1);
                Qc(f, 2, l);
                b.info(IG(k, c.getName()));
                return e
            });
            this.getTargeting = K(a, 38, function(k) {
                if ("string" !== typeof k) return O(b, kj("PubAdsService.getTargeting", [k])), [];
                var l = (F = Tc(f, Oj, 2), _.u(F, "find")).call(F, function(m) {
                    return Lj(m) === k
                });
                return l ? l.xa().slice() : []
            });
            this.getTargetingKeys = K(a, 39, function() {
                return Tc(f, Oj, 2).map(function(k) {
                    return (0, E.K)(Lj(k))
                })
            });
            this.setCategoryExclusion = K(a, 3, function(k) {
                if ("string" !== typeof k || Jj(k)) return O(b, kj("PubAdsService.setCategoryExclusion", [k])), e;
                (F = kl(f, 3), _.u(F, "includes")).call(F, k) || Ds(f, 3, k);
                b.info(KG(k));
                return e
            });
            this.clearCategoryExclusions = K(a, 4, function() {
                _.z(f, 3, Ac);
                b.info(LG());
                return e
            });
            this.disableInitialLoad = K(a, 5, function() {
                _.z(f, 4, !0);
                h || (h = !0, HH())
            });
            this.enableSingleRequest = K(a, 6, function() {
                if (c.m && !G(f, 6)) return O(b, yG("PubAdsService.enableSingleRequest")), !1;
                b.info(zG("single request"));
                _.z(f, 6, !0);
                return !0
            });
            this.enableAsyncRendering = K(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = K(a, 8, function() {
                xv("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = K(a, 485, function(k) {
                var l = new Lp;
                _.z(l, 1, 800);
                _.z(l, 2, 400);
                _.z(l, 3, 3);
                if (_.ia(k)) {
                    var m = k.fetchMarginPercent;
                    "number" === typeof m && (0 <= m ? _.z(l, 1, m) : -1 === m && Ee(l, 1));
                    m = k.renderMarginPercent;
                    "number" === typeof m && (0 <= m ? _.z(l, 2, m) : -1 === m && Ee(l, 2));
                    k = k.mobileScaling;
                    "number" === typeof k && (0 < k ? _.z(l, 3, k) : -1 === k && _.z(l, 3, 1))
                }
                _.Rg(f, 5, l)
            });
            this.setCentering = K(a, 9, function(k) {
                k = !!k;
                b.info(AG("centering", String(k)));
                _.z(f, 15, k)
            });
            this.definePassback = K(a, 10, function(k, l) {
                return (k = xk(a, b, c, k, l, d)) && k.Wd
            });
            this.refresh = K(a, 11, function() {
                var k = $a.apply(0, arguments),
                    l = _.A(k),
                    m = l.next().value;
                l = l.next().value;
                l = void 0 === l ? {} : l;
                m && !Array.isArray(m) || !_.ia(l) || l.changeCorrelator && "boolean" !== typeof l.changeCorrelator ? O(b, kj("PubAdsService.refresh", k)) : (l && !1 === l.changeCorrelator || f.setCorrelator(Bv()), m = m ? rk(m, c) : c.j, c.refresh(Mh(f, g), m) || O(b, kj("PubAdsService.refresh", k)))
            });
            this.enableVideoAds = K(a, 12, function() {
                _.z(f, 21, !0);
                IH(c, f)
            });
            this.setVideoContent = K(a, 13, function(k, l) {
                JH(c, k, l, f)
            });
            this.collapseEmptyDivs = K(a, 14, function(k) {
                k = void 0 === k ? !1 : k;
                _.z(f, 11, !0);
                var l = !!k;
                _.z(f, 10, l);
                gi("gpt_ced", function(m) {
                    L(m, "sc", l ? "t" : "f");
                    L(m, "level", "page");
                    mi(m, a)
                });
                b.info(GG(String(l)));
                return !!G(f, 11)
            });
            this.clear = K(a, 15, function(k) {
                if (Array.isArray(k)) return KH(c, f, g, rk(k, c));
                if (void 0 === k) return KH(c, f, g, c.j);
                O(b, kj("PubAdsService.clear", [k]));
                return !1
            });
            this.setLocation = K(a, 16, function(k) {
                if ("string" !== typeof k) return O(b, kj("PubAdsService.setLocation", [k])), e;
                _.z(f, 8, k);
                return e
            });
            this.setCookieOptions = K(a, 17, function() {
                FH();
                return e
            });
            this.setTagForChildDirectedTreatment = K(a, 18, function(k) {
                GH();
                if (1 !== k && 0 !== k) return O(b, aH("PubadsService.setTagForChildDirectedTreatment", kk(k), "0,1")), e;
                var l = EE(f) || new BE;
                l.setTagForChildDirectedTreatment(k);
                _.Rg(f, 25, l);
                return e
            });
            this.clearTagForChildDirectedTreatment = K(a, 19, function() {
                GH();
                var k = EE(f);
                if (!k) return e;
                k.clearTagForChildDirectedTreatment();
                _.Rg(f, 25, k);
                return e
            });
            this.setPublisherProvidedId = K(a, 20, function(k) {
                k = String(k);
                b.info(AG("PPID", k));
                _.z(f, 16, k);
                return e
            });
            this.set = K(a, 21, function(k, l) {
                if ("string" !== typeof k || !k.length || void 0 === bG()[k] || "string" !== typeof l) return O(b, kj("PubAdsService.set", [k, l])), e;
                var m = (F = f.ta(), _.u(F, "find")).call(F, function(n) {
                    return Lj(n) === k
                });
                m ? Mj(m, [l]) : (m = Nj(new Oj, k), Ds(m, 2, l), Ze(f, 14, Oj, m));
                b.info(uG(k, String(l), c.getName()));
                return e
            });
            this.get = K(a, 22, function(k) {
                if ("string" !== typeof k) return O(b, kj("PubAdsService.get", [k])), null;
                var l = (F = f.ta(), _.u(F, "find")).call(F, function(m) {
                    return Lj(m) === k
                });
                return (l = l && l.xa()) ? l[0] : null
            });
            this.getAttributeKeys = K(a, 23, function() {
                return f.ta().map(function(k) {
                    return (0, E.K)(Lj(k))
                })
            });
            this.display = K(a, 24, function(k, l, m, n) {
                return void c.display(k, l, d, m, n)
            });
            this.updateCorrelator = K(a, 25, function() {
                xv(qk("update"));
                O(b, XG());
                f.setCorrelator(Bv());
                return e
            });
            this.defineOutOfPagePassback = K(a, 35, function(k) {
                k = xk(a, b, c, k, [1, 1], d);
                if (!k) return null;
                _.z(k.Va, 15, 1);
                return k.Wd
            });
            this.setForceSafeFrame = K(a, 36, function(k) {
                if ("boolean" !== typeof k) return O(b, kj("PubAdsService.setForceSafeFrame", [kk(k)])), e;
                _.z(f, 13, k);
                return e
            });
            this.setSafeFrameConfig = K(a, 37, function(k) {
                var l = lk(b, k);
                if (!l) return O(b, kj("PubAdsService.setSafeFrameConfig", [k])), e;
                _.Rg(f, 18, l);
                return e
            });
            this.setRequestNonPersonalizedAds = K(a, 445, function(k) {
                GH();
                if (0 !== k && 1 !== k) return O(b, aH("PubAdsService.setRequestNonPersonalizedAds", kk(k), "0,1")), e;
                var l = EE(f) || new BE;
                _.z(l, 8, !!k);
                _.Rg(f, 25, l);
                return e
            });
            this.setTagForUnderAgeOfConsent = K(a, 447, function(k) {
                k = void 0 === k ? 2 : k;
                GH();
                if (2 !== k && 0 !== k && 1 !== k) return O(b, aH("PubadsService.setTagForUnderAgeOfConsent", kk(k), "2,0,1")), e;
                var l = EE(f) || new BE;
                l.setTagForUnderAgeOfConsent(k);
                _.Rg(f, 25, l);
                return e
            });
            this.getCorrelator = K(a, 27, function() {
                return String(f.getCorrelator())
            });
            this.getTagSessionCorrelator = K(a, 631, function() {
                return ye(_.t)
            });
            this.getVideoContent = K(a, 30, function() {
                return LH(c, f)
            });
            this.getVersion = K(a, 568, function() {
                return a.mb ? String(a.mb) : a.Ha
            });
            this.forceExperiment = K(a, 569, function(k) {
                return void c.forceExperiment(k)
            });
            this.setCorrelator = K(a, 28, function(k) {
                xv(qk("set"));
                O(b, WG());
                if (Dh(window)) return e;
                if (!("number" === typeof k && isFinite(k) && 0 == k % 1 && 0 < k)) return O(b, kj("PubadsService.setCorrelator", [kk(k)])), e;
                f.setCorrelator(k);
                _.z(f, 27, !0);
                return e
            });
            this.markAsAmp = K(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = K(a, 571, function() {
                return !!G(f, 6)
            });
            this.setImaContent = K(a, 328, function(k, l) {
                gf(f, 22) ? JH(c, k, l, f) : (_.z(f, 21, !0), IH(c, f), "string" === typeof k && _.z(f, 19, k), "string" === typeof l && _.z(f, 20, l))
            });
            this.getImaContent = K(a, 329, function() {
                return gf(f, 22) ? LH(c, f) : c.m ? {
                    vid: y(f, 19) || "",
                    cmsid: y(f, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = K(a, 572, function() {
                return !!G(f, 4)
            });
            this.setPrivacySettings = K(a, 648, function(k) {
                if (!_.ia(k)) return O(b, kj("PubAdsService.setPrivacySettings", [k])), e;
                var l = k.restrictDataProcessing,
                    m = k.childDirectedTreatment,
                    n = k.underAgeOfConsent,
                    p = k.limitedAds,
                    r = k.nonPersonalizedAds,
                    v = k.userOptedOutOfPersonalization,
                    w = k.trafficSource,
                    D, B = null != (D = EE(f)) ? D : new BE;
                "boolean" === typeof r ? _.z(B, 8, r) : void 0 !== r && O(b, jk("PubAdsService.setPrivacySettings", kk(k), "nonPersonalizedAds", kk(r)));
                "boolean" === typeof v ? _.z(B, 13, v) : void 0 !== v && O(b, jk("PubAdsService.setPrivacySettings", kk(k), "userOptedOutOfPersonalization", kk(v)));
                "boolean" === typeof l ? _.z(B, 1, l) : void 0 !== l && O(b, jk("PubAdsService.setPrivacySettings", kk(k), "restrictDataProcessing", kk(l)));
                "boolean" === typeof p ? (l = pk(), p && !G(B, 9) && a.Xb && (r = a.bb, v = Sg(a), D = new $v, D = _.Ic(D, 1, !0, !1), D = _.Ic(D, 2, l, !1), v = Ug(v, 11, Vg, D), Nd(r, v)), l ? _.z(B, 9, p) : p && O(b, nH())) : void 0 !== p && O(b, jk("PubAdsService.setPrivacySettings", kk(k), "limitedAds", kk(p)));
                void 0 !== n && (null === n ? B.setTagForUnderAgeOfConsent(2) : !1 === n ? B.setTagForUnderAgeOfConsent(0) : !0 === n ? B.setTagForUnderAgeOfConsent(1) : O(b, jk("PubAdsService.setPrivacySettings", kk(k), "underAgeOfConsent", kk(n))));
                void 0 !== m && (null === m ? B.clearTagForChildDirectedTreatment() : !1 === m ? B.setTagForChildDirectedTreatment(0) : !0 === m ? B.setTagForChildDirectedTreatment(1) : O(b, jk("PubAdsService.setPrivacySettings", kk(k), "childDirectedTreatment", kk(m))));
                void 0 !== w && (null === w ? Ee(B, 10) : (F = _.u(Object, "values").call(Object, Wj), _.u(F, "includes")).call(F, w) ? _.z(B, 10, w) : O(b, jk("PubAdsService.setPrivacySettings", kk(k), "trafficSource", kk(w))));
                _.Rg(f, 25, B);
                return e
            })
        };
    _.P(yk, oH);
    var xh = function(a) {
        _.R.call(this, a)
    };
    _.P(xh, _.R);
    var ko = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.Xg(a, 88, function(f, g) {
            var h;
            if (h = Ck(f)) h = Bk(g) || Array.isArray(g) && g.every(Bk);
            h ? d.push([f, g]) : (e.push([f, g]), O(b, kj("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.Xg(a, 89, function() {
            if (e.length) return O(b, sG(kk(e))), null;
            pa(d);
            return d
        })
    };
    var MH = function(a, b) {
        this.getId = K(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = K(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = K(a, 595, function() {
            return b.getName()
        });
        this.toString = K(a, 596, function() {
            return b.toString()
        });
        this.getDomId = K(a, 597, function() {
            return b.getDomId()
        })
    };
    var qh = function(a) {
        _.R.call(this, a, -1, NH)
    };
    _.P(qh, _.R);
    var NH = [2];
    var PH = function(a) {
        _.R.call(this, a, -1, OH)
    };
    _.P(PH, _.R);
    PH.prototype.getAdUnitPath = function() {
        return y(this, 1)
    };
    PH.prototype.getDomId = function() {
        return y(this, 2)
    };
    var QH = function(a, b) {
        _.z(a, 2, b)
    };
    PH.prototype.ta = function() {
        return Tc(this, Oj, 3)
    };
    PH.prototype.getClickUrl = function() {
        return y(this, 7)
    };
    PH.prototype.setClickUrl = function(a) {
        return _.z(this, 7, a)
    };
    var Kj = function(a) {
        return Tc(a, Oj, 9)
    };
    PH.prototype.Qa = function() {
        return Ke(this, gk, 13)
    };
    var El = function(a) {
            return de(a, 15, 0)
        },
        RH = function(a) {
            a = Gc(a, y(a, 26), Fb(a.aa));
            return null == a ? a : a
        },
        OH = [3, 4, 5, 6, 8, 9, 27];
    var SH = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        TH = function(a, b) {
            a.advertiserId = b
        },
        UH = function(a, b) {
            a.campaignId = b
        },
        VH = function(a, b) {
            a.yieldGroupIds = b
        },
        WH = function(a, b) {
            a.companyIds = b
        };
    var XH = function(a, b) {
        this.width = a;
        this.height = b
    };
    XH.prototype.getWidth = function() {
        return this.width
    };
    XH.prototype.getHeight = function() {
        return this.height
    };
    var Mk = function(a, b, c) {
        var d = this,
            e = (0, E.K)(ln($h(), c.getDomId())),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.hn(c, function() {
            e = new PH;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        IF(c, ep, function(n) {
            var p = n.detail;
            n = p.Fd;
            p = p.isBackfill;
            n && (f = n, l = p)
        });
        this.set = K(a, 40, function(n, p) {
            if ("string" !== typeof n || "string" !== typeof p || void 0 === bG()[n]) return O(b, kj("Slot.set", [n, p]), c), d;
            var r = (F = e.ta(), _.u(F, "find")).call(F, function(v) {
                return Lj(v) === n
            });
            r ? Mj(r, [p]) : (r = Nj(new Oj, n), Ds(r, 2, p), Ze(e, 3, Oj, r));
            return d
        });
        this.get = K(a, 41, function(n) {
            if ("string" !== typeof n) return O(b, kj("Slot.get", [n]), c), null;
            var p = (F = e.ta(), _.u(F, "find")).call(F, function(r) {
                return Lj(r) === n
            });
            return (p = p && p.xa()) ? p[0] : null
        });
        this.getAttributeKeys = K(a, 42, function() {
            return e.ta().map(function(n) {
                return (0, E.K)(Lj(n))
            })
        });
        this.addService = K(a, 43, function(n) {
            n = ej.get(n);
            if (!n) return O(b, kj("Slot.addService", [n]), c), d;
            var p = n.getName();
            if ((F = kl(e, 4), _.u(F, "includes")).call(F, p)) return b.info(kG(p, c.toString()), c), d;
            n.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = K(a, 44, function(n) {
            try {
                var p = e;
                if (!Array.isArray(n)) throw new Kk("Size mapping must be an array");
                var r = n.map(Lk);
                Qc(p, 6, r)
            } catch (v) {
                n = v, bh(a, 44, n), xv("Incorrect usage of googletag.Slot defineSizeMapping: " + n.message)
            }
            return d
        });
        this.setClickUrl = K(a, 45, function(n) {
            if ("string" !== typeof n) return O(b, kj("Slot.setClickUrl", [n]), c), d;
            e.setClickUrl(n);
            return d
        });
        this.setCategoryExclusion = K(a, 46, function(n) {
            "string" !== typeof n || Jj(n) ? O(b, kj("Slot.setCategoryExclusion", [n]), c) : ((F = kl(e, 8), _.u(F, "includes")).call(F, n) || Ds(e, 8, n), b.info(lG(n), c));
            return d
        });
        this.clearCategoryExclusions = K(a, 47, function() {
            _.z(e, 8, Ac);
            b.info(mG(), c);
            return d
        });
        this.getCategoryExclusions = K(a, 48, function() {
            return kl(e, 8).slice()
        });
        this.setTargeting = K(a, 49, function(n, p) {
            Qj(c, e, n, p, b);
            return d
        });
        this.updateTargetingFromMap = K(a, 649, function(n) {
            Rj(c, e, n, b);
            return d
        });
        this.clearTargeting = K(a, 50, function(n) {
            if (void 0 === n) return Qc(e, 9), b.info(nG(c.getAdUnitPath()), c), d;
            var p = Kj(e),
                r = _.u(p, "findIndex").call(p, function(v) {
                    return Lj(v) === n
                });
            if (0 > r) return O(b, JG(n, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            Qc(e, 9, p);
            b.info(PG(n, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = K(a, 51, function(n) {
            if ("string" !== typeof n) return O(b, kj("Slot.getTargeting", [n]), c), [];
            var p = (F = Kj(e), _.u(F, "find")).call(F, function(r) {
                return Lj(r) === n
            });
            return p ? p.xa().slice() : []
        });
        this.getTargetingKeys = K(a, 52, function() {
            return Kj(e).map(function(n) {
                return (0, E.K)(Lj(n))
            })
        });
        this.setCollapseEmptyDiv = K(a, 53, function(n, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof n || "boolean" !== typeof p) return O(b, kj("Slot.setCollapseEmptyDiv", [n, p]), c), d;
            _.z(e, 10, n);
            _.z(e, 11, n && p);
            gi("gpt_ced", function(r) {
                L(r, "sc", G(e, 11) ? "t" : "f");
                L(r, "level", "slot");
                mi(r, a)
            });
            p && !n && O(b, oG(c.toString()), c);
            return d
        });
        this.getAdUnitPath = K(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = K(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = K(a, 55, function(n) {
            if ("boolean" !== typeof n) return O(b, kj("Slot.setForceSafeFrame", [String(n)]), c), d;
            _.z(e, 12, n);
            return d
        });
        this.setSafeFrameConfig = K(a, 56, function(n) {
            var p = lk(b, n);
            if (!p) return b.error(kj("Slot.setSafeFrameConfig", [n]), c), d;
            _.Rg(e, 13, p);
            return d
        });
        IF(c, LF, function(n) {
            n = n.detail;
            if (G(n, 8)) g = null;
            else {
                g = new SH;
                var p = !!G(n, 9);
                g.isBackfill = p;
                var r = un(n, 15),
                    v = un(n, 16);
                r.length && v.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = v[0], p || (g.creativeId = r[0], g.lineItemId = v[0], (p = un(n, 22)) && p.length && (g.creativeTemplateId = p[0])));
                un(n, 17).length && TH(g, un(n, 17)[0]);
                un(n, 18).length && UH(g, un(n, 18)[0]);
                un(n, 19).length && VH(g, un(n, 19));
                un(n, 20).length && WH(g, un(n, 20));
                n = Dc(n, 45, Ec).map(function(w) {
                    return mc(w)
                });
                n.length && (g.encryptedTroubleshootingInfo = n[0])
            }
        });
        this.getResponseInformation = K(a, 355, function() {
            return g
        });
        this.getName = K(a, 170, function() {
            b.error(lH());
            var n = new Bj("slot_get_name");
            mi(n, a);
            Dj(n);
            return c.getAdUnitPath()
        });
        var m = new MH(a, c);
        this.getSlotId = K(a, 579, function() {
            return m
        });
        this.getServices = K(a, 580, function() {
            return kl(e, 4).map(function(n) {
                return tj(n)
            })
        });
        this.getSizes = K(a, 581, function(n, p) {
            var r, v;
            return null != (v = null == (r = th(e, n, p)) ? void 0 : r.map(function(w) {
                return G(w, 3) ? "fluid" : new XH(w.getWidth(), w.getHeight())
            })) ? v : null
        });
        this.getClickUrl = K(a, 582, function() {
            var n;
            return null != (n = e.getClickUrl()) ? n : ""
        });
        this.getTargetingMap = K(a, 583, function() {
            for (var n = {}, p = _.A(Kj(e)), r = p.next(); !r.done; r = p.next()) r = r.value, Lj(r) && (n[Lj(r)] = r.xa());
            return n
        });
        this.getOutOfPage = K(a, 584, function(n) {
            return "number" === typeof n ? El(e) === n : 0 !== El(e)
        });
        this.getCollapseEmptyDiv = K(a, 585, function() {
            return mk(e, 10) ? G(e, 10) : null
        });
        this.getDivStartsCollapsed = K(a, 586, function() {
            return mk(e, 11) ? G(e, 11) : null
        });
        IF(c, MF, function(n) {
            h = n.detail.we
        });
        this.getContentUrl = K(a, 587, function() {
            return h()
        });
        this.getFirstLook = K(a, 588, function() {
            xv("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        IF(c, LF, function(n) {
            var p;
            k = null != (p = n.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = K(a, 591, function() {
            return k
        });
        this.getHtml = K(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = K(a, 1022, function(n) {
            var p = RH(e);
            if (void 0 !== n.componentAuction) {
                n = _.A(n.componentAuction);
                for (var r = n.next(); !r.done; r = n.next()) {
                    var v = r.value;
                    r = v.configKey;
                    v = v.auctionConfig;
                    "string" !== typeof r || Jj(r) || (null === v ? p.delete(r) : v && p.set(r, JSON.stringify(v)))
                }
            }
        })
    };
    var Cp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 856);
        this.P = f;
        this.Qb = V(this);
        this.ac = V(this);
        this.wa = V(this);
        this.J = V(this);
        this.l = V(this);
        this.B = X(this, b);
        this.F = X(this, c);
        this.o = X(this, d);
        this.M = X(this, e);
        g && yz(this, g)
    };
    _.P(Cp, Z);
    var YH = function(a) {
        jz(a.Qb, a.B.value);
        jz(a.ac, a.F.value);
        jz(a.wa, a.o.value);
        kz(a.J);
        kz(a.l)
    };
    Cp.prototype.j = function() {
        var a = this.M.value;
        if (_.H(pw) && a) {
            var b = this.o.value;
            if (0 !== (null == b ? void 0 : b.kind) || b.Aa.length) {
                var c, d = null == (c = this.P) ? void 0 : c.get(a);
                if (!d) throw new Kk("Could not find bid with id: " + a);
                c = void 0 === d.height ? this.B.value : d.height;
                var e = void 0 === d.width ? this.F.value : d.width,
                    f = d.adUrl,
                    g = d.me,
                    h = void 0 === d.cpm ? 0 : d.cpm;
                if (1 !== d.format) YH(this);
                else {
                    this.J.j(d);
                    if (!g && !f) throw new Kk("Could not find ad to render for bid id: " + a);
                    d = {
                        ad: Ok(g, h),
                        adUrl: Ok(f, h),
                        adId: a,
                        width: e,
                        height: c
                    };
                    g = btoa(JSON.stringify(d));
                    0 === (null == b ? void 0 : b.kind) ? (d = this.wa, f = d.j, b = b.Aa.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), g.replace(/\$/g, "$$$$")), f.call(d, {
                        kind: 0,
                        Aa: b
                    }), kz(this.l)) : (jz(this.wa, b), jz(this.l, g));
                    jz(this.Qb, c);
                    jz(this.ac, e);
                    window.postMessage(JSON.stringify({
                        message: "Prebid Request",
                        adId: a
                    }), "*")
                }
            } else YH(this)
        } else YH(this)
    };
    var ZH = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.B = d;
        this.pbjs = e;
        this.F = f;
        this.requestBidsConfig = g;
        this.A = new rz
    };
    _.P(ZH, Z);
    ZH.prototype.j = function() {
        Vk(this.F, this.pbjs, this.o, this.l, this.B, this.requestBidsConfig);
        this.A.notify()
    };
    var $H = function(a, b, c) {
        Z.call(this, a, 937, _.we(Tw));
        this.window = c;
        this.o = V(this);
        this.l = V(this);
        this.M = V(this);
        this.J = V(this);
        this.B = V(this);
        this.F = V(this);
        this.P = xz(this, b)
    };
    _.P($H, Z);
    $H.prototype.j = function() {
        if (this.window.top !== this.window) aI(this);
        else {
            var a = this.P.value;
            if (a) {
                var b = {},
                    c;
                if (null == (c = Ke(a, Nt, 2)) ? 0 : yp(c, 2)) b["*"] = {
                    Fc: !0
                };
                c = new x.Set;
                for (var d = _.A(Tc(a, Mt, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.A([xn(e, 2), e.Ya()].filter(function(r) {
                            return !!r
                        })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                        Fc: yp(e, 3)
                    };
                    e = _.A(un(e, 4));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                this.o.j(b);
                this.l.j([].concat(_.Ld(c)));
                var h, k;
                b = null == (h = Ke(a, Nt, 2)) ? void 0 : null == (k = Ke(h, Et, 1)) ? void 0 : Tc(k, Gt, 1);
                jz(this.M, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.B.j(!(null == (l = Ke(a, Nt, 2)) || !yp(l, 4)));
                var m;
                this.F.j(!(null == (m = Ke(a, Nt, 2)) || !yp(m, 5)));
                var n, p;
                a = null == (n = Ke(a, Nt, 2)) ? void 0 : null == (p = Ke(n, Et, 3)) ? void 0 : Tc(p, Gt, 1);
                jz(this.J, (null == a ? 0 : a.length) ? a : null)
            } else aI(this)
        }
    };
    var aI = function(a) {
        a.o.j({});
        a.l.j([]);
        kz(a.M);
        a.B.j(!1);
        a.F.j(!1);
        kz(a.J)
    };
    $H.prototype.H = function(a) {
        this.m(a)
    };
    $H.prototype.m = function() {
        aI(this)
    };
    var bI = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        cI = function(a, b, c, d, e, f, g, h, k, l, m) {
            Z.call(this, a, 920);
            this.M = b;
            this.R = c;
            this.nb = d;
            this.F = V(this);
            this.J = V(this);
            this.l = V(this);
            this.P = [];
            this.B = new x.Map;
            this.o = new x.Map;
            this.ia = W(this, e);
            this.da = new qz(f);
            this.ma = W(this, g);
            this.Y = X(this, h);
            this.T = W(this, k);
            this.pa = X(this, l);
            this.la = X(this, m)
        };
    _.P(cI, Z);
    cI.prototype.j = function() {
        if (dI(this)) {
            var a = this.da.value;
            a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.M.error(cH()), eI(this)) : (a = fI(this, a)) ? (this.l.j(a), this.F.j(this.B), this.J.j(this.P)) : eI(this) : eI(this)
        } else eI(this)
    };
    cI.prototype.H = function(a) {
        this.m(a)
    };
    cI.prototype.m = function(a) {
        this.M.error(dH(a.message));
        eI(this)
    };
    var eI = function(a) {
            a.l.j([]);
            kz(a.F);
            kz(a.J)
        },
        fI = function(a, b) {
            var c = (0, E.K)(b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.ia.value.map(function(g) {
                    var h = new zt,
                        k = function(Fa) {
                            return Fa === g.getDomId() || Fa === g.getAdUnitPath()
                        },
                        l, m = null != (l = gI.get(g)) ? l : 0,
                        n;
                    l = null != (n = d.filter(function(Fa) {
                        var Ba, qb, Bb;
                        return Number(null == (Ba = Fa.args) ? void 0 : Ba.timestamp) > m && (null == (qb = Fa.args) ? void 0 : null == (Bb = qb.adUnitCodes) ? void 0 : _.u(Bb, "find").call(Bb, k))
                    })) ? n : [];
                    if (!l.length) return a.P.push(g), h;
                    var p;
                    n = null == (p = l.reduce(function(Fa, Ba) {
                        return Number(Ba.args.timestamp) > Number(Fa.args.timestamp) ? Ba : Fa
                    })) ? void 0 : p.args;
                    if (!n) return h;
                    var r = void 0 === n.bidderRequests ? [] : n.bidderRequests;
                    p = void 0 === n.bidsReceived ? [] : n.bidsReceived;
                    var v = n.auctionId;
                    n = n.timestamp;
                    if (!v || null == n || !r.length) return h;
                    gI.has(g) || _.hn(g, function() {
                        return gI.delete(g)
                    });
                    gI.set(g, n);
                    n = At(h);
                    Math.random() < _.we(rw) && b.version && bI.test(b.version) && _.z(n, 6, b.version);
                    _.Rg(n, 9, a.la.value);
                    l = new x.Map;
                    var w = Rh(function() {
                            return pl(c, v)
                        }),
                        D = Kj(a.R[g.getDomId()]),
                        B = {};
                    r = _.A(r);
                    for (var I = r.next(); !I.done; B = {
                            Rc: B.Rc,
                            Tc: B.Tc
                        }, I = r.next()) {
                        var S = I.value;
                        B.Rc = S.bidderCode;
                        var M = S.bids;
                        I = S.timeout;
                        B.Tc = S.src;
                        S = S.auctionStart;
                        var U = {};
                        M = _.A(M);
                        for (var Y = M.next(); !Y.done; U = {
                                Jb: U.Jb
                            }, Y = M.next()) {
                            var la = Y.value;
                            U.Jb = la.bidId;
                            var ca = la.transactionId;
                            Y = la.adUnitCode;
                            var Sa = la.getFloor;
                            la = la.mediaTypes;
                            if (U.Jb && k(Y)) {
                                e = !0;
                                dl(n, g, Y);
                                ca && (gf(n, 4) || _.z(n, 4, ca), a.B.has(ca) || a.B.set(ca, S));
                                mk(n, 8) || _.z(n, 8, I);
                                var gb = _.u(p, "find").call(p, function(Fa) {
                                    return function(Ba) {
                                        return Ba.requestId === Fa.Jb
                                    }
                                }(U));
                                ca = Xk(n, function(Fa) {
                                    return function() {
                                        var Ba = $k(new al, Fa.Rc);
                                        switch (Fa.Tc) {
                                            case "client":
                                                _.z(Ba, 7, 1);
                                                break;
                                            case "s2s":
                                                _.z(Ba, 7, 2)
                                        }
                                        return Ba
                                    }
                                }(B)());
                                fl(n, ca, Y, a.Y.value, a.T.value, a.pa.value, Sa);
                                gb ? (Zk(ca, 1), "number" === typeof gb.timeToRespond && bl(ca, gb.timeToRespond), Y = Wk(gb, l, D, la), Yk(ca, Y)) : (Y = w().get(U.Jb)) && !Y.Pd ? bl(Zk(ca, 2), Math.round(Y.latency)) : bl(Zk(ca, 3), I)
                            }
                        }
                    }
                    var Ga;
                    (null == (Ga = b.getConfig) ? 0 : Ga.call(b).useBidCache) && cl(n, g, v, D, l, b);
                    a.o.set(g, l);
                    return h
                });
            return e ? f : []
        },
        dI = function(a) {
            var b = a.ma.value,
                c;
            return !(null == (c = b["*"]) || !c.Fc) || a.nb.split(",").some(function(d) {
                var e;
                return !(null == (e = b[d]) || !e.Fc)
            })
        },
        gI = new x.Map;
    var hI, iI = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.R = g;
        this.l = new qz(b);
        this.B = new qz(c);
        this.F = new qz(d);
        this.o = X(this, e);
        this.J = X(this, f)
    };
    _.P(iI, Z);
    iI.prototype.j = function() {
        jI(this);
        kI(this)
    };
    var kI = function(a) {
            if (!(Math.random() >= _.we(ow))) {
                var b = (a.J.value || []).filter(function(k) {
                    return Kj(a.R[k.getDomId()]).some(function(l) {
                        return "hb_pb" === y(l, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Ld(new x.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.u(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new Bj("haux");
                    L(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    L(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    L(c, "paucs", h.join("~"));
                    mi(c, a.context);
                    Dj(c, 1)
                }
            }
        },
        jI = function(a) {
            gi("ppc_hrc", function(b) {
                var c;
                null != hI || (hI = (0, E.sa)(null == (c = (F = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.u(F, "find")).call(F, function(g) {
                    return "1" === g.label
                })) ? void 0 : c.value));
                var d = te("navigationStart", window);
                hI && L(b, "lt", hI);
                var e;
                L(b, "tids", [].concat(_.Ld((null == (e = a.o.value) ? void 0 : _.u(e, "keys").call(e)) || [])).join());
                var f;
                L(b, "asts", [].concat(_.Ld((null == (f = a.o.value) ? void 0 : _.u(f, "values").call(f)) || [])).map(function(g) {
                    return g - d
                }).join());
                a.B.value ? L(b, "ht", a.B.value - d) : a.F.value && L(b, "ht", 0);
                mi(b, a.context)
            }, a.o.value ? _.we(nw) : 0)
        };
    var Bp = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.A = wz(this);
        this.o = X(this, b);
        this.l = new qz(c);
        this.F = W(this, d);
        this.B = W(this, e)
    };
    _.P(Bp, Z);
    Bp.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.A(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    Kb: b.Kb,
                    cc: b.cc
                }, d = c.next()) b.Kb = d.value, b.cc = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new Bj("hbm_brt");
                        mi(g, a.context);
                        L(g, "et", e.Kb);
                        L(g, "sf", a.F.value);
                        L(g, "qqid", a.B.value);
                        var h, k, l;
                        L(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                        Dj(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.Kb, b.cc), _.hn(this, function(e) {
                return function() {
                    return void _.eh(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.Kb, e.cc))
                    }, !0)
                }
            }(b))
        }
        this.A.notify()
    };
    Bp.prototype.m = function() {
        this.A.notify()
    };
    var lI = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        yz(this, b);
        yz(this, c)
    };
    _.P(lI, Z);
    lI.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var mI = function(a, b, c, d, e, f) {
        Z.call(this, a, 981);
        this.pbjs = b;
        this.B = c;
        this.l = d;
        this.o = e;
        this.requestBidsConfig = f;
        this.A = new rz
    };
    _.P(mI, Z);
    mI.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.B) ? void 0 : a.get("*")) ? b : _.we(sw);
        if (c || this.o) {
            var d;
            null != (d = this.l) && _.z(d, 1, 1);
            var e;
            null != (e = this.l) && _.z(e, 2, this.o)
        }
        if (c) {
            this.requestBidsConfig.timeout = c;
            var f, g, h;
            a = _.A(null != (h = null == (g = (f = this.pbjs).getConfig) ? void 0 : g.call(f).s2sConfig) ? h : []);
            for (f = a.next(); !f.done; f = a.next()) f.value.timeout = c;
            var k, l;
            null == (l = (k = this.pbjs).setConfig) || l.call(k, {
                bidderTimeout: c
            })
        }
        this.A.notify()
    };
    var nI = function(a, b, c, d, e, f, g, h) {
        _.Qx.call(this);
        this.j = a;
        this.C = b;
        this.m = c;
        this.l = d;
        this.o = e;
        this.H = f;
        this.B = g;
        this.pbjs = h
    };
    _.P(nI, _.Qx);
    nI.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new lf;
            _.an(this, d);
            var e = new mI(this.j, this.pbjs, this.o, this.H, this.B, a),
                f = new ZH(this.j, this.C, this.m, this.l, this.pbjs, b, a);
            J(d, e);
            J(d, f);
            J(d, new lI(this.j, f.A, e.A, c, b, a));
            zf(d)
        }
    };
    var oI = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 951);
        this.G = window;
        this.l = V(this);
        this.o = V(this);
        this.M = W(this, b);
        this.F = X(this, d);
        this.J = W(this, e);
        this.Y = X(this, f);
        this.B = X(this, g);
        this.P = X(this, h);
        this.T = W(this, k);
        yz(this, c)
    };
    _.P(oI, Z);
    oI.prototype.j = function() {
        var a = !!qj().pbjs_hooks;
        this.o.j(a);
        jz(this.l, a ? null : _.re());
        var b, c = null == (b = this.F.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.B.value) ? void 0 : d.size) || _.we(sw);
        d = this.M.value;
        var e, f = null != (e = qj().pbjs_hooks) ? e : [];
        e = new nI(this.context, this.F.value, this.J.value, this.Y.value, this.B.value, this.P.value, this.T.value, d);
        _.an(this, e);
        f = _.A(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) qj().pbjs_hooks = sl(this.context, e);
        !c && !b || a || ql(d, this.G)
    };
    var pI = {},
        tl = (pI[64] = eH, pI[134217728] = fH, pI[32768] = gH, pI[536870912] = hH, pI[8] = iH, pI[512] = jH, pI[1048576] = kH, pI[4194304] = mH, pI);
    var Fl = function(a) {
        return "22639388115" === Kg(a.getAdUnitPath())
    };
    var qI = null;
    var sI = function(a) {
        _.R.call(this, a, -1, rI)
    };
    _.P(sI, _.R);
    var rI = [1],
        tI = [sI, 1, gt, Xt];
    var vI = function(a) {
        _.R.call(this, a, -1, uI)
    };
    _.P(vI, _.R);
    var uI = [1, 2],
        wI = [vI, 1, gt, Xt, 2, gt, tI];
    var hm = 0,
        xI = new _.Gh(-9, -9);
    var lm = 0;
    var yI = new x.Set([function(a, b) {
            var c = a.ba.N.V;
            b.set("pvsid", {
                value: a.ga.context.pvsid
            }).set("correlator", {
                value: y(c, 26)
            })
        }, function(a, b) {
            a = a.he;
            var c = a.vb,
                d = a.wb;
            "wbn" === a.pb && b.set("wbsu", {
                value: c
            }).set("callback", {
                value: d
            })
        }, function(a, b) {
            var c = a.ba.N.V,
                d = a.gf;
            a = d.pe;
            var e = d.nf;
            d = d.Ye;
            _.H(Mw) || (c = 0 === de(c, 24, 0), b.set("adsid", {
                value: c ? a : null
            }).set("pucrd", {
                value: c ? e : null
            }).set("jar", {
                value: d
            }))
        }, function(a, b) {
            var c = a.ba.N.V,
                d = a.Lf;
            a = d.Gb;
            d = d.Fb;
            var e = G(c, 21);
            b.set("hxva", {
                value: e ? 1 : null
            }).set("cmsid", {
                value: e ? y(c, 23) : null
            }).set("vid", {
                value: e ? y(c, 22) : null
            }).set("pod", {
                value: d
            }).set("ppos", {
                value: a
            }).set("scor", {
                value: Js(c, 29)
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.W;
            c = c.N.R;
            a = b.set("eid", {
                value: a.ga.gd
            }).set("debug_experiment_id", {
                value: xy().split(",")
            }).set("expflags", {
                value: _.Og(253) ? Zj(Aw) || null : null
            });
            b = a.set;
            if (_.H(Zw)) {
                var e = new vI,
                    f = !1;
                d = _.A(d);
                for (var g = d.next(); !g.done; g = d.next()) {
                    var h = g.value;
                    g = new sI;
                    Ze(e, 2, sI, g);
                    var k = void 0;
                    h = _.A(null == (k = c[h.getDomId()]) ? void 0 : Tc(k, mn, 27));
                    for (k = h.next(); !k.done; k = h.next()) Ze(g, 1, mn, k.value), f = !0
                }
                c = f ? lc(Ue(e, wI), 3) : null
            } else c = null;
            b.call(a, "pied", {
                value: c
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.context;
            c = c.Ea;
            b.set("output", {
                value: a.he.pb
            }).set("gdfp_req", {
                value: 1
            }).set("vrg", {
                value: d.mb ? String(d.mb) : d.Ha
            }).set("ptt", {
                value: 17
            }).set("impl", {
                value: c ? "fifs" : "fif"
            })
        }, function(a, b) {
            a = a.ba.N.V;
            b.set("co", {
                value: 0 !== de(a, 24, 0) ? de(a, 24, 0) : null,
                options: {
                    Ca: !0
                }
            })
        }, function(a, b) {
            var c = a.ga.Z;
            a = EE(a.ba.N.V) || new BE;
            var d = de(a, 6, 2);
            b.set("rdp", {
                value: G(a, 1) ? "1" : null
            }).set("ltd", {
                value: G(a, 9) ? "1" : null
            }).set("gdpr_consent", {
                value: Ls(c, 2)
            }).set("gdpr", {
                value: mk(c, 3) ? G(c, 3) ? "1" : "0" : null,
                options: {
                    Ca: !0
                }
            }).set("addtl_consent", {
                value: Ls(c, 4)
            }).set("tcfe", {
                value: Js(c, 7)
            }).set("us_privacy", {
                value: Ls(c, 1)
            }).set("npa", {
                value: G(c, 6) || G(a, 8) ? 1 : null
            }).set("puo", {
                value: _.H(Yw) && G(a, 13) ? 1 : null
            }).set("tfua", {
                value: 2 !== d ? d : null,
                options: {
                    Ca: !0
                }
            }).set("tfcd", {
                value: mk(a, 5) ? y(a, 5) : null,
                options: {
                    Ca: !0
                }
            }).set("trt", {
                value: mk(a, 10) ? y(a, 10) : null,
                options: {
                    Ca: !0
                }
            }).set("tad", {
                value: mk(c, 8) ? G(c, 8) ? "1" : "0" : null,
                options: {
                    Ca: !0
                }
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.W,
                f = c.ld;
            c = a.ga;
            var g = c.G;
            a = c.L;
            c = c.Ea;
            var h = e.map(function(m) {
                    return d.R[m.getDomId()]
                }),
                k = [],
                l = e.map(function(m) {
                    return m.getAdUnitPath().replace(/,/g, ":").split("/").map(function(n) {
                        if (!n) return "";
                        var p = _.u(k, "findIndex").call(k, function(r) {
                            return r === n
                        });
                        return 0 <= p ? p : k.push(n) - 1
                    }).join("/")
                });
            b.set("iu_parts", {
                value: k
            }).set("enc_prev_ius", {
                value: l
            }).set("prev_iu_szs", {
                value: h.map(function(m) {
                    return yh(m)
                })
            }).set("fluid", {
                value: function() {
                    var m = !1,
                        n = h.map(function(p) {
                            p = (F = vh(p), _.u(F, "includes")).call(F, "fluid");
                            m || (m = p);
                            return p ? "height" : "0"
                        });
                    return m ? n : null
                }()
            }).set("ifi", {
                value: function() {
                    var m = ni(g);
                    if (!f) {
                        m += 1;
                        var n = g,
                            p = e.length;
                        p = void 0 === p ? 1 : p;
                        n = Lv(Hd(n)) || n;
                        n.google_unique_id = (n.google_unique_id || 0) + p
                    }
                    return m
                }()
            }).set("adks", {
                value: km(e, a, c, d)
            }).set("didk", {
                value: _.H(fx) ? Rl(e, function(m) {
                    return zh(m.getDomId())
                }, {
                    oa: "~"
                }) : null
            })
        }, function(a, b) {
            var c = a.ba;
            a = c.W;
            c = c.N;
            var d = c.V,
                e = c.R;
            b.set("sfv", {
                value: AH ? AH : AH = bk()
            }).set("fsfs", {
                value: Rl(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : Ks(f, 12)) ? g : G(d, 13))
                }, {
                    Ob: 0
                })
            }).set("fsbs", {
                value: Rl(a, function(f) {
                    f = e[f.getDomId()].Qa();
                    var g = d.Qa(),
                        h;
                    return (null != (h = null == f ? void 0 : Ks(f, 3)) ? h : null == g ? 0 : G(g, 3)) ? 1 : 0
                }, {
                    Ob: 0
                })
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.L,
                e = c.G;
            a = a.ba;
            c = a.W;
            var f = a.ld;
            b.set("ris", {
                value: Rl(c, function(g) {
                    var h, k;
                    g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.Qd) ? k : 0;
                    h = _.se(e);
                    return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
                }, {
                    oa: "~"
                })
            }).set("rcs", {
                value: Rl(c, function(g) {
                    if (!f) {
                        var h = void 0 === h ? _.t : h;
                        var k = d.j.get(g);
                        k && (k.Qd = _.se(h) || 0, k.ae++)
                    }
                    return $F(d, g)
                }, {
                    Ob: 0
                })
            })
        }, function(a, b) {
            var c = a.ba;
            a = a.ga.Ea;
            c = c.N.R[c.W[0].getDomId()];
            b.set("click", {
                value: !a && c.getClickUrl() ? y(c, 7) : null
            })
        }, function(a, b, c) {
            var d = a.ba,
                e = d.W,
                f = d.N.R;
            a = a.ga;
            var g = a.Z,
                h = a.G;
            c = void 0 === c ? function(k, l) {
                return ke(k, l)
            } : c;
            a = e.map(function(k) {
                return f[k.getDomId()]
            });
            b.set("ists", {
                value: Ql(a, function(k) {
                    return 0 !== El(k)
                }) || null
            }).set("fas", {
                value: Rl(a, function(k) {
                    return Il(El(k))
                }, {
                    Ob: 0
                })
            }).set("itsi", {
                value: e.some(function(k) {
                    var l;
                    return !Fl(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : El(l))
                }) ? function() {
                    var k = c(g, h);
                    if (!k) return 1;
                    var l;
                    k = Math.max.apply(Math, _.Ld(null != (l = _.Al((0, E.K)(k), 604800)) ? l : []));
                    return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
                }() : null
            })
        }, function(a, b) {
            a = a.ba;
            var c = a.N.R;
            a = a.W.map(function(d) {
                return c[d.getDomId()]
            });
            b.set("rbvs", {
                value: Ql(a, function(d) {
                    return 4 === El(d)
                }) || null
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.N.V,
                f = c.W;
            c = c.ab;
            var g = a.ga;
            a = g.isSecureContext;
            g = g.G;
            b = b.set("prev_scp", {
                value: $l(f, d)
            });
            var h = b.set,
                k = d.V,
                l = d.R,
                m = new hi;
            m.set(0, 1 !== c);
            l = l[f[0].getDomId()];
            m.set(1, !!G(l, 17));
            m.set(2, fm(f, d));
            m.set(3, G(k, 27) || !1);
            m.set(4, 3 === c);
            d = ji(m);
            h.call(b, "eri", {
                value: d
            }).set("cust_params", {
                value: bm(e),
                options: {
                    oa: "&"
                }
            }).set("ppid", {
                value: 1 !== de(e, 24, 0) && gf(e, 16) ? y(e, 16) : null,
                options: {
                    Ca: !0
                }
            }).set("gct", {
                value: Xl("google_preview", g)
            }).set("sc", {
                value: a ? 1 : 0,
                options: {
                    Ca: !0
                }
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.Z;
            c = c.za;
            a = a.ba.N.V;
            var f = cm(a.ta());
            if (0 === de(a, 24, 0)) {
                var g = Rz(c, "__gads", e);
                a = "1" === Rz(c, "__gpi_opt_out", e) ? "1" : null;
                b = b.set("cookie", {
                    value: g,
                    options: {
                        Ca: !0
                    }
                }).set("cookie_enabled", {
                    value: !g && Sz(c, e) ? "1" : null
                });
                g = d.document;
                var h = g.domain;
                d = b.set.call(b, "cdm", {
                    value: (f || Eh(d)) === g.URL ? "" : h
                });
                f = d.set;
                e = (e = Rz(c, "__gpi", e)) && !_.u(e, "includes").call(e, "&") ? e : null;
                f.call(d, "gpic", {
                    value: e
                }).set("gpico", {
                    value: a
                }).set("pdopt", {
                    value: a
                })
            }
        }, function(a, b) {
            a = a.ga.G;
            b.set("arp", {
                value: cj(a) ? 1 : null
            }).set("abxe", {
                value: Ed(a.top) || rv(a.IntersectionObserver) ? 1 : null
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = cm(a.ba.N.V.ta());
            b.set("dt", {
                value: (new Date).getTime()
            });
            if (!a) {
                try {
                    var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (e) {
                    d = null
                }
                b.set("lmt", {
                    value: d
                })
            }
            d = lm;
            c = ue(c);
            0 < c && d >= c && b.set("dlt", {
                value: c
            }).set("idt", {
                value: d - c
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.N,
                e = c.W,
                f = c.N;
            c = f.V;
            f = f.R;
            var g = a.ga;
            a = g.G;
            var h = g.Ea;
            g = uh(!0, a);
            for (var k = a.document, l = [], m = [], n = _.A(e), p = n.next(); !p.done; p = n.next()) {
                p = p.value;
                var r = f[p.getDomId()];
                p = Wh(p, r, k, Ch(c, r));
                r = void 0;
                var v = h ? null != (r = p) ? r : xI : p;
                v && (l.push(Math.round(v.x)), m.push(Math.round(v.y)))
            }
            g && (d.Hb = g);
            c = Dh(a) ? null : uh(!1, a);
            try {
                var w = a.top;
                var D = gm(w.document, w)
            } catch (B) {
                D = new _.Gh(-12245933, -12245933)
            }
            b.set("adxs", {
                value: l
            }).set("adys", {
                value: m
            }).set("biw", {
                value: g ? g.width : null
            }).set("bih", {
                value: g ? g.height : null
            }).set("isw", {
                value: g ? null == c ? void 0 : c.width : null
            }).set("ish", {
                value: g ? null == c ? void 0 : c.height : null
            }).set("scr_x", {
                value: Math.round(D.x),
                options: {
                    Ca: !0
                }
            }).set("scr_y", {
                value: Math.round(D.y),
                options: {
                    Ca: !0
                }
            }).set("btvi", {
                value: im(e, a, d),
                options: {
                    Ca: !0,
                    oa: "|"
                }
            })
        }, function(a, b) {
            var c = a.ga.L;
            b.set("ucis", {
                value: a.ba.W.map(function(d) {
                    d = (0, E.K)(c.j.get(d));
                    null != d.Zb || (d.Zb = window === window.top ? (++c.o).toString(36) : Nu());
                    return d.Zb
                }),
                options: {
                    oa: "|"
                }
            }).set("oid", {
                value: 2
            })
        }, function(a, b) {
            a = a.ba;
            var c = a.W,
                d = a.N,
                e = d.R;
            a = new x.Map;
            d = _.A(d.V.ta());
            for (var f = d.next(); !f.done; f = d.next()) {
                var g = f.value;
                a.set((0, E.K)(Lj(g)), [g.xa()[0]])
            }
            for (d = 0; d < c.length; d++)
                if (g = e[c[d].getDomId()])
                    for (g = _.A(g.ta()), f = g.next(); !f.done; f = g.next()) {
                        var h = f.value;
                        f = (0, E.K)(Lj(h));
                        var k = a.get(f) || [];
                        h = h.xa()[0];
                        1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                        a.set(f, k)
                    }
            c = [];
            e = _.A(_.u(a, "keys").call(a));
            for (d = e.next(); !d.done; d = e.next()) g = d.value, d = bG()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
                value: g[0]
            }));
            c.length && b.set("sps", {
                value: c.join("|")
            })
        }, function(a, b) {
            var c = a.ba.N.V;
            a = a.ga.G;
            var d = _.Og(251),
                e, f, g, h, k, l, m;
            var n = a;
            n = void 0 === n ? Hu : n;
            try {
                var p = n.history.length
            } catch (qb) {
                p = 0
            }
            b = b.set("u_his", {
                value: p
            }).set("u_h", {
                value: null == (e = a.screen) ? void 0 : e.height
            }).set("u_w", {
                value: null == (f = a.screen) ? void 0 : f.width
            }).set("u_ah", {
                value: null == (g = a.screen) ? void 0 : g.availHeight
            }).set("u_aw", {
                value: null == (h = a.screen) ? void 0 : h.availWidth
            }).set("u_cd", {
                value: null == (k = a.screen) ? void 0 : k.colorDepth
            });
            e = b.set;
            f = a;
            f = void 0 === f ? _.t : f;
            f = f.devicePixelRatio;
            e = e.call(b, "u_sd", {
                value: "number" === typeof f ? +f.toFixed(3) : null
            }).set("u_tz", {
                value: -(new Date).getTimezoneOffset()
            });
            f = e.set;
            try {
                var r, v, w, D, B = null != (D = null == (r = a.external) ? void 0 : null == (v = r.getHostEnvironmentValue) ? void 0 : null == (w = v.bind(a.external)) ? void 0 : w("os-mode")) ? D : "",
                    I, S = Number(null == (I = JSON.parse(B)) ? void 0 : I["os-mode"]);
                var M = 0 <= S ? S + 1 : null
            } catch (qb) {
                M = null
            }
            M = f.call(e, "wsm", {
                value: M
            }).set("dmc", {
                value: null != (m = null == (l = a.navigator) ? void 0 : l.deviceMemory) ? m : null
            });
            l = M.set;
            (c = y(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + us('role:1 producer:12 loc:"' + c + '"')) : c = "";
            c = l.call(M, "uule", {
                value: c
            });
            l = c.set;
            m = a;
            m = void 0 === m ? _.t : m;
            M = new hi;
            m.SVGElement && m.document.createElementNS && M.set(0);
            r = qv();
            r["allow-top-navigation-by-user-activation"] && M.set(1);
            r["allow-popups-to-escape-sandbox"] && M.set(2);
            m.crypto && m.crypto.subtle && M.set(3);
            m.TextDecoder && m.TextEncoder && M.set(4);
            m = ji(M);
            d = l.call(c, "bc", {
                value: m
            }).set("uach", {
                value: d ? us(d, 3) : null
            });
            c = d.set;
            if (_.Og(221)) var U = null;
            else if (l = null == (U = a.navigator) ? void 0 : U.userActivation) {
                U = 0;
                if (null == l ? 0 : l.hasBeenActive) U |= 1;
                if (null == l ? 0 : l.isActive) U |= 2
            } else U = void 0;
            U = c.call(d, "uas", {
                value: U
            });
            d = U.set;
            a: {
                try {
                    var Y, la, ca = null == (Y = a.performance) ? void 0 : null == (la = Y.getEntriesByType("navigation")) ? void 0 : la[0];
                    if (null == ca ? 0 : ca.type) {
                        var Sa;
                        var gb = null != (Sa = JD.get(ca.type)) ? Sa : null;
                        break a
                    }
                } catch (qb) {}
                var Ga, Fa, Ba;gb = null != (Ba = KD.get(null == (Ga = a.performance) ? void 0 : null == (Fa = Ga.navigation) ? void 0 : Fa.type)) ? Ba : null
            }
            d.call(U, "nvt", {
                value: gb
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.L,
                f = c.Ea;
            c = a.ba;
            var g = c.W;
            c = c.N;
            var h = c.V,
                k = c.R;
            a = a.jf.Le;
            c = Yl("google_preview", d);
            var l = d.document,
                m = c ? dm(l.URL) : l.URL;
            l = c ? dm(l.referrer) : l.referrer;
            c = !1;
            if (f) f = cm(h.ta());
            else {
                var n;
                f = null != (n = cm(k[g[0].getDomId()].ta())) ? n : cm(h.ta())
            }
            if (null != f) {
                var p = m;
                Dh(d) || (l = "", c = !0)
            } else f = m;
            n = em(d);
            b.set("nhd", {
                value: n || null
            }).set("url", {
                value: f
            }).set("loc", {
                value: null !== p && p !== f ? p : null
            }).set("ref", {
                value: l
            });
            if (n) {
                p = b.set;
                var r;
                var v, w;
                n = Ed(d.top) && (null == (v = d.top) ? void 0 : null == (w = v.location) ? void 0 : w.href);
                var D;
                v = null == (D = d.location) ? void 0 : D.ancestorOrigins;
                d = aj(d) || "";
                D = (null == v ? void 0 : v[v.length - 1]) || "";
                _.H(Cx) ? (f = (w = D && fv(D.match(_.ev)[3] || null) && fv(D.match(_.ev)[3] || null) !== fv(d.match(_.ev)[3] || null)) ? D : d || D, v = null != (r = null == v ? void 0 : v.length) ? r : 0, .001 > ge() && je({
                    uaoo: w ? "1" : "0",
                    ltw: n || "",
                    rtw: d,
                    aotw: D,
                    aol: String(v)
                }, "tpurl"), r = n || f || "") : r = n || d || D;
                r = r ? c ? fv(r.match(_.ev)[3] || null) : r : null;
                p.call(b, "top", {
                    value: r
                }).set("etu", {
                    value: e.oc
                })
            }
            b.set("scar", {
                value: a
            })
        }, function(a, b) {
            a = a.ga.context.pvsid;
            b.set("rumc", {
                value: _.H(Ex) || _.Lg($g).j ? a : null
            }).set("rume", {
                value: _.H(Pw) ? 1 : null
            })
        }, function(a, b) {
            a = a.ga.G;
            var c = b.set;
            var d = Fv(a);
            var e = qy(a, a.google_ad_width, a.google_ad_height);
            var f = d.location.href;
            if (d == d.top) f = !0;
            else {
                var g = !1,
                    h = d.document;
                h && h.referrer && (f = h.referrer, d.parent == d.top && (g = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == f.indexOf(d) && (g = !1, f = d);
                f = g
            }
            g = a.top == a ? 0 : Ed(a.top) ? 1 : 2;
            d = 4;
            e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
            f && (d |= 16);
            e = "" + d;
            if (a != a.top)
                for (f = a; f && f != f.top && Ed(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
            c.call(b, "frm", {
                value: e || null
            }).set("vis", {
                value: OD(a.document)
            })
        }, function(a, b) {
            var c = a.ba.W;
            a = a.ga.G;
            for (var d = [], e = [], f = _.A(c), g = f.next(); !g.done; g = f.next()) {
                var h = void 0,
                    k = void 0,
                    l = void 0;
                var m = a;
                g = Qh(g.value);
                var n = uv((null == g ? void 0 : g.parentElement) && Sh(g.parentElement, m) || null);
                !n || 1 === n[0] && 1 === n[3] ? (n = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = Kh(n)) ? k : new _.Jh(0, 0), Vl(l, n, m, 100), k = null != (h = Kh(g)) ? h : new _.Jh(0, 0), Vl(k, g, m, 1), -1 === l.height && (k.height = -1), m = l, k = h = k, h = m.width + "x" + m.height, m = k.width + "x" + k.height) : m = h = "-1x-1";
                d.push(h);
                e.push(m)
            }
            null == qI && (f = qy(a, 500, 300), m = a.navigator, h = m.userAgent, k = m.platform, m = m.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === m && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), qI = h && !f);
            g = 0 !== (0, _.Ll)();
            f = uh(!0, a, g).width;
            h = [];
            m = [];
            k = [];
            null !== a && a != a.top && (l = uh(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8)); - 12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
            c = _.A(c);
            for (l = c.next(); !l.done; l = c.next()) {
                g = new hi;
                n = Qh(l.value);
                l = 0;
                var p = !1,
                    r = !1;
                if (n) {
                    for (var v = 0, w = n; w && 100 > v; v++, w = w.parentElement) {
                        var D = Sh(w, a);
                        if (D) {
                            var B = D,
                                I = B.display,
                                S = B.overflowX;
                            if ("visible" !== B.overflowY && (g.set(2), (B = Kh(w)) && (l = l ? Math.min(l, B.width) : B.width), g.get(9))) break;
                            Tl(D) && g.set(9);
                            "none" === I && g.set(7);
                            "IFRAME" === w.nodeName && (D = parseInt(D.width, 10), D < f && (g.set(8), l = l ? Math.min(D, l) : D));
                            r || (r = "scroll" === S || "auto" === S);
                            p || (p = "flex" === I)
                        } else g.set(3)
                    }
                    r && p && (n = n.getBoundingClientRect().left, (n > f || 0 > n) && g.set(11))
                } else g.set(1);
                n = _.A(k);
                for (p = n.next(); !p.done; p = n.next()) g.set(p.value);
                h.push(ji(g));
                m.push(l)
            }
            b.set("psz", {
                value: d,
                options: {
                    oa: "|"
                }
            }).set("msz", {
                value: e,
                options: {
                    oa: "|"
                }
            }).set("fws", {
                value: h
            }).set("ohw", {
                value: m
            }).set("ea", {
                value: qI ? null : "0",
                options: {
                    Ca: !0
                }
            })
        }, function(a, b) {
            var c = a.ba,
                d = c.W,
                e = c.N.R,
                f = a.ga.G;
            _.H(Ik) || (a = d.map(function(g) {
                return e[g.getDomId()]
            }), c = a.some(function(g) {
                return wh(g, xh, 16)
            }), b.set("rtgs", {
                value: c ? a.map(function(g) {
                    return wh(g, xh, 16) ? vh(g).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    oa: "!"
                }
            }).set("max_w", {
                value: c ? a.map(function(g) {
                    return nm(Ke(g, xh, 16), f)
                }) : null,
                options: {
                    oa: "!"
                }
            }).set("max_h", {
                value: c ? a.map(function(g) {
                    return om(Ke(g, xh, 16), f)
                }) : null,
                options: {
                    oa: "!"
                }
            }).set("min_w", {
                value: c ? a.map(function(g) {
                    return pm(Ke(g, xh, 16))
                }) : null,
                options: {
                    oa: "!"
                }
            }).set("min_h", {
                value: c ? a.map(function(g) {
                    return qm(Ke(g, xh, 16))
                }) : null,
                options: {
                    oa: "!"
                }
            }))
        }, function(a, b) {
            b.set("psts", {
                value: ZF(a.ga.L, a.ba.W)
            })
        }, function(a, b) {
            var c = a.ga;
            a = c.Z;
            c = c.G;
            var d;
            var e = c.document.domain,
                f = null != (d = G(a, 5) && ne(c) ? c.document.cookie : null) ? d : "",
                g = c.history.length,
                h = c.screen,
                k = c.document.referrer;
            if (Hd()) var l = window.gaGlobal || {};
            else {
                var m = Math.round((new Date).getTime() / 1E3),
                    n = c.google_analytics_domain_name;
                e = "undefined" == typeof n ? my("auto", e) : my(n, e);
                var p = -1 < f.indexOf("__utma=" + e + "."),
                    r = -1 < f.indexOf("__utmb=" + e);
                (d = (Lv() || window).gaGlobal) || (d = {}, (Lv() || window).gaGlobal = d);
                var v = !1;
                if (p) {
                    var w = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                    r ? d.sid = w[3] : d.sid || (d.sid = m + "");
                    d.vid = w[0] + "." + w[1];
                    d.from_cookie = !0
                } else {
                    d.sid || (d.sid = m + "");
                    if (!d.vid) {
                        v = !0;
                        r = Math.round(2147483647 * Math.random());
                        p = ky.appName;
                        var D = ky.version,
                            B = ky.language ? ky.language : ky.browserLanguage,
                            I = ky.platform,
                            S = ky.userAgent;
                        try {
                            w = ky.javaEnabled()
                        } catch (M) {
                            w = !1
                        }
                        w = [p, D, B, I, S, w ? 1 : 0].join("");
                        h ? w += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), w += h.screen.width + "x" + h.screen.height);
                        w = w + f + (k || "");
                        for (k = w.length; 0 < g;) w += g-- ^ k++;
                        d.vid = (r ^ ly(w) & 2147483647) + "." + m
                    }
                    d.from_cookie || (d.from_cookie = !1)
                }
                if (!d.cid) {
                    b: for (m = 999, n && (n = 0 == n.indexOf(".") ? n.substr(1) : n, m = n.split(".").length), n = 999, f = f.split(";"), w = 0; w < f.length; w++)
                        if (k = ny.exec(f[w]) || oy.exec(f[w]) || py.exec(f[w])) {
                            h = k[1] || 0;
                            if (h == m) {
                                l = k[2];
                                break b
                            }
                            h < n && (n = h, l = k[2])
                        }v && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
                }
                d.dh = e;
                d.hid || (d.hid = Math.round(2147483647 * Math.random()));
                l = d
            }
            e = l.sid;
            d = l.hid;
            v = l.from_cookie;
            f = l.cid;
            v && !G(a, 5) || b.set("ga_vid", {
                value: l.vid
            }).set("ga_sid", {
                value: e
            }).set("ga_hid", {
                value: d
            }).set("ga_fc", {
                value: v
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }, function(a, b) {
            a = a.ga;
            var c = a.G;
            a = a.context.pvsid;
            b = b.set("js", {
                value: _.H(tw) ? ry(c) : null
            });
            var d = b.set;
            if (_.H(tw)) a: {
                var e = c;e = void 0 === e ? window : e;
                if (c = ry(e)) {
                    var f = null;
                    try {
                        "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (g) {
                        a = "3";
                        break a
                    }
                    a = "string" === typeof f ? f : "3"
                } else a = null
            }
            else a = null;
            d.call(b, "ms", {
                value: a
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = c.navigator;
            c = c.document;
            _.H(Lx) || "runAdAuction" in a && "joinAdInterestGroup" in a && Rf("run-ad-auction", c) && b.set("td", {
                value: 1
            })
        }, function(a, b) {
            var c = a.Cf.Df;
            Rf("browsing-topics", a.ga.G.document) && b.set("topics", {
                value: c instanceof Uint8Array ? lc(c, 3) : c
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G;
            c = c.Z;
            var e = a.ba.W;
            a = a.xf.lf;
            _.H(yx) || b.set("a3p", {
                value: We(ke(c, d), Kg(e[0].getAdUnitPath()), a)
            })
        }, function(a, b) {
            b.set("cbidsp", {
                value: Rl(a.Yc.Zc, function(c) {
                    return lc(Ue(c, Ct), 3)
                }, {
                    oa: "~"
                })
            })
        }, function(a, b) {
            a = a.ba.N.V;
            wh(a.xc(), ro, 1) && (a = qo(a.xc(), ro, 1), b.set("cmrv", {
                value: 1
            }).set("cmrq", {
                value: y(a, 1)
            }).set("cmrc", {
                value: kl(a, 2),
                options: {
                    oa: ">"
                }
            }).set("cmrids", {
                value: kl(a, 3),
                options: {
                    oa: "!"
                }
            }).set("cmrf", {
                value: y(a, 4)
            }))
        }, function(a, b) {
            var c = [];
            a = _.A(Tc(qo(a.ba.N.V.xc(), to, 2), Ln, 1));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d.xa().length && c.push(de(d, 1, 0) + "=" + d.xa().join("|"));
            b.set("pps", {
                value: c,
                options: {
                    oa: "~"
                }
            })
        }]),
        zI = function(a) {
            this.m = a;
            this.D = [];
            this.j = "";
            this.I = new x.Set(df(ex));
            a = _.A(G(this.m.ga.Z, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.I.add(b.value)
        },
        CI = function(a) {
            if (0 === a.m.ba.W.length) return "";
            for (var b = new x.Map, c = _.A(yI), d = c.next(); !d.done; d = c.next()) d = d.value, d(a.m, b);
            b = _.A(b);
            for (c = b.next(); !c.done; c = b.next()) d = _.A(c.value), c = d.next().value, d = d.next().value, AI(a, c, d.value, d.options);
            a.j = "https://" + (BI(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
            b = _.A(a.D);
            for (d = b.next(); !d.done; d = b.next()) {
                c = a;
                d = d.value;
                var e = d.value;
                var f = d.options,
                    g = void 0 === f.oa ? "," : f.oa;
                f = void 0 === f.Ca ? !1 : f.Ca;
                if (e = "object" !== typeof e ? null == e || !f && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(g)) : null) "?" !== c.j[c.j.length - 1] && (c.j += "&"), c.j += d.Ud + "=" + e
            }
            return a.j
        },
        BI = function(a) {
            var b = a.m;
            a = b.ga.Z;
            var c, d;
            b = null != (d = null == (c = EE(b.ba.N.V)) ? void 0 : G(c, 9)) ? d : !1;
            c = G(a, 8);
            return b || c || !G(a, 5)
        },
        AI = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.D.some(function(e) {
                return b === e.Ud
            });
            a.I.has(b) || null == c || a.D.push({
                Ud: b,
                value: c,
                options: d
            })
        };
    var FI = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.j = new x.Map;
            this.m = new x.Map;
            this.tb = _.Lg($g);
            window.performance && rv(window.performance.now) && (_.cb(window, "DOMContentLoaded", _.Xg(a, 334, function() {
                for (var f = _.A(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.A(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    DI(e, g, h) && e.j.delete(g)
                }
            })), IF(b, NF, function(f) {
                f = f.detail;
                var g = f.R;
                return void EI(e, (0, E.K)(Dn(d, f.xd)), (0, E.K)(y(g, 20)))
            }), IF(b, OF, function(f) {
                f = f.detail;
                var g = f.R;
                f = (0, E.K)(Dn(d, f.xd));
                g = (0, E.K)(y(g, 20));
                var h = e.m.get(f);
                null != h ? AF(h, g) : EI(e, f, g)
            }))
        },
        EI = function(a, b, c) {
            DI(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.hn(b, function() {
                return a.j.delete(b)
            }))
        },
        DI = function(a, b, c) {
            var d = Qh(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new yF({
                G: window,
                tb: a.tb,
                Xa: (0, E.sa)(d),
                Ga: function(e) {
                    return void bh(a.context, 336, e)
                },
                Af: _.H(Ex)
            });
            if (!d.j) return !1;
            AF(d, c);
            a.m.set(b, d);
            VF(a.L, b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var GI = function(a) {
        this.m = a;
        this.D = this.j = 0
    };
    GI.prototype.push = function() {
        for (var a = _.A($a.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(x.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(qG(String(c)))
            }
        }
        this.m.info(rG(String(this.j), String(this.D)));
        return this.j
    };
    var HI = function(a, b) {
        Z.call(this, a, 931);
        this.B = V(this);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(HI, Z);
    HI.prototype.j = function() {
        var a = this.o.value,
            b = new x.Map;
        this.B.j(new x.Map);
        if (a) {
            var c;
            a = _.A(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Tc(d, Ht, 1);
                c = 1 === de(c[0], 1, 0) ? Is(c[0]) : Gs(c[0], Hs);
                d = Xi(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b)
    };
    var II = function(a, b) {
        Z.call(this, a, 981);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(II, Z);
    II.prototype.j = function() {
        var a = new x.Map,
            b, c = _.A(null != (b = this.B.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Tc(b, Ht, 1);
            d = 1 === de(d[0], 1, 0) ? Is(d[0]) : Gs(d[0], Hs);
            a.set(d, Xi(b, 2))
        }
        this.o.j(a);
        this.l.j(new tt)
    };
    var JI = function(a, b, c, d, e) {
        Z.call(this, a, 980);
        this.A = new rz;
        this.F = W(this, b);
        this.B = W(this, c);
        this.l = W(this, d);
        this.o = W(this, e)
    };
    _.P(JI, Z);
    JI.prototype.j = function() {
        (F = _.u(Object, "entries").call(Object, this.F.value), _.u(F, "find")).call(F, function(c) {
            var d = _.A(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Fc)
        }) && (_.Lg(sk).l = !0);
        tk(25);
        for (var a = _.A([].concat(_.Ld(this.B.value), _.Ld(this.l.value), _.Ld(this.o.value))), b = a.next(); !b.done; b = a.next()) Fq(b.value);
        this.A.notify()
    };
    var KI = function(a, b) {
        Z.call(this, a, 892, _.we(Ww));
        this.o = V(this);
        this.F = V(this);
        this.l = V(this);
        this.B = V(this);
        this.J = xz(this, b)
    };
    _.P(KI, Z);
    KI.prototype.j = function() {
        var a = this.J.value;
        if (!a) throw Error("config timeout");
        jz(this.o, Ke(a, Pt, 3));
        jz(this.F, Ke(a, Rt, 2));
        this.l.j(un(a, 4));
        jz(this.B, Tc(a, ff, 6))
    };
    KI.prototype.H = function(a) {
        this.m(a)
    };
    KI.prototype.m = function(a) {
        mz(this.o, a);
        mz(this.F, a);
        this.l.j([]);
        this.B.j([])
    };
    var LI = [{
            name: "Interstitial",
            fd: 1
        }, {
            name: "TopAnchor",
            fd: 2
        }, {
            name: "BottomAnchor",
            fd: 3
        }],
        MI = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.A = V(this)
        };
    _.P(MI, Z);
    MI.prototype.j = function() {
        var a = this;
        this.A.j(LI.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.fd;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new bu;
            e = new Tt;
            b = _.z(e, 2, b);
            c = _.z(b, 1, "/22639388115/example/" + c.toLowerCase());
            return Ug(d, 5, cu, c)
        }))
    };
    var NI = function(a, b) {
            this.D = b;
            this.j = this.m = a
        },
        OI = function(a) {
            a.j = Math.min(a.D, 2 * a.j);
            a.m = Math.min(a.D, a.j)
        };
    var PI = function(a, b, c) {
        Z.call(this, a, 969);
        this.G = b;
        this.L = c;
        this.l = V(this)
    };
    _.P(PI, Z);
    PI.prototype.j = function() {
        var a = this;
        if (_.H(Ew)) {
            var b = performance.now(),
                c = "",
                d, e = 1E3 * _.we(Cw),
                f = _.we(Hw),
                g = 1E3 * _.we(Gw),
                h = function() {
                    return void a.G.clearInterval(l)
                };
            _.hn(this, h);
            var k = _.Xg(this.context, this.id, function() {
                var m, n, p, r, v;
                return _.eb(function(w) {
                    switch (w.j) {
                        case 1:
                            m = wg(a.G);
                            if (!m) {
                                h();
                                w.j = 2;
                                break
                            }
                            w.D = 3;
                            n = performance.now();
                            return fb(w, m, 5);
                        case 5:
                            c = null != (p = w.m) ? p : "0";
                            _.we(Iw) && (r = performance.now(), QI(a, r - n, r - b), b = n);
                            d && (d = void 0, l = a.G.setInterval(k, e));
                            c.length > f && (bh(a.context, a.id, new Kk("ML:" + c.length)), c = "0", h());
                            ib(w, 2);
                            break;
                        case 3:
                            v = jb(w), bh(a.context, a.id, v), c = "0", g ? (d ? OI(d) : (h(), d = new NI(g, e)), a.G.setTimeout(k, d.m)) : _.H(Fw) || h();
                        case 2:
                            a.l.j(function() {
                                return c
                            }), w.j = 0
                    }
                })
            });
            var l = this.G.setInterval(k, e);
            k()
        } else this.l.j(function() {
            return ""
        })
    };
    PI.prototype.m = function() {
        this.l.j(function() {
            return ""
        })
    };
    var QI = function(a, b, c) {
        gi("gpt_paw_refresh", function(d) {
            mi(d, a.context);
            L(d, "prc", a.L.D);
            L(d, "sbms", b);
            L(d, "lams", c)
        }, _.we(Iw))
    };
    var RI = function(a, b, c) {
        c = void 0 === c ? wg : c;
        Z.call(this, a, 1063);
        this.G = b;
        this.o = c;
        this.l = V(this)
    };
    _.P(RI, Z);
    RI.prototype.j = function() {
        var a = this;
        if (_.H(Ew) && xg(this.G)) {
            var b = null,
                c = 0,
                d = 1E3 * _.we(Cw),
                e = _.we(Hw),
                f = _.Xg(this.context, this.id, function() {
                    var h, k, l, m;
                    return _.eb(function(n) {
                        switch (n.j) {
                            case 1:
                                return h = a.o(a.G), k = "0", n.D = 2, fb(n, h, 4);
                            case 4:
                                k = null != (l = n.m) ? l : "0";
                                k.length > e && (bh(a.context, a.id, new Kk("ML:" + k.length)), k = "0");
                                ib(n, 3);
                                break;
                            case 2:
                                m = jb(n), bh(a.context, a.id, m);
                            case 3:
                                b = k, c = _.re(a.G) + d, n.j = 0
                        }
                    })
                });
            var g = (F = f(), _.u(F, "finally")).call(F, function() {
                g = void 0
            });
            this.l.j(function() {
                var h, k;
                return _.eb(function(l) {
                    if (1 == l.j) {
                        h = _.re(a.G) >= c;
                        k = null === b || "0" === b;
                        if (!h && !k) {
                            l.j = 2;
                            return
                        }
                        g || (g = (F = f(), _.u(F, "finally")).call(F, function() {
                            g = void 0
                        }));
                        return fb(l, g, 2)
                    }
                    return l.return((0, E.K)(b))
                })
            })
        } else this.l.j(function() {
            return x.Promise.resolve("")
        })
    };
    RI.prototype.m = function() {
        this.l.j(function() {
            return x.Promise.resolve("")
        })
    };
    var SI = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.A = V(this);
        this.o = X(this, b);
        this.l = X(this, c);
        this.B = zz(this, [b, d])
    };
    _.P(SI, Z);
    SI.prototype.j = function() {
        if (this.l.value) {
            var a = this.o.value || this.B.value;
            a && TI(this, a) ? this.A.j(a) : (kz(this.A), UI(this, a))
        } else kz(this.A)
    };
    SI.prototype.H = function(a) {
        this.m(a)
    };
    SI.prototype.m = function() {
        kz(this.A)
    };
    var TI = function(a, b) {
            return Tc((0, E.K)(a.l.value), St, 1).some(function(c) {
                return c.Ya() === b
            })
        },
        UI = function(a, b) {
            gi("pp_iris_failure", function(c) {
                L(c, "fnc", b);
                mi(c, a.context)
            }, _.we(Xw))
        };
    var VI = function(a, b) {
        Z.call(this, a, 1015);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(VI, Z);
    VI.prototype.j = function() {
        if (this.o.value) {
            var a = Tc(this.o.value, St, 1);
            (null == a ? 0 : a.length) ? (a = Tc(this.o.value, St, 1)[0], (F = [2, 3], _.u(F, "includes")).call(F, de(a, 3, 0)) ? this.l.j(a.Ya()) : kz(this.l)) : kz(this.l)
        } else kz(this.l)
    };
    VI.prototype.H = function(a) {
        this.m(a)
    };
    VI.prototype.m = function() {
        kz(this.l)
    };
    var WI = function(a, b, c) {
        Z.call(this, a, 1017);
        this.G = c;
        this.A = wz(this);
        this.l = X(this, b)
    };
    _.P(WI, Z);
    WI.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = ay(this.G, this.l.value, function(c) {
                if (!c) {
                    c = Tu(b.j);
                    for (var d = _.A(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.je(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    WI.prototype.H = function(a) {
        this.m(a)
    };
    WI.prototype.m = function() {
        this.A.notify()
    };
    var XI = function(a, b) {
        Z.call(this, a, 1056);
        this.A = V(this);
        this.l = JF(b, NF)
    };
    _.P(XI, Z);
    XI.prototype.j = function() {
        var a = this;
        this.l.then(function(b) {
            b = Kg((0, E.K)(b.detail.R.getAdUnitPath()));
            a.A.j(b)
        })
    };
    XI.prototype.H = function(a) {
        this.m(a)
    };
    XI.prototype.m = function() {
        kz(this.A)
    };
    var YI = function(a, b, c, d) {
        Z.call(this, a, 906, _.we(Vw));
        this.l = wz(this);
        if (b === b.top) {
            var e = new lf;
            _.an(this, e);
            var f = new VI(a, c);
            J(e, f);
            d = new XI(a, d);
            J(e, d);
            a = new SI(a, f.l, c, d.A);
            J(e, a);
            b = new WI(this.context, a.A, b);
            J(e, b);
            cz(this.C, b.A, !0);
            zf(e)
        } else this.l.notify()
    };
    _.P(YI, Z);
    YI.prototype.j = function() {
        this.l.notify()
    };
    YI.prototype.H = function(a) {
        this.m(a)
    };
    YI.prototype.m = function() {
        this.l.notify()
    };
    var ZI = function(a, b, c) {
        Z.call(this, a, 964);
        var d = this;
        this.googletag = b;
        this.G = c;
        this.l = new rz;
        this.G === this.G.top && (yz(this, this.l), (a = te("loadEventStart", this.G)) ? (a = _.re(this.G) - a, 1E3 <= a ? this.l.notify() : setTimeout(_.Xg(this.context, this.id, function() {
            return void d.l.notify()
        }), 1E3 - a)) : (a = function() {
            return void setTimeout(_.Xg(d.context, d.id, function() {
                return void d.l.notify()
            }), 1E3)
        }, "complete" === this.G.document.readyState ? a() : cG(this, this.id, this.G, "load", a)))
    };
    _.P(ZI, Z);
    ZI.prototype.j = function() {
        var a = this;
        if (this.G === this.G.top) {
            var b = uh(!1, this.G),
                c = b.width,
                d = b.height;
            b = "CSS1Compat" === this.G.document.compatMode ? this.G.document.documentElement : this.G.document.body;
            var e = b.scrollHeight,
                f = b.scrollWidth,
                g = 0,
                h = 0,
                k = 0;
            b = _.A(Hz(this.G));
            for (var l = b.next(); !l.done; l = b.next()) {
                var m = l.value.getBoundingClientRect();
                l = m.width;
                m = m.height;
                g += m;
                h += m * l;
                k++
            }
            _.H(Sw) ? Tm(this.context, c, d, f, e, k, g, h, this.googletag.pubads().getSlots().length) : gi("gpt_dens", function(n) {
                mi(n, a.context);
                L(n, "vw", c);
                L(n, "vh", d);
                L(n, "ph", e);
                L(n, "pw", f);
                L(n, "act", k);
                L(n, "aht", g);
                L(n, "ahd", Math.round(g / e * 100));
                L(n, "aa", h);
                L(n, "aad", Math.round(h / (e * f) * 100))
            }, _.we(hx))
        }
    };
    var $I = function(a, b) {
        Z.call(this, a, 1031);
        this.G = b
    };
    _.P($I, Z);
    $I.prototype.j = function() {
        this.G === this.G.top && $i(this.G)
    };
    var aJ = function(a) {
        Z.call(this, a, 891);
        this.l = V(this);
        var b = new Dp;
        this.o = W(this, b);
        (a = _.Og(260)) ? a(function(c, d) {
            if (d) mz(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.rb || mz(b, Error("malformed response"))
            }
        }): mz(b, Error("missing input"))
    };
    _.P(aJ, Z);
    aJ.prototype.j = function() {
        this.l.j(new eu(this.o.value))
    };
    var bJ = function(a, b) {
        Z.call(this, a, 966);
        this.G = b;
        this.l = V(this)
    };
    _.P(bJ, Z);
    bJ.prototype.j = function() {
        var a = this,
            b = yg(this.G);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.G, "_pbjsGlobals")) && !b.configurable) gi("pdpg_error", function(d) {
            mi(d, a.context)
        }, _.we(qw));
        else {
            var c = null;
            Object.defineProperty(this.G, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = yg(a.G)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    bJ.prototype.m = function() {};
    var cJ = function(a, b) {
        Z.call(this, a, 979);
        this.G = b;
        this.A = V(this)
    };
    _.P(cJ, Z);
    cJ.prototype.j = function() {
        var a = this,
            b = "function" !== typeof this.G.document.browsingTopics,
            c = !Rf("browsing-topics", this.G.document);
        b = b || c;
        !_.H(kx) || !_.H(vw) && b ? kz(this.A) : Li(this.G).then(function(d) {
            a.A.j(d)
        })
    };
    cJ.prototype.m = function() {
        kz(this.A)
    };
    var Ym = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Wa = b;
        this.A = V(this);
        this.l = W(this, b);
        yz(this, c);
        yz(this, d)
    };
    _.P(Ym, Z);
    Ym.prototype.j = function() {
        this.A.j(this.l.value)
    };
    var Xm = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.o = b;
        this.L = c;
        this.G = d;
        this.F = e;
        this.l = wz(this);
        yz(this, f);
        this.B = W(this, g)
    };
    _.P(Xm, Z);
    Xm.prototype.j = function() {
        var a = this,
            b = new Sx(this.G, -1, _.H(Ix));
        _.an(this, b);
        if (Ux(b)) {
            var c = this.L.H,
                d = c.status,
                e = function(f) {
                    var g = a.B.value,
                        h, k, l;
                    if (l = !(null == (h = a.F) ? 0 : G(h, 9))) {
                        var m = void 0 === m ? !1 : m;
                        l = Yx(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !m || "string" !== typeof f.tcString || !f.tcString.length ? !0 : Wx(f, "1") : !1
                    }
                    h = _.z(g, 5, l);
                    l = !Zx(f, ["3", "4"]);
                    h = _.z(h, 9, l);
                    h = _.z(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = _.z(h, 4, l);
                    _.z(k, 7, f.internalErrorState);
                    null != f.gdprApplies && _.z(g, 3, f.gdprApplies);
                    _.H(ix) && !Zx(f, ["2", "7", "9", "10"]) && _.z(g, 8, !0);
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    c.data = void 0;
                    c.status = 1;
                    c.j.push(e);
                    this.o.info(ZG());
                    b.addEventListener(function(f) {
                        Yx(f) ? ("tcunavailable" === f.tcString ? a.o.info($G("failed")) : a.o.info($G("succeeded")), c.data = f, c.status = 2, c.wc().forEach(function(g) {
                            g(f)
                        }), c.j = []) : (c.data = void 0, c.status = 1)
                    });
                    break;
                default:
                    throw Error("Impossible TCDataCacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var Wm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.B = b;
        this.G = c;
        this.l = wz(this);
        yz(this, d);
        this.o = W(this, e)
    };
    _.P(Wm, Z);
    Wm.prototype.j = function() {
        var a = this,
            b = new eE(this.G);
        _.an(this, b);
        if (gE(b)) {
            var c = _.Xg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && _.z(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.B.info(YG());
            iE(b, c)
        } else this.l.notify()
    };
    var Um = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Wa = V(this)
    };
    _.P(Um, Z);
    Um.prototype.j = function() {
        var a = new Pz,
            b, c = null == (b = this.l) ? void 0 : G(b, 9);
        _.z(a, 5, !c);
        this.Wa.j(a)
    };
    var Vm = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.G = b;
        this.o = d;
        this.l = W(this, c)
    };
    _.P(Vm, Z);
    Vm.prototype.j = function() {
        var a = this;
        _.eh(this.context, 894, function() {
            return void gi("cmpMet", function(b) {
                mi(b, a.context);
                var c = new Sx(a.G);
                _.an(a, c);
                var d = new eE(a.G);
                _.an(a, d);
                L(b, "fc", Number(a.l.value));
                L(b, "tcfv1", Number(!!a.G.Wg));
                L(b, "tcfv2", Number(Ux(c)));
                L(b, "usp", Number(gE(d)));
                L(b, "ptt", 17)
            }, a.o)
        })
    };
    var dJ = function(a, b) {
        Z.call(this, a, 1052);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(dJ, Z);
    dJ.prototype.j = function() {
        var a = this.B.value,
            b = new ff,
            c = new x.Map,
            d = new x.Set;
        a = _.A(null != a ? a : []);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = e.value;
            if (f.yc()) {
                e = new x.Set;
                c.set(f.Ya().toString(), e);
                f = _.A((0, E.K)(f.Pb()));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = (0, E.K)(g.na());
                    e.add(h);
                    d.has(h) || Ze(b, 2, It, g);
                    d.add(h)
                }
            }
        }
        this.o.j(c);
        this.l.j(b)
    };
    var eJ = function(a, b) {
        Z.call(this, a, 1040);
        this.l = V(this);
        this.o = V(this);
        this.B = X(this, b)
    };
    _.P(eJ, Z);
    eJ.prototype.j = function() {
        var a = this.B.value;
        a ? (jz(this.o, a instanceof ff ? a.Ya() : null), a = a.Pb(), this.l.j(a.map(function(b) {
            var c = b.I();
            return {
                nc: b.na(),
                url: c && (_.u(c, "startsWith").call(c, location.protocol) || _.u(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Id(c) : void 0
            }
        }))) : (kz(this.o), this.l.j([]))
    };
    var Fp = function(a, b, c, d) {
        Z.call(this, a, 813);
        this.B = b;
        this.l = V(this);
        this.F = X(this, c);
        this.o = X(this, d)
    };
    _.P(Fp, Z);
    Fp.prototype.j = function() {
        var a = this,
            b = this.F.value;
        if (!b || _.H(xx)) this.l.j(!1);
        else {
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.nc;
                (d = d.url) && _.an(this, Pf(c, d, this.o.value, function(e, f) {
                    bh(a.context, e, f);
                    var g, h;
                    null == (g = a.B) || null == (h = g.error) || h.call(g, f)
                }))
            }
            this.l.j(!0)
        }
    };
    var fJ = function(a, b, c) {
        Z.call(this, a, 1045);
        this.l = c;
        this.o = W(this, b)
    };
    _.P(fJ, Z);
    fJ.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.context,
                c = this.l;
            if (a.yc()) {
                var d = new lf,
                    e = new Dp;
                e.j(a);
                a = new eJ(b, e);
                J(d, a);
                b = new Fp(b, console, a.l, c);
                J(d, b);
                zf(d)
            }
        }
    };
    var cn = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        _.Og(260) && (this.B = W(this, c))
    };
    _.P(cn, Z);
    cn.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.B) ? void 0 : a.value) ? b : nE(this.o)) ? (a = pE(this.o), lz(this.l, a)) : kz(this.l)
    };
    var bn = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.Ab = V(this);
        c && yz(this, c)
    };
    _.P(bn, Z);
    bn.prototype.j = function() {
        this.Ab.j(nE(this.l))
    };
    var gJ = function(a, b) {
        Z.call(this, a, 1018);
        this.l = X(this, b)
    };
    _.P(gJ, Z);
    gJ.prototype.j = function() {
        var a, b, c, d = _.A(null != (c = null == (a = this.l.value) ? void 0 : null == (b = Ke(a, lE, 5)) ? void 0 : un(b, 1)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) Fq(a.value)
    };
    var Ep = function(a, b, c) {
        Z.call(this, a, 706);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(Ep, Z);
    Ep.prototype.j = function() {
        jz(this.A, ke(this.l.value, this.G))
    };
    var jn = new x.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var nq = function(a, b, c, d, e) {
        var f = $a.apply(5, arguments);
        Z.call(this, a, 912);
        this.googletag = b;
        this.V = c;
        this.F = d;
        this.B = e;
        this.l = V(this);
        this.J = V(this);
        this.o = [];
        f = _.A(f);
        for (var g = f.next(); !g.done; g = f.next()) this.o.push(W(this, g.value))
    };
    _.P(nq, Z);
    nq.prototype.j = function() {
        if (_.H($w)) {
            for (var a = [], b = _.A(this.o), c = b.next(); !c.done; c = b.next()) {
                c = _.A(c.value.value);
                for (var d = c.next(); !d.done; d = c.next()) switch (d = d.value, Si(d, cu)) {
                    case 5:
                        var e = void 0,
                            f = void 0;
                        on(this.context, this.googletag, (0, E.K)(rn(d, Tt, 5, cu)), null != (e = Ke(d, mn, 4)) ? e : null, null != (f = this.V) ? f : $h().j, this.F, this.B);
                        break;
                    case 6:
                        e = (0, E.K)(rn(d, au, 6, cu));
                        if (f = wh(e, Zt, 2)) e = (0, E.K)(Ke(e, Zt, 2)), f = tn(e) && vn(e);
                        f && (f = e = void 0, (d = yn(this.googletag, (0, E.K)(rn(d, au, 6, cu)), null != (e = Ke(d, mn, 4)) ? e : null, null != (f = this.V) ? f : $h().j)) && a.push.apply(a, _.Ld(d)));
                        break;
                    case 8:
                        wh(d, mn, 4) && this.J.j((0, E.K)(Ke(d, mn, 4)))
                }
            }
            this.l.j(a)
        } else this.l.j([])
    };
    nq.prototype.H = function(a) {
        this.m(a)
    };
    nq.prototype.m = function() {
        this.l.j([])
    };
    var hJ = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.B = b;
        this.o = c;
        this.l = X(this, d)
    };
    _.P(hJ, Z);
    hJ.prototype.j = function() {
        var a = this;
        Gf(this.B, this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var iJ = function(a, b, c, d) {
        _.Qx.call(this);
        this.context = a;
        this.ib = b;
        this.la = c;
        this.L = d;
        this.ha = new aJ(this.context);
        this.m = new KI(this.context, this.ha.l);
        this.ma = this.m.l;
        this.j = new $H(this.context, this.m.o, window);
        this.C = new HI(this.context, this.j.M);
        this.l = new II(this.context, this.j.J);
        var e;
        this.T = new MI(this.context, null != (e = window.location.hash) ? e : "");
        this.O = new nq(this.context, qj(), null, this.ib, this.la, this.T.A);
        this.ja = new bJ(this.context, window);
        this.ka = new cJ(this.context, window);
        this.P = new JI(this.context, this.j.o, this.ma, this.j.l, this.O.l);
        this.U = this.C.l;
        this.F = this.j.B;
        this.Y = this.j.F;
        this.da = this.j.o;
        this.Da = this.j.l;
        this.J = this.C.B;
        this.Ma = this.O.l;
        this.M = this.ja.l;
        this.ia = this.l.o;
        this.ca = this.l.l;
        this.ra = this.ka.A;
        this.fa = this.P.A;
        this.B = new oI(this.context, this.M, this.fa, this.U, this.F, this.J, this.ia, this.ca, this.Y);
        this.fb = this.B.l;
        this.gb = this.B.o;
        _.an(this, this.ja);
        _.an(this, this.ha);
        _.an(this, this.m);
        _.an(this, this.C);
        _.an(this, this.l);
        _.an(this, this.j);
        _.an(this, this.T);
        _.an(this, this.O);
        _.an(this, this.ka);
        _.an(this, this.B);
        _.an(this, this.P);
        _.Og(260) || (this.ma.j([]), this.da.j({}), this.Da.j([]), kz(this.U), this.F.j(!1), kz(this.J), kz(this.ia), this.fa.notify(), kz(this.Ma), kz(this.ca), this.Y.j(!1));
        _.Og(260) && _.H(kx) || kz(this.ra);
        _.H(Dw) ? (this.o = new RI(this.context, window), _.an(this, this.o), this.lb = this.o.l) : 0 < _.we(Cw) && (this.H = new PI(this.context, window, this.L), _.an(this, this.H), this.Ka = this.H.l)
    };
    _.P(iJ, _.Qx);
    var jJ = function(a, b) {
        var c = new lf;
        _.an(a, c);
        J(c, a.ja);
        J(c, a.ha);
        J(c, a.m);
        J(c, a.j);
        J(c, a.C);
        J(c, a.P);
        J(c, a.l);
        b = new YI(a.context, window, a.m.F, b);
        a.pa = b.l;
        J(c, b);
        J(c, a.T);
        J(c, a.O);
        _.we(hx) && J(c, new ZI(a.context, qj(), window));
        _.H(Gx) && J(c, new $I(a.context, window));
        a.H && J(c, a.H);
        a.o && J(c, a.o);
        _.H(kx) && J(c, a.ka);
        J(c, a.B);
        var d = dn(a.context, a.pa);
        b = d.Ab;
        var e = d.Md;
        _.an(c, d.ua);
        d = new gJ(a.context, e);
        J(c, d);
        _.H(xx) || !_.H(Uw) || pk() || (b = Zm(a.context, a.la, a.L, void 0, window, b, e).Wa, b = new Ep(a.context, window, b), J(c, b), e = new hJ(a.context, qj(), console, b.A), J(c, e), e = new dJ(a.context, a.m.B), J(c, e), _.H(Bx) && (a = new fJ(a.context, e.l, b.A), J(c, a)));
        zf(c)
    };
    var kJ = ["Debug", "Info", "Warning", "Error", "Fatal"],
        lJ = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    q = lJ.prototype;
    q.getSlot = function() {
        return this.j
    };
    q.getLevel = function() {
        return this.level
    };
    q.getTimestamp = function() {
        return this.timestamp
    };
    q.getMessage = function() {
        return this.message
    };
    q.toString = function() {
        return this.timestamp.toTimeString() + ": " + kJ[this.level] + ": " + this.message
    };
    var mJ = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return En(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            }
        },
        nJ = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var oJ = function(a) {
            this.context = a;
            this.m = _.u(Array, "from").call(Array, {
                length: 1E3
            });
            this.D = this.I = this.j = 0;
            this.C = window
        },
        vH = function(a) {
            return [].concat(_.Ld(a.m.slice(a.j)), _.Ld(a.m.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        wH = function(a, b) {
            return vH(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        xH = function(a, b) {
            return vH(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    oJ.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new lJ(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.m[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.we(yw) && 100 > this.I;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = mJ[k] || nJ[k];
        g && f && (b = _.we(yw), gi("gpt_eventlog_messages", function(m) {
            ++e.I;
            mi(m, e.context);
            L(m, "level", a);
            L(m, "messageId", k);
            L(m, "args", h.join("|"));
            l || L(m, "noMsg", !0);
            var n = Error(),
                p;
            var r = null != (p = n.stack) ? p : "";
            n = n.message;
            try {
                -1 == r.indexOf(n) && (r = n + "\n" + r);
                for (var v; r != v;) v = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var w = r.replace(RegExp("\n *", "g"), "\n")
            } catch (D) {
                w = n
            }
            L(m, "stack", w)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new Kk(b);
            d = this.D < _.we(zw) && f && _.t.console;
            if (this.C === top && d || _.u(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse"))(function(m) {
                var n, p, r, v;
                return void(2 === a ? null == (p = (n = _.t.console).warn) ? void 0 : p.call(n, m) : null == (v = (r = _.t.console).error) ? void 0 : v.call(r, m))
            })(b), this.D++
        }
        return c
    };
    oJ.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    oJ.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var Vn = "3rd party ad content";
    var pJ = function(a, b) {
            this.serviceName = b;
            this.slot = (0, E.K)(a.j)
        },
        qJ = function(a, b) {
            pJ.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.P(qJ, pJ);
    var rJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(rJ, pJ);
    var sJ = function(a, b, c) {
        pJ.call(this, a, b);
        this.inViewPercentage = c
    };
    _.P(sJ, pJ);
    var tJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(tJ, pJ);
    var uJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(uJ, pJ);
    var vJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(vJ, pJ);
    var wJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(wJ, pJ);
    var xJ = function(a, b, c, d) {
        pJ.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.P(xJ, pJ);
    var yJ = function(a, b, c) {
        pJ.call(this, a, b);
        this.payload = c
    };
    _.P(yJ, pJ);
    var zJ = function() {
        pJ.apply(this, arguments)
    };
    _.P(zJ, pJ);
    var lo = new x.Set,
        AJ = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Kk("Reached Limit for addEventListener");
        }, 3E5),
        BJ = function(a, b) {
            GF.call(this, a);
            this.C = b;
            this.j = [];
            this.m = !1;
            this.O = 0;
            this.o = new x.Map;
            lo.add(this);
            this.C.info(tG(this.getName()))
        };
    _.P(BJ, GF);
    q = BJ.prototype;
    q.enable = function() {
        this.m || (this.m = !0, tk(6), this.F())
    };
    q.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new uJ(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.C.info(vG(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        Ds(b, 4, a)
    };
    q.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.j, c)
        })
    };
    q.addEventListener = function(a, b) {
        var c = this;
        if (this.O >= _.we(xw) && 0 < _.we(xw)) AJ();
        else {
            var d;
            null != (d = this.o.get(a)) && d.has(b) || (this.o.has(a) || this.o.set(a, new x.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.C.error(MG(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, (0, E.K)(this.o.get(a)).set(b, d), IF(this, a, d), this.O++)
        }
    };
    q.removeEventListener = function(a, b) {
        var c, d = null == (c = this.o.get(a)) ? void 0 : c.get(b);
        if (!d || !HF(this, a, d)) return !1;
        this.O--;
        return (0, E.K)(this.o.get(a)).delete(b)
    };
    var $n = function(a) {
        for (var b = _.A(lo), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var io = function(a, b, c) {
        BJ.call(this, a, b);
        this.l = c;
        this.ads = new x.Map;
        this.B = this.qb = !1;
        _.Lg(sk).I = !0
    };
    _.P(io, BJ);
    io.prototype.slotAdded = function(a, b) {
        var c = this;
        IF(a, LF, function(d) {
            G(d.detail, 11) && (CJ(c, a).kf = !0)
        });
        BJ.prototype.slotAdded.call(this, a, b)
    };
    io.prototype.F = function() {};
    io.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.qb = a)
    };
    var rH = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.B && gi("ima_sdk_v", function(c) {
                a.B = !0;
                L(c, "v", b)
            });
            return String(y($h().j, 26))
        },
        pH = function(a, b) {
            var c = $h().j,
                d = $h().m;
            if (a.l.m) {
                var e = {
                    ab: 3
                };
                a.J && (e.Fb = a.J);
                a.M && (e.Gb = a.M);
                b = null != b ? b : a.j;
                c = Mh(c, d);
                d = e.Fb;
                var f = e.Gb;
                d && "number" !== typeof d || f && "number" !== typeof f || a.l.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.C.error(BG(b[0].getDomId()))
        },
        sH = function(a, b) {
            var c;
            return a.l.m && !(null == (c = a.ads.get(b)) || !c.kf)
        },
        qH = function(a, b) {
            return a.j.filter(function(c) {
                return _.u(b, "includes").call(b, c.toString())
            })
        };
    io.prototype.getName = function() {
        return "companion_ads"
    };
    io.prototype.U = function() {};
    var tH = function(a, b, c, d) {
            b = new qJ(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        CJ = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.hn(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var go = function(a, b) {
        BJ.call(this, a, b)
    };
    _.P(go, BJ);
    go.prototype.getName = function() {
        return "content"
    };
    go.prototype.F = function() {};
    go.prototype.U = function() {};
    var DJ = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        EJ = function(a, b) {
            if (!_.u(a.m, "includes").call(a.m, b) && (F = [1, 2, 3], _.u(F, "includes")).call(F, b)) {
                var c = Wz[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = Ej(document, c)) c.id = d
                }
                a.m.push(b);
                b = new Xz(b);
                a.hostpageLibraryTokens.push(b);
                a = qj();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        FJ = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new x.Set;
            a.j[b].add(c)
        },
        GJ = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, "values").call(c)) ? d : [];
            return [].concat(_.Ld(a))
        };
    var HJ = _.zr(function() {
            xv("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        JJ = function(a) {
            var b = this;
            this.L = a;
            this.j = new x.Map;
            this.W = new x.Set;
            _.Lg(sk).D = function(c) {
                return IJ(b, c)
            }
        };
    JJ.prototype.defineSlot = function(a, b, c, d, e) {
        a = vk(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.dd || b.error(kj("googletag.defineSlot", [c, d, e]));
        return null
    };
    var vk = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Xa: f,
            Vd: void 0 === g ? !1 : g
        }) : {}
    };
    JJ.prototype.add = function(a, b, c, d, e) {
        var f = this;
        e = void 0 === e ? {} : e;
        var g = e.Xa,
            h = void 0 === e.format ? 0 : e.format,
            k = void 0 === e.Vd ? !1 : e.Vd,
            l = Pl(h, void 0 === e.kb ? !1 : e.kb);
        if (l) return gi("gpt_pla_ns", function(n) {
            L(n, "iu", c);
            L(n, "f", null != h ? h : "");
            L(n, "nsr", l);
            mi(n, a)
        }), ul(b, l, h, c), {};
        k && HJ();
        e = this.j.get(c) || Number(k);
        d = KJ(this, a, b, c, e, d, g || "gpt_unit_" + c + "_" + e);
        b = d.Va;
        var m = d.slotId;
        d = d.dd;
        if (!m) return {
            dd: d
        };
        this.j.set(c, e + 1);
        this.W.add(m);
        _.hn(m, function() {
            return void f.W.delete(m)
        });
        rE(c);
        return {
            slotId: m,
            Va: b
        }
    };
    var Dn = function(a, b) {
            a = _.A(a.W);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        ao = function(a) {
            a = _.A(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.La()
        },
        KJ = function(a, b, c, d, e, f, g) {
            var h = Dn(a, g);
            if (h) return c.error(pG(g, d, h.getAdUnitPath())), {
                dd: !0
            };
            var k = new PH;
            QH(_.z(k, 1, d), g);
            f = Jk(f);
            h = f.Ia;
            Qc(k, 5, f.vc);
            null !== h && _.Rg(k, 16, h);
            GE(k);
            var l = new Ud(b, d, e, g);
            BH(l, Nk(b, c, l));
            _.hn(l, function() {
                var m = $h(),
                    n = l.getDomId();
                delete m.m[n];
                m.D.delete(l);
                m = l.getAdUnitPath();
                m = Kg(m);
                var p;
                n = (null != (p = mh.get(m)) ? p : 0) - 1;
                0 >= n ? mh.delete(m) : mh.set(m, n);
                c.info(OG(l.toString()), l);
                (p = dj.get(l)) && ej.delete(p);
                dj.delete(l)
            });
            c.info(fG(l.toString()), l);
            IF(l, MF, function(m) {
                m = m.detail.uf;
                c.info(gG(l.getAdUnitPath()), l);
                By(_.Lg($g), "7", 9, $F(a.L, l), 0, m)
            });
            IF(l, LF, function(m) {
                var n = m.detail;
                c.info(hG(l.getAdUnitPath()), l);
                var p;
                m = _.Lg($g);
                var r = y(k, 20);
                n = null != (p = n.getEscapedQemQueryId()) ? p : "";
                m.j && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = n)
            });
            IF(l, ep, function() {
                return void c.info(iG(l.getAdUnitPath()), l)
            });
            IF(l, gp, function() {
                return void c.info(jG(l.getAdUnitPath()), l)
            });
            return {
                Va: k,
                slotId: l
            }
        },
        IJ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Ld(a.W)).some(function(d) {
                return c.test(Kg(d.getAdUnitPath()))
            })
        },
        no = function(a) {
            return GJ(_.Lg(DJ), a).map(function(b) {
                var c;
                return null == (c = Zh(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        };
    var LJ = Q(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        MJ = Q(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        NJ = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        OJ = Q(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        PJ = new x.Map([
            [2, {
                ff: "page_level_ads"
            }]
        ]),
        QJ = function(a) {
            var b = void 0 === b ? PJ : b;
            this.context = a;
            this.j = b;
            this.m = new x.Map;
            this.loaded = new x.Set
        },
        SJ;
    QJ.prototype.load = function(a) {
        var b = _.RJ(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).ff;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.Og(172)) && "pagead2.googlesyndication.com" === fv((c.src || "").match(_.ev)[3] || null);
            c = Id(Ua(c ? this.context.Za ? C(NJ, this.context.Za, d) : C(OJ, d, this.context.Ha) : this.context.Za ? C(LJ, this.context.Za, d) : C(MJ, d, this.context.Ha)).toString());
            d = {};
            var e = _.we(ax),
                f = _.we(Bw);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.u(Object, "keys").call(Object, d).length ? (c = Hr.exec(Ua(c).toString()), e = c[3] || "", d = Id(c[1] + Ir("?", c[2] || "", d) + Ir("#", e))) : d = c;
            SJ(this, a);
            Ej(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.RJ = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.sg);
        return (0, E.K)(a.m.get(b))
    };
    SJ = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Xg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0, E.K)(a.j.get(c));
                f = (void 0 === f.xe ? [] : f.xe).map(function(g) {
                    return _.RJ(a, g).promise
                });
                x.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(qj(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var TJ = function() {
        this.resources = {}
    };
    var gq = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.G = e;
        this.A = wz(this);
        this.l = X(this, f);
        this.o = W(this, g);
        this.F = W(this, h);
        this.B = X(this, k)
    };
    _.P(gq, Z);
    gq.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.yb() && yp(this.l.value, 12, !1)) {
            var b = (0, E.K)(this.B.value).Ge,
                c = _.fp(this.L, this.slotId),
                d = this.F.value,
                e = this.o.value;
            _.bi(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (UJ) UJ.Rf(e);
            else {
                UJ = new b(this.context, this.format, e, this.G, d, this.L, this.slotId);
                b = {};
                d = _.A(Tc(this.l.value, fu, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[y(f, 1)] = y(f, 2);
                UJ.Sf(b);
                UJ.fb();
                UF(this.L, this.slotId, function() {
                    UJ && (UJ.La(), UJ = null);
                    c && _.YF(a.L, a.slotId)
                })
            }
            _.hn(this, function() {
                return _.av(e)
            })
        }
        this.A.notify()
    };
    var UJ = null;
    var hq = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.T = d;
        this.l = X(this, e);
        this.F = W(this, f);
        this.P = W(this, g);
        this.J = X(this, h);
        this.M = X(this, k);
        this.B = W(this, l);
        this.o = JF(b, Vo, function(m) {
            m = m.detail;
            try {
                var n = JSON.parse(m.data);
                return "sth" === n.googMsgType && "i-adframe-load" === n.msg_type
            } catch (p) {
                return !1
            }
        })
    };
    _.P(hq, Z);
    hq.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n;
        return _.eb(function(p) {
            if (1 == p.j) {
                b = _.we(Nw);
                Math.random() < _.we(Ow) && x.Promise.race([a.o.then(function() {
                    return !1
                }), new x.Promise(function(r) {
                    cG(a, a.id, window, "pagehide", function(v) {
                        v && r(!0)
                    })
                })]).then(function(r) {
                    var v = new Bj("pm");
                    L(v, "ts", Date.now());
                    L(v, "flg", b);
                    L(v, "qem", a.B.value);
                    L(v, "ph", Number(r));
                    Dj(v, 1)
                });
                c = a.l.value;
                if (!c || 5 !== a.format) return p.return();
                d = a.P.value;
                e = a.F.value;
                f = (0, E.K)(a.M.value);
                g = f.Oe;
                h = new _.vE(a.context);
                m = (null == (k = a.l.value) ? 0 : mk(k, 14)) ? 60 * (0, E.K)(null == (l = a.l.value) ? void 0 : y(l, 14)) : 604800;
                n = new g(window, e, d, h, a.T, To(Tc(c, fu, 13)), Fl(a.slotId), function() {
                    return void a.La()
                }, m, a.J.value);
                _.an(a, n);
                switch (b) {
                    case 0:
                        n.fa();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return fb(p, a.o, 4);
                if (a.D) return p.return();
                n.fa(!0)
            }
            p.j = 0
        })
    };
    var VJ = function() {
        this.module = 2
    };
    VJ.prototype.toString = function() {
        return String(this.module)
    };
    _.WJ = new VJ;
    var cq = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.B = b;
        this.format = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e);
        f && yz(this, f)
    };
    _.P(cq, Z);
    cq.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !yp(a, 12, !1));
        a = 5 === this.format && this.o.value;
        b || a ? lz(this.A, this.B.load(_.WJ)) : kz(this.A)
    };
    var XJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.ya = c;
        yz(this, d);
        zz(this, [e, f])
    };
    _.P(XJ, Z);
    XJ.prototype.j = function() {
        this.ya.dispatchEvent("rewardedSlotClosed", 703, new zJ(this.slotId, "publisher_ads"))
    };
    var YJ = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.ya = c;
        yz(this, d);
        this.l = X(this, e)
    };
    _.P(YJ, Z);
    YJ.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        this.ya.dispatchEvent("rewardedSlotGranted", 702, new yJ(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var ZJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        $J = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.G = b;
            this.F = f;
            this.A = wz(this);
            this.l = W(this, c);
            this.o = W(this, d);
            yz(this, e);
            this.B = new _.VD(this.G)
        };
    _.P($J, Z);
    $J.prototype.j = function() {
        var a = this;
        if (!this.F.rb) {
            var b = 0 === (0, _.Ll)() ? "rgba(1,1,1,0.5)" : "white";
            _.bi(this.o.value, _.u(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, ZJ));
            _.hn(this, _.dE(this.G.document, this.G));
            Fd(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.G === this.G.top) {
                this.G.location.hash = "goog_rewarded";
                var c = new _.YD(this.B);
                _.ZD(c);
                _.hn(this, function() {
                    _.$D(c);
                    "goog_rewarded" === a.G.location.hash && (a.G.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var aK = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.G = b;
        this.l = W(this, c);
        yz(this, d)
    };
    _.P(aK, Z);
    aK.prototype.j = function() {
        if (this.G === this.G.top) var a = (0, E.K)(Fd(this.l.value)),
            b = cG(this, 503, this.G, "hashchange", function(c) {
                Jr(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var bK = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.ya = c;
        this.A = wz(this);
        this.l = W(this, d)
    };
    _.P(bK, Z);
    bK.prototype.j = function() {
        var a = this.l.value,
            b = new _.sg,
            c = b.promise,
            d;
        this.ya.dispatchEvent("rewardedSlotReady", 701, new xJ(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        sz(this.A, c)
    };
    var cK = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        dK = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        eK = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.B = V(this);
            this.o = wz(this);
            this.F = W(this, c);
            this.l = zz(this, [d, e])
        };
    _.P(eK, Z);
    eK.prototype.j = function() {
        "ha_before_make_visible" === this.l.value.message ? this.o.notify() : (_.bi(this.F.value, _.u(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Ll)() ? dK : cK)), this.B.j(this.l.value))
    };
    var fK = function() {
        Z.apply(this, arguments);
        this.value = this.promise = null;
        this.A = V(this)
    };
    _.P(fK, Z);
    fK.prototype.j = function() {
        var a = this;
        this.promise.then(function() {
            return void jz(a.A, a.value)
        })
    };
    var Uo = function(a, b, c, d) {
        fK.call(this, a, 1061);
        var e = this;
        this.promise = JF(b, c, function(f) {
            return null !== (e.value = d(f))
        })
    };
    _.P(Uo, fK);
    var iq = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        if (4 === c) {
            this.ua = new lf;
            _.an(this, this.ua);
            c = Wo(b, "granted", a);
            J(this.ua, c);
            var h = Wo(b, "prefetched", a);
            J(this.ua, h);
            var k = Wo(b, "closed", a);
            J(this.ua, k);
            a = Wo(b, "ha_before_make_visible", a);
            J(this.ua, a);
            var l = new eK(this.context, b, f, h.A, a.A);
            J(this.ua, l);
            h = new bK(this.context, b, d, l.B);
            J(this.ua, h);
            g = new $J(this.context, e, f, g, h.A, l.o);
            J(this.ua, g);
            J(this.ua, new aK(this.context, e, f, g.A));
            J(this.ua, new YJ(this.context, b, d, h.A, c.A));
            J(this.ua, new XJ(this.context, b, d, h.A, k.A, a.A))
        }
    };
    _.P(iq, Z);
    iq.prototype.j = function() {
        var a;
        null == (a = this.ua) || zf(a)
    };
    var gK = function(a, b, c) {
        _.Qx.call(this);
        this.context = a;
        this.C = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.He ? "fluid" : [b.width, b.height];
        this.Rb = Xh(a);
        this.Sb = Vn
    };
    _.P(gK, _.Qx);
    gK.prototype.render = function() {
        var a = this.C,
            b = this.m,
            c = b.slotId,
            d = b.N.R,
            e = b.X,
            f = b.size,
            g = b.Db,
            h = b.Ce,
            k = b.isBackfill;
        b = b.Zb;
        g && zg(g, _.Zu(e), null != h ? h : "", !1);
        dp(_.Lg($g), "5", (0, E.K)(y(d[c.getDomId()], 20)));
        c.dispatchEvent(ep, 801, {
            Fd: 0 === a.kind ? a.Aa : "",
            isBackfill: k
        });
        a = this.H();
        b && a && a.setAttribute("data-google-container-id", b);
        c.dispatchEvent(gp, 825, {
            size: f,
            isEmpty: !1
        });
        return a
    };
    gK.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.ya;
        b = b.N.R;
        c.dispatchEvent(PF, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new tJ(c, "publisher_ads"));
        dp(_.Lg($g), "6", (0, E.K)(y(b[c.getDomId()], 20)))
    };
    var hK = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.Aa : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Jg(d, 2) : (c && Jg(d, 3), a = _.H(Fx) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Jg(d, 1);
        return a
    };
    gK.prototype.I = function() {
        _.Qx.prototype.I.call(this);
        var a;
        null == (a = this.m.Db) || a.removeAttribute("data-google-query-id")
    };
    gK.prototype.o = function(a, b) {
        var c = this,
            d = iK(this, function() {
                return void c.loaded((0, E.K)(d.j))
            }, a, b);
        _.hn(this, function() {
            100 != d.status && (2 == d.O && (bF(d.D), d.O = 0), window.clearTimeout(d.F), d.F = -1, d.o = 3, d.m && (d.m.La(), d.m = null), _.Pd(window, "resize", d.va), _.Pd(window, "scroll", d.va), d.l && d.j && d.l == _.bv(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var iK = function(a, b, c, d) {
        var e = a.m,
            f = e.ce,
            g = e.isBackfill,
            h = e.Pe,
            k = e.Zb,
            l = e.uc,
            m = e.Bb,
            n = e.Xc,
            p = Array.isArray(a.j) ? new _.Jh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new jF({
            rd: e.Ed,
            Rb: a.Rb,
            Sb: a.Sb,
            content: hK(a, d),
            size: p,
            Be: !!h,
            Td: b,
            de: null != f ? f : void 0,
            permissions: {
                rc: mk(c, 1) ? !!G(c, 1) : !g,
                tc: mk(c, 2) ? !!G(c, 2) : !1
            },
            Tb: !!qj().fifWin,
            vf: AH ? AH : AH = bk(),
            ue: fk(),
            hostpageLibraryTokens: _.Lg(DJ).hostpageLibraryTokens,
            Ga: function(r, v) {
                return void bh(a.context, r, v)
            },
            uniqueId: (0, E.K)(k),
            be: _.H(cx) ? Oh() : HE(),
            uc: null != l ? l : void 0,
            zc: null != d ? d : void 0,
            Bb: null != m ? m : void 0,
            Xc: null != n ? n : void 0
        })
    };
    var Yo = function() {
        gK.apply(this, arguments)
    };
    _.P(Yo, gK);
    Yo.prototype.H = function() {
        var a = this.m,
            b = a.N,
            c = b.V;
        a = b.R[a.slotId.getDomId()];
        b = new gk;
        c = nk([b, c.Qa(), null == a ? void 0 : a.Qa()]);
        c = gK.prototype.o.call(this, c);
        return (0, E.K)(c.j)
    };
    Yo.prototype.l = function() {
        return !1
    };
    var jK = function() {
        gK.apply(this, arguments)
    };
    _.P(jK, gK);
    var kK = function(a, b) {
            var c = _.Ad(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Rb;
            c.name = a.Rb;
            c.title = a.Sb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        lK = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.Xg(a.context, 774, function() {
                a.loaded(b);
                _.Pd(b, "load", c)
            });
            _.cb(b, "load", c);
            _.hn(a, function() {
                return _.Pd(b, "load", c)
            });
            a.m.Ed.appendChild(b)
        };
    var Zo = function() {
        jK.apply(this, arguments)
    };
    _.P(Zo, jK);
    Zo.prototype.H = function() {
        var a = this,
            b = this.m,
            c = b.ce;
        b = b.uc;
        var d = kK(this);
        if (null == c ? 0 : c.length)
            if (_.ds) {
                c = _.A(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Ld(c));
        b && (d.allow = b);
        lK(this, d);
        _.eh(this.context, 653, function() {
            var f;
            if (f = fg(Wa(fg(a.C.Aa)).toString())) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? Xo(2) : (Xo(3), f = _.H(Fx) ? f : fg("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
            } else Xo(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ea() && g.open("text/html", "replace");
            Xa(g, f);
            var l, m, n;
            if (Jr(null != (n = null == (l = d.contentWindow) ? void 0 : null == (m = l.location) ? void 0 : m.href) ? n : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    Zo.prototype.l = function() {
        return !0
    };
    var ap = function() {
        jK.apply(this, arguments)
    };
    _.P(ap, jK);
    ap.prototype.H = function() {
        var a = kK(this, !this.m.Ff);
        Bi(a, this.C.yd);
        lK(this, a);
        return a
    };
    ap.prototype.l = function() {
        return !1
    };
    var $o = function() {
        jK.apply(this, arguments)
    };
    _.P($o, jK);
    $o.prototype.H = function() {
        var a = this.C.url,
            b = this.m,
            c = b.N,
            d = c.V;
        b = c.R[b.slotId.getDomId()];
        d = nk([d.Qa(), null == b ? void 0 : b.Qa()]);
        var e = kK(this);
        Bi(e, a);
        jK.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            mK(a)
        };
        e.addEventListener("load", f);
        Cv(e, function() {
            return void mK(a)
        });
        return e
    };
    var mK = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Ad("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    $o.prototype.l = function() {
        return !1
    };
    var eq = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D, B, I, S, M, U, Y, la, ca, Sa) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.N = d;
        this.ya = e;
        this.G = f;
        this.l = V(this);
        this.B = V(this);
        this.o = wz(this);
        this.J = W(this, g);
        this.ra = W(this, h);
        yz(this, k);
        this.da = W(this, l);
        this.F = W(this, m);
        this.Y = W(this, n);
        yz(this, I);
        this.M = W(this, p);
        this.P = X(this, r);
        this.Da = X(this, v);
        this.T = W(this, w);
        this.pa = X(this, D);
        this.Ma = X(this, B);
        yz(this, S);
        this.ma = W(this, M);
        yz(this, U);
        Sa && yz(this, Sa);
        this.Ka = X(this, Y);
        this.ia = X(this, la);
        this.la = X(this, ca)
    };
    _.P(eq, Z);
    eq.prototype.j = function() {
        var a = this,
            b = this.J.value;
        if (0 === b.kind && null == b.Aa) throw new Cy("invalid html");
        var c;
        b = bp(this.context, b, {
            X: document,
            slotId: this.slotId,
            L: this.L,
            N: this.N,
            ya: this.ya,
            size: this.Y.value,
            Db: this.da.value,
            Ed: this.F.value,
            Ce: this.M.value,
            He: this.P.value,
            ce: this.Da.value,
            isBackfill: this.T.value,
            Pe: this.pa.value,
            Zb: this.Ma.value,
            uc: this.ma.value,
            Bb: this.Ka.value,
            Ff: null == (c = this.ia.value) ? void 0 : yp(c, 14),
            Xc: this.la.value
        }, {
            Hf: this.ra.value
        });
        _.an(this, b);
        var d = b.render();
        cG(this, this.id, this.G, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(Vo, 824, e)
        });
        this.o.notify();
        this.l.j(d);
        this.B.j(b.l())
    };
    var kq = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.ub = Number(b);
        this.o = W(this, d);
        this.B = W(this, e);
        this.F = nK(this)
    };
    _.P(kq, Z);
    var nK = function(a) {
        return _.eb(function(b) {
            return b.return(new x.Promise(function(c) {
                try {
                    cG(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && pp(Wd(LD, d.data.payload), 1) === a.ub && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    kq.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.eb(function(h) {
            if (1 == h.j) return b = cp(a.l), c = a.o.value, d = a.B.value, fb(h, a.F, 2);
            e = h.m;
            var k = a.l,
                l = cp(k);
            var m = c.getBoundingClientRect();
            var n = Ed(k) ? Fh(c, k) : {
                x: 0,
                y: 0
            };
            k = n.x;
            n = n.y;
            m = new _.Gv(n, k + m.right, n + m.bottom, k);
            k = new ND;
            k = _.z(k, 1, m.top);
            k = _.z(k, 3, m.bottom);
            k = _.z(k, 2, m.left);
            m = _.z(k, 4, m.right);
            k = new MD;
            k = _.z(k, 1, a.ub);
            k = _.z(k, 2, !d);
            m = _.Rg(k, 3, m);
            m = _.z(m, 4, b);
            f = _.z(m, 5, l);
            g = {
                type: "asmres",
                payload: ae(f)
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var Yp = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Z.call(this, a, 699);
        this.X = b;
        this.slotId = c;
        this.l = d;
        this.Hb = e;
        this.A = wz(this);
        this.J = X(this, f);
        this.P = W(this, g);
        this.B = W(this, h);
        this.M = W(this, k);
        this.o = X(this, l);
        this.T = W(this, m);
        this.F = W(this, n);
        p && yz(this, p)
    };
    _.P(Yp, Z);
    Yp.prototype.j = function() {
        var a = this.P.value,
            b = this.B.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.J.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.T.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.X,
                        k = this.slotId,
                        l = this.l,
                        m = this.Hb;
                    var n = c.width,
                        p = c.height,
                        r = 0;
                    var v = 0;
                    var w = vh(l);
                    w = _.A(w);
                    for (var D = w.next(); !D.done; D = w.next()) {
                        var B = D.value;
                        Array.isArray(B) && (D = (0, E.sa)(B[0]), B = (0, E.sa)(B[1]), r < D && (r = D), v < B && (v = B))
                    }
                    v = [r, v];
                    r = v[0] < n;
                    p = v[1] < p;
                    if (r || p) {
                        v = n + "px";
                        w = {
                            "max-height": "none",
                            "max-width": v,
                            padding: "0px",
                            width: v
                        };
                        p && (w.height = "auto");
                        ci(b, a, w);
                        b = {};
                        r && (r = ai(e.width), n > r && (b.width = v, b["max-width"] = v));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (I in b)
                                if (Object.prototype.hasOwnProperty.call(b, I)) {
                                    var I = !1;
                                    break c
                                }
                            I = !0
                        }
                        I ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.bi(a, b), b = !0)
                    } else b = !1;
                    b: switch (v = c.width, I = h.defaultView || h.parentWindow || _.t, d) {
                        case 2:
                            a = di(a, I, v, e, m);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (m = Kh(e)) {
                                    D = m.width;
                                    m = Qh(k, I.document);
                                    n = (0, E.K)(Sh(m, I));
                                    p = n.position;
                                    B = ai(n.width) || 0;
                                    r = Sh(e, I);
                                    w = "rtl" === r.direction ? "Right" : "Left";
                                    m = w.toLowerCase();
                                    I = "absolute" === p ? 0 : ai(r["padding" + w]);
                                    r = ai(r["border" + w + "Width"]);
                                    v = Math.max(Math.round((D - Math.max(B, v)) / 2), 0);
                                    D = {};
                                    B = 0;
                                    var S = uv(n);
                                    S && (B = S[4] * ("Right" === w ? -1 : 1), w = S[3] || 1, 1 !== (S[0] || 1) || 1 !== w) && (S[0] = 1, S[3] = 1, D.transform = "matrix(" + S.join(",") + ")");
                                    w = 0;
                                    switch (p) {
                                        case "fixed":
                                            var M, U = null != (M = Number(Th(n.getPropertyValue(m)))) ? M : 0,
                                                Y;
                                            M = null != (Y = e.getBoundingClientRect().left) ? Y : 0;
                                            w = U - M;
                                            break;
                                        case "relative":
                                            w = null != (U = Number(Th(n.getPropertyValue(m)))) ? U : 0;
                                            break;
                                        case "absolute":
                                            D[m] = "0"
                                    }
                                    D["margin-" + m] = v - I - r - w - B + "px";
                                    _.bi(a, D);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (fi(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.X, h = this.slotId, k = this.l, M = this.Hb, l = c.width, Y = c.height, U = ai(e.height) || 0, Y >= U || "none" === e.display || "hidden" === e.visibility || !M || -12245933 === M.width || a.getBoundingClientRect().bottom <= M.height ? g = !1 : (M = {
                        height: Y + "px"
                    }, ci(b, a, M), _.bi(a, M), fi(d, g, h, k, 3, l, Y, "gpt_slotred", f), g = !0)
            }!g && _.H(mw) && fi(this.context, this.X, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var bq = function(a, b) {
        Z.call(this, a, 1020);
        this.G = b;
        this.A = V(this)
    };
    _.P(bq, Z);
    bq.prototype.j = function() {
        var a = this.G;
        a = _.H(vx) && void 0 !== a.anonymouslyFramed && (_.H(wx) || a.crossOriginIsolated);
        this.A.j(a)
    };
    var Gp = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.B = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e)
    };
    _.P(Gp, Z);
    Gp.prototype.j = function() {
        var a = this.o.value;
        if (null == a) kz(this.A);
        else {
            var b = Math.round(.3 * this.B);
            2 !== this.format && 3 !== this.format || !this.l.yb() || !yp(this.l.value, 12, !1) || 0 >= b || a <= b ? this.A.j(a) : this.A.j(b)
        }
    };
    var Qp = function(a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.A = wz(this);
        this.o = W(this, c)
    };
    _.P(Qp, Z);
    Qp.prototype.j = function() {
        this.o.value || this.l();
        this.A.notify()
    };
    var Sp = function(a, b, c, d, e, f, g, h, k, l, m, n) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.V = c;
        this.o = d;
        this.X = f;
        this.L = g;
        this.A = V(this);
        this.F = 2 === e || 3 === e;
        this.l = W(this, h);
        this.M = W(this, k);
        this.J = X(this, l);
        this.B = X(this, m);
        n && yz(this, n)
    };
    _.P(Sp, Z);
    Sp.prototype.j = function() {
        var a = Ch(this.V, this.o),
            b = Ph(this.slotId, this.X) || Sl(this.l.value, Yh(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.F ? UF(this.L, this.slotId, function() {
            return void _.av(b)
        }) : _.hn(this, function() {
            return void _.av(b)
        });
        a = oK(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.j(b)
    };
    var oK = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.J.value) ? void 0 : c.height;
        if (b && !a.B.value && d) {
            var e;
            c = (null != (e = G(a.o, 23)) ? e : G(a.V, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Ap = function(a, b) {
        Z.call(this, a, 859);
        this.G = b;
        this.A = V(this)
    };
    _.P(Ap, Z);
    Ap.prototype.j = function() {
        this.A.j(!Ed(this.G.top))
    };
    var Wp = function(a, b, c) {
        Z.call(this, a, 698);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(Wp, Z);
    Wp.prototype.j = function() {
        jz(this.A, Sh(this.l.value, this.G))
    };
    var aq = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.X = c;
        this.A = V(this)
    };
    _.P(aq, Z);
    aq.prototype.j = function() {
        var a = [],
            b = this.X;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (F = c.features(), _.u(F, "includes")).call(F, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.H(jw) || a.push("autoplay");
        a.length ? this.A.j(a.join(";")) : this.A.j("")
    };
    var fq = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.G = b;
        this.slotId = c;
        yz(this, d);
        this.l = W(this, e)
    };
    _.P(fq, Z);
    fq.prototype.j = function() {
        var a = this;
        IF(this.slotId, Vo, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new uu;
                    var h = _.z(g, 1, d ? "1" : "0");
                    var k = Mm(_.z(h, 2, 2147483647), 3, "/");
                    var l = _.z(k, 4, a.G.location.hostname);
                    var m = new Qz(a.G);
                    Tz(m, "__gpi_opt_out", l, f);
                    if (d || e) Uz(m, "__gads", f), Uz(m, "__gpi", f)
                }
            } catch (n) {}
        })
    };
    var Pp = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.N = c;
        this.L = d;
        this.l = V(this);
        this.o = W(this, e);
        this.B = W(this, f)
    };
    _.P(Pp, Z);
    Pp.prototype.j = function() {
        this.B.value ? (hp(this.slotId, this.L, this.N, this.o.value), this.l.j(!1)) : this.l.j(!0)
    };
    var mq = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.G = b;
        this.F = X(this, c);
        this.o = W(this, d);
        this.l = W(this, e);
        this.B = W(this, f)
    };
    _.P(mq, Z);
    mq.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = y(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = y(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.B.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                m = Dv(e.id + "_top", d),
                n = Dv(e.id + "_bottom", b);
            _.bi(n, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(m);
            f.appendChild(n);
            _.bi(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.bi(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.bi(f, {
                position: "relative",
                display: (null == (p = this.G.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            cG(this, 722, this.G, "orientationchange", function() {
                var r;
                (null == (r = a.G.screen.orientation) ? 0 : r.angle) ? _.bi(f, {
                    display: "none"
                }): _.bi(f, {
                    display: "block"
                })
            });
            _.hn(this, function() {
                _.av(m);
                _.av(n);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var jq = function(a, b, c, d, e, f) {
        f = void 0 === f ? jp : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.X = d;
        this.ya = e;
        this.J = f;
        this.F = !1;
        this.l = null;
        this.B = this.o = -1;
        this.P = _.zr(function() {
            g.ya.dispatchEvent("impressionViewable", 715, new rJ(g.slotId, "publisher_ads"))
        });
        this.T = Ar(function() {
            g.ya.dispatchEvent("slotVisibilityChanged", 716, new sJ(g.slotId, "publisher_ads", g.B))
        }, 200);
        this.M = W(this, c);
        var h = new rz;
        JF(this.slotId, PF).then(function() {
            return void h.notify()
        });
        yz(this, h)
    };
    _.P(jq, Z);
    jq.prototype.j = function() {
        var a = this,
            b = this.J(_.Xg(this.context, this.id, function(c) {
                c = _.A(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.u(Number, "isFinite").call(Number, a.o) && pK(a)
            }));
        b.observe(this.M.value);
        cG(this, this.id, this.X, "visibilitychange", function() {
            pK(a)
        });
        _.hn(this, function() {
            b.disconnect()
        })
    };
    var pK = function(a) {
            var b = !QD(a.X);
            qK(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.B ? 0 : -1 !== a.B || 0 !== b) a.B = b, a.T()
        },
        qK = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                QD(a.X) || (a.P(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var rK = Q(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]),
        dq = function(a, b, c) {
            Z.call(this, a, 1007);
            this.l = X(this, b);
            c && yz(this, c)
        };
    _.P(dq, Z);
    dq.prototype.j = function() {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = bb(rK, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof Zf) throw new Yr("TrustedResourceUrl", 2);
            a = _.Oa(a);
            void 0 !== a && (b.src = a);
            for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var c = 0; c < a.length; c++) b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var Kp = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = V(this);
        this.B = X(this, c)
    };
    _.P(Kp, Z);
    Kp.prototype.j = function() {
        var a = new Lp;
        if (this.B.yb()) {
            var b = _.z(a, 2, this.B.value);
            _.z(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new Lp;
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, mk(c, 1) && _.z(b, 1, y(c, 1)), mk(c, 2) && _.z(b, 2, y(c, 2)), mk(c, 3) && _.z(b, 3, Ce(c, 3));
            a = b
        }
        b = this.l;
        a = mk(a, 2) ? mk(a, 3) && 0 !== (0, _.Ll)() ? (0, E.sa)(y(a, 2)) * (0, E.sa)(Ce(a, 3)) : y(a, 2) : null;
        jz(b, a)
    };
    var Xp = function(a, b, c, d, e, f, g) {
        f = void 0 === f ? lp : f;
        Z.call(this, a, 666);
        this.o = f;
        this.A = wz(this);
        yz(this, b);
        g && yz(this, g);
        this.l = W(this, c);
        this.F = X(this, d);
        this.B = X(this, e)
    };
    _.P(Xp, Z);
    Xp.prototype.j = function() {
        var a = this.B.value,
            b = this.F.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !Uh(c) ? this.A.notify() : sK(this, a, b, c)
    };
    var sK = function(a, b, c, d) {
        var e = a.o(b, _.Xg(a.context, 291, function(f, g) {
            f = _.A(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.A.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.hn(a, function() {
            e.disconnect()
        })
    };
    var Vp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Hb = c;
        this.L = d;
        this.A = wz(this);
        this.o = W(this, e);
        this.l = X(this, f);
        g && yz(this, g)
    };
    _.P(Vp, Z);
    Vp.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Ll)() || 0 < c) {
            var d = document;
            b = PD(d);
            if (QD(d) && b && (0 < $F(this.L, this.slotId) || !tK(this)) && b) {
                var e = cG(this, 324, d, b, function() {
                    QD(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var tK = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = gm(null == d ? void 0 : d.document, d).y,
                f = e + a.Hb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var Rp = function(a, b, c) {
        Z.call(this, a, 1055);
        this.A = wz(this);
        yz(this, c);
        this.l = W(this, b)
    };
    _.P(Rp, Z);
    Rp.prototype.j = function() {
        this.l.value && this.A.notify()
    };
    var Jp = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.V = b;
        this.R = c;
        this.G = d;
        this.A = V(this);
        this.o = X(this, e);
        this.l = W(this, f)
    };
    _.P(Jp, Z);
    Jp.prototype.j = function() {
        if (Zj(kw) || !_.H(Ik) && wh(this.R, xh, 16) && Yl("google_range_debug", this.G)) this.A.j(!0);
        else {
            var a, b = !(null == (a = this.o.value) || !y(a, 1)) && (G(this.R, 12) || G(this.V, 13)) || this.l.value;
            this.A.j(!!b)
        }
    };
    var Zp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.V = b;
        this.B = c;
        this.A = V(this);
        this.l = W(this, d);
        this.F = W(this, e);
        this.o = X(this, f);
        this.J = X(this, g)
    };
    _.P(Zp, Z);
    Zp.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.Aa)
                    if (this.F.value) uK(this);
                    else {
                        if (a = this.o.value) a = qv(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? this.A.j(oF) : kz(this.A)
                    }
                else kz(this.A);
                break;
            case 1:
                uK(this);
                break;
            case 2:
                kz(this.A);
                break;
            default:
                Pa(a)
        }
    };
    var uK = function(a) {
        var b = a.J.value,
            c = new gk;
        b = _.z(c, 3, b);
        G(nk([b, a.V.Qa(), a.B.Qa()]), 3) ? a.A.j(oF) : kz(a.A)
    };
    var Mp = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.da = c;
        this.M = d;
        this.window = e;
        this.wa = V(this);
        this.o = V(this);
        this.jc = V(this);
        this.l = Zj(kw).split(",");
        this.F = df(lw);
        this.Ia = wh(c, xh, 16) ? Ke(c, xh, 16) : null;
        this.J = Xl("google_range_debug", this.window);
        this.P = X(this, f);
        this.ia = X(this, g);
        this.T = X(this, h);
        this.B = W(this, k);
        this.Y = W(this, l)
    };
    _.P(Mp, Z);
    Mp.prototype.j = function() {
        if (0 !== this.B.value.kind || this.B.value.Aa.length) {
            var a;
            if (a = !!(this.l.length || this.Ia && this.J)) {
                b: if (this.l.length) {
                    if (this.F.length && (a = this.adUnitPath.split("/"), !_.u(this.F, "includes").call(this.F, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? vK(this) : null;
                if (b && a) {
                    b = this.Y.value;
                    var c, d, e = null != (d = null == (c = Kh(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.M : d && 0 < d ? d : c ? Math.min(e, this.M) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        wK(this, c, d, {
                            kind: 0,
                            Aa: xK(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (!_.H(Ik) && this.Ia && this.J) {
                    a = nm(this.Ia, this.window);
                    b = om(this.Ia, this.window);
                    e = pm(this.Ia);
                    c = qm(this.Ia);
                    switch (this.J) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    wK(this, d, f, {
                        kind: 0,
                        Aa: xK(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || yK(this)
        } else yK(this)
    };
    var vK = function(a) {
            a = vh(a.da)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Jh(a[0], a[1]) : null
        },
        xK = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        wK = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.P.value : e;
            a.o.j(new _.Jh(b, c));
            a.wa.j(d);
            jz(a.jc, e);
            f && _.Nv(f, "opacity", .5)
        },
        yK = function(a) {
            var b = a.ia.value;
            if (null == b) throw new Kk("Missing 'width'.");
            var c = a.T.value;
            if (null == c) throw new Kk("Missing 'height'.");
            wK(a, b, c, a.B.value)
        };
    var Hp = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.Db = c;
        this.B = d;
        this.o = e;
        this.X = f;
        this.l = g;
        this.L = h;
        this.A = V(this)
    };
    _.P(Hp, Z);
    Hp.prototype.j = function() {
        var a = this,
            b, c;
        return _.eb(function(d) {
            if (1 == d.j) {
                if (a.Db) {
                    zK(a, a.Db);
                    a.A.j(a.Db);
                    d.j = 0;
                    return
                }
                if (Bh(a.l)) {
                    a.A.j(AK(a));
                    d.j = 0;
                    return
                }
                return fb(d, JF(a.slotId, KF), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.D) return d.return();
            zK(a, c);
            a.A.j(c);
            d.j = 0
        })
    };
    var AK = function(a) {
            var b = _.Ad("INS");
            b.id = a.B;
            _.bi(b, {
                display: "none"
            });
            a.X.documentElement.appendChild(b);
            var c = function() {
                return void _.av(b)
            };
            2 === a.l || 3 === a.l ? UF(a.L, a.slotId, c) : _.hn(a, c);
            return b
        },
        zK = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.A(_.u(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.o && _.av(d);
                b.style.display = ""
            }
        };
    var Up = function(a, b) {
        Z.call(this, a, 676);
        this.A = V(this);
        this.l = W(this, b)
    };
    _.P(Up, Z);
    Up.prototype.j = function() {
        var a = Hh(this.l.value);
        this.A.j(a)
    };
    var $p = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.G = b;
        this.A = wz(this);
        this.l = X(this, c);
        this.o = W(this, d);
        e && yz(this, e)
    };
    _.P($p, Z);
    $p.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = Fv(this.G);
            DF(new CF(b, a)) || this.U(new Kk("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var Np = function(a, b, c) {
        Z.call(this, a, 881);
        this.Va = b;
        this.A = V(this);
        this.l = X(this, c)
    };
    _.P(Np, Z);
    Np.prototype.j = function() {
        if (_.H(ox) || !this.l.value) kz(this.A);
        else {
            for (var a = this.l.value, b = [], c = _.A((F = RH(this.Va), _.u(F, "values")).call(F)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    bh(this.context, 1023, e)
                }
            }
            0 === b.length ? this.A.j(sp(a)) : this.A.j(sp(a, b))
        }
    };
    Np.prototype.m = function() {
        kz(this.A)
    };
    var tp = navigator,
        up = /(\$\{GDPR})/gi,
        vp = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        wp = /(\$\{ADDTL_CONSENT})/gi;
    var BK = navigator,
        Op = function(a, b, c, d, e, f, g, h) {
            Z.call(this, a, 882);
            this.L = b;
            this.Z = c;
            this.da = d;
            this.wa = V(this);
            this.B = V(this);
            this.F = V(this);
            this.l = _.H(px);
            this.o = X(this, e);
            this.P = X(this, f);
            this.T = W(this, g);
            this.Y = W(this, h)
        };
    _.P(Op, Z);
    var CK = function(a) {
        a.F.j(a.da);
        a.wa.j(a.T.value);
        a.B.j(a.Y.value)
    };
    Op.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, r, v;
        return _.eb(function(w) {
            if (1 == w.j) {
                b = "runAdAuction" in navigator && Rf("run-ad-auction", document);
                if (_.H(ox) || a.l && !b || !a.o.value || !a.P.value) return CK(a), w.return();
                c = a.o.value.getWidth();
                d = a.o.value.getHeight();
                if (!c || !d) return CK(a), w.return();
                e = qo(a.o.value, qp, 5);
                a.J = e.getEscapedQemQueryId();
                a.M = xn(e, 6);
                f = yp(e, 9);
                if (g = yp(e, 10))
                    if (CK(a), yp(e, 17)) return zp(0, 0, e), w.return();
                gi("pre_run_ad_auction_ping", function(D) {
                    mi(D, a.context);
                    var B;
                    L(D, "winner_qid", null != (B = a.J) ? B : "");
                    var I;
                    L(D, "xfpQid", null != (I = a.M) ? I : "");
                    L(D, "publisher_tag", "gpt")
                }, 1);
                h = performance.now();
                k = ee(a.o.value, 8) || 1E3;
                return fb(w, DK(a, a.P.value, e, k, h), 2)
            }
            if (3 != w.j) return l = w.m, m = Math.round(performance.now() - h), n = 3 === l, p = 2 === l, r = 1 === l, v = a.l ? "string" === typeof l : l && !p && !r, gi("run_ad_auction_stats", function(D) {
                mi(D, a.context);
                L(D, "duration_ms", m);
                L(D, "applied_timeout_ms", k);
                L(D, "timed_out", p);
                a.l && L(D, "error", n);
                L(D, "auction_skipped", r);
                L(D, "auction_winner", v ? 1 : 0);
                L(D, "thread_release_only", yp(e, 15) ? 1 : 0);
                var B;
                L(D, "winner_qid", null != (B = a.J) ? B : "");
                var I;
                L(D, "xfpQid", null != (I = a.M) ? I : "");
                L(D, "publisher_tag", "gpt")
            }, 1), v ? g ? w.return() : f ? (CK(a), w.return()) : fb(w, xp(l, {
                gdprApplies: mk(a.Z, 3) ? G(a.Z, 3) ? "1" : "0" : null,
                Ke: y(a.Z, 2),
                oe: y(a.Z, 4)
            }), 3) : (zp(m, p ? k : 0, e), g || CK(a), w.return());
            a.wa.j({
                kind: 2,
                yd: l
            });
            a.B.j(new _.Jh(c, d));
            a.F.j(!1);
            w.j = 0
        })
    };
    Op.prototype.m = function() {
        CK(this)
    };
    var DK = function(a, b, c, d, e) {
        var f, g, h, k, l, m, n, p, r;
        return _.eb(function(v) {
            if (1 == v.j) {
                f = ee(c, 14) || -1;
                if (0 < f && a.L.I >= f) return v.return(1);
                g = ee(c, 13) || -1;
                if (0 < g && a.L.C >= g) return v.return(1);
                ++a.L.I;
                ++a.L.C;
                h = function(w) {
                    gi("run_ad_auction_complete", function(D) {
                        mi(D, a.context);
                        L(D, "duration_ms", Math.round(performance.now() - e));
                        L(D, "applied_timeout_ms", d);
                        L(D, "auction_has_winner", !!w);
                        a.J && L(D, "winner_qid", a.J);
                        a.M && L(D, "xfpQid", a.M)
                    }, 1)
                };
                a.l && (b.signal = AbortSignal.timeout(d));
                p = yp(c, 15) ? new x.Promise(function(w) {
                    setTimeout(function() {
                        w(null)
                    }, 0)
                }) : a.l ? null == (l = (k = BK).runAdAuction) ? void 0 : l.call(k, b).then(function(w) {
                    h(w);
                    return w
                }).catch(function(w) {
                    return w instanceof DOMException && "TimeoutError" === w.name ? 2 : 3
                }) : null == (n = (m = BK).runAdAuction) ? void 0 : n.call(m, b).then(function(w) {
                    h(w);
                    return w
                });
                return fb(v, a.l ? p : x.Promise.race([p, Ev(d)]), 2)
            }
            r = v.m;
            --a.L.I;
            return v.return(r)
        })
    };
    var EK = function(a) {
            this.context = a;
            this.j = new x.Map
        },
        FK = function(a, b) {
            if (b) {
                var c;
                null == (c = a.j.get(b)) || c.La();
                a.j.delete(b)
            }
        },
        GK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w) {
            var D = document;
            e || f || FK(a, d);
            var B = oq(a.context, b, c, d, e, f, g, h, k, l, D, n, p, r, v, w, function() {
                if (d) {
                    var I;
                    null == (I = a.j.get(d)) || I.La();
                    a.j.set(d, B)
                }
            });
            f || a.j.set(d, B);
            _.hn(d, function() {
                return void FK(a, d)
            });
            m.top !== m && m.addEventListener("pagehide", function(I) {
                I.persisted || FK(a, d)
            });
            zf(B)
        };
    var HK = function(a, b) {
        Z.call(this, a, 802);
        this.G = b;
        this.l = V(this)
    };
    _.P(HK, Z);
    HK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.eb(function(f) {
            if (1 == f.j) {
                if (!_.H(Ew)) return a.l.j(""), f.return();
                b = wg(a.G);
                if (!b) {
                    a.l.j("");
                    f.j = 0;
                    return
                }
                f.D = 3;
                return fb(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.we(Hw) && (bh(a.context, a.id, new Kk("ML:" + d.length)), d = "0"), a.l.j(d), ib(f, 0);
            e = jb(f);
            bh(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    HK.prototype.m = function() {
        this.l.j("")
    };
    var IK = function(a, b, c) {
        Z.call(this, a, 944);
        this.G = b;
        this.l = new Qz(this.G);
        this.o = W(this, c)
    };
    _.P(IK, Z);
    IK.prototype.j = function() {
        var a = this.o.value;
        if (Sz(this.l, a)) {
            var b = Rz(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new uu;
                b = _.z(c, 1, b);
                b = Mm(_.z(b, 2, 2147483647), 3, "/");
                b = _.z(b, 4, this.G.location.hostname);
                Tz(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var JK = function(a, b, c, d) {
        d = void 0 === d ? rq : d;
        Z.call(this, a, 883);
        this.B = b;
        this.F = d;
        this.l = wz(this);
        this.o = W(this, c)
    };
    _.P(JK, Z);
    JK.prototype.j = function() {
        !G(this.o.value, 5) || _.H(Mw) ? this.l.notify() : (_.H(Lw) || AD(this.B), this.F() ? sz(this.l, new x.Promise(function(a) {
            return void BD(a)
        })) : (BD(null), this.l.notify()))
    };
    var KK = function(a, b, c, d, e) {
        Z.call(this, a, 884);
        this.za = b;
        this.l = c;
        this.o = V(this);
        this.F = X(this, d);
        this.B = W(this, e)
    };
    _.P(KK, Z);
    KK.prototype.j = function() {
        this.l.m = this.F.value;
        zH(this.l, Rz(this.za, "__gads", this.B.value));
        tk(20);
        tk(2);
        this.o.j(ze())
    };
    var LK = function(a, b, c) {
        Z.call(this, a, 873);
        this.G = b;
        this.l = W(this, c)
    };
    _.P(LK, Z);
    LK.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.G;
        !qj()._pubconsole_disable_ && (b = pe("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || vj(a, c))
    };
    var MK = function(a, b, c, d) {
        Z.call(this, a, 1058);
        this.Z = b;
        this.l = X(this, c);
        yz(this, d)
    };
    _.P(MK, Z);
    MK.prototype.j = function() {
        if (this.l.value && G(this.Z, 5)) {
            var a = this.l.value;
            a({
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid
            })
        }
    };
    var NK = function(a, b, c) {
        Z.call(this, a, 798);
        this.A = V(this);
        this.l = X(this, b);
        this.o = W(this, c)
    };
    _.P(NK, Z);
    NK.prototype.j = function() {
        var a = this,
            b = new x.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.ga.Ea,
                e = c.Yc.Zc;
            c = _.A(_.u(c.ba.W, "entries").call(c.ba.W));
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = _.A(f.value);
                f = g.next().value;
                g = g.next().value;
                b.set(g, d ? OK(this, g, e[f]) : function() {
                    return a.o.value
                })
            }
        }
        this.A.j(b)
    };
    var OK = function(a, b, c) {
        return Rh(function() {
            var d = _.u(Object, "assign").call(Object, {}, a.l.value);
            d.ba.ld = !0;
            d.ba.W = [b];
            d.Yc.Zc = c ? [c] : [];
            return Wl(CI(new zI(d))).url
        })
    };
    var PK = function(a, b, c, d, e, f) {
        f = void 0 === f ? sq : f;
        Z.call(this, a, 886);
        this.W = b;
        this.L = c;
        this.l = d;
        this.X = e;
        this.o = f;
        this.A = wz(this)
    };
    _.P(PK, Z);
    PK.prototype.j = function() {
        var a = this,
            b, c;
        return _.eb(function(d) {
            if (1 == d.j) return 3 !== OD(a.X) ? (d.j = 2, d = void 0) : d = fb(d, new x.Promise(function(e) {
                return void SD(e, a.X)
            }), 2), d;
            if (4 != d.j) return b = a.l ? kp(a.l) : null, null == b || (c = a.W.some(function(e) {
                return !Uh(Qh(e))
            })) ? (a.A.notify(), d.return()) : fb(d, QK(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var QK = function(a, b) {
        return new x.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.hn(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.A(a.W), g = f.next(); !g.done; e = {
                    Mb: e.Mb
                }, g = f.next()) {
                g = g.value;
                e.Mb = Qh(g);
                if (!e.Mb) break;
                d.observe(e.Mb);
                VF(a.L, g, function(h) {
                    return function() {
                        return void d.unobserve(h.Mb)
                    }
                }(e))
            }
        })
    };
    var RK = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        Z.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.B = d;
        this.pb = e;
        this.wb = f;
        this.vb = g;
        this.Z = h;
        this.X = k;
        this.A = wz(this);
        this.o = W(this, l);
        this.M = W(this, m);
        this.P = W(this, n);
        yz(this, p);
        this.J = W(this, r)
    };
    _.P(RK, Z);
    RK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p;
        return _.eb(function(r) {
            if (1 == r.j) {
                b = a.M.value;
                if (!b) return a.A.notify(), r.return();
                c = _.H(tx) ? lb(a.P.value, {
                    uuid: a.vb
                }) : Ci(a.vb);
                d = document.createElement("script");
                e = {
                    source: b,
                    credentials: a.J.value ? "include" : "omit",
                    resources: [c.toString()]
                };
                d.setAttribute("type", "webbundle");
                Ta(d, new Ra(JSON.stringify(e).replace(/</g, "\\x3c"), Xn));
                a.X.head.appendChild(d);
                d.addEventListener("error", function(v) {
                    v = new Dy(v.message || "Failed to load web bundle.");
                    a.l(v)
                });
                a.A.notify();
                f = _.H(tx) ? a.T : a.Y;
                return fb(r, f.bind(a)(c), 2)
            }
            g = r.m;
            h = g.Bd;
            k = g.Sd;
            delete qj()[a.wb.replace("googletag.", "")];
            if (h.length !== k.length) return a.l(new Cy("Received " + h.length + " ad URLs but " + k.length + " metadatas")), r.return();
            e.resources = h.filter(function(v) {
                return v
            });
            e.resources.length ? (l = _.Ad("SCRIPT"), l.setAttribute("type", "webbundle"), Ta(l, new Ra(JSON.stringify(e).replace(/</g, "\\x3c"), Xn)), a.X.head.removeChild(d), a.X.head.appendChild(l)) : a.X.head.removeChild(d);
            for (m = 0; m < h.length; m++) n = h[m], p = k[m], a.F(m, p, {
                kind: 1,
                url: n
            }, a.o.value, a.Z);
            a.B(h.length - 1, a.o.value, a.Z);
            r.j = 0
        })
    };
    var SK = function(a) {
        var b = qj(),
            c = a.wb.replace("googletag.", "");
        return new x.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        Bd: f,
                        Sd: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    RK.prototype.T = function(a) {
        var b, c, d;
        return _.eb(function(e) {
            if (1 == e.j) return fb(e, fetch(a.toString()), 2);
            if (3 != e.j) return b = e.m, fb(e, b.text(), 3);
            c = e.m;
            d = Wd(Gu, c);
            return e.return({
                Bd: kl(d, 1),
                Sd: kl(d, 2)
            })
        })
    };
    RK.prototype.Y = function(a) {
        var b = this,
            c;
        return _.eb(function(d) {
            return 1 == d.j ? (c = document.createElement("script"), Va(c, a), b.X.head.appendChild(c), fb(d, SK(b), 2)) : d.return(d.m)
        })
    };
    var TK = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.B = b;
        this.Ea = c;
        this.N = d;
        this.o = e;
        this.G = f;
        this.Z = g;
        this.l = V(this)
    };
    _.P(TK, Z);
    TK.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.Ea && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(f) {
            if (f.D) return !1;
            var g = a.N.R[f.getDomId()],
                h;
            if (h = !(en(El(g)) && (F = df(Rw), _.u(F, "includes")).call(F, String(El(g))))) yl(a.G) && 4 === El(g) ? (O(a.o, VG("googletag.enums.OutOfPageFormat.REWARDED", String(f.getAdUnitPath()))), h = !0) : h = !1, h = !h;
            return h && !Hl(a.context, a.o, f, g, a.G, a.Z)
        });
        30 < b.length && (O(this.o, RG("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        if (_.H(rx))
            for (var c = {}, d = _.A(b), e = d.next(); !e.done; c = {
                    hc: c.hc
                }, e = d.next()) c.hc = e.value, _.hn(c.hc, function(f) {
                return function() {
                    var g = _.u(b, "findIndex").call(b, function(h) {
                        return h === f.hc
                    }); - 1 < g && b.splice(g, 1)
                }
            }(c));
        this.l.j(b)
    };
    var UK = function(a, b, c, d) {
        Z.call(this, a, 1068);
        this.o = b;
        this.B = c;
        this.l = d;
        this.A = V(this)
    };
    _.P(UK, Z);
    UK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m;
        return _.eb(function(n) {
            switch (n.j) {
                case 1:
                    if (a.l) return fb(n, a.l.promise, 5);
                    f = a.A;
                    g = f.j;
                    return fb(n, null != (d = null == (b = a.o) ? void 0 : b.promise) ? d : null == (c = a.B) ? void 0 : c.promise.then(function(p) {
                        return p ? p() : ""
                    }), 4);
                case 4:
                    g.call(f, null != (e = n.m) ? e : "");
                    n.j = 0;
                    break;
                case 5:
                    h = n.m;
                    k = a.A;
                    l = k.j;
                    if (!h) {
                        m = "";
                        n.j = 6;
                        break
                    }
                    return fb(n, h(), 7);
                case 7:
                    m = n.m;
                case 6:
                    l.call(k, m), n.j = 0
            }
        })
    };
    UK.prototype.m = function() {
        this.A.j("")
    };
    var VK = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.Z = c;
        this.A = V(this)
    };
    _.P(VK, Z);
    VK.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : G(a, 9)) && !!G(this.Z, 5);
        this.A.j(b)
    };
    var WK = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.N = c;
        this.X = d;
        this.A = wz(this);
        this.l = W(this, e);
        yz(this, f)
    };
    _.P(WK, Z);
    WK.prototype.j = function() {
        var a = this.N,
            b = a.V;
        a = a.R;
        for (var c = _.A(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.X;
            rm(e, b) && !this.L.hb(d) && sm(d, f, e, b)
        }
        this.A.notify()
    };
    var XK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Ei : f;
        Z.call(this, a, 939);
        this.o = b;
        this.G = c;
        this.Z = d;
        this.l = f;
        yz(this, e)
    };
    _.P(XK, Z);
    XK.prototype.j = function() {
        this.l(this.G, Co(Eo(Fo(_.Zg(Do(new Go, jt(new Bo, String(this.o))), 4, 1), 2), this.context.Za || this.context.Ha), G(this.Z, 5)), _.H(Kx) ? function() {} : void 0)
    };
    var YK = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.A = wz(this);
        this.o = W(this, d);
        yz(this, e)
    };
    _.P(YK, Z);
    YK.prototype.j = function() {
        for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : El(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.WJ);
                    return
            }
        }
        this.A.notify()
    };
    var ZK = function(a, b, c, d, e) {
        Z.call(this, a, 833);
        this.pb = b;
        this.l = c;
        this.G = d;
        this.A = wz(this);
        yz(this, e)
    };
    _.P(ZK, Z);
    ZK.prototype.j = function() {
        if ("wbn" !== this.pb) {
            var a = this.l,
                b = this.G,
                c = _.H(cx) ? Oh() : HE();
            c = {
                version: AH ? AH : AH = bk(),
                Yb: c,
                Gf: _.H(dx)
            };
            c = qF.Xe(c);
            var d = YE(b);
            c = d ? Jd(c, new x.Map([
                ["n", String(d)]
            ])) : c;
            d = df(dk);
            for (var e = new x.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Jd(c, e);
            d = a.resources[c.toString()];
            var g;
            _.H(cx) || _.H(bx) || d || (null == (g = qj()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Ad("IFRAME"), a.src = Ua(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var $K = function(a, b, c, d) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.A = wz(this);
        this.l = W(this, c);
        yz(this, d)
    };
    _.P($K, Z);
    $K.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Xb) {
            var d = a.bb;
            a = Sg(a);
            var e = new Yv;
            b = _.Ic(e, 2, b, 0);
            c = _.Ic(b, 1, c, 0);
            c = Ug(a, 7, Vg, c);
            Nd(d, c)
        }
        this.A.notify()
    };
    var aL = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.ya = b;
        this.N = c;
        this.A = wz(this);
        this.l = W(this, d)
    };
    _.P(aL, Z);
    aL.prototype.j = function() {
        for (var a = _.A(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.A(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = y(this.N.R[b.getDomId()], 20);
            b.dispatchEvent(MF, 808, {
                we: c,
                uf: d
            });
            this.ya.dispatchEvent("slotRequested", 705, new vJ(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var bL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D, B, I, S, M, U, Y, la, ca, Sa) {
        Z.call(this, a, 785, _.we(gx));
        this.Ea = b;
        this.L = c;
        this.za = d;
        this.N = e;
        this.pb = f;
        this.ab = g;
        this.Gb = h;
        this.Fb = k;
        this.gd = l;
        this.vb = m;
        this.wb = n;
        this.tb = p;
        this.Z = r;
        this.isSecureContext = v;
        this.G = w;
        this.M = D;
        this.qc = B;
        this.o = V(this);
        this.F = V(this);
        this.T = V(this);
        this.l = V(this);
        yz(this, Y);
        this.ia = xz(this, D);
        this.B = xz(this, B);
        this.P = W(this, I);
        this.da = W(this, S);
        this.J = xz(this, M);
        this.ma = X(this, U);
        yz(this, Y);
        yz(this, la);
        ca && (this.la = W(this, ca));
        this.Y = new qz(Sa)
    };
    _.P(bL, Z);
    bL.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D, B;
        return _.eb(function(I) {
            if (1 == I.j) {
                if (!a.P.value.length) return a.o.j(""), kz(a.F), a.l.j([]), I.return();
                b = !_.H(Mw);
                if (b) {
                    hg();
                    var S = jg[1]
                } else S = "";
                c = S;
                b ? (hg(), S = jg[4]) : S = "";
                d = S;
                b ? (hg(), S = jg[6]) : S = "";
                e = S;
                k = null != (h = null == (f = a.J) ? void 0 : f.value) ? h : null !== (null == (g = a.J) ? void 0 : g.value) || a.J.rb() ? null : 1;
                _.H(nx) && _.H(mx) && null !== k && (l = (0, E.K)(a.ma.value), je({
                    timeout: 1 === k ? "1" : "0",
                    sig: String(k),
                    e2e: String(performance.now() - l)
                }, "topics_e2e"));
                a.B.value && (a.L.oc = a.B.value);
                r = {
                    ga: {
                        G: a.G,
                        context: a.context,
                        L: a.L,
                        za: a.za,
                        Z: a.Z,
                        Ea: a.Ea,
                        gd: a.gd,
                        isSecureContext: a.isSecureContext
                    },
                    ba: {
                        W: a.P.value,
                        N: a.N,
                        ab: a.ab,
                        ld: !1
                    },
                    Lf: {
                        Gb: a.Gb,
                        Fb: a.Fb
                    },
                    gf: {
                        pe: c,
                        Ye: d,
                        nf: e
                    },
                    jf: {
                        Le: null != (n = a.ia.value) ? n : "0"
                    },
                    he: {
                        pb: a.pb,
                        vb: a.vb,
                        wb: a.wb
                    },
                    Yc: {
                        Zc: a.da.value
                    },
                    Cf: {
                        Df: k
                    },
                    xf: {
                        qh: null != (p = null == (m = a.la) ? void 0 : m.value) ? p : null,
                        lf: a.Y.value
                    }
                };
                a.F.j(r);
                v = new zI(r);
                w = Wl(CI(v));
                D = w.url;
                B = w.Dd;
                By(a.tb, (9).toString(), 9, B);
                a.o.j(D);
                a.l.j(r.ba.W.slice());
                a.T.j(BI(v) ? wr("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : wr("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"));
                return fb(I, a.M.promise, 2)
            }
            if (4 != I.j) {
                if (a.D) return I.return();
                gi("gpt_paw", function(M) {
                    mi(M, a.context);
                    var U;
                    L(M, "sig", null != (U = a.M.H) ? U : -1);
                    L(M, "req", a.ca);
                    L(M, "req_cnt", a.L.D);
                    var Y;
                    L(M, "dm", null != (Y = window.navigator.deviceMemory) ? Y : -1)
                }, _.we(Jw));
                a.B.value ? I = fb(I, a.qc.promise, 4) : (I.j = 0, I = void 0);
                return I
            }
            gi("gpt_etu", function(M) {
                mi(M, a.context);
                var U;
                L(M, "sig", null != (U = a.qc.H) ? U : -1);
                L(M, "req", a.ca)
            });
            I.j = 0
        })
    };
    var cL = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.X = c;
        this.N = d;
        this.G = e;
        this.A = wz(this);
        yz(this, f)
    };
    _.P(cL, Z);
    cL.prototype.j = function() {
        for (var a = _.A(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Qh(b, this.X);
            if (!Ph(b, this.X) && c) {
                a: {
                    var d = c;
                    var e = this.N.R[b.getDomId()],
                        f = 0,
                        g = 0;e = _.A(vh(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.A(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Tl(Sh(d, this.G)) || !d.parentElement || Tl(Sh(d.parentElement, this.G))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.V;g = g.R[b.getDomId()];Sl(c, Yh(b), Ch(f, g), d)
            }
        }
        this.A.notify()
    };
    var dL = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.l = X(this, c)
    };
    _.P(dL, Z);
    dL.prototype.j = function() {
        var a = this;
        this.l.value && Lf(this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var eL = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.I = c;
            this.W = d;
            this.Z = e;
            this.D = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        fL = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        };
    var gL = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.J = b;
        this.M = c;
        this.F = d;
        this.Z = e;
        this.A = wz(this);
        this.B = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.T = W(this, f);
        this.Y = W(this, g);
        yz(this, h);
        this.P = W(this, k)
    };
    _.P(gL, Z);
    gL.prototype.j = function() {
        var a = this,
            b = this.Y.value;
        if (b) {
            var c = new eL(this.J, this.M, this.F, this.T.value, this.Z);
            this.l.open("GET", b);
            this.l.withCredentials = this.P.value;
            this.l.onreadystatechange = function() {
                hL(a, c, !1)
            };
            this.l.onload = function() {
                hL(a, c, !0)
            };
            this.l.onerror = function() {
                fL(c, new Dy("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var hL = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (fL(b, new Dy("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.B);
                    if (d && d)
                        if (1 !== b.state && 2 !== b.state) fL(b, new Cy("state err: (" + ([b.state, b.j.length].join() + ")")));
                        else {
                            b.j && (d = b.j + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.D = k, ++h.m, h.state = 2;
                                else {
                                    try {
                                        h.C(h.m, h.D, {
                                            kind: 0,
                                            Aa: Av(k)
                                        }, h.W, h.Z), h.D = ""
                                    } catch (l) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (f && e < d.length);
                            b.j = d.substr(e)
                        }
                    a.B = a.l.responseText.length;
                    c && 4 === a.l.readyState && (1 !== b.state || b.j ? fL(b, new Cy("state err (" + ([b.state, b.j.length].join() + ")"))) : (b.state = 3, b.I(b.m, b.W, b.Z)))
                }
        } catch (l) {
            fL(b, l)
        }
    };
    var iL = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.tb = c;
        this.A = wz(this);
        this.l = W(this, e);
        yz(this, d)
    };
    _.P(iL, Z);
    iL.prototype.j = function() {
        var a = this.l.value;
        a.length && dp(this.tb, "3", (0, E.K)(y(this.N.R[a[0].getDomId()], 20)));
        this.A.notify()
    };
    var jL = function(a, b) {
        Z.call(this, a, 820);
        this.G = b;
        this.A = V(this)
    };
    _.P(jL, Z);
    jL.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.eb(function(f) {
            if (1 == f.j) return fb(f, Hi(a.G), 2);
            b = f.m;
            c = b.oc;
            d = b.status;
            c || gi("gpt_etu", function(g) {
                mi(g, a.context);
                L(g, "rsn", d)
            });
            a.A.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var kL = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.Z = c;
        this.G = d;
        this.localStorage = e;
        this.A = V(this);
        this.o = V(this);
        this.B = X(this, f)
    };
    _.P(kL, Z);
    kL.prototype.j = function() {
        if (_.H(mx) && this.B.value) {
            _.H(nx) ? this.o.j(performance.now()) : kz(this.o);
            var a, b, c, d, e, f;
            (null == (a = this.l) ? 0 : G(a, 8)) || _.H(Yw) && (null == (b = this.l) ? 0 : G(b, 13)) || (null == (c = this.l) ? 0 : G(c, 1)) || 1 === (null == (d = this.l) ? void 0 : de(d, 6, 2)) || 1 === (null == (e = this.l) ? void 0 : y(e, 5)) || (null == (f = this.l) ? 0 : G(f, 9)) || !G(this.Z, 5) || G(this.Z, 9) ? this.A.j(5) : (a = Ri(this.B.value, this.G, _.H(jx), _.H(lx), new _.vE(this.context), this.localStorage), lz(this.A, a))
        } else kz(this.A), kz(this.o)
    };
    kL.prototype.m = function() {
        kz(this.A)
    };
    var mL = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.F = [];
        this.B = {
            Qb: lL(this, function(d) {
                return d.getHeight()
            }),
            ac: lL(this, function(d) {
                return d.getWidth()
            }),
            Se: lL(this, function(d) {
                return !!G(d, 8)
            }),
            Ie: lL(this, function(d) {
                return y(d, 10)
            }),
            Kd: lL(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            qe: lL(this, function(d) {
                return Ke(d, tu, 43)
            }),
            Re: lL(this, function(d) {
                return !!G(d, 9)
            }),
            If: lL(this, function(d) {
                return !!G(d, 12)
            }),
            Je: lL(this, function(d) {
                return rn(d, ju, 48, Eu)
            }),
            Fe: lL(this, function(d) {
                return rn(d, hu, 39, Eu)
            }),
            jc: lL(this, function(d) {
                return y(d, 36)
            }),
            Jf: lL(this, function(d) {
                return G(d, 13)
            }),
            Qe: lL(this, function(d) {
                return G(d, 3)
            }),
            Ef: lL(this, function(d) {
                return y(d, 49)
            }),
            Mf: lL(this, function(d) {
                return y(d, 29)
            }),
            Nf: lL(this, function(d) {
                return y(d, 30)
            }),
            Ne: lL(this, function(d) {
                return Ke(d, wu, 51)
            }),
            qc: lL(this, function(d) {
                return y(d, 61)
            }),
            wa: V(this),
            fe: lL(this, function(d) {
                return Ke(d, zu, 58)
            }),
            Pf: lL(this, function(d) {
                var e, f;
                return null != (f = null == (e = Ke(d, vu, 56)) ? void 0 : y(e, 1)) ? f : null
            }),
            mf: lL(this, function(d) {
                return Tc(d, bu, 62)
            }),
            Ze: lL(this, function(d) {
                return un(d, 63)
            })
        };
        this.o = W(this, b)
    };
    _.P(mL, Z);
    var lL = function(a, b) {
        var c = V(a);
        a.F.push({
            A: c,
            De: b
        });
        return c
    };
    mL.prototype.j = function() {
        for (var a = _.A(this.F), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.De;
            jz(b.A, c(this.o.value))
        }
        if (rn(this.o.value, Cu, 41, Du)) throw new Cy("SecureFrame");
        if (0 === this.l.kind || 1 === this.l.kind && this.l.url) this.B.wa.j(this.l);
        else {
            a = this.B.wa;
            b = a.j;
            c = this.o.value;
            var d = Ti(c, Du, 4);
            b.call(a, {
                kind: 0,
                Aa: y(c, d) || ""
            })
        }
    };
    var nL = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = wz(this);
        this.o = W(this, c)
    };
    _.P(nL, Z);
    nL.prototype.j = function() {
        for (var a = this, b = un(this.o.value, 23), c = _.Lg(DJ), d = _.A(b), e = d.next(); !e.done; e = d.next()) e = e.value, EJ(c, e), FJ(c, e, this.slotId);
        this.l.notify();
        b.length && gi("gpt_hp", function(f) {
            mi(f, a.context);
            L(f, "ls", b.join())
        }, _.we(ww))
    };
    var oL = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = V(this);
        this.o = V(this)
    };
    _.P(oL, Z);
    oL.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = bj(a, xr);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new Bu(a.slice());
        var c;
        b = _.A(null != (c = un(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.Lg(Ty).j(c);
        tk(4);
        this.slotId.dispatchEvent(LF, 800, a);
        this.A.j(a);
        var d;
        jz(this.o, null != (d = Ke(a, su, 54)) ? d : null)
    };
    var pL = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.l = wz(this);
        this.o = W(this, d)
    };
    _.P(pL, Z);
    pL.prototype.j = function() {
        var a = this;
        G(this.o.value, 11) && (_.XF(this.L, this.slotId), UF(this.L, this.slotId, function() {
            _.YF(a.L, a.slotId)
        }));
        this.l.notify()
    };
    var qL = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.Z = b;
        this.za = c;
        this.l = wz(this);
        this.o = W(this, d)
    };
    _.P(qL, Z);
    qL.prototype.j = function() {
        if (G(this.Z, 5))
            for (var a = new x.Set, b = _.A(Tc(this.o.value, uu, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = Js(c, 5)) ? d : 1;
                a.has(e) || (Tz(this.za, 2 === e ? "__gpi" : "__gads", c, this.Z), a.add(e))
            }
        this.l.notify()
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var rL = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        sL = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = rL[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var tL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D, B, I, S, M, U, Y) {
        Z.call(this, a, 973);
        this.pa = b;
        this.l = c;
        this.B = d;
        this.P = e;
        this.N = f;
        this.L = g;
        this.za = h;
        this.la = k;
        this.M = l;
        this.o = m;
        this.Wb = n;
        this.F = p;
        this.ma = r;
        this.nb = v;
        this.isSecureContext = w;
        this.G = D;
        this.X = B;
        this.J = I;
        this.ra = U;
        this.da = Y;
        this.T = new _.sg;
        this.ia = X(this, I);
        this.Y = W(this, S);
        this.Da = W(this, M);
        yz(this, p.fa)
    };
    _.P(tL, Z);
    tL.prototype.j = function() {
        var a = this,
            b = new lf;
        _.an(this, b);
        var c = this.Y.value,
            d = EE(this.N.V);
        if (!_.H(xx)) {
            var e = new hJ(this.context, qj(), console, this.J);
            J(b, e)
        }
        J(b, new dL(this.context, console, this.J));
        e = new PK(this.context, this.B, this.L, Ke(this.N.V, Lp, 5), this.X);
        J(b, e);
        var f = new cL(this.context, this.B, this.X, this.N, this.G, e.A);
        J(b, f);
        var g = !!G(this.N.V, 6),
            h = new TK(this.context, this.B, g, this.N, this.l, this.G, c);
        J(b, h);
        var k = new jL(this.context, this.G);
        J(b, k);
        var l = this.F,
            m = l.M,
            n = l.da,
            p = l.U,
            r = l.F,
            v = l.J,
            w = l.fb,
            D = l.gb,
            B = l.Ka,
            I = l.lb;
        e = l.ra;
        var S = l.ca;
        l = l.Vb;
        var M = this.da;
        M || (M || _.we(Cw), M = new UK(this.context, M, B, I), J(b, M), M = M.A);
        var U = new cI(this.context, this.l, this.N.R, this.nb, h.l, m, n, p, r, v, S);
        J(b, U);
        J(b, new iI(this.context, m, w, D, U.F, U.J, this.N.R));
        _.H(mx) ? (n = new kL(this.context, d, c, this.G, this.ia.value, e), J(b, n), v = n.A, w = n.o) : (v = new Dp, kz(v), w = new Dp, kz(w));
        n = window.isSecureContext && _.H(sx) ? "wbn" : "ldjh";
        var Y = ++this.L.D;
        r = p = null;
        "wbn" === n && (p = sL().toLowerCase(), r = "googletag.wbn" + Y);
        D = this.Wb;
        f = new bL(this.context, g, this.L, this.za, this.N, n, D.ab, D.Gb, D.Fb, this.Da.value, p, r, _.Lg($g), c, this.isSecureContext, this.G, M, k.A, h.l, U.l, v, w, f.A, this.ra, l, m);
        J(b, f);
        g = new iL(this.context, this.N, _.Lg($g), f.o, _.H(rx) ? f.l : h.l);
        J(b, g);
        d = new VK(this.context, d, c);
        J(b, d);
        k = _.Xg(this.context, 646, function(ca, Sa, gb, Ga, Fa) {
            var Ba = function() {
                return void uL(a, Fa, ca, Sa, gb, Ga, U.o)
            };
            ca && _.H(uw) ? setTimeout(_.Xg(a.context, 646, Ba), 0) : Ba()
        });
        m = _.Xg(this.context, 647, function(ca, Sa, gb) {
            a.T.resolve();
            var Ga = function() {
                return void vL(a, Y, gb, Sa, ca, U.o)
            };
            _.H(uw) ? setTimeout(_.Xg(a.context, 646, Ga), 0) : Ga()
        });
        l = _.Xg(this.context, 289, function(ca) {
            ca = ca instanceof Error ? ca : Error();
            ca.message = ca.message || "strm_err";
            bh(a.context, 289, ca)
        });
        M = _.Xg(this.context, 1042, function(ca) {
            ca = ca instanceof Error ? ca : Error();
            ca.message = ca.message || "Unknown web bundle error.";
            bh(a.context, 1042, ca)
        });
        var la;
        "ldjh" === n ? la = new gL(this.context, k, l, m, c, _.H(rx) ? f.l : h.l, f.o, g.A, d.A) : la = new RK(this.context, k, M, m, n, (0, E.K)(r), (0, E.K)(p), c, this.X, _.H(rx) ? f.l : h.l, f.o, f.T, g.A, d.A);
        J(b, la);
        d = new $K(this.context, Y, _.H(rx) ? f.l : h.l, la.A);
        J(b, d);
        d = new NK(this.context, f.F, f.o);
        J(b, d);
        d = new aL(this.context, this.o.Yd, this.N, d.A);
        J(b, d);
        d = new ZK(this.context, n, this.la, this.G, d.A);
        J(b, d);
        d = new YK(this.context, this.N, this.M, h.l, d.A);
        J(b, d);
        h = new WK(this.context, this.L, this.N, this.X, h.l, d.A);
        J(b, h);
        h = new XK(this.context, ye(this.G), this.G, c, la.A);
        J(b, h);
        _.H(vw) && 1 === Y && (c = new MK(this.context, c, e, la.A), J(b, c));
        zf(b)
    };
    var uL = function(a, b, c, d, e, f, g) {
            var h, k;
            return _.eb(function(l) {
                if (1 == l.j) {
                    h = f[c];
                    if (!h || _.H(rx) && h.D) return bh(a.context, 646, Error("missing slot")), l.return();
                    0 === c && (k = (0, E.K)(y(a.N.R[h.getDomId()], 20)), dp(_.Lg($g), "4", k));
                    _.H(qx) ? l = fb(l, a.T.promise, 3) : (l.j = 2, l = void 0);
                    return l
                }
                return 2 != l.j && h.D ? l.return() : fb(l, wL(a, h, d, e, b, g), 0)
            })
        },
        vL = function(a, b, c, d, e, f) {
            var g, h, k;
            return _.eb(function(l) {
                switch (l.j) {
                    case 1:
                        var m = a.context,
                            n = e + 1,
                            p = d.length;
                        if (m.Xb) {
                            var r = m.bb;
                            m = Sg(m);
                            var v = new Zv;
                            v = _.Ic(v, 3, b, 0);
                            n = _.Ic(v, 1, n, 0);
                            p = _.Ic(n, 2, p, 0);
                            p = Ug(m, 8, Vg, p);
                            Nd(r, p)
                        }
                        g = e + 1;
                    case 2:
                        if (!(g < d.length)) {
                            l.j = 4;
                            break
                        }
                        if (!d[g]) {
                            l.j = 3;
                            break
                        }
                        r = new Bu;
                        r = _.z(r, 8, !0);
                        h = ae(r);
                        k = '{"empty":' + h + "}";
                        return fb(l, uL(a, c, g, k, {
                            kind: 0,
                            Aa: ""
                        }, d, f), 3);
                    case 3:
                        ++g;
                        l.j = 2;
                        break;
                    case 4:
                        r = a.L, p = a.P, m = (0, E.K)(r.m.get(p)) - 1, 0 === m ? r.m.delete(p) : r.m.set(p, m), 0 === m && a.o.Od.dispatchEvent(QF, 965, a.P), l.j = 0
                }
            })
        },
        wL = function(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, r, v, w, D, B, I, S, M, U, Y, la, ca, Sa, gb, Ga, Fa;
            return _.eb(function(Ba) {
                switch (Ba.j) {
                    case 1:
                        return g = new lf, h = new oL(a.context, c, b), J(g, h), k = new eJ(a.context, h.o), J(g, k), l = new qL(a.context, e, a.za, h.A), J(g, l), m = new nL(a.context, b, h.A), J(g, m), n = new pL(a.context, b, a.L, h.A), J(g, n), p = new mL(a.context, h.A, d), J(g, p), r = [l.l.promise, m.l.promise, n.l.promise], zf(g), fb(Ba, x.Promise.all(r), 2);
                    case 2:
                        if (b.D) return Ba.return();
                        v = p;
                        D = w = v.B;
                        B = D.fe;
                        I = D.Se;
                        S = D.Kd;
                        return fb(Ba, B.promise, 3);
                    case 3:
                        return M = Ba.m, U = !!M, la = null == (Y = M) ? void 0 : Ke(Y, qp, 5), fb(Ba, I.promise, 4);
                    case 4:
                        return ca = !Ba.m, U && gi("gpt_td_init", function(qb) {
                            mi(qb, a.context);
                            var Bb, le;
                            L(qb, "winner_qid", null != (le = null == (Bb = la) ? void 0 : Bb.getEscapedQemQueryId()) ? le : "");
                            var af, bf;
                            L(qb, "xfpQid", null != (bf = null == (af = la) ? void 0 : xn(af, 6)) ? bf : "");
                            L(qb, "noFill", ca ? "0" : "1");
                            L(qb, "publisher_tag", "gpt")
                        }, 1), Sa = E, gb = Sa.K, fb(Ba, S.promise, 5);
                    case 5:
                        Ga = gb.call(Sa, Ba.m), (Fa = Yl("google_norender")) || !ca && !U ? hp(b, a.L, a.N, Ga) : GK(a.ma, a.pa, a.l, b, !ca, U, a.L, a.N, w, k.l, window, e, a.o.Yd, a.M, a.F, f.get(b)), g.La(), Ba.j = 0
                }
            })
        };
    var xL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r, v, w, D, B, I) {
        Z.call(this, a, 885);
        this.Y = b;
        this.B = c;
        this.N = d;
        this.L = e;
        this.za = f;
        this.Wb = g;
        this.P = h;
        this.M = k;
        this.l = l;
        this.F = m;
        this.o = n;
        this.T = p;
        this.isSecureContext = r;
        this.J = v;
        this.G = w;
        this.X = D;
        this.da = W(this, B);
        yz(this, I)
    };
    _.P(xL, Z);
    xL.prototype.j = function() {
        var a = this.da.value;
        if (a.length) {
            var b = this.L,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.A(a);
            for (b = a.next(); !b.done; b = a.next()) {
                d = b.value;
                b = void 0;
                c = d.nb;
                var e = d.W;
                d = new lf;
                _.an(this, d);
                var f = void 0;
                0 >= _.we(Cw) && (f = new HK(this.context, this.G), J(d, f));
                var g = dn(this.context, this.o.pa),
                    h = g.Ab,
                    k = g.Md;
                _.an(d, g.ua);
                h = Zm(this.context, this.B, this.L, EE(this.N.V), this.G, h, k);
                g = h.Wa;
                _.an(d, h.ua);
                h = new LK(this.context, this.G, g);
                J(d, h);
                h = new IK(this.context, this.G, g);
                J(d, h);
                h = new JK(this.context, _.Og(150), g);
                J(d, h);
                k = new Ep(this.context, this.G, g);
                J(d, k);
                var l = new KK(this.context, this.za, this.J, k.A, g);
                J(d, l);
                c = new tL(this.context, this.Y, this.B, e, this.l, this.N, this.L, this.za, this.P, this.M, this.F, this.Wb, this.o, this.T, c, this.isSecureContext, this.G, this.X, k.A, g, l.o, h.l, null == (b = f) ? void 0 : b.l);
                J(d, c);
                zf(d)
            }
        } else this.F.Od.dispatchEvent(QF, 965, this.l)
    };
    var yL = new x.Map,
        zL = function(a, b, c, d) {
            d = void 0 === d ? yL : d;
            Z.call(this, a, 834);
            this.B = b;
            this.W = c;
            this.l = d;
            this.o = V(this);
            this.F = x.Promise.all(this.W.map(this.J, this))
        };
    _.P(zL, Z);
    zL.prototype.j = function() {
        var a = this,
            b;
        return _.eb(function(c) {
            if (1 == c.j) return fb(c, a.F, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.D
            }));
            c.j = 0
        })
    };
    zL.prototype.J = function(a) {
        var b = this,
            c, d;
        return _.eb(function(e) {
            if (1 == e.j) {
                if (a.D) return e.return(null);
                b.l.has(a) || (b.l.set(a, tq(a)), _.hn(a, function() {
                    return void b.l.delete(a)
                }));
                c = (0, E.K)(b.l.get(a));
                return fb(e, c(), 2)
            }
            d = e.m;
            if (b.D) return e.return(null);
            if (d) return e.return(a);
            O(b.B, bH(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var AL = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.L = b;
        this.Ea = c;
        this.o = d;
        this.l = V(this);
        this.B = W(this, e)
    };
    _.P(AL, Z);
    AL.prototype.j = function() {
        var a = this.B.value;
        if (a.length) {
            for (var b = _.A(a), c = b.next(); !c.done; c = b.next()) aG(this.L, c.value);
            this.o ? this.l.j([]) : this.Ea ? (b = Kg(a[0].getAdUnitPath()), a = BL(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    nb: Kg(d.getAdUnitPath()),
                    W: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var BL = function(a, b) {
        var c = [];
        a = ta(a, function(f) {
            return Kg(f.getAdUnitPath())
        });
        a = _.A(_.u(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.A(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                nb: d,
                W: e
            }) : c.push({
                nb: d,
                W: e
            })
        }
        return c
    };
    var CL = function(a, b, c) {
        Z.call(this, a, 845);
        this.R = b;
        this.l = V(this);
        this.o = V(this);
        this.B = W(this, c)
    };
    _.P(CL, Z);
    CL.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.R[d.getDomId()];
                return !!vh(d).length || wh(d, xh, 16)
            },
            c = this.B.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(yr(b)))
    };
    var DL = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.L = b;
        this.N = c;
        this.X = d;
        this.l = wz(this);
        this.o = W(this, e)
    };
    _.P(DL, Z);
    DL.prototype.j = function() {
        for (var a = _.A(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.fp(this.L, b)) {
                var c = this.N,
                    d = c.V;
                c = c.R[b.getDomId()];
                rm(c, d) && sm(b, this.X, c, d);
                aG(this.L, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = G(c, 10)) ? f : G(d, 11)) && e && sm(b, this.X, c, d)
            }
        this.l.notify()
    };
    var EL = function(a, b, c, d, e, f, g, h, k, l, m, n, p, r) {
        _.Qx.call(this);
        var v = this;
        this.context = a;
        this.F = b;
        this.C = c;
        this.L = d;
        this.za = e;
        this.ya = f;
        this.B = g;
        this.o = h;
        this.O = k;
        this.l = l;
        this.isSecureContext = m;
        this.H = n;
        this.X = p;
        this.G = r;
        this.j = new x.Map;
        this.m = new GF(a);
        _.an(this, this.m);
        IF(this.m, QF, function(w) {
            w = w.detail;
            var D = v.j.get(w);
            D && (v.j.delete(w), D.La())
        })
    };
    _.P(EL, _.Qx);
    var FL = function(a, b, c, d) {
        var e = ++a.L.l;
        a.j.has(e);
        var f = new lf;
        a.j.set(e, f);
        b = new zL(a.context, a.C, b);
        J(f, b);
        var g = new CL(a.context, d.R, b.o);
        J(f, g);
        b = new AL(a.context, a.L, !!G(d.V, 6), Yl("google_nofetch"), g.l);
        J(f, b);
        g = new DL(a.context, a.L, d, document, g.o);
        J(f, g);
        a = new xL(a.context, a.F, a.C, d, a.L, a.za, c, a.B, a.o, e, {
            Od: a.m,
            Yd: a.ya
        }, a.l, a.O, a.isSecureContext, a.H, a.G, a.X, b.l, g.l);
        J(f, a);
        zf(f)
    };
    var GL = function(a, b, c, d, e, f, g, h) {
        BJ.call(this, a, c);
        this.L = d;
        this.l = new x.Set;
        this.B = {};
        this.J = new EK(a);
        this.M = new EL(a, b, c, d, new Qz(window), this, _.Lg(TJ), e, this.J, f, g, h, document, window);
        _.an(this, this.M)
    };
    _.P(GL, BJ);
    GL.prototype.getName = function() {
        return "publisher_ads"
    };
    GL.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ia(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        this.enable();
        var h = vk(c, this.context, this.C, a, b, f),
            k = h.slotId;
        h = h.Va;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            Cn(this.C, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.C, kj("PubAdsService.display", [a, b, d]))
    };
    var yH = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.R[b.getDomId()]) && _.z(e, 19, !0);
        e = {
            id: Mu(b.getDomId())
        };
        Xa(d, gg(e));
        Qh(b, d) ? (a.enable(), WF(a.L, b), HL(a, c, b)) : gi("gpt_pb_write", function(f) {
            mi(f, a.context)
        })
    };
    GL.prototype.slotAdded = function(a, b) {
        var c = this;
        G(b, 17) || this.m && WF(this.L, a);
        this.dispatchEvent(NF, 724, {
            xd: a.getDomId(),
            R: b
        });
        IF(a, gp, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new qJ(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, f)
        });
        IF(a, LF, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new wJ(a, c.getName()))
        });
        BJ.prototype.slotAdded.call(this, a, b)
    };
    GL.prototype.U = function(a, b) {
        this.enable();
        this.m && WF(this.L, b);
        this.C.info(xG());
        var c = a.V,
            d = a.R,
            e = G(c, 6);
        if (e || !this.L.hb(b)) e && (e = Qh(b)) && b.dispatchEvent(KF, 778, e), G(c, 4) && (d = d[b.getDomId()], rm(d, c) && !this.L.hb(b) && sm(b, document, d, c)), HL(this, a, b)
    };
    var HL = function(a, b, c) {
            var d = IL(a, b, c);
            JL(a, d, b, {
                ab: 1
            });
            b = c.getAdUnitPath();
            if (c = a.B[b]) {
                c = _.A(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, JL(a, d.W, d.N, d.Wb);
                delete a.B[b]
            }
        },
        IL = function(a, b, c) {
            var d = b.V;
            b = b.R;
            if (G(d, 4)) return [];
            var e;
            return !G(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : G(e, 17)) ? (a.l.add(c), _.hn(c, function() {
                return void a.l.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.l.has(f)) return !1;
                a.l.add(f);
                _.hn(f, function() {
                    return void a.l.delete(f)
                });
                return !0
            })
        },
        JL = function(a, b, c, d) {
            a.C.info(EG());
            if (KL(a, b, d, c) && 1 !== d.ab)
                for (b = _.A(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.dispatchEvent(OF, 725, {
                    xd: d,
                    R: c.R[d]
                })
        },
        KL = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.fp(a.L, e)) return !1;
                var f = d.R[e.getDomId()];
                5 !== El(f) && 4 !== El(f) || _.XF(a.L, e);
                return !0
            });
            if (!b.length) return null;
            FL(a.M, b, c, d);
            return b
        };
    GL.prototype.refresh = function(a, b, c) {
        b = LL(this, b);
        if (!b.length) return !1;
        ML(this, a, b, null != c ? c : {
            ab: 2
        });
        return !0
    };
    var LL = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.D) return !0;
                O(a.C, HG(String(d)));
                return !1
            })
        },
        ML = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.m) {
                var h = {};
                e = _.A(c);
                for (f = e.next(); !f.done; h = {
                        Nb: h.Nb
                    }, f = e.next()) h.Nb = f.value, a.l.add(h.Nb), _.hn(h.Nb, function(k) {
                    return function() {
                        return void a.l.delete(k.Nb)
                    }
                }(h));
                JL(a, c, b, d)
            } else c.length && G(b.V, 6) ? (O(a.C, DG(g), e), e = e.getAdUnitPath(), f = null != (h = a.B[e]) ? h : [], f.push({
                W: c,
                N: b,
                Wb: d
            }), a.B[e] = f) : O(a.C, BG(g), e)
        };
    GL.prototype.F = function() {
        var a = this,
            b = $h().j;
        if (G(b, 6))
            for (var c = _.A(this.j), d = c.next(); !d.done; d = c.next()) this.m && WF(this.L, d.value);
        IH(this, b);
        IF(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.u(a.j, "find").call(a.j, function(g) {
                return f === g.j
            });
            NL(a, [e], $h().j, $h().m, a.L)
        });
        rj("pubadsReady", !0)
    };
    GL.prototype.destroySlots = function(a) {
        a = BJ.prototype.destroySlots.call(this, a);
        if (a.length && this.m) {
            var b = $h();
            OL(this, a, b.j, b.m)
        }
        return a
    };
    var KH = function(a, b, c, d) {
            if (!a.m) return O(a.C, CG(), d[0]), !1;
            var e = LL(a, d);
            if (!e.length) return O(a.C, kj("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.C.info(FG());
            OL(a, e, b, c);
            return !0
        },
        OL = function(a, b, c, d) {
            for (var e = _.A(b), f = e.next(); !f.done; f = e.next()) TF(a.L, f.value);
            NL(a, b, c, d, a.L)
        };
    GL.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.Lg(Ty).j(a)
    };
    var NL = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.A(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                FK(a.J, g);
                var h = d[g.getDomId()];
                rm(h, c) && sm(g, f.document, h, c);
                aG(e, g)
            }
        },
        JH = function(a, b, c, d) {
            _.z(d, 21, !0);
            _.z(d, 22, String(null != b ? b : ""));
            _.z(d, 23, String(null != c ? c : ""));
            IH(a, d)
        },
        LH = function(a, b) {
            if (!a.m) return null;
            var c, d;
            return {
                vid: null != (c = y(b, 22)) ? c : "",
                cmsid: null != (d = y(b, 23)) ? d : ""
            }
        },
        IH = function(a, b) {
            G(b, 21) && a.m && _.z(b, 29, Bv())
        };
    var PL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        QL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var Cq = "2022111501";
    (function(a, b, c) {
        var d = null != b ? b : {
            Ha: Dq(),
            Za: "",
            bb: new Iq(0),
            ee: !0,
            Jd: 1
        };
        try {
            var e = qj();
            (0, E.Xd)(!_.Lg(Mg).j);
            _.u(Object, "assign").call(Object, Ng, e._vars_);
            e._vars_ = Ng;
            if (e.evalScripts) e.evalScripts();
            else {
                dF();
                rj("evalScripts", function() {
                    try {
                        Yn()
                    } catch (M) {
                        bh(d, 297, M);
                        var I, S;
                        null == (I = window.console) || null == (S = I.error) || S.call(I, M)
                    }
                });
                try {
                    Nz()
                } catch (I) {
                    bh(d, 408, I)
                }
                mm();
                try {
                    Lz(), tk(13), tk(3)
                } catch (I) {
                    bh(d, 408, I)
                }
                var f = df(ux);
                f.length && Bd(f);
                var g = Gq(),
                    h = null != b ? b : Jq(g),
                    k = null != c ? c : new oJ(h);
                Wg(h);
                var l = new SF,
                    m = new JJ(l),
                    n = new QJ(h),
                    p = new iJ(h, m, k, l),
                    r = lv(),
                    v = _.Lg(sk),
                    w = new GL(h, m, k, l, n, p, r, v);
                _.H(Ex) && new FI(h, w, l, m);
                _.Og(260) && jJ(p, w);
                var D = $h().j;
                uo(h, k, w, a, D, m);
                var B = _.Xg(h, 77, function() {
                    var I = e.cmd;
                    if (!I || Array.isArray(I)) {
                        var S = new GI(k);
                        e.cmd = hj(h, S);
                        null != I && I.length && S.push.apply(S, I)
                    }
                });
                e.fifWin && "complete" !== document.readyState ? _.cb(window, "load", function() {
                    return window.setTimeout(B, 0)
                }) : B();
                Yn();
                if (_.H(Ex) || _.Lg($g).j) Bq(), Ej(document, Id(Ua(_.H(Hx) ? C(PL) : C(QL)).toString()));
                So(h, k);
                zj(h)
            }
        } catch (I) {
            bh(d, 106, I)
        }
    })(window);
}).call(this, {});