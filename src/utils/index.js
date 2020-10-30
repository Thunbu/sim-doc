/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 14:40
 * @function
 * @name: addClass
 * @Description: 给元素添加类名
 * @param: {Element} dom
 * @param: {String} className
 * @return: void
 */
export const addClass = (dom, className) => {
	const ele = typeof dom === 'object' && isDom(dom) ? dom : document.querySelector(dom);
	if (ele && !hasClass(ele, className)) {
		const eleClassName = ele.className;
		if (!eleClassName.indexOf(className) > -1) {
			ele.className += ' ' + className;
		}
	}
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 14:51
 * @function
 * @name: removeClass
 * @Description: 删除类名
 * @param: {Element} dom
 * @param: {String} className
 * @return: void
 */
export const removeClass = (dom, className) => {
	const ele = typeof dom === 'object' && isDom(dom) ? dom : document.querySelector(dom);
	if (ele && hasClass(ele, className)) {
		const regexp = new RegExp('\\s?' + className, 'g');
		ele.className = ele.className.replace(regexp, '');
	}
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 14:43
 * @function
 * @name: typeOf
 * @Description: 判断数据类型
 * @param: {any} data
 * @return: {String} type
 */
export const typeOf = (data) => {
	const type = Object.prototype.toString.call(data);
	return type.substring(type.indexOf(' ') + 1, type.length - 1);
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 14:56
 * @function
 * @name: isDom
 * @Description: 判断对象类型是否为dom
 * @param: {Object} dom
 * @return: {Boolean} type
 */
export const isDom =
	(typeof HTMLElement === 'object')
		?
		(obj) => {
			return obj instanceof HTMLElement;
		}
		:
		(obj) => {
			return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
		};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 15:06
 * @function
 * @name: ajax
 * @Description: 发起请求
 * @param: {Object} params
 * @return: {Promise<any>}
 */
export const ajax = (options = {}) => {
	return new Promise((resolve, reject) => {
		options.type = (options.type || "GET").toUpperCase();
		options.dataType = options.dataType || "json";
		let header = options.header || {};
		let params = formatParams(options.data);
		let xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				try {
					if (xhr.status >= 200 && xhr.status < 300) {
						if (options.dataType === 'json') {
							return resolve(JSON.parse(xhr.response));
						} else {
							return resolve(xhr);
						}
					} else {
						console.error(xhr);
						if (options.dataType === 'json') {
							try {
								reject(JSON.parse(xhr.response))
							} catch (e) {
								reject(xhr.response);
							}
						} else {
							reject(xhr.response);
						}
					}
				} catch (e) {
					reject(e);
				}
			}
		};
		if (options.type === "GET") {
			xhr.open("GET", options.url + "?" + params, true);
			for (let key in header) {
				if (header.hasOwnProperty(key)) {
					xhr.setRequestHeader(key, header[key]);
				}
			}
			xhr.send(null);
		} else if (options.type === "POST") {
			xhr.open("POST", options.url, true);
			for (let key in header) {
				if (header.hasOwnProperty(key)) {
					xhr.setRequestHeader(key, header[key]);
				}
			}
			/* todo POST方式请求时发送参数的位置不正确 */
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);
		}
	})
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 15:07
 * @function
 * @name: formatParams
 * @Description: 格式化GETurl
 * @param: {Object} data
 * @return: {String}
 */
export const formatParams = (data) => {
	const arr = [];
	for (let name in data) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
	}
	arr.push(("v=" + Math.random()).replace(".", ""));
	return arr.join("&");
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 15:26
 * @function
 * @name: getElementForAttribute
 * @Description: 通过attribute获取dom元素
 * @param: {String} className
 * @return: {Array} domList
 */
export const getElementForAttribute = (className = '', attribute = '', attributeVal = '') => {
	const selectDom = [];
	const dom = document.getElementsByClassName(className);
	for (let i = 0; i < dom.length; i++) {
		if (attributeVal === dom[i].getAttribute(attribute)) {
			selectDom.push(dom[i]);
		}
	}
	return selectDom;
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 15:29
 * @function
 * @name: getParentNode
 * @Description: 通过className获取指定的父级元素
 * @param: {Element} htmlElement
 * @param: {String} className
 * @return: {Element} parentNode
 */
export const getParentNode = (htmlElement, className = '') => {
	if (htmlElement.parentNode) {
		if (htmlElement.parentNode.className === className) {
			return htmlElement.parentNode;
		} else {
			return getParentNode(htmlElement.parentNode, className);
		}
	}
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 20:46
 * @function
 * @name: getChildNode
 * @Description: 获取所有的子节点
 * @param: {Element} dom
 * @param: {String} className
 * @return: {Array} documentList
 */
export const getChildNode = (dom, className) => {
	const childNodes = dom.children;
	const arr = [];
	for (let i = 0; i < childNodes.length; i++) {
		if (hasClass(childNodes[i], className)) {
			arr.push(childNodes[i]);
		}
	}
	return arr;
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 20:52
 * @function
 * @name: hasClass
 * @Description: 判断是否拥有该类名
 * @param: {Element} dom
 * @params: {String} className
 * @return: {Boolean} flag
 */
export const hasClass = (dom, className) => {
	return dom.className.indexOf(className) > -1;
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/2 15:33
 * @function
 * @name: removeAllClass
 * @Description: 删除每一个dom上某个className
 * @param: {Array} domList
 * @param: {String} className
 * @return: void
 */
export const removeAllClass = (elementList, className) => {
	const reg = new RegExp('\\s?' + className);
	for (let i = 0; i < elementList.length; i++) {
		elementList[i].className = elementList[i].className.replace(reg, '');
	}
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/4 14:00
 * @function
 * @name: throttle
 * @Description: 节流
 * @param: {Function} 回调函数
 * @param: {Number} 规定最多多长事件调用一次
 * @return: {Function} 回调函数
 */
export const throttle = (fn, time) => {
	let lastTime = null;
	return () => {
		let nowTime = new Date().getTime();
		if (nowTime - lastTime > time || !lastTime) {
			fn();
			lastTime = nowTime
		}
	}
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/4 14:05
 * @function
 * @name: getCurrentWidth
 * @Description: 获取最终宽度
 * @param: {Element} dom
 * @return: {Number} width
 */
export const getCurrentWidth = (dom) => {
	const ele = typeof dom === 'object' && isDom(dom) ? dom : document.querySelector(dom);
	return ele.clientWidth;
};

/**
 * @author: pengpeng pengkun06@gmail.com
 * @date: 2019/9/4 14:05
 * @function
 * @name: getCurrentHeight
 * @Description: 获取最终高度
 * @param: {Element} dom
 * @return: {Number} height
 */
export const getCurrentHeight = (dom) => {
	const ele = typeof dom === 'object' && isDom(dom) ? dom : document.querySelector(dom);
	return ele.clientHeight;
};
