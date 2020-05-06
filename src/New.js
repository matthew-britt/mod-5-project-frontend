import React from 'react';
import './style.css';
// import { withRouter } from 'react-router-dom'; 

class New extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "",
            story: "",
            username: "",
            user_id: 1
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
        fetch('http://localhost:4000/posts', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(post => {console.log(post)});
        this.props.history.push('/');
        //   event.target.reset();
        // console.log(this.state)
    };
    // this.props.addPost(post)

    render() {
        return (           
                
            <div className="post-box">
            <h4>"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way."  <br></br>-Michael Scott </h4>
           
            <form className="post-form" onSubmit={this.handleSubmit} >
              <label htmlFor="title">Your Title:</label>
              <input type="text" id="header" value={this.state.header} onChange={this.handleChange} maxLength="50" required />
              <label htmlFor="title">Your Name:</label>
              <input type="text" id="username" value={this.state.username} onChange={this.handleChange} maxLength="50" required />
              <label htmlFor="body">Your Story:</label>
              <textarea type="text" id="story" value={this.state.story} onChange={this.handleChange} cols="30" rows="10" maxLength="2000" required />
              <button redirect to='/' >Post Your Story</button>
            </form>
          </div>
        
        )
    };
};

export default New;