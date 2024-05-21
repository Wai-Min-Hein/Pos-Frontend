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
}

// Define the initial state using that type
const initialState: initialStateInterface = {
  orders: [],
};

export const posOrderSlice = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addMenus: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;
      const menuExisted = state.orders?.filter(
        (order) => order.id == currentMenu.id
      );

      if (menuExisted && menuExisted.length > 0) {
        const filteredMenus = state.orders?.filter(
          (order) => order.id != currentMenu.id
        );

        const addQtyMenu = {
          ...currentMenu,
          quantity: menuExisted[0].quantity + 1,
        };

        state.orders = filteredMenus
          ? [addQtyMenu, ...filteredMenus]
          : [addQtyMenu];
      } else {
        state.orders?.push(currentMenu);
      }
    },
    increaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      const filteredMenus = state.orders?.filter(
        (order) => order.id != currentMenu.id
      );

      const addQtyMenu = { ...currentMenu, quantity: currentMenu.quantity + 1 };

      state.orders = filteredMenus
        ? [addQtyMenu, ...filteredMenus]
        : [addQtyMenu];
    },
    decreaseMenuQty: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      if(currentMenu.quantity >1){
        state.orders = state.orders
        ? state.orders.map((order) =>
            order.id === currentMenu.id
              ? { ...order, quantity: order.quantity - 1 }
              : order
          )
        : state.orders;
      }

      

    },

    deleteMenu: (state, action: PayloadAction<orderedMenusInterface>) => {
      const currentMenu = action.payload;

      const filteredMenus = state.orders?.filter(
        (order) => order.id != currentMenu.id
      );

      state.orders = filteredMenus ? filteredMenus : state.orders;
    },
  },
});

export const { addMenus, increaseMenuQty, decreaseMenuQty, deleteMenu } =
  posOrderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order.orders;

export default posOrderSlice.reducer;
