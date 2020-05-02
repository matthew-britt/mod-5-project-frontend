import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>

                | 
                <Link to="/">Home</Link>| 

                
                <Link to="/login">Login</Link>| 

                
                <Link to="/new">New Post</Link>| 

                
                <Link to="/history">History</Link>|
                
            </div>

        );
    };
};

export default Nav;