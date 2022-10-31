import { configureStore } from '@reduxjs/toolkit'
import { soupSlice, cakesSlice, vegetarianSlice } from './slices'

export const store = configureStore({
  reducer: {
    soup: soupSlice.reducer,
    cakes: cakesSlice.reducer,
    vegetarian: vegetarianSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
