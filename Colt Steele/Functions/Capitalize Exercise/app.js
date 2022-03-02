// This function takes a sentence without a capital letter at the beginning and makes it capital. 

function capitalize(str){
    let firstLetter = (str.slice(0, str.length -(str.length-1)));
    let notFirstLetter = str.slice(1);
    return (firstLetter.toUpperCase() + notFirstLetter);
}



// My logic was right the entire time... I just forgot to put the parentheses after .toUpperCase()  ..........