(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[717], {
		40800: function(e, t, r) {
			let n = r(67294),
				i = n.forwardRef(function({
					title: e,
					titleId: t,
					...r
				}, i) {
					return n.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: i,
						"aria-labelledby": t
					}, r), e ? n.createElement("title", {
						id: t
					}, e) : null, n.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M18 12H6"
					}))
				});
			e.exports = i
		},
		67798: function(e, t, r) {
			let n = r(67294),
				i = n.forwardRef(function({
					title: e,
					titleId: t,
					...r
				}, i) {
					return n.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: i,
						"aria-labelledby": t
					}, r), e ? n.createElement("title", {
						id: t
					}, e) : null, n.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M12 6v12m6-6H6"
					}))
				});
			e.exports = i
		},
		8679: function(e, t, r) {
			"use strict";
			var n = r(59864),
				i = {
					childContextTypes: !0,
					contextType: !0,
					contextTypes: !0,
					defaultProps: !0,
					displayName: !0,
					getDefaultProps: !0,
					getDerivedStateFromError: !0,
					getDerivedStateFromProps: !0,
					mixins: !0,
					propTypes: !0,
					type: !0
				},
				o = {
					name: !0,
					length: !0,
					prototype: !0,
					caller: !0,
					callee: !0,
					arguments: !0,
					arity: !0
				},
				a = {
					$$typeof: !0,
					compare: !0,
					defaultProps: !0,
					displayName: !0,
					propTypes: !0,
					type: !0
				},
				s = {};

			function u(e) {
				return n.isMemo(e) ? a : s[e.$$typeof] || i
			}
			s[n.ForwardRef] = {
				$$typeof: !0,
				render: !0,
				defaultProps: !0,
				displayName: !0,
				propTypes: !0
			}, s[n.Memo] = a;
			var c = Object.defineProperty,
				l = Object.getOwnPropertyNames,
				d = Object.getOwnPropertySymbols,
				f = Object.getOwnPropertyDescriptor,
				p = Object.getPrototypeOf,
				h = Object.prototype;
			e.exports = function e(t, r, n) {
				if ("string" != typeof r) {
					if (h) {
						var i = p(r);
						i && i !== h && e(t, i, n)
					}
					var a = l(r);
					d && (a = a.concat(d(r)));
					for (var s = u(t), y = u(r), m = 0; m < a.length; ++m) {
						var g = a[m];
						if (!o[g] && !(n && n[g]) && !(y && y[g]) && !(s && s[g])) {
							var v = f(r, g);
							try {
								c(t, g, v)
							} catch (e) {}
						}
					}
				}
				return t
			}
		},
		67266: function(e, t, r) {
			"use strict";
			var n = "undefined" != typeof JSON ? JSON : r(58418),
				i = Array.isArray || function(e) {
					return "[object Array]" === ({}).toString.call(e)
				},
				o = Object.keys || function(e) {
					var t = Object.prototype.hasOwnProperty || function() {
							return !0
						},
						r = [];
					for (var n in e) t.call(e, n) && r.push(n);
					return r
				};
			e.exports = function(e, t) {
				t || (t = {}), "function" == typeof t && (t = {
					cmp: t
				});
				var r, a = t.space || "";
				"number" == typeof a && (a = Array(a + 1).join(" "));
				var s = "boolean" == typeof t.cycles && t.cycles,
					u = t.replacer || function(e, t) {
						return t
					},
					c = t.cmp && (r = t.cmp, function(e) {
						return function(t, n) {
							return r({
								key: t,
								value: e[t]
							}, {
								key: n,
								value: e[n]
							})
						}
					}),
					l = [];
				return function e(t, r, d, f) {
					var p = a ? "\n" + Array(f + 1).join(a) : "",
						h = a ? ": " : ":";
					if (d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = u.call(t, r, d))) {
						if ("object" != typeof d || null === d) return n.stringify(d);
						if (i(d)) {
							for (var y = [], m = 0; m < d.length; m++) {
								var g = e(d, m, d[m], f + 1) || n.stringify(null);
								y.push(p + a + g)
							}
							return "[" + y.join(",") + p + "]"
						}
						if (-1 !== l.indexOf(d)) {
							if (s) return n.stringify("__cycle__");
							throw TypeError("Converting circular structure to JSON")
						}
						l.push(d);
						for (var v = o(d).sort(c && c(d)), y = [], m = 0; m < v.length; m++) {
							var r = v[m],
								w = e(d, r, d[r], f + 1);
							if (w) {
								var b = n.stringify(r) + h + w;
								y.push(p + a + b)
							}
						}
						return l.splice(l.indexOf(d), 1), "{" + y.join(",") + p + "}"
					}
				}({
					"": e
				}, "", e, 0)
			}
		},
		58418: function(e, t, r) {
			"use strict";
			t.parse = r(51396), t.stringify = r(66177)
		},
		51396: function(e) {
			"use strict";
			var t, r, n, i = {
				'"': '"',
				"\\": "\\",
				"/": "/",
				b: "\b",
				f: "\f",
				n: "\n",
				r: "\r",
				t: "	"
			};

			function o(e) {
				throw {
					name: "SyntaxError",
					message: e,
					at: t,
					text: n
				}
			}

			function a(e) {
				return e && e !== r && o("Expected '" + e + "' instead of '" + r + "'"), r = n.charAt(t), t += 1, r
			}

			function s() {
				var e, t = "";
				for ("-" === r && (t = "-", a("-")); r >= "0" && r <= "9";) t += r, a();
				if ("." === r)
					for (t += "."; a() && r >= "0" && r <= "9";) t += r;
				if ("e" === r || "E" === r)
					for (t += r, a(), ("-" === r || "+" === r) && (t += r, a()); r >= "0" && r <= "9";) t += r, a();
				return isFinite(e = Number(t)) || o("Bad number"), e
			}

			function u() {
				var e, t, n, s = "";
				if ('"' === r)
					for (; a();) {
						if ('"' === r) return a(), s;
						if ("\\" === r) {
							if (a(), "u" === r) {
								for (t = 0, n = 0; t < 4 && isFinite(e = parseInt(a(), 16)); t += 1) n = 16 * n + e;
								s += String.fromCharCode(n)
							} else if ("string" == typeof i[r]) s += i[r];
							else break
						} else s += r
					}
				o("Bad string")
			}

			function c() {
				for (; r && r <= " ";) a()
			}

			function l() {
				switch (c(), r) {
					case "{":
						return function() {
							var e, t = {};
							if ("{" === r) {
								if (a("{"), c(), "}" === r) return a("}"), t;
								for (; r;) {
									if (e = u(), c(), a(":"), Object.prototype.hasOwnProperty.call(t, e) && o('Duplicate key "' + e + '"'), t[e] = l(), c(), "}" === r) return a("}"), t;
									a(","), c()
								}
							}
							o("Bad object")
						}();
					case "[":
						return function() {
							var e = [];
							if ("[" === r) {
								if (a("["), c(), "]" === r) return a("]"), e;
								for (; r;) {
									if (e.push(l()), c(), "]" === r) return a("]"), e;
									a(","), c()
								}
							}
							o("Bad array")
						}();
					case '"':
						return u();
					case "-":
						return s();
					default:
						return r >= "0" && r <= "9" ? s() : function() {
							switch (r) {
								case "t":
									return a("t"), a("r"), a("u"), a("e"), !0;
								case "f":
									return a("f"), a("a"), a("l"), a("s"), a("e"), !1;
								case "n":
									return a("n"), a("u"), a("l"), a("l"), null;
								default:
									o("Unexpected '" + r + "'")
							}
						}()
				}
			}
			e.exports = function(e, i) {
				var a;
				return n = e, t = 0, r = " ", a = l(), c(), r && o("Syntax error"), "function" == typeof i ? function e(t, r) {
					var n, o, a = t[r];
					if (a && "object" == typeof a)
						for (n in l) Object.prototype.hasOwnProperty.call(a, n) && (void 0 === (o = e(a, n)) ? delete a[n] : a[n] = o);
					return i.call(t, r, a)
				}({
					"": a
				}, "") : a
			}
		},
		66177: function(e) {
			"use strict";
			var t, r, n = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
				i = {
					"\b": "\\b",
					"	": "\\t",
					"\n": "\\n",
					"\f": "\\f",
					"\r": "\\r",
					'"': '\\"',
					"\\": "\\\\"
				};

			function o(e) {
				return n.lastIndex = 0, n.test(e) ? '"' + e.replace(n, function(e) {
					var t = i[e];
					return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
				}) + '"' : '"' + e + '"'
			}
			e.exports = function(e, n, i) {
				var a;
				if (t = "", r = "", "number" == typeof i)
					for (a = 0; a < i; a += 1) r += " ";
				else "string" == typeof i && (r = i);
				if (n && "function" != typeof n && ("object" != typeof n || "number" != typeof n.length)) throw Error("JSON.stringify");
				return function e(i, a) {
					var s, u, c, l, d, f = t,
						p = a[i];
					switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(i)), "function" == typeof n && (p = n.call(a, i, p)), typeof p) {
						case "string":
							return o(p);
						case "number":
							return isFinite(p) ? String(p) : "null";
						case "boolean":
						case "null":
							return String(p);
						case "object":
							if (!p) return "null";
							if (t += r, d = [], "[object Array]" === Object.prototype.toString.apply(p)) {
								for (s = 0, l = p.length; s < l; s += 1) d[s] = e(s, p) || "null";
								return c = 0 === d.length ? "[]" : t ? "[\n" + t + d.join(",\n" + t) + "\n" + f + "]" : "[" + d.join(",") + "]", t = f, c
							}
							if (n && "object" == typeof n)
								for (s = 0, l = n.length; s < l; s += 1) "string" == typeof(u = n[s]) && (c = e(u, p)) && d.push(o(u) + (t ? ": " : ":") + c);
							else
								for (u in p) Object.prototype.hasOwnProperty.call(p, u) && (c = e(u, p)) && d.push(o(u) + (t ? ": " : ":") + c);
							return c = 0 === d.length ? "{}" : t ? "{\n" + t + d.join(",\n" + t) + "\n" + f + "}" : "{" + d.join(",") + "}", t = f, c
					}
				}("", {
					"": e
				})
			}
		},
		18552: function(e, t, r) {
			var n = r(10852)(r(55639), "DataView");
			e.exports = n
		},
		1989: function(e, t, r) {
			var n = r(51789),
				i = r(80401),
				o = r(57667),
				a = r(21327),
				s = r(81866);

			function u(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, u.prototype.set = s, e.exports = u
		},
		38407: function(e, t, r) {
			var n = r(27040),
				i = r(14125),
				o = r(82117),
				a = r(67518),
				s = r(54705);

			function u(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, u.prototype.set = s, e.exports = u
		},
		57071: function(e, t, r) {
			var n = r(10852)(r(55639), "Map");
			e.exports = n
		},
		83369: function(e, t, r) {
			var n = r(24785),
				i = r(11285),
				o = r(96e3),
				a = r(49916),
				s = r(95265);

			function u(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.clear(); ++t < r;) {
					var n = e[t];
					this.set(n[0], n[1])
				}
			}
			u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = a, u.prototype.set = s, e.exports = u
		},
		53818: function(e, t, r) {
			var n = r(10852)(r(55639), "Promise");
			e.exports = n
		},
		58525: function(e, t, r) {
			var n = r(10852)(r(55639), "Set");
			e.exports = n
		},
		88668: function(e, t, r) {
			var n = r(83369),
				i = r(90619),
				o = r(72385);

			function a(e) {
				var t = -1,
					r = null == e ? 0 : e.length;
				for (this.__data__ = new n; ++t < r;) this.add(e[t])
			}
			a.prototype.add = a.prototype.push = i, a.prototype.has = o, e.exports = a
		},
		46384: function(e, t, r) {
			var n = r(38407),
				i = r(37465),
				o = r(63779),
				a = r(67599),
				s = r(44758),
				u = r(34309);

			function c(e) {
				var t = this.__data__ = new n(e);
				this.size = t.size
			}
			c.prototype.clear = i, c.prototype.delete = o, c.prototype.get = a, c.prototype.has = s, c.prototype.set = u, e.exports = c
		},
		62705: function(e, t, r) {
			var n = r(55639).Symbol;
			e.exports = n
		},
		11149: function(e, t, r) {
			var n = r(55639).Uint8Array;
			e.exports = n
		},
		70577: function(e, t, r) {
			var n = r(10852)(r(55639), "WeakMap");
			e.exports = n
		},
		34963: function(e) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
					var a = e[r];
					t(a, r, e) && (o[i++] = a)
				}
				return o
			}
		},
		14636: function(e, t, r) {
			var n = r(22545),
				i = r(35694),
				o = r(1469),
				a = r(44144),
				s = r(65776),
				u = r(36719),
				c = Object.prototype.hasOwnProperty;
			e.exports = function(e, t) {
				var r = o(e),
					l = !r && i(e),
					d = !r && !l && a(e),
					f = !r && !l && !d && u(e),
					p = r || l || d || f,
					h = p ? n(e.length, String) : [],
					y = h.length;
				for (var m in e)(t || c.call(e, m)) && !(p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, y))) && h.push(m);
				return h
			}
		},
		29932: function(e) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
				return i
			}
		},
		62488: function(e) {
			e.exports = function(e, t) {
				for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
				return e
			}
		},
		82908: function(e) {
			e.exports = function(e, t) {
				for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
					if (t(e[r], r, e)) return !0;
				return !1
			}
		},
		18470: function(e, t, r) {
			var n = r(77813);
			e.exports = function(e, t) {
				for (var r = e.length; r--;)
					if (n(e[r][0], t)) return r;
				return -1
			}
		},
		68866: function(e, t, r) {
			var n = r(62488),
				i = r(1469);
			e.exports = function(e, t, r) {
				var o = t(e);
				return i(e) ? o : n(o, r(e))
			}
		},
		44239: function(e, t, r) {
			var n = r(62705),
				i = r(89607),
				o = r(2333),
				a = n ? n.toStringTag : void 0;
			e.exports = function(e) {
				return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? i(e) : o(e)
			}
		},
		9454: function(e, t, r) {
			var n = r(44239),
				i = r(37005);
			e.exports = function(e) {
				return i(e) && "[object Arguments]" == n(e)
			}
		},
		90939: function(e, t, r) {
			var n = r(2492),
				i = r(37005);
			e.exports = function e(t, r, o, a, s) {
				return t === r || (null != t && null != r && (i(t) || i(r)) ? n(t, r, o, a, e, s) : t != t && r != r)
			}
		},
		2492: function(e, t, r) {
			var n = r(46384),
				i = r(67114),
				o = r(18351),
				a = r(16096),
				s = r(64160),
				u = r(1469),
				c = r(44144),
				l = r(36719),
				d = "[object Arguments]",
				f = "[object Array]",
				p = "[object Object]",
				h = Object.prototype.hasOwnProperty;
			e.exports = function(e, t, r, y, m, g) {
				var v = u(e),
					w = u(t),
					b = v ? f : s(e),
					E = w ? f : s(t);
				b = b == d ? p : b, E = E == d ? p : E;
				var S = b == p,
					A = E == p,
					x = b == E;
				if (x && c(e)) {
					if (!c(t)) return !1;
					v = !0, S = !1
				}
				if (x && !S) return g || (g = new n), v || l(e) ? i(e, t, r, y, m, g) : o(e, t, b, r, y, m, g);
				if (!(1 & r)) {
					var P = S && h.call(e, "__wrapped__"),
						k = A && h.call(t, "__wrapped__");
					if (P || k) {
						var _ = P ? e.value() : e,
							C = k ? t.value() : t;
						return g || (g = new n), m(_, C, r, y, g)
					}
				}
				return !!x && (g || (g = new n), a(e, t, r, y, m, g))
			}
		},
		28458: function(e, t, r) {
			var n = r(23560),
				i = r(15346),
				o = r(13218),
				a = r(80346),
				s = /^\[object .+?Constructor\]$/,
				u = Object.prototype,
				c = Function.prototype.toString,
				l = u.hasOwnProperty,
				d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
			e.exports = function(e) {
				return !(!o(e) || i(e)) && (n(e) ? d : s).test(a(e))
			}
		},
		38749: function(e, t, r) {
			var n = r(44239),
				i = r(41780),
				o = r(37005),
				a = {};
			a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
				return o(e) && i(e.length) && !!a[n(e)]
			}
		},
		280: function(e, t, r) {
			var n = r(25726),
				i = r(86916),
				o = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				if (!n(e)) return i(e);
				var t = [];
				for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
				return t
			}
		},
		40098: function(e) {
			var t = Math.ceil,
				r = Math.max;
			e.exports = function(e, n, i, o) {
				for (var a = -1, s = r(t((n - e) / (i || 1)), 0), u = Array(s); s--;) u[o ? s : ++a] = e, e += i;
				return u
			}
		},
		22545: function(e) {
			e.exports = function(e, t) {
				for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
				return n
			}
		},
		80531: function(e, t, r) {
			var n = r(62705),
				i = r(29932),
				o = r(1469),
				a = r(33448),
				s = 1 / 0,
				u = n ? n.prototype : void 0,
				c = u ? u.toString : void 0;
			e.exports = function e(t) {
				if ("string" == typeof t) return t;
				if (o(t)) return i(t, e) + "";
				if (a(t)) return c ? c.call(t) : "";
				var r = t + "";
				return "0" == r && 1 / t == -s ? "-0" : r
			}
		},
		27561: function(e, t, r) {
			var n = r(67990),
				i = /^\s+/;
			e.exports = function(e) {
				return e ? e.slice(0, n(e) + 1).replace(i, "") : e
			}
		},
		7518: function(e) {
			e.exports = function(e) {
				return function(t) {
					return e(t)
				}
			}
		},
		74757: function(e) {
			e.exports = function(e, t) {
				return e.has(t)
			}
		},
		14429: function(e, t, r) {
			var n = r(55639)["__core-js_shared__"];
			e.exports = n
		},
		47445: function(e, t, r) {
			var n = r(40098),
				i = r(16612),
				o = r(18601);
			e.exports = function(e) {
				return function(t, r, a) {
					return a && "number" != typeof a && i(t, r, a) && (r = a = void 0), t = o(t), void 0 === r ? (r = t, t = 0) : r = o(r), a = void 0 === a ? t < r ? 1 : -1 : o(a), n(t, r, a, e)
				}
			}
		},
		89179: function(e, t, r) {
			var n = r(55639),
				i = r(40554),
				o = r(14841),
				a = r(79833),
				s = n.isFinite,
				u = Math.min;
			e.exports = function(e) {
				var t = Math[e];
				return function(e, r) {
					if (e = o(e), (r = null == r ? 0 : u(i(r), 292)) && s(e)) {
						var n = (a(e) + "e").split("e");
						return +((n = (a(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
					}
					return t(e)
				}
			}
		},
		67114: function(e, t, r) {
			var n = r(88668),
				i = r(82908),
				o = r(74757);
			e.exports = function(e, t, r, a, s, u) {
				var c = 1 & r,
					l = e.length,
					d = t.length;
				if (l != d && !(c && d > l)) return !1;
				var f = u.get(e),
					p = u.get(t);
				if (f && p) return f == t && p == e;
				var h = -1,
					y = !0,
					m = 2 & r ? new n : void 0;
				for (u.set(e, t), u.set(t, e); ++h < l;) {
					var g = e[h],
						v = t[h];
					if (a) var w = c ? a(v, g, h, t, e, u) : a(g, v, h, e, t, u);
					if (void 0 !== w) {
						if (w) continue;
						y = !1;
						break
					}
					if (m) {
						if (!i(t, function(e, t) {
								if (!o(m, t) && (g === e || s(g, e, r, a, u))) return m.push(t)
							})) {
							y = !1;
							break
						}
					} else if (!(g === v || s(g, v, r, a, u))) {
						y = !1;
						break
					}
				}
				return u.delete(e), u.delete(t), y
			}
		},
		18351: function(e, t, r) {
			var n = r(62705),
				i = r(11149),
				o = r(77813),
				a = r(67114),
				s = r(68776),
				u = r(21814),
				c = n ? n.prototype : void 0,
				l = c ? c.valueOf : void 0;
			e.exports = function(e, t, r, n, c, d, f) {
				switch (r) {
					case "[object DataView]":
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
						e = e.buffer, t = t.buffer;
					case "[object ArrayBuffer]":
						if (e.byteLength != t.byteLength || !d(new i(e), new i(t))) break;
						return !0;
					case "[object Boolean]":
					case "[object Date]":
					case "[object Number]":
						return o(+e, +t);
					case "[object Error]":
						return e.name == t.name && e.message == t.message;
					case "[object RegExp]":
					case "[object String]":
						return e == t + "";
					case "[object Map]":
						var p = s;
					case "[object Set]":
						var h = 1 & n;
						if (p || (p = u), e.size != t.size && !h) break;
						var y = f.get(e);
						if (y) return y == t;
						n |= 2, f.set(e, t);
						var m = a(p(e), p(t), n, c, d, f);
						return f.delete(e), m;
					case "[object Symbol]":
						if (l) return l.call(e) == l.call(t)
				}
				return !1
			}
		},
		16096: function(e, t, r) {
			var n = r(58234),
				i = Object.prototype.hasOwnProperty;
			e.exports = function(e, t, r, o, a, s) {
				var u = 1 & r,
					c = n(e),
					l = c.length;
				if (l != n(t).length && !u) return !1;
				for (var d = l; d--;) {
					var f = c[d];
					if (!(u ? f in t : i.call(t, f))) return !1
				}
				var p = s.get(e),
					h = s.get(t);
				if (p && h) return p == t && h == e;
				var y = !0;
				s.set(e, t), s.set(t, e);
				for (var m = u; ++d < l;) {
					var g = e[f = c[d]],
						v = t[f];
					if (o) var w = u ? o(v, g, f, t, e, s) : o(g, v, f, e, t, s);
					if (!(void 0 === w ? g === v || a(g, v, r, o, s) : w)) {
						y = !1;
						break
					}
					m || (m = "constructor" == f)
				}
				if (y && !m) {
					var b = e.constructor,
						E = t.constructor;
					b != E && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (y = !1)
				}
				return s.delete(e), s.delete(t), y
			}
		},
		31957: function(e, t, r) {
			var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
			e.exports = n
		},
		58234: function(e, t, r) {
			var n = r(68866),
				i = r(99551),
				o = r(3674);
			e.exports = function(e) {
				return n(e, o, i)
			}
		},
		45050: function(e, t, r) {
			var n = r(37019);
			e.exports = function(e, t) {
				var r = e.__data__;
				return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
			}
		},
		10852: function(e, t, r) {
			var n = r(28458),
				i = r(47801);
			e.exports = function(e, t) {
				var r = i(e, t);
				return n(r) ? r : void 0
			}
		},
		89607: function(e, t, r) {
			var n = r(62705),
				i = Object.prototype,
				o = i.hasOwnProperty,
				a = i.toString,
				s = n ? n.toStringTag : void 0;
			e.exports = function(e) {
				var t = o.call(e, s),
					r = e[s];
				try {
					e[s] = void 0;
					var n = !0
				} catch (e) {}
				var i = a.call(e);
				return n && (t ? e[s] = r : delete e[s]), i
			}
		},
		99551: function(e, t, r) {
			var n = r(34963),
				i = r(70479),
				o = Object.prototype.propertyIsEnumerable,
				a = Object.getOwnPropertySymbols,
				s = a ? function(e) {
					return null == e ? [] : n(a(e = Object(e)), function(t) {
						return o.call(e, t)
					})
				} : i;
			e.exports = s
		},
		64160: function(e, t, r) {
			var n = r(18552),
				i = r(57071),
				o = r(53818),
				a = r(58525),
				s = r(70577),
				u = r(44239),
				c = r(80346),
				l = "[object Map]",
				d = "[object Promise]",
				f = "[object Set]",
				p = "[object WeakMap]",
				h = "[object DataView]",
				y = c(n),
				m = c(i),
				g = c(o),
				v = c(a),
				w = c(s),
				b = u;
			(n && b(new n(new ArrayBuffer(1))) != h || i && b(new i) != l || o && b(o.resolve()) != d || a && b(new a) != f || s && b(new s) != p) && (b = function(e) {
				var t = u(e),
					r = "[object Object]" == t ? e.constructor : void 0,
					n = r ? c(r) : "";
				if (n) switch (n) {
					case y:
						return h;
					case m:
						return l;
					case g:
						return d;
					case v:
						return f;
					case w:
						return p
				}
				return t
			}), e.exports = b
		},
		47801: function(e) {
			e.exports = function(e, t) {
				return null == e ? void 0 : e[t]
			}
		},
		51789: function(e, t, r) {
			var n = r(94536);
			e.exports = function() {
				this.__data__ = n ? n(null) : {}, this.size = 0
			}
		},
		80401: function(e) {
			e.exports = function(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= t ? 1 : 0, t
			}
		},
		57667: function(e, t, r) {
			var n = r(94536),
				i = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				var t = this.__data__;
				if (n) {
					var r = t[e];
					return "__lodash_hash_undefined__" === r ? void 0 : r
				}
				return i.call(t, e) ? t[e] : void 0
			}
		},
		21327: function(e, t, r) {
			var n = r(94536),
				i = Object.prototype.hasOwnProperty;
			e.exports = function(e) {
				var t = this.__data__;
				return n ? void 0 !== t[e] : i.call(t, e)
			}
		},
		81866: function(e, t, r) {
			var n = r(94536);
			e.exports = function(e, t) {
				var r = this.__data__;
				return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
			}
		},
		65776: function(e) {
			var t = /^(?:0|[1-9]\d*)$/;
			e.exports = function(e, r) {
				var n = typeof e;
				return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r
			}
		},
		16612: function(e, t, r) {
			var n = r(77813),
				i = r(98612),
				o = r(65776),
				a = r(13218);
			e.exports = function(e, t, r) {
				if (!a(r)) return !1;
				var s = typeof t;
				return ("number" == s ? !!(i(r) && o(t, r.length)) : "string" == s && t in r) && n(r[t], e)
			}
		},
		37019: function(e) {
			e.exports = function(e) {
				var t = typeof e;
				return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
			}
		},
		15346: function(e, t, r) {
			var n, i = r(14429),
				o = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
			e.exports = function(e) {
				return !!o && o in e
			}
		},
		25726: function(e) {
			var t = Object.prototype;
			e.exports = function(e) {
				var r = e && e.constructor,
					n = "function" == typeof r && r.prototype || t;
				return e === n
			}
		},
		27040: function(e) {
			e.exports = function() {
				this.__data__ = [], this.size = 0
			}
		},
		14125: function(e, t, r) {
			var n = r(18470),
				i = Array.prototype.splice;
			e.exports = function(e) {
				var t = this.__data__,
					r = n(t, e);
				return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
			}
		},
		82117: function(e, t, r) {
			var n = r(18470);
			e.exports = function(e) {
				var t = this.__data__,
					r = n(t, e);
				return r < 0 ? void 0 : t[r][1]
			}
		},
		67518: function(e, t, r) {
			var n = r(18470);
			e.exports = function(e) {
				return n(this.__data__, e) > -1
			}
		},
		54705: function(e, t, r) {
			var n = r(18470);
			e.exports = function(e, t) {
				var r = this.__data__,
					i = n(r, e);
				return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
			}
		},
		24785: function(e, t, r) {
			var n = r(1989),
				i = r(38407),
				o = r(57071);
			e.exports = function() {
				this.size = 0, this.__data__ = {
					hash: new n,
					map: new(o || i),
					string: new n
				}
			}
		},
		11285: function(e, t, r) {
			var n = r(45050);
			e.exports = function(e) {
				var t = n(this, e).delete(e);
				return this.size -= t ? 1 : 0, t
			}
		},
		96e3: function(e, t, r) {
			var n = r(45050);
			e.exports = function(e) {
				return n(this, e).get(e)
			}
		},
		49916: function(e, t, r) {
			var n = r(45050);
			e.exports = function(e) {
				return n(this, e).has(e)
			}
		},
		95265: function(e, t, r) {
			var n = r(45050);
			e.exports = function(e, t) {
				var r = n(this, e),
					i = r.size;
				return r.set(e, t), this.size += r.size == i ? 0 : 1, this
			}
		},
		68776: function(e) {
			e.exports = function(e) {
				var t = -1,
					r = Array(e.size);
				return e.forEach(function(e, n) {
					r[++t] = [n, e]
				}), r
			}
		},
		94536: function(e, t, r) {
			var n = r(10852)(Object, "create");
			e.exports = n
		},
		86916: function(e, t, r) {
			var n = r(5569)(Object.keys, Object);
			e.exports = n
		},
		31167: function(e, t, r) {
			e = r.nmd(e);
			var n = r(31957),
				i = t && !t.nodeType && t,
				o = i && e && !e.nodeType && e,
				a = o && o.exports === i && n.process,
				s = function() {
					try {
						var e = o && o.require && o.require("util").types;
						if (e) return e;
						return a && a.binding && a.binding("util")
					} catch (e) {}
				}();
			e.exports = s
		},
		2333: function(e) {
			var t = Object.prototype.toString;
			e.exports = function(e) {
				return t.call(e)
			}
		},
		5569: function(e) {
			e.exports = function(e, t) {
				return function(r) {
					return e(t(r))
				}
			}
		},
		55639: function(e, t, r) {
			var n = r(31957),
				i = "object" == typeof self && self && self.Object === Object && self,
				o = n || i || Function("return this")();
			e.exports = o
		},
		90619: function(e) {
			e.exports = function(e) {
				return this.__data__.set(e, "__lodash_hash_undefined__"), this
			}
		},
		72385: function(e) {
			e.exports = function(e) {
				return this.__data__.has(e)
			}
		},
		21814: function(e) {
			e.exports = function(e) {
				var t = -1,
					r = Array(e.size);
				return e.forEach(function(e) {
					r[++t] = e
				}), r
			}
		},
		37465: function(e, t, r) {
			var n = r(38407);
			e.exports = function() {
				this.__data__ = new n, this.size = 0
			}
		},
		63779: function(e) {
			e.exports = function(e) {
				var t = this.__data__,
					r = t.delete(e);
				return this.size = t.size, r
			}
		},
		67599: function(e) {
			e.exports = function(e) {
				return this.__data__.get(e)
			}
		},
		44758: function(e) {
			e.exports = function(e) {
				return this.__data__.has(e)
			}
		},
		34309: function(e, t, r) {
			var n = r(38407),
				i = r(57071),
				o = r(83369);
			e.exports = function(e, t) {
				var r = this.__data__;
				if (r instanceof n) {
					var a = r.__data__;
					if (!i || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
					r = this.__data__ = new o(a)
				}
				return r.set(e, t), this.size = r.size, this
			}
		},
		80346: function(e) {
			var t = Function.prototype.toString;
			e.exports = function(e) {
				if (null != e) {
					try {
						return t.call(e)
					} catch (e) {}
					try {
						return e + ""
					} catch (e) {}
				}
				return ""
			}
		},
		67990: function(e) {
			var t = /\s/;
			e.exports = function(e) {
				for (var r = e.length; r-- && t.test(e.charAt(r)););
				return r
			}
		},
		77813: function(e) {
			e.exports = function(e, t) {
				return e === t || e != e && t != t
			}
		},
		35694: function(e, t, r) {
			var n = r(9454),
				i = r(37005),
				o = Object.prototype,
				a = o.hasOwnProperty,
				s = o.propertyIsEnumerable,
				u = n(function() {
					return arguments
				}()) ? n : function(e) {
					return i(e) && a.call(e, "callee") && !s.call(e, "callee")
				};
			e.exports = u
		},
		1469: function(e) {
			var t = Array.isArray;
			e.exports = t
		},
		98612: function(e, t, r) {
			var n = r(23560),
				i = r(41780);
			e.exports = function(e) {
				return null != e && i(e.length) && !n(e)
			}
		},
		44144: function(e, t, r) {
			e = r.nmd(e);
			var n = r(55639),
				i = r(95062),
				o = t && !t.nodeType && t,
				a = o && e && !e.nodeType && e,
				s = a && a.exports === o ? n.Buffer : void 0,
				u = s ? s.isBuffer : void 0;
			e.exports = u || i
		},
		18446: function(e, t, r) {
			var n = r(90939);
			e.exports = function(e, t) {
				return n(e, t)
			}
		},
		23560: function(e, t, r) {
			var n = r(44239),
				i = r(13218);
			e.exports = function(e) {
				if (!i(e)) return !1;
				var t = n(e);
				return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
			}
		},
		41780: function(e) {
			e.exports = function(e) {
				return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
			}
		},
		13218: function(e) {
			e.exports = function(e) {
				var t = typeof e;
				return null != e && ("object" == t || "function" == t)
			}
		},
		37005: function(e) {
			e.exports = function(e) {
				return null != e && "object" == typeof e
			}
		},
		33448: function(e, t, r) {
			var n = r(44239),
				i = r(37005);
			e.exports = function(e) {
				return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
			}
		},
		36719: function(e, t, r) {
			var n = r(38749),
				i = r(7518),
				o = r(31167),
				a = o && o.isTypedArray,
				s = a ? i(a) : n;
			e.exports = s
		},
		3674: function(e, t, r) {
			var n = r(14636),
				i = r(280),
				o = r(98612);
			e.exports = function(e) {
				return o(e) ? n(e) : i(e)
			}
		},
		96026: function(e, t, r) {
			var n = r(47445)();
			e.exports = n
		},
		59854: function(e, t, r) {
			var n = r(89179)("round");
			e.exports = n
		},
		70479: function(e) {
			e.exports = function() {
				return []
			}
		},
		95062: function(e) {
			e.exports = function() {
				return !1
			}
		},
		18601: function(e, t, r) {
			var n = r(14841),
				i = 1 / 0;
			e.exports = function(e) {
				return e ? (e = n(e)) === i || e === -i ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
			}
		},
		40554: function(e, t, r) {
			var n = r(18601);
			e.exports = function(e) {
				var t = n(e),
					r = t % 1;
				return t == t ? r ? t - r : t : 0
			}
		},
		14841: function(e, t, r) {
			var n = r(27561),
				i = r(13218),
				o = r(33448),
				a = 0 / 0,
				s = /^[-+]0x[0-9a-f]+$/i,
				u = /^0b[01]+$/i,
				c = /^0o[0-7]+$/i,
				l = parseInt;
			e.exports = function(e) {
				if ("number" == typeof e) return e;
				if (o(e)) return a;
				if (i(e)) {
					var t = "function" == typeof e.valueOf ? e.valueOf() : e;
					e = i(t) ? t + "" : t
				}
				if ("string" != typeof e) return 0 === e ? e : +e;
				e = n(e);
				var r = u.test(e);
				return r || c.test(e) ? l(e.slice(2), r ? 2 : 8) : s.test(e) ? a : +e
			}
		},
		79833: function(e, t, r) {
			var n = r(80531);
			e.exports = function(e) {
				return null == e ? "" : n(e)
			}
		},
		23235: function(e, t, r) {
			"use strict";
			r.d(t, {
				Z: function() {
					return rl
				}
			});
			var n, i, o, a = r(85893),
				s = r(67294),
				u = r(96026),
				c = r.n(u),
				l = r(73935),
				d = r(87462),
				f = r(63366),
				p = r(8679),
				h = r.n(p);

			function y(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}
			r(11914);
			var v = (0, s.createContext)(),
				w = {
					context: v,
					withTheme: function(e) {
						var t = s.forwardRef(function(t, r) {
							return s.createElement(v.Consumer, null, function(n) {
								return s.createElement(e, m({
									theme: n,
									ref: r
								}, t))
							})
						});
						return h()(t, e), t
					},
					useTheme: function() {
						return s.useContext(v)
					},
					ThemeProvider: function(e) {
						function t() {
							for (var t, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
							return y(g(g(t = e.call.apply(e, [this].concat(n)) || this)), "cachedTheme", void 0), y(g(g(t)), "lastOuterTheme", void 0), y(g(g(t)), "lastTheme", void 0), y(g(g(t)), "renderProvider", function(e) {
								var r = t.props.children;
								return s.createElement(v.Provider, {
									value: t.getTheme(e)
								}, r)
							}), t
						}(r = t).prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e;
						var r, n = t.prototype;
						return n.getTheme = function(e) {
							if (this.props.theme !== this.lastTheme || e !== this.lastOuterTheme || !this.cachedTheme) {
								if (this.lastOuterTheme = e, this.lastTheme = this.props.theme, "function" == typeof this.lastTheme) {
									var t = this.props.theme;
									this.cachedTheme = t(e)
								} else {
									var r = this.props.theme;
									this.cachedTheme = e ? m({}, e, r) : r
								}
							}
							return this.cachedTheme
						}, n.render = function() {
							return this.props.children ? s.createElement(v.Consumer, null, this.renderProvider) : null
						}, t
					}(s.Component)
				};
			w.withTheme, w.ThemeProvider, w.useTheme;
			var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				E = ("undefined" == typeof window ? "undefined" : b(window)) === "object" && ("undefined" == typeof document ? "undefined" : b(document)) === "object" && 9 === document.nodeType,
				S = function(e, t) {},
				A = r(19376);

			function x(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (0, A.Z)(n.key), n)
				}
			}

			function P(e, t, r) {
				return t && x(e.prototype, t), r && x(e, r), Object.defineProperty(e, "prototype", {
					writable: !1
				}), e
			}

			function k(e, t) {
				return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function _(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, k(e, t)
			}

			function C(e) {
				if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}
			var R = {}.constructor;

			function H(e, t, r) {
				void 0 === e && (e = "unnamed");
				var n = r.jss,
					i = function e(t) {
						if (null == t || "object" != typeof t) return t;
						if (Array.isArray(t)) return t.map(e);
						if (t.constructor !== R) return t;
						var r = {};
						for (var n in t) r[n] = e(t[n]);
						return r
					}(t);
				return n.plugins.onCreateRule(e, i, r) || (e[0], null)
			}
			var O = function(e, t) {
					for (var r = "", n = 0; n < e.length && "!important" !== e[n]; n++) r && (r += t), r += e[n];
					return r
				},
				T = function(e) {
					if (!Array.isArray(e)) return e;
					var t = "";
					if (Array.isArray(e[0]))
						for (var r = 0; r < e.length && "!important" !== e[r]; r++) t && (t += ", "), t += O(e[r], " ");
					else t = O(e, ", ");
					return "!important" === e[e.length - 1] && (t += " !important"), t
				};

			function j(e) {
				return e && !1 === e.format ? {
					linebreak: "",
					space: ""
				} : {
					linebreak: "\n",
					space: " "
				}
			}

			function W(e, t) {
				for (var r = "", n = 0; n < t; n++) r += "  ";
				return r + e
			}

			function M(e, t, r) {
				void 0 === r && (r = {});
				var n = "";
				if (!t) return n;
				var i = r.indent,
					o = void 0 === i ? 0 : i,
					a = t.fallbacks;
				!1 === r.format && (o = -1 / 0);
				var s = j(r),
					u = s.linebreak,
					c = s.space;
				if (e && o++, a) {
					if (Array.isArray(a))
						for (var l = 0; l < a.length; l++) {
							var d = a[l];
							for (var f in d) {
								var p = d[f];
								null != p && (n && (n += u), n += W(f + ":" + c + T(p) + ";", o))
							}
						} else
							for (var h in a) {
								var y = a[h];
								null != y && (n && (n += u), n += W(h + ":" + c + T(y) + ";", o))
							}
				}
				for (var m in t) {
					var g = t[m];
					null != g && "fallbacks" !== m && (n && (n += u), n += W(m + ":" + c + T(g) + ";", o))
				}
				return (n || r.allowEmpty) && e ? (o--, n && (n = "" + u + n + u), W("" + e + c + "{" + n, o) + W("}", o)) : n
			}
			var K = /([[\].#*$><+~=|^:(),"'`\s])/g,
				D = "undefined" != typeof CSS && CSS.escape,
				I = function(e) {
					return D ? D(e) : e.replace(K, "\\$1")
				},
				J = function() {
					function e(e, t, r) {
						this.type = "style", this.isProcessed = !1;
						var n = r.sheet,
							i = r.Renderer;
						this.key = e, this.options = r, this.style = t, n ? this.renderer = n.renderer : i && (this.renderer = new i)
					}
					return e.prototype.prop = function(e, t, r) {
						if (void 0 === t) return this.style[e];
						var n = !!r && r.force;
						if (!n && this.style[e] === t) return this;
						var i = t;
						r && !1 === r.process || (i = this.options.jss.plugins.onChangeValue(t, e, this));
						var o = null == i || !1 === i,
							a = e in this.style;
						if (o && !a && !n) return this;
						var s = o && a;
						if (s ? delete this.style[e] : this.style[e] = i, this.renderable && this.renderer) return s ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, i), this;
						var u = this.options.sheet;
						return u && u.attached, this
					}, e
				}(),
				N = function(e) {
					function t(t, r, n) {
						i = e.call(this, t, r, n) || this;
						var i, o = n.selector,
							a = n.scoped,
							s = n.sheet,
							u = n.generateId;
						return o ? i.selectorText = o : !1 !== a && (i.id = u(C(C(i)), s), i.selectorText = "." + I(i.id)), i
					}
					_(t, e);
					var r = t.prototype;
					return r.applyTo = function(e) {
						var t = this.renderer;
						if (t) {
							var r = this.toJSON();
							for (var n in r) t.setProperty(e, n, r[n])
						}
						return this
					}, r.toJSON = function() {
						var e = {};
						for (var t in this.style) {
							var r = this.style[t];
							"object" != typeof r ? e[t] = r : Array.isArray(r) && (e[t] = T(r))
						}
						return e
					}, r.toString = function(e) {
						var t = this.options.sheet,
							r = t && t.options.link ? (0, d.Z)({}, e, {
								allowEmpty: !0
							}) : e;
						return M(this.selectorText, this.style, r)
					}, P(t, [{
						key: "selector",
						set: function(e) {
							if (e !== this.selectorText) {
								this.selectorText = e;
								var t = this.renderer,
									r = this.renderable;
								r && t && !t.setSelector(r, e) && t.replaceRule(r, this)
							}
						},
						get: function() {
							return this.selectorText
						}
					}]), t
				}(J),
				U = {
					indent: 1,
					children: !0
				},
				F = /@([\w-]+)/,
				L = function() {
					function e(e, t, r) {
						this.type = "conditional", this.isProcessed = !1, this.key = e;
						var n = e.match(F);
						for (var i in this.at = n ? n[1] : "unknown", this.query = r.name || "@" + this.at, this.options = r, this.rules = new es((0, d.Z)({}, r, {
								parent: this
							})), t) this.rules.add(i, t[i]);
						this.rules.process()
					}
					var t = e.prototype;
					return t.getRule = function(e) {
						return this.rules.get(e)
					}, t.indexOf = function(e) {
						return this.rules.indexOf(e)
					}, t.addRule = function(e, t, r) {
						var n = this.rules.add(e, t, r);
						return n ? (this.options.jss.plugins.onProcessRule(n), n) : null
					}, t.replaceRule = function(e, t, r) {
						var n = this.rules.replace(e, t, r);
						return n && this.options.jss.plugins.onProcessRule(n), n
					}, t.toString = function(e) {
						void 0 === e && (e = U);
						var t = j(e).linebreak;
						if (null == e.indent && (e.indent = U.indent), null == e.children && (e.children = U.children), !1 === e.children) return this.query + " {}";
						var r = this.rules.toString(e);
						return r ? this.query + " {" + t + r + t + "}" : ""
					}, e
				}(),
				$ = /@container|@media|@supports\s+/,
				z = {
					indent: 1,
					children: !0
				},
				B = /@keyframes\s+([\w-]+)/,
				G = function() {
					function e(e, t, r) {
						this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
						var n = e.match(B);
						n && n[1] ? this.name = n[1] : this.name = "noname", this.key = this.type + "-" + this.name, this.options = r;
						var i = r.scoped,
							o = r.sheet,
							a = r.generateId;
						for (var s in this.id = !1 === i ? this.name : I(a(this, o)), this.rules = new es((0, d.Z)({}, r, {
								parent: this
							})), t) this.rules.add(s, t[s], (0, d.Z)({}, r, {
							parent: this
						}));
						this.rules.process()
					}
					return e.prototype.toString = function(e) {
						void 0 === e && (e = z);
						var t = j(e).linebreak;
						if (null == e.indent && (e.indent = z.indent), null == e.children && (e.children = z.children), !1 === e.children) return this.at + " " + this.id + " {}";
						var r = this.rules.toString(e);
						return r && (r = "" + t + r + t), this.at + " " + this.id + " {" + r + "}"
					}, e
				}(),
				V = /@keyframes\s+/,
				Z = /\$([\w-]+)/g,
				Y = function(e, t) {
					return "string" == typeof e ? e.replace(Z, function(e, r) {
						return r in t ? t[r] : e
					}) : e
				},
				q = function(e, t, r) {
					var n = e[t],
						i = Y(n, r);
					i !== n && (e[t] = i)
				},
				X = function(e) {
					function t() {
						return e.apply(this, arguments) || this
					}
					return _(t, e), t.prototype.toString = function(e) {
						var t = this.options.sheet,
							r = t && t.options.link ? (0, d.Z)({}, e, {
								allowEmpty: !0
							}) : e;
						return M(this.key, this.style, r)
					}, t
				}(J),
				Q = function() {
					function e(e, t, r) {
						this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = e, this.style = t, this.options = r
					}
					return e.prototype.toString = function(e) {
						var t = j(e).linebreak;
						if (Array.isArray(this.style)) {
							for (var r = "", n = 0; n < this.style.length; n++) r += M(this.at, this.style[n]), this.style[n + 1] && (r += t);
							return r
						}
						return M(this.at, this.style, e)
					}, e
				}(),
				ee = /@font-face/,
				et = function() {
					function e(e, t, r) {
						this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = e, this.style = t, this.options = r
					}
					return e.prototype.toString = function(e) {
						return M(this.key, this.style, e)
					}, e
				}(),
				er = function() {
					function e(e, t, r) {
						this.type = "simple", this.isProcessed = !1, this.key = e, this.value = t, this.options = r
					}
					return e.prototype.toString = function(e) {
						if (Array.isArray(this.value)) {
							for (var t = "", r = 0; r < this.value.length; r++) t += this.key + " " + this.value[r] + ";", this.value[r + 1] && (t += "\n");
							return t
						}
						return this.key + " " + this.value + ";"
					}, e
				}(),
				en = {
					"@charset": !0,
					"@import": !0,
					"@namespace": !0
				},
				ei = [{
					onCreateRule: function(e, t, r) {
						return "@" === e[0] || r.parent && "keyframes" === r.parent.type ? null : new N(e, t, r)
					}
				}, {
					onCreateRule: function(e, t, r) {
						return $.test(e) ? new L(e, t, r) : null
					}
				}, {
					onCreateRule: function(e, t, r) {
						return "string" == typeof e && V.test(e) ? new G(e, t, r) : null
					},
					onProcessStyle: function(e, t, r) {
						return "style" === t.type && r && ("animation-name" in e && q(e, "animation-name", r.keyframes), "animation" in e && q(e, "animation", r.keyframes)), e
					},
					onChangeValue: function(e, t, r) {
						var n = r.options.sheet;
						if (!n) return e;
						switch (t) {
							case "animation":
							case "animation-name":
								return Y(e, n.keyframes);
							default:
								return e
						}
					}
				}, {
					onCreateRule: function(e, t, r) {
						return r.parent && "keyframes" === r.parent.type ? new X(e, t, r) : null
					}
				}, {
					onCreateRule: function(e, t, r) {
						return ee.test(e) ? new Q(e, t, r) : null
					}
				}, {
					onCreateRule: function(e, t, r) {
						return "@viewport" === e || "@-ms-viewport" === e ? new et(e, t, r) : null
					}
				}, {
					onCreateRule: function(e, t, r) {
						return e in en ? new er(e, t, r) : null
					}
				}],
				eo = {
					process: !0
				},
				ea = {
					force: !0,
					process: !0
				},
				es = function() {
					function e(e) {
						this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = e, this.classes = e.classes, this.keyframes = e.keyframes
					}
					var t = e.prototype;
					return t.add = function(e, t, r) {
						var n = this.options,
							i = n.parent,
							o = n.sheet,
							a = n.jss,
							s = n.Renderer,
							u = n.generateId,
							c = n.scoped,
							l = (0, d.Z)({
								classes: this.classes,
								parent: i,
								sheet: o,
								jss: a,
								Renderer: s,
								generateId: u,
								scoped: c,
								name: e,
								keyframes: this.keyframes,
								selector: void 0
							}, r),
							f = e;
						e in this.raw && (f = e + "-d" + this.counter++), this.raw[f] = t, f in this.classes && (l.selector = "." + I(this.classes[f]));
						var p = H(f, t, l);
						if (!p) return null;
						this.register(p);
						var h = void 0 === l.index ? this.index.length : l.index;
						return this.index.splice(h, 0, p), p
					}, t.replace = function(e, t, r) {
						var n = this.get(e),
							i = this.index.indexOf(n);
						n && this.remove(n);
						var o = r;
						return -1 !== i && (o = (0, d.Z)({}, r, {
							index: i
						})), this.add(e, t, o)
					}, t.get = function(e) {
						return this.map[e]
					}, t.remove = function(e) {
						this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1)
					}, t.indexOf = function(e) {
						return this.index.indexOf(e)
					}, t.process = function() {
						var e = this.options.jss.plugins;
						this.index.slice(0).forEach(e.onProcessRule, e)
					}, t.register = function(e) {
						this.map[e.key] = e, e instanceof N ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof G && this.keyframes && (this.keyframes[e.name] = e.id)
					}, t.unregister = function(e) {
						delete this.map[e.key], e instanceof N ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof G && delete this.keyframes[e.name]
					}, t.update = function() {
						if ("string" == typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? (e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], r = arguments.length <= 2 ? void 0 : arguments[2]) : (t = arguments.length <= 0 ? void 0 : arguments[0], r = arguments.length <= 1 ? void 0 : arguments[1], e = null), e) this.updateOne(this.get(e), t, r);
						else
							for (var e, t, r, n = 0; n < this.index.length; n++) this.updateOne(this.index[n], t, r)
					}, t.updateOne = function(t, r, n) {
						void 0 === n && (n = eo);
						var i = this.options,
							o = i.jss.plugins,
							a = i.sheet;
						if (t.rules instanceof e) {
							t.rules.update(r, n);
							return
						}
						var s = t.style;
						if (o.onUpdate(r, t, a, n), n.process && s && s !== t.style) {
							for (var u in o.onProcessStyle(t.style, t, a), t.style) {
								var c = t.style[u];
								c !== s[u] && t.prop(u, c, ea)
							}
							for (var l in s) {
								var d = t.style[l],
									f = s[l];
								null == d && d !== f && t.prop(l, null, ea)
							}
						}
					}, t.toString = function(e) {
						for (var t = "", r = this.options.sheet, n = !!r && r.options.link, i = j(e).linebreak, o = 0; o < this.index.length; o++) {
							var a = this.index[o].toString(e);
							(a || n) && (t && (t += i), t += a)
						}
						return t
					}, e
				}(),
				eu = function() {
					function e(e, t) {
						for (var r in this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = (0, d.Z)({}, t, {
								sheet: this,
								parent: this,
								classes: this.classes,
								keyframes: this.keyframes
							}), t.Renderer && (this.renderer = new t.Renderer(this)), this.rules = new es(this.options), e) this.rules.add(r, e[r]);
						this.rules.process()
					}
					var t = e.prototype;
					return t.attach = function() {
						return this.attached || (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy()), this
					}, t.detach = function() {
						return this.attached && (this.renderer && this.renderer.detach(), this.attached = !1), this
					}, t.addRule = function(e, t, r) {
						var n = this.queue;
						this.attached && !n && (this.queue = []);
						var i = this.rules.add(e, t, r);
						return i ? (this.options.jss.plugins.onProcessRule(i), this.attached) ? (this.deployed && (n ? n.push(i) : (this.insertRule(i), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), i) : (this.deployed = !1, i) : null
					}, t.replaceRule = function(e, t, r) {
						var n = this.rules.get(e);
						if (!n) return this.addRule(e, t, r);
						var i = this.rules.replace(e, t, r);
						return (i && this.options.jss.plugins.onProcessRule(i), this.attached) ? (this.deployed && this.renderer && (i ? n.renderable && this.renderer.replaceRule(n.renderable, i) : this.renderer.deleteRule(n)), i) : (this.deployed = !1, i)
					}, t.insertRule = function(e) {
						this.renderer && this.renderer.insertRule(e)
					}, t.addRules = function(e, t) {
						var r = [];
						for (var n in e) {
							var i = this.addRule(n, e[n], t);
							i && r.push(i)
						}
						return r
					}, t.getRule = function(e) {
						return this.rules.get(e)
					}, t.deleteRule = function(e) {
						var t = "object" == typeof e ? e : this.rules.get(e);
						return !!t && (!this.attached || !!t.renderable) && (this.rules.remove(t), !this.attached || !t.renderable || !this.renderer || this.renderer.deleteRule(t.renderable))
					}, t.indexOf = function(e) {
						return this.rules.indexOf(e)
					}, t.deploy = function() {
						return this.renderer && this.renderer.deploy(), this.deployed = !0, this
					}, t.update = function() {
						var e;
						return (e = this.rules).update.apply(e, arguments), this
					}, t.updateOne = function(e, t, r) {
						return this.rules.updateOne(e, t, r), this
					}, t.toString = function(e) {
						return this.rules.toString(e)
					}, e
				}(),
				ec = function() {
					function e() {
						this.plugins = {
							internal: [],
							external: []
						}, this.registry = {}
					}
					var t = e.prototype;
					return t.onCreateRule = function(e, t, r) {
						for (var n = 0; n < this.registry.onCreateRule.length; n++) {
							var i = this.registry.onCreateRule[n](e, t, r);
							if (i) return i
						}
						return null
					}, t.onProcessRule = function(e) {
						if (!e.isProcessed) {
							for (var t = e.options.sheet, r = 0; r < this.registry.onProcessRule.length; r++) this.registry.onProcessRule[r](e, t);
							e.style && this.onProcessStyle(e.style, e, t), e.isProcessed = !0
						}
					}, t.onProcessStyle = function(e, t, r) {
						for (var n = 0; n < this.registry.onProcessStyle.length; n++) t.style = this.registry.onProcessStyle[n](t.style, t, r)
					}, t.onProcessSheet = function(e) {
						for (var t = 0; t < this.registry.onProcessSheet.length; t++) this.registry.onProcessSheet[t](e)
					}, t.onUpdate = function(e, t, r, n) {
						for (var i = 0; i < this.registry.onUpdate.length; i++) this.registry.onUpdate[i](e, t, r, n)
					}, t.onChangeValue = function(e, t, r) {
						for (var n = e, i = 0; i < this.registry.onChangeValue.length; i++) n = this.registry.onChangeValue[i](n, t, r);
						return n
					}, t.use = function(e, t) {
						void 0 === t && (t = {
							queue: "external"
						});
						var r = this.plugins[t.queue]; - 1 === r.indexOf(e) && (r.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(e, t) {
							for (var r in t) r in e && e[r].push(t[r]);
							return e
						}, {
							onCreateRule: [],
							onProcessRule: [],
							onProcessStyle: [],
							onProcessSheet: [],
							onChangeValue: [],
							onUpdate: []
						}))
					}, e
				}(),
				el = new(function() {
					function e() {
						this.registry = []
					}
					var t = e.prototype;
					return t.add = function(e) {
						var t = this.registry,
							r = e.options.index;
						if (-1 === t.indexOf(e)) {
							if (0 === t.length || r >= this.index) {
								t.push(e);
								return
							}
							for (var n = 0; n < t.length; n++)
								if (t[n].options.index > r) {
									t.splice(n, 0, e);
									return
								}
						}
					}, t.reset = function() {
						this.registry = []
					}, t.remove = function(e) {
						var t = this.registry.indexOf(e);
						this.registry.splice(t, 1)
					}, t.toString = function(e) {
						for (var t = void 0 === e ? {} : e, r = t.attached, n = (0, f.Z)(t, ["attached"]), i = j(n).linebreak, o = "", a = 0; a < this.registry.length; a++) {
							var s = this.registry[a];
							(null == r || s.attached === r) && (o && (o += i), o += s.toString(n))
						}
						return o
					}, P(e, [{
						key: "index",
						get: function() {
							return 0 === this.registry.length ? 0 : this.registry[this.registry.length - 1].options.index
						}
					}]), e
				}()),
				ed = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof self && self.Math === Math ? self : Function("return this")(),
				ef = "2f1acc6c3a606b082e5eef5e54414ffb";
			null == ed[ef] && (ed[ef] = 0);
			var ep = ed[ef]++,
				eh = function(e) {
					void 0 === e && (e = {});
					var t = 0;
					return function(r, n) {
						t += 1;
						var i = "",
							o = "";
						return (n && (n.options.classNamePrefix && (o = n.options.classNamePrefix), null != n.options.jss.id && (i = String(n.options.jss.id))), e.minify) ? "" + (o || "c") + ep + i + t : o + r.key + "-" + ep + (i ? "-" + i : "") + "-" + t
					}
				},
				ey = function(e) {
					var t;
					return function() {
						return t || (t = e()), t
					}
				},
				em = function(e, t) {
					try {
						if (e.attributeStyleMap) return e.attributeStyleMap.get(t);
						return e.style.getPropertyValue(t)
					} catch (e) {
						return ""
					}
				},
				eg = function(e, t, r) {
					try {
						var n = r;
						if (Array.isArray(r) && (n = T(r)), e.attributeStyleMap) e.attributeStyleMap.set(t, n);
						else {
							var i = n ? n.indexOf("!important") : -1,
								o = i > -1 ? n.substr(0, i - 1) : n;
							e.style.setProperty(t, o, i > -1 ? "important" : "")
						}
					} catch (e) {
						return !1
					}
					return !0
				},
				ev = function(e, t) {
					try {
						e.attributeStyleMap ? e.attributeStyleMap.delete(t) : e.style.removeProperty(t)
					} catch (e) {}
				},
				ew = function(e, t) {
					return e.selectorText = t, e.selectorText === t
				},
				eb = ey(function() {
					return document.querySelector("head")
				}),
				eE = ey(function() {
					var e = document.querySelector('meta[property="csp-nonce"]');
					return e ? e.getAttribute("content") : null
				}),
				eS = function(e, t, r) {
					try {
						"insertRule" in e ? e.insertRule(t, r) : "appendRule" in e && e.appendRule(t)
					} catch (e) {
						return !1
					}
					return e.cssRules[r]
				},
				eA = function(e, t) {
					var r = e.cssRules.length;
					return void 0 === t || t > r ? r : t
				},
				ex = function() {
					var e = document.createElement("style");
					return e.textContent = "\n", e
				},
				eP = function() {
					function e(e) {
						this.getPropertyValue = em, this.setProperty = eg, this.removeProperty = ev, this.setSelector = ew, this.hasInsertedRules = !1, this.cssRules = [], e && el.add(e), this.sheet = e;
						var t = this.sheet ? this.sheet.options : {},
							r = t.media,
							n = t.meta,
							i = t.element;
						this.element = i || ex(), this.element.setAttribute("data-jss", ""), r && this.element.setAttribute("media", r), n && this.element.setAttribute("data-meta", n);
						var o = eE();
						o && this.element.setAttribute("nonce", o)
					}
					var t = e.prototype;
					return t.attach = function() {
						if (!this.element.parentNode && this.sheet) {
							! function(e, t) {
								var r = t.insertionPoint,
									n = function(e) {
										var t = el.registry;
										if (t.length > 0) {
											var r = function(e, t) {
												for (var r = 0; r < e.length; r++) {
													var n = e[r];
													if (n.attached && n.options.index > t.index && n.options.insertionPoint === t.insertionPoint) return n
												}
												return null
											}(t, e);
											if (r && r.renderer) return {
												parent: r.renderer.element.parentNode,
												node: r.renderer.element
											};
											if ((r = function(e, t) {
													for (var r = e.length - 1; r >= 0; r--) {
														var n = e[r];
														if (n.attached && n.options.insertionPoint === t.insertionPoint) return n
													}
													return null
												}(t, e)) && r.renderer) return {
												parent: r.renderer.element.parentNode,
												node: r.renderer.element.nextSibling
											}
										}
										var n = e.insertionPoint;
										if (n && "string" == typeof n) {
											var i = function(e) {
												for (var t = eb(), r = 0; r < t.childNodes.length; r++) {
													var n = t.childNodes[r];
													if (8 === n.nodeType && n.nodeValue.trim() === e) return n
												}
												return null
											}(n);
											if (i) return {
												parent: i.parentNode,
												node: i.nextSibling
											}
										}
										return !1
									}(t);
								if (!1 !== n && n.parent) {
									n.parent.insertBefore(e, n.node);
									return
								}
								if (r && "number" == typeof r.nodeType) {
									var i = r.parentNode;
									i && i.insertBefore(e, r.nextSibling);
									return
								}
								eb().appendChild(e)
							}(this.element, this.sheet.options);
							var e = Boolean(this.sheet && this.sheet.deployed);
							this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy())
						}
					}, t.detach = function() {
						if (this.sheet) {
							var e = this.element.parentNode;
							e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = "\n")
						}
					}, t.deploy = function() {
						var e = this.sheet;
						if (e) {
							if (e.options.link) {
								this.insertRules(e.rules);
								return
							}
							this.element.textContent = "\n" + e.toString() + "\n"
						}
					}, t.insertRules = function(e, t) {
						for (var r = 0; r < e.index.length; r++) this.insertRule(e.index[r], r, t)
					}, t.insertRule = function(e, t, r) {
						if (void 0 === r && (r = this.element.sheet), e.rules) {
							var n = r;
							if ("conditional" === e.type || "keyframes" === e.type) {
								var i = eA(r, t);
								if (!1 === (n = eS(r, e.toString({
										children: !1
									}), i))) return !1;
								this.refCssRule(e, i, n)
							}
							return this.insertRules(e.rules, n), n
						}
						var o = e.toString();
						if (!o) return !1;
						var a = eA(r, t),
							s = eS(r, o, a);
						return !1 !== s && (this.hasInsertedRules = !0, this.refCssRule(e, a, s), s)
					}, t.refCssRule = function(e, t, r) {
						e.renderable = r, e.options.parent instanceof eu && this.cssRules.splice(t, 0, r)
					}, t.deleteRule = function(e) {
						var t = this.element.sheet,
							r = this.indexOf(e);
						return -1 !== r && (t.deleteRule(r), this.cssRules.splice(r, 1), !0)
					}, t.indexOf = function(e) {
						return this.cssRules.indexOf(e)
					}, t.replaceRule = function(e, t) {
						var r = this.indexOf(e);
						return -1 !== r && (this.element.sheet.deleteRule(r), this.cssRules.splice(r, 1), this.insertRule(t, r))
					}, t.getRules = function() {
						return this.element.sheet.cssRules
					}, e
				}(),
				ek = 0,
				e_ = function() {
					function e(e) {
						this.id = ek++, this.version = "10.10.0", this.plugins = new ec, this.options = {
							id: {
								minify: !1
							},
							createGenerateId: eh,
							Renderer: E ? eP : null,
							plugins: []
						}, this.generateId = eh({
							minify: !1
						});
						for (var t = 0; t < ei.length; t++) this.plugins.use(ei[t], {
							queue: "internal"
						});
						this.setup(e)
					}
					var t = e.prototype;
					return t.setup = function(e) {
						return void 0 === e && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = (0, d.Z)({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), null != e.insertionPoint && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this
					}, t.createStyleSheet = function(e, t) {
						void 0 === t && (t = {});
						var r = t.index;
						"number" != typeof r && (r = 0 === el.index ? 0 : el.index + 1);
						var n = new eu(e, (0, d.Z)({}, t, {
							jss: this,
							generateId: t.generateId || this.generateId,
							insertionPoint: this.options.insertionPoint,
							Renderer: this.options.Renderer,
							index: r
						}));
						return this.plugins.onProcessSheet(n), n
					}, t.removeStyleSheet = function(e) {
						return e.detach(), el.remove(e), this
					}, t.createRule = function(e, t, r) {
						if (void 0 === t && (t = {}), void 0 === r && (r = {}), "object" == typeof e) return this.createRule(void 0, e, t);
						var n = (0, d.Z)({}, r, {
							name: e,
							jss: this,
							Renderer: this.options.Renderer
						});
						n.generateId || (n.generateId = this.generateId), n.classes || (n.classes = {}), n.keyframes || (n.keyframes = {});
						var i = H(e, t, n);
						return i && this.plugins.onProcessRule(i), i
					}, t.use = function() {
						for (var e = this, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
						return r.forEach(function(t) {
							e.plugins.use(t)
						}), this
					}, e
				}(),
				eC = function(e) {
					return new e_(e)
				},
				eR = function() {
					function e() {
						this.length = 0, this.sheets = new WeakMap
					}
					var t = e.prototype;
					return t.get = function(e) {
						var t = this.sheets.get(e);
						return t && t.sheet
					}, t.add = function(e, t) {
						this.sheets.has(e) || (this.length++, this.sheets.set(e, {
							sheet: t,
							refs: 0
						}))
					}, t.manage = function(e) {
						var t = this.sheets.get(e);
						if (t) return 0 === t.refs && t.sheet.attach(), t.refs++, t.sheet;
						S(!1, "[JSS] SheetsManager: can't find sheet to manage")
					}, t.unmanage = function(e) {
						var t = this.sheets.get(e);
						t ? t.refs > 0 && (t.refs--, 0 === t.refs && t.sheet.detach()) : S(!1, "SheetsManager: can't find sheet to unmanage")
					}, P(e, [{
						key: "size",
						get: function() {
							return this.length
						}
					}]), e
				}(),
				eH = "object" == typeof CSS && null != CSS && "number" in CSS;
			eC();
			var eO = Date.now(),
				eT = "fnValues" + eO,
				ej = "fnStyle" + ++eO,
				eW = r(98123),
				eM = function(e) {
					return e && e[eW.Z] && e === e[eW.Z]()
				},
				eK = /;\n/,
				eD = function(e) {
					for (var t = {}, r = e.split(eK), n = 0; n < r.length; n++) {
						var i = (r[n] || "").trim();
						if (i) {
							var o = i.indexOf(":");
							if (-1 === o) continue;
							var a = i.substr(0, o).trim(),
								s = i.substr(o + 1).trim();
							t[a] = s
						}
					}
					return t
				},
				eI = function(e) {
					"string" == typeof e.style && (e.style = eD(e.style))
				},
				eJ = "@global",
				eN = "@global ",
				eU = function() {
					function e(e, t, r) {
						for (var n in this.type = "global", this.at = eJ, this.isProcessed = !1, this.key = e, this.options = r, this.rules = new es((0, d.Z)({}, r, {
								parent: this
							})), t) this.rules.add(n, t[n]);
						this.rules.process()
					}
					var t = e.prototype;
					return t.getRule = function(e) {
						return this.rules.get(e)
					}, t.addRule = function(e, t, r) {
						var n = this.rules.add(e, t, r);
						return n && this.options.jss.plugins.onProcessRule(n), n
					}, t.replaceRule = function(e, t, r) {
						var n = this.rules.replace(e, t, r);
						return n && this.options.jss.plugins.onProcessRule(n), n
					}, t.indexOf = function(e) {
						return this.rules.indexOf(e)
					}, t.toString = function(e) {
						return this.rules.toString(e)
					}, e
				}(),
				eF = function() {
					function e(e, t, r) {
						this.type = "global", this.at = eJ, this.isProcessed = !1, this.key = e, this.options = r;
						var n = e.substr(eN.length);
						this.rule = r.jss.createRule(n, t, (0, d.Z)({}, r, {
							parent: this
						}))
					}
					return e.prototype.toString = function(e) {
						return this.rule ? this.rule.toString(e) : ""
					}, e
				}(),
				eL = /\s*,\s*/g;

			function e$(e, t) {
				for (var r = e.split(eL), n = "", i = 0; i < r.length; i++) n += t + " " + r[i].trim(), r[i + 1] && (n += ", ");
				return n
			}
			var ez = function(e) {
					return e && "object" == typeof e && !Array.isArray(e)
				},
				eB = "extendCurrValue" + Date.now(),
				eG = /\s*,\s*/g,
				eV = /&/g,
				eZ = /\$([\w-]+)/g,
				eY = /[A-Z]/g,
				eq = /^ms-/,
				eX = {};

			function eQ(e) {
				return "-" + e.toLowerCase()
			}
			var e0 = function(e) {
				if (eX.hasOwnProperty(e)) return eX[e];
				var t = e.replace(eY, eQ);
				return eX[e] = eq.test(t) ? "-" + t : t
			};

			function e1(e) {
				var t = {};
				for (var r in e) t[0 === r.indexOf("--") ? r : e0(r)] = e[r];
				return e.fallbacks && (Array.isArray(e.fallbacks) ? t.fallbacks = e.fallbacks.map(e1) : t.fallbacks = e1(e.fallbacks)), t
			}
			var e2 = eH && CSS ? CSS.px : "px",
				e6 = eH && CSS ? CSS.ms : "ms",
				e5 = eH && CSS ? CSS.percent : "%";

			function e8(e) {
				var t = /(-[a-z])/g,
					r = function(e) {
						return e[1].toUpperCase()
					},
					n = {};
				for (var i in e) n[i] = e[i], n[i.replace(t, r)] = e[i];
				return n
			}
			var e4 = e8({
				"animation-delay": e6,
				"animation-duration": e6,
				"background-position": e2,
				"background-position-x": e2,
				"background-position-y": e2,
				"background-size": e2,
				border: e2,
				"border-bottom": e2,
				"border-bottom-left-radius": e2,
				"border-bottom-right-radius": e2,
				"border-bottom-width": e2,
				"border-left": e2,
				"border-left-width": e2,
				"border-radius": e2,
				"border-right": e2,
				"border-right-width": e2,
				"border-top": e2,
				"border-top-left-radius": e2,
				"border-top-right-radius": e2,
				"border-top-width": e2,
				"border-width": e2,
				"border-block": e2,
				"border-block-end": e2,
				"border-block-end-width": e2,
				"border-block-start": e2,
				"border-block-start-width": e2,
				"border-block-width": e2,
				"border-inline": e2,
				"border-inline-end": e2,
				"border-inline-end-width": e2,
				"border-inline-start": e2,
				"border-inline-start-width": e2,
				"border-inline-width": e2,
				"border-start-start-radius": e2,
				"border-start-end-radius": e2,
				"border-end-start-radius": e2,
				"border-end-end-radius": e2,
				margin: e2,
				"margin-bottom": e2,
				"margin-left": e2,
				"margin-right": e2,
				"margin-top": e2,
				"margin-block": e2,
				"margin-block-end": e2,
				"margin-block-start": e2,
				"margin-inline": e2,
				"margin-inline-end": e2,
				"margin-inline-start": e2,
				padding: e2,
				"padding-bottom": e2,
				"padding-left": e2,
				"padding-right": e2,
				"padding-top": e2,
				"padding-block": e2,
				"padding-block-end": e2,
				"padding-block-start": e2,
				"padding-inline": e2,
				"padding-inline-end": e2,
				"padding-inline-start": e2,
				"mask-position-x": e2,
				"mask-position-y": e2,
				"mask-size": e2,
				height: e2,
				width: e2,
				"min-height": e2,
				"max-height": e2,
				"min-width": e2,
				"max-width": e2,
				bottom: e2,
				left: e2,
				top: e2,
				right: e2,
				inset: e2,
				"inset-block": e2,
				"inset-block-end": e2,
				"inset-block-start": e2,
				"inset-inline": e2,
				"inset-inline-end": e2,
				"inset-inline-start": e2,
				"box-shadow": e2,
				"text-shadow": e2,
				"column-gap": e2,
				"column-rule": e2,
				"column-rule-width": e2,
				"column-width": e2,
				"font-size": e2,
				"font-size-delta": e2,
				"letter-spacing": e2,
				"text-decoration-thickness": e2,
				"text-indent": e2,
				"text-stroke": e2,
				"text-stroke-width": e2,
				"word-spacing": e2,
				motion: e2,
				"motion-offset": e2,
				outline: e2,
				"outline-offset": e2,
				"outline-width": e2,
				perspective: e2,
				"perspective-origin-x": e5,
				"perspective-origin-y": e5,
				"transform-origin": e5,
				"transform-origin-x": e5,
				"transform-origin-y": e5,
				"transform-origin-z": e5,
				"transition-delay": e6,
				"transition-duration": e6,
				"vertical-align": e2,
				"flex-basis": e2,
				"shape-margin": e2,
				size: e2,
				gap: e2,
				grid: e2,
				"grid-gap": e2,
				"row-gap": e2,
				"grid-row-gap": e2,
				"grid-column-gap": e2,
				"grid-template-rows": e2,
				"grid-template-columns": e2,
				"grid-auto-rows": e2,
				"grid-auto-columns": e2,
				"box-shadow-x": e2,
				"box-shadow-y": e2,
				"box-shadow-blur": e2,
				"box-shadow-spread": e2,
				"font-line-height": e2,
				"text-shadow-x": e2,
				"text-shadow-y": e2,
				"text-shadow-blur": e2
			});

			function e3(e, t, r) {
				if (null == t) return t;
				if (Array.isArray(t))
					for (var n = 0; n < t.length; n++) t[n] = e3(e, t[n], r);
				else if ("object" == typeof t) {
					if ("fallbacks" === e)
						for (var i in t) t[i] = e3(i, t[i], r);
					else
						for (var o in t) t[o] = e3(e + "-" + o, t[o], r)
				} else if ("number" == typeof t && !1 === isNaN(t)) {
					var a = r[e] || e4[e];
					return a && !(0 === t && a === e2) ? "function" == typeof a ? a(t).toString() : "" + t + a : t.toString()
				}
				return t
			}
			var e9 = function(e) {
					void 0 === e && (e = {});
					var t = e8(e);
					return {
						onProcessStyle: function(e, r) {
							if ("style" !== r.type) return e;
							for (var n in e) e[n] = e3(n, e[n], t);
							return e
						},
						onChangeValue: function(e, r) {
							return e3(r, e, t)
						}
					}
				},
				e7 = {
					"background-size": !0,
					"background-position": !0,
					border: !0,
					"border-bottom": !0,
					"border-left": !0,
					"border-top": !0,
					"border-right": !0,
					"border-radius": !0,
					"border-image": !0,
					"border-width": !0,
					"border-style": !0,
					"border-color": !0,
					"box-shadow": !0,
					flex: !0,
					margin: !0,
					padding: !0,
					outline: !0,
					"transform-origin": !0,
					transform: !0,
					transition: !0
				},
				te = {
					position: !0,
					size: !0
				},
				tt = {
					padding: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					},
					margin: {
						top: 0,
						right: 0,
						bottom: 0,
						left: 0
					},
					background: {
						attachment: null,
						color: null,
						image: null,
						position: null,
						repeat: null
					},
					border: {
						width: null,
						style: null,
						color: null
					},
					"border-top": {
						width: null,
						style: null,
						color: null
					},
					"border-right": {
						width: null,
						style: null,
						color: null
					},
					"border-bottom": {
						width: null,
						style: null,
						color: null
					},
					"border-left": {
						width: null,
						style: null,
						color: null
					},
					outline: {
						width: null,
						style: null,
						color: null
					},
					"list-style": {
						type: null,
						position: null,
						image: null
					},
					transition: {
						property: null,
						duration: null,
						"timing-function": null,
						timingFunction: null,
						delay: null
					},
					animation: {
						name: null,
						duration: null,
						"timing-function": null,
						timingFunction: null,
						delay: null,
						"iteration-count": null,
						iterationCount: null,
						direction: null,
						"fill-mode": null,
						fillMode: null,
						"play-state": null,
						playState: null
					},
					"box-shadow": {
						x: 0,
						y: 0,
						blur: 0,
						spread: 0,
						color: null,
						inset: null
					},
					"text-shadow": {
						x: 0,
						y: 0,
						blur: null,
						color: null
					}
				},
				tr = {
					border: {
						radius: "border-radius",
						image: "border-image",
						width: "border-width",
						style: "border-style",
						color: "border-color"
					},
					"border-bottom": {
						width: "border-bottom-width",
						style: "border-bottom-style",
						color: "border-bottom-color"
					},
					"border-top": {
						width: "border-top-width",
						style: "border-top-style",
						color: "border-top-color"
					},
					"border-left": {
						width: "border-left-width",
						style: "border-left-style",
						color: "border-left-color"
					},
					"border-right": {
						width: "border-right-width",
						style: "border-right-style",
						color: "border-right-color"
					},
					background: {
						size: "background-size",
						image: "background-image"
					},
					font: {
						style: "font-style",
						variant: "font-variant",
						weight: "font-weight",
						stretch: "font-stretch",
						size: "font-size",
						family: "font-family",
						lineHeight: "line-height",
						"line-height": "line-height"
					},
					flex: {
						grow: "flex-grow",
						basis: "flex-basis",
						direction: "flex-direction",
						wrap: "flex-wrap",
						flow: "flex-flow",
						shrink: "flex-shrink"
					},
					align: {
						self: "align-self",
						items: "align-items",
						content: "align-content"
					},
					grid: {
						"template-columns": "grid-template-columns",
						templateColumns: "grid-template-columns",
						"template-rows": "grid-template-rows",
						templateRows: "grid-template-rows",
						"template-areas": "grid-template-areas",
						templateAreas: "grid-template-areas",
						template: "grid-template",
						"auto-columns": "grid-auto-columns",
						autoColumns: "grid-auto-columns",
						"auto-rows": "grid-auto-rows",
						autoRows: "grid-auto-rows",
						"auto-flow": "grid-auto-flow",
						autoFlow: "grid-auto-flow",
						row: "grid-row",
						column: "grid-column",
						"row-start": "grid-row-start",
						rowStart: "grid-row-start",
						"row-end": "grid-row-end",
						rowEnd: "grid-row-end",
						"column-start": "grid-column-start",
						columnStart: "grid-column-start",
						"column-end": "grid-column-end",
						columnEnd: "grid-column-end",
						area: "grid-area",
						gap: "grid-gap",
						"row-gap": "grid-row-gap",
						rowGap: "grid-row-gap",
						"column-gap": "grid-column-gap",
						columnGap: "grid-column-gap"
					}
				};

			function tn(e, t, r, n, i) {
				if (!(tt[t] || tr[t])) return [];
				var o = [];
				if (tr[t] && (e = function(e, t, r, n) {
						for (var i in r) {
							var o = r[i];
							if (void 0 !== e[i] && (n || !t.prop(o))) {
								var a, s = ti(((a = {})[o] = e[i], a), t)[o];
								n ? t.style.fallbacks[o] = s : t.style[o] = s
							}
							delete e[i]
						}
						return e
					}(e, r, tr[t], n)), Object.keys(e).length)
					for (var a in tt[t]) {
						if (e[a]) {
							Array.isArray(e[a]) ? o.push(null === te[a] ? e[a] : e[a].join(" ")) : o.push(e[a]);
							continue
						}
						null != tt[t][a] && o.push(tt[t][a])
					}
				return !o.length || i ? o : [o]
			}

			function ti(e, t, r) {
				for (var n in e) {
					var i = e[n];
					if (Array.isArray(i)) {
						if (!Array.isArray(i[0])) {
							if ("fallbacks" === n) {
								for (var o = 0; o < e.fallbacks.length; o++) e.fallbacks[o] = ti(e.fallbacks[o], t, !0);
								continue
							}
							e[n] = function e(t, r, n, i) {
								return null == n[r] ? t : 0 === t.length ? [] : Array.isArray(t[0]) ? e(t[0], r, n, i) : "object" == typeof t[0] ? t.map(function(e) {
									return tn(e, r, i, !1, !0)
								}) : [t]
							}(i, n, e7, t), e[n].length || delete e[n]
						}
					} else if ("object" == typeof i) {
						if ("fallbacks" === n) {
							e.fallbacks = ti(e.fallbacks, t, !0);
							continue
						}
						e[n] = tn(i, n, t, r), e[n].length || delete e[n]
					} else "" === e[n] && delete e[n]
				}
				return e
			}
			var to = r(19799),
				ta = "",
				ts = "",
				tu = "",
				tc = "",
				tl = E && "ontouchstart" in document.documentElement;
			if (E) {
				var td = {
						Moz: "-moz-",
						ms: "-ms-",
						O: "-o-",
						Webkit: "-webkit-"
					},
					tf = document.createElement("p").style;
				for (var tp in td)
					if (tp + "Transform" in tf) {
						ta = tp, ts = td[tp];
						break
					}
				"Webkit" === ta && "msHyphens" in tf && (ta = "ms", ts = td.ms, tc = "edge"), "Webkit" === ta && "-apple-trailing-word" in tf && (tu = "apple")
			}
			var th = {
					js: ta,
					css: ts,
					vendor: tu,
					browser: tc,
					isTouch: tl
				},
				ty = /[-\s]+(.)?/g;

			function tm(e, t) {
				return t ? t.toUpperCase() : ""
			}

			function tg(e) {
				return e.replace(ty, tm)
			}

			function tv(e) {
				return tg("-" + e)
			}
			var tw = {
					"flex-grow": "flex-positive",
					"flex-shrink": "flex-negative",
					"flex-basis": "flex-preferred-size",
					"justify-content": "flex-pack",
					order: "flex-order",
					"align-items": "flex-align",
					"align-content": "flex-line-pack"
				},
				tb = {
					flex: "box-flex",
					"flex-grow": "box-flex",
					"flex-direction": ["box-orient", "box-direction"],
					order: "box-ordinal-group",
					"align-items": "box-align",
					"flex-flow": ["box-orient", "box-direction"],
					"justify-content": "box-pack"
				},
				tE = Object.keys(tb),
				tS = function(e) {
					return th.css + e
				},
				tA = [{
					noPrefill: ["appearance"],
					supportedProperty: function(e) {
						return "appearance" === e && ("ms" === th.js ? "-webkit-" + e : th.css + e)
					}
				}, {
					noPrefill: ["color-adjust"],
					supportedProperty: function(e) {
						return "color-adjust" === e && ("Webkit" === th.js ? th.css + "print-" + e : e)
					}
				}, {
					noPrefill: ["mask"],
					supportedProperty: function(e, t) {
						if (!/^mask/.test(e)) return !1;
						if ("Webkit" === th.js) {
							var r = "mask-image";
							if (tg(r) in t) return e;
							if (th.js + tv(r) in t) return th.css + e
						}
						return e
					}
				}, {
					noPrefill: ["text-orientation"],
					supportedProperty: function(e) {
						return "text-orientation" === e && ("apple" !== th.vendor || th.isTouch ? e : th.css + e)
					}
				}, {
					noPrefill: ["transform"],
					supportedProperty: function(e, t, r) {
						return "transform" === e && (r.transform ? e : th.css + e)
					}
				}, {
					noPrefill: ["transition"],
					supportedProperty: function(e, t, r) {
						return "transition" === e && (r.transition ? e : th.css + e)
					}
				}, {
					noPrefill: ["writing-mode"],
					supportedProperty: function(e) {
						return "writing-mode" === e && ("Webkit" === th.js || "ms" === th.js && "edge" !== th.browser ? th.css + e : e)
					}
				}, {
					noPrefill: ["user-select"],
					supportedProperty: function(e) {
						return "user-select" === e && ("Moz" === th.js || "ms" === th.js || "apple" === th.vendor ? th.css + e : e)
					}
				}, {
					supportedProperty: function(e, t) {
						return !!/^break-/.test(e) && ("Webkit" === th.js ? "WebkitColumn" + tv(e) in t && th.css + "column-" + e : "Moz" === th.js && "page" + tv(e) in t && "page-" + e)
					}
				}, {
					supportedProperty: function(e, t) {
						if (!/^(border|margin|padding)-inline/.test(e)) return !1;
						if ("Moz" === th.js) return e;
						var r = e.replace("-inline", "");
						return th.js + tv(r) in t && th.css + r
					}
				}, {
					supportedProperty: function(e, t) {
						return tg(e) in t && e
					}
				}, {
					supportedProperty: function(e, t) {
						var r = tv(e);
						return "-" === e[0] || "-" === e[0] && "-" === e[1] ? e : th.js + r in t ? th.css + e : "Webkit" !== th.js && "Webkit" + r in t && "-webkit-" + e
					}
				}, {
					supportedProperty: function(e) {
						return "scroll-snap" === e.substring(0, 11) && ("ms" === th.js ? "" + th.css + e : e)
					}
				}, {
					supportedProperty: function(e) {
						return "overscroll-behavior" === e && ("ms" === th.js ? th.css + "scroll-chaining" : e)
					}
				}, {
					supportedProperty: function(e, t) {
						var r = tw[e];
						return !!r && th.js + tv(r) in t && th.css + r
					}
				}, {
					supportedProperty: function(e, t, r) {
						var n = r.multiple;
						if (tE.indexOf(e) > -1) {
							var i = tb[e];
							if (!Array.isArray(i)) return th.js + tv(i) in t && th.css + i;
							if (!n) return !1;
							for (var o = 0; o < i.length; o++)
								if (!(th.js + tv(i[0]) in t)) return !1;
							return i.map(tS)
						}
						return !1
					}
				}],
				tx = tA.filter(function(e) {
					return e.supportedProperty
				}).map(function(e) {
					return e.supportedProperty
				}),
				tP = tA.filter(function(e) {
					return e.noPrefill
				}).reduce(function(e, t) {
					return e.push.apply(e, (0, to.Z)(t.noPrefill)), e
				}, []),
				tk = {};
			if (E) {
				i = document.createElement("p");
				var t_ = window.getComputedStyle(document.documentElement, "");
				for (var tC in t_) isNaN(tC) || (tk[t_[tC]] = t_[tC]);
				tP.forEach(function(e) {
					return delete tk[e]
				})
			}

			function tR(e, t) {
				if (void 0 === t && (t = {}), !i) return e;
				if (null != tk[e]) return tk[e];
				("transition" === e || "transform" === e) && (t[e] = e in i.style);
				for (var r = 0; r < tx.length && (tk[e] = tx[r](e, i.style, t), !tk[e]); r++);
				try {
					i.style[e] = ""
				} catch (e) {
					return !1
				}
				return tk[e]
			}
			var tH = {},
				tO = {
					transition: 1,
					"transition-property": 1,
					"-webkit-transition": 1,
					"-webkit-transition-property": 1
				},
				tT = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;

			function tj(e, t, r) {
				return "var" === t ? "var" : "all" === t ? "all" : "all" === r ? ", all" : (t ? tR(t) : ", " + tR(r)) || t || r
			}

			function tW(e, t) {
				var r = t;
				if (!o || "content" === e) return t;
				if ("string" != typeof r || !isNaN(parseInt(r, 10))) return r;
				var n = e + r;
				if (null != tH[n]) return tH[n];
				try {
					o.style[e] = r
				} catch (e) {
					return tH[n] = !1, !1
				}
				if (tO[e]) r = r.replace(tT, tj);
				else if ("" === o.style[e] && ("-ms-flex" === (r = th.css + r) && (o.style[e] = "-ms-flexbox"), o.style[e] = r, "" === o.style[e])) return tH[n] = !1, !1;
				return o.style[e] = "", tH[n] = r, tH[n]
			}
			E && (o = document.createElement("p"));
			var tM = function() {
					var e = function(e, t) {
						return e.length === t.length ? e > t ? 1 : -1 : e.length - t.length
					};
					return {
						onProcessStyle: function(t, r) {
							if ("style" !== r.type) return t;
							for (var n = {}, i = Object.keys(t).sort(e), o = 0; o < i.length; o++) n[i[o]] = t[i[o]];
							return n
						}
					}
				},
				tK = function(e) {
					var t;
					return void 0 === e && (e = {}), {
						plugins: [{
							onCreateRule: function(e, t, r) {
								if ("function" != typeof t) return null;
								var n = H(e, {}, r);
								return n[ej] = t, n
							},
							onProcessStyle: function(e, t) {
								if (eT in t || ej in t) return e;
								var r = {};
								for (var n in e) {
									var i = e[n];
									"function" == typeof i && (delete e[n], r[n] = i)
								}
								return t[eT] = r, e
							},
							onUpdate: function(e, t, r, n) {
								var i = t,
									o = i[ej];
								o && (i.style = o(e) || {});
								var a = i[eT];
								if (a)
									for (var s in a) i.prop(s, a[s](e), n)
							}
						}, (t = e.observable, {
							onCreateRule: function(e, r, n) {
								if (!eM(r)) return null;
								var i = H(e, {}, n);
								return r.subscribe(function(e) {
									for (var r in e) i.prop(r, e[r], t)
								}), i
							},
							onProcessRule: function(e) {
								if (!e || "style" === e.type) {
									var r = e.style,
										n = function(n) {
											var i = r[n];
											if (!eM(i)) return "continue";
											delete r[n], i.subscribe({
												next: function(r) {
													e.prop(n, r, t)
												}
											})
										};
									for (var i in r)
										if ("continue" === n(i)) continue
								}
							}
						}), {
							onProcessRule: eI
						}, {
							onCreateRule: function(e, t, r) {
								if (!e) return null;
								if (e === eJ) return new eU(e, t, r);
								if ("@" === e[0] && e.substr(0, eN.length) === eN) return new eF(e, t, r);
								var n = r.parent;
								return n && ("global" === n.type || n.options.parent && "global" === n.options.parent.type) && (r.scoped = !1), r.selector || !1 !== r.scoped || (r.selector = e), null
							},
							onProcessRule: function(e, t) {
								"style" === e.type && t && (function(e, t) {
									var r = e.options,
										n = e.style,
										i = n ? n[eJ] : null;
									if (i) {
										for (var o in i) t.addRule(o, i[o], (0, d.Z)({}, r, {
											selector: e$(o, e.selector)
										}));
										delete n[eJ]
									}
								}(e, t), function(e, t) {
									var r = e.options,
										n = e.style;
									for (var i in n)
										if ("@" === i[0] && i.substr(0, eJ.length) === eJ) {
											var o = e$(i.substr(eJ.length), e.selector);
											t.addRule(o, n[i], (0, d.Z)({}, r, {
												selector: o
											})), delete n[i]
										}
								}(e, t))
							}
						}, {
							onProcessStyle: function(e, t, r) {
								return "extend" in e ? function e(t, r, n, i) {
									return void 0 === i && (i = {}),
										function(t, r, n, i) {
											if ("string" == typeof t.extend) {
												if (!n) return;
												var o = n.getRule(t.extend);
												if (!o || o === r) return;
												var a = o.options.parent;
												a && e(a.rules.raw[t.extend], r, n, i);
												return
											}
											if (Array.isArray(t.extend)) {
												for (var s = 0; s < t.extend.length; s++) {
													var u = t.extend[s];
													e("string" == typeof u ? (0, d.Z)({}, t, {
														extend: u
													}) : t.extend[s], r, n, i)
												}
												return
											}
											for (var c in t.extend) {
												if ("extend" === c) {
													e(t.extend.extend, r, n, i);
													continue
												}
												if (ez(t.extend[c])) {
													c in i || (i[c] = {}), e(t.extend[c], r, n, i[c]);
													continue
												}
												i[c] = t.extend[c]
											}
										}(t, r, n, i),
										function(t, r, n, i) {
											for (var o in t)
												if ("extend" !== o) {
													if (ez(i[o]) && ez(t[o])) {
														e(t[o], r, n, i[o]);
														continue
													}
													if (ez(t[o])) {
														i[o] = e(t[o], r, n);
														continue
													}
													i[o] = t[o]
												}
										}(t, r, n, i), i
								}(e, t, r) : e
							},
							onChangeValue: function(e, t, r) {
								if ("extend" !== t) return e;
								if (null == e || !1 === e) {
									for (var n in r[eB]) r.prop(n, null);
									return r[eB] = null, null
								}
								if ("object" == typeof e) {
									for (var i in e) r.prop(i, e[i]);
									r[eB] = e
								}
								return null
							}
						}, {
							onProcessStyle: function(e, t, r) {
								if ("style" !== t.type) return e;
								var n, i, o = t.options.parent;
								for (var a in e) {
									var s = -1 !== a.indexOf("&"),
										u = "@" === a[0];
									if (s || u) {
										if (n = function(e, t, r) {
												if (r) return (0, d.Z)({}, r, {
													index: r.index + 1
												});
												var n = e.options.nestingLevel;
												n = void 0 === n ? 1 : n + 1;
												var i = (0, d.Z)({}, e.options, {
													nestingLevel: n,
													index: t.indexOf(e) + 1
												});
												return delete i.name, i
											}(t, o, n), s) {
											var c = function(e, t) {
												for (var r = t.split(eG), n = e.split(eG), i = "", o = 0; o < r.length; o++)
													for (var a = r[o], s = 0; s < n.length; s++) {
														var u = n[s];
														i && (i += ", "), i += -1 !== u.indexOf("&") ? u.replace(eV, a) : a + " " + u
													}
												return i
											}(a, t.selector);
											i || (i = function(e, t) {
												return function(r, n) {
													var i = e.getRule(n) || t && t.getRule(n);
													return i ? i.selector : n
												}
											}(o, r)), c = c.replace(eZ, i);
											var l = t.key + "-" + a;
											"replaceRule" in o ? o.replaceRule(l, e[a], (0, d.Z)({}, n, {
												selector: c
											})) : o.addRule(l, e[a], (0, d.Z)({}, n, {
												selector: c
											}))
										} else u && o.addRule(a, {}, n).addRule(t.key, e[a], {
											selector: t.selector
										});
										delete e[a]
									}
								}
								return e
							}
						}, {
							onProcessStyle: function(e, t) {
								return "composes" in e && (function e(t, r) {
									if (!r) return !0;
									if (Array.isArray(r)) {
										for (var n = 0; n < r.length; n++)
											if (!e(t, r[n])) return !1;
										return !0
									}
									if (r.indexOf(" ") > -1) return e(t, r.split(" "));
									var i = t.options.parent;
									if ("$" === r[0]) {
										var o = i.getRule(r.substr(1));
										return !!o && o !== t && (i.classes[t.key] += " " + i.classes[o.key], !0)
									}
									return i.classes[t.key] += " " + r, !0
								}(t, e.composes), delete e.composes), e
							}
						}, {
							onProcessStyle: function(e) {
								if (Array.isArray(e)) {
									for (var t = 0; t < e.length; t++) e[t] = e1(e[t]);
									return e
								}
								return e1(e)
							},
							onChangeValue: function(e, t, r) {
								if (0 === t.indexOf("--")) return e;
								var n = e0(t);
								return t === n ? e : (r.prop(n, e), null)
							}
						}, e9(e.defaultUnit), {
							onProcessStyle: function(e, t) {
								if (!e || "style" !== t.type) return e;
								if (Array.isArray(e)) {
									for (var r = 0; r < e.length; r++) e[r] = ti(e[r], t);
									return e
								}
								return ti(e, t)
							}
						}, {
							onProcessRule: function(e) {
								if ("keyframes" === e.type) {
									var t, r = e;
									r.at = "-" === (t = r.at)[1] || "ms" === th.js ? t : "@" + th.css + "keyframes" + t.substr(10)
								}
							},
							onProcessStyle: function(e, t) {
								return "style" !== t.type ? e : function e(t) {
									for (var r in t) {
										var n = t[r];
										if ("fallbacks" === r && Array.isArray(n)) {
											t[r] = n.map(e);
											continue
										}
										var i = !1,
											o = tR(r);
										o && o !== r && (i = !0);
										var a = !1,
											s = tW(o, T(n));
										s && s !== n && (a = !0), (i || a) && (i && delete t[r], t[o || r] = s || n)
									}
									return t
								}(e)
							},
							onChangeValue: function(e, t) {
								return tW(t, T(e)) || e
							}
						}, tM()]
					}
				},
				tD = eC(tK()),
				tI = function(e) {
					void 0 === e && (e = tD);
					var t, r = new Map,
						n = 0,
						i = function() {
							return (!t || t.rules.index.length > 1e4) && (t = e.createStyleSheet().attach()), t
						};

					function o() {
						var e = arguments,
							t = JSON.stringify(e),
							o = r.get(t);
						if (o) return o.className;
						var a = [];
						for (var s in e) {
							var u = e[s];
							if (!Array.isArray(u)) {
								a.push(u);
								continue
							}
							for (var c = 0; c < u.length; c++) a.push(u[c])
						}
						for (var l = {}, d = [], f = 0; f < a.length; f++) {
							var p = a[f];
							if (p) {
								var h = p;
								if ("string" == typeof p) {
									var y = r.get(p);
									y && (y.labels.length && d.push.apply(d, y.labels), h = y.style)
								}
								h.label && -1 === d.indexOf(h.label) && d.push(h.label), Object.assign(l, h)
							}
						}
						delete l.label;
						var m = (0 === d.length ? "css" : d.join("-")) + "-" + n++;
						i().addRule(m, l);
						var g = i().classes[m],
							v = {
								style: l,
								labels: d,
								className: g
							};
						return r.set(t, v), r.set(g, v), g
					}
					return o.getSheet = i, o
				}(),
				tJ = Number.MIN_SAFE_INTEGER || -1e9,
				tN = (0, s.createContext)({
					classNamePrefix: "",
					disableStylesGeneration: !1,
					isSSR: !E
				}),
				tU = new Map,
				tF = function(e, t) {
					var r = e.managers;
					if (r) return r[t] || (r[t] = new eR), r[t];
					var n = tU.get(t);
					return n || (n = new eR, tU.set(t, n)), n
				},
				tL = function(e) {
					var t = e.sheet,
						r = e.context,
						n = e.index,
						i = e.theme;
					t && (tF(r, n).manage(i), r.registry && r.registry.add(t))
				},
				t$ = function(e) {
					e.sheet && tF(e.context, e.index).unmanage(e.theme)
				},
				tz = eC(tK()),
				tB = new WeakMap,
				tG = function(e) {
					return tB.get(e)
				},
				tV = function(e, t) {
					tB.set(e, t)
				},
				tZ = function(e) {
					var t = e.styles;
					return "function" != typeof t ? t : t(e.theme)
				},
				tY = function(e) {
					if (!e.context.disableStylesGeneration) {
						var t, r, n, i = tF(e.context, e.index),
							o = i.get(e.theme);
						if (o) return o;
						var a = e.context.jss || tz,
							s = tZ(e),
							u = function e(t) {
								var r = null;
								for (var n in t) {
									var i = t[n],
										o = typeof i;
									if ("function" === o) r || (r = {}), r[n] = i;
									else if ("object" === o && null !== i && !Array.isArray(i)) {
										var a = e(i);
										a && (r || (r = {}), r[n] = a)
									}
								}
								return r
							}(s),
							c = a.createStyleSheet(s, (e.context.id && null != e.context.id.minify && (t = e.context.id.minify), r = e.context.classNamePrefix || "", e.name && !t && (r += e.name.replace(/\s/g, "-") + "-"), n = "", e.name && (n = e.name + ", "), n += "function" == typeof e.styles ? "Themed" : "Unthemed", (0, d.Z)({}, e.sheetOptions, {
								index: e.index,
								meta: n,
								classNamePrefix: r,
								link: null !== u,
								generateId: e.sheetOptions && e.sheetOptions.generateId ? e.sheetOptions.generateId : e.context.generateId
							})));
						return tV(c, {
							dynamicStyles: u,
							styles: s
						}), i.add(e.theme, c), c
					}
				},
				tq = function(e, t) {
					for (var r in t) e.deleteRule(t[r])
				},
				tX = function(e, t, r) {
					for (var n in r) t.updateOne(r[n], e)
				},
				tQ = function(e, t) {
					var r = tG(e);
					if (r) {
						var n = {};
						for (var i in r.dynamicStyles)
							for (var o = e.rules.index.length, a = e.addRule(i, r.dynamicStyles[i]), s = o; s < e.rules.index.length; s++) {
								var u = e.rules.index[s];
								e.updateOne(u, t), n[a === u ? i : u.key] = u
							}
						return n
					}
				},
				t0 = function(e, t) {
					if (!t) return e.classes;
					var r = tG(e);
					if (!r) return e.classes;
					var n = {};
					for (var i in r.styles) n[i] = e.classes[i], i in t && (n[i] += " " + e.classes[t[i].key]);
					return n
				};

			function t1(e) {
				return e ? s.useEffect : s.useInsertionEffect || s.useLayoutEffect
			}
			var t2 = {},
				t6 = function(e, t) {
					void 0 === t && (t = {});
					var r = t,
						n = r.index,
						i = void 0 === n ? tJ++ : n,
						o = r.theming,
						a = r.name,
						u = (0, f.Z)(r, ["index", "theming", "name"]),
						c = o && o.context || v,
						l = {};
					return function(t) {
						var r, n = (0, s.useRef)(!0),
							o = (0, s.useContext)(tN),
							d = (r = t && t.theme, "function" == typeof e && (r || (0, s.useContext)(c)) || t2),
							f = (0, s.useMemo)(function() {
								var r = tY({
									context: o,
									styles: e,
									name: a,
									theme: d,
									index: i,
									sheetOptions: u
								});
								return r && o.isSSR && tL({
									index: i,
									context: o,
									sheet: r,
									theme: d
								}), [r, r ? tQ(r, t) : null]
							}, [o, d]),
							p = f[0],
							h = f[1];
						t1(o.isSSR)(function() {
							p && h && !n.current && tX(t, p, h)
						}, [t]), t1(o.isSSR)(function() {
							return p && tL({
									index: i,
									context: o,
									sheet: p,
									theme: d
								}),
								function() {
									p && (t$({
										index: i,
										context: o,
										sheet: p,
										theme: d
									}), h && tq(p, h))
								}
						}, [p]);
						var y = (0, s.useMemo)(function() {
							return p && h ? t0(p, h) : l
						}, [p, h]);
						return (0, s.useDebugValue)(y), (0, s.useDebugValue)(d === t2 ? "No theme" : d), (0, s.useEffect)(function() {
							n.current = !1
						}), y
					}
				};
			Symbol("react-jss-styled"), void 0 === n && (n = tI);
			var t5 = r(59854),
				t8 = r.n(t5),
				t4 = r(18446),
				t3 = r.n(t4),
				t9 = function() {
					return (t9 = Object.assign || function(e) {
						for (var t, r = 1, n = arguments.length; r < n; r++)
							for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
						return e
					}).apply(this, arguments)
				},
				t7 = function(e, t, r, n, i) {
					return (e - t) * (i - n) / (r - t) + n
				},
				re = function(e, t) {
					var r = e + t;
					return r > 360 ? r - 360 : r
				},
				rt = function() {
					return Math.random() > .5
				},
				rr = [0, 0, 1],
				rn = [
					[1, 1, 0],
					[1, 0, 1],
					[0, 1, 1],
					[1, 0, 0],
					[0, 1, 0], rr
				],
				ri = rn.reduce(function(e, t, r) {
					var n;
					return t9(t9({}, e), ((n = {})["@keyframes rotation-".concat(r)] = {
						"50%": {
							transform: "rotate3d(".concat(t.map(function(e) {
								return e / 2
							}).join(), ", 180deg)")
						},
						"100%": {
							transform: "rotate3d(".concat(t.join(), ", 360deg)")
						}
					}, n))
				}, {}),
				ro = function(e, t, r) {
					var n = e.reduce(function(e, t, n) {
						var i, o = t7(Math.abs(re(t, 90) - 180), 0, 180, -r / 2, r / 2);
						return t9(t9({}, e), ((i = {})["@keyframes x-axis-".concat(n)] = {
							to: {
								transform: "translateX(".concat(o, "px)")
							}
						}, i))
					}, {});
					return t9({
						"@keyframes y-axis": {
							to: {
								transform: "translateY(".concat("string" == typeof t ? t : "".concat(t, "px"), ")")
							}
						}
					}, n)
				},
				ra = function(e, t, r, n, i) {
					var o, a = Math.round(Math.random() * (rn.length - 1)),
						s = t - Math.round(1e3 * Math.random()),
						u = !t3()(rn[a], rr) && rt(),
						c = .1 > Math.random() ? t8()(.25 * Math.random(), 2) : 0,
						l = t8()(Math.abs(t7(Math.abs(re(e.degree, 90) - 180), 0, 180, -1, 1)), 4),
						d = t8()(.5 * Math.random(), 4),
						f = t8()(Math.random() * r * (rt() ? 1 : -1), 4),
						p = t8()(Math.max(t7(Math.abs(e.degree - 180), 0, 180, r, -r), 0), 4);
					return (o = {})["&#confetti-particle-".concat(i)] = {
						animation: "$x-axis-".concat(i, " ").concat(s, "ms forwards cubic-bezier(").concat(c, ", ").concat(-1 * c, ", ").concat(c, ", ").concat(l, ")"),
						"& > div": {
							width: u ? n : Math.round(4 * Math.random()) + n / 2,
							height: u ? n : Math.round(2 * Math.random()) + n,
							animation: "$y-axis ".concat(s, "ms forwards cubic-bezier(").concat(d, ", ").concat(f, ", ").concat(.5, ", ").concat(p, ")"),
							"&:after": t9({
								backgroundColor: e.color,
								animation: "$rotation-".concat(a, " ").concat(Math.round(600 * Math.random() + 200), "ms infinite linear")
							}, u ? {
								borderRadius: "50%"
							} : {})
						}
					}, o
				},
				rs = function(e) {
					var t = e.particles,
						r = e.duration,
						n = e.height,
						i = e.width,
						o = e.force,
						a = e.particleSize,
						s = t.reduce(function(e, t, n) {
							return t9(t9({}, e), ra(t, r, o, a, n))
						}, {});
					return t6(t9(t9(t9({}, ri), ro(t.map(function(e) {
						return e.degree
					}), n, i)), {
						container: {
							width: 0,
							height: 0,
							position: "relative"
						},
						screen: {
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							overflow: "hidden",
							pointerEvents: "none"
						},
						particle: t9(t9({}, s), {
							"& > div": {
								position: "absolute",
								left: 0,
								top: 0,
								"&:after": {
									content: "''",
									display: "block",
									width: "100%",
									height: "100%"
								}
							}
						})
					}), {
						name: "confetti-explosion"
					})
				},
				ru = ["#FFC700", "#FF0000", "#2E3191", "#41BBC7"],
				rc = function(e, t) {
					var r = 360 / e;
					return c()(e).map(function(e) {
						return {
							color: t[e % t.length],
							degree: r * e
						}
					})
				};

			function rl(e) {
				var t = e.particleCount,
					r = e.duration,
					n = e.colors,
					i = e.particleSize,
					o = e.force,
					u = e.height,
					c = e.width,
					d = function(e, t) {
						var r = {};
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
						if (null != e && "function" == typeof Object.getOwnPropertySymbols)
							for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
						return r
					}(e, ["particleCount", "duration", "colors", "particleSize", "force", "height", "width"]),
					f = s.useState(),
					p = f[0],
					h = f[1],
					y = rc(void 0 === t ? 100 : t, void 0 === n ? ru : n),
					m = rs({
						particles: y,
						duration: void 0 === r ? 2200 : r,
						particleSize: void 0 === i ? 12 : i,
						force: void 0 === o ? .5 : o,
						width: void 0 === c ? 1e3 : c,
						height: void 0 === u ? "150vh" : u
					})(),
					g = s.useCallback(function(e) {
						if (e) {
							var t = e.getBoundingClientRect();
							h({
								top: t.top,
								left: t.left
							})
						}
					}, []);
				return (0, a.jsx)("div", t9({
					ref: g,
					className: m.container
				}, d, {
					children: p && (0, l.createPortal)((0, a.jsx)("div", t9({
						className: m.screen
					}, {
						children: (0, a.jsx)("div", t9({
							style: {
								position: "absolute",
								top: p.top,
								left: p.left
							}
						}, {
							children: y.map(function(e, t) {
								return (0, a.jsx)("div", t9({
									id: "confetti-particle-".concat(t),
									className: m.particle
								}, {
									children: (0, a.jsx)("div", {})
								}), e.degree)
							})
						}))
					})), document.body)
				}))
			}
		},
		11914: function(e, t) {},
		69921: function(e, t) {
			"use strict";
			/** @license React v16.13.1
			 * react-is.production.min.js
			 *
			 * Copyright (c) Facebook, Inc. and its affiliates.
			 *
			 * This source code is licensed under the MIT license found in the
			 * LICENSE file in the root directory of this source tree.
			 */
			var r = "function" == typeof Symbol && Symbol.for,
				n = r ? Symbol.for("react.element") : 60103,
				i = r ? Symbol.for("react.portal") : 60106,
				o = r ? Symbol.for("react.fragment") : 60107,
				a = r ? Symbol.for("react.strict_mode") : 60108,
				s = r ? Symbol.for("react.profiler") : 60114,
				u = r ? Symbol.for("react.provider") : 60109,
				c = r ? Symbol.for("react.context") : 60110,
				l = r ? Symbol.for("react.async_mode") : 60111,
				d = r ? Symbol.for("react.concurrent_mode") : 60111,
				f = r ? Symbol.for("react.forward_ref") : 60112,
				p = r ? Symbol.for("react.suspense") : 60113,
				h = r ? Symbol.for("react.suspense_list") : 60120,
				y = r ? Symbol.for("react.memo") : 60115,
				m = r ? Symbol.for("react.lazy") : 60116,
				g = r ? Symbol.for("react.block") : 60121,
				v = r ? Symbol.for("react.fundamental") : 60117,
				w = r ? Symbol.for("react.responder") : 60118,
				b = r ? Symbol.for("react.scope") : 60119;

			function E(e) {
				if ("object" == typeof e && null !== e) {
					var t = e.$$typeof;
					switch (t) {
						case n:
							switch (e = e.type) {
								case l:
								case d:
								case o:
								case s:
								case a:
								case p:
									return e;
								default:
									switch (e = e && e.$$typeof) {
										case c:
										case f:
										case m:
										case y:
										case u:
											return e;
										default:
											return t
									}
							}
						case i:
							return t
					}
				}
			}

			function S(e) {
				return E(e) === d
			}
			t.AsyncMode = l, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = u, t.Element = n, t.ForwardRef = f, t.Fragment = o, t.Lazy = m, t.Memo = y, t.Portal = i, t.Profiler = s, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
				return S(e) || E(e) === l
			}, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
				return E(e) === c
			}, t.isContextProvider = function(e) {
				return E(e) === u
			}, t.isElement = function(e) {
				return "object" == typeof e && null !== e && e.$$typeof === n
			}, t.isForwardRef = function(e) {
				return E(e) === f
			}, t.isFragment = function(e) {
				return E(e) === o
			}, t.isLazy = function(e) {
				return E(e) === m
			}, t.isMemo = function(e) {
				return E(e) === y
			}, t.isPortal = function(e) {
				return E(e) === i
			}, t.isProfiler = function(e) {
				return E(e) === s
			}, t.isStrictMode = function(e) {
				return E(e) === a
			}, t.isSuspense = function(e) {
				return E(e) === p
			}, t.isValidElementType = function(e) {
				return "string" == typeof e || "function" == typeof e || e === o || e === d || e === s || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === y || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || e.$$typeof === v || e.$$typeof === w || e.$$typeof === b || e.$$typeof === g)
			}, t.typeOf = E
		},
		59864: function(e, t, r) {
			"use strict";
			e.exports = r(69921)
		},
		93463: function(e, t, r) {
			"use strict";
			r.d(t, {
				Z: function() {
					return w
				}
			});
			var n = r(87462),
				i = r(63366),
				o = r(67294),
				a = o.useLayoutEffect,
				s = function(e) {
					var t = o.useRef(e);
					return a(function() {
						t.current = e
					}), t
				},
				u = function(e, t) {
					if ("function" == typeof e) {
						e(t);
						return
					}
					e.current = t
				},
				c = function(e, t) {
					var r = (0, o.useRef)();
					return (0, o.useCallback)(function(n) {
						e.current = n, r.current && u(r.current, null), r.current = t, t && u(t, n)
					}, [t])
				},
				l = {
					"min-height": "0",
					"max-height": "none",
					height: "0",
					visibility: "hidden",
					overflow: "hidden",
					position: "absolute",
					"z-index": "-1000",
					top: "0",
					right: "0"
				},
				d = function(e) {
					Object.keys(l).forEach(function(t) {
						e.style.setProperty(t, l[t], "important")
					})
				},
				f = null,
				p = function(e, t) {
					var r = e.scrollHeight;
					return "border-box" === t.sizingStyle.boxSizing ? r + t.borderSize : r - t.paddingSize
				},
				h = function() {},
				y = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
				m = !!document.documentElement.currentStyle,
				g = function(e) {
					var t = window.getComputedStyle(e);
					if (null === t) return null;
					var r = y.reduce(function(e, r) {
							return e[r] = t[r], e
						}, {}),
						n = r.boxSizing;
					if ("" === n) return null;
					m && "border-box" === n && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
					var i = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
						o = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
					return {
						sizingStyle: r,
						paddingSize: i,
						borderSize: o
					}
				},
				v = function(e) {
					var t = s(e);
					(0, o.useLayoutEffect)(function() {
						var e = function(e) {
							t.current(e)
						};
						return window.addEventListener("resize", e),
							function() {
								window.removeEventListener("resize", e)
							}
					}, [])
				},
				w = (0, o.forwardRef)(function(e, t) {
					var r = e.cacheMeasurements,
						a = e.maxRows,
						s = e.minRows,
						u = e.onChange,
						l = void 0 === u ? h : u,
						y = e.onHeightChange,
						m = void 0 === y ? h : y,
						w = (0, i.Z)(e, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]),
						b = void 0 !== w.value,
						E = (0, o.useRef)(null),
						S = c(E, t),
						A = (0, o.useRef)(0),
						x = (0, o.useRef)(),
						P = function() {
							var e, t, n, i, o, u, c, l, h, y, v, w = E.current,
								b = r && x.current ? x.current : g(w);
							if (b) {
								x.current = b;
								var S = (e = w.value || w.placeholder || "x", void 0 === (t = s) && (t = 1), void 0 === (n = a) && (n = 1 / 0), f || ((f = document.createElement("textarea")).setAttribute("tabindex", "-1"), f.setAttribute("aria-hidden", "true"), d(f)), null === f.parentNode && document.body.appendChild(f), i = b.paddingSize, o = b.borderSize, c = (u = b.sizingStyle).boxSizing, Object.keys(u).forEach(function(e) {
										f.style[e] = u[e]
									}), d(f), f.value = e, l = p(f, b), f.value = "x", y = (h = f.scrollHeight - i) * t, "border-box" === c && (y = y + i + o), l = Math.max(y, l), v = h * n, "border-box" === c && (v = v + i + o), [l = Math.min(v, l), h]),
									P = S[0],
									k = S[1];
								A.current !== P && (A.current = P, w.style.setProperty("height", P + "px", "important"), m(P, {
									rowHeight: k
								}))
							}
						};
					return (0, o.useLayoutEffect)(P), v(P), (0, o.createElement)("textarea", (0, n.Z)({}, w, {
						onChange: function(e) {
							b || P(), l(e)
						},
						ref: S
					}))
				})
		},
		98123: function(e, t, r) {
			"use strict";
			r.d(t, {
				Z: function() {
					return a
				}
			}), e = r.hmd(e);
			var n, i, o, a = ("function" == typeof(i = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : e).Symbol) ? i.observable ? n = i.observable : (n = i("observable"), i.observable = n) : n = "@@observable", n)
		},
		906: function(e, t, r) {
			"use strict";
			r.d(t, {
				Z: function() {
					return o
				}
			});
			var n = r(67294),
				i = {};

			function o(e, t) {
				if (void 0 === t && (t = void 0 !== r.g && r.g.localStorage ? r.g.localStorage : "undefined" != typeof globalThis && globalThis.localStorage ? globalThis.localStorage : "undefined" != typeof window && window.localStorage ? window.localStorage : "undefined" != typeof localStorage ? localStorage : null), t) {
					var o, a = (o = t, {
						get: function(e, t) {
							var r = o.getItem(e);
							return null == r ? "function" == typeof t ? t() : t : JSON.parse(r)
						},
						set: function(e, t) {
							o.setItem(e, JSON.stringify(t))
						}
					});
					return function(t) {
						var o, s, u, c, l, d, f, p, h, y, m, g, v, w, b;
						return o = a.get, s = a.set, u = (0, n.useRef)(null), l = (c = (0, n.useState)(function() {
							return o(e, t)
						}))[0], d = c[1], f = "storage", p = function(t) {
							if (t.key === e) {
								var r = JSON.parse(t.newValue);
								l !== r && d(r)
							}
						}, void 0 === h && (h = r.g), void 0 === y && (y = {}), m = (0, n.useRef)(), g = y.capture, v = y.passive, w = y.once, (0, n.useEffect)(function() {
							m.current = p
						}, [p]), (0, n.useEffect)(function() {
							if (h && h.addEventListener) {
								var e = function(e) {
										return m.current(e)
									},
									t = {
										capture: g,
										passive: v,
										once: w
									};
								return h.addEventListener(f, e, t),
									function() {
										h.removeEventListener(f, e, t)
									}
							}
						}, [f, h, g, v, w]), (0, n.useEffect)(function() {
							return u.current = (i[e] || (i[e] = {
									callbacks: [],
									value: t
								}), i[e].callbacks.push(d), {
									deregister: function() {
										var t = i[e].callbacks,
											r = t.indexOf(d);
										r > -1 && t.splice(r, 1)
									},
									emit: function(t) {
										i[e].value !== t && (i[e].value = t, i[e].callbacks.forEach(function(e) {
											d !== e && e(t)
										}))
									}
								}),
								function() {
									u.current.deregister()
								}
						}, [t, e]), b = (0, n.useCallback)(function(t) {
							var r = "function" == typeof t ? t(l) : t;
							s(e, r), d(r), u.current.emit(t)
						}, [l, s, e]), [l, b]
					}
				}
				return n.useState
			}
		},
		57632: function(e, t, r) {
			"use strict";
			let n;
			r.d(t, {
				Z: function() {
					return c
				}
			});
			let i = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
			var o = {
				randomUUID: i
			};
			let a = new Uint8Array(16);

			function s() {
				if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
				return n(a)
			}
			let u = [];
			for (let e = 0; e < 256; ++e) u.push((e + 256).toString(16).slice(1));
			var c = function(e, t, r) {
				if (o.randomUUID && !t && !e) return o.randomUUID();
				e = e || {};
				let n = e.random || (e.rng || s)();
				if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
					r = r || 0;
					for (let e = 0; e < 16; ++e) t[r + e] = n[e];
					return t
				}
				return function(e, t = 0) {
					return (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase()
				}(n)
			}
		},
		39516: function(e, t, r) {
			"use strict";
			r.d(t, {
				d: function() {
					return d
				},
				f: function() {
					return l
				}
			});
			var n = r(67294),
				i = r(19946),
				o = r(12351),
				a = r(16723),
				s = r(23784),
				u = r(73781);
			let c = (0, n.createContext)(null);

			function l() {
				let [e, t] = (0, n.useState)([]);
				return [e.length > 0 ? e.join(" ") : void 0, (0, n.useMemo)(() => function(e) {
					let r = (0, u.z)(e => (t(t => [...t, e]), () => t(t => {
							let r = t.slice(),
								n = r.indexOf(e);
							return -1 !== n && r.splice(n, 1), r
						}))),
						i = (0, n.useMemo)(() => ({
							register: r,
							slot: e.slot,
							name: e.name,
							props: e.props
						}), [r, e.slot, e.name, e.props]);
					return n.createElement(c.Provider, {
						value: i
					}, e.children)
				}, [t])]
			}
			let d = Object.assign((0, o.yV)(function(e, t) {
				let r = (0, i.M)(),
					{
						id: u = `headlessui-description-${r}`,
						...l
					} = e,
					d = function e() {
						let t = (0, n.useContext)(c);
						if (null === t) {
							let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
							throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
						}
						return t
					}(),
					f = (0, s.T)(t);
				(0, a.e)(() => d.register(u), [u, d.register]);
				let p = {
					ref: f,
					...d.props,
					id: u
				};
				return (0, o.sY)({
					ourProps: p,
					theirProps: l,
					slot: d.slot || {},
					defaultTag: "p",
					name: d.name || "Description"
				})
			}), {})
		},
		46047: function(e, t, r) {
			"use strict";
			let n, i;
			r.d(t, {
				V: function() {
					return eA
				}
			});
			var o, a, s, u, c, l, d, f, p, h, y = r(67294),
				m = r.t(y, 2),
				g = r(32984),
				v = r(12351),
				w = r(23784),
				b = r(61363),
				E = r(64103),
				S = r(19946),
				A = r(82180),
				x = r(46045),
				P = r(15466);
			let k = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
			var _ = ((o = _ || {})[o.First = 1] = "First", o[o.Previous = 2] = "Previous", o[o.Next = 4] = "Next", o[o.Last = 8] = "Last", o[o.WrapAround = 16] = "WrapAround", o[o.NoScroll = 32] = "NoScroll", o),
				C = ((a = C || {})[a.Error = 0] = "Error", a[a.Overflow = 1] = "Overflow", a[a.Success = 2] = "Success", a[a.Underflow = 3] = "Underflow", a),
				R = ((s = R || {})[s.Previous = -1] = "Previous", s[s.Next = 1] = "Next", s),
				H = ((u = H || {})[u.Strict = 0] = "Strict", u[u.Loose = 1] = "Loose", u);

			function O(e) {
				null == e || e.focus({
					preventScroll: !0
				})
			}

			function T(e, t, {
				sorted: r = !0,
				relativeTo: n = null,
				skipElements: i = []
			} = {}) {
				var o, a, s;
				let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
					c = Array.isArray(e) ? r ? function(e, t = e => e) {
						return e.slice().sort((e, r) => {
							let n = t(e),
								i = t(r);
							if (null === n || null === i) return 0;
							let o = n.compareDocumentPosition(i);
							return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
						})
					}(e) : e : function(e = document.body) {
						return null == e ? [] : Array.from(e.querySelectorAll(k)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
					}(e);
				i.length > 0 && c.length > 1 && (c = c.filter(e => !i.includes(e))), n = null != n ? n : u.activeElement;
				let l = (() => {
						if (5 & t) return 1;
						if (10 & t) return -1;
						throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					})(),
					d = (() => {
						if (1 & t) return 0;
						if (2 & t) return Math.max(0, c.indexOf(n)) - 1;
						if (4 & t) return Math.max(0, c.indexOf(n)) + 1;
						if (8 & t) return c.length - 1;
						throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					})(),
					f = 32 & t ? {
						preventScroll: !0
					} : {},
					p = 0,
					h = c.length,
					y;
				do {
					if (p >= h || p + h <= 0) return 0;
					let e = d + p;
					if (16 & t) e = (e + h) % h;
					else {
						if (e < 0) return 3;
						if (e >= h) return 1
					}
					null == (y = c[e]) || y.focus(f), p += l
				} while (y !== u.activeElement);
				return 6 & t && null != (s = null == (a = null == (o = y) ? void 0 : o.matches) ? void 0 : a.call(o, "textarea,input")) && s && y.select(), y.hasAttribute("tabindex") || y.setAttribute("tabindex", "0"), 2
			}
			var j = r(73781),
				W = r(3855),
				M = ((c = M || {})[c.Forwards = 0] = "Forwards", c[c.Backwards = 1] = "Backwards", c),
				K = r(14879);

			function D(...e) {
				return (0, y.useMemo)(() => (0, P.r)(...e), [...e])
			}

			function I(e, t, r, n) {
				let i = (0, W.E)(r);
				(0, y.useEffect)(() => {
					function r(e) {
						i.current(e)
					}
					return (e = null != e ? e : window).addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
				}, [e, t, n])
			}
			var J = r(81021);

			function N(e, t) {
				let r = (0, y.useRef)([]),
					n = (0, j.z)(e);
				(0, y.useEffect)(() => {
					let e = [...r.current];
					for (let [i, o] of t.entries())
						if (r.current[i] !== o) {
							let i = n(t, e);
							return r.current = t, i
						}
				}, [n, ...t])
			}
			var U = r(94192),
				F = ((l = F || {})[l.None = 1] = "None", l[l.InitialFocus = 2] = "InitialFocus", l[l.TabLock = 4] = "TabLock", l[l.FocusLock = 8] = "FocusLock", l[l.RestoreFocus = 16] = "RestoreFocus", l[l.All = 30] = "All", l);
			let L = Object.assign((0, v.yV)(function(e, t) {
				var r, n;
				let i, o, a = (0, y.useRef)(null),
					s = (0, w.T)(a, t),
					{
						initialFocus: u,
						containers: c,
						features: l = 30,
						...d
					} = e;
				(0, A.H)() || (l = 1);
				let f = D(a);
				! function({
					ownerDocument: e
				}, t) {
					let r = (0, y.useRef)(null);
					I(null == e ? void 0 : e.defaultView, "focusout", e => {
						t && (r.current || (r.current = e.target))
					}, !0), N(() => {
						t || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && O(r.current), r.current = null)
					}, [t]);
					let n = (0, y.useRef)(!1);
					(0, y.useEffect)(() => (n.current = !1, () => {
						n.current = !0, (0, J.Y)(() => {
							n.current && (O(r.current), r.current = null)
						})
					}), [])
				}({
					ownerDocument: f
				}, Boolean(16 & l));
				let p = function({
					ownerDocument: e,
					container: t,
					initialFocus: r
				}, n) {
					let i = (0, y.useRef)(null),
						o = (0, K.t)();
					return N(() => {
						if (!n) return;
						let a = t.current;
						a && (0, J.Y)(() => {
							if (!o.current) return;
							let t = null == e ? void 0 : e.activeElement;
							if (null != r && r.current) {
								if ((null == r ? void 0 : r.current) === t) {
									i.current = t;
									return
								}
							} else if (a.contains(t)) {
								i.current = t;
								return
							}
							null != r && r.current ? O(r.current) : T(a, _.First) === C.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
						})
					}, [n]), i
				}({
					ownerDocument: f,
					container: a,
					initialFocus: u
				}, Boolean(2 & l));
				! function({
					ownerDocument: e,
					container: t,
					containers: r,
					previousActiveElement: n
				}, i) {
					let o = (0, K.t)();
					I(null == e ? void 0 : e.defaultView, "focus", e => {
						if (!i || !o.current) return;
						let a = new Set(null == r ? void 0 : r.current);
						a.add(t);
						let s = n.current;
						if (!s) return;
						let u = e.target;
						u && u instanceof HTMLElement ? $(a, u) ? (n.current = u, O(u)) : (e.preventDefault(), e.stopPropagation(), O(s)) : O(n.current)
					}, !0)
				}({
					ownerDocument: f,
					container: a,
					containers: c,
					previousActiveElement: p
				}, Boolean(8 & l));
				let h = (i = (0, y.useRef)(0), r = "keydown", n = e => {
						"Tab" === e.key && (i.current = e.shiftKey ? 1 : 0)
					}, o = (0, W.E)(n), (0, y.useEffect)(() => {
						function e(e) {
							o.current(e)
						}
						return window.addEventListener(r, e, !0), () => window.removeEventListener(r, e, !0)
					}, [r, !0]), i),
					m = (0, j.z)(e => {
						let t = a.current;
						t && (0, g.E)(h.current, {
							[M.Forwards]: () => {
								T(t, _.First, {
									skipElements: [e.relatedTarget]
								})
							},
							[M.Backwards]: () => {
								T(t, _.Last, {
									skipElements: [e.relatedTarget]
								})
							}
						})
					}),
					b = (0, U.G)(),
					E = (0, y.useRef)(!1);
				return y.createElement(y.Fragment, null, Boolean(4 & l) && y.createElement(x._, {
					as: "button",
					type: "button",
					"data-headlessui-focus-guard": !0,
					onFocus: m,
					features: x.A.Focusable
				}), (0, v.sY)({
					ourProps: {
						ref: s,
						onKeyDown(e) {
							"Tab" == e.key && (E.current = !0, b.requestAnimationFrame(() => {
								E.current = !1
							}))
						},
						onBlur(e) {
							let t = new Set(null == c ? void 0 : c.current);
							t.add(a);
							let r = e.relatedTarget;
							r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && ($(t, r) || (E.current ? T(a.current, (0, g.E)(h.current, {
								[M.Forwards]: () => _.Next,
								[M.Backwards]: () => _.Previous
							}) | _.WrapAround, {
								relativeTo: e.target
							}) : e.target instanceof HTMLElement && O(e.target)))
						}
					},
					theirProps: d,
					defaultTag: "div",
					name: "FocusTrap"
				}), Boolean(4 & l) && y.createElement(x._, {
					as: "button",
					type: "button",
					"data-headlessui-focus-guard": !0,
					onFocus: m,
					features: x.A.Focusable
				}))
			}), {
				features: F
			});

			function $(e, t) {
				var r;
				for (let n of e)
					if (null != (r = n.current) && r.contains(t)) return !0;
				return !1
			}
			var z = r(73935),
				B = r(16723);
			let G = (0, y.createContext)(!1);

			function V(e) {
				return y.createElement(G.Provider, {
					value: e.force
				}, e.children)
			}
			var Z = r(77896);
			let Y = y.Fragment,
				q = y.Fragment,
				X = (0, y.createContext)(null),
				Q = Object.assign((0, v.yV)(function(e, t) {
					let r = (0, y.useRef)(null),
						n = (0, w.T)((0, w.h)(e => {
							r.current = e
						}), t),
						i = D(r),
						o = function(e) {
							let t = (0, y.useContext)(G),
								r = (0, y.useContext)(X),
								n = D(e),
								[i, o] = (0, y.useState)(() => {
									if (!t && null !== r || Z.O.isServer) return null;
									let e = null == n ? void 0 : n.getElementById("headlessui-portal-root");
									if (e) return e;
									if (null === n) return null;
									let i = n.createElement("div");
									return i.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(i)
								});
							return (0, y.useEffect)(() => {
								null !== i && (null != n && n.body.contains(i) || null == n || n.body.appendChild(i))
							}, [i, n]), (0, y.useEffect)(() => {
								t || null !== r && o(r.current)
							}, [r, o, t]), i
						}(r),
						[a] = (0, y.useState)(() => {
							var e;
							return Z.O.isServer ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
						}),
						s = (0, A.H)(),
						u = (0, y.useRef)(!1);
					return (0, B.e)(() => {
						if (u.current = !1, !(!o || !a)) return o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a)), () => {
							u.current = !0, (0, J.Y)(() => {
								var e;
								u.current && o && a && (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && (null == (e = o.parentElement) || e.removeChild(o)))
							})
						}
					}, [o, a]), s && o && a ? (0, z.createPortal)((0, v.sY)({
						ourProps: {
							ref: n
						},
						theirProps: e,
						defaultTag: Y,
						name: "Portal"
					}), a) : null
				}), {
					Group: (0, v.yV)(function(e, t) {
						let {
							target: r,
							...n
						} = e, i = {
							ref: (0, w.T)(t)
						};
						return y.createElement(X.Provider, {
							value: r
						}, (0, v.sY)({
							ourProps: i,
							theirProps: n,
							defaultTag: q,
							name: "Popover.Group"
						}))
					})
				});
			var ee = r(39516),
				et = r(16567);
			let er = (0, y.createContext)(() => {});
			er.displayName = "StackContext";
			var en = ((d = en || {})[d.Add = 0] = "Add", d[d.Remove = 1] = "Remove", d);

			function ei({
				children: e,
				onUpdate: t,
				type: r,
				element: n,
				enabled: i
			}) {
				let o = (0, y.useContext)(er),
					a = (0, j.z)((...e) => {
						null == t || t(...e), o(...e)
					});
				return (0, B.e)(() => {
					let e = void 0 === i || !0 === i;
					return e && a(0, r, n), () => {
						e && a(1, r, n)
					}
				}, [a, r, n, i]), y.createElement(er.Provider, {
					value: a
				}, e)
			}

			function eo(e, t, r) {
				let n = (0, W.E)(t);
				(0, y.useEffect)(() => {
					function t(e) {
						n.current(e)
					}
					return document.addEventListener(e, t, r), () => document.removeEventListener(e, t, r)
				}, [e, r])
			}
			let {
				useState: ea,
				useEffect: es,
				useLayoutEffect: eu,
				useDebugValue: ec
			} = m;
			"undefined" != typeof window && void 0 !== window.document && window.document.createElement;
			let el = m.useSyncExternalStore;
			var ed = r(9362);
			let ef = (f = {
				PUSH(e, t) {
					var r;
					let n = null != (r = this.get(e)) ? r : {
						doc: e,
						count: 0,
						d: (0, ed.k)(),
						meta: new Set
					};
					return n.count++, n.meta.add(t), this.set(e, n), this
				},
				POP(e, t) {
					let r = this.get(e);
					return r && (r.count--, r.meta.delete(t)), this
				},
				SCROLL_PREVENT({
					doc: e,
					d: t,
					meta: r
				}) {
					let n, i;
					let o = {
							doc: e,
							d: t,
							meta: function(e) {
								let t = {};
								for (let r of e) Object.assign(t, r(t));
								return t
							}(r)
						},
						a = [/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 ? {
							before() {
								n = window.pageYOffset
							},
							after({
								doc: e,
								d: t,
								meta: r
							}) {
								function i(e) {
									return r.containers.flatMap(e => e()).some(t => t.contains(e))
								}
								t.style(e.body, "marginTop", `-${n}px`), window.scrollTo(0, 0);
								let o = null;
								t.addEventListener(e, "click", t => {
									if (t.target instanceof HTMLElement) try {
										let r = t.target.closest("a");
										if (!r) return;
										let {
											hash: n
										} = new URL(r.href), a = e.querySelector(n);
										a && !i(a) && (o = a)
									} catch {}
								}, !0), t.addEventListener(e, "touchmove", e => {
									e.target instanceof HTMLElement && !i(e.target) && e.preventDefault()
								}, {
									passive: !1
								}), t.add(() => {
									window.scrollTo(0, window.pageYOffset + n), o && o.isConnected && (o.scrollIntoView({
										block: "nearest"
									}), o = null)
								})
							}
						} : {}, {
							before({
								doc: e
							}) {
								var t;
								let r = e.documentElement;
								i = (null != (t = e.defaultView) ? t : window).innerWidth - r.clientWidth
							},
							after({
								doc: e,
								d: t
							}) {
								let r = e.documentElement,
									n = i - (r.clientWidth - r.offsetWidth);
								t.style(r, "paddingRight", `${n}px`)
							}
						}, {
							before({
								doc: e,
								d: t
							}) {
								t.style(e.documentElement, "overflow", "hidden")
							}
						}];
					a.forEach(({
						before: e
					}) => null == e ? void 0 : e(o)), a.forEach(({
						after: e
					}) => null == e ? void 0 : e(o))
				},
				SCROLL_ALLOW({
					d: e
				}) {
					e.dispose()
				},
				TEARDOWN({
					doc: e
				}) {
					this.delete(e)
				}
			}, n = new Map, i = new Set, {
				getSnapshot: () => n,
				subscribe: e => (i.add(e), () => i.delete(e)),
				dispatch(e, ...t) {
					let r = f[e].call(n, ...t);
					r && (n = r, i.forEach(e => e()))
				}
			});
			ef.subscribe(() => {
				let e = ef.getSnapshot(),
					t = new Map;
				for (let [r] of e) t.set(r, r.documentElement.style.overflow);
				for (let r of e.values()) {
					let e = "hidden" === t.get(r.doc),
						n = 0 !== r.count;
					(n && !e || !n && e) && ef.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r), 0 === r.count && ef.dispatch("TEARDOWN", r)
				}
			});
			let ep = new Map,
				eh = new Map;

			function ey(e, t = !0) {
				(0, B.e)(() => {
					var r;
					if (!t) return;
					let n = "function" == typeof e ? e() : e.current;
					if (!n) return;
					let i = null != (r = eh.get(n)) ? r : 0;
					return eh.set(n, i + 1), 0 !== i || (ep.set(n, {
							"aria-hidden": n.getAttribute("aria-hidden"),
							inert: n.inert
						}), n.setAttribute("aria-hidden", "true"), n.inert = !0),
						function() {
							var e;
							if (!n) return;
							let t = null != (e = eh.get(n)) ? e : 1;
							if (1 === t ? eh.delete(n) : eh.set(n, t - 1), 1 !== t) return;
							let r = ep.get(n);
							r && (null === r["aria-hidden"] ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", r["aria-hidden"]), n.inert = r.inert, ep.delete(n))
						}
				}, [e, t])
			}
			var em = ((p = em || {})[p.Open = 0] = "Open", p[p.Closed = 1] = "Closed", p),
				eg = ((h = eg || {})[h.SetTitleId = 0] = "SetTitleId", h);
			let ev = {
					0: (e, t) => e.titleId === t.id ? e : {
						...e,
						titleId: t.id
					}
				},
				ew = (0, y.createContext)(null);

			function eb(e) {
				let t = (0, y.useContext)(ew);
				if (null === t) {
					let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(t, eb), t
				}
				return t
			}

			function eE(e, t) {
				return (0, g.E)(t.type, ev, e, t)
			}
			ew.displayName = "DialogContext";
			let eS = v.AN.RenderStrategy | v.AN.Static,
				eA = Object.assign((0, v.yV)(function(e, t) {
					let r = (0, S.M)(),
						{
							id: n = `headlessui-dialog-${r}`,
							open: i,
							onClose: o,
							initialFocus: a,
							__demoMode: s = !1,
							...u
						} = e,
						[c, l] = (0, y.useState)(0),
						d = (0, et.oJ)();
					void 0 === i && null !== d && (i = (d & et.ZM.Open) === et.ZM.Open);
					let f = (0, y.useRef)(new Set),
						p = (0, y.useRef)(null),
						h = (0, w.T)(p, t),
						m = (0, y.useRef)(null),
						E = D(p),
						_ = e.hasOwnProperty("open") || null !== d,
						C = e.hasOwnProperty("onClose");
					if (!_ && !C) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
					if (!_) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
					if (!C) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
					if ("boolean" != typeof i) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
					if ("function" != typeof o) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
					let R = i ? 0 : 1,
						[O, T] = (0, y.useReducer)(eE, {
							titleId: null,
							descriptionId: null,
							panelRef: (0, y.createRef)()
						}),
						W = (0, j.z)(() => o(!1)),
						M = (0, j.z)(e => T({
							type: 0,
							id: e
						})),
						K = !!(0, A.H)() && !s && 0 === R,
						J = c > 1,
						N = null !== (0, y.useContext)(ew),
						U = null !== d && (d & et.ZM.Closing) === et.ZM.Closing;
					ey((0, y.useCallback)(() => {
						var e, t;
						return null != (t = Array.from(null != (e = null == E ? void 0 : E.querySelectorAll("body > *")) ? e : []).find(e => "headlessui-portal-root" !== e.id && e.contains(m.current) && e instanceof HTMLElement)) ? t : null
					}, [m]), !N && !U && K), ey((0, y.useCallback)(() => {
						var e, t;
						return null != (t = Array.from(null != (e = null == E ? void 0 : E.querySelectorAll("[data-headlessui-portal]")) ? e : []).find(e => e.contains(m.current) && e instanceof HTMLElement)) ? t : null
					}, [m]), !!J || K);
					let F = (0, j.z)(() => {
						var e, t;
						return [...Array.from(null != (e = null == E ? void 0 : E.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(e === document.body || e === document.head || !(e instanceof HTMLElement) || e.contains(m.current) || O.panelRef.current && e.contains(O.panelRef.current))), null != (t = O.panelRef.current) ? t : p.current]
					});
					! function(e, t, r = !0) {
						let n = (0, y.useRef)(!1);

						function i(r, i) {
							if (!n.current || r.defaultPrevented) return;
							let o = function e(t) {
									return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
								}(e),
								a = i(r);
							if (null !== a && a.getRootNode().contains(a)) {
								for (let e of o) {
									if (null === e) continue;
									let t = e instanceof HTMLElement ? e : e.current;
									if (null != t && t.contains(a) || r.composed && r.composedPath().includes(t)) return
								}
								return ! function(e, t = 0) {
									var r;
									return e !== (null == (r = (0, P.r)(e)) ? void 0 : r.body) && (0, g.E)(t, {
										0: () => e.matches(k),
										1() {
											let t = e;
											for (; null !== t;) {
												if (t.matches(k)) return !0;
												t = t.parentElement
											}
											return !1
										}
									})
								}(a, H.Loose) && -1 !== a.tabIndex && r.preventDefault(), t(r, a)
							}
						}(0, y.useEffect)(() => {
							requestAnimationFrame(() => {
								n.current = r
							})
						}, [r]);
						let o = (0, y.useRef)(null);
						eo("mousedown", e => {
							var t, r;
							n.current && (o.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
						}, !0), eo("click", e => {
							o.current && (i(e, () => o.current), o.current = null)
						}, !0), eo("blur", e => i(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
					}(() => F(), W, !(!K || J));
					let $ = !(J || 0 !== R);
					I(null == E ? void 0 : E.defaultView, "keydown", e => {
							$ && (e.defaultPrevented || e.key === b.R.Escape && (e.preventDefault(), e.stopPropagation(), W()))
						}),
						function(e, t, r = () => [document.body]) {
							var n;
							let i, o;
							n = e => {
								var t;
								return {
									containers: [...null != (t = e.containers) ? t : [], r]
								}
							}, i = el(ef.subscribe, ef.getSnapshot, ef.getSnapshot), (o = e ? i.get(e) : void 0) && o.count, (0, B.e)(() => {
								if (!(!e || !t)) return ef.dispatch("PUSH", e, n), () => ef.dispatch("POP", e, n)
							}, [t, e])
						}(E, !(U || 0 !== R || N), F), (0, y.useEffect)(() => {
							if (0 !== R || !p.current) return;
							let e = new ResizeObserver(e => {
								for (let t of e) {
									let e = t.target.getBoundingClientRect();
									0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && W()
								}
							});
							return e.observe(p.current), () => e.disconnect()
						}, [R, p, W]);
					let [z, G] = (0, ee.f)(), Z = (0, y.useMemo)(() => [{
						dialogState: R,
						close: W,
						setTitleId: M
					}, O], [R, O, W, M]), Y = (0, y.useMemo)(() => ({
						open: 0 === R
					}), [R]), q = {
						ref: h,
						id: n,
						role: "dialog",
						"aria-modal": 0 === R || void 0,
						"aria-labelledby": O.titleId,
						"aria-describedby": z
					};
					return y.createElement(ei, {
						type: "Dialog",
						enabled: 0 === R,
						element: p,
						onUpdate: (0, j.z)((e, t, r) => {
							"Dialog" === t && (0, g.E)(e, {
								[en.Add]() {
									f.current.add(r), l(e => e + 1)
								},
								[en.Remove]() {
									f.current.add(r), l(e => e - 1)
								}
							})
						})
					}, y.createElement(V, {
						force: !0
					}, y.createElement(Q, null, y.createElement(ew.Provider, {
						value: Z
					}, y.createElement(Q.Group, {
						target: p
					}, y.createElement(V, {
						force: !1
					}, y.createElement(G, {
						slot: Y,
						name: "Dialog.Description"
					}, y.createElement(L, {
						initialFocus: a,
						containers: f,
						features: K ? (0, g.E)(J ? "parent" : "leaf", {
							parent: L.features.RestoreFocus,
							leaf: L.features.All & ~L.features.FocusLock
						}) : L.features.None
					}, (0, v.sY)({
						ourProps: q,
						theirProps: u,
						slot: Y,
						defaultTag: "div",
						features: eS,
						visible: 0 === R,
						name: "Dialog"
					})))))))), y.createElement(x._, {
						features: x.A.Hidden,
						ref: m
					}))
				}), {
					Backdrop: (0, v.yV)(function(e, t) {
						let r = (0, S.M)(),
							{
								id: n = `headlessui-dialog-backdrop-${r}`,
								...i
							} = e,
							[{
								dialogState: o
							}, a] = eb("Dialog.Backdrop"),
							s = (0, w.T)(t);
						(0, y.useEffect)(() => {
							if (null === a.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
						}, [a.panelRef]);
						let u = (0, y.useMemo)(() => ({
							open: 0 === o
						}), [o]);
						return y.createElement(V, {
							force: !0
						}, y.createElement(Q, null, (0, v.sY)({
							ourProps: {
								ref: s,
								id: n,
								"aria-hidden": !0
							},
							theirProps: i,
							slot: u,
							defaultTag: "div",
							name: "Dialog.Backdrop"
						})))
					}),
					Panel: (0, v.yV)(function(e, t) {
						let r = (0, S.M)(),
							{
								id: n = `headlessui-dialog-panel-${r}`,
								...i
							} = e,
							[{
								dialogState: o
							}, a] = eb("Dialog.Panel"),
							s = (0, w.T)(t, a.panelRef),
							u = (0, y.useMemo)(() => ({
								open: 0 === o
							}), [o]),
							c = (0, j.z)(e => {
								e.stopPropagation()
							});
						return (0, v.sY)({
							ourProps: {
								ref: s,
								id: n,
								onClick: c
							},
							theirProps: i,
							slot: u,
							defaultTag: "div",
							name: "Dialog.Panel"
						})
					}),
					Overlay: (0, v.yV)(function(e, t) {
						let r = (0, S.M)(),
							{
								id: n = `headlessui-dialog-overlay-${r}`,
								...i
							} = e,
							[{
								dialogState: o,
								close: a
							}] = eb("Dialog.Overlay"),
							s = (0, w.T)(t),
							u = (0, j.z)(e => {
								if (e.target === e.currentTarget) {
									if ((0, E.P)(e.currentTarget)) return e.preventDefault();
									e.preventDefault(), e.stopPropagation(), a()
								}
							}),
							c = (0, y.useMemo)(() => ({
								open: 0 === o
							}), [o]);
						return (0, v.sY)({
							ourProps: {
								ref: s,
								id: n,
								"aria-hidden": !0,
								onClick: u
							},
							theirProps: i,
							slot: c,
							defaultTag: "div",
							name: "Dialog.Overlay"
						})
					}),
					Title: (0, v.yV)(function(e, t) {
						let r = (0, S.M)(),
							{
								id: n = `headlessui-dialog-title-${r}`,
								...i
							} = e,
							[{
								dialogState: o,
								setTitleId: a
							}] = eb("Dialog.Title"),
							s = (0, w.T)(t);
						(0, y.useEffect)(() => (a(n), () => a(null)), [n, a]);
						let u = (0, y.useMemo)(() => ({
							open: 0 === o
						}), [o]);
						return (0, v.sY)({
							ourProps: {
								ref: s,
								id: n
							},
							theirProps: i,
							slot: u,
							defaultTag: "h2",
							name: "Dialog.Title"
						})
					}),
					Description: ee.d
				})
		},
		28368: function(e, t, r) {
			"use strict";
			r.d(t, {
				p: function() {
					return C
				}
			});
			var n, i, o, a = r(67294),
				s = r(32984),
				u = r(12351),
				c = r(23784),
				l = r(19946),
				d = r(61363),
				f = r(64103),
				p = r(16567),
				h = r(14157),
				y = r(15466),
				m = r(73781);
			let g = null != (o = a.startTransition) ? o : function(e) {
				e()
			};
			var v = ((n = v || {})[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n),
				w = ((i = w || {})[i.ToggleDisclosure = 0] = "ToggleDisclosure", i[i.CloseDisclosure = 1] = "CloseDisclosure", i[i.SetButtonId = 2] = "SetButtonId", i[i.SetPanelId = 3] = "SetPanelId", i[i.LinkPanel = 4] = "LinkPanel", i[i.UnlinkPanel = 5] = "UnlinkPanel", i);
			let b = {
					0: e => ({
						...e,
						disclosureState: (0, s.E)(e.disclosureState, {
							0: 1,
							1: 0
						})
					}),
					1: e => 1 === e.disclosureState ? e : {
						...e,
						disclosureState: 1
					},
					4: e => !0 === e.linkedPanel ? e : {
						...e,
						linkedPanel: !0
					},
					5: e => !1 === e.linkedPanel ? e : {
						...e,
						linkedPanel: !1
					},
					2: (e, t) => e.buttonId === t.buttonId ? e : {
						...e,
						buttonId: t.buttonId
					},
					3: (e, t) => e.panelId === t.panelId ? e : {
						...e,
						panelId: t.panelId
					}
				},
				E = (0, a.createContext)(null);

			function S(e) {
				let t = (0, a.useContext)(E);
				if (null === t) {
					let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(t, S), t
				}
				return t
			}
			E.displayName = "DisclosureContext";
			let A = (0, a.createContext)(null);
			A.displayName = "DisclosureAPIContext";
			let x = (0, a.createContext)(null);

			function P(e, t) {
				return (0, s.E)(t.type, b, e, t)
			}
			x.displayName = "DisclosurePanelContext";
			let k = a.Fragment,
				_ = u.AN.RenderStrategy | u.AN.Static,
				C = Object.assign((0, u.yV)(function(e, t) {
					let {
						defaultOpen: r = !1,
						...n
					} = e, i = (0, a.useRef)(null), o = (0, c.T)(t, (0, c.h)(e => {
						i.current = e
					}, void 0 === e.as || e.as === a.Fragment)), l = (0, a.useRef)(null), d = (0, a.useRef)(null), f = (0, a.useReducer)(P, {
						disclosureState: r ? 0 : 1,
						linkedPanel: !1,
						buttonRef: d,
						panelRef: l,
						buttonId: null,
						panelId: null
					}), [{
						disclosureState: h,
						buttonId: g
					}, v] = f, w = (0, m.z)(e => {
						v({
							type: 1
						});
						let t = (0, y.r)(i);
						if (!t || !g) return;
						let r = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(g) : t.getElementById(g);
						null == r || r.focus()
					}), b = (0, a.useMemo)(() => ({
						close: w
					}), [w]), S = (0, a.useMemo)(() => ({
						open: 0 === h,
						close: w
					}), [h, w]);
					return a.createElement(E.Provider, {
						value: f
					}, a.createElement(A.Provider, {
						value: b
					}, a.createElement(p.up, {
						value: (0, s.E)(h, {
							0: p.ZM.Open,
							1: p.ZM.Closed
						})
					}, (0, u.sY)({
						ourProps: {
							ref: o
						},
						theirProps: n,
						slot: S,
						defaultTag: k,
						name: "Disclosure"
					}))))
				}), {
					Button: (0, u.yV)(function(e, t) {
						let r = (0, l.M)(),
							{
								id: n = `headlessui-disclosure-button-${r}`,
								...i
							} = e,
							[o, s] = S("Disclosure.Button"),
							p = (0, a.useContext)(x),
							y = null !== p && p === o.panelId,
							g = (0, a.useRef)(null),
							v = (0, c.T)(g, t, y ? null : o.buttonRef);
						(0, a.useEffect)(() => {
							if (!y) return s({
								type: 2,
								buttonId: n
							}), () => {
								s({
									type: 2,
									buttonId: null
								})
							}
						}, [n, s, y]);
						let w = (0, m.z)(e => {
								var t;
								if (y) {
									if (1 === o.disclosureState) return;
									switch (e.key) {
										case d.R.Space:
										case d.R.Enter:
											e.preventDefault(), e.stopPropagation(), s({
												type: 0
											}), null == (t = o.buttonRef.current) || t.focus()
									}
								} else switch (e.key) {
									case d.R.Space:
									case d.R.Enter:
										e.preventDefault(), e.stopPropagation(), s({
											type: 0
										})
								}
							}),
							b = (0, m.z)(e => {
								e.key === d.R.Space && e.preventDefault()
							}),
							E = (0, m.z)(t => {
								var r;
								(0, f.P)(t.currentTarget) || e.disabled || (y ? (s({
									type: 0
								}), null == (r = o.buttonRef.current) || r.focus()) : s({
									type: 0
								}))
							}),
							A = (0, a.useMemo)(() => ({
								open: 0 === o.disclosureState
							}), [o]),
							P = (0, h.f)(e, g),
							k = y ? {
								ref: v,
								type: P,
								onKeyDown: w,
								onClick: E
							} : {
								ref: v,
								id: n,
								type: P,
								"aria-expanded": e.disabled ? void 0 : 0 === o.disclosureState,
								"aria-controls": o.linkedPanel ? o.panelId : void 0,
								onKeyDown: w,
								onKeyUp: b,
								onClick: E
							};
						return (0, u.sY)({
							ourProps: k,
							theirProps: i,
							slot: A,
							defaultTag: "button",
							name: "Disclosure.Button"
						})
					}),
					Panel: (0, u.yV)(function(e, t) {
						let r = (0, l.M)(),
							{
								id: n = `headlessui-disclosure-panel-${r}`,
								...i
							} = e,
							[o, s] = S("Disclosure.Panel"),
							{
								close: d
							} = function e(t) {
								let r = (0, a.useContext)(A);
								if (null === r) {
									let r = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
									throw Error.captureStackTrace && Error.captureStackTrace(r, e), r
								}
								return r
							}("Disclosure.Panel"),
							f = (0, c.T)(t, o.panelRef, e => {
								g(() => s({
									type: e ? 4 : 5
								}))
							});
						(0, a.useEffect)(() => (s({
							type: 3,
							panelId: n
						}), () => {
							s({
								type: 3,
								panelId: null
							})
						}), [n, s]);
						let h = (0, p.oJ)(),
							y = null !== h ? (h & p.ZM.Open) === p.ZM.Open : 0 === o.disclosureState,
							m = (0, a.useMemo)(() => ({
								open: 0 === o.disclosureState,
								close: d
							}), [o, d]);
						return a.createElement(x.Provider, {
							value: o.panelId
						}, (0, u.sY)({
							ourProps: {
								ref: f,
								id: n
							},
							theirProps: i,
							slot: m,
							defaultTag: "div",
							features: _,
							visible: y,
							name: "Disclosure.Panel"
						}))
					})
				})
		},
		61363: function(e, t, r) {
			"use strict";
			r.d(t, {
				R: function() {
					return i
				}
			});
			var n, i = ((n = i || {}).Space = " ", n.Enter = "Enter", n.Escape = "Escape", n.Backspace = "Backspace", n.Delete = "Delete", n.ArrowLeft = "ArrowLeft", n.ArrowUp = "ArrowUp", n.ArrowRight = "ArrowRight", n.ArrowDown = "ArrowDown", n.Home = "Home", n.End = "End", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Tab = "Tab", n)
		},
		335: function(e, t, r) {
			"use strict";
			r.d(t, {
				r: function() {
					return w
				}
			});
			var n = r(67294),
				i = r(12351),
				o = r(19946),
				a = r(61363),
				s = r(64103),
				u = r(16723),
				c = r(23784),
				l = r(73781);
			let d = (0, n.createContext)(null),
				f = Object.assign((0, i.yV)(function(e, t) {
					let r = (0, o.M)(),
						{
							id: a = `headlessui-label-${r}`,
							passive: s = !1,
							...l
						} = e,
						f = function e() {
							let t = (0, n.useContext)(d);
							if (null === t) {
								let t = Error("You used a <Label /> component, but it is not inside a relevant parent.");
								throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
							}
							return t
						}(),
						p = (0, c.T)(t);
					(0, u.e)(() => f.register(a), [a, f.register]);
					let h = {
						ref: p,
						...f.props,
						id: a
					};
					return s && ("onClick" in h && delete h.onClick, "onClick" in l && delete l.onClick), (0, i.sY)({
						ourProps: h,
						theirProps: l,
						slot: f.slot || {},
						defaultTag: "label",
						name: f.name || "Label"
					})
				}), {});
			var p = r(39516),
				h = r(14157),
				y = r(46045),
				m = r(94192);
			let g = (0, n.createContext)(null);
			g.displayName = "GroupContext";
			let v = n.Fragment,
				w = Object.assign((0, i.yV)(function(e, t) {
					let r = (0, o.M)(),
						{
							id: u = `headlessui-switch-${r}`,
							checked: d,
							defaultChecked: f = !1,
							onChange: p,
							name: v,
							value: w,
							...b
						} = e,
						E = (0, n.useContext)(g),
						S = (0, n.useRef)(null),
						A = (0, c.T)(S, t, null === E ? null : E.setSwitch),
						[x, P] = function(e, t, r) {
							let [i, o] = (0, n.useState)(r), a = void 0 !== e, s = (0, n.useRef)(a), u = (0, n.useRef)(!1), c = (0, n.useRef)(!1);
							return !a || s.current || u.current ? a || !s.current || c.current || (c.current = !0, s.current = a, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (u.current = !0, s.current = a, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [a ? e : i, (0, l.z)(e => (a || o(e), null == t ? void 0 : t(e)))]
						}(d, p, f),
						k = (0, l.z)(() => null == P ? void 0 : P(!x)),
						_ = (0, l.z)(e => {
							if ((0, s.P)(e.currentTarget)) return e.preventDefault();
							e.preventDefault(), k()
						}),
						C = (0, l.z)(e => {
							e.key === a.R.Space ? (e.preventDefault(), k()) : e.key === a.R.Enter && function(e) {
								var t;
								let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
								if (r) {
									for (let e of r.elements)
										if ("INPUT" === e.tagName && "submit" === e.type || "BUTTON" === e.tagName && "submit" === e.type || "INPUT" === e.nodeName && "image" === e.type) {
											e.click();
											return
										}
								}
							}(e.currentTarget)
						}),
						R = (0, l.z)(e => e.preventDefault()),
						H = (0, n.useMemo)(() => ({
							checked: x
						}), [x]),
						O = {
							id: u,
							ref: A,
							role: "switch",
							type: (0, h.f)(e, S),
							tabIndex: 0,
							"aria-checked": x,
							"aria-labelledby": null == E ? void 0 : E.labelledby,
							"aria-describedby": null == E ? void 0 : E.describedby,
							onClick: _,
							onKeyUp: C,
							onKeyPress: R
						},
						T = (0, m.G)();
					return (0, n.useEffect)(() => {
						var e;
						let t = null == (e = S.current) ? void 0 : e.closest("form");
						t && void 0 !== f && T.addEventListener(t, "reset", () => {
							P(f)
						})
					}, [S, P]), n.createElement(n.Fragment, null, null != v && x && n.createElement(y._, {
						features: y.A.Hidden,
						...(0, i.oA)({
							as: "input",
							type: "checkbox",
							hidden: !0,
							readOnly: !0,
							checked: x,
							name: v,
							value: w
						})
					}), (0, i.sY)({
						ourProps: O,
						theirProps: b,
						slot: H,
						defaultTag: "button",
						name: "Switch"
					}))
				}), {
					Group: function(e) {
						let [t, r] = (0, n.useState)(null), [o, a] = function() {
							let [e, t] = (0, n.useState)([]);
							return [e.length > 0 ? e.join(" ") : void 0, (0, n.useMemo)(() => function(e) {
								let r = (0, l.z)(e => (t(t => [...t, e]), () => t(t => {
										let r = t.slice(),
											n = r.indexOf(e);
										return -1 !== n && r.splice(n, 1), r
									}))),
									i = (0, n.useMemo)(() => ({
										register: r,
										slot: e.slot,
										name: e.name,
										props: e.props
									}), [r, e.slot, e.name, e.props]);
								return n.createElement(d.Provider, {
									value: i
								}, e.children)
							}, [t])]
						}(), [s, u] = (0, p.f)(), c = (0, n.useMemo)(() => ({
							switch: t,
							setSwitch: r,
							labelledby: o,
							describedby: s
						}), [t, r, o, s]);
						return n.createElement(u, {
							name: "Switch.Description"
						}, n.createElement(a, {
							name: "Switch.Label",
							props: {
								onClick() {
									t && (t.click(), t.focus({
										preventScroll: !0
									}))
								}
							}
						}, n.createElement(g.Provider, {
							value: c
						}, (0, i.sY)({
							ourProps: {},
							theirProps: e,
							defaultTag: v,
							name: "Switch.Group"
						}))))
					},
					Label: f,
					Description: p.d
				})
		},
		44080: function(e, t, r) {
			"use strict";
			r.d(t, {
				u: function() {
					return j
				}
			});
			var n, i = r(67294),
				o = r(12351),
				a = r(16567),
				s = r(32984),
				u = r(14879),
				c = r(16723),
				l = r(3855),
				d = r(82180),
				f = r(23784),
				p = r(9362);

			function h(e, ...t) {
				e && t.length > 0 && e.classList.add(...t)
			}

			function y(e, ...t) {
				e && t.length > 0 && e.classList.remove(...t)
			}
			var m = r(94192),
				g = r(73781),
				v = r(44067),
				w = r(77896);

			function b(e = "") {
				return e.split(" ").filter(e => e.trim().length > 1)
			}
			let E = (0, i.createContext)(null);
			E.displayName = "TransitionContext";
			var S = ((n = S || {}).Visible = "visible", n.Hidden = "hidden", n);
			let A = (0, i.createContext)(null);

			function x(e) {
				return "children" in e ? x(e.children) : e.current.filter(({
					el: e
				}) => null !== e.current).filter(({
					state: e
				}) => "visible" === e).length > 0
			}

			function P(e, t) {
				let r = (0, l.E)(e),
					n = (0, i.useRef)([]),
					a = (0, u.t)(),
					c = (0, m.G)(),
					d = (0, g.z)((e, t = o.l4.Hidden) => {
						let i = n.current.findIndex(({
							el: t
						}) => t === e); - 1 !== i && ((0, s.E)(t, {
							[o.l4.Unmount]() {
								n.current.splice(i, 1)
							},
							[o.l4.Hidden]() {
								n.current[i].state = "hidden"
							}
						}), c.microTask(() => {
							var e;
							!x(n) && a.current && (null == (e = r.current) || e.call(r))
						}))
					}),
					f = (0, g.z)(e => {
						let t = n.current.find(({
							el: t
						}) => t === e);
						return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
							el: e,
							state: "visible"
						}), () => d(e, o.l4.Unmount)
					}),
					p = (0, i.useRef)([]),
					h = (0, i.useRef)(Promise.resolve()),
					y = (0, i.useRef)({
						enter: [],
						leave: [],
						idle: []
					}),
					v = (0, g.z)((e, r, n) => {
						p.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(([t]) => t !== e)), null == t || t.chains.current[r].push([e, new Promise(e => {
							p.current.push(e)
						})]), null == t || t.chains.current[r].push([e, new Promise(e => {
							Promise.all(y.current[r].map(([e, t]) => t)).then(() => e())
						})]), "enter" === r ? h.current = h.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
					}),
					w = (0, g.z)((e, t, r) => {
						Promise.all(y.current[t].splice(0).map(([e, t]) => t)).then(() => {
							var e;
							null == (e = p.current.shift()) || e()
						}).then(() => r(t))
					});
				return (0, i.useMemo)(() => ({
					children: n,
					register: f,
					unregister: d,
					onStart: v,
					onStop: w,
					wait: h,
					chains: y
				}), [f, d, n, v, w, y, h])
			}

			function k() {}
			A.displayName = "NestingContext";
			let _ = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

			function C(e) {
				var t;
				let r = {};
				for (let n of _) r[n] = null != (t = e[n]) ? t : k;
				return r
			}
			let R = o.AN.RenderStrategy,
				H = (0, o.yV)(function(e, t) {
					let {
						show: r,
						appear: n = !1,
						unmount: s,
						...u
					} = e, l = (0, i.useRef)(null), p = (0, f.T)(l, t);
					(0, d.H)();
					let h = (0, a.oJ)();
					if (void 0 === r && null !== h && (r = (h & a.ZM.Open) === a.ZM.Open), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
					let [y, m] = (0, i.useState)(r ? "visible" : "hidden"), g = P(() => {
						m("hidden")
					}), [v, w] = (0, i.useState)(!0), b = (0, i.useRef)([r]);
					(0, c.e)(() => {
						!1 !== v && b.current[b.current.length - 1] !== r && (b.current.push(r), w(!1))
					}, [b, r]);
					let S = (0, i.useMemo)(() => ({
						show: r,
						appear: n,
						initial: v
					}), [r, n, v]);
					(0, i.useEffect)(() => {
						if (r) m("visible");
						else if (x(g)) {
							let e = l.current;
							if (!e) return;
							let t = e.getBoundingClientRect();
							0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && m("hidden")
						} else m("hidden")
					}, [r, g]);
					let k = {
						unmount: s
					};
					return i.createElement(A.Provider, {
						value: g
					}, i.createElement(E.Provider, {
						value: S
					}, (0, o.sY)({
						ourProps: {
							...k,
							as: i.Fragment,
							children: i.createElement(O, {
								ref: p,
								...k,
								...u
							})
						},
						theirProps: {},
						defaultTag: i.Fragment,
						features: R,
						visible: "visible" === y,
						name: "Transition"
					})))
				}),
				O = (0, o.yV)(function(e, t) {
					var r;
					let n, {
							beforeEnter: S,
							afterEnter: k,
							beforeLeave: _,
							afterLeave: H,
							enter: O,
							enterFrom: T,
							enterTo: j,
							entered: W,
							leave: M,
							leaveFrom: K,
							leaveTo: D,
							...I
						} = e,
						J = (0, i.useRef)(null),
						N = (0, f.T)(J, t),
						U = I.unmount ? o.l4.Unmount : o.l4.Hidden,
						{
							show: F,
							appear: L,
							initial: $
						} = function() {
							let e = (0, i.useContext)(E);
							if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
							return e
						}(),
						[z, B] = (0, i.useState)(F ? "visible" : "hidden"),
						G = function() {
							let e = (0, i.useContext)(A);
							if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
							return e
						}(),
						{
							register: V,
							unregister: Z
						} = G,
						Y = (0, i.useRef)(null);
					(0, i.useEffect)(() => V(J), [V, J]), (0, i.useEffect)(() => {
						if (U === o.l4.Hidden && J.current) {
							if (F && "visible" !== z) {
								B("visible");
								return
							}
							return (0, s.E)(z, {
								hidden: () => Z(J),
								visible: () => V(J)
							})
						}
					}, [z, J, V, Z, F, U]);
					let q = (0, l.E)({
							enter: b(O),
							enterFrom: b(T),
							enterTo: b(j),
							entered: b(W),
							leave: b(M),
							leaveFrom: b(K),
							leaveTo: b(D)
						}),
						X = (r = {
							beforeEnter: S,
							afterEnter: k,
							beforeLeave: _,
							afterLeave: H
						}, n = (0, i.useRef)(C(r)), (0, i.useEffect)(() => {
							n.current = C(r)
						}, [r]), n),
						Q = (0, d.H)();
					(0, i.useEffect)(() => {
						if (Q && "visible" === z && null === J.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
					}, [J, z, Q]);
					let ee = $ && !L,
						et = !Q || ee || Y.current === F ? "idle" : F ? "enter" : "leave",
						er = function(e = 0) {
							let [t, r] = (0, i.useState)(e), n = (0, i.useCallback)(e => r(t => t | e), [t]), o = (0, i.useCallback)(e => Boolean(t & e), [t]);
							return {
								flags: t,
								addFlag: n,
								hasFlag: o,
								removeFlag: (0, i.useCallback)(e => r(t => t & ~e), [r]),
								toggleFlag: (0, i.useCallback)(e => r(t => t ^ e), [r])
							}
						}(0),
						en = (0, g.z)(e => (0, s.E)(e, {
							enter: () => {
								er.addFlag(a.ZM.Opening), X.current.beforeEnter()
							},
							leave: () => {
								er.addFlag(a.ZM.Closing), X.current.beforeLeave()
							},
							idle: () => {}
						})),
						ei = (0, g.z)(e => (0, s.E)(e, {
							enter: () => {
								er.removeFlag(a.ZM.Opening), X.current.afterEnter()
							},
							leave: () => {
								er.removeFlag(a.ZM.Closing), X.current.afterLeave()
							},
							idle: () => {}
						})),
						eo = P(() => {
							B("hidden"), Z(J)
						}, G);
					(function({
						container: e,
						direction: t,
						classes: r,
						onStart: n,
						onStop: i
					}) {
						let o = (0, u.t)(),
							a = (0, m.G)(),
							d = (0, l.E)(t);
						(0, c.e)(() => {
							let t = (0, p.k)();
							a.add(t.dispose);
							let u = e.current;
							if (u && "idle" !== d.current && o.current) {
								var c, l, f, m;
								let e, o, a, g, v, w, b;
								return t.dispose(), n.current(d.current), t.add((c = u, l = r.current, f = "enter" === d.current, m = () => {
									t.dispose(), i.current(d.current)
								}, o = f ? "enter" : "leave", a = (0, p.k)(), g = void 0 !== m ? (e = {
									called: !1
								}, (...t) => {
									if (!e.called) return e.called = !0, m(...t)
								}) : () => {}, "enter" === o && (c.removeAttribute("hidden"), c.style.display = ""), v = (0, s.E)(o, {
									enter: () => l.enter,
									leave: () => l.leave
								}), w = (0, s.E)(o, {
									enter: () => l.enterTo,
									leave: () => l.leaveTo
								}), b = (0, s.E)(o, {
									enter: () => l.enterFrom,
									leave: () => l.leaveFrom
								}), y(c, ...l.enter, ...l.enterTo, ...l.enterFrom, ...l.leave, ...l.leaveFrom, ...l.leaveTo, ...l.entered), h(c, ...v, ...b), a.nextFrame(() => {
									y(c, ...b), h(c, ...w),
										function(e, t) {
											let r = (0, p.k)();
											if (!e) return r.dispose;
											let {
												transitionDuration: n,
												transitionDelay: i
											} = getComputedStyle(e), [o, a] = [n, i].map(e => {
												let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
												return t
											});
											if (o + a !== 0) {
												let n = r.addEventListener(e, "transitionend", e => {
													e.target === e.currentTarget && (t(), n())
												})
											} else t();
											r.add(() => t()), r.dispose
										}(c, () => (y(c, ...v), h(c, ...l.entered), g()))
								}), a.dispose)), t.dispose
							}
						}, [t])
					})({
						container: J,
						classes: q,
						direction: et,
						onStart: (0, l.E)(e => {
							eo.onStart(J, e, en)
						}),
						onStop: (0, l.E)(e => {
							eo.onStop(J, e, ei), "leave" !== e || x(eo) || (B("hidden"), Z(J))
						})
					}), (0, i.useEffect)(() => {
						ee && (U === o.l4.Hidden ? Y.current = null : Y.current = F)
					}, [F, ee, z]);
					let ea = I;
					return L && F && w.O.isServer && (ea = {
						...ea,
						className: (0, v.A)(I.className, ...q.current.enter, ...q.current.enterFrom)
					}), i.createElement(A.Provider, {
						value: eo
					}, i.createElement(a.up, {
						value: (0, s.E)(z, {
							visible: a.ZM.Open,
							hidden: a.ZM.Closed
						}) | er.flags
					}, (0, o.sY)({
						ourProps: {
							ref: N
						},
						theirProps: ea,
						defaultTag: "div",
						features: R,
						visible: "visible" === z,
						name: "Transition.Child"
					})))
				}),
				T = (0, o.yV)(function(e, t) {
					let r = null !== (0, i.useContext)(E),
						n = null !== (0, a.oJ)();
					return i.createElement(i.Fragment, null, !r && n ? i.createElement(H, {
						ref: t,
						...e
					}) : i.createElement(O, {
						ref: t,
						...e
					}))
				}),
				j = Object.assign(H, {
					Child: T,
					Root: H
				})
		},
		94192: function(e, t, r) {
			"use strict";
			r.d(t, {
				G: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(9362);

			function o() {
				let [e] = (0, n.useState)(i.k);
				return (0, n.useEffect)(() => () => e.dispose(), [e]), e
			}
		},
		73781: function(e, t, r) {
			"use strict";
			r.d(t, {
				z: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(3855);
			let o = function(e) {
				let t = (0, i.E)(e);
				return n.useCallback((...e) => t.current(...e), [t])
			}
		},
		19946: function(e, t, r) {
			"use strict";
			r.d(t, {
				M: function() {
					return u
				}
			});
			var n, i = r(67294),
				o = r(16723),
				a = r(82180),
				s = r(77896);
			let u = null != (n = i.useId) ? n : function() {
				let e = (0, a.H)(),
					[t, r] = i.useState(e ? () => s.O.nextId() : null);
				return (0, o.e)(() => {
					null === t && r(s.O.nextId())
				}, [t]), null != t ? "" + t : void 0
			}
		},
		14879: function(e, t, r) {
			"use strict";
			r.d(t, {
				t: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(16723);

			function o() {
				let e = (0, n.useRef)(!1);
				return (0, i.e)(() => (e.current = !0, () => {
					e.current = !1
				}), []), e
			}
		},
		16723: function(e, t, r) {
			"use strict";
			r.d(t, {
				e: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(77896);
			let o = (e, t) => {
				i.O.isServer ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
			}
		},
		3855: function(e, t, r) {
			"use strict";
			r.d(t, {
				E: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(16723);

			function o(e) {
				let t = (0, n.useRef)(e);
				return (0, i.e)(() => {
					t.current = e
				}, [e]), t
			}
		},
		14157: function(e, t, r) {
			"use strict";
			r.d(t, {
				f: function() {
					return a
				}
			});
			var n = r(67294),
				i = r(16723);

			function o(e) {
				var t;
				if (e.type) return e.type;
				let r = null != (t = e.as) ? t : "button";
				if ("string" == typeof r && "button" === r.toLowerCase()) return "button"
			}

			function a(e, t) {
				let [r, a] = (0, n.useState)(() => o(e));
				return (0, i.e)(() => {
					a(o(e))
				}, [e.type, e.as]), (0, i.e)(() => {
					r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button")
				}, [r, t]), r
			}
		},
		82180: function(e, t, r) {
			"use strict";
			r.d(t, {
				H: function() {
					return o
				}
			});
			var n = r(67294),
				i = r(77896);

			function o() {
				let [e, t] = (0, n.useState)(i.O.isHandoffComplete);
				return e && !1 === i.O.isHandoffComplete && t(!1), (0, n.useEffect)(() => {
					!0 !== e && t(!0)
				}, [e]), (0, n.useEffect)(() => i.O.handoff(), []), e
			}
		},
		23784: function(e, t, r) {
			"use strict";
			r.d(t, {
				T: function() {
					return s
				},
				h: function() {
					return a
				}
			});
			var n = r(67294),
				i = r(73781);
			let o = Symbol();

			function a(e, t = !0) {
				return Object.assign(e, {
					[o]: t
				})
			}

			function s(...e) {
				let t = (0, n.useRef)(e);
				(0, n.useEffect)(() => {
					t.current = e
				}, [e]);
				let r = (0, i.z)(e => {
					for (let r of t.current) null != r && ("function" == typeof r ? r(e) : r.current = e)
				});
				return e.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : r
			}
		},
		46045: function(e, t, r) {
			"use strict";
			r.d(t, {
				A: function() {
					return o
				},
				_: function() {
					return a
				}
			});
			var n, i = r(12351),
				o = ((n = o || {})[n.None = 1] = "None", n[n.Focusable = 2] = "Focusable", n[n.Hidden = 4] = "Hidden", n);
			let a = (0, i.yV)(function(e, t) {
				let {
					features: r = 1,
					...n
				} = e, o = {
					ref: t,
					"aria-hidden": (2 & r) == 2 || void 0,
					style: {
						position: "fixed",
						top: 1,
						left: 1,
						width: 1,
						height: 0,
						padding: 0,
						margin: -1,
						overflow: "hidden",
						clip: "rect(0, 0, 0, 0)",
						whiteSpace: "nowrap",
						borderWidth: "0",
						...(4 & r) == 4 && (2 & r) != 2 && {
							display: "none"
						}
					}
				};
				return (0, i.sY)({
					ourProps: o,
					theirProps: n,
					slot: {},
					defaultTag: "div",
					name: "Hidden"
				})
			})
		},
		16567: function(e, t, r) {
			"use strict";
			r.d(t, {
				ZM: function() {
					return a
				},
				oJ: function() {
					return s
				},
				up: function() {
					return u
				}
			});
			var n, i = r(67294);
			let o = (0, i.createContext)(null);
			o.displayName = "OpenClosedContext";
			var a = ((n = a || {})[n.Open = 1] = "Open", n[n.Closed = 2] = "Closed", n[n.Closing = 4] = "Closing", n[n.Opening = 8] = "Opening", n);

			function s() {
				return (0, i.useContext)(o)
			}

			function u({
				value: e,
				children: t
			}) {
				return i.createElement(o.Provider, {
					value: e
				}, t)
			}
		},
		64103: function(e, t, r) {
			"use strict";

			function n(e) {
				let t = e.parentElement,
					r = null;
				for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
				let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
				return !(n && function(e) {
					if (!e) return !1;
					let t = e.previousElementSibling;
					for (; null !== t;) {
						if (t instanceof HTMLLegendElement) return !1;
						t = t.previousElementSibling
					}
					return !0
				}(r)) && n
			}
			r.d(t, {
				P: function() {
					return n
				}
			})
		},
		44067: function(e, t, r) {
			"use strict";

			function n(...e) {
				return e.filter(Boolean).join(" ")
			}
			r.d(t, {
				A: function() {
					return n
				}
			})
		},
		9362: function(e, t, r) {
			"use strict";
			r.d(t, {
				k: function() {
					return i
				}
			});
			var n = r(81021);

			function i() {
				let e = [],
					t = {
						addEventListener: (e, r, n, i) => (e.addEventListener(r, n, i), t.add(() => e.removeEventListener(r, n, i))),
						requestAnimationFrame(...e) {
							let r = requestAnimationFrame(...e);
							return t.add(() => cancelAnimationFrame(r))
						},
						nextFrame: (...e) => t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
						setTimeout(...e) {
							let r = setTimeout(...e);
							return t.add(() => clearTimeout(r))
						},
						microTask(...e) {
							let r = {
								current: !0
							};
							return (0, n.Y)(() => {
								r.current && e[0]()
							}), t.add(() => {
								r.current = !1
							})
						},
						add: t => (e.push(t), () => {
							let r = e.indexOf(t);
							if (r >= 0) {
								let [t] = e.splice(r, 1);
								t()
							}
						}),
						dispose() {
							for (let t of e.splice(0)) t()
						},
						style(e, t, r) {
							let n = e.style.getPropertyValue(t);
							return Object.assign(e.style, {
								[t]: r
							}), this.add(() => {
								Object.assign(e.style, {
									[t]: n
								})
							})
						}
					};
				return t
			}
		},
		77896: function(e, t, r) {
			"use strict";
			r.d(t, {
				O: function() {
					return a
				}
			});
			var n = Object.defineProperty,
				i = (e, t, r) => t in e ? n(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: r
				}) : e[t] = r,
				o = (e, t, r) => (i(e, "symbol" != typeof t ? t + "" : t, r), r);
			let a = new class {
				constructor() {
					o(this, "current", this.detect()), o(this, "handoffState", "pending"), o(this, "currentId", 0)
				}
				set(e) {
					this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
				}
				reset() {
					this.set(this.detect())
				}
				nextId() {
					return ++this.currentId
				}
				get isServer() {
					return "server" === this.current
				}
				get isClient() {
					return "client" === this.current
				}
				detect() {
					return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
				}
				handoff() {
					"pending" === this.handoffState && (this.handoffState = "complete")
				}
				get isHandoffComplete() {
					return "complete" === this.handoffState
				}
			}
		},
		32984: function(e, t, r) {
			"use strict";

			function n(e, t, ...r) {
				if (e in t) {
					let n = t[e];
					return "function" == typeof n ? n(...r) : n
				}
				let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
				throw Error.captureStackTrace && Error.captureStackTrace(i, n), i
			}
			r.d(t, {
				E: function() {
					return n
				}
			})
		},
		81021: function(e, t, r) {
			"use strict";

			function n(e) {
				"function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
					throw e
				}))
			}
			r.d(t, {
				Y: function() {
					return n
				}
			})
		},
		15466: function(e, t, r) {
			"use strict";
			r.d(t, {
				r: function() {
					return i
				}
			});
			var n = r(77896);

			function i(e) {
				return n.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
			}
		},
		12351: function(e, t, r) {
			"use strict";
			r.d(t, {
				AN: function() {
					return u
				},
				l4: function() {
					return c
				},
				oA: function() {
					return h
				},
				sY: function() {
					return l
				},
				yV: function() {
					return p
				}
			});
			var n, i, o = r(67294),
				a = r(44067),
				s = r(32984),
				u = ((n = u || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
				c = ((i = c || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);

			function l({
				ourProps: e,
				theirProps: t,
				slot: r,
				defaultTag: n,
				features: i,
				visible: o = !0,
				name: a
			}) {
				let u = f(t, e);
				if (o) return d(u, r, n, a);
				let c = null != i ? i : 0;
				if (2 & c) {
					let {
						static: e = !1,
						...t
					} = u;
					if (e) return d(t, r, n, a)
				}
				if (1 & c) {
					let {
						unmount: e = !0,
						...t
					} = u;
					return (0, s.E)(e ? 0 : 1, {
						0: () => null,
						1: () => d({
							...t,
							hidden: !0,
							style: {
								display: "none"
							}
						}, r, n, a)
					})
				}
				return d(u, r, n, a)
			}

			function d(e, t = {}, r, n) {
				var i;
				let {
					as: s = r,
					children: u,
					refName: c = "ref",
					...l
				} = y(e, ["unmount", "static"]), d = void 0 !== e.ref ? {
					[c]: e.ref
				} : {}, p = "function" == typeof u ? u(t) : u;
				"className" in l && l.className && "function" == typeof l.className && (l.className = l.className(t));
				let m = {};
				if (t) {
					let e = !1,
						r = [];
					for (let [n, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && r.push(n);
					e && (m["data-headlessui-state"] = r.join(" "))
				}
				if (s === o.Fragment && Object.keys(h(l)).length > 0) {
					if (!(0, o.isValidElement)(p) || Array.isArray(p) && p.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
					let e = (0, a.A)(null == (i = p.props) ? void 0 : i.className, l.className);
					return (0, o.cloneElement)(p, Object.assign({}, f(p.props, h(y(l, ["ref"]))), m, d, function(...e) {
						return {
							ref: e.every(e => null == e) ? void 0 : t => {
								for (let r of e) null != r && ("function" == typeof r ? r(t) : r.current = t)
							}
						}
					}(p.ref, d.ref), e ? {
						className: e
					} : {}))
				}
				return (0, o.createElement)(s, Object.assign({}, y(l, ["ref"]), s !== o.Fragment && d, s !== o.Fragment && m), p)
			}

			function f(...e) {
				if (0 === e.length) return {};
				if (1 === e.length) return e[0];
				let t = {},
					r = {};
				for (let n of e)
					for (let e in n) e.startsWith("on") && "function" == typeof n[e] ? (null != r[e] || (r[e] = []), r[e].push(n[e])) : t[e] = n[e];
				if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(e => [e, void 0])));
				for (let e in r) Object.assign(t, {
					[e](t, ...n) {
						for (let i of r[e]) {
							if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
							i(t, ...n)
						}
					}
				});
				return t
			}

			function p(e) {
				var t;
				return Object.assign((0, o.forwardRef)(e), {
					displayName: null != (t = e.displayName) ? t : e.name
				})
			}

			function h(e) {
				let t = Object.assign({}, e);
				for (let e in t) void 0 === t[e] && delete t[e];
				return t
			}

			function y(e, t = []) {
				let r = Object.assign({}, e);
				for (let e of t) e in r && delete r[e];
				return r
			}
		},
		62136: function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, {
				CompactEncrypt: function() {
					return th
				},
				CompactSign: function() {
					return tg
				},
				EmbeddedJWK: function() {
					return tk
				},
				EncryptJWT: function() {
					return tS
				},
				FlattenedEncrypt: function() {
					return e8
				},
				FlattenedSign: function() {
					return tm
				},
				GeneralEncrypt: function() {
					return e3
				},
				GeneralSign: function() {
					return tw
				},
				SignJWT: function() {
					return tE
				},
				UnsecuredJWT: function() {
					return tM
				},
				base64url: function() {
					return i
				},
				calculateJwkThumbprint: function() {
					return tx
				},
				calculateJwkThumbprintUri: function() {
					return tP
				},
				compactDecrypt: function() {
					return eq
				},
				compactVerify: function() {
					return tr
				},
				createLocalJWKSet: function() {
					return tO
				},
				createRemoteJWKSet: function() {
					return tW
				},
				decodeJwt: function() {
					return tJ
				},
				decodeProtectedHeader: function() {
					return tI
				},
				errors: function() {
					return n
				},
				exportJWK: function() {
					return e2
				},
				exportPKCS8: function() {
					return e1
				},
				exportSPKI: function() {
					return e0
				},
				flattenedDecrypt: function() {
					return eY
				},
				flattenedVerify: function() {
					return tt
				},
				generalDecrypt: function() {
					return eX
				},
				generalVerify: function() {
					return tn
				},
				generateKeyPair: function() {
					return tL
				},
				generateSecret: function() {
					return t$
				},
				importJWK: function() {
					return eI
				},
				importPKCS8: function() {
					return eD
				},
				importSPKI: function() {
					return eM
				},
				importX509: function() {
					return eK
				},
				jwtDecrypt: function() {
					return tp
				},
				jwtVerify: function() {
					return tf
				}
			});
			var n = {};
			r.r(n), r.d(n, {
				JOSEAlgNotAllowed: function() {
					return A
				},
				JOSEError: function() {
					return b
				},
				JOSENotSupported: function() {
					return x
				},
				JWEDecryptionFailed: function() {
					return P
				},
				JWEInvalid: function() {
					return k
				},
				JWKInvalid: function() {
					return R
				},
				JWKSInvalid: function() {
					return H
				},
				JWKSMultipleMatchingKeys: function() {
					return T
				},
				JWKSNoMatchingKey: function() {
					return O
				},
				JWKSTimeout: function() {
					return j
				},
				JWSInvalid: function() {
					return _
				},
				JWSSignatureVerificationFailed: function() {
					return W
				},
				JWTClaimValidationFailed: function() {
					return E
				},
				JWTExpired: function() {
					return S
				},
				JWTInvalid: function() {
					return C
				}
			});
			var i = {};
			r.r(i), r.d(i, {
				decode: function() {
					return tD
				},
				encode: function() {
					return tK
				}
			});
			var o = crypto;
			let a = e => e instanceof CryptoKey,
				s = async (e, t) => {
					let r = `SHA-${e.slice(-3)}`;
					return new Uint8Array(await o.subtle.digest(r, t))
				}, u = new TextEncoder, c = new TextDecoder;

			function l(...e) {
				let t = e.reduce((e, {
						length: t
					}) => e + t, 0),
					r = new Uint8Array(t),
					n = 0;
				return e.forEach(e => {
					r.set(e, n), n += e.length
				}), r
			}

			function d(e, t, r) {
				if (t < 0 || t >= 4294967296) throw RangeError(`value must be >= 0 and <= ${4294967296-1}. Received ${t}`);
				e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
			}

			function f(e) {
				let t = new Uint8Array(8);
				return d(t, Math.floor(e / 4294967296), 0), d(t, e % 4294967296, 4), t
			}

			function p(e) {
				let t = new Uint8Array(4);
				return d(t, e), t
			}

			function h(e) {
				return l(p(e.length), e)
			}
			async function y(e, t, r) {
				let n = Math.ceil((t >> 3) / 32),
					i = new Uint8Array(32 * n);
				for (let t = 0; t < n; t++) {
					let n = new Uint8Array(4 + e.length + r.length);
					n.set(p(t + 1)), n.set(e, 4), n.set(r, 4 + e.length), i.set(await s("sha256", n), 32 * t)
				}
				return i.slice(0, t >> 3)
			}
			let m = e => {
					let t = e;
					"string" == typeof t && (t = u.encode(t));
					let r = [];
					for (let e = 0; e < t.length; e += 32768) r.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
					return btoa(r.join(""))
				},
				g = e => m(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
				v = e => {
					let t = atob(e),
						r = new Uint8Array(t.length);
					for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
					return r
				},
				w = e => {
					let t = e;
					t instanceof Uint8Array && (t = c.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
					try {
						return v(t)
					} catch (e) {
						throw TypeError("The input to be decoded is not correctly encoded.")
					}
				};
			class b extends Error {
				static get code() {
					return "ERR_JOSE_GENERIC"
				}
				constructor(e) {
					var t;
					super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor)
				}
			}
			class E extends b {
				static get code() {
					return "ERR_JWT_CLAIM_VALIDATION_FAILED"
				}
				constructor(e, t = "unspecified", r = "unspecified") {
					super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = r
				}
			}
			class S extends b {
				static get code() {
					return "ERR_JWT_EXPIRED"
				}
				constructor(e, t = "unspecified", r = "unspecified") {
					super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = r
				}
			}
			class A extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
				}
				static get code() {
					return "ERR_JOSE_ALG_NOT_ALLOWED"
				}
			}
			class x extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
				}
				static get code() {
					return "ERR_JOSE_NOT_SUPPORTED"
				}
			}
			class P extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed"
				}
				static get code() {
					return "ERR_JWE_DECRYPTION_FAILED"
				}
			}
			class k extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWE_INVALID"
				}
				static get code() {
					return "ERR_JWE_INVALID"
				}
			}
			class _ extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWS_INVALID"
				}
				static get code() {
					return "ERR_JWS_INVALID"
				}
			}
			class C extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWT_INVALID"
				}
				static get code() {
					return "ERR_JWT_INVALID"
				}
			}
			class R extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWK_INVALID"
				}
				static get code() {
					return "ERR_JWK_INVALID"
				}
			}
			class H extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWKS_INVALID"
				}
				static get code() {
					return "ERR_JWKS_INVALID"
				}
			}
			class O extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set"
				}
				static get code() {
					return "ERR_JWKS_NO_MATCHING_KEY"
				}
			}
			class T extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set"
				}
				static get code() {
					return "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
				}
			}
			class j extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out"
				}
				static get code() {
					return "ERR_JWKS_TIMEOUT"
				}
			}
			class W extends b {
				constructor() {
					super(...arguments), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed"
				}
				static get code() {
					return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
				}
			}
			var M = o.getRandomValues.bind(o);

			function K(e) {
				switch (e) {
					case "A128GCM":
					case "A128GCMKW":
					case "A192GCM":
					case "A192GCMKW":
					case "A256GCM":
					case "A256GCMKW":
						return 96;
					case "A128CBC-HS256":
					case "A192CBC-HS384":
					case "A256CBC-HS512":
						return 128;
					default:
						throw new x(`Unsupported JWE Algorithm: ${e}`)
				}
			}
			var D = e => M(new Uint8Array(K(e) >> 3));
			let I = (e, t) => {
					if (t.length << 3 !== K(e)) throw new k("Invalid Initialization Vector length")
				},
				J = (e, t) => {
					let r = e.byteLength << 3;
					if (r !== t) throw new k(`Invalid Content Encryption Key length. Expected ${t} bits, got ${r} bits`)
				},
				N = (e, t) => {
					if (!(e instanceof Uint8Array)) throw TypeError("First argument must be a buffer");
					if (!(t instanceof Uint8Array)) throw TypeError("Second argument must be a buffer");
					if (e.length !== t.length) throw TypeError("Input buffers must have the same length");
					let r = e.length,
						n = 0,
						i = -1;
					for (; ++i < r;) n |= e[i] ^ t[i];
					return 0 === n
				};

			function U() {
				return "undefined" != typeof WebSocketPair || "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" != typeof EdgeRuntime && "vercel" === EdgeRuntime
			}

			function F(e, t = "algorithm.name") {
				return TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
			}

			function L(e, t) {
				return e.name === t
			}

			function $(e) {
				return parseInt(e.name.slice(4), 10)
			}

			function z(e, t) {
				if (t.length && !t.some(t => e.usages.includes(t))) {
					let e = "CryptoKey does not support this operation, its usages must include ";
					if (t.length > 2) {
						let r = t.pop();
						e += `one of ${t.join(", ")}, or ${r}.`
					} else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
					throw TypeError(e)
				}
			}

			function B(e, t, ...r) {
				switch (t) {
					case "A128GCM":
					case "A192GCM":
					case "A256GCM": {
						if (!L(e.algorithm, "AES-GCM")) throw F("AES-GCM");
						let r = parseInt(t.slice(1, 4), 10),
							n = e.algorithm.length;
						if (n !== r) throw F(r, "algorithm.length");
						break
					}
					case "A128KW":
					case "A192KW":
					case "A256KW": {
						if (!L(e.algorithm, "AES-KW")) throw F("AES-KW");
						let r = parseInt(t.slice(1, 4), 10),
							n = e.algorithm.length;
						if (n !== r) throw F(r, "algorithm.length");
						break
					}
					case "ECDH":
						switch (e.algorithm.name) {
							case "ECDH":
							case "X25519":
							case "X448":
								break;
							default:
								throw F("ECDH, X25519, or X448")
						}
						break;
					case "PBES2-HS256+A128KW":
					case "PBES2-HS384+A192KW":
					case "PBES2-HS512+A256KW":
						if (!L(e.algorithm, "PBKDF2")) throw F("PBKDF2");
						break;
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512": {
						if (!L(e.algorithm, "RSA-OAEP")) throw F("RSA-OAEP");
						let r = parseInt(t.slice(9), 10) || 1,
							n = $(e.algorithm.hash);
						if (n !== r) throw F(`SHA-${r}`, "algorithm.hash");
						break
					}
					default:
						throw TypeError("CryptoKey does not support this operation")
				}
				z(e, r)
			}

			function G(e, t, ...r) {
				if (r.length > 2) {
					let t = r.pop();
					e += `one of type ${r.join(", ")}, or ${t}.`
				} else 2 === r.length ? e += `one of type ${r[0]} or ${r[1]}.` : e += `of type ${r[0]}.`;
				return null == t ? e += ` Received ${t}` : "function" == typeof t && t.name ? e += ` Received function ${t.name}` : "object" == typeof t && null != t && t.constructor && t.constructor.name && (e += ` Received an instance of ${t.constructor.name}`), e
			}
			var V = (e, ...t) => G("Key must be ", e, ...t);

			function Z(e, t, ...r) {
				return G(`Key for the ${e} algorithm must be `, t, ...r)
			}
			var Y = e => a(e);
			let q = ["CryptoKey"];
			async function X(e, t, r, n, i, a) {
				let s, u;
				if (!(t instanceof Uint8Array)) throw TypeError(V(t, "Uint8Array"));
				let c = parseInt(e.slice(1, 4), 10),
					d = await o.subtle.importKey("raw", t.subarray(c >> 3), "AES-CBC", !1, ["decrypt"]),
					p = await o.subtle.importKey("raw", t.subarray(0, c >> 3), {
						hash: `SHA-${c<<1}`,
						name: "HMAC"
					}, !1, ["sign"]),
					h = l(a, n, r, f(a.length << 3)),
					y = new Uint8Array((await o.subtle.sign("HMAC", p, h)).slice(0, c >> 3));
				try {
					s = N(i, y)
				} catch (e) {}
				if (!s) throw new P;
				try {
					u = new Uint8Array(await o.subtle.decrypt({
						iv: n,
						name: "AES-CBC"
					}, d, r))
				} catch (e) {}
				if (!u) throw new P;
				return u
			}
			async function Q(e, t, r, n, i, a) {
				let s;
				t instanceof Uint8Array ? s = await o.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]) : (B(t, e, "decrypt"), s = t);
				try {
					return new Uint8Array(await o.subtle.decrypt({
						additionalData: a,
						iv: n,
						name: "AES-GCM",
						tagLength: 128
					}, s, l(r, i)))
				} catch (e) {
					throw new P
				}
			}
			let ee = async (e, t, r, n, i, o) => {
				if (!a(t) && !(t instanceof Uint8Array)) throw TypeError(V(t, ...q, "Uint8Array"));
				switch (I(e, n), e) {
					case "A128CBC-HS256":
					case "A192CBC-HS384":
					case "A256CBC-HS512":
						return t instanceof Uint8Array && J(t, parseInt(e.slice(-3), 10)), X(e, t, r, n, i, o);
					case "A128GCM":
					case "A192GCM":
					case "A256GCM":
						return t instanceof Uint8Array && J(t, parseInt(e.slice(1, 4), 10)), Q(e, t, r, n, i, o);
					default:
						throw new x("Unsupported JWE Content Encryption Algorithm")
				}
			}, et = async () => {
				throw new x('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.')
			}, er = async () => {
				throw new x('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.')
			}, en = (...e) => {
				let t;
				let r = e.filter(Boolean);
				if (0 === r.length || 1 === r.length) return !0;
				for (let e of r) {
					let r = Object.keys(e);
					if (!t || 0 === t.size) {
						t = new Set(r);
						continue
					}
					for (let e of r) {
						if (t.has(e)) return !1;
						t.add(e)
					}
				}
				return !0
			};

			function ei(e) {
				if (!("object" == typeof e && null !== e) || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
				if (null === Object.getPrototypeOf(e)) return !0;
				let t = e;
				for (; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
				return Object.getPrototypeOf(e) === t
			}
			var eo = [{
				hash: "SHA-256",
				name: "HMAC"
			}, !0, ["sign"]];

			function ea(e, t) {
				if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw TypeError(`Invalid key size for alg: ${t}`)
			}

			function es(e, t, r) {
				if (a(e)) return B(e, t, r), e;
				if (e instanceof Uint8Array) return o.subtle.importKey("raw", e, "AES-KW", !0, [r]);
				throw TypeError(V(e, ...q, "Uint8Array"))
			}
			let eu = async (e, t, r) => {
				let n = await es(t, e, "wrapKey");
				ea(n, e);
				let i = await o.subtle.importKey("raw", r, ...eo);
				return new Uint8Array(await o.subtle.wrapKey("raw", i, n, "AES-KW"))
			}, ec = async (e, t, r) => {
				let n = await es(t, e, "unwrapKey");
				ea(n, e);
				let i = await o.subtle.unwrapKey("raw", r, n, "AES-KW", ...eo);
				return new Uint8Array(await o.subtle.exportKey("raw", i))
			};
			async function el(e, t, r, n, i = new Uint8Array(0), s = new Uint8Array(0)) {
				let c;
				if (!a(e)) throw TypeError(V(e, ...q));
				if (B(e, "ECDH"), !a(t)) throw TypeError(V(t, ...q));
				B(t, "ECDH", "deriveBits");
				let d = l(h(u.encode(r)), h(i), h(s), p(n));
				c = "X25519" === e.algorithm.name ? 256 : "X448" === e.algorithm.name ? 448 : Math.ceil(parseInt(e.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
				let f = new Uint8Array(await o.subtle.deriveBits({
					name: e.algorithm.name,
					public: e
				}, t, c));
				return y(f, n, d)
			}
			async function ed(e) {
				if (!a(e)) throw TypeError(V(e, ...q));
				return o.subtle.generateKey(e.algorithm, !0, ["deriveBits"])
			}

			function ef(e) {
				if (!a(e)) throw TypeError(V(e, ...q));
				return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name
			}
			async function ep(e, t, r, n) {
				! function(e) {
					if (!(e instanceof Uint8Array) || e.length < 8) throw new k("PBES2 Salt Input must be 8 or more octets")
				}(e);
				let i = l(u.encode(t), new Uint8Array([0]), e),
					s = parseInt(t.slice(13, 16), 10),
					c = {
						hash: `SHA-${t.slice(8,11)}`,
						iterations: r,
						name: "PBKDF2",
						salt: i
					},
					d = await
				function(e, t) {
					if (e instanceof Uint8Array) return o.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
					if (a(e)) return B(e, t, "deriveBits", "deriveKey"), e;
					throw TypeError(V(e, ...q, "Uint8Array"))
				}(n, t);
				if (d.usages.includes("deriveBits")) return new Uint8Array(await o.subtle.deriveBits(c, d, s));
				if (d.usages.includes("deriveKey")) return o.subtle.deriveKey(c, d, {
					length: s,
					name: "AES-KW"
				}, !1, ["wrapKey", "unwrapKey"]);
				throw TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"')
			}
			let eh = async (e, t, r, n = 2048, i = M(new Uint8Array(16))) => {
				let o = await ep(i, e, n, t),
					a = await eu(e.slice(-6), o, r);
				return {
					encryptedKey: a,
					p2c: n,
					p2s: g(i)
				}
			}, ey = async (e, t, r, n, i) => {
				let o = await ep(i, e, n, t);
				return ec(e.slice(-6), o, r)
			};

			function em(e) {
				switch (e) {
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512":
						return "RSA-OAEP";
					default:
						throw new x(`alg ${e} is not supported either by JOSE or your javascript runtime`)
				}
			}
			var eg = (e, t) => {
				if (e.startsWith("RS") || e.startsWith("PS")) {
					let {
						modulusLength: r
					} = t.algorithm;
					if ("number" != typeof r || r < 2048) throw TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
				}
			};
			let ev = async (e, t, r) => {
				if (!a(t)) throw TypeError(V(t, ...q));
				if (B(t, e, "encrypt", "wrapKey"), eg(e, t), t.usages.includes("encrypt")) return new Uint8Array(await o.subtle.encrypt(em(e), t, r));
				if (t.usages.includes("wrapKey")) {
					let n = await o.subtle.importKey("raw", r, ...eo);
					return new Uint8Array(await o.subtle.wrapKey("raw", n, t, em(e)))
				}
				throw TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation')
			}, ew = async (e, t, r) => {
				if (!a(t)) throw TypeError(V(t, ...q));
				if (B(t, e, "decrypt", "unwrapKey"), eg(e, t), t.usages.includes("decrypt")) return new Uint8Array(await o.subtle.decrypt(em(e), t, r));
				if (t.usages.includes("unwrapKey")) {
					let n = await o.subtle.unwrapKey("raw", r, t, em(e), ...eo);
					return new Uint8Array(await o.subtle.exportKey("raw", n))
				}
				throw TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation')
			};

			function eb(e) {
				switch (e) {
					case "A128GCM":
						return 128;
					case "A192GCM":
						return 192;
					case "A256GCM":
					case "A128CBC-HS256":
						return 256;
					case "A192CBC-HS384":
						return 384;
					case "A256CBC-HS512":
						return 512;
					default:
						throw new x(`Unsupported JWE Algorithm: ${e}`)
				}
			}
			var eE = e => M(new Uint8Array(eb(e) >> 3)),
				eS = (e, t) => {
					let r = (e.match(/.{1,64}/g) || []).join("\n");
					return `-----BEGIN ${t}-----
${r}
-----END ${t}-----`
				};
			let eA = async (e, t, r) => {
				if (!a(r)) throw TypeError(V(r, ...q));
				if (!r.extractable) throw TypeError("CryptoKey is not extractable");
				if (r.type !== e) throw TypeError(`key is not a ${e} key`);
				return eS(m(new Uint8Array(await o.subtle.exportKey(t, r))), `${e.toUpperCase()} KEY`)
			}, ex = e => eA("public", "spki", e), eP = e => eA("private", "pkcs8", e), ek = (e, t, r = 0) => {
				0 === r && (t.unshift(t.length), t.unshift(6));
				let n = e.indexOf(t[0], r);
				if (-1 === n) return !1;
				let i = e.subarray(n, n + t.length);
				return i.length === t.length && (i.every((e, r) => e === t[r]) || ek(e, t, n + 1))
			}, e_ = e => {
				switch (!0) {
					case ek(e, [42, 134, 72, 206, 61, 3, 1, 7]):
						return "P-256";
					case ek(e, [43, 129, 4, 0, 34]):
						return "P-384";
					case ek(e, [43, 129, 4, 0, 35]):
						return "P-521";
					case ek(e, [43, 101, 110]):
						return "X25519";
					case ek(e, [43, 101, 111]):
						return "X448";
					case ek(e, [43, 101, 112]):
						return "Ed25519";
					case ek(e, [43, 101, 113]):
						return "Ed448";
					default:
						throw new x("Invalid or unsupported EC Key Curve or OKP Key Sub Type")
				}
			}, eC = async (e, t, r, n, i) => {
				var a, s;
				let u, c;
				let l = new Uint8Array(atob(r.replace(e, "")).split("").map(e => e.charCodeAt(0))),
					d = "spki" === t;
				switch (n) {
					case "PS256":
					case "PS384":
					case "PS512":
						u = {
							name: "RSA-PSS",
							hash: `SHA-${n.slice(-3)}`
						}, c = d ? ["verify"] : ["sign"];
						break;
					case "RS256":
					case "RS384":
					case "RS512":
						u = {
							name: "RSASSA-PKCS1-v1_5",
							hash: `SHA-${n.slice(-3)}`
						}, c = d ? ["verify"] : ["sign"];
						break;
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512":
						u = {
							name: "RSA-OAEP",
							hash: `SHA-${parseInt(n.slice(-3),10)||1}`
						}, c = d ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
						break;
					case "ES256":
						u = {
							name: "ECDSA",
							namedCurve: "P-256"
						}, c = d ? ["verify"] : ["sign"];
						break;
					case "ES384":
						u = {
							name: "ECDSA",
							namedCurve: "P-384"
						}, c = d ? ["verify"] : ["sign"];
						break;
					case "ES512":
						u = {
							name: "ECDSA",
							namedCurve: "P-521"
						}, c = d ? ["verify"] : ["sign"];
						break;
					case "ECDH-ES":
					case "ECDH-ES+A128KW":
					case "ECDH-ES+A192KW":
					case "ECDH-ES+A256KW": {
						let e = e_(l);
						u = e.startsWith("P-") ? {
							name: "ECDH",
							namedCurve: e
						} : {
							name: e
						}, c = d ? [] : ["deriveBits"];
						break
					}
					case "EdDSA":
						u = {
							name: e_(l)
						}, c = d ? ["verify"] : ["sign"];
						break;
					default:
						throw new x('Invalid or unsupported "alg" (Algorithm) value')
				}
				try {
					return await o.subtle.importKey(t, l, u, null !== (a = null == i ? void 0 : i.extractable) && void 0 !== a && a, c)
				} catch (e) {
					if ("Ed25519" === u.name && (null == e ? void 0 : e.name) === "NotSupportedError" && U()) return u = {
						name: "NODE-ED25519",
						namedCurve: "NODE-ED25519"
					}, await o.subtle.importKey(t, l, u, null !== (s = null == i ? void 0 : i.extractable) && void 0 !== s && s, c);
					throw e
				}
			}, eR = (e, t, r) => eC(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, r), eH = (e, t, r) => eC(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, r);

			function eO(e) {
				let t = [],
					r = 0;
				for (; r < e.length;) {
					let n = eT(e.subarray(r));
					t.push(n), r += n.byteLength
				}
				return t
			}

			function eT(e) {
				let t = 0,
					r = 31 & e[0];
				if (t++, 31 === r) {
					for (r = 0; e[t] >= 128;) r = 128 * r + e[t] - 128, t++;
					r = 128 * r + e[t] - 128, t++
				}
				let n = 0;
				if (e[t] < 128) n = e[t], t++;
				else if (128 === n) {
					for (n = 0; 0 !== e[t + n] || 0 !== e[t + n + 1];) {
						if (n > e.byteLength) throw TypeError("invalid indefinite form length");
						n++
					}
					let r = t + n + 2;
					return {
						byteLength: r,
						contents: e.subarray(t, t + n),
						raw: e.subarray(0, r)
					}
				} else {
					let r = 127 & e[t];
					t++, n = 0;
					for (let i = 0; i < r; i++) n = 256 * n + e[t], t++
				}
				let i = t + n;
				return {
					byteLength: i,
					contents: e.subarray(t, i),
					raw: e.subarray(0, i)
				}
			}
			let ej = (e, t, r) => {
					let n;
					try {
						n = function(e) {
							let t = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""),
								r = v(t);
							return eS(function(e) {
								let t = eO(eO(eT(e).contents)[0].contents);
								return m(t[160 === t[0].raw[0] ? 6 : 5].raw)
							}(r), "PUBLIC KEY")
						}(e)
					} catch (e) {
						throw TypeError("failed to parse the X.509 certificate", {
							cause: e
						})
					}
					return eH(n, t, r)
				},
				eW = async e => {
					var t, r;
					if (!e.alg) throw TypeError('"alg" argument is required when "jwk.alg" is not present');
					let {
						algorithm: n,
						keyUsages: i
					} = function(e) {
						let t, r;
						switch (e.kty) {
							case "oct":
								switch (e.alg) {
									case "HS256":
									case "HS384":
									case "HS512":
										t = {
											name: "HMAC",
											hash: `SHA-${e.alg.slice(-3)}`
										}, r = ["sign", "verify"];
										break;
									case "A128CBC-HS256":
									case "A192CBC-HS384":
									case "A256CBC-HS512":
										throw new x(`${e.alg} keys cannot be imported as CryptoKey instances`);
									case "A128GCM":
									case "A192GCM":
									case "A256GCM":
									case "A128GCMKW":
									case "A192GCMKW":
									case "A256GCMKW":
										t = {
											name: "AES-GCM"
										}, r = ["encrypt", "decrypt"];
										break;
									case "A128KW":
									case "A192KW":
									case "A256KW":
										t = {
											name: "AES-KW"
										}, r = ["wrapKey", "unwrapKey"];
										break;
									case "PBES2-HS256+A128KW":
									case "PBES2-HS384+A192KW":
									case "PBES2-HS512+A256KW":
										t = {
											name: "PBKDF2"
										}, r = ["deriveBits"];
										break;
									default:
										throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
								}
								break;
							case "RSA":
								switch (e.alg) {
									case "PS256":
									case "PS384":
									case "PS512":
										t = {
											name: "RSA-PSS",
											hash: `SHA-${e.alg.slice(-3)}`
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "RS256":
									case "RS384":
									case "RS512":
										t = {
											name: "RSASSA-PKCS1-v1_5",
											hash: `SHA-${e.alg.slice(-3)}`
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "RSA-OAEP":
									case "RSA-OAEP-256":
									case "RSA-OAEP-384":
									case "RSA-OAEP-512":
										t = {
											name: "RSA-OAEP",
											hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
										}, r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
										break;
									default:
										throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
								}
								break;
							case "EC":
								switch (e.alg) {
									case "ES256":
										t = {
											name: "ECDSA",
											namedCurve: "P-256"
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "ES384":
										t = {
											name: "ECDSA",
											namedCurve: "P-384"
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "ES512":
										t = {
											name: "ECDSA",
											namedCurve: "P-521"
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "ECDH-ES":
									case "ECDH-ES+A128KW":
									case "ECDH-ES+A192KW":
									case "ECDH-ES+A256KW":
										t = {
											name: "ECDH",
											namedCurve: e.crv
										}, r = e.d ? ["deriveBits"] : [];
										break;
									default:
										throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
								}
								break;
							case "OKP":
								switch (e.alg) {
									case "EdDSA":
										t = {
											name: e.crv
										}, r = e.d ? ["sign"] : ["verify"];
										break;
									case "ECDH-ES":
									case "ECDH-ES+A128KW":
									case "ECDH-ES+A192KW":
									case "ECDH-ES+A256KW":
										t = {
											name: e.crv
										}, r = e.d ? ["deriveBits"] : [];
										break;
									default:
										throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
								}
								break;
							default:
								throw new x('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
						}
						return {
							algorithm: t,
							keyUsages: r
						}
					}(e), a = [n, null !== (t = e.ext) && void 0 !== t && t, null !== (r = e.key_ops) && void 0 !== r ? r : i];
					if ("PBKDF2" === n.name) return o.subtle.importKey("raw", w(e.k), ...a);
					let s = {
						...e
					};
					delete s.alg, delete s.use;
					try {
						return await o.subtle.importKey("jwk", s, ...a)
					} catch (e) {
						if ("Ed25519" === n.name && (null == e ? void 0 : e.name) === "NotSupportedError" && U()) return a[0] = {
							name: "NODE-ED25519",
							namedCurve: "NODE-ED25519"
						}, await o.subtle.importKey("jwk", s, ...a);
						throw e
					}
				};
			async function eM(e, t, r) {
				if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----")) throw TypeError('"spki" must be SPKI formatted string');
				return eH(e, t, r)
			}
			async function eK(e, t, r) {
				if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN CERTIFICATE-----")) throw TypeError('"x509" must be X.509 formatted string');
				return ej(e, t, r)
			}
			async function eD(e, t, r) {
				if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")) throw TypeError('"pkcs8" must be PKCS#8 formatted string');
				return eR(e, t, r)
			}
			async function eI(e, t, r) {
				var n;
				if (!ei(e)) throw TypeError("JWK must be an object");
				switch (t || (t = e.alg), e.kty) {
					case "oct":
						if ("string" != typeof e.k || !e.k) throw TypeError('missing "k" (Key Value) Parameter value');
						if (null != r || (r = !0 !== e.ext), r) return eW({
							...e,
							alg: t,
							ext: null !== (n = e.ext) && void 0 !== n && n
						});
						return w(e.k);
					case "RSA":
						if (void 0 !== e.oth) throw new x('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
					case "EC":
					case "OKP":
						return eW({
							...e,
							alg: t
						});
					default:
						throw new x('Unsupported "kty" (Key Type) Parameter value')
				}
			}
			let eJ = (e, t) => {
					if (!(t instanceof Uint8Array)) {
						if (!Y(t)) throw TypeError(Z(e, t, ...q, "Uint8Array"));
						if ("secret" !== t.type) throw TypeError(`${q.join(" or ")} instances for symmetric algorithms must be of type "secret"`)
					}
				},
				eN = (e, t, r) => {
					if (!Y(t)) throw TypeError(Z(e, t, ...q));
					if ("secret" === t.type) throw TypeError(`${q.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
					if ("sign" === r && "public" === t.type) throw TypeError(`${q.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
					if ("decrypt" === r && "public" === t.type) throw TypeError(`${q.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
					if (t.algorithm && "verify" === r && "private" === t.type) throw TypeError(`${q.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
					if (t.algorithm && "encrypt" === r && "private" === t.type) throw TypeError(`${q.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)
				},
				eU = (e, t, r) => {
					let n = e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e);
					n ? eJ(e, t) : eN(e, t, r)
				};
			async function eF(e, t, r, n, i) {
				if (!(r instanceof Uint8Array)) throw TypeError(V(r, "Uint8Array"));
				let a = parseInt(e.slice(1, 4), 10),
					s = await o.subtle.importKey("raw", r.subarray(a >> 3), "AES-CBC", !1, ["encrypt"]),
					u = await o.subtle.importKey("raw", r.subarray(0, a >> 3), {
						hash: `SHA-${a<<1}`,
						name: "HMAC"
					}, !1, ["sign"]),
					c = new Uint8Array(await o.subtle.encrypt({
						iv: n,
						name: "AES-CBC"
					}, s, t)),
					d = l(i, n, c, f(i.length << 3)),
					p = new Uint8Array((await o.subtle.sign("HMAC", u, d)).slice(0, a >> 3));
				return {
					ciphertext: c,
					tag: p
				}
			}
			async function eL(e, t, r, n, i) {
				let a;
				r instanceof Uint8Array ? a = await o.subtle.importKey("raw", r, "AES-GCM", !1, ["encrypt"]) : (B(r, e, "encrypt"), a = r);
				let s = new Uint8Array(await o.subtle.encrypt({
						additionalData: i,
						iv: n,
						name: "AES-GCM",
						tagLength: 128
					}, a, t)),
					u = s.slice(-16),
					c = s.slice(0, -16);
				return {
					ciphertext: c,
					tag: u
				}
			}
			let e$ = async (e, t, r, n, i) => {
				if (!a(r) && !(r instanceof Uint8Array)) throw TypeError(V(r, ...q, "Uint8Array"));
				switch (I(e, n), e) {
					case "A128CBC-HS256":
					case "A192CBC-HS384":
					case "A256CBC-HS512":
						return r instanceof Uint8Array && J(r, parseInt(e.slice(-3), 10)), eF(e, t, r, n, i);
					case "A128GCM":
					case "A192GCM":
					case "A256GCM":
						return r instanceof Uint8Array && J(r, parseInt(e.slice(1, 4), 10)), eL(e, t, r, n, i);
					default:
						throw new x("Unsupported JWE Content Encryption Algorithm")
				}
			};
			async function ez(e, t, r, n) {
				let i = e.slice(0, 7);
				n || (n = D(i));
				let {
					ciphertext: o,
					tag: a
				} = await e$(i, r, t, n, new Uint8Array(0));
				return {
					encryptedKey: o,
					iv: g(n),
					tag: g(a)
				}
			}
			async function eB(e, t, r, n, i) {
				let o = e.slice(0, 7);
				return ee(o, t, r, n, i, new Uint8Array(0))
			}
			async function eG(e, t, r, n, i) {
				switch (eU(e, t, "decrypt"), e) {
					case "dir":
						if (void 0 !== r) throw new k("Encountered unexpected JWE Encrypted Key");
						return t;
					case "ECDH-ES":
						if (void 0 !== r) throw new k("Encountered unexpected JWE Encrypted Key");
					case "ECDH-ES+A128KW":
					case "ECDH-ES+A192KW":
					case "ECDH-ES+A256KW": {
						let i, o;
						if (!ei(n.epk)) throw new k('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
						if (!ef(t)) throw new x("ECDH with the provided key is not allowed or not supported by your javascript runtime");
						let a = await eI(n.epk, e);
						if (void 0 !== n.apu) {
							if ("string" != typeof n.apu) throw new k('JOSE Header "apu" (Agreement PartyUInfo) invalid');
							i = w(n.apu)
						}
						if (void 0 !== n.apv) {
							if ("string" != typeof n.apv) throw new k('JOSE Header "apv" (Agreement PartyVInfo) invalid');
							o = w(n.apv)
						}
						let s = await el(a, t, "ECDH-ES" === e ? n.enc : e, "ECDH-ES" === e ? eb(n.enc) : parseInt(e.slice(-5, -2), 10), i, o);
						if ("ECDH-ES" === e) return s;
						if (void 0 === r) throw new k("JWE Encrypted Key missing");
						return ec(e.slice(-6), s, r)
					}
					case "RSA1_5":
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512":
						if (void 0 === r) throw new k("JWE Encrypted Key missing");
						return ew(e, t, r);
					case "PBES2-HS256+A128KW":
					case "PBES2-HS384+A192KW":
					case "PBES2-HS512+A256KW": {
						if (void 0 === r) throw new k("JWE Encrypted Key missing");
						if ("number" != typeof n.p2c) throw new k('JOSE Header "p2c" (PBES2 Count) missing or invalid');
						let o = (null == i ? void 0 : i.maxPBES2Count) || 1e4;
						if (n.p2c > o) throw new k('JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds');
						if ("string" != typeof n.p2s) throw new k('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
						return ey(e, t, r, n.p2c, w(n.p2s))
					}
					case "A128KW":
					case "A192KW":
					case "A256KW":
						if (void 0 === r) throw new k("JWE Encrypted Key missing");
						return ec(e, t, r);
					case "A128GCMKW":
					case "A192GCMKW":
					case "A256GCMKW": {
						if (void 0 === r) throw new k("JWE Encrypted Key missing");
						if ("string" != typeof n.iv) throw new k('JOSE Header "iv" (Initialization Vector) missing or invalid');
						if ("string" != typeof n.tag) throw new k('JOSE Header "tag" (Authentication Tag) missing or invalid');
						let i = w(n.iv),
							o = w(n.tag);
						return eB(e, t, r, i, o)
					}
					default:
						throw new x('Invalid or unsupported "alg" (JWE Algorithm) header value')
				}
			}
			var eV = function(e, t, r, n, i) {
				let o;
				if (void 0 !== i.crit && void 0 === n.crit) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
				if (!n || void 0 === n.crit) return new Set;
				if (!Array.isArray(n.crit) || 0 === n.crit.length || n.crit.some(e => "string" != typeof e || 0 === e.length)) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
				for (let a of (o = void 0 !== r ? new Map([...Object.entries(r), ...t.entries()]) : t, n.crit)) {
					if (!o.has(a)) throw new x(`Extension Header Parameter "${a}" is not recognized`);
					if (void 0 === i[a]) throw new e(`Extension Header Parameter "${a}" is missing`);
					if (o.get(a) && void 0 === n[a]) throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`)
				}
				return new Set(n.crit)
			};
			let eZ = (e, t) => {
				if (void 0 !== t && (!Array.isArray(t) || t.some(e => "string" != typeof e))) throw TypeError(`"${e}" option must be an array of strings`);
				if (t) return new Set(t)
			};
			async function eY(e, t, r) {
				var n;
				let i, o, a, s;
				if (!ei(e)) throw new k("Flattened JWE must be an object");
				if (void 0 === e.protected && void 0 === e.header && void 0 === e.unprotected) throw new k("JOSE Header missing");
				if ("string" != typeof e.iv) throw new k("JWE Initialization Vector missing or incorrect type");
				if ("string" != typeof e.ciphertext) throw new k("JWE Ciphertext missing or incorrect type");
				if ("string" != typeof e.tag) throw new k("JWE Authentication Tag missing or incorrect type");
				if (void 0 !== e.protected && "string" != typeof e.protected) throw new k("JWE Protected Header incorrect type");
				if (void 0 !== e.encrypted_key && "string" != typeof e.encrypted_key) throw new k("JWE Encrypted Key incorrect type");
				if (void 0 !== e.aad && "string" != typeof e.aad) throw new k("JWE AAD incorrect type");
				if (void 0 !== e.header && !ei(e.header)) throw new k("JWE Shared Unprotected Header incorrect type");
				if (void 0 !== e.unprotected && !ei(e.unprotected)) throw new k("JWE Per-Recipient Unprotected Header incorrect type");
				if (e.protected) try {
					let t = w(e.protected);
					i = JSON.parse(c.decode(t))
				} catch (e) {
					throw new k("JWE Protected Header is invalid")
				}
				if (!en(i, e.header, e.unprotected)) throw new k("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
				let d = {
					...i,
					...e.header,
					...e.unprotected
				};
				if (eV(k, new Map, null == r ? void 0 : r.crit, i, d), void 0 !== d.zip) {
					if (!i || !i.zip) throw new k('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
					if ("DEF" !== d.zip) throw new x('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
				}
				let {
					alg: f,
					enc: p
				} = d;
				if ("string" != typeof f || !f) throw new k("missing JWE Algorithm (alg) in JWE Header");
				if ("string" != typeof p || !p) throw new k("missing JWE Encryption Algorithm (enc) in JWE Header");
				let h = r && eZ("keyManagementAlgorithms", r.keyManagementAlgorithms),
					y = r && eZ("contentEncryptionAlgorithms", r.contentEncryptionAlgorithms);
				if (h && !h.has(f)) throw new A('"alg" (Algorithm) Header Parameter not allowed');
				if (y && !y.has(p)) throw new A('"enc" (Encryption Algorithm) Header Parameter not allowed');
				void 0 !== e.encrypted_key && (o = w(e.encrypted_key));
				let m = !1;
				"function" == typeof t && (t = await t(i, e), m = !0);
				try {
					a = await eG(f, t, o, d, r)
				} catch (e) {
					if (e instanceof TypeError || e instanceof k || e instanceof x) throw e;
					a = eE(p)
				}
				let g = w(e.iv),
					v = w(e.tag),
					b = u.encode(null !== (n = e.protected) && void 0 !== n ? n : "");
				s = void 0 !== e.aad ? l(b, u.encode("."), u.encode(e.aad)) : b;
				let E = await ee(p, a, w(e.ciphertext), g, v, s);
				"DEF" === d.zip && (E = await ((null == r ? void 0 : r.inflateRaw) || et)(E));
				let S = {
					plaintext: E
				};
				return (void 0 !== e.protected && (S.protectedHeader = i), void 0 !== e.aad && (S.additionalAuthenticatedData = w(e.aad)), void 0 !== e.unprotected && (S.sharedUnprotectedHeader = e.unprotected), void 0 !== e.header && (S.unprotectedHeader = e.header), m) ? {
					...S,
					key: t
				} : S
			}
			async function eq(e, t, r) {
				if (e instanceof Uint8Array && (e = c.decode(e)), "string" != typeof e) throw new k("Compact JWE must be a string or Uint8Array");
				let {
					0: n,
					1: i,
					2: o,
					3: a,
					4: s,
					length: u
				} = e.split(".");
				if (5 !== u) throw new k("Invalid Compact JWE");
				let l = await eY({
						ciphertext: a,
						iv: o || void 0,
						protected: n || void 0,
						tag: s || void 0,
						encrypted_key: i || void 0
					}, t, r),
					d = {
						plaintext: l.plaintext,
						protectedHeader: l.protectedHeader
					};
				return "function" == typeof t ? {
					...d,
					key: l.key
				} : d
			}
			async function eX(e, t, r) {
				if (!ei(e)) throw new k("General JWE must be an object");
				if (!Array.isArray(e.recipients) || !e.recipients.every(ei)) throw new k("JWE Recipients missing or incorrect type");
				if (!e.recipients.length) throw new k("JWE Recipients has no members");
				for (let n of e.recipients) try {
					return await eY({
						aad: e.aad,
						ciphertext: e.ciphertext,
						encrypted_key: n.encrypted_key,
						header: n.header,
						iv: e.iv,
						protected: e.protected,
						tag: e.tag,
						unprotected: e.unprotected
					}, t, r)
				} catch (e) {}
				throw new P
			}
			let eQ = async e => {
				if (e instanceof Uint8Array) return {
					kty: "oct",
					k: g(e)
				};
				if (!a(e)) throw TypeError(V(e, ...q, "Uint8Array"));
				if (!e.extractable) throw TypeError("non-extractable CryptoKey cannot be exported as a JWK");
				let {
					ext: t,
					key_ops: r,
					alg: n,
					use: i,
					...s
				} = await o.subtle.exportKey("jwk", e);
				return s
			};
			async function e0(e) {
				return ex(e)
			}
			async function e1(e) {
				return eP(e)
			}
			async function e2(e) {
				return eQ(e)
			}
			async function e6(e, t, r, n, i = {}) {
				let o, a, s;
				switch (eU(e, r, "encrypt"), e) {
					case "dir":
						s = r;
						break;
					case "ECDH-ES":
					case "ECDH-ES+A128KW":
					case "ECDH-ES+A192KW":
					case "ECDH-ES+A256KW": {
						if (!ef(r)) throw new x("ECDH with the provided key is not allowed or not supported by your javascript runtime");
						let {
							apu: u,
							apv: c
						} = i, {
							epk: l
						} = i;
						l || (l = (await ed(r)).privateKey);
						let {
							x: d,
							y: f,
							crv: p,
							kty: h
						} = await e2(l), y = await el(r, l, "ECDH-ES" === e ? t : e, "ECDH-ES" === e ? eb(t) : parseInt(e.slice(-5, -2), 10), u, c);
						if (a = {
								epk: {
									x: d,
									crv: p,
									kty: h
								}
							}, "EC" === h && (a.epk.y = f), u && (a.apu = g(u)), c && (a.apv = g(c)), "ECDH-ES" === e) {
							s = y;
							break
						}
						s = n || eE(t);
						let m = e.slice(-6);
						o = await eu(m, y, s);
						break
					}
					case "RSA1_5":
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512":
						s = n || eE(t), o = await ev(e, r, s);
						break;
					case "PBES2-HS256+A128KW":
					case "PBES2-HS384+A192KW":
					case "PBES2-HS512+A256KW": {
						s = n || eE(t);
						let {
							p2c: u,
							p2s: c
						} = i;
						({
							encryptedKey: o,
							...a
						} = await eh(e, r, s, u, c));
						break
					}
					case "A128KW":
					case "A192KW":
					case "A256KW":
						s = n || eE(t), o = await eu(e, r, s);
						break;
					case "A128GCMKW":
					case "A192GCMKW":
					case "A256GCMKW": {
						s = n || eE(t);
						let {
							iv: u
						} = i;
						({
							encryptedKey: o,
							...a
						} = await ez(e, r, s, u));
						break
					}
					default:
						throw new x('Invalid or unsupported "alg" (JWE Algorithm) header value')
				}
				return {
					cek: s,
					encryptedKey: o,
					parameters: a
				}
			}
			let e5 = Symbol();
			class e8 {
				constructor(e) {
					if (!(e instanceof Uint8Array)) throw TypeError("plaintext must be an instance of Uint8Array");
					this._plaintext = e
				}
				setKeyManagementParameters(e) {
					if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
					return this._keyManagementParameters = e, this
				}
				setProtectedHeader(e) {
					if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
					return this._protectedHeader = e, this
				}
				setSharedUnprotectedHeader(e) {
					if (this._sharedUnprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
					return this._sharedUnprotectedHeader = e, this
				}
				setUnprotectedHeader(e) {
					if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
					return this._unprotectedHeader = e, this
				}
				setAdditionalAuthenticatedData(e) {
					return this._aad = e, this
				}
				setContentEncryptionKey(e) {
					if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
					return this._cek = e, this
				}
				setInitializationVector(e) {
					if (this._iv) throw TypeError("setInitializationVector can only be called once");
					return this._iv = e, this
				}
				async encrypt(e, t) {
					let r, n, i, o, a, s, d;
					if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new k("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
					if (!en(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new k("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
					let f = {
						...this._protectedHeader,
						...this._unprotectedHeader,
						...this._sharedUnprotectedHeader
					};
					if (eV(k, new Map, null == t ? void 0 : t.crit, this._protectedHeader, f), void 0 !== f.zip) {
						if (!this._protectedHeader || !this._protectedHeader.zip) throw new k('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
						if ("DEF" !== f.zip) throw new x('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
					}
					let {
						alg: p,
						enc: h
					} = f;
					if ("string" != typeof p || !p) throw new k('JWE "alg" (Algorithm) Header Parameter missing or invalid');
					if ("string" != typeof h || !h) throw new k('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
					if ("dir" === p) {
						if (this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Encryption")
					} else if ("ECDH-ES" === p && this._cek) throw TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement"); {
						let i;
						({
							cek: n,
							encryptedKey: r,
							parameters: i
						} = await e6(p, h, e, this._cek, this._keyManagementParameters)), i && (t && e5 in t ? this._unprotectedHeader ? this._unprotectedHeader = {
							...this._unprotectedHeader,
							...i
						} : this.setUnprotectedHeader(i) : this._protectedHeader ? this._protectedHeader = {
							...this._protectedHeader,
							...i
						} : this.setProtectedHeader(i))
					}
					if (this._iv || (this._iv = D(h)), o = this._protectedHeader ? u.encode(g(JSON.stringify(this._protectedHeader))) : u.encode(""), this._aad ? (a = g(this._aad), i = l(o, u.encode("."), u.encode(a))) : i = o, "DEF" === f.zip) {
						let e = await ((null == t ? void 0 : t.deflateRaw) || er)(this._plaintext);
						({
							ciphertext: s,
							tag: d
						} = await e$(h, e, n, this._iv, i))
					} else({
						ciphertext: s,
						tag: d
					} = await e$(h, this._plaintext, n, this._iv, i));
					let y = {
						ciphertext: g(s),
						iv: g(this._iv),
						tag: g(d)
					};
					return r && (y.encrypted_key = g(r)), a && (y.aad = a), this._protectedHeader && (y.protected = c.decode(o)), this._sharedUnprotectedHeader && (y.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (y.header = this._unprotectedHeader), y
				}
			}
			class e4 {
				constructor(e, t, r) {
					this.parent = e, this.key = t, this.options = r
				}
				setUnprotectedHeader(e) {
					if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
					return this.unprotectedHeader = e, this
				}
				addRecipient(...e) {
					return this.parent.addRecipient(...e)
				}
				encrypt(...e) {
					return this.parent.encrypt(...e)
				}
				done() {
					return this.parent
				}
			}
			class e3 {
				constructor(e) {
					this._recipients = [], this._plaintext = e
				}
				addRecipient(e, t) {
					let r = new e4(this, e, {
						crit: null == t ? void 0 : t.crit
					});
					return this._recipients.push(r), r
				}
				setProtectedHeader(e) {
					if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
					return this._protectedHeader = e, this
				}
				setSharedUnprotectedHeader(e) {
					if (this._unprotectedHeader) throw TypeError("setSharedUnprotectedHeader can only be called once");
					return this._unprotectedHeader = e, this
				}
				setAdditionalAuthenticatedData(e) {
					return this._aad = e, this
				}
				async encrypt(e) {
					var t, r, n;
					let i;
					if (!this._recipients.length) throw new k("at least one recipient must be added");
					if (e = {
							deflateRaw: null == e ? void 0 : e.deflateRaw
						}, 1 === this._recipients.length) {
						let [t] = this._recipients, r = await new e8(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(t.unprotectedHeader).encrypt(t.key, {
							...t.options,
							...e
						}), n = {
							ciphertext: r.ciphertext,
							iv: r.iv,
							recipients: [{}],
							tag: r.tag
						};
						return r.aad && (n.aad = r.aad), r.protected && (n.protected = r.protected), r.unprotected && (n.unprotected = r.unprotected), r.encrypted_key && (n.recipients[0].encrypted_key = r.encrypted_key), r.header && (n.recipients[0].header = r.header), n
					}
					for (let e = 0; e < this._recipients.length; e++) {
						let t = this._recipients[e];
						if (!en(this._protectedHeader, this._unprotectedHeader, t.unprotectedHeader)) throw new k("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
						let r = {
								...this._protectedHeader,
								...this._unprotectedHeader,
								...t.unprotectedHeader
							},
							{
								alg: n
							} = r;
						if ("string" != typeof n || !n) throw new k('JWE "alg" (Algorithm) Header Parameter missing or invalid');
						if ("dir" === n || "ECDH-ES" === n) throw new k('"dir" and "ECDH-ES" alg may only be used with a single recipient');
						if ("string" != typeof r.enc || !r.enc) throw new k('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
						if (i) {
							if (i !== r.enc) throw new k('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients')
						} else i = r.enc;
						if (eV(k, new Map, t.options.crit, this._protectedHeader, r), void 0 !== r.zip && (!this._protectedHeader || !this._protectedHeader.zip)) throw new k('JWE "zip" (Compression Algorithm) Header MUST be integrity protected')
					}
					let o = eE(i),
						a = {
							ciphertext: "",
							iv: "",
							recipients: [],
							tag: ""
						};
					for (let s = 0; s < this._recipients.length; s++) {
						let u = this._recipients[s],
							c = {};
						a.recipients.push(c);
						let l = {
								...this._protectedHeader,
								...this._unprotectedHeader,
								...u.unprotectedHeader
							},
							d = l.alg.startsWith("PBES2") ? 2048 + s : void 0;
						if (0 === s) {
							let t = await new e8(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(o).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(u.unprotectedHeader).setKeyManagementParameters({
								p2c: d
							}).encrypt(u.key, {
								...u.options,
								...e,
								[e5]: !0
							});
							a.ciphertext = t.ciphertext, a.iv = t.iv, a.tag = t.tag, t.aad && (a.aad = t.aad), t.protected && (a.protected = t.protected), t.unprotected && (a.unprotected = t.unprotected), c.encrypted_key = t.encrypted_key, t.header && (c.header = t.header);
							continue
						}
						let {
							encryptedKey: f,
							parameters: p
						} = await e6((null === (t = u.unprotectedHeader) || void 0 === t ? void 0 : t.alg) || (null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.alg) || (null === (n = this._unprotectedHeader) || void 0 === n ? void 0 : n.alg), i, u.key, o, {
							p2c: d
						});
						c.encrypted_key = g(f), (u.unprotectedHeader || p) && (c.header = {
							...u.unprotectedHeader,
							...p
						})
					}
					return a
				}
			}

			function e9(e, t) {
				let r = `SHA-${e.slice(-3)}`;
				switch (e) {
					case "HS256":
					case "HS384":
					case "HS512":
						return {
							hash: r, name: "HMAC"
						};
					case "PS256":
					case "PS384":
					case "PS512":
						return {
							hash: r, name: "RSA-PSS", saltLength: e.slice(-3) >> 3
						};
					case "RS256":
					case "RS384":
					case "RS512":
						return {
							hash: r, name: "RSASSA-PKCS1-v1_5"
						};
					case "ES256":
					case "ES384":
					case "ES512":
						return {
							hash: r, name: "ECDSA", namedCurve: t.namedCurve
						};
					case "EdDSA":
						if (U() && "NODE-ED25519" === t.name) return {
							name: "NODE-ED25519",
							namedCurve: "NODE-ED25519"
						};
						return {
							name: t.name
						};
					default:
						throw new x(`alg ${e} is not supported either by JOSE or your javascript runtime`)
				}
			}

			function e7(e, t, r) {
				if (a(t)) return ! function(e, t, ...r) {
					switch (t) {
						case "HS256":
						case "HS384":
						case "HS512": {
							if (!L(e.algorithm, "HMAC")) throw F("HMAC");
							let r = parseInt(t.slice(2), 10),
								n = $(e.algorithm.hash);
							if (n !== r) throw F(`SHA-${r}`, "algorithm.hash");
							break
						}
						case "RS256":
						case "RS384":
						case "RS512": {
							if (!L(e.algorithm, "RSASSA-PKCS1-v1_5")) throw F("RSASSA-PKCS1-v1_5");
							let r = parseInt(t.slice(2), 10),
								n = $(e.algorithm.hash);
							if (n !== r) throw F(`SHA-${r}`, "algorithm.hash");
							break
						}
						case "PS256":
						case "PS384":
						case "PS512": {
							if (!L(e.algorithm, "RSA-PSS")) throw F("RSA-PSS");
							let r = parseInt(t.slice(2), 10),
								n = $(e.algorithm.hash);
							if (n !== r) throw F(`SHA-${r}`, "algorithm.hash");
							break
						}
						case "EdDSA":
							if ("Ed25519" !== e.algorithm.name && "Ed448" !== e.algorithm.name) {
								if (U()) {
									if (L(e.algorithm, "NODE-ED25519")) break;
									throw F("Ed25519, Ed448, or NODE-ED25519")
								}
								throw F("Ed25519 or Ed448")
							}
							break;
						case "ES256":
						case "ES384":
						case "ES512": {
							if (!L(e.algorithm, "ECDSA")) throw F("ECDSA");
							let r = function(e) {
									switch (e) {
										case "ES256":
											return "P-256";
										case "ES384":
											return "P-384";
										case "ES512":
											return "P-521";
										default:
											throw Error("unreachable")
									}
								}(t),
								n = e.algorithm.namedCurve;
							if (n !== r) throw F(r, "algorithm.namedCurve");
							break
						}
						default:
							throw TypeError("CryptoKey does not support this operation")
					}
					z(e, r)
				}(t, e, r), t;
				if (t instanceof Uint8Array) {
					if (!e.startsWith("HS")) throw TypeError(V(t, ...q));
					return o.subtle.importKey("raw", t, {
						hash: `SHA-${e.slice(-3)}`,
						name: "HMAC"
					}, !1, [r])
				}
				throw TypeError(V(t, ...q, "Uint8Array"))
			}
			let te = async (e, t, r, n) => {
				let i = await e7(e, t, "verify");
				eg(e, i);
				let a = e9(e, i.algorithm);
				try {
					return await o.subtle.verify(a, i, r, n)
				} catch (e) {
					return !1
				}
			};
			async function tt(e, t, r) {
				var n;
				let i;
				if (!ei(e)) throw new _("Flattened JWS must be an object");
				if (void 0 === e.protected && void 0 === e.header) throw new _('Flattened JWS must have either of the "protected" or "header" members');
				if (void 0 !== e.protected && "string" != typeof e.protected) throw new _("JWS Protected Header incorrect type");
				if (void 0 === e.payload) throw new _("JWS Payload missing");
				if ("string" != typeof e.signature) throw new _("JWS Signature missing or incorrect type");
				if (void 0 !== e.header && !ei(e.header)) throw new _("JWS Unprotected Header incorrect type");
				let o = {};
				if (e.protected) try {
					let t = w(e.protected);
					o = JSON.parse(c.decode(t))
				} catch (e) {
					throw new _("JWS Protected Header is invalid")
				}
				if (!en(o, e.header)) throw new _("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
				let a = {
						...o,
						...e.header
					},
					s = eV(_, new Map([
						["b64", !0]
					]), null == r ? void 0 : r.crit, o, a),
					d = !0;
				if (s.has("b64") && "boolean" != typeof(d = o.b64)) throw new _('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
				let {
					alg: f
				} = a;
				if ("string" != typeof f || !f) throw new _('JWS "alg" (Algorithm) Header Parameter missing or invalid');
				let p = r && eZ("algorithms", r.algorithms);
				if (p && !p.has(f)) throw new A('"alg" (Algorithm) Header Parameter not allowed');
				if (d) {
					if ("string" != typeof e.payload) throw new _("JWS Payload must be a string")
				} else if ("string" != typeof e.payload && !(e.payload instanceof Uint8Array)) throw new _("JWS Payload must be a string or an Uint8Array instance");
				let h = !1;
				"function" == typeof t && (t = await t(o, e), h = !0), eU(f, t, "verify");
				let y = l(u.encode(null !== (n = e.protected) && void 0 !== n ? n : ""), u.encode("."), "string" == typeof e.payload ? u.encode(e.payload) : e.payload),
					m = w(e.signature),
					g = await te(f, t, m, y);
				if (!g) throw new W;
				i = d ? w(e.payload) : "string" == typeof e.payload ? u.encode(e.payload) : e.payload;
				let v = {
					payload: i
				};
				return (void 0 !== e.protected && (v.protectedHeader = o), void 0 !== e.header && (v.unprotectedHeader = e.header), h) ? {
					...v,
					key: t
				} : v
			}
			async function tr(e, t, r) {
				if (e instanceof Uint8Array && (e = c.decode(e)), "string" != typeof e) throw new _("Compact JWS must be a string or Uint8Array");
				let {
					0: n,
					1: i,
					2: o,
					length: a
				} = e.split(".");
				if (3 !== a) throw new _("Invalid Compact JWS");
				let s = await tt({
						payload: i,
						protected: n,
						signature: o
					}, t, r),
					u = {
						payload: s.payload,
						protectedHeader: s.protectedHeader
					};
				return "function" == typeof t ? {
					...u,
					key: s.key
				} : u
			}
			async function tn(e, t, r) {
				if (!ei(e)) throw new _("General JWS must be an object");
				if (!Array.isArray(e.signatures) || !e.signatures.every(ei)) throw new _("JWS Signatures missing or incorrect type");
				for (let n of e.signatures) try {
					return await tt({
						header: n.header,
						payload: e.payload,
						protected: n.protected,
						signature: n.signature
					}, t, r)
				} catch (e) {}
				throw new W
			}
			var ti = e => Math.floor(e.getTime() / 1e3);
			let to = 604800,
				ta = 31557600,
				ts = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
			var tu = e => {
				let t = ts.exec(e);
				if (!t) throw TypeError("Invalid time period format");
				let r = parseFloat(t[1]),
					n = t[2].toLowerCase();
				switch (n) {
					case "sec":
					case "secs":
					case "second":
					case "seconds":
					case "s":
						return Math.round(r);
					case "minute":
					case "minutes":
					case "min":
					case "mins":
					case "m":
						return Math.round(60 * r);
					case "hour":
					case "hours":
					case "hr":
					case "hrs":
					case "h":
						return Math.round(3600 * r);
					case "day":
					case "days":
					case "d":
						return Math.round(86400 * r);
					case "week":
					case "weeks":
					case "w":
						return Math.round(r * to);
					default:
						return Math.round(r * ta)
				}
			};
			let tc = e => e.toLowerCase().replace(/^application\//, ""),
				tl = (e, t) => "string" == typeof e ? t.includes(e) : !!Array.isArray(e) && t.some(Set.prototype.has.bind(new Set(e)));
			var td = (e, t, r = {}) => {
				let n, i;
				let {
					typ: o
				} = r;
				if (o && ("string" != typeof e.typ || tc(e.typ) !== tc(o))) throw new E('unexpected "typ" JWT header value', "typ", "check_failed");
				try {
					n = JSON.parse(c.decode(t))
				} catch (e) {}
				if (!ei(n)) throw new C("JWT Claims Set must be a top-level JSON object");
				let {
					issuer: a
				} = r;
				if (a && !(Array.isArray(a) ? a : [a]).includes(n.iss)) throw new E('unexpected "iss" claim value', "iss", "check_failed");
				let {
					subject: s
				} = r;
				if (s && n.sub !== s) throw new E('unexpected "sub" claim value', "sub", "check_failed");
				let {
					audience: u
				} = r;
				if (u && !tl(n.aud, "string" == typeof u ? [u] : u)) throw new E('unexpected "aud" claim value', "aud", "check_failed");
				switch (typeof r.clockTolerance) {
					case "string":
						i = tu(r.clockTolerance);
						break;
					case "number":
						i = r.clockTolerance;
						break;
					case "undefined":
						i = 0;
						break;
					default:
						throw TypeError("Invalid clockTolerance option type")
				}
				let {
					currentDate: l
				} = r, d = ti(l || new Date);
				if ((void 0 !== n.iat || r.maxTokenAge) && "number" != typeof n.iat) throw new E('"iat" claim must be a number', "iat", "invalid");
				if (void 0 !== n.nbf) {
					if ("number" != typeof n.nbf) throw new E('"nbf" claim must be a number', "nbf", "invalid");
					if (n.nbf > d + i) throw new E('"nbf" claim timestamp check failed', "nbf", "check_failed")
				}
				if (void 0 !== n.exp) {
					if ("number" != typeof n.exp) throw new E('"exp" claim must be a number', "exp", "invalid");
					if (n.exp <= d - i) throw new S('"exp" claim timestamp check failed', "exp", "check_failed")
				}
				if (r.maxTokenAge) {
					let e = d - n.iat,
						t = "number" == typeof r.maxTokenAge ? r.maxTokenAge : tu(r.maxTokenAge);
					if (e - i > t) throw new S('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
					if (e < 0 - i) throw new E('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed")
				}
				return n
			};
			async function tf(e, t, r) {
				var n;
				let i = await tr(e, t, r);
				if ((null === (n = i.protectedHeader.crit) || void 0 === n ? void 0 : n.includes("b64")) && !1 === i.protectedHeader.b64) throw new C("JWTs MUST NOT use unencoded payload");
				let o = td(i.protectedHeader, i.payload, r),
					a = {
						payload: o,
						protectedHeader: i.protectedHeader
					};
				return "function" == typeof t ? {
					...a,
					key: i.key
				} : a
			}
			async function tp(e, t, r) {
				let n = await eq(e, t, r),
					i = td(n.protectedHeader, n.plaintext, r),
					{
						protectedHeader: o
					} = n;
				if (void 0 !== o.iss && o.iss !== i.iss) throw new E('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
				if (void 0 !== o.sub && o.sub !== i.sub) throw new E('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
				if (void 0 !== o.aud && JSON.stringify(o.aud) !== JSON.stringify(i.aud)) throw new E('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
				let a = {
					payload: i,
					protectedHeader: o
				};
				return "function" == typeof t ? {
					...a,
					key: n.key
				} : a
			}
			class th {
				constructor(e) {
					this._flattened = new e8(e)
				}
				setContentEncryptionKey(e) {
					return this._flattened.setContentEncryptionKey(e), this
				}
				setInitializationVector(e) {
					return this._flattened.setInitializationVector(e), this
				}
				setProtectedHeader(e) {
					return this._flattened.setProtectedHeader(e), this
				}
				setKeyManagementParameters(e) {
					return this._flattened.setKeyManagementParameters(e), this
				}
				async encrypt(e, t) {
					let r = await this._flattened.encrypt(e, t);
					return [r.protected, r.encrypted_key, r.iv, r.ciphertext, r.tag].join(".")
				}
			}
			let ty = async (e, t, r) => {
				let n = await e7(e, t, "sign");
				eg(e, n);
				let i = await o.subtle.sign(e9(e, n.algorithm), n, r);
				return new Uint8Array(i)
			};
			class tm {
				constructor(e) {
					if (!(e instanceof Uint8Array)) throw TypeError("payload must be an instance of Uint8Array");
					this._payload = e
				}
				setProtectedHeader(e) {
					if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
					return this._protectedHeader = e, this
				}
				setUnprotectedHeader(e) {
					if (this._unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
					return this._unprotectedHeader = e, this
				}
				async sign(e, t) {
					let r;
					if (!this._protectedHeader && !this._unprotectedHeader) throw new _("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
					if (!en(this._protectedHeader, this._unprotectedHeader)) throw new _("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
					let n = {
							...this._protectedHeader,
							...this._unprotectedHeader
						},
						i = eV(_, new Map([
							["b64", !0]
						]), null == t ? void 0 : t.crit, this._protectedHeader, n),
						o = !0;
					if (i.has("b64") && "boolean" != typeof(o = this._protectedHeader.b64)) throw new _('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
					let {
						alg: a
					} = n;
					if ("string" != typeof a || !a) throw new _('JWS "alg" (Algorithm) Header Parameter missing or invalid');
					eU(a, e, "sign");
					let s = this._payload;
					o && (s = u.encode(g(s))), r = this._protectedHeader ? u.encode(g(JSON.stringify(this._protectedHeader))) : u.encode("");
					let d = l(r, u.encode("."), s),
						f = await ty(a, e, d),
						p = {
							signature: g(f),
							payload: ""
						};
					return o && (p.payload = c.decode(s)), this._unprotectedHeader && (p.header = this._unprotectedHeader), this._protectedHeader && (p.protected = c.decode(r)), p
				}
			}
			class tg {
				constructor(e) {
					this._flattened = new tm(e)
				}
				setProtectedHeader(e) {
					return this._flattened.setProtectedHeader(e), this
				}
				async sign(e, t) {
					let r = await this._flattened.sign(e, t);
					if (void 0 === r.payload) throw TypeError("use the flattened module for creating JWS with b64: false");
					return `${r.protected}.${r.payload}.${r.signature}`
				}
			}
			class tv {
				constructor(e, t, r) {
					this.parent = e, this.key = t, this.options = r
				}
				setProtectedHeader(e) {
					if (this.protectedHeader) throw TypeError("setProtectedHeader can only be called once");
					return this.protectedHeader = e, this
				}
				setUnprotectedHeader(e) {
					if (this.unprotectedHeader) throw TypeError("setUnprotectedHeader can only be called once");
					return this.unprotectedHeader = e, this
				}
				addSignature(...e) {
					return this.parent.addSignature(...e)
				}
				sign(...e) {
					return this.parent.sign(...e)
				}
				done() {
					return this.parent
				}
			}
			class tw {
				constructor(e) {
					this._signatures = [], this._payload = e
				}
				addSignature(e, t) {
					let r = new tv(this, e, t);
					return this._signatures.push(r), r
				}
				async sign() {
					if (!this._signatures.length) throw new _("at least one signature must be added");
					let e = {
						signatures: [],
						payload: ""
					};
					for (let t = 0; t < this._signatures.length; t++) {
						let r = this._signatures[t],
							n = new tm(this._payload);
						n.setProtectedHeader(r.protectedHeader), n.setUnprotectedHeader(r.unprotectedHeader);
						let {
							payload: i,
							...o
						} = await n.sign(r.key, r.options);
						if (0 === t) e.payload = i;
						else if (e.payload !== i) throw new _("inconsistent use of JWS Unencoded Payload Option (RFC7797)");
						e.signatures.push(o)
					}
					return e
				}
			}
			class tb {
				constructor(e) {
					if (!ei(e)) throw TypeError("JWT Claims Set MUST be an object");
					this._payload = e
				}
				setIssuer(e) {
					return this._payload = {
						...this._payload,
						iss: e
					}, this
				}
				setSubject(e) {
					return this._payload = {
						...this._payload,
						sub: e
					}, this
				}
				setAudience(e) {
					return this._payload = {
						...this._payload,
						aud: e
					}, this
				}
				setJti(e) {
					return this._payload = {
						...this._payload,
						jti: e
					}, this
				}
				setNotBefore(e) {
					return "number" == typeof e ? this._payload = {
						...this._payload,
						nbf: e
					} : this._payload = {
						...this._payload,
						nbf: ti(new Date) + tu(e)
					}, this
				}
				setExpirationTime(e) {
					return "number" == typeof e ? this._payload = {
						...this._payload,
						exp: e
					} : this._payload = {
						...this._payload,
						exp: ti(new Date) + tu(e)
					}, this
				}
				setIssuedAt(e) {
					return void 0 === e ? this._payload = {
						...this._payload,
						iat: ti(new Date)
					} : this._payload = {
						...this._payload,
						iat: e
					}, this
				}
			}
			class tE extends tb {
				setProtectedHeader(e) {
					return this._protectedHeader = e, this
				}
				async sign(e, t) {
					var r;
					let n = new tg(u.encode(JSON.stringify(this._payload)));
					if (n.setProtectedHeader(this._protectedHeader), Array.isArray(null === (r = this._protectedHeader) || void 0 === r ? void 0 : r.crit) && this._protectedHeader.crit.includes("b64") && !1 === this._protectedHeader.b64) throw new C("JWTs MUST NOT use unencoded payload");
					return n.sign(e, t)
				}
			}
			class tS extends tb {
				setProtectedHeader(e) {
					if (this._protectedHeader) throw TypeError("setProtectedHeader can only be called once");
					return this._protectedHeader = e, this
				}
				setKeyManagementParameters(e) {
					if (this._keyManagementParameters) throw TypeError("setKeyManagementParameters can only be called once");
					return this._keyManagementParameters = e, this
				}
				setContentEncryptionKey(e) {
					if (this._cek) throw TypeError("setContentEncryptionKey can only be called once");
					return this._cek = e, this
				}
				setInitializationVector(e) {
					if (this._iv) throw TypeError("setInitializationVector can only be called once");
					return this._iv = e, this
				}
				replicateIssuerAsHeader() {
					return this._replicateIssuerAsHeader = !0, this
				}
				replicateSubjectAsHeader() {
					return this._replicateSubjectAsHeader = !0, this
				}
				replicateAudienceAsHeader() {
					return this._replicateAudienceAsHeader = !0, this
				}
				async encrypt(e, t) {
					let r = new th(u.encode(JSON.stringify(this._payload)));
					return this._replicateIssuerAsHeader && (this._protectedHeader = {
						...this._protectedHeader,
						iss: this._payload.iss
					}), this._replicateSubjectAsHeader && (this._protectedHeader = {
						...this._protectedHeader,
						sub: this._payload.sub
					}), this._replicateAudienceAsHeader && (this._protectedHeader = {
						...this._protectedHeader,
						aud: this._payload.aud
					}), r.setProtectedHeader(this._protectedHeader), this._iv && r.setInitializationVector(this._iv), this._cek && r.setContentEncryptionKey(this._cek), this._keyManagementParameters && r.setKeyManagementParameters(this._keyManagementParameters), r.encrypt(e, t)
				}
			}
			let tA = (e, t) => {
				if ("string" != typeof e || !e) throw new R(`${t} missing or invalid`)
			};
			async function tx(e, t) {
				let r;
				if (!ei(e)) throw TypeError("JWK must be an object");
				if (null != t || (t = "sha256"), "sha256" !== t && "sha384" !== t && "sha512" !== t) throw TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
				switch (e.kty) {
					case "EC":
						tA(e.crv, '"crv" (Curve) Parameter'), tA(e.x, '"x" (X Coordinate) Parameter'), tA(e.y, '"y" (Y Coordinate) Parameter'), r = {
							crv: e.crv,
							kty: e.kty,
							x: e.x,
							y: e.y
						};
						break;
					case "OKP":
						tA(e.crv, '"crv" (Subtype of Key Pair) Parameter'), tA(e.x, '"x" (Public Key) Parameter'), r = {
							crv: e.crv,
							kty: e.kty,
							x: e.x
						};
						break;
					case "RSA":
						tA(e.e, '"e" (Exponent) Parameter'), tA(e.n, '"n" (Modulus) Parameter'), r = {
							e: e.e,
							kty: e.kty,
							n: e.n
						};
						break;
					case "oct":
						tA(e.k, '"k" (Key Value) Parameter'), r = {
							k: e.k,
							kty: e.kty
						};
						break;
					default:
						throw new x('"kty" (Key Type) Parameter missing or unsupported')
				}
				let n = u.encode(JSON.stringify(r));
				return g(await s(t, n))
			}
			async function tP(e, t) {
				null != t || (t = "sha256");
				let r = await tx(e, t);
				return `urn:ietf:params:oauth:jwk-thumbprint:sha-${t.slice(-3)}:${r}`
			}
			async function tk(e, t) {
				let r = {
					...e,
					...null == t ? void 0 : t.header
				};
				if (!ei(r.jwk)) throw new _('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
				let n = await eI({
					...r.jwk,
					ext: !0
				}, r.alg, !0);
				if (n instanceof Uint8Array || "public" !== n.type) throw new _('"jwk" (JSON Web Key) Header Parameter must be a public key');
				return n
			}

			function t_(e) {
				return e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(tC)
			}

			function tC(e) {
				return ei(e)
			}
			class tR {
				constructor(e) {
					if (this._cached = new WeakMap, !t_(e)) throw new H("JSON Web Key Set malformed");
					this._jwks = "function" == typeof structuredClone ? structuredClone(e) : JSON.parse(JSON.stringify(e))
				}
				async getKey(e, t) {
					let {
						alg: r,
						kid: n
					} = {
						...e,
						...null == t ? void 0 : t.header
					}, i = function(e) {
						switch ("string" == typeof e && e.slice(0, 2)) {
							case "RS":
							case "PS":
								return "RSA";
							case "ES":
								return "EC";
							case "Ed":
								return "OKP";
							default:
								throw new x('Unsupported "alg" value for a JSON Web Key Set')
						}
					}(r), o = this._jwks.keys.filter(e => {
						let t = i === e.kty;
						if (t && "string" == typeof n && (t = n === e.kid), t && "string" == typeof e.alg && (t = r === e.alg), t && "string" == typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t && "EdDSA" === r && (t = "Ed25519" === e.crv || "Ed448" === e.crv), t) switch (r) {
							case "ES256":
								t = "P-256" === e.crv;
								break;
							case "ES256K":
								t = "secp256k1" === e.crv;
								break;
							case "ES384":
								t = "P-384" === e.crv;
								break;
							case "ES512":
								t = "P-521" === e.crv
						}
						return t
					}), {
						0: a,
						length: s
					} = o;
					if (0 === s) throw new O;
					if (1 !== s) {
						let e = new T,
							{
								_cached: t
							} = this;
						throw e[Symbol.asyncIterator] = async function*() {
							for (let e of o) try {
								yield await tH(t, e, r)
							} catch (e) {
								continue
							}
						}, e
					}
					return tH(this._cached, a, r)
				}
			}
			async function tH(e, t, r) {
				let n = e.get(t) || e.set(t, {}).get(t);
				if (void 0 === n[r]) {
					let e = await eI({
						...t,
						ext: !0
					}, r);
					if (e instanceof Uint8Array || "public" !== e.type) throw new H("JSON Web Key Set members must be public keys");
					n[r] = e
				}
				return n[r]
			}

			function tO(e) {
				let t = new tR(e);
				return async function(e, r) {
					return t.getKey(e, r)
				}
			}
			let tT = async (e, t, r) => {
				let n, i;
				let o = !1;
				"function" == typeof AbortController && (n = new AbortController, i = setTimeout(() => {
					o = !0, n.abort()
				}, t));
				let a = await fetch(e.href, {
					signal: n ? n.signal : void 0,
					redirect: "manual",
					headers: r.headers
				}).catch(e => {
					if (o) throw new j;
					throw e
				});
				if (void 0 !== i && clearTimeout(i), 200 !== a.status) throw new b("Expected 200 OK from the JSON Web Key Set HTTP response");
				try {
					return await a.json()
				} catch (e) {
					throw new b("Failed to parse the JSON Web Key Set HTTP response as JSON")
				}
			};
			class tj extends tR {
				constructor(e, t) {
					if (super({
							keys: []
						}), this._jwks = void 0, !(e instanceof URL)) throw TypeError("url must be an instance of URL");
					this._url = new URL(e.href), this._options = {
						agent: null == t ? void 0 : t.agent,
						headers: null == t ? void 0 : t.headers
					}, this._timeoutDuration = "number" == typeof(null == t ? void 0 : t.timeoutDuration) ? null == t ? void 0 : t.timeoutDuration : 5e3, this._cooldownDuration = "number" == typeof(null == t ? void 0 : t.cooldownDuration) ? null == t ? void 0 : t.cooldownDuration : 3e4, this._cacheMaxAge = "number" == typeof(null == t ? void 0 : t.cacheMaxAge) ? null == t ? void 0 : t.cacheMaxAge : 6e5
				}
				coolingDown() {
					return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
				}
				fresh() {
					return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
				}
				async getKey(e, t) {
					this._jwks && this.fresh() || await this.reload();
					try {
						return await super.getKey(e, t)
					} catch (r) {
						if (r instanceof O && !1 === this.coolingDown()) return await this.reload(), super.getKey(e, t);
						throw r
					}
				}
				async reload() {
					this._pendingFetch && U() && (this._pendingFetch = void 0), this._pendingFetch || (this._pendingFetch = tT(this._url, this._timeoutDuration, this._options).then(e => {
						if (!t_(e)) throw new H("JSON Web Key Set malformed");
						this._jwks = {
							keys: e.keys
						}, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
					}).catch(e => {
						throw this._pendingFetch = void 0, e
					})), await this._pendingFetch
				}
			}

			function tW(e, t) {
				let r = new tj(e, t);
				return async function(e, t) {
					return r.getKey(e, t)
				}
			}
			class tM extends tb {
				encode() {
					let e = g(JSON.stringify({
							alg: "none"
						})),
						t = g(JSON.stringify(this._payload));
					return `${e}.${t}.`
				}
				static decode(e, t) {
					let r;
					if ("string" != typeof e) throw new C("Unsecured JWT must be a string");
					let {
						0: n,
						1: i,
						2: o,
						length: a
					} = e.split(".");
					if (3 !== a || "" !== o) throw new C("Invalid Unsecured JWT");
					try {
						if (r = JSON.parse(c.decode(w(n))), "none" !== r.alg) throw Error()
					} catch (e) {
						throw new C("Invalid Unsecured JWT")
					}
					let s = td(r, w(i), t);
					return {
						payload: s,
						header: r
					}
				}
			}
			let tK = g,
				tD = w;

			function tI(e) {
				let t;
				if ("string" == typeof e) {
					let r = e.split(".");
					(3 === r.length || 5 === r.length) && ([t] = r)
				} else if ("object" == typeof e && e) {
					if ("protected" in e) t = e.protected;
					else throw TypeError("Token does not contain a Protected Header")
				}
				try {
					if ("string" != typeof t || !t) throw Error();
					let e = JSON.parse(c.decode(tD(t)));
					if (!ei(e)) throw Error();
					return e
				} catch (e) {
					throw TypeError("Invalid Token or Protected Header formatting")
				}
			}

			function tJ(e) {
				let t, r;
				if ("string" != typeof e) throw new C("JWTs must use Compact JWS serialization, JWT must be a string");
				let {
					1: n,
					length: i
				} = e.split(".");
				if (5 === i) throw new C("Only JWTs using Compact JWS serialization can be decoded");
				if (3 !== i) throw new C("Invalid JWT");
				if (!n) throw new C("JWTs must contain a payload");
				try {
					t = tD(n)
				} catch (e) {
					throw new C("Failed to parse the base64url encoded payload")
				}
				try {
					r = JSON.parse(c.decode(t))
				} catch (e) {
					throw new C("Failed to parse the decoded payload as JSON")
				}
				if (!ei(r)) throw new C("Invalid JWT Claims Set");
				return r
			}
			async function tN(e, t) {
				var r;
				let n, i, a;
				switch (e) {
					case "HS256":
					case "HS384":
					case "HS512":
						i = {
							name: "HMAC",
							hash: `SHA-${n=parseInt(e.slice(-3),10)}`,
							length: n
						}, a = ["sign", "verify"];
						break;
					case "A128CBC-HS256":
					case "A192CBC-HS384":
					case "A256CBC-HS512":
						return n = parseInt(e.slice(-3), 10), M(new Uint8Array(n >> 3));
					case "A128KW":
					case "A192KW":
					case "A256KW":
						i = {
							name: "AES-KW",
							length: n = parseInt(e.slice(1, 4), 10)
						}, a = ["wrapKey", "unwrapKey"];
						break;
					case "A128GCMKW":
					case "A192GCMKW":
					case "A256GCMKW":
					case "A128GCM":
					case "A192GCM":
					case "A256GCM":
						i = {
							name: "AES-GCM",
							length: n = parseInt(e.slice(1, 4), 10)
						}, a = ["encrypt", "decrypt"];
						break;
					default:
						throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
				}
				return o.subtle.generateKey(i, null !== (r = null == t ? void 0 : t.extractable) && void 0 !== r && r, a)
			}

			function tU(e) {
				var t;
				let r = null !== (t = null == e ? void 0 : e.modulusLength) && void 0 !== t ? t : 2048;
				if ("number" != typeof r || r < 2048) throw new x("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
				return r
			}
			async function tF(e, t) {
				var r, n, i, a;
				let s, u;
				switch (e) {
					case "PS256":
					case "PS384":
					case "PS512":
						s = {
							name: "RSA-PSS",
							hash: `SHA-${e.slice(-3)}`,
							publicExponent: new Uint8Array([1, 0, 1]),
							modulusLength: tU(t)
						}, u = ["sign", "verify"];
						break;
					case "RS256":
					case "RS384":
					case "RS512":
						s = {
							name: "RSASSA-PKCS1-v1_5",
							hash: `SHA-${e.slice(-3)}`,
							publicExponent: new Uint8Array([1, 0, 1]),
							modulusLength: tU(t)
						}, u = ["sign", "verify"];
						break;
					case "RSA-OAEP":
					case "RSA-OAEP-256":
					case "RSA-OAEP-384":
					case "RSA-OAEP-512":
						s = {
							name: "RSA-OAEP",
							hash: `SHA-${parseInt(e.slice(-3),10)||1}`,
							publicExponent: new Uint8Array([1, 0, 1]),
							modulusLength: tU(t)
						}, u = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
						break;
					case "ES256":
						s = {
							name: "ECDSA",
							namedCurve: "P-256"
						}, u = ["sign", "verify"];
						break;
					case "ES384":
						s = {
							name: "ECDSA",
							namedCurve: "P-384"
						}, u = ["sign", "verify"];
						break;
					case "ES512":
						s = {
							name: "ECDSA",
							namedCurve: "P-521"
						}, u = ["sign", "verify"];
						break;
					case "EdDSA":
						u = ["sign", "verify"];
						let c = null !== (r = null == t ? void 0 : t.crv) && void 0 !== r ? r : "Ed25519";
						switch (c) {
							case "Ed25519":
							case "Ed448":
								s = {
									name: c
								};
								break;
							default:
								throw new x("Invalid or unsupported crv option provided")
						}
						break;
					case "ECDH-ES":
					case "ECDH-ES+A128KW":
					case "ECDH-ES+A192KW":
					case "ECDH-ES+A256KW": {
						u = ["deriveKey", "deriveBits"];
						let e = null !== (n = null == t ? void 0 : t.crv) && void 0 !== n ? n : "P-256";
						switch (e) {
							case "P-256":
							case "P-384":
							case "P-521":
								s = {
									name: "ECDH",
									namedCurve: e
								};
								break;
							case "X25519":
							case "X448":
								s = {
									name: e
								};
								break;
							default:
								throw new x("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448")
						}
						break
					}
					default:
						throw new x('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
				}
				try {
					return await o.subtle.generateKey(s, null !== (i = null == t ? void 0 : t.extractable) && void 0 !== i && i, u)
				} catch (e) {
					if ("Ed25519" === s.name && (null == e ? void 0 : e.name) === "NotSupportedError" && U()) return s = {
						name: "NODE-ED25519",
						namedCurve: "NODE-ED25519"
					}, await o.subtle.generateKey(s, null !== (a = null == t ? void 0 : t.extractable) && void 0 !== a && a, u);
					throw e
				}
			}
			async function tL(e, t) {
				return tF(e, t)
			}
			async function t$(e, t) {
				return tN(e, t)
			}
		}
	}
]);