Logs synchronization events inside a pull-stream. Follows the convention of the
debug module for activating the output.

Useful for debugging synchronization bugs in pull-stream modules in development
and trace the behaviour of tests.

Prints the 'source(abort, cb)' when its source is read, and prints 'sink(err, data)'
when it receives a value on its sink. 'cb(err, data)' is called immediately after
the sink received a value.

Quick Example
============

    var pull = require('pull-stream')
    var probe = require('pull-probe')

    pull(
      pull.count(3),
      probe('quick-example'),
      pull.drain()
    )

    // usage: DEBUG=quick-example node quick-example.js


