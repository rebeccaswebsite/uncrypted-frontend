import React from 'react'

export default function CurrencyMarket(props) {
    return (
        <div>
            <h5>Market: {props.currency_market.market.name}</h5>
            <p>Price: {props.currency_market.price}</p>
            <p>Volume: {props.currency_market.volume}</p>
        </div>
    )
}
