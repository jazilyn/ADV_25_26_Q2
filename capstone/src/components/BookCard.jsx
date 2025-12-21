import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, books, setBooks }) {
  const toggleBorrow = () => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, borrowed: !b.borrowed } : b
    );
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author} – {book.genre}</p>
      <p>Status: {book.borrowed ? 'Borrowed' : 'Available'}</p>
      <button onClick={toggleBorrow} disabled={book.borrowed}>
        {book.borrowed ? 'Return' : 'Borrow'}
      </button>
      <Link to={`/books/${book.id}`}>Details</Link>
    </div>
  );
}

export default BookCard;