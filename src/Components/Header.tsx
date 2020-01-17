import React from 'react';
import styled from 'styled-components';

const CoopHeader = styled.header`
    background-color: orange
`;

class Header extends React.Component {
    render() {
        return (
            <CoopHeader className="App-header">
                <h1>Food Coop</h1>
            </CoopHeader>
        );
    }
}

export default Header;