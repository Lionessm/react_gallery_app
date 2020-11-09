import React, {Component} from 'react';
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
            <div className="container">
                <SearchForm />
                <Nav />
                <PhotoContainer />
                <NotFound />
            </div>
        );
    }
}

export default App;
