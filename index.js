const capitalize = require('capitalize')

const timeTypes = require('./lib/timeunits')

const conversionParser = require('./lib/conversionParser')(timeTypes)

class TimeUnit {
  constructor(units, name) {
    this.units = units
    this.name = name

    timeTypes.forEach(klassTo => {
      if (klassTo.name === 'second') {
        return
      }
      this.constructor.prototype[`in${capitalize(klassTo.name)}s`] = function() {
        return this.convertTo(klassTo)
      }
    })
  }

  static timeUnitConversionParser(timeunit) {
    return conversionParser(timeunit.value)
  }

  inSeconds() {
    const timeunit = timeTypes.filter(x => this.name === x.name)[0]
    return this.units * TimeUnit.timeUnitConversionParser(timeunit)
  }

  convertTo(otherUnit) {
    return (
      this.inSeconds() /
      conversionParser(timeTypes.filter(x => otherUnit.name === x.name)[0].value)
    )
  }
}
const timeFunctions = {}
timeTypes.forEach(timeUnit => {
  const functionName = timeUnit.name + 's'
  timeFunctions[functionName] = function(units) {
    return new TimeUnit(units, timeUnit.name)
  }
})

module.exports = {
  ...timeFunctions
}
