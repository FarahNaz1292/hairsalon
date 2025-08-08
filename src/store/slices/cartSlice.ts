import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  quantity: number;
    name: string;
    price: number;
    image: string;  
    stock: number;
}

const initialState: CartItem[] = [];
export const loadCart = createAsyncThunk<CartItem[]>(
  'cart/loadCart',
  async () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  }
);
const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add(state,action:PayloadAction<CartItem>){
       const item = state.find(i => i.id === action.payload.id)
      if (item) {
        if (item.stock > 0) {
          item.quantity += 1
          item.stock -= 1
        }
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
          stock: action.payload.stock - 1,
        })
      }
    },
    increase(state, action: PayloadAction<string>) {
      const item = state.find(i => i.id === action.payload)
      if (item && item.stock > 0) {
        item.quantity += 1
        item.stock -= 1
      }
    },
    decrease(state, action: PayloadAction<string>) {
      const item = state.find(i => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        item.stock += 1
      }
    },
    remove(state, action: PayloadAction<string>) {
      return state.filter(i => i.id !== action.payload)
    },
  },
})
        
    
    

export default cartSlice.reducer;
export const {add, increase,decrease,remove}=cartSlice.actions