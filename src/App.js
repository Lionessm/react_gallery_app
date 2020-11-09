import React, {Component} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import Nav from "./MainNav";

class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchForm />
                <Nav />
            </div>
        );
    }
}

export default App;
