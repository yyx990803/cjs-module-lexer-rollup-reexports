'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var foo = require('foo');



Object.keys(foo).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return foo[k];
		}
	});
});
