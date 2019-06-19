import React, { Component } from "react";
import PortfolioCurrencyList from "./PortfolioCurrencyList";
import PortfolioList from "./PortfolioList";
import MyPortfolioList from "./MyPortfolioList";
import CurrencyList from "./CurrencyList";

export default class Dashboard extends Component {
  componentDidMount() {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === "undefined"
    ) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <br />
          <h2>My Top Portfolios</h2>
          <MyPortfolioList portfolios={this.props.portfolios} />
          <h2>Live Cryptocurrency Prices</h2>
          <CurrencyList
            changeSelectedCurrency={this.props.changeSelectedCurrency}
            currencies={this.props.currencies}
          />
        </div>
      </div>
    );
  }
}
