import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = props => {
    return (
        <>
            <div className="my-nav navbar navbar-light d-flex justify-content-start rounded">
                <span className="navbar-brand h1 mb-0 text-primary">Chirpr</span>
                <NavLink className="nav-link" to="/">Timeline</NavLink>
                <NavLink className="nav-link" to="/new">Add Chirp</NavLink>
            </div>
        </>
    );
};

export default Navbar;