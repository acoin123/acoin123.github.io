/*! 2018-05-24 16:43:26 v8.4.5 */
!function (e) {
	function i(n) {
		if (o[n])
			return o[n].exports;
		var r = o[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return e[n].call(r.exports, r, r.exports, i),
		r.loaded = !0,
		r.exports
	}
	var o = {};
	return i.m = e,
	i.c = o,
	i.p = "",
	i(0)
}
([function (e, i) {
			"use strict";
			var o = window,
			n = document;
			!function () {
				var e = 2,
				r = "ali_analytics";
				if (o[r] && o[r].ua && e <= o[r].ua.version)
					return void(i.info = o[r].ua);
				var t,
				a,
				d,
				s,
				c,
				u,
				h,
				l,
				m,
				b,
				f,
				v,
				p,
				w,
				g,
				x,
				z,
				O = o.navigator,
				k = O.appVersion,
				T = O && O.userAgent || "",
				y = function (e) {
					var i = 0;
					return parseFloat(e.replace(/\./g, function () {
							return 0 === i++ ? "." : ""
						}))
				},
				_ = function (e, i) {
					var o,
					n;
					i[o = "trident"] = .1,
					(n = e.match(/Trident\/([\d.]*)/)) && n[1] && (i[o] = y(n[1])),
					i.core = o
				},
				N = function (e) {
					var i,
					o;
					return (i = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (o = i[1] || i[2]) ? y(o) : 0
				},
				P = function (e) {
					return e || "other"
				},
				M = function (e) {
					function i() {
						for (var i = [["Windows NT 5.1", "winXP"], ["Windows NT 6.1", "win7"], ["Windows NT 6.0", "winVista"], ["Windows NT 6.2", "win8"], ["Windows NT 10.0", "win10"], ["iPad", "ios"], ["iPhone;", "ios"], ["iPod", "ios"], ["Macintosh", "mac"], ["Android", "android"], ["Ubuntu", "ubuntu"], ["Linux", "linux"], ["Windows NT 5.2", "win2003"], ["Windows NT 5.0", "win2000"], ["Windows", "winOther"], ["rhino", "rhino"]], o = 0, n = i.length; o < n; ++o)
							if (e.indexOf(i[o][0]) !== -1)
								return i[o][1];
						return "other"
					}
					function r(e, i, n, r) {
						var t,
						a = o.navigator.mimeTypes;
						try {
							for (t in a)
								if (a.hasOwnProperty(t) && a[t][e] == i) {
									if (void 0 !== n && r.test(a[t][n]))
										return !0;
									if (void 0 === n)
										return !0
								}
							return !1
						} catch (e) {
							return !1
						}
					}
					var t,
					a,
					d,
					s,
					c,
					u,
					h,
					l = "",
					m = l,
					b = l,
					f = [6, 9],
					v = "{{version}}",
					p = "<!--[if IE " + v + "]><s></s><![endif]-->",
					w = n && n.createElement("div"),
					g = [],
					x = {
						webkit: void 0,
						edge: void 0,
						trident: void 0,
						gecko: void 0,
						presto: void 0,
						chrome: void 0,
						safari: void 0,
						firefox: void 0,
						ie: void 0,
						ieMode: void 0,
						opera: void 0,
						mobile: void 0,
						core: void 0,
						shell: void 0,
						phantomjs: void 0,
						os: void 0,
						ipad: void 0,
						iphone: void 0,
						ipod: void 0,
						ios: void 0,
						android: void 0,
						nodejs: void 0,
						extraName: void 0,
						extraVersion: void 0
					};
					if (w && w.getElementsByTagName && (w.innerHTML = p.replace(v, ""), g = w.getElementsByTagName("s")), g.length > 0) {
						for (_(e, x), s = f[0], c = f[1]; s <= c; s++)
							if (w.innerHTML = p.replace(v, s), g.length > 0) {
								x[b = "ie"] = s;
								break
							}
						!x.ie && (d = N(e)) && (x[b = "ie"] = d)
					} else ((a = e.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (a = e.match(/Safari\/([\d.]*)/))) && a[1] ? (x[m = "webkit"] = y(a[1]), (a = e.match(/OPR\/(\d+\.\d+)/)) && a[1] ? x[b = "opera"] = y(a[1]) : (a = e.match(/Chrome\/([\d.]*)/)) && a[1] ? x[b = "chrome"] = y(a[1]) : (a = e.match(/\/([\d.]*) Safari/)) && a[1] ? x[b = "safari"] = y(a[1]) : x.safari = x.webkit, (a = e.match(/Edge\/([\d.]*)/)) && a[1] && (m = b = "edge", x[m] = y(a[1])), / Mobile\//.test(e) && e.match(/iPad|iPod|iPhone/) ? (x.mobile = "apple", a = e.match(/OS ([^\s]*)/), a && a[1] && (x.ios = y(a[1].replace("_", "."))), t = "ios", a = e.match(/iPad|iPod|iPhone/), a && a[0] && (x[a[0].toLowerCase()] = x.ios)) : / Android/i.test(e) ? (/Mobile/.test(e) && (t = x.mobile = "android"), a = e.match(/Android ([^\s]*);/), a && a[1] && (x.android = y(a[1]))) : (a = e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (x.mobile = a[0].toLowerCase()), (a = e.match(/PhantomJS\/([^\s]*)/)) && a[1] && (x.phantomjs = y(a[1]))) : (a = e.match(/Presto\/([\d.]*)/)) && a[1] ? (x[m = "presto"] = y(a[1]), (a = e.match(/Opera\/([\d.]*)/)) && a[1] && (x[b = "opera"] = y(a[1]), (a = e.match(/Opera\/.* Version\/([\d.]*)/)) && a[1] && (x[b] = y(a[1])), (a = e.match(/Opera Mini[^;]*/)) && a ? x.mobile = a[0].toLowerCase() : (a = e.match(/Opera Mobi[^;]*/)) && a && (x.mobile = a[0]))) : (d = N(e)) ? (x[b = "ie"] = d, _(e, x)) : (a = e.match(/Gecko/)) && (x[m = "gecko"] = .1, (a = e.match(/rv:([\d.]*)/)) && a[1] && (x[m] = y(a[1]), /Mobile|Tablet/.test(e) && (x.mobile = "firefox")), (a = e.match(/Firefox\/([\d.]*)/)) && a[1] && (x[b = "firefox"] = y(a[1])));
					t || (t = i());
					var z,
					O,
					T;
					if (!r("type", "application/vnd.chromium.remoting-viewer")) {
						z = "scoped" in n.createElement("style"),
						T = "v8Locale" in o;
						try {
							O = o.external || void 0
						} catch (e) {}
						if (a = e.match(/360SE/))
							u = "360";
						else if ((a = e.match(/SE\s([\d.]*)/)) || O && "SEVersion" in O)
							u = "sougou", h = y(a[1]) || .1;
						else if ((a = e.match(/Maxthon(?:\/)+([\d.]*)/)) && O) {
							u = "maxthon";
							try {
								h = y(O.max_version || a[1])
							} catch (e) {
								h = .1
							}
						} else
							z && T ? u = "360se" : z || T || !/Gecko\)\s+Chrome/.test(k) || x.opera || x.edge || (u = "360ee")
					}
					(a = e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/)) ? (u = "tt", h = y(a[2]) || .1) : (a = e.match(/LBBROWSER/)) || O && "LiebaoGetVersion" in O ? u = "liebao" : (a = e.match(/TheWorld/)) ? (u = "theworld", h = 3) : (a = e.match(/TaoBrowser\/([\d.]*)/)) ? (u = "taobao", h = y(a[1]) || .1) : (a = e.match(/UCBrowser\/([\d.]*)/)) && (u = "uc", h = y(a[1]) || .1),
					x.os = t,
					x.core = x.core || m,
					x.shell = b,
					x.ieMode = x.ie && n.documentMode || x.ie,
					x.extraName = u,
					x.extraVersion = h;
					var P = o.screen.width,
					M = o.screen.height;
					return x.resolution = P + "x" + M,
					x
				},
				S = function (e) {
					function i(e) {
						return Object.prototype.toString.call(e)
					}
					function o(e, o, n) {
						if ("[object Function]" == i(o) && (o = o(n)), !o)
							return null;
						var r = {
							name: e,
							version: ""
						},
						t = i(o);
						if (o === !0)
							return r;
						if ("[object String]" === t) {
							if (n.indexOf(o) !== -1)
								return r
						} else if (o.exec) {
							var a = o.exec(n);
							if (a)
								return a.length >= 2 && a[1] ? r.version = a[1].replace(/_/g, ".") : r.version = "", r
						}
					}
					var n = {
						name: "other",
						version: ""
					};
					e = (e || "").toLowerCase();
					for (var r = [["nokia", function (e) {
									return e.indexOf("nokia ") !== -1 ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
								}
							], ["samsung", function (e) {
									return e.indexOf("samsung") !== -1 ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
								}
							], ["wp", function (e) {
									return e.indexOf("windows phone ") !== -1 || e.indexOf("xblwp") !== -1 || e.indexOf("zunewp") !== -1 || e.indexOf("windows ce") !== -1
								}
							], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function (e) {
									return e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9x]{1,3})\b/
								}
							], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (e) {
									var i = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
									return e.indexOf("huawei-huawei") !== -1 ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : i.test(e) ? i : /\bhuawei[ _\-]?([a-z0-9]+)/
								}
							], ["lenovo", function (e) {
									return e.indexOf("lenovo-lenovo") !== -1 ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
								}
							], ["zte", function (e) {
									return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
								}
							], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function (e) {
									return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
								}
							], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function (e) {
									return e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
								}
							]], t = 0; t < r.length; t++) {
						var a = r[t][0],
						d = r[t][1],
						s = o(a, d, e);
						if (s) {
							n = s;
							break
						}
					}
					return n
				},
				E = 1;
				try {
					t = M(T),
					a = S(T),
					d = t.os,
					s = t.shell,
					c = t.core,
					u = t.resolution,
					h = t.extraName,
					l = t.extraVersion,
					m = a.name,
					b = a.version,
					v = d ? d + (t[d] ? t[d] : "") : "",
					p = s ? s + parseInt(t[s]) : "",
					w = c,
					g = u,
					x = h ? h + (l ? parseInt(l) : "") : "",
					z = m + b
				} catch (e) {}
				f = {
					p: E,
					o: P(v),
					b: P(p),
					w: P(w),
					s: g,
					mx: x,
					ism: z
				},
				o[r] || (o[r] = {}),
				o[r].ua || (o[r].ua = {}),
				o.goldlog || (o.goldlog = {}),
				i.info = o[r].ua = goldlog._aplus_client = {
					version: e,
					ua_info: f
				}
			}
			()
		}
	]); /*! 2017-10-31 20:15:15 v0.2.4 */
!function (t) {
	function e(o) {
		if (n[o])
			return n[o].exports;
		var i = n[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return t[o].call(i.exports, i, i.exports, e),
		i.loaded = !0,
		i.exports
	}
	var n = {};
	return e.m = t,
	e.c = n,
	e.p = "",
	e(0)
}
([function (t, e, n) {
			"use strict";
			!function () {
				var t = window.goldlog || (window.goldlog = {});
				t._aplus_cplugin_utilkit || (t._aplus_cplugin_utilkit = {
						status: "init"
					}, n(1).init(t), t._aplus_cplugin_utilkit.status = "complete")
			}
			()
		}, function (t, e, n) {
			"use strict";
			var o = n(2),
			i = n(4);
			e.init = function (t) {
				t.setCookie = o.setCookie,
				t.getCookie = o.getCookie,
				t.on = i.on
			}
		}, function (t, e, n) {
			"use strict";
			var o = document,
			i = n(3),
			a = function (t) {
				var e = new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"),
				n = o.cookie.match(e);
				return n ? n[1] : ""
			};
			e.getCookie = a;
			var r = function (t, e, n) {
				n || (n = {});
				var i = new Date;
				return n.expires && ("number" == typeof n.expires || n.expires.toUTCString) ? ("number" == typeof n.expires ? i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3) : i = n.expires, e += "; expires=" + i.toUTCString()) : "session" !== n.expires && (i.setTime(i.getTime() + 63072e7), e += "; expires=" + i.toUTCString()),
				e += "; path=" + (n.path ? n.path : "/"),
				e += "; domain=" + n.domain,
				o.cookie = t + "=" + e,
				a(t)
			};
			e.setCookie = function (t, e, n) {
				try {
					if (n || (n = {}), n.domain)
						r(t, e, n);
					else
						for (var o = i.getDomains(), a = 0; a < o.length; )
							n.domain = o[a], r(t, e, n) ? a = o.length : a++
				} catch (t) {}
			}
		}, function (t, e) {
			"use strict";
			e.getDomains = function () {
				var t = [];
				try {
					for (var e = location.hostname, n = e.split("."), o = 2; o <= n.length; )
						t.push(n.slice(n.length - o).join(".")), o++
				} catch (t) {}
				return t
			}
		}, function (t, e) {
			"use strict";
			var n = window,
			o = document,
			i = !!o.attachEvent,
			a = "attachEvent",
			r = "addEventListener",
			c = i ? a : r,
			u = function (t, e) {
				var n = goldlog._$ || {},
				o = n.meta_info || {},
				i = o.aplus_ctap || {};
				if (i && "function" == typeof i.on)
					i.on(t, e);
				else {
					var a = "ontouchend" in document.createElement("div"),
					r = a ? "touchstart" : "mousedown";
					s(t, r, e)
				}
			},
			s = function (t, e, o) {
				return "tap" === e ? void u(t, o) : void t[c]((i ? "on" : "") + e, function (t) {
					t = t || n.event;
					var e = t.target || t.srcElement;
					"function" == typeof o && o(t, e)
				}, !1)
			};
			e.on = s;
			var d = function (t) {
				try {
					o.documentElement.doScroll("left")
				} catch (e) {
					return void setTimeout(function () {
						d(t)
					}, 1)
				}
				t()
			},
			l = function (t) {
				var e = 0,
				n = function () {
					0 === e && t(),
					e++
				};
				"complete" === o.readyState && n();
				var i;
				if (o.addEventListener)
					i = function () {
						o.removeEventListener("DOMContentLoaded", i, !1),
						n()
					},
				o.addEventListener("DOMContentLoaded", i, !1),
				window.addEventListener("load", n, !1);
				else if (o.attachEvent) {
					i = function () {
						"complete" === o.readyState && (o.detachEvent("onreadystatechange", i), n())
					},
					o.attachEvent("onreadystatechange", i),
					window.attachEvent("onload", n);
					var a = !1;
					try {
						a = null === window.frameElement
					} catch (t) {}
					o.documentElement.doScroll && a && d(n)
				}
			};
			e.DOMReady = function (t) {
				l(t)
			},
			e.onload = function (t) {
				"complete" === o.readyState ? t() : s(n, "load", t)
			}
		}
	]); /*! 2017-12-19 12:10:24 v0.2.9 */
