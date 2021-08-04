import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react'
import '../../App.css';
import Main from '../../img/01.png'

// Revisit: Need to figure out "fetch" for Flask backend.
class Activator extends Component {
    state = {
        activeItem: undefined
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Segment>
                    <img className="photo" src={Main} />
                </Segment>
            </div>
        )
    }
}

export default Activator