import SideNav from "./Components/SideNav"
import StockInComponent from "./Components/StockInComponent"

const StockIn = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start ">
        <SideNav/>
        <StockInComponent/>
    </div>
  )
}

export default StockIn