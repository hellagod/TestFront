import React from 'react';
import Set from "./Set";
import Users from "./Users";
import Login from "../login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {TestTemplate} from "./test-template/TestTemplate";

class st_for_urls{
    isLogin: boolean = false;
}

class UrlsRouter extends React.Component<any, st_for_urls>{
    constructor(props : any) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }


    renderLogin() {
        return (
            <Router>
                <Redirect to={"/login"}/>
                <Switch >
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>);
    }

    renderMain(){
        return (
            <Router>
                <Redirect to={"/"}/>
                <div>
                    <div>
                        <Link to="/sets">Sets</Link>
                        <Link to="/users">Users</Link>
                        <Link to="/">Test-template</Link>
                    </div>
                    <Switch>
                        <Route path="/sets">
                            <ul>
                                <Set />
                            </ul>
                        </Route>

                        <Route path="/users">
                            <ul>
                                <Users />
                            </ul>
                        </Route>

                        <Route path="/">
                            <TestTemplate/>
                        </Route>
                    </Switch>
                </div>
            </Router>);
    }

    render() {
        return (
            <div className='App'>
                <div className='product-list'>
                    {(this.state.isLogin ? this.renderMain() : this.renderLogin())}
                </div>
            </div>
        )
    }
}

export default UrlsRouter;