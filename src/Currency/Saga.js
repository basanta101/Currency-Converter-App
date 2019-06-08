import { takeEvery, put } from "redux-saga/effects";
import actions from './Action'


//worker saga
function* updateCurrencies(action){
    //console.log("inside the saga.js",action);
    yield put (actions.updateStore(action.payload)); 
}



//watcher saga
export  default function* watcherSaga(){
    yield takeEvery(actions.UPDATE_CURRENCIES,updateCurrencies);
};