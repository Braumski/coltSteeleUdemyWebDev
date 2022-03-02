// Methods
 "hello".toUpperCase();  //String method

 [1,2,3].indexOf(2)  //Array method

//  Every method is a function, but not every function is a method

//  We can add functions as properties on objects, we call them methods.

const myMath ={
    square: function (num){
        return num * num;
    },
    cube: function (num){
        return num ** 3;
    }
}

//  This is done so often that there is a relatively new shorthand for it
//  where the function keyword is left out

const math = {
    add(x, y){
        return x + y;
    },                  //You need commas because you are in an object
    multiply(x, y){
        return x * y;
    }
}
math.add(3, 4)
// expected output is 7