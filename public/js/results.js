const saveSearch = (game) => {
    const storageItems = Object.keys(localStorage);
    if(storageItems.length>9){
        localStorage.removeItem(storageItems[storageItems.length-1]);
    }
    localStorage.setItem(game, 'true');
}

function fetchcall(searchQuery) {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '565fcd2247mshdaedeaabfbb3949p11578ejsn68e7dabd0041',
            'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'
    
        }
    }
    let url = `https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/?search_value=${searchQuery}`


fetch(url, options)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    let mainBox = document.getElementById("mainbox");
    mainBox.innerHTML = ''

    for (let i = 0; i < 10; i++) {
      let card = document.createElement('div');
      card.className = 'card';
      card.id = `card${i}`;

      let title = document.createElement('h2');
      title.textContent = data[i].title;

      let image = document.createElement('img');
      image.src = data[i].image_thumbnail;
      image.width = 250;
      image.height = 100;

      card.appendChild(title);
      card.appendChild(image);
      mainBox.appendChild(card);


      card.addEventListener('click', function(event) {
        console.log('Clicked card:', card);
        saveSearch (data[i].title)
        let newUrl = `/${data[i].game_id}` 
        window.location.href = newUrl
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.querySelector('input')

    searchInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault()
    let searchQuery = searchInput.value
    console.log("Search query:", searchQuery);
    fetchcall(searchQuery)
    }
  });
});


