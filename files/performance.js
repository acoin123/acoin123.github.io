window.addEventListener("load",function(){"use strict";var n=window.performance.timing;if(!(0===n.requestStart||0===n.responseStart||0===n.responseEnd||n.responseEnd-n.responseStart<0||n.domContentLoadedEventEnd-n.navigationStart<0)){for(var e=n.domainLookupEnd-n.domainLookupStart,t=n.connectEnd-n.connectStart,r=n.responseStart-n.requestStart,o=n.responseEnd-n.responseStart,a=n.responseEnd-n.navigationStart,s=n.domContentLoadedEventEnd-n.navigationStart,i="https:"==document.location.protocol?" https://":" http://",c=[i+"bench.uc.cn/c?uc_param_str=ntnwcpfr","dns="+e,"conn="+t,"req="+r,"res="+o,"rt="+a,"intr="+s],p=window.ua,u=function(){for(var n,e=!0,t=0;t<p.q.length;t++){for(var r=p.q[t][0]+"=",o=1,a=c.length;a>o;o++)-1!=c[o].indexOf(r)&&(c.splice(o,1),a--);if("app"===p.q[t][0]||"path"===p.q[t][0])c.splice(1,0,Array.prototype.join.call(p.q[t],"="));else if("percent"===p.q[t][0])d()>p.q[t][1]&&(e=!1);else{if("send"===p.q[t][0]){p.q.splice(0,t+1);break}c.push(Array.prototype.join.call(p.q[t],"="))}}if(e){var s=c.join("&");try{n=new XMLHttpRequest}catch(i){n=new ActiveXObject("Microsoft.XMLHTTP")}n.open("GET",s,!0),n.send()}},d=function(){return 100*Math.random()},f=0;f<p.q.length;)"firstPageTime"===p.q[f][0]?(firstPageTime(),p.q.splice(f,1)):"send"===p.q[f][0]?(u(),f=0):f++;var l=function(){"firstPageTim"===arguments[0]?firstPageTime():"send"===arguments[0]?u():p.q.push(arguments)};l.q=p.q,window.ua=l;var h=function(n){-1!==n.indexOf("http://")?n=n.substr(7):-1!==n.indexOf("https://")&&(n=n.substr(8));var e=n.indexOf("/");return n=n.substr(e),encodeURIComponent(n)},m=function(n){var e=["http://bench.uc.cn/c?uc_param_str=ntnwfr"];return e.push("app="+n.app),n.path&&e.push("path="+n.path),n.msg&&e.push("err_msg="+n.msg),n.line&&e.push("err_line="+n.line),n.col&&e.push("err_col="+n.col),n.file&&e.push("err_file="+h(n.file)),n.stack&&e.push("err_type="+n.stack.name),n.custom_key&&e.push("err_custom_key="+n.custom_key),e.join("&")};setInterval(function(){if(window.uaJSTrscker)for(var n=window.uaJSTrscker,e=0;e<n.length;e++)!function(e){if(n[e].file){var t="uaJSImage_"+ +new Date,r=window[t]=new Image;r.onload=r.onerror=function(){window[t]=null};var o=m(n[e]);r.src=o,n.splice(e,1)}}(e),e--},5e3)}},!1);