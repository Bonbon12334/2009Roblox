// search.js: Handles the search input to filter games
const searchBar = document.getElementById('search-bar');
const games = document.querySelectorAll('.game');

searchBar.addEventListener('input', function() {
    const searchTerm = searchBar.value.toLowerCase();

    games.forEach(game => {
        const gameName = game.querySelector('.game-name').textContent.toLowerCase();
        if (gameName.includes(searchTerm)) {
            game.style.display = 'block'; // Show the game
        } else {
            game.style.display = 'none'; // Hide the game if it doesn't match
        }
    });
});
