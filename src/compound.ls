Signal = require \signals

class CompoundSignal extends Signal
  (...signals) ->
    super!

    @counter = signals.length
    @results = []

    for signal, index in signals
      signal.add-once @callback(index), @

  callback: (index) ->
    (...args) ->
      @results[index] = args
      @dispatch ...@results if --@counter is 0

module.exports = CompoundSignal