const question = document.querySelector ("#Question")
const choices = Array.from(document.querySelectorAll (".choice-text"))
const progressText  = document.querySelector ("#progress-text")
const scoreText = document.querySelector ("#score")
const timerS = document.querySelector ("#clock");
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []
let questionCounter = 0
let widthTime = 50
let questions = [
    {
        question : ' Commonly used data types DO Not include:',
        choice1 : '1.strings',
        choice2 :'2.booleans',
        choice3 : '3.alerts',
        choice4 : '4.numbers',
        answer: 3,

    },
    {
        question : ' the condition in an if/else statement is enclosed with',
        choice1 : '1.quotes',
        choice2 :'2.curly brackets',
        choice3 : '3.parentheses',
        choice4 : '4.square brackets',
        answer: 3,

    },
    {
        question : ' Array in javascript can be used to store:',
        choice1 : '1.other arrays',
        choice2 :'2.numbers and arrays',
        choice3 : '3.booleans',
        choice4 : '4.all of the above',
        answer: 4,

    },
    {
        question : ' a very useful tool during developement and debbuging for printing content to the debugger is :',
        choice1 : '1.javascript',
        choice2 :'2. console log',
        choice3 : '3. for loops',
        choice4 : '4.terminal/bash',
        answer: 2,

    },
]
const scorePoints = 100
const maxQuestions = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    StartTimer(widthTime)
    getNewQuestion()
}
getNewQuestion = () => {
    if (availableQuestions.length===0 || questionCounter>maxQuestions){
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = 'question ${questionCounter} of ${maxQuestions}'
const questionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice'+ number]
    })
    availableQuestions.splice(questionIndex,1)
    acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e=> {
        if (!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset ['number']
        let classToApply = selectedAnswer == currentQuestion.answer?'correct':'incorrect'
        if (classToApply === 'correct') {
            incrementScore(scorePoints)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout (()=> {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
function StartTimer (time) {
    counter = setInterval (timer, 1000)
    function timer (){
timerS.textContent = time;
time--;
if(time< 9){
    let addZerro = timerS.textContent
    timerS.textContent = "0"+ addZerro;
}
if(time < 0){
    clearInterval(counter);
    timerS.textContent = "0"

}
    }
}
function StartTimerLine(time){
    counterLine = setInterval(timer , 15) ;
    function timer (){
        time +=1;
        DocumentTimeline.style.width = time + "px";
        if (time< 549){
            clearInterval(counterLine);
        }
    }

        
    }

startGame ()
