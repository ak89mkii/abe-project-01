import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Segment, Grid, Button} from 'semantic-ui-react'
import '../../App.css';
import Menu from '../../components/Menu/Menu.jsx'
import Hair from '../../img/01.jpg'

const Home = () => {
  
        return (
            <div>
                <Menu />
                    <Grid>
                        <Grid.Column textAlign='center'>
                            <h1 className='header'>A haircut for everyone...EVERYONE</h1>
                            <Link to="/book">
                            <Button className='start' color='blue'>
                                Book a Service
                            </Button>
                            </Link>
                            <div className="frame">
                                {/* <img className="photo02" src={Hair} /> */}
                            </div>
                        </Grid.Column>
                    </Grid>
                    <br></br>
                    <br></br>
            </div>
        )
}

export default Home