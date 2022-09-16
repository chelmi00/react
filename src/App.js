import React from "react";

export default function App() {

  let isLoggedIn = false;
  const RenderButton = () => {
    if (isLoggedIn) {
      return <button>Logout</button>;
    } else {
      return <button>Login</button>;
    }
  };

  return (
    <RenderButton />
  );
}