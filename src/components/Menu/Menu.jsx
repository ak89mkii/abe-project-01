import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Divider, Menu, Dropdown, Grid, TransitionablePortal, Segment, Header, Icon } from 'semantic-ui-react'
import '../../App.css';
import Main from '../../img/01.png'

class Activator extends Component {
    state = {
        open: false
    }

    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })
    
    render() {
        const { activeItem } = this.state
        const { open } = this.state
        return (
            <div className="color">
                <br></br>   
                <Grid centered columns={2}>
                    <Grid.Row>
                        <Grid.Column>           
                            <img className="photo" src={Main} />
                        </Grid.Column> 
                        <Grid.Column>        
                            <Menu secondary size='massive'>
                                {/* Services */}
                                <Dropdown item text='Services'>
                                    <Dropdown.Menu>
                                        {/* For Individuals & Families  */}
                                        <Dropdown.Item>
                                            <Dropdown text='For Individuals & Families'>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        Will & Estate Services
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <Dropdown text='For Businesses'>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        Launch Business or Nonprofit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        Business Owner Will & Succession
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                       Grant & Loan Help
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Dropdown.Item>
                                        <Dropdown.Item>For Lawyers</Dropdown.Item>
                                        <Dropdown.Item>For Employers</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Menu.Item
                                name='team'
                                active={activeItem === 'team'}
                                onClick={this.handleClick}
                                />
                                <Menu.Item
                                name='about us'
                                active={activeItem === 'about us'}
                                onClick={this.handleClick}
                                />
                                <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={this.handleClick}
                                />
                                <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleClick}
                                />
                                {/* Menu: Portal */}
                                <TransitionablePortal onClose={this.handleClose} open={open}>
                                    <Segment
                                        inverted    
                                        style={{ left: '60%', position: 'fixed', top: '7%', zIndex: 1000, color:'black'}}
                                    >
                                        <Header>
                                            <Icon inverted loading name='circle notch' />
                                            Will go to respective section.
                                        </Header>
                                    </Segment>
                                </TransitionablePortal>
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider></Divider>
            </div>
        )
    }
}

export default Activator