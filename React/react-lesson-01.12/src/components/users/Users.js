import React, {Component} from 'react';
import UserService from "../../services/serviceUser/UserService";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";

class Users extends Component {
    userService = new UserService();

    state = {users: []}
    async componentDidMount() {
       let users = await this.userService.getAllUsers();
       this.setState({users})
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {users.map(value => <User item = {value} key = {value.id}/>)}
                <div>
                    <Switch>
                        <Route path={'/users/:id'} render={() => {

                        }}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default Users;