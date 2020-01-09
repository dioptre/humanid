'use strict';
var alphabet = require('./alphabet');

function ispersonid(id) {
    if (!id || typeof id !== 'string' || id.length < 10 ) {
        return false;
    }

    var alphabetic = new RegExp('^[' + alphabet.get() + ']*$');
    return alphabetic.test(id);
}

module.exports = ispersonid;
