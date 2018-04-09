// //.......................v2.0
//
// function Person(fullName, favColor){
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//     }
// }
//
// module.exports = Person;

//.......................v3.0

class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hi (using ec6) my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

//module.exports = Person; //using node exports
export default Person; //using ecma6 export
