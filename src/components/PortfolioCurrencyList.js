import React from "react"
import PortfolioCurrencyCard from './PortfolioCurrencyCard'

export default class PortfolioCurrencyList extends React.Component{ 
    debugger   
    render() {
        return (
            <div>
                {this.props.portfolios.map(portfolio => {return portfolio.currencies.map((currency, index) => <PortfolioCurrencyCard key={index} currency={currency} /> )}) }
            </div>
        )
    }
}
