import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
           <div className="logo">
               <h2>ReserveBase</h2>
           </div>

           <nav>
               <Link to=''>Home</Link>
               <Link to=''>Flight</Link>
               <Link to=''>Car Rentalst</Link>
               <Link to=''>Attractions</Link>
               <Link to=''>Stays</Link>
           </nav>

           <div className="auth">
               <button>
                   Sign UP
               </button>

               <button>
                   Sign In
               </button>
           </div>
        </div>
    );
}

export default Navbar;
