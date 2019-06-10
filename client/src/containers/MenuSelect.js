import React, { Component, Fragment } from 'react'
import { Paper ,withStyles , Grid } from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import IconButton from '../components/IconButton';
import AppLogo from '../components/AppLogo';

const styles = theme => ({
    parentGrid: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      maxHeight:'35vh',
      maxWidth:'50vw',
      minWidth: '90vw',
      opacity:.9
    },
    paper:{
      maxHeight:'35vh',
      minWidth:'50vw',
  
      maxWidth:'50vw',
    }
  });

const MenuSelect = (props) => {


    const getIconsButtons = () => {

        const {icons ,menuSelectName } = props

        const iconButtons = icons.map(icon => {
            console.log(JSON.stringify(icon))
            console.log(`Truthyness of it all ${!!icon.override}`)
            const name = icon.override ? icon.override : icon.id
            return  <IconButton 
                                     key={name}
                                     name={ `${name}` } 
                                     image={`../../public/${icon.id}.png`} 
                                     select = {() => selectIconButton(name, menuSelectName, !!icon.override)}
                                     />
        })
    
        return iconButtons;
    }

    const selectIconButton = (name, menuSelectName, isOverride) => {
        // event.preventDefault();
        console.log(`name var ${name}`)
        console.log(`menuSelectName var ${menuSelectName}`)
        console.log(`IsOverride var ${isOverride}`)
        // console.log(event,name)
        if(isOverride){
            props.history.push(`/${name}/`)
        }else{
            console.log('Dont get in here')
            props.history.push(`/${menuSelectName}/${name}`)
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