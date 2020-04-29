import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>

                ______
                <Link to="/">Home</Link>

                ______
                <Link to="/login">Login</Link>

                ______
                <Link to="/new">New Post</Link>

                ______
                <Link to="/history">History</Link>
            </div>

        );
    };
};

export default Nav;