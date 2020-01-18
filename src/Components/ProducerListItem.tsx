import React from 'react';
//import styled from 'styled-components';
//import ProducerList from './ProducerList';

//  const ItemContainer = styled.td`
//      justify-content: space-between;
//      border-bottom: 2px solid gray;
//  `;

// const BaseItemContent = styled.div`
//     border-right: 1px solid gray;
//     display: flex;
//     align-items: center;
//     width: 100px;
// `;

// const Name = styled(BaseItemContent)`
//     font-size: 16px;
// `;

export type ProducerListItemProps = {
    imageSrc: string;
    name: string;
    description: string;
    numProducts: number;
}

class ProducerListItem extends React.Component<ProducerListItemProps, {}> {
    render() {
        const { imageSrc, name, description, numProducts } = this.props;

        return (
            <tr>
                <td><img className="item-image" src={imageSrc} alt="text" /></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{numProducts}</td>
            </tr>
        );
    }
}

export default ProducerListItem;

// class ProducerListItem extends React.Component<ProducerListItemProps, {}> {
//     render() {
//         const {imageSrc, name, description, numProducts} = this.props;

//         return (
//             <ItemContainer className="product-list-item-container">
//                 <img className="item-image" src={imageSrc} alt="text"/>
//                 <Name className="item-name">{name}</Name>
//                 <BaseItemContent className="item-description">{description}</BaseItemContent>
//                 <BaseItemContent className="num-products">{numProducts}</BaseItemContent>
//                 <button className="item-action-button"></button>
//             </ItemContainer>
//         )
//     }
// }