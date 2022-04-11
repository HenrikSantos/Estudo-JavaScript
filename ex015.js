var body = window.document.body
body.addEventListener("load", carregar());
function carregar(){
var msg = window.document.querySelector('#msg')
var img = window.document.querySelector('#imagem')

var data = new Date()
var hora = data.getHours()

msg.innerText = `AGORA SÃO ${hora} HORAS,`
if(hora < 6){
    img.setAttribute('src','img/madrugada.jpg')
    msg.innerText += ' é madrugrada!'
    body.style.backgroundColor = 'rgba(227, 132, 16, 0.786)'
}else if(hora < 12){
    img.setAttribute('src','img/manhã.jpg')
    msg.innerText += ' é manhã!'
    body.style.backgroundColor = 'rgba(120, 166, 176, 0.427)'
}else if(hora < 18){
    img.setAttribute('src','img/tarde.jpg')
    msg.innerText += ' é tarde!'
    body.style.backgroundColor = 'rgb(245, 233, 72)'
}else{
    img.setAttribute('src','img/noite.jpg')
    msg.innerText += ' é noite!'
    body.style.backgroundColor = 'rgb(2, 11, 38)'
}
}