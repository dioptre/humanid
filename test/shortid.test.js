'use strict';

var humanid = require('..');
var expect = require('chai').expect;

describe('testing humanid', function(done) {

    beforeEach(function(){
        // reset to default alphabet
        humanid.seed(1);
        humanid.characters(false);
    });


    it('should run a bunch and never get duplicates', function(done) {
        humanid.seed(1);
        var ids = {};
        var id;

        var i=5000;
        while(i--) {
            id = humanid.generate();
            expect(id.length).to.be.below(17);
            ids[id] = ids[id] ? ids[id]++ : 1;
            expect(ids[id]).to.equal(1);
        }
        done();
    });
});
