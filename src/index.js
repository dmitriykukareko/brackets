module.exports = function check(str, bracketsConfig) {
  let bracket = [];
  let arr = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
      if (str[i] === bracket[bracket.length - 1]) {
        bracket.pop();
      } else {
        bracket.push(arr.get(str[i]));
      }
  }
  
  return bracket.length === 0;
}
