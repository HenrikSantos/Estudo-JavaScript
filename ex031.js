function sum(a,b){
    return a+b
}

const arrowSum = (a, b) => a + b



function isAdult(age){
    return age >= 18
}

const arrowIsAdult  = (age) => age>18



function getRandomNumber(){
    return Math.random()
}

const arrowGetRandomNumber = () => Math.random()



// document.addEventListener('click', function(){
//     console.log('clicked')
// })

// document.addEventListener('click', () => console.log('clicked'))



const func = function(){
    console.log(this, 'teste')
}

const arrowFunc = () => console.log(this, 'teste')
