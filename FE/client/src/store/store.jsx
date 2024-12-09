import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import popUpReducer from "./slices/popUpSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        popUp: popUpReducer
    }
});

export default store;