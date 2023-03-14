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



