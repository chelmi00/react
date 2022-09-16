import React, {useState} from "react";

export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <p>
        <input id="name" type="text" />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}