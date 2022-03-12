const button = document.querySelector('button');
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
    const random255 = Math.floor(Math.random() * 255);
    console.log(random255);
})

