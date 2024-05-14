import SideNav from "./Components/SideNav"
import UserRightDetailComponent from "./Components/UserRightDetailComponent"

const UserRightDetail = () => {
  return (
    <div className="w-screen h-screen flex justify-start items-start">
        <SideNav/>
        <UserRightDetailComponent/>
    </div>
  )
}

export default UserRightDetail