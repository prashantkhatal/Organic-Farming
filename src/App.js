import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MenuBar from './containers/Menu';
import Contact from './components/Contact';
import Home from './components/Home';
import WhyOrganic from './components/WhyOrganic';
import Products from './components/Products';
import HealthBlogs from './components/HealthBlogs';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const title = 'Organic Farming*****';

const App = (props) => {

    return (
        <Router>
            <MenuBar > </MenuBar>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/mission" component={Home} />
                    <Route path="/whyorganic" component={WhyOrganic} />
                    <Route path="/products" component={Products} />
                    <Route path="/healthblogs" component={HealthBlogs} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;