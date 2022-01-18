function init() { 
const form= document.getElementById("form");
const email= document.getElementById("email");
const username= document.getElementById("Username");
const password = document.getElementById("password");
const button= document.getElementById("submit");
const errorWarning= document.getElementById("error")

form.addEventListener("submit", function(method)   {
  let message= [];
if (username.value == "") { message.push("Tên đăng nhập không được đề trống")                }
if (email.value == "" ) { message.push("Địa chỉ email không được trống")        }
if (password.value == "") { message.push("Mật khẩu không được trống")        }
if ( password.value.length < 8 && password.value !== ""  ) {message.push("Mật khẩu phải 8 kí tự trở lên")}
 

 if (message.length>0) {
 method.preventDefault();
 errorWarning.innerHTML = message.join("   /   ");}
  ;
}
)
}

window.addEventListener("load", init()) 