// GARANTINDO O CAMINHO RAIZ DO PROJETO
function getPathToRoot() {
  const depth = window.location.pathname.split('/').length - 2;
  return '../'.repeat(depth);
}

const basePath = getPathToRoot();

// COMPORTAMENTO DE REDIRECIONAR A PAGINA
function carregarComponente(idElement, caminhoDoComponente, callback = null) {
  fetch(caminhoDoComponente)
    .then(response => response.text())
    .then(html => {
      document.getElementById(idElement).innerHTML = html;
      if (callback) callback();
    })
    .catch(erro => {
      console.error(`Erro ao carregar ${caminhoDoComponente}:`, erro);
    });
}

// CARREGANDO COMPONENTES DA PÁGINA
carregarComponente('menu-home',  `${basePath}/app/layout/menu_home.html`, siteMenuClone);
carregarComponente('menu-internal',  `${basePath}/app/layout/menu_internal.html`, siteMenuClone);
carregarComponente('footer-container', `${basePath}/app/layout/footer.html`, siteMenuClone);
