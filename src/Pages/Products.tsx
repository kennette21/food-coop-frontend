import React from 'react';
import Header from '../Components/Header';
import ProductList from '../Components/ProductList';
import ProductModal from '../Components/ProductModal';
import { RouteComponentProps, Link } from '@reach/router';

class Products extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className="product-page-container">
                <Header/>
                <h3>This here is some Product Page ISH</h3>
                <ProductList/>
                <Link to="/cart">View Cart</Link>

                {ProductModal}
            </div>
        );
    }
}

export default Products;