var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randimg = "images/dice" + randomNumber1 + ".png";
document.querySelector("img").setAttribute("src", randimg);

var randomNumber2 = Math.floor(Math.random() * 6) +1;
var randimg2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randimg2);

if(randomNumber1 === randomNumber2)
    document.querySelector("h1").textContent = "Draw!";
else if(randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = "Player 1 Wins!";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = "Player 2 Wins!";