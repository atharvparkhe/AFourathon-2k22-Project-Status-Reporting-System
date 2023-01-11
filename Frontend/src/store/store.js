import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './persist.js';
import { persistStore } from 'redux-persist';


const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };
