import React, { Component } from 'react'
import { Paper ,withStyles , Grid } from '@material-ui/core';
import CharacterButton from '../components/CharacterButton';


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

class HeroSelect extends Component {

    state={
        heroes:[
            'Chewy',
            'Leia',
            'Luke',
            'HanSolo',
            'MillFalcon',
            'DarthVader',
            'BobaFett',
            'StormTrooper',
            'R2-D2',
            'DeathStar'
        ]
    }

    selectCharacter = (event, name) => {
        event.preventDefault();
        console.log(event,name)
        this.props.history.push(`/hero/${name}`)
    }

    getHeroes = () => {
        const heroes = this.state.heroes.map(hero => {
            console.log('[Hero]',hero)
            return  <CharacterButton 
                                     key={hero}
                                     name={ `${hero}` } 
                                     image={`../../public/${hero}.png`} 
                                     select = {this.selectCharacter}/>
        })

        return heroes;
    }

    
    render() {

        const { classes } = this.props;
        return (
            <Grid 
            className={classes.parentGrid}
            container 
            justify='center'
            alignItems="center"> 
                <Paper  className={classes.paper} elevation={5}>
                <Grid container 
                    justify='center'
                    alignItems="center">
                    {this.getHeroes()}
                </Grid>
                </Paper>
        </Grid>
        )
    }
}



export default withStyles(styles)(HeroSelect);