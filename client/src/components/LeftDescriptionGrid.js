//Rename Later to more appropriate name
import React, {Component} from 'react';
import {Grid, 
    Paper, 
    withStyles, 
    Typography,
    Button } from '@material-ui/core';
import IconButton from '../components/IconButton'

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


class LeftDescriptionGrid extends Component{

    render() {

        const {classes, name } = this.props;

        return(
          <Grid 
            container
            justify='space-between'
            alignContent='center'
            direction='column'
            className={classes.leftGrid}>
              <Paper className={classes.paper}>
                <Grid>
                {/* <IconButton 
                                     key={name}
                                     name={ `${name}` } 
                                     image={`../../public/${icon.id}.png`} 
                                     select = {() => {}}
                                     /> */}
                  <Typography>
                      {`This is the ${name}`}
                  </Typography>
                </Grid>

              </Paper>
        </Grid>
        )
    }
}

export default withStyles(styles)(LeftDescriptionGrid)