import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer/userReducer';
import { conversationsReducer } from './reducer/conversationReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const reducer = combineReducers({
  user: userReducer,
  conversations: conversationsReducer,
});


const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];



const store = configureStore({
  reducer: persistedReducer, // Use persistedReducer here, not persistedReducer directly
  middleware,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',

});

export const persistor = persistStore(store);
export default store;
