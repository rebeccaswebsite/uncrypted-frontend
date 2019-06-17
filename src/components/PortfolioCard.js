import React from 'react'

export default function PortfolioCard(props) {
    return (
        <div>
                <ul>
                    <li>Your {props.portfolio.currencies[0].ticker} to {props.portfolio.currencies[0].target} portfolio</li>
                </ul>
        </div>
    )
}
