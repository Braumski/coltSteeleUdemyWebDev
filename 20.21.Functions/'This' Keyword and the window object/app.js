

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullname(){
        return `${this.first} ${this.last}`  // "This" is just referring to the object "person"
    }
}

console.log(person.fullname()); //"Robert Herjavec"

// The value of this depends on the invocation context of the function it is used in

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
        console.log(`${this.name} says MEOWWWW`);
    }
}
cat.meow(); // Blue Steele says MEOWWWW
// Below, we're putting cat.meow into a variable, making the

const meow2 = cat.meow;    // This is setting a variable that is calling the cat.meow function
meow2()  // says MEOWWWWW

// The invoking context is being changed between the 2 function calls.
// One is being called from the original function, and one is being
// called from a variable that then calls that same function.

// The keyword "this" is dependent on context, the global object of javascript
// is called "window". Everything that is typed into javascript technically has
// window behind it because it is the parent of everything, for example:

window.alert();
window.console.log();

// But this window object is invisible to us when we're writing in javascript.
// So when we use "this" and it doesn't refer to some parent, (e.g. in meow2()) it will refer to the object of the window, since it is the only remaining parent.