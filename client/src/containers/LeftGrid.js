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
                border: 'yellow solid 1px ',
                // backgroundColor:'blue',
                maxWidth: '35vw',
              },
              innerGrid:{
                  height:'10vh'
              },
              topInnerGrid:{
                backgroundColor:'yellow',
                height:'50%'
              },
              bottomInnerGrid:{
                backgroundColor:'red',
                height:'30%'
              },
              paper:{
                minWidth:'33vw',
                height:'100%',
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
            justify='space-between'
            alignContent='center'
            direction='column'
            className={classes.leftGrid}>
          {/* <Paper className={classes.leftPaper}>
              <Typography>
                  {`This is the ${name}`}
              </Typography>
          </Paper> */}
          <Grid 
                container
                justify='center'
                alignContent='center'
                //Combine different classes into one
                className={`${classes.topInnerGrid} ${classes.innerGrid}` }>
              <Paper className={classes.paper}>
                <Typography>
                    {`This is the ${name}`}
                </Typography>
              </Paper>
          </Grid>
          <Grid container
                justify='center'
                alignContent='center'
                className={`${classes.bottomInnerGrid} ${classes.innerGrid}`}>
              <Paper className={classes.paper}>
                <Typography>
                    {`This is what the end really is ${name}`}
                </Typography>
              </Paper>
          </Grid>
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