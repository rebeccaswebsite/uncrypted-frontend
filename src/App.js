import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };
  }

  getUserData = () => {
    const userURL = "http://localhost:3000/users/1";
    return fetch(userURL).then(resp => resp.json());
  };

  componentDidMount() {
    this.getUserData().then(resp => this.setState({ userData: resp }));
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
