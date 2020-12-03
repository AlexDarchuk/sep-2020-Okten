import React, {Component} from 'react';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

class App extends Component {
    render() {
        return (
            <div>
             <Posts/>
             <hr/>
             <Comments/>
            </div>
        );
    }
}

export default App;