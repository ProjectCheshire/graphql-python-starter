import React from 'react';
import { Paper ,withStyles , Typography, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


const App = (props) => {
  const { classes } = props
  return (
    <Grid
        container
        // spacing={0}
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', backgroundImage:`url(../public/stars.jpg)`, backgroundRepeat:'no-repeat', backgroundSize:'cover' ,margin:'0'}}>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          PlaceHolder
        </Typography>
        <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(App);
