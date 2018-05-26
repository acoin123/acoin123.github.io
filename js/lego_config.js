lego.config({
	"legoCode": "online3",
	"urlPattern": "http://image.uc.cn/s/uae/g/06/%s",
	"combo": true,
	"comboPattern": "http://image.uc.cn/e/uaeext/m;06/;%s",
	"alias": {
		"c/util/util.js": "98f3a6d",
		"c/fingerprint/fp.js": "ed7b582",
		"c/fingerprint/fingerprint.js": "254be7d",
		"c/share_mask/share_mask.js": "1a4020b",
		"c/version/version.js": "7c8ad43",
		"c/share/share.js": "93c2dc1",
		"u/config/online_time_stat.js": "4a023fd",
		"u/config/config.js": "d63420b",
		"u/funny_banner/funny_banner.styl": "6b2d9f5",
		"u/portalsite/portalsite.js": "9fe2395",
		"u/linklist/linklist.styl": "f4764af",
		"u/portalsite/portalsite.styl": "58000a3",
		"c/storage/storage.js": "d456945",
		"c/promise/es6-promise.js": "20fd446",
		"c/handlers/handlers.js": "7db2afd",
		"c/promise/promise.js": "965af4a",
		"c/net/net.js": "9ce8128",
		"c/model/model.js": "34c4537",
		"c/visibility/visibility.js": "d674d55",
		"u/searchbar/searchbar.js": "1a91021",
		"u/searchbar/searchbar.styl": "61b4e49",
		"u/taglist/taglist.styl": "d41d8cd",
		"u/blocklist/blocklist.styl": "f260ba4",
		"u/maintitle/maintitle.styl": "aaf93b3",
		"u/iconlist/iconlist.styl": "a421b6d",
		"u/funnyday/funnyday.js": "5bf8c49",
		"u/funnyday/funnyday.styl": "2a16ba9",
		"u/backtop/backtop.js": "55661f8",
		"u/backtop/backtop.styl": "d41d8cd",
		"u/footer/footer.js": "aeed588",
		"u/footer/footer.styl": "539f0e9",
		"u/exposure_stat/exposure_stat.js": "f7ffd3d"
	}
});
try {
	lego.options.ucParams = {};
} catch (e) {
	lego.options.ucParams = {};
}

try {
	var weixinConfig = {
		"timestamp": "1527262043",
		"appId": "wx58c852f3fcaf4be0",
		"nonceStr": "3737b035-f92b-4dec-8799-d59f81d0da4b",
		"signature": "1625f3d1a857179ef140b2798ee11724bf200d46"
	};
} catch (e) {
	var weixinConfig = {};
}
"use strict";!function(){function n(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!==i?window.decodeURIComponent(i[2]):null}function e(n,e){var i,o="android",r="iphone";return n===o?i=o:n===r?i=r:/android|apad/i.test(e)?i=o:/ios|ipad|iphone/i.test(e)&&(i=r),i}function n(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),i=window.location.search.substr(1).match(e);return null!==i?window.decodeURIComponent(i[2]):null}function i(n){return/micromessenger/i.test(n)}function o(n){return n?-1===w.indexOf(n)?!1:!0:!1}function r(n){var e,i=n.match(/(iPhone|iPad)\s+?OS\s+?(\d+(_\d+)*)/i);return i&&(e=i[2].replace(/_/g,".")),e}function t(n,e){n=n||"",e=e||"",n=n.trim().split(".").map(function(n){return parseInt(n)}),e=e.trim().split(".").map(function(n){return parseInt(n)});var i;return i=n[0]>e[0]?1:n[0]===e[0]?n[1]>e[1]?1:n[1]===e[1]?n[2]>e[2]?1:n[2]===e[2]?0:-1:-1:-1}function a(n,e){return window.ucweb||window.ucbrowser||"android"===n||"iphone"===n||/ucbrowser|UCNewsApp/i.test(e)}function u(u){var w=lego.options.ucParams||{},c=window.navigator.userAgent;if(u=u||window.location.href,!a(w.fr,c)&&!i(c)&&!o(n("app"))&&1===n("__stay")){var p=document,s=p.createElement("iframe");s.style.display="none";var l,d=n("__apptype"),f=e(w.fr,c);l="iphone"===f?"ucnews"===d?"ucnews://":"ucbrowser://":"ucnews"===d?"ucnews://":"ucweb://";var m=l+u.replace(/^http(s)?:\/\//,"");m+=m.indexOf("?")<0?"?fromCallUc=true":"&fromCallUc=true","iphone"===f&&t(r(c),"9.0")>=0?console.log("iOS 9.0或以上暂时无法通过iframe调端"):(s.src=m,p.head.appendChild(s))}}var w=["webapp-wifi","webapp-third","nubiabro-iflow","webapp-huawei","feima","uc-ipad-web","uc-pc-tab-web","uc-pc-nav-web","uc-th-iflow","dandelion","huawei-iflow","sm-zzd-app","webapp","ucnews-iflow","uc-iflow","googleplay-iflow","meizunews-iflow","samsung-iflow","gdyd_navi-iflow","jjgg-wifi-iflow","ssrd_an-iflow","meizubrw-iflow"];u()}();