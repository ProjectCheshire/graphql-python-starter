import React, { Component, Fragment } from 'react'
import { Paper ,withStyles , Grid } from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import IconButton from '../components/IconButton';
import AppLogo from '../components/AppLogo';


/**
 * By making a more generic "description" vs "menu"
 * with only two cases, does this abstract too much!
 * because of the boolean nature of description vs menu
 * we have to create a new prop "Menu Select Name"
 */


const styles = theme => ({
    parentGrid: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    //   height:'60%',
      width:'auto',
      minWidth:'50vw',
    //   minWidth: '90vw',
      opacity:.9
    },
    paper:{
    //   height:'100%',
      width:'50%'
    //   minWidth:'50vw',
  
    //   maxWidth:'50vw',
    }
  });

const MenuSelect = (props) => {

    /**
    * this will take the props which will determine
    * which buttons will be display snf if the type is provided
    * in the object then will lead to a further menu of displays
    */
    const getIconsButtons = () => {

        const {icons ,menuSelectName } = props

        const iconButtons = icons.map(icon => {
            const name = icon.type === 'menu' ? icon.name : icon.id
            return  <IconButton 
                                     key={name}
                                     name={ `${name}` } 
                                     image={`../../public/${icon.id}.png`} 
                                     select = {() => selectIconButton(name, menuSelectName, icon.type)}
                                     />
        })
    
        return iconButtons;
    }
    /**
     * This method used the override field
     * to determine if this not a leaf end point to our calls
     * If not a leaf point we do not want to invoke our graphql database 
     * @param {string} name 
     * @param {string} menuSelectName 
     * @param {string} type 
     */
    const selectIconButton = (name, menuSelectName, type) => {
        console.log(`name ${name}`)
        console.log(`type ${type}`)

        switch (type) {
          case 'menu':
            props.history.push(`/${name}/`) 
            break;
          case 'faction':
            props.history.push(`/faction/${name}`)
            break;
          case 'hero':
            props.history.push(`/hero/${name}`)
            break;             
          default:
            break;
        }
        
    }

    const { classes } = props;

    return (
        <Fragment>
            <Star color="primary"/>
            <AppLogo />
            <Grid 
                className={classes.parentGrid}
                container 
                justify='center'
                alignItems="center"> 
                <Paper  className={classes.paper} elevation={5}>
                    <Grid container 
                        justify='center'
                        alignItems="center">
                        {getIconsButtons()}
                    </Grid>
                </Paper>
            </Grid>
        </Fragment>
  
        )

}



export default withStyles(styles)(MenuSelect);