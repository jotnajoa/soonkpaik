//What I need are as below, in terms of flow.
// function startGame(){
// }

// function setNextQuestion(){
// }


// fuction selectAnswer(){
// }

//If possible, adding up the score and shows the result. (but still bit hard for me)

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()

})
let questionElement =document.getElementById("question")
let answerButtonsElement = document.getElementById('answer-button')
let shuffleQuestion, currentQuestionIndex

function startGame(){

    startButton.classList.add('hide')
    shuffleQuestion = questions.sort(()=>Math.random()-.5)
    currentQuestionIndex= 0;
    questionContainerElement.classList.remove('hide')
    // what is this? sort(()=>Math.random()-.5)
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestion[currentQuestionIndex])
    
}

function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innterText=answer.text
        button.classList.add('btn')
        // WHy I add 'btn' here?
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}



function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)

    })
    if(shuffleQuestion.length > currentQuestionIndex +1){
    nextButton.classList.remove('hide');
    } else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }

}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
{
    question:'What is your Favorite Booze?',
    answers: [
        { text: 'Sake', correct: true},
        { text: 'Beer', correct: false},
    ]
},
{
    question:'What is your Favorite Booze?',
    answers: [
        { text: 'Sake', correct: true},
        { text: 'Beer', correct: false},
    ]
},
{
    question:'What is your Favorite Booze?',
    answers: [
        { text: 'Sake', correct: true },
        { text: 'Beer', correct: false },
    ]
},
{
    question:'What is your Favorite Booze?',
    answers: [
        { text: 'Sake', correct: true},
        { text: 'Beer', correct: false},
    ]
}




]