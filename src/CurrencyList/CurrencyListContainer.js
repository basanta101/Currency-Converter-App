import React , { Component } from 'react';
import CurrencyList from './Currencylist';
import { connect } from 'react-redux';

class CurrencyListContainer extends Component{
    constructor(props){
        super(props)
        //console.log("inside currency list container the state is",props);
    }

    render(){
        return  (
          <CurrencyList
              currencies= {this.props.currency}
            />)
        
    }
}
const mapStateToProps= (state)=>{
    //console.log("currencyLIst here");
    return {
        currency: state.currency.currencies
    }
    
}
export default connect(mapStateToProps)(CurrencyListContainer);