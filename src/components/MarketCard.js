import React from "react";
import { Link } from "react-router-dom";

export default function MarketCard(props) {
  return (
    <div onClick={() => props.changeSelectedMarket(props.market)}>
      <Link className="nav-link" to={`/markets/${props.market.id}`}>
        <p>{props.market.name}</p>
      </Link>
    </div>
  );
}
