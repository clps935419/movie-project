import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "@/store/slice/authSlice";
import maskReducer from "@/store/slice/maskSlice.js";
import publicReducer from "@/store/slice/publicSlice.js";


const SYSTEM_NAME = process.env.REACT_APP_NAME || "test";
const reducers = combineReducers({
  authReducer,
  maskReducer,
  publicReducer,
});

const store = configureStore({
  reducer: { [SYSTEM_NAME]: reducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
