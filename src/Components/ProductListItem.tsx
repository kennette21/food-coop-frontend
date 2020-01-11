import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.li`
    display: flex;
    flex-direction: row;
`

export type ProductListItemProps = {
    imageSrc: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
}

class ProductListItem extends React.Component<ProductListItemProps, {}> {
    render() {
        const {imageSrc, name, description, quantity, price} = this.props;

        return (
            <ItemContainer className="product-list-item-container">
                <img className="item-image" src={imageSrc}/>
                <div className="item-name">{name}</div>
                <div className="item-description">{description}</div>
                <div className="item-quantity">{quantity}</div>
                <div className="item-price">{price}</div>
                <button className="item-action-button"></button>
            </ItemContainer>
        )
    }
}

export default ProductListItem;