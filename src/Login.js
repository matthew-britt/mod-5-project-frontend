import React from 'react';
import './style.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            
        };
    };

    handleChange = event => {
        event.persist();
        this.setState({
          [event.target.id]: event.target.value
        });
      };

    handleSubmit = event => {
        event.preventDefault();
        this.props.history.push('/new');
        fetch('http://localhost:4000/users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(user => window.alert("I am Beyonce, always."));
        //   event.target.reset();
        // console.log(this.state)
    };


    render() {
        return (
            <div className="login"  >
            <h4>"That's what she said."<br></br> -Michael Scott</h4>
            <form className="post-form" onSubmit={this.handleSubmit} >
              <label htmlFor="username">Your Username:</label>
              <input type="text" id="name" placeholder="I am Beyonce, always." value={this.state.name} onChange={this.handleChange} maxLength="50" required />
              <label htmlFor="password">Your Password:</label>
              <input type="password" id="password" placeholder="It's Britney bitch." value={this.state.password} onChange={this.handleChange}  maxLength="50" required />
              <button redirect to='/new' >Login</button>
            </form>
          </div>
        )
    };
};

export default Login;

