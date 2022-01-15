const container = document.getElementById("container")
const colorred = document.getElementById("color-red")
colorred.onclick= function () {
container.style.backgroundColor="red";
}
const colorpurple= document.getElementById("color-purple")
colorpurple.onclick= function () {
  container.style.backgroundColor="purple";
}
const colorgray= document.getElementById("color-gray")
colorgray.onclick= function () {
container.style.backgroundColor="gray";
}

const colorroyalblue= document.getElementById("color-royalblue")
colorroyalblue.onclick= function () {
container.style.backgroundColor="royalblue"; 
}

const coloryellow= document.getElementById("color-yellow")
coloryellow.onclick= function (){
  container.style.backgroundColor="yellow"
}

const turnoff= document.getElementById("Turn-off")
turnoff.onclick= function () {
  container.style.backgroundColor="white"
}
