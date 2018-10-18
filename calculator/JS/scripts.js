"use strict";

(function() {

}) ();


const messagewrapper = document.getElementById('message');

const number1 = prompt ('what is your favorite number?');
const number2 = prompt ('how many shoes do you own?');
const number3 = prompt ('what is your favorite week?');
const number4 = prompt ('what is your least favorite number?');

let result = (number1 + number2 - number3) * number4
let message = '(' +  number1 + '+' + number2 + "-" + number3 + ")" + "x" + number4 + "=" + result;
// let message = 'hello, ' + name + '!\n';
//     message += 'you are ' + age + ' years old!'
//     if (age > 30) {    
//         message += ' That\'s old!\n'; 
//     } else if (age < 13) {
//         message += ' Should you even be here? \n';
//     }
//     else if (age == 0) {
//         message += ' AAHH!! \n';
//     }

//     message += flavor + ' flavored ice cream is so yummy!';
    
    messagewrapper.innerText = message; 