// The DOM (Document Object Model) is a javascript representation of a webpage. It allows Javascript to interact with the webpage.

// To select an object in the Document Object Model:
//    --getElementById
//    --getElementsByTagName
//    --getElementsByClassName

document.getElementById('banner')

// Retreiving the banner image


const banner = document.getElementById('banner');

// Saving it to a variable

banner.dir('banner');


// There is actually a newer way to select elements in Javascript called query selector. This is one method that can select whatever you want using the identifiers used in css, for example...

//Finds first h1 element:
document.querySelector('h1');

//Finds first element with ID of red:
document.querySelector('#red');

//Finds first h1 element:
document.querySelector('.big');

// You can also use other css selectors in the argument of a query selector:

//Finds second img tag
document.querySelector('img:nth-of-type(2)');


// You can also select all elements that match

///Finds all h1 elements
document.querySelectorAll('h1');

// You can also use other css selectors like the descendant selector

// Finds all anchor tags in a paragraph
document.querySelectorAll('p a');


