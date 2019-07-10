/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - the 'this' keyword has no specific binding to an object so it will bind to the global window
object that host a large number of properties.

* 2. Implicit binding - the 'this' keyword will be defined within the object that hosts the pronoun.

* 3. New binding - the 'this' keyword will be used inside of a constructor object function and then will be defined by using 
the "new" keyword when the constructor function is envoked.

* 4. Explicit binding - the 'this' keyword will be defined OUTSIDE of the obeject/function that hosts the pronoun.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const outfit = {
    shirt: "polo",
    pants: "jeans",
    shoes: "Sperrys",
    fit: function () {
        return `Today I am wearing a ${this.shirt} shirt with ${this.pants} and ${this.shoes} for shoes.`;
    }
}
 console.log(outfit.fit());

// Principle 3

// code example for New Binding

let Archive = function(artist, genre, track) {
    this.artist = artist;
    this.genre = genre;
    this.track = track;
}

let mj = new Archive("Michael Jackson", "pop", "Thriller");
console.log(mj);

// Principle 4

// code example for Explicit Binding

let employee = function(skill1, skill2, skill3) {
    console.log(`My name is ${this.name} with ${this.experience} years of expertise in the skills of ${skill1}, ${skill2}, and ${skill3}`);
}

const skills = ["Wordpress", "Excel", "Photoshop"];

const Billy = {
    name: "Billy",
    age: 28,
    experience: 3,
}

employee.apply(Billy, skills);