import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";
import CurrencyList from "../src/components/CurrencyList"
import MarketList from "../src/components/MarketList"
import Market from "../src/components/Market"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: "",
        name: "",
        portfolios: [],
<<<<<<< HEAD
        profile_picture: ""
=======
        profile_picture: ''
      },
      currencies: [],
      markets: [],
      market: {
        name: '',
        currency_markets: [],
>>>>>>> 5a1f05617ea56956d81e341c3ac71b87360aa32d
      }
    };
  }

  componentDidMount() {
    this.getUserData()
    this.getCurrencies()
    this.getMarkets()
    this.getMarket()
  }

  getUserData = () => {
    const userURL = "http://localhost:3000/users/81";
    return fetch(userURL)
<<<<<<< HEAD
      .then(resp => resp.json())
      .then(data => this.setState({ userData: data }))
      .then(console.log);
  };
=======
    .then(resp => resp.json())
    .then(data => this.setState({ userData: data }))
  }

  getCurrencies = () => {
    const currenciesURL = "http://localhost:3000/currencies";
    return fetch(currenciesURL)
    .then(resp => resp.json())
    .then(data => this.setState({ currencies: data }))
  }

  getMarkets = () => {
    const marketsURL = "http://localhost:3000/markets";
    return fetch(marketsURL)
    .then(resp => resp.json())
    .then(data => this.setState({ markets: data }))
  }

  getMarket = () => {
    const marketURL = "http://localhost:3000/markets/1";
    return fetch(marketURL)
    .then(resp => resp.json())
    .then(data => this.setState({ market: data }))
  }
>>>>>>> 5a1f05617ea56956d81e341c3ac71b87360aa32d

  render() {
    return (
      <div>
        <Navbar />
        <Dashboard portfolios={this.state.userData.portfolios}/>
        <CurrencyList currencies={this.state.currencies} />
        <MarketList markets={this.state.markets} />
        <Market market={this.state.market} />
      </div>
    );
  }
}
