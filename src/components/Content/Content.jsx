import React, { Component } from 'react';
import { Segment, Header, Icon, Divider, Card, Grid, Button, Image } from 'semantic-ui-react'
import '../../App.css';
import Pay from '../../img/02.png'

const square = { width: 175, height: 175 }

class Content extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="footer">
                <Grid centered columns={2} stackable>
                    <Grid.Column>
                        <Segment placeholder color='orange'>
                        <Card.Group centered>
                            <Card size="huge" fluid>
                            <br></br>
                            <br></br>
                                <Card.Content>
                                <Grid centered>
                                    <Icon name='briefcase' size='massive'/>
                                    <h1 className="title">Abe for Legal Experts & Analysts</h1>
                                    <br></br>
                                    <br></br>
                                        <Segment centered color='orange' circular inverted style={square}>
                                            <Header as='h1' inverted>
                                                <br></br>
                                                $25.00
                                                <Header.Subheader>Monthly</Header.Subheader>
                                            </Header>
                                        </Segment>
                                    </Grid>
                                    <br></br>
                                    <Divider></Divider>
                                    <Card.Header>Earn Revenue from Servicing Abe Users</Card.Header>
                                    <Card.Description>
                                        When an individual or business books a consultation or seeks other assistance from Abe, you can expect us to contact you (based upon the areas of specialty and/or jurisdiction(s) you have listed in your profile). If you accept the matter, Abe Legal pays you $150-$250, depending upon the service provided. Consultations booked through Abe Legal typically last 45 min - 1 hour.
                                    </Card.Description>
                                    <Card.Header>Boost your Online, Social Media Profile</Card.Header>
                                    <Card.Description>
                                        Promote your practice to thousands of high and mid-income professionals and business owners. Upon signing up, you can count on Abe building you a profile for listing on our site. In addition, Abe creates your very own social media campaign that we market via email, Instagram, Twitter, and Facebook. In addition, after subscribing to Abe you are invited to appear as a guest legal analyst on our YouTube channel. Finally, as an Abe Counsel, you have the chance to further highlight your practice by submitting short articles for Abe's online legal blog.
                                    </Card.Description>
                                    <Card.Header>Convert Consultations to Longer Term Clients</Card.Header>
                                    <Card.Description>
                                        When an individual or business books a consultation or seeks other assistance from Abe, you can expect us to contact you (based upon the areas of specialty and/or jurisdiction(s) you have listed in your profile). If you accept the matter, Abe Legal pays you $150-$250, depending upon the service provided. Consultations booked through Abe Legal typically last 45 min - 1 hour.
                                    </Card.Description>
                                    <Card.Header>Continuing Education & Networking</Card.Header>
                                    <Card.Description>
                                    Enjoy content offering legal tips, research, and other references for surviving and even thriving in these trying times. Content can include cutting-edge legal topics, how to earn more money, and announcements on legal events and other opportunities.
                                    </Card.Description>
                                    <br></br>
                                    <Button color='orange' size='massive'>Subscribe</Button>
                                    <br></br>
                                    <Grid centered>
                                        <Image src={Pay} size='medium' />
                                    </Grid>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                        <br></br>
                        <br></br>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Content