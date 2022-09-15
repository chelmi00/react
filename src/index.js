import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  if (user)
    return user.firstName + ' ' + user.lastName;
  return 'Stranger';
}

const user = {
  firstName: 'Miguel',
  lastName: 'Fernández'
}

const element = (
  <div>
    <h1>Hello, {formatName(user)}</h1>
    <h1 style={{color:'red'}}>Hello, {formatName()}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
