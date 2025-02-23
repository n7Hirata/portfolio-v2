function enviarMensagem(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5567911111111';
    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemFormatada}`

    window.open(url, '_blank');
}