import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const addCurrencyToPortfolio = (currency, buyingPrice, addToPortfolio) => {
  const url = "http://localhost:3000/currency_portfolios";
  const options = {
    method: "POST",
    headers: {
      Authorisation: localStorage.token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ currency: currency, buyingPrice: buyingPrice })
  };

  return fetch(url, options)
    .then(resp => resp.json())
    .then(resp => addToPortfolio(resp));
};

export default function CurrencyMarket(props) {
  const classes = useStyles();
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: 18 + "em" }}>
        <div className="card-body">
          <h5 className="card-title">
            <h3>Market: {props.currency_market.market.name}</h3>
          </h5>
          <div className="card-text">
            <p>Price: {props.currency_market.price}</p>
            <p>Volume: {props.currency_market.volume}</p>
            <Button
              onClick={() =>
                addCurrencyToPortfolio(
                  props.selectedCurrency,
                  props.currency_market.price,
                  props.addOrUpdatePortfolio
                )
              }
              variant="contained"
              className={classes.button}>
              {`Buy ${props.selectedCurrency.ticker} from this market`}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
