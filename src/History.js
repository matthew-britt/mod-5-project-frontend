import React from 'react';

class History extends React.Component {
    constructor(props) {
        super(props)
    };  



    render() {
        return (
            <div>
                     
            <div className="post-box">
            <h4>"Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way."  <br></br>-Michael Scott </h4>
           
            <form className="post-form" >
              <label htmlFor="title">Your Title:</label>
              <input type="text" id="header" maxLength="50" required></input> 
              <label htmlFor="title">Your Name:</label>
              <input type="text" id="username"   maxLength="50" required />
              <label htmlFor="body">Your Story:</label>
              <textarea type="text" id="story"   cols="30" rows="10" maxLength="2000" required />
              <button redirect to='/' >Edit Your Story</button>
            </form>
          </div>
            </div>
        )
    };
};

export default History;