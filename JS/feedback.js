function submitFeedback() {
    var avaliacao = document.getElementById("avaliacao").value;
    var comentario = document.getElementById("comentario").value;

    console.log("Avaliação: " + avaliacao );
    console.log("Comentário: " + comentario);
    document.getElementById("feedback-form").reset();
    window.alert("Aguardamos você no horário agendado!!! Clique em OK para realizar o logoff.")
    window.location.href = "login.html";
}