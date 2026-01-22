// src/pages/BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useTheme } from '../context/ThemeContext';
function BookDetails() {
const { theme } = useTheme()

const buttonDetail = {
  backgroundColor: theme === "light" ? "white" : "#CDCDCD",
  width: "100px",
  height: "60px",
  border: "none",
  borderRadius: "8px",
  fontFamily: "Inria Serif, serif"
}
const pageStyle = {
  backgroundColor: theme === "light" ? "#F3FBE6" : "#18235D",
  minHeight: "100vh",
  padding: "2rem",
  color: theme === "light" ? "black" : "white",
  fontFamily: "Inria Serif, serif",
};

const containerStyle = {
  width: "1685px",
  margin: "0 auto"
};

const linkStyle = {
  color: theme === "light" ? "#12358D" : "#AFC7FF",
  textDecoration: "none",
  fontWeight: "bold"
};


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
      <Link to="/">Back to Home </Link>
    </div>
  );

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
      <h2>{book.title}</h2>
      <p><strong>Description:</strong> {book.body}</p>
      <p><strong>Status:</strong> {borrowed ? 'Borrowed' : 'Available'}</p>
      <button onClick={toggleBorrow} disabled={borrowed} style={buttonDetail}>
        {borrowed ? 'Return' : 'Borrow'}
      </button>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/" style={linkStyle}>Back to Home</Link>
      </div>
    </div>
    </div>
  );
}

export default BookDetails;