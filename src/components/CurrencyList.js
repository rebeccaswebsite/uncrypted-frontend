import React, { Component } from 'react'
import CurrencyCard from './CurrencyCard'

export default class CurrencyList extends Component {
    render() {
        return (
            <div>
                {this.props.currencies.map((currency, index) => <CurrencyCard key={index} currency={currency}/>)}
            </div>
        )
    }
}
