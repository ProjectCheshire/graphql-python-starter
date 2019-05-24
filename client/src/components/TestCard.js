import React, { Component } from 'react';
import { Avatar, 
         withStyles, 
         Typography, 
         Card } from '@material-ui/core';


const styles = theme => ({
    card:{
      maxWidth: '5vw',
      padding:10,
      opacity:1,
      margin:30,
      backgroundColor:'black'
    },
    typeFont:{
      color:'yellow'
    },
    bigAvatar: {
        margin: 10,
        width: 80,
        height: 80,
      },
  });

//TODO -> Convert into a functional Component
//TODO -> Rename to something more viable to the app
class TestCard extends Component{
    render(){
        const { classes, name, image } = this.props;
        return(
            <Card 
                container 
                className={classes.card} 
                root={{opacity:1}}>
            <Avatar alt={name} src={image} className={classes.bigAvatar} />
          </Card>
        )
    }
}

export default withStyles(styles)(TestCard);