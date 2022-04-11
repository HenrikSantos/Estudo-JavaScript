//declara array
let num = [5,8, 4]
console.log(num)
//coloca 6 na posição 3 
num[3]=6
console.log(num)
//adiciona 7 no final
num.push(7)
console.log(num)
//mostra a quantidade
console.log(num.length)
//organiza em ordem crescente
num.sort()
console.log(num)
//imprimir com for
for(let i = 0; i != num.length; i++){
    console.log(`Imprimir array com for: ${num[i]}`)
}
//imprimir com for in
for(let i in num){
    console.log(`Imprimir array com for in: ${num[i]}`)
}
//buscar um valor no array
let indexOfThe6Num = num.indexOf(6)
console.log(indexOfThe6Num)