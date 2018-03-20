const timeMe = require('.')

describe('ssseconds', () => {
  it('convet from seconds to seconds', () => {
    expect(timeMe.seconds(10).inSeconds()).toEqual(10)
  })

  it('convet from minutes to seconds', () => {
    expect(timeMe.minutes(10).inSeconds()).toEqual(600)
  })

  it('convet from hours to seconds', () => {
    expect(timeMe.hours(10).inSeconds()).toEqual(36000)
  })

  it('convet from days to seconds', () => {
    expect(timeMe.days(1).inSeconds()).toEqual(86400)
  })

  // it('convet from weeks to seconds', () => {
  //   expect(seconds.weeks(10).inSeconds()).toEqual(36000)
  // })

  // it('convet from months to seconds', () => {
  //   expect(seconds.months(10).inSeconds()).toEqual(36000)
  // })

  // it('convet from years to seconds', () => {
  //   expect(seconds.years(10).inSeconds()).toEqual(36000)
  // })
  // it('convet from decade to seconds', () => {
  //   expect(seconds.decades(10).inSeconds()).toEqual(36000)
  // })
})
