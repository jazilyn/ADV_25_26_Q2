// src/pages/BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [borrowed, setBorrowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const toggleBorrow = () => setBorrowed((prev) => !prev);

  if (loading) return <Loader />;
  if (error || !book) return (
    <div style={{ padding: '1rem' }}>
      <h2>Book not found</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{book.title}</h2>
      <p><strong>Description:</strong> {book.body}</p>
      <p><strong>Status:</strong> {borrowed ? 'Borrowed' : 'Available'}</p>
      <button onClick={toggleBorrow} disabled={borrowed}>
        {borrowed ? 'Return' : 'Borrow'}
      </button>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default BookDetails;