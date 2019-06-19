import React from "react";
import { Link } from "react-router-dom";

export default function MarketCard(props) {
  return (
    <div class="col-sm">
      <div
        class="card"
        style={{ width: 18 + "em" }}
        onClick={() => props.changeSelectedMarket(props.market)}>
        <div class="card-body">
          <h5 class="card-title">
            <Link className="nav-link" to={`/markets/${props.market.id}`}>
              <h3>Market: {props.market.name}</h3>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
