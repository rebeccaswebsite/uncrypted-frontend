import React from 'react'

export default function Market(props) {
    return (
        <div>
            <h3>{props.market.name}</h3>
            {props.market.currency_markets.map(currency_market =>  
                <div>
                    <p>Price: {currency_market.price}</p>
                    <p>Volume: {currency_market.volume}</p>
                    <p>Currency: {currency_market.currency.ticker}</p>
                </div>
                )}
        </div>
    )
}
