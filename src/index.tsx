import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from '@reach/router'
import Login from './Pages/Login';
import Products from './Pages/Products'


ReactDOM.render(
    <Router>
        <Login path="/login" />
        <Products path="/products"/>
    </Router>, document.getElementById('root')
);

