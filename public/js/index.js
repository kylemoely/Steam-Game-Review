const formEl = document.getElementById('formEl');
const searchInput = document.getElementById('searchInput');


const search = async (event) => {
    event.preventDefault();
    const gameToSearch = searchInput.value.trim();
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
    if(games.length===1){
        location.href = `/reviews/${games[0].id}` // url should redirect to the specific game's page to show all reviews for that game
    }else{
        // go to christian's page
    }
}

formEl.addEventListener('submit', search);

document.getElementById