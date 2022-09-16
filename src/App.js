import React from "react";

export default function App() {

  let isLoggedIn = false;

  return (
    (function() {
      if (isLoggedIn) {
        return <button>Logout</button>;
      } else {
        return <button>Login</button>;
      }
    }) ());
}