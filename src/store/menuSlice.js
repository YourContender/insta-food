import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menu: [],
	current: [],
	basket: [],
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
		getBasketList: (state, action) => {
			state.basket = action.payload;
		},
	},
});

const { actions, reducer } = menu;

export default reducer;
export const { getMenuListFromDatabase, getCurrentProduct, getBasketList } =
	actions;
