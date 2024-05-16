import SideNav from "./Components/SideNav"
import DiscountComponent from "./Components/DiscountComponent"

const Discount = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <DiscountComponent/>
    </div>
  )
}

export default Discount