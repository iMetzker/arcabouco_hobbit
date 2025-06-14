document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.content-enrollment');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const motivo = form.querySelector('select').value;
    const mensagem = form.querySelector('textarea').value.trim();

    // VALIDAÇÃO DE CAMPO NULO
    if (!nome) {
      Swal.fire('Atenção', 'Por favor, preencha o nome completo.', 'warning');
      return;
    }

    if (!email) {
      Swal.fire('Atenção', 'Por favor, preencha o e-mail.', 'warning');
      return;
    }

    // VALIDAÇÃO SIMPLES EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire('Atenção', 'Por favor, insira um e-mail válido (ex: exemplo@dominio.com).', 'warning');
      return;
    }

    if (motivo === "Motivo" || !motivo) {
      Swal.fire('Atenção', 'Por favor, selecione o motivo do contato.', 'warning');
      return;
    }

    if (!mensagem) {
      Swal.fire('Atenção', 'Por favor, escreva sua mensagem.', 'warning');
      return;
    }

    // MENSAGEM DE SUCESSO
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Mensagem enviada!",
      showConfirmButton: false,
      timer: 1500
    });

    // RESETA O FORMULÁRIO
    form.reset();
  });
});