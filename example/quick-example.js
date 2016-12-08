var pull = require('pull-stream')
var probe = require('../')

pull(
    pull.count(3),
    probe('quick-example'),
    pull.drain()
)
