import React from 'react';
import { Paper ,withStyles , Typography, Grid, Card } from '@material-ui/core';
import TestCard from './components/TestCard';

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
      <Grid 
            className={classes.root}
            container 
            justify='center'
            alignItems="center"> 
        <Paper  className={classes.paper} elevation={5}>
          <Grid container 
            justify='center'
            alignItems="center">
            <TestCard name={ 'Chewie' } image={'../../public/Chewy.png'} />
            <TestCard name={ 'Leia' } image={'../../public/Leia.png'} />
            <TestCard name={ 'Luke' } image={'../../public/Luke.png'} />
            {/* <TestCard name={ 'c3po' } image={'../../public/c3po.png'} /> */}
            <TestCard name={ 'HanSolo' } image={'../../public/HanSolo.png'} />
            <TestCard name={ 'MillFalcon' } image={'../../public/MillFalcon.png'} />

            <TestCard name={ 'DarthVader' } image={'../../public/DarthVader.png'} />
            <TestCard name={ 'BobaFett' } image={'../../public/BobaFett.png'} />
            <TestCard name={ 'StormTrooper' } image={'../../public/StormTrooper.png'} />
            <TestCard name={ 'R2-D2' } image={'../../public/R2-D2.png'} />
            <TestCard name={ 'DeathStar' } image={'../../public/DeathStar.png'} />

          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
