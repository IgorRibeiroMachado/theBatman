const trocarPagina = _ => {
    const section = document.querySelector('section')
    
    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener("click", e => {
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

        })
    })
}

/* Se a pessoa clicar no menu e tentar voltar a tela maior, não funciona :/ */
const corrigindoBugMenu = _ => {
    window.addEventListener("resize", function(e) {
        if (document.innerWidth >= 1084) {
            const nav = document.getElementsByName('header nav')
            document.querySelectorAll('header nav a').forEach(link => {
                link.style.display = "block"             
            })
        }
    })
}

const inicializarSection = _ => {
    window.addEventListener("load", e => {
        const section = document.querySelector('section')
        const inicio = document.querySelector('#inicio')
        
        // Inicializa a Seção
        fetch(inicio.href)
            .then(resp => resp.text())
            .then(html => section.innerHTML = html)
    })
}

const tocarMusica = _ => {
    const musica = document.getElementById('something_in_the_way')
    const botaoMusica = document.getElementById('botaoMusica')
    
    botaoMusica.addEventListener("click",(e) => {
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
    })
}
    
const menu = _ => {
    document.querySelector('#menu').addEventListener("click", e => {
        document.querySelectorAll('header nav a').forEach(link => {
            link.style.display == "none" ? link.style.display = "block" : link.style.display = "none"
        })
    }) 
}

const meuAlert = (resposta) => {
    const alert_confirmation = document.querySelector('#alert input')
    const alert = document.querySelector('#alertContainer')
    const texto = document.querySelector('#alertText')
    
    alert.style.display = 'flex'

    if (resposta == 'acertou') {
        texto.innerText = 'Sou o charada, clique em OK para ver o rataalada.com'
        alert_confirmation.addEventListener("click", e => {
            alert.style.display = 'none'
            window.open("https://www.rataalada.com")
            // Destrava rolagem
            window.onscroll = function() {};
        })
    } else {
        texto.innerText = 'Você errou, tente novamente!'
        alert_confirmation.addEventListener("click", e => {
            alert.style.display = 'none'
            window.onscroll = function() {};
        })
    }

    // Voltar página ao topo
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Trava rolagem
    if (alert.style.display == 'flex') {
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        }
    }
}

flag = 0

const resolverCharada = flag => {
    document.addEventListener('scroll', e => {
        if (flag != 1) {
            if (document.getElementById('resolver') != null) {
                flag = 1

                document.getElementById('resolver').addEventListener('click', e => {
                    const charada01 = document.getElementById('charada01').value.toLowerCase()
                    const charada02 = document.getElementById('charada02').value.toLowerCase()
                    const charada03 = document.getElementById('charada03').value.toLowerCase()

                    if (charada01 == 'batman' &&
                        charada02 == 'rua' &&
                        charada03 == 'leis'
                        ) {
                        meuAlert('acertou')
                    } else {
                        meuAlert('errou')
                    }
                })
            }
        }
    })
}

resolverCharada()
inicializarSection()
trocarPagina()
menu()
corrigindoBugMenu()
tocarMusica()


