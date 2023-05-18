function fetchcall() {
let options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '565fcd2247mshdaedeaabfbb3949p11578ejsn68e7dabd0041',
        'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'

    }
}
let url = 'https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/?search_value=Dota'

fetch(url, options).then (function(response) {
    return response.json()
}).then(function(data) {
    console.log(data)
for (let i = 0; i < 10; i++) {
  let results = data;
  let mainBox = document.getElementById("mainbox");
  const content = `
    <div class="card" id='card${i}'>
      <h2>${data[i].title}</h2>
      <img id='clickme${i}' src="${data[i].image_thumbnail}" width="250" height="100">
    </div>`;
  mainBox.innerHTML += content;

    const card = document.getElementById(`card${i}`);
    card.addEventListener('click', function(event) {
      console.log('Clicked card:', card);
    });
}
})
}

fetchcall()
// take event out of loop
//after generated make new loop 
//const cards = documnetqueryselectorall .card
//loop array for event listners
//inside of function event.target
// const cards = document.querySelectorAll('.card')
// cards.addEventListener('click', function(event) {
//   console.log('Clicked card:', cards);
// });