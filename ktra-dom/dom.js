const quizes = [
    {   
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];
const quizContainer = document.querySelector('.quiz-container');

//Hàm hiển thị câu hỏi và đáp án
function renderQuiz(quiz) {
    const quizItem = document.createElement('div');
    quizItem.classList.add('quiz-item');

    const question = document.createElement('h3');
    question.classList.add('question');
    question.textContent =`Câu ${quiz.id}: ${quiz.question}`;

    const answers = document.createElement('div');
    answers.classList.add('quiz-answer');

    quiz.answers.forEach(answer => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('quiz-answer-item');

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = quiz.id.toString();

        const label = document.createElement('label');
        label.textContent = answer;

        answerItem.appendChild(radioInput);
        answerItem.appendChild(label);
        answers.appendChild(answerItem);
    });
    quizItem.appendChild(question);
    quizItem.appendChild(answers);
    quizContainer.appendChild(quizItem);
}
//Hiển thị cả ba câu hỏi
quizes.forEach(quiz => {
    renderQuiz(quiz);
});
//Khi bấm vào nút “Random Answer” thì random câu trả lời cho từng câu hỏi và tự động được check vào
function randomAnswers() {
    const quizItems = document.querySelectorAll('.quiz-item');
    quizItems.forEach(quizItem => {
        const radioInputs = quizItem.querySelectorAll('input[type="radio"]');
        const randomIndex = Math.floor(Math.random() * radioInputs.length);
        radioInputs[randomIndex].checked = true;
    });
}
const btn=document.getElementById('btn').addEventListener('click', randomizeAnswers);