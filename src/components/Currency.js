import React from 'react'
import CurrencyMarket from './CurrencyMarket'

export default function Currency(props) {
    return (
        <div>
             <h3>{props.selectedCurrency.ticker} to {props.selectedCurrency.target}</h3>
             <ul>
                 <li>
                    Price: {props.selectedCurrency.price}
                 </li>
                 <li>
                    Volume: {props.selectedCurrency.volume}
                 </li>
                 <li>
                    Change: {props.selectedCurrency.change}
                 </li>
             </ul>
             <h4>{props.selectedCurrency.ticker} is traded on the following markets:</h4>
             {props.selectedCurrency.currency_markets.map(currency_market => <CurrencyMarket currency_market={currency_market} />)}
        </div>
    )
}
