import React from 'react'

export default function CurrencyCard(props) {
    return (
        <div>
            <h3>Ticker: {props.currency.ticker}</h3>
            <p>Price: {props.currency.price} </p>
            <p>Change: {props.currency.change} </p>
        </div>
    )
}
