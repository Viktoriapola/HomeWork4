const getNumber = +prompt('Введите число','');

function getName (one, twoo, three) {

    if (getNumber == 1) {
        alert(getNumber + one);
    } else if (getNumber !== 11 && getNumber % 10 === 1) {
        alert(getNumber + one);
    } else if (getNumber >= 2 && getNumber <= 4) {
        alert(getNumber + three);
    } else if (getNumber >= 5 && getNumber <= 20) {
        alert(getNumber + twoo);
    } else if (getNumber % 10 === 2) {
        alert(getNumber + three);
    } else if (getNumber % 10 === 3) {
        alert(getNumber + three);
    } else if (getNumber % 10 === 4) {
        alert(getNumber + three);
    } else {
        alert(getNumber + twoo);
    }
    
    
}

getName(' Вика',' Вик',' Вики');
