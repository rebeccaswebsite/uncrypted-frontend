import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function MyPortfolioList(props) {
    return (
        <div>
            {props.portfolios.map(portfolio => <PortfolioCard portfolio={portfolio}/>) }
        </div>
    )
}