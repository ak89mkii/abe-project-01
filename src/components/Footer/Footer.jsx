import React, { Component } from 'react';
import { Segment, Message, Icon, Divider, Grid, Container } from 'semantic-ui-react'
import '../../App.css';

class Footer extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="footer">
            <Divider></Divider>
                <Grid centered columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <h1>Sitemap</h1>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name='facebook official' size='big' />
                            <Icon name='linkedin' size='big' />
                            <Icon name='twitter square' size='big' />
                            <Icon name='whatsapp' size='big' />
                            <Icon name='mail' size='big' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment placeholder>
                <br></br>
                <br></br>
                <p>©2021 Abe Legal, Inc. All rights reserved. </p>
                </Segment>
            </div>
        )
    }
}

export default Footer