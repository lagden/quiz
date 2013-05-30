/*! Quiz - v0.1.0 - 2013-05-30 */function theQuiz(a, b, c) {
    this.path = c || "../Documents/images/", this.lingua = b || "pt", this.totalPontos = 0, 
    this.dados = a, this.quiz = a.quiz, this.totalPerguntas = this.quiz.length, this.curr = 0, 
    this.$view = $("#quizFrame"), this.view = {
        img: this.$view.find(".quizImg:eq(0)"),
        pergunta: this.$view.find(".quizPergunta:eq(0)"),
        respostas: this.$view.find(".quizRespostas:eq(0)"),
        resultado: $("#quizResultadoResposta"),
        atual: $("#quizAtual"),
        tipHandler: $("#quizTip"),
        tipBox: $("#quizTipBox"),
        show: $("#quizShowResultado"),
        grupo: $("#quizGroupQuestion")
    }, this.opts = [ "a", "b", "c" ], this.isCorreto = !1, this.init();
}

(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"), this._overwriteProps.length = 0;
        }, h = {}, i = g.prototype = new a("css");
        i.constructor = g, g.version = "1.9.7", g.API = 2, g.defaultTransformPerspective = 0, 
        i = "px", g.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g, q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, s = /[^\d\-\.]/g, t = /(?:\d|\-|\+|=|#|\.)*/g, u = /opacity *= *([^)]*)/, v = /opacity:([^;]*)/, w = /alpha\(opacity *=.+?\)/i, x = /^(rgb|hsl)/, y = /([A-Z])/g, z = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, B = function(a, b) {
            return b.toUpperCase();
        }, C = /(?:Left|Right|Width)/i, D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, F = /,(?=[^\)]*(?:\(|$))/gi, G = Math.PI / 180, H = 180 / Math.PI, I = {}, J = document, K = J.createElement("div"), L = J.createElement("img"), M = g._internals = {
            _specialProps: h
        }, N = navigator.userAgent, O = function() {
            var a, b = N.indexOf("Android"), c = J.createElement("div");
            return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), 
            n = l && Number(N.substr(N.indexOf("Version/") + 8, 1)) < 6, m = -1 !== N.indexOf("Firefox"), 
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N), o = parseFloat(RegExp.$1), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", 
            a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1;
        }(), P = function(a) {
            return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }, Q = function(a) {
            window.console && console.log(a);
        }, R = "", S = "", T = function(a, b) {
            b = b || K;
            var c, d, e = b.style;
            if (void 0 !== e[a]) return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
            d = 5; --d > -1 && void 0 === e[c[d] + a]; ) ;
            return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null;
        }, U = J.defaultView ? J.defaultView.getComputedStyle : function() {}, V = g.getStyle = function(a, b, c, d, e) {
            var f;
            return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(y, "-$1").toLowerCase()), 
            f = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, f = c[b]), 
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a);
        }, W = function(a, b, c, d, e) {
            if ("px" === d || !d) return c;
            if ("auto" === d || !c) return 0;
            var f, g = C.test(b), h = a, i = K.style, j = 0 > c;
            return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", 
            "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || J.body, 
            i[g ? "width" : "height"] = c + d), h.appendChild(K), f = parseFloat(K[g ? "offsetWidth" : "offsetHeight"]), 
            h.removeChild(K), 0 !== f || e || (f = W(a, b, c, d, !0))), j ? -f : f;
        }, X = function(a, b, c) {
            if ("absolute" !== V(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = V(a, "margin" + d, c);
            return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0);
        }, Y = function(a, b) {
            var c, d, e = {};
            if (b = b || U(a, null)) if (c = b.length) for (;--c > -1; ) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]); else for (c in b) e[c] = b[c]; else if (b = a.currentStyle || a.style) for (c in b) e[c.replace(z, B)] = b[c];
            return O || (e.opacity = P(a)), d = xb(a, b, !1), e.rotation = d.rotation * H, e.skewX = d.skewX * H, 
            e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wb && (e.z = d.z, 
            e.rotationX = d.rotationX * H, e.rotationY = d.rotationY * H, e.scaleZ = d.scaleZ), 
            e.filters && delete e.filters, e;
        }, Z = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), 
            void 0 !== j[g] && (h = new lb(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            };
        }, $ = {
            width: [ "Left", "Right" ],
            height: [ "Top", "Bottom" ]
        }, _ = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], ab = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = $[b], f = e.length;
            for (c = c || U(a, null); --f > -1; ) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, 
            d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d;
        }, bb = function(a, b) {
            (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
            var c = a.split(" "), d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0], e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
            return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d))) && (d = "50%"), 
            b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), 
            b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), 
            d + " " + e + (c.length > 2 ? " " + c[2] : "");
        }, cb = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b);
        }, db = function(a, b) {
            return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a);
        }, eb = function(a, b, c, d) {
            var e, f, g, h, i = 1e-6;
            return null == a ? h = b : "number" == typeof a ? h = a * G : (e = 2 * Math.PI, 
            f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? G : 1) - ("=" === a.charAt(1) ? 0 : b), 
            f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), 
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), 
            h = b + g), i > h && h > -i && (h = 0), h;
        }, fb = {
            aqua: [ 0, 255, 255 ],
            lime: [ 0, 255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, 255 ],
            navy: [ 0, 0, 128 ],
            white: [ 255, 255, 255 ],
            fuchsia: [ 255, 0, 255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ 255, 255, 0 ],
            orange: [ 255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ 255, 0, 0 ],
            pink: [ 255, 192, 203 ],
            cyan: [ 0, 255, 255 ],
            transparent: [ 255, 255, 255, 0 ]
        }, gb = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5;
        }, hb = function(a) {
            var b, c, d, e, f, g;
            return a && "" !== a ? "number" == typeof a ? [ a >> 16, 255 & a >> 8, 255 & a ] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), 
            fb[a] ? fb[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), 
            d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), 
            [ a >> 16, 255 & a >> 8, 255 & a ]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), 
            e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, 
            b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = gb(e + 1 / 3, b, c), 
            a[1] = gb(e, b, c), a[2] = gb(e - 1 / 3, b, c), a) : (a = a.match(p) || fb.transparent, 
            a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), 
            a)) : fb.black;
        }, ib = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fb) ib += "|" + i + "\\b";
        ib = new RegExp(ib + ")", "gi");
        var jb = function(a, b, c, d) {
            if (null == a) return function(a) {
                return a;
            };
            var e, f = b ? (a.match(ib) || [ "" ])[0] : "", g = a.split(f).join("").match(r) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(p, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && F.test(a)) {
                    for (o = a.replace(F, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",");
                }
                if (b = (a.match(ib) || [ f ])[0], m = a.split(b).join("").match(r) || [], n = m.length, 
                k > n--) for (;++n < k; ) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && F.test(a)) {
                    for (f = a.replace(F, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",");
                }
                if (b = a.match(r) || [], m = b.length, k > m--) for (;++m < k; ) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                return h + b.join(j) + i;
            } : function(a) {
                return a;
            };
        }, kb = function(a) {
            return a = a.split(","), function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }, lb = (M._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h; ) b = g[h.v], 
            h.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : i > b && b > -i && (b = 0), h.t[h.p] = b, 
            h = h._next;
            if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a) for (h = f.firstMPT; h; ) {
                if (c = h.t, c.type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c.e = e;
                    }
                } else c.e = c.s + c.xs0;
                h = h._next;
            }
        }, function(a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
        }), mb = (M._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = I;
            for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, 
            l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new lb(d, "s", h, j, d.r), 
                d.c = 0), 1 === d.type)) for (g = d.l; --g > 0; ) i = "xn" + g, h = d.p + "_" + i, 
                n[h] = d.data[i], m[h] = d[i], f || (j = new lb(d, i, h, j, d.rxp[i]));
                d = d._next;
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            };
        }, M.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || "css_" + b, a instanceof mb || f.push(this.n), 
            this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, 
            this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
        }), nb = g.parseComplex = function(a, b, c, d, e, f, g, h, i, k) {
            c = c || f || "", g = new mb(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
            var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "), B = d.split(", ").join(",").split(" "), C = A.length, D = j !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), 
            B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), 
            C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++) if (o = A[l], r = B[l], 
            u = parseFloat(o), u || 0 === u) g.appendXtra("", u, cb(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0); else if (e && ("#" === o.charAt(0) || fb[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", 
            o = hb(o), r = hb(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", 
            g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), 
            v && (o = o.length < 4 ? 1 : o[3], g.appendXtra("", o, (r.length < 4 ? 1 : r[3]) - o, z, !1))); else if (s = o.match(p)) {
                if (t = r.match(q), !t || t.length !== s.length) return g;
                for (n = 0, m = 0; m < s.length; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), cb(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), 
                n = w + y.length;
                g["xs" + g.l] += o.substr(n);
            } else g["xs" + g.l] += g.l ? " " + o : o;
            if (-1 !== d.indexOf("=") && g.data) {
                for (z = g.xs0 + g.data.s, l = 1; l < g.l; l++) z += g["xs" + l] + g.data["xn" + l];
                g.e = z + g["xs" + l];
            }
            return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g;
        }, ob = 9;
        for (i = mb.prototype, i.l = i.pr = 0; --ob > 0; ) i["xn" + ob] = 0, i["xs" + ob] = "";
        i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, 
        i.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, 
            g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, 
            g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new mb(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), 
            g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
        };
        var pb = function(a, b) {
            b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || jb(b.defaultValue, b.color, b.collapsible, b.multi), 
            b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, 
            this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0;
        }, qb = M._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [ g ], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, 
            e = new pb(f[d], b);
        }, rb = function(a) {
            if (!h[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                qb(a, {
                    parser: function(a, c, d, e, f, g, i) {
                        var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                        return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), 
                        f);
                    }
                });
            }
        };
        i = pb.prototype, i.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [ b ], 
            i = [ c ])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, 
                c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, 
                c[g] += " " + m));
                b = h.join(", "), c = i.join(", ");
            }
            return nb(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, i.parse = function(a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
        }, g.registerSpecialProp = function(a, b, c) {
            qb(a, {
                parser: function(a, d, e, f, g, h) {
                    var i = new mb(a, e, 0, 0, g, 2, e, !1, c);
                    return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i;
                },
                priority: c
            });
        };
        var sb = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), tb = T("transform"), ub = R + "transform", vb = T("transformOrigin"), wb = null !== T("perspective"), xb = function(a, b, c) {
            var d, e, f, h, i, j, k, l, m, n, o, p, q, r = c ? a._gsTransform || {
                skewY: 0
            } : {
                skewY: 0
            }, s = r.scaleX < 0, t = 2e-5, u = 1e5, v = -Math.PI + 1e-4, w = Math.PI - 1e-4, x = wb ? parseFloat(V(a, vb, b, !1, "0 0 0").split(" ")[2]) || r.zOrigin || 0 : 0;
            if (tb) d = V(a, ub, b, !0); else if (a.currentStyle) if (d = a.currentStyle.filter.match(D), 
            d && 4 === d.length) d = [ d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), r.x || 0, r.y || 0 ].join(","); else {
                if (null != r.x) return r;
                d = "";
            }
            for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], f = e.length; --f > -1; ) h = Number(e[f]), 
            e[f] = (i = h - (h |= 0)) ? (0 | i * u + (0 > i ? -.5 : .5)) / u + h : h;
            if (16 === e.length) {
                var y = e[8], z = e[9], A = e[10], B = e[12], C = e[13], E = e[14];
                if (r.zOrigin && (E = -r.zOrigin, B = y * E - e[12], C = z * E - e[13], E = A * E + r.zOrigin - e[14]), 
                !c || null == r.rotationX) {
                    var F, G, H, I, J, K, L, M = e[0], N = e[1], O = e[2], P = e[3], Q = e[4], R = e[5], S = e[6], T = e[7], U = e[11], W = r.rotationX = Math.atan2(S, A), X = v > W || W > w;
                    W && (I = Math.cos(-W), J = Math.sin(-W), F = Q * I + y * J, G = R * I + z * J, 
                    H = S * I + A * J, y = Q * -J + y * I, z = R * -J + z * I, A = S * -J + A * I, U = T * -J + U * I, 
                    Q = F, R = G, S = H), W = r.rotationY = Math.atan2(y, M), W && (K = v > W || W > w, 
                    I = Math.cos(-W), J = Math.sin(-W), F = M * I - y * J, G = N * I - z * J, H = O * I - A * J, 
                    z = N * J + z * I, A = O * J + A * I, U = P * J + U * I, M = F, N = G, O = H), W = r.rotation = Math.atan2(N, R), 
                    W && (L = v > W || W > w, I = Math.cos(-W), J = Math.sin(-W), M = M * I + Q * J, 
                    G = N * I + R * J, R = N * -J + R * I, S = O * -J + S * I, N = G), L && X ? r.rotation = r.rotationX = 0 : L && K ? r.rotation = r.rotationY = 0 : K && X && (r.rotationY = r.rotationX = 0), 
                    r.scaleX = (0 | Math.sqrt(M * M + N * N) * u + .5) / u, r.scaleY = (0 | Math.sqrt(R * R + z * z) * u + .5) / u, 
                    r.scaleZ = (0 | Math.sqrt(S * S + A * A) * u + .5) / u, r.skewX = 0, r.perspective = U ? 1 / (0 > U ? -U : U) : 0, 
                    r.x = B, r.y = C, r.z = E;
                }
            } else if (!(wb && 0 !== e.length && r.x === e[4] && r.y === e[5] && (r.rotationX || r.rotationY) || void 0 !== r.x && "none" === V(a, "display", b))) {
                var Y = e.length >= 6, Z = Y ? e[0] : 1, $ = e[1] || 0, _ = e[2] || 0, ab = Y ? e[3] : 1;
                r.x = e[4] || 0, r.y = e[5] || 0, j = Math.sqrt(Z * Z + $ * $), k = Math.sqrt(ab * ab + _ * _), 
                l = Z || $ ? Math.atan2($, Z) : r.rotation || 0, m = _ || ab ? Math.atan2(_, ab) + l : r.skewX || 0, 
                n = j - Math.abs(r.scaleX || 0), o = k - Math.abs(r.scaleY || 0), Math.abs(m) > Math.PI / 2 && Math.abs(m) < 1.5 * Math.PI && (s ? (j *= -1, 
                m += 0 >= l ? Math.PI : -Math.PI, l += 0 >= l ? Math.PI : -Math.PI) : (k *= -1, 
                m += 0 >= m ? Math.PI : -Math.PI)), p = (l - r.rotation) % Math.PI, q = (m - r.skewX) % Math.PI, 
                (void 0 === r.skewX || n > t || -t > n || o > t || -t > o || p > v && w > p && p * u | !1 || q > v && w > q && q * u | !1) && (r.scaleX = j, 
                r.scaleY = k, r.rotation = l, r.skewX = m), wb && (r.rotationX = r.rotationY = r.z = 0, 
                r.perspective = parseFloat(g.defaultTransformPerspective) || 0, r.scaleZ = 1);
            }
            r.zOrigin = x;
            for (f in r) r[f] < t && r[f] > -t && (r[f] = 0);
            return c && (a._gsTransform = r), r;
        }, yb = function(a) {
            var b, c, d = this.data, e = -d.rotation, f = e + d.skewX, g = 1e5, h = (0 | Math.cos(e) * d.scaleX * g) / g, i = (0 | Math.sin(e) * d.scaleX * g) / g, j = (0 | Math.sin(f) * -d.scaleY * g) / g, k = (0 | Math.cos(f) * d.scaleY * g) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                var n, p, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x, x = d.y;
                if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, 
                w += n - (n * h + p * i), x += p - (n * j + p * k)), s) n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")"; else {
                    var y, z, A, B = 8 > o ? 1 : -1;
                    for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), 
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), 
                    ob = 0; 4 > ob; ob++) z = _[ob], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, 
                    A = c !== d[z] ? 2 > ob ? -d.ieOffsetX : -d.ieOffsetY : 2 > ob ? n - d.ieOffsetX : p - d.ieOffsetY, 
                    l[z] = (d[z] = Math.round(c - A * (0 === ob || 2 === ob ? 1 : B))) + "px";
                    v += ", sizingMethod='auto expand')";
                }
                l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, 
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(") && l.removeAttribute("filter"));
            }
        }, zb = function() {
            var a, b, c, d, e, f, g, h, i, j = this.data, k = this.t.style, l = j.perspective, n = j.scaleX, o = 0, p = 0, q = 0, r = 0, s = j.scaleY, t = 0, u = 0, v = 0, w = 0, x = j.scaleZ, y = 0, z = 0, A = 0, B = l ? -1 / l : 0, C = j.rotation, D = j.zOrigin, E = 1e5;
            m && (g = k.top ? "top" : k.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", 
            c = V(this.t, g, null, !1), h = parseFloat(c) || 0, i = c.substr((h + "").length) || "px", 
            j._ffFix = !j._ffFix, k[g] = (j._ffFix ? h + .05 : h - .05) + i), (C || j.skewX) && (c = n * Math.cos(C), 
            d = s * Math.sin(C), C -= j.skewX, o = n * -Math.sin(C), s *= Math.cos(C), n = c, 
            r = d), C = j.rotationY, C && (a = Math.cos(C), b = Math.sin(C), c = n * a, d = r * a, 
            e = x * -b, f = B * -b, p = n * b, t = r * b, x *= a, B *= a, n = c, r = d, v = e, 
            z = f), C = j.rotationX, C && (a = Math.cos(C), b = Math.sin(C), c = o * a + p * b, 
            d = s * a + t * b, e = w * a + x * b, f = A * a + B * b, p = o * -b + p * a, t = s * -b + t * a, 
            x = w * -b + x * a, B = A * -b + B * a, o = c, s = d, w = e, A = f), D && (y -= D, 
            q = p * y, u = t * y, y = x * y + D), q = (c = (q += j.x) - (q |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + q : q, 
            u = (c = (u += j.y) - (u |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + u : u, 
            y = (c = (y += j.z) - (y |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + y : y, 
            k[tb] = "matrix3d(" + [ (0 | n * E) / E, (0 | r * E) / E, (0 | v * E) / E, (0 | z * E) / E, (0 | o * E) / E, (0 | s * E) / E, (0 | w * E) / E, (0 | A * E) / E, (0 | p * E) / E, (0 | t * E) / E, (0 | x * E) / E, (0 | B * E) / E, q, u, y, l ? 1 + -y / l : 1 ].join(",") + ")";
        }, Ab = function() {
            var a, b, c, d, e, f, g, h, i, j = this.data, k = this.t, l = k.style;
            m && (a = l.top ? "top" : l.bottom ? "bottom" : parseFloat(V(k, "top", null, !1)) ? "bottom" : "top", 
            b = V(k, a, null, !1), c = parseFloat(b) || 0, d = b.substr((c + "").length) || "px", 
            j._ffFix = !j._ffFix, l[a] = (j._ffFix ? c + .05 : c - .05) + d), j.rotation || j.skewX ? (e = j.rotation, 
            f = e - j.skewX, g = 1e5, h = j.scaleX * g, i = j.scaleY * g, l[tb] = "matrix(" + (0 | Math.cos(e) * h) / g + "," + (0 | Math.sin(e) * h) / g + "," + (0 | Math.sin(f) * -i) / g + "," + (0 | Math.cos(f) * i) / g + "," + j.x + "," + j.y + ")") : l[tb] = "matrix(" + j.scaleX + ",0,0," + j.scaleY + "," + j.x + "," + j.y + ")";
        };
        qb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(a, b, c, d, f, g, h) {
                if (d._transform) return f;
                var i, j, k, l, m, n, o, p = d._transform = xb(a, e, !0), q = a.style, r = 1e-6, s = sb.length, t = h, u = {};
                if ("string" == typeof t.transform && tb) k = q.cssText, q[tb] = t.transform, q.display = "block", 
                i = xb(a, null, !1), q.cssText = k; else if ("object" == typeof t) {
                    if (i = {
                        scaleX: db(null != t.scaleX ? t.scaleX : t.scale, p.scaleX),
                        scaleY: db(null != t.scaleY ? t.scaleY : t.scale, p.scaleY),
                        scaleZ: db(null != t.scaleZ ? t.scaleZ : t.scale, p.scaleZ),
                        x: db(t.x, p.x),
                        y: db(t.y, p.y),
                        z: db(t.z, p.z),
                        perspective: db(t.transformPerspective, p.perspective)
                    }, o = t.directionalRotation, null != o) if ("object" == typeof o) for (k in o) t[k] = o[k]; else t.rotation = o;
                    i.rotation = eb("rotation" in t ? t.rotation : "shortRotation" in t ? t.shortRotation + "_short" : "rotationZ" in t ? t.rotationZ : p.rotation * H, p.rotation, "rotation", u), 
                    wb && (i.rotationX = eb("rotationX" in t ? t.rotationX : "shortRotationX" in t ? t.shortRotationX + "_short" : p.rotationX * H || 0, p.rotationX, "rotationX", u), 
                    i.rotationY = eb("rotationY" in t ? t.rotationY : "shortRotationY" in t ? t.shortRotationY + "_short" : p.rotationY * H || 0, p.rotationY, "rotationY", u)), 
                    i.skewX = null == t.skewX ? p.skewX : eb(t.skewX, p.skewX), i.skewY = null == t.skewY ? p.skewY : eb(t.skewY, p.skewY), 
                    (j = i.skewY - p.skewY) && (i.skewX += j, i.rotation += j);
                }
                for (m = p.z || p.rotationX || p.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, 
                m || null == t.scale || (i.scaleZ = 1); --s > -1; ) c = sb[s], l = i[c] - p[c], 
                (l > r || -r > l || null != I[c]) && (n = !0, f = new mb(p, c, p[c], l, f), c in u && (f.e = u[c]), 
                f.xs0 = 0, f.plugin = g, d._overwriteProps.push(f.n));
                return l = t.transformOrigin, (l || wb && m && p.zOrigin) && (tb ? (n = !0, l = (l || V(a, c, e, !1, "50% 50%")) + "", 
                c = vb, f = new mb(q, c, 0, 0, f, -1, "css_transformOrigin"), f.b = q[c], f.plugin = g, 
                wb ? (k = p.zOrigin, l = l.split(" "), p.zOrigin = (l.length > 2 ? parseFloat(l[2]) : k) || 0, 
                f.xs0 = f.e = q[c] = l[0] + " " + (l[1] || "50%") + " 0px", f = new mb(p, "zOrigin", 0, 0, f, -1, f.n), 
                f.b = k, f.xs0 = f.e = p.zOrigin) : f.xs0 = f.e = q[c] = l) : bb(l + "", p)), n && (d._transformType = m || 3 === this._transformType ? 3 : 2), 
                f;
            },
            prefix: !0
        }), qb("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), qb("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g) {
                b = this.format(b);
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], y = a.style;
                for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), 
                i = 0; i < x.length; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), 
                -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), 
                s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), 
                m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), 
                r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), 
                v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), 
                l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, 
                j = parseFloat(k) + o + r)), g = nb(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                return g;
            },
            prefix: !0,
            formatter: jb("0px 0px 0px 0px", !1, !0)
        }), qb("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", p = e || U(a, null), q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), 
                m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1; ) q = h[j], 
                    k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, 
                    h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                    q = h.join(" ");
                }
                return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: bb
        }), qb("backgroundSize", {
            defaultValue: "0 0",
            formatter: bb
        }), qb("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), qb("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), qb("transformStyle", {
            prefix: !0
        }), qb("backfaceVisibility", {
            prefix: !0
        }), qb("margin", {
            parser: kb("marginTop,marginRight,marginBottom,marginLeft")
        }), qb("padding", {
            parser: kb("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), qb("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", 
                b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), 
                b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
            }
        }), qb("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), qb("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        }), qb("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g);
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ib) || [ "#000" ])[0];
            }
        }), qb("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var f = a.style, g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                return new mb(f, g, 0, 0, e, -1, c, !1, 0, f[g], b);
            }
        });
        var Bb = function(a) {
            var b, c = this.t, d = c.filter, e = 0 | this.s + this.c * a;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") ? (c.removeAttribute("filter"), 
            b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=100)"), 
            -1 === d.indexOf("opacity") ? c.filter += " alpha(opacity=" + e + ")" : c.filter = d.replace(u, "opacity=" + e));
        };
        qb("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h, i = parseFloat(V(a, "opacity", e, !1, "1")), j = a.style;
                return b = parseFloat(b), "autoAlpha" === c && (h = V(a, "visibility", e), 1 === i && "hidden" === h && 0 !== b && (i = 0), 
                f = new mb(j, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== i ? "visible" : "hidden", 0 === b ? "hidden" : "visible"), 
                f.xs0 = "visible", d._overwriteProps.push(f.n)), O ? f = new mb(j, "opacity", i, b - i, f) : (f = new mb(j, "opacity", 100 * i, 100 * (b - i), f), 
                f.xn1 = "autoAlpha" === c ? 1 : 0, j.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", 
                f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Bb), 
                f;
            }
        });
        var Cb = function(a, b) {
            b && (a.removeProperty ? a.removeProperty(b.replace(y, "-$1").toLowerCase()) : a.removeAttribute(b));
        }, Db = function(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.className = 0 === a ? this.b : this.e;
                for (var b = this.data, c = this.t.style; b; ) b.v ? c[b.p] = b.v : Cb(c, b.p), 
                b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.className !== this.e && (this.t.className = this.e);
        };
        qb("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.className, p = a.style.cssText;
                if (g = f._classNamePT = new mb(a, d, 0, 0, g, 2), g.setRatio = Db, g.pr = -11, 
                c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n; ) m[n.p] = 1, n = n._next;
                    l.setRatio(1);
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), 
                f._tween._duration && (a.className = g.e, j = Z(a, k, Y(a), i, m), a.className = o, 
                g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), 
                g;
            }
        });
        var Eb = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration) for (var b, c = "all" === this.e, d = this.t.style, e = c ? d.cssText.split(";") : this.e.split(","), f = e.length, g = h.transform.parse; --f > -1; ) b = e[f], 
            c && (b = b.substr(0, b.indexOf(":")).split(" ").join("")), h[b] && (b = h[b].parse === g ? tb : h[b].p), 
            Cb(d, b);
        };
        for (qb("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new mb(a, d, 0, 0, f, 2), f.setRatio = Eb, f.e = b, f.pr = -10, f.data = e._tween, 
                c = !0, f;
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(","), ob = i.length; ob--; ) rb(i[ob]);
        i = g.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, 
            e = U(a, ""), f = this._overwriteProps;
            var i, m, o, p, q, r, s, t, u, w = a.style;
            if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && (w.zIndex = 0)), 
            "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, 
            !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), 
            this._transformType) {
                for (u = 3 === this._transformType, tb ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), 
                ("auto" === s || "" === s) && (w.zIndex = 0)), n && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, 
                o = m; o && o._next; ) o = o._next;
                t = new mb(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wb ? zb : tb ? Ab : yb, 
                t.data = this._transform || xb(a, e, !0), f.pop();
            }
            if (c) {
                for (;m; ) {
                    for (r = m._next, o = p; o && o.pr > m.pr; ) o = o._next;
                    (m._prev = o ? o._prev : q) ? m._prev._next = m : p = m, (m._next = o) ? o._prev = m : q = m, 
                    m = r;
                }
                this._firstPT = p;
            }
            return !0;
        }, i.parse = function(a, b, c, f) {
            var g, i, k, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", 
            q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = hb(n), 
            n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = nb(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), 
            o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = ab(a, g, e), 
            o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, 
            o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), 
            n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), 
            p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = d[g] || o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], 
            o !== p && "" !== p && (l || 0 === l) && (k || 0 === k) && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, 
            k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : (l = W(a, g, l, p), 
            p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new mb(s, g, l || k || 0, 0, c, -1, "css_" + g, !1, 0, m, n), 
            c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new mb(s, g, k, l - k, c, 0, "css_" + g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), 
            c.xs0 = p)) : c = nb(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
            return c;
        }, i.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (;e; ) {
                if (b = e.c * a + e.s, e.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : f > b && b > -f && (b = 0), 
                e.type) if (1 === e.type) if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c;
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next;
            } else for (;e; ) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (;e; ) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), 
            e = e._next;
        }, i._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
        }, i._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), 
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next), 
            a._next = b, a._prev = c), a;
        }, i._kill = function(b) {
            var c, d, e, f = b;
            if (b.css_autoAlpha || b.css_alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.css_opacity = 1, f.css_autoAlpha && (f.css_visibility = 1);
            }
            return b.css_className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), 
            c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), 
            a.prototype._kill.call(this, f);
        };
        var Fb = function(a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; --e > -1; ) Fb(a[e], b, c); else for (d = a.childNodes, 
            e = d.length; --e > -1; ) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 
            1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Fb(f, b, c);
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h = b.to(a, c, d), i = [ h ], j = [], k = [], l = [], m = b._internals.reservedProps;
            for (a = h._targets || h.target, Fb(a, j, l), h.render(c, !0), Fb(a, k), h.render(0, !0), 
            h._enabled(!0), e = l.length; --e > -1; ) if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                f = f.difs;
                for (g in d) m[g] && (f[g] = d[g]);
                i.push(b.to(l[e], c, f));
            }
            return i;
        }, a.activate([ g ]), g;
    }, !0);
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var a = document.documentElement, b = window, c = function(c, d) {
        var e = "x" === d ? "Width" : "Height", f = "scroll" + e, g = "client" + e, h = document.body;
        return c === b || c === a || c === h ? Math.max(a[f], h[f]) - Math.max(a[g], h[g]) : c[f] - c["offset" + e];
    }, d = window._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        init: function(a, d, e) {
            return this._wdw = a === b, this._target = a, this._tween = e, "object" != typeof d && (d = {
                y: d
            }), this._autoKill = d.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), 
            null != d.x ? this._addTween(this, "x", this.x, "max" === d.x ? c(a, "x") : d.x, "scrollTo_x", !0) : this.skipX = !0, 
            null != d.y ? this._addTween(this, "y", this.y, "max" === d.y ? c(a, "y") : d.y, "scrollTo_y", !0) : this.skipY = !0, 
            !0;
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            var c = this._wdw || !this.skipX ? this.getX() : this.xPrev, d = this._wdw || !this.skipY ? this.getY() : this.yPrev, e = d - this.yPrev, f = c - this.xPrev;
            this._autoKill && (!this.skipX && (f > 7 || -7 > f) && (this.skipX = !0), !this.skipY && (e > 7 || -7 > e) && (this.skipY = !0), 
            this.skipX && this.skipY && this._tween.kill()), this._wdw ? b.scrollTo(this.skipX ? c : this.x, this.skipY ? d : this.y) : (this.skipY || (this._target.scrollTop = this.y), 
            this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y;
        }
    }), e = d.prototype;
    d.max = c, e.getX = function() {
        return this._wdw ? null != b.pageXOffset ? b.pageXOffset : null != a.scrollLeft ? a.scrollLeft : document.body.scrollLeft : this._target.scrollLeft;
    }, e.getY = function() {
        return this._wdw ? null != b.pageYOffset ? b.pageYOffset : null != a.scrollTop ? a.scrollTop : document.body.scrollTop : this._target.scrollTop;
    }, e._kill = function(a) {
        return a.scrollTo_x && (this.skipX = !0), a.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, a);
    };
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        var d = function(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
        }, e = [], f = new c(null, null, 1, 0), g = function(a) {
            for (;a; ) {
                if (a._paused) return !0;
                a = a._timeline;
            }
            return !1;
        }, h = d.prototype = new a();
        return h.constructor = d, h.kill()._gc = !1, d.version = "1.9.7", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
        }, h.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, h.removeCallback = function(a, b) {
            if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
        }, h.tweenTo = function(a, c) {
            c = c || {};
            var d, g, h = {
                ease: f,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (d in c) h[d] = c[d];
            return h.time = this._parseTimeOrLabel(a), g = new b(this, Math.abs(Number(h.time) - this._time) / this._timeScale || .001, h), 
            h.onStart = function() {
                g.target.paused(!0), g.vars.time !== g.target.time() && g.duration(Math.abs(g.vars.time - g.target.time()) / g.target._timeScale), 
                c.onStart && c.onStart.apply(c.onStartScope || g, c.onStartParams || e);
            }, g;
        }, h.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                onCompleteScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, h.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var d, f, g, h, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration, l = this._duration, m = this._time, n = this._totalTime, o = this._startTime, p = this._timeScale, q = this._rawPrevTime, r = this._paused, s = this._cycle;
            if (a >= k ? (this._locked || (this._totalTime = k, this._cycle = this._repeat), 
            this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", 0 === l && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, 
            this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = l, 
            a = l + 1e-6)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), 
            this._time = 0, (0 !== m || 0 === l && this._rawPrevTime > 0 && !this._locked) && (h = "onReverseComplete", 
            f = this._reversed), 0 > a ? (this._active = !1, 0 === l && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), 
            this._rawPrevTime = a, a = 0) : (this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 
            0 !== this._repeat && (j = l + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 
            0 !== this._cycle && this._cycle === this._totalTime / j && this._cycle--, this._time = this._totalTime - this._cycle * j, 
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = l - this._time), this._time > l ? (this._time = l, 
            a = l + 1e-6) : this._time < 0 ? this._time = a = 0 : a = this._time))), this._cycle !== s && !this._locked) {
                var t = this._yoyo && 0 !== (1 & s), u = t === (this._yoyo && 0 !== (1 & this._cycle)), v = this._totalTime, w = this._cycle, x = this._rawPrevTime, y = this._time;
                this._totalTime = s * l, this._cycle < s ? t = !t : this._totalTime += l, this._time = m, 
                this._rawPrevTime = 0 === l ? q - 1e-5 : q, this._cycle = s, this._locked = !0, 
                m = t ? 0 : l, this.render(m, b, 0 === l), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), 
                u && (m = t ? l + 1e-6 : -1e-6, this.render(m, !0, !1)), this._time = y, this._totalTime = v, 
                this._cycle = w, this._rawPrevTime = x, this._locked = !1;
            }
            if (!(this._time !== m && this._first || c || i)) return n !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), 
            void 0;
            if (this._initted || (this._initted = !0), 0 === n && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), 
            this._time >= m) for (d = this._first; d && (g = d._next, !this._paused || r); ) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
            d = g; else for (d = this._last; d && (g = d._prev, !this._paused || r); ) (d._active || d._startTime <= m && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
            d = g;
            this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), 
            h && (this._locked || this._gc || (o === this._startTime || p !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), 
            this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || e)));
        }, h.getActive = function(a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d, e, f = [], h = this.getChildren(a, b, c), i = 0, j = h.length;
            for (d = 0; j > d; d++) e = h[d], e._paused || e._timeline._time >= e._startTime && e._timeline._time < e._startTime + e._totalDuration / e._timeScale && (g(e._timeline) || (f[i++] = e));
            return f;
        }, h.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
        }, h.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; ) if (b[c].time < a) return b[c].name;
            return null;
        }, h.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time;
            }), b;
        }, h.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }, h.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration();
        }, h.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), 
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
            this._totalDuration);
        }, h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), 
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), 
            this.totalTime(a, b)) : this._time;
        }, h.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, h.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, h.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, h.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
        }, d;
    }, !0), window._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = function(a) {
            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, 
            this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, 
            this._onUpdate = this.vars.onUpdate;
            for (var c, d, f = this.vars, g = e.length; --g > -1; ) if (d = f[e[g]]) for (c = d.length; --c > -1; ) "{self}" === d[c] && (d = f[e[g]] = d.concat(), 
            d[c] = this);
            f.tweens instanceof Array && this.add(f.tweens, 0, f.align, f.stagger);
        }, e = [ "onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams" ], f = [], g = function(a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c;
        }, h = f.slice, i = d.prototype = new b();
        return d.version = "1.9.7", i.constructor = d, i.kill()._gc = !1, i.to = function(a, b, d, e) {
            return this.add(new c(a, b, d), e);
        }, i.from = function(a, b, d, e) {
            return this.add(c.from(a, b, d), e);
        }, i.fromTo = function(a, b, d, e, f) {
            return this.add(c.fromTo(a, b, d, e), f);
        }, i.staggerTo = function(a, b, e, f, i, j, k, l) {
            var m, n = new d({
                onComplete: j,
                onCompleteParams: k,
                onCompleteScope: l
            });
            for ("string" == typeof a && (a = c.selector(a) || a), !(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style && (a = h.call(a, 0)), 
            f = f || 0, m = 0; m < a.length; m++) e.startAt && (e.startAt = g(e.startAt)), n.add(new c(a[m], b, g(e)), m * f);
            return this.add(n, i);
        }, i.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
        }, i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            this.staggerTo(a, b, d, e, f, g, h, i);
        }, i.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, i.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), 
            this.add(new c(a, 0, b), d);
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, 
            e = h._first; e; ) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), 
            e = f;
            return h.add(g, 0), g;
        }, i.add = function(e, f, g, h) {
            var i, j, k, l, m;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array) {
                    for (g = g || "normal", h = h || 0, i = f, j = e.length, k = 0; j > k; k++) (l = e[k]) instanceof Array && (l = new d({
                        tweens: l
                    })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === g ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === g && (l._startTime -= l.delay())), 
                    i += h;
                    return this._uncache(!0);
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                e = c.delayedCall(0, e);
            }
            if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration()) for (m = this; m._gc && m._timeline; ) m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._enabled(!0, !1), 
            m = m._timeline;
            return this;
        }, i.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array) {
                for (var c = b.length; --c > -1; ) this.remove(b[c]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, i.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, i.insert = i.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, i.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, i.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, i.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, i.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, i._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e instanceof Array) for (f = e.length; --f > -1; ) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration()); else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration();
            }
            return Number(b) + c;
        }, i.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
        }, i.stop = function() {
            return this.paused(!0);
        }, i.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, i.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, i.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var d, e, g, h, i, j = this._dirty ? this.totalDuration() : this._totalDuration, k = this._time, l = this._startTime, m = this._timeScale, n = this._paused;
            if (a >= j ? (this._totalTime = this._time = j, this._reversed || this._hasPausedChild() || (e = !0, 
            h = "onComplete", 0 === this._duration && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, 
            this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, a = j + 1e-6) : 1e-7 > a ? (this._totalTime = this._time = 0, 
            (0 !== k || 0 === this._duration && this._rawPrevTime > 0) && (h = "onReverseComplete", 
            e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), 
            this._rawPrevTime = a, a = 0) : this._totalTime = this._time = this._rawPrevTime = a, 
            this._time !== k && this._first || c || i) {
                if (this._initted || (this._initted = !0), 0 === k && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), 
                this._time >= k) for (d = this._first; d && (g = d._next, !this._paused || n); ) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g; else for (d = this._last; d && (g = d._prev, !this._paused || n); ) (d._active || d._startTime <= k && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g;
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), 
                h && (this._gc || (l === this._startTime || m !== this._timeScale) && (0 === this._time || j >= this.totalDuration()) && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), 
                this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || f)));
            }
        }, i._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, i.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), 
            a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f;
        }, i.getTweensOf = function(a, b) {
            for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1; ) (d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
            return f;
        }, i._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, i.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), 
            e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, i._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; ) c[d]._kill(a, b) && (e = !0);
            return e;
        }, i.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
        }, i.invalidate = function() {
            for (var a = this._first; a; ) a.invalidate(), a = a._next;
            return this;
        }, i._enabled = function(a, c) {
            if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c);
        }, i.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration();
        }, i.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), 
            this) : (this._dirty && this.totalDuration(), this._duration);
        }, i.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e; ) b = e._prev, e._dirty && e.totalDuration(), 
                    e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 
                    e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), 
                    this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, 
                    c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1;
                }
                return this._totalDuration;
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), 
            this;
        }, i.usesFrames = function() {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
        }, i.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        }, d;
    }, !0);
}), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("TweenMax", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = [].slice, e = function(a, b, d) {
            c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0;
        }, f = function(a) {
            return a.jquery || a.length && a[0] && a[0].nodeType && a[0].style;
        }, g = e.prototype = c.to({}, .1, {}), h = [];
        e.version = "1.9.7", g.constructor = e, g.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, 
        e.getTweensOf = c.getTweensOf, e.ticker = c.ticker, g.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this);
        }, g.updateTo = function(a, b) {
            var d, e = this.ratio;
            b && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, 
            this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (d in a) this.vars[d] = a[d];
            if (this._initted) if (b) this._initted = !1; else if (this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), 
            this._time / this._duration > .998) {
                var f = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(f, !0, !1);
            } else if (this._time > 0) {
                this._initted = !1, this._init();
                for (var g, h = 1 / (1 - e), i = this._firstPT; i; ) g = i.s + i.c, i.c *= h, i.s = g - i.c, 
                i = i._next;
            }
            return this;
        }, g.render = function(a, b, c) {
            var d, e, f, g, i, j, k, l = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, n = this._totalTime, o = this._cycle;
            if (a >= l ? (this._totalTime = l, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, 
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, 
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, 
            e = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, 
            this._rawPrevTime > 0 && (e = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, 
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== n || 0 === this._duration && this._rawPrevTime > 0) && (e = "onReverseComplete", 
            d = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), 
            this._rawPrevTime = a)) : this._initted || (c = !0)) : (this._totalTime = this._time = a, 
            0 !== this._repeat && (g = this._duration + this._repeatDelay, this._cycle = this._totalTime / g >> 0, 
            0 !== this._cycle && this._cycle === this._totalTime / g && this._cycle--, this._time = this._totalTime - this._cycle * g, 
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), 
            this._time > this._duration ? this._time = this._duration : this._time < 0 && (this._time = 0)), 
            this._easeType ? (i = this._time / this._duration, j = this._easeType, k = this._easePower, 
            (1 === j || 3 === j && i >= .5) && (i = 1 - i), 3 === j && (i *= 2), 1 === k ? i *= i : 2 === k ? i *= i * i : 3 === k ? i *= i * i * i : 4 === k && (i *= i * i * i * i), 
            this.ratio = 1 === j ? 1 - i : 2 === j ? i : this._time / this._duration < .5 ? i / 2 : 1 - i / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), 
            m === this._time && !c) return n !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), 
            void 0;
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / this._duration) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (this._active || this._paused || (this._active = !0), 0 === n && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), 
            this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), 
            f = this._firstPT; f; ) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, 
            f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), 
            this._cycle !== o && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), 
            e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), 
            d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
            !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || h)));
        }, e.to = function(a, b, c) {
            return new e(a, b, c);
        }, e.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c);
        }, e.fromTo = function(a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            new e(a, b, d);
        }, e.staggerTo = e.allTo = function(a, b, g, i, j, k, l) {
            i = i || 0;
            var m, n, o, p, q = g.delay || 0, r = [], s = function() {
                g.onComplete && g.onComplete.apply(g.onCompleteScope || this, g.onCompleteParams || h), 
                j.apply(l || this, k || h);
            };
            for (a instanceof Array || ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d.call(a, 0))), 
            m = a.length, o = 0; m > o; o++) {
                n = {};
                for (p in g) n[p] = g[p];
                n.delay = q, o === m - 1 && j && (n.onComplete = s), r[o] = new e(a[o], b, n), q += i;
            }
            return r;
        }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h);
        }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            e.staggerTo(a, b, d, f, g, h, i);
        }, e.delayedCall = function(a, b, c, d, f) {
            return new e(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            });
        }, e.set = function(a, b) {
            return new e(a, 0, b);
        }, e.isTweening = function(a) {
            for (var b, d = c.getTweensOf(a), e = d.length; --e > -1; ) if (b = d[e], b._active || b._startTime === b._timeline._time && b._timeline._active) return !0;
            return !1;
        };
        var i = function(a, b) {
            for (var d = [], e = 0, f = a._first; f; ) f instanceof c ? d[e++] = f : (b && (d[e++] = f), 
            d = d.concat(i(f, b)), e = d.length), f = f._next;
            return d;
        }, j = e.getAllTweens = function(b) {
            return i(a._rootTimeline, b).concat(i(a._rootFramesTimeline, b));
        };
        e.killAll = function(a, c, d, e) {
            null == c && (c = !0), null == d && (d = !0);
            var f, g, h, i = j(0 != e), k = i.length, l = c && d && e;
            for (h = 0; k > h; h++) g = i[h], (l || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g.totalDuration()) : g._enabled(!1, !1));
        }, e.killChildTweensOf = function(a, b) {
            if (null != a) {
                var g, h, i, j, k, l = c._tweenLookup;
                if ("string" == typeof a && (a = c.selector(a) || a), f(a) && (a = d(a, 0)), a instanceof Array) for (j = a.length; --j > -1; ) e.killChildTweensOf(a[j], b); else {
                    g = [];
                    for (i in l) for (h = l[i].target.parentNode; h; ) h === a && (g = g.concat(l[i].tweens)), 
                    h = h.parentNode;
                    for (k = g.length, j = 0; k > j; j++) b && g[j].totalTime(g[j].totalDuration()), 
                    g[j]._enabled(!1, !1);
                }
            }
        };
        var k = function(a, c, d, e) {
            void 0 === c && (c = !0), void 0 === d && (d = !0);
            for (var f, g, h = j(e), i = c && d && e, k = h.length; --k > -1; ) g = h[k], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a);
        };
        return e.pauseAll = function(a, b, c) {
            k(!0, a, b, c);
        }, e.resumeAll = function(a, b, c) {
            k(!1, a, b, c);
        }, g.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }, g.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration();
        }, g.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), 
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), 
            this.totalTime(a, b)) : this._time;
        }, g.duration = function(b) {
            return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
        }, g.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, 
            this._dirty = !1), this._totalDuration);
        }, g.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, g.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, g.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, e;
    }, !0), window._gsDefine("TimelineLite", [ "core.Animation", "core.SimpleTimeline", "TweenLite" ], function(a, b, c) {
        var d = function(a) {
            b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, 
            this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, 
            this._onUpdate = this.vars.onUpdate;
            for (var c, d, f = this.vars, g = e.length; --g > -1; ) if (d = f[e[g]]) for (c = d.length; --c > -1; ) "{self}" === d[c] && (d = f[e[g]] = d.concat(), 
            d[c] = this);
            f.tweens instanceof Array && this.add(f.tweens, 0, f.align, f.stagger);
        }, e = [ "onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams" ], f = [], g = function(a) {
            var b, c = {};
            for (b in a) c[b] = a[b];
            return c;
        }, h = f.slice, i = d.prototype = new b();
        return d.version = "1.9.7", i.constructor = d, i.kill()._gc = !1, i.to = function(a, b, d, e) {
            return b ? this.add(new c(a, b, d), e) : this.set(a, d, e);
        }, i.from = function(a, b, d, e) {
            return this.add(c.from(a, b, d), e);
        }, i.fromTo = function(a, b, d, e, f) {
            return b ? this.add(c.fromTo(a, b, d, e), f) : this.set(a, e, f);
        }, i.staggerTo = function(a, b, e, f, i, j, k, l) {
            var m, n = new d({
                onComplete: j,
                onCompleteParams: k,
                onCompleteScope: l
            });
            for ("string" == typeof a && (a = c.selector(a) || a), !(a instanceof Array) && a.length && a[0] && a[0].nodeType && a[0].style && (a = h.call(a, 0)), 
            f = f || 0, m = 0; m < a.length; m++) e.startAt && (e.startAt = g(e.startAt)), n.to(a[m], b, g(e), m * f);
            return this.add(n, i);
        }, i.staggerFrom = function(a, b, c, d, e, f, g, h) {
            return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h);
        }, i.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
            this.staggerTo(a, b, d, e, f, g, h, i);
        }, i.call = function(a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
        }, i.set = function(a, b, d) {
            return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), 
            this.add(new c(a, 0, b), d);
        }, d.exportRoot = function(a, b) {
            a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e, f, g = new d(a), h = g._timeline;
            for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, 
            e = h._first; e; ) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), 
            e = f;
            return h.add(g, 0), g;
        }, i.add = function(e, f, g, h) {
            var i, j, k, l, m;
            if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                if (e instanceof Array) {
                    for (g = g || "normal", h = h || 0, i = f, j = e.length, k = 0; j > k; k++) (l = e[k]) instanceof Array && (l = new d({
                        tweens: l
                    })), this.add(l, i), "string" != typeof l && "function" != typeof l && ("sequence" === g ? i = l._startTime + l.totalDuration() / l._timeScale : "start" === g && (l._startTime -= l.delay())), 
                    i += h;
                    return this._uncache(!0);
                }
                if ("string" == typeof e) return this.addLabel(e, f);
                if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                e = c.delayedCall(0, e);
            }
            if (b.prototype.add.call(this, e, f), this._gc && !this._paused && this._time === this._duration && this._time < this.duration()) for (m = this; m._gc && m._timeline; ) m._timeline.smoothChildTiming ? m.totalTime(m._totalTime, !0) : m._enabled(!0, !1), 
            m = m._timeline;
            return this;
        }, i.remove = function(b) {
            if (b instanceof a) return this._remove(b, !1);
            if (b instanceof Array) {
                for (var c = b.length; --c > -1; ) this.remove(b[c]);
                return this;
            }
            return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
        }, i.append = function(a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
        }, i.insert = i.insertMultiple = function(a, b, c, d) {
            return this.add(a, b || 0, c, d);
        }, i.appendMultiple = function(a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
        }, i.addLabel = function(a, b) {
            return this._labels[a] = this._parseTimeOrLabel(b), this;
        }, i.removeLabel = function(a) {
            return delete this._labels[a], this;
        }, i.getLabelTime = function(a) {
            return null != this._labels[a] ? this._labels[a] : -1;
        }, i._parseTimeOrLabel = function(b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e); else if (e instanceof Array) for (f = e.length; --f > -1; ) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
            if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
            if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration()); else {
                if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration();
            }
            return Number(b) + c;
        }, i.seek = function(a, b) {
            return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
        }, i.stop = function() {
            return this.paused(!0);
        }, i.gotoAndPlay = function(a, b) {
            return this.play(a, b);
        }, i.gotoAndStop = function(a, b) {
            return this.pause(a, b);
        }, i.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var d, e, g, h, i, j = this._dirty ? this.totalDuration() : this._totalDuration, k = this._time, l = this._startTime, m = this._timeScale, n = this._paused;
            if (a >= j ? (this._totalTime = this._time = j, this._reversed || this._hasPausedChild() || (e = !0, 
            h = "onComplete", 0 === this._duration && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, 
            this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, a = j + 1e-6) : 1e-7 > a ? (this._totalTime = this._time = 0, 
            (0 !== k || 0 === this._duration && this._rawPrevTime > 0) && (h = "onReverseComplete", 
            e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), 
            this._rawPrevTime = a, a = 0) : this._totalTime = this._time = this._rawPrevTime = a, 
            this._time !== k && this._first || c || i) {
                if (this._initted || (this._initted = !0), 0 === k && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), 
                this._time >= k) for (d = this._first; d && (g = d._next, !this._paused || n); ) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g; else for (d = this._last; d && (g = d._prev, !this._paused || n); ) (d._active || d._startTime <= k && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
                d = g;
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)), 
                h && (this._gc || (l === this._startTime || m !== this._timeScale) && (0 === this._time || j >= this.totalDuration()) && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), 
                this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || f)));
            }
        }, i._hasPausedChild = function() {
            for (var a = this._first; a; ) {
                if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                a = a._next;
            }
            return !1;
        }, i.getChildren = function(a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; ) g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), 
            a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
            return f;
        }, i.getTweensOf = function(a, b) {
            for (var d = c.getTweensOf(a), e = d.length, f = [], g = 0; --e > -1; ) (d[e].timeline === this || b && this._contains(d[e])) && (f[g++] = d[e]);
            return f;
        }, i._contains = function(a) {
            for (var b = a.timeline; b; ) {
                if (b === this) return !0;
                b = b.timeline;
            }
            return !1;
        }, i.shiftChildren = function(a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), 
            e = e._next;
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
        }, i._kill = function(a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; ) c[d]._kill(a, b) && (e = !0);
            return e;
        }, i.clear = function(a) {
            var b = this.getChildren(!1, !0, !0), c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
        }, i.invalidate = function() {
            for (var a = this._first; a; ) a.invalidate(), a = a._next;
            return this;
        }, i._enabled = function(a, c) {
            if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), d = d._next;
            return b.prototype._enabled.call(this, a, c);
        }, i.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * a, !1) : this._time / this.duration();
        }, i.duration = function(a) {
            return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), 
            this) : (this._dirty && this.totalDuration(), this._duration);
        }, i.totalDuration = function(a) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var b, c, d = 0, e = this._last, f = 999999999999; e; ) b = e._prev, e._dirty && e.totalDuration(), 
                    e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 
                    e._startTime < 0 && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), 
                    this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, 
                    c > d && (d = c), e = b;
                    this._duration = this._totalDuration = d, this._dirty = !1;
                }
                return this._totalDuration;
            }
            return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), 
            this;
        }, i.usesFrames = function() {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
        }, i.rawTime = function() {
            return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
        }, d;
    }, !0), window._gsDefine("TimelineMax", [ "TimelineLite", "TweenLite", "easing.Ease" ], function(a, b, c) {
        var d = function(b) {
            a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, 
            this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
        }, e = [], f = new c(null, null, 1, 0), g = function(a) {
            for (;a; ) {
                if (a._paused) return !0;
                a = a._timeline;
            }
            return !1;
        }, h = d.prototype = new a();
        return h.constructor = d, h.kill()._gc = !1, d.version = "1.9.7", h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, 
            this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this);
        }, h.addCallback = function(a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
        }, h.removeCallback = function(a, b) {
            if (null == b) this._kill(null, a); else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
        }, h.tweenTo = function(a, c) {
            c = c || {};
            var d, g, h = {
                ease: f,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: !1
            };
            for (d in c) h[d] = c[d];
            return h.time = this._parseTimeOrLabel(a), g = new b(this, Math.abs(Number(h.time) - this._time) / this._timeScale || .001, h), 
            h.onStart = function() {
                g.target.paused(!0), g.vars.time !== g.target.time() && g.duration(Math.abs(g.vars.time - g.target.time()) / g.target._timeScale), 
                c.onStart && c.onStart.apply(c.onStartScope || g, c.onStartParams || e);
            }, g;
        }, h.tweenFromTo = function(a, b, c) {
            c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [ a ],
                onCompleteScope: this
            }, c.immediateRender = c.immediateRender !== !1;
            var d = this.tweenTo(b, c);
            return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001);
        }, h.render = function(a, b, c) {
            this._gc && this._enabled(!0, !1), this._active = !this._paused;
            var d, f, g, h, i, j, k = this._dirty ? this.totalDuration() : this._totalDuration, l = this._duration, m = this._time, n = this._totalTime, o = this._startTime, p = this._timeScale, q = this._rawPrevTime, r = this._paused, s = this._cycle;
            if (a >= k ? (this._locked || (this._totalTime = k, this._cycle = this._repeat), 
            this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", 0 === l && (0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && this._first && (i = !0, 
            this._rawPrevTime > 0 && (h = "onReverseComplete"))), this._rawPrevTime = a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = l, 
            a = l + 1e-6)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), 
            this._time = 0, (0 !== m || 0 === l && this._rawPrevTime > 0 && !this._locked) && (h = "onReverseComplete", 
            f = this._reversed), 0 > a ? (this._active = !1, 0 === l && this._rawPrevTime >= 0 && this._first && (i = !0)) : this._initted || (i = !0), 
            this._rawPrevTime = a, a = 0) : (this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 
            0 !== this._repeat && (j = l + this._repeatDelay, this._cycle = this._totalTime / j >> 0, 
            0 !== this._cycle && this._cycle === this._totalTime / j && this._cycle--, this._time = this._totalTime - this._cycle * j, 
            this._yoyo && 0 !== (1 & this._cycle) && (this._time = l - this._time), this._time > l ? (this._time = l, 
            a = l + 1e-6) : this._time < 0 ? this._time = a = 0 : a = this._time))), this._cycle !== s && !this._locked) {
                var t = this._yoyo && 0 !== (1 & s), u = t === (this._yoyo && 0 !== (1 & this._cycle)), v = this._totalTime, w = this._cycle, x = this._rawPrevTime, y = this._time;
                this._totalTime = s * l, this._cycle < s ? t = !t : this._totalTime += l, this._time = m, 
                this._rawPrevTime = 0 === l ? q - 1e-5 : q, this._cycle = s, this._locked = !0, 
                m = t ? 0 : l, this.render(m, b, 0 === l), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || e), 
                u && (m = t ? l + 1e-6 : -1e-6, this.render(m, !0, !1)), this._time = y, this._totalTime = v, 
                this._cycle = w, this._rawPrevTime = x, this._locked = !1;
            }
            if (!(this._time !== m && this._first || c || i)) return n !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), 
            void 0;
            if (this._initted || (this._initted = !0), 0 === n && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || e)), 
            this._time >= m) for (d = this._first; d && (g = d._next, !this._paused || r); ) (d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
            d = g; else for (d = this._last; d && (g = d._prev, !this._paused || r); ) (d._active || d._startTime <= m && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), 
            d = g;
            this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || e)), 
            h && (this._locked || this._gc || (o === this._startTime || p !== this._timeScale) && (0 === this._time || k >= this.totalDuration()) && (f && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), 
            this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || e)));
        }, h.getActive = function(a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d, e, f = [], h = this.getChildren(a, b, c), i = 0, j = h.length;
            for (d = 0; j > d; d++) e = h[d], e._paused || e._timeline._time >= e._startTime && e._timeline._time < e._startTime + e._totalDuration / e._timeScale && (g(e._timeline) || (f[i++] = e));
            return f;
        }, h.getLabelAfter = function(a) {
            a || 0 !== a && (a = this._time);
            var b, c = this.getLabelsArray(), d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
        }, h.getLabelBefore = function(a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; ) if (b[c].time < a) return b[c].name;
            return null;
        }, h.getLabelsArray = function() {
            var a, b = [], c = 0;
            for (a in this._labels) b[c++] = {
                time: this._labels[a],
                name: a
            };
            return b.sort(function(a, b) {
                return a.time - b.time;
            }), b;
        }, h.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
        }, h.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration();
        }, h.totalDuration = function(b) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), 
            this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), 
            this._totalDuration);
        }, h.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), 
            this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), 
            this.totalTime(a, b)) : this._time;
        }, h.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat;
        }, h.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay;
        }, h.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo;
        }, h.currentLabel = function(a) {
            return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
        }, d;
    }, !0), function() {
        var a = 180 / Math.PI, b = Math.PI / 180, c = [], d = [], e = [], f = {}, g = function(a, b, c, d) {
            this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, 
            this.ba = b - a;
        }, h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", i = function(a, b, c, d) {
            var e = {
                a: a
            }, f = {}, g = {}, h = {
                c: d
            }, i = (a + b) / 2, j = (b + c) / 2, k = (c + d) / 2, l = (i + j) / 2, m = (j + k) / 2, n = (m - l) / 8;
            return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, 
            g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [ e, f, g, h ];
        }, j = function(a, b, f, g, h) {
            var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1, x = 0, y = a[0].a;
            for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = c[j], 
            u = d[j], v = .25 * (u + t) * b / (g ? .5 : e[j] || .5), o = l - (l - k) * (g ? .5 * b : 0 !== t ? v / t : 0), 
            p = l + (m - l) * (g ? .5 * b : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - .5 * (l - k) * b, 
            p = l + .5 * (m - l) * b, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), 
            n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), 
            x += 4) : x++, y = p;
            n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, 
            n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]));
        }, k = function(a, b, e, f) {
            var h, i, j, k, l, m, n = [];
            if (f) for (a = [ f ].concat(a), i = a.length; --i > -1; ) "string" == typeof (m = a[i][b]) && "=" === m.charAt(1) && (a[i][b] = f[b] + Number(m.charAt(0) + m.substr(2)));
            if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][b], 0, 0, a[-1 > h ? 0 : 1][b]), 
            n;
            for (i = 0; h > i; i++) j = a[i][b], k = a[i + 1][b], n[i] = new g(j, 0, 0, k), 
            e && (l = a[i + 2][b], c[i] = (c[i] || 0) + (k - j) * (k - j), d[i] = (d[i] || 0) + (l - k) * (l - k));
            return n[i] = new g(a[i][b], 0, 0, a[i + 1][b]), n;
        }, l = function(a, b, g, i, l, m) {
            var n, o, p, q, r, s, t, u, v = {}, w = [], x = m || a[0];
            l = "string" == typeof l ? "," + l + "," : h, null == b && (b = 1);
            for (o in a[0]) w.push(o);
            if (a.length > 1) {
                for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; ) if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                    t = !1;
                    break;
                }
                t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3]);
            }
            for (c.length = d.length = e.length = 0, n = w.length; --n > -1; ) o = w[n], f[o] = -1 !== l.indexOf("," + o + ","), 
            v[o] = k(a, o, f[o], m);
            for (n = c.length; --n > -1; ) c[n] = Math.sqrt(c[n]), d[n] = Math.sqrt(d[n]);
            if (!i) {
                for (n = w.length; --n > -1; ) if (f[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / d[q] + p[q].da / c[q], 
                e[q] = (e[q] || 0) + r * r;
                for (n = e.length; --n > -1; ) e[n] = Math.sqrt(e[n]);
            }
            for (n = w.length, q = g ? 4 : 1; --n > -1; ) o = w[n], p = v[o], j(p, b, g, i, f[o]), 
            t && (p.splice(0, q), p.splice(p.length - q, q));
            return v;
        }, m = function(a, b, c) {
            b = b || "soft";
            var d, e, f, h, i, j, k, l, m, n, o, p = {}, q = "cubic" === b ? 3 : 2, r = "soft" === b, s = [];
            if (r && c && (a = [ c ].concat(a)), null == a || a.length < q + 1) throw "invalid Bezier data";
            for (m in a[0]) s.push(m);
            for (j = s.length; --j > -1; ) {
                for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), 
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], 
                h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                i.length = n;
            }
            return p;
        }, n = function(a, b, c) {
            for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; ) for (m = a[p], 
            f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, 
            l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, 
            b[n] = (b[n] || 0) + d * d;
        }, o = function(a, b) {
            b = b >> 0 || 6;
            var c, d, e, f, g = [], h = [], i = 0, j = 0, k = b - 1, l = [], m = [];
            for (c in a) n(a[c], g, b);
            for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, 
            f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
            return {
                length: j,
                lengths: h,
                segments: l
            };
        }, p = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            API: 2,
            global: !0,
            init: function(a, b, c) {
                this._target = a, b instanceof Array && (b = {
                    values: b
                }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                var d, e, f, g, h, i = b.values || [], j = {}, k = i[0], n = b.autoRotate || c.vars.orientToBezier;
                this._autoRotate = n ? n instanceof Array ? n : [ [ "x", "y", "rotation", n === !0 ? 0 : Number(n) || 0 ] ] : null;
                for (d in k) this._props.push(d);
                for (f = this._props.length; --f > -1; ) d = this._props[f], this._overwriteProps.push(d), 
                e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), 
                h || j[d] !== i[0][d] && (h = j);
                if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), 
                this._segCount = this._beziers[d].length, this._timeRes) {
                    var p = o(this._beziers, this._timeRes);
                    this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, 
                    this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], 
                    this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
                }
                if (n = this._autoRotate) for (n[0] instanceof Array || (this._autoRotate = n = [ n ]), 
                f = n.length; --f > -1; ) for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1;
                return !0;
            },
            set: function(b) {
                var c, d, e, f, g, h, i, j, k, l, m = this._segCount, n = this._func, o = this._target;
                if (this._timeRes) {
                    if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                        for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; ) ;
                        this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0];
                    } else if (b < this._l1 && e > 0) {
                        for (;e > 0 && (this._l1 = k[--e]) >= b; ) ;
                        0 === e && b < this._l1 ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], 
                        this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si];
                    }
                    if (c = e, b -= this._l1, e = this._si, b > this._s2 && e < l.length - 1) {
                        for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; ) ;
                        this._s1 = l[e - 1], this._si = e;
                    } else if (b < this._s1 && e > 0) {
                        for (;e > 0 && (this._s1 = l[--e]) >= b; ) ;
                        0 === e && b < this._s1 ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e;
                    }
                    h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec;
                } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                for (d = 1 - h, e = this._props.length; --e > -1; ) f = this._props[e], g = this._beziers[f][c], 
                i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = i + (i > 0 ? .5 : -.5) >> 0), 
                n[f] ? o[f](i) : o[f] = i;
                if (this._autoRotate) {
                    var p, q, r, s, t, u, v, w = this._autoRotate;
                    for (e = w.length; --e > -1; ) f = w[e][2], u = w[e][3] || 0, v = w[e][4] === !0 ? 1 : a, 
                    g = this._beziers[w[e][0]], p = this._beziers[w[e][1]], g && p && (g = g[c], p = p[c], 
                    q = g.a + (g.b - g.a) * h, s = g.b + (g.c - g.b) * h, q += (s - q) * h, s += (g.c + (g.d - g.c) * h - s) * h, 
                    r = p.a + (p.b - p.a) * h, t = p.b + (p.c - p.b) * h, r += (t - r) * h, t += (p.c + (p.d - p.c) * h - t) * h, 
                    i = Math.atan2(t - r, s - q) * v + u, n[f] ? o[f](i) : o[f] = i);
                }
            }
        }), q = p.prototype;
        p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
            return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }, p._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var c = a._internals, d = c._parseToProxy, e = c._setPluginRatio, f = c.CSSPropTween;
                c._registerComplexSpecialProp("bezier", {
                    parser: function(a, c, g, h, i, j) {
                        c instanceof Array && (c = {
                            values: c
                        }), j = new p();
                        var k, l, m, n = c.values, o = n.length - 1, q = [], r = {};
                        if (0 > o) return i;
                        for (k = 0; o >= k; k++) m = d(a, n[k], h, i, j, o !== k), q[k] = m.end;
                        for (l in c) r[l] = c[l];
                        return r.values = q, i = new f(a, "bezier", 0, 0, m.pt, 2), i.data = m, i.plugin = j, 
                        i.setRatio = e, 0 === r.autoRotate && (r.autoRotate = !0), !r.autoRotate || r.autoRotate instanceof Array || (k = r.autoRotate === !0 ? 0 : Number(r.autoRotate) * b, 
                        r.autoRotate = null != m.end.left ? [ [ "left", "top", "rotation", k, !0 ] ] : null != m.end.x ? [ [ "x", "y", "rotation", k, !0 ] ] : !1), 
                        r.autoRotate && (h._transform || h._enableTransforms(!1), m.autoRotate = h._target._gsTransform), 
                        j._onInitTween(m.proxy, r, h._tween), i;
                    }
                });
            }
        }, q._roundProps = function(a, b) {
            for (var c = this._overwriteProps, d = c.length; --d > -1; ) (a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b);
        }, q._kill = function(a) {
            var b, c, d = this._props;
            for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], 
            c = d.length; --c > -1; ) d[c] === b && d.splice(c, 1);
            return this._super._kill.call(this, a);
        };
    }(), window._gsDefine("plugins.CSSPlugin", [ "plugins.TweenPlugin", "TweenLite" ], function(a, b) {
        var c, d, e, f, g = function() {
            a.call(this, "css"), this._overwriteProps.length = 0;
        }, h = {}, i = g.prototype = new a("css");
        i.constructor = g, g.version = "1.9.7", g.API = 2, g.defaultTransformPerspective = 0, 
        i = "px", g.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var j, k, l, m, n, o, p = /(?:\d|\-\d|\.\d|\-\.\d)+/g, q = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, r = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, s = /[^\d\-\.]/g, t = /(?:\d|\-|\+|=|#|\.)*/g, u = /opacity *= *([^)]*)/, v = /opacity:([^;]*)/, w = /alpha\(opacity *=.+?\)/i, x = /^(rgb|hsl)/, y = /([A-Z])/g, z = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, B = function(a, b) {
            return b.toUpperCase();
        }, C = /(?:Left|Right|Width)/i, D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, F = /,(?=[^\)]*(?:\(|$))/gi, G = Math.PI / 180, H = 180 / Math.PI, I = {}, J = document, K = J.createElement("div"), L = J.createElement("img"), M = g._internals = {
            _specialProps: h
        }, N = navigator.userAgent, O = function() {
            var a, b = N.indexOf("Android"), c = J.createElement("div");
            return l = -1 !== N.indexOf("Safari") && -1 === N.indexOf("Chrome") && (-1 === b || Number(N.substr(b + 8, 1)) > 3), 
            n = l && Number(N.substr(N.indexOf("Version/") + 8, 1)) < 6, m = -1 !== N.indexOf("Firefox"), 
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(N), o = parseFloat(RegExp.$1), c.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", 
            a = c.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1;
        }(), P = function(a) {
            return u.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
        }, Q = function(a) {
            window.console && console.log(a);
        }, R = "", S = "", T = function(a, b) {
            b = b || K;
            var c, d, e = b.style;
            if (void 0 !== e[a]) return a;
            for (a = a.charAt(0).toUpperCase() + a.substr(1), c = [ "O", "Moz", "ms", "Ms", "Webkit" ], 
            d = 5; --d > -1 && void 0 === e[c[d] + a]; ) ;
            return d >= 0 ? (S = 3 === d ? "ms" : c[d], R = "-" + S.toLowerCase() + "-", S + a) : null;
        }, U = J.defaultView ? J.defaultView.getComputedStyle : function() {}, V = g.getStyle = function(a, b, c, d, e) {
            var f;
            return O || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || U(a, null)) ? (a = c.getPropertyValue(b.replace(y, "-$1").toLowerCase()), 
            f = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, f = c[b]), 
            null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : P(a);
        }, W = function(a, b, c, d, e) {
            if ("px" === d || !d) return c;
            if ("auto" === d || !c) return 0;
            var f, g = C.test(b), h = a, i = K.style, j = 0 > c;
            return j && (c = -c), "%" === d && -1 !== b.indexOf("border") ? f = c / 100 * (g ? a.clientWidth : a.clientHeight) : (i.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", 
            "%" !== d && h.appendChild ? i[g ? "borderLeftWidth" : "borderTopWidth"] = c + d : (h = a.parentNode || J.body, 
            i[g ? "width" : "height"] = c + d), h.appendChild(K), f = parseFloat(K[g ? "offsetWidth" : "offsetHeight"]), 
            h.removeChild(K), 0 !== f || e || (f = W(a, b, c, d, !0))), j ? -f : f;
        }, X = function(a, b, c) {
            if ("absolute" !== V(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top", e = V(a, "margin" + d, c);
            return a["offset" + d] - (W(a, b, parseFloat(e), e.replace(t, "")) || 0);
        }, Y = function(a, b) {
            var c, d, e = {};
            if (b = b || U(a, null)) if (c = b.length) for (;--c > -1; ) e[b[c].replace(z, B)] = b.getPropertyValue(b[c]); else for (c in b) e[c] = b[c]; else if (b = a.currentStyle || a.style) for (c in b) e[c.replace(z, B)] = b[c];
            return O || (e.opacity = P(a)), d = xb(a, b, !1), e.rotation = d.rotation * H, e.skewX = d.skewX * H, 
            e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, wb && (e.z = d.z, 
            e.rotationX = d.rotationX * H, e.rotationY = d.rotationY * H, e.scaleZ = d.scaleZ), 
            e.filters && delete e.filters, e;
        }, Z = function(a, b, c, d, e) {
            var f, g, h, i = {}, j = a.style;
            for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(s, "") ? f : 0 : X(a, g), 
            void 0 !== j[g] && (h = new lb(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return {
                difs: i,
                firstMPT: h
            };
        }, $ = {
            width: [ "Left", "Right" ],
            height: [ "Top", "Bottom" ]
        }, _ = [ "marginLeft", "marginRight", "marginTop", "marginBottom" ], ab = function(a, b, c) {
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight), e = $[b], f = e.length;
            for (c = c || U(a, null); --f > -1; ) d -= parseFloat(V(a, "padding" + e[f], c, !0)) || 0, 
            d -= parseFloat(V(a, "border" + e[f] + "Width", c, !0)) || 0;
            return d;
        }, bb = function(a, b) {
            (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
            var c = a.split(" "), d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0], e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
            return null == e ? e = "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d))) && (d = "50%"), 
            b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), 
            b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(s, "")), b.oy = parseFloat(e.replace(s, ""))), 
            d + " " + e + (c.length > 2 ? " " + c[2] : "");
        }, cb = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b);
        }, db = function(a, b) {
            return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) + b : parseFloat(a);
        }, eb = function(a, b, c, d) {
            var e, f, g, h, i = 1e-6;
            return null == a ? h = b : "number" == typeof a ? h = a * G : (e = 2 * Math.PI, 
            f = a.split("_"), g = Number(f[0].replace(s, "")) * (-1 === a.indexOf("rad") ? G : 1) - ("=" === a.charAt(1) ? 0 : b), 
            f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), 
            -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), 
            h = b + g), i > h && h > -i && (h = 0), h;
        }, fb = {
            aqua: [ 0, 255, 255 ],
            lime: [ 0, 255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, 255 ],
            navy: [ 0, 0, 128 ],
            white: [ 255, 255, 255 ],
            fuchsia: [ 255, 0, 255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ 255, 255, 0 ],
            orange: [ 255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ 255, 0, 0 ],
            pink: [ 255, 192, 203 ],
            cyan: [ 0, 255, 255 ],
            transparent: [ 255, 255, 255, 0 ]
        }, gb = function(a, b, c) {
            return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5;
        }, hb = function(a) {
            var b, c, d, e, f, g;
            return a && "" !== a ? "number" == typeof a ? [ a >> 16, 255 & a >> 8, 255 & a ] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), 
            fb[a] ? fb[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), 
            d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), 
            [ a >> 16, 255 & a >> 8, 255 & a ]) : "hsl" === a.substr(0, 3) ? (a = a.match(p), 
            e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, 
            b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = gb(e + 1 / 3, b, c), 
            a[1] = gb(e, b, c), a[2] = gb(e - 1 / 3, b, c), a) : (a = a.match(p) || fb.transparent, 
            a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), 
            a)) : fb.black;
        }, ib = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in fb) ib += "|" + i + "\\b";
        ib = new RegExp(ib + ")", "gi");
        var jb = function(a, b, c, d) {
            if (null == a) return function(a) {
                return a;
            };
            var e, f = b ? (a.match(ib) || [ "" ])[0] : "", g = a.split(f).join("").match(r) || [], h = a.substr(0, a.indexOf(g[0])), i = ")" === a.charAt(a.length - 1) ? ")" : "", j = -1 !== a.indexOf(" ") ? " " : ",", k = g.length, l = k > 0 ? g[0].replace(p, "") : "";
            return k ? e = b ? function(a) {
                var b, m, n, o;
                if ("number" == typeof a) a += l; else if (d && F.test(a)) {
                    for (o = a.replace(F, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                    return o.join(",");
                }
                if (b = (a.match(ib) || [ f ])[0], m = a.split(b).join("").match(r) || [], n = m.length, 
                k > n--) for (;++n < k; ) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
            } : function(a) {
                var b, f, m;
                if ("number" == typeof a) a += l; else if (d && F.test(a)) {
                    for (f = a.replace(F, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                    return f.join(",");
                }
                if (b = a.match(r) || [], m = b.length, k > m--) for (;++m < k; ) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                return h + b.join(j) + i;
            } : function(a) {
                return a;
            };
        }, kb = function(a) {
            return a = a.split(","), function(b, c, d, e, f, g, h) {
                var i, j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                return e.parse(b, h, f, g);
            };
        }, lb = (M._setPluginRatio = function(a) {
            this.plugin.setRatio(a);
            for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h; ) b = g[h.v], 
            h.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : i > b && b > -i && (b = 0), h.t[h.p] = b, 
            h = h._next;
            if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a) for (h = f.firstMPT; h; ) {
                if (c = h.t, c.type) {
                    if (1 === c.type) {
                        for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                        c.e = e;
                    }
                } else c.e = c.s + c.xs0;
                h = h._next;
            }
        }, function(a, b, c, d, e) {
            this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d);
        }), mb = (M._parseToProxy = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l = d, m = {}, n = {}, o = c._transform, p = I;
            for (c._transform = null, I = b, d = k = c.parse(a, b, d, e), I = p, f && (c._transform = o, 
            l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l; ) {
                if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new lb(d, "s", h, j, d.r), 
                d.c = 0), 1 === d.type)) for (g = d.l; --g > 0; ) i = "xn" + g, h = d.p + "_" + i, 
                n[h] = d.data[i], m[h] = d[i], f || (j = new lb(d, i, h, j, d.rxp[i]));
                d = d._next;
            }
            return {
                proxy: m,
                end: n,
                firstMPT: j,
                pt: k
            };
        }, M.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
            this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || "css_" + b, a instanceof mb || f.push(this.n), 
            this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, 
            this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this);
        }), nb = g.parseComplex = function(a, b, c, d, e, f, g, h, i, k) {
            c = c || f || "", g = new mb(a, b, 0, 0, g, k ? 2 : 1, null, !1, h, c, d), d += "";
            var l, m, n, o, r, s, t, u, v, w, y, z, A = c.split(", ").join(",").split(" "), B = d.split(", ").join(",").split(" "), C = A.length, D = j !== !1;
            for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(F, ", ").split(" "), 
            B = B.join(" ").replace(F, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), 
            C = A.length), g.plugin = i, g.setRatio = k, l = 0; C > l; l++) if (o = A[l], r = B[l], 
            u = parseFloat(o), u || 0 === u) g.appendXtra("", u, cb(r, u), r.replace(q, ""), D && -1 !== r.indexOf("px"), !0); else if (e && ("#" === o.charAt(0) || fb[o] || x.test(o))) z = "," === r.charAt(r.length - 1) ? ")," : ")", 
            o = hb(o), r = hb(r), v = o.length + r.length > 6, v && !O && 0 === r[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", 
            g.e = g.e.split(B[l]).join("transparent")) : (O || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], r[0] - o[0], ",", !0, !0).appendXtra("", o[1], r[1] - o[1], ",", !0).appendXtra("", o[2], r[2] - o[2], v ? "," : z, !0), 
            v && (o = o.length < 4 ? 1 : o[3], g.appendXtra("", o, (r.length < 4 ? 1 : r[3]) - o, z, !1))); else if (s = o.match(p)) {
                if (t = r.match(q), !t || t.length !== s.length) return g;
                for (n = 0, m = 0; m < s.length; m++) y = s[m], w = o.indexOf(y, n), g.appendXtra(o.substr(n, w - n), Number(y), cb(t[m], y), "", D && "px" === o.substr(w + y.length, 2), 0 === m), 
                n = w + y.length;
                g["xs" + g.l] += o.substr(n);
            } else g["xs" + g.l] += g.l ? " " + o : o;
            if (-1 !== d.indexOf("=") && g.data) {
                for (z = g.xs0 + g.data.s, l = 1; l < g.l; l++) z += g["xs" + l] + g.data["xn" + l];
                g.e = z + g["xs" + l];
            }
            return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g;
        }, ob = 9;
        for (i = mb.prototype, i.l = i.pr = 0; --ob > 0; ) i["xn" + ob] = 0, i["xs" + ob] = "";
        i.xs0 = "", i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio = i.rxp = null, 
        i.appendXtra = function(a, b, c, d, e, f) {
            var g = this, h = g.l;
            return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, 
            g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, 
            g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new mb(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), 
            g.xfirst.xs0 = 0), g) : (g.data = {
                s: b + c
            }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g);
        };
        var pb = function(a, b) {
            b = b || {}, this.p = b.prefix ? T(a) || a : a, h[a] = h[this.p] = this, this.format = b.formatter || jb(b.defaultValue, b.color, b.collapsible, b.multi), 
            b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, 
            this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0;
        }, qb = M._registerComplexSpecialProp = function(a, b, c) {
            "object" != typeof b && (b = {
                parser: c
            });
            var d, e, f = a.split(","), g = b.defaultValue;
            for (c = c || [ g ], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, 
            e = new pb(f[d], b);
        }, rb = function(a) {
            if (!h[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                qb(a, {
                    parser: function(a, c, d, e, f, g, i) {
                        var j = (window.GreenSockGlobals || window).com.greensock.plugins[b];
                        return j ? (j._cssRegister(), h[d].parse(a, c, d, e, f, g, i)) : (Q("Error: " + b + " js file not loaded."), 
                        f);
                    }
                });
            }
        };
        i = pb.prototype, i.parseComplex = function(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m = this.keyword;
            if (this.multi && (F.test(c) || F.test(b) ? (h = b.replace(F, "|").split("|"), i = c.replace(F, "|").split("|")) : m && (h = [ b ], 
            i = [ c ])), i) {
                for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, 
                c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, 
                c[g] += " " + m));
                b = h.join(", "), c = i.join(", ");
            }
            return nb(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }, i.parse = function(a, b, c, d, f, g) {
            return this.parseComplex(a.style, this.format(V(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
        }, g.registerSpecialProp = function(a, b, c) {
            qb(a, {
                parser: function(a, d, e, f, g, h) {
                    var i = new mb(a, e, 0, 0, g, 2, e, !1, c);
                    return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i;
                },
                priority: c
            });
        };
        var sb = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","), tb = T("transform"), ub = R + "transform", vb = T("transformOrigin"), wb = null !== T("perspective"), xb = function(a, b, c) {
            var d, e, f, h, i, j, k, l, m, n, o, p, q, r = c ? a._gsTransform || {
                skewY: 0
            } : {
                skewY: 0
            }, s = r.scaleX < 0, t = 2e-5, u = 1e5, v = -Math.PI + 1e-4, w = Math.PI - 1e-4, x = wb ? parseFloat(V(a, vb, b, !1, "0 0 0").split(" ")[2]) || r.zOrigin || 0 : 0;
            if (tb) d = V(a, ub, b, !0); else if (a.currentStyle) if (d = a.currentStyle.filter.match(D), 
            d && 4 === d.length) d = [ d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), r.x || 0, r.y || 0 ].join(","); else {
                if (null != r.x) return r;
                d = "";
            }
            for (e = (d || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], f = e.length; --f > -1; ) h = Number(e[f]), 
            e[f] = (i = h - (h |= 0)) ? (0 | i * u + (0 > i ? -.5 : .5)) / u + h : h;
            if (16 === e.length) {
                var y = e[8], z = e[9], A = e[10], B = e[12], C = e[13], E = e[14];
                if (r.zOrigin && (E = -r.zOrigin, B = y * E - e[12], C = z * E - e[13], E = A * E + r.zOrigin - e[14]), 
                !c || null == r.rotationX) {
                    var F, G, H, I, J, K, L, M = e[0], N = e[1], O = e[2], P = e[3], Q = e[4], R = e[5], S = e[6], T = e[7], U = e[11], W = r.rotationX = Math.atan2(S, A), X = v > W || W > w;
                    W && (I = Math.cos(-W), J = Math.sin(-W), F = Q * I + y * J, G = R * I + z * J, 
                    H = S * I + A * J, y = Q * -J + y * I, z = R * -J + z * I, A = S * -J + A * I, U = T * -J + U * I, 
                    Q = F, R = G, S = H), W = r.rotationY = Math.atan2(y, M), W && (K = v > W || W > w, 
                    I = Math.cos(-W), J = Math.sin(-W), F = M * I - y * J, G = N * I - z * J, H = O * I - A * J, 
                    z = N * J + z * I, A = O * J + A * I, U = P * J + U * I, M = F, N = G, O = H), W = r.rotation = Math.atan2(N, R), 
                    W && (L = v > W || W > w, I = Math.cos(-W), J = Math.sin(-W), M = M * I + Q * J, 
                    G = N * I + R * J, R = N * -J + R * I, S = O * -J + S * I, N = G), L && X ? r.rotation = r.rotationX = 0 : L && K ? r.rotation = r.rotationY = 0 : K && X && (r.rotationY = r.rotationX = 0), 
                    r.scaleX = (0 | Math.sqrt(M * M + N * N) * u + .5) / u, r.scaleY = (0 | Math.sqrt(R * R + z * z) * u + .5) / u, 
                    r.scaleZ = (0 | Math.sqrt(S * S + A * A) * u + .5) / u, r.skewX = 0, r.perspective = U ? 1 / (0 > U ? -U : U) : 0, 
                    r.x = B, r.y = C, r.z = E;
                }
            } else if (!(wb && 0 !== e.length && r.x === e[4] && r.y === e[5] && (r.rotationX || r.rotationY) || void 0 !== r.x && "none" === V(a, "display", b))) {
                var Y = e.length >= 6, Z = Y ? e[0] : 1, $ = e[1] || 0, _ = e[2] || 0, ab = Y ? e[3] : 1;
                r.x = e[4] || 0, r.y = e[5] || 0, j = Math.sqrt(Z * Z + $ * $), k = Math.sqrt(ab * ab + _ * _), 
                l = Z || $ ? Math.atan2($, Z) : r.rotation || 0, m = _ || ab ? Math.atan2(_, ab) + l : r.skewX || 0, 
                n = j - Math.abs(r.scaleX || 0), o = k - Math.abs(r.scaleY || 0), Math.abs(m) > Math.PI / 2 && Math.abs(m) < 1.5 * Math.PI && (s ? (j *= -1, 
                m += 0 >= l ? Math.PI : -Math.PI, l += 0 >= l ? Math.PI : -Math.PI) : (k *= -1, 
                m += 0 >= m ? Math.PI : -Math.PI)), p = (l - r.rotation) % Math.PI, q = (m - r.skewX) % Math.PI, 
                (void 0 === r.skewX || n > t || -t > n || o > t || -t > o || p > v && w > p && p * u | !1 || q > v && w > q && q * u | !1) && (r.scaleX = j, 
                r.scaleY = k, r.rotation = l, r.skewX = m), wb && (r.rotationX = r.rotationY = r.z = 0, 
                r.perspective = parseFloat(g.defaultTransformPerspective) || 0, r.scaleZ = 1);
            }
            r.zOrigin = x;
            for (f in r) r[f] < t && r[f] > -t && (r[f] = 0);
            return c && (a._gsTransform = r), r;
        }, yb = function(a) {
            var b, c, d = this.data, e = -d.rotation, f = e + d.skewX, g = 1e5, h = (0 | Math.cos(e) * d.scaleX * g) / g, i = (0 | Math.sin(e) * d.scaleX * g) / g, j = (0 | Math.sin(f) * -d.scaleY * g) / g, k = (0 | Math.cos(f) * d.scaleY * g) / g, l = this.t.style, m = this.t.currentStyle;
            if (m) {
                c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                var n, p, q = this.t.offsetWidth, r = this.t.offsetHeight, s = "absolute" !== m.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k, w = d.x, x = d.y;
                if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, p = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, 
                w += n - (n * h + p * i), x += p - (n * j + p * k)), s) n = q / 2, p = r / 2, v += ", Dx=" + (n - (n * h + p * i) + w) + ", Dy=" + (p - (n * j + p * k) + x) + ")"; else {
                    var y, z, A, B = 8 > o ? 1 : -1;
                    for (n = d.ieOffsetX || 0, p = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), 
                    d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), 
                    ob = 0; 4 > ob; ob++) z = _[ob], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : W(this.t, z, parseFloat(y), y.replace(t, "")) || 0, 
                    A = c !== d[z] ? 2 > ob ? -d.ieOffsetX : -d.ieOffsetY : 2 > ob ? n - d.ieOffsetX : p - d.ieOffsetY, 
                    l[z] = (d[z] = Math.round(c - A * (0 === ob || 2 === ob ? 1 : B))) + "px";
                    v += ", sizingMethod='auto expand')";
                }
                l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(E, v) : v + " " + b, 
                (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === v.indexOf("Dx=0, Dy=0") || u.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf("gradient(") && l.removeAttribute("filter"));
            }
        }, zb = function() {
            var a, b, c, d, e, f, g, h, i, j = this.data, k = this.t.style, l = j.perspective, n = j.scaleX, o = 0, p = 0, q = 0, r = 0, s = j.scaleY, t = 0, u = 0, v = 0, w = 0, x = j.scaleZ, y = 0, z = 0, A = 0, B = l ? -1 / l : 0, C = j.rotation, D = j.zOrigin, E = 1e5;
            m && (g = k.top ? "top" : k.bottom ? "bottom" : parseFloat(V(this.t, "top", null, !1)) ? "bottom" : "top", 
            c = V(this.t, g, null, !1), h = parseFloat(c) || 0, i = c.substr((h + "").length) || "px", 
            j._ffFix = !j._ffFix, k[g] = (j._ffFix ? h + .05 : h - .05) + i), (C || j.skewX) && (c = n * Math.cos(C), 
            d = s * Math.sin(C), C -= j.skewX, o = n * -Math.sin(C), s *= Math.cos(C), n = c, 
            r = d), C = j.rotationY, C && (a = Math.cos(C), b = Math.sin(C), c = n * a, d = r * a, 
            e = x * -b, f = B * -b, p = n * b, t = r * b, x *= a, B *= a, n = c, r = d, v = e, 
            z = f), C = j.rotationX, C && (a = Math.cos(C), b = Math.sin(C), c = o * a + p * b, 
            d = s * a + t * b, e = w * a + x * b, f = A * a + B * b, p = o * -b + p * a, t = s * -b + t * a, 
            x = w * -b + x * a, B = A * -b + B * a, o = c, s = d, w = e, A = f), D && (y -= D, 
            q = p * y, u = t * y, y = x * y + D), q = (c = (q += j.x) - (q |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + q : q, 
            u = (c = (u += j.y) - (u |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + u : u, 
            y = (c = (y += j.z) - (y |= 0)) ? (0 | c * E + (0 > c ? -.5 : .5)) / E + y : y, 
            k[tb] = "matrix3d(" + [ (0 | n * E) / E, (0 | r * E) / E, (0 | v * E) / E, (0 | z * E) / E, (0 | o * E) / E, (0 | s * E) / E, (0 | w * E) / E, (0 | A * E) / E, (0 | p * E) / E, (0 | t * E) / E, (0 | x * E) / E, (0 | B * E) / E, q, u, y, l ? 1 + -y / l : 1 ].join(",") + ")";
        }, Ab = function() {
            var a, b, c, d, e, f, g, h, i, j = this.data, k = this.t, l = k.style;
            m && (a = l.top ? "top" : l.bottom ? "bottom" : parseFloat(V(k, "top", null, !1)) ? "bottom" : "top", 
            b = V(k, a, null, !1), c = parseFloat(b) || 0, d = b.substr((c + "").length) || "px", 
            j._ffFix = !j._ffFix, l[a] = (j._ffFix ? c + .05 : c - .05) + d), j.rotation || j.skewX ? (e = j.rotation, 
            f = e - j.skewX, g = 1e5, h = j.scaleX * g, i = j.scaleY * g, l[tb] = "matrix(" + (0 | Math.cos(e) * h) / g + "," + (0 | Math.sin(e) * h) / g + "," + (0 | Math.sin(f) * -i) / g + "," + (0 | Math.cos(f) * i) / g + "," + j.x + "," + j.y + ")") : l[tb] = "matrix(" + j.scaleX + ",0,0," + j.scaleY + "," + j.x + "," + j.y + ")";
        };
        qb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(a, b, c, d, f, g, h) {
                if (d._transform) return f;
                var i, j, k, l, m, n, o, p = d._transform = xb(a, e, !0), q = a.style, r = 1e-6, s = sb.length, t = h, u = {};
                if ("string" == typeof t.transform && tb) k = q.cssText, q[tb] = t.transform, q.display = "block", 
                i = xb(a, null, !1), q.cssText = k; else if ("object" == typeof t) {
                    if (i = {
                        scaleX: db(null != t.scaleX ? t.scaleX : t.scale, p.scaleX),
                        scaleY: db(null != t.scaleY ? t.scaleY : t.scale, p.scaleY),
                        scaleZ: db(null != t.scaleZ ? t.scaleZ : t.scale, p.scaleZ),
                        x: db(t.x, p.x),
                        y: db(t.y, p.y),
                        z: db(t.z, p.z),
                        perspective: db(t.transformPerspective, p.perspective)
                    }, o = t.directionalRotation, null != o) if ("object" == typeof o) for (k in o) t[k] = o[k]; else t.rotation = o;
                    i.rotation = eb("rotation" in t ? t.rotation : "shortRotation" in t ? t.shortRotation + "_short" : "rotationZ" in t ? t.rotationZ : p.rotation * H, p.rotation, "rotation", u), 
                    wb && (i.rotationX = eb("rotationX" in t ? t.rotationX : "shortRotationX" in t ? t.shortRotationX + "_short" : p.rotationX * H || 0, p.rotationX, "rotationX", u), 
                    i.rotationY = eb("rotationY" in t ? t.rotationY : "shortRotationY" in t ? t.shortRotationY + "_short" : p.rotationY * H || 0, p.rotationY, "rotationY", u)), 
                    i.skewX = null == t.skewX ? p.skewX : eb(t.skewX, p.skewX), i.skewY = null == t.skewY ? p.skewY : eb(t.skewY, p.skewY), 
                    (j = i.skewY - p.skewY) && (i.skewX += j, i.rotation += j);
                }
                for (m = p.z || p.rotationX || p.rotationY || i.z || i.rotationX || i.rotationY || i.perspective, 
                m || null == t.scale || (i.scaleZ = 1); --s > -1; ) c = sb[s], l = i[c] - p[c], 
                (l > r || -r > l || null != I[c]) && (n = !0, f = new mb(p, c, p[c], l, f), c in u && (f.e = u[c]), 
                f.xs0 = 0, f.plugin = g, d._overwriteProps.push(f.n));
                return l = t.transformOrigin, (l || wb && m && p.zOrigin) && (tb ? (n = !0, l = (l || V(a, c, e, !1, "50% 50%")) + "", 
                c = vb, f = new mb(q, c, 0, 0, f, -1, "css_transformOrigin"), f.b = q[c], f.plugin = g, 
                wb ? (k = p.zOrigin, l = l.split(" "), p.zOrigin = (l.length > 2 ? parseFloat(l[2]) : k) || 0, 
                f.xs0 = f.e = q[c] = l[0] + " " + (l[1] || "50%") + " 0px", f = new mb(p, "zOrigin", 0, 0, f, -1, f.n), 
                f.b = k, f.xs0 = f.e = p.zOrigin) : f.xs0 = f.e = q[c] = l) : bb(l + "", p)), n && (d._transformType = m || 3 === this._transformType ? 3 : 2), 
                f;
            },
            prefix: !0
        }), qb("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), qb("borderRadius", {
            defaultValue: "0px",
            parser: function(a, b, c, f, g) {
                b = this.format(b);
                var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = [ "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius" ], y = a.style;
                for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), 
                i = 0; i < x.length; i++) this.p.indexOf("border") && (x[i] = T(x[i])), l = k = V(a, x[i], e, !1, "0px"), 
                -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), 
                s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), 
                m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), 
                r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = W(a, "borderLeft", n, s), 
                v = W(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = W(a, "borderLeft", 1, "em"), 
                l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, 
                j = parseFloat(k) + o + r)), g = nb(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                return g;
            },
            prefix: !0,
            formatter: jb("0px 0px 0px 0px", !1, !0)
        }), qb("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, c, d, f, g) {
                var h, i, j, k, l, m, n = "background-position", p = e || U(a, null), q = this.format((p ? o ? p.getPropertyValue(n + "-x") + " " + p.getPropertyValue(n + "-y") : p.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"), r = this.format(b);
                if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = V(a, "backgroundImage").replace(A, ""), 
                m && "none" !== m)) {
                    for (h = q.split(" "), i = r.split(" "), L.setAttribute("src", m), j = 2; --j > -1; ) q = h[j], 
                    k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - L.width : a.offsetHeight - L.height, 
                    h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                    q = h.join(" ");
                }
                return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: bb
        }), qb("backgroundSize", {
            defaultValue: "0 0",
            formatter: bb
        }), qb("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), qb("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), qb("transformStyle", {
            prefix: !0
        }), qb("backfaceVisibility", {
            prefix: !0
        }), qb("margin", {
            parser: kb("marginTop,marginRight,marginBottom,marginLeft")
        }), qb("padding", {
            parser: kb("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), qb("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a, b, c, d, f, g) {
                var h, i, j;
                return 9 > o ? (i = a.currentStyle, j = 8 > o ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", 
                b = this.format(b).split(",").join(j)) : (h = this.format(V(a, this.p, e, !1, this.dflt)), 
                b = this.format(b)), this.parseComplex(a.style, h, b, f, g);
            }
        }), qb("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), qb("autoRound,strictUnits", {
            parser: function(a, b, c, d, e) {
                return e;
            }
        }), qb("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, c, d, f, g) {
                return this.parseComplex(a.style, this.format(V(a, "borderTopWidth", e, !1, "0px") + " " + V(a, "borderTopStyle", e, !1, "solid") + " " + V(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g);
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(ib) || [ "#000" ])[0];
            }
        }), qb("float,cssFloat,styleFloat", {
            parser: function(a, b, c, d, e) {
                var f = a.style, g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                return new mb(f, g, 0, 0, e, -1, c, !1, 0, f[g], b);
            }
        });
        var Bb = function(a) {
            var b, c = this.t, d = c.filter, e = 0 | this.s + this.c * a;
            100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") ? (c.removeAttribute("filter"), 
            b = !V(this.data, "filter")) : (c.filter = d.replace(w, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=100)"), 
            -1 === d.indexOf("opacity") ? c.filter += " alpha(opacity=" + e + ")" : c.filter = d.replace(u, "opacity=" + e));
        };
        qb("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a, b, c, d, f, g) {
                var h, i = parseFloat(V(a, "opacity", e, !1, "1")), j = a.style;
                return b = parseFloat(b), "autoAlpha" === c && (h = V(a, "visibility", e), 1 === i && "hidden" === h && 0 !== b && (i = 0), 
                f = new mb(j, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== i ? "visible" : "hidden", 0 === b ? "hidden" : "visible"), 
                f.xs0 = "visible", d._overwriteProps.push(f.n)), O ? f = new mb(j, "opacity", i, b - i, f) : (f = new mb(j, "opacity", 100 * i, 100 * (b - i), f), 
                f.xn1 = "autoAlpha" === c ? 1 : 0, j.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", 
                f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Bb), 
                f;
            }
        });
        var Cb = function(a, b) {
            b && (a.removeProperty ? a.removeProperty(b.replace(y, "-$1").toLowerCase()) : a.removeAttribute(b));
        }, Db = function(a) {
            if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                this.t.className = 0 === a ? this.b : this.e;
                for (var b = this.data, c = this.t.style; b; ) b.v ? c[b.p] = b.v : Cb(c, b.p), 
                b = b._next;
                1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
            } else this.t.className !== this.e && (this.t.className = this.e);
        };
        qb("className", {
            parser: function(a, b, d, f, g, h, i) {
                var j, k, l, m, n, o = a.className, p = a.style.cssText;
                if (g = f._classNamePT = new mb(a, d, 0, 0, g, 2), g.setRatio = Db, g.pr = -11, 
                c = !0, g.b = o, k = Y(a, e), l = a._gsClassPT) {
                    for (m = {}, n = l.data; n; ) m[n.p] = 1, n = n._next;
                    l.setRatio(1);
                }
                return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), 
                f._tween._duration && (a.className = g.e, j = Z(a, k, Y(a), i, m), a.className = o, 
                g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), 
                g;
            }
        });
        var Eb = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration) for (var b, c = "all" === this.e, d = this.t.style, e = c ? d.cssText.split(";") : this.e.split(","), f = e.length, g = h.transform.parse; --f > -1; ) b = e[f], 
            c && (b = b.substr(0, b.indexOf(":")).split(" ").join("")), h[b] && (b = h[b].parse === g ? tb : h[b].p), 
            Cb(d, b);
        };
        for (qb("clearProps", {
            parser: function(a, b, d, e, f) {
                return f = new mb(a, d, 0, 0, f, 2), f.setRatio = Eb, f.e = b, f.pr = -10, f.data = e._tween, 
                c = !0, f;
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(","), ob = i.length; ob--; ) rb(i[ob]);
        i = g.prototype, i._firstPT = null, i._onInitTween = function(a, b, h) {
            if (!a.nodeType) return !1;
            this._target = a, this._tween = h, this._vars = b, j = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, 
            e = U(a, ""), f = this._overwriteProps;
            var i, m, o, p, q, r, s, t, u, w = a.style;
            if (k && "" === w.zIndex && (i = V(a, "zIndex", e), ("auto" === i || "" === i) && (w.zIndex = 0)), 
            "string" == typeof b && (p = w.cssText, i = Y(a, e), w.cssText = p + ";" + b, i = Z(a, i, Y(a)).difs, 
            !O && v.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, w.cssText = p), this._firstPT = m = this.parse(a, b, null), 
            this._transformType) {
                for (u = 3 === this._transformType, tb ? l && (k = !0, "" === w.zIndex && (s = V(a, "zIndex", e), 
                ("auto" === s || "" === s) && (w.zIndex = 0)), n && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : w.zoom = 1, 
                o = m; o && o._next; ) o = o._next;
                t = new mb(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, o), t.setRatio = u && wb ? zb : tb ? Ab : yb, 
                t.data = this._transform || xb(a, e, !0), f.pop();
            }
            if (c) {
                for (;m; ) {
                    for (r = m._next, o = p; o && o.pr > m.pr; ) o = o._next;
                    (m._prev = o ? o._prev : q) ? m._prev._next = m : p = m, (m._next = o) ? o._prev = m : q = m, 
                    m = r;
                }
                this._firstPT = p;
            }
            return !0;
        }, i.parse = function(a, b, c, f) {
            var g, i, k, l, m, n, o, p, q, r, s = a.style;
            for (g in b) n = b[g], i = h[g], i ? c = i.parse(a, n, g, this, c, f, b) : (m = V(a, g, e) + "", 
            q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && x.test(n) ? (q || (n = hb(n), 
            n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = nb(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (k = parseFloat(m), 
            o = k || 0 === k ? m.substr((k + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (k = ab(a, g, e), 
            o = "px") : "left" === g || "top" === g ? (k = X(a, g, e), o = "px") : (k = "opacity" !== g ? 0 : 1, 
            o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), 
            n = n.substr(2), l *= parseFloat(n), p = n.replace(t, "")) : (l = parseFloat(n), 
            p = q ? n.substr((l + "").length) || "" : ""), "" === p && (p = d[g] || o), n = l || 0 === l ? (r ? l + k : l) + p : b[g], 
            o !== p && "" !== p && (l || 0 === l) && (k || 0 === k) && (k = W(a, g, k, o), "%" === p ? (k /= W(a, g, 100, "%") / 100, 
            k > 100 && (k = 100), b.strictUnits !== !0 && (m = k + "%")) : "em" === p ? k /= W(a, g, 1, "em") : (l = W(a, g, l, p), 
            p = "px"), r && (l || 0 === l) && (n = l + k + p)), r && (l += k), !k && 0 !== k || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new mb(s, g, l || k || 0, 0, c, -1, "css_" + g, !1, 0, m, n), 
            c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : Q("invalid " + g + " tween value: " + b[g]) : (c = new mb(s, g, k, l - k, c, 0, "css_" + g, j !== !1 && ("px" === p || "zIndex" === g), 0, m, n), 
            c.xs0 = p)) : c = nb(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
            return c;
        }, i.setRatio = function(a) {
            var b, c, d, e = this._firstPT, f = 1e-6;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (;e; ) {
                if (b = e.c * a + e.s, e.r ? b = b > 0 ? 0 | b + .5 : 0 | b - .5 : f > b && b > -f && (b = 0), 
                e.type) if (1 === e.type) if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2; else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3; else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4; else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5; else {
                    for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                    e.t[e.p] = c;
                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a); else e.t[e.p] = b + e.xs0;
                e = e._next;
            } else for (;e; ) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next; else for (;e; ) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), 
            e = e._next;
        }, i._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
        }, i._linkCSSP = function(a, b, c, d) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), 
            a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next), 
            a._next = b, a._prev = c), a;
        }, i._kill = function(b) {
            var c, d, e, f = b;
            if (b.css_autoAlpha || b.css_alpha) {
                f = {};
                for (d in b) f[d] = b[d];
                f.css_opacity = 1, f.css_autoAlpha && (f.css_visibility = 1);
            }
            return b.css_className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), 
            c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), 
            a.prototype._kill.call(this, f);
        };
        var Fb = function(a, b, c) {
            var d, e, f, g;
            if (a.slice) for (e = a.length; --e > -1; ) Fb(a[e], b, c); else for (d = a.childNodes, 
            e = d.length; --e > -1; ) f = d[e], g = f.type, f.style && (b.push(Y(f)), c && c.push(f)), 
            1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Fb(f, b, c);
        };
        return g.cascadeTo = function(a, c, d) {
            var e, f, g, h = b.to(a, c, d), i = [ h ], j = [], k = [], l = [], m = b._internals.reservedProps;
            for (a = h._targets || h.target, Fb(a, j, l), h.render(c, !0), Fb(a, k), h.render(0, !0), 
            h._enabled(!0), e = l.length; --e > -1; ) if (f = Z(l[e], j[e], k[e]), f.firstMPT) {
                f = f.difs;
                for (g in d) m[g] && (f[g] = d[g]);
                i.push(b.to(l[e], c, f));
            }
            return i;
        }, a.activate([ g ]), g;
    }, !0), function() {
        var a = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(a, b, c) {
                return this._tween = c, !0;
            }
        }), b = a.prototype;
        b._onInitAllProps = function() {
            for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1; ) g[e[f]] = 1;
            for (f = e.length; --f > -1; ) for (a = e[f], b = d._firstPT; b; ) c = b._next, 
            b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), 
            b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, 
            d._propLookup[a] = h), b = c;
            return !1;
        }, b._add = function(a, b, c, d) {
            this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b);
        };
    }(), window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(a, b) {
            var c;
            if ("function" != typeof a.setAttribute) return !1;
            this._target = a, this._proxy = {};
            for (c in b) this._addTween(this._proxy, c, parseFloat(a.getAttribute(c)), b[c], c), 
            this._overwriteProps.push(c);
            return !0;
        },
        set: function(a) {
            this._super.setRatio.call(this, a);
            for (var b, c = this._overwriteProps, d = c.length; --d > -1; ) b = c[d], this._target.setAttribute(b, this._proxy[b] + "");
        }
    }), window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(a, b) {
            "object" != typeof b && (b = {
                rotation: b
            }), this.finals = {};
            var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360, j = 1e-6;
            for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), 
            f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, 
            g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), 
            -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (0 | g / i) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (0 | g / i) * i)), 
            (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
            return !0;
        },
        set: function(a) {
            var b;
            if (1 !== a) this._super.setRatio.call(this, a); else for (b = this._firstPT; b; ) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], 
            b = b._next;
        }
    })._autoCSS = !0, window._gsDefine("easing.Back", [ "easing.Ease" ], function(a) {
        var b, c, d, e = window.GreenSockGlobals || window, f = e.com.greensock, g = 2 * Math.PI, h = Math.PI / 2, i = f._class, j = function(b, c) {
            var d = i("easing." + b, function() {}, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, d;
        }, k = a.register || function() {}, l = function(a, b, c, d) {
            var e = i("easing." + a, {
                easeOut: new b(),
                easeIn: new c(),
                easeInOut: new d()
            }, !0);
            return k(e, a), e;
        }, m = function(a, b, c) {
            this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a);
        }, n = function(b, c) {
            var d = i("easing." + b, function(a) {
                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1;
            }, !0), e = d.prototype = new a();
            return e.constructor = d, e.getRatio = c, e.config = function(a) {
                return new d(a);
            }, d;
        }, o = l("Back", n("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
        }), n("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
        }), n("BackInOut", function(a) {
            return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
        })), p = i("easing.SlowMo", function(a, b, c) {
            b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, 
            this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0;
        }, !0), q = p.prototype = new a();
        return q.constructor = p, q.getRatio = function(a) {
            var b = a + (.5 - a) * this._p;
            return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b;
        }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
            return new p(a, b, c);
        }, b = i("easing.SteppedEase", function(a) {
            a = a || 1, this._p1 = 1 / a, this._p2 = a + 1;
        }, !0), q = b.prototype = new a(), q.constructor = b, q.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1;
        }, q.config = b.config = function(a) {
            return new b(a);
        }, c = i("easing.RoughEase", function(b) {
            b = b || {};
            for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1; ) c = o ? Math.random() : 1 / l * n, 
            d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, 
            e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, 
            p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                x: c,
                y: d
            };
            for (j.sort(function(a, b) {
                return a.x - b.x;
            }), h = new m(1, 1, null), n = l; --n > -1; ) g = j[n], h = new m(g.x, g.y, h);
            this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
        }, !0), q = c.prototype = new a(), q.constructor = c, q.getRatio = function(a) {
            var b = this._prev;
            if (a > b.t) {
                for (;b.next && a >= b.t; ) b = b.next;
                b = b.prev;
            } else for (;b.prev && a <= b.t; ) b = b.prev;
            return this._prev = b, b.v + (a - b.t) / b.gap * b.c;
        }, q.config = function(a) {
            return new c(a);
        }, c.ease = new c(), l("Bounce", j("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
        }), j("BounceIn", function(a) {
            return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375);
        }), j("BounceInOut", function(a) {
            var b = .5 > a;
            return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, 
            b ? .5 * (1 - a) : .5 * a + .5;
        })), l("Circ", j("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a);
        }), j("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1);
        }), j("CircInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
        })), d = function(b, c, d) {
            var e = i("easing." + b, function(a, b) {
                this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0);
            }, !0), f = e.prototype = new a();
            return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                return new e(a, b);
            }, e;
        }, l("Elastic", d("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1;
        }, .3), d("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2));
        }, .3), d("ElasticInOut", function(a) {
            return (a *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1;
        }, .45)), l("Expo", j("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a);
        }), j("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - .001;
        }), j("ExpoInOut", function(a) {
            return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)));
        })), l("Sine", j("SineOut", function(a) {
            return Math.sin(a * h);
        }), j("SineIn", function(a) {
            return -Math.cos(a * h) + 1;
        }), j("SineInOut", function(a) {
            return -.5 * (Math.cos(Math.PI * a) - 1);
        })), i("easing.EaseLookup", {
            find: function(b) {
                return a.map[b];
            }
        }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), 
        o;
    }, !0);
}), function(a) {
    "use strict";
    var b, c, d, e, f, g = a.GreenSockGlobals || a, h = function(a) {
        var b, c = a.split("."), d = g;
        for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
        return d;
    }, i = h("com.greensock"), j = [].slice, k = function() {}, l = {}, m = function(b, c, d, e) {
        this.sc = l[b] ? l[b].sc : [], l[b] = this, this.gsClass = null, this.func = d;
        var f = [];
        this.check = function(i) {
            for (var j, k, n, o, p = c.length, q = p; --p > -1; ) (j = l[c[p]] || new m(c[p], [])).gsClass ? (f[p] = j.gsClass, 
            q--) : i && j.sc.push(this);
            if (0 === q && d) for (k = ("com.greensock." + b).split("."), n = k.pop(), o = h(k.join("."))[n] = this.gsClass = d.apply(d, f), 
            e && (g[n] = o, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + b.split(".").join("/"), [], function() {
                return o;
            }) : "undefined" != typeof module && module.exports && (module.exports = o)), p = 0; p < this.sc.length; p++) this.sc[p].check();
        }, this.check(!0);
    }, n = a._gsDefine = function(a, b, c, d) {
        return new m(a, b, c, d);
    }, o = i._class = function(a, b, c) {
        return b = b || function() {}, n(a, [], function() {
            return b;
        }, c), b;
    };
    n.globals = g;
    var p = [ 0, 0, 1, 1 ], q = [], r = o("easing.Ease", function(a, b, c, d) {
        this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? p.concat(b) : p;
    }, !0), s = r.map = {}, t = r.register = function(a, b, c, d) {
        for (var e, f, g, h, j = b.split(","), k = j.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1; ) for (f = j[k], 
        e = d ? o("easing." + f, null, !0) : i.easing[f] || {}, g = l.length; --g > -1; ) h = l[g], 
        s[f + "." + h] = s[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
    };
    for (d = r.prototype, d._calcEnd = !1, d.getRatio = function(a) {
        if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
        var b = this._type, c = this._power, d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
        return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 
        1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
    }, b = [ "Linear", "Quad", "Cubic", "Quart", "Quint,Strong" ], c = b.length; --c > -1; ) d = b[c] + ",Power" + c, 
    t(new r(null, null, 1, c), d, "easeOut", !0), t(new r(null, null, 2, c), d, "easeIn" + (0 === c ? ",easeNone" : "")), 
    t(new r(null, null, 3, c), d, "easeInOut");
    s.linear = i.easing.Linear.easeIn, s.swing = i.easing.Quad.easeInOut;
    var u = o("events.EventDispatcher", function(a) {
        this._listeners = {}, this._eventTarget = a || this;
    });
    d = u.prototype, d.addEventListener = function(a, b, c, d, g) {
        g = g || 0;
        var h, i, j = this._listeners[a], k = 0;
        for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1; ) h = j[i], 
        h.c === b && h.s === c ? j.splice(i, 1) : 0 === k && h.pr < g && (k = i + 1);
        j.splice(k, 0, {
            c: b,
            s: c,
            up: d,
            pr: g
        }), this !== e || f || e.wake();
    }, d.removeEventListener = function(a, b) {
        var c, d = this._listeners[a];
        if (d) for (c = d.length; --c > -1; ) if (d[c].c === b) return d.splice(c, 1), void 0;
    }, d.dispatchEvent = function(a) {
        var b, c, d, e = this._listeners[a];
        if (e) for (b = e.length, c = this._eventTarget; --b > -1; ) d = e[b], d.up ? d.c.call(d.s || c, {
            type: a,
            target: c
        }) : d.c.call(d.s || c);
    };
    var v = a.requestAnimationFrame, w = a.cancelAnimationFrame, x = Date.now || function() {
        return new Date().getTime();
    };
    for (b = [ "ms", "moz", "webkit", "o" ], c = b.length; --c > -1 && !v; ) v = a[b[c] + "RequestAnimationFrame"], 
    w = a[b[c] + "CancelAnimationFrame"] || a[b[c] + "CancelRequestAnimationFrame"];
    o("Ticker", function(a, b) {
        var c, d, g, h, i, j = this, l = x(), m = b !== !1 && v, n = function(a) {
            j.time = (x() - l) / 1e3;
            var b = g, e = j.time - i;
            (!c || e > 0 || a === !0) && (j.frame++, i += e + (e >= h ? .004 : h - e), j.dispatchEvent("tick")), 
            a !== !0 && b === g && (g = d(n));
        };
        u.call(j), this.time = this.frame = 0, this.tick = function() {
            n(!0);
        }, this.sleep = function() {
            null != g && (m && w ? w(g) : clearTimeout(g), d = k, g = null, j === e && (f = !1));
        }, this.wake = function() {
            null !== g && j.sleep(), d = 0 === c ? k : m && v ? v : function(a) {
                return setTimeout(a, 0 | 1e3 * (i - j.time) + 1);
            }, j === e && (f = !0), n(2);
        }, this.fps = function(a) {
            return arguments.length ? (c = a, h = 1 / (c || 60), i = this.time + h, j.wake(), 
            void 0) : c;
        }, this.useRAF = function(a) {
            return arguments.length ? (j.sleep(), m = a, j.fps(c), void 0) : m;
        }, j.fps(a), setTimeout(function() {
            m && (!g || j.frame < 5) && j.useRAF(!1);
        }, 1500);
    }), d = i.Ticker.prototype = new i.events.EventDispatcher(), d.constructor = i.Ticker;
    var y = o("core.Animation", function(a, b) {
        if (this.vars = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(this.vars.delay) || 0, 
        this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, 
        this._reversed = this.vars.reversed === !0, K) {
            f || e.wake();
            var c = this.vars.useFrames ? J : K;
            c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
    });
    e = y.ticker = new i.Ticker(), d = y.prototype, d._dirty = d._gc = d._initted = d._paused = !1, 
    d._totalTime = d._time = 0, d._rawPrevTime = -1, d._next = d._last = d._onUpdate = d._timeline = d.timeline = null, 
    d._paused = !1, d.play = function(a, b) {
        return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1);
    }, d.pause = function(a, b) {
        return arguments.length && this.seek(a, b), this.paused(!0);
    }, d.resume = function(a, b) {
        return arguments.length && this.seek(a, b), this.paused(!1);
    }, d.seek = function(a, b) {
        return this.totalTime(Number(a), b !== !1);
    }, d.restart = function(a, b) {
        return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
    }, d.reverse = function(a, b) {
        return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
    }, d.render = function() {}, d.invalidate = function() {
        return this;
    }, d._enabled = function(a, b) {
        return f || e.wake(), this._gc = !a, this._active = a && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, 
        b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), 
        !1;
    }, d._kill = function() {
        return this._enabled(!1, !1);
    }, d.kill = function(a, b) {
        return this._kill(a, b), this;
    }, d._uncache = function(a) {
        for (var b = a ? this : this.timeline; b; ) b._dirty = !0, b = b.timeline;
        return this;
    }, d.eventCallback = function(a, b, c, d) {
        if (null == a) return null;
        if ("on" === a.substr(0, 2)) {
            var e, f = this.vars;
            if (1 === arguments.length) return f[a];
            if (null == b) delete f[a]; else if (f[a] = b, f[a + "Params"] = c, f[a + "Scope"] = d, 
            c) for (e = c.length; --e > -1; ) "{self}" === c[e] && (c = f[a + "Params"] = c.concat(), 
            c[e] = this);
            "onUpdate" === a && (this._onUpdate = b);
        }
        return this;
    }, d.delay = function(a) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), 
        this._delay = a, this) : this._delay;
    }, d.duration = function(a) {
        return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), 
        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), 
        this) : (this._dirty = !1, this._duration);
    }, d.totalDuration = function(a) {
        return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
    }, d.time = function(a, b) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
    }, d.totalTime = function(a, b, c) {
        if (f || e.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var d = this._totalDuration, g = this._timeline;
                if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : g._time) - (this._reversed ? d - a : a) / this._timeScale, 
                g._dirty || this._uncache(!1), !g._active) for (;g._timeline; ) g.totalTime(g._totalTime, !0), 
                g = g._timeline;
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== a && this.render(a, b, !1);
        }
        return this;
    }, d.startTime = function(a) {
        return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), 
        this) : this._startTime;
    }, d.timeScale = function(a) {
        if (!arguments.length) return this._timeScale;
        if (a = a || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var b = this._pauseTime, c = b || 0 === b ? b : this._timeline.totalTime();
            this._startTime = c - (c - this._startTime) * this._timeScale / a;
        }
        return this._timeScale = a, this._uncache(!1);
    }, d.reversed = function(a) {
        return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._totalTime, !0)), 
        this) : this._reversed;
    }, d.paused = function(a) {
        if (!arguments.length) return this._paused;
        if (a != this._paused && this._timeline) {
            f || a || e.wake();
            var b = this._timeline.rawTime(), c = b - this._pauseTime;
            !a && this._timeline.smoothChildTiming && (this._startTime += c, this._uncache(!1)), 
            this._pauseTime = a ? b : null, this._paused = a, this._active = !a && this._totalTime > 0 && this._totalTime < this._totalDuration, 
            a || 0 === c || 0 === this._duration || this.render(this._totalTime, !0, !0);
        }
        return this._gc && !a && this._enabled(!0, !1), this;
    };
    var z = o("core.SimpleTimeline", function(a) {
        y.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    d = z.prototype = new y(), d.constructor = z, d.kill()._gc = !1, d._first = d._last = null, 
    d._sortChildren = !1, d.add = d.insert = function(a, b) {
        var c, d;
        if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), 
        a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), 
        c = this._last, this._sortChildren) for (d = a._startTime; c && c._startTime > d; ) c = c._prev;
        return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), 
        a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), 
        this;
    }, d._remove = function(a, b) {
        return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), 
        a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), 
        this._timeline && this._uncache(!0)), this;
    }, d.render = function(a, b, c) {
        var d, e = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = a; e; ) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), 
        e = d;
    }, d.rawTime = function() {
        return f || e.wake(), this._totalTime;
    };
    var A = o("TweenLite", function(a, b, c) {
        if (y.call(this, b, c), null == a) throw "Cannot tween a null target.";
        this.target = a = "string" != typeof a ? a : A.selector(a) || a;
        var d, e, f, g = a.jquery || a.length && a[0] && a[0].nodeType && a[0].style, h = this.vars.overwrite;
        if (this._overwrite = h = null == h ? I[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : I[h], 
        (g || a instanceof Array) && "number" != typeof a[0]) for (this._targets = f = j.call(a, 0), 
        this._propLookup = [], this._siblings = [], d = 0; d < f.length; d++) e = f[d], 
        e ? "string" != typeof e ? e.length && e[0] && e[0].nodeType && e[0].style ? (f.splice(d--, 1), 
        this._targets = f = f.concat(j.call(e, 0))) : (this._siblings[d] = L(e, this, !1), 
        1 === h && this._siblings[d].length > 1 && M(e, this, null, 1, this._siblings[d])) : (e = f[d--] = A.selector(e), 
        "string" == typeof e && f.splice(d + 1, 1)) : f.splice(d--, 1); else this._propLookup = {}, 
        this._siblings = L(a, this, !1), 1 === h && this._siblings.length > 1 && M(a, this, null, 1, this._siblings);
        (this.vars.immediateRender || 0 === b && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0);
    }, !0), B = function(a) {
        return a.length && a[0] && a[0].nodeType && a[0].style;
    }, C = function(a, b) {
        var c, d = {};
        for (c in a) H[c] || c in b && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c || !(!E[c] || E[c] && E[c]._autoCSS) || (d[c] = a[c], 
        delete a[c]);
        a.css = d;
    };
    d = A.prototype = new y(), d.constructor = A, d.kill()._gc = !1, d.ratio = 0, d._firstPT = d._targets = d._overwrittenProps = d._startAt = null, 
    d._notifyPluginsOfEnabled = !1, A.version = "1.9.7", A.defaultEase = d._ease = new r(null, null, 1, 1), 
    A.defaultOverwrite = "auto", A.ticker = e, A.autoSleep = !0, A.selector = a.$ || a.jQuery || function(b) {
        return a.$ ? (A.selector = a.$, a.$(b)) : a.document ? a.document.getElementById("#" === b.charAt(0) ? b.substr(1) : b) : b;
    };
    var D = A._internals = {}, E = A._plugins = {}, F = A._tweenLookup = {}, G = 0, H = D.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1
    }, I = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    }, J = y._rootFramesTimeline = new z(), K = y._rootTimeline = new z();
    K._startTime = e.time, J._startTime = e.frame, K._active = J._active = !0, y._updateRoot = function() {
        if (K.render((e.time - K._startTime) * K._timeScale, !1, !1), J.render((e.frame - J._startTime) * J._timeScale, !1, !1), 
        !(e.frame % 120)) {
            var a, b, c;
            for (c in F) {
                for (b = F[c].tweens, a = b.length; --a > -1; ) b[a]._gc && b.splice(a, 1);
                0 === b.length && delete F[c];
            }
            if (c = K._first, (!c || c._paused) && A.autoSleep && !J._first && 1 === e._listeners.tick.length) {
                for (;c && c._paused; ) c = c._next;
                c || e.sleep();
            }
        }
    }, e.addEventListener("tick", y._updateRoot);
    var L = function(a, b, c) {
        var d, e, f = a._gsTweenID;
        if (F[f || (a._gsTweenID = f = "t" + G++)] || (F[f] = {
            target: a,
            tweens: []
        }), b && (d = F[f].tweens, d[e = d.length] = b, c)) for (;--e > -1; ) d[e] === b && d.splice(e, 1);
        return F[f].tweens;
    }, M = function(a, b, c, d, e) {
        var f, g, h, i;
        if (1 === d || d >= 4) {
            for (i = e.length, f = 0; i > f; f++) if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0); else if (5 === d) break;
            return g;
        }
        var j, k = b._startTime + 1e-10, l = [], m = 0, n = 0 === b._duration;
        for (f = e.length; --f > -1; ) (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || N(b, 0, n), 
        0 === N(h, j, n) && (l[m++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale + 1e-10 > k && ((n || !h._initted) && k - h._startTime <= 2e-10 || (l[m++] = h)));
        for (f = m; --f > -1; ) h = l[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
        return g;
    }, N = function(a, b, c) {
        for (var d = a._timeline, e = d._timeScale, f = a._startTime, g = 1e-10; d._timeline; ) {
            if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
            d = d._timeline;
        }
        return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * g > f - b ? g : (f += a.totalDuration() / a._timeScale / e) > b + g ? 0 : f - b - g;
    };
    d._init = function() {
        var a, b, c, d, e = this.vars, f = this._overwrittenProps, g = this._duration, h = e.ease;
        if (e.startAt) {
            if (e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, e.startAt), 
            e.immediateRender && (this._startAt = null, 0 === this._time && 0 !== g)) return;
        } else if (e.runBackwards && e.immediateRender && 0 !== g) if (this._startAt) this._startAt.render(-1, !0), 
        this._startAt = null; else if (0 === this._time) {
            c = {};
            for (d in e) H[d] && "autoCSS" !== d || (c[d] = e[d]);
            return c.overwrite = 0, this._startAt = A.to(this.target, 0, c), void 0;
        }
        if (this._ease = h ? h instanceof r ? e.easeParams instanceof Array ? h.config.apply(h, e.easeParams) : h : "function" == typeof h ? new r(h, e.easeParams) : s[h] || A.defaultEase : A.defaultEase, 
        this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, 
        this._targets) for (a = this._targets.length; --a > -1; ) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], f ? f[a] : null) && (b = !0); else b = this._initProps(this.target, this._propLookup, this._siblings, f);
        if (b && A._onPluginEvent("_onInitAllProps", this), f && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), 
        e.runBackwards) for (c = this._firstPT; c; ) c.s += c.c, c.c = -c.c, c = c._next;
        this._onUpdate = e.onUpdate, this._initted = !0;
    }, d._initProps = function(a, b, c, d) {
        var e, f, g, h, i, j, k;
        if (null == a) return !1;
        this.vars.css || a.style && a.nodeType && E.css && this.vars.autoCSS !== !1 && C(this.vars, a);
        for (e in this.vars) {
            if (H[e]) {
                if (("onStartParams" === e || "onUpdateParams" === e || "onCompleteParams" === e || "onReverseCompleteParams" === e || "onRepeatParams" === e) && (i = this.vars[e])) for (f = i.length; --f > -1; ) "{self}" === i[f] && (i = this.vars[e] = i.concat(), 
                i[f] = this);
            } else if (E[e] && (h = new E[e]())._onInitTween(a, this.vars[e], this)) {
                for (this._firstPT = j = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: e,
                    pg: !0,
                    pr: h._priority
                }, f = h._overwriteProps.length; --f > -1; ) b[h._overwriteProps[f]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (g = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0);
            } else this._firstPT = b[e] = j = {
                _next: this._firstPT,
                t: a,
                p: e,
                f: "function" == typeof a[e],
                n: e,
                pg: !1,
                pr: 0
            }, j.s = j.f ? a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]() : parseFloat(a[e]), 
            k = this.vars[e], j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
            j && j._next && (j._next._prev = j);
        }
        return d && this._kill(d, a) ? this._initProps(a, b, c, d) : this._overwrite > 1 && this._firstPT && c.length > 1 && M(a, this, b, this._overwrite, c) ? (this._kill(b, a), 
        this._initProps(a, b, c, d)) : g;
    }, d.render = function(a, b, c) {
        var d, e, f, g = this._time;
        if (a >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, 
        this._reversed || (d = !0, e = "onComplete"), 0 === this._duration && ((0 === a || this._rawPrevTime < 0) && this._rawPrevTime !== a && (c = !0, 
        this._rawPrevTime > 0 && (e = "onReverseComplete", b && (a = -1))), this._rawPrevTime = a); else if (1e-7 > a) this._totalTime = this._time = 0, 
        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === this._duration && this._rawPrevTime > 0) && (e = "onReverseComplete", 
        d = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (c = !0), 
        this._rawPrevTime = a)) : this._initted || (c = !0); else if (this._totalTime = this._time = a, 
        this._easeType) {
            var h = a / this._duration, i = this._easeType, j = this._easePower;
            (1 === i || 3 === i && h >= .5) && (h = 1 - h), 3 === i && (h *= 2), 1 === j ? h *= h : 2 === j ? h *= h * h : 3 === j ? h *= h * h * h : 4 === j && (h *= h * h * h * h), 
            this.ratio = 1 === i ? 1 - h : 2 === i ? h : a / this._duration < .5 ? h / 2 : 1 - h / 2;
        } else this.ratio = this._ease.getRatio(a / this._duration);
        if (this._time !== g || c) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !d ? this.ratio = this._ease.getRatio(this._time / this._duration) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (this._active || this._paused || (this._active = !0), 0 === g && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), 
            this.vars.onStart && (0 !== this._time || 0 === this._duration) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || q))), 
            f = this._firstPT; f; ) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, 
            f = f._next;
            this._onUpdate && (0 > a && this._startAt && this._startAt.render(a, b, c), b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || q)), 
            e && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startAt.render(a, b, c), 
            d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), 
            !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || q)));
        }
    }, d._kill = function(a, b) {
        if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
        b = "string" != typeof b ? b || this._targets || this.target : A.selector(b) || b;
        var c, d, e, f, g, h, i, j;
        if ((b instanceof Array || B(b)) && "number" != typeof b[0]) for (c = b.length; --c > -1; ) this._kill(a, b[c]) && (h = !0); else {
            if (this._targets) {
                for (c = this._targets.length; --c > -1; ) if (b === this._targets[c]) {
                    g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], 
                    d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                    break;
                }
            } else {
                if (b !== this.target) return !1;
                g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
            }
            if (g) {
                i = a || g, j = a !== d && "all" !== d && a !== g && (null == a || a._tempKill !== !0);
                for (e in i) (f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), 
                f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1);
            }
        }
        return h;
    }, d.invalidate = function() {
        return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, 
        this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, 
        this._propLookup = this._targets ? {} : [], this;
    }, d._enabled = function(a, b) {
        if (f || e.wake(), a && this._gc) {
            var c, d = this._targets;
            if (d) for (c = d.length; --c > -1; ) this._siblings[c] = L(d[c], this, !0); else this._siblings = L(this.target, this, !0);
        }
        return y.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
    }, A.to = function(a, b, c) {
        return new A(a, b, c);
    }, A.from = function(a, b, c) {
        return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new A(a, b, c);
    }, A.fromTo = function(a, b, c, d) {
        return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, 
        new A(a, b, d);
    }, A.delayedCall = function(a, b, c, d, e) {
        return new A(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            onCompleteScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            onReverseCompleteScope: d,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0
        });
    }, A.set = function(a, b) {
        return new A(a, 0, b);
    }, A.killTweensOf = A.killDelayedCallsTo = function(a, b) {
        for (var c = A.getTweensOf(a), d = c.length; --d > -1; ) c[d]._kill(b, a);
    }, A.getTweensOf = function(a) {
        if (null == a) return [];
        a = "string" != typeof a ? a : A.selector(a) || a;
        var b, c, d, e;
        if ((a instanceof Array || B(a)) && "number" != typeof a[0]) {
            for (b = a.length, c = []; --b > -1; ) c = c.concat(A.getTweensOf(a[b]));
            for (b = c.length; --b > -1; ) for (e = c[b], d = b; --d > -1; ) e === c[d] && c.splice(b, 1);
        } else for (c = L(a).concat(), b = c.length; --b > -1; ) c[b]._gc && c.splice(b, 1);
        return c;
    };
    var O = o("plugins.TweenPlugin", function(a, b) {
        this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], 
        this._priority = b || 0, this._super = O.prototype;
    }, !0);
    if (d = O.prototype, O.version = "1.9.1", O.API = 2, d._firstPT = null, d._addTween = function(a, b, c, d, e, f) {
        var g, h;
        null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) && (this._firstPT = h = {
            _next: this._firstPT,
            t: a,
            p: b,
            s: c,
            c: g,
            f: "function" == typeof a[b],
            n: e || b,
            r: f
        }, h._next && (h._next._prev = h));
    }, d.setRatio = function(a) {
        for (var b, c = this._firstPT, d = 1e-6; c; ) b = c.c * a + c.s, c.r ? b = b + (b > 0 ? .5 : -.5) >> 0 : d > b && b > -d && (b = 0), 
        c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next;
    }, d._kill = function(a) {
        var b, c = this._overwriteProps, d = this._firstPT;
        if (null != a[this._propName]) this._overwriteProps = []; else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
        for (;d; ) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, 
        d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
        return !1;
    }, d._roundProps = function(a, b) {
        for (var c = this._firstPT; c; ) (a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), 
        c = c._next;
    }, A._onPluginEvent = function(a, b) {
        var c, d, e, f, g, h = b._firstPT;
        if ("_onInitAllProps" === a) {
            for (;h; ) {
                for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
                (h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, 
                h = g;
            }
            h = b._firstPT = e;
        }
        for (;h; ) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
        return c;
    }, O.activate = function(a) {
        for (var b = a.length; --b > -1; ) a[b].API === O.API && (E[new a[b]()._propName] = a[b]);
        return !0;
    }, n.plugin = function(a) {
        if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
        var b, c = a.propName, d = a.priority || 0, e = a.overwriteProps, f = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        }, g = o("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
            O.call(this, c, d), this._overwriteProps = e || [];
        }, a.global === !0), h = g.prototype = new O(c);
        h.constructor = g, g.API = a.API;
        for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
        return g.version = a.version, O.activate([ g ]), g;
    }, b = a._gsQueue) {
        for (c = 0; c < b.length; c++) b[c]();
        for (d in l) l[d].func || a.console.log("GSAP encountered missing dependency: com.greensock." + d);
    }
    f = !1;
}(window), function(a) {
    "use strict";
    var b, c, d, e = a.fn.animate, f = a.fn.stop, g = !0, h = function(a, b) {
        "function" == typeof a && this.each(a), b();
    }, i = function(a, b, c, d, e) {
        e = "function" == typeof e ? e : null, b = "function" == typeof b ? b : null, (b || e) && (d[a] = e ? h : c.each, 
        d[a + "Scope"] = c, d[a + "Params"] = e ? [ b, e ] : [ b ]);
    }, j = {
        overwrite: 1,
        delay: 1,
        useFrames: 1,
        runBackwards: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        autoCSS: 1
    }, k = function(a, b) {
        for (var c in j) j[c] && void 0 !== a[c] && (b[c] = a[c]);
    }, l = function(a) {
        return function(b) {
            return a.getRatio(b);
        };
    }, m = {}, n = function() {
        var e, f, g, h = window.GreenSockGlobals || window;
        if (b = h.TweenMax || h.TweenLite, b && (e = (b.version + ".0.0").split("."), f = !(Number(e[0]) > 0 && Number(e[1]) > 7), 
        h = h.com.greensock, c = h.plugins.CSSPlugin, m = h.easing.Ease.map || {}), !b || !c || f) return b = null, 
        !d && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (f ? " Version " + e.join(".") + " is too old." : "")), 
        d = !0), void 0;
        if (a.easing) {
            for (g in m) a.easing[g] = l(m[g]);
            n = !1;
        }
    };
    a.fn.animate = function(d, f, h, j) {
        if (d = d || {}, n && (n(), !b || !c)) return e.call(this, d, f, h, j);
        if (!g || d.skipGSAP === !0 || "object" == typeof f && "function" == typeof f.step || null != d.scrollTop || null != d.scrollLeft) return e.call(this, d, f, h, j);
        var l, o, p, q, r = a.speed(f, h, j), s = {
            ease: m[r.easing] || (r.easing === !1 ? m.linear : m.swing)
        }, t = this, u = "object" == typeof f ? f.specialEasing : null;
        for (o in d) {
            if (l = d[o], l instanceof Array && m[l[1]] && (u = u || {}, u[o] = l[1], l = l[0]), 
            "toggle" === l || "hide" === l || "show" === l) return e.call(this, d, f, h, j);
            s[-1 === o.indexOf("-") ? o : a.camelCase(o)] = l;
        }
        if (u) {
            q = [];
            for (o in u) l = q[q.length] = {}, k(s, l), l.ease = m[u[o]] || s.ease, -1 !== o.indexOf("-") && (o = a.camelCase(o)), 
            l[o] = s[o];
            0 === q.length && (q = null);
        }
        return p = function(c) {
            if (q) for (var d = q.length; --d > -1; ) b.to(t, a.fx.off ? 0 : r.duration / 1e3, q[d]);
            i("onComplete", r.old, t, s, c), b.to(t, a.fx.off ? 0 : r.duration / 1e3, s);
        }, r.queue !== !1 ? t.queue(r.queue, p) : p(), t;
    }, a.fn.stop = function(a, c) {
        if (f.call(this, a, c), b) {
            if (c) for (var d, e = b.getTweensOf(this), g = e.length; --g > -1; ) d = e[g].totalTime() / e[g].totalDuration(), 
            d > 0 && 1 > d && e[g].seek(e[g].totalDuration());
            b.killTweensOf(this);
        }
        return this;
    }, a.gsap = {
        enabled: function(a) {
            g = a;
        },
        version: "0.1.6"
    };
}(jQuery);

