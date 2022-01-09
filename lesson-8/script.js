// Sử dụng if-else
const operator = prompt('Nhập dấu phép tính (either +,-,* or /):');

let a = parseInt(prompt("Nhập số thứ nhất: "));
let b = parseInt(prompt( "Nhập sô thứ 2: ") );
if (operator === "+") { result = a + b ;               }
else if (operator === "-") { result = a - b;      }
else if (operator === "*") { result = a * b;  }
else if (operator === "/") { result = a / b;  }

alert(` ${a} ${operator} {$b} = ${result} `)
document.getElementById("result-view").innerHTML= `Phép tính của bạn là: ${a} ${operator} ${b} = ${result}`;
console.log(`${a} ${operator} ${b} = ${result} `);
 

 






