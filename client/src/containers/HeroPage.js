import React, { Component, Fragment } from 'react';
import {Grid, 
        Paper, 
        withStyles, 
        Typography} from '@material-ui/core';
import LeftGrid from './LeftGrid';
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
          leftGrid:{
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            margin:theme.spacing.unit * 2,
            backgroundColor:'blue',
            maxWidth: '35vw',
          },
          rightGrid:{
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            margin:theme.spacing.unit * 2,
            backgroundColor:'red',
            minWidth: '35vw',
          },
          paper:{
            height:'60vh',
            maxWidth:'auto',
          },
          leftPaper:{
            // backgroundColor:'blue',
            minWidth:'33vw',
            height:'70vh'
          },
          rightPaper:{
              minWidth:'30vw'
            // backgroundColor:'red',
          },
          button: {
            // ...theme.mixins.gutters(),
            margin: theme.spacing.unit,
            maxWidth: '10vw',
            alignSelf:'center'
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
                    <Grid className={classes.rightGrid}>
                        <Paper className={classes.rightPaper}>
                            <Typography>
                                {`This is the ${name}`}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(HeroPage)

