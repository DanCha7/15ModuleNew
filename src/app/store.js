// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../Slice/todo/todoSlice'

// export const store = configureStore({
//   reducer:  todoReducer ,
// });

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '/src/Slice/todo/todoSlice.jsx';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;