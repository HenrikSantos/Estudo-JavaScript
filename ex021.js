var verificar = document.querySelector('#verificar')
verificar.addEventListener('click', contar)

var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')


function contar(){
    var fimNumber = Number(fim.value)
    var inicioNumber = Number(inicio.value)
    var passoNumber = Number(passo.value)
    
    var result = ['ð']
    
    if(passoNumber == 0){
        res.innerHTML = `o valor do passo nÃ£o pode ser 0`
        return
    }
    if(passoNumber < 0 ){
        passoNumber = Math.abs(passoNumber)
    }
    if(fimNumber > inicioNumber){
        for(var index = inicioNumber; index <= fimNumber; index+=passoNumber){
            result.push(index, 'ð')
            console.log(result, 'adicionado')
        }
        result.pop()
        result.push('ð')
        var finalResult = result.join(' ')
        res.innerHTML = finalResult
        return
    }
    if(fimNumber < inicioNumber){
        for(var index = inicioNumber; index >= fimNumber; index-=passoNumber){
            result.push(index, 'ð')
            console.log(result, 'adicionado')
        }
        result.pop()
        result.push(index, 'ð')
        var finalResult = result.join(' ')
        res.innerHTML = finalResult
        return
    }
}
