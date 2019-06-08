import React from 'react';
import {Card,CardBody,Table} from 'reactstrap';

const CurrencyList = (props) =>{
    return (
        <Card>
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rate</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.currencies.map((currency,index)=> <tr key={index}>
                                <td>{currency.symbol}</td>
                                <td>{currency.rate}</td>
                                <td>{currency.value}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );

}
export default CurrencyList;