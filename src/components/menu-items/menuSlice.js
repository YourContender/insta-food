import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menu: [],
	current: [],
};

const menu = createSlice({
	name: "menu",
	initialState,
	reducers: {
		getMenuListFromDatabase: (state, action) => {
			state.menu = action.payload;
		},
		getCurrentProduct: (state, action) => {
			state.current = action.payload;
		},
	},
});

const { actions, reducer } = menu;

export default reducer;
export const { getMenuListFromDatabase, getCurrentProduct } = actions;
