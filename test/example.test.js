'use strict';

var personid = require('..');
var expect = require('chai').expect;

describe('testing personid', function(done) {

    before(function(){
        // reset to default alphabet
        personid.seed(1);
        personid.characters(false);
    });

    var i;
    for (i=1; i < 11; i++) {
        var id = personid.generate();
        it(i + ') should print 10 examples: ' + id, function(done){
            expect(id).to.not.be.empty;
            expect(personid.isValid(id)).to.equal(true);
            //TODO: check if valid id
            done();
        });
    }
});
