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
  tax: number;
  paymentMethod: string;
  area?: string;
}

interface initialStateInterface {
  orderList: orderListInterface[];
}

const initialState: initialStateInterface = {
  orderList: [],
};

const orderListSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<orderListInterface>) => {
      state.orderList.push(action.payload);
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orderList = state.orderList.filter(order => order.orderId !== action.payload);
    },
    updateOrder: (state, action: PayloadAction<orderListInterface>) => {


      const index = state.orderList.findIndex(order => order.orderId === action.payload.orderId);
      if (index !== -1) {
        state.orderList[index] = action.payload;
      }

      console.log(action.payload);

    },
  },
});

export const { addOrder, deleteOrder, updateOrder } = orderListSlice.actions;

export const selectOrderList = (state: RootState) => state.orderList.orderList;

export default orderListSlice.reducer;
