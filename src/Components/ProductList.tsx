import React from 'react';
import ProductListItem, { ProductListItemProps } from './ProductListItem';
import styled from 'styled-components';

const List = styled.ul`
    border: 2px solid black;
    width: 600px;
    margin: auto;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`;

class ProductList extends React.Component {
    render() {
        const mockedListData: ProductListItemProps[] = [
            {
                imageSrc: "https://picsum.photos/200",
                name: "Bunnies",
                description: "",
                quantity: 1,
                price: 1,
            },
            {
                imageSrc: "https://picsum.photos/200",
                name: "Apples",
                description: "",
                quantity: 2,
                price: 2,
            }
        ]

        return (
            <ListContainer>
                <h2>Product List</h2>
                <List>
                    {this.renderListItems(mockedListData)}
                </List>
            </ListContainer>
        )
    }

    renderListItems(listItemData: ProductListItemProps[]) {
        return listItemData.map(itemProps => {
            return <ProductListItem
                {...itemProps}
            />
        });
    }
}

export default ProductList;