!function (o) {
	function t(r) {
		if (e[r])
			return e[r].exports;
		var a = e[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return o[r].call(a.exports, a, a.exports, t),
		a.loaded = !0,
		a.exports
	}
	var e = {};
	return t.m = o,
	t.c = e,
	t.p = "",
	t(0)
}
([function (o, t, e) {
			"use strict";
			!function () {
				var o = window.goldlog || (window.goldlog = {});
				o._aplus_cplugin_m || (o._aplus_cplugin_m = e(1).run())
			}
			()
		}, function (o, t, e) {
			"use strict";
			var r = e(2),
			a = e(3),
			n = e(4),
			s = navigator.sendBeacon ? "post" : "get";
			e(5).run(),
			t.run = function () {
				return {
					status: "complete",
					do_tracker_jserror: function (o) {
						try {
							var t = new n({
									logkey: o ? o.logkey : "",
									ratio: o && "number" == typeof o.ratio && o.ratio > 0 ? o.ratio : r.jsErrorRecordRatio
								}),
							e = ["Message: " + o.message, "Error object: " + o.error].join(" - "),
							c = goldlog.spm_ab || [],
							i = location.hostname + location.pathname;
							t.run({
								code: 110,
								page: i,
								msg: "record_jserror_by" + s + "_" + o.message,
								spm_a: c[0],
								spm_b: c[1],
								c1: e,
								c2: o.filename,
								c3: location.protocol + "//" + i
							})
						} catch (o) {
							a.logger({
								msg: o
							})
						}
					},
					do_tracker_lostpv: function (o) {
						var t = !1;
						try {
							if (o && o.page) {
								var e = o.spm_ab ? o.spm_ab.split(".") : [],
								c = "record_lostpv_by" + s + "_" + o.msg,
								i = new n({
										ratio: o.ratio || r.lostPvRecordRatio
									});
								i.run({
									code: 102,
									page: o.page,
									msg: c,
									spm_a: e[0],
									spm_b: e[1],
									c1: o.duration,
									c2: o.page_url
								}),
								t = !0
							}
						} catch (o) {
							a.logger({
								msg: o
							})
						}
						return t
					},
					do_tracker_obsolete_inter: function (o) {
						var t = !1;
						try {
							if (o && o.page) {
								var e = o.spm_ab ? o.spm_ab.split(".") : [],
								c = "record_obsolete interface be called by" + s,
								i = new n({
										ratio: o.ratio || r.obsoleteInterRecordRatio
									});
								i.run({
									code: 109,
									page: o.page,
									msg: c,
									spm_a: e[0],
									spm_b: e[1],
									c1: o.interface_name,
									c2: o.interface_params
								}),
								t = !0
							}
						} catch (o) {
							a.logger({
								msg: o
							})
						}
						return t
					},
					do_tracker_browser_support: function (o) {
						var t = !1;
						try {
							if (o && o.page) {
								var e = o.spm_ab ? o.spm_ab.split(".") : [],
								c = new n({
										ratio: o.ratio || r.browserSupportRatio
									}),
								i = goldlog._aplus_client || {},
								g = i.ua_info || {};
								c.run({
									code: 111,
									page: o.page,
									msg: o.msg + "_by" + s,
									spm_a: e[0],
									spm_b: e[1],
									c1: [g.o, g.b, g.w].join("_"),
									c2: o.etag || "",
									c3: o.cna || ""
								}),
								t = !0
							}
						} catch (o) {
							a.logger({
								msg: o
							})
						}
						return t
					}
				}
			}
		}, function (o, t) {
			"use strict";
			t.lostPvRecordRatio = "0.01",
			t.obsoleteInterRecordRatio = "0.01",
			t.jsErrorRecordRatio = "0.01",
			t.browserSupportRatio = "0.01",
			t.goldlogQueueRatio = "0.01"
		}, function (o, t) {
			"use strict";
			var e = function (o) {
				var t = o.level || "warn";
				window.console && window.console[t] && window.console[t](o.msg)
			};
			t.logger = e,
			t.assign = function (o, t) {
				if ("function" != typeof Object.assign) {
					var e = function (o) {
						if (null === o)
							throw new TypeError("Cannot convert undefined or null to object");
						for (var t = Object(o), e = 1; e < arguments.length; e++) {
							var r = arguments[e];
							if (null !== r)
								for (var a in r)
									Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
						}
						return t
					};
					return e(o, t)
				}
				return Object.assign({}, o, t)
			},
			t.makeCacheNum = function () {
				return Math.floor(268435456 * Math.random()).toString(16)
			},
			t.obj2param = function (o) {
				var t,
				e,
				r = [];
				for (t in o)
					o.hasOwnProperty(t) && (e = "" + o[t], r.push(t + "=" + encodeURIComponent(e)));
				return r.join("&")
			}
		}, function (o, t, e) {
			var r = e(3),
			a = {
				ratio: 1,
				logkey: "fsp.1.1",
				gmkey: "",
				chksum: "H46747615"
			},
			n = function (o) {
				o && "object" == typeof o || (o = a),
				this.opts = o,
				this.opts.ratio = o.ratio || a.ratio,
				this.opts.logkey = o.logkey || a.logkey,
				this.opts.gmkey = o.gmkey || a.gmkey,
				this.opts.chksum = o.chksum || a.chksum
			},
			s = n.prototype;
			s.getRandom = function () {
				return Math.floor(100 * Math.random()) + 1
			},
			s.run = function (o) {
				var t,
				e,
				a = {
					pid: "aplus",
					code: 101,
					msg: "异常内容"
				},
				n = "";
				try {
					var s = window.goldlog || {},
					c = s._$ || {},
					i = c.meta_info || {},
					g = parseFloat(i["aplus-tracker-rate"]);
					if (t = this.opts || {}, "number" == typeof g && g + "" != "NaN" || (g = t.ratio), e = this.getRandom(), e <= 100 * g) {
						n = "//gm.mmstat.com/" + t.logkey,
						o.rel = c.script_name + "@" + s.lver,
						o.type = o.code,
						o.uid = encodeURIComponent(s.getCookie("cna")),
						o = r.assign(a, o);
						var l = r.obj2param(o);
						s.tracker = s.send(n, {
								cache: r.makeCacheNum(),
								gokey: l,
								logtype: "2"
							}, "POST")
					}
				} catch (o) {
					r.logger({
						msg: "tracker.run() exec error: " + o
					})
				}
			},
			o.exports = n
		}, function (o, t, e) {
			"use strict";
			var r = e(6),
			a = function (o) {
				var t = window.goldlog || {},
				e = t._$ = t._$ || {},
				r = t.spm_ab ? t.spm_ab.join(".") : "0.0",
				a = e.send_pv_count || 0;
				if (a < 1 && navigator && navigator.sendBeacon) {
					var n = window.goldlog_queue || (window.goldlog_queue = []),
					s = location.hostname + location.pathname;
					n.push({
						action: ["goldlog", "_aplus_cplugin_m", "do_tracker_lostpv"].join("."),
						arguments: [{
								page: s,
								page_url: location.protocol + "//" + s,
								duration: o,
								spm_ab: r,
								msg: "dom_state=" + document.readyState
							}
						]
					})
				}
			};
			t.run = function () {
				var o = new Date;
				r.on(window, "beforeunload", function () {
					var t = new Date,
					e = t.getTime() - o.getTime();
					a(e)
				})
			}
		}, function (o, t) {
			"use strict";
			var e = window,
			r = document,
			a = !!r.attachEvent,
			n = "attachEvent",
			s = "addEventListener",
			c = a ? n : s;
			t.getIframeUrl = function (o) {
				var t,
				e = "//g.alicdn.com";
				return t = goldlog && "function" == typeof goldlog.getCdnPath ? goldlog.getCdnPath() || e : e,
				(o || "https") + ":" + t + "/alilog/aplus_cplugin/@@APLUS_CPLUGIN_VER/ls.html"
			},
			t.on = function (o, t, r) {
				o[c]((a ? "on" : "") + t, function (o) {
					o = o || e.event;
					var t = o.target || o.srcElement;
					"function" == typeof r && r(o, t)
				}, !1)
			},
			t.checkLs = function () {
				var o;
				try {
					window.localStorage && (localStorage.setItem("test_log_cna", "1"), "1" === localStorage.getItem("test_log_cna") && (localStorage.removeItem("test_log_cna"), o = !0))
				} catch (t) {
					o = !1
				}
				return o
			},
			t.tracker_iframe_status = function (o, t) {
				var e = window.goldlog_queue || (window.goldlog_queue = []),
				r = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "",
				a = "createIframe_" + t.status + "_id=" + o;
				t.msg && (a += "_" + t.msg),
				e.push({
					action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
					arguments: [{
							page: location.hostname + location.pathname,
							msg: a,
							browser_attr: navigator.userAgent,
							spm_ab: r,
							cna: t.duration || "",
							ratio: .01
						}
					]
				})
			},
			t.tracker_ls_failed = function () {
				var o = window.goldlog_queue || (window.goldlog_queue = []),
				t = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "";
				o.push({
					action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
					arguments: [{
							page: location.hostname + location.pathname,
							msg: "donot support localStorage",
							browser_attr: navigator.userAgent,
							spm_ab: t
						}
					]
				})
			},
			t.processMsgData = function (o) {
				var t = {};
				try {
					t = "string" == typeof o ? JSON.parse(o) : o,
					t || (t = {})
				} catch (o) {
					t = {}
				}
				return t
			},
			t.do_pub_fn = function (o, t) {
				var e = window.goldlog_queue || (window.goldlog_queue = []);
				e.push({
					action: "goldlog.aplus_pubsub.publish",
					arguments: [o, t]
				}),
				e.push({
					action: "goldlog.aplus_pubsub.cachePubs",
					arguments: [o, t]
				})
			}
		}
	]); /*! 2017-10-26 17:27:25 v0.0.1 */
!function (n) {
	function i(o) {
		if (t[o])
			return t[o].exports;
		var r = t[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return n[o].call(r.exports, r, r.exports, i),
		r.loaded = !0,
		r.exports
	}
	var t = {};
	return i.m = n,
	i.c = t,
	i.p = "",
	i(0)
}
([function (n, i, t) {
			"use strict";
			!function () {
				var n = window.goldlog || (window.goldlog = {});
				if (!n._APLUS_PLUGIN_UCDAYU) {
					n._APLUS_PLUGIN_UCDAYU = {
						status: "init"
					};
					var i = t(1);
					if (!i.installed) {
						var o = window.goldlog_queue || (window.goldlog_queue = []);
						o.push({
							action: "goldlog.setMetaInfo",
							arguments: ["aplus_chnl", i]
						}),
						i.installed = !0
					}
				}
			}
			()
		}, function (n, i) {
			/*!
			 * Copyright(c) Alibaba Group Holding Limited.
			 * AUTHOR: shafeng
			 * TAB SIZE: 4
			 */
			var t = "UCBrowser",
			o = window.navigator.userAgent,
			r = new RegExp(t, "i").test(o),
			e = window.location.href.indexOf("aplusDebug") !== -1,
			a = function () {
				var n = null;
				if (o.indexOf(t) > -1 ? n = /UCBrowser\/+(.*?\s)/ : o.indexOf("UCNewsApp") > -1 && (n = /UCNewsApp\/+(.*?\s)/), n)
					return o.match(n), RegExp.$1
			},
			s = "UCBridge",
			l = function (n, i) {
				n = n.toString().split("."),
				i = i.toString().split(".");
				for (var t = 0; t < n.length || t < i.length; t++) {
					var o = parseInt(n[t], 10),
					r = parseInt(i[t], 10);
					if (window.isNaN(o) && (o = 0), window.isNaN(r) && (r = 0), o < r)
						return -1;
					if (o > r)
						return 1
				}
				return 0
			},
			u = function () {
				var n = window.globalConfig && window.globalConfig.VERSION || a() || "";
				return !(!r || !n || 1 !== l(n, "11.7.5"))
			},
			w = function (n, i, t, o) {
				var r = {};
				for (var a in n)
					n.hasOwnProperty(a) && "functype" !== a && (r[a] = n[a]);
				if (u())
					return r.success = function (n) {
						e && window.alert(JSON.stringify(n))
					},
				r.fail = function (n) {
					e && window.alert(JSON.stringify(n))
				},
				window.ucapi.ut.toUT2(r),
				!0
			};
			n.exports = {
				isAvailable: u(),
				toUT2: w,
				bridgeName: s
			}
		}
	]); /*! 2018-05-24 16:43:12 v8.4.5 */
!function (t) {
	function e(o) {
		if (n[o])
			return n[o].exports;
		var a = n[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return t[o].call(a.exports, a, a.exports, e),
		a.loaded = !0,
		a.exports
	}
	var n = {};
	return e.m = t,
	e.c = n,
	e.p = "",
	e(0)
}
([function (t, e, n) {
			t.exports = n(1)
		}, function (t, e, n) {
			"use strict";
			!function () {
				var t = window,
				e = n(2),
				o = n(3),
				a = function () {
					n(88);
					var e = n(90),
					o = n(57);
					if (o.doPubMsg(["goldlogReady", "running"]), document.getElementsByTagName("body").length) {
						var r = "g_tb_aplus_loaded";
						if (t[r])
							return;
						t[r] = 1,
						n(96).initGoldlog(e)
					} else
						setTimeout(function () {
							a()
						}, 50)
				},
				r = function (n, o) {
					try {
						var a = Math.floor(268435456 * Math.random()).toString(16),
						r = t.location || {},
						i = ["page=" + encodeURIComponent(r.href), "info=" + encodeURIComponent(n.message), "stack=" + encodeURIComponent(n && n.stack ? n.stack : ""), "filename=aplus_core", "method=" + o, "cache=" + a].join("&"),
						s = r.protocol + "//gm.mmstat.com/mm.req.load?" + i;
						navigator && navigator.sendBeacon ? e.postData(s) : e.sendImg(s)
					} catch (t) {}
				};
				try {
					a()
				} catch (t) {
					r(t, o.script_name + "@" + o.lver)
				}
			}
			()
		}, function (t, e) {
			"use strict";
			var n = window;
			e.sendImg = function (t, e) {
				var o = new Image,
				a = "_img_" + Math.random();
				n[a] = o;
				var r = function () {
					if (n[a])
						try {
							delete n[a]
						} catch (t) {
							n[a] = void 0
						}
				};
				return o.onload = function () {
					r()
				},
				o.onerror = function () {
					r()
				},
				setTimeout(function () {
					window[a] && (window[a].src = "", r())
				}, e || 5e3),
				o.src = t,
				o = null,
				t
			},
			e.postData = function (t, e) {
				for (var n in e)
					"cna" !== n && (e[n] = encodeURIComponent(e[n]));
				return navigator.sendBeacon(t, JSON.stringify(e)),
				t
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(4),
			a = n(5),
			r = n(6);
			e.APLUS_ENV = "production",
			e.lver = a.lver,
			e.toUtVersion = a.toUtVersion,
			e.script_name = a.script_name,
			e.recordTypes = o.recordTypes,
			e.KEY = o.KEY,
			e.context = r.context,
			e.context_prepv = r.context_prepv,
			e.aplus_init_plugins = n(13).aplus_init_plugins,
			e.plugins_pv = n(24).plugins_pv,
			e.plugins_prepv = n(58).plugins_prepv,
			e.context_hjlj = n(59),
			e.plugins_hjlj = n(61).plugins_hjlj,
			e.beforeUnload = n(71),
			e.initLoad = n(73),
			e.spmException = n(79),
			e.goldlog_path = n(80),
			e.is_auto_pv = "true",
			e.utilPvid = n(84),
			e.disablePvid = "true",
			e.mustSpmE = !0,
			e.LS_CNA_KEY = "APLUS_CNA"
		}, function (t, e) {
			"use strict";
			e.recordTypes = {
				hjlj: "COMMON_HJLJ",
				uhjlj: "DATACLICK_HJLJ",
				pv: "PV",
				prepv: "PREPV"
			},
			e.KEY = {
				NAME_STORAGE: {
					REFERRER: "wm_referrer",
					REFERRER_PV_ID: "refer_pv_id",
					LOST_PV_PAGE_DURATION: "lost_pv_page_duration",
					LOST_PV_PAGE_SPMAB: "lost_pv_page_spmab",
					LOST_PV_PAGE: "lost_pv_page",
					LOST_PV_PAGE_MSG: "lost_pv_page_msg"
				}
			}
		}, function (t, e) {
			"use strict";
			e.lver = "8.4.5",
			e.toUtVersion = "v20180524",
			e.script_name = "aplus_wap"
		}, function (t, e, n) {
			"use strict";
			e.context = n(7),
			e.context_prepv = n(12)
		}, function (t, e, n) {
			"use strict";
			function o() {
				return {
					compose: {
						maxTimeout: 5500
					},
					etag: {
						egUrl: "//log.mmstat.com/eg.js",
						cna: i.getCookie("cna")
					},
					where_to_sendpv: {
						url: "//log.mmstat.com/m.gif"
					},
					where_to_sendlog_ut: {
						aplusToUT: {},
						toUTName: "toUT2"
					}
				}
			}
			function a() {
				return r.assign(new s.initConfig, new o)
			}
			var r = n(8),
			i = n(9),
			s = n(11);
			t.exports = a
		}, function (t, e) {
			"use strict";
			function n(t, e) {
				return "function" != typeof Object.assign ? function (t) {
					if (null === t)
						throw new TypeError("Cannot convert undefined or null to object");
					for (var e = Object(t), n = 1; n < arguments.length; n++) {
						var o = arguments[n];
						if (null !== o)
							for (var a in o)
								Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
					}
					return e
				}
				(t, e) : Object.assign({}, t, e)
			}
			function o(t) {
				return "function" == typeof t
			}
			function a(t) {
				return "string" == typeof t
			}
			function r(t) {
				return "undefined" == typeof t
			}
			function i(t, e) {
				return t.indexOf(e) > -1
			}
			var s = window;
			e.assign = n,
			e.makeCacheNum = function () {
				return Math.floor(268435456 * Math.random()).toString(16)
			},
			e.each = function (t, e) {
				var n,
				o = t.length;
				for (n = 0; n < o; n++)
					e(t[n])
			},
			e.isStartWith = function (t, e) {
				return 0 === t.indexOf(e)
			},
			e.isEndWith = function (t, e) {
				var n = t.length,
				o = e.length;
				return n >= o && t.indexOf(e) == n - o
			},
			e.any = function (t, e) {
				var n,
				o = t.length;
				for (n = 0; n < o; n++)
					if (e(t[n]))
						return !0;
				return !1
			},
			e.isFunction = o,
			e.isArray = function (t) {
				return Array.isArray ? Array.isArray(t) : /Array/.test(Object.prototype.toString.call(t))
			},
			e.isString = a,
			e.isNumber = function (t) {
				return "number" == typeof t
			},
			e.isUnDefined = r,
			e.isContain = i;
			var u = function (t) {
				var e,
				n = t.constructor === Array ? [] : {};
				if ("object" == typeof t) {
					if (s.JSON && s.JSON.parse)
						e = JSON.stringify(t), n = JSON.parse(e);
					else
						for (var o in t)
							n[o] = "object" == typeof t[o] ? u(t[o]) : t[o];
					return n
				}
			};
			e.cloneObj = u,
			e.cloneDeep = u
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				var e = s.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
				return e ? e[1] : ""
			}
			function a(t, e, n) {
				n || (n = {});
				var a = new Date;
				return "session" === n.expires || (n.expires && ("number" == typeof n.expires || n.expires.toUTCString) ? ("number" == typeof n.expires ? a.setTime(a.getTime() + 24 * n.expires * 60 * 60 * 1e3) : a = n.expires, e += "; expires=" + a.toUTCString()) : (a.setTime(a.getTime() + 63072e7), e += "; expires=" + a.toUTCString())),
				e += "; path=" + (n.path ? n.path : "/"),
				e += "; domain=" + n.domain,
				s.cookie = t + "=" + e,
				o(t)
			}
			function r(t, e, n) {
				try {
					if (n || (n = {}), n.domain)
						a(t, e, n);
					else
						for (var o = c.getDomains(), r = 0; r < o.length; )
							n.domain = o[r], a(t, e, n) ? r = o.length : r++
				} catch (t) {}
			}
			function i() {
				var t = {};
				return u.each(p, function (e) {
					t[e] = o(e)
				}),
				t.cnaui = /\btanx\.com$/.test(l) ? o("cnaui") : "",
				t
			}
			var s = document,
			u = n(8),
			c = n(10),
			l = location.hostname;
			e.getCookie = o,
			e.setCookie = r;
			var p = ["tracknick", "thw", "cna"];
			e.getData = i,
			e.getHng = function () {
				return encodeURIComponent(o("hng") || "")
			}
		}, function (t, e) {
			"use strict";
			e.getDomains = function () {
				var t = [];
				try {
					for (var e = location.hostname, n = e.split("."), o = 2; o <= n.length; )
						t.push(n.slice(n.length - o).join(".")), o++
				} catch (t) {}
				return t
			}
		}, function (t, e, n) {
			"use strict";
			function o(t, e, n) {
				var o = window.goldlog || {},
				s = o.getMetaInfo("aplus-ifr-pv") + "" == "1";
				return e ? r(t) ? "yt" : "m" : n && !s ? a.isContain(t, "wrating.com") ? "k" : i(t) || "y" : i(t) || "v"
			}
			var a = n(8),
			r = function (t) {
				for (var e = ["youku.com", "soku.com", "tudou.com", "laifeng.com"], n = 0; n < e.length; n++) {
					var o = e[n];
					if (a.isContain(t, o))
						return !0
				}
				return !1
			},
			i = function (t) {
				for (var e = [["scmp.com", "sc"], ["luxehomes.com.hk", "sc"], ["ays.com.hk", "sc"], ["cpjobs.com", "sc"], ["educationpost.com.hk", "sc"], ["cosmopolitan.com.hk", "sc"], ["elle.com.hk", "sc"], ["harpersbazaar.com.hk", "sc"], ["1688.com", "6"], ["youku.com", "yt"], ["soku.com", "yt"], ["tudou.com", "yt"], ["laifeng.com", "yt"]], n = 0; n < e.length; n++) {
					var o = e[n];
					if (a.isContain(t, o[0]))
						return o[1]
				}
				return ""
			};
			e.getBeaconSrc = o,
			e.initConfig = function () {
				return {
					compose: {},
					etag: {
						egUrl: "//log.mmstat.com/eg.js",
						cna: "",
						tag: "",
						stag: "",
						lstag: "-1",
						lscnastatus: ""
					},
					can_to_sendpv: {
						flag: "NO"
					},
					userdata: {},
					what_to_sendpv: {
						pvdata: {},
						exparams: {}
					},
					what_to_pvhash: {
						hash: []
					},
					what_to_sendpv_ut: {
						pvdataToUt: {}
					},
					what_to_sendpv_ut2: {
						isSuccess: !1,
						pvdataToUt: {}
					},
					when_to_sendpv: {
						aplusWaiting: ""
					},
					where_to_sendpv: {
						url: "//log.mmstat.com/o.gif",
						urlRule: o
					},
					where_to_sendlog_ut: {
						aplusToUT: {},
						toUTName: "toUT"
					},
					hjlj: {
						what_to_hjlj: {
							logdata: {}
						},
						what_to_hjlj_ut: {
							logdataToUT: {}
						}
					},
					network: {
						connType: "UNKNOWN"
					},
					is_single: !1
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o() {
				return {
					etag: {
						egUrl: "//log.mmstat.com/eg.js",
						cna: a.getCookie("cna"),
						tag: "",
						stag: ""
					},
					compose: {},
					where_to_prepv: {
						url: "//log.mmstat.com/v.gif",
						urlRule: r.getBeaconSrc
					},
					userdata: {},
					what_to_prepv: {
						logdata: {}
					},
					what_to_hjlj_exinfo: {
						EXPARAMS_FLAG: "EXPARAMS",
						exinfo: [],
						exparams_key_names: ["uidaplus", "pc_i", "pu_i"]
					},
					is_single: !1
				}
			}
			var a = n(9),
			r = n(11);
			t.exports = o
		}, function (t, e, n) {
			"use strict";
			e.aplus_init_plugins = [{
					name: "etag",
					enable: !0,
					path: n(14)
				}
			]
		}, function (t, e, n) {
			"use strict";
			var o = n(9),
			a = n(15),
			r = n(22),
			i = n(18),
			s = n(23);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t;
						var e = this.options.context.etag || {};
						this.cna = e.cna || o.getCookie("cna"),
						this.setTag(0),
						this.setStag(-1),
						this.setEtag(this.cna || ""),
						this.requesting = !1
					},
					setTag: function (t) {
						this.tag = t,
						this.options.context.etag.tag = t
					},
					setStag: function (t) {
						this.stag = t,
						this.options.context.etag.stag = t
					},
					setEtag: function (t) {
						this.etag = t,
						this.options.context.etag.cna = t,
						o.getCookie("cna") !== t && o.setCookie("cna", t)
					},
					getUrl: function () {
						var t = this.options.context.etag || {},
						e = a.filterIntUrl(t.egUrl || "//log.mmstat.com/eg.js");
						try {
							var n = goldlog.getMetaInfo("aplus-rhost-v"),
							o = /[[a-z|0-9\.]+[a-z|0-9]/,
							r = n.match(o);
							r && r[0] && (e = e.replace(o, r[0]))
						} catch (t) {}
						return e
					},
					run: function (t, e) {
						var n = this;
						if (n.cna)
							return void n.setTag(1);
						var o = null,
						a = this.getUrl();
						if (0 === a.indexOf("//")) {
							var u = i.getProtocal();
							a = u + a
						}
						return n.requesting = !0,
						r.loadScript(a, function (t) {
							if (t && "error" === t.type && n.setStag(-3), n.requesting) {
								n.requesting = !1;
								var a = s.getGoldlogVal("Etag");
								a && n.setEtag(a);
								var r = s.getGoldlogVal("stag");
								"undefined" != typeof r && n.setStag(r),
								clearTimeout(o),
								e()
							}
						}),
						o = setTimeout(function () {
								n.requesting = !1,
								n.setStag(-2),
								e()
							}, 1e3),
						"pause"
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				t = (t || "").split("#")[0].split("?")[0];
				var e = t.length,
				n = function (t) {
					var e,
					n = t.length,
					o = 0;
					for (e = 0; e < n; e++)
						o = 31 * o + t.charCodeAt(e);
					return o
				};
				return e ? n(e + "#" + t.charCodeAt(e - 1)) : -1
			}
			function a(t) {
				for (var e = t.split("&"), n = 0, o = e.length, a = {}; n < o; n++) {
					var r = e[n],
					i = r.indexOf("="),
					s = r.substring(0, i),
					u = r.substring(i + 1);
					a[s] = p.tryToDecodeURIComponent(u)
				}
				return a
			}
			function r(t) {
				if ("function" != typeof t)
					throw new TypeError(t + " is not a function");
				return t
			}
			function i(t) {
				var e,
				n,
				o,
				a = [],
				r = t.length;
				for (o = 0; o < r; o++)
					e = t[o][0], n = t[o][1], a.push(l.isStartWith(e, v) ? n : e + "=" + encodeURIComponent(n));
				return a.join("&")
			}
			function s(t) {
				var e,
				n,
				o,
				a = {},
				r = t.length;
				for (o = 0; o < r; o++)
					e = t[o][0], n = t[o][1], a[e] = n;
				return a
			}
			function u(t, e) {
				var n,
				o,
				a,
				r = [];
				for (n in t)
					t.hasOwnProperty(n) && (o = "" + t[n], a = n + "=" + encodeURIComponent(o), e ? r.push(a) : r.push(l.isStartWith(n, v) ? o : a));
				return r.join("&")
			}
			function c(t, e) {
				var n = t.indexOf("?") == -1 ? "?" : "&",
				o = e ? l.isArray(e) ? i(e) : u(e) : "";
				return o ? t + n + o : t
			}
			var l = n(8),
			p = n(16),
			g = n(18),
			f = parent !== self;
			e.is_in_iframe = f,
			e.makeCacheNum = l.makeCacheNum,
			e.isStartWith = l.isStartWith,
			e.isEndWith = l.isEndWith,
			e.any = l.any,
			e.each = l.each,
			e.assign = l.assign,
			e.isFunction = l.isFunction,
			e.isArray = l.isArray,
			e.isString = l.isString,
			e.isNumber = l.isNumber,
			e.isUnDefined = l.isUnDefined,
			e.isContain = l.isContain,
			e.sleep = n(19).sleep,
			e.makeChkSum = o,
			e.tryToDecodeURIComponent = p.tryToDecodeURIComponent,
			e.nodeListToArray = p.nodeListToArray,
			e.parseSemicolonContent = p.parseSemicolonContent,
			e.param2obj = a;
			var d = n(20),
			_ = function (t) {
				return /^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(t)
			};
			e.hostValidity = _;
			var h = function (t, e) {
				var n = /^(\/\/){0,1}(\w+\.){1,}\w+\/\w+\.gif$/.test(t),
				o = _(t),
				a = "";
				return n ? a = "isGifPath" : o && (a = "isHostPath"),
				a || d.logger({
					msg: e + ": " + t + ' is invalid, suggestion: "xxx.mmstat.com"'
				}),
				a
			},
			m = function (t) {
				return !/^\/\/gj\.mmstat/.test(t) && goldlog.isInternational() && (t = t.replace(/^\/\/\w+\.mmstat/, "//gj.mmstat")),
				t
			};
			e.filterIntUrl = m,
			e.getPvUrl = function (t) {
				t || (t = {});
				var e,
				n,
				o = t.metaValue && h(t.metaValue, t.metaName),
				a = "";
				"isGifPath" === o ? (e = /^\/\//.test(t.metaValue) ? "" : "//", a = e + t.metaValue) : "isHostPath" === o && (e = /^\/\//.test(t.metaValue) ? "" : "//", n = /\/$/.test(t.metaValue) ? "" : "/", a = e + t.metaValue + n + t.gifPath);
				var r;
				return a ? r = a : (e = 0 === t.gifPath.indexOf("/") ? t.gifPath : "/" + t.gifPath, r = t.url && t.url.replace(/\/\w+\.gif/, e)),
				r
			},
			e.indexof = n(21).indexof,
			e.callable = r;
			var v = "::-plain-::";
			e.mkPlainKey = function () {
				return v + Math.random()
			},
			e.s_plain_obj = v,
			e.mkPlainKeyForExparams = function (t) {
				var e = t || v;
				return e + "exparams"
			},
			e.rndInt32 = function () {
				return Math.round(2147483647 * Math.random())
			},
			e.arr2param = i,
			e.arr2obj = s,
			e.obj2param = u,
			e.makeUrl = c,
			e.ifAdd = function (t, e) {
				var n,
				o,
				a,
				r,
				i = e.length;
				for (n = 0; n < i; n++)
					o = e[n], a = o[0], r = o[1], r && t.push([a, r])
			},
			e.isStartWithProtocol = g.isStartWithProtocol,
			e.param2arr = function (t) {
				for (var e, n = t.split("&"), o = 0, a = n.length, r = []; o < a; o++)
					e = n[o].split("="), r.push([e.shift(), e.join("=")]);
				return r
			}
		}, function (t, e, n) {
			"use strict";
			function o(t, e) {
				var n = e || "";
				if (t)
					try {
						n = decodeURIComponent(t)
					} catch (t) {}
				return n
			}
			var a = n(17);
			e.tryToDecodeURIComponent = o,
			e.parseSemicolonContent = function (t, e, n) {
				e = e || {};
				var r,
				i,
				s = t.split(";"),
				u = s.length;
				for (r = 0; r < u; r++) {
					i = s[r].split("=");
					var c = a.trim(i.slice(1).join("="));
					e[a.trim(i[0]) || ""] = n ? c : o(c)
				}
				return e
			},
			e.nodeListToArray = function (t) {
				var e,
				n;
				try {
					return e = [].slice.call(t)
				} catch (a) {
					e = [],
					n = t.length;
					for (var o = 0; o < n; o++)
						e.push(t[o]);
					return e
				}
			},
			e.nodeListToArray = function (t) {
				var e,
				n;
				try {
					return e = [].slice.call(t)
				} catch (a) {
					e = [],
					n = t.length;
					for (var o = 0; o < n; o++)
						e.push(t[o]);
					return e
				}
			};
			var r = {
				set: function (t, e) {
					try {
						return localStorage.setItem(t, e),
						!0
					} catch (t) {
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
					} catch (t) {
						return !1
					}
				},
				remove: function (t) {
					localStorage.removeItem(t)
				}
			};
			e.store = r,
			e.getLsCna = function (t, e) {
				var n = "",
				o = r.get(t);
				if (o) {
					var a = o.split("_") || [];
					n = e ? a.length > 1 && e === a[0] ? a[1] : "" : a.length > 1 ? a[1] : ""
				}
				return decodeURIComponent(n)
			},
			e.setLsCna = function (t, e, n) {
				n && r.set && r.test() && r.set(t, e + "_" + encodeURIComponent(n))
			},
			e.getUrl = function (t) {
				var e = t || "//log.mmstat.com/eg.js";
				try {
					var n = goldlog.getMetaInfo("aplus-rhost-v"),
					o = /[[a-z|0-9\.]+[a-z|0-9]/,
					a = n.match(o);
					a && a[0] && (e = e.replace(o, a[0]))
				} catch (t) {}
				return e
			}
		}, function (t, e) {
			"use strict";
			function n(t) {
				return "string" == typeof t ? t.replace(/^\s+|\s+$/g, "") : ""
			}
			e.trim = n
		}, function (t, e, n) {
			"use strict";
			var o = n(8),
			a = function () {
				var t = location.protocol;
				return "http:" !== t && "https:" !== t && (t = "https:"),
				t
			};
			e.getProtocal = a,
			e.isStartWithProtocol = function (t) {
				for (var e = ["javascript:", "tel:", "sms:", "mailto:", "tmall://", "#"], n = 0, a = e.length; n < a; n++)
					if (o.isStartWith(t, e[n]))
						return !0;
				return !1
			}
		}, function (t, e) {
			"use strict";
			e.sleep = function (t, e) {
				return setTimeout(function () {
					e()
				}, t)
			}
		}, function (t, e) {
			"use strict";
			var n = function () {
				var t = !1;
				return "boolean" == typeof goldlog.aplusDebug && (t = goldlog.aplusDebug),
				t
			};
			e.isDebugAplus = n;
			var o = function (t) {
				t || (t = {});
				var e = t.level || "warn";
				window.console && window.console[e] && window.console[e](t.msg)
			};
			e.logger = o
		}, function (t, e) {
			"use strict";
			e.indexof = function (t, e) {
				var n = -1;
				try {
					n = t.indexOf(e)
				} catch (a) {
					for (var o = 0; o < t.length; o++)
						t[o] === e && (n = o)
				}
				finally {
					return n
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o(t, e) {
				return t && t.getAttribute ? t.getAttribute(e) || "" : ""
			}
			function a(t, e, n) {
				if (t && t.setAttribute)
					try {
						t.setAttribute(e, n)
					} catch (t) {}
			}
			function r(t, e) {
				if (t && t.removeAttribute)
					try {
						t.removeAttribute(e)
					} catch (n) {
						a(t, e, "")
					}
			}
			function i(t, e, n) {
				var o = "script",
				a = g.createElement(o);
				a.type = "text/javascript",
				a.async = !0;
				var r = "https:" == location.protocol ? e || t : t;
				0 === r.indexOf("//") && (r = u.getProtocal() + r),
				a.src = r,
				n && (a.id = n);
				var i = g.getElementsByTagName(o)[0];
				s = s || g.getElementsByTagName("head")[0],
				i ? i.parentNode.insertBefore(a, i) : s && s.appendChild(a)
			}
			var s,
			u = n(18),
			c = n(17),
			l = n(8),
			p = n(20),
			g = document;
			e.tryToGetAttribute = o,
			e.tryToSetAttribute = a,
			e.tryToRemoveAttribute = r,
			e.addScript = i,
			e.loadScript = function (t, e) {
				function n(t) {
					o.onreadystatechange = o.onload = o.onerror = null,
					o = null,
					e(t)
				}
				var o = g.createElement("script");
				if (s = s || g.getElementsByTagName("head")[0], o.async = !0, "onload" in o)
					o.onload = n;
				else {
					var a = function () {
						/loaded|complete/.test(o.readyState) && n()
					};
					o.onreadystatechange = a,
					a()
				}
				o.onerror = function (t) {
					n(t)
				},
				o.src = t,
				s.appendChild(o)
			},
			e.isTouch = function () {
				return "ontouchend" in document.createElement("div")
			},
			e.tryToGetHref = function (t) {
				var e;
				try {
					e = c.trim(t.getAttribute("href", 2))
				} catch (t) {}
				return e || ""
			};
			var f = function () {
				var t = goldlog && goldlog._$ ? goldlog._$ : {},
				e = t.meta_info || {};
				return e["aplus-exparams"] || ""
			};
			e.getExParamsFromMeta = f,
			e.getExParams = function (t) {
				var e = g.getElementById("beacon-aplus") || g.getElementById("tb-beacon-aplus"),
				n = o(e, "exparams"),
				a = d(n, f(), t) || "";
				return a && a.replace(/&amp;/g, "&").replace(/\buserid=/, "uidaplus=")
			};
			var d = function (t, e, n) {
				var o = "aplus&sidx=aplusSidex",
				a = t || o;
				try {
					if (e) {
						var r = n.param2obj(e),
						i = ["aplus", "cna", "spm-cnt", "spm-url", "spm-pre", "logtype", "pre", "uidaplus", "asid", "sidx", "trid", "gokey"];
						l.each(i, function (t) {
							r.hasOwnProperty(t) && (p.logger({
									msg: "Can not inject keywords: " + t
								}), delete r[t])
						}),
						delete r[""];
						var s = "";
						if (t) {
							var u = t.match(/aplus&/).index,
							c = u > 0 ? n.param2obj(t.substring(0, u)) : {};
							delete c[""],
							s = n.obj2param(l.assign(c, r)) + "&" + t.substring(u, t.length)
						} else
							s = n.obj2param(r) + "&" + o;
						return s
					}
					return a
				} catch (t) {
					return a
				}
			};
			e.mergeExparams = d
		}, function (t, e) {
			"use strict";
			var n = function (t) {
				var e;
				try {
					window.goldlog || (window.goldlog = {}),
					e = window.goldlog[t]
				} catch (t) {
					e = ""
				}
				finally {
					return e
				}
			};
			e.getGoldlogVal = n;
			var o = function (t, e) {
				var n = !1;
				try {
					window.goldlog || (window.goldlog = {}),
					t && (window.goldlog[t] = e, n = !0)
				} catch (t) {
					n = !1
				}
				finally {
					return n
				}
			};
			e.setGoldlogVal = o,
			e.getClientInfo = function () {
				return n("_aplus_client") || {}
			}
		}, function (t, e, n) {
			"use strict";
			e.plugins_pv = [{
					name: "etag",
					enable: !0,
					path: n(25)
				}, {
					name: "when_to_sendpv",
					enable: !0,
					path: n(27)
				}, {
					name: "where_to_sendlog_ut",
					enable: !0,
					path: n(31)
				}, {
					name: "is_single",
					enable: !0,
					path: n(33)
				}, {
					name: "what_to_pvhash",
					enable: !0,
					path: n(36)
				}, {
					name: "what_to_sendpv",
					enable: !0,
					path: n(37)
				}, {
					name: "what_to_sendpv_userdata",
					enable: !0,
					path: n(40),
					deps: ["what_to_sendpv"]
				}, {
					name: "what_to_sendpv_etag",
					enable: !0,
					path: n(45),
					deps: ["etag", "what_to_sendpv"]
				}, {
					name: "what_to_sendpv_ut2",
					enable: n(46),
					path: n(47),
					deps: ["where_to_sendlog_ut", "is_single"]
				}, {
					name: "what_to_sendpv_ut",
					enable: n(46),
					path: n(48),
					deps: ["where_to_sendlog_ut", "is_single"]
				}, {
					name: "what_to_pv_slog",
					enable: !0,
					path: n(49),
					deps: ["what_to_sendpv"]
				}, {
					name: "can_to_sendpv",
					enable: !0,
					path: n(50)
				}, {
					name: "where_to_sendpv_wap",
					enable: !0,
					path: n(51),
					deps: ["is_single"]
				}, {
					name: "do_sendpv",
					enable: !0,
					path: n(53),
					deps: ["is_single", "what_to_sendpv", "where_to_sendpv_wap"]
				}, {
					name: "do_sendpv_ut2",
					enable: n(46),
					path: n(54),
					deps: ["what_to_sendpv_ut2", "where_to_sendlog_ut"]
				}, {
					name: "do_sendpv_ut",
					enable: n(46),
					path: n(55),
					deps: ["what_to_sendpv_ut", "where_to_sendlog_ut"]
				}, {
					name: "after_pv",
					enable: !0,
					path: n(56)
				}
			]
		}, function (t, e, n) {
			"use strict";
			var o = n(9),
			a = n(22),
			r = n(16),
			i = n(26),
			s = n(18),
			u = n(23),
			c = n(3);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t;
						var e = this.options.context.etag || {};
						this.cna = e.cna || o.getCookie("cna"),
						this.setTag(0),
						this.setStag(-1),
						this.setLsTag("-1"),
						this.setEtag(this.cna || ""),
						this.requesting = !1,
						this.today = i.getFormatDate()
					},
					setLsTag: function (t) {
						this.lstag = t,
						this.options.context.etag.lstag = t
					},
					setTag: function (t) {
						this.tag = t,
						this.options.context.etag.tag = t
					},
					setStag: function (t) {
						this.stag = t,
						this.options.context.etag.stag = t
					},
					setEtag: function (t) {
						this.etag = t,
						this.options.context.etag.cna = t,
						o.getCookie("cna") !== t && o.setCookie("cna", t)
					},
					setLscnaStatus: function (t) {
						this.options.context.etag.lscnastatus = t
					},
					getUrl: function () {
						var t = this.options.context.etag || {};
						return r.getUrl(t.egUrl || "//log.mmstat.com/eg.js")
					},
					run: function (t, e) {
						var n = this;
						if (n.cna)
							return void n.setTag(1);
						var o = null,
						i = this.getUrl();
						if (0 === i.indexOf("//")) {
							var l = s.getProtocal();
							i = l + i
						}
						n.requesting = !0;
						var p = function () {
							setTimeout(function () {
								e()
							}, 20),
							clearTimeout(o)
						};
						return a.loadScript(i, function (t) {
							var e,
							o;
							if (t && "error" === t.type ? n.setStag(-3) : (e = u.getGoldlogVal("Etag"), e && n.setEtag(e), o = u.getGoldlogVal("stag"), "undefined" != typeof o && n.setStag(o)), n.requesting) {
								if (2 === o || 4 === o) {
									var a = r.getLsCna(c.LS_CNA_KEY);
									a ? (n.setLsTag(1), n.setEtag(a)) : (n.setLsTag(0), r.setLsCna(c.LS_CNA_KEY, n.today, e))
								}
								p()
							}
						}),
						o = setTimeout(function () {
								n.requesting = !1,
								n.setStag(-2),
								e()
							}, 1500),
						2e3
					}
				}
			}
		}, function (t, e) {
			"use strict";
			function n(t, e, n) {
				var o = "" + Math.abs(t),
				a = e - o.length,
				r = t >= 0;
				return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + o
			}
			e.getFormatDate = function (t) {
				var e = new Date;
				try {
					return [e.getFullYear(), n(e.getMonth() + 1, 2, 0), n(e.getDate(), 2, 0)].join(t || "")
				} catch (t) {
					return ""
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23),
			a = n(19),
			r = n(28);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getMetaInfo: function () {
						var t = o.getGoldlogVal("_$") || {},
						e = t.meta_info || r.getInfo();
						return e
					},
					getAplusWaiting: function () {
						var t = this.getMetaInfo() || {};
						return t["aplus-waiting"]
					},
					run: function (t, e) {
						var n = this.options.config || {},
						o = this.getAplusWaiting();
						if (o && n.is_auto)
							switch (o = this.getAplusWaiting() + "", this.options.context.when_to_sendpv = {
									aplusWaiting: o
								}, o) {
							case "MAN":
								return "done";
							case "1":
								return this.options.context.when_to_sendpv.isWait = !0,
								a.sleep(6e3, function () {
									e()
								}),
								6e3;
							default:
								var r = 1 * o;
								if (r + "" != "NaN")
									return this.options.context.when_to_sendpv.isWait = !0, a.sleep(r, function () {
										e()
									}), r
							}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				var e,
				n,
				o,
				a = t.length,
				r = {};
				for (f._microscope_data = r, e = 0; e < a; e++)
					n = t[e], "microscope-data" == l.tryToGetAttribute(n, "name") && (o = l.tryToGetAttribute(n, "content"), u.parseSemicolonContent(o, r), f.is_head_has_meta_microscope_data = !0);
				f._microscope_data_params = u.obj2param(r),
				f.ms_data_page_id = r.pageId,
				f.ms_data_shop_id = r.shopId,
				f.ms_data_instance_id = r.siteInstanceId,
				f.ms_data_siteCategoryId = r.siteCategory,
				f.ms_prototype_id = r.prototypeId,
				f.site_instance_id_or_shop_id = f.ms_data_instance_id || f.ms_data_shop_id,
				f._atp_beacon_data = {},
				f._atp_beacon_data_params = ""
			}
			function a(t) {
				var e,
				n = function () {
					var e;
					return document.querySelector && (e = document.querySelector("meta[name=data-spm]")),
					c.each(t, function (t) {
						"data-spm" === l.tryToGetAttribute(t, "name") && (e = t)
					}),
					e
				},
				o = n();
				return o && (e = l.tryToGetAttribute(o, "data-spm-protocol")),
				e
			}
			function r(t) {
				var e = t.isonepage || "-1",
				n = e.split("|"),
				o = n[0],
				a = n[1] ? n[1] : "";
				t.isonepage_data = {
					isonepage: o,
					urlpagename: a
				}
			}
			function i() {
				var t = p.getMetaTags();
				o(t),
				c.each(t, function (t) {
					var e = l.tryToGetAttribute(t, "name");
					/^aplus/.test(e) && (f[e] = p.getMetaCnt(e))
				}),
				c.each(d, function (t) {
					f[t] = p.getMetaCnt(t)
				}),
				f.spm_protocol = a(t);
				var e,
				n,
				i = ["aplus-rate-ahot"],
				s = i.length;
				for (e = 0; e < s; e++)
					n = i[e], f[n] = parseFloat(f[n]);
				return r(f),
				_ = f || {},
				f
			}
			function s() {
				return _ || i()
			}
			var u = n(15),
			c = n(8),
			l = n(22),
			p = n(29),
			g = n(30),
			f = {},
			d = ["ahot-aplus", "isonepage", "spm-id", "data-spm", "microscope-data"],
			_ = {};
			e.setMetaInfo = function (t, e) {
				return _ || (_ = {}),
				_[t] = e,
				!0
			};
			var h = function (t) {
				return _ || (_ = {}),
				_[t] || ""
			};
			e.getMetaInfo = h,
			e.getInfo = i,
			e.qGet = s,
			e.appendMetaInfo = function (t, e) {
				if (t && e) {
					var n,
					o = function (n) {
						try {
							var o = "string" == typeof e ? JSON.parse(e) : e;
							goldlog.setMetaInfo(t, c.assign(n, o))
						} catch (t) {}
					},
					a = function (n) {
						try {
							var o = "string" == typeof e ? JSON.parse(e) : e;
							goldlog.setMetaInfo(t, n.concat(o))
						} catch (t) {}
					},
					r = function (t) {
						return "EXPARAMS" === t ? g.getExparamsInfos("", t) : t ? t.split("&") : []
					},
					i = function (n) {
						try {
							var o = r(n),
							a = r(e);
							goldlog.setMetaInfo(t, o.concat(a).join("&"))
						} catch (t) {}
					},
					s = function (t) {
						t.constructor === Array ? a(t) : o(t)
					},
					u = goldlog.getMetaInfo(t);
					if ("aplus-exinfo" === t && (i(u), n = !0), u)
						if ("object" == typeof u)
							s(u), n = !0;
						else
							try {
								var l = JSON.parse(u);
								"object" == typeof l && (s(l), n = !0)
							} catch (t) {}
					n || goldlog.setMetaInfo(t, e)
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				return i = i || document.getElementsByTagName("head")[0],
				s && !t ? s : i ? s = i.getElementsByTagName("meta") : []
			}
			function a(t) {
				var e,
				n,
				a,
				r = o(),
				i = r.length;
				for (e = 0; e < i; e++)
					n = r[e], u.tryToGetAttribute(n, "name") === t && (a = u.tryToGetAttribute(n, "content"));
				return a || ""
			}
			function r(t) {
				var e = {
					isonepage: "-1",
					urlpagename: ""
				},
				n = t.qGet();
				if (n && n.hasOwnProperty("isonepage_data"))
					e.isonepage = n.isonepage_data.isonepage, e.urlpagename = n.isonepage_data.urlpagename;
				else {
					var o = a("isonepage") || "-1",
					r = o.split("|");
					e.isonepage = r[0],
					e.urlpagename = r[1] ? r[1] : ""
				}
				return e
			}
			var i,
			s,
			u = n(22);
			e.getMetaTags = o,
			e.getMetaCnt = a,
			e.getOnePageInfo = r
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(22),
			r = n(21);
			e.getExparamsInfos = function (t, e) {
				var n = [],
				i = t || ["uidaplus", "pc_i", "pu_i"],
				s = a.getExParams(o) || "";
				s = s.replace(/&aplus&/, "&");
				for (var u = o.param2arr(s) || [], c = function (t) {
					return r.indexof(i, t) > -1
				}, l = 0; l < u.length; l++) {
					var p = u[l],
					g = p[0] || "",
					f = p[1] || "";
					g && f && ("EXPARAMS" === e || c(g)) && n.push(g + "=" + f)
				}
				return n
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(32);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getAplusToUT: function () {
						return {
							toUT2: o.getAplusToUT("toUT2"),
							toUT: o.getAplusToUT("toUT")
						}
					},
					run: function () {
						var t = this.getAplusToUT();
						this.options.context.where_to_sendlog_ut.aplusToUT = t
					}
				}
			}
		}, function (t, e) {
			"use strict";
			var n = navigator.userAgent,
			o = /WindVane/i.test(n);
			e.is_WindVane = o;
			var a = function () {
				var t = goldlog.getMetaInfo("aplus_chnl");
				return !(!t || !t.isAvailable || "function" != typeof t.toUT2 && "function" != typeof t.toUT) && t
			};
			e.isAplusChnl = a,
			e.getAplusToUT = function (t) {
				var e = {},
				n = a();
				if ("object" == typeof n)
					e.bridgeName = n.bridgeName || "customBridge", e.isAvailable = n.isAvailable, e.toUT2 = n.toUT2 || n.toUT;
				else {
					var r = window.WindVane || {};
					if (o && r && r.isAvailable && "function" == typeof r.call) {
						var i = t || "toUT";
						e = {
							bridgeName: "WindVane",
							isAvailable: !0,
							toUT2: function (t, e, n, o) {
								return r.call("WVTBUserTrack", i, t, e, n, o)
							}
						}
					}
				}
				return e
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23),
			a = n(34),
			r = n(3);
			t.exports = function () {
				var t = o.getGoldlogVal("isUT4Aplus");
				return {
					init: function (t) {
						this.options = t
					},
					isBoth: function (t) {
						return "1" === t.meta_info["aplus-both-request"]
					},
					isSingle_pv: function () {
						var e = o.getGoldlogVal("_$") || {};
						return !(!t && !e.is_WindVane || !a.isSingleUaVersion() || this.isBoth(e))
					},
					isSingle_hjlj: function (e) {
						var n = o.getGoldlogVal("_$") || {};
						return !(!t && !n.is_WindVane || !a.isSingleSendLog(e) || this.isBoth(n))
					},
					isSingle_uhjlj: function (e) {
						var n = o.getGoldlogVal("_$") || {};
						return (!e || !/^\/aplus\.99\.(\d)+$/.test(e.logkey)) && !(!((t || n.is_WindVane) && e && e.logkey && a.isSingleUaVersion()) || this.isBoth(n))
					},
					run: function () {
						var t = this.options.context || {},
						e = this.options.config || {},
						n = t.where_to_sendlog_ut.aplusToUT || {},
						o = n.toUT || {},
						a = n.toUT2 || {},
						i = !(!o.isAvailable && !a.isAvailable),
						s = t.userdata || {},
						u = !!t.is_single;
						switch (e.recordType) {
						case r.recordTypes.uhjlj:
							u = this.isSingle_uhjlj(s);
							break;
						case r.recordTypes.hjlj:
							u = this.isSingle_hjlj(s);
							break;
						case r.recordTypes.pv:
							u = this.isSingle_pv(s);
							break;
						default:
							u = this.isSingle_pv(s)
						}
						this.options.context.is_single = i && u
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(35),
			a = function (t) {
				var e = t.logkey.toLowerCase();
				0 === e.indexOf("/") && (e = e.substr(1));
				var n = t.gmkey.toUpperCase();
				switch (n) {
				case "EXP":
					return "2201";
				case "CLK":
					return "2101";
				case "SLD":
					return "19999";
				case "OTHER":
				default:
					return "19999"
				}
			},
			r = function () {
				var t = !1;
				return t || goldlog.isUT4Aplus || o.webviewIsAbove({
					version_ios_tb: [5, 11, 7],
					version_ios_tm: [5, 24, 1],
					version_android_tb: [5, 11, 7],
					version_android_tm: [5, 24, 1]
				})
			};
			e.isSingleUaVersion = r,
			e.isSingleSendLog = function (t) {
				return (!t || !/^\/fsp\.1\.1$/.test(t.logkey)) && !!(t && t.logkey && r())
			},
			e.getFunctypeValue = function (t) {
				return e.isSingleSendLog(t) ? a(t) : "2101"
			},
			e.getFunctypeValue2 = function (t) {
				return a(t)
			}
		}, function (t, e) {
			"use strict";
			var n = function (t) {
				var e = [0, 0, 0];
				try {
					if (t) {
						var n = t[1],
						o = n.split(".");
						if (o.length > 2)
							for (var a = 0; a < o.length; )
								e[a] = parseInt(o[a]), a++
					}
				} catch (t) {
					e = [0, 0, 0]
				}
				finally {
					return e
				}
			};
			e.parseVersion = n;
			var o = function (t, e) {
				var n = !1;
				try {
					var o = t[0] > e[0],
					a = t[1] > e[1],
					r = t[2] > e[2],
					i = t[0] === e[0],
					s = t[1] === e[1],
					u = t[2] === e[2];
					n = !!o || (!(!i || !a) || (!!(i && s && r) || !!(i && s && u)))
				} catch (t) {
					n = !1
				}
				finally {
					return n
				}
			};
			e.isAboveVersion = o,
			e.webviewIsAbove = function (t, e) {
				var a = !1;
				try {
					e || (e = navigator.userAgent);
					var r = e.match(/AliApp\(TB\/(\d+[._]\d+[._]\d+)/i),
					i = n(r),
					s = e.match(/AliApp\(TM\/(\d+[._]\d+[._]\d+)/i),
					u = n(s),
					c = /iPhone|iPad|iPod|ios/i.test(e),
					l = /android/i.test(e);
					c ? r && i ? a = o(i, t.version_ios_tb) : s && u && (a = o(u, t.version_ios_tm)) : l && (r && i ? a = o(i, t.version_android_tb) : s && u && (a = o(u, t.version_android_tm)))
				} catch (t) {
					a = !1
				}
				return a
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = this.options.context.what_to_pvhash || {},
						e = o.getGoldlogVal("_$") || {},
						n = e.meta_info || {},
						a = n["aplus-pvhash"] || "",
						r = [];
						"1" === a && (r = ["_aqx_uri", encodeURIComponent(location.href)]),
						t.hash = r,
						this.options.context.what_to_pvhash = t
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(8),
			r = n(22),
			i = n(38),
			s = n(23),
			u = n(9),
			c = n(39);
			t.exports = function () {
				return a.assign(c, {
					init: function (t) {
						this.options = t,
						this.cookie_data || (this.cookie_data = u.getData()),
						this.client_info || (this.client_info = s.getClientInfo() || {})
					},
					getExParams: function () {
						var t = [],
						e = document,
						n = e.getElementById("beacon-aplus") || e.getElementById("tb-beacon-aplus"),
						s = r.tryToGetAttribute(n, "exparams"),
						u = r.mergeExparams(s, r.getExParamsFromMeta(), o) || "";
						u && (u = u.replace(/&amp;/g, "&").replace(/\buserid=/, "uidaplus="), t.push([o.mkPlainKeyForExparams(), u]));
						var c = a.makeCacheNum();
						return i.updateKey(t, "cache", c),
						t
					},
					getExtra: function () {
						var t = [],
						e = this.getClientInfo() || [];
						return o.ifAdd(t, e),
						t
					}
				})
			}
		}, function (t, e) {
			"use strict";
			function n(t, e, n) {
				r(t, "spm-cnt", function (t) {
					var o = t.split(".");
					return o[0] = goldlog.spm_ab[0],
					o[1] = goldlog.spm_ab[1],
					e ? o[1] = o[1].split("/")[0] + "/" + e : o[1] = o[1].split("/")[0],
					n && (o[4] = n),
					o.join(".")
				})
			}
			function o(t, e) {
				var n = window.g_SPM && g_SPM._current_spm;
				n && r(t, "spm-url", function () {
					return [n.a, n.b, n.c, n.d].join(".") + (e ? "." + e : "")
				}, "spm-cnt")
			}
			function a(t, e) {
				var n,
				o,
				a,
				r = -1;
				for (n = 0, o = t.length; n < o; n++)
					if (a = t[n], a[0] === e) {
						r = n;
						break
					}
				r >= 0 && t.splice(r, 1)
			}
			function r(t, e, n, o) {
				var a,
				r,
				i = t.length,
				s = -1,
				u = "function" == typeof n;
				for (a = 0; a < i; a++) {
					if (r = t[a], r[0] === e)
						return void(u ? r[1] = n(r[1]) : r[1] = n);
					o && r[0] === o && (s = a)
				}
				o && (u && (n = n()), s > -1 ? t.splice(s, 0, [e, n]) : t.push([e, n]))
			}
			t.exports = {
				updateSPMCnt: n,
				updateSPMUrl: o,
				updateKey: r,
				removeKey: a
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(8),
			r = n(23),
			i = n(32),
			s = n(9),
			u = n(3);
			t.exports = {
				init: function (t) {
					this.options = t,
					this.cookie_data || (this.cookie_data = s.getData())
				},
				getBasicParams: function () {
					var t = document,
					e = r.getGoldlogVal("_$") || {},
					n = e.spm || {},
					i = e.meta_info || {},
					u = i["aplus-ifr-pv"] + "" == "1",
					c = o.is_in_iframe && !u ? 0 : 1,
					l = [["logtype", c], [o.mkPlainKey(), "title=" + escape(t.title)], ["pre", e.page_referrer], ["cache", a.makeCacheNum()], ["scr", screen.width + "x" + screen.height]],
					p = this.cookie_data || {},
					g = this.options.context || {},
					f = g.etag || {},
					d = f.cna || p.cna || s.getCookie("cna");
					d && l.push([o.mkPlainKey(), "cna=" + d]),
					p.tracknick && l.push([o.mkPlainKey(), "nick=" + p.tracknick]);
					var _ = n.spm_url || "";
					return o.ifAdd(l, [["wm_pageid", i.ms_data_page_id], ["wm_prototypeid", i.ms_prototype_id], ["wm_sid", i.ms_data_shop_id], ["spm-url", _], ["spm-pre", n.spm_pre], ["spm-cnt", n.spm_cnt], ["cnaui", p.cnaui]]),
					l
				},
				getExParams: function () {
					return []
				},
				getExtra: function () {
					return []
				},
				getClientInfo: function (t) {
					var e = [],
					n = r.getGoldlogVal("_$") || {},
					a = this.client_info || {},
					s = a.ua_info || {};
					if (t || !i.is_WindVane && !i.isAplusChnl()) {
						for (var c, l = [], p = ["p", "o", "b", "s", "w", "wx", "ism"], g = 0; c = p[g++]; )
							s[c] && l.push([c, s[c]]);
						o.ifAdd(e, l)
					}
					o.ifAdd(e, [["lver", goldlog.lver || u.lver], ["jsver", n.script_name || u.script_name], ["pver", goldlog.aplus_cplugin_ver]]);
					var f = this.options.config || {},
					d = f.is_auto;
					return d || o.ifAdd(e, [["mansndlog", 1]]),
					e
				},
				processLodashDollar: function () {
					var t = r.getGoldlogVal("_$") || {};
					t.page_url !== location.href && (t.page_referrer = t.page_url, t.page_url = location.href),
					r.setGoldlogVal("_$", t)
				},
				getLsParams: function () {
					var t = r.getGoldlogVal("_$") || {},
					e = [];
					return t.lsparams && t.lsparams.spm_id && (e.push(["lsparams", t.lsparams.spm_id]), e.push(["lsparams_pre", t.lsparams.current_url])),
					e
				},
				run: function () {
					var t = this.getBasicParams() || [],
					e = this.getExParams() || [],
					n = this.getExtra() || [];
					this.processLodashDollar();
					var o = this.getLsParams() || [],
					a = [].concat(t, e, n, o);
					this.options.context.what_to_sendpv.pvdata = a,
					this.options.context.what_to_sendpv.exparams = e
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(23),
			r = n(38),
			i = n(9),
			s = n(41);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getPageId: function () {
						var t = this.options.config || {},
						e = this.options.context || {},
						n = e.userdata || {};
						return t.page_id || t.pageid || t.pageId || n.page_id
					},
					getPageInfo: function () {
						var t,
						e = document.body || {};
						return e.getBoundingClientRect && (t = e.getBoundingClientRect()),
						t
					},
					getUserdata: function () {
						var t = a.getGoldlogVal("_$") || {},
						e = t.spm || {},
						n = this.options.context || {},
						r = n.userdata || {},
						u = this.options.config || {},
						c = [];
						if (u && !u.is_auto) {
							u.gokey && c.push([o.mkPlainKey(), u.gokey]);
							var l = e.data.b;
							if (l) {
								var p = this.getPageId();
								l = p ? l.split("/")[0] + "/" + p : l.split("/")[0],
								s.setB(l);
								var g = e.spm_cnt.split(".");
								g && g.length > 2 && (g[1] = l, e.spm_cnt = g.join("."))
							}
						}
						var f = function (t) {
							if ("object" == typeof t)
								for (var e in t)
									"object" != typeof t[e] && "function" != typeof t[e] && c.push([e, t[e]])
						};
						f(goldlog.getMetaInfo("aplus-cpvdata")),
						f(r);
						var d = i.getCookie("workno") || i.getCookie("emplId");
						d && c.push(["workno", d]);
						var _ = i.getHng();
						_ && c.push(["_hng", i.getHng()]);
						var h = this.getPageInfo();
						return h && (c.push(["_pw", h.width]), c.push(["_ph", h.height])),
						c
					},
					processLodashDollar: function () {
						var t = this.options.config || {},
						e = a.getGoldlogVal("_$") || {};
						t && t.referrer && (e.page_referrer = t.referrer),
						a.setGoldlogVal("_$", e)
					},
					updatePre: function (t) {
						var e = a.getGoldlogVal("_$") || {};
						return e.page_referrer && r.updateKey(t, "pre", e.page_referrer),
						t
					},
					run: function () {
						var t = this.options.context.what_to_sendpv.pvdata,
						e = this.getUserdata();
						this.processLodashDollar();
						var n = t,
						o = this.options.context.what_to_pvhash.hash;
						o && o.length > 0 && n.push(o),
						n = n.concat(e),
						n = this.updatePre(n);
						var a = this.getPageId();
						a && r.updateSPMCnt(n, a),
						this.options.context.what_to_sendpv.pvdata = n,
						this.options.context.userdata = e
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o() {
				if (!s.data.a || !s.data.b) {
					var t = r._SPM_a,
					e = r._SPM_b;
					if (t && e)
						return t = t.replace(/^{(\w+\/)}$/g, "$1"), e = e.replace(/^{(\w+\/)}$/g, "$1"), s.is_wh_in_page = !0, void c.setAB(t, e);
					var n = goldlog._$.meta_info;
					t = n["data-spm"] || n["spm-id"] || "0";
					var o = t.split(".");
					o.length > 1 && (t = o[0], e = o[1]),
					c.setA(t),
					e && c.setB(e);
					var a = i.getElementsByTagName("body");
					a = a && a.length ? a[0] : null,
					a && (e = l.tryToGetAttribute(a, "data-spm"), e ? c.setB(e) : 1 === o.length && c.setAB("0", "0"))
				}
			}
			function a() {
				var t = s.data.a,
				e = s.data.b;
				t && e && (goldlog.spm_ab = [t, e])
			}
			var r = window,
			i = document,
			s = {},
			u = {};
			s.data = u;
			var c = {},
			l = n(22),
			p = n(42),
			g = location.href,
			f = n(43).getRefer(),
			d = n(3);
			c.setA = function (t) {
				s.data.a = t,
				a()
			},
			c.setB = function (t) {
				s.data.b = t,
				a()
			},
			c.setAB = function (t, e) {
				s.data.a = t,
				s.data.b = e,
				a()
			};
			var _ = p.getSPMFromUrl,
			h = function () {
				var t = d.utilPvid.makePVId();
				return d.mustSpmE ? t || goldlog.pvid || "" : t || ""
			},
			m = function (t, e) {
				var n = t.goldlog || window.goldlog || {},
				a = n.meta_info || {};
				s.meta_protocol = a.spm_protocol;
				var r,
				i = n.spm_ab || [],
				u = i[0] || "0",
				c = i[1] || "0";
				"0" === u && "0" === c && (o(), u = s.data.a || "0", c = s.data.b || "0"),
				r = [s.data.a, s.data.b].join("."),
				s.spm_cnt = (r || "0.0") + ".0.0";
				var l = t.send_pv_count > 0 ? h() : n.pvid;
				l && (s.spm_cnt += "." + l),
				n._$.spm = s,
				"function" == typeof e && e(l)
			};
			c.spaInit = function (t, e, n, o) {
				var a = "function" == typeof o ? o : function () {},
				r = s.spm_url,
				i = window.g_SPM || {},
				u = t._$ || {},
				c = u.send_pv_count;
				m({
					goldlog: t,
					meta_info: e,
					send_pv_count: c
				}, function (t) {
					s.spm_cnt = s.data.a + "." + s.data.b + ".0.0" + (t ? "." + t : "");
					var n = e["aplus-spm-fixed"];
					if ("1" !== n) {
						s.spm_pre = _(f),
						s.spm_url = _(location.href);
						var o = i._current_spm || {};
						o && o.a && "0" !== o.a && o.b && "0" !== o.b && (s.spm_url = [o.a, o.b, o.c, o.d, o.e].join("."), s.spm_pre = r)
					}
					a()
				})
			},
			c.init = function (t, e, n) {
				s.spm_url = _(g),
				s.spm_pre = _(f),
				m({
					goldlog: t,
					meta_info: e
				}, function () {
					"function" == typeof n && n()
				})
			},
			c.resetSpmCntPvid = function () {
				var t = goldlog.spm_ab;
				if (t && 2 === t.length) {
					var e = t.join(".") + ".0.0",
					n = h();
					n && (e = e + "." + n),
					s.spm_cnt = e,
					s.spm_url = e,
					goldlog._$.spm = s
				}
			},
			t.exports = c
		}, function (t, e) {
			"use strict";
			function n(t, e) {
				if (!t || !e)
					return "";
				var n,
				o = "";
				try {
					var a = new RegExp(t + "=([^&|#|?|/]+)");
					if ("spm" === t || "scm" === t) {
						var r = new RegExp("\\?.*" + t + "=([\\w\\.\\-\\*/]+)"),
						i = e.match(a),
						s = e.match(r),
						u = i && 2 === i.length ? i[1] : "",
						c = s && 2 === s.length ? s[1] : "";
						o = u > c ? u : c,
						o = decodeURIComponent(o)
					} else
						n = e.match(a), o = n && 2 === n.length ? n[1] : ""
				} catch (t) {}
				finally {
					return o
				}
			}
			e.getParamFromUrl = n,
			e.getSPMFromUrl = function (t) {
				return n("spm", t)
			}
		}, function (t, e, n) {
			"use strict";
			var o = null,
			a = n(44).nameStorage,
			r = n(4);
			e.getRefer = function () {
				if (null !== o)
					return o;
				var t = r.KEY || {},
				e = t.NAME_STORAGE || {};
				return o = document.referrer || a.getItem(e.REFERRER) || ""
			}
		}, function (t, e) {
			"use strict";
			var n = function () {
				function t() {
					var t,
					e = [],
					r = !0;
					for (var l in p)
						p.hasOwnProperty(l) && (r = !1, t = p[l] || "", e.push(c(l) + s + c(t)));
					n.name = r ? o : a + c(o) + i + e.join(u)
				}
				function e(t, e, n) {
					t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, function (e) {
							n.call(t, e)
						}))
				}
				var n = window;
				if (n.nameStorage)
					return n.nameStorage;
				var o,
				a = "nameStorage:",
				r = /^([^=]+)(?:=(.*))?$/,
				i = "?",
				s = "=",
				u = "&",
				c = encodeURIComponent,
				l = decodeURIComponent,
				p = {},
				g = {};
				return function (t) {
					if (t && 0 === t.indexOf(a)) {
						var e = t.split(/[:?]/);
						e.shift(),
						o = l(e.shift()) || "";
						for (var n, i, s, c = e.join(""), g = c.split(u), f = 0, d = g.length; f < d; f++)
							n = g[f].match(r), n && n[1] && (i = l(n[1]), s = l(n[2]) || "", p[i] = s)
					} else
						o = t || ""
				}
				(n.name),
				g.setItem = function (e, n) {
					e && "undefined" != typeof n && (p[e] = String(n), t())
				},
				g.getItem = function (t) {
					return p.hasOwnProperty(t) ? p[t] : null
				},
				g.removeItem = function (e) {
					p.hasOwnProperty(e) && (p[e] = null, delete p[e], t())
				},
				g.clear = function () {
					p = {},
					t()
				},
				g.valueOf = function () {
					return p
				},
				g.toString = function () {
					var t = n.name;
					return 0 === t.indexOf(a) ? t : a + t
				},
				e(n, "beforeunload", function () {
					t()
				}),
				g
			}
			();
			e.nameStorage = n
		}, function (t, e, n) {
			"use strict";
			var o = n(38);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					updateBasicParams: function () {
						var t = this.options.context.what_to_sendpv.pvdata || [],
						e = this.options.context.etag || {};
						return e.cna && (o.updateKey(t, "cna", e.cna), this.options.context.what_to_sendpv.pvdata = t),
						t
					},
					addTagParams: function () {
						var t = this.options.context.what_to_sendpv.pvdata || [],
						e = this.options.context.etag || {},
						n = [];
						(e.tag || 0 === e.tag) && n.push(["tag", e.tag]),
						(e.stag || 0 === e.stag) && n.push(["stag", e.stag]),
						(e.lstag || 0 === e.lstag) && n.push(["lstag", e.lstag]),
						n.length > 0 && (this.options.context.what_to_sendpv.pvdata = t.concat(n))
					},
					run: function () {
						this.updateBasicParams(),
						this.addTagParams()
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(35),
			a = n(32),
			r = function (t) {
				t || (t = window.navigator.userAgent);
				var e = goldlog.getMetaInfo("aplus-toUT") + "",
				n = a.isAplusChnl(),
				r = o.webviewIsAbove({
						version_ios_tb: [6, 6, 0],
						version_ios_tm: [5, 28, 0],
						version_android_tb: [6, 6, 2],
						version_android_tm: [5, 32, 0]
					}, t);
				return r || (r = goldlog.isUT4Aplus || "2" === e),
				n && "AliBCBridge" !== n.bridgeName && (r = !!n.toUT2),
				r
			};
			e.isToUT2 = r,
			e.isEnable = function (t, e) {
				var n = r(e),
				o = !0;
				switch (t) {
				case "what_to_hjlj_ut2":
				case "do_sendhjlj_ut2":
				case "what_to_sendpv_ut2":
				case "do_sendpv_ut2":
					o = !!n;
					break;
				case "what_to_hjlj_ut":
				case "do_sendhjlj_ut":
				case "what_to_sendpv_ut":
				case "do_sendpv_ut":
					o = !n
				}
				return o
			}
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				var e,
				n,
				o,
				a,
				r = [],
				s = {};
				for (e = t.length - 1; e >= 0; e--)
					n = t[e], o = n[0], o && o.indexOf(i.s_plain_obj) == -1 && s.hasOwnProperty(o) || (a = n[1], ("aplus" == o || a) && (r.unshift([o, a]), s[o] = 1));
				return r
			}
			function a(t) {
				var e,
				n,
				o,
				a,
				r = [],
				u = {
					logtype: !0,
					cache: !0,
					scr: !0,
					"spm-cnt": !0
				};
				for (e = t.length - 1; e >= 0; e--)
					if (n = t[e], o = n[0], a = n[1], !(s.isStartWith(o, i.s_plain_obj) && !s.isStartWith(o, i.mkPlainKeyForExparams()) || u[o]))
						if (s.isStartWith(o, i.mkPlainKeyForExparams())) {
							var c = i.param2arr(a);
							if ("object" == typeof c && c.length > 0)
								for (var l = c.length - 1; l >= 0; l--) {
									var p = c[l];
									p && p[1] && r.unshift([p[0], p[1]])
								}
						} else
							r.unshift([o, a]);
				return r
			}
			function r() {
				var t = {
					isonepage: "-1",
					urlpagename: ""
				},
				e = p.qGet();
				if (e && e.hasOwnProperty("isonepage_data"))
					t.isonepage = e.isonepage_data.isonepage, t.urlpagename = e.isonepage_data.urlpagename;
				else {
					var n = c.getMetaCnt("isonepage") || "-1",
					o = n.split("|");
					t.isonepage = o[0],
					t.urlpagename = o[1] ? o[1] : ""
				}
				return t
			}
			var i = n(15),
			s = n(8),
			u = n(23),
			c = n(29),
			l = n(42),
			p = n(28),
			g = n(3),
			f = n(9);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					keyIsAvailable: function (t) {
						var e = ["functype", "funcId", "spm-cnt", "spm-url", "spm-pre", "_ish5", "_is_g2u", "_h5url", "cna", "isonepage", "lver", "jsver"];
						return i.indexof(e, t) === -1
					},
					valIsAvailable: function (t) {
						return "object" != typeof t && "function" != typeof t
					},
					upUtData: function (t, e) {
						var n = this;
						if (t = t ? t : {}, e && "object" == typeof e)
							for (var o in e) {
								var a = e[o];
								o && n.valIsAvailable(a) && n.keyIsAvailable(o) && (t[o] = a)
							}
						return t
					},
					getToUtData: function (t) {
						var e = u.getGoldlogVal("_$") || {},
						n = e.spm || {},
						s = this.options.context || {},
						c = s.what_to_sendpv || {},
						p = a(o(c.exparams || []));
						p = i.arr2obj(p);
						var d = i.arr2obj(c.pvdata),
						_ = a(o(s.userdata || []));
						_ = i.arr2obj(_);
						var h = location.href,
						m = {};
						m.scm = l.getParamFromUrl("scm", h) || "",
						m.pg1stepk = l.getParamFromUrl("pg1stepk", h) || "";
						var v = l.getParamFromUrl("point", h) || "";
						v && (m.issb = 1),
						d && d.mansndlog && (m.mansndlog = d.mansndlog),
						m = this.upUtData(m, p),
						m = this.upUtData(m, _);
						var b = r();
						return m.functype = "page",
						m.funcId = "2001",
						m.url = location.origin + location.pathname,
						m._ish5 = "1",
						m._h5url = h,
						m._toUT = 2,
						m._bridgeName = t.bridgeName || "",
						m["spm-cnt"] = n.spm_cnt || "",
						m["spm-url"] = n.spm_url || "",
						m["spm-pre"] = n.spm_pre || "",
						m.cna = f.getCookie("cna"),
						m.lver = goldlog.lver || g.lver,
						m.jsver = g.script_name,
						m.pver = goldlog.aplus_cplugin_ver,
						m.isonepage = b.isonepage,
						m
					},
					run: function () {
						var t = this.options.context || {},
						e = t.what_to_sendpv_ut2 || {},
						n = t.where_to_sendlog_ut || {},
						o = n.aplusToUT || {},
						a = o.toUT2 || {};
						(a && a.isAvailable && "function" == typeof a.toUT2 || goldlog.isUT4Aplus) && (e.pvdataToUt = this.getToUtData(a), this.options.context.what_to_sendpv_ut2 = e)
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				var e,
				n,
				o,
				a,
				i = [],
				s = {};
				for (e = t.length - 1; e >= 0; e--)
					n = t[e], o = n[0], o && o.indexOf(r.s_plain_obj) == -1 && s.hasOwnProperty(o) || (a = n[1], ("aplus" == o || a) && (i.unshift([o, a]), s[o] = 1));
				return i
			}
			function a(t) {
				var e,
				n,
				o,
				a,
				s = [],
				u = {
					logtype: !0,
					cache: !0,
					scr: !0,
					"spm-cnt": !0
				};
				for (e = t.length - 1; e >= 0; e--)
					if (n = t[e], o = n[0], a = n[1], !(i.isStartWith(o, r.s_plain_obj) && !i.isStartWith(o, r.mkPlainKeyForExparams()) || u[o]))
						if (i.isStartWith(o, r.mkPlainKeyForExparams())) {
							var c = r.param2arr(a);
							if ("object" == typeof c && c.length > 0)
								for (var l = c.length - 1; l >= 0; l--) {
									var p = c[l];
									p && p[1] && s.unshift([p[0], p[1]])
								}
						} else
							s.unshift([o, a]);
				return s
			}
			var r = n(15),
			i = n(8),
			s = n(23),
			u = n(29),
			c = n(28),
			l = n(3),
			p = n(9);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getToUtData: function (t, e) {
						var n,
						i = s.getGoldlogVal("_$") || {},
						g = i.spm || {},
						f = a(o(t)),
						d = {};
						try {
							var _ = r.arr2obj(f);
							_._toUT = 1,
							_._bridgeName = e.bridgeName || "",
							n = JSON.stringify(_)
						} catch (t) {
							n = '{"_toUT":1}'
						}
						var h = u.getOnePageInfo(c);
						return d.functype = "2001",
						d.urlpagename = h.urlpagename,
						d.url = location.href,
						d.spmcnt = g.spm_cnt || "",
						d.spmpre = g.spm_pre || "",
						d.lzsid = "",
						d.cna = p.getCookie("cna"),
						d.extendargs = n,
						d.isonepage = h.isonepage,
						d.version = l.toUtVersion,
						d.lver = goldlog.lver || l.lver,
						d.jsver = l.script_name,
						d
					},
					run: function () {
						var t = this.options.context || {},
						e = t.what_to_sendpv || {},
						n = e.pvdata || [],
						o = t.what_to_sendpv_ut || {},
						a = t.where_to_sendlog_ut || {},
						r = a.aplusToUT || {},
						i = r.toUT || {};
						i && i.isAvailable && "function" == typeof i.toUT2 && (o.pvdataToUt = this.getToUtData(n, i), this.options.context.what_to_sendpv_ut = o)
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = this.options.context || {},
						e = t.is_single ? "1" : "0",
						n = t.where_to_sendlog_ut || {},
						o = n.aplusToUT || {},
						a = o.toUT2 || {},
						r = o.toUT || {};
						a && a.isAvailable && "function" == typeof a.toUT2 && (t.what_to_sendpv_ut2.pvdataToUt._slog = e),
						r && r.isAvailable && "function" == typeof r.toUT2 && (t.what_to_sendpv_ut.pvdataToUt._slog = e),
						t.what_to_sendpv.pvdata.push(["_slog", e])
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = o.getGoldlogVal("_$") || {},
						e = this.options.context.can_to_sendpv || {},
						n = t.send_pv_count || 0,
						a = this.options.config || {};
						return a.is_auto && n > 0 ? "done" : (e.flag = "YES", this.options.context.can_to_sendpv = e, t.send_pv_count = ++n, void o.setGoldlogVal("_$", t))
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(52)();
			t.exports = function () {
				return o.assign(a, {
					getGifPath: function (t) {
						var e = t.match(/\/\w+\.gif/) || "",
						n = e ? e[0] : "/m.gif",
						a = o.is_in_iframe,
						r = this.getMetaInfo() || {},
						i = r["aplus-ifr-pv"] + "" == "1";
						return a && !i ? "/y.gif" : n
					},
					run: function () {
						var t = !!this.options.context.is_single;
						if (!t) {
							var e = this.getAplusMetaByKey("aplus-rhost-v"),
							n = this.options.context.where_to_sendpv || {},
							a = n.url || "",
							r = this.getGifPath(a),
							i = o.getPvUrl({
									metaName: "aplus-rhost-v",
									metaValue: e,
									gifPath: r,
									url: o.filterIntUrl(a)
								});
							n.url = i,
							this.options.context.where_to_sendpv = n
						}
					}
				})
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(23),
			r = n(28);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getMetaInfo: function () {
						var t = a.getGoldlogVal("_$") || {},
						e = t.meta_info || r.getInfo();
						return e
					},
					getAplusMetaByKey: function (t) {
						var e = this.getMetaInfo() || {};
						return e[t]
					},
					getGifPath: function (t, e) {
						var n,
						r = a.getGoldlogVal("_$") || {};
						if ("function" == typeof t)
							n = t(location.hostname, r.is_terminal, o.is_in_iframe) + ".gif";
						else if (!n && e) {
							var i = e.match(/\/\w+\.gif/);
							i && i.length > 0 && (n = i[0])
						}
						return n || (n = r.is_terminal ? "m.gif" : "v.gif"),
						n
					},
					run: function () {
						var t = !!this.options.context.is_single;
						if (!t) {
							var e = this.getAplusMetaByKey("aplus-rhost-v"),
							n = this.options.context.where_to_sendpv || {},
							a = n.url || "",
							r = this.getGifPath(n.urlRule, a),
							i = o.getPvUrl({
									metaName: "aplus-rhost-v",
									metaValue: e,
									gifPath: r,
									url: o.filterIntUrl(a)
								});
							n.url = i,
							this.options.context.where_to_sendpv = n
						}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23),
			a = n(15);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = this.options.context || {},
						e = !!t.is_single;
						if (!e) {
							var n = t.what_to_sendpv || {},
							r = t.where_to_sendpv || {},
							i = n.pvdata || [],
							s = goldlog.send(r.url, a.arr2obj(i));
							o.setGoldlogVal("req", s)
						}
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function (t, e) {
						var n = this,
						o = this.options.context || {},
						a = o.what_to_sendpv_ut2 || {},
						r = o.where_to_sendlog_ut || {},
						i = a.pvdataToUt || {},
						s = r.aplusToUT || {},
						u = s.toUT2;
						if (goldlog.isUT4Aplus && "UT4Aplus" === goldlog.getMetaInfo("aplus-toUT"))
							return s.toutflag = "toUT2", void(n.options.context.what_to_sendpv_ut2.isSuccess = !0);
						if (u && "function" == typeof u.toUT2 && u.isAvailable)
							try {
								s.toutflag = "toUT2",
								u.toUT2(i, function () {
									n.options.context.what_to_sendpv_ut2.isSuccess = !0,
									e("done")
								}, function (t) {
									n.options.context.what_to_sendpv_ut2.errorMsg = t,
									e()
								}, 2e3)
							} catch (t) {
								e()
							}
						finally {
							return "pause"
						}
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function (t, e) {
						var n = this,
						o = this.options.context || {},
						a = o.what_to_sendpv_ut || {},
						r = o.where_to_sendlog_ut || {},
						i = a.pvdataToUt || {},
						s = r.aplusToUT || {},
						u = s.toUT;
						if (goldlog.isUT4Aplus && "UT4Aplus" === goldlog.getMetaInfo("aplus-toUT"))
							return s.toutflag = "toUT", void(n.options.context.what_to_sendpv_ut.isSuccess = !0);
						if (u && "function" == typeof u.toUT2 && u.isAvailable)
							try {
								s.toutflag = "toUT",
								u.toUT2(i, function () {
									n.options.context.what_to_sendpv_ut.isSuccess = !0,
									e()
								}, function (t) {
									n.options.context.what_to_sendpv_ut.errorMsg = t,
									e()
								}, 2e3)
							} catch (t) {
								e()
							}
						finally {
							return "pause"
						}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(57),
			a = n(23);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = goldlog._$ || {},
						e = this.options.context || {};
						a.setGoldlogVal("pv_context", e);
						var n = goldlog.spm_ab || [],
						r = n.join("."),
						i = t.send_pv_count,
						s = {
							cna: e.etag.cna,
							count: i,
							spmab_pre: goldlog.spmab_pre
						};
						o.doPubMsg(["sendPV", "complete", r, s]),
						o.doCachePubs(["sendPV", "complete", r, s])
					}
				}
			}
		}, function (t, e) {
			"use strict";
			var n = function () {
				var t = window.goldlog || {},
				e = t.aplus_pubsub || {},
				n = "function" == typeof e.publish;
				return n ? e : ""
			};
			e.doPubMsg = function (t) {
				var e = n();
				e && e.publish.apply(e, t)
			},
			e.doCachePubs = function (t) {
				var e = n();
				e && "function" == typeof e.cachePubs && e.cachePubs.apply(e, t)
			},
			e.doSubMsg = function (t, e) {
				var o = n();
				o && "function" == typeof o.subscribe && o.subscribe(t, e)
			}
		}, function (t, e) {
			"use strict";
			e.plugins_prepv = []
		}, function (t, e, n) {
			"use strict";
			function o() {
				return {
					where_to_hjlj: {
						url: "//wgo.mmstat.com/",
						ac_atpanel: "//ac.mmstat.com/",
						tblogUrl: "//log.mmstat.com/"
					},
					where_to_sendlog_ut: {
						aplusToUT: {},
						toUTName: "toUT2"
					}
				}
			}
			function a() {
				return r.assign(new i, new o)
			}
			var r = n(8),
			i = n(60);
			t.exports = a
		}, function (t, e, n) {
			"use strict";
			function o() {
				return {
					compose: {},
					basic_params: {
						cna: a.getCookie("cna")
					},
					where_to_hjlj: {
						url: "//gm.mmstat.com/",
						ac_atpanel: "//ac.mmstat.com/",
						tblogUrl: "//log.mmstat.com/"
					},
					userdata: {},
					what_to_hjlj: {
						logdata: {}
					},
					what_to_pvhash: {
						hash: []
					},
					what_to_hjlj_exinfo: {
						EXPARAMS_FLAG: "EXPARAMS",
						exinfo: [],
						exparams_key_names: ["uidaplus", "pc_i", "pu_i"]
					},
					what_to_hjlj_ut: {
						logdataToUT: {}
					},
					what_to_hjlj_ut2: {
						isSuccess: !1,
						logdataToUT: {}
					},
					where_to_sendlog_ut: {
						aplusToUT: {},
						toUTName: "toUT"
					},
					network: {
						connType: "UNKNOWN"
					},
					is_single: !1
				}
			}
			var a = n(9);
			t.exports = o
		}, function (t, e, n) {
			"use strict";
			e.plugins_hjlj = [{
					name: "where_to_sendlog_ut",
					enable: !0,
					path: n(31)
				}, {
					name: "is_single",
					enable: !0,
					path: n(33)
				}, {
					name: "what_to_hjlj_exinfo",
					enable: !0,
					path: n(62)
				}, {
					name: "what_to_pvhash",
					enable: !0,
					path: n(36)
				}, {
					name: "what_to_hjlj",
					enable: !0,
					path: n(63),
					deps: ["what_to_hjlj_exinfo", "what_to_pvhash"]
				}, {
					name: "what_to_hjlj_ut2",
					enable: n(46),
					path: n(64),
					deps: ["is_single", "what_to_hjlj_exinfo"]
				}, {
					name: "what_to_hjlj_ut",
					enable: n(46),
					path: n(65),
					deps: ["is_single", "what_to_hjlj_exinfo"]
				}, {
					name: "what_to_hjlj_slog",
					enable: !0,
					path: n(66),
					deps: ["what_to_hjlj"]
				}, {
					name: "where_to_hjlj",
					enable: !0,
					path: n(67),
					deps: ["is_single", "what_to_hjlj"]
				}, {
					name: "do_sendhjlj",
					enable: !0,
					path: n(68),
					deps: ["is_single", "what_to_hjlj", "where_to_hjlj"]
				}, {
					name: "do_sendhjlj_ut2",
					enable: n(46),
					path: n(69),
					deps: ["what_to_hjlj", "what_to_hjlj_ut2", "where_to_sendlog_ut"]
				}, {
					name: "do_sendhjlj_ut",
					enable: n(46),
					path: n(70),
					deps: ["what_to_hjlj", "what_to_hjlj_ut", "where_to_sendlog_ut"]
				}
			]
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(22),
			r = n(23),
			i = n(23),
			s = n(21),
			u = n(9);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getCookieUserInfo: function () {
						var t = [],
						e = u.getCookie("workno") || u.getCookie("emplId");
						e && t.push("workno=" + e);
						var n = u.getHng();
						return n && t.push("_hng=" + u.getHng()),
						t
					},
					filterExinfo: function (t) {
						var e = "";
						try {
							t && ("string" == typeof t ? e = t.replace(/&amp;/g, "&").replace(/\buserid=/, "uidaplus=").replace(/&aplus&/, "&") : "object" == typeof t && (e = o.obj2param(t, !0)))
						} catch (t) {
							e = t.message ? t.message : ""
						}
						return e
					},
					getExparamsFlag: function () {
						var t = this.options.context || {},
						e = t.what_to_hjlj_exinfo || {};
						return e.EXPARAMS_FLAG || "EXPARAMS"
					},
					getCustomExParams: function (t) {
						var e = "";
						return t !== this.getExparamsFlag() && (e = this.filterExinfo(t) || ""),
						e ? e.split("&") : []
					},
					getBeaconExparams: function (t, e) {
						var n = [],
						r = a.getExParams(o) || "";
						r = r.replace(/&aplus&/, "&");
						for (var i = o.param2arr(r) || [], u = function (e) {
							return s.indexof(t, e) > -1
						}, c = 0; c < i.length; c++) {
							var l = i[c],
							p = l[0] || "",
							g = l[1] || "";
							p && g && (e === this.getExparamsFlag() || u(p)) && n.push(p + "=" + g)
						}
						return n
					},
					getExinfo: function (t) {
						var e = this.options.context || {},
						n = e.what_to_hjlj_exinfo || {},
						o = n.exparams_key_names || [],
						a = this.getBeaconExparams(o, t);
						return a
					},
					getExData: function (t) {
						var e = [];
						if ("object" == typeof t)
							for (var n in t) {
								var o = t[n];
								n && o && "object" != typeof o && "function" != typeof o && e.push(n + "=" + o)
							}
						return e
					},
					doConcatArr: function (t, e) {
						return e && e.length > 0 && (t = t.concat(e)),
						t
					},
					run: function () {
						try {
							var t = this.options.context.what_to_hjlj_exinfo || {},
							e = r.getGoldlogVal("_$") || {},
							n = e.meta_info || {},
							o = n["aplus-exinfo"] || "",
							a = n["aplus-exdata"] || "",
							s = [];
							s = this.doConcatArr(s, t.exinfo || []),
							s = this.doConcatArr(s, this.getExinfo(o)),
							s = this.doConcatArr(s, this.getCookieUserInfo()),
							s = this.doConcatArr(s, this.getCustomExParams(o)),
							s = this.doConcatArr(s, this.getExData(a)),
							t.exinfo = s.join("&"),
							this.options.context.what_to_hjlj_exinfo = t
						} catch (t) {
							i.logger({
								msg: t ? t.message : ""
							})
						}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(22),
			a = n(15),
			r = n(8);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getParams: function () {
						var t = this.options.context || {},
						e = t.userdata || {},
						n = t.basic_params || {},
						i = t.what_to_hjlj_exinfo || {},
						s = i.exinfo || "";
						e.gokey && s && 0 !== s.indexOf("&") && (s = "&" + s);
						var u = n.cna,
						c = e.gmkey,
						l = e.gokey || "";
						l += s;
						var p = t.what_to_pvhash || {},
						g = p.hash || [];
						g.length && (l += "&" + g.join("="));
						var f = {
							cache: r.makeCacheNum(),
							gmkey: c,
							gokey: l,
							cna: u
						};
						e["spm-cnt"] && (f["spm-cnt"] = e["spm-cnt"]),
						e["spm-pre"] && (f["spm-pre"] = e["spm-pre"]);
						try {
							var d = o.getExParams(a),
							_ = a.param2obj(d).uidaplus;
							_ && (f._gr_uid_ = _)
						} catch (t) {}
						return f
					},
					run: function () {
						this.options.context.what_to_hjlj.logdata = this.getParams()
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(34),
			a = n(23),
			r = n(3);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getToUtData: function (t, e) {
						var n = a.getGoldlogVal("_$") || {},
						i = n.spm || {},
						s = this.options.context.userdata || {},
						u = this.options.context.basic_params || {},
						c = this.options.context || {},
						l = c.what_to_hjlj_exinfo || {},
						p = l.exinfo || "";
						s.gokey && p && 0 !== p.indexOf("&") && (p = "&" + p);
						var g = s.gokey + p,
						f = {};
						return f.functype = "ctrl",
						f.funcId = o.getFunctypeValue2({
								logkey: s.logkey,
								gmkey: s.gmkey,
								spm_ab: a.getGoldlogVal("spm_ab")
							}),
						f.url = location.origin + location.pathname,
						f.logkey = s.logkey,
						f.gokey = encodeURIComponent(g),
						f.gmkey = s.gmkey,
						f._ish5 = "1",
						f._h5url = location.href,
						t && (f._is_g2u_ = 1),
						f._toUT = 2,
						f._bridgeName = e.bridgeName || "",
						f["spm-cnt"] = i.spm_cnt || "",
						f["spm-url"] = i.spm_url || "",
						f["spm-pre"] = i.spm_pre || "",
						f.cna = u.cna,
						f.lver = r.lver,
						f.jsver = r.script_name,
						s.hasOwnProperty("autosend") && (f.autosend = s.autosend),
						f
					},
					run: function () {
						var t = this.options.context || {},
						e = t.what_to_hjlj_ut2 || {},
						n = !!t.is_single,
						o = t.where_to_sendlog_ut || {},
						a = o.aplusToUT || {},
						r = a.toUT2 || {};
						e.logdataToUT = this.getToUtData(n, r),
						this.options.context.what_to_hjlj_ut2 = e
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(34),
			a = n(9),
			r = n(23),
			i = n(3);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getToUtData: function (t, e) {
						var n = r.getGoldlogVal("_$") || {},
						s = n.spm || {},
						u = this.options.context || {},
						c = u.userdata || {},
						l = u.what_to_hjlj_exinfo || {},
						p = l.exinfo || "";
						c.gokey && p && 0 !== p.indexOf("&") && (p = "&" + p);
						var g = c.gokey + p,
						f = {
							gmkey: c.gmkey,
							gokey: g,
							lver: i.lver,
							jsver: i.script_name,
							version: i.toUtVersion,
							spm_cnt: s.spm_cnt || "",
							spm_url: s.spm_url || "",
							spm_pre: s.spm_pre || ""
						};
						t && (f._is_g2u_ = 1),
						f._bridgeName = e.bridgeName || "",
						f._toUT = 1;
						try {
							f = JSON.stringify(f),
							"{}" == f && (f = "")
						} catch (t) {
							f = ""
						}
						var d = n.meta_info || {},
						_ = d.isonepage_data || {},
						h = {};
						return h.functype = o.getFunctypeValue({
								logkey: c.logkey,
								gmkey: c.gmkey,
								spm_ab: r.getGoldlogVal("spm_ab")
							}),
						h.spmcnt = s.spm_cnt || "",
						h.spmurl = s.spm_url || "",
						h.spmpre = s.spm_pre || "",
						h.logkey = c.logkey,
						h.logkeyargs = f,
						h.urlpagename = _.urlpagename,
						h.url = location.href,
						h.cna = a.getCookie("cna") || "",
						h.extendargs = "",
						h.isonepage = _.isonepage,
						h
					},
					run: function () {
						var t = this.options.context || {},
						e = !!t.is_single,
						n = t.what_to_hjlj_ut || {},
						o = t.where_to_sendlog_ut || {},
						a = o.aplusToUT || {},
						r = a.toUT || {};
						n.logdataToUT = this.getToUtData(e, r),
						this.options.context.what_to_hjlj_ut = n
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = this.options.context || {},
						e = t.is_single ? "1" : "0",
						n = t.where_to_sendlog_ut || {},
						o = n.aplusToUT || {},
						a = o.toUT2 || {},
						r = o.toUT || {};
						a && a.isAvailable && "function" == typeof a.toUT2 && (t.what_to_hjlj_ut2.logdataToUT._slog = e),
						r && r.isAvailable && "function" == typeof r.toUT2 && (t.what_to_hjlj_ut.logdataToUT._slog = e),
						t.what_to_hjlj.logdata.gokey ? t.what_to_hjlj.logdata.gokey += "&_slog=" + e : t.what_to_hjlj.logdata.gokey = "_slog=" + e
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(8),
			r = n(23),
			i = n(20),
			s = n(28);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					getMetaInfo: function () {
						var t = r.getGoldlogVal("_$") || {},
						e = t.meta_info || s.getInfo();
						return e
					},
					getAplusMetaByKey: function (t) {
						var e = this.getMetaInfo() || {};
						return e[t]
					},
					cramUrl: function (t) {
						var e = r.getGoldlogVal("_$") || {},
						n = e.spm || {},
						o = this.options.context.where_to_hjlj || {},
						i = o.ac_atpanel,
						s = o.tblogUrl,
						u = this.options.context.what_to_hjlj || {},
						c = this.options.context.userdata || {},
						l = !0,
						p = c.logkey;
						if (!p)
							return {
								url: t,
								logkey_available: !1
							};
						if ("ac" == p)
							t = i + "1.gif";
						else if (a.isStartWith(p, "ac-"))
							t = i + p.substr(3);
						else if (a.isStartWith(p, "/")) {
							t += p.substr(1);
							var g = u.logdata || {};
							g["spm-cnt"] = n.spm_cnt,
							g.logtype = 2;
							try {
								u.logdata = g,
								this.options.context.what_to_hjlj = u
							} catch (t) {}
						} else
							a.isEndWith(p, ".gif") ? t = s + p : l = !1;
						return {
							url: t,
							logkey_available: l
						}
					},
					can_to_sendhjlj: function (t) {
						var e = this.options.context || {},
						n = e.logger || function () {},
						o = this.options.context.userdata || {};
						return !!t.logkey_available || (n({
								msg: "logkey: " + o.logkey + " is not legal!"
							}), !1)
					},
					run: function () {
						var t = !!this.options.context.is_single;
						if (!t) {
							var e,
							n,
							a = o.filterIntUrl(this.options.context.where_to_hjlj.url),
							r = this.getAplusMetaByKey("aplus-rhost-g"),
							s = r && o.hostValidity(r);
							s && (e = /^\/\//.test(r) ? "" : "//", n = /\/$/.test(r) ? "" : "/", a = e + r + n),
							r && !s && i.logger({
								msg: "aplus-rhost-g: " + r + ' is invalid, suggestion: "xxx.mmstat.com"'
							});
							var u = this.cramUrl(a);
							return this.can_to_sendhjlj(u) ? void(this.options.context.where_to_hjlj.url = u.url) : "done"
						}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(23);
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function () {
						var t = this.options.context || {},
						e = this.options.config || {},
						n = !!t.is_single;
						if (!n) {
							var a = t.logger || {},
							r = t.what_to_hjlj || {},
							i = t.where_to_hjlj || {},
							s = r.logdata || {},
							u = i.url || "";
							u || "function" != typeof a || a({
								msg: "warning: where_to_hjlj.url is null, goldlog.record failed!"
							});
							var c = goldlog.send(i.url, s, e.method || "GET");
							o.setGoldlogVal("req", c)
						}
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function (t, e) {
						var n = this,
						o = this.options.context || {},
						a = o.logger || function () {},
						r = o.what_to_hjlj_ut2 || {},
						i = o.where_to_sendlog_ut || {},
						s = !!o.is_single,
						u = r.logdataToUT || {},
						c = i.aplusToUT || {},
						l = c.toUT2;
						if (goldlog.isUT4Aplus && "UT4Aplus" === goldlog.getMetaInfo("aplus-toUT"))
							return c.toutflag = "toUT2", void(n.options.context.what_to_hjlj_ut2.isSuccess = !0);
						if (l && "function" == typeof l.toUT2 && l.isAvailable)
							try {
								c.toutflag = "toUT2",
								l.toUT2(u, function () {
									n.options.context.what_to_hjlj_ut2.isSuccess = !0,
									e()
								}, function (t) {
									n.options.context.what_to_hjlj_ut2.errorMsg = t,
									e()
								}, 2e3)
							} catch (t) {
								s && a({
									msg: "warning: singleSendHjlj toUTName = toUT2 errorMsg:" + t.message
								})
							}
						finally {
							return "pause"
						}
					}
				}
			}
		}, function (t, e) {
			"use strict";
			t.exports = function () {
				return {
					init: function (t) {
						this.options = t
					},
					run: function (t, e) {
						var n = this,
						o = this.options.context || {},
						a = o.what_to_hjlj_ut2.isSuccess,
						r = o.logger || function () {},
						i = !!o.is_single,
						s = o.where_to_sendlog_ut || {},
						u = o.what_to_hjlj_ut || {},
						c = u.logdataToUT || {},
						l = s.aplusToUT || {},
						p = l.toUT;
						if (goldlog.isUT4Aplus && "UT4Aplus" === goldlog.getMetaInfo("aplus-toUT"))
							return l.toutflag = "toUT", void(n.options.context.what_to_hjlj_ut.isSuccess = !0);
						if (!a && p && "function" == typeof p.toUT2 && p.isAvailable)
							try {
								l.toutflag = "toUT",
								p.toUT2(c, function () {
									n.options.context.what_to_hjlj_ut.isSuccess = !0,
									e()
								}, function (t) {
									n.options.context.what_to_hjlj_ut.errorMsg = t,
									e()
								}, 3e3)
							} catch (t) {
								i && r({
									msg: "warning: singleSend toUTName = " + s.toUTName + " errorMsg:" + t.message
								})
							}
						finally {
							return "pause"
						}
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o() {
				var t,
				e,
				n = i.KEY || {},
				o = n.NAME_STORAGE || {};
				if (!c && u) {
					var a = location.href,
					l = u && (a.indexOf("login.taobao.com") >= 0 || a.indexOf("login.tmall.com") >= 0),
					p = s.getRefer();
					l && p ? (t = p, e = r.getItem(o.REFERRER_PV_ID)) : (t = a, e = goldlog.pvid),
					r.setItem(o.REFERRER, t),
					r.setItem(o.REFERRER_PV_ID, e)
				}
			}
			var a = n(72),
			r = n(44).nameStorage,
			i = n(3),
			s = n(43),
			u = "https:" == location.protocol,
			c = parent !== self;
			e.run = function () {
				a.on(window, "beforeunload", function () {
					o()
				})
			}
		}, function (t, e) {
			"use strict";
			function n(t, e) {
				var n = goldlog._$ || {},
				o = n.meta_info || {},
				a = o.aplus_ctap || {};
				if (a && "function" == typeof a.on)
					a.on(t, e);
				else {
					var r = "ontouchend" in document.createElement("div"),
					i = r ? "touchstart" : "mousedown";
					s(t, i, e)
				}
			}
			function o(t) {
				try {
					c.documentElement.doScroll("left")
				} catch (e) {
					return void setTimeout(function () {
						o(t)
					}, 1)
				}
				t()
			}
			function a(t) {
				var e = 0,
				n = function () {
					0 === e && t(),
					e++
				};
				"complete" === c.readyState && n();
				var a;
				if (c.addEventListener)
					a = function () {
						c.removeEventListener("DOMContentLoaded", a, !1),
						n()
					},
				c.addEventListener("DOMContentLoaded", a, !1),
				window.addEventListener("load", n, !1);
				else if (c.attachEvent) {
					a = function () {
						"complete" === c.readyState && (c.detachEvent("onreadystatechange", a), n())
					},
					c.attachEvent("onreadystatechange", a),
					window.attachEvent("onload", n);
					var r = !1;
					try {
						r = null === window.frameElement
					} catch (t) {}
					c.documentElement.doScroll && r && o(n)
				}
			}
			function r(t) {
				"complete" === c.readyState ? t() : s(u, "load", t)
			}
			function i(t) {
				if (!/touch|mouse|scroll|wheel/i.test(t))
					return !1;
				var e = !1;
				try {
					var n = Object.defineProperty({}, "passive", {
							get: function () {
								e = !0
							}
						});
					u.addEventListener("test", null, n)
				} catch (t) {}
				return e
			}
			function s() {
				var t = arguments;
				if (2 === t.length)
					"DOMReady" === t[0] && a(t[1]), "onload" === t[0] && r(t[1]);
				else if (3 === t.length) {
					var e = t[0],
					o = t[1],
					s = t[2];
					"tap" === o ? n(e, s) : e[f]((l ? "on" : "") + o, function (t) {
						t = t || u.event;
						var e = t.target || t.srcElement;
						"function" == typeof s && s(t, e)
					}, !!i(o) && {
						passive: !0
					})
				}
			}
			var u = window,
			c = document,
			l = !!c.attachEvent,
			p = "attachEvent",
			g = "addEventListener",
			f = l ? p : g;
			e.DOMReady = a,
			e.onload = r,
			e.on = s
		}, function (t, e, n) {
			"use strict";
			function o() {
				var t = goldlog._$ || {},
				e = document.getElementById("aplus-sufei"),
				n = goldlog.getCdnPath() + "/secdev/sufei_data/3.4.1/index.js";
				r.onload(function () {
					try {
						var o = t.meta_info,
						r = o["aplus-xplug"];
						"NONE" !== r && setTimeout(function () {
							e && "script" === e.tagName.toLowerCase() || a.addScript(n, "", "aplus-sufei")
						}, 10)
					} catch (t) {}
				})
			}
			var a = n(22),
			r = n(72),
			i = n(74);
			e.run = function () {
				o()
			},
			e.init_watchGoldlogQueue = i.init_watchGoldlogQueue
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				for (var e = [], n = [], o = [], a = [], r = [], i = [], s = {}; s = t.shift(); )
					try {
						var u = s.action,
						c = s.arguments[0];
						/subscribe/.test(u) ? "setMetaInfo" === c ? n.push(s) : "mw_change_pv" === c || "mw_change_hjlj" === c ? e.push(s) : o.push(s) : /MetaInfo/.test(u) ? a.push(s) : r.push(s)
					} catch (t) {
						r.push(s),
						l.do_tracker_jserror({
							message: t && t.message,
							error: encodeURIComponent(t.stack),
							filename: "sortQueue"
						})
					}
				return i = e.concat(a),
				i = i.concat(o),
				i = i.concat(n, r)
			}
			var a = window,
			r = n(8),
			i = n(75),
			s = n(20),
			u = n(76),
			c = n(77),
			l = n(78),
			p = s.isDebugAplus();
			e.init_aplusQueue = function () {
				var t,
				e = "_ap",
				n = a[e] = a[e] || [];
				n.push = t = function () {
					var t = "0.0";
					window.goldlog && window.goldlog.spm_ab && (t = window.goldlog.spm_ab.join(".")),
					l.do_tracker_obsolete_inter({
						ratio: p ? 1 : .01,
						page: location.hostname + location.pathname,
						spm_ab: t,
						interface_name: "win._ap",
						interface_params: JSON.stringify(arguments)
					});
					for (var e, o, a = 0, s = arguments.length; a < s; a++)
						e = arguments[a], r.isString(e) ? goldlog.send(i.hjlj() + e) : r.isArray(e) && "push" != (o = e[0]) && (n[o] = n[o] || []).push(e.slice(1))
				};
				for (var o; o = n.shift(); )
					t(o)
			};
			var g = "goldlog_queue",
			f = function (t, e, n) {
				try {
					/_aplus_cplugin_track_deb/.test(t) || /_aplus_cplugin_m/.test(t) || l.do_tracker_jserror({
						message: n || 'illegal task: goldlog_queue.push("' + JSON.stringify(e) + '")',
						error: JSON.stringify(e),
						filename: "processTask"
					})
				} catch (t) {}
			},
			d = function (t, e) {
				var n = t ? t.action : "",
				o = t ? t.arguments : "";
				try {
					if (n && o && r.isArray(o)) {
						var i = n.split("."),
						s = a,
						u = a;
						if (3 === i.length)
							s = a[i[0]][i[1]] || {},
						u = s[i[2]] ? s[i[2]] : "";
						else
							for (; i.length; )
								if (u = s = s[i.shift()], !s)
									return void("function" == typeof e ? e(t) : f(n, t));
						"function" == typeof u && u.apply(s, o)
					} else
						f(n, t)
				} catch (e) {
					f(n, t, e.message)
				}
			},
			_ = function (t) {
				function e() {
					if (t && r.isArray(t) && t.length) {
						for (var e = o(t), n = {}, a = []; n = e.shift(); )
							d(n, function (t) {
								a.push(t)
							});
						a.length > 0 && setTimeout(function () {
							for (; n = a.shift(); )
								d(n)
						}, 100)
					}
				}
				try {
					e()
				} catch (t) {
					l.do_tracker_jserror({
						message: t && t.message,
						error: encodeURIComponent(t.stack),
						filename: "processGoldlogQueue"
					})
				}
			};
			e.processGoldlogQueue = _;
			var h = u.extend({
					push: function (t) {
						this.length++,
						d(t)
					}
				});
			e.init_watchGoldlogQueue = function () {
				c.init_loadAplusPlugin();
				try {
					var t = a[g] || [];
					a[g] = h.create({
							startLength: t.length,
							length: 0
						}),
					_(t)
				} catch (t) {
					l.do_tracker_jserror({
						message: t && t.message,
						error: encodeURIComponent(t.stack),
						filename: "init_watchGoldlogQueue"
					})
				}
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(18);
			e.hjlj = function () {
				var t = window.goldlog || (window.goldlog = {}),
				e = t._$ || {},
				n = e.script_name,
				a = e.meta_info || {},
				r = a["aplus-rhost-g"],
				i = "//gm.mmstat.com/";
				return (e.is_terminal || "aplus_wap" === n) && (i = "//wgo.mmstat.com/"),
				"aplus_int" === n && (i = "//gj.mmstat.com/"),
				r && (i = "//" + r + "/"),
				o.getProtocal() + i
			}
		}, function (t, e) {
			"use strict";
			function n() {}
			n.prototype.extend = function () {},
			n.prototype.create = function () {},
			n.extend = function (t) {
				return this.prototype.extend.call(this, t)
			},
			n.prototype.create = function (t) {
				var e = new this;
				for (var n in t)
					e[n] = t[n];
				return e
			},
			n.prototype.extend = function (t) {
				var e = function () {};
				try {
					"function" != typeof Object.create && (Object.create = function (t) {
						function e() {}
						return e.prototype = t,
						new e
					}),
					e.prototype = Object.create(this.prototype);
					for (var n in t)
						e.prototype[n] = t[n];
					e.prototype.constructor = e,
					e.extend = e.prototype.extend,
					e.create = e.prototype.create
				} catch (t) {
					console.log(t)
				}
				finally {
					return e
				}
			},
			t.exports = n
		}, function (t, e, n) {
			"use strict";
			var o = n(22),
			a = n(29),
			r = n(5),
			i = function (t, e) {
				var n = a.getMetaCnt(t);
				return !(!n && !e)
			},
			s = function () {
				var t = goldlog.getCdnPath();
				return {
					aplus_ae_path: t + "/alilog/s/" + r.lver + "/plugin/aplus_ae.js",
					aplus_ac_path: t + "/alilog/s/" + r.lver + "/plugin/aplus_ac.js"
				}
			},
			u = function (t, e) {
				var n = s(),
				a = i(t, e),
				r = {
					"aplus-auto-exp": n.aplus_ae_path,
					"aplus-auto-clk": n.aplus_ac_path
				};
				a && r[t] && o.addScript(r[t])
			};
			e.init_loadAplusPlugin = function () {
				!goldlog._aplus_auto_exp && u("aplus-auto-exp"),
				!goldlog._aplus_ac && u("aplus-auto-clk"),
				goldlog.aplus_pubsub.subscribe("setMetaInfo", function (t, e) {
					"aplus-auto-exp" !== t || goldlog._aplus_auto_exp || u(t, e),
					"aplus-auto-clk" !== t || goldlog._aplus_ac || u(t, e)
				})
			}
		}, function (t, e) {
			"use strict";
			var n = function (t, e) {
				var n = window.goldlog_queue || (window.goldlog_queue = []);
				n.push({
					action: "goldlog._aplus_cplugin_track_deb.monitor",
					arguments: [{
							key: "APLUS_PLUGIN_DEBUG",
							title: "aplus_core",
							msg: ["_error_:methodName=" + e + ",params=" + JSON.stringify(t)],
							type: "updateMsg",
							description: e || "aplus_core"
						}
					]
				})
			},
			o = function (t, e, n) {
				var o = window.goldlog_queue || (window.goldlog_queue = []);
				o.push({
					action: ["goldlog", "_aplus_cplugin_m", e].join("."),
					arguments: [t, n]
				})
			};
			e.do_tracker_jserror = function (t, e) {
				var a = "do_tracker_jserror";
				o(t, a, e),
				n(t, a)
			},
			e.do_tracker_obsolete_inter = function (t, e) {
				var a = "do_tracker_obsolete_inter";
				o(t, a, e),
				n(t, a)
			},
			e.wrap = function (t) {
				if ("function" == typeof t)
					try {
						t()
					} catch (t) {
						n({
							msg: t.message || t
						}, "exception")
					}
				finally {}
			}
		}, function (t, e) {
			"use strict";
			e.is_exception = !1
		}, function (t, e, n) {
			"use strict";
			function o() {
				var t,
				e,
				n,
				o,
				a = c.getElementsByTagName("meta");
				for (t = 0, e = a.length; t < e; t++)
					if (n = a[t], o = n.getAttribute("name"), "data-spm" === o || "spm-id" === o)
						return n
			}
			function a() {
				var t = c.createElement("meta");
				t.setAttribute("name", "data-spm");
				var e = c.getElementsByTagName("head")[0];
				return e && e.insertBefore(t, e.firstChild),
				t
			}
			function r() {
				var t = o();
				t || (t = a()),
				t.setAttribute("content", goldlog.spm_ab[0] || "");
				var e = c.getElementsByTagName("body")[0];
				e && e.setAttribute("data-spm", goldlog.spm_ab[1] || "")
			}
			function i() {
				var t,
				e,
				n,
				o = c.getElementsByTagName("*");
				for (t = 0, e = o.length; t < e; t++)
					n = o[t], n.getAttribute("data-spm-max-idx") && n.setAttribute("data-spm-max-idx", ""), n.getAttribute("data-spm-anchor-id") && n.setAttribute("data-spm-anchor-id", "")
			}
			function s() {
				var t = 5e3;
				try {
					var e = goldlog.getMetaInfo("aplus-mmstat-timeout");
					if (e) {
						var n = parseInt(e);
						n >= 1e3 && n <= 1e4 && (t = n)
					}
				} catch (t) {}
				return t
			}
			var u = window,
			c = document,
			l = n(76),
			p = n(15),
			g = n(72),
			f = n(20),
			d = n(57),
			_ = n(8),
			h = n(23),
			m = n(18),
			v = n(32),
			b = n(41),
			y = n(28),
			w = y.getInfo(),
			x = n(3),
			T = n(78),
			j = n(81),
			P = n(9),
			U = n(84),
			A = n(2),
			S = f.isDebugAplus(),
			k = [],
			E = [],
			I = [],
			C = [];
			e.run = l.extend({
					getCdnPath: function () {
						var t = c.getElementById("beacon-aplus") || c.getElementById("tb-beacon-aplus"),
						e = "//g.alicdn.com",
						n = ["//assets.alicdn.com/g", "//g-assets.daily.taobao.net"];
						if (t)
							for (var o = 0; o < n.length; o++) {
								var a = new RegExp(n[o]);
								if (a.test(t.src)) {
									e = n[o];
									break
								}
							}
						return e
					},
					isInternational: function () {
						this.cdnPath || (this.cdnPath = this.getCdnPath());
						var t = "//assets.alicdn.com/g" === this.cdnPath || "//laz-g-cdn.alicdn.com" === this.cdnPath;
						return t || "int" === this.getMetaInfo("aplus-env")
					},
					getCookie: function (t) {
						return P.getCookie(t)
					},
					getParam: function (t) {
						var e = u.WindVane || {},
						n = v.isAplusChnl(),
						o = "";
						n && "object" == typeof n && (o = n.bridgeName || "customBridge");
						var a = e.getParam ? "WindVane" : o,
						r = e && "function" == typeof e.getParam ? e.getParam(t) : "",
						i = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "0.0",
						s = "sid=" + t + "@valueIsEmpty=" + !r;
						return a && (s += "_bridgeName=" + a),
						T.do_tracker_obsolete_inter({
							ratio: S ? 1 : .01,
							page: location.hostname + location.pathname,
							spm_ab: i,
							interface_name: "goldlog.getParam",
							interface_params: s
						}),
						r
					},
					beforeSendPV: function (t) {
						k.push(t)
					},
					afterSendPV: function (t) {
						E.push(t)
					},
					send: function (t, e, n) {
						var o;
						if (0 === t.indexOf("//")) {
							var a = m.getProtocal();
							t = a + t
						}
						return o = "POST" === n && navigator && navigator.sendBeacon ? A.postData(t, e) : A.sendImg(p.makeUrl(t, e), s())
					},
					launch: function (t, e) {
						var n;
						try {
							e = _.assign(e, t),
							n = goldlog._$._sendPV(e, t);
							var o = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "0.0";
							T.do_tracker_obsolete_inter({
								page: location.hostname + location.pathname,
								spm_ab: o,
								interface_name: "goldlog.launch",
								interface_params: "userdata = " + JSON.stringify(t) + ", config = " + JSON.stringify(e)
							})
						} catch (t) {}
						finally {
							return f.logger({
								msg: "warning: This interface is deprecated, please use goldlog.sendPV instead! API: http://log.alibaba-inc.com/log/info.htm?type=2277&id=31"
							}),
							n
						}
					},
					_$: {
						_sendPV: function (t, e) {
							if (t = t || {}, _.any(k, function (e) {
									return e(goldlog, t) === !1
								}))
								return !1;
							var o = n(86).SendPV,
							a = new o;
							return "undefined" == typeof t.recordType && (t.recordType = x.recordTypes.pv),
							a.run(t, e, {
								fn_after_pv: E
							}),
							!0
						},
						_sendPseudo: function (t, e) {
							t || (t = {});
							var o = n(87).SendPrePV,
							a = new o;
							return "undefined" == typeof t.recordType && (t.recordType = x.recordTypes.prepv),
							a.run(t, e, {}, function () {
								d.doPubMsg(["sendPrePV", "complete"])
							}),
							!0
						}
					},
					sendPV: function (t, e) {
						return e = e || {},
						goldlog._$._sendPV(t, e)
					},
					beforeRecord: function (t) {
						I.push(t)
					},
					afterRecord: function (t) {
						C.push(t)
					},
					record: function (t, e, n, o, a) {
						if (!_.any(I, function (t) {
								return t(goldlog) === !1
							}))
							return j.run({
								recordType: x.recordTypes.hjlj,
								method: "POST" === o ? "POST" : "GET"
							}, {
								logkey: t,
								gmkey: e,
								gokey: n
							}, {
								fn_after_record: C
							}, function () {
								"function" == typeof a && a()
							}), !0
					},
					recordUdata: function (t, e, n, o, a) {
						var r = h.getGoldlogVal("_$") || {},
						i = r.spm || {};
						j.run({
							ignore_chksum: !0,
							method: "POST" === o ? "POST" : "GET",
							recordType: x.recordTypes.uhjlj
						}, {
							logkey: t,
							gmkey: e,
							gokey: n,
							"spm-cnt": i.spm_cnt,
							"spm-pre": i.spm_pre
						}, {}, function () {
							_.isFunction(a) && a()
						})
					},
					setPageSPM: function (t, e, n) {
						var o = goldlog.getMetaInfo("aplus-spm-fixed"),
						a = "function" == typeof n ? n : function () {};
						goldlog.spm_ab = goldlog.spm_ab || [];
						var s = _.cloneObj(goldlog.spm_ab);
						if (t && (goldlog.spm_ab[0] = "" + t, goldlog._$.spm.data.a = "" + t), e && (goldlog.spm_ab[1] = "" + e, goldlog._$.spm.data.b = "" + e), b.spaInit(goldlog, w, s), "1" !== o) {
							var u = s.join(".");
							goldlog.spmab_pre = u
						}
						var c = goldlog.spm_ab.join(".");
						d.doPubMsg(["setPageSPM", {
									spmab_pre: goldlog.spmab_pre,
									spmab: c
								}
							]),
						d.doCachePubs(["setPageSPM", {
									spmab_pre: goldlog.spmab_pre,
									spmab: c
								}
							]),
						r(),
						i(),
						a()
					},
					setMetaInfo: function (t, e) {
						if (y.setMetaInfo(t, e)) {
							var n = h.getGoldlogVal("_$") || {};
							n.meta_info = y.qGet();
							var o = h.setGoldlogVal("_$", n),
							a = U.isDisablePvid() + "";
							return "aplus-disable-pvid" === t && a !== e + "" && b.resetSpmCntPvid(),
							d.doPubMsg(["setMetaInfo", t, e]),
							d.doCachePubs(["setMetaInfo", t, e]),
							o
						}
					},
					appendMetaInfo: y.appendMetaInfo,
					getMetaInfo: function (t) {
						return y.getMetaInfo(t)
					},
					on: g.on,
					cloneDeep: _.cloneDeep,
					getPvId: U.getPvId
				})
		}, function (t, e, n) {
			"use strict";
			var o = n(8),
			a = n(23),
			r = n(57),
			i = n(20),
			s = n(82),
			u = n(83),
			c = n(3);
			e.run = function (t, e, n, l) {
				var p = new u;
				p.init({
					middleware: [],
					config: t,
					plugins: c.plugins_hjlj
				});
				var g = p.run(),
				f = new c.context_hjlj;
				f.userdata = e,
				f.logger = i.logger;
				var d = {
					context: f,
					pubsub: a.getGoldlogVal("aplus_pubsub"),
					pubsubType: "hjlj"
				},
				_ = new s;
				_.create(d),
				_.wrap(g, function () {
					d.context.status = "complete",
					r.doPubMsg(["mw_change_hjlj", d.context]),
					n && n.fn_after_record && o.each(n.fn_after_record, function (t) {
						t(window.goldlog)
					}),
					"function" == typeof l && l()
				})()
			}
		}, function (t, e, n) {
			"use strict";
			function o() {}
			var a = n(21),
			r = n(19),
			i = n(20),
			s = n(78),
			u = n(9);
			o.prototype.create = function (t) {
				for (var e in t)
					"undefined" == typeof this[e] && (this[e] = t[e]);
				return this
			},
			o.prototype.pubsubInfo = function (t, e) {
				try {
					t && t.pubsub && t.pubsub.publish("mw_change_" + t.pubsubType, t.context, e)
				} catch (t) {}
			},
			o.prototype.calledList = [],
			o.prototype.setCalledList = function (t) {
				a.indexof(this.calledList, t) === -1 && this.calledList.push(t)
			},
			o.prototype.resetCalledList = function () {
				this.calledList = []
			},
			o.prototype.wrap = function (t, e) {
				var n = this,
				o = this.context || {},
				c = o.compose || {},
				l = c.maxTimeout || 1e4;
				return function (o) {
					var c,
					p = t.length,
					g = 0,
					f = 0,
					d = function () {
						if (n.pubsubInfo(n, t[g]), g === p)
							return o = "done", n.resetCalledList(), "function" == typeof e && e.call(n, o), void clearTimeout(c);
						if (a.indexof(n.calledList, g) === -1) {
							if (n.setCalledList(g), !t[g] || "function" != typeof t[g][0])
								return;
							try {
								o = t[g][0].call(n, o, function () {
										g++,
										f = 1,
										clearTimeout(c),
										d(g)
									})
							} catch (e) {
								s.do_tracker_jserror({
									message: e ? e.message : "compose middleware error",
									error: encodeURIComponent(e.stack),
									filename: t[g][1]
								})
							}
						}
						var _ = "number" == typeof o;
						if ("pause" === o || _) {
							f = 0;
							var h = _ ? o : l,
							m = t[g] ? t[g][1] : "";
							c = r.sleep(h, function () {
									if (0 === f) {
										var t = "jump the middleware about " + m + ", because waiting timeout maxTimeout = " + h + "ms!";
										i.logger({
											msg: t
										}),
										goldlog_queue.push({
											action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
											arguments: [{
													msg: t,
													spmab: goldlog.spm_ab,
													page: location.href,
													etag: n.context ? JSON.stringify(n.context.etag) : "",
													cna: document.cookie ? u.getCookie("cna") : ""
												}
											]
										}),
										o = null,
										g++,
										d(g)
									}
								})
						} else
							"done" === o ? (g = p, d(g)) : (g++, d(g))
					};
					return n.calledList && n.calledList.length > 0 && n.resetCalledList(),
					d(g)
				}
			},
			t.exports = o
		}, function (t, e, n) {
			"use strict";
			var o = n(21);
			t.exports = function () {
				return {
					init: function (t) {
						this.opts = t,
						t && "object" == typeof t.middleware && t.middleware.length > 0 ? this.middleware = t.middleware : this.middleware = [],
						this.plugins_name = []
					},
					pubsubInfo: function (t, e) {
						try {
							var n = t.pubsub;
							n && n.publish("plugins_change_" + t.pubsubType, e)
						} catch (t) {}
					},
					checkPluginLoader: function (t, e) {
						var n = !0;
						if ("object" == typeof e.enable && "function" == typeof e.enable.isEnable ? n = e.enable.isEnable(e.name) : "boolean" == typeof e.enable && (n = !!e.enable), !n)
							return !1;
						if (n && e.deps && e.deps.length > 0)
							for (var a = 0; a < e.deps.length; a++)
								if (o.indexof(this.plugins_name, e.deps[a]) === -1)
									return !1;
						return !0
					},
					run: function (t) {
						t || (t = 0);
						var e = this,
						n = this.middleware,
						o = this.opts || {},
						a = o.plugins;
						if (a && "object" == typeof a && a.length > 0) {
							var r = a[t];
							if (this.checkPluginLoader(a, r) && (this.plugins_name.push(r.name), n.push([function (t, n) {
												e.pubsubInfo(this, r);
												var a = new r.path;
												return a.init({
													context: this.context,
													config: o.config
												}),
												a.run(t, n)
											}, r.name])), t++, a[t])
								return this.run(t)
						} else
							window.console && console.log("aplus plugins " + JSON.stringify(a) + " must be object of array!");
						return n
					}
				}
			}
		}, function (t, e, n) {
			"use strict";
			function o() {
				var t = "true" === l.disablePvid;
				try {
					var e = goldlog.getMetaInfo("aplus-disable-pvid") + "";
					"true" === e ? t = !0 : "false" === e && (t = !1)
				} catch (t) {}
				return t
			}
			function a(t) {
				function e(t) {
					var e = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",
					n = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
					return 1 == t ? e.substr(Math.floor(60 * Math.random()), 1) : 2 == t ? n.substr(Math.floor(60 * Math.random()), 1) : "0"
				}
				for (var n, o = "", a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = !1; o.length < t; )
					n = a.substr(Math.floor(62 * Math.random()), 1), !r && o.length <= 2 && ("g" == n.toLowerCase() || "l" == n.toLowerCase()) && (0 === o.length && "g" == n.toLowerCase() ? Math.random() < .5 && (n = e(1), r = !0) : 1 == o.length && "l" == n.toLowerCase() && "g" == o.charAt(0).toLowerCase() && (n = e(2), r = !0)), o += n;
				return o
			}
			function r(t, e, n) {
				return t ? u.hash(encodeURIComponent(t)).substr(0, e) : n
			}
			function i() {
				var t = a(8),
				e = t.substr(0, 4),
				n = t.substr(0, 6);
				return [r(location.href, 4, e), r(document.title, 4, e), n].join("")
			}
			function s() {
				var t = goldlog.pvid;
				return goldlog.pvid = i(),
				c.doPubMsg(["pvidChange", {
							pre_pvid: t,
							pvid: goldlog.pvid
						}
					]),
				c.doCachePubs(["pvidChange", {
							pre_pvid: t,
							pvid: goldlog.pvid
						}
					]),
				o() ? "" : goldlog.pvid
			}
			var u = n(85),
			c = n(57),
			l = n(3);
			e.isDisablePvid = o,
			e.makePVId = s,
			e.getPvId = function () {
				return o() ? "" : goldlog.pvid
			}
		}, function (t, e) {
			"use strict";
			var n = 1315423911;
			e.hash = function (t, e) {
				var o,
				a,
				r = e || n;
				for (o = t.length - 1; o >= 0; o--)
					a = t.charCodeAt(o), r ^= (r << 5) + a + (r >> 2);
				var i = (2147483647 & r).toString(16);
				return i
			}
		}, function (t, e, n) {
			"use strict";
			var o = n(8),
			a = n(23),
			r = n(57),
			i = n(20),
			s = n(82),
			u = n(83),
			c = n(3),
			l = function () {};
			l.prototype.run = function (t, e, n) {
				var l = new u;
				l.init({
					middleware: [],
					config: t,
					plugins: c.plugins_pv
				});
				var p = l.run(),
				g = new c.context;
				g.userdata = e,
				g.logger = i.logger;
				var f = {
					context: g,
					pubsub: a.getGoldlogVal("aplus_pubsub"),
					pubsubType: "pv"
				},
				d = new s;
				d.create(f),
				d.wrap(p, function () {
					var e = f.context.can_to_sendpv || {};
					f.context.status = "YES" === e.flag ? "complete" : "skip",
					r.doPubMsg(["mw_change_pv", f.context]),
					n && n.fn_after_record && o.each(n.fn_after_pv, function (e) {
						e(window.goldlog, t)
					})
				})()
			},
			e.SendPV = l
		}, function (t, e, n) {
			"use strict";
			var o = n(8),
			a = n(23),
			r = n(57),
			i = n(20),
			s = n(82),
			u = n(83),
			c = n(3),
			l = function () {};
			l.prototype.run = function (t, e, n, l) {
				var p = new u;
				p.init({
					middleware: [],
					config: t,
					plugins: c.plugins_prepv
				});
				var g = p.run(),
				f = new c.context_prepv;
				f.userdata = e,
				f.logger = i.logger;
				var d = {
					context: f,
					pubsub: a.getGoldlogVal("aplus_pubsub"),
					pubsubType: "prepv"
				},
				_ = new s;
				_.create(d),
				_.wrap(g, function () {
					d.context.status = "complete",
					r.doPubMsg(["mw_change_prepv", d.context]),
					n && n.fn_after_record && o.each(n.fn_after_pv, function (e) {
						e(window.goldlog, t)
					}),
					a.setGoldlogVal("prepv_context", f),
					"function" == typeof l && l()
				})()
			},
			e.SendPrePV = l
		}, function (t, e, n) {
			"use strict";
			!function () {
				var t = window.goldlog || (window.goldlog = {}),
				e = n(89);
				t.aplus_pubsub || (t.aplus_pubsub = e.create())
			}
			()
		}, function (t, e, n) {
			"use strict";
			function o(t) {
				if ("function" != typeof t)
					throw new TypeError(t + " is not a function");
				return t
			}
			var a = n(76),
			r = function (t) {
				for (var e = t.length, n = new Array(e - 1), o = 1; o < e; o++)
					n[o - 1] = t[o];
				return n
			},
			i = a.extend({
					create: function (t) {
						var e = new this;
						for (var n in t)
							e[n] = t[n];
						return e.handlers = [],
						e.pubs = {},
						e
					},
					setHandlers: function (t) {
						this.handlers = t
					},
					subscribe: function (t, e) {
						o(e);
						var n = this,
						a = n.pubs || {},
						r = a[t] || [];
						if (r)
							for (var i = 0; i < r.length; i++) {
								var s = r[i]();
								e.apply(n, s)
							}
						var u = n.handlers || [];
						return t in u || (u[t] = []),
						u[t].push(e),
						n.setHandlers(u),
						n
					},
					subscribeOnce: function (t, e) {
						o(e);
						var n,
						a = this;
						return this.subscribe.call(this, t, n = function () {
							a.unsubscribe.call(a, t, n);
							var o = Array.prototype.slice.call(arguments);
							e.apply(a, o)
						}),
						this
					},
					unsubscribe: function (t, e) {
						o(e);
						var n = this.handlers[t];
						if (!n)
							return this;
						if ("object" == typeof n && n.length > 0) {
							for (var a = 0; a < n.length; a++) {
								var r = e.toString(),
								i = n[a].toString();
								r === i && n.splice(a, 1)
							}
							this.handlers[t] = n
						} else
							delete this.handlers[t];
						return this
					},
					publish: function (t) {
						var e = r(arguments),
						n = this.handlers || [],
						o = n[t] ? n[t].length : 0;
						if (o > 0)
							for (var a = 0; a < o; a++) {
								var i = n[t][a];
								i && "function" == typeof i && i.apply(this, e)
							}
						return this
					},
					cachePubs: function (t) {
						var e = this.pubs || {},
						n = r(arguments);
						e[t] || (e[t] = []),
						e[t].push(function () {
							return n
						})
					}
				});
			t.exports = i
		}, function (t, e, n) {
			"use strict";
			var o = n(32),
			a = n(57),
			r = n(3);
			e.init = function () {
				var t = n(3),
				e = goldlog._$,
				i = navigator.userAgent;
				i.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i) && (e.is_ali_app = !0),
				t.utilPvid.makePVId();
				var s = n(41);
				e.spm = s,
				e.is_WindVane = o.is_WindVane;
				var u = e.meta_info;
				e.page_url = location.href,
				e.page_referrer = n(43).getRefer(),
				s.init(goldlog, u, function () {
					t.initLoad.init_watchGoldlogQueue();
					var e = n(3).spmException,
					o = e.is_exception;
					o || n(91),
					a.doPubMsg(["aplusReady", "complete"]),
					a.doCachePubs(["aplusReady", "complete"])
				}),
				goldlog.beforeSendPV(function (t, e) {
					if (e.is_auto && "1" === u["aplus-manual-pv"])
						return !1
				}),
				goldlog.afterSendPV(function () {
					window.g_SPM && (g_SPM._current_spm = "")
				}),
				r.is_auto_pv + "" == "true" && goldlog.sendPV({
					is_auto: !0
				}),
				t.initLoad.run(),
				t.beforeUnload.run()
			}
		}, function (t, e, n) {
			"use strict";
			!function () {
				var t,
				e = n(8),
				o = n(23),
				a = n(92),
				r = function () {
					t = !0;
					var n = window.g_SPM || {};
					e.isFunction(n.getParam) || e.isFunction(n.spm) || a.run()
				},
				i = window.goldlog || (window.goldlog = {});
				i.aplus_pubsub && "function" == typeof i.aplus_pubsub.publish && i.aplus_pubsub.subscribe("goldlogReady", function (e) {
					"complete" !== e || t || r()
				});
				var s = 0,
				u = function () {
					if (!t) {
						var e = o.getGoldlogVal("_$") || {};
						"complete" === e.status ? r() : s < 50 && (++s, setTimeout(function () {
								u()
							}, 200))
					}
				};
				u()
			}
			()
		}, function (t, e, n) {
			"use strict";
			var o = n(15),
			a = n(21),
			r = n(16),
			i = n(8),
			s = n(22),
			u = n(72),
			c = n(23),
			l = n(20),
			p = n(18),
			g = n(93),
			f = g.spmRender,
			d = parent !== self;
			e.run = function () {
				function t(t) {
					var e = yt(t, pt),
					n = r.parseSemicolonContent(e) || {};
					return n
				}
				function e() {
					var t = H.spm.data;
					return [t.a, t.b].join(".")
				}
				function n(t, e) {
					var n,
					o,
					a,
					r,
					i,
					s,
					u,
					c,
					l,
					p = [];
					for (n = bt(t.getElementsByTagName("a")), o = bt(t.getElementsByTagName("area")), r = n.concat(o), u = 0, c = r.length; u < c; u++) {
						for (s = !1, i = a = r[u]; (i = i.parentNode) && i != t; )
							if (yt(i, ut)) {
								s = !0;
								break
							}
						s || (l = yt(a, gt), e || "t" == l ? e && "t" == l && p.push(a) : p.push(a))
					}
					return p
				}
				function g(o, a, r, u) {
					var c,
					l,
					p,
					g,
					f,
					d,
					_,
					h,
					m,
					v,
					b,
					y,
					w,
					T,
					P,
					A,
					S,
					E,
					I;
					if (a = a || o.getAttribute(ut) || "", a && (c = n(o, u), 0 !== c.length)) {
						if (p = a.split("."), S = Tt(a, "110") && 3 == p.length, S && (E = p[2], p[2] = "w" + (E || "0"), a = p.join(".")), jt(w = e()) && w.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/))
							if (i.isContain(a, ".")) {
								if (!Tt(a, w)) {
									for (g = w.split("."), p = a.split("."), P = 0, T = g.length; P < T; P++)
										p[P] = g[P];
									a = p.join(".")
								}
							} else
								i.isContain(w, ".") || (w += ".0"), a = w + "." + a;
						if (a.match && a.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/)) {
							var C = u ? dt : ft;
							for (I = parseInt(yt(o, C)) || 0, A = 0, f = I, T = c.length; A < T; A++)
								if (l = c[A], d = s.tryToGetHref(l), _ = s.tryToGetAttribute(l, pt), u || d || _)
									if (S && l.setAttribute(ht, E), h = l.getAttribute(mt), h && k(h))
										x(l, h, r);
									else {
										v = U(l.parentNode),
										v.a_spm_ab ? (y = v.a_spm_ab, b = v.ab_idx) : (y = void 0, f++, b = f);
										var M = t(l) || {},
										V = M.locaid || "";
										V ? m = V : (m = j(l) || b, u && (m = "at" + ((i.isNumber(m) ? 1e3 : "") + m))),
										h = y ? a + "-" + y + "." + m : a + "." + m,
										x(l, h, r)
									}
							o.setAttribute(C, f)
						}
					}
				}
				function _(t) {
					for (var e = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"], n = 0; n < e.length; n++)
						if (t.indexOf(e[n]) != -1)
							return !0;
					return !1
				}
				function h(t) {
					return t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i) : J
				}
				function m(t) {
					return t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i) : J
				}
				function v(t) {
					for (var e; (t = t.parentNode) && t.tagName != ot; )
						if (e = yt(t, ct))
							return e;
					return ""
				}
				function b(t, e) {
					if (!goldlog.isUT4Aplus || "UT4Aplus" !== goldlog.getMetaInfo("aplus-toUT")) {
						if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e)
							return t;
						var n,
						o,
						a,
						r,
						s,
						u,
						c,
						l = "&";
						if (t.indexOf("#") != -1 && (a = t.split("#"), t = a.shift(), o = a.join("#")), r = t.split("?"), s = r.length - 1, a = r[0].split("//"), a = a[a.length - 1].split("/"), u = a.length > 1 ? a.pop() : "", s > 0 && (n = r.pop(), t = r.join("?")), n && s > 1 && n.indexOf("&") == -1 && n.indexOf("%") != -1 && (l = "%26"), t = t + "?spm=" + _t + e + (n ? l + n : "") + (o ? "#" + o : ""), c = i.isContain(u, ".") ? u.split(".").pop().toLowerCase() : "") {
							if ({
								png: 1,
								jpg: 1,
								jpeg: 1,
								gif: 1,
								bmp: 1,
								swf: 1
							}
								.hasOwnProperty(c))
								return 0;
							!n && s <= 1 && (o || {
								htm: 1,
								html: 1,
								php: 1,
								aspx: 1
							}
								.hasOwnProperty(c) || (t += "&file=" + u))
						}
						return t
					}
				}
				function y(t) {
					return t && z.split("#")[0] == t.split("#")[0]
				}
				function w(t) {
					var e = s.tryToGetHref(t),
					n = v(t),
					o = yt(t, ct),
					a = "i" === (o || n || st);
					if (!e || _(e))
						return !0;
					var r = y(e) || p.isStartWithProtocol(e.toLowerCase()) || h(e) || m(e);
					return !(a || !Tt(e, "#") && !r) || a
				}
				function x(t, n, a) {
					if (!/^0\.0\.?/.test(n)) {
						var r = s.tryToGetHref(t),
						i = e(),
						u = w(t);
						if (u) {
							var c = o.param2obj(r);
							if (c.spm && c.spm.split)
								for (var l = c.spm.split("."), p = n.split("."), g = 0; g < 3 && p[g] === l[g]; g++)
									2 === g && l[3] && (n = c.spm)
						}
						t.setAttribute(mt, n),
						Z = goldlog.getPvId(),
						Z && (n += "." + Z),
						(Z || i && i != tt) && (u || a || (r = b(r, n)) && T(t, r))
					}
				}
				function T(t, e) {
					if (!goldlog.isUT4Aplus || "UT4Aplus" !== goldlog.getMetaInfo("aplus-toUT")) {
						var n,
						o = t.innerHTML;
						o && o.indexOf("<") == -1 && (n = F.createElement("b"), n.style.display = "none", t.appendChild(n)),
						t.href = e,
						n && t.removeChild(n)
					}
				}
				function j(t) {
					var e,
					n = H.spm.data;
					return "0" == n.a && "0" == n.b ? e = "0" : (e = yt(t, ut), e && e.match(/^d\w+$/) || (e = "")),
					e
				}
				function P(t) {
					for (var e, n, o = t; t && t.tagName != nt && t.tagName != ot && t.getAttribute; ) {
						if (n = t.getAttribute(ut)) {
							e = n,
							o = t;
							break
						}
						if (!(t = t.parentNode))
							break
					}
					return e && !/^[\w\-\.\/]+$/.test(e) && (e = "0"), {
						spm_c: e,
						el: o
					}
				}
				function U(t) {
					for (var e, n = {}, o = ""; t && t.tagName != nt && t.tagName != ot; ) {
						if (!o && (o = yt(t, vt))) {
							e = parseInt(yt(t, "data-spm-ab-max-idx")) || 0,
							n.a_spm_ab = o,
							n.ab_idx = ++e,
							t.setAttribute("data-spm-ab-max-idx", e);
							break
						}
						if (yt(t, ut))
							break;
						t = t.parentNode
					}
					return n
				}
				function A(t) {
					var e;
					return t && (e = t.match(/&?\bspm=([^&#]*)/)) ? e[1] : ""
				}
				function S(t, n) {
					var o = goldlog.getMetaInfo("aplus-getspmcd") || function () {},
					a = e(),
					r = s.tryToGetHref(t),
					i = A(r),
					u = null,
					c = a && 2 == a.split(".").length;
					if (c) {
						var l = o(t, null, a);
						return u = l && "0" !== l.spm_c ? [a, l.spm_c, l.spm_d] : [a, 0, j(t) || 0],
						void x(t, u.join("."), n)
					}
					r && i && (r = r.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"), T(t, r))
				}
				function k(t) {
					var n = e(),
					o = t.split(".");
					return o[0] + "." + o[1] == n
				}
				function E(t, e) {
					at && N();
					var n,
					o,
					a = yt(t, mt);
					if (a && k(a))
						x(t, a, e);
					else {
						if (n = P(t.parentNode), o = n.spm_c, !o)
							return void S(t, e);
						et && (o = "0"),
						g(n.el, o, e),
						g(n.el, o, e, !0)
					}
				}
				function I(t) {
					if (t && 1 == t.nodeType) {
						xt(t, ft),
						xt(t, dt);
						var e,
						n = bt(t.getElementsByTagName("a")),
						o = bt(t.getElementsByTagName("area")),
						a = n.concat(o),
						r = a.length;
						for (e = 0; e < r; e++)
							xt(a[e], mt)
					}
				}
				function C(n) {
					var o = yt(n, mt);
					if (!o) {
						var a = e(),
						r = n.parentNode;
						if (!r)
							return "";
						var i = t(n) || {},
						s = i.locaid || "",
						u = n.getAttribute(ut) || s,
						c = P(r),
						l = c.spm_c || 0;
						l && l.indexOf(".") != -1 && (l = l.split("."), l = l[l.length - 1]),
						o = Ut(a + "." + l, u)
					}
					return o
				}
				function M(t) {
					var e,
					n = t.tagName;
					"A" != n && "AREA" != n ? e = C(t) : (E(t, q), e = yt(t, mt)),
					e || (e = "0.0.0.0");
					var o = goldlog.getPvId();
					return 4 === e.split(".").length && o && (e += "." + o),
					"A" != n && "AREA" != n && wt(t, mt, e),
					e = e.split("."), {
						a: e[0],
						b: e[1],
						c: e[2],
						d: e[3],
						e: e[4]
					}
				}
				function V(t, e) {
					if (e || (e = F), F.evaluate)
						return e.evaluate(t, F, null, 9, null).singleNodeValue;
					for (var n, o = t.split("/"); !n && o.length > 0; )
						n = o.shift();
					var a,
					r = /^.+?\[@id="(.+?)"]$/i,
					i = /^(.+?)\[(\d+)]$/i;
					return (a = n.match(r)) ? e = e.getElementById(a[1]) : (a = n.match(i)) && (e = e.getElementsByTagName(a[1])[parseInt(a[2]) - 1]),
					e ? 0 === o.length ? e : V(o.join("/"), e) : null
				}
				function N() {
					var t,
					e,
					n,
					o = {};
					for (t in rt)
						rt.hasOwnProperty(t) && (e = V(t), e && (o[t] = 1, n = rt[t], wt(e, ut, ("A" == e.tagName ? n.spmd : n.spmc) || "")));
					for (t in o)
						o.hasOwnProperty(t) && delete rt[t]
				}
				function O() {
					if (!it && W.spmData) {
						it = q;
						var t,
						e,
						n,
						o,
						a = W.spmData.data;
						if (a && Pt(a)) {
							for (t = 0, e = a.length; t < e; t++)
								n = a[t], o = n.xpath, o = o.replace(/^id\("(.+?)"\)(.*)/g, '//*[@id="$1"]$2'), rt[o] = {
									spmc: n.spmc,
									spmd: n.spmd
								};
							N()
						}
					}
				}
				function G() {
					var t,
					e,
					n,
					o,
					a = F.getElementsByTagName("iframe"),
					r = a.length;
					for (e = 0; e < r; e++)
						t = a[e], !t.src && (n = yt(t, lt)) && (o = M(t), o ? (o = [o.a, o.b, o.c, o.d, o.e].join("."), t.src = b(n, o)) : t.src = n)
				}
				function R() {
					function t() {
						e++,
						e > 10 && (n = 3e3),
						G(),
						setTimeout(t, n)
					}
					var e = 0,
					n = 500;
					t()
				}
				function L(t, e, n) {
					var o = r.parseSemicolonContent(e, {}, !0),
					s = o.gostr || "",
					u = o.locaid || "",
					c = t.getAttribute(ut) || u,
					p = "CLK",
					g = o.gokey || "",
					f = M(t),
					d = [f.a, f.b, f.c, c].join("."),
					_ = s + "." + d;
					0 !== _.indexOf("/") && (_ = "/" + _);
					var h = [],
					m = ["gostr", "locaid", "gmkey", "gokey", "spm-cnt", "cna"];
					for (var v in o)
						o.hasOwnProperty(v) && a.indexof(m, v) === -1 && h.push(v + "=" + o[v]);
					h.push("_g_et=" + n),
					h.push("autosend=1"),
					g && h.length > 0 && (g += "&"),
					g += h.length > 0 ? h.join("&") : "",
					goldlog && i.isFunction(goldlog.recordUdata) ? goldlog.recordUdata(_, p, g, "GET", function () {}) : l.logger({
						msg: "goldlog.recordUdata is not function!"
					}),
					wt(t, mt, d)
				}
				function $(t, n) {
					f.fetchSpmd(n);
					var o = n;
					W.g_SPM && (g_SPM._current_spm = M(n));
					for (var a; n && n.tagName != nt; ) {
						a = yt(n, pt); {
							if (a) {
								L(n, a, "mousedown" === t.type ? t.button : "tap");
								break
							}
							n = n.parentNode
						}
					}
					if (!a) {
						var r = e(),
						i = goldlog.getMetaInfo("aplus-getspmcd") || function () {};
						i(o, t, r)
					}
				}
				function B(t, e) {
					for (var n; e && (n = e.tagName); ) {
						if ("A" == n || "AREA" == n) {
							E(e, J);
							var o = window.g_SPM || (window.g_SPM = {}),
							a = o._current_spm = M(e),
							r = [];
							try {
								r = [a.a, a.b, a.c, a.d];
								var i = a.e || goldlog.pvid || "";
								i && r.push(i)
							} catch (t) {}
							break
						}
						if (n == ot || n == nt)
							break;
						e = e.parentNode
					}
				}
				function D(t, e) {
					var n = M(t),
					o = n.a + "." + n.b + "." + n.c + "." + n.d;
					return e && (o += "." + n.e),
					o
				}
				f.renderSpmc();
				var W = window,
				F = document,
				K = location,
				q = !0,
				J = !1,
				H = c.getGoldlogVal("_$") || {},
				Y = H.meta_info,
				z = K.href,
				Q = H.is_terminal || /WindVane/i.test(navigator.userAgent),
				X = s.isTouch() || "1" === Y["aplus-touch"];
				W.g_SPM || (W.g_SPM = {}),
				W.g_SPM.spm_d_for_ad = {};
				var Z,
				tt = "0.0",
				et = !1,
				nt = "HTML",
				ot = "BODY",
				at = J,
				rt = {},
				it = J,
				st = Y.spm_protocol,
				ut = "data-spm",
				ct = "data-spm-protocol",
				lt = "data-spm-src",
				pt = "data-spm-click",
				gt = "data-auto-spmd",
				ft = "data-spm-max-idx",
				dt = "data-auto-spmd-max-idx",
				_t = "",
				ht = "data-spm-wangpu-module-id",
				mt = "data-spm-anchor-id",
				vt = "data-spm-ab",
				bt = r.nodeListToArray,
				yt = s.tryToGetAttribute,
				wt = s.tryToSetAttribute,
				xt = s.tryToRemoveAttribute,
				Tt = i.isStartWith,
				jt = i.isString,
				Pt = i.isArray,
				Ut = function (t, e) {
					if (!d && e)
						return [t, e].join(".");
					if (t && e)
						return t + ".i" + e;
					var n = W.g_SPM || (W.g_SPM = {}),
					o = n.spm_d_for_ad || {};
					return "number" == typeof o[t] ? o[t]++ : o[t] = 0,
					n.spm_d_for_ad = o,
					t + ".i" + o[t]
				};
				u.DOMReady(function () {
					O()
				}),
				Q || R(),
				X ? u.on(F, "tap", $) : u.on(F, "mousedown", $),
				X ? u.on(F, "tap", B) : (u.on(F, "mousedown", B), u.on(F, "keydown", B)),
				W.g_SPM = {
					resetModule: I,
					anchorBeacon: E,
					getParam: M,
					spm: D
				}
			}
		}, function (t, e, n) {
			e.confLoad = n(94),
			e.spmRender = n(95)
		}, function (t, e) {
			t.exports = {
				setMeta: function () {},
				load: function (t) {
					t()
				}
			}
		}, function (t, e) {
			e.renderSpmc = function () {},
			e.fetchSpmd = function () {}
		}, function (t, e, n) {
			"use strict";
			var o = n(44),
			a = n(57),
			r = n(3),
			i = n(28),
			s = n(93),
			u = s.confLoad,
			c = i.getInfo(),
			l = navigator.userAgent,
			p = "complete";
			e.initGoldlog = function (t) {
				function e() {
					var e = /TB\-PD/i.test(l),
					i = n._$ = n._$ || {};
					i.meta_info = c,
					i.is_terminal = "aplus_wap" === r.script_name || e || "1" == c["aplus-terminal"],
					i.send_pv_count = 0,
					i.status = p,
					i.script_name = r.script_name,
					n.lver = r.lver,
					n.nameStorage = o.nameStorage,
					n.isUT4Aplus = /UT4Aplus/i.test(l),
					a.doPubMsg(["goldlogReady", p]),
					a.doCachePubs(["goldlogReady", p]),
					t.init()
				}
				var n = window.goldlog || (window.goldlog = {}),
				i = r.goldlog_path.run.create();
				for (var s in i)
					n[s] = i[s];
				return u.load(e),
				n
			}
		}
	]); /*! 2017-10-31 20:46:31 v0.2.4 */
!function (o) {
	function n(i) {
		if (t[i])
			return t[i].exports;
		var e = t[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return o[i].call(e.exports, e, e.exports, n),
		e.loaded = !0,
		e.exports
	}
	var t = {};
	return n.m = o,
	n.c = t,
	n.p = "",
	n(0)
}
([function (o, n, t) {
			"use strict";
			!function () {
				var o = window.goldlog || (window.goldlog = {});
				if (!o._aplus_plugin_aol) {
					o._aplus_plugin_aol = {
						status: "complete"
					};
					var n = t(1),
					i = window.goldlog_queue || (window.goldlog_queue = []);
					i.push({
						action: "goldlog.aplus_pubsub.subscribeOnce",
						arguments: ["goldlogReady", function (o) {
								"complete" === o && n.run()
							}
						]
					})
				}
			}
			()
		}, function (o, n, t) {
			"use strict";
			var i = t(2),
			e = t(3);
			n.run = function () {
				var o,
				n = function () {
					!o && i.bingo() && (o = "1", e.init())
				},
				t = (location.hostname + location.pathname).match(/^www.taobao.com\/$/);
				"1" === goldlog.getMetaInfo("aplus-aol") || t ? n() : goldlog.aplus_pubsub.subscribe("setMetaInfo", function (o, i) {
					("aplus-aol" === o && "1" === i || t) && n()
				})
			}
		}, function (o, n) {
			"use strict";
			function t(o, n) {
				return o + Math.floor(Math.random() * (n - o + 1))
			}
			var i = 13,
			e = 1;
			n.bingo = function () {
				var o = t(1, i);
				return o === e
			}
		}, function (o, n) {
			"use strict";
			var t,
			i = document,
			e = window,
			u = !1,
			l = function () {
				var o = goldlog.getMetaInfo("aplus-aol-ext") || "";
				return "function" == typeof o && (o = o()),
				o
			},
			a = function (o) {
				var n = l() || "",
				t = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "";
				goldlog.send(o, {
					sk: t + (n ? "." + n : ""),
					cna: goldlog.getCookie("cna"),
					t: (new Date).getTime()
				}, "POST")
			},
			c = function () {
				a("//ol.mmstat.com/aol.r.i")
			},
			g = function () {
				a("//ol.mmstat.com/aol.r.o")
			},
			s = function () {
				t = setTimeout(function () {
						u && c(),
						s()
					}, 5e3)
			},
			r = function () {
				clearTimeout(t),
				g(),
				c(),
				s()
			},
			d = function () {
				var o = function () {
					u = !1,
					g()
				};
				goldlog.on(e, "beforeunload", function () {
					o()
				}),
				i.addEventListener && i.addEventListener("WV.Event.APP.Background", function (n) {
					o()
				}, !1),
				"hidden" in i && goldlog.on(e, "visibilitychange", function () {
					"hidden" === i.visibilityState && o()
				}),
				goldlog.on(e, "blur", function () {
					o()
				})
			},
			f = function () {
				var o = e.goldlog_queue || (e.goldlog_queue = []);
				o.push({
					action: "goldlog.aplus_pubsub.subscribe",
					arguments: ["setPageSPM", function (o) {
							r()
						}
					]
				})
			},
			p = function () {
				var o = function () {
					u = !0,
					c()
				};
				i.addEventListener && i.addEventListener("WV.Event.APP.Active", function (n) {
					o()
				}, !1),
				"hidden" in i && goldlog.on(e, "visibilitychange", function () {
					"visible" === i.visibilityState && o()
				}),
				goldlog.on(e, "focus", function () {
					o()
				})
			};
			n.init = function () {
				c(),
				u = !0,
				s(),
				d(),
				f(),
				p()
			}
		}
	]); /*! 2018-05-24 16:43:25 v8.4.5 */
!function (t) {
	function e(n) {
		if (r[n])
			return r[n].exports;
		var a = r[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return t[n].call(a.exports, a, a.exports, e),
		a.loaded = !0,
		a.exports
	}
	var r = {};
	return e.m = t,
	e.c = r,
	e.p = "",
	e(0)
}
([function (t, e) {
			"use strict";
			!function () {
				function t(t, e, r) {
					t[w]((b ? "on" : "") + e, function (t) {
						t = t || f.event;
						var e = t.target || t.srcElement;
						r(t, e)
					}, !1)
				}
				function e() {
					return /&?\bspm=[^&#]*/.test(location.href) ? location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1] : ""
				}
				function r(t, e) {
					if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e)
						return t;
					var r,
					n,
					a,
					i,
					o,
					c,
					p,
					f = "&";
					if (t.indexOf("#") != -1 && (a = t.split("#"), t = a.shift(), n = a.join("#")), i = t.split("?"), o = i.length - 1, a = i[0].split("//"), a = a[a.length - 1].split("/"), c = a.length > 1 ? a.pop() : "", o > 0 && (r = i.pop(), t = i.join("?")), r && o > 1 && r.indexOf("&") == -1 && r.indexOf("%") != -1 && (f = "%26"), t = t + "?spm=" + e + (r ? f + r : "") + (n ? "#" + n : ""), p = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
						if ({
							png: 1,
							jpg: 1,
							jpeg: 1,
							gif: 1,
							bmp: 1,
							swf: 1
						}
							.hasOwnProperty(p))
							return 0;
						!r && o <= 1 && (n || {
							htm: 1,
							html: 1,
							php: 1
						}
							.hasOwnProperty(p) || (t += "&file=" + c))
					}
					return t
				}
				function n(t) {
					function e(t) {
						return t = t.replace(/refpos[=(%3D)]\w*/gi, c).replace(i, "%3D" + n + "%26" + a.replace("=", "%3D")).replace(o, n),
						a.length > 0 && (t += "&" + a),
						t
					}
					var r = window.location.href,
					n = r.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),
					a = r.match(/[&\?](pvid=[^&]*)/i),
					i = new RegExp("%3Dmm_\\d+_\\d+_\\d+", "ig"),
					o = new RegExp("mm_\\d+_\\d+_\\d+", "ig");
					a = a && a[1] ? a[1] : "";
					var c = r.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);
					return c = c && c[0] ? c[0] : "",
					n ? (n = n[0], e(t)) : t
				}
				function a(e) {
					var r = f.KISSY;
					r ? r.ready(e) : f.jQuery ? jQuery(m).ready(e) : "complete" === m.readyState ? e() : t(f, "load", e)
				}
				function i(t, e) {
					return t && t.getAttribute ? t.getAttribute(e) || "" : ""
				}
				function o(t) {
					if (t) {
						var e,
						r = h.length;
						for (e = 0; e < r; e++)
							if (t.indexOf(h[e]) > -1)
								return !0;
						return !1
					}
				}
				function c(t, e) {
					if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e)
						return t;
					var r,
					n,
					a,
					i,
					o,
					c,
					p,
					f = "&";
					if (t.indexOf("#") != -1 && (a = t.split("#"), t = a.shift(), n = a.join("#")), i = t.split("?"), o = i.length - 1, a = i[0].split("//"), a = a[a.length - 1].split("/"), c = a.length > 1 ? a.pop() : "", o > 0 && (r = i.pop(), t = i.join("?")), r && o > 1 && r.indexOf("&") == -1 && r.indexOf("%") != -1 && (f = "%26"), t = t + "?spm=" + e + (r ? f + r : "") + (n ? "#" + n : ""), p = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
						if ({
							png: 1,
							jpg: 1,
							jpeg: 1,
							gif: 1,
							bmp: 1,
							swf: 1
						}
							.hasOwnProperty(p))
							return 0;
						!r && o <= 1 && (n || {
							htm: 1,
							html: 1,
							php: 1
						}
							.hasOwnProperty(p) || (t += "&__file=" + c))
					}
					return t
				}
				function p(t) {
					if (o(t.href)) {
						var r = i(t, g);
						if (!r) {
							if (!d)
								return;
							var n = d(t),
							a = [n.a, n.b, n.c, n.d].join(".");
							n.e && (n += "." + n.e),
							u && (a = [n.a || "0", n.b || "0", n.c || "0", n.d || "0"].join("."), a = (e() || "0.0.0.0.0") + "_" + a),
							t.href = c(t.href, a),
							t.setAttribute(g, a)
						}
					}
				}
				var f = window,
				m = document,
				s = f._alimm_spmact_on_;
				if ("undefined" == typeof s && (s = 1), 1 == s && (s = 1), 0 == s && (s = 0), s) {
					var l = function () {
						return {
							a: 0,
							b: 0,
							c: 0,
							d: 0,
							e: 0
						}
					},
					d = f.g_SPM && f.g_SPM.getParam ? f.g_SPM.getParam : l,
					u = !0;
					try {
						u = self.location != top.location
					} catch (t) {}
					var g = "data-spm-act-id",
					h = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"],
					b = !!m.attachEvent,
					v = "attachEvent",
					_ = "addEventListener",
					w = b ? v : _;
					t(m, "mousedown", function (t, e) {
						for (var r, n = 0; e && (r = e.tagName) && n < 5; ) {
							if ("A" == r || "AREA" == r) {
								p(e);
								break
							}
							if ("BODY" == r || "HTML" == r)
								break;
							e = e.parentNode,
							n++
						}
					}),
					a(function () {
						for (var t, a, o = document.getElementsByTagName("iframe"), c = 0; c < o.length; c++) {
							t = i(o[c], "mmsrc"),
							a = i(o[c], "mmworked");
							var p = d(o[c]),
							f = [p.a || "0", p.b || "0", p.c || "0", p.d || "0", p.e || "0"].join(".");
							t && !a ? (u && (f = [p.a || "0", p.b || "0", p.c || "0", p.d || "0"].join("."), f = e() + "_" + f), o[c].src = r(n(t), f), o[c].setAttribute("mmworked", "mmworked")) : o[c].setAttribute(g, f)
						}
					})
				}
			}
			()
		}
	]);
