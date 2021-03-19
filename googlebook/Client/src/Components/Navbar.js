import React, {useState} from 'react';
import { Link } from 'react-router-dom';




function Navbar() {


    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
            <ul className="nav-menu active">
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Search
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Saved' className='nav-links'>
                        Saved
                    </Link>
                </li>  
            </ul>
           </div>
       </nav>
       </>
    )
}

export default Navbar

