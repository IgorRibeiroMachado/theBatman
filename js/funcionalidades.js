const trocarPagina = _ => {
    const section = document.querySelector('section')
    document.querySelectorAll('a').forEach(link => {

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
        const musica = document.querySelector('audio')

        // Inicializa a Seção
        fetch(inicio.href)
            .then(resp => resp.text())
            .then(html => section.innerHTML = html)

        musica.load()
        musica.play()
    }
}


inicializarSection()
trocarPagina()




