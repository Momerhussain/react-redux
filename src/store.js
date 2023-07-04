import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { TodoReducer } from './reducers/TodoReducers';

// // create store use for create store
// // help us to apply middleware thunk
// const reducer = combineReducers({
//     // contain all of our reducers in an applictaion
//     Todo: TodoReducer
// })
// const insitalState = {};
// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     insitalState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )
// export default store
