const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
var securityQuestions = [
 {
 question: "What was your first pet’s name?",
 expectedAnswer: "FlufferNutter"},
 {
 question: "What was the model year of your first car?",
 expectedAnswer: "1985"},
 {
 question: "What city were you born in?",
 expectedAnswer: "NYC"}
]

function chksecurityQuestions(securityQuestions,ques,ans)
{
   for(let i=0;i<securityQuestions.length;i++)
   {
     if(securityQuestions[i].question===ques)
     {
         if(securityQuestions[i].expectedAnswer===ans)
         return true;
         return false;
     }
     
   }
}
var ques=userInput[0];
var ans=userInput[1];
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status);
});