
document.title = 'test document JS';

let matchDone = JSON.parse(localStorage.getItem('matchDone')) || {    
    wins: 0,
    losses: 0,
    ties: 0
};

// if(!matchDone){
//     matchDone = {    
//         wins: 0,
//         losses: 0,
//         ties: 0
        
//     };
// }

updateScoreElm();

function playingGame(playerMove){
    const randomNumber = Math.random();
    const computerMove = randomComputerMove();
    let results = '';

    if(playerMove === 'rock'){
            if (computerMove === 'rock'){
                result = 'tie';
            } else if (computerMove === 'scissors'){
                result = 'win';
            } else if (computerMove === 'paper'){
                result = 'loss';
            }
    } else if(playerMove === 'paper'){
            if (computerMove === 'paper'){
                result = 'tie';
            } else if (computerMove === 'rock'){
                result = 'win';
            } else if (computerMove === 'scissors'){
                result = 'loss';
            }
    } else if(playerMove === 'scissors'){
            if (computerMove === 'scissors'){
                result = 'tie';
            } else if (computerMove === 'paper'){
                result = 'win';
            } else if (computerMove === 'rock'){
                result = 'loss';
            }
    }

    if (result === 'win'){
        matchDone.wins += 1;
    } else if (result === 'loss'){
        matchDone.losses += 1;
    } else if (result === 'tie'){
        matchDone.ties += 1;
    }

    localStorage.setItem('matchDone',JSON.stringify(matchDone));

    updateScoreElm();

    document.querySelector(".result-js").innerHTML = result;
    document.querySelector(".compMove-js").innerHTML = `You 
<img src="${playerMove}-move.png"> 
<img src="${computerMove}-move.png"> Computer`;

    
}

function updateScoreElm(){
    document.querySelector(".score-js").innerHTML = `wins: ${matchDone.wins}, loss: ${matchDone.losses}, ties: ${matchDone.ties}`;
}
// random number generator to decide a 1/3th of a chance
function randomComputerMove(){

    const randomNumber = Math.random();
        let results = '';
        let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
    
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    
    }else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    
    }

    return computerMove;

}




function resetValue(matchDone){

    matchDone.wins = 0;
    matchDone.losses = 0;
    matchDone.ties = 0;
    localStorage.removeItem('matchDone');
    alert(`the match has now finished,
    wins: 0, losses: 0, ties: 0`);
    updateScoreElm();
}

