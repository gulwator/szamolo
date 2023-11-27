
let answer=0;
function getNumberPairs(){


const numArray= [1,2,3,4,5]
let num2=0;
let num1 = Math.floor((Math.random() * 5)+1);

switch (num1) {
    case 5:
        num2=0    
        break;
    case 4:
        num2=Math.round(Math.random())
        break;
    case 3:
        num2=Math.floor(Math.random()*3);
        break;
    case 2:
        num2=Math.floor(Math.random()*4);
        break;
    case 1: 
        num2=Math.floor(Math.random()*5)
        break;

    default:
        
        break;
}
answer=num1+num2;
const num1Button=document.getElementById("num1").innerText = num1;
const num2Button=document.getElementById("num2").innerText = num2;
console.log(num1, num2)

let answers=[answer, answer-1, answer+1]
if (answer==5) {
answers=[answer, answer-2, answer-1]
    
}
const answer1Button=document.getElementById("answeroption1").innerText = answers[0];
const answer2Button=document.getElementById("answeroption2").innerText = answers[1];
const answer3Button=document.getElementById("answeroption3").innerText = answers[2];
return answer;
}

function answerClicked(id){
   console.log(document.getElementById(id).innerHTML)
   if (document.getElementById(id).innerHTML==answer) {
    console.log("yess")
   }
}