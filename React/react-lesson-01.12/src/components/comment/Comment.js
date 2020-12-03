import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {item, selectThisComment} = this.props;
        return (
            <div>
                {item.id} - {item.name} - {item.email} - {item.body}
                <button onClick={() => selectThisComment(item.id)}>Select me</button>
            </div>
        );
    }
}

export default Comment;