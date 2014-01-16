co-fbgraph
==========

[co](https://github.com/visionmedia/co) wrapper for [fbgraph](https://github.com/criso/fbgraph) package.



Quickstart
----------

```javascript
const fbgraph = require('co-fbgraph');

const user = yield fbgraph.get('/zuck');
console.log(user);
```



Usage
--------

Please refer to the [documentation of fbgraph](https://github.com/criso/fbgraph#readme).



Installation
------------

	$ npm install co-fbgraph



Requirements
------------

Node 0.11+, run with `--harmony` flag.



License
-------

MIT
