import CustomerComponent from "./Components/CustomerComponent"
import SideNav from "./Components/SideNav"

const Customer = () => {
  return (
    <div  className=" w-screen h-screen flex justify-start items-start ">
      <SideNav/>
      <CustomerComponent/>
    </div>
  )
}

export default Customer