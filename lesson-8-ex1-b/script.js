const operator = prompt("Nhập dấu phép tính(+,-,*,/):");
let result;
let a = parseInt(prompt("Nhập số thứ nhất: " )) ;
let b = parseInt(prompt("Nhập số thứ hai:      "));
switch (operator) {
case "+":
result = a + b;
break;

case "-":
result = a - b;
break;

case "*":
result = a * b;
break;

case "/":
 result = a / b;
break;
}

document.getElementById("result-view-2").innerHTML= ` Phép tính của bạn là: ${a} ${operator} ${b} = ${result} `; 
console.log( ` ${a} ${operator} ${b} = ${result}` );

