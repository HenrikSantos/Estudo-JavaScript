var mult = document.querySelector('#mult')
mult.addEventListener('click', multiplicar)


function multiplicar(){
    var res = document.querySelector('#res')
    var numero = document.querySelector('#numero')
    var numeroNumber = Number(numero.value)
    var result = 0;
    res.innerHTML =''
    for(index = 0; index<=10; index++){
        result = numeroNumber*index
        res.innerHTML += `<p class="result">${numeroNumber} x ${index} = ${result}</p>`
    }

}