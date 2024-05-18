import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

// Define a type for the slice state
interface orderedMenusInterface {
    id: string;
    code: string;
    category: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

  interface initialStateInterface {
    orders: orderedMenusInterface[] | null,
  }

// Define the initial state using that type
const initialState: initialStateInterface = {
  orders: []
}

export const posOrderSlice = createSlice({
  name: 'order',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMenus: (state, action: PayloadAction<orderedMenusInterface>) => {
       

        
            state.orders?.push(action.payload)
         
    },
    increaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
        const currentMenu = action.payload

        const filteredMenus = state.orders?.filter(order => order.id != currentMenu.id)

        const addQtyMenu = {...currentMenu,quantity:currentMenu.quantity+1}

        state.orders = filteredMenus?  [...filteredMenus, addQtyMenu]: [addQtyMenu]



    },
    decreaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
        const currentMenu = action.payload

        const filteredMenus = state.orders?.filter(order => order.id != currentMenu.id)


            const addQtyMenu =currentMenu.quantity>1? {...currentMenu,quantity:currentMenu.quantity-1}: currentMenu
       

        state.orders = filteredMenus?  [...filteredMenus, addQtyMenu]: [addQtyMenu]



    }
    
  },
})

export const { addMenus,increaseMenuQty,decreaseMenuQty } = posOrderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order.orders

export default posOrderSlice.reducer