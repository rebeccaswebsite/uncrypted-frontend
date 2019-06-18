import React from "react";
import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";
import CurrencyList from "../src/components/CurrencyList";
import MarketList from "../src/components/MarketList";
import Market from "../src/components/Market";
import Currency from "../src/components/Currency";
import MyPortfolioList from "../src/components/MyPortfolioList";
import UserProfile from "../src/components/UserProfile";
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
      },
      selectedCurrency: {
        ticker: "",
        target: "",
        price: "",
        volume: "",
        change: "",
        currency_markets: []
      },
      portfolios: []
    };
  }

  componentDidMount() {
    this.getUserData();

    this.getCurrencies();
    setInterval(() => this.getCurrencies(), 10000);

    this.getMarkets();
    // this.getPortfolios();
  }

  getUserData = () => {
    const userURL = "http://localhost:3000/users/11";
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

  getPortfolios = () => {
    const portfoliosURL = "http://localhost:3000/portfolios";
    return fetch(portfoliosURL)
      .then(resp => resp.json())
      .then(data => this.setState({ portfolios: data }));
  };

  changeSelectedMarket = market => {
    const marketURL = `http://localhost:3000/markets/${market.id}`;
    return fetch(marketURL)
      .then(resp => resp.json())
      .then(data => this.setState({ selectedMarket: data }));
  };

  changeSelectedCurrency = currency => {
    const currencyURL = `http://localhost:3000/currencies/${currency.id}`;
    return fetch(currencyURL)
      .then(resp => resp.json())
      .then(data => this.setState({ selectedCurrency: data }));
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
              return <CurrencyList currencies={this.state.currencies} 
              changeSelectedCurrency={this.changeSelectedCurrency}
              currencies={this.state.currencies}
              />;
            }}
          />
          <Route
            exact
            path="/markets"
            component={props => {
              return (
                <MarketList
                  selectedMarket={this.state.selectedMarket}
                  changeSelectedMarket={this.changeSelectedMarket}
                  markets={this.state.markets}
                />
              );
            }}
          />
          <Route
            exact
            path={`/markets/${this.state.selectedMarket.id}`}
            component={props => {
              return <Market selectedMarket={this.state.selectedMarket} />;
            }}
          />

          <Route
            exact
            path={`/currencies/${this.state.selectedCurrency.id}`}
            component={props => {
              return (
                <Currency selectedCurrency={this.state.selectedCurrency} />
              );
            }}
          />

          <Route
            exact
            path={`/my-portfolios`}
            component={props => {
              return (
                <MyPortfolioList portfolios={this.state.userData.portfolios} />
              );
            }}
          />

          <Route
            exact
            path={`/my-profile`}
            component={props => {
              return (
                <UserProfile user={this.state.userData} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
