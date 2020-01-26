import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from '@reach/router';

const ItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid gray;
`;

const BaseItemContent = styled.div`
    border-right: 1px solid gray;
    display: flex;
    align-items: center;
    width: 100px;
`;

const Name = styled(BaseItemContent)`
    font-size: 16px;
`;

export interface ProductListItemProps extends RouteComponentProps {
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
                <img className="item-image" alt="product" src={imageSrc}/>
                <Name className="item-name">{name}</Name>
                <BaseItemContent className="item-description">{description}</BaseItemContent>
                <BaseItemContent className="item-quantity">{quantity}</BaseItemContent>
                <BaseItemContent className="item-price">{price}</BaseItemContent>
                <button className="item-action-button"></button>
            </ItemContainer>
        )
    }
}

export default ProductListItem;