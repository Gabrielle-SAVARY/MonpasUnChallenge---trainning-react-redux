import { configureStore } from '@reduxjs/toolkit';
import input1REducer from './reducers/input1';

const store = configureStore({
  reducer: {
    input1: input1REducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
