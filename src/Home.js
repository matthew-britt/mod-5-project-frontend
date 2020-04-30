import React from 'react';
import Accordion from './Accordion';
import New from './New';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
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

    // addPost = (post) => {
    //     this.setState({ posts: [...this.state.posts, post] })
    //   }

    render() {
        return (
            <div>
                {this.state.posts.map (post => <Accordion header={post.header} story={post.story} user={post.user_id} key={post.id} /> )}
            </div>
        )
    };
};

export default Home;