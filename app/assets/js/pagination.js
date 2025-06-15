document.addEventListener("DOMContentLoaded", function () {
  const livrosPorPagina = 6;

  const livros = Array.from(
    document.querySelectorAll(".section-properties .row > .col-xs-12")
  );
  const paginacaoLinks = document.querySelectorAll(".custom-pagination a");
  const paginacaoTexto = document.querySelector(".pagination");
  const totalPaginas = paginacaoLinks.length;

  function mostrarPagina(pagina) {
    // CALCULANDO O INDICE 1 E O FINAL COM BASE NA QUANTIDADE DE LIVROS
    const inicio = (pagina - 1) * livrosPorPagina;
    const fim = inicio + livrosPorPagina;

    // MOSTRAR E ESCONDER LIVROS
    livros.forEach((livro, idx) => {
      if (idx >= inicio && idx < fim) {
        livro.style.display = "";
      } else {
        livro.style.display = "none";
      }
    });

    paginacaoLinks.forEach((link) => link.classList.remove("active"));
    paginacaoLinks[pagina - 1].classList.add("active");

    // PAGINAÇÃO
    if (paginacaoTexto) {
      paginacaoTexto.textContent = `Paginação (${pagina} de ${totalPaginas})`;
    }
  }

  paginacaoLinks.forEach((link, idx) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      mostrarPagina(idx + 1);
    });
  });

  mostrarPagina(1);
});
