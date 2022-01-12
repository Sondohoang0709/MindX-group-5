 



const username=prompt("Nhập tên của bạn: ")
 
if (username === "Admin")  {
  const password = prompt("Nhập mật khẩu của bạn");
 if (password === "mindX") { alert("You're welcome ");
  document.getElementById("result-view").innerHTML="You're welcome" ;    }
 
 else if (password === "") { alert("Đã hủy"); 
   document.getElementById("result-view").innerHTML="Đã hủy" ;               } 
 else {alert("Sai mật khẩu");          
 document.getElementById("result-view").innerHTML="Sai mật khẩu" ;                  }
}
 else if (username === ""  ) { alert("Canceled"); 
 document.getElementById("result-view").innerHTML="Canceled" ; }
else {alert("Tôi không biết bạn") ;
  document.getElementById("result-view").innerHTML=("Tôi không biết bạn!")  ;               }


               
 