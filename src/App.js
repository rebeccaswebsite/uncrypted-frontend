import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: "",
        name: "",
        portfolios: [],
        profile_picture: ""
      }
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    const userURL = "http://localhost:3000/users/81";
    return fetch(userURL)
      .then(resp => resp.json())
      .then(data => this.setState({ userData: data }))
      .then(console.log);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Dashboard portfolios={this.state.userData.portfolios} />
      </div>
    );
  }
}
