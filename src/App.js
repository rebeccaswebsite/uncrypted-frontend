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
import { validate, getData } from "./services/api";
class App extends React.Component {
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
      trace1: { mode: "lines+markers", name: "US Dollar", y: [] },
      userWallet: 0
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined"
    ) {
      validate()
        .then(resp => {
          this.login(resp.token, resp.username);
        })
        .catch(err => {
          alert(err);
        });
    } else {
      this.props.history.push("/login");
    }

    this.getCurrencies();
    setInterval(() => this.getCurrencies(), 30000);
    this.getMarkets();
  }

  login = (token, userName) => {
    localStorage.setItem("token", token);
    getData().then(data => {
      this.setState({ userData: data }, () => {
        this.calculateWallet();
        this.props.history.push("/dashboard");
      });
    });
  };

  logout = () => {
    this.setState({
      userData: {
        email: "",
        name: "",
        portfolios: [],
        profile_picture: ""
      }
    });
    localStorage.removeItem("token");
  };

  calculateWallet = () => {
    const portfolios = this.state.userData.portfolios;
    console.log("The wallet is being calculated.");

    const currenciesInPortfolios = portfolios.map(portfolio =>
      this.state.currencies.filter(
        currency => portfolio.currency === currency.ticker
      )
    );
    const values = currenciesInPortfolios.map((currency, i) => {
      return parseFloat(currency[0].price) * portfolios[i].quantity;
    });

    const getSum = (total, num) => {
      return total + Math.round(num);
    };

    const walletValue = values.reduce(getSum, 0);

    this.setState({ userWallet: walletValue });
  };

  // getUserData = id => {
  //   const userURL = `http://localhost:3000/users/${id}`;
  //   return fetch(userURL)
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ userData: data }));
  // };

  setTracesForChart = data => {
    if (this.state.selectedCurrency.price !== "") {
      const currency = data.find(
        currency => currency.ticker === this.state.selectedCurrency.ticker
      );
      this.setState({
        trace1: {
          ...this.state.trace1,
          y: [...this.state.trace1.y, parseFloat(currency.price)]
        }
      });
      console.log(this.state.trace1.y);
    }
  };

  getCurrencies = () => {
    const currenciesURL = "http://localhost:3000/currencies";
    return fetch(currenciesURL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ currencies: data });
        this.setTracesForChart(data);
        this.calculateWallet();
      });
  };

  getMarkets = () => {
    const marketsURL = "http://localhost:3000/markets";
    return fetch(marketsURL)
      .then(resp => resp.json())
      .then(data => this.setState({ markets: data }));
  };

  addToPortfolios = portfolio => {
    const { userData } = this.state;
    this.setState({
      userData: {
        ...userData,
        portfolios: [...userData.portfolios, portfolio]
      }
    });
    // this.setState({userData: })
    console.log("calling the function addToPortfolios", portfolio);
  };

  updatePortfolio = portfolio => {
    const { userData } = this.state;

    const portfolios = userData.portfolios.map(existingPortfolio =>
      existingPortfolio.id === portfolio.id ? portfolio : existingPortfolio
    );

    this.setState({ userData: { ...userData, portfolios } });
  };

  portfolioIsAlreadyInPortfolios = portfolio =>
    this.state.userData.portfolios.some(
      existingPortfolio => existingPortfolio.id === portfolio.id
    );

  addOrUpdatePortfolio = portfolio => {
    console.log(portfolio);
    const {
      portfolioIsAlreadyInPortfolios,
      updatePortfolio,
      addToPortfolios
    } = this;

    if (portfolioIsAlreadyInPortfolios(portfolio)) {
      updatePortfolio(portfolio);
    } else {
      addToPortfolios(portfolio);
    }

    this.calculateWallet();
  };

  newPortfolio = num => {
    const data = {
      user_id: this.state.loggedInUser.id,
      risk_profile: num
    };
    return fetch("http://localhost:3000/portfolios/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          userData: { portfolios: [...this.state.userData.portfolios, data] }
        });
      });
  };

  changeSelectedMarket = market => {
    const marketURL = `http://localhost:3000/markets/${market.id}`;
    return fetch(marketURL)
      .then(resp => resp.json())
      .then(data => this.setState({ selectedMarket: data }));
  };

  changeSelectedCurrency = currency => {
    this.setState({
      trace1: {
        ...this.state.trace1,
        y: []
      }
    });
    const currencyURL = `http://localhost:3000/currencies/${currency.id}`;
    return fetch(currencyURL)
      .then(resp => resp.json())
      .then(data => this.setState({ selectedCurrency: data }));
  };

  render() {
    return (
      <div>
        <Navbar userData={this.state.userData} logout={this.logout} /> <br />
        {localStorage.getItem("token") &&
        localStorage.getItem("token") !== "undefined" ? (
          <div>
            <h4>
              Amount in wallet: $
              {this.state.userWallet
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            </h4>
            <h4>
              Currencies in wallet:
              {this.state.userData.portfolios.map(
                portfolio => ` ${portfolio.currency}`
              )}
            </h4>
          </div>
        ) : null}
        <br />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Dashboard
                  portfolios={this.state.userData.portfolios}
                  userData={this.state.userData}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={props => {
              return (
                <Dashboard
                  portfolios={this.state.userData.portfolios.slice(0, 3)}
                  userData={this.state.userData}
                  currencies={this.state.currencies}
                  changeSelectedCurrency={this.changeSelectedCurrency}
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
                  selectedCurrency={this.state.selectedCurrency}
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
                  loggedInUser={this.state.loggedInUser}
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
                  traceForChart={this.state.trace1}
                  selectedCurrency={this.state.selectedCurrency}
                  addOrUpdatePortfolio={this.addOrUpdatePortfolio}
                  changeSelectedCurrency={this.changeSelectedCurrency}
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
                  newPortfolio={this.newPortfolio}
                  {...props}
                />
              );
            }}
          />{" "}
          */}
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
