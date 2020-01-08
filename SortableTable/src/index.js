import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';


import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index"
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
