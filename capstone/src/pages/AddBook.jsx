import React from 'react';
import {useState} from 'react';
import styles from '../styles/AddBook.module.css';
import { useTheme } from '../context/ThemeContext';


function AddBook() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    name: '', 
    author: '',
    status: 'Available',
  });

  const handleChange = (e) => {
    const {name, value}=e.target
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name && formData.author) {
      setBooks((prev) => [...prev, formData]);
    setFormData({ name: '', author: '', status: 'Available' });
  }
}; 

const { theme } = useTheme();

  const formStyle = {
        backgroundColor: theme === "light" ? "#F3FBE6" : "#CDCDCD",
        color: theme === "light" ? "black" : "#000000ff"
      };
      

    const listStyle = {
        backgroundColor: theme === "light" ? "#ffffffff" : "#CDCDCD",
        color: theme === "light" ? "black" : "black"
      };

      const pageStyle = {
        backgroundColor: theme === "light" ? "#E6ECFB" : "#18235D",
        color: theme === "light" ? "black" : "black"
      };

  


return (


    <div className={styles.addBookPage} style={pageStyle}>
      <div className={styles.bookList} style={listStyle}>
        <h2>Current Books In Library</h2>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          books.map((book, index) => (
            <div key={index} className={styles.bookEntry}>
              <p>Book Name: {book.name}</p>
              <p>Author: {book.author}</p>
              <p>Status: {book.status}</p>
            </div>
          ))
        )}
      </div>

      <div className={styles.addBookForm} style={formStyle}>
        <h2>Add Book to List</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Book Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Author
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
            </select>
          </label>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;



