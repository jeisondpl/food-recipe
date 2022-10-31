import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IResponse } from '../../types/IRecipe'

type state = {
  Vegetarian: IResponse | null
}

const initialState: state = {
  Vegetarian: null,
}

export const vegetarianSlice = createSlice({
  name: 'vegetarian',
  initialState,
  reducers: {
    setDataVegetarian: (state, { payload }: PayloadAction<IResponse>) => {
      console.log('payload', payload)
      state.Vegetarian = payload
    },
  },
})

export const { setDataVegetarian } = vegetarianSlice.actions
