// Data buku awal (dummy data)
let books = [
    { id: 1, title: 'Harry Potter', genre: 'Fiksi', author: 'J.K Rowling' },
    { id: 2, title: 'Percy Jackson 1 : The Lightning Thief', genre: 'Fiksi', author: 'Rick Riordan' },
    // Tambahkan lebih banyak buku di sini
];

const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');

// Fungsi untuk menampilkan daftar buku
function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book) => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${book.title}</h3>
                        <p>Genre: ${book.genre}<br>Penulis: ${book.author}</p>
                        <button onclick="editBook(${book.id})">Edit</button>
                        <button onclick="deleteBook(${book.id})">Hapus</button>`;
        bookList.appendChild(li);
    });
}

// Fungsi untuk mencari buku berdasarkan judul
function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
}

// Fungsi untuk menambahkan buku
function addBook() {
    const title = prompt('Masukkan judul buku:');
    const genre = prompt('Masukkan genre buku:');
    const author = prompt('Masukkan nama penulis:');

    const newBook = {
        id: books.length + 1,
        title,
        genre,
        author,
    };

    books.push(newBook);
    displayBooks();
}

// Fungsi untuk mengedit buku
function editBook(bookId) {
    const book = books.find((book) => book.id === bookId);
    if (!book) return;

    const newTitle = prompt('Masukkan judul baru:', book.title);
    const newGenre = prompt('Masukkan genre baru:', book.genre);
    const newAuthor = prompt('Masukkan penulis baru:', book.author);

    book.title = newTitle;
    book.genre = newGenre;
    book.author = newAuthor;

    displayBooks();
}

// Fungsi untuk menghapus buku
function deleteBook(bookId) {
    books = books.filter((book) => book.id !== bookId);
    displayBooks();
}

// Menampilkan daftar buku awal
displayBooks();