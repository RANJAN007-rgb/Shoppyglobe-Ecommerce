import { createSlice } from '@reduxjs/toolkit'

const initial = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initial,
  reducers: {
    addItem(state, action){
      const item = action.payload
      const found = state.items.find(i=>i.id===item.id)
      if(found){
        found.quantity += 1
      } else {
        state.items.push({...item, quantity:1})
      }
    },
    removeItem(state, action){
      state.items = state.items.filter(i=>i.id !== action.payload)
    },
    incrementQty(state, action){
      const it = state.items.find(i=>i.id===action.payload)
      if(it) it.quantity += 1
    },
    decrementQty(state, action){
      const it = state.items.find(i=>i.id===action.payload)
      if(it && it.quantity>1) it.quantity -= 1
    },
    clearCart(state){
      state.items = []
    }
  }
})

export const { addItem, removeItem, incrementQty, decrementQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
