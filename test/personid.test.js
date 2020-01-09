'use strict';

var personid = require('..');
var expect = require('chai').expect;

describe('testing personid', function(done) {

    beforeEach(function(){
        // reset to default alphabet
        personid.seed(1);
        personid.characters(false);
    });


    it('should run a bunch and never get duplicates', function(done) {
        personid.seed(1);
        var ids = {};
        var id;

        var i=5000;
        while(i--) {
            id = personid.generate();
            expect(id.length).to.be.below(17);
            ids[id] = ids[id] ? ids[id]++ : 1;
            expect(ids[id]).to.equal(1);
        }
        done();
    });
});
