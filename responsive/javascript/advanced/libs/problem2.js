class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        document.write('Added: ' + book.title + '<br/>');
    }

    searchBooks(keyword) {
        for(let book of this.books) {
            if (book.title.toLowerCase().includes(keyword.toLowerCase()) || book.author.toLowerCase().includes(keyword.toLowerCase())) {
                return 'Found ' + book.title + ' by ' + book.author + '. <br/>';
            }
        }
        return 'Book with query ' + keyword + ' is not found. <br/>';
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const library = new Library();

// Adding books to the library
library.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
library.addBook(new Book("1984", "George Orwell"));
library.addBook(new Book("Pride and Prejudice", "Jane Austen"));
library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));

// Demonstrating functionality
document.write("<br/>Searching for the book with author 'Harper Lee':<br/>");
library.searchBooks("Harper Lee");
document.write(library.searchBooks("Harper Lee"));

document.write(
    "<br/>Searching for the book with title 'The Great Gastby':<br/>"
);
library.searchBooks("The Great Gatsby");
document.write(library.searchBooks("The Great Gatsby"));

document.write(
    "<br/>Searching for the book with title 'Design Thinking':<br/>"
);
library.searchBooks("Design Thinking");
document.write(library.searchBooks("Design Thinking"));

document.write("<br/>These are the books in the library:<br/>");

function displayBooks(book) {
    document.write("<ol><il>" + book.title + + " by " + book.author +"</il></ol>");
}

library.books.forEach(displayBooks);
