import React, { Component } from "react";
import CurrencyMarket from "./CurrencyMarket";
export default class Currency extends Component {
  render() {
    const data = this.props.traceForChart;
    return (
      <div>
        <h3>
          {this.props.selectedCurrency.ticker} to{" "}
          {this.props.selectedCurrency.target}
        </h3>
        <ul>
          <li>Average Price: {this.props.selectedCurrency.price}</li>
          <li>Average Volume: {this.props.selectedCurrency.volume}</li>
          <li>Average Change: {this.props.selectedCurrency.change}</li>
        </ul>
        <h4>
          {this.props.selectedCurrency.ticker} is traded on the following
          markets:
        </h4>
        <div className="py-5">
          <div className="container">
            <div className="row hidden-md-up" />
            {this.props.selectedCurrency.currency_markets.map(
              currency_market => (
                <CurrencyMarket
                  addOrUpdatePortfolio={this.props.addOrUpdatePortfolio}
                  selectedCurrency={this.props.selectedCurrency}
                  currency_market={currency_market}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
