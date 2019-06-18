import React, { Component } from 'react'
import PortfolioCard from './PortfolioCard'

export default class MyPortfolioList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             risk_profile: ''
        }
    }
    
      handleChange = event => {
        this.setState({
          risk_profile: event.target.value,
        });
      }

      handleSubmit = event => {
        event.preventDefault()
        const num = parseInt(this.state.risk_profile)
        this.props.newPortfolio(num)
      }
     
      render() {
        return (
         <div>
            <p>Click on each portfolio for more information</p>
            {this.props.portfolios.map(portfolio => <PortfolioCard portfolio={portfolio}/>) }

            <p>To add a new portfolio, enter the risk factor your portfolio will have below (0-10)</p>
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                type="text"
                risk_profile={this.state.risk_profile}
                onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </div>
        )
      }
}
