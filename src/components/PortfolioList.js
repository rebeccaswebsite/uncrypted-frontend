import React from "react";

export default function PortfolioList(props) {
  return (
    <div>
      {props.portfolios.map((portfolio, index) => {
        return <p>Risk Profile:{portfolio.risk_profile}</p>;
      })}
    </div>
  );
}
