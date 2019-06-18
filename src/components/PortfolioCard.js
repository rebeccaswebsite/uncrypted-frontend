import React, { Component } from 'react'

export default class PortfolioCard extends Component {
    debugger
    constructor(props) {
        super(props)

        this.state = {
            selectedPortfolio: false,
        }
    }

    handleClick = () =>{
        this.setState({selectedPortfolio: !(this.state.selectedPortfolio)})
    }
  
    render() {
        return (
            <div>
                 <ul>
                    <li onClick={this.handleClick}>Your {this.props.portfolio.currencies[0].ticker} to {this.props.portfolio.currencies[0].target} portfolio</li>
                    {this.state.selectedPortfolio
                    ? <div>
                        <p>Overall price: {this.props.portfolio.currencies[0].price}</p>
                        <p>Overall volume: {this.props.portfolio.currencies[0].volume}</p>
                        <p>Overall change: {this.props.portfolio.currencies[0].change}</p>
                        {this.props.portfolio.currencies[0].markets.map(market => 
                            <div> 
                                <p>Market name: {market.name}</p>
                                {market.currency_markets.map(currency_market => 
                                    <div> 
                                        <p>Price: {currency_market.price}</p>
                                        <p>Volume: {currency_market.volume}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    : null}
                </ul>
            </div>
        )
    }
}
