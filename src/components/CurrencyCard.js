import React from 'react'
import { Link } from "react-router-dom";

export default function CurrencyCard(props) {
    return (
        <div  onClick={() => props.changeSelectedCurrency(props.currency)}>
            <Link className="nav-link" to={`/currencies/${props.currency.id}`}>
                <h3>Currency: {props.currency.ticker} to {props.currency.target}</h3>
            </Link>
                <p>Price: {props.currency.price}</p>
                <p>Volume: {props.currency.volume}</p>
        </div>
    )
}
