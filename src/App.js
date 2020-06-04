import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
import User from "./components/User/User";

function App() {
    return (
        <HashRouter>
            <Provider store={store}>
                <div className='App'>
                    <div className='Container'>
                        <Switch>
                            <Redirect exact from='/' to='/login'/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/user' render={() => <User/>}/>
                        </Switch>
                    </div>
                </div>
            </Provider>
        </HashRouter>
    );
}

export default App;
