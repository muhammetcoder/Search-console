function googleSearch() {
    var inputValue = document.getElementById('searchInput').value;
    var searchQuery = "https://www.google.com/search?q=" + encodeURIComponent(inputValue);
    window.location.href = searchQuery;
}