import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {CommentService} from "../../services/serviceComment/CommentService";
import {Route, Switch} from "react-router-dom";


class Comments extends Component {
    commentService = new CommentService();
    state = {comments: [], selectComment: null}

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments});
    }



    render() {
        let {comments} = this.state
        return (
            <div>
                {
                    comments.map(value => (<Comment
                    item = {value}
                    key = {value.id}
                    />))
                }
                <hr/>

                <div>
                    <Switch>
                        <Route path={'/coments/:id'} render={() => {

                        }}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default Comments;