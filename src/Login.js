import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                Log in and tell Trebek to suck it.
                <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
            </div>
        )
    };
};

export default Login;

