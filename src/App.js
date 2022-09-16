import React, {useState} from "react";

export default function App() {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <p>
        <input onChange={(e) => setName(e.target.value)} id="name" type="text" />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}