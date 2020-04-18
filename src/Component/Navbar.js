import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/style.css';

const Navbar = (props) => {
    return(
        <nav>
          <h2 className="logo">
            <a href="#" className="logo-link">{props.title}</a>
          </h2>
          <ul className="nav-menu">
            <li><NavLink className="nav-menu-link" activeClassName="active" exact to="/" >Home</NavLink></li>
            <li><NavLink className="nav-menu-link" activeClassName="active" to="/actors" >Best Actor 2019</NavLink></li>
            <li><NavLink className="nav-menu-link" activeClassName="active" to="/actress" >Best Actress 2019</NavLink></li>
            <li><NavLink className="nav-menu-link" activeClassName="active" to="/films">Best Film 2019</NavLink></li>
          </ul>
        </nav>
    );  
}

export default Navbar;