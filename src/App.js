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
        email: '',
        name: '',
        portfolios: [],
        profile_picture: ''
      },
      currencies: [],
      markets: [],
      market: {
        name: '',
        currency_markets: [],
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
