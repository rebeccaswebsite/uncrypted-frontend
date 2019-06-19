import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyCard(props) {
  return (
    <div className="col-md-4">
      <div
        className="card"
        style={{ width: 18 + "em" }}
        onClick={() => props.changeSelectedCurrency(props.currency)}>
        <div className="card-body">
          <h5 className="card-title">
            <Link className="nav-link" to={`/currencies/${props.currency.id}`}>
              <h3>Currency: {props.currency.ticker}</h3>
            </Link>
          </h5>
          <div className="card-text">
            <p>
              Price: {props.currency.target} {props.currency.price}
            </p>
            <p>Volume: {props.currency.volume}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
