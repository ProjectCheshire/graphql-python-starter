import React from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LeftDescriptionGrid from '../components/LeftDescriptionGrid'

const  DescriptionPage = ({globalIcon}) => {

    return (
        <Grid container 
                direction='row'
                justify='center'
                alignContent='center'
                >
            <LeftDescriptionGrid  name={globalIcon.name}/>
            <LeftDescriptionGrid />
        </Grid>
    )
    
}


const mapStateToProps = (state) => {
    return (
        {globalIcon:state.icon}
    ) 
}  

export default connect(mapStateToProps)(DescriptionPage);