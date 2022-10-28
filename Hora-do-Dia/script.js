function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
         // BOM DIA!
         img.src = './imagens/manha.svg'
         document.body.style.background = '#E0D2B5'
    } else if (hora >= 12 && hora <18) {
        // BOA TARDE!
        img.src = './imagens/tarde.svg'
        document.body.style.background = '#E1E6E9'
    } else {
        // BOA NOITE!
        img.src = './imagens/noite.svg'
        document.body.style.background = '#225157'
    }
}