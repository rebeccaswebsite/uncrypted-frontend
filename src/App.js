import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";
import CurrencyList from "../src/components/CurrencyList"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userData: {
        email: '',
        name: '',
        portfolios: [],
        profile_picture: ''
      },
      currencies: []
    };
  }
  
  componentDidMount() {
    this.getUserData()
    this.getCurrencies()
  }
  
  getUserData = () => {
    const userURL = "http://localhost:3000/users/1";
    return fetch(userURL)
    .then(resp => resp.json())
    .then(data => this.setState({ userData: data }))
  }

  getCurrencies = () => {
    const currenciesURL = "http://localhost:3000/currencies";
    return fetch(currenciesURL)
    .then(resp => resp.json())
    .then(data => this.setState({ currencies: data }))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Dashboard portfolios={this.state.userData.portfolios}/>
        <CurrencyList currencies={this.state.currencies} />
      </div>
    );
  }
}
