var randomch1 = Math.floor(Math.random() * 6) + 1;

var randomchs1 = "./images/dice" + randomch1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomchs1);

var randomch2 = Math.floor(Math.random() * 6) + 1;
var randomchs2 = "./images/dice" + randomch2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomchs2);

if (randomch1 > randomch2) {
  document.querySelector("h1").innerHTML = "player 1 win";
} else if (randomch1 < randomch2) {
  document.querySelector("h1").innerHTML = "player 2 win";
} else {
  document.querySelector("h1").innerHTML = " both player win";
}
