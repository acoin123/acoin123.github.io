lego.define("u/exposure_stat/exposure_stat.js",function(t,o,e){"use strict";var n=t("c/util/util.js");e.exports=function(){var t=[],o=window.innerHeight;n.addEvent(window,"load",function(){Array.prototype.slice.apply(n.domFind(".js-exposureStat")).forEach(function(o){"BODY"===o.parentNode.tagName&&t.push({id:o.getAttribute("id"),offset:o.offsetTop})});var e=n.throttle(function(){t.forEach(function(t){window.scrollY>t.offset-o/2&&window.scrollY<t.offset&&setTimeout(function(){window.scrollY>t.offset-o&&window.scrollY<t.offset&&window.waStat.eventStat({section:t.id,op:"gundong",position:"",desc:""})},2e3)})},100);n.addEvent(window,"scroll",e)})},e.exports()},!0);