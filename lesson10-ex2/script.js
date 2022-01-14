let obj ={
 b: 2,
 a: 1,
 c: 3,
 };
 let mainArray =  Object.keys(obj).toString().toUpperCase().split(",") ;
 
console.log(mainArray); 
document.getElementById("view").innerHTML= mainArray;