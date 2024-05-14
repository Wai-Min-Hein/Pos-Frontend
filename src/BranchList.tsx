import BranchListComponent from "./Components/BranchListComponent"
import SideNav from "./Components/SideNav"

const BranchList = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <BranchListComponent/>
    </div>
  )
}

export default BranchList