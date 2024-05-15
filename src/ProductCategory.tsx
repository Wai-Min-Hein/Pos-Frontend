import ProductCategoryComponent from "./Components/ProductCategoryComponent"
import SideNav from "./Components/SideNav"

const ProductCategory = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <ProductCategoryComponent/>
    </div>
  )
}

export default ProductCategory