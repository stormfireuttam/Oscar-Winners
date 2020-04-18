import React from 'react';
import {ActressList} from "../data/ActressList";
import {Link} from 'react-router-dom'; 
import './Actors.css';

const Actress = (props) => {
    let actress = ActressList.map((person) => {
        return(
            <div className="actors-container">
                <Link to={`/actress/${person.url}`}>
                    <div className="actor-image" style={{backgroundImage: 'url(' + person.img_src + ')'}}></div>
                </Link>
                <h3>{person.name}</h3>
            </div>
        );
    });

    return(
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div> 
            <h2>Best Actress 2019</h2>
            <div className="container">
                {actress}
            </div>
        </div>
    );
}


export default Actress;