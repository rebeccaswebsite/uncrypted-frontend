import React from "react";
import PortfolioCurrencyList from "./PortfolioCurrencyList";
import PortfolioList from "./PortfolioList";

export default function Dashboard(props) {
  // debugger
  return (
    <div>
      <PortfolioCurrencyList portfolios={props.portfolios} />
      <PortfolioList portfolios={props.portfolios} />
    </div>
  );
}
