import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

class Posts extends Component {

    state = {posts: [], selectPost: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromApi => {
                this.setState({posts: postsFromApi});
            });
    }

    selectThisPost = (id) => {
      let post = this.state.posts.find(value => value.id === id);
      this.setState({selectPost : post});
    }

    render() {
    let {posts, selectPost} = this.state;
        return (
            <div>
                <h1>All posts</h1>
                {
                    posts.map(value => (<PostComponent
                        item = {value}
                        key = {value.id}
                        selectThisPost = {this.selectThisPost}
                    />))
                }
                <hr/>
                {
                    selectPost && <PostComponent item = {selectPost}/>
                }
            </div>


        );
    }
}

export default Posts;