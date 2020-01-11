import React from 'react';
import ProductListItem, { ProductListItemProps } from './ProductListItem';

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
            <ul>
                {this.renderListItems(mockedListData)}
            </ul>
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
