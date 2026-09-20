const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    mensagem.textContent = "Enviando...";

    const dados = new FormData(formulario);

    try {

        const resposta = await fetch(formulario.action, {
            method: "POST",
            body: dados,
            headers: {
                "Accept": "application/json"
            }
        });

        if (resposta.ok) {

            mensagem.textContent = "Mensagem enviada com sucesso!";

            formulario.reset();

        } else {

            mensagem.textContent = "Não foi possível enviar a mensagem.";

        }

    } catch (erro) {

        mensagem.textContent = "Ocorreu um erro. Tente novamente.";

    }

});