import React, {Component} from 'react';
import Comment from "../comment/Comment";

class Comments extends Component {

    state = {comments: [], selectComment: null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromApi => {
                this.setState({comments: commentsFromApi});
            })
    }

    selectThisComment = (id) => {
        let comment = this.state.comments.find(value => value.id === id);
        this.setState({selectComment : comment});
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
                    selectComment && <Comment item = {selectComment}/>
                }
            </div>
        );
    }
}

export default Comments;