const sidebar = document.getElementById('sidebar');

const searchRecent = async (event) => {
    const gameToSearch = event.target.innerHTML;
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '565fcd2247mshdaedeaabfbb3949p11578ejsn68e7dabd0041',
            'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'
        }
    }
    let url = `https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/?search_value=${gameToSearch}`
    const response = await fetch(url, options);
    const games = await response.json();
    location.href = `/${games[0].id}` // url should redirect to the specific game's page to show all reviews for that game

}

const loadSearches = () => {
    const storage = Object.keys(localStorage);
    if(storage.length>0){
        for(let x=0;x<storage.length;x++){
            const recSearch = document.createElement('li');
            recSearch.setAttribute('class', 'recentSearch');
            recSearch.innerHTML = storage[x];
            sidebar.appendChild(recSearch); 
            recSearch.addEventListener('click', searchRecent);
        }
    }
}

loadSearches();