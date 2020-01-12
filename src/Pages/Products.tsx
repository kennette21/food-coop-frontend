import React from 'react';
import Header from '../Components/Header';
import ProductList from '../Components/ProductList';
import { RouteComponentProps } from '@reach/router';

class Products extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className="product-page-container">
                <Header/>
                <h3>This here is some Product Page ISH</h3>
                <ProductList/>
            </div>
        );
    }
}

export default Products;