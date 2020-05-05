import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav' >

                <Link style={{ color: '#FFF' }} to="/">Home</Link >|


                <Link style={{ color: '#FFF' }} to="/login">Login</Link>|


                <Link style={{ color: '#FFF' }} to="/new">New Post</Link>|


                <Link style={{ color: '#FFF' }} to="/history">History</Link>

               

            </div>
        );
    };
};

export default Nav;