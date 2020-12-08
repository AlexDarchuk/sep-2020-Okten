import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";
import {PostService} from "../../services/servicePost/PostService";
import {Route, Switch} from "react-router-dom";


class Posts extends Component {
    postService = new PostService();
    state = {posts: [], selectPost: null}

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts})
    }


    render() {
    let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => (<PostComponent
                        item = {value}
                        key = {value.id}
                    />))
                }
                <hr/>

                <div>
                    <Switch>
                        <Route path={'/posts/:id'} render={() => {

                        }}/>

                    </Switch>
                </div>
            </div>


        );
    }
}

export default Posts;