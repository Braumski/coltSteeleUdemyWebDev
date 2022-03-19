const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function(e)){
//     console.log("Hello");
// }

/* This will print "Hello" when the user clicks out of
an input box and the input was different than before*/

input.addEventListener('input', function (e){
    h1.innerText = input.value;
});

/* This replaces the first h1 tag with what you are
typing in the input box as you are typing it live*/