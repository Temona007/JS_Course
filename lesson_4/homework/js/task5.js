do {

    var computerChoice = Math.floor(Math.random() * 3)+ 1; // PC values: 1 or 2 or 3

    function getUserChoice() {
        return prompt(' Enter: Камень / Ножницы / Бумага');
    }

    function getComputerChoice() {
        return computerChoice;
    }
    // PC choices:
    // 1 == камень
    // 2 == бумага
    // 3 == ножницы

    let user = getUserChoice();
    let comp = getComputerChoice();
            
    function game(comp, user) {
        if (comp === user ) {
            alert('Friendship won');
        }
        else if (comp === 1) { // 1 == камень
            if (user === 'ножницы') {
                return document.write('PC WIN');
            }
            else if (user === 'бумага') { 
                return document.write('USER WIN');
            }
            else if (user === 'камень') { 
                return document.write('FRIENDSHIP WIN');
            }
            else {
                return document.write('ADD PROPER VALUE');
            }
        }
        else if (comp === 2) { // 2 == бумага
            if (user === 'ножницы') {
                return document.write('USER WIN');
            }
            else if (user === 'камень') { 
                return document.write('PC WIN');
            }
            else if (user === 'бумага') { 
                return document.write('FRIENDSHIP WIN');
            }
            else {
                return document.write('ADD PROPER VALUE');
            }
        }
        else if (comp === 3) { // 3 == ножницы
            if (user === 'бумага') {
                return document.write('PC WIN');
            }
            else if (user === 'камень') { 
                return document.write('USER WIN');
            }
            else if (user === 'ножницы') { 
                return document.write('FRIENDSHIP WIN');
            }
            else {
                return document.write('ADD PROPER VALUE');
            }
        }
    }

    game(comp, user);

    let playAgain = confirm('Do you want play again?');

} while (playAgain);


