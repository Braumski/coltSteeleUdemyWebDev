// innerHTML, textContent, & innerText ////////////////////////////////////

// Takes the first paragraph and changes its text "innerText" to "lolololol"
document.querySelector('p').innerText = 'lolololol';

document.querySelector('p').textContent = 'lolololol';

// The difference between textContent and innerText is that textContent will still display content that has its display set to none in CSS.


// This code below changes the text of all links on a page into ("I am a link");
const allLinks = document.querySelectorAll('a');

for(let link of links){
    link.innerText = "I am a link"
}

// innerText and textContent are more literally just inserting text, but using innerHTML will allow you to use HTML markup such as <i></i> when editing elements. You can also remove markup and edit html markup with innerHTML.

//edits all paragraphs to contain "lolololol" in italics.

document.querySelectorAll('p').innerHTML = '<i>lolololol</i>';

// You can use plus equals += to add on to and element instead of just completely replacing it like "=" does. The text below would just be added to the end of whatever text already exists in the html doc.

document.querySelectorAll('p').innerHTML += '<i>lolololol</i>';
