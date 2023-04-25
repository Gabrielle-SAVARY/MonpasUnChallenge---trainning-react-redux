import { configureStore } from '@reduxjs/toolkit';
import input1Reducer from './reducers/input1';
import input2Reducer from './reducers/input2';

const store = configureStore({
  reducer: {
    input1: input1Reducer,
    input2: input2Reducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
