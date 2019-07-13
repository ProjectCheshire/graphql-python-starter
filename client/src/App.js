import React from 'react';
import { Provider } from 'react-redux';
import { withStyles, Grid, createStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import store  from './store';
import MenuSelect from './containers/MenuSelect';
import HeroPage from './containers/HeroPage';
import DescriptionPage from './containers/DescriptionPage';
import { mainMenuIcons, heroMenuIcons, factionIcons } from './constants';


const styles = theme => createStyles({
  backdrop: {
    minWidth: '100vw',
    minHeight:'100vh',
    // maxHeight:'100vh',
    backgroundColor:'black',
    // backgroundImage:`url(../public/stars.jpg)`,
    // backgroundRepeat:'no-repeat', 
    // backgroundSize:'cover',
    margin:'0'

  }
});


/**
 * The app is a glorified container for the 
 * routes in our process, the icons drive a 
 * large part of our process, which is from a dedicated consants files for these
 * meta objects
 * @param {*} props 
 */
const App = (props) => {


  const { classes } = props;

  return (
      <Grid
          container
          className={classes.backdrop}
          alignItems="center"
          justify="center"
          direction="column"
      >
        <Provider store={store}>
          <Switch>
                <Route exact 
                       path="/hero/:name" 
                       render={ (props) => <HeroPage {...props}/>}
                />
                <Route exact 
                       path="/hero/" 
                       render={ (props) => <MenuSelect {...props}  
                                            icons={heroMenuIcons}
                                            menuHelperText={"Please select a Hero you would like to know more about"}/>}
                      
                />
                <Route exact 
                       path="/faction/:name" 
                       render={ (props) => <DescriptionPage {...props} />} 
                />
                <Route exact 
                       path="/faction/" 
                       render={ (props) => <MenuSelect {...props}  
                                            icons={factionIcons}
                                            menuHelperText={"Please select a Faction you would like to know more about"}/>}

                />
                <Route exact 
                       path="/" 
                       render={ (props) => <MenuSelect {...props}  
                                            icons={mainMenuIcons}
                                            menuHelperText={"Please select an icon to explore the Star Wars™ universe!"}/>}
                />
            </Switch>
        </Provider>

      </Grid>
  );
}

export default withStyles(styles)(App);
