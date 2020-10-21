(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-1789ada2"], {
        "56b3": function(e, t, r) {
            (function(t, r) {
                e.exports = r()
            })(0, (function() {
                "use strict";
                var e = navigator.userAgent,
                    t = navigator.platform,
                    r = /gecko\/\d/i.test(e),
                    n = /MSIE \d/.test(e),
                    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    l = n || i || o,
                    s = l && (n ? document.documentMode || 6 : +(o || i)[1]),
                    a = !o && /WebKit\//.test(e),
                    u = a && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\//.test(e),
                    h = /Opera\//.test(e),
                    f = /Apple Computer/.test(navigator.vendor),
                    d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    p = /PhantomJS/.test(e),
                    g = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                    v = /Android/.test(e),
                    m = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    y = g || /Mac/.test(t),
                    b = /\bCrOS\b/.test(e),
                    w = /win/i.test(t),
                    x = h && e.match(/Version\/(\d*\.\d*)/);
                x && (x = Number(x[1])), x && x >= 15 && (h = !1, a = !0);
                var C = y && (u || h && (null == x || x < 12.11)),
                    S = r || l && s >= 9;

                function L(e) {
                    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
                }
                var k, T = function(e, t) {
                    var r = e.className,
                        n = L(t).exec(r);
                    if (n) {
                        var i = r.slice(n.index + n[0].length);
                        e.className = r.slice(0, n.index) + (i ? n[1] + i : "")
                    }
                };

                function M(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e
                }

                function N(e, t) {
                    return M(e).appendChild(t)
                }

                function O(e, t, r, n) {
                    var i = document.createElement(e);
                    if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));
                    else if (t)
                        for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i
                }

                function A(e, t, r, n) {
                    var i = O(e, t, r, n);
                    return i.setAttribute("role", "presentation"), i
                }

                function D(e, t) {
                    if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
                    do {
                        if (11 == t.nodeType && (t = t.host), t == e) return !0
                    } while (t = t.parentNode)
                }

                function W() {
                    var e;
                    try {
                        e = document.activeElement
                    } catch (t) {
                        e = document.body || null
                    }
                    while (e && e.shadowRoot && e.shadowRoot.activeElement) e = e.shadowRoot.activeElement;
                    return e
                }

                function H(e, t) {
                    var r = e.className;
                    L(t).test(r) || (e.className += (r ? " " : "") + t)
                }

                function F(e, t) {
                    for (var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !L(r[n]).test(t) && (t += " " + r[n]);
                    return t
                }
                k = document.createRange ? function(e, t, r, n) {
                    var i = document.createRange();
                    return i.setEnd(n || e, r), i.setStart(e, t), i
                } : function(e, t, r) {
                    var n = document.body.createTextRange();
                    try {
                        n.moveToElementText(e.parentNode)
                    } catch (i) {
                        return n
                    }
                    return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n
                };
                var P = function(e) {
                    e.select()
                };

                function E(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        return e.apply(null, t)
                    }
                }

                function I(e, t, r) {
                    for (var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]);
                    return t
                }

                function z(e, t, r, n, i) {
                    null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));
                    for (var o = n || 0, l = i || 0;;) {
                        var s = e.indexOf("\t", o);
                        if (s < 0 || s >= t) return l + (t - o);
                        l += s - o, l += r - l % r, o = s + 1
                    }
                }
                g ? P = function(e) {
                    e.selectionStart = 0, e.selectionEnd = e.value.length
                } : l && (P = function(e) {
                    try {
                        e.select()
                    } catch (t) {}
                });
                var R = function() {
                    this.id = null
                };

                function B(e, t) {
                    for (var r = 0; r < e.length; ++r)
                        if (e[r] == t) return r;
                    return -1
                }
                R.prototype.set = function(e, t) {
                    clearTimeout(this.id), this.id = setTimeout(t, e)
                };
                var G = 30,
                    U = {
                        toString: function() {
                            return "CodeMirror.Pass"
                        }
                    },
                    V = {
                        scroll: !1
                    },
                    K = {
                        origin: "*mouse"
                    },
                    j = {
                        origin: "+move"
                    };

                function X(e, t, r) {
                    for (var n = 0, i = 0;;) {
                        var o = e.indexOf("\t", n); - 1 == o && (o = e.length);
                        var l = o - n;
                        if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
                        if (i += o - n, i += r - i % r, n = o + 1, i >= t) return n
                    }
                }
                var Y = [""];

                function _(e) {
                    while (Y.length <= e) Y.push($(Y) + " ");
                    return Y[e]
                }

                function $(e) {
                    return e[e.length - 1]
                }

                function q(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
                    return r
                }

                function Z(e, t, r) {
                    var n = 0,
                        i = r(t);
                    while (n < e.length && r(e[n]) <= i) n++;
                    e.splice(n, 0, t)
                }

                function J() {}

                function Q(e, t) {
                    var r;
                    return Object.create ? r = Object.create(e) : (J.prototype = e, r = new J), t && I(t, r), r
                }
                var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

                function te(e) {
                    return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || ee.test(e))
                }

                function re(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && te(e)) || t.test(e) : te(e)
                }

                function ne(e) {
                    for (var t in e)
                        if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0
                }
                var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

                function oe(e) {
                    return e.charCodeAt(0) >= 768 && ie.test(e)
                }

                function le(e, t, r) {
                    while ((r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t))) t += r;
                    return t
                }

                function se(e, t, r) {
                    for (var n = t > r ? -1 : 1;;) {
                        if (t == r) return t;
                        var i = (t + r) / 2,
                            o = n < 0 ? Math.ceil(i) : Math.floor(i);
                        if (o == t) return e(o) ? t : r;
                        e(o) ? r = o : t = o + n
                    }
                }

                function ae(e, t, n) {
                    var i = this;
                    this.input = n, i.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = A("div", null, "CodeMirror-code"), i.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = O("div", null, "CodeMirror-cursors"), i.measure = O("div", null, "CodeMirror-measure"), i.lineMeasure = O("div", null, "CodeMirror-measure"), i.lineSpace = A("div", [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv], null, "position: relative; outline: none");
                    var o = A("div", [i.lineSpace], "CodeMirror-lines");
                    i.mover = O("div", [o], null, "position: relative"), i.sizer = O("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = O("div", null, null, "position: absolute; height: " + G + "px; width: 1px;"), i.gutters = O("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = O("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = O("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), l && s < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), a || r && m || (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, n.init(i)
                }

                function ue(e, t) {
                    if (t -= e.first, t < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                    var r = e;
                    while (!r.lines)
                        for (var n = 0;; ++n) {
                            var i = r.children[n],
                                o = i.chunkSize();
                            if (t < o) {
                                r = i;
                                break
                            }
                            t -= o
                        }
                    return r.lines[t]
                }

                function ce(e, t, r) {
                    var n = [],
                        i = t.line;
                    return e.iter(t.line, r.line + 1, (function(e) {
                        var o = e.text;
                        i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i
                    })), n
                }

                function he(e, t, r) {
                    var n = [];
                    return e.iter(t, r, (function(e) {
                        n.push(e.text)
                    })), n
                }

                function fe(e, t) {
                    var r = t - e.height;
                    if (r)
                        for (var n = e; n; n = n.parent) n.height += r
                }

                function de(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; t = n, n = n.parent)
                        for (var i = 0;; ++i) {
                            if (n.children[i] == t) break;
                            r += n.children[i].chunkSize()
                        }
                    return r + t.first
                }

                function pe(e, t) {
                    var r = e.first;
                    e: do {
                        for (var n = 0; n < e.children.length; ++n) {
                            var i = e.children[n],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e
                            }
                            t -= o, r += i.chunkSize()
                        }
                        return r
                    } while (!e.lines);
                    for (var l = 0; l < e.lines.length; ++l) {
                        var s = e.lines[l],
                            a = s.height;
                        if (t < a) break;
                        t -= a
                    }
                    return r + l
                }

                function ge(e, t) {
                    return t >= e.first && t < e.first + e.size
                }

                function ve(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber))
                }

                function me(e, t, r) {
                    if (void 0 === r && (r = null), !(this instanceof me)) return new me(e, t, r);
                    this.line = e, this.ch = t, this.sticky = r
                }

                function ye(e, t) {
                    return e.line - t.line || e.ch - t.ch
                }

                function be(e, t) {
                    return e.sticky == t.sticky && 0 == ye(e, t)
                }

                function we(e) {
                    return me(e.line, e.ch)
                }

                function xe(e, t) {
                    return ye(e, t) < 0 ? t : e
                }

                function Ce(e, t) {
                    return ye(e, t) < 0 ? e : t
                }

                function Se(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1))
                }

                function Le(e, t) {
                    if (t.line < e.first) return me(e.first, 0);
                    var r = e.first + e.size - 1;
                    return t.line > r ? me(r, ue(e, r).text.length) : ke(t, ue(e, t.line).text.length)
                }

                function ke(e, t) {
                    var r = e.ch;
                    return null == r || r > t ? me(e.line, t) : r < 0 ? me(e.line, 0) : e
                }

                function Te(e, t) {
                    for (var r = [], n = 0; n < t.length; n++) r[n] = Le(e, t[n]);
                    return r
                }
                var Me = !1,
                    Ne = !1;

                function Oe() {
                    Me = !0
                }

                function Ae() {
                    Ne = !0
                }

                function De(e, t, r) {
                    this.marker = e, this.from = t, this.to = r
                }

                function We(e, t) {
                    if (e)
                        for (var r = 0; r < e.length; ++r) {
                            var n = e[r];
                            if (n.marker == t) return n
                        }
                }

                function He(e, t) {
                    for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
                    return r
                }

                function Fe(e, t) {
                    e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
                }

                function Pe(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker,
                                s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                            if (s || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
                                var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                                (n || (n = [])).push(new De(l, o.from, a ? null : o.to))
                            }
                        }
                    return n
                }

                function Ee(e, t, r) {
                    var n;
                    if (e)
                        for (var i = 0; i < e.length; ++i) {
                            var o = e[i],
                                l = o.marker,
                                s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                            if (s || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
                                var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                                (n || (n = [])).push(new De(l, a ? null : o.from - t, null == o.to ? null : o.to - t))
                            }
                        }
                    return n
                }

                function Ie(e, t) {
                    if (t.full) return null;
                    var r = ge(e, t.from.line) && ue(e, t.from.line).markedSpans,
                        n = ge(e, t.to.line) && ue(e, t.to.line).markedSpans;
                    if (!r && !n) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        l = 0 == ye(t.from, t.to),
                        s = Pe(r, i, l),
                        a = Ee(n, o, l),
                        u = 1 == t.text.length,
                        c = $(t.text).length + (u ? i : 0);
                    if (s)
                        for (var h = 0; h < s.length; ++h) {
                            var f = s[h];
                            if (null == f.to) {
                                var d = We(a, f.marker);
                                d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i
                            }
                        }
                    if (a)
                        for (var p = 0; p < a.length; ++p) {
                            var g = a[p];
                            if (null != g.to && (g.to += c), null == g.from) {
                                var v = We(s, g.marker);
                                v || (g.from = c, u && (s || (s = [])).push(g))
                            } else g.from += c, u && (s || (s = [])).push(g)
                        }
                    s && (s = ze(s)), a && a != s && (a = ze(a));
                    var m = [s];
                    if (!u) {
                        var y, b = t.text.length - 2;
                        if (b > 0 && s)
                            for (var w = 0; w < s.length; ++w) null == s[w].to && (y || (y = [])).push(new De(s[w].marker, null, null));
                        for (var x = 0; x < b; ++x) m.push(y);
                        m.push(a)
                    }
                    return m
                }

                function ze(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var r = e[t];
                        null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1)
                    }
                    return e.length ? e : null
                }

                function Re(e, t, r) {
                    var n = null;
                    if (e.iter(t.line, r.line + 1, (function(e) {
                            if (e.markedSpans)
                                for (var t = 0; t < e.markedSpans.length; ++t) {
                                    var r = e.markedSpans[t].marker;
                                    !r.readOnly || n && -1 != B(n, r) || (n || (n = [])).push(r)
                                }
                        })), !n) return null;
                    for (var i = [{
                            from: t,
                            to: r
                        }], o = 0; o < n.length; ++o)
                        for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
                            var u = i[a];
                            if (!(ye(u.to, s.from) < 0 || ye(u.from, s.to) > 0)) {
                                var c = [a, 1],
                                    h = ye(u.from, s.from),
                                    f = ye(u.to, s.to);
                                (h < 0 || !l.inclusiveLeft && !h) && c.push({
                                    from: u.from,
                                    to: s.from
                                }), (f > 0 || !l.inclusiveRight && !f) && c.push({
                                    from: s.to,
                                    to: u.to
                                }), i.splice.apply(i, c), a += c.length - 3
                            }
                        }
                    return i
                }

                function Be(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                        e.markedSpans = null
                    }
                }

                function Ge(e, t) {
                    if (t) {
                        for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                        e.markedSpans = t
                    }
                }

                function Ue(e) {
                    return e.inclusiveLeft ? -1 : 0
                }

                function Ve(e) {
                    return e.inclusiveRight ? 1 : 0
                }

                function Ke(e, t) {
                    var r = e.lines.length - t.lines.length;
                    if (0 != r) return r;
                    var n = e.find(),
                        i = t.find(),
                        o = ye(n.from, i.from) || Ue(e) - Ue(t);
                    if (o) return -o;
                    var l = ye(n.to, i.to) || Ve(e) - Ve(t);
                    return l || t.id - e.id
                }

                function je(e, t) {
                    var r, n = Ne && e.markedSpans;
                    if (n)
                        for (var i = void 0, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!r || Ke(r, i.marker) < 0) && (r = i.marker);
                    return r
                }

                function Xe(e) {
                    return je(e, !0)
                }

                function Ye(e) {
                    return je(e, !1)
                }

                function _e(e, t) {
                    var r, n = Ne && e.markedSpans;
                    if (n)
                        for (var i = 0; i < n.length; ++i) {
                            var o = n[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Ke(r, o.marker) < 0) && (r = o.marker)
                        }
                    return r
                }

                function $e(e, t, r, n, i) {
                    var o = ue(e, t),
                        l = Ne && o.markedSpans;
                    if (l)
                        for (var s = 0; s < l.length; ++s) {
                            var a = l[s];
                            if (a.marker.collapsed) {
                                var u = a.marker.find(0),
                                    c = ye(u.from, r) || Ue(a.marker) - Ue(i),
                                    h = ye(u.to, n) || Ve(a.marker) - Ve(i);
                                if (!(c >= 0 && h <= 0 || c <= 0 && h >= 0) && (c <= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? ye(u.to, r) >= 0 : ye(u.to, r) > 0) || c >= 0 && (a.marker.inclusiveRight && i.inclusiveLeft ? ye(u.from, n) <= 0 : ye(u.from, n) < 0))) return !0
                            }
                        }
                }

                function qe(e) {
                    var t;
                    while (t = Xe(e)) e = t.find(-1, !0).line;
                    return e
                }

                function Ze(e) {
                    var t;
                    while (t = Ye(e)) e = t.find(1, !0).line;
                    return e
                }

                function Je(e) {
                    var t, r;
                    while (t = Ye(e)) e = t.find(1, !0).line, (r || (r = [])).push(e);
                    return r
                }

                function Qe(e, t) {
                    var r = ue(e, t),
                        n = qe(r);
                    return r == n ? t : de(n)
                }

                function et(e, t) {
                    if (t > e.lastLine()) return t;
                    var r, n = ue(e, t);
                    if (!tt(e, n)) return t;
                    while (r = Ye(n)) n = r.find(1, !0).line;
                    return de(n) + 1
                }

                function tt(e, t) {
                    var r = Ne && t.markedSpans;
                    if (r)
                        for (var n = void 0, i = 0; i < r.length; ++i)
                            if (n = r[i], n.marker.collapsed) {
                                if (null == n.from) return !0;
                                if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && rt(e, t, n)) return !0
                            }
                }

                function rt(e, t, r) {
                    if (null == r.to) {
                        var n = r.marker.find(1, !0);
                        return rt(e, n.line, We(n.line.markedSpans, r.marker))
                    }
                    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
                    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                        if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && rt(e, t, i)) return !0
                }

                function nt(e) {
                    e = qe(e);
                    for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
                        var i = r.lines[n];
                        if (i == e) break;
                        t += i.height
                    }
                    for (var o = r.parent; o; r = o, o = r.parent)
                        for (var l = 0; l < o.children.length; ++l) {
                            var s = o.children[l];
                            if (s == r) break;
                            t += s.height
                        }
                    return t
                }

                function it(e) {
                    if (0 == e.height) return 0;
                    var t, r = e.text.length,
                        n = e;
                    while (t = Xe(n)) {
                        var i = t.find(0, !0);
                        n = i.from.line, r += i.from.ch - i.to.ch
                    }
                    n = e;
                    while (t = Ye(n)) {
                        var o = t.find(0, !0);
                        r -= n.text.length - o.from.ch, n = o.to.line, r += n.text.length - o.to.ch
                    }
                    return r
                }

                function ot(e) {
                    var t = e.display,
                        r = e.doc;
                    t.maxLine = ue(r, r.first), t.maxLineLength = it(t.maxLine), t.maxLineChanged = !0, r.iter((function(e) {
                        var r = it(e);
                        r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e)
                    }))
                }

                function lt(e, t, r, n) {
                    if (!e) return n(t, r, "ltr", 0);
                    for (var i = !1, o = 0; o < e.length; ++o) {
                        var l = e[o];
                        (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", o), i = !0)
                    }
                    i || n(t, r, "ltr")
                }
                var st = null;

                function at(e, t, r) {
                    var n;
                    st = null;
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.from < t && o.to > t) return i;
                        o.to == t && (o.from != o.to && "before" == r ? n = i : st = i), o.from == t && (o.from != o.to && "before" != r ? n = i : st = i)
                    }
                    return null != n ? n : st
                }
                var ut = function() {
                    var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
                        t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";

                    function r(r) {
                        return r <= 247 ? e.charAt(r) : 1424 <= r && r <= 1524 ? "R" : 1536 <= r && r <= 1785 ? t.charAt(r - 1536) : 1774 <= r && r <= 2220 ? "r" : 8192 <= r && r <= 8203 ? "w" : 8204 == r ? "b" : "L"
                    }
                    var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        i = /[stwN]/,
                        o = /[LRr]/,
                        l = /[Lb1n]/,
                        s = /[1n]/;

                    function a(e, t, r) {
                        this.level = e, this.from = t, this.to = r
                    }
                    return function(e, t) {
                        var u = "ltr" == t ? "L" : "R";
                        if (0 == e.length || "ltr" == t && !n.test(e)) return !1;
                        for (var c = e.length, h = [], f = 0; f < c; ++f) h.push(r(e.charCodeAt(f)));
                        for (var d = 0, p = u; d < c; ++d) {
                            var g = h[d];
                            "m" == g ? h[d] = p : p = g
                        }
                        for (var v = 0, m = u; v < c; ++v) {
                            var y = h[v];
                            "1" == y && "r" == m ? h[v] = "n" : o.test(y) && (m = y, "r" == y && (h[v] = "R"))
                        }
                        for (var b = 1, w = h[0]; b < c - 1; ++b) {
                            var x = h[b];
                            "+" == x && "1" == w && "1" == h[b + 1] ? h[b] = "1" : "," != x || w != h[b + 1] || "1" != w && "n" != w || (h[b] = w), w = x
                        }
                        for (var C = 0; C < c; ++C) {
                            var S = h[C];
                            if ("," == S) h[C] = "N";
                            else if ("%" == S) {
                                var L = void 0;
                                for (L = C + 1; L < c && "%" == h[L]; ++L);
                                for (var k = C && "!" == h[C - 1] || L < c && "1" == h[L] ? "1" : "N", T = C; T < L; ++T) h[T] = k;
                                C = L - 1
                            }
                        }
                        for (var M = 0, N = u; M < c; ++M) {
                            var O = h[M];
                            "L" == N && "1" == O ? h[M] = "L" : o.test(O) && (N = O)
                        }
                        for (var A = 0; A < c; ++A)
                            if (i.test(h[A])) {
                                var D = void 0;
                                for (D = A + 1; D < c && i.test(h[D]); ++D);
                                for (var W = "L" == (A ? h[A - 1] : u), H = "L" == (D < c ? h[D] : u), F = W == H ? W ? "L" : "R" : u, P = A; P < D; ++P) h[P] = F;
                                A = D - 1
                            } for (var E, I = [], z = 0; z < c;)
                            if (l.test(h[z])) {
                                var R = z;
                                for (++z; z < c && l.test(h[z]); ++z);
                                I.push(new a(0, R, z))
                            } else {
                                var B = z,
                                    G = I.length;
                                for (++z; z < c && "L" != h[z]; ++z);
                                for (var U = B; U < z;)
                                    if (s.test(h[U])) {
                                        B < U && I.splice(G, 0, new a(1, B, U));
                                        var V = U;
                                        for (++U; U < z && s.test(h[U]); ++U);
                                        I.splice(G, 0, new a(2, V, U)), B = U
                                    } else ++U;
                                B < z && I.splice(G, 0, new a(1, B, z))
                            } return "ltr" == t && (1 == I[0].level && (E = e.match(/^\s+/)) && (I[0].from = E[0].length, I.unshift(new a(0, 0, E[0].length))), 1 == $(I).level && (E = e.match(/\s+$/)) && ($(I).to -= E[0].length, I.push(new a(0, c - E[0].length, c)))), "rtl" == t ? I.reverse() : I
                    }
                }();

                function ct(e, t) {
                    var r = e.order;
                    return null == r && (r = e.order = ut(e.text, t)), r
                }
                var ht = [],
                    ft = function(e, t, r) {
                        if (e.addEventListener) e.addEventListener(t, r, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, r);
                        else {
                            var n = e._handlers || (e._handlers = {});
                            n[t] = (n[t] || ht).concat(r)
                        }
                    };

                function dt(e, t) {
                    return e._handlers && e._handlers[t] || ht
                }

                function pt(e, t, r) {
                    if (e.removeEventListener) e.removeEventListener(t, r, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, r);
                    else {
                        var n = e._handlers,
                            i = n && n[t];
                        if (i) {
                            var o = B(i, r);
                            o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)))
                        }
                    }
                }

                function gt(e, t) {
                    var r = dt(e, t);
                    if (r.length)
                        for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n)
                }

                function vt(e, t, r) {
                    return "string" == typeof t && (t = {
                        type: t,
                        preventDefault: function() {
                            this.defaultPrevented = !0
                        }
                    }), gt(e, r || t.type, e, t), Ct(t) || t.codemirrorIgnore
                }

                function mt(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t)
                        for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == B(r, t[n]) && r.push(t[n])
                }

                function yt(e, t) {
                    return dt(e, t).length > 0
                }

                function bt(e) {
                    e.prototype.on = function(e, t) {
                        ft(this, e, t)
                    }, e.prototype.off = function(e, t) {
                        pt(this, e, t)
                    }
                }

                function wt(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }

                function xt(e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }

                function Ct(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
                }

                function St(e) {
                    wt(e), xt(e)
                }

                function Lt(e) {
                    return e.target || e.srcElement
                }

                function kt(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t
                }
                var Tt, Mt, Nt = function() {
                    if (l && s < 9) return !1;
                    var e = O("div");
                    return "draggable" in e || "dragDrop" in e
                }();

                function Ot(e) {
                    if (null == Tt) {
                        var t = O("span", "​");
                        N(e, O("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Tt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && s < 8))
                    }
                    var r = Tt ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return r.setAttribute("cm-text", ""), r
                }

                function At(e) {
                    if (null != Mt) return Mt;
                    var t = N(e, document.createTextNode("AخA")),
                        r = k(t, 0, 1).getBoundingClientRect(),
                        n = k(t, 1, 2).getBoundingClientRect();
                    return M(e), !(!r || r.left == r.right) && (Mt = n.right - r.right < 3)
                }
                var Dt = 3 != "\n\nb".split(/\n/).length ? function(e) {
                        var t = 0,
                            r = [],
                            n = e.length;
                        while (t <= n) {
                            var i = e.indexOf("\n", t); - 1 == i && (i = e.length);
                            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1)
                        }
                        return r
                    } : function(e) {
                        return e.split(/\r\n?|\n/)
                    },
                    Wt = window.getSelection ? function(e) {
                        try {
                            return e.selectionStart != e.selectionEnd
                        } catch (t) {
                            return !1
                        }
                    } : function(e) {
                        var t;
                        try {
                            t = e.ownerDocument.selection.createRange()
                        } catch (r) {}
                        return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
                    },
                    Ht = function() {
                        var e = O("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy)
                    }(),
                    Ft = null;

                function Pt(e) {
                    if (null != Ft) return Ft;
                    var t = N(e, O("span", "x")),
                        r = t.getBoundingClientRect(),
                        n = k(t, 0, 1).getBoundingClientRect();
                    return Ft = Math.abs(r.left - n.left) > 1
                }
                var Et = {},
                    It = {};

                function zt(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Et[e] = t
                }

                function Rt(e, t) {
                    It[e] = t
                }

                function Bt(e) {
                    if ("string" == typeof e && It.hasOwnProperty(e)) e = It[e];
                    else if (e && "string" == typeof e.name && It.hasOwnProperty(e.name)) {
                        var t = It[e.name];
                        "string" == typeof t && (t = {
                            name: t
                        }), e = Q(t, e), e.name = t.name
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Bt("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Bt("application/json")
                    }
                    return "string" == typeof e ? {
                        name: e
                    } : e || {
                        name: "null"
                    }
                }

                function Gt(e, t) {
                    t = Bt(t);
                    var r = Et[t.name];
                    if (!r) return Gt(e, "text/plain");
                    var n = r(e, t);
                    if (Ut.hasOwnProperty(t.name)) {
                        var i = Ut[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o])
                    }
                    if (n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps)
                        for (var l in t.modeProps) n[l] = t.modeProps[l];
                    return n
                }
                var Ut = {};

                function Vt(e, t) {
                    var r = Ut.hasOwnProperty(e) ? Ut[e] : Ut[e] = {};
                    I(t, r)
                }

                function Kt(e, t) {
                    if (!0 === t) return t;
                    if (e.copyState) return e.copyState(t);
                    var r = {};
                    for (var n in t) {
                        var i = t[n];
                        i instanceof Array && (i = i.concat([])), r[n] = i
                    }
                    return r
                }

                function jt(e, t) {
                    var r;
                    while (e.innerMode) {
                        if (r = e.innerMode(t), !r || r.mode == e) break;
                        t = r.state, e = r.mode
                    }
                    return r || {
                        mode: e,
                        state: t
                    }
                }

                function Xt(e, t, r) {
                    return !e.startState || e.startState(t, r)
                }
                var Yt = function(e, t, r) {
                    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r
                };
                Yt.prototype.eol = function() {
                    return this.pos >= this.string.length
                }, Yt.prototype.sol = function() {
                    return this.pos == this.lineStart
                }, Yt.prototype.peek = function() {
                    return this.string.charAt(this.pos) || void 0
                }, Yt.prototype.next = function() {
                    if (this.pos < this.string.length) return this.string.charAt(this.pos++)
                }, Yt.prototype.eat = function(e) {
                    var t, r = this.string.charAt(this.pos);
                    if (t = "string" == typeof e ? r == e : r && (e.test ? e.test(r) : e(r)), t) return ++this.pos, r
                }, Yt.prototype.eatWhile = function(e) {
                    var t = this.pos;
                    while (this.eat(e));
                    return this.pos > t
                }, Yt.prototype.eatSpace = function() {
                    var e = this,
                        t = this.pos;
                    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++e.pos;
                    return this.pos > t
                }, Yt.prototype.skipToEnd = function() {
                    this.pos = this.string.length
                }, Yt.prototype.skipTo = function(e) {
                    var t = this.string.indexOf(e, this.pos);
                    if (t > -1) return this.pos = t, !0
                }, Yt.prototype.backUp = function(e) {
                    this.pos -= e
                }, Yt.prototype.column = function() {
                    return this.lastColumnPos < this.start && (this.lastColumnValue = z(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
                }, Yt.prototype.indentation = function() {
                    return z(this.string, null, this.tabSize) - (this.lineStart ? z(this.string, this.lineStart, this.tabSize) : 0)
                }, Yt.prototype.match = function(e, t, r) {
                    if ("string" != typeof e) {
                        var n = this.string.slice(this.pos).match(e);
                        return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n)
                    }
                    var i = function(e) {
                            return r ? e.toLowerCase() : e
                        },
                        o = this.string.substr(this.pos, e.length);
                    if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0
                }, Yt.prototype.current = function() {
                    return this.string.slice(this.start, this.pos)
                }, Yt.prototype.hideFirstChars = function(e, t) {
                    this.lineStart += e;
                    try {
                        return t()
                    } finally {
                        this.lineStart -= e
                    }
                }, Yt.prototype.lookAhead = function(e) {
                    var t = this.lineOracle;
                    return t && t.lookAhead(e)
                }, Yt.prototype.baseToken = function() {
                    var e = this.lineOracle;
                    return e && e.baseToken(this.pos)
                };
                var _t = function(e, t) {
                        this.state = e, this.lookAhead = t
                    },
                    $t = function(e, t, r, n) {
                        this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1
                    };

                function qt(e, t, r, n) {
                    var i = [e.state.modeGen],
                        o = {};
                    or(e, t.text, e.doc.mode, r, (function(e, t) {
                        return i.push(e, t)
                    }), o, n);
                    for (var l = r.state, s = function(n) {
                            r.baseTokens = i;
                            var s = e.state.overlays[n],
                                a = 1,
                                u = 0;
                            r.state = !0, or(e, t.text, s.mode, r, (function(e, t) {
                                var r = a;
                                while (u < e) {
                                    var n = i[a];
                                    n > e && i.splice(a, 1, e, i[a + 1], n), a += 2, u = Math.min(e, n)
                                }
                                if (t)
                                    if (s.opaque) i.splice(r, a - r, e, "overlay " + t), a = r + 2;
                                    else
                                        for (; r < a; r += 2) {
                                            var o = i[r + 1];
                                            i[r + 1] = (o ? o + " " : "") + "overlay " + t
                                        }
                            }), o), r.state = l, r.baseTokens = null, r.baseTokenPos = 1
                        }, a = 0; a < e.state.overlays.length; ++a) s(a);
                    return {
                        styles: i,
                        classes: o.bgClass || o.textClass ? o : null
                    }
                }

                function Zt(e, t, r) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var n = Jt(e, de(t)),
                            i = t.text.length > e.options.maxHighlightLength && Kt(e.doc.mode, n.state),
                            o = qt(e, t, n);
                        i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
                    }
                    return t.styles
                }

                function Jt(e, t, r) {
                    var n = e.doc,
                        i = e.display;
                    if (!n.mode.startState) return new $t(n, !0, t);
                    var o = lr(e, t, r),
                        l = o > n.first && ue(n, o - 1).stateAfter,
                        s = l ? $t.fromSaved(n, l, o) : new $t(n, Xt(n.mode), o);
                    return n.iter(o, t, (function(r) {
                        Qt(e, r.text, s);
                        var n = s.line;
                        r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? s.save() : null, s.nextLine()
                    })), r && (n.modeFrontier = s.line), s
                }

                function Qt(e, t, r, n) {
                    var i = e.doc.mode,
                        o = new Yt(t, e.options.tabSize, r);
                    o.start = o.pos = n || 0, "" == t && er(i, r.state);
                    while (!o.eol()) tr(i, o, r.state), o.start = o.pos
                }

                function er(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var r = jt(e, t);
                        return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0
                    }
                }

                function tr(e, t, r, n) {
                    for (var i = 0; i < 10; i++) {
                        n && (n[0] = jt(e, r).mode);
                        var o = e.token(t, r);
                        if (t.pos > t.start) return o
                    }
                    throw new Error("Mode " + e.name + " failed to advance stream.")
                }
                $t.prototype.lookAhead = function(e) {
                    var t = this.doc.getLine(this.line + e);
                    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t
                }, $t.prototype.baseToken = function(e) {
                    var t = this;
                    if (!this.baseTokens) return null;
                    while (this.baseTokens[this.baseTokenPos] <= e) t.baseTokenPos += 2;
                    var r = this.baseTokens[this.baseTokenPos + 1];
                    return {
                        type: r && r.replace(/( |^)overlay .*/, ""),
                        size: this.baseTokens[this.baseTokenPos] - e
                    }
                }, $t.prototype.nextLine = function() {
                    this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
                }, $t.fromSaved = function(e, t, r) {
                    return t instanceof _t ? new $t(e, Kt(e.mode, t.state), r, t.lookAhead) : new $t(e, Kt(e.mode, t), r)
                }, $t.prototype.save = function(e) {
                    var t = !1 !== e ? Kt(this.doc.mode, this.state) : this.state;
                    return this.maxLookAhead > 0 ? new _t(t, this.maxLookAhead) : t
                };
                var rr = function(e, t, r) {
                    this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r
                };

                function nr(e, t, r, n) {
                    var i, o = e.doc,
                        l = o.mode;
                    t = Le(o, t);
                    var s, a = ue(o, t.line),
                        u = Jt(e, t.line, r),
                        c = new Yt(a.text, e.options.tabSize, u);
                    n && (s = []);
                    while ((n || c.pos < t.ch) && !c.eol()) c.start = c.pos, i = tr(l, c, u.state), n && s.push(new rr(c, i, Kt(o.mode, u.state)));
                    return n ? s : new rr(c, i, u.state)
                }

                function ir(e, t) {
                    if (e)
                        for (;;) {
                            var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!r) break;
                            e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
                            var n = r[1] ? "bgClass" : "textClass";
                            null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2])
                        }
                    return e
                }

                function or(e, t, r, n, i, o, l) {
                    var s = r.flattenSpans;
                    null == s && (s = e.options.flattenSpans);
                    var a, u = 0,
                        c = null,
                        h = new Yt(t, e.options.tabSize, n),
                        f = e.options.addModeClass && [null];
                    "" == t && ir(er(r, n.state), o);
                    while (!h.eol()) {
                        if (h.pos > e.options.maxHighlightLength ? (s = !1, l && Qt(e, t, n, h.pos), h.pos = t.length, a = null) : a = ir(tr(r, h, n.state, f), o), f) {
                            var d = f[0].name;
                            d && (a = "m-" + (a ? d + " " + a : d))
                        }
                        if (!s || c != a) {
                            while (u < h.start) u = Math.min(h.start, u + 5e3), i(u, c);
                            c = a
                        }
                        h.start = h.pos
                    }
                    while (u < h.pos) {
                        var p = Math.min(h.pos, u + 5e3);
                        i(p, c), u = p
                    }
                }

                function lr(e, t, r) {
                    for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
                        if (s <= o.first) return o.first;
                        var a = ue(o, s - 1),
                            u = a.stateAfter;
                        if (u && (!r || s + (u instanceof _t ? u.lookAhead : 0) <= o.modeFrontier)) return s;
                        var c = z(a.text, null, e.options.tabSize);
                        (null == i || n > c) && (i = s - 1, n = c)
                    }
                    return i
                }

                function sr(e, t) {
                    if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
                        for (var r = e.first, n = t - 1; n > r; n--) {
                            var i = ue(e, n).stateAfter;
                            if (i && (!(i instanceof _t) || n + i.lookAhead < t)) {
                                r = n + 1;
                                break
                            }
                        }
                        e.highlightFrontier = Math.min(e.highlightFrontier, r)
                    }
                }
                var ar = function(e, t, r) {
                    this.text = e, Ge(this, t), this.height = r ? r(this) : 1
                };

                function ur(e, t, r, n) {
                    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Be(e), Ge(e, r);
                    var i = n ? n(e) : 1;
                    i != e.height && fe(e, i)
                }

                function cr(e) {
                    e.parent = null, Be(e)
                }
                ar.prototype.lineNo = function() {
                    return de(this)
                }, bt(ar);
                var hr = {},
                    fr = {};

                function dr(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var r = t.addModeClass ? fr : hr;
                    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"))
                }

                function pr(e, t) {
                    var r = A("span", null, null, a ? "padding-right: .1px" : null),
                        n = {
                            pre: A("pre", [r], "CodeMirror-line"),
                            content: r,
                            col: 0,
                            pos: 0,
                            cm: e,
                            trailingSpace: !1,
                            splitSpaces: e.getOption("lineWrapping")
                        };
                    t.measure = {};
                    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                        var o = i ? t.rest[i - 1] : t.line,
                            l = void 0;
                        n.pos = 0, n.addToken = vr, At(e.display.measure) && (l = ct(o, e.doc.direction)) && (n.addToken = yr(n.addToken, l)), n.map = [];
                        var s = t != e.display.externalMeasured && de(o);
                        wr(o, n, Zt(e, o, s)), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = F(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = F(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Ot(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}))
                    }
                    if (a) {
                        var u = n.content.lastChild;
                        (/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack")
                    }
                    return gt(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = F(n.pre.className, n.textClass || "")), n
                }

                function gr(e) {
                    var t = O("span", "•", "cm-invalidchar");
                    return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t
                }

                function vr(e, t, r, n, i, o, a) {
                    if (t) {
                        var u, c = e.splitSpaces ? mr(t, e.trailingSpace) : t,
                            h = e.cm.state.specialChars,
                            f = !1;
                        if (h.test(t)) {
                            u = document.createDocumentFragment();
                            var d = 0;
                            while (1) {
                                h.lastIndex = d;
                                var p = h.exec(t),
                                    g = p ? p.index - d : t.length - d;
                                if (g) {
                                    var v = document.createTextNode(c.slice(d, d + g));
                                    l && s < 9 ? u.appendChild(O("span", [v])) : u.appendChild(v), e.map.push(e.pos, e.pos + g, v), e.col += g, e.pos += g
                                }
                                if (!p) break;
                                d += g + 1;
                                var m = void 0;
                                if ("\t" == p[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - e.col % y;
                                    m = u.appendChild(O("span", _(b), "cm-tab")), m.setAttribute("role", "presentation"), m.setAttribute("cm-text", "\t"), e.col += b
                                } else "\r" == p[0] || "\n" == p[0] ? (m = u.appendChild(O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")), m.setAttribute("cm-text", p[0]), e.col += 1) : (m = e.cm.options.specialCharPlaceholder(p[0]), m.setAttribute("cm-text", p[0]), l && s < 9 ? u.appendChild(O("span", [m])) : u.appendChild(m), e.col += 1);
                                e.map.push(e.pos, e.pos + 1, m), e.pos++
                            }
                        } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), l && s < 9 && (f = !0), e.pos += t.length;
                        if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1), r || n || i || f || o) {
                            var w = r || "";
                            n && (w += n), i && (w += i);
                            var x = O("span", [u], w, o);
                            if (a)
                                for (var C in a) a.hasOwnProperty(C) && "style" != C && "class" != C && x.setAttribute(C, a[C]);
                            return e.content.appendChild(x)
                        }
                        e.content.appendChild(u)
                    }
                }

                function mr(e, t) {
                    if (e.length > 1 && !/  /.test(e)) return e;
                    for (var r = t, n = "", i = 0; i < e.length; i++) {
                        var o = e.charAt(i);
                        " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), n += o, r = " " == o
                    }
                    return n
                }

                function yr(e, t) {
                    return function(r, n, i, o, l, s, a) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var u = r.pos, c = u + n.length;;) {
                            for (var h = void 0, f = 0; f < t.length; f++)
                                if (h = t[f], h.to > u && h.from <= u) break;
                            if (h.to >= c) return e(r, n, i, o, l, s, a);
                            e(r, n.slice(0, h.to - u), i, o, null, s, a), o = null, n = n.slice(h.to - u), u = h.to
                        }
                    }
                }

                function br(e, t, r, n) {
                    var i = !n && r.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1
                }

                function wr(e, t, r) {
                    var n = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (n)
                        for (var l, s, a, u, c, h, f, d = i.length, p = 0, g = 1, v = "", m = 0;;) {
                            if (m == p) {
                                a = u = c = s = "", f = null, h = null, m = 1 / 0;
                                for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                                    var x = n[w],
                                        C = x.marker;
                                    if ("bookmark" == C.type && x.from == p && C.widgetNode) y.push(C);
                                    else if (x.from <= p && (null == x.to || x.to > p || C.collapsed && x.to == p && x.from == p)) {
                                        if (null != x.to && x.to != p && m > x.to && (m = x.to, u = ""), C.className && (a += " " + C.className), C.css && (s = (s ? s + ";" : "") + C.css), C.startStyle && x.from == p && (c += " " + C.startStyle), C.endStyle && x.to == m && (b || (b = [])).push(C.endStyle, x.to), C.title && ((f || (f = {})).title = C.title), C.attributes)
                                            for (var S in C.attributes)(f || (f = {}))[S] = C.attributes[S];
                                        C.collapsed && (!h || Ke(h.marker, C) < 0) && (h = x)
                                    } else x.from > p && m > x.from && (m = x.from)
                                }
                                if (b)
                                    for (var L = 0; L < b.length; L += 2) b[L + 1] == m && (u += " " + b[L]);
                                if (!h || h.from == p)
                                    for (var k = 0; k < y.length; ++k) br(t, 0, y[k]);
                                if (h && (h.from || 0) == p) {
                                    if (br(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to) return;
                                    h.to == p && (h = !1)
                                }
                            }
                            if (p >= d) break;
                            var T = Math.min(d, m);
                            while (1) {
                                if (v) {
                                    var M = p + v.length;
                                    if (!h) {
                                        var N = M > T ? v.slice(0, T - p) : v;
                                        t.addToken(t, N, l ? l + a : a, c, p + N.length == m ? u : "", s, f)
                                    }
                                    if (M >= T) {
                                        v = v.slice(T - p), p = T;
                                        break
                                    }
                                    p = M, c = ""
                                }
                                v = i.slice(o, o = r[g++]), l = dr(r[g++], t.cm.options)
                            }
                        } else
                            for (var O = 1; O < r.length; O += 2) t.addToken(t, i.slice(o, o = r[O]), dr(r[O + 1], t.cm.options))
                }

                function xr(e, t, r) {
                    this.line = t, this.rest = Je(t), this.size = this.rest ? de($(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = tt(e, t)
                }

                function Cr(e, t, r) {
                    for (var n, i = [], o = t; o < r; o = n) {
                        var l = new xr(e.doc, ue(e.doc, o), o);
                        n = o + l.size, i.push(l)
                    }
                    return i
                }
                var Sr = null;

                function Lr(e) {
                    Sr ? Sr.ops.push(e) : e.ownsGroup = Sr = {
                        ops: [e],
                        delayedCallbacks: []
                    }
                }

                function kr(e) {
                    var t = e.delayedCallbacks,
                        r = 0;
                    do {
                        for (; r < t.length; r++) t[r].call(null);
                        for (var n = 0; n < e.ops.length; n++) {
                            var i = e.ops[n];
                            if (i.cursorActivityHandlers)
                                while (i.cursorActivityCalled < i.cursorActivityHandlers.length) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                        }
                    } while (r < t.length)
                }

                function Tr(e, t) {
                    var r = e.ownsGroup;
                    if (r) try {
                        kr(r)
                    } finally {
                        Sr = null, t(r)
                    }
                }
                var Mr = null;

                function Nr(e, t) {
                    var r = dt(e, t);
                    if (r.length) {
                        var n, i = Array.prototype.slice.call(arguments, 2);
                        Sr ? n = Sr.delayedCallbacks : Mr ? n = Mr : (n = Mr = [], setTimeout(Or, 0));
                        for (var o = function(e) {
                                n.push((function() {
                                    return r[e].apply(null, i)
                                }))
                            }, l = 0; l < r.length; ++l) o(l)
                    }
                }

                function Or() {
                    var e = Mr;
                    Mr = null;
                    for (var t = 0; t < e.length; ++t) e[t]()
                }

                function Ar(e, t, r, n) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? Fr(e, t) : "gutter" == o ? Er(e, t, r, n) : "class" == o ? Pr(e, t) : "widget" == o && Ir(e, t, n)
                    }
                    t.changes = null
                }

                function Dr(e) {
                    return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), l && s < 8 && (e.node.style.zIndex = 2)), e.node
                }

                function Wr(e, t) {
                    var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                    if (r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null);
                    else if (r) {
                        var n = Dr(t);
                        t.background = n.insertBefore(O("div", null, r), n.firstChild), e.display.input.setUneditable(t.background)
                    }
                }

                function Hr(e, t) {
                    var r = e.display.externalMeasured;
                    return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : pr(e, t)
                }

                function Fr(e, t) {
                    var r = t.text.className,
                        n = Hr(e, t);
                    t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, Pr(e, t)) : r && (t.text.className = r)
                }

                function Pr(e, t) {
                    Wr(e, t), t.line.wrapClass ? Dr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
                    var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                    t.text.className = r || ""
                }

                function Er(e, t, r, n) {
                    if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
                        var i = Dr(t);
                        t.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text)
                    }
                    var o = t.line.gutterMarkers;
                    if (e.options.lineNumbers || o) {
                        var l = Dr(t),
                            s = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px");
                        if (e.display.input.setUneditable(s), l.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(O("div", ve(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
                            for (var a = 0; a < e.options.gutters.length; ++a) {
                                var u = e.options.gutters[a],
                                    c = o.hasOwnProperty(u) && o[u];
                                c && s.appendChild(O("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px"))
                            }
                    }
                }

                function Ir(e, t, r) {
                    t.alignable && (t.alignable = null);
                    for (var n = t.node.firstChild, i = void 0; n; n = i) i = n.nextSibling, "CodeMirror-linewidget" == n.className && t.node.removeChild(n);
                    Rr(e, t, r)
                }

                function zr(e, t, r, n) {
                    var i = Hr(e, t);
                    return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Pr(e, t), Er(e, t, r, n), Rr(e, t, n), t.node
                }

                function Rr(e, t, r) {
                    if (Br(e, t.line, t, r, !0), t.rest)
                        for (var n = 0; n < t.rest.length; n++) Br(e, t.rest[n], t, r, !1)
                }

                function Br(e, t, r, n, i) {
                    if (t.widgets)
                        for (var o = Dr(r), l = 0, s = t.widgets; l < s.length; ++l) {
                            var a = s[l],
                                u = O("div", [a.node], "CodeMirror-linewidget");
                            a.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), Gr(a, u, r, n), e.display.input.setUneditable(u), i && a.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), Nr(a, "redraw")
                        }
                }

                function Gr(e, t, r, n) {
                    if (e.noHScroll) {
                        (r.alignable || (r.alignable = [])).push(t);
                        var i = n.wrapperWidth;
                        t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px"
                    }
                    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"))
                }

                function Ur(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!D(document.body, e.node)) {
                        var r = "position: relative;";
                        e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), N(t.display.measure, O("div", [e.node], null, r))
                    }
                    return e.height = e.node.parentNode.offsetHeight
                }

                function Vr(e, t) {
                    for (var r = Lt(t); r != e.wrapper; r = r.parentNode)
                        if (!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0
                }

                function Kr(e) {
                    return e.lineSpace.offsetTop
                }

                function jr(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight
                }

                function Xr(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = N(e.measure, O("pre", "x")),
                        r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        n = {
                            left: parseInt(r.paddingLeft),
                            right: parseInt(r.paddingRight)
                        };
                    return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n
                }

                function Yr(e) {
                    return G - e.display.nativeBarWidth
                }

                function _r(e) {
                    return e.display.scroller.clientWidth - Yr(e) - e.display.barWidth
                }

                function $r(e) {
                    return e.display.scroller.clientHeight - Yr(e) - e.display.barHeight
                }

                function qr(e, t, r) {
                    var n = e.options.lineWrapping,
                        i = n && _r(e);
                    if (!t.measure.heights || n && t.measure.width != i) {
                        var o = t.measure.heights = [];
                        if (n) {
                            t.measure.width = i;
                            for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
                                var a = l[s],
                                    u = l[s + 1];
                                Math.abs(a.bottom - u.bottom) > 2 && o.push((a.bottom + u.top) / 2 - r.top)
                            }
                        }
                        o.push(r.bottom - r.top)
                    }
                }

                function Zr(e, t, r) {
                    if (e.line == t) return {
                        map: e.measure.map,
                        cache: e.measure.cache
                    };
                    for (var n = 0; n < e.rest.length; n++)
                        if (e.rest[n] == t) return {
                            map: e.measure.maps[n],
                            cache: e.measure.caches[n]
                        };
                    for (var i = 0; i < e.rest.length; i++)
                        if (de(e.rest[i]) > r) return {
                            map: e.measure.maps[i],
                            cache: e.measure.caches[i],
                            before: !0
                        }
                }

                function Jr(e, t) {
                    t = qe(t);
                    var r = de(t),
                        n = e.display.externalMeasured = new xr(e.doc, t, r);
                    n.lineN = r;
                    var i = n.built = pr(e, n);
                    return n.text = i.pre, N(e.display.lineMeasure, i.pre), n
                }

                function Qr(e, t, r, n) {
                    return rn(e, tn(e, t), r, n)
                }

                function en(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[En(e, t)];
                    var r = e.display.externalMeasured;
                    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0
                }

                function tn(e, t) {
                    var r = de(t),
                        n = en(e, r);
                    n && !n.text ? n = null : n && n.changes && (Ar(e, n, r, Dn(e)), e.curOp.forceUpdate = !0), n || (n = Jr(e, t));
                    var i = Zr(n, t, r);
                    return {
                        line: t,
                        view: n,
                        rect: null,
                        map: i.map,
                        cache: i.cache,
                        before: i.before,
                        hasHeights: !1
                    }
                }

                function rn(e, t, r, n, i) {
                    t.before && (r = -1);
                    var o, l = r + (n || "");
                    return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (qr(e, t.view, t.rect), t.hasHeights = !0), o = an(e, t, r, n), o.bogus || (t.cache[l] = o)), {
                        left: o.left,
                        right: o.right,
                        top: i ? o.rtop : o.top,
                        bottom: i ? o.rbottom : o.bottom
                    }
                }
                var nn, on = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                };

                function ln(e, t, r) {
                    for (var n, i, o, l, s, a, u = 0; u < e.length; u += 3)
                        if (s = e[u], a = e[u + 1], t < s ? (i = 0, o = 1, l = "left") : t < a ? (i = t - s, o = i + 1) : (u == e.length - 3 || t == a && e[u + 3] > t) && (o = a - s, i = o - 1, t >= a && (l = "right")), null != i) {
                            if (n = e[u + 2], s == a && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)
                                while (u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft) n = e[2 + (u -= 3)], l = "left";
                            if ("right" == r && i == a - s)
                                while (u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft) n = e[(u += 3) + 2], l = "right";
                            break
                        } return {
                        node: n,
                        start: i,
                        end: o,
                        collapse: l,
                        coverStart: s,
                        coverEnd: a
                    }
                }

                function sn(e, t) {
                    var r = on;
                    if ("left" == t) {
                        for (var n = 0; n < e.length; n++)
                            if ((r = e[n]).left != r.right) break
                    } else
                        for (var i = e.length - 1; i >= 0; i--)
                            if ((r = e[i]).left != r.right) break;
                    return r
                }

                function an(e, t, r, n) {
                    var i, o = ln(t.map, r, n),
                        a = o.node,
                        u = o.start,
                        c = o.end,
                        h = o.collapse;
                    if (3 == a.nodeType) {
                        for (var f = 0; f < 4; f++) {
                            while (u && oe(t.line.text.charAt(o.coverStart + u))) --u;
                            while (o.coverStart + c < o.coverEnd && oe(t.line.text.charAt(o.coverStart + c))) ++c;
                            if (i = l && s < 9 && 0 == u && c == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : sn(k(a, u, c).getClientRects(), n), i.left || i.right || 0 == u) break;
                            c = u, u -= 1, h = "right"
                        }
                        l && s < 11 && (i = un(e.display.measure, i))
                    } else {
                        var d;
                        u > 0 && (h = n = "right"), i = e.options.lineWrapping && (d = a.getClientRects()).length > 1 ? d["right" == n ? d.length - 1 : 0] : a.getBoundingClientRect()
                    }
                    if (l && s < 9 && !u && (!i || !i.left && !i.right)) {
                        var p = a.parentNode.getClientRects()[0];
                        i = p ? {
                            left: p.left,
                            right: p.left + An(e.display),
                            top: p.top,
                            bottom: p.bottom
                        } : on
                    }
                    for (var g = i.top - t.rect.top, v = i.bottom - t.rect.top, m = (g + v) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1; b++)
                        if (m < y[b]) break;
                    var w = b ? y[b - 1] : 0,
                        x = y[b],
                        C = {
                            left: ("right" == h ? i.right : i.left) - t.rect.left,
                            right: ("left" == h ? i.left : i.right) - t.rect.left,
                            top: w,
                            bottom: x
                        };
                    return i.left || i.right || (C.bogus = !0), e.options.singleCursorHeightPerLine || (C.rtop = g, C.rbottom = v), C
                }

                function un(e, t) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Pt(e)) return t;
                    var r = screen.logicalXDPI / screen.deviceXDPI,
                        n = screen.logicalYDPI / screen.deviceYDPI;
                    return {
                        left: t.left * r,
                        right: t.right * r,
                        top: t.top * n,
                        bottom: t.bottom * n
                    }
                }

                function cn(e) {
                    if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
                        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {}
                }

                function hn(e) {
                    e.display.externalMeasure = null, M(e.display.lineMeasure);
                    for (var t = 0; t < e.display.view.length; t++) cn(e.display.view[t])
                }

                function fn(e) {
                    hn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
                }

                function dn() {
                    return c && v ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
                }

                function pn() {
                    return c && v ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
                }

                function gn(e) {
                    var t = 0;
                    if (e.widgets)
                        for (var r = 0; r < e.widgets.length; ++r) e.widgets[r].above && (t += Ur(e.widgets[r]));
                    return t
                }

                function vn(e, t, r, n, i) {
                    if (!i) {
                        var o = gn(t);
                        r.top += o, r.bottom += o
                    }
                    if ("line" == n) return r;
                    n || (n = "local");
                    var l = nt(t);
                    if ("local" == n ? l += Kr(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) {
                        var s = e.display.lineSpace.getBoundingClientRect();
                        l += s.top + ("window" == n ? 0 : pn());
                        var a = s.left + ("window" == n ? 0 : dn());
                        r.left += a, r.right += a
                    }
                    return r.top += l, r.bottom += l, r
                }

                function mn(e, t, r) {
                    if ("div" == r) return t;
                    var n = t.left,
                        i = t.top;
                    if ("page" == r) n -= dn(), i -= pn();
                    else if ("local" == r || !r) {
                        var o = e.display.sizer.getBoundingClientRect();
                        n += o.left, i += o.top
                    }
                    var l = e.display.lineSpace.getBoundingClientRect();
                    return {
                        left: n - l.left,
                        top: i - l.top
                    }
                }

                function yn(e, t, r, n, i) {
                    return n || (n = ue(e.doc, t.line)), vn(e, n, Qr(e, n, t.ch, i), r)
                }

                function bn(e, t, r, n, i, o) {
                    function l(t, l) {
                        var s = rn(e, i, t, l ? "right" : "left", o);
                        return l ? s.left = s.right : s.right = s.left, vn(e, n, s, r)
                    }
                    n = n || ue(e.doc, t.line), i || (i = tn(e, n));
                    var s = ct(n, e.doc.direction),
                        a = t.ch,
                        u = t.sticky;
                    if (a >= n.text.length ? (a = n.text.length, u = "before") : a <= 0 && (a = 0, u = "after"), !s) return l("before" == u ? a - 1 : a, "before" == u);

                    function c(e, t, r) {
                        var n = s[t],
                            i = 1 == n.level;
                        return l(r ? e - 1 : e, i != r)
                    }
                    var h = at(s, a, u),
                        f = st,
                        d = c(a, h, "before" == u);
                    return null != f && (d.other = c(a, f, "before" != u)), d
                }

                function wn(e, t) {
                    var r = 0;
                    t = Le(e.doc, t), e.options.lineWrapping || (r = An(e.display) * t.ch);
                    var n = ue(e.doc, t.line),
                        i = nt(n) + Kr(e.display);
                    return {
                        left: r,
                        right: r,
                        top: i,
                        bottom: i + n.height
                    }
                }

                function xn(e, t, r, n, i) {
                    var o = me(e, t, r);
                    return o.xRel = i, n && (o.outside = !0), o
                }

                function Cn(e, t, r) {
                    var n = e.doc;
                    if (r += e.display.viewOffset, r < 0) return xn(n.first, 0, null, !0, -1);
                    var i = pe(n, r),
                        o = n.first + n.size - 1;
                    if (i > o) return xn(n.first + n.size - 1, ue(n, o).text.length, null, !0, 1);
                    t < 0 && (t = 0);
                    for (var l = ue(n, i);;) {
                        var s = Tn(e, l, i, t, r),
                            a = _e(l, s.ch + (s.xRel > 0 ? 1 : 0));
                        if (!a) return s;
                        var u = a.find(1);
                        if (u.line == i) return u;
                        l = ue(n, i = u.line)
                    }
                }

                function Sn(e, t, r, n) {
                    n -= gn(t);
                    var i = t.text.length,
                        o = se((function(t) {
                            return rn(e, r, t - 1).bottom <= n
                        }), i, 0);
                    return i = se((function(t) {
                        return rn(e, r, t).top > n
                    }), o, i), {
                        begin: o,
                        end: i
                    }
                }

                function Ln(e, t, r, n) {
                    r || (r = tn(e, t));
                    var i = vn(e, t, rn(e, r, n), "line").top;
                    return Sn(e, t, r, i)
                }

                function kn(e, t, r, n) {
                    return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t)
                }

                function Tn(e, t, r, n, i) {
                    i -= nt(t);
                    var o = tn(e, t),
                        l = gn(t),
                        s = 0,
                        a = t.text.length,
                        u = !0,
                        c = ct(t, e.doc.direction);
                    if (c) {
                        var h = (e.options.lineWrapping ? Nn : Mn)(e, t, r, o, c, n, i);
                        u = 1 != h.level, s = u ? h.from : h.to - 1, a = u ? h.to : h.from - 1
                    }
                    var f, d, p = null,
                        g = null,
                        v = se((function(t) {
                            var r = rn(e, o, t);
                            return r.top += l, r.bottom += l, !!kn(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t, g = r), !0)
                        }), s, a),
                        m = !1;
                    if (g) {
                        var y = n - g.left < g.right - n,
                            b = y == u;
                        v = p + (b ? 0 : 1), d = b ? "after" : "before", f = y ? g.left : g.right
                    } else {
                        u || v != a && v != s || v++, d = 0 == v ? "after" : v == t.text.length ? "before" : rn(e, o, v - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before";
                        var w = bn(e, me(r, v, d), "line", t, o);
                        f = w.left, m = i < w.top || i >= w.bottom
                    }
                    return v = le(t.text, v, 1), xn(r, v, d, m, n - f)
                }

                function Mn(e, t, r, n, i, o, l) {
                    var s = se((function(s) {
                            var a = i[s],
                                u = 1 != a.level;
                            return kn(bn(e, me(r, u ? a.to : a.from, u ? "before" : "after"), "line", t, n), o, l, !0)
                        }), 0, i.length - 1),
                        a = i[s];
                    if (s > 0) {
                        var u = 1 != a.level,
                            c = bn(e, me(r, u ? a.from : a.to, u ? "after" : "before"), "line", t, n);
                        kn(c, o, l, !0) && c.top > l && (a = i[s - 1])
                    }
                    return a
                }

                function Nn(e, t, r, n, i, o, l) {
                    var s = Sn(e, t, n, l),
                        a = s.begin,
                        u = s.end;
                    /\s/.test(t.text.charAt(u - 1)) && u--;
                    for (var c = null, h = null, f = 0; f < i.length; f++) {
                        var d = i[f];
                        if (!(d.from >= u || d.to <= a)) {
                            var p = 1 != d.level,
                                g = rn(e, n, p ? Math.min(u, d.to) - 1 : Math.max(a, d.from)).right,
                                v = g < o ? o - g + 1e9 : g - o;
                            (!c || h > v) && (c = d, h = v)
                        }
                    }
                    return c || (c = i[i.length - 1]), c.from < a && (c = {
                        from: a,
                        to: c.to,
                        level: c.level
                    }), c.to > u && (c = {
                        from: c.from,
                        to: u,
                        level: c.level
                    }), c
                }

                function On(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == nn) {
                        nn = O("pre");
                        for (var t = 0; t < 49; ++t) nn.appendChild(document.createTextNode("x")), nn.appendChild(O("br"));
                        nn.appendChild(document.createTextNode("x"))
                    }
                    N(e.measure, nn);
                    var r = nn.offsetHeight / 50;
                    return r > 3 && (e.cachedTextHeight = r), M(e.measure), r || 1
                }

                function An(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = O("span", "xxxxxxxxxx"),
                        r = O("pre", [t]);
                    N(e.measure, r);
                    var n = t.getBoundingClientRect(),
                        i = (n.right - n.left) / 10;
                    return i > 2 && (e.cachedCharWidth = i), i || 10
                }

                function Dn(e) {
                    for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i, n[e.options.gutters[l]] = o.clientWidth;
                    return {
                        fixedPos: Wn(t),
                        gutterTotalWidth: t.gutters.offsetWidth,
                        gutterLeft: r,
                        gutterWidth: n,
                        wrapperWidth: t.wrapper.clientWidth
                    }
                }

                function Wn(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
                }

                function Hn(e) {
                    var t = On(e.display),
                        r = e.options.lineWrapping,
                        n = r && Math.max(5, e.display.scroller.clientWidth / An(e.display) - 3);
                    return function(i) {
                        if (tt(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets)
                            for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                        return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t
                    }
                }

                function Fn(e) {
                    var t = e.doc,
                        r = Hn(e);
                    t.iter((function(e) {
                        var t = r(e);
                        t != e.height && fe(e, t)
                    }))
                }

                function Pn(e, t, r, n) {
                    var i = e.display;
                    if (!r && "true" == Lt(t).getAttribute("cm-not-content")) return null;
                    var o, l, s = i.lineSpace.getBoundingClientRect();
                    try {
                        o = t.clientX - s.left, l = t.clientY - s.top
                    } catch (t) {
                        return null
                    }
                    var a, u = Cn(e, o, l);
                    if (n && 1 == u.xRel && (a = ue(e.doc, u.line).text).length == u.ch) {
                        var c = z(a, a.length, e.options.tabSize) - a.length;
                        u = me(u.line, Math.max(0, Math.round((o - Xr(e.display).left) / An(e.display)) - c))
                    }
                    return u
                }

                function En(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if (t -= e.display.viewFrom, t < 0) return null;
                    for (var r = e.display.view, n = 0; n < r.length; n++)
                        if (t -= r[n].size, t < 0) return n
                }

                function In(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection())
                }

                function zn(e, t) {
                    void 0 === t && (t = !0);
                    for (var r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++)
                        if (t || l != r.sel.primIndex) {
                            var s = r.sel.ranges[l];
                            if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                                var a = s.empty();
                                (a || e.options.showCursorWhenSelecting) && Rn(e, s.head, i), a || Gn(e, s, o)
                            }
                        } return n
                }

                function Rn(e, t, r) {
                    var n = bn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        i = r.appendChild(O("div", " ", "CodeMirror-cursor"));
                    if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
                        var o = r.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px"
                    }
                }

                function Bn(e, t) {
                    return e.top - t.top || e.left - t.left
                }

                function Gn(e, t, r) {
                    var n = e.display,
                        i = e.doc,
                        o = document.createDocumentFragment(),
                        l = Xr(e.display),
                        s = l.left,
                        a = Math.max(n.sizerWidth, _r(e) - n.sizer.offsetLeft) - l.right,
                        u = "ltr" == i.direction;

                    function c(e, t, r, n) {
                        t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? a - e : r) + "px;\n                             height: " + (n - t) + "px"))
                    }

                    function h(t, r, n) {
                        var o, l, h = ue(i, t),
                            f = h.text.length;

                        function d(r, n) {
                            return yn(e, me(t, r), "div", h, n)
                        }

                        function p(t, r, n) {
                            var i = Ln(e, h, null, t),
                                o = "ltr" == r == ("after" == n) ? "left" : "right",
                                l = "after" == n ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1);
                            return d(l, o)[o]
                        }
                        var g = ct(h, i.direction);
                        return lt(g, r || 0, null == n ? f : n, (function(e, t, i, h) {
                            var v = "ltr" == i,
                                m = d(e, v ? "left" : "right"),
                                y = d(t - 1, v ? "right" : "left"),
                                b = null == r && 0 == e,
                                w = null == n && t == f,
                                x = 0 == h,
                                C = !g || h == g.length - 1;
                            if (y.top - m.top <= 3) {
                                var S = (u ? b : w) && x,
                                    L = (u ? w : b) && C,
                                    k = S ? s : (v ? m : y).left,
                                    T = L ? a : (v ? y : m).right;
                                c(k, m.top, T - k, m.bottom)
                            } else {
                                var M, N, O, A;
                                v ? (M = u && b && x ? s : m.left, N = u ? a : p(e, i, "before"), O = u ? s : p(t, i, "after"), A = u && w && C ? a : y.right) : (M = u ? p(e, i, "before") : s, N = !u && b && x ? a : m.right, O = !u && w && C ? s : y.left, A = u ? p(t, i, "after") : a), c(M, m.top, N - M, m.bottom), m.bottom < y.top && c(s, m.bottom, null, y.top), c(O, y.top, A - O, y.bottom)
                            }(!o || Bn(m, o) < 0) && (o = m), Bn(y, o) < 0 && (o = y), (!l || Bn(m, l) < 0) && (l = m), Bn(y, l) < 0 && (l = y)
                        })), {
                            start: o,
                            end: l
                        }
                    }
                    var f = t.from(),
                        d = t.to();
                    if (f.line == d.line) h(f.line, f.ch, d.ch);
                    else {
                        var p = ue(i, f.line),
                            g = ue(i, d.line),
                            v = qe(p) == qe(g),
                            m = h(f.line, f.ch, v ? p.text.length + 1 : null).end,
                            y = h(d.line, v ? 0 : null, d.ch).start;
                        v && (m.top < y.top - 2 ? (c(m.right, m.top, null, m.bottom), c(s, y.top, y.left, y.bottom)) : c(m.right, m.top, y.left - m.right, m.bottom)), m.bottom < y.top && c(s, m.bottom, null, y.top)
                    }
                    r.appendChild(o)
                }

                function Un(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var r = !0;
                        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval((function() {
                            return t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden"
                        }), e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
                    }
                }

                function Vn(e) {
                    e.state.focused || (e.display.input.focus(), jn(e))
                }

                function Kn(e) {
                    e.state.delayingBlurEvent = !0, setTimeout((function() {
                        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Xn(e))
                    }), 100)
                }

                function jn(e, t) {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (gt(e, "focus", e, t), e.state.focused = !0, H(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), a && setTimeout((function() {
                        return e.display.input.reset(!0)
                    }), 20)), e.display.input.receivedFocus()), Un(e))
                }

                function Xn(e, t) {
                    e.state.delayingBlurEvent || (e.state.focused && (gt(e, "blur", e, t), e.state.focused = !1, T(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout((function() {
                        e.state.focused || (e.display.shift = !1)
                    }), 150))
                }

                function Yn(e) {
                    for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
                        var i = t.view[n],
                            o = e.options.lineWrapping,
                            a = void 0,
                            u = 0;
                        if (!i.hidden) {
                            if (l && s < 8) {
                                var c = i.node.offsetTop + i.node.offsetHeight;
                                a = c - r, r = c
                            } else {
                                var h = i.node.getBoundingClientRect();
                                a = h.bottom - h.top, !o && i.text.firstChild && (u = i.text.firstChild.getBoundingClientRect().right - h.left - 1)
                            }
                            var f = i.line.height - a;
                            if ((f > .005 || f < -.005) && (fe(i.line, a), _n(i.line), i.rest))
                                for (var d = 0; d < i.rest.length; d++) _n(i.rest[d]);
                            if (u > e.display.sizerWidth) {
                                var p = Math.ceil(u / An(e.display));
                                p > e.display.maxLineLength && (e.display.maxLineLength = p, e.display.maxLine = i.line, e.display.maxLineChanged = !0)
                            }
                        }
                    }
                }

                function _n(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) {
                            var r = e.widgets[t],
                                n = r.node.parentNode;
                            n && (r.height = n.offsetHeight)
                        }
                }

                function $n(e, t, r) {
                    var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
                    n = Math.floor(n - Kr(e));
                    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
                        o = pe(t, n),
                        l = pe(t, i);
                    if (r && r.ensure) {
                        var s = r.ensure.from.line,
                            a = r.ensure.to.line;
                        s < o ? (o = s, l = pe(t, nt(ue(t, s)) + e.wrapper.clientHeight)) : Math.min(a, t.lastLine()) >= l && (o = pe(t, nt(ue(t, a)) - e.wrapper.clientHeight), l = a)
                    }
                    return {
                        from: o,
                        to: Math.max(l, o + 1)
                    }
                }

                function qn(e) {
                    var t = e.display,
                        r = t.view;
                    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                        for (var n = Wn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
                            if (!r[l].hidden) {
                                e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                                var s = r[l].alignable;
                                if (s)
                                    for (var a = 0; a < s.length; a++) s[a].style.left = o
                            } e.options.fixedGutter && (t.gutters.style.left = n + i + "px")
                    }
                }

                function Zn(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        r = ve(e.options, t.first + t.size - 1),
                        n = e.display;
                    if (r.length != n.lineNumChars) {
                        var i = n.measure.appendChild(O("div", [O("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            o = i.firstChild.offsetWidth,
                            l = i.offsetWidth - o;
                        return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", Yi(e), !0
                    }
                    return !1
                }

                function Jn(e, t) {
                    if (!vt(e, "scrollCursorIntoView")) {
                        var r = e.display,
                            n = r.sizer.getBoundingClientRect(),
                            i = null;
                        if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) {
                            var o = O("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Kr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Yr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o)
                        }
                    }
                }

                function Qn(e, t, r, n) {
                    var i;
                    null == n && (n = 0), e.options.lineWrapping || t != r || (t = t.ch ? me(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t, r = "before" == t.sticky ? me(t.line, t.ch + 1, "before") : t);
                    for (var o = 0; o < 5; o++) {
                        var l = !1,
                            s = bn(e, t),
                            a = r && r != t ? bn(e, r) : s;
                        i = {
                            left: Math.min(s.left, a.left),
                            top: Math.min(s.top, a.top) - n,
                            right: Math.max(s.left, a.left),
                            bottom: Math.max(s.bottom, a.bottom) + n
                        };
                        var u = ti(e, i),
                            c = e.doc.scrollTop,
                            h = e.doc.scrollLeft;
                        if (null != u.scrollTop && (ai(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)), null != u.scrollLeft && (ci(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)), !l) break
                    }
                    return i
                }

                function ei(e, t) {
                    var r = ti(e, t);
                    null != r.scrollTop && ai(e, r.scrollTop), null != r.scrollLeft && ci(e, r.scrollLeft)
                }

                function ti(e, t) {
                    var r = e.display,
                        n = On(e.display);
                    t.top < 0 && (t.top = 0);
                    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
                        o = $r(e),
                        l = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o);
                    var s = e.doc.height + jr(r),
                        a = t.top < n,
                        u = t.bottom > s - n;
                    if (t.top < i) l.scrollTop = a ? 0 : t.top;
                    else if (t.bottom > i + o) {
                        var c = Math.min(t.top, (u ? s : t.bottom) - o);
                        c != i && (l.scrollTop = c)
                    }
                    var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft,
                        f = _r(e) - (e.options.fixedGutter ? r.gutters.offsetWidth : 0),
                        d = t.right - t.left > f;
                    return d && (t.right = t.left + f), t.left < 10 ? l.scrollLeft = 0 : t.left < h ? l.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (l.scrollLeft = t.right + (d ? 0 : 10) - f), l
                }

                function ri(e, t) {
                    null != t && (li(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
                }

                function ni(e) {
                    li(e);
                    var t = e.getCursor();
                    e.curOp.scrollToPos = {
                        from: t,
                        to: t,
                        margin: e.options.cursorScrollMargin
                    }
                }

                function ii(e, t, r) {
                    null == t && null == r || li(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r)
                }

                function oi(e, t) {
                    li(e), e.curOp.scrollToPos = t
                }

                function li(e) {
                    var t = e.curOp.scrollToPos;
                    if (t) {
                        e.curOp.scrollToPos = null;
                        var r = wn(e, t.from),
                            n = wn(e, t.to);
                        si(e, r, n, t.margin)
                    }
                }

                function si(e, t, r, n) {
                    var i = ti(e, {
                        left: Math.min(t.left, r.left),
                        top: Math.min(t.top, r.top) - n,
                        right: Math.max(t.right, r.right),
                        bottom: Math.max(t.bottom, r.bottom) + n
                    });
                    ii(e, i.scrollLeft, i.scrollTop)
                }

                function ai(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (r || ji(e, {
                        top: t
                    }), ui(e, t, !0), r && ji(e), Ii(e, 100))
                }

                function ui(e, t, r) {
                    t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
                }

                function ci(e, t, r, n) {
                    t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, qn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t))
                }

                function hi(e) {
                    var t = e.display,
                        r = t.gutters.offsetWidth,
                        n = Math.round(e.doc.height + jr(e.display));
                    return {
                        clientHeight: t.scroller.clientHeight,
                        viewHeight: t.wrapper.clientHeight,
                        scrollWidth: t.scroller.scrollWidth,
                        clientWidth: t.scroller.clientWidth,
                        viewWidth: t.wrapper.clientWidth,
                        barLeft: e.options.fixedGutter ? r : 0,
                        docHeight: n,
                        scrollHeight: n + Yr(e) + t.barHeight,
                        nativeBarWidth: t.nativeBarWidth,
                        gutterWidth: r
                    }
                }
                var fi = function(e, t, r) {
                    this.cm = r;
                    var n = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
                        i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                    n.tabIndex = i.tabIndex = -1, e(n), e(i), ft(n, "scroll", (function() {
                        n.clientHeight && t(n.scrollTop, "vertical")
                    })), ft(i, "scroll", (function() {
                        i.clientWidth && t(i.scrollLeft, "horizontal")
                    })), this.checkedZeroWidth = !1, l && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
                };
                fi.prototype.update = function(e) {
                    var t = e.scrollWidth > e.clientWidth + 1,
                        r = e.scrollHeight > e.clientHeight + 1,
                        n = e.nativeBarWidth;
                    if (r) {
                        this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
                        var i = e.viewHeight - (t ? n : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
                    } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
                    if (t) {
                        this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                        var o = e.viewWidth - e.barLeft - (r ? n : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
                    } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
                    return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), {
                        right: r ? n : 0,
                        bottom: t ? n : 0
                    }
                }, fi.prototype.setScrollLeft = function(e) {
                    this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
                }, fi.prototype.setScrollTop = function(e) {
                    this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
                }, fi.prototype.zeroWidthHack = function() {
                    var e = y && !d ? "12px" : "18px";
                    this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new R, this.disableVert = new R
                }, fi.prototype.enableZeroWidthBar = function(e, t, r) {
                    function n() {
                        var i = e.getBoundingClientRect(),
                            o = "vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                        o != e ? e.style.pointerEvents = "none" : t.set(1e3, n)
                    }
                    e.style.pointerEvents = "auto", t.set(1e3, n)
                }, fi.prototype.clear = function() {
                    var e = this.horiz.parentNode;
                    e.removeChild(this.horiz), e.removeChild(this.vert)
                };
                var di = function() {};

                function pi(e, t) {
                    t || (t = hi(e));
                    var r = e.display.barWidth,
                        n = e.display.barHeight;
                    gi(e, t);
                    for (var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Yn(e), gi(e, hi(e)), r = e.display.barWidth, n = e.display.barHeight
                }

                function gi(e, t) {
                    var r = e.display,
                        n = r.scrollbars.update(t);
                    r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = ""
                }
                di.prototype.update = function() {
                    return {
                        bottom: 0,
                        right: 0
                    }
                }, di.prototype.setScrollLeft = function() {}, di.prototype.setScrollTop = function() {}, di.prototype.clear = function() {};
                var vi = {
                    native: fi,
                    null: di
                };

                function mi(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && T(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new vi[e.options.scrollbarStyle]((function(t) {
                        e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), ft(t, "mousedown", (function() {
                            e.state.focused && setTimeout((function() {
                                return e.display.input.focus()
                            }), 0)
                        })), t.setAttribute("cm-not-content", "true")
                    }), (function(t, r) {
                        "horizontal" == r ? ci(e, t) : ai(e, t)
                    }), e), e.display.scrollbars.addClass && H(e.display.wrapper, e.display.scrollbars.addClass)
                }
                var yi = 0;

                function bi(e) {
                    e.curOp = {
                        cm: e,
                        viewChanged: !1,
                        startHeight: e.doc.height,
                        forceUpdate: !1,
                        updateInput: 0,
                        typing: !1,
                        changeObjs: null,
                        cursorActivityHandlers: null,
                        cursorActivityCalled: 0,
                        selectionChanged: !1,
                        updateMaxLine: !1,
                        scrollLeft: null,
                        scrollTop: null,
                        scrollToPos: null,
                        focus: !1,
                        id: ++yi
                    }, Lr(e.curOp)
                }

                function wi(e) {
                    var t = e.curOp;
                    t && Tr(t, (function(e) {
                        for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                        xi(e)
                    }))
                }

                function xi(e) {
                    for (var t = e.ops, r = 0; r < t.length; r++) Ci(t[r]);
                    for (var n = 0; n < t.length; n++) Si(t[n]);
                    for (var i = 0; i < t.length; i++) Li(t[i]);
                    for (var o = 0; o < t.length; o++) ki(t[o]);
                    for (var l = 0; l < t.length; l++) Ti(t[l])
                }

                function Ci(e) {
                    var t = e.cm,
                        r = t.display;
                    Bi(t), e.updateMaxLine && ot(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Ri(t, e.mustUpdate && {
                        top: e.scrollTop,
                        ensure: e.scrollToPos
                    }, e.forceUpdate)
                }

                function Si(e) {
                    e.updatedDisplay = e.mustUpdate && Vi(e.cm, e.update)
                }

                function Li(e) {
                    var t = e.cm,
                        r = t.display;
                    e.updatedDisplay && Yn(t), e.barMeasure = hi(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Qr(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Yr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - _r(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection())
                }

                function ki(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && ci(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
                    var r = e.focus && e.focus == W();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && pi(t, e.barMeasure), e.updatedDisplay && _i(t, e.barMeasure), e.selectionChanged && Un(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && Vn(e.cm)
                }

                function Ti(e) {
                    var t = e.cm,
                        r = t.display,
                        n = t.doc;
                    if (e.updatedDisplay && Ki(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && ui(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && ci(t, e.scrollLeft, !0, !0), e.scrollToPos) {
                        var i = Qn(t, Le(n, e.scrollToPos.from), Le(n, e.scrollToPos.to), e.scrollToPos.margin);
                        Jn(t, i)
                    }
                    var o = e.maybeHiddenMarkers,
                        l = e.maybeUnhiddenMarkers;
                    if (o)
                        for (var s = 0; s < o.length; ++s) o[s].lines.length || gt(o[s], "hide");
                    if (l)
                        for (var a = 0; a < l.length; ++a) l[a].lines.length && gt(l[a], "unhide");
                    r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && gt(t, "changes", t, e.changeObjs), e.update && e.update.finish()
                }

                function Mi(e, t) {
                    if (e.curOp) return t();
                    bi(e);
                    try {
                        return t()
                    } finally {
                        wi(e)
                    }
                }

                function Ni(e, t) {
                    return function() {
                        if (e.curOp) return t.apply(e, arguments);
                        bi(e);
                        try {
                            return t.apply(e, arguments)
                        } finally {
                            wi(e)
                        }
                    }
                }

                function Oi(e) {
                    return function() {
                        if (this.curOp) return e.apply(this, arguments);
                        bi(this);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            wi(this)
                        }
                    }
                }

                function Ai(e) {
                    return function() {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        bi(t);
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            wi(t)
                        }
                    }
                }

                function Di(e, t, r, n) {
                    null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
                    var i = e.display;
                    if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ne && Qe(e.doc, t) < i.viewTo && Hi(e);
                    else if (r <= i.viewFrom) Ne && et(e.doc, r + n) > i.viewFrom ? Hi(e) : (i.viewFrom += n, i.viewTo += n);
                    else if (t <= i.viewFrom && r >= i.viewTo) Hi(e);
                    else if (t <= i.viewFrom) {
                        var o = Fi(e, r, r + n, 1);
                        o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : Hi(e)
                    } else if (r >= i.viewTo) {
                        var l = Fi(e, t, t, -1);
                        l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : Hi(e)
                    } else {
                        var s = Fi(e, t, t, -1),
                            a = Fi(e, r, r + n, 1);
                        s && a ? (i.view = i.view.slice(0, s.index).concat(Cr(e, s.lineN, a.lineN)).concat(i.view.slice(a.index)), i.viewTo += n) : Hi(e)
                    }
                    var u = i.externalMeasured;
                    u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null))
                }

                function Wi(e, t, r) {
                    e.curOp.viewChanged = !0;
                    var n = e.display,
                        i = e.display.externalMeasured;
                    if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
                        var o = n.view[En(e, t)];
                        if (null != o.node) {
                            var l = o.changes || (o.changes = []); - 1 == B(l, r) && l.push(r)
                        }
                    }
                }

                function Hi(e) {
                    e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
                }

                function Fi(e, t, r, n) {
                    var i, o = En(e, t),
                        l = e.display.view;
                    if (!Ne || r == e.doc.first + e.doc.size) return {
                        index: o,
                        lineN: r
                    };
                    for (var s = e.display.viewFrom, a = 0; a < o; a++) s += l[a].size;
                    if (s != t) {
                        if (n > 0) {
                            if (o == l.length - 1) return null;
                            i = s + l[o].size - t, o++
                        } else i = s - t;
                        t += i, r += i
                    }
                    while (Qe(e.doc, r) != r) {
                        if (o == (n < 0 ? 0 : l.length - 1)) return null;
                        r += n * l[o - (n < 0 ? 1 : 0)].size, o += n
                    }
                    return {
                        index: o,
                        lineN: r
                    }
                }

                function Pi(e, t, r) {
                    var n = e.display,
                        i = n.view;
                    0 == i.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = Cr(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = Cr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(En(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(Cr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, En(e, r)))), n.viewTo = r
                }

                function Ei(e) {
                    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.hidden || i.node && !i.changes || ++r
                    }
                    return r
                }

                function Ii(e, t) {
                    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, E(zi, e))
                }

                function zi(e) {
                    var t = e.doc;
                    if (!(t.highlightFrontier >= e.display.viewTo)) {
                        var r = +new Date + e.options.workTime,
                            n = Jt(e, t.highlightFrontier),
                            i = [];
                        t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), (function(o) {
                            if (n.line >= e.display.viewFrom) {
                                var l = o.styles,
                                    s = o.text.length > e.options.maxHighlightLength ? Kt(t.mode, n.state) : null,
                                    a = qt(e, o, n, !0);
                                s && (n.state = s), o.styles = a.styles;
                                var u = o.styleClasses,
                                    c = a.classes;
                                c ? o.styleClasses = c : u && (o.styleClasses = null);
                                for (var h = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !h && f < l.length; ++f) h = l[f] != o.styles[f];
                                h && i.push(n.line), o.stateAfter = n.save(), n.nextLine()
                            } else o.text.length <= e.options.maxHighlightLength && Qt(e, o.text, n), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine();
                            if (+new Date > r) return Ii(e, e.options.workDelay), !0
                        })), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), i.length && Mi(e, (function() {
                            for (var t = 0; t < i.length; t++) Wi(e, i[t], "text")
                        }))
                    }
                }
                var Ri = function(e, t, r) {
                    var n = e.display;
                    this.viewport = t, this.visible = $n(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = _r(e), this.force = r, this.dims = Dn(e), this.events = []
                };

                function Bi(e) {
                    var t = e.display;
                    !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Yr(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Yr(e) + "px", t.scrollbarsClipped = !0)
                }

                function Gi(e) {
                    if (e.hasFocus()) return null;
                    var t = W();
                    if (!t || !D(e.display.lineDiv, t)) return null;
                    var r = {
                        activeElt: t
                    };
                    if (window.getSelection) {
                        var n = window.getSelection();
                        n.anchorNode && n.extend && D(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset)
                    }
                    return r
                }

                function Ui(e) {
                    if (e && e.activeElt && e.activeElt != W() && (e.activeElt.focus(), e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) {
                        var t = window.getSelection(),
                            r = document.createRange();
                        r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset)
                    }
                }

                function Vi(e, t) {
                    var r = e.display,
                        n = e.doc;
                    if (t.editorIsHidden) return Hi(e), !1;
                    if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == Ei(e)) return !1;
                    Zn(e) && (Hi(e), t.dims = Dn(e));
                    var i = n.first + n.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
                        l = Math.min(i, t.visible.to + e.options.viewportMargin);
                    r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Ne && (o = Qe(e.doc, o), l = et(e.doc, l));
                    var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
                    Pi(e, o, l), r.viewOffset = nt(ue(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
                    var a = Ei(e);
                    if (!s && 0 == a && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
                    var u = Gi(e);
                    return a > 4 && (r.lineDiv.style.display = "none"), Xi(e, r.updateLineNumbers, t.dims), a > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, Ui(u), M(r.cursorDiv), M(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, s && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, Ii(e, 400)), r.updateLineNumbers = null, !0
                }

                function Ki(e, t) {
                    for (var r = t.viewport, n = !0;; n = !1) {
                        if ((!n || !e.options.lineWrapping || t.oldDisplayWidth == _r(e)) && (r && null != r.top && (r = {
                                top: Math.min(e.doc.height + jr(e.display) - $r(e), r.top)
                            }), t.visible = $n(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)) break;
                        if (!Vi(e, t)) break;
                        Yn(e);
                        var i = hi(e);
                        In(e), pi(e, i), _i(e, i), t.force = !1
                    }
                    t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo)
                }

                function ji(e, t) {
                    var r = new Ri(e, t);
                    if (Vi(e, r)) {
                        Yn(e), Ki(e, r);
                        var n = hi(e);
                        In(e), pi(e, n), _i(e, n), r.finish()
                    }
                }

                function Xi(e, t, r) {
                    var n = e.display,
                        i = e.options.lineNumbers,
                        o = n.lineDiv,
                        l = o.firstChild;

                    function s(t) {
                        var r = t.nextSibling;
                        return a && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r
                    }
                    for (var u = n.view, c = n.viewFrom, h = 0; h < u.length; h++) {
                        var f = u[h];
                        if (f.hidden);
                        else if (f.node && f.node.parentNode == o) {
                            while (l != f.node) l = s(l);
                            var d = i && null != t && t <= c && f.lineNumber;
                            f.changes && (B(f.changes, "gutter") > -1 && (d = !1), Ar(e, f, c, r)), d && (M(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(ve(e.options, c)))), l = f.node.nextSibling
                        } else {
                            var p = zr(e, f, c, r);
                            o.insertBefore(p, l)
                        }
                        c += f.size
                    }
                    while (l) l = s(l)
                }

                function Yi(e) {
                    var t = e.display.gutters.offsetWidth;
                    e.display.sizer.style.marginLeft = t + "px"
                }

                function _i(e, t) {
                    e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Yr(e) + "px"
                }

                function $i(e) {
                    var t = e.display.gutters,
                        r = e.options.gutters;
                    M(t);
                    for (var n = 0; n < r.length; ++n) {
                        var i = r[n],
                            o = t.appendChild(O("div", null, "CodeMirror-gutter " + i));
                        "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px")
                    }
                    t.style.display = n ? "" : "none", Yi(e)
                }

                function qi(e) {
                    var t = B(e.gutters, "CodeMirror-linenumbers"); - 1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
                }
                Ri.prototype.signal = function(e, t) {
                    yt(e, t) && this.events.push(arguments)
                }, Ri.prototype.finish = function() {
                    for (var e = this, t = 0; t < this.events.length; t++) gt.apply(null, e.events[t])
                };
                var Zi = 0,
                    Ji = null;

                function Qi(e) {
                    var t = e.wheelDeltaX,
                        r = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
                        x: t,
                        y: r
                    }
                }

                function eo(e) {
                    var t = Qi(e);
                    return t.x *= Ji, t.y *= Ji, t
                }

                function to(e, t) {
                    var n = Qi(t),
                        i = n.x,
                        o = n.y,
                        l = e.display,
                        s = l.scroller,
                        u = s.scrollWidth > s.clientWidth,
                        c = s.scrollHeight > s.clientHeight;
                    if (i && u || o && c) {
                        if (o && y && a) e: for (var f = t.target, d = l.view; f != s; f = f.parentNode)
                            for (var p = 0; p < d.length; p++)
                                if (d[p].node == f) {
                                    e.display.currentWheelTarget = f;
                                    break e
                                } if (i && !r && !h && null != Ji) return o && c && ai(e, Math.max(0, s.scrollTop + o * Ji)), ci(e, Math.max(0, s.scrollLeft + i * Ji)), (!o || o && c) && wt(t), void(l.wheelStartX = null);
                        if (o && null != Ji) {
                            var g = o * Ji,
                                v = e.doc.scrollTop,
                                m = v + l.wrapper.clientHeight;
                            g < 0 ? v = Math.max(0, v + g - 50) : m = Math.min(e.doc.height, m + g + 50), ji(e, {
                                top: v,
                                bottom: m
                            })
                        }
                        Zi < 20 && (null == l.wheelStartX ? (l.wheelStartX = s.scrollLeft, l.wheelStartY = s.scrollTop, l.wheelDX = i, l.wheelDY = o, setTimeout((function() {
                            if (null != l.wheelStartX) {
                                var e = s.scrollLeft - l.wheelStartX,
                                    t = s.scrollTop - l.wheelStartY,
                                    r = t && l.wheelDY && t / l.wheelDY || e && l.wheelDX && e / l.wheelDX;
                                l.wheelStartX = l.wheelStartY = null, r && (Ji = (Ji * Zi + r) / (Zi + 1), ++Zi)
                            }
                        }), 200)) : (l.wheelDX += i, l.wheelDY += o))
                    }
                }
                l ? Ji = -.53 : r ? Ji = 15 : c ? Ji = -.7 : f && (Ji = -1 / 3);
                var ro = function(e, t) {
                    this.ranges = e, this.primIndex = t
                };
                ro.prototype.primary = function() {
                    return this.ranges[this.primIndex]
                }, ro.prototype.equals = function(e) {
                    var t = this;
                    if (e == this) return !0;
                    if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                    for (var r = 0; r < this.ranges.length; r++) {
                        var n = t.ranges[r],
                            i = e.ranges[r];
                        if (!be(n.anchor, i.anchor) || !be(n.head, i.head)) return !1
                    }
                    return !0
                }, ro.prototype.deepCopy = function() {
                    for (var e = this, t = [], r = 0; r < this.ranges.length; r++) t[r] = new no(we(e.ranges[r].anchor), we(e.ranges[r].head));
                    return new ro(t, this.primIndex)
                }, ro.prototype.somethingSelected = function() {
                    for (var e = this, t = 0; t < this.ranges.length; t++)
                        if (!e.ranges[t].empty()) return !0;
                    return !1
                }, ro.prototype.contains = function(e, t) {
                    var r = this;
                    t || (t = e);
                    for (var n = 0; n < this.ranges.length; n++) {
                        var i = r.ranges[n];
                        if (ye(t, i.from()) >= 0 && ye(e, i.to()) <= 0) return n
                    }
                    return -1
                };
                var no = function(e, t) {
                    this.anchor = e, this.head = t
                };

                function io(e, t, r) {
                    var n = e && e.options.selectionsMayTouch,
                        i = t[r];
                    t.sort((function(e, t) {
                        return ye(e.from(), t.from())
                    })), r = B(t, i);
                    for (var o = 1; o < t.length; o++) {
                        var l = t[o],
                            s = t[o - 1],
                            a = ye(s.to(), l.from());
                        if (n && !l.empty() ? a > 0 : a >= 0) {
                            var u = Ce(s.from(), l.from()),
                                c = xe(s.to(), l.to()),
                                h = s.empty() ? l.from() == l.head : s.from() == s.head;
                            o <= r && --r, t.splice(--o, 2, new no(h ? c : u, h ? u : c))
                        }
                    }
                    return new ro(t, r)
                }

                function oo(e, t) {
                    return new ro([new no(e, t || e)], 0)
                }

                function lo(e) {
                    return e.text ? me(e.from.line + e.text.length - 1, $(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
                }

                function so(e, t) {
                    if (ye(e, t.from) < 0) return e;
                    if (ye(e, t.to) <= 0) return lo(t);
                    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        n = e.ch;
                    return e.line == t.to.line && (n += lo(t).ch - t.to.ch), me(r, n)
                }

                function ao(e, t) {
                    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
                        var i = e.sel.ranges[n];
                        r.push(new no(so(i.anchor, t), so(i.head, t)))
                    }
                    return io(e.cm, r, e.sel.primIndex)
                }

                function uo(e, t, r) {
                    return e.line == t.line ? me(r.line, e.ch - t.ch + r.ch) : me(r.line + (e.line - t.line), e.ch)
                }

                function co(e, t, r) {
                    for (var n = [], i = me(e.first, 0), o = i, l = 0; l < t.length; l++) {
                        var s = t[l],
                            a = uo(s.from, i, o),
                            u = uo(lo(s), i, o);
                        if (i = s.to, o = u, "around" == r) {
                            var c = e.sel.ranges[l],
                                h = ye(c.head, c.anchor) < 0;
                            n[l] = new no(h ? u : a, h ? a : u)
                        } else n[l] = new no(a, a)
                    }
                    return new ro(n, e.sel.primIndex)
                }

                function ho(e) {
                    e.doc.mode = Gt(e.options, e.doc.modeOption), fo(e)
                }

                function fo(e) {
                    e.doc.iter((function(e) {
                        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
                    })), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, Ii(e, 100), e.state.modeGen++, e.curOp && Di(e)
                }

                function po(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == $(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
                }

                function go(e, t, r, n) {
                    function i(e) {
                        return r ? r[e] : null
                    }

                    function o(e, r, i) {
                        ur(e, r, i, n), Nr(e, "change", e, t)
                    }

                    function l(e, t) {
                        for (var r = [], o = e; o < t; ++o) r.push(new ar(u[o], i(o), n));
                        return r
                    }
                    var s = t.from,
                        a = t.to,
                        u = t.text,
                        c = ue(e, s.line),
                        h = ue(e, a.line),
                        f = $(u),
                        d = i(u.length - 1),
                        p = a.line - s.line;
                    if (t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
                    else if (po(e, t)) {
                        var g = l(0, u.length - 1);
                        o(h, h.text, d), p && e.remove(s.line, p), g.length && e.insert(s.line, g)
                    } else if (c == h)
                        if (1 == u.length) o(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
                        else {
                            var v = l(1, u.length - 1);
                            v.push(new ar(f + c.text.slice(a.ch), d, n)), o(c, c.text.slice(0, s.ch) + u[0], i(0)), e.insert(s.line + 1, v)
                        }
                    else if (1 == u.length) o(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), i(0)), e.remove(s.line + 1, p);
                    else {
                        o(c, c.text.slice(0, s.ch) + u[0], i(0)), o(h, f + h.text.slice(a.ch), d);
                        var m = l(1, u.length - 1);
                        p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, m)
                    }
                    Nr(e, "change", e, t)
                }

                function vo(e, t, r) {
                    function n(e, i, o) {
                        if (e.linked)
                            for (var l = 0; l < e.linked.length; ++l) {
                                var s = e.linked[l];
                                if (s.doc != i) {
                                    var a = o && s.sharedHist;
                                    r && !a || (t(s.doc, a), n(s.doc, e, a))
                                }
                            }
                    }
                    n(e, null, !0)
                }

                function mo(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    e.doc = t, t.cm = e, Fn(e), ho(e), yo(e), e.options.lineWrapping || ot(e), e.options.mode = t.modeOption, Di(e)
                }

                function yo(e) {
                    ("rtl" == e.doc.direction ? H : T)(e.display.lineDiv, "CodeMirror-rtl")
                }

                function bo(e) {
                    Mi(e, (function() {
                        yo(e), Di(e)
                    }))
                }

                function wo(e) {
                    this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
                }

                function xo(e, t) {
                    var r = {
                        from: we(t.from),
                        to: lo(t),
                        text: ce(e, t.from, t.to)
                    };
                    return No(e, r, t.from.line, t.to.line + 1), vo(e, (function(e) {
                        return No(e, r, t.from.line, t.to.line + 1)
                    }), !0), r
                }

                function Co(e) {
                    while (e.length) {
                        var t = $(e);
                        if (!t.ranges) break;
                        e.pop()
                    }
                }

                function So(e, t) {
                    return t ? (Co(e.done), $(e.done)) : e.done.length && !$(e.done).ranges ? $(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), $(e.done)) : void 0
                }

                function Lo(e, t, r, n) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o, l, s = +new Date;
                    if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > s - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = So(i, i.lastOp == n))) l = $(o.changes), 0 == ye(t.from, t.to) && 0 == ye(t.from, l.to) ? l.to = lo(t) : o.changes.push(xo(e, t));
                    else {
                        var a = $(i.done);
                        a && a.ranges || Mo(e.sel, i.done), o = {
                            changes: [xo(e, t)],
                            generation: i.generation
                        }, i.done.push(o);
                        while (i.done.length > i.undoDepth) i.done.shift(), i.done[0].ranges || i.done.shift()
                    }
                    i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || gt(e, "historyAdded")
                }

                function ko(e, t, r, n) {
                    var i = t.charAt(0);
                    return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
                }

                function To(e, t, r, n) {
                    var i = e.history,
                        o = n && n.origin;
                    r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ko(e, o, $(i.done), t)) ? i.done[i.done.length - 1] = t : Mo(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && Co(i.undone)
                }

                function Mo(e, t) {
                    var r = $(t);
                    r && r.ranges && r.equals(e) || t.push(e)
                }

                function No(e, t, r, n) {
                    var i = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), (function(r) {
                        r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o
                    }))
                }

                function Oo(e) {
                    if (!e) return null;
                    for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
                    return t ? t.length ? t : null : e
                }

                function Ao(e, t) {
                    var r = t["spans_" + e.id];
                    if (!r) return null;
                    for (var n = [], i = 0; i < t.text.length; ++i) n.push(Oo(r[i]));
                    return n
                }

                function Do(e, t) {
                    var r = Ao(e, t),
                        n = Ie(e, t);
                    if (!r) return n;
                    if (!n) return r;
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i],
                            l = n[i];
                        if (o && l) e: for (var s = 0; s < l.length; ++s) {
                            for (var a = l[s], u = 0; u < o.length; ++u)
                                if (o[u].marker == a.marker) continue e;
                            o.push(a)
                        } else l && (r[i] = l)
                    }
                    return r
                }

                function Wo(e, t, r) {
                    for (var n = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) n.push(r ? ro.prototype.deepCopy.call(o) : o);
                        else {
                            var l = o.changes,
                                s = [];
                            n.push({
                                changes: s
                            });
                            for (var a = 0; a < l.length; ++a) {
                                var u = l[a],
                                    c = void 0;
                                if (s.push({
                                        from: u.from,
                                        to: u.to,
                                        text: u.text
                                    }), t)
                                    for (var h in u)(c = h.match(/^spans_(\d+)$/)) && B(t, Number(c[1])) > -1 && ($(s)[h] = u[h], delete u[h])
                            }
                        }
                    }
                    return n
                }

                function Ho(e, t, r, n) {
                    if (n) {
                        var i = e.anchor;
                        if (r) {
                            var o = ye(t, i) < 0;
                            o != ye(r, i) < 0 ? (i = t, t = r) : o != ye(t, r) < 0 && (t = r)
                        }
                        return new no(i, t)
                    }
                    return new no(r || t, t)
                }

                function Fo(e, t, r, n, i) {
                    null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Bo(e, new ro([Ho(e.sel.primary(), t, r, i)], 0), n)
                }

                function Po(e, t, r) {
                    for (var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Ho(e.sel.ranges[o], t[o], null, i);
                    var l = io(e.cm, n, e.sel.primIndex);
                    Bo(e, l, r)
                }

                function Eo(e, t, r, n) {
                    var i = e.sel.ranges.slice(0);
                    i[t] = r, Bo(e, io(e.cm, i, e.sel.primIndex), n)
                }

                function Io(e, t, r, n) {
                    Bo(e, oo(t, r), n)
                }

                function zo(e, t, r) {
                    var n = {
                        ranges: t.ranges,
                        update: function(t) {
                            var r = this;
                            this.ranges = [];
                            for (var n = 0; n < t.length; n++) r.ranges[n] = new no(Le(e, t[n].anchor), Le(e, t[n].head))
                        },
                        origin: r && r.origin
                    };
                    return gt(e, "beforeSelectionChange", e, n), e.cm && gt(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? io(e.cm, n.ranges, n.ranges.length - 1) : t
                }

                function Ro(e, t, r) {
                    var n = e.history.done,
                        i = $(n);
                    i && i.ranges ? (n[n.length - 1] = t, Go(e, t, r)) : Bo(e, t, r)
                }

                function Bo(e, t, r) {
                    Go(e, t, r), To(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r)
                }

                function Go(e, t, r) {
                    (yt(e, "beforeSelectionChange") || e.cm && yt(e.cm, "beforeSelectionChange")) && (t = zo(e, t, r));
                    var n = r && r.bias || (ye(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    Uo(e, Ko(e, t, n, !0)), r && !1 === r.scroll || !e.cm || ni(e.cm)
                }

                function Uo(e, t) {
                    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, mt(e.cm)), Nr(e, "cursorActivity", e))
                }

                function Vo(e) {
                    Uo(e, Ko(e, e.sel, null, !1))
                }

                function Ko(e, t, r, n) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var l = t.ranges[o],
                            s = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            a = Xo(e, l.anchor, s && s.anchor, r, n),
                            u = Xo(e, l.head, s && s.head, r, n);
                        (i || a != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new no(a, u))
                    }
                    return i ? io(e.cm, i, t.primIndex) : t
                }

                function jo(e, t, r, n, i) {
                    var o = ue(e, t.line);
                    if (o.markedSpans)
                        for (var l = 0; l < o.markedSpans.length; ++l) {
                            var s = o.markedSpans[l],
                                a = s.marker;
                            if ((null == s.from || (a.inclusiveLeft ? s.from <= t.ch : s.from < t.ch)) && (null == s.to || (a.inclusiveRight ? s.to >= t.ch : s.to > t.ch))) {
                                if (i && (gt(a, "beforeCursorEnter"), a.explicitlyCleared)) {
                                    if (o.markedSpans) {
                                        --l;
                                        continue
                                    }
                                    break
                                }
                                if (!a.atomic) continue;
                                if (r) {
                                    var u = a.find(n < 0 ? 1 : -1),
                                        c = void 0;
                                    if ((n < 0 ? a.inclusiveRight : a.inclusiveLeft) && (u = Yo(e, u, -n, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = ye(u, r)) && (n < 0 ? c < 0 : c > 0)) return jo(e, u, t, n, i)
                                }
                                var h = a.find(n < 0 ? -1 : 1);
                                return (n < 0 ? a.inclusiveLeft : a.inclusiveRight) && (h = Yo(e, h, n, h.line == t.line ? o : null)), h ? jo(e, h, t, n, i) : null
                            }
                        }
                    return t
                }

                function Xo(e, t, r, n, i) {
                    var o = n || 1,
                        l = jo(e, t, r, o, i) || !i && jo(e, t, r, o, !0) || jo(e, t, r, -o, i) || !i && jo(e, t, r, -o, !0);
                    return l || (e.cantEdit = !0, me(e.first, 0))
                }

                function Yo(e, t, r, n) {
                    return r < 0 && 0 == t.ch ? t.line > e.first ? Le(e, me(t.line - 1)) : null : r > 0 && t.ch == (n || ue(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? me(t.line + 1, 0) : null : new me(t.line, t.ch + r)
                }

                function _o(e) {
                    e.setSelection(me(e.firstLine(), 0), me(e.lastLine()), V)
                }

                function $o(e, t, r) {
                    var n = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function() {
                            return n.canceled = !0
                        }
                    };
                    return r && (n.update = function(t, r, i, o) {
                        t && (n.from = Le(e, t)), r && (n.to = Le(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o)
                    }), gt(e, "beforeChange", e, n), e.cm && gt(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : {
                        from: n.from,
                        to: n.to,
                        text: n.text,
                        origin: n.origin
                    }
                }

                function qo(e, t, r) {
                    if (e.cm) {
                        if (!e.cm.curOp) return Ni(e.cm, qo)(e, t, r);
                        if (e.cm.state.suppressEdits) return
                    }
                    if (!(yt(e, "beforeChange") || e.cm && yt(e.cm, "beforeChange")) || (t = $o(e, t, !0), t)) {
                        var n = Me && !r && Re(e, t.from, t.to);
                        if (n)
                            for (var i = n.length - 1; i >= 0; --i) Zo(e, {
                                from: n[i].from,
                                to: n[i].to,
                                text: i ? [""] : t.text,
                                origin: t.origin
                            });
                        else Zo(e, t)
                    }
                }

                function Zo(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != ye(t.from, t.to)) {
                        var r = ao(e, t);
                        Lo(e, t, r, e.cm ? e.cm.curOp.id : NaN), el(e, t, r, Ie(e, t));
                        var n = [];
                        vo(e, (function(e, r) {
                            r || -1 != B(n, e.history) || (ol(e.history, t), n.push(e.history)), el(e, t, null, Ie(e, t))
                        }))
                    }
                }

                function Jo(e, t, r) {
                    var n = e.cm && e.cm.state.suppressEdits;
                    if (!n || r) {
                        for (var i, o = e.history, l = e.sel, s = "undo" == t ? o.done : o.undone, a = "undo" == t ? o.undone : o.done, u = 0; u < s.length; u++)
                            if (i = s[u], r ? i.ranges && !i.equals(e.sel) : !i.ranges) break;
                        if (u != s.length) {
                            for (o.lastOrigin = o.lastSelOrigin = null;;) {
                                if (i = s.pop(), !i.ranges) {
                                    if (n) return void s.push(i);
                                    break
                                }
                                if (Mo(i, a), r && !i.equals(e.sel)) return void Bo(e, i, {
                                    clearRedo: !1
                                });
                                l = i
                            }
                            var c = [];
                            Mo(l, a), a.push({
                                changes: c,
                                generation: o.generation
                            }), o.generation = i.generation || ++o.maxGeneration;
                            for (var h = yt(e, "beforeChange") || e.cm && yt(e.cm, "beforeChange"), f = function(r) {
                                    var n = i.changes[r];
                                    if (n.origin = t, h && !$o(e, n, !1)) return s.length = 0, {};
                                    c.push(xo(e, n));
                                    var o = r ? ao(e, n) : $(s);
                                    el(e, n, o, Do(e, n)), !r && e.cm && e.cm.scrollIntoView({
                                        from: n.from,
                                        to: lo(n)
                                    });
                                    var l = [];
                                    vo(e, (function(e, t) {
                                        t || -1 != B(l, e.history) || (ol(e.history, n), l.push(e.history)), el(e, n, null, Do(e, n))
                                    }))
                                }, d = i.changes.length - 1; d >= 0; --d) {
                                var p = f(d);
                                if (p) return p.v
                            }
                        }
                    }
                }

                function Qo(e, t) {
                    if (0 != t && (e.first += t, e.sel = new ro(q(e.sel.ranges, (function(e) {
                            return new no(me(e.anchor.line + t, e.anchor.ch), me(e.head.line + t, e.head.ch))
                        })), e.sel.primIndex), e.cm)) {
                        Di(e.cm, e.first, e.first - t, t);
                        for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) Wi(e.cm, n, "gutter")
                    }
                }

                function el(e, t, r, n) {
                    if (e.cm && !e.cm.curOp) return Ni(e.cm, el)(e, t, r, n);
                    if (t.to.line < e.first) Qo(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            Qo(e, i), t = {
                                from: me(e.first, 0),
                                to: me(t.to.line + i, t.to.ch),
                                text: [$(t.text)],
                                origin: t.origin
                            }
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = {
                            from: t.from,
                            to: me(o, ue(e, o).text.length),
                            text: [t.text[0]],
                            origin: t.origin
                        }), t.removed = ce(e, t.from, t.to), r || (r = ao(e, t)), e.cm ? tl(e.cm, t, n) : go(e, t, n), Go(e, r, V)
                    }
                }

                function tl(e, t, r) {
                    var n = e.doc,
                        i = e.display,
                        o = t.from,
                        l = t.to,
                        s = !1,
                        a = o.line;
                    e.options.lineWrapping || (a = de(qe(ue(n, o.line))), n.iter(a, l.line + 1, (function(e) {
                        if (e == i.maxLine) return s = !0, !0
                    }))), n.sel.contains(t.from, t.to) > -1 && mt(e), go(n, t, r, Hn(e)), e.options.lineWrapping || (n.iter(a, o.line + t.text.length, (function(e) {
                        var t = it(e);
                        t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, s = !1)
                    })), s && (e.curOp.updateMaxLine = !0)), sr(n, o.line), Ii(e, 400);
                    var u = t.text.length - (l.line - o.line) - 1;
                    t.full ? Di(e) : o.line != l.line || 1 != t.text.length || po(e.doc, t) ? Di(e, o.line, l.line + 1, u) : Wi(e, o.line, "text");
                    var c = yt(e, "changes"),
                        h = yt(e, "change");
                    if (h || c) {
                        var f = {
                            from: o,
                            to: l,
                            text: t.text,
                            removed: t.removed,
                            origin: t.origin
                        };
                        h && Nr(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f)
                    }
                    e.display.selForContextMenu = null
                }

                function rl(e, t, r, n, i) {
                    var o;
                    n || (n = r), ye(n, r) < 0 && (o = [n, r], r = o[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), qo(e, {
                        from: r,
                        to: n,
                        text: t,
                        origin: i
                    })
                }

                function nl(e, t, r, n) {
                    r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0)
                }

                function il(e, t, r, n) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = !0;
                        if (o.ranges) {
                            o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);
                            for (var s = 0; s < o.ranges.length; s++) nl(o.ranges[s].anchor, t, r, n), nl(o.ranges[s].head, t, r, n)
                        } else {
                            for (var a = 0; a < o.changes.length; ++a) {
                                var u = o.changes[a];
                                if (r < u.from.line) u.from = me(u.from.line + n, u.from.ch), u.to = me(u.to.line + n, u.to.ch);
                                else if (t <= u.to.line) {
                                    l = !1;
                                    break
                                }
                            }
                            l || (e.splice(0, i + 1), i = 0)
                        }
                    }
                }

                function ol(e, t) {
                    var r = t.from.line,
                        n = t.to.line,
                        i = t.text.length - (n - r) - 1;
                    il(e.done, r, n, i), il(e.undone, r, n, i)
                }

                function ll(e, t, r, n) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? o = ue(e, Se(e, t)) : i = de(t), null == i ? null : (n(o, i) && e.cm && Wi(e.cm, i, r), o)
                }

                function sl(e) {
                    var t = this;
                    this.lines = e, this.parent = null;
                    for (var r = 0, n = 0; n < e.length; ++n) e[n].parent = t, r += e[n].height;
                    this.height = r
                }

                function al(e) {
                    var t = this;
                    this.children = e;
                    for (var r = 0, n = 0, i = 0; i < e.length; ++i) {
                        var o = e[i];
                        r += o.chunkSize(), n += o.height, o.parent = t
                    }
                    this.size = r, this.height = n, this.parent = null
                }
                no.prototype.from = function() {
                    return Ce(this.anchor, this.head)
                }, no.prototype.to = function() {
                    return xe(this.anchor, this.head)
                }, no.prototype.empty = function() {
                    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
                }, sl.prototype = {
                    chunkSize: function() {
                        return this.lines.length
                    },
                    removeInner: function(e, t) {
                        for (var r = this, n = e, i = e + t; n < i; ++n) {
                            var o = r.lines[n];
                            r.height -= o.height, cr(o), Nr(o, "delete")
                        }
                        this.lines.splice(e, t)
                    },
                    collapse: function(e) {
                        e.push.apply(e, this.lines)
                    },
                    insertInner: function(e, t, r) {
                        var n = this;
                        this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                        for (var i = 0; i < t.length; ++i) t[i].parent = n
                    },
                    iterN: function(e, t, r) {
                        for (var n = this, i = e + t; e < i; ++e)
                            if (r(n.lines[e])) return !0
                    }
                }, al.prototype = {
                    chunkSize: function() {
                        return this.size
                    },
                    removeInner: function(e, t) {
                        var r = this;
                        this.size -= t;
                        for (var n = 0; n < this.children.length; ++n) {
                            var i = r.children[n],
                                o = i.chunkSize();
                            if (e < o) {
                                var l = Math.min(t, o - e),
                                    s = i.height;
                                if (i.removeInner(e, l), r.height -= s - i.height, o == l && (r.children.splice(n--, 1), i.parent = null), 0 == (t -= l)) break;
                                e = 0
                            } else e -= o
                        }
                        if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof sl))) {
                            var a = [];
                            this.collapse(a), this.children = [new sl(a)], this.children[0].parent = this
                        }
                    },
                    collapse: function(e) {
                        for (var t = this, r = 0; r < this.children.length; ++r) t.children[r].collapse(e)
                    },
                    insertInner: function(e, t, r) {
                        var n = this;
                        this.size += t.length, this.height += r;
                        for (var i = 0; i < this.children.length; ++i) {
                            var o = n.children[i],
                                l = o.chunkSize();
                            if (e <= l) {
                                if (o.insertInner(e, t, r), o.lines && o.lines.length > 50) {
                                    for (var s = o.lines.length % 25 + 25, a = s; a < o.lines.length;) {
                                        var u = new sl(o.lines.slice(a, a += 25));
                                        o.height -= u.height, n.children.splice(++i, 0, u), u.parent = n
                                    }
                                    o.lines = o.lines.slice(0, s), n.maybeSpill()
                                }
                                break
                            }
                            e -= l
                        }
                    },
                    maybeSpill: function() {
                        if (!(this.children.length <= 10)) {
                            var e = this;
                            do {
                                var t = e.children.splice(e.children.length - 5, 5),
                                    r = new al(t);
                                if (e.parent) {
                                    e.size -= r.size, e.height -= r.height;
                                    var n = B(e.parent.children, e);
                                    e.parent.children.splice(n + 1, 0, r)
                                } else {
                                    var i = new al(e.children);
                                    i.parent = e, e.children = [i, r], e = i
                                }
                                r.parent = e.parent
                            } while (e.children.length > 10);
                            e.parent.maybeSpill()
                        }
                    },
                    iterN: function(e, t, r) {
                        for (var n = this, i = 0; i < this.children.length; ++i) {
                            var o = n.children[i],
                                l = o.chunkSize();
                            if (e < l) {
                                var s = Math.min(t, l - e);
                                if (o.iterN(e, s, r)) return !0;
                                if (0 == (t -= s)) break;
                                e = 0
                            } else e -= l
                        }
                    }
                };
                var ul = function(e, t, r) {
                    var n = this;
                    if (r)
                        for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
                    this.doc = e, this.node = t
                };

                function cl(e, t, r) {
                    nt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && ri(e, r)
                }

                function hl(e, t, r, n) {
                    var i = new ul(e, r, n),
                        o = e.cm;
                    return o && i.noHScroll && (o.display.alignWidgets = !0), ll(e, t, "widget", (function(t) {
                        var r = t.widgets || (t.widgets = []);
                        if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !tt(e, t)) {
                            var n = nt(t) < e.scrollTop;
                            fe(t, t.height + Ur(i)), n && ri(o, i.height), o.curOp.forceUpdate = !0
                        }
                        return !0
                    })), o && Nr(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : de(t)), i
                }
                ul.prototype.clear = function() {
                    var e = this,
                        t = this.doc.cm,
                        r = this.line.widgets,
                        n = this.line,
                        i = de(n);
                    if (null != i && r) {
                        for (var o = 0; o < r.length; ++o) r[o] == e && r.splice(o--, 1);
                        r.length || (n.widgets = null);
                        var l = Ur(this);
                        fe(n, Math.max(0, n.height - l)), t && (Mi(t, (function() {
                            cl(t, n, -l), Wi(t, i, "widget")
                        })), Nr(t, "lineWidgetCleared", t, this, i))
                    }
                }, ul.prototype.changed = function() {
                    var e = this,
                        t = this.height,
                        r = this.doc.cm,
                        n = this.line;
                    this.height = null;
                    var i = Ur(this) - t;
                    i && (tt(this.doc, n) || fe(n, n.height + i), r && Mi(r, (function() {
                        r.curOp.forceUpdate = !0, cl(r, n, i), Nr(r, "lineWidgetChanged", r, e, de(n))
                    })))
                }, bt(ul);
                var fl = 0,
                    dl = function(e, t) {
                        this.lines = [], this.type = t, this.doc = e, this.id = ++fl
                    };

                function pl(e, t, r, n, i) {
                    if (n && n.shared) return vl(e, t, r, n, i);
                    if (e.cm && !e.cm.curOp) return Ni(e.cm, pl)(e, t, r, n, i);
                    var o = new dl(e, i),
                        l = ye(t, r);
                    if (n && I(n, o, !1), l > 0 || 0 == l && !1 !== o.clearWhenEmpty) return o;
                    if (o.replacedWith && (o.collapsed = !0, o.widgetNode = A("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
                        if ($e(e, t.line, t, r, o) || t.line != r.line && $e(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        Ae()
                    }
                    o.addToHistory && Lo(e, {
                        from: t,
                        to: r,
                        origin: "markText"
                    }, e.sel, NaN);
                    var s, a = t.line,
                        u = e.cm;
                    if (e.iter(a, r.line + 1, (function(e) {
                            u && o.collapsed && !u.options.lineWrapping && qe(e) == u.display.maxLine && (s = !0), o.collapsed && a != t.line && fe(e, 0), Fe(e, new De(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null)), ++a
                        })), o.collapsed && e.iter(t.line, r.line + 1, (function(t) {
                            tt(e, t) && fe(t, 0)
                        })), o.clearOnEnter && ft(o, "beforeCursorEnter", (function() {
                            return o.clear()
                        })), o.readOnly && (Oe(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++fl, o.atomic = !0), u) {
                        if (s && (u.curOp.updateMaxLine = !0), o.collapsed) Di(u, t.line, r.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                            for (var c = t.line; c <= r.line; c++) Wi(u, c, "text");
                        o.atomic && Vo(u.doc), Nr(u, "markerAdded", u, o)
                    }
                    return o
                }
                dl.prototype.clear = function() {
                    var e = this;
                    if (!this.explicitlyCleared) {
                        var t = this.doc.cm,
                            r = t && !t.curOp;
                        if (r && bi(t), yt(this, "clear")) {
                            var n = this.find();
                            n && Nr(this, "clear", n.from, n.to)
                        }
                        for (var i = null, o = null, l = 0; l < this.lines.length; ++l) {
                            var s = e.lines[l],
                                a = We(s.markedSpans, e);
                            t && !e.collapsed ? Wi(t, de(s), "text") : t && (null != a.to && (o = de(s)), null != a.from && (i = de(s))), s.markedSpans = He(s.markedSpans, a), null == a.from && e.collapsed && !tt(e.doc, s) && t && fe(s, On(t.display))
                        }
                        if (t && this.collapsed && !t.options.lineWrapping)
                            for (var u = 0; u < this.lines.length; ++u) {
                                var c = qe(e.lines[u]),
                                    h = it(c);
                                h > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = h, t.display.maxLineChanged = !0)
                            }
                        null != i && t && this.collapsed && Di(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && Vo(t.doc)), t && Nr(t, "markerCleared", t, this, i, o), r && wi(t), this.parent && this.parent.clear()
                    }
                }, dl.prototype.find = function(e, t) {
                    var r, n, i = this;
                    null == e && "bookmark" == this.type && (e = 1);
                    for (var o = 0; o < this.lines.length; ++o) {
                        var l = i.lines[o],
                            s = We(l.markedSpans, i);
                        if (null != s.from && (r = me(t ? l : de(l), s.from), -1 == e)) return r;
                        if (null != s.to && (n = me(t ? l : de(l), s.to), 1 == e)) return n
                    }
                    return r && {
                        from: r,
                        to: n
                    }
                }, dl.prototype.changed = function() {
                    var e = this,
                        t = this.find(-1, !0),
                        r = this,
                        n = this.doc.cm;
                    t && n && Mi(n, (function() {
                        var i = t.line,
                            o = de(t.line),
                            l = en(n, o);
                        if (l && (cn(l), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !tt(r.doc, i) && null != r.height) {
                            var s = r.height;
                            r.height = null;
                            var a = Ur(r) - s;
                            a && fe(i, i.height + a)
                        }
                        Nr(n, "markerChanged", n, e)
                    }))
                }, dl.prototype.attachLine = function(e) {
                    if (!this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp;
                        t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
                    }
                    this.lines.push(e)
                }, dl.prototype.detachLine = function(e) {
                    if (this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm) {
                        var t = this.doc.cm.curOp;
                        (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
                    }
                }, bt(dl);
                var gl = function(e, t) {
                    var r = this;
                    this.markers = e, this.primary = t;
                    for (var n = 0; n < e.length; ++n) e[n].parent = r
                };

                function vl(e, t, r, n, i) {
                    n = I(n), n.shared = !1;
                    var o = [pl(e, t, r, n, i)],
                        l = o[0],
                        s = n.widgetNode;
                    return vo(e, (function(e) {
                        s && (n.widgetNode = s.cloneNode(!0)), o.push(pl(e, Le(e, t), Le(e, r), n, i));
                        for (var a = 0; a < e.linked.length; ++a)
                            if (e.linked[a].isParent) return;
                        l = $(o)
                    })), new gl(o, l)
                }

                function ml(e) {
                    return e.findMarks(me(e.first, 0), e.clipPos(me(e.lastLine())), (function(e) {
                        return e.parent
                    }))
                }

                function yl(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            i = n.find(),
                            o = e.clipPos(i.from),
                            l = e.clipPos(i.to);
                        if (ye(o, l)) {
                            var s = pl(e, o, l, n.primary, n.primary.type);
                            n.markers.push(s), s.parent = n
                        }
                    }
                }

                function bl(e) {
                    for (var t = function(t) {
                            var r = e[t],
                                n = [r.primary.doc];
                            vo(r.primary.doc, (function(e) {
                                return n.push(e)
                            }));
                            for (var i = 0; i < r.markers.length; i++) {
                                var o = r.markers[i]; - 1 == B(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1))
                            }
                        }, r = 0; r < e.length; r++) t(r)
                }
                gl.prototype.clear = function() {
                    var e = this;
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var t = 0; t < this.markers.length; ++t) e.markers[t].clear();
                        Nr(this, "clear")
                    }
                }, gl.prototype.find = function(e, t) {
                    return this.primary.find(e, t)
                }, bt(gl);
                var wl = 0,
                    xl = function(e, t, r, n, i) {
                        if (!(this instanceof xl)) return new xl(e, t, r, n, i);
                        null == r && (r = 0), al.call(this, [new sl([new ar("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r;
                        var o = me(r, 0);
                        this.sel = oo(o), this.history = new wo(null), this.id = ++wl, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), go(this, {
                            from: o,
                            to: o,
                            text: e
                        }), Bo(this, oo(o), V)
                    };
                xl.prototype = Q(al.prototype, {
                    constructor: xl,
                    iter: function(e, t, r) {
                        r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e)
                    },
                    insert: function(e, t) {
                        for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
                        this.insertInner(e - this.first, t, r)
                    },
                    remove: function(e, t) {
                        this.removeInner(e - this.first, t)
                    },
                    getValue: function(e) {
                        var t = he(this, this.first, this.first + this.size);
                        return !1 === e ? t : t.join(e || this.lineSeparator())
                    },
                    setValue: Ai((function(e) {
                        var t = me(this.first, 0),
                            r = this.first + this.size - 1;
                        qo(this, {
                            from: t,
                            to: me(r, ue(this, r).text.length),
                            text: this.splitLines(e),
                            origin: "setValue",
                            full: !0
                        }, !0), this.cm && ii(this.cm, 0, 0), Bo(this, oo(t), V)
                    })),
                    replaceRange: function(e, t, r, n) {
                        t = Le(this, t), r = r ? Le(this, r) : t, rl(this, e, t, r, n)
                    },
                    getRange: function(e, t, r) {
                        var n = ce(this, Le(this, e), Le(this, t));
                        return !1 === r ? n : n.join(r || this.lineSeparator())
                    },
                    getLine: function(e) {
                        var t = this.getLineHandle(e);
                        return t && t.text
                    },
                    getLineHandle: function(e) {
                        if (ge(this, e)) return ue(this, e)
                    },
                    getLineNumber: function(e) {
                        return de(e)
                    },
                    getLineHandleVisualStart: function(e) {
                        return "number" == typeof e && (e = ue(this, e)), qe(e)
                    },
                    lineCount: function() {
                        return this.size
                    },
                    firstLine: function() {
                        return this.first
                    },
                    lastLine: function() {
                        return this.first + this.size - 1
                    },
                    clipPos: function(e) {
                        return Le(this, e)
                    },
                    getCursor: function(e) {
                        var t, r = this.sel.primary();
                        return t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || "to" == e || !1 === e ? r.to() : r.from(), t
                    },
                    listSelections: function() {
                        return this.sel.ranges
                    },
                    somethingSelected: function() {
                        return this.sel.somethingSelected()
                    },
                    setCursor: Ai((function(e, t, r) {
                        Io(this, Le(this, "number" == typeof e ? me(e, t || 0) : e), null, r)
                    })),
                    setSelection: Ai((function(e, t, r) {
                        Io(this, Le(this, e), Le(this, t || e), r)
                    })),
                    extendSelection: Ai((function(e, t, r) {
                        Fo(this, Le(this, e), t && Le(this, t), r)
                    })),
                    extendSelections: Ai((function(e, t) {
                        Po(this, Te(this, e), t)
                    })),
                    extendSelectionsBy: Ai((function(e, t) {
                        var r = q(this.sel.ranges, e);
                        Po(this, Te(this, r), t)
                    })),
                    setSelections: Ai((function(e, t, r) {
                        var n = this;
                        if (e.length) {
                            for (var i = [], o = 0; o < e.length; o++) i[o] = new no(Le(n, e[o].anchor), Le(n, e[o].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Bo(this, io(this.cm, i, t), r)
                        }
                    })),
                    addSelection: Ai((function(e, t, r) {
                        var n = this.sel.ranges.slice(0);
                        n.push(new no(Le(this, e), Le(this, t || e))), Bo(this, io(this.cm, n, n.length - 1), r)
                    })),
                    getSelection: function(e) {
                        for (var t, r = this, n = this.sel.ranges, i = 0; i < n.length; i++) {
                            var o = ce(r, n[i].from(), n[i].to());
                            t = t ? t.concat(o) : o
                        }
                        return !1 === e ? t : t.join(e || this.lineSeparator())
                    },
                    getSelections: function(e) {
                        for (var t = this, r = [], n = this.sel.ranges, i = 0; i < n.length; i++) {
                            var o = ce(t, n[i].from(), n[i].to());
                            !1 !== e && (o = o.join(e || t.lineSeparator())), r[i] = o
                        }
                        return r
                    },
                    replaceSelection: function(e, t, r) {
                        for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
                        this.replaceSelections(n, t, r || "+input")
                    },
                    replaceSelections: Ai((function(e, t, r) {
                        for (var n = this, i = [], o = this.sel, l = 0; l < o.ranges.length; l++) {
                            var s = o.ranges[l];
                            i[l] = {
                                from: s.from(),
                                to: s.to(),
                                text: n.splitLines(e[l]),
                                origin: r
                            }
                        }
                        for (var a = t && "end" != t && co(this, i, t), u = i.length - 1; u >= 0; u--) qo(n, i[u]);
                        a ? Ro(this, a) : this.cm && ni(this.cm)
                    })),
                    undo: Ai((function() {
                        Jo(this, "undo")
                    })),
                    redo: Ai((function() {
                        Jo(this, "redo")
                    })),
                    undoSelection: Ai((function() {
                        Jo(this, "undo", !0)
                    })),
                    redoSelection: Ai((function() {
                        Jo(this, "redo", !0)
                    })),
                    setExtending: function(e) {
                        this.extend = e
                    },
                    getExtending: function() {
                        return this.extend
                    },
                    historySize: function() {
                        for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
                        return {
                            undo: t,
                            redo: r
                        }
                    },
                    clearHistory: function() {
                        this.history = new wo(this.history.maxGeneration)
                    },
                    markClean: function() {
                        this.cleanGeneration = this.changeGeneration(!0)
                    },
                    changeGeneration: function(e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
                    },
                    isClean: function(e) {
                        return this.history.generation == (e || this.cleanGeneration)
                    },
                    getHistory: function() {
                        return {
                            done: Wo(this.history.done),
                            undone: Wo(this.history.undone)
                        }
                    },
                    setHistory: function(e) {
                        var t = this.history = new wo(this.history.maxGeneration);
                        t.done = Wo(e.done.slice(0), null, !0), t.undone = Wo(e.undone.slice(0), null, !0)
                    },
                    setGutterMarker: Ai((function(e, t, r) {
                        return ll(this, e, "gutter", (function(e) {
                            var n = e.gutterMarkers || (e.gutterMarkers = {});
                            return n[t] = r, !r && ne(n) && (e.gutterMarkers = null), !0
                        }))
                    })),
                    clearGutter: Ai((function(e) {
                        var t = this;
                        this.iter((function(r) {
                            r.gutterMarkers && r.gutterMarkers[e] && ll(t, r, "gutter", (function() {
                                return r.gutterMarkers[e] = null, ne(r.gutterMarkers) && (r.gutterMarkers = null), !0
                            }))
                        }))
                    })),
                    lineInfo: function(e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!ge(this, e)) return null;
                            if (t = e, e = ue(this, e), !e) return null
                        } else if (t = de(e), null == t) return null;
                        return {
                            line: t,
                            handle: e,
                            text: e.text,
                            gutterMarkers: e.gutterMarkers,
                            textClass: e.textClass,
                            bgClass: e.bgClass,
                            wrapClass: e.wrapClass,
                            widgets: e.widgets
                        }
                    },
                    addLineClass: Ai((function(e, t, r) {
                        return ll(this, e, "gutter" == t ? "gutter" : "class", (function(e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                            if (e[n]) {
                                if (L(r).test(e[n])) return !1;
                                e[n] += " " + r
                            } else e[n] = r;
                            return !0
                        }))
                    })),
                    removeLineClass: Ai((function(e, t, r) {
                        return ll(this, e, "gutter" == t ? "gutter" : "class", (function(e) {
                            var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                                i = e[n];
                            if (!i) return !1;
                            if (null == r) e[n] = null;
                            else {
                                var o = i.match(L(r));
                                if (!o) return !1;
                                var l = o.index + o[0].length;
                                e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null
                            }
                            return !0
                        }))
                    })),
                    addLineWidget: Ai((function(e, t, r) {
                        return hl(this, e, t, r)
                    })),
                    removeLineWidget: function(e) {
                        e.clear()
                    },
                    markText: function(e, t, r) {
                        return pl(this, Le(this, e), Le(this, t), r, r && r.type || "range")
                    },
                    setBookmark: function(e, t) {
                        var r = {
                            replacedWith: t && (null == t.nodeType ? t.widget : t),
                            insertLeft: t && t.insertLeft,
                            clearWhenEmpty: !1,
                            shared: t && t.shared,
                            handleMouseEvents: t && t.handleMouseEvents
                        };
                        return e = Le(this, e), pl(this, e, e, r, "bookmark")
                    },
                    findMarksAt: function(e) {
                        e = Le(this, e);
                        var t = [],
                            r = ue(this, e.line).markedSpans;
                        if (r)
                            for (var n = 0; n < r.length; ++n) {
                                var i = r[n];
                                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                            }
                        return t
                    },
                    findMarks: function(e, t, r) {
                        e = Le(this, e), t = Le(this, t);
                        var n = [],
                            i = e.line;
                        return this.iter(e.line, t.line + 1, (function(o) {
                            var l = o.markedSpans;
                            if (l)
                                for (var s = 0; s < l.length; s++) {
                                    var a = l[s];
                                    null != a.to && i == e.line && e.ch >= a.to || null == a.from && i != e.line || null != a.from && i == t.line && a.from >= t.ch || r && !r(a.marker) || n.push(a.marker.parent || a.marker)
                                }++i
                        })), n
                    },
                    getAllMarks: function() {
                        var e = [];
                        return this.iter((function(t) {
                            var r = t.markedSpans;
                            if (r)
                                for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker)
                        })), e
                    },
                    posFromIndex: function(e) {
                        var t, r = this.first,
                            n = this.lineSeparator().length;
                        return this.iter((function(i) {
                            var o = i.text.length + n;
                            if (o > e) return t = e, !0;
                            e -= o, ++r
                        })), Le(this, me(r, t))
                    },
                    indexFromPos: function(e) {
                        e = Le(this, e);
                        var t = e.ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var r = this.lineSeparator().length;
                        return this.iter(this.first, e.line, (function(e) {
                            t += e.text.length + r
                        })), t
                    },
                    copy: function(e) {
                        var t = new xl(he(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                        return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
                    },
                    linkedDoc: function(e) {
                        e || (e = {});
                        var t = this.first,
                            r = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
                        var n = new xl(he(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction);
                        return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
                            doc: n,
                            sharedHist: e.sharedHist
                        }), n.linked = [{
                            doc: this,
                            isParent: !0,
                            sharedHist: e.sharedHist
                        }], yl(n, ml(this)), n
                    },
                    unlinkDoc: function(e) {
                        var t = this;
                        if (e instanceof Es && (e = e.doc), this.linked)
                            for (var r = 0; r < this.linked.length; ++r) {
                                var n = t.linked[r];
                                if (n.doc == e) {
                                    t.linked.splice(r, 1), e.unlinkDoc(t), bl(ml(t));
                                    break
                                }
                            }
                        if (e.history == this.history) {
                            var i = [e.id];
                            vo(e, (function(e) {
                                return i.push(e.id)
                            }), !0), e.history = new wo(null), e.history.done = Wo(this.history.done, i), e.history.undone = Wo(this.history.undone, i)
                        }
                    },
                    iterLinkedDocs: function(e) {
                        vo(this, e)
                    },
                    getMode: function() {
                        return this.mode
                    },
                    getEditor: function() {
                        return this.cm
                    },
                    splitLines: function(e) {
                        return this.lineSep ? e.split(this.lineSep) : Dt(e)
                    },
                    lineSeparator: function() {
                        return this.lineSep || "\n"
                    },
                    setDirection: Ai((function(e) {
                        "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter((function(e) {
                            return e.order = null
                        })), this.cm && bo(this.cm))
                    }))
                }), xl.prototype.eachLine = xl.prototype.iter;
                var Cl = 0;

                function Sl(e) {
                    var t = this;
                    if (Tl(t), !vt(t, e) && !Vr(t.display, e)) {
                        wt(e), l && (Cl = +new Date);
                        var r = Pn(t, e, !0),
                            n = e.dataTransfer.files;
                        if (r && !t.isReadOnly())
                            if (n && n.length && window.FileReader && window.File)
                                for (var i = n.length, o = Array(i), s = 0, a = function(e, n) {
                                        if (!t.options.allowDropFileTypes || -1 != B(t.options.allowDropFileTypes, e.type)) {
                                            var l = new FileReader;
                                            l.onload = Ni(t, (function() {
                                                var e = l.result;
                                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[n] = e, ++s == i) {
                                                    r = Le(t.doc, r);
                                                    var a = {
                                                        from: r,
                                                        to: r,
                                                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                                        origin: "paste"
                                                    };
                                                    qo(t.doc, a), Ro(t.doc, oo(r, lo(a)))
                                                }
                                            })), l.readAsText(e)
                                        }
                                    }, u = 0; u < i; ++u) a(n[u], u);
                            else {
                                if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout((function() {
                                    return t.display.input.focus()
                                }), 20);
                                try {
                                    var c = e.dataTransfer.getData("Text");
                                    if (c) {
                                        var h;
                                        if (t.state.draggingText && !t.state.draggingText.copy && (h = t.listSelections()), Go(t.doc, oo(r, r)), h)
                                            for (var f = 0; f < h.length; ++f) rl(t.doc, "", h[f].anchor, h[f].head, "drag");
                                        t.replaceSelection(c, "around", "paste"), t.display.input.focus()
                                    }
                                } catch (e) {}
                            }
                    }
                }

                function Ll(e, t) {
                    if (l && (!e.state.draggingText || +new Date - Cl < 100)) St(t);
                    else if (!vt(e, t) && !Vr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !f)) {
                        var r = O("img", null, null, "position: fixed; left: 0; top: 0;");
                        r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", h && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), h && r.parentNode.removeChild(r)
                    }
                }

                function kl(e, t) {
                    var r = Pn(e, t);
                    if (r) {
                        var n = document.createDocumentFragment();
                        Rn(e, r, n), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), N(e.display.dragCursor, n)
                    }
                }

                function Tl(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null)
                }

                function Ml(e) {
                    if (document.getElementsByClassName) {
                        for (var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) {
                            var i = t[n].CodeMirror;
                            i && r.push(i)
                        }
                        r.length && r[0].operation((function() {
                            for (var t = 0; t < r.length; t++) e(r[t])
                        }))
                    }
                }
                var Nl = !1;

                function Ol() {
                    Nl || (Al(), Nl = !0)
                }

                function Al() {
                    var e;
                    ft(window, "resize", (function() {
                        null == e && (e = setTimeout((function() {
                            e = null, Ml(Dl)
                        }), 100))
                    })), ft(window, "blur", (function() {
                        return Ml(Xn)
                    }))
                }

                function Dl(e) {
                    var t = e.display;
                    t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
                }
                for (var Wl = {
                        3: "Pause",
                        8: "Backspace",
                        9: "Tab",
                        13: "Enter",
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Esc",
                        32: "Space",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "Left",
                        38: "Up",
                        39: "Right",
                        40: "Down",
                        44: "PrintScrn",
                        45: "Insert",
                        46: "Delete",
                        59: ";",
                        61: "=",
                        91: "Mod",
                        92: "Mod",
                        93: "Mod",
                        106: "*",
                        107: "=",
                        109: "-",
                        110: ".",
                        111: "/",
                        127: "Delete",
                        145: "ScrollLock",
                        173: "-",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        63232: "Up",
                        63233: "Down",
                        63234: "Left",
                        63235: "Right",
                        63272: "Delete",
                        63273: "Home",
                        63275: "End",
                        63276: "PageUp",
                        63277: "PageDown",
                        63302: "Insert"
                    }, Hl = 0; Hl < 10; Hl++) Wl[Hl + 48] = Wl[Hl + 96] = String(Hl);
                for (var Fl = 65; Fl <= 90; Fl++) Wl[Fl] = String.fromCharCode(Fl);
                for (var Pl = 1; Pl <= 12; Pl++) Wl[Pl + 111] = Wl[Pl + 63235] = "F" + Pl;
                var El = {};

                function Il(e) {
                    var t, r, n, i, o = e.split(/-(?!$)/);
                    e = o[o.length - 1];
                    for (var l = 0; l < o.length - 1; l++) {
                        var s = o[l];
                        if (/^(cmd|meta|m)$/i.test(s)) i = !0;
                        else if (/^a(lt)?$/i.test(s)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(s)) r = !0;
                        else {
                            if (!/^s(hift)?$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
                            n = !0
                        }
                    }
                    return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e
                }

                function zl(e) {
                    var t = {};
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = e[r];
                            if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
                            if ("..." == n) {
                                delete e[r];
                                continue
                            }
                            for (var i = q(r.split(" "), Il), o = 0; o < i.length; o++) {
                                var l = void 0,
                                    s = void 0;
                                o == i.length - 1 ? (s = i.join(" "), l = n) : (s = i.slice(0, o + 1).join(" "), l = "...");
                                var a = t[s];
                                if (a) {
                                    if (a != l) throw new Error("Inconsistent bindings for " + s)
                                } else t[s] = l
                            }
                            delete e[r]
                        } for (var u in t) e[u] = t[u];
                    return e
                }

                function Rl(e, t, r, n) {
                    t = Vl(t);
                    var i = t.call ? t.call(e, n) : t[e];
                    if (!1 === i) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && r(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Rl(e, t.fallthrough, r, n);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var l = Rl(e, t.fallthrough[o], r, n);
                            if (l) return l
                        }
                    }
                }

                function Bl(e) {
                    var t = "string" == typeof e ? e : Wl[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
                }

                function Gl(e, t, r) {
                    var n = e;
                    return t.altKey && "Alt" != n && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Cmd" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e
                }

                function Ul(e, t) {
                    if (h && 34 == e.keyCode && e["char"]) return !1;
                    var r = Wl[e.keyCode];
                    return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Gl(r, e, t))
                }

                function Vl(e) {
                    return "string" == typeof e ? El[e] : e
                }

                function Kl(e, t) {
                    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
                        var o = t(r[i]);
                        while (n.length && ye(o.from, $(n).to) <= 0) {
                            var l = n.pop();
                            if (ye(l.from, o.from) < 0) {
                                o.from = l.from;
                                break
                            }
                        }
                        n.push(o)
                    }
                    Mi(e, (function() {
                        for (var t = n.length - 1; t >= 0; t--) rl(e.doc, "", n[t].from, n[t].to, "+delete");
                        ni(e)
                    }))
                }

                function jl(e, t, r) {
                    var n = le(e.text, t + r, r);
                    return n < 0 || n > e.text.length ? null : n
                }

                function Xl(e, t, r) {
                    var n = jl(e, t.ch, r);
                    return null == n ? null : new me(t.line, n, r < 0 ? "after" : "before")
                }

                function Yl(e, t, r, n, i) {
                    if (e) {
                        var o = ct(r, t.doc.direction);
                        if (o) {
                            var l, s = i < 0 ? $(o) : o[0],
                                a = i < 0 == (1 == s.level),
                                u = a ? "after" : "before";
                            if (s.level > 0 || "rtl" == t.doc.direction) {
                                var c = tn(t, r);
                                l = i < 0 ? r.text.length - 1 : 0;
                                var h = rn(t, c, l).top;
                                l = se((function(e) {
                                    return rn(t, c, e).top == h
                                }), i < 0 == (1 == s.level) ? s.from : s.to - 1, l), "before" == u && (l = jl(r, l, 1))
                            } else l = i < 0 ? s.to : s.from;
                            return new me(n, l, u)
                        }
                    }
                    return new me(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after")
                }

                function _l(e, t, r, n) {
                    var i = ct(t, e.doc.direction);
                    if (!i) return Xl(t, r, n);
                    r.ch >= t.text.length ? (r.ch = t.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, r.sticky = "after");
                    var o = at(i, r.ch, r.sticky),
                        l = i[o];
                    if ("ltr" == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return Xl(t, r, n);
                    var s, a = function(e, r) {
                            return jl(t, e instanceof me ? e.ch : e, r)
                        },
                        u = function(r) {
                            return e.options.lineWrapping ? (s = s || tn(e, t), Ln(e, t, s, r)) : {
                                begin: 0,
                                end: t.text.length
                            }
                        },
                        c = u("before" == r.sticky ? a(r, -1) : r.ch);
                    if ("rtl" == e.doc.direction || 1 == l.level) {
                        var h = 1 == l.level == n < 0,
                            f = a(r, h ? 1 : -1);
                        if (null != f && (h ? f <= l.to && f <= c.end : f >= l.from && f >= c.begin)) {
                            var d = h ? "before" : "after";
                            return new me(r.line, f, d)
                        }
                    }
                    var p = function(e, t, n) {
                            for (var o = function(e, t) {
                                    return t ? new me(r.line, a(e, 1), "before") : new me(r.line, e, "after")
                                }; e >= 0 && e < i.length; e += t) {
                                var l = i[e],
                                    s = t > 0 == (1 != l.level),
                                    u = s ? n.begin : a(n.end, -1);
                                if (l.from <= u && u < l.to) return o(u, s);
                                if (u = s ? l.from : a(l.to, -1), n.begin <= u && u < n.end) return o(u, s)
                            }
                        },
                        g = p(o + n, n, c);
                    if (g) return g;
                    var v = n > 0 ? c.end : a(c.begin, -1);
                    return null == v || n > 0 && v == t.text.length || (g = p(n > 0 ? 0 : i.length - 1, n, u(v)), !g) ? null : g
                }
                El.basic = {
                    Left: "goCharLeft",
                    Right: "goCharRight",
                    Up: "goLineUp",
                    Down: "goLineDown",
                    End: "goLineEnd",
                    Home: "goLineStartSmart",
                    PageUp: "goPageUp",
                    PageDown: "goPageDown",
                    Delete: "delCharAfter",
                    Backspace: "delCharBefore",
                    "Shift-Backspace": "delCharBefore",
                    Tab: "defaultTab",
                    "Shift-Tab": "indentAuto",
                    Enter: "newlineAndIndent",
                    Insert: "toggleOverwrite",
                    Esc: "singleSelection"
                }, El.pcDefault = {
                    "Ctrl-A": "selectAll",
                    "Ctrl-D": "deleteLine",
                    "Ctrl-Z": "undo",
                    "Shift-Ctrl-Z": "redo",
                    "Ctrl-Y": "redo",
                    "Ctrl-Home": "goDocStart",
                    "Ctrl-End": "goDocEnd",
                    "Ctrl-Up": "goLineUp",
                    "Ctrl-Down": "goLineDown",
                    "Ctrl-Left": "goGroupLeft",
                    "Ctrl-Right": "goGroupRight",
                    "Alt-Left": "goLineStart",
                    "Alt-Right": "goLineEnd",
                    "Ctrl-Backspace": "delGroupBefore",
                    "Ctrl-Delete": "delGroupAfter",
                    "Ctrl-S": "save",
                    "Ctrl-F": "find",
                    "Ctrl-G": "findNext",
                    "Shift-Ctrl-G": "findPrev",
                    "Shift-Ctrl-F": "replace",
                    "Shift-Ctrl-R": "replaceAll",
                    "Ctrl-[": "indentLess",
                    "Ctrl-]": "indentMore",
                    "Ctrl-U": "undoSelection",
                    "Shift-Ctrl-U": "redoSelection",
                    "Alt-U": "redoSelection",
                    fallthrough: "basic"
                }, El.emacsy = {
                    "Ctrl-F": "goCharRight",
                    "Ctrl-B": "goCharLeft",
                    "Ctrl-P": "goLineUp",
                    "Ctrl-N": "goLineDown",
                    "Alt-F": "goWordRight",
                    "Alt-B": "goWordLeft",
                    "Ctrl-A": "goLineStart",
                    "Ctrl-E": "goLineEnd",
                    "Ctrl-V": "goPageDown",
                    "Shift-Ctrl-V": "goPageUp",
                    "Ctrl-D": "delCharAfter",
                    "Ctrl-H": "delCharBefore",
                    "Alt-D": "delWordAfter",
                    "Alt-Backspace": "delWordBefore",
                    "Ctrl-K": "killLine",
                    "Ctrl-T": "transposeChars",
                    "Ctrl-O": "openLine"
                }, El.macDefault = {
                    "Cmd-A": "selectAll",
                    "Cmd-D": "deleteLine",
                    "Cmd-Z": "undo",
                    "Shift-Cmd-Z": "redo",
                    "Cmd-Y": "redo",
                    "Cmd-Home": "goDocStart",
                    "Cmd-Up": "goDocStart",
                    "Cmd-End": "goDocEnd",
                    "Cmd-Down": "goDocEnd",
                    "Alt-Left": "goGroupLeft",
                    "Alt-Right": "goGroupRight",
                    "Cmd-Left": "goLineLeft",
                    "Cmd-Right": "goLineRight",
                    "Alt-Backspace": "delGroupBefore",
                    "Ctrl-Alt-Backspace": "delGroupAfter",
                    "Alt-Delete": "delGroupAfter",
                    "Cmd-S": "save",
                    "Cmd-F": "find",
                    "Cmd-G": "findNext",
                    "Shift-Cmd-G": "findPrev",
                    "Cmd-Alt-F": "replace",
                    "Shift-Cmd-Alt-F": "replaceAll",
                    "Cmd-[": "indentLess",
                    "Cmd-]": "indentMore",
                    "Cmd-Backspace": "delWrappedLineLeft",
                    "Cmd-Delete": "delWrappedLineRight",
                    "Cmd-U": "undoSelection",
                    "Shift-Cmd-U": "redoSelection",
                    "Ctrl-Up": "goDocStart",
                    "Ctrl-Down": "goDocEnd",
                    fallthrough: ["basic", "emacsy"]
                }, El["default"] = y ? El.macDefault : El.pcDefault;
                var $l = {
                    selectAll: _o,
                    singleSelection: function(e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V)
                    },
                    killLine: function(e) {
                        return Kl(e, (function(t) {
                            if (t.empty()) {
                                var r = ue(e.doc, t.head.line).text.length;
                                return t.head.ch == r && t.head.line < e.lastLine() ? {
                                    from: t.head,
                                    to: me(t.head.line + 1, 0)
                                } : {
                                    from: t.head,
                                    to: me(t.head.line, r)
                                }
                            }
                            return {
                                from: t.from(),
                                to: t.to()
                            }
                        }))
                    },
                    deleteLine: function(e) {
                        return Kl(e, (function(t) {
                            return {
                                from: me(t.from().line, 0),
                                to: Le(e.doc, me(t.to().line + 1, 0))
                            }
                        }))
                    },
                    delLineLeft: function(e) {
                        return Kl(e, (function(e) {
                            return {
                                from: me(e.from().line, 0),
                                to: e.from()
                            }
                        }))
                    },
                    delWrappedLineLeft: function(e) {
                        return Kl(e, (function(t) {
                            var r = e.charCoords(t.head, "div").top + 5,
                                n = e.coordsChar({
                                    left: 0,
                                    top: r
                                }, "div");
                            return {
                                from: n,
                                to: t.from()
                            }
                        }))
                    },
                    delWrappedLineRight: function(e) {
                        return Kl(e, (function(t) {
                            var r = e.charCoords(t.head, "div").top + 5,
                                n = e.coordsChar({
                                    left: e.display.lineDiv.offsetWidth + 100,
                                    top: r
                                }, "div");
                            return {
                                from: t.from(),
                                to: n
                            }
                        }))
                    },
                    undo: function(e) {
                        return e.undo()
                    },
                    redo: function(e) {
                        return e.redo()
                    },
                    undoSelection: function(e) {
                        return e.undoSelection()
                    },
                    redoSelection: function(e) {
                        return e.redoSelection()
                    },
                    goDocStart: function(e) {
                        return e.extendSelection(me(e.firstLine(), 0))
                    },
                    goDocEnd: function(e) {
                        return e.extendSelection(me(e.lastLine()))
                    },
                    goLineStart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return ql(e, t.head.line)
                        }), {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineStartSmart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return Jl(e, t.head)
                        }), {
                            origin: "+move",
                            bias: 1
                        })
                    },
                    goLineEnd: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            return Zl(e, t.head.line)
                        }), {
                            origin: "+move",
                            bias: -1
                        })
                    },
                    goLineRight: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: e.display.lineDiv.offsetWidth + 100,
                                top: r
                            }, "div")
                        }), j)
                    },
                    goLineLeft: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({
                                left: 0,
                                top: r
                            }, "div")
                        }), j)
                    },
                    goLineLeftSmart: function(e) {
                        return e.extendSelectionsBy((function(t) {
                            var r = e.cursorCoords(t.head, "div").top + 5,
                                n = e.coordsChar({
                                    left: 0,
                                    top: r
                                }, "div");
                            return n.ch < e.getLine(n.line).search(/\S/) ? Jl(e, t.head) : n
                        }), j)
                    },
                    goLineUp: function(e) {
                        return e.moveV(-1, "line")
                    },
                    goLineDown: function(e) {
                        return e.moveV(1, "line")
                    },
                    goPageUp: function(e) {
                        return e.moveV(-1, "page")
                    },
                    goPageDown: function(e) {
                        return e.moveV(1, "page")
                    },
                    goCharLeft: function(e) {
                        return e.moveH(-1, "char")
                    },
                    goCharRight: function(e) {
                        return e.moveH(1, "char")
                    },
                    goColumnLeft: function(e) {
                        return e.moveH(-1, "column")
                    },
                    goColumnRight: function(e) {
                        return e.moveH(1, "column")
                    },
                    goWordLeft: function(e) {
                        return e.moveH(-1, "word")
                    },
                    goGroupRight: function(e) {
                        return e.moveH(1, "group")
                    },
                    goGroupLeft: function(e) {
                        return e.moveH(-1, "group")
                    },
                    goWordRight: function(e) {
                        return e.moveH(1, "word")
                    },
                    delCharBefore: function(e) {
                        return e.deleteH(-1, "char")
                    },
                    delCharAfter: function(e) {
                        return e.deleteH(1, "char")
                    },
                    delWordBefore: function(e) {
                        return e.deleteH(-1, "word")
                    },
                    delWordAfter: function(e) {
                        return e.deleteH(1, "word")
                    },
                    delGroupBefore: function(e) {
                        return e.deleteH(-1, "group")
                    },
                    delGroupAfter: function(e) {
                        return e.deleteH(1, "group")
                    },
                    indentAuto: function(e) {
                        return e.indentSelection("smart")
                    },
                    indentMore: function(e) {
                        return e.indentSelection("add")
                    },
                    indentLess: function(e) {
                        return e.indentSelection("subtract")
                    },
                    insertTab: function(e) {
                        return e.replaceSelection("\t")
                    },
                    insertSoftTab: function(e) {
                        for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
                            var o = r[i].from(),
                                l = z(e.getLine(o.line), o.ch, n);
                            t.push(_(n - l % n))
                        }
                        e.replaceSelections(t)
                    },
                    defaultTab: function(e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
                    },
                    transposeChars: function(e) {
                        return Mi(e, (function() {
                            for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                                if (t[n].empty()) {
                                    var i = t[n].head,
                                        o = ue(e.doc, i.line).text;
                                    if (o)
                                        if (i.ch == o.length && (i = new me(i.line, i.ch - 1)), i.ch > 0) i = new me(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), me(i.line, i.ch - 2), i, "+transpose");
                                        else if (i.line > e.doc.first) {
                                        var l = ue(e.doc, i.line - 1).text;
                                        l && (i = new me(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), me(i.line - 1, l.length - 1), i, "+transpose"))
                                    }
                                    r.push(new no(i, i))
                                } e.setSelections(r)
                        }))
                    },
                    newlineAndIndent: function(e) {
                        return Mi(e, (function() {
                            for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--) e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
                            t = e.listSelections();
                            for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
                            ni(e)
                        }))
                    },
                    openLine: function(e) {
                        return e.replaceSelection("\n", "start")
                    },
                    toggleOverwrite: function(e) {
                        return e.toggleOverwrite()
                    }
                };

                function ql(e, t) {
                    var r = ue(e.doc, t),
                        n = qe(r);
                    return n != r && (t = de(n)), Yl(!0, e, n, t, 1)
                }

                function Zl(e, t) {
                    var r = ue(e.doc, t),
                        n = Ze(r);
                    return n != r && (t = de(n)), Yl(!0, e, r, t, -1)
                }

                function Jl(e, t) {
                    var r = ql(e, t.line),
                        n = ue(e.doc, r.line),
                        i = ct(n, e.doc.direction);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(0, n.text.search(/\S/)),
                            l = t.line == r.line && t.ch <= o && t.ch;
                        return me(r.line, l ? 0 : o, r.sticky)
                    }
                    return r
                }

                function Ql(e, t, r) {
                    if ("string" == typeof t && (t = $l[t], !t)) return !1;
                    e.display.input.ensurePolled();
                    var n = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != U
                    } finally {
                        e.display.shift = n, e.state.suppressEdits = !1
                    }
                    return i
                }

                function es(e, t, r) {
                    for (var n = 0; n < e.state.keyMaps.length; n++) {
                        var i = Rl(t, e.state.keyMaps[n], r, e);
                        if (i) return i
                    }
                    return e.options.extraKeys && Rl(t, e.options.extraKeys, r, e) || Rl(t, e.options.keyMap, r, e)
                }
                var ts = new R;

                function rs(e, t, r, n) {
                    var i = e.state.keySeq;
                    if (i) {
                        if (Bl(t)) return "handled";
                        if (/\'$/.test(t) ? e.state.keySeq = null : ts.set(50, (function() {
                                e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset())
                            })), ns(e, i + " " + t, r, n)) return !0
                    }
                    return ns(e, t, r, n)
                }

                function ns(e, t, r, n) {
                    var i = es(e, t, n);
                    return "multi" == i && (e.state.keySeq = t), "handled" == i && Nr(e, "keyHandled", e, t, r), "handled" != i && "multi" != i || (wt(r), Un(e)), !!i
                }

                function is(e, t) {
                    var r = Ul(t, !0);
                    return !!r && (t.shiftKey && !e.state.keySeq ? rs(e, "Shift-" + r, t, (function(t) {
                        return Ql(e, t, !0)
                    })) || rs(e, r, t, (function(t) {
                        if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return Ql(e, t)
                    })) : rs(e, r, t, (function(t) {
                        return Ql(e, t)
                    })))
                }

                function os(e, t, r) {
                    return rs(e, "'" + r + "'", t, (function(t) {
                        return Ql(e, t, !0)
                    }))
                }
                var ls = null;

                function ss(e) {
                    var t = this;
                    if (t.curOp.focus = W(), !vt(t, e)) {
                        l && s < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var r = e.keyCode;
                        t.display.shift = 16 == r || e.shiftKey;
                        var n = is(t, e);
                        h && (ls = n ? r : null, n || 88 != r || Ht || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || as(t)
                    }
                }

                function as(e) {
                    var t = e.display.lineDiv;

                    function r(e) {
                        18 != e.keyCode && e.altKey || (T(t, "CodeMirror-crosshair"), pt(document, "keyup", r), pt(document, "mouseover", r))
                    }
                    H(t, "CodeMirror-crosshair"), ft(document, "keyup", r), ft(document, "mouseover", r)
                }

                function us(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1), vt(this, e)
                }

                function cs(e) {
                    var t = this;
                    if (!(Vr(t.display, e) || vt(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) {
                        var r = e.keyCode,
                            n = e.charCode;
                        if (h && r == ls) return ls = null, void wt(e);
                        if (!h || e.which && !(e.which < 10) || !is(t, e)) {
                            var i = String.fromCharCode(null == n ? r : n);
                            "\b" != i && (os(t, e, i) || t.display.input.onKeyPress(e))
                        }
                    }
                }
                var hs, fs, ds = 400,
                    ps = function(e, t, r) {
                        this.time = e, this.pos = t, this.button = r
                    };

                function gs(e, t) {
                    var r = +new Date;
                    return fs && fs.compare(r, e, t) ? (hs = fs = null, "triple") : hs && hs.compare(r, e, t) ? (fs = new ps(r, e, t), hs = null, "double") : (hs = new ps(r, e, t), fs = null, "single")
                }

                function vs(e) {
                    var t = this,
                        r = t.display;
                    if (!(vt(t, e) || r.activeTouch && r.input.supportsTouch()))
                        if (r.input.ensurePolled(), r.shift = e.shiftKey, Vr(r, e)) a || (r.scroller.draggable = !1, setTimeout((function() {
                            return r.scroller.draggable = !0
                        }), 100));
                        else if (!ks(t, e)) {
                        var n = Pn(t, e),
                            i = kt(e),
                            o = n ? gs(n, i) : "single";
                        window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), n && ms(t, i, n, o, e) || (1 == i ? n ? bs(t, n, o, e) : Lt(e) == r.scroller && wt(e) : 2 == i ? (n && Fo(t.doc, n), setTimeout((function() {
                            return r.input.focus()
                        }), 20)) : 3 == i && (S ? t.display.input.onContextMenu(e) : Kn(t)))
                    }
                }

                function ms(e, t, r, n, i) {
                    var o = "Click";
                    return "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o), o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, rs(e, Gl(o, i), i, (function(t) {
                        if ("string" == typeof t && (t = $l[t]), !t) return !1;
                        var n = !1;
                        try {
                            e.isReadOnly() && (e.state.suppressEdits = !0), n = t(e, r) != U
                        } finally {
                            e.state.suppressEdits = !1
                        }
                        return n
                    }))
                }

                function ys(e, t, r) {
                    var n = e.getOption("configureMouse"),
                        i = n ? n(e, t, r) : {};
                    if (null == i.unit) {
                        var o = b ? r.shiftKey && r.metaKey : r.altKey;
                        i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
                    }
                    return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey), null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)), i
                }

                function bs(e, t, r, n) {
                    l ? setTimeout(E(Vn, e), 0) : e.curOp.focus = W();
                    var i, o = ys(e, r, n),
                        s = e.doc.sel;
                    e.options.dragDrop && Nt && !e.isReadOnly() && "single" == r && (i = s.contains(t)) > -1 && (ye((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) && (ye(i.to(), t) > 0 || t.xRel < 0) ? ws(e, n, t, o) : Cs(e, n, t, o)
                }

                function ws(e, t, r, n) {
                    var i = e.display,
                        o = !1,
                        u = Ni(e, (function(t) {
                            a && (i.scroller.draggable = !1), e.state.draggingText = !1, pt(i.wrapper.ownerDocument, "mouseup", u), pt(i.wrapper.ownerDocument, "mousemove", c), pt(i.scroller, "dragstart", h), pt(i.scroller, "drop", u), o || (wt(t), n.addNew || Fo(e.doc, r, null, null, n.extend), a || l && 9 == s ? setTimeout((function() {
                                i.wrapper.ownerDocument.body.focus(), i.input.focus()
                            }), 20) : i.input.focus())
                        })),
                        c = function(e) {
                            o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
                        },
                        h = function() {
                            return o = !0
                        };
                    a && (i.scroller.draggable = !0), e.state.draggingText = u, u.copy = !n.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), ft(i.wrapper.ownerDocument, "mouseup", u), ft(i.wrapper.ownerDocument, "mousemove", c), ft(i.scroller, "dragstart", h), ft(i.scroller, "drop", u), Kn(e), setTimeout((function() {
                        return i.input.focus()
                    }), 20)
                }

                function xs(e, t, r) {
                    if ("char" == r) return new no(t, t);
                    if ("word" == r) return e.findWordAt(t);
                    if ("line" == r) return new no(me(t.line, 0), Le(e.doc, me(t.line + 1, 0)));
                    var n = r(e, t);
                    return new no(n.from, n.to)
                }

                function Cs(e, t, r, n) {
                    var i = e.display,
                        o = e.doc;
                    wt(t);
                    var l, s, a = o.sel,
                        u = a.ranges;
                    if (n.addNew && !n.extend ? (s = o.sel.contains(r), l = s > -1 ? u[s] : new no(r, r)) : (l = o.sel.primary(), s = o.sel.primIndex), "rectangle" == n.unit) n.addNew || (l = new no(r, r)), r = Pn(e, t, !0, !0), s = -1;
                    else {
                        var c = xs(e, r, n.unit);
                        l = n.extend ? Ho(l, c.anchor, c.head, n.extend) : c
                    }
                    n.addNew ? -1 == s ? (s = u.length, Bo(o, io(e, u.concat([l]), s), {
                        scroll: !1,
                        origin: "*mouse"
                    })) : u.length > 1 && u[s].empty() && "char" == n.unit && !n.extend ? (Bo(o, io(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                        scroll: !1,
                        origin: "*mouse"
                    }), a = o.sel) : Eo(o, s, l, K) : (s = 0, Bo(o, new ro([l], 0), K), a = o.sel);
                    var h = r;

                    function f(t) {
                        if (0 != ye(h, t))
                            if (h = t, "rectangle" == n.unit) {
                                for (var i = [], u = e.options.tabSize, c = z(ue(o, r.line).text, r.ch, u), f = z(ue(o, t.line).text, t.ch, u), d = Math.min(c, f), p = Math.max(c, f), g = Math.min(r.line, t.line), v = Math.min(e.lastLine(), Math.max(r.line, t.line)); g <= v; g++) {
                                    var m = ue(o, g).text,
                                        y = X(m, d, u);
                                    d == p ? i.push(new no(me(g, y), me(g, y))) : m.length > y && i.push(new no(me(g, y), me(g, X(m, p, u))))
                                }
                                i.length || i.push(new no(r, r)), Bo(o, io(e, a.ranges.slice(0, s).concat(i), s), {
                                    origin: "*mouse",
                                    scroll: !1
                                }), e.scrollIntoView(t)
                            } else {
                                var b, w = l,
                                    x = xs(e, t, n.unit),
                                    C = w.anchor;
                                ye(x.anchor, C) > 0 ? (b = x.head, C = Ce(w.from(), x.anchor)) : (b = x.anchor, C = xe(w.to(), x.head));
                                var S = a.ranges.slice(0);
                                S[s] = Ss(e, new no(Le(o, C), b)), Bo(o, io(e, S, s), K)
                            }
                    }
                    var d = i.wrapper.getBoundingClientRect(),
                        p = 0;

                    function g(t) {
                        var r = ++p,
                            l = Pn(e, t, !0, "rectangle" == n.unit);
                        if (l)
                            if (0 != ye(l, h)) {
                                e.curOp.focus = W(), f(l);
                                var s = $n(i, o);
                                (l.line >= s.to || l.line < s.from) && setTimeout(Ni(e, (function() {
                                    p == r && g(t)
                                })), 150)
                            } else {
                                var a = t.clientY < d.top ? -20 : t.clientY > d.bottom ? 20 : 0;
                                a && setTimeout(Ni(e, (function() {
                                    p == r && (i.scroller.scrollTop += a, g(t))
                                })), 50)
                            }
                    }

                    function v(t) {
                        e.state.selectingText = !1, p = 1 / 0, wt(t), i.input.focus(), pt(i.wrapper.ownerDocument, "mousemove", m), pt(i.wrapper.ownerDocument, "mouseup", y), o.history.lastSelOrigin = null
                    }
                    var m = Ni(e, (function(e) {
                            0 !== e.buttons && kt(e) ? g(e) : v(e)
                        })),
                        y = Ni(e, v);
                    e.state.selectingText = y, ft(i.wrapper.ownerDocument, "mousemove", m), ft(i.wrapper.ownerDocument, "mouseup", y)
                }

                function Ss(e, t) {
                    var r = t.anchor,
                        n = t.head,
                        i = ue(e.doc, r.line);
                    if (0 == ye(r, n) && r.sticky == n.sticky) return t;
                    var o = ct(i);
                    if (!o) return t;
                    var l = at(o, r.ch, r.sticky),
                        s = o[l];
                    if (s.from != r.ch && s.to != r.ch) return t;
                    var a, u = l + (s.from == r.ch == (1 != s.level) ? 0 : 1);
                    if (0 == u || u == o.length) return t;
                    if (n.line != r.line) a = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                    else {
                        var c = at(o, n.ch, n.sticky),
                            h = c - l || (n.ch - r.ch) * (1 == s.level ? -1 : 1);
                        a = c == u - 1 || c == u ? h < 0 : h > 0
                    }
                    var f = o[u + (a ? -1 : 0)],
                        d = a == (1 == f.level),
                        p = d ? f.from : f.to,
                        g = d ? "after" : "before";
                    return r.ch == p && r.sticky == g ? t : new no(new me(r.line, p, g), n)
                }

                function Ls(e, t, r, n) {
                    var i, o;
                    if (t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;
                    else try {
                        i = t.clientX, o = t.clientY
                    } catch (t) {
                        return !1
                    }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    n && wt(t);
                    var l = e.display,
                        s = l.lineDiv.getBoundingClientRect();
                    if (o > s.bottom || !yt(e, r)) return Ct(t);
                    o -= s.top - l.viewOffset;
                    for (var a = 0; a < e.options.gutters.length; ++a) {
                        var u = l.gutters.childNodes[a];
                        if (u && u.getBoundingClientRect().right >= i) {
                            var c = pe(e.doc, o),
                                h = e.options.gutters[a];
                            return gt(e, r, e, c, h, t), Ct(t)
                        }
                    }
                }

                function ks(e, t) {
                    return Ls(e, t, "gutterClick", !0)
                }

                function Ts(e, t) {
                    Vr(e.display, t) || Ms(e, t) || vt(e, t, "contextmenu") || S || e.display.input.onContextMenu(t)
                }

                function Ms(e, t) {
                    return !!yt(e, "gutterContextMenu") && Ls(e, t, "gutterContextMenu", !1)
                }

                function Ns(e) {
                    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), fn(e)
                }
                ps.prototype.compare = function(e, t, r) {
                    return this.time + ds > e && 0 == ye(t, this.pos) && r == this.button
                };
                var Os = {
                        toString: function() {
                            return "CodeMirror.Init"
                        }
                    },
                    As = {},
                    Ds = {};

                function Ws(e) {
                    var t = e.optionHandlers;

                    function r(r, n, i, o) {
                        e.defaults[r] = n, i && (t[r] = o ? function(e, t, r) {
                            r != Os && i(e, t, r)
                        } : i)
                    }
                    e.defineOption = r, e.Init = Os, r("value", "", (function(e, t) {
                        return e.setValue(t)
                    }), !0), r("mode", null, (function(e, t) {
                        e.doc.modeOption = t, ho(e)
                    }), !0), r("indentUnit", 2, ho, !0), r("indentWithTabs", !1), r("smartIndent", !0), r("tabSize", 4, (function(e) {
                        fo(e), fn(e), Di(e)
                    }), !0), r("lineSeparator", null, (function(e, t) {
                        if (e.doc.lineSep = t, t) {
                            var r = [],
                                n = e.doc.first;
                            e.doc.iter((function(e) {
                                for (var i = 0;;) {
                                    var o = e.text.indexOf(t, i);
                                    if (-1 == o) break;
                                    i = o + t.length, r.push(me(n, o))
                                }
                                n++
                            }));
                            for (var i = r.length - 1; i >= 0; i--) rl(e.doc, t, r[i], me(r[i].line, r[i].ch + t.length))
                        }
                    })), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, (function(e, t, r) {
                        e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != Os && e.refresh()
                    })), r("specialCharPlaceholder", gr, (function(e) {
                        return e.refresh()
                    }), !0), r("electricChars", !0), r("inputStyle", m ? "contenteditable" : "textarea", (function() {
                        throw new Error("inputStyle can not (yet) be changed in a running editor")
                    }), !0), r("spellcheck", !1, (function(e, t) {
                        return e.getInputField().spellcheck = t
                    }), !0), r("autocorrect", !1, (function(e, t) {
                        return e.getInputField().autocorrect = t
                    }), !0), r("autocapitalize", !1, (function(e, t) {
                        return e.getInputField().autocapitalize = t
                    }), !0), r("rtlMoveVisually", !w), r("wholeLineUpdateBefore", !0), r("theme", "default", (function(e) {
                        Ns(e), Hs(e)
                    }), !0), r("keyMap", "default", (function(e, t, r) {
                        var n = Vl(t),
                            i = r != Os && Vl(r);
                        i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null)
                    })), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, Ps, !0), r("gutters", [], (function(e) {
                        qi(e.options), Hs(e)
                    }), !0), r("fixedGutter", !0, (function(e, t) {
                        e.display.gutters.style.left = t ? Wn(e.display) + "px" : "0", e.refresh()
                    }), !0), r("coverGutterNextToScrollbar", !1, (function(e) {
                        return pi(e)
                    }), !0), r("scrollbarStyle", "native", (function(e) {
                        mi(e), pi(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
                    }), !0), r("lineNumbers", !1, (function(e) {
                        qi(e.options), Hs(e)
                    }), !0), r("firstLineNumber", 1, Hs, !0), r("lineNumberFormatter", (function(e) {
                        return e
                    }), Hs, !0), r("showCursorWhenSelecting", !1, In, !0), r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), r("readOnly", !1, (function(e, t) {
                        "nocursor" == t && (Xn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t)
                    })), r("disableInput", !1, (function(e, t) {
                        t || e.display.input.reset()
                    }), !0), r("dragDrop", !0, Fs), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), r("cursorScrollMargin", 0), r("cursorHeight", 1, In, !0), r("singleCursorHeightPerLine", !0, In, !0), r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, fo, !0), r("addModeClass", !1, fo, !0), r("pollInterval", 100), r("undoDepth", 200, (function(e, t) {
                        return e.doc.history.undoDepth = t
                    })), r("historyEventDelay", 1250), r("viewportMargin", 10, (function(e) {
                        return e.refresh()
                    }), !0), r("maxHighlightLength", 1e4, fo, !0), r("moveInputWithCursor", !0, (function(e, t) {
                        t || e.display.input.resetPosition()
                    })), r("tabindex", null, (function(e, t) {
                        return e.display.input.getField().tabIndex = t || ""
                    })), r("autofocus", null), r("direction", "ltr", (function(e, t) {
                        return e.doc.setDirection(t)
                    }), !0), r("phrases", null)
                }

                function Hs(e) {
                    $i(e), Di(e), qn(e)
                }

                function Fs(e, t, r) {
                    var n = r && r != Os;
                    if (!t != !n) {
                        var i = e.display.dragFunctions,
                            o = t ? ft : pt;
                        o(e.display.scroller, "dragstart", i.start), o(e.display.scroller, "dragenter", i.enter), o(e.display.scroller, "dragover", i.over), o(e.display.scroller, "dragleave", i.leave), o(e.display.scroller, "drop", i.drop)
                    }
                }

                function Ps(e) {
                    e.options.lineWrapping ? (H(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (T(e.display.wrapper, "CodeMirror-wrap"), ot(e)), Fn(e), Di(e), fn(e), setTimeout((function() {
                        return pi(e)
                    }), 100)
                }

                function Es(e, t) {
                    var r = this;
                    if (!(this instanceof Es)) return new Es(e, t);
                    this.options = t = t ? I(t) : {}, I(As, t, !1), qi(t);
                    var n = t.value;
                    "string" == typeof n ? n = new xl(n, t.mode, null, t.lineSeparator, t.direction) : t.mode && (n.modeOption = t.mode), this.doc = n;
                    var i = new Es.inputStyles[t.inputStyle](this),
                        o = this.display = new ae(e, n, i);
                    for (var u in o.wrapper.CodeMirror = this, $i(this), Ns(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), mi(this), this.state = {
                            keyMaps: [],
                            overlays: [],
                            modeGen: 0,
                            overwrite: !1,
                            delayingBlurEvent: !1,
                            focused: !1,
                            suppressEdits: !1,
                            pasteIncoming: -1,
                            cutIncoming: -1,
                            selectingText: !1,
                            draggingText: !1,
                            highlight: new R,
                            keySeq: null,
                            specialChars: null
                        }, t.autofocus && !m && o.input.focus(), l && s < 11 && setTimeout((function() {
                            return r.display.input.reset(!0)
                        }), 20), Is(this), Ol(), bi(this), this.curOp.forceUpdate = !0, mo(this, n), t.autofocus && !m || this.hasFocus() ? setTimeout(E(jn, this), 20) : Xn(this), Ds) Ds.hasOwnProperty(u) && Ds[u](r, t[u], Os);
                    Zn(this), t.finishInit && t.finishInit(this);
                    for (var c = 0; c < zs.length; ++c) zs[c](r);
                    wi(this), a && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
                }

                function Is(e) {
                    var t = e.display;
                    ft(t.scroller, "mousedown", Ni(e, vs)), ft(t.scroller, "dblclick", l && s < 11 ? Ni(e, (function(t) {
                        if (!vt(e, t)) {
                            var r = Pn(e, t);
                            if (r && !ks(e, t) && !Vr(e.display, t)) {
                                wt(t);
                                var n = e.findWordAt(r);
                                Fo(e.doc, n.anchor, n.head)
                            }
                        }
                    })) : function(t) {
                        return vt(e, t) || wt(t)
                    }), ft(t.scroller, "contextmenu", (function(t) {
                        return Ts(e, t)
                    }));
                    var r, n = {
                        end: 0
                    };

                    function i() {
                        t.activeTouch && (r = setTimeout((function() {
                            return t.activeTouch = null
                        }), 1e3), n = t.activeTouch, n.end = +new Date)
                    }

                    function o(e) {
                        if (1 != e.touches.length) return !1;
                        var t = e.touches[0];
                        return t.radiusX <= 1 && t.radiusY <= 1
                    }

                    function a(e, t) {
                        if (null == t.left) return !0;
                        var r = t.left - e.left,
                            n = t.top - e.top;
                        return r * r + n * n > 400
                    }
                    ft(t.scroller, "touchstart", (function(i) {
                        if (!vt(e, i) && !o(i) && !ks(e, i)) {
                            t.input.ensurePolled(), clearTimeout(r);
                            var l = +new Date;
                            t.activeTouch = {
                                start: l,
                                moved: !1,
                                prev: l - n.end <= 300 ? n : null
                            }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY)
                        }
                    })), ft(t.scroller, "touchmove", (function() {
                        t.activeTouch && (t.activeTouch.moved = !0)
                    })), ft(t.scroller, "touchend", (function(r) {
                        var n = t.activeTouch;
                        if (n && !Vr(t, r) && null != n.left && !n.moved && new Date - n.start < 300) {
                            var o, l = e.coordsChar(t.activeTouch, "page");
                            o = !n.prev || a(n, n.prev) ? new no(l, l) : !n.prev.prev || a(n, n.prev.prev) ? e.findWordAt(l) : new no(me(l.line, 0), Le(e.doc, me(l.line + 1, 0))), e.setSelection(o.anchor, o.head), e.focus(), wt(r)
                        }
                        i()
                    })), ft(t.scroller, "touchcancel", i), ft(t.scroller, "scroll", (function() {
                        t.scroller.clientHeight && (ai(e, t.scroller.scrollTop), ci(e, t.scroller.scrollLeft, !0), gt(e, "scroll", e))
                    })), ft(t.scroller, "mousewheel", (function(t) {
                        return to(e, t)
                    })), ft(t.scroller, "DOMMouseScroll", (function(t) {
                        return to(e, t)
                    })), ft(t.wrapper, "scroll", (function() {
                        return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
                    })), t.dragFunctions = {
                        enter: function(t) {
                            vt(e, t) || St(t)
                        },
                        over: function(t) {
                            vt(e, t) || (kl(e, t), St(t))
                        },
                        start: function(t) {
                            return Ll(e, t)
                        },
                        drop: Ni(e, Sl),
                        leave: function(t) {
                            vt(e, t) || Tl(e)
                        }
                    };
                    var u = t.input.getField();
                    ft(u, "keyup", (function(t) {
                        return us.call(e, t)
                    })), ft(u, "keydown", Ni(e, ss)), ft(u, "keypress", Ni(e, cs)), ft(u, "focus", (function(t) {
                        return jn(e, t)
                    })), ft(u, "blur", (function(t) {
                        return Xn(e, t)
                    }))
                }
                Es.defaults = As, Es.optionHandlers = Ds;
                var zs = [];

                function Rs(e, t, r, n) {
                    var i, o = e.doc;
                    null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = Jt(e, t).state : r = "prev");
                    var l = e.options.tabSize,
                        s = ue(o, t),
                        a = z(s.text, null, l);
                    s.stateAfter && (s.stateAfter = null);
                    var u, c = s.text.match(/^\s*/)[0];
                    if (n || /\S/.test(s.text)) {
                        if ("smart" == r && (u = o.mode.indent(i, s.text.slice(c.length), s.text), u == U || u > 150)) {
                            if (!n) return;
                            r = "prev"
                        }
                    } else u = 0, r = "not";
                    "prev" == r ? u = t > o.first ? z(ue(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r), u = Math.max(0, u);
                    var h = "",
                        f = 0;
                    if (e.options.indentWithTabs)
                        for (var d = Math.floor(u / l); d; --d) f += l, h += "\t";
                    if (f < u && (h += _(u - f)), h != c) return rl(o, h, me(t, 0), me(t, c.length), "+input"), s.stateAfter = null, !0;
                    for (var p = 0; p < o.sel.ranges.length; p++) {
                        var g = o.sel.ranges[p];
                        if (g.head.line == t && g.head.ch < c.length) {
                            var v = me(t, c.length);
                            Eo(o, p, new no(v, v));
                            break
                        }
                    }
                }
                Es.defineInitHook = function(e) {
                    return zs.push(e)
                };
                var Bs = null;

                function Gs(e) {
                    Bs = e
                }

                function Us(e, t, r, n, i) {
                    var o = e.doc;
                    e.display.shift = !1, n || (n = o.sel);
                    var l = +new Date - 200,
                        s = "paste" == i || e.state.pasteIncoming > l,
                        a = Dt(t),
                        u = null;
                    if (s && n.ranges.length > 1)
                        if (Bs && Bs.text.join("\n") == t) {
                            if (n.ranges.length % Bs.text.length == 0) {
                                u = [];
                                for (var c = 0; c < Bs.text.length; c++) u.push(o.splitLines(Bs.text[c]))
                            }
                        } else a.length == n.ranges.length && e.options.pasteLinesPerSelection && (u = q(a, (function(e) {
                            return [e]
                        })));
                    for (var h = e.curOp.updateInput, f = n.ranges.length - 1; f >= 0; f--) {
                        var d = n.ranges[f],
                            p = d.from(),
                            g = d.to();
                        d.empty() && (r && r > 0 ? p = me(p.line, p.ch - r) : e.state.overwrite && !s ? g = me(g.line, Math.min(ue(o, g.line).text.length, g.ch + $(a).length)) : s && Bs && Bs.lineWise && Bs.text.join("\n") == t && (p = g = me(p.line, 0)));
                        var v = {
                            from: p,
                            to: g,
                            text: u ? u[f % u.length] : a,
                            origin: i || (s ? "paste" : e.state.cutIncoming > l ? "cut" : "+input")
                        };
                        qo(e.doc, v), Nr(e, "inputRead", e, v)
                    }
                    t && !s && Ks(e, t), ni(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = h), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1
                }

                function Vs(e, t) {
                    var r = e.clipboardData && e.clipboardData.getData("Text");
                    if (r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Mi(t, (function() {
                        return Us(t, r, 0, null, "paste")
                    })), !0
                }

                function Ks(e, t) {
                    if (e.options.electricChars && e.options.smartIndent)
                        for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
                            var i = r.ranges[n];
                            if (!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) {
                                var o = e.getModeAt(i.head),
                                    l = !1;
                                if (o.electricChars) {
                                    for (var s = 0; s < o.electricChars.length; s++)
                                        if (t.indexOf(o.electricChars.charAt(s)) > -1) {
                                            l = Rs(e, i.head.line, "smart");
                                            break
                                        }
                                } else o.electricInput && o.electricInput.test(ue(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Rs(e, i.head.line, "smart"));
                                l && Nr(e, "electricInput", e, i.head.line)
                            }
                        }
                }

                function js(e) {
                    for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
                        var i = e.doc.sel.ranges[n].head.line,
                            o = {
                                anchor: me(i, 0),
                                head: me(i + 1, 0)
                            };
                        r.push(o), t.push(e.getRange(o.anchor, o.head))
                    }
                    return {
                        text: t,
                        ranges: r
                    }
                }

                function Xs(e, t, r, n) {
                    e.setAttribute("autocorrect", !!r), e.setAttribute("autocapitalize", !!n), e.setAttribute("spellcheck", !!t)
                }

                function Ys() {
                    var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return a ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), Xs(e), t
                }

                function _s(e) {
                    var t = e.optionHandlers,
                        r = e.helpers = {};
                    e.prototype = {
                        constructor: e,
                        focus: function() {
                            window.focus(), this.display.input.focus()
                        },
                        setOption: function(e, r) {
                            var n = this.options,
                                i = n[e];
                            n[e] == r && "mode" != e || (n[e] = r, t.hasOwnProperty(e) && Ni(this, t[e])(this, r, i), gt(this, "optionChange", this, e))
                        },
                        getOption: function(e) {
                            return this.options[e]
                        },
                        getDoc: function() {
                            return this.doc
                        },
                        addKeyMap: function(e, t) {
                            this.state.keyMaps[t ? "push" : "unshift"](Vl(e))
                        },
                        removeKeyMap: function(e) {
                            for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0
                        },
                        addOverlay: Oi((function(t, r) {
                            var n = t.token ? t : e.getMode(this.options, t);
                            if (n.startState) throw new Error("Overlays may not be stateful.");
                            Z(this.state.overlays, {
                                mode: n,
                                modeSpec: t,
                                opaque: r && r.opaque,
                                priority: r && r.priority || 0
                            }, (function(e) {
                                return e.priority
                            })), this.state.modeGen++, Di(this)
                        })),
                        removeOverlay: Oi((function(e) {
                            for (var t = this, r = this.state.overlays, n = 0; n < r.length; ++n) {
                                var i = r[n].modeSpec;
                                if (i == e || "string" == typeof e && i.name == e) return r.splice(n, 1), t.state.modeGen++, void Di(t)
                            }
                        })),
                        indentLine: Oi((function(e, t, r) {
                            "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), ge(this.doc, e) && Rs(this, e, t, r)
                        })),
                        indentSelection: Oi((function(e) {
                            for (var t = this, r = this.doc.sel.ranges, n = -1, i = 0; i < r.length; i++) {
                                var o = r[i];
                                if (o.empty()) o.head.line > n && (Rs(t, o.head.line, e, !0), n = o.head.line, i == t.doc.sel.primIndex && ni(t));
                                else {
                                    var l = o.from(),
                                        s = o.to(),
                                        a = Math.max(n, l.line);
                                    n = Math.min(t.lastLine(), s.line - (s.ch ? 0 : 1)) + 1;
                                    for (var u = a; u < n; ++u) Rs(t, u, e);
                                    var c = t.doc.sel.ranges;
                                    0 == l.ch && r.length == c.length && c[i].from().ch > 0 && Eo(t.doc, i, new no(l, c[i].to()), V)
                                }
                            }
                        })),
                        getTokenAt: function(e, t) {
                            return nr(this, e, t)
                        },
                        getLineTokens: function(e, t) {
                            return nr(this, me(e), t, !0)
                        },
                        getTokenTypeAt: function(e) {
                            e = Le(this.doc, e);
                            var t, r = Zt(this, ue(this.doc, e.line)),
                                n = 0,
                                i = (r.length - 1) / 2,
                                o = e.ch;
                            if (0 == o) t = r[2];
                            else
                                for (;;) {
                                    var l = n + i >> 1;
                                    if ((l ? r[2 * l - 1] : 0) >= o) i = l;
                                    else {
                                        if (!(r[2 * l + 1] < o)) {
                                            t = r[2 * l + 2];
                                            break
                                        }
                                        n = l + 1
                                    }
                                }
                            var s = t ? t.indexOf("overlay ") : -1;
                            return s < 0 ? t : 0 == s ? null : t.slice(0, s - 1)
                        },
                        getModeAt: function(t) {
                            var r = this.doc.mode;
                            return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r
                        },
                        getHelper: function(e, t) {
                            return this.getHelpers(e, t)[0]
                        },
                        getHelpers: function(e, t) {
                            var n = this,
                                i = [];
                            if (!r.hasOwnProperty(t)) return i;
                            var o = r[t],
                                l = this.getModeAt(e);
                            if ("string" == typeof l[t]) o[l[t]] && i.push(o[l[t]]);
                            else if (l[t])
                                for (var s = 0; s < l[t].length; s++) {
                                    var a = o[l[t][s]];
                                    a && i.push(a)
                                } else l.helperType && o[l.helperType] ? i.push(o[l.helperType]) : o[l.name] && i.push(o[l.name]);
                            for (var u = 0; u < o._global.length; u++) {
                                var c = o._global[u];
                                c.pred(l, n) && -1 == B(i, c.val) && i.push(c.val)
                            }
                            return i
                        },
                        getStateAfter: function(e, t) {
                            var r = this.doc;
                            return e = Se(r, null == e ? r.first + r.size - 1 : e), Jt(this, e + 1, t).state
                        },
                        cursorCoords: function(e, t) {
                            var r, n = this.doc.sel.primary();
                            return r = null == e ? n.head : "object" == typeof e ? Le(this.doc, e) : e ? n.from() : n.to(), bn(this, r, t || "page")
                        },
                        charCoords: function(e, t) {
                            return yn(this, Le(this.doc, e), t || "page")
                        },
                        coordsChar: function(e, t) {
                            return e = mn(this, e, t || "page"), Cn(this, e.left, e.top)
                        },
                        lineAtHeight: function(e, t) {
                            return e = mn(this, {
                                top: e,
                                left: 0
                            }, t || "page").top, pe(this.doc, e + this.display.viewOffset)
                        },
                        heightAtLine: function(e, t, r) {
                            var n, i = !1;
                            if ("number" == typeof e) {
                                var o = this.doc.first + this.doc.size - 1;
                                e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), n = ue(this.doc, e)
                            } else n = e;
                            return vn(this, n, {
                                top: 0,
                                left: 0
                            }, t || "page", r || i).top + (i ? this.doc.height - nt(n) : 0)
                        },
                        defaultTextHeight: function() {
                            return On(this.display)
                        },
                        defaultCharWidth: function() {
                            return An(this.display)
                        },
                        getViewport: function() {
                            return {
                                from: this.display.viewFrom,
                                to: this.display.viewTo
                            }
                        },
                        addWidget: function(e, t, r, n, i) {
                            var o = this.display;
                            e = bn(this, Le(this.doc, e));
                            var l = e.bottom,
                                s = e.left;
                            if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == n) l = e.top;
                            else if ("above" == n || "near" == n) {
                                var a = Math.max(o.wrapper.clientHeight, this.doc.height),
                                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth)
                            }
                            t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), r && ei(this, {
                                left: s,
                                top: l,
                                right: s + t.offsetWidth,
                                bottom: l + t.offsetHeight
                            })
                        },
                        triggerOnKeyDown: Oi(ss),
                        triggerOnKeyPress: Oi(cs),
                        triggerOnKeyUp: us,
                        triggerOnMouseDown: Oi(vs),
                        execCommand: function(e) {
                            if ($l.hasOwnProperty(e)) return $l[e].call(null, this)
                        },
                        triggerElectric: Oi((function(e) {
                            Ks(this, e)
                        })),
                        findPosH: function(e, t, r, n) {
                            var i = this,
                                o = 1;
                            t < 0 && (o = -1, t = -t);
                            for (var l = Le(this.doc, e), s = 0; s < t; ++s)
                                if (l = $s(i.doc, l, o, r, n), l.hitSide) break;
                            return l
                        },
                        moveH: Oi((function(e, t) {
                            var r = this;
                            this.extendSelectionsBy((function(n) {
                                return r.display.shift || r.doc.extend || n.empty() ? $s(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to()
                            }), j)
                        })),
                        deleteH: Oi((function(e, t) {
                            var r = this.doc.sel,
                                n = this.doc;
                            r.somethingSelected() ? n.replaceSelection("", null, "+delete") : Kl(this, (function(r) {
                                var i = $s(n, r.head, e, t, !1);
                                return e < 0 ? {
                                    from: i,
                                    to: r.head
                                } : {
                                    from: r.head,
                                    to: i
                                }
                            }))
                        })),
                        findPosV: function(e, t, r, n) {
                            var i = this,
                                o = 1,
                                l = n;
                            t < 0 && (o = -1, t = -t);
                            for (var s = Le(this.doc, e), a = 0; a < t; ++a) {
                                var u = bn(i, s, "div");
                                if (null == l ? l = u.left : u.left = l, s = qs(i, u, o, r), s.hitSide) break
                            }
                            return s
                        },
                        moveV: Oi((function(e, t) {
                            var r = this,
                                n = this.doc,
                                i = [],
                                o = !this.display.shift && !n.extend && n.sel.somethingSelected();
                            if (n.extendSelectionsBy((function(l) {
                                    if (o) return e < 0 ? l.from() : l.to();
                                    var s = bn(r, l.head, "div");
                                    null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
                                    var a = qs(r, s, e, t);
                                    return "page" == t && l == n.sel.primary() && ri(r, yn(r, a, "div").top - s.top), a
                                }), j), i.length)
                                for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l]
                        })),
                        findWordAt: function(e) {
                            var t = this.doc,
                                r = ue(t, e.line).text,
                                n = e.ch,
                                i = e.ch;
                            if (r) {
                                var o = this.getHelper(e, "wordChars");
                                "before" != e.sticky && i != r.length || !n ? ++i : --n;
                                var l = r.charAt(n),
                                    s = re(l, o) ? function(e) {
                                        return re(e, o)
                                    } : /\s/.test(l) ? function(e) {
                                        return /\s/.test(e)
                                    } : function(e) {
                                        return !/\s/.test(e) && !re(e)
                                    };
                                while (n > 0 && s(r.charAt(n - 1))) --n;
                                while (i < r.length && s(r.charAt(i))) ++i
                            }
                            return new no(me(e.line, n), me(e.line, i))
                        },
                        toggleOverwrite: function(e) {
                            null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? H(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"), gt(this, "overwriteToggle", this, this.state.overwrite))
                        },
                        hasFocus: function() {
                            return this.display.input.getField() == W()
                        },
                        isReadOnly: function() {
                            return !(!this.options.readOnly && !this.doc.cantEdit)
                        },
                        scrollTo: Oi((function(e, t) {
                            ii(this, e, t)
                        })),
                        getScrollInfo: function() {
                            var e = this.display.scroller;
                            return {
                                left: e.scrollLeft,
                                top: e.scrollTop,
                                height: e.scrollHeight - Yr(this) - this.display.barHeight,
                                width: e.scrollWidth - Yr(this) - this.display.barWidth,
                                clientHeight: $r(this),
                                clientWidth: _r(this)
                            }
                        },
                        scrollIntoView: Oi((function(e, t) {
                            null == e ? (e = {
                                from: this.doc.sel.primary().head,
                                to: null
                            }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                                from: me(e, 0),
                                to: null
                            } : null == e.from && (e = {
                                from: e,
                                to: null
                            }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? oi(this, e) : si(this, e.from, e.to, e.margin)
                        })),
                        setSize: Oi((function(e, t) {
                            var r = this,
                                n = function(e) {
                                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                                };
                            null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && hn(this);
                            var i = this.display.viewFrom;
                            this.doc.iter(i, this.display.viewTo, (function(e) {
                                if (e.widgets)
                                    for (var t = 0; t < e.widgets.length; t++)
                                        if (e.widgets[t].noHScroll) {
                                            Wi(r, i, "widget");
                                            break
                                        }++ i
                            })), this.curOp.forceUpdate = !0, gt(this, "refresh", this)
                        })),
                        operation: function(e) {
                            return Mi(this, e)
                        },
                        startOperation: function() {
                            return bi(this)
                        },
                        endOperation: function() {
                            return wi(this)
                        },
                        refresh: Oi((function() {
                            var e = this.display.cachedTextHeight;
                            Di(this), this.curOp.forceUpdate = !0, fn(this), ii(this, this.doc.scrollLeft, this.doc.scrollTop), Yi(this), (null == e || Math.abs(e - On(this.display)) > .5) && Fn(this), gt(this, "refresh", this)
                        })),
                        swapDoc: Oi((function(e) {
                            var t = this.doc;
                            return t.cm = null, mo(this, e), fn(this), this.display.input.reset(), ii(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Nr(this, "swapDoc", this, t), t
                        })),
                        phrase: function(e) {
                            var t = this.options.phrases;
                            return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e
                        },
                        getInputField: function() {
                            return this.display.input.getField()
                        },
                        getWrapperElement: function() {
                            return this.display.wrapper
                        },
                        getScrollerElement: function() {
                            return this.display.scroller
                        },
                        getGutterElement: function() {
                            return this.display.gutters
                        }
                    }, bt(e), e.registerHelper = function(t, n, i) {
                        r.hasOwnProperty(t) || (r[t] = e[t] = {
                            _global: []
                        }), r[t][n] = i
                    }, e.registerGlobalHelper = function(t, n, i, o) {
                        e.registerHelper(t, n, o), r[t]._global.push({
                            pred: i,
                            val: o
                        })
                    }
                }

                function $s(e, t, r, n, i) {
                    var o = t,
                        l = r,
                        s = ue(e, t.line);

                    function a() {
                        var n = t.line + r;
                        return !(n < e.first || n >= e.first + e.size) && (t = new me(n, t.ch, t.sticky), s = ue(e, n))
                    }

                    function u(n) {
                        var o;
                        if (o = i ? _l(e.cm, s, t, r) : Xl(s, t, r), null == o) {
                            if (n || !a()) return !1;
                            t = Yl(i, e.cm, s, t.line, r)
                        } else t = o;
                        return !0
                    }
                    if ("char" == n) u();
                    else if ("column" == n) u(!0);
                    else if ("word" == n || "group" == n)
                        for (var c = null, h = "group" == n, f = e.cm && e.cm.getHelper(t, "wordChars"), d = !0;; d = !1) {
                            if (r < 0 && !u(!d)) break;
                            var p = s.text.charAt(t.ch) || "\n",
                                g = re(p, f) ? "w" : h && "\n" == p ? "n" : !h || /\s/.test(p) ? null : "p";
                            if (!h || d || g || (g = "s"), c && c != g) {
                                r < 0 && (r = 1, u(), t.sticky = "after");
                                break
                            }
                            if (g && (c = g), r > 0 && !u(!d)) break
                        }
                    var v = Xo(e, t, o, l, !0);
                    return be(o, v) && (v.hitSide = !0), v
                }

                function qs(e, t, r, n) {
                    var i, o, l = e.doc,
                        s = t.left;
                    if ("page" == n) {
                        var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            u = Math.max(a - .5 * On(e.display), 3);
                        i = (r > 0 ? t.bottom : t.top) + r * u
                    } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
                    for (;;) {
                        if (o = Cn(e, s, i), !o.outside) break;
                        if (r < 0 ? i <= 0 : i >= l.height) {
                            o.hitSide = !0;
                            break
                        }
                        i += 5 * r
                    }
                    return o
                }
                var Zs = function(e) {
                    this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null
                };

                function Js(e, t) {
                    var r = en(e, t.line);
                    if (!r || r.hidden) return null;
                    var n = ue(e.doc, t.line),
                        i = Zr(r, n, t.line),
                        o = ct(n, e.doc.direction),
                        l = "left";
                    if (o) {
                        var s = at(o, t.ch);
                        l = s % 2 ? "right" : "left"
                    }
                    var a = ln(i.map, t.ch, l);
                    return a.offset = "right" == a.collapse ? a.end : a.start, a
                }

                function Qs(e) {
                    for (var t = e; t; t = t.parentNode)
                        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                    return !1
                }

                function ea(e, t) {
                    return t && (e.bad = !0), e
                }

                function ta(e, t, r, n, i) {
                    var o = "",
                        l = !1,
                        s = e.doc.lineSeparator(),
                        a = !1;

                    function u(e) {
                        return function(t) {
                            return t.id == e
                        }
                    }

                    function c() {
                        l && (o += s, a && (o += s), l = a = !1)
                    }

                    function h(e) {
                        e && (c(), o += e)
                    }

                    function f(t) {
                        if (1 == t.nodeType) {
                            var r = t.getAttribute("cm-text");
                            if (r) return void h(r);
                            var o, d = t.getAttribute("cm-marker");
                            if (d) {
                                var p = e.findMarks(me(n, 0), me(i + 1, 0), u(+d));
                                return void(p.length && (o = p[0].find(0)) && h(ce(e.doc, o.from, o.to).join(s)))
                            }
                            if ("false" == t.getAttribute("contenteditable")) return;
                            var g = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                            if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                            g && c();
                            for (var v = 0; v < t.childNodes.length; v++) f(t.childNodes[v]);
                            /^(pre|p)$/i.test(t.nodeName) && (a = !0), g && (l = !0)
                        } else 3 == t.nodeType && h(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                    }
                    for (;;) {
                        if (f(t), t == r) break;
                        t = t.nextSibling, a = !1
                    }
                    return o
                }

                function ra(e, t, r) {
                    var n;
                    if (t == e.display.lineDiv) {
                        if (n = e.display.lineDiv.childNodes[r], !n) return ea(e.clipPos(me(e.display.viewTo - 1)), !0);
                        t = null, r = 0
                    } else
                        for (n = t;; n = n.parentNode) {
                            if (!n || n == e.display.lineDiv) return null;
                            if (n.parentNode && n.parentNode == e.display.lineDiv) break
                        }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == n) return na(o, t, r)
                    }
                }

                function na(e, t, r) {
                    var n = e.text.firstChild,
                        i = !1;
                    if (!t || !D(n, t)) return ea(me(de(e.line), 0), !0);
                    if (t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) {
                        var o = e.rest ? $(e.rest) : e.line;
                        return ea(me(de(o), o.text.length), i)
                    }
                    var l = 3 == t.nodeType ? t : null,
                        s = t;
                    l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, r && (r = l.nodeValue.length));
                    while (s.parentNode != n) s = s.parentNode;
                    var a = e.measure,
                        u = a.maps;

                    function c(t, r, n) {
                        for (var i = -1; i < (u ? u.length : 0); i++)
                            for (var o = i < 0 ? a.map : u[i], l = 0; l < o.length; l += 3) {
                                var s = o[l + 2];
                                if (s == t || s == r) {
                                    var c = de(i < 0 ? e.line : e.rest[i]),
                                        h = o[l] + n;
                                    return (n < 0 || s != t) && (h = o[l + (n ? 1 : 0)]), me(c, h)
                                }
                            }
                    }
                    var h = c(l, s, r);
                    if (h) return ea(h, i);
                    for (var f = s.nextSibling, d = l ? l.nodeValue.length - r : 0; f; f = f.nextSibling) {
                        if (h = c(f, f.firstChild, 0), h) return ea(me(h.line, h.ch - d), i);
                        d += f.textContent.length
                    }
                    for (var p = s.previousSibling, g = r; p; p = p.previousSibling) {
                        if (h = c(p, p.firstChild, -1), h) return ea(me(h.line, h.ch + g), i);
                        g += p.textContent.length
                    }
                }
                Zs.prototype.init = function(e) {
                    var t = this,
                        r = this,
                        n = r.cm,
                        i = r.div = e.lineDiv;

                    function o(e) {
                        if (!vt(n, e)) {
                            if (n.somethingSelected()) Gs({
                                lineWise: !1,
                                text: n.getSelections()
                            }), "cut" == e.type && n.replaceSelection("", null, "cut");
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = js(n);
                                Gs({
                                    lineWise: !0,
                                    text: t.text
                                }), "cut" == e.type && n.operation((function() {
                                    n.setSelections(t.ranges, 0, V), n.replaceSelection("", null, "cut")
                                }))
                            }
                            if (e.clipboardData) {
                                e.clipboardData.clearData();
                                var o = Bs.text.join("\n");
                                if (e.clipboardData.setData("Text", o), e.clipboardData.getData("Text") == o) return void e.preventDefault()
                            }
                            var l = Ys(),
                                s = l.firstChild;
                            n.display.lineSpace.insertBefore(l, n.display.lineSpace.firstChild), s.value = Bs.text.join("\n");
                            var a = document.activeElement;
                            P(s), setTimeout((function() {
                                n.display.lineSpace.removeChild(l), a.focus(), a == i && r.showPrimarySelection()
                            }), 50)
                        }
                    }
                    Xs(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), ft(i, "paste", (function(e) {
                        vt(n, e) || Vs(e, n) || s <= 11 && setTimeout(Ni(n, (function() {
                            return t.updateFromDOM()
                        })), 20)
                    })), ft(i, "compositionstart", (function(e) {
                        t.composing = {
                            data: e.data,
                            done: !1
                        }
                    })), ft(i, "compositionupdate", (function(e) {
                        t.composing || (t.composing = {
                            data: e.data,
                            done: !1
                        })
                    })), ft(i, "compositionend", (function(e) {
                        t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0)
                    })), ft(i, "touchstart", (function() {
                        return r.forceCompositionEnd()
                    })), ft(i, "input", (function() {
                        t.composing || t.readFromDOMSoon()
                    })), ft(i, "copy", o), ft(i, "cut", o)
                }, Zs.prototype.prepareSelection = function() {
                    var e = zn(this.cm, !1);
                    return e.focus = this.cm.state.focused, e
                }, Zs.prototype.showSelection = function(e, t) {
                    e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e))
                }, Zs.prototype.getSelection = function() {
                    return this.cm.display.wrapper.ownerDocument.getSelection()
                }, Zs.prototype.showPrimarySelection = function() {
                    var e = this.getSelection(),
                        t = this.cm,
                        n = t.doc.sel.primary(),
                        i = n.from(),
                        o = n.to();
                    if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
                    else {
                        var l = ra(t, e.anchorNode, e.anchorOffset),
                            s = ra(t, e.focusNode, e.focusOffset);
                        if (!l || l.bad || !s || s.bad || 0 != ye(Ce(l, s), i) || 0 != ye(xe(l, s), o)) {
                            var a = t.display.view,
                                u = i.line >= t.display.viewFrom && Js(t, i) || {
                                    node: a[0].measure.map[2],
                                    offset: 0
                                },
                                c = o.line < t.display.viewTo && Js(t, o);
                            if (!c) {
                                var h = a[a.length - 1].measure,
                                    f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                                c = {
                                    node: f[f.length - 1],
                                    offset: f[f.length - 2] - f[f.length - 3]
                                }
                            }
                            if (u && c) {
                                var d, p = e.rangeCount && e.getRangeAt(0);
                                try {
                                    d = k(u.node, u.offset, c.offset, c.node)
                                } catch (g) {}
                                d && (!r && t.state.focused ? (e.collapse(u.node, u.offset), d.collapsed || (e.removeAllRanges(), e.addRange(d))) : (e.removeAllRanges(), e.addRange(d)), p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()), this.rememberSelection()
                            } else e.removeAllRanges()
                        }
                    }
                }, Zs.prototype.startGracePeriod = function() {
                    var e = this;
                    clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout((function() {
                        e.gracePeriod = !1, e.selectionChanged() && e.cm.operation((function() {
                            return e.cm.curOp.selectionChanged = !0
                        }))
                    }), 20)
                }, Zs.prototype.showMultipleSelections = function(e) {
                    N(this.cm.display.cursorDiv, e.cursors), N(this.cm.display.selectionDiv, e.selection)
                }, Zs.prototype.rememberSelection = function() {
                    var e = this.getSelection();
                    this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset
                }, Zs.prototype.selectionInEditor = function() {
                    var e = this.getSelection();
                    if (!e.rangeCount) return !1;
                    var t = e.getRangeAt(0).commonAncestorContainer;
                    return D(this.div, t)
                }, Zs.prototype.focus = function() {
                    "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus())
                }, Zs.prototype.blur = function() {
                    this.div.blur()
                }, Zs.prototype.getField = function() {
                    return this.div
                }, Zs.prototype.supportsTouch = function() {
                    return !0
                }, Zs.prototype.receivedFocus = function() {
                    var e = this;

                    function t() {
                        e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t))
                    }
                    this.selectionInEditor() ? this.pollSelection() : Mi(this.cm, (function() {
                        return e.cm.curOp.selectionChanged = !0
                    })), this.polling.set(this.cm.options.pollInterval, t)
                }, Zs.prototype.selectionChanged = function() {
                    var e = this.getSelection();
                    return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
                }, Zs.prototype.pollSelection = function() {
                    if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                        var e = this.getSelection(),
                            t = this.cm;
                        if (v && c && this.cm.options.gutters.length && Qs(e.anchorNode)) return this.cm.triggerOnKeyDown({
                            type: "keydown",
                            keyCode: 8,
                            preventDefault: Math.abs
                        }), this.blur(), void this.focus();
                        if (!this.composing) {
                            this.rememberSelection();
                            var r = ra(t, e.anchorNode, e.anchorOffset),
                                n = ra(t, e.focusNode, e.focusOffset);
                            r && n && Mi(t, (function() {
                                Bo(t.doc, oo(r, n), V), (r.bad || n.bad) && (t.curOp.selectionChanged = !0)
                            }))
                        }
                    }
                }, Zs.prototype.pollContent = function() {
                    null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
                    var e, t, r, n = this.cm,
                        i = n.display,
                        o = n.doc.sel.primary(),
                        l = o.from(),
                        s = o.to();
                    if (0 == l.ch && l.line > n.firstLine() && (l = me(l.line - 1, ue(n.doc, l.line - 1).length)), s.ch == ue(n.doc, s.line).text.length && s.line < n.lastLine() && (s = me(s.line + 1, 0)), l.line < i.viewFrom || s.line > i.viewTo - 1) return !1;
                    l.line == i.viewFrom || 0 == (e = En(n, l.line)) ? (t = de(i.view[0].line), r = i.view[0].node) : (t = de(i.view[e].line), r = i.view[e - 1].node.nextSibling);
                    var a, u, c = En(n, s.line);
                    if (c == i.view.length - 1 ? (a = i.viewTo - 1, u = i.lineDiv.lastChild) : (a = de(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !r) return !1;
                    var h = n.doc.splitLines(ta(n, r, u, t, a)),
                        f = ce(n.doc, me(t, 0), me(a, ue(n.doc, a).text.length));
                    while (h.length > 1 && f.length > 1)
                        if ($(h) == $(f)) h.pop(), f.pop(), a--;
                        else {
                            if (h[0] != f[0]) break;
                            h.shift(), f.shift(), t++
                        } var d = 0,
                        p = 0,
                        g = h[0],
                        v = f[0],
                        m = Math.min(g.length, v.length);
                    while (d < m && g.charCodeAt(d) == v.charCodeAt(d)) ++d;
                    var y = $(h),
                        b = $(f),
                        w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0));
                    while (p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) ++p;
                    if (1 == h.length && 1 == f.length && t == l.line)
                        while (d && d > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) d--, p++;
                    h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");
                    var x = me(t, d),
                        C = me(a, f.length ? $(f).length - p : 0);
                    return h.length > 1 || h[0] || ye(x, C) ? (rl(n.doc, h, x, C, "+input"), !0) : void 0
                }, Zs.prototype.ensurePolled = function() {
                    this.forceCompositionEnd()
                }, Zs.prototype.reset = function() {
                    this.forceCompositionEnd()
                }, Zs.prototype.forceCompositionEnd = function() {
                    this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus())
                }, Zs.prototype.readFromDOMSoon = function() {
                    var e = this;
                    null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() {
                        if (e.readDOMTimeout = null, e.composing) {
                            if (!e.composing.done) return;
                            e.composing = null
                        }
                        e.updateFromDOM()
                    }), 80))
                }, Zs.prototype.updateFromDOM = function() {
                    var e = this;
                    !this.cm.isReadOnly() && this.pollContent() || Mi(this.cm, (function() {
                        return Di(e.cm)
                    }))
                }, Zs.prototype.setUneditable = function(e) {
                    e.contentEditable = "false"
                }, Zs.prototype.onKeyPress = function(e) {
                    0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Ni(this.cm, Us)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
                }, Zs.prototype.readOnlyChanged = function(e) {
                    this.div.contentEditable = String("nocursor" != e)
                }, Zs.prototype.onContextMenu = function() {}, Zs.prototype.resetPosition = function() {}, Zs.prototype.needsContentAttribute = !0;
                var ia = function(e) {
                    this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new R, this.hasSelection = !1, this.composing = null
                };

                function oa(e, t) {
                    if (t = t ? I(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
                        var r = W();
                        t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
                    }

                    function n() {
                        e.value = s.getValue()
                    }
                    var i;
                    if (e.form && (ft(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
                        var o = e.form;
                        i = o.submit;
                        try {
                            var l = o.submit = function() {
                                n(), o.submit = i, o.submit(), o.submit = l
                            }
                        } catch (a) {}
                    }
                    t.finishInit = function(t) {
                        t.save = n, t.getTextArea = function() {
                            return e
                        }, t.toTextArea = function() {
                            t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (pt(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i))
                        }
                    }, e.style.display = "none";
                    var s = Es((function(t) {
                        return e.parentNode.insertBefore(t, e.nextSibling)
                    }), t);
                    return s
                }

                function la(e) {
                    e.off = pt, e.on = ft, e.wheelEventPixels = eo, e.Doc = xl, e.splitLines = Dt, e.countColumn = z, e.findColumn = X, e.isWordChar = te, e.Pass = U, e.signal = gt, e.Line = ar, e.changeEnd = lo, e.scrollbarModel = vi, e.Pos = me, e.cmpPos = ye, e.modes = Et, e.mimeModes = It, e.resolveMode = Bt, e.getMode = Gt, e.modeExtensions = Ut, e.extendMode = Vt, e.copyState = Kt, e.startState = Xt, e.innerMode = jt, e.commands = $l, e.keyMap = El, e.keyName = Ul, e.isModifierKey = Bl, e.lookupKey = Rl, e.normalizeKeyMap = zl, e.StringStream = Yt, e.SharedTextMarker = gl, e.TextMarker = dl, e.LineWidget = ul, e.e_preventDefault = wt, e.e_stopPropagation = xt, e.e_stop = St, e.addClass = H, e.contains = D, e.rmClass = T, e.keyNames = Wl
                }
                ia.prototype.init = function(e) {
                    var t = this,
                        r = this,
                        n = this.cm;
                    this.createField(e);
                    var i = this.textarea;

                    function o(e) {
                        if (!vt(n, e)) {
                            if (n.somethingSelected()) Gs({
                                lineWise: !1,
                                text: n.getSelections()
                            });
                            else {
                                if (!n.options.lineWiseCopyCut) return;
                                var t = js(n);
                                Gs({
                                    lineWise: !0,
                                    text: t.text
                                }), "cut" == e.type ? n.setSelections(t.ranges, null, V) : (r.prevInput = "", i.value = t.text.join("\n"), P(i))
                            }
                            "cut" == e.type && (n.state.cutIncoming = +new Date)
                        }
                    }
                    e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), g && (i.style.width = "0px"), ft(i, "input", (function() {
                        l && s >= 9 && t.hasSelection && (t.hasSelection = null), r.poll()
                    })), ft(i, "paste", (function(e) {
                        vt(n, e) || Vs(e, n) || (n.state.pasteIncoming = +new Date, r.fastPoll())
                    })), ft(i, "cut", o), ft(i, "copy", o), ft(e.scroller, "paste", (function(t) {
                        if (!Vr(e, t) && !vt(n, t)) {
                            if (!i.dispatchEvent) return n.state.pasteIncoming = +new Date, void r.focus();
                            var o = new Event("paste");
                            o.clipboardData = t.clipboardData, i.dispatchEvent(o)
                        }
                    })), ft(e.lineSpace, "selectstart", (function(t) {
                        Vr(e, t) || wt(t)
                    })), ft(i, "compositionstart", (function() {
                        var e = n.getCursor("from");
                        r.composing && r.composing.range.clear(), r.composing = {
                            start: e,
                            range: n.markText(e, n.getCursor("to"), {
                                className: "CodeMirror-composing"
                            })
                        }
                    })), ft(i, "compositionend", (function() {
                        r.composing && (r.poll(), r.composing.range.clear(), r.composing = null)
                    }))
                }, ia.prototype.createField = function(e) {
                    this.wrapper = Ys(), this.textarea = this.wrapper.firstChild
                }, ia.prototype.prepareSelection = function() {
                    var e = this.cm,
                        t = e.display,
                        r = e.doc,
                        n = zn(e);
                    if (e.options.moveInputWithCursor) {
                        var i = bn(e, r.sel.primary().head, "div"),
                            o = t.wrapper.getBoundingClientRect(),
                            l = t.lineDiv.getBoundingClientRect();
                        n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left))
                    }
                    return n
                }, ia.prototype.showSelection = function(e) {
                    var t = this.cm,
                        r = t.display;
                    N(r.cursorDiv, e.cursors), N(r.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px")
                }, ia.prototype.reset = function(e) {
                    if (!this.contextMenuPending && !this.composing) {
                        var t = this.cm;
                        if (t.somethingSelected()) {
                            this.prevInput = "";
                            var r = t.getSelection();
                            this.textarea.value = r, t.state.focused && P(this.textarea), l && s >= 9 && (this.hasSelection = r)
                        } else e || (this.prevInput = this.textarea.value = "", l && s >= 9 && (this.hasSelection = null))
                    }
                }, ia.prototype.getField = function() {
                    return this.textarea
                }, ia.prototype.supportsTouch = function() {
                    return !1
                }, ia.prototype.focus = function() {
                    if ("nocursor" != this.cm.options.readOnly && (!m || W() != this.textarea)) try {
                        this.textarea.focus()
                    } catch (e) {}
                }, ia.prototype.blur = function() {
                    this.textarea.blur()
                }, ia.prototype.resetPosition = function() {
                    this.wrapper.style.top = this.wrapper.style.left = 0
                }, ia.prototype.receivedFocus = function() {
                    this.slowPoll()
                }, ia.prototype.slowPoll = function() {
                    var e = this;
                    this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() {
                        e.poll(), e.cm.state.focused && e.slowPoll()
                    }))
                }, ia.prototype.fastPoll = function() {
                    var e = !1,
                        t = this;

                    function r() {
                        var n = t.poll();
                        n || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, r))
                    }
                    t.pollingFast = !0, t.polling.set(20, r)
                }, ia.prototype.poll = function() {
                    var e = this,
                        t = this.cm,
                        r = this.textarea,
                        n = this.prevInput;
                    if (this.contextMenuPending || !t.state.focused || Wt(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                    var i = r.value;
                    if (i == n && !t.somethingSelected()) return !1;
                    if (l && s >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;
                    if (t.doc.sel == t.display.selForContextMenu) {
                        var o = i.charCodeAt(0);
                        if (8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo")
                    }
                    var a = 0,
                        u = Math.min(n.length, i.length);
                    while (a < u && n.charCodeAt(a) == i.charCodeAt(a)) ++a;
                    return Mi(t, (function() {
                        Us(t, i.slice(a), n.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                            className: "CodeMirror-composing"
                        }))
                    })), !0
                }, ia.prototype.ensurePolled = function() {
                    this.pollingFast && this.poll() && (this.pollingFast = !1)
                }, ia.prototype.onKeyPress = function() {
                    l && s >= 9 && (this.hasSelection = null), this.fastPoll()
                }, ia.prototype.onContextMenu = function(e) {
                    var t = this,
                        r = t.cm,
                        n = r.display,
                        i = t.textarea;
                    t.contextMenuPending && t.contextMenuPending();
                    var o = Pn(r, e),
                        u = n.scroller.scrollTop;
                    if (o && !h) {
                        var c = r.options.resetSelectionOnContextMenu;
                        c && -1 == r.doc.sel.contains(o) && Ni(r, Bo)(r.doc, oo(o), V);
                        var f, d = i.style.cssText,
                            p = t.wrapper.style.cssText,
                            g = t.wrapper.offsetParent.getBoundingClientRect();
                        if (t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - g.top - 5) + "px; left: " + (e.clientX - g.left - 5) + "px;\n      z-index: 1000; background: " + (l ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", a && (f = window.scrollY), n.input.focus(), a && window.scrollTo(null, f), n.input.reset(), r.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = y, n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), l && s >= 9 && m(), S) {
                            St(e);
                            var v = function() {
                                pt(window, "mouseup", v), setTimeout(y, 20)
                            };
                            ft(window, "mouseup", v)
                        } else setTimeout(y, 50)
                    }

                    function m() {
                        if (null != i.selectionStart) {
                            var e = r.somethingSelected(),
                                o = "​" + (e ? i.value : "");
                            i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel
                        }
                    }

                    function y() {
                        if (t.contextMenuPending == y && (t.contextMenuPending = !1, t.wrapper.style.cssText = p, i.style.cssText = d, l && s < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = u), null != i.selectionStart)) {
                            (!l || l && s < 9) && m();
                            var e = 0,
                                o = function() {
                                    n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Ni(r, _o)(r) : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500) : (n.selForContextMenu = null, n.input.reset())
                                };
                            n.detectingSelectAll = setTimeout(o, 200)
                        }
                    }
                }, ia.prototype.readOnlyChanged = function(e) {
                    e || this.reset(), this.textarea.disabled = "nocursor" == e
                }, ia.prototype.setUneditable = function() {}, ia.prototype.needsContentAttribute = !1, Ws(Es), _s(Es);
                var sa = "iter insert remove copy getEditor constructor".split(" ");
                for (var aa in xl.prototype) xl.prototype.hasOwnProperty(aa) && B(sa, aa) < 0 && (Es.prototype[aa] = function(e) {
                    return function() {
                        return e.apply(this.doc, arguments)
                    }
                }(xl.prototype[aa]));
                return bt(xl), Es.inputStyles = {
                    textarea: ia,
                    contenteditable: Zs
                }, Es.defineMode = function(e) {
                    Es.defaults.mode || "null" == e || (Es.defaults.mode = e), zt.apply(this, arguments)
                }, Es.defineMIME = Rt, Es.defineMode("null", (function() {
                    return {
                        token: function(e) {
                            return e.skipToEnd()
                        }
                    }
                })), Es.defineMIME("text/plain", "null"), Es.defineExtension = function(e, t) {
                    Es.prototype[e] = t
                }, Es.defineDocExtension = function(e, t) {
                    xl.prototype[e] = t
                }, Es.fromTextArea = oa, la(Es), Es.version = "5.45.0", Es
            }))
        },
        a7be: function(e, t, r) {}
    }
]);