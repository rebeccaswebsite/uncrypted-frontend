import React from "react";
import Navbar from "../src/components/Navbar";
// import Search from "../src/components/Search";
import Dashboard from "../src/components/Dashboard";
import CurrencyList from "../src/components/CurrencyList";
import MarketList from "../src/components/MarketList";
import Market from "../src/components/Market";
import Currency from "../src/components/Currency";
import MyPortfolioList from "../src/components/MyPortfolioList";
import { Route, Switch, withRouter } from "react-router-dom";
import LoginForm from "./pages/Login";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: { id: "", name: "" },
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
    this.getCurrencies();
    setInterval(() => this.getCurrencies(), 10000);
    this.getMarkets();
    // this.getPortfolios();
  }

  login = (userId, userName) => {
    this.setState({ loggedInUser: { id: userId, name: userName } });
    this.getUserData(userId);
    this.props.history.push("/dashboard");
    localStorage.setItem("token, user.id");
  };

  logout = () => {
    this.setState({ loggedInUser: { id: "", name: "" } });
    this.setState({
      userData: {
        email: "",
        name: "",
        portfolios: [],
        profile_picture: ""
      }
    });
  };

  getUserData = id => {
    const userURL = `http://localhost:3000/users/${id}`;
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
        <Navbar
          loggedInUser={this.state.loggedInUser.name}
          logout={this.logout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Dashboard portfolios={this.state.userData.portfolios} />;
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={props => {
              return (
                <Dashboard
                  portfolios={this.state.userData.portfolios}
                  loggedInUser={this.state.loggedInUser}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/currencies"
            render={props => {
              return (
                <CurrencyList
                  currencies={this.state.currencies}
                  changeSelectedCurrency={this.changeSelectedCurrency}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/markets"
            render={props => {
              return (
                <MarketList
                  selectedMarket={this.state.selectedMarket}
                  changeSelectedMarket={this.changeSelectedMarket}
                  markets={this.state.markets}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path={`/markets/${this.state.selectedMarket.id}`}
            render={props => {
              return (
                <Market selectedMarket={this.state.selectedMarket} {...props} />
              );
            }}
          />

          <Route
            exact
            path={`/currencies/${this.state.selectedCurrency.id}`}
            render={props => {
              return (
                <Currency
                  selectedCurrency={this.state.selectedCurrency}
                  {...props}
                />
              );
            }}
          />

          <Route
            exact
            path={`/my-portfolios`}
            render={props => {
              return (
                <MyPortfolioList
                  portfolios={this.state.userData.portfolios}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path={`/login`}
            render={props => {
              return <LoginForm login={this.login} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
