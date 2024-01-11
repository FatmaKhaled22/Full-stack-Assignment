import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../services/category";

const initailCategories = await getCategories();


export const categorySlice = createSlice({
  name: 'category',
  initialState: initailCategories,
  reducers: {
    setCategories: (state, action) => {
      console.log('action', action);
      return state = action.payload;
    },
    
  }
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;