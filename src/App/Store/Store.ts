import { configureStore } from "@reduxjs/toolkit";

const storage = {
    getItem: (key:any) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key:any, value:any) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key:any) => Promise.resolve(localStorage.removeItem(key)),
}

export const store=configureStore({})