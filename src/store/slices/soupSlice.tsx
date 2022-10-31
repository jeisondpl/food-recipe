import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IResponse } from '../../types/IRecipe'

type stateInitial = {
  Soup: IResponse | null
}

const initialState: stateInitial = {
  Soup: null,
}

export const soupSlice = createSlice({
  name: 'soup',
  initialState,
  reducers: {
    setDataSoup: (state, { payload }: PayloadAction<IResponse>) => {
      console.log('payload sopas', payload)
      state.Soup = payload
    },
  },
})

export const { setDataSoup } = soupSlice.actions
