const Rock = document.querySelector(".rock");

const Paper = document.querySelector(".paper");

const Scissors = document.querySelector(".scissors");

const playerscore = document.querySelector(".player-score");

const computerscore = document.querySelector(".comp-score");

let result;

Rock.addEventListener("click",() =>{
    let playerchoice = "rock";
    result = (playround(playerchoice,getcomputerchoice()));

    if (result.includes("win")){
        playerscore.innerHTML ++;
    }else if (result.includes("lose")){
        computerscore.innerHTML ++;
    }else console.log("tie");
})

Paper.addEventListener("click",() =>{
    let playerchoice = "paper";
    result = (playround(playerchoice,getcomputerchoice()));

    if (result.includes("win")){
        playerscore.innerHTML ++;
    }else if (result.includes("lose")){
        computerscore.innerHTML ++;
    }else console.log("tie");
})

Scissors.addEventListener("click",() =>{
    let playerchoice = "scissors";
    result = (playround(playerchoice,getcomputerchoice()));

    if (result.includes("win")){
        playerscore.innerHTML ++;
    }else if (result.includes("lose")){
        computerscore.innerHTML ++;
    }else console.log("tie");
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
/*
function game(){
    let playerscore = 0;
    let computerscore = 0;
    for(let i = 0; i<5 ; i++){
        result =(playround(getplayerchoice(), getcomputerchoice())); 
        if (result.includes("win")){
            playerscore ++;
            console.log("you have "+playerscore+" points and the computer has "+computerscore);
        }else if (result.includes("lose")){
            computerscore ++;
            console.log("you have "+playerscore+" points and the computer has "+computerscore);
        }else console.log("tie");
    }
    if (playerscore > computerscore){
        return "you win the game!";
    }else if(computerscore > playerscore){
        return "you lose the game";
    } else return "tie!";

}
console.log(game());
*/
