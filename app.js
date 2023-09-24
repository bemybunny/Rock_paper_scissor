let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const score_div=document.querySelector(".score_board");
const result_div=document.querySelector(".result");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

function getComputerChoice(){
    const choice=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function convert(userChoice){
    if(userChoice==='r'){
        return " Rock ";
    }
    else if(userChoice==="p"){
        return " Paper ";
    }else{
        return " Scissor ";
     }
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_div.innerHTML=`${convert(userChoice)}${smallUserWord} beats ${convert(computerChoice)}${smallUserWord}. You win!`;
}
function lose(userChoice,computerChoice){
    compScore++;
    compScore_span.innerHTML=compScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_div.innerHTML=`${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallUserWord}. You lost...`;
}
function draw(userChoice,computerChoice){
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_div.innerHTML=`${convert(userChoice)}${smallUserWord } equals ${convert(computerChoice)}${smallUserWord}. It's a draw`;
}
function Game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "sr":
        case "rp":
        case "ps":
        lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;
    }
}
function main(){
    rock.addEventListener('click',function(){
        Game("r");
    })
    paper.addEventListener('click',function(){
        Game("p");
    })
    scissor.addEventListener('click',function(){
        Game("s");
    })
}
main();