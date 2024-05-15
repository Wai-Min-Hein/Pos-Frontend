import IncomeTypeComponent from "./Components/IncomeTypeComponent"
import SideNav from "./Components/SideNav"

const IncomeType = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>

      <IncomeTypeComponent/>
    </div>
  )
}

export default IncomeType