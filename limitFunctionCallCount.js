module.exports = function (callback, number) {
  let limit = 0;
  return function limitfunction(variable1, variable2) {
    if (limit < number) {
      limit = limit + 1;
      return callback(variable1, variable2);
    } 
  };
};
