"use strict";
const books = [
    {
        id: 1,
        title: 'Twilight',
        author: 'Stephenie Meyer',
        published: new Date('09-06-2006'),
        available: true,
    },
    {
        id: 2,
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki, Sharon Lechter',
        published: new Date('04-01-1997'),
        available: false,
    },
    {
        id: 3,
        title: 'A Smarter Way to Learn JavaScript',
        author: 'Mark Myers',
        published: new Date('2018'),
        available: true,
    },
];
function addBook(book) {
    books.push(book);
}
function findBookById(id) {
    return books.find((book) => book.id === id);
}
function updateBook(book) {
    const index = books.findIndex((x) => x.id === book.id);
    if (index === -1) {
        return false;
    }
    books[index] = book;
    return true;
}
function removeBook(id) {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
}
console.log(books);
addBook({
    id: 4,
    title: 'Black Cake',
    author: 'Charmaine Wilkerson',
    published: new Date('08-23-2022'),
    available: true,
});
console.log(books);
console.log(findBookById(3));
console.log(findBookById(6));
console.log(updateBook({ id: 2, title: "Shop Till You Drop", author: "Jerry Ford", published: new Date("02-03-02019"), available: true }));
console.log(removeBook(2));
console.log(books);
