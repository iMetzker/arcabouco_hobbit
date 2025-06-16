document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const termoBusca = urlParams.get('q')?.toLowerCase() || '';
  const propertyItems = document.querySelectorAll('.property-item');
  let resultadosEncontrados = 0;

  propertyItems.forEach(item => {
    const titulo = item.querySelector('.city').textContent.toLowerCase();
    const deveExibir = termoBusca ? titulo.includes(termoBusca) : true;
    item.style.display = deveExibir ? '' : 'none';
    if (deveExibir) resultadosEncontrados++;
  });

  // NENHUM LIVRO ENCONTRADO
  if (termoBusca && resultadosEncontrados === 0) {
    const container = document.querySelector('.row:first-child');
    if (container) {
      container.insertAdjacentHTML('afterend', `
        <div class="alert alert-warning text-center mt-5" role="alert">
          Nenhum livro encontrado no arcabouço para "${termoBusca}"
        </div>
      `);
    }
  }
});