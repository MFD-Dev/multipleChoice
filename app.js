

//Baseline SetUp
// //Variables
// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// // create our questions
// const  myQuestions = [
//     {
//     question: "Who is the best javascript mentor?",
//     answers: { 
//     // imgSrc: "img/picture2.png",
//     a: "TJ",
//     b: "Al Einstein",
//     c: "Nik Tesla",
//     d: "John Connor",
//     },
//      correctAnswer: "a"
// },
//     {
//     question: "What is the most popular javascript library or framework?",
//     answers: { 
//     // imgSrc: "img/picture2.png",
//     a: "Angular",
//     b: "Vue",
//     c: "React",
//     d: "Other",
//     },
//      correctAnswer: "c"  
// },
//     {
//     question: "What is the most popular front end programming language?",
//     answers: { 
//     // imgSrc: "img/picture2.png",
//     a: "Html",
//     b: "JavaScript",
//     c: "CSS",
//     d: "Other",
//     },
//     correctAnswer: "b"
// }
//  ];

// //Functions
// function buildQuiz(){
//   // variable to store the HTML output
//   const output = [];

//   // for each question...
//   myQuestions.forEach(
//     (currentQuestion, questionNumber) => {

//         // console.log('hello')
//       // variable to store the list of possible answers
//       const answers = [];

//       // and for each available answer...
//       for(letter in currentQuestion.answers){

//         // ...add an HTML radio button
//         answers.push(
//           `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>`
//         );
//       }

//       // add this question and its answers to the output
//       output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>`
//       );
//     }
//   );

//   // finally combine our output list into one string of HTML and put it on the page
//   quizContainer.innerHTML = output.join('');
// }


// function showResults() {
//     //gather answer containers from our quiz
//     const answerContainers = quizContainer.querySelectorAll('.answers');

//     //keep track of user's answers
//     let numCorrect = 0;

//     //for each question...
//     myQuestions.forEach((currentQuestion, questionNumber) => {
//         //find selected answer 
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         //if answer is correct 
//         if(userAnswer === currentQuestion.correctAnswer){
//             //add to the number of correct answers 
//             numCorrect++;

//             //color the answers green
//             answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         //if answer is wrong or blank
//         else{
//             //color the answers red
//             answerContainers[questionNumber].style.color = 'red';
//         }
//         //show number of correct answers out of total
//         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     });

// }

// //display quiz right away
// buildQuiz();

// //Event Listeners -- on submit; show results
// submitButton.addEventListener('click', showResults);








// //Structure
// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// function showQuestions(questions, quizContainer){
// 	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;

// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': ' 
// 					+ questions[i].answers[letter] 
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }

// 	function showResults(questions, quizContainer, resultsContainer){
//         console.log('hello')
// 		//gather answer containers from quiz  
//         var answerContainers = quizContainer.querySelectorAll('.answers');

//         //keep track of users answers 
//         var userAnswer = '';
//         var numCorrect = 0;

//         //for each question
//         for(var i = 0; i < questions.length; i++){
//             //find selected answer 
//             userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

//             //if answer is Correct
//             if(userAnswer===questions[i].correctAnswer){
//                 //add to the number of correct answers
//                 numCorrect++;
//                 //color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }
//             // else if(userAnswer !== questions[i].correctAnswer){
//             //      var showCorrect = correctAnswer.style.color = 'lightgreen';
//             // }
//             //if answer is wrong or blank
//             else {
//                 // color the answers red                     
//                 answerContainers[i].style.color = 'red'; 
//             }
          
//         }
//         //show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// 	}

// 	// show the questions
// 	showQuestions(questions, quizContainer);

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}
// }


// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


























