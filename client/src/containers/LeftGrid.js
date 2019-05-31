//Rename Later to more appropriate name
import React, {Component} from 'react';
import {Grid, 
    Paper, 
    withStyles, 
    Typography,
    Button } from '@material-ui/core';


    const styles = theme => {
        return({
              leftGrid:{
                ...theme.mixins.gutters(),
                paddingTop: theme.spacing.unit * 2,
                paddingBottom: theme.spacing.unit * 2,
                margin:theme.spacing.unit * 2,
                // backgroundColor:'blue',
                maxWidth: '35vw',
              },
              paper:{
                height:'60vh',
                maxWidth:'auto',
              },
              leftPaper:{
                minWidth:'33vw',
                height:'70vh'
              },
              button: {
                margin: theme.spacing.unit,
                maxWidth: '10vw',
                alignSelf:'center'
              },
        })
    }


class LeftGrid extends Component{

    render() {

        const {classes, name } = this.props;

        return(
            <Grid 
            container
            justify='center'
            alignContent='center'
            direction='column'
            className={classes.leftGrid}>
          <Paper className={classes.leftPaper}>
              <Typography>
                  {`This is the ${name}`}
              </Typography>
          </Paper>
          <Button variant="contained" 
                  color="secondary" 
                  fullWidth={false}
                  className={classes.button}>
              Secondary
          </Button>
      </Grid>
        )
    }
}

export default withStyles(styles)(LeftGrid)