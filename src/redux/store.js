import { configureStore } from "@reduxjs/toolkit";
import {beatsReducer} from "@/redux/slices/beats";
import { authReducer } from "./slices/auth";


const store = configureStore({
  reducer: {
    beats: beatsReducer,
    auth: authReducer
  },
});

export default store;
