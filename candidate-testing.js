const input = require("readline-sync");

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [];
questions[0] = "Who was the first American woman in space? ";
questions[1] = "True or false: 5 kilometer == 5000 meters? ";
questions[2] = "(5 + 3)/2 * 10 = ? ";
questions[3] = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
questions[4] = "What is the minimum crew size for the ISS? ";

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  for (i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  console.log(`Candidate Name: ${candidateName}`)
  let score = 0;
  for (i = 0; i < candidateAnswers.length; i++) {
    console.log(`${questions[i]}
      Correct Answer : ${correctAnswers[i]}
      Your Answer : ${candidateAnswers[i]}`); 

      if(candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
        score += 1;
      }
  }

  //TODO 3.2 use this variable to calculate the candidates score.
  let grade = (score / questions.length) * 100;
  let status = "FAILED";
  if (grade >= 80) {
    status = "PASS";
  }

  console.log(`>>> Overall Grade: ${grade} % (${score} of ${questions.length} responses correct) <<< `);
  console.log(`>>> Status: ${status} <<<`)
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Good morning " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
