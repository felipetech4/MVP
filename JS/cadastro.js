document.addEventListener('DOMContentLoaded', function () {

    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleCadastro(cadastroForm);
    });

});

function handleCadastro(form) {
    window.alert('Usuário cadastrado com sucesso!');
    form.reset();
    window.location.href = "login.html";
}