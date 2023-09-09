import { configureStore } from "@reduxjs/toolkit";
import menu from "./menuSlice";

const store = configureStore({
	reducer: { menu },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
