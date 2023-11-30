document.addEventListener('DOMContentLoaded', function () {
    const dateSelect = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const apontamentoForm = document.getElementById('apontamentoForm');

    dateSelect.addEventListener('focus', function () {
        const availableDates = generateAvailableDates();
        updateAvailableDates(availableDates);
    });

    dateSelect.addEventListener('change', function () {
        const selectedDate = dateSelect.value;
        const availableTimes = generateAvailableTimes(selectedDate);
        updateAvailableTimes(availableTimes);
    });

    timeSelect.addEventListener('change', function () {
        const selectedTime = timeSelect.value;
        console.log('Horário selecionado:', selectedTime);
    });

    apontamentoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleApontamento(apontamentoForm);
    });

    const initialAvailableDates = generateAvailableDates();
    updateAvailableDates(initialAvailableDates);
});

function generateAvailableDates() {
    return ['2023-12-01', '2023-12-05', '2023-12-10', '2023-12-15'];
}

function updateAvailableDates(dates) {
    const dateSelect = document.getElementById('date');

    dateSelect.innerHTML = '';

    dates.forEach(date => {
        const option = document.createElement('option');
        option.value = date;
        option.text = date;
        dateSelect.add(option);
    });

    const selectedDate = dateSelect.value;
    const availableTimes = generateAvailableTimes(selectedDate);
    updateAvailableTimes(availableTimes);
}

function generateAvailableTimes(selectedDate) {
    return ['09:00', '10:00', '14:00', '15:00', '16:00'];
}

function updateAvailableTimes(times) {
    const timeSelect = document.getElementById('time');

    timeSelect.innerHTML = '';

    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.text = time;
        timeSelect.add(option);
    });
}

function handleApontamento(form) {
    window.alert('Agendamento concluído com sucesso!');
    form.reset();
    window.location.href = "feedback.html";
}
