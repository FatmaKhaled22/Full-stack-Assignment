import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combine';


const store = configureStore({ reducer: rootReducer });

export default store;