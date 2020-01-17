import React from 'react';
import Header from '../Components/Header';
import { RouteComponentProps, Link } from '@reach/router';
import ProductList from '../Components/ProductList';

class Dashboard extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className="cart-page-container">
                <Header/>
                <h3>CART CART CART</h3>
                <h2>checkout all dem products</h2>
                <ProductList/>
                <Link to="/">Back to dashboard</Link>
            </div>
        );
    }
}

export default Dashboard;