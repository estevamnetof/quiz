import displayNextQuestion from "./displayNextQuestion.js";

export default function startGame() {
    const $startGameButton = document.querySelector('.button-start');
    const $questionsContainer = document.querySelector('.questions');

    $startGameButton.classList.add('hide');
    $questionsContainer.classList.remove('hide');

    displayNextQuestion();
}