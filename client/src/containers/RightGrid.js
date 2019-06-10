//Rename Later to more appropriate name
import React, {Component} from 'react';
import {
    Grid, 
    Paper, 
    withStyles, 
    Typography,
    Button } from '@material-ui/core';


    const styles = theme => {
        return({
            rightGrid:{
              ...theme.mixins.gutters(),
              paddingTop: theme.spacing.unit * 2,
              paddingBottom: theme.spacing.unit * 2,
              margin:theme.spacing.unit * 2,
              // backgroundColor:'red',
              maxWidth: '35vw',
            },
            rightPaper:{
              minWidth:'33vw',
              height:'70vh'
            },
            button: {
              margin: theme.spacing.unit,
              maxWidth: '10vw',
              alignSelf:'center',
              display:'hidden'
            },
        })
    }


class RightGrid extends Component{

    render() {

        const { classes } = this.props;

        return(
            <Grid 
            container
            justify='center'
            alignContent='center'
            direction='column'
            className={classes.rightGrid}>
          <Paper className={classes.rightPaper}>
              <Typography>
                  {/* {`This is the ${name}`} */}
                  {'THis is the right side of the application'}
              </Typography>
          </Paper>
          <Button variant="contained" 
                  color="secondary" 
                  fullWidth={false}
                  disabled={true}
                  className={classes.button}>
              Secondary
          </Button>
      </Grid>
        )
    }
}

export default withStyles(styles)(RightGrid)