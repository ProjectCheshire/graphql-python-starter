import React from 'react';
import { withStyles , Typography, Grid } from '@material-ui/core';
import HeroSelect from './containers/HeroSelect';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxHeight:'35vh',
    maxWidth:'50vw',

    minWidth: '90vw',
    opacity:.9

  },
  card:{
    minWidth: '30vw',
    maxWidth: '60vw',
    maxHeight:'30vh',
    padding:10,
    opacity:1,
    margin:50,
    backgroundColor:'black'
  },
  typeFont:{
    color:'yellow',
  },
  paper:{
    maxHeight:'35vh',
    minWidth:'50vw',

    maxWidth:'50vw',
  }
});


const App = (props) => {
  const { classes } = props
  return (
    <Grid
        container
        // spacing={0}
        alignItems="center"
        justify="center"
        direction="column"
        style={{ minHeight: '100vh', 
                 backgroundImage:`url(../public/stars.jpg)`, 
                 backgroundRepeat:'no-repeat', 
                 backgroundSize:'cover',
                 margin:'0'
              }}>
      <Typography className={classes.typeFont} 
                  component="h3"
                  style={{fontSize:'5rem', marginBottom:10}}>
              STAR WARS GRAPHqL
      </Typography>
      <HeroSelect />
    </Grid>
  );
}

export default withStyles(styles)(App);
