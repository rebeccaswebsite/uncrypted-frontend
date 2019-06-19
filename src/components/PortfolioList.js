import React from "react";

export default function PortfolioList(props) {
  return (
    <div>
      {props.portfolios.map(portfolio => {
        return <p>:{portfolio.risk_profile}</p>;
      })}
    </div>
  );
}
