import React, {Component} from 'react';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                   <div>
                       <Link to={'/users'}>
                           users
                       </Link>
                   </div>
                   <div>
                       <Link to={'/posts'}>
                           posts
                       </Link>
                   </div>
                   <div>
                       <Link to={'/comments'}>
                           comments
                       </Link>
                   </div>
                    <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => {
                            return <Users/>
                        }}/>
                        <Route path={'/posts'} render={() => {
                            return <Posts/>
                        }}/>
                        <Route path={'/comments'} render={() => {
                            return <Comments/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;