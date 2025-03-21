let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("Game was Drawn");
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor = "grey";

}

const showWinner =(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =You Win!  Your ${userChoice} beats ${compChoice};
        msg.style.backgroundColor = "green";
    }else{
       compScore++;
       compScorePara.innerText=compScore;
        msg.innerText =You Lose! ${compChoice} beats your ${userChoice};
        msg.style.backgroundColor = "red";
    }
}
const genComputerChoice=()=>{
    //rock, paper,scissor
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //Genereate computer choice
    const compChoice=genComputerChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="scissors"? false:true;
        }
        else if(userChoice==="scissors"){
            //paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
