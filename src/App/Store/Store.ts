import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthReducer from '../../Features/AuthSlice'
import { persistReducer, persistStore } from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import UserReducer from '../../Features/UserSlice'
import StaticReducer from '../../Features/StaticSlice'
import NotiReducer from '../../Features/NotiSlice'



const storage = {
    getItem: (key:any) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key:any, value:any) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key:any) => Promise.resolve(localStorage.removeItem(key)),
}

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({
    auth: AuthReducer,
    users:UserReducer,
    static:StaticReducer,
    noti:NotiReducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"]
            }
        })
})

export const persistor=persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

