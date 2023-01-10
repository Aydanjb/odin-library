const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", "Read");
const lotr1 = new Book("The Fellowship of the Ring", "J.R.R Tolkien", "527", "Read");
const lotr2 = new Book("The Two Towers", "J.R.R Tolkien", "448", "Not read")
const lotr3 = new Book("Return of the King", "J.R.R Tolkien", "432", "Not read");

addBookToLibrary(theHobbit);
addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);
