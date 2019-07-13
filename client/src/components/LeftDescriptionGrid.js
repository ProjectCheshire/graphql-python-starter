//Rename Later to more appropriate name
import React, {Component} from 'react';
import {Grid, 
    Paper, 
    withStyles, 
    Typography 
  } from '@material-ui/core';
import IconButton from '../components/IconButton'

const styles = theme => {
    return({
          leftGrid:{
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            border: 'yellow solid 1px ',
            width: '25%',
          },
          button: {
            margin: theme.spacing.unit,
            maxWidth: '10vw',
            alignSelf:'center'
          },
          typographyGrid:{
            // marginRight: theme.spacing.unit * 2,
            
          },
          descriptionGrid:{
            // marginRight: theme.spacing.unit * 2,
            padding:theme.spacing.unit * 2
          }

    })
}


class LeftDescriptionGrid extends Component{

    render() {

        const {classes, name, description } = this.props;
        console.log(`[LEFT DESCRIPTION GRID PROPS] :: ${JSON.stringify(this.props)}`)

        // console.log(`[LEFT DESCRIPTION GRID] :: ${JSON.stringify(name)}`)
        return(
          <Grid 
            container
            justify='space-between'
            alignContent='center'
            direction='column'
            className={classes.leftGrid}>
              <Paper >
                <Grid 
                  container
                  alignContent="center"
                  justify="center">
                  <IconButton 
                    key={name}
                    disabled
                    name={ `${name}` } 
                    image={`../../public/${name}.png`} 
                    select = {() => {}}
                  />
                  <Grid 
                    container 
                    alignContent="center"
                    className={classes.typographyGrid} 
                    style={{width:'unset'}}>
                    <Typography component="div">
                        {/* <Box textAlign="center" fontWeight="fontWeightBold"> */}
                          {`${name}`}
                        {/* </Box> */}
                      </Typography>
                  </Grid>

                </Grid>
                <Grid 
                    container 
                    alignContent="center"
                    className={classes.descriptionGrid} 
                >
                    <Typography component="div">
                          {`${description}`.replace('\n','')}
                      </Typography>
                  </Grid>
              </Paper>
        </Grid>
        )
    }
}

export default withStyles(styles)(LeftDescriptionGrid)