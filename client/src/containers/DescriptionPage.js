import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import LeftDescriptionGrid from '../components/LeftDescriptionGrid'
import { factionIcons, heroMenuIcons} from '../constants';

export default class DescriptionPage extends Component {


    render() {

        const { name } = this.props;



        return (
            <Grid container 
                  direction='row'
                  justify='center'
                  alignContent='center'
                  >
                <LeftDescriptionGrid />
                <LeftDescriptionGrid />
            </Grid>
        )
    }
}
