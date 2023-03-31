/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const RandomCardGenerator = () => {
  //write your code here
  console.log("Hello Rigo from the console!");
  const arrayOfSuits = ["♠", "♣", "♥", "♦"];
  const arrayOfNumbers = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let chosenSuit = Math.floor(Math.random() * arrayOfSuits.length);
  console.log(arrayOfSuits[chosenSuit]);
  let chosenNumber = Math.floor(Math.random() * arrayOfNumbers.length);
  console.log(chosenNumber);

  let cardIcons = document.querySelectorAll(".card-icon");

  cardIcons[0].innerHTML = arrayOfSuits[chosenSuit];
  cardIcons[1].innerHTML = arrayOfSuits[chosenSuit];

  if (arrayOfSuits[chosenSuit] === "♥" || arrayOfSuits[chosenSuit] === "♦") {
    // cardIcons[0].style.color = "red";
    // cardIcons[1].style.color = "red";
    //console.log(cardIcons[0].classList);
    cardIcons[0].classList.add("card-red-top");
    cardIcons[1].classList.add("card-red-bottom");
  } else {
    cardIcons[0].classList.add("card-black-top");
    cardIcons[1].classList.add("card-black-bottom");
  }

  let cardNumber = document.querySelector(".card-number");
  cardNumber.innerHTML = arrayOfNumbers[chosenNumber];
};

window.onload = () => {
  RandomCardGenerator();
};

//Generate a new random card
const button1 = document.querySelector("#button1");
button1.addEventListener("click", () => {
  RandomCardGenerator();
});

//Timer Button
const button2 = document.querySelector("#button2");
button2.addEventListener("click", () => {
  setTimeout(RandomCardGenerator, 10000);
});

//Activating Resize Button
const button3 = document.querySelector("#button3");
button3.addEventListener("click", () => {
  let card = document.querySelector("#cardSize");
  let inputWidth = document.querySelector("#width").value;
  let inputHeight = document.querySelector("#height").value;
  card.style.width = inputWidth + "px";
  card.style.height = inputHeight + "px";
});
