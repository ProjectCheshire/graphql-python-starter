import React from 'react';
import { withStyles , Typography, Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'
import AppLogo from './components/AppLogo';
import HeroSelect from './containers/HeroSelect';
import HeroPage from './containers/HeroPage';

const styles = theme => ({
  backdrop: {
    minHeight:'100vh',
    minWidth: '100vw',
    backgroundImage:`url(../public/stars.jpg)`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:'cover',
    margin:'0'

  }
});


const App = (props) => {
  const { classes } = props

  return (
    <Grid
        container
        className={classes.backdrop}
        alignItems="center"
        justify="center"
        direction="column"
    >
      <Switch>
            <Route exact path="/hero/:name" component={HeroPage} />
            <Route exact path="/" component={HeroSelect} />
        </Switch>
    </Grid>
  );
}

export default withStyles(styles)(App);
