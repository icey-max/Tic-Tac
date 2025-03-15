

const gameBoard = {
topLeft:null, topCenter:null, topRight: null,
middleLeft:null, middleCenter: null, middleRight:null,
bottomLeft:null, bottomCenter:null, bottomRight:null,
}

const gameState = {
    status:null,
    winner:null,
    history:[],
}

const boardConverted = Object.keys(gameBoard)

function createBoard(size){
    const gameLocation = document.querySelector('.game-container')
    let identity = 0

    for(i=0; i< size; i++){
    
        const newRow = document.createElement("div");
        newRow.className = "row";
        newRow.id = `row${i}`
        gameLocation.appendChild(newRow)
    
        for(j=0; j<size; j++){
            identity += 1
            const box = document.createElement("div");
            box.className = "box"
            box.id = `box${identity}`
            newRow.appendChild(box)
    
        }
    }
}


createBoard(3)

const allBoxes = document.querySelectorAll('.box')



    allBoxes.forEach(element =>{
        element.addEventListener("click",(e) =>{
            const currentID = e.target.id;
            const getPosition = currentID[3]-1; // Get's the last char from the ID which is represented as a number here and substracts 1 so it matches array indexing
            const getNames = boardConverted[getPosition];
    
            // Now Access the Original Board and Write to It
    
            if(gameState.status === null){
            if(gameBoard[getNames] === null){
                e.target.appendChild(document.createElement("div")).innerHTML = "H"; // This creates the element Inside
                gameBoard[getNames] = "human";
                console.log(`${gameBoard[getNames]} on ${boardConverted[getPosition]}`);
                boardInConsole()
                checkGame()

                getComputerInput()
    
            }
            else{
                console.log(`ALREADY TAKEN - ${gameBoard[getNames]} on ${boardConverted[getPosition]}`)
            }
    
            
        }

            else{
                console.log("Game's Over Loser") // Needs feature for announcer
            }

    
    
    
    
            
    
    
        })
    })




   
    
function getUserInput(){

    

    
}


function getComputerInput(){
    const entr = Object.entries(gameBoard);
    let availablePositions = [];

    // Checks available positions and appends it to the list 

    if(gameState.status === null){
        entr.forEach(element => {

            const value = element[1]
            const position = element[0]
            if (value === null){
                availablePositions.push(position)
    
            }
        });
    
        const randomNumber = Math.floor(Math.random() * availablePositions.length);
    
        let choice = availablePositions[randomNumber];
        const allBoxes = document.querySelectorAll('.box')
        console.log(`Computer chose ${choice}`)
        gameBoard[choice] = "computer";
    
    
    
    const toIndex = entr.findIndex(item => item[0] === choice);
    
    allBoxes[toIndex].appendChild(document.createElement("div")).innerHTML = "C"
        checkGame()
        boardInConsole()
    }

else{
    console.log("Computer Already Lost")
}

    
}


function boardInConsole(){
    const toArray = Object.entries(gameBoard);


let rez = ``;


toArray.forEach(element => {
    toNumber = toArray.indexOf(element);
    

    if(toNumber < 3){
        rez += ` | ${element} `
    }

    else if(toNumber === 3){
        rez += `
        \n ${element}`
    }

    else if (toNumber < 6){
        rez+= ` | ${element}`   
    
    }

    else if(toNumber === 6){
        rez += `
        \n ${element}`
    }

    else if (toNumber < 9){
        rez+= ` | ${element}`   
    
    }


    
});

console.log(rez);


    


}

