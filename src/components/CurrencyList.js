import React, { Component } from "react";
import CurrencyCard from "./CurrencyCard";

export default class CurrencyList extends Component {
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
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
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
      </div>
    );
  }
}
