const trocarPagina = _ => {
    const section = document.querySelector('section')
    document.querySelectorAll('header a').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault()
            fetch(link.href)
                .then(resp => resp.text())
                .then(html => section.innerHTML = html)
        }
    })
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
    
    botaoMusica.onclick = e => {
    
        botaoPlay = "image/playButton.ico"
        botaoPause = "image/pauseButton.ico"

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
    }
}

const menu = _ => {
    document.querySelector('#menu').onclick = e => {
        document.querySelectorAll('header nav a').forEach(link => {
            link.style.display == "none" ? link.style.display = "block" : link.style.display = "none"
        })
    }
}

inicializarSection()
tocarMusica()
trocarPagina()
menu()




