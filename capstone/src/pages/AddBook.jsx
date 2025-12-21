import React, { useState } from 'react';

function AddBook() {
  const [form, setForm] = useState({ title: '', author: '', genre: '', date: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Book:', form); // Replace with actual state update
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <input name="author" placeholder="Author" onChange={handleChange} required />
      <input name="genre" placeholder="Genre" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;