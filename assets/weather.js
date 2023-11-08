var searchButtonEl = document.querySelector('.search-Button');
var locationSearch = document.querySelector('#locationSearch');



const cityCoords = () => {
    const cityName = locationSearch.value.trim();
    if(!cityName) return;

    console.log(cityName);
}



searchButtonEl.addEventListener('click', cityCoords());
   

