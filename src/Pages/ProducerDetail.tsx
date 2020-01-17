import React from 'react';
import Header from '../Components/Header';
import { RouteComponentProps, Link } from '@reach/router';

interface ProducerDetailProps extends RouteComponentProps {
    id: string;
};

const ProducerDetail = (props: ProducerDetailProps) => (
    <div>
        <h2>Producer {props.id} </h2>
    </div>
)

// ^^^ that is a functional compontent. Seems like a simple page for now so i did it that way...
// export class ProducerDetail extends React.Component<ProducerDetailProps> {
//     render() {
//         return (
//             <div className="producer-detail-page-container">
//                 <Header/>
//                 <h3>This here is Producer {this.props.id}</h3>
//                 <div>Product list filtered for producer prods</div>
//             </div>
//         );
//     }
// }

export default ProducerDetail;