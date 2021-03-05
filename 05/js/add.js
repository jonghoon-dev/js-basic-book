let num1 = parseInt(prompt("첫 번째 숫자는? "));
let num2 = parseInt(prompt("두 번째 숫자는? "));
let result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result);

function addNumber(a = 5, b = 1) {
  let sum = a + b;
  return sum;
}
