// The style property will allow you to edit CSS from javascript:

// This method is not preferred because it edits the CSS stylings to be inline in HTML


// Changes h1 tags to have the color "Olive"
h1.style.color = 'olive';

h1.style.fontSize = '16px';
// Notice how what would normally be "font-size" in CSS is now "fontSize" in javascript. Everywhere there would normally be a dash in CSS is where you would camel case when editing styles in Javascript.

h1.style.border = '2px solid pink';

// More examples
const allLink = querySelectorAll('a');

for(let link of allLinks){
    allLink.style.color = 'cyan';
}
// The code above puts all links in a variable, then edits all links to be Cyan.




// A more preferred method of editing CSS styles in Javascript is editing the classes.

// This uses the set attribute to change the class of an html element in javascript, preferably setting the class to a set CSS class that already exists with its own styles.
h2.setAttribute('class, purple')

// This is one way you can change the class of content in javascript, but there is still a better way, by using the classList property

h2.classList.add('purple');

h2.classList.add('border')

// classList.add will add classes to an html element. The h2 element now has 2 classes assigned to it.

h2.classList.remove('border');
// You can also remove classes.

// A really common method is to toggle classes 
h2.classList.toggle('purple')
// If h2 already has a class called purple, you can remove it by toggling it, and enable it again by toggling again.