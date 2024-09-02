let age = prompt('Укажите возраст:');
// '27'
let isAdult = Number(age) >= 18;

if (isAdult) {
    alert('Входите');
} else {
    alert('Вход запрещён');
}

