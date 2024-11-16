document.addEventListener('DOMContentLoaded', function () {
    const cadastroForm = document.getElementById('cadastroForm');

    cadastroForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('cadastroName').value;
        const email = document.getElementById('cadastroEmail').value;
        const password = document.getElementById('cadastroPassword').value;

        fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text); });
            }
            return response.text();
        })
        .then(data => {
            alert(data); // Exibe mensagem de sucesso
            window.location.href = 'login.html'; // Redireciona para a página de login
        })
        .catch(error => {
            alert(`Erro no cadastro: ${error.message}`);
        });
    });
});
