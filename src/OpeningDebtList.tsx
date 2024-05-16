import OpeningDebtListComponent from "./Components/OpeningDebtListComponent"
import SideNav from "./Components/SideNav"

const OpeningDebtList = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <OpeningDebtListComponent/>
    </div>
  )
}

export default OpeningDebtList