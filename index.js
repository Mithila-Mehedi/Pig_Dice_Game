// var score,dice,playgame,currentScore,activePlayer;
//
// function init(){
//   score=[0,0];
//   playgame=true;
//   currentScore=0;
//   activePlayer=0;
//
// }
//
// document.querySelector('.btn-roll').addEventListener('click',function(){
//   if(playgame){
//     //random number generate
//     dice=Math.floor(Math.random()*6)+1;
//     //dice select with random number
//     document.querySelector('.dice').style.display='block';
//     document.queryselector('.dice').src='dice-'+dice+'.png';
//     //random number will go to current number
//     if(dice!==1){
//       currentScore+=dice;
//       document.getElementById('current-'+activePlayer).textContent=currentScore;
//     }
//   }
//
//
// });


//sate variable is playgame.....which will be false after gettting winner
var scores,currentScore,activePlayer,dice,playgame;

init();
document.querySelector('.btn-roll').addEventListener('click',function(){
  if (playgame) {
    ///random number generate
      var dice=Math.floor(Math.random()*6)+1;
      ///display the result
      document.querySelector('.dice').style.display='block';
      document.querySelector('.dice').src='dice-'+dice+'.png';
      ///update the current score if not roll 1
      if(dice!==1){
        currentScore+=dice
        document.querySelector('#current-'+ activePlayer).textContent=currentScore;
      }else{
        ///next player
      nextPlayer();
      }
  }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if (playgame) {
    ///add current score to actual global score
     scores[activePlayer]+=currentScore;
    ///update user interface
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    ///check if player won
   if(scores[activePlayer]>=50){
     document.querySelector('#name-'+activePlayer).textContent='WINNER!!'
     document.querySelector('.dice').style.display='none';
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     playgame=false;
   }else{
     ///nxt player
   nextPlayer();
   }
  }

document.querySelector('.btn-new').addEventListener('click',init);

});
function nextPlayer(){
  activePlayer===0?activePlayer=1:activePlayer=0;
  currentScore=0;
  //to visible currentScore zero
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display='none';

}
function init(){
  scores=[0,0];
  currentScore=0;
  activePlayer=0;
  playgame=true;
///set score and current score=0
///update name from winner to player 1/Player2
///remove winner class and active class
///set player1 to active class
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.dice').style.display='none';

}
