import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import combineReducers from '../reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

export default persistedReducer;
