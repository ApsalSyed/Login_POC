// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { ReducerLogin } from './reducer/LoginReducer'; 

const persistConfig = {
  key: 'root',
  storage
};

const  persistedReducer= persistReducer(persistConfig,ReducerLogin)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
