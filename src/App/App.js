import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home/Home';
import Calculator from '../containers/Calculator/Calculator';
import Nav from '../components/Nav/Nav';

import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/calculator' component={Calculator} />
                        <Route exact component={Calculator} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
