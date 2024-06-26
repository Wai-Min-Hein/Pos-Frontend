
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

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
  orders: orderedMenusInterface[] | null;
  orderId: number;
  customerInfo: string;
  discount: number;
  tax: number;
  paymentMethod: string;
}

// Define the initial state using that type
const initialState: initialStateInterface = {
  orders: [],
  orderId: 0,
  customerInfo: '',
  discount: 0,
  tax: 0,
  paymentMethod: '',
};

export const posOrderSlice = createSlice({
  name: "orderList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMenus: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;
      const menuExisted = state.orders?.filter(
        (order) => order.id == currentMenu.id
      );

      if (menuExisted && menuExisted.length > 0) {
        state.orders = state.orders?.map(order =>
          order.id === currentMenu.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        ) || state.orders;
      } else {
        state.orders?.push(currentMenu);
      }
    },
    increaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      state.orders = state.orders?.map(order =>
        order.id === currentMenu.id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      ) || state.orders;
    },
    decreaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      if (currentMenu.quantity > 1) {
        state.orders = state.orders?.map(order =>
          order.id === currentMenu.id
            ? { ...order, quantity: order.quantity - 1 }
            : order
        ) || state.orders;
      }
    },
    deleteMenu: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      const filteredMenus = state.orders?.filter(
        (order) => order.id != currentMenu.id
      );

      state.orders = filteredMenus ? filteredMenus : state.orders;
    },
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },
    setOrderId: (state, action: PayloadAction<number>) => {
      state.orderId = action.payload;
    },
    setCustomerInfo: (state, action: PayloadAction<string>) => {
      state.customerInfo = action.payload;
    },
    setDis: (state, action: PayloadAction<string>) =>{
      state.discount =Number( action.payload)  
    },
    setTax: (state, action: PayloadAction<string>) =>{
      state.tax =Number( action.payload)
    },
    onOrderConfirm: (state) => {
      state.orders = [];
      state.customerInfo = '';
      state.discount = 0;
      state.tax = 0;
      state.paymentMethod = '';
    },

    setExistedOrderToState : (state, action: PayloadAction<initialStateInterface>) =>{

      state.orders = action.payload.orders
      state.customerInfo = action.payload.customerInfo
      state.discount = action.payload.discount
      state.tax = action.payload.tax
      state.paymentMethod = action.payload.paymentMethod
    },
  },
});

export const { addMenus, increaseMenuQty, decreaseMenuQty, deleteMenu, setPaymentMethod, setOrderId, setCustomerInfo,setDis, setTax, onOrderConfirm,setExistedOrderToState } =
  posOrderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order.orders;

export default posOrderSlice.reducer;

