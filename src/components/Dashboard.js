import React, { Component } from "react";
import PortfolioCurrencyList from "./PortfolioCurrencyList";
import PortfolioList from "./PortfolioList";

export default class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.loggedInUser.name) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Welcome to Uncrypted</h1>
          <PortfolioCurrencyList portfolios={this.props.portfolios} />
          <PortfolioList portfolios={this.props.portfolios} />
        </div>
      </div>
    );
  }
}
