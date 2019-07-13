import React from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LeftDescriptionGrid from '../components/LeftDescriptionGrid'
import { Query } from "react-apollo";
import { GET_FACTION } from "../queries"

const  DescriptionPage = ({globalIconName}) => {
    console.log(`[Description Page] ${globalIconName}`);
    return(
        
         globalIconName ?         
         <Query query={GET_FACTION} variables={{name:globalIconName}}>
         {({loading, error, data}) => {
             if (loading) return null;
             if(error) return `Error! ${error}`
             console.log(`DATA :: ${JSON.stringify(data.factionName[0])}`)
             return (
                 <Grid container 
                    direction='row'
                    justify='space-around'
                    alignContent='center'
                 >
                     <LeftDescriptionGrid  name={globalIconName} description={data.factionName[0].description}/>
                     <LeftDescriptionGrid  name={globalIconName} description={data.factionName[0].description}/>

                 </Grid>
             )           
         }}
     </Query> : <div> Yo icon var is undefined</div>
            
        

    )


}



const mapStateToProps = (state) => {
    return (
        {globalIconName:state.icon.name}
    ) 
}  

export default connect(mapStateToProps)(DescriptionPage);