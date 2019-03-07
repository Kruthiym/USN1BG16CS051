
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player roll 2 dice as many times as he whishes. Each result of the sum of the die get added to his ROUND score
- BUT, if the player rolls equal number on each die, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach exactly 0 points on GLOBAL score wins the game
- Constraints is that if the GLOBAL score is either 1 or 2 then that player loses the game
- since we do not get a sum of 1 when 2 die are rolled and the sum of two can only be obtained when on
- each die there occurs a 1,but this is not possible since it violates the rule.

*/

var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        console.log(dice1);
        //2. Display the result
        var diceDOM = document.querySelector('.dice-0');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceDOM = document.querySelector('.dice-1');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice1 + '.png';


        //3. Update the round score IF the rolled numbers were NOT equal
        if (dice !== dice1) {
            //Add score
            roundScore = dice+dice1+roundScore;
            
            console.log(roundScore);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        
        // Add CURRENT score to GLOBAL score
        globalScores[activePlayer]=globalScores[activePlayer]-roundScore;
        //To be a winner the global score has to be exactly 1
        if(globalScores[activePlayer]<0)
        {
            globalScores[activePlayer]=roundScore+globalScores[activePlayer];
        }
        //if globalscore=2 then it requires a score of 1 on each die which a constraint and
        //when globalscore=1 it is never possible to win the match since sum of 2 numbers is never=1
        if(globalScores[activePlayer]===2||globalScores[activePlayer]===1)
        {   
            document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            nextPlayer();
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];

        // Check if player won the game
        if (globalScores[activePlayer] === 0) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    globalScores = [100, 100];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '100';
    document.getElementById('score-1').textContent = '100';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;








/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
