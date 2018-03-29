const tyme = require('.')

describe('tyme', () => {
  it('converts from milliseconds to seconds', () => {
    expect(tyme.milliseconds(1000).inSeconds()).toEqual(1)
  })

  it('converts from milliseconds to minutes', () => {
    expect(tyme.milliseconds(60000).inMinutes()).toEqual(1)
  })

  it('converts from seconds to seconds', () => {
    expect(tyme.seconds(10).inSeconds()).toEqual(10)
  })

  it('converts from minutes to seconds', () => {
    expect(tyme.minutes(10).inSeconds()).toEqual(600)
  })

  it('converts from hectosecond to seconds', () => {
    expect(tyme.hectoseconds(1).inSeconds()).toEqual(100)
  })
  it('converts from killsecond to seconds', () => {
    expect(tyme.killoseconds(1).inSeconds()).toEqual(1000)
  })
  it('converts from gigaseconds to seconds', () => {
    expect(tyme.gigaseconds(1).inSeconds()).toEqual(1002412800)
  })
  it('converts from terasecond to seconds', () => {
    expect(tyme.teraseconds(1).inSeconds()).toEqual(996537600000)
  })

  it('converts from hours to seconds', () => {
    expect(tyme.hours(10).inSeconds()).toEqual(36000)
  })

  it('converts from days to seconds', () => {
    expect(tyme.days(1).inSeconds()).toEqual(86400)
  })

  it('converts from weeks to Days', () => {
    expect(tyme.weeks(10).inDays()).toEqual(70)
  })
  it('converts from days to hours', () => {
    expect(tyme.days(1).inHours()).toEqual(24)
  })

  it('converts from months to seconds', () => {
    expect(tyme.months(10).inSeconds()).toEqual(26784000)
  })

  it('converts from years to seconds', () => {
    expect(tyme.years(1).inDays()).toEqual(365)
  })

  it('converts from decade to seconds', () => {
    expect(tyme.decades(10).inSeconds()).toEqual(3153600000)
  })
})
