import React from 'react';
import Header from '../Components/Header';
import { RouteComponentProps, Link } from '@reach/router';

class Producers extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div className="producer-page-container">
                <Header/>
                <h3>This here is some Producer Page ISH</h3>
                <div>CATEGORIES</div>
                <div>this is a producer list</div>
                <Link to="1">Producer 1s detail page</Link>
            </div>
        );
    }
}

export default Producers;