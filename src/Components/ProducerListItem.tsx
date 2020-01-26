import React from 'react';

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