'use strict';

var humanid = require('..');
var expect = require('chai').expect;

describe('testing humanid', function(done) {

    before(function(){
        // reset to default alphabet
        humanid.seed(1);
        humanid.characters(false);
    });

    var i;
    for (i=1; i < 11; i++) {
        var id = humanid.generate();
        it(i + ') should print 10 examples: ' + id, function(done){
            expect(id).to.not.be.empty;
            expect(humanid.isValid(id)).to.equal(true);
            //TODO: check if valid id
            done();
        });
    }
});
