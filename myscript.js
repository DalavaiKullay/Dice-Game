var bu = document.querySelector(".btn");
bu.addEventListener("click", start);


function start(){
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimages="dice"+randomNumber1+".png";
var rimg="images/"+randomimages;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",rimg);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimages2="dice"+randomNumber2+".png";
var rimg2="images/"+randomimages2;
document.querySelectorAll("img")[1].setAttribute("src",rimg2);;

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="✌️Player 1 win";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="✌️Player 2 win";
}else{
  document.querySelector("h1").innerHTML="✌️Draw Match";
}
}
