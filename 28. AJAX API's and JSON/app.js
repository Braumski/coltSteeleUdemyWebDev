/* AJAX (Asynchronous Javascript and XML) */

/* AJAX makes page requests on the fly while a webpage or webapp
has already been loaded. For example, a search bar giving a live
update as you type into a search bar, or when scrolling down on
a social media app liek reddit or instagram, posts being loaded
indefinitely as you go. */

/* The data that is fetched is not html,css,or javascript. The data
is information in the format of .json */


// Making XML Http requests is the old way of making api calls

// Today, the fetch api is used because it supports promises.

fetch("https://swapi.dev/api/people/1")   //Returns a promise for now
    .then((res) => {
        console.log("RESOLVED!", res);  //Returns a readable stream
        res.json().then(data => console.log ("JSON DONE", data));
})
    .catch((e) => {
        console.log("Error", e);
    })

// Using async function

const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);
}

// Using Axios, a third party library not native to Javascript for
// making http requests

// In hte HTML file, there is a script that allows us to use
// axios, taken from the npm website

axios.get("https://swapi.dev/api/people/1") //Returns a promise, just like fetch
.then((res) => {
    console.log("RESPONSE: ", res) 
})
.catch((e) => {
    console.log("Error ", e);
})

//Axios automatically parses the Json into a javascript object, requiring much less code

//Axios with async

const getStarWarsPerson = async (id) => {
    try{
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
    } catch(e) {
        console.log("Error", e);
    }
}

getStarWarsPerson(5);
getStarWarsPerson(10);