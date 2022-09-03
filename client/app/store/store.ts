import {configureStore} from '@reduxjs/toolkit';
import auth from './slices/auth';
import cache from './slices/cache';

const store = configureStore({
  reducer: {
    auth,
    cache
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
