import { createSlice } from '@reduxjs/toolkit'
const slice = createSlice({
  name: 'search',
  initialState: { query: '' },
  reducers: {
    setSearch(state, action){ state.query = action.payload }
  }
})
export const { setSearch } = slice.actions
export default slice.reducer
