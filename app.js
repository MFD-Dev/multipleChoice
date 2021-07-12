// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}


















///////////////////////////////////////////////////////////////////////////////////////////////////////
// //before rendering a question; hide display
// start.style.display = "none";
// renderQuestion();
// quiz.style.display = "block"

// //render progress
// function renderProgress() {
//     for (let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML =+ "div class='prog' id=" + qIndex +"></div>";
//     }
// }










// //6.  start Quiz
// //create a variable start and then add a eventListener. for click--run startQuiz func
// // create startQuiz function.
// const start = document.getElementById("start");

// start.addEventListener("click", startQuiz());
//  let TIMER; //declare outside the function, so it's global
// function startQuiz() {
//     start.style.display = "none"; // hides the div
//     counterRender(); // render the counter-- set count & timeGuage to zero
//     TIMER = setInterval(counterRender, 1000) // to call the counter every 1 sec
//     progressRender(); // render progres bar
//     questionRender(); // render question
//     quiz.style.display = "block"; // display quiz
// }

// //7.  create scoreRender(); 
// function scoreRender() {
//     scoreContainer.style.display = "block"; // in html display is none.  This shows it.
//     // calculate the score percent
//     let scorePerCent = Math.round(100 * score / questions.length);
//     let img =  ( scorePerCent >= 80) ? "img/5.png" : 
//                ( scorePerCent >= 60) ? "img/4.png" : 
//                ( scorePerCent >= 40) ? "img/3.png" : 
//                ( scorePerCent >= 20) ? "img/2.png" : "img/1.png";
    
//     scoreContainer.innerHTML = "<img src=" + img + "><P>" + scorePerCent + "%</P>";
// }

// // 2A. create variables.
// let lastQuestionIndex = questions.length - 1;
// let runningQuestionIndex = 0;
// //2A.
// function renderQuestion() { 
//     //displaying to the user the first q--then need to increment++ to next q
//     let q = questions[runningQuestionIndex];
//     qImg.innerHTML = "<img src=" + q.imgSrc + ">";
//     question.innerHTML = "<p>" + q.question + "</p>";
//     choiceA.innerHTML = q.choiceA;
//     choiceB.innerHTML = q.choiceB;
//     choiceC.innerHTML = q.choiceC;

// }

// //3. Progress Render -- goes through the questions
// // checks if the answer is correct or wrong and displays the output
// function progressRender() {
//     for (let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
//         progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
//     }
//     function answerIsCorrect(){
//         document.getElementById(runningQuestionIndex).style.backgroundColor = "green"; //index is at 0
//     }
//     function answerIsWrong(){
//         document.getElementById(runningQuestionIndex).style.backgroundColor = "red"; //changes on wrong
// }

// //4. Counter Render
// // create instance and variables.  Then function.
// const questionTime = 10;
// const gaugeWidth = 150;
// let count = 0;
// const guageProgressUnit = gaugeWidth / questionTime;

// //will be called every one sec
// function counterRender() { //create a condition
//     if (count <= questionTime) {
//         counter.innerHTML = count;
//         //if guage is zero then count is zero and increments together til 15sec or 150px
//         timeGauge.style.width = guageProgressUnit * count + "px";
//         count++;
// } else { //if exceeds the counter 
//     count = 0;
//     answerIsWrong(); // call that function because question time was exceeded.
//     if (runningQuestionIndex < lastQuestionIndex) { //need to check if at last question
//         runningQuestionIndex++; //to move to next question
//         questionRender(); // call this function to render the next question
//     } else{
//         clearInterval(TIMER);
//         scoreRender(); // show score to user
//     }

// }

// // 4A.  call the counterRender every 1sec.
// //setInterval function that takes two arguments.  the counterRender function and time.
// // then assign that to a variable= TIMER, so the setInterval can stop running setInterval and go to 
// //clearInterval(Timer)

// let TIMER = setInterval(counterRender, 1000);

// // 5. create checkAnswer().  pass in argument answer, which is based on the selections
// // to increment create a variable called score with a 0 value.

// let score = 0;

// function checkAnswer(answer) {
//     if (questions[runningQuestionIndex].correct == answer) { 
//         //if answer is true increment score 
//         score++
//         answerIsCorrect();// update progress bar
//     } else {
//         answerIsWrong();
//     } 
//         if (runningQuestionIndex < lastQuestionIndex) {
//             //check to see if this is the last question
//             count = 0; // start over for zero for next question
//             runningQuestionIndex++; // increment to new question
//             questionRender(); // display the new question
//         }else {
//             clearInterval(TIMER);
//             scoreRender(); //show score to user
//         }
    
// }

// // 1. create a array with objects--question and choices
// let questions = [ 
//     {
//     question: "Who is the best javascript mentor?",
//     imgSrc: "img/picture2.png",
//     a: "TJ",
//     b: "Al Einstein",
//     c: "Nik Tesla",
//     // d: "John Connor",
//     correct: "a"
// },
//     {
//     question: "What is the most popular javascript library or framework?",
//     imgSrc: "img/picture2.png",
//     a: "Angular",
//     b: "Vue",
//     c: "React",
//     // d: "Other",
//     correct: "c"  
// },
//     {
//     question: "What is the most popular front end programming language?",
//     imgSrc: "img/picture2.png",
//     a: "Html",
//     b: "JavaScript",
//     c: "CSS",
//     // d: "Other",
//     correct: "b"
// }
//  ];
