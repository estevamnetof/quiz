import startGame from "./startGame.js";
import displayNextQuestion from "./displayNextQuestion.js";

document.querySelector('.button-start').addEventListener('click', startGame);
document.querySelector('.button-next').addEventListener('click', displayNextQuestion);