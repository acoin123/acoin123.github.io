"use strict";
function callUc() {
	var e = new RegExp(/source=cb_\w+/g);
	e.test(window.location.href) && callUcbrowser(window.location.href)
}
function callUcbrowser(e) {
	var t = lego.options.ucParams || {};
	if (!t.fr || "" === t.fr) {
		var n = document,
		i = n.createElement("iframe");
		i.style.display = "none",
		i.src = window.navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/) || window.navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? "ucbrowser://" + e : "ucweb://|" + e,
		i.src += i.src.indexOf("?") < 0 ? "?fromCallUc=true" : "&fromCallUc=true",
		n.head.appendChild(i)
	}
}
function initUT(e) {
	function t(e) {
		var t = "";
		for (var n in e)
			t += n + "=" + e[n] + "&";
		return t.slice(0, -1)
	}
	var n = document.createElement("script");
	n.type = "text/javascript",
	n.async = !0,
	n.id = "beacon-aplus",
	n.src = "./files/aplus_wap.js",
	n.setAttribute("frontPlugins", "aplus_plugin_ucdayu/1.0.12/bridge.js"),
	e && "object" == typeof e && n.setAttribute("exparams", t(e)),
	window.Goldlog.init(e);
	var i = window.goldlog_queue || (window.goldlog_queue = []);
	i.push({
		action: "goldlog.aplus_pubsub.subscribe",
		arguments: ["goldlogReady", function () {
				initBannerExp("li", "data-ut-exp")
			}
		]
	}),
	document.body.insertBefore(n, document.body.firstChild)
}
function initBannerExp(e, t) {
	function n(e) {
		if (!e.getBoundingClientRect)
			return !1;
		var t = e.getBoundingClientRect(),
		n = t.height,
		i = t.width,
		o = t.top,
		r = t.left,
		a = t.bottom,
		d = t.right,
		n = t.height,
		i = t.width,
		c = window.innerWidth,
		l = window.innerHeight;
		return i && n ? a > 0 && l > o && d > 0 && c > r : !1
	}
	function i() {
		for (var n = document.getElementsByTagName(e), i = [], o = n.length, r = o - 1; r >= 0; r--) {
			var a = n[r];
			a.getAttribute(t) && i.unshift(a)
		}
		return i
	}
	function o() {
		for (var e = i(), t = e.length, o = 0; t > o; o++) {
			var r = e[o];
			if (!r.isAppeared && n(r) && window.Goldlog) {
				r.isAppeared = !0,
				r.spmd = "ad_" + (o + 1);
				var a = r.querySelector("a"),
				d = a && a.href || "",
				c = a && a.title || "";
				r.logParams = {
					ext: d,
					site_name: c,
					arg1_h5: "onlinedh_ad",
					spm: ["ad", r.spmd]
				},
				window.Goldlog.exp("/uc_cn.onlinedh.event", r.logParams)
			}
		}
	}
	function r() {
		var e = document.body.querySelectorAll(".timeBanner .banner_item a"),
		t = [];
		return [].forEach.call(e, function (e) {
			var n = e.getBoundingClientRect();
			n.width && n.height && t.push(e)
		}),
		[].forEach.call(t, function (e, t) {
			e.setAttribute("data-spm", "dad_" + (t + 1))
		}),
		!0
	}
	function a() {
		window.RecorrectAdsIdx || (window.RecorrectAdsIdx = r());
		var e = this;
		if (window.Goldlog) {
			var t = e.getAttribute("data-spm").slice(1),
			n = {
				ext: e.href,
				site_name: e.title,
				arg1_h5: "onlinedh_ad",
				spm: ["ad", t]
			};
			window.Goldlog.click("/uc_cn.onlinedh.event", n)
		}
	}
	function d() {
		if (!window.RegisteredAdClick) {
			window.RegisteredAdClick = !0;
			var e = document.body.querySelectorAll(".timeBanner .banner_item a");
			[].forEach.call(e, function (e, t) {
				e.setAttribute("data-spm", "dad_" + (t + 1)),
				e.addEventListener("click", a, !1)
			})
		}
	}
	var e = e || "li",
	t = t || "data-ut-exp";
	"complete" === document.readyState ? (o(), d()) : window.addEventListener("load", function () {
		o(),
		d()
	}),
	window.addEventListener("scroll", function () {
		clearTimeout(window.scrollTimer),
		window.scrollTimer = setTimeout(function () {
				o()
			}, 100)
	})
}
callUc();
