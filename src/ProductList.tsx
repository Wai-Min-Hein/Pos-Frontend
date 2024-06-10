import ProductListComponent from "./Components/ProductListComponent"
import SideNav from "./Components/SideNav"

// import { Notification } from '@mantine/core';
// import AlertContext from './AlertContext';
// import { useContext, useEffect } from "react";

const ProductList = () => {
  

  return (
    
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>

      <ProductListComponent/>
    </div>
  )
}

export default ProductList