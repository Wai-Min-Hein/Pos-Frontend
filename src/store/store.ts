import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import posOrderSlice from '../slice/posOrderSlice'
// ...

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    order: posOrderSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch