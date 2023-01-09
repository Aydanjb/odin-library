function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${status}.`
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "Read");
console.log(theHobbit.info())