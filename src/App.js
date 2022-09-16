import React from 'react';

export default function App() {

  function hello(user) {
    alert('Hello ' + user);
  }

  return (
    <button onClick={() => hello('Ana')}>Click me!</button>
  );
}


