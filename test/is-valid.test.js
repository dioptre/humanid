'use strict';

var isValid = require('../lib/is-valid');
var expect = require('chai').expect;

describe('testing is-valid', function() {

    it('should find these valid', function(done) {
        expect(isValid('FDUZXG8V38NQE0')).to.equal(true);
        expect(isValid('D3PDY5WZA5KXW8')).to.equal(true);
        expect(isValid('E3W9UWYN7DWBZ9')).to.equal(true);
        expect(isValid('1K3KGP6A6BYTKJ')).to.equal(true);
        expect(isValid('5PR6X3ZU6NTGQC')).to.equal(true);
        done();
    });

    it('should find these invalid', function(done) {
        expect(isValid('i have spaces')).to.equal(false);
        expect(isValid('i have \n breaks \n of \n the \n lines')).to.equal(false);
        expect(isValid('abc')).to.equal(false);
        expect(isValid(1234)).to.equal(false);
        expect(isValid('5PR6X3ZU6NTGQS')).to.equal(false);
        expect(isValid()).to.equal(false);
        done();
    });
});
