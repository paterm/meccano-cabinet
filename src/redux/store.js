import { createStore } from 'redux';
import reducers from './reducers';

const initialStore = {
    sidebar: {
        open: true
    }
};

const store = createStore(reducers, initialStore);

export default store;
