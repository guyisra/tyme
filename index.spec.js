const timeMe = require('.')

describe('tyme', () => {
  it('converts from seconds to seconds', () => {
    expect(timeMe.seconds(10).inSeconds()).toEqual(10)
  })

  it('converts from minutes to seconds', () => {
    expect(timeMe.minutes(10).inSeconds()).toEqual(600)
  })

  it('converts from hours to seconds', () => {
    expect(timeMe.hours(10).inSeconds()).toEqual(36000)
  })

  it('converts from days to seconds', () => {
    expect(timeMe.days(1).inSeconds()).toEqual(86400)
  })

  it('converts from days to hours', () => {
    expect(timeMe.days(1).inHours()).toEqual(24)
  })

  it('converts from weeks to seconds', () => {
    expect(timeMe.weeks(10).inSeconds()).toEqual(6048000)
  })

  it('converts from months to seconds', () => {
    expect(timeMe.months(10).inSeconds()).toEqual(26784000)
  })

  it('converts from years to seconds', () => {
    expect(timeMe.years(1).inSeconds()).toEqual(31536000)
  })

  it('converts from decade to seconds', () => {
    expect(timeMe.decades(10).inSeconds()).toEqual(3153600000)
  })
})
