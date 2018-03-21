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
  static inSeconds () {
    return Second.inSeconds() / 1000
  }
}

const timeUnits = [Second, Minute, Hour, Day, Week, Month, Year, Decade, Millisecond]


const timeFunctions = {}
timeUnits.forEach(timeUnit => {
  const funcName = `${timeUnit.name.toLocaleLowerCase()}s`
  timeFunctions[funcName] = units => {
    return new timeUnit(units)
  }
})

module.exports = timeFunctions
