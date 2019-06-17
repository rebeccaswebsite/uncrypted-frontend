import React from 'react'
import MarketCard from './MarketCard'

export default function MarketList(props) {
    return (
        <div>
            {props.markets.map((market, index) => <MarketCard key={index} market={market}/> )}
        </div>
    )
}
