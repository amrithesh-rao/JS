var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomNumber2= Math.floor(Math.random()*6) + 1;

var imgString1 = "images/dice"+randomNumber1+".png";
var imgString2 = "images/dice"+randomNumber2+".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.src = imgString1;
img2.src = imgString2;

var message="Refresh Me";
if(randomNumber1 == randomNumber2)
    message="Draw";
else if(randomNumber1 > randomNumber2)
    message="🚩 Player1 wins";
else
    message="Player2 wins 🚩";

document.querySelector("h1").innerText = message;