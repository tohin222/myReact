import React, { Component } from 'react'
import PropsTypes from "prop-types";
export default class Player extends Component {
    render() {
        const {name,age,goal} = this.props.player
        return (
            <div>
                <td>{name}</td>
                <td>{age}</td>
                <td>{goal}</td>
            </div>
        )
    }
}
Player.propsTypes = {
    player: PropsTypes.object.isRequired
  };