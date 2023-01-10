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

function addBookDiv(c) {
  const main = document.querySelector('main');
  const newDiv = document.createElement('div');
  const newTitle = document.createElement('h3');
  const newAuthor = document.createElement('p');
  const newPages = document.createElement('p');
  const newRead = document.createElement('p');
  const titleText = `${myLibrary[c].title}`
  const authorText = `${myLibrary[c].author}`
  const pagesText = `${myLibrary[c].pages}`
  const readText = `${myLibrary[c].read}`

  newTitle.classList.add("title");
  newAuthor.classList.add("author");
  newPages.classList.add("pages");
  newRead.classList.add("read");
  newDiv.classList.add("card");
  newTitle.textContent = titleText
  newAuthor.textContent = authorText
  newPages.textContent = pagesText
  newRead.textContent = readText
  newDiv.appendChild(newTitle);
  newDiv.appendChild(newAuthor);
  newDiv.appendChild(newPages);
  newDiv.appendChild(newRead);
  main.appendChild(newDiv);
}



for (let i = 0; i < myLibrary.length; i += 1) {
  addBookDiv(i);
}