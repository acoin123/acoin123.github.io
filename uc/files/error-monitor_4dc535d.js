!function(){"use strict";function r(r){return"[object Function]"===Object.prototype.toString.call(r)}var e=window.onerror;window.onerror=function(n,t,o){var a=n.split("\n"),i="";a.length>1&&(i=a[1].substring("moduleId: ".length));var c=a[0];if(c&&document.title&&!(c.indexOf("Script error.")>-1)){if(c.indexOf("failed to require")>-1)c="failed to require";else{if(c.indexOf("getExtractedNovelData")>-1)return;c.indexOf("DOM Exception 22")>-1?localStorage.clear():c.indexOf("Uncaught ReferenceError: androidCallback")>-1&&(c="androidCallback")}try{var d=document.title,l=["bid","fr","prov","city","ver","isp","btype","lang","source"],f={},p=location.search||"?";p=p.substring(1,p.length),p&&p.split("&").forEach(function(r){var e,n=l.length;for(e=0;n>e;e++){var t=l[e];if(0===r.indexOf(t+"=")){r=r.split("="),f[t]=r[1];break}}});var s=navigator.userAgent,u=s.match(/(Android)\s+([\d.]+)/),v=!s.match(/(iPad).*OS\s([\d_]+)/)&&s.match(/(iPhone\sOS)\s([\d_]+)/),g="unknown";u?g=u[2].replace(/_/g,"."):v&&(g=v[2].replace(/_/g,"."));var h={uc_param_str:"dnfrcpventpf",lt:"error",er_moid:i,er_ct:encodeURIComponent(c),er_line:o,er_script:encodeURIComponent(t),er_osver:g,_tm:+Date.now(),pg:d,url:encodeURIComponent(location.href)};for(var m in f)f.hasOwnProperty(m)&&(h[m]=f[m]);var O=[];for(var _ in h)h.hasOwnProperty(_)&&O.push(_+"="+h[_]);O=O.join("&");var b="http://track.uc.cn:9080/collect?appid=00d7ca317d9a&",w=new Image;if(w.src=b+O,r(e))return e(n,t,o)}catch(x){}}}}();