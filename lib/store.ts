// "use client";
import logger from "redux-logger";

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {homeSlice} from "@/lib/slices/homeSlice";
import {resumeSlice} from "@/lib/slices/resumeSlice";

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
    [resumeSlice.name]: resumeSlice.reducer
})

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        devTools: false,
        // middleware: new MiddlewareArray().concat(logger),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false, // 禁用序列化检查
        }).concat(logger)
    })
}

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch =ReturnType<typeof makeStore>['dispatch'];