/*Add your JavaScript here*/
var conradFisher = 0;
var jereFisher = 0;
var stevenC = 0;
var camC = 0;
var amountQuestions = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var restartButton = document.getElementById("restart");

q1a1.addEventListener("click", conrad);
q1a2.addEventListener("click", jere);
q1a3.addEventListener("click", cam);
q1a4.addEventListener("click", steven);

q2a1.addEventListener("click", conrad);
q2a2.addEventListener("click", jere);
q2a3.addEventListener("click", cam);
q2a4.addEventListener("click", steven);

q3a1.addEventListener("click", cam);
q3a2.addEventListener("click", conrad);
q3a3.addEventListener("click", steven);
q3a4.addEventListener("click", jere);

q4a1.addEventListener("click", jere);
q4a2.addEventListener("click", cam);
q4a3.addEventListener("click", conrad);
q4a4.addEventListener("click", steven);

q5a1.addEventListener("click", steven);
q5a2.addEventListener("click", cam);
q5a3.addEventListener("click", jere);
q5a4.addEventListener("click", conrad);
restartButton.addEventListener("click", restart);

function conrad() {
  conradFisher += 1;
  amountQuestions += 1;
  console.log("amountQuestions =" + amountQuestions + " conradFisher = " + conradFisher);

if (amountQuestions == 5) {
  console.log("This quiz is DONE!")
  updateResult();
}
}

function jere() {
  jereFisher += 1;
  amountQuestions += 1;
  console.log("amountQuestions =" + amountQuestions + " jereFisher = " + jereFisher);

if (amountQuestions == 5) {
  console.log("This quiz is DONE!")
  updateResult();
}}


function steven() {
  stevenC += 1;
  amountQuestions += 1;
  console.log("amountQuestions =" + amountQuestions + " stevenC = " + stevenC);

if (amountQuestions == 5) {
  console.log("This quiz is DONE!")
  updateResult();
}
}

function cam() {
  camC += 1;
  amountQuestions += 1;
  console.log("amountQuestions =" + amountQuestions + " camC = " + camC);

if (amountQuestions == 5) {
  console.log("This quiz is DONE!")
  updateResult();
}}

function updateResult() {
    if (jereFisher >= 2) {
      result.innerHTML = "The best candidate award goes to Jeremiah Fisher!";
      console.log("Your best match is Jeremiah Fisher!");
    } else if (conradFisher >= 2) {
      result.innerHTML = "The best candidate award goes to Conrad Fisher!";
      console.log("Your best match is Conrad Fisher!");
    }
      else if (camC >= 2) {
      result.innerHTML = "The best candidate award goes to Cam Cameron!";
      console.log("Your best match is Cam Cameron!");
    }
      else if (stevenC >= 2) {
      result.innerHTML = "The best candidate award goes to Steven Conklin!";
      console.log("Your best match is Steven Conklin!");
    }
      
}

function restart() {
  result.innerHTML = "The best candidate award goes to..."
  conradFisher = 0;
  jereFisher = 0;
  stevenC = 0;
  camC = 0;
  amountQuestions = 0;
  
  console.log("amountQuestions =" + amountQuestions + " jereFisher = " + jereFisher + "conradFisher =" + conradFisher);
}
  