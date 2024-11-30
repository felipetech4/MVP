document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;  // Alterado para 'loginEmail'
        const password = document.getElementById('loginSenha').value;  // Alterado para 'loginSenha'

        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text); });
            }
            return response.text();
        })
        .then(data => {
            alert(data); // Exibe mensagem de boas-vindas
            window.location.href = 'agendamento.html'; // Redireciona para a página de agendamento
        })
        .catch(error => {
            alert(`Erro no login: ${error.message}`);
        });
    });
});
