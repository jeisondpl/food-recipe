import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IResponse } from '../../types/IRecipe'

type state = {
  Cakes: IResponse | null
}

const initialState: state = {
  Cakes: null,
}

export const cakesSlice = createSlice({
  name: 'cakes',
  initialState,
  reducers: {
    setDataCakes: (state, { payload }: PayloadAction<IResponse>) => {
      state.Cakes = payload
    },
  },
})

export const { setDataCakes } = cakesSlice.actions
