// CARREGANDO O FOOTER
function carregarComponente(idElement, footer) {
  fetch(footer)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idElement).innerHTML = html;
    })
    .catch(erro => {
      console.error("Erro ao carregar o footer", erro);
    });
}
carregarComponente('footer-container', '../../../app/layout/footer.html');

// CARREGANDO O MENU HOME
function carregarComponente(idElement, menu) {
  fetch(menu)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idElement).innerHTML = html;
    })
    .catch(erro => {
      console.error("Erro ao carregar o menu", erro);
    });
}
carregarComponente('menu-home', '../../../app/layout/menu_home.html');

// CARREGANDO O MENU INTERNAL
function carregarComponente(idElement, menu) {
  fetch(menu)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idElement).innerHTML = html;
    })
    .catch(erro => {
      console.error("Erro ao carregar o menu", erro);
    });
}
carregarComponente('menu-internal', '../../../app/layout/menu_internal.html');