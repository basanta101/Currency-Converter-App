import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './Sagas';
import currencyReducer from './../Currency/Reducer';
//import thunk from 'redux-thunk';
const rootReducer=combineReducers({
    currency:currencyReducer
});
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__||compose;

const sagaMiddleware = createSagaMiddleware();
const store=createStore(rootReducer,composeEnhancer(applyMiddleware(sagaMiddleware)));
//console.log("inside the store dude hellyeah");
sagaMiddleware.run(rootSagas);
//store.subscribe(() => console.log("store here",store.getState()));
export default store;
 

















// for redux thunk code below
// import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
// import CurrencyReducer from './../Currency/Reducer';
// import thunk from 'redux-thunk';
// const rootReducer=combineReducers({
//     currency:CurrencyReducer
// });
// const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__||compose
// const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));
// //console.log("inside the store dude hellyeah");
// store.subscribe(() => console.log("store here",store.getState()));
// export default store;
