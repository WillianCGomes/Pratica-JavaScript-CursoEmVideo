function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('Titulo')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        titulo.innerHTML= 'Bom dia'
        img.src = 'img/Manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        titulo.innerHTML= 'Boa tarde'
        img.src = 'img/Tarde.png'
        document.body.style.background = '#FF8C00'

    } else {
        titulo.innerHTML= 'Boa noite'
        img.src = 'img/Noite.png'
        document.body.style.background = '#6959CD'
    }
}

