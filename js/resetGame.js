export default function resetState() {
    const $answersContainer = document.querySelector('.answers');
    const $nextQuestionButton = document.querySelector('.button-next');

    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }

    document.body.removeAttribute('class');
    $nextQuestionButton.classList.add('hide');
}