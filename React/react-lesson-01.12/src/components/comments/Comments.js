import React, {Component} from 'react';
import CommentService from "../../services/CommentService";
import Comment from "../comment/Comment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullComment from "../fullComment/FullComment";

class Comments extends Component {
    commentService = new CommentService();

    state = {comments:[]};

    async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match: {url}}= this.props;
        return (
            <div>
                {
                    comments.map(value => {
                        return <Comment item = {value} key = {value.id}/>
                    })
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) =>{
                        let {match: {params:{id}}} = props;
                        return <FullComment {...props} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Comments);