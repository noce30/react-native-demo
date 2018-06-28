import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import reducer from './reducers'

const sagaMiddleWare = createSagaMiddleWare()

export default createStore(reducer,applyMiddleware(sagaMiddleWare));