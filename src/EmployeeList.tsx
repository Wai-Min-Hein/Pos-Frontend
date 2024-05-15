import EmployeeListComponent from "./Components/EmployeeListComponent"
import SideNav from "./Components/SideNav"

const EmployeeList = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <EmployeeListComponent/>
    </div>
  )
}

export default EmployeeList