import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './WelcomeBoard.css'

export default class WelcomeBoard extends Component {
    render() {
        return (
            <div className="viewWelcomeBoard">
                <span className="textTitleWelcome">{`Bienvenido, ${
                    this.props.currentUserNickname
                    }`}</span>
                <img
                    className="avatarWelcome"
                    src={this.props.currentUserAvatar}
                    alt="icon avatar"
                />
            </div>
        )
    }
}
