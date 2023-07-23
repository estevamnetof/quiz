import questions from "./questions.js";
import { totalCorrect } from "./selectAnswer.js";

export default function finishGame() {

    const totalQuestion = questions.length;
    const performance = Math.floor(totalCorrect * 100 / totalQuestion);
    const $questionsContainer = document.querySelector('.questions');

    let message = '';

    switch (true) {
        case (performance >= 90):
            message = 'Excelente! :)';
            break;
        case (performance >= 70):
            message = 'Muito bom! :)';
            break;
        case (performance >= 50):
            message: 'Bom';
            break;
        default:
            message: 'Pode melhorar! :(';
    }

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onClick=window.location.reload() class="button">Refazer teste</button>
    `
}