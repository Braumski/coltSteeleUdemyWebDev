const list = [];
let listItem =""
let initialInquiry = prompt("What would you like to do?");




if(initialInquiry = "new" || "add"){
    let addInquiry = prompt("What would you like to add?");
    list.push(addInquiry);
    for(listItem in list){
        console.log(`${listItem} ${list[listItem]}`);
        let addComplete = prompt(`${addInquiry} added, What would you like to do?`)
        if (addComplete ="new" || "add"){
            let addInquiry = prompt("What would you like to add?");
            list.push(addInquiry);
            for(listItem in list){
             console.log(`${listItem} ${list[listItem]}`);
             let addComplete = prompt(`${addInquiry} added, What would you like to do?`)
            }
        }   
    }   
}
while (initialStatement !== 'quit'){
    prompt("Unknown command, what would you like to do?");
}

