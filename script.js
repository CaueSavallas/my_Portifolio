 function enviarWhatsapp(event) {
            event.preventDefault

            const nome = document.getElementById('nome');
            const mensagem = document.getElementById('mensagem');

            const texto = `Olá, meu nome é ${nome.value} e minha mensagem é: ${mensagem.value}`;

            const msgFormatada = encodeURIComponent(texto);

            const url = `https://contate.me/5585997895205`;

            window.open(url, '_blank');
        }