import React, { Component } from 'react'

export default class UserProfile extends Component {
    handleClick = () => {
        this.props.deleteUser(this.props.user)
    }
    debugger
    render() {
        return (
            <div>
                <h2>Name: {this.props.user.name}</h2>
                <p>Email: {this.props.user.email}</p>
                <img src={this.props.user.profile_picture} />
                <button onClick={this.handleClick}>Delete Account</button>
            </div>
        )
    }
}
