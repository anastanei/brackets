module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const brackets = {};

  bracketsConfig.forEach((item) => {
    const key = item[0];
    const value = item[1];
    brackets[key] = value;
  });

  const isValide = str.split('').every((char) => {
    if (brackets[char]) {
      if (brackets[char] === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        stack.push(char);
      }
    } else if (Object.values(brackets).includes(char)) {
      const openBracket = stack.pop();
      if (brackets[openBracket] !== char) {
        return false;
      }
    }
    return true;
  });

  return isValide && stack.length === 0;
};
