import React, { Component } from "react";
import MarketCard from "./MarketCard";

export default class MarketList extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
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
    );
  }
}
