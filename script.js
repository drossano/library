let myLibrary = [];

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
}

function displayLibrary(library) {
  generateHeaders();
  const table = document.getElementById("library_table");
  library.forEach((book) => {
    var row = table.insertRow();
    var bookInfo = Object.values(book);
    bookInfo.forEach((element) => {
      var cell = row.insertCell();
      cell.innerHTML = element;
    });
  });
}

function generateHeaders() {
  const headers = ["Title", "Author", "Pages", "Read"];
  const table = document.getElementById("library_table");
  var header = table.createTHead();
  var headerRow = header.insertRow(0);
  headers.forEach((element) => {
    var headerCell = headerRow.insertCell();
    headerCell.innerHTML = element;
  });
}

addBookToLibrary("the hobbit", "tolkien", 100, true);
addBookToLibrary("the expanse", "james sa corey", 1332, false);
