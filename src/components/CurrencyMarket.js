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

const addCurrencyToPortfolio = currency => {
  console.log(`I would like to buy ${currency}`);
};

export default function CurrencyMarket(props) {
  const classes = useStyles();
  return (
    <div class="col-sm">
      <div class="card" style={{ width: 18 + "em" }}>
        <div class="card-body">
          <h5 class="card-title">
            <h3>Market: {props.currency_market.market.name}</h3>
          </h5>
          <p class="card-text">
            <p>Price: {props.currency_market.price}</p>
            <p>Volume: {props.currency_market.volume}</p>
            <Button
              onClick={() =>
                addCurrencyToPortfolio(props.selectedCurrency.ticker)
              }
              variant="contained"
              className={classes.button}>
              {`Buy ${props.selectedCurrency.ticker} from this market`}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
