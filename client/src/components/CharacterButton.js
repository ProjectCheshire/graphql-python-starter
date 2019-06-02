import React from 'react';
import { Avatar, 
         withStyles, 
         Button
        } from '@material-ui/core';


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

const CharacterButton = (props)  => {
  const { classes, name, image, select } = props;
   console.log('[SELECT]', select)
    return(
            <Button 
                // variant="outlined" 
                className={classes.card}
                onClick={(event) => select(event, name)}
                >
            <Avatar alt={name} src={image} className={classes.bigAvatar} />
           </Button>
    )
}

export default withStyles(styles)(CharacterButton);