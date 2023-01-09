function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
};

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "Read");
console.log(theHobbit.info());
