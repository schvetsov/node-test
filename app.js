var hello = require('./hello');
var name = require('./names.json');

hello.world();
hello.person.greet();
console.log(name.name);

var Greet4 = require('./greet');
var grtr = new Greet4();
grtr.greet();