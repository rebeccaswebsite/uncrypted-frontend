import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function MyPortfolioList(props) {
    return (
        <div>
            <p>Click on each portfolio for more information</p>
            {props.portfolios.map(portfolio => <PortfolioCard portfolio={portfolio}/>) }
        </div>
    )
}