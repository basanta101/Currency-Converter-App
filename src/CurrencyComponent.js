import React, {Component}from 'react';
import {Container, Row,Col,Jumbotron} from 'reactstrap';
import CurrencyContainer from './Currency/CurrencyContainer';
import CurrencyListContainer from './CurrencyList/CurrencyListContainer';

class CurrencyComponent extends Component{
    constructor(){
        super()        
    }
    
    render(){
       // console.log("state",this.state);
        return(
            <Container>
                <Row>
                    <Col>
                      <h1>CurrencyConverterApp</h1>
                      <Jumbotron>
                          <CurrencyContainer/>
                          <CurrencyListContainer/> 
                      </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default CurrencyComponent;