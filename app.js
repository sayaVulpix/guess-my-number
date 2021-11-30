"use strict";

// 1 Stworzyć message text context
// 2 Strzorzyć sekretny numer
// 3 zrobić do btn check event listenera
// zmienić wartość inputu na numer do porównania z sekretnym numerem
// zmienić message kiedy input wynosi 0 lub jest pusty
// ustalić gdy wynik  jest sekretnym numerem i gdy nie
// zmienić message gdy odpowiedź jest prawidłowa albo za wysoka albo za mała
// stworzyć zmienna score i dać jej wartość 20
// odjąć od wartości score 1 numer gry guess number jest za duży lub za mały
// wyświetlić aktualną wartość scoru
// zatrzymać dalsze zgadywanie gdy wynik wynosi 0 i wyświetlić message
//ustawić highscore, gdy score jest wiekszy od highscore ustawić highscore na score
//ustawić tekstcontent highscoru
//ustawić btn again przywrócić wszystko do stanu wyjściowego

// document.querySelector(".message").textContent = "Correct";

let secrtetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === secrtetNumber) {
    displayMessage("Correct!");
    document.querySelector('body').style.backgroundColor = '#0a792f';
    document.querySelector('.number').textContent =secrtetNumber

    if (score > highscore) {
      highscore=score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secrtetNumber) {
    if (score > 1) {
      displayMessage(guess > secrtetNumber ? "too high!" : " too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage('You lost the game')
      document.querySelector('.score').textContent =0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score =20;
  secrtetNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent =score;
  document.querySelector('body').style.backgroundColor = 'rgb(0, 114, 99)';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?'

})

