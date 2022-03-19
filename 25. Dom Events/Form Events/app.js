const form = document.querySelector("#shelterForm"); //Selecting the form
const input = document.querySelector("#catName"); //Selecting the input box of catName
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    e.preventDefault(); //Prevents the default behavior of the form (The default bheavior loads a new page)
    console.log(input.value); // .value gives the user-given text in our #catName input box
    const catName = input.value;
    const newList = document.createElement("li"); //declaration of newList, its no being used yet
    newList.innerText = catName;  // newList gets used here. newList makes a blank <li></li>, and we insert text into it.
    // It still can't be seen because it hasn't been appended.
    list.append(newList); //append the list
    input.value = ""; //Clears the input box after a submission
});