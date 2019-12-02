import React from 'react';
import {Link} from 'react-router-dom';

const Navlinks=()=>{

        return (
            <ul className="nav-links">
                   <li>
                       <Link to="/" className="Link">Home</Link>
                   </li>
                   <li>
                       <Link to="/map" className="Link">Map</Link>
                   </li>
                   <li>
                       <Link to="/bookevents" className="Link">Book Events</Link>
                   </li>
                   <li>
                       <Link to="/recipe" className="Link">recipe App</Link>
                   </li>

            </ul>
        );
};

export default Navlinks;