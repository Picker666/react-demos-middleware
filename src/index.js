import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const logger = ({ dispatch, getState }) => (storeDispatch) => (action) => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    } else {
        return storeDispatch(action);
    }
};

// const createStoreWithMiddleware = applyMiddleware(logger);
// const enhancer = compose(createStoreWithMiddleware);
const enhancer = (createStoreApi) => applyMiddleware(logger)(createStoreApi);
const store = createStore(reducer, enhancer);

// const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
