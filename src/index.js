var debug = require('debug')

module.exports = function (name) {
  var log = debug(name)

  return function (read) {
    log('received read function, returning source function')
    return function (abort, cb) {
      log('source(' + abort + (cb ? ',[' + (typeof cb) + ']' : '') + ')')
      read(abort, function next (err, data) {
        log('sink(' + err + (!err ? ',' + data : '') + ')')
        if (err) return cb(err)
        cb(err, data)
      })
    }
  }
}
