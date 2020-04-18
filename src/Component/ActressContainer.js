import React from 'react';
import {ActressList} from '../data/ActressList';
import Actress from './Actress';
import Actresses from './Actresses';
import {Route} from 'react-router-dom';

const ActressContainer = () => {
    let actressUrl = ActressList.map((actress) => {
        return(
            <Route path={`/actress/${actress.url}`} render={()=> <Actress name={actress.name} details={actress.description} image={actress.profile_img}/>}/>
        );
    });
    return(
        <React.Fragment>
            <Route exact path="/actress" render={()=> <Actresses />}/>
            {actressUrl}
        </React.Fragment>
    )
}

export default ActressContainer;