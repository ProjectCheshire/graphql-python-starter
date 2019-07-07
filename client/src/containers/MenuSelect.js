import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Paper ,withStyles , Grid } from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import IconButton from '../components/IconButton';
import AppLogo from '../components/AppLogo';
import {setIcon } from '../actions';


const styles = theme => ({
    parentGrid: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      width:'auto',
      minWidth:'50vw',
      opacity:.9
    },
    paper:{
      width:'50%'
    }
  });

const MenuSelect = (props) => {

  const {icons, setIcon, history, classes} = props
    /**
    * this will take the props which will determine
    * which buttons will be display snf if the type is provided
    * in the object then will lead to a further menu of displays
    */
    const getIconsButtons = () => {

        const iconButtons = icons.map(icon => {
            const name = icon.type === 'menu' ? icon.name : icon.id
            return  <IconButton 
                        key={name}
                        name={ `${name}` } 
                        image={`../../public/${icon.id}.png`} 
                        select = {() => selectIconButton(name, icon.type, icon)}
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
    const selectIconButton = (name, type, icon) => {
        setIcon(icon)
        switch (type) {
          case 'menu':
            history.push(`/${name}/`) 
            break;
          case 'faction':
            history.push(`/faction/${name}`)
            break;
          case 'hero':
            history.push(`/hero/${name}`)
            break;             
          default:
            break;
        }
    }

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

const mapStateToProps = (state) =>  ({stateIcon: state.icon})



const mapDispatchToProps = (dispatch) => ({setIcon: (icon) => dispatch(setIcon(icon))})



export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MenuSelect));