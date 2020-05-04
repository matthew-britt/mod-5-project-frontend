import React from 'react';
import Accordion from './Accordion';
import Login from './Login'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            // newPosts: []
        };
    };

    componentDidMount() {
        this.fetchPosts();
    };

    fetchPosts = () => {
        fetch('http://localhost:4000/posts')
            .then(resp => resp.json())
            .then(posts => this.setState({posts}))
    };

    // componentDidUpdate() {
    //     event.preventDefault();
    //     this.deletePost();
        
    // };

    deletePost = (postId) => {
        fetch(`http://localhost:4000/posts/${postId}`, {
          method: 'DELETE',
        })
          .then((resp) => resp.json())
          .then((resp) => {
              this.fetchPosts();
          });
        //   let newPosts = this.state.posts;
        //   this.setState({posts: newPosts});
          

      };

    render() {
        return (
            <div>
                {this.state.posts.map (post => <Accordion header={post.header} story={post.story} id={post.id} username={post.username} deletePost={this.deletePost}/> )}
            </div>
        )
    };
};

export default Home;