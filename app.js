// Book Class: Represents A Book

class Book{
    constructor(title, author, isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks

class UI{
  static displayBooks(){
    const StoredBooks = [
        {
            title: 'Book One',
            author: 'John Doe',
            isbn: '3434434'
        },
        {
            title: 'Book Two',
            author: 'Jane Doe',
            isbn: '45545'
        }
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
   const list = document.querySelector('#book-list');

   const row = document.createElement('tr');

   row.innerHTML = `
   <td>${book.title}</td>
   `;
  }
}

// Store Class: Handles Storage

// Event: Display Books

// Event: Add A Book

// Event: Remove A Book