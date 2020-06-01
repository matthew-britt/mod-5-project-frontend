import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav' >

                <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/">Home</Link >|


                <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/login">Login</Link>|


                <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/new">New Story</Link>|


                <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/history">History</Link>

               

            </div>
        );
    };
};

export default Nav;