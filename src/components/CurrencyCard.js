import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyCard(props) {
  return (
    <div class="col-sm">
      <div
        class="card"
        style={{ width: 18 + "em" }}
        onClick={() => props.changeSelectedCurrency(props.currency)}>
        <div class="card-body">
          <h5 class="card-title">
            <Link className="nav-link" to={`/currencies/${props.currency.id}`}>
              <h3>Currency: {props.currency.ticker}</h3>
            </Link>
          </h5>
          <p class="card-text">
            <p>
              Price: {props.currency.target} {props.currency.price}
            </p>
            <p>Volume: {props.currency.volume}</p>
          </p>
        </div>
      </div>
    </div>
  );
}
