var Signal, CompoundSignal, slice$ = [].slice;
Signal = require('signals');
CompoundSignal = (function(superclass){
  var prototype = extend$((import$(CompoundSignal, superclass).displayName = 'CompoundSignal', CompoundSignal), superclass).prototype, constructor = CompoundSignal;
  function CompoundSignal(){
    var signals, i$, len$, signal;
    signals = slice$.call(arguments);
    CompoundSignal.superclass.call(this);
    this.counter = signals.length;
    this.callback = function(){
      if (--this.counter === 0) {
        return this.dispatch();
      }
    };
    for (i$ = 0, len$ = signals.length; i$ < len$; ++i$) {
      signal = signals[i$];
      signal.addOnce(this.callback, this);
    }
  }
  return CompoundSignal;
}(Signal));
module.exports = CompoundSignal;
function extend$(sub, sup){
  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
  (sub.prototype = new fun).constructor = sub;
  if (typeof sup.extended == 'function') sup.extended(sub);
  return sub;
}
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}