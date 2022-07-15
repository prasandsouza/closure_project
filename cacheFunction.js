let object = {};
module.exports = function (callBack) {
  return function argumentfunction(argument) {
    for (let item in object) {
      if (item === argument) {
        return object;
      }
    }
    object[argument] = callBack(argument);
    return object;
  };
};
