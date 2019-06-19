import React, { Component } from "react";
import MarketCard from "./MarketCard";

export default class MarketList extends Component {
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
            {this.props.markets.map((market, index) => (
              <MarketCard
                key={index}
                market={market}
                changeSelectedMarket={this.props.changeSelectedMarket}
                selectedMarket={this.props.selectedMarket}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
