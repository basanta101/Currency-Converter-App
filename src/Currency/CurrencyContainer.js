import React, { Component } from "react";
import Currency from "./Currency";
import { connect } from "react-redux";
import actions from "./Action";

class CurrencyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyValue: 0
    };
    // console.log("props",props);
  }
  handleFormSubmit = e => {
    e.preventDefault();
    //console.log(e.target[0].value);
    const inrvalue = this.state.currencyValue;

    let newState = JSON.parse(JSON.stringify(this.props.currency));
    newState.currencies.forEach(currency => {
      currency.value = inrvalue * currency.rate;
    });
    //console.log("newstate",newState);
    //this.setState(newState);
    this.props.updateCurrencies(newState);
    // console.log("action dispatched");
  };
  handleOnChange = e => {
    // let newState=JSON.parse(JSON.stringify(this.state));
    // newState.currencyValue= e.target.value;

    // this.setState(newState);
    this.setState({
      currencyValue: e.target.value
    });
  };
  render() {
    // console.log("inside the component fetching the store (currency container.js)");
    return (
      <Currency
        currencyValue={this.state.currencyValue}
        handleFormSubmit={this.handleFormSubmit}
        handleOnChange={this.handleOnChange}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    currency: state.currency
  };
};
const mapDispatchToProps = {
  updateCurrencies: actions.updateCurrencies
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyContainer);
