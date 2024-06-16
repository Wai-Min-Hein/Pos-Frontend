import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";




interface orderedMenusInterface {
    id: string;
    code: string;
    category: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  interface orderListInterface {
    orders: orderedMenusInterface[] | null;
    orderId: number;
    customerInfo: string;
    discount: number;
    tax:number;
    paymentMethod: string,
    area?: string 
  
  }

  interface initialStateInterface {
    orderList: orderListInterface[];
  }
  


  

  const initialState: initialStateInterface = {
    orderList: []
  }

const orderListSlice = createSlice({
    name: "orderList",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<orderListInterface>) => {
            state.orderList.push(action.payload);
        },
        
    }
})

export const { addOrder } = orderListSlice.actions;

export const selectCount = (state: RootState) => state.orderList.orderList


export default orderListSlice.reducer;