!function t(e, n, r) {
	function a(i, s) {
		if (!n[i]) {
			if (!e[i]) {
				var u = "function" == typeof require && require;
				if (!s && u)
					return u(i, !0);
				if (o)
					return o(i, !0);
				throw new Error("Cannot find module '" + i + "'")
			}
			var l = n[i] = {
				exports: {}
			};
			e[i][0].call(l.exports, function (t) {
				var n = e[i][1][t];
				return a(n ? n : t)
			}, l, l.exports, t, e, n, r)
		}
		return n[i].exports
	}
	for (var o = "function" == typeof require && require, i = 0; i < r.length; i++)
		a(r[i]);
	return a
}
({
	1: [function (t, e, n) {
			"use strict";
			function r(t, e) {
				return t && t.getAttribute ? t.getAttribute(e) || "" : ""
			}
			function a(t) {
				return i = i || document.getElementsByTagName("head")[0],
				s && !t ? s : i ? s = i.getElementsByTagName("meta") : []
			}
			function o(t) {
				var e,
				n,
				o,
				i = a(),
				s = i.length;
				for (e = 0; s > e; e++)
					n = i[e], r(n, "name") === t && (o = r(n, "content"));
				return o || ""
			}
			var i,
			s,
			u = t("@ali/grey-publish").util;
			n.tryToGetAttribute = r,
			n.getMetaTags = a,
			n.getMetaCnt = o,
			n.indexof = function (t, e) {
				for (var n = 0; n < t.length; n++)
					if (t[n] === e)
						return n;
				return -1
			};
			var l = function (t, e) {
				return t += "",
				t.length < e && (t = "0" + t),
				t
			};
			n.getDateMin = function () {
				var t = new Date,
				e = "";
				return e += t.getFullYear(),
				e += l(t.getMonth() + 1, 2),
				e += l(t.getDate(), 2),
				e += l(t.getHours(), 2),
				e += l(t.getMinutes(), 2)
			},
			n.loopAddScript = function (t, e) {
				try {
					if (e && e instanceof Array) {
						var n = 0,
						r = function (a) {
							a && u.addScript(t + "/" + a, function () {
								r(e[++n])
							})
						};
						r(e[n])
					}
				} catch (a) {}
			},
			n.getCdnpath = function () {
				var t = document,
				e = t.getElementById("beacon-aplus") || t.getElementById("tb-beacon-aplus"),
				n = "//g.alicdn.com",
				r = ["//assets.alicdn.com/g", "//g-assets.daily.taobao.net", "//u.alicdn.com", "//laz-g-cdn.alicdn.com"],
				a = new RegExp("//u.alicdn.com");
				if (e)
					for (var o = 0; o < r.length; o++) {
						var i = new RegExp(r[o]);
						if (i.test(e.src)) {
							n = r[o],
							a.test(e.src) && (n = "//assets.alicdn.com/g");
							break
						}
					}
				return n
			},
			n.aplusVersions = {
				V_O: "aplus_o.js",
				V_2: "aplus_v2.js",
				V_W: "aplus_wap.js",
				V_S: "aplus_std.js",
				V_I: "aplus_int.js",
				V_U: "aplus_u.js"
			}
		}, {
			"@ali/grey-publish": 2
		}
	],
	2: [function (t, e, n) {
			"use strict";
			n.grey = t("./src/grey"),
			n.util = t("./src/util")
		}, {
			"./src/grey": 3,
			"./src/util": 4
		}
	],
	3: [function (t, e, n) {
			"use strict";
			function r(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			}
			function a(t) {
				var e = !1;
				try {
					var n = t.bingo_chars || "0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",
					a = g.getCookie(t.bingo_cookiename || "cna") || "";
					if (a) {
						var o = a.charAt(0),
						i = n.indexOf(o) / n.length;
						e = i <= t.ratio / t.base
					} else
						e = r(1, t.base) <= t.ratio
				} catch (s) {
					e = r(1, t.base) <= t.ratio
				}
				return e
			}
			function o(t, e) {
				var n;
				for (n in e)
					e.hasOwnProperty(n) && (t[n] = e[n]);
				return t
			}
			function i(t, e) {
				return function (n) {
					return t(o(e, n || {}))
				}
			}
			function s(t) {
				var e = window,
				n = document;
				if (t)
					try {
						var r = n.getElementsByTagName("script")[0],
						a = n.createElement("script");
						a.appendChild(n.createTextNode(t)),
						r.parentNode.insertBefore(a, r)
					} catch (o) {
						try {
							(e.execScript || function (t) {
								e.eval(t)
							})(t)
						} catch (i) {}
					}
			}
			function u(t, e) {
				if (t && t.length > 0)
					for (var n = new RegExp("^" + e), r = 0; r < t.length; r++) {
						var a = t[r];
						n.test(a) && p.remove(a)
					}
			}
			function l(t, e, n) {
				try {
					p.remove(t);
					var r = p.get(e);
					if (r) {
						var a = JSON.parse(r) || [];
						u(a, n)
					}
				} catch (o) {}
				try {
					Object && Object.keys && u(Object.keys(localStorage), n)
				} catch (i) {}
			}
			var c,
			g = t("./util"),
			p = {
				set: function (t, e) {
					try {
						return localStorage.setItem(t, e),
						!0
					} catch (n) {
						return !1
					}
				},
				get: function (t) {
					return localStorage.getItem(t)
				},
				test: function () {
					var t = "grey_test_key";
					try {
						return localStorage.setItem(t, 1),
						localStorage.removeItem(t),
						!0
					} catch (e) {
						return !1
					}
				},
				remove: function (t) {
					localStorage.removeItem(t)
				}
			},
			f = {
				base: 1e4
			},
			v = {
				_config: f
			},
			h = function (t, e, n) {
				function r(r) {
					r.key === t && r.newValue && l(t, e, n)
				}
				try {
					if (!c) {
						if (window.addEventListener)
							return window.addEventListener("storage", r, !1), !1;
						window.attachEvent("storage", r)
					}
					c = !0
				} catch (a) {}
			},
			d = function (t, e) {
				var n = window,
				r = n.XDomainRequest,
				a = n.XMLHttpRequest && "withCredentials" in new n.XMLHttpRequest,
				o = e.after;
				if (!e.isDebug && p.test() && (a || r)) {
					var i = e.LS_KEY + g.hash(t),
					u = p.get(i);
					if (u)
						try {
							h(i, e.LS_KEY_CLUSTER, e.LS_PREFIX),
							s(u),
							g.isFunction(o) && o.call(this, {
								from: "local"
							})
						} catch (c) {
							g.addScript(t, o)
						}
					else {
						var f = navigator.userAgent;
						g.request(t, f, function (t) {
							l(i, e.LS_KEY_CLUSTER, e.LS_PREFIX),
							p.set(e.LS_KEY_CLUSTER, JSON.stringify([i])),
							p.set(i, t),
							h(i, e.LS_KEY_CLUSTER, e.LS_PREFIX),
							s(t),
							g.isFunction(o) && o.call(this, {
								from: "cors"
							})
						}, function () {
							g.addScript(t, o)
						})
					}
				} else
					g.addScript(t, o)
			};
			v.load = function (t) {
				t = o({
						LS_KEY_CLUSTER: "",
						LS_KEY: "",
						isLoadDevVersion: "",
						dev: "",
						stable: "",
						grey: "",
						base: f.base,
						bingo: ""
					}, t);
				var e,
				n = {},
				r = "function" == typeof t.bingo ? t.bingo : a;
				t.ratio >= t.base || r(t) ? (e = t.grey, n.type = "grey") : (e = t.stable, n.type = "stable");
				try {
					g.isFunction(t.isLoadDevVersion) && t.isLoadDevVersion() && (e = t.dev, n.type = "dev")
				} catch (s) {}
				return n.url = e,
				g.isFunction(t.before) && t.before(n),
				g.isFunction(t.after) && (t.after = i(t.after, n)),
				d(e, t),
				this
			},
			v.config = function (t) {
				return o(f, t || {}),
				this
			},
			e.exports = v
		}, {
			"./util": 4
		}
	],
	4: [function (t, e, n) {
			"use strict";
			var r = function (t) {
				return "function" == typeof t
			};
			n.isFunction = r;
			var a = function (t, e) {
				var n = document,
				a = n.getElementsByTagName("script")[0],
				o = n.getElementsByTagName("head")[0],
				i = n.createElement("script");
				i.type = "text/javascript",
				i.async = !0,
				i.src = t,
				a ? a.parentNode.insertBefore(i, a) : o && o.appendChild(i),
				r(e) && e.call(this, {
					from: "script"
				})
			};
			n.addScript = a,
			n.getCookie = function (t) {
				var e = document,
				n = e.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
				return n ? n[1] : ""
			};
			var o = {
				base: 1e4,
				timeout: 1e4
			};
			n.request = function (t, e, n, r) {
				if (/blitz/i.test(e))
					return void r();
				var a,
				i = "GET",
				s = function () {
					a.responseText ? n(a.responseText) : r()
				},
				u = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
				u ? (a = new XMLHttpRequest, a.open(i, t, !0)) : (a = new XDomainRequest, a.open(i, t)),
				a.timeout = o.timeout,
				a.onload = s,
				a.onerror = r,
				a.ontimeout = r,
				a.send()
			},
			n.hash = function (t) {
				var e,
				n,
				r = 1315423911;
				for (e = t.length - 1; e >= 0; e--)
					n = t.charCodeAt(e), r ^= (r << 5) + n + (r >> 2);
				return (2147483647 & r).toString(16)
			}
		}, {}
	],
	5: [function (t, e, n) {
			"use strict";
			!function () {
				var e = window,
				n = function (t) {
					if (e.navigator.sendBeacon)
						e.navigator.sendBeacon(t);
					else {
						var n = new e.Image,
						r = "_mimg_" + Math.random();
						e[r] = n;
						var a = function () {
							if (e[r])
								try {
									delete e[r]
								} catch (t) {
									e[r] = void 0
								}
						};
						n.onload = function () {
							a()
						},
						n.onerror = function () {
							a()
						},
						e.setTimeout(function () {
							e[r] && (e[r].src = "", a())
						}, 5e3),
						n.src = t,
						n = null
					}
				},
				r = function (t, r) {
					try {
						var a = Math.floor(268435456 * Math.random()).toString(16),
						o = e.location || {},
						i = ["page=" + encodeURIComponent(o.href), "info=" + encodeURIComponent(t.message), "stack=" + encodeURIComponent(t && t.stack ? t.stack : ""), "filename=mlog_for_aplus", "method=" + r, "cache=" + a].join("&"),
						s = o.protocol + "//gm.mmstat.com/mm.req.load?" + i;
						n(s)
					} catch (u) {}
				},
				a = function () {
					var n = "g_aplus_grey_launched";
					if (!e[n]) {
						e[n] = 1;
						var a = e.goldlog || (e.goldlog = {}),
						o = t("@ali/grey-publish").grey,
						i = !1;
						try {
							var s = e.location.href.match(/aplusDebug=(true|false)/);
							s && s.length > 0 && window.localStorage.setItem("aplusDebug", s[1]),
							i = "true" === window.localStorage.getItem("aplusDebug"),
							a.aplusDebug = i
						} catch (u) {}
						var l = t("../grey/util"),
						c = t("./for_aplus_fns"),
						g = {
							"aplus_o.js": {
								stable_version: {
									value: "8.4.4"
								},
								grey_version: {
									value: "8.4.5"
								},
								dev_version: {}
							},
							"aplus_std.js": {
								stable_version: {
									value: "8.4.4"
								},
								grey_version: {
									value: "8.4.5"
								},
								dev_version: {}
							},
							"aplus_wap.js": {
								stable_version: {
									value: "8.4.4"
								},
								grey_version: {
									value: "8.4.5"
								},
								dev_version: {}
							},
							"aplus_int.js": {
								stable_version: {
									value: "8.4.4"
								},
								grey_version: {
									value: "8.4.5"
								},
								dev_version: {}
							},
							"aplus_u.js": {
								stable_version: {
									value: "8.4.4"
								},
								grey_version: {
									value: "8.4.5"
								},
								dev_version: {}
							}
						},
						p = "APLUS_S_CORE_0.19.30_20180524170552_",
						f = e.location.protocol;
						0 !== f.indexOf("http") && (f = "http:");
						var v = l.getCdnpath();
						a.getCdnPath = l.getCdnpath;
						var h = f + v + "/alilog",
						d = c.getAplusBuVersion(),
						_ = d.v,
						m = d.BU,
						b = 1e4,
						y = [],
						j = function () {
							var t = "";
							if (y && y.length > 0)
								for (var e = l.getDateMin(), n = 0; n < y.length; n++) {
									var r = y[n].key + "";
									e >= r && (t = Math.floor(1e4 * y[n].value))
								}
							return t
						},
						w = t("./utilPlugins"),
						S = function (t) {
							var e,
							n = i ? [] : w.getFrontPlugins({
									version: t,
									fn: _,
									BU: m
								}),
							r = [["s", t, _].join("/")],
							a = i ? [] : w.getPlugins({
									version: t,
									fn: _,
									BU: m
								});
							try {
								var o = [].concat(n, r, a);
								e = h + "/??" + o.join(",") + "?v=20180524170552"
							} catch (s) {
								e = h + "/??" + r.join(",")
							}
							return e
						},
						E = j();
						E && (b = E),
						a.aplus_cplugin_ver = "0.4.1",
						a.record || (a.record = function (t, n, r, a) {
							(e.goldlog_queue || (e.goldlog_queue = [])).push({
								action: "goldlog.record",
								arguments: [t, n, r, a]
							})
						});
						var V = g[_],
						L = V.stable_version.value || "7.7.0",
						B = V.grey_version.value || L,
						k = V.dev_version.value || B,
						C = {
							LS_KEY_CLUSTER: "APLUS_LS_KEY",
							LS_KEY: p,
							LS_PREFIX: "APLUS_S_CORE",
							isDebug: i,
							isLoadDevVersion: !1,
							dev: S(k),
							stable: S(L),
							grey: S(B),
							ratio: b,
							before: function (t) {
								switch (t.type) {
								case "grey":
									a.lver = k;
									break;
								case "stable":
									a.lver = L;
									break;
								case "dev":
									a.lver = k
								}
								i && l.loopAddScript(h, w.getFrontPlugins({
										version: a.lver,
										fn: _,
										BU: m
									}))
							}
						};
						i && (C.after = function (t) {
							"object" == typeof t && (t.message = "afterLoadAplus", r(t, "after"));
							var e = 0,
							n = function () {
								if (!(e >= 100)) {
									e++;
									var t = a._$ || {};
									window.setTimeout(function () {
										"complete" === t.status ? l.loopAddScript(h, w.getPlugins({
												version: a.lver,
												fn: _,
												BU: m
											})) : n()
									}, 100)
								}
							};
							n()
						}),
						o.load(C)
					}
				};
				try {
					a()
				} catch (o) {
					r(o, "for_aplus")
				}
			}
			()
		}, {
			"../grey/util": 1,
			"./for_aplus_fns": 6,
			"./utilPlugins": 9,
			"@ali/grey-publish": 2
		}
	],
	6: [function (t, e, n) {
			"use strict";
			var r = t("./util"),
			a = r.aplusVersions,
			o = [a.V_O, a.V_S, a.V_I, a.V_W, a.V_U],
			i = function () {
				for (var t, e, n = [{
							version: a.V_O,
							domains: [/^https?:\/\/(.*\.)?youku\.com/i, /^https?:\/\/(.*\.)?tudou\.com/i, /^https?:\/\/(.*\.)?soku\.com/i, /^https?:\/\/(.*\.)?laifeng\.com/i],
							BU: "YT"
						}, {
							version: a.V_I,
							domains: [/^https?:\/\/(.*\.)?scmp\.com/i, /^https?:\/\/(.*\.)?luxehomes\.com\.hk/i, /^https?:\/\/(.*\.)?ays\.com\.hk/i, /^https?:\/\/(.*\.)?cpjobs\.com/i, /^https?:\/\/(.*\.)?educationpost\.com\.hk/i, /^https?:\/\/(.*\.)?elle\.com\.hk/i, /^https?:\/\/(.*\.)?harpersbazaar\.com\.hk/i, /^https?:\/\/(.*\.)?esquirehk\.com/i],
							BU: "SCMP"
						}
					], r = 0; r < n.length; r++)
					for (var o = n[r].domains, i = n[r].version, s = 0; s < o.length; s++)
						if (location.href.match(o[s]))
							return {
								v: i,
								BU: n[r].BU
							};
				return {
					v: e,
					BU: t
				}
			},
			s = function () {
				var t = r.getMetaCnt("aplus-version");
				return t && (t += ".js"),
				r.indexof(o, t) > -1 ? t : null
			},
			u = function () {
				try {
					for (var t = document, e = t.getElementsByTagName("script"), n = 0; n < e.length; n++) {
						var r = e[n].getAttribute("src");
						if (/alilog\/mlog\/aplus_\w+\.js/.test(r) || /alicdn\.com\/js\/aplus_\w+\.js/.test(r))
							return r
					}
					return ""
				} catch (a) {
					return ""
				}
			},
			l = function () {
				var t = "";
				try {
					var e = document,
					n = e.getElementById("beacon-aplus") || e.getElementById("tb-beacon-aplus");
					if (n && (t = n.getAttribute("src")), t || (t = u()), t) {
						var r = t.match(/aplus_\w+\.js/);
						"object" == typeof r && r.length > 0 && (t = r[0])
					}
				} catch (a) {
					t = ""
				}
				finally {
					return t
				}
			};
			n.getAplusBuVersion = function () {
				var t,
				e;
				try {
					t = a.V_S;
					var n = l();
					n && (t = n);
					var r = i();
					r && r.v && (t = r.v),
					e = r.BU;
					var o = s();
					o && (t = o),
					t === a.V_2 && (t = a.V_S)
				} catch (u) {
					t = t === a.V_O ? a.V_W : a.V_S
				}
				finally {
					return {
						v: t,
						BU: e
					}
				}
			}
		}, {
			"./util": 8
		}
	],
	7: [function (t, e, n) {
			"use strict";
			function r() {
				return !!u.getMetaCnt("aplus-auto-exp")
			}
			function a() {
				return !!u.getMetaCnt("aplus-auto-clk")
			}
			function o() {
				return "1" === u.getMetaCnt("aplus-no-track") || /aplus4web=true/.test(location.search)
			}
			var i = document,
			s = window,
			u = t("./util"),
			l = u.aplusVersions,
			c = (t("@ali/grey-publish").util, s.navigator.userAgent),
			g = /WindVane/i.test(c),
			p = /AliBaichuan/i.test(c),
			f = (parent !== self, /UT4Aplus/i.test(c)),
			v = function (t) {
				return g && !s.WindVane && t.fn !== l.V_O
			},
			h = function (t) {
				return (p || g && !s.WindVane) && t.fn === l.V_O
			},
			d = function (t) {
				return t.fn === l.V_O || "YT" === t.BU
			},
			_ = function () {
				return /_a_ig_v=@aplus/.test(location.search)
			},
			m = function (t) {
				return !0
			},
			b = function (t) {
				return t.fn !== l.V_O && t.fn !== l.V_U
			},
			y = function () {
				try {
					var t = s.localStorage,
					e = "aplus_track_debug_id",
					n = new RegExp("[?|&]" + e + "=(\\w*)"),
					r = location.href.match(n);
					if (r && r.length > 0)
						t.setItem(e, r[1]);
					else {
						var a = i.referrer || "",
						o = a.match(n);
						if (o && o.length > 0)
							t.setItem(e, o[1]);
						else {
							var u = s.name || "",
							l = u.match(n);
							l && l.length > 0 && t.setItem(e, l[1])
						}
					}
					var c = t.getItem(e) || "";
					return c && c.length > 50 ? !0 : !1
				} catch (g) {
					return !1
				}
			},
			j = function () {
				try {
					return !!/lazada/.test(location.host)
				} catch (t) {
					return !1
				}
			},
			w = function () {
				try {
					return "work.alibaba-inc.com" === location.hostname && ("/" === location.pathname || "/home" === location.pathname || "/work/home" === location.pathname) || /aplus_ws=true/.test(location.search)
				} catch (t) {
					return !1
				}
			};
			n.getFrontPlugins = function (t) {
				var e = "s/" + t.version + "/plugin",
				n = goldlog.aplus_cplugin_ver;
				return [{
						enable: v(t),
						path: [e, "aplus_windvane2.js"].join("/")
					}, {
						enable: h(t),
						path: [e, "aplus_bcbridge.js"].join("/")
					}, {
						enable: !!f,
						path: ["aplus_cplugin", n, "aplus4ut.js"].join("/")
					}, {
						enable: !0,
						path: [e, "aplus_client.js"].join("/")
					}, {
						enable: !0,
						path: ["aplus_cplugin", n, "toolkit.js"].join("/")
					}, {
						enable: !0,
						path: ["aplus_cplugin", n, "monitor.js"].join("/")
					}, {
						enable: o(t),
						path: ["aplus_cplugin", n, "aplus4web.js"].join("/")
					}, {
						enable: y(),
						path: ["aplus_cplugin", n, "track_deb.js"].join("/")
					}, {
						enable: j(),
						path: ["aplus_plugin_lazada", "lazadalog.js"].join("/")
					}, {
						enable: w(),
						path: ["aplus_cplugin", n, "aplus_ws.js"].join("/")
					}, {
						enable: r(),
						path: [e, "aplus_ae.js"].join("/")
					}, {
						enable: a(),
						path: [e, "aplus_ac.js"].join("/")
					}
				]
			},
			n.getPlugins = function (t) {
				var e = "s/" + t.version + "/plugin",
				n = goldlog.aplus_cplugin_ver;
				return [{
						enable: d(t),
						path: [e, "aplus_urchin2.js"].join("/")
					}, {
						enable: _(t),
						path: "aplus_plugin_guide/index.js"
					}, {
						enable: m(t),
						path: ["aplus_cplugin", n, "aol.js"].join("/")
					}, {
						enable: b(t),
						path: [e, "aplus_spmact.js"].join("/")
					}
				]
			}
		}, {
			"./util": 8,
			"@ali/grey-publish": 2
		}
	],
	8: [function (t, e, n) {
			e.exports = t(1)
		}, {
			"@ali/grey-publish": 2
		}
	],
	9: [function (t, e, n) {
			"use strict";
			var r,
			a = t("./plugins"),
			o = document;
			try {
				r = o.getElementById("beacon-aplus") || o.getElementById("tb-beacon-aplus")
			} catch (i) {}
			var s = function (t) {
				var e = [];
				try {
					if (r) {
						var n = r.getAttribute(t || e);
						e = n.split(",")
					}
				} catch (a) {
					e = []
				}
				finally {
					return e
				}
			},
			u = function (t) {
				var e = [];
				if (t)
					for (var n = 0; n < t.length; n++) {
						var r = t[n].enable,
						a = t[n].path;
						r === !0 ? e.push(a) : "function" == typeof r && r() && e.push(a)
					}
				return e
			};
			n.getPlugins = function (t) {
				var e = a.getPlugins(t);
				return [].concat(u(e), s("plugins"))
			},
			n.getFrontPlugins = function (t) {
				var e = a.getFrontPlugins(t);
				return [].concat(u(e), s("frontPlugins"))
			}
		}, {
			"./plugins": 7
		}
	]
}, {}, [5]);