function animatePattern(pattern){

    const allBoxes = document.querySelectorAll('.box');
    const toList = Object.keys(gameBoard);
    console.log(`${pattern} HERE`);
    // const history = [];

    // pattern.forEach(element =>{
    //     const foundIndex = toList.findIndex(item => item === element)
    //    history.push(foundIndex)
        

    // })

    // history.forEach(index => {
    //     allBoxes[index].className = "box-lined"
        
    // });

}
function checkGame(){
/* toList.forEach(element =>{


    if(element[0].includes("top")){
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE TOPS - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE TOPS - HUMAN`)

        }
    }
   
    
    if(element[0].includes("middle")){
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE MIDDLES - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE MIDDLES - HUMAN`)

        }
    }



    if(element[0].includes("bottom")){
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE BOTTOMS - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE BOTTOMS - HUMAN`)

        }
    }

    if(element[0].includes("Right")){
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE Rights - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE Rights - HUMAN`)

        }
    }

    if(element[0].includes("Center")){
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE Center - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE Center - HUMAN`)

        }
    }
    
    if(element[0].includes("Left")){
        humanMatch = 0;
        computerMatch = 0;
        if(element[1] === "human"){
            humanMatch += 1

        }
        else if (element[1] === "computer"){
            computerMatch += 1
        }
        if(computerMatch === 3){
            console.log(`MATCH ON THREE Lefts - COMPUTER`)

        }
        else if(humanMatch === 3){
          console.log(`MATCH ON THREE Lefts - HUMAN`)

        }
    }
 

})
*/


const winningPatterns = {
    row1:{
        topLeft:gameBoard.topLeft, topCenter:gameBoard.topCenter, topRight: gameBoard.topRight,
    },
    row2:{
        middleLeft:gameBoard.middleLeft, middleCenter: gameBoard.middleCenter, middleRight:gameBoard.middleRight,

    },

    row3:{
        bottomLeft:gameBoard.bottomLeft, bottomCenter:gameBoard.bottomCenter, bottomRight:gameBoard.bottomRight,   
    },
    column1:{
        topLeft:gameBoard.topLeft, middleLeft:gameBoard.middleLeft, bottomLeft:gameBoard.bottomLeft,   
    },
    column2:{
        topCenter:gameBoard.topCenter, middleCenter:gameBoard.middleCenter, bottomCenter:gameBoard.bottomCenter,   
    },
    column3:{
        topRight:gameBoard.topRight, middleRight:gameBoard.middleRight, bottomRight:gameBoard.bottomRight,   
    },
    diagonal1:{
        topLeft:gameBoard.topLeft, middleCenter:gameBoard.middleCenter, bottomRight:gameBoard.bottomRight,
    },
    diagonal2:{
        topRight:gameBoard.topRight, middleCenter:gameBoard.middleCenter, bottomLeft:gameBoard.bottomLeft,
    }
   

}

const toList = Object.keys(winningPatterns)
const pattern = []


toList.forEach(element => {
    const again = Object.entries(winningPatterns[element]);

    const allNull = again.every(val => val[1] === null);
    const allHuman = again.every(val => val[1] === "human");
    const allComputer = again.every(val => val[1] === "computer");

    if(allHuman === true){
        console.log(`Win for human on ${element}`)
        gameState.status = "finished"
        gameState.winner = "human"
        gameState.history.push("human")
        startCountdown();

        const accessPaternWithName = Object.keys(winningPatterns[element])

        accessPaternWithName.forEach(element =>{
            pattern.push(element)

        })



        animatePattern(pattern)
    }
    else if(allComputer === true){
        console.log(`Win for Computer on ${element}`)
         gameState.status = "finished";
         gameState.winner = "computer"
         gameState.history.push("computer")
         startCountdown();

    }

  
})
}




function startCountdown() {
    const announcerHTML = document.querySelector('#announcerText')

    let timeLeft = 5; // Total seconds for countdown (adjust as needed)
    let countdownTimer;
    
    
    
    // Start the countdown
    // Set initial text
    announcerHTML.innerHTML = `Game Reset in ${timeLeft}s`;
    
    // Update display every second
    countdownTimer = setInterval(() => {
      timeLeft--;
      
      // Update the UI
      announcerHTML.innerHTML = `Time reset in ${timeLeft}s`;
      
      // When countdown reaches zero
      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        announcerHTML.innerHTML = 'Time reset!';
        refreshGame()
        
        // Optional: Call your actual timeout function here
        // yourTimeoutFunction();
      }
    }, 1000);
  }

function refreshGame(){
    const announcerHTML = document.querySelector('#announcerText')
    announcerHTML.innerHTML = `Waiting for game to start...`
    const boardList = Object.keys(gameBoard)
    const gameStateList = Object.keys(gameState);

    boardList.forEach(element => {
        gameBoard[element] = null
    });
    gameStateList.forEach(element => {
        if(element != "history")
            gameState[element] = null
    });


    // Refresh UI

    const allBoxes = document.querySelectorAll('.box')

    allBoxes.forEach(element =>{
        element.innerHTML = ``
    })

    addHistory()
}

function addHistory(){
    const historyHTML = document.querySelector('#gameHistory');

    gameState.history.forEach(element => {
        html = `<div>Round Won for ${element} </div>`
        historyHTML.insertAdjacentHTML('beforeend',html )
//    const toIndex = entr.findIndex(item => item[0] === choice);

    });

}

console.log(gameState.history)

