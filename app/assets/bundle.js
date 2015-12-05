/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * main.js
	 *
	 * the entry of the whole app
	 */


	//load css
	__webpack_require__(2);

	//load deps
	var Backbone = __webpack_require__(6);
	var util = __webpack_require__(9);

	//load view
	var nav_view = __webpack_require__(10);

	//load routers
	var SiteRouter = __webpack_require__(11);

	//load model
	var nav_model = __webpack_require__(28);

	//initialize nav model
	var navModel = new nav_model({currentPage:" ",hasPrev:false});

	//initialize router
	var siteRouter = new SiteRouter({container:$("#pageview"),nav_model:navModel});

	//initialize nav view
	var navView = new nav_view({model:navModel,router:siteRouter,});
	$("#nav").append( navView.render().el );

	//initialize history pushstate
	Backbone.history.start({
	    pushState: !0
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./main.min.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./main.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".space{font-size:0}.va_item{display:inline-block;vertical-align:middle}.viewport{width:100%;box-sizing:border-box;min-height:100%;position:relative;padding:1.555556rem 0 3.444444rem 0}.tip{width:9.111111rem;height:auto;margin:.444444rem auto 0}.tip .item{width:100%;height:7.388889rem;margin-bottom:.444444rem;box-shadow:0 .055556rem .055556rem rgba(0,0,0,0.25)}.tip .item .img{width:100%;height:3.888889rem}.tip .item img{width:100%;height:100%}.tip .item .title{box-sizing:border-box;width:100%;padding:.444444rem .444444rem .5rem;line-height:.777778rem}[data-dpr=\"1\"] .tip .item .title{font-size:20px}[data-dpr=\"2\"] .tip .item .title{font-size:40px}[data-dpr=\"3\"] .tip .item .title{font-size:60px}.tip .item .title .tip_link{color:#333}.tip .item .bottom{width:8.222222rem;margin:0 auto}.tip .item .bottom .btns{display:inline-block;width:70%;text-align:left;vertical-align:top}.tip .item .bottom .date{display:inline-block;width:30%;text-align:right;font-size:.333333rem;color:#999;vertical-align:top;height:.555556rem;line-height:.555556rem}.tip .item .bottom .btn{display:inline-block;width:1.777778rem;height:.555556rem;background-color:#eeab5d;vertical-align:top;text-align:center;font-size:.333333rem;color:#fff;line-height:.555556rem}.tip .item .bottom .views{margin-right:.305556rem}.tip .item .icon{display:inline-block;vertical-align:middle;margin-right:.194444rem}[data-dpr=\"1\"] .tip .item .views_icon{width:20px;height:10px}[data-dpr=\"2\"] .tip .item .views_icon{width:40px;height:20px}[data-dpr=\"3\"] .tip .item .views_icon{width:60px;height:30px}[data-dpr=\"1\"] .tip .item .likes_icon{width:15px;height:13px}[data-dpr=\"2\"] .tip .item .likes_icon{width:30px;height:26px}[data-dpr=\"3\"] .tip .item .likes_icon{width:45px;height:39px}.tip .item .icon use{fill:#fff}.tip .item .data{height:100%;display:inline-block;vertical-align:middle}svg g{fill:inherit}.space{font-size:0}.va_item{display:inline-block;vertical-align:middle}.search_view{background-color:rgba(255,255,255,0.8)}.search_view .container{width:9.111111rem;margin:0 auto}.search_view .search_box{width:100%;padding-top:.444444rem}.search_view .search_input{display:inline-block;height:1.111111rem;width:6.333333rem;vertical-align:top;border:.055556rem solid #eeab5d;border-right:0;box-sizing:border-box;padding-left:.277778rem;color:#333}[data-dpr=\"1\"] .search_view .search_input{font-size:16px}[data-dpr=\"2\"] .search_view .search_input{font-size:32px}[data-dpr=\"3\"] .search_view .search_input{font-size:48px}.search_view .search_btn{display:inline-block;height:1.111111rem;background-color:#eeab5d;width:2.777778rem;line-height:1.111111rem;vertical-align:top;color:#fff}[data-dpr=\"1\"] .search_view .search_btn{font-size:16px;border-radius:0 2px 2px 0}[data-dpr=\"2\"] .search_view .search_btn{font-size:32px;border-radius:0 4px 4px 0}[data-dpr=\"3\"] .search_view .search_btn{font-size:48px;border-radius:0 6px 6px 0}.search_view .hot{width:100%}.search_view .hot .title{padding:.388889rem 0;color:#999}[data-dpr=\"1\"] .search_view .hot .title{font-size:16px}[data-dpr=\"2\"] .search_view .hot .title{font-size:32px}[data-dpr=\"3\"] .search_view .hot .title{font-size:48px}.search_view .hot .items{width:100%}.search_view .hot .item{display:inline-block;height:.555556rem;line-height:.555556rem;background-color:#cdcdcd;padding:0 .083333rem;color:#fff;margin-bottom:.444444rem;margin-right:.166667rem}[data-dpr=\"1\"] .search_view .hot .item{font-size:14px;border-radius:2px}[data-dpr=\"2\"] .search_view .hot .item{font-size:28px;border-radius:4px}[data-dpr=\"3\"] .search_view .hot .item{font-size:42px;border-radius:6px}.space{font-size:0}.va_item{display:inline-block;vertical-align:middle}.course_view .info{width:100%;height:5.416667rem;position:relative;color:#fff}.course_view .info .overlay{top:0;left:0;width:100%;height:5.416667rem;position:absolute}.course_view .info .top{z-index:3}.course_view .info .mask{z-index:2;background-color:rgba(238,171,93,0.84)}.course_view .info .basic{width:8.277778rem;margin:0 auto}.course_view .info .title{line-height:.777778rem;padding:.444444rem 0;min-height:1.555556rem}[data-dpr=\"1\"] .course_view .info .title{font-size:20px}[data-dpr=\"2\"] .course_view .info .title{font-size:40px}[data-dpr=\"3\"] .course_view .info .title{font-size:60px}.course_view .info .others{line-height:.666667rem}[data-dpr=\"1\"] .course_view .info .others{font-size:14px}[data-dpr=\"2\"] .course_view .info .others{font-size:28px}[data-dpr=\"3\"] .course_view .info .others{font-size:42px}.course_view .info .btns{width:9.222222rem;margin:0 auto;padding:.166667rem 0 .444444rem 0}.course_view .info .btn{display:inline-block;vertical-align:top;line-height:.944444rem;width:4.277778rem;height:.944444rem;text-align:center}[data-dpr=\"1\"] .course_view .info .btn{border:1px solid #fff;border-radius:1px}[data-dpr=\"2\"] .course_view .info .btn{border:2px solid #fff;border-radius:2px}[data-dpr=\"3\"] .course_view .info .btn{border:3px solid #fff;border-radius:3px}.course_view .info .btn_text{display:inline-block;vertical-align:middle}[data-dpr=\"1\"] .course_view .info .btn_text{font-size:14px}[data-dpr=\"2\"] .course_view .info .btn_text{font-size:28px}[data-dpr=\"3\"] .course_view .info .btn_text{font-size:42px}.course_view .info .like{margin-right:.541667rem}.course_view .info .w_comment svg,.course_view .info .like svg{display:inline-block;vertical-align:middle;width:.472222rem;height:.388889rem}.course_view .info .w_comment svg{margin-right:.222222rem}.course_view .info .like svg{margin-right:.388889rem}.course_view .info .w_comment use,.course_view .info .like use{fill:none}.course_view .info g#outline{stroke:#fff}.course_view .comments_title{width:9.194444rem;margin:0 auto;padding:.333333rem 0 .444444rem 0;color:#666}[data-dpr=\"1\"] .course_view .comments_title{font-size:16px;border-bottom:1px solid #ececec}[data-dpr=\"2\"] .course_view .comments_title{font-size:32px;border-bottom:2px solid #ececec}[data-dpr=\"3\"] .course_view .comments_title{font-size:48px;border-bottom:3px solid #ececec}.course_view .comments{width:9.194444rem;margin:0 auto}.course_view .comments .no_comments{width:7.111111rem;margin:0 auto;text-align:left;color:#999;padding-top:.416667rem}[data-dpr=\"1\"] .course_view .comments .no_comments{font-size:14px}[data-dpr=\"2\"] .course_view .comments .no_comments{font-size:28px}[data-dpr=\"3\"] .course_view .comments .no_comments{font-size:42px}.course_view .comments li{list-style:none;width:100%;padding-top:.555556rem;padding-bottom:.472222rem}[data-dpr=\"1\"] .course_view .comments li{border-bottom:1px solid #ececec}[data-dpr=\"2\"] .course_view .comments li{border-bottom:2px solid #ececec}[data-dpr=\"3\"] .course_view .comments li{border-bottom:3px solid #ececec}.course_view .comments .avatar{display:inline-block;height:1.111111rem;width:1.111111rem;border-radius:50%;margin-right:.416667rem;overflow:hidden;vertical-align:top}.course_view .comments .avatar img{width:100%;height:auto}.course_view .comments .content{vertical-align:top;display:inline-block;width:7.666667rem}[data-dpr=\"1\"] .course_view .comments .content{font-size:14px}[data-dpr=\"2\"] .course_view .comments .content{font-size:28px}[data-dpr=\"3\"] .course_view .comments .content{font-size:42px}.course_view .comments .name,.course_view .comments .time{color:#999;line-height:.444444rem}[data-dpr=\"1\"] .course_view .comments .name,[data-dpr=\"1\"] .course_view .comments .time{font-size:10px}[data-dpr=\"2\"] .course_view .comments .name,[data-dpr=\"2\"] .course_view .comments .time{font-size:20px}[data-dpr=\"3\"] .course_view .comments .name,[data-dpr=\"3\"] .course_view .comments .time{font-size:30px}.course_view .comments .like{margin-top:.444444rem;color:#999;text-align:right;line-height:.333333rem}[data-dpr=\"1\"] .course_view .comments .like{font-size:12px}[data-dpr=\"2\"] .course_view .comments .like{font-size:24px}[data-dpr=\"3\"] .course_view .comments .like{font-size:36px}.course_view .comments .like_icon{display:inline-block;height:.333333rem;width:.361111rem;vertical-align:middle;margin-right:.166667rem}.course_view .comments .like_icon use{fill:#999}.course_view .more_comments{margin:.472222rem auto;width:4.277778rem;height:1.055556rem;line-height:1.055556rem;text-align:center;font-size:.444444rem;color:#eeab5d}[data-dpr=\"1\"] .course_view .more_comments{border:1px solid #eeab5d;border-radius:2px}[data-dpr=\"2\"] .course_view .more_comments{border:2px solid #eeab5d;border-radius:4px}[data-dpr=\"3\"] .course_view .more_comments{border:3px solid #eeab5d;border-radius:6px}.space{font-size:0}.va_item{display:inline-block;vertical-align:middle}#nav{width:100%;height:1.555556rem;position:fixed;top:0;left:0;line-height:1.555556rem;box-shadow:0 0 .111111rem rgba(0,0,0,0.12);background-color:#fff}#nav .container{width:9.111111rem;margin:0 auto}#nav .title_set{display:inline-block;height:1.555556rem;text-align:left;width:6.694444rem}#nav .icon_set{display:inline-block;height:1.555556rem;width:2.416667rem;text-align:right}#nav .logo{height:.888889rem;width:1.972222rem}#nav .title_l{padding-left:.444444rem;vertical-align:middle}[data-dpr=\"1\"] #nav .title_l{line-height:20px;font-size:20px}[data-dpr=\"2\"] #nav .title_l{line-height:40px;font-size:40px}[data-dpr=\"3\"] #nav .title_l{line-height:60px;font-size:60px}#nav .title_s{padding-left:.194444rem;margin-left:.194444rem;vertical-align:-0.194444rem}[data-dpr=\"1\"] #nav .title_s{border-left:1px solid #30b38a;line-height:16px;font-size:16px}[data-dpr=\"2\"] #nav .title_s{border-left:2px solid #30b38a;line-height:32px;font-size:32px}[data-dpr=\"3\"] #nav .title_s{border-left:3px solid #30b38a;line-height:48px;font-size:48px}#nav .title{display:inline-block;color:#30b38a}#nav .logo use{fill:#30b38a}#nav .search svg,#nav .user svg{display:inline-block;height:100%;width:100%;pointer-events:none}#nav .search{margin-right:.444444rem}#nav .search,#nav .user,#nav .back{height:.944444rem;width:.944444rem}#nav .nav_icon use{fill:none}#nav .nav_icon{display:inline-block;vertical-align:middle}#footer{width:100%;height:3.444444rem;background-color:#666;position:absolute;bottom:0;left:0;text-align:center}.space{font-size:0}.va_item{display:inline-block;vertical-align:middle}.main_tab{width:100%;height:1.333333rem;background-color:#ececec;line-height:1.333333rem;text-align:left}.main_tab .tab{display:inline-block;width:2.222222rem;height:100%;text-align:center;color:#666}[data-dpr=\"1\"] .main_tab .tab{font-size:14px}[data-dpr=\"2\"] .main_tab .tab{font-size:28px}[data-dpr=\"3\"] .main_tab .tab{font-size:42px}.main_tab .tab .tab_text{height:1.222222rem;line-height:1.333333rem;display:inline-block;border-bottom:.111111rem solid #ececec}.main_tab .tab .current{border-bottom:.111111rem solid #eeab5d}.main_tab .container{width:9.111111rem;margin:0 auto}body{height:100%;font-family:\"Helvetica\",\"PingFang SC\",\"STHeiti\",\"sans-serif\";line-height:1;-webkit-tap-highlight-color:transparent}html,body,button,form,textarea,input,p,h1,h2,h3,h4,h5,h6{margin:0;padding:0}input,button,textarea{border:0;outline:0;box-sizing:content-box}html{height:100%}a{text-decoration:none}textarea{display:block}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.2.3

	//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self == self && self) ||
	            (typeof global == 'object' && global.global == global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(8), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch(e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	}(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.2.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	        context: context,
	        ctx: obj,
	        listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo =  function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off =  function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	        context: context,
	        listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening =  function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }
	    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    if (_.size(events)) return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once =  function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    return this.on(events, void 0, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce =  function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger =  function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, cb, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.defaults({validate: true}, options));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1 };

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed) this.trigger('update', this, options);
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.defaults({}, options, setOptions);
	      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model;
	      for (var i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
	          return model !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
	      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp, callbackOpts) {
	        if (wait) collection.add(model, callbackOpts);
	        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function (attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed.length ? removed : false;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function (model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (event === 'change') {
	        var prevId = this.modelId(model.previousAttributes());
	        var id = this.modelId(model.attributes);
	        if (prevId !== id) {
	          if (prevId != null) delete this._byId[prevId];
	          if (id != null) this._byId[id] = model;
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
	      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var root = path.slice(0, this.root.length - 1) + '/';
	      return root === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var root = this.root.slice(0, -1) || '/';
	          this.location.replace(root + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function (eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function (eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var root = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        root = root.slice(0, -1) || '/';
	      }
	      var url = root + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent` constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* Zepto v1.1.4-88-gaadd687 - zepto event ajax form callbacks deferred - zeptojs.com/license */
	var Zepto=function(){function D(t){return null==t?String(t):C[T.call(t)]||"object"}function L(t){return"function"==D(t)}function Z(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==D(t)}function M(t){return F(t)&&!Z(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function q(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function W(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function H(t){return t in c?c[t]:c[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function I(t,e){return"number"!=typeof e||l[W(t)]?e:e+"px"}function _(t){var e,n;return f[t]||(e=u.createElement(t),u.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),f[t]=n),f[t]}function B(t){return"children"in t?a.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function V(t,e){var n,i=t?t.length:0;for(n=0;i>n;n++)this[n]=t[n];this.length=i,this.selector=e||""}function U(n,i,r){for(e in i)r&&(M(i[e])||k(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),k(i[e])&&!k(n[e])&&(n[e]=[]),U(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function J(t,e){return null==e?n(t):n(t).filter(e)}function X(t,e,n,i){return L(e)?e.call(t,n,i):e}function Y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function G(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function K(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function Q(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)Q(t.childNodes[n],e)}var t,e,n,i,N,O,r=[],o=r.concat,s=r.filter,a=r.slice,u=window.document,f={},c={},l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},h=/^\s*<(\w+|!)[^>]*>/,p=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,d=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/^(?:body|html)$/i,g=/([A-Z])/g,v=["val","css","html","text","data","width","height","offset"],y=["after","prepend","before","append"],x=u.createElement("table"),b=u.createElement("tr"),w={tr:u.createElement("tbody"),tbody:x,thead:x,tfoot:x,td:b,th:b,"*":u.createElement("div")},E=/complete|loaded|interactive/,j=/^[\w-]*$/,C={},T=C.toString,S={},P=u.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},k=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=P).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&P.removeChild(t),i},N=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var o,s,f;return p.test(e)&&(o=n(u.createElement(RegExp.$1))),o||(e.replace&&(e=e.replace(d,"<$1></$2>")),i===t&&(i=h.test(e)&&RegExp.$1),i in w||(i="*"),f=w[i],f.innerHTML=""+e,o=n.each(a.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(s=n(o),n.each(r,function(t,e){v.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},S.Z=function(t,e){return new V(t,e)},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&h.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(u,e)}else{if(L(e))return n(u).ready(e);if(S.isZ(e))return e;if(k(e))r=q(e);else if(F(e))r=[e],e=null;else if(h.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(u,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=a.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){U(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=j.test(o);return t.getElementById&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:a.call(s&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=u.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=D,n.isFunction=L,n.isWindow=Z,n.isArray=k,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=N,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.noop=function(){},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){C["[object "+e+"]"]=e.toLowerCase()}),n.fn={constructor:S.Z,length:0,forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,splice:r.splice,indexOf:r.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=S.isZ(e)?e.toArray():e;return o.apply(S.isZ(this)?this.toArray():this,n)},map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(a.apply(this,arguments))},ready:function(t){return E.test(u.readyState)&&u.body?t(n):u.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?a.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return L(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(O(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if(L(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&L(e.item)?a.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return J(e,t)},parent:function(t){return J(O(this.pluck("parentNode")),t)},children:function(t){return J(this.map(function(){return B(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||a.call(this.childNodes)})},siblings:function(t){return J(this.map(function(t,e){return s.call(B(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=_(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=L(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=L(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(X(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=X(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)Y(this,e,n[e]);else Y(this,n,X(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){Y(this,t)},this)})},prop:function(t,e){return t=A[t]||t,1 in arguments?this.each(function(n){this[t]=X(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(g,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?K(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=X(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=X(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;if(!n.contains(u.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[N(t)]||r.getPropertyValue(t);if(k(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[N(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==D(t))i||0===i?a=W(t)+":"+I(t,i):this.each(function(){this.style.removeProperty(W(t))});else for(e in t)t[e]||0===t[e]?a+=W(e)+":"+I(e,t[e])+";":this.each(function(){this.style.removeProperty(W(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(G(t))},H(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=G(this),o=X(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&G(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return G(this,"");i=G(this),X(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(H(t)," ")}),G(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=X(this,e,r,G(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=m.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||u.body;t&&!m.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?Z(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,X(this,r,t,s[e]()))})}}),y.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=D(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null;var f=n.contains(u.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,a),f&&Q(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=V.prototype=n.fn,S.uniq=O,S.deserializeValue=K,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||r.test(t.ns))&&(!n||l(t.fn)===l(n))&&(!i||t.sel==i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function C(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(u===n||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(C(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=C(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function C(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,u,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),(u=o.url.indexOf("#"))>-1&&(o.url=o.url.slice(0,u)),j(o);var f=o.dataType,h=/\?.+=\?/.test(o.url);if(h&&(f="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=f&&"jsonp"!=f)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==f)return h||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var N,p=o.accepts[f],m={},x=function(t,e){m[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,T=o.xhr(),S=T.setRequestHeader;if(s&&s.promise(T),o.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",p||"*/*"),(p=o.mimeType||p)&&(p.indexOf(",")>-1&&(p=p.split(",",2)[0]),T.overrideMimeType&&T.overrideMimeType(p)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&x("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)x(r,o.headers[r]);if(T.setRequestHeader=x,T.onreadystatechange=function(){if(4==T.readyState){T.onreadystatechange=b,clearTimeout(N);var e,n=!1;if(T.status>=200&&T.status<300||304==T.status||0==T.status&&"file:"==C){f=f||w(o.mimeType||T.getResponseHeader("content-type")),e=T.responseText;try{"script"==f?(1,eval)(e):"xml"==f?e=T.responseXML:"json"==f&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",T,o,s):v(e,T,o,s)}else y(T.statusText||null,T.status?"error":"abort",T,o,s)}},g(T,o)===!1)return T.abort(),y(null,"abort",T,o,s),T;if(o.xhrFields)for(r in o.xhrFields)T[r]=o.xhrFields[r];var O="async"in o?o.async:!0;T.open(o.type,o.url,O,o.username,o.password);for(r in m)S.apply(T,m[r]);return o.timeout>0&&(N=setTimeout(function(){T.onreadystatechange=b,T.abort(),y(null,"timeout",T,o,s)},o.timeout)),T.send(o.data?o.data:null),T},t.get=function(){return t.ajax(C.apply(null,arguments))},t.post=function(){var e=C.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=C.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=C(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},S(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = Zepto

/***/ },
/* 9 */
/***/ function(module, exports) {

	var util = (function(){
		var bind_navigate = function(ele,router){
			console.log("bind",ele,router)
			ele.on("click",function(e){
				console.log("click!!")
				e.preventDefault();
				router.navigate($(e.target).data("link"),{trigger: true});
			})
		}
		return {
			bind_navigate : bind_navigate
		}
	})();

	module.exports = util;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var nav_view = Backbone.View.extend({
		className:"container space",
	    template: _.template($("#nav_template").html()),
	    initialize:function(options){
	    	this.model.bind("change",_.bind(this.render,this));
			this.router = options.router;
	    },
	    events:{
			"click .link":"onLinkClicked",
			"click .back":"onBackClicked"
	    },
	    onLinkClicked:function(e){
			this.router.navigate($(e.target).data("link"),{trigger: true});
	    },
	    onBackClicked:function(){
			window.history.back();
	    },
	    render: function() {
	        this.$el.html(this.template( this.model.toJSON() ));
	        return this;
	    }
	})

	module.exports = nav_view;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var util = __webpack_require__(9);

	//load views
	var main_view = __webpack_require__(12);
	var search_view = __webpack_require__(20);
	var course_view = __webpack_require__(21);
	var tip_view = __webpack_require__(14);

	//load model
	var Tip = __webpack_require__(16);

	var SiteRouter = Backbone.Router.extend({
	    routes: {
	        '': 'main',
	        'login': 'login',
	        'search': 'search',
	        'search_result/:keyword(/)': 'search_result',
	        'course/:id(/)': 'course',
	        'tip/:id(/)':'tip'
	    },
	    initialize : function(options){
	        console.log(options)
	        this.$container = options.container;
	        this.navModel = options.nav_model;
	    },
	    switchView: function(view) {
	        if (this.currentView) {
	            this.currentView.remove();
	        }
	        this.$container.append( view.render().el )
	        this.currentView = view;
	    },
	    main: function() {
	        var view = new main_view({router:this});
	        this.switchView(view);
	        this.navModel.set({currentPage:null,hasPrev:false});
	    },
	    login: function() {
	        console.log('you have reached login');
	    },
	    search: function() {
	        var view = new search_view({router:this});
	        this.switchView(view);
	        this.navModel.set({currentPage:"搜索",hasPrev:false});
	    },
	    search_result: function(keyword) {
	        console.log('you have searched '+keyword);
	    },
	    course: function(id) {
	        var view = new course_view({router:this,id:id});
	        this.switchView(view);
	        this.navModel.set({currentPage:"课程详情",hasPrev:true});
	    },
	    tip: function(id) {
	        var tip = new Tip({id:id});
	        var view = new tip_view({router:this,model:tip});
	        this.switchView(view);
	        this.navModel.set({currentPage:"专题",hasPrev:true});
	    }
	});

	module.exports = SiteRouter;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	//load view
	var main_tab_view = __webpack_require__(13);
	var main_tip_view = __webpack_require__(31);
	var main_recommend_view = __webpack_require__(18);
	var main_all_view = __webpack_require__(19);

	var main_view = Backbone.View.extend({
	    className:"main_view",
	    template: _.template($("#main_template").html()),
	    initialize:function(options){
	        this.options = options;
	    },
	    bindNav : function(ele){
	        var that = this;
	        ele.on("click",function(e){
	            e.preventDefault();
	            var $t = $(e.target)
	            var link = $t.data("link");
	            ele.removeClass("current");
	            $t.addClass("current");
	            switch(link){
	                case "tips":
	                    var view = new main_tip_view();
	                    that.switchView(view);
	                    break;
	                case "recommend":
	                    var view = new main_recommend_view();
	                    that.switchView(view);
	                    break;
	                case "all":
	                    var view = new main_all_view();
	                    that.switchView(view);
	                    break;
	            }
	        })
	    },
	    render: function() {
	        this.$el.html(this.template());
	        var tabView = new main_tab_view();
	        var tipView = new main_tip_view({router:this.options.router});
	        this.currentView = tipView;
	        this.$el.append(tabView.render().el)
	        this.$el.append(tipView.render().el)
	        this.bindNav(this.$(".tab_text"));
	        return this;
	    },
	    switchView: function(view) {
	        if (this.currentView) {
	            this.currentView.remove();
	        }
	        this.$el.append( view.render().el );
	        this.currentView = view;
	    }
	})

	module.exports = main_view;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var main_tab_view = Backbone.View.extend({
		className:"main_tab space",
	    template: _.template($("#main_tab_template").html()),
	    render: function() {
	        this.$el.html(this.template());
	        return this;
	    }
	})

	module.exports = main_tab_view;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var tip_view = Backbone.View.extend({
		className : 'tip',
		template: _.template($("#tip_view_template").html()),
		initialize:function(options){
			this.options = options;
		},
		render: function(){
			var that = this;
			this.model.fetch().done(function(){
				that.$el.html(that.template(that.model.toJSON()));
			});
			return this; 
		}
	})

	module.exports = tip_view;



/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	var Tip = Backbone.Model.extend({
		urlRoot:'/api/tip'
	})

	module.exports = Tip;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var tip_item_view = Backbone.View.extend({
		className : 'item',
		template: _.template($("#main_tip_item_template").html()),
		initialize:function(options){
			this.options = options;
		},
		events:{
			"click .tip_link":"onLinkClicked"
		},
		onLinkClicked:function(e){
			this.options.router.navigate($(e.target).data("link"),{trigger: true});
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this; 
		}
	})

	module.exports = tip_item_view;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var main_recommend_view = Backbone.View.extend({
		className : 'recommend',
		template: _.template($("#main_recommend_template").html()),
		render: function(){
			this.$el.html(this.template());
			return this; 
		}
	})

	module.exports = main_recommend_view;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var main_all_view = Backbone.View.extend({
		className : 'all',
		template: _.template($("#main_all_template").html()),
		render: function(){
			this.$el.html(this.template());
			return this; 
		}
	})

	module.exports = main_all_view;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	var search_view = Backbone.View.extend({
		className:"search_view",
	    template: _.template($("#search_template").html()),
	    events:{
			'click .search_btn':'onSearch',
			'click .item':'onClick'
	    },
	    initialize : function(options){
	        this.options = options;
	    },
	    onSearch:function(){
			if(!this.$('.search_input').val()){
				console.log("no value!");
			}else{
				var url = "search_result/" + this.$('.search_input').val();
				this.options.router.navigate(url,{trigger: true});
			}
	    },
	    onClick:function(e){
			this.options.router.navigate($(e.target).data("link"),{trigger: true});
	    },
	    render: function() {
	        this.$el.html(this.template());
	        return this;
	    }
	})

	module.exports = search_view;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	//load model
	var Course = __webpack_require__(22);

	//load collection
	var Comments = __webpack_require__(23);

	//load views
	var comments_view = __webpack_require__(26);

	var course_view = Backbone.View.extend({
		className:"course_view",
	    template: _.template($("#course_template").html()),
	    initialize:function(options){
	    	this.options = options;
	        this.course = new Course({id:this.options.id});
	    },
	    events:{
	        "click .w_comment":"onWCommentClick",
	        "click #course_like":"onLikeCourseClick",
	        "click .more_comments":"onMoreCommentsClick"
	    },
	    onWCommentClick:function(e){
	        console.log(e.target);
	    },
	    onLikeCourseClick:function(e){
	        console.log(e.target);
	    },
	    onAddComments:function(){
	        console.log("on add!!");
	    },
	    onMoreCommentsClick:function(e){
	        var that = this;
	        this.comments.getNextPage().done(function(){
	            that.subview.render();
	        })
	    },
	    render: function() {
	    	var that = this;
	    	this.course.fetch().done(function(){
	    		that.$el.html(that.template(that.course.toJSON()));
	            var comments = new Comments();
	            that.comments = comments;
	            var commentsView = new comments_view({collection:comments});
	            that.subview = commentsView;
	            comments.getFirstPage()
	                .done(function(){
	                    that.$(".comments").append( commentsView.render().el );
	                    if(comments.hasNextPage()){
	                        that.$el.append("<div class='more_comments'>展开更多评价</div>")
	                    }
	                })
	                .fail(function(){
	                    that.$(".comments").html(
	                        "<div class='no_comments'>∑(っ °Д °;)っ<br>没有任何评价，快去添加第一条评价吧。<div>"
	                        );
	                })
	    	});
	        
	        return this;
	    }
	})

	module.exports = course_view;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	var Course = Backbone.Model.extend({
		urlRoot:'/api/course'
	})

	module.exports = Course;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var PageableCollection = __webpack_require__(24);

	//load model
	var Comment = __webpack_require__(25);

	var Comments = Backbone.PageableCollection.extend({
	  url: "https://api.github.com/repositories/952189/issues?state=closed",
	  mode: "infinite",
		
	  model:Comment,
	  // Initial pagination states
	  state: {
	    pageSize: 10,
	    sortKey: "updated",
	    order: 1
	  },

	  // You can remap the query parameters from ``state`` keys from the default
	  // to those your server supports. Setting ``null`` on queryParams removed them
	  // from being appended to the request URLs.
	  queryParams: {
	    totalPages: null,
	    totalRecords: null,
	    sortKey: null,
	    order: null,
	    directions: null
	  }

	});

	module.exports = Comments;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  backbone.paginator 2.0.0
	  http://github.com/backbone-paginator/backbone.paginator

	  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
	  Licensed under the MIT @license.
	*/

	(function (factory) {

	  // CommonJS
	  if (true) {
	    module.exports = factory(__webpack_require__(7), __webpack_require__(6));
	  }
	  // AMD
	  else if (typeof define == "function" && define.amd) {
	    define(["underscore", "backbone"], factory);
	  }
	  // Browser
	  else if (typeof _ !== "undefined" && typeof Backbone !== "undefined") {
	    var oldPageableCollection = Backbone.PageableCollection;
	    var PageableCollection = factory(_, Backbone);

	    /**
	       __BROWSER ONLY__

	       If you already have an object named `PageableCollection` attached to the
	       `Backbone` module, you can use this to return a local reference to this
	       Backbone.PageableCollection class and reset the name
	       Backbone.PageableCollection to its previous definition.

	           // The left hand side gives you a reference to this
	           // Backbone.PageableCollection implementation, the right hand side
	           // resets Backbone.PageableCollection to your other
	           // Backbone.PageableCollection.
	           var PageableCollection = Backbone.PageableCollection.noConflict();

	       @static
	       @member Backbone.PageableCollection
	       @return {Backbone.PageableCollection}
	    */
	    Backbone.PageableCollection.noConflict = function () {
	      Backbone.PageableCollection = oldPageableCollection;
	      return PageableCollection;
	    };
	  }

	}(function (_, Backbone) {

	  "use strict";

	  var _extend = _.extend;
	  var _omit = _.omit;
	  var _clone = _.clone;
	  var _each = _.each;
	  var _pick = _.pick;
	  var _contains = _.contains;
	  var _isEmpty = _.isEmpty;
	  var _pairs = _.pairs;
	  var _invert = _.invert;
	  var _isArray = _.isArray;
	  var _isFunction = _.isFunction;
	  var _isObject = _.isObject;
	  var _keys = _.keys;
	  var _isUndefined = _.isUndefined;
	  var ceil = Math.ceil;
	  var floor = Math.floor;
	  var max = Math.max;

	  var BBColProto = Backbone.Collection.prototype;

	  function finiteInt (val, name) {
	    if (!_.isNumber(val) || _.isNaN(val) || !_.isFinite(val) || ~~val !== val) {
	      throw new TypeError("`" + name + "` must be a finite integer");
	    }
	    return val;
	  }

	  function queryStringToParams (qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	      var param = kvps[i];
	      kvp = param.split('='), k = kvp[0], v = kvp[1] || true;
	      k = decode(k), v = decode(v), ls = params[k];
	      if (_isArray(ls)) ls.push(v);
	      else if (ls) params[k] = [ls, v];
	      else params[k] = v;
	    }
	    return params;
	  }

	  // hack to make sure the whatever event handlers for this event is run
	  // before func is, and the event handlers that func will trigger.
	  function runOnceAtLastHandler (col, event, func) {
	    var eventHandlers = col._events[event];
	    if (eventHandlers && eventHandlers.length) {
	      var lastHandler = eventHandlers[eventHandlers.length - 1];
	      var oldCallback = lastHandler.callback;
	      lastHandler.callback = function () {
	        try {
	          oldCallback.apply(this, arguments);
	          func();
	        }
	        catch (e) {
	          throw e;
	        }
	        finally {
	          lastHandler.callback = oldCallback;
	        }
	      };
	    }
	    else func();
	  }

	  var PARAM_TRIM_RE = /[\s'"]/g;
	  var URL_TRIM_RE = /[<>\s'"]/g;

	  /**
	     Drop-in replacement for Backbone.Collection. Supports server-side and
	     client-side pagination and sorting. Client-side mode also support fully
	     multi-directional synchronization of changes between pages.

	     @class Backbone.PageableCollection
	     @extends Backbone.Collection
	  */
	  var PageableCollection = Backbone.PageableCollection = Backbone.Collection.extend({

	    /**
	       The container object to store all pagination states.

	       You can override the default state by extending this class or specifying
	       them in an `options` hash to the constructor.

	       @property {Object} state

	       @property {0|1} [state.firstPage=1] The first page index. Set to 0 if
	       your server API uses 0-based indices. You should only override this value
	       during extension, initialization or reset by the server after
	       fetching. This value should be read only at other times.

	       @property {number} [state.lastPage=null] The last page index. This value
	       is __read only__ and it's calculated based on whether `firstPage` is 0 or
	       1, during bootstrapping, fetching and resetting. Please don't change this
	       value under any circumstances.

	       @property {number} [state.currentPage=null] The current page index. You
	       should only override this value during extension, initialization or reset
	       by the server after fetching. This value should be read only at other
	       times. Can be a 0-based or 1-based index, depending on whether
	       `firstPage` is 0 or 1. If left as default, it will be set to `firstPage`
	       on initialization.

	       @property {number} [state.pageSize=25] How many records to show per
	       page. This value is __read only__ after initialization, if you want to
	       change the page size after initialization, you must call #setPageSize.

	       @property {number} [state.totalPages=null] How many pages there are. This
	       value is __read only__ and it is calculated from `totalRecords`.

	       @property {number} [state.totalRecords=null] How many records there
	       are. This value is __required__ under server mode. This value is optional
	       for client mode as the number will be the same as the number of models
	       during bootstrapping and during fetching, either supplied by the server
	       in the metadata, or calculated from the size of the response.

	       @property {string} [state.sortKey=null] The model attribute to use for
	       sorting.

	       @property {-1|0|1} [state.order=-1] The order to use for sorting. Specify
	       -1 for ascending order or 1 for descending order. If 0, no client side
	       sorting will be done and the order query parameter will not be sent to
	       the server during a fetch.
	    */
	    state: {
	      firstPage: 1,
	      lastPage: null,
	      currentPage: null,
	      pageSize: 25,
	      totalPages: null,
	      totalRecords: null,
	      sortKey: null,
	      order: -1
	    },

	    /**
	       @property {"server"|"client"|"infinite"} [mode="server"] The mode of
	       operations for this collection. `"server"` paginates on the server-side,
	       `"client"` paginates on the client-side and `"infinite"` paginates on the
	       server-side for APIs that do not support `totalRecords`.
	    */
	    mode: "server",

	    /**
	       A translation map to convert Backbone.PageableCollection state attributes
	       to the query parameters accepted by your server API.

	       You can override the default state by extending this class or specifying
	       them in `options.queryParams` object hash to the constructor.

	       @property {Object} queryParams
	       @property {string} [queryParams.currentPage="page"]
	       @property {string} [queryParams.pageSize="per_page"]
	       @property {string} [queryParams.totalPages="total_pages"]
	       @property {string} [queryParams.totalRecords="total_entries"]
	       @property {string} [queryParams.sortKey="sort_by"]
	       @property {string} [queryParams.order="order"]
	       @property {string} [queryParams.directions={"-1": "asc", "1": "desc"}] A
	       map for translating a Backbone.PageableCollection#state.order constant to
	       the ones your server API accepts.
	    */
	    queryParams: {
	      currentPage: "page",
	      pageSize: "per_page",
	      totalPages: "total_pages",
	      totalRecords: "total_entries",
	      sortKey: "sort_by",
	      order: "order",
	      directions: {
	        "-1": "asc",
	        "1": "desc"
	      }
	    },

	    /**
	       __CLIENT MODE ONLY__

	       This collection is the internal storage for the bootstrapped or fetched
	       models. You can use this if you want to operate on all the pages.

	       @property {Backbone.Collection} fullCollection
	    */

	    /**
	       Given a list of models or model attributues, bootstraps the full
	       collection in client mode or infinite mode, or just the page you want in
	       server mode.

	       If you want to initialize a collection to a different state than the
	       default, you can specify them in `options.state`. Any state parameters
	       supplied will be merged with the default. If you want to change the
	       default mapping from #state keys to your server API's query parameter
	       names, you can specifiy an object hash in `option.queryParams`. Likewise,
	       any mapping provided will be merged with the default. Lastly, all
	       Backbone.Collection constructor options are also accepted.

	       See:

	       - Backbone.PageableCollection#state
	       - Backbone.PageableCollection#queryParams
	       - [Backbone.Collection#initialize](http://backbonejs.org/#Collection-constructor)

	       @param {Array.<Object>} [models]

	       @param {Object} [options]

	       @param {function(*, *): number} [options.comparator] If specified, this
	       comparator is set to the current page under server mode, or the #fullCollection
	       otherwise.

	       @param {boolean} [options.full] If `false` and either a
	       `options.comparator` or `sortKey` is defined, the comparator is attached
	       to the current page. Default is `true` under client or infinite mode and
	       the comparator will be attached to the #fullCollection.

	       @param {Object} [options.state] The state attributes overriding the defaults.

	       @param {string} [options.state.sortKey] The model attribute to use for
	       sorting. If specified instead of `options.comparator`, a comparator will
	       be automatically created using this value, and optionally a sorting order
	       specified in `options.state.order`. The comparator is then attached to
	       the new collection instance.

	       @param {-1|1} [options.state.order] The order to use for sorting. Specify
	       -1 for ascending order and 1 for descending order.

	       @param {Object} [options.queryParam]
	    */
	    constructor: function (models, options) {

	      BBColProto.constructor.apply(this, arguments);

	      options = options || {};

	      var mode = this.mode = options.mode || this.mode || PageableProto.mode;

	      var queryParams = _extend({}, PageableProto.queryParams, this.queryParams,
	                                options.queryParams || {});

	      queryParams.directions = _extend({},
	                                       PageableProto.queryParams.directions,
	                                       this.queryParams.directions,
	                                       queryParams.directions || {});

	      this.queryParams = queryParams;

	      var state = this.state = _extend({}, PageableProto.state, this.state,
	                                       options.state || {});

	      state.currentPage = state.currentPage == null ?
	        state.firstPage :
	        state.currentPage;

	      if (!_isArray(models)) models = models ? [models] : [];
	      models = models.slice();

	      if (mode != "server" && state.totalRecords == null && !_isEmpty(models)) {
	        state.totalRecords = models.length;
	      }

	      this.switchMode(mode, _extend({fetch: false,
	                                     resetState: false,
	                                     models: models}, options));

	      var comparator = options.comparator;

	      if (state.sortKey && !comparator) {
	        this.setSorting(state.sortKey, state.order, options);
	      }

	      if (mode != "server") {
	        var fullCollection = this.fullCollection;

	        if (comparator && options.full) {
	          this.comparator = null;
	          fullCollection.comparator = comparator;
	        }

	        if (options.full) fullCollection.sort();

	        // make sure the models in the current page and full collection have the
	        // same references
	        if (models && !_isEmpty(models)) {
	          this.reset(models, _extend({silent: true}, options));
	          this.getPage(state.currentPage);
	          models.splice.apply(models, [0, models.length].concat(this.models));
	        }
	      }

	      this._initState = _clone(this.state);
	    },

	    /**
	       Makes a Backbone.Collection that contains all the pages.

	       @private
	       @param {Array.<Object|Backbone.Model>} models
	       @param {Object} options Options for Backbone.Collection constructor.
	       @return {Backbone.Collection}
	    */
	    _makeFullCollection: function (models, options) {

	      var properties = ["url", "model", "sync", "comparator"];
	      var thisProto = this.constructor.prototype;
	      var i, length, prop;

	      var proto = {};
	      for (i = 0, length = properties.length; i < length; i++) {
	        prop = properties[i];
	        if (!_isUndefined(thisProto[prop])) {
	          proto[prop] = thisProto[prop];
	        }
	      }

	      var fullCollection = new (Backbone.Collection.extend(proto))(models, options);

	      for (i = 0, length = properties.length; i < length; i++) {
	        prop = properties[i];
	        if (this[prop] !== thisProto[prop]) {
	          fullCollection[prop] = this[prop];
	        }
	      }

	      return fullCollection;
	    },

	    /**
	       Factory method that returns a Backbone event handler that responses to
	       the `add`, `remove`, `reset`, and the `sort` events. The returned event
	       handler will synchronize the current page collection and the full
	       collection's models.

	       @private

	       @param {Backbone.PageableCollection} pageCol
	       @param {Backbone.Collection} fullCol

	       @return {function(string, Backbone.Model, Backbone.Collection, Object)}
	       Collection event handler
	    */
	    _makeCollectionEventHandler: function (pageCol, fullCol) {

	      return function collectionEventHandler (event, model, collection, options) {

	        var handlers = pageCol._handlers;
	        _each(_keys(handlers), function (event) {
	          var handler = handlers[event];
	          pageCol.off(event, handler);
	          fullCol.off(event, handler);
	        });

	        var state = _clone(pageCol.state);
	        var firstPage = state.firstPage;
	        var currentPage = firstPage === 0 ?
	          state.currentPage :
	          state.currentPage - 1;
	        var pageSize = state.pageSize;
	        var pageStart = currentPage * pageSize, pageEnd = pageStart + pageSize;

	        if (event == "add") {
	          var pageIndex, fullIndex, addAt, colToAdd, options = options || {};
	          if (collection == fullCol) {
	            fullIndex = fullCol.indexOf(model);
	            if (fullIndex >= pageStart && fullIndex < pageEnd) {
	              colToAdd = pageCol;
	              pageIndex = addAt = fullIndex - pageStart;
	            }
	          }
	          else {
	            pageIndex = pageCol.indexOf(model);
	            fullIndex = pageStart + pageIndex;
	            colToAdd = fullCol;
	            var addAt = !_isUndefined(options.at) ?
	              options.at + pageStart :
	              fullIndex;
	          }

	          if (!options.onRemove) {
	            ++state.totalRecords;
	            delete options.onRemove;
	          }

	          pageCol.state = pageCol._checkState(state);

	          if (colToAdd) {
	            colToAdd.add(model, _extend({}, options || {}, {at: addAt}));
	            var modelToRemove = pageIndex >= pageSize ?
	              model :
	              !_isUndefined(options.at) && addAt < pageEnd && pageCol.length > pageSize ?
	              pageCol.at(pageSize) :
	              null;
	            if (modelToRemove) {
	              runOnceAtLastHandler(collection, event, function () {
	                pageCol.remove(modelToRemove, {onAdd: true});
	              });
	            }
	          }
	        }

	        // remove the model from the other collection as well
	        if (event == "remove") {
	          if (!options.onAdd) {
	            // decrement totalRecords and update totalPages and lastPage
	            if (!--state.totalRecords) {
	              state.totalRecords = null;
	              state.totalPages = null;
	            }
	            else {
	              var totalPages = state.totalPages = ceil(state.totalRecords / pageSize);
	              state.lastPage = firstPage === 0 ? totalPages - 1 : totalPages || firstPage;
	              if (state.currentPage > totalPages) state.currentPage = state.lastPage;
	            }
	            pageCol.state = pageCol._checkState(state);

	            var nextModel, removedIndex = options.index;
	            if (collection == pageCol) {
	              if (nextModel = fullCol.at(pageEnd)) {
	                runOnceAtLastHandler(pageCol, event, function () {
	                  pageCol.push(nextModel, {onRemove: true});
	                });
	              }
	              else if (!pageCol.length && state.totalRecords) {
	                pageCol.reset(fullCol.models.slice(pageStart - pageSize, pageEnd - pageSize),
	                              _extend({}, options, {parse: false}));
	              }
	              fullCol.remove(model);
	            }
	            else if (removedIndex >= pageStart && removedIndex < pageEnd) {
	              if (nextModel = fullCol.at(pageEnd - 1)) {
	                runOnceAtLastHandler(pageCol, event, function() {
	                  pageCol.push(nextModel, {onRemove: true});
	                });
	              }
	              pageCol.remove(model);
	              if (!pageCol.length && state.totalRecords) {
	                pageCol.reset(fullCol.models.slice(pageStart - pageSize, pageEnd - pageSize),
	                              _extend({}, options, {parse: false}));
	              }
	            }
	          }
	          else delete options.onAdd;
	        }

	        if (event == "reset") {
	          options = collection;
	          collection = model;

	          // Reset that's not a result of getPage
	          if (collection == pageCol && options.from == null &&
	              options.to == null) {
	            var head = fullCol.models.slice(0, pageStart);
	            var tail = fullCol.models.slice(pageStart + pageCol.models.length);
	            fullCol.reset(head.concat(pageCol.models).concat(tail), options);
	          }
	          else if (collection == fullCol) {
	            if (!(state.totalRecords = fullCol.models.length)) {
	              state.totalRecords = null;
	              state.totalPages = null;
	            }
	            if (pageCol.mode == "client") {
	              state.lastPage = state.currentPage = state.firstPage;
	            }
	            pageCol.state = pageCol._checkState(state);
	            pageCol.reset(fullCol.models.slice(pageStart, pageEnd),
	                          _extend({}, options, {parse: false}));
	          }
	        }

	        if (event == "sort") {
	          options = collection;
	          collection = model;
	          if (collection === fullCol) {
	            pageCol.reset(fullCol.models.slice(pageStart, pageEnd),
	                          _extend({}, options, {parse: false}));
	          }
	        }

	        _each(_keys(handlers), function (event) {
	          var handler = handlers[event];
	          _each([pageCol, fullCol], function (col) {
	            col.on(event, handler);
	            var callbacks = col._events[event] || [];
	            callbacks.unshift(callbacks.pop());
	          });
	        });
	      };
	    },

	    /**
	       Sanity check this collection's pagination states. Only perform checks
	       when all the required pagination state values are defined and not null.
	       If `totalPages` is undefined or null, it is set to `totalRecords` /
	       `pageSize`. `lastPage` is set according to whether `firstPage` is 0 or 1
	       when no error occurs.

	       @private

	       @throws {TypeError} If `totalRecords`, `pageSize`, `currentPage` or
	       `firstPage` is not a finite integer.

	       @throws {RangeError} If `pageSize`, `currentPage` or `firstPage` is out
	       of bounds.

	       @return {Object} Returns the `state` object if no error was found.
	    */
	    _checkState: function (state) {

	      var mode = this.mode;
	      var links = this.links;
	      var totalRecords = state.totalRecords;
	      var pageSize = state.pageSize;
	      var currentPage = state.currentPage;
	      var firstPage = state.firstPage;
	      var totalPages = state.totalPages;

	      if (totalRecords != null && pageSize != null && currentPage != null &&
	          firstPage != null && (mode == "infinite" ? links : true)) {

	        totalRecords = finiteInt(totalRecords, "totalRecords");
	        pageSize = finiteInt(pageSize, "pageSize");
	        currentPage = finiteInt(currentPage, "currentPage");
	        firstPage = finiteInt(firstPage, "firstPage");

	        if (pageSize < 1) {
	          throw new RangeError("`pageSize` must be >= 1");
	        }

	        totalPages = state.totalPages = ceil(totalRecords / pageSize);

	        if (firstPage < 0 || firstPage > 1) {
	          throw new RangeError("`firstPage must be 0 or 1`");
	        }

	        state.lastPage = firstPage === 0 ? max(0, totalPages - 1) : totalPages || firstPage;

	        if (mode == "infinite") {
	          if (!links[currentPage + '']) {
	            throw new RangeError("No link found for page " + currentPage);
	          }
	        }
	        else if (currentPage < firstPage ||
	                 (totalPages > 0 &&
	                  (firstPage ? currentPage > totalPages : currentPage >= totalPages))) {
	          throw new RangeError("`currentPage` must be firstPage <= currentPage " +
	                               (firstPage ? ">" : ">=") +
	                               " totalPages if " + firstPage + "-based. Got " +
	                               currentPage + '.');
	        }
	      }

	      return state;
	    },

	    /**
	       Change the page size of this collection.

	       Under most if not all circumstances, you should call this method to
	       change the page size of a pageable collection because it will keep the
	       pagination state sane. By default, the method will recalculate the
	       current page number to one that will retain the current page's models
	       when increasing the page size. When decreasing the page size, this method
	       will retain the last models to the current page that will fit into the
	       smaller page size.

	       If `options.first` is true, changing the page size will also reset the
	       current page back to the first page instead of trying to be smart.

	       For server mode operations, changing the page size will trigger a #fetch
	       and subsequently a `reset` event.

	       For client mode operations, changing the page size will `reset` the
	       current page by recalculating the current page boundary on the client
	       side.

	       If `options.fetch` is true, a fetch can be forced if the collection is in
	       client mode.

	       @param {number} pageSize The new page size to set to #state.
	       @param {Object} [options] {@link #fetch} options.
	       @param {boolean} [options.first=false] Reset the current page number to
	       the first page if `true`.
	       @param {boolean} [options.fetch] If `true`, force a fetch in client mode.

	       @throws {TypeError} If `pageSize` is not a finite integer.
	       @throws {RangeError} If `pageSize` is less than 1.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    setPageSize: function (pageSize, options) {
	      pageSize = finiteInt(pageSize, "pageSize");

	      options = options || {first: false};

	      var state = this.state;
	      var totalPages = ceil(state.totalRecords / pageSize);
	      var currentPage = totalPages ?
	          max(state.firstPage, floor(totalPages * state.currentPage / state.totalPages)) :
	        state.firstPage;

	      state = this.state = this._checkState(_extend({}, state, {
	        pageSize: pageSize,
	        currentPage: options.first ? state.firstPage : currentPage,
	        totalPages: totalPages
	      }));

	      return this.getPage(state.currentPage, _omit(options, ["first"]));
	    },

	    /**
	       Switching between client, server and infinite mode.

	       If switching from client to server mode, the #fullCollection is emptied
	       first and then deleted and a fetch is immediately issued for the current
	       page from the server. Pass `false` to `options.fetch` to skip fetching.

	       If switching to infinite mode, and if `options.models` is given for an
	       array of models, #links will be populated with a URL per page, using the
	       default URL for this collection.

	       If switching from server to client mode, all of the pages are immediately
	       refetched. If you have too many pages, you can pass `false` to
	       `options.fetch` to skip fetching.

	       If switching to any mode from infinite mode, the #links will be deleted.

	       @param {"server"|"client"|"infinite"} [mode] The mode to switch to.

	       @param {Object} [options]

	       @param {boolean} [options.fetch=true] If `false`, no fetching is done.

	       @param {boolean} [options.resetState=true] If 'false', the state is not
	       reset, but checked for sanity instead.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this if `options.fetch` is `false`.
	    */
	    switchMode: function (mode, options) {

	      if (!_contains(["server", "client", "infinite"], mode)) {
	        throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
	      }

	      options = options || {fetch: true, resetState: true};

	      var state = this.state = options.resetState ?
	        _clone(this._initState) :
	        this._checkState(_extend({}, this.state));

	      this.mode = mode;

	      var self = this;
	      var fullCollection = this.fullCollection;
	      var handlers = this._handlers = this._handlers || {}, handler;
	      if (mode != "server" && !fullCollection) {
	        fullCollection = this._makeFullCollection(options.models || [], options);
	        fullCollection.pageableCollection = this;
	        this.fullCollection = fullCollection;
	        var allHandler = this._makeCollectionEventHandler(this, fullCollection);
	        _each(["add", "remove", "reset", "sort"], function (event) {
	          handlers[event] = handler = _.bind(allHandler, {}, event);
	          self.on(event, handler);
	          fullCollection.on(event, handler);
	        });
	        fullCollection.comparator = this._fullComparator;
	      }
	      else if (mode == "server" && fullCollection) {
	        _each(_keys(handlers), function (event) {
	          handler = handlers[event];
	          self.off(event, handler);
	          fullCollection.off(event, handler);
	        });
	        delete this._handlers;
	        this._fullComparator = fullCollection.comparator;
	        delete this.fullCollection;
	      }

	      if (mode == "infinite") {
	        var links = this.links = {};
	        var firstPage = state.firstPage;
	        var totalPages = ceil(state.totalRecords / state.pageSize);
	        var lastPage = firstPage === 0 ? max(0, totalPages - 1) : totalPages || firstPage;
	        for (var i = state.firstPage; i <= lastPage; i++) {
	          links[i] = this.url;
	        }
	      }
	      else if (this.links) delete this.links;

	      return options.fetch ?
	        this.fetch(_omit(options, "fetch", "resetState")) :
	        this;
	    },

	    /**
	       @return {boolean} `true` if this collection can page backward, `false`
	       otherwise.
	    */
	    hasPreviousPage: function () {
	      var state = this.state;
	      var currentPage = state.currentPage;
	      if (this.mode != "infinite") return currentPage > state.firstPage;
	      return !!this.links[currentPage - 1];
	    },

	    /**
	       @return {boolean} `true` if this collection can page forward, `false`
	       otherwise.
	    */
	    hasNextPage: function () {
	      var state = this.state;
	      var currentPage = this.state.currentPage;
	      if (this.mode != "infinite") return currentPage < state.lastPage;
	      return !!this.links[currentPage + 1];
	    },

	    /**
	       Fetch the first page in server mode, or reset the current page of this
	       collection to the first page in client or infinite mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getFirstPage: function (options) {
	      return this.getPage("first", options);
	    },

	    /**
	       Fetch the previous page in server mode, or reset the current page of this
	       collection to the previous page in client or infinite mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPreviousPage: function (options) {
	      return this.getPage("prev", options);
	    },

	    /**
	       Fetch the next page in server mode, or reset the current page of this
	       collection to the next page in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getNextPage: function (options) {
	      return this.getPage("next", options);
	    },

	    /**
	       Fetch the last page in server mode, or reset the current page of this
	       collection to the last page in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getLastPage: function (options) {
	      return this.getPage("last", options);
	    },

	    /**
	       Given a page index, set #state.currentPage to that index. If this
	       collection is in server mode, fetch the page using the updated state,
	       otherwise, reset the current page of this collection to the page
	       specified by `index` in client mode. If `options.fetch` is true, a fetch
	       can be forced in client mode before resetting the current page. Under
	       infinite mode, if the index is less than the current page, a reset is
	       done as in client mode. If the index is greater than the current page
	       number, a fetch is made with the results **appended** to #fullCollection.
	       The current page will then be reset after fetching.

	       @param {number|string} index The page index to go to, or the page name to
	       look up from #links in infinite mode.
	       @param {Object} [options] {@link #fetch} options or
	       [reset](http://backbonejs.org/#Collection-reset) options for client mode
	       when `options.fetch` is `false`.
	       @param {boolean} [options.fetch=false] If true, force a {@link #fetch} in
	       client mode.

	       @throws {TypeError} If `index` is not a finite integer under server or
	       client mode, or does not yield a URL from #links under infinite mode.

	       @throws {RangeError} If `index` is out of bounds.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPage: function (index, options) {

	      var mode = this.mode, fullCollection = this.fullCollection;

	      options = options || {fetch: false};

	      var state = this.state,
	      firstPage = state.firstPage,
	      currentPage = state.currentPage,
	      lastPage = state.lastPage,
	      pageSize = state.pageSize;

	      var pageNum = index;
	      switch (index) {
	        case "first": pageNum = firstPage; break;
	        case "prev": pageNum = currentPage - 1; break;
	        case "next": pageNum = currentPage + 1; break;
	        case "last": pageNum = lastPage; break;
	        default: pageNum = finiteInt(index, "index");
	      }

	      this.state = this._checkState(_extend({}, state, {currentPage: pageNum}));

	      options.from = currentPage, options.to = pageNum;

	      var pageStart = (firstPage === 0 ? pageNum : pageNum - 1) * pageSize;
	      var pageModels = fullCollection && fullCollection.length ?
	        fullCollection.models.slice(pageStart, pageStart + pageSize) :
	        [];
	      if ((mode == "client" || (mode == "infinite" && !_isEmpty(pageModels))) &&
	          !options.fetch) {
	        this.reset(pageModels, _omit(options, "fetch"));
	        return this;
	      }

	      if (mode == "infinite") options.url = this.links[pageNum];

	      return this.fetch(_omit(options, "fetch"));
	    },

	    /**
	       Fetch the page for the provided item offset in server mode, or reset the current page of this
	       collection to the page for the provided item offset in client mode.

	       @param {Object} options {@link #getPage} options.

	       @chainable
	       @return {XMLHttpRequest|Backbone.PageableCollection} The XMLHttpRequest
	       from fetch or this.
	    */
	    getPageByOffset: function (offset, options) {
	      if (offset < 0) {
	        throw new RangeError("`offset must be > 0`");
	      }
	      offset = finiteInt(offset);

	      var page = floor(offset / this.state.pageSize);
	      if (this.state.firstPage !== 0) page++;
	      if (page > this.state.lastPage) page = this.state.lastPage;
	      return this.getPage(page, options);
	    },

	    /**
	       Overidden to make `getPage` compatible with Zepto.

	       @param {string} method
	       @param {Backbone.Model|Backbone.Collection} model
	       @param {Object} [options]

	       @return {XMLHttpRequest}
	    */
	    sync: function (method, model, options) {
	      var self = this;
	      if (self.mode == "infinite") {
	        var success = options.success;
	        var currentPage = self.state.currentPage;
	        options.success = function (resp, status, xhr) {
	          var links = self.links;
	          var newLinks = self.parseLinks(resp, _extend({xhr: xhr}, options));
	          if (newLinks.first) links[self.state.firstPage] = newLinks.first;
	          if (newLinks.prev) links[currentPage - 1] = newLinks.prev;
	          if (newLinks.next) links[currentPage + 1] = newLinks.next;
	          if (success) success(resp, status, xhr);
	        };
	      }

	      return (BBColProto.sync || Backbone.sync).call(self, method, model, options);
	    },

	    /**
	       Parse pagination links from the server response. Only valid under
	       infinite mode.

	       Given a response body and a XMLHttpRequest object, extract pagination
	       links from them for infinite paging.

	       This default implementation parses the RFC 5988 `Link` header and extract
	       3 links from it - `first`, `prev`, `next`. Any subclasses overriding this
	       method __must__ return an object hash having only the keys
	       above. However, simply returning a `next` link or an empty hash if there
	       are no more links should be enough for most implementations.

	       @param {*} resp The deserialized response body.
	       @param {Object} [options]
	       @param {XMLHttpRequest} [options.xhr] The XMLHttpRequest object for this
	       response.
	       @return {Object}
	    */
	    parseLinks: function (resp, options) {
	      var links = {};
	      var linkHeader = options.xhr.getResponseHeader("Link");
	      if (linkHeader) {
	        var relations = ["first", "prev", "next"];
	        _each(linkHeader.split(","), function (linkValue) {
	          var linkParts = linkValue.split(";");
	          var url = linkParts[0].replace(URL_TRIM_RE, '');
	          var params = linkParts.slice(1);
	          _each(params, function (param) {
	            var paramParts = param.split("=");
	            var key = paramParts[0].replace(PARAM_TRIM_RE, '');
	            var value = paramParts[1].replace(PARAM_TRIM_RE, '');
	            if (key == "rel" && _contains(relations, value)) links[value] = url;
	          });
	        });
	      }

	      return links;
	    },

	    /**
	       Parse server response data.

	       This default implementation assumes the response data is in one of two
	       structures:

	           [
	             {}, // Your new pagination state
	             [{}, ...] // An array of JSON objects
	           ]

	       Or,

	           [{}] // An array of JSON objects

	       The first structure is the preferred form because the pagination states
	       may have been updated on the server side, sending them down again allows
	       this collection to update its states. If the response has a pagination
	       state object, it is checked for errors.

	       The second structure is the
	       [Backbone.Collection#parse](http://backbonejs.org/#Collection-parse)
	       default.

	       **Note:** this method has been further simplified since 1.1.7. While
	       existing #parse implementations will continue to work, new code is
	       encouraged to override #parseState and #parseRecords instead.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} the options for the ajax request

	       @return {Array.<Object>} An array of model objects
	    */
	    parse: function (resp, options) {
	      var newState = this.parseState(resp, _clone(this.queryParams), _clone(this.state), options);
	      if (newState) this.state = this._checkState(_extend({}, this.state, newState));
	      return this.parseRecords(resp, options);
	    },

	    /**
	       Parse server response for server pagination state updates. Not applicable
	       under infinite mode.

	       This default implementation first checks whether the response has any
	       state object as documented in #parse. If it exists, a state object is
	       returned by mapping the server state keys to this pageable collection
	       instance's query parameter keys using `queryParams`.

	       It is __NOT__ neccessary to return a full state object complete with all
	       the mappings defined in #queryParams. Any state object resulted is merged
	       with a copy of the current pageable collection state and checked for
	       sanity before actually updating. Most of the time, simply providing a new
	       `totalRecords` value is enough to trigger a full pagination state
	       recalculation.

	           parseState: function (resp, queryParams, state, options) {
	             return {totalRecords: resp.total_entries};
	           }

	       If you want to use header fields use:

	           parseState: function (resp, queryParams, state, options) {
	               return {totalRecords: options.xhr.getResponseHeader("X-total")};
	           }

	       This method __MUST__ return a new state object instead of directly
	       modifying the #state object. The behavior of directly modifying #state is
	       undefined.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} queryParams A copy of #queryParams.
	       @param {Object} state A copy of #state.
	       @param {Object} [options] The options passed through from
	       `parse`. (backbone >= 0.9.10 only)

	       @return {Object} A new (partial) state object.
	     */
	    parseState: function (resp, queryParams, state, options) {
	      if (resp && resp.length === 2 && _isObject(resp[0]) && _isArray(resp[1])) {

	        var newState = _clone(state);
	        var serverState = resp[0];

	        _each(_pairs(_omit(queryParams, "directions")), function (kvp) {
	          var k = kvp[0], v = kvp[1];
	          var serverVal = serverState[v];
	          if (!_isUndefined(serverVal) && !_.isNull(serverVal)) newState[k] = serverState[v];
	        });

	        if (serverState.order) {
	          newState.order = _invert(queryParams.directions)[serverState.order] * 1;
	        }

	        return newState;
	      }
	    },

	    /**
	       Parse server response for an array of model objects.

	       This default implementation first checks whether the response has any
	       state object as documented in #parse. If it exists, the array of model
	       objects is assumed to be the second element, otherwise the entire
	       response is returned directly.

	       @param {Object} resp The deserialized response data from the server.
	       @param {Object} [options] The options passed through from the
	       `parse`. (backbone >= 0.9.10 only)

	       @return {Array.<Object>} An array of model objects
	     */
	    parseRecords: function (resp, options) {
	      if (resp && resp.length === 2 && _isObject(resp[0]) && _isArray(resp[1])) {
	        return resp[1];
	      }

	      return resp;
	    },

	    /**
	       Fetch a page from the server in server mode, or all the pages in client
	       mode. Under infinite mode, the current page is refetched by default and
	       then reset.

	       The query string is constructed by translating the current pagination
	       state to your server API query parameter using #queryParams. The current
	       page will reset after fetch.

	       @param {Object} [options] Accepts all
	       [Backbone.Collection#fetch](http://backbonejs.org/#Collection-fetch)
	       options.

	       @return {XMLHttpRequest}
	    */
	    fetch: function (options) {

	      options = options || {};

	      var state = this._checkState(this.state);

	      var mode = this.mode;

	      if (mode == "infinite" && !options.url) {
	        options.url = this.links[state.currentPage];
	      }

	      var data = options.data || {};

	      // dedup query params
	      var url = options.url || this.url || "";
	      if (_isFunction(url)) url = url.call(this);
	      var qsi = url.indexOf('?');
	      if (qsi != -1) {
	        _extend(data, queryStringToParams(url.slice(qsi + 1)));
	        url = url.slice(0, qsi);
	      }

	      options.url = url;
	      options.data = data;

	      // map params except directions
	      var queryParams = this.mode == "client" ?
	        _pick(this.queryParams, "sortKey", "order") :
	        _omit(_pick(this.queryParams, _keys(PageableProto.queryParams)),
	              "directions");

	      var i, kvp, k, v, kvps = _pairs(queryParams), thisCopy = _clone(this);
	      for (i = 0; i < kvps.length; i++) {
	        kvp = kvps[i], k = kvp[0], v = kvp[1];
	        v = _isFunction(v) ? v.call(thisCopy) : v;
	        if (state[k] != null && v != null) {
	          data[v] = state[k];
	        }
	      }

	      // fix up sorting parameters
	      if (state.sortKey && state.order) {
	        var o = _isFunction(queryParams.order) ?
	          queryParams.order.call(thisCopy) :
	          queryParams.order;
	        data[o] = this.queryParams.directions[state.order + ""];
	      }
	      else if (!state.sortKey) delete data[queryParams.order];

	      // map extra query parameters
	      var extraKvps = _pairs(_omit(this.queryParams,
	                                   _keys(PageableProto.queryParams)));
	      for (i = 0; i < extraKvps.length; i++) {
	        kvp = extraKvps[i];
	        v = kvp[1];
	        v = _isFunction(v) ? v.call(thisCopy) : v;
	        if (v != null) data[kvp[0]] = v;
	      }

	      if (mode != "server") {
	        var self = this, fullCol = this.fullCollection;
	        var success = options.success;
	        options.success = function (col, resp, opts) {

	          // make sure the caller's intent is obeyed
	          opts = opts || {};
	          if (_isUndefined(options.silent)) delete opts.silent;
	          else opts.silent = options.silent;

	          var models = col.models;
	          if (mode == "client") fullCol.reset(models, opts);
	          else {
	            fullCol.add(models, _extend({at: fullCol.length},
	                                        _extend(opts, {parse: false})));
	            self.trigger("reset", self, opts);
	          }

	          if (success) success(col, resp, opts);
	        };

	        // silent the first reset from backbone
	        return BBColProto.fetch.call(this, _extend({}, options, {silent: true}));
	      }

	      return BBColProto.fetch.call(this, options);
	    },

	    /**
	       Convenient method for making a `comparator` sorted by a model attribute
	       identified by `sortKey` and ordered by `order`.

	       Like a Backbone.Collection, a Backbone.PageableCollection will maintain
	       the __current page__ in sorted order on the client side if a `comparator`
	       is attached to it. If the collection is in client mode, you can attach a
	       comparator to #fullCollection to have all the pages reflect the global
	       sorting order by specifying an option `full` to `true`. You __must__ call
	       `sort` manually or #fullCollection.sort after calling this method to
	       force a resort.

	       While you can use this method to sort the current page in server mode,
	       the sorting order may not reflect the global sorting order due to the
	       additions or removals of the records on the server since the last
	       fetch. If you want the most updated page in a global sorting order, it is
	       recommended that you set #state.sortKey and optionally #state.order, and
	       then call #fetch.

	       @protected

	       @param {string} [sortKey=this.state.sortKey] See `state.sortKey`.
	       @param {number} [order=this.state.order] See `state.order`.
	       @param {(function(Backbone.Model, string): Object) | string} [sortValue] See #setSorting.

	       See [Backbone.Collection.comparator](http://backbonejs.org/#Collection-comparator).
	    */
	    _makeComparator: function (sortKey, order, sortValue) {
	      var state = this.state;

	      sortKey = sortKey || state.sortKey;
	      order = order || state.order;

	      if (!sortKey || !order) return;

	      if (!sortValue) sortValue = function (model, attr) {
	        return model.get(attr);
	      };

	      return function (left, right) {
	        var l = sortValue(left, sortKey), r = sortValue(right, sortKey), t;
	        if (order === 1) t = l, l = r, r = t;
	        if (l === r) return 0;
	        else if (l < r) return -1;
	        return 1;
	      };
	    },

	    /**
	       Adjusts the sorting for this pageable collection.

	       Given a `sortKey` and an `order`, sets `state.sortKey` and
	       `state.order`. A comparator can be applied on the client side to sort in
	       the order defined if `options.side` is `"client"`. By default the
	       comparator is applied to the #fullCollection. Set `options.full` to
	       `false` to apply a comparator to the current page under any mode. Setting
	       `sortKey` to `null` removes the comparator from both the current page and
	       the full collection.

	       If a `sortValue` function is given, it will be passed the `(model,
	       sortKey)` arguments and is used to extract a value from the model during
	       comparison sorts. If `sortValue` is not given, `model.get(sortKey)` is
	       used for sorting.

	       @chainable

	       @param {string} sortKey See `state.sortKey`.
	       @param {number} [order=this.state.order] See `state.order`.
	       @param {Object} [options]
	       @param {"server"|"client"} [options.side] By default, `"client"` if
	       `mode` is `"client"`, `"server"` otherwise.
	       @param {boolean} [options.full=true]
	       @param {(function(Backbone.Model, string): Object) | string} [options.sortValue]
	    */
	    setSorting: function (sortKey, order, options) {

	      var state = this.state;

	      state.sortKey = sortKey;
	      state.order = order = order || state.order;

	      var fullCollection = this.fullCollection;

	      var delComp = false, delFullComp = false;

	      if (!sortKey) delComp = delFullComp = true;

	      var mode = this.mode;
	      options = _extend({side: mode == "client" ? mode : "server", full: true},
	                        options);

	      var comparator = this._makeComparator(sortKey, order, options.sortValue);

	      var full = options.full, side = options.side;

	      if (side == "client") {
	        if (full) {
	          if (fullCollection) fullCollection.comparator = comparator;
	          delComp = true;
	        }
	        else {
	          this.comparator = comparator;
	          delFullComp = true;
	        }
	      }
	      else if (side == "server" && !full) {
	        this.comparator = comparator;
	      }

	      if (delComp) this.comparator = null;
	      if (delFullComp && fullCollection) fullCollection.comparator = null;

	      return this;
	    }

	  });

	  var PageableProto = PageableCollection.prototype;

	  return PageableCollection;

	}));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	var Comment = Backbone.Model.extend({

	})

	module.exports = Comment;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	//load subview
	var comment_item_view = __webpack_require__(27);

	var comments_view = Backbone.View.extend({
		className:"comments_view",
	    template: _.template($("#comments_template").html()),
	    initialize:function(options){
	    	this.options = options;
	    },
	    render: function() {
	        var that = this;
	        this.options.collection.fullCollection.forEach(function(comment){
	                var commentItemView = new comment_item_view({model:comment});
	                this.$el.append( commentItemView.render().el );
	        },that)
	        return this;
	    }
	})

	module.exports = comments_view;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);


	var comment_item_view = Backbone.View.extend({
		className:"comment_item",
	    template: _.template($("#comment_item_template").html()),
	    render: function() {
	    	this.$el.html(this.template(this.model.toJSON()));
	        return this;
	    }
	})

	module.exports = comment_item_view;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	var Nav = Backbone.Model.extend({

	})

	module.exports = Nav;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	var TipItem = Backbone.Model.extend({
		default:{
			title:'',
			url:'',
			views:0,
			likes:0,
			date:''
		}
	})

	module.exports = TipItem;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);

	//load model
	var TipItem = __webpack_require__(29);

	var TipListCollection = Backbone.Collection.extend({
		model:TipItem,
		url:'/api/tips.json'
	})

	module.exports = TipListCollection;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Backbone = __webpack_require__(6);
	var _ = __webpack_require__(7);

	//load model
	var TipListCollection = __webpack_require__(30);

	//load view
	var tip_item_view = __webpack_require__(17);

	var main_tip_view = Backbone.View.extend({
		className : 'tip',
		initialize:function(options){
			this.options = options;
		},
		render: function(){
			var tips = new TipListCollection;
			var that = this;
			tips.fetch().done(function(){
				tips.forEach(function(tip){
					var tipItemView = new tip_item_view({model:tip,router:this.options.router});
					this.$el.append( tipItemView.render().el );
				},that)
			});
			return this; 
		}
	})

	module.exports = main_tip_view;


/***/ }
/******/ ]);