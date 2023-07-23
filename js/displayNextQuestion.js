import resetState from "./resetGame.js";
import questions from "./questions.js";
import selectAnswer from "./selectAnswer.js";
import finishGame from "./finishGame.js";

import { currentQuestionIndex } from "./selectAnswer.js";

export default function displayNextQuestion() {
    const $questionText = document.querySelector('.question');
    const $answersContainer = document.querySelector('.answers');

    resetState();

    if (questions.length === currentQuestionIndex) {
        return finishGame();
    }

    $questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement('button');
        newAnswer.classList.add('button', 'answer');
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer);
    });
}