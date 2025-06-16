document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');

  if (form && input) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const termo = input.value.trim().toLowerCase();
      if (termo) {
        window.location.href = `./app/pages/search_books.html?q=${encodeURIComponent(termo)}`;
      } else {
        window.location.href = `./app/pages/search_books.html`;
      }
    });
  }
});