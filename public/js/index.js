const formEl = document.getElementById('formEl');
const searchInput = document.getElementById('searchInput');


document.addEventListener('DOMContentLoaded', function() {
    let searchInput = document.querySelector('input')

    searchInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault()
    sessionStorage.clear()
    let searchQuery = searchInput.value
    sessionStorage.setItem('1', searchInput.value)
    window.location.href = ('/results')
    }
  });
});
