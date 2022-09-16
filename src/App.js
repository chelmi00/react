import logo from './logo.svg';
import './App.css';

const UsersComponent = () => {
  const users = ['Bob', 'Alice', 'John'];

  const usersList = users.map((user) => {
    return <li key={user}>{user}</li>;
  });

  return (
    <ul>{usersList}</ul>
  );
}

function App() {
  return (
    <UsersComponent />
  );
}

export default App;
