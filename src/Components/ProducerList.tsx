import React from 'react';
import ProducerListItem, { ProducerListItemProps } from './ProducerListItem';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table'

// const List = styled.ul`
//     border: 2px solid black;
//     width: 600px;
//     margin: auto;
// `;

 const ListContainer = styled.div`
     display: flex;
     flex-direction: column;
     margin: auto;
 `;

class ProducerList extends React.Component {
    render() {
        const mockedListData: ProducerListItemProps[] = [
            {
                imageSrc: "https://picsum.photos/250",
                name: "Johnny's Jams",
                description: "Johnny's Jams: We got the jams. For real.",
                numProducts: 8,
            },
            {
                imageSrc: "https://picsum.photos/250",
                name: "Mary Jane's Cabbage",
                description: "Mary Jane's specializes in potent and pure cabbage for the everyday cabbage consumer.",
                numProducts: 12,
            }
        ]

        return (
            <ListContainer>
                <h2>Producer List</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Number of Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListItems(mockedListData)}
                    </tbody>
                </Table>
            </ListContainer>
        )
    }

    renderListItems(listItemData: ProducerListItemProps[]) {
        return listItemData.map(itemProps => {
            return <ProducerListItem
                {...itemProps}
            />
        });
    }
}

export default ProducerList;