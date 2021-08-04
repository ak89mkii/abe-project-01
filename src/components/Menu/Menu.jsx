import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Segment, Menu } from 'semantic-ui-react'
import '../../App.css';
import Main from '../../img/01.png'
import Photos from '../../pages/Photos/photos.jsx'

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
                    <Menu secondary size='massive'>
                        <Link to="/"><img className="photo" src={Main} /></Link>
                        <Menu.Item />
                        <h4 className="title">Haircut Shop</h4>
                        <Menu.Item />
                        <Menu.Item
                        name='Services'
                        as={Link}
                        to="/services"
                        active={activeItem === 'Services'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Photos'
                        as={Link}
                        to="/photos"
                        active={activeItem === 'Photos'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='Booking'
                        as={Link}
                        to="/book"
                        active={activeItem === 'Book'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='About'
                        as={Link}
                        to="/about"
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                        />
                        
                    </Menu>
                </Segment>
            </div>
        )
    }
}

export default Activator