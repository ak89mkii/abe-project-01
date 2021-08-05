import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Divider, Menu, Dropdown, Grid } from 'semantic-ui-react'
import '../../App.css';
import Main from '../../img/01.png'

class Activator extends Component {
    state = {
        activeItem: undefined
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div className="color">
                <br></br>   
                <Grid centered columns={2}>
                    <Grid.Row>
                        <Grid.Column>           
                            <img className="photo" src={Main} />
                        </Grid.Column> 
                        <Grid.Column>        
                            <Menu secondary>
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
                                active={activeItem === 'messages'}
                                onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                name='about us'
                                active={activeItem === 'friends'}
                                onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                name='contact'
                                active={activeItem === 'messages'}
                                onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                name='home'
                                active={activeItem === 'friends'}
                                onClick={this.handleItemClick}
                                />

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