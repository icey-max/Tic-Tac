// // Three 1's => 1000 points
// //  Three 6's =>  600 points
// //  Three 5's =>  500 points
// //  Three 4's =>  400 points
// //  Three 3's =>  300 points
// //  Three 2's =>  200 points
// //  One   1   =>  100 points
// //  One   5   =>   50 point


// const dices = [2, 4, ,4 ,5, 4]


// function score(dice){
//     let score = 0;
//     let thousandPoints = 0;
//     let sixHundredPoints = 0;
//     let fiveHundredPoints = 0;
//     let fourHundredPoints = 0;
//     let threeHundredPoints = 0;
//     let twoHundredPoints = 0;
//     let hundredPoints = 0;
//     let fiftyPoint = 0 ;


//    dice.forEach(side => {
//     if (side === 1){
//         hundredPoints += 1
//         thousandPoints += 1

//     }

//     else if( side === 2){
//         twoHundredPoints += 1
//     }

//     else if( side === 3){
//         threeHundredPoints += 1
//     }
//     else if( side === 4){
//         fourHundredPoints += 1
//     }
//     else if( side === 5){
//         fiveHundredPoints += 1;
//         fiftyPoint += 1
//     }
//     else if( side === 6){
//         sixHundredPoints += 1
//     }




    
//    });


//    if(fiftyPoint > 0){
//     if (fiftyPoint === 1){
//         score += 50;

//     }
//     if (fiftyPoint === 2){
//         score += 100;
//     }
//     if (fiftyPoint === 5){
//         score += 100;
//     }
//      if(fiftyPoint === 4){
//         score += 50;
//     }
//  }

//   if(hundredPoints > 0){
//     if (hundredPoints === 1){
//         score += 100;

//     }
//     if(hundredPoints === 2){
//         score +=200
//     }
//     if(hundredPoints === 5){
//         score +=200
//     }
//     if(hundredPoints === 4){
//         score += 100;
//     }
//  }

//  if(twoHundredPoints >= 3){
//     score += 200
//  }
 
//  if(threeHundredPoints >= 3){
//     score += 300
//  }
//  if(fourHundredPoints >= 3){
//     score += 400
//  }
//  if(fiveHundredPoints >= 3){
//     score += 500
//  }

//  if(sixHundredPoints >= 3){
//     score += 600
//  }


//  if(thousandPoints >= 3){
//     score += 1000
//  }
 
// return score;
// }




// score(dices)


function getCount(str) {

 vowels = ["a", "e","i", "o","u"]


 vowels.forEach(element => {
    console.log(str.indexOf(element))
 });
}


getCount("abracadabra")