var db = {
    introducao: {
        pt: "Responda e descubra se você reconhece as nossas operações ao redor do mundo.",
        en: "Answer these questions to find out if you recognize our operations around the world.",
        es: "Responda y descubra si reconoce nuestras operaciones alrededor del mundo."
    },
    correto: {
        pt: "Correto",
        en: "Correct",
        es: "Correcto",
        msg: {
            titulo: {
                pt: "Parabéns!",
                en: "Congratulations!",
                es: "¡Felicitaciones!"
            },
            corpo: {
                pt: 'Você realmente conhece muito sobre as nossas operações. Continue assim!<br><a href="http://intranet.valeglobal.net/pt-br/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Saiba ainda mais aqui</a>',
                en: 'You really know a lot about our operations. Keep it up!<br><a href="http://intranet.valeglobal.net/en-us/oquefazemos/estrategiadenegocios/Pages/default.aspx">Find out more here</a>',
                es: 'Realmente sabe mucho sobre nuestras operaciones. ¡Continúe así!<br><a href="http://intranet.valeglobal.net/es-es/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Sepa aún más aquí</a> '
            }
        }
    },
    incorreto: {
        pt: "Incorreto",
        en: "Incorrect",
        es: "Incorrecto",
        msg: {
            titulo: {
                pt: "Pode melhorar, hein...",
                en: "Better luck next time...",
                es: "Puede mejorar, ¿eh?..."
            },
            corpo: {
                pt: 'Que tal aprender um pouco mais sobre a nossa empresa?<br><a href="http://intranet.valeglobal.net/pt-br/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Saiba ainda mais aqui</a>',
                en: 'Why don’t you learn a little more about our company?<br><a href="http://intranet.valeglobal.net/en-us/oquefazemos/estrategiadenegocios/Pages/default.aspx">Click here</a>',
                es: '¿Qué tal aprender un poco más sobre nuestra empresa?<br><a href="http://intranet.valeglobal.net/es-es/oquefazemos/estrategiadenegocios/Paginas/default.aspx">Haga clic aquí</a>'
            }
        }
    },
    quiz: [ {
        image: "frame1.jpg",
        tip: {
            pt: "Operamos neste lugar há mais de 100 anos.",
            en: "We have had operations at this location for over 100 years.",
            es: "Operamos en este lugar hace más de 100 años."
        },
        pergunta: {
            pt: "Você sabe que operação é essa?",
            en: "Do you know which of our operations this is?",
            es: "¿Sabe qué operación es esta?"
        },
        respostas: {
            a: {
                pt: "Mina de Totten, Sudbury, Canadá",
                en: "Totten Mine, Sudbury, Canada",
                es: "Mina de Totten, Sudbury, Canadá"
            },
            b: {
                pt: "Mina do Cauê, Minas Gerais, Brasil",
                en: "Cauê Mine, Minas Gerais, Brazil",
                es: "Mina do Cauê, Minas Gerais, Brasil"
            },
            c: {
                pt: "Mina de Moatize, Moçambique",
                en: "Moatize Mine, Mozambique",
                es: "Mina de Moatize, Mozambique"
            }
        },
        correta: "a"
    }, {
        image: "frame2.jpg",
        tip: !1,
        pergunta: {
            pt: "E esta, você conhece?",
            en: "Do you know where this is?",
            es: "Y esta operación, ¿la conoce?"
        },
        respostas: {
            a: {
                pt: "Terminal Marítimo de Ponta da Madeira, Maranhão, Brasil",
                en: "Ponta da Madeira Maritime Terminal, Maranhão, Brazil",
                es: "Terminal Marítima de Ponta da Madeira, Maranhão, Brasil"
            },
            b: {
                pt: "Hidrelétrica da usina de processamento de Soroawako, Indonésia",
                en: "Hydroelectric station at the Soroawako processing plant, Indonesia",
                es: "Hidroeléctrica de la usina de procesamiento de Soroawako, Indonesia"
            },
            c: {
                pt: "Mina de Thompson, Manitoba, Canadá",
                en: "Thompson Mine, Manitoba, Canada",
                es: "Mina de Thompson, Manitoba, Canadá"
            }
        },
        correta: "b"
    }, {
        image: "frame3.jpg",
        tip: {
            pt: "Esta é a maior mina de minério de ferro a céu aberto do mundo.",
            en: "This is the biggest open-pit iron ore mine in the world.",
            es: "Esta es la mayor mina de mena de hierro a cielo abierto del mundo."
        },
        pergunta: {
            pt: "Não diga que não reconhece essa?",
            en: "You can’t say you don’t recognize this one!",
            es: "¿No me diga que no reconoce esta?"
        },
        respostas: {
            a: {
                pt: "Mina de Mariana, Minas Gerais, Brasil",
                en: "Mariana Mine, Minas Gerais, Brazil",
                es: "Mina de Mariana, Minas Gerais, Brasil"
            },
            b: {
                pt: "Mina de Carajás, Pará, Brasil",
                en: "Carajás Mine, Pará, Brazil",
                es: "Mina de Carajás, Pará, Brasil"
            },
            c: {
                pt: "Complexo Industrial do Porto de Sohar, Omã",
                en: "Port of Sohar Industrial Complex, Oman",
                es: "Complejo Industrial del Puerto de Sohar, Omán"
            }
        },
        correta: "b"
    }, {
        image: "frame4.jpg",
        tip: {
            pt: "Este projeto irá ajudar a construir 137km de ferrovia.",
            en: "This project will help towards the construction of 137km of railway track.",
            es: "Este proyecto ayudará a construir 137 km de vía férrea."
        },
        pergunta: {
            pt: "E aí, descobriu onde fica essa operação?",
            en: "Have you figured out where this operation is?",
            es: "Y ahora, ¿descubrió dónde se localiza esta operación?"
        },
        respostas: {
            a: {
                pt: "Projeto Corredor de Nacala, Malauí",
                en: "Nacala Corridor Project, Malawi",
                es: "Proyecto Corredor de Nacala, Malawi"
            },
            b: {
                pt: "Mina Taquari-Vassouras, Sergipe, Brasil",
                en: "Taquari-Vassouras Mine, Sergipe, Brazil",
                es: "Mina Taquari-Vassouras, Sergipe, Brasil"
            },
            c: {
                pt: "Mina de Moatize, Moçambique",
                en: "Moatize Mine, Mozambique",
                es: "Mina de Moatize, Mozambique"
            }
        },
        correta: "a"
    }, {
        image: "frame5.jpg",
        tip: {
            pt: "Este local produz metais básicos e está em processo de ramp-up.",
            en: "This location produces base metals and is undergoing a ramp-up process.",
            es: "Este local produce metales básicos y está en proceso de ramp-up."
        },
        pergunta: {
            pt: "Vamos lá... E essa foto aí de cima, de onde é?",
            en: "Where do you think this photo was taken?",
            es: "Vamos a ver... Y esta foto, ¿de dónde es?"
        },
        respostas: {
            a: {
                pt: "Mina de Bayóvar, Sechura, Peru",
                en: "Bayóvar Mine, Sechura, Peru",
                es: "Mina de Bayóvar, Sechura, Perú"
            },
            b: {
                pt: "Mina do Tamanduá, Minas Gerais",
                en: "Tamanduá Mine, Minas Gerais",
                es: "Mina do Tamanduá, Minas Gerais"
            },
            c: {
                pt: "Projeto Vale Nova Caledônia (VNC), Nova Caledônia",
                en: "Vale New Caledonia (VNC) Project, New Caledonia",
                es: "Proyecto Vale Nueva Caledonia (VNC), Nueva Caledonia"
            }
        },
        correta: "c"
    }, {
        image: "frame6.jpg",
        tip: {
            pt: "O complexo possui porto, usina e pátio ferroviário.",
            en: "This complex has a port, a plant and a railway stockyard.",
            es: "El complejo posee un puerto, una planta y un patio ferroviario."
        },
        pergunta: {
            pt: "A última imagem, vai... Você consegue descobrir que operação é essa?",
            en: "Here’s the last one, do you know which operation this is?",
            es: "La última imagen. ¿Consigue descubrir que operación es esta?"
        },
        respostas: {
            a: {
                pt: "Mina de Carborough Downs, Queensland, Canadá",
                en: "Carborough Downs Mine, Queensland, Canada",
                es: "Mina de Carborough Downs, Queensland, Canadá"
            },
            b: {
                pt: "Terminal Teluk Rubiah, Peark, Malásia",
                en: "Teluk Rubiah Terminal, Peark, Malaysia",
                es: "Terminal Teluk Rubiah, Perak, Malasia"
            },
            c: {
                pt: "Complexo de Tubarão, Espírito Santo, Brasil",
                en: "Tubarão Complex, Espírito Santo, Brazil",
                es: "Complejo de Tubarão, Espírito Santo, Brasil"
            }
        },
        correta: "c"
    } ]
};

