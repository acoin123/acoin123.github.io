(function (win, doc, s, url, ua, node, n) {
	win[ua] = win[ua] || function () {
		(win[ua].q = win[ua].q || []).push(arguments);
	};
	if (win.performance) {
		node = doc.createElement(s);
		n = doc.getElementsByTagName(s)[0];
		node.async = 1;
		node.src = url;
		n.parentNode.insertBefore(node, n);
	}
})(window, document, 'script', 'http://bench.uc.cn/performance.js', 'ua');
window.ua('app', 'uae215');
window.ua('path', 'hao');
window.ua('percent', 50);
