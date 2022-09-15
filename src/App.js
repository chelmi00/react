import { render } from "@testing-library/react";
import { Component } from "react";
import Users from "./Users";

class App extends Component {
  state = {
    users: [
      {name: 'Bob'},
      {name: 'Alice'}
    ]
  };

  removeUser = (index) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((user, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const { users } = this.state;
    return (<Users users={users} removeUser={this.removeUser} />);
  }
}

export default App;