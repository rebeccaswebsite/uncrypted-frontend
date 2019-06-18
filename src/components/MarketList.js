import React, { Component } from "react";
import MarketCard from "./MarketCard";

export default class MarketList extends Component {
  componentDidMount() {
    if (!this.props.loggedInUser.name) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        {this.props.markets.map((market, index) => (
          <MarketCard
            key={index}
            market={market}
            changeSelectedMarket={this.props.changeSelectedMarket}
            selectedMarket={this.props.selectedMarket}
          />
        ))}
      </div>
    );
  }
}
