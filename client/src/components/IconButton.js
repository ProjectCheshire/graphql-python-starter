import React from 'react';
import { Avatar, 
         withStyles, 
         Button
        } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

const styles = theme => ({
    card:{
      maxWidth: 'auto',
      padding:10,
      opacity:1,
      margin:30,
      backgroundColor:'black',
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

const IconButton = (props)  => {
  const { classes, name, image, select } = props;
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

export default withStyles(styles)(IconButton);