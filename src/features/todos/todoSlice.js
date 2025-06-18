import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(t => t.id === action.payload.id);
      if (task) task.text = action.payload.newText;
    },
  },
});

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
