import { createStore } from 'redux';
import reducers from './reducers';

const initialStore = {
    sidebar: {
        open: false
    }
};

const store = createStore(reducers, initialStore);

export default store;
