import BranchListComponent from "./Components/BranchListComponent"
import SideNav from "./Components/SideNav"
import TopBar from "./Components/TopBar"

const BranchList = () => {
  return (
   <div className="w-screen h-screen">
    <TopBar/>

    <div  className="  flex justify-start items-start ">
      <SideNav/>
      <BranchListComponent/>
    </div>
   </div>
  )
}

export default BranchList