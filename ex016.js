var btnVerificar = document.querySelector('#verificar')
btnVerificar.addEventListener('click',verificar)
function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var txtano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    var img = document.querySelector('#imagem')
    if (txtano.value.length == 0 || txtano.value > ano){
        window.alert('[ERRO], Verifique os Dados!')
    } else{
        
        img.style.display = 'block'
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        res.innerText = `Você vai fazer/fez ${idade} em ${ano}`
        var gênero=''
        if(fsex[0].checked){
            gênero = 'HOMEM'

            if(idade<3){
                img.setAttribute('src','img/bebe.jpg')
                res.innerText = 'VOCÊ É UM BEBE'
            }else if(idade<12){
                img.setAttribute('src','img/criança_homem.jpg')
                res.innerText = `VOCÊ É UMA CRIANÇA ${gênero} DE ${idade} ANOS`
            }else if(idade<20){
                img.setAttribute('src','img/jovem_homem.jpg')
                res.innerText = `VOCÊ É UM ${gênero} JOVEM DE ${idade} ANOS`
            }else if(idade<50){
                img.setAttribute('src','img/homem.jpg')
                res.innerText = `VOCÊ É UM ${gênero} DE ${idade} ANOS`
            }else{
                img.setAttribute('src', 'img/velho.jpg')
                res.innerText = `VOCÊ É UM VELHO ${gênero} DE ${idade} ANOS`
            }
        }else{
            gênero = 'MULHER'

            if(idade<3){
                img.setAttribute('src','img/bebe.jpg')
                res.innerText = `VOCÊ É UM BEBE`
            }else if(idade<12){
                img.setAttribute('src','img/criança_mulher.jpg')
                res.innerText = `VOCÊ É UMA CRIANÇA ${gênero} DE ${idade} ANOS`
            }else if(idade<20){
                img.setAttribute('src','img/jovem_mulher.jpg')
                res.innerText = `VOCÊ É UMA ${gênero} JOVEM DE ${idade} ANOS`
            }else if(idade<50){
                img.setAttribute('src','img/mulher.jpg')
                res.innerText = `VOCÊ É UMA ${gênero} DE ${idade} ANOS`
            }else{
                img.setAttribute('src', 'img/velha.jpg')
                res.innerText = `VOCÊ É UMA VELHA ${gênero} DE ${idade} ANOS`
            }
            }        
    }
}