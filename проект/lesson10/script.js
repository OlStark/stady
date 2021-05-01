'use strict'

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book');

//Расставил книги по порядку//
books[0].append(book[0]);
books[0].append(book[4]);
books[0].append(book[3]);
books[0].append(book[5]);
books[0].append(book[2]);

//Поменял заголовок в 3 книге//
let chengedHeader = document.getElementsByTagName('a')[2];
chengedHeader.replaceWith('Книга 3. this и Прототипы Объектов');



console.log(books);
console.log(book);
//Удалил рекламу//
let spam = document.querySelector('.adv');
spam.remove();