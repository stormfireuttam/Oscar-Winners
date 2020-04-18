import React from 'react';
import './Home.css';

const Home = (props) => {
    return(
        <div className="main-content">
            <div className="container">
                <h2>{props.title}</h2>
                <div className="home-image"></div>
                <div className="thumbnail-container">
                    <div className="home-thumbnail" id="t1"></div>
                    <div className="home-thumbnail" id="t2"></div>
                    <div className="home-thumbnail" id="t3"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;