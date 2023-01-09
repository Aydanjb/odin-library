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

addBookToLibrary(theHobbit);
