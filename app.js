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
let playerchoice = prompt("what is your choice. between rock, paper and scissors?");
playerchoice = playerchoice.toLowerCase();
while (playerchoice != "rock" && playerchoice != "paper" && playerchoice != "scissors"){
    playerchoice = prompt("choose between rock, paper or scissors. ONLY");
    playerchoice = playerchoice.toLowerCase();
}
console.log(playerchoice);

function playround(playerchoice, getcomputerchoice,){
    console.log(getcomputerchoice);
    return playerchoice == "rock" && getcomputerchoice == "paper" ? "you lose! paper beats rock"  
    : playerchoice == "rock" && getcomputerchoice == "scissors" ? "you win! rock beats scissors" 
    : playerchoice == "paper" && getcomputerchoice == "rock" ? "you win! paper beats rock"
    : playerchoice == "paper" && getcomputerchoice == "scissors" ? "you lose! scissors beats paper"
    : playerchoice == "scissors" && getcomputerchoice == "rock" ? "you lose! rock beats scissors"
    : playerchoice =="scissors" && getcomputerchoice == "paper" ? "you win! scissors beats paper"
    : playerchoice == getcomputerchoice ? "tie" : "error";   
}
console.log(playround(playerchoice, getcomputerchoice()));


