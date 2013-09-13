Signal = require \signals

class CompoundSignal extends Signal
  (...signals) ->
    super!
    @counter = signals.length
    @callback = -> @dispatch! if --@counter is 0
    [signal.add-once @callback, @ for signal in signals]

module.exports = CompoundSignal