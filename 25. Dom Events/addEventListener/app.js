const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('You clicked me');
    console.log('I hope it worked');
}

function scream(){
    console.log('aaaaaa');
    console.log('stop that');
}

// None of the functions above are being used, only defined.
// Below, we are going to use them.
btn.onmouseenter = scream;
//on mouse enter just means when the mouse enters the button.


document.querySelector('h1').onclick = function() {
        alert('you clicked the h1');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
    alert("CLICKED!!!!");
})

