import React, {Component} from 'react';
import './App.css';
import SearchForm from "./SearchForm";

class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchForm />
            </div>
        );
    }
}

export default App;
