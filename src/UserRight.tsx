import SideNav from "./Components/SideNav"
import UserRightComponent from "./Components/UserRightComponent"

const UserRight = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <UserRightComponent/>
    </div>
  )
}

export default UserRight