const Rock = document.querySelector(".rock");

const Paper = document.querySelector(".paper");

const Scissors = document.querySelector(".scissors");

const playerscore = document.querySelector(".player-score");

const computerscore = document.querySelector(".comp-score");

const winner = document.querySelector(".final-result");
let result;
let mescore= 0;
let pcscore = 0;
Rock.addEventListener("click",() =>{
    let playerchoice = "rock";
    winner.innerHTML = "";
    game(playerchoice);
})

Paper.addEventListener("click",() =>{
    let playerchoice = "paper";
    winner.innerHTML = "";
    game(playerchoice);
})

Scissors.addEventListener("click",() =>{
    let playerchoice = "scissors";
    winner.innerHTML = "";
    game(playerchoice);
})


function getcomputerchoice(){
    choice = Math.floor(Math.random() * 3) ;
    switch (choice) {
        case 0 :
            return "rock";
            break;
        case 1 :
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function getplayerchoice(){
/*let playerchoice = prompt("what is your choice. between rock, paper and scissors?");*/
while (playerchoice != "rock" && playerchoice != "paper" && playerchoice != "scissors"){
    playerchoice = prompt("choose between rock, paper or scissors. ONLY");
    playerchoice = playerchoice.toLowerCase();
    return playerchoice;  
}
playerchoice = playerchoice.toLowerCase();
return playerchoice;
}
function playround(getplayerchoice, getcomputerchoice){
    console.log(getcomputerchoice);
    console.log(getplayerchoice);
    return getplayerchoice == "rock" && getcomputerchoice == "paper" ? "you lose ! paper beats rock"  
    : getplayerchoice == "rock" && getcomputerchoice == "scissors" ? "you win ! rock beats scissors" 
    : getplayerchoice == "paper" && getcomputerchoice == "rock" ? "you win ! paper beats rock"
    : getplayerchoice == "paper" && getcomputerchoice == "scissors" ? "you lose ! scissors beats paper"
    : getplayerchoice == "scissors" && getcomputerchoice == "rock" ? "you lose ! rock beats scissors"
    : getplayerchoice =="scissors" && getcomputerchoice == "paper" ? "you win ! scissors beats paper"
    : getplayerchoice == getcomputerchoice ? "tie" : "error";   
}

function game(playerchoice){
    letplayerchoice = playerchoice;
    result = (playround(playerchoice,getcomputerchoice()));

    if (result.includes("win")){
        playerscore.innerHTML ++;
        mescore ++;
    }else if (result.includes("lose")){
        computerscore.innerHTML ++;
        pcscore ++;
    }

    if(mescore == 5){
        winner.innerHTML = "You win this match";
        computerscore.innerHTML = 0;
        playerscore.innerHTML = 0;
        mescore = 0;
        pcscore = 0;
    }else if(pcscore == 5){
        winner.innerHTML = "you lose this match";
        computerscore.innerHTML = 0;
        playerscore.innerHTML = 0;
        mescore = 0;
        pcscore = 0;
    }
}
