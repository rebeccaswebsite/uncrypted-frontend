import React, { Component } from "react";
import PortfolioCurrencyList from "./PortfolioCurrencyList";
import PortfolioList from "./PortfolioList";
import MyPortfolioList from "./MyPortfolioList";
import CurrencyList from "./CurrencyList";

export default class Dashboard extends Component {
  // componentDidMount() {
  //   if (this.props.userData) {
  //     this.props.history.push("/login");
  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <h1>Dashboard</h1>
          <br />
          <h2>My Top Portfolios</h2>
          <MyPortfolioList portfolios={this.props.portfolios} />
          <h2>Live Cryptocurrency Values</h2>
          <CurrencyList currencies={this.props.currencies} />
        </div>
      </div>
    );
  }
}
