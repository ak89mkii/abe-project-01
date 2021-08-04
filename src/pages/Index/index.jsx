import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Segment, Grid, Button} from 'semantic-ui-react'
import '../../App.css';
import Content from '../../components/Content/Content.jsx'

const Home = () => {
  
        return (
            <div>
                <br></br>
                <br></br>
                <Grid centered>
                    <Content />
                </Grid>
                <br></br>
                <br></br>
            </div>
        )
}

export default Home