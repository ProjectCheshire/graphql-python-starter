import React from 'react';
import { withStyles , Typography, Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom'
import MenuSelect from './containers/MenuSelect';
import HeroPage from './containers/HeroPage';
import { mainMenuIcons, heroMenuIcons } from './constants'
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
            <Route exact path="/hero/:name" render={ (props) => <HeroPage {...props}/>}/>
            <Route exact path="/hero/" render={ (props) => <MenuSelect {...props}  icons={heroMenuIcons} menuSelectName={'hero'}/>} />
            <Route exact path="/" render={ (props) => <MenuSelect {...props}  icons={mainMenuIcons} menuSelectName={'sillyTest'}/>}/>
        </Switch>
    </Grid>
  );
}

export default withStyles(styles)(App);
