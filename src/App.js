import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";
import CurrencyList from "../src/components/CurrencyList";
import MarketList from "../src/components/MarketList";
import Market from "../src/components/Market";
import { Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        email: "",
        name: "",
        portfolios: [],
        profile_picture: ""
      },
      currencies: [],
      markets: [],
      selectedMarket: {
        name: "",
        currency_markets: []
      }
    };
  }

  componentDidMount() {
    this.getUserData();

    this.getCurrencies();
    setInterval(() => this.getCurrencies(), 10000);

    this.getMarkets();
    this.getMarket();
  }

  getUserData = () => {
    const userURL = "http://localhost:3000/users/81";
    return fetch(userURL)
      .then(resp => resp.json())
      .then(data => this.setState({ userData: data }))
      .then(console.log);
  };

  getCurrencies = () => {
    const currenciesURL = "http://localhost:3000/currencies";
    return fetch(currenciesURL)
      .then(resp => resp.json())
      .then(data => this.setState({ currencies: data }));
  };

  getMarkets = () => {
    const marketsURL = "http://localhost:3000/markets";
    return fetch(marketsURL)
      .then(resp => resp.json())
      .then(data => this.setState({ markets: data }));
  };

  getMarket = () => {
    const marketURL = "http://localhost:3000/markets/76";
    return fetch(marketURL)
      .then(resp => resp.json())
      .then(data => this.setState({ selectedMarket: data }));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            component={props => {
              return <Dashboard portfolios={this.state.userData.portfolios} />;
            }}
          />
          <Route
            exact
            path="/dashboard"
            component={props => {
              return <Dashboard portfolios={this.state.userData.portfolios} />;
            }}
          />
          <Route
            exact
            path="/currencies"
            component={props => {
              return <CurrencyList currencies={this.state.currencies} />;
            }}
          />
          <Route
            exact
            path="/markets"
            component={props => {
              return <MarketList markets={this.state.markets} />;
            }}
          />
          <Route
            exact
            path="/market"
            component={props => {
              return <Market selectedMarket={this.state.selectedMarket} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
