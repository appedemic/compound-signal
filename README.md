compound-signal
===============

Dispatch after multiple signals are triggered.

Example:

```js
var Signal = require('signals');
var CompoundSignal = require('compound-signal');

var s1 = new Signal();
var s2 = new Signal();

var cs = new CompoundSignal(s1, s2);

cs.add(function(argsS1, argsS2) {
  console.log(argsS1, argsS2);
});

s1.dispatch('from s1');
s2.dispatch();
```