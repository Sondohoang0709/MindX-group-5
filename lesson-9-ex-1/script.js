/* function checkAge(age) {
if (age > 18) { return true;
}
else { return confirm("Did parents allow you?");}


} */

function checkAge(age) {
  return((age > 18) || false );
}
 
function checkAge(age) {
return(age > 18) ? true : false; 

} 
const age= parseInt(prompt("Nhập tuổi của bạn:"));
if (checkAge(age) === true) { 
  document.getElementById("result-view").innerHTML=`You are welcome!` ;
console.log(`You are welcome!`  );
}
else { document.getElementById("result-view").innerHTML=`Did parents allow you?`  ;       
console.log(`Did parents allow you?`) ;   }
