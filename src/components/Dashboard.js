import React from 'react'
import CurrencyList from './CurrencyList'
import PortfolioList from './PortfolioList'


export default function Dashboard(props) {
    // debugger
    return (
        <div>
            <CurrencyList portfolios={props.portfolios} />
            <PortfolioList />
        </div>
    )
}
