import ProductListComponent from "./Components/ProductListComponent"
import SideNav from "./Components/SideNav"

const ProductList = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>

      <ProductListComponent/>
    </div>
  )
}

export default ProductList