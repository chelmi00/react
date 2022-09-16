import React from "react";

export default function App() {

  let isLoggedIn = false;

  const RenderButton = () => {
    return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
  }

  return (
    <RenderButton />
  );
}