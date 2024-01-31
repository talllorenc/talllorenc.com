import { configureStore } from "@reduxjs/toolkit";
import {beatsReducer} from "@/redux/slices/beats";


const store = configureStore({
  reducer: {
    beats: beatsReducer,
  },
});

export default store;
