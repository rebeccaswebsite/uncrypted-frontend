import React from "react";

export default function PortfolioList(props) {
  //   debugger;
  return (
    <div>
      {props.portfolios.map(portfolio => {
        return <p>Risk Profile:{portfolio.risk_profile}</p>;
      })}
    </div>
  );
}
