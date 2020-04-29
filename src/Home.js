import React from 'react';
import Accordion from './Accordion';

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

    render() {
        return (
            <div>
                {this.state.posts.map (acc => <Accordion posts={this.state.posts} key={acc.id} /> )}
            </div>
        )
    };
};

export default Home;