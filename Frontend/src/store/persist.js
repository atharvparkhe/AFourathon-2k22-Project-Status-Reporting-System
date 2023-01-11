import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
