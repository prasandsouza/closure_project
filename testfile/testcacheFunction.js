let cache = require("../cacheFunction.js");
let array = ['java','javascript','python','ruby','pearl','java','javascript','python','ruby','pearl'];
function callback(array) {
  if(array.length>4){
    return array.length
}
else{return " "}
}
let returnvalue = cache(callback);
let result;
for (let index = 0; index < array.length; index++) {
  result = returnvalue(array[index]);
}
console.log(result);
