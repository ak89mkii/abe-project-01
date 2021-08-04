import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Image, Grid, Button} from 'semantic-ui-react'
import '../../App.css';
import Content from '../../components/Content/Content.jsx'

const Home = () => {
  
        return (
            <div>
                <br></br>
                <br></br>
                <Grid centered>
                    <Image size='massive'rounded fluid ><img src='https://www.legalreader.com/wp-content/uploads/2020/03/Screen-Shot-2020-03-11-at-2.52.07-PM.png' /></Image>
                </Grid>
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