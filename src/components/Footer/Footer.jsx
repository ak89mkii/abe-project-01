import React, { Component } from 'react';
import { Segment, Button, Icon, Divider, Card } from 'semantic-ui-react'
import '../../App.css';

class Footer extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="footer">
                <Segment placeholder>
                <Card.Group centered>
                    <Card>
                        <Card.Content>
                            <Card.Header>Community</Card.Header>
                            <Divider></Divider>
                            <Icon name='facebook official' size='big' />
                            <Icon name='instagram' size='big' />
                            <Icon name='twitter square' size='big' />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Contact Us</Card.Header>
                            <Divider></Divider>
                            <Icon name='phone' size='big' />
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Header>Info</Card.Header>
                            <Divider></Divider>
                            <Button primary>Go</Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
                <br></br>
                <br></br>
                <p>Abe © 2021</p>
                </Segment>
            </div>
        )
    }
}

export default Footer