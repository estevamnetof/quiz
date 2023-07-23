let currentQuestionIndex = 0;
let totalCorrect = 0;

export default function selectAnswer(event) {
    const $nextQuestionButton = document.querySelector('.button-next');

    const answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct');
        totalCorrect++;
    } else {
        document.body.classList.add('incorrect');
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }

        button.disabled = true;
    });

    $nextQuestionButton.classList.remove('hide');
    currentQuestionIndex++;
}

export { currentQuestionIndex, totalCorrect }
