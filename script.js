let myLibrary = [];

const bookProperties = document.getElementById("book-properties");

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.printStatus = function (status) {
  if (status == true) {
    return "read";
  } else {
    return "not read yet";
  }
};

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  newBook.index = myLibrary.indexOf(newBook);
  return displayLibrary(myLibrary);
}

function displayLibrary(library) {
  const table = document.getElementById("library_table");
  table.innerHTML = "";
  generateHeaders();
  library.forEach((book) => {
    var row = bookToTable(table, book);
    createReadButton(row, book);
    createDeleteButton(row, book);
  });
}


function createDeleteButton(row, book) {
  var deleteCell = row.insertCell();
  var deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete Book";
  deleteButton.addEventListener("click", function () {
    deleteBook(book.index);
  });
  deleteCell.appendChild(deleteButton);
}

function createReadButton(row, book) {
  var readCell = row.insertCell();
  var readButton = document.createElement("input");
  readButton.type = "button";
  readButton.value = book.readStatus;
  readButton.addEventListener("click", function () {
    changeReadStatus(book.index);
  });
  readCell.appendChild(readButton);
}

function bookToTable(table, book) {
  var row = table.insertRow();
  var bookInfo = Object.values(book);
  bookInfo.pop();
  bookInfo.pop();
  bookInfo.forEach((element) => {
    var cell = row.insertCell();
    cell.innerHTML = element;
  });
  return row;
}

function deleteBook(bookIndex) {
  delete myLibrary[bookIndex];
  displayLibrary(myLibrary);
}

function changeReadStatus(bookIndex) {
  if (myLibrary[bookIndex].readStatus == true) {
    myLibrary[bookIndex].readStatus = false;
  } else {
    myLibrary[bookIndex].readStatus = true;
  }
  displayLibrary(myLibrary);
}

function generateHeaders() {
  const headers = ["Title", "Author", "Pages", "Read", "Delete"];
  const table = document.getElementById("library_table");
  var header = table.createTHead();
  var headerRow = header.insertRow(0);
  headers.forEach((element) => {
    var headerCell = headerRow.insertCell();
    headerCell.innerHTML = element;
  });
}

let bookForm = document.getElementById("book-properties");
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  return addBookToLibrary(title, author, pages, read);
});

bookForm.style.display = "none";

button = document.getElementById("add-button");

button.addEventListener("click", () => {
  bookForm.style.display = "inline";
});

addBookToLibrary("the hobbit", "tolkien", 100, true);
addBookToLibrary("the expanse", "james sa corey", 1332, false);
