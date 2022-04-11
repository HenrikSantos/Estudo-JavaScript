let botaoAdicionar = document.querySelector("#botaoAdicionar")
botaoAdicionar.addEventListener("click", adicionar)

let resultado = document.querySelector("#resultado")
let numeros = []

function adicionar(){
    resultado02.innerText = ""
    let numeroQueSeraAdicionado = document.querySelector("#numeroQueSeraAdicionado").value
    let numberNumeroQueSeraAdicionado = Number(numeroQueSeraAdicionado)
    
    if(numberNumeroQueSeraAdicionado < 1 || numberNumeroQueSeraAdicionado > 100){
        window.alert(`[ERRO] número deve ser entre 1 e 100!`)
    }else if(numeros.includes(numberNumeroQueSeraAdicionado)){
        window.alert(`[ERRO] número já adicionado!`)
    }else{
        numeros.push(numberNumeroQueSeraAdicionado)
        resultado.innerHTML += `<p>Valor ${numberNumeroQueSeraAdicionado} adicionado</p>`
    }
}


let resultado02 = document.querySelector("#resultado02")
let botaoGerarNumero = document.querySelector("#botaoGerarNumero")
botaoGerarNumero.addEventListener("click", gerarNumero)

function gerarNumero(){
    resultado02.innerText = ""
    resultado.innerText = ""
    resultado02.innerHTML += `<p>Ao todo temos ${numeros.length} números cadastrados!</p>`
    let numerosEmOrdem = numeros
    numerosEmOrdem.sort() 
    resultado02.innerHTML += `<p>O maior valor informado foi o ${numerosEmOrdem[numerosEmOrdem.length-1]}</p>`
    resultado02.innerHTML += `<p>O menor valor informado foi o ${numerosEmOrdem[0]}</p>`
    let total=0
    for(i in numerosEmOrdem){
        total += numerosEmOrdem[i]
    }
    resultado02.innerHTML += `<p>Somando todos os valores temos: ${total}</p>`
    resultado02.innerHTML += `<p>A média dos valores digitados é: ${total/numerosEmOrdem.length}</p>`
    numeros.splice(0, numeros.length)
}