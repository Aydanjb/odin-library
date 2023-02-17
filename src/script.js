const main = document.querySelector("main");
const addBookButton = document.getElementById("addBook");
const formPopup = document.getElementById("formPopup");
const form = document.querySelector(".formContainer");
const formTitle = document.getElementById("title");
const formAuthor = document.getElementById("author");
const formPages = document.getElementById("pages");
const formRead = document.getElementById("read");
const closeFormBtn = document.querySelector(".cancelBtn");
const stack = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () =>
  `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;

function addCard(item) {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");

  card.classList.add("card");
  title.textContent = `${item.title}`;
  author.textContent = `${item.author}`;
  pages.textContent = `${item.pages}`;
  read.textContent = `${item.read}`;

  main.appendChild(card);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
}

form.onsubmit = (e) => {
  e.preventDefault();
  const newBook = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    formRead.value
  );
  stack.push(newBook);
  addCard(stack.pop());
};

function openForm() {
  formPopup.style.display = "block";
}

function closeForm() {
  formPopup.style.display = "none";
}

addBookButton.addEventListener("click", () => {
  openForm();
});
closeFormBtn.addEventListener("click", () => {
  closeForm();
});
