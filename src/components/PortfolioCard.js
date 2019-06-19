import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PortfolioCard extends Component {
  debugger;
  constructor(props) {
    super(props);

    this.state = {
      selectedPortfolio: false
    };
  }

  handleClick = () => {
    this.setState({ selectedPortfolio: !this.state.selectedPortfolio });
  };

  render() {
    return (
      <div>
        <div class="col-sm">
          <div class="card" style={{ width: 18 + "em" }}>
            <div class="card-body">
              <h5 class="card-title">
                <Link className="nav-link" to={`/currencies/`}>
                  <h3>Currency: {this.props.portfolio.currency}</h3>
                </Link>
              </h5>
              <p class="card-text">
                <p>Quantity: {this.props.portfolio.quantity}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// add or delete a currency to portfolio, delete a portfolio
