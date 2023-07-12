let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.printStatus = function (status) {
    if (status == true) {
      return "read";
    } else {
      return "not read yet";
    }
  };
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${this.printStatus(
      readStatus
    )}.`;
  };
}

function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}
