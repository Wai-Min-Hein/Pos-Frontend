import SideNav from "./Components/SideNav"
import UserAccountComponent from "./Components/UserAccountComponent"

const UserAccount = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <UserAccountComponent/>
    </div>
  )
}

export default UserAccount