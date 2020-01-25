import React from 'react';
import Header from '../Components/Header';
import { RouteComponentProps, Link } from '@reach/router';

class Dashboard extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className="product-page-container">
                <Header/>
                <h3>This is the dashboard bitchhhhh</h3>
                <h2>Explore by: </h2>
                <Link to="/products">Products</Link>
                <Link to="/producers">Producers</Link>
                <h2>Examine your Cart</h2>
                <Link to="/cart">Buy some great shit</Link>
            </div>
        );
    }
}

export default Dashboard;