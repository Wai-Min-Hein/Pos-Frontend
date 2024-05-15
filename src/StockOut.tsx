import SideNav from "./Components/SideNav"
import StockOutComponent from "./Components/StockOutComponent"

const StockOut = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start ">
        <SideNav/>
        <StockOutComponent/>
    </div>
  )
}

export default StockOut