//1. func to start game
//2. func to setNext  question
//3. func to select answer 

//variables 
const startButton = document.getElementById('start-btn');  //1a
const nextButton = document.getElementById('next-btn');  //1a
const questionContainerElement = document.getElementById('question-container'); //2
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//shuffle Variables
let shuffledQuestions, currentQuestionIndex  //this will default both to undefined


startButton.addEventListener('click', startGame);  //1b
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()

})


function startGame() {   
    // console.log('Hello')
    //hide btn
    startButton.classList.add('hide')  //1c
    shuffledQuestions = questions.sort(() => Math.random() - .5)
     currentQuestionIndex = 0; //set to zero, to start at the beg of questions array
    questionContainerElement.classList.remove('hide');  //2
    setNextQuestion()

}

function setNextQuestion() {
    resetState() //going to reset everything after ea question
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion(question) {
   
    // console.log('showQuestions')
    questionElement.innerText = question.question; //reading question variable
    question.answers.forEach(answer => {  //loop thrgh get single answer
        const button = document.createElement('button')  // create a btn
        button.innerText = answer.text  // set the answer
        button.classList.add('btn')
        if(answer.correct) {  //check if answer is correct
            button.dataset.correct = answer.correct  //adds a data attr to btn ele
            // only due this for the correct answer.  if did it for all then it would 
            // be difficult to tell which is a string or not.  Because it would be a string
            // and not a boolean.
        }
        button.addEventListener('click', selectAnswer) //add a event to selAns func.  
        //it will take event as a parameter. then add param to selAns param
        answerButtonsElement.appendChild(button)  //last is add to this ele
    })


}

//last funct created
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide') //hide the button
    while (answerButtonsElement.firstChild){  //loop through all children of ans btn ele
        //if there is a child inside of ans btn ele then remove it.
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {  //add a param taking event in as a param
// now the last part is to add the btn selection functionality
const selectedButton = e.target //this is the btn that is selected
const correct = selectedButton.dataset.correct  // check to see if btn is correct
setStatusClass(document.body, correct)  // see if it needs to be set to correct or wrong.
Array.from(answerButtonsElement.children).forEach(button => { //loop thrgh all other btns&set class
    //have to convert to array; ansBtn.chlrn is a live collection and updates on it's own
    //need to convert to array to use w/forEa loop
    setStatusClass(button, button.dataset.correct)//create a function below

})
if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide');
} else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
         element.classList.add('wrong')
    }
}
//exact opposite for above
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Who is the best javascript mentor?",
        answers: [
            {text: 'TJ', correct: true},
            {text: 'Al Einstein', correct : false},
            {text: 'Nik Tesla', correct : false},
            {text: 'John Connor', correct : false}

        ]
    },
    {
        question: "What is the most popular javascript library or framework?",
        answers: [
            {text: 'Angular', correct: false},
            {text: 'Vue', correct : false},
            {text: 'React', correct : true},
            {text: 'Other', correct : false}

        ]
    },
    {
        question: "What is the most popular front end programming language?",
        answers: [
            {text: 'HTML', correct: false},
            {text: 'JavaScript', correct : true},
            {text: 'CSS', correct : false},
            {text: 'Other', correct : false}

        ]
    },
    
]
























