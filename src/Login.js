import React from 'react';
import './style.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
            <h4>"That's what she said."<br></br> -Michael Scott</h4>
            <form className="post-form"  >
              <label htmlFor="username">Your Username:</label>
              <input type="text" id="username"  maxLength="50" required />
              <label htmlFor="password">Your Password:</label>
              <input type="text" id="password"    maxLength="50" required />
              <button redirect to='/' >Login</button>
            </form>
          </div>
        )
    };
};

export default Login;

