function init () {
const nope = document.querySelector(".nope");
const button = document.querySelector(".change-my-life");
const paragraph = document.querySelector(".status");



button.onclick= function() {
if( paragraph.innerHTML == "Tôi nghèo") 
  paragraph.innerHTML= "Tôi sẽ giàu sau khi học lập trình tại MindX";
else(paragraph.innerHTML= "He he, tôi đã giàu!") ;
}

nope.onclick= function() {
alert ("Hãy trả lời thật lòng nhé!");
if ( confirm("Bạn chắc chắn không muốn thay đổi mình?")          ) 
{ nope.innerHTML="Tôi rất tiếc!" }
else { alert("Hãy nghĩ lại đi!"); }




}

}
window.addEventListener("load", init);