<!DOCTYPE html>
<html>
<head>
  <title>Book Collection</title>
</head>
<body>
  <h1>My Book Collection</h1>

  <div>
    <label for="title">Title:</label>
    <input type="text" id="title">
  </div>

  <div>
    <label for="author">Author:</label>
    <input type="text" id="author">
  </div>

  <div>
    <label for="year">Year:</label>
    <input type="text" id="year">
  </div>

  <div>
    <label for="isbn">ISBN:</label>
    <input type="text" id="isbn">
  </div>

  <div>
    <label for "genre">Genre:</label>
    <input type="text" id="genre">
  </div>

  <button id="addBook">Add Book</button>

  <h2>Book List:</h2>
  <ul id="bookList"></ul>

  <h2>Book Details:</h2>
  <div id="bookDetails"></div>

  <h2>Update Book:</h2>
  <div id="updateForm">
    <label for="updateAuthor">New Author:</label>
    <input type="text" id="newAuthor">
    <button id="updateAuthorButton">Update Author</button>
  </div>

  <h2>Delete Book:</h2>
  <div id="deleteForm">
    <label for="deleteTitle">Title to Delete:</label>
    <input type="text" id="deleteTitle">
    <button id="deleteBookButton">Delete Book</button>
  </div>

  <script>
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');
    const isbnInput = document.getElementById('isbn');
    const genreInput = document.getElementById('genre');
    const addBookButton = document.getElementById('addBook');
    const bookList = document.getElementById('bookList');
    const bookDetails = document.getElementById('bookDetails');
    const updateForm = document.getElementById('updateForm');
    const newAuthorInput = document.getElementById('newAuthor');
    const updateAuthorButton = document.getElementById('updateAuthorButton');
    const deleteForm = document.getElementById('deleteForm');
    const deleteTitleInput = document.getElementById('deleteTitle');
    const deleteBookButton = document.getElementById('deleteBookButton');
    const books = [];

    addBookButton.addEventListener('click', () => {
      const title = titleInput.value;
      const author = authorInput.value;
      const year = yearInput.value;
      const isbn = isbnInput.value;
      const genre = genreInput.value;

      if (title && author && year && isbn && genre) {
        const book = {
          title: title,
          author: author,
          year: year,
          isbn: isbn,
          genre: genre
        };

        books.push(book);
        updateBookList();
        
        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
        isbnInput.value = '';
        genreInput.value = '';
      } else {
        alert('Please fill out all fields');
      }
    });

    function updateBookList() {
      bookList.innerHTML = '';

      books.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Title: ${book.title}, Author: ${book.author}`;

        // Create "Read," "Update," and "Delete" buttons for each book
        const readButton = document.createElement('button');
        readButton.textContent = 'Read';
        readButton.addEventListener('click', () => {
          displayBookDetails(book);
        });

        listItem.appendChild(readButton);
        bookList.appendChild(listItem);
      });
    }

    function displayBookDetails(book) {
      bookDetails.innerHTML = `Title: ${book.title}<br>Author: ${book.author}<br>Year: ${book.year}<br>ISBN: ${book.isbn}<br>Genre: ${book.genre}`;
    }

    updateAuthorButton.addEventListener('click', () => {
      const newAuthor = newAuthorInput.value;
      if (newAuthor) {
        const selectedBook = books.find(book => book.title === titleInput.value);
        if (selectedBook) {
          selectedBook.author = newAuthor;
          updateBookList();
          displayBookDetails(selectedBook);
        }
      } else {
        alert('Please enter a new author name.');
      }
    });

    deleteBookButton.addEventListener('click', () => {
      const titleToDelete = deleteTitleInput.value;
      if (titleToDelete) {
        const indexToDelete = books.findIndex(book => book.title === titleToDelete);
        if (indexToDelete !== -1) {
          books.splice(indexToDelete, 1);
          updateBookList();
          bookDetails.innerHTML = ''; // Clear book details when a book is deleted
        } else {
          alert('Book not found. Please check the title.');
        }
      } else {
        alert('Please enter the title of the book to delete.');
      }
    });
  </script>
</body>
</html>
