import React, {Component} from 'react';
import Comment from "../comment/Comment";
import {CommentService} from "../../services/serviceComment/CommentService";

class Comments extends Component {
    commentService = new CommentService();
    state = {comments: [], selectComment: null}

    componentDidMount() {
        this.commentService.getAllComments().then(value => this.setState({comments: value}))
    }

    selectThisComment = (id) => {
        this.commentService.getCommentById(id).then(value => this.setState({selectComment: value}));
    }

    render() {
        let {comments, selectComment} = this.state
        return (
            <div>
                {
                    comments.map(value => (<Comment
                    item = {value}
                    key = {value.id}
                    selectThisComment = {this.selectThisComment}
                    />))
                }
                <hr/>
                {
                    selectComment && <Comment item = {selectComment} isShowBtn={true}/>
                }
            </div>
        );
    }
}

export default Comments;