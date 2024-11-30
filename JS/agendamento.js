document.addEventListener('DOMContentLoaded', function () {
    const apontamentoForm = document.getElementById('apontamentoForm');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    // Função para preencher os campos de data e hora com os horários disponíveis
    function loadAvailableDatesAndTimes() {
        // Primeiro, obtém os horários disponíveis do servidor
        fetch('http://localhost:3000/api/schedules/available')
            .then(response => response.json())
            .then(availableTimes => {
                // Preencher as opções de data
                const availableDates = [...new Set(availableTimes.map(time => time.day))]; // Pega os dias únicos
                availableDates.forEach(day => {
                    const option = document.createElement('option');
                    option.value = day;
                    option.textContent = `Dia ${day} (Seg-Sex)`;
                    dateInput.appendChild(option);
                });

                // Preencher os horários para o primeiro dia (se não houver agendamentos anteriores)
                if (availableTimes.length > 0) {
                    loadAvailableTimes(availableTimes);
                }
            })
            .catch(error => {
                alert('Erro ao carregar horários disponíveis: ' + error.message);
            });
    }

    // Função para preencher os horários baseados na data selecionada
    function loadAvailableTimes(availableTimes) {
        const selectedDate = dateInput.value;

        // Filtra os horários disponíveis para o dia selecionado
        const filteredTimes = availableTimes.filter(time => time.day === parseInt(selectedDate));
        timeInput.innerHTML = ''; // Limpa as opções de horário

        // Preenche as opções de horário
        filteredTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time.hour;
            option.textContent = time.hour;
            timeInput.appendChild(option);
        });
    }

    // Carrega as datas e horários disponíveis ao carregar a página
    loadAvailableDatesAndTimes();

    // Quando a data é alterada, recarrega os horários disponíveis
    dateInput.addEventListener('change', function () {
        loadAvailableTimes(availableTimes);
    });

    apontamentoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = dateInput.value;
        const time = timeInput.value;

        fetch('http://localhost:3000/api/schedules/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, date, time })
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => { throw new Error(text); });
            }
            return response.text();
        })
        .then(data => {
            alert(data); // Exibe mensagem de sucesso
            window.location.href = 'feedback.html'; // Redireciona para a página de feedback
        })
        .catch(error => {
            alert(`Erro no agendamento: ${error.message}`);
        });
    });
});
