const stringMath = require('string-math')

module.exports = timeUnits => {
  const normalize = expr => {
    timeUnits.forEach(element => {
      expr = expr.replace(new RegExp(element.symbol, 'g'), ` * (${element.value})`)
    })

    return expr.replace(/s/g, '')
  }

  return conversionValue => {
    let expr = conversionValue
    while (expr.match(/[a-z]/i)) {
      expr = normalize(expr)
    }

    return stringMath(expr)
  }
}
