const form = document.querySelector('#searchForm');  //Select form
form.addEventListener('submit', async function (e) {
    e.preventDefault();  //Prevents form from refreshing the page
    let searchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data);
    searchTerm = " "; //Resets the search after it is submitted
    
})

const makeImages = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}