import React, { Component } from "react";
import CurrencyCard from "./CurrencyCard";

export default class CurrencyList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.currencies.map((currency, index) => (
            <CurrencyCard
              key={index}
              currency={currency}
              changeSelectedCurrency={this.props.changeSelectedCurrency}
              selectedCurrency={this.props.selectedCurrency}
            />
          ))}
        </div>
      </div>
    );
  }
}
