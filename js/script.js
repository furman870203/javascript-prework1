const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + "został kliknięty");

    // tu znajdzie się cała dotychczasowa zawartość pliku js/script.js
    // czyli efekt ćwiczenia z poprzedniego submodułu
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
    let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {  
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }
    
    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');  
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
        printMessage('Remis!'); 
      }  else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
        printMessage('Remis!');
      }  else if (argPlayerMove == 'Nożyce' && argComputerMove == 'nożyce') {
        printMessage('remis!');
    } else {
        printMessage('Przegrywasz :(');
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}
buttonRock.addEventListener('click', function(){
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce');
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)
