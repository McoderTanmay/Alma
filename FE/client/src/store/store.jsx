import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import popUpReducer from "./slices/popUpSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        popUp: popUpReducer,
        post: postReducer
    }
});

export default store;