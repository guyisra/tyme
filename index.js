class TimeUnit {
  constructor(units) {
    this.units = units
  }
  
}

class Second extends TimeUnit {
  static stepUp() {
    return 60
  }

  static stepDown() {
    return 1000
  }
}

class Minute extends TimeUnit {
  static stepUp() {
    return 60
  }

  static stepDown() {
    return 60
  }
}

class Hour extends TimeUnit {
  static stepUp() {
    return 24
  }

  static stepDown() {
    return 60
  }
}

class Day extends TimeUnit {
  static stepUp() {
    return 7
  }

  static stepDown() {
    return 24
  }
}

const timeUnits = [Second, Minute, Hour, Day]

timeUnits.forEach(klassFrom => {
  timeUnits.forEach(klassTo => {
    klassFrom.prototype[`in${klassTo.name}s`] = function(){
      const from = timeUnits.findIndex(x => x === klassFrom)
      const to = timeUnits.findIndex(x => x === klassTo)
      if (to < from) {
        return (
          this.units *
          timeUnits.slice(to, from).reduce((prev, current) => prev * current.stepUp(), 1)
        )
      } else {
        return (
          this.units *
          timeUnits.slice(from, to).reduce((prev, current) => prev / current.stepDown(), 1)
        )
      }
    }
  })
})

const seconds = units => {
  return new Second(units)
}

const minutes = units => {
  return new Minute(units)
}

const hours = units => {
  return new Hour(units)
}

const days = units => {
  return new Day(units)
}

// const weeks = numOfHours => {
//   return new Hour(numOfHours)
// }

// const months = numOfHours => {
//   return new Hour(numOfHours)
// }

// const years = numOfHours => {
//   return new Hour(numOfHours)
// }

// const decades = numOfHours => {
//   return new Hour(numOfHours)
// }

module.exports = {
  seconds,
  minutes,
  hours,
  days
  // weeks,
  // months,
  // years,
  // decades
}

// console.log(hours(5).inSeconds())
