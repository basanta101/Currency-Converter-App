const actions ={
    UPDATE_CURRENCIES: "UPDATE_CURRENCIES",
    updateCurrencies: (payload)=>({type:actions.UPDATE_CURRENCIES,payload}),

    UPDATE_STORE: "UPDATE_STORE",
    updateStore: (payload)=>({type:actions.UPDATE_STORE,payload}),


    }
// for thunk code
// const actions ={
//     UPDATE_CURRENCIES: "UPDATE_CURRENCIES",
//     updateCurrencies: (payload)=>{
//         console.log("inside the action",payload)
//         return {type:actions.UPDATE_CURRENCIES,payload};
//     }
// }
//console.log("inside the ACTIONS");
export default actions;

