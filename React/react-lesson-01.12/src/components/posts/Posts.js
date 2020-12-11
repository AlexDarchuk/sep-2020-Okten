import React, {Component} from 'react';
import PostService from "../../services/PostService";
import Post from "../post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../fullPost/FullPost";

class Posts extends Component {
    postService = new PostService();

    state = {posts:[]}

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;
        let {match: {url}}= this.props;
        return (
            <div>
                {
                    posts.map(value => {
                        return <Post item = {value} key = {value.id}/>
                    })
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) =>{
                        let {match: {params: {id}}} = props;
                        return <FullPost {...props} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Posts);