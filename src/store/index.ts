import {reducer as bookReducer} from "./slice/bookSlice";
import {reducer as orderReducer} from "./slice/bookOrderSlice";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice/studentSlice";



// const root = combineReducers({
//     book: bookReducer,
//     order: orderReducer,

// })

// cấu hình store
export const store = configureStore({
    reducer: {
        student : reducer,
    }
})