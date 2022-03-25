const trocarPagina = _ => {
    const section = document.querySelector('section')

    document.querySelectorAll('header a').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault()
            fetch(link.href)
            .then(resp => resp.text())
            .then(html => section.innerHTML = html)
         
            /* Diminui o menu após trocar de página, e impede que o menu 
            seja aberto ao clicar na logo do menu */
            const botaoLogo = document.querySelector('#inicio')
            if (window.innerWidth < 1085 && botaoLogo != link ){
                document.querySelectorAll('header nav a').forEach(link => {
                    link.style.display == "none" ? 
                    link.style.display = "block" : 
                    link.style.display = "none"
                })
            }
        }
    })
}

const corrigindoBugMenu = _ => {
    window.onresize = function(e) {
        if (document.innerWidth > 1084) {
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.display = "block"             
            })
        }
    }
}

const inicializarSection = _ => {
    window.onload = function() {
        const section = document.querySelector('section')
        const inicio = document.querySelector('#inicio')
        
        // Inicializa a Seção
        fetch(inicio.href)
            .then(resp => resp.text())
            .then(html => section.innerHTML = html)
    }
}

const tocarMusica = _ => {
    const musica = document.querySelector('audio')
    const botaoMusica = document.querySelector('#botaoMusica')
    
    /* botaoMusica.addEventListener("click",(e) => {
        e.preventDefault()

        botaoPlay = "image/playButton.svg"
        botaoPause = "image/pauseButton.svg"

        botaoMusica.src = botaoPlay

        if (botaoMusica.getAttribute('play') == 'true') {
            botaoMusica.src = botaoPause
            botaoMusica.setAttribute('play', 'false')
            musica.play()
        } else {
            botaoMusica.src = botaoPlay
            botaoMusica.setAttribute('play', 'true')
            musica.pause()
        }
    }) */

    botaoMusica.addEventListener("click",(e) => {
        e.preventDefault()
        botaoPlay = "image/playButton.svg"
        botaoPause = "image/pauseButton.svg"

        const imgBotao = document.querySelector('#imgBotao')

        imgBotao.src = botaoPlay

        if (botaoMusica.getAttribute('play') == 'true') {
            imgBotao.src = botaoPause
            botaoMusica.setAttribute('play', 'false')
            musica.play()
        } else {
            imgBotao.src = botaoPlay
            botaoMusica.setAttribute('play', 'true')
            musica.pause()
        }
    })
}
    
const menu = _ => {
    document.querySelector('#menu').addEventListener("click", e => {
        document.querySelectorAll('header nav a').forEach(link => {
            link.style.display == "none" ? 
            link.style.display = "block" : 
            link.style.display = "none"
        })
    }) 
}


inicializarSection()
trocarPagina()
corrigindoBugMenu()
menu()
tocarMusica()



