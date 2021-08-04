import React, { Component } from 'react';
import { Segment, Button, Icon, Divider, Card } from 'semantic-ui-react'
import '../../App.css';

class Content extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="footer">
                <Segment placeholder>
                <Card.Group centered>
                    <Card>
                        <Card.Content>
                            <Icon name='briefcase' size='huge' />
                            <Card.Header>Abe for Legal Experts & Analysts</Card.Header>
                            <h1>$25.00</h1>
                            <Card.Meta>
                                <span className='date'>Per Month</span>
                            </Card.Meta>
                            <Divider></Divider>
                            <Card.Header>Earn Revenue from Servicing Abe Users</Card.Header>
                            <Card.Description>
                                When an individual or business books a consultation or seeks other assistance from Abe, you can expect us to contact you (based upon the areas of specialty and/or jurisdiction(s) you have listed in your profile). If you accept the matter, Abe Legal pays you $150-$250, depending upon the service provided. Consultations booked through Abe Legal typically last 45 min - 1 hour.
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
                <br></br>
                <br></br>
                </Segment>
            </div>
        )
    }
}

export default Content