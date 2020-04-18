import React from 'react';
import {ActorsList} from "../data/ActorsList";
import {Link} from 'react-router-dom'; 
import './Actors.css';

const Actors = (props) => {
    let actors = ActorsList.map((person) => {
        return(
            <div className="actors-container">
                <Link to={`/actors/${person.url}`}>
                    <div className="actor-image" style={{backgroundImage: 'url(' + person.img_src + ')'}}></div>
                </Link>
                <h3>{person.name}</h3>
            </div>
        );
    });

    return(
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div> 
            <h2>Best Actors 2019</h2>
            <div className="container">
                {actors}
            </div>
        </div>
    );
}

export default Actors;