// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import Loader from '../components/Loader';

function Home() {
  // Books list
  const [books, setBooks] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call delay
    setTimeout(() => {
      // Initial book data
      setBooks([
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', borrowed: false },
        { id: 2, title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', borrowed: true },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            books={books}
            setBooks={setBooks}
          />
        ))
      )}
    </div>
  );
}

export default Home;