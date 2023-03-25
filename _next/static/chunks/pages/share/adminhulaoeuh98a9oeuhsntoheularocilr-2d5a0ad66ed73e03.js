(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[835], {
		94243: function(t, e, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/share/adminhulaoeuh98a9oeuhsntoheularocilr", function() {
				return n(28066)
			}])
		},
		51448: function(t, e, n) {
			"use strict";
			n.d(e, {
				Z: function() {
					return o
				}
			});
			var i = n(85893);
			n(67294);
			var r = n(9008),
				a = n.n(r);

			function o(t) {
				let {
					title: e,
					showNotification: n = !1,
					description: r = "Use ChatGPT with enhanced features like chat hitsory search, folders, integrations, prompt library, etc."
				} = t;
				return (0, i.jsxs)(a(), {
					children: [(0, i.jsx)("title", {
						children: (n ? "(*) " : "") + (e || "TypingMind — A better UI for ChatGPT")
					}), (0, i.jsx)("meta", {
						name: "title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, i.jsx)("meta", {
						name: "description",
						content: r
					}), (0, i.jsx)("meta", {
						property: "og:type",
						content: "website"
					}), (0, i.jsx)("meta", {
						property: "og:url",
						content: "https://www.typingmind.com/"
					}), (0, i.jsx)("meta", {
						property: "og:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, i.jsx)("meta", {
						property: "og:description",
						content: r
					}), (0, i.jsx)("meta", {
						property: "og:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, i.jsx)("meta", {
						property: "twitter:card",
						content: "summary_large_image"
					}), (0, i.jsx)("meta", {
						property: "twitter:url",
						content: "https://www.typingmind.com/"
					}), (0, i.jsx)("meta", {
						property: "twitter:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, i.jsx)("meta", {
						property: "twitter:description",
						content: r
					}), (0, i.jsx)("meta", {
						property: "twitter:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, i.jsx)("meta", {
						name: "viewport",
						content: "initial-scale=1, viewport-fit=cover"
					}), (0, i.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "152x152",
						href: "/apple-icon-152x152.png"
					}), (0, i.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "/apple-icon-180x180.png"
					}), (0, i.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "192x192",
						href: "/android-icon-192x192.png"
					}), (0, i.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/favicon-32x32.png"
					}), (0, i.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "96x96",
						href: "/favicon-96x96.png"
					}), (0, i.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/favicon-16x16.png"
					}), (0, i.jsx)("link", {
						rel: "manifest",
						href: "/manifest.json"
					}), (0, i.jsx)("meta", {
						name: "msapplication-TileColor",
						content: "#ffffff"
					}), (0, i.jsx)("meta", {
						name: "msapplication-TileImage",
						content: "/ms-icon-144x144.png"
					}), (0, i.jsx)("meta", {
						name: "theme-color",
						content: "#ffffff"
					})]
				})
			}
		},
		28066: function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, {
				__N_SSP: function() {
					return o
				},
				default: function() {
					return s
				}
			});
			var i = n(85893);
			n(67294);
			var r = n(51448),
				a = n(34656),
				o = !0;

			function s(t) {
				let {
					chats: e = []
				} = t;
				return (0, i.jsxs)("div", {
					children: [(0, i.jsx)(r.Z, {
						title: "AI Chats via TypingMind.com"
					}), (0, i.jsxs)("div", {
						className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",
						children: [(0, i.jsx)("div", {
							className: "py-8",
							children: (0, i.jsxs)("div", {
								className: "flex items-center justify-center space-x-2 pt-10",
								children: [(0, i.jsx)("img", {
									src: "/logo.png",
									alt: "Typing Mind",
									className: "rounded-lg w-12 h-12"
								}), (0, i.jsxs)("a", {
									href: "https://www.typingmind.com",
									className: "font-semibold text-4xl sm:text-5xl",
									children: ["Typing", (0, i.jsx)("span", {
										className: "text-blue-500",
										children: "Mind"
									})]
								}), (0, i.jsx)("span", {
									className: "bg-gradient-to-r from-purple-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-full inline-block ",
									children: "Beta"
								})]
							})
						}), (0, i.jsx)("div", {
							className: "py-8 space-y-4",
							children: e.map(t => (0, i.jsx)("div", {
								className: "bg-white shadow overflow-hidden sm:rounded-lg",
								children: (0, i.jsxs)("div", {
									className: "px-4 py-5 sm:px-6",
									children: [(0, i.jsx)("a", {
										href: "/share/" + t.uuid,
										children: (0, i.jsx)("h3", {
											className: "text-lg leading-6 font-medium text-gray-900",
											children: t.title || (0, i.jsx)("i", {
												className: "text-gray-500",
												children: "Untitled"
											})
										})
									}), (0, i.jsxs)("p", {
										className: "mt-1 max-w-2xl text-sm text-gray-500",
										children: [(0, a.Z)(new Date(t.createdAt)), " \xb7 ", t.length, " message", t.length > 1 ? "s" : "", " \xb7 ", "Posted by Anonymous"]
									})]
								})
							}))
						})]
					})]
				})
			}
		},
		34656: function(t, e, n) {
			"use strict";
			n.d(e, {
				Z: function() {
					return a
				}
			});
			let i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			function r(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = t.getDate(),
					a = i[t.getMonth()],
					o = t.getFullYear(),
					s = t.getHours(),
					c = t.getMinutes();
				return (c < 10 && (c = "0".concat(c)), e) ? "".concat(e, " at ").concat(s, ":").concat(c) : n ? "".concat(r, ". ").concat(a, " at ").concat(s, ":").concat(c) : "".concat(r, ". ").concat(a, " ").concat(o, ". at ").concat(s, ":").concat(c)
			}

			function a(t) {
				if (!t) return null;
				let e = "object" == typeof t ? t : new Date(t),
					n = new Date,
					i = new Date(n - 864e5),
					a = Math.round((n - e) / 1e3),
					o = Math.round(a / 60),
					s = n.toDateString() === e.toDateString(),
					c = i.toDateString() === e.toDateString(),
					l = n.getFullYear() === e.getFullYear();
				if (a < 5) return "now";
				if (a < 60) return "".concat(a, " seconds ago");
				if (a < 90) return "about a minute ago";
				if (o < 60) return "".concat(o, " minutes ago");
				if (s) return r(e, "Today");
				if (c) return r(e, "Yesterday");
				if (l) return r(e, !1, !0);
				return r(e)
			}
		},
		9008: function(t, e, n) {
			t.exports = n(5443)
		}
	},
	function(t) {
		t.O(0, [774, 888, 179], function() {
			return t(t.s = 94243)
		}), _N_E = t.O()
	}
]);