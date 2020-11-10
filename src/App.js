import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NotFound from "./NotFound";
import General from "./General";


export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                <Switch>
                    <Route exact path='/' component={General} />
                    <Route path='/search/:query' component={General} />
                    <Route component={NotFound}/>
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

