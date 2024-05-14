import PriceTableComponent from "./Components/PriceTableComponent"
import SideNav from "./Components/SideNav"

const PriceTable = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>

      <PriceTableComponent/>
    </div>
  )
}

export default PriceTable