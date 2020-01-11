import React from 'react';
import Header from '../Components/Header';
import ProductList from '../Components/ProductList';

class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <Header/>
                <h3>Username</h3>
                <input id="username" type="text" placeholder="have fun!" />
                <h3>Password:</h3>
                <input id="user-password" type="text" placeholder="password" />
                <div>
                    <button>Submit</button>
                    <button>Go to Dashboard</button>
                </div>
                <ProductList/>
            </div>
        );
    }
}

export default Login;