var $ = require('jquery'); //test.. Using the jquery liberary

var Person = require('.modules/Peron');
// using a blue print constractor function "us capital "
// a word new in js is an operator to creat new instance

// alert("testing agujcnwdnw;dl;wdl;w part-3");

class Adult extends Person {  //ex using the power of inhertance ec6.
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes.");
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "red");
jane.greet();
jane.payTaxes();

//$("h1").remove(); //test.. Usin jquery to remove all h1 headimg.
