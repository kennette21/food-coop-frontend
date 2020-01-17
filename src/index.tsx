import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from '@reach/router'
import Login from './Pages/Login';
import Products from './Pages/Products';
import Dashboard from './Pages/Dashboard';
import Producers from './Pages/Producers';
import ProducerDetail from './Pages/ProducerDetail';
import Cart from './Pages/Cart';
import { prependOnceListener } from 'cluster';


/***
 * Routing behind the whole thing
 * Setup each page with a default and all that
 * AUTENTICATION(?)
 * Things we have:
 * - Product Search
 * - Login
 * - Producer Search (ProducerList)
 * - Producer Detail (ProductList)
 * 
 * 
 * Pages we need:
 * - Register page
 * - Categories/Filtering
 * - Producer Managenent
 * 
 * Comp/Modals:
 * - Product Model
 * - Cart Model
 * 
 */
ReactDOM.render(
    <Router>
        <Login path="login" />
        <Dashboard path="/"/>
        <Products path="products"/>
        <Producers path="producers"/>
        <ProducerDetail path="producers/:producerId" id="1"/> 
        <Cart path="cart"/>
    </Router>, document.getElementById('root')
);

// how in the actual %^$# do we get information from the route and pass to props??