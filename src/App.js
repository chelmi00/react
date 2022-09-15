import React from 'react';
import './App.css';

function Welcome(props) {
  return (
    <h1>Hello {props.user}!</h1>
  );
}

class Welcome2 extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.user}!</h1>
    );
  }
}

function App() {
  return (
    <div>
      <Welcome user="Bob" />
      <Welcome user="Miguel" />
    </div>
  );
}

export default App;
