import CsaComponent from './Components/CsaComponent'
import SideNav from './Components/SideNav'

const Csa = () => {
  return (
    <div  className=" w-full min-h-screen flex justify-start items-start ">
      <SideNav/>
      <CsaComponent/>
    </div>
  )
}

export default Csa