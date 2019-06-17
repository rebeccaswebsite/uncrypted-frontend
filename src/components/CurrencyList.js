import React from "react"
import CurrencyCard from './CurrencyCard.js'

export default class CurrencyList extends React.Component{    
    render() {
        return (
            <div>
                {this.props.portfolios.map(portfolio => {return portfolio.currencies.map((currency, index) => <CurrencyCard key={index} currency={currency} /> )}) }
            </div>
        )
    }
}
