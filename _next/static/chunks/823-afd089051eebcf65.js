(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[823], {
		40800: function(e, t, n) {
			let r = n(67294),
				o = r.forwardRef(function({
					title: e,
					titleId: t,
					...n
				}, o) {
					return r.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: o,
						"aria-labelledby": t
					}, n), e ? r.createElement("title", {
						id: t
					}, e) : null, r.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M18 12H6"
					}))
				});
			e.exports = o
		},
		67798: function(e, t, n) {
			let r = n(67294),
				o = r.forwardRef(function({
					title: e,
					titleId: t,
					...n
				}, o) {
					return r.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: o,
						"aria-labelledby": t
					}, n), e ? r.createElement("title", {
						id: t
					}, e) : null, r.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M12 6v12m6-6H6"
					}))
				});
			e.exports = o
		},
		89290: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return l
				}
			});
			var r = n(85893),
				o = n(28368),
				s = n(40800),
				i = n(67798);
			let a = [{
				question: "Can I self-host TypingMind?",
				answer: "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available because the app is not open-source. You can deploy the app anywhere without having to update any code or settings."
			}, {
				question: "What is self-hosting?",
				answer: "Self-host means you deploy the same version of TypingMind.com on your own web hosting server and domain name for your personal use."
			}, {
				question: "Why self-hosting? What are the benefits?",
				answer: "Some people prefer to run the software on their own server for privacy and availability reasons. For example, if TypingMind.com becomes inaccessible in the future, they can still access their own version without any problem."
			}, {
				question: "What can I customize in the self-host version?",
				answer: "As of now, you cannot customize anything. You the self-host version will be exactly the same as the one you are using on TypingMind.com. I'm working on making it possible to set custom UI and branding soon. Stay tuned!"
			}, {
				question: "Where can I deploy my self-host version?",
				answer: "Anywhere! You can deploy it on your own server, or on a static web cloud service like GitHub Pages, Cloudflare Pages, AWS S3, Vercel, Netlify, Heroku, etc. You can even run it on localhost."
			}, {
				question: "Do I have access to the full source code if I want to self-host?",
				answer: "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings."
			}, {
				question: "How do I receive updates for the self-host version?",
				answer: "As of now, you will have to manually download the latest version from the website and redeploy your app. New versions can be found as an attachment from your order page: https://app.lemonsqueezy.com/my-orders/ I'm working on making this process easier. Stay tuned!"
			}, {
				question: "Do I still need a License Key and Open API Key to use the self-hosted version?",
				answer: "Yes. Both are needed, as the self-hosted version is exactly the same as the version you see on TypingMind.com. The License Key is needed in the self-host version. When you enter the license key, the app will connect to TypingMind's license server to verify your license."
			}, {
				question: "Can I have support on technical issues if I self-host?",
				answer: "Unfortunately, I cannot provide support on technical issues if you self-host. I'm working on a new offer to make the self-host process way easier. Stay tuned!"
			}, {
				question: "What permissions do I have with the self-host code?",
				answer: (0, r.jsxs)("ul", {
					className: "list-disc pl-4",
					children: [(0, r.jsx)("li", {
						children: "✅ You have access to the compiled code of the app."
					}), (0, r.jsx)("li", {
						children: "✅ You have permission to deploy and use the compiled code on your own server."
					}), (0, r.jsx)("li", {
						children: "❌ You do not have permissions to modify or redistribute the compiled code."
					}), (0, r.jsx)("li", {
						children: "❌ You do not have permissions to share or resell the compiled code."
					})]
				})
			}];

			function l() {
				return (0, r.jsx)("div", {
					className: "",
					children: (0, r.jsx)("div", {
						className: "mx-auto max-w-7xl",
						children: (0, r.jsxs)("div", {
							className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
							children: [(0, r.jsx)("h2", {
								className: "text-2xl font-bold leading-10 tracking-tight ",
								children: "Frequently asked questions"
							}), (0, r.jsx)("dl", {
								className: "mt-4 space-y-6 divide-y divide-gray-900/10",
								children: a.map(e => (0, r.jsx)(o.p, {
									as: "div",
									className: "pt-6",
									children: t => {
										let {
											open: n
										} = t;
										return (0, r.jsxs)(r.Fragment, {
											children: [(0, r.jsx)("dt", {
												children: (0, r.jsxs)(o.p.Button, {
													className: "flex w-full items-start justify-between text-left ",
													children: [(0, r.jsx)("span", {
														className: "text-base font-semibold leading-7",
														children: e.question
													}), (0, r.jsx)("span", {
														className: "ml-6 flex h-7 items-center",
														children: n ? (0, r.jsx)(s, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														}) : (0, r.jsx)(i, {
															className: "h-6 w-6",
															"aria-hidden": "true"
														})
													})]
												})
											}), (0, r.jsx)(o.p.Panel, {
												as: "dd",
												className: "mt-2 pr-12",
												children: (0, r.jsx)("p", {
													className: "text-base leading-7 text-gray-500",
													children: e.answer
												})
											})]
										})
									}
								}, e.question))
							})]
						})
					})
				})
			}
		},
		51448: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return i
				}
			});
			var r = n(85893);
			n(67294);
			var o = n(9008),
				s = n.n(o);

			function i(e) {
				let {
					title: t,
					showNotification: n = !1,
					description: o = "Use ChatGPT with enhanced features like chat hitsory search, folders, integrations, prompt library, etc."
				} = e;
				return (0, r.jsxs)(s(), {
					children: [(0, r.jsx)("title", {
						children: (n ? "(*) " : "") + (t || "TypingMind — A better UI for ChatGPT")
					}), (0, r.jsx)("meta", {
						name: "title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, r.jsx)("meta", {
						name: "description",
						content: o
					}), (0, r.jsx)("meta", {
						property: "og:type",
						content: "website"
					}), (0, r.jsx)("meta", {
						property: "og:url",
						content: "https://www.typingmind.com/"
					}), (0, r.jsx)("meta", {
						property: "og:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, r.jsx)("meta", {
						property: "og:description",
						content: o
					}), (0, r.jsx)("meta", {
						property: "og:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, r.jsx)("meta", {
						property: "twitter:card",
						content: "summary_large_image"
					}), (0, r.jsx)("meta", {
						property: "twitter:url",
						content: "https://www.typingmind.com/"
					}), (0, r.jsx)("meta", {
						property: "twitter:title",
						content: "TypingMind — A better UI for ChatGPT"
					}), (0, r.jsx)("meta", {
						property: "twitter:description",
						content: o
					}), (0, r.jsx)("meta", {
						property: "twitter:image",
						content: "https://www.typingmind.com/poster.png"
					}), (0, r.jsx)("meta", {
						name: "viewport",
						content: "initial-scale=1, viewport-fit=cover"
					}), (0, r.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "152x152",
						href: "/apple-icon-152x152.png"
					}), (0, r.jsx)("link", {
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "/apple-icon-180x180.png"
					}), (0, r.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "192x192",
						href: "/android-icon-192x192.png"
					}), (0, r.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "32x32",
						href: "/favicon-32x32.png"
					}), (0, r.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "96x96",
						href: "/favicon-96x96.png"
					}), (0, r.jsx)("link", {
						rel: "icon",
						type: "image/png",
						sizes: "16x16",
						href: "/favicon-16x16.png"
					}), (0, r.jsx)("link", {
						rel: "manifest",
						href: "/manifest.json"
					}), (0, r.jsx)("meta", {
						name: "msapplication-TileColor",
						content: "#ffffff"
					}), (0, r.jsx)("meta", {
						name: "msapplication-TileImage",
						content: "/ms-icon-144x144.png"
					}), (0, r.jsx)("meta", {
						name: "theme-color",
						content: "#ffffff"
					})]
				})
			}
		},
		9008: function(e, t, n) {
			e.exports = n(5443)
		},
		28368: function(e, t, n) {
			"use strict";
			n.d(t, {
				p: function() {
					return T
				}
			});
			var r, o, s, i = n(67294),
				a = n(32984),
				l = n(12351),
				u = n(23784),
				c = n(19946),
				d = n(61363),
				f = n(64103),
				p = n(16567),
				h = n(14157),
				m = n(15466),
				y = n(73781);
			let g = null != (s = i.startTransition) ? s : function(e) {
				e()
			};
			var v = ((r = v || {})[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r),
				w = ((o = w || {})[o.ToggleDisclosure = 0] = "ToggleDisclosure", o[o.CloseDisclosure = 1] = "CloseDisclosure", o[o.SetButtonId = 2] = "SetButtonId", o[o.SetPanelId = 3] = "SetPanelId", o[o.LinkPanel = 4] = "LinkPanel", o[o.UnlinkPanel = 5] = "UnlinkPanel", o);
			let x = {
					0: e => ({
						...e,
						disclosureState: (0, a.E)(e.disclosureState, {
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
				b = (0, i.createContext)(null);

			function j(e) {
				let t = (0, i.useContext)(b);
				if (null === t) {
					let t = Error(`<${e} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(t, j), t
				}
				return t
			}
			b.displayName = "DisclosureContext";
			let E = (0, i.createContext)(null);
			E.displayName = "DisclosureAPIContext";
			let k = (0, i.createContext)(null);

			function I(e, t) {
				return (0, a.E)(t.type, x, e, t)
			}
			k.displayName = "DisclosurePanelContext";
			let S = i.Fragment,
				P = l.AN.RenderStrategy | l.AN.Static,
				T = Object.assign((0, l.yV)(function(e, t) {
					let {
						defaultOpen: n = !1,
						...r
					} = e, o = (0, i.useRef)(null), s = (0, u.T)(t, (0, u.h)(e => {
						o.current = e
					}, void 0 === e.as || e.as === i.Fragment)), c = (0, i.useRef)(null), d = (0, i.useRef)(null), f = (0, i.useReducer)(I, {
						disclosureState: n ? 0 : 1,
						linkedPanel: !1,
						buttonRef: d,
						panelRef: c,
						buttonId: null,
						panelId: null
					}), [{
						disclosureState: h,
						buttonId: g
					}, v] = f, w = (0, y.z)(e => {
						v({
							type: 1
						});
						let t = (0, m.r)(o);
						if (!t || !g) return;
						let n = e ? e instanceof HTMLElement ? e : e.current instanceof HTMLElement ? e.current : t.getElementById(g) : t.getElementById(g);
						null == n || n.focus()
					}), x = (0, i.useMemo)(() => ({
						close: w
					}), [w]), j = (0, i.useMemo)(() => ({
						open: 0 === h,
						close: w
					}), [h, w]);
					return i.createElement(b.Provider, {
						value: f
					}, i.createElement(E.Provider, {
						value: x
					}, i.createElement(p.up, {
						value: (0, a.E)(h, {
							0: p.ZM.Open,
							1: p.ZM.Closed
						})
					}, (0, l.sY)({
						ourProps: {
							ref: s
						},
						theirProps: r,
						slot: j,
						defaultTag: S,
						name: "Disclosure"
					}))))
				}), {
					Button: (0, l.yV)(function(e, t) {
						let n = (0, c.M)(),
							{
								id: r = `headlessui-disclosure-button-${n}`,
								...o
							} = e,
							[s, a] = j("Disclosure.Button"),
							p = (0, i.useContext)(k),
							m = null !== p && p === s.panelId,
							g = (0, i.useRef)(null),
							v = (0, u.T)(g, t, m ? null : s.buttonRef);
						(0, i.useEffect)(() => {
							if (!m) return a({
								type: 2,
								buttonId: r
							}), () => {
								a({
									type: 2,
									buttonId: null
								})
							}
						}, [r, a, m]);
						let w = (0, y.z)(e => {
								var t;
								if (m) {
									if (1 === s.disclosureState) return;
									switch (e.key) {
										case d.R.Space:
										case d.R.Enter:
											e.preventDefault(), e.stopPropagation(), a({
												type: 0
											}), null == (t = s.buttonRef.current) || t.focus()
									}
								} else switch (e.key) {
									case d.R.Space:
									case d.R.Enter:
										e.preventDefault(), e.stopPropagation(), a({
											type: 0
										})
								}
							}),
							x = (0, y.z)(e => {
								e.key === d.R.Space && e.preventDefault()
							}),
							b = (0, y.z)(t => {
								var n;
								(0, f.P)(t.currentTarget) || e.disabled || (m ? (a({
									type: 0
								}), null == (n = s.buttonRef.current) || n.focus()) : a({
									type: 0
								}))
							}),
							E = (0, i.useMemo)(() => ({
								open: 0 === s.disclosureState
							}), [s]),
							I = (0, h.f)(e, g),
							S = m ? {
								ref: v,
								type: I,
								onKeyDown: w,
								onClick: b
							} : {
								ref: v,
								id: r,
								type: I,
								"aria-expanded": e.disabled ? void 0 : 0 === s.disclosureState,
								"aria-controls": s.linkedPanel ? s.panelId : void 0,
								onKeyDown: w,
								onKeyUp: x,
								onClick: b
							};
						return (0, l.sY)({
							ourProps: S,
							theirProps: o,
							slot: E,
							defaultTag: "button",
							name: "Disclosure.Button"
						})
					}),
					Panel: (0, l.yV)(function(e, t) {
						let n = (0, c.M)(),
							{
								id: r = `headlessui-disclosure-panel-${n}`,
								...o
							} = e,
							[s, a] = j("Disclosure.Panel"),
							{
								close: d
							} = function e(t) {
								let n = (0, i.useContext)(E);
								if (null === n) {
									let n = Error(`<${t} /> is missing a parent <Disclosure /> component.`);
									throw Error.captureStackTrace && Error.captureStackTrace(n, e), n
								}
								return n
							}("Disclosure.Panel"),
							f = (0, u.T)(t, s.panelRef, e => {
								g(() => a({
									type: e ? 4 : 5
								}))
							});
						(0, i.useEffect)(() => (a({
							type: 3,
							panelId: r
						}), () => {
							a({
								type: 3,
								panelId: null
							})
						}), [r, a]);
						let h = (0, p.oJ)(),
							m = null !== h ? (h & p.ZM.Open) === p.ZM.Open : 0 === s.disclosureState,
							y = (0, i.useMemo)(() => ({
								open: 0 === s.disclosureState,
								close: d
							}), [s, d]);
						return i.createElement(k.Provider, {
							value: s.panelId
						}, (0, l.sY)({
							ourProps: {
								ref: f,
								id: r
							},
							theirProps: o,
							slot: y,
							defaultTag: "div",
							features: P,
							visible: m,
							name: "Disclosure.Panel"
						}))
					})
				})
		},
		61363: function(e, t, n) {
			"use strict";
			n.d(t, {
				R: function() {
					return o
				}
			});
			var r, o = ((r = o || {}).Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r)
		},
		73781: function(e, t, n) {
			"use strict";
			n.d(t, {
				z: function() {
					return s
				}
			});
			var r = n(67294),
				o = n(3855);
			let s = function(e) {
				let t = (0, o.E)(e);
				return r.useCallback((...e) => t.current(...e), [t])
			}
		},
		19946: function(e, t, n) {
			"use strict";
			n.d(t, {
				M: function() {
					return l
				}
			});
			var r, o = n(67294),
				s = n(16723),
				i = n(82180),
				a = n(77896);
			let l = null != (r = o.useId) ? r : function() {
				let e = (0, i.H)(),
					[t, n] = o.useState(e ? () => a.O.nextId() : null);
				return (0, s.e)(() => {
					null === t && n(a.O.nextId())
				}, [t]), null != t ? "" + t : void 0
			}
		},
		16723: function(e, t, n) {
			"use strict";
			n.d(t, {
				e: function() {
					return s
				}
			});
			var r = n(67294),
				o = n(77896);
			let s = (e, t) => {
				o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t)
			}
		},
		3855: function(e, t, n) {
			"use strict";
			n.d(t, {
				E: function() {
					return s
				}
			});
			var r = n(67294),
				o = n(16723);

			function s(e) {
				let t = (0, r.useRef)(e);
				return (0, o.e)(() => {
					t.current = e
				}, [e]), t
			}
		},
		14157: function(e, t, n) {
			"use strict";
			n.d(t, {
				f: function() {
					return i
				}
			});
			var r = n(67294),
				o = n(16723);

			function s(e) {
				var t;
				if (e.type) return e.type;
				let n = null != (t = e.as) ? t : "button";
				if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
			}

			function i(e, t) {
				let [n, i] = (0, r.useState)(() => s(e));
				return (0, o.e)(() => {
					i(s(e))
				}, [e.type, e.as]), (0, o.e)(() => {
					n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && i("button")
				}, [n, t]), n
			}
		},
		82180: function(e, t, n) {
			"use strict";
			n.d(t, {
				H: function() {
					return s
				}
			});
			var r = n(67294),
				o = n(77896);

			function s() {
				let [e, t] = (0, r.useState)(o.O.isHandoffComplete);
				return e && !1 === o.O.isHandoffComplete && t(!1), (0, r.useEffect)(() => {
					!0 !== e && t(!0)
				}, [e]), (0, r.useEffect)(() => o.O.handoff(), []), e
			}
		},
		23784: function(e, t, n) {
			"use strict";
			n.d(t, {
				T: function() {
					return a
				},
				h: function() {
					return i
				}
			});
			var r = n(67294),
				o = n(73781);
			let s = Symbol();

			function i(e, t = !0) {
				return Object.assign(e, {
					[s]: t
				})
			}

			function a(...e) {
				let t = (0, r.useRef)(e);
				(0, r.useEffect)(() => {
					t.current = e
				}, [e]);
				let n = (0, o.z)(e => {
					for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
				});
				return e.every(e => null == e || (null == e ? void 0 : e[s])) ? void 0 : n
			}
		},
		16567: function(e, t, n) {
			"use strict";
			n.d(t, {
				ZM: function() {
					return i
				},
				oJ: function() {
					return a
				},
				up: function() {
					return l
				}
			});
			var r, o = n(67294);
			let s = (0, o.createContext)(null);
			s.displayName = "OpenClosedContext";
			var i = ((r = i || {})[r.Open = 1] = "Open", r[r.Closed = 2] = "Closed", r[r.Closing = 4] = "Closing", r[r.Opening = 8] = "Opening", r);

			function a() {
				return (0, o.useContext)(s)
			}

			function l({
				value: e,
				children: t
			}) {
				return o.createElement(s.Provider, {
					value: e
				}, t)
			}
		},
		64103: function(e, t, n) {
			"use strict";

			function r(e) {
				let t = e.parentElement,
					n = null;
				for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
				let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
				return !(r && function(e) {
					if (!e) return !1;
					let t = e.previousElementSibling;
					for (; null !== t;) {
						if (t instanceof HTMLLegendElement) return !1;
						t = t.previousElementSibling
					}
					return !0
				}(n)) && r
			}
			n.d(t, {
				P: function() {
					return r
				}
			})
		},
		44067: function(e, t, n) {
			"use strict";

			function r(...e) {
				return e.filter(Boolean).join(" ")
			}
			n.d(t, {
				A: function() {
					return r
				}
			})
		},
		77896: function(e, t, n) {
			"use strict";
			n.d(t, {
				O: function() {
					return i
				}
			});
			var r = Object.defineProperty,
				o = (e, t, n) => t in e ? r(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				s = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
			let i = new class {
				constructor() {
					s(this, "current", this.detect()), s(this, "handoffState", "pending"), s(this, "currentId", 0)
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
		32984: function(e, t, n) {
			"use strict";

			function r(e, t, ...n) {
				if (e in t) {
					let r = t[e];
					return "function" == typeof r ? r(...n) : r
				}
				let o = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
				throw Error.captureStackTrace && Error.captureStackTrace(o, r), o
			}
			n.d(t, {
				E: function() {
					return r
				}
			})
		},
		15466: function(e, t, n) {
			"use strict";
			n.d(t, {
				r: function() {
					return o
				}
			});
			var r = n(77896);

			function o(e) {
				return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
			}
		},
		12351: function(e, t, n) {
			"use strict";
			n.d(t, {
				AN: function() {
					return l
				},
				l4: function() {
					return u
				},
				oA: function() {
					return h
				},
				sY: function() {
					return c
				},
				yV: function() {
					return p
				}
			});
			var r, o, s = n(67294),
				i = n(44067),
				a = n(32984),
				l = ((r = l || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
				u = ((o = u || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

			function c({
				ourProps: e,
				theirProps: t,
				slot: n,
				defaultTag: r,
				features: o,
				visible: s = !0,
				name: i
			}) {
				let l = f(t, e);
				if (s) return d(l, n, r, i);
				let u = null != o ? o : 0;
				if (2 & u) {
					let {
						static: e = !1,
						...t
					} = l;
					if (e) return d(t, n, r, i)
				}
				if (1 & u) {
					let {
						unmount: e = !0,
						...t
					} = l;
					return (0, a.E)(e ? 0 : 1, {
						0: () => null,
						1: () => d({
							...t,
							hidden: !0,
							style: {
								display: "none"
							}
						}, n, r, i)
					})
				}
				return d(l, n, r, i)
			}

			function d(e, t = {}, n, r) {
				var o;
				let {
					as: a = n,
					children: l,
					refName: u = "ref",
					...c
				} = m(e, ["unmount", "static"]), d = void 0 !== e.ref ? {
					[u]: e.ref
				} : {}, p = "function" == typeof l ? l(t) : l;
				"className" in c && c.className && "function" == typeof c.className && (c.className = c.className(t));
				let y = {};
				if (t) {
					let e = !1,
						n = [];
					for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
					e && (y["data-headlessui-state"] = n.join(" "))
				}
				if (a === s.Fragment && Object.keys(h(c)).length > 0) {
					if (!(0, s.isValidElement)(p) || Array.isArray(p) && p.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
					let e = (0, i.A)(null == (o = p.props) ? void 0 : o.className, c.className);
					return (0, s.cloneElement)(p, Object.assign({}, f(p.props, h(m(c, ["ref"]))), y, d, function(...e) {
						return {
							ref: e.every(e => null == e) ? void 0 : t => {
								for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
							}
						}
					}(p.ref, d.ref), e ? {
						className: e
					} : {}))
				}
				return (0, s.createElement)(a, Object.assign({}, m(c, ["ref"]), a !== s.Fragment && d, a !== s.Fragment && y), p)
			}

			function f(...e) {
				if (0 === e.length) return {};
				if (1 === e.length) return e[0];
				let t = {},
					n = {};
				for (let r of e)
					for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
				if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
				for (let e in n) Object.assign(t, {
					[e](t, ...r) {
						for (let o of n[e]) {
							if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
							o(t, ...r)
						}
					}
				});
				return t
			}

			function p(e) {
				var t;
				return Object.assign((0, s.forwardRef)(e), {
					displayName: null != (t = e.displayName) ? t : e.name
				})
			}

			function h(e) {
				let t = Object.assign({}, e);
				for (let e in t) void 0 === t[e] && delete t[e];
				return t
			}

			function m(e, t = []) {
				let n = Object.assign({}, e);
				for (let e of t) e in n && delete n[e];
				return n
			}
		}
	}
]);