// 

// Selects the first link
const firstLink = document.querySelector('a');

// This fetches an attribute of an element, if there is no attribute associated, the console will return "null"

firstLink.getAttribute('class');

// The code below changes the id of an html element. This will change any css stylings on this element, since the css file still refers to "banner".

document.querySelector('#banner').id = "siteBanner";


// This is how you would change the content of an HTML attribute from Javascript. We are changing an href link from an anchor tag from one website to google.com

const firstLink = document.querySelector('a');

firstLink.setAttribute('href', 'https://www.google.com');
// The first argument is the attribute we are going to edit, the second argument is the content we are replacing the current attribute with.