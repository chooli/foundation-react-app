import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import thunk from 'redux-thunk';
import {
    nodeTypesReducer
} from './App.redux-reducer';

const rootReducer = combineReducers({
    nodeTypes: nodeTypesReducer
});

const composeEnhancers = window.top.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            batchDispatchMiddleware,
            thunk
        ),
    ),
);

export default store;
