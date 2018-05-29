/**
 * @providesModule LegoPageletLoader
 */
'use strict';
/*eslint no-underscore-dangle:1*/

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global) {
  var slice = Array.prototype.slice;
  var localStorage = global.localStorage;
  var proto = {};
  var lego = global.lego = create(proto);

  lego.version = '0.1.2-2';
  lego.options = {
    threshold: 5, // parallel load threshold (seconds)
    pageletPattern: null,
    urlPattern: null,
    comboPattern: null,
    combo: false,
    maxUrlLength: 2000
  };
  lego.cache = {};
  lego.pagelets = {};
  lego.quickling = {};
  lego.waiting = []; // pagelets waiting for load
  lego.loading = false; // pagelet loading

  /**
   * Mix obj to scrat.options
   * @param {object} obj
   */
  proto.config = function (obj) {
    var options = lego.options;
    merge(options, obj);

    // detect scrat=nocombo in location.search
    if (/\blego=([^&]+)/.test(location.search)) {
      each(RegExp.$1.split(','), function (o) {
        switch (o) {
          case 'nocombo':
            options.combo = false;
            break;
        }
      });
    }

    // 根据别名标识返回请求路经
    options.getAliasPath = function (id) {
      var legoCode = options.legoCode;
      var i = id.lastIndexOf('.');
      var ext = id.substring(i + 1);
      if (ext === 'styl' || ext === 'less') {
        ext = 'css';
      }
      var hash = options.alias[id];
      var path = 'lego/' + legoCode + '/' + id.substring(0, i) + '_' + hash + '.' + ext;
      return path;
    };
    return options;
  };

  function makeOnLoad(ids) {
    ids = ids.slice();
    return function () {
      each(ids, function (id) {
        var res = lego.cache[id];
        res.loaded = true;
        while (res.onload.length) {
          var onload = res.onload.shift();
          onload.call(res);
        }
      });
    };
  }

  /**
   * Load modules with specified keys
   * @param {string[]} keys 依赖资源的标识
   * @param {boolean} [combo]  是否使用combo
   * @param {function} onload   回调函数
   */
  proto._load = function (keys, combo, onload) {
    if (type(keys) === 'string') {
      keys = [keys];
    }
    if (type(combo) === 'function') {
      onload = combo;
    }
    if (type(combo) !== 'boolean') {
      combo = lego.options.combo;
    }

    keys = keys.slice();
    var i = 0,
        l = keys.length;
    while (i < l) {
      var id = keys[i];
      var res = lego.cache[id];
      if (!res) {
        res = lego.cache[id] = {
          id: id,
          loaded: false,
          type: proto._type(id),
          onload: []
        };
      }
      if (res.loaded) {
        keys.splice(i, 1);
        l--;
      } else {
        i++;
      }
    } // while
    if (!l) {
      return onload && onload();
    }

    function onResLoad() {
      if (--l === 0 && onload) {
        onload();
      }
    }

    var urlLength = 0;
    var paths = [];
    if (combo) {
      each(keys, function (key, j) {
        lego.cache[key].onload.push(onResLoad);
        var path = lego.options.getAliasPath(key);
        if (urlLength + path.length < lego.options.maxUrlLength) {
          urlLength += path.length;
          paths.push(path);
        } else {
          load(proto._genUrl(paths), makeOnLoad(keys));
          urlLength = path.length;
          paths = [path];
        }
        if (j === keys.length - 1) {
          load(proto._genUrl(paths), makeOnLoad(keys));
        }
      });
    } else {
      each(keys, function (key) {
        var _res = lego.cache[key];
        _res.onload.push(onResLoad);
        var path = lego.options.getAliasPath(key);
        load(proto._genUrl(path), function () {
          _res.loaded = true;
          while (_res.onload.length) {
            var f = _res.onload.shift();
            f.call(_res);
          }
        });
      });
    }
  };

  /**
   * Generate url from specified paths
   * @param {string[]} paths
   * @returns url
   */
  proto._genUrl = function (paths) {

    if (arguments.length > 1) {
      paths = slice.call(arguments);
    }
    if (type(paths) === 'string') {
      paths = [paths];
    }

    var options = lego.options;
    var url = paths.length > 1 && options.comboPattern || options.urlPattern;
    switch (type(url)) {
      case 'string':
        url = url.replace('%s', paths.join(';'));
        break;
      case 'function':
        url = url(paths);
        break;
      default:
        url = paths.join(';');
    }
    return url;
  };

  /**
   * Detect module type from specified id
   * @param {string} id
   * @returns {string} type - js|css
   */
  proto._type = function (id) {
    return (/\.css\.js$/i.test(id) ? 'css' : 'js'
    );
  };

  /**
   * Define a CSS module and append to document.head immediately
   * @param {string} id
   * @param {string} css
   */
  proto.defineCSS = function (id, css) {
    var module = lego.cache[id];
    if (!module) {
      module = lego.cache[id] = {
        id: id,
        loaded: true,
        type: 'css'
      };
    }

    var styleEl = document.querySelector('style[data-id="' + id + '"]');
    if (styleEl) {
      document.head.removeChild(styleEl);
    }

    styleEl = document.createElement('style');
    styleEl.setAttribute('data-id', id);
    document.head.appendChild(styleEl);
    styleEl.appendChild(document.createTextNode(css));
  };

  /**
   * Define a JS module with a factory function
   * @param {string} id
   * @param {function} factory
   * @param {boolean} main - if set to true, factory will be called everytime when required
   */
  proto.define = function (id, factory, main) {
    var module = lego.cache[id];
    if (!module) {
      module = lego.cache[id] = {
        id: id,
        loaded: true,
        type: 'js'
      };
    }
    if (main) {
      module.main = true;
    }
    //console.log('define', id, factory, main);
    module.factory = factory;
  };

  /**
   * Require another module in factory
   * @param {string} name
   * @param {Object} [pagelet]
   * @returns {*} module.exports
   */
  function require(id, pagelet) {
    /*eslint consistent-return: 1*/
    var module = lego.cache[id];
    if (!module) {
      throw new Error('failed to require "' + id + '", module not found');
    }
    if (module.type !== 'js') {
      console.warn('not a js module "', id, '"');
      return;
    }

    if (!module.exports || module.main) {
      if (type(module.factory) !== 'function') {
        throw new Error('failed to require "' + id + '", factory not found');
      }

      if (module.main && pagelet) {
        module.pagelet = pagelet;
        module.ref = pagelet.ref;
      }

      try {
        module.factory.call(module, require, module.exports = {}, module);
      } catch (e) {
        e.id = id;
        throw lego.traceback = e;
      }

      if (!module.main) {
        delete module.factory;
      }
    }
    return module.exports;
  }

  /**
   * Dequeue a task from waiting queue and run
   */
  function checkAndLoad() {
    if (lego.loading) {
      return;
    }
    var task = lego.waiting.shift();
    if (!task) {
      return;
    }

    if (task.toload && task.toload.length) {
      lego.loading = task;

      // parallel load threshold
      var tid = setTimeout(function () {
        lego.loading = false;
        checkAndLoad();
      }, (lego.options.threshold || 5) * 1000);

      proto._load(task.toload, function () {
        clearTimeout(tid);
        lego.loading = false;
        setTimeout(checkAndLoad, 0);
        each(task.onload, function (onload) {
          onload();
        });
      });
    } else {
      setTimeout(checkAndLoad, 0);
      each(task.onload, function (onload) {
        onload();
      });
    }
  }

  proto.onPageletArrive = function (data) {
    data.id = data.id || uuid();

    // check if id has already been token
    var script = document.querySelectorAll('[lego-id="' + data.id + '"]');
    if (script.length > 1) {
      script = script[1];
      script.setAttribute('lego-id', data.id = uuid());
    }

    var p = lego.pagelets[data.id] = new proto.Pagelet(data);

    // make sure running js after dom inserted
    var ready = 2;

    function onReady() {
      each(p.js, function (id) {
        require(id, p);
      });
    }

    p.loadCSS(function () {
      p.insertDOM(function () {
        ready -= 1;
        if (ready === 0) {
          onReady();
        }
      });
    });

    p.loadJS(function () {
      ready -= 1;
      if (ready === 0) {
        onReady();
      }
    });
    checkAndLoad();
  };

  /**
   * Pagelet constructor
   * @param {{
   *   id: string,
   *   code: string,
   *   css: string[],
   *   js: string[],
   *   alias: {},
   *   html: string,
   *   container: string,
   *   ref: Node
   * }} data
   */
  proto.Pagelet = function (data) {
    this.merge(data);
  };

  var pProto = proto.Pagelet.prototype;

  pProto.loadCSS = function (onload) {
    var self = this;
    debug('pagelet.loadCSS', '[' + self.id + ']', lego.waiting.slice());
    var last = lego.waiting.slice(-1)[0];
    if (last) {
      last.toload.push.apply(last.toload, self.css);
      if (onload) {
        last.onload.push(onload);
      }
    } else {
      lego.waiting.push({
        toload: self.css || [],
        onload: onload ? [onload] : []
      });
    }
  };

  pProto.insertDOM = function (onInserted) {
    debug('pagelet.insertDOM', '[' + this.id + ']', lego.waiting.slice());
    var script = document.querySelector('[lego-id="' + this.id + '"]');
    this.ref = [];

    if (this.html) {
      var container = document.querySelector(this.container);
      if (container) {
        container.innerHTML(this.html);
      } else if (script) {
        container = document.createElement('div');
        container.innerHTML(this.html);

        var fragment = document.createDocumentFragment();
        while (container.childNodes.length) {
          this.ref.push(fragment.appendChild(container.childNodes[0]));
        }
        document.body.insertBefore(fragment, script);
      }
    } else if (script) {
      while (script = script.previousSibling) {
        if (script.nodeType !== 1) {
          continue;
        }
        if (script.getAttribute('lego-id')) {
          break;
        }
        this.ref.unshift(script);
      }
    }

    if (onInserted) {
      onInserted();
    }
  };

  pProto.loadJS = function (onload) {
    var self = this;
    debug('pagelet.loadJS', '[' + self.id + ']', lego.waiting.slice());
    lego.waiting.push({
      toload: self.js || [],
      onload: onload ? [onload] : []
    });
  };

  pProto.merge = function (p) {

    merge(this, p);
  };

  /**
   * Load JS from specified url
   * @param {string} url
   * @param {function|Object} [onload|options]
   */
  function load(url, options) {
    if (type(options) === 'function') {
      options = { onload: options };
    }
    var head = document.head;
    var node = document.createElement('script');
    var tid = setTimeout(onerror, (options.timeout || 15) * 1000);

    node.type = 'text/javascript';
    node.async = 'async';
    node.src = url;
    node.onload = node.onreadystatechange = function () {
      if (node && (!node.readyState || /loaded|complete/.test(node.readyState))) {
        clearTimeout(tid);
        node.onload = node.onreadystatechange = null;
        if (head && node.parentNode) {
          head.removeChild(node);
        }
        if (options.onload) {
          options.onload();
        }
        node = null;
      }
    };

    node.onerror = function onerror() {
      clearTimeout(tid);
      throw new Error('error loading url: ' + url);
    };

    head.appendChild(node);
  }

  function type(obj) {
    /*jshint eqnull: true*/
    var t;
    if (obj == null) {
      t = String(obj);
    } else {
      t = Object.prototype.toString.call(obj).toLowerCase();
      t = t.substring(8, t.length - 1);
    }
    return t;
  }

  /**
   * 在对象obj上应用iterator迭代器进行迭代, 迭代时，可以指定context作为上下文;如果不指定，则上下文为obj
   * @param obj
   * @param iterator
   * @param context
   */
  function each(obj, iterator, context) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
      return;
    }

    var i,
        l,
        t = type(obj);
    context = context || obj;
    if (t === 'array' || t === 'arguments' || t === 'nodelist') {
      for (i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === false) {
          return;
        }
      }
    } else {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (iterator.call(context, obj[i], i, obj) === false) {
            return;
          }
        }
      }
    }
  }

  function merge(to) {
    /*eslint no-shadow: 1*/
    to = to || {};
    var from = slice.call(arguments, 1);
    each(from, function (o) {
      each(o, function (v, k) {
        switch (type(v)) {
          case 'object':
            if (to[k]) {
              merge(to[k], v);
            } else {
              to[k] = v;
            }
            break;
          case 'array':
            if (to[k]) {
              // concat and drop duplicate values (for pagelet merge)
              var tmp = {};
              each(to[k], function (v) {
                tmp[v] = 1;
              });
              each(v, function (v) {
                tmp[v] = 1;
              });
              to[k] = [];
              each(tmp, function (_, v) {
                to[k].push(v);
              });
            } else {
              to[k] = v;
            }
            break;
          default:
            to[k] = v;
        }
      });
    });
    return to;
  }

  function create(protoObj) {
    function Dummy() {}

    Dummy.prototype = protoObj;
    return new Dummy();
  }

  // from jqMobi
  function uuid() {
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  var _modCache;

  function debug() {
    var flag = (localStorage || {}).debug;
    var args = slice.call(arguments);
    var style = 'color: #bada55';
    var mod = args.shift();
    var re = new RegExp(mod.replace(/[.\/\\]/g, function (m) {
      return '\\' + m;
    }));
    mod = '%c' + mod;
    if (flag && flag === '*' || re.test(flag)) {
      if (_modCache !== mod) {
        console.groupEnd(_modCache, style);
        console.group(_modCache = mod, style);
      }
      if (/string|number|boolean/.test(type(args[0]))) {
        args[0] = '%c' + args[0];
        args.splice(1, 0, style);
      }
      console.log.apply(console, args);
    }
  }
})(window);