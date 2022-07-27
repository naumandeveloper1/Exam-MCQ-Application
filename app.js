/*Name: M Nauman Yousaf
Github link: https://github.com/naumandeveloper1
I am web application developer.
Contact Us: 0301-1216608
Whatsapp: 0301-1216608
*/

const quizData = [
    {
        question: "How much your old?",
        a: "10",
        b: "20",
        c: "22",
        d: "25",
        correct: "d",
    },
    {
        question: "Guess what my age now?",
        a: "10",
        b: "20",
        c: "22",
        d: "25",
        correct: "c",
    },
    {
        question: "How much you earn?",
        a: "10 Crore",
        b: "20 Crore",
        c: "22 Crore",
        d: "25 Crore",
        correct: "d",
    },
    {
        question: "How can I make professional?",
        a: "Learning new skills",
        b: "Invest money",
        c: "Learn new thing every day",
        d: "Learn the modern skill longterm",
        correct: "d",
    },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");
let quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected() {

    let answer = undefined;
    answersEls.forEach((answersEl) => {
        if (answersEl.checked) {
            answer = answersEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answersEls.forEach((answersEl) => {
        answersEl.checked = false;

    });

}
//submit event listen here click
submitBtn.addEventListener("click", () => {

    let answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
            // console.log(currentQuiz);
        }
        else {
            //After compeleting the test
            quiz.innerHTML = `<h2 style="padding: 1rem;"> You have answered correctly at ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload Test</button>`;
        }
    }
});