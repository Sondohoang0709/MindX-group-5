function ask (question,yes,no) {
if (confirm(question)) yes() 
else no();

}

ask (
 "Do you agree?", 
let => { alert ("You agreed");   },
 let => { alert ("You canceled the execution.");}
)