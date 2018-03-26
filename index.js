class TimeUnit {
  constructor(units) {
    this.units = units

    timeUnits.forEach(klassTo => {
      this.constructor.prototype[`in${klassTo.name}s`] = function() {
        return this.convertTo(klassTo)
      }
    })
  }

  convertTo(otherUnit) {
    return this.units * this.constructor.inSeconds() / otherUnit.inSeconds()
  }
}

class Second extends TimeUnit {
  static inSeconds() {
    return 1
  }
}

//https://en.wikipedia.org/wiki/Orders_of_magnitude_(time)#High_orders_of_magnitude_-_1_s_and_beyond
class Killosecond extends timeUnit {
  static inSeconds() {
    return 16 * Minute.inSeconds() + 40 * Second.inSeconds()
  }
}

class Minute extends TimeUnit {
  static inSeconds() {
    return Second.inSeconds() * 60
  }
}

class Hour extends TimeUnit {
  static inSeconds() {
    return Minute.inSeconds() * 60
  }
}

class Day extends TimeUnit {
  static inSeconds() {
    return Hour.inSeconds() * 24
  }
}
class Megasecond extends timeUnit {
  static inSeconds() {
    return (
      11 * Day.inSeconds() +
      13 * Hour.inSeconds() +
      46 * Minute.inSeconds() +
      40 * Second.inSeconds()
    )
  }
}

class Week extends TimeUnit {
  static inSeconds() {
    return Day.inSeconds() * 7
  }
}

class Month extends TimeUnit {
  static inSeconds() {
    return Day.inSeconds() * 31
  }
}

class Year extends TimeUnit {
  static inSeconds() {
    return Day.inSeconds() * 365
  }
}

class Decade extends TimeUnit {
  static inSeconds() {
    return Year.inSeconds() * 10
  }
}

class Millisecond extends TimeUnit {
  static inSeconds() {
    return Second.inSeconds() / 1000
  }
}

const timeUnits = [Second, Minute, Hour, Day, Week, Month, Year, Decade, Millisecond, Killosecond]

const timeFunctions = {}
timeUnits.forEach(timeUnit => {
  const funcName = `${timeUnit.name.toLocaleLowerCase()}s`
  timeFunctions[funcName] = units => {
    return new timeUnit(units)
  }
})

module.exports = timeFunctions
