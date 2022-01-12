
function min(a, b)
{
  if (a > b) {
    return true;
    
  }
  else if (a < b) {
    return false;
   
  }
  else if (a = b) {
    return true + false ; 
  }
}
const a= parseInt(prompt("Nhập số thứ nhất:"));
const b= parseInt(prompt("Nhập số thứ hai: "));
alert(`Đáp án đúng sẽ xuất hiện trên màn hình `);
if (min(a,b) === true) { 
document.getElementById("result-view").innerHTML=`Số nhỏ nhất là ${b}`;
console.log(`${b} là số nhỏ nhất`);
 }
else if (min(a,b) === false ) { 
  document.getElementById("result-view").innerHTML=`Số nhỏ nhất là ${a}`;
  console.log (`${a} là số nhỏ nhất `);
    }
else if (min(a,b) === true + false ) {  
  document.getElementById("result-view").innerHTML=`Hai số bằng nhau`;
   console.log(`${a} là ${b}`);
                  }               


