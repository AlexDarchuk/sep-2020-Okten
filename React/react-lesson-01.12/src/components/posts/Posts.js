import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import {PostService} from "../../services/servicePost/PostService";

class Posts extends Component {
    postService = new PostService();
    state = {posts: [], selectPost: null}

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}))
    }

    selectThisPost = (id) => {
        this.commentService.getPostById(id).then(value => this.setState({selectPost: value}));
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
                    selectPost && <PostComponent item = {selectPost} isShowBtn={true}/>
                }
            </div>


        );
    }
}

export default Posts;