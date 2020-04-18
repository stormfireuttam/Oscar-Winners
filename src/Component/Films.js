import React from 'react';
import {FilmsList} from "../data/FilmsList";
import {Link} from 'react-router-dom'; 
import './Actors.css';

const Films= (props) => {
    let films = FilmsList.map((person) => {
        return(
            <div className="actors-container">
                <a>
                    <div className="actor-image" style={{backgroundImage: 'url(' + person.img_src + ')'}}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        );
    });

    return(
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div> 
            <h2>Best Film 2019</h2>
            <div className="container">
                {films}
            </div>
        </div>
    );
}

export default Films;