function add(a, b) {
  let sum = a + b;
  return sum;
}

let num1 = parseInt(prompt("첫번째 숫자"));
let num2 = Number(prompt("두번째 숫자"));
let result = add(num1, num2);
document.write(result);
