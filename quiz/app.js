const qusetionData = [
    {
        question: 'Which baseball player has the nicknames "Sir Albert" and "The Machine"?',
        a: 'Albert Pujols',
        b: 'Albert Abreu',
        c: 'Albert Almora Jr.',
        d: 'Albert Belle',
        correct: 'a',
    },
    {
        question: 'Which baseball player is nicknamed "Big Hurt"?',
        a: 'David Ortiz',
        b: 'Derek Jeter',
        c: 'Frank Thomas',
        d: 'Jose Altuve',
        correct: 'c',
    }, {
        question: 'Who is the Major League Baseball player nicknamed "Joey Bats"?',
        a: 'Joey Gallo',
        b: 'Jose Bautista',
        c: 'Joey Votto',
        d: 'Jose Reyes',
        correct: 'b',
    }, {
        question: 'Who had a 1.74 ERA for Boston in 2000?',
        a: 'Pedro Martinez',
        b: 'Chris Sale',
        c: 'Josh Beckett',
        d: 'Jon Lester',
        correct: 'a',
    }, {
        question: 'Which team finished the 2014 season with the best record in all of Major League Baseball?',
        a: 'Detroit Tigers',
        b: 'St. Louis Cardinals',
        c: 'Boston Red Sox',
        d: 'Los Angeles Angels',
        correct: 'd',
    },
]
let quizContainer = document.querySelector('.quiz-container')
let a__text = document.getElementById('a__text')
let b__text = document.getElementById('b__text')
let c__text = document.getElementById('c__text')
let d__text = document.getElementById('d__text')
let question = document.getElementById('question')
let currentQuestion = 0;
let score = 0;
let answer = undefined;
getQuestionData()
function getQuestionData() {
    let currentQuestionData = qusetionData[currentQuestion];
    question.innerText = currentQuestionData.question;
    a__text.innerText = currentQuestionData.a;
    b__text.innerText = currentQuestionData.b;
    c__text.innerText = currentQuestionData.c;
    d__text.innerText = currentQuestionData.d;
}
let answerEls = document.getElementsByName('answer');
function getSelected() {
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        answerEl.checked = false;
    });
    return answer;
}
let submit = document.getElementById('submit')
submit.addEventListener('click', changeQuestionData)
function changeQuestionData() {
    getSelected()
    if (getSelected() === qusetionData[currentQuestion].correct) {
        score++;
    }
    console.log(score);
    if (currentQuestion + 1 < qusetionData.length) {
        currentQuestion++;
    } else {
        quizContainer.innerHTML = `<h2>your answer correct rate = ${score / qusetionData.length * 100}%</h2>
        <a class="btn" href="./index.html">try again</a> `
    }
    getQuestionData()
}