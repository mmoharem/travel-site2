// var $ = require('jquery'); //test.. Using the jquery liberary

var Person = require('./modules/Person');
// using a blue print constractor function "us capital "
// a word new in js is an operator to creat new instance



var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "red");
jane.greet();

//$("h1").remove(); //test.. Usin jquery to remove all h1 headimg.
