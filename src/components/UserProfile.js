import React from 'react'

export default function UserProfile(props) {
    return (
        <div>
            <h2>Name: {props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            <img src={props.user.profile_picture} />
        </div>
    )
}
