'use strict';

var foo = require('foo');



for (var k in foo) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = foo[k];
}
