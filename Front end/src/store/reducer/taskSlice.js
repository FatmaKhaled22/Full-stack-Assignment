import { createSlice } from "@reduxjs/toolkit";
import { getTasksByUser } from "../../services/tasks";

const id = localStorage.getItem("userid");
const initialState = await getTasksByUser(id);

export const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    setCompletedTasks: (state, action) => {
    return state = action.payload;
    },
  }
});

export const { setCompletedTasks } = taskSlice.actions;

export default taskSlice.reducer;
