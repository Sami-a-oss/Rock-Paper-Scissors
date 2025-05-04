let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".box");
const output = document.querySelector("#messg");
const myScorePara = document.querySelector("#myScore");
const comScorePara = document.querySelector("#computerScore");

const genComChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomIndx = Math.floor(Math.random() * 3);
    return option[randomIndx];
}


const findWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        myScorePara.innerText = userScore;
        output.innerText = `user win! ${userChoice} beats ${computerChoice}`;
        output.style.backgroundColor = "green";
    } else {
        computerScore++;
        comScorePara.innerText = computerScore;
        output.innerText = `computer win! ${computerChoice} beats ${userChoice}`;
        output.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user",userChoice);

    const computerChoice = genComChoice();
    console.log("computer",computerChoice);

    if (userChoice === computerChoice) {
        output.innerText = "Draw! Play Again";
        output.style.backgroundColor = "#8b1b31";
        console.log("draw");
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            userWin = computerChoice === "rock" ? false : true;
        }
        findWinner (userWin, userChoice, computerChoice);
    }

}



choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log("clicked", userChoice);
        playGame(userChoice);
    });
});