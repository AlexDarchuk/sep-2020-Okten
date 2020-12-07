import React, {Component} from 'react';

class PostComponent extends Component {
    render() {
        let {item, selectThisPost, isShowBtn} = this.props;
        return (
            <div>
                {item.id} - {item.title} - {item.body}
                {!isShowBtn &&
                    <button onClick={() =>selectThisPost(item.id)}>Select me</button>}
            </div>
        );
    }
}

export default PostComponent;