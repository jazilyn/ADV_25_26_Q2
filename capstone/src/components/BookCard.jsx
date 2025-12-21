import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext"
function BookCard({ book, books, setBooks }) {
   const { theme } = useTheme();
   
   const cardStyle= {
    backgroundColor: theme === "light" ? "white" : "#CDCDCD",
    borderRadius: "12px",
    padding: "20px",
    width: "500px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
   };
   const imageStyle = {
    width: "150px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
   };
   const infoStyle = {
    display: "flex",
    flexDirection : "column",
    justifyContent: "space-between",
   };
   const buttonStyle = {
    backgroundColor: theme === "light" ? "#F3FBE6" : "#12358D",
    color: theme === "light" ? "black" : "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    width: "140px",
    fontFamily: "Inria Serif, serif"
   };
  
  const toggleBorrow = () => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, borrowed: !b.borrowed } : b
    );
    setBooks(updatedBooks);
  };

  return (
    <div style={cardStyle}>
      <img src={book.image} alt="cover" style={imageStyle}/>
      <div style={infoStyle}>
      <h3>{book.title}</h3>
      <p>{book.author} – {book.genre}</p>
      <p>Status: {book.borrowed ? 'Borrowed' : 'Available'}</p>
      <button onClick={toggleBorrow} disabled={book.borrowed} style={buttonStyle}>
        {book.borrowed ? 'Return' : 'Borrow'}
      </button>
      <Link to={`/books/${book.id}`} style={{ marginTop: "10px", color:"black"}} >Details</Link>
    </div>
    </div>
  );
}

export default BookCard;