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
  return displayLibrary(myLibrary);
}

function displayLibrary(library) {
  const table = document.getElementById("library_table");
  table.innerHTML = "";
  generateHeaders();
  library.forEach((book) => {
    var row = table.insertRow();
    var bookInfo = Object.values(book);
    bookInfo.forEach((element) => {
      var cell = row.insertCell();
      cell.innerHTML = element;
    });
    var deleteCell = row.insertCell();
    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete Book";
    deleteCell.appendChild(deleteButton);
  });
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
