import React, { Component, Fragment } from 'react';
import {Grid, Paper, withStyles, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const styles = theme => {
    return({
        parentGrid: {
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            height:'60vh',
            maxWidth:'50vw',
            minWidth: '70vw',
            opacity:.9
          },
          paper:{
            // maxHeight:'auto',
            height:'60vh',
            // minWidth:'50vw',
        
            maxWidth:'auto',
          }
    })
}

class HeroPage extends Component{

    render(){

        const { classes, match } = this.props
        const { name } = match.params

        return(
            <Fragment>
                <Home color="primary"/>
                <Grid className={classes.parentGrid}>
                <Paper className={classes.paper}>
                    <Typography>
                        ` This is the ${name}`
                    </Typography>
                </Paper> 
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(HeroPage)