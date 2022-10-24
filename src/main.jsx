import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer.js";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);