import React from 'react';
import {ActorsList} from '../data/ActorsList';
import Actor from './Actor';
import Actors from './Actors';
import {Route} from 'react-router-dom';

const ActorContainer = () => {
    let actorUrl = ActorsList.map((actor) => {
        return(
            <Route path={`/actors/${actor.url}`} render={()=> <Actor name={actor.name} details={actor.description} image={actor.profile_img}/>}/>
        );
    });
    return(
        <React.Fragment>
            <Route exact path="/actors" render={()=> <Actors />}/>
            {actorUrl}
        </React.Fragment>
    )
}

export default ActorContainer;