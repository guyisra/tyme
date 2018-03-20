class TimeUnit {
  constructor(units) {
    this.units = units
  }

  inSeconds() {
    return this.units
  }
}

class Second extends TimeUnit {

  inMinutes() {
    return this.units / 60
  }

}

class Minute extends Second {
  constructor(units) {
    super(units)
  }

  inSeconds() {
    return super.inSeconds() * 60
  }
}

class Hour extends Minute {
  constructor(units) {
    super(units)
  }

  inSeconds() {
    return super.inSeconds() * 60
  }
}

class Day extends Hour {
  constructor(units) {
    super(units)
  }

  inSeconds() {
    return super.inSeconds() * 24
  }
}

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
  days,
  weeks,
  months,
  years,
  decades
}
