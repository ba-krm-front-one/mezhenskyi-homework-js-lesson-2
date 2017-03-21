var login = prompt('Кто пришел?', '');

if (login == 'Админ') {
    let password = prompt('Пароль?', '')

    if (password == 'Чёрный Властелин') {
        alert( 'Добро пожаловать!' );
    } else if (password == null) {
        alert( 'Вход отменён' );
    } else {
        alert( 'Я вас не знаю' );
    }

} else if (login == null) {
    alert( 'Вход отменён' );
} else {
    alert( 'Я вас не знаю' );
}