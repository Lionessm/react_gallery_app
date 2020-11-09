import React, {Component} from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import './App.css';
import SearchForm from "./SearchForm";
import Nav from "./MainNav";
import PhotoContainer from "./PhotoContainer";
import NotFound from "./NotFound";
import Config from "./config";


let apiKey = Config;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchForm  />
                    <Nav />
                    <PhotoContainer />
                    <Route exact path="/notFound" component={NotFound}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
