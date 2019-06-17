import React from 'react'

export default function CurrencyCard(props) {
    return (
        <div>
            <h3>Currency: {props.currency.ticker} to {props.currency.target}</h3>
            <p>Price: {props.currency.price}</p>
            <p>Volume: {props.currency.volume}</p>
        </div>
    )
}
