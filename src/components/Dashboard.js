import React from "react";
import PortfolioCurrencyList from "./PortfolioCurrencyList";
import PortfolioList from "./PortfolioList";

export default function Dashboard(props) {
  return (
    <div>
    <h1>Welcome to Uncrypted</h1>
      <PortfolioCurrencyList portfolios={props.portfolios} />
      <PortfolioList portfolios={props.portfolios} />
    </div>
  );
}
