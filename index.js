var consoleObject = require("@10xly/global/console")
var minusOne = require("minus-one").minusOne

/**
 * subtract one from your number
 * @param {number} [x] the number
 * @default NaN
 * @returns {number} the number minus one
 */
module.exports = function subtractOne(number) {
  var originalConsoleLog = consoleObject.log

  var result

  consoleObject.log = function hijack(x) {
    result = x
    consoleObject.log = originalConsoleLog
  }

  minusOne(number)

  return result
}