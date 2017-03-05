function checkRepeatingLetter(str) {
  //在这里写入代码
  const array = str.split('');
  for (let i = 0; i < array.length; i++) {
    if (array.lastIndexOf(array[i]) !== i) {
      return true;
    }
  }

  return false;
}

module.exports = checkRepeatingLetter;