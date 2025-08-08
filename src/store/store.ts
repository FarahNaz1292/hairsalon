// src/store/store.ts (or index.ts if that's your structure)
import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./slices/cartSlice" 

const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
