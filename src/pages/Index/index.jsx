import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Segment, Grid, Button} from 'semantic-ui-react'
import '../../App.css';
import Menu from '../../components/Menu/Menu.jsx'

const Home = () => {
  
        return (
            <div>
                    <Grid>
                        <Grid.Column textAlign='center'>
                            <h1 className='header'>Abe for Legal Experts & Analysts - $25</h1>
                            <Link to="/book">
                            <Button className='start' color='blue'>
                                Subscribe
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