import React from 'react';
import ProductListItem, { ProductListItemProps } from './ProductListItem';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

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
                description: "Test test test test test test test test test test test",
                quantity: 1,
                price: 1,
            },
            {
                imageSrc: "https://picsum.photos/200",
                name: "Apples",
                description: "Test test test test test test test test test",
                quantity: 2,
                price: 2,
            }
        ]

        return (
            <ListContainer>
                <h2>Product List</h2>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListItems(mockedListData)}
                    </tbody>
                </Table>
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