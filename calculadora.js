

const argv = require('process').argv


const op = argv[2]
const num =+ argv[3]
const num2 =+ argv[4]

const suma = require('./suma')
const resta = require('./resta')
const mul  = require('./multiplicacion')
const divi = require('./dividicion')

switch(op){
    case '+':
    console.log(suma.sumar(num,num2))
    break

    case '-':
        console.log(resta.restar(num,num2))
        break
    
    case '*': 
        console.log(mul.multiplicar(num,num2)) 
        break  

    case '/' :
        console.log(divi.dividir(num,num2)) 
        break 
    default:
        console.log('opcion no valida')     

}

