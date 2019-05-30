import React from 'react'
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({

    typeFont:{
      color:'yellow',
    }
  });


const  AppLogo = (props)  => {

    const { classes } = props;

    return(
      <Typography className={classes.typeFont} 
                  component="h3"
                  style={{fontSize:'5rem', marginBottom:10}}>
              STAR WARS GRAPHqL
      </Typography>
    )
}

export default withStyles(styles)(AppLogo)
