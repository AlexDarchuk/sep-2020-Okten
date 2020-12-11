import React, {Component} from 'react';
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
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
                   <ul>
                       <li>
                           <Link to={'/comments'}>All Comments</Link>
                       </li>
                       <li>
                           <Link to={'/posts'}>All Posts</Link>
                       </li>
                   </ul>
                    <hr/>
                    <Switch>
                        <Route path = {'/comments'} render={() =>{
                                return <Comments/>
                        }}/>
                        <Route path = {'/posts'} render={() =>{
                            return <Posts/>
                        }}/>
                    </Switch>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;