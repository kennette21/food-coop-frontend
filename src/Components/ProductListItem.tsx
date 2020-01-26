import React from 'react';

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
            <tr>
                <td><img className="item-image" src={imageSrc} alt="text" /></td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>
        )
    }
}

export default ProductListItem;