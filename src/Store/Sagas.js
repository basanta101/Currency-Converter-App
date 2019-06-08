import { all } from 'redux-saga/effects';
import currencySaga from './../Currency/Saga';

export default function* rootSagas(){
   yield all([
       currencySaga()
   ]);
};