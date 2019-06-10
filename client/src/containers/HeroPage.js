import React, { Component, Fragment } from 'react';
import {Grid, 
        Paper, 
        withStyles, 
        Typography} from '@material-ui/core';
import LeftGrid from './LeftGrid';
import RightGrid from './RightGrid';
import { Home } from '@material-ui/icons';

const styles = theme => {
    return({
        parentGrid: {
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            // height:'60vh',
            // maxWidth:'50vw',
            minWidth: '70vw',
            opacity:.9
          },
    })
}
class HeroPage extends Component{

    render(){

        const { classes, match } = this.props
        const { name } = match.params

        return(
            <Fragment>
                <Home color="primary"/>
                <Grid container
                      justify='center'
                      alignContent='center'
                      className={classes.parentGrid}>
                    <LeftGrid name={name} />
                    <RightGrid />
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(HeroPage)
