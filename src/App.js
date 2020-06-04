import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <Switch>
                    <Redirect exact from='/' to='/login' />
                    <Route path='/login' render={() => <Login/>} />
                </Switch>
            </Provider>
        </HashRouter>
    );
}

export default App;
