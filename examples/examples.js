var personid = require('..');

//Generate 10 ids

var i = 10;
while (i--) {
    console.log(personid.generate());
}
