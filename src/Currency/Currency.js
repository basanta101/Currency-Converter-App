import React from 'react';
import {Card,CardBody,Form,Label,FormGroup,Button,Input} from 'reactstrap';



const Currency = (props) =>{
    //console.log(props);
    //debugger;
    //console.log("inside currency.js");
    return (
        <Card>
            <CardBody>
                <Form onSubmit={props.handleFormSubmit}>
                    <FormGroup>
                      <Label>INR Rupees</Label>
                      <Input
                       type="text" 
                       placeholder="Indian Rupees" 
                       value={props.currencyValue}
                        onChange={props.handleOnChange}/>
                   </FormGroup>
                    <Button >convert</Button>
                </Form>
            </CardBody>
        </Card>

    );

}
export default Currency;