let counterfunction = require('../limitFunctionCallCount')
let limitnumber = 5;
let number1 =1,number2=2
function callbackfunction(number1,number2){
    return number1*number2
}
let result = counterfunction(callbackfunction,limitnumber)

for (let index = 0; index < limitnumber; index++) {
    const element = result(number1,number2)
    console.log(element)
    number1 = number1 +1;
    number2 = number1 + 1;
}