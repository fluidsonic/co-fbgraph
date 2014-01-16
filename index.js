'use strict';

const fbgraph = require('fbgraph');


exports.version = fbgraph.version;

// sync(method)
sync('getAccessToken');
sync('getGraphUrl');
sync('getOauthUrl');
sync('getOptions');
sync('setAccessToken');
sync('setGraphUrl');
sync('setOptions');

// async(method, #arguments excluding callback)
async('authorize', 1);
async('del', 1);
async('extendAccessToken', 1);
async('fql', 1);
async('get', 2);
async('post', 2);
async('search', 1);



// async method wrapper
function async(key, argumentCount) {
	const originalMethod = fbgraph[key];
	const originalMethodBinder = originalMethod.bind.bind(originalMethod, fbgraph);
	const proxy = originalMethodBinder.apply.bind(originalMethodBinder, null);

	exports[key] = function() {
		const parameters = Array.prototype.slice.call(arguments, 0, argumentCount);
		parameters.length = argumentCount;

		return proxy(parameters);  // -> fbgraph[key].bind(fbgraph, parameters…)
	};
}


// sync method wrapper
function sync(key) {
	exports[key] = fbgraph[key].bind(fbgraph);
}