window.console && console.log || function() {
    for (var a = function() {}, b = [ "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn" ], c = b.length, d = window.console = {}; c--; ) d[b[c]] = a;
}();

var currLanguage = String(document.documentElement.lang).split("-")[0] || "pt";

$introducao = $("#quizIntroducao").text(db.introducao[currLanguage]), theQuiz.prototype.init = function() {
    this.reset(), this.view.tipHandler.on("mouseenter mouseleave", {
        box: this.view.tipBox
    }, function(a) {
        var b = a.data.box;
        "mouseenter" == a.type ? TweenMax.to(b, .5, {
            opacity: 1,
            right: 0
        }) : TweenMax.to(b, .5, {
            opacity: 0,
            right: "-225px"
        });
    }).trigger("mouseleave");
}, theQuiz.prototype.reset = function() {
    this.totalPontos = this.curr = 0, this.build(this.curr), this.listener(!0), this.view.show.removeClass("ok fail").addClass("hidden"), 
    this.view.grupo.css({
        opacity: 1
    }), this.view.resultado.css({
        opacity: 0
    });
}, theQuiz.prototype.listener = function(a) {
    var b = this;
    a = a || !1, a ? this.view.respostas.on("click", "> li", {
        that: b
    }, b.responde) : this.view.respostas.off("click", "> li", b.responde);
}, theQuiz.prototype.responde = function(a) {
    a.preventDefault();
    var b = a.data.that, c = $(this);
    b.isCorreto = c.data("ok"), b.isCorreto ? c.addClass("ok") : c.addClass("fail"), 
    b.next();
}, theQuiz.prototype.next = function() {
    var a = this;
    this.listener(), this.isCorreto ? (this.totalPontos++, this.view.resultado.removeClass("fail").addClass("ok").find("span").text(this.dados.correto[this.lingua])) : this.view.resultado.removeClass("ok").addClass("fail").find("span").text(this.dados.incorreto[this.lingua]), 
    TweenMax.to(this.view.resultado, .5, {
        opacity: 1
    }), TweenMax.from(this.view.resultado, 1, {
        top: "-50%",
        ease: Bounce.easeOut,
        onComplete: a.after,
        onCompleteParams: [ a ]
    });
}, theQuiz.prototype.after = function(a) {
    a.curr < a.totalPerguntas - 1 ? (a.curr++, TweenMax.to(a.view.resultado, .5, {
        delay: 1,
        opacity: 0,
        onComplete: function() {
            a.build(a.curr), a.listener(!0);
        }
    })) : a.showResult();
}, theQuiz.prototype.showResult = function() {
    var a = Math.ceil(this.totalPerguntas / 2), b = this.totalPontos > a ? "ok" : "fail", c = this.totalPontos > a ? this.dados.correto.msg.titulo[this.lingua] : this.dados.incorreto.msg.titulo[this.lingua], d = this.totalPontos > a ? this.dados.correto.msg.corpo[this.lingua] : this.dados.incorreto.msg.corpo[this.lingua], e = this.totalPontos > 1 ? "pontos" : "ponto";
    this.view.show.find(".txt:eq(0) > .pontos:eq(0)").addClass(b).html("<div>" + this.totalPontos + "<br><span>" + e + "</span></div>"), 
    this.view.show.find(".txt:eq(0) > .tituloMsg:eq(0)").text(c), this.view.show.find(".txt:eq(0) > .corpoMsg:eq(0)").html(d), 
    this.view.show.css({
        opacity: 0
    }).removeClass("hidden ok fail").addClass(b), TweenMax.to(this.view.show, 1, {
        opacity: 1
    }), TweenMax.to(this.view.grupo, 1, {
        opacity: 0
    });
}, theQuiz.prototype.build = function(a) {
    var b = this;
    this.view.atual.find("span").text(a + 1), this.view.img.get(0).src = this.path + this.quiz[a].image, 
    this.view.pergunta.text(this.quiz[a].pergunta[this.lingua]), this.view.respostas.children("li").each(function(c, d) {
        var e = $(d);
        e.text(b.quiz[a].respostas[b.opts[c]][b.lingua]), e.data("letra", b.opts[c]), b.quiz[a].correta == b.opts[c] ? e.data("ok", !0) : e.data("ok", !1), 
        e.removeClass("ok").removeClass("fail");
    }), this.quiz[a].tip ? (this.view.tipHandler.removeClass("hidden"), this.view.tipBox.removeClass("hidden").text(this.quiz[a].tip[this.lingua])) : (this.view.tipHandler.addClass("hidden"), 
    this.view.tipBox.addClass("hidden"));
};

var valeTheQuiz = new theQuiz(db, currLanguage, pathImg);