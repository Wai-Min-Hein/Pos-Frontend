import SideNav from './Components/SideNav'
import CrmComponent from './Components/CrmComponent'

const Crm = () => {
  return (
    <div className=" w-screen h-screen flex justify-start items-start ">
        <SideNav/>

        <CrmComponent/>
    </div>
  )
}

export default Crm