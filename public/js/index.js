const searchInput = document.getElementById('searchInput')

    searchInput.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault()
    sessionStorage.clear()
    let searchQuery = searchInput.value
    sessionStorage.setItem('1', searchInput.value)
    window.location.href = ('/results')
    }
  